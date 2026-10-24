export default {
  "repoId": "master_indian_indiangarlicnaan_001",
  "parentRepoId": null,
  "slug": "indian-garlic-naan",
  "author": "ForkRecipe Kitchen",
  "title": "Ail Naan",
  "description": "Le pain plat carbonisé, blister, incroyablement tendre, léché avec du beurre d'ail et drapé sur une poêle en fonte chaude qui se substitue admirablement à une tangle, avec un omble qui sent exactement la bonne.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "breads",
  "tags": [
    "pain",
    "végétarien",
    "laitière",
    "Ail",
    "indienne"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "1 hour 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain (résultat chewier)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein de gras",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "yogourt végétalien",
        "crème aigre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (38 C)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (pour pâte)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé (pour finissage)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "ghee (plus authentique)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Gousses d'ail, finement hachées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": [
        "Pâte d'ail"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), hachée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "persil"
      ]
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
      "outputState": "naan_dough",
      "instructions": "Dans un grand bol, fouetter la farine, le sel, la levure et la poudre à pâte ensemble. Ajouter le yaourt, l'eau chaude et l'huile. Mélanger jusqu'à ce qu'une pâte rugueuse se forme, puis pétrir à la main pendant 8 minutes jusqu'à ce qu'elle soit lisse et douce. Le yogourt rend cette pâte particulièrement plus souple que les pâtes à eau pure. Visez une consistance légèrement plus douce que le lobe d'oreille. Couvrir et se reposer pendant 1 heure jusqu'à doublé.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte douce et légèrement collante avec une surface lisse et satinée et un léger reflet de l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rugueux et rigolé. Des larmes au lieu de s'étirer.",
            "action": "Encore 3 minutes. Les protéines de yogourt ont besoin de temps pour intégrer pleinement."
          },
          {
            "state": "Perfect",
            "description": "Doux, souple, légèrement collant au toucher. Éloignez-vous proprement du bol. Il ressort lentement lorsqu'il est pressé.",
            "action": "Couvrir soigneusement et reposer 1 heure à température ambiante chaude."
          },
          {
            "state": "Overdone",
            "description": "Stiff et serré. Difficile à pousser à plat. Pas d'argent quand on pique.",
            "action": "Mains humides et pétrir brièvement pour réhydrater. Repos couvert 10 minutes."
          }
        ]
      },
      "feelCue": "La pâte doit être plus douce et plus productive que n'importe quelle pâte à pain, presque soyeuse à partir de la graisse de yogourt. Si elle s'accroche au bol, elle est parfaitement hydratée."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "naan_dough"
      ],
      "outputState": "shaped_naans",
      "instructions": "Divisez la pâte en 6 boules égales (environ 80 g chacune). Sur une surface légèrement farinée, rouler chaque boule en forme de larme ou ovale d'environ 20 cm de long et 3 mm d'épaisseur. Une certaine irrégularité est souhaitable: les vrais naans tandoor ne sont jamais parfaitement uniformes. Si la pâte revient en roulant, laissez reposer 5 minutes, puis essayez encore.",
      "visualCue": {
        "primaryTarget": "Pains plats minces, approximativement ovales, d'environ 3 mm d'épaisseur avec des bords légèrement irréguliers et une surface légèrement farineuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Épais, 6 mm ou plus. Le naan roulé est encore rond.",
            "action": "Rouler de façon plus affirmée, travailler du centre vers l'extérieur. Poussière légèrement si elle colle."
          },
          {
            "state": "Perfect",
            "description": "Assez pour voir la lumière dans les endroits. Il tient sa forme lorsqu'il est sorti de la planche. Le contour de Teardrop.",
            "action": "Cuire immédiatement — les naans laminés frais cuisinent plus uniformément que ceux laissés pour se reposer."
          },
          {
            "state": "Overdone",
            "description": "Translucide et larmes facilement. Moins de 2 mm dans les endroits.",
            "action": "Repliez la zone déchirée en arrière et reroulez à partir d'une boule — la pâte laminée est trop fragile pour se rétablir en appuyant."
          }
        ]
      },
      "feelCue": "Le naan roulé devrait draper votre paume sans déchirer, souple et souple comme une feuille de cuir chamois."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "shaped_naans",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_naan",
      "instructions": "Chauffer une poêle en fonte à feu vif jusqu'à ce qu'elle commence à fumer — au moins 5 minutes de préchauffage. Placez un naan directement sur la casserole sèche. Cuire 1 à 2 minutes jusqu'à ce que de grandes bulles se forment et que le fond ait des taches d'omble foncé. Flip et cuire 30 à 60 secondes sur le deuxième côté. Bien qu'il reste chaud, brossez immédiatement avec du beurre fondu dans lequel vous avez cuit l'ail haché jusqu'à ce qu'il soit parfumé (30 secondes sur le milieu). Scatter la coriandre hachée. Stack fini naans sous une serviette propre pour garder doux.",
      "visualCue": {
        "primaryTarget": "Des blisters noir dramatiques sur les deux côtés, avec un fond doré-tan entre les taches d'omble. Le naan souffle dans des endroits comme un ballon d'air chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, wan, doux. Pas de cloques. Des odeurs de pâte crue.",
            "action": "La poêle n'est pas assez chaude. Laisser préchauffer plus longtemps sur la chaleur maximale. C'est l'erreur la plus courante."
          },
          {
            "state": "Perfect",
            "description": "Bold blister noir sur une base dorée. Le naan a considérablement gonflé pendant la cuisson. Des odeurs de blé grillé et d'omble.",
            "action": "Badigeonner immédiatement le beurre d'ail en brûlant à chaud — le beurre s'étourne au contact."
          },
          {
            "state": "Overdone",
            "description": "Uniformement noir et raide. Des bords fragiles. Une odeur amère et acride.",
            "action": "Réduire le temps de cuisson de 30 secondes par côté. Épargnez les naans fortement carbonisés pour les scoops plutôt que l'emballage."
          }
        ]
      },
      "feelCue": "Un cintre naan correctement cuit sans casser et a un léger croquant satisfaisant des taches carbonisées, laissant place à un centre doux et mâcheux qui s'étire sous vos doigts."
    }
  ]
};
