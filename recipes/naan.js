export default {
  "repoId": "master_indian_naan_001",
  "parentRepoId": null,
  "slug": "naan",
  "author": "ForkRecipe Kitchen",
  "title": "Naan",
  "description": "Le classique tandoor, coaxé sur une cuisinière à la maison — un yogourt-and-yeast pâte giflé mince, blister noir-and-or sur hurlant fonte, et fini avec une paille d'ail-butter et une poignée déchirée de coriandre. Doucement, mâcher, carbonisé et oreiller à la vapeur.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "breads",
  "tags": [
    "naan",
    "indienne",
    "Pain plat",
    "levures",
    "Tangle",
    "yaourt"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (ou tout usage)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "(farine raffinée indienne)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Yogourt de lait entier (graisse pleine, ordinaire)",
      "ratioValue": 35,
      "defaultUnit": "%",
      "substitutions": [
        "yogourt grec éclairci"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait chaud ou eau chaude",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": [
        "eau chaude"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (bloom d'abord)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre ou ghee",
      "ratioValue": 6,
      "defaultUnit": "%",
      "substitutions": [
        "beurre ramolli"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre fondu (pour finissage)",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Ail, finement haché",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "graines de nigella (calonji) pour un naan ensemencé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Coriandre fraîche, hachée",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Graines de nigella",
        "Sel flocé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "shaggy_dough",
      "instructions": "fouetter la levure instantanée et le sucre dans le lait chaud et laisser reposer une minute. Dans un grand bol, mélanger la farine et le sel, puis faire un puits et ajouter le lait de levure, le yogourt et l'huile. Mélanger avec une cuillère, puis votre main, jusqu'à ce qu'il ne reste plus de farine sèche et qu'une masse rugueuse et collante se combine. L'acidité du yogourt et les sucres de lait sont ce qui donne à naan son tang et sa croûte de croissance rapide, alors ne les remplacez pas légèrement.",
      "visualCue": {
        "primaryTarget": "Une boule chaotique, tacky, légèrement collante qui s'est tirée ensemble sans laisser de taches farinées sèches dans le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La farine sèche stries toujours le fond du bol et la pâte se disloque plutôt que de tenir.",
            "action": "Dribblez dans l'eau chaude une cuillère à café à la fois jusqu'à ce que tout s'hydrate en une seule masse. La pâte de Naan devrait être plus humide que prévu."
          },
          {
            "state": "Perfect",
            "description": "Une boule cohésive et rugueuse qui colle légèrement aux doigts et au bol, mais qui tire proprement d'une main mouillée. Douce et molle, pas raide.",
            "action": "Il s'avère et pétrir, ou juste reposer cinq minutes et pétrir dans le bol."
          },
          {
            "state": "Overdone",
            "description": "La pâte est une pâte molle et soupeuse qui ne tient aucune forme.",
            "action": "Travaillez dans la farine une cuillère à soupe à la fois jusqu'à ce qu'elle s'enfonce dans une pâte collante mais maniable."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir collante et vivante contre votre paume, s'accrocher juste assez pour tirer en arrière quand vous retirez votre main. Il sent légèrement amer du yogourt et doux du lait chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "smooth_dough",
      "instructions": "Agenouillez sur une surface légèrement huilée pendant 8 à 10 minutes (ou 5 minutes dans un mélangeur avec le crochet de pâte) jusqu'à ce que la pâte devienne lisse, souple et élastique. Résistez à ajouter beaucoup de farine — gardez vos mains et le banc légèrement huilé à la place, de sorte que la pâte reste douce. Vous construisez juste assez de gluten pour que le pain puisse souffler et se déchirer en mâcher sans être dur.",
      "visualCue": {
        "primaryTarget": "Une balle lisse, satinée, légèrement collante, qui ressort lentement lorsqu'elle est pressée et passe une vitre lâche, s'étirant mince sans se déchirer immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore bosselée et rugueuse, et un poke laisse une bosse qui ne se rétablit pas. Tiré mince, il déchire immédiatement.",
            "action": "Continuez à pétrir encore quelques minutes. La pâte se transformera de racy à soyeux assez soudainement près de la fin."
          },
          {
            "state": "Perfect",
            "description": "Doux et élastique avec un léger reflet; pressé, il ressort à mi-chemin. Une pièce étirée s'amincit à la translucidité avant de déchirer.",
            "action": "Tourner dans une boule, huiler légèrement, et se mettre à monter."
          },
          {
            "state": "Overdone",
            "description": "À la main, c'est presque impossible, mais avec une machine la pâte peut se relâcher, briller, et commencer à se déchirer en cordes.",
            "action": "Arrêtez immédiatement et laissez reposer 15 minutes; le gluten se détendrea et se refermera seul."
          }
        ]
      },
      "feelCue": "Une pâte naan bien pétrie ressemble à un lobe d'oreille doux et chaud — lisse, printanière et légèrement collante, sans collant aux doigts lorsque vous lâchez."
    },
    {
      "nodeId": "step_3",
      "action": "Preuve",
      "inputs": [
        "smooth_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, couvrir et laisser quelque part au chaud pour se lever jusqu'à ce qu'elle ait pratiquement doublé — environ 1 à 2 heures selon votre cuisine. Une montée pleine et lente approfondit la saveur, alors ne la précipitez pas avec trop de chaleur. En levant, dégonflez doucement, divisez en 6 à 8 morceaux égaux, autour chacun dans une boule, et reposez-les couverts pendant encore 15 minutes afin que le gluten se détende et la pâte se roule sans se battre.",
      "visualCue": {
        "primaryTarget": "Une pâte gonflée et dôme a grosso modo doublée de la taille, avec des bulles en dessous, qui tient une bosselure lente lorsqu'elle est cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte a à peine grandi et ressort tout droit lorsqu'elle est cuite, avec peu de bulles.",
            "action": "Donne-lui plus de temps et de chaleur. Une cuisine fraîche peut facilement doubler le temps de montée — la patience rend Naan plus léger."
          },
          {
            "state": "Perfect",
            "description": "Presque doublé, bombé, et jiggly, avec des bulles visibles; une bosse se remplit lentement et seulement en partie.",
            "action": "Déflacez doucement, divisez, billez et reposez les portions avant de rouler."
          },
          {
            "state": "Overdone",
            "description": "La pâte a cramponné et s'est effondrée, sent fortement aigre et boueux, et la surface est molle et pochée.",
            "action": "Recollez-le fermement, reformez-le et continuez — il fera encore bien cuire, juste avec une saveur plus tangente et plus fermentée."
          }
        ]
      },
      "feelCue": "Une pâte bien protégée se sent légère et aérée dans la main, presque sans poids pour sa taille, et soupire doucement lorsque vous pressez le gaz hors de lui."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "risen_dough"
      ],
      "outputState": "stretched_naan",
      "instructions": "Réglez une poêle en fonte lourde ou un tawa à feu vif pendant 5 minutes jusqu'à ce qu'il soit chaud au fumage. Pendant ce temps, sur une surface légèrement farinée, rouler ou étirer chaque boule dans une goutte lacrymogène ou ovale d'environ 5 à 6 pouces de long et une généreuse 3 à 4 millimètres d'épaisseur, la laissant légèrement plus épaisse qu'une tortilla. Ne roulez pas le papier-mince; naan a besoin de corps pour souffler. Badigeonner légèrement le haut de l'eau juste avant qu'il frappe la casserole — l'humidité l'aide à saisir et à vapeur.",
      "visualCue": {
        "primaryTarget": "Une goutte de pâte inégale, plus épaisse au milieu et s'amenuisant aux bords, souple et extensible avec quelques petites bulles de surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roulé trop épais et petit, le naan reste dense et pâteux et ne va pas bien clocher.",
            "action": "Étirez-le un peu plus fin et plus large; visez un ovale à peu près la longueur de votre main."
          },
          {
            "state": "Perfect",
            "description": "Une goutte lacrymogène irrégulière avec un peu d'épaisseur laissée en elle, douce et souple, parsemée de minuscules bulles de gaz.",
            "action": "Badigeonner le dessus d'eau et le poser sur la poêle chaude."
          },
          {
            "state": "Overdone",
            "description": "Trop mince et translucide, avec des trous déchirés.",
            "action": "Pincez les trous fermés ou ramassez et re-ballez la pâte, reposez-vous quelques minutes, et roulez encore plus doucement."
          }
        ]
      },
      "feelCue": "La pâte étirée doit se sentir fraîche, douce, et un toucher élastique, se remorquant doucement en la tirant plus large. Vous entendrez l'ondulation de la poêle avec la chaleur à l'instant une goutte d'eau s'est éclaboussée et disparaît."
    },
    {
      "nodeId": "step_5",
      "action": "Sear",
      "inputs": [
        "stretched_naan"
      ],
      "outputState": "blistered_naan",
      "instructions": "Placez le naan côté humide sur la casserole sèche et fumante. En moins d'une minute, il s'envolera avec de la vapeur et le dessous s'carbonera dans des taches sombres — couvrir avec un couvercle pendant 30 secondes pour piéger la chaleur et encourager la bouffée. Lorsque le haut est bouillonnant et que le bas est blister noir et or, retourner et cuire le deuxième côté 30 à 60 secondes jusqu'à ce qu'il soit repéré aussi. Pour un char encore plus tandoor, tenez le naan gonflé avec des pinces directement sur une flamme de gaz ouverte pendant quelques secondes. Gardez les pains finis enveloppés dans une serviette pour rester doux.",
      "visualCue": {
        "primaryTarget": "Un pain plat fulgurant, tacheté de léopard, carbonisé dans des taches sombres, doré entre elles, doux et à l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le naan est plat et pâle sans taches, et la surface semble toujours crue et pâteuse.",
            "action": "La poêle n'est pas assez chaude — laissez-la réchauffer, et ne bougez pas le naan; donnez-lui le temps de souffler et de colorer avant de retourner."
          },
          {
            "state": "Perfect",
            "description": "Grandes bulles de vapeur, taches carbonisées profondes sonnées d'or des deux côtés, et un pain souple et souple qui se plie sans craquelure.",
            "action": "Tirez-le, brossez immédiatement avec l'ail-ghee, et enveloppez au chaud."
          },
          {
            "state": "Overdone",
            "description": "Le naan est raide, uniformément sombre à noir, et craquant plutôt que doux.",
            "action": "Il est passé au-delà pliable en croustillant — encore savoureux déchiré en morceaux, mais baisser la chaleur et raccourcir le temps sur le prochain."
          }
        ]
      },
      "feelCue": "Écoutez le sizzle-and-hiss la seconde la pâte touche le métal, puis regardez le dôme et trembler avec la vapeur piégée. Un naan parfait se fléchit doucement quand on le plie; un robinet sur le fond semble sec et grillé, pas mouillé."
    },
    {
      "nodeId": "step_6",
      "action": "Finition",
      "inputs": [
        "blistered_naan",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_naan",
      "instructions": "Chauffer le ghee ou le beurre fondu avec l'ail haché jusqu'à ce qu'il soit parfumé — ne pas faire revenir l'ail. Le moment où chaque naan sort du feu, le brosser généreusement avec l'ail-ghee afin qu'il trempe dans la miette chaude et ouverte, puis disperser avec la coriandre hachée. Servir immédiatement, empilé et enveloppé dans une serviette propre pour tenir leur douceur et la vapeur.",
      "visualCue": {
        "primaryTarget": "Un naan à l'ail brillant, le beurre pooling dans ses cratères carbonisés, parsemé de coriandre vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain semble terne et sec, le beurre assis sur le dessus sans couler dedans.",
            "action": "Badigeonner pendant qu'il fait chaud pour que la graisse fond dans la miette — le naan froid ne la boira pas de la même façon."
          },
          {
            "state": "Perfect",
            "description": "Gloire et parfumée, le beurre d'ail absorbé dans une surface molle et blister et roussée d'herbes.",
            "action": "Empiler, envelopper une serviette et servir à la fois avec le curry ou le dal."
          },
          {
            "state": "Overdone",
            "description": "Le naan est sodden et gras, lissé avec du beurre baumé qu'il ne peut absorber.",
            "action": "Soulagez le pinceau sur le prochain — un léger balayage est beaucoup. Bloquez l'excès et servez."
          }
        ]
      },
      "feelCue": "Le naan fini devrait se sentir doux, chaud et souple, libérant une vague d'ail grillé et de beurre pendant que vous le déchirez. La miette se détache en brins boueux et mâchés plutôt que de s'effondrer."
    }
  ]
};
