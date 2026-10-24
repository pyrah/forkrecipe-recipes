export default {
  "repoId": "master_mediterranean_olive_oil_lemon_cake_001",
  "parentRepoId": null,
  "slug": "olive-oil-lemon-cake",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Cake citron huile d'olive",
  "description": "Un gâteau tendre et doré à la couche unique avec un dessus de sucre crépité, sa miette parfumée de zeste de citron frotté et le léger poivre herbacé de bonne huile d'olive, fini avec un glaçage de citron vif.",
  "cuisine": "Méditerranée",
  "culture": "Cuisson maison méditerranéenne",
  "category": "desserts",
  "tags": [
    "gâteau",
    "Huile d'olive",
    "citron",
    "agrumes",
    "Pâte à goûter",
    "laiterie légère",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 55 min",
  "ratioSystem": "weight",
  "servings": 10,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 3,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "moitié farine d'amande pour une miette plus humide (réduire légèrement la poudre à pâte)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Cimons, zestes et jus (environ 60 ml de jus)",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "oranges (moins de tarte)",
        "Citrons Meyer"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, légère et fruitée",
      "ratioValue": 160,
      "defaultUnit": "ml",
      "substitutions": [
        "moitié huile d'olive, moitié huile neutre pour une saveur plus douce"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Lait entier, température ambiante",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "yogourt clair éclairci avec de l'eau",
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre en poudre (pour glaçure)",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Sucre Turbinado (pour garniture)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rubir le zeste dans le sucre",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "lemon_sugar",
      "instructions": "Chauffer le four à 350°F (175°C). Graisser une poêle à gâteau ronde de 23 cm de diamètre avec de l'huile d'olive et aligner le fond avec du parchemin. Zestez les deux citrons directement dans le sucre granulé dans un grand bol, puis frottez le zeste dans le sucre avec le bout des doigts pendant 1 à 2 minutes. Juser les citrons et réserver le jus; vous avez besoin de 45 ml pour la pâte et d'environ 20 ml pour la glaçure.",
      "visualCue": {
        "primaryTarget": "Jaune pâle, sucre légèrement humide avec une odeur intense de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre blanc avec des touffes de zeste assises sur le dessus.",
            "action": "Continuer à frotter jusqu'à ce que le sucre soit uniformément teinté et humide."
          },
          {
            "state": "Perfect",
            "description": "Sucre jaune uniforme qui se sent comme du sable humide et sent fortement l'huile de citron.",
            "action": "Passez à la pâte."
          },
          {
            "state": "Overdone",
            "description": "Le zeste comprend la pointe blanche amère — les taches sont pâles et épaisses.",
            "action": "Choisissez les morceaux de poils plus gros; utilisez une main plus légère sur le grater la prochaine fois."
          }
        ]
      },
      "feelCue": "Le sucre devrait se sentir comme du sable de plage humide entre vos doigts, et vos mains devraient sentir fortement le citron."
    },
    {
      "nodeId": "step_2",
      "action": "Battre le fouet",
      "inputs": [
        "lemon_sugar",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cake_batter",
      "instructions": "Ajouter les œufs au sucre de citron et fouetter vigoureusement pendant environ 1 minute jusqu'à ce qu'ils soient pâles et légèrement épaississants. fouetter dans l'huile d'olive dans un ruisseau lent afin qu'elle émulsifie, puis le lait et 45 ml de jus de citron. Dans un bol séparé, fouetter la farine, la poudre à pâte et le sel; ajouter les ingrédients humides et fouetter doucement jusqu'à ce qu'il ne reste plus de farine sèche. Grattez dans la casserole et saupoudrez le sucre turbinado uniformément sur le dessus.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, versable, jaune pâle sans traces d'huile ou de farine sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche ou d'huile séparée sur le dessus.",
            "action": "Plier encore quelques coups avec une spatule, en grattant le fond."
          },
          {
            "state": "Perfect",
            "description": "Gloire et uniforme, la consistance de pâte à crêpes épaisse, avec seulement quelques petites boules.",
            "action": "Verser dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Battre longtemps après la farine est entré; pâte est élastique et le gâteau va dômer et durcir.",
            "action": "Cuire de toute façon; cesser de mélanger dès que la farine disparaît la prochaine fois."
          }
        ]
      },
      "feelCue": "La pâte devrait rubaner le fouet et s'enfoncer en lui-même en quelques secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "cake_batter",
        "ing_10"
      ],
      "outputState": "baked_lemon_cake",
      "instructions": "Cuire sur la grille centrale pendant 40 à 45 minutes, jusqu'à ce que le dessus soit doré, les bords s'éloignent de la poêle, et un cure-dent inséré au centre sort propre ou avec quelques miettes humides. Refroidir dans la casserole 15 minutes, puis faire tourner un couteau autour du bord et tourner sur un rack, à droite.",
      "visualCue": {
        "primaryTarget": "Haut en or profond avec une croûte de sucre crépitante et les bords rétrécissant de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est pâle et escarpé; un cure-dent sort avec une pâte mouillée.",
            "action": "Cuire encore 5 minutes et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Tige dorée et crépitée; le cure-dent sort propre ou avec des miettes humides; le centre ressort.",
            "action": "Laisser refroidir 15 minutes dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Des bords brun foncé et un cure-dent sec et friable; le gâteau s'est rétréci bien loin des côtés.",
            "action": "Badigeonner d'un sirop de citron (à part égale le jus de citron et le sucre) avant d'ajouter l'humidité."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le centre — il devrait revenir tout de suite au lieu de laisser une bosselure."
    },
    {
      "nodeId": "step_4",
      "action": "Glacer",
      "inputs": [
        "baked_lemon_cake",
        "ing_09",
        "ing_05"
      ],
      "outputState": "glazed_lemon_cake",
      "instructions": "fouetter le sucre en poudre avec environ 20 ml du jus de citron réservé jusqu'à ce qu'il soit lisse et épais, mais versable, ajoutant le jus goutte à goutte. Lorsque le gâteau est refroidi à seulement chaud (environ 30 minutes sur la grille), cuillerez la glaçure sur le dessus et laissez-la couler sur les côtés. Qu'il soit réglé 15 minutes avant de trancher.",
      "visualCue": {
        "primaryTarget": "Une glaçure blanche opaque qui s'installe dans une couche mince, set et égoutte partiellement sur les côtés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est si mince qu'elle s'imprégne et disparaît, ou le gâteau était chaud et il a fondu.",
            "action": "fouetter plus de sucre en poudre et appliquer une deuxième couche une fois refroidie."
          },
          {
            "state": "Perfect",
            "description": "Couche mince opaque qui se fixe à une finition mate avec quelques gouttes lentes sur les côtés.",
            "action": "Couper et servir."
          },
          {
            "state": "Overdone",
            "description": "La glace est trop raide pour s'étendre et est assise dans une masse.",
            "action": "Loyer avec quelques gouttes de jus de citron."
          }
        ]
      },
      "feelCue": "La glaçure doit couler du fouet comme du miel épais et tenir un sentier brièvement avant de se lisser."
    }
  ]
};
