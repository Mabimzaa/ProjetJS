import Mob from "./Mob.js";
import Lunettes from "../Objets/Lunettes.js";

export default class ChefHopital extends Mob {
  // Boss final du 6e etage: loot purement cosmetique
  constructor() {
    super("Chef de l'hopital", 58, "M", 140, 6, 15, 6, [new Lunettes()]);
  }
}
