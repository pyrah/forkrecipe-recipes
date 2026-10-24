export default {
  "repoId": "master_mexican_elote_001",
  "parentRepoId": null,
  "slug": "elote",
  "author": "ForkRecipe Kitchen",
  "title": "Éloté",
  "description": "Des épis entiers de maïs ont été cloqués directement au-dessus d'une flamme ouverte jusqu'à ce que les grains caramélisent et charmentent les taches, puis ils ont été roulés dans du créma, emballés avec du cotija, pulvérisés avec de la poudre de chili, et terminés avec une pression de chaux qui s'échauffe contre la surface chaude.",
  "cuisine": "Mexicain",
  "culture": "Mexicain Street Food",
  "category": "vegetables",
  "tags": [
    "maïs",
    "Alimentation de rue",
    "Mexique",
    "Chaux",
    "Chili"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 7,
    "salty": 5,
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Oreilles de maïs décortiquées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème créma ou aigre mexicaine",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "mayonnaise (pour esquites style)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Fromage Cotija finement émietté",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "fromage feta finement émietté",
        "queso fresque"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de Chili (ou tajín)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "cayenne + paprika fumé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Chaux, coupée en deux",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre ou huile neutre",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Grille",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "charred_corn",
      "instructions": "Pour un brûleur à gaz : placez l'oreille enroulée directement sur la grille du brûleur au-dessus d'une flamme élevée, tournant avec des pinces toutes les 45-60 secondes. Pour un gril ou un gril : chauffer à haute température et brosser légèrement le maïs avec du beurre ou de l'huile avant de le placer. Vous voulez la rotation — ne laissez aucun côté face à la flamme pendant plus de 60 secondes ou elle brûlera à travers plutôt que de l'omble dans les taches. Durée totale: 8-12 minutes par oreille. Le maïs est fait quand chaque côté a un peu d'omble et que la cuisine sent le maïs sucré caramélisé.",
      "visualCue": {
        "primaryTarget": "Au moins 30% des grains sont carbonisés noir ou brun foncé, avec le reste un jaune doré vif. Il ne reste pas de taches pâles brutes. L'oreille semble avoir été embrassée par le feu à intervalles irréguliers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le maïs est jaune pâle et uniformément à la vapeur. Les amandes sont pleines mais pas d'omble. Des odeurs de maïs sucré cru.",
            "action": "Augmentez la chaleur et arrêtez de la déplacer si fréquemment. Laisser chaque côté tenir 60 secondes avant de tourner."
          },
          {
            "state": "Perfect",
            "description": "Des taches carbonées irrégulières sur toute l'oreille. Les amandes sont tendues et légèrement ridées aux extrémités. L'arôme est doux, fumé et beurreux.",
            "action": "Retirer du feu et enrober immédiatement pendant la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Plus de 60% de l'oreille est noire. Les amandes ont durci et rétréci. La fumée amère domine l'odeur du maïs sucré.",
            "action": "Badigeonner l'omble le plus lourd d'un chiffon sec et procéder — les grains restants seront encore excellents sous les garnitures."
          }
        ]
      },
      "feelCue": "Maintenez la corbe par l'extrémité étroite et donnez-lui une pression douce — les grains doivent se sentir gras et tendus plutôt que musqués. Vous devriez entendre un coup faible quand le maïs frappe la partie la plus chaude de la flamme."
    },
    {
      "nodeId": "step_2",
      "action": "Assemblage",
      "inputs": [
        "charred_corn",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "finished_elote",
      "instructions": "Travailler rapidement pendant que le maïs est encore chaud: brosser ou cuiller créma généreusement sur toute la surface, tournant pour enrober. Rouler l'oreille enduite dans une assiette de cotija émietté jusqu'à ce que le fromage adhère dans une croûte épaisse et inégale. Tenez l'oreille au-dessus de l'assiette pour attraper la chute. Poussez généreusement avec de la poudre de chili d'en haut — la chaleur du maïs fleurira immédiatement l'épice. Presser la moitié d'une chaux sur l'oreille de près; elle devrait s'étourdir contre la surface chaude. Scatter la coriandre. Servir immédiatement sur le bâton ou avec une fourchette. Ne le laissez pas s'asseoir — le créma refroidira et le fromage se desséchera.",
      "visualCue": {
        "primaryTarget": "Une oreille dorée et carbonisée densément incrustée de fromage blanc, tachetée de poudre de chili rouge-orange, avec coriandre vert vif. Le créma est visible aux bords où le fromage est plus mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Revêtement fin de créma, fromage clairsemé qui colle à peine. La surface du maïs est visible entre les garnitures.",
            "action": "Ajouter une autre cuillère de créma et presser plus de cotija fermement contre la surface tout en tournant."
          },
          {
            "state": "Perfect",
            "description": "Généreusement, presque trop enduite. Chaque morsure aura du maïs, du créma, du fromage, de la chaleur et de l'acide simultanément. La chaux est encore étourdissante.",
            "action": "Mangez immédiatement — c'est un plat qui n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Tellement enduit que le maïs et sa saveur carbonisée sont enterrés. La salinité de l'excès de cotija est écrasante.",
            "action": "Badigeonner une partie de la couche de fromage externe, servir avec de la chaux supplémentaire pour couper le sel, et utiliser comme leçon de retenue pour la prochaine fois."
          }
        ]
      },
      "feelCue": "L'élot fini devrait être lourd dans votre main — dense avec des garnitures. Lorsque vous prenez une bouchée, vous devriez obtenir la croûte d'omble, le créma crémeux, le sel de cotija et l'acide de la chaux en un seul instant."
    }
  ]
};
