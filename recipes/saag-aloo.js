export default {
  "repoId": "master_indian_saagaloo_001",
  "parentRepoId": null,
  "slug": "saag-aloo",
  "author": "ForkRecipe Kitchen",
  "title": "Saag Aloo",
  "description": "Les pommes de terre croustillantes grondissent dans une sauce aux épinards aux épices vives; les graines de moutarde sautent, le cumin suit, et les pommes de terre boivent chaque goutte de vert.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "vegetables",
  "tags": [
    "indienne",
    "punjabi",
    "épinards",
    "pommes de terre",
    "végétalien",
    "épicé",
    "curry"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 2,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre de cire (Desiree ou Charlotte), coupées en cubes de 3 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Yukon Pommes de terre d'or"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Epinards frais pour bébés",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "épinards congelés, dégelés et pressés (200 g)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de moutarde noire ou jaune",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Chili vert, finement tranché",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "1⁄2 cuillerées à soupe de chili"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Ghee (ou huile neutre)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "parboiled_potatoes",
      "instructions": "Placez les pommes de terre en cubes dans une casserole d'eau salée froide. Porter à ébullition et cuire de 8 à 10 minutes jusqu'à ce qu'il soit tendre — une brochette rencontre une légère résistance au centre. Égoutter et laisser la vapeur s'échapper pendant 2 minutes afin que la surface sèche légèrement.",
      "visualCue": {
        "primaryTarget": "Les cubes sont d'or pâle, les bords commencent à peine à paraître moelleux, et une brochette glisse avec la résistance la plus faible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les centres sont denses et féculents; une brochette s'arrête fort au milieu.",
            "action": "Retourner à l'eau mijotante pendant 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les cubes donnent à une brochette avec une pression douce mais tiennent leur forme. Les bords commencent à sembler légèrement rugueux.",
            "action": "Égoutter et se reposer — ils finiront dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "Les cubes s'effritent et sont arrosés. Les coins ont disparu.",
            "action": "Égoutter très soigneusement; manipuler doucement. Ils se briseront dans la sauce, mais la saveur sera encore bonne."
          }
        ]
      },
      "feelCue": "Un cube doit se sentir comme un raisin ferme lorsqu'il est pressé — donnant sur l'extérieur mais avec une fermeté détectable au cœur."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_11",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_10",
        "ing_08"
      ],
      "outputState": "spiced_masala_base",
      "instructions": "Chauffer le ghee dans une grande poêle lourde à feu vif jusqu'à ce qu'il mijote et qu'une graine de moutarde tombe en sauts et en éclats. Ajouter les graines de moutarde — couvrir immédiatement et laisser sauter pendant 30 secondes. Réduire le feu à moyen, ajouter les graines de cumin et laisser étourdir pendant 15 secondes. Ajouter l'oignon et cuire en remuant, jusqu'à ce qu'il soit d'or profond et commencer à croquer aux bords, 10-12 minutes. Ajouter le gingembre, l'ail, le chili vert et le curcuma; cuire 2 minutes jusqu'à ce que l'odeur brute disparaisse.",
      "visualCue": {
        "primaryTarget": "L'oignon est profondément doré aux bords bruns. La pâte de masala est parfumée, collée légèrement à la poêle, et l'huile commence à se séparer aux bords — c'est le moment clé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est pâle et translucide; les épices sentent cru et vif. Pas de séparation d'huile.",
            "action": "Faire cuire plus longtemps à feu moyen — en précipitant cette étape produit un curry plat."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est jammy et or foncé. L'huile brille dans un anneau au bord de la poêle. La cuisine sent le cumin fleuri et l'oignon sucré caramélisé.",
            "action": "Ajouter immédiatement les épinards."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est brun foncé ou noir dans les taches. Les épices sentent amer.",
            "action": "Ajoutez un jet d'eau et grattez les morceaux sombres. Continuez — un peu d'affection ajoute de la profondeur."
          }
        ]
      },
      "feelCue": "Le masala devrait se sentir presque collant lorsqu'il est agité — il s'accroche à la cuillère et tire légèrement pendant que vous le soulevez, vous disant que l'eau a cuit et que les saveurs se sont concentrées."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_masala_base",
        "ing_02",
        "parboiled_potatoes",
        "ing_09",
        "ing_12"
      ],
      "outputState": "finished_saag_aloo",
      "instructions": "Ajouter les épinards dans de grandes poignées dans la poêle, en remuant entre chaque ajout jusqu'à ce que chaque lot se flétrisse avant d'ajouter le prochain. Une fois que tous les épinards sont flétris (environ 3 minutes), transférer la moitié dans un mélangeur ou utiliser un mélangeur à main pour le blitter dans une purée lisse et verte vive – laisser l'autre moitié entière pour la texture. Retournez la purée dans la casserole. Ajouter les pommes de terre, le garam masala et le sel. Incorporer délicatement, puis laisser mijoter à feu doux pendant 5 minutes afin que les pommes de terre absorbent la sauce. Goûtez et ajustez le sel.",
      "visualCue": {
        "primaryTarget": "Une sauce émeraude vive enveloppe chaque cube de pomme de terre. Le plat n'est ni aqueux ni sec; la sauce est assez épaisse pour être légèrement butée à la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre sont encore séparées de la sauce, qui est mince et vert pâle. Les saveurs ont un goût cru.",
            "action": "Laisser mijoter encore 5 minutes, en remuant doucement, pour laisser les pommes de terre absorber la sauce."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre sont vitrées avec une sauce vert foncé. Des feuilles entières d'épinards sont visibles dans une mer de purée lisse. La couleur est vive, pas kaki.",
            "action": "Servir immédiatement avec du roti ou du riz."
          },
          {
            "state": "Overdone",
            "description": "La sauce est passée du vert vif au brun olive. Les pommes de terre sont musquées et indistinctes.",
            "action": "La saveur est encore bonne. Servir avec une pression de citron et une bruine de ghee frais pour l'éclaircir."
          }
        ]
      },
      "feelCue": "La sauce doit enrober le dos d'une cuillère sans goutter immédiatement — elle s'arrête, puis glisse. Les pommes de terre doivent se sentir fermes à travers la cuillère mais donner doucement quand vous appuyez."
    }
  ]
};
