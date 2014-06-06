var tazul1 = 300;
var cazul1 = 0;

/*Golem Azul 1*/
function azul1() {
    document.getElementById("azul1").innerHTML = tazul1;

    if (cazul1==0){
        timerazul1 = setInterval(azul1, 1000);
        cazul1 = 1;
    }
    tazul1 --;
    if (tazul1==-1){
        clearInterval(timerazul1);
        cazul1 = 0;
        tazul1 = 05;
    }

}

var tazul2 = 300;
var cazul2 = 0;

/*Golem Azul 2*/
function azul2() {
    document.getElementById("azul2").innerHTML = tazul2;

    if (cazul2==0){
        timerazul2 = setInterval(azul2, 1000);
        cazul2 = 1;
    }
    tazul2 --;
    if (tazul2==-1){
        clearInterval(timerazul2);
        cazul2 = 0;
        tazul2 = 05;
    }

}

var trojo1 = 300;
var crojo1 = 0;
function rojo1() {
    document.getElementById("rojo1").innerHTML = trojo1;

    if (crojo1==0){
        timerrojo1 = setInterval(rojo1, 1000);
        crojo1 = 1;
    }
    trojo1 --;
    if (trojo1==-1){
        clearInterval(timerrojo1);
        crojo1 = 0;
        trojo1 = 05;
    }

}


var trojo2 = 300;
var crojo2 = 0;
function rojo2() {
    document.getElementById("rojo2").innerHTML = trojo2;

    if (crojo2==0){
        timerrojo2 = setInterval(rojo2, 1000);
        crojo2 = 1;
    }
    trojo2 --;
    if (trojo2==-1){
        clearInterval(timerrojo2);
        crojo2 = 0;
        trojo2 = 05;
    }

}



var tbrujas1 = 50;
var cbrujas1 = 0;
function brujas1() {
    document.getElementById("brujas1").innerHTML = tbrujas1;

    if (cbrujas1==0){
        timerbrujas1 = setInterval(brujas1, 1000);
        cbrujas1 = 1;
    }
    tbrujas1 --;
    if (tbrujas1==-1){
        clearInterval(timerbrujas1);
        cbrujas1 = 0;
        tbrujas1 = 05;
    }

}

var tbrujas2 = 50;
var cbrujas2 = 0;
function brujas2() {
    document.getElementById("brujas2").innerHTML = tbrujas2;

    if (cbrujas2==0){
        timerbrujas2 = setInterval(brujas2, 1000);
        cbrujas2 = 1;
    }
    tbrujas2 --;
    if (tbrujas2==-1){
        clearInterval(timerbrujas2);
        cbrujas2 = 0;
        tbrujas2 = 05;
    }

}

var tfantasmas1 = 050;
var cfantasmas1 = 0;
function fantasmas1() {
    document.getElementById("fantasmas1").innerHTML = tfantasmas1;

    if (cfantasmas1==0){
        timerfantasmas1 = setInterval(fantasmas1, 1000);
        cfantasmas1 = 1;
    }
    tfantasmas1 --;
    if (tfantasmas1==-1){
        clearInterval(timerfantasmas1);
        cfantasmas1 = 0;
        tfantasmas1 = 05;
    }

}


var tfantasmas2 = 50;
var cfantasmas2 = 0;
function fantasmas2() {
    document.getElementById("fantasmas2").innerHTML = tfantasmas2;

    if (cfantasmas2==0){
        timerfantasmas2 = setInterval(fantasmas2, 1000);
        cfantasmas2 = 1;
    }
    tfantasmas2 --;
    if (tfantasmas2==-1){
        clearInterval(timerfantasmas2);
        cfantasmas2 = 0;
        tfantasmas2 = 05;
    }

}

var tgolems1 = 50;
var cgolems1 = 0;
function golems1() {
    document.getElementById("golems1").innerHTML = tgolems1;

    if (cgolems1==0){
        timergolems1 = setInterval(golems1, 1000);
        cgolems1 = 1;
    }
    tgolems1 --;
    if (tgolems1==-1){
        clearInterval(timergolems1);
        cgolems1 = 0;
        tgolems1 = 05;
    }

}

var tgolems2 = 50;
var cgolems2 = 0;
function golems2() {
    document.getElementById("golems2").innerHTML = tgolems2;

    if (cgolems2==0){
        timergolems2 = setInterval(golems2, 1000);
        cgolems2 = 1;
    }
    tgolems2 --;
    if (tgolems2==-1){
        clearInterval(timergolems2);
        cgolems2 = 0;
        tgolems2 = 05;
    }

}


var tlobos1 = 50;
var clobos1 = 0;
function lobos1() {
    document.getElementById("lobos1").innerHTML = tlobos1;

    if (clobos1==0){
        timerlobos1 = setInterval(lobos1, 1000);
        clobos1 = 1;
    }
    tlobos1 --;
    if (tlobos1==-1){
        clearInterval(timerlobos1);
        clobos1 = 0;
        tlobos1 = 05;
    }

}

var tlobos2 = 50;
var clobos2 = 0;
function lobos2() {
    document.getElementById("lobos2").innerHTML = tlobos2;

    if (clobos2==0){
        timerlobos2 = setInterval(lobos2, 1000);
        clobos2 = 1;
    }
    tlobos2 --;
    if (tlobos2==-1){
        clearInterval(timerlobos2);
        clobos2 = 0;
        tlobos2 = 05;
    }

}


var tnashor = 420;
var cnashor = 0;
function nashor() {
    document.getElementById("nashor").innerHTML = tnashor;

    if (cnashor==0){
        timernashor = setInterval(nashor, 1000);
        cnashor = 1;
    }
    tnashor --;
    if (tnashor==-1){
        clearInterval(timernashor);
        cnashor = 0;
        tnashor = 05;
    }

}

var tdragon = 360;
var cdragon = 0;
function dragon() {
    document.getElementById("dragon").innerHTML = tdragon;

    if (cdragon==0){
        timerdragon = setInterval(dragon, 1000);
        cdragon = 1;
    }
    tdragon --;
    if (tdragon==-1){
        clearInterval(timerdragon);
        cdragon = 0;
        tdragon = 05;
    }

}