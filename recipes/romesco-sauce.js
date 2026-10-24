export default {
  "repoId": "master_spanish_romescosauce_001",
  "parentRepoId": null,
  "slug": "romesco-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Romesco",
  "description": "La grande sauce catalane — une émulsion fumée et rouge brique de poivrons carbonisés, d'amandes grillées et de tomates séchées au soleil, épaissie de pain poncé et éclairée par une bouffée de vinaigre de sherry, dégustation de feu et de terre dans une mesure égale.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "sauces",
  "tags": [
    "sauce",
    "végétalien",
    "Sans gluten",
    "Cuivre rôti",
    "catalan",
    "noix"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Poivrons rouges (large)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons grillés en pot (drainés)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Tomates séchées au soleil (emballées à l'huile)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "tomates roms mûres, coupées en deux et grillées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Amandes blanchies (ou marcona)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "noisettes",
        "un mélange des deux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Paprika fumé (pimentón de la Vera)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux + pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de Chili séchés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de sherry",
      "ratioValue": 25,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin rouge",
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Starch",
      "name": "Pain au sarde d'un jour, croûtes enlevées (utiliser du pain GF pour garder GF)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "pain sans gluten (pour le strict GF)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "charred_peppers_garlic",
      "instructions": "Charlez les poivrons directement au-dessus d'une flamme à gaz ou sous un four à griller chaud, en tournant avec des pinces jusqu'à ce que complètement noirci de tous les côtés — cela prend 10-15 minutes. Déposer dans un sac scellé ou un bol couvert pendant 15 minutes à la vapeur. Éplucher la peau carbonisée (un peu de résidu ajoute de la saveur), enlever les graines et le noyau. Enveloppez les gousses d'ail déverrouillées dans du papier d'aluminium avec une bruine d'huile et faites rôtir à 200 C pendant 20 minutes jusqu'à ce qu'elles soient complètement douces. Serrer des peaux.",
      "visualCue": {
        "primaryTarget": "Poivrons complètement noirs à l'extérieur, suffisamment doux pour s'effondrer lorsqu'ils sont pressés. Caramel à l'ail doré et rendement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Patches de rouge encore visibles. La peau n'a pas complètement cloqué. Le poivre tient toujours sa forme rigide.",
            "action": "Continuez à carboniser — vous avez besoin de chaleur agressive. Les poivrons sous-dossés ont un goût cru et manquent de la profondeur caramélisée qui définit la romesco."
          },
          {
            "state": "Perfect",
            "description": "Extérieur complètement noir. Intérieur doux, écroulé par la vapeur. Les peaux à la vapeur glissent facilement. L'ail est doré et complètement tendre.",
            "action": "Peler, semer et réserver. Toast amandes et pain en attendant."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons ont séché ou l'intérieur a brûlé jusqu'à la chair.",
            "action": "Sauvez toute chair non brûlée. Crache les zones les plus brûlées. L'intérieur doit être doux et doux."
          }
        ]
      },
      "feelCue": "Les poivrons à la vapeur s'échappent de leur peau comme du velours — l'extérieur carbonisé libère presque sans résistance, révélant la chair étincelante, acajou-doux en dessous."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "ing_03",
        "ing_10"
      ],
      "outputState": "toasted_almonds_bread",
      "instructions": "Dans une poêle sèche à feu moyen, faire griller les amandes pendant 4 à 6 minutes, en jetant fréquemment jusqu'à ce qu'elles soient dorées et parfumées. Mettez de côté. Dans la même casserole, faire frire les morceaux de pain déchirés jusqu'à ce qu'ils soient dorés et croustillants de tous les côtés, 3-4 minutes. Le pain grillé est l'épaississant — il émulsifie la sauce et lui donne le corps.",
      "visualCue": {
        "primaryTarget": "Les amandes: le tank d'or profond tout au long de la traversée. Pain: brun doré et complètement sec/crisp.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amandes sont encore pâles au centre. Le pain est doux et blanc.",
            "action": "Continuer à griller à feu moyen. Retirer du feu et ils continueront à colorier de la chaleur résiduelle."
          },
          {
            "state": "Perfect",
            "description": "Les amandes sont d'or profond, parfumées d'un arôme grillé et légèrement amer. Le pain est sec et doré, croquant lorsqu'il est pressé.",
            "action": "Retirer immédiatement de la chaleur — la chaleur résiduelle continuera le processus de brunissement."
          },
          {
            "state": "Overdone",
            "description": "Les amandes sont brun foncé, sentant l'acride. Le pain est noir aux bords.",
            "action": "Jeter les amandes brûlées et recommencer — les amandes brûlées rendent la sauce amère au-delà de la récupération."
          }
        ]
      },
      "feelCue": "Les amandes grillées croquent fort quand vous pressez un entre deux doigts — complètement sécher tout le long sans donner, et la peau se détache facilement."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "charred_peppers_garlic",
        "toasted_almonds_bread",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_romesco",
      "instructions": "Dans un robot culinaire ou un mélangeur, pousser d'abord les amandes et le pain grillé jusqu'à ce qu'elles soient grossièrement broyées. Ajouter les poivrons rôtis, l'ail, les tomates séchées au soleil, le paprika fumé, la Cayenne, le vinaigre de sherry et le sel. Procéder jusqu'à ce qu'une pâte brute et texturée se forme. Avec le moteur en marche, arroser dans l'huile d'olive pour émulsifier. Processus à votre consistance préférée — classique romesco est chunky, pas lisse. Goûter et ajuster : plus de vinaigre pour l'acidité, plus de paprika pour la fumée, plus d'huile pour la richesse. La sauce doit avoir un goût assez gras pour être légèrement accablante.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique, à texture rugueuse avec des morceaux visibles d'amande et de poivre — pas une purée lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours avec de grands morceaux d'amande visibles. La sauce se sépare immédiatement sur l'assiette.",
            "action": "Encore 30 secondes. Le pain a besoin de temps pour s'intégrer pleinement et émulsifier."
          },
          {
            "state": "Perfect",
            "description": "Brick-rouge, gros mais cohésif. La sauce se tient sur une cuillère mais a une texture visible. Gloire de l'huile d'olive. Une cuillerée a un goût fumé, riche et aiguisé simultanément.",
            "action": "Goût et saison. Laisser reposer 10 minutes pour les saveurs à mélanger avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Complètement lisse, orange pâle, sauce plutôt que pâte. Il a perdu toute texture.",
            "action": "Pas de rétablissement — servir comme tel. La saveur sera la même ; seul le drame textural est perdu."
          }
        ]
      },
      "feelCue": "Une bonne romesco enveloppe l'arrière d'une cuillère d'une épaisseur sans être collante — elle doit tenir une langue-souche de couleur rouge vif sur la porcelaine blanche, se décolorant aux bords en orange."
    }
  ]
};
