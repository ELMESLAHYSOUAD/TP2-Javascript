/**
 * Fonction qui calcule la factorielle d'un nombre entier positif.
 *
 * @param {number} n - Le nombre dont on veut calculer la factorielle.
 * @returns {number} La factorielle de n.
 */
function factorielle(n) {
    // si n=0 ou 1, la factorielle est 1
    if (n <=1) {
        return 1;
    }

    // Appel récursif pour calculer la factorielle
    return n * factorielle(n - 1);
}

// Test de la fonction avec différentes valeurs
console.log(factorielle(5));  
console.log(factorielle(0));  
console.log(factorielle(1));  
