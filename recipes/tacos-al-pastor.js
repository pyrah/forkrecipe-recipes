export default {
  "repoId": "master_mexican_tacos_al_pastor_001",
  "parentRepoId": null,
  "slug": "tacos-al-pastor",
  "author": "ForkRecipe Kitchen",
  "title": "Tacos Al Pastor",
  "description": "L'épaule fine de porc teinte de guajillo et d'achiote, empilée sur une crache verticale à l'ananas et rôtie jusqu'à ce que les bords caramélisent et ombrage — servie sur des tortillas de maïs chaudes à l'ananas, à l'oignon et à la coriandre.",
  "cuisine": "Mexicain",
  "culture": "Mexico",
  "category": "proteins",
  "tags": [
    "Mexique",
    "porc",
    "tacos",
    "Al-pasteur",
    "Achiote",
    "Guajillo",
    "Mexique-ville",
    "torréfié"
  ],
  "difficulty": 3,
  "activeTime": "1 hour",
  "totalTime": "5 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc, coupée en tranches de 5 mm de long sur le grain",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "fesses de porc",
        "longe de porc désossée (moins grasse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Piments de guajillo séchés, graines enlevées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Piments anchos séchés, graines enlevées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Pâte d'achiote (recado rojo)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "2 cuillerées à café en poudre + 1 cumin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Origan mexicain séché",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus d'ananas (fraîchir)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Vin blanc ou vinaigre de cidre de pomme",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Ananas frais, tranchés en rondelles",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Tortilles de maïs, petites (12 cm)",
      "ratioValue": 24,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Garnish",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Acid",
      "name": "Coins de chaux",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_17",
      "role": "Heat",
      "name": "Salsa verde ou salsa roja",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "toasted_chilies",
      "instructions": "Faire cuire des chilis secs sur un comal sec ou une poêle à feu moyen pendant 15 à 20 secondes de chaque côté, jusqu'à ce qu'ils soient cloqués et parfumés. Transférer dans un bol, couvrir d'eau bouillante et tremper 20 minutes jusqu'à ce qu'il soit complètement adouci. Égoutter, réserver 100 g de liquide trempé.",
      "visualCue": {
        "primaryTarget": "Les piments sont souples et profondément colorés, sentant le chocolat, les fruits secs et la fumée après le toast. Après trempe, ils sont boiteux et gonflés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis sont encore cassants et sentent à plat. La pâte aura un goût terne et poussiéreux.",
            "action": "Retour au comal — le développement des cloques et des arômes est essentiel."
          },
          {
            "state": "Perfect",
            "description": "Plié, souple, aromatique. L'eau qui sème est sombre. Les piments sont doux et souples après trempe.",
            "action": "Égoutter et mélanger."
          },
          {
            "state": "Overdone",
            "description": "Brûlé — noir et acride.",
            "action": "Jetez et recommencez. Le guajillo brûlé ruine la marinade."
          }
        ]
      },
      "feelCue": "Un guajillo grillé et trempé devrait se plier sans craquelure, comme le cuir humide. Si ça craque, il lui faut plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_chilies",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_12"
      ],
      "outputState": "pastor_marinade",
      "instructions": "Mélanger les piments égouttés avec de la pâte d'achiote, de l'oignon, de l'ail, du cumin, de l'origan, du jus d'ananas, du vinaigre, du sel et 80 g de liquide de trempe du chili jusqu'à ce qu'ils soient complètement lisses. Passez à travers un filtre moyen. La marinade devrait être vive pourpre, complètement lisse, et l'odeur de chili grillé, achiote terreuse, et l'acide ananas brillant.",
      "visualCue": {
        "primaryTarget": "Une marinade vive et profonde pourpre, l'achiote la rend presque anormalement rouge. Pas de morceaux visibles ou de fragments de peau. Sens de terre, de chili et de fruits tropicaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est chunky avec des fragments de peau de chili.",
            "action": "Mélanger plus longtemps ou plus soigneusement."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, cramoisi profond, légèrement épais. Stains tout immédiatement au contact.",
            "action": "Faire mariner le porc."
          },
          {
            "state": "Overdone",
            "description": "S.O. — mélange brut.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La marinade devrait tacher vos mains d'un rouge orange vif immédiatement — c'est l'achiote qui fonctionne. Si elle ne fait qu'une faible marque rose, ajouter plus de pâte d'achiote."
    },
    {
      "nodeId": "step_3",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "pastor_marinade"
      ],
      "outputState": "marinated_pork_slices",
      "instructions": "Mélanger les fines tranches de porc avec toute la marinade dans un grand bol, en veillant à ce que chaque surface soit enrobée. Couvrir et réfrigérer pendant au moins 2 heures, idéalement pendant la nuit. Les enzymes du jus d'ananas (bromélaine) tendressent la viande — mais plus de 12 heures peuvent faire la texture farineuse en tranches fines.",
      "visualCue": {
        "primaryTarget": "Chaque tranche de porc est profondément teinte rouge pourpre. Pas de taches pâles ou non couchées. Les tranches sont devenues légèrement collantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plaques de porc non enrobées visibles. Rose pas assez profond.",
            "action": "Ajouter plus soigneusement, presser la marinade en morceaux."
          },
          {
            "state": "Perfect",
            "description": "Revêtement uniformément rouge foncé et collant. Après une nuit de repos, les tranches se sentent légèrement plus fermes à partir de l'acide et du sel.",
            "action": "Pile et rôti."
          },
          {
            "state": "Overdone",
            "description": "Mariné au-delà de 12 heures dans du jus d'ananas frais — la bromelaine a commencé à dissoudre les protéines de viande.",
            "action": "Toujours bon pour la cuisson mais la texture sera plus douce que idéale."
          }
        ]
      },
      "feelCue": "Après la miction de la nuit, les tranches de porc se sentent légèrement plus fermes et plus denses que le porc cru, le sel et l'acide ont fait un léger remède."
    },
    {
      "nodeId": "step_4",
      "action": "Rôtis",
      "inputs": [
        "marinated_pork_slices",
        "ing_11"
      ],
      "outputState": "roasted_pastor_meat",
      "instructions": "Méthode à la maison : Coucher les tranches de porc marinées dans une poêle en fonte ou sur une plaque de cuisson, en recoupant légèrement. Tuck ananas ronds entre et sur le dessus. Faire cuire à 200 C (400 F) pendant 30 minutes, puis faire griller 5 à 8 minutes jusqu'à ce que les bords supérieurs de l'omble et de la caramélise. Alternative : construire une pile verticale de tranches de porc sur une brochette, entrecoupée d'ananas, et rôtir sous le gril, tournant toutes les 5 minutes pour un total de 20 à 25 minutes.",
      "visualCue": {
        "primaryTarget": "La couche supérieure de porc est profondément dorée et carbonisée sur les bords, presque brûlée dans des endroits – cet omble est la saveur. L'ananas est doré et légèrement caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est entièrement cuit mais pâle. Pas de char. Saveur sera plate sans la caramélisation Maillard.",
            "action": "Déplacez-vous sous la grille et l'omble agressivement."
          },
          {
            "state": "Perfect",
            "description": "Charrée et caramélisée aux bords exposés, avec la douceur fumée de l'ananas et la pâte de chili grillée. Extérieur foncé, intérieur juteux.",
            "action": "Couper et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Toute la surface est noire. Amère et acride.",
            "action": "Supprimer le calque supérieur. Les couches inférieures sont probablement parfaites."
          }
        ]
      },
      "feelCue": "La couche supérieure carbonisée du pasteur doit craquer lorsqu'elle est pressée — cette texture contraste entre l'omble croustillant et la viande juteuse en dessous est la marque du plat."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "roasted_pastor_meat",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_16",
        "ing_17"
      ],
      "outputState": "finished_tacos_al_pastor",
      "instructions": "Couper ou hacher le porc rôti en petits morceaux irréguliers, y compris les bords carbonisés. Tortilles de maïs chaudes directement au-dessus d'une flamme à gaz ou d'un comal sec jusqu'à ce qu'elles soient légèrement carbonisées et pliables. Doubler les tortillas (style taqueria mexicaine). Pil de porc sur les tortillas, garnir d'oignon en dés, de coriandre et d'un carré d'ananas. Servir avec des quartiers de chaux et de la salsa.",
      "visualCue": {
        "primaryTarget": "Petite tortilla de maïs double remplie de porc carbonisé pourpre, d'oignon blanc vif en dés, de coriandre verte et d'ananas doré. La salsa pooling aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tortillas sont froides et ne sont pas chaudes. Ils déchireront et ne se replieront pas correctement.",
            "action": "Toujours réchauffer les tortillas sur feu direct ou comal. Les tortillas froides ruinent les tacos."
          },
          {
            "state": "Perfect",
            "description": "Tortilles tièdes, légèrement carbonisées, contenant du porc qui comprend à la fois des pièces extérieures carbonisées et de l'intérieur juteux. Garnir lumineux et frais.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Tacos assemblés trop loin à l'avance. Les tortillas sont allées ensanglantées dans les jus de viande.",
            "action": "Toujours assembler al momento."
          }
        ]
      },
      "feelCue": "Le taco al pasteur parfait devrait avoir des textures contrastées dans chaque bouchée : tortilla légèrement carbonisée, viande croustillante, intérieur de porc juteux, oignon cru croquant, et l'éclatement du jus d'ananas."
    }
  ]
};
