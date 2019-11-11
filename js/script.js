if (localStorage.getItem("theme") != "dark" && localStorage.getItem("theme") != "light") {
    localStorage.setItem("theme", "dark");
    console.log("satte theme till dark för hittade inte");
}

var theme = localStorage.getItem("theme");
var currentTheme = "dark";

console.log(localStorage.getItem("theme"));

function setDark() {
    var list = document.getElementsByClassName("nb-light");

    var main = document.getElementsByClassName("light");

    console.log(list.length  + " " + main.length)

    for (let i = 0; i < main.length;) {
        main[0].classList.add("dark");
        main[0].classList.remove("light");
    }  

    for (let i = 0; i < list.length;) {
        list[0].classList.add("nb-dark");
        list[0].classList.remove("nb-light");  
    }
    localStorage.setItem("theme", "dark");
    currentTheme = "dark";
    theme = "dark";
}

function setLight() {
    var list = document.getElementsByClassName("nb-dark"); 

    var main = document.getElementsByClassName("dark");
    
    console.log(list.length  + " " + main.length)

    console.log(main.length);

    for (let i = 0; i < main.length;) {
        main[0].classList.add("light");
        main[0].classList.remove("dark");
        console.log("main " + main.length);
        console.log("hej");
    }

    for (let i = 0; i < list.length;) {
        list[0].classList.add("nb-light");
        list[0].classList.remove("nb-dark");
        console.log("list " + list.length);
    }
    localStorage.setItem("theme", "light");
    currentTheme = "light";
    theme = "light";
}
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
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

