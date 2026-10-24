export default {
  "repoId": "master_peruvian_ceviche_clasico_001",
  "parentRepoId": null,
  "slug": "ceviche-clasico",
  "author": "ForkRecipe Kitchen",
  "title": "Ceviche Clásico",
  "description": "Le plat national du Pérou dans sa forme la plus pure : le bar cru coupé en cubes et immergé dans une marée féroce de jus de lime frais, ají amarillo et gingembre, l'acide transformant le poisson en quelque chose de cuit et vivant simultanément – lumineux, crépuscule, brûlant et froid. La leche de tigre laissée dans le bol après vaut la peine de boire.",
  "cuisine": "Pérou",
  "culture": "Limeño",
  "category": "seafood",
  "tags": [
    "Ceviche",
    "cru",
    "Chaux",
    "périuvien",
    "Aji-amarillo",
    "pas de cuisson",
    "été",
    "acide"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bar de qualité sushi (corvina ou lenguado), coupé en cubes de 2 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "flétan",
        "Flotteur",
        "snapper"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de lime frais (de 14 à 18 limes, fraîchement pressé)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon rouge, très finement coupé en demi-lunes",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Ají amarillo (ou 2 ají amarillo frais, ensemencés, hachés)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1 serrano + pincée de curcuma pour la couleur"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousse d'ail, finement râpée",
      "ratioValue": 1,
      "defaultUnit": "clove",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de coriandre fraîches",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Cancha (maïs péruvien rôti) ou chifles (frites de plantain frit)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "noix de maïs",
        "croustilles de tortilla"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Pommes de terre douces (camote), coupées en tranches",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Ají limo ou habanero, ensemencé et très finement haché",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "pincée de Cayenne"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_03",
        "ing_08"
      ],
      "outputState": "macerated_onion",
      "instructions": "Couper l'oignon rouge le plus finement possible humainement, idéalement de 1 mm ou moins, en utilisant une mandoline ou un couteau très tranchant. Dans un bol d'eau froide légèrement salée. Tremper pendant 10 minutes — cela dégage des composés sulfureux et la morsure brute tout en préservant la saveur d'oignon propre et la couleur rose-violet brillant. Égoutter, rincer et égoutter à nouveau. Dans le même bol, mélanger les tranches d'oignon égouttées avec une pincée de sel et une petite pression de jus de lime. Les saisons de sel commencent à macérer l'oignon, rendant chaque tranche souple et brillante. Mettez de côté. L'oignon bien préparé est le contrepoint de texture qui rend ceviche: il doit être assez croquant pour avoir la présence, assez doux pour ne pas être dur. L'étape de trempage n'est pas négociable pour un résultat raffiné.",
      "visualCue": {
        "primaryTarget": "Tranches d'oignon minces, semi-translucides, violettes roses vives, légèrement boiteuses mais non effondrées. Chaque tranche se met à plat sans grouper.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches d'oignons sont trop épaisses et encore raides et piquantes, avec une bouchée crue sévère au goût.",
            "action": "Laisser tremper encore 5 minutes dans de l'eau salée fraîche."
          },
          {
            "state": "Perfect",
            "description": "Mince, flexible, toujours rose vif. Douce et propre au goût — saveur d'oignon sans brûlure.",
            "action": "Égoutter bien et réserver. Ne pas conserver dans du liquide ou ils continueront à adoucir."
          },
          {
            "state": "Overdone",
            "description": "Les tranches d'oignon sont translucides et boiteuses, et commencent à paraître cuites ou flétries.",
            "action": "Utilisez immédiatement — ils ne s'amélioreront pas avec plus de temps, mais ils sont encore bien."
          }
        ]
      },
      "feelCue": "Pincez une tranche d'oignon préparée entre vos doigts – elle devrait se sentir mince et légèrement soyeuse, se pliant sans casser. Goûtez un: il devrait être propre et légèrement aiguisé, comme un murmure d'oignon, pas un cri."
    },
    {
      "nodeId": "step_2",
      "action": "Cure",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08",
        "ing_11"
      ],
      "outputState": "leche_de_tigre",
      "instructions": "Dans un bol en verre ou en céramique réfrigéré, mélanger les cubes de bar avec le sel et mélanger doucement pour assaisonner. Verser le jus de lime sur le poisson — le jus doit couvrir complètement chaque morceau. Ajouter la pâte ají amarillo, le gingembre râpé, l'ail râpé et la limousine ají. Mélanger très doucement avec une cuillère, tourner le poisson une ou deux fois sans casser les cubes. Ne mélangez pas vigoureusement — vous ne faites pas de salade. Placer le bol directement sur la glace ou au congélateur pendant 2 à 3 minutes. À Lima, ceviche marine seulement 2-3 minutes — le poisson est à peine touché par l'acide, restant presque cru au centre tandis que la couche externe devient opaque. C'est le style Limeño : vital et immédiat, consommé dès qu'il est prêt. Le jus de lime qui reste, maintenant chargé d'essence de poisson, de chaleur ají, de gingembre et de saumure, est la leche de tigre. C'est l'un des liquides les plus savoureux de toute la cuisson.",
      "visualCue": {
        "primaryTarget": "Les cubes de poisson sont blancs opaques au bord très extérieur, de 1 à 2 mm de profondeur, avec un intérieur translucide à peine touché. Le jus de chaux est devenu légèrement trouble et laiteux à partir de protéines de poisson — c'est la leche de tigre qui se forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poissons sont encore complètement translucides. La chaux est parfaitement claire sans nuage. Moins d'une minute s'est écoulée.",
            "action": "Le poisson est essentiellement sashimi — encore excellent si l'on utilise des sushis. Jetez encore une fois et goûtez — servez si la saveur est bonne pour vous."
          },
          {
            "state": "Perfect",
            "description": "1–2 mm bord opaque sur chaque cube. L'intérieur est toujours translucide. La chaux est laiteuse et nuageuse avec la leche de tigre. Le poisson sent propre et agrumes-brillant.",
            "action": "Ajoutez immédiatement l'oignon et la coriandre et servez - chaque seconde de retard cueille le poisson."
          },
          {
            "state": "Overdone",
            "description": "Les cubes de poisson sont entièrement blancs et opaques tout au long, commençant à paraître crayeux et secs plutôt que lumineux et translucides.",
            "action": "Servir immédiatement. Le remède classique de 2 minutes a été dépassé — le poisson est entièrement cuit à l'acide, plus comme un ceviche traditionnel à longue durée de vie. Toujours bonne, texture différente."
          }
        ]
      },
      "feelCue": "Ramassez un cube de poisson de la chaux — la surface extérieure doit se sentir légèrement tendue, presque printanière, tandis que le centre, lorsqu'il est pressé, donne comme du poisson cru. L'odeur qui sort du bol devrait vous frapper comme une vague: la chaux pure, le feu vert de l'ají, et l'odeur propre de l'océan de poissons très frais."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "leche_de_tigre",
        "macerated_onion",
        "ing_07",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_ceviche",
      "instructions": "Travailler rapidement — au moment où vous arrêtez de bouger, le poisson continue de guérir — ajouter les tranches d'oignon macérées directement dans le bol de ceviche. Ajouter les feuilles de coriandre entières ou délicatement déchirées, jamais hachées (ecchymoses de coriandre coupées et sombres). Jetez tout ensemble avec deux cuillères, en utilisant trois ou quatre mouvements de levage doux. Goûtez la leche de tigre et assaisonnez-la : elle doit être explosivement aigre-salée-chaud, mais la chaleur doit se construire plutôt qu'embuscade. Si c'est trop acide, une pincée de sucre aide; si trop plat, plus de sel. Divisez immédiatement entre deux bols réfrigérés. Éventails de patates douces bouillies d'un côté – la douceur de la camote est le contrepoids traditionnel au poisson acide et le repos textural de votre palais a besoin. Scatter cancha ou chiffres sur le dessus pour croquer. Servir dans les 30 secondes suivant le placage. Ceviche n'attend pas. Invitez vos invités à boire la leche de tigre du bol.",
      "visualCue": {
        "primaryTarget": "Un bol vif et coloré : des cubes de poisson blanc contre l'oignon rose vif, des flecks de coriandre verte et une patate douce orange au bord. La piscine de leche de tigre est nuageuse et blanche d'or pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants sont dans le bol mais pas encore jetés — tout est assis dans des sections séparées.",
            "action": "Mélanger doucement trois fois et servir immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Des couleurs bien réparties. Poisson, oignon et coriandre sont également combinés. Leche de tigre pooled à la base du bol, nuageux et parfumé.",
            "action": "Servir dans les 30 secondes suivantes. Ne pas ajouter de garnitures avant."
          },
          {
            "state": "Overdone",
            "description": "Vous avez passé trop de temps à poser et le poisson a continué à guérir dans la chaux — il est maintenant complètement opaque et la coriandre s'est flétrie.",
            "action": "Servir immédiatement, peu importe. La saveur est encore spectaculaire même si la texture est légèrement plus ferme."
          }
        ]
      },
      "feelCue": "Un bol parfait de ceviche clásico devrait sentir froid dans vos mains, le froid rayonnant à travers la céramique. La première cuillerée devrait donner un coup de chaleur froide acide qui fait vos yeux arroser légèrement — puis la douceur du poisson en dessous, puis la lente brûlure de l'ají, puis la croûte de la canche tirant tout ensemble."
    }
  ]
};
