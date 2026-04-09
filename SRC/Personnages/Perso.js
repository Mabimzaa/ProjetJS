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

  equiperArme(weapon) {
    this.weapon = weapon;
  }

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

  attaquer(cible) {
    const degatsArme = this.weapon ? this.weapon.dommage : 0;
    const degats = this.force + degatsArme;
    cible.subirDegats(degats);
    return degats;
  }

  subirDegats(degats) {
    const degatsReels = Math.max(1, degats - this.armor);
    this.pv -= degatsReels;
    return degatsReels;
  }

  ajouterEffet(nom, tours, appliquer, retirer) {
    this.effects.push({ nom, tours, appliquer, retirer });
    if (appliquer) appliquer(this);
  }

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
