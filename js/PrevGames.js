window.onload = function making() {
    var player = JSON.parse(localStorage.getItem(localStorage.currentPlayer));
    var firstName = player[0].firstName;//JSON.parse(localStorage.getItem(localStorage.currentPlayer)).firstName
    var lastName = player[0].lastName;//JSON.parse(localStorage.getItem(localStorage.currentPlayer)).lastName
    document.getElementById("title").innerHTML = firstName + " " + lastName + ", להלן נתוני משחקים קודמים:";
    var len = player[0].oldGames.length;

    var tr = document.createElement("tr");
    var tdLevel = document.createElement("td");
    var tdPoints = document.createElement("td");
    tdLevel.innerHTML = "רמת סיום";
    tdPoints.innerHTML = "נקודות שצברת";
    tr.appendChild(tdLevel);
    tr.appendChild(tdPoints);

    document.getElementsByClassName("history")[0].appendChild(tr);

    for (var i = 0; i < len;) {
        var tr = document.createElement("tr");
        var tdLevel = document.createElement("td");
        var tdPoints = document.createElement("td");
        tdLevel.innerHTML = player[0].oldGames[i];
        i++;
        tr.appendChild(tdLevel);
        tdPoints.innerHTML = player[0].oldGames[i];
        i++;
        tr.appendChild(tdPoints);
        document.getElementsByClassName("history")[0].appendChild(tr);
    }
};