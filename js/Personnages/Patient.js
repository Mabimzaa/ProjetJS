import Personnage from "./Perso.js";

export default class Patient extends Personnage {
  // Personnage jouable principal
  constructor(nom = "Patient X") {
    super(nom, 27, "M", 100, 2, 8);
    this.etageActuel = 1;
    this.modeSchizophrene = false;
  }

  // Mode special temporaire: plus de force, un peu moins de defense
  activerModeSchizophrene(duree = 3) {
    this.modeSchizophrene = true;
    this.ajouterEffet(
      "Mode Schizophrene",
      duree,
      (personnage) => {
        personnage.force += 5;
        personnage.armor -= 1;
      },
      (personnage) => {
        personnage.force -= 5;
        personnage.armor += 1;
        personnage.modeSchizophrene = false;
      }
    );
  }
}
