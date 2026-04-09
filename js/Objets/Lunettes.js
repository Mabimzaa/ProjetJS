export default class Lunettes {
  // Loot final cosmetique, sans bonus gameplay
  constructor() {
    this.name = "Lunettes";
    this.style = "100% style, 0% bonus";
  }

  // On les ajoute a l'inventaire pour la collection
  appliquer(cible) {
    cible.ajouterObjet(this);
  }
}
