export default {
  "repoId": "master_west_african_okra_stew_001",
  "parentRepoId": null,
  "slug": "okra-stew",
  "author": "ForkRecipe Kitchen",
  "title": "Ragoût d'Okra d'Afrique de l'Ouest",
  "description": "Une base dense, richement assaisonnée de tomates et d'huile de palme dans laquelle l'okra déchiqueté est agité pour libérer son épaississant mucilagineux naturel, construisant un pot soyeux et salé parfumé d'écrevisse et de poisson séché. Mangez sur du fufu, du riz ou de l'éba, c'est un repas complet dans une seule casserole.",
  "cuisine": "Afrique de l ' Ouest",
  "culture": "Nigéria/Ghanaïen",
  "category": "vegetables",
  "tags": [
    "Sans gluten",
    "Afrique de l ' Ouest",
    "un seul pot",
    "Produits de la mer",
    "ragoût"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Okra frais, dessus enlevés",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "okra congelé, dégelé et séché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile de palme (rouge, non raffinée)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "huile neutre + 1 c. à thé paprika fumé pour la couleur"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Poivre de bonnet écossais, graines dans ou hors goût",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": [
        "habanero",
        "Ata rodo",
        "1 tsp cayenne"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates de ripe, hachées approximativement",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomates concassées en conserve (250g)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Inosinate",
      "name": "Écrevisse de fond (crevettes séchées)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Pâte de crevettes (en moitié d'utilisation) ou crevettes séchées, fine moulue"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Poissons (pré-sacés et déchiquetés) ou poissons séchés",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "maquereau fumé",
        "poisson salé séché (réduire le sel ajouté)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Poisson ou bouillon de poulet, ou eau",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "eau avec 1 cube de stock"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel, au goût",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Maggi assaisonnement cube (réduire le sel ajouté)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "pepper_base",
      "instructions": "Chauffer l'huile de palme dans un pot lourd ou un four hollandais à feu moyen jusqu'à ce qu'elle liquéfie et mijote; l'huile de palme est solide à température ambiante et a besoin d'un instant. Ajouter l'oignon en dés et le bonnet de scotch entier ou grossièrement haché. Faire frire, en remuant occasionnellement, jusqu'à ce que l'oignon soit doux, translucide et commence à prendre de la couleur aux bords, environ 7–8 minutes. L'huile de palme et l'oignon forment ensemble la fondation aromatique du ragoût. La cuisine se remplira d'un parfum terreux et incomparable d'huile de palme rouge, c'est exact.",
      "visualCue": {
        "primaryTarget": "Huile rouge-or entourant l'oignon translucide, le capot scotch doux et un peu effondré. L'huile est lumineuse et vive de l'huile de palme carotène.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et ferme, l'huile n'est pas complètement chaude. Le poivre est toujours rigide.",
            "action": "Continuer la cuisson à feu moyen: l'oignon doit être entièrement doux avant d'ajouter des tomates."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est entièrement doux et translucide, commençant à colorier aux bords. L'huile de palme est rouge orange vif et profondément parfumée.",
            "action": "Ajouter les tomates et la pâte de tomate."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est profondément doré et collé au pot. L'huile de palme fume.",
            "action": "Baissez immédiatement le feu et ajoutez les tomates pour arrêter la cuisson. Bien mélanger pour libérer le fond."
          }
        ]
      },
      "feelCue": "L'huile de palme doit sentir riche, noisette et légèrement végétale, comme le beurre tropical salé. Une odeur brute ou plastique signifie que l'huile est de mauvaise qualité ou surchauffée."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "pepper_base",
        "ing_05",
        "ing_06"
      ],
      "outputState": "tomato_base",
      "instructions": "Ajouter les tomates fraîches et la pâte de tomate dans la casserole. Mélanger et augmenter légèrement la chaleur. Cuire à découvert, en remuant fréquemment, jusqu'à ce que les tomates se soient complètement décomposées et que le mélange ait considérablement diminué — environ 12-15 minutes. Le signe critique que vous recherchez est l'huile montant à la surface et pooling aux bords du pot. Dans la cuisine nigériane, cela s'appelle « l'huile flottante » et indique que l'eau des tomates a été chassée et que la base de ragoût est bien frite et concentrée.",
      "visualCue": {
        "primaryTarget": "Pâte rouge-orange épaisse et foncée à l'huile de palme orange vif, visiblement mise en commun et séparée aux bords et à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore aqueux, les tomates n'ont pas cassé, l'huile est invisible sous le liquide émulsifié.",
            "action": "Poursuivre la cuisson à feu moyen, en remuant afin d'éviter toute combustion sur le fond."
          },
          {
            "state": "Perfect",
            "description": "Épais, confiture, pâte de tomate foncée avec de l'huile visible et séparée à la surface. Le mélange a diminué de moitié et sent profondément savoureux.",
            "action": "Ajouter les écrevisses et les poissons de stock et continuer."
          },
          {
            "state": "Overdone",
            "description": "La pâte est très sombre, commençant à cramper sur le fond du pot.",
            "action": "Ajouter immédiatement le stock et racler le fond du pot. Moins de chaleur pour le reste de la cuisson."
          }
        ]
      },
      "feelCue": "Incorporer le fond du pot — s'il est glissant avec de l'huile et que la pâte s'éloigne proprement des murs du pot, il est prêt. S'il colle épais, l'eau ne s'est pas complètement retirée."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "tomato_base",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "seasoned_base",
      "instructions": "Ajouter l'écrevisse au sol, le stock de poisson déchiqueté pré-sacré et le stock ou l'eau. Remuer soigneusement et goûter — l'écrevisse ajoute une note umami intense et océanique et une légère douceur qui est l'épine dorsale des ragoûts d'Afrique de l'Ouest. Si l'on utilise du poisson de stock, il doit être pré-poêlé pendant 24 à 48 heures et est déjà adouci; le poisson séché (par exemple, eja osan) est séché et réhydraté dans le pot. Porter à un doux mijoter et cuire pendant 5 minutes pour épouser les saveurs. Goûtez et commencez à ajuster le sel à ce stade.",
      "visualCue": {
        "primaryTarget": "Base odorante rouge rouille profonde avec des morceaux visibles de poisson répartis dans l'ensemble. Petits points oranges d'écrevisse visibles suspendus dans la couche d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saveur de poisson-rayon n'a pas encore fleuri — le ragoût a surtout le goût de la tomate. Les morceaux de poisson sont encore raides.",
            "action": "Laisser mijoter 3 à 4 minutes de plus pour laisser fleurir et infuser les fruits de mer séchés."
          },
          {
            "state": "Perfect",
            "description": "Arôme très salé et complexe. Le poisson s'est adouci et a commencé à flocer. Crayfish saveur est présente mais pas écrasante.",
            "action": "Ajouter l'okra immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est complètement désintégré dans la sauce. La saveur d'écrevisse est très forte et poissonneuse.",
            "action": "Procéder — la texture du poisson est moins importante que la saveur ici. Régler avec une pression de lime si trop piquant."
          }
        ]
      },
      "feelCue": "Sentez la vapeur qui s'élève de la casserole: une base d'okra bien développée sent la mer, la tomate mûre et l'huile de palme chaude simultanément. Il devrait être impossible d'attribuer un seul ingrédient."
    },
    {
      "nodeId": "step_4",
      "action": "Hacher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepared_okra",
      "instructions": "Préparer l'okra selon la texture préférée: pour un ragoût très visqueux (draw) traditionnel et prisé dans de nombreuses régions, déchiqueter l'okra en râpant sur un gratteur de boîte ou en poussant brièvement dans un robot alimentaire. Pour une version moins mucilagineuse avec des ronds discrets, tranchez dans le sens transversal en pièces de 1 cm. Les deux méthodes libèrent le mucilage qui épaissit le ragoût; le déchiquetage libère beaucoup plus et produit un résultat plus dense et plus visqueux. Quelle que soit la méthode que vous utilisez, l'okra doit être coupé juste avant d'ajouter au pot pour empêcher l'oxydation.",
      "visualCue": {
        "primaryTarget": "Soit une masse déchiquetée légèrement collante de couleur vert vif (méthode graduée) soit des rondelles de coupe transversale propres montrant l'intérieur en forme d'étoile (méthode sciée).",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'okra n'a pas été entièrement préparé: de grandes gousses entières ou des morceaux trop épais pour cuire rapidement.",
            "action": "Terminer le déchiquetage ou le tronçonnage à une taille uniforme."
          },
          {
            "state": "Perfect",
            "description": "Taille constante, vert vif, légère adhérence déjà du mucilage. Prêt à ajouter.",
            "action": "Ajouter immédiatement au ragoût mijotant."
          },
          {
            "state": "Overdone",
            "description": "Okra a été coupé trop loin à l'avance et a obscurci et oxydé aux surfaces coupées.",
            "action": "Ajouter immédiatement au ragoût. La couleur sera légèrement moins vive mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "L'okra fraîchement coupé est légèrement collant entre les doigts — ce mucilage est l'agent épaississant du plat. Si les surfaces coupées se sentent parfaitement sèches, l'okra est dépassée."
    },
    {
      "nodeId": "step_5",
      "action": "Mijoter",
      "inputs": [
        "seasoned_base",
        "prepared_okra",
        "ing_10"
      ],
      "outputState": "okra_stew",
      "instructions": "Ajouter l'okra à la base mijotante. Mélanger une fois pour incorporer, puis résister à l'envie de remuer vigoureusement ou fréquemment — remuer excessivement décompose l'okra et rend le ragoût trop visqueux plutôt que soyeux. Cuire à feu moyen-doux pendant 8 à 12 minutes, en remuant doucement seulement 2 à 3 fois, jusqu'à ce que l'okra soit complètement tendre et que le ragoût s'épaississe à une consistance visqueuse et brillante. Goûtez et ajustez le sel. Le ragoût devrait être assez épais pour être légèrement bombé sur une cuillère et enrober l'arrière. Servir sur du fufu, de l'igname piquée, de l'éba ou du riz à la vapeur.",
      "visualCue": {
        "primaryTarget": "Des brins ou des rondelles de couleur verte profonde entièrement incorporés à la base rouge rouille. Le ragoût est visqueux et brillant, pas aqueux. Piscines d'huile et frissons à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Okra est toujours ferme et brillant, le ragoût n'est pas encore épaissi. Le mucilage n'a pas été complètement libéré.",
            "action": "Cuire encore 3-4 minutes à feu moyen sans remuer."
          },
          {
            "state": "Perfect",
            "description": "Okra est tendre tout au long, le ragoût est épais et tire en longs brins brillants quand une cuillère est levée. Un arôme très salé et riche.",
            "action": "Régler l'assaisonnement et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût est devenu extrêmement épais et stody, presque gelé. L'okra est gris-vert plutôt que vibrant.",
            "action": "Ajouter un jet de bouillon chaud ou d'eau et remuer doucement pour se détendre. La couleur sera moins vive mais la saveur est fine."
          }
        ]
      },
      "feelCue": "Soulevez une cuillère et laissez-la retomber dans le pot — il devrait tomber dans un fil lent et connecté, tirant contre lui comme du miel chaud avant qu'il ne casse."
    }
  ]
};
