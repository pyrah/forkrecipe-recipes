export default {
  "repoId": "master_mediterranean_skilletchickenlemonorzo_001",
  "parentRepoId": null,
  "slug": "skillet-chicken-lemon-orzo",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poulet au citron Orzo et aux épinards",
  "description": "Les cuisses de poulet dorées terminent la cuisson sur un lit d'orzo qui mijote en stock et le zeste de citron jusqu'à ce qu'il devienne lâche et crémeux, puis obtient une poignée de dernière minute d'épinards, de beurre et une pression de citron qui réveille toute la poêle.",
  "cuisine": "Méditerranée",
  "culture": "Cuisine américaine à domicile",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "nuit",
    "poulet",
    "1 pan",
    "Cuisinière",
    "orzo",
    "citron",
    "en mer"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Cuisses de poulet sans peau, désossées, parées",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "poitrines de poulet désossées, divisées en tranches minces"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon jaune, finement haché",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Orzo, sec",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "ditalini"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stock de poulet, faible teneur en sodium",
      "ratioValue": 750,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Citrus",
      "name": "Citron, zeste puis jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Base",
      "name": "Petits épinards",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "chou haché, ajouté 3 minutes plus tôt"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Parmesan, râpé finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "feta émiettée, éparpillée sur le dessus à la place"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "D'aneth ou de persil frais, hachés",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "seared_thighs",
      "instructions": "Patientez les cuisses très sèches et assaisonnez les deux côtés avec environ 1 c. à thé de sel casher total, poivre et le paprika. Chauffer l'huile dans une poêle de 30 cm de 12 pouces avec un couvercle à feu moyen-élevé jusqu'à ce qu'elle mijote. Placez les cuisses dans le côté lisse et faites cuire sans bouger pendant 4 à 5 minutes, jusqu'à ce qu'elles soient profondément dorées et qu'elles se détachent de la poêle. Flip et faire revenir le deuxième côté pendant 2 minutes. Transférer dans une assiette — ils ne seront pas encore cuits.",
      "visualCue": {
        "primaryTarget": "Une croûte d'acajou-or sur le premier côté et une couche de couleur brune sur le plancher de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface de bronzage pâle qui déchire et colle lorsque vous essayez de le soulever.",
            "action": "Laissez-la encore une minute, elle se libérera seule une fois que la croûte se formera."
          },
          {
            "state": "Perfect",
            "description": "Même la croûte russée aux bords dardés de paprika, libérant proprement; la poêle est ambrée, non noire, tendre.",
            "action": "Brûler brièvement le deuxième côté et réserver."
          },
          {
            "state": "Overdone",
            "description": "Paprika brûlée à brun foncé avec une odeur d'acre; tendre tournant noir.",
            "action": "Abaissez la chaleur, essuyez les taches noires avec une serviette en papier avant d'ajouter l'oignon."
          }
        ]
      },
      "feelCue": "Les cuisses doivent grincer dur tout le temps — si le son tombe à un sifflement doux, la poêle s'est refroidie et le poulet est en vapeur."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "seared_thighs",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "toasted_orzo",
      "instructions": "Baisser le feu à moyen. Ajouter l'oignon à la graisse laissée dans la poêle avec une pincée de sel et faire cuire, grattant le fond, pendant 3 minutes jusqu'à adoucir. Ajouter l'ail et cuire 30 secondes, puis ajouter l'orzo sec et remuer constamment pendant 2 minutes, jusqu'à ce que certains grains deviennent dorés et sentent la noix.",
      "visualCue": {
        "primaryTarget": "Grains d'orzo enduits de graisse, une dispersion d'eux grillés à l'or pâle, l'oignon translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Orzo encore uniformément blanc crayeux et odeur de farine crue.",
            "action": "Continuez à remuer encore 30 à 60 secondes."
          },
          {
            "state": "Perfect",
            "description": "Grains d'or léger, arôme de popcorn de noix, ail parfumé mais pas brun.",
            "action": "Versez le stock tout de suite."
          },
          {
            "state": "Overdone",
            "description": "Grains brun foncé et ail amer.",
            "action": "Continuer, mais attendre une saveur plus grillée; ajouter le jus de citron généreusement à la fin pour équilibrer."
          }
        ]
      },
      "feelCue": "L'orzo devrait se battre et patiner à travers la poêle lorsqu'il est agité, comme du riz sec, et sentir comme du pain grillé."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "toasted_orzo",
        "seared_thighs",
        "ing_09",
        "ing_10"
      ],
      "outputState": "simmered_orzo_chicken",
      "instructions": "Verser le bouillon et le zeste de citron, racler le fond et porter à ébullition. Nettoyez le poulet dans le côté brun avec n'importe quel jus. Couvrir, réduire à faible et laisser mijoter 12 à 14 minutes, en remuant l'orzo autour du poulet une fois à mi-chemin, jusqu'à ce que l'orzo soit tendre et que la cuisse la plus épaisse lise au moins 165°F (74°C) sur un thermomètre à lecture instantanée.",
      "visualCue": {
        "primaryTarget": "Plump, tendre orzo suspendu dans une sauce molle et féculente avec le poulet assis sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bouillon mince à l'orzo ferme, centré sur la craie; poulet de moins de 165°F (74°C).",
            "action": "Couvrir et cuire encore 2 à 3 minutes; ajouter une éclaboussure d'eau si la poêle semble sèche avant que l'orzo soit tendre."
          },
          {
            "state": "Perfect",
            "description": "Orzo tendre avec une légère bouchée, collée dans une sauce crémeuse qui bouge quand la poêle est inclinée; poulet à 165°F (74°C) ou plus.",
            "action": "Enlevez la chaleur et terminez."
          },
          {
            "state": "Overdone",
            "description": "Orzo gonflé et collé à la poêle dans une masse sèche.",
            "action": "Loyer avec 60 à 120 ml de bouillon chaud ou d'eau, en remuant jusqu'à ce qu'il soit crémeux."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la casserole : l'orzo doit remonter lentement comme un risotto lâche, ne pas tenir une tranchée."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "simmered_orzo_chicken",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "finished_chicken_orzo",
      "instructions": "Soulevez le poulet sur une planche. Incorporer les épinards dans l'orzo chaud par des poignées jusqu'à ce qu'ils soient flétris, puis mélanger le beurre, le parmesan et 2 c. à soupe du jus de citron. Goûtez et ajoutez plus de jus de citron, sel et poivre. Couper ou laisser les cuisses entières, les retourner dans la poêle et les disperser avec l'aneth ou le persil. Laisser reposer 3 minutes avant de servir; l'orzo s'épaissit tel quel.",
      "visualCue": {
        "primaryTarget": "Gloire, orzo pâle-or rayé d'épinards vert foncé, poulet sur le dessus, herbes brillantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Épinards encore raides et crus, beurre en morceaux non fondus.",
            "action": "Continuer à plier à feu doux pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Les épinards se sont effondrés, la sauce est brillante du beurre et du fromage, l'arôme de citron est levé de la poêle.",
            "action": "Servir au chaud."
          },
          {
            "state": "Overdone",
            "description": "Épinards vert armée et eauux, sauce serrée et maladroite.",
            "action": "Incorporer un peu de bouillon chaud et un peu de jus de citron supplémentaire pour relancer."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère d'orzo seule — il devrait être assez lumineux pour que vous remarquez le citron d'abord et le sel de seconde."
    }
  ]
};
