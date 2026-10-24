export default {
  "repoId": "master_american_smash-burger-sauce_001",
  "parentRepoId": null,
  "slug": "smash-burger-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce de Burger Smash",
  "description": "La sauce secrète à cinq ingrédients qui sépare un hamburger fracassé d'un hamburger régulier – mayo crémeux, ketchup sucré, jus de cornichon briné, moutarde pointue, et juste assez de cayenne pour vous rappeler qu'il est là. C'est la raison pour laquelle chaque bouchée a un goût plus complet que la somme de ses parties.",
  "cuisine": "Américain",
  "culture": "Diner américain",
  "category": "condiments",
  "tags": [
    "américains",
    "burger",
    "sauce",
    "dîner",
    "condiment",
    "Vite",
    "Mayo",
    "cornichons"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Mayonnaise (grave, pas légère)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Mayo kewpie japonais (plus riche, plus umami)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Ketchup",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sriracha ketchup (ajoute de la chaleur)",
        "pâte de tomate + sucre de pincée (moins sucré)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Saumure de cornichon d'aneth (à partir du pot)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc (récolte, moins de saveur)",
        "saumure de cornichon"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Moutarde jaune (style américain)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Dijon (plus complexe)",
        "sol en pierre (texte de l'encolure)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Poudre d'ail",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre d'oignon (sweeter)",
        "ail frais (mentionné très fin)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre de Cayenne (poudre — juste assez pour sentir)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé (pas de chaleur, ajoute de la couleur)",
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Pickles d'aneth coupés (déjà fine, garniture en option dans la sauce)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Choux de pain et de beurre",
        "Câpres (plus saumure)"
      ]
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
        "ing_06"
      ],
      "outputState": "base_sauce",
      "instructions": "Mélanger la mayonnaise, le ketchup, la saumure de cornichon, la moutarde, la poudre d'ail et la cayenne dans un petit bol. Incorporer avec une fourchette ou un petit fouet jusqu'à ce qu'il soit complètement uniforme et lisse. La saumure desserre la mayo de façon significative, de sorte que la sauce finie est plus versable que la mayo standard — c'est exact, elle lui permet de se répandre dans chaque crevasse de la patte cassée et le pain.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse et uniformément rose-pêche, sans stries visibles de mayo blanc ou de ketchup rouge. La couleur doit être une rose-orange cohérente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de ketchup encore visibles dans la mayo. La sauce semble marbrée plutôt que uniforme.",
            "action": "Continuer à remuer jusqu'à ce qu'il soit entièrement incorporé. Il ne devrait pas rester de stries."
          },
          {
            "state": "Perfect",
            "description": "Couleur lisse et uniforme de rose-pêche. Plus mince que mayo seul. Ça sent la brume, la moutarde et la savoureuse.",
            "action": "Plier dans les cornichons hachés et goûter."
          },
          {
            "state": "Overdone",
            "description": "La sauce était trop fouettée et est maintenant un peu aérée et moelleuse.",
            "action": "Mélanger doucement avec une cuillère à poser. La texture reviendra à la normale dans quelques minutes."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir crémeuse et légèrement coulante — pas raide comme la mayo droite, mais pas mince comme une vinaigrette. Une cuillère trempée et levée devrait contenir un enduit, mais laisser l'excès couler librement après 2 secondes."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "base_sauce",
        "ing_07"
      ],
      "outputState": "finished_smash_burger_sauce",
      "instructions": "Pliez dans les cornichons en dés d'aneth. Goûtez et ajustez : plus de ketchup pour la douceur, plus de saumure de cornichon pour la netteté, plus de moutarde pour la morsure, plus de cayenne pour la chaleur. La sauce s'améliore avec 15 à 30 minutes de temps de repos au réfrigérateur — les saveurs se mélangent et la saumure de cornichon s'intègre pleinement dans la mayo. Appliquer généreusement sur le pain du bas avant de construire le hamburger.",
      "visualCue": {
        "primaryTarget": "sauce peachy-rose parsemée de petits morceaux de cornichon vert-blanc. Gloire et invitation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat et unidimensionnel — juste mayo et ketchup. Pas d'acide brillant ou de complexité.",
            "action": "Ajouter plus de saumure de cornichon par la cuillère à café et une autre petite pression de moutarde. L'acide fait fonctionner la sauce."
          },
          {
            "state": "Perfect",
            "description": "Crémeux, acidulé, légèrement sucré, avec une chaleur douce à l'arrière de la gorge. Les pickles ajoutent croquant et intensité. Les saveurs sont équilibrées — aucun élément ne domine.",
            "action": "Réfrigérer jusqu'à ce que nécessaire ou appliquer directement sur les hamburgers."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop aigre ou bricolée — la saumure de cornichon domine tout.",
            "action": "Ajouter plus de mayo et une petite pression supplémentaire du ketchup pour équilibrer l'acide en proportion."
          }
        ]
      },
      "feelCue": "Un petit goût de la sauce finie devrait enrober votre langue avec douceur et crémosité avant l'arrivée du tang, puis la chaleur de la moutarde, puis une finition propre de l'aneth. Il devrait vous faire vouloir immédiatement quelque chose pour le mettre."
    }
  ]
};
