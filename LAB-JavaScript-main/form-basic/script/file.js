document.addEventListener("DOMContentLoaded",function(){

    const modulo = document.querySelector("form");
    const name = document.getElementById("nome");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const privacy = document.getElementById("privacy");

    let arrayInputs = [name, email, tel];
    let arrayImages = [
        "immagini/1.png",
        "immagini/2.png",
        "immagini/3.png",
        "immagini/4.png"
    ];        
    const randonNumber = Math.floor(Math.random() * arrayImages.length);


    modulo.addEventListener("submit", function(e){

        e.preventDefault();
        // for (let i = 0; i < arrayInputs.length; i++) {
            
        //     if (!campRequired(arrayInputs[i])) {

        //         arrayInputs[i].classList.remove("errore");
        //         arrayInputs[i].nextElementSibling.innerHTML = "";
                
        //     } else {
                
        //         arrayInputs[i].classList.add("errore");
        //         arrayInputs[i].nextElementSibling.innerHTML = "Campo obbligatorio";
            
        //     }

        // } //######## CONTROLLO CAMPO OBBLIGATORIO ##############
     
     
        // if (!name.classList.contains("errore")) {
            
        //     checkName(name);

        // }// ###### CONTROLLO REGEX NOME ###########

        // if (!email.classList.contains("errore")) {
            
        //     checkEmail(email);

        // }//###### CONTROLLO REGEX EMAIL ###########
        
        // if (!tel.classList.contains("errore")) {
            
        //     checkTel(tel);

        // }//########## CONTROLLO REGEX TELEFONO #############

        campoGenerico(name, "nome");
        campoGenerico(email, "email");
        campoGenerico(tel, "tel");
        
        if (privacy.checked) {

            privacy.classList.remove("errore");
            privacy.nextElementSibling.nextElementSibling.innerHTML = "";

        } else {

            privacy.classList.add("errore");
            privacy.nextElementSibling.nextElementSibling.innerHTML = "Campo obbligatorio";

        }

        const errori = document.querySelectorAll(".errore").length;
        if (errori == 0) {

            modulo.style.display="none";
            document.getElementById("card").style.display = "block";
            document.querySelector("#card .nome span").innerHTML = name.value;
            document.querySelector("#card .mail span").innerHTML = email.value;
            document.querySelector("#card .phone span").innerHTML = tel.value;
            document.querySelector("#card img").setAttribute("src", arrayImages[randonNumber]);
        }

    });//########## EVENTO SUBMIT ##########

    // name.onfocus=function(){//SCATTA QUANDO IL CURSORE LAMPEGGIA SU DI ESSO NON COME MOUSELEAVE

    //     console.log("Sono sopra l'input");

    // }

    // name.onblur=checkName(name);//SCATTA QUANDO IL CURSORE SE NE VA SU DI ESSO NON COME MOUSELEAVE

    // name.oninput=checkName(name);// CONTROLLA APPENA CAMBIA IL VALUE

    
    // email.onblur=checkEmail(email);

    // email.oninput=checkEmail(email);


    // tel.onblur=checkTel(tel);

    // tel.oninput=checkTel(tel);

    
});//DOMContentLoaded

function campoGenerico (input, regex){

    let checkInput = controlloCampo(input.value, regex);
    if(checkInput != undefined) {

        input.nextElementSibling.innerHTML = checkInput;
        input.classList.add("errore");

    } else {

        input.nextElementSibling.innerHTML = "";
        input.classList.remove("errore");

    }

}

function controlloCampo (input, tipoRegex) {

    let regex, errorMessage;

    switch (tipoRegex) {

        case "nome":
        
            regex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)?$/;
            errorMessage = "Il nome inserito non è corretto"

            break;
    
        case "email":

            regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            errorMessage = "L'email inserita non è corretto"

            break;

        case "tel":
            
        regex = /^\+?[0-9]{6,15}$/; 
        errorMessage = "Il telefono inserito non è corretto"
        
    }

    if (input.trim().length == 0) {

        return "Campo obbligatorio";

    } else {

        if (!regex.test(input.trim())) {
        
            return errorMessage;

        }
    }

}

// function campRequired (camp) {

//     if (camp.value.trim().length == 0) {

//         return "Campo obbligatorio"
        
//     } else {

//         return false;
        
//     }

// }//######## CONTROLLO CAMPO OBBLIGATORIO ##############

// function checkName (name) {

//     const regexName = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)?$/;
//     if (!regexName.test(name.value.trim())) {
        
//         name.classList.add("errore");
//         name.nextElementSibling.innerHTML = "Il carattere digitato non va bene";

//     } else {
        
//         name.classList.remove("errore");
//         name.nextElementSibling.innerHTML = "";

//     }

// }// ###### CONTROLLO REGEX NOME ###########

// function checkEmail (email) {

//     const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (!regexEmail.test(email.value.trim())) {
        
//         email.classList.add("errore");
//         email.nextElementSibling.innerHTML = "La mail non va bene o non è completa";

//     } else {
        
//         email.classList.remove("errore");
//         email.nextElementSibling.innerHTML = "";

//     }

// }//###### CONTROLLO REGEX EMAIL ###########

// function checkTel (tel) {

//     const regexTel = /^\+?[0-9]{6,15}$/; 
//     if (!regexTel.test(tel.value.trim())) {
        
//         tel.classList.add("errore");
//         tel.nextElementSibling.innerHTML = "Il numero di telefono non va bene";

//     } else {
        
//         tel.classList.remove("errore");
//         tel.nextElementSibling.innerHTML = "";

//     }

// }//########## CONTROLLO REGEX TELEFONO #############
