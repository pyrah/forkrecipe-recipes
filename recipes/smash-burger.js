export default {
  "repoId": "master_american_smash_burger_001",
  "parentRepoId": null,
  "slug": "smash-burger",
  "author": "ForkRecipe Kitchen",
  "title": "Smash Burger",
  "description": "Une boule lâche de boeuf 80/20, pressée fort contre l'acier chaud criant jusqu'à ce que les bords s'allongent en dentelle croustillante et brun acajou - c'est la réaction de Maillard à son plus démocratique et dévastateur.",
  "cuisine": "Américain",
  "culture": "Diner américain",
  "category": "proteins",
  "tags": [
    "américains",
    "boeuf",
    "burger",
    "dîner",
    "croustillant"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 3812,
  "forks": 421,
  "contributors": 34,
  "license": "CC-BY-SA",
  "createdAt": "2024-03-15",
  "updatedAt": "2025-11-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "80/20 boeuf haché, emballé dans des boules de 85 g",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "75/25 rondelle au sol",
        "Mélange de wagyu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de mer fin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "tranches de fromage américain",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "cheddar blanc",
        "Colby Jack"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Rouleaux de pommes de terre de Martin ou pain brioche doux similaire",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "brioche",
        "Bun de graines de sésame"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Mayo pour toasting"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Moutarde jaune, ketchup, oignon blanc en dés (pour servir)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce spéciale",
        "cornichons"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Grille thermique",
      "inputs": [
        "ing_06"
      ],
      "outputState": "hot_griddle",
      "instructions": "Réglez une grille en fonte ou une poêle lourde sur la chaleur la plus élevée que votre poêle donnera. Laisser sécher au moins 3 minutes — pas d'huile, pas encore de beurre. La température de surface devrait atteindre 230 à 260°C. Les hamburgers de Smash ont besoin d'une chaleur de contact maximale pour provoquer la réaction de Maillard avant que le boeuf ne puisse se vapeur.",
      "visualCue": {
        "primaryTarget": "La surface de la grille doit être visiblement sèche et légèrement trouble. Une goutte d'eau tombée sur elle devrait se vaporiser dans une balle et s'éloigner en moins d'une demi-seconde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau siffle et s'évapore lentement. Pan semble huileux du revêtement d'usine ou utilisation précédente. Surface sèche sans brume thermique.",
            "action": "Attendez encore une minute. Appuyez sur la paume 10cm au-dessus de la surface — vous devez sentir une chaleur intense et rayonnante immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Surface sèche, foncée. Toute goutte d'eau disparaît en une fraction de seconde. La fumée faint dérive du métal.",
            "action": "Ajouter une fine frottis de beurre et ajouter immédiatement la boule de bœuf."
          },
          {
            "state": "Overdone",
            "description": "Le pan fume beaucoup et sent l'acride. Le métal peut se développer des points chauds qui semblent plus sombres que la surface environnante.",
            "action": "Retirer du feu pendant 30 secondes. Essuyer brièvement avec une serviette en papier sur les pinces. Résumez: même une poêle surchauffée est meilleure qu'une poêle sous-chauffée pour se briser."
          }
        ]
      },
      "feelCue": "Maintenez votre palmier ouvert 8cm au-dessus de la surface — la chaleur devrait être si intense que vous ne pouvez la maintenir là qu'une seconde avant de tirer en arrière. Si vous pouvez compter jusqu'à trois, continuez à chauffer."
    },
    {
      "nodeId": "step_2",
      "action": "Smash et couture",
      "inputs": [
        "hot_griddle",
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "smashed_patty",
      "instructions": "Déposer une boule de bœuf sur la grille chaude, légèrement beurrée. Assaisonner immédiatement le haut avec du sel et du poivre. À l'aide d'une spatule lourde ou d'une presse à hamburger, appuyez avec votre poids corporel – dur, rapide et soutenu pendant 10 secondes complètes. L'objectif est le contact maximal avec la surface. Ne bougez pas. Faire cuire pendant 90 secondes. Les bords vont devenir bruns et lactés avant le centre.",
      "visualCue": {
        "primaryTarget": "Une croûte d'acajou profonde s'étend vers l'intérieur depuis les bords lactés et rincés. Le sommet de la patty passe du rouge cru au centre au gris cuit aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est brun pâle, pas sombre. Les bords ne sont pas encore croustillants — ils ont l'air doux et la graisse n'a pas complètement rendu. Le centre est encore rose-rouge cru.",
            "action": "Laisse tomber. Chaque fois que vous vérifiez en soulevant, vous cassez la croûte formant en dessous. Attendez que les bords soient crépitants et sombres."
          },
          {
            "state": "Perfect",
            "description": "Une croûte acajou foncée clairement définie couvre 80% de la surface visible. Lacey, bords croustillants se sont formés. La graisse a rendu et mis en commun autour de la patty.",
            "action": "Flip une fois, en utilisant une spatule mince et raide. Gratter tout le fond de la grille avec le flip."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont noirs et sentent carbonisés, pas caramélisés. L'affection pour la poêle est de fumer et amer.",
            "action": "Flip immédiatement. Éliminez tout amour vraiment brûlé. Le côté supérieur peut encore l'échanger — ajouter le fromage rapidement."
          }
        ]
      },
      "feelCue": "Lorsque vous glissez enfin la spatule sous, vous devriez la sentir et l'entendre séparée de la grille avec une raclure sèche et tranchante — pas une larme mouillée et grinçante. Si elle déchire, la croûte n'est pas encore complètement formée."
    },
    {
      "nodeId": "step_3",
      "action": "Fromage et vapeur",
      "inputs": [
        "smashed_patty",
        "ing_04"
      ],
      "outputState": "cheesed_patty",
      "instructions": "Dépliez la patty d'une spatule fine et raide, en faisant glisser tout l'affection brune. Poser immédiatement une tranche de fromage américain sur le dessus. Si vous doublez (double coup), placez une seconde tape cassée sur le dessus du premier, puis fromage sur le dessus. Ajouter une éclaboussure d'eau au bord de la grille et couvrir avec un dôme ou un couvercle pendant 15 secondes pour faire fondre le fromage à la vapeur.",
      "visualCue": {
        "primaryTarget": "Le fromage est entièrement fondu et brillant, drapé sur les bords de la patty dans un rideau lisse. Le deuxième côté de la patty a une couture dorée plus légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage est encore un carré solide, légèrement doux au centre. Les coins sont encore raides.",
            "action": "Ajoutez encore quelques gouttes d'eau et dôme pendant encore 10 secondes. Le fromage américain fond rapidement — il ne devrait pas être long."
          },
          {
            "state": "Perfect",
            "description": "Le fromage est entièrement fondu, brillant et drapé sur les bords dans un rideau lisse et uniforme. Pas de coins distincts visibles.",
            "action": "Faites glisser sur un pain grillé immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le fromage a commencé à brunir et à buller aux bords, se séparant en graisse. Patty second côté est charring.",
            "action": "Supprimer immédiatement. Le fromage sera encore bon même avec un peu de brunissement."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez le dôme, une bouffée de vapeur et de graisse de boeuf devrait frapper votre visage — il devrait sentir intensément de boeuf caramélisé et de lait chaud, pas de fumée."
    },
    {
      "nodeId": "step_4",
      "action": "Petits pains grillés",
      "inputs": [
        "ing_05",
        "ing_06"
      ],
      "outputState": "toasted_buns",
      "instructions": "Coupez le pain et étalez les faces coupées avec une fine couche de beurre ramolli. Placer le côté coupé sur la grille ou dans une poêle sèche à feu moyen. Faire cuire 60 à 90 secondes jusqu'à ce qu'il soit doré et légèrement croustillant. Le pain doit être grillé — un pain doux et non grillé s'effondre sous l'humidité du burger.",
      "visualCue": {
        "primaryTarget": "La surface coupée est uniformément dorée, avec une légère croûte quand on la presse. La couronne de pain reste douce et oreiller pendant que le visage intérieur est grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le visage coupé est pâle et encore doux. Pas de couleur ou de croquant. Bun absorbera les jus de hamburger et deviendra tout de suite soyeux.",
            "action": "Gardez la chaleur. Un pain grillé correctement est structurel: il devrait tenir au moins 2 minutes de manger sans se désintégrer."
          },
          {
            "state": "Perfect",
            "description": "Même couleur marron doré. Crunch léger quand pressé. Le beurre a légèrement bruni, ajoutant de la noix.",
            "action": "Retirer et s'habiller immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le visage de Bun est brun foncé et dur. Ça sent le toast brûlé.",
            "action": "Utilisez - le de toute façon — l'humidité du burger l'adoucira. La prochaine fois, baissez la chaleur ou réduisez le temps de cuisson de 30 secondes."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le visage grillé avec un doigt — il devrait revenir avec une légère croûte, ne pas comprimer silencieusement. La cuisine devrait sentir le beurre grillé et le sésame."
    },
    {
      "nodeId": "step_5",
      "action": "Rassembler et servir",
      "inputs": [
        "cheesed_patty",
        "toasted_buns",
        "ing_07"
      ],
      "outputState": "finished_smash_burger",
      "instructions": "Habillez le pain en bas avec la moutarde et le ketchup. Ajouter un petit tas d'oignon blanc en dés. Placez la patty au fromage sur le dessus. Couronnez-le. Servir en 60 secondes — la fenêtre entre parfait et triste est étroite. Enveloppez le papier si vous avez besoin de le transporter.",
      "visualCue": {
        "primaryTarget": "Le fromage drape sur la patty et touche le pain. Le bord de la croûte lactée brun foncé est visible du côté. La vapeur s'élève doucement de la pile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le Bun est déshabillé, le fromage n'est pas fondu, le burger est assis pendant plusieurs minutes à refroidir.",
            "action": "Réchauffer brièvement sur la grille. Un hamburger froid est un hamburger diminué."
          },
          {
            "state": "Perfect",
            "description": "Hot patty avec du fromage fondu, pain grillé, vapeur toujours en hausse. Les condiments sont distribués uniformément. Le pain n'est pas encore soyeux.",
            "action": "Mangez immédiatement. C'est ta seule chance."
          },
          {
            "state": "Overdone",
            "description": "Burger est assis trop longtemps. Le Bun est soggy de la vapeur, le fromage est congelé, la croûte a ramolli.",
            "action": "Apprenez la leçon : les hamburgers fracassés sont la nourriture du restaurant, faite sur commande. Ne jamais loter plus que vous ne pouvez servir en 2 minutes."
          }
        ]
      },
      "feelCue": "Ramassez - le immédiatement — le pain devrait encore irradier la chaleur à travers le papier ou votre paume. La première morsure devrait rencontrer la résistance du visage grillé du pain, puis céder la place à la patty juteuse et productive en dessous."
    }
  ]
};
