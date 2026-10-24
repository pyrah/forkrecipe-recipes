export default {
  "repoId": "master_american_garlicbuttershrimprice_001",
  "parentRepoId": null,
  "slug": "garlic-butter-shrimp-and-rice",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes au beurre d'ail au riz citronné",
  "description": "Crevettes plumpées dures et rapides, puis roulées à travers une casserole de beurre, tranches d'ail et de citron, cuillerées avec tous leurs jus de beurre sur du riz aux bouillons moelleux parsemé de pois verts doux.",
  "cuisine": "Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "seafood",
  "tags": [
    "cuisine maison",
    "nuit",
    "crevettes",
    "Produits de la mer",
    "en mer",
    "riz",
    "Ail",
    "beurre"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
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
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs, rincé jusqu'à ce que l'eau coule principalement",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz jasmin (utiliser 540 ml de stock)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé (pour le riz)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Stock de poulet, faible teneur en sodium",
      "ratioValue": 570,
      "defaultUnit": "ml",
      "substitutions": [
        "eau plus 1 c. à thé sel supplémentaire"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Base",
      "name": "Pois congelés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "pois frais décortiqués",
        "asperges hachées (soufflées sur le riz 5 min)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Grandes crevettes (16–20 lb), pelées et dépeintes, queues sur ou hors",
      "ratioValue": 680,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Beurre non salé, cube (pour la sauce)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Citrus",
      "name": "Citron, zeste puis jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "ruches"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "vapeur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_12"
      ],
      "outputState": "pea_rice",
      "instructions": "Faire fondre le beurre dans une casserole moyenne à feu moyen. Ajouter le riz égoutté et remuer 1 à 2 minutes jusqu'à ce que les grains deviennent opaques aux bords. Ajouter le bouillon et 1/2 c. à soupe de sel casher (moins si votre bouillon est salé), porter à ébullition, puis bien couvrir et cuire au feu le plus bas pendant 15 minutes. Sans remuer, dispersez les pois congelés sur le riz, recouvrez et laissez reposer le feu pendant 10 minutes. Pliez dans le zeste de citron et plissez avec une fourchette.",
      "visualCue": {
        "primaryTarget": "Grains séparés et moelleux avec trous de vapeur à la surface et pois verts brillants pliés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide bouillonne encore au fond et les grains fermes au cœur.",
            "action": "Récupérer et cuire 3 minutes de plus à feu doux."
          },
          {
            "state": "Perfect",
            "description": "Il ne reste plus de liquide, de petits cratères à la surface, de grains tendres et séparés; les pois chauds et vifs.",
            "action": "Fluffer avec le zeste et garder couvert pendant que vous faites cuire les crevettes."
          },
          {
            "state": "Overdone",
            "description": "Une croûte brune sur le fond ou une surface musclée et collante.",
            "action": "Couper du haut et laisser la croûte; le riz musqué profite de la présence à découvert pendant 5 minutes."
          }
        ]
      },
      "feelCue": "Pincez un grain: il devrait être tendre tout le chemin à travers et squash propre sans un point blanc dur au centre."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "ing_06",
        "ing_04",
        "ing_07",
        "ing_08"
      ],
      "outputState": "seared_shrimp",
      "instructions": "Pendant que le riz repose, patter les crevettes très sèches avec des serviettes en papier et assaisonner avec 1/2 c. à thé sel casher et poivre. Chauffer l'huile dans une poêle de 30 cm de 12 pouces à feu vif jusqu'à ce qu'elle fume. Ajouter les crevettes en une seule couche (travailler en deux lots au besoin) et les saisir sans bouger pendant 60 à 90 secondes, jusqu'à ce que le rose et légèrement doré en dessous. Flip et cuire 30 secondes de plus, puis transférer dans une assiette — ils finiront dans la sauce.",
      "visualCue": {
        "primaryTarget": "Crevettes brunes en plaques sur le premier côté, enroulées en un C lâche, encore légèrement translucides à la partie la plus épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gris, translucide et incurvé sans brunissement.",
            "action": "Laissez-les un peu plus longtemps; une casserole bondée ou humide vapeurs au lieu de seasers."
          },
          {
            "state": "Perfect",
            "description": "Coral-rose à l'extérieur avec des taches dorées, en forme de C lâche, un éclat de translucidité au centre.",
            "action": "Retirer dans une assiette pendant que vous faites la sauce."
          },
          {
            "state": "Overdone",
            "description": "Serré dans un O fermé, caoutchouteux et rétréci.",
            "action": "Retirer immédiatement; mélanger la sauce du feu pour enrober et servir rapidement."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement fort et constant au moment où les crevettes ont frappé la poêle; un sifflement calme et liquide de mise en commun signifie que la poêle était trop froide ou les crevettes trop mouillées."
    },
    {
      "nodeId": "step_3",
      "action": "beurre d'ail",
      "inputs": [
        "seared_shrimp",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "garlic_butter_shrimp",
      "instructions": "Réduire le feu à moyen-doux. Ajouter le beurre dans la poêle et, une fois qu'il mousse, ajouter l'ail tranché et les flocons de poivre; cuire en tourbillonnant 60 à 90 secondes jusqu'à ce que l'ail soit tendre et doré. Ajouter 2 c. à soupe de jus de citron et 2 c. à soupe d'eau et tourner pour former une sauce molle. Retournez les crevettes et les jus et jetez pendant 1 minute jusqu'à ce qu'elles soient opaques (145°F / 63°C à la partie la plus épaisse).",
      "visualCue": {
        "primaryTarget": "Crevettes brillantes avec une sauce au beurre crémeuse et dorée, tranches d'ail légèrement dorées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre encore juste fondu et l'ail blanc et la fusion brute; crevettes translucides au centre.",
            "action": "Continuez à tourner pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Ail tendre et or clair, sauce émulsifiée et opaque, crevettes entièrement opaques et fermes.",
            "action": "Enlevez immédiatement la chaleur et terminez."
          },
          {
            "state": "Overdone",
            "description": "Brun ail et amer, beurre séparé en gras clair et solides bruns.",
            "action": "Tirez les crevettes, ajoutez une autre cuillère à soupe de beurre froid et une éclaboussure d'eau du feu, et tourbillonnez pour ramener la sauce."
          }
        ]
      },
      "feelCue": "La sauce doit sentir doux et noisette avec de l'ail, jamais aiguisé ou acride; si elle sent comme un toast, vous êtes au bord."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "pea_rice",
        "garlic_butter_shrimp",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_shrimp_rice",
      "instructions": "Incorporer le persil dans la crevette et goûter la sauce; ajouter plus de jus de citron ou de sel au besoin. Divisez le riz de pois entre les assiettes et cuillerez les crevettes et chaque morceau de beurre d'ail sur le dessus.",
      "visualCue": {
        "primaryTarget": "Crevettes roses et sauce au beurre d'or trempées dans du riz blanc avec des pois verts et du persil.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz semble uni et sec autour des crevettes.",
            "action": "Grattez la poêle et la cuillère plus de sauce sur le riz."
          },
          {
            "state": "Perfect",
            "description": "Sauce au beurre dans le riz, arôme de citron brillant.",
            "action": "Servez tout de suite."
          },
          {
            "state": "Overdone",
            "description": "Sauce refroidie et congelée sur l'assiette.",
            "action": "Réchauffer la sauce de la casserole avec une touche d'eau avant de servir."
          }
        ]
      },
      "feelCue": "Une morsure de crevettes devrait se casser doucement et ensuite céder, ne jamais s'écraser contre vos dents."
    }
  ]
};
