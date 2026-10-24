export default {
  "repoId": "master_american_parkerhouseroll_001",
  "parentRepoId": null,
  "slug": "parker-house-roll",
  "author": "ForkRecipe Kitchen",
  "title": "Parker House Roll",
  "description": "Un rouleau de dîner enrichi américain — beurreux, oreiller et légèrement sucré — qui se déchire le long d'un pli trempé au beurre, libérant un nuage de vapeur et l'odeur sucrée de lait échaudé.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Angleterre",
  "category": "breads",
  "tags": [
    "pain",
    "américains",
    "rouleau",
    "enrichi",
    "beurre",
    "Dîner-rouleau"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "3 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 480,
      "defaultUnit": "g",
      "substitutions": [
        "farine de pain"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier échaudé et refroidi à 40 C",
      "ratioValue": 240,
      "defaultUnit": "g",
      "substitutions": [
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": [
        "levure sèche active"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, fondu (en pâte)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Oeufs (1 gros)",
      "ratioValue": 55,
      "defaultUnit": "g",
      "substitutions": [
        "oeuf de lin sans lait"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé, fondu (pour tremper et garnir)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "enriched_dough",
      "instructions": "Faire fouetter la levure dans le lait chaud, reposer 5 minutes. Mélanger la farine, le sucre et le sel. Ajouter le mélange de lait, le beurre fondu et l'oeuf. Mélanger à une pâte chaotique, puis pétrir 8 minutes jusqu'à ce que lisse et doux. La pâte enrichie est plus douce et légèrement plus collante que le pain maigre.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte douce, lisse et légèrement collante. Beaucoup plus d'oreillers et de tendres sensations que de la pâte à pain maigre. Surface satinée avec une teinte dorée pâle de l'œuf.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface dure, les larmes étirées, ne tiennent pas bien la forme d'une balle.",
            "action": "Continuez à pétrir. Les pâtes enrichies prennent patience — la graisse enveloppe le gluten et ralentit le développement."
          },
          {
            "state": "Perfect",
            "description": "Doux, doux et légèrement collant. Il ressort lentement lorsqu'il est pressé. Passe le test de vitre quand très mince. Des odeurs de lait chaud et de levure.",
            "action": "Mettre dans un bol huilé, couvrir et laisser monter jusqu'à ce qu'il double — environ 1 heure à 24 °C."
          },
          {
            "state": "Overdone",
            "description": "Très serré et élastique, chaud de friction.",
            "action": "Couvrir et reposer 20 minutes avant de façonner. La pâte va se détendre."
          }
        ]
      },
      "feelCue": "La pâte enrichie est presque tendre, douce et oreiller, comme appuyer sur une oreille chaude. Plus riche que la pâte à pizza, moins collante que la focaccia. Ça devrait laisser un fantôme d'embouteillage sur ta paume."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "enriched_dough",
        "ing_08"
      ],
      "outputState": "shaped_rolls",
      "instructions": "Divisez la pâte levée en 16 morceaux égaux (environ 55 g chacun). Roulez chacun dans un ovale lisse. Plonger un côté dans le beurre fondu, puis plier l'ovale en deux pour que le côté beurré soit à l'intérieur, comme un livre. Appuyez doucement pour sceller. Disposer le toucher dans une poêle 9x13 beurrée — les rouleaux pousseront l'un contre l'autre à mesure qu'ils prouveront et créeront la qualité de traction signature.",
      "visualCue": {
        "primaryTarget": "Nez ovales repliés disposés étroitement dans la poêle, tous touchants mais non compressés. Chaque rouleau a une ligne de plis visible et un éclat de beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rouleaux sont de taille inégale ou trop espacés. Certains ont perdu leur pli.",
            "action": "Re-espacez donc les rouleaux sont touchants. L'uniformité de taille est importante pour la cuisson uniforme."
          },
          {
            "state": "Perfect",
            "description": "Même les rouleaux pliés se touchent l'un l'autre dans toute la casserole. Le beurre s'est légèrement infiltré à la ligne de plis. Surface lisse et pâle.",
            "action": "Couvrir et étaler 45-60 minutes jusqu'à doubler et très gonflé."
          },
          {
            "state": "Overdone",
            "description": "Les rouleaux sont serrés trop serrés dans la poêle, en hausse inégalement.",
            "action": "Espacer à une poêle légèrement plus grande si disponible, ou cuire en deux lots."
          }
        ]
      },
      "feelCue": "Le pli devrait avoir envie de fermer un petit livre, décisif mais doux. Le beurre intérieur doit être à peine visible à la couture, juste un murmure de richesse sur le point de fondre à travers la pâte."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "shaped_rolls",
        "ing_08"
      ],
      "outputState": "finished_rolls",
      "instructions": "Rouleaux étamés généreusement avec du beurre fondu. Cuire au four à 190 C (375 F) pendant 18-22 minutes jusqu'à ce que les sommets soient dorés et que l'intérieur de la poêle atteigne 88 C (190 F). Badigeonner le beurre plus fondu immédiatement quand ils sortent du four.",
      "visualCue": {
        "primaryTarget": "Un amas de rouleaux dorés et brillants qui se détachent proprement. Chaque rouleau dispose d'un plateau brillant laqué au beurre avec un intérieur légèrement plus pâle et vapeur au pli.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle avec un centre pâteux et pâle visible au pli. Doucement et farouchement pressé.",
            "action": "Faites cuire 4-5 minutes de plus. Les rouleaux centraux prennent plus de temps à cuire que les rouleaux extérieurs."
          },
          {
            "state": "Perfect",
            "description": "Même brun doré à travers la casserole. Les rouleaux se détachent avec un remorqueur souple et relâchent la vapeur. La miette intérieure est oreiller et blanche, sent le beurre et le lait chaud.",
            "action": "Badigeonner de beurre supplémentaire immédiatement. Servir au chaud de la poêle."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, bords légèrement secs, miettes tombant des rouleaux extérieurs.",
            "action": "Servir immédiatement avec du beurre — les centres doux compensent les bords secs. Entreposer les autres rouleaux dans un sac scellé."
          }
        ]
      },
      "feelCue": "Un rouleau chaud Parker House se sent incroyablement léger lorsqu'il est soulevé, comme prendre un nuage chaud. Le pli se sépare avec une résistance douce et productive, et les vapeurs intérieures avec un souffle doux et laiteux."
    }
  ]
};
