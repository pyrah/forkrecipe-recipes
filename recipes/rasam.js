export default {
  "repoId": "master_south_indian_rasam_001",
  "parentRepoId": null,
  "slug": "rasam",
  "author": "ForkRecipe Kitchen",
  "title": "Rasam",
  "description": "Un bouillon de tamarin-tomate très aigre et poivré qui nettoie les sinus et réchauffe la poitrine — si mince qu'il est bu directement d'une tasse, mais si complexe qu'il peut ancrer un repas entier. Ne vous trompez pas de simplicité.",
  "cuisine": "Inde du Sud",
  "culture": "Tamil Nadu",
  "category": "stocks",
  "tags": [
    "bouillon",
    "Tamarin",
    "poivre",
    "végétalien",
    "Sans gluten",
    "Inde du Sud",
    "digestif"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 760,
  "forks": 45,
  "contributors": 15,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-02-01",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 5,
    "bitter": 2,
    "umami": 2,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Pâte de tamarin (concentrée)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Tomates, coupées en morceaux",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Maïs de poivre noir, grossièrement broyé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de cumin, concassées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile écrasée",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Ghee ou huile neutre",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Graines de moutarde",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles fraîches de curry",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "rasam_broth",
      "instructions": "Mélanger la pâte de tamarin, la tomate hachée, le poivre noir écrasé, le cumin, l'ail écrasé, le sel et l'eau dans un pot moyen. Porter à ébullition à feu vif, puis laisser mijoter vigoureusement. Cuire à découvert pendant 15 à 20 minutes, presser les morceaux de tomate avec une cuillère pour les aider à se décomposer. Le bouillon doit sentir fortement le poivre et le tamarin.",
      "visualCue": {
        "primaryTarget": "La surface du rasam — sa couleur, son activité et l'état de la tomate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est ambre pâle; la tomate est encore dans des morceaux reconnaissables; l'auresse brute du tamarin est nette et unidimensionnelle.",
            "action": "Continuer à mijoter jusqu'à ce que la tomate se décompose complètement et que la couleur s'approfondisse au brun rougeâtre."
          },
          {
            "state": "Perfect",
            "description": "Bouillon rougeâtre-ambre profond, très mince et clair. La tomate s'est dissoute dans le bouillon, ne laissant que des peaux. Aroma est intensément aigre, poivré et chaud.",
            "action": "Soucher si désiré ou procéder à tadka comme-est."
          },
          {
            "state": "Overdone",
            "description": "Broth a réduit à presque la moitié et commence à se concentrer — la saveur est trop intense et acide.",
            "action": "Ajouter 50ml d'eau, laisser mijoter brièvement et goûter."
          }
        ]
      },
      "feelCue": "Rasam doit être aussi mince et transparent qu'un thé de couleur profonde — incliner le pot et le bouillon doit s'arroser facilement, sans corps ni viscosité du tout."
    },
    {
      "nodeId": "step_2",
      "action": "Faire infuser",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "rasam_tadka",
      "instructions": "Chauffer le ghee dans une petite poêle à feu vif jusqu'à ce qu'il fume légèrement. Ajouter les graines de moutarde, couvrir immédiatement, et attendre de sauter rapidement. Ajouter les feuilles de curry — elles éclabousseront dans la graisse chaude. Incorporer 10 secondes, puis verser directement dans le rasam.",
      "visualCue": {
        "primaryTarget": "Les graines de moutarde — leur son et le changement de couleur dans le ghee.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines n'ont pas sauté — l'huile n'est pas assez chaude.",
            "action": "Levez la chaleur et couvrez-vous ; attendez la première pop."
          },
          {
            "state": "Perfect",
            "description": "Les graines ont toutes sauté, de couleur grisâtre-blanc; les feuilles de curry sont croquantes et translucides. Ghee est parfumé avec une chaleur de noix.",
            "action": "Versez immédiatement dans le rasam."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont noires et l'odeur acride — la graisse brûlée ne peut pas être récupérée.",
            "action": "Jetez entièrement et répétez-le dans un ghee frais."
          }
        ]
      },
      "feelCue": "Quand la ghee tadka s'enfonce dans le rasam chaud, elle doit s'asseoir brièvement sur la surface comme une lécher d'or avant d'être agitée — ce moment visuel fait partie de la tradition."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "rasam_broth",
        "rasam_tadka"
      ],
      "outputState": "finished_rasam",
      "instructions": "Incorporer le tadka dans le rasam. Boucher et corriger: ajouter plus de tamarin si elle a besoin de plus d'ameresse, plus de poivre concassé si elle a besoin de chaleur, sel si plat. Le rasam doit frapper les quatre notes — aigre, épicé, salé, amer — simultanément. Servir très chaud dans des tasses à côté du riz ou boire droit.",
      "visualCue": {
        "primaryTarget": "Le rasam dans le bol ou la tasse de service — sa clarté et la surface tremblent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est encore turbide et les épices ont un goût intégré mais cru; l'aurore est nette plutôt que ronde.",
            "action": "Retourner à la chaleur pendant 5 minutes et goûter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Bouillon ambré fin et profond avec une lécherette de ghee à la surface. Assez translucide pour voir le fond d'un bol blanc. L'arôme est en couches et simultanément aigre, chaud et chaud.",
            "action": "Servir immédiatement — le rasam ne s'améliore pas s'il est assis."
          },
          {
            "state": "Overdone",
            "description": "Rasam est devenu trop concentré et aigre; l'aurore envahit tout le reste.",
            "action": "Diluer à l'eau chaude et ajouter une pincée de sucre ou un petit morceau de jaggery pour rééquilibrer."
          }
        ]
      },
      "feelCue": "Une cuillère de rasam parfait devrait créer une sensation de réchauffement qui se déplace de l'extrémité de la langue à l'arrière de la gorge dans une vague — atterrissage aigre d'abord, puis la chaleur lente du poivre se levant après avoir avalé."
    }
  ]
};
