export default {
  "repoId": "master_american_pineapple_upside_down_cake_001",
  "parentRepoId": null,
  "slug": "pineapple-upside-down-cake",
  "author": "ForkRecipe Kitchen",
  "title": "Cake à l'envers d'ananas",
  "description": "Une éponge dorée cuite sur une couche brillante d'ananas caramélisés et de sucre brun, puis inversée pour révéler une garniture laquée et brillante qui sent le caramel et les fruits tropicaux.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "desserts",
  "tags": [
    "américains",
    "ananas",
    "gâteau",
    "Caramel",
    "dessert"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 1124,
  "forks": 138,
  "contributors": 16,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-09",
  "updatedAt": "2025-04-25",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Anneaux d'ananas frais ou en conserve",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "tranches de mangue",
        "moitiés de pêche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun foncé (pour base de caramel)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé (pour la base de caramel)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Farine pure (toute destination)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucres castrés ou granulés",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Oeufs, à température ambiante",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé, ramolli (pour la pâte à éponge)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construire une base de caramel",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "caramel_base",
      "instructions": "Préchauffer le four à 175°C (350°F). Placez une poêle de 24 cm ou une boîte de gâteau ronde directement sur la cuisinière à feu moyen. Ajouter le beurre et laisser fondre. Ajouter la cassonade foncée et remuer brièvement pour la combiner, puis laisser reposer pendant 2 minutes jusqu'à ce qu'elle s'assombrisse légèrement. Le caramel n'a pas besoin d'être entièrement fabriqué à ce stade — il finira au four — mais le beurre et le sucre doivent être fondus et parfumés. Retirer du feu.",
      "visualCue": {
        "primaryTarget": "Un mélange noir, brillant et bouillonnant de beurre et de sucre brun couvrant la base de la poêle. Il sent le caramel profond avec un soupçon d'amertume.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre et le sucre se sont à peine combinés — encore sablonneux et pâle.",
            "action": "Mélanger brièvement et continuer le chauffage pendant 1 minute. Le mélange doit être complètement fondu et commencer à buller avant d'ajouter l'ananas."
          },
          {
            "state": "Perfect",
            "description": "Noir, brillant et bouillonnant. L'arôme de café remplit la cuisine. Le mélange est uniforme sans cristaux de sucre visibles.",
            "action": "Retirer du feu et arranger immédiatement les anneaux d'ananas."
          },
          {
            "state": "Overdone",
            "description": "Caramel est très sombre et sent légèrement brûlé. Il commence à se séparer et à paraître huileux.",
            "action": "Retirer immédiatement du feu. Si elle sent l'acride, jetez - la et recommencez - le caramel brûlé amer dominera tout le gâteau."
          }
        ]
      },
      "feelCue": "À ce stade, le caramel doit sentir la sauce chaude au caramel, profondément sucrée avec un léger bord d'amertume. Si elle sent principalement sucrée et beurrée, donnez-lui encore 30 secondes de chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Disposer les fruits",
      "inputs": [
        "caramel_base",
        "ing_01"
      ],
      "outputState": "decorated_base",
      "instructions": "Placez les anneaux d'ananas sur le caramel chaud dans la poêle, en les installant correctement — l'un au centre et le plus grand nombre qui s'adaptera autour du bord sans se chevaucher. Appuyez doucement sur le caramel. Si vous utilisez de l'ananas en conserve, faites d'abord bien sécher les anneaux; l'excès de jus arrosera le caramel et empêchera les fruits de brunir correctement. Placer une cerise maraschino ou une cerise séchée au centre de chaque anneau si désiré.",
      "visualCue": {
        "primaryTarget": "Les ananas sont plats contre la base du caramel, sans discontinuité entre eux. Le caramel est visible aux bords et entre les anneaux. Les anneaux sont légèrement dorés par la chaleur du caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les anneaux sont assis lâchement sur le dessus et le caramel autour d'eux est encore très fluide et se sépare.",
            "action": "Appuyez plus fermement sur les anneaux. Les anneaux mouillés flottent aussi, les patient plus sec et les remplacent."
          },
          {
            "state": "Perfect",
            "description": "Les anneaux sont rincés avec la poêle, le caramel s'est légèrement relevé autour de leurs bords. L'arrangement semble soigné et les anneaux ont un léger brillant du caramel.",
            "action": "Verser la pâte à éponge immédiatement et uniformément sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Le caramel a durci tout en arrangeant les fruits et les anneaux sont assis sur un disque de caramel solide.",
            "action": "Chauffer très doucement la base de la poêle pendant 30 secondes pour adoucir. Procéder — les fruits caraméliseront encore magnifiquement dans le four."
          }
        ]
      },
      "feelCue": "Lorsqu'ils sont pressés doucement, les anneaux d'ananas doivent avoir une légère résistance, non pas à la source des fruits en conserve froids, mais à un contact rincé avec le caramel sous eux."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger la pâte",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_03"
      ],
      "outputState": "cake_batter",
      "instructions": "Dans un bol, battre le beurre ramolli et le sucre de roulette avec un mélangeur électrique pendant 3 minutes jusqu'à ce qu'il soit pâle et moelleux. Ajouter les œufs un à la fois, battant bien après chaque ajout. Plongez dans la farine et la poudre de cuisson et pliez jusqu'à ce qu'ils se combinent — quelques tours avec une spatule plutôt que de battre vigoureusement. La pâte doit être lisse, épaisse et tomber de la spatule dans des rubans lents. Un petit jet de lait ou de jus d'ananas de l'étain peut le desserrer à la bonne consistance.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle et crémeuse qui tombe d'une cuillère ou d'une spatule en rubans épais et lents. Pas de stries de farine visibles. La batte est lisse et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre et le sucre ne sont pas entièrement crémeux — le mélange est dense et jaunâtre plutôt que pâle et moelleux. Des stries de farine visibles.",
            "action": "Battre le beurre et le sucre plus longtemps avant d'ajouter des œufs. Pliez la farine plus complètement."
          },
          {
            "state": "Perfect",
            "description": "Pale, pâte très lisse qui tombe dans des rubans épais. Un peu plus épais que la crème double — il tient un motif de figure-huit brièvement lorsqu'il est tombé.",
            "action": "Verser uniformément sur l'ananas et le caramel disposés."
          },
          {
            "state": "Overdone",
            "description": "La batterie a été trop mélangée et semble légèrement dense et collante. Ça ne tombe pas bien.",
            "action": "Continuez. La texture peut être légèrement moins tendre, mais la garniture caramélisée est l'étoile de ce gâteau."
          }
        ]
      },
      "feelCue": "Un ruban de pâte laissé tomber d'une cuillère devrait maintenir sa forme sur la surface pendant 2-3 secondes avant de se dissoudre lentement en arrière.Cette viscosité assure que l'éponge cuirea avec une miette uniforme et fine."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire et inverser",
      "inputs": [
        "cake_batter",
        "decorated_base"
      ],
      "outputState": "finished_cake",
      "instructions": "Verser soigneusement la pâte sur l'arrangement d'ananas, en s'étendant doucement sur les bords pour couvrir tout uniformément sans perturber l'arrangement de fruits. Cuire au four à 175°C pendant 30 à 35 minutes jusqu'à ce que l'éponge soit bien dorée et qu'une brochette insérée au centre ressorte propre. Retirer du four et reposer 5 minutes — pas plus. Exécutez un couteau autour du bord, placez une grande plaque de service sur le dessus, et inversez de façon décisive en un seul mouvement. Soulevez la poêle tout droit. N'importe quel caramel accroché à la poêle peut être gratté et versé sur le dessus.",
      "visualCue": {
        "primaryTarget": "Après inversion : une laque brillante de caramel ambre et des anneaux d'ananas dorés orientés vers le haut sur une base d'éponge foncée et magnifiquement colorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après inversion, le centre de l'éponge est coulé et à l'aspect brut. La pâte peut avoir partiellement adhéré à la poêle.",
            "action": "Récupérer avec la poêle et retourner au four pendant 10 minutes. Le caramel peut être réchauffé si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Un cercle parfait de caramel ambré brillant et des anneaux de fruits reposant sur une éponge dorée. Le caramel a mis une glaçure. Pas de taches brutes visibles.",
            "action": "Servir au chaud avec de la crème ou de la crème glacée."
          },
          {
            "state": "Overdone",
            "description": "Le caramel s'est durci jusqu'à un caramel sombre, presque fragile. Les bords de l'éponge sont très bruns et secs.",
            "action": "La saveur est encore bonne. Réchauffer les tranches brièvement au micro-ondes avant de servir, ou servir avec de la crème supplémentaire pour humidifier."
          }
        ]
      },
      "feelCue": "La période de repos de cinq minutes avant l'inversion est critique — le caramel doit se fixer légèrement à partir de son état d'ébullition. Si vous retournez immédiatement, il versera le gâteau; attendez trop longtemps et il se lie à la poêle."
    }
  ]
};
