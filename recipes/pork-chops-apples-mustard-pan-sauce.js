export default {
  "repoId": "master_american_porkchopsapplesmustard_001",
  "parentRepoId": null,
  "slug": "pork-chops-apples-mustard-pan-sauce",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Chopes de porc avec pommes, choux et sauce à la moutarde",
  "description": "Des côtelettes de porc épaisses cousues à une croûte d'or profond et reposées jusqu'à rougir et juteux, servies sur des pommes de tarte et du chou adoucies dans la graisse de porc et une sauce tannée de cidre-moutard brillant de beurre.",
  "cuisine": "Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "nuit",
    "porc",
    "Chopes de porc",
    "en mer",
    "pan-sauce",
    "Pommes",
    "Choux"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtelettes de porc désossées, d'environ 2,5 cm (1 pouce) d'épaisseur",
      "ratioValue": 1100,
      "defaultUnit": "g",
      "substitutions": [
        "côtelettes désossées coupées au centre (cuisez 1 à 2 minutes de moins)"
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
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Pommes fermes, sucrées à la tarte (comme Honeycrisp ou Pink Lady), cardées et coupées en quartiers de 1 cm",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "poires fermes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Choux verts, décortiqués et tranchés finement",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Choux savoy",
        "Choux de Bruxelles coupés en deux, tranchés finement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalote, tranchée finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "moitié un petit oignon jaune"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Cidre de pomme (non filtré, non alcoolique)",
      "ratioValue": 180,
      "defaultUnit": "ml",
      "substitutions": [
        "cidre dur sec",
        "jus de pomme plus 1 c. à thé vinaigre de cidre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stock de poulet, faible teneur en sodium",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Moutarde de Dijon à grains entiers",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Dijon lisse (utiliser 20 g)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1/2 c. à soupe de thym séché"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Beurre non salé, froid",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "seasoned_chops",
      "instructions": "Faites sécher les côtelettes. S'il y a un bouchon gras épais, coupez-le tous les 2 à 3 cm pour empêcher les côtelettes de se friser. Assaisonner généreusement de tous les côtés avec environ 1 1/2 c. à soupe de sel casher total et poivre. Laisser reposer à température ambiante 10-15 minutes pendant que vous coupez les pommes, le chou et l'échalote.",
      "visualCue": {
        "primaryTarget": "Coupez uniformément enduit de sel, les surfaces commençant à paraître légèrement humides lorsque le sel tire l'humidité puis commence à se dissoudre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sel assis dans des cristaux secs, visibles, à la surface désossée, directement du réfrigérateur.",
            "action": "Laissez-les reposer 10-15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le sel se dissout pour la plupart en un léger éclat à la surface.",
            "action": "Éliminez les perles d'humidité juste avant la mise en mer."
          },
          {
            "state": "Overdone",
            "description": "Puddles de liquide sous les côtelettes.",
            "action": "Pat complètement sec — les surfaces humides ne brunissent pas."
          }
        ]
      },
      "feelCue": "La surface doit se sentir légèrement collante sous un bout de doigt, pas mouillée."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "seasoned_chops",
        "ing_04"
      ],
      "outputState": "resting_chops",
      "instructions": "Chauffer l'huile dans une poêle lourde de 30 cm (fer ou acier inoxydable) de 12 pouces à feu moyen-élevé jusqu'à ce qu'elle fume. Placez les côtelettes, appuyez légèrement pour qu'elles entrent en contact complet, et faites la couture sans bouger de 4 à 5 minutes jusqu'à ce qu'elles soient profondément dorées. Flipez, réduisez le feu à moyen et faites cuire 3 à 5 minutes de plus, en tournant une fois de plus si nécessaire, jusqu'à ce qu'un thermomètre à lecture instantanée inséré près (sans toucher) de l'os indique 140°F (60°C). Tenez les côtelettes sur leurs bords gras pour la dernière minute. Transférer dans une assiette et reposer 5 minutes; la chaleur de report les amène à 145°F (63°C) sans danger USDA.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée profonde sur les deux faces, le bord gras rendu et croustillant; les jus se mettent légèrement sur la plaque de repos.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte seulement légèrement bronzée; thermomètre à moins de 135°F (57°C) près de l'os.",
            "action": "Continuer la cuisson sur le moyen, retourner chaque minute, et revérifier."
          },
          {
            "state": "Perfect",
            "description": "Croûte brûlée, 140°F (60°C) à la traction montant à 145°F (63°C) après le repos; centre rose pâle et juteux à la coupe.",
            "action": "Reposez-vous pendant que vous faites cuire les pommes et le chou dans la même casserole."
          },
          {
            "state": "Overdone",
            "description": "Chopes lues au-dessus de 155°F (68°C), se sentent raides, et le fond de poêle est noirci.",
            "action": "Couper finement et servir avec de la sauce supplémentaire; essuyer tout fond noir avant de continuer."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse : une côte bien cuite se sent comme la base charnue de votre pouce lorsque vous touchez le pouce au doigt médian – résilient, pas grinçant ou rocailleux."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "resting_chops",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_02"
      ],
      "outputState": "apples_and_cabbage",
      "instructions": "Verser tout sauf 1 c. à soupe de graisse dans la poêle. À feu moyen-vif, ajouter les coins de pomme en une seule couche et cuire 2 minutes de chaque côté jusqu'à ce que les bords soient caramélisés. Ajouter l'échalote, le chou et une pincée de sel et cuire, remuer, 4-5 minutes jusqu'à ce que le chou soit flétri et doré dans les taches, mais qu'il ait encore une bouchée.",
      "visualCue": {
        "primaryTarget": "Des coins de pomme dorés sur leurs visages coupés et tenant leur forme; le chou s'est effondré et flanqué de brun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pommes pâles et croustillantes, choux raides et cousues.",
            "action": "Donnez-lui 1-2 minutes de plus, jetant de temps en temps."
          },
          {
            "state": "Perfect",
            "description": "Pommes tendres aux bords mais intactes, chou doux avec une croûte douce et des patchs caramélisés.",
            "action": "Déglacer pour la sauce."
          },
          {
            "state": "Overdone",
            "description": "Les pommes s'effondrent dans la sauce, le chou boiteux et brûlé.",
            "action": "Procéder — il devient plus d'une compote, qui se marie encore bien."
          }
        ]
      },
      "feelCue": "Un coin de pomme devrait céder à une fourchette au bord, mais résister au centre, comme un remplissage de tarte juste cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer et monter",
      "inputs": [
        "apples_and_cabbage",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "resting_chops"
      ],
      "outputState": "finished_pork_chops",
      "instructions": "Verser le cidre et le bouillon, ajouter les brins de thym et racler les morceaux brunis. Faire bouillir de 4 à 5 minutes jusqu'à réduire d'environ la moitié. Réduire le feu à faible, remuer la moutarde et les jus de repos des côtelettes, puis tourner dans le beurre froid un morceau à la fois jusqu'à ce que brillant. Incorporer le vinaigre de cidre, jeter les tiges de thym et assaisonner. Retournez les côtelettes à la poêle pendant 30 secondes pour les réchauffer, en cuillerant la sauce dessus, et servir sur les pommes et le chou.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre brillante aux graines visibles de moutarde, enrobant les pommes et s'accrochant aux côtelettes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce fine et aqueuse, en courant directement hors de la cuillère; le goût est doux et plat.",
            "action": "Continuer à bouillir 1 à 2 minutes avant d'ajouter le beurre."
          },
          {
            "state": "Perfect",
            "description": "La sauce couvre une cuillère légèrement et semble satinée; douce-tart et tranchante de la moutarde.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à un sirop collant ou le beurre est cassé en perles grasses.",
            "action": "Fouetter en 2-3 c. à soupe l'eau de la chaleur pour la ramener ensemble."
          }
        ]
      },
      "feelCue": "Goûtez la sauce sur une cuillère : sucré du cidre d'abord, puis une netteté de moutarde et une finale de vinaigre propre."
    }
  ]
};
