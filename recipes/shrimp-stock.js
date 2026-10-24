export default {
  "repoId": "master_american_shrimp_stock_001",
  "parentRepoId": null,
  "slug": "shrimp-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de crevettes rapides",
  "description": "Un stock de coquilles de crevettes à mijoter rapidement du garde-manger de la Nouvelle - Angleterre — or pâle, propre et doux avec le parfum de l'Atlantique. Prêt en moins d'une heure; la base essentielle pour le risotto de la boucherie, bisque et fruits de mer.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Angleterre",
  "category": "stocks",
  "tags": [
    "stock",
    "crevettes",
    "crevette",
    "Produits de la mer",
    "américains",
    "Nouvelle-Angleterre",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coquilles et têtes de crevettes",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "coquilles de crevettes",
        "les caisses de homard"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Oignon, quarté",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de baies et grains de poivre noirs",
      "ratioValue": 1,
      "defaultUnit": "bundle",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "stocks de poissons légers"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "jus de citron (la moitié de la quantité)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "toasted_shells",
      "instructions": "Dans une casserole lourde à feu moyen-vif, ajouter les coquilles et les têtes de crevettes avec l'oignon et le céleri — sans gras nécessaire. Mélanger et presser les coquillages contre la poêle chaude jusqu'à ce qu'ils deviennent orange rose vif et la cuisine se remplit d'un arôme océanique grillé. Environ 3-4 minutes. Ne les laissez pas brûler.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont passées de gris translucide à orange rose vif. Le fond de la poêle peut être légèrement bruni.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont encore grises et humides. Pas de changement de couleur. Il sent seulement les mollusques crus.",
            "action": "Levez la chaleur et continuez à presser — vous avez besoin de la réaction Maillard pour commencer."
          },
          {
            "state": "Perfect",
            "description": "Coquilles coralliennes brillantes avec quelques taches dorées. L'arôme est doux, brillant et légèrement noisette.",
            "action": "Ajouter le vin et déglacer."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles s'assombrissent à brun et commencent à sentir l'acride.",
            "action": "Ajouter immédiatement le vin pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Appuyez sur une coquille plane contre la poêle avec votre cuillère en bois — elle devrait se relâcher avec un bouton, ne pas coller ou glisser."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "toasted_shells",
        "ing_06"
      ],
      "outputState": "deglazed_shells",
      "instructions": "Verser le vin blanc dans la poêle chaude et racler les morceaux collés du fond. Laissez le vin diminuer de moitié — environ 2 minutes — jusqu'à ce que l'odeur d'alcool brut laisse place à quelque chose de plus doux et vineux.",
      "visualCue": {
        "primaryTarget": "Le vin a réduit à un glaçage sirupeux enrobant les coquilles. Les bulles sont lentes et grandes plutôt que furieuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin bouillonne encore vigoureusement et sent fortement l'alcool.",
            "action": "Continuer à réduire — le vin cru rend le goût du stock dur."
          },
          {
            "state": "Perfect",
            "description": "Le vin a réduit à quelques cuillères à soupe de liquide ambré brillant et léger avec un arôme doux et intégré.",
            "action": "Ajouter l'eau froide et les feuilles de laurier."
          },
          {
            "state": "Overdone",
            "description": "Le vin s'est complètement évaporé et les coquilles recommencent à frire.",
            "action": "Ajouter de l'eau immédiatement."
          }
        ]
      },
      "feelCue": "Inclinez la casserole — le liquide doit s'écouler lentement, en enrobant les coquilles dans un film mince et brillant plutôt que de se regrouper librement."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "deglazed_shells",
        "ing_05",
        "ing_04"
      ],
      "outputState": "simmered_stock",
      "instructions": "Ajouter l'eau froide et les feuilles de laurier. Porter à feu doux à feu moyen. NE PAS bouillir — les coquilles de crevettes libèrent des composés amers si elles sont cuites de façon agressive. Laisser mijoter à découvert de 25 à 30 minutes, en écrèment toute mousse qui monte dans les 10 premières minutes. Le liquide devrait à peine trembler à la surface.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or pâle, légèrement rose, avec une surface de respiration calme. Mousse écrémée et jetée dans les premières minutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est presque incolore et les goûts d'eau pure. Les coquilles n'ont pas changé.",
            "action": "Laisser mijoter encore 10 minutes et goûter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Or clair avec une teinte rosée, clair, avec une saveur propre de crevettes briny-sweet et une douceur persistante sur la finale.",
            "action": "Sourire immédiatement — ne pas trop tordre ou il devient amer."
          },
          {
            "state": "Overdone",
            "description": "Le stock est devenu orange plus foncé et a un goût légèrement crayeux et métallique.",
            "action": "La souche tout de suite et diluer avec un peu d'eau douce."
          }
        ]
      },
      "feelCue": "Plongez une cuillère à café et sirotez directement : la douceur devrait frapper en premier, suivie d'une note saline propre. Si l'amertume vient en premier, elle est partie trop longtemps."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "simmered_stock"
      ],
      "outputState": "finished_shrimp_stock",
      "instructions": "Plongez dans un tamis à mailles fines dans un récipient propre, pressez doucement les coquilles. Jetez les solides. Utiliser immédiatement dans la poêle ou la bisque, ou refroidir dans un bain de glace et réfrigérer jusqu'à 2 jours. Congeler dans des plateaux de glaçons pour des portions pratiques.",
      "visualCue": {
        "primaryTarget": "Un stock d'or clair et pâle avec un bleu rose très faible. Léger mais brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est laiteux ou nuageux avec des débris de coquille.",
            "action": "Passer à travers le tamis une deuxième fois; si le temps est encore nuageux, laisser reposer 10 minutes et laisser reposer le liquide clair au-dessus du sédiment."
          },
          {
            "state": "Perfect",
            "description": "Clair, doré, légèrement rose. Sens de la mer et des herbes. Bouche propre et sucré.",
            "action": "Utiliser dans les 2 jours ou congeler."
          },
          {
            "state": "Overdone",
            "description": "Le stock est ambré foncé et intensément concentré, plus d'un glaçage qu'un stock.",
            "action": "Diluer au goût avec de l'eau avant utilisation."
          }
        ]
      },
      "feelCue": "Courez une goutte entre vos doigts — il devrait se sentir à peine plus lisse que l'eau, avec un murmure de corps mais rien collant."
    }
  ]
};
