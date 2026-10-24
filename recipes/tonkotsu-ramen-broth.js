export default {
  "repoId": "master_japanese_tonkotsu_ramen_broth_001",
  "parentRepoId": null,
  "slug": "tonkotsu-ramen-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Tonkotsu Ramen Broth",
  "description": "Un bouillon de porc blanc-os, visqueux, coaxié à partir de trotters fendus et d'os du cou pendant 18 heures de chaleur de roulement — riche en collagène, porcin et impossiblement crémeux sans goutte de lait.",
  "cuisine": "Japonais",
  "culture": "Hakata (Fukuoka)",
  "category": "stocks",
  "tags": [
    "Ramen",
    "porc",
    "bouillon",
    "Japonais",
    "Cuisson longue",
    "collagène"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "18 hr",
  "ratioSystem": "weight",
  "stars": 2340,
  "forks": 312,
  "contributors": 68,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Trotters de porc, divisés dans le sens de la longueur",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "os du cou de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Ossements du cou de porc",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "os du dos de porc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, coupé en deux et carbonisé",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "haut de poireaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais, tranches épaisses, carbonisé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Giroves d'ail écrasées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 4000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin (pour blanchir l'eau)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07"
      ],
      "outputState": "blanched_bones",
      "instructions": "Placer les os dans une grande réserve. Couvrir d'eau froide et porter à ébullition rapide à feu vif. Faire bouillir dur pendant 10 minutes — les taches de couleur grise et les impuretés s'élèveront agressivement à la surface. Égoutter complètement, puis rincer chaque os sous l'eau froide courante, en frottant les morceaux sombres restants avec vos doigts ou une brosse. Nettoyez le pot.",
      "visualCue": {
        "primaryTarget": "Les os rincés sont propres et pâles — aucune mousse grise ne s'accroche aux cavités médullaires ou aux surfaces articulaires.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os sont encore roses aux articulations, les os gris importants s'accrochent aux surfaces.",
            "action": "Rincer plus soigneusement et racler la moelle noire si nécessaire — les résidus nuagent le bouillon final."
          },
          {
            "state": "Perfect",
            "description": "Les os sont uniformément d'ivoire pâle. L'eau est libre quand vous les rincer. Les cavités étroites sont ouvertes et nettoyées.",
            "action": "Retournez les os nettoyés dans la casserole avec de l'eau douce."
          },
          {
            "state": "Overdone",
            "description": "Les os sentent fortement cuits; la texture de surface est crayeuse.",
            "action": "Procéder — la longue mijoter suivante sera plus que compenser."
          }
        ]
      },
      "feelCue": "L'eau devrait tourner un gris-brun en 2 minutes — cette purge visible est la raison pour laquelle l'étape blanche existe."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "charred_aromatics",
      "instructions": "Déposer les moitiés d'oignon et les tranches de gingembre coupées dans une poêle en fonte sèche ou directement sur une flamme de brûleur à gaz avec des pinces. Char jusqu'à ce que les surfaces coupées soient profondément noircies — presque brûlées. Cette amertume caramélisée édulcore le bouillon pendant des heures.",
      "visualCue": {
        "primaryTarget": "Les surfaces coupées sont noires et carbonisées, avec un anneau de brun ambré profond autour de l'omble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement brunis légèrement — couches d'oignon translucides, bords de gingembre doré.",
            "action": "Retour à la chaleur plus élevée; l'omble est ce qui aromatise le bouillon."
          },
          {
            "state": "Perfect",
            "description": "Carbone noir sur les surfaces coupées avec un arôme doux et fumé. Les bords semblent presque brûlés mais l'odeur du caramel.",
            "action": "Réserver jusqu'à ce que les os soient prêts."
          },
          {
            "state": "Overdone",
            "description": "Entièrement cendre grise avec de l'acride plutôt que de l'odeur fumée.",
            "action": "Jeter et recommencer avec de nouveaux aromatiques — le vrai char est bon; ce n'est pas le frêne."
          }
        ]
      },
      "feelCue": "L'oignon doit siffler et fumer quand il frappe la casserole sèche, et la cuisine doit sentir du sucre caramélisé sucré dans les 30 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "blanched_bones",
        "charred_aromatics",
        "ing_05",
        "ing_06"
      ],
      "outputState": "developing_broth",
      "instructions": "Retournez les os nettoyés dans le pot. Ajouter l'oignon carbonisé, le gingembre, l'ail et toute l'eau froide. Porter à ébullition pleine et enroulée à feu vif — ne pas réduire. Maintenir une ébullition vigoureuse pendant les 2 premières heures; l'eau turbulente émulsifie le collagène et la graisse dans le bouillon blanc opaque caractéristique du tonkotu. Après 2 heures, réduire à une forte mijoter et cuire 14 à 16 heures de plus au total, en ajoutant de l'eau bouillante si le niveau tombe sous les os.",
      "visualCue": {
        "primaryTarget": "Le bouillon est blanc opaque — la couleur du lait entier — sans couche de graisse visible se séparant sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est beige léger et clair, comme un bouillon de poulet léger. Pas encore émulsifié.",
            "action": "Augmentez la chaleur; vous avez besoin que le roulement ébullition pour décomposer le collagène et émulsifier la graisse."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, blanc crémeux avec de minuscules bulles qui secouent la surface. Sensation puissante de graisse de porc et d'os rôti.",
            "action": "Maintenir l'ébullition; vérifier le niveau d'eau toutes les 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Le papillon a diminué au-delà des os; la couleur devient jaune-gris et légèrement brûlée.",
            "action": "Ajoutez 500 g d'eau bouillante, réduisez la chaleur et continuez."
          }
        ]
      },
      "feelCue": "Frottez une goutte entre vos doigts après 10 heures — il devrait se sentir lissé et légèrement collagène dissous, pas aqueux."
    },
    {
      "nodeId": "step_4",
      "action": "Poignée",
      "inputs": [
        "developing_broth"
      ],
      "outputState": "strained_broth",
      "instructions": "Au bout de 16 à 18 heures, pressez le bouillon à l'aide d'un filtre à mailles fines, en pressant les solides pour extraire tout le liquide. Jeter les os épuisés et les aromatiques. Vous devriez avoir de 2 à 2,5 litres de bouillon blanc épais. Assaisonner au goût au sel ou à la tare au bol.",
      "visualCue": {
        "primaryTarget": "Le bouillon resserré enveloppe l'arrière d'une louche épaissement et coule lentement, comme de la crème légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth s'échappe comme de l'eau. Manque de corps et sent mince.",
            "action": "Retournez dans la casserole et réduisez de 20%, puis reformez."
          },
          {
            "state": "Perfect",
            "description": "Blanc laiteux, épais, enveloppe une cuillère d'un film soutenu. L'arôme est profond, porcin et légèrement sucré de l'oignon carbonisé.",
            "action": "Laisser refroidir rapidement dans un bain de glace, puis réfrigérer. Le bouillon va geler solide — c'est exactement exact."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est très foncé et réduit à une consistance en pâte.",
            "action": "Finissez avec de l'eau chaude à votre niveau de richesse préféré."
          }
        ]
      },
      "feelCue": "Le bouillon de tonkotsu froid doit être fixé à une gelée de porc ferme et jiggly au réfrigérateur — s'il reste liquide à froid, l'extraction du collagène est insuffisante."
    }
  ]
};
