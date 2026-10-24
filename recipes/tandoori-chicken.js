export default {
  "repoId": "master_indian_tandoori_chicken_001",
  "parentRepoId": null,
  "slug": "tandoori-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet tandoori",
  "description": "Des morceaux de poulet osés marinés dans un double manteau de yogourt épicé brillamment pourpre, où l'acide lactique de la laiterie tend la chair comme le garam masala, le cumin et le fenugrec parfument chaque fibre — puis cuit à la chaleur féroce jusqu'à ce que les ombles extérieurs aux bords et la marinade cloques à une croûte fumée et caramélisée qui pele dans des shards parfumés.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "proteins",
  "tags": [
    "tandoori",
    "poulet",
    "indienne",
    "punjabi",
    "yaourt-marinade",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oignons, morceaux de poulet sur la peau (jambes, cuisses, poitrines)",
      "ratioValue": 3,
      "defaultUnit": "lbs",
      "substitutions": [
        "cuisses de poulet désossées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "Yogourt grec éclairci avec 2 c. à soupe d'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail râpées ou hachées à pâte",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 1.5,
      "defaultUnit": "tbsp",
      "substitutions": [
        "1 c. à thé de gingembre moulu"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre de chili cachemiri (légère, pour la couleur et la saveur)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "paprika + pincée cayenne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Feuilles de fénugreek broyées",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Ghee, fondu"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Chaat masala et quartiers de citron, pour servir",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Score",
      "inputs": [
        "ing_01"
      ],
      "outputState": "scored_chicken",
      "instructions": "À l'aide d'un couteau tranchant, marquer chaque morceau de poulet à l'os avec 3-4 découpes parallèles profondes (environ 1 cm de profondeur) à travers la partie la plus épaisse. Pour les seins, faire des coupes diagonales à travers la poitrine. Pour les jambes et les cuisses, couper jusqu'aux os. Ce n'est pas facultatif — sans marquer, la marinade n'est assise qu'à la surface et les parties les plus épaisses seront cuites avant les chars extérieurs.",
      "visualCue": {
        "primaryTarget": "Des découpes profondes et propres à travers la peau et la chair, atteignant l'os, uniformément espacées sur tous les morceaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement des petites bites. La marinade enrobera la surface mais ne pénétrera pas.",
            "action": "Couper plus profondément — surmonter l'hésitation. Les coupes se ferment pendant la cuisson et sont invisibles dans le plat final."
          },
          {
            "state": "Perfect",
            "description": "Des découpes profondes qui s'ouvrent comme des bouches quand le poulet est maintenu côté courbé vers le haut. Atteindre l'os. Toujours espacé.",
            "action": "Appliquer la première couche de marinade."
          },
          {
            "state": "Overdone",
            "description": "Les découpes se sont coupées de l'autre côté ou ont complètement coupé le pilon.",
            "action": "Continuez soigneusement — la pièce sera cuite plus rapidement dans ces zones."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt sur les coupes — elles devraient s'ouvrir proprement sous votre bout de doigt comme des fentes."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "scored_chicken",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Battre tous les ingrédients de la marinade jusqu'à ce qu'ils soient bien combinés – le mélange doit être un orange rouge brillant avec une consistance yogourt-crème uniforme. Appliquer en deux étapes : d'abord, frotter une légère couche de sel, de jus de citron et une pincée de chili dans le poulet et reposer 20 minutes. Ensuite, appliquer la marinade complète du yogourt, en appuyant agressivement sur chaque score et sous la peau chaque fois que possible. Couvrir et réfrigérer pendant au moins 3 heures; la nuit (jusqu'à 24 heures) est significativement meilleure.",
      "visualCue": {
        "primaryTarget": "Morceaux de poulet entièrement enduits d'une marinade orangée-carmson épaisse et brillante, avec marinade visiblement emballée dans chaque coupe et drapée sur les extrémités osseuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Revêtement mince. Peau pâle visible en dessous. Marinade mise en commun au fond du plat plutôt que de s'accrocher.",
            "action": "Appliquer plus de marinade et le travailler fermement. Le yaourt doit s'accrocher sans goutter."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, même manteau sur chaque surface. Découpes emballées avec marinade. Le poulet est un pourpre-orange uniforme et sent très épicé.",
            "action": "Réfrigérer et attendre que l'acide et les enzymes fonctionnent."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures en marinade. L'acide yogourt peut avoir rendu la texture de surface musquée.",
            "action": "Cuire immédiatement."
          }
        ]
      },
      "feelCue": "Travaillez la marinade sous la peau avec vos doigts — elle devrait avoir l'impression de répandre une crème épaisse sous une membrane mince."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "roasted_tandoori",
      "instructions": "Préchauffer le four à la température maximale (500-550 F / 260-290 C) et placer un rack dans la position la plus haute. Étaler une plaque avec du papier et placer un porte-fils sur le dessus. Enlevez le poulet de la marinade et secouez l'excès — une couche mince et uniforme est ce qui reste. Arrangez-vous sur le côté de la rack. Faire cuire 20-25 minutes pour les cuisses et les jambes, 18-22 minutes pour les seins, jusqu'à ce que la marinade soit carbonisée aux points les plus hauts et que les jus soient dégagés. En option : terminer sous le grille-croûte pendant 2-3 minutes pour un char authentique.",
      "visualCue": {
        "primaryTarget": "Croûte de marinade fortement carbonisée, blister aux bords élevés et aux extrémités osseuses, rouge orangé brillant ailleurs, avec les découpes marquées ouverture et montrant la chair cuite à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est encore orange pâle et humide. Les jus sont roses aux coupures. L'intérieur est printanier.",
            "action": "Continuer la torréfaction et vérifier la température : cible 165 F (74 C) au point le plus épais de l'os."
          },
          {
            "state": "Perfect",
            "description": "La marinade est carbonisée et cloquée aux pics, rouge orangé profond ailleurs. Les coupes notées montrent une chair juteuse entièrement cuite. Les jus sont dégagés. La cuisine sent la fumée et les épices grillées.",
            "action": "Retirer du four. Reposez-vous 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Marinade est uniformément noire et acride. La chair est sèche lorsque les coupures sont pressées.",
            "action": "Salvage: retirer du four, garnir le pire omble. L'intérieur peut encore être juteux."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt dans la partie la plus épaisse d'une cuisse — il devrait ressorter fermement avec un léger fil résiduel, comme une poignée de main ferme."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "roasted_tandoori",
        "ing_14"
      ],
      "outputState": "finished_tandoori_chicken",
      "instructions": "Transférer le poulet dans un plateau de service. Poussière immédiatement au chaat masala — son profil aigre, salé et fumé amplifie la marinade. Disposer les coins de citron à côté. Servir avec du naan ou du roti, de l'oignon cru tranché et du chutney coriandre frais. Les bords carbonisés sont la meilleure partie — encourager les dîneurs à les manger.",
      "visualCue": {
        "primaryTarget": "Un plateau de morceaux de poulet de couleur spectaculaire, carbonisé-arête poussière avec tart chaat masala, entouré de quartiers de citron lumineux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servi sans chaat masala et citron — techniquement fin mais manquant le contrepoint acide qui fait tandoori snap.",
            "action": "Ajoutez les deux. Ne sautez pas le citron — son jus pressé à la table illumine tout."
          },
          {
            "state": "Perfect",
            "description": "Servi immédiatement avec le chaat masala installé dans les crevasses carbonisées et le citron pressé sur les coupes marquées.",
            "action": "Mangez."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est assis sous une tente en feuilles depuis plus de 15 minutes et la croûte s'est adoucie.",
            "action": "Une explosion de 2 minutes sous le grilleur ravivera la croûte."
          }
        ]
      },
      "feelCue": "La croûte doit se briser quand vous la mordez, comme en brisant une fine croûte épicée, donnant à la chair humide en dessous."
    }
  ]
};
