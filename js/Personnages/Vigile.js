import Mob from "./Mob.js";
import BadgeAcces from "../Objets/BadgeAcces.js";
import Taser from "../Objets/Taser.js";


export default class Vigile extends Mob {
  // Mini-boss du 5e etage: utilise et drop un taser + badge final
  constructor() {
    super("Vigile", 40, "M", 95, 5, 11, 5, [new Taser(), new BadgeAcces(6)]);
    // Le vigile est equipe des le debut de son arme speciale
    this.equiperArme(new Taser());
  }
}
