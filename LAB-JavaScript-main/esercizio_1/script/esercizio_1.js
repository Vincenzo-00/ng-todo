/*
inverti i colori dei div senza modificare la funzione aggiornaColore()
*/ 

let color1="#813B7C";
let color2="#59D044";

document.addEventListener("DOMContentLoaded",function(){
    aggiornaColore();

    document.querySelector("button").onclick=function(){

        let colortemp = color1;
        color1 = color2;
        color2 = colortemp;
        aggiornaColore();

    }
});


/*NON MODIFICARE QUESTA FUNZIONE*/
function aggiornaColore(){
    document.querySelector("#uno").style.backgroundColor=color1;
    document.querySelector("#due").style.backgroundColor=color2;
}
