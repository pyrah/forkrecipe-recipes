export default {
  "repoId": "master_japanese_soba_tsuyu_001",
  "parentRepoId": null,
  "slug": "soba-tsuyu",
  "author": "ForkRecipe Kitchen",
  "title": "Soba Tsuyu (brosse de trempe)",
  "description": "Le bouillon concentré de trempage pour les nouilles de soba froides — un équilibre précis de dashi, de soja et de mirin qui est suffisamment affirmé et complexe pour résister au sarrasin terreux et fébrile.",
  "cuisine": "Japonais",
  "culture": "Tokyo",
  "category": "sauces",
  "tags": [
    "sauce à tremper",
    "Japonais",
    "Soba",
    "Dashi",
    "Tsuyu"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Seasoning",
      "name": "sauce de soja foncée (koikuchi shoyu)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja régulière"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, pas mirin-style)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Kombu (poule séchée, pièce de 10 cm)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Inosinate",
      "name": "Katsuobushi (bonito rasé, hanakatsuo)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "soda-bushi (flacons de maquereau) pour une saveur plus profonde"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 150,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_04",
        "ing_06"
      ],
      "outputState": "kombu_dashi",
      "instructions": "Placez le kombu dans de l'eau froide et laissez-le tremper pendant 30 minutes à température ambiante (ou nuit au réfrigérateur pour une saveur plus propre et plus profonde). Porter à 60-65 C à feu doux — ne pas bouillir; le kombu bouillant libère des composés amers. Maintenez à cette température pendant 10 minutes, puis retirez le kombu avant qu'il ne soit glissant. Le dashi devrait être d'or pâle et légèrement parfumé par l'océan.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or clair et pâle avec une faible iridescence — pas trouble, pas sombre, juste un délicat or paille avec le kombu entièrement réhydraté et légèrement adouci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore presque claire; le kombu a à peine gonflé. L'extraction de l'umami est insuffisante.",
            "action": "Plongez encore pendant 15 minutes; le trempage froid peut prendre jusqu'à 1 heure."
          },
          {
            "state": "Perfect",
            "description": "Or clair pâle, légèrement parfumé de la mer. Kombu est entièrement souple et doux mais pas visqueux.",
            "action": "Enlever kombu et procéder immédiatement pour ajouter katsuobushi."
          },
          {
            "state": "Overdone",
            "description": "Dashi a bouilli — le kombu est devenu visqueux et libéré des composés amers et mucilagineux.",
            "action": "Souchez immédiatement; le dashi peut avoir une légère amertume mais est encore utilisable."
          }
        ]
      },
      "feelCue": "Frotter une goutte de kombu dashi entre vos doigts — il devrait se sentir très faiblement léché, un murmure des sucres naturels de la varech, avec un arôme océanique propre."
    },
    {
      "nodeId": "step_2",
      "action": "Streep",
      "inputs": [
        "kombu_dashi",
        "ing_05"
      ],
      "outputState": "ichiban_dashi",
      "instructions": "Portez le dashi kombu à 80 C (juste en dessous d'un mijot). Ajouter le katsuobushi en même temps — ne pas remuer. Plonger pendant exactement 3 minutes, puis retirer de la chaleur. Plongez dans un tamis fin doublé d'un chiffon de coton ou d'une serviette en papier mouillé, laissant le dashi s'écouler sans appuyer sur les flocons. Communiqués de presse sur l'amertume. Le dashi ichiban résultant est la fondation de tsuyu.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré-or clair et profond — plus foncé que le dashi kombu seul, avec un arôme salé prononcé et une bonne clarté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore de l'or pâle après ajout de katsuobushi ; une extraction inosinate insuffisante.",
            "action": "Plongez encore 1 à 2 minutes avant de vous enfoncer."
          },
          {
            "state": "Perfect",
            "description": "Ambre clair-or avec un arôme propre et complexe — le minéral de mer de kombu maintenant soutenu par le smoky-savory de bonito. Bonne clarté sans nuage.",
            "action": "Mesurer et utiliser pour le tsuyu; économiser tout restant comme base de soupe."
          },
          {
            "state": "Overdone",
            "description": "Suspendue trop longtemps ou pressée pendant qu'elle est tendue — nuageuse et légèrement amère.",
            "action": "Le tsuyu masquera un peu d'amertume ; ajuster avec une petite pincée de sucre."
          }
        ]
      },
      "feelCue": "Le dashi frais d'ichiban devrait avoir une chaleur propre et pure de l'umami — goûté à lui seul, il est presque modeste, mais la finale s'attarde avec une profondeur tranquille qui annonce sa qualité."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "kaeshi",
      "instructions": "Mélanger la sauce soja, le mirin et le sucre dans une petite casserole. Chauffer à feu très doux, en remuant doucement jusqu'à ce que le sucre se dissout complètement — c'est le kaishi (concentré). Ne laissez pas bouillir; un ébullition vigoureux conduit aux aromatiques volatils qui donnent à mirin sa complexité. Le kaeshi est la base de soja-doux concentrée qui sera diluée avec le dashi. Il peut être fait à l'avance et entreposé à température ambiante jusqu'à un mois.",
      "visualCue": {
        "primaryTarget": "Un liquide foncé et brillant avec le sucre entièrement dissous — uniformément brun profond avec un fin éclat, doux wisps de vapeur mais pas de bulles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les granules de sucre sont encore visibles au fond; le liquide est nuageux avec du sucre non dissous.",
            "action": "Incorporer doucement à feu doux pendant 2 minutes jusqu'à ce qu'il soit complètement clair."
          },
          {
            "state": "Perfect",
            "description": "Un brun foncé uniforme, brillant et clair. Le sucre s'est complètement dissous. L'arôme est profondément salé-doux — soja et mirin entièrement intégré. Pas de bulles.",
            "action": "Retirer du feu et refroidir à la température ambiante, puis combiner avec le dashi."
          },
          {
            "state": "Overdone",
            "description": "Kaeshi a bouilli — la surface est mousseuse et les aromatiques d'alcool ont volatilisé.",
            "action": "Refroidir et goûter; si surréduit, mince avec un jet de mirin frais. L'arôme peut être légèrement flatteur."
          }
        ]
      },
      "feelCue": "Une goutte de kaeshi entre le pouce et l'index devrait se sentir légèrement visqueux — il se sépare avec un fil très faible, un signe que les sucres ont complètement incorporé dans le soja."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "kaeshi",
        "ichiban_dashi"
      ],
      "outputState": "finished_tsuyu",
      "instructions": "Combiner le kaishi avec le dashi ichiban dans un rapport d'environ 1 partie kaishi à 3 parties dashi. Mélanger doucement. Goûtez et ajustez: pour une sauce à tremper plus concentrée (pour le zaru soba froid), utilisez 1:2,5; pour un bouillon de soupe de nouilles plus léger, utilisez 1:4. Réfrigérer pendant au moins 2 heures, idéalement une nuit, avant de servir. La période de repos permet aux kaeshi et dashi de s'harmoniser complètement. Servir froid avec des nouilles de soba glacés, et offrir un dashi froid supplémentaire sur le côté pour diluer au goût personnel.",
      "visualCue": {
        "primaryTarget": "Un liquide acajou-ambre clair et profond — plus foncé que le dashi, plus léger que le kaishi — avec une surface propre et une clarté visible lorsqu'il est tenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop pâle et mince — rapport dashi trop élevé; goût aqueux et plat contre la soba.",
            "action": "Ajouter plus de kaeshi une cuillère à soupe à la fois, dégustation après chaque ajout."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou-ambre, complètement clair. Goûte gras, salé et salé avec une douceur ronde du mirin. L'umami persiste. Contre la soba, elle est affirmée mais pas écrasante.",
            "action": "Réfrigérer dans un contenant scellé; il s'améliore considérablement après une journée."
          },
          {
            "state": "Overdone",
            "description": "Trop foncée et intensément salée — rapport kaishi trop élevé; goûts bri et amer.",
            "action": "Fin avec le dashi froid une cuillère à soupe à la fois, dégustation après chaque ajout."
          }
        ]
      },
      "feelCue": "Le tsuyu froid a une viscosité faible et agréable du mirin réduit et des sucres kombu — il enveloppe le dos d'une cuillère d'un murmure de corps, pas mince comme de l'eau, pas collant comme une glaçure."
    }
  ]
};
