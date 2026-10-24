export default {
  "repoId": "master_italian_eggplant_parmigiana_001",
  "parentRepoId": null,
  "slug": "eggplant-parmigiana",
  "author": "ForkRecipe Kitchen",
  "title": "Aubergine Parmigiana",
  "description": "Le rituel du dimanche napolitain : des rondelles de graisse d'aubergine frite en couches de sauce tomate lente, de basilic déchiré et de fior di latte mozzarella, puis cuites jusqu'à ce que les couches se mélangent en quelque chose de plus grand que la somme de leurs parties — bronzées sur le dessus, donnant à l'intérieur.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "vegetables",
  "tags": [
    "végétarien",
    "cuits",
    "aubergines",
    "tomates",
    "mozzarella",
    "italiques du Sud"
  ],
  "difficulty": 3,
  "activeTime": "1 hr 15 min",
  "totalTime": "3 hrs",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 2,
    "bitter": 2,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Grandes aubergines",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "Mélanzane italienne"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel grossier (pour extraire l'humidité des aubergines)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive ou d'huile de tournesol, pour friture peu profonde",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Tomates de San Marzano broyées à la main (deux boîtes de 400 g)",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "tomates prunes fraîches mûres, pelées"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles d'ail légèrement broyés",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, pour la sauce",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Protein",
      "name": "Fior di latte mozzarella, déchirée ou tranchée de 5 mm d'épaisseur",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "mozzarella à faible teneur en eau"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "Parmigiano Reggiano, finement râpé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Pecorino Romano"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sel",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "salted_eggplant",
      "instructions": "Couper les aubergines en rondelles de 7 à 8 mm. Couchez-les dans une calandre, salant généreusement chaque couche. Placer une assiette sur le dessus et laisser 45 à 60 minutes. Le sel tirera le liquide amer et sombre qui ferait autrement l'huile d'aubergine bouillie pendant la friture.",
      "visualCue": {
        "primaryTarget": "tranches d'aubergine dans la calandre",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucun liquide n'a été mis en commun à la base de la calandre. Les tranches semblent toujours turges et brillantes.",
            "action": "Attendez plus longtemps — il faudra peut - être jusqu'à 90 minutes pour les jeunes aubergines."
          },
          {
            "state": "Perfect",
            "description": "Un liquide sombre et légèrement amer s'est accumulé sous la calandre. Les tranches sont visiblement adoucies et légèrement ridés, et ont perdu de 15 à 20% de leur volume.",
            "action": "Rincer soigneusement, presser délicatement chaque tranche entre vos paumes et faire sécher les os avec du papier de cuisine."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont salées depuis des heures et s'effondrent, avec la texture du tissu humide.",
            "action": "Ils peuvent encore être frits — maniez doucement. La saveur sera fine mais plus douce."
          }
        ]
      },
      "feelCue": "Après le séchage, chaque tranche doit se sentir molle mais pas visqueuse — cuir doux plutôt que tissu humide. Toute humidité de surface restante crachera violemment dans l'huile de friture."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "tomato_sauce",
      "instructions": "Chauffer l'huile d'olive extra-virgine et l'ail dans une casserole à feu moyen jusqu'à ce que l'ail devienne doré et parfumé, environ 3 minutes. Ajouter les tomates concassées, une grande pincée de sel et laisser mijoter à découvert pendant 20 à 25 minutes, en remuant occasionnellement, jusqu'à ce que la sauce s'épaississe et s'obscurcisse jusqu'à ce que l'écarlate soit profonde. Enlevez l'ail. La moitié des feuilles de basilic.",
      "visualCue": {
        "primaryTarget": "sauce tomate dans la poêle",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine, rouge vif et aqueuse, avec une odeur de tomates brutes et acides.",
            "action": "Continuer à mijoter — la sauce doit réduire d'environ un tiers avant d'être prête."
          },
          {
            "state": "Perfect",
            "description": "La sauce est assez épaisse pour enrober une cuillère et tenir une ligne tirée à travers elle. La couleur s'est approfondie jusqu'à un rouge brique. L'odeur est douce, arrondie et légèrement caramélisée.",
            "action": "Retirer l'ail et ajouter le basilic déchiré. Mettez de côté."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte collante qui grince aux bords. Rouge très foncé, presque marron.",
            "action": "Ajouter 50 ml d'eau et remuer vigoureusement — le plat fonctionnera encore, mais attention à ne pas le brûler plus loin."
          }
        ]
      },
      "feelCue": "Plongez une cuillère froide dans la sauce — elle devrait enrober la cuillère uniformément sans gouttes d'eau qui s'écoulent de l'arrière. La sauce doit se sentir dense et confiture quand vous la remuez."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "salted_eggplant",
        "ing_03"
      ],
      "outputState": "fried_eggplant",
      "instructions": "Chauffer l'huile de friture dans une poêle profonde à 175–180 C. Faire frire les rondelles d'aubergines en lots, sans fouler, pendant 2 à 3 minutes de chaque côté jusqu'à ce qu'elles soient bien dorées. Égoutter sur un support ou un papier de cuisine. Ne les empilez pas — ils s'entretueront et deviendront soyeux.",
      "visualCue": {
        "primaryTarget": "tranches d'aubergine dans l'huile de friture",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ronds sont en or pâle et encore légèrement fermes au centre. Ils absorbent visiblement l'huile.",
            "action": "Laissez-les frire plus longtemps — l'aubergine sous-friée libère son huile absorbée dans le gratin pendant la cuisson, le rendant gras."
          },
          {
            "state": "Perfect",
            "description": "Les deux côtés sont un acajou-or profond aux bords légèrement croustillants. Une tranche pressée entre les doigts donne facilement — cuit au centre, avec un intérieur crémeux. Huile minimale sur la grille d'évacuation.",
            "action": "Égoutter immédiatement et continuer à frire en lots."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé verglant sur le noir. L'intérieur s'est effondré et est très doux.",
            "action": "Toujours utilisable — les bords brûlés peuvent être parés si très sombres. Le parmigiana aura un bord plus fort, légèrement amer."
          }
        ]
      },
      "feelCue": "Une aubergine parfaitement frite est presque sans poids pour sa taille — l'humidité est partie et l'huile n'a pas inondé pour la remplacer. Appuyez sur le centre : il donne comme du beurre mou."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "fried_eggplant",
        "tomato_sauce",
        "ing_09",
        "ing_10",
        "ing_07"
      ],
      "outputState": "assembled_parmigiana",
      "instructions": "Préchauffer le four à 180 C (355 F). Étendre une fine couche de sauce tomate sur la base d'un plat de cuisson profond. Ajouter une couche de tranches d'aubergines frites, légèrement recoupées. Scatter mozzarella déchirée, quelques feuilles de basilic, et une poussière de Parmigiano. Répétez les couches — sauce, aubergine, mozzarella, basilic, Parmigiano — jusqu'à ce que tous les ingrédients soient utilisés, en finissant avec une couche de sauce et une neige généreuse de Parmigiano sur le dessus.",
      "visualCue": {
        "primaryTarget": "Plat de cuisson stratifié avant cuisson",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches sont trop épaisses — chaque couche d'aubergine est de deux ou trois tranches profondes, empêchant la chaleur de pénétrer le centre.",
            "action": "Reconstruire avec des couches plus minces, plus nombreuses. Plus de couches avec moins dans chacune est toujours mieux."
          },
          {
            "state": "Perfect",
            "description": "Une pile propre et compacte de 4 à 6 couches. Mozzarella et sauce visibles entre chaque couche. Top est uniformément recouvert de sauce et Parmigiano. Le plat est plein à la jante.",
            "action": "Faire cuire à découvert."
          },
          {
            "state": "Overdone",
            "description": "La mozzarella a été distribuée si fortement entre les couches que le plat est principalement du fromage avec des inserts d'aubergine.",
            "action": "Enlevez un peu de mozzarella entre les couches moyennes — trop de fromage rend le plat lourd et gras."
          }
        ]
      },
      "feelCue": "Assemblé, le plat doit se sentir très lourd, dense et compact. S'il se sent lâche et jiggly, les couches ne sont pas assez serrées."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "assembled_parmigiana"
      ],
      "outputState": "finished_parmigiana",
      "instructions": "Cuire à découvert à 180 °C (355 F) pendant 35 à 45 minutes jusqu'à ce que le sommet soit profondément bronzé et que la mozzarella autour des bords soit visiblement bouillonnante. Reposez-vous au moins 20 minutes avant de servir — un parmigiana fraîchement coupé s'effondrera; un pari reposé se tranchera proprement.",
      "visualCue": {
        "primaryTarget": "Haut de la parmigiana dans le four",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est pâle et la mozzarella a fondu mais pas coloré. La sauce aux bords est à peine bouillonnante.",
            "action": "Retournez au four. Le Parmigiano sur le dessus devrait caraméliser - augmenter la chaleur à 200 C pour les 5 dernières minutes si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Top est un or ambre foncé. Les bords présentent un bord de tomates et de fromages caramélisés presque laqués. Le plat est visiblement réglé — ne bouge pas lorsque le support est bouché. Des odeurs de tomates concentrées et de fromage grillé.",
            "action": "Reposez-vous 20 minutes avant de couper. Elle tiendra sa forme dans le service."
          },
          {
            "state": "Overdone",
            "description": "Le sommet Parmigiano a brûlé à la croûte noire. Les bords sont très sombres.",
            "action": "Enlevez soigneusement la couche de croûte brûlée avec une spatule. Les couches inférieures sont probablement parfaites."
          }
        ]
      },
      "feelCue": "Après le repos, lancez un couteau à travers le centre et ressentez la résistance – il doit couper proprement, comme un lasagne, avec chaque couche distincte. Si ça glisse, repose-le plus longtemps."
    }
  ]
};
