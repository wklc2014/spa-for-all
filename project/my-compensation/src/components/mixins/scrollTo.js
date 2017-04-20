export default {
    handleScrollTo(to, time, cb) {
        $('html, body').animate({
            scrollTop: to
        }, time, () => {
            if (cb) {
                cb();
            }
        });
    }
};
