/**
 * Fonction qui compose deux fonctions f et g.
 *
 * @param {function} f - La fonction à appliquer en premier.
 * @param {function} g - La fonction à appliquer en second.
 * @returns {function} Une nouvelle fonction qui applique g puis f.
 */
const composer = (f, g) => x => f(g(x));

/**
 * Fonction qui double un nombre.
 *
 * @param {number} n - Le nombre à doubler.
 * @returns {number} Le double du nombre.
 */
const double = n => n * 2;

/**
 * Fonction qui incrémente un nombre de 1.
 *
 * @param {number} n - Le nombre à incrémenter.
 * @returns {number} Le nombre incrémenté.
 */
const incrementer = n => n + 1;

// Composition des fonctions
const doublePuisIncrementer = composer(incrementer, double);
const incrementerPuisDouble = composer(double, incrementer);

// Tests des fonctions composées avec différentes valeurs
console.log(doublePuisIncrementer(3));  
console.log(doublePuisIncrementer(5));

console.log(incrementerPuisDouble(3));  
