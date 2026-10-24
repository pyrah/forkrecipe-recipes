export default {
  "repoId": "master_thai_peanut_sauce_001",
  "parentRepoId": null,
  "slug": "peanut-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce aux arachides",
  "description": "Nam jim satay, la façon dont il devrait être — cacahuètes grillées à sec poêlées grossièrement, mijotées avec de la pâte de curry rouge fissurée dans la crème de noix de coco fendue jusqu'à ce que l'huile augmente rouge et lissée, puis équilibrées sales-doux avec tamarin, sucre de palme, et sauce de poisson dans une trempe brillante et noisette qui s'accroche aux brochettes carbonisées.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "sauces",
  "tags": [
    "arachide",
    "satay",
    "Thaï",
    "nam-jim",
    "noix de coco",
    "trempage-sauce"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Cacahuètes crues sans peau",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Cacahuètes grillées à l'état sec, non salées (skiper l'étape de torréfaction)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Pâte de curry rouge thaïlandaise (krueng gaeng phed)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâte de curry Massaman pour une note plus douce et plus chaude",
        "pâte cuite maison"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Crème de coco (épaisseur, dessus de la boîte)",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": [
        "lait de coco plein gras réduit plus difficile à fractionner"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Lait de coco (ou eau)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "Stocks non salés de poulet ou de légumes",
        "eau pure"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Pâte de tamarin (sans graines, aigre)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de lime frais ajouté à la chaleur"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme (séparé)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja légère pour une version végétarienne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Cacahuètes grillées, hachées à peu près",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes frites",
        "piment rouge frais tranché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "pounded_peanuts",
      "instructions": "Faire griller les arachides crues dans une poêle lourde à feu moyen-doux, en tremblant constamment, de 8 à 12 minutes, jusqu'à ce qu'elles soient dorées et parfumées avec des taches de rousseur foncées. Laissez - les refroidir complètement — ils sont croustillants. Pound dans un mortier de granit (ou impulsion dans un processeur) à un gravat grossier: environ deux tiers de farine de gritty et un tiers de pièces de taille de pois. Vous voulez de la texture, pas du beurre de cacahuètes ; le surgissement libère de l'huile et transforme la sauce pâteuse et plate.",
      "visualCue": {
        "primaryTarget": "Les arachides sont uniformément dorées avec des taches brunes grillées éparses, sentant profondément la noix et presque le popcorn sucré, et le résultat battu est un gros gravat de deux tons de farine et de morceaux croquants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les arachides sont encore pâles et ont un goût cru et de beany, sans arôme grillé. Pounded, ils sentent le vert.",
            "action": "Continuez à rôtir et à remuer à feu doux — la couleur et l'arôme se développent lentement. Le goût cru d'arachide va ternir la sauce entière."
          },
          {
            "state": "Perfect",
            "description": "Or avec des taches de rousseur brunes, craquer croustillant quand mordu, sentant comme des noix grillées. La livre donne des farines gritty cloutées de fragments croquants.",
            "action": "Mettez de côté. Réserver une petite poignée grossièrement hachée pour la garniture finale."
          },
          {
            "state": "Overdone",
            "description": "Les arachides sont brûlées brun foncé à noir et sentent l'acridité et l'amertume.",
            "action": "Jeter les noix brûlées — l'amertume porte tout droit dans la sauce. Si seulement la livre est devenue grasse, remuez une cuillère du repas sec pour ramener la texture."
          }
        ]
      },
      "feelCue": "Une cacahuète bien torréfié se met entre les dents et ne se penche jamais. Sous le pilon, il devrait craquer et s'essuyer, pas se frotter; au moment où il commence à lécher le mortier avec de l'huile, arrêter."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_03",
        "ing_02"
      ],
      "outputState": "fried_paste",
      "instructions": "Mettre l'épaisse crème de noix de coco seule dans une grande casserole à feu moyen et la laisser buller et réduire, en remuant, de 4 à 6 minutes, jusqu'à ce qu'il 'cracks' — la crème se divise et une léchée d'huile claire aux bords. Incorporer la pâte de curry rouge et la faire frire dans cette huile de noix de coco, presser et tourner, 3 à 5 minutes, jusqu'à ce que l'odeur brute d'ail et de galangal se consume et que l'huile brille rouge et aromatique. Cette friture de la pâte (pad prik gaeng) est ce qui construit la profondeur; sautez-la et la sauce goûte plat et poussiéreux.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et rouge brique dans une piscine visible d'huile rouge-orange brillante qui s'est séparée des solides, sentant parfumé et grillé sans bord dur d'épices brutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La noix de coco est encore soupeuse et blanche et n'a pas fendue; la pâte est assise dans du liquide et sent fortement cru.",
            "action": "Conservez la cuisson à feu moyen et soyez patient – la crème doit réduire et craquer avant que la pâte puisse frire. Baissez la chaleur si elle menace de brûler."
          },
          {
            "state": "Perfect",
            "description": "L'huile rouge brillante s'est séparée et la pâte est épaisse, foncée, intensément aromatique, étourdissante plutôt que bouillante.",
            "action": "Continuez immédiatement à ajouter les arachides et le liquide avant les prises de pâte."
          },
          {
            "state": "Overdone",
            "description": "La pâte est sèche, sombre et collante, avec une odeur brûlée et amère qui commence à se lever de la poêle.",
            "action": "Retirer immédiatement le feu et ajouter le lait de coco pour arrêter la cuisson. S'il a un goût brûlé, recommencez la pâte."
          }
        ]
      },
      "feelCue": "Écoutez le passage d'un ébullition humide à un étourdissement vif et huileux — ce craquelin est le fractionnement de la crème. La pâte devrait laisser un sentier propre quand vous faites glisser la cuillère, et la cuisine devrait sentir du chili grillé et galangal, pas de la fumée acride."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "fried_paste",
        "pounded_peanuts",
        "ing_04"
      ],
      "outputState": "peanut_base",
      "instructions": "Incorporer les cacahuètes piquées dans la pâte frite afin que chaque grain soit enduit dans l'huile rouge, puis verser dans le lait de coco (ou l'eau). Porter à mijoter doucement et cuire de 8 à 12 minutes, en remuant souvent lorsque les arachides boivent le liquide et épaississent la sauce. Il ira de lâche à luxueusement épais; mince avec un éclaboussure plus de lait de coco ou d'eau chaque fois qu'il devient trop serré pour tomber de la cuillère. L'amidon et l'huile d'arachide portent maintenant la chaleur de chili et donnent à la sauce son corps.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, de couleur terre cuite, légèrement grainée des arachides, avec des perles d'huile rouge scintillent à la surface et un blup lent, semblable à de la lave, au fur et à mesure qu'elle mijote.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, les cacahuètes lâches et les saveurs non encore mélangées; il goûte de parties séparées.",
            "action": "Continuez à mijoter pour laisser les cacahuètes gonfler et épaissir et les saveurs se marier. Résiste trop tôt."
          },
          {
            "state": "Perfect",
            "description": "Assez épais pour enrober la cuillère et le monticule doucement, brillant avec de l'huile superficielle, les saveurs d'arachide et de chili maintenant lisant comme un.",
            "action": "Passer à l'assaisonnement final — tamarin, sucre de palme et sauce de poisson."
          },
          {
            "state": "Overdone",
            "description": "La sauce est raide et farcie, presque une pâte, menaçant de prendre sur le fond de la poêle.",
            "action": "Allongez-vous avec du lait de coco ou de l'eau chaude à la fois, en remuant, jusqu'à ce qu'il coule à nouveau. Baissez la chaleur pour l'arrêter de coller."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère à travers la poêle — quand elle laisse un canal à fermeture lente qui montre la base pour un battement, le corps est juste. Il devrait se sentir velouté avec un grain d'arachide agréable, jamais collant."
    },
    {
      "nodeId": "step_4",
      "action": "Solde",
      "inputs": [
        "peanut_base",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_peanut_sauce",
      "instructions": "Ajouter une mijotée vigoureuse, mélanger le tamarin, le sucre de palme et la sauce de poisson. Laissez fondre ensemble pendant une minute, puis goûtez et assaisonnez: il devrait frapper sucré d'abord, puis salé et aigrer près derrière, avec la chaleur de chili fleurissant à l'arrière. Ajuster en petites quantités — sucre de palme à rond, tamarin à éclaircir, sauce de poisson à approfondir — jusqu'à ce qu'aucune note ne domine. Plongez jusqu'à une consistance de trempe épaisse mais puante. Spoon dans un bol, disperser les cacahuètes hachées réservées sur le dessus, et servir chaud avec satay grillé.",
      "visualCue": {
        "primaryTarget": "Une sauce brun russé brillant et profond qui rubane épaissement de la cuillère et s'installe lentement à plat, un éclat d'huile sur le dessus et une couronne d'arachides hachées attraper la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat ou unidimensionnel – trop de noix, ou tranchant de la sauce de poisson crue, avec l'équilibre sucré-sour pas encore verrouillé.",
            "action": "Ajouter le sucre de palme et le tamarin en petits morceaux, goûter entre chacun. Doucement et aigrent ensemble sont ce qui le fait chanter; sauce satay sous-saison goût boueux."
          },
          {
            "state": "Perfect",
            "description": "Équilibré et arrondi: doux, salé et aigre, recouvert d'arachide et de chili torréfié, suffisamment épais pour s'accrocher à une brochette sans glisser.",
            "action": "Garnir d'arachides hachées et servir au chaud. Il s'épaissit comme il refroidit, alors laisse-lui un toucher lâche."
          },
          {
            "state": "Overdone",
            "description": "La sauce est coiffantement douce ou agressivement salée, ou si épaisse qu'elle est assise dans une masse raide.",
            "action": "Retirez-le avec une touche de citron vert ou un peu de tamarin pour la douceur, de l'eau pour le sel et desserrez avec du lait de coco. Reprendre le goût jusqu'à équilibrer."
          }
        ]
      },
      "feelCue": "Une bonne sauce satay enveloppe le dos d'une cuillère et s'égoutte lentement, avec cette texture grainée-silky caractéristique. Sur la langue la douceur doit arriver en premier et la chaleur dure; si elle a un goût plat, elle veut généralement tamarin et sel, pas plus de sucre."
    }
  ]
};
