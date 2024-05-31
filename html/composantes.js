const baseUrl = "http://127.0.0.1:8080/ords/tp3/";
const carteGraphiqueUrl = "cartegraphique/";


const carteMereUrl = "cartemere";
const cpuUrl = "processeur";
const ramUrl = "ram";

let totalCommande;

document.addEventListener("DOMContentLoaded", async function () {
    const carteGraphiqueDiv = document.getElementById('conteneurCartesGraphiques');
    let url = baseUrl + carteGraphiqueUrl;
    console.log('Fetching URL:', url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        let cartesGraphiquesJson = data.items;
        cartesGraphiquesJson.forEach(element => {
            // Creation des elements
            let newDiv = document.createElement('div');
            newDiv.id = "carteGraphique";
            let nomCarte = document.createElement('h4');
            let descCarte = document.createElement('h5');
            let prixCarte = document.createElement('h5');
            let boutonAchat = document.createElement('button');

            nomCarte.innerHTML = element.cartegraphique_nom;
            descCarte.innerHTML = element.cartegraphique_description;
            prixCarte.innerHTML = element.cartegraphique_prix;
            boutonAchat.innerHTML = 'Acheter';

            boutonAchat.onclick = function () {
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

    // COMMENTAIRE IMPORTANT : VU QUE LA CONNECTION A LA BD FONCTIONNE PAS, ON VA HARD-CODE UNE ENTRÉE POUR DEMONSTRATION.

    // SECTION CODE LONGUE ET MANUELLE. SI LA CONNECTION À LA BD FONCTIONNERAIT, ÉVIDEMMENT QUE CE CODE NE SERAIT PAS NÉCESSAIRE.

    console.log("Hard-code entry");
    HardCodeCartesGraphiques();
    HardCodeCPU();
    HardCodeCarteMeres();
    HardCodeRAM();

carteGraphiqueDiv.appendChild(newDiv4);
});

async function AcheterObjet(objet, element) {
    // À NOTER : NE FONCTIONNERA PAS DUE À LA CONNECTION ERRONÉE DE LA BASE DE DONNÉE.
    console.log("Objet achetée: ",objet.id);
    element.remove();
    totalCommande = document.getElementById('totalCommande');
    let currentTotal = parseInt(totalCommande.innerHTML);
    totalCommande.innerHTML = currentTotal+objet.prix;
    try {
        const url = baseUrl + carteGraphiqueUrl + objet.id;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Deleted:', objet.id);

        } else {
            console.error('Failed to delete:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting object:', error);
    }
}

// SECTIONS HARD-CODE
function HardCodeCartesGraphiques() {
    const carteGraphiqueDiv = document.getElementById('conteneurCartesGraphiques');

    const hardCodedGraphicsCards = [
        {
            id: 1,
            nom: "NVIDIA GeForce RTX 3090",
            description: "High-end gaming graphics card",
            prix: 1499
        },
        {
            id: 2,
            nom: "AMD Radeon RX 6800 XT",
            description: "High performance graphics card",
            prix: 649
        },
        {
            id: 3,
            nom: "NVIDIA GeForce RTX 3080",
            description: "Gaming graphics card",
            prix: 699
        },
        {
            id: 4,
            nom: "AMD Radeon RX 6700 XT",
            description: "Mid-range graphics card",
            prix: 479
        }
    ];

    hardCodedGraphicsCards.forEach(card => {
        let newDiv = document.createElement('div');
        newDiv.id = "carteGraphique";
        let nomCarte = document.createElement('h4');
        let descCarte = document.createElement('h5');
        let prixCarte = document.createElement('h5');
        let boutonAchat = document.createElement('button');

        nomCarte.innerHTML = card.nom;
        descCarte.innerHTML = card.description;
        prixCarte.innerHTML = card.prix;
        boutonAchat.innerHTML = 'Acheter';

        boutonAchat.onclick = function () {
            AcheterObjet(card, newDiv);
        };

        newDiv.appendChild(nomCarte);
        newDiv.appendChild(descCarte);
        newDiv.appendChild(prixCarte);
        newDiv.appendChild(boutonAchat);

        carteGraphiqueDiv.appendChild(newDiv);
    });
}
function HardCodeCPU() {
    const cpuDiv = document.getElementById('conteneurCPU');

    const hardCodedCPUs = [
        {
            id: 1,
            nom: "Intel Core i7-10700K",
            description: "High-end processor",
            prix: 399
        },
        {
            id: 2,
            nom: "AMD Ryzen 9 5900X",
            description: "High-end AMD processor",
            prix: 799
        },
        {
            id: 3,
            nom: "Intel Core i5-10600K",
            description: "Mid-range processor",
            prix: 249
        },
        {
            id: 4,
            nom: "AMD Ryzen 7 5800X",
            description: "High performance AMD processor",
            prix: 499
        }
    ];

    hardCodedCPUs.forEach(cpu => {
        let newDiv = document.createElement('div');
        newDiv.id = "cpu";
        let nomCPU = document.createElement('h4');
        let descCPU = document.createElement('h5');
        let prixCPU = document.createElement('h5');
        let boutonAchat = document.createElement('button');

        nomCPU.innerHTML = cpu.nom;
        descCPU.innerHTML = cpu.description;
        prixCPU.innerHTML = cpu.prix;
        boutonAchat.innerHTML = 'Acheter';

        boutonAchat.onclick = function () {
            AcheterObjet(cpu, newDiv);
        };

        newDiv.appendChild(nomCPU);
        newDiv.appendChild(descCPU);
        newDiv.appendChild(prixCPU);
        newDiv.appendChild(boutonAchat);

        cpuDiv.appendChild(newDiv);
    });
}

function HardCodeCarteMeres() {
    const carteMereDiv = document.getElementById('conteneurCarteMere');

    const hardCodedMotherboards = [
        {
            id: 1,
            nom: "ASUS ROG Strix Z490-E",
            description: "Gaming motherboard",
            prix: 299
        },
        {
            id: 2,
            nom: "MSI MPG B550 GAMING EDGE",
            description: "Motherboard for AMD processors",
            prix: 179
        },
        {
            id: 3,
            nom: "Gigabyte Z590 AORUS ELITE",
            description: "High-end motherboard",
            prix: 249
        },
        {
            id: 4,
            nom: "ASRock B450M PRO4",
            description: "Budget motherboard",
            prix: 89
        }
    ];

    hardCodedMotherboards.forEach(board => {
        let newDiv = document.createElement('div');
        newDiv.id = "carteMere";
        let nomCarte = document.createElement('h4');
        let descCarte = document.createElement('h5');
        let prixCarte = document.createElement('h5');
        let boutonAchat = document.createElement('button');

        nomCarte.innerHTML = board.nom;
        descCarte.innerHTML = board.description;
        prixCarte.innerHTML = board.prix;
        boutonAchat.innerHTML = 'Acheter';

        boutonAchat.onclick = function () {
            AcheterObjet(board, newDiv);
        };

        newDiv.appendChild(nomCarte);
        newDiv.appendChild(descCarte);
        newDiv.appendChild(prixCarte);
        newDiv.appendChild(boutonAchat);

        carteMereDiv.appendChild(newDiv);
    });
}

function HardCodeRAM() {
    const ramDiv = document.getElementById('conteneurRAM');

    const hardCodedRAM = [
        {
            id: 1,
            nom: "Corsair Vengeance LPX",
            description: "High performance RAM",
            prix: 89
        },
        {
            id: 2,
            nom: "G.SKILL Trident Z RGB",
            description: "Gaming RAM with RGB lighting",
            prix: 129
        },
        {
            id: 3,
            nom: "Kingston HyperX Fury",
            description: "Reliable gaming RAM",
            prix: 79
        },
        {
            id: 4,
            nom: "Crucial Ballistix",
            description: "Budget gaming RAM",
            prix: 59
        }
    ];

    hardCodedRAM.forEach(ram => {
        let newDiv = document.createElement('div');
        newDiv.id = "ram";
        let nomRAM = document.createElement('h4');
        let descRAM = document.createElement('h5');
        let prixRAM = document.createElement('h5');
        let boutonAchat = document.createElement('button');

        nomRAM.innerHTML = ram.nom;
        descRAM.innerHTML = ram.description;
        prixRAM.innerHTML = ram.prix;
        boutonAchat.innerHTML = 'Acheter';

        boutonAchat.onclick = function () {
            AcheterObjet(ram, newDiv);
        };

        newDiv.appendChild(nomRAM);
        newDiv.appendChild(descRAM);
        newDiv.appendChild(prixRAM);
        newDiv.appendChild(boutonAchat);

        ramDiv.appendChild(newDiv);
    });
}
//HARDCODES DES PC PRECONSRTUITS ET LEURS LISTES DE COMPOSANTS PCQ LA BD MARCHE PAS
document.addEventListener('DOMContentLoaded', () => {
    //HARD CODE DES COMPOSANT HAUTTE GAMME
    const hautteGammeGraphicsCard = {
        nom: 'NVIDIA GeForce RTX 3090',
        prix: 1499
    };

    const hautteGammeCPU = {
        nom: 'AMD Ryzen 9 5900X',
        prix: 799
    };

    const hautteGammeMotherboard = {
        nom: 'ASUS ROG Strix B550-F',
        prix: 299
    };

    const hautteGammeRAM = {
        nom: 'G.SKILL Trident Z RGB',
        nombregb: '32',
        prix: 129
    };

    // Calculer le prix total
    const totalPrice = hautteGammeGraphicsCard.prix + hautteGammeCPU.prix + hautteGammeMotherboard.prix + hautteGammeRAM.prix + 200;

    // remplir le html de façon dynamique
    document.getElementById('HauteGamme-carteGraphique').querySelector('h4').textContent = hautteGammeGraphicsCard.nom;
    document.getElementById('HauteGamme-cpu').querySelector('h4').textContent = hautteGammeCPU.nom;
    document.getElementById('HauteGamme-motherboard').querySelector('h4').textContent = hautteGammeMotherboard.nom;
    document.getElementById('HauteGamme-ram').querySelector('h4').textContent = `${hautteGammeRAM.nom} - ${hautteGammeRAM.nombregb} GB`;

    // remplir le contenu du boutton
    const acheterButton = document.getElementById('HG-acheterButton');
    acheterButton.textContent = `Acheter - ${totalPrice}$`;
});

document.addEventListener('DOMContentLoaded', () => {
    //HARD CODE DES COMPOSANT MILLIEU DE GAMME
    const millieuxGammeGraphicsCard = {
        nom: 'NVIDIA GeForce RTX 3080',
        prix: 699
    };

    const millieuxGammeCPU = {
        nom: 'Intel Core i5-13600K',
        prix: 319
    };

    const millieuxGammeMotherboard = {
        nom: 'Asrock H510M-HDV',
        prix: 129
    };

    const millieuxGammeRAM = {
        nom: 'Kingston HyperX Fury',
        nombregb: '16',
        prix: 79
    };

    // Calculer le prix total
    const totalPrice = millieuxGammeGraphicsCard.prix + millieuxGammeCPU.prix + millieuxGammeMotherboard.prix + millieuxGammeRAM.prix + 200;

    // remplir le html de façon dynamique
    document.getElementById('MillieuxGamme-carteGraphique').querySelector('h4').textContent = millieuxGammeGraphicsCard.nom;
    document.getElementById('MillieuxGamme-cpu').querySelector('h4').textContent = millieuxGammeCPU.nom;
    document.getElementById('MillieuxGamme-motherboard').querySelector('h4').textContent = millieuxGammeMotherboard.nom;
    document.getElementById('MillieuxGamme-ram').querySelector('h4').textContent = `${millieuxGammeRAM.nom} - ${millieuxGammeRAM.nombregb} GB`;

    // remplir le contenu du boutton
    const acheterButton = document.getElementById('MG-acheterButton');
    acheterButton.textContent = `Acheter - ${totalPrice}$`;
});

document.addEventListener('DOMContentLoaded', () => {
    //HARD CODE DES COMPOSANT BAS DE GAMME
    const BasGammeGraphicsCard = {
        nom: 'NVIDIA GeForce GTX 1660TI',
        prix: 400
    };

    const BasGammeCPU = {
        nom: 'Intel Core i3-13600K',
        prix: 119
    };

    const BasGammeMotherboard = {
        nom: 'Asrock H510M-HDV',
        prix: 129
    };

    const BasGammeRAM = {
        nom: 'Kingston HyperX Fury',
        nombregb: '16',
        prix: 79
    };

    // Calculer le prix total
    const totalPrice = BasGammeGraphicsCard.prix + BasGammeCPU.prix + BasGammeMotherboard.prix + BasGammeRAM.prix + 200;

    // remplir le html de façon dynamique
    document.getElementById('BasGamme-carteGraphique').querySelector('h4').textContent = BasGammeGraphicsCard.nom;
    document.getElementById('BasGamme-cpu').querySelector('h4').textContent = BasGammeCPU.nom;
    document.getElementById('BasGamme-motherboard').querySelector('h4').textContent = BasGammeMotherboard.nom;
    document.getElementById('BasGamme-ram').querySelector('h4').textContent = `${BasGammeRAM.nom} - ${BasGammeRAM.nombregb} GB`;

    // remplir le contenu du boutton
    const acheterButton = document.getElementById('BG-acheterButton');
    acheterButton.textContent = `Acheter - ${totalPrice}$`;
});
//FAIRE L'ACTION DACHETER POUR ENLEVER LE PRODUIT
document.addEventListener('DOMContentLoaded', () => {
    const hgAcheterButton = document.getElementById('HG-acheterButton');
    hgAcheterButton.addEventListener('click', () => {
        const pcHautteGamme = document.getElementById('PC-HautteGamme');
        pcHautteGamme.remove();
    });

    const mgAcheterButton = document.getElementById('MG-acheterButton');
    mgAcheterButton.addEventListener('click', () => {
        const pcMillieuxGamme = document.getElementById('PC-MillieuxGamme');
        pcMillieuxGamme.remove();
    });

    const bgAcheterButton = document.getElementById('BG-acheterButton');
    bgAcheterButton.addEventListener('click', () => {
        const pcBasseGamme = document.getElementById('PC-BasseGamme');
        pcBasseGamme.remove();
    });
});