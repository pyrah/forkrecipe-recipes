export default {
  "repoId": "master_american_banana_oat_snack_cake_001",
  "parentRepoId": null,
  "slug": "banana-oat-snack-cake",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Cake à la banane d'avoine Snack",
  "description": "Un gâteau carré humide, légèrement épicé, fait avec des bananes mûres et de l'avoine roulée, avec une miette copieuse et croustillante, un plateau de noix grillée et une douceur caramel-banane profonde qui convient au petit déjeuner ainsi qu'au dessert.",
  "cuisine": "Américain",
  "culture": "Cuisson maison américaine",
  "category": "desserts",
  "tags": [
    "gâteau",
    "Pâte à goûter",
    "banane",
    "avoine",
    "une vache",
    "Petit déjeuner",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "weight",
  "servings": 16,
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
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Bananes, très mûres (graves mouchetées), purées",
      "ratioValue": 350,
      "defaultUnit": "g",
      "substitutions": [
        "bananes congelées, dégelées avec leur liquide"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun clair, emballé",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 85,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre, 80 ml"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Yogourt ordinaire, lait entier",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "crème aigre",
        "lait de beurre, 100 ml"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de pâte de blé entier"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Avoine laminée (à l'ancienne)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "avoine rapide"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Noix communes, hachées approximativement (facultatif)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "noix de noix de pécan",
        "croustilles de chocolat"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "fouetter les ingrédients humides",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "banana_wet_mix",
      "instructions": "Chauffer le four à 350°F (175°C). Graisser une poêle carrée de 8 × 8 po (20 × 20 cm) et la ligner d'un parchemin. Dans un grand bol, écraser les bananes avec une fourchette jusqu'à ce qu'elles soient généralement lisses. fouetter la cassonade, les œufs, le beurre fondu, le yogourt et la vanille jusqu'à ce qu'ils soient uniformément combinés.",
      "visualCue": {
        "primaryTarget": "Un mélange mou, tacheté, de couleur caramel avec seulement de petites boulettes de banane.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grands morceaux de banane et des stries de yaourt restent.",
            "action": "Mash et fouetter un peu plus."
          },
          {
            "state": "Perfect",
            "description": "Même un mélange brillant et lâche avec des bouts de banane de taille pois et une forte odeur de banane mûre.",
            "action": "Ajouter les ingrédients secs."
          },
          {
            "state": "Overdone",
            "description": "Le beurre chaud a commencé à cuire les œufs en brins.",
            "action": "fouetter dur pour les briser; refroidir le beurre plus longtemps la prochaine fois."
          }
        ]
      },
      "feelCue": "Les bananes devraient se masturber sans pression — si vous devez pousser fort, elles n'étaient pas assez mûres et le gâteau sera moins sucré."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "banana_wet_mix",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "snack_cake_batter",
      "instructions": "Ajouter la farine, l'avoine, le bicarbonate de soude, le sel et la cannelle directement dans le bol (saupoudrer le bicarbonate de soude de façon uniforme afin qu'il ne s'agrippe pas) et plier avec une spatule jusqu'à ce qu'il ne reste pas de farine sèche. Reposez la pâte 5 minutes pour que l'avoine commence à ramollir, puis gratter dans la poêle, lisser le dessus et disperser avec les noix.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse à l'avoine sans farine sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche le long du fond du bol.",
            "action": "Plier quelques coups de plus du bas."
          },
          {
            "state": "Perfect",
            "description": "Épais, cuilleré, et uniformément flanqué d'avoine; il fond doucement dans la poêle.",
            "action": "Garnir de noix et cuire."
          },
          {
            "state": "Overdone",
            "description": "Battre jusqu'à colle et élastique.",
            "action": "Faire cuire; la miette sera plus dense. Plier plus doucement la prochaine fois."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir lourde et douce sur la spatule, comme un porridge épais qui s'installe lentement à plat."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "snack_cake_batter",
        "ing_12"
      ],
      "outputState": "baked_snack_cake",
      "instructions": "Cuire sur la grille du milieu 30–38 minutes, jusqu'à ce que le dessus soit doré et dôme, les bords tirent de la poêle, et un cure-dent inséré au centre sort propre ou avec quelques miettes humides. Laisser refroidir dans la poêle sur un support au moins 20 minutes, puis lever avec le parchemin et couper en 9 ou 16 carrés.",
      "visualCue": {
        "primaryTarget": "Un haut uniformément brun doré, légèrement bombé, avec des noix grillées et des bords rétrécissant de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre semble mouillé et coule lorsqu'il est pressé; le cure-dent montre une pâte crue.",
            "action": "Cuire encore 5 minutes et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Golden-brun et springy, noix grillées, cure-dent propre ou avec miettes humides.",
            "action": "Laisser refroidir 20 minutes avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Des bords brun foncé et un centre sec et émietté; les noix sont foncées et amères.",
            "action": "Servir avec du yaourt ou un frottis de beurre pour ajouter l'humidité."
          }
        ]
      },
      "feelCue": "Le centre devrait revenir sous un bout de doigt et se sentir doux et printanier, pas squishy."
    }
  ]
};
