/**
 *fonction qui traite la salutation d'une personne
 *
 * @param {string} nom - le nom de la personne à saluer 
 * @return {string} salutation formatée
 */
function saluer(nom){
    return `Bonjour [${nom}] !`;
}
//test de la fonction saluer 
console.log(saluer("Souad"));
console.log(saluer("Mohamed"));
console.log(saluer("Najat"));