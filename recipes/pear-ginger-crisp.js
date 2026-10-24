export default {
  "repoId": "master_american_pear_ginger_crisp_001",
  "parentRepoId": null,
  "slug": "pear-ginger-crisp",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Crisp à la poire",
  "description": "Les poires juteuses ont été cuites dans une garniture sucrée, délicatement épicée, avec un double coup de gingembre — racine fraîche tiède et morceaux confits à croquer — sous une garniture d'avoine buttée et croquante.",
  "cuisine": "Américain",
  "culture": "Cuisson maison américaine",
  "category": "desserts",
  "tags": [
    "croustillant",
    "poire",
    "gingembre",
    "Désert de fruits",
    "automne",
    "avoine",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "servings": 8,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Poires, mûres mais fermes, pelées, cardées, coupées en morceaux de 2 cm",
      "ratioValue": 1300,
      "defaultUnit": "g",
      "substitutions": [
        "moitié pommes, moitié poires"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre brun clair (remplissage)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'érable, 40 ml"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Farine universelle, 25 g"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et finement râpé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu, 1 c. à thé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Gingembre cristallisé, finement haché",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "omettre et ajouter 5 g de gingembre frais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de pâte de blé entier"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Avoine laminée (à l'ancienne)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre brun clair (support)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Cardamome au sol, 1/2 c. à thé"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Beurre non salé, froid, coupé en cubes de 1 cm",
      "ratioValue": 115,
      "defaultUnit": "g",
      "substitutions": [
        "huile de coco, solide réfrigéré"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pear_filling",
      "instructions": "Chauffer le four à 375°F (190°C) avec une grille au milieu. Dans un grand bol, jeter les poires avec le jus de citron, 50 g de sucre brun, amidon de maïs, gingembre frais et gingembre cristallisé jusqu'à ce que la fécule de maïs disparaisse. Étaler uniformément dans un plat à pâtisserie de 9 × 9 po (23 × 23 cm) ou de 2 qt (2 l).",
      "visualCue": {
        "primaryTarget": "Des morceaux de poires uniformément brillants sans taches blanches d'amidon de maïs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches de fécule de maïs s'accrochent aux fruits.",
            "action": "Rejeter; le jus de poire va le dissoudre dans une minute ou deux."
          },
          {
            "state": "Perfect",
            "description": "Fruits brillants, légèrement sirupeux, avec des taches de gingembre, étalés dans une couche uniforme.",
            "action": "Faites la garniture."
          },
          {
            "state": "Overdone",
            "description": "Sat pendant plus d'une heure — une piscine de jus mince a été recueillie au fond.",
            "action": "Verser la moitié du jus; le remplissage sera toujours réglé."
          }
        ]
      },
      "feelCue": "Un morceau de poire doit résister légèrement à un couteau — assez mûr pour sentir doux mais suffisamment ferme pour tenir sa forme."
    },
    {
      "nodeId": "step_2",
      "action": "Frottez le beurre",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "oat_topping",
      "instructions": "Incorporer la farine, l'avoine, 100 g de cassonade, la cannelle et le sel dans un bol. Ajoutez les cubes de beurre froid et frottez-les avec le bout des doigts (ou un coupe-pâtisserie) jusqu'à ce que le beurre soit en morceaux de pois et que le mélange se maintienne en touffes lorsqu'il est pressé, 3-4 minutes. Refroidir 10 minutes si le beurre est doux.",
      "visualCue": {
        "primaryTarget": "L'humidité, des taillis irréguliers du pois à la noisette, avec peu de farine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Farine et avoine généralement lâches et sèches avec de gros morceaux de beurre.",
            "action": "Continuez à frotter le beurre."
          },
          {
            "state": "Perfect",
            "description": "Câble et sablonneux, tient ensemble quand pincée, avec de petits morceaux visibles de beurre.",
            "action": "Éparpiller sur le fruit."
          },
          {
            "state": "Overdone",
            "description": "Le beurre s'est réchauffé et la garniture est devenue une masse grasse.",
            "action": "Refroidir 15 minutes, puis le casser en touffes à la main."
          }
        ]
      },
      "feelCue": "Une pincée pressée dans votre poing devrait tenir ensemble comme du sable humide et s'effondrer quand vous le poke."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "pear_filling",
        "oat_topping"
      ],
      "outputState": "baked_crisp",
      "instructions": "Dispersez la garniture uniformément sur les poires, en la laissant en touffes plutôt que de la presser. Placer le plat sur une casserole en feuilles pour attraper les gouttes d'eau. Cuire de 45 à 55 minutes, jusqu'à ce que la garniture soit brun-or profond et que la garniture bouillonne épaissement aux bords — un couteau devrait glisser dans les poires sans résistance. Tente avec feuille si la garniture brunit avant les bulles de remplissage.",
      "visualCue": {
        "primaryTarget": "Garniture croquante dorée avec un jus épais et brillant bouillonnant autour des bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La garniture est pâle et les jus sont minces et nuageux, ou pas bouillonnant.",
            "action": "Continuez à cuire 10 minutes et vérifiez à nouveau — la fécule de maïs ne s'épaissit qu'une fois bouillie."
          },
          {
            "state": "Perfect",
            "description": "Garniture dorée profonde; les jus bullent lentement et semblent brillants et sirupeux aux bords; les poires sont tendres.",
            "action": "Retirez et reposez-vous."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé à noir, et les jus sont caramélisés dur sur le bord.",
            "action": "Écraser tous les morceaux brûlés; le remplissage sera encore bon."
          }
        ]
      },
      "feelCue": "Les bulles au bord devraient être lentes et épaisses, en surgissant paresseusement comme des confitures mijotées."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "baked_crisp"
      ],
      "outputState": "pear_ginger_crisp",
      "instructions": "Laisser refroidir sur une grille pendant au moins 20 minutes afin que les jus s'épaississent comme ils refroidissent. Servir au chaud avec de la crème glacée à la vanille ou de la crème fouettée légèrement sucrée.",
      "visualCue": {
        "primaryTarget": "Une cuillère qui tient ensemble, avec des jus épais, pas une piscine aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servis directement depuis le four, et les jus sont minces dans l'assiette.",
            "action": "Laissez le reste du plat s'asseoir un peu plus longtemps."
          },
          {
            "state": "Perfect",
            "description": "Chaud, avec des jus épais et brillants et une garniture qui reste croustillante.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Couverte dans le réfrigérateur pendant la nuit, et la garniture a ramolli.",
            "action": "Réchauffer à 350 °F (175 °C) pendant 15 minutes pour re-crisp."
          }
        ]
      },
      "feelCue": "Le plat doit se sentir chaud mais confortable à tenir avec les mains nues aux bords."
    }
  ]
};
