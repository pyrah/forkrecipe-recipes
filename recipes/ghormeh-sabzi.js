export default {
  "repoId": "master_persian_ghormeh_sabzi_001",
  "parentRepoId": null,
  "slug": "ghormeh-sabzi",
  "author": "ForkRecipe Kitchen",
  "title": "Ghormeh Sabzi",
  "description": "Le plat national iranien — un ragoût d'agneau, de haricots et d'une énorme quantité d'herbes séchées et frites, profondément herbies, étant donné son poinçon aigre caractéristique par les citrons perses séchés (limoo omani).",
  "cuisine": "Perse",
  "culture": "Iranien",
  "category": "proteins",
  "tags": [
    "ragoût",
    "persienne",
    "herbe",
    "agneau",
    "citron vert séchée"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau désossée (3-4 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mandrin de boeuf",
        "cou d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil à feuilles plates, frais ou séchés",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Feuilles de fénugreek fraîches ou séchées",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Coriandre fraîche ou séchée",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Planchers d'oignons verts ou ciboulette",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Graines de rein cuites (ou en conserve, égouttées)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots rouges"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Lime perse séchée / limoo omani (piercé)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "citron vert noire séchée",
        "2 c. à soupe de jus de lime frais en dernier recours"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Oignon jaune (en dés)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile neutre ou ghee",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Frire",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_10"
      ],
      "outputState": "fried_herb_mixture",
      "instructions": "Cette étape est le cœur de Ghormeh sabzi. Chauffer 8 parties de l'huile dans une casserole large à feu moyen. Ajouter TOUTES les herbes — persil, fenugrec, coriandre, oignon vert — et faire frire, en remuant constamment, pendant 20-30 minutes jusqu'à ce qu'elles deviennent vert très foncé, presque noir, sont complètement sèches, et sentent la noix et les herbes profondes plutôt que fraîches et herbacées. Ils réduiront à une fraction de leur volume original. Ce n'est pas une aubaine, c'est une longue friture patiente qui transforme les herbes crues en quelque chose de profond.",
      "visualCue": {
        "primaryTarget": "Les herbes sont vert très foncé approchant noir, complètement sèches, s'écroulant légèrement lorsqu'elles sont pressées avec une cuillère. L'huile dans la poêle est maintenant une huile d'herbe profonde et parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes sont encore vert vif et libèrent de la vapeur — elles sont sautées, pas frites. La saveur sera fine et fraîche plutôt que profonde.",
            "action": "Continuer à frire à feu moyen, en remuant toutes les 2-3 minutes, pendant 10-15 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Herbes sombres, presque vert noir, sèches au toucher, pétillantes et effondrées à environ un quart de leur volume brut.",
            "action": "Mettre de côté dans la poêle: ces herbes et leur huile entrent dans le ragoût ensemble."
          },
          {
            "state": "Overdone",
            "description": "Les herbes sont devenues uniformément noires et sentaient l'acride plutôt que la noix — elles ont brûlé, et non l'obscurité.",
            "action": "Jetez et redémarrez l'herbe avec des herbes fraîches — les herbes brûlées rendront le ragoût amer."
          }
        ]
      },
      "feelCue": "Des herbes parfaitement frites s'effondrent lorsqu'elles sont pressées à l'aide d'une cuillère — du café sec et sombre comme du café moulu, libérant un arôme de terre profondément salé."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_01",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "browned_lamb_base",
      "instructions": "Dans un grand pot lourd, chauffer le reste de l'huile à feu moyen-vif. Ajouter l'oignon en dés et cuire jusqu'à ce qu'il soit doré, environ 10 minutes. Ajouter les morceaux d'agneau et le curcuma, assaisonner généreusement de sel et de poivre et faire revenir l'agneau de tous les côtés — 5-6 minutes par lot. Ne foulez pas le pot. L'objectif est une croûte brun foncé sur la viande, pas de la vapeur grise.",
      "visualCue": {
        "primaryTarget": "Les oignons sont d'or profond et doux; les morceaux d'agneau sont acajou-brun sur au moins deux côtés, avec rendu gras extérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est gris et libère du liquide; les oignons sont encore translucides.",
            "action": "Augmenter la chaleur et veiller à ce que les morceaux ne soient pas encombrés — brunir en lots."
          },
          {
            "state": "Perfect",
            "description": "L'agneau très brun avec de l'oignon doré — le fond du pot est caramélisé et sombre, non brûlé. Ça sent la viande et la richesse.",
            "action": "Ajouter l'eau et passer à la longue braise."
          },
          {
            "state": "Overdone",
            "description": "Le fond du pot est brûlant et noirci; les oignons sont brun foncé avec des bords brûlés.",
            "action": "Déglacer avec une éclaboussure d'eau, grattant le bon fond; jeter les morceaux vraiment noirs."
          }
        ]
      },
      "feelCue": "Le sizzle devrait être un sifflement constant et agressif — s'il se calme à une bulle molle, la poêle a refroidi et la viande va vapeur au lieu de la mer."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "browned_lamb_base",
        "fried_herb_mixture",
        "ing_06",
        "ing_07",
        "ing_12"
      ],
      "outputState": "braised_ghormeh_sabzi",
      "instructions": "Ajouter le mélange d'herbe frite (avec toute son huile) au pot avec l'agneau brun. Ajouter les citrons secs percés et les haricots rouges cuits. Versez suffisamment d'eau pour couvrir à peine — environ 80 parties. Porter à ébullition, écrémer toute mousse, réduire à très faible mijoter, couvrir et cuire pendant 2,5-3 heures. Le ragoût devrait à peine bouger — une bulle paresseuse toutes les 5-10 secondes. Vérifiez toutes les 45 minutes et ajoutez des éclaboussures d'eau si elle resserre trop.",
      "visualCue": {
        "primaryTarget": "Un ragoût très foncé, presque vert noir avec une huile rougeâtre-ambre profonde flottant à la surface. Les citrons secs sont gonflés et adoucis. L'agneau tombe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ragoût est encore brun-vert plutôt que foncé; l'agneau est ferme et mâcheux; les citron vert séchées sont encore dures.",
            "action": "Continuer le braisage — ghormeh sabzi ne peut pas être précipité; le changement de couleur prend du temps."
          },
          {
            "state": "Perfect",
            "description": "Le ragoût est sombre et presque vert-noir, profondément salé avec une auresse ronde des citron vert. L'agneau se sépare sans résistance. La sauce est épaisse et enrobée.",
            "action": "Bouche : ajuster le sel et laisser reposer couvert pendant 15 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Les haricots se dissolvent dans le ragoût, l'agneau est complètement déchiqueté, et la sauce est brûlée au fond.",
            "action": "Retirer immédiatement du feu. La texture déchiquetée est toujours authentique; il suffit de s'assurer qu'il n'y a pas d'amertume de la brûlure."
          }
        ]
      },
      "feelCue": "Après 2 heures, pressez un citron vert séchée contre le côté de la casserole — elle devrait se compresser facilement, sa surdité entièrement lixiviée dans le ragoût."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "braised_ghormeh_sabzi",
        "ing_11"
      ],
      "outputState": "finished_ghormeh_sabzi",
      "instructions": "Goûtez soigneusement le ragoût. La saveur doit être profondément savore, amère-herbe et aigre - la surdité est la caractéristique déterminante. S'il manque d'aurore, pressez un citron vert séchée adoucie sur le côté du pot pour libérer le jus restant. S'il manque de profondeur, laisser mijoter pendant 10 minutes pour se concentrer. Réglez le sel. Servir sur le riz persan (tahdig si possible), avec les citrons secs placés sur le dessus comme garniture.",
      "visualCue": {
        "primaryTarget": "Un ragoût très foncé, avec de l'agneau et des haricots visibles, la sauce assez épaisse pour enrober une cuillère d'une couche sombre et opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ragoût est aqueux et de couleur claire; l'herbe et le citron vert sont minces.",
            "action": "Laisser mijoter à découvert pendant 15 à 20 minutes pour réduire et concentrer."
          },
          {
            "state": "Perfect",
            "description": "Le ragoût est dense, sombre, et enveloppe l'arrière d'une cuillère. Il sent complexe — terreux, aigre, profondément herbacé. L'huile à la surface est un vert kaki profond.",
            "action": "Servir en même temps ou se reposer toute la nuit — le sabzi s'améliore considérablement le deuxième jour."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût est devenu pâteux et s'accroche au pot; l'aurore est accablante.",
            "action": "Ajouter une touche d'eau et une pincée de sucre pour équilibrer; remuer doucement à feu doux."
          }
        ]
      },
      "feelCue": "Une cuillerée de sabzi ghormeh finie doit se sentir lourde et enrobée sur la langue — dense et sérieuse, pas légère ou bouillonnante."
    }
  ]
};
