export default {
  "repoId": "master_lebanese_mujaddara_001",
  "parentRepoId": null,
  "slug": "mujaddara",
  "author": "ForkRecipe Kitchen",
  "title": "Mujaddara",
  "description": "Lentilles et riz cuits ensemble, couronnés d'une cascade d'oignons profondément caramélisés — humbles, anciens et complets en soi.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "grains",
  "tags": [
    "lentilles",
    "riz",
    "lébanèse",
    "lévantine",
    "végétalien",
    "les oignons caramélisés",
    "confort"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 2,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Lentilles brunes ou vertes",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Lentilles Puy françaises"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz blanc à grains longs",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "riz basmati"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignons jaunes, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.03,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 0.03,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Yogourt à servir",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Labneh",
        "yogourt végétalien"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01"
      ],
      "outputState": "par_cooked_lentils",
      "instructions": "Prenez les lentilles et rincer sous l'eau froide. Placer dans une casserole et couvrir d'eau froide de 5 cm. Porter à ébullition, puis laisser mijoter. Cuire de 15 à 20 minutes jusqu'à ce que les lentilles soient à peine tendres — elles devraient encore tenir leur forme et avoir une légère denticité au centre. Ne les faites pas cuire ici; ils finiront la cuisson avec le riz. Égoutter, réserver le liquide de cuisson. Mesurez le liquide et recouvrez d'eau pour avoir 2 tasses de liquide par tasse de riz.",
      "visualCue": {
        "primaryTarget": "Les lentilles sont gonflées et transformées de cailloux opaques en grains brun olive, mats et plumés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont encore dures au centre. Pas d'argent en mordant. L'eau est encore claire.",
            "action": "Continuez à mijoter. Les lentilles non cuites ne finiront pas correctement la cuisson avec le riz dans le temps disponible."
          },
          {
            "state": "Perfect",
            "description": "Les lentilles sont douces à l'extérieur, mais le centre a une morsure légère et agréable — al dente. Les peaux n'ont pas explosé. L'eau de cuisson est légèrement trouble.",
            "action": "Égoutter et réserver le liquide de cuisson. Commencez à caraméliser les oignons simultanément."
          },
          {
            "state": "Overdone",
            "description": "Les peaux éclatent, quelques lentilles se sont dissoutes en bouillie. L'eau est épaisse et très sombre.",
            "action": "Égoutter soigneusement. Le mujaddara sera plus doux et plus porridge, mais toujours délicieux. Continuez."
          }
        ]
      },
      "feelCue": "Une lentille cuite pressée entre votre langue et le toit de votre bouche devrait offrir une résistance douce mais claire — non pas croquante, pas s'effondrer, mais un rendement doux avec un centre ferme."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Pendant que les lentilles font cuire, réchauffer l'huile d'olive dans une casserole large et lourde à feu moyen-doux. Ajouter tous les oignons tranchés avec une pincée généreuse de sel et mélanger pour enrober d'huile. Cuire en remuant toutes les quelques minutes, pendant 30 à 40 minutes au total. Ne levez pas la chaleur pour les précipiter — l'objectif est lent, même brunissant, pas brûlant. Dans les 15 premières minutes, ils vont se faner. Entre 15 et 25 minutes, ils commenceront à devenir dorés. Entre 25 et 40 minutes, ils s'amplifieront jusqu'à un riche acajou brun, presque jammy, avec une douceur intensément concentrée. Réserver l'huile dans la poêle.",
      "visualCue": {
        "primaryTarget": "Profondément acajou-brun, confiture, effondré oignons qui ont réduit à environ un cinquième leur volume original. L'huile dans la poêle est couleur ambre de la caramélisation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont dorés, encore un peu volumineux, avec une douceur légère mais pas de complexité profonde. L'huile de poêle est encore pâle.",
            "action": "Gardez la cuisson à feu moyen-doux. La patience est tout ici — la réaction de Maillard a besoin de temps à basse chaleur. Résiste à la flamme."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont une acajou riche et sombre. Ils se sont effondrés dans une masse molle et jammy. La douceur est intense et légèrement amère aux bords. L'huile dans la poêle est profondément ambre.",
            "action": "Retirer la moitié des oignons caramélisés et leur huile pour garnir le plat fini. Utilisez le reste pour aromatiser l'étape du riz."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun très foncé et approchent des taches noires. L'odeur a un bord amer et acride. La poêle est sèche et les oignons commencent à coller et l'omble.",
            "action": "Ajouter immédiatement un jet d'eau dans la casserole et gratter le fond. Retirer du feu. Choisissez des morceaux vraiment brûlés. Les oignons restants seront encore doux et complexes."
          }
        ]
      },
      "feelCue": "Les oignons bien caramélisés se sentent presque fondre entre les doigts — pas de croûte, pas de fermeté brute, juste une douceur intensement sucrée, semblable à une confiture. Un petit goût doit être sucré, salé et légèrement amer."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "par_cooked_lentils",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "cooked_mujaddara",
      "instructions": "Retourner les lentilles par-cuites dans le pot avec la moitié des oignons caramélisés (l'autre moitié est réservée à la garniture). Rincer le riz et l'ajouter à la casserole. Versez dans le liquide de cuisson réservé — l'eau de lentilles ajoute corps et profondeur terreuse. Ajouter le cumin, la cannelle, l'aspice, le sel et le poivre. Porter à ébullition, remuer une fois, puis réduire au minimum la chaleur. Couvrir soigneusement et cuire de 15 à 18 minutes sans soulever le couvercle. Éteignez le feu et laissez la vapeur de pot, encore couverte, pendant encore 10 minutes.",
      "visualCue": {
        "primaryTarget": "Le riz et les lentilles ont cuit ensemble en une masse unifiée. Pas d'évent de vapeur visible du pot. La surface, lorsque le couvercle est levé, doit être piquée avec de petits cratères à vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Liquide encore visible pooling autour du riz. Les grains sont crayeux au centre. Un son croquant lorsque le pot est incliné.",
            "action": "Couvrir et cuire encore 5 minutes à feu très doux. Si le liquide a été absorbé mais que le riz est encore dur, ajouter un petit jet d'eau chaude et couvrir à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Tout liquide absorbé. De petits trous de vapeur pointent la surface. Les grains de riz sont entièrement tendres et séparés, les lentilles sont douces mais toujours entières. L'arôme d'épices est chaud et parfumé.",
            "action": "Ne remuez pas. Flûtez doucement avec une fourchette après 10 minutes de repos du feu."
          },
          {
            "state": "Overdone",
            "description": "Le fond du pot est légèrement croûté. Une faible odeur grillée. Le riz est très doux et collant.",
            "action": "La croûte est en fait une caractéristique bienvenue, c'est l'équivalent arabe du socarrat. Grattez-le et repliez-le, ou servez-le comme un bonus croustillant."
          }
        ]
      },
      "feelCue": "Après s'être reposé de la chaleur, le pot devrait encore se sentir chaud mais pas chaud quand vous pressez une paume sur le couvercle. Soulevez le couvercle et respirez : le cumin chaud, la cannelle douce et les lentilles terreuses devraient vous saluer."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "cooked_mujaddara",
        "caramelized_onions",
        "ing_10"
      ],
      "outputState": "finished_mujaddara",
      "instructions": "Déposer le riz cuit et les lentilles sur un large plateau de service et empiler généreusement les oignons caramélisés réservés et toute leur huile sur le dessus. Le contraste entre la base du grain pâle et la couronne d'oignon foncée et brillante est la signature visuelle du mujaddara. Servir immédiatement avec du yogourt frais et uni à côté — le yogourt frais et tanné n'est pas facultatif, c'est le contrepoint qui fait le plat.",
      "visualCue": {
        "primaryTarget": "Un monticule de riz brun ivoire et de lentilles couronnées d'une cascade sombre et brillante d'oignons acajou. L'huile d'ambre brille sur toute la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons ont l'air blonds ou dorés, pas profondément dorés. Le plat semble pâle et peu assaisonné.",
            "action": "Les oignons avaient besoin de plus de temps. Utilisez-les comme-est mais notez pour la prochaine fois — 30–40 minutes minimum, 40–45 pour une profondeur maximale."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont une couronne riche et sombre. Le pétrole brille. L'arôme est doux, terreux, chaud et complexe. Le yaourt à côté est frais et blanc vif.",
            "action": "Servir immédiatement. Mujaddara est le meilleur au moment où les oignons chauds frappent le grain."
          },
          {
            "state": "Overdone",
            "description": "Les oignons ont séché et perdu leur qualité de confiture, ou le riz a été retenu trop longtemps et est devenu collant et empilé.",
            "action": "Ajouter une bruine d'huile d'olive fraîche sur les oignons pour restaurer un peu d'éclat. Flûtez le riz avec une fourchette humide."
          }
        ]
      },
      "feelCue": "Le mujaddara fini devrait avoir un contraste textural dans chaque morsure: doux, donnant du riz et des lentilles en dessous, des oignons caramélisés doux et légèrement mâchés au-dessus, et le coup frais de yaourt pour couper à travers la richesse."
    }
  ]
};
