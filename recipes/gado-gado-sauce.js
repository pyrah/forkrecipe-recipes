export default {
  "repoId": "master_indonesian_gado-gado-sauce_001",
  "parentRepoId": null,
  "slug": "gado-gado-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce d'arachide Gado-Gado",
  "description": "Une sauce d'arachide javanaise épaisse, de couleur rouille, avec le corps d'une sauce et la complexité d'un curry — les cacahuètes moulues se détachent dans le lait de noix de coco pour se verser velouté, tandis que le galangal, la citronnelle et une étincelle de chili oculaire d'oiseau construisent une chaleur en couches qui s'accroche à chaque légume et à chaque œuf qu'il touche.",
  "cuisine": "Indonésien",
  "culture": "Javanese",
  "category": "sauces",
  "tags": [
    "arachide",
    "par an",
    "satay",
    "végétalien",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Cacahuètes grillées (non salées), peaux enlevées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre d'arachide naturel (sans sucre ajouté)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "eau (sauce fine)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Chili oculaire d'oiseau (2-4 piments au goût), tranché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de chili rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail (3 girofles), pelé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes asiatiques (3), pelées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "1/4 petit oignon rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Bouton galangal (2 cm), tranché finement",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre de palme (ou sucre brun foncé)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Pâte de tamarin (ou jus de lime)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "2 cuillères à soupe de jus de lime"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Masque de kécap (sauce de soja sucrée)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + 1/4 de miel"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01"
      ],
      "outputState": "peanut_paste",
      "instructions": "Si vous utilisez des arachides grillées entières, faites du pouls dans un robot culinaire ou un mélangeur jusqu'à ce que vous atteigniez une pâte grossière et épaisse — pas du beurre d'arachide lisse, mais pas des arachides entières non plus. Vous voulez des morceaux irréguliers du sable grossier à petite taille de galets. Cette pâte texturée donnera à la sauce finie son corps rustique caractéristique. Si vous utilisez du beurre d'arachide naturel, sautez cette étape.",
      "visualCue": {
        "primaryTarget": "Une pâte d'arachide sèche et sablonneuse avec des morceaux visibles. Pas de gros cacahuètes entières. Teinture dorée pâle, intensément parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore trop de cacahuètes. La sauce aura une texture épaisse et inégale.",
            "action": "Pulse plus dans le robot culinaire. Visez une texture sablonneuse généralement grossière avec quelques petites pièces."
          },
          {
            "state": "Perfect",
            "description": "Pâte grossière — sur la texture du beurre d'arachide croquant naturel. Des odeurs de cacahuète torréfié.",
            "action": "Ajouter aux aromatiques lorsque la pâte d'épices est prête."
          },
          {
            "state": "Overdone",
            "description": "Les arachides ont été mélangées à une pâte complètement lisse. La sauce sera plus épaisse et plus soyeuse mais perdra le caractère textural.",
            "action": "Procéder — la sauce lisse est encore excellente, c'est juste une différence stylistique."
          }
        ]
      },
      "feelCue": "Frottez une pincée de la pâte d'arachide entre vos doigts — elle devrait être sèche et légèrement grasse, laissant un résidu doré. Cette huile rend la sauce riche et brillante."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "spice_paste",
      "instructions": "Mélanger les chilis, l'ail, les échalotes et le galangal dans un mortier ou un petit mélangeur. Pound ou mélanger à une pâte grossière. Un mortier est traditionnel et donne une pâte plus fibreuse et aromatique avec une meilleure profondeur; un mélangeur fonctionne bien si vous êtes court dans le temps. La pâte doit être uniformément pulvérisée — il ne reste pas de gros morceaux d'ail ou d'échalote.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse, de couleur rouille, avec une texture humide et épaisse. L'odeur est piquante avec l'ail cru, la chaleur de chili et la chaleur médicinale du galangal.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Choux — moitiés d'ail entier et morceaux d'échalote encore visibles. Se fera cuire inégalement et laisser les poches d'allium cru difficiles.",
            "action": "Pound ou mélanger plus jusqu'à ce que la pâte soit relativement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Pâte grossière mais uniforme. Le galangal est complètement détruit. L'odeur est complexe et aromatique.",
            "action": "Faire revenir l'huile avant d'ajouter d'autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "La pâte est une fine purée très humide. Il s'étalera agressivement dans l'huile chaude.",
            "action": "Séchez-vous avec une serviette en papier et continuez avec prudence lors de l'ajout à la poêle chaude."
          }
        ]
      },
      "feelCue": "La pâte d'épices crues devrait faire vos yeux arroser légèrement de la vapeur de chili quand vous vous penchez près — que la ponction se rafraîchira très bien quand elle sera frite dans l'huile."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "spice_paste",
        "ing_07"
      ],
      "outputState": "fried_spice_base",
      "instructions": "Chauffer 2 cuillères à soupe d'huile neutre dans un wok ou une casserole à feu moyen. Ajouter la pâte d'épices et faire frire pendant 3-4 minutes jusqu'à ce qu'elle s'assombrisse de rose-orange pâle à un rouge rouille plus profond et sent cuit et doux plutôt que cru et aiguisé. Ajouter le sucre de palme et remuer jusqu'à ce qu'il soit fondu et incorporé. La pâte commencera à caraméliser autour des bords — c'est exact. Une base d'épices bien frite sent l'odeur parfumée, légèrement noisette et profondément salée.",
      "visualCue": {
        "primaryTarget": "La pâte s'est obscurcie jusqu'à un orangé-rouille profond. La graisse s'est séparée autour des bords de la pâte (pecah minyak — 'corrosion'). Sensations cuites et douces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore pâle et sent cru. L'huile n'est pas séparée. Moins de 2 minutes de cuisson.",
            "action": "Continuer à frire — la pâte d'épices crue dans la sauce finie aura un goût dur et désagréable."
          },
          {
            "state": "Perfect",
            "description": "Couleur de la rouille profonde. L'huile est visiblement visible autour des bords de la pâte. L'odeur est riche, noisette et cuite. Le sucre a encore obscurci la pâte.",
            "action": "Ajouter la pâte d'arachide, le lait de coco, le tamarin, le manis du kécap et le sel."
          },
          {
            "state": "Overdone",
            "description": "La pâte est brun très foncé et colle agressivement. Les bittes brûlent sur le fond de la poêle.",
            "action": "Ajouter immédiatement un jet de lait de coco et racler le fond. Les morceaux brûlés ajouteront de la complexité sinon trop sombre."
          }
        ]
      },
      "feelCue": "Lorsque vous ajoutez la pâte d'épices à l'huile chaude, vous devriez entendre un étourdissement féroce suivi d'une vapeur de chili-ail parfumée — s'il n'y a pas de étourdissement, l'huile n'est pas assez chaude et la pâte va se rafraîchir plutôt que de faire frire."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "fried_spice_base",
        "peanut_paste",
        "ing_02",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_gado_gado_sauce",
      "instructions": "Ajouter la pâte d'arachide à la base d'épices frites et mélanger — le mélange sera très épais et sec à ce point. Verser graduellement dans le lait de coco, en remuant constamment pour incorporer la pâte d'arachide et d'épices. Ajouter la pâte de tamarin, le manis du kécap et le sel. Porter à mijoter doucement à feu moyen-doux, en remuant fréquemment pour éviter que la sauce épaisse ne s'attrape sur le fond. Laisser mijoter de 5 à 8 minutes jusqu'à ce que la sauce soit assez épaisse pour enrober abondamment l'arrière d'une cuillère et que l'huile des arachides s'élève à la surface en gouttelettes dorées. Goûtez et ajustez : plus de sucre de palme si trop vif, plus de tamarin si trop sucré, sel pour soulever l'ensemble.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse brun rouille avec une texture veloutée et légèrement grainée. Des gouttelettes d'huile d'arachide dorées visibles à la surface. Des chutes dans des rubans épais d'une cuillère levée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est trop fine — verse librement. L'arôme de lait de coco cru est toujours dominant. L'huile n'est pas séparée jusqu'au sommet.",
            "action": "Continuer à mijoter à découvert, en remuant fréquemment, pendant encore 3 à 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, consistance du revêtement. Saveur salée et sucrée avec chaleur de chili. Huile d'arachide glissant sur le dessus. L'équilibre sucré, aigre, salé et chaud est harmonieux.",
            "action": "Laisser refroidir légèrement avant de servir. Arroser d'eau chaude si nécessaire lors du service."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte très épaisse et collante qui tient sa forme. L'huile d'arachide est complètement séparée en une piscine sur le dessus.",
            "action": "Arroser de lait de coco ou d'eau chaude, remuer vigoureusement et laisser mijoter brièvement pour réémulsionner."
          }
        ]
      },
      "feelCue": "Passez un doigt à travers une goutte de sauce sur le côté de la casserole — il devrait laisser une ligne propre qui se remplit lentement, comme la soupe de champignons condensés. Si elle se remplit immédiatement, cuire plus longtemps; si elle est solide, mince avec de l'eau."
    }
  ]
};
