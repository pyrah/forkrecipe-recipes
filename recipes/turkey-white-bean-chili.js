export default {
  "repoId": "master_southwestern_turkeywhitebeanchili_001",
  "parentRepoId": null,
  "slug": "turkey-white-bean-chili",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Turquie & haricots blancs vert Chili",
  "description": "Un chili pâle et crémeux de dinde hachée brune et de haricots blancs tendres, garni de chiles verts rôtis, de cumin et de citron vert fraîche — chaleur moelleuse, grand confort, pas de tomate en vue.",
  "cuisine": "Américain",
  "culture": "Cuisine à la maison sud-ouest",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "Soupe",
    "Chili",
    "congélateur",
    "dinde",
    "haricots",
    "vert-chile",
    "gros lot"
  ],
  "difficulty": 1,
  "activeTime": "30 min",
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
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Dindon haché (93 % maigre)",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": [
        "poulet haché",
        "dindon cuit déchiqueté (ajouter à l'étape 3)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune en dés",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Base",
      "name": "Poivrons ensemencés et dés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "Poivrons Anaheim",
        "poivron vert"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Jalapeño haché (semences pour plus de chaleur)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Chiles verts grillés, hachés (en conserve ou frais)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Chiles de Hatch grillés"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Starch",
      "name": "Grandes haricots du Nord, cuits (ou en conserve, rincés et drainés)",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": [
        "haricots cannellini"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Liquid",
      "name": "Stock de poulet, faible teneur en sodium",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": [
        "dindon"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Binder",
      "name": "Masa harina, fouettée avec 120 ml d'eau",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à soupe de farine de maïs fine"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Citrus",
      "name": "Jus de lime, frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Garnish",
      "name": "Cilantro, oignons verts tranchés et crème sure",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": [
        "Déchiré Monterey Jack",
        "avocat en dés"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marron",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "browned_turkey",
      "instructions": "Chauffer l'huile dans un four hollandais de 5 à 6 litres à feu moyen-vif. Ajouter la dinde dans une couche plate, assaisonner avec la moitié du sel, et laisser seule 4-5 minutes jusqu'à ce que le dessous brunisse. Briser en petits miettes et cuire encore 3-4 minutes jusqu'à ce qu'il ne reste pas de rose. Transférer dans un bol, laissant la graisse derrière.",
      "visualCue": {
        "primaryTarget": "Crumble avec des bords dorés-bruns et sans rose, et des morceaux brunis sur le plancher de pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La dinde est grise et humide, mijotant dans son propre liquide; il reste des taches roses.",
            "action": "Levez le feu et laissez le liquide cuire avant de remuant à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Toujours opaque avec beaucoup de bords brunis et croustillants; pan étourdissant, pas bouillonnant.",
            "action": "Retirer et démarrer les légumes."
          },
          {
            "state": "Overdone",
            "description": "Crumbles sont secs, granulés durs.",
            "action": "Ils s'adouciront pendant la mijoteuse — ne pas ajouter plus d'huile, il suffit de passer à autre chose."
          }
        ]
      },
      "feelCue": "La dinde maigre colle avant qu'elle ne brunisse; une fois qu'une croûte se forme, elle laisse aller le pot avec une douce raclure."
    },
    {
      "nodeId": "step_2",
      "action": "Sueurs aromatiques",
      "inputs": [
        "browned_turkey",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "green_chili_base",
      "instructions": "Réduire le feu à moyen. Ajouter l'oignon, le poblanos et le jalapeño avec le reste du sel et cuire 8 minutes, en grattant les morceaux brunis, jusqu'à tendre. Ajouter l'ail, le cumin, la coriandre et l'origan et remuer 1 minute jusqu'à parfumer.",
      "visualCue": {
        "primaryTarget": "Poivrons doux, vert olive et oignons translucides légèrement enrobés d'épices grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poivrons sont encore croquants et vert vif.",
            "action": "Cuire encore 2-3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Légumes doux et brillant; le cumin sent chaud et noisette.",
            "action": "Ajouter les chiles, les haricots, la dinde et le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Les épices s'assombrissent et sentent dur.",
            "action": "Ajouter immédiatement du stock pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Le poblano doit se plier doucement sur le bord de la cuillère plutôt que de rester raide."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "green_chili_base",
        "browned_turkey",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "simmered_chili",
      "instructions": "Ajouter les chiles verts, les haricots, le bouillon et la dinde avec ses jus. Porter à ébullition, puis laisser mijoter à découvert de 25 à 30 minutes, en remuant occasionnellement. Mash environ un quart des haricots contre le côté du pot pour épaissir. Le chili doit revenir à une mijotée complète, de sorte que la dinde est bien passée 165°F (74°C).",
      "visualCue": {
        "primaryTarget": "Un chili crémeux, vert ivoire où quelques haricots se sont cassés dans le liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Liquid mince et clair, haricots intacts, saveurs séparées.",
            "action": "Laisser mijoter 10 minutes de plus et écraser plus de haricots."
          },
          {
            "state": "Perfect",
            "description": "Broth nuageux et légèrement épaissi par les haricots en purée; la saveur de chile s'est propagée.",
            "action": "Taisez-vous avec le lisier de masa."
          },
          {
            "state": "Overdone",
            "description": "Trop épais, sur le fond.",
            "action": "Ajouter 250 ml de bouillon à la fois et racler le pot."
          }
        ]
      },
      "feelCue": "Incorporer du bas — la cuillère devrait rencontrer un corps doux, et non une couche de gomme."
    },
    {
      "nodeId": "step_4",
      "action": "Thicken",
      "inputs": [
        "simmered_chili",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "finished_green_chili",
      "instructions": "Incorporer la masa dans le chili mijotant et cuire 5 minutes, en remuant, jusqu'à ce qu'elle épaississe et que le goût cru du maïs soit cuit. Hors du feu, ajouter le jus de lime et ajuster le sel. Servir avec la coriandre, les oignons verts et la crème aigre. Pour congeler: refroidir dans des récipients peu profonds, réfrigérer dans les 2 heures et congeler jusqu'à 4 mois; réchauffer à pleine mijoter (165°F / 74°C) et rafraîchir avec du citron vert.",
      "visualCue": {
        "primaryTarget": "Un chili enrobé de cuillère qui fond légèrement sur une cuillère, avec un léger éclat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours bouillonnant ; le goût de la masa est gritty.",
            "action": "Laisser mijoter 3 à 5 minutes de plus, en remuant, avant d'ajouter plus d'épaississant."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur mais toujours versable; note de maïs grillé doux sous lime vive.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Pasty et raide.",
            "action": "Fine avec le stock chaud et la saison de ré-saison."
          }
        ]
      },
      "feelCue": "Frottez un peu entre votre langue et le palais — lisse, pas de grains de masa sablonneux."
    }
  ]
};
