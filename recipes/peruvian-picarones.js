export default {
  "repoId": "master_peruvian_peruvianpicarones_001",
  "parentRepoId": null,
  "slug": "peruvian-picarones",
  "author": "ForkRecipe Kitchen",
  "title": "Picarones",
  "description": "Les beignets frits bien-aimés du Pérou - des anneaux de patate douce et de courge de beurre, levain de levure et croustillants à l'extérieur, oreiller à l'intérieur, arrosés de sirop de chancaca épicé avec de l'anis et de la cannelle.",
  "cuisine": "Pérou",
  "culture": "Limeño",
  "category": "desserts",
  "tags": [
    "dessert",
    "végétalien",
    "Potato doux",
    "squash",
    "périuvien",
    "frits",
    "sirop"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "3 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pommes de terre douces à chair orange, cuites et purées",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "courges à beurre, cuites et purées",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Citrouille"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure sèche active",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": [
        "levure instantanée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines d'anis, légèrement broyées",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Chancaca (bloc de sucre de canne brute) ou sucre de muscovado foncé",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "piloncillo",
        "muscovado foncé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Eau (pour sirop)",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 3,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Citrus",
      "name": "Bandes de peau orange",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "picarone_dough",
      "instructions": "S'assurer que la patate douce et les cils de courge sont refroidis à tiède — assez chauds pour activer la levure, assez frais pour ne pas la tuer (38°C / 100°F est idéal). Mélanger les cils dans un grand bol. Dissoudre la levure dans 3 cuillères à soupe d'eau chaude avec une pincée de sucre et laisser 5 minutes jusqu'à mousser. Ajouter la levure mousseuse, le sucre restant, le sel et les graines d'anis dans la masse. Ajouter la farine graduellement, mélanger pour former une pâte douce et légèrement collante. Il sera plus doux et plus collant que la pâte à pain en raison de l'humidité végétale — n'ajoutez pas trop de farine.",
      "visualCue": {
        "primaryTarget": "Une pâte douce, teintée d'orange, légèrement collante qui tient ensemble mais s'accroche au bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours trop humide et trop slosy. Ne tient aucune forme. Très collant et rugueux.",
            "action": "Ajouter la farine 2 cuillerées à soupe à la fois et mélanger jusqu'à ce que la pâte se maintienne lorsqu'une balle est tentée."
          },
          {
            "state": "Perfect",
            "description": "Pâte douce, légèrement collante, teintée d'orange. Se tient ensemble en masse, mais s'accroche doucement au bol. Des odeurs d'anis et de patate douce. Peut être étiré sans déchirer facilement.",
            "action": "Couvrir et prouver dans un endroit chaud jusqu'à doublé, environ 1-2 heures."
          },
          {
            "state": "Overdone",
            "description": "La toux est serrée, lisse et n'est plus collante — trop de farine ajoutée. Produira des picarones denses et mâcheuses.",
            "action": "Couvrir et se reposer — l'activité de la levure aidera à relâcher la pâte pendant la mise à l'épreuve."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir chaude, douce et à peine gérable avec les mains mouillées — si elle se sent comme la pâte à pain standard, elle a trop de farine."
    },
    {
      "nodeId": "step_2",
      "action": "Faire lever",
      "inputs": [
        "picarone_dough"
      ],
      "outputState": "proofed_picarone_dough",
      "instructions": "Couvrir le bol d'une enveloppe en plastique ou d'un chiffon humide. Laisser dans un endroit chaud (25-28°C / 77-82°F) pendant 1-2 heures jusqu'à ce que la pâte ait à peu près doublé en volume et semble aérée et lâche. La pâte deviendra également encore plus collante à mesure que la levure s'active — c'est normal. L'arôme d'anis deviendra plus prononcé.",
      "visualCue": {
        "primaryTarget": "Double en volume, très aéré, avec une surface légèrement bombée et des bulles visibles aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine ressuscité. Sensé et toujours compact. Sens de légumes crus et de farine, pas d'activité levure.",
            "action": "Déplacez-vous dans un endroit plus chaud. Dans les cuisines froides, placer le bol dans un four éteint avec juste la lumière allumée."
          },
          {
            "state": "Perfect",
            "description": "Double ou plus. Allongé et aéré, avec des bulles visibles à la surface et sur les côtés. Sens de douceur fermentante avec des notes d'anis. La pâte saute quand le bol est secoué.",
            "action": "La pâte est prête à frire. Gardez-le dans le bol et utilisez les mains mouillées pour former des anneaux directement sur l'huile."
          },
          {
            "state": "Overdone",
            "description": "La toux est surpropriété — forte odeur acide/alcoolique. Très lâche et collant. La surface peut montrer un effondrement.",
            "action": "Fry immédiatement. Les picarones surprotégées seront moins aérées mais toujours comestibles."
          }
        ]
      },
      "feelCue": "Un poke avec un doigt fariné devrait laisser une fossette qui se remplit lentement — demi - printemps, demi - effondrement. Si ça revient vite, il lui faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "chancaca_syrup",
      "instructions": "Briser ou couper le chancaca en morceaux. Mélanger avec de l'eau, du bâton de cannelle, des gousses et de l'écorce d'orange dans une casserole. Chauffer à feu moyen, en remuant pour dissoudre le sucre. Une fois dissous, porter à ébullition douce et cuire 10-12 minutes jusqu'à ce que le tout soit sirupeux et parfumé. Éteignez les épices et pelez. Restez au chaud. Le sirop doit être foncé, épicé et assez épais pour être arrosé.",
      "visualCue": {
        "primaryTarget": "Un sirop brun-ambre foncé et parfumé assez épais pour arroser lentement d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fine, aqueuse et très sombre — toute la saveur de sucre, mais pas de viscosité. Elle coule dans un ruisseau mince.",
            "action": "Cuire encore 5 minutes. Le sirop doit réduire à une légère consistance de revêtement."
          },
          {
            "state": "Perfect",
            "description": "Ambre foncée, distinctement épicée et parfumée. Dessèche lentement une cuillère dans un ruisseau épais. Sens d'anis, de cannelle et de sucre cru de canne.",
            "action": "Plongez et gardez au chaud pour arroser les picarones chaudes."
          },
          {
            "state": "Overdone",
            "description": "Le sirop s'est fixé dur — cristallisant ou devenant très épais et collant. Des coups sur la cuillère.",
            "action": "Ajouter 50 ml d'eau chaude et réchauffer doucement jusqu'à ce que le liquide soit à nouveau."
          }
        ]
      },
      "feelCue": "Arrosez une cuillère et soulevez - le sirop doit tomber dans une bruine mince et stable qui s'affaisse lentement. Pas un ruisseau, pas des gouttes."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "proofed_picarone_dough",
        "ing_08"
      ],
      "outputState": "fried_picarones",
      "instructions": "Chauffer l'huile à 175°C (345°F) dans un poêlon profond et large. Mouillez bien vos mains. Prenez une partie de la pâte de la taille d'une balle de golf, faites un trou dans le centre avec votre doigt, et étirez-vous en forme d'anneau (environ 10 cm de diamètre) directement sur l'huile chaude. Laisse tomber. Faire frire en lots de 3-4, en tournant une fois après 2-3 minutes, jusqu'à ce que les deux côtés soient profondément dorés. La durée totale de cuisson est de 4-5 minutes par lot. La pâte va s'étendre dans l'huile. Égoutter sur des serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Anneaux dorés et piqués avec une couleur uniforme des deux côtés et une texture ouverte et aérée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, doux, et toujours à la pression. L'intérieur peut être pâteux et cru. L'huile n'est pas assez chaude.",
            "action": "Augmenter la température de l'huile et faire frire plus longtemps. L'extérieur doit être vraiment doré avant de basculer."
          },
          {
            "state": "Perfect",
            "description": "D'or profond-brun des deux côtés, gonflé, et avec un extérieur légèrement croustillant. Lorsqu'il est cassé, l'intérieur est doux, aéré et teinté d'orange de la patate douce. Des odeurs de douceur frite.",
            "action": "Égoutter et arroser immédiatement avec du sirop de chancaca chaud."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, extérieur dur. Une odeur frite. Les anneaux sont rigides et ne donnent pas.",
            "action": "Température d'huile inférieure. Les picarones foncées perdent le contraste entre extérieur croustillant et intérieur doux."
          }
        ]
      },
      "feelCue": "Un picarone parfait devrait sentir la lumière dans la main par rapport à sa taille — un extérieur croustillant qui donne à la pression douce, révélant un intérieur doux."
    }
  ]
};
