export default {
  "repoId": "master_chinese_stir_fried_bok_choy_001",
  "parentRepoId": null,
  "slug": "stir-fried-bok-choy",
  "author": "ForkRecipe Kitchen",
  "title": "Choy pour bébé frite",
  "description": "Baby bok choy cuit dans un wok chaud criant avec de l'ail et un éclat de sauce aux huîtres — des verts flétris qui croquent encore à la tige, léchés dans un glaçage brillant et salé.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "vegetables",
  "tags": [
    "Bok-choy",
    "Chinois",
    "sauté",
    "végétalien",
    "Vite",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 2,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Baby bok choy, coupé en deux dans le sens de la longueur à travers la racine",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Shanghaï bok choy",
        "gai lan (brocoli chinois)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (pois, légumes ou graines de raisin)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce à l'huître végétalienne (champignon)",
        "sauce soja + sucre de pincée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "eau"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Huile de sésame",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau ou stock (une éclaboussure pour créer de la vapeur)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet",
        "stock de légumes"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_bok_choy",
      "instructions": "Couper le bok de bébé dans le sens de la longueur à travers la racine — la racine tient les feuilles ensemble et garde chaque moitié intacte pendant le brassage. Lavez soigneusement les moitiés dans l'eau froide, en séparant légèrement les feuilles intérieures pour déloger tout grain ou sol capturé entre elles. Sécher abondamment avec une serviette propre ou un épingleur à salade — l'excès d'eau sur le bok choy fera chuter la température du wok de façon spectaculaire dès qu'il touchera l'huile chaude, produisant des légumes à la vapeur plutôt que des légumes au wok. Préparez tout le reste avant de chauffer le wok : un mélange se déplace trop vite pour la préparation à mi-cuisson.",
      "visualCue": {
        "primaryTarget": "Des moitiés de choy bok propres et sèches — des tiges blanches éblouissantes, des feuilles vert foncé s'ouvrent en haut comme un ventilateur. La racine tient bien toutes les feuilles en place.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont encore mouillées par lavage; gouttelettes d'eau visibles à la surface.",
            "action": "Sécher soigneusement. C'est l'étape la plus importante pour le wok-charred plutôt que les légumes à la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Complètement secs; les tiges blanches sont fermes et les feuilles détendues. Le bok choy est froid — directement du réfrigérateur est idéal pour garder le wok chaud au contact.",
            "action": "Faites chauffer le wok immédiatement avant de commencer."
          },
          {
            "state": "Overdone",
            "description": "Sans objet au stade de préparation.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Frottez une feuille entre les doigts : si l'humidité se frotte sur la peau, le bok choy a besoin de plus de séchage. Il doit être sec et légèrement cireux, comme de la laitue fraîche, frais et propre."
    },
    {
      "nodeId": "step_2",
      "action": "Wok thermique",
      "inputs": [
        "ing_02"
      ],
      "outputState": "smoking_wok",
      "instructions": "Placez un wok sur la chaleur la plus élevée que votre brûleur puisse produire et faites-le sécher complètement pendant 2 à 3 minutes jusqu'à ce qu'il commence à fumer. Ajouter l'huile et le tourbillon. L'huile devrait mijoter et fumer dans les 5 secondes après avoir heurté le wok. Cette étape — «hei» en cantonais, ou souffle de wok — donne aux légumes sautés leur profondeur caractéristique, un peu fumée, élevée en chaleur, qui est impossible à atteindre avec une poêle fraîche. Un brûleur domestique ne correspondra jamais à l'anneau de wok d'un restaurant, mais la chaleur maximale et un wok préchauffé combleront significativement l'écart.",
      "visualCue": {
        "primaryTarget": "L'huile mijote dans les vagues à travers la surface du wok, avec des escargots de fumée montant immédiatement. Le wok est une chaleur rayonnante que vous pouvez sentir à partir de 30 cm.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le wok est chaud mais ne fume pas; l'huile glisse autour sans mijoter ou fumer. Cela produira des légumes cuits à la vapeur et non des légumes.",
            "action": "Attendez que l'huile fume avant d'ajouter de la nourriture. La patience détermine ici le plat."
          },
          {
            "state": "Perfect",
            "description": "L'huile fume légèrement, elle brille intensément. Le wok fait un sifflement satisfaisant lorsqu'une goutte d'eau s'infiltre — l'eau disparaît instantanément.",
            "action": "Ajouter immédiatement l'ail et commencer le brassage."
          },
          {
            "state": "Overdone",
            "description": "L'huile gonfle la fumée noire et s'enflamme.",
            "action": "Retirer le wok du feu pendant 10 secondes, puis revenir et ajouter l'ail immédiatement."
          }
        ]
      },
      "feelCue": "La chaleur d'un wok bien chaud doit être ressentie sur votre visage d'un bras plein loin. Si vous ne sentez pas la chaleur rayonnante de loin, le wok n'est pas assez chaud — attendez encore 30 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Stir-Fry",
      "inputs": [
        "smoking_wok",
        "ing_03",
        "prepped_bok_choy",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "stir_fried_bok_choy",
      "instructions": "Ajouter les tranches d'ail à l'huile chaude et mélanger pendant 15 à 20 secondes jusqu'à ce qu'elles soient dorées et parfumées, non brunes ni brûlées. Ajoutez immédiatement le côté coupé en une seule couche et ne le déplacez pas pendant 30 secondes, ce qui permet à la face coupée de s'ombrer légèrement. Ajouter le vin Shaoxing — il va éclater et vapeur violemment. Jetez tout vigoureusement avec une spatule wok pendant 1 minute. Ajouter l'éclaboussure d'eau et couvrir pendant 30 secondes pour faire bouillir les tiges. Découvrez, lancez encore une fois, et assaisonnez avec du sel. La durée totale de cuisson de l'ajout de bok choy à son enlèvement est de 2 à 3 minutes. Plus longtemps et les feuilles deviennent kaki et les tiges perdent leur croquant.",
      "visualCue": {
        "primaryTarget": "Feuilles vibrantes, brillantes, vert foncé avec des marques d'omble sur les faces coupées des tiges. Les feuilles sont flétries et scintillantes, les tiges restent blanches et fermes. Les éclats d'ail sont dorés et attachés aux feuilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles de Bok choy sont à peine flétries, les tiges sont complètement crues et croquantes, pâles et opaques. Pas de marques de char sur les visages coupés.",
            "action": "Continuez à remuer pendant encore 30 à 60 secondes à feu vif, en ajoutant une éclaboussure d'eau si nécessaire pour une explosion de vapeur."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont brillamment vertes et flétries dans les tiges. Les tiges sont tendres à la jonction des feuilles, mais donnent toujours une croûte propre quand mordu à la base. Ail doré partout. Des marques de char sur la face coupée.",
            "action": "Retirer immédiatement du feu et ajouter la sauce huître et l'huile de sésame."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles sont devenues sombres, ternes, vert kaki et libèrent du liquide jaune. Les tiges sont devenues molles et translucides sans croquant. L'ail a brûlé à des taches amères.",
            "action": "Retirer et servir immédiatement — la cuisson ne peut pas aider. La prochaine fois, réduire le temps de cuisson et augmenter la chaleur afin que les coutures extérieures avant les surcuits intérieurs."
          }
        ]
      },
      "feelCue": "Ramassez une tige et pliez-la : au point idéal, la tige s'incline en douceur avec une résistance douce plutôt que de casser (sous-cuisine) ou de floconner sans résistance du tout (surcuits). Ce léger recul est la fenêtre de l'agitation."
    },
    {
      "nodeId": "step_4",
      "action": "Glace",
      "inputs": [
        "stir_fried_bok_choy",
        "ing_04",
        "ing_07"
      ],
      "outputState": "finished_bok_choy",
      "instructions": "Retirez le wok du feu (ou tirez le bok choy sur le côté du wok). Arrosez la sauce à l'huître sur le bok choy et jetez-la pour enrober — seulement 4-5 tours rapides pour la distribuer. Ajouter l'huile de sésame dans une fine bruine autour du bord du wok (ou directement sur le bok choy). Encore une fois. La chaleur des verts est suffisante pour réchauffer la sauce; ne retournez pas le wok à la flamme ou les sucres de sauce huître vont brûler et devenir amers. Tout de suite.",
      "visualCue": {
        "primaryTarget": "Bok choy enduit d'un voile fin, uniforme, brillant de sauce aux huîtres foncées qui rend les verts brillants. Les feuilles semblent laquées. Les tiges sont blanches et scintillent. Un léger arôme de sésame se lève de l'assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce à l'huître n'a pas été distribuée uniformément; certains morceaux sont soudés et d'autres nus, ou la sauce est mise en commun dans le fond du wok plutôt que d'enrober les feuilles.",
            "action": "Mélanger plus vigoureusement et immédiatement, en utilisant des pinces ou une spatule pour soulever et enrober chaque pièce."
          },
          {
            "state": "Perfect",
            "description": "Une glaçure mince et uniforme sur toutes les surfaces, non pas bombée, non épaisse, mais brillante. Le bok choy conserve sa couleur et se croque sous la sauce. Le parfum d'huile de sésame est distinct et avant.",
            "action": "Assortir et servir immédiatement. Ce plat ne se conserve pas."
          },
          {
            "state": "Overdone",
            "description": "Retourné au feu avec de la sauce aux huîtres — la sauce s'est noircie et est devenue amère, enrobant le bok choy dans une glaçure foncée et brûlée.",
            "action": "Rincez le bok choy sous l'eau chaude, tapez au sec et habillez-vous avec de la sauce de soja fraîche et de l'huile de sésame. La saveur carbonisée ne peut pas être entièrement enlevée."
          }
        ]
      },
      "feelCue": "Le plat final doit être léger et léché sur les baguettes — pas lourd ou mouillé. Le revêtement en sauce à l'huître doit être si mince que vous pouvez voir le vert foncé des feuilles à travers elle, pas une peinture épaisse."
    }
  ]
};
