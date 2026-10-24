export default {
  "repoId": "master_israeli_shakshuka_verde_001",
  "parentRepoId": null,
  "slug": "shakshuka-verde",
  "author": "ForkRecipe Kitchen",
  "title": "Shakshuka Verde",
  "description": "Shakshuka vert: les tomatillos et les jalapeños carbonisés forment une sauce brillante, tannante, légèrement épicée dans laquelle les œufs sont pochés juste jusqu'à ce que les blancs soient mis et que les jaunes courent encore l'or — une poêle de feu du matin qui se réveille lentement, puis tout à la fois.",
  "cuisine": "Israël",
  "culture": "Israël",
  "category": "eggs",
  "tags": [
    "végétarien",
    "Sans gluten",
    "œufs",
    "vert",
    "tomatillo",
    "Shakshuka"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Tomatillos, décortiqués et coupés en deux",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "tomates vertes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Fromages frais du jalapeño",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "piments de serrano (haut)",
        "poblano (milder)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Petits épinards",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Fard suisse"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), hachée, plus plus pour garnir",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Fromage feta, émietté",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Fromage de chèvre",
        "Poupées de laboratoire"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Citrus",
      "name": "Jus de chaux",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "charred_tomatillos",
      "instructions": "Placer les tomatillos à moitié et les jalapeños entiers sur un plateau de cuisson doublé de feuilles. Placez directement sous un gril chaud (broiler) à feu maximum pendant 8-10 minutes, en tournant les jalapeños une fois à mi-chemin, jusqu'à ce que les tomatillos et les jalapeños soient cloqués et carbonisés dans des taches. La chair de tomatillo va s'assouplir et s'effondrer. Transférer dans un mélangeur avec tout jus accumulé.",
      "visualCue": {
        "primaryTarget": "Tomatillos et jalapeños sous la grille",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Tomatillos sont encore fermes et vert vif sans omble. Les jalapeños sont inchangés.",
            "action": "Retour à la grille. L'omble est ce qui introduit la fumée à la sauce légèrement acidulée."
          },
          {
            "state": "Perfect",
            "description": "Les Tomatillos sont cloqués et effondrés, légèrement noircis aux bords coupés avec une odeur riche et sucrée. Les jalapeños ont noirci la peau dans les endroits et sentent torréfié et légèrement fumé.",
            "action": "Mélanger à une purée grossière, aux graines et à tous les jalapeños — cela contrôle le niveau de chaleur."
          },
          {
            "state": "Overdone",
            "description": "Les deux légumes sont très foncés et commencent à sécher. Acre, odeur brûlée.",
            "action": "Utilisez - les de toute façon — l'amertume d'une petite quantité d'omble ajoute à la complexité. Enlever les parties profondément brûlées de la peau du jalapeño."
          }
        ]
      },
      "feelCue": "Après mélange, la sauce doit se sentir légèrement texturée sur la langue — pas complètement lisse. Les graines de tomatillo ajoutent un léger croûte et la peau carbonisée donne de minuscules taches amères."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "charred_tomatillos"
      ],
      "outputState": "verde_sauce",
      "instructions": "Mélanger les tomatillos rôtis et les jalapeños en purée grossière. Vous voulez une texture rugueuse, légèrement chunky plutôt qu'une sauce lisse — mélangez dans de courtes pulsations. Assaisonner avec une pincée de sel et de goût: il devrait être tarte, légèrement fumé, et avoir une douce chaleur rampante.",
      "visualCue": {
        "primaryTarget": "sauce verde mélangée",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est toujours ample avec de grands morceaux de tomatillo et de jalapeño. Une texture inégale rendra les œufs difficiles à cuire uniformément.",
            "action": "Pulse encore quelques fois — viser la texture d'une salsa rugueuse."
          },
          {
            "state": "Perfect",
            "description": "Une sauce verte vive, légèrement texturée, pas lisse, pas molle. La couleur est un vert olive profond légèrement muté de l'ombrage. Sensations de tarte à la chaux, de fumée et de piment.",
            "action": "Construisez la sauce dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été mélangée à un liquide complètement lisse et uniforme sans texture.",
            "action": "Encore utilisables — les œufs cuireont toujours correctement."
          }
        ]
      },
      "feelCue": "La sauce verde crue sur le doigt devrait piquer légèrement du jalapeño — s'il n'y a pas de chaleur du tout, ajouter plus de jalapeño; si elle est incendiaire, retirer plus de graines avant de mélanger."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "ing_07",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "spiced_aromatics",
      "instructions": "Dans une grande casserole, chauffer l'huile d'olive à feu moyen. Cuire l'oignon avec une pincée de sel pendant 7 à 8 minutes jusqu'à ce qu'il soit doux et translucide. Ajouter l'ail et le cumin; cuire 90 secondes jusqu'à odorat.",
      "visualCue": {
        "primaryTarget": "Oignon dans la poêle",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore croquant et frais. La dureté ne fera pas cuire quand la sauce sera ajoutée.",
            "action": "Continuer à ramollir: l'oignon devrait pratiquement fondre."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est translucide et très doux. L'ail et le cumin sont parfumés et noisette. Pas de brunissement.",
            "action": "Ajouter la sauce verde."
          },
          {
            "state": "Overdone",
            "description": "L'oignon a bruni de façon significative. La poêle est trop chaude pour les œufs.",
            "action": "Baisser le feu et ajouter la sauce immédiatement pour refroidir la poêle."
          }
        ]
      },
      "feelCue": "Un morceau d'oignon adouci devrait se dissoudre presque complètement lorsqu'il est pressé entre votre langue et le toit de votre bouche: pas de fibres, pas de croûte, il suffit de donner de la douceur."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_aromatics",
        "verde_sauce",
        "ing_03",
        "ing_09",
        "ing_11"
      ],
      "outputState": "verde_shakshuka_sauce",
      "instructions": "Verser la purée verde dans la poêle avec les aromatiques. Mélanger et laisser mijoter à feu moyen pendant 5 à 7 minutes jusqu'à ce que la sauce s'épaississe légèrement et que le bord brut du tomatillo se soit mélangé. Incorporer les épinards jusqu'à ce qu'ils se flétrissent, environ 90 secondes. Ajouter la coriandre. Goûtez et ajoutez du sel et du jus de lime pour équilibrer.",
      "visualCue": {
        "primaryTarget": "Sauce aux épinards flétris",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est très fine et goûte encore surtout de tomatillo cru. Les épinards ne se sont pas encore flétris.",
            "action": "Laisser mijoter plus longtemps et remuer les épinards — il faut qu'ils se fanent complètement avant que les œufs entrent."
          },
          {
            "state": "Perfect",
            "description": "La sauce s'est épaissie jusqu'à une consistance lâche et cuillable. Les épinards se flétrissent complètement et sont uniformément verts dans toute la sauce. La couleur est riche et profonde.",
            "action": "Créer des puits et ajouter les œufs."
          },
          {
            "state": "Overdone",
            "description": "La sauce a trop diminué et reste collée à la poêle. Très épais.",
            "action": "Ajouter 3 à 4 cuillères à soupe d'eau et remuer avant d'ajouter les œufs."
          }
        ]
      },
      "feelCue": "À ce stade, la sauce doit se déplacer comme un porridge épais dans la poêle — s'étendre lentement pour remplir n'importe quel espace lorsqu'elle est agitée, assez lourd pour tenir la forme d'un puits de cuillère pour les œufs."
    },
    {
      "nodeId": "step_5",
      "action": "Pochette",
      "inputs": [
        "verde_shakshuka_sauce",
        "ing_04",
        "ing_10"
      ],
      "outputState": "finished_shakshuka_verde",
      "instructions": "Utilisez une grande cuillère pour créer 4-5 puits dans la sauce. Casser un œuf dans chaque puits. Dispersez le feta émietté autour des œufs. Couvrir soigneusement la poêle et la cuire à feu moyen-doux pendant 5 à 7 minutes jusqu'à ce que les blancs soient complètement fixés et opaques, mais que les jaunes restent écoulement lorsqu'ils sont pressés. Ne pas soulever le couvercle avant que le temps minimum ne soit écoulé.",
      "visualCue": {
        "primaryTarget": "Oeufs braconnant dans la sauce verde",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs sont encore translucides et jiggly. Le blanc runny sera désagréable — attendez la pleine opacité.",
            "action": "Récupérer et cuire encore 2 minutes. Vérifiez chaque minute."
          },
          {
            "state": "Perfect",
            "description": "Les blancs sont entièrement opaques et placés jusqu'aux bords où ils rencontrent la sauce. Le jaune a un film mince, juste-set top, mais visiblement gonfle et se déplace lorsque la poêle est légèrement inclinée — il est encore liquide à l'intérieur. Feta s'est adoucie et commence à fondre aux bords.",
            "action": "Servir directement de la poêle. Chaque seconde de la cuisson supplémentaire déplace le jaune vers le durcissement."
          },
          {
            "state": "Overdone",
            "description": "Les jaunes sont pâles, bombés, mais durs. Les blancs se sont contractés et se sont retirés de la sauce.",
            "action": "Servir immédiatement, peu importe — rien ne peut restaurer un jaune dur."
          }
        ]
      },
      "feelCue": "Appuyez très doucement sur le dessus d'un jaune avec votre bout de doigt — un jaune d'écoulement devrait se sentir comme un ballon d'eau, donnant sous la légère pression et se sentant liquide dans sa peau serrée."
    }
  ]
};
