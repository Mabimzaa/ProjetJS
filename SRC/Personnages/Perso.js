export default class Personnage {
  constructor(nom, age, sexe, pv, armor, force = 0) {
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
    this.pv = pv;
    this.pvMax = pv;
    this.armor = armor;
    this.force = force;
    this.weapon = null;
    this.inventory = [];
    this.effects = [];
    this.cash = 0;
    this.skipTurn = false;
  }

  // Equipe une arme (optionnel)
  equiperArme(weapon) {
    this.weapon = weapon;
  }

  // Ajoute un objet dans l'inventaire (loot, soin, etc.)
  ajouterObjet(objet) {
    this.inventory.push(objet);
  }

  ajouterCash(montant) {
    this.cash += montant;
  }

  depenserCash(montant) {
    if (this.cash < montant) return false;
    this.cash -= montant;
    return true;
  }

  // Degats finaux = force de base + degats d'arme
  attaquer(cible) {
    const degatsArme = this.weapon ? this.weapon.dommage : 0;
    const degats = this.force + degatsArme;
    cible.subirDegats(degats);
    return degats;
  }

  // L'armure reduit les degats, mais on prend toujours au moins 1
  subirDegats(degats) {
    const degatsReels = Math.max(1, degats - this.armor);
    this.pv -= degatsReels;
    return degatsReels;
  }

  // Effet temporaire (ex: seringue / blue toro), avec callback d'application et de retrait
  ajouterEffet(nom, tours, appliquer, retirer) {
    this.effects.push({ nom, tours, appliquer, retirer });
    if (appliquer) appliquer(this);
  }

  // A appeler a chaque fin de tour pour decremeter et retirer les buffs expires
  decrementerEffets() {
    this.effects = this.effects.filter((effet) => {
      effet.tours -= 1;
      if (effet.tours <= 0) {
        if (effet.retirer) effet.retirer(this);
        return false;
      }
      return true;
    });
  }

  estMort() {
    return this.pv <= 0;
  }
}
