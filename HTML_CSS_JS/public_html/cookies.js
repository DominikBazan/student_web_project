// wypisywanie dostepnych stylow na stronie
function listujStyle() {
    var lista = "";
    for (var i = 0; (styl = document.getElementsByTagName("link")[i]); i++) {
        if (styl.getAttribute("title")) {
            title = styl.getAttribute("title");
            lista += "<a href=\"#\" onclick=\"ustawStyl(\'" + title + "\');return false;\">Styl: " + title + "</a><br/>";
        }
    }
    document.getElementById("listaStylow").innerHTML = lista;
}

// zmiana stylu
function ustawStyl(name) {
    var styl;
    for (var i = 0; (styl = document.getElementsByTagName("link")[i]); i++) {
        if (styl.getAttribute("title")) {
            styl.disabled = true;
            if (styl.getAttribute("title") == name) styl.disabled = false;

        }
    }
}

// wyszukiwanie nazwy aktywnego stylu
function jakiStyl() {
    var styl;
    for (var i = 0; (styl = document.getElementsByTagName("link")[i]); i++) {
        if (styl.getAttribute("title") && !styl.disabled) return styl.getAttribute("title");
    }
    return null;
}

// tworzenie cookie pamietajacego styl
function newCookie(name, styl, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else expires = "";
    document.cookie = name + "=" + styl + expires + "; path=/";
}

// zwraca nazwe stylu(title)
function loadCookie(name) {
    //debugger;
    var name = name + "=";
    var cookieArray = document.cookie.split(';');
    //przeszukiwanie cookieArray
    for(var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return null;
}

// odswierzenie strony
window.onload = function(e) {
    var ustawiony = loadCookie("style");
    var doUstawienia = ustawiony ? ustawiony : jakiStyl();
    ustawStyl(doUstawienia);
}

// zamkniecie strony
window.onunload = function(e) {
    var doUstawienia = jakiStyl();
    newCookie("style", doUstawienia, 4);
}