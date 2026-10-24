export default {
  "repoId": "master_italian_mushroombarleyrisotto_001",
  "parentRepoId": null,
  "slug": "mushroom-barley-risotto",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Champignons Barley Risotto",
  "description": "L'orge de perle brasse lentement en bouillon chaud jusqu'à ce que chaque grain soit plumé et mâché dans une sauce crémeuse, riche en fromage, puis couronné de champignons profondément dorés et parfumés de thym. Terreux, noisette, et lourd à savourer.",
  "cuisine": "Italien",
  "culture": "Nord d'inspiration italienne",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "orge",
    "champignons",
    "Risotto",
    "la nourriture confortable"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "70 min",
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
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Champignons mélangés (crémini, shiitake, huître), tranchés",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "tous crémini"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive, divisée",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1/2 c. à soupe de thym séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes coupées en dés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "1 petit oignon jaune"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Oxyde de perle, rincé",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "1 c. à soupe de jus de citron plus 110 ml de bouillon"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks de légumes, conservés au chaud",
      "ratioValue": 1300,
      "defaultUnit": "ml",
      "substitutions": [
        "Matériel de champignons"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé, froid et cube",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Fromage dur de type parmesan (rennet végétarien), râpé finement",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "fromage végétarien de type pecorino vieilli"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 0,
      "defaultUnit": "to taste",
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
        "ing_13"
      ],
      "outputState": "browned_mushrooms",
      "instructions": "Chauffer 30 ml d'huile dans un grand pot lourd à feu moyen-vif. Ajouter les champignons en une seule couche (en deux lots s'ils sont encombrés) et laisser intacts 4 minutes. Mélanger, puis cuire encore 4 à 6 minutes jusqu'à ce que l'eau libérée s'évapore et que les champignons soient profondément dorés. Ajouter le thym, la sauce soja et une pincée de poivre, remuer 30 secondes, puis transférer dans un bol. Laissez le pot non lavé.",
      "visualCue": {
        "primaryTarget": "Champignons mijotés de moitié, marron-brun sur les faces coupées, avec une poêle sèche et un fond brun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont gris et assis dans une flaque de leur propre liquide.",
            "action": "Gardez la cuisson à feu vif; le brunissement ne commence qu'une fois l'eau partie."
          },
          {
            "state": "Perfect",
            "description": "Bords brillants et profondément bronzés; la poêle est sèche et étourdissante.",
            "action": "Assaisonner et retirer dans un bol."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont rhivés, cuireux, et le fond est noir.",
            "action": "Déglacer les morceaux noirs avec un jet d'eau et jeter avant de continuer."
          }
        ]
      },
      "feelCue": "Le étourdissement devrait passer d'un sifflement humide à un craquelin aigu — ce changement de son vous dit que l'eau est partie et le brunissement a commencé."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "browned_mushrooms",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "toasted_barley",
      "instructions": "Abaissez le feu à moyen et ajoutez le reste de 15 ml d'huile dans la même casserole. Cuire les échalotes de 3 à 4 minutes jusqu'à tendreté, ajouter l'ail pendant 30 secondes, puis ajouter l'orge. Mélanger 2 à 3 minutes afin que les grains toast et ramasser le fond de champignons.",
      "visualCue": {
        "primaryTarget": "Les grains d'orge scintillent avec de l'huile, une nuance plus dorée, avec la marmite de desserrage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains semblent humides et pâles; aucune odeur grillée.",
            "action": "Remue-toi encore une minute."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont brillants, légèrement dorés et sentent le pain grillé.",
            "action": "Verser le vin."
          },
          {
            "state": "Overdone",
            "description": "L'ail brunit dur et les grains brûlent sur le fond.",
            "action": "Ajouter le vin immédiatement pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Stirré, l'orge doit rouiller et cliquer légèrement contre le pot comme des perles sèches."
    },
    {
      "nodeId": "step_3",
      "action": "Construire louche par louche",
      "inputs": [
        "toasted_barley",
        "ing_08",
        "ing_09",
        "ing_13"
      ],
      "outputState": "creamy_barley",
      "instructions": "Ajouter le vin et remuer jusqu'à presque complètement absorbé, environ 2 minutes. Ajouter le bouillon chaud une louche (environ 180 ml) à la fois, en remuant souvent et en ajoutant plus lorsque la casserole semble presque sèche. Gardez-vous à l'aise. L'orge prend 35 à 40 minutes — plus longtemps que le riz — et ne sera pas aussi crémeuse, donc remuez bien pour libérer son amidon. Assaisonner avec du sel à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Graines enflées de plomb, suspendues dans une sauce molle et crémeuse qui se propage lentement lorsqu'elle est cuillérée sur une assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont fermes et crayeux au centre; la sauce est fine et aqueuse.",
            "action": "Continuez à ajouter du bouillon et à remuer; goûtez toutes les 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont tendres avec une agréable mâche; la sauce est crémeuse et coule dans une vague lente.",
            "action": "Retirer le feu et finir avec du beurre et du fromage."
          },
          {
            "state": "Overdone",
            "description": "L'orge éclate et le mélange est épais et collant.",
            "action": "Loosen avec un jet de bouillon chaud et servir tout de suite."
          }
        ]
      },
      "feelCue": "Mâchez un grain: il devrait être tendre tout au long avec une mâche al dente printanière — l'orge ne devient jamais complètement molle comme l'arborio."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "creamy_barley",
        "browned_mushrooms",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_barley_risotto",
      "instructions": "Hors du feu, ajouter le beurre froid et le fromage râpé et battre vigoureusement avec une cuillère en bois pendant 30 secondes jusqu'à ce qu'il soit brillant. Pliez dans les deux tiers des champignons. Reposez 1 minute, desserrez-vous avec un peu de bouillon si nécessaire, puis servez-le avec les champignons restants, le persil et le poivre noir.",
      "visualCue": {
        "primaryTarget": "Un risotto glosseux, pâle-or flocé de champignons bruns qui se propage dans une vague douce sur l'assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de beurre visibles; la sauce a l'air grasse plutôt que crémeuse.",
            "action": "Continuer à battre jusqu'à ce que le beurre soit complètement émulsifié."
          },
          {
            "state": "Perfect",
            "description": "Brillant, cohésif et lâche, il s'écroule doucement sur l'assiette.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Stiff monticule qui tient sa forme comme du porridge.",
            "action": "Battre en stock chaud quelques cuillères à soupe à la fois."
          }
        ]
      },
      "feelCue": "Secouez l'assiette : le risotto doit s'enrouler et s'installer, le classique « onde », plutôt que de s'asseoir comme un monticule solide."
    }
  ]
};
