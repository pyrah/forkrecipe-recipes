export default {
  "repoId": "master_american_slow_roasted_salmon_001",
  "parentRepoId": null,
  "slug": "slow-roasted-salmon-herb-sauce",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Saumon rôti avec sauce aux herbes vertes",
  "description": "Un côté entier du saumon cuit doucement dans un four bas jusqu'à ce qu'il transforme le corail et la crème-douce, en couches soyeuses sous une cuillère brillamment brinée d'herbes hachées, de câpres et de citron.",
  "cuisine": "Américain",
  "culture": "Cuisine maison américaine",
  "category": "seafood",
  "tags": [
    "saumon",
    "poissons",
    "torréfié lentement",
    "herbe-sauce",
    "divertissant",
    "cuisine maison",
    "weekend"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr",
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
      "name": "Saumon, un côté sur la peau (environ 1,1 kg), os d'épingles enlevés",
      "ratioValue": 1100,
      "defaultUnit": "g",
      "substitutions": [
        "côté omble arctique",
        "six filets de 180 g (vérifier 5 minutes plus tôt)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive, divisée (15 ml pour le poisson, repos pour la sauce)",
      "ratioValue": 135,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles et tiges tendres, finement hachées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "coriandre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Dill, frondes finement hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "estragon (utiliser moitié)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Pigeons, tranchés finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "verts de pétoncle"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalote hachée",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "1/4 petit oignon rouge"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Câpres, égouttées et hachées",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "olives vertes hachées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Citrus",
      "name": "Citron, zeste et jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": [
        "Poivre d'Alep (utiliser 1/2 c. à thé)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "seasoned_salmon",
      "instructions": "Chauffer le four à 275°F (135°C). Ligner une plaque à bord avec parchemin. Reposez la peau du saumon vers le bas, tapez la partie supérieure sèche et assaisonnez uniformément avec environ 8 g de sel et un peu de poivre. Ajouter 15 ml d'huile d'olive sur la chair. Laisser reposer à température ambiante pendant que le four chauffe, 15-20 minutes. Si l'extrémité fine de la queue est beaucoup plus mince que le centre, le placer sous elle-même afin que l'épaisseur soit plus uniforme.",
      "visualCue": {
        "primaryTarget": "Flesh brillant avec un mince film d'huile, sel se dissolvant visiblement en petites taches humides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cristaux de sel sont toujours secs sur le dessus, ou l'eau est mise en réserve sur la chair parce qu'elle n'était pas sèche.",
            "action": "Bloquez la surface avec une serviette en papier et donnez-lui quelques minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "La surface est uniformément brillante, le sel a fondu dans, et le poisson ne se sent plus froid au réfrigérateur à la partie la plus épaisse.",
            "action": "Passez à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Épargnez - vous plus d'une heure par jour chaud: la chair semble terne et molle.",
            "action": "Faites rôtir immédiatement; ne laissez pas le poisson cru dehors plus de 30 minutes environ."
          }
        ]
      },
      "feelCue": "La chair doit se sentir fraîche et ferme, mais pas glacée, en ressortant lorsqu'elle est pressée."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtissement lent",
      "inputs": [
        "seasoned_salmon"
      ],
      "outputState": "slow_roasted_salmon",
      "instructions": "Faire cuire sur le support du milieu pendant 25 à 35 minutes, selon l'épaisseur, jusqu'à ce qu'un thermomètre à lecture instantanée dans la partie la plus épaisse indique 120 à 125°F (49 à 52°C). Remarque : ceci est intentionnellement en dessous de la ligne directrice de l'USDA sur les poissons (63°C) – à cette basse température du four, le saumon atteint une texture soyeuse et juste opaque à 120–125°F. Si vous le préférez entièrement ferme ou si vous servez une personne enceinte ou immunodéprimée, faites cuire à 145°F (63°C), environ 10 minutes de plus. Une faible chaleur empêche l'albumine blanche de fuir.",
      "visualCue": {
        "primaryTarget": "La chair est passée de l'orange brute translucide à un corail uniforme et opaque qui se sépare en gros flocons lorsqu'elle est bouchée avec une fourchette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est encore verreux et orange foncé, et une fourchette rencontre la résistance au lieu de flocons.",
            "action": "Retourner au four et vérifier toutes les 3-4 minutes."
          },
          {
            "state": "Perfect",
            "description": "Un corail pâle uniforme à travers, à peine brillant au centre, flocons séparés par une pression douce; presque aucune albumine blanche à la surface.",
            "action": "Retirer immédiatement — il y a très peu de report à cette température du four."
          },
          {
            "state": "Overdone",
            "description": "La chair est rose mat, les flocons sont secs et crayeux, et des perles blanches d'albumine ont poussé entre les couches.",
            "action": "Laissez la sauce aux herbes faire le travail — cuillerez-la généreusement."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse avec un bout de doigt : il devrait donner comme du beurre doux et les couches devraient juste commencer à glisser séparément."
    },
    {
      "nodeId": "step_3",
      "action": "Macérer et remuer la sauce aux herbes",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_03",
        "ing_02"
      ],
      "outputState": "herb_sauce",
      "instructions": "Pendant que le poisson rôtit, mélanger l'échalote hachée avec le jus de citron et une pincée de sel dans un petit bol et laisser reposer 10 minutes pour adoucir sa morsure. Incorporer le zeste de citron, les câpres, les flocons de poivre rouge, le persil, l'aneth, la ciboulette et le reste de l'huile d'olive (environ 120 ml). Goûtez et ajustez avec du sel et du poivre. N'avancez pas plus d'une heure — l'acide émousse le vert au fil du temps.",
      "visualCue": {
        "primaryTarget": "Une sauce molle, verte vive, liquéfiée d'huile avec des herbes en suspension, cuillerable mais non purée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Huile surtout avec quelques herbes flottantes — minces et pâles.",
            "action": "Hacher et ajouter plus de persil jusqu'à ce que les herbes soient la majeure partie de la sauce."
          },
          {
            "state": "Perfect",
            "description": "Vert vif, herbes lâchement liées à l'huile, reflets de câpres et zeste, une odeur citronnée aiguë.",
            "action": "Tenez à température ambiante jusqu'à ce que le poisson soit fini."
          },
          {
            "state": "Overdone",
            "description": "Sat pendant des heures — les herbes ont transformé les olives drab et soggy.",
            "action": "Rafraîchir avec une poignée de persil fraîchement haché et une pression de citron."
          }
        ]
      },
      "feelCue": "Une cuillerée devrait s'effondrer lentement de la cuillère, avec de l'huile autour des herbes plutôt qu'une pâte raide."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "slow_roasted_salmon",
        "herb_sauce"
      ],
      "outputState": "salmon_with_herb_sauce",
      "instructions": "Faites glisser le saumon du parchemin sur un plateau (la peau restera collée au papier si vous voulez qu'il soit laissé derrière). Briser en portions rugueuses le long de ses flocons naturels avec une cuillère, plutôt que de couper. Déposer la sauce aux herbes sur le dessus et servir au chaud ou à la température ambiante.",
      "visualCue": {
        "primaryTarget": "Larges flocons de corail brillant avec une sauce verte qui pénètre dans les coutures.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce en une seule pile au milieu; la plupart des poissons sont nus.",
            "action": "Répartir sur toute la longueur."
          },
          {
            "state": "Perfect",
            "description": "Les poissons se brisent en morceaux humides et irréguliers, chaque morceau flanqué de sauce verte et de câpres.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été poussé jusqu'à ce qu'il soit déchiqueté en petits morceaux.",
            "action": "Repilez-le ensemble ; il a le même goût."
          }
        ]
      },
      "feelCue": "La cuillère doit couper à travers le poisson avec presque aucune pression, libérant des couches tendres."
    }
  ]
};
