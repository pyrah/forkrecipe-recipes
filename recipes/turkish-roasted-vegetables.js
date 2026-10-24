export default {
  "repoId": "master_turkish_roastedvegetables_001",
  "parentRepoId": null,
  "slug": "turkish-roasted-vegetables",
  "author": "ForkRecipe Kitchen",
  "title": "Légumes grillés turcs à la grenade",
  "description": "Les courgettes grillées, les aubergines et les poivrons rouges, vêtus de mélasse de grenade et d'herbes fraîches — bords caramélisés, vinaigrette à la sauce sucrée, et le tang de yogourt en dessous.",
  "cuisine": "Turquie",
  "culture": "Anatolien",
  "category": "vegetables",
  "tags": [
    "turc",
    "anatolien",
    "grillés",
    "grenade",
    "yaourt",
    "végétalien",
    "mezze",
    "Sumac"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Zucchini (courgette), coupé en cubes de 3 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "courge jaune"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Aubergines Globe, coupées en cubes de 3 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "poivron rouge, coupé en bandes de 3 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons grillés en jarre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon rouge, coupé en quartiers",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Mélasses de grenade",
      "ratioValue": 25,
      "defaultUnit": "ml",
      "substitutions": [
        "glaçure balsamique + pression de citron"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe, déchirées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Sumac au sol",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "mélasse de grenade supplémentaire + zeste de citron"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Dairy",
      "name": "Yogourt épais de style turc (süzme yoğurt)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Yogourt grec"
      ]
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
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_11"
      ],
      "outputState": "caramelized_roasted_vegetables",
      "instructions": "Préchauffer le four à 220°C (43°F) avec un grand plateau en tôle à l'intérieur. Mélanger tous les légumes coupés et les gousses d'ail non pelées avec l'huile d'olive et saler dans un grand bol. Étendez - vous en une seule couche sur le plateau chaud: l'engorgement provoque la vapeur. Faire cuire de 25 à 30 minutes, en tournant une fois à mi-chemin, jusqu'à ce que les bords soient profondément caramélisés et que les courgettes et les aubergines se soient effondrées et carbonisées en morceaux.",
      "visualCue": {
        "primaryTarget": "Des bords très brunis et des surfaces caramélisées sur tous les légumes. Les cubes d'aubergine se sont effondrés et sont dorés. Les poivrons sont carbonisés et cloqués aux bords. Les coins d'oignon sont sombres et sucrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont pâles et à la vapeur. Zucchini est toujours rigide. Pas de brunissement sur aucune surface.",
            "action": "Levez la chaleur à 230°C et écartez-vous. Le plateau était probablement surpeuplé — utilisez deux plateaux si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Bords caramélisés partout. Les aubergines et les courgettes ont un léger omble sur les surfaces coupées. Plaquette thermoformée. Le plateau est doré sous les légumes.",
            "action": "Retirer du four et habiller tout en restant chaud."
          },
          {
            "state": "Overdone",
            "description": "Certains légumes sont très foncés et commencent à durcir. Le fond de la casserole est noir et acride.",
            "action": "Sauver les morceaux bien cuits et jeter les morceaux brûlés. Déglacer le plateau avec une cuillerée d'eau pour capturer tout bon goût."
          }
        ]
      },
      "feelCue": "Un morceau d'aubergine doit immédiatement céder à la pression douce d'une fourche, qui s'effondre plutôt que de rebondir en arrière, d'une odeur sucrée et d'une douceur totale."
    },
    {
      "nodeId": "step_2",
      "action": "Découpe",
      "inputs": [
        "caramelized_roasted_vegetables",
        "ing_07",
        "ing_10",
        "ing_08",
        "ing_09"
      ],
      "outputState": "dressed_roasted_vegetables",
      "instructions": "Alors que les légumes sont encore chauds, pressez l'ail rôti de leur peau directement sur les légumes et remuez doucement pour les casser dans le mélange. Arrosez la mélasse de grenade et saupoudrez le sumac. Mélanger doucement pour enrober les légumes sans les casser davantage. Dispersez la menthe fraîche et le persil. Goût pour le sel et l'acidité — la vinaigrette doit être acidulée.",
      "visualCue": {
        "primaryTarget": "Les légumes chauds sont enrobés d'une glaçure foncée et douce aux herbes vertes vives dispersées dans tout le pays. Chaque pièce brille avec la grenade combinée et l'huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mélasse de grenade est assise dans une flaque sombre au fond plutôt que de couvrir les légumes. Les herbes ne sont pas mélangées.",
            "action": "Mélanger plus activement et ajouter une cuillère à soupe des jus de légumes du plateau pour aider à émulsifier la vinaigrette."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce végétale est légèrement vitrée avec la mélasse rouge-brun profonde. Sumac donne une poussière pourpre aux surfaces. Les herbes sont vibrantes et se flétrissent aux bords.",
            "action": "Servir immédiatement sur ou à côté du yaourt."
          },
          {
            "state": "Overdone",
            "description": "Tossing a cassé les légumes en bouillie. Le plat a perdu sa distinction textuelle.",
            "action": "Servir comme un relish chaud plutôt qu'un côté — étaler le yaourt sur l'assiette et cuillerer le mélange de légumes sur comme une garniture épaisse et rustique."
          }
        ]
      },
      "feelCue": "Les légumes habillés devraient se sentir chauds et légèrement collants avec la mélasse — ramasser un morceau d'aubergine et porter un revêtement brillant qui ne coule pas."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "dressed_roasted_vegetables",
        "ing_12"
      ],
      "outputState": "finished_turkish_roasted_vegetables",
      "instructions": "Étendre le yaourt froid dans une couche généreuse sur la base d'une large assiette de service, créant un swoosh avec le dos d'une cuillère. Pilez les légumes chauds sur le yaourt. Le contraste entre le yogourt froid, tanné et les légumes chauds et sucrés est au cœur du plat. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Le yogourt blanc forme un nuage frais sous des légumes caramélisés, imprégnés d'herbes vives. La glaçure de grenade sombre saigne légèrement dans le yogourt blanc aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les yogourts et les légumes sont mélangés plutôt qu'en couches — le contraste visuel et textural est perdu.",
            "action": "Si possible, servir à nouveau avec du yogourt étalé sous. Si déjà mélangé, il a encore bon goût."
          },
          {
            "state": "Perfect",
            "description": "Couches distinctes : yaourt blanc froid ci-dessous, légumes chauds brillants au-dessus, herbes sur le dessus. Le diner se mélange en mangeant, découvrant de nouveaux ratios de fraîcheur-tart-doux dans chaque bouchée.",
            "action": "Servir immédiatement pendant que le contraste de température est vivant."
          },
          {
            "state": "Overdone",
            "description": "Le yogourt s'est réchauffé et a perdu son contraste. Le plat a l'air uniforme.",
            "action": "Ajouter une cuillère fraîche de yogourt froid au centre juste avant de servir."
          }
        ]
      },
      "feelCue": "La première cuillère devrait fournir une résistance fraîche et crémeuse du yogourt donnant place à des légumes doux et carbonisés — deux températures dans une seule bouche sont le point."
    }
  ]
};
