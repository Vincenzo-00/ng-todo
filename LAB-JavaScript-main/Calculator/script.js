            
            // ####### SOMMA #########

document.getElementById("somma").onclick=function() {

    let number1 = parseFloat(document.getElementById("number").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1)==true) {
        // qua il primo valore non è un numero
        document.getElementById("error1").style.display="block" // cambio il display da none a block
        
        if (isNaN(number2)==true) {

            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato nel secondo if")

        } else {

            document.getElementById("error2").style.display="none"

        }
        console.log("number1 sbagliato")
    } else {
        if (isNaN(number2)==true) {
            // se entro qua significa che il primo valore è veramente un numero
            // qua il secondo valore non è un numero

            document.getElementById("error1").style.display="none"
            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato")

        } else {
                // qua sia il primo che il secondo sono veramente dei numeri
                document.getElementById("error1").style.display="none"
                document.getElementById("error2").style.display="none"

                let risultato= number1 + number2;
                
                document.getElementById("risultato").value=risultato;
        }

    }
}

            // ####### SOTTRAZIONE #########


document.getElementById("sottrazione").onclick=function() {

    let number1 = parseFloat(document.getElementById("number").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1)==true) {
        // qua il primo valore non è un numero
        document.getElementById("error1").style.display="block" // cambio il display da none a block
        
        if (isNaN(number2)==true) {

            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato nel secondo if")

        } else {

            document.getElementById("error2").style.display="none"

        }
        console.log("number1 sbagliato")
    } else {
        if (isNaN(number2)==true) {
            // se entro qua significa che il primo valore è veramente un numero
            // qua il secondo valore non è un numero

            document.getElementById("error1").style.display="none"
            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato")

        } else {
                // qua sia il primo che il secondo sono veramente dei numeri
                document.getElementById("error1").style.display="none"
                document.getElementById("error2").style.display="none"

                let risultato= number1 - number2;
                
                document.getElementById("risultato").value=risultato;
        }

    }
}

            // ####### MOLTIPLICAZIONE #########


document.getElementById("moltiplicazione").onclick=function() {

    let number1 = parseFloat(document.getElementById("number").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1)==true) {
        // qua il primo valore non è un numero
        document.getElementById("error1").style.display="block" // cambio il display da none a block
        
        if (isNaN(number2)==true) {

            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato nel secondo if")

        } else {

            document.getElementById("error2").style.display="none"

        }
        console.log("number1 sbagliato")
    } else {
        if (isNaN(number2)==true) {
            // se entro qua significa che il primo valore è veramente un numero
            // qua il secondo valore non è un numero

            document.getElementById("error1").style.display="none"
            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato")

        } else {
                // qua sia il primo che il secondo sono veramente dei numeri
                document.getElementById("error1").style.display="none"
                document.getElementById("error2").style.display="none"

                let risultato= number1 * number2;
                
                document.getElementById("risultato").value=risultato;
        }

    }
}

            // ####### DIVISIONE #########


document.getElementById("divisione").onclick=function() {

    let number1 = parseFloat(document.getElementById("number").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1)==true) {
        // qua il primo valore non è un numero
        document.getElementById("error1").style.display="block" // cambio il display da none a block
        
        if (isNaN(number2)==true) {

            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato nel secondo if")

        } else {

            document.getElementById("error2").style.display="none"

        }
        console.log("number1 sbagliato")
    } else {
        if (isNaN(number2)==true) {
            // se entro qua significa che il primo valore è veramente un numero
            // qua il secondo valore non è un numero

            document.getElementById("error1").style.display="none"
            document.getElementById("error2").style.display="block"
            console.log("number2 sbagliato")

        } else {
                // qua sia il primo che il secondo sono veramente dei numeri
                document.getElementById("error1").style.display="none"
                document.getElementById("error2").style.display="none"

                let risultato= number1 / number2;
                
                document.getElementById("risultato").value=risultato;
        }

    }
}

