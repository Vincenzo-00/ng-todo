document.addEventListener("DOMContentLoaded",function(){

    let ul = document.querySelector("ul");
    const span = document.querySelector("span");
    const fine = document.getElementById("fine");
    let spanFine = document.querySelector("#fine span");
    const button = document.getElementById("new");
    const randonNumber = Math.floor(Math.random()*16);
    let newMine = document.getElementById("newMine");
    let li;
    let points = 0;
    
       
    for (let i=0; i<16; i++) {

        li = "<li>" + "</li>"
        ul.innerHTML = ul.innerHTML + li;
    
    }
    
    liAll = document.querySelectorAll("ul li");

    for (let i = 0; i<liAll.length; i++) {

        liAll[i].onclick=function() {
            
            console.log("ciao");

            if (i == randonNumber) {
            
                liAll[randonNumber].style.backgroundImage = "url('immagini/bomb.png')";
                span.classList.add("bloccaGioco");
                fine.style.display="inline-block";
                
                if (points == 0) {

                    span.classList.add("bloccaGioco");
                    fine.style.display="inline-block";
                    document.querySelector("#fine h2").innerHTML = "Sei proprio scarso";

                } // questo blocco if l'ho aggiunto e non era richiesto dall'esercizio

            } else {
                
                liAll[i].style.backgroundImage = "url('immagini/rainbow.png')";
                points++;

                if (points == 15) {

                    span.classList.add("bloccaGioco");
                    fine.style.display="inline-block";
                    document.querySelector("#fine h2").innerHTML = "Complimenti hai battuto il fato";
                    liAll[randonNumber].style.backgroundImage = "url('immagini/bomb.png')";

                }// questo blocco if l'ho aggiunto e non era richiesto dall'esercizio

            }

            spanFine.innerHTML = points;
        }
        
    }

    button.onclick=function () {

        location.reload();

    }
    
    
});//DOMContentLoaded
