/**
 * Fonction qui exécute une fonction avec un argument donné.
 *
 * @param {function} f - La fonction à exécuter.
 * @param {number} n - Le nombre à passer à la fonction.
 */
function executer(f, n) {
    // Appelle la fonction f avec l'argument n
    f(n);
}

/**
 * Fonction qui affiche le carré d'un nombre.
 *
 * @param {number} x - Le nombre dont on veut afficher le carré.
 */
function afficherCarre(x) {
    // Calcule le carré et l'affiche
    console.log(`Le carré de ${x} est ${x * x}.`);
}

// Test de la fonction executer avec afficherCarre
executer(afficherCarre, 4); 
