export default {
  "repoId": "master_turkish_imam_bayildi_001",
  "parentRepoId": null,
  "slug": "imam-bayildi",
  "author": "ForkRecipe Kitchen",
  "title": "Imam Bayıldı",
  "description": "Les aubergines entières se coupent dans le sens de la longueur et se remplissent d'un mélange d'oignon, de tomate, d'ail et d'huile d'olive cuit lentement, puis se brassent dans plus d'huile d'olive jusqu'à ce que les parois de l'aubergine s'effondrent en soie translucide.",
  "cuisine": "Turquie",
  "culture": "Ottoman",
  "category": "vegetables",
  "tags": [
    "aubergines",
    "turc",
    "Pouf",
    "végétarien",
    "végétalien",
    "Huile d'olive",
    "Cuisson lente"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 1123,
  "forks": 134,
  "contributors": 41,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-30",
  "updatedAt": "2025-04-12",
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
      "role": "Structure",
      "name": "Aubergines à globe moyen",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Aubergines italiennes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignons (très mincement tranchés)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail (finement tranchés)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Tomates râpées (peautées et hachées)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Tomates de San Marzano (en conserve)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Persil à feuilles plates (choupé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive (utiliser généreusement — c'est le point)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel casher, poivre noir et une pincée de sucre",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Aubergines salées",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "salted_eggplant",
      "instructions": "Peler les aubergines en alternant des bandes de 2cm de peau et de chair nue — ce motif rayé est traditionnel et aide l'aubergine à maintenir sa forme tout en adoucissant rapidement. Faire une fente longitudinale profonde dans chaque aubergine, ne pas couper tout le chemin. Saler généreusement les surfaces coupées et les fentes. Laisser reposer dans une calandre pendant 30 minutes — le sel retire le liquide amer et commence également à détendre la structure cellulaire, réduisant l'absorption d'huile spongieuse qui rend les plats d'aubergines gras lorsqu'ils ne sont pas pré-salés.",
      "visualCue": {
        "primaryTarget": "Après 30 minutes, le liquide amer et sombre s'est mis dans la calandre sous les aubergines. Les surfaces coupées ont ramolli et ont légèrement bronzé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 15 minutes se sont écoulées et aucun liquide n'est encore apparu.",
            "action": "Attendez 30 minutes. L'étape de prévente est ce qui permet à l'aubergine d'absorber les arômes d'huile d'olive, pas l'huile elle-même."
          },
          {
            "state": "Perfect",
            "description": "Liquide foncé dans la calandre, chair nettement plus douce, surface légèrement bronzée. L'aubergine se compresse facilement lorsqu'elle est pressée.",
            "action": "Rincer légèrement, presser doucement et sécher."
          },
          {
            "state": "Overdone",
            "description": "Plus d'une heure de salage — l'aubergine est devenue très molle et peut tomber en morceaux lorsqu'elle est remplie.",
            "action": "Poignez soigneusement, remplissez doucement et continuez."
          }
        ]
      },
      "feelCue": "Pressez doucement l'aubergine salée — elle doit se sentir nettement plus douce et plus souple qu'avant de la saler. Une petite quantité de liquide foncé doit être expressible de la chair."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "filling_mixture",
      "instructions": "Chauffer la moitié de l'huile d'olive dans une grande casserole à feu moyen. Cuire les oignons très lentement pendant 20 minutes, en remuant de temps en temps, jusqu'à ce qu'ils soient complètement tendres et dorés. Ajouter l'ail pour les 3 dernières minutes. Ajouter les tomates et cuire encore 10 minutes jusqu'à ce qu'elles soient réduites à une pâte épaisse et parfumée. Assaisonner de sel, poivre et une pincée de sucre. Incorporer le persil. Le remplissage doit être très assaisonné et richement aromatisé.",
      "visualCue": {
        "primaryTarget": "Un mélange d'oignon et de tomate profondément doré et jammy qui tient sa forme lorsqu'il est bombé sur une cuillère, épais, parfumé et brillant avec de l'huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore translucides et la tomate est encore épaisse et séparée. Le mélange a un goût cru et vif.",
            "action": "Continuez à cuisiner. Les oignons ont besoin de 20 minutes et la tomate doit se dissoudre complètement dans les oignons."
          },
          {
            "state": "Perfect",
            "description": "Profondément doré, les oignons confitureux se fusionnent complètement avec la tomate. La pâte est épaisse et laisse les côtés propres de la poêle lorsqu'elle est poussée à travers. L'odeur est profondément salée et légèrement sucrée.",
            "action": "Remplissez les aubergines."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a cuit trop loin et commence à coller et à brûler.",
            "action": "Ajouter un jet d'eau pour se détendre et retirer immédiatement de la chaleur."
          }
        ]
      },
      "feelCue": "Appuyez sur le remplissage contre le côté de la casserole avec une cuillère — il doit se déplacer comme une masse cohésive, non se séparer en liquide et en solides. L'huile d'olive doit être entièrement intégrée, ce qui rend le mélange brillant."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "salted_eggplant",
        "filling_mixture",
        "ing_06"
      ],
      "outputState": "braised_imam_bayildi",
      "instructions": "Rincer et sécher les aubergines. Ouvrez les fentes et remplissez généreusement le mélange oignon-tomate, en le pressant fermement. Disposer dans un plat de cuisson ou une grande casserole qui les tient bien droits. Versez le reste de l'huile d'olive sur et autour des aubergines — ne soyez pas timide. Verser 100 ml d'eau. Couvrir soigneusement avec du papier et cuire à 180°C (350°F) pendant 45 à 55 minutes jusqu'à ce que les parois des aubergines soient complètement douces et translucides.",
      "visualCue": {
        "primaryTarget": "L'aubergine est passée du beige-violet opaque au translucide, presque vitreux, et s'est adoucie au point où elle produit complètement lorsqu'elle est pressée. Le remplissage est visible à travers la fente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les parois des aubergines se sentent encore fermes et opaques. Un couteau à travers le mur rencontre la résistance.",
            "action": "Continuer à cuire pendant 10 à 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Des murs complètement translucides et s'effondrent qui donnent au toucher le plus léger. Le remplissage est chaud et parfumé. L'huile d'olive a été totalement absorbée par la chair.",
            "action": "Découvrez et refroidissez à la température ambiante avant de servir."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine s'est complètement effondrée et le remplissage se déverse — les murs se désintègrent.",
            "action": "Retirer du four. Servir soigneusement. La saveur sera excellente même si la présentation est imparfaite."
          }
        ]
      },
      "feelCue": "Appuyez très doucement sur le côté d'une aubergine braisée avec une cuillère — elle devrait produire immédiatement sans résistance, comme en appuyant sur un ballon d'eau. La chair doit se sentir complètement céder et presque liquide sous la peau."
    },
    {
      "nodeId": "step_4",
      "action": "Refroidir et servir",
      "inputs": [
        "braised_imam_bayildi"
      ],
      "outputState": "finished_imam_bayildi",
      "instructions": "Imam bayıldı est traditionnellement servi à la température ambiante ou chaud, jamais chaud. Laisser refroidir au moins 30 minutes après cuisson. Ce repos fait partie de la recette: l'huile d'olive est réabsorbée à mesure qu'elle refroidit, et les saveurs se concentrent et s'intègrent. Servir directement depuis le plat de cuisson, garni de persil frais et d'un filet d'huile d'olive. Accompagner avec du pain croustillant pour attraper les jus accumulés.",
      "visualCue": {
        "primaryTarget": "Aubergines à température ambiante, scintillantes à l'huile d'olive, leurs côtés fendus s'ouvrent pour révéler le remplissage doré foncé à l'intérieur. Les jus du plat se sont épaissis à une sauce concentrée enrichie d'huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servie trop chaude — l'huile d'olive est encore liquide et mise en commun plutôt que intégrée dans la chair.",
            "action": "Laisser reposer et refroidir davantage. Imam bayıldı s'améliore vraiment avec le temps."
          },
          {
            "state": "Perfect",
            "description": "Température ambiante, profondément salée, parois effondrées saturées d'huile d'olive, remplissage parfumé et concentré. Ça sent le jardin à la fin de l'été.",
            "action": "Servir avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "Réfrigérateur-froid — l'huile d'olive s'est solidifiée autour de l'aubergine et le plat semble pâle et congelé.",
            "action": "Laissez passer à la température ambiante pendant 45 minutes avant de servir. Ne pas micro-ondes — il tue la texture."
          }
        ]
      },
      "feelCue": "Faire une bouchée: la chair d'aubergine devrait être complètement douce et soyeuse, presque dissoute sur la cuillère. L'huile d'olive et les jus de tomate devraient se mettre légèrement dans la cuillère. Il ne doit y avoir ni fermeté ni résistance."
    }
  ]
};
