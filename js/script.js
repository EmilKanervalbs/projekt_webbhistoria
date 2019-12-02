
if (localStorage.getItem("theme") != "dark" && localStorage.getItem("theme") != "light") { //checkar om man har varit på sidan tidigare eller har valt ett tema, om inte sätter till dark
    localStorage.setItem("theme", "dark");
    console.log("satte theme till dark för hittade inte");
}

var theme = localStorage.getItem("theme"); //kollar upp vilket tema man har valt tidigare
var currentTheme = "dark"; //sätter nuvarande temat till dark

console.log(localStorage.getItem("theme")); //skriver ut temat

function setDark() { //byter tema till mörkt
    //letar upp alla element som behöver få sitt tema bytt
    var main = document.getElementsByClassName("light");

    var list = document.getElementsByClassName("nb-light");

    var content = document.getElementsByClassName("content-light");

    //går igenom alla element som finns i listorna 
    for (let i = 0; i < main.length;) {
        main[0].classList.add("dark");
        main[0].classList.remove("light");
    }  

    for (let i = 0; i < list.length;) {
        list[0].classList.add("nb-dark");
        list[0].classList.remove("nb-light");  
    }

    for (let i = 0; i < content.length;) {
        content[0].classList.add("content-dark");
        content[0].classList.remove("content-light");
    }

    localStorage.setItem("theme", "dark");
    currentTheme = "dark";
    theme = "dark";
}

function setLight() {

    var main = document.getElementsByClassName("dark");

    var list = document.getElementsByClassName("nb-dark"); 
    
    var content = document.getElementsByClassName("content-dark");

    for (let i = 0; i < main.length;) {
        main[0].classList.add("light");
        main[0].classList.remove("dark");
    }

    for (let i = 0; i < list.length;) {
        list[0].classList.add("nb-light");
        list[0].classList.remove("nb-dark");
    }

    for (let i = 0; i < content.length;) {
        content[0].classList.add("content-light");
        content[0].classList.remove("content-dark");
    }

    console.log("Blind mode activated");

    localStorage.setItem("theme", "light");
    currentTheme = "light";
    theme = "light";
}

function changeTheme() {
    if (theme == "light") {
        setDark();
    } else if (theme == "dark") {
        setLight();
    }
    console.log(theme);
}

//sätter tema till ljust om det ska vara det
if (theme == "light" && currentTheme != theme) {
    setLight();
    currentTheme = "light";
} 

