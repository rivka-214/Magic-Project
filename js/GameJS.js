

//יצירת הכובעים בתחילת המשחק
function CreateHats() {
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 5; j++) {
            var Hat = document.createElement("div");
            Hat.classList.add("Hat");
            Hat.setAttribute("data-ii", i);
            Hat.setAttribute("data-j", j);
            document.getElementById("hats").appendChild(Hat);

            var hat_top = document.createElement("div");
            hat_top.classList.add("hat-top");
            Hat.appendChild(hat_top);
            var hat_body = document.createElement("div");
            hat_body.classList.add("hat-body");
            Hat.appendChild(hat_body);
            var hat_border = document.createElement("div");
            hat_border.classList.add("hat-border");
            hat_body.appendChild(hat_border);
        }
    }
    //הגדרת מיקומי הכובעים לפי חלוקת שתי שורות בפור הראשון שורה ראשונה לכן יש רק את הרוחב בפור השני 
   // יש גם את הגובה בגלל שאנחנו רוצים ירידת שורה
    Hats = document.getElementsByClassName("Hat");
    for (var i = 0; i < Hats.length / 2; i++) {
        var newWidth = Hats[i].getBoundingClientRect().width * i / document.documentElement.clientWidth * 100;
        Hats[i].style.left = newWidth + 3 * i + "vw";
        Hats[i].style.top = "0px";
    }

    for (var i = 0; i < Hats.length / 2; i++) {
        var newWidth = Hats[i].getBoundingClientRect().width * i / document.documentElement.clientWidth * 100;
        var newHeight = Hats[i].getBoundingClientRect().height / document.documentElement.clientWidth * 100;
        Hats[i + 5].style.top = newHeight + 5 + "vmax";
        Hats[i + 5].style.left = newWidth + 3 * i + "vw";
    }

}
//יצירת הלבבות
function creatHearts() {
    for (var i = 0; i < numOfLife; i++) {
        heart = document.createElement("div");
        heart.innerHTML = "❤";
        document.getElementById("hearts").appendChild(heart);
        heart.classList.add("heart");
        Hearts.push(heart);
    }
}
//מחיקת לב
function removHearts() 
{
    Hearts[numOfLife].classList.add("removeHeart");
    setTimeout(function () { Hearts[numOfLife].remove(); }, 2000);
}


//בעת לחיצה על התחל
function clickOnStart() {
    document.getElementById("btn_startGame").remove();
    document.getElementById("loading").style.display = "block";
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        CreateHats();
        creatHearts();
        StartGame();
    }, 2000);

}
//התחלת המשחק
function StartGame() {
    CounterInterval = 0;
    counterLevel++;
    localStorage.level = "" + counterLevel + "";
    HatWithRabbitOnStart = Hats[Random(10)];
    speed -= 500;
    document.getElementById("numOfLevel").innerHTML = "level:" + counterLevel;

    ChooseLevel()
}

//הפונקציה שולחת לערבוב לפי רמת המשחק
function ChooseLevel() {
    OpenHat(HatWithRabbitOnStart);
    setTimeout(
        function () {
            switch (Number(localStorage.level)) {
                case 1: intervealId = setInterval(Change, 100);
                    for (var i = 0; i < Hats.length; i++)
                        document.getElementsByClassName("Hat")[i].classList.add("easy");
                    break;
                case 2: intervealId = setInterval(Change, 900);
                    for (var i = 0; i < Hats.length; i++)
                        document.getElementsByClassName("Hat")[i].classList.toggle("middle");

                    break;
                case 3: intervealId = setInterval(Change, 500);
                    for (var i = 0; i < Hats.length; i++)
                        document.getElementsByClassName("Hat")[i].classList.toggle("professional");
                    break;
                case 4: intervealId = setInterval(Change, 250);
                    for (var i = 0; i < Hats.length; i++)
                        document.getElementsByClassName("Hat")[i].classList.toggle("professional2");
                    break;
                default:

            }



        }, 1000);
}



