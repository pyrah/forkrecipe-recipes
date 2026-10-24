export default {
  "repoId": "master_brazilian_pao-de-queijo_001",
  "parentRepoId": null,
  "slug": "pao-de-queijo",
  "author": "ForkRecipe Kitchen",
  "title": "Pão de Queijo",
  "description": "Bouffées de fromage sans gluten de Minas Gerais — amidon de tapioca échaudé avec du lait chaud et de l'huile, lié à l'œuf, et chargé de fromage salé vif, cuit dans des sphères creuses, élastiques et mâcheuses avec une fine coquille dorée qui éclate sur la première bouchée.",
  "cuisine": "Brésil",
  "culture": "Minas Gerais",
  "category": "breads",
  "tags": [
    "pain au fromage",
    "Sans gluten",
    "tapioca",
    "Brésilien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 6,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Amidon de tapioca (polvilho azedo ou polvilho doce)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de tapioca"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine (moins riche)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre ou beurre fondu",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Œufs, température ambiante",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Parmesan ou Pecorino Romano, finement râpé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "queijo minas curado (traditionnel)",
        "cheddar vieilli"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_06"
      ],
      "outputState": "scalded_liquid",
      "instructions": "Mélanger le lait, l'huile et le sel dans une petite casserole. Chauffer à feu moyen-vif, en remuant de temps en temps, jusqu'à ce que le mélange arrive à un ébullition complet et en roulis. Il doit s'agir d'un véritable ébullition, et non pas simplement d'une mijotation. La chaleur est essentielle pour la gélatinisation de l'amidon de tapioca dans la prochaine étape.",
      "visualCue": {
        "primaryTarget": "Rapide, plein de bulles sur toute la surface. Le lait et l'huile sont entièrement combinés en un liquide blanc légèrement mousseux. Pas de séparation visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est en vapeur et quelques bulles apparaissent aux bords. Le centre n'est pas encore bouillant.",
            "action": "Augmenter la chaleur. Seule une véritable ébullition complète gélatinisera correctement le tapioca — une chaleur partielle donne une pâte gommée qui ne soufflera pas."
          },
          {
            "state": "Perfect",
            "description": "Faire bouillir avec des petites bulles rapides sur toute la surface. La mousse de lait s'est formée aux bords.",
            "action": "Verser immédiatement sur l'amidon de tapioca dans un bol et remuer rapidement."
          },
          {
            "state": "Overdone",
            "description": "Le lait a commencé à brûler sur le fond — vous pouvez le sentir. Des taches brunes visibles.",
            "action": "Jeter s'il est fortement brûlé. Si juste commencer à brunir au fond, verser dans le bol d'amidon rapidement et remuer rapidement."
          }
        ]
      },
      "feelCue": "Le liquide doit sentir propre et chaud, comme un toast au lait — non brûlé. Chauffer votre paume au-dessus de la vapeur sans toucher : la vapeur doit se sentir agressivement chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "scalded_liquid"
      ],
      "outputState": "scalded_dough",
      "instructions": "Placer l'amidon de tapioca dans un grand bol à mélanger. Verser le mélange bouillant d'huile de lait sur l'amidon en même temps et remuer immédiatement vigoureusement avec une cuillère en bois ou une spatule. L'amidon gélatinisera instantanément — le mélange se transforme d'une poudre sèche à une masse collante, translucide, un peu élastique. Incorporer jusqu'à ce qu'il ne reste plus de poches sèches d'amidon. La pâte sera chaude et extrêmement collante. Laisser refroidir jusqu'à ce qu'il soit confortable de toucher (environ 10-15 minutes) avant d'ajouter les œufs.",
      "visualCue": {
        "primaryTarget": "Pâte cohésive, collante, légèrement translucide, sans poches visibles d'amidon blanc sec. La texture est extensible et pâteuse. La couleur est blanc cassé à très légèrement dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poches blanches d'amidon sec restent dans le bol. Certaines zones sont gélatinisées et d'autres sont en poudre brute.",
            "action": "Mélanger plus vigoureusement, en ciblant les poches sèches. Ajouter une cuillère à soupe d'eau chaude si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, brillant, pâte élastique. S'étirent en cordes quand la cuillère est levée. Pas de taches sèches nulle part.",
            "action": "Laisser refroidir à une température confortable au toucher avant d'ajouter des œufs."
          },
          {
            "state": "Overdone",
            "description": "Pas vraiment possible ici — la gélatinisation est immédiate et complète.",
            "action": "Passez au refroidissement."
          }
        ]
      },
      "feelCue": "Plongez légèrement un doigt dans la pâte — il doit se sentir comme une colle extrêmement épaisse et chaude: collante, élastique et extensible. Il tirera dans les cordes quand votre doigt se lèvera."
    },
    {
      "nodeId": "step_3",
      "action": "Pétrir",
      "inputs": [
        "scalded_dough",
        "ing_04",
        "ing_05"
      ],
      "outputState": "cheese_dough",
      "instructions": "Une fois la pâte refroidie au chaud (pas chaude — la pâte chaude brouillait les œufs), ajouter les œufs un à la fois. Battre le premier oeuf dans la pâte avec une cuillère en bois ou un mélangeur de support avec une fixation à la pagaie — il aura l'air cassé et séparé au début. Continuez à mélanger vigoureusement jusqu'à ce que l'œuf soit entièrement incorporé et que la pâte soit à nouveau lisse avant d'ajouter l'oeuf suivant. Une fois les deux œufs introduits, ajouter le fromage râpé en deux additions et mélanger jusqu'à distribution uniforme. La pâte finale sera douce, collante et légèrement élastique.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et légèrement collante qui tient sa forme lorsqu'elle est écorcée mais est trop humide pour rouler à la main. Le fromage est visible comme de petites taches dorées. La couleur est jaune pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oeuf est visible sous forme de stries jaunes qui ne sont pas entièrement intégrées. La toux a l'air cassée ou caillé.",
            "action": "Continuez à mélanger. La pâte sera toujours cassée temporairement lorsque les œufs sont ajoutés à une pâte d'amidon chaude — elle reviendra ensemble."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, pâte molle. Des gouttes de la cuillère dans un glabre lent et épais. Le fromage est également distribué.",
            "action": "Réfrigérer 15 minutes si elle est très molle, puis faire cuire."
          },
          {
            "state": "Overdone",
            "description": "Le fromage a été surmélangé et a fondu entièrement dans la pâte au lieu de rester en morceaux distincts. La toux a l'air grasse.",
            "action": "Cela va encore cuire correctement. La saveur sera légèrement différente mais la texture sera fine."
          }
        ]
      },
      "feelCue": "Faites une cuillère et déposez - la dans le bol; elle devrait tomber légèrement dans un ruban et un monticule lent et lourd. S'il fonctionne comme du liquide, il faut le refroidir. S'il est trop raide pour scoop, il a besoin d'un jet de lait."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "cheese_dough"
      ],
      "outputState": "finished_pao_de_queijo",
      "instructions": "Préchauffer le four à 200 C (400 F). Lignez deux feuilles de cuisson avec du papier parchemin. À l'aide de deux cuillères ou d'une petite cuillère à biscuits, fractionner la pâte en boules d'environ 3 à 4 cm de diamètre et placer 5 cm d'écart sur les feuilles. La pâte soufflera significativement. Cuire au four pendant 20 à 25 minutes, en tournant une fois la poêle à mi-chemin, jusqu'à ce que les bouffées soient profondément dorées et se sentent creuses lorsqu'elles sont tapées. Ne pas ouvrir le four dans les 15 premières minutes — la vapeur à l'intérieur des bouffées crée la structure intérieure creuse.",
      "visualCue": {
        "primaryTarget": "Des bouffées d'or qui ont augmenté à 1,5 fois leur taille brute. Les surfaces sont fêlées et irrégulières en haut. Le dessous est doré et s'élève proprement du parchemin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bouffées pâles et pétillantes sans fissuration. Toujours doux quand pressé. Un robinet sur le fond semble terne et dense.",
            "action": "Retourner au four pendant 4 minutes. Pale pão de queijo est gummy à l'intérieur et s'effondre lorsqu'il est retiré de la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Golden-brun, surface irrégulière avec des fissures. C'est creux. La bouffée est ferme au toucher et ressort légèrement.",
            "action": "Retirer du four et manger immédiatement. Pão de queijo est à la texture maximale dans les 5 premières minutes."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, surface dure. Le tapotage semble creux, mais la coquille est fragile plutôt que croquante. Le fromage a trop connu les fissures.",
            "action": "L'intérieur est probablement encore bon. La croûte extérieure peut être légèrement amère, l'accepter ou la briser et ne manger que l'intérieur."
          }
        ]
      },
      "feelCue": "Pressez doucement un pao de queijo chaud entre deux doigts — l'extérieur doit être croquant et mince, éclatant légèrement sous pression, avec un intérieur élastique et mâché qui s'étend comme la mozzarella. C'est la texture de la signature."
    }
  ]
};
