export default {
  "repoId": "master_french_eggs_en_cocotte_001",
  "parentRepoId": null,
  "slug": "eggs-en-cocotte",
  "author": "ForkRecipe Kitchen",
  "title": "Œufs en Cocotte",
  "description": "Des oeufs cuits à l'intérieur de ramequins individuels nichés dans de la crème et des herbes — chaque blanc tout simplement sert, jaune tremblant et liquide encore, mangé en faisant glisser des soldats grillés à travers la surface.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "eggs",
  "tags": [
    "français",
    "œufs",
    "crème",
    "cuits",
    "brunch",
    "facile",
    "au-bain-marie"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Ciboulette fraîche, reniflée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Gruyère, râpé finement (facultatif)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Emmentaler"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Badigeonner",
      "inputs": [
        "ing_03"
      ],
      "outputState": "buttered_ramekins",
      "instructions": "Préchauffer le four à 190 °C (375 °F). Enrobez généreusement l'intérieur de chaque ramekin avec du beurre ramolli — base d'abord, puis le haut des murs en traits verticaux. Déposer 1 cuillère à soupe de crème dans le fond de chaque ramekin et les placer dans un plat de cuisson profond.",
      "visualCue": {
        "primaryTarget": "Un éclat visible de beurre couvrant chaque millimètre de l'intérieur du ramekin, avec une fine piscine de crème assise à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Murs secs ou patchy. La crème est absente ou les piscines seulement dans les coins.",
            "action": "Ajouter plus de beurre avec une brosse à pâtisserie et une cuillère dans la crème."
          },
          {
            "state": "Perfect",
            "description": "Lissé, même le beurre visible sous la crème. La crème forme une fine couche pâle couvrant toute la base.",
            "action": "Les ramekins sont prêts pour les œufs. Travaillez rapidement pour garder le beurre froid et la crème en place."
          },
          {
            "state": "Overdone",
            "description": "L'excès de beurre se mélange à la base, en mélangeant avec la crème dans une léchere huileuse.",
            "action": "Incliner le ramekin brièvement pour distribuer le beurre à travers les murs et verser tout surplus de piscine à la base."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt le long du mur intérieur — il devrait glisser sans glisser et laisser un léger frottis de beurre sur le bout des doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Assembler",
      "inputs": [
        "buttered_ramekins",
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "assembled_cocotte",
      "instructions": "Casser un œuf soigneusement dans chaque ramekin, en maintenant le jaune intact. Déposer une autre cuillère à soupe de crème autour du blanc — pas directement sur le jaune. Ciboulette, thym, sel et poivre. Ajouter une pincée de Gruyère sur le dessus si vous l'utilisez. Verser l'eau bouillante dans le plat de cuisson jusqu'à ce qu'elle atteigne la moitié de l'extérieur des ramequins.",
      "visualCue": {
        "primaryTarget": "Un jaune entier, non cassé assis fièrement au centre, sonné de blanc cru translucide et de crème, avec des herbes éparpillées à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yolk est cassé et s'étale à plat dans la crème. L'œuf est légèrement brouillé avec le liquide.",
            "action": "Vous ne pouvez pas défaire un jaune cassé, mais il continuera à cuire magnifiquement — continuer et l'appeler œufs grillés en coton."
          },
          {
            "state": "Perfect",
            "description": "Yolk intact et bombé. Le blanc est brut et translucide. La crème est bien baignée autour du blanc. Les herbes sont uniformément dispersées.",
            "action": "Placer soigneusement le plat de cuisson dans le four avant que l'eau ne refroidisse."
          },
          {
            "state": "Overdone",
            "description": "Trop de crème a été ajoutée et déborde le bord du ramekin.",
            "action": "Enlevez une cuillère à café de crème avant de la faire cuire — le surremplissage provoque le pochage de l'œuf plutôt que de faire cuire et empêche le blanc de se fixer proprement."
          }
        ]
      },
      "feelCue": "Le ramekin assemblé doit se sentir frais et léger — la crème est assez froide pour que l'œuf se met progressivement de l'extérieur pendant la cuisson."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "assembled_cocotte"
      ],
      "outputState": "finished_cocotte",
      "instructions": "Transférer soigneusement le plat au four. Faire cuire de 8 à 12 minutes — vérifier à 8 minutes. Le blanc est fait quand il est complètement opaque et juste placé aux bords, mais encore légèrement jiggly au centre. Le jaune doit trembler visiblement lorsque le ramekin est bouché. Retirer immédiatement, lever les ramequins avec un chiffon, et servir dans le plat avec du pain grillé au beurre.",
      "visualCue": {
        "primaryTarget": "Une surface opaque, blanc mat, sans translucidité restante, et un jaune qui tremble comme de la crème cuite lorsque le ramekin est tapé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est encore translucide ou vitreux au centre. Yolk se déplace comme un œuf cru — liquide jusqu'au bout.",
            "action": "Retourner au four pendant 2 minutes — dans un bain-marie, le blanc peut passer du translucide au caoutchouté en seulement 60 secondes."
          },
          {
            "state": "Perfect",
            "description": "Le blanc est entièrement opaque et mat. La surface ne se fige plus dans son ensemble, mais le jaune bobe de façon indépendante lorsqu'il est tapé, encore liquide à l'intérieur.",
            "action": "Servir immédiatement. Les œufs en coton n'attendent personne."
          },
          {
            "state": "Overdone",
            "description": "Yolk a une peau terne et pâle et ne bouge pas lorsqu'il est tapé. Le blanc a tiré des bords du ramekin.",
            "action": "Il est cuit. La texture sera plus ferme que prévu, mais la crème et les herbes la rendent encore utile à manger — servir avec un toast supplémentaire."
          }
        ]
      },
      "feelCue": "Mugez le ramekin — le blanc devrait être rigide, mais le jaune devrait osciller comme un ballon d'eau, séparé et indépendant du blanc environnant."
    }
  ]
};
