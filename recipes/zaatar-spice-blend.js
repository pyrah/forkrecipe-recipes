export default {
  "repoId": "master_levantine_zaatar_001",
  "parentRepoId": null,
  "slug": "zaatar-spice-blend",
  "author": "ForkRecipe Kitchen",
  "title": "Mélange d'épices Za'atar",
  "description": "Thym sauvage séché, sésame grillé, sumac de tarte et sel pincé dans le mélange le plus essentiel du garde-manger libanais — mélangé à l'huile d'olive pour tremper le pain, dispersé sur la labneh, ou frotté sur le poulet avant qu'il ne frappe le grill.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "zaatar",
    "Moyen-Orient",
    "mélange d'épices",
    "lévantine",
    "condiment",
    "thym",
    "Sumac"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 1610,
  "forks": 138,
  "contributors": 40,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-30",
  "updatedAt": "2025-05-25",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Thym sauvage séché (ou thym séché)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Origan séché",
        "Marjoram séché",
        "un mélange des trois"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Sumac moulu (séché, baies rouges tartes)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Graines de sésame blanc",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de sésame noir"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel (faible)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin de fond (facultatif)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Coriandre terrestre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Flacons de chili rouges séchés (facultatif)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_03"
      ],
      "outputState": "toasted_sesame",
      "instructions": "Placer les graines de sésame dans une poêle sèche à feu moyen. Faire cuire, en remuant constamment, pendant 3 à 4 minutes jusqu'à ce que les graines deviennent dorées et commencent à sauter et à sauter dans la poêle. Retirer immédiatement du feu et transférer dans une assiette pour refroidir — ils continueront à cuire sur la poêle chaude. C'est le seul ingrédient qui nécessite de griller; le sumac et le thym séché ne doivent pas être chauffés, car la chaleur chasse les huiles aromatiques volatiles qui rendent za'atar parfumé.",
      "visualCue": {
        "primaryTarget": "Les graines sont uniformément dorées — pas brun foncé, pas blanches. Une légère activité pop-and-jump dans la casserole est audible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore blanches. Pas de saut, pas de changement d'arôme. Le pan n'est peut-être pas assez chaud.",
            "action": "Continuer à feu moyen. Les graines prennent 2 à 3 minutes avant tout changement visible, puis il se produit rapidement."
          },
          {
            "state": "Perfect",
            "description": "Uniformement doré, parfumé, avec quelques taches plus foncées. Un arôme de sésame chaud et noisette remplit la cuisine. Les graines sautent parfois.",
            "action": "Immédiatement hors du feu et sur une assiette fraîche."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont brun foncé à bronzées. L'odeur commence à se transformer en amer.",
            "action": "Jeter et remettre en état. Le sésame sombre a une note amère qui va déséquilibrer tout le mélange za'atar."
          }
        ]
      },
      "feelCue": "Appuyez sur une graine de sésame grillée entre les doigts — elle doit être sèche et croustillante, s'effondrer légèrement avec pression et libérer immédiatement un arôme chaud et noisette."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_sesame",
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "blended_zaatar",
      "instructions": "Mélanger le thym séché, le sumac, le sésame grillé refroidi, le sel et les flocons de cumin et de chili en option dans un bol. Si le thym séché est sur la tige, décaper les feuilles d'abord et jeter les tiges ligneuses. Mélanger soigneusement avec une fourchette ou une cuillère. Le mélange doit avoir l'aspect rouge-vert du sumac et du thym, avec des graines de sésame blanc distribuées partout. Aucun broyage ou traitement n'est nécessaire — za'atar est destiné à être un mélange lâche, texturé, pas une poudre.",
      "visualCue": {
        "primaryTarget": "Un mélange lâche, uniformément mélangé de thym vert, sumac violet rouge et sésame blanc avec une texture visible. Ce n'est pas de la poudre, elle devrait ressembler presque à un gros sel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thym et le sumac sont assis dans des touffes séparées; le sésame est mis en commun au fond. Pas mélangé.",
            "action": "Jeter et plier plus soigneusement. Za'atar n'est qu'une étape de mélange: il faut du temps et de l'attention."
          },
          {
            "state": "Perfect",
            "description": "Distribué uniformément. Vert, rouge et blanc sont tous visibles dans chaque cuillère. L'arôme est à base de plantes, de tarte et de noix simultanément.",
            "action": "Boucher, ajuster le sel et conserver."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé avec une cuillère si vigoureusement que le thym s'est cassé à une poudre fine et le sumac s'est emparé de l'humidité du sésame.",
            "action": "Étaler sur une assiette pour sécher pendant 30 minutes, puis mélanger à nouveau doucement."
          }
        ]
      },
      "feelCue": "Frottez une pincée entre vos paumes et apportez-les à votre nez — l'arôme combiné doit être sauvagement stratifié: tart sumac, thym à base de plantes, sésame chaud, tout à la fois, comme une colline au Liban après la pluie."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "blended_zaatar"
      ],
      "outputState": "finished_zaatar_blend",
      "instructions": "Goûtez le za'atar sec, puis mélangé dans une petite piscine d'huile d'olive. Ajuster: plus de sumac si vous voulez plus de tartness (il est le plus important driver de saveur dans un bon za'atar), plus de sel si plat, plus de sésame pour la noix. Le mélange doit être équilibré: terreux et à base de plantes du thym, aigre du sumac, noix du sésame, et salé du sel. Conserver dans un pot en verre scellé dans un endroit frais et sombre pendant 6 mois. Le sumac s'estompera lentement dans la couleur et la tarte au fil du temps — utilisez le sumac le plus frais que vous pouvez trouver.",
      "visualCue": {
        "primaryTarget": "Un mélange lumineux et vif. Le sumac a une couleur rouge bourgogne profonde; le thym est un vert riche et sec; le sésame est d'or chaud. Pas de griffes, pas de coloration grise.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Za'atar goûte plat et principalement de thym — la note de sumac est absente ou muette, suggérant vieux ou de mauvaise qualité sumac.",
            "action": "Ajouter plus de sumac. La tarte du sumac est ce qui distingue za'atar du thym simple séché."
          },
          {
            "state": "Perfect",
            "description": "Équilibré : d'abord herbe-terre, puis note acide propre du sumac, finissant par du sésame et du sel chauds. La couleur est vive et fraîche.",
            "action": "Conserver dans un pot scellé."
          },
          {
            "state": "Overdone",
            "description": "Trop de sumac domine — le mélange est fortement goudronné et les notes de thym et de sésame sont enterrées.",
            "action": "Ajouter plus de thym séché et de graines de sésame pour diluer le sumac et rééquilibrer."
          }
        ]
      },
      "feelCue": "Verser une petite piscine d'huile d'olive et tremper un morceau de pain frais dans le za'atar avant de tremper dans l'huile — le mélange devrait enrober le pain dans une fine couche parfumée qui rend le goût du pain vivant."
    }
  ]
};
