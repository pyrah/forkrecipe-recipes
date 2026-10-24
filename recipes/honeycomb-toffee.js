export default {
  "repoId": "master_british_honeycomb_toffee_001",
  "parentRepoId": null,
  "slug": "honeycomb-toffee",
  "author": "ForkRecipe Kitchen",
  "title": "Choux d'abeilles",
  "description": "Sucre et sirop d'or cuits à l'étape du crack dur, puis considérablement aérés par une seule cuillère à café de bicarbonate de soude qui transforme les bonbons fondus en une mousse volcanique montante de verre de caramel — croquant, aéré et dangereusement addictif, surtout lorsqu'ils sont broyés et trempés dans du chocolat noir.",
  "cuisine": "Anglais",
  "culture": "Anglais",
  "category": "desserts",
  "tags": [
    "dessert",
    "bonbons",
    "britanniques",
    "Caramel",
    "végétalien",
    "Sans gluten",
    "caramel"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 1720,
  "forks": 148,
  "contributors": 35,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-02-15",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Sucre blanc granulé",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sirop d'or (ou sirop de maïs léger)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "sirop de maïs léger",
        "sirop de glucose"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Bicarbonate de soude",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "sugar_solution",
      "instructions": "Étaler un plateau de cuisson profond (au moins 5 cm de côté) avec du parchemin huilé. Placer le sucre, le sirop d'or et l'eau dans une grande casserole profonde à fond lourd — la casserole doit être au moins 4x plus grande que le mélange, car elle va s'étendre violemment lorsque le bicarbonate de soude est ajouté. Incorporer à feu moyen jusqu'à dissolution complète du sucre. Une fois dissous, arrêtez de remuer entièrement. Clipez un thermomètre à bonbons sur le côté.",
      "visualCue": {
        "primaryTarget": "Limpidité de la solution de sucre avant ébullition",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des granules de sucre encore visibles au fond et aux bords de la poêle. La solution est granuleuse.",
            "action": "Continuer à remuer à feu doux. Chaque grain doit se dissoudre avant d'augmenter la chaleur."
          },
          {
            "state": "Perfect",
            "description": "La solution est complètement limpide et lisse – pas de granules visibles. A l'apparence d'eau ambre très pâle. Les bords commencent juste à buller.",
            "action": "Arrête de remuer. Augmenter la chaleur à moyenne-élevée et fixer le thermomètre."
          },
          {
            "state": "Overdone",
            "description": "La solution a été agitée après le début de l'ébullition. Des cristaux blancs se forment sur le côté de la casserole: la cristallisation des graines commence.",
            "action": "Ajouter 1 c. à soupe d'eau et remuer une fois pour dissoudre les cristaux, puis arrêter de remuer en permanence."
          }
        ]
      },
      "feelCue": "Exécutez une cuillère propre dans la solution refroidie et non bouillie — elle devrait se sentir parfaitement lisse, comme de l'eau chaude sans grain."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "sugar_solution"
      ],
      "outputState": "hard_crack_caramel",
      "instructions": "Faire bouillir la solution sans remuer jusqu'à ce qu'elle atteigne 149-154 C (300-310 F) — le stade de fissure dure. Ne partez pas. La température augmente lentement au début, puis s'accélère considérablement au-dessus de 130 °C. À la température cible, le caramel sera un ambre profond, la couleur du miel très foncé. Retirer immédiatement du feu. Faites mesurer le bicarbonate de soude dans un petit bol avant de commencer — vous n'aurez pas le temps de le mesurer une fois la température atteinte.",
      "visualCue": {
        "primaryTarget": "Couleur caramel à la température cible",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel est d'or pâle à 140 °C. Une goutte sur une plaque froide tire dans un fil souple plutôt qu'un dard dur.",
            "action": "Continuer la cuisson sans remuer. La fissure dure est toujours à 9-14 degrés."
          },
          {
            "state": "Perfect",
            "description": "Caramel ambré profond à 149-154 C. Une goutte sur une assiette froide se brise immédiatement lorsqu'elle est touchée — aucune pliabilité. Sensation intense de caramel avec un léger bord amer.",
            "action": "Retirer immédiatement du feu. Ajouter le sel et le bicarbonate de soude sans tarder."
          },
          {
            "state": "Overdone",
            "description": "Caramel est brun très foncé, proche du noir. La fumée acride commence à augmenter. Température supérieure à 160 C.",
            "action": "Il fait trop sombre. Jeter et recommencer — le caramel surcuit aura un goût extrêmement amer."
          }
        ]
      },
      "feelCue": "Déposez une petite quantité de caramel dans l'eau froide — il devrait durcir instantanément et se briser comme du verre quand il est plié. Si elle fléchit sans casser, vous n'êtes pas encore à la fissure."
    },
    {
      "nodeId": "step_3",
      "action": "Faire infuser",
      "inputs": [
        "hard_crack_caramel",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_honeycomb_toffee",
      "instructions": "Travailler immédiatement et très rapidement, fouetter le sel fin et faire cuire la soude dans le caramel chaud. Le mélange réagira violemment, s'étendant dans une mousse volcanique massive, sifflante, de bulles ambres qui s'élève de la casserole. Arrêtez de fouetter après 3-4 secondes (l'over-whisking dégonfle les bulles) et versez immédiatement dans l'étain préparé. Ne le répandez pas, qu'il coule et s'installe naturellement, en préservant la structure du nid d'abeille. Ne pas le toucher ou le déranger pendant 30 à 40 minutes jusqu'à ce qu'il soit complètement froid et réglé.",
      "visualCue": {
        "primaryTarget": "Dilatation de mousse et structure de bulles pendant la coulée",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mousse minimale — le caramel à peine élargi. Très peu de bulles dans la dalle refroidie.",
            "action": "Le bicarbonate de soude peut avoir été insuffisamment agité. La prochaine fois, assurez-vous qu'il est entièrement incorporé dans la deuxième fenêtre 3–4."
          },
          {
            "state": "Perfect",
            "description": "Une expansion volcanique spectaculaire — le mélange triple en volume en 2 secondes. La dalle set a un beau nid d'abeille dense de bulles ambre visibles du bord coupé. Golden-brun, lumière, et éclatant quand tapoté.",
            "action": "En morceaux irréguliers. Plongez dans du chocolat noir trempé pour la pleine expérience."
          },
          {
            "state": "Overdone",
            "description": "La mousse a été perturbée pendant le réglage. La structure des nids d'abeilles s'est effondrée: la dalle est plus dense et moins aérée que prévu.",
            "action": "Toujours délicieux. Crusher complètement et utiliser comme garniture pour la crème glacée ou mélanger au chocolat."
          }
        ]
      },
      "feelCue": "Quand il fait complètement froid, prenez une pièce et tapez - la fermement contre le bord de l'étain — il devrait se briser avec une fissure propre et vitreuse et le son devrait sonner, et non le bruit. Le dard devrait être léger presque au-delà de la croyance pour sa taille."
    }
  ]
};
