import Mob from "./Mob.js";
import BadgeAcces from "../Objets/BadgeAcces.js";

export default class Secretaire extends Mob {
  // Ennemi du 1er etage: donne le premier badge d'acces
  constructor() {
    super("Secretaire", 45, "F", 35, 1, 4, 1, [new BadgeAcces(2)]);
  }
}
