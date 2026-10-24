export default {
  "repoId": "master_chinese_steamed_fish_ginger_soy_001",
  "parentRepoId": null,
  "slug": "steamed-fish-ginger-soy",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons entiers à vapeur cantonais",
  "description": "Tout un bar à la vapeur à la soie au-dessus des aromatiques, drapé de sauce soja, et fini table avec une goutte d'huile chaude fumante qui grésille sur le gingembre et le pétoncle — cuisine chinoise à son plus raffiné.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "seafood",
  "tags": [
    "poissons",
    "cantonais",
    "vapeur",
    "gingembre",
    "soja",
    "soyeux"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bars ou brèmes de mer entiers, nettoyés et étalonnés (400-600 g)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Déclencheur entier",
        "entiers"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Gingembre frais (à moitié tranché fin pour la vapeur, à moitié julienne pour la garniture)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalons (demi-coupés en bâtons de 5 cm pour la vapeur, demi-juliennés pour la garniture)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sauce de soja léger (prémium, pour la finition)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (pour le grincement)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "huile végétale légère"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Chili rouge frais (julienned, en option pour la couleur)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "poivron rouge julienne"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Score",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "prepared_fish",
      "instructions": "Noter le poisson des deux côtés avec 3-4 diagonales profondes coupées jusqu'à l'os, espacées de 3 cm. Cela permet à la vapeur de pénétrer les parties les plus épaisses uniformément. Assaisonner à l'intérieur de la cavité et à l'intérieur des découpes avec une légère pincée de sel. Placez les bâtons d'échon et les tranches de gingembre sur la plaque à vapeur et reposez le poisson sur le dessus.",
      "visualCue": {
        "primaryTarget": "Morceaux profonds et propres atteignant l'os, uniformément espacés; poissons reposant sur un lit de gingembre et de pétoncle, la cavité s'ouvre légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les découpes sont peu profondes et ne percent à peine la peau; la vapeur ne pénètre pas l'épaisse chair dorsale.",
            "action": "Approfondissement des découpes avec un couteau tranchant, coupe à un angle de 45 degrés par rapport à l'os."
          },
          {
            "state": "Perfect",
            "description": "Les morceaux atteignent les vertèbres; le poisson est plat et stable sur son lit aromatique; la cavité est maintenue ouverte par une petite bande de gingembre.",
            "action": "Préparez le vapeur et portez l'eau à ébullition."
          },
          {
            "state": "Overdone",
            "description": "Les découpes ont coupé la colonne vertébrale; les poissons s'effondrent pendant la vapeur.",
            "action": "Tenez le poisson avec un cure-dent à travers le corps ; il aura toujours un goût parfait."
          }
        ]
      },
      "feelCue": "Le couteau devrait faire un bruit de rafraîchissement propre lorsqu'il passe à travers les écailles, la peau et la chair pour répondre à la résistance de la colonne vertébrale — si les coupes se sentent ravagées, le couteau est trop terne."
    },
    {
      "nodeId": "step_2",
      "action": "vapeur",
      "inputs": [
        "prepared_fish"
      ],
      "outputState": "steamed_fish",
      "instructions": "Portez l'eau du vapeur à ébullition complète avant d'ajouter le poisson. Faites glisser la plaque dans le vapeur, couvrez-la d'un couvercle serré et faites chauffer à feu vif pendant 8 minutes pour un poisson de 400 g, 10 minutes pour 500-600 g. Ne pas soulever le couvercle pendant la vapeur. Le timing est exact: une seule minute plus tard commencera à serrer et à sécher la chair.",
      "visualCue": {
        "primaryTarget": "La chair de la coupe la plus profonde se retire de l'os proprement et est uniformément blanche, sans taches translucides; une baguette pressée dans la partie la plus épaisse près de la tête ne présente aucune résistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de la coupe la plus épaisse est encore translucide et légèrement gélatineux; la chair résiste à la baguette.",
            "action": "Remplacer le couvercle et la vapeur pendant 90 secondes de plus; revérifier."
          },
          {
            "state": "Perfect",
            "description": "La chair est uniformément opaque blanche, soyeuse plutôt que sèche; elle se sépare en flocons propres et larges de l'os. Le liquide de vapeur dans la plaque est clair.",
            "action": "Retirer la plaque du vapeur; égoutter tout le liquide accumulé de la plaque."
          },
          {
            "state": "Overdone",
            "description": "La chair s'est contractée de l'os; le liquide vapeur est laiteux et nuageux des protéines libérées; la texture est caoutchouteuse.",
            "action": "Il n'y a pas de récupération — servir immédiatement et se noyer généreusement dans le soja et l'huile chaude."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle après la cuisson et la vapeur devrait se précipiter dans un nuage de bouffées transportant une odeur de mer propre — si la vapeur sent fortement poissonneuse, le poisson peut ne pas avoir été suffisamment bien rincé."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "steamed_fish",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_steamed_fish",
      "instructions": "Égoutter tout le liquide mis en réserve sur la plaque à vapeur — ce liquide est poissonneux et dilué; le jeter est l'étape clé que la plupart des cuisiniers à domicile manquent. Disposer le gingembre julienne, le pétoncle et le chili dans une pile soignée sur le dessus du poisson. Mélanger le soya léger avec le sucre et verser uniformément sur le poisson et garnir. Chauffer l'huile neutre dans une petite casserole à feu vif jusqu'à ce qu'elle commence juste à fumer — 200 C. Verser tout à la fois sur la garniture : elle crache, crache et flétrisse l'échon et le gingembre dans un moment dramatique.",
      "visualCue": {
        "primaryTarget": "La garniture s'étourne et se flétrit instantanément au contact de l'huile chaude; les piscines de soja autour du poisson dans une flaque ambre parfumée; le pétoncle julien est vert vif et légèrement flétri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile n'était pas assez chaude; la garniture reste crue et croquante; il n'y a pas de vertige.",
            "action": "Le poisson est fin — la garniture n'aura tout simplement pas cette signature parfumé fleuri; réchauffer l'huile et répéter si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Un étourdissement dramatique au contact; le pétoncle et le gingembre sont flétris mais encore vifs; les vapeurs de soja et le mélange avec l'huile dans une sauce soyeuse et parfumée.",
            "action": "Apportez à la table immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'huile était trop chaude et a pulvérisé à l'extérieur de l'assiette; la garniture a brûlé et sent amer.",
            "action": "Retirer la garniture brûlée; le poisson et la sauce de soja en dessous ne sont pas affectés."
          }
        ]
      },
      "feelCue": "Le dépôt d'huile chaude est à la fois la dernière étape de cuisson et la révélation théâtrale — le grésillement doit être fort et immédiat, remplissant la pièce d'une patte de pétoncle grillé et de gingembre."
    }
  ]
};
