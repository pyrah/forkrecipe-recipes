export default {
  "repoId": "master_kenyan_sukuma_wiki_001",
  "parentRepoId": null,
  "slug": "sukuma-wiki",
  "author": "ForkRecipe Kitchen",
  "title": "Sukuma Wiki",
  "description": "Collard greens a sauté avec de la tomate, de l'oignon, et un murmure de chili — le vert quotidien du Kenya, dont le nom signifie 'pousser la semaine' en swahili, un plat cuisiné dans chaque ménage de Nairobi à Mombasa, à la fois humble et profondément satisfaisant.",
  "cuisine": "Kenya",
  "culture": "Afrique de l ' Est",
  "category": "vegetables",
  "tags": [
    "vert-collé",
    "Kényan",
    "Afrique de l ' Est",
    "végétarien",
    "végétalien",
    "Vite",
    "tous les jours"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 892,
  "forks": 78,
  "contributors": 27,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-08",
  "updatedAt": "2025-05-22",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 3,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Verts collards (sukuma wiki) — tiges dépouillées, feuilles en mousseline",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "chou",
        "Fard suisse"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon (finement tranché)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Tomates de ripe (choupées)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates en conserve"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Piments à l'ail et au vert frais (écossés)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile végétale ou de palme",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau ou matériel léger (petite quantité)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparations vertes",
      "inputs": [
        "ing_01"
      ],
      "outputState": "chiffonade_greens",
      "instructions": "Enlevez la tige centrale dure de chaque feuille à collier en pliant la feuille dans le sens demi-longueur et en retirant la tige. Empilez plusieurs feuilles, roulez bien comme un cigare, et tranchez en minces rubans (chiffonade) d'environ 1cm de large. Les tranches plus épaisses font cuire plus rapidement et uniformément — les tranches épaisses ont besoin d'une cuisson beaucoup plus longue et restent difficiles. Laver à l'eau froide et égoutter, mais ne pas sécher complètement — l'eau résiduelle aide les verts à cuire.",
      "visualCue": {
        "primaryTarget": "Des rubans verts fins et uniformes, lavés et légèrement humides. Pas de tiges épaisses visibles dans la pile. Les rubans doivent être cohérents en largeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont coupées en gros morceaux irréguliers avec des morceaux de tige épais qui restent.",
            "action": "Recoupez plus finement et assurez-vous que toutes les tiges sont enlevées. Les morceaux épais resteront difficiles tout au long de la cuisson."
          },
          {
            "state": "Perfect",
            "description": "Des rubans minces et cohérents sans tiges. La pile semble lumineuse, vert vif et légèrement humide du lavage.",
            "action": "Réserver et commencer l'oignon et la base de tomate."
          },
          {
            "state": "Overdone",
            "description": "Les verts sont coupés depuis longtemps et commencent à flétrir et à décolorer.",
            "action": "Cuire immédiatement — les verts coupés s'oxydent rapidement."
          }
        ]
      },
      "feelCue": "Prenez une poignée de greens de la chuffonade — ils devraient se sentir frais, légèrement humides et printemps. Chaque ruban doit tenir sa forme lorsqu'il est maintenu entre deux doigts et ne pas être complètement boiteux."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "tomato_onion_base",
      "instructions": "Chauffer l'huile dans une poêle large à feu moyen-vif. Ajouter l'oignon tranché et cuire 5 à 6 minutes jusqu'à ce qu'il soit adouci et commence à devenir doré. Ajouter l'ail et le chili vert et cuire 1 minute. Ajouter les tomates et cuire 3 à 4 minutes en remuant, jusqu'à ce qu'elles se décomposent en sauce rugueuse. La tomate fournit le liquide et l'acidité qui équilibrent l'amertume des verts à collier.",
      "visualCue": {
        "primaryTarget": "Des oignons légèrement dorés, assouplis, fusionnent avec des morceaux de tomates cassés en sauce aromatique. Le chili et l'ail sont parfumés dans l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore crus et pâles; les tomates sont encore en morceaux et semblent à peine chauffées.",
            "action": "Continuez à cuisiner. La tomate doit se décomposer complètement pour enrober les verts."
          },
          {
            "state": "Perfect",
            "description": "Des oignons dorés, des tomates dissoutes et un arôme épicé ailky qui remplit la cuisine. La sauce est légèrement réduite.",
            "action": "Ajouter les verts à collier."
          },
          {
            "state": "Overdone",
            "description": "La base a été réduite et séchée, collée au fond de la poêle.",
            "action": "Ajouter immédiatement les verts, leur humidité déglacera la poêle."
          }
        ]
      },
      "feelCue": "La base doit sentir l'oignon frit, la tomate fraîche et le chili vert simultanément. Appuyez sur un morceau de tomate contre la poêle — il devrait se dissoudre immédiatement, n'offrant aucune résistance."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "tomato_onion_base",
        "chiffonade_greens",
        "ing_06",
        "ing_07"
      ],
      "outputState": "cooking_sukuma",
      "instructions": "Ajouter les rubans verts collés à la poêle à la fois — ils paraîtront trop nombreux mais diminueront considérablement. Mélanger agressivement avec des pinces pour enrober la sauce tomate-oignon. Assaisonner de sel. Ajouter l'éclaboussure d'eau et couvrir la casserole pendant 2 minutes pour faire vapeur les verts. Couvrez-vous, lancez à nouveau et faites cuire encore 3 à 5 minutes à feu vif jusqu'à ce que les verts soient complètement flétris mais tiennent toujours une couleur verte vibrante et une bouchée agréable.",
      "visualCue": {
        "primaryTarget": "Entièrement flétris de vert col, dans un état vert foncé, scintillement — pas kaki ou gris-vert — avec la sauce tomate enrobant chaque ruban.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains rubans sont encore brillants, vert cru et la pile est haute et non comprimée. Une morsure a une mâche fibreuse.",
            "action": "Couvrir et vapeur encore 2 minutes, puis lancer à feu vif."
          },
          {
            "state": "Perfect",
            "description": "Tous les rubans sont flétris et vert foncé — pas gris. Ils ont encore une mâche agréable, légèrement résistante quand mordu. La sauce tomate enrobe chaque morceau.",
            "action": "Boucher, ajuster le sel et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les verts sont devenus gris kaki et sont complètement boiteux, libérant plus d'eau dans la casserole.",
            "action": "Servir immédiatement. Le wiki de sukuma trop cuit est encore comestible ; juste moins vibrant. La prochaine fois, réduisez le temps de cuisson."
          }
        ]
      },
      "feelCue": "Appuyez sur les verts cuits avec l'arrière d'une cuillère — ils devraient compresser légèrement mais ressorter avec une certaine résistance. Il ne devrait pas y avoir de liquide de mise en commun dans la casserole — si elle existe, augmenter la chaleur et la jeter jusqu'à ce qu'elle s'évapore."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "cooking_sukuma"
      ],
      "outputState": "finished_sukuma_wiki",
      "instructions": "Transférer dans un plat de service et servir immédiatement. Sukuma wiki n'attend personne — il perd la couleur et la texture à chaque minute qu'il est assis. L'accompagnement traditionnel est l'ugali (un porridge à maïs raide) qui absorbe les jus des verts. Un œuf frit sur le côté est la façon de la famille de travail kényane de faire un repas complet.",
      "visualCue": {
        "primaryTarget": "Un monticule vibrant et vert foncé de verts flétris avec de la sauce tomate-orange enrobant chaque ruban, prêt à servir aux côtés des ugali.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts apparaissent encore crus et très verts, la sauce est aqueuse et ne recouvre pas les feuilles.",
            "action": "Retourner à feu élevé pendant 2 minutes pour réduire le liquide et flétrir complètement."
          },
          {
            "state": "Perfect",
            "description": "Rubans foncés, brillants et flétris avec la sauce tomate intégrée. L'odeur est de verts sautés et d'ail — terreux, légèrement amer, salé.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les verts sont kakis, soyeux et inappétissants. Ils ont libéré de l'eau importante dans le plat.",
            "action": "Égoutter l'excès de liquide et servir. Ajouter une bruine d'huile fraîche pour restaurer un peu de vivacité."
          }
        ]
      },
      "feelCue": "Prenez un ruban de wiki de sukuma cuit avec une fourchette — il devrait draper au-dessus des dents et tenir ensemble, pas se désintégrer. Bouche: il doit être agréablement amer, salé de l'oignon, et avoir une finale propre et verte qui s'attarde sur le dos du palais."
    }
  ]
};
