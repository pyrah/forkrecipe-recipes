export default {
  "repoId": "master_french_rumbaba_001",
  "parentRepoId": null,
  "slug": "rum-baba",
  "author": "ForkRecipe Kitchen",
  "title": "Rhum Baba",
  "description": "Petits gâteaux de levure enrichis trempés dans du sirop de rhum chaud jusqu'à ce qu'ils soient complètement saturés et dégoulinants – d'origine italienne, parisien en exécution, mieux couronnés de Chantilly et d'une cerise.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "desserts",
  "tags": [
    "français",
    "pâtisserie",
    "levure",
    "rhum",
    "baba",
    "chantilly",
    "dessert",
    "classique"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "farine de gâteau (donne une miette légèrement plus molle)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Œufs, température ambiante",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, très doux",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne à sucre — pâte",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": [
        "6 g de levure sèche active, éprouvée en premier"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Lait entier, chaud (35–38°C)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Rhum foncé (âgé de 40 à 55 % de VAB)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Grand Marnier",
        "rhum agricole foncé"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Hydration",
      "name": "Eau — sirop",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Miel — sirop",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'or"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Crème lourde (35%+ gras), très froide",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Aromatic",
      "name": "Gousse de vanille ou extrait de vanille à 1 c. à thé",
      "ratioValue": 1,
      "defaultUnit": "pod",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Sweetener",
      "name": "Sucre de canne à sucre — sirop",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "wet_baba_batter",
      "instructions": "Dans un brasseur muni du crochet de pâte, mélanger la farine, le sucre, le sel et la levure instantanée. Ajouter le lait chaud et les œufs un à la fois avec le mélangeur fonctionnant sur un milieu. Battre de 8 à 10 minutes jusqu'à ce que la pâte soit lisse, brillante et élastique, en tirant proprement des côtés du bol. Le mélange est plus humide qu'une pâte à pain, plus près d'une pâte épaisse.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante et élastique qui gifle les côtés du bol et laisse les parois du bol propres. S'étire dans de longs rubans brillants quand une cuillère est levée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une texture dure et bosselée. La batterie colle encore lourdement aux parois du bol. Pas d'élasticité quand étirée.",
            "action": "Continuez à battre à vitesse moyenne. Le développement du gluten est essentiel — la structure doit être construite avant d'ajouter du beurre."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant et élastique. Lorsque vous soulevez une cuillère et la déposez, elle tombe dans un ruban épais, même. Un peu de gluten développé.",
            "action": "Commencez à ajouter le beurre doux une cuillère à soupe à la fois."
          },
          {
            "state": "Overdone",
            "description": "Batter est devenu très serré et élastique, formant une balle qui monte le crochet. Sens de pâte chauffante.",
            "action": "Procéder soigneusement — ajouter le beurre rapidement pour desserrer la structure avant que le gluten ne devienne trop serré."
          }
        ]
      },
      "feelCue": "Un doigt de pâte étirée entre deux doigts devrait former une membrane mince et translucide avant de déchirer — le test de vitre en miniature."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "wet_baba_batter",
        "ing_03"
      ],
      "outputState": "enriched_baba_dough",
      "instructions": "Avec le mélangeur fonctionnant sur moyenne-doux, ajouter le beurre très doux une cuillère à soupe à la fois. Attendez jusqu'à ce que chaque ajout soit entièrement incorporé avant d'ajouter le prochain — cela prend patience, environ 15 minutes au total. La pâte se desserrera considérablement au début, puis se serrera dans une pâte lisse, brillante et enrichie qui tire proprement du bol.",
      "visualCue": {
        "primaryTarget": "Une pâte lustrée, douce, très douce avec un éclat soyeux. Éloignez-vous du bol dans une masse élastique cohésive lorsque le crochet est levé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre visible en stries ou en piscines. La toux est grasse et d'apparence cassée, pas cohésive.",
            "action": "Continuer à battre — le beurre finira par émulsifier dans la pâte. Ne pas ajouter plus de farine."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, élastique. La pâte gifle les côtés du bol et ressort lorsqu'elle est cuite. Ça sent richement le beurre et la levure.",
            "action": "Couvrir le bol d'un film de collage et laisser la preuve à la température ambiante jusqu'à doubler."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est réchauffée par frottement, le beurre fait paître le bol. Légèrement collant et lâche.",
            "action": "Réfrigérer le bol pendant 15 minutes pour fermer le beurre, puis continuer."
          }
        ]
      },
      "feelCue": "La pâte enrichie finie doit se sentir comme du velours très doux et chaud — donnant et lisse, avec juste assez de corps pour être écorcée avec une cuillère plutôt que de couler librement."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "enriched_baba_dough"
      ],
      "outputState": "proofed_baba_molds",
      "instructions": "Couvrir le bol et laisser la pâte étaler à température ambiante jusqu'à doubler, 45–60 minutes. Puis beurrer les moules individuels baba (ou une boîte de muffin) généreusement. Remplir chaque moule à mi-chemin de pâte à l'aide d'un sac de tuyauterie ou d'une cuillère. Laisser à nouveau la preuve jusqu'à ce que les crêtes de pâte juste au-dessus du bord, 20-30 minutes.",
      "visualCue": {
        "primaryTarget": "Moldes remplies et bombées au-dessus de la jante comme de petits bouchons de champignons. La surface est lisse et oreiller, avec des bulles visibles sous la peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Batter atteint à peine le bord du moule, plat sur le dessus, aucune activité visible.",
            "action": "Attendez dans un endroit chaud — la pâte de baba est fortement enrichie et monte lentement. 20 à 30 minutes est la deuxième preuve minimale."
          },
          {
            "state": "Perfect",
            "description": "Battre les dômes de 1 à 2 cm au-dessus du bord du moule, lisse et oreiller. Un poke doux revient lentement.",
            "action": "Cuire immédiatement dans un four préchauffé à 190 °C (375 °F)."
          },
          {
            "state": "Overdone",
            "description": "Les dômes se sont effondrés ou la pâte a commencé à couler sur les bords du moule. Ça sent fortement l'alcool.",
            "action": "Cuire immédiatement — baba surprotégée fera encore cuire, mais la texture sera plus grossière."
          }
        ]
      },
      "feelCue": "Un moule baba éprouvé devrait se sentir léger par rapport à sa taille — la pâte a piégé tellement d'air qu'elle semble presque flotter lorsqu'elle est ramassée."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "proofed_baba_molds"
      ],
      "outputState": "baked_babas",
      "instructions": "Cuire à 190°C (375°F) pendant 18 à 22 minutes jusqu'à ce qu'il soit profondément doré sur le dessus et qu'il s'éloigne des côtés du moule. Une brochette insérée au centre devrait sortir propre. Tournez immédiatement sur une grille et laissez refroidir pendant 15 minutes avant de tremper.",
      "visualCue": {
        "primaryTarget": "De couleur dorée profonde, babas bombé avec un petit, même fissure autour de la taille où la pâte s'est cassée du moule. Ferme au toucher, ressortant immédiatement quand pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, donnant quand pressé, brochette sort avec pâte humide.",
            "action": "Retourner au four pour 3 à 5 minutes de plus. Les bacs sous-cuits s'effondreront dans la boue humide lorsqu'ils seront trempés."
          },
          {
            "state": "Perfect",
            "description": "Riche doré-brun, complètement tiré des côtés de la moisissure, ferme et printanier. Une brochette sort propre.",
            "action": "Se produire immédiatement et refroidir sur un support 15 minutes avant de tremper."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, croûte dure qui résiste à la brochette. Sens de sucre brûlé.",
            "action": "Procéder — une croûte bien cuite s'imprégne plus uniformément. Trim n'importe quel bout très sombre."
          }
        ]
      },
      "feelCue": "Un baba parfaitement cuit sonne creux quand le fond est tapoté — un coup léger, résonant, pas dense et touffu."
    },
    {
      "nodeId": "step_5",
      "action": "Mijoter",
      "inputs": [
        "ing_09",
        "ing_13",
        "ing_10",
        "ing_12"
      ],
      "outputState": "warm_syrup_base",
      "instructions": "Mélanger l'eau, le sucre de castre, le miel et la gousse de vanille dans une grande casserole peu profonde. Faire mijoter à feu moyen, en remuant jusqu'à ce que le sucre et le miel se dissolvent complètement. Laisser mijoter 2 minutes. Retirer du feu et mélanger le rhum. Gardez le sirop au chaud — il doit être chaud lorsque les bacs sont trempés.",
      "visualCue": {
        "primaryTarget": "Un sirop clair, à peine ambré, sans granulés de sucre visibles. Des odeurs de vanille et de rhum chauds. La surface brille mais ne bulle pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Granulés de sucre encore visibles, le sirop semble nuageux. Rhum ajouté alors qu'il surchauffe encore — l'alcool s'est évaporé.",
            "action": "Mélanger à feu doux jusqu'à ce que le sucre se dissout complètement, puis ajouter le rhum hors-chauffage."
          },
          {
            "state": "Perfect",
            "description": "Un sirop clair et légèrement parfumé qui coule facilement. Une goutte sur le dos d'une cuillère est mince, pas visqueuse, juste légèrement sucrée.",
            "action": "Ajouter le rhum hors-chauffe et commencer à tremper les bacs chauds."
          },
          {
            "state": "Overdone",
            "description": "Le sirop a réduit et épaissi, enrobant la cuillère comme du miel. Ça sent très caramélisé.",
            "action": "Ajouter 50 ml d'eau chaude et remuer pour revenir à un sirop léger et mobile."
          }
        ]
      },
      "feelCue": "Une goutte de sirop correct sur le poignet devrait se sentir chaud — confortablement chaud, comme un bain — jamais froid ou écalation. Le rhum doit être tout simplement perceptible comme parfum, pas aiguisé sur le nez."
    },
    {
      "nodeId": "step_6",
      "action": "Infuser",
      "inputs": [
        "baked_babas",
        "warm_syrup_base",
        "ing_08"
      ],
      "outputState": "soaked_babas",
      "instructions": "Placer le bac chaud dans la grande casserole de sirop chaud (ayant ajouté le rhum à la base du sirop). Verser le sirop en continu, en tournant le bac, pendant 2 à 3 minutes jusqu'à ce que chacun ait absorbé le sirop maximal qu'il peut contenir. Un baba complètement imbibé doit se sentir arrosé et lourd, et le sirop doit en sortir lorsqu'il est pressé doucement.",
      "visualCue": {
        "primaryTarget": "Les babas sont profondément dorées à l'acajou, visiblement gonflées par absorption de sirop. En appuyant légèrement, le sirop pleure de la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Babas se sentent secs et printaniers. Le centre est encore pâle et sec lorsqu'il est sondé. Le sirop a à peine pénétré la croûte.",
            "action": "Continuer la cuisson du sirop et tourner encore 2 minutes. Certains bacs absorbent rapidement; d'autres ont besoin d'un basting patient et répété."
          },
          {
            "state": "Perfect",
            "description": "Plump, profondément coloré, et lourd. Piscines de sirop autour de chaque baba dans la casserole. La texture est humide jusqu'au bout.",
            "action": "Transférer dans les assiettes et la cuillère de sirop supplémentaire sur juste avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Babas s'écroulent dans le sirop, perdant leur structure. Des morceaux flottant dans la poêle.",
            "action": "Soulevez doucement avec une cuillère à fente et une assiette immédiatement. Servir avec du sirop supplémentaire sur le côté."
          }
        ]
      },
      "feelCue": "Un baba bien imbibé dans la paume de votre main se sent subitement lourd — dense avec du sirop absorbé, donnant, comme presser une éponge saturée."
    },
    {
      "nodeId": "step_7",
      "action": "Fouetter",
      "inputs": [
        "ing_11"
      ],
      "outputState": "chantilly_cream",
      "instructions": "Mélanger la crème lourde très froide avec une petite quantité de sucre et d'extrait de vanille (si l'on utilise de l'extrait plutôt que du gout) dans un bol réfrigéré. Des pics mous et enflammés — Chantilly pour baba devrait être nuageux, non rigide ou de type beurre.",
      "visualCue": {
        "primaryTarget": "Des pics mous et enflammés qui s'enfoncent doucement lorsque le fouet est levé. La crème est aérée et blanche, avec une texture soyeuse plutôt que granuleuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème coule encore librement, les pics s'effondrent immédiatement. Les bassins liquides en bas.",
            "action": "Continuez à fouetter. La crème froide et un bol froid sont essentiels — remettre les deux au réfrigérateur pendant 5 minutes si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Des pics doux qui se replient doucement sur mais maintiennent une forme pendant plusieurs secondes. La crème est volumineuse et lisse.",
            "action": "Spoon ou pipe immédiatement sur les bacs trempés."
          },
          {
            "state": "Overdone",
            "description": "La crème est granuleuse, jaune-tige, qui commence à avoir l'air caillé et beurreux.",
            "action": "Plier en 2 c. à soupe de crème liquide froide pour le lisser. S'il est complètement divisé, il ne peut être réparé — recommencer."
          }
        ]
      },
      "feelCue": "Chantilly à la bonne étape se sent sans poids sur une cuillère — il déprime à peine sous le toucher le plus léger, comme de la mousse stable."
    },
    {
      "nodeId": "step_8",
      "action": "Assembler",
      "inputs": [
        "soaked_babas",
        "chantilly_cream"
      ],
      "outputState": "finished_rum_baba",
      "instructions": "Placer chaque baba trempé sur une plaque peu profonde. Spoon ou pipe un généreux dôme de la crème Chantilly directement sur le dessus. Arrosez le reste du sirop de rhum chaud autour de la base. Servir immédiatement pendant que la baba est chaude et la crème froide — le contraste est essentiel.",
      "visualCue": {
        "primaryTarget": "Une baba acajou-or profonde scintille avec du sirop, surmontée d'un nuage blanc de Chantilly. Des piscines de sirop à la base, attraper la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Baba a l'air sec et la crème a été assemblée trop loin à l'avance, ce qui l'a fait pleurer.",
            "action": "Servir le rhum babas immédiatement après avoir trempé et garnir de crème."
          },
          {
            "state": "Perfect",
            "description": "Collants, baba à la pomme avec une couronne crème neigeuse. Une flaque de sirop d'ambre à sa base. L'odeur est de rhum chaud, vanille et beurre.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Baba a été assemblé et s'est assis trop longtemps — le sirop continue à se masturber, la crème a fondu dans le sirop, la baba est devenue froide.",
            "action": "Ce plat ne tient pas. Du savon et de l'assiette à commander."
          }
        ]
      },
      "feelCue": "La baba finie doit produire immédiatement sous une cuillère, libérant une poussée de sirop de rhum chaud — la sensation d'éponge saturée et donnante est le point entier du plat."
    }
  ]
};
