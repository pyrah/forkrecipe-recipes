# ForkRecipe — Catalogue de recettes ouvert

Le catalogue de recettes de [ForkRecipe](https://forkrecipe.com), « des recettes avec leur filiation ».

ForkRecipe traite les recettes comme du code : chaque plat remonte à une **recette mère** de référence, et chaque variante est un **fork** dont les différences avec la recette parente sont explicites. Ce dépôt ne contient que les données : les recettes sont structurées et ouvertes.

## Contenu du dépôt

963 recettes sous forme de modules JavaScript conformes au schéma se trouvent dans [recipes/](./recipes), à raison d’un fichier par plat. Le fichier [recipes/_template.js](./recipes/_template.js) documente le schéma : proportions inspirées des pourcentages de boulanger, étapes de préparation structurées, profil aromatique, étiquettes de cuisine et de catégorie, etc.

Le dossier data/ contient les tables auxiliaires utilisées par le schéma : catégories, registre des auteurs, couleurs des rôles d’ingrédients, graphe de filiation des forks (forks.js) et historique des commits par recette (commits.js). Le script scripts/validate-recipes.js vérifie l’ensemble :

    npm run validate

Aucune dépendance à installer : le projet utilise uniquement Node.js. Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour ajouter une recette ou créer une variante.

Les contenus ont été créés pour ForkRecipe ou adaptés de sources du domaine public. Toutes les recettes sont sous licence **CC BY-SA 4.0** (voir [LICENSE](./LICENSE)) : réutilisez-les et adaptez-les librement, avec attribution et partage à l’identique.

## Ce que ce dépôt ne contient pas

Ce dépôt contient uniquement le jeu de données, pas l’application ForkRecipe (moteur de forks et de différences, authentification, pipeline de contenu IA, outils d’administration). Le produit en ligne est disponible sur [forkrecipe.com](https://forkrecipe.com).

## Licence et marques

Les recettes sont sous licence **CC BY-SA 4.0** ([LICENSE](./LICENSE)) : créditez ForkRecipe et partagez les adaptations sous la même licence.  
Copyright © 2026 [FoodML](https://foodml.xyz) et les contributeurs répertoriés dans data/users.js.

« ForkRecipe », son logo et « FoodML » sont des marques de FoodML et ne sont pas couverts par la licence. Présentez votre travail comme *issu du jeu de données ForkRecipe* ou *adapté de celui-ci* ; ne l’appelez pas ForkRecipe. Consultez [NOTICE](./NOTICE) pour plus de détails.

## Auteur

ForkRecipe est un projet [FoodML](https://foodml.xyz), créé par [Michael Gutowski](https://www.linkedin.com/in/futurechef/), chef et développeur. En savoir plus sur [chefmjg.com](https://chefmjg.com).
