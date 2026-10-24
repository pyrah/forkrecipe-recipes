export default {
  "repoId": "master_middleeastern_lambshawarma_001",
  "parentRepoId": null,
  "slug": "lamb-shawarma",
  "author": "ForkRecipe Kitchen",
  "title": "Lamb Shawarma",
  "description": "L'épaule d'agneau marinée dans une pâte de yogourt épicée à chaud — curcuma, cumin, cannelle, coriandre et cardamome — puis torréfié lentement jusqu'à ce que l'extérieur caramélise en écorce foncée et épicée, tandis que l'intérieur reste suffisamment tendre pour déchiqueter avec une fourchette.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "proteins",
  "tags": [
    "protéine",
    "Moyen-Orient",
    "agneau",
    "Shawarma",
    "épicé",
    "grillés"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "10 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau désossée",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "épaule d'agneau désossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cardamome au sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "marinated_lamb",
      "instructions": "Frottez le yogourt, toutes les épices, l'ail, le jus de citron, l'huile d'olive et salez ensemble jusqu'à ce qu'il soit doux. Scorez l'épaule d'agneau profondément partout, coupant à travers les gros bouchons gras et dans la chair 2–3 cm. Frotter la marinade dans toutes les surfaces et dans toutes les découpes. Couvrir et réfrigérer pendant au moins 6 heures, idéalement pendant la nuit. Le yogourt tendifie les protéines de surface tandis que les épices pénètrent les canaux marqués.",
      "visualCue": {
        "primaryTarget": "L'épaule d'agneau est entièrement enduite d'une pâte jaune doré du curcuma, avec un parfum d'épices visible qui s'en relève.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade se met en commun au fond du plat plutôt que d'adhérer à la viande. Moins de 4 heures de marinage.",
            "action": "Redistribuer la marinade et tourner l'épaule. Score plus profond si la pâte ne pénètre pas."
          },
          {
            "state": "Perfect",
            "description": "Après 8 heures et plus, la pâte a taché la viande aux coupes à un orangé d'or profond. La surface est tacky et aromatique. Le yogourt a légèrement séché à la surface.",
            "action": "Retirer du réfrigérateur 45 minutes avant de rôtir pour enlever le froid."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures — l'acide dans le jus de citron et le yogourt a commencé à tourner les protéines de surface musquées et légèrement grises.",
            "action": "Éliminez doucement l'excès de marinade. Faire rôtir à une chaleur initiale plus élevée pour créer une croûte rapidement."
          }
        ]
      },
      "feelCue": "Après la marinade de nuit, la surface de l'épaule de l'agneau doit se sentir collante et légèrement caoutchouteuse — les protéines et les acides du yogourt commencent à transformer subtilement la couche supérieure de la viande."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "marinated_lamb"
      ],
      "outputState": "slow_roasted_lamb",
      "instructions": "Placez l'épaule sur un support sur un plateau profond. Faire rôtir à 160 °C (320 F) pendant 3 à 3,5 heures, puis se servir de jus de poêle à mi-chemin. La faible chaleur permet à la graisse de rendre lentement et au collagène dans l'épaule de se convertir en gélatine. La surface doit caraméliser progressivement dans une écorce sombre et parfumée plutôt que de brûler.",
      "visualCue": {
        "primaryTarget": "Une écorce d'épices foncée à l'extérieur, de couleur dorée foncée à ocre foncée, la graisse scintille et la surface visible de la viande s'éloigne de l'os à l'articulation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'extérieur semble doré mat et la viande est encore serrée lorsqu'elle est pressée au point le plus épais. L'os ne se sent pas lâche.",
            "action": "Continuez à rôtir. Vérifiez la température interne — il doit atteindre 80 à 85 °C pour la dégradation des tissus conjonctifs."
          },
          {
            "state": "Perfect",
            "description": "De l'écorce noire partout. L'os de la jambe oscille légèrement dans l'épaule. La viande déchique sans effort avec deux fourchettes. Les jus dans la casserole sont en ambre profond.",
            "action": "Reposez-vous 15 à 20 minutes avant de déchiqueter."
          },
          {
            "state": "Overdone",
            "description": "L'écorce s'est croisée en ombrage: des taches noires sur les zones les plus minces et une odeur d'épices brûlées.",
            "action": "Retirer immédiatement et racler la croûte noircie. La viande en dessous est bonne. Reposez-vous."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse de l'épaule à la marque de 3 heures — il devrait céder complètement sous votre doigt, comme presser dans un coussin en mousse ferme, sans ressort."
    },
    {
      "nodeId": "step_3",
      "action": "Mûr",
      "inputs": [
        "slow_roasted_lamb"
      ],
      "outputState": "finished_lamb_shawarma",
      "instructions": "Reposez l'épaule pendant 15 minutes sous une feuille de papier souple. À l'aide de deux fourchettes, déchiqueter la viande de l'os en morceaux irréguliers. Mélanger la viande déchiquetée avec tous les jus de casserole accumulés. Terminer sous une grille ou un grille-pain chaud pendant 3 à 5 minutes pour croquer les morceaux déchiquetés aux bords, ce qui recrée la texture de l'écorce extérieure grillée à la crache.",
      "visualCue": {
        "primaryTarget": "Viande éparpillée en brins irréguliers, certains morceaux caramélisés et sombres aux bords de la grille finale, scintillant avec du gras et des jus de poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande ne se sépare pas en brins — elle est propre ou encore mâcheuse. Pas assez reposé ou sous-chauffé.",
            "action": "Récupérer avec du papier et retourner au four éteint pendant 20 minutes. La chaleur résiduelle et la vapeur desserrent les fibres."
          },
          {
            "state": "Perfect",
            "description": "La viande tombe dans de longs brins humides avec un minimum d'effort. Les bords plus foncés et caramélisés contrastent avec les brins intérieurs pâles. Très parfumé.",
            "action": "Servir immédiatement avec du pain plat, du tahini et des navets marinés."
          },
          {
            "state": "Overdone",
            "description": "La viande est sèche et pâteuse — elle se décompose en miettes sèches plutôt qu'en brins humides.",
            "action": "Arroser de jus de poêle ou d'une cuillère à soupe d'huile d'olive et mélanger. Servez vite."
          }
        ]
      },
      "feelCue": "La viande déchiquetée doit se sentir humide entre les doigts — si vous appuyez sur un brin, une petite perle de jus doit apparaître. Les lambeaux secs signifient que l'épaule a besoin de plus de gras ou plus de temps de repos."
    }
  ]
};
