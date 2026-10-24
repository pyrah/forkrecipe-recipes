export default {
  "repoId": "master_german_germansauerkraut_001",
  "parentRepoId": null,
  "slug": "german-sauerkraut",
  "author": "ForkRecipe Kitchen",
  "title": "Sauerkraut allemand",
  "description": "Le chou blanc et le sel — rien d'autre — massé jusqu'à ce que le chou abandonne sa propre saumure, puis scellé sous la surface pendant des semaines tandis que les bactéries sauvages le transforment en quelque chose de fortement aigre, profondément funky, et vivant avec des probiotiques.",
  "cuisine": "Allemand",
  "culture": "Allemand",
  "category": "fermented",
  "tags": [
    "fermenté",
    "végétalien",
    "Sans gluten",
    "Choux",
    "allemand",
    "lacto",
    "probiotique"
  ],
  "difficulty": 1,
  "activeTime": "30 min",
  "totalTime": "21 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 5,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux blancs (tête, feuilles extérieures réservées)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Choux savoy",
        "chou rouge"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer fin non iodé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher — sel iodé inhibe la fermentation"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de carvi (facultatif)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "baies de genièvre",
        "graines de fenouil"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Tranche",
      "inputs": [
        "ing_01"
      ],
      "outputState": "shredded_cabbage",
      "instructions": "Retirer et réserver les feuilles extérieures (2-3) du chou — celles-ci seront utilisées pour couvrir le ferment. Quartez le chou, retirez le noyau et déchiquetez le plus fin possible — idéalement 2-3mm — en utilisant une mandoline ou un couteau tranchant. Les râpes minces ferment plus uniformément et ont une meilleure texture finale que les morceaux épais. Peser le chou déchiqueté après avoir enlevé le noyau et les feuilles extérieures.",
      "visualCue": {
        "primaryTarget": "Des morceaux uniformes de chou blanc pâle et fin, sans morceaux épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Déchiquetées épaisses et inégales mélangées à de gros morceaux. Les pièces de base sont toujours présentes.",
            "action": "Reformer les morceaux plus épais. Les pièces de base ferment inégalement et restent croquantes."
          },
          {
            "state": "Perfect",
            "description": "Des lambeaux uniformes et fins de 2-3mm. La pile est légère et aérée. Pas de morceaux de cœur.",
            "action": "Transférer dans un grand bol et ajouter le sel."
          },
          {
            "state": "Overdone",
            "description": "Les chrysalides sont si minces qu'ils sont presque translucides et commencent à être meurtris par le couteau.",
            "action": "Poignez doucement. Les lambeaux très fins seront encore fermentés parfaitement mais peuvent être plus doux dans la texture."
          }
        ]
      },
      "feelCue": "Le chou déchiqueté doit se sentir sec et légèrement cireux avant de saler — chaque brin indépendant et printemps."
    },
    {
      "nodeId": "step_2",
      "action": "Cure",
      "inputs": [
        "shredded_cabbage",
        "ing_02",
        "ing_03"
      ],
      "outputState": "salted_cabbage_with_brine",
      "instructions": "Saupoudrer le sel uniformément sur le chou déchiqueté et ajouter les graines de carvi si vous l'utilisez. Laissez reposer le sel sur le chou pendant 3-5 minutes — vous verrez apparaître l'humidité. Puis masser vigoureusement avec des mains propres, presser et écraser le chou à plusieurs reprises. Travaillez toute la masse pendant 10-15 minutes jusqu'à ce que le chou ait libéré une quantité importante de saumure — assez pour mettre en réserve dans le fond du bol. Le chou aurait dû flétrir jusqu'à environ la moitié de son volume initial.",
      "visualCue": {
        "primaryTarget": "Des brins de chou translucides, enroulés dans une flaque de saumure. Le volume a environ diminué de moitié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement quelques gouttes de liquide au fond. Le chou est toujours croquant et opaque. Le volume a à peine diminué.",
            "action": "Massage pendant encore 5-10 minutes. Soyez fermes — vous ecchymosez les parois cellulaires pour libérer l'humidité."
          },
          {
            "state": "Perfect",
            "description": "Un bassin important de saumure claire au fond du bol. Le chou a flétri jusqu'à environ la moitié de son volume original. Les brins sont translucides et boiteux. Quand une poignée est pressée, la saumure coule.",
            "action": "Emballez dans un pot propre immédiatement, en appuyant fermement."
          },
          {
            "state": "Overdone",
            "description": "Le chou est musqué et fragmenté. Trop de bleus physiques ont brisé les brins.",
            "action": "Fais-le quand même. La texture sera plus douce mais le développement de la saveur sera identique."
          }
        ]
      },
      "feelCue": "Pressez fermement une poignée — la saumure devrait s'écouler librement entre vos doigts, comme si vous tapiez une éponge mouillée. Si vous n'obtenez que des gouttes, continuez à masser."
    },
    {
      "nodeId": "step_3",
      "action": "Appuyez sur",
      "inputs": [
        "salted_cabbage_with_brine"
      ],
      "outputState": "packed_raw_sauerkraut",
      "instructions": "Emballez le chou salé dans un pot propre de 1 litre ou une croûte de fermentation, une poignée à la fois, appuyez fermement avec votre poing après chaque ajout pour le compacter et faire monter la saumure. Verser toute saumure restante dans le bol sur le chou emballé. Placer les feuilles extérieures réservées à plat sur la surface pour créer une barrière physique. Utilisez un poids (un petit pot rempli d'eau, un sac de saumure zippée ou un poids de fermentation) pour garder tout immergé sous la saumure. La saumure DOIT couvrir tout le chou — tout chou exposé à l'air ne ferment pas correctement. Laisser 5cm de l'espace de tête.",
      "visualCue": {
        "primaryTarget": "Choux hermétiquement emballés entièrement immergés sous une saumure claire avec des capuchons de feuilles et un poids en place.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Choux légèrement emballés avec des poches d'air. Certains choux sont au-dessus de la saumure.",
            "action": "Appuyez beaucoup plus fort. Emballage en petits lots et utiliser plus de pression de poing pour expulser l'air et élever la saumure."
          },
          {
            "state": "Perfect",
            "description": "Conditionnement dense et uniforme avec saumure couvrant le chou d'au moins 1 cm. Le capuchon extérieur est plat et le poids le retient. Aucune bulle d'air visible dans la masse.",
            "action": "Couvrir d'un chiffon ou d'un couvercle laissé en jarre et laisser à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Le pot est rempli jusqu'au sommet, sans espace de tête. La saumure déborde à mesure que la fermentation produit du CO2.",
            "action": "Transférer un peu de chou dans un second pot, en maintenant le ratio saumure-couverture."
          }
        ]
      },
      "feelCue": "Appuyez sur le chou emballé avec un poing propre — la saumure devrait monter au-dessus du niveau du poids, puis se déposer en arrière lorsque vous relâchez. Cette saumure montante est votre signal de succès."
    },
    {
      "nodeId": "step_4",
      "action": "Ferment",
      "inputs": [
        "packed_raw_sauerkraut"
      ],
      "outputState": "finished_sauerkraut",
      "instructions": "Ferment à température ambiante, idéalement de 18-22°C (65-72°F), pendant 1 à 4 semaines. Vérifiez chaque jour pendant la première semaine : pressez le chou sous la saumure, écrémez n'importe quel film blanc de la surface (c'est une levure inoffensive de kahm – le retirer), et faites bouillir toute accumulation de gaz. Après 3-5 jours, de minuscules bulles apparaîtront et la saumure sera légèrement trouble — la fermentation est active. Goûtez tous les jours du jour 7. À 1 semaine, la choucroute sera légèrement aigre et encore croquante. A 2 semaines, il développe plus de complexité. À 3-4 semaines, il est profondément aigre, complexe et parfaitement mature. Réfrigérer quand il atteint votre saveur préférée, où il conservera pendant des mois.",
      "visualCue": {
        "primaryTarget": "Saumure nuageuse avec de fines bulles qui s'élèvent à travers elle. Le chou a pris une teinte jaune-blanc. Le pot sent l'acide acétique aigu et la fermentation lactique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Saumure claire. Pas de bulles. Les choux sont encore frais. Pas d'aurore dans le goût — juste du chou cru salé.",
            "action": "Assurez-vous que la température est supérieure à 18°C et que le chou est complètement submergé. La fermentation active doit commencer dans les 24-48 heures."
          },
          {
            "state": "Perfect",
            "description": "La saumure est nettement trouble. De belles bulles visibles. L'aroma est agréable, aigre et funky — sans aucun doute de la choucroute. Le goût est tarte, salé et croquant. Pas d'odeurs défectueuses (molle, putréfaction).",
            "action": "Réfrigérer à ce point pour un produit légèrement fermenté, ou continuer pour une saveur plus profonde."
          },
          {
            "state": "Overdone",
            "description": "Très agressivement aigre, presque acide. Le chou est doux et presque moelleux. La saumure est très nuageuse.",
            "action": "Réfrigérer immédiatement. La choucroute très aigre est encore excellente et se maintient bien — la saveur ne va tout simplement pas se développer plus considérablement."
          }
        ]
      },
      "feelCue": "Ouvrez le pot après 3 jours — vous devriez entendre un sifflement faible et sentir un arôme propre, agréablement aigre. Appuyez sur le chou et sentir de fines bulles libérer. Tout désodorisant au-delà de l'auresse agréable (molle, putréfaction, pourriture) est un signe à jeter."
    }
  ]
};
