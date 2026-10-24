export default {
  "repoId": "master_thai_larb_001",
  "parentRepoId": null,
  "slug": "larb",
  "author": "ForkRecipe Kitchen",
  "title": "Lamb Moo",
  "description": "Un nord-est Salade thaïlandaise de porc haché cuite dans sa propre graisse fondue et avec du jus de citron vert et de la sauce de poisson, la viande encore à la vapeur quand il frappe un blizzard d'herbes fraîches, échalotes, et la poudre de riz grillé qui absorbe chaque dernière goutte de la vinaigrette chaude, aigre, salée.",
  "cuisine": "Thaï",
  "culture": "Isaan",
  "category": "proteins",
  "tags": [
    "porc haché",
    "herbes",
    "Thaï",
    "estaan",
    "Chaux"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 5,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc haché (20 % minimum de matières grasses)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "cuisse de poulet hachée",
        "canard haché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de chaux frais (2–3 chaux)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce de poisson (Tiparos préféré)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja pour végétarien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Flacons de chili séchés, grillés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "chili des yeux d'oiseau frais, tranché finement"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Khao khua: riz glutineux brut ou jasmin, cuit à sec",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalotes asiatiques (4 à 5 petites), tranchées finement en anneaux",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge, trempé dans l'eau froide"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "menthe vietnamienne (feuille de laksa)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Coriandre à scie fraîche (culantro), tranchée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Coriandre régulière (cilantro)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Pâte de citronnelle, partie tendre interne seulement, très finement tranchée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Choux et tranches de concombre, à servir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tasses de laitue"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_05"
      ],
      "outputState": "khao_khua",
      "instructions": "Mettre le riz cru dans un wok sec ou une petite poêle lourde à feu moyen. Mélanger en continu avec une cuillère en bois ou agiter constamment la poêle pendant 5 à 8 minutes jusqu'à ce que chaque grain ait changé de couleur dorée profonde – la couleur d'un crouton au bois parfait. Le riz sent la noix, le toast, et peu fumé. Laisser refroidir, puis mettre un mortier ou un pouls dans un broyeur d'épices jusqu'à ce que vous ayez une poudre grossière — pas de farine fine, mais des miettes irrégulières de la taille du sel de mer grossier. Cette poudre de riz grillée (khao khua) est ce qui rend les larbes : elle absorbe la vinaigrette, l'épaissit légèrement, et ajoute une note arrière légèrement amère à chaque bouchée.",
      "visualCue": {
        "primaryTarget": "Grains brun doré foncé, de couleur uniforme, avec un arôme de popcorn grillé. Pas de grain pâle, pas de grain noir brûlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont d'or pâle ou de couleur inégale. La poudre a un goût d'amidon plutôt que de noix.",
            "action": "Continuer à griller à feu moyen. Soyez patient — la couleur s'approfondit rapidement au cours des 90 dernières secondes."
          },
          {
            "state": "Perfect",
            "description": "Tous les grains un or même profond. L'odeur est intense, comme des cacahuètes grillées. La poudre moulue a un arôme chaud et complexe.",
            "action": "Refroidissez et livrez à une poudre grossière."
          },
          {
            "state": "Overdone",
            "description": "Plusieurs grains sont devenus brun foncé ou noir. La poudre sera amère et amère.",
            "action": "Choisissez les grains brûlés avant de les broyer, ou jetez - les et recommencez."
          }
        ]
      },
      "feelCue": "Lorsque vous moudrez le riz grillé, la poudre doit se sentir gritty entre vos doigts comme une polenta grossière — pas fine et farineuse. Cette texture donne à la larb sa légère croûte caractéristique."
    },
    {
      "nodeId": "step_2",
      "action": "Chaleur",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_pork",
      "instructions": "Placez le porc haché dans un wok froid ou une casserole large — ne pas ajouter d'huile, la graisse de porc rendra. Mettre à feu moyen-vif et cuire, en brisant la menthe avec une cuillère en bois, pendant 4 à 5 minutes. Vous voulez que le porc soit cuit avec un peu de caramélisation autour des bords — pas une masse grise à la vapeur et pas un crumble dur et sec. Retirer du feu dès que le porc est cuit. Transférer immédiatement dans un grand bol de mélange. Le porc devrait encore être chaud quand vous l'habillez — la chaleur fleurit les herbes et ouvre la chaux.",
      "visualCue": {
        "primaryTarget": "Le porc est cuit à travers et brun clair avec quelques bords caramélisés. Pas de rose, pas d'eau grise autour de la viande. La graisse a rendu et la viande semble légèrement brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore rose dans les taches. Le liquide s'accumule autour de la viande — il est à la vapeur plutôt que de la friture.",
            "action": "Égoutter tout excès de liquide et augmenter la chaleur. Continuer la cuisson jusqu'à ce qu'il ne reste pas de rose."
          },
          {
            "state": "Perfect",
            "description": "On a cuit à travers, avec un peu de brunissement sur les touffes qui se sont fixées contre la poêle. La graisse a rendu et enrobe la viande. Toujours à la vapeur.",
            "action": "Transférer immédiatement dans le bol de mélange et s'habiller à chaud."
          },
          {
            "state": "Overdone",
            "description": "Le porc est sec, dur et s'effondre. Tout le gras a cuit et la viande colle à la poêle.",
            "action": "Continuez — il aura encore bon goût habillé, mais la texture sera moins juteuse. Ajouter une touche plus de jus de lime et de sauce de poisson pour réhydrater légèrement."
          }
        ]
      },
      "feelCue": "La menthe de porc fraîchement cuite doit se sentir souplement texturée et légèrement humide lorsqu'elle est pressée à l'arrière d'une cuillère."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "cooked_pork",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "dressed_larb",
      "instructions": "Travailler rapidement alors que le porc est encore très chaud, ajouter le jus de lime, la sauce de poisson et les flocons de chili grillés dans le bol. Agressivement, l'acidité de la chaux arrêtera la cuisson. Goûtez immédiatement : la vinaigrette doit être amère et salée avec un chili frappé au dos. La larde est intentionnellement audacieuse — si elle semble trop intense dans le bol, elle s'équilibrera magnifiquement avec du riz et des légumes frais. Ajuster: plus de chaux pour l'aur, plus de sauce de poisson pour la profondeur salée, plus de chili pour la chaleur.",
      "visualCue": {
        "primaryTarget": "Le porc a l'air brillant et légèrement habillé, scintillant avec du jus de lime. La couleur est brun-rose. La vapeur monte encore.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dressing pas encore ajouté. Le porc se refroidit rapidement et sera froid avant que les herbes soient ajoutées.",
            "action": "Habillez - vous immédiatement: le larbe froid est un plat différent (moins bon)."
          },
          {
            "state": "Perfect",
            "description": "Porc chaud, brillant, assaisonné agressivement. Vous le goûtez et votre bouche suce de la chaux et fleurit avec de la chaleur de chili. La sauce au poisson donne de la profondeur à l'umami.",
            "action": "Ajouter immédiatement les herbes et la poudre de riz."
          },
          {
            "state": "Overdone",
            "description": "Trop de sauce de poisson ou de citron vert a été ajouté et la vinaigrette est écrasante. Le porc a un goût mariné.",
            "action": "Équilibrez en ajoutant une pincée de sucre et une cuillère à soupe de citronnelle fraîche finement tranchée à couper."
          }
        ]
      },
      "feelCue": "Lorsque vous remuez le porc habillé, il doit sentir comme un étal de larb du marché — la vapeur de chaux chaude, la sauce de poisson funk, et la chaleur de chili séchée tous frapper le visage à la fois."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "dressed_larb",
        "khao_khua",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_larb",
      "instructions": "Ajouter la poudre de riz grillée, les échalotes tranchées, les feuilles de menthe (orées si grandes), la coriandre à sciure et la citronnelle au porc habillé. Mélanger délicatement mais soigneusement, distribuer toutes les herbes et la poudre uniformément à travers la viande. Le khua khao commencera immédiatement à absorber la vinaigrette et à l'épaissir légèrement. Goûtez encore une fois et assaisonner si nécessaire. Servir immédiatement sur une assiette ou dans un bol peu profond avec les coins de chou et les tranches de concombre sur le côté — ce ne sont pas des garnitures, ils sont structuraux: vous les utilisez pour écoper le larb et refroidir la chaleur.",
      "visualCue": {
        "primaryTarget": "Un monticule chaud et parfumé de porc parsemé de menthe verte vive et de lambeaux d'herbes, d'échalotes pâles et de poudre de riz tan. Toujours à la vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Herbes juste dispersées sur le dessus, pas jetées dans. Poudre de riz non ajoutée. L'herbe a un goût plat et non herbé.",
            "action": "Jetez tout ensemble afin que chaque morceau de porc ait une couverture d'herbe et de riz en poudre."
          },
          {
            "state": "Perfect",
            "description": "Les herbes sont flétries très légèrement par la chaleur du porc, libérant leur parfum. Les échalotes restent croquantes. La poudre de riz a épaissi la vinaigrette en glaçure.",
            "action": "Assiette immédiatement et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'herbe est assise pendant 15 minutes — les herbes sont complètement flétries et sombres, les échalotes se sont adoucies, la poudre de riz s'est dissoute dans la vinaigrette.",
            "action": "Il est encore comestible mais a perdu de la fraîcheur. Habillez-vous avec une poignée de feuilles de menthe fraîche et une touche finale de lime pour la raviver."
          }
        ]
      },
      "feelCue": "Le larbe fini doit être suffisamment chaud pour que la menthe se fane légèrement au contact et libère son arôme de menthol dans votre visage lorsque vous vous penchez sur le bol — ce parfum d'herbe à vapeur est la signature de larbe cuit et habillé correctement."
    }
  ]
};
