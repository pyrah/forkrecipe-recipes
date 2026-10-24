export default {
  "repoId": "master_panasian_gingerchickenricesoup_001",
  "parentRepoId": null,
  "slug": "ginger-chicken-rice-soup",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de poulet et de riz au gingembre",
  "description": "Un bouillon d'or clair, empreint d'un poing de gingembre tranché, d'échalon et d'ail, rempli de poulet tendre, de riz tendre et de chou de napa — doux, réchauffant et pointu avec de la sauce de poisson et du poivre blanc.",
  "cuisine": "Panasiatique",
  "culture": "Cuisine à la maison en Asie de l'Est et du Sud-Est",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "Soupe",
    "congélateur",
    "poulet",
    "gingembre",
    "riz",
    "confort",
    "gros lot"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "1 hr 10 min",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisses de poulet, désossées et sans peau",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet désossée (pull à 165°F/74°C)",
        "jambes entières"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 2500,
      "defaultUnit": "ml",
      "substitutions": [
        "à moitié d'eau, à moitié de poulet à faible teneur en sodium"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, non pelé, tranché finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalons, blancs et verts séparés, verts tranchés finement",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail, cassé",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Riz jasmin, rincé",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "tout riz blanc à grains longs"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Base",
      "name": "Carottes, tranchées finement sur le biais",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Base",
      "name": "Choux de napa, coupés en rubans de 2 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "baby bok choy, en quartiers",
        "épinards (ajouter la chaleur)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja légère"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poivre blanc moulu",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Huile de sésame grillée, coriandre et chili croustillant",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": [
        "Échalotes frites",
        "coins de chaux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pochette",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "poached_chicken_and_ginger_broth",
      "instructions": "Mettre le poulet, l'eau froide, le gingembre, les blancs d'oignon, l'ail et le sel dans une casserole de 6 litres. Faire mijoter lentement à feu moyen, en écrémant la mousse grise à mesure qu'elle monte. Réduire en mijotant à nu (boulons paresseux occasionnels) et cuire de 25 à 30 minutes, jusqu'à ce que les cuisses lisent au moins 165°F (74°C) et que la viande soit tendre. Élevez le poulet pour le refroidir; étirez le gingembre, le pétoncle et l'ail, ou laissez le gingembre pour plus de punch.",
      "visualCue": {
        "primaryTarget": "Un bouillon clair et doré avec de petites perles de graisse à la surface et un poulet opaque à l'os.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth encore aqueux et incolore; viande rose à l'os.",
            "action": "Conservez encore 5 à 10 minutes et revérifiez la température."
          },
          {
            "state": "Perfect",
            "description": "Broth doré et parfumé au gingembre; le poulet tire proprement de l'os.",
            "action": "Retirer le poulet et commencer le riz."
          },
          {
            "state": "Overdone",
            "description": "Broth nuageux et gras à partir d'une bouillie dure.",
            "action": "Le goût est toujours bon. Abaissez la chaleur et éjaculez la graisse; il ne sera pas clair, mais il aura bon goût."
          }
        ]
      },
      "feelCue": "Inspirez sur la casserole — le gingembre devrait fourmiller dans votre nez, doux et poivré, pas boueux."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "poached_chicken_and_ginger_broth",
        "ing_07",
        "ing_08"
      ],
      "outputState": "rice_in_broth",
      "instructions": "Ramener le bouillon à mijoter, ajouter le riz et les carottes et cuire de 15 à 18 minutes, en remuant occasionnellement, jusqu'à ce que le riz soit tendre et commence juste à fleurir. Pendant ce temps, tirez le poulet en morceaux, jetant les os et le cartilage.",
      "visualCue": {
        "primaryTarget": "Graines de riz gonflées et douces, légèrement obscurcies; carottes tendres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a un centre blanc ferme; le bouillon est encore clair.",
            "action": "Faites mijoter encore quelques minutes."
          },
          {
            "state": "Perfect",
            "description": "Les grains s'épaississent, mous, et quelques-uns se divisent aux extrémités; le bouillon est légèrement épaissi.",
            "action": "Ajouter le chou et le poulet."
          },
          {
            "state": "Overdone",
            "description": "Le riz a soufflé dans le porridge et absorbé la majeure partie du liquide.",
            "action": "Ajouter de l'eau chaude pour restaurer la consistance d'une soupe ; il goûtera tout aussi bon, juste plus porridge-comme."
          }
        ]
      },
      "feelCue": "Pincez un grain — il devrait s'écraser facilement entre vos doigts sans point dur au milieu."
    },
    {
      "nodeId": "step_3",
      "action": "Saison et fin",
      "inputs": [
        "rice_in_broth",
        "poached_chicken_and_ginger_broth",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_04",
        "ing_12"
      ],
      "outputState": "finished_ginger_chicken_soup",
      "instructions": "Ajouter le chou et le poulet déchiqueté et laisser mijoter 3-4 minutes jusqu'à ce que le chou soit tendre. Assaisonner avec de la sauce de poisson et du poivre blanc, ajouter plus de sel si nécessaire. Servir avec des verts de pétoncle, quelques gouttes d'huile de sésame, de coriandre et de chili croustillant. Pour congeler : le riz garde le bouillon à boire, donc pour de meilleurs résultats congeler une portion avant d'ajouter le riz, ou mince avec de l'eau sur le réchauffage. Laisser refroidir dans des récipients peu profonds, réfrigérer dans les 2 heures, congeler jusqu'à 3 mois et réchauffer à 165°F (74°C).",
      "visualCue": {
        "primaryTarget": "Bouillon d'or pâle dense avec des lambeaux de poulet, chou translucide et pièces de carotte orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Côtes de chou encore croquantes et blanches; le bouillon a un goût plat.",
            "action": "Laisser mijoter encore 1 à 2 minutes et ajouter la sauce de poisson par la cuillère à café."
          },
          {
            "state": "Perfect",
            "description": "Chabage feuilles soyeuses et côtes simplement tendres; bouillon salé avec un fini poivre chaud.",
            "action": "Garnir et servir."
          },
          {
            "state": "Overdone",
            "description": "Limbe et gris; poulet déchiqueté aux fils.",
            "action": "Ajouter des oignons frais et des herbes pour ramener la luminosité."
          }
        ]
      },
      "feelCue": "La première gorgée devrait se réchauffer dans la poitrine à partir du gingembre et du poivre blanc, pas épicé sur les lèvres."
    }
  ]
};
