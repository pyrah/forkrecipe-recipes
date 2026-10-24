export default {
  "repoId": "master_american_roastedtomatosoup_001",
  "parentRepoId": null,
  "slug": "roasted-tomato-soup",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de tomates et d'ail grillés",
  "description": "Les tomates, l'oignon et toute une tête d'ail rôtis jusqu'à ce qu'ils soient cloqués et rebordés de caramel, puis mélangés dans une soupe épaisse, rouge brique qui goûte à la fin de l'été, avec basilic et un tourbillon de crème.",
  "cuisine": "Américain",
  "culture": "Cuisine à la maison contemporaine",
  "category": "vegetables",
  "tags": [
    "cuisine maison",
    "Soupe",
    "congélateur",
    "végétarien",
    "tomates",
    "grillés",
    "gros lot"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Tomates de prune (Roma), coupées en deux dans le sens de la longueur",
      "ratioValue": 1800,
      "defaultUnit": "g",
      "substitutions": [
        "2 x 800 g de tomates entières pelées, drainées (jus réservé au liquide)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignons jaunes, coupés en quartiers épais",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "poivron rouge, ensemencé et coupé en quartiers",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "1 grande carotte, tranchée fine"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, non pelé",
      "ratioValue": 10,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1/2 c. à soupe de thym séché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stocks de légumes",
      "ratioValue": 750,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet",
        "eau"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Basilic frais",
      "ratioValue": 12,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre balsamique"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre (seulement si les tomates sont pointues)",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "lait de coco",
        "omit pour une soupe plus légère"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "roasted_vegetables",
      "instructions": "Chauffer le four à 425°F (220°C). Divisez les tomates (côté coupé), l'oignon, le poivre et l'ail entre deux poêles à feuilles bordées, arrosez d'huile, saupoudrez de sel et collez les brins de thym. Faire rôtir 45 à 55 minutes, en tournant les casseroles à mi-chemin, jusqu'à ce que les tomates soient trempées et noircies dans les taches et que l'ail soit doux.",
      "visualCue": {
        "primaryTarget": "Tomates pliées, écroulées, aux bords caramélisés foncés et jus de confiture; oignon carbonisé au bout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont encore plumées et humides, sans brunissement; les casseroles sont pleines de jus d'eau.",
            "action": "Faire cuire encore 10-15 minutes; le jus doit être réduit avant qu'il ne caramélise."
          },
          {
            "state": "Perfect",
            "description": "Tomates dégonflées avec des taches de rousseur carbonisées; jus épais et collants aux bords de la poêle; ail se presse comme de la pâte.",
            "action": "Gratter tout, jus inclus, dans une casserole."
          },
          {
            "state": "Overdone",
            "description": "Jus de casserole brûlé noir; tomates cuir.",
            "action": "Laissez les résidus de poêle brûlés derrière et ajoutez un éclaboussure plus de stock pour le corps."
          }
        ]
      },
      "feelCue": "Appuyez sur une girofle d'ail rôtie — le centre doux devrait glisser de la peau avec une légère pression."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "roasted_vegetables",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tomato_soup_base",
      "instructions": "Presser l'ail de ses peaux et jeter les peaux et les tiges de thym. Grattez tout dans une casserole de 5 litres, versez un peu de bouillon sur les casseroles chaudes pour desserrer les jus collés, et ajoutez tout avec le bouillon restant et le basilic. Laisser mijoter 10 minutes pour épouser les saveurs.",
      "visualCue": {
        "primaryTarget": "Un mélange rouge profond et volumineux à peine bouillonnant, le basilic se flétrit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saveur grillée est assise sur le dessus; le liquide a un goût mince.",
            "action": "Laisser mijoter 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Liquid teinté brique rouge et sentant doux et fumé.",
            "action": "Mélanger."
          },
          {
            "state": "Overdone",
            "description": "Réduit à une sauce collante.",
            "action": "Ajouter le bouillon ou l'eau pour se détendre."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir comme la pâte de tomate concentrée et l'ail rôti plutôt que la tomate fraîche."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange et saison",
      "inputs": [
        "tomato_soup_base",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_06"
      ],
      "outputState": "finished_tomato_soup",
      "instructions": "Mélanger jusqu'à douceur avec un mélangeur d'immersion (ou en lots dans un mélangeur ventilé). Pour une soupe plus soyeuse, appuyez à travers un tamis pour enlever les peaux. Incorporer le vinaigre, puis goûter: ajouter une pincée de sucre seulement si elle est nette, et ajuster le sel. Incorporer la crème et chauffer doucement sans bouillir. Pour congeler : congeler avant d'ajouter de la crème (la laiterie peut se séparer) – refroidir rapidement, réfrigérer dans les 2 heures, congeler jusqu'à 4 mois, puis ajouter de la crème après réchauffage.",
      "visualCue": {
        "primaryTarget": "Soupe épaisse et veloutée orange-rouge avec un reflet satiné de l'huile et de la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des flots de peau et des morceaux de poivre; texture granuleuse.",
            "action": "Mélanger plus longtemps, ou passer par un tamis."
          },
          {
            "state": "Perfect",
            "description": "Doux et versable, enrobant une cuillère; doux, acidulé et profondément salé.",
            "action": "Servir avec une feuille de basilic déchirée et du fromage grillé."
          },
          {
            "state": "Overdone",
            "description": "La crème a bouilli après l'entrée du vinaigre.",
            "action": "Mélanger à nouveau brièvement — il se lisse généralement en arrière. Chauffer doucement d'ici."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt sur l'arrière d'une cuillère enduite — la ligne doit tenir propre une seconde avant de fermer."
    }
  ]
};
