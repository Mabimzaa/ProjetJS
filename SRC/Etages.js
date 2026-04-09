import Secretaire from "./Personnages/Secretaire.js";
import AideSoignante from "./Personnages/AideSoignante.js";
import Infirmiere from "./Personnages/Infirmiere.js";
import Docteur from "./Personnages/Docteur.js";
import Vigile from "./Personnages/Vigile.js";
import ChefHopital from "./Personnages/ChefHopital.js";

export function creerEtages() {
  // Meme coeur de map: on ne change que les mobs/contraintes par etage
  return [
    {
      numero: 1,
      type: "normal",
      mobsMin: 1,
      mobsMax: 1,
      combatObligatoire: true,
      // 1er combat scenario: secretaire -> badge pour continuer
      mobs: [new Secretaire()],
    },
    {
      numero: 2,
      type: "normal",
      mobsMin: 2,
      mobsMax: 2,
      combatObligatoire: true,
      // 2 aides-soignantes comme demande
      mobs: [new AideSoignante(1), new AideSoignante(2)],
    },
    {
      numero: 3,
      type: "normal",
      mobsMin: 2,
      mobsMax: 2,
      combatObligatoire: true,
      // Etage avec distributeur (gaufrette / blue toro)
      distributeur: true,
      mobs: [new Infirmiere(1), new Infirmiere(2)],
    },
    {
      numero: 4,
      type: "normal",
      mobsMin: 1,
      mobsMax: 2,
      combatObligatoire: true,
      mobs: [new Docteur()],
    },
    {
      numero: 5,
      type: "mini-boss",
      mobsMin: 1,
      mobsMax: 1,
      combatObligatoire: true,
      // Mini boss de securite
      mobs: [new Vigile()],
    },
    {
      numero: 6,
      type: "boss-final",
      mobsMin: 1,
      mobsMax: 1,
      combatObligatoire: true,
      // Boss final: chef + revelation "illuminati"
      mobs: [new ChefHopital()],
    },
  ];
}
