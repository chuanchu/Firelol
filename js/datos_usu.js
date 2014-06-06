


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