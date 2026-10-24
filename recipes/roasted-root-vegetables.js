export default {
  "repoId": "master_british_roasted_root_vegetables_001",
  "parentRepoId": null,
  "slug": "roasted-root-vegetables",
  "author": "ForkRecipe Kitchen",
  "title": "Légumes-racines grillés",
  "description": "Des panais, des carottes et des betteraves, épluchées et coupées en taille, jetées dans une généreuse couche d'huile et grillées à feu vif jusqu'à ce que leurs sucres aient caramélisé en un char doux et amer, la façon la plus honnête et la plus satisfaisante de manger les légumes d'un automne anglais.",
  "cuisine": "Anglais",
  "culture": "Anglais",
  "category": "vegetables",
  "tags": [
    "grillés",
    "légumes",
    "britanniques",
    "panais",
    "Carotte",
    "betterave",
    "végétalien",
    "côté"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 1102,
  "forks": 98,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2025-02-10",
  "updatedAt": "2025-06-01",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Parsnips (peeled, demi-longueur)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "céleriac",
        "navets"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Carottes (peautées, coupées en deux ou en quatre dans le sens de la longueur)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "carottes arc-en-ciel"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Racines de betteraves (peautées, coupées en quartiers)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "betterave dorée",
        "Suède"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile de tournesol ou de légumes",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de canard ou d'oie pour des résultats supérieurs"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Fils de thym frais et feuilles de laurier",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "romarin frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer et poivre noir",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Miel ou sirop d'érable (pour vitrage)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation de légumes",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "prepped_roots",
      "instructions": "Peler tous les légumes. Couper en morceaux d'une taille approximativement égale et d'une surface similaire, de sorte qu'ils rôtissent au même rythme — c'est l'étape de préparation la plus importante. Les parsnips sont coupés en deux dans le sens de la longueur; les carottes sont coupées en deux ou en quatre selon la taille; la betterave est formée de 6 à 8 coins. Dans un grand bol, mélanger l'huile, enrober toutes les surfaces — ne pas encore assaisonner de sel, car le sel puise l'humidité et crée de la vapeur au début de la cuisson.",
      "visualCue": {
        "primaryTarget": "Des morceaux de taille uniforme dans les trois types de légumes, chaque surface scintille avec une couche d'huile uniforme. Les pièces doivent avoir à peu près la même taille lorsqu'elles sont assemblées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces sont de tailles très différentes — quelques grands coins de betterave à côté de fines bandes de carottes.",
            "action": "Recoupez les pièces surdimensionnées pour correspondre aux plus petites. Des tailles inégales garantissent que certaines pièces brûleront tandis que d'autres seront cuites."
          },
          {
            "state": "Perfect",
            "description": "Taille constante. Même un manteau d'huile sur chaque visage. Les légumes ont l'air grincheux et éblouissants.",
            "action": "Étaler immédiatement sur le plateau de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont assis dans de l'huile depuis trop longtemps et certains morceaux semblent recouverts d'eau.",
            "action": "Procéder — l'absorption d'huile n'affectera pas significativement le résultat."
          }
        ]
      },
      "feelCue": "Ramassez un morceau de panais huilé — il devrait se sentir lissé et l'huile ne devrait pas couler lorsqu'elle est retenue pendant 5 secondes. Les surfaces coupées doivent être lisses et légèrement collantes à partir de l'huile."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "prepped_roots",
        "ing_05"
      ],
      "outputState": "roasting_roots",
      "instructions": "Préchauffer le four à 220°C (43°F) avec un grand plateau de torréfaction lourd à l'intérieur. Le plateau préchauffé est essentiel: les légumes sont placés dans un plateau froid plutôt que dans un rôti. Étendre les légumes en une seule couche avec les côtés coupés vers le bas, avec de l'espace entre chaque pièce — toucher les légumes se vapeur. Scatter le thym et les feuilles de laurier. Faire cuire 25 minutes sans ouvrir le four.",
      "visualCue": {
        "primaryTarget": "Après 25 minutes, les côtés coupés en contact avec le plateau doivent montrer une caramélisation profonde, dorée à brun foncé. Les légumes commencent à rétrécir et les bords ont commencé à colorier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 25 minutes, les côtés coupés sont pâles et les légumes semblent à la vapeur, sans caramélisation visible.",
            "action": "Le plateau n'était probablement pas assez chaud ou la température du four était trop basse. Monter à 230°C et retourner au four."
          },
          {
            "state": "Perfect",
            "description": "Les côtés coupés sont profondément dorés à bruns avec une caramélisation distincte. La cuisine sent la carotte caramélisée et la betterave terreuse. Les parsnips aux pourboires commencent à ombrager.",
            "action": "Retourner les morceaux, assaisonner de sel et retourner au four."
          },
          {
            "state": "Overdone",
            "description": "Les surfaces coupées ont noirci et les légumes commencent à se rétrécir considérablement.",
            "action": "Retirer immédiatement et servir. Les légumes-racines fortement caramélisés sont toujours délicieux même à la limite du carbonisé."
          }
        ]
      },
      "feelCue": "Ouvrir le four après 25 minutes et entendre un étourdissement régulier et modéré de chaque pièce. La vapeur libérée doit porter l'odeur douce du panais caramélisant et des sucres de carottes."
    },
    {
      "nodeId": "step_3",
      "action": "Glacer",
      "inputs": [
        "roasting_roots",
        "ing_07",
        "ing_06"
      ],
      "outputState": "finished_roasted_roots",
      "instructions": "Tourner chaque pièce pour exposer un côté non-brown. Assaisonner maintenant de sel de mer et de poivre noir. Arrosez le miel ou le sirop d'érable sur les morceaux du plateau. Retourner au four encore 15 à 20 minutes jusqu'à ce que tout soit tendre, profondément caramélisé, et le miel s'est obscurci et concentré. Le sucre dans la glaçure accélère la réaction de Maillard sur les surfaces fraîchement exposées.",
      "visualCue": {
        "primaryTarget": "Caramélisation ambrée profonde sur plusieurs côtés, avec la glaçure de miel formant une couche brillante, foncée et concentrée sur les surfaces exposées. Les bouts de panais peuvent être très sombres — c'est souhaitable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale deuxième face avec le miel pas encore caramélisé — il semble pâle et liquide à la surface.",
            "action": "Retournez au four. Le miel a besoin de chaleur pour se concentrer et caraméliser."
          },
          {
            "state": "Perfect",
            "description": "Plusieurs côtés caramélisés profonds. Le miel a obscurci et adhéré aux légumes, formant une couche collante et brillante. Les bouts de parsnip sont sombres, presque carbonisés. Une fourche traverse toutes les pièces sans résistance.",
            "action": "Servir immédiatement du plateau."
          },
          {
            "state": "Overdone",
            "description": "Le miel a brûlé à un film noir et amer et les légumes sont très sombres et secs.",
            "action": "Supprimer immédiatement. Écrase le pire du miel brûlé. Le légume sous-jacent peut encore être excellent."
          }
        ]
      },
      "feelCue": "Appuyez sur un panais à l'arrière d'une fourchette — il devrait produire complètement avec un léger rendement, comme en appuyant sur du beurre ferme. La glaçure de miel sur la surface doit se sentir collante et légèrement collante, pas humide."
    }
  ]
};
