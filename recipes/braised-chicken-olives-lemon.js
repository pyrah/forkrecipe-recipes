export default {
  "repoId": "master_mediterranean_braisedchickenoliveslemon_001",
  "parentRepoId": null,
  "slug": "braised-chicken-olives-lemon",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poulet braisé aux olives vertes et citron",
  "description": "Les cuisses de poulet à la peau de croûte se déposent dans une braise dorée ailky de fenouil, d'oignon, de vin blanc, d'olives vertes et de tranches de citron tendres qui deviennent confitureuses et amères doucement au four.",
  "cuisine": "Méditerranée",
  "culture": "Cuisine à la maison en Europe du Sud",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "braise",
    "congélateur",
    "poulet",
    "olives",
    "citron",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 2,
    "umami": 3,
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
        "jambes entières, divisées à l'articulation"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 12,
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
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons jaunes, tranchés finement",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Ampoule en fenouil, cardée et coupée en quartiers fins",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "céleri, tranché sur le biais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Ail, cassé",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "graines de fenouil, légèrement broyées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "stock supplémentaire plus 1 c. à soupe vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Stock de poulet, faible teneur en sodium",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Olives vertes (comme Castelvetrano), piquées",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "toute olive verte ferme et douce"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Citrus",
      "name": "Citron, frotté, à moitié tranché et ensemencé, à moitié jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "1/2 citron conservé, rind seulement, tranché (salut de sucre)"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Thym ou origan frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
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
      "outputState": "seared_thighs",
      "instructions": "Faire sécher le poulet et assaisonner avec du sel et du poivre (idéalement 1 à 24 heures à l'avance, découvert au réfrigérateur). Chauffer l'huile dans un brasseur de 30 cm ou un four hollandais à feu moyen. Éteignez les cuisses sur la peau, en lots au besoin, et faites cuire de 8 à 10 minutes jusqu'à ce que la graisse soit rendue et que la peau soit d'or profond. Flip pendant 1 minute, puis mettre de côté la peau vers le haut. Verser tout sauf 30 ml de graisse.",
      "visualCue": {
        "primaryTarget": "Tait, peau brun-or uniforme avec une surface crépitante et un bassin de gras rendu clair dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est pâle, molle et collante; peu de graisse dans la poêle.",
            "action": "Continuer à passer à feu moyen — se précipiter avec une chaleur élevée brûle la surface avant que la graisse rend."
          },
          {
            "state": "Perfect",
            "description": "La peau est uniformément dorée et serrée, se libère seule, et la graisse est claire et crache doucement.",
            "action": "Flipez brièvement, puis mettez de côté."
          },
          {
            "state": "Overdone",
            "description": "Peau foncée à brun-noir sur les bords; gros fumeurs.",
            "action": "Abaissez la chaleur et retirez les cuisses. Essuyez tous les morceaux brûlés avant de construire le braise."
          }
        ]
      },
      "feelCue": "Tapez la peau avec des pinces — il devrait sembler légèrement creux et se sentir croquant, comme un mince craquelin."
    },
    {
      "nodeId": "step_2",
      "action": "Construire la base",
      "inputs": [
        "seared_thighs",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "wine_fennel_base",
      "instructions": "Chauffer le four à 350°F (175°C). Dans le reste de la graisse, faire cuire l'oignon et le fenouil à feu moyen de 8 à 10 minutes jusqu'à ce qu'il soit doux et légèrement doré. Ajouter l'ail, la coriandre et le paprika et remuer 1 minute. Verser le vin et laisser mijoter 2 à 3 minutes, racler le fond, jusqu'à ce qu'il soit réduit d'environ la moitié.",
      "visualCue": {
        "primaryTarget": "Souple, oignon doré et fenouil dans un liquide ambré peu profond et bouillonnant, le plancher de la poêle est propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fenouil encore ferme et blanc; le vin sent fortement l'alcool.",
            "action": "Cuire les légumes plus longtemps avant le vin; laisser le vin buller encore une minute."
          },
          {
            "state": "Perfect",
            "description": "Légumes assombris et sucrés; le vin a perdu son bord boueux et est devenu sirupeux aux bords.",
            "action": "Ajouter le bouillon et nicher dans le poulet."
          },
          {
            "state": "Overdone",
            "description": "Vin complètement évaporé et les légumes sont frits.",
            "action": "Ajoutez immédiatement une touche de stock."
          }
        ]
      },
      "feelCue": "La piqûre d'alcool brut devrait être éliminée lorsque vous vous penchez sur la poêle; ce qui reste sent l'anis et l'ail chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "wine_fennel_base",
        "seared_thighs",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "braised_olive_chicken",
      "instructions": "Ajouter le bouillon, les olives, les tranches de citron et les brins d'herbe et laisser mijoter. Nettoyez les cuisses dans la peau avec la peau au-dessus du liquide. Braise à découvert au four 40–45 minutes, jusqu'à ce que la cuisse la plus épaisse lise au moins 165°F (74°C) — idéalement 185–195°F (85–90°C) pour la viande tendre près de l'os — et la sauce a diminué d'environ un tiers.",
      "visualCue": {
        "primaryTarget": "Peau brûlée et croustillante, assise fière d'une sauce dorée réduite parsemée d'olives et de tranches de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jus près de l'os sont roses; la viande s'accroche fermement à l'os; les tranches de citron sont encore raides.",
            "action": "Retourner au four 10 minutes et faire une nouvelle sonde."
          },
          {
            "state": "Perfect",
            "description": "La viande tire de l'os avec un remorqueur doux; tranches de citron translucides et douces; sauce concentrée et brillante.",
            "action": "Finissez."
          },
          {
            "state": "Overdone",
            "description": "Sauce réduite à un film collant, bords brûlants; peau foncée.",
            "action": "Ajouter 100–150 ml de bouillon chaud autour (pas plus) du poulet."
          }
        ]
      },
      "feelCue": "Tordre doucement l'os de la cuisse avec des pinces — il devrait tourner dans la viande avec peu de résistance."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et servir",
      "inputs": [
        "braised_olive_chicken",
        "ing_13",
        "ing_15"
      ],
      "outputState": "finished_olive_lemon_chicken",
      "instructions": "Reposez 5 minutes, puis pressez le jus de citron au goût (commencer par la moitié) et dispersez avec du persil. Servir avec du pain, du riz ou des pommes de terre pour tremper la sauce. Pour congeler : refroidir le poulet immergé dans sa sauce, réfrigérer dans les 2 heures et congeler jusqu'à 3 mois. La peau s'adoucit lors de la congélation — réchauffer couvert à 350°F (175°C) jusqu'à ce que le poulet atteigne 165°F (74°C), puis découvrir sous le grilleur 2–3 minutes à récrisp.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante et éclaircie avec des taches d'herbe verte visibles autour du poulet doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût lourd et salé des olives.",
            "action": "Ajouter plus de jus de citron une cuillère à café à la fois."
          },
          {
            "state": "Perfect",
            "description": "Briny, brillant et salé dans l'équilibre; tranches de citron assez douces pour manger entier.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Trop aigre ou aigre de trop de citron.",
            "action": "Ajouter un peu de bouillon et un petit bouton de beurre pour le arrondir; retirer quelques tranches de citron."
          }
        ]
      },
      "feelCue": "Goûtez une tranche de citron – elle doit être tendre et agréablement amère, pas dure ou amère."
    }
  ]
};
