export default {
  "repoId": "master_ancient_roman_patina_de_piris_001",
  "parentRepoId": null,
  "slug": "patina-de-piris",
  "author": "ForkRecipe Kitchen",
  "title": "Patina de Piris",
  "description": "Une crème de poire des cuisines de la Rome impériale, transcrite en Apicius — des poires de verger pétillantes de miel et d'une lécherette de poivre noir, liées d'œufs et d'une éclaboussure de sauce de poisson, puis cuites dans une flan tremblante, sucrée et salée qui se met comme un soufflé et s'abaisse doucement sous la cuillère.",
  "cuisine": "Ancien romain",
  "culture": "Roman impérial",
  "category": "desserts",
  "tags": [
    "romaine",
    "apicius",
    "anciens",
    "poire",
    "Coutard",
    "Chérie",
    "patine"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Poires à cosse (peau, carotte, molle)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "coing (cuisinier plus long)",
        "Pommes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Miel (Roman utiliserait le défrutum sucré)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "Passum (vin de raisins)",
        "sirop de moût de raisin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Œufs (légèrement battus)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "jaunes supplémentaires pour un ensemble plus riche"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poivre noir (fraîchi)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre long (plus authentique)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Garum / liquamen (sauce de poisson, quelques gouttes)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "de colatura di alici",
        "une pincée de sel"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin au sol (une petite pincée)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Caravane"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive (pour huiler le plat)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre (anachronique mais fonctionne)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Poivre noir (pour finir, en option)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pocher",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "softened_pears",
      "instructions": "Peler les poires et les couper en morceaux bruts. Laisser mijoter doucement avec le miel et une éclaboussure d'eau dans une casserole couverte jusqu'à ce qu'elle soit complètement tendre et translucide, 12-15 minutes. Le miel tire leur jus et assaisonne la chair de l'intérieur. Égoutter la plupart du liquide libre afin que la crème finie se mette.",
      "visualCue": {
        "primaryTarget": "Les morceaux de poires sont vitreux et donnent, s'assombrissant lorsqu'ils sont bouchés, nageant dans un mince sirop ambre qui sent le miel chaud et les fruits du verger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poires sont toujours blanches fermes et opaques au centre, le sirop mince et aqueuse.",
            "action": "Couvrir et laisser mijoter — les fruits durs laisseront des fils fibreux dans la crème."
          },
          {
            "state": "Perfect",
            "description": "La chair est translucide et assez douce pour écraser la poêle avec une cuillère; le sirop est parfumé et légèrement épaissi.",
            "action": "Égoutter l'excès de liquide et laisser le fruit lisse."
          },
          {
            "state": "Overdone",
            "description": "Les poires s'effondrent dans la mousse et le sirop s'assombrit et caramélise aux bords.",
            "action": "Retirez la chaleur à la fois et procédez; un peu de caramélisation est bien, la brûlure ne l'est pas."
          }
        ]
      },
      "feelCue": "Une cuillère devrait couler à travers le fruit avec presque aucune résistance, et les odeurs de la cuisine de miel et de poire mûre sans bord vert, cru."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "softened_pears",
        "ing_04",
        "ing_06"
      ],
      "outputState": "pear_puree",
      "instructions": "Astucez les poires égouttées dans un mortier (ou un robot alimentaire) et livrez à une purée lisse. Casser le poivre et moudre le cumin à l'état frais, puis les travailler à travers les fruits chauds. Apicius est emphatique sur le poivre ici — il devrait être présent, un piquet doux qui soulève la douceur plutôt qu'une piqûre. Laissez la purée refroidir pour simplement réchauffer avant d'ajouter les œufs.",
      "visualCue": {
        "primaryTarget": "Une purée d'or pâle, lisse, avec du poivre noir, assez lâche pour tomber de la cuillère dans un ruban, chaud mais plus chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée est grumelée de fruits à cordes, et le poivre est assis dans un coin sans mélange.",
            "action": "Continuez à frapper et à remuer jusqu'à ce que l'uniforme — les grumeaux se brouillent ou pleurent dans le four."
          },
          {
            "state": "Perfect",
            "description": "Purée soyeuse et tachetée uniformément qui rubane la cuillère; l'arôme de poivre s'élève chaudement du bol.",
            "action": "Laisser refroidir légèrement, puis battre dans les œufs et le garum."
          },
          {
            "state": "Overdone",
            "description": "La purée a été battue si longtemps qu'elle a été collée, ou est encore assez chaude pour cuire les œufs au contact.",
            "action": "Arrêtez de le travailler et laissez refroidir; fouettez dans une cuillère du sirop réservé pour se détendre si nécessaire."
          }
        ]
      },
      "feelCue": "Frottez un peu entre vos doigts — il devrait se sentir doux et crémeux, pas granuleux, et se sentir chaud plutôt que chaud pour que les œufs ne se saisiront pas."
    },
    {
      "nodeId": "step_3",
      "action": "Tempérer",
      "inputs": [
        "pear_puree",
        "ing_03",
        "ing_05"
      ],
      "outputState": "custard_batter",
      "instructions": "Battre les œufs jusqu'à ce qu'ils soient lisses et les remuer régulièrement dans la purée de poire chaude pour les épaissir sans brouillage. Ajouter seulement quelques gouttes de garum — assez pour approfondir et arrondir la saveur, pas pour goûter au poisson. Bouche : il doit d'abord lire sucré, puis salé, avec une chaleur poivrée en dessous. Whisk à une pâte lâche et versable.",
      "visualCue": {
        "primaryTarget": "Une base de crème brillante et homogène de la couleur du caramel pâle, versable et légèrement mousseux sur le dessus, sentant doux avec un sous-ton savoureux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries d'oeufs limpides et jaunes restent visibles; la pâte semble séparée plutôt que unifiée.",
            "action": "Continuez à fouetter jusqu'à ce qu'il n'y ait pas de stries — des œufs irréguliers se mettent inégalement au four."
          },
          {
            "state": "Perfect",
            "description": "Entièrement émulsifié, lisse et versable, équilibré sur la langue entre la poire miellée et la profondeur salée.",
            "action": "Verser dans le plat huilé et cuire."
          },
          {
            "state": "Overdone",
            "description": "De minuscules taches d'œuf cuites se sont formées parce que la purée était trop chaude, donnant une texture caillée.",
            "action": "Passer la pâte à travers un tamis pour attraper les taches avant de cuire."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers elle — elle doit s'écouler en douceur sans grain, et l'odeur du poisson du garum doit être indétectable, présente seulement comme rondeur salée."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "custard_batter",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_patina",
      "instructions": "Badigeonner d'huile d'olive un plat de cuisson peu profond et verser dans la pâte. Cuire à 170°C / 340°F jusqu'à ce que la patine soit simplement réglée avec le plus léger wobble au centre, 30-35 minutes (un bain d'eau donne l'ensemble le plus soyeux). Casser un peu plus de poivre sur le dessus. Refroidir jusqu'à ce qu'il soit à peine chaud — il ferme comme il repose — et servir dans des cuillères douces.",
      "visualCue": {
        "primaryTarget": "La surface est posée et légèrement gonflée d'une peau d'or pâle; un doux tremblement envoie un doux frottement à travers le centre, et un couteau glisse dans le bord sort propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toute la crème s'ébranle de façon lâche lorsqu'elle est secouée et un testeur sort humide et laiteux.",
            "action": "Retourner au four en 5 minutes jusqu'à ce que seulement le centre tremble."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont fixés et tout simplement rougissant d'or, le centre tremble doucement comme une panna cotta, l'odeur est douce et poivrée.",
            "action": "Retirer, finir avec du poivre et laisser refroidir jusqu'à à peine chaud avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La crème a gonflé haut, fissuré à travers le haut et pleure liquide — les œufs ont trop cuit et caillé.",
            "action": "Enlevez-le immédiatement; il sera plus ferme et légèrement grainé mais toujours bon servi frais avec du miel supplémentaire."
          }
        ]
      },
      "feelCue": "Mordez le plat — la patine droite répond avec un seul coup doux à son cœur tandis que le bord reste immobile. Il doit sentir le miel et le poivre chauds, jamais de soufre ou d'œuf surcuit."
    }
  ]
};
