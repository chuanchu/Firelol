function loadJSON(form)
{
    var str1 = "https://prod.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/";
    var str2 = form.nombre.value;
    var espacio = ' ';
    var esp = 0;
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
            document.getElementById('jid').innerHTML=jsonObj[str2].id;
            document.getElementById('jname').innerHTML=jsonObj[str2].name;
            document.getElementById('jprof').innerHTML=jsonObj[str2].profileIconId;
            document.getElementById('jlevel').innerHTML=jsonObj[str2].summonerLevel;
            document.getElementById('jdate').innerHTML=jsonObj[str2].revisionDate;
            $( "#userinfo" ).show();
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}