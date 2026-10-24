export default {
  "repoId": "master_korean_gochujang_butter_001",
  "parentRepoId": null,
  "slug": "gochujang-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Gochujang Butter",
  "description": "Un beurre composé d'une force surprenante: le funk fermenté de gochujang et la chaleur lente plié dans le beurre froid avec de l'ail et un murmure de miel, fondre dans tout ce qu'il touche avec une urgence qui le rend formant une habitude.",
  "cuisine": "Coréen",
  "culture": "Coréen-Américain",
  "category": "condiments",
  "tags": [
    "beurre",
    "Gochujang",
    "coréen",
    "beurre composé",
    "condiment",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "weight",
  "stars": 780,
  "forks": 95,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, température ambiante",
      "ratioValue": 110,
      "defaultUnit": "g",
      "substitutions": [
        "Beurre végétalien (Miyoko ou similaire)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Gochujang (Pâte de poivre rouge coréen)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Ail, râpé ou pressé finement",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "jus de citron vert"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crémer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "creamed_butter",
      "instructions": "Battre le beurre à température ambiante dans un bol avec une fourchette ou une spatule jusqu'à ce qu'il soit lisse, moelleux et pâle — environ 2 minutes de brassage vigoureux. Le beurre doit être vraiment à température ambiante, pas doux de fusion. Le beurre froid n'acceptera pas le gochujang; le beurre fondu se séparera en flaques grasses.",
      "visualCue": {
        "primaryTarget": "Beurre pâle, moelleux, lisse avec une surface mate et sans stries ni grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore un peu ferme, de petites bosses dans l'ensemble, n'intégrera pas le gochujang uniformément.",
            "action": "Continuer à battre; ou mettre le bol sur l'eau chaude pendant 30 secondes et battre à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Pale, crémeux, doux. Se propage sans résistance. Prend des pics doux.",
            "action": "Ajouter le gochujang et d'autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "Le beurre semble gras et séparé — il était trop chaud ou fondu.",
            "action": "Refroidir pendant 15 minutes et battre à nouveau; si elle se sépare en huile et en solides, vous devrez recommencer à zéro."
          }
        ]
      },
      "feelCue": "Le beurre bien crème donne à la pression douce comme le jeu-Doh frais — assez ferme pour tenir forme mais assez doux pour lisser sur une surface avec un bout de doigt."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "creamed_butter",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_gochujang_butter",
      "instructions": "Ajouter le gochujang, l'ail râpé, le miel, le sel et le vinaigre de riz au beurre crémeux. Plier avec une spatule jusqu'à ce qu'elle soit complètement uniforme — pas de stries de gochujang orange visibles contre le beurre pâle. Goûtez et ajustez : ajoutez plus de gochujang pour la chaleur, de miel pour la douceur, ou de vinaigre pour la luminosité. Transférer dans du papier parchemin, rouler dans un log et réfrigérer. Conserve 2 semaines au réfrigérateur, 3 mois surgelés.",
      "visualCue": {
        "primaryTarget": "Un beurre composé corallien-orange uniformément profond sans stries blanches de beurre uni restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de gochujang orange visibles dans le beurre pâle ne sont pas entièrement incorporées.",
            "action": "Continuer le pliage; les stries causent une saveur inégale lorsque le beurre fond sur les aliments."
          },
          {
            "state": "Perfect",
            "description": "Uniforme couleur rouge corail profond tout au long. Légèrement tacheté de flocons de poivre rouge. Des odeurs de chili fermenté, d'ail et de miel. Tient une forme log lorsqu'elle est pressée.",
            "action": "Rouler dans le parchemin et réfrigérer jusqu'à ce qu'il soit ferme."
          },
          {
            "state": "Overdone",
            "description": "Beurre est devenu chaud et gras de trop de mélange.",
            "action": "Transférer dans le parchemin, former de façon lâche et réfrigérer pendant 30 minutes avant de servir."
          }
        ]
      },
      "feelCue": "Le beurre composé fini devrait se sentir comme de l'argile très molle — suffisamment souple pour presser dans une bûche mais suffisamment ferme pour trancher proprement une fois réfrigéré."
    }
  ]
};
