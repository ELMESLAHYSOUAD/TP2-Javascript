/**
 * Fonction qui détermine si un nombre est pair.
 *
 * @param {number} nombre - Le nombre à vérifier.
 * @returns {boolean} true si le nombre est pair, false sinon.
 */
function estPair(nombre) {
    // Retourne true si le nombre est divisible par 2, sinon retourne false
    return nombre % 2 === 0;
}

// Test de la fonction avec différentes valeurs
console.log(estPair(3));  
console.log(estPair(8));  
console.log(estPair(0));  
