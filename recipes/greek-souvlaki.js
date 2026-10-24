export default {
  "repoId": "master_greek_greeksouvlaki_001",
  "parentRepoId": null,
  "slug": "greek-souvlaki",
  "author": "ForkRecipe Kitchen",
  "title": "Souvlaki grec",
  "description": "Les cubes d'épaule de porc trempés pendant la nuit dans l'huile d'olive, le citron et l'origan, puis filetés sur des brochettes et grillés à feu vif jusqu'à ce que les chars extérieurs et l'intérieur restent tendres et juteux — la nourriture de rue athénienne à son plus élémentaire.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "proteins",
  "tags": [
    "protéine",
    "porc",
    "grec",
    "grillé",
    "brochette",
    "herbe"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "8 hours 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Epaule de porc, coupée en cubes de 3 cm",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "longe de porc",
        "cuisse de poulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Origan grec séché (rigani)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "Origan italien (utiliser plus)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Coins de citron, pour servir",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "marinated_pork",
      "instructions": "Dans un bol, fouetter l'huile d'olive, le jus de citron, l'origan, l'ail haché, le thym, le sel et le poivre. L'émulsion ne tiendra pas longtemps, mais c'est très bien — elle doit simplement être enrobée. Ajouter les cubes de porc et mélanger soigneusement. Transférer dans un sac à fermeture éclair ou un contenant scellé. Faire mariner au réfrigérateur pendant au moins 4 heures, idéalement pendant la nuit (8 à 12 heures). Le jus de citron commencera à dénaturer la protéine de surface, qui crée une meilleure texture pour l'ombrage. Au-delà de 24 heures, l'acide devient agressif et la texture souffre.",
      "visualCue": {
        "primaryTarget": "cubes de porc enrobés d'une marinade parfumée de vert doré aux herbes visibles et à l'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 1 à 2 heures, la marinade n'a pas pénétré. Le porc semble pâle et le revêtement est mince.",
            "action": "Continuez à mariner. Le minimum pour une pénétration significative de la saveur est de 4 heures."
          },
          {
            "state": "Perfect",
            "description": "Après 8 à 12 heures, le porc a pris une texture légèrement resserrée et l'huile d'olive est trempée. Les cubes sentent fortement l'origan et le citron.",
            "action": "Retirer du réfrigérateur 30 minutes avant de griller pour enlever le froid."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 24 heures, la surface du porc semble grise et légèrement cuite à partir de l'acide.",
            "action": "Cuire immédiatement et s'attendre à ce que la texture soit légèrement plus douce que l'idéal."
          }
        ]
      },
      "feelCue": "Le porc mariné doit se sentir ferme mais légèrement lissé avec de l'huile d'olive. Si elle se sent douce et musquée, l'acide est allé trop loin et a cassé la protéine."
    },
    {
      "nodeId": "step_2",
      "action": "Griller",
      "inputs": [
        "marinated_pork"
      ],
      "outputState": "grilled_souvlaki",
      "instructions": "Fixez les cubes de porc sur des brochettes métalliques (ou en bois trempé), de 5 à 6 pièces par brochette, laissant un petit espace entre chaque cube. Chauffer le gril ou le gril jusqu'à son emplacement le plus haut — vous voulez une cuisson immédiate, pas lente. Griller 3 à 4 minutes de chaque côté (12 à 15 minutes au total, tourner toutes les 3 minutes à travers les quatre faces). Le but est l'omble sur l'extérieur tandis que l'intérieur reste juste cuit à travers et humide. Ne couvrez pas la grille — vous voulez de la chaleur directe rayonnante, pas l'effet de vapeur d'un couvercle fermé.",
      "visualCue": {
        "primaryTarget": "Des traces de char sur chaque visage. Les bords extérieurs sont obscurcis et parfumés d'origan brûlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface pâle, grise et à la vapeur. Pas de marques de caractères. Le porc libère de l'eau plutôt que de la caramélisation.",
            "action": "Augmentez considérablement la chaleur. Souvlaki a besoin de violence, pas de cuisine douce."
          },
          {
            "state": "Perfect",
            "description": "Des marques de char sur chaque visage. Les bords sont sombres et parfumés. Lorsqu'il est coupé, l'intérieur est blanc cassé et juteux, pas rose. L'odeur d'origan et de citron est grillée et captive.",
            "action": "Retirer du gril et reposer 2 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Les cubes sont très sombres partout, rétrécis de façon significative. Ils se sentent durs quand ils sont pressés avec des pinces.",
            "action": "Servir immédiatement avec beaucoup de jus de citron pour réintroduire l'acide et l'humidité."
          }
        ]
      },
      "feelCue": "Appuyez sur un cube avec vos pinces — il devrait donner avec une résistance modérée, comme un oreiller ferme, pas une pierre ou une éponge. Sentez la chaleur rayonnant de l'omble lorsque votre main passe 5cm au-dessus de la brochette."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "grilled_souvlaki",
        "ing_08"
      ],
      "outputState": "finished_souvlaki",
      "instructions": "Servir les brochettes immédiatement avec des coins de citron, du pain pita chaud, du tzatziki, de la tomate tranchée et de l'oignon rouge. Dans la tradition grecque de la nourriture de rue, le porc peut être glissé de la brochette directement dans la pita. Pressez généreusement le citron à table — l'acide frais est essentiel pour équilibrer l'omble.",
      "visualCue": {
        "primaryTarget": "Les cubes de porc aux caractères profonds scintillent avec leurs propres jus, éparpillés d'origan séché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est assis et refroidit sur la brochette. La vapeur ne monte plus.",
            "action": "Retourner à la grille pendant 60 secondes par visage pour réchauffer."
          },
          {
            "state": "Perfect",
            "description": "Le porc est chaud, vapeur, parfumé. Char est croquant et audible quand mordu. L'intérieur est humide et simplement cuit.",
            "action": "Servir immédiatement avec du citron."
          },
          {
            "state": "Overdone",
            "description": "Le porc a continué à cuire hors chauffage ou s'est assis trop longtemps et est maintenant sec.",
            "action": "Arroser d'huile d'olive et de citron pour réintroduire l'humidité avant de servir."
          }
        ]
      },
      "feelCue": "Le souvlaki doit sentir comme un été grec: la viande carbonisée, l'origan brûlé, et la piqûre de citron frais, le tout à la fois."
    }
  ]
};
