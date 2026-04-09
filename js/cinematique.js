// =====================
// DONNÉES DES CINEMATIQUES
// =====================

const cinematiques = {

    intro: [
        "...",
        "Tu te réveilles.",
        "Tes poignets sont sanglés à un lit.",
        "Une lumière aveuglante pulse dans ta tête.",
        "Une voix résonne...",
        "« Ils te retiennent prisonnier. »",
        "« La vérité est au sommet. »",
        "« Viens à nous. »",
        "Tu remarques que la sangle est mal fixée.",
        "Tu peux te lever."
    ],

    etage6: [
        "Tu sors de ta chambre.",
        "Le couloir est calme.",
        "Trop calme.",
        "Une secrétaire lève les yeux vers toi.",
        "« Monsieur, recouchez-vous immédiatement ! »"
    ],

    etage5: [
        "Tu arrives au couloir de l'étage 5.",
        "Une aide soignante fait le ménage.",
        "Elle te remarque.",
        "« Oh non non non, on retourne dans sa chambre ! »"
    ],

    etage4: [
        "Étage 4.",
        "Une salle au centre du couloir.",
        "Des infirmières s'affairent.",
        "« Vous avez besoin de soins. Laissez-nous vous aider. »"
    ],

    etage3: [
        "Étage 3.",
        "Un médecin consulte un dossier.",
        "Il t'aperçoit par-dessus ses lunettes.",
        "« Cas 47-B... Résistant au traitement. »"
    ],

    etage2: [
        "Étage 2.",
        "Un vigile barre l'escalier.",
        "Il croise les bras.",
        "« Terminus. Tout le monde redescend. »"
    ],

    avantBoss: [
        "Étage 1.",
        "Le bureau du chef.",
        "Une porte massive se dresse devant toi.",
        "Tu entends quelque chose derrière.",
        "Une lumière passe sous la porte.",
        "Tu poses la main sur la poignée..."
    ],

    fin: [
        "La porte s'ouvre.",
        "Une lumière dorée aveuglante.",
        "Au centre de la pièce...",
        "Une pyramide.",
        "Des silhouettes en cercle.",
        "Ils se retournent vers toi.",
        "« Tu es des nôtres maintenant. »",
        "« Tu as toujours su la vérité. »",
        "FIN"
    ]

};

// =====================
// SYSTÈME DE LECTURE
// =====================

let indexTexte = 0;
let sceneCourante = "";
let intervalCin = null;
let estEnTrain = false;

function jouerCinematique(scene, callback) {
    sceneCourante = scene;
    indexTexte = 0;
    estEnTrain = true;

    const textes = cinematiques[scene];
    if (!textes) return;

    const el = document.querySelector('.cin_texte');
    const overlay = document.querySelector('.cin_overlay');

    if (overlay) overlay.classList.add('active');

    afficherTexte(textes[0], el);

    intervalCin = setInterval(() => {
        indexTexte++;

        if (indexTexte >= textes.length) {
            clearInterval(intervalCin);
            estEnTrain = false;

            setTimeout(() => {
                if (overlay) overlay.classList.remove('active');
                if (callback) callback();
            }, 1500);

            return;
        }

        afficherTexte(textes[indexTexte], el);

    }, 2500);
}

function afficherTexte(texte, el) {
    if (!el) return;

    // Fade out
    el.classList.remove('visible');

    setTimeout(() => {
        el.textContent = texte;
        // Fade in
        el.classList.add('visible');
    }, 300);
}

function skipCinematique() {
    if (!estEnTrain) return;

    clearInterval(intervalCin);
    estEnTrain = false;

    const overlay = document.querySelector('.cin_overlay');
    if (overlay) overlay.classList.remove('active');
}

// =====================
// BOUTON SKIP
// =====================

const skipBtn = document.querySelector('.cin_skip');
if (skipBtn) {
    skipBtn.addEventListener('click', () => {
        skipCinematique();
        // Rediriger vers le jeu
        window.location.href = 'game.html';
    });
}

// =====================
// LANCER L'INTRO AU CHARGEMENT
// =====================

window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const scene = params.get('scene') || 'intro';

    jouerCinematique(scene, () => {
        window.location.href = 'game.html';
    });
});
