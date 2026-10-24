export default {
  "repoId": "master_french_chocolate_mousse_001",
  "parentRepoId": null,
  "slug": "chocolate-mousse",
  "author": "ForkRecipe Kitchen",
  "title": "Mousse de chocolat",
  "description": "La mousse au chocolat classique — chocolat doux amer enrichi de jaunes d'oeufs, puis soulevé par une meringue brillante et crème fouettée doucement dans un nuage qui tient un pic brouillé mais dissout l'instant où il touche la langue. Ténébreux, profond et à peine doux.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "desserts",
  "tags": [
    "mousse",
    "chocolat",
    "français",
    "œuf",
    "dessert",
    "Pas de cuisson"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "4 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 0,
    "bitter": 3,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Chocolat amer doux, 64 à 70 % (finement haché)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "un mélange de 70% et 55% pour un fini plus rond"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé (doux, cubes)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaunes d'œufs (température ambiante)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Blancs d'oeufs (température ambiante)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de castre (pour la meringue)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sucre superfin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème lourde, 35% de matières grasses (froid)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "crème fraîche, légèrement fouettée, pour un bord acidulé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "Sel flocé, pour finir"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "un jet de rhum foncé, de cognac ou d'espresso fort"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "melted_chocolate",
      "instructions": "Mettre le chocolat haché et le beurre dans un bol sur une casserole d'eau à peine bouillante — le bol ne doit pas toucher l'eau. Mélanger doucement et les laisser fondre ensemble en une seule masse brillante. Tirez le bol de la chaleur au moment où les derniers shards disparaissent; le chocolat grince et graine l'instant où il surchauffe. Laisser refroidir pour simplement réchauffer au toucher, autour de 40°C, avant qu'il n'y ait autre chose.",
      "visualCue": {
        "primaryTarget": "Un chocolat lisse, brillant et miroir qui rubane la spatule et retombe en lui-même sans trace de flocons non fondus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les petits morceaux solides s'accrochent encore à la spatule et la surface semble terne et granuleuse.",
            "action": "Continuez à remuer la chaleur — la chaleur résiduelle la finit habituellement. Revenez à la vapeur seulement brièvement si elle s'arrête."
          },
          {
            "state": "Perfect",
            "description": "Un liquide uniforme, profondément brillant, et chaud mais pas chaud à un bout de doigt. Il enveloppe la spatule d'une mince feuille uniforme.",
            "action": "Réserver pour refroidir à la température du corps avant de plier dans les jaunes."
          },
          {
            "state": "Overdone",
            "description": "Le chocolat a l'air épais, mat et granuleux, ou s'est divisé en une flaque grasse aux taches foncées, il a surchauffé et saisi.",
            "action": "fouetter dans une cuillère à café d'eau chaude à la fois pour ramener une masse saisie; si brûlée et amère, recommencer."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt — il devrait se sentir chaud, jamais chaud. La cuisine sent le cacao pur sans acride, sans bord brûlé."
    },
    {
      "nodeId": "step_2",
      "action": "Tempérer",
      "inputs": [
        "melted_chocolate",
        "ing_03",
        "ing_08",
        "ing_07"
      ],
      "outputState": "chocolate_base",
      "instructions": "fouetter les jaunes d'œufs, la vanille et le sel ensemble, puis les fouetter dans le chocolat chaud (pas chaud) d'un seul coup. Le mélange s'épaissira et se rassemblera dans une pâte dense et profondément brillante, presque comme une ganache douce. Travaillez rapidement et avec confiance; si le chocolat est trop chaud, les jaunes se brouilleront, et s'il reste trop longtemps, il se raidit. Vous voulez une base souple et versable, prête à recevoir de l'air.",
      "visualCue": {
        "primaryTarget": "Une base épaisse, satinée et presque noire qui tombe dans un lourd ruban brillant et sent intensément le chocolat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de jaune lâche encore marbre le chocolat et le mélange semble inégal.",
            "action": "fouetter encore quelques secondes jusqu'à ce qu'il soit complètement homogène, mais arrêter le moment où il est uniforme."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme, brillante et souple avec le reflet de satin fondu. Il tient un ruban lent sur la surface avant de sombrer.",
            "action": "Réserver à température ambiante pendant que vous fouettez la meringue et la crème — ne la refroidissez pas ou elle sera trop ferme pour plier."
          },
          {
            "state": "Overdone",
            "description": "La base s'est raidie dans une masse épaisse, enlacée, ou montre de minuscules taches brouillées de jaune cuit.",
            "action": "S'il est simplement raide, chauffer doucement sur la vapeur pour se détendre. Si les jaunes brouillaient, filtrez un tamis et acceptez un résultat légèrement moins riche."
          }
        ]
      },
      "feelCue": "Le fouet rencontre une résistance soudaine alors que les jaunes lient le chocolat — que l'épaississement est le signe qu'il s'est réuni. Il devrait goûter amer doux et rond, juste timide de l'amertume."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "french_meringue",
      "instructions": "Dans un bol impeccablement propre, sans graisse, fouetter les blancs d'œufs jusqu'à ce qu'ils soient mousseux, puis pleuvoir dans le sucre de castre une cuillère à la fois que vous battez. Continuez jusqu'à une meringue douce et brillante qui tient un pic qui se boucle doucement à l'extrémité. S'arrêter à court de raide et sec — une meringue surbattue devient granuleuse et refuse de se plier en douceur, laissant des taches blanches à travers la mousse.",
      "visualCue": {
        "primaryTarget": "Une meringue bouffante et brillante qui tient un pic doux avec une pointe qui se penche sur elle-même comme une vague sur le point de se casser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs sont mousseux et lâches; les pics s'effondrent à nouveau dans la surface et le sucre est gris.",
            "action": "Continuez à fouetter pour dissoudre le sucre et construire la structure jusqu'à ce que des pics mous se forment."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant et épais, tenant un pic qui se boucle doucement à l'extrémité. Rubbé entre les doigts, il est soyeux, sans grain de sucre.",
            "action": "Utiliser immédiatement — meringue pleure et dégonfle s'il est assis."
          },
          {
            "state": "Overdone",
            "description": "La meringue semble sèche, cotonneuse et terne, se cassant en touffes plutôt qu'en masse lisse.",
            "action": "fouetter dans une cuillère supplémentaire de blanc non fouetté pour le rapporter, ou de nouveau fouetter un blanc frais et plier un peu dedans."
          }
        ]
      },
      "feelCue": "Frottez un brin entre les deux doigts — aucun grain de sucre ne doit rester. Soulevez le fouet et le pic doit faire un clin d'œil doux plutôt que de rester raide et pointu."
    },
    {
      "nodeId": "step_4",
      "action": "Fouetter",
      "inputs": [
        "ing_06"
      ],
      "outputState": "whipped_cream",
      "instructions": "Frotter la crème froide à des pics mous et drapés — à peine passés versables, ce que les Français appellent 'à la chantilly molle'. Il devrait buter mais coule quand le bol est incliné. Arrêtez-vous tôt; la crème qui est fouettée raide fait une mousse lourde et beurreuse et risque de tourner granuleux quand plié.",
      "visualCue": {
        "primaryTarget": "Crème légèrement épaissie qui laisse une trace lente du fouet et se replie sur elle-même dans des monticules paresseux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est à peine épaissie et coule encore dans un ruisseau.",
            "action": "Encore quelques secondes, en observant de près — elle se fait rapidement."
          },
          {
            "state": "Perfect",
            "description": "Des monticules moelleux qui tiennent leur forme et s'enfoncent au sommet. Le fouet laisse une piste douce et lentement fermée.",
            "action": "Plier immédiatement pendant qu'il est lâche et souple."
          },
          {
            "state": "Overdone",
            "description": "La crème est raide, maladroite, et semble légèrement granuleuse ou terne, sur le bord du beurre.",
            "action": "fouetter dans une éclaboussure de crème fraîche froide pour le desserrer à une texture lisse et douce."
          }
        ]
      },
      "feelCue": "La crème devrait encore wobble et s'écouler lorsque vous inclinez le bol. Arrêtez le moment où il tient une forme douce; dix secondes de plus et il se raidit."
    },
    {
      "nodeId": "step_5",
      "action": "Incorporer délicatement",
      "inputs": [
        "chocolate_base",
        "french_meringue",
        "whipped_cream"
      ],
      "outputState": "finished_mousse",
      "instructions": "D'abord fouetter un tiers de la meringue vigoureusement dans la base de chocolat pour la relâcher — ce tiers sacrificiel fait le reste se replier sans dégonfler. Ajoutez ensuite le reste de la meringue et la crème fouettée ensemble et pliez avec une grande spatule, coupant à travers le centre, balayant le bol, et retournant, tournant le bol au fur et à mesure que vous allez. Arrêtez l'instant où il ne reste plus de stries. Déposer dans des verres ou un bol de service et refroidir au moins 3 à 4 heures, ou toute la nuit, jusqu'à ce qu'ils soient fixés mais toujours oreillers.",
      "visualCue": {
        "primaryTarget": "Une mousse uniforme, aérée, moka-dark sans marbrure de blanc, qui mue doucement et tient le coup d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries pâles et des rubans de meringue et de crème traversent encore la base sombre.",
            "action": "Plier quelques coups plus doux — mais chasser les dernières petites stries plutôt que de les surmener."
          },
          {
            "state": "Perfect",
            "description": "De couleur uniforme, léger et volumineux, tombant de la spatule dans un monticule doux et aéré qui tient sa forme.",
            "action": "Portion immédiatement et refroidir à mettre — la manutention plus longtemps fait tomber l'air."
          },
          {
            "state": "Overdone",
            "description": "La mousse a l'air dense, dégonflée et molle, avec un bord liquide et soupeux — elle était surpliée et l'air s'est effondré.",
            "action": "Il n'y a pas de récupération complète, mais le refroidissement le raffermira encore; la prochaine fois plier moins et s'arrêter à la première couleur uniforme."
          }
        ]
      },
      "feelCue": "Chaque pli devrait sentir la lumière, la spatule ne rencontrant presque aucune résistance car la masse reste flottante. Ensemble, une cuillère devrait donner une faible résistance puis s'effondrer instantanément dans la soie sur la langue — doux amer, frais et finissant propre."
    }
  ]
};
