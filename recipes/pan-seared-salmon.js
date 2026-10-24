export default {
  "repoId": "master_french_salmon_001",
  "parentRepoId": null,
  "slug": "pan-seared-salmon",
  "author": "ForkRecipe Kitchen",
  "title": "Saumon panmer",
  "description": "Un seul filet, côté peau vers le bas, étant donné la patience qu'il mérite — la peau se brise comme le verre, la chair reste rose-rose au centre, et la frontière entre les deux est où toute la magie vit.",
  "cuisine": "Français",
  "culture": "Bistro français",
  "category": "seafood",
  "tags": [
    "saumon",
    "Produits de la mer",
    "français",
    "pan-couleur",
    "technique"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-12",
  "updatedAt": "2025-02-18",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet de saumon sur la peau (150-180g)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "omble chevalier",
        "truite arc-en-ciel"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre à haute chaleur",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de raisin",
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Citron (réchauffé)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Citron Meyer"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Temper et sec",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "tempered_salmon",
      "instructions": "Retirer le saumon du réfrigérateur 20 minutes avant la cuisson. Faites sécher soigneusement le côté peau et le côté chair avec des serviettes en papier — appuyez fermement, surtout sur la peau. Assaisonner les deux côtés de sel et de poivre. Le sel va puiser l'humidité; après 5 minutes, tapoter à nouveau. La peau sèche est le facteur le plus important pour une couture croustillante.",
      "visualCue": {
        "primaryTarget": "La peau est mate et sèche au toucher. La surface de la chair montre un léger reflet de l'attraction du sel, mais pas d'humidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore humide et brillante. Perles d'humidité visibles à la surface.",
            "action": "Pat sèche encore. Utilisez des serviettes en papier frais — les serviettes humides redistribuent simplement l'humidité."
          },
          {
            "state": "Perfect",
            "description": "La peau est complètement sèche et légèrement collante lorsque vous faites glisser un doigt dessus. La chair a un pellicule mince et sec.",
            "action": "Chauffer la poêle."
          },
          {
            "state": "Overdone",
            "description": "Le sel est resté trop longtemps — la surface est collante et la chair semble déshydratée.",
            "action": "Continuez. L'extérieur sera plus salé que l'idéal, mais l'intérieur ne sera pas affecté."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt sur la peau — il devrait se sentir comme du papier sec, attraper légèrement sur votre empreinte digitale. Si elle glisse en douceur, l'humidité reste."
    },
    {
      "nodeId": "step_2",
      "action": "Plaque thermoformée",
      "inputs": [
        "ing_04"
      ],
      "outputState": "hot_pan",
      "instructions": "Réglez une poêle en acier inoxydable ou en fonte à feu moyen-élevé. Ajouter l'huile et chauffer jusqu'à ce qu'elle mijote et commence à fumer. Les poêles antiadhésifs ne réaliseront pas la même croûte: la peau a besoin d'un contact direct avec le métal et d'une chaleur élevée.",
      "visualCue": {
        "primaryTarget": "L'huile brille avec des ondulations visibles sur sa surface. Les premières fumées s'élèvent. Une goutte d'eau dérape et s'évapore instantanément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est liquide, mais quand même. Pas de frisson, pas de fumée. La surface semble plate.",
            "action": "Attendez. Placer le poisson dans de l'huile fraîche garantit que la peau va coller et la vapeur au lieu de la mer."
          },
          {
            "state": "Perfect",
            "description": "Ondulations d'huile comme la brume de chaleur du désert. D'abord faible fumée. La poêle émet de la chaleur lorsque vous tenez votre main 15cm au-dessus.",
            "action": "Déposer la peau du saumon."
          },
          {
            "state": "Overdone",
            "description": "Une forte fumée déverse la poêle. L'huile s'assombrit. Une odeur d'acride.",
            "action": "Retirer du feu pendant 30 secondes. L'huile a passé son point de fumée et aura un goût amer."
          }
        ]
      },
      "feelCue": "Tenez votre paume à plat, à 15 cm au-dessus de la poêle — vous devriez vous sentir intense, même la chaleur poussant contre votre main en deux secondes. Si vous pouvez le tenir confortablement, la casserole n'est pas prête."
    },
    {
      "nodeId": "step_3",
      "action": "Côté peau de la couture",
      "inputs": [
        "tempered_salmon",
        "hot_pan"
      ],
      "outputState": "skin_seared",
      "instructions": "Éteignez la peau du saumon, loin de vous, pressez doucement avec une spatule de poisson pendant les 30 premières secondes pour éviter le curling. Réduire le feu à moyen. Ne bougez pas le poisson. Cuire 4-5 minutes — la chair fera cuire visuellement du bas vers le haut, devenant opaque dans une ligne montante. Lorsque la zone opaque atteint environ les trois quarts du chemin vers le haut du côté, il est temps de retourner.",
      "visualCue": {
        "primaryTarget": "Une ligne visible d'opacité s'élevant à travers le filet – rose pâle au-dessous, translucide au-dessus. La peau craque audiblement, et les bords deviennent dorés là où la chair rencontre la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La ligne d'opacité n'est qu'au tiers inférieur. La peau est encore pâle et silencieuse. Le filet est flippé lorsqu'il est légèrement bouché.",
            "action": "Attendez. Résistez à l'envie de vérifier — le levage brise le contact de la peau avec la poêle."
          },
          {
            "state": "Perfect",
            "description": "Opacité a grimpé à 70-75% de la hauteur du filet. La peau est d'or profond et craque lorsque la poêle est secouée. Le quart supérieur reste translucide et orné de bijoux.",
            "action": "Flip une fois, doucement."
          },
          {
            "state": "Overdone",
            "description": "Le filet entier est opaque au sommet. La peau est brun foncé. L'albumine blanche est fortement perlée à la surface.",
            "action": "Flip et immédiatement retirer de la chaleur — la chaleur résiduelle finira. Le centre peut être moyen-bien."
          }
        ]
      },
      "feelCue": "Écoutez la poêle: un étourdissement constant et modéré comme la pluie sur le trottoir est correct. Si elle éclate violemment, la chaleur est trop élevée. S'il est presque silencieux, trop bas. La cuisine devrait sentir comme rôtir les marrons, pas brûler le poisson."
    },
    {
      "nodeId": "step_4",
      "action": "Flip et finition",
      "inputs": [
        "skin_seared",
        "ing_05"
      ],
      "outputState": "cooked_salmon",
      "instructions": "Déposer le filet sur le côté chair. Ajouter le beurre dans la poêle – il moussera et brunira. Incliner la poêle et arroser le haut du poisson avec le beurre à l'aide d'une cuillère pendant 30-60 secondes. La chaleur résiduelle et le basting au beurre finiront doucement le dessus sans trop cuire le centre.",
      "visualCue": {
        "primaryTarget": "Le beurre mousse et devient brun noisette. La peau du saumon, maintenant exposée, est profondément dorée et rigide. Le côté chair développe une croûte d'or clair du basting.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore pâle et mousseux. Le côté chair a à peine touché la poêle.",
            "action": "Continuez à vous abaisser. Le côté chair n'a besoin que de 30 à 60 secondes de contact et de chaleur au beurre."
          },
          {
            "state": "Perfect",
            "description": "Le beurre est brun noisette. Le filet donne doucement quand il est pressé — ferme aux bords, donnant au centre. Le côté chair a un reflet d'or clair.",
            "action": "Retirez immédiatement dans une assiette chaude."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est devenu noir. Le côté chair est bruni et ferme. Pas de donner en appuyant.",
            "action": "Supprimer immédiatement. Pressez le citron pour couper la sécheresse. Leçon : le côté chair a besoin de secondes, pas de minutes."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre du filet avec votre bout de doigt — il devrait céder comme une prune mûre, ressortant lentement. S'il se sent ferme comme votre front, il est trop cuit. Le beurre devrait sentir les noisettes, jamais brûlé le popcorn."
    },
    {
      "nodeId": "step_5",
      "action": "Repos et service",
      "inputs": [
        "cooked_salmon",
        "ing_06"
      ],
      "outputState": "finished_salmon",
      "instructions": "Transférer dans une assiette chaude, côté peau vers le haut. Pressez le citron sur le dessus. Reposez-vous 2 minutes — la chaleur de report amènera le centre à un milieu parfait. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Lorsqu'il est flasqué avec une fourchette, l'intérieur est translucide rose-rose au centre même, graduant à la pêche opaque aux bords. Les jus sont orange pâle, pas blanc laiteux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centre est profondément translucide et frais. Les jus sont minces et aqueux. Les flocons résistent à la séparation.",
            "action": "Retourner à la poêle en bas pendant 30 secondes, ou terminer sous un grille-pain chaud pendant une minute."
          },
          {
            "state": "Perfect",
            "description": "Le centre est à peine translucide, comme le vitrail. Flacons séparés par une pression douce. Une perle de jus d'orange se forme entre les couches.",
            "action": "Mangez. Ce moment ne dure pas."
          },
          {
            "state": "Overdone",
            "description": "Toujours opaque. L'albumine blanche a été mise en commun à la surface. La chair est sèche et s'enfonce dans des segments serrés et secs.",
            "action": "Servir avec de la sauce citron et beurre. La prochaine fois, tirez de la casserole une minute plus tôt."
          }
        ]
      },
      "feelCue": "L'arôme doit être le beurre brun, l'océan et le citron. Lorsqu'elle est tapée d'un ongle, la peau doit sonner comme une croustille de pomme de terre, fragile et creuse."
    }
  ]
};
