export default {
  "repoId": "master_persian_persian_rice_tahdig_001",
  "parentRepoId": null,
  "slug": "persian-rice-tahdig",
  "author": "ForkRecipe Kitchen",
  "title": "Riz Persique avec Tahdig",
  "description": "La basmati à longue graine s'est vaporisée avec du safran sur une base brûlante jusqu'à ce qu'une croûte dorée et brûlée se forme sur le fond - le tahdig que chaque Iranien rivalise pour prétendre.",
  "cuisine": "Perse",
  "culture": "Iranien",
  "category": "grains",
  "tags": [
    "riz",
    "persienne",
    "croustillant",
    "Tahdig",
    "safran"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz basmati (âgé, à grains longs)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Fils de safran (à l'eau chaude)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre ou beurre clarifié (pour pot)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Yogourt à base de tahdig",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tranches de pommes de terre (2-3 mm)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau (pour parboulage)",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Riz safran et fraises séchées (zerechk)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "canneberges séchées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_06",
        "ing_05"
      ],
      "outputState": "soaked_rice",
      "instructions": "Rincer le basmati dans l'eau froide, changer l'eau 4-5 fois jusqu'à ce qu'il soit clair. Couvrir le riz rincé d'eau froide, ajouter 1 c. à thé de sel par tasse de riz et tremper pendant au moins 30 minutes – idéalement 1 à 2 heures. Le trempage blanchit les grains, les sépare pendant la cuisson et coupe le temps de vapeur final.",
      "visualCue": {
        "primaryTarget": "Les grains sont visiblement gonflés et sont passés d'un ivoire translucide à un blanc plus opaque et lumineux après trempe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore translucides et ne sont pas visiblement gonflés — moins de 15 minutes de trempage.",
            "action": "Continuer le trempage; 30 minutes minimum sont nécessaires pour une texture appropriée."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont blancs et légèrement plumés — chacun d'eux est distinct, et ne s'agrippe pas. Quand vous cassez un entre vos doigts, le centre est encore ferme.",
            "action": "Égoutter et procéder au parboulement."
          },
          {
            "state": "Overdone",
            "description": "Séché plus de 4 heures : les grains commencent à se briser et se sentent musqués lorsqu'ils sont pressés.",
            "action": "Égoutter immédiatement et faire bouillir brièvement — réduire le temps de bouillie pour éviter la surcuisson."
          }
        ]
      },
      "feelCue": "Un grain imbibé devrait se plier légèrement avant de craquer — non plus dur à os, mais avec une morsure distincte restant au centre."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "soaked_rice",
        "ing_06",
        "ing_05"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Portez un grand pot d'eau généreusement salée (aussi salée que de l'eau de pâtes) à un ébullition. Égoutter le riz trempé et ajouter à l'eau bouillante. Faire bouillir 5-7 minutes exactement, en remuant une fois. Testez fréquemment à partir de la minute 5 : le riz doit être cuit à l'extérieur, mais il a toujours une ligne blanche crayeuse distincte au centre même quand il est mordu. Égoutter immédiatement dans une fine calandre et rincer à l'eau froide pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Les grains sont allongés, presque doublés de longueur, avec un minuscule noyau blanc craie opaque visible quand mordu — le tiers extérieur est cuit, le noyau est brut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le grain est encore croquant; plus de la moitié de la section transversale est crayeuse et dure.",
            "action": "Retournez à l'ébullition pendant 1 à 2 minutes de plus; l'étage du bois a une fenêtre serrée."
          },
          {
            "state": "Perfect",
            "description": "Cuire à l'extérieur, ferme et crayeuse au cœur même. Le grain fléchit et s'étire jusqu'à sa pleine longueur. Égoutter et se séparer facilement.",
            "action": "Égoutter par la calandre, rincer à froid et procéder immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entièrement cuits, sans craie. Ils peuvent être légèrement collants.",
            "action": "Égoutter et procéder, mais manipuler doucement — la vapeur finale les rendra très doux, peut - être musqués."
          }
        ]
      },
      "feelCue": "Le riz drainé devrait se sentir comme du gravier sec dans la calandre, des grains individuels qui rebondissent l'un l'autre, et non une masse collante."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "parboiled_rice",
        "ing_03",
        "ing_04",
        "ing_02"
      ],
      "outputState": "steaming_tahdig_rice",
      "instructions": "Chauffer l'huile dans un pot large et à fond lourd (sans colle ou bien assaisonné) à feu moyen-élevé jusqu'à ce qu'elle mijote. fouetter le yogourt avec une louche (environ 15 parties) du riz parboulé égoutté et l'eau de safran fleuri. Étendre ce mélange de yogourt-riz sur le fond du pot chaud dans une couche uniforme, ce qui forme le tahdig. Enfoncez le riz parboulé restant sur le dessus dans une pyramide, en le gardant loin des côtés pot. Arrosez le reste de l'eau de safran sur le dessus. Enveloppez fermement le couvercle dans une serviette de cuisine propre (pour absorber la vapeur) et placez-le sur le pot. Cuire à feu moyen-vif pendant 10 minutes pour régler la croûte, puis réduire au plus bas feu possible.",
      "visualCue": {
        "primaryTarget": "La vapeur s'échappe autour du couvercle de la serviette; les côtés du pot montrent une ligne légèrement dorée près de la base où se forme la croûte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de vapeur, pas de bord doré visible — la chaleur est trop basse ou le pot n'est pas monté à la température.",
            "action": "Augmenter le feu à moyen-élevé pendant 3-5 minutes pour établir la croûte avant de la réduire."
          },
          {
            "state": "Perfect",
            "description": "Steady, vapeur douce autour du couvercle; le côté du pot montre une couleur dorée à la base; la pyramide du riz est moelleuse et sèche en haut.",
            "action": "Réduire au minimum la chaleur et la vapeur 35-45 minutes de plus non perturbées."
          },
          {
            "state": "Overdone",
            "description": "L'odeur brûlante de l'acride et la fumée noire des fissures du couvercle — le tahdig est passé doré à brûlé.",
            "action": "Retirer immédiatement du feu et placer le pot dans un évier d'eau froide pour arrêter la brûlure."
          }
        ]
      },
      "feelCue": "La cuisine doit se remplir d'un parfum chaud, noisette, presque caramel — pas de fumée, mais l'odeur de l'amidon doré qui se forme. S'il sent vif ou acride, réduire la chaleur."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "steaming_tahdig_rice",
        "ing_07"
      ],
      "outputState": "finished_persian_rice_tahdig",
      "instructions": "Après 45-55 minutes de vapeur, retirer le couvercle. Déplacez le riz haut sur un plateau de service et dispersez les grains de safran et les canneberges sur le dessus pour la couleur. Maintenant le moment de la vérité: placer un grand plateau plat sur la bouche du pot et inverser dans un mouvement décisif. Le tahdig devrait se libérer en un seul disque d'or, crépitant et brillant. Si elle colle, revenir à feu doux pendant 2 minutes de plus.",
      "visualCue": {
        "primaryTarget": "Un disque de croûte doré-ambre, uniformément coloré, intact, crépitant à mesure qu'il refroidit, le dessous d'une feuille continue dorée-brun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tahdig est blond pâle ou blanc, doux et collant au pot — pas croustillant.",
            "action": "Retourner à feu moyen pendant 5 minutes, vérifier toutes les 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Une croûte craquante d'or profond se libère proprement du pot en une seule pièce ou de larges sections. La croûte fait un bruit de fissuration sonore pendant que vous la cassez.",
            "action": "Déposer sur le plateau de service à côté du riz moelleux. Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Tahdig est brun foncé avec des taches noires et des odeurs acrides — sur-cristées au-delà de la scène dorée.",
            "action": "Couper toutes les sections entièrement noires; les portions dorées sont encore excellentes."
          }
        ]
      },
      "feelCue": "Un tahdig parfait fait un son comme casser un craquelin quand vous cassez un morceau — sec, croustillant, creux. Si elle se sent douce et souple, elle a besoin de plus de temps."
    }
  ]
};
