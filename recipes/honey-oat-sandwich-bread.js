export default {
  "repoId": "master_american_honey_oat_sandwich_bread_001",
  "parentRepoId": null,
  "slug": "honey-oat-sandwich-bread",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pain de sandwich d'avoine au miel",
  "description": "Un pain de casserole doux et à forte dominance avec une miette serrée et amortissante avec de l'avoine roulée, un murmure de douceur de miel et une fine croûte brûlée qui tranche proprement pour les sandwichs et les toasts.",
  "cuisine": "Américain",
  "culture": "Cuisson maison américaine",
  "category": "breads",
  "tags": [
    "pain",
    "levure",
    "pain sandwich",
    "avoine",
    "Chérie",
    "pain pan",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "3 hr 20 min",
  "ratioSystem": "weight",
  "servings": 12,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Farine polyvalente (légèrement plus douce, moins élevée)",
        "100 g de farine de blé entier au lieu de 100 g de farine de pain"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Avoine laminée (à l'ancienne), plus 10 g pour garniture",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": [
        "avoine rapide"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (environ 105°F / 40°C)",
      "ratioValue": 270,
      "defaultUnit": "ml",
      "substitutions": [
        "moitié de l'eau, moitié du lait entier"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'érable",
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": [
        "levure sèche active, 8 g (dissoudre d'abord dans l'eau chaude)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 9,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Lait, pour brossage",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "oeuf battu (brillant, croûte plus foncée)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "kneaded_dough",
      "instructions": "Dans un grand bol (ou mélangeur avec un crochet de pâte), remuer l'eau chaude et le miel ensemble, puis ajouter la farine, 80 g d'avoine et la levure. Mélanger jusqu'à ce qu'une pâte chaotique se forme et reposer 10 minutes afin que l'avoine et la farine s'hydratent. Ajouter le sel et le beurre et pétrir : de 8 à 10 minutes à la main sur un comptoir sans farine, ou de 6 à 7 minutes sur un mélangeur moyennement bas. La pâte commence collante mais devient lisse et élastique.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte douce, légèrement collante et printanière avec de l'avoine visible partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est lugubre, les larmes sont étirées, et le beurre stries encore la surface.",
            "action": "Continuez à pétrir encore 2-3 minutes."
          },
          {
            "state": "Perfect",
            "description": "La toux est lisse et élastique, ressort lorsqu'elle est pochée, et une petite pièce s'étire assez fin pour laisser passer la lumière avant de déchirer (l'avoine créera quelques trous).",
            "action": "Passez à la première montée."
          },
          {
            "state": "Overdone",
            "description": "La toux est surchauffée à partir d'un long pétrin de machine, se sent lâche et très chaude, et se déchire facilement.",
            "action": "Reposez-le 10 minutes avant de façonner; il se rétablira habituellement."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme un lobe d'oreille doux — assez téméraire pour saisir brièvement votre paume, mais libérer proprement sans laisser de résidus."
    },
    {
      "nodeId": "step_2",
      "action": "Faire lever",
      "inputs": [
        "kneaded_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, couvrir et laisser monter dans un endroit chaud (75–78°F / 24–26°C) pendant 60–75 minutes, jusqu'à ce que la taille double.",
      "visualCue": {
        "primaryTarget": "Dough a doublé en volume avec une surface lisse et bombée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux a à peine grandi et un poke ressort immédiatement.",
            "action": "Donnez-lui 15 à 20 minutes de plus dans un endroit plus chaud."
          },
          {
            "state": "Perfect",
            "description": "Double, gonflé et aéré; un doigt fariné poêlait 2 cm dans les feuilles une bosse qui se remplit lentement en arrière à mi-chemin.",
            "action": "Formez le pain."
          },
          {
            "state": "Overdone",
            "description": "La toux a plus que triplé, s'est effondrée sur le dessus et sent fortement l'alcool.",
            "action": "Frappe-le, remodele, et donne une seconde montée plus courte."
          }
        ]
      },
      "feelCue": "La pâte levée doit se sentir légère et oreiller, soupirant légèrement pendant que vous pressez dedans."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "risen_dough",
        "ing_08",
        "ing_02"
      ],
      "outputState": "panned_loaf",
      "instructions": "Graisser un moule à pain de 9 × 5 dans (23 × 13 cm). Tourner la pâte et presser dans un rectangle d'environ 23 × 30 cm avec un côté court vers vous. Roulez-le bien à partir de l'extrémité courte, pincez la couture à chaque tour, puis pincez la couture finale fermée et collez les extrémités sous. Placez le côté couture dans la casserole. Couvrir et lever de 40 à 50 minutes, jusqu'à ce qu'il couronne environ 2,5 cm (1 po) au-dessus de la jante. Chauffer le four à 375°F (190°C) au cours des 20 dernières minutes. Badigeonner le dessus de lait et disperser avec les 10 g d'avoine réservés.",
      "visualCue": {
        "primaryTarget": "Un pain lisse et serré avec un dôme uniforme s'élevant à environ 2,5 cm au-dessus du bord de la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dough est toujours en dessous ou en niveau avec la jante, et rebondit instantanément quand on pète.",
            "action": "Attendez encore 10-15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Dome se trouve à environ 2,5 cm au-dessus du bord, la surface est tendue, et un poke léger ressort lentement.",
            "action": "Brosse, haut et cuire."
          },
          {
            "state": "Overdone",
            "description": "Des tours de dough bien au-dessus de la jante avec une surface molle, ridée, et poking laisse une bosse qui ne se rétablit pas.",
            "action": "Cuire immédiatement; il peut couler un peu, mais ce sera encore du bon pain."
          }
        ]
      },
      "feelCue": "Le log en forme devrait se sentir tendu, comme un ballon bien gonflé, sans rabats lâches à la surface."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "panned_loaf"
      ],
      "outputState": "baked_oat_loaf",
      "instructions": "Cuire sur la grille centrale 35–40 minutes, jusqu'à ce que le brun doré profond et un thermomètre à lecture instantanée au centre du pain mesure 195–200°F (90–93°C). Tente lâche avec du papier d'aluminium après 25 minutes si le dessus brunit trop vite (le miel brunit rapidement).",
      "visualCue": {
        "primaryTarget": "Croûte dorée profonde sur le dessus et les côtés, température interne 195–200°F (90–93°C).",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est pâle, les côtés sont doux et blancs quand on pointe le pain, et il lit sous 190°F (88°C).",
            "action": "Retournez le pain (hors de la poêle, tout droit sur la grille) pendant 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Haut doré brûlé, côtés dorés, lit 195–200°F (90–93°C), et sonne creux lorsqu'il est tapé sur le fond.",
            "action": "Retirer de la poêle pour refroidir."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est acajou foncé et la croûte est épaisse et dure.",
            "action": "Brossez la croûte chaude avec du beurre fondu pour l'adoucir; tentez plus tôt la prochaine fois."
          }
        ]
      },
      "feelCue": "Tapez sur le fond du pain non moulé — il devrait sembler creux, comme frapper sur une porte en bois."
    },
    {
      "nodeId": "step_5",
      "action": "Refroidir",
      "inputs": [
        "baked_oat_loaf"
      ],
      "outputState": "sliceable_oat_bread",
      "instructions": "Retirez immédiatement le pain de la poêle et refroidissez-le sur une grille pendant au moins 45 minutes (idéalement 1 heure) avant de trancher avec un couteau dentelé. La miette se met toujours comme la vapeur s'échappe.",
      "visualCue": {
        "primaryTarget": "Nettoyer les tranches avec une miette fine, uniforme et printanière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Découpé trop chaud; le couteau traîne et la miette est gommée et compresse.",
            "action": "Attendez plus longtemps avant de trancher le reste."
          },
          {
            "state": "Perfect",
            "description": "Les tranches tiennent leur forme; la miette est douce, uniforme et ressort lorsqu'elle est pressée.",
            "action": "Couper et servir."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'est durcie et l'extrémité coupée est sèche.",
            "action": "Jetez - le — une fois refroidi, rangez - le dans un sac."
          }
        ]
      },
      "feelCue": "Le fond du pain ne devrait être légèrement chaud que lorsque vous posez votre paume contre lui avant de le trancher."
    }
  ]
};
