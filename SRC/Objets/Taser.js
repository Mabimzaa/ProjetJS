// herite de weapom + c'est attribue 
import Weapon from "./weapon.js";

export default class Taser extends Weapon {
  constructor() {
    super("Taser", 0);      // super pour donne l heritage et pas this pour definir 
    // degat à adapter
    this.chance = 0.5;      // this pour attribuer //50% de toucher
  }
}