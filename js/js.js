var CounterInterval = 0;
var IsCorect = true;
var temp;
var Hats;
var HatWithRabbitOnStart;
var counterLevel = 0;
var speed = 2000;
var opacity;
var endLevelmessage;
var chooseHatMessage;
var points;
var hatch = true;
var hatIsChange;
var arrChangeHats;
var changeHat;
var numOfLife = 3;
var heart;
var Hearts = new Array;
var gameOverMessage;
var i = 0;
var myTime, myStopTime;
var flag = 1;
var intervealId;
var timer=2;
var timerDiv;
var interval;



    function openAboute() {
        window.location.href = "aboute.html";
    }
    //פתיחת עמוד המשחק
    function openGame() {
        numOfLife = 3;
        counterLevel = 0;
        window.location.href = "register.html";
    }
    //פתיחת עמוד הבית
    function openHomePage() {
        window.location.href = "home.html";
}
//פתיחת עמוד הוראות
function openInstructions() {
    window.location.href = "Instructions.html";
}


