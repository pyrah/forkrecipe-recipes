export default {
  "repoId": "master_chinese_gingerscallionporknoodles_001",
  "parentRepoId": null,
  "slug": "ginger-scallion-pork-noodles",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Nouilles de porc à l'épice à l'épice de gingembre",
  "description": "Des nouilles de blé croustillantes ont été jetées avec du porc broyé bruni, du soya glacé, du bok choy tendre et une huile de gingembre et de callion qui a un goût herbacé, aigu et parfumé.",
  "cuisine": "Chinois",
  "culture": "Cuisine maison d'inspiration cantonaise",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "nuit",
    "porc",
    "nouilles",
    "viande hachée",
    "sauté",
    "gingembre",
    "scalpel"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
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
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Échalons, tranchés finement (blancs et verts)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et finement haché",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "3/4 c. à thé sel de mer fin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (pour l'huile de gingembre)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'arachide"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Nouilles de blé, séchées (lo mein, ramen ou mince udon)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "nouilles de blé frais (400 g)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Baby bok choy, coupé en quatre dans le sens de la longueur et lavé",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "somme de choy",
        "Choux de napa, tranchés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (pour le porc)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Porc haché",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": [
        "poulet haché (cuisson à 165°F / 74°C)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Glutamate",
      "name": "sauce à l'huître",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "hoisin (sweeter)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Acid",
      "name": "vinaigre de riz ou vinaigre noir Chinkiang",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Chili croustillant, à servir (facultatif)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bloom",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "ginger_scallion_oil",
      "instructions": "Mettre les pétoncles, le gingembre et le sel dans un bol résistant à la chaleur (métal ou céramique épaisse, avec de la place à épargner — il va buller). Chauffer l'huile dans une petite casserole sur une hauteur moyenne jusqu'à ce qu'elle mijote et atteigne environ 375°F (190°C), ou jusqu'à ce qu'une tranche de pétoncle tombe vigoureusement dans les étourdissements. Verser soigneusement l'huile chaude sur les aromatiques; remuer. Laissez refroidir pendant que vous cuisinez tout le reste.",
      "visualCue": {
        "primaryTarget": "L'émeraude devient vive et légèrement flétrie, le gingembre parfumé, l'huile bouillonne farouchement puis se dépose.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile siffle à peine lorsqu'elle est versée; les pétoncles restent raides et vert terne.",
            "action": "Verser l'huile dans la poêle, réchauffer jusqu'à ce qu'elle mijote et verser à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Craquant loud et mousse au contact, pétoncles vert vif et arôme de gingembre intense et flétri.",
            "action": "Remuer et réserver."
          },
          {
            "state": "Overdone",
            "description": "L'huile fumait beaucoup; les pétoncles brunis et le gingembre noircissaient d'une odeur brûlée.",
            "action": "Recommencer avec des pétoncles frais et de l'huile un peu moins chauffée — les aromatiques brûlés deviennent amers."
          }
        ]
      },
      "feelCue": "Le gémissement doit rugir pendant 5 à 10 secondes et remplir la cuisine de l'odeur de gingembre cru qui devient sucré et parfumé."
    },
    {
      "nodeId": "step_2",
      "action": "Huile et blanch",
      "inputs": [
        "ing_05",
        "ing_06"
      ],
      "outputState": "noodles_and_bok_choy",
      "instructions": "Portez une grande casserole d'eau non salée à ébullition. Cuire les nouilles selon l'emballage, en ajoutant le bok choy pour les dernières 1 1/2 minutes. Écraser 120 ml de l'eau de nouilles, puis égoutter et rincer brièvement sous l'eau tiède pour laver l'amidon de surface afin que les nouilles ne s'agrippent pas.",
      "visualCue": {
        "primaryTarget": "Nouilles printanières, séparées et bok choy avec des feuilles vert clair et des tiges tendres, encore en croûte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Nouilles fermes et opaques au cœur; tiges bok choy crues et cousues.",
            "action": "Faire bouillir 30 à 60 secondes de plus."
          },
          {
            "state": "Perfect",
            "description": "Nouilles mâcheuses et élastiques; feuilles bok choy flétries et vives, tiges juste couteau-tendre.",
            "action": "Égoutter et mélanger avec une cuillerée à l'huile de gingembre pour éviter de coller."
          },
          {
            "state": "Overdone",
            "description": "Nouilles douces et cassantes; bok choy drab et visqueux.",
            "action": "Rincer dans de l'eau fraîche pour arrêter la cuisson et jeter doucement à partir d'ici."
          }
        ]
      },
      "feelCue": "Une nouille devrait s'étirer un peu avant qu'elle ne se brise — bonbon, pas musqué."
    },
    {
      "nodeId": "step_3",
      "action": "Marron",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "glazed_pork",
      "instructions": "Pendant que les nouilles font cuire, faire chauffer l'huile dans une poêle de 30 cm ou wok de 12 pouces à feu moyen-élevé. Ajouter le porc, le presser dans une couche uniforme et cuire 3 à 4 minutes jusqu'à ce qu'il soit doré en dessous, puis le briser en petits miettes et cuire 2 à 3 minutes de plus jusqu'à ce qu'il ne reste pas de rose et qu'il atteigne 160°F (71°C). Ajouter la sauce soja, la sauce aux huîtres, le sucre et le vinaigre et mélanger 1 minute jusqu'à ce que le liquide diminue à un glaçage.",
      "visualCue": {
        "primaryTarget": "Petits miettes bien connues aux bords croustillants, laqués dans un vernis foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gris, émietté dans un liquide en bassin avec des taches roses restantes.",
            "action": "Maintenir la cuisson à feu vif jusqu'à ce que le liquide s'évapore et que le porc s'étourne et brunisse."
          },
          {
            "state": "Perfect",
            "description": "Morceaux croustillants brun foncé, sans rose, sauce réduite à un revêtement brillant.",
            "action": "Ajouter les nouilles et le bok choy."
          },
          {
            "state": "Overdone",
            "description": "Crumble dur et sec, glaçure collant et assombrir sur la poêle.",
            "action": "Ajouter une éclaboussure d'eau de nouilles pour desserrer la glaçure et avancer rapidement."
          }
        ]
      },
      "feelCue": "Le porc devrait craquer fort comme la graisse rend, et les morceaux brunis devraient se sentir croquants lorsqu'ils sont pressés avec la spatule."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "glazed_pork",
        "noodles_and_bok_choy",
        "ginger_scallion_oil",
        "ing_13"
      ],
      "outputState": "finished_pork_noodles",
      "instructions": "Ajouter les nouilles et le bok choy dans la poêle avec la moitié de l'huile de gingembre et de 3 à 4 c. à soupe de l'eau de nouilles réservée. Faire sauter à feu moyen pendant 1 minute jusqu'à ce que tout soit enduit et brillant. Goûtez et ajoutez plus de soja ou de vinaigre si nécessaire. Divisez entre les bols et cuillerez le reste de l'huile de gingembre sur le dessus, avec du chili croustillant si vous voulez.",
      "visualCue": {
        "primaryTarget": "Des nouilles brillantes mêlées uniformément de miettes de porc et de bok choy, tachetées d'échon vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc s'émiette au fond et les nouilles sont pâles et sèches.",
            "action": "Verser avec des pinces, soulever du fond, et ajouter une autre éclaboussure d'eau de nouilles."
          },
          {
            "state": "Perfect",
            "description": "Nouilles brillantes et légèrement bronzées, porc pris dans tout, huile de pétoncle glissant.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles collent et brûlent sur la poêle.",
            "action": "Ajouter 2 c. à soupe d'eau et un peu plus d'huile de pétoncle, puis enlever la chaleur."
          }
        ]
      },
      "feelCue": "Chaque fourchette doit sentir fortement le gingembre et l'oignon vert, le porc ajoutant une croûte salée et salée."
    }
  ]
};
