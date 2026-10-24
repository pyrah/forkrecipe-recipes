export default {
  "repoId": "master_indian_dosa_batter_001",
  "parentRepoId": null,
  "slug": "dosa-batter",
  "author": "ForkRecipe Kitchen",
  "title": "Dosa Batter",
  "description": "Le riz fermenté et la pâte d'urad dal qui transforment une grille en fonte chaude en un théâtre — lorsqu'elle est mince et s'étend en un seul mouvement circulaire, elle se met en crêpe translucide, croustillante et aigre qui se brise à la première bouchée. La fermentation est l'endroit où vit la saveur.",
  "cuisine": "Indiens",
  "culture": "Indien du Sud (Tamil Nadu)",
  "category": "breads",
  "tags": [
    "indienne",
    "Inde du Sud",
    "fermenté",
    "riz",
    "lentilles",
    "dosa",
    "pâte",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "16 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz d'Idli ou riz à grains courts",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz blanc à grains longs (moins féculent, pâte plus fine)",
        "riz sano masoori"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Urad blanc entier dal (gras noir en peau)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "(résultat moins aéré)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Graines de fénugreek (aide à la fermentation et au brunissement)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau froide (pour le trempage + le broyage; préféré non chloré)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "eau filtrée ou embouteillée (le chlore inhibe la fermentation)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer fin (ajouté après fermentation)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sel de roche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre ou ghee (pour la cuisson de chaque dosa)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "huile de coco raffinée (traditionnelle pour la croustillante)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "soaked_grains",
      "instructions": "Rincer le riz et l'urad dal séparément dans plusieurs changements d'eau froide jusqu'à ce qu'il soit clair. Mélanger les graines d'urad et de fenugrec dans un bol et le riz dans un bol séparé. Couvrez-les généreusement avec de l'eau fraîche non chlorée et laissez tremper pendant 6 à 8 heures, ou pendant la nuit. Ils doivent être trempés séparément parce que le dal broie à une consistance différente de celle du riz et nécessite une texture différente. Conserver dans un endroit frais, mais pas au réfrigérateur — les bactéries ambiantes sur les grains sont les agents de fermentation et les températures froides suppriment leur activité.",
      "visualCue": {
        "primaryTarget": "Les grains sont gonflés à environ une fois et demie leur taille originale. L'urad dal est plumé et a une faible floraison blanche. Les grains de riz sont gonflés et écrasent facilement entre les doigts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore petits et durs. Le riz résiste à la pression entre les doigts.",
            "action": "Tremper encore au moins 2 heures. Le gonflement est ce qui permet aux grains de broyer en douceur."
          },
          {
            "state": "Perfect",
            "description": "Les deux composants sont gonflés et doux. Un grain de riz pressé entre deux doigts frotte plutôt que des fissures. Dal est doux jusqu'au bout.",
            "action": "Égoutter et procéder au broyage."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont trempé plus de 12 heures et ont une odeur légèrement aigre ou fermentée.",
            "action": "C'est bien, une préfermentation légère aide. Grind et procéder immédiatement."
          }
        ]
      },
      "feelCue": "Appuyez sur un grain de riz trempé entre le pouce et l'index — il devrait donner comme une lentille de contact très douce, frottant à plat sans centre dur ou grainé."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "soaked_grains"
      ],
      "outputState": "raw_batter",
      "instructions": "Égoutter les graines d'urad et de fenugrec, en réservant leur eau de trempe. Dans un mélangeur à haute puissance, moudre le dal avec du fenugrec à l'aide d'une quantité minimale de l'eau de trempe réservée — juste assez pour faire bouger le mélangeur. L'urad dal doit être moulu ultra-fin, à une pâte lisse et aérée en mousse qui est presque collante, environ 5 à 8 minutes de broyage. Ça devrait être une mousse épaisse et dense. Séparément, égouttez le riz et moudre avec de l'eau plus réservée à une pâte granulaire légèrement plus grossière — certains grains très fins sont acceptables et aident à donner la texture dosa. Combinez les deux dans un grand récipient avec de la place pour augmenter : la pâte augmentera en volume de 30 à 50% pendant la fermentation.",
      "visualCue": {
        "primaryTarget": "Pâte de dal d'Urad : mousse blanche épaisse, complètement lisse, presque collante avec des bulles d'air piégées. Pâte de riz : crème fine, légèrement texturée. Combiné : une pâte versable, pâle et légèrement crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte d'Urad est encore gritty — fine grain visible quand on la frotte entre les doigts. La pâte de riz a des morceaux visibles.",
            "action": "Mouiller plus longtemps, en ajoutant de petites quantités d'eau. La douceur de la pâte de dal est essentielle à la fermentation."
          },
          {
            "state": "Perfect",
            "description": "La pâte de Dal est soyeuse et presque mousseuse. La pâte de riz est fine mais a une granularité très faible. La pâte combinée verse comme la pâte à crêpes épaisse.",
            "action": "Mélanger, remuer et transférer dans un grand récipient pour la fermentation."
          },
          {
            "state": "Overdone",
            "description": "La batterie est très mince de trop d'eau ajoutée lors du broyage.",
            "action": "Vous ne pouvez pas enlever l'eau. La dosa sera plus mince et plus croquante que l'idéal. Fermenter et cuire — réduire le temps de cuisson en conséquence."
          }
        ]
      },
      "feelCue": "Frottez une goutte de la pâte de l'urade de terre entre votre index et le pouce — il devrait se sentir complètement lisse, comme la lotion à la main, sans grain."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "raw_batter"
      ],
      "outputState": "fermented_batter",
      "instructions": "Couvrir la pâte combinée de façon lâche — une plaque ou un chiffon, non un couvercle hermétique — et la placer dans un endroit chaud à 28–32 °C (82–90 °F). Dans une cuisine nord-américaine ou européenne en hiver, cela peut signifier un four éteint avec seulement l'ampoule allumée, ou près d'un radiateur. Ferment pendant 8 à 12 heures. La pâte est prête lorsqu'elle s'est relevée de façon notable, sent peu aigre, et la surface est pétillante et poreuse. Ajouter du sel seulement une fois la fermentation terminée — le sel ajouté avant la fermentation supprime la levure et les bactéries sauvages. Incorporer le sel en douceur, en essayant de ne pas dégonfler inutilement la pâte levée.",
      "visualCue": {
        "primaryTarget": "La batterie a augmenté de 30 à 50% dans le récipient. La surface est couverte de fines bulles. L'odeur est agréablement aigre, comme le yogourt doux ou le jeune armois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Batter ressemble exactement comme avant. Pas de bulles visibles, pas d'odeur acide, pas d'augmentation du volume.",
            "action": "Passez à un endroit plus chaud. Le froid tue la fermentation. Si dans une cuisine très froide, cela pourrait prendre 16 à 20 heures."
          },
          {
            "state": "Perfect",
            "description": "Surface visiblement relevée, bubble, agréable arôme aigre-yogurt. La batterie a un léger tang quand elle est crue.",
            "action": "Incorporer le sel et commencer la cuisson, ou réfrigérer et utiliser dans les 3 jours."
          },
          {
            "state": "Overdone",
            "description": "La batterie a une odeur extrêmement aigre, est très liquide et les bulles se sont effondrées. Un goût très tannant.",
            "action": "Toujours utilisable, juste plus tard que l'idéal. Cela rend une dosa très aigre — ajouter une pincée de sucre à la pâte pour équilibrer."
          }
        ]
      },
      "feelCue": "Sentez la pâte après 8 heures — si la fermentation est active, vous sentirez une ameresse propre et douce comme l'intérieur d'un bon contenant de yaourt. Si ça sent rien, il faut plus de temps ou plus de chaleur."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "fermented_batter",
        "ing_06"
      ],
      "outputState": "finished_dosa",
      "instructions": "Chauffer une poêle en fonte ou une poêle antiadhésive lourde à feu vif jusqu'à ce qu'elle commence à fumer légèrement. Frottez la surface avec un oignon coupé à moitié trempé dans l'huile. Déposer environ 80 ml de pâte fermentée au centre de la poêle chaude. Immédiatement et en toute confiance, utilisez le dos de la louche dans un mouvement circulaire pour étendre la pâte vers l'extérieur du centre en une seule spirale continue — vous avez environ 10 secondes avant qu'elle ne se mette. Arrosez quelques gouttes d'huile autour des bords. Cuire à feu vif jusqu'à ce que les bords se lèvent et se bouclent loin de la poêle et que le dessous soit brun-or profond et croustillant, environ 2 à 3 minutes. Flip seulement si vous voulez une double dosa cuite — le papier traditionnel dosa est cuit d'un seul côté.",
      "visualCue": {
        "primaryTarget": "Une crêpe mince, translucide et lacy avec des taches dorées profondes sur le fond et les bords qui sont en train de friser loin de la poêle. La surface supérieure non cuite est passée du blanc à un aspect légèrement translucide à la vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont encore plats et la surface semble mouillée. Les toboggans se glissent quand vous essayez de soulever un bord.",
            "action": "Laisser à feu vif. La dosa n'est pas prête. Ne le forcez jamais."
          },
          {
            "state": "Perfect",
            "description": "Les bords se sont recourbés et levés spontanément. Le fond est visible en or profond lorsque vous regardez avec une spatule. La surface supérieure est complètement sèche et mate.",
            "action": "Plier en deux ou rouler, servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et la dosa est rigide et fragile. Une odeur légèrement carbonisée.",
            "action": "Toujours comestible et croustillant. Enlevez et servez — ils sont appelés dosa papier pour une raison."
          }
        ]
      },
      "feelCue": "Lorsque vous pouvez entendre la dosa craquer et sauter à partir de 30 cm de distance et sentir un léger toast de noix-sour, il est presque fait. Faites glisser une spatule mince sous un bord — si elle se soulève proprement sans déchirer, la dosa est prête à se plier."
    }
  ]
};
