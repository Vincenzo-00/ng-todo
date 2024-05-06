console.log("Hello");


const result = document.getElementById("risultato");
let message;
let pointsYou=0;
let pointsCpu=0;
const you = document.getElementById("you");
const cpu = document.getElementById("cpu");
const foglia = document.querySelector("#scelta li:nth-child(1)")
const forbice = document.querySelector("#scelta li:nth-child(2)")
const sasso = document.querySelector("#scelta li:nth-child(3)")


document.getElementById("inizia").onclick=function() {

    you.classList.remove("choice-image-foglia", "choice-image-forbice", "choice-image-sasso");
    cpu.classList.remove("choice-image-foglia", "choice-image-forbice", "choice-image-sasso");
    document.getElementById("scelta").style.display="inline-block";
    document.getElementById("inizia").style.visibility="hidden";

};


// ####### OPZIONE SCELTA FOGLIA ######## 


foglia.addEventListener("click", function(){

    let randomNumber = Math.floor(Math.random() *3) +1;
    console.log(randomNumber);

    document.getElementById("scelta").style.display="none";
    you.classList.add("choice-image-foglia");

    if (randomNumber == 1) {

        message = "Hai pareggiato";
        result.classList.remove("persa", "vinta");
        result.classList.add("patta");
        cpu.classList.remove("choice-image-forbice", "choice-image-sasso");
        cpu.classList.add("choice-image-foglia");

    } else if (randomNumber == 2) {
        
        message = "Hai perso";
        pointsCpu++;
        result.classList.remove("patta", "vinta");
        result.classList.add("persa");
        cpu.classList.remove("choice-image-forbice", "choice-image-sasso");
        cpu.classList.add("choice-image-forbice");

    } else {

        message = "Hai vinto";
        pointsYou++;
        result.classList.remove("persa", "pareggio");
        result.classList.add("vinta");
        cpu.classList.remove("choice-image-forbice", "choice-image-foglia");
        cpu.classList.add("choice-image-sasso");

    }

    result.innerHTML = message;
    result.style.display="block";
    document.getElementById("punteggioYou").innerHTML = pointsYou;
    document.getElementById("punteggioCpu").innerHTML = pointsCpu;
    document.getElementById("inizia").style.visibility="visible";

});


// ####### OPZIONE SCELTA FORBICE ######## 


forbice.addEventListener("click", function(){

    let randomNumber = Math.floor(Math.random() *3) +1;
    console.log(randomNumber);

    document.getElementById("scelta").style.display="none";
    you.classList.add("choice-image-forbice");

    if (randomNumber == 1) {

        message = "Hai vinto";
        pointsYou++;
        result.classList.remove("persa", "patta");
        result.classList.add("vinta");
        cpu.classList.remove("choice-image-forbice", "choice-image-sasso");
        cpu.classList.add("choice-image-foglia");

    } else if (randomNumber == 2) {
        
        message = "Hai pareggiato";
        
        result.classList.remove("persa", "vinta");
        result.classList.add("patta");
        cpu.classList.remove("choice-image-forbice", "choice-image-sasso");
        cpu.classList.add("choice-image-forbice");

    } else {

        message = "Hai perso";
        pointsCpu++;
        result.classList.remove("vinta", "patta");
        result.classList.add("persa");
        cpu.classList.remove("choice-image-forbice", "choice-image-foglia");
        cpu.classList.add("choice-image-sasso");

    }

    result.innerHTML = message;
    result.style.display="block";
    document.getElementById("punteggioYou").innerHTML = pointsYou;
    document.getElementById("punteggioCpu").innerHTML = pointsCpu;
    document.getElementById("inizia").style.visibility="visible";
    
});


// ####### OPZIONE SCELTA SASSO ######## 


sasso.addEventListener("click", function(){

    let randomNumber = Math.floor(Math.random() *3) +1;
    console.log(randomNumber);

    document.getElementById("scelta").style.display="none";
    you.classList.add("choice-image-sasso");

    if (randomNumber == 1) {

        message = "Hai perso";
        pointsCpu++;
        result.classList.remove("vinta", "patta");
        result.classList.add("persa");
        cpu.classList.remove("choice-image-forbice", "choice-image-sasso");
        cpu.classList.add("choice-image-foglia");

    } else if (randomNumber == 2) {
        
        message = "Hai vinto";
        pointsYou++;
        result.classList.remove("persa", "patta");
        result.classList.add("vinta");
        cpu.classList.remove("choice-image-forbice", "choice-image-sasso");
        cpu.classList.add("choice-image-forbice");

    } else {

        message = "Hai pareggiato";
        result.classList.remove("vinta", "persa");
        result.classList.add("patta");
        cpu.classList.remove("choice-image-forbice", "choice-image-foglia");
        cpu.classList.add("choice-image-sasso");

    }

    result.innerHTML = message;
    result.style.display="block";
    document.getElementById("punteggioYou").innerHTML = pointsYou;
    document.getElementById("punteggioCpu").innerHTML = pointsCpu;
    document.getElementById("inizia").style.visibility="visible";

});