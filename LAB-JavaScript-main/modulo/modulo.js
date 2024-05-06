const modulo = document.getElementById("iscrizione");
console.log(modulo, "tutto il form");


// modulo.onsubmit=function(e){

//     e.preventDefault();
//     console.log(e);
//     console.log("submit");

// }

modulo.addEventListener("submit", function(e){

    e.preventDefault();
    console.log(e, "e di evento");
    console.log(this, "this nell'evento addEventListener");
    const inputs = document.querySelectorAll(".required"); // così ho chiamato tutti gli input
    console.log(inputs);

    // let check = campRequired(document.getElementById("nome"));
    // campRequired(document.getElementById("mail"));
    // campRequired(document.getElementById("password"));
    // campRequired(document.getElementById("citta"));

    // if (check) { // SE NON METTO NULLA NELLA CONDIZIONE SIGNIFICHERA SEMPRE UN CONTROLLO == TRUE
        
    //     document.getElementById("nome").classList.add("error")

    // } else {
        
    //     document.getElementById("nome").classList.add("error")

    // }

    for (let i = 0; i < inputs.length; i++) {
    
        if (campRequired(inputs[i])) {
            
            inputs[i].classList.add("error")
            inputs[i].nextElementSibling.innerHTML = "Campo obbligatorio"; 
            inputs[i].nextElementSibling.classList.add("msgError"); // elemento subito dopo l'input ovvero lo span
    
        } else {
    
            inputs[i].classList.remove("error")
            inputs[i].nextElementSibling.innerHTML=""; 
            inputs[i].nextElementSibling.classList.remove("msgError");
    
        }
        
    }

    // COSI CONTROLLLO SE NELL'EMAIL CI SIA GIA UN PROBLEMA O IN QUESTO CASO ABBIA GIA LA CLASSE ERROR
    if (!document.getElementById("mail").classList.contains("error")) {
        
        campEmail(document.getElementById("mail"));

    }

    const privacy = document.getElementById("privacy")
    if (privacy.checked) {
      
        privacy.classList.remove("error")
        privacy.nextElementSibling.nextElementSibling.innerHTML=""; 
        privacy.nextElementSibling.nextElementSibling.classList.remove("msgError");
    
    } else {

        privacy.classList.add("error")
        privacy.nextElementSibling.nextElementSibling.innerHTML = "Devi accettare le condizioni di utilizzo"; 
        privacy.nextElementSibling.nextElementSibling.classList.add("msgError");
    }
    //############# FINE CONTROLLO ERRORI ################

    const errori = document.querySelectorAll(".error").length;
    if (errori == 0) {
        
        //QUI POSSO SPEDIRE I DATI
        modulo.submit();

    }

});



// const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// console.log(typeof(regexEmail), "tipo della variabile regexEmail");
// let checkMail = regexEmail.test("vincenzo@ggg.it"); // test() è un metodo di quell'oggetto
// console.log(checkMail, "controllo compatibiltà della mail");


// function campRequired(campo) {

//     console.log(campo.value.length, "lunghezza stringa input"); // lo spazio vale come carattere
//     console.log(campo.value.trim().length, "lunghezza calcolata togliendo gli spazi"); // trim () pulisci quello che hai letto prima e dopo di quello che è stato scritto
//     console.log(this, "funciotn campRequired");

//     if (campo.value.trim().length == 0) {
        
//         campo.classList.add("error");
//         campo.nextElementSibling.innerHTML = "Campo obbligatorio"; 
//         campo.nextElementSibling.classList.add("msgError"); // elemento subito dopo l'input ovvero lo span

//     } else {

//         console.log("ok");
//         campo.classList.remove("error");
//         campo.nextElementSibling.innerHTML=""; 
//         campo.nextElementSibling.classList.remove("msgError");

//     }

    

// }

function campRequired(campo) {

    if (campo.value.trim().length == 0) {
        
        return true;

    } else {

        return false;

    }
}

function campEmail (campo) {

    let mailChecked = checkMail(campo.value.trim());
    console.log(mailChecked, "controllo mail dopo la funzione");
    if (!mailChecked) {

        campo.classList.add("error");
        campo.nextElementSibling.innerHTML = "Email errata"
        campo.nextElementSibling.classList.add("msgError")

    } else {
        
        campo.classList.remove("error");
        campo.nextElementSibling.innerHTML = ""
        campo.nextElementSibling.classList.remove("msgError")

    }

}

function checkMail (email) {

    const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(typeof(regexEmail), "tipo della variabile regexEmail");
    regexEmail.test(email); // test() è un metodo di quell'oggetto
    console.log(regexEmail.test(email));

    // if (regexEmail.test(email)) {

    //     return true;
        
    // } else {
        
    //     return false;

    // }

    return regexEmail.test(email);

}