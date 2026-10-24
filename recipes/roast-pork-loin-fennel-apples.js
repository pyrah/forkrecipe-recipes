export default {
  "repoId": "master_american_roast_pork_loin_fennel_apples_001",
  "parentRepoId": null,
  "slug": "roast-pork-loin-fennel-apples",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pois de porc rôti avec fenouil et pommes",
  "description": "Une longe de porc rugueuse de fenouil et d'ail rôtie sur un lit de pommes, de fenouil et d'oignon rouge qui s'écroulent dans la douceur de confiture, tous réunis avec une sauce à la sauce cidre-mustard rapide.",
  "cuisine": "Américain",
  "culture": "Cuisine maison américaine",
  "category": "proteins",
  "tags": [
    "porc",
    "rôti",
    "Rôti du dimanche",
    "fenouil",
    "Pommes",
    "automne",
    "cuisine maison",
    "weekend"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "2 hr 45 min",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Torréfaction de la longe de porc, désossée, avec bouchon gras (environ 1,4 kg)",
      "ratioValue": 1400,
      "defaultUnit": "g",
      "substitutions": [
        "rôti à la longe de porc (ajouter 15 à 20 minutes)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 16,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de fenouil, grossièrement broyées",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail, râpé finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Rosaire, feuilles finement hachées",
      "ratioValue": 2,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Feuilles de sauge",
        "thym"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Ampoules en fenouil, découpées et découpées en 8 coins chacune",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Pommes fermes et tartes, cardées et coupées en 8 coins",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": [
        "poires fermes"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Oignon rouge, coupé en quartiers épais",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Échalotes, coupées en deux"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Cidre de pomme, non sucré (style fraîchement pressé)",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": [
        "cidre dur sec",
        "bouillon de poulet plus 1 c. à thé vinaigre de cidre"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Acid",
      "name": "Moutarde de Dijon",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Beurre non salé, froid",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "rubbed_pork",
      "instructions": "Faites sécher le porc. Noter le bouchon de graisse dans un crosshatch peu profond à environ 2 cm d'écart, en coupant le gras mais pas dans la viande. Mélanger 13 g de sel avec la graine de fenouil, le poivre, l'ail, le romarin et 15 ml d'huile d'olive dans une pâte et le frotter partout, en l'ouvrant dans les partitions. Repos à découvert à température ambiante de 45 minutes à 1 heure (ou réfrigérer jusqu'à 24 heures, puis laisser 45 minutes hors du réfrigérateur). Si le rôti est délié, attachez-le avec la ficelle de cuisine tous les 4 cm pour garder un cylindre uniforme.",
      "visualCue": {
        "primaryTarget": "Un cylindre en croûte uniforme, attaché avec de la pâte poussé dans chaque ligne de score.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Coller seulement sur le dessus; les côtés et les extrémités sont roses nus.",
            "action": "Rouler le rôti dans la pâte de reste sur la planche pour enrober tous les côtés."
          },
          {
            "state": "Perfect",
            "description": "Revêtement uniforme tacheté, sel dissous dans un éclat humide, bouchon gras soigneusement croisé.",
            "action": "Allez à la mer."
          },
          {
            "state": "Overdone",
            "description": "Les partitions sont coupées en profondeur dans la viande, ce qui va se vider et sécher.",
            "action": "Attachez le rôti correctement pour combler les lacunes."
          }
        ]
      },
      "feelCue": "La surface doit se sentir collante et légèrement sèche du fenouil broyé, non mouillée."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "rubbed_pork"
      ],
      "outputState": "seared_pork",
      "instructions": "Chauffer le four à 400°F (200°C). Chauffer 15 ml d'huile dans une grande poêle ou poêle à rôtir à feu moyen-élevé. Casser le côté gras du porc d'abord pendant 4-5 minutes, jusqu'à ce que le gras soit doré et rendu, puis faire revenir les deux autres côtés 2 minutes chacun. Retirer dans une assiette.",
      "visualCue": {
        "primaryTarget": "Croûte dorée de tous les côtés avec le capuchon gras profondément bronzé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est beige pâle et vapeur, pas de croûte.",
            "action": "Laissez-le plus longtemps; augmentez légèrement la chaleur."
          },
          {
            "state": "Perfect",
            "description": "La casquette est ambre et grésillée, les côtés sont brunis, l'ail et le fenouil grillés mais pas noirs.",
            "action": "Réserver et construire le lit de légumes."
          },
          {
            "state": "Overdone",
            "description": "La pâte d'ail a noirci et sent l'amertume.",
            "action": "Badigeonner les morceaux brûlés; baisser la chaleur pour les côtés restants."
          }
        ]
      },
      "feelCue": "Un grésillement constant et crépitant, et le rôti devrait se libérer de la poêle seule lorsque le côté est séché."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "seared_pork",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_02"
      ],
      "outputState": "roasted_pork_fruit",
      "instructions": "Verser le fenouil, les pommes et l'oignon avec l'huile restante de 15 ml et le sel restant de 3 g, et le tartiner dans la poêle (ou un 23 × 33 cm / 9 × 13 dans la poêle). Mettez le côté gras de porc sur le dessus. Faire rôtir 50 à 70 minutes jusqu'à ce qu'un thermomètre à lecture instantanée au centre du rôti indique 145°F (63°C). Commencez à vérifier à 45 minutes. Déplacez le porc sur une planche, tentez avec du papier et reposez-vous 15 minutes — la température va augmenter de quelques degrés et les jus se déposent.",
      "visualCue": {
        "primaryTarget": "Un rôti bruni de 145°F (63°C) au centre, et des fruits et du fenouil ramollis avec des bords caramélisés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre se trouve en dessous de 140°F (60°C); le jus d'une brochette est rose-rouge; le fenouil est encore ferme.",
            "action": "Continuer la cuisson, vérifier toutes les 5-10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Au centre, on lit 145°F (63°C); après le repos, les tranches sont blush-pink au centre et juteuses; les pommes sont effondrées et dorées, le fenouil est tendre à un couteau.",
            "action": "Reposez-vous 15 minutes avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Lit au-dessus de 155°F (68°C); les tranches sont uniformément blanches-gris et serrées.",
            "action": "Couper finement et servir avec beaucoup de sauce."
          }
        ]
      },
      "feelCue": "Un couteau doit glisser facilement dans un coin de fenouil, et les pommes doivent donner comme une pomme de terre cuite lorsqu'elles sont pressées."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer",
      "inputs": [
        "roasted_pork_fruit",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "pork_with_cider_sauce",
      "instructions": "Déplacez les légumes et les pommes dans un plateau. Placer la rôtissoire à feu moyen-élevé, verser le cidre et racler les morceaux brunis. Faire bouillir de 4 à 6 minutes jusqu'à ce qu'il soit réduit d'environ la moitié. fouetter dans la moutarde, puis retirer le feu et tourner dans le beurre froid jusqu'à ce qu'il soit brillant. Ajouter les jus de repos de la planche. Couper le porc de 1 cm d'épaisseur et servir sur le fruit avec la sauce cuillerée sur le dessus.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre brillante qui enrobe légèrement une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine, pâle, et a un goût de jus uni.",
            "action": "Continuer à bouillir pour réduire davantage."
          },
          {
            "state": "Perfect",
            "description": "Réduit de moitié, pur et brillant, goûtant la tarte sucrée avec une bouchée de moutarde.",
            "action": "Verser sur le porc tranché."
          },
          {
            "state": "Overdone",
            "description": "Réduit à un sirop collant qui a un goût trop sucré.",
            "action": "Plongez avec un jet d'eau ou de bouillon."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt dans la sauce à l'arrière d'une cuillère — la ligne doit tenir une seconde avant de fermer."
    }
  ]
};
