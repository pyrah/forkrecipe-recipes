export default {
  "repoId": "master_korean_pajeon_001",
  "parentRepoId": null,
  "slug": "korean-pajeon",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pajeon coréen",
  "description": "Un large pancake plat de pâte de farine de riz chargé de paquets d'écailles entières, frit dans une généreuse piscine d'huile jusqu'à ce que le dessous soit une dentelle effroyablement croustillante de croûte dorée et l'intérieur est mâché, salé et donnant.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "vegetables",
  "tags": [
    "végétarien",
    "coréen",
    "Crêpe",
    "scalpel",
    "croustillant",
    "farine de riz"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine de riz",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine de blé ordinaire (tout usage)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Œuf",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Échalons (oignons verts), entiers ou demi-longueur",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "ciboulette à l'ail"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (fourn de riz ou de légumes)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "sauce soja, vinaigre de riz, huile de sésame, flocons de piment (sauce à tremper)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "pajeon_batter",
      "instructions": "fouetter la farine de riz, la farine tout usage et le sel dans un bol. Ajouter l'œuf et l'eau froide. Whisk jusqu'à ce qu'il soit simplement combiné — quelques petites boules sont bonnes. La pâte doit être plus mince que la pâte à crêpes, plus proche de la crème lourde en consistance. L'eau froide est essentielle : elle empêche la farine de riz glutineuse de devenir gommée.",
      "visualCue": {
        "primaryTarget": "La pâte dans le bol",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poches de farine sont encore sèches et l'œuf n'est pas entièrement incorporé — la pâte cuit de façon inégale.",
            "action": "fouetter jusqu'à ce que la pâte soit uniformément pâle et fluide sans taches sèches."
          },
          {
            "state": "Perfect",
            "description": "Une pâte lisse, fluide et blanc pâle qui coule facilement du bol. Quelques petites bosses sont acceptables: la pâte doit s'écouler et s'accumuler immédiatement lorsqu'elle est versée, et non pas la pelure.",
            "action": "Reposez-vous au réfrigérateur pendant que vous préparez les oignons."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est épaissie jusqu'à une pâte provenant du sursaut, qui a développé le gluten et activé l'amidon de riz. Il tombe dans des rubans épais.",
            "action": "Finir avec une cuillère à soupe d'eau glacée et remuer doucement."
          }
        ]
      },
      "feelCue": "Plongez deux doigts et soulevez - les: la pâte doit être mince et s'écouler dans un cours d'eau stable et mince, ne pas accrocher dans des gouttes épaisses."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "pajeon_batter",
        "ing_05"
      ],
      "outputState": "loaded_batter",
      "instructions": "Ajouter les pétoncles entiers à la pâte et plier pour enrober. Pour un pajeon bien structuré, posez les pétoncles parallèles l'un à l'autre plutôt que de les disperser au hasard, ce qui crée la section transversale caractéristique rayée lors de la coupe. Le rapport écailles-à-battre devrait sentir plus de légumes que de pâte: vous voulez que les écailles soient l'étoile, à peine tenue ensemble par la pâte.",
      "visualCue": {
        "primaryTarget": "Le rapport entre le pétoncle et le battement",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plus de pâte que de pétoncle: la crêpe sera épaisse et pâteuse, plus de pain que le pajeon.",
            "action": "Ajouter plus de pétoncles; couper quelques extras et les plier."
          },
          {
            "state": "Perfect",
            "description": "Les pétoncles sont densément emballés et la pâte les enrobe à peine — on peut voir du pétoncle à travers la couche de pâte lorsque le mélange est répandu dans la poêle.",
            "action": "Verser immédiatement dans une poêle huilée chaude."
          },
          {
            "state": "Overdone",
            "description": "Sans objet — plus de pétoncle est toujours bien ici. Réglez la pâte si elle semble clairsemée.",
            "action": "Ajouter une petite éclaboussure plus de pâte pour assurer l'intégrité structurelle."
          }
        ]
      },
      "feelCue": "Inclinez le bol — la masse doit se déplacer lentement et à contrecœur, les pétoncles se liant l'un contre l'autre plutôt que de flotter librement en pâte."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "loaded_batter",
        "ing_07"
      ],
      "outputState": "finished_pajeon",
      "instructions": "Chauffer une quantité généreuse d'huile dans une poêle large et lourde (24–26 cm) sur une poêle de hauteur moyenne jusqu'à ce qu'elle mijote. Verser la pâte à pétoncle et la répartir rapidement avec une spatule dans un rond d'épaisseur égale — environ 7 mm. Cuire sans toucher pendant 4-5 minutes. Peignez au bord : lorsque la face inférieure est profondément dorée, retournez à l'aide d'une assiette si nécessaire. Faire frire le deuxième côté 3-4 minutes, en appuyant doucement avec la spatule pour un contact complet. Le pancake devrait être audiblement étourdissant tout le temps.",
      "visualCue": {
        "primaryTarget": "La croûte inférieure lorsqu'elle est retournée",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessous est d'or pâle et encore doux — il déchire quand vous essayez de retourner. Le centre du crêpe est visiblement humide et cru.",
            "action": "Retour à plat et cuire 2 minutes de plus. La croûte doit être mise avant le flip."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'ambre à bronze profonde avec une surface lacy et irrégulière où la pâte s'est infiltrée entre les tiges de pétoncle et broyée séparément. Les bords sont profondément colorés et audiquement croquants lorsqu'ils sont tapés avec un ongle. Le centre se tient ensemble comme un seul pancake cohésif.",
            "action": "Faire frire le deuxième côté et couper en quartiers."
          },
          {
            "state": "Overdone",
            "description": "La croûte a passé l'ambre au brun foncé, avec la pâte autour des pétoncles commençant à l'omble — acride plutôt que doux.",
            "action": "Dépliez immédiatement et réduisez la chaleur pour le second côté."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre de la crêpe avec une spatule — elle doit se sentir solide et résistante au ressort, non molle et productive. Les bords doivent se fissurer audiquement contre l'huile."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "finished_pajeon",
        "ing_08"
      ],
      "outputState": "plated_pajeon",
      "instructions": "Mélanger la sauce soja, le vinaigre de riz, l'huile de sésame et une pincée de piment flocons dans une sauce piquante et salée. Couper le pajeon en coins ou carrés avec des cisailles de cuisine ou un couteau tranchant. Servir immédiatement — la croûte ramollit en quelques minutes. La sauce à tremper doit être servie froidement dans un petit bol à côté.",
      "visualCue": {
        "primaryTarget": "La coupe transversale du pajeon",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est blanc, cru et humide — la pâte n'a pas traversé.",
            "action": "Retourner les morceaux dans la poêle, couper le côté vers le bas, pendant 2 minutes pour cuire l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "La coupe transversale montre des lignes parallèles de pétoncle vert vif traversant une mince matrice de pâte cuite de couleur crème. La croûte extérieure est visiblement plus foncée et plus croquante que l'intérieur. Une légère vapeur s'élève de la coupe.",
            "action": "Servir en 5 minutes pendant que la croûte est à son sommet."
          },
          {
            "state": "Overdone",
            "description": "Les pétoncles à l'intérieur sont vert-armée et la pâte est très sombre — le crêpe a été cuit trop longtemps ou à une température trop élevée.",
            "action": "Servir de toute façon ; le goût de l'échon légèrement caramélisé n'est pas désagréable."
          }
        ]
      },
      "feelCue": "La base d'un pajeon bien frit tape comme un tambour — creux et résonant, non étouffé et doux. Ce son signifie que la croûte est vraiment en place."
    }
  ]
};
