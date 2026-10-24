export default {
  "repoId": "master_portuguese_portuguese_egg_tarts_001",
  "parentRepoId": null,
  "slug": "portuguese-egg-tarts",
  "author": "ForkRecipe Kitchen",
  "title": "Pasteis de Nata",
  "description": "Les tartes à la crème de Lisbonne : cloquées, carbonisées et caramélisées dans un four furieusement chaud jusqu'à ce que la surface soit une carte topographique de taches de léopards foncés ambrés au-dessus d'une crème tremblante, encore à peine sertie, de jaunes d'œufs, de crème et de vanille, toutes bercées dans une coquille de pâte feuilletée effilée, d'une minceur éclatante, qui s'écroule en débris dorés à la première bouchée. Poussés de cannelle, mangés debout sur un comptoir en marbre avec un bica d'espresso.",
  "cuisine": "Portugais",
  "culture": "Lisbonne",
  "category": "desserts",
  "tags": [
    "pastel-de-nata",
    "portugais",
    "oeuf-tart",
    "Coutard",
    "Pâtisserie",
    "Lisbon"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pâtisserie soufflée à beurre entier (prête à rouler ou en bloc)",
      "ratioValue": 320,
      "defaultUnit": "g",
      "substitutions": [
        "pâte bouffée brute faite à partir de rayure"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 5,
      "defaultUnit": "pc",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Double crème (crème lourde)",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de ricin",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Farine pure"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Haricots de vanille, graines raclées",
      "ratioValue": 1,
      "defaultUnit": "pc",
      "substitutions": [
        "1 c. à thé extrait de vanille"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Bande de citron",
      "ratioValue": 1,
      "defaultUnit": "pc",
      "substitutions": [
        "peau d'orange"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "pc",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Eau (sirop de sucre)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre de canne à sucre",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Cannelle hachée et sucre glace, pour finir",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_10",
        "ing_11",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "aromatic_syrup",
      "instructions": "Mélanger le sucre, l'eau, le bâton de cannelle, l'écorce de citron et la vanille dans une petite casserole. Porter à ébullition sans remuer et laisser mijoter 3 minutes à 107 C (un sirop léger). Retirer du feu et laisser infuser profondément les aromatiques pendant 10 minutes. Jeter la cannelle, la pelure de citron et la gousse de vanille — réserver les graines de vanille si vous les avez grattées. Refroidir à la température ambiante.",
      "visualCue": {
        "primaryTarget": "Un sirop clair, légèrement doré, avec une viscosité mince, juste plus épais que l'eau. La cuisine sent la vanille, la cannelle et la pelure de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est encore mince et aqueux. Sucre à peine dissous.",
            "action": "Laisser mijoter encore 2 minutes. Le sirop doit atteindre 107 C pour avoir la bonne concentration de sucre pour la crème."
          },
          {
            "state": "Perfect",
            "description": "Gloire, mince mais pas aqueuse. Une goutte sur une plaque froide se met à un film doux et légèrement collant en 30 secondes. Parfumé de citron et de vanille.",
            "action": "Laisser refroidir complètement avant d'ajouter le jaune d'œuf."
          },
          {
            "state": "Overdone",
            "description": "Le sirop est épais et tire en cordes — il s'est trop concentré.",
            "action": "Ajouter 30 ml d'eau chaude et remuer à mince avant d'utiliser."
          }
        ]
      },
      "feelCue": "Le sirop refroidi doit se sentir comme du miel très mince entre les doigts — glissant et légèrement collant, mais pas assez épais pour laisser un fil visible lorsque vous tirez vos doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_06",
        "ing_03",
        "ing_04",
        "aromatic_syrup"
      ],
      "outputState": "custard_base",
      "instructions": "Mélanger les jaunes d'œufs et la farine de maïs dans un bol jusqu'à ce qu'ils soient doux. Dans une casserole, mélanger le lait, la crème et le sirop refroidi. Portez à juste en dessous d'une mijot (petites bulles au bord). Versez lentement le lait chaud sur le mélange de jaunes, en fouettant constamment. Retournez le mélange entier dans la casserole et faites cuire à feu moyen, fouettant constamment, jusqu'à ce qu'il commence juste à épaissir à une crème versable — retirez immédiatement. Plongez dans un bon tamis.",
      "visualCue": {
        "primaryTarget": "Une crème douce d'or pâle qui enveloppe légèrement l'arrière d'une cuillère — plus mince que la crème double mais plus épaisse que le lait. Silky et complètement sans grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le custard est encore mince comme le lait. Pas de revêtement à l'arrière d'une cuillère. Cornflour n'a pas atteint la température de gélatinisation.",
            "action": "Retourner à la chaleur douce et fouetter continuellement — il s'épaissira rapidement une fois qu'il atteindra 82 °C."
          },
          {
            "state": "Perfect",
            "description": "La consistance de la nappe est mince — elle recouvre l'arrière d'une cuillère, et une ligne tirée à travers elle tient parfaitement. Ça coule facilement. Sens de vanille et de crème.",
            "action": "Plongez immédiatement et versez dans des coquilles de pâtisserie préparées."
          },
          {
            "state": "Overdone",
            "description": "Le custard est brouillé — taches jaunes visibles et texture granuleuse. Ça sent l'oeuf.",
            "action": "Jeter et recommencer à zéro — la crème brouillée fera cuire de façon inégale et avec une texture granuleuse désagréable."
          }
        ]
      },
      "feelCue": "Dessinez un doigt sur une cuillère trempée dans la crème — la ligne doit tenir propre et tranchant pendant 5 secondes. La crème devrait se sentir soyeuse, sans grain sur le bout des doigts — pas même un indice."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "ing_01"
      ],
      "outputState": "pastry_shells",
      "instructions": "Rouler la pâte soufflée dans une bûche serrée, puis couper en 12 disques égaux d'environ 1,5 cm d'épaisseur. Appuyez sur chaque disque dans la base d'une boîte à muffins standard graissée, en utilisant vos pouces pour travailler uniformément la pâte sur les côtés — il devrait être plus épais à la base que les côtés, et les côtés devraient venir directement au sommet de l'étain. La pâtisserie sera mince et légèrement translucide sur les côtés. Réfrigérer pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Coques fines, même pâtissières qui atteignent le haut de chaque tasse de muffin sans trous, larmes ou taches épaisses visibles. La coupe en couches de la pâte feuilletée est visible au bord de coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est trop épaisse à la base et trop fine aux côtés, ou n'atteint pas le haut de l'étain.",
            "action": "Travaillez la pâtisserie plus avec vos pouces — pensez à jeter un pot, travaillant du centre vers l'extérieur et vers le haut."
          },
          {
            "state": "Perfect",
            "description": "Coquilles uniformes d'une paroi uniforme d'environ 3 mm. Pâtisserie en couches visible au bord. Pas de trous. Légèrement translucide sur les côtés lorsqu'il est tenu à la lumière.",
            "action": "Réfrigérer pendant 20 minutes pour détendre le gluten avant cuisson."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été manipulée tellement elle a déchiré ou le beurre a fondu — la pâte se sent grasse et commence à perdre sa structure en couches.",
            "action": "Réfrigérer immédiatement pendant 30 minutes avant de procéder. Le beurre froid est le fondement de la pâte feuilletée."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur votre vignette dans le côté d'une coquille réfrigérée — la pâtisserie doit se sentir ferme et froide, pas molle ou grasse. La structure en couches doit être perceptible comme un léger ressort."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "pastry_shells",
        "custard_base",
        "ing_12"
      ],
      "outputState": "finished_pasteis_de_nata",
      "instructions": "Préchauffer le four à sa température maximale – idéalement 250 C (480 F) ou plus. Remplir chaque coquille réfrigérée des trois quarts pleins de crème. Cuire sur le support le plus haut pendant 13–17 minutes, en regardant attentivement. Vous êtes à la poursuite des points léopards foncés classiques à travers la surface — les sommets vont blister et l'omble dans les endroits et la crème va trembler de façon alarmante. Tirez quand les dessus sont boursouflés, mais la crème tremble encore. Laisser refroidir 10 minutes et la poussière avec la cannelle.",
      "visualCue": {
        "primaryTarget": "La surface du custard est une constellation de taches caramélisées d'ambre foncé à presque noir sur un fond crème pâle. La pâtisserie est profondément dorée et cloquée. La crème tremble toujours au centre quand elle est tapée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface du custard est uniformément pâle, sans cloque ni brunissement. La custarde est une masse liquide. La pâte est pâle et douce.",
            "action": "Retourner au rack le plus haut pendant 3 à 5 minutes de plus. Une température plus basse est votre ennemi ici — ces tartes ont besoin de chaleur féroce."
          },
          {
            "state": "Perfect",
            "description": "Des taches sombres et dramatiques caramélisées à travers la crème. La pâte est d'or croustillant et se sépare en couches molles. Le centre de la crème tremble indépendamment lorsque l'étain est tapé. Sens de sucre caramélisé et de vanille.",
            "action": "Laisser refroidir dans l'étain pendant 5 minutes puis transférer sur un support. Servir chaud, avec de la cannelle."
          },
          {
            "state": "Overdone",
            "description": "Custard est complètement réglé — pas de tremblement. La surface est uniformément sombre. La pâtisserie est très sombre aux bords.",
            "action": "Les tartes seront toujours délicieuses, juste en position complète plutôt que crémeuse. Servir immédiatement et ajuster l'heure du prochain lot."
          }
        ]
      },
      "feelCue": "Tapotez doucement le côté de l'étain — la crème au centre devrait mijoter et osciller avec un mouvement liquide lâche séparé des bords fixés. Ce tourbillon est l'âme d'un pastel de nata."
    }
  ]
};
