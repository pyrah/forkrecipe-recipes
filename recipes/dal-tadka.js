export default {
  "repoId": "master_indian_dal-tadka_001",
  "parentRepoId": null,
  "slug": "dal-tadka",
  "author": "ForkRecipe Kitchen",
  "title": "Dal Tadka",
  "description": "Un bol de lentilles jaune coucher de soleil, cuites lentement jusqu'à ce qu'elles soient soyeuses, puis frappées d'un tempérament crépitant de cumin, d'ail et de piment séché dans le ghee chaud.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "grains",
  "tags": [
    "lentilles",
    "indienne",
    "végétalien",
    "épice",
    "dhal"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 2,
    "bitter": 1,
    "umami": 6,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Lentilles rouges (masoor dal), rincées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "pois fendus jaunes",
        "pour"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Poudre de curcuma",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Ghee",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "huile neutre pour végétalien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Piments rouges séchés",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée de flocons de piment"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Tomates hachées finement",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates concassées en conserve"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), hachée",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cooked_lentils",
      "instructions": "Placer les lentilles rincées dans une casserole moyenne avec l'eau et le curcuma. Porter à ébullition vigoureuse à feu vif, en écrémant toute mousse blanche qui monte à la surface. Réduire à mijoter régulièrement, couvrir partiellement et cuire pendant 20-25 minutes jusqu'à ce que les lentilles se décomposent complètement en un porridge épais et lisse. Ajouter une éclaboussure plus d'eau s'ils boivent tout le liquide avant qu'ils ne soient complètement doux.",
      "visualCue": {
        "primaryTarget": "Un porridge jaune doré vif sans formes distinctes de lentilles. Il devrait tomber d'une cuillère dans un ruban épais et lent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles conservent leur forme et le liquide est mince et aqueux. Une texture calcaire au goût.",
            "action": "Continuer à mijoter avec le couvercle partiellement allumé. Mash quelques lentilles contre le mur de pot pour les aider à les briser."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse porridge doré, assez épais pour envelopper le dos d'une cuillère. Jaune profond du curcuma.",
            "action": "Assaisonner de sel et garder au chaud sur la chaleur la plus basse pendant que vous préparez le tadka."
          },
          {
            "state": "Overdone",
            "description": "Dal a séché et collé au fond du pot. Une faible odeur brûlée se lève de la poêle.",
            "action": "Ajouter une tasse d'eau chaude et remuer vigoureusement, grattant le fond. Goûtez — si aucune amertume, elle est bonne."
          }
        ]
      },
      "feelCue": "Exécutez une cuillère à travers le dal — elle doit se séparer proprement et remonter lentement, comme du pudding chaud. Si elle résiste et reste séparée, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_08"
      ],
      "outputState": "softened_onion",
      "instructions": "Chauffer une petite poêle lourde à feu moyen-élevé. Ajouter la moitié du ghee, puis l'oignon coupé. Cuire en remuant fréquemment pendant 8-10 minutes jusqu'à ce que l'oignon soit doux, translucide et commence à brunir aux bords. Vous le voulez vraiment doré, pas pâle et cru.",
      "visualCue": {
        "primaryTarget": "L'oignon est boiteux, semi-transparent et a des bords dorés-brun avec des taches caramélisées partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc opaque et ferme. L'odeur piquante brute persiste.",
            "action": "Cuire plus longtemps à feu moyen, en remuant chaque minute. Ne vous précipitez pas avec une chaleur élevée ou ils brûleront sans adoucir."
          },
          {
            "state": "Perfect",
            "description": "Doux, jammy, doré aux bords brun caramel. Douce odeur sans netteté.",
            "action": "Ajouter la tomate directement dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est brun foncé à noir aux bords. Un arôme amer.",
            "action": "Jeter et recommencer — l'oignon brûlé rendra le dal amer à sa base."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'oignon contre la poêle avec votre cuillère — il devrait s'effondrer sans résistance dans un quasi-collé."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "softened_onion",
        "ing_09"
      ],
      "outputState": "masala_base",
      "instructions": "Ajouter la tomate hachée à l'oignon doré. Incorporer et cuire à feu moyen pendant 5-7 minutes, presser les morceaux de tomate contre la poêle pour les décomposer. Cuire jusqu'à ce que l'huile se sépare visiblement de la pâte tomate-oignon aux bords de la poêle — c'est le signe classique que la base du masala est prête.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et rouge rouille avec des gouttelettes de ghee doré qui se mêlent aux bords. Aucun liquide liquide n'est resté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tomate est toujours en morceaux. Le mélange semble humide et soupeux. Aucune séparation d'huile visible.",
            "action": "Cuire plus longtemps, en remuant et en appuyant. L'eau de la tomate doit s'évaporer complètement."
          },
          {
            "state": "Perfect",
            "description": "Pâte orange-rouge foncée. Ghee apparaît comme des perles dorées au périmètre. L'odeur est profonde, jammy et salée.",
            "action": "Incorporer la base du masala dans les lentilles cuites et laisser mijoter pendant 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "La pâte a séché et s'attrape au fond. Couleur acajou foncée.",
            "action": "Ajouter 2 cuillerées à soupe d'eau et gratter immédiatement. Baissez la chaleur."
          }
        ]
      },
      "feelCue": "La pâte doit glisser fortement à travers la casserole avec une faible friction de grésillement — pas d'éclaboussures ou de glissement. Cette résistance est l'humidité ayant cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "cooked_lentils",
        "masala_base",
        "ing_10"
      ],
      "outputState": "seasoned_dal",
      "instructions": "Incorporer la base du masala dans le pot de lentilles cuites. Ajouter le sel, bien remuer et laisser mijoter à feu doux pendant 5 minutes pour épouser les saveurs. Le dal devrait être versable mais substantiel — ajuster la cohérence avec l'eau chaude si nécessaire. Goûtez et corrigez le sel.",
      "visualCue": {
        "primaryTarget": "Un dal riche en or-orange de couleur profonde avec une texture uniforme et soyeuse. Pas de grumeaux évidents d'oignon ou de tomate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Masala et lentilles ont l'air séparées — stries de pâte rouge dans la soupe jaune.",
            "action": "Incorporer vigoureusement et laisser mijoter 5 minutes de plus pour que les saveurs s'intègrent."
          },
          {
            "state": "Perfect",
            "description": "Unified, lisse, couleur orange chaude. Goûts stratifiés – salés, terreux, légèrement acides de la tomate.",
            "action": "Transférer dans un bol et passer immédiatement à la tadka."
          },
          {
            "state": "Overdone",
            "description": "Dal s'est épaissi à la colle. Déposer la cuillère en morceaux plutôt que de s'écouler.",
            "action": "Finissez avec de l'eau chaude, quelques cuillères à soupe à la fois, en remuant bien entre les ajouts."
          }
        ]
      },
      "feelCue": "Goûtez le dal — vous devriez d'abord obtenir la lentilles terreuses, puis la douceur de l'oignon, puis une légère tang de tomate à la finale. Le sel devrait tout relier sans dominer."
    },
    {
      "nodeId": "step_5",
      "action": "Bloom",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "tadka",
      "instructions": "Dans une petite louche en acier ou une petite casserole, faire chauffer le reste du ghee à feu vif jusqu'à ce qu'il commence à mijoter et qu'une cuillerée de fumée apparaisse. Ajouter les graines de cumin d'abord — elles devraient craquer et tourner en or dans les 5-10 secondes. Ajouter immédiatement l'ail tranché et les piments secs. Cuire pendant seulement 20-30 secondes, en tourbillonnant constamment, jusqu'à ce que l'ail devienne or pâle aux bords. Ne partez pas, cette étape arrive en moins d'une minute.",
      "visualCue": {
        "primaryTarget": "Les graines de cumin sont brun foncé et entièrement fleuries, enflées visiblement. L'ail est d'or pâle avec des bords légèrement croquants. Les froids sont devenus rouge rouille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de cumin sont encore en or pâle et pas encore parfumées. L'ail a l'air cru.",
            "action": "Continuer à chaud pendant encore 10-15 secondes. Le pétrole doit être vraiment chaud."
          },
          {
            "state": "Perfect",
            "description": "Explosion de cumin grillé et parfum de piment carbonisé. La cuisine se remplit d'arôme fumé et piquant. L'ail est à peine doré.",
            "action": "Verser immédiatement — chaque seconde compte à ce stade."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun à noir. Une odeur brûlée amère. La fumée s'élève de la poêle.",
            "action": "Jeter et recommencer le tadka — l'ail brûlé dans le ghee est irréversible et ruinera le plat."
          }
        ]
      },
      "feelCue": "Vous entendrez le cumin craquer à l'instant où il frappe le ghe chaud — un popping rapide comme de minuscules pétards. S'il y a silence, le ghee n'est pas assez chaud."
    },
    {
      "nodeId": "step_6",
      "action": "Finition",
      "inputs": [
        "seasoned_dal",
        "tadka",
        "ing_11"
      ],
      "outputState": "finished_dal_tadka",
      "instructions": "Versez immédiatement la totalité du contenu du tadka — ghee, cumin, ail et piments — sur la surface du dal dans le bol de service. Ne remuez pas encore. Le grésillement que le ghee chaud frappe le dal frais est à la fois dramatique et fonctionnel — il finit les aromatiques. Scatter la coriandre fraîche hachée sur le dessus et servir à la fois avec du riz ou du pain plat.",
      "visualCue": {
        "primaryTarget": "Un bol de dal doré avec une piscine sombre et parfumée de ghee et d'épices chatoyantes à la surface. Coriandre vert vif parsemée de tout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tadka a versé mais pas de étourdissement ou de vapeur — le ghee avait refroidi avant de frapper le dal.",
            "action": "La saveur est encore bonne. La prochaine fois, verser directement de la chaleur dans un bol sans pause."
          },
          {
            "state": "Perfect",
            "description": "Boussole loud au contact, nuage parfumé de vapeur. Ghee est une couche dorée et épicée à la surface.",
            "action": "Servir immédiatement. Tourne doucement à la table."
          },
          {
            "state": "Overdone",
            "description": "Tadka a été versé si tôt qu'il s'est refroidi et la graisse s'est condensée à la surface.",
            "action": "Chauffer doucement le bol pendant 1-2 minutes, ou remuer le ghee congelé dans le dal chaud."
          }
        ]
      },
      "feelCue": "Le bol doit se sentir chaud dans vos mains et émettre une vapeur parfumée constante de cumin grillé et de ghee. Si le bol est simplement chaud, réchauffer le dal avant de le mettre."
    }
  ]
};
