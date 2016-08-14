let format = function (n) {
    return n < 10 ? "0" + n : n;
}
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let interval = function(time, cb){
    let current_date = new Date().getTime();
    let target_date = new Date(time).getTime();
    let difference = target_date - current_date;
    let over, hours, minutes, seconds;
    if (difference < 0) {
        over = true;
        hours = "00";
        minutes = "00";
        seconds = "00";
        cb();
    } else {
        hours = format(Math.floor((difference % _day) / _hour));
        minutes = format(Math.floor((difference % _hour) / _minute));
        seconds = format(Math.floor((difference % _minute) / _second));
    }
    return {
        over: over,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}
export default {
    ready: function() {
        let _this = this;
        let time = this.countdown.time;
        this.countdown.timer = setInterval(fn, 1000);
        fn();
        function fn(){
            let ret = interval(time, _this.clearCountdown);
            _this.countdown.over = ret.over;
            _this.countdown.hours = ret.hours;
            _this.countdown.minutes = ret.minutes;
            _this.countdown.seconds = ret.seconds;
        }
    },
    methods: {
        clearCountdown: function() {
            clearInterval(this.countdown.timer);
        }
    },
    beforeDestory: function() {
        this.clearCountdown();
    }
}
