export default {
  "repoId": "master_american_succotash_001",
  "parentRepoId": null,
  "slug": "succotash",
  "author": "ForkRecipe Kitchen",
  "title": "Succotash du sud",
  "description": "Jubilé d'été de maïs doux, de haricots lima et de tomates cerises cuites dans de la graisse de bacon — légumes humbles riches et texturés, finis avec du beurre et des herbes.",
  "cuisine": "Américain",
  "culture": "Sud",
  "category": "vegetables",
  "tags": [
    "sud",
    "américains",
    "maïs",
    "Lima-haricots",
    "été",
    "bacon",
    "côté"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Amandes fraîches de maïs doux (d'environ 4 oreilles)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "maïs congelé, dégelé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Fèves de lima, fraîches ou congelées",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Édamame",
        "haricots au beurre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tomates de raisins"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Bacon strié, tranché en lardons",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Pancetta"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Basilic frais, déchiré",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poivre noir fraichement craqué",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_04"
      ],
      "outputState": "crisp_bacon_and_fat",
      "instructions": "Placer les lardons de bacon dans une poêle froide, large ou en fonte. Mettre à feu moyen et cuire en remuant occasionnellement, jusqu'à ce que la graisse soit complètement fondue et que le bacon soit profondément doré et croustillant — environ 8-10 minutes. Faites sortir le bacon avec une cuillère à fente sur les serviettes en papier. Laissez la graisse dans la poêle.",
      "visualCue": {
        "primaryTarget": "Le bacon est profondément bruni et rigide. La casserole contient une généreuse réserve de graisse limpide, teintée d'ambre, sans graisse crue blanche restante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bacon est encore rose pâle et flexible. Le gras est nuageux et n'a pas rendu propre.",
            "action": "Continuer à feu moyen — ne pas précipiter avec la chaleur élevée ou l'extérieur brûlera avant que la graisse rend."
          },
          {
            "state": "Perfect",
            "description": "Les morceaux de bacon sont uniformément brun foncé, croustillants et d'apparence sèche sur les serviettes en papier. La graisse dans la poêle est claire et chatoyante.",
            "action": "Retirer le bacon, laisser la graisse, poursuivre avec l'oignon."
          },
          {
            "state": "Overdone",
            "description": "Le bacon est très sombre, proche du noir, et la graisse fume et sent l'acride.",
            "action": "Retirer le bacon, jeter toute graisse brûlée. Ajouter un petit morceau de beurre dans la poêle pour tempérer le gras restant avant de procéder."
          }
        ]
      },
      "feelCue": "Les lardons croustillants devraient se casser proprement entre les doigts — sans donner, sans mâcher — comme un petit cracker salé."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "crisp_bacon_and_fat",
        "ing_05",
        "ing_01",
        "ing_02",
        "ing_08"
      ],
      "outputState": "cooked_vegetables",
      "instructions": "Dans la même casserole avec la graisse de bacon rendue, ajouter l'oignon et cuire à feu moyen jusqu'à adoucir et commencer à tourner en or, environ 5 minutes. Ajouter les grains de maïs et les haricots lima avec le thym. Faire cuire, en remuant occasionnellement, jusqu'à ce que le maïs soit tendre et commence à cloquer dans des plaques et les haricots lima sont chauffés et crémeux — environ 6 à 8 minutes.",
      "visualCue": {
        "primaryTarget": "Les grains de maïs sont jaune vif avec des taches carbonées aléatoires. Les haricots de Lima sont un vert ivoire crémeux, cuit à travers. L'oignon a disparu dans le mélange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le maïs est pâle et féculent; les haricots lima sont encore fermes au centre.",
            "action": "Cuire encore 3 à 4 minutes, en ajoutant une touche d'eau si la poêle semble sèche."
          },
          {
            "state": "Perfect",
            "description": "Le maïs a un mélange de taches jaune vif et de taches carbonisées. Les haricots de Lima donnent à la pression et goûtent crémeux. La casserole sent le maïs sucré et la graisse de bacon.",
            "action": "Ajouter l'ail et les tomates et poursuivre."
          },
          {
            "state": "Overdone",
            "description": "Le maïs est sombre et séché. Les haricots de Lima se sont cassés.",
            "action": "Ajouter immédiatement le beurre pour ajouter l'humidité et le brillant. La texture sera plus douce mais toujours bonne."
          }
        ]
      },
      "feelCue": "Appuyez sur une fève de lima contre le côté de la poêle avec une cuillère — elle devrait s'aplatir facilement sans éjaculer, vous disant que l'intérieur est entièrement tendre et féculent."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "cooked_vegetables",
        "ing_03",
        "ing_06",
        "ing_07",
        "ing_09",
        "ing_10",
        "ing_11",
        "crisp_bacon_and_fat"
      ],
      "outputState": "finished_succotash",
      "instructions": "Ajouter l'ail et la moitié des tomates cerises dans la poêle. Cuire seulement 2 minutes — assez pour que les peaux de tomates commencent à cloquer et à se diviser sans perdre leur forme. Retirer du feu. Ajouter le beurre froid et tourner la poêle pour le fondre et l'émulsionner dans les légumes. Assaisonner généreusement de sel et de poivre. Éparpiller le basilic déchiré et écraser le bacon croustillant réservé sur le dessus. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Un jumble vibrant et brillant de maïs jaune, de haricots d'ivoire et de tomates rouges de bijou avec des herbes vertes vives éparpillées et des flocons de bacon foncé sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates ne sont pas chaudes et semblent crues. Beurre a mis en commun au fond plutôt que de couvrir les légumes.",
            "action": "Retourner à feu doux pendant 1 minute, tourbillonner constamment pour émulsifier le beurre."
          },
          {
            "state": "Perfect",
            "description": "Les tomates sont chaudes, cloquées mais toujours entières. Le beurre a fondu en un revêtement brillant léger de chaque légume. Tout le plat semble brillant et vivant.",
            "action": "Assortir et manger immédiatement — le succotash ne tient pas."
          },
          {
            "state": "Overdone",
            "description": "Les tomates ont éclaté complètement et se sont transformées en sauce. Les herbes sont flétries et sombres.",
            "action": "La saveur est encore excellente — servir comme plus d'un ragout chunky sur les grains ou avec du pain croustillant."
          }
        ]
      },
      "feelCue": "Le succotash fini doit cliquer et sauter légèrement lorsqu'il est agité — le bruit de légumes brillants et distincts se déplaçant l'un contre l'autre, et non un mousquet humide et silencieux."
    }
  ]
};
