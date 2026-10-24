export default {
  "repoId": "master_chineseamerican_blackpepperbeefsnappea_001",
  "parentRepoId": null,
  "slug": "black-pepper-beef-snap-pea-stir-fry",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Boeuf de poivre noir et sciure de pois snap",
  "description": "De fines tranches de steak flanqué dans un poêlon chaud au fumage et jetées avec des pois secs croustillants et de l'oignon dans une glaçure salée à la soie d'huître chargée de poivre noir grossièrement craqué qui s'attache plus qu'il ne brûle.",
  "cuisine": "Chinois-Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "nuit",
    "boeuf",
    "sauté",
    "wok",
    "le poivre noir",
    "Pois cassés",
    "Vite"
  ],
  "difficulty": 2,
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
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Steak plat, tranché 5 mm d'épaisseur contre le grain",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "steak longe",
        "steak de jupe"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (pour la marinade)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vins mousseux",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Farine de maïs (pour la marinade)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Glutamate",
      "name": "sauce à l'huître",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce végétarienne à l'huître aux champignons"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce soja (pour la sauce)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Maïs de poivre noir, grossièrement craqué",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Farine de maïs (pour la sauce)",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre avec un point de fumée élevé",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'arachide"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Base",
      "name": "Pois secs de sucre, cordes enlevées",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "pois de neige",
        "haricots verts, coupés en deux et blanchis"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Allium",
      "name": "Oignon jaune, coupé en quartiers de 2 cm et séparé",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "marinated_beef",
      "instructions": "Mélanger le boeuf tranché avec la sauce soja, le vin Shaoxing et la fécule de maïs jusqu'à ce que chaque tranche soit enrobée et que le liquide ait été absorbé. Laisser reposer 15 minutes à température ambiante pendant que vous préparez tout le reste. (La congélation partielle du steak pendant 20 minutes à l'avance facilite grandement la coupe.)",
      "visualCue": {
        "primaryTarget": "tranches de boeuf avec un revêtement mince, soyeux, uniforme et pas de mise en commun liquide dans le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches sèches de fécule de maïs ou une flaque de marinade lâche au fond.",
            "action": "Massage des doigts pendant 30 secondes jusqu'à absorption."
          },
          {
            "state": "Perfect",
            "description": "Chaque tranche brillante et légèrement collante, bol presque sec.",
            "action": "Mélanger la sauce pendant qu'elle est debout."
          },
          {
            "state": "Overdone",
            "description": "Assis plus de quelques heures; la surface devient pâteuse.",
            "action": "Procéder — faire cuire en petits lots afin qu'il brunisse encore."
          }
        ]
      },
      "feelCue": "Les tranches doivent se sentir veloutées et glisser l'une contre l'autre, comme de la soie humide."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "pepper_sauce",
      "instructions": "Dans un petit bol, mélanger la sauce huître, la sauce soja, le sucre, le poivre noir cassé, la fécule de maïs et l'eau jusqu'à ce que la fécule de maïs se dissout. Gardez-y une cuillère — elle s'installe et a besoin d'un brassage final avant d'utiliser.",
      "visualCue": {
        "primaryTarget": "Une sauce marron lisse et nuageuse tachetée de poivre noir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cornstarch assis comme une boue blanche au fond.",
            "action": "Mélanger jusqu'à suspension complète."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, liquide brun opaque avec poivre flottant partout.",
            "action": "Mets-toi à côté du poêle."
          },
          {
            "state": "Overdone",
            "description": "Pepper broyé à la poussière au lieu de fissuré, tournant la sauce grise.",
            "action": "Toujours bon à utiliser — la saveur sera plus chaude et moins aromatique."
          }
        ]
      },
      "feelCue": "Senser le bol : le poivre devrait vous frapper comme fruité et piné, pas poussiéreux."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "marinated_beef",
        "ing_11"
      ],
      "outputState": "seared_beef",
      "instructions": "Chauffer un wok ou une poêle de 30 cm à feu vif jusqu'à ce qu'une goutte d'eau vaporise instantanément. Ajouter 1 c. à soupe d'huile, tourner et ajouter la moitié du boeuf en une seule couche. Sear n'a pas changé 60 secondes jusqu'à ce qu'il brunisse en dessous, puis jete 30 secondes de plus jusqu'à peine rose. Transférer dans une assiette. Répéter avec 1 c. à soupe d'huile et le reste du boeuf.",
      "visualCue": {
        "primaryTarget": "Tranches brunies aux bords, encore légèrement roses dans les taches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gris et humide avec mise en commun liquide dans la casserole.",
            "action": "La poêle était surchargée; faire cuire en petits lots et attendre qu'elle se réchauffe entre eux."
          },
          {
            "state": "Perfect",
            "description": "Marronné d'un côté, légèrement rose dans les taches, scintillement.",
            "action": "Retirer — ils finissent dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "Courbé, brun gris tout au long et mâche.",
            "action": "Couper plus petit si nécessaire et garder le lancer final bref."
          }
        ]
      },
      "feelCue": "Le boeuf doit frapper la poêle avec un fort craquement et une cuillerée de fumée; le silence signifie que la poêle est trop froide."
    },
    {
      "nodeId": "step_4",
      "action": "Poêle",
      "inputs": [
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15"
      ],
      "outputState": "stir_fried_vegetables",
      "instructions": "Ajouter le reste de 1 c. à soupe d'huile dans la poêle chaude. Ajouter l'oignon et casser les petits pois et remuer 2 minutes jusqu'à ce que les petits pois soient vert vif et cloqués dans des taches. Ajouter l'ail et le gingembre et mélanger 30 secondes jusqu'à parfumer.",
      "visualCue": {
        "primaryTarget": "Vert vif, pois cassés cloqués et pétales d'oignon aux bords carbonisés, toujours croustillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pois ternes et croustillants, oignon encore blanc et raide.",
            "action": "Encore 30 à 60 secondes à feu vif."
          },
          {
            "state": "Perfect",
            "description": "Pois brillants et brillants avec des taches brunes, bords d'oignon translucides; ail parfumé mais pâle.",
            "action": "Ajouter immédiatement le bœuf et la sauce."
          },
          {
            "state": "Overdone",
            "description": "Pois olive-drabe et limon; brunissement à l'ail.",
            "action": "Passez directement à la sauce pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Mange un petit pois: il devrait claquer fort et goûter doux, avec juste un murmure d'omble."
    },
    {
      "nodeId": "step_5",
      "action": "Toss et glaçures",
      "inputs": [
        "stir_fried_vegetables",
        "seared_beef",
        "pepper_sauce"
      ],
      "outputState": "finished_black_pepper_beef",
      "instructions": "Retournez le boeuf et ses jus dans la poêle. Incorporez la sauce et versez-la, jetant constamment pendant 30 à 60 secondes jusqu'à ce qu'elle s'épaississe et devienne brillante, enrobant tout. Servir immédiatement sur du riz cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Boeuf et légumes laqués dans une sauce foncée brillante qui s'accroche sans mise en commun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce encore mince, nuageuse et aqueuse au fond de la poêle.",
            "action": "Continuez à jeter à feu vif jusqu'à ce qu'il ébullition — la fécule de maïs doit bouillir pour épaissir et limpide."
          },
          {
            "state": "Perfect",
            "description": "Sauce claire, brillante et collante, poivre visible sur chaque morceau.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Sauce réduite à une pâte collante et attraper sur la poêle.",
            "action": "Ajouter 1–2 c. à soupe d'eau et mélanger pour se détendre."
          }
        ]
      },
      "feelCue": "Inclinez la poêle : la sauce doit glisser lentement comme une glaçure, et une bouchée doit laisser un piment chaud sur vos lèvres."
    }
  ]
};
