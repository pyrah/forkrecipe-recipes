export default {
  "repoId": "master_mexican_blackbeantostadas_001",
  "parentRepoId": null,
  "slug": "black-bean-tostadas-avocado-slaw",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Haricots noirs Tostadas avec Slaw avocat",
  "description": "Tortilles de maïs concassées au four qui craquent sous un épais frottis de haricots noirs parfumés de cumin, surmontées d'une griffe fraîche et crémeuse d'avocat et de miettes salées de cotija. Crunch, crème et tang dans chaque bouchée.",
  "cuisine": "Mexicain",
  "culture": "Cuisine maison mexicaine-américaine",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "Haricots noirs",
    "des tostades",
    "avocat",
    "nuit"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tortilles de maïs, 15 cm",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": [
        "les coquilles de tostada achetées au magasin"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre, divisée",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
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
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre de Chili",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "poudre de chile ancho"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Fèves noires, cuites et égouttées (environ 2 boîtes)",
      "ratioValue": 480,
      "defaultUnit": "g",
      "substitutions": [
        "haricots pinto"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stocks de légumes",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "haricot liquide de cuisson",
        "eau"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Choux verts, très finement broyés",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "chou rouge",
        "mélange de griffes emballées"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Avocats ripés, coupés en deux",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Limes, jus",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Heat",
      "name": "Jalapeño, ensemencée et hachée",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "serrano pour plus de chaleur"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Cilantro haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Dairy",
      "name": "Fromage Cotija, émietté",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Féta",
        "omit pour végétalien"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire au four",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_15"
      ],
      "outputState": "tostada_shells",
      "instructions": "Chauffer le four à 400°F (200°C). Badigeonner légèrement les deux côtés de chaque tortilla avec environ 15 ml de l'huile totale, saupoudrer de sel et poser à plat sur deux casseroles sans chevauchement. Cuire 5 minutes, retourner et cuire encore 4 à 6 minutes jusqu'à ce qu'il soit rigide et doré. Ils croquant plus loin comme ils refroidissent sur un rack.",
      "visualCue": {
        "primaryTarget": "Des disques plats, uniformément dorés avec de petites blisters grillées et aucun centre doux pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les centres sont encore pâles et flexibles; les bords sont légèrement colorés.",
            "action": "Retourner au four en tranches de 1 minute."
          },
          {
            "state": "Perfect",
            "description": "Un brun doré uniforme, raide, et sentant le maïs grillé.",
            "action": "Refroidir sur une grille pour échapper à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et l'odeur devient acride.",
            "action": "Détacher les bords les plus sombres; cuire la casserole suivante 2 minutes plus courte."
          }
        ]
      },
      "feelCue": "Une coque refroidie devrait se casser proprement avec une fissure aiguë, comme un craquelin, plutôt que de se plier."
    },
    {
      "nodeId": "step_2",
      "action": "Mâchoires et frites",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_15"
      ],
      "outputState": "refried_black_beans",
      "instructions": "Chauffer le reste d'huile de 30 ml dans une poêle à feu moyen. Cuire l'oignon 5-6 minutes jusqu'à ce qu'il soit doux et translucide, ajouter l'ail, le cumin et la poudre de chili et remuer 30 secondes jusqu'à parfumer. Ajouter les haricots et le bouillon, laisser mijoter 3 minutes, puis laisser mijoter avec une purée de pommes de terre ou une fourchette dans une pâte à tartiner généralement lisse. Cuire encore 2 à 3 minutes, en remuant, jusqu'à ce qu'il tienne sa forme. Assaisonner de sel.",
      "visualCue": {
        "primaryTarget": "Une pâte de haricots épaisse, foncée et brillante avec quelques haricots entiers laissés pour texture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pousse et soupe; elle coule quand la cuillère est traînée.",
            "action": "Continuez à cuire et à remuer à feu moyen pour libérer le liquide."
          },
          {
            "state": "Perfect",
            "description": "Suspend un sentier propre de la cuillère pendant quelques secondes et les monticules doucement.",
            "action": "Enlevez la chaleur et gardez au chaud."
          },
          {
            "state": "Overdone",
            "description": "Stiffer, sécher et craqueler; coller au fond de la poêle.",
            "action": "Incorporer en stock une cuillère à soupe à la fois jusqu'à étalement."
          }
        ]
      },
      "feelCue": "Il devrait se propager comme du beurre d'arachide doux — facile à pousser à travers une coquille sans la déchirer."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_15"
      ],
      "outputState": "avocado_slaw",
      "instructions": "Faites glisser un avocat dans un grand bol et écrasez-le avec le jus des deux citrons et une bonne pincée de sel jusqu'à ce qu'il soit crémeux. Découpez le deuxième avocat. Ajouter le chou, le jalapeño et la coriandre dans la vinaigrette en purée et mélanger jusqu'à ce qu'elle soit uniformément enrobée, puis plier doucement dans l'avocat en dés. Reposez-vous 5 minutes pour que le chou s'adoucisse légèrement.",
      "visualCue": {
        "primaryTarget": "Une griffe vert pâle, légèrement crémeuse avec des cubes d'avocat visibles et des taches vertes d'herbe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de chou secs avec de la vinaigrette en un seul endroit.",
            "action": "Jeter plus longtemps avec les mains propres pour travailler le pansement à travers."
          },
          {
            "state": "Perfect",
            "description": "Chaque déchiquetage légèrement enduit; brillant, tarte et salé lors de la dégustation.",
            "action": "Assemblez-vous dans les 20 minutes pour la meilleure croquante."
          },
          {
            "state": "Overdone",
            "description": "L'avocat coupé s'est écrasé dans une pâte; la griffe semble humide et drab.",
            "action": "Ajouter une poignée de chou frais et une autre pression de citron vert pour la relancer."
          }
        ]
      },
      "feelCue": "Le chou devrait encore croquer fort entre vos dents, avec le pansement juste lécher à la surface."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "tostada_shells",
        "refried_black_beans",
        "avocado_slaw",
        "ing_14"
      ],
      "outputState": "finished_tostadas",
      "instructions": "Étaler environ 3 cuillères à soupe de haricots chauds sur chaque coquille, laissant une bordure mince. Pile sur la griffe de l'avocat, disperser avec le cotija, et servir à la fois avec des coins de citron vert supplémentaires. Assemblez-vous à la table pour que les coquilles restent croquantes.",
      "visualCue": {
        "primaryTarget": "Coquilles dorées avec une couche de haricots noirs, un tas de griffes vertes et des miettes de fromage blanc sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couche mince et patchy de haricots; la griffe glisse sur la coquille.",
            "action": "Ajouter plus de haricots — ils agissent comme la colle."
          },
          {
            "state": "Perfect",
            "description": "Les haricots recouvrent le bord de la coquille jusqu'au bord, la griffe se trouve dans un monticule stable.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles se sont adoucies sous la griffe humide et le sag lorsqu'elles sont levées.",
            "action": "Assembler à l'ordre; égoutter le jus de griffe en excès avant le remplissage."
          }
        ]
      },
      "feelCue": "Ramassé par la jante, le tostada devrait rester à plat et rigide dans votre main."
    }
  ]
};
