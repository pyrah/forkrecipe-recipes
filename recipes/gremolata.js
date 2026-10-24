export default {
  "repoId": "master_italian_gremolata_001",
  "parentRepoId": null,
  "slug": "gremolata",
  "author": "ForkRecipe Kitchen",
  "title": "Grémolate",
  "description": "Trois ingrédients, une minute, et le registre entier d'un changement de braise — zeste de citron milanais, ail cru et persil à feuilles plates écrasés ensemble dans un condiment d'une luminosité aromatique extraordinaire.",
  "cuisine": "Italien",
  "culture": "Milanais",
  "category": "condiments",
  "tags": [
    "condiment",
    "Milanese",
    "Italien",
    "citron",
    "persil",
    "Ail",
    "osso-buco",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 0,
    "sour": 3,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Citrus",
      "name": "Citron non épilé, zeste seulement",
      "ratioValue": 1,
      "defaultUnit": "ea",
      "substitutions": [
        "zeste d'orange",
        "Zeste de pamplemousse"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousse d'ail, crue, finement hachée",
      "ratioValue": 1,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Feuilles de persil à feuilles plates, hachées finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "menthe fraîche (pour agneau)",
        "basilic frais"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hacher finement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "finished_gremolata",
      "instructions": "Zestez le citron directement sur la planche à découper à l'aide d'un microplan ou d'un grater fin — utilisez seulement la couche externe jaune, jamais la pointe blanche. Peler et hacher finement l'ail jusqu'à un quasi-collé. Choisir les feuilles de persil et hacher finement jusqu'à presque une poudre. Combinez les trois sur la planche et coupez brièvement pour épouser les éléments. Les gremolata finis doivent être finement texturés, mais pas une pâte humide. Utiliser immédiatement, ou réfrigérer jusqu'à 1 heure; plus longtemps et l'ail devient acride et les huiles de citron se dissipent.",
      "visualCue": {
        "primaryTarget": "Un mélange vert vif avec des fils jaunes. Finement texturé mais non homogène — chaque élément reste identifiable à l'inspection étroite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Ingrédients hachés trop grossièrement — gros morceaux de feuilles, bandes entières de zeste, morceaux d'ail visibles. Sera déséquilibré en bouche.",
            "action": "Continuer à couper jusqu'à ce que les trois éléments soient les mêmes fins, même la texture."
          },
          {
            "state": "Perfect",
            "description": "Fin, même vert vif avec des taches jaunes et blanches. Sens aiguisé, agrumes et intensément herbacé quand une pincée est frottée entre les doigts. Assez sec pour disperser, pas humide.",
            "action": "Éparpiller directement sur les braises, le risotto ou la soupe juste avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Chopé dans une pâte humide — les jus se sont libérés et le mélange pleure le liquide vert.",
            "action": "À utiliser immédiatement. Les gremolata surchauffés s'oxydent rapidement et perdent sa luminosité aromatique."
          }
        ]
      },
      "feelCue": "Frotter une petite pincée entre les doigts et l'odeur — les huiles devraient se libérer dans un éclat aigu et multicouche: les agrumes d'abord, puis l'herbe verte, puis une note d'ail chaude qui suit après un battement."
    }
  ]
};
