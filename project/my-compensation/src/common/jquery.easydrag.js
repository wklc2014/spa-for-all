/**
 * EasyDrag 1.5 - Drag & Drop jQuery Plug-in
 *
 * Thanks for the community that is helping the improvement
 * of this little piece of code.
 *
 * For usage instructions please visit http://fromvega.com/scripts
 */

(function($) {

    // to track if the mouse button is pressed
    var isMouseDown = false;

    // to track the current element being dragged
    var currentElement = null;

    // callback holders
    var dropCallbacks = {};
    var dragCallbacks = {};
    var startCallbacks = {};

    // bubbling status
    var bubblings = {};

    // global position records
    var lastMouseX;
    var lastMouseY;
    var lastElemTop;
    var lastElemLeft;

    // track element dragStatus
    var dragStatus = {};

    // if user is holding any handle or not
    var holdingHandler = false;

    // returns the mouse (cursor) current position
    $.getMousePosition = function(e) {
        var posx = 0;
        var posy = 0;

        if (!e) var e = window.event;

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        };
        return {
            'x': e.clientX,
            'y': e.clientY
        };

        // return {
        //     'x': posx,
        //     'y': posy
        // };
    };

    // updates the position of the current element being dragged
    $.updatePosition = function(e) {
        var pos = $.getMousePosition(e);
        var winTop = $(window).scrollTop();
        var winLeft = $(window).scrollLeft();
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        var spanX = (pos.x - lastMouseX);
        var spanY = (pos.y - lastMouseY);

        var newElemTop = lastElemTop + spanY;
        var newElemLeft = lastElemLeft + spanX;

        var elemWidth = parseInt($(currentElement).outerWidth(true));
        var elemHeight = parseInt($(currentElement).outerHeight(true));

        // if (newElemTop < winTop) newElemTop = winTop;
        // if (newElemTop > (winTop + winHeight - elemHeight)) newElemTop = (winTop + winHeight - elemHeight);
        // if (newElemLeft < winLeft) newElemLeft = winLeft;
        // if (newElemLeft > (winLeft + winWidth - elemWidth)) newElemLeft = (winLeft + winWidth - elemWidth);
        $(currentElement).css("top", newElemTop);
        $(currentElement).css("left", newElemLeft);
    };

    // when the mouse is moved while the mouse button is pressed
    $(document).mousemove(function(e) {
        $.fn.clearSelect();
        if (isMouseDown && dragStatus[currentElement.id] != 'false') {
            // update the position and call the registered function
            $.updatePosition(e);
            if (dragCallbacks[currentElement.id] != undefined) {
                dragCallbacks[currentElement.id](e, currentElement);
            };
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    });

    // when the mouse button is released
    $(document).mouseup(function(e) {
        if (isMouseDown && dragStatus[currentElement.id] != 'false') {
            isMouseDown = false;
            if (dropCallbacks[currentElement.id] != undefined) {
                dropCallbacks[currentElement.id](e, currentElement);
            };

            if (!-[1, ]) {
                currentElement.releaseCapture();
            };
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    });

    // register the function to be called while an element is being dragged
    $.fn.ondrag = function(callback) {
        return this.each(function() {
            dragCallbacks[this.id] = callback;
        });
    };

    // register the function to be called when an element is dropped
    $.fn.ondrop = function(callback) {
        return this.each(function() {
            dropCallbacks[this.id] = callback;
        });
    };

    // disable the dragging feature for the element
    $.fn.dragOff = function() {
        return this.each(function() {
            dragStatus[this.id] = 'off';
        });
    };

    // enable the dragging feature for the element
    $.fn.dragOn = function() {
        return this.each(function() {
            dragStatus[this.id] = 'on';
        });
    };

    $.fn.onstart = function(callback) {
        return this.each(function() {
            startCallbacks[this.id] = callback;
        });
    };

    // set a child element as a handler
    $.fn.setHandler = function(handlerId) {
        return this.each(function() {
            var draggable = this;

            // enable event bubbling so the user can reach the handle
            bubblings[this.id] = true;

            // reset cursor style
            $(draggable).css("cursor", "");

            // set current drag status
            dragStatus[draggable.id] = "handler";

            // change handle cursor type
            $("#" + handlerId).css("cursor", "move");

            // bind event handler
            $("#" + handlerId).mousedown(function(e) {
                holdingHandler = true;
                $(draggable).trigger('mousedown', e);
            });

            // bind event handler
            $("#" + handlerId).mouseup(function(e) {
                holdingHandler = false;
            });
        });
    };

    $.fn.clearSelect = function() {
        return 'getSelection' in window ? function() { window.getSelection().removeAllRanges() } : function() {
            try { doc.selection.empty() } catch (e) {} }
    };

    // set an element as draggable - allowBubbling enables/disables event bubbling
    $.fn.easydrag = function(allowBubbling) {

        return this.each(function() {

            // if no id is defined assign a unique one
            if (undefined == this.id || !this.id.length) this.id = "easydrag" + (new Date().getTime());

            // save event bubbling status
            bubblings[this.id] = allowBubbling ? true : false;

            // set dragStatus
            dragStatus[this.id] = "on";

            // change the mouse pointer
            $(this).css("cursor", "move");

            // when an element receives a mouse press
            $(this).mousedown(function(e) {

                // just when "on" or "handler"
                if ((dragStatus[this.id] == "off") || (dragStatus[this.id] == "handler" && !holdingHandler)) return bubblings[this.id];

                // set it as absolute positioned
                $(this).css("position", "absolute");

                // set z-index
                // $(this).css("z-index", parseInt(new Date().getTime() / 1000));

                // update track variables
                isMouseDown = true;
                currentElement = this;
                if (!-[1, ]) {
                    currentElement.setCapture();
                };
                // retrieve positioning properties
                var pos = $.getMousePosition(e);
                lastMouseX = pos.x;
                lastMouseY = pos.y;

                lastElemTop = this.offsetTop;
                lastElemLeft = this.offsetLeft;

                $.updatePosition(e);
                if (startCallbacks[currentElement.id] != undefined) {
                    startCallbacks[currentElement.id](e, currentElement);
                };
                e.stopPropagation();
                e.preventDefault();
                return bubblings[this.id];
            });
        });
    };

})(jQuery);
