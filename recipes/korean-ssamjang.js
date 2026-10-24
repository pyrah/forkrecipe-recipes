export default {
  "repoId": "master_korean_koreanssamjang_001",
  "parentRepoId": null,
  "slug": "korean-ssamjang",
  "author": "ForkRecipe Kitchen",
  "title": "Coréen Ssamjang",
  "description": "La pâte foncée et poinçonnée qui va à l'intérieur des enveloppements de laitue — un remuant rapide de doenjang (pâte de soja fermentée) et de gochujang avec de l'huile de sésame, de l'ail et un peu de miel, assez épais pour frotter et assez complexe pour rendre la viande grillée inutile.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "condiments",
  "tags": [
    "condiment",
    "végétalien",
    "coréen",
    "Ssamjang",
    "pâte",
    "fermenté",
    "tremper"
  ],
  "difficulty": 1,
  "activeTime": "8 min",
  "totalTime": "8 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Doenjang (pâte de soja fermentée coréenne)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "hachoo miso (utiliser 40 g — plus intense)",
        "tout miso sombre avec une touche de sauce soja"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Gochujang (Pâte de chili fermentée coréenne)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sambal oelek + 1 c. à thé sauce soja"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail hachées à la pâte",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon de printemps, tranché finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de miel ou d'oligosaccharide (molyeot)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'érable pour végétalien"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Graines de sésame grillées, légèrement broyées",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "mixed_ssamjang",
      "instructions": "Mélanger tous les ingrédients dans un bol et remuer vigoureusement jusqu'à ce que le doenjang et le gochujang soient complètement mélangés et qu'il ne reste plus de stries. L'huile de sésame doit être absorbée plutôt que mise en commun. Les graines d'oignon et de sésame de printemps doivent être distribuées uniformément. Goûtez et ajustez : ajoutez plus de gochujang pour la chaleur, plus de miel pour la douceur, plus d'huile de sésame pour la richesse. Contrairement aux condiments cuits, le ssamjang est construit entièrement par équilibre — il n'y a pas de chaleur pour cacher les erreurs.",
      "visualCue": {
        "primaryTarget": "Une pâte brun rougeâtre uniformément foncée avec des graines de sésame visibles et des taches d'oignon vert de printemps, épaisse, collante et brillante de l'huile de sésame.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des éraflures de doenjang pâle et de gochujang sombre encore visibles — pas complètement combinées. Une piscine pétrolière sur le dessus.",
            "action": "Mélanger plus vigoureusement pendant 30 secondes. Les pâtes ont besoin d'un mélange soutenu pour s'unir."
          },
          {
            "state": "Perfect",
            "description": "Une pâte d'auburn tout à fait uniforme et sombre. Graines de sésame et oignons de printemps distribués uniformément. Glossy de l'huile de sésame, pas grasse ou séparée. Des odeurs profondes de haricots fermentés et de sésame.",
            "action": "Reposez-vous pendant 10 minutes pour laisser les saveurs se fondre, puis servez."
          },
          {
            "state": "Overdone",
            "description": "Il n'est pas possible d'exagérer une pâte sans cuisson. Continuez.",
            "action": "Servez."
          }
        ]
      },
      "feelCue": "Ssamjang devrait se sentir comme un mortier épais et humide — assez raide pour tenir une poupée sans s'étendre, mais donnant quand pressé avec le dos d'une cuillère."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "mixed_ssamjang"
      ],
      "outputState": "finished_ssamjang",
      "instructions": "Couvrez le bol et reposez-vous au moins 10 minutes à la température ambiante avant de servir, ce qui permet à l'ail brut de se fondre légèrement et à l'huile de sésame de s'intégrer pleinement. Ssamjang s'améliore nettement sur quelques heures dans le frigo comme les saveurs se mélangent. A conserver dans un pot hermétique jusqu'à 2 semaines. Servir comme pâte à tremper pour le ssam (enveloppements de laitue), aux côtés des boulgogis, des crudités ou avec du riz à la vapeur.",
      "visualCue": {
        "primaryTarget": "Une pâte reposée avec une texture cohésive et légèrement définie, légèrement plus sèche sur la surface que lorsqu'elle est mélangée pour la première fois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servi immédiatement — l'ail cru est aiguisé et la pâte est disjointe, chaque composant étant discernable séparément.",
            "action": "Servir, mais noter qu'il s'améliore avec le repos."
          },
          {
            "state": "Perfect",
            "description": "Après 10 minutes, les saveurs se sont mélangées. La pâte a un goût de profondeur umami, de chaleur douce, de richesse en sésame et de douceur équilibrée — plus grand que la somme de ses parties.",
            "action": "Servir ou réfrigérer jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été réfrigérée mais non recouverte et séchée à la surface.",
            "action": "Incorporer quelques gouttes d'huile de sésame pour rétablir la consistance."
          }
        ]
      },
      "feelCue": "Un ssamjang reposé doit sentir complexe et fermenté plutôt que vif — le bord brut de l'ail s'adoucit à quelque chose de plus rond et plus profond."
    }
  ]
};
