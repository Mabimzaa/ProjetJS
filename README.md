# Snake Over

Un jeu Snake classique inspiré du Nokia 3310, développé en JavaScript vanilla.

## Structure du projet

```
ProjetJS/
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   ├── food.js
│   ├── game.js
│   └── snake.js
├── index.html
└── README.md
```

## Installation et lancement

### Prérequis
- Avoir Node.js installé : https://nodejs.org

### Etapes

1. Cloner le projet

```bash
git clone https://github.com/Mabimzaa/ProjetJS.git
```

2. Aller dans le dossier

```bash
cd ProjetJS
```

3. Installer live-server (une seule fois)

```bash
npm install -g live-server
```

4. Lancer le jeu

```bash
live-server
```

Le navigateur s'ouvre automatiquement sur http://localhost:8080

## Contrôles

- Flèche haut    : Aller en haut
- Flèche bas     : Aller en bas
- Flèche gauche  : Aller a gauche
- Flèche droite  : Aller a droite

## Règles

- Le serpent grandit a chaque fois qu'il mange un pixel de nourriture
- Le score augmente de 1 point a chaque nourriture mangée
- Le jeu se termine si le serpent touche un mur ou son propre corps
- Un bouton Recommencer apparait quand la partie est terminée

## Style

Le jeu est inspiré du Nokia 3310 avec des couleurs vertes pixel art,
une police Courier New rétro et un effet d'écran LCD.


Auteur

Projet réalisé en 1ere année d'informatique en groupe de 3.