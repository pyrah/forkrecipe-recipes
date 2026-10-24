export default {
  "repoId": "master_italian_wintervegetableminestrone_001",
  "parentRepoId": null,
  "slug": "winter-vegetable-minestrone",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Minétrone des légumes d'hiver",
  "description": "Une soupe épaisse et rustique à croûte de tomates remplie de courges de beurre, de chou de savoy, de haricots Borlotti et de petites pâtes, mijotées d'une croûte de parmesan et de romarin jusqu'à chaque goût de cuillère de tout le jardin en janvier.",
  "cuisine": "Italien",
  "culture": "Nord cuisine maison italienne",
  "category": "vegetables",
  "tags": [
    "cuisine maison",
    "Soupe",
    "congélateur",
    "végétarien",
    "haricots",
    "squash",
    "Choux",
    "gros lot"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "1 hr 30 min",
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
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, plus plus à finir",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune en dés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Carottes coupées en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Céleri en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Glutamate",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Romarin frais",
      "ratioValue": 1,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1/2 c. à thé romarin séché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Base",
      "name": "Tomates entières pelées, écrasées à la main, avec des jus",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates en dés"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Stocks d'eau ou de légumes",
      "ratioValue": 2000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Glutamate",
      "name": "Parmesan rind",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à soupe blanc miso (vegan)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Base",
      "name": "Courge de beurre, pelée et coupée en dés de 1,5 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "pommes de terre",
        "patates douces"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Starch",
      "name": "Fèves de Borlotti, cuites (ou en conserve, rincées)",
      "ratioValue": 480,
      "defaultUnit": "g",
      "substitutions": [
        "haricots cannellini",
        "Pois chiches"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Structure",
      "name": "Choux savoyards, cardés et déchiquetés",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "lacinato kale",
        "Fard suisse"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Starch",
      "name": "Petites pâtes (ditalines ou petites coquilles)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "spaghettis cassés",
        "80 g de riz arborio"
      ]
    },
    {
      "ingId": "ing_17",
      "role": "Dairy",
      "name": "Parmesan, finement râpé, à servir",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "soffritto_base",
      "instructions": "Chauffer l'huile dans une casserole de 6 à 7 litres à feu moyen-doux. Ajouter l'oignon, la carotte et le céleri avec une pincée de sel et cuire de 12 à 15 minutes, en remuant de temps en temps, jusqu'à très doux et légèrement doré. Ajouter l'ail, le romarin et les flocons de poivre pendant 1 minute, puis mélanger la pâte de tomate et cuire 2 minutes jusqu'à ce qu'elle s'assombrisse.",
      "visualCue": {
        "primaryTarget": "Légumes doux et doux enrobés de pâte de tomate teinte rouille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Légumes encore fermes; pâte de tomate rouge vif et cru.",
            "action": "Donnez-lui plus de temps à feu doux; ne précipitez pas le soffritto."
          },
          {
            "state": "Perfect",
            "description": "Légumes doux et dorés aux bords; coller la brique rouge et coller légèrement au pot.",
            "action": "Ajouter les tomates, le liquide et la croûte."
          },
          {
            "state": "Overdone",
            "description": "Noircissement de la pâte sur le plancher de la casserole; odeur amère.",
            "action": "Déglacer immédiatement avec une louche d'eau et de raclure."
          }
        ]
      },
      "feelCue": "La carotte doit écraser facilement contre la paroi du pot et la base doit sentir doux, pas tranchant."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "soffritto_base",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "vegetable_bean_soup",
      "instructions": "Ajouter les tomates, l'eau ou le bouillon, la croûte de parmesan et le sel restant; porter à ébullition. Ajouter la courge et les haricots et laisser mijoter à découvert 25 à 30 minutes, en remuant le fond de temps en temps, jusqu'à ce que la courge soit tendre et que certains cubes commencent à se décomposer dans le bouillon.",
      "visualCue": {
        "primaryTarget": "Un bouillon rouge-orange, légèrement épaissé avec des cubes de courges tendres et des haricots entiers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Squash ferme et brillant; bouillon mince et bouillonnant.",
            "action": "Laisser mijoter encore 5-10 minutes."
          },
          {
            "state": "Perfect",
            "description": "La courge donne à une cuillère avec quelques bords fondant dans le bouillon.",
            "action": "Ajouter le chou."
          },
          {
            "state": "Overdone",
            "description": "La courge s'est complètement désintégrée; la soupe est épaisse et ragoûtée.",
            "action": "Fin pour la saveur — ajouter de l'eau pour restaurer la consistance de la soupe."
          }
        ]
      },
      "feelCue": "Appuyez sur un cube de courge contre le côté de la casserole avec une cuillère — il devrait céder avec une légère pression."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer avec les verts",
      "inputs": [
        "vegetable_bean_soup",
        "ing_15"
      ],
      "outputState": "minestrone_with_cabbage",
      "instructions": "Incorporer le chou et laisser mijoter 10 minutes jusqu'à ce qu'il soit soyeux et tendre. Retirez la tige de romarin et la croûte de Parmesan (poussez les morceaux mous et retournez-les). Goûtez au sel. En cas de congélation, arrêtez ici: portion de ce que vous congelerez avant d'ajouter des pâtes.",
      "visualCue": {
        "primaryTarget": "Choux verts pâles entièrement flétris et tissés dans la soupe en morceaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Côtes de chou toujours croustillantes et lumineuses.",
            "action": "Laisser mijoter encore 3 à 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Cabotage doux et translucide aux bords, avec une douceur douce.",
            "action": "Portion pour le congélateur, puis ajouter les pâtes au reste."
          },
          {
            "state": "Overdone",
            "description": "Le chou est terne et gris avec une odeur sulfureuse.",
            "action": "Brillant avec une touche de citron et beaucoup de parmesan frais."
          }
        ]
      },
      "feelCue": "Le chou doit draper au-dessus de la cuillère, doux avec seulement une légère morsure dans la côte."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et servir",
      "inputs": [
        "minestrone_with_cabbage",
        "ing_16",
        "ing_17",
        "ing_01"
      ],
      "outputState": "finished_minestrone",
      "instructions": "Portez la soupe à la mijoter, ajoutez les pâtes et faites cuire 1-2 minutes de plus que le temps de l'emballage, en remuant souvent jusqu'à tendreté. Ajouter de l'eau si elle devient trop épaisse. Servir avec du parmesan râpé et un filet d'huile d'olive. Pour congeler : refroidir la soupe sans pâtes dans des contenants peu profonds, réfrigérer dans les 2 heures et congeler jusqu'à 3 mois ; réchauffer à la mijoter et faire cuire les pâtes fraîches.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse et bondée avec des pâtes en suspension parmi les légumes, assez de bouillon pour la cuillère librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pasta crayeuse au centre.",
            "action": "Laisser mijoter 2 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Pâtes tendres; soupe épaisse mais bouillonnante.",
            "action": "Servir immédiatement — les pâtes continuent de boire le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Pâtes gonflées et douces; la soupe s'est transformée en ragoût.",
            "action": "Ajouter l'eau chaude ou le stock pour se détendre et ré-saisonner."
          }
        ]
      },
      "feelCue": "Mâcher un morceau de pâtes — il devrait être tendre à travers avec juste une légère mâche, pas al dente, car il est assis dans un bouillon chaud."
    }
  ]
};
