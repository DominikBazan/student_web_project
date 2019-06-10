function zaznaczenie() {
    return document.getElementById("check").checked;
}

function wypelnienie() {
    return document.getElementById("nick").value && document.getElementById("message").value;
}

function update() {
    document.getElementById("chat").innerHTML = "";

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 3 && xmlhttp.status == 200) {
            if (zaznaczenie()) {
                document.getElementById("chat").innerHTML = xmlhttp.responseText;
            }
        }
        if (xmlhttp.readyState == 4) {
            xmlhttp.open("GET", "wiadomosci.php", true);
            xmlhttp.send();
        }
    }
    xmlhttp.open("GET", "wiadomosci.php", true);
    xmlhttp.send();
}

function send() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var nick = encodeURIComponent(document.getElementById("nick").value);
    var wiadomosc = encodeURIComponent(document.getElementById("message").value);

    xmlhttp.open("GET", "wysylanie.php?nick=" + nick + "&message=" + wiadomosc, true);
    xmlhttp.send();

    document.getElementById("message").value = "";
}