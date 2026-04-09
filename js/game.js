import Patient from "./Personnages/Patient.js";
import { creerEtages } from "./Etages.js";

// =====================
// ÉTAT
// =====================
const joueur = new Patient("Patient X");
const etages = creerEtages();
let etageIndex = 0;
let ennemi = null;
let combatActif = false;
let intervalEnnemi = null;
let distanceEnnemi = 3;
joueur.inventory = joueur.inventory || [];

// =====================
// ÉLÉMENTS UI
// =====================
const explorationScreen = document.getElementById("explorationScreen");
const explorationLog    = document.getElementById("explorationLog");
const avancerBtn        = document.getElementById("avancerBtn");

const combatScreen  = document.getElementById("combatScreen");
const combatLog     = document.getElementById("combatLog");
const attackBtn     = document.getElementById("attackBtn");
const schizoBtn     = document.getElementById("schizoBtn");

const victoryScreen = document.getElementById("victoryScreen");
const nextFloorBtn  = document.getElementById("nextFloorBtn");

const gameoverScreen = document.getElementById("gameoverScreen");
const retryBtn       = document.getElementById("retryBtn");

// =====================
// FONCTIONS UTILES
// =====================

function logExp(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    explorationLog.appendChild(p);
    explorationLog.scrollTop = explorationLog.scrollHeight;
}

function logCombat(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    combatLog.appendChild(p);
    combatLog.scrollTop = combatLog.scrollHeight;
}

function majUI() {
    document.getElementById("playerHpText").textContent = `${joueur.pv} / ${joueur.pvMax}`;
    document.getElementById("playerHpBar").style.width  = `${(joueur.pv / joueur.pvMax) * 100}%`;

    if (ennemi) {
        document.getElementById("enemyName").textContent   = ennemi.nom;
        document.getElementById("enemyHpText").textContent = `${ennemi.pv} / ${ennemi.pvMax}`;
        document.getElementById("enemyHpBar").style.width  = `${Math.max(0, (ennemi.pv / ennemi.pvMax) * 100)}%`;
    }
}

function cacherTout() {
    explorationScreen.style.display = "none";
    combatScreen.style.display      = "none";
    victoryScreen.style.display     = "none";
    gameoverScreen.style.display    = "none";
}

// =====================
// EXPLORATION
// =====================

function afficherExploration() {
    cacherTout();
    explorationScreen.style.display = "flex";
    explorationLog.innerHTML = "";
    distanceEnnemi = 3;
    avancerBtn.disabled = false;

    const etage = etages[etageIndex];
    logExp(`📍 Étage ${etage.numero} — ${etage.description || "Couloir silencieux."}`);
    logExp(`Quelqu'un se trouve au bout du couloir.`);
    logExp(`Distance : ${distanceEnnemi} mètre(s).`);
}

avancerBtn.addEventListener("click", () => {
    distanceEnnemi--;
    logExp(`Vous avancez... Distance : ${distanceEnnemi} mètre(s).`);

    if (distanceEnnemi <= 0) {
        logExp(`⚠️ L'ennemi vous a repéré !`);
        avancerBtn.disabled = true;
        setTimeout(lancerCombat, 1000);
    }
});

// =====================
// COMBAT
// =====================

function lancerCombat() {
    cacherTout();
    combatScreen.style.display = "flex";
    combatLog.innerHTML = "";
    combatActif = true;
    attackBtn.disabled = false;

    ennemi = etages[etageIndex].mobs[0];
    ennemi.pv = ennemi.pvMax;

    majUI();
    logCombat(`⚔️ ${ennemi.nom} apparaît !`);

    if (intervalEnnemi) clearInterval(intervalEnnemi);
    intervalEnnemi = setInterval(() => {
        if (!combatActif) return;

        const degats = Math.max(1, ennemi.force - (joueur.armor || 0));
        joueur.pv = Math.max(0, joueur.pv - degats);
        logCombat(`${ennemi.nom} vous inflige ${degats} dégâts !`);
        majUI();

        if (joueur.pv <= 0) {
            clearInterval(intervalEnnemi);
            combatActif = false;
            cacherTout();
            gameoverScreen.style.display = "flex";
        }
    }, 1500);
}

attackBtn.addEventListener("click", () => {
    if (!combatActif || !ennemi || ennemi.pv <= 0) return;

    const degats = Math.max(1, (joueur.force || 10) - (ennemi.armor || 0));
    ennemi.pv = Math.max(0, ennemi.pv - degats);
    logCombat(`Vous infligez ${degats} dégâts à ${ennemi.nom}.`);
    majUI();

    attackBtn.disabled = true;
    setTimeout(() => {
        if (combatActif) attackBtn.disabled = false;
    }, 1000);

    if (ennemi.pv <= 0) {
        clearInterval(intervalEnnemi);
        combatActif = false;
        logCombat(`✅ ${ennemi.nom} est vaincu !`);
        setTimeout(afficherVictoire, 800);
    }
});

schizoBtn.addEventListener("click", () => {
    const idx = joueur.inventory.findIndex(o => o.name === "Seringue");
    if (idx === -1) {
        logCombat("Pas de seringue dans l'inventaire !");
        return;
    }
    joueur.inventory.splice(idx, 1);
    joueur.activerModeSchizophrene(3);
    logCombat("🧠 Mode Schizophrène activé ! +5 force pendant 3 tours.");
    majUI();
});

// =====================
// VICTOIRE / GAME OVER
// =====================

function afficherVictoire() {
    cacherTout();
    victoryScreen.style.display = "flex";

    const loot = ennemi.loot || [];
    const lootTexte = loot.length > 0 ? loot.map(o => o.name).join(", ") : "Rien";

    loot.forEach(objet => {
        if (objet.name === "Cash") joueur.ajouterCash?.(objet.montant);
        else joueur.ajouterObjet?.(objet);
    });

    document.getElementById("victoryLoot").textContent  = `Vous avez obtenu : ${lootTexte}`;
    document.getElementById("victoryTitle").textContent =
        etageIndex + 1 >= etages.length
            ? "🏆 Victoire finale !"
            : `Étage ${etages[etageIndex].numero} terminé !`;
}

nextFloorBtn.addEventListener("click", () => {
    etageIndex++;

    if (etageIndex >= etages.length) {
        window.location.href = `cinematique.html?scene=fin&dest=index.html`;
        return;
    }

    const scenes = ["etage1", "etage2", "etage3", "etage4", "etage5", "avantBoss"];
    const scene = scenes[etageIndex] || null;

    if (scene) {
        window.location.href = `cinematique.html?scene=${scene}&dest=game.html`;
    } else {
        afficherExploration();
    }
});

retryBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

// =====================
// DÉMARRAGE
// =====================
afficherExploration();
