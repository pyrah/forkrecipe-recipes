export default {
  "repoId": "master_italianamerican_sheetpangnocchisausage_001",
  "parentRepoId": null,
  "slug": "sheet-pan-gnocchi-sausage-peppers",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Feuille-Pan Gnocchi avec Saucisse et Peppers",
  "description": "Table-stable gnocchi torréfié directement de l'emballage jusqu'à ce que les dessous de la plaquette croustillante et les centres restent oreillers, bourdonnés de saucisses brunes, de poivrons sucrés et d'oignon rouge qui ont sombré dans leurs propres jus.",
  "cuisine": "Italien-Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "nuit",
    "Tôle",
    "grillés",
    "Saucisse",
    "porc",
    "gnocchi",
    "1 pan"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Gnocchi de pomme de terre, plateau (non congelé), séparé",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "gnocchi congelé, rôti à partir de congelé avec 5 minutes supplémentaires"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Liens de saucisses de porc italienne sucrées ou chaudes, coupées en pièces de 2 cm",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": [
        "poulet saucisse italienne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Poivrons (rouge et jaune), coupés en bandes de 2 cm",
      "ratioValue": 350,
      "defaultUnit": "g",
      "substitutions": [
        "mini poivrons doux, coupés en deux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon rouge, coupé en quartiers de 2 cm",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "assaisonnement italien séché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre balsamique"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Parmesan, râpé finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "pécorino romano"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Feuilles fraîches de basilic, déchirées",
      "ratioValue": 10,
      "defaultUnit": "leaves",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "seasoned_tray",
      "instructions": "Chauffer le four à 425°F (220°C) avec une grille en position médiane supérieure. Découpez tous les gnocchi collés directement de l'emballage — ne les faites pas bouillir. Sur une grande casserole en tôle bordée, mélanger le gnocchi, les lanières de poivre et les coins d'oignon avec l'huile d'olive, oregano, flocons de poivre rouge, environ 3/4 c. à thé sel casher et plusieurs moulures de poivre. Répartir tout en une seule couche avec de l'espace entre les morceaux; si la casserole est bondée, utilisez deux casseroles.",
      "visualCue": {
        "primaryTarget": "Chaque gnocchi et la bande de poivre légèrement brillant avec de l'huile et flanqué d'origan, couché à plat dans une couche avec poêle visible entre les morceaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des patchs secs et mats sur les gnocchis et des grumeaux de morceaux encore fusionnés de l'emballage.",
            "action": "Séparez les touffes avec vos doigts et jetez à nouveau jusqu'à ce que chaque surface brille."
          },
          {
            "state": "Perfect",
            "description": "De même huilé, une seule couche, gnocchi assis sur un côté plat, poivre le côté de la peau vers le bas si possible.",
            "action": "Ajouter la saucisse et le rôti."
          },
          {
            "state": "Overdone",
            "description": "L'huile pooling sur la casserole et les légumes empilaient deux profondeurs.",
            "action": "Se diviser sur une deuxième casserole — les légumes empilés vapeur et le gnocchi aller gomme au lieu de croustillant."
          }
        ]
      },
      "feelCue": "Le gnocchi doit se sentir lisse et légèrement collant, pas gras; appuyez sur un et il doit denteler doucement et ressort un peu."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "seasoned_tray",
        "ing_02"
      ],
      "outputState": "roasted_tray",
      "instructions": "Nettoyez les pièces de saucisse dans les trous de la poêle, coupez les côtés vers le bas. Faire cuire pendant 12 minutes, puis retourner et remuer tout avec une fine spatule métallique et rôtir encore 10 à 14 minutes, jusqu'à ce que les gnocchi soient dorés et croustillants sur le fond, les poivrons sont cloqués et assombris, et la saucisse est dorée et enregistre 160°F (71°C) sur un thermomètre à lecture instantanée.",
      "visualCue": {
        "primaryTarget": "Gnocchi avec des dessous dorés, crépités, poivrons ridés avec quelques bords carbonisés, saucisson bruni et grésiller dans son propre rendu gras.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les gnocchis sont pâles et doux de tous les côtés; la saucisse est rose-gris au centre; les poivrons sont encore raides et brillants.",
            "action": "Retourner au four par paliers de 4 minutes. Déplacez la poêle sur la grille supérieure si le brunissement est lent."
          },
          {
            "state": "Perfect",
            "description": "Les gnocchi ont une face dorée croquante, les poivrons sont doux et caramélisés au bout, la saucisse est de 160°F (71°C) avec des bords brunis, et les jus de poêle sont collants plutôt que mouillés.",
            "action": "Tirez la poêle et terminez immédiatement pendant que tout est chaud."
          },
          {
            "state": "Overdone",
            "description": "Les gnocchi sont durs et creux, les bouts d'oignons sont noircis, les saucisses sèchent et se rétrécissent.",
            "action": "Retirer immédiatement et mélanger avec une cuillère à soupe supplémentaire d'huile d'olive et le vinaigre pour adoucir les bords; couper tout oignon brûlé."
          }
        ]
      },
      "feelCue": "Tapez un gnocchi avec la spatule — il devrait sembler légèrement croquant, comme tapoter un crouton, et la casserole devrait être étourdissante audiblement lorsque la porte du four s'ouvre."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "roasted_tray",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_gnocchi_tray",
      "instructions": "Arrosez le vinaigre au-dessus de la poêle chaude et jetez-le immédiatement avec la spatule, en grattant les morceaux brunis afin qu'ils enrobent le gnocchi. Dispersez le parmesan sur le dessus et laissez fondre pendant 1 minute, puis ajoutez le basilic déchiré. Goûtez un morceau de gnocchi et ajoutez du sel si nécessaire. Servir directement de la poêle.",
      "visualCue": {
        "primaryTarget": "Un plateau brillant et jumble où le Parmesan s'est adouci dans les crevasses et le basilic est vert vif et tout simplement flétrissant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vinaigre pooled dans un coin et le fromage assis comme des lambeaux secs sur le dessus.",
            "action": "Rejeter pour que l'acide frappe la poêle chaude et desserre le fond, puis laisser le fromage s'asseoir une autre minute."
          },
          {
            "state": "Perfect",
            "description": "Tout légèrement laqué, fromage fondu dans les coins, basilic parfumé.",
            "action": "Servir immédiatement — les gnocchis ramollissent à mesure qu'ils refroidissent."
          },
          {
            "state": "Overdone",
            "description": "Le basilic noirci et le fromage frit à la croûte parce que la poêle est retournée au four.",
            "action": "Ajouter quelques feuilles de basilic frais et servir; la saveur est encore saine."
          }
        ]
      },
      "feelCue": "Vous devriez entendre un sifflement aigu lorsque le vinaigre frappe la poêle et l'odeur adoucir de pointu à doux en quelques secondes."
    }
  ]
};
