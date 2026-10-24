export default {
  "repoId": "master_italianamerican_turkeyzucchinimeatballs_001",
  "parentRepoId": null,
  "slug": "turkey-zucchini-meatballs-marinara",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Balles de viande Turquie-Zucchini à Marinara rapide",
  "description": "Les boulettes de viande de dinde maigre restent tendres et humides avec des courgettes râpées et du parmesan, dorées dans une poêle, puis mijotées dans une sauce tomate ailky rapide jusqu'à ce qu'elles absorbent sa douceur.",
  "cuisine": "Italien-Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "nuit",
    "dinde",
    "boulettes de viande",
    "viande hachée",
    "mijotés",
    "tomates",
    "courgettes"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
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
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Zucchini, râpé grossièrement",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "courge jaune d'été"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "1 c. à thé sel de mer fin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Dindon haché (93 % maigre)",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": [
        "poulet haché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Pâte à pain Panko",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "fines chapelures sèches"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Œufs gros, battus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Parmesan, finement râpé, plus plus à servir",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "pécorino romano"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Ail, râpé finement (pour les boulettes de viande)",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
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
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Ail, tranché finement (pour la sauce)",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Base",
      "name": "Tomates écrasées, en conserve",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "tomates entières pelées, broyées à la main"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches",
      "ratioValue": 8,
      "defaultUnit": "leaves",
      "substitutions": [
        "persil"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sel et presse",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "drained_zucchini",
      "instructions": "Mélanger les courgettes râpées avec 1/2 c. à thé du sel casher dans une calandre et laisser reposer 10 minutes. Rassemblez-le dans une serviette de cuisine propre et enroulez fermement sur l'évier jusqu'à ce que la plupart du liquide soit parti — vous devriez perdre environ un tiers de son poids.",
      "visualCue": {
        "primaryTarget": "Une touffe verte compacte et humide qui tient ensemble, ne coule plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Zucchini coule toujours librement lorsqu'il est pressé.",
            "action": "Tordre la serviette plus serrée et presser à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Hydratant mais pas mouillé; une compression ferme ne donne que quelques gouttes.",
            "action": "Ajouter au mélange de boulettes de viande."
          },
          {
            "state": "Overdone",
            "description": "Zucchini pressé dans une rondelle fibreuse sèche.",
            "action": "Fin à utiliser — le mettre entre les doigts avant de mélanger."
          }
        ]
      },
      "feelCue": "Il devrait se sentir comme une éponge humide qui vient d'être agitée, fraîche et printanière."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange et forme",
      "inputs": [
        "drained_zucchini",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_02",
        "ing_09"
      ],
      "outputState": "shaped_meatballs",
      "instructions": "Dans un grand bol, mélanger les courgettes égouttées, le panko, l'œuf battu, le parmesan, l'ail râpé, l'origan, le sel de casher restant 1 c. à thé et plusieurs moulures de poivre; mélanger dans une pâte et laisser le panko hydrater pendant 2 minutes. Ajouter la dinde et mélanger délicatement avec vos mains jusqu'à ce qu'elle soit uniformément combinée. Avec les mains mouillées, roulez dans 16 boules d'environ 4 cm (1 1/2 pouces) de côté.",
      "visualCue": {
        "primaryTarget": "Seize boules à surface lisse, de taille uniforme, avec des taches de courgettes vertes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries visibles de dinde et des poches de miettes.",
            "action": "Mélanger quelques tours de plus jusqu'à uniforme."
          },
          {
            "state": "Perfect",
            "description": "Mélange uniformément flocé qui est doux et légèrement collant mais qui tient une forme ronde.",
            "action": "Brûlez-les."
          },
          {
            "state": "Overdone",
            "description": "Mélanger pâteux et serré de surmenage, ou trop humide pour tenir une forme.",
            "action": "Si trop humide, ajouter 1-2 c. à soupe plus de panko et refroidir 10 minutes; les boulettes de viande surmenées seront plus fermes mais toujours bonnes."
          }
        ]
      },
      "feelCue": "Le mélange devrait se sentir doux et un peu collant, comme de la pâte à biscuits fraîche; paumes humides l'empêcher de coller pendant que vous roulez."
    },
    {
      "nodeId": "step_3",
      "action": "Marron",
      "inputs": [
        "shaped_meatballs",
        "ing_10"
      ],
      "outputState": "browned_meatballs",
      "instructions": "Chauffer 2 c. à soupe d'huile d'olive dans une poêle de 30 cm de 12 pouces à feu moyen-élevé. Ajouter les boulettes de viande et faire brunir sur au moins deux côtés, en tournant doucement avec des pinces, 5–6 minutes au total. Ils n'ont pas besoin d'être cuits. Transférer dans une assiette.",
      "visualCue": {
        "primaryTarget": "Morne doré sur plusieurs côtés de chaque boulette, forme ronde intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale et gris, collé à la poêle quand vous essayez de les tourner.",
            "action": "Laisser 60 secondes de plus par côté; elles libèrent une fois qu'une croûte se forme."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'or profond sur deux ou trois côtés, qui se forme sur la poêle.",
            "action": "Retirer et construire la sauce dans la même poêle."
          },
          {
            "state": "Overdone",
            "description": "Croûte brune foncée et le parmesan brûlant sur le plancher de la casserole.",
            "action": "Essuyez les morceaux noirs avant d'ajouter l'ail."
          }
        ]
      },
      "feelCue": "Tourné avec des pinces, chaque boule de viande doit se sentir ferme sur son visage brun et encore doux à travers le milieu."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "browned_meatballs",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "simmered_meatballs",
      "instructions": "Réduire le feu à moyen, ajouter le reste de l'huile et l'ail tranché et cuire 1 minute jusqu'à parfumer et à peine doré. Ajouter les flocons de poivre, puis les tomates concassées et une pincée de sel; laisser mijoter, racler le fond. Retourner les boulettes et les jus, couvrir partiellement et laisser mijoter doucement 12 à 15 minutes, en tournant une fois, jusqu'à ce que la sauce épaississe et que les boulettes atteignent 165°F (74°C) au centre — la température sûre pour la volaille hachée.",
      "visualCue": {
        "primaryTarget": "Des boulettes de viande à moitié submergées dans une sauce rouge brique épaissie avec des bulles paresseuses qui se brisent autour d'elles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce fine et rouge vif; une boulette de viande à moitié rose ou brillant au centre se lit en dessous de 165°F (74°C).",
            "action": "Laisser mijoter encore 3-4 minutes et vérifier à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Sauce réduite et approfondie en couleur, boulettes de viande 165°F (74°C) sans rose à l'intérieur et encore juteuse.",
            "action": "Finissez avec le basilic."
          },
          {
            "state": "Overdone",
            "description": "Sauce sur le fond; boulettes denses et sèches.",
            "action": "Déposez la sauce avec un jet d'eau et retirez le feu."
          }
        ]
      },
      "feelCue": "Appuyez sur une boulette avec l'arrière d'une cuillère: cuit à travers, il se sent printanier et ferme tout le chemin, pas squishy au milieu."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "simmered_meatballs",
        "ing_14",
        "ing_06"
      ],
      "outputState": "finished_turkey_meatballs",
      "instructions": "Dresser le basilic sur la casserole, goûter la sauce et ajuster le sel, et servir avec du parmesan supplémentaire sur les pâtes, la polenta ou avec du pain croustillant.",
      "visualCue": {
        "primaryTarget": "Sauce rouge brillant, boulettes de viande brunes, basilic déchiré vert vif sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat et teinté.",
            "action": "Ajouter une pincée de sel et un filet d'huile d'olive."
          },
          {
            "state": "Perfect",
            "description": "Doux, saveur de tomate ronde avec de l'ail en arrière-plan.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Le basilic ragoûté sombre d'être ajouté trop tôt.",
            "action": "Ajouter quelques feuilles fraîches juste avant de servir."
          }
        ]
      },
      "feelCue": "Une cuillère de sauce doit goûter doux et arrondi, avec les flocons de poivre arrivant comme une chaleur faible seulement après avoir avalé."
    }
  ]
};
