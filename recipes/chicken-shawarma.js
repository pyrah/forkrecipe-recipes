export default {
  "repoId": "master_middleeastern_chickenshawarma_001",
  "parentRepoId": null,
  "slug": "chicken-shawarma",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet Shawarma",
  "description": "Les cuisses de poulet épicées, parfumées d'herbe, rôtissaient lentement jusqu'à ce que leurs bords attrapent l'omble et l'omble, puis tranchées minces pour les enveloppements — épices chaudes, croûte caramélisée, intérieur juteux.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "proteins",
  "tags": [
    "poulet",
    "Moyen-Orient",
    "lévantine",
    "Shawarma",
    "grillés",
    "épicé",
    "enveloppe"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisses de poulet désossées, sans peau",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses désossées sans peau (moins d'omble mais toujours bonnes)",
        "pilons de poulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein de gras",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "labneh éclairci avec de l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail hachées à pâte",
      "ratioValue": 5,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Cardamome au sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "shawarma_marinade",
      "instructions": "Mélanger le yaourt, le jus de citron, l'ail, toutes les épices, l'huile d'olive et le sel dans un grand bol. Whisk jusqu'à ce que pleinement intégré — le curcuma le tournera jaune doré, l'orange paprika, et la cannelle l'approfondira à une ambre chaude. Le yogourt agit à la fois en tant qu'affilié et en tant que revêtement qui maintient les épices contre la viande pendant la cuisson. Bouche : il doit être légèrement épicé et légèrement aiguisé.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, dorée-orange avec un arôme chaud et complexe. Uniforme sans poches d'épices sèches ni grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches épicées visibles comme des stries foncées. Pool de jus de citron séparément. L'ail en morceaux.",
            "action": "Plus vigoureusement. Finir l'ail pour permettre une intégration complète."
          },
          {
            "state": "Perfect",
            "description": "Une marinade épaisse, lisse et uniforme de la couleur de l'argile safran. L'arôme est chaud et complexe — cumin vers l'avant, avec des notes d'épices douces.",
            "action": "Noter le poulet et l'ajouter immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La marinade a préparé des heures à l'avance et l'acide a provoqué la séparation des protéines de yogourt — aqueuses avec des caillés blancs.",
            "action": "Retourner ensemble avant d'utiliser. La saveur est inchangée."
          }
        ]
      },
      "feelCue": "Frottez un bout de doigt à travers la marinade — il devrait enrober la peau comme une tache légère, riche et parfumée, et le yogourt devrait se sentir assez épais pour s'accrocher sans goutter."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "shawarma_marinade"
      ],
      "outputState": "marinated_shawarma",
      "instructions": "À l'aide d'un couteau tranchant, marquer chaque cuisse de poulet avec trois coupes diagonales profondes à travers la chair à l'os, environ 1 cm de profondeur. Cela permet à la marinade d'épices de pénétrer et augmente considérablement la surface de l'ombrage. Coat les cuisses soigneusement dans la marinade, en travaillant dans les coupes de score. Emballez bien dans un récipient ou un sac à fermeture éclair, pressez l'air et réfrigérez pendant au moins 4 heures.",
      "visualCue": {
        "primaryTarget": "Chaque surface du poulet, y compris à l'intérieur des découpes, est recouverte de la marinade dorée-orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coupures sont non remplies — marinade assise sur la surface seulement. Le dessous des cuisses est pâle et non traité.",
            "action": "Travaillez la marinade dans les découpes avec vos doigts. Flip chaque pièce et enrober le dessous."
          },
          {
            "state": "Perfect",
            "description": "Après 4 heures et plus: la marinade a taché dans la chair aux bords coupés, qui montrent une couleur dorée-orange. La surface est sèche au toucher — la marinade a été absorbée.",
            "action": "Porter à la température ambiante 30 minutes avant la torréfaction."
          },
          {
            "state": "Overdone",
            "description": "Mariné 36+ heures — l'acide citron a commencé à dénaturé les protéines de surface. La chair aux bords coupés est musquée.",
            "action": "Cuire immédiatement. L'intérieur ira bien."
          }
        ]
      },
      "feelCue": "Appuyez sur les pointes ouvertes — la marinade intérieure devrait se sentir épaisse et pâteuse, pas aqueuse. La surface du poulet doit se sentir collante, tenant la marinade sans qu'elle glisse."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "marinated_shawarma"
      ],
      "outputState": "roasted_shawarma",
      "instructions": "Préchauffer le four à 230°C (450°F) avec une grille dans le tiers supérieur. Placez les cuisses marinées côté peau sur un support de fil placé sur une plaque de cuisson doublée d'une feuille de papier — le support permet à l'air chaud de circuler et le gras de s'écouler, en concentrant la croûte. Faire cuire 25 à 30 minutes jusqu'à ce que la température interne soit de 75 °C et que la peau soit profondément carbonisée et caramélisée aux bords. Le revêtement d'épices devrait être presque brûlé aux points les plus hauts.",
      "visualCue": {
        "primaryTarget": "Croûte acajou profonde avec de l'omble presque noir aux bords marqués et aux crêtes cutanées. Le revêtement d'épices a caramélisé à une surface sèche, presque laquée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface pâle et humide. Marinade encore visiblement humide. Pas de caramélisation sur la peau. Température intérieure inférieure à 68°C.",
            "action": "Retourner au four et passer à griller pour les 3-5 dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Char presque noir aux bords marqués, profondément brun partout ailleurs. La peau est tendue et sèche. La graisse a rendu et carbonisé aux pourboires. Température intérieure 75°C+.",
            "action": "Reposez-vous 5 minutes, puis coupez le grain sur une planche à découper."
          },
          {
            "state": "Overdone",
            "description": "Toujours très sombre avec une odeur amère. Les jus de pan ont carbonisé.",
            "action": "Éliminez l'extérieur le plus brûlé. La chair en dessous sera bonne. Servir avec un supplément de citron et de toum pour éclaircir."
          }
        ]
      },
      "feelCue": "Appuyez sur la cuisse la plus épaisse avec le doigt — elle doit se sentir ferme sans donner du tout, et les jus, quand la viande est percée, doivent courir clair-ambre. La surface carbonisée doit être sèche et rigide sous votre bout de doigt."
    },
    {
      "nodeId": "step_4",
      "action": "Tranche",
      "inputs": [
        "roasted_shawarma"
      ],
      "outputState": "finished_shawarma",
      "instructions": "Reposez-vous 5 minutes. Couper les cuisses finement sur le biais, couper à travers le grain, recueillir les tranches dans une pile sur la planche. Faites glisser la lame à plat sur la planche à découper pour ramasser toute croûte d'épices carbonisées qui s'éclabousse — ces morceaux intensément aromatisés sont la meilleure partie. Servir dans du pain plat avec de la sauce à l'ail (toum), des légumes marinés et du persil frais.",
      "visualCue": {
        "primaryTarget": "Des tranches minces, caramélisées dans des nuances mélangées — intérieur doré, extérieur à bords d'acajou — avec des morceaux d'épices carbonisées éparpillés à travers la planche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des tranches épaisses et inégales montrant du rose au centre.",
            "action": "Retourner les morceaux non coupés au four pendant 5 minutes si le rose est présent."
          },
          {
            "state": "Perfect",
            "description": "Intérieur ivoire-or uniformément cuit avec un extérieur carbonisé et épicé sur chaque tranche. Les jus sont dorés et parfumés.",
            "action": "Servir immédiatement — le shawarma est le meilleur chaud, la croûte encore craquelée."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont sèches et déchiquetées plutôt que de couper proprement.",
            "action": "Pile sur la planche et bruine avec une cuillère à soupe de la poêle chaude gouttes à remous."
          }
        ]
      },
      "feelCue": "Une tranche doit se sentir chaude et juteuse lorsqu'elle est pressée entre deux doigts, avec un contraste textural distinct entre l'intérieur doux et l'extérieur légèrement croquant et croustillant."
    }
  ]
};
