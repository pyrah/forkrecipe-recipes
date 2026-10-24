export default {
  "repoId": "master_thai_namprikpao_001",
  "parentRepoId": null,
  "slug": "nam-prik-pao",
  "author": "ForkRecipe Kitchen",
  "title": "Nam Prik Pao",
  "description": "Pâte de chili torréfié thaïlandaise — chaque ingrédient grillé individuellement avant d'être broyé ensemble dans une confiture sombre, fumée et sucrée qui sent le feu de camp et l'échalote caramélisée. L'épine dorsale du tom yum, le secret en pad thai, et remarquable sur le riz uni par lui-même.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "condiments",
  "tags": [
    "piment-collé",
    "grillés",
    "Thaï",
    "condiment",
    "umami",
    "fumeur",
    "Tom-Yum",
    "pot"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Piments rouges longs séchés, ensemencés",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "chili guajillo pour version plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, non pelées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "quartiers d'oignon rouge"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Crevettes séchées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de champignons séchés pour végétarien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja légère"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme ou cassonade",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile de coco"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "roasted_aromatics",
      "instructions": "Faire cuire chaque ingrédient séparément dans un wok sec ou une poêle à feu moyen-élevé, en tournant occasionnellement. Chiles: 3-4 minutes jusqu'à ce que parfumé et légèrement gonflé, non brûlé. Échalotes (non pelées) : de 8 à 10 minutes jusqu'à ce que les peaux extérieures soient carbonisées en noir et que l'intérieur soit doux. Ail (non pelé) : 6-8 minutes jusqu'à ce que les peaux soient noircies et que les gousses soient douces. Refroidir, puis peler les échalotes et l'ail — les peaux extérieures carbonisées sont jetées mais leur saveur a pénétré la chair.",
      "visualCue": {
        "primaryTarget": "Chiles brun-rougeâtre foncé et parfumé. Échalotes et ail avec des peaux extérieures noircies, intérieurs doux quand pressés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les peaux d'échalote et d'ail sont bronzées, non carbonisées. L'intérieur sera rafraîchissant.",
            "action": "Continuer à rôtir à plus forte chaleur — l'omble sur la peau est ce qui transfère une profondeur fumée à la chair pelée à l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Les peaux de Chili sont sombres et papeuses, sentant la fumée. Les peaux d'échalote et d'ail sont noircies en tranches; la chair intérieure est douce et douce.",
            "action": "Refroidir complètement avant de peler et de broyer."
          },
          {
            "state": "Overdone",
            "description": "Les chilis sont uniformément noirs et l'odeur des cendres. La chair des échalotes s'est carbonisée.",
            "action": "Jeter les chilis les plus gravement brûlés. Les intérieurs de chili légèrement carbonés sont fins; ils sont entièrement carbonisés au-delà de la récupération."
          }
        ]
      },
      "feelCue": "Pressez une échalote torréfié à travers sa peau — elle devrait jaillir comme une pâte douce, chaude et parfumée. Si elle est encore ferme et résiste, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "roasted_aromatics",
        "ing_04"
      ],
      "outputState": "rough_paste",
      "instructions": "Peler les échalotes grillées et l'ail. Déposer dans un mortier les chilis rôtis et les crevettes séchées. Pound fermement, en travaillant les crevettes séchées d'abord (ils prennent le plus longtemps), puis l'ail, puis les échalotes, puis les chiles. Pound jusqu'à ce qu'une pâte brute et parfumée forme — une certaine texture est correcte pour ce style. Alternativement, l'impulsion dans un robot alimentaire à une consistance assez épaisse.",
      "visualCue": {
        "primaryTarget": "Une pâte sombre et brun rouille avec des fragments visibles de crevettes et des peaux de chili. Ça sent profondément fumé et doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Crevettes séchées encore en morceaux distincts. Échalotes non encore incorporées. La pâte a l'air bosselée et incohérente.",
            "action": "Continuer à frapper — les crevettes doivent se décomposer complètement ou la pâte finale aura un goût inégal."
          },
          {
            "state": "Perfect",
            "description": "Coeurs, pâte foncée avec texture uniforme. Smoky-douce odeur. La crevette a entièrement incorporé, teintant la pâte un brun rouille chaud.",
            "action": "Faire revenir la pâte dans l'huile."
          },
          {
            "state": "Overdone",
            "description": "Sur-livrer à une pâte lisse et aérée.",
            "action": "Très bien — il va frire dans une confiture brillante indépendamment de la texture entrant."
          }
        ]
      },
      "feelCue": "Une petite quantité retenue entre deux doigts devrait s'étirer légèrement avant de se briser, maintenue ensemble par les huiles naturelles et l'humidité des aromatiques grillés."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "rough_paste",
        "ing_07",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_nam_prik_pao",
      "instructions": "Chauffer l'huile dans un wok ou une casserole à feu moyen-doux. Ajouter la pâte et faire frire en remuant constamment pendant 8-10 minutes jusqu'à ce que la pâte s'assombrisse, que l'humidité s'évapore et que l'huile commence à se séparer visiblement des solides. Ajouter la sauce de poisson et le sucre de palme. Incorporer et continuer à frire pendant 3 à 4 minutes jusqu'à ce que les caramélises de sucre et la pâte sentent complexe, sucrée et profondément fumée. Laisser refroidir et conserver dans un bocal — la saveur s'améliore sur 24 heures.",
      "visualCue": {
        "primaryTarget": "Une confiture très foncée, presque noire, avec une surface brillante et de l'huile qui pool autour des bords. Couleur du chocolat doux amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore brun rougeâtre avec une humidité évidente. L'huile n'est pas séparée. Sens brut et vif.",
            "action": "Continuez à frire sur moyenne-faible — la patience est nécessaire. La transformation se produit lentement."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou brun à presque noir. Gloire et jam. Piscines d'huile au bord de la pâte. L'odeur est fumée, douce et complexe.",
            "action": "Cool et jar. La pâte restera réfrigérée jusqu'à 3 mois."
          },
          {
            "state": "Overdone",
            "description": "Noir et amer. Brûlure, odeur acride.",
            "action": "Jeter les raclures les plus sombres du fond. La masse peut encore être utilisable si elle n'a pas été brûlée."
          }
        ]
      },
      "feelCue": "Une petite quantité frottée sur une plaque devrait maintenir un léger pic pendant une seconde avant de s'étendre lentement — brillant et embrouillé, non écoulement, non raide."
    }
  ]
};
