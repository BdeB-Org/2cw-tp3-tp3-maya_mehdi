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