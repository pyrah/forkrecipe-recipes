export default {
  "repoId": "master_indian_rose_lassi_001",
  "parentRepoId": null,
  "slug": "rose-lassi",
  "author": "ForkRecipe Kitchen",
  "title": "Rose Lassi",
  "description": "Une boisson fraîche de yogourt indien du Nord parfumée avec de l'eau de rose et de la cardamome verte, teintée d'un rose blush par une cuillère de sirop de rose, et finie avec une pincée de safran fleuri dans du lait chaud — simultanément refroidissement et aromatique, sa complexité florale s'amplifie avec chaque gorgée.",
  "cuisine": "Indiens",
  "culture": "Punjab",
  "category": "beverages",
  "tags": [
    "Lassi",
    "indienne",
    "yaourt-boissons",
    "rose",
    "Cardamome",
    "safran",
    "panjab",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt plein gras (température ambiante)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Yogourt grec éclairci par 100g de lait",
        "yaourt de noix de coco (vegan)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait entier (froid)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "eau pour un lassi plus léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sirop de rose (Rooh Afza ou similaire)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à soupe de sucre + 1 c. à thé d'eau rose"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Eau de rose (pure, de qualité alimentaire)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "extrait de rose, utiliser la moitié de la quantité"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Gousses de cardamome vert, moulues de graines",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "1/4 c. à thé cardamome pré-planché"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.1,
      "defaultUnit": "g",
      "substitutions": [
        "une pincée de curcuma pour la couleur seulement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Lait chaud (pour la floraison du safran)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "eau chaude"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Pétales de roses séchées et pistaches concassées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "une pincée de cardamome au sol"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Safran à fleurs",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "saffron_milk",
      "instructions": "Coupez les fils de safran entre vos doigts pour les casser en petits morceaux, ce qui augmente considérablement la surface et la quantité de couleur et de saveur extraites. Ajouter le lait chaud (sans bouillir) et remuer. Laisser fleurir 5-10 minutes. Le lait tournera un orangé d'or profond et la pièce se remplira d'un parfum de bon safran, légèrement médicinal et miellé. Une petite pincée de safran est puissante — plus de 5 à 6 fils pour cette quantité rendra le lassi amer et médicinal plutôt que parfumé.",
      "visualCue": {
        "primaryTarget": "Le lait chaud a tourné un or ambre profond, avec des fils de safran visibles flottant. La couleur est vive et saturée, pas jaune pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est à peine teinté, jaune pâle, après moins de 2 minutes de floraison. Petit arôme libéré.",
            "action": "Attendez les 10 minutes. Safran a besoin de temps et de chaleur pour libérer sa couleur et ses composés aromatiques volatils."
          },
          {
            "state": "Perfect",
            "description": "Couleur ambre-or profonde. Une odeur riche et complexe de miel floral. Les fils ont donné la plus grande partie de leur couleur au lait.",
            "action": "Utiliser immédiatement ou refroidir et utiliser plus tard."
          },
          {
            "state": "Overdone",
            "description": "Le lait était trop chaud (brouillant) et les aromatiques les plus volatils du safran ont cuit. Couleur présente mais parfum diminué.",
            "action": "La couleur et une saveur de base de safran restent — utilisez-la. La prochaine fois, utilisez du lait chaud (65 C) non bouillant."
          }
        ]
      },
      "feelCue": "Appuyez sur un fil de safran entre les doigts avant d'ajouter : il devrait tacher immédiatement le bout des doigts de l'orange profonde – c'est le pigment de la crocine. Un fil qui tache à peine est soit vieux ou de mauvaise qualité; le vrai safran (Kashmiri ou espagnol) tache vivement."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "saffron_milk"
      ],
      "outputState": "blended_lassi",
      "instructions": "Mélanger le yogourt, le lait froid, le sirop de rose, l'eau de rose et la cardamome souterraine dans un mélangeur. Ajouter le lait de safran fleuri. Mélanger en haut pendant 90 secondes jusqu'à ce qu'il soit complètement lisse, mousseux et bien combiné. Goût après mélange: la rose doit être proéminente mais pas comme du savon, la cardamome un murmure chaud sur la finale, et le safran doit ajouter une profondeur dorée plutôt qu'une note médicinale. Ajustez la douceur avec une touche plus de sirop de rose si nécessaire. Le lassi doit être versable mais crémeux — si trop épais, ajouter le lait froid une cuillère à soupe à la fois.",
      "visualCue": {
        "primaryTarget": "Une boisson mousseuse, rose-bleu à orange pâle avec un bouchon épais en mousse, mélangée si bien qu'elle ne présente pas de morceaux de yaourt ou de stries non mélangées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Épais, grumeux, sans nuance. Yogourt visible. Les couches d'ingrédients ne sont pas entièrement mélangées.",
            "action": "Mélanger encore 60 secondes à haute vitesse jusqu'à ce qu'il soit complètement lisse et mousseux."
          },
          {
            "state": "Perfect",
            "description": "Uniformement orange-rose, mousseux, doux. Goûte floral, doux, frais et complexe. Verse en douceur sans résistance collante.",
            "action": "Verser sur la glace et garnir."
          },
          {
            "state": "Overdone",
            "description": "Surplombée jusqu'à ce qu'elle soit chaude, la glace fond immédiatement. La saveur de la rose a bougé de la chaleur.",
            "action": "Réfrigérer 15 minutes avant de servir sur la glace."
          }
        ]
      },
      "feelCue": "Versez une petite quantité dans votre paume: elle doit couler comme de la crème lourde — lisse, légèrement épaisse, sans grain. L'arôme de la mousse doit être immédiatement et sans équivoque floral: rose dominant, avec la cardamome montant sous elle."
    },
    {
      "nodeId": "step_3",
      "action": "Servir",
      "inputs": [
        "blended_lassi",
        "ing_08"
      ],
      "outputState": "finished_rose_lassi",
      "instructions": "Remplissez les grands verres de glace écrasée. Versez le lassi mélangé sur la glace. La mousse se déposera dans un bouchon épais sur le dessus. Dispersez quelques pétales de rose séchés et des pistaches broyées à travers la mousse pour le contraste de couleur et de texture. Servir immédiatement avec une longue cuillère ou une paille large. Rose lassi ne tient pas bien — la mousse s'installe et la glace dilue dans les 10 minutes, alors servez-la au moment où elle est faite. Au Pendjab, il est servi dans de grands verres d'argile (kulhads) qui ajoutent une note minérale terreuse; un verre réfrigéré est un bon substitut.",
      "visualCue": {
        "primaryTarget": "Un grand verre recouvert de glace concassée et de mousse de lassi rose-bleu, couronné de pétales de rose séchés vifs et de crumble pistache vert pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servi sans glace suffisante ou à température ambiante. Plat, chaud et lourd.",
            "action": "Ajouter la glace concassée et servir dans des verres réfrigérés. Le froid n'est pas esthétique, il change la texture et la douceur perçue."
          },
          {
            "state": "Perfect",
            "description": "Ice-froid, mousseux, aromatique, rose et décoré. La première gorgée est froide et florale; la finale est chaude de cardamome et de safran.",
            "action": "Buvez dans les 5-10 minutes."
          },
          {
            "state": "Overdone",
            "description": "La glace a fondu, la mousse s'est effondrée et la boisson est maintenant aqueuse et diluée.",
            "action": "Si c'est le cas, renouer avec de la glace fraîche et servir à nouveau."
          }
        ]
      },
      "feelCue": "La première gorgée devrait provoquer un choc froid immédiat suivi d'une expansion rapide du parfum de rose à l'arrière du nez — que la floraison de rose rétronasale est ce qui distingue un vrai lassi de rose d'une boisson sucrée de yogourt."
    }
  ]
};
