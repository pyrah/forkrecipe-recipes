export default {
  "repoId": "master_indonesian_tempeh_rendang_001",
  "parentRepoId": null,
  "slug": "tempeh-rendang",
  "author": "ForkRecipe Kitchen",
  "title": "Tempeh Rendang",
  "description": "Rendang végétalien indonésien où des plaques de tempeh fermenté de soja sont lentement mijotées dans une pâte de lait de coco aromatique avec galangal, citronnelle et de la chaux de kaffir jusqu'à ce que la noix de coco sèche et que le tempeh soit incrusté dans une couche d'épices foncée et brûlée.",
  "cuisine": "Indonésien",
  "culture": "Sumatran Ouest",
  "category": "proteins",
  "tags": [
    "par an",
    "végétalien",
    "tempeh",
    "rendang",
    "lait de coco",
    "Sumatran",
    "fermenté"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tempeh, coupé en cubes de 3 cm",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "tofu ferme (puits de pression)",
        "Mûres"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, meurtries",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Galangal (frais ou congelés), tranché",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre (différente saveur)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles de chaux de Kaffir",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": [
        "feuilles de laurier + zeste de chaux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuilles curcuma (facultative)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Piments rouges séchés, trempés et drainés",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de piments"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalotes pelées",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Gingembre frais",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Sweetener",
      "name": "Sucre de palme (goula muga)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Fat",
      "name": "Huile de coco ou huile neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Garnish",
      "name": "Échalotes frites",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "rendang_paste",
      "instructions": "Mélanger les chilis séchés trempés, les échalotes, l'ail, le gingembre, la coriandre et le cumin dans une pâte lisse dans un robot alimentaire ou un mélangeur. Ajouter une cuillère à soupe d'eau si nécessaire pour le faire bouger. La pâte doit être texturée finement, rouge brique profonde, et sentir intensément l'échalote crue et les épices chaudes.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, rouge brique profonde sans gros morceaux visibles. La couleur vient des piments, pas de la cuisson — elle devrait avoir l'air vive et crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "texture dure avec échalote visible et fragments de chili. Couleur inconsistante.",
            "action": "Mélanger plus longtemps, racler les côtés. La pâte doit être lisse pour cuire uniformément."
          },
          {
            "state": "Perfect",
            "description": "Finement texturé, pâte rouge profonde. Presse à travers les doigts sans morceaux. Sens aiguisé et cru.",
            "action": "Faire revenir l'huile avant d'ajouter le lait de coco."
          },
          {
            "state": "Overdone",
            "description": "La pâte est liquéfiée à une fine purée. Ça éclaboussera excessivement quand on l'a frit.",
            "action": "Ça marchera toujours. Cuire à feu légèrement plus bas et remuer plus fréquemment."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme un hummus épais et lisse et sentir assez aiguisé pour rendre vos yeux de l'eau — la morsure d'allium brut se rafraîchira pendant la friture."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "rendang_paste",
        "ing_15"
      ],
      "outputState": "fried_paste",
      "instructions": "Chauffer l'huile de coco dans un grand wok ou un pot lourd à feu moyen. Ajouter la pâte et faire frire, en remuant constamment, pendant 8-12 minutes. La pâte s'éclaircit d'abord à mesure que l'humidité s'évapore, puis s'assombrit et s'approfondit en couleur, et commence finalement à se séparer de l'huile — un mince anneau d'huile claire apparaît autour de la pâte. C'est le keluarkan minyak — l'huile éclate. Cette étape développe la saveur fondamentale.",
      "visualCue": {
        "primaryTarget": "La pâte est tombée de rouge brique à brun rougeâtre profond. Un mince anneau d'huile rougeâtre claire sépare visiblement les bords de la masse de pâte dans le wok.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rouge vif et humide. Aucune séparation d'huile visible. Le goût cru d'échalote persistera dans le plat fini.",
            "action": "Continuez à frire: la pâte doit perdre toute son humidité brute. Il faut de la patience."
          },
          {
            "state": "Perfect",
            "description": "Morne rougeâtre profond, parfumé d'épices cuites et d'échalote grillée. Un anneau clair d'huile aromatique l'entoure. La pâte se presse dans une masse sèche brute lorsqu'elle est brassée.",
            "action": "Ajouter les aromatiques et le lait de coco."
          },
          {
            "state": "Overdone",
            "description": "La pâte est brun très foncé, s'approchant du noir aux bords. Ça sent légèrement brûlé.",
            "action": "Ajouter immédiatement le lait de coco et réduire la chaleur. Le liquide arrêtera la cuisson."
          }
        ]
      },
      "feelCue": "Au moment où l'huile se sépare, la pâte sonnera différente — un étourdissement sec plutôt qu'un sifflement humide. Faites confiance à vos oreilles autant que vos yeux."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "fried_paste",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_13",
        "ing_14"
      ],
      "outputState": "simmering_rendang",
      "instructions": "Ajouter le tempeh à la pâte frite et mélanger pour enrober. Verser dans le lait de coco, ajouter la citronnelle, le galangal, les feuilles de chaux de kaffir, la feuille de curcuma, le sel et le sucre de palme. Mélanger. Porter à ébullition, puis laisser mijoter à moyen terme. Cuire à découvert, en remuant toutes les 10 minutes pour éviter le collage.",
      "visualCue": {
        "primaryTarget": "Un ragoût de noix de coco riche et parfumé, légèrement bouillonnant avec la couleur jaune-orange visible du curcuma et rouge profond des chilis. Les pièces de Tempeh sont submergées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours pâle et mince. Le lait de coco n'est pas encore intégré à la pâte.",
            "action": "Levez le feu pour laisser mijoter et continuez à cuire."
          },
          {
            "state": "Perfect",
            "description": "Sauce de noix de coco foncée unifiée, parfumée à la citronnelle et à la chaux kaffir. Tempeh commence à absorber la couleur. Bubbling régulièrement.",
            "action": "Continuer à mijoter à découvert jusqu'à ce que le lait de coco diminue considérablement."
          },
          {
            "state": "Overdone",
            "description": "C'est dur. Le lait de coco se brisera et deviendra gras plutôt que riche.",
            "action": "Réduire immédiatement le feu à mijoter légèrement."
          }
        ]
      },
      "feelCue": "À ce stade, l'arôme doit être capiteux et multicouche: noix de coco, citronnelle, galangal et chili tous distincts et non encore fusionnés. Ils s'uniront au cours de la prochaine heure."
    },
    {
      "nodeId": "step_4",
      "action": "Réduire",
      "inputs": [
        "simmering_rendang"
      ],
      "outputState": "finished_tempeh_rendang",
      "instructions": "Continuer à mijoter à découvert pendant 1 à 1,5 heures, en remuant toutes les 10 minutes avec une fréquence croissante à mesure que le liquide diminue. Le lait de coco passera par plusieurs étapes : blanc crémeux, puis jaune pâle, puis la graisse de coco se séparera et la pâte commencera à frire dans sa propre huile. Cette dernière étape — lorsque le rendang est presque sec et que le tempeh est frit dans l'huile de coco — développe la croûte foncée et brûlée caractéristique. Continuez à remuer pour éviter les brûlures. Le rendang est fait lorsque le tempeh est sombre et incrusté et que la 'sauce' est plus d'un revêtement épais et sombre.",
      "visualCue": {
        "primaryTarget": "Les pièces de tempeh sont acajou foncé à presque noir à l'extérieur, incrustées dans un épais revêtement d'épices. Le pot est presque sec, il ne reste qu'une goutte d'huile noire. Les frites tempeh dans cette huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tempeh semble encore pâle et la sauce est fine. C'est l'étape du gulai — encore un curry, pas un rendang.",
            "action": "Continuez à réduire. Le véritable rendang peut prendre 2 heures ou plus — la patience est l'ingrédient."
          },
          {
            "state": "Perfect",
            "description": "Les pièces de Tempeh sont sombres, incrustées et parfumées. Le revêtement est presque sec et s'accroche étroitement à chaque pièce. Une merveilleuse odeur de noix, épicée et caramélisée remplit la cuisine.",
            "action": "Retirer du feu et laisser reposer 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Tempeh a une odeur brûlée, amère, poudre noire au fond du pot.",
            "action": "Enlever immédiatement tempeh. Jeter les morceaux les plus sombres du fond du pot. Les pièces supérieures peuvent être récupérables."
          }
        ]
      },
      "feelCue": "Soulevez un morceau de tempeh — le revêtement doit se sentir sec et légèrement émietté à l'extérieur, jamais mouillé ou saupoudré. Appuyez dessus: la croûte doit céder et le tempeh intérieur doit être ferme mais pas dur."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "finished_tempeh_rendang",
        "ing_16"
      ],
      "outputState": "plated_tempeh_rendang",
      "instructions": "Transférer dans une assiette de service ou un bol peu profond. Échalotes frites éparpillées sur le dessus. Servir avec du riz à la vapeur, du sambal et du concombre mariné. Rendang s'améliore du jour au lendemain — les saveurs s'approfondissent et les entreprises de revêtement d'épices.",
      "visualCue": {
        "primaryTarget": "Dark, presque noir-mahogany tempeh pièces sur une plaque blanche, chacun incrusté et séparé. Les échalotes frites croustillantes ajoutent un contraste textural.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Rendang semble humide et saucisse plutôt que sec et croûté.",
            "action": "C'est du gulai, délicieux mais pas du rendang. Continuez à réduire la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Morceaux foncés, recouverts d'épices visibles et d'échalote frite. L'arôme riche et concentré est presque écrasant.",
            "action": "Servir avec du riz."
          },
          {
            "state": "Overdone",
            "description": "Tempeh est trop sombre et a un bord amer.",
            "action": "Servir avec des accompagnements de refroidissement : concombre, riz de coco, yogourt uni."
          }
        ]
      },
      "feelCue": "Un morceau parfait de tempeh rendang devrait avoir une croûte extérieure fragile et effilée qui se brise légèrement lorsqu'il est mordu, laissant place à l'intérieur sec et salé fermenté."
    }
  ]
};
