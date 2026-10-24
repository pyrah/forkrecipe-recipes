export default {
  "repoId": "master_malaysian_laksa_broth_001",
  "parentRepoId": null,
  "slug": "laksa-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Laksa Broth",
  "description": "Un bouillon de Peranakan qui marche le bord entre le feu et le velours — la pâte d'épices fleurit dans l'huile jusqu'à ce que la cuisine sente comme un étal hawker, puis le lait de coco tire tout dans une mer riche en soie, furieusement parfumée.",
  "cuisine": "Malaisien",
  "culture": "Peranakan",
  "category": "stocks",
  "tags": [
    "Malaysian",
    "Laksa",
    "noix de coco",
    "épicé",
    "bouillon"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 1456,
  "forks": 142,
  "contributors": 27,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-01",
  "updatedAt": "2025-09-30",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Piments séchés (poêlés), citronnelle, galangal, curcuma — base en pâte de laksa",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de laksa achetée au magasin (rempa)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, grossièrement hachées",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Crevettes séchées (serres d'ardoise), trempées",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâte de crevettes / bélacan (utiliser 1/4 de la quantité)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile de coco ou huile neutre",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Poulets ou crevettes",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "eau + 1 c. à soupe sauce poisson"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Lait de coco",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco diluée 1:1 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + pincée de MSG"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Pâte de tamarin (à partir du bloc, dissoute dans l'eau chaude)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de lime (ajouter à la fin, pas pendant la cuisson)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rempah_paste",
      "instructions": "Mélanger dans un mélangeur ou un robot alimentaire des piments séchés trempés (drainés), de la citronnelle (pâte intérieure seulement), du galangal, du curcuma, des échalotes et des crevettes séchées trempées. Ajouter 2-3 cuillères à soupe d'eau et blitz jusqu'à ce qu'une pâte lisse et cohésive se forme. Vous pourriez avoir besoin de gratter les côtés 3-4 fois. Une pâte fine tire mieux dans l'huile et se distribue uniformément dans le bouillon.",
      "visualCue": {
        "primaryTarget": "La pâte est uniformément lisse — pas de morceaux de fibres visibles provenant de la citronnelle ou de la peau d'échalote; la couleur est rouge-orange foncée des chilis et du curcuma.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est épaisse avec des brins fibreux visibles et des échalotes non mélangées.",
            "action": "Continuer le mélange en ajoutant de l'eau une cuillère à soupe à la fois. Un mélangeur à haute puissance prend 2-3 minutes; un transformateur alimentaire peut avoir besoin de 4-5."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse et homogène avec une couleur rouge orange vif. Lorsqu'on s'étend sur le doigt, aucune texture gritty n'est ressentie.",
            "action": "Aller à la friture."
          },
          {
            "state": "Overdone",
            "description": "Pas vraiment applicable ici — une pâte très lisse est idéale. Si la pâte est devenue aqueuse à partir de l'excès d'eau, elle éclaboussera davantage dans l'huile.",
            "action": "C'est encore bien; soyez juste prudent en l'ajoutant à l'huile chaude et reculez."
          }
        ]
      },
      "feelCue": "La pâte doit tenir sa forme lorsqu'elle est écopée d'une cuillère — humide mais non arrosée, comme un hummus épais."
    },
    {
      "nodeId": "step_2",
      "action": "Pâte à frire",
      "inputs": [
        "rempah_paste",
        "ing_04"
      ],
      "outputState": "fried_rempah",
      "instructions": "Chauffer l'huile dans un pot lourd ou wok à feu moyen. Ajoutez la pâte de rempa tout à la fois — elle s'éclaboussera, alors reculez et couvrez partiellement. Faire frire, en remuant constamment, pendant 12-18 minutes. La pâte doit cuire jusqu'à ce que l'huile se sépare des solides et s'élève à la surface (pecah minyak — 'corrosion'). Ce n'est pas négociable : un rempa mal cuit goûte cru et dur.",
      "visualCue": {
        "primaryTarget": "L'huile sépare visiblement et les piscines autour et sur le dessus de la pâte; le rempa est profondément parfumé et une ombre plus sombre, avec un arôme légèrement frit plutôt que humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore émulsifiée avec l'huile — aucune séparation visible. Sens aiguisé et cru, avec un bord de chili rude.",
            "action": "Continuer à frire sur le milieu, en remuant toutes les 30 secondes. Ne pas se précipiter avec une chaleur élevée ou les brûlures extérieures avant que l'intérieur cuisine."
          },
          {
            "state": "Perfect",
            "description": "Piscines d'huiles claires au-dessus et autour du rempah. La pâte est légèrement plus sèche, une teinte plus foncée orange-rouge, et sent profondément parfumée — épices grillées et noix de coco.",
            "action": "Ajouter le stock immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La pâte est brun foncé, collant fortement et commençant à brûler sur le fond du pot. L'odeur est acride.",
            "action": "Retirer immédiatement du feu, ajouter immédiatement du stock pour arrêter la cuisson. Le bouillon peut avoir une légère amertume mais est généralement encore utilisable."
          }
        ]
      },
      "feelCue": "Le son passe d'une violente éclaboussure humide à un étourdissement plus calme et stable au fur et à mesure que l'humidité s'éteint."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "fried_rempah",
        "ing_05",
        "ing_08"
      ],
      "outputState": "spiced_stock",
      "instructions": "Verser le stock dans le rempa frit et mélanger. Ajouter l'eau du tamarin. Porter à ébullition, puis laisser mijoter. Cuire à découvert pendant 20 minutes, en écrémant toute mousse. Le bouillon s'assombrira et s'amplifiera lorsque le rempa s'intègre pleinement au stock.",
      "visualCue": {
        "primaryTarget": "Broth est une riche couleur rouge brique à ambre, légèrement épaissie, avec une fine couche d'huile de chili à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est toujours de la même couleur que le stock avec des stries oranges — le rempah n'y est pas complètement dissous.",
            "action": "Continuer à mijoter et remuer vigoureusement; donnez-lui encore 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Rouge-ambre uniformément profond, légèrement brillant de l'huile. Des odeurs de citronnelle, de crevette, de chili et une faible note aigre du tamarin.",
            "action": "Réduire la chaleur et ajouter le lait de coco."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a diminué de plus d'un tiers et est très foncé et extrêmement salé.",
            "action": "Ajouter plus de stock ou d'eau pour ramener au volume désiré, et goûter à l'assaisonnement avant d'ajouter du lait de coco."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon à ce moment - il devrait être fortement épicé et un peu trop salé, car le lait de coco va se diluer et le moeller considérablement."
    },
    {
      "nodeId": "step_4",
      "action": "Ajouter le lait de coco",
      "inputs": [
        "spiced_stock",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_laksa_broth",
      "instructions": "Réduire la chaleur à faible. Verser lentement dans le lait de coco tout en remuant constamment — ne jamais laisser bouillir le bouillon après l'ajout de lait de coco ou il se divisera. Incorporer la sauce au poisson. Goûtez et ajustez : ajoutez plus de sauce de poisson pour le sel, tamarin pour la sure, ou une pincée de sucre à rond. Maintenez à une mijotée très douce (la surface devrait à peine trembler) pendant 10 minutes.",
      "visualCue": {
        "primaryTarget": "Broth est une couleur crémeuse, opaque corail-orange — riche et soyeux, pas aqueux ou granuleux. Un mince éclat d'huile de chili rouge flotte à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est toujours séparé — les stries de lait de coco ne sont pas entièrement incorporées, ou les saveurs ont un goût disjoint et dur.",
            "action": "Incorporer continuellement à feu très doux pendant encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Couleur de corail lisse, crémeuse et uniforme. Des odeurs de noix de coco, de citronnelle et de chili dans une mesure égale. Équilibré entre riche, épicé et acidulé.",
            "action": "Utiliser immédiatement pour finir les bols de laksa, ou refroidir et réfrigérer jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Le lait de coco est fendu — blanc visible dans un liquide huileux orange. La texture est granuleuse.",
            "action": "Retirer du feu, laisser refroidir légèrement, puis mélanger avec un mélangeur d'immersion. Elle réémulsionnera si elle n'est pas surchauffée."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans le bouillon et laissez-le enrober; il devrait laisser une fine couche crémeuse qui ne s'écoule pas immédiatement, ce qui indique le bon équilibre de la richesse en noix de coco."
    }
  ]
};
