export default {
  "repoId": "master_medieval-european_frumenty_001",
  "parentRepoId": null,
  "slug": "frumenty",
  "author": "ForkRecipe Kitchen",
  "title": "Frruity",
  "description": "Le grand pot de blé de la table médiévale — le blé fissuré trempé et vulgaire jusqu'à ce qu'il éclate et va glutineux, puis enrichi avec du lait, doré avec du safran, et lié enfin avec des jaunes d'oeufs dans un épais porridge doré enrobé de cuillère servi à côté de la venison ou du poisson.",
  "cuisine": "Moyen Âge",
  "culture": "Anglo-Norman",
  "category": "grains",
  "tags": [
    "Frais",
    "médiévale",
    "pottage",
    "blé",
    "safran",
    "historique"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "12 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Graines de froment entier, craquées (blé de bourgeon ou craqué)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épeautre perlé",
        "Emmère craquée grossière"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Eau, pour la première fois",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de viande légère ou d'amande"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 250,
      "defaultUnit": "parts",
      "substitutions": [
        "lait d'amande pour une version à jeun"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Fils de safran",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "une pincée de curcuma pour la couleur seulement"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Miel ou sucre",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour un potage salé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "moelle de boeuf pour un plat de fête plus riche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "swelled_wheat",
      "instructions": "Récupérer le blé fissuré et le rincer sous l'eau froide jusqu'à ce que le ruissellement soit généralement clair. Couvrez - le généreusement avec de l'eau froide — en utilisant environ la moitié de l'eau de suintement — et laissez - la toute la nuit, de 8 à 12 heures, dans un endroit frais. Les cuisiniers médiévaux ont fait cela pour commencer le long adoucissement qui fait le grain 'bouffée'; le froid hydrate le blé à son centre afin qu'il gonfle et se divise plutôt que de rester dur au cœur.",
      "visualCue": {
        "primaryTarget": "Les grains ont plu à presque doubler leur taille sèche, palmés et adoucis, avec l'eau imbibée est devenue épaisse et trouble avec l'amidon libéré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont à peine gonflés et encore durs et translucides au centre quand mordus.",
            "action": "Continuez à tremper. Le blé vieux ou très grossier a besoin de toute la nuit; les cuisines froides ont besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont visiblement engraissés et opaques, dentelés facilement sous un ongle, et l'eau est laiteuse avec de l'amidon.",
            "action": "Égoutter de l'eau de trempage et se déplacer à la suintement avec du liquide frais."
          },
          {
            "state": "Overdone",
            "description": "L'imprégnation sent l'odeur aigre ou légèrement fermentée et la surface est mousseuse, elle est trop longtemps assise dans une pièce chaude.",
            "action": "Rincer très soigneusement et procéder si seulement faiblement; jeter et redémarrer si nettement aigre."
          }
        ]
      },
      "feelCue": "Un grain imbibé devrait écraser entre le pouce et le doigt avec un doux, farineux donner plutôt qu'une fissure dure. Le blé drainé se sent lisse et lourd de l'amidon qu'il a pris."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "swelled_wheat",
        "ing_02",
        "ing_06"
      ],
      "outputState": "burst_wheat",
      "instructions": "Mettez le blé égoutté dans un pot lourd avec le reste de l'eau et le sel. Porter à ébullition, puis laisser mijoter au plus bas et cuire doucement, en remuant de temps en temps, pour ne pas attraper, pendant 45 à 60 minutes. C'est ce que demandent les anciennes recettes : cuire jusqu'à ce que les grains s'ouvrent et verser leur amidon dans le liquide, en transformant le pot entier épais et glutineux. Garnir d'un peu d'eau chaude si elle se resserre avant que le blé n'éclate complètement.",
      "visualCue": {
        "primaryTarget": "La plupart des grains ont éclaté leur coque et se sont enroulés ouverts, suspendus dans un liquide épais, collant, semblable à du porridge qu'une cuillère laisse un sentier à fermeture lente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont tendres à l'extérieur mais toujours fermes et distincts, et le liquide est mince et aqueux avec peu de corps.",
            "action": "Continuer à mijoter et remuer plus souvent. Le potage ne s'épaissit qu'une fois les grains rompus et libèrent leur amidon."
          },
          {
            "state": "Perfect",
            "description": "Le blé s'est fendu et est devenu crémeux-douce, et le pot s'est lié dans un porridge souple et brillant qui fond doucement sur une cuillère.",
            "action": "Abaissez la chaleur dans un murmure nu et ajoutez le lait."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est rigide et pâteux, collé au fond et menaçant de brûler.",
            "action": "Incorporer l'eau chaude pour la desserrer et racler la base; baisser la chaleur avant de continuer."
          }
        ]
      },
      "feelCue": "La cuillère doit glisser avec une vraie résistance à travers une masse collante et collante — qui tire est l'amidon d'éclatement et le signe est fait. La vapeur sent chaudement le blé cuit, comme la croûte de pain frais."
    },
    {
      "nodeId": "step_3",
      "action": "Streep",
      "inputs": [
        "burst_wheat",
        "ing_03",
        "ing_05"
      ],
      "outputState": "gilded_pottage",
      "instructions": "Frottez les fils de safran entre vos doigts et trempez-les dans une cuillère de lait chaud pendant quelques minutes jusqu'à ce qu'il tache un orangé profond. Incorporer ceci et le reste du lait dans le blé à feu doux. Laissez mijoter à peine 10 à 15 minutes, en remuant, de sorte que le lait est tiré dans et que tout le pot devient soyeux et même jaune safran. Gardez-le bien en dessous d'un ébullition difficile ou le lait peut attraper et se diviser.",
      "visualCue": {
        "primaryTarget": "Un potage lisse, même doré, la couleur chaude de l'or ancien, épais mais toujours souple, avec la couleur safran entièrement fleuri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est pâle et lâche sur le dessus, la couleur est patchy, et le pottage a un goût mince et laiteux plutôt que de blé.",
            "action": "Continuez à remuer à feu doux jusqu'à ce que le lait soit absorbé et que la couleur soit uniforme. Donnez encore quelques minutes au safran pour fleurir."
          },
          {
            "state": "Perfect",
            "description": "Un potage uniforme doré et brillant qui enveloppe la cuillère et en tombe dans un ruban doux et lent, sentant le miel et peu de safran.",
            "action": "Tirez le pot de la chaleur directe et préparez-vous à tempérer dans les jaunes."
          },
          {
            "state": "Overdone",
            "description": "Le lait a été brûlé à la base ou caillé en grains fins, et les odeurs de pottage des produits laitiers brûlés.",
            "action": "Arrêtez de chauffer immédiatement, versez dans un pot propre laissant la couche brûlée derrière, et desserrez avec un peu de lait chaud frais."
          }
        ]
      },
      "feelCue": "Il doit se sentir velouté et intact lorsqu'il est agité, sans grain de lait fractionné. La cuisine prend l'odeur incomparable de foin et de miel de safran fleuri."
    },
    {
      "nodeId": "step_4",
      "action": "Température",
      "inputs": [
        "gilded_pottage",
        "ing_04",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_frumenty",
      "instructions": "Battre les jaunes d'œufs dans un bol. Hors de l'ébullition, déposer un peu de pot chaud dans les jaunes tout en fouettant dur pour les réchauffer doucement, puis verser les jaunes chauds dans le pot, en remuant constamment. Retournez-le à feu doux et faites cuire, en remuant sans arrêt, pendant 2 à 3 minutes jusqu'à ce qu'il épaississe visiblement — ne le laissez jamais bouillir, ou les jaunes vont se brouiller. Incorporer le miel et le beurre pour finir, goûter au sel et servir chaud à côté de la venison, du mouton ou d'un poisson poché.",
      "visualCue": {
        "primaryTarget": "Un potage riche, brillant, d'or profond assez épais pour marmonner sur une cuillère et tenir sa forme brièvement, avec un reflet satiné des jaunes et du beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le potage est encore lâche et lâche et glisse à plat de la cuillère, en dégustant la laiteuse plutôt que riche.",
            "action": "Continuez à remuer à feu très doux une minute ou deux de plus — les jaunes ne s'épaississent qu'au chaud. Ne le précipitez pas sur une chaleur plus élevée."
          },
          {
            "state": "Perfect",
            "description": "Épaissée à une crème brillante, enrobée de cuillère qui dessine une ligne propre lorsque vous lancez un doigt sur l'arrière de la cuillère. Goûte riche, doux et doré au safran.",
            "action": "Enlevez-le de la chaleur à la fois et servez chaud; il pousse plus loin en l'état."
          },
          {
            "state": "Overdone",
            "description": "De fines taches caillées sont apparues et la texture est devenue granuleuse — les jaunes ont surchauffé et brouillé.",
            "action": "Tirez de la chaleur instantanément et battez fort, ou passez à travers un tamis pour l'alléger; servez rapidement avant qu'il ne se mette plus loin."
          }
        ]
      },
      "feelCue": "Veillez sur le moment où il cesse de sentir l'eau contre la cuillère et commence à glisser avec une lourdeur de crème — c'est-à-dire le réglage jaune. Il devrait goûter rond et riche, le miel une note de fond douce, jamais cloître."
    }
  ]
};