//פתיחת כובע שנשלח
function OpenHat(hat) {
    //if (IsCorect == true)
    var rabbit = document.getElementById("rabbitImage");
    //else
    //    var rabbit = document.getElementById("rabbitImage2");
    rabbit.style.display = "block";
    hat.appendChild(rabbit);

    rabbit.classList.add("rabbit");
    //הארנב עולה
    setTimeout(function () { rabbit.style.transform = "translate(0px, -4.5vw)"; }, 1500);
   //הארנב יורד
    setTimeout(function () { rabbit.style.transform = "translate(0px, +2vw)"; }, 4000);
   //הארנב נעלם
    setTimeout(function () { rabbit.style.display = "none"; }, 5000);
}


//רינדום
function Random(len) {
    var r = Math.floor(Math.random() * len);
    return r;

}


//ערבוב
function Change() {
    if (CounterInterval <= localStorage.level * 8) {
        if (hatch)
            hatIsChange = HatWithRabbitOnStart;
        else
            hatIsChange = arrChangeHats[changeHat];

        hatJ = hatIsChange.getAttribute("data-j");
        hatI = hatIsChange.getAttribute("data-ii");
        if (hatI == 1)
            arrChangeHats = (document.querySelectorAll(" [data-j='" + (Number(hatJ) - 1) + "'], [data-j='" + (Number(hatJ) + 1) + "'],[data-ii='0'][data-j='" + (Number(hatJ)) + "'] "));
        if (hatI == 0)
            arrChangeHats = (document.querySelectorAll(" [data-j='" + (Number(hatJ) - 1) + "'], [data-j='" + (Number(hatJ) + 1) + "'],[data-ii='1'][data-j='" + (Number(hatJ)) + "'] "));

        changeHat = Random(arrChangeHats.length);

        temp = arrChangeHats[changeHat].getAttribute("data-j");
        arrChangeHats[changeHat].setAttribute("data-j", hatIsChange.getAttribute("data-j"));
        hatIsChange.setAttribute("data-j", temp);

        temp = arrChangeHats[changeHat].getAttribute("data-ii");
        arrChangeHats[changeHat].setAttribute("data-ii", hatIsChange.getAttribute("data-ii"));
        hatIsChange.setAttribute("data-ii", temp);
        temp = arrChangeHats[changeHat].style.top;
        arrChangeHats[changeHat].style.top = hatIsChange.style.top;
        hatIsChange.style.top = temp;
        temp = arrChangeHats[changeHat].style.left;
        arrChangeHats[changeHat].style.left = hatIsChange.style.left;
        hatIsChange.style.left = temp;
        CounterInterval++;
        hatch = !hatch;
    }
    else {
        clearInterval(intervealId);
        showMessageToChooseHat();
        addClick()
    }
}
//הודעה לפתיחת כובע
function showMessageToChooseHat() {
    chooseHatMessage = document.createElement("div");
    document.getElementById("board").appendChild(chooseHatMessage);
    chooseHatMessage.classList.add("chooseHatMessage");
    chooseHatMessage.innerHTML = "choose hat";
    Setimer();
}
function stop(timer)
       {
 clearInterval(timer)
       }
//טיימר עד זיהוי הכובע

