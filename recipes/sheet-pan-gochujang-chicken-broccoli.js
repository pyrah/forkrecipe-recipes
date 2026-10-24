export default {
  "repoId": "master_koreanamerican_sheetpangochujangchicken_001",
  "parentRepoId": null,
  "slug": "sheet-pan-gochujang-chicken-broccoli",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Feuille de poulet Gochujang et brocoli",
  "description": "Les cuisses de poulet rôties dans un glaçage gochujang collant et rouge brique qui devient doux, fumé et feu doux aux bords carbonisés, aux côtés des fleurs de brocoli qui rôtissent jusqu'à ce que leurs bouts deviennent croustillants et noisette.",
  "cuisine": "Coréen-Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "nuit",
    "poulet",
    "Tôle",
    "grillés",
    "Gochujang",
    "épicé",
    "brocoli"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Gochujang (Pâte de chili coréen)",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, râpé finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Cuisses de poulet sans peau, désossées, parées",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet, coupée en morceaux de 4 cm"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Base",
      "name": "Brocoli, coupé en fleurs avec des tiges pelées en tranches",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "broccolini",
        "fleurs de chou-fleur"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Échalons, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "gochujang_glaze",
      "instructions": "Chauffer le four à 425°F (220°C) avec une grille en position médiane supérieure. Dans un grand bol, fouetter le gochujang, la sauce soja, le miel, le vinaigre de riz, l'huile de sésame, l'ail et le gingembre jusqu'à ce qu'ils soient doux. Transférer 3 cuillères à soupe de glaçure dans un petit bol et réserver pour brossage plus tard.",
      "visualCue": {
        "primaryTarget": "Un glaçure lisse, brillant et rouge brique qui enveloppe une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Stiff gochujang flotte dans le soya mince.",
            "action": "fouetter plus fort, ou ajouter une cuillère à café d'eau chaude pour desserrer la pâte."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, brillant glaçure l'épaisseur du ketchup.",
            "action": "Réserver une portion, puis enrober le poulet."
          },
          {
            "state": "Overdone",
            "description": "Trop mince et rudimentaire, glissant tout droit sur la cuillère.",
            "action": "Ajouter une autre cuillère à soupe de gochujang pour qu'elle s'accroche au poulet."
          }
        ]
      },
      "feelCue": "Dégustez un bout de doigt et goût : doux et salé devant avec une chaleur lente qui se construit à l'arrière de la gorge."
    },
    {
      "nodeId": "step_2",
      "action": "Manteau",
      "inputs": [
        "gochujang_glaze",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "coated_tray",
      "instructions": "Faire sécher le poulet, l'ajouter dans le grand bol de glaçure et mélanger jusqu'à ce que chaque morceau soit enduit; laisser reposer pendant que vous préparez le brocoli (10 minutes c'est beaucoup). Mélanger le brocoli avec l'huile neutre et 1/2 c. à thé de sel casher. Étaler une poêle à feuilles bordées avec du papier pour faciliter le nettoyage (légèrement huilé). Disposer le côté lisse du poulet sur une moitié et le brocoli sur l'autre moitié.",
      "visualCue": {
        "primaryTarget": "Poulet entièrement laqué en glaçure rouge, brocoli brillant à l'huile, les deux en une seule couche non surpeuplée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Patchs roses sur le poulet; brocoli sec et poussiéreux.",
            "action": "Jetez encore, retournez les morceaux avec des pinces."
          },
          {
            "state": "Perfect",
            "description": "Poulet uniformément recouvert d'excès de glaçure, brocoli brillant, espace entre les morceaux.",
            "action": "Rôtir."
          },
          {
            "state": "Overdone",
            "description": "Puddles de glaçure baigné autour du poulet sur la poêle.",
            "action": "Soulevez le poulet, laissez couler l'excès et essuyez les flaques — le sucre en commun brûle avant que le poulet soit cuit."
          }
        ]
      },
      "feelCue": "Le poulet doit se sentir tacky et lourd avec glaçure, pas goutte à goutte humide."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "coated_tray"
      ],
      "outputState": "roasted_gochujang_tray",
      "instructions": "Faire cuire pendant 18 à 22 minutes, retourner le brocoli une fois à mi-chemin, jusqu'à ce que les bords du poulet soient carbonisés dans des taches et que la pièce la plus épaisse enregistre 165°F (74°C) sur un thermomètre à lecture instantanée (les hauts restent juteux jusqu'à environ 175°F / 79°C). Si le brocoli brunit plus vite que le poulet, tirez-le dans un bol tôt.",
      "visualCue": {
        "primaryTarget": "Poulet avec une glaçure foncée, collante et des taches de rousseur noircies aux bords; bouts de brocoli croustillants et brunis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Glace encore humide et rouge vif; cuisse la plus épaisse en dessous de 165°F (74°C); brocoli encore ferme et vert.",
            "action": "Faites cuire encore 3 à 4 minutes et revérifiez la température."
          },
          {
            "state": "Perfect",
            "description": "Ensemble glacé et rouge acajou avec des taches d'omble; poulet 165–175°F (74–79°C); brocoli tendre aux extrémités brunâtres croquantes.",
            "action": "Badigeonner avec la glaçure réservée et le brochet."
          },
          {
            "state": "Overdone",
            "description": "Glace noire et amère sur toute la surface; brocoli frisé et foncé.",
            "action": "Écraser le pire de la glaçure brûlée et compter sur la glaçure réservée pour re-coat; sauter la grille."
          }
        ]
      },
      "feelCue": "La poêle devrait craquer et la cuisine devrait sentir du chili caramélisé et du sésame grillé."
    },
    {
      "nodeId": "step_4",
      "action": "Brûlure et finition",
      "inputs": [
        "roasted_gochujang_tray",
        "gochujang_glaze",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_gochujang_chicken",
      "instructions": "Badigeonner la glaçure réservée sur le poulet. Passez le four à griller et à griller 1 à 2 minutes, en regardant attentivement, jusqu'à ce que les bulles de glaçure. Reposez le poulet 3 minutes, puis tranchez. Faites passer le brocoli à travers les jus de casserole et dispersez tout avec des oignons et des graines de sésame. Servir avec du riz.",
      "visualCue": {
        "primaryTarget": "Poulet fraichement brillant, bouillonnant avec des oignons verts vifs sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Glaçage réservé toujours cru et mat.",
            "action": "Encore 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Glaze bouillonnant et brillant, les bords sont simplement recharrés.",
            "action": "Reposez-vous brièvement, tranchez et servez."
          },
          {
            "state": "Overdone",
            "description": "Glace brûlée en noir en quelques secondes sous le grilleur.",
            "action": "Trim charred bits et brosser avec un peu de miel éclairci avec du soja."
          }
        ]
      },
      "feelCue": "Une tranche doit être suffisamment juteuse pour briller sur le visage coupé, avec un bord collant et croustillant où la glaçure caramélisée."
    }
  ]
};
