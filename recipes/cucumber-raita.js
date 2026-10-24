export default {
  "repoId": "master_indian_cucumberraita_001",
  "parentRepoId": null,
  "slug": "cucumber-raita",
  "author": "ForkRecipe Kitchen",
  "title": "Cucumber Raita",
  "description": "Le grand contrepoint de refroidissement de l'Inde — yogourt épais froid plié avec du concombre râpé, du cumin fleuri, de la menthe fraîche et de la coriandre dans un condiment qui apporte la paix à tout curry ardent ou biryani qu'il accompagne.",
  "cuisine": "Indiens",
  "culture": "Indiens",
  "category": "condiments",
  "tags": [
    "condiments",
    "indienne",
    "yaourt",
    "concombre",
    "Raita",
    "végétarien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt plein de matières grasses (strained ou style grec)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "yogourt régulier de lait entier, souche 30 min"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Concombre anglais, râpé sur de grands trous",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Concombre perse",
        "concombre régulier ensemencé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "1/2 cumin moulu"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de menthe fraîches, hachées finement",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "menthe séchée (la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), finement hachée",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Filtrer",
      "inputs": [
        "ing_02",
        "ing_06"
      ],
      "outputState": "drained_cucumber",
      "instructions": "Grattez le concombre sur les grands trous d'un grater de boîte. Saupoudrer de la moitié du sel et jeter. Placer dans une calandre ou envelopper dans une serviette de cuisine propre et presser le plus de liquide possible — vraiment compresser. Laisser égoutter pendant 10 minutes, puis presser à nouveau. Un seul concombre contient une quantité surprenante d'eau; il empêche une raita aqueuse.",
      "visualCue": {
        "primaryTarget": "Le concombre réduit à environ la moitié de son volume original, vert pâle, compacté — encore identifiable comme concombre mais beaucoup plus sec.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le concombre est encore humide et goutte à goutte. Tu peux arracher plus d'eau.",
            "action": "Continuez à presser. Appuyez entre deux assiettes avec un poids sur le dessus pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le concombre coule à peine lorsqu'il est pressé dans le poing. Toujours vert et frais. On dirait une éponge comprimée.",
            "action": "Plier dans le yaourt."
          },
          {
            "state": "Overdone",
            "description": "On ne peut pas trop drainer le concombre — mais s'il est assis dans du sel pendant plus de 30 minutes, il a un goût trop salé.",
            "action": "Rincer rapidement sous l'eau froide et presser à nouveau avant d'ajouter au yogourt."
          }
        ]
      },
      "feelCue": "Serrez le concombre râpé dans votre poing — il devrait se sentir comme le sable humide compresser, et un flux d'eau verte pâle devrait s'épuiser."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "ing_03"
      ],
      "outputState": "bloomed_cumin",
      "instructions": "Faire cuire les graines de cumin dans une petite poêle sèche à feu moyen pendant 60 à 90 secondes, en tremblant constamment, jusqu'à ce qu'elles s'assombrissent et commencent à éclater. Broyer immédiatement grossièrement dans un mortier ou entre deux cuillères. La chaleur transforme la saveur brute et légèrement dure du cumin en une note aromatique chaude et noisette.",
      "visualCue": {
        "primaryTarget": "Graines foncées à un brun chaud, pas de noir, libérant un arôme d'épice chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Graines encore pâles et herbeuses. Pas d'obscurité visible.",
            "action": "Continuer à feu moyen."
          },
          {
            "state": "Perfect",
            "description": "Brun foncé, parfumé, un ou deux ont sauté. La cuisine sent les épices chaudes.",
            "action": "Graisser immédiatement et ajouter au yaourt."
          },
          {
            "state": "Overdone",
            "description": "Noir et fumer. Une odeur amère.",
            "action": "Jeter et recommencer."
          }
        ]
      },
      "feelCue": "L'odeur du cumin grillé est incomparable: terreux, chaud, légèrement fumé. Si vous ne pouvez pas le sentir fortement de bras, il a besoin de plus de chaleur."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "ing_01",
        "drained_cucumber",
        "bloomed_cumin",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "finished_cucumber_raita",
      "instructions": "Dans un bol, mélanger le yaourt, le concombre égoutté, le cumin fleuri, la menthe, la coriandre, la coriandre moulue et le sel restant. Plier doucement — ne pas s'écraser dans une pâte lisse. La texture doit être cuillerable avec des taches d'herbe visibles et des brins de concombre. Goûtez et ajustez le sel. Réfrigérer pendant 15 minutes avant de servir — le reste permet aux saveurs de fondre.",
      "visualCue": {
        "primaryTarget": "Un condiment épais, tacheté de vert blanc, à base de yogourt, avec menthe visible, coriandre, concombre et cumin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le concombre est encore trop humide — la raita est liquide après 2 minutes dans le bol.",
            "action": "Égoutter la raita en appuyant sur une souche, ou ajouter plus de yogourt pour absorber le liquide."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, frais, aromatique. Il tient sa forme sur une cuillère. Des taches visibles d'herbe verte. Goûte simultanément refroidir et aromatisé.",
            "action": "Servir à froid aux côtés des viandes biryani, curry ou grillées."
          },
          {
            "state": "Overdone",
            "description": "Extirpée dans une purée lisse. Un uniforme texturé et des taches d'herbe non reconnaissables.",
            "action": "Toujours délicieux. Ajouter un pli de dernière minute de menthe fraîche pour la texture."
          }
        ]
      },
      "feelCue": "Une cuillère doit se sentir fraîche et épaisse, avec une légère résistance — yogourt-épaisseur, non versable. S'il s'échappe de la cuillère, le concombre n'a pas été suffisamment drainé."
    }
  ]
};
