export default {
  "repoId": "master_chinese_cold_sesame_noodles_001",
  "parentRepoId": null,
  "slug": "cold-sesame-noodles",
  "author": "ForkRecipe Kitchen",
  "title": "Nouilles de sésame froides",
  "description": "Nouilles de blé, cuites et refroidies, jetées dans une sauce de tahini et de sésame chinois, soja, vinaigre noir, huile de chili, et un murmure de sucre — noix, saline, aigre, et chaud tout à la fois, une sauce si bonne que vous voulez boire. Le concombre julienne et le pétoncle ajoutent de la croûte et de la luminosité verte contre les nouilles glissantes.",
  "cuisine": "Chinois",
  "culture": "Sichuan-Américain",
  "category": "grains",
  "tags": [
    "Chinois",
    "nouilles",
    "sésame",
    "froid",
    "été",
    "Vite",
    "végétalien-adaptable",
    "arachide"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Nouilles de blé chinois fraîches ou séchées (épaisseur moyenne)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "nouilles soba",
        "linguine dans une pincée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Pâte de sésame chinoise (zhima jiang) ou tahini",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "beurre d'arachide pour une variation différente"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vinaigre de riz noir Chinkiang",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin de riz (moins complexe)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Huile de Chili (avec sédiments)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sambal oelek + huile de sésame"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Giroves à l'ail, finement râpées",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Huile de sésame grillée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Hydration",
      "name": "Eau chaude (à la sauce fine)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Eau de cuisson des nouilles"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Concombre, julienned en minces allumettes",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Choux de haricots blanchis"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Échalote, tranchée finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_noodles",
      "instructions": "Portez une grande casserole d'eau non salée à ébullition. Ajouter les nouilles et cuire selon l'emballage — généralement 3 à 5 minutes pour sécher, 1 à 2 minutes pour frais. Vous voulez qu'ils soient tendres, mais avec une très légère résistance, pas musquées, car ils continueront à se ramollir dans la sauce. Égoutter immédiatement et rincer abondamment sous l'eau froide jusqu'à ce qu'elle soit complètement froide. Cela arrête la cuisson et élimine l'excès d'amidon qui les rend gommés. Mélanger avec une cuillère à café d'huile de sésame pour éviter de coller.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont uniformément pâles, légèrement luisantes de l'huile de sésame, séparées et fraîches au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles ont un centre blanc dur et craie lorsqu'elles sont mordues.",
            "action": "Revenez à l'eau bouillante pendant 1 minute de plus."
          },
          {
            "state": "Perfect",
            "description": "Prêter avec un léger mâcher, complètement froid, brins séparés qui ne s'agrippent pas.",
            "action": "Transférer dans un grand bol pour faire sauter."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont très douces et légèrement gommées même après le rinçage.",
            "action": "Procéder — la sauce masquera une partie de la texture, et une nouille froide se raffermit toujours légèrement."
          }
        ]
      },
      "feelCue": "Les nouilles rincées doivent se sentir glissantes et froides, presque froides, en courant à travers vos doigts — toute chaleur signifie qu'elles n'ont pas été rincées assez longtemps et continueront à cuisiner."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "sesame_sauce",
      "instructions": "Dans un bol, mélanger la pâte de sésame, la sauce soja, le vinaigre noir, l'huile de chili, le sucre, l'ail râpé et l'huile de sésame. La pâte de sésame peut saisir dans une pâte rigide quand le soja est ajouté pour la première fois — c'est normal. fouetter vigoureusement, puis ajouter l'eau chaude une cuillère à soupe à la fois, fouetter entre les ajouts, jusqu'à ce que la sauce soit lisse, crémeuse et versable mais encore assez épaisse pour enrober une cuillère. Goûtez et ajustez : il doit être intensément salé, noisette, avec une bouchée de vinaigre et une chaleur notable.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, brillante, brun clair qui coule dans un ruban lent et épais de la cuillère — semblable en consistance à une vinaigrette de tahini.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est épaisse, pâteuse et difficile à remuer; elle s'écrasera sur les nouilles plutôt que de les enrober.",
            "action": "fouetter dans de l'eau plus chaude, une cuillère à soupe à la fois, jusqu'à ce qu'elle coule librement."
          },
          {
            "state": "Perfect",
            "description": "Sauce lisse, brillante et crémeuse qui enveloppe l'arrière d'une cuillère et s'écoule dans un ruisseau constant et épais.",
            "action": "Versez les nouilles immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop fine et arrosée — elle sera mise au fond du bol.",
            "action": "Incorporer une autre cuillère à soupe de pâte de sésame pour épaissir."
          }
        ]
      },
      "feelCue": "La sauce finie devrait se sentir soyeuse sur l'extrémité de votre langue avec une chaleur lente, de construire de l'huile de chili — goûter lisse et ajuster les rapports avant de jeter avec des nouilles."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "cooked_noodles",
        "sesame_sauce",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_cold_sesame_noodles",
      "instructions": "Verser la sauce au sésame sur les nouilles froides et jeter fermement avec des pinces ou deux fourchettes, lever et plier jusqu'à ce que chaque brin soit uniformément enduit. La sauce semblera d'abord trop épaisse — continuez à jeter pendant une minute car elle se détache de l'amidon de nouilles. Piler dans les bols et garnir avec le concombre julienne et le pétoncle. Le concombre devrait s'asseoir sur le dessus, non mélangé, donc il reste croustillant. Rincer avec de l'huile de chili supplémentaire si désiré. Servir à température ambiante — ne pas réfrigérer avant de servir.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont uniformément enrobées d'une sauce brun pâle brillante sans brins secs. Le concombre et le pétoncle sont disposés sur le dessus, toujours vibrants et non agités.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est inégale — certaines nouilles sont fortement enrobées et certaines sont sèches et pâles.",
            "action": "Jetez pour plus longtemps, en séparant les nouilles embaumées que vous allez."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin est uniformément recouvert d'une sauce parfumée brillante. Le concombre est croquant et vert vif. Le bol entier sent le sésame, le chili et le vinaigre.",
            "action": "Mangez immédiatement ou dans les 20 minutes pour une meilleure texture."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont assises dans la sauce depuis plus d'une heure — elles ont tout absorbé et semblent à nouveau sèches, le concombre s'est flétri.",
            "action": "Incorporer un peu d'huile de sésame et de soja pour re-coat et ajouter le concombre frais avant de servir."
          }
        ]
      },
      "feelCue": "Un fourche doit être glissant et céder, enrobant vos lèvres d'un film d'huile de sésame et laissant une lente brûlure de l'huile de chili qui se construit sur les 30 prochaines secondes."
    }
  ]
};
