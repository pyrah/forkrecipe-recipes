export default {
  "repoId": "master_irish_colcannon_001",
  "parentRepoId": null,
  "slug": "colcannon",
  "author": "ForkRecipe Kitchen",
  "title": "Colcannon",
  "description": "La nourriture la plus honnête de l'Irlande — les pommes de terre farineuses battues avec des piscines de beurre fondu et de chou frisé doux, toute la masse vapeur et dorée à la table où un puits de beurre fond lentement au centre comme un foyer chaud.",
  "cuisine": "Irlandais",
  "culture": "Irlandais",
  "category": "vegetables",
  "tags": [
    "pommes de terre",
    "chou",
    "Irlandais",
    "confort",
    "Mash",
    "beurre",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 1124,
  "forks": 67,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-28",
  "updatedAt": "2025-01-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre floues (Maris Piper ou Russet), pelées et quartées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Pommes de terre King Edward"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Choux de chou frisé ou savoyé, déchiquetés",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Verts de printemps",
        "Feuilles de choux de Bruxelles"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier ou crème, chauffé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre",
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre cultivé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons de printemps (épitons), tranchés finement",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "poireaux, tranchés finement et transpirés"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "cooked_potatoes",
      "instructions": "Placez les pommes de terre dans une grande casserole d'eau salée froide — commencer à froid assure même la cuisson du bord au centre. Porter à ébullition à feu vif, puis laisser mijoter régulièrement. Cuire de 20 à 25 minutes jusqu'à ce qu'une brochette traverse la plus grande pièce avec une résistance nulle. Égoutter soigneusement dans une calandre et laisser sécher à la vapeur pendant 3 minutes — l'excès d'humidité est l'ennemi d'une mousse molle.",
      "visualCue": {
        "primaryTarget": "Les morceaux de pommes de terre sont complètement tendres. Les bords coupés semblent légèrement moelleux et commencent à s'effondrer. Quand une pièce est pressée entre deux doigts, elle s'effondre complètement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un couteau ou une brochette rencontre une résistance ferme au centre. Les bords de coupe sont encore nets et définis. L'intérieur semble cireux quand une pièce est cassée.",
            "action": "Retourner à ébullition pendant 5 minutes et tester à nouveau. Ne vous précipitez pas: la pomme de terre non cuite fait de la mousse collante."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre sont en pleine croissance. Les bords ont commencé à s'adoucir dans l'eau. Ils se séparent d'un coup. La vapeur s'élève librement lorsqu'elle est égouttée.",
            "action": "Égoutter et laisser sécher à la vapeur pendant 3 minutes avant d'écraser."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre sont arrosées et se brisent dans l'eau. Le liquide de cuisson est nuageux avec de l'amidon. Ils sont sur le point de se désintégrer.",
            "action": "Égoutter immédiatement et procéder — les pommes de terre trop cuites absorbent plus de beurre, ce qui n'est pas tout à fait une tragédie."
          }
        ]
      },
      "feelCue": "Une brochette en bambou poussée dans le plus grand quartier de la pomme de terre devrait glisser à travers avec la résistance du beurre chaud, sans noyau ferme au centre — un seul passage lisse de côté en côté."
    },
    {
      "nodeId": "step_2",
      "action": "Braise kale",
      "inputs": [
        "ing_02",
        "ing_05",
        "ing_04"
      ],
      "outputState": "braised_greens",
      "instructions": "Pendant que les pommes de terre font cuire, faire fondre la moitié du beurre dans une casserole large à feu moyen. Ajouter les oignons de printemps et cuire 2 minutes jusqu'à ramollir. Ajouter le chou déchiqueté avec une touche d'eau et une pincée de sel. Couvrir et cuire pendant 4-6 minutes, en remuant une ou deux fois, jusqu'à ce que le chou soit complètement tendre et que l'eau s'évapore. Assaisonner et réserver. Le chou doit être cuit jusqu'à ce qu'il s'abandonne complètement — flétris, doux et doux, non moulu et cru.",
      "visualCue": {
        "primaryTarget": "Kale est profond, vert foncé et complètement effondré. Pas de taches brutes. La poêle est sèche — pas de restes liquides. Les pétoncles sont translucides et sucrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Kale a encore quelques taches vert vif, légèrement sournoises. Il ressort quand il est pressé. L'eau est encore visible dans la casserole.",
            "action": "Remplacer le couvercle et cuire encore 2-3 minutes. Le chou frisé rendra le colcannon cru et légèrement amer."
          },
          {
            "state": "Perfect",
            "description": "Vert forêt foncé uniforme, plein rendement. La poêle est sèche. L'odeur douce et sulfureuse de la brassica braisée remplit la cuisine.",
            "action": "Retirer du feu et plier dans la masse."
          },
          {
            "state": "Overdone",
            "description": "Kale est parti khaki-olive et s'en tient à la poêle. Les pétoncles ont complètement fondu. Le mélange sent légèrement le soufre.",
            "action": "Continuez — il aura encore bon goût, et la couleur sera masquée une fois plié dans la pomme de terre."
          }
        ]
      },
      "feelCue": "Ramassez un brin de chou avec des pinces — il devrait accrocher limpide et lourd, ne tenir aucune rigidité structurelle. Il devrait se sentir doux entre les dents sans squeakiness et une saveur nettement plus douce que quand il est entré."
    },
    {
      "nodeId": "step_3",
      "action": "Mash",
      "inputs": [
        "cooked_potatoes",
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "buttered_mash",
      "instructions": "Transférer les pommes de terre séchées à la vapeur à travers un rizier ou un moulin à nourriture dans la casserole chaude — n'utilisez jamais un mélangeur ou un robot culinaire, qui surgénère l'amidon et rend la mousse élastique et collante. Ajouter le reste du beurre et le lait chaud en alternance, battre vigoureusement avec une cuillère en bois ou une spatule entre chacun. Assaisonner de sel et de poivre blanc. La mash doit être crémeuse et juste assez fluide pour tomber lentement d'une cuillère, pas raide.",
      "visualCue": {
        "primaryTarget": "Le mash est crémeux, uniforme et blanc ivoire sans grumeaux. Il tombe d'une cuillère dans des rubans lents et épais et des monticules doux sans tenir les pics raides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mash raide et grumelé qui tient sa forme en pics. Lumps de pommes de terre non décortiquées visibles. Le mélange semble sec et mat.",
            "action": "Ajouter plus de lait chaud une cuillère à soupe à la fois, battre après chaque ajout. N'ajoutez jamais de lait froid — il choque l'amidon."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, blanc ivoire, et fluide. Des chutes dans des rubans lents. Ça a l'air brillant du beurre. Une morsure ne révèle aucune bosse: elle se dissout sur la langue.",
            "action": "Plier immédiatement dans les verts braisés."
          },
          {
            "state": "Overdone",
            "description": "Le mash est élastique et légèrement collant. Lorsqu'il est agité, il s'éloigne du pot en brins. Amidon surmené.",
            "action": "Il n'y a pas de solution pour la mash collante. Servez - le — il aura encore un goût riche — et passez à un rizier la prochaine fois."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers le mash — elle devrait laisser un canal propre qui se remplit lentement en plus de 3-4 secondes. Si elle revient immédiatement comme de la soupe, elle est trop fine; si elle tient fermement le canal, elle a besoin de plus de beurre."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "buttered_mash",
        "braised_greens"
      ],
      "outputState": "finished_colcannon",
      "instructions": "Pliez le chou braisé et les pétoncles dans le mash avec une main légère — vous voulez des stries de vert foncé à travers la pomme de terre d'ivoire, pas une masse uniforme gris-vert. Goûtez et assaisonnez. Servir dans des bols chauds avec un creux généreux pressé dans le centre de chaque portion, rempli de beurre supplémentaire pour fondre lentement dans la masse. Le colcannon est fait quand il sent la crème, le beurre, et quelque chose de vert et vivant.",
      "visualCue": {
        "primaryTarget": "Des stries vertes distinctes à travers l'ivoire-blanc. La surface a l'air bouffante et douce. Une piscine de beurre fondant brille dans le creux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De gros morceaux de chou qui n'ont pas été incorporés. Le mash et les verts semblent séparés et secs aux points de jonction.",
            "action": "Plier encore quelques fois, mais avec retenue — vous voulez toujours des stries vertes, pas une couleur uniforme."
          },
          {
            "state": "Perfect",
            "description": "Belle marbrure de vert foncé à travers le blanc. Chaque fourchette a du chou. Le mélange est chaud, moelleux et parfumé avec du beurre.",
            "action": "Servir immédiatement dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Tout a été remué à un vert gris uniforme. Le mash s'est légèrement dégonflé. On dirait qu'il a été traité plutôt que plié.",
            "action": "Servir — il sera encore excellent goût même si l'attrait visuel est réduit."
          }
        ]
      },
      "feelCue": "Le colcannon fini devrait se sentir presque sans poids lorsqu'il est cuit — léger et nuageux, avec juste assez de résistance pour savoir quelque chose de substantiel est là. L'arôme doit être massivement de crème chaude et de beurre avec un murmure de douceur végétale verte."
    }
  ]
};
