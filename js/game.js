import Patient from "./Personnages/Patient.js";
import { creerEtages } from "./Etages.js";

// ÉTAT
const joueur = new Patient("Patient X");
const etages = creerEtages();
let etageIndex = 0;
let ennemi = null;
let combatActif = false;
let intervalEnnemi = null;
let distanceEnnemi = 3;

// UTILITAIRES
function logExp(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    document.getElementById("explorationLog").appendChild(p);
}

function logCombat(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    document.getElementById("combatLog").appendChild(p);
}

function cacherTout() {
    document.getElementById("explorationScreen").style.display = "none";
    document.getElementById("combatScreen").style.display      = "none";
    document.getElementById("victoryScreen").style.display     = "none";
    document.getElementById("gameoverScreen").style.display    = "none";
}

function majUI() {
    document.getElementById("playerHpText").textContent = joueur.pv + " / " + joueur.pvMax;
    document.getElementById("playerHpBar").style.width  = (joueur.pv / joueur.pvMax * 100) + "%";
    if (ennemi) {
        document.getElementById("enemyName").textContent   = ennemi.nom;
        document.getElementById("enemyHpText").textContent = ennemi.pv + " / " + ennemi.pvMax;
        document.getElementById("enemyHpBar").style.width  = (ennemi.pv / ennemi.pvMax * 100) + "%";
    }
}

// EXPLORATION
function afficherExploration() {
    cacherTout();
    document.getElementById("explorationScreen").style.display = "flex";
    document.getElementById("explorationLog").innerHTML = "";
    document.getElementById("avancerBtn").disabled = false;
    distanceEnnemi = 3;
    logExp("Etage " + etages[etageIndex].numero + " — Avancez vers l'ennemi.");
    logExp("Distance : " + distanceEnnemi + " metre(s).");
}

document.getElementById("avancerBtn").addEventListener("click", function() {
    distanceEnnemi--;
    logExp("Vous avancez... Distance : " + distanceEnnemi + " metre(s).");
    if (distanceEnnemi <= 0) {
        document.getElementById("avancerBtn").disabled = true;
        setTimeout(lancerCombat, 1000);
    }
});

// COMBAT
function lancerCombat() {
    cacherTout();
    document.getElementById("combatScreen").style.display = "flex";
    document.getElementById("combatLog").innerHTML = "";
    combatActif = true;
    document.getElementById("attackBtn").disabled = false;
    ennemi = etages[etageIndex].mobs[0];
    ennemi.pv = ennemi.pvMax;
    majUI();
    logCombat(ennemi.nom + " apparait !");

    if (intervalEnnemi) clearInterval(intervalEnnemi);
    intervalEnnemi = setInterval(function() {
        if (!combatActif) return;
        const degats = ennemi.attaquer(joueur);
        logCombat(ennemi.nom + " vous inflige " + degats + " degats !");
        joueur.decrementerEffets();
        majUI();
        if (joueur.estMort()) {
            clearInterval(intervalEnnemi);
            combatActif = false;
            cacherTout();
            document.getElementById("gameoverScreen").style.display = "flex";
        }
    }, 1500);
}

document.getElementById("attackBtn").addEventListener("click", function() {
    if (!combatActif || ennemi.estMort()) return;
    const degats = joueur.attaquer(ennemi);
    logCombat("Vous infligez " + degats + " degats a " + ennemi.nom + ".");
    majUI();
    document.getElementById("attackBtn").disabled = true;
    setTimeout(function() {
        if (combatActif) document.getElementById("attackBtn").disabled = false;
    }, 1000);
    if (ennemi.estMort()) {
        clearInterval(intervalEnnemi);
        combatActif = false;
        logCombat(ennemi.nom + " est vaincu !");
        setTimeout(afficherVictoire, 800);
    }
});

document.getElementById("schizoBtn").addEventListener("click", function() {
    const idx = joueur.inventory.findIndex(function(o) { return o.name === "Seringue"; });
    if (idx === -1) {
        logCombat("Pas de seringue dans l'inventaire !");
        return;
    }
    joueur.inventory.splice(idx, 1);
    joueur.activerModeSchizophrene(3);
    logCombat("Mode Schizophrene active ! +5 force pendant 3 tours.");
    majUI();
});

// VICTOIRE
function afficherVictoire() {
    cacherTout();
    document.getElementById("victoryScreen").style.display = "flex";
    const loot = ennemi.loot || [];
    loot.forEach(function(objet) {
        if (objet.name === "Cash") joueur.ajouterCash(objet.montant);
        else joueur.ajouterObjet(objet);
    });
    const noms = loot.map(function(o) { return o.name; }).join(", ");
    document.getElementById("victoryLoot").textContent  = "Vous avez obtenu : " + (noms || "Rien");
    document.getElementById("victoryTitle").textContent =
        etageIndex + 1 >= etages.length ? "Victoire finale !" : "Etage " + etages[etageIndex].numero + " termine !";
}

document.getElementById("nextFloorBtn").addEventListener("click", function() {
    etageIndex++;
    if (etageIndex >= etages.length) {
        window.location.href = "cinematique.html?scene=fin&dest=index.html";
        return;
    }
    const scenes = ["etage1", "etage2", "etage3", "etage4", "etage5", "avantBoss"];
    if (scenes[etageIndex]) {
        window.location.href = "cinematique.html?scene=" + scenes[etageIndex] + "&dest=game.html";
    } else {
        afficherExploration();
    }
});

document.getElementById("retryBtn").addEventListener("click", function() {
    window.location.href = "index.html";
});

// DÉMARRAGE
afficherExploration();
