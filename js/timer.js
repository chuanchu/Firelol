$().ready(function () {
    $(".mike").click(function () {
        var div = $(this);
        var init = $(this).data('time');
        div.html(init);
        var timer = setInterval(function () {
            init = countDown(init, div, timer);
        }, 1000);
    });
});

function countDown(time, div, timerId) {
    div.html(time--);
    if (time == 0) {
        clearInterval(timerId);
    }
    return time;
}