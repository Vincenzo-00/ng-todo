document.addEventListener("DOMContentLoaded", function(){

    const link= document.querySelector("a");

    let url= link.getAttribute("href");

    let urlAssoluta = "https://it.wikipedia.org" + url; // qui salvo il dominio Wikipedia concatendando al contenuto letto e salvato precedentemente nella variabile url

    // // console.log(urlAssoluta);

    // // link.setAttribute("href",urlAssoluta);

    console.log("Cycle done");

    let name = "Vincenzo";
    console.log(name.charAt(1)); //mostrami il carattere nella posizione 3 partendo da 0


    for (let i=1; i<=10; i++) {
        console.log("Sono in un ciclo for", i);
    }
    console.log("Out of cycle");

    let frutta = ["mele", "pere", "banane", "mango", "ananas", "ciliegie", 15, document];
    console.log(frutta);
    console.log(frutta[7]);

    // for(let i=0; i<8; i++) {
    //     console.log(frutta[i]);
    // }

    for(let i=0; i<frutta.length; i++) {
        console.log(frutta[i]);
    }

    const links = document.querySelectorAll("a");
    console.log(links);
    let url2;

    //######## CICLO FOR PER AGGIUNGIERE IL DOMINIO WIKIPEDIA ###########
    for (let i=0; i<links.length; i++) {
        console.log(links[i]);

        let urlAll = links[i].getAttribute("href");
        console.log(urlAll);

        // voglio che mi aggiunge il dominio wikipedia solo alle lettere che finiscono con /
        if(urlAll.charAt(0) == "/") {

            let urlAssolutaAll = "https://it.wikipedia.org" + urlAll;
            links[i].setAttribute("href", urlAssolutaAll);

        }

        //########## FUNZIONE PER FAR RITARDARE IL LINK CLICCATO ###########
        links[i].addEventListener("click", function(e){

            e.preventDefault(); // ritardo l'evento click
            url = this.getAttribute("href"); // così dico che url sarebbe il link di qualsiasi tag <a> che cliccherò
            document.querySelector("#popup").style.display="block";

        });

    } // chiudo il for di links


    let buttons = document.querySelectorAll("#popup button");
    console.log(buttons);
    for (let i=0; i<buttons.length; i++) {

        buttons[i].onclick=function() {
            console.log("You have clicked button")
            console.log(this); // mostra solo l'elemento cliccato
            // così dico che se quello che clicco ha la scritta no toglierò il popup
            if(this.innerHTML == "NO") {

                document.getElementById("popup").style.display="none";

            } else {
                
                console.log(location.href);
                location.href = url2;

            }

        }

    }

});

