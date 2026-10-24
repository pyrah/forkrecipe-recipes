export default {
  "repoId": "master_mediterranean_grilled_whole_fish_001",
  "parentRepoId": null,
  "slug": "grilled-whole-fish",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons entiers grillés méditerranéens",
  "description": "Un bar de mer entier ou une brème a marqué sa peau et rempli de tranches de citron, d'herbes et d'ail, puis grillé sur des charbons ouverts jusqu'à ce que la peau cloque et croustille loin de la chair et la chair elle-même transpire ses jus sur la grille ci-dessous. Réponse du pêcheur grec à la technique : simplicité, feu et temps.",
  "cuisine": "Méditerranée",
  "culture": "Grec",
  "category": "seafood",
  "tags": [
    "poissons entiers",
    "grillé",
    "méditerranéen",
    "grec",
    "herbe",
    "citron"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
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
    "sour": 3,
    "bitter": 2,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bars ou brèmes de mer entiers (400 à 500 g chacun), écalés et vidés",
      "ratioValue": 2,
      "defaultUnit": "fish",
      "substitutions": [
        "snapper rouge",
        "branzino",
        "truite"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Citron, tranché en rondelles",
      "ratioValue": 2,
      "defaultUnit": "lemons",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Graines d'origan frais",
      "ratioValue": 6,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Origan séché, 1 c. à soupe"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil frais à feuilles plates",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Jus de citron frais (pour servir)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Coins de citron, pour servir",
      "ratioValue": 4,
      "defaultUnit": "wedges",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Score et trucs de poisson",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "prepared_fish",
      "instructions": "Pat poisson sec à l'intérieur et à l'extérieur. À l'aide d'un couteau tranchant, marquer chaque côté du poisson avec des coupes diagonales de 3 à 4, en étirant jusqu'à l'os. Les coupes doivent être espacées d'environ 2 cm. Assaisonner généreusement la cavité avec du sel et du poivre. Remplir chaque cavité de tranches alternées de citron, d'ail et de brins d'herbe — emballer fermement. Frotter l'extérieur des deux poissons généreusement avec de l'huile d'olive, le presser dans les marques de score. Assaisonner la peau marquée avec du sel grossier et du poivre. Laisser reposer à température ambiante pendant 15 minutes avant de griller.",
      "visualCue": {
        "primaryTarget": "Poisson avec des marques diagonales profondes et propres, cavité visiblement remplie de rondelles de citron, d'ail et d'herbes vertes. Extérieur brillant d'huile. Les notes montrent de la chair blanche dans l'huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les marques sont trop peu profondes: à peine gratter la peau sans atteindre la chair. Aromatique ne pénétrera pas.",
            "action": "Score plus profondément avec un couteau tranchant, appuyant fermement jusqu'à l'os latéral sur chaque coup."
          },
          {
            "state": "Perfect",
            "description": "Les marques atteignent l'os proprement. La cavité est pleine. Extérieur bien huilé et assaisonné. La peau semble tendue et prête.",
            "action": "Laisser reposer 15 minutes à température ambiante, puis griller."
          },
          {
            "state": "Overdone",
            "description": "Des marques de pointage ont traversé le poisson et séparé la chair de la peau dans des endroits.",
            "action": "Encore très bien — remplissez les trous avec des herbes et du citron et le poisson se tiendra ensemble sur le grill. Tenez-vous bien."
          }
        ]
      },
      "feelCue": "Appuyez sur la chair marquée — elle devrait se sentir légèrement collante à partir de l'huile et du sel, et les marques de score devraient s'ouvrir légèrement sous la pression des doigts, montrant la chair blanche à l'intérieur."
    },
    {
      "nodeId": "step_2",
      "action": "Grille",
      "inputs": [
        "prepared_fish"
      ],
      "outputState": "grilled_fish",
      "instructions": "Préparer un grill à deux zones — un côté très chaud (charbons directs ou flammes élevées), un côté plus frais (indirect). Nettoyez la grille avec agressivité avec une brosse en fil et huilez-la avec une serviette en papier pliée trempée dans l'huile sur les pinces. Placer le poisson sur la zone chaude à un angle de 45 degrés par rapport aux grilles. Ne les déplacez pas pendant 4-5 minutes. La peau doit d'abord coller et ensuite se libérer seule lorsque la croûte s'est formée. Lorsque le poisson se libère librement, tourner à 90 degrés pour créer des marques croisées. Après 2 minutes de plus, retourner une fois. Griller le deuxième côté pendant 4 à 5 minutes. Si le poisson brunit trop vite, passez à la zone plus froide.",
      "visualCue": {
        "primaryTarget": "La peau est cloquée, croustillée et présente des marques claires de grillage croisé. Les yeux sont devenus blancs et la chair visible dans les marques de score est opaque partout. Pas de chair rose translucide montrant au score le plus profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore pâle et s'accroche à la grille. Le poisson n'a pas encore été libéré. La chair dans les notes montre toujours la translucidité.",
            "action": "Ne forcez pas un flip. Attendez — le poisson se libérera proprement quand la croûte sera formée. La force déchire la peau."
          },
          {
            "state": "Perfect",
            "description": "La peau est carbonisée et croustillée, libérant des grilles avec une peau propre. Les yeux blancs. Flesh entièrement opaque dans les scores. Une brochette métallique insérée au point le plus épais et maintenue à la lèvre pendant 3 secondes sort chaude, pas fraîche.",
            "action": "Reposez-vous 2 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La peau est profondément carbonisée et commence à noircir. La chair dans les scores semble sèche et commence à s'éloigner excessivement de l'os.",
            "action": "Passer immédiatement à la chaleur indirecte. Servir rapidement — reposer sur la chaleur résiduelle continuera à cuire."
          }
        ]
      },
      "feelCue": "Le poisson est prêt à basculer quand vous pouvez glisser une mince spatule sous le corps et il soulève proprement sans déchirer — il s'éloigne de la grille avec un son comme velcro déchirant."
    },
    {
      "nodeId": "step_3",
      "action": "Repos et assiette",
      "inputs": [
        "grilled_fish",
        "ing_10",
        "ing_07",
        "ing_11"
      ],
      "outputState": "finished_grilled_fish",
      "instructions": "Soulever le poisson sur un plateau chaud. Laisser reposer 2 minutes – la température intérieure sera égale et la cuisson de report finira doucement le centre. Pressez le jus de citron sur l'ensemble du poisson, en le laissant mettre dans les marques de score et de courir dans la cavité. Dispersez du persil déchiré sur le dessus. Servir à la table avec des coins de citron. Pour servir : utilisez deux grandes cuillères pour soulever le filet supérieur le long de la ligne latérale, puis épluchez l'épine dorsale pour exposer le filet inférieur.",
      "visualCue": {
        "primaryTarget": "Un beau poisson carbonisé sur un plateau, peau croustillante, jus de citron scintillant dans les marques de score, persil dispersé. Les yeux doivent être entièrement blancs — un indicateur clair de la finesse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yeux encore translucides ou nuageux. Le poisson est allé à la table sans se reposer — les jus s'épuisent immédiatement lorsqu'ils sont coupés.",
            "action": "Un repos de 2 minutes est obligatoire. Sans elle, le poisson libère tous ses jus sur la plaque plutôt que de les redistribuer à travers la chair."
          },
          {
            "state": "Perfect",
            "description": "Yeux complètement blancs. Le poisson se maintient lorsqu'il est soulevé, la peau est encore croquante. Le jus de citron a immédiatement éclairci l'arôme. La chair se soulève proprement de l'os dans des sections entières.",
            "action": "Servir le premier filet et éplucher l'épine dorsale pour exposer le second."
          },
          {
            "state": "Overdone",
            "description": "La chair tombe de l'os avant d'être prête. Sécher aux bords près des coupures.",
            "action": "Ajouter l'huile d'olive et le citron pour compenser. La saveur est encore excellente — présentez-la avec confiance."
          }
        ]
      },
      "feelCue": "Soulevez le filet supérieur avec une cuillère — il devrait glisser de l'os dans un seul mouvement propre sans déchirer, comme retirer une feuille de papier d'un tampon. La résistance signifie qu'elle a besoin de plus de temps; s'effondrer signifie qu'elle avait trop."
    }
  ]
};
