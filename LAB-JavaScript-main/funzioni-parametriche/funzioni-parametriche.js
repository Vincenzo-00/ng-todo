let a = 2;
let b = 36;


function sottrazione (a, b, c, d){

    return a - b - c;

}

let sottraz = sottrazione(49, 32, 22);
console.log(sottraz);


// VOGLIO CONTARE QUANTE VOCALI CI SONO IN QUESTA STRINGA
let stringa = "Ciao a tutti io sono una stringa e contengo un sacco di vocali";



function countVocali(parametro){


    const vocali = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for(let i = 0; i < parametro.length; i++){

        for (let j = 0; j < vocali.length; j++) {
            
            if(parametro[i] === vocali[j]){

                counter++;

            }
            
        }
    //     console.log(stringa[i]);
    //     console.log(vocali[i]);
    //     if (stringa[i] == "a" || stringa[i] == "e" || stringa[i] == "i" || stringa[i] == "o" || stringa[i] == "u") {
            
    //         counter++;
    //         console.log(counter);
    //     }

    //     return counter;

    // }

    }

    return counter;

}
console.log(countVocali(stringa));