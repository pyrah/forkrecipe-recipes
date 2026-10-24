export default {
  "repoId": "master_cuban_moros_y_cristianos_001",
  "parentRepoId": null,
  "slug": "moros-y-cristianos",
  "author": "ForkRecipe Kitchen",
  "title": "Moros y Cristianos",
  "description": "Le plat de base de Cuba - les haricots noirs et le riz blanc à grains longs cuits ensemble dans la même casserole jusqu'à ce que le riz devienne un gris-violet profond et dramatique, chaque grain infusé de sofrito, de cumin et de la richesse féculente du liquide de cuisson des haricots.",
  "cuisine": "Cubains",
  "culture": "Cubains",
  "category": "grains",
  "tags": [
    "végétalien",
    "Sans gluten",
    "Cubains",
    "Haricots noirs",
    "riz",
    "un seul pot"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Fèves noires séchées (poêlées la nuit)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "2 boîtes (800 g au total) de haricots noirs cuits — sautez l'étape 1, utilisez de l'eau comme liquide"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Riz blanc à grains longs",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (en dés)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Poivre vert (en dés)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Poivre poblané"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "huile neutre"
      ]
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
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Origan frais (6 g)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Acid",
      "name": "vinaigre de vin blanc (pour la finition)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de sherry",
        "jus de citron vert"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_09"
      ],
      "outputState": "cooked_beans_with_liquid",
      "instructions": "Égoutter et rincer les haricots noirs trempés et les déposer dans un grand pot. Couvrir d'eau froide de 8 cm. Ajouter les feuilles de la baie. Porter à ébullition à feu vif, en écrémant toute mousse grise qui monte à la surface dans les 10 premières minutes. Réduire à mijoter doucement et cuire pendant 45-60 minutes jusqu'à ce que les haricots soient complètement tendres mais conservent leur forme. Le liquide de cuisson va devenir un noir-violet profond et dramatique — ce liquide est de l'or liquide; c'est ce qui fait tourner le riz. Ne pas ajouter de sel jusqu'à ce que les haricots soient cuits — le sel avant la tendresse durcit la peau.",
      "visualCue": {
        "primaryTarget": "Les haricots sont rampants, complètement tendres, et le liquide de cuisson est un violet-noir profond et opaque. Les peaux sont intactes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots ont un centre d'amidon ferme quand ils sont mordus. Le liquide est encore assez aqueux et violet foncé plutôt que presque noir.",
            "action": "Continuez à mijoter. Testez toutes les 10 minutes. Les haricots sous-cuits n'adouciront pas davantage une fois combinés au sel et au riz."
          },
          {
            "state": "Perfect",
            "description": "Chaque fève est complètement tendre avec un intérieur crémeux. Des peaux intactes. Le liquide est profond, presque noir et légèrement visqueux de l'amidon libéré.",
            "action": "Retirer du feu. Ne pas égoutter — vous utiliserez 375 ml de ce liquide pour cuire le riz."
          },
          {
            "state": "Overdone",
            "description": "Les haricots se divisent et sont musqués. Le liquide est très épais, presque lugubre.",
            "action": "Le plat aura encore un excellent goût bien que la texture sera plus douce. Égoutter un peu de liquide s'il est trop épais, en conservant au moins 375 ml."
          }
        ]
      },
      "feelCue": "Un haricot bien cuit pressé doucement entre le pouce et l'index devrait donner complètement et en douceur, s'effondrer dans une pâte crémeuse sans noyau dur, comme presser un raisin mûr très doux."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_06",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "sofrito",
      "instructions": "Dans un grand pot à fond lourd (assez grand pour tenir le plat fini), faire chauffer l'huile d'olive à feu moyen jusqu'à ce qu'elle mijote. Ajouter l'oignon et le poivre vert et cuire, en remuant régulièrement, pendant 6-8 minutes jusqu'à ce qu'il soit complètement doux, translucide et commence à devenir doré. Ajouter l'ail et cuire encore 1 minute. Ajouter le cumin moulu et l'origan et remuer pendant 30 secondes jusqu'à odorat – vous sentirez les épices fleurir immédiatement. Ce sofrito est l'épine dorsale de la saveur du plat.",
      "visualCue": {
        "primaryTarget": "L'oignon et le poivre sont complètement doux, dorés et scintillants dans l'huile. L'ail est pâle et parfumé. Les épices sont incorporées et sentent chaud et grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et ferme avec une odeur brute et nette.",
            "action": "Continuer la cuisson — un sofrito peu cuit laissera une note dure et crue dans le plat fini."
          },
          {
            "state": "Perfect",
            "description": "L'oignon et le poivre sont doux, dorés et parfumés. La cuisine sent l'huile d'olive chaude, l'oignon doux et le cumin.",
            "action": "Ajouter immédiatement les haricots et le liquide de haricots."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'oignon et du poivre sont brun foncé et commencent à coller au pot.",
            "action": "Déglacer avec un jet d'eau, gratter le fond, et procéder. La légère caramélisation ajoutera de la douceur."
          }
        ]
      },
      "feelCue": "Le sofrito doit sentir comme l'acte d'ouverture d'une cuisine cubaine - cette harmonie spécifique de l'huile d'olive, de l'oignon, du poivre et du cumin qui signale tout ce qui suit sera bon."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "sofrito",
        "cooked_beans_with_liquid",
        "ing_10",
        "ing_11"
      ],
      "outputState": "seasoned_bean_base",
      "instructions": "Ajouter les haricots cuits et exactement 375 ml de leur liquide de cuisson dans la casserole de sofrito, en réservant tout liquide restant. Mélanger. Ajouter le sel et le poivre. Goûtez le liquide — il devrait être assaisonné avec assurance, légèrement plus salé que vous voulez le plat fini, parce que le riz va l'absorber et le diluer significativement. Porter à ébullition à feu vif.",
      "visualCue": {
        "primaryTarget": "Un liquide violet-noir profond avec des haricots entiers suspendus dans la sofrito. Des odeurs de cumin, de poivre et la douceur profonde et terreuse des haricots noirs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide de haricots et le sofrito ne sont pas encore entièrement intégrés — l'huile flotte séparément.",
            "action": "Mélanger plus vigoureusement et porter à ébullition complète avant d'ajouter le riz."
          },
          {
            "state": "Perfect",
            "description": "Une base unifiée, profondément colorée qui sent richement assaisonné et salé. Bouillant agressivement avec des bulles visibles.",
            "action": "Ajouter le riz rincé immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La base a trop réduit et le liquide est très épais et couvre à peine les haricots.",
            "action": "Ajouter suffisamment de haricot ou d'eau pour porter le volume total à environ 500 ml avant d'ajouter le riz."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée de liquide — il devrait être fortement aromatisé, presque agressivement, avec une douceur salée profonde de l'amidon de haricots et une colonne vertébrale chaude de cumin."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "seasoned_bean_base",
        "ing_02"
      ],
      "outputState": "rice_in_beans",
      "instructions": "Rincer le riz jusqu'à ce que l'eau soit presque claire et bien égoutter. Ajouter le riz à la base de haricots bouillants et remuer une fois fermement pour distribuer le riz et submerger les grains flottants. Réduire la chaleur au réglage le plus bas absolu et couvrir étroitement. Cuire pendant 20 minutes sans lever le couvercle — le riz absorbera le liquide de haricots et tournera le gris pourpre profond caractéristique qui donne au plat son identité visuelle.",
      "visualCue": {
        "primaryTarget": "Tous les grains de riz entièrement immergés dans le liquide de haricots violet foncé, la vapeur s'élevant avant que le couvercle soit scellé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains riz sont au-dessus de la ligne liquide. Le liquide a l'air liquide.",
            "action": "Ajouter 50 ml de haricot de plus liquide ou d'eau, submerger tous les grains et sceller le couvercle."
          },
          {
            "state": "Perfect",
            "description": "Riz entièrement submergé, liquide de haricots qui recouvre la surface. L'ébullition est vigoureuse avant que le couvercle continue.",
            "action": "Sceller soigneusement, réduire au feu le plus bas, cuire 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le rapport est très élevé sur le liquide — le riz flotte librement.",
            "action": "Égoutter un peu de liquide avant de couvrir et réduire le temps de cuisson final de 2-3 minutes."
          }
        ]
      },
      "feelCue": "Une fois le couvercle allumé, le pot devrait se sentir vivant sous votre main — la chaleur calme et rythmique du bâtiment à vapeur est le bruit du riz absorbant le grain liquide de haricots par le grain."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "rice_in_beans",
        "ing_12"
      ],
      "outputState": "finished_moros_y_cristianos",
      "instructions": "Après 20 minutes, lever le couvercle brièvement et vérifier les trous de vapeur à la surface — les cratères témoins qui indiquent que le liquide a été complètement absorbé et que le riz est cuit. Retirer du feu et reposer, couvert, pendant 10 minutes. Flûtez doucement avec une fourchette, pliant du bas vers le haut. Goûtez et ajustez le sel. Juste avant de servir, arrosez le vinaigre de vin blanc sur le plat et pliez en douceur — cette note acide vive éclaire la saveur profonde et terreuse et est la touche de finition traditionnelle qui relie le plat.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont un beau violet-gris profond, distinct et moelleux, parsemé de haricots noirs entiers. Le vinaigre ajoute une lueur faible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains au centre sont encore fermes et pâles. Les trous de vapeur ne sont pas encore visibles.",
            "action": "Ajouter 2 cuillerées à soupe d'eau autour du bord, remplacer le couvercle et cuire encore 5 minutes à feu doux."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est gris-violet, tendre et distinct. Les haricots sont entiers et crémeux à l'intérieur. Le vinaigre coupe la richesse en quelque chose de lumineux et vivant.",
            "action": "Servir immédiatement, idéalement aux côtés du porc rôti et des plantains frits."
          },
          {
            "state": "Overdone",
            "description": "Le riz est légèrement musqué et s'agrippe au fond. Les haricots se séparent.",
            "action": "Toujours délicieux. Servir rapidement sans autre repos, et l'appeler haricot de riz porridge si nécessaire."
          }
        ]
      },
      "feelCue": "Chaque fourkful devrait livrer des grains de riz tendres qui ont pris sur la couleur et la saveur du haricot liquide — pourpre à travers et à travers, et pas seulement en surface — avec la douceur de production occasionnelle d'un haricot entier."
    }
  ]
};
