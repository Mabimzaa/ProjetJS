import Mob from "./Mob.js";
import BadgeAcces from "../Objets/BadgeAcces.js";
import Tenue from "../Objets/Tenue.js";

export default class Infirmiere extends Mob {
  constructor(index = 1) {
    super(`Infirmiere ${index}`, 29, "F", 55, 3, 8, 3, [
      new Tenue(3),
      new BadgeAcces(4),
    ]);
  }
}
