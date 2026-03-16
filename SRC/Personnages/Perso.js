class Personnage {
    // Constructeur
    constructor(nom, age, sexe,pv,armor) {
        this.nom = nom;
        this.age = age;
        this.sexe = sexe;
        this.pv = pv;
        this.armor = armor;
      // corps du constructeur
    }
    attaquer(cible, degats) {
        cible.pv -= degats - this.armor;
    }
    seDefendre(degats) {
        this.pv -= degats - this.armor;
    
    }
    estMort() {
        return this.pv <= 0;
    }
}

const perso = new Personnage("John", 20, "Homme", 100, 10);
console.log(perso);
