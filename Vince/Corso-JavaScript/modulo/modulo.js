
document.getElementById("invia").onclick=function() {
    console.log("test");

    let contenuto;
    // questi sono tutti test
    console.log(contenuto);   
    contenuto=document.getElementById("nome").value;
    // questi sono tutti test
    console.log(contenuto);

    // document.getElementById("risultato").innerHTML=contenuto;

    console.log(contenuto.length);

    if (contenuto.length > 2)
    {
        document.getElementById("risultato").innerHTML=contenuto;
    }
    else
    {
        document.getElementById("risultato").innerHTML="";
        alert("Devi scrivere almeno 3 caratteri");
    }
} // onclick