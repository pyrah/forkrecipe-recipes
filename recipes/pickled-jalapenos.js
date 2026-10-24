export default {
  "repoId": "master_mexican_pickledjalapenos_001",
  "parentRepoId": null,
  "slug": "pickled-jalapenos",
  "author": "ForkRecipe Kitchen",
  "title": "Pickled rapide Jalapeños",
  "description": "Vinaigre-brillant, délicatement pétillants jalapeños prêts en 30 minutes — des anneaux croustillants vert olive qui coupent à travers la richesse et surmontent tout pot acheté en magasin.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "fermented",
  "tags": [
    "Mexique",
    "marinés",
    "jalapeno",
    "condiment",
    "épicé",
    "cueillir rapidement",
    "préservation"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
    "umami": 0,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Jalapeños frais, tranchés en anneaux de 6 mm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chiles (haut)",
        "Poivrons de bananes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Vin blanc (acidité de 5 %)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre blanc distillé",
        "vinaigre de cidre de pomme (légèrement sucré)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau filtrée",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie",
        "sirop d'agave"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin non iodé",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de décapage",
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de poivre noires, entières",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Origan mexicain séché",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pickling_brine",
      "instructions": "Mélanger le vinaigre, l'eau, le sucre et le sel dans une petite casserole. Faire mijoter à feu moyen, en remuant jusqu'à ce que le sucre et le sel soient complètement dissous. Retirer du feu dès que la saumure est claire — ne pas bouillir dur ou réduire, car cela concentre l'acidité de façon imprévisible.",
      "visualCue": {
        "primaryTarget": "Une saumure claire et à vapeur sans sucre visible ni cristaux de sel. Sensation de vinaigre chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saumure est nuageuse à partir de sucre ou de granules de sel non dissous. Résidus de cristal visibles au fond de la poêle.",
            "action": "Continuer à remuer à feu doux jusqu'à ce qu'il soit complètement clair. Le sel non dissous provoque un assaisonnement inégal dans le cornichon final."
          },
          {
            "state": "Perfect",
            "description": "Liquide complètement limpide, vapeur mais pas bouillant. Aucun cristal visible lorsque la casserole est agitée. L'odeur est propre et fortement acide.",
            "action": "Retirer du feu et laisser refroidir légèrement avant de verser sur les jalapeños."
          },
          {
            "state": "Overdone",
            "description": "La saumure a nettement diminué, la poêle sent intensément aiguisée, et le rapport s'est déplacé vers l'acidité pure.",
            "action": "Ajouter une éclaboussure d'eau pour compenser l'évaporation et remuer avant d'utiliser."
          }
        ]
      },
      "feelCue": "Tenez votre main 10 cm au-dessus de la saumure — vous devriez sentir la chaleur de la vapeur, mais pas la piqûre de vapeur de vinaigre concentré. S'il fait l'eau de vos yeux, il a trop réduit."
    },
    {
      "nodeId": "step_2",
      "action": "Assemblage",
      "inputs": [
        "ing_01",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "packed_jar",
      "instructions": "Stériliser un ou deux pots de verre avec de l'eau bouillante et égoutter à l'envers. Emballez les anneaux de jalapeño étroitement dans les pots chauds, en tupant l'ail cassé, les grains de poivre et l'origan. Appuyez fermement pour maximiser la densité — les jalapeños se ramolliront légèrement dans la saumure et vous voulez qu'ils soient emballés.",
      "visualCue": {
        "primaryTarget": "Anneaux jalapeño vert vif serrés sans grandes poches d'air. Ail et grains de poivre distribués visiblement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jalapeños flottent librement dans l'espace vide à l'intérieur du pot. De grandes poches d'air.",
            "action": "Appuyez fermement avec une cuillère propre et ajoutez plus de jalapeños tranchés à remplir. L'emballage en vrac signifie que la saumure ne pénétrera pas complètement."
          },
          {
            "state": "Perfect",
            "description": "Pack dense et serré où les jalapeños se tiennent en place quand le pot est renversé. Aromatique visible entre les anneaux.",
            "action": "Versez immédiatement la saumure chaude sur le pot emballé."
          },
          {
            "state": "Overdone",
            "description": "Jalapeños écrasés et qui fuient. Jus pooling à la base du pot.",
            "action": "Procéder — la texture sera légèrement plus douce mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Lorsque le pot est rempli correctement, vous devriez être en mesure de le secouer doucement et sentir la masse jalapeño se déplacer comme un seul bouchon cohésif, pas des pièces flottantes individuelles."
    },
    {
      "nodeId": "step_3",
      "action": "Infuse",
      "inputs": [
        "packed_jar",
        "pickling_brine"
      ],
      "outputState": "brined_jalapenos",
      "instructions": "Verser la saumure chaude sur les jalapeños emballés jusqu'à ce qu'ils soient complètement submergés avec un espace de tête de 1 cm au-dessus de la saumure. Tapez doucement le pot sur le comptoir pour libérer les bulles d'air piégées. Si les jalapeños flottent au-dessus de la saumure, pèsez-les avec un petit sac refermable rempli de saumure.",
      "visualCue": {
        "primaryTarget": "Tous les anneaux jalapeño sont entièrement immergés sous la saumure. Pas de morceaux flottants au-dessus de la ligne de liquide. La saumure est claire et dorée des aromatiques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des anneaux Jalapeño flottant au-dessus du niveau de la saumure. Les anneaux supérieurs ne seront pas cornichons et peuvent mouler.",
            "action": "Peser avec un petit sac de saumure supplémentaire, ou inverser le pot doucement et revenir à la verticale."
          },
          {
            "state": "Perfect",
            "description": "Toutes les pièces sont entièrement submergées. Niveau de saumure 1 cm de la jante. La saumure a commencé à prendre une teinte vert pâle des jalapeños.",
            "action": "Sceller librement, refroidir à la température ambiante, puis réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Jar surrempli — la saumure est à la jante même et débordera lorsqu'elle sera scellée.",
            "action": "Verser un peu de saumure pour créer un bon espace de tête."
          }
        ]
      },
      "feelCue": "Astucez le pot à un angle de 45 degrés — les jalapeños devraient rester submergés sous la ligne de saumure, et non pas fouler la surface."
    },
    {
      "nodeId": "step_4",
      "action": "Refroidissement",
      "inputs": [
        "brined_jalapenos"
      ],
      "outputState": "finished_pickled_jalapenos",
      "instructions": "Laisser refroidir le pot à température ambiante (environ 15 minutes), puis sceller avec un couvercle et réfrigérer. Les jalapeños sont comestibles après 30 minutes, mais sont considérablement mieux après 2 heures une fois que la saumure a pénétré au centre. Ils restent réfrigérés jusqu'à 3 semaines.",
      "visualCue": {
        "primaryTarget": "Au bout de 30 minutes, les jalapeños sont passés d'un vert vif à un vert légèrement plus muté, à l'olive, alors que l'acide agit sur la chlorophylle. La saumure est légèrement trouble de l'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jalapeños encore lumineux, goût cru au centre — le vinaigre n'a pénétré que les anneaux extérieurs.",
            "action": "Réfrigérer plus longtemps. 30 minutes est le minimum; 2 heures donne une saveur considérablement plus uniforme, développé."
          },
          {
            "state": "Perfect",
            "description": "Anneaux olive-vert, uniformément marinés avec une bouchée propre, avant vinaigre et une chaleur résiduelle douce. Crisp mais en laissant tomber quand il a mordu.",
            "action": "Servir immédiatement ou sceller et réfrigérer jusqu'à 3 semaines."
          },
          {
            "state": "Overdone",
            "description": "Les jalapeños sont très doux, presque musclés, et la chaleur s'est largement dissipée dans la saumure. La saumure est épicée.",
            "action": "Les cornichons sont toujours excellents comme ingrédient de cuisson même si la texture est plus douce. Utilisez la saumure comme base de sauce chaude ou en vinaigrettes."
          }
        ]
      },
      "feelCue": "Un anneau de jalapeño parfaitement décapé doit se casser de façon croustillante lorsqu'il est mordu et relâcher une poussée de chaleur propre, vive et piquée au vinaigre — jamais musquée, jamais crue."
    }
  ]
};
