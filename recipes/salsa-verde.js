export default {
  "repoId": "master_mexican_salsa-verde_001",
  "parentRepoId": null,
  "slug": "salsa-verde",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Verde",
  "description": "Des tomatillos brillants, tannants, carbonisés sous le grilleur avec des chiles de serrano et de l'oignon blanc, puis mélangés crus dans une salsa qui a un goût de feu vert — acide, herbacé, et dangereusement buvable.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "condiments",
  "tags": [
    "salsa",
    "tomatillo",
    "végétalien",
    "Mexique",
    "vert"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 8,
    "bitter": 2,
    "umami": 3,
    "heat": 6
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Tomatillos, décortiqués et rincés",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "tomatillos en conserve, égouttés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chiles de Serrano, tiges enlevées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeño (meilleur)",
        "habanero (haute)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche, tiges et feuilles",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "charred_vegetables",
      "instructions": "Placer le four à griller haut et placer un rack à 6 pouces de l'élément. Étendre en une seule couche les tomatillos (chilles de serrano, quartiers d'oignons et ail non pelé sur une plaque de cuisson doublée de feuilles. Faire griller 5 à 6 minutes jusqu'à ce que les dessus soient tachetés en noir et blister. Flipez tout avec des pinces et grillez encore 3-4 minutes. Les tomatillos devraient s'effondrer et arroser leur jus vert collant.",
      "visualCue": {
        "primaryTarget": "Les Tomatillos se sont effondrés, sont devenus vert-olive terne, et mettent leur propre jus collant. Les peaux de Serrano sont cloquées et carbonisées. Les bords de l'oignon sont noircis. La peau d'ail est papier et dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Tomatillos sont encore vert vif et fermes. Pas d'omble visible. La peau est intacte et brillante.",
            "action": "Retourner à griller 2 minutes de plus. L'effondrement du tomatillo est l'indicateur clé — attendez-le."
          },
          {
            "state": "Perfect",
            "description": "Les tomatillos sont doux et olive-drabe, noircis dans les taches. Les jus sont en cours d'exécution et légèrement collants sur la feuille. Tout sent aiguisé et rôti.",
            "action": "Laisser refroidir 5 minutes, peler l'ail, puis mélanger tout y compris tous les jus de casserole."
          },
          {
            "state": "Overdone",
            "description": "Les Tomatillos ont séché et rétréci. Les jus sont noir sur le papier. Serrano est uniformément noir et amer.",
            "action": "Peler le serrano si la peau est entièrement carbonisée. Utilisez les derniers tomatillos — ils goûteront intense mais utilisable. Ajouter une touche d'eau lors du mélange."
          }
        ]
      },
      "feelCue": "Appuyez sur un tomatillo avec une cuillère — il devrait offrir presque aucune résistance et laisser une trace de jus vertâtre collant. Un extérieur carbonisé avec un intérieur stable signifie plus de temps sous la grille."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "charred_vegetables",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "blended_salsa",
      "instructions": "Peler l'ail rôti et transférer tous les légumes rôtis et leurs jus accumulés dans un mélangeur. Ajouter la coriandre, le sel et le jus de lime. Pulse 4 à 5 fois pour une texture rugueuse, ou mélanger pendant 30 à 45 secondes pour une sauce plus lisse. Ne pas surbrouiller — une certaine texture est traditionnelle et désirable. Goûtez immédiatement et ajustez le sel et la chaux.",
      "visualCue": {
        "primaryTarget": "Une sauce vert olive clair à moyen avec des taches visibles d'omble foncé et de coriandre. Pas complètement lisse — vous pouvez voir de petits morceaux partout. La couleur est vive et appétissante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grands morceaux d'oignon et de tomatillo sont encore entiers. La texture ressemble plus à une côtelette qu'à une sauce.",
            "action": "Mélanger en 5 secondes les impulsions jusqu'à ce que la texture soit cohésive mais a encore un certain corps."
          },
          {
            "state": "Perfect",
            "description": "Versable mais texturé, vert-brun vif avec des taches foncées. Les goûts d'acide vif, de fumée, de chaleur et d'herbe fraîche tout à la fois.",
            "action": "Transférer dans un bol de service. Goûtez encore une fois et ajustez le sel. Reposez-vous 5 minutes avant de servir pour les saveurs à fondre."
          },
          {
            "state": "Overdone",
            "description": "Pale, mousseux, complètement lisse. La couleur est devenue gris-vert par suroxydation. La saveur Char a disparu.",
            "action": "La saveur est encore bonne — servir comme une salsa de style plus lisse. Ajouter une touche de chaux pour raviver la luminosité."
          }
        ]
      },
      "feelCue": "Une cuillère doit avoir un goût immédiat et lumineux: l'acide doit d'abord frapper, puis la chaleur se construit lentement. Si la chaleur vient en premier, ajoutez plus de chaux. S'il a un goût plat, ajouter du sel dans de minuscules pinces jusqu'à ce que la luminosité s'enflamme."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "blended_salsa",
        "ing_06"
      ],
      "outputState": "finished_salsa_verde",
      "instructions": "Goûtez la salsa de façon critique. Ajouter le sel en petits incréments (une pincée à la fois), en remuant et en dégustant entre chaque addition, jusqu'à ce que la saveur de tomatillo pops et la salsa goûte lumineux plutôt que terne. Une salsa verde bien salée devrait vous faire vouloir immédiatement un autre goût. Ajouter plus de jus de lime si l'acidité s'estompe. Laisser reposer à température ambiante pendant 10 minutes avant de servir pour permettre aux saveurs de se stabiliser.",
      "visualCue": {
        "primaryTarget": "La salsa tient sa couleur brun-vert vif. La surface a un reflet très léger de la pectine tomatillo. Aucune séparation visible — la sauce semble cohésive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un goût plat et muet. La couleur est brillante mais la saveur ne s'ouvre pas. Il manque quelque chose.",
            "action": "C'est presque toujours une carence en sel. Ajouter une pincée, remuer, attendre 30 secondes et goûter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Chaque cuillère est lumineuse, tannante, fumée, herbacée et bien épicée. Tu veux le manger avec une cuillère.",
            "action": "Servir immédiatement ou réfrigérer. L'arôme continue de se développer pendant jusqu'à 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Salé ou si épicé il est difficile à manger par la cuillère. Les lèvres bourdonnent immédiatement au contact.",
            "action": "Pour le surselage : mélanger dans un autre tomatillo rôti ou une petite quantité d'avocat. Pour surpis: le même remède, ou servir avec créma."
          }
        ]
      },
      "feelCue": "La salsa finie devrait avoir une légère traction visqueuse lorsque vous inclinez le bol — la pectine dans les tomatillos lui donne un corps naturel. S'il coule comme de l'eau, les tomatillos sont mal mûrs ou insuffisamment grillés."
    }
  ]
};
