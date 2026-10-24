export default {
  "repoId": "master_italian_american_sausage_ragu_rigatoni_001",
  "parentRepoId": null,
  "slug": "sunday-sausage-ragu-rigatoni",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Saucisse Ragù dimanche avec Rigatoni",
  "description": "Saucisse parfumée de fenouil dorée dur, puis mijotée lentement avec du vin et des tomates dans une sauce épaisse et rouge rouille qui s'accroche à l'intérieur de chaque tube arqué de rigatoni, fini avec une chute de neige de Parmesan.",
  "cuisine": "Italien-Américain",
  "culture": "Italien-Américain",
  "category": "grains",
  "tags": [
    "pâtes",
    "Saucisse",
    "ragou",
    "tomates",
    "mijoté lentement",
    "Rigatoni",
    "cuisine maison",
    "weekend"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "2 hr 15 min",
  "ratioSystem": "weight",
  "servings": 6,
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
    "bitter": 1,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Saucisse italienne (douce ou chaude), boyaux enlevés",
      "ratioValue": 750,
      "defaultUnit": "g",
      "substitutions": [
        "porc haché plus 1 c. à thé de graines de fenouil concassé et 1 c. à thé de sel supplémentaire"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte en dés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Céleri, finement coupé",
      "ratioValue": 1,
      "defaultUnit": "stalks",
      "substitutions": [
        "ampoule de fenouil en dés"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "omettre si vous utilisez une saucisse chaude"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Vin rouge sec",
      "ratioValue": 180,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec",
        "bouillon de poulet plus 1 c. à thé vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Base",
      "name": "Tomates concassées (une boîte de 28 oz / 794 g)",
      "ratioValue": 794,
      "defaultUnit": "g",
      "substitutions": [
        "tomates entières pelées, broyées à la main"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 1,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Structure",
      "name": "Rigatoni, séché",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "l'espèce",
        "mezzi rigatoni"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Glutamate",
      "name": "Parmesan, finement râpé, plus plus à servir",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Pecorino Romano (salier; utiliser moins)"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Basilic déchiré",
      "ratioValue": 8,
      "defaultUnit": "leaves",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel casher (pour l'eau de sauce et de pâtes)",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "browned_sausage",
      "instructions": "Chauffer l'huile d'olive dans un four hollandais lourd de 5 à 6 qt (5 l) à feu moyen-vif. Ajouter la saucisse en gros morceaux et la presser dans une couche uniforme. Laissez-le seul 4-5 minutes jusqu'à ce qu'une croûte brune profonde se forme en dessous, puis cassez-la en petits miettes avec une cuillère en bois et continuez à cuire encore 5-6 minutes jusqu'à ce qu'elle soit bien dorée. Soulevez la saucisse avec une cuillère à fente, laissant la graisse derrière.",
      "visualCue": {
        "primaryTarget": "Crumble avec des bords brun foncé, croûteux et une glaçure brune (fond) sur le fond du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Saucisse grise et vapeur dans son propre liquide, sans brunissement sur le pot.",
            "action": "Levez la chaleur, étendez-la et arrêtez de remuer pour que l'humidité se réchauffe et qu'elle puisse se refermer."
          },
          {
            "state": "Perfect",
            "description": "Des miettes de cailloux, de l'acajou profond sur plusieurs côtés, le fond en pot recouvert de fond brun, le gras clair et le grésillement.",
            "action": "Retirer la saucisse et passer aux légumes."
          },
          {
            "state": "Overdone",
            "description": "Le fond du pot est devenu noir et sent l'acride.",
            "action": "Verser la graisse, essuyer les morceaux brûlés, et commencer les légumes dans l'huile fraîche."
          }
        ]
      },
      "feelCue": "Vous devriez entendre un étourdissement constant et fort — une mijotée calme signifie que la casserole est surpeuplée ou trop froide."
    },
    {
      "nodeId": "step_2",
      "action": "Sweat soffritto",
      "inputs": [
        "browned_sausage",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_15"
      ],
      "outputState": "soffritto_base",
      "instructions": "Baisser le feu à moyen. Ajouter l'oignon, la carotte, le céleri et une pincée de sel à la graisse de saucisse et faire cuire, en remuant et en grattant le fond, de 8 à 10 minutes jusqu'à ce qu'il soit doux et translucide. Ajouter l'ail et les flocons de poivre pendant 1 minute, puis mélanger la pâte de tomate et cuire 2 à 3 minutes jusqu'à ce qu'elle s'assombrisse du rouge vif au rouge brique et commence à coller.",
      "visualCue": {
        "primaryTarget": "Légumes doux et brillants enrobés de pâte de tomate rouge brique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et croquant; la pâte de tomate est rouge vif et cru.",
            "action": "Continuez à cuire encore quelques minutes, en remuant souvent."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont effondrés et sucrés, la pâte s'est aggravée jusqu'à la rouille et s'attrape légèrement sur le fond.",
            "action": "Déglacer avec le vin."
          },
          {
            "state": "Overdone",
            "description": "L'ail a bruni dur et la pâte sent brûlée.",
            "action": "Déglacer immédiatement; si elle a un goût amer, ajouter une pincée de sucre à la sauce plus tard."
          }
        ]
      },
      "feelCue": "La cuillère doit glisser à travers les légumes qui ne donnent aucune résistance, et la cuisine doit sentir doux et caramélisé."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "soffritto_base",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "sausage_ragu",
      "instructions": "Verser le vin, racler le fond propre et faire bouillir de 2 à 3 minutes jusqu'à réduire d'environ la moitié. Ajouter les tomates concassées, la saucisse brune, la feuille de laurier et 240 ml (1 tasse) d'eau (rincer la boîte avec). Porter à ébullition, puis laisser mijoter au minimum, couvrir partiellement et cuire 1 heure 15 minutes à 1 heure 30 minutes, en remuant toutes les 15 minutes, jusqu'à épaississement. Ajouter une touche d'eau si elle devient trop sèche. Assaisonner de sel et retirer la feuille de laurier.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, rouge brique profonde avec des gras teintés orange à la surface, réduite d'environ un tiers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine, aqueuse, rouge vif, et goût aigu.",
            "action": "Continuer à mijoter pendant 15 à 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "La sauce est assez épaisse qu'une cuillère traînée à travers le pot laisse un sentier qui se remplit lentement; perles d'huile orange sur le dessus; goût riche et arrondi.",
            "action": "Assaisonner et tenir bas."
          },
          {
            "state": "Overdone",
            "description": "La sauce est pâteuse et collante, des marques de brûlure sur le fond du pot.",
            "action": "Allongez-vous avec de l'eau; ne grattez aucune couche brûlée dans la sauce."
          }
        ]
      },
      "feelCue": "Stirring devrait se sentir comme se déplacer à travers le porridge épais, avec le fond de la casserole toujours nettoyer sous la cuillère."
    },
    {
      "nodeId": "step_4",
      "action": "Faire bouillir",
      "inputs": [
        "ing_12",
        "ing_15"
      ],
      "outputState": "al_dente_rigatoni",
      "instructions": "Environ 20 minutes avant que la sauce soit prête, porter 5 l d'eau à ébullition et bien la saler (environ 1 c. à soupe de sel casher par 2 l). Cuire le rigatoni 2 minutes de moins que le paquet dit. Économisez 240 ml d'eau de pâtes avant de les égoutter.",
      "visualCue": {
        "primaryTarget": "Les tubes qui plient mais montrent encore un point blanc mince de noyau ferme quand mordu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes sont de couleur blanche raide et crayeuse à travers le mur.",
            "action": "Faites bouillir encore une minute et testez encore."
          },
          {
            "state": "Perfect",
            "description": "A tendre à l'extérieur avec une légère mâche et un faible noyau blanc — il finira dans la sauce.",
            "action": "Égoutter, garder l'eau."
          },
          {
            "state": "Overdone",
            "description": "Les tubes se divisent ou s'effondrent à plat.",
            "action": "Mélanger la sauce du feu et servir immédiatement."
          }
        ]
      },
      "feelCue": "La piqûre d'une pièce devrait donner une mâche précise au centre plutôt qu'un doux calamar."
    },
    {
      "nodeId": "step_5",
      "action": "Mélanger",
      "inputs": [
        "al_dente_rigatoni",
        "sausage_ragu",
        "ing_13",
        "ing_14"
      ],
      "outputState": "rigatoni_ragu",
      "instructions": "Ajouter le rigatoni égoutté dans la casserole de ragù à feu moyen avec environ 120 ml d'eau de pâtes. Ajouter 1 à 2 minutes jusqu'à ce que la sauce resserre et enrobe les pâtes. Hors de la chaleur, remuer le parmesan et le basilic; ajouter plus d'eau de pâtes si elle semble raide. Servir avec plus de fromage.",
      "visualCue": {
        "primaryTarget": "Chaque tube est brillant et enduit, avec des saucisses prises à l'intérieur des crêtes et aucune piscine de sauce aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce glisse, laissant des pâtes pâles et une piscine aqueuse.",
            "action": "Faire chauffer encore une minute pour épaissir."
          },
          {
            "state": "Perfect",
            "description": "Sauce s'accroche dans une couche brillante, fromage fondu dans, pâtes et sauce se déplaçant ensemble comme un seul.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est sec et maladroit, le fromage est devenu à cordes.",
            "action": "Allongez-vous avec un jet d'eau chaude de pâtes."
          }
        ]
      },
      "feelCue": "Les pâtes doivent se sentir lourdes et glissantes sur la cuillère, la sauce s'y collant plutôt que de s'enfuir."
    }
  ]
};
