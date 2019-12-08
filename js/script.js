//byter tema på hela sidan

//tema sparas i localStorage.theme, antingen "light" eller "dark"

//kollar om man har valt ett tema tidigare (även då om man har varit på sidan tidigare), om theme inte är "light" eller "dark" sätter den till dark för det är default
if (localStorage.getItem("theme") != "dark" && localStorage.getItem("theme") != "light") { 
    localStorage.setItem("theme", "dark");
    console.log("satte theme till dark för hittade inte");
}

//variabel för att unvika att konstant kolla i localStorage.
var theme = "dark";

console.log(localStorage.getItem("theme")); //skriver ut temat

function setDark() { //byter tema till mörkt

    //letar upp alla element som behöver få sitt tema bytt
    var main = document.getElementsByClassName("light");

    var list = document.getElementsByClassName("nb-light");

    var content = document.getElementsByClassName("content-light");

    //går igenom alla element som finns i listorna och byter klass till korrekt sak
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

    //ändrar sist temat som är sparat i localStorage
    localStorage.setItem("theme", "dark");
    theme = "dark";

}

//sätter tema till light
function setLight() {

    //skapar listor med alla element som har klasser som färgar mörjt
    var main = document.getElementsByClassName("dark");

    var list = document.getElementsByClassName("nb-dark"); 
    
    var content = document.getElementsByClassName("content-dark");

    //går igenom alla listor en efter en, tar bort och byter dark klasser till light
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

    //ändrar till sist temat som är sparat i localStorage.
    localStorage.setItem("theme", "light");
    theme = "light";
}

//funktion som byter temat
function changeTheme() {
    if (theme == "light") {
        setDark();
    } else if (theme == "dark") {
        setLight();
    }
    console.log(theme);
}

//sätter tema till ljust om det ska vara det när sidan först öppnas för varför inte
if (localStorage.getItem("theme") == "light" && theme != localStorage.getItem("theme")) {
    setLight();
} 

