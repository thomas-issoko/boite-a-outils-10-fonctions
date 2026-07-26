// ============================================
// SCRIPT.JS - DÉMONSTRATION DES 10 FONCTIONS

// ============================================

const sortie = document.querySelector("#sortie");

function afficher(html) {
    sortie.innerHTML += html;
}

// ============================================
// FONCTION POUR AFFICHER UNE SECTION DE DÉMO
// ============================================

/**
 * Affiche une fonction et ses résultats dans la page
 * @param {string} id - L'ID de la section HTML
 * @param {string} nom - Le nom de la fonction
 * @param {string} description - La description de la fonction
 * @param {string} badge - La classe du badge (nombres, chaines, conversion)
 * @param {Array} exemples - Tableau d'exemples [{args: [...], resultat: ...}]
 */
function afficherDemoFonction(id, nom, description, badge, exemples) {
    // Construction du HTML
    let html = `
        <section id="${id}" class="fonction-section">
            <h2>${nom}</h2>
            <span class="badge badge-${badge}">${badge}</span>
            <p>${description}</p>
            <div class="signature">
                <code>${nom}</code>
            </div>
            <div class="exemples">
                <h3>Exemples :</h3>
    `;
    
    // Ajout des exemples avec leurs résultats réels
    exemples.forEach(exemple => {
        html += `
                <pre><code>${exemple.appel}   // ${exemple.resultat}</code></pre>
        `;
    });
    
    html += `
            </div>
        </section>
    `;
    
    afficher(html);
}

// ============================================
// 1. DÉMONSTRATION DE estPair(n)
// ============================================
const exemplesEstPair = [
    { appel: 'estPair(4)', resultat: estPair(4) },
    { appel: 'estPair(7)', resultat: estPair(7) },
    { appel: 'estPair(0)', resultat: estPair(0) }
];

afficherDemoFonction(
    'fonction-estPair',
    'estPair(n)',
    'Vérifie si un nombre est pair.',
    'nombres',
    exemplesEstPair
);

// ============================================
// 2. DÉMONSTRATION DE maxDeDeux(a, b)
// ============================================
const exemplesMaxDeDeux = [
    { appel: 'maxDeDeux(5, 10)', resultat: maxDeDeux(5, 10) },
    { appel: 'maxDeDeux(-3, -8)', resultat: maxDeDeux(-3, -8) },
    { appel: 'maxDeDeux(42, 42)', resultat: maxDeDeux(42, 42) }
];

afficherDemoFonction(
    'fonction-maxDeux',
    'maxDeDeux(a, b)',
    'Retourne le plus grand de deux nombres.',
    'nombres',
    exemplesMaxDeDeux
);

// ============================================
// 3. DÉMONSTRATION DE convertirTemperature(c)
// ============================================
const exemplesConvertirTemp = [
    { appel: 'convertirTemperature(0)', resultat: convertirTemperature(0) },
    { appel: 'convertirTemperature(100)', resultat: convertirTemperature(100) },
    { appel: 'convertirTemperature(-40)', resultat: convertirTemperature(-40) }
];

afficherDemoFonction(
    'fonction-convertirTemp',
    'convertirTemperature(c)',
    'Convertit une température de Celsius vers Fahrenheit.',
    'conversion',
    exemplesConvertirTemp
);

// ============================================
// 4. DÉMONSTRATION DE calculerTVA(prix, taux)
// ============================================
const exemplesCalculerTVA = [
    { appel: 'calculerTVA(100, 0.20)', resultat: calculerTVA(100, 0.20) },
    { appel: 'calculerTVA(50, 0.055)', resultat: calculerTVA(50, 0.055) },
    { appel: 'calculerTVA(75.50, 0.10)', resultat: calculerTVA(75.50, 0.10) }
];

afficherDemoFonction(
    'fonction-calculerTVA',
    'calculerTVA(prix, taux)',
    'Calcule le prix TTC à partir du prix HT et du taux de TVA.',
    'conversion',
    exemplesCalculerTVA
);

