export default {
  "repoId": "master_spanish_flan_001",
  "parentRepoId": null,
  "slug": "flan",
  "author": "ForkRecipe Kitchen",
  "title": "Flan de Leche",
  "description": "Une crème soyeuse, tremblante, cuite dans un bain d'eau jusqu'à ce qu'elle se couche à peine, puis inversée de sorte que le caramel doux amer pooled dans la base coule sur ses côtés en rivouettes ambres. Le contraste entre le caramel foncé et légèrement amer et la crème aux oeufs pâles et doux est l'un des contrastes les plus élégants de la cuisine espagnole.",
  "cuisine": "Espagnol",
  "culture": "Espagnol",
  "category": "desserts",
  "tags": [
    "Flan",
    "Espagnol",
    "Caramel",
    "Coutard",
    "cuits",
    "Latin"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour le caramel)",
      "ratioValue": 0.75,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau (pour le caramel)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 2,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait condensé sucré",
      "ratioValue": 1,
      "defaultUnit": "can (397g)",
      "substitutions": [
        "lait évaporé + sucre supplémentaire"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Oeufs entiers",
      "ratioValue": 3,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 2,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Haricot à la vanille gratté"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "dark_caramel",
      "instructions": "Mélanger le sucre et l'eau dans une petite casserole lourde à feu moyen-vif. Ne pas remuer — agiter doucement la poêle si nécessaire. Le sirop va buller, puis devenir doré. Veillez attentivement une fois que la couleur commence à se développer; elle s'assombrit rapidement. Retirer du feu lorsqu'il atteint un ambre profond (la couleur du vieux whisky). Verser immédiatement dans la base d'une poêle à gâteau ronde de 20 cm ou de 6 ramequins individuels. Tilt pour enrober uniformément avant les ensembles de caramel.",
      "visualCue": {
        "primaryTarget": "Liquide brun-ambre profond, couleur miel foncé, avec une légère cuillerée de fumée et un arôme de caramel doux et amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "En or pâle, encore sucré. Pas encore de complexité amère. Ça fera un flan très doux.",
            "action": "Continuer la cuisson sur moyenne-élevée — la couleur se développe très rapidement d'ici. Regardez de près."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde — comme une bière foncée. Des odeurs de caramel avec une trace d'amertume. Les bords sont plus foncés que le centre. Une goutte sur une assiette blanche ressemble à de l'acajou.",
            "action": "Retirer immédiatement du feu et verser dans la casserole préparée. Travaillez vite — il va durcir en quelques secondes."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant noir, odeur brûlée acride, bouffées de fumée foncée. Amère et désagréable.",
            "action": "Jeter et recommencer — le caramel brûlé n'est pas échangeable. Nettoyer soigneusement la poêle."
          }
        ]
      },
      "feelCue": "Tenez votre main 10 cm au-dessus de la poêle — vous devriez sentir une chaleur intense et sèche rayonnant du caramel. Cette intensité est le signal qu'elle approche."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "custard_mixture",
      "instructions": "Dans un grand bol, fouettez doucement les œufs et les jaunes — ne battez pas agressivement, car vous voulez éviter d'incorporer de l'air. fouetter le lait condensé, le lait entier, la vanille et le sel jusqu'à ce qu'il soit doux. Retirez tout le mélange à travers un tamis à mailles fines afin d'enlever les fils de chalazae ou d'oeuf. C'est ce qui donne à Flan sa surface parfaitement lisse.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse et doré sans bulles visibles à la surface. Ça verse comme de la crème lourde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Filets d'oeufs visibles dans le mélange, recouverts de mousse de sursaut.",
            "action": "S'il est très mousseux, laisser reposer 5 minutes et écumer la mousse avant de verser."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, sans bulles, uniforme ambre pâle. La surface est immobile et semblable à un miroir. Peau propre dans un tamis fin.",
            "action": "Versez doucement la crème sur le caramel dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "S.O. — Le mélange de crème ne peut pas être exagéré jusqu'à un point de défaillance.",
            "action": "Soucher et écrémer toutes les bulles de surface avec une cuillère avant cuisson."
          }
        ]
      },
      "feelCue": "Exécutez un bout de doigt propre à travers la surface de la crème tendue — il devrait sentir comme toucher la crème chaude, complètement lisse avec zéro grain."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "custard_mixture",
        "dark_caramel"
      ],
      "outputState": "baked_flan",
      "instructions": "Préchauffer le four à 160 C (325 F). Verser doucement la crème sur le caramel dans la poêle. Placez la poêle dans une boîte de cuisson. Verser de l'eau bouillante dans l'étain rôti pour monter à mi-chemin sur les côtés de la poêle à flan — c'est le bain-marie qui assure une chaleur uniforme et douce. Cuire 50 à 60 minutes. Commencez à vérifier à 45 minutes.",
      "visualCue": {
        "primaryTarget": "Un ensemble de crème avec un wobble à peine perceptible au centre même lorsque la poêle est légèrement secouée. Surface dorée pâle sans brunissement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un large oscillation liquide au centre — plus de 4 cm de la surface se déplace fluidement lorsqu'elle est secouée. La surface est encore pâle et liquide.",
            "action": "Retourner au four pendant 10 minutes; vérifier que le niveau du bain d'eau n'est pas sec."
          },
          {
            "state": "Perfect",
            "description": "Une légère et localisée joggle seulement au centre – les bords sont complètement fixés. La surface est légèrement définie et commence à peine à prendre un soupçon de couleur. Un thermomètre au centre lit 77–79 C (170–175 F).",
            "action": "Retirer du bain d'eau. Laisser refroidir à la température ambiante, puis réfrigérer au moins 2 heures (la nuit est idéale)."
          },
          {
            "state": "Overdone",
            "description": "La surface a gonflé et fissuré, est nettement dorée, ou a un anneau de bulles. Custard a craqué — sera granuleux avec un intérieur en nid d'abeille.",
            "action": "Refroidir et réfrigérer; le caramel masquera quelques défauts texturaux. La saveur est encore bonne."
          }
        ]
      },
      "feelCue": "Appuyez très légèrement sur le bord du flan avec un bout de doigt — il devrait avoir envie de toucher de la gelée ferme au bord, tandis que le centre donne toujours et ondule comme un liquide."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "baked_flan"
      ],
      "outputState": "finished_flan",
      "instructions": "Lancez un couteau mince autour du bord du flan pour le desserrer. Déposer une plaque de service à l'eau profonde — plus grande que la poêle — sur le dessus. Dans un mouvement confiant, retourner la poêle sur la plaque. Maintenez 10 secondes, puis soulevez la casserole. Le caramel coule sur les côtés et pool sur la plaque. Si le flan ne se relâche pas, retournez au réfrigérateur pendant 30 minutes et essayez de nouveau.",
      "visualCue": {
        "primaryTarget": "Dôme tremblant de crème dorée pâle assise dans un lac de caramel ambre sombre, le caramel coule élégamment sur les côtés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Flan s'est libéré, mais s'est effondré ou le centre s'est envolé — il était encore liquide à l'intérieur.",
            "action": "Pas de rétablissement — c'est un échec. Scoop les meilleures portions soigneusement et l'appellent 'flan déconstruite.' Réfrigérer la prochaine fois pendant 2 heures minimum."
          },
          {
            "state": "Perfect",
            "description": "Dôme propre avec une surface lisse, le caramel circulant librement autour de la base. Le flan tient sa forme mais tremble légèrement lorsque la plaque est déplacée.",
            "action": "Servir immédiatement ou dans les 30 minutes; ne pas réfrigérer après le démouillage."
          },
          {
            "state": "Overdone",
            "description": "Flan est si fermement fixé qu'il a fissuré sur l'inversion, ou le caramel a durci dans le caramel au lieu de couler. Les deux signes de surchauffe.",
            "action": "Noter le dessus de caramel avec l'arrière d'une cuillère pour le fissurer de façon attrayante. Servir avec un petit pot de sauce caramel tiède sur le côté."
          }
        ]
      },
      "feelCue": "Soulevez la plaque — elle devrait être plus lourde que prévu. Ce poids est le caramel pooling sous la crème. Donnez à la plaque une inclinaison lente pour confirmer les flux de caramel librement."
    }
  ]
};
