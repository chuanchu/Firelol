$().ready(function () {
    $(".timer").click(function () {
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
    if (time == -1) {
        clearInterval(timerId);
    }
    return time;
}
