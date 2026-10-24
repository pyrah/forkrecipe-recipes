export default {
  "repoId": "master_ethiopian_ethiopianinjera_001",
  "parentRepoId": null,
  "slug": "ethiopian-injera",
  "author": "ForkRecipe Kitchen",
  "title": "Injera éthiopienne",
  "description": "Une vaste crêpe de teff aigre, remplie de mille yeux minuscules, le pain vivant d'Éthiopie qui est simultanément plat, ustensile et fermenté pour chaque ragoût qu'il contient.",
  "cuisine": "Éthiopien",
  "culture": "Habesha",
  "category": "grains",
  "tags": [
    "grains",
    "végétalien",
    "Sans gluten",
    "Teff",
    "ethiopienne",
    "Pâtes alimentaires",
    "fermenté"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "72 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 4,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de Teff (brun ou ivoire)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "50/50 teff et farine de sarrasin"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau, température ambiante",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Ersho (teff starter) ou kéfir d'eau",
      "ratioValue": 50,
      "defaultUnit": "ml",
      "substitutions": [
        "entrée de levure sauvage (hydratation 100%)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Eau bouillante (pour absit)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fermenter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "fermented_teff_batter",
      "instructions": "Dans un grand bol en céramique ou en verre, fouetter ensemble la farine de teff et l'eau à température ambiante jusqu'à ce qu'elle soit complètement lisse sans grumeaux. Ajouter le démarreur ersho et remuer. Couvrez-le de façon lâche avec un chiffon (non hermétique — il doit respirer) et laissez-le à température ambiante (20–24°C) pendant 48–72 heures. Mélanger une ou deux fois par jour. La pâte va buller activement, sentir de plus en plus amer, et un liquide sombre peut monter à la surface — c'est le teff se séparant, pas la détérioration. Après 72 heures, égoutter tout liquide sombre du haut.",
      "visualCue": {
        "primaryTarget": "Les battements sont visiblement bouillonnants à la surface avec une odeur légèrement aigre, de type yaourt et une légère tête mousseuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie ne montre aucune bulle après 24 heures. Ça sent la farine crue.",
            "action": "Déplacez-vous à un endroit plus chaud (25–28°C) et ajoutez encore 2 c. à soupe de démarrage pour démarrer la fermentation."
          },
          {
            "state": "Perfect",
            "description": "Entre 48 et 72 heures : bulles de pâte visiblement, odeur agréablement aigre (comme le seigle amer), et un liquide sombre est posé sur le dessus.",
            "action": "Égoutter le liquide et préparer l'absit avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 96 heures : la pâte sent fortement acide, presque vinaigre. Le goût peut être trop aigre.",
            "action": "Utiliser rapidement ; l'injera qui en résultera sera très aigre mais est toujours sûr et certains préfèrent ce style."
          }
        ]
      },
      "feelCue": "Mélanger la pâte et la regarder se retirer dans des rubans lactiques lents — la viscosité s'épaissit à mesure que la fermentation s'approfondit, et les bulles qui se dégagent laissent de minuscules cratères à la surface."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "fermented_teff_batter",
        "ing_05"
      ],
      "outputState": "prepared_batter",
      "instructions": "Prenez 100g de pâte fermentée et fouettez-la dans le 200ml d'eau bouillante dans une petite casserole à feu moyen, en remuant constamment, jusqu'à ce qu'elle s'épaississe à un porridge lisse (absorber), environ 2–3 minutes. Retirer du feu et refroidir à la température ambiante. Incorporer l'absit refroidi dans la pâte fermentée principale et ajouter le sel. L'absit gélatinise les amidons et crée les « yeux » distinctifs dans l'injera fini. La pâte finale doit être la consistance de la pâte à crêpes mince.",
      "visualCue": {
        "primaryTarget": "La batte est homogène et coule comme de la crème lourde — pas de grumeaux, couleur brun gris uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'absit est encore grumelé ou trop chaud; la pâte est inégale et légèrement granuleuse.",
            "action": "Refroidir complètement l'absit avant d'ajouter — l'absit chaud peut tuer les bactéries bénéfiques."
          },
          {
            "state": "Perfect",
            "description": "Battre est lisse, versable, et une couleur moyenne-gris cohérente. Ça sent le mal et légèrement terreux.",
            "action": "Continuer à cuire immédiatement ou se reposer pendant 1 heure pour une saveur plus développée."
          },
          {
            "state": "Overdone",
            "description": "L'absit a été ajouté trop chaud et la pâte s'est emparée; le ferment a été partiellement tué.",
            "action": "Finis avec de l'eau froide et fouettant vigoureusement — l'injera sera moins tannant mais encore comestible."
          }
        ]
      },
      "feelCue": "Plongez vos doigts dans la pâte finale — elle devrait les enrober d'un mince film, et même les égoutter dans un flux lent, pas un rideau lourd."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "prepared_batter",
        "ing_04"
      ],
      "outputState": "finished_injera",
      "instructions": "Chauffer à feu moyen une grande poêle antiadhésive ou une mitade traditionnelle jusqu'à ce qu'une goutte d'eau s'évapore instantanément au contact. Ne pas huiler la poêle. Verser 180 à 200 ml de pâte dans une spirale rapide de l'extérieur, puis basculer pour combler les lacunes — travailler rapidement. Couvrir immédiatement avec un couvercle. Cuire de 2 à 3 minutes jusqu'à ce que la surface soit complètement réglée, les yeux (trous) couvrent chaque centimètre et les bords commencent à se boucler. Ne pas retourner — injera est cuit d'un seul côté. Glissez doucement. Empiler sur un chiffon pour absorber la vapeur.",
      "visualCue": {
        "primaryTarget": "Toute la surface est couverte de petits trous (les yeux); les bords se lèvent librement de la poêle et le centre est réglé mais pas sec.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est encore humide et opaque ; de nombreuses zones ne montrent aucun œil. L'injera pleure quand vous essayez de le soulever.",
            "action": "Re-couvrir et cuire 1 minute de plus. Ne pas retourner — la vapeur du couvercle termine le dessus."
          },
          {
            "state": "Perfect",
            "description": "Chaque centimètre carré a un trou; la surface est mate et sèche au toucher aux bords. L'injera se pele proprement dans une seule feuille.",
            "action": "Retirer immédiatement et empiler sur un chiffon — empiler tandis que chaud crée la vapeur douce qui garde injera pliable."
          },
          {
            "state": "Overdone",
            "description": "L'Injera se dessèche et craque aux bords; une odeur de teff légèrement amère et grillée de la poêle.",
            "action": "Supprimer immédiatement. L'injera sera moins souple mais encore comestible — couvrir de tissu humide pour adoucir."
          }
        ]
      },
      "feelCue": "Un injera parfait devrait se sentir comme un mince et humide tissu chamois quand vous le glissez hors de la casserole — simultanément spongieux et délicat, avec un don dans toutes les directions."
    }
  ]
};
