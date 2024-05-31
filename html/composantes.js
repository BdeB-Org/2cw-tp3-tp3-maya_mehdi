const baseUrl = "http://127.0.0.1:8080/ords/tp3/";
const carteGraphiqueUrl = "cartegraphique/";
const carteGraphiqueDiv = document.getElementById('conteneurCartesGraphiques');

const carteMereUrl = "cartemere";
const cpuUrl = "processeur";
const ramUrl = "ram";

document.addEventListener("DOMContentLoaded", async function() {
    let url = baseUrl + carteGraphiqueUrl;
    console.log('Fetching URL:', url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        let cartesGraphiquesJson = data.items;
        cartesGraphiquesJson.forEach(element => {
            // Creation des elements
            let newDiv = document.createElement('div');
            newDiv.id="carteGraphique";
            let nomCarte = document.createElement('h4');
            let descCarte = document.createElement('h5');
            let prixCarte = document.createElement('h5');
            let boutonAchat = document.createElement('button');

            nomCarte.innerHTML = element.cartegraphique_nom;
            descCarte.innerHTML = element.cartegraphique_description;
            prixCarte.innerHTML = element.cartegraphique_prix;
            boutonAchat.innerHTML = 'Acheter';

            boutonAchat.onclick = function() {
                AcheterObjet({
                    id: element.cartegraphique_id,
                    nom: element.cartegraphique_nom,
                    description: element.cartegraphique_description,
                    prix: element.cartegraphique_prix
                });
            };

            newDiv.appendChild(nomCarte);
            newDiv.appendChild(descCarte);
            newDiv.appendChild(prixCarte);
            newDiv.appendChild(boutonAchat);

            carteGraphiqueDiv.appendChild(newDiv);
        });
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    // COMMENTAIRE IMPORTANT : VU QUE LA CONNECTION A LA BD FONCTIONNE PAS, ON VA HARD-CODE UNE ENTRÉE POUR DEMONSTRATION

});

function AcheterObjet(objet) {
    console.log('Acheter:', objet);

}