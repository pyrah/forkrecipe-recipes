export default {
  "repoId": "master_levantine_cauliflowertahinilentils_001",
  "parentRepoId": null,
  "slug": "roasted-cauliflower-tahini-lentils",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Choux-fleurs rôtis avec lentilles Tahini",
  "description": "Cumin-and-paprika chou-fleur rôti jusqu'aux bords char doux et noix, empilé sur les lentilles terreuses vêtues d'un tahini citronné ailky. Chaud, crémeux et lumineux avec un tas de persil frais.",
  "cuisine": "Levantine",
  "culture": "Inspiré de la Méditerranée orientale",
  "category": "vegetables",
  "tags": [
    "cuisine maison",
    "végétarien",
    "végétalien",
    "chou-fleur",
    "lentilles",
    "Tahini",
    "Tôle"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 2,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux-fleurs, coupés en fleurs de 4 cm (1 grande tête)",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": [
        "brocoli",
        "Romanesco"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive, divisée",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "paprika doux",
        "Poivre d'Alep"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Lentilles vertes ou brunes, rincées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Lentilles vertes françaises"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuille de laurier séchée",
      "ratioValue": 1,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Ail, 1 entier cassé et 1 finement râpé",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau, pour les lentilles",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Tahini, bien agité",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Citrus",
      "name": "Jus de citron (environ 1,5 citron), plus zeste de 1",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Eau glacée, pour les tahini",
      "ratioValue": 70,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "menthe et persil mélangés"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Amandes coupées en tranches",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Noix de pin grillées",
        "graines de grenade"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
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
        "ing_14"
      ],
      "outputState": "roasted_cauliflower",
      "instructions": "Chauffer le four à 425°F (220°C). Mélanger les fleurs avec 45 ml d'huile, le cumin, le paprika et 1 cuillère à café de sel. Étaler sur une grande casserole avec les côtés coupés vers le bas et l'espace entre les morceaux. Faire rôtir 25 à 30 minutes, retourner une fois à 15 minutes, jusqu'à ce que les bords soient tendres et bien carbonisés.",
      "visualCue": {
        "primaryTarget": "Florets profondément dorés sur les côtés plats avec des bords croustillants et foncés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fleurs sont des ocres pâles des épices seulement, sans véritable brunissement; les tiges s'écaillent lorsqu'elles sont coupées.",
            "action": "Roulez encore 5 minutes; assurez-vous que les pièces ne sont pas bondées, ce qui provoque la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Visages brun-châtaigne, bouts de frise presque noirs, tiges tendres.",
            "action": "Tirez du four."
          },
          {
            "state": "Overdone",
            "description": "Noire étendue et une odeur amère d'épices brûlées; les fleurons sont broyés.",
            "action": "Trim les pires morceaux; équilibrez toute amertume avec du citron supplémentaire sur l'assiette."
          }
        ]
      },
      "feelCue": "Un couteau doit glisser dans la tige la plus épaisse avec une résistance douce, comme une poire mûre."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "cooked_lentils",
      "instructions": "Alors que le chou-fleur rôtit, mettre les lentilles, la feuille de laurier, et la gousse d'ail cassé dans une casserole avec l'eau. Porter à ébullition, puis laisser mijoter doucement et cuire de 20 à 25 minutes jusqu'à tendreté mais en tenant leur forme. Saler l'eau dans les 5 dernières minutes. Égoutter, jeter la baie et l'ail.",
      "visualCue": {
        "primaryTarget": "Des lentilles entières et intactes, une ombre plus foncée, avec des peaux toujours allumées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lentilles hochet dans la cuillère et ont un centre dur et gritty.",
            "action": "Laisser mijoter de 3 à 5 minutes de plus, remplir d'eau pour les couvrir."
          },
          {
            "state": "Perfect",
            "description": "Les lentilles sont crémeuses à l'intérieur mais séparées et entières.",
            "action": "Égoutter immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les peaux se sont coupées et le pot ressemble à une soupe épaisse.",
            "action": "Égoutter doucement et utiliser comme un lit mou — il a encore bon goût."
          }
        ]
      },
      "feelCue": "Pressez une lentille entre vos doigts : elle doit s'écraser en douceur sans grain au centre."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_07",
        "ing_11",
        "ing_14"
      ],
      "outputState": "tahini_sauce",
      "instructions": "fouetter le tahini avec le jus de citron, la gousse d'ail râpée et une pincée de sel. Elle va s'emparer et s'épaissir — continuez. Ajouter l'eau glacée une cuillère à soupe à la fois, fouetter jusqu'à ce qu'il s'éclaircisse dans une sauce lisse et versable.",
      "visualCue": {
        "primaryTarget": "Une sauce pâle, couleur ivoire, lisse et crémeuse comme du yogourt mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Épaisseur, grainé, et accroché après que le citron est entré.",
            "action": "Continuez à fouetter et ajouter de l'eau froide une cuillère à la fois."
          },
          {
            "state": "Perfect",
            "description": "Silence, pâle, rubans du fouet et s'installe à plat.",
            "action": "Goûtez au sel et au citron."
          },
          {
            "state": "Overdone",
            "description": "Mince et runny comme du lait.",
            "action": "Dans une autre cuillère à soupe de tahini."
          }
        ]
      },
      "feelCue": "La sauce doit couler une cuillère dans un ruban stable, enrobant le dos uniformément."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "cooked_lentils",
        "tahini_sauce",
        "roasted_cauliflower",
        "ing_02",
        "ing_10",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_cauliflower_lentils",
      "instructions": "Mélanger les lentilles chaudes avec la moitié de la sauce tahini, les 15 ml restants d'huile d'olive, le zeste de citron et la moitié du persil. Assaisonner de sel. Étaler sur un plateau, garnir de chou-fleur rôti, arroser sur le tahini restant, et terminer avec des amandes et le reste du persil.",
      "visualCue": {
        "primaryTarget": "Lentilles crémeuses sous chou-fleur brun, rayées de tahini d'ivoire et d'herbes vertes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles ont l'air sèches et ternes.",
            "action": "Ajouter un peu plus de sauce et un peu d'huile."
          },
          {
            "state": "Perfect",
            "description": "Lentilles scintillent et s'accrochent librement; le chou-fleur est croustillant sur le dessus.",
            "action": "Servir au chaud."
          },
          {
            "state": "Overdone",
            "description": "Tout est noyé dans la sauce et le chou-fleur est devenu doux.",
            "action": "Gardez de la sauce sur le côté la prochaine fois."
          }
        ]
      },
      "feelCue": "Chaque fourche doit donner un chou-fleur croustillant, des lentilles douces et une finale citronnée fraîche ensemble."
    }
  ]
};
