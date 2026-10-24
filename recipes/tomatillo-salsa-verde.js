export default {
  "repoId": "master_mexican_tomatillo_salsa_verde_001",
  "parentRepoId": null,
  "slug": "tomatillo-salsa-verde",
  "author": "ForkRecipe Kitchen",
  "title": "Tomatillo Salsa Verde",
  "description": "Les tomatillos husqués ont bouilli jusqu'à ce qu'ils abandonnent leur tartness, puis mélangé avec le serrano chilis rôti et la coriandre dans une salsa verte brillante, herbacée et acidulée qui fait un taco carnitas en quelque chose dont vous rêvez.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "condiments",
  "tags": [
    "Salsa verde",
    "tomatillo",
    "Mexique",
    "condiment",
    "vert",
    "tarte"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 1730,
  "forks": 152,
  "contributors": 44,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-20",
  "updatedAt": "2025-03-25",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tomatillos frais (rincés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tomatillos en conserve (drainés, sautez l'étape d'ébullition)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Serrano chilis (ou jalapeños)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeños (milder)",
        "habanero (plus chaud)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (approximativement haché)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles à l'ail",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche (tiges et feuilles)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "cooked_tomatillos",
      "instructions": "Mettre les tomatillos et les gousses d'ail dans une casserole. Couvrir d'eau froide d'environ 3cm. Porter à ébullition à feu vif, puis laisser mijoter régulièrement. Cuire de 8 à 10 minutes jusqu'à ce que les tomatillos soient passés d'un vert vif à une couleur terne, légèrement vert olive, et qu'ils se soient adoucis complètement. Ne pas trop cuire au point de se désintégrer. Réservez 1/4 tasse du liquide de cuisson au cas où vous auriez besoin d'éclaircir la salsa.",
      "visualCue": {
        "primaryTarget": "Les Tomatillos sont passés d'un vert vif vif vif à un vert olive plus doux et plus mou. Ils sont visiblement adoucis et certains commencent à se diviser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tomatillos sont encore vert vif et ferme, ressortant en arrière quand pressé avec une cuillère.",
            "action": "Continuez à mijoter. Les tomatillos sous-cuits produisent une salsa plus dure et plus astringente."
          },
          {
            "state": "Perfect",
            "description": "Vert olive muté, complètement doux lorsqu'il est poché avec une cuillère, certains montrant des fissures ou des fentes. L'eau est vert doré et tarte.",
            "action": "Égoutter, réserver du liquide de cuisson et procéder."
          },
          {
            "state": "Overdone",
            "description": "Les Tomatillos se sont complètement désintégrés dans l'eau. Le liquide de cuisson est très goudronneux et les tomatillos ont perdu leur structure.",
            "action": "Égoutter immédiatement — les tomatillos ont encore de la saveur, ils viennent de perdre leur forme. La salsa peut être plus mince."
          }
        ]
      },
      "feelCue": "Appuyez sur un tomatillo contre le côté de la poêle avec une cuillère — il devrait donner avec presque aucune résistance et squish plat, libérant une explosion de jus vert tarte."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "ing_02"
      ],
      "outputState": "charred_chilis",
      "instructions": "Pendant que les tomatillos font cuire, carbonisez le chilis serrano directement sur une flamme de gaz ou sous un grille-glaces chaud, en tournant occasionnellement avec des pinces, jusqu'à ce qu'ils soient cloqués et carbonisés de tous les côtés — environ 5 à 8 minutes au total. Les peaux doivent noircir et blister, mais la chair doit rester intacte. Transférer dans un bol, couvrir d'une assiette pendant 5 minutes à la vapeur, puis peler, tige et graines (ou laisser les graines pour plus de chaleur). Charler le chilis ajoute une fumée qui contrebalance la tartilité des tomatillos.",
      "visualCue": {
        "primaryTarget": "Un chilis uniformément cloqué et carbonisé — la peau est bublée et noircie, mais le chili en dessous est doux et souple, non brûlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis sont légèrement marqués dans les taches mais la plupart du temps verts et encore fermes. Une petite saveur de fumée s'est développée.",
            "action": "Continuer à carboniser — tourner plus souvent pour une couverture uniforme."
          },
          {
            "state": "Perfect",
            "description": "La plupart de la peau est noire et cloquée. Le chili est clairement doux et productif. Il sent le poivre rôti plutôt que le capsicum cru.",
            "action": "Steam dans un bol couvert pendant 5 minutes avant de peler."
          },
          {
            "state": "Overdone",
            "description": "La chair de Chili s'est effondrée et s'est noircie, pas seulement la peau.",
            "action": "Jeter si complètement carbonisé. Si ce n'est que très sombre, procédez au pelage — l'intérieur peut être récupérable."
          }
        ]
      },
      "feelCue": "Après la vapeur, la peau carbonisée devrait glisser entre vos doigts sans effort — si elle tire et résiste, la vapeur pendant encore 2 minutes."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "cooked_tomatillos",
        "charred_chilis",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_salsa_verde",
      "instructions": "Mélanger les tomatillos drainés, l'ail (cuit avec eux), le chilis carbonisé, l'oignon cru, la coriandre, le sel et le jus de lime dans un mélangeur. Ajoutez quelques cuillères à soupe de liquide de cuisson réservé. Mélanger à votre consistance souhaitée : rugueux et rustique avec 6 impulsions, ou complètement lisse avec 45 secondes en hauteur. Goûtez immédiatement – ajustez le sel pour la profondeur savoureuse, la chaux pour la luminosité, et si trop de tarte, une pincée de sucre pour équilibrer. La couleur sera un vert olive vif tacheté avec des taches plus foncées du chili carbonisé.",
      "visualCue": {
        "primaryTarget": "Une salsa olive-vert vif avec des taches d'herbe. Assez épais pour être légèrement sur une puce mais versable. La couleur est vivante et les herbes, pas terne ou gris.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours brouillé avec de grands morceaux de tomatillo et de tige coriandre visibles. Les saveurs ne sont pas unifiées.",
            "action": "Mélanger davantage — pouls jusqu'à ce que la consistance souhaitée soit atteinte."
          },
          {
            "state": "Perfect",
            "description": "Doux à moyen-lisse, vert olive vif, intensément aromatique. La saveur est tarte, à base de plantes et lentement épicée avec une finition propre.",
            "action": "Goûtez au sel et à la chaux, puis servez ou réfrigérez."
          },
          {
            "state": "Overdone",
            "description": "Complètement lisse et de couleur claire de surmenage — la couleur est passée du vert olive à un vert plus léger et plus aéré de l'aération.",
            "action": "Laissez l'air s'échapper. La couleur va s'approfondir. La texture est plus mince que l'idéal."
          }
        ]
      },
      "feelCue": "La salsa finie doit sentir si vivement la coriandre et la tarte tomatillo qu'elle pique presque l'intérieur de votre nez - lumineux, vert, et immanquablement vivant."
    }
  ]
};
