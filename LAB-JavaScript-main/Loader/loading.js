console.log ("Hello");

let load1; //dichiaro la variabile in un punto del file esterno a entrambe le funzioni

document.addEventListener("DOMContentLoaded", function(){

    console.log("Read all tags")
    load1 = document.querySelector("#loader");

}) 

window.onload=function() {

    console.log("All loaded")
    load1.style.display="none";

}