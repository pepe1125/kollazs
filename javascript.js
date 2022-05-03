var termek01 = 15500
var termek02 = 6999
var termek03 = 29880


function hozzaad(termek) {
    db = Number(prompt('Mennyit kérsz?'))
    localStorage.setItem(termek, db)
}

function torles() {
    localStorage.clear()
}

function kos() {
    var list = "<tr><th>Termék neve: </th><th>darabszáma: </th><th>Ára: </th></tr>\n"

    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr><td>" + key + "</td><td>" + "<button style=\"width:100%\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Mennyi legyen?\")" + ")'>" + darab + "</button>" + "</td>" + "</td><td>" + (window[key] * darab) + " Ft" + "</td><td>" + "<button style=\"width:100%; background-color:red\" onclick='RemoveItem(\"" + key + "\")'>X</button>" + "</td></tr>";
        ossz += window[key] * darab;
    }

    list += "<tr> <th>VÉGÖSSZEG: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"



    document.getElementById('tabla').innerHTML = list
}

function termekek() {
    var dbszam = 0;

    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        console.log(key)
        dbszam += Number(localStorage.getItem(key))
    }

    document.getElementById("darabszam").innerHTML = dbszam

}
