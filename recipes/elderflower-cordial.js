export default {
  "repoId": "master_british_elderflower_cordial_001",
  "parentRepoId": null,
  "slug": "elderflower-cordial",
  "author": "ForkRecipe Kitchen",
  "title": "Cordial à fleurs âgées",
  "description": "Un rituel britannique de début d'été — des têtes de sureau fraîches se sont rassemblées au pic de la floraison et se sont penchées pendant 24 heures dans un sirop de citron et de sucre chaud qui coagule avec leur parfum de muscatel fugitif, produisant une cordialité dorée, intensément florale, diluée avec des goûts d'eau froide pétillante de prairies chaudes et les plus longs jours de l'année.",
  "cuisine": "Anglais",
  "culture": "Pays anglais",
  "category": "beverages",
  "tags": [
    "Fleur de sureau",
    "cordiale",
    "britanniques",
    "floral",
    "été",
    "sirop",
    "non alcooliques"
  ],
  "difficulty": 1,
  "activeTime": "30 min",
  "totalTime": "25 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 2,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Têtes de fleurs de sureau fraîches (à la floraison maximale, entièrement ouvertes)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de roulette blanche",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Eau",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Citrons non épilés, tranchés en rondelles",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oranges sanguines pour la couleur"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Acide citrique",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "jus de 2 citrons supplémentaires (moins de durée de conservation)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire du sirop",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "hot_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une grande casserole large. Chauffer à feu moyen, en remuant fréquemment, jusqu'à ce que chaque grain de sucre soit complètement dissous et que le sirop soit clair, ce qui prend environ 5 minutes. Ne pas faire bouillir le sirop de façon agressive; une mijotée douce suffit pour dissoudre le sucre et stériliser le liquide. Retirer du feu dès que le sirop est clair et que la surface commence à mijoter. Un sirop entièrement clair signifie qu'il ne reste pas de cristaux de sucre non dissous – un sirop nuageux ou granuleux signifie que le sucre n'a pas complètement dissous et que le cordial peut se cristalliser dans la bouteille.",
      "visualCue": {
        "primaryTarget": "Un sirop complètement clair et incolore avec une faible vapeur qui s'en relève. Pas de granules visibles lorsqu'ils sont maintenus jusqu'à la lumière. La surface est calme, pas agressivement bouillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Laiteux ou légèrement nuageux. Les granules de sucre sont encore visibles lorsqu'ils sont inclinés. Goûts d'eau de sucre crue.",
            "action": "Continuer à chauffer et à remuer encore 2 à 3 minutes jusqu'à ce que le sirop soit complètement dégagé."
          },
          {
            "state": "Perfect",
            "description": "Cristal clair, incolore et chaud. Une cuillère est épaisse et enrobe la cuillère dans un film mince, même lorsqu'elle est refroidie.",
            "action": "Retirer du feu et ajouter immédiatement les fleurs de sureau et les citrons."
          },
          {
            "state": "Overdone",
            "description": "Le sirop a été bouillant dur et très légèrement doré aux bords — le sucre commence à caraméliser.",
            "action": "Tirez-vous de la chaleur — une caramélisation très légère ne ruinera pas la cordiale, mais la teinte légèrement ambre. Une caramélisation profonde surpasserait la délicatesse florale."
          }
        ]
      },
      "feelCue": "Plongez une cuillère en métal frais dans le sirop chaud et maintenez-la dans l'air : un sirop cordial parfait devrait enrober la cuillère dans un film très mince, même qui coule dans des gouttes lentes mais continues plutôt que des feuilles ou des gouttes individuelles."
    },
    {
      "nodeId": "step_2",
      "action": "Streep",
      "inputs": [
        "hot_syrup",
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "steeping_cordial",
      "instructions": "Agiter délicatement les têtes de fleurs de sureau pour déloger les insectes — ne pas les laver, car l'eau dilue le pollen parfumé qui est le cœur du cordial. Ajouter les têtes de fleurs et les tranches de citron au sirop chaud. Incorporer l'acide citrique. Couvrir d'un chiffon ou d'un couvercle propre légèrement ajar, et laisser tremper à température ambiante pendant 24 heures. Le sirop tournera lentement de clair à un vert doré pâle comme les composés floraux, les huiles de citron et l'acide citrique infuse. Ne pas réfrigérer pendant le trempage — le froid ralentit la perfusion et vous perdez la complexité.",
      "visualCue": {
        "primaryTarget": "Après 24 heures : sirop vert doré pâle avec tête de sureau flottante, citrons suspendus dans le liquide, vapeur parfumée ne se lève plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 4 heures : le sirop est à peine teinté et l'arôme floral est faible.",
            "action": "Laisser tremper toute la 24 heures — l'intensité florale se construit lentement et la meilleure extraction se produit dans la seconde 12 heures."
          },
          {
            "state": "Perfect",
            "description": "Après 24 heures : doré, légèrement vert, visiblement parfumé (vous le sentirez de l'autre côté de la cuisine). Goûte intensément florale, douce et tarte.",
            "action": "La souche et la bouteille."
          },
          {
            "state": "Overdone",
            "description": "Après 48 heures et plus : les notes florales peuvent commencer à tourner légèrement végétal ou médicinal à partir d'une surextraction des tiges et des feuilles.",
            "action": "Sourire immédiatement. Il se peut que la cordialité légèrement surestimée soit plus complète et plus complexe — goût avant de se jeter."
          }
        ]
      },
      "feelCue": "Après 24 heures, penchez - vous au - dessus du récipient et respirez - le parfum doit être extrêmement floral, presque parfumé, un mur de muscatel et de miel et vert. Si l'odeur est faible, vos fleurs ont dépassé leur floraison maximale."
    },
    {
      "nodeId": "step_3",
      "action": "Fraise et bouteille",
      "inputs": [
        "steeping_cordial"
      ],
      "outputState": "finished_elderflower_cordial",
      "instructions": "Étaler un tamis à mailles fines avec un chiffon de fromage ou un chiffon de mousseline propre et non parfumé. Enfilez le cordial à travers le tissu, appuyez doucement sur les têtes de fleurs. Ne pas presser agressivement — presser trop durement du matériel végétal vert et amer à travers le tissu. Transférer les bouteilles de verre stérilisées avec des couvercles étanches. Sceller et réfrigérer. Le cordial garde pendant 6 semaines réfrigéré, ou peut être congelé dans des plateaux de glace-cube pour l'utilisation toute l'année. Pour servir : diluer 1 partie cordiale avec 4-5 parties d'eau pétillante ou stagnante, ou éclaboussure sur prosecco.",
      "visualCue": {
        "primaryTarget": "Une cordialité claire et dorée dans une bouteille de verre — la couleur du vin de fleur de sureau faible, translucide, légèrement vertâtre lorsqu'il est tenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cordial est nuageux ou gris verdâtre à partir de débris végétaux passant par le tissu.",
            "action": "Reformer à travers un tissu plus fin. La nuance n'affecte pas la saveur mais affecte l'attrait visuel."
          },
          {
            "state": "Perfect",
            "description": "Clair, doré, parfumé. Une cuillère ajoutée à un verre d'eau pétillante la transforme complètement. Sens d'été et de fleurs.",
            "action": "Bouteille en verre stérilisé. Réfrigérer et utiliser dans les 6 semaines."
          },
          {
            "state": "Overdone",
            "description": "Ambre très foncée avec des notes de plante amère provenant de la surpression du tissu.",
            "action": "Elle est encore utilisable, mais peut nécessiter un équilibre. Mélanger avec plus de sirop frais (1:1 sirop frais à amer cordial) pour diluer l'amertume."
          }
        ]
      },
      "feelCue": "Versez une petite quantité et maintenez la bouteille jusqu'à une fenêtre : la fleur de sureau parfaite cordiale est l'or translucide, assez clair pour voir à travers, avec la couleur de l'eau de miel très faible. Agiter la bouteille — le liquide doit circuler librement sans accrochage visqueux."
    }
  ]
};
