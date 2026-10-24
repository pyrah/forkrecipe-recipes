export default {
  "repoId": "master_portuguese_pastel_de_nata_001",
  "parentRepoId": null,
  "slug": "pastel-de-nata",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pastel de Nata",
  "description": "Une coquille en coupe de pâte feuilletée très croustillante, crachant une crème si soyeuse et tremblante, elle tient à peine sa forme, caramélisée noire sur le dessus où la chaleur féroce du four a transformé le sucre en laque.",
  "cuisine": "Portugais",
  "culture": "Lisboeta",
  "category": "desserts",
  "tags": [
    "portugais",
    "Custard-tart",
    "pâte feuilletée",
    "pâtisserie",
    "Cuisson"
  ],
  "difficulty": 4,
  "activeTime": "60 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine plate (tout usage)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 125,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Lard (ou beurre non salé, adouci)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Écourtement des légumes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour la crème)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau (pour le sirop de sucre)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Farine pure (pour épaississement de la crème)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 6,
      "defaultUnit": "unit",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "unit",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Bande de citron (pas de piquant)",
      "ratioValue": 1,
      "defaultUnit": "unit",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "pastry_dough",
      "instructions": "Mélanger la farine, l'eau et le sel pour former une pâte douce et souple. Agenouillez pendant 5-6 minutes jusqu'à ce qu'il soit doux, non collant et ait une certaine élasticité. Ça devrait être de la plastine très douce. Ne t'énerve pas trop. Enveloppez le film de collage et reposez-vous au réfrigérateur pendant 30 minutes. Ce repos au gluten est essentiel — il permet à la pâte de rouler sans ressort quand elle est laminée.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte très lisse et douce avec une surface légèrement soyeuse. Lorsqu'il est pressé, il tient le tiret d'une empreinte de pouce proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est rugueuse, la texture inégale et les larmes lorsqu'elles sont étirées. Le gluten est sous-développé.",
            "action": "Agenouillez encore 2-3 minutes. La surface doit être lisse et la pâte doit s'étirer sans déchirer."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, très doux et souple. Presque soyeux. Il tient un tiret d'empreinte. Pas collant.",
            "action": "Enrouler et réfrigérer pendant 30 minutes avant la stratification."
          },
          {
            "state": "Overdone",
            "description": "La toux est devenue dure et élastique — elle ressort agressivement lorsqu'elle est pressée.",
            "action": "Réfrigérer pendant 1 heure. La pâte surcollée a besoin d'un repos plus long pour détendre le gluten."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme un lobe d'oreille chaud – incroyablement doux et donnant avec une surface lisse et légèrement collante qui ne s'accroche pas à vos paumes."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "pastry_dough",
        "ing_04"
      ],
      "outputState": "laminated_pastry",
      "instructions": "Sur une surface légèrement farinée, rouler la pâte reposée dans un grand rectangle d'environ 40 x 30 cm. Étendre uniformément le saindoux ou le beurre sur la surface, en laissant une bordure de 1 cm. Rouler la pâte fermement dans un log de l'extrémité courte. Couper le log en 12 tours égaux. Appuyez sur chaque rond à plat entre vos doigts, puis appuyez-le dans une boîte de muffin pour aligner la base et les côtés, en appuyant sur la pâte au-dessus du bord. Réfrigérer les boîtes doublées pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Gobelets en étain de muffin doublés d'une fine coquille de pâte qui montre la section circulaire du rouleau. Les couches de pâte sont visibles comme des anneaux concentriques lorsqu'on les regarde d'en haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est trop épaisse dans les endroits, surtout la base. Les couches sont groupées plutôt que uniformément réparties.",
            "action": "Utilisez votre pouce pour mincer la base plus loin, en appuyant du centre vers l'extérieur et en travaillant la pâte uniformément sur les côtés."
          },
          {
            "state": "Perfect",
            "description": "Mince, même les coquilles avec des couches visibles stratifiées de la coupe tourbillon. La pâtisserie s'étend juste au-dessus du bord de chaque tasse.",
            "action": "Réfrigérer et préparer la crème pendant le refroidissement."
          },
          {
            "state": "Overdone",
            "description": "Pâtisserie a été travaillé trop chaud et la graisse a fondu en perdant les couches distinctes.",
            "action": "Réfrigérer pendant 20 minutes avant toute autre formation — les graisses doivent être froides pour créer des couches distinctes."
          }
        ]
      },
      "feelCue": "Les coquilles de pâtisserie bien réfrigérées doivent être fraîches et très fermes lorsque vous appuyez sur le côté, presque rigides. Toute chaleur ou douceur signifie que la graisse s'est adoucie et que les couches vont fusionner dans le four."
    },
    {
      "nodeId": "step_3",
      "action": "Infuser",
      "inputs": [
        "ing_05",
        "ing_10",
        "ing_11"
      ],
      "outputState": "infused_milk",
      "instructions": "Chauffer le lait avec le bâton de cannelle et la bande de citron à feu moyen jusqu'à ce qu'il mijote à la vapeur et juste en dessous. Retirer du feu et faire tremper pendant 15 minutes. Retirer le bâtonnet de cannelle et l'écorce de citron. Entre-temps, faire cuire le sucre et l'eau dans une petite casserole séparée à 104 C (l'étape du fil doux), sans remuer. C'est le sirop de sucre qui édulcorera et enrichira la crème avec une note légèrement caramélisée.",
      "visualCue": {
        "primaryTarget": "Lait qui sent la cannelle et les agrumes chauds. Le sirop à 104 C formera des fils fins lorsqu'une petite quantité est déposée dans l'eau froide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait n'a pas été complètement infusé — faible odeur de cannelle seulement. Le sirop de moins de 100 C est encore aqueux.",
            "action": "Profondissez le lait plus longtemps avec les épices et assurez-vous que le sirop atteint la température."
          },
          {
            "state": "Perfect",
            "description": "Le lait sent fortement la cannelle avec un fond de citron. Le sirop est clair et légèrement visqueux à 104 °C.",
            "action": "Combiner avec la farine et les jaunes pour former la base de crème."
          },
          {
            "state": "Overdone",
            "description": "Le sirop de plus de 110 °C commencera à caraméliser — la crème goûtera au caramel plutôt que d'être subtilement sucrée.",
            "action": "Ajouter immédiatement une cuillère à soupe d'eau froide pour arrêter la cuisson et baisser la température."
          }
        ]
      },
      "feelCue": "Le lait trempé doit sentir comme une pastelaria portugaise — la cannelle-spice chaude avec un murmure d'agrumes. Goûtez une petite cuillère — elle doit être subtilement aromatisée, et non agressivement parfumée."
    },
    {
      "nodeId": "step_4",
      "action": "Fouetter",
      "inputs": [
        "infused_milk",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "custard_filling",
      "instructions": "fouetter la farine dans le lait infusé jusqu'à ce qu'elle soit complètement lisse. Verser le sirop de sucre chaud en fouettant constamment. Placer sur feu moyen et remuer constamment jusqu'à ce que la crème commence à s'épaissir — enlever de la chaleur au moment où elle s'épaissit, alors qu'elle est encore versable (ne pas la laisser placer complètement sur le poêle). Frotter les jaunes d'œufs du feu. Passez par un bon tamis dans une cruche. La crème doit être assez fine pour verser, pas épaisse comme un pudding — elle se met au four.",
      "visualCue": {
        "primaryTarget": "Une crème mince et versable qui enveloppe l'arrière d'une cuillère d'une fine couche translucide. Encore plus liquide qu'une crème épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le custard est un peu d'eau sans corps — la farine n'a pas commencé à l'épaissir.",
            "action": "Retournez à la chaleur brièvement, en remuant. L'amidon doit atteindre environ 80 C pour commencer le gelage."
          },
          {
            "state": "Perfect",
            "description": "Légèrement épaissi, versable, enveloppe une cuillère d'une fine couche translucide. La couleur est jaune pâle des jaunes.",
            "action": "Passer à travers un tamis et verser dans des coquilles de pâtisserie bordées."
          },
          {
            "state": "Overdone",
            "description": "Custard a mis en place une masse épaisse, semblable au pudding. Ne peut pas être versé dans les coquilles.",
            "action": "Frotter vigoureusement la chaleur et mincer avec un peu de lait chaud. Encore une fois. Cette crème va mettre très raide dans le four."
          }
        ]
      },
      "feelCue": "Verser un mince jet de crème du tamis dans la cruche — il devrait tomber dans un large, doux, à peine visqueux, comme de la crème très fine. Plus épais que l'eau, plus mince que la crème de soupe."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "laminated_pastry",
        "custard_filling"
      ],
      "outputState": "finished_pastel_de_nata",
      "instructions": "Verser la crème dans les coquilles réfrigérées, remplir à 3 mm près de la jante. Cuire dans la position la plus élevée d'un four très chaud — 240-260 C (460-500 F) — pendant 12-15 minutes. La pâtisserie doit être dorée et profondément cloquée. La surface de la crème doit avoir des ampoules noires spectaculaires et des taches de caramélisation ambre profonde sur un ensemble, tremblant la crème ci-dessous. Servir chaud, avec de la cannelle moulue.",
      "visualCue": {
        "primaryTarget": "Des taches noires blisteuses sur la surface de la crème, non brun uniforme, mais des taches carbonisées spectaculaires sur une base ambre, avec la crème sertie mais tremblante. La pâtisserie est dorée, cloquée et croquante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface du custard est jaune pâle et n'a pas été caramélisée. La pâtisserie est blonde. Custard peut encore être liquide au centre.",
            "action": "Retournez au four. La caractéristique déterminante d'un pastel de nata est la caramélisation noire — ne pas enlever trop tôt."
          },
          {
            "state": "Perfect",
            "description": "Blistettes noires dramatiques et caramélisation ambre profonde à travers la crème. La pâtisserie est profondément dorée et cloquée. La coutarde gronde doucement lorsque le plateau est déplacé.",
            "action": "Laisser refroidir 5 minutes dans l'étain, puis retirer. Servir au chaud avec la cannelle."
          },
          {
            "state": "Overdone",
            "description": "La surface entière de la crème est uniformément noire et sent l'acride plutôt que le caramel. La pâtisserie est très sombre aux bords.",
            "action": "Réduire la température du four de 10 °C et raccourcir de 2 minutes la prochaine fois. La ligne entre parfait et brûlé est étroite à cette température."
          }
        ]
      },
      "feelCue": "Tenez une tarte finie à la jante et aspirez-la doucement. Le centre de la crème devrait trembler et trembler visiblement, comme un flan à peine fixé. Une crème qui ne bouge pas du tout a été surchauffée et sera caoutchouteuse."
    }
  ]
};
