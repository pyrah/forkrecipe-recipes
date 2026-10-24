export default {
  "repoId": "master_northafrican_harissachickenchickpeas_001",
  "parentRepoId": null,
  "slug": "harissa-chicken-chickpeas-sheet-pan",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poêle Harissa Poulet avec pois chiches et chou-fleur",
  "description": "Les cuisses de poulet se frottaient dans des harissas fumées et rouges sur des pois chiches qui tournaient en craquant les bords et le chou-fleur qui édulcore et brunit dans les gouttes épicées, toutes refroidies avec une cuillère de yogourt citronné.",
  "cuisine": "Afrique du Nord",
  "culture": "Cuisine maison d'inspiration tunisienne",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "nuit",
    "poulet",
    "Tôle",
    "grillés",
    "Harissa",
    "Pois chiches",
    "chou-fleur"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
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
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Pâte de Harissa",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "rose harissa (mineur)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, râpé finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Cuisses de poulet sans peau, désossées, parées",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses désossées (croûte 35–40 min)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Pois chiches, en conserve, égouttés, rincés et séchés",
      "ratioValue": 480,
      "defaultUnit": "g",
      "substitutions": [
        "haricots au beurre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Base",
      "name": "Choux-fleurs, coupés en fleurs de 3 cm",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Carottes, coupées en pièces de 1 cm",
        "fleurs de brocoli"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Oignon rouge, coupé en quartiers de 2 cm",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Yogourt grec à lait entier",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Labneh"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Citrus",
      "name": "Citron, zeste puis jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Coriandre ou persil frais, approximativement haché",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "menthe"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "harissa_chicken",
      "instructions": "Chauffer le four à 425°F (220°C) avec une grille en position médiane supérieure. Dans un grand bol, mélanger le harissa, 1 c. à soupe d'huile d'olive, le miel, l'ail, le cumin et 3/4 c. à thé de sel casher. Faire sécher le poulet, l'ajouter dans le bol et le mettre enrobé. Laisser reposer pendant que vous préparez les légumes (10-15 minutes), ou réfrigérer jusqu'à 8 heures.",
      "visualCue": {
        "primaryTarget": "cuisses de poulet uniformément enrobées d'une pâte épaisse et rouge brique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches pâles où la pâte n'a pas atteint, surtout dans les plis.",
            "action": "Ouvrez chaque cuisse et frottez la pâte dans les plis."
          },
          {
            "state": "Perfect",
            "description": "Revêtement rouge uniforme qui s'accroche sans goutte à goutte.",
            "action": "Réserver et jeter les légumes."
          },
          {
            "state": "Overdone",
            "description": "Coller abondamment dans le bol — trop d'huile.",
            "action": "Soulevez le poulet et laissez l'excès retomber; arrosez les restes sur les légumes."
          }
        ]
      },
      "feelCue": "La marinade doit sentir grillée, fumée et ailée; le poulet doit se sentir lisse, comme s'il avait une couche de peinture."
    },
    {
      "nodeId": "step_2",
      "action": "Découpe",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_02",
        "ing_06"
      ],
      "outputState": "seasoned_vegetables",
      "instructions": "Sur une grande casserole en tôle bordée, mélanger les pois chiches séchés, le chou-fleur et l'oignon avec le reste de 2 c. à soupe d'huile d'olive et 1/2 c. à soupe de sel casher. Répartir dans une couche uniforme.",
      "visualCue": {
        "primaryTarget": "Pois chiches et fleurs brillants avec de l'huile en une seule couche couvrant la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pois chiches encore mouillés et brillants avec de l'eau; peaux lâches.",
            "action": "Blot à nouveau avec une serviette — vapeur de pois chiches humide au lieu de croustillant."
          },
          {
            "state": "Perfect",
            "description": "Tout est légèrement huilé et sec mat sous l'huile.",
            "action": "Disposer le poulet sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Légumes empilés haut au milieu de la poêle.",
            "action": "Étendez-les sur les bords ou utilisez une deuxième poêle."
          }
        ]
      },
      "feelCue": "Un pois chiche roulé entre les doigts doit se sentir sec et légèrement gras, pas humide."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "seasoned_vegetables",
        "harissa_chicken"
      ],
      "outputState": "roasted_harissa_tray",
      "instructions": "Nettoyez les cuisses de poulet, lissez le côté vers le haut, parmi les légumes, raclant toute marinade restante sur eux. Faire rôtir de 22 à 28 minutes, en remuant les légumes autour du poulet une fois à mi-chemin, jusqu'à ce que le poulet soit carbonisé dans les taches et enregistre 165°F (74°C) dans la partie la plus épaisse et que le chou-fleur soit tendre et bruni.",
      "visualCue": {
        "primaryTarget": "Poulet rouge foncé aux bords noircis, pois chiches cloqués et dorés, chou-fleur doré au bout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Revêtement Harissa encore humide et brillant; poulet inférieur à 165°F (74°C); chou-fleur pâle et ferme.",
            "action": "Roulez encore 4-5 minutes et revérifiez."
          },
          {
            "state": "Perfect",
            "description": "Enrobage serti et foncé avec des taches carbonées; poulet 165°F (74°C) ou plus; pois chiches craquelé; chou-fleur tendre à l'extrémité du couteau.",
            "action": "Reposez-vous 5 minutes pendant que vous faites le yaourt."
          },
          {
            "state": "Overdone",
            "description": "Harissa noircit et acride; pois chiches durs et broyés.",
            "action": "Gratter les taches brûlées et être généreux avec le yogourt de citron."
          }
        ]
      },
      "feelCue": "En remuant la poêle à mi-chemin, vous devriez entendre les pois chiches battre et sauter contre le métal."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "roasted_harissa_tray",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_06"
      ],
      "outputState": "finished_harissa_chicken",
      "instructions": "Incorporer le yaourt avec le zeste de citron, 1 c. à soupe de jus de citron et une pincée de sel. Presser le reste du citron sur la poêle chaude et jeter les légumes dans les gouttes épicées. Éparpiller avec les herbes et servir avec le yogourt de citron sur ou à côté.",
      "visualCue": {
        "primaryTarget": "Poulet rouge, carbonisé et légumes dorés aux herbes vertes vives et dollos blancs frais de yaourt.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yogourt raide et simple.",
            "action": "Ajouter plus de jus de citron et une pincée de sel; mincer avec une cuillère d'eau si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Yogurt cuilleré et tanné, légumes brillants avec des gouttes rouges, herbes fraîches.",
            "action": "Servir au chaud."
          },
          {
            "state": "Overdone",
            "description": "Le yogourt est fendu et arrosé après avoir été cuillé sur une poêle.",
            "action": "Servir le yaourt à la place."
          }
        ]
      },
      "feelCue": "Chaque morsure devrait commencer fumée et chaude et finir fraîche et tannante où le yogourt le rencontre."
    }
  ]
};
