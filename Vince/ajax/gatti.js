// window.onload = getGatti;

window.onload = () => {
    getGatti();
}

function getGatti(peso = 100) {
    document.getElementById("spinner").classList.remove("d-none");

    fetch(`https://api.api-ninjas.com/v1/cats?max_weight=${peso}`, {
        method: "GET",
        headers: {
            "X-Api-Key": "JEyXgpuU9vhO/sPx4m47gg==LrkMb90kIB12gCDt",
        }
    })
        .then(res => res.json())
        .then(gatti => generaHTMLGatti(gatti))
        .catch(err => console.log(err))
        .finally(() => document.getElementById("spinner").classList.add("d-none"))
}

function generaHTMLGatti(gatti) {
    const divGatti = document.getElementById("divGatti");
    divGatti.innerHTML = "";

    for (const gatto of gatti) {
        divGatti.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${gatto.image_link}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${gatto.name}</h5>
                    <p>${gatto.origin}</p>
                    <p>Peso: ${gatto.min_weight}/${gatto.max_weight}</p>
                </div>
            </div>
        </div>
        `;
    }
}

function cerca() {
    let peso = parseInt(document.getElementById("peso").value);

    if (peso) {
        console.log(peso)
        getGatti(peso);
    }
}