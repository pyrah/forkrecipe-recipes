export default {
  "repoId": "master_japanese_tuna_tataki_001",
  "parentRepoId": null,
  "slug": "tuna-tataki",
  "author": "ForkRecipe Kitchen",
  "title": "Tuna Tataki avec Ponzu",
  "description": "Le thon ahi de qualité sushi a brièvement séché de tous les côtés dans une casserole presque-fumeur jusqu'à ce qu'une mince coquille cuite se forme autour d'un centre entièrement cru, rouge profond – tranché mince, drapé de ponzu et de gingembre, le contraste entre la mer chaude et l'intérieur froid le point entier.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "Japonais",
    "thon",
    "Tataki",
    "ponzu",
    "sashimi",
    "en mer",
    "cru",
    "ahi"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "1 hour",
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
    "sour": 3,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "longe de thon ahi (fin jaune) de qualité sushi, dans un bloc",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "otoro à nageoires bleues (richissant)",
        "saumon de qualité sashimi"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Ponzu sauce",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sauce soja + 1 c. à soupe yuzu ou jus de citron"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, très finement râpé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Poivre noir fraichement craqué",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre à haut point de fumée (grape-seed ou avocat)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Oignons verts tranchés finement (épices)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Huile de sésame grillée",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Radis de Daikon, julienned (facultatif)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "microverts"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Jus de Yuzu ou jus de citron (acide de finition en option)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Réfrigérer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cold_tuna_block",
      "instructions": "Placez le thon dans le congélateur pendant 30 à 40 minutes avant de faire la mer. Le thon est très froid, plus vite sans cuisiner l'intérieur — l'objectif est la chaleur extérieure maximale, la cuisson intérieure minimale. Le thon doit se sentir dur à la surface mais pas congelé solide. Retirer et assaisonner immédiatement les quatre longs côtés de sel et de poivre.",
      "visualCue": {
        "primaryTarget": "Le bloc de thon se sent très ferme et froid au toucher, mais se plie très légèrement lorsqu'il est pressé. La surface est sèche et mate, pas glacée ou recouverte de gel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thon est seulement froid au réfrigérateur, non réfrigéré en dessous de 5°C. La couture fera cuire trop profondément dans l'intérieur avant qu'une croûte ne se forme.",
            "action": "Congeler pendant 30 minutes. Un extérieur gelé est essentiel à la technique."
          },
          {
            "state": "Perfect",
            "description": "La surface est très froide et ferme. Le bloc ne fléchit pas. Pas de cristaux de glace visibles. La surface sèche maximisera la réaction de Maillard dans la casserole.",
            "action": "Assaisonner et saisir immédiatement — ne le laissez pas s'asseoir et se réchauffer."
          },
          {
            "state": "Overdone",
            "description": "Le thon est en partie gelé et solide. Les cristaux de glace à l'intérieur signifient que la mer va vapeur au lieu de croûte.",
            "action": "Laisser reposer à température ambiante pendant 5 minutes, puis saisir."
          }
        ]
      },
      "feelCue": "Le thon réfrigéré devrait se sentir comme de l'acier froid, légèrement flexible contre votre palmier — pas bon marché à température ambiante, pas rigide comme un bloc congelé."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "cold_tuna_block",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seared_tuna",
      "instructions": "Chauffer une poêle en fonte ou en acier inoxydable sur une température maximale de 3 minutes jusqu'à ce qu'elle fume. Ajouter l'huile dans un film mince. Casser le bloc de thon pendant exactement 30–45 secondes de chaque côté sur les quatre côtés longs, le déplaçant avec des pinces. Ne pas saisir les extrémités. Le thon ne doit jamais reposer assez longtemps pour cuire. Travaillez vite.",
      "visualCue": {
        "primaryTarget": "Coquille mince et uniforme de couleur gris-blanc cuite d'environ 3 à 4 mm de profondeur sur les quatre côtés, l'intérieur restant complètement cru et rouge profond vu aux extrémités.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est très fine et inégale — moins de 2 mm. Peu ou pas de formation de couleurs.",
            "action": "La poêle n'était pas assez chaude. L'extérieur doit saisir, pas la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Une croûte mince et uniforme sur les quatre côtés. Les extrémités révèlent que l'intérieur est entièrement rouge brut. Les odeurs extérieures de viande séchée. Supprimé du feu avant que la couleur atteigne le centre.",
            "action": "Transférer dans une assiette froide pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "La coquille cuite est de plus de 6 mm de profondeur. L'intérieur a commencé à griser et n'est plus complètement brut. Le thon ressemble à une pièce cuite avec un petit centre brut.",
            "action": "Toujours excellent si le risque moyen est acceptable. Couper mince et servir."
          }
        ]
      },
      "feelCue": "Le thon de mer siffle fort dès qu'il frappe la poêle, un craquage soutenu et agressif. Tout silence signifie que la poêle n'est pas assez chaude et que le thon va vapeur au lieu de semer."
    },
    {
      "nodeId": "step_3",
      "action": "Trancher",
      "inputs": [
        "seared_tuna"
      ],
      "outputState": "sliced_tataki",
      "instructions": "Transférer immédiatement le thon marin dans une assiette froide ou reposer au-dessus d'un petit bol de glace pendant 2 minutes pour arrêter la cuisson. À l'aide d'un couteau à peau fine très tranchant (yanagiba ou couteau à trancher), couper le thon en tranches d'épaisseur de 5 mm en un mouvement lisse et dessinant — jamais vu. Disposer les tranches en une seule couche de recouvrement sur une plaque froide.",
      "visualCue": {
        "primaryTarget": "Chaque tranche révèle la signature du tataki : un anneau extérieur blanc-gris propre (la couture) qui entoure un centre vif, rouge profond, brut. Les tranches sont translucides au centre lorsqu'elles sont maintenues à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'anneau extérieur est très mince et patchy. Le contraste avec le centre brut est à peine visible.",
            "action": "La prochaine fois que la chaleur sera plus élevée pour un anneau complet, même. Toujours présentable."
          },
          {
            "state": "Perfect",
            "description": "Un contraste spectaculaire : l'anneau de couture gris-blanc est uniforme et de 3 à 4 mm, le centre est très vif. Les tranches sont translucides au centre et tiennent leur forme proprement.",
            "action": "Habillez immédiatement avec ponzu."
          },
          {
            "state": "Overdone",
            "description": "Les tranches révèlent une grande portion de cuisson grise avec seulement un petit centre brut. Le thon est moyennement bien.",
            "action": "Servir très froid avec ponzu extra et yuzu pour ajouter de la luminosité."
          }
        ]
      },
      "feelCue": "Les tranches devraient céder au couteau avec presque aucune résistance — un bon tataki de thon est tranché, pas coupé. Si vous ressentez une résistance fibreuse, votre couteau n'est pas assez tranchant."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "sliced_tataki",
        "ing_02",
        "ing_03",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_tuna_tataki",
      "instructions": "Arrosez ponzu et autour des tranches. Déposer un petit monticule de gingembre râpé sur chaque tranche ou placer sur le côté. Arrosez l'huile de sésame dans un cours d'eau mince. Éparpiller l'oignon vert et les graines de sésame. Ajouter le daikon à côté si vous l'utilisez. Quelques gouttes de jus de yuzu à la fin illuminent tout. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Glisser des tranches de thon dans des graines de sésame blanc et blanc, poêlées de ponzu pâle, lumineuses d'oignon vert. Le daikon julienne fournit un contrepoint blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas encore ajouté. Les tranches sont sèches.",
            "action": "Habillez-vous immédiatement avant que la surface du thon sèche."
          },
          {
            "state": "Perfect",
            "description": "Les tranches scintillent en ponzu, toutes garnies en place. Servi sur une assiette froide pour que le thon reste à la bonne température.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le thon est assis dans le ponzu depuis plus de 5 minutes et l'acide commence à « cuire » l'intérieur brut, le rendant gris.",
            "action": "Servir tataki dès qu'il est habillé. Ne laissez jamais le poisson cru s'asseoir dans l'acide."
          }
        ]
      },
      "feelCue": "Une tranche de tataki de thon parfait sur la langue devrait d'abord enregistrer la fraîcheur, la netteté du centre, puis la texture légèrement mâcher de l'extérieur mariné — deux textures entièrement différentes dans une tranche mince."
    }
  ]
};