function Setimer()
{  
    timerDiv = document.getElementById("timer");
   // timerDiv.setAttribute("id","timer")

   timer=10;
var interval = setInterval(function () {
    timer--;     
   
    timerDiv.innerHTML ='זמן נותר: ' + timer + ' שניות' ;
    
    if (timer === 0) {
        
        clearInterval(interval);
        IsCorect=false;
        chooseHatMessage.remove();
      EndGame();
    }
}, 1000); // מעדכן את הטיימר כל שנייה
}
//הוספת אירוע לחיצה לכובעים
function addClick() {
    for (var i = 0; i < 10; i++) {
        document.getElementsByClassName("Hat")[i].addEventListener("click", CheckClick);
        document.getElementsByClassName("Hat")[i].classList.add("h");
    }

}
//בדיקה האם הכובע שבחר השחקן הוא הנכון
function CheckClick() {
   stop(timer)

    document.getElementById("board").removeChild(chooseHatMessage);
    for (var i = 0; i < 10; i++) {
        document.getElementsByClassName("Hat")[i].removeEventListener("click", CheckClick);
        document.getElementsByClassName("Hat")[i].classList.remove("h");
    }
    localStorage.choosenHat = event.target.parentElement;
    endLevelmessage = document.createElement("div");
    document.body.appendChild(endLevelmessage);
    endLevelmessage.classList.add("message");
    if (event.target.parentElement == HatWithRabbitOnStart || event.target == HatWithRabbitOnStart) {
        IsCorect = true;
    }
    else {
        IsCorect = false;

        numOfLife--;
        removHearts();
    };
    OpenHat(HatWithRabbitOnStart);
    if (!numOfLife)
        setTimeout(function () { gameOver(); }, 4000);

    else {
        setTimeout(function () { EndGame(); }, 5000);
    }
}

//game over
function gameOver() {
    gameOverMessage = document.createElement("div"); debugger;
    document.body.appendChild(gameOverMessage);
    gameOverMessage.classList.add("message");
    gameOverMessage.classList.add("gameOver");
    gameOverMessage.innerHTML = "Game over";
    setTimeout(function () { document.body.removeChild(gameOverMessage); }, 5000);
    setTimeout(function () { EndMessoge(); }, 5000);

}
//סיום השלב
function EndGame() {
  
    if (counterLevel != 4 || (counterLevel == 4 && !IsCorect)) {
        document.getElementById("div_opacity").style.display = "block";
        document.getElementById("div_finish").style.marginTop = "-72vh";

        if (IsCorect ) {
            document.getElementById("btn_next").style.display = "block";
            document.getElementById("messageF").innerHTML = "Exellent!!!";
            document.getElementById("rabbitHappy").style.display = "block";
        }
        if (numOfLife > 0 ) {
            document.getElementById("btn_again").style.display = "block";
        }
        if (!IsCorect &&timer!==0) {
            counterLevel--;
            document.getElementById("messageF").innerHTML = "oops, filed";
            document.getElementById("rabbitSed").style.display = "block";
        }        
        if(timer===0)
        {                   
            counterLevel--;
            document.getElementById("messageF").innerHTML = "Time is over";
            document.getElementById("rabbitSed").style.display = "block";
            numOfLife--;
      
            removHearts();
  
        }
      
    }
    else {
        endLevelmessage = document.createElement("div");
        document.body.appendChild(endLevelmessage);
        endLevelmessage.classList.add("message");
        endLevelmessage.classList.add("gameOver");
        endLevelmessage.innerHTML = "win";
        setTimeout(function () { document.body.removeChild(endLevelmessage); }, 5000);
        setTimeout(function () { EndMessoge(); }, 5000);
    }
}
//ההודעות בעת סיום המשחק
function EndMessoge() {
    document.getElementById("div_opacity").style.display = "block";
    document.getElementById("div_finish").style.marginTop = "-72vh";
    document.getElementById("btn_again").style.display = "none";
    document.getElementById("messageF").innerHTML = "do you want to play again?";
    document.getElementById("yes").style.display = "block";
    document.getElementById("no").style.display = "block";
}
function yes() {
    document.getElementById("div_finish").style.marginTop = "-220vh";
    openGame();
}
function no() {
    document.getElementById("div_finish").style.marginTop = "-220vh";
    openHomePage();
}
//ניקוי הלוח
function ResetTheBoaed() {

    document.getElementById("div_finish").style.marginTop = "-220vh";
    setTimeout(function () {
        document.getElementById("btn_next").style.display = "none";
        document.getElementById("div_opacity").style.display = "none";
        document.getElementById("rabbitSed").style.display = "none";
        document.getElementById("rabbitHappy").style.display = "none";
    }, 2000)
    //StartGame();
    setTimeout(function () { StartGame() }, 2000);
}

