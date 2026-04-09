import Mob from "./Mob.js";
import BadgeAcces from "../Objets/BadgeAcces.js";
import Cash from "../Objets/Cash.js";


export default class AideSoignante extends Mob {
  // Ennemi du 2e etage: drop du cash + badge vers etage 3
  constructor(index = 1) {
    super(
      `Aide-soignante ${index}`,
      33,
      "F",
      45,
      2,
      6,
      2,
      [new Cash(15), new BadgeAcces(3)]
    );
  }
}
