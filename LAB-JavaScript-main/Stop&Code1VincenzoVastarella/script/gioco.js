
document.getElementById("messaggio").style.display="none";

let pointsYou = 0;
let pointsCpu = 0;

document.getElementById("gioca").onclick=function() {

    const number= Math.floor(Math.random() * 10) + 1;
    const number2= Math.floor(Math.random() * 10) + 1;

    document.querySelector("#you span").innerHTML=number;
    document.querySelector("#cpu span").innerHTML=number2;
    
    let message;
    
    
    if (number > number2) {

        message = "Complimenti, hai vinto!"
        console.log(number, "-", number2, "number > number2"); 
        pointsYou++;

    } else if(number < number2) {

        message = "Mi dispiace, hai perso";
        console.log(number, "-", number2, "number < number2");
        pointsCpu++;

    } else {

        message = "Hai pareggiato";
        console.log(number, "-", number2, "number = number2");

    }

    document.getElementById("messaggio").innerHTML = message;
    document.getElementById("messaggio").style.display="block";
    document.getElementById("points-you").innerHTML = pointsYou;
    document.getElementById("points-cpu").innerHTML = pointsCpu;


}
