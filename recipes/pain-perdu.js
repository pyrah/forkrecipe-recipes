export default {
  "repoId": "master_french_pain_perdu_001",
  "parentRepoId": null,
  "slug": "pain-perdu",
  "author": "ForkRecipe Kitchen",
  "title": "Douleur Perdu",
  "description": "Morceaux de brioche d'un jour imbibés d'une pâte à la vanille et cuits dans du beurre mousseux jusqu'à ce que l'extérieur forme une croûte dorée et que l'intérieur tremble comme une crème chaude — le toast français original.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "desserts",
  "tags": [
    "douleur-perdu",
    "français",
    "Tôt français",
    "pain",
    "œuf",
    "Petit déjeuner",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Brioche (âgée d'un jour, coupée en tranches de 2,5 cm d'épaisseur)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "pain sandwich blanc épais",
        "Challah",
        "douleur de mie"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Oeufs entiers",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "crème unique",
        "moitié et moitié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre vanille"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de haricots vanille",
        "zeste d'orange"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Sucre glacé (pour servir)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "custard_batter",
      "instructions": "Découpez les œufs en un plat large et peu profond: un plat de gratin ou une assiette de soupe est idéal. Ajouter le lait, le sucre, la vanille et le sel. fouetter jusqu'à ce qu'il soit complètement combiné et que le sucre se soit dissous — environ 30 secondes. Le mélange doit être homogène et légèrement mousseux. Le rapport oeuf/lait est délibérément généreux : vous voulez une crème, pas un lavage. Goûtez - il doit goûter riche, doux à la vanille, et légèrement oeuf, comme la meilleure crème brûlée base.",
      "visualCue": {
        "primaryTarget": "Un liquide jaune pâle et légèrement mousseux dans le plat peu profond. Il devrait paraître un peu plus opaque que le lait — les jaunes d'œufs lui donnent une teinte crémeuse, légèrement dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des éraflures de blanc d'œuf encore visibles — pas complètement fouettées ensemble. Le sucre n'est pas dissous et vous pouvez voir des granules sur le fond.",
            "action": "fouetter encore quelques secondes et laisser le plat reposer pendant 1 minute pour que le sucre se dissout avant de tremper le pain."
          },
          {
            "state": "Perfect",
            "description": "Un or uniformément pâle et légèrement mousseux. Des odeurs de vanille. Tous les éléments sont entièrement combinés.",
            "action": "Placer les tranches de brioche dans la crème et laisser tremper."
          },
          {
            "state": "Overdone",
            "description": "Ce n'est pas un risque réel, c'est un mélange non cuit. Si le lait est très froid, le sucre peut se dissoudre lentement. Chauffer légèrement le lait avant de le mélanger si nécessaire.",
            "action": "Whisk encore brièvement une fois tout le sucre s'est dissous."
          }
        ]
      },
      "feelCue": "Lorsque vous passez un doigt à travers la pâte à crème, il doit se sentir lisse et légèrement lissé — le sucre dissous et le jaune d'œuf lui donnent une viscosité à peine là, comme la crème très fine."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "custard_batter"
      ],
      "outputState": "soaked_brioche",
      "instructions": "Placer les tranches de brioche dans la pâte à crème et tremper 1 minute par côté – au total 2 minutes. Le pain doit être visiblement saturé et se sentir lourd, mais ne pas se désintégrer. La brioche d'un jour est idéale parce qu'elle est assez sèche pour absorber complètement sans s'effondrer; le pain frais s'effondrera et s'effondrera. Lorsque vous soulevez une tranche, maintenez - la brièvement au - dessus du plat — tout excès de crème doit couler dans un filet lent, et non dans un ruisseau, et la tranche doit tenir fermement.",
      "visualCue": {
        "primaryTarget": "La tranche est uniformément saturée — la couleur crème pâle de la brioche a été remplacée par un jaune custard translucide. Il tient sa forme lorsqu'il est soulevé mais se sent nettement plus lourd.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'extérieur est humide mais l'intérieur est encore sec et blanc quand vous regardez au bord coupé. La tranche a le même poids que le pain sec.",
            "action": "Retourner à la crème et tremper encore 30 secondes de chaque côté. Appuyez très doucement sur le bout des doigts pour favoriser l'absorption."
          },
          {
            "state": "Perfect",
            "description": "Lourd, uniformément de couleur crème, tenant sa forme. Drips lentement quand levé. Le bord coupé montre une saturation totale au centre.",
            "action": "Déplacez-vous immédiatement dans la poêle chaude — une tranche trempée doit être cuite immédiatement, et non à gauche, assise dans la crème."
          },
          {
            "state": "Overdone",
            "description": "La tranche a absorbé tellement de crème qu'elle se désintègre aux bords et perd son intégrité structurale. S'effondrent quand ils sont levés.",
            "action": "Soulever très soigneusement avec une spatule. Il fera encore cuire, mais gérer doucement. Utilisez du pain plus sec ou plus vieux la prochaine fois ou réduisez le temps de trempage."
          }
        ]
      },
      "feelCue": "Soulevez la tranche trempée: elle doit sentir lourd et doux — comme une éponge bien mouillée qui tient toujours ensemble. S'il saigne de façon spectaculaire ou se brise au centre, il est trempé trop longtemps."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "soaked_brioche",
        "ing_07"
      ],
      "outputState": "cooked_pain_perdu",
      "instructions": "Faire fondre le beurre dans une poêle antiadhésive ou bien assaisonnée à feu moyen. Lorsque la mousse s'élève et commence à s'effondrer — le beurre est maintenant bruyant — posez doucement les tranches de brioche trempées dans la poêle. Ne les déplacez pas. Cuire 2-3 minutes jusqu'à ce que le dessous soit brun doré profond avec des taches caramélisées. Flipez soigneusement avec une large spatule et faites cuire le deuxième côté pendant 2-3 minutes de plus. L'intérieur doit trembler comme de la crème fraîche — pas liquide, pas sèche. Travailler en lots si nécessaire; ne pas fouler la casserole.",
      "visualCue": {
        "primaryTarget": "Les deux faces coupées sont profondes, même dorées, avec quelques taches caramélisées plus foncées, la couleur d'une crêpe parfaite. Les bords ont formé une légère croûte. Le centre, lorsqu'il est pressé, donne comme de la crème douce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, pas de caramélisation. La surface semble mouillée et l'intérieur est liquide lorsqu'elle est pressée. Le pain n'est pas prêt.",
            "action": "Laissez une minute de plus. Résistez à l'envie de déplacer la tranche — elle a besoin d'un contact complet avec la poêle pour caraméliser."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde avec des bords de caramel. Il ressort lentement lorsqu'il est pressé au centre, comme une tarte douce et chaude. Des odeurs de beurre brun et de vanille.",
            "action": "Servir immédiatement, avec du sucre glacé. Il se dégrade rapidement — la croûte s'adoucit en quelques minutes."
          },
          {
            "state": "Overdone",
            "description": "Morceaux brun foncé ou noir à la surface. L'intérieur se sent ferme et sec plutôt que tremblant. Le beurre dans la poêle a brûlé.",
            "action": "Servir rapidement, quelle que soit la couleur de la croûte noire. Essuyer la poêle et ajouter le beurre frais pour le prochain lot."
          }
        ]
      },
      "feelCue": "Appuyez très doucement sur le centre de la tranche de cuisson avec un doigt à travers un morceau de parchemin — il devrait céder avec un léger tremblement, comme presser le dessus d'un flan à sertir. S'il est rigide et sec, il est surdosé."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "cooked_pain_perdu",
        "ing_08"
      ],
      "outputState": "finished_pain_perdu",
      "instructions": "Transférer immédiatement la douleur chaude dans des assiettes chaudes. Poussière généreusement avec du sucre glaçant à travers un tamis fin — le sucre fond légèrement au contact de la surface chaude et caramélise aux bords. Servir avec rien d'autre, ou avec un petit pot de crème fraîche et une cuillère de compote de fruits. Le point est le contraste entre la croûte caramélisée croustillante et l'intérieur de la crème tremblante.",
      "visualCue": {
        "primaryTarget": "Des tranches dorées-brunes, dépoussiérées dans une fine neige blanche de sucre glace, servies sur des assiettes chaudes. La surface mijote où le sucre a commencé à fondre dans la croûte chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine n'importe quel sucre à la surface. La croûte caramélisée est nue et le contraste visuel du sucre contre l'or est perdu.",
            "action": "Poussière plus généreuse: le sucre doit former une fine couche blanche visible sur toute la surface."
          },
          {
            "state": "Perfect",
            "description": "Fin, même la poussière de sucre glaçant sur la surface dorée — une partie commence immédiatement à fondre et à briller aux points de contact avec la croûte chaude. Elle a servi chaud.",
            "action": "Apportez à la table immédiatement. Ne le laissez pas s'asseoir."
          },
          {
            "state": "Overdone",
            "description": "Servi à froid — la croûte s'est adoucie et le contraste entre l'extérieur et l'intérieur tremblant est perdu. Le sucre s'est entièrement dissous.",
            "action": "Réchauffer brièvement dans une casserole sèche à feu moyen pour ré-encrasser la croûte si elle est trop longtemps assise."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez la fourchette à travers le perdu de douleur fini, il doit y avoir deux sensations distinctes : la légère croûte caramélisée qui s'en va, puis la douceur immédiate de l'intérieur chaud de la crème."
    }
  ]
};
