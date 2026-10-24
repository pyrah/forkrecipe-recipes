export default {
  "repoId": "master_mediterranean_bakedfetagreensbeans_001",
  "parentRepoId": null,
  "slug": "baked-feta-greens-and-beans",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Feta cuite avec des verts et des haricots",
  "description": "Une dalle de feta cuite jusqu'à ce qu'elle soit douce et dorée dans un plat bouillonnant de haricots blancs ailky, de tomates cerises confitures et de chou frisé. Salé, crémeux, et fait pour la garniture de pain déchiré.",
  "cuisine": "Méditerranée",
  "culture": "D'inspiration grecque",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "Féta",
    "haricots blancs",
    "Verts",
    "1 pan"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
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
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Fèves de Cannellini, cuites et égouttées (environ 2 boîtes)",
      "ratioValue": 480,
      "defaultUnit": "g",
      "substitutions": [
        "haricots au beurre",
        "Pois chiches"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Tomates cerises",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomates de raisins"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "Poivre d'Alep"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Stocks de légumes",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Feta, un bloc (rennet végétarien), pâté sec",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Lacinato kale, tiges enlevées, feuilles déchirées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Fard suisse",
        "épinards, ajoutés dans les 5 dernières minutes"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Citrus",
      "name": "Citron, zeste et jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Starch",
      "name": "Pain cru, pour servir",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Orzo ou farro"
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
        "ing_06",
        "ing_07",
        "ing_11"
      ],
      "outputState": "bean_tomato_base",
      "instructions": "Chauffer le four à 400°F (200°C). Dans un plat de cuisson de 23 x 33 cm, mélanger les haricots, les tomates cerises, l'ail, 45 ml d'huile d'olive, l'origan, les flocons de poivre et le bouillon. Assaisonner avec une petite pincée de sel (la feta ajoutera beaucoup) et beaucoup de poivre noir. Étendre dans une couche uniforme.",
      "visualCue": {
        "primaryTarget": "Une couche uniforme de haricots et de tomates entières, légèrement brillant avec de l'huile et assis dans un bassin peu profond de stock.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fèves sèches avec huile mise en commun dans un seul coin.",
            "action": "Encore jusqu'à ce que tout brille."
          },
          {
            "state": "Perfect",
            "description": "Liquid vient environ un tiers du chemin vers le haut des haricots; tout uniformément revêtu.",
            "action": "Du gâteau."
          },
          {
            "state": "Overdone",
            "description": "Les haricots nagent dans du liquide.",
            "action": "Verser un peu de bouillon — trop de liquide empêche les tomates de cloquer."
          }
        ]
      },
      "feelCue": "Incliner le plat : le liquide doit simplement se déplacer autour des haricots, pas slosh."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire au four",
      "inputs": [
        "bean_tomato_base"
      ],
      "outputState": "blistered_beans",
      "instructions": "Cuire à découvert pendant 15 minutes, jusqu'à ce que les tomates commencent à se fractionner et que le liquide bouillonne aux bords.",
      "visualCue": {
        "primaryTarget": "Tomates ridées et commençant à éclater, avec des jus de bouillon autour des haricots.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont tendues et brillantes, à peine liquides.",
            "action": "Faites cuire encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "La plupart des tomates ont des peaux fendues et fuient le jus; les bords bouillonnent.",
            "action": "Nid dans le feta et les verts."
          },
          {
            "state": "Overdone",
            "description": "Le plat sèche et les haricots se croquent aux bords.",
            "action": "Écraser en stock de 60 ml avant de continuer."
          }
        ]
      },
      "feelCue": "Appuyez sur une tomate avec l'arrière d'une cuillère — elle devrait sauter et gousser doucement."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "blistered_beans",
        "ing_08",
        "ing_09",
        "ing_04"
      ],
      "outputState": "baked_feta_dish",
      "instructions": "Nettoyez le bloc feta au centre. Mélanger le chou avec l'huile restante de 15 ml et une pincée de sel et l'empiler autour du feta. Cuire encore 15 à 20 minutes jusqu'à ce que le chou soit flétri avec des bouts croustillants et que le feta soit doux. Puis passer à griller (haut) pendant 2 à 3 minutes, en regardant attentivement, pour faire brunir le dessus du fromage.",
      "visualCue": {
        "primaryTarget": "Feta basculée et tachetée d'or sur le dessus, entourée de choux flétris foncés avec quelques bords croustillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Feta est blanche et ferme, le chou encore raide et lumineux.",
            "action": "Cuire encore 5 minutes avant de griller."
          },
          {
            "state": "Perfect",
            "description": "Feta a craqué aux bords et bruni dans des patchs; le chou est tendre avec des bouts croustillants.",
            "action": "Retirer et terminer."
          },
          {
            "state": "Overdone",
            "description": "Les bouts de chou sont noirs et le feta est séché dans une croûte dure.",
            "action": "Retirez les feuilles brûlées; remuez le feta dans les haricots afin qu'il se ré-souvent dans les jus."
          }
        ]
      },
      "feelCue": "Pocher le feta avec une cuillère : il devrait donner comme du beurre doux et s'effondrer crémeusement, ne pas résister."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "baked_feta_dish",
        "ing_10",
        "ing_12"
      ],
      "outputState": "finished_baked_feta_beans",
      "instructions": "Râper le zeste de citron sur le dessus et presser sur la moitié du jus. Séparer doucement le feta avec une cuillère, le remuer dans les haricots et les verts pour épaissir les jus en sauce crémeuse. Goûtez, ajoutez plus de citron si nécessaire, et servez avec du pain croustillant déchiré.",
      "visualCue": {
        "primaryTarget": "Haricots enrobés d'une sauce molle, crémeuse, rose-bleu, de morceaux de feta et de vert foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Feta se trouve toujours dans un bloc; les jus sont minces.",
            "action": "Mélanger plus vigoureusement pour en faire fondre dans le liquide."
          },
          {
            "state": "Perfect",
            "description": "Un peu de feta fondu dans une sauce crémeuse, un peu laissé dans des morceaux mous.",
            "action": "Servir chaud."
          },
          {
            "state": "Overdone",
            "description": "Mâché dans une pâte uniforme sans texture.",
            "action": "Garnir d'une poignée de tomates fraîches ou d'herbes pour le contraste."
          }
        ]
      },
      "feelCue": "Un morceau de pain traîné dans le plat devrait être enrobé de sauce crémeuse et salée."
    }
  ]
};
