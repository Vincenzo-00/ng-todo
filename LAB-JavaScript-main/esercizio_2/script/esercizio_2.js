/*
crea la scacchiera con un ciclo for.
Se hai bisogno modifica il file css a tuo piacimento
*/ 

// let scacchiera = document.getElementById("scacchiera");

// for (let i=0; i<64;i++){

//     scacchiera.innerHTML += "<section></section>";
//     let sectionAll = document.querySelectorAll("#scacchiera section");
//     console.log(sectionAll);

//     if(i<=7){
//         biancoNero();    
//     }

//     if (i>=8 && i<=15){
//         neroBianco();    
//     }

//     if(i>=16 && i<=23){
//         biancoNero();;   
//     }

//     if(i>=24 && i<=31){
//         neroBianco();    
//     }

//     if(i>=32 && i<=39){
//         biancoNero();
//     }
    
//     if(i>=40 && i<=47){
//         neroBianco();
//     }

//     if(i>=48 && i<=55){
//         biancoNero();
//     }

//     if(i>=56 && i<=63){
//         neroBianco();
//     }

//     function biancoNero(){

//         if (i % 2 == 0){
    
//             sectionAll[i].classList.add("white")
    
//         } else {
    
//             sectionAll[i].classList.add("black")
    
//         }
    
//     }
    
//     function neroBianco(){
    
//         if (i % 2 == 0){
    
//             sectionAll[i].classList.add("black")
    
//         } else {
    
//             sectionAll[i].classList.add("white")
    
//         }
    
//     }

// }


for (let i = 0; i < 64; i++) {

    document.getElementById("scacchiera").innerHTML += "<section></section>";

}


const caselle = document.querySelectorAll("section");


for (let i = 0; i < caselle.length; i++){

    if ((i + parseInt(i / 8)) % 2 == 0) {
        
        // caselle[i].style.backgroundColor = "black"; 
        caselle[i].classList.add("nero")

    } else {

        caselle[i].classList.add("bianco")

    } 
}

// voglio sapere se clicco su un quadrato bianco o nero
for(let i = 0; i < caselle.length; i++){

    caselle[i].onclick=function(){

        // alert("click");
        console.log(this);
        // if(this.style.backgroundColor == "black"){

        //     alert("Quadrato nero")

        // } else {

        //     alert("Quadrato bianco")

        // }

        if (this.classList.contains("nero")) {

            alert("Quadrato nero")
            
        } else {
            
            alert("Quadrato bianco")

        }

    }

}