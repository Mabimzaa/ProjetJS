import Mob from "./Mob.js";
import BadgeAcces from "../Objets/BadgeAcces.js";
import Seringue from "../Objets/Seringue.js";

export default class Docteur extends Mob {
  constructor() {
    super("Docteur", 52, "M", 70, 4, 10, 4, [new Seringue(4, 3), new BadgeAcces(5)]);
  }
}
