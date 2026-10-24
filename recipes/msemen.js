export default {
  "repoId": "master_moroccan_msemen_001",
  "parentRepoId": null,
  "slug": "msemen",
  "author": "ForkRecipe Kitchen",
  "title": "Mmemen (pain plat laminé marocain)",
  "description": "Un pain plat carré fait en pliant le beurre et la semoule dans une pâte étirée à plusieurs reprises, en construisant des couches minces et minces qui se séparent lorsqu'elles sont déchirées — mangées avec de l'huile d'argan et du miel pour le petit déjeuner, ou servies aux côtés d'un haira à la fin du Ramadan, au chaud de la grille et impossible à manger seulement un.",
  "cuisine": "Maroc",
  "culture": "Amazigh",
  "category": "breads",
  "tags": [
    "pain",
    "Maroc",
    "Pain plat",
    "option végétalienne",
    "amazigh",
    "laminés",
    "grille"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "2 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 1380,
  "forks": 89,
  "contributors": 26,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-02-15",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Semoule fine (farine de semoule)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (40 C)",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
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
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "huile d'olive (vegan, moins flocée)",
        "smen (beurre marocain vieilli)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Sémoline grossière (pour la plastification)",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile végétale (pour les mains et la surface huileuses)",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agenouillement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "rested_dough",
      "instructions": "Mélanger les farines, le sel et la levure. Ajouter l'eau chaude et mélanger jusqu'à ce qu'une pâte se forme. Agenouillez à la main de 10 à 12 minutes jusqu'à ce que la pâte soit lisse, souple et légèrement collante. La semoule lui donne un sentiment peu grainé qui se calmera comme il repose. Divisez la pâte en 8 boules égales (environ 80-90g chacune). Huilez généreusement vos mains et chaque boule. Couvrir d'un chiffon humide et reposer de 30 à 45 minutes jusqu'à ce que la pâte se détende et devienne très extensible.",
      "visualCue": {
        "primaryTarget": "Extensibilité de la boule de douille après le repos",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les balles sont serrées et ressortent agressivement lorsqu'elles sont étirées. La pâte larmes si tiré au-delà de 10 cm.",
            "action": "Reposez-vous encore 15 minutes. Le gluten doit se détendre complètement pour l'étape d'étirement au travail."
          },
          {
            "state": "Perfect",
            "description": "Une boule de pâte étirée doucement entre les mains huilées s'étend jusqu'à une feuille presque translucide, d'environ 25 à 30 cm, sans déchirement. La surface est légèrement grasse à partir de l'huile.",
            "action": "Procéder immédiatement à la stratification."
          },
          {
            "state": "Overdone",
            "description": "Les boules de dough se reposent si longtemps qu'elles ont l'air gonflées et légèrement gonflées — la levure a commencé à produire du gaz.",
            "action": "Continuez immédiatement. On peut utiliser de la pâte de msémène surproofée, mais la texture peut avoir de petites poches d'air."
          }
        ]
      },
      "feelCue": "Prenez une boule de pâte reposée et tirez-la doucement vers vous — il devrait s'étirer facilement sans résistance, comme un taffiy chaud, s'étendant plusieurs centimètres avant de sentir n'importe quel pushback."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "rested_dough",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "laminated_squares",
      "instructions": "Sur une surface légèrement huilée, utilisez les mains et le bout des doigts huilés pour étirer une boule de pâte dans un rectangle très fin, presque translucide. Étendre un mince frottis de beurre ramolli sur toute la surface avec vos doigts. Saupoudrer une pincée de semoule grossière sur le beurre — c'est ce qui crée les couches séparées. Plier un tiers du rectangle vers le centre, puis plier l'autre tiers sur (plier la lettre), faisant une longue bande. Repliez la bande en troisièmes pour créer un carré. Appuyez doucement. Répétez pour toutes les couilles. Reposez-vous 10 minutes.",
      "visualCue": {
        "primaryTarget": "Tôles minces et distribution du beurre",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La feuille est épaisse et opaque, environ 5 mm. La couche de beurre sera trop épaisse par rapport à la pâte, la rendant grasse.",
            "action": "Continuer à s'étirer avec le bout des doigts, en travaillant du centre vers l'extérieur. La feuille devrait être assez fine pour voir votre main."
          },
          {
            "state": "Perfect",
            "description": "La feuille est presque translucide — vous pouvez voir le contour de votre main en dessous. Le beurre se répand dans un film microscopiquement mince. Semolina se disperse visiblement et individuellement. Le carré plié est propre et compact.",
            "action": "Empilez les carrés sur une plaque huilée. Laisser reposer 10 minutes avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Tôle déchirée en plusieurs endroits pendant l'étirement.",
            "action": "Pliez et continuez — les larmes n'auront pas beaucoup d'importance après la cuisson, bien que la couche soit moins définie aux sites de la déchirure."
          }
        ]
      },
      "feelCue": "Tenez une feuille étirée et beurrée contre une fenêtre — vous devriez voir la lumière du jour à travers la pâte clairement, les couches aussi minces que le papier de tissu, le beurre visible comme un peu d'éclat plutôt qu'une couche bombée."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "laminated_squares"
      ],
      "outputState": "finished_msemen",
      "instructions": "Chauffer une grille en fonte sèche ou une poêle lourde à feu moyen-doux. Ne pas huiler la poêle — le beurre dans la pâte rendra et fera frire le pain de l'intérieur. Cuire chaque carré de 3 à 4 minutes de chaque côté, en appuyant doucement avec une spatule plate, jusqu'à ce que chaque côté soit doré-brun tacheté avec des taches plus foncées où les couches sont les plus épaisses. L'intérieur va souffler légèrement comme la vapeur se construit entre les couches. Servir immédiatement — les msémens deviennent cuireux à mesure qu'ils refroidissent.",
      "visualCue": {
        "primaryTarget": "Séparation de la surface et de la couche pendant la cuisson",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est beige pâle et la pâte semble encore crue au centre. Le pain ne sent pas encore grillé.",
            "action": "Continuer la cuisson à feu moyen-doux. Ne vous précipitez pas avec une chaleur plus élevée — il brûlera l'extérieur tout en laissant l'intérieur brut."
          },
          {
            "state": "Perfect",
            "description": "Mottled doré-brun des deux côtés avec des taches ambres plus foncées. Les bords sont légèrement croquants. Lorsqu'elle est déchirée au coin, l'intérieur révèle des couches minces distinctes séparées par des poches d'air visibles. Des odeurs de blé grillé, de beurre et de semoule.",
            "action": "Servir immédiatement avec de l'huile d'argan, du miel ou de l'amlou (pâte d'argan-amande)."
          },
          {
            "state": "Overdone",
            "description": "Le pain est brun très foncé et est devenu raide et dur. Des odeurs de beurre brûlé.",
            "action": "Réduire la chaleur pour les morceaux suivants. Le brûlé peut être émietté dans un ragoût ou un thé."
          }
        ]
      },
      "feelCue": "Prenez un msémen chaud et fléchissez-le doucement entre les deux mains — vous devriez sentir les couches résister légèrement et puis glisser l'un contre l'autre, le pain à la fois souple et structuré, comme le velours épais plié sur lui-même."
    }
  ]
};
