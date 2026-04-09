import Mob from "./Mob.js";
import BadgeAcces from "../Objets/BadgeAcces.js";
import Taser from "../Objets/Taser.js";

export default class Vigile extends Mob {
  constructor() {
    super("Vigile", 40, "M", 95, 5, 11, 5, [new Taser(), new BadgeAcces(6)]);
    this.equiperArme(new Taser());
  }
}
