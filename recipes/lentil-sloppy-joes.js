export default {
  "repoId": "master_american_lentilsloppyjoes_001",
  "parentRepoId": null,
  "slug": "lentil-sloppy-joes",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Lentil Sloppy Joes",
  "description": "Les lentilles brunes mijotées dans une sauce tomate épaisse, acidulée et sucrée avec des poivrons, de l'oignon et du paprika fumé, cuillerées généreusement sur des pains grillés au beurre. Messie, saucisse et profondément savore.",
  "cuisine": "Américain",
  "culture": "Mode diner américain",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "lentilles",
    "sandwich",
    "la nourriture confortable",
    "amis des enfants"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "55 min",
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
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "poivron vert, finement coupé en dés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "poivron rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Base",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poudre de Chili",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Lentilles brunes ou vertes, rincées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks de légumes",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Base",
      "name": "Sauce tomate (sauce plate, non assaisonnée)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates concassées"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "Moutarde jaune",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Moutarde de Dijon"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce végétarienne Worcestershire (sans anchois)"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Structure",
      "name": "Choux de Hambourg, coupés",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "brioches",
        "Tarte au Texas"
      ]
    },
    {
      "ingId": "ing_17",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_18",
      "role": "Garnish",
      "name": "Chips de cornichons d'aneth",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Jalapeños marinés"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_15"
      ],
      "outputState": "softened_vegetables",
      "instructions": "Chauffer l'huile dans une poêle large et profonde ou un four hollandais à feu moyen. Ajouter l'oignon et le poivron avec une pincée de sel et cuire 7 à 8 minutes, en remuant occasionnellement, jusqu'à ce que l'oignon soit doux et translucide. Ajouter l'ail et cuire 30 secondes.",
      "visualCue": {
        "primaryTarget": "Glossy, oignon effondré et poivre, commençant juste à colorier aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poivre est encore croquant et vert vif; blanc opaque à l'oignon.",
            "action": "Cuire encore 2 à 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont tendres et sucrés, l'oignon translucide.",
            "action": "Ajouter la pâte de tomate et les épices."
          },
          {
            "state": "Overdone",
            "description": "L'ail brunit et les morceaux collent dur.",
            "action": "Bougez tout droit et ajoutez la pâte de tomate pour refroidir la poêle."
          }
        ]
      },
      "feelCue": "Un morceau de poivre pressé avec une cuillère doit s'écraser à plat sans croquer."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "softened_vegetables",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "tomato_spice_base",
      "instructions": "Ajouter la pâte de tomate, le paprika fumé et la poudre de chili. Incorporer constamment pendant 2 minutes, étaler la pâte sur le plancher de la casserole afin qu'elle frise et s'assombrisse.",
      "visualCue": {
        "primaryTarget": "La pâte de tomates est passée d'un rouge vif à une couleur profonde de rouille de brique, enrobant les légumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rouge et parfumée.",
            "action": "Continuez à remuer une minute."
          },
          {
            "state": "Perfect",
            "description": "Couleur brique, collant, et sentant doux et fumé.",
            "action": "Ajouter les lentilles et le stock."
          },
          {
            "state": "Overdone",
            "description": "Des taches noires collées à la poêle avec une odeur brûlée.",
            "action": "Déglacer immédiatement avec le bouillon et racler; si très brûlé, la sauce aura besoin d'un peu plus de sucre."
          }
        ]
      },
      "feelCue": "La pâte devrait commencer à laisser un film de couleur rouille sur la casserole qui se lève lorsque vous le grattez."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "tomato_spice_base",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tender_lentils",
      "instructions": "Ajouter les lentilles et le stock, en grattant tout ce qui est collé à la poêle. Porter à ébullition, puis laisser mijoter doucement, partiellement couvert, pendant 25 minutes, en remuant de temps à autre, jusqu'à ce que les lentilles soient tendres et que la plupart du stock soit absorbé.",
      "visualCue": {
        "primaryTarget": "Des lentilles douces dans un bouillon épais et rouillé qui ne les couvre plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont fermes et le pot est soupeux.",
            "action": "Continuer à mijoter à découvert 5 minutes à la fois."
          },
          {
            "state": "Perfect",
            "description": "Les lentilles sont tendres, quelques-unes commencent à se fractionner; le liquide est surtout absorbé.",
            "action": "Ajouter les ingrédients de la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le pot est sec et les lentilles sont capturées sur le fond.",
            "action": "Ajouter 120 ml de bouillon ou d'eau et bien remuer."
          }
        ]
      },
      "feelCue": "Une lentille pressée sur le toit de votre bouche devrait squash sans centre crayeux."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "tender_lentils",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15"
      ],
      "outputState": "sloppy_joe_filling",
      "instructions": "Incorporer la sauce tomate, la cassonade, le vinaigre, la moutarde et la sauce soja. Laisser mijoter à découvert de 8 à 10 minutes, en remuant souvent, jusqu'à ce qu'il y ait suffisamment d'épaisseur pour marmonner sur une cuillère. Mash environ un quart des lentilles contre le côté de la poêle pour un corps plus charnu. Goûtez et ajustez le sel, le sucre et le vinaigre.",
      "visualCue": {
        "primaryTarget": "Un remplissage épais, brillant, rouge brique qui ternit et tient sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce s'écoule de la cuillère et des piscines sur une assiette.",
            "action": "Laisser mijoter encore quelques minutes en remuant."
          },
          {
            "state": "Perfect",
            "description": "Suspend un monticule mou; une cuillère traînée à travers la poêle laisse un sentier qui se ferme lentement.",
            "action": "Faites griller les pains."
          },
          {
            "state": "Overdone",
            "description": "Épaisseur et pâteux, commençant à coller et à cracher.",
            "action": "Losen avec un peu de stock."
          }
        ]
      },
      "feelCue": "Il devrait d'abord goûter sucré, puis tanné, puis salé — comme une bonne sauce barbecue avec le corps."
    },
    {
      "nodeId": "step_5",
      "action": "Assembler",
      "inputs": [
        "sloppy_joe_filling",
        "ing_16",
        "ing_17",
        "ing_18"
      ],
      "outputState": "finished_sloppy_joes",
      "instructions": "Beurrer les côtés coupés des pains et les couper dans une poêle sèche à feu moyen pendant 1-2 minutes jusqu'à ce qu'ils soient dorés. Pile une grosse boule de remplissage sur chaque pain en bas, haut avec des cornichons, et ferme. Servir avec beaucoup de serviettes.",
      "visualCue": {
        "primaryTarget": "Des petits pains dorés et croustillants débordent d'un remplissage savoureux et rouge foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les petits pains sont déjà trempés.",
            "action": "Faire griller les petits pains — le visage croustillant est une barrière d'humidité."
          },
          {
            "state": "Perfect",
            "description": "Les buns sont dorés et croustillants sur le côté coupé, se remplissant légèrement aux bords.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les lapins sont brun foncé brûlé.",
            "action": "Abaissez la chaleur pour le prochain lot."
          }
        ]
      },
      "feelCue": "Le visage de pain grillé doit croquer légèrement sous le remplissage doux, ne pas tourner le soggy à la première bouchée."
    }
  ]
};
