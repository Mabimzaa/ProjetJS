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
    etage1: [
        "Tu sors de ta chambre.",
        "Le couloir est calme.",
        "Trop calme.",
        "Une secrétaire lève les yeux vers toi.",
        "« Monsieur, recouchez-vous immédiatement ! »"
    ],
    etage2: [
        "Tu arrives au couloir de l'étage 5.",
        "Une aide soignante fait le ménage.",
        "Elle te remarque.",
        "« Oh non non non, on retourne dans sa chambre ! »"
    ],
    etage3: [
        "Étage 4.",
        "Une salle au centre du couloir.",
        "Des infirmières s'affairent.",
        "« Vous avez besoin de soins. Laissez-nous vous aider. »"
    ],
    etage4: [
        "Étage 3.",
        "Un médecin consulte un dossier.",
        "Il t'aperçoit par-dessus ses lunettes.",
        "« Cas 47-B... Résistant au traitement. »"
    ],
    etage5: [
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

let index = 0, interval = null, enCours = false;
const el = document.querySelector('.cin_texte');

function afficher(texte) {
    el.classList.remove('visible');
    setTimeout(() => {
        el.textContent = texte;
        el.classList.add('visible');
    }, 300);
}

function jouerCinematique(scene, callback) {
    const textes = cinematiques[scene];
    if (!textes) { callback?.(); return; }

    index = 0;
    enCours = true;
    afficher(textes[0]);

    interval = setInterval(() => {
        index++;
        if (index >= textes.length) {
            clearInterval(interval);
            enCours = false;
            setTimeout(() => callback?.(), 1500);
            return;
        }
        afficher(textes[index]);
    }, 2500);
}

function skip(callback) {
    if (!enCours) return;
    clearInterval(interval);
    enCours = false;
    callback?.();
}

// Destination après cinématique
const params = new URLSearchParams(window.location.search);
const scene = params.get('scene') || 'intro';
const dest  = params.get('dest')  || '../pages/game.html';

document.querySelector('.cin_skip').addEventListener('click', () => {
    skip(() => window.location.href = dest);
});

window.addEventListener('load', () => {
    jouerCinematique(scene, () => window.location.href = dest);
});
