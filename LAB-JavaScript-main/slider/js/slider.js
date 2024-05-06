
let intervallo=setInterval(slider,5000);

function slider()
{
    console.log("Sei nella funzione slider()");
    let visibile=document.querySelector("#slider .visibile");
    console.log(visibile);
    let fratello=visibile.nextElementSibling;
    console.log(fratello);

    /*
    visibile.classList.remove("visibile");
    visibile.classList.add("negativa");
    */

    let negativa=document.querySelector("#slider .negativa");
    console.log(negativa);
    if(negativa!=null)
    {
        negativa.classList.remove("negativa");
    }
    

   visibile.classList.replace("visibile","negativa");

    if(fratello==null){
        //devi ripartire da zero
        document.querySelector("#slider .image").classList.add("visibile")
    }
    else{
        fratello.classList.add("visibile");
    }
   
}

pulsante.onclick=slider;


document.getElementById("slider").addEventListener("mouseover",function(){

    console.log("Sei con il mouse sopra allo slider");
    clearInterval(intervallo);
});

document.getElementById("slider").addEventListener("mouseleave",function(){
    console.log("Sei uscito dallo slider");
    intervallo=setInterval(slider,5000);
});
