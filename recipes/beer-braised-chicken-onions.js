export default {
  "repoId": "master_belgian_beerbraisedchickenonions_001",
  "parentRepoId": null,
  "slug": "beer-braised-chicken-onions",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poulet braisé avec oignons",
  "description": "Les cuisses de poulet braisées dans l'ale brune sur un tas d'oignons cuits lentement, profondément dorés, la sauce maltée et légèrement amère, aiguisées à la fin avec de la moutarde et une touche de vinaigre.",
  "cuisine": "Belgique",
  "culture": "Cuisine maison d'inspiration flamande",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "braise",
    "congélateur",
    "poulet",
    "bière",
    "oignons",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "1 hr 45 min",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisses de poulet, désossées et sur la peau (environ 8)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "jambes entières, cassées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher, divisé",
      "ratioValue": 14,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "plus de graisse de poulet rendu"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignons jaunes, coupés en deux et tranchés finement",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "moitié oignons, moitié poireaux"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Carottes, coupées en morceaux de 3 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "panais",
        "Racine de céleri"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Ail, tranché",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Farine à usage général",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "1 tranche de pain de seigle tartiné à la moutarde, posé sur le dessus pour dissoudre"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Bière brune ou ambre foncée (pas très houblonnée)",
      "ratioValue": 330,
      "defaultUnit": "ml",
      "substitutions": [
        "cidre sec",
        "bière noire non alcoolique"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Stock de poulet, faible teneur en sodium",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Feuilles de laurier séchées",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Moutarde de Dijon",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Acid",
      "name": "vinaigre de cidre",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de malt"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Garnish",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Côté peau de la couture",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "seared_chicken",
      "instructions": "Sécher les cuisses et assaisonner avec 10 g de sel et le poivre. Chauffer l'huile dans un four hollandais de 5 à 6 litres à feu moyen. Cuire les cuisses côté peau vers le bas, en lots, 8-10 minutes jusqu'à ce que la peau soit profondément dorée et qu'une grande partie de la graisse ait rendu; retourner pendant 1 minute et réserver. Verser tout sauf 2 c. à soupe de graisse.",
      "visualCue": {
        "primaryTarget": "Même brun doré, peau croustillante et une couche de gras clair et brun clair dans la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Peau pâle et douce, collée au pot.",
            "action": "Donnez-lui 2–3 minutes de plus; ne la forcez pas à se détacher."
          },
          {
            "state": "Perfect",
            "description": "Peau d'or profond et serrée, libérée seule.",
            "action": "Flipez brièvement et réservez."
          },
          {
            "state": "Overdone",
            "description": "Peau brun foncé à noir sur les bords; fumée grasse.",
            "action": "Abaissez la chaleur; essuyez toute affection brûlée afin qu'elle ne rende pas les oignons amers."
          }
        ]
      },
      "feelCue": "La peau doit se sentir sèche et ferme sous les pinces, pas caoutchouteuse."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "seared_chicken",
        "ing_05",
        "ing_06",
        "ing_02"
      ],
      "outputState": "golden_onions",
      "instructions": "Ajouter le beurre, les oignons et 2 g de sel dans la casserole. Cuire à feu moyen à moyen-doux de 25 à 30 minutes, en remuant toutes les quelques minutes et en grattant le fond, jusqu'à ce que les oignons soient doux, confitureux et brun doré profond. S'ils commencent à coller ou à s'assombrir trop rapidement, ajoutez un jet d'eau et de racler.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement réduit, doux et brillant d'oignons brun-ambre environ un tiers de leur volume original.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont limpides mais blond pâle; ils sentent encore vifs.",
            "action": "Continuez à cuisiner — la saveur vient dans les 10 dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde, collante et sucrée, tenant ensemble dans des touffes douces.",
            "action": "Ajouter les carottes, l'ail et la farine."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à noir aux bords, odeur amère.",
            "action": "Déglacer avec de l'eau; si elle est amère, l'amertume de la bière la compense — commencer les oignons frais."
          }
        ]
      },
      "feelCue": "Les oignons devraient se sentir comme de la confiture douce contre la cuillère, et le son devrait être un étourdissement calme, jamais un frire fort."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "golden_onions",
        "seared_chicken",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "beer_braised_chicken",
      "instructions": "Chauffer le four à 325°F (165°C). Incorporer les carottes et l'ail dans les oignons pendant 2 minutes, puis saupoudrer de farine et remuer 1 minute. Verser la bière et le bouillon, gratter le fond et laisser mijoter. Ajouter le thym et la laurier, nicher la peau du poulet avec la peau au-dessus du liquide, et braiser à découvert au four 45-50 minutes, jusqu'à ce que les cuisses lisent au moins 165°F (74°C) — idéalement 185-195°F (85-90°C) — et que les carottes soient tendres.",
      "visualCue": {
        "primaryTarget": "Poulet assis dans une sauce épaisse, brillante, marron-brun avec des carottes tendres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce fine et bière; rose poulet près de l'os; carottes fermes.",
            "action": "Braise 10 minutes de plus et sonde de nouveau."
          },
          {
            "state": "Perfect",
            "description": "Sauce épaissie et maltée, viande tirée de l'os, carottes transpercées facilement.",
            "action": "Finissez la sauce."
          },
          {
            "state": "Overdone",
            "description": "Sauce réduite à une pâte et attraper aux bords.",
            "action": "Ajouter le bouillon chaud autour du poulet pour se détendre."
          }
        ]
      },
      "feelCue": "Un couteau à parure doit glisser dans un morceau de carottes et la viande de cuisse avec la même facilité donner."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et servir",
      "inputs": [
        "beer_braised_chicken",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "finished_beer_chicken",
      "instructions": "Enlevez les tiges de thym et les feuilles de laurier. Incorporer la moutarde et le vinaigre dans la sauce autour du poulet et goûter au sel. Scatter avec du persil. Servir avec des pommes de terre bouillies, des nouilles d'oeuf ou des frites épaisses. Pour congeler : refroidir avec le poulet couvert de sauce, réfrigérer dans les 2 heures et congeler jusqu'à 3 mois. Réchauffer à 350 °F (175 °C) jusqu'à ce que le poulet atteigne 165 °F (74 °C).",
      "visualCue": {
        "primaryTarget": "Une sauce brun brillant avec un éclat vif, tacheté de persil.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût lourd et plat, avec de l'amertume à la finale.",
            "action": "Ajouter le vinaigre ou la moutarde un peu à la fois jusqu'à ce qu'il se lève."
          },
          {
            "state": "Perfect",
            "description": "L'oignon doux, le malt et l'amertume douce équilibrés par de la moutarde tang.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Sauce trop nette de l'excès de vinaigre.",
            "action": "Incorporer un petit bouton de beurre ou une pincée de sucre brun."
          }
        ]
      },
      "feelCue": "La sauce doit s'accrocher à une cuillère comme de la sauce fine et laisser une agréable amertume de malt à l'arrière de la langue."
    }
  ]
};
