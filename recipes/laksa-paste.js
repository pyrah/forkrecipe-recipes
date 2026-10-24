export default {
  "repoId": "master_malaysian_laksa_paste_001",
  "parentRepoId": null,
  "slug": "laksa-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte de laksa",
  "description": "Le moteur aromatique de laksa — crevettes séchées, galangales, citronnelle, curcuma et chandelles battues à une pâte d'or orange vif, frites dans l'huile jusqu'à ce que la dureté brute ait cuit et seulement profond, parfum complexe reste.",
  "cuisine": "Malaisien",
  "culture": "Peranakan singapourien",
  "category": "condiments",
  "tags": [
    "Malaysian",
    "singapourienne",
    "peranakan",
    "pâte",
    "Laksa",
    "citronnelle",
    "Galangal"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "45 min",
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
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes séchées (hae bi)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "crevettes séchées",
        "crevettes en poudre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chiles rouges séchés, trempés dans de l'eau tiède 15 min",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "2 tsp sambal oelek",
        "1-2 chiles rouges frais + 1 c. à thé flocons de chili"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes, grossièrement hachées",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "1 petit oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, parties blanches et vert pâle seulement, tranchées finement",
      "ratioValue": 3,
      "defaultUnit": "stalks",
      "substitutions": [
        "1 c. à soupe de pâte de citronnelle"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Galangal frais, pelé et tranché approximativement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "1,5 ct poudre de galangal (arôme plus faible)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Racines de curcuma fraîches, pelées ou broyées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à soupe de curcuma"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Bougies ou noix de macadamia",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Amandes blanchies",
        "noix de cajou"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Pâte de crevettes (belacan), grillée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "miso blanc (vegan, moins piquant)",
        "pâte de soja fermentée"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Graines de coriandre",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "1/2 cuillerée au sol"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "1/4 cumin moulu"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile végétale neutre (canola ou tournesol)",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de coco raffinée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_10",
        "ing_11"
      ],
      "outputState": "toasted_spices",
      "instructions": "Placer les graines de coriandre et de cumin dans une petite poêle sèche à feu moyen. Toast, agiter constamment la poêle, pendant 2-3 minutes jusqu'à ce que les graines soient une ombre ou deux plus foncées, commencer à sauter, et libérer un parfum chaud et noisette. Transférer immédiatement dans un mortier, un broyeur d'épices ou une petite assiette pour refroidir. Ne pas griller avec les chandelles ou tout autre ingrédient; chaque élément nécessite son propre timing.",
      "visualCue": {
        "primaryTarget": "Les graines sont légèrement assombries à un bronzage chaud, visiblement aromatiques, et quelques-uns ont commencé à craquer et à éclater. La cuisine sent les épices chaudes et grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore pâles et semblent crues. Aucun arôme n'a été libéré. Ils sentent le vert cru.",
            "action": "Continuer à griller encore 60-90 secondes à feu moyen — les aromatiques volatils ont besoin de chaleur pour se volatiliser."
          },
          {
            "state": "Perfect",
            "description": "Les graines de coriandre sont un miel-tan chaud; les graines de cumin sont un peu plus foncées caramel-brun. La poêle sent comme un bazar d'épices. Les graines commencent à peine à éclater.",
            "action": "Transférer immédiatement sur une surface fraîche. Grind quand cool."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont brun foncé à noir avec une odeur aiguë, acride, presque comme du café.",
            "action": "Les épices brûlées rendront la pâte entière amère et ne s'amélioreront pas avec la cuisson ultérieure."
          }
        ]
      },
      "feelCue": "Coupez votre main sur la poêle sèche après avoir grillé et maintenez-la à 5 cm au-dessus de la surface — les aromatiques volatils libérés par les graines correctement grillées seront clairement décelables sur le palmier même à cette distance."
    },
    {
      "nodeId": "step_2",
      "action": "Hydrater",
      "inputs": [
        "ing_02"
      ],
      "outputState": "soaked_chiles",
      "instructions": "Placer les piments rouges séchés dans un petit bol et verser suffisamment d'eau tiède (50-60°C) pour les submerger complètement. Faire tremper 15 minutes, jusqu'à ce que les chiles soient complètement réhydratés, plumés et pliables. Égoutter bien, réserver 2 cuillères à soupe de l'eau de trempage pour utilisation si nécessaire pendant le mélange. Enlevez les tiges; dégraissez si vous voulez une pâte plus douce. L'eau de trempage est rouge foncé et intensément aromatique — elle peut être ajoutée au mélange de pâte en petites quantités pour aider au mélange.",
      "visualCue": {
        "primaryTarget": "Les Chiliens sont tout à fait souples, plus secs ou cuireux. L'eau de trempe est un rouge cramoisi profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens se sentent encore raides et cuireux à l'extrémité épaisse près de la tige. Le centre n'est pas complètement réhydraté.",
            "action": "Continuer à tremper encore 5 minutes — les chiles à texture cuir laisseront des stries fibreuses dans la pâte."
          },
          {
            "state": "Perfect",
            "description": "Complètement doux et souple — les chiles drapent sur un doigt. Rouge vif. L'eau qui sème est riche.",
            "action": "Égoutter et procéder au mélange."
          },
          {
            "state": "Overdone",
            "description": "Trempés pendant plus de 30 minutes, les peaux sont arrosées et commencent à se décomposer. Une peau s'est séparée de la chair.",
            "action": "Égoutter et utiliser immédiatement. La pâte sera fine, mais légèrement plus lâche que l'idéal."
          }
        ]
      },
      "feelCue": "Pressez un chile réhydraté entre vos doigts – il doit se sentir aussi doux et souple qu'un raisin mûr, compressant complètement sans noyau sec et résistant repoussant."
    },
    {
      "nodeId": "step_3",
      "action": "Piler",
      "inputs": [
        "toasted_spices",
        "soaked_chiles",
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "raw_laksa_paste",
      "instructions": "Mouiller les épices grillées refroidies en poudre dans un broyeur d'épices. Ajouter les crevettes séchées et les mélanger brièvement. Transférer à un robot culinaire ou à un gros mortier. Ajouter la citronnelle (ingrédient le plus dur et le plus fibreux – d'abord traiter) et mélanger pendant 30 secondes. Ajouter le galangal et le curcuma et traiter encore 30 secondes. Ajouter les chiles trempés, les échalotes, l'ail, le bélacan et les chandelles. Mélanger à une pâte grossière et uniforme, en ajoutant de l'eau de trempage réservée une cuillère à soupe à la fois si nécessaire. Si l'on utilise un mortier: livrez dans le même ordre — les ingrédients les plus résistants d'abord, en travaillant vers le plus doux — avec des coups verticaux profonds et rythmiques, et non un broyage circulaire.",
      "visualCue": {
        "primaryTarget": "Une pâte orange-or vive, uniforme en texture avec une certaine granularité des crevettes séchées et des épices. Pas de gros morceaux visibles de citronnelle ou de galangal.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de citronnelle ou de galangal. La pâte est très grossière et inégale. La citronnelle fibreuse peut rester non transformée et créer une texture fictive désagréable dans la pâte finale.",
            "action": "Continuez à mélanger. Le citronnelle est l'ingrédient le plus fibreux et nécessite le plus de temps de transformation."
          },
          {
            "state": "Perfect",
            "description": "Une pâte épaisse, profondément parfumée orange-or avec une texture uniforme, légèrement rugueuse. L'odeur est extraordinaire: citronnelle agrumes-brillante sur galangal terreux et curcuma, avec une puissante note de basse marine salée de la crevette et du bélacan.",
            "action": "Faire revenir la pâte dans l'huile."
          },
          {
            "state": "Overdone",
            "description": "Dépassé dans une pâte complètement lisse et brillante. Il a perdu toute texture.",
            "action": "Procéder — une pâte lisse fera frire et se comportera de façon identique. La différence de texture est subtile dans le laksa fini."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité de pâte brute contre le toit de votre bouche avec votre langue — vous devriez sentir un léger grain des épices et des crevettes séchées, un signal tactile de la complexité de la pâte. La pâte complètement lisse a été surtraitée."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "raw_laksa_paste",
        "ing_12"
      ],
      "outputState": "fried_laksa_paste",
      "instructions": "Chauffer l'huile dans un wok ou une poêle large à fond lourd à feu moyen jusqu'à ce qu'elle mijote. Ajouter toute la pâte crue à la fois. Faire frire, en remuant constamment avec une cuillère en bois ou une spatule wok, pendant 15-20 minutes. C'est l'étape la plus critique: la pâte doit être frite assez longtemps pour la dureté brute de la citronnelle, la pâte de crevettes et l'ail à cuire, et pour les aromatiques volatils à développer pleinement dans l'huile. Ajustez la chaleur pour maintenir un alevin constant et actif — étourdissement vigoureux, pas un mijoter doux.",
      "visualCue": {
        "primaryTarget": "Après 15 à 20 minutes, la pâte s'est obscurcie, passant de l'or orange vif à un brun orange foncé. L'huile s'est séparée des solides et se retrouve visiblement autour des bords. La netteté de la citronnelle brute a cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 10 minutes – la pâte est encore orange vif et sent fortement la citronnelle crue et la crevette crue. Une note brute dure, piquante, presque désagréable domine.",
            "action": "Continuez à frire. La transformation de la pâte crue à la pâte cuite est dramatique et incontestable — continuez."
          },
          {
            "state": "Perfect",
            "description": "Après 15 à 20 minutes, la pâte s'est mélangée à un brun orange plus profond et plus chaud. Les réserves d'huile sont propres aux bords. L'arôme est passé de brut et vif à profondément parfumé, arrondi et complexe — des notes florales de citronnelle flottent maintenant sur une base terreuse et savore.",
            "action": "Retirer du feu et refroidir."
          },
          {
            "state": "Overdone",
            "description": "La pâte a commencé à brûler aux bords de la poêle. Feux brun foncé ou noir visibles. Une odeur brûlée.",
            "action": "Retirer immédiatement du feu. Bien mélanger pour incorporer les morceaux foncés. Une légère brûlure ajoute une légère amertume, mais ne ruinera pas la pâte; une forte volonté de brûler."
          }
        ]
      },
      "feelCue": "Se tenir directement au-dessus du wok et inhaler profondément à la minute 5 (brut et tranchant), à la minute 10 (transition, membraison de citronnelle) et à la minute 15 (arrondi, complexe, parfumé) - la transformation aromatique de la cuisson de la pâte dans l'huile est une classe principale dans ce que la chaleur fait aux composés volatils."
    },
    {
      "nodeId": "step_5",
      "action": "Refroidir",
      "inputs": [
        "fried_laksa_paste"
      ],
      "outputState": "finished_laksa_paste",
      "instructions": "Retirer la pâte finie du feu. Transférer dans un bol ou un contenant propre et laisser refroidir complètement à température ambiante — au moins 30 minutes. En refroidissant, l'huile se lèvera et formera une couche protectrice sur le dessus de la pâte. Cette couche d'huile est le mécanisme de conservation : presser un morceau d'enveloppe en plastique directement sur la surface de la pâte pour empêcher l'oxydation en stockant, ou laisser le bouchon d'huile en place et réfrigérer dans un pot scellé. La pâte finie reste réfrigérée pendant 3 semaines ou congelée pendant 3 mois. Pour l'utiliser, faire revenir brièvement la pâte dans l'huile fraîche avant d'ajouter le lait de coco et le bouillon.",
      "visualCue": {
        "primaryTarget": "Une pâte fraîche, dense, brun-orange profonde avec une fine couche d'huile rouge-orange parfumée mise en commun sur le dessus. La pâte doit tenir sa forme lorsqu'elle est écopée avec une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore chaude — l'huile n'est pas complètement séparée et relevée. La pâte est lâche et versable.",
            "action": "Laisser refroidir complètement. La séparation de l'huile est complète à température ambiante seulement après 20-30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Pâte ferme et dense avec une couche d'huile d'orange aromatique nettement séparée sur le dessus. Une cuillère lève proprement et sent la citronnelle, le galangal et la crevette. Les bords bruts sont complètement partis.",
            "action": "Conserver réfrigéré dans un pot scellé, en veillant à ce que la couche d'huile recouvre la surface de la pâte. Utiliser dans les 3 semaines."
          },
          {
            "state": "Overdone",
            "description": "Entreposée au chaud ou sans couche d'huile couvrante — la surface de la pâte s'est oxydée à une couleur plus foncée et plus terne et l'arôme s'est aplati.",
            "action": "Ajouter une fine couche d'huile fraîche sur le dessus de la pâte dans le pot pour protéger la pâte restante de l'oxydation ultérieure."
          }
        ]
      },
      "feelCue": "Scoop une cuillère à café de pâte refroidie et le tenir sous votre nez — les aromatiques devraient frapper en couches: d'abord la luminosité d'agrumes de citronnelle, puis la terre médicinale du galangal, puis la note marine profonde et piquante de belacan levant dernier, se réchauffer dans la tasse de votre main."
    }
  ]
};
