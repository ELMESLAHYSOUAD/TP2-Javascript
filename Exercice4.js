/**
 * Fonction qui calcule le produit de deux nombres.
 *
 * @param {number} a - Le premier nombre.
 * @param {number} [b=1] - Le deuxième nombre, avec une valeur par défaut de 1.
 * @returns {number} Le produit des deux nombres.
 */
function multiplier(a, b = 1) {
    // Retourne le produit de a et b
    return a * b;
}

// Test de la fonction avec et sans le second paramètre
console.log(multiplier(10, 3)); 
console.log(multiplier(7));     
console.log(multiplier(-4, 2));  
