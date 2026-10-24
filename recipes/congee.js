export default {
  "repoId": "master_chinese_congee_001",
  "parentRepoId": null,
  "slug": "congee",
  "author": "ForkRecipe Kitchen",
  "title": "Congee",
  "description": "La patience tranquille du riz qui se rend à l'eau — les grains gonflent, puis éclatent, puis se dissolvent dans un porridge blanc soyeux qui porte le souffle faible du gingembre et les goûts de réconfort lui-même.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "grains",
  "tags": [
    "congee",
    "Jook",
    "riz",
    "porridge",
    "Petit déjeuner",
    "confort"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "90 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs (jasmin)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "riz à grains courts",
        "brisures de riz"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau (ou bouillon de poulet léger)",
      "ratioValue": 1000,
      "defaultUnit": "parts",
      "substitutions": [
        "Stock de poulet non salé",
        "Dashi"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais (en pièces)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (enrobée de riz)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile de sésame"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Échalons (finement tranchés)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "coriandre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Échalotes frites",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de sésame grillées"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Poivre blanc & sauce soja (pour finir)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de poisson"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rincer et mariner",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "primed_rice",
      "instructions": "Rincer le riz à l'eau froide deux ou trois fois, tourbillonner avec la main, jusqu'à ce que l'eau passe de laiteuse à presque claire — mais arrêter avant qu'il soit parfaitement clair, car une amidon de surface aide le porridge à épaissir. Égoutter bien, puis frotter le riz avec l'huile neutre et la moitié du sel. Laissez reposer 15-30 minutes. L'huile enrobe chaque grain de sorte qu'il se décompose uniformément et donne au congee fini un éclat brillant.",
      "visualCue": {
        "primaryTarget": "Damper, séparer les grains avec une faible liquéfaction d'huile, chacun distinct et légèrement scintillement — pas d'eau mise en commun dans le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau de rinçage est encore épaisse et blanche crayeuse; les grains s'agrippent en masse humide.",
            "action": "Rincer encore une fois et bien égoutter. L'excès d'amidon en vrac scorchera plus tard sur le fond du pot."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont uniformément enduits, éblouissants et à peine collants. Rincer l'eau est nuageuse mais pas opaque.",
            "action": "Porter le liquide à ébullition."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été rincé jusqu'à ce que l'eau soit limpide et lavée de toute l'amidon de surface.",
            "action": "Continuez, mais attendez - vous à un corps plus mince: la congee comptera entièrement sur les grains qui éclatent pour s'épaissir."
          }
        ]
      },
      "feelCue": "Le riz devrait se sentir frais, plumé et légèrement huilé entre les doigts, comme des grains qui glissent plutôt que de coller."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "primed_rice",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rolling_pot",
      "instructions": "Portez l'eau (ou le stock) et les pièces de gingembre à ébullition dans un grand pot lourd. Ajouter le riz apprêté et remuer une fois du fond pour soulever les grains collés à la base. Laisser revenir à ébullition vigoureuse pendant 5 minutes, en remuant occasionnellement. Cette première ébullition dure ouvre les grains et commence à libérer leur amidon dans l'eau.",
      "visualCue": {
        "primaryTarget": "Une bouillie vive et enroulée avec du riz grondant et circulant librement, l'eau commence à devenir légèrement trouble à mesure que l'amidon s'éteint.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau mijote à peine; les grains restent assis sur le fond et le liquide est clair.",
            "action": "Élevez la chaleur à ébullition complète — les grains doivent bouger et tomber pour s'ouvrir uniformément."
          },
          {
            "state": "Perfect",
            "description": "Faire bouillir, rincer le riz dans le courant, arroser le lait aux bords. Une mousse d'amidon peut augmenter.",
            "action": "Abaissez le feu à mijoter doucement et couvrir partiellement."
          },
          {
            "state": "Overdone",
            "description": "Saigné si dur, il menace de mousser au-dessus de la jante; mousse d'amidon grimpant les côtés.",
            "action": "Tirez le pot de la chaleur un moment, éjaculez la mousse, puis descendez jusqu'à ce qu'elle mijote et continuez."
          }
        ]
      },
      "feelCue": "Écoutez la courbure profonde et enroulée d'un vrai ébullition; remuez du fond et vous ne devriez pas sentir de grains grippant le pot."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "rolling_pot"
      ],
      "outputState": "broken_congee",
      "instructions": "Réduire à un bas, laisser mijoter et placer le couvercle légèrement ajar. Cuire de 60 à 75 minutes, en remuant toutes les 10 à 15 minutes pour empêcher le riz de s'installer et de prendre le fond. Les grains gonflent, se divisent et se dissolvent enfin, épaississant le liquide en un porridge lisse et versable. Mélanger plus souvent vers la fin en épaississant. S'il pousse trop épais, desserrer avec un jet d'eau chaude.",
      "visualCue": {
        "primaryTarget": "Un porridge crémeux unifié de la couleur de l'ivoire chaud — grains individuels à peine visibles, soufflés ouverts et plumes dans le liquide, se repliant lentement sur lui-même lorsqu'il est agité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore entiers et distincts, assis dans un liquide nuageux mais aqueux qui ne va pas enrober une cuillère.",
            "action": "Continuer à mijoter et à remuer. La transformation s'accélère une fois que les grains commencent à se fractionner — donnez - lui plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Les grains ont éclaté et sont en plumes dans un porridge velouté et opaque qui rubane la cuillère et s'installe lentement à plat.",
            "action": "Jetez les pièces de gingembre. Incorporer le sel restant et terminer."
          },
          {
            "state": "Overdone",
            "description": "Tellement épais, il bute et colle; le fond sent légèrement brûlé et ne coule pas.",
            "action": "Incorporer un peu à la fois dans l'eau chaude, puis retirer la chaleur directe pour se détendre, et gratter doucement pour éviter de soulever un fond brunâtre."
          }
        ]
      },
      "feelCue": "La traînée de la cuillère passe de lâche et aqueuse à une résistance douce et soyeuse. Un arôme de noisette propre doit remplir la cuisine, jamais un bord grillé ou brûlé."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir et servir",
      "inputs": [
        "broken_congee",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_congee",
      "instructions": "Goûtez et ajustez-vous avec quelques gouttes de sauce soja et une pincée de poivre blanc – les congese doivent être assaisonnés doucement, une base calme plutôt qu'un plat audacieux. Déposer le porridge chaud dans des bols chauds. Éparpiller les pétoncles tranchés et les échalotes frites sur le dessus, et terminer chaque bol par une autre petite fissure de poivre blanc. Servir immédiatement pendant qu'il vapeur.",
      "visualCue": {
        "primaryTarget": "Un bol à la vapeur et brillant de porridge pâle avec des pétoncles vert vif et des échalotes frites dorées flottant sur la surface, la congee assez épaisse pour tenir la garniture mais suffisamment lâche pour couler lorsque le bol est incliné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La congee est molle et aqueuse; les garnitures coulent et disparaissent, la surface semble terne et mince.",
            "action": "Incorporer un peu plus de soja et de sel, puis revenir à feu doux pendant quelques minutes pour épaissir avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Silicieuse, parfumée, légèrement assaisonnée. Les garnitures roulent sur le dessus, la vapeur monte, et un bol incliné envoie une vague crémeuse lente à la jante.",
            "action": "Servir à la fois avec l'huile de chili, l'oeuf du siècle, ou cornichons à côté."
          },
          {
            "state": "Overdone",
            "description": "Sursaisonné et salé, ou si épais, il est assis dans un monticule raide dans lequel la garniture ne peut pas s'installer.",
            "action": "Loosen avec de l'eau chaude et équilibre avec un éclaboussure de stock non assaisonnée; le porridge doit goûter doux, pas agressif."
          }
        ]
      },
      "feelCue": "La première cuillère doit se sentir chaude et sans poids, apaisante sur la langue — réconfortante, légèrement poivrée, avec le gingembre qui reste comme une douce chaleur plutôt qu'une bouchée."
    }
  ]
};
