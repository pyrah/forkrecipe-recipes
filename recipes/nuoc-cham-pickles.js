export default {
  "repoId": "master_vietnamese_nuocchamspickles_001",
  "parentRepoId": null,
  "slug": "nuoc-cham-pickles",
  "author": "ForkRecipe Kitchen",
  "title": "Légumes à pick-up rapide vietnamiens",
  "description": "Rubans de daikon et de carottes marinés dans de la saumure sucrée de vinaigre de riz, croquants, brillants, acidulés et essentiels aux côtés de banh mi, de pho ou de toute protéine grillée.",
  "cuisine": "Vietnamiens",
  "culture": "Vietnamiens",
  "category": "fermented",
  "tags": [
    "vietnamese",
    "marinés",
    "Daïkon",
    "Carotte",
    "BANH-MI",
    "cueillir rapidement",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 4,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Radis de Daikon, pelés et julienned",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "navets blancs",
        "radis de pastèque"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Carottes pelées et juliennes (coupes de mâts)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "jeune panais"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vinaigre de riz non désaisonnalisé",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc (poivre)",
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin non iodé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Chili des yeux d'oiseau rouge frais, tranché finement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de chili rouge séché",
        "fresno chili"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sel",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "salted_vegetables",
      "instructions": "Mélanger le daikon julienned et la carotte avec 1 cuillère à café du sel fin dans un grand bol. Bien mélanger et laisser reposer 10 minutes. Cela tire l'excès d'eau des légumes par osmose, qui concentre leur saveur, améliore leur texture, et permet à la saumure de mariner de pénétrer plus uniformément.",
      "visualCue": {
        "primaryTarget": "Après 10 minutes: les légumes ont libéré une petite quantité de liquide dans le bol. Le daikon et la carotte sont légèrement flétris et plus souples, mais pas encore boiteux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucun liquide libéré. Légumes encore rigides et à l'eau.",
            "action": "Jette encore et attends plus longtemps. Si la pièce est froide, le processus osmotique est plus lent — passer à un endroit plus chaud."
          },
          {
            "state": "Perfect",
            "description": "Une petite flaque de liquide s'est formée, les légumes sont pliables et légèrement translucides aux bords, mais ont toujours une excellente touche.",
            "action": "Presser et rincer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les légumes ont été salés trop longtemps (plus de 30 minutes) et sont très boiteux, libérant de grandes quantités de liquide. Eauux et doux.",
            "action": "Rincer soigneusement et procéder — les cornichons seront plus doux que l'idéal, mais encore comestibles."
          }
        ]
      },
      "feelCue": "Ramassez un brin de daikon et penchez - il devrait légèrement fléchir et tenir la courbe plutôt que de se casser rigidement, mais il ne doit pas tomber limpidement. Cet état est parfait."
    },
    {
      "nodeId": "step_2",
      "action": "Poignée",
      "inputs": [
        "salted_vegetables"
      ],
      "outputState": "rinsed_vegetables",
      "instructions": "Rassemblez les légumes salés dans vos mains et pressez fermement sur l'évier, expulsant autant d'eau que possible. Rincer brièvement sous l'eau froide, puis presser à nouveau. Cette étape élimine l'excès de sel et les composés amers et sulfureux libérés du daikon pendant le salage. Goûtez un brin — il devrait goûter légèrement salé, pas agressivement.",
      "visualCue": {
        "primaryTarget": "Légumes pressés, rincés qui semblent brillants et propres. Le daikon doit être de nouveau blanc (non jauni). Pas de liquide de mise en réserve.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes libèrent encore du liquide lorsqu'ils sont pressés, ils ont encore un goût très salé et légèrement amer.",
            "action": "Rincez et pressez encore. Une pression insuffisante dilue la saumure de décapage et rend le produit fini soggy."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont assez secs pour qu'aucune eau ne coule lorsqu'elle est pressée. Saveur propre et douce. Légère translucidité du flétrissement.",
            "action": "Emballez dans le bocal avec le chili et versez la saumure."
          },
          {
            "state": "Overdone",
            "description": "Légumes pressés trop agressivement et sont devenus mats et compressés, perdant leur texture individuelle de brin.",
            "action": "Séparer les brins en tremblant dans un bol avant d'emballer. Ils vont se détendre dans la saumure."
          }
        ]
      },
      "feelCue": "Une poignée de daikon rincé et pressé devrait se sentir sec dans votre paume, comme serrer un chiffon, pas une éponge mouillée. Si le liquide coule encore, pressez à nouveau."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pickling_brine",
      "instructions": "Mélanger le vinaigre de riz, le reste du sel, le sucre et l'eau chaude dans un bol ou une petite casserole. Mélanger jusqu'à ce que le sucre et le sel se dissolvent complètement — aucune chaleur n'est strictement nécessaire puisque l'eau chaude (pas bouillante) fait le travail. La saumure doit goûter assidûment sucrée-saure-salée dans un balance 3:4:2 : puant mais pas douloureux.",
      "visualCue": {
        "primaryTarget": "Saumure complètement claire qui mijote légèrement du sucre dissous. Sens de vinaigre de riz propre avec une note sucrée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les granules de sucre ou de sel sont encore visibles au fond lorsque le bol est agité.",
            "action": "Incorporer plus longtemps ou réchauffer doucement si nécessaire. Le sucre non dissous crée une douceur inégale."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement clair, pas de résidu cristallin. Goûte comme une sauce sucrée équilibrée – acide mais tempérée par la douceur.",
            "action": "Verser les légumes emballés immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La saumure a été chauffée à ébullition et réduite, concentrant l'acidité et faisant le sucre caraméliser légèrement, changeant la couleur en or.",
            "action": "Diluer avec un jet d'eau froide pour restaurer le volume prévu. Une saumure claire et pâle est la cible."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillère: il devrait y avoir un coup citrique vif et citrique-comme l'acide, suivi immédiatement d'une finale douce, ronde et un subtil sous-ton sel — jamais plat, jamais unidimensionnel."
    },
    {
      "nodeId": "step_4",
      "action": "Infuse",
      "inputs": [
        "rinsed_vegetables",
        "ing_07",
        "pickling_brine"
      ],
      "outputState": "brined_vietnamese_pickles",
      "instructions": "Emballez le daikon pressé et la carotte dans un pot propre, en tupant le chili tranché. Verser la saumure jusqu'à ce que les légumes soient complètement submergés. Appuyez doucement sur tous les brins flottants. Scellez le pot de façon souple et laissez reposer à température ambiante pendant 30 minutes minimum.",
      "visualCue": {
        "primaryTarget": "Daikon et les brins de carottes entièrement submergés dans la saumure claire. Des tranches de chili rouge sont visibles partout. Les légumes ont déjà commencé à prendre une translucence pâle de l'acide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saumure ne couvre qu'une partie des légumes. Les fils supérieurs sont exposés à l'air.",
            "action": "Appuyez fermement sur les légumes et ajoutez plus de saumure si nécessaire. Les légumes exposés ne piquent pas et peuvent décolorer."
          },
          {
            "state": "Perfect",
            "description": "Tous les légumes submergés, saumure 1 cm au-dessus de la masse végétale. Du Chili visible. La saumure est claire et les légumes commencent à tourner de blanc vif/orange à légèrement translucide.",
            "action": "Sceller librement et reposer 30 minutes à température ambiante, puis réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Brine surchargée, à peine n'importe quel espace. Jar sera mal à ouvrir.",
            "action": "Verser un peu de saumure pour laisser 1 à 2 cm d'espace de tête."
          }
        ]
      },
      "feelCue": "Atteindre dans le pot et presser les légumes à travers la saumure — ils devraient se sentir souples et légèrement printaniers, déjà commencer à absorber la saumure plutôt que de se sentir raides et crus."
    },
    {
      "nodeId": "step_5",
      "action": "Refroidissement",
      "inputs": [
        "brined_vietnamese_pickles"
      ],
      "outputState": "finished_vietnamese_pickles",
      "instructions": "Après 30 minutes à température ambiante, réfrigérer le pot pendant au moins 30 minutes de plus – idéalement 1 heure au total à partir du moment où la saumure a été versée. Le froid accélère la pénétration de la saumure dans les cellules végétales. Les pickles sont utilisés dans les 2 semaines et restent bien réfrigérés jusqu'à 3 semaines.",
      "visualCue": {
        "primaryTarget": "Daïkon et carotte légèrement translucides avec un éclat distinct de la saumure. Le daikon est blanc vif avec des bords vitreux; la carotte est un orange-ambre vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 30 minutes : les légumes ont encore un goût cru et croquant. La saveur de saumure n'a pas pénétré au-delà de la surface.",
            "action": "Réfrigérer encore 30 minutes. La saveur se développe de l'extérieur dans — la patience produit un résultat plus uniformément décapé."
          },
          {
            "state": "Perfect",
            "description": "Un peu translucide, des brins très croustillants avec une saveur propre, lumineuse, sucrée-salée tout au long de la vie. Le Chili ajoute une douce chaleur de fond. Snap quand il est mordu.",
            "action": "Servir immédiatement ou réfrigérer scellé jusqu'à 3 semaines."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont très doux et la saumure est maintenant douce-sour eau avec peu de saveur laissée dans les légumes eux-mêmes.",
            "action": "Utilisez les cornichons mous comme ingrédient dans les rouleaux de papier de riz ou les griffes où la texture est moins critique."
          }
        ]
      },
      "feelCue": "Un brin parfait de daikon mariné doit se casser proprement et audiquement lorsqu'il est plié — une rupture propre et nette sans étirement ni déchirement. C'est ce qui les rend irremplaçables sur un banh mi."
    }
  ]
};
