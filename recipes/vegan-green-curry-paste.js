export default {
  "repoId": "fork_vegan_greencurrypaste_001",
  "slug": "vegan-green-curry-paste",
  "parentRepoId": "master_thai_greencurrypaste_001",
  "parentSlug": "thai-green-curry-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte verte végétalienne de curry",
  "description": "Une adaptation végétale qui remplace la pâte de crevette par un miso blanc pour la profondeur de l'umami. Même technique de mortier et de peste, même intensité aromatique, aucun compromis sur le funk.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "sauces",
  "tags": [
    "pâte",
    "Thaï",
    "végétalien",
    "à base végétale",
    "mortier et peste"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hour",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-05",
  "updatedAt": "2024-11-10",
  "forkNote": "Pâte de crevettes remplacée par un miso blanc pour une pâte de curry entièrement végétalienne qui maintient l'épine dorsale de l'umami.",
  "changes": {
    "ingredientsAdded": 0,
    "ingredientsRemoved": 0,
    "ingredientsModified": 1,
    "stepsAdded": 0,
    "stepsRemoved": 0,
    "stepsModified": 1
  },
  "flavorRadar": {
    "sweet": 3,
    "salty": 5,
    "sour": 4,
    "bitter": 2,
    "umami": 6,
    "heat": 8
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chili des yeux d'oiseau vert",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Serrano",
        "jalapeño (meilleur)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Lemongrass (noyau sensible)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâte de citronnelle"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Galangal",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "jeune gingembre (différente saveur)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalote",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron vert de Kaffir",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de citron vert + feuille de laurier"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Racine de cilantro",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tiges coriandres"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Mise blanche",
      "ratioValue": 0.35,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de haricots fermentée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Graines de coriandre grillées",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_09"
      ],
      "outputState": "toasted_spices",
      "instructions": "Graines de coriandre au toast sec dans une poêle à feu moyen, tourbillonnant constamment.",
      "visualCue": {
        "primaryTarget": "Les graines s'assombrissent d'une ombre et une fumée mince s'élève de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, couleur brute. Pas de parfum.",
            "action": "Continuez — ils ont besoin de chaleur pour fleurir."
          },
          {
            "state": "Perfect",
            "description": "Couleur de miel chaud, la cuisine sent comme une orangeraie.",
            "action": "Astucez immédiatement sur une assiette fraîche."
          },
          {
            "state": "Overdone",
            "description": "Des taches noires, de la fumée acride.",
            "action": "Jetez. Les épices brûlées ruinent toute la pâte."
          }
        ]
      },
      "feelCue": "Sensations intenses de noix grillées croisées avec des agrumes."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "fibrous_base",
      "instructions": "Dans un mortier de granit, les piments de livre, la citronnelle et le galangal d'abord plus dur — les fibres vers le bas jusqu'aux fils.",
      "visualCue": {
        "primaryTarget": "Une masse fibreuse grossière, vert pâle, sans morceaux reconnaissables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de tiges et de graines.",
            "action": "Pound plus long, racler les côtés."
          },
          {
            "state": "Perfect",
            "description": "Pâte à chaîne; le peste laisse un sentier propre.",
            "action": "Ajouter les alliums."
          },
          {
            "state": "Overdone",
            "description": "De l'eau, du jus.",
            "action": "Égoutter le liquide, économiser pour cuire la pâte plus tard."
          }
        ]
      },
      "feelCue": "Rythme lent. Le pestile devrait toud, pas cliquer. Vous sentez la résistance passer de croquant à humide-sandy."
    },
    {
      "nodeId": "step_3",
      "action": "Piler",
      "inputs": [
        "fibrous_base",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "aromatic_base",
      "instructions": "Ajouter l'échalote, l'ail et la racine de coriandre. Continuer à frapper jusqu'à ce que les alliums se dissolvent dans la pâte.",
      "visualCue": {
        "primaryTarget": "Une pâte humide et vert pâle sans morceaux blancs ou roses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Echalote rose visible.",
            "action": "Pound jusqu'à ce qu'ils disparaissent."
          },
          {
            "state": "Perfect",
            "description": "Gloire, couleur uniforme, une seule nuance de vert vif.",
            "action": "Ajouter le zeste, l'épice et le miso."
          },
          {
            "state": "Overdone",
            "description": "Soupie. Des bassins liquides aux bords.",
            "action": "Retirez-vous et sauvez le liquide."
          }
        ]
      },
      "feelCue": "Sens aiguisé et oignoneux, avec un parfum de citronnelle montant sur le dessus."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "aromatic_base",
        "ing_06",
        "ing_08",
        "toasted_spices"
      ],
      "outputState": "finished_paste",
      "instructions": "Ajouter le zeste de lime, le miso et les épices grillées. Pliez le miso en douceur — frapper trop fort le rend gommant. Travailler jusqu'à ce que la pâte soit uniforme.",
      "visualCue": {
        "primaryTarget": "Une pâte vert foncé brillant qui tient des sommets. Un peu plus pâle que la version en pâte de crevettes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de miso pâle visible.",
            "action": "Pliez et appuyez jusqu'à l'uniforme."
          },
          {
            "state": "Perfect",
            "description": "Couleur jade-vert unique, brillant, légèrement plus mat que l'original.",
            "action": "Utiliser dans les 5 jours, ou congeler."
          },
          {
            "state": "Overdone",
            "description": "Sticky et gummy de miso surmené.",
            "action": "Fine avec un jet de jus de lime."
          }
        ]
      },
      "feelCue": "Même piqûre dans les yeux, mais l'arôme de base est plus rond — soja fermenté au lieu de saumure."
    }
  ]
};
