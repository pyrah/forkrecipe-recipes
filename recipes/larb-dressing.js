export default {
  "repoId": "master_thai_larb-dressing_001",
  "parentRepoId": null,
  "slug": "larb-dressing",
  "author": "ForkRecipe Kitchen",
  "title": "Dressage de la feuille",
  "description": "La vinaigrette poinçonnée, grillée au riz épais de la lao-thaï – sauce de poisson, chaux, chili séché, et kao kua (poudre de riz grillée) se mélangent, donnant à la salade finie sa croûte aux noix et son poinçon à base de plantes.",
  "cuisine": "Thaï",
  "culture": "Lao / Nord de la Thaïlande",
  "category": "condiments",
  "tags": [
    "Thaï",
    "Lao",
    "salade de viande",
    "Barbecue grillée",
    "herbe",
    "acide",
    "épicé"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz glutineux cru (pour toast)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "riz jasmin cru (arôme légèrement différent)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + pincée de MSG pour version végétalienne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "flocons de chili rouges séchés (bon de porc), grossièrement moulus",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "chili des yeux d'oiseau frais, haché (double quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc ou de palme",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe, grossièrement déchirées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "menthe vietnamienne (rau ram)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Coriandre fraîche, feuilles et tiges tendres",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_rice_powder",
      "instructions": "Placer le riz glutineux cru dans un wok sec ou une poêle lourde à feu moyen. Remuer constamment avec une cuillère en bois — le riz doit se déplacer en tout temps ou il brûle dans des patchs. Faire cuire de 8 à 12 minutes jusqu'à ce que chaque grain devienne brun-or profond, la couleur du caramel foncé. La cuisine sent le pop-corn et les noix grillées. Retirez immédiatement dans une assiette pour arrêter la cuisson. Une fois complètement refroidie, transférer dans un mortier ou un broyeur d'épices et moudre dans une poudre grossière — la texture doit être comme de la farine de maïs grossière, et non de la farine fine. Quelques fragments plus gros sont souhaitables. Cette poudre, khao kua, est ce qui donne à la larbe sa croûte de noix signature et agit comme un épaississant léger pour la vinaigrette.",
      "visualCue": {
        "primaryTarget": "Chaque grain de riz est un grain profond, même brun doré — la couleur d'une peau de noisette grillée — sans taches pâles ou blanches. L'arôme est puissant et grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore d'or pâle ou de couleur crème et la cuisine sent le riz cru chaud plutôt que le grain grillé. Les grains rebondissent quand ils frappent la poêle — ils n'ont pas commencé à caraméliser.",
            "action": "Continuez à griller. Underdone khao kua goûte de l'amidon et cru dans le larb fini et ne fournit aucune saveur de noix. Faites chauffer un cran et continuez à remuer."
          },
          {
            "state": "Perfect",
            "description": "Grains foncés brun-ambre, de couleur uniforme, sentant fortement le grain grillé et le caramel doux. Quand vous moudrez quelques-uns entre vos doigts, ils sentent le popcorn beurré.",
            "action": "Transférer immédiatement dans une assiette fraîche — la poêle conserve la chaleur et continuera à cuire le riz s'il y reste. Laisser refroidir complètement avant de broyer."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont devenus noir d'acajou, certains s'approchant, et l'odeur a une note vive et acride brûlée sous le toast.",
            "action": "Jeter si plus d'un quart des grains sont noirs — la saveur amère brûlée imprégnera tout le larbin. Recommence et tire le riz 30 secondes plus tôt."
          }
        ]
      },
      "feelCue": "Après le broyage, pincez une petite quantité de poudre et frottez - la entre vos doigts; elle doit être sèche comme du poivre fin et laisser une tache sèche et bronzée, et non un frottis huileux. Tenez une pincée sous votre nez: vous devriez obtenir une chaleur presque biscuit, propre et noisette, avant l'ajout de la chaux et de la sauce de poisson."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "toasted_rice_powder",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "larb_dressing_base",
      "instructions": "Dans un bol à mélanger, mélanger la sauce de poisson et le jus de lime, puis ajouter le sucre et remuer jusqu'à dissolution. Goûtez la base : elle doit être agressivement aigre et salée dans une mesure à peu près égale, avec le doux à peine perceptible comme une note arrondie. Ajouter les flocons de chili séchés et remuer. Enfin, remuez environ la moitié de la poudre de riz grillée — la vinaigrette commencera immédiatement à s'épaissir légèrement et à prendre une teinte dorée. Réserver la moitié restante à ajouter sur la viande chaude juste avant de servir, où il fournit la croûte la plus distincte.",
      "visualCue": {
        "primaryTarget": "Un pansement fin, doré-brun avec des taches visibles de chili séché rouge et de poudre de riz tan en suspension, sentant l'aurore et la noix simultanément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette est très fine et le chili et la poudre de riz ont coulé au fond. Le sucre est assis non dissout comme une couche visible.",
            "action": "Remuer plus vigoureusement. Le sucre doit se dissoudre avant l'entrée de la poudre de riz, sinon la vinaigrette aura un goût inégalement sucré."
          },
          {
            "state": "Perfect",
            "description": "Une vinaigrette cohésive, légèrement épaissie avec une distribution uniforme de poudre de riz et de chili. Il sent fortement amer avec une base de noix profonde et illumine un or ambré chaud.",
            "action": "Goût pour l'équilibre : il devrait être grasement aigre, salé, légèrement chaud et à peine sucré. Jetez la viande immédiatement ou conservez-la au réfrigérateur jusqu'à 4 heures – la poudre de riz continuera d'épaissir la vinaigrette pendant qu'elle est assise."
          },
          {
            "state": "Overdone",
            "description": "Trop de poudre de riz a été ajouté à la fois et la vinaigrette a saisi dans une boue épaisse et pâteuse plutôt qu'une vinaigrette versable.",
            "action": "Finir avec une pression de jus de lime et une éclaboussure plus de sauce de poisson. Ajouter la poudre de riz par étapes pour contrôler la cohérence à l'avenir."
          }
        ]
      },
      "feelCue": "Enrober l'arrière d'une cuillère et la tenir horizontalement — la vinaigrette devrait s'écouler dans un cours d'eau mince et stable, légèrement plus épais que l'eau, mais pas près du sirop. Ce corps léger est ce qui lui permet de couvrir chaque surface de la viande sans mise en commun."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "larb_dressing_base",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_larb_dressing",
      "instructions": "Ajouter les feuilles de menthe déchirées et la coriandre dans la vinaigrette. Toss brièvement — ils devraient être légèrement revêtus plutôt que submergés. Cette vinaigrette est destinée à être jetée sur de la viande fraîchement cuite, encore tiède (porc haché, poulet ou boeuf) au moment où elle sort du feu. La chaleur résiduelle de la viande flétrit légèrement les herbes, les ecchymose juste assez pour libérer leur parfum, et la graisse chaude dans la viande émulsifie légèrement avec le jus de lime. Saupoudrer le reste de la poudre de riz réservée sur le dessus de la larbe plaquée à la fin pour une croûte maximale. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Feuilles d'herbes vert vif — certaines entières, légèrement déchirées — suspendues dans la vinaigrette dorée, avec le vert vif de la menthe qui contraste avec le liquide ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes sont toujours entières et rigides, assises sur le dessus de la vinaigrette plutôt que d'être incorporées. Ils n'ont pas publié de parfum.",
            "action": "Mélanger la vinaigrette plus activement afin que les herbes soient uniformément enduites. Ils n'ont pas besoin d'être meurtris — simplement revêtus."
          },
          {
            "state": "Perfect",
            "description": "Les herbes sont légèrement enduites et commencent tout juste à ramollir là où elles contactent l'acide dans le jus de chaux. Le parfum de menthe est vif et frais contre la base aigre.",
            "action": "Verser immédiatement sur la viande de larbe chaude et disperser le reste de la poudre de riz sur le dessus. La chaleur de la viande fait le travail final."
          },
          {
            "state": "Overdone",
            "description": "Les herbes ont été assises dans la vinaigrette acide trop longtemps et sont maintenant olive-drabe et boiteux, le parfum de menthe remplacé par une odeur vert terne cuite.",
            "action": "Ajouter une petite poignée d'herbe fraîche à la fin pour restaurer la luminosité. Faire la vinaigrette et ajouter les herbes au plus 5 minutes avant de servir."
          }
        ]
      },
      "feelCue": "Enfilez une feuille de menthe et maintenez-la entre vos doigts à côté d'une pincée du mélange sauce-lime de poisson - la netteté de l'acide devrait déclencher le menthol refroidissant de la menthe d'une manière qui vous donne envie de manger tout le bol à la fois. Cette tension est l'essence même du larbin."
    }
  ]
};
