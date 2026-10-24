export default {
  "repoId": "master_italian_frittata_001",
  "parentRepoId": null,
  "slug": "frittata",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Frittata italien",
  "description": "Un disque d'œufs épais et doré, aux bords, crépuscule au cœur, cloué de tout ce qu'offre la saison, fini au four jusqu'à ce que le dessus fleurisse dans les îles de bronze.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "eggs",
  "tags": [
    "œufs",
    "Italien",
    "végétarien",
    "Sans gluten",
    "brunch",
    "cuits"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Œufs (gros)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier ou crème lourde",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine non sucré"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre non salé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Parmigiano-Reggiano, finement râpé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Pecorino Romano"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Légumes de saison (zucchini, poireau, artichaut)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge et poivron",
        "épinards et ricotta"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, approximativement déchiré",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "basilic frais",
        "menthe fraîche"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "egg_batter",
      "instructions": "Couper les œufs dans un grand bol. Ajouter le lait ou la crème, le Parmigiano, le persil, le sel et le poivre. Froment fouetter pendant 30 à 40 secondes jusqu'à ce qu'il soit complètement uniforme — pas de stries de blanc, pas de poches de jaune non cassé. La pâte doit être d'un jaune pâle sans soudure.",
      "visualCue": {
        "primaryTarget": "Une mousse uniforme d'or pâle à travers la surface — pas de fils transparents de blanc, pas de tourbillon jaune orange restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de jaune encore visibles, le blanc apparaît encore comme des fils plus légers.",
            "action": "Continuez à fouetter — les protéines doivent être entièrement incorporées pour un réglage uniforme."
          },
          {
            "state": "Perfect",
            "description": "Tout à fait homogène jaune pâle, à peine mousseux à la surface, sent propre et oeuvré avec du fromage en dessous.",
            "action": "Réserver et préparer la casserole."
          },
          {
            "state": "Overdone",
            "description": "Surbattez-vous à une mousse épaisse et serrée qui a piégé trop d'air.",
            "action": "Laisser reposer et régler pendant 5 minutes pour libérer quelques bulles — il sera réglé avec une texture légèrement aérée mais fonctionne toujours."
          }
        ]
      },
      "feelCue": "Plongez votre bout de doigt — il devrait se sentir soyeux et légèrement visqueux, comme une fine crème anglaise, pas aqueuse."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_05"
      ],
      "outputState": "softened_vegetables",
      "instructions": "Chauffer l'huile d'olive dans une poêle sécuritaire de 24 cm (10 pouces) à feu moyen. Ajouter les légumes et cuire en remuant occasionnellement jusqu'à ce que l'humidité soit tendre et que l'humidité libérée s'évapore — environ 5 à 8 minutes. La casserole doit être sèche; l'eau dans la casserole vapeur la frittata au lieu de la mettre. Assaisonner légèrement.",
      "visualCue": {
        "primaryTarget": "Les légumes se sont effondrés et légèrement dorés aux bords, le plancher de la casserole visible et sec avec seulement un éclat d'huile restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore crus et fermes, libérant de l'humidité.",
            "action": "Continuer la cuisson à feu moyen jusqu'à ce que le liquide s'évapore. Les légumes crus vaporisent la pâte à oeufs et empêchent un ensemble propre."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont tendres, légèrement caramélisés aux bords, l'huile brille. Pas de liquide.",
            "action": "Étendre uniformément la poêle et verser dans la pâte à oeufs."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont brun foncé, commençant à l'omble. Des notes amères domineront la frittata.",
            "action": "Réduire la chaleur et ajouter une éclaboussure d'eau pour arrêter le brunissement. La frittata sera encore bonne — une petite saveur de caramel est forgivable."
          }
        ]
      },
      "feelCue": "Appuyez sur une pièce de légumes contre la poêle — elle devrait céder sans résistance et ne laisser qu'une mousse d'or sec, et non une frottis humide."
    },
    {
      "nodeId": "step_3",
      "action": "Faire prendre",
      "inputs": [
        "egg_batter",
        "softened_vegetables"
      ],
      "outputState": "stovetop_frittata",
      "instructions": "Préchauffer le four à 190 C (375 F). Verser la pâte à oeufs sur les légumes dans la poêle. Réduire le feu à moyen-doux. Cuire sans gêne — ne pas remuer, ne pas couvrir — jusqu'à ce que les bords aient complètement mis et tourné mat, et le centre tremble encore comme une gelée à peine portée quand la poêle est légèrement bouchée. Cela prend 5 à 7 minutes.",
      "visualCue": {
        "primaryTarget": "Une bordure de 2 à 3 cm d'œufs opaques entièrement sertis tout autour de la jante, avec un dôme central brillant et à l'aspect liquide qui oscille mais qui ne slosh.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oeuf reste liquide jusqu'au bord même de l'œuf — pas de limite fixe du tout. Toute la surface s'évanouit lorsqu'elle est bouchée.",
            "action": "Continuer sur la cuisinière jusqu'à ce que la jante soit clairement mate et réglée avant de passer au four."
          },
          {
            "state": "Perfect",
            "description": "Jante claire mat, centre brillant. Lorsque la casserole est bouchée, le centre se déplace comme une seule masse qui vibre, pas des ondulations individuelles.",
            "action": "Transférer immédiatement dans le four préchauffé."
          },
          {
            "state": "Overdone",
            "description": "Toute la surface s'est posée sur la cuisinière — aucun centre brillant ne reste. Les bords peuvent commencer à souffler et à s'éloigner.",
            "action": "Passer le four ou couper le temps du four à 2 minutes maximum — la frittata sera encore bonne mais aura une texture plus ferme et plus sèche."
          }
        ]
      },
      "feelCue": "Le bord fixé doit se sentir comme la surface d'une crème cuite — pas de donner quand vous le touchez avec un bout de doigt, mais le centre donne encore à la presse la plus légère."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "stovetop_frittata"
      ],
      "outputState": "finished_frittata",
      "instructions": "Transférer la poêle au four et cuire de 8 à 12 minutes jusqu'à ce que le centre soit complètement réglé et que la surface supérieure ait développé des taches de bronze dispersées. La frittata souffle légèrement dans le four, puis se dépose. Laisser reposer dans la poêle pendant 5 minutes avant de la trancher — il continue la cuisson de la chaleur résiduelle et les firmes à une texture propre.",
      "visualCue": {
        "primaryTarget": "Une surface supérieure entièrement mate et plane avec des îles de bronze pâle dispersées et un dôme doux et uniforme. Pas de taches de liquide brillant nulle part.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre a encore une lécherette brillante — se branle lorsque la casserole est tapée. Haut pâle sans couleur.",
            "action": "Retourner au four 3 minutes de plus. Testez encore avec un doux tremblement."
          },
          {
            "state": "Perfect",
            "description": "Surface entièrement mate avec de légères taches de bronze. Pan agité doucement ne montre aucun mouvement — le disque entier se déplace comme une seule pièce solide. Les bords tirent légèrement de la poêle.",
            "action": "Retirer du four, reposer 5 minutes, puis glisser sur une planche et trancher en quartiers."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est profondément bruni et commence à craquer. Les bords s'éloignent visiblement et se froncent vers le haut.",
            "action": "La frittata est sèche mais toujours comestible. Servir avec une salade verte habillée de vinaigrette acide pour compenser."
          }
        ]
      },
      "feelCue": "Reposez la paume de votre main légèrement sur la surface — il devrait y avoir une chaleur douce rayonnant vers le haut, mais aucun sentiment de mouvement liquide en dessous. La frittata devrait se sentir comme appuyer sur une éponge ferme, pas un ballon d'eau."
    }
  ]
};
