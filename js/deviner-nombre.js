/**
 * Jeu du nombre mystère
 * @author  Theo OBerli
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
// Définition de la fonction tireNombre qui génère un nombre aléatoire entre min et max
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Initialisation des variables
let nbMystere = 0; // Le nombre mystère à deviner
let nbEssais = 0; // Le nombre d'essais effectués par l'utilisateur
let reponse = null; // La réponse de l'utilisateur
let message = 'Entrez un nombre entre 1 et 100'; // Message initial demandant à l'utilisateur d'entrer un nombre

// Génération du nombre mystère entre 1 et 100
nbMystere = tireNombre(1, 100);

// Boucle principale du jeu
do {
    // Demande à l'utilisateur d'entrer un nombre via une boîte de dialogue
    reponse = prompt(message);
    // Incrémente le nombre d'essais
    nbEssais++;

    // Vérifie si la réponse de l'utilisateur est inférieure au nombre mystère
    if (reponse < nbMystere)
    {
        // Met à jour le message pour indiquer à l'utilisateur de choisir un nombre plus grand
        message = 'C\'est plus !';
    }
    // Vérifie si la réponse de l'utilisateur est supérieure au nombre mystère
    else if (reponse > nbMystere)
    {
        // Met à jour le message pour indiquer à l'utilisateur de choisir un nombre plus petit
        message = 'C\'est moins !';
    }
    // Si la réponse de l'utilisateur est égale au nombre mystère
    else {
        // Affiche un message de félicitations avec le nombre d'essais effectués
        alert(`Vous avez trouvé après ${nbEssais} essai(s).`);

    }
}
// La boucle continue tant que la réponse de l'utilisateur n'est pas égale au nombre mystère
while (nbMystere !== reponse);




