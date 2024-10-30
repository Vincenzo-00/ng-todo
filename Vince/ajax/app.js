window.onload = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log("risposta ricevuta con successo");

            res.json()
                .then(dati => {
                    generaHTMLPosts(dati);
                })
                .catch(err => {
                    console.log("errore nell'estrapolazione del json dal body della richiesta");
                })
        })
        .catch(err => {
            console.log("risposta con errore");
        });

    console.log("richiesta invtata");
}

console.log("documento caricato");

function generaHTMLPosts(posts) {
    let html = "<ul>"

    for (const post of posts) {
        html += `<li>${post.title}</li>`;
    }
    html += "</ul>";

    document.querySelector("#posts").innerHTML = html;
}
