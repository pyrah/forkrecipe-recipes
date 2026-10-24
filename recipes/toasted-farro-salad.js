export default {
  "repoId": "master_italian_toasted_farro_salad_001",
  "parentRepoId": null,
  "slug": "toasted-farro-salad",
  "author": "ForkRecipe Kitchen",
  "title": "Salade de Farro grillée aux légumes grillés",
  "description": "Farro entier grillé dans une poêle sèche jusqu'à ce que la noix et l'or, puis mijoté jusqu'à agréablement mâché — jeté chaud avec des légumes grillés caramélisés, herbes fraîches, citron, et bonne huile d'olive à la manière de la cucina povera toscane: simplement d'excellents ingrédients traités avec respect.",
  "cuisine": "Italien",
  "culture": "Toscane",
  "category": "grains",
  "tags": [
    "végétalien",
    "Italien",
    "Tuscan",
    "Farro",
    "salade",
    "torréfiés-légumes"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farro entier (non perlé)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Farro semi-pair (réduire le temps de 15 min)",
        "épeautre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stocks d'eau ou de légumes",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Zucchini, coupé en morceaux de 2 cm",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tomates séchées au soleil (utiliser moins)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Oignon rouge, coupé en quartiers",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Aubergine, coupée en cubes de 2 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Fenouil rôti"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (divisée)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Citrus",
      "name": "Zeste de citron (1 citron)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, approximativement haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "basilic",
        "menthe"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe, déchirées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Spice",
      "name": "Flacons de chili séchés",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Noix de pin grillées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_farro",
      "instructions": "Placer le farro dans une grande poêle sèche à feu moyen. Faire cuire, en remuant constamment, pendant 4 à 6 minutes jusqu'à ce que les grains sentent la noix et soient dorés — certains grains peuvent légèrement sauter. Cette étape est facultative mais transforme la saveur de façon spectaculaire. Les grains grillés auront une saveur plus noise, plus complexe après la cuisson.",
      "visualCue": {
        "primaryTarget": "Les grains se sont approfondis depuis le bronzage pâle jusqu'au brun doré. Un nuage d'arôme de noix presque popcorn se lève de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore pâles. Pas de changement d'arôme de farro cru.",
            "action": "Continuer à griller à feu moyen — le changement de couleur est subtil mais réel."
          },
          {
            "state": "Perfect",
            "description": "Couleur dorée sur la plupart des grains. Une odeur de noix grillée. Certains grains peuvent avoir de petites fissures.",
            "action": "Transférer immédiatement dans une casserole pour la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Grains brun foncé avec une odeur dure et brûlée.",
            "action": "Jetez et recommencez — le farro brûlé rendra la salade entière amère."
          }
        ]
      },
      "feelCue": "Pincez un grain grillé — il devrait être sec et dur, inchangé dans la texture mais chaud et parfumé. L'arôme vous dit plus que la couleur — quand la cuisine sent le blé grillé et les noisettes, vous êtes là."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "toasted_farro",
        "ing_02",
        "ing_12"
      ],
      "outputState": "cooked_farro",
      "instructions": "Transférer le farro grillé dans une casserole. Couvrir d'eau ou de bouillon généreusement salée (3 parties liquides à 1 partie farro en volume). Porter à ébullition, laisser mijoter régulièrement et cuire à découvert pendant 30 à 40 minutes pour le farro entier (20 à 25 pour le semi-poireau) jusqu'à ce que les grains soient tendres mais aient encore une mâche distincte — al dente, comme une orge bien cuite. Égoutter tout excès de liquide.",
      "visualCue": {
        "primaryTarget": "Grains de pruneau brun doré qui ont à peu près doublé en taille. Une morsure propre ne révèle aucun centre crayeux blanc mais une résistance ferme et agréable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centre crayeux blanc quand mordu. Les grains sont encore serrés et non gonflés.",
            "action": "Continuez à mijoter — il est notoirement lent à cuire."
          },
          {
            "state": "Perfect",
            "description": "Enflé, uniformément doré. Mâcher définitivement mais pas de dureté. Les grains se séparent proprement lorsqu'ils sont remués.",
            "action": "Égoutter et jeter immédiatement avec la moitié de l'huile d'olive pour éviter de coller."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont fendus, mous, féculents. Pas de mâcher.",
            "action": "Égoutter immédiatement. La salade sera légèrement musclée mais les saveurs seront maintenues."
          }
        ]
      },
      "feelCue": "Bite à travers un grain de farro — vous devriez sentir une résistance distincte, ferme avant qu'il donne, puis un intérieur légèrement crémeux, féculent. Il doit mâcher comme des pâtes très al dente, pas donner comme du riz."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_12"
      ],
      "outputState": "roasted_vegetables",
      "instructions": "Mélanger tous les légumes avec une généreuse quantité d'huile d'olive, de sel et de flocons de chili sur une grande casserole. Dispersez - vous en une seule couche — ne foulez pas ou ils s'échaufferont. Faire cuire à 220 °C (425 °F) pendant 25 à 30 minutes, en tournant une fois à mi-chemin, jusqu'à ce que les bords soient caramélisés et carbonisés, en particulier les tomates cerises, qui doivent éclater et se concentrer.",
      "visualCue": {
        "primaryTarget": "Légumes caramélisés aux bords carbonisés. Les tomates cerises ont éclaté, s'est effondré et assombrit. Zucchini est doré. Les bords de l'oignon sont foncés et croustillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont doux et pâles — pas de caramélisation, pas d'ombrage.",
            "action": "Élever la température du four ou continuer à rôtir. Les légumes rôtis pâles ont un goût bouilli."
          },
          {
            "state": "Perfect",
            "description": "Bords d'or foncé sur tous les légumes. Des tomates éclatent et se bousculent. Zucchini doré avec grill-marque de style char. La cuisine sent les légumes sucrés et concentrés.",
            "action": "Transférer pendant qu'il fait chaud au lancer avec farro."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont très foncés ou brûlés. Les tomates sont sèches et dures.",
            "action": "Choisissez et jetez les morceaux vraiment brûlés. Les légèrement surcarrés ajoutent une bonne saveur."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de courgettes grillées — il devrait donner complètement, n'offrir aucune résistance, et se sentir doux mais pas humide. La peau doit se sentir légèrement cloquée et papier, l'intérieur comme chaud, effondré douceur."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "cooked_farro",
        "roasted_vegetables",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_13",
        "ing_14"
      ],
      "outputState": "finished_farro_salad",
      "instructions": "Alors que le farro et les légumes sont encore chauds, les combiner dans un grand bol. Arroser d'huile d'olive et de jus de citron. Ajouter le zeste de citron, les flocons de chili, le persil, la menthe et les noix grillées. Mélangez doucement — vous voulez que le farro chaud absorbe le citron et l'huile. Goûtez et ajustez le sel, l'acide et l'huile. La salade est excellente chaude, mais aussi très bonne à température ambiante.",
      "visualCue": {
        "primaryTarget": "Une salade chaude, dorée-brun avec des légumes caramélisés vifs, des herbes vertes brillantes, et un farro scintillant. Chaque composante est distincte mais harmonieusement combinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salade a l'air sèche et sous-vêtue — les herbes sont ternes et le farro a l'air féculent.",
            "action": "Ajouter plus d'huile d'olive et de jus de citron, mélanger à nouveau. Bouche : il doit chanter avec de l'acide et de la graisse."
          },
          {
            "state": "Perfect",
            "description": "Glissements, parfumés, herbacées. L'huile de citron a enrobé chaque grain. La vapeur chaude s'élève du bol.",
            "action": "Servir immédiatement en tant que principal ou laisser refroidir à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "La salade est survêtue et soggy — mise en commun avec de l'huile et du citron au fond.",
            "action": "Ajouter plus de farro uni pour absorber l'excès de vinaigrette."
          }
        ]
      },
      "feelCue": "Jetez la salade finie avec vos mains — chaque grain de farro doit se déplacer librement, enrobé d'huile et de citron, s'accrochant légèrement aux légumes chauds, mais ne s'agrippant pas. Les herbes doivent se sentir fraîches et lumineuses contre les grains chauds."
    }
  ]
};
