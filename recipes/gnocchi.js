export default {
  "repoId": "master_italian_gnocchi_001",
  "parentRepoId": null,
  "slug": "gnocchi",
  "author": "ForkRecipe Kitchen",
  "title": "Gnocchi de pommes de terre",
  "description": "Des coussins à lumière nuageuse à base de pommes de terre cuites encore chaudes, juste assez de farine, et un seul œuf — le paradoxe de la grand-mère italienne: moins vous travaillez la pâte, mieux le gnocchi. Un gramme supplémentaire de farine est la différence entre une boulette et une torpille.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "grains",
  "tags": [
    "pâtes",
    "Italien",
    "pommes de terre",
    "les boulettes",
    "végétarien",
    "confort"
  ],
  "difficulty": 3,
  "activeTime": "50 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 1487,
  "forks": 134,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre russes ou or du Yukon (variété florale)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "patates douces (denseur, résultat plus doux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine polyvalente (plus extra pour banc)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tipo 00 farine"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs (gros), battus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Jaune d'œuf seulement (plus riche, plus tendre)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano, râpé (finition facultative)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, pour sauce",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive extra vierge"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire au four",
      "inputs": [
        "ing_01"
      ],
      "outputState": "baked_potatoes",
      "instructions": "Préchauffer le four à 200 C (400 F). Frottez les pommes de terre, piquez-les avec une fourchette et placez-les directement sur la grille du four (non enveloppée dans du papier — vous voulez que l'humidité s'échappe). Cuire de 55 à 70 minutes jusqu'à ce que le centre soit complètement tendre lorsqu'il est percé à l'aide d'une brochette et que la peau soit collante et serrée. Ne faites pas bouillir les pommes de terre — bouillir ajoute de l'eau, ce qui exige plus de farine, ce qui rend les gnocchi lourds.",
      "visualCue": {
        "primaryTarget": "La peau est ridée et papier, légèrement retirée de la chair. Une brochette rencontre une résistance nulle à travers le centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La brochette rencontre la résistance au centre. La pomme de terre se sent ferme lorsqu'elle est pressée doucement.",
            "action": "Retourner au four pour des incréments de 10 minutes et retester."
          },
          {
            "state": "Perfect",
            "description": "Complètement. La peau est serrée et sèche. La pomme de terre s'effondre légèrement lorsqu'elle est pressée. Une bouffée de vapeur s'échappe lorsqu'elle est percée.",
            "action": "Coupez la chair et faites - la bouillir immédiatement, et la vapeur doit s'échapper."
          },
          {
            "state": "Overdone",
            "description": "La peau est fendue et la chair fuit et légèrement caramélisée.",
            "action": "Encore utilisables — les bords caramélisés peuvent ajouter de la douceur non désirée; racler ceux - ci."
          }
        ]
      },
      "feelCue": "Pressez doucement une pomme de terre à travers une mitaine de four – elle devrait donner complètement, comme serrer une boule de stress, sans taches fermes."
    },
    {
      "nodeId": "step_2",
      "action": "Presser",
      "inputs": [
        "baked_potatoes"
      ],
      "outputState": "riced_potato",
      "instructions": "Alors que les pommes de terre sont encore chaudes à la vapeur, les faire mijoter et écoper la chair directement à travers un rizier ou un moulin à nourriture sur une planche propre ou une plaque de cuisson. Étaler la pomme de terre rizisée dans une couche mince et laisser échapper la vapeur pendant 3-4 minutes. Ne pas écraser avec un mascher — il écrase les cellules et crée une pâte collante. Cool jusqu'à ce que tu puisses gérer ça, mais pas plus.",
      "visualCue": {
        "primaryTarget": "Des flocons de pommes de terre légers et semblables à des flocons de neige sont distribués uniformément. Pas d'embrouille. La vapeur s'élève visiblement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste encore de gros morceaux. Une texture inégale créera des taches denses dans le gnocchi.",
            "action": "Passer les morceaux restants dans le rizier. Tout doit être rizisé."
          },
          {
            "state": "Perfect",
            "description": "Même des brins plumeux de pomme de terre. Léger comme de la neige fraîche. La vapeur se lève toujours doucement.",
            "action": "Laisser reposer la vapeur pendant 3 minutes, puis faire un puits au centre pour les ingrédients restants."
          },
          {
            "state": "Overdone",
            "description": "La pomme de terre s'est complètement refroidie et commence à se serrer et à se coller.",
            "action": "Procéder rapidement — la pomme de terre froide est utilisable, mais elle prendra plus de farine et pourrait être légèrement plus dense."
          }
        ]
      },
      "feelCue": "La pomme de terre riée devrait se sentir comme du sable chaud et sec qui coule à travers vos doigts — lâche, léger, pas collant."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "riced_potato",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "gnocchi_dough",
      "instructions": "Faites un puits dans la patate de riz. Ajouter l'œuf battu et le sel dans le puits. Dispersez la farine sur le dessus. À l'aide d'un racleur de banc ou du bout des doigts, couper et plier le mélange ensemble — ne pas pétrir. Travaillez jusqu'à ce qu'il soit simplement combiné: une pâte chaotique se forme et aucune farine sèche ne reste. Au moment où vous voyez une masse cohésive, arrêtez. Le surmenage développe du gluten et rend le gnocchi difficile.",
      "visualCue": {
        "primaryTarget": "Une pâte douce, à peine cohésive, qui tient ensemble lorsqu'elle est pincée mais n'est pas lisse. Une surface légèrement trapue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Farine sèche encore visible. La toux s'écroule quand elle est pincée.",
            "action": "Pliez encore quelques fois — mais résistez à ajouter de l'eau; au lieu de travailler les morceaux secs."
          },
          {
            "state": "Perfect",
            "description": "Dough tient dans une balle. La surface est légèrement collante mais pas humide. Pas de taches sèches. Pas lisse ou élastique.",
            "action": "Diviser immédiatement et rouler — se reposer développe le gluten."
          },
          {
            "state": "Overdone",
            "description": "La toux est lisse, élastique et se retire lorsqu'elle est étirée. On dirait de la pâte à pizza.",
            "action": "Les gnocchi vont être croustillants. Continuez — rien à faire maintenant — et travaillez plus vite la prochaine fois."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir comme de l'argile fraîche et humide — elle tient une impression de votre pouce mais ne ressort pas."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "gnocchi_dough"
      ],
      "outputState": "shaped_gnocchi",
      "instructions": "Prosternez votre surface de travail légèrement. Enlevez une partie de la pâte de balle de golf et roulez-la dans une corde d'environ 1,5 cm de diamètre, en appliquant même la pression du centre vers l'extérieur. Couper la corde en oreillers de 2 cm avec un racleur de banc. En option : rouler chaque pièce sur une fourchette ou une planche de gnocchi, presser doucement avec votre pouce pour créer des crêtes qui tiennent la sauce. Placer sur une plaque de cuisson légèrement farinée en une seule couche.",
      "visualCue": {
        "primaryTarget": "Même des morceaux en forme d'oreiller d'environ 2 cm de long avec un léger tiret d'un côté. Léger et gonflé, pas dense.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rotules sont inégales — épaisses au centre, minces aux extrémités. Certaines pièces seront cuites à des taux différents.",
            "action": "Rerouler les sections inégales avant de couper."
          },
          {
            "state": "Perfect",
            "description": "Oreillers uniformes, légèrement rembourrés, tenant leur forme sans écraser. Ridged si vous utilisez une planche.",
            "action": "Cuire immédiatement ou congeler en une seule couche pour plus tard."
          },
          {
            "state": "Overdone",
            "description": "Les pièces ont été trop manipulées et deviennent collantes et denses.",
            "action": "Flourez vos mains et votre surface de travail plus généreusement. Gnocchi en forme de refroidissement pendant 10 minutes pour se raffermir."
          }
        ]
      },
      "feelCue": "Lorsque vous roulez une corde, elle devrait avoir l'impression de rouler une corde épaisse de beurre doux — pression douce seulement; presser dur compresse le gnocchi."
    },
    {
      "nodeId": "step_5",
      "action": "Faire bouillir",
      "inputs": [
        "shaped_gnocchi",
        "ing_06"
      ],
      "outputState": "cooked_gnocchi",
      "instructions": "Portez un grand pot d'eau bien salée à ébullition vigoureuse. Faire cuire les gnocchi en lots de 20 à 25 pièces. Ils sont faits dès qu'ils montent à la surface et y sont restés pendant 30 secondes — pas plus. Retirer avec une cuillère à fente directement dans une poêle d'attente de beurre brun à feu moyen. Mélanger et finir dans le beurre pendant 60 secondes jusqu'à ce qu'il soit légèrement doré.",
      "visualCue": {
        "primaryTarget": "Gnocchi flottant à la surface, visiblement gonflé et légèrement translucide. Or du beurre dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours au fond du pot. Sensé, pâteux quand mordu.",
            "action": "Attendez, ils se lèveront quand ils seront cuits. Ne foulez pas le pot."
          },
          {
            "state": "Perfect",
            "description": "flottant à la surface, gonflé et tendre, légèrement doré du beurre. Rendement à la pression douce sans centre gommé.",
            "action": "Assortir immédiatement avec de la sauce."
          },
          {
            "state": "Overdone",
            "description": "Gnocchi a bouilli à la surface pendant plus de 2 minutes. La surface commence à se dissoudre et a l'air rasée.",
            "action": "Supprimer immédiatement. Ils seront légèrement musclés — servir avec une sauce épaisse pour masquer."
          }
        ]
      },
      "feelCue": "Appuyez sur un gnocco entre les doigts — il devrait donner complètement et se sentir comme un pain à la vapeur, pas comme un bouchon en caoutchouc."
    }
  ]
};
