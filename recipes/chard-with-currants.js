export default {
  "repoId": "master_italian_chardwithcurrants_001",
  "parentRepoId": null,
  "slug": "chard-with-currants",
  "author": "ForkRecipe Kitchen",
  "title": "Charde aux Currants et aux pignons de pin",
  "description": "La bruine arc-en-ciel Wilted braisée avec des raisins dorés et des pignons de pin dans l'huile d'olive — l'agrodolce sicilienne douce et salée qui transforme un vert humble en quelque chose qui mérite d'être recherché.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "vegetables",
  "tags": [
    "sicilienne",
    "Italien",
    "Benne",
    "agrodolce",
    "des pinèdes",
    "raisins secs",
    "végétalien",
    "Verts"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Fard arc-en-ciel, tiges séparées et coupées en morceaux de 2 cm, feuilles approximativement déchirées",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "betterave argentée",
        "épinards (tiges seulement 30 sec)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Raisins dorés (sultanas)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Cerises séchées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Noix de pin",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "amandes grillées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "flocons de poivre rouge séché",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_03"
      ],
      "outputState": "toasted_pine_nuts",
      "instructions": "Placer les pignons dans une poêle sèche à feu moyen-doux. Agiter ou remuer constamment pendant 2 à 3 minutes jusqu'à ce qu'ils tournent une couleur dorée profonde. Veillez sans distraction — ils vont de pâle à brûlé en moins de 30 secondes. Astucez immédiatement sur une assiette fraîche pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Les pignons de pin sont un tandem chaud, même doré, de couleur bois poli, avec quelques taches de rousseur plus foncées et un arôme riche en noix.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix sont encore de l'ivoire pâle et goûtent cru et résineux.",
            "action": "Continuer à feu moyen-doux, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "Brun profond avec quelques taches plus foncées. La cuisine sent les noix chaudes et grillées.",
            "action": "Retirer immédiatement de la poêle sur une plaque — ils continueront à cuire à feu résiduel s'ils restent dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Brun à presque noir avec une odeur amère et huileuse.",
            "action": "Jetez et toastez un lot frais — les pignons de pin brûlées rendront le plat acride."
          }
        ]
      },
      "feelCue": "Les pignons parfaitement grillés se sentent légèrement gras lorsqu'ils sont frottés entre les doigts et dégagent de la chaleur — ils doivent sentir comme une boulangerie chaude, pas comme de la peinture."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_04",
        "ing_01",
        "ing_02",
        "ing_06",
        "ing_08",
        "ing_07"
      ],
      "outputState": "wilted_chard_base",
      "instructions": "Dans une grande casserole large à feu moyen, chauffer l'huile d'olive jusqu'à ce qu'elle mijote. Ajouter les tranches d'ail et cuire en remuant jusqu'à ce qu'elles soient dorées et parfumées — environ 1 minute. Ne les laissez pas brunir. Ajouter les tiges et cuire en remuant pendant 3 minutes jusqu'à ce qu'elles commencent à ramollir. Ajouter les feuilles en grandes poignées, les flétrir chacune avant d'ajouter la suivante. Une fois toutes les feuilles flétries, ajoutez les raisins secs dorés, le vinaigre de vin blanc et les flocons de poivre rouge. Mélanger et cuire encore 1 minute. Assaisonner de sel.",
      "visualCue": {
        "primaryTarget": "La charde est entièrement flétrie et profondément colorée: les tiges arc - en - en - ciel sont encore visibles comme des stries de bijoux de rouge, de jaune et de blanc à travers un enchevêtrement de feuilles vert foncé brillantes. Les raisins secs sont d'or et d'or.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines feuilles sont encore crues et debout. Les tiges sont croquantes et goûtent crus.",
            "action": "Continuer à jeter à feu moyen avec un jet d'eau si nécessaire — ajouter plus de feuilles seulement une fois que le lot précédent a flétri."
          },
          {
            "state": "Perfect",
            "description": "Toutes les feuilles sont effondrées et tendres. Les tiges sont douces mais ont encore une légère morsure. Les raisins sont plumés. Le plat est brillant avec de l'huile d'olive et parfumé avec de l'ail et du vinaigre.",
            "action": "Scatter les pignons de pin et servir immédiatement ou à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Card est très sombre, vert kaki, et a libéré tellement d'eau que la poêle est soupeuse. Les tiges sont musquées.",
            "action": "Levez la chaleur et faites cuire l'excès de liquide, en remuant vigoureusement, jusqu'à ce que la poêle soit à nouveau brillante."
          }
        ]
      },
      "feelCue": "Une feuille de bûcher flétrie devrait offrir une résistance douce mais distincte lorsque vous appuyez entre la cuillère et la poêle — elle donne sans dissolution, avec juste assez de structure pour se sentir comme de la nourriture plutôt que comme du compost."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "wilted_chard_base",
        "toasted_pine_nuts"
      ],
      "outputState": "finished_chard_with_currants",
      "instructions": "Goût d'assaisonnement — l'équilibre agrodolce doit être présent mais subtil. Si le goût est plat, ajouter quelques gouttes de vinaigre; si trop vif, une petite pincée de sucre. Transférer dans une assiette de service et disperser les pignons de pin grillées sur le dessus. Servir chaud ou à température ambiante.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement vert foncé et brillant de bûcher aux raisins dorés et éparpillé de pignons de pins chauds. L'assiette est rustique et joaillée à la fois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson a l'air inachevé — les pignons de pin manquantes, aucun contraste de couleur ou de texture.",
            "action": "Ajouter les pignons de pin. Sans eux, l'équilibre amer ne se lit que comme plat."
          },
          {
            "state": "Perfect",
            "description": "Vert foncé, raisins dorés, pignons de pin. L'assiette sent l'ail, le vinaigre et l'huile d'olive. Une cuillère apporte sucrée, salée et légèrement amère dans la même bouchée.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Les pignons de pin ont été brassées et sont maintenant douces de s'asseoir dans l'humidité chaude.",
            "action": "Ils sont moins croquants mais ajoutent encore de la saveur. Toast quelques extras à disperser au dernier moment pour la texture."
          }
        ]
      },
      "feelCue": "Le plat doit se sentir brillant et substantiel lorsque vous le cuillerez vers le haut — pas d'huile, pas sèche, mais revêtu de cette richesse sicilienne particulière où l'huile d'olive et le jus de légumes sont devenus un."
    }
  ]
};
