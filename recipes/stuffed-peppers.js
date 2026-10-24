export default {
  "repoId": "master_mediterranean_stuffed_peppers_001",
  "parentRepoId": null,
  "slug": "stuffed-peppers",
  "author": "ForkRecipe Kitchen",
  "title": "Poivrons à cloches farcis de riz",
  "description": "Poivrons de pomme de terre remplis de riz herbacé, de pignons de pin et de groseilles dans un mélange qui sent la menthe fraîche et l'aneth, cuits dans un bouillon parfumé de tomates jusqu'à ce que le riz soit gonflé et que les poivrons soient tendres et légèrement carbonisés au sommet — la gemme du dimanche de Yiayia.",
  "cuisine": "Méditerranée",
  "culture": "Grec",
  "category": "vegetables",
  "tags": [
    "Poivrons farcis",
    "méditerranéen",
    "grec",
    "riz",
    "végétarien",
    "Gemme"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1.5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Poivrons (couleurs mélangées), gros",
      "ratioValue": 6,
      "defaultUnit": "peppers",
      "substitutions": [
        "Grandes tomates à peau de bœuf (style gemista)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz blanc long grain, non cuit",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "riz à grains moyens"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 1,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates écrasées (en conserve)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tomates fraîches mûres, pelées et concassées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "L'aneth frais, haché",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "menthe fraîche, hachée",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Graines ou raisins secs",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Noix de pin, légèrement grillées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "amandes grillées"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Poivre noir",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Liquid",
      "name": "Stock d'eau chaude ou de légumes",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_pepper_shells",
      "instructions": "Couper le dessus de chaque poivre à environ 1,5 cm de l'extrémité de la tige et réserver comme couvercles. En utilisant un petit couteau et vos doigts, retirez toutes les graines et les membranes blanches de l'intérieur de chaque poivre. Tenez les poivrons debout dans un plat de cuisson légèrement huilé qui les tient correctement — ils devraient se soutenir les uns les autres lorsqu'ils sont remplis. Préchauffer le four à 175 C (350 F).",
      "visualCue": {
        "primaryTarget": "Des coquilles de poivre creuses et propres debout dans le plat, pâles et sans membrane. Chacun a un couvercle assorti à côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La patte blanche et les graines restent à l'intérieur des poivrons. La membrane est toujours attachée.",
            "action": "Continuez à enlever — les graines et la membrane rendront le plat fini amer et amer."
          },
          {
            "state": "Perfect",
            "description": "Intérieurs complètement creux, à paroi lisse, légèrement brillant avec de l'humidité naturelle. Chaque poivre se tient sans croupion lorsque le plat est légèrement déplacé.",
            "action": "Remplir du mélange de riz."
          },
          {
            "state": "Overdone",
            "description": "Un trou a été coupé sur le côté du poivre ou la base est percée. Le poivre ne tiendra pas le remplissage.",
            "action": "Appuyez sur le trou fermé avec un petit morceau du plateau de poivre coupé comme un patch. Il scellera dans le four."
          }
        ]
      },
      "feelCue": "Courez un doigt autour de l'intérieur de chaque poivre — il devrait se sentir complètement lisse, comme l'intérieur d'un verre humide, sans taches de boue rugueuses."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "softened_onion",
      "instructions": "Dans une grande casserole, faire chauffer 3 cuillères à soupe d'huile d'olive à feu moyen. Ajouter l'oignon en dés et l'ail. Cuire en remuant, pendant 8 à 10 minutes jusqu'à ce qu'il soit entièrement doux, translucide et commence à tourner en or aux bords.",
      "visualCue": {
        "primaryTarget": "Entièrement translucide, oignon doux aux bords dorés. Sens doux et légèrement caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et blanc. Sens aiguisé et piquant.",
            "action": "Continuer la cuisson — l'oignon cru dans le remplissage va chauffer le riz de façon inégale et goûter dur."
          },
          {
            "state": "Perfect",
            "description": "Limpe, brillant et presque clair. Douce odeur d'allium sans ponction. Juste à peine de l'or aux bords.",
            "action": "Ajouter le riz et les épices."
          },
          {
            "state": "Overdone",
            "description": "Profondément caramélisé et brunissant. Certains morceaux d'ail commencent à se colorer rapidement.",
            "action": "Baissez la chaleur et continuez — l'oignon plus doux rendra un remplissage plus complexe."
          }
        ]
      },
      "feelCue": "L'oignon doit se déplacer librement autour de la casserole sans résistance — pas de frottement net, juste un glissement doux et humide que vous remuez."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "softened_onion",
        "ing_02",
        "ing_05",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_15",
        "ing_16"
      ],
      "outputState": "rice_filling",
      "instructions": "Ajouter le riz non cuit, les tomates concassées, la cannelle, l'alspice, le sel et le poivre dans la poêle. Incorporer bien le riz avec la tomate et l'huile. Cuire 2 minutes jusqu'à ce que le riz devienne translucide aux bords. Retirer du feu et plier dans l'aneth, la menthe, le persil, les groseilles et les pignons grillés. Goûtez le mélange et assaisonnez - il doit être bien assaisonné car les saveurs se mêlent au four.",
      "visualCue": {
        "primaryTarget": "Un mélange de riz parfumé de coraux et de pins, parsemé de groseilles foncées, de pignons de pin ivoire et d'herbes vertes. Les grains de riz sont translucides aux bords de la saute courte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes ont été mélangées alors qu'elles sont encore chaudes et deviennent gris-vert et flétries avant même que les poivrons soient remplis.",
            "action": "Toujours ajouter des herbes fraîches hors de la chaleur pour préserver leur couleur et les aromatiques volatils."
          },
          {
            "state": "Perfect",
            "description": "Herbes vertes vibrantes pliées à travers le riz rose brillant. Le mélange sent intensément l'aneth frais, la menthe et les épices chaudes. Le riz est encore cru, mais il brille avec la tomate.",
            "action": "Remplissez immédiatement les coquilles de poivre."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été cuit trop longtemps dans la poêle et commence à absorber toute l'humidité, devenant ainsi une pâte sèche et empilée.",
            "action": "Ajouter 2 cuillères à soupe d'eau ou d'huile d'olive pour se détendre avant le remplissage."
          }
        ]
      },
      "feelCue": "Le remplissage doit se sentir lâche et légèrement mouillé dans vos mains — le riz cru a besoin d'espace pour se développer dans le four. S'il est sec et serré, il craquera le poivre pendant que le riz gonfle."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "prepped_pepper_shells",
        "rice_filling",
        "ing_14",
        "ing_06"
      ],
      "outputState": "finished_stuffed_peppers",
      "instructions": "Verser le riz dans chaque poivre, le remplir à trois quarts seulement pour permettre l'expansion du riz. Remplacer chaque couvercle de poivre. Verser le bouillon chaud autour de la base des poivrons dans le plat — il devrait venir environ 1 cm sur les côtés des poivrons. Arrosez le reste de l'huile d'olive sur les dessus de poivre. Cuire à 175 C pendant 55 à 65 minutes, vérifier à 45 minutes pour ajouter plus de liquide si le plat semble sec. Les poivrons sont faits quand ils sont complètement tendres et légèrement effondrés.",
      "visualCue": {
        "primaryTarget": "Coquilles de poivre qui se sont légèrement adoucies et ridés, les dessus carbonisés et cloqués. Les couvercles s'assoient au-dessus du riz bombé et gonflé qui a poussé à travers l'ouverture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poivrons sont encore colorés, fermes et rigides. Le riz à l'intérieur est encore dur et le remplissage n'a pas gonflé.",
            "action": "Retourner au four — la gemista mal cuite est insatisfaite. Les poivrons doivent s'effondrer complètement et le riz à cuire."
          },
          {
            "state": "Perfect",
            "description": "Les parois de poivre sont complètement tendres, ridés et légèrement carbonisées au sommet. Le couvercle a glissé sous un angle. La garniture de riz a gonflé pour remplir complètement le poivre. sent le poivre doux, l'aneth et l'huile d'olive. Le bouillon dans la base est épais et rouge.",
            "action": "Laisser reposer 10 minutes avant de servir. Excellent à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Les peaux de poivre se sont fendues et les poivrons sont tombés dans le plat. Les sommets sont très sombres.",
            "action": "Servir tel quel — la saveur est intacte. Spoon tout remplissage renversé autour des poivrons et servir avec la sauce à la casserole."
          }
        ]
      },
      "feelCue": "Pressez doucement un poivre avec des pinces — il devrait donner comme un oreiller doux avec presque aucune résistance. Un poivre ferme et printanier a besoin de plus de temps au four."
    }
  ]
};
