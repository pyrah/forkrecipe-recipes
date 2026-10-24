export default {
  "repoId": "master_indian_prawncurry_001",
  "parentRepoId": null,
  "slug": "prawn-curry",
  "author": "ForkRecipe Kitchen",
  "title": "Kerala Prayure Curry",
  "description": "La côte du Kerala dans un pot — des crevettes entières sont tombées dans une sauce vive et ardente au lait de coco, construite sur des graines de moutarde, des feuilles de curry, du gingembre et du piment, cuites en moins de 15 minutes pour garder les crevettes tendres et le lait de coco brillant.",
  "cuisine": "Indiens",
  "culture": "Kéralan",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "indienne",
    "kerala",
    "crevette",
    "noix de coco",
    "curry",
    "Sans gluten",
    "pescataires"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes brutes (écailles, décortiquées)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Crevettes tigres",
        "Crevettes jumbo"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile de coco",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de moutarde noire",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles fraîches de curry (2 brins)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "feuilles de curry séchées (double quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes (en tranches)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais (grainé fin)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poudre de chili rouge cachemiri",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "poudre de piment (utiliser moitié)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Puli kukum (malabar tamarin) ou pâte de tamarin",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de tamarin",
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "tempered_oil",
      "instructions": "Chauffer l'huile de coco dans une casserole large et peu profonde à feu vif jusqu'à ce qu'elle mijote et commence à fumer. Ajoutez les graines de moutarde — reculez, elles se répandront violemment. Lorsque le saut ralentit (environ 30 secondes), ajouter les feuilles de curry — elles s'évanouissent considérablement. Faire frire pendant 10 secondes jusqu'à ce que les feuilles deviennent vert foncé et croquantes. Ce tempérament crée la base caractéristique de la cuisine kérala.",
      "visualCue": {
        "primaryTarget": "Feuilles de curry foncées, cloquées et graines de moutarde soufflées dans de l'huile chaude chatoyante — les feuilles sont passées d'un vert vif à un vert plus foncé, légèrement translucide, et sont croquantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de moutarde n'ont pas commencé à sauter. Les feuilles de curry sont brutes et vert vif, non parfumées.",
            "action": "Attendez — l'huile doit être très chaude. Ne pas ajouter les feuilles jusqu'à ce que les graines de moutarde soient sautées. La patience est essentielle ici."
          },
          {
            "state": "Perfect",
            "description": "Les graines de moutarde sont surtout sautées et ont cessé de sauter. Les feuilles de curry sont sombres, parfumées et croquantes dans l'huile. La cuisine sent très aromatique.",
            "action": "Ajouter les échalotes immédiatement avant que les graines ou les feuilles brûlent."
          },
          {
            "state": "Overdone",
            "description": "Les graines de moutarde sont noires. Les feuilles de curry ont brûlé à des copeaux noirs. Une odeur d'acride.",
            "action": "Verser l'huile brûlée et essuyer la poêle. Recommencer avec de l'huile fraîche, des graines et des feuilles — une température brûlée ruine le plat."
          }
        ]
      },
      "feelCue": "Vous entendrez le tempérament avant de le voir — le feu de mitrailleuse rapide des graines de moutarde contre le couvercle de la poêle est l'un des grands bruits de la cuisine. Compter 3 secondes de saut actif avant d'ajouter les feuilles de curry."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "tempered_oil",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_11"
      ],
      "outputState": "curry_base",
      "instructions": "Ajouter les échalotes à l'huile trempée et cuire à feu moyen-vif pendant 5-6 minutes jusqu'à ce qu'elles soient dorées et ramollies. Ajouter le gingembre et l'ail et cuire 2 minutes jusqu'à odorat. Ajouter la poudre de piment et le puli kukum. Incorporer 1 minute jusqu'à ce que l'huile prenne une couleur rouge vif du piment. La base doit être épaisse et intensément parfumée.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge rouille foncée d'échalotes effondrées et d'épices, accrochée à la poêle, avec de l'huile qui se sépare légèrement aux bords, signe que la base est bien cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore pâles et fermes. La poudre de Chilli est un goût cru. La base est encore humide et liquide.",
            "action": "Cuire plus longtemps à feu moyen-élevé. Les échalotes doivent s'assouplir et les épices doivent faire frire dans l'huile, et non pas bouillir dans l'eau."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes sont dorées et translucides. Chilli a transformé l'huile en rouge rouille vif. La pâte sent profondément l'épice frite, le gingembre et l'ail — complexe et appétissant.",
            "action": "Ajouter le lait de coco."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes sont brun foncé, l'ail est brûlé, le piment sent l'acre.",
            "action": "Saluvage en ajoutant immédiatement du lait de coco pour arrêter la cuisson. Le curry fini peut être légèrement amer."
          }
        ]
      },
      "feelCue": "Senser la base du curry — il devrait être intensément aromatique et presque écrasant à ce stade: profond, épicé, légèrement fumé. Si ça sent doux, il faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "curry_base",
        "ing_10",
        "ing_01"
      ],
      "outputState": "finished_prawn_curry",
      "instructions": "Verser le lait de coco et mélanger avec la base de curry. Portez à un doux mijot. Ajouter les crevettes et cuire 3-4 minutes exactement — pas plus. Au moment où toutes les crevettes se sont enroulées en forme de C et sont devenues uniformément roses, elles sont terminées. Une crevette en forme de D est trop cuite. Goûtez au sel. Servir immédiatement sur du riz cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Crevettes coralliennes en forme de C, en forme de pruneau, qui flottent dans une sauce vive au lait de coco orangé de rouille avec des taches visibles de feuilles de curry foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore gris-translucides au centre. La chair ne ressort pas quand elle est pressée. Ils n'ont pas encore atteint une forme C complète.",
            "action": "Faites cuire encore 1-2 minutes. Les crevettes crues présentent un risque pour la salubrité des aliments — elles doivent être cuites."
          },
          {
            "state": "Perfect",
            "description": "Toutes les crevettes sont opaques, coralliennes et incurvées en forme de C. La chair est repulpée et ressort lorsqu'elle est pressée. Ils ont l'air gonflés et juteux.",
            "action": "Retirer immédiatement du feu et servir."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont serrées en forme de D ou en rondelles, sont nettement plus petites et se sentent fermes et caoutchouteuses. La chair est blanche plutôt que rose.",
            "action": "Servir immédiatement — il n'y a pas de secours pour les crevettes trop cuites, mais la sauce au curry reste délicieuse."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur une crevette avec l'arrière d'une cuillère — une crevette parfaitement cuite ressort fermement, mais pas rigidement, comme en pressant un raisin très ferme. Une trop cuite est aussi raide qu'une gomme."
    }
  ]
};
