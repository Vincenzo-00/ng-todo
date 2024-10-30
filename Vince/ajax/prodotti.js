let skip = 0;
let contatore = 1;

function getProdotti() {
    const divProdotti = document.getElementById("divProdotti");
    divProdotti.innerHTML = "";
    skip = 0;

    const spinner = document.getElementById("spinner");
    spinner.classList.remove("d-none");

    fetch("https://dummyjson.com/products?limit=6&delay=5000")
        .then(response => {
            console.log(response.status);
            return response.json();
        })
        .then((dati) => {
            console.log(dati);
            skip += dati.limit;
            generaHTMLProdotti(dati.products, divProdotti, "bg-success");
        })
        .catch(err => console.log(err))
        .finally(() => spinner.classList.add("d-none"));
}

function getAltriProdotti() {
    const divProdotti = document.getElementById("divProdotti");

    const spinner = document.getElementById("spinner");
    spinner.classList.remove("d-none");

    fetch("https://dummyjson.com/products?limit=6&skip=" + skip)
        .then(response => {
            console.log(response.status);
            return response.json();
        })
        .then(dati => {
            console.log(dati);
            skip += dati.limit;
            generaHTMLProdotti(dati.products, divProdotti, "bg-warning");
        })
        .catch(err => console.log(err))
        .finally(() => spinner.classList.add("d-none"));
}

function generaHTMLProdotti(prodotti, divNelQualeInserireIProdotti, bgColorClass) {
    for (const prodotto of prodotti) {
        divNelQualeInserireIProdotti.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${prodotto.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body ${bgColorClass}">
                    <h5 class="card-title text-truncate">${prodotto.title} - ${prodotto.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${prodotto.category}</h6>
                    <p class="card-text text-truncate">${prodotto.description}</p>
                    <p class="card-text">€ <strong>${prodotto.price}</strong></p>
                </div>
            </div>
        </div>
        `;
    }
}

function incrementa() {
    contatore += 1;
    document.getElementById("risultato").innerHTML = contatore;
}