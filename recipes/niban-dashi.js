export default {
  "repoId": "master_japanese_niban_dashi_001",
  "parentRepoId": null,
  "slug": "niban-dashi",
  "author": "ForkRecipe Kitchen",
  "title": "Niban Dashi",
  "description": "La seconde extraction de kombu et katsuobushi, moins raffinée que le dashi ichiban, mais plus riche et plus complexe, porte la profondeur fermentée du bonito épuisé en braises, légumes mijotés et bouillons de nouilles.",
  "cuisine": "Japonais",
  "culture": "Washoku japonais",
  "category": "stocks",
  "tags": [
    "Dashi",
    "niban",
    "Japonais",
    "umami",
    "stock",
    "katsuobushi",
    "kombu"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 812,
  "forks": 62,
  "contributors": 29,
  "license": "CC-BY-SA",
  "createdAt": "2025-02-20",
  "updatedAt": "2025-05-01",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Inosinate",
      "name": "Spent katsuobushi (d'ichiban dashi)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "katsuobushi frais (plus petite quantité)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Glutamate",
      "name": "Spent kombu (de ichiban dashi)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "kombu frais (petite pièce)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Inosinate",
      "name": "Autres katsuobushi frais (facultatif)",
      "ratioValue": 5,
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
        "ing_02",
        "ing_03"
      ],
      "outputState": "niban_infusion",
      "instructions": "Placez le kombu et le katsuobushi de votre dashi ichiban dans une casserole avec de l'eau froide fraîche. Portez lentement à 140°F (60°C) à feu moyen-doux — c'est en dessous de la mijotation, et vous devriez voir un mouvement doux dans l'eau mais pas de bulles. Niban dashi est extrait à une température inférieure à l’infusion initiale parce que les ingrédients épuisés libèrent leurs glutamates restants et inosinent plus lentement et à des températures inférieures. Maintenez cette température pendant 15 minutes.",
      "visualCue": {
        "primaryTarget": "Une chaleur douce et tremblante visible à la surface de l'eau — de minuscules lignes chatoyantes mais sans bulles. L'eau commencera à colorier doré dans les 5 minutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est à peine chaude. Pas de mouvement à la surface. Toujours complètement dégagé après 10 minutes.",
            "action": "Augmenter légèrement la chaleur. La température doit atteindre 140°F pour extraire les autres composés."
          },
          {
            "state": "Perfect",
            "description": "Un doux éclat, pas de bulles. L'eau devient pâle ambre à 10 minutes. Température maintenue à 130–150°F.",
            "action": "Tenez à cette température pendant 15 minutes avant d'ajouter des katsuobushi frais si vous utilisez."
          },
          {
            "state": "Overdone",
            "description": "L'eau mijote avec des bulles visibles. La vapeur s'élève. La couleur s'assombrit rapidement.",
            "action": "Réduire immédiatement la chaleur. Niban dashi extrait trop chaud aura un goût amer et plat."
          }
        ]
      },
      "feelCue": "Placez votre main 15cm au-dessus de la casserole — vous devriez sentir la chaleur douce, pas la chaleur. La vapeur devrait être invisible ou presque. C'est une extraction patiente à basse température, plus raide que la cuisson."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "niban_infusion",
        "ing_04"
      ],
      "outputState": "niban_dashi_strained",
      "instructions": "Si vous ajoutez du katsuobushi frais pour un boost de saveur, ajoutez-le maintenant et laissez mijoter (pas bouillir) pendant 8-10 minutes. Simer niban dashi légèrement plus dur que l'ichiban est acceptable — le but est plus riche, plus affirmé umami plutôt que délicatesse. Porter à un ébullition très doux (à peine perceptible), pas un ébullition. Éteignez le feu et laissez raide 5 minutes sans gêne.",
      "visualCue": {
        "primaryTarget": "Un bouillon ambre plus profond, plus richement coloré que l'ichiban dashi. Petites bulles fines aux bords du pot, pas une mijoteuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est pâle et de couleur aqueuse. N'a même pas atteint un mijot doux. Le goût est mince.",
            "action": "Augmentez légèrement la chaleur pour atteindre un mijoter très doux, puis réduisez immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Une couleur ambre plus riche que l'ichiban. Des petites bulles. L'aroma est profondément savore, un peu plus affirmé que l'ichiban — la mousse de bois et l'océan.",
            "action": "Retirer du feu et raider 5 minutes avant la déformation."
          },
          {
            "state": "Overdone",
            "description": "ébullition complète maintenue trop longtemps. Le bouillon est foncé et légèrement amer du bonito surextrait.",
            "action": "Souchez immédiatement et diluez légèrement à l'eau froide."
          }
        ]
      },
      "feelCue": "Le niban dashi fini à la bonne force devrait laisser un film savoureux léger sur votre langue quand vous le sirotez — la synergie glutamate et inosinate crée une sensation d'umami durable qui mijote douce offre plus robustement que la délicatesse d'Ichiban."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "niban_dashi_strained"
      ],
      "outputState": "finished_niban_dashi",
      "instructions": "Déposer une souche fine avec une feuille de fromage ou un filtre à café. Versez le dashi lentement sans presser les solides — pressez des extraits de tanins amers. Jetez le kombu et le katsuobushi. Le dashi tendu devrait être clair ou presque, avec une couleur ambre chaude. Laisser reposer 5 minutes; les particules fines restantes couleront. Utiliser immédiatement ou refroidir rapidement et réfrigérer jusqu'à 3 jours, ou congeler pendant 1 mois.",
      "visualCue": {
        "primaryTarget": "Liquide ambré clair ou presque clair sans particules flottantes. La couleur devrait être un or chaud et transparent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dashi est turbide avec des particules fines flottantes. Peut être encore chaud et n'a pas eu le temps de s'installer.",
            "action": "Laisser reposer 10 minutes et à nouveau à travers un filtre à café frais."
          },
          {
            "state": "Perfect",
            "description": "Ambre claire et chaude. Aucune particule visible lorsqu'elle est maintenue à la lumière. Arôme propre et profondément salé.",
            "action": "Utiliser dans les plats mijotés, les soupes et les liquides de braisage où une saveur dashi robuste est nécessaire."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, presque opaque. Goûte amer et plat.",
            "action": "Diluer à l'eau froide fraîche 1:1 pour modérer l'amertume."
          }
        ]
      },
      "feelCue": "Sirotez une petite cuillère de niban dashi fini — il devrait avoir envie de boire un murmure de la mer. L'umami s'attarde nettement sur le dos de la langue et les côtés de la bouche pendant 20 à 30 secondes après avoir avalé — cette persistance est l'effet synergique du glutamate du kombu et de l'inosinate du bonito."
    }
  ]
};
