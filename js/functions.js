
/* infousuario*/

function loadJSON(form) {
    var url = "https://prod.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + form.nombre.value + "?api_key=654c8f4a-de83-42b4-a424-ee693a76cbb2";
    $.ajax({
        url: url,
        method: "GET"
    }).done(function (data) {
            $("#jid").html(data[ form.nombre.value].id);
            $("#jname").html(data[ form.nombre.value].name);
            $("#jprof").html(data[ form.nombre.value].profileIconId);
            $("#jlevel").html(data[ form.nombre.value].summonerLevel);
            $("#jdate").html(data[ form.nombre.value].revisionDate);
            $("#userinfo").show();
        });
}

/*****************************/

/*Timers*/

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

/*********************************/




/*Ultimas Partidas*/

function getid(form)
{


    var url = "https://prod.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" + form.nombre.value + "?api_key=654c8f4a-de83-42b4-a424-ee693a76cbb2";
    $.ajax({
        url: url,
        method: "GET"
    }).done(function (data) {


            var id_user = data[form.nombre.value].id;

            getlastgames(id_user);
        });


}



function getlastgames(id)
{
    var url = "https://prod.api.pvp.net/api/lol/euw/v1.3/game/by-summoner/" + id + "/recent?api_key=654c8f4a-de83-42b4-a424-ee693a76cbb2";

    $.ajax({
        url: url,
        method: "GET"
    }).done(function (data) {

            var num = 0;

            while (num < 10) {

                var gm = 'gamemode' + num;
                var gt = 'gametype' + num;
                var sgt = 'subgametype' + num;
                var map = 'map' + num;
                var champ = 'champion' + num;
                var sp1 = 'spell1' + num;
                var sp2 = 'spell2' + num;
                var ipe = 'ip' + num;
                var wn = 'win' + num;

                document.getElementById(gm).innerHTML=data.games[num].gameMode;
                document.getElementById(gt).innerHTML=data.games[num].gameType;
                document.getElementById(sgt).innerHTML=data.games[num].subType;
                document.getElementById(map).innerHTML=data.games[num].mapId;
                document.getElementById(champ).innerHTML=data.games[num].championId;
                document.getElementById(sp1).innerHTML=data.games[num].spell1;
                document.getElementById(sp2).innerHTML=data.games[num].spell2;
                document.getElementById(ipe).innerHTML=data.games[num].ipEarned;
                document.getElementById(wn).innerHTML=data.games[num].stats.win;
                num++;
            }


            $("#vacia").hide();
            $("#recentgames").show();

        });
}




/**********************************/



