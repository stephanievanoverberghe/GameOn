# GameOn Reservation

Ce projet est un site web pour la gestion des inscriptions à un événement de jeux vidéo, développé par Stéphanie Vanoverberghe. Il permet aux utilisateurs de s'inscrire à l'événement via un formulaire dans une modale.

## Table des matières

-   [GameOn Reservation](#gameon-reservation)
    -   [Table des matières](#table-des-matières)
    -   [Aperçu](#aperçu)
    -   [Screenshot](#screenshot)
    -   [Fonctionnalités](#fonctionnalités)
    -   [Installation](#installation)
        -   [Prérequis](#prérequis)
        -   [Étapes d'installation](#étapes-dinstallation)
    -   [Utilisation](#utilisation)
    -   [Structure du projet](#structure-du-projet)
    -   [Technologies utilisées](#technologies-utilisées)
    -   [Liens](#liens)

## Aperçu

Le site web permet aux utilisateurs de :

> -   Consulter les détails de l'événement. <br>
> -   S'inscrire à l'événement via un formulaire interactif. <br>
> -   Voir des messages de validation et des confirmations d'inscription. <br>

## Screenshot

![](./src/assets/img/screenshot.png)

## Fonctionnalités

> -   Formulaire d'inscription avec validation des champs (prénom, nom, email, etc.). <br>
> -   Affichage de messages d'erreur en cas de saisie incorrecte. <br>
> -   Animation pour l'ouverture et la fermeture de la modale d'inscription. <br>
> -   Réactivité sur les appareils mobiles et desktop. <br>

## Installation

Suivez ces étapes pour installer et configurer le projet localement :

### Prérequis

### Étapes d'installation

1. Clonez le dépôt GitHub

```sh
git clone https://github.com/StephanieVanoverberghe/GameOn.git
```

2. Installer les dépendances

```sh
npm install
```

3. Script npm

```json
{
    "scripts": {
        "sass": "sass -w src/assets/sass:src/assets/css"
    }
}
```

5. Lancer le serveur local

```sh
npm start
```

6. Compiler les fichiers Sass

```sh
npm run sass
```

## Utilisation

> 1. Cliquez sur le bouton "Je m'inscris" pour ouvrir la modale d'inscription.
> 2. Remplissez les champs du formulaire.
> 3. Cliquez sur "C'est parti" pour soumettre le formulaire.
> 4. Les messages d'erreur s'afficheront sous les champs en cas de saisie incorrecte.
> 5. Un message de confirmation s'affichera après une soumission réussie.

## Structure du projet

```plaintext
GameOn/
├── src/
│   └── assets/
│       ├── css/
│       │   └── style.css
│       ├── fonts/
│       ├── img/
│       ├── js/
│       │   ├── formModal.js
│       │   ├── headerNav.js
│       │   ├── openModal.js
│       │   └── validationConfig.js
│       └── sass/
│           ├── _bases.scss
│           ├── _buttons.scss
│           ├── _header.scss
│           ├── _keyframes.scss
│           ├── _modal.scss
│           ├── _reset.scss
│           ├── _variables.scss
│           └── style.scss
├── index.html
└── README.md
```

## Technologies utilisées

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Liens

-   Code du site : [GitHub](https://github.com/stephanievanoverberghe/GameOn)
-   Site en direct : [GitHub Pages](https://stephanievanoverberghe.github.io/GameOn/)
