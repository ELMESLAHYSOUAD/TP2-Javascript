[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/F6Ok3yG1)
# TP2_Javascript
TP N° 2 : Les fonctions

Au début de chaque exercice, commentez votre code en utilisant des commentaires JSDoc pour décrire les fonctions, leurs paramètres et les valeurs retournées. Ajoutez également des commentaires simples pour expliquer les parties importantes du code.
1.	Exercice  1

Écrivez une fonction nommée saluer qui prend un paramètre nom (une chaîne de caractères) et retourne une salutation sous la forme suivante :
Bonjour [nom] ! 
•	Utilisez le mot-clé function pour définir la fonction.

•	Assurez-vous que la fonction retourne la chaîne formatée et ne l'affiche pas directement.

•	Testez la fonction avec plusieurs noms différents.

2.	Exercice  2

Créez une fonction appelée somme qui prend deux nombres en paramètres et retourne leur somme.
Indications:

•	Utilisez le mot-clé return pour renvoyer le résultat.

•	Testez la fonction avec des valeurs positives, négatives et nulles.

3.	Exercice  3

Écrivez une fonction estPair qui prend un nombre en paramètre et retourne true si le nombre est pair, et false sinon.
Indications:
Renvoyez un booléen (true ou false).
    
4.	Exercice  4

Créez une fonction multiplier qui prend deux paramètres :
a et b avec une valeur par défaut de 1 pour b. La fonction doit retourner le produit des deux nombres.
Indications:

•	Utilisez la syntaxe des paramètres par défaut (b = 1).

•	Testez la fonction avec et sans le second paramètre.

5.	Exercice  5

Écrivez une fonction factorielle qui prend un nombre entier positif n et retourne sa factorielle (n!).
Rappel: 
La factorielle de 5 (5!) est égale à 5 × 4 × 3 × 2 × 1 = 120.

Indications:

•	Utilisez une condition pour arrêter la récursion (cas de base: n <= 1).

•	Appliquez l’appel récursif dans la fonction.

6.	Exercice  6

Créez une fonction executer qui prend deux paramètres : une fonction f et un nombre n. La fonction executer doit appeler la fonction f avec n comme argument.
Indications:

•	Créez une fonction simple comme afficherCarre qui affiche le carré d’un nombre.

•	Passez afficherCarre comme argument à executer.

7.	Exercice  7

Transformez la fonction suivante en fonction fléchée :

function ajouter (a, b) {
return a + b ;
}
 
8.	Exercice  8

Créez une fonction composer qui prend deux fonctions f et g en paramètres et retourne une nouvelle fonction qui, lorsqu'elle est appelée avec un argument x, applique g à x puis applique f au résultat de g(x).

Ensuite, créez deux fonctions simples :

•	double qui prend un nombre et retourne son double.

•	incrementer qui prend un nombre et retourne ce nombre plus 1.

Utilisez composer pour créer une nouvelle fonction doublePuisIncrementer qui double un nombre puis l'incrémente, et une autre fonction incrementerPuisDouble qui incrémente d'abord puis double le nombre.

Indications:

•	La fonction composer doit renvoyer une fonction anonyme.

•	Utilisez des fonctions fléchées pour simplifier votre code.

•	Testez vos fonctions avec plusieurs valeurs.

9.	Exercice  9

A.	Installer JSDoc globalement :

Utilisez npm pour installer JSDoc sur votre système.

`npm  install -g jsdoc`

B.	Générer la documentation

Exécutez la commande suivante dans le terminal à la racine de votre projet :

`jsdoc . -r -d docs` 

Explication des options :

    . : Analyse tous les fichiers JavaScript dans le dossier courant.
    
    -r : Analyse les dossiers de manière récursive.
    
    -d docs : Crée un dossier docs où la documentation sera générée.