// ============================================
// 5. DÉMONSTRATION DE inverserChaine(texte)
// ============================================
const exemplesInverserChaine = [
    { appel: 'inverserChaine("Bonjour")', resultat: inverserChaine('Bonjour') },
    { appel: 'inverserChaine("JavaScript")', resultat: inverserChaine('JavaScript') },
    { appel: 'inverserChaine("Akieni")', resultat: inverserChaine('Akieni') }
];

afficherDemoFonction(
    'fonction-inverserChaine',
    'inverserChaine(texte)',
    'Inverse une chaîne de caractères.',
    'chaines',
    exemplesInverserChaine
);

// ============================================
// 6. DÉMONSTRATION DE compterVoyelles(texte)
// ============================================
const exemplesCompterVoyelles = [
    { appel: 'compterVoyelles("Bonjour")', resultat: compterVoyelles('Bonjour') },
    { appel: 'compterVoyelles("Akieni")', resultat: compterVoyelles('Akieni') },
    { appel: 'compterVoyelles("JavaScript")', resultat: compterVoyelles('JavaScript') }
];

afficherDemoFonction(
    'fonction-compterVoyelles',
    'compterVoyelles(texte)',
    'Compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne.',
    'chaines',
    exemplesCompterVoyelles
);

// ============================================
// 7. DÉMONSTRATION DE estPalindrome(texte)
// ============================================
const exemplesEstPalindrome = [
    { appel: 'estPalindrome("radar")', resultat: estPalindrome('radar') },
    { appel: 'estPalindrome("Bonjour")', resultat: estPalindrome('Bonjour') },
    { appel: 'estPalindrome("kayak")', resultat: estPalindrome('kayak') }
];

afficherDemoFonction(
    'fonction-estPalindrome',
    'estPalindrome(texte)',
    'Vérifie si une chaîne est un palindrome (se lit dans les deux sens).',
    'chaines',
    exemplesEstPalindrome
);

// ============================================
// 8. DÉMONSTRATION DE factorielle(n)
// ============================================
const exemplesFactorielle = [
    { appel: 'factorielle(5)', resultat: factorielle(5) },
    { appel: 'factorielle(0)', resultat: factorielle(0) },
    { appel: 'factorielle(7)', resultat: factorielle(7) }
];

afficherDemoFonction(
    'fonction-factorielle',
    'factorielle(n)',
    'Calcule la factorielle d\'un nombre (n! = n × (n-1) × ... × 1).',
    'nombres',
    exemplesFactorielle
);

// ============================================
// 9. DÉMONSTRATION DE estPremier(n)
// ============================================
const exemplesEstPremier = [
    { appel: 'estPremier(7)', resultat: estPremier(7) },
    { appel: 'estPremier(10)', resultat: estPremier(10) },
    { appel: 'estPremier(2)', resultat: estPremier(2) },
    { appel: 'estPremier(1)', resultat: estPremier(1) }
];

afficherDemoFonction(
    'fonction-estPremier',
    'estPremier(n)',
    'Vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).',
    'nombres',
    exemplesEstPremier
);

// ============================================
// 10. DÉMONSTRATION DE genererFibonacci(n)
// ============================================
// On affiche les tableaux avec JSON.stringify pour les rendre lisibles
const exemplesFibonacci = [
    { appel: 'genererFibonacci(5)', resultat: JSON.stringify(genererFibonacci(5)) },
    { appel: 'genererFibonacci(8)', resultat: JSON.stringify(genererFibonacci(8)) },
    { appel: 'genererFibonacci(1)', resultat: JSON.stringify(genererFibonacci(1)) }
];

afficherDemoFonction(
    'fonction-fibonacci',
    'genererFibonacci(n)',
    'Génère les n premiers nombres de la suite de Fibonacci.',
    'nombres',
    exemplesFibonacci
);

// ============================================
// MESSAGE DE FIN
// ============================================
afficher(`
    <div style="
        text-align: center;
        padding: 2rem;
        margin-top: 2rem;
        border-top: 2px solid var(--couleur-fond);
        color: var(--couleur-texte-clair);
    ">
        <p style="font-size: 0.9rem;">
            ✅ Les 10 fonctions ont été exécutées avec succès.
            <br>
            Les résultats affichés sont calculés en temps réel par JavaScript.
        </p>
    </div>
`);