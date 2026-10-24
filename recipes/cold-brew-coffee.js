export default {
  "repoId": "master_american_cold_brew_coffee_001",
  "parentRepoId": null,
  "slug": "cold-brew-coffee",
  "author": "ForkRecipe Kitchen",
  "title": "Concentré de café de brasserie froide",
  "description": "Café moulu grossièrement trempé froid pendant 18 heures — pas de chaleur, pas d'amertume, juste un café lisse et arrondi qui conserve pendant deux semaines et balance à n'importe quelle tasse.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "beverages",
  "tags": [
    "café",
    "à froid",
    "boisson",
    "pas de cuisson",
    "marque à l'avance",
    "caféine"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "18 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 0,
    "sour": 1,
    "bitter": 3,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Café moulu grossièrement",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mélange expresso moyen-courbé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau filtrée à froid",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "steeping_coffee",
      "instructions": "Mélanger le café grossièrement moulu et l'eau filtrée froide dans un grand pot en verre ou un pichet. Mélanger une fois avec une cuillère longue pour s'assurer que tous les terrains sont mouillés — les touffes sèches flottant sur le dessus ne s'extrairont pas. Couvrir avec un couvercle ou un chiffon et réfrigérer pendant 18 à 24 heures. Ne pas remuer à nouveau pendant le trempage.",
      "visualCue": {
        "primaryTarget": "Sols entièrement immergés dans l'eau froide, avec le liquide approfondissement du bronzage pâle à brun-ambre foncé au fur et à mesure que les pentes progressent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 18 heures: le liquide est brun pâle ou brun clair. L'arôme est mince et herbacé avec des notes acides proéminentes.",
            "action": "Revenez au réfrigérateur et penchez - vous plus longtemps: les extraits de bière froide se font lentement, et la sous - extraction produit des concentrés acides et faibles."
          },
          {
            "state": "Perfect",
            "description": "18 à 24 heures: liquide est acajou profond et sent rôti et chocolaté à travers le terrain, sans note supérieure dure ou aigre.",
            "action": "Faites pression. Diluer le concentré fini 1:1 avec de l'eau ou du lait pour servir sur la glace."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures : le concentré a un goût amer et astringent avec un fini plat et papier.",
            "action": "Diluer de façon plus agressive — une partie se concentre à 2 parties d'eau — pour la ramener dans une gamme potable."
          }
        ]
      },
      "feelCue": "Le sol doit se sentir comme du sable mouillé grossier lorsqu'il est pincée entre les doigts mouillés — s'il est fin, le broyage est trop petit et le concentré peut sur-extraire."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "steeping_coffee"
      ],
      "outputState": "cold_brew_concentrate",
      "instructions": "Placer une passoire fine sur un grand bol ou un deuxième pichet et l'aligner avec un filtre à café en papier ou deux couches d'étoffe de fromage. Verser lentement la bière froide et laisser la gravité faire le travail — ne pas presser ou serrer le terrain. La première goutte peut prendre 10 minutes. Jetez les terrains dépensés. Transférer le concentré dans une bouteille de verre scellée et réfrigérer.",
      "visualCue": {
        "primaryTarget": "Un concentré d'ambre clair et foncé coule régulièrement à travers le filtre sans fond ni turbidité visible dans le liquide tendu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide entraîné est brun foncé avec des sédiments visibles et de fines particules en suspension.",
            "action": "Reformer à travers un filtre à papier frais — deux passes produisent un concentré beaucoup plus propre. Autoriser le drain de gravité seulement; ne pas appuyer."
          },
          {
            "state": "Perfect",
            "description": "L'ambre liquide est clair et profond, presque la couleur du miel foncé lorsqu'il est tenu à la lumière. Pas de grain visible. La vitesse d'écoulement est lente mais constante.",
            "action": "Bouteille et réfrigérer. Se conserve bien pendant 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé ou pressé le terrain — le concentré est opaque et plein de particules fines qui ont également libéré des tanins dures.",
            "action": "Une seconde phase de gravité lente à travers un filtre frais éliminera la plupart des particules. Le concentré peut conserver une certaine amertume résiduelle."
          }
        ]
      },
      "feelCue": "Laissez tomber une goutte sur le bout des doigts – elle doit se sentir propre et très légèrement visqueuse, comme un sirop léger. Une texture gritty ou sablonneuse nécessite un autre passage à travers le filtre."
    }
  ]
};
