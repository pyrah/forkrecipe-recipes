export default {
  "repoId": "master_italian_chicken_marsala_001",
  "parentRepoId": null,
  "slug": "chicken-marsala",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet Marsala",
  "description": "Culottes de poulet poncées dans une poêle chaude, puis râpées dans une sauce de vin Marsala et de champignons crémini terreux qui se réduit à une laque ambre profonde. La douceur oxydée en caramel du vin joue contre le goût salé d'une manière qui fait un goût de trente minutes comme il a passé l'après-midi sur le poêle.",
  "cuisine": "Italien",
  "culture": "Sicilien-américain",
  "category": "proteins",
  "tags": [
    "Marsala",
    "poulet",
    "Italien",
    "champignon",
    "vin-sauce"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poitrines de poulet sans peau désossées, pillées à 1/4 pouce",
      "ratioValue": 2,
      "defaultUnit": "large",
      "substitutions": [
        "tranches de poulet",
        "pétoncles de veau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine à usage général (pour le dragage)",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "Farine de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Champignons crémini, tranchés 1/4 pouce d'épaisseur",
      "ratioValue": 8,
      "defaultUnit": "oz",
      "substitutions": [
        "Casquettes shiitake",
        "champignons bouton"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalotes finement hachées",
      "ratioValue": 2,
      "defaultUnit": "medium",
      "substitutions": [
        "1 petit oignon jaune, haché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Vin sec de Marsala",
      "ratioValue": 0.75,
      "defaultUnit": "cup",
      "substitutions": [
        "sherry sec moyen",
        "Madère"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks de poulet",
      "ratioValue": 0.25,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Thym séché, 1/4 c. à thé"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, haché",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel casher et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_12"
      ],
      "outputState": "seared_chicken",
      "instructions": "Assaisonner de sel et de poivre les découpes piquées. Draguer dans la farine, secouer tout excès. Chauffer 2 cuillères à soupe de beurre et toute l'huile d'olive dans une grande poêle à feu moyen-vif jusqu'à ce que la mousse de beurre s'abaisse. Placer les découpes en une seule couche, 3-4 minutes de chaque côté, jusqu'à ce que les deux côtés soient profondément dorés. Ne foulez pas la poêle — travaillez en lots. Transférer dans une assiette et la tente avec du papier.",
      "visualCue": {
        "primaryTarget": "Une croûte riche en or ambre des deux côtés avec un building friand sur le fond de la poêle. Les bords du poulet sont blancs, ce qui indique que l'intérieur est cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cutlets sont blonds pâles avec un brunissement minimal. Ils ont résisté quand vous avez essayé de les retourner — la croûte n'était pas encore réglée.",
            "action": "Revenez à la chaleur. Une poêle bien chaude avec le bon rapport de graisse est essentielle — réchauffer si la poêle a refroidi."
          },
          {
            "state": "Perfect",
            "description": "Deep, même de l'or des deux côtés. Crisp aux bords. Le fond de la poêle montre un riche goût de farine et de beurre qui sent la noix et le sucré. Le poulet est entièrement cuit à 1/4 po d'épaisseur.",
            "action": "Retirer dans une assiette. Faire cuire les champignons dans la même casserole."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant brûlé. La farine est brûlée et le fond est amer et noir dans les taches.",
            "action": "Enlevez le poulet. Si le fond est vraiment brûlé, essuyer la poêle et commencer à neuf. Un fond légèrement sombre donnera encore une bonne sauce."
          }
        ]
      },
      "feelCue": "La découpe finie doit avoir une croûte de papier léger qui craque lorsque vous la pressez — la croûte de beurre de farine n'est que de quelques millimètres d'épaisseur mais ajoute tout le contraste textural."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_03",
        "ing_10"
      ],
      "outputState": "sauteed_mushrooms",
      "instructions": "Ajouter le reste du beurre dans la poêle à feu moyen-élevé. Ajouter les champignons dans une seule couche — ne pas remuer pendant les 2 premières minutes, les laisser entrer en contact avec la poêle chaude. Une fois doré sur une face, remuer et ajouter les échalotes et l'ail. Cuire, en remuant, jusqu'à ce que les échalotes soient molles et que les champignons soient entièrement dorés et qu'ils aient libéré et réabsorbé leur liquide, environ 4-5 minutes au total. Ajouter le thym.",
      "visualCue": {
        "primaryTarget": "Les champignons bruns dorés profonds qui ont libéré et réabsorbé leur humidité, maintenant caramélisé et réduit en volume de moitié. Échalotes molles et translucides s'accrochant aux champignons.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont pâles et nagent dans le liquide qu'ils ont libéré, mais pas réabsorbés. Ils sont doux mais pas brunis.",
            "action": "Augmenter la chaleur et cuire sans remuer. Le stirring prolonge le temps avant le brunissement."
          },
          {
            "state": "Perfect",
            "description": "Les champignons sont d'or profond à brun, éparpillés et charnus. La poêle est presque sèche. Une odeur savoureuse et terreuse remplit la cuisine. Les échalotes sont tendres.",
            "action": "Déglacer avec Marsala immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont très foncés et légèrement secs aux bords. Les échalotes ont commencé à brûler par endroits.",
            "action": "Déglacer immédiatement avec Marsala pour sauver le fond avant qu'il ne passe en amer."
          }
        ]
      },
      "feelCue": "Les champignons bien dorés se sentent solides et charnus lorsqu'ils sont pressés à l'aide d'une cuillère — ils rebondissent plutôt que s'effondrent sous pression, ce qui indique que leur humidité a cuit."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "sauteed_mushrooms",
        "ing_08",
        "ing_09"
      ],
      "outputState": "marsala_sauce",
      "instructions": "Verser le Marsala dans la poêle chaude tout d'un coup, il éclaboussera et va vapeur dramatiquement. Grattez tout le fond de la poêle. Ajouter le bouillon de poulet. Porter à ébullition et réduire de moitié à feu vif, environ 3-4 minutes. La sauce devrait s'épaissir assez pour enrober une cuillère et tourner une couleur ambre profonde comme concentré de sucres Marsala.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre profonde, brillante et légèrement épaissie, avec des champignons distribués partout. La couleur est comme le miel noir — translucide mais riche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est légèrement ambre et aqueuse; elle s'écoule librement de l'arrière d'une cuillère. Des goûts de vin cru.",
            "action": "Continuer à réduire sur la chaleur élevée, en regardant les bords de la poêle où la réduction est la plus visible."
          },
          {
            "state": "Perfect",
            "description": "Ambre profond, brillant, enrobant l'arrière d'une cuillère d'un film mince et uniforme. La saveur de Marsala est concentrée — douce, noix, légèrement oxydée. Ça sent l'intérieur d'un baril de vin.",
            "action": "Retourner le poulet dans la poêle et finir avec du beurre."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très épaisse et sombre, presque un glaçage. La douceur est devenue cloie.",
            "action": "Ajouter un peu de bouillon de poulet pour se détendre et équilibrer."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans le bord refroidi de la sauce — il devrait s'accrocher à votre bout de doigt dans un mince film et goûter intensément de vin, de champignons et de jus de viande caramélisé tout à la fois."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "marsala_sauce",
        "seared_chicken",
        "ing_11"
      ],
      "outputState": "finished_marsala",
      "instructions": "Nettoyez les découpettes de poulets dans la sauce Marsala. Laisser mijoter à feu doux pendant 2-3 minutes pour réchauffer le poulet et mélanger les saveurs. Hors feu, tourner dans le reste du beurre jusqu'à ce que la sauce devienne brillante et unifiée. Épargnez du persil frais. Servir immédiatement sur les nouilles d'œuf, la polenta ou la purée de pommes de terre.",
      "visualCue": {
        "primaryTarget": "La sauce acajou-ambre brillante s'accroche aux découpettes de poulet. Le persil vert vif contre la sauce foncée. La sauce se déplace comme une feuille unifiée lorsque la poêle est inclinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est cassée ou fine — le beurre n'a pas été émulsifié. Le poulet a l'air pâle assis dans un liquide huileux séparé.",
            "action": "Retirer du feu et tourner vigoureusement la poêle. Ajouter une cuillère à café d'eau froide si nécessaire pour aider à réémulsionner."
          },
          {
            "state": "Perfect",
            "description": "Une sauce unifiée et brillante qui enveloppe le poulet d'une fine laque ambre. Le beurre a enrichi la sauce sans la rendre lourde. Le persil est dynamique.",
            "action": "Tout de suite."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est cassée de trop de chaleur après avoir ajouté du beurre — des piscines de beurre clair flottent sur une sauce terne.",
            "action": "Retirer du feu. Ajouter 2 c. à thé d'eau froide et tourner agressivement hors de la chaleur pour le ramener ensemble."
          }
        ]
      },
      "feelCue": "Inclinez la casserole et regardez comment la sauce se déplace — un marsala fini et bien monté doit couler dans une seule feuille brillante, pas dans des bassins séparés de graisse et de liquide."
    }
  ]
};
