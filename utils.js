// ============================================
// UTILS.JS - 10 FONCTIONS UTILITAIRES
// ============================================

/**
 * 1. estPair(n)
 * Vérifie si un nombre est pair.
 * @param {number} n - Le nombre à vérifier
 * @returns {boolean} - true si pair, false si impair
 */
function estPair(n) {
    return n % 2 === 0;
}


/**
 * 2. maxDeDeux(a, b)
 * Retourne le plus grand de deux nombres.
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} - Le plus grand des deux
 */
function maxDeDeux(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


/**
 * 3. convertirTemperature(c)
 * Convertit une température de Celsius vers Fahrenheit.
 * @param {number} c - Température en degrés Celsius
 * @returns {number} - Température en degrés Fahrenheit
 */
const convertirTemperature = function(c) {
    return (c * 9/5) + 32;
};


/**
 * 4. calculerTVA(prix, taux)
 * Calcule le prix TTC à partir du prix HT et du taux de TVA.
 * @param {number} prix - Prix hors taxe
 * @param {number} taux - Taux de TVA (ex: 0.20 pour 20%)
 * @returns {number} - Prix toutes taxes comprises
 */
const calculerTVA = function(prix, taux) {
    return prix * (1 + taux);
};


/**
 * 5. inverserChaine(texte)
 * Inverse une chaîne de caractères.
 * @param {string} texte - La chaîne à inverser
 * @returns {string} - La chaîne inversée
 */
function inverserChaine(texte) {
    let resultat = '';
    for (let i = texte.length - 1; i >= 0; i--) {
        resultat += texte[i];
    }
    return resultat;
}


/**
 * 6. compterVoyelles(texte)
 * Compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne.
 * @param {string} texte - La chaîne à analyser
 * @returns {number} - Le nombre de voyelles
 */
function compterVoyelles(texte) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let compteur = 0;
    const texteMinuscule = texte.toLowerCase();
    
    for (let i = 0; i < texteMinuscule.length; i++) {
        if (voyelles.includes(texteMinuscule[i])) {
            compteur++;
        }
    }
    return compteur;
}


/**
 * 7. estPalindrome(texte)
 * Vérifie si une chaîne est un palindrome (se lit dans les deux sens).
 * @param {string} texte - La chaîne à vérifier
 * @returns {boolean} - true si palindrome, false sinon
 */
function estPalindrome(texte) {
    const texteMinuscule = texte.toLowerCase();
    const texteInverse = inverserChaine(texteMinuscule);
    return texteMinuscule === texteInverse;
}


/**
 * 8. factorielle(n)
 * Calcule la factorielle d'un nombre (n! = n × (n-1) × ... × 1).
 * @param {number} n - Le nombre dont on veut la factorielle
 * @returns {number} - La factorielle de n
 */
const factorielle = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
};


/**
 * 9. estPremier(n)
 * Vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
 * @param {number} n - Le nombre à vérifier
 * @returns {boolean} - true si premier, false sinon
 */
const estPremier = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};


/**
 * 10. genererFibonacci(n)
 * Génère les n premiers nombres de la suite de Fibonacci.
 * @param {number} n - Le nombre d'éléments à générer
 * @returns {number[]} - Tableau contenant les n premiers nombres de Fibonacci
 */
const genererFibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const suite = [0, 1];
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    return suite;
};