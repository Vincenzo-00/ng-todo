/*
Usa l'array per gestire i colori in modo random.
Completa e usa le funzioni già presenti nel codice
*/ 

const colori=["#F3A002","#F24D98","#813B7C","#59D044","#AC02F3","#023BF3"];


const colora = document.getElementById("colora");
const inverti = document.getElementById("inverti");
const ris = document.getElementById("risultato");


colora.onclick=function(){

    let randomNumber = Math.floor(Math.random()*colori.length);
    console.log(randomNumber);
    coloraStringa(ris, colori[randomNumber]);

}


inverti.onclick=function(){
    
    ris.innerHTML = invertiStringa(ris.innerHTML);

}


function coloraStringa(boxRisultato,colore){
    
    console.log(boxRisultato, colore);
    boxRisultato.style.color=colore;

}

function invertiStringa(testo){

    console.log(testo);
    console.log(testo.length);
    console.log(testo.charAt(1));
    let stringaInvertita="";

    for (let i = testo.length; i >= 0; i--) {

        console.log(testo.charAt(i));
        stringaInvertita += testo.charAt(i);
    
    }
    console.log(stringaInvertita);


    return stringaInvertita;
}





