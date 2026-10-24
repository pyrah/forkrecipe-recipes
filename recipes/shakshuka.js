export default {
  "repoId": "master_lebanese_shakshuka_001",
  "parentRepoId": null,
  "slug": "shakshuka",
  "author": "ForkRecipe Kitchen",
  "title": "Shakshuka",
  "description": "Les œufs pochés dans un enchevêtrement mijoté lentement de poivrons doux, d'oignons et d'ail dans une sauce tomate tiède au cumin et au paprika — les blancs se tissent et les jaunes restent fondus, chacun dans son propre cratère rouge vif, dispersé avec du persil et déchiré avec du pain plat chaud.",
  "cuisine": "Tunisien",
  "culture": "Maghrebi",
  "category": "eggs",
  "tags": [
    "Shakshuka",
    "Tunisien",
    "œufs",
    "tomates",
    "brunch",
    "1 pan",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Oignon jaune, en dés",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Poivre rouge, coupé en dés",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Mélange de poivrons rouges et verts"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "de l'eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Poivre d'Alep (ou pincer le flocon de chili)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Biber Maraş",
        "cayenne, utilisée avec parcimonie"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Tomates entières pelées, concassées à la main",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates fraîches mûres, râpées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Oeufs (grands, frais, froids)",
      "ratioValue": 4,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "coriandre",
        "Féta émietté"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "softened_vegetables",
      "instructions": "Chauffer l'huile d'olive dans une grande poêle lourde à feu moyen. Ajouter l'oignon en dés et le poivron avec une pincée de sel et cuire doucement, en remuant de temps en temps, pendant 10 à 12 minutes. Vous n'êtes pas en train de les brunir, vous êtes en train d'exacerber la douceur. Qu'ils se ramollissent et s'affaissent jusqu'à ce que l'oignon soit translucide et que le poivre soit limpide et brillant. Cette base non pressée sépare une shakshuka profonde d'une base aqueuse.",
      "visualCue": {
        "primaryTarget": "Les oignons sont translucides et commencent à tourner en or pâle aux bords; les poivrons sont doux, lâches et brillants avec de l'huile, sans croûte brute.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore blancs et opaques et les poivrons craquent lorsqu'ils sont remués. Le mélange sent vif et cru.",
            "action": "Abaissez la chaleur si elle brunit trop vite et continuez à cuisiner. La patience ici construit la douceur de la sauce."
          },
          {
            "state": "Perfect",
            "description": "Un enchevêtrement doux et scintillant — oignons clairs et simplement dorés, poivrons entièrement tendres. La poêle sent doux et moelleux.",
            "action": "Ajouter l'ail et les épices et procéder à leur floraison."
          },
          {
            "state": "Overdone",
            "description": "Les oignons et les poivrons sont profondément dorés, secs ou capturés aux bords de la poêle et goûtent l'amertume.",
            "action": "Retirez la chaleur, ajoutez une éclaboussure d'eau pour déglacer, et grattez le fond avant de continuer — jetez si brûlé noir."
          }
        ]
      },
      "feelCue": "Les légumes doivent tomber doucement de la cuillère sans résistance, et la cuisine doit sentir doux plutôt que vif. Les piscines d'huile sont claires et dorées autour d'elles."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "softened_vegetables",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "spiced_base",
      "instructions": "Poussez les légumes d'un côté, ajoutez l'ail tranché à l'huile nue, et faites cuire sous une minute jusqu'à ce que parfumé mais non coloré. Incorporer le cumin, le paprika et le poivre d'Alep et les faire griller dans l'huile chaude pendant 30 à 60 secondes, en remuant constamment. La floraison des épices dans les graisses déverrouille leur arôme et élimine toute pulvérisation poussiéreuse — mais elles brûlent en un instant, alors continuez à tout bouger.",
      "visualCue": {
        "primaryTarget": "Les épices s'assombrissent d'une nuance et deviennent brillantes pendant qu'elles absorbent l'huile, et un arôme chaud et terreux de cumin et de paprika s'élève brusquement de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sont sèches et poudreuses sur le dessus, sentant faible et farineux, et l'ail est encore blanc vif.",
            "action": "Donnez-lui encore 20 à 30 secondes, en remuant, jusqu'à ce que les épices mouillent et fleurissent parfumée."
          },
          {
            "state": "Perfect",
            "description": "Les épices sont foncées, lissées et intensément aromatiques; l'ail est parfumé et devient tout simplement blond.",
            "action": "Ajouter immédiatement les tomates pour arrêter la cuisson des épices."
          },
          {
            "state": "Overdone",
            "description": "Les épices et l'ail brunissent à l'amertume et la poêle sent l'acre et la fumée.",
            "action": "Ajouter les tomates à la fois pour refroidir la poêle. Si l'amertume est forte, une pincée de sucre plus tard aidera à le masquer."
          }
        ]
      },
      "feelCue": "C'est le plus fort 45 secondes de la recette — travailler vite, le nez sur la poêle. Au moment où les épices sentent grillées et pleines, les tomates entrent."
    },
    {
      "nodeId": "step_3",
      "action": "Réduire",
      "inputs": [
        "spiced_base",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tomato_sauce",
      "instructions": "Verser les tomates broyées à la main avec leur jus et ajouter le sel. Mélanger, gratter tout ce qui est collé à la poêle et laisser mijoter. Cuire de 10 à 15 minutes, en remuant occasionnellement, jusqu'à ce que la sauce s'épaississe, s'obscurcit de rouge orangé à brique, et l'huile commence à se séparer et à s'accumuler aux bords. Goûtez et ajustez le sel — la sauce doit être assaisonnée avec assurance, car les œufs sont fade. La texture que vous voulez est un ragoût lâche qui tient un creux momentané quand vous faites glisser une cuillère à travers elle.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique brillante assez épaisse qu'une cuillère traînée à travers la poêle laisse un court canal avant qu'il ne se remplisse, avec de l'huile d'olive pleurant au bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince, orange vif, et aqueuse, slossant librement et remplissant instantanément un canal traîné.",
            "action": "Continuer à mijoter, en soulevant un peu la chaleur, jusqu'à ce qu'elle diminue et approfondisse en couleur. La sauce aqueuse ne fera pas les œufs."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, confiture et couleur brique, tenant un court creux lorsqu'il est séparé; la saveur est profonde, tannante et bien salée.",
            "action": "Abaissez à mijoter doucement et faites des puits pour les œufs."
          },
          {
            "state": "Overdone",
            "description": "La sauce est pâteuse et sèche, collante et menaçante de brûler, sans laisser de liquide pour pocher les œufs.",
            "action": "Incorporer quelques cuillerées à soupe d'eau pour les rajouter à une sauce à cuiller avant d'ajouter les œufs."
          }
        ]
      },
      "feelCue": "Écoutez le mijoter pour passer d'un éclaboussure aqueuse à un blooping épais et paresseux. Lorsque l'huile se sépare et sonne le bord de la poêle rouge-orange, la sauce est prête."
    },
    {
      "nodeId": "step_4",
      "action": "Pochette",
      "inputs": [
        "tomato_sauce",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_shakshuka",
      "instructions": "Abaissez la chaleur jusqu'à ce qu'elle mijote. Utilisez l'arrière d'une cuillère pour faire un puits peu profond pour chaque oeuf, les espacer autour de la casserole, et casser un oeuf dans chaque puits — fissurez dans une tasse d'abord si vous êtes nerveux au sujet des coquilles. Spoon un peu de sauce sur les blancs seulement, laissant les jaunes nus. Couvrez et faites cuire 6 à 9 minutes, en vérifiant souvent, jusqu'à ce que les blancs soient juste mis, mais les jaunes continuent à trembler. Tuez la chaleur dès qu'ils sont là; le transport continuera à les cuisiner. Douche avec persil, moudre sur poivre noir, et porter la poêle directement à la table avec du pain chaud.",
      "visualCue": {
        "primaryTarget": "Les blancs sont complètement opaques et sans taches claires, tandis que les jaunes sont levés et brillants, tremblant comme de la gelée quand la poêle est bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs sont encore translucides, lâches et aqueux, coulissants lorsque la poêle est inclinée.",
            "action": "Récupérer et cuire encore une minute ou deux, en vérifiant fréquemment — les blancs doivent être blancs mats, et non clairs."
          },
          {
            "state": "Perfect",
            "description": "Les blancs sont tendres et juste-fermes, les jaunes bombés et liquides sous une peau brillante et oscillent lorsqu'ils sont secoués.",
            "action": "Retirer du feu à la fois et garnir — les œufs finissent par mettre la chaleur résiduelle de la poêle."
          },
          {
            "state": "Overdone",
            "description": "Les jaunes sont devenus pâles, fermes et mates, ils ne tremblent plus, et les blancs sont caoutchouteux.",
            "action": "Il n'y a pas d'inversion d'un jaune set — servez comme il est. La prochaine fois, tirez la casserole une minute plus tôt et faites confiance au report."
          }
        ]
      },
      "feelCue": "Poussez la poêle : les jaunes parfaits frissonnent comme de la gelée douce pendant que les blancs restent en place. Un doigt pressé doucement à côté d'un jaune devrait rencontrer un blanc ferme qui ressort, le jaune fondu se déplaçant juste en dessous."
    }
  ]
};
