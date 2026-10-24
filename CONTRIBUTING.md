# Contribuer au jeu de données ForkRecipe

Ce dépôt contient les recettes de [forkrecipe.com](https://forkrecipe.com), pas l’application elle-même. Les contributions portent sur les recettes : nouvelles recettes, corrections ou variantes (forks) de recettes existantes. Tout contenu accepté est publié sous licence CC BY-SA 4.0, comme le reste du dépôt.

## Avant de commencer

    git clone https://github.com/futurechef/forkrecipe-recipes
    cd forkrecipe-recipes
    npm run validate

Aucune dépendance à installer : le validateur utilise uniquement Node.js (voir scripts/validate-recipes.js). Avant toute modification, vous devriez obtenir le résultat : « ✓ 963 recettes valides. Aucune erreur. »

## Ajouter une recette

1. Copiez recipes/_template.js vers recipes/<votre-slug>.js (en minuscules, avec des tirets ; il doit correspondre exactement au champ slug, vérifié par le validateur).
2. Renseignez tous les champs. Les commentaires du modèle les expliquent, notamment :
   - category doit être l’un des identifiants définis dans data/categories.js ;
   - author doit être une clé de data/users.js : **ajoutez-y votre nom** et votre compteur recipesAuthored. Le dépôt crédite de vrais contributeurs, pas des pseudonymes inventés (voir la note en tête de users.js) ;
   - flavorRadar doit contenir les six axes (sweet, salty, sour, bitter, umami, heat), chacun de 0 à 5 ;
   - chaque ingredient.role doit correspondre à une clé de RoleColor dans data/schema.js ;
   - chaque valeur de processNode.inputs doit désigner un ingId existant ou le outputState d’une étape précédente. Ces références alimentent le graphe de dépendance des ingrédients.
3. Lancez npm run validate et corrigez les erreurs signalées avant d’ouvrir une pull request.

## Créer une variante d’une recette existante

Si votre recette est une variante délibérée (substitution, changement de technique ou adaptation régionale) :

1. Copiez la recette à modifier, pas le modèle vierge. Conservez les ingId des ingrédients inchangés : le système pourra ainsi suivre précisément les différences et, dans l’application, les liens entre variantes.
2. Renseignez le bloc FORK-ONLY FIELDS en bas de _template.js : parentSlug, une phrase forkNote expliquant le changement et sa raison, ainsi que les compteurs changes.
3. Inscrivez la variante dans data/forks.js en ajoutant son slug à FORK_REGISTRY["<slug-parent>"].
4. Ajoutez une entrée à son nom dans data/commits.js. La première entrée doit avoir type: "initial" et un message commençant par "Fork: ...".
5. Lancez npm run validate. Le validateur vérifie que parentSlug existe et que la variante est inscrite dans forks.js. Il signale, sans faire échouer la validation, une entrée manquante dans commits.js.

## Une bonne pull request

- **Soyez précis.** Les champs instructions et visualCue doivent permettre à une personne qui ne connaît pas le plat de reconnaître la fin d’une étape. « Cuire jusqu’à ce que ce soit doré » est moins utile que « 6 à 8 minutes, jusqu’à ce que les bords se détachent de la poêle et que l’odeur soit grillée, sans note de farine crue ».
- **Publiez du contenu original ou correctement adapté.** Les recettes doivent venir de vos connaissances ou essais, ou de sources du domaine public (voir les notes de licence dans le README). Ne copiez pas le texte protégé d’un site commercial ou d’un livre encore soumis au droit d’auteur.
- **Une recette ou une variante par pull request**, sauf si plusieurs changements sont réellement liés. Cela facilite la relecture.

## Questions

Ouvrez une issue ou contactez-nous sur [LinkedIn](https://www.linkedin.com/in/futurechef/).
