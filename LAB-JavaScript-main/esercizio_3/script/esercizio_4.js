/*
Fai in modo che la variabile numeroIniziale si veda a video (al posto di 'N')
Fai partire il countdown al click sul button
Al termine del countdown richiama la funzione sveglia()
*/ 

let numeroIniziale=10;

const timer = document.getElementById("timer");
timer.innerHTML = numeroIniziale;

const button = document.querySelector("button");
button.addEventListener("click", activeCountdown);

function activeCountdown(){

    setInterval(countdown, 1000);

}

function countdown (){
    
    numeroIniziale--;
    timer.innerHTML = numeroIniziale;
    
    if (numeroIniziale == 0){

        sveglia();

    }

}




/*non c'è bisogno di modificare la funzione sveglia()*/
function sveglia()
{
    const audio=document.querySelector("audio");
    audio.currentTime=0.2;
    audio.play();
    document.getElementById("sveglia").style.display="block";
    setTimeout(function(){location.reload()},4800);
}


