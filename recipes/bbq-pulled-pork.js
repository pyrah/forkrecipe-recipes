export default {
  "repoId": "master_american_bbq_pulled_pork_001",
  "parentRepoId": null,
  "slug": "bbq-pulled-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Porc pulvérisé au barbecue",
  "description": "Une épaule de porc frottée à la cassonade et au paprika fumé, fumée basse et lente jusqu'à ce que le collagène se rende en soie et que l'écorce se transforme en mahoganie noire.",
  "cuisine": "Américain",
  "culture": "BBQ Sud",
  "category": "proteins",
  "tags": [
    "sud",
    "bbq",
    "porc",
    "cuits lentement",
    "fumée"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "8 hrs",
  "ratioSystem": "parts",
  "stars": 4102,
  "forks": 489,
  "contributors": 43,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-01",
  "updatedAt": "2026-01-17",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "épaule de porc désossée (dos de Boston), de 2 à 3 kg",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule de porc désossée",
        "pique-nique de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun, emballé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre turbinado",
        "miel (appliquer après frotter)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika sucré plus fumée liquide",
        "poudre d'ancho chili"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de mer grossier"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir, poudre d'ail, poudre d'oignon, Cayenne (parties égales)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "frotter le barbecue tout usage"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc",
        "vinaigre blanc distillé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "sauce barbecue préparée (pour servir)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce à base de vinaigre Carolina",
        "sauce SC à base de moutarde"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Ruber et se reposer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "rubbed_pork",
      "instructions": "Mélanger le sucre brun, le paprika fumé, le sel et le mélange d'épices dans un bol. Patientez l'épaule de porc complètement sèche avec des serviettes en papier. Appliquez le frottage sur toute l'épaule — chaque surface, y compris les crevasses autour de l'os. Appuyez fermement pour que le frotte adhère. Enveloppez bien l'enveloppe plastique et réfrigérez pendant au moins 4 heures, idéalement pendant la nuit. Le sel attirera l'humidité à la surface, puis la réabsorbera, assaisonnement profond dans la viande.",
      "visualCue": {
        "primaryTarget": "L'épaule de porc est uniformément enrobée d'un frottage rouge rouille foncé sans taches nues. Après le repos, des perles d'humidité sur la surface lorsque le sel tire du liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rubis est patché — porc nu visible dans les crevasses et sur les surfaces planes. Le sucre a l'air poussiéreux et n'a pas adhéré.",
            "action": "Appuyez plus fermement sur les mains. Le bouchon de graisse a besoin d'une plus grande attention — marquer légèrement d'abord afin que le frotte pénètre."
          },
          {
            "state": "Perfect",
            "description": "Même un revêtement rouge rouille foncé sur chaque surface. Rub est respecté, pas tombé. Après le repos, l'extérieur semble légèrement humide — le cycle de la saumure a commencé.",
            "action": "Continuez à fumer quand vous êtes prêt."
          },
          {
            "state": "Overdone",
            "description": "Le porc a été réfrigéré plus de 48 heures avec le frottage — l'extérieur a commencé à guérir et la couche extérieure de viande a une texture hammée et guérie.",
            "action": "Continuez. De très longs frottes sont fines — la saveur sera intense. La fumée équilibrera le sel."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur le frotter dans le porc — vous devriez sentir un peu d'embout car le sucre se dissout légèrement et se lie. Si le frottement tombe lorsque vous inclinez l'épaule, appuyez plus fort ou ajoutez une brosse légère de moutarde comme liant."
    },
    {
      "nodeId": "step_2",
      "action": "Fumée faible et lente",
      "inputs": [
        "rubbed_pork"
      ],
      "outputState": "smoked_pork",
      "instructions": "Configurez votre fumeur ou votre four à 107-121°C. Pour les fumeurs, utilisez du hickory, de la pomme ou du bois de cerise. Faites monter la graisse de porc. Fumer de 5 à 6 heures, en maintenant la température, jusqu'à ce qu'un thermomètre à lecture instantanée lise 74°C en interne. Spitz avec du vinaigre de cidre de pomme toutes les 90 minutes pour garder l'écorce humide et ajouter du tang. L'écorce se formera et durcira pendant cette phase — ne vous enveloppez pas encore.",
      "visualCue": {
        "primaryTarget": "Après 5 à 6 heures, l'extérieur a formé une écorce sombre d'acajou à noir, une croûte épaisse et crépitante. Une température interne de 74°C est atteinte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'écorce est encore molle et brun rougeâtre, pas l'acajou-noir profond de l'écorce véritable. La surface est collante et humide plutôt que ferme. Température intérieure inférieure à 74°C.",
            "action": "Continuez à fumer. La formation d'écorce entre 68 et 79°C est l'endroit où la réaction de Maillard est la plus intense. Ne pas précipiter ou augmenter la température."
          },
          {
            "state": "Perfect",
            "description": "L'écorce est acajou-noir profond, ferme au toucher, et légèrement craqué. Sensation intense de fumée et de sucre caramélisé. La température interne est de 74°C.",
            "action": "Enveloppez bien le papier de boucher ou le papier d'aluminium (le Texas Crutch) pour alimenter le décrochage."
          },
          {
            "state": "Overdone",
            "description": "L'écorce est carbonisée et noire partout, pas seulement l'acajou foncé. Une odeur amère. Certaines zones ont peut-être craqué et séché.",
            "action": "Enroulez immédiatement dans la feuille pour arrêter le développement de l'écorce. L'intérieur sera probablement encore excellent."
          }
        ]
      },
      "feelCue": "Frappez sur l'écorce avec votre joint — il devrait sembler creux et se sentir ferme, comme frapper sur le bois, pas doux et donner comme toucher la viande crue. C'est le moment où ça sonne et se sent comme un barbecue."
    },
    {
      "nodeId": "step_3",
      "action": "Envelopper et pousser à travers le décrochage",
      "inputs": [
        "smoked_pork",
        "ing_06"
      ],
      "outputState": "stalled_pork",
      "instructions": "Lorsque la température interne se situe entre 65 et 74 °C (le fameux barbecue 'stall' causé par le refroidissement par évaporation), envelopper étroitement le porc dans deux couches de papier boucher ou de feuille lourde. Ajouter une touche de vinaigre de cidre de pomme dans l'enveloppe. Retourner au fumeur ou passer à un four de 135 °C. Cuire jusqu'à ce que la température interne atteigne 93–96°C, soit environ 2–3 heures de plus.",
      "visualCue": {
        "primaryTarget": "Le thermomètre monte régulièrement au-delà de 88°C. L'emballage emballé est lourd et légèrement jiggly — les liquides se sont mis à l'intérieur de l'enveloppe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La température est restée entre 65 et 74 °C pendant plus de 90 minutes. Le thermomètre bouge à peine. C'est normal, ne paniquez pas et n'augmentez pas la température de façon spectaculaire.",
            "action": "C'est exactement pour ça que vous vous enroulez. Le décrochage peut durer 2 heures et plus sans emballer. Enroulez maintenant si vous ne l'avez pas fait."
          },
          {
            "state": "Perfect",
            "description": "La température intérieure monte régulièrement et atteint 93–96°C. Quand le porc est secoué, le collagène s'est converti en gélatine.",
            "action": "Reposez-vous au moins 1 heure dans l'enveloppe avant de tirer."
          },
          {
            "state": "Overdone",
            "description": "La température dépassait 99°C. La graisse a rendu et la viande a peut-être commencé à sécher au centre même si elle grouille.",
            "action": "Reposez-vous immédiatement — ne continuez pas à cuisiner. La période de repos aidera à redistribuer ce qui reste d'humidité."
          }
        ]
      },
      "feelCue": "Lorsque vous déballez et sonnez la viande avec un thermomètre ou une brochette, elle doit glisser dans le corps sans aucune résistance, comme pousser à travers le beurre ramolli. Toute résistance signifie que le collagène n'est pas complètement converti."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "stalled_pork"
      ],
      "outputState": "rested_pork",
      "instructions": "Retirer le porc emballé du feu lorsqu'il atteint 93–96°C. Sans déballage, enveloppez l'ensemble du colis dans une serviette et placez-le dans une glacière pendant au moins 1 heure, jusqu'à 4 heures. Ce repos n'est pas facultatif — il permet à la température d'égaliser tout au long de l'épaule et laisse la gélatine se remettre en place, ce qui signifie plus juteux et plus cohésif porc tiré.",
      "visualCue": {
        "primaryTarget": "L'extérieur de l'emballage enrobé de froid est encore chaud au toucher après 1 heure. Lorsqu'elle est ouverte, la vapeur s'élève doucement et les jus sont mis dans l'enveloppe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc n'a été reposé que 20 minutes. Le centre est nettement plus chaud que l'extérieur. Les jus courent fortement quand le tir commence.",
            "action": "Vous pouvez continuer, mais la texture sera légèrement moins cohésive. Le repos est vraiment important ici — planifier votre prochaine cuisson."
          },
          {
            "state": "Perfect",
            "description": "Après 1+ heures, la température interne s'est égale à travers l'épaule. La vapeur se lève doucement lorsqu'elle est ouverte. Les os volent librement quand vous les prenez.",
            "action": "Commencez à tirer."
          },
          {
            "state": "Overdone",
            "description": "Le porc a refroidi en dessous de 55°C après trop longtemps de repos. Il a commencé à se raffermir à mesure que la gélatine se rétablit à des températures plus basses.",
            "action": "Chauffer brièvement dans un four à 150°C pendant 20 minutes avant de tirer."
          }
        ]
      },
      "feelCue": "Poignez l'os exposé et remuez — dans le porc tiré correctement cuit, l'os doit glisser libre avec une torsion douce, avec presque aucune résistance. S'il se sent verrouillé, le collagène a besoin de plus de temps."
    },
    {
      "nodeId": "step_5",
      "action": "Tirer et servir",
      "inputs": [
        "rested_pork",
        "ing_07"
      ],
      "outputState": "finished_pulled_pork",
      "instructions": "Déposez le porc sur une grande casserole pour attraper tous les jus. À l'aide de deux fourchettes ou de gants résistants à la chaleur, détachez la viande dans des brins chassants. Jetez tous les gros morceaux de graisse pure. Versez une partie des jus de cuisson sur le porc tiré pour le garder humide. Servir avec de la sauce barbecue sur le côté — ne jamais la mélanger, donc les diners peuvent contrôler leur niveau de sauce.",
      "visualCue": {
        "primaryTarget": "De longs brins de porc qui se séparent facilement avec une fourchette. Morceaux d'écorce foncés répartis dans toute la viande tirée. Le porc brille avec des jus rendus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Larmes de viande dans de gros morceaux intacts plutôt que de se séparer en brins. Résistance en tirant. Le collagène n'est pas complètement dissous.",
            "action": "Si la température interne était inférieure à 93°C, retourner à la chaleur. Si le temps est limité, hacher avec un cleaver — il ne sera pas tiré de porc mais il sera comestible."
          },
          {
            "state": "Perfect",
            "description": "La viande tire dans de longs brins soyeux avec une résistance minimale. Morceaux d'écorce foncés mélangés. Toute la masse brille avec des jus.",
            "action": "Hydrater avec des jus de cuisson. Servir avec de la sauce sur le côté."
          },
          {
            "state": "Overdone",
            "description": "La viande est sèche et déchiquete en fibres sèches de poussière plutôt qu'en brins humides. Pratiquement pas de jus visible.",
            "action": "Mélanger avec un mélange de jus de casserole, vinaigre de cidre de pomme et une touche de sauce barbecue. Laisser absorber pendant 5 minutes avant de servir."
          }
        ]
      },
      "feelCue": "Passez vos doigts à travers le porc tiré — les brins doivent se sentir soyeux et légèrement collants de la gélatine, pas secs ou à cordes. Un morceau d'écorce pressé entre les doigts devrait tomber légèrement sous pression."
    }
  ]
};
