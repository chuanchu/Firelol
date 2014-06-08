function getid(form)
{
    var esp = 0;
    var str1 = "https://prod.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/";
    var str2 = form.nombre.value;
    var espacio = ' ';
    while (esp < 10) {
        var str2 = str2.replace(espacio, '');
        esp++;
    }
    var res = str1.concat(str2);
    var str3 = "?api_key=654c8f4a-de83-42b4-a424-ee693a76cbb2"
    var data_file = res.concat(str3);
    var http_request = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }catch (e){
        // Internet Explorer Browsers
        try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try{
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    http_request.onreadystatechange  = function(){
        if (http_request.readyState == 4  )
        {
            var jsonObj = JSON.parse(http_request.responseText);
            var id_user = jsonObj[str2].id;
            getlastgames(id_user);
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}


function getlastgames(id)
{
    var str1 = "https://prod.api.pvp.net/api/lol/euw/v1.3/game/by-summoner/";
    var str2 = id;
    var res = str1.concat(str2);
    var str3 = "/recent?api_key=654c8f4a-de83-42b4-a424-ee693a76cbb2"
    var data_file = res.concat(str3);
    var http_request = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }catch (e){
        // Internet Explorer Browsers
        try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try{
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    http_request.onreadystatechange  = function(){
        if (http_request.readyState == 4  )
        {
            var gamesjs = JSON.parse(http_request.responseText);
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
                document.getElementById(gm).innerHTML=gamesjs.games[num].gameMode;
                document.getElementById(gt).innerHTML=gamesjs.games[num].gameType;
                document.getElementById(sgt).innerHTML=gamesjs.games[num].subType;
                document.getElementById(map).innerHTML=gamesjs.games[num].mapId;
                document.getElementById(champ).innerHTML=gamesjs.games[num].championId;
                document.getElementById(sp1).innerHTML=gamesjs.games[num].spell1;
                document.getElementById(sp2).innerHTML=gamesjs.games[num].spell2;
                document.getElementById(ipe).innerHTML=gamesjs.games[num].ipEarned;
                document.getElementById(wn).innerHTML=gamesjs.games[num].stats.win;
                num++;
            }
            $( "#vacia" ).hide();
            $( "#recentgames" ).show();
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}