export default {
  "repoId": "master_levantine_shakshuka_green_001",
  "parentRepoId": null,
  "slug": "shakshuka-green",
  "author": "ForkRecipe Kitchen",
  "title": "Shakshuka vert",
  "description": "Un enchevêtrement d'épinards flétris, de vergers et de tomatillos carbonisés s'effondre dans une sauce verte brillante, acide et profondément savore — puis les œufs sont nichés dans des poches et recouverts à mettre, leurs blancs à peine opaques tandis que les jaunes restent tremblants et liquides, attendant de se briser dans le vert.",
  "cuisine": "Levantine",
  "culture": "Israël",
  "category": "eggs",
  "tags": [
    "œufs",
    "Shakshuka",
    "épinards",
    "Benne",
    "tomatillo",
    "vert",
    "lévantine",
    "brunch",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
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
    "sour": 3,
    "bitter": 2,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tomatillos, décortiqués et coupés en deux",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomates vertes",
        "Salsa verde (jar, 200 g)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Petits épinards",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "épinards congelés (150 g, dégelés et pressés)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Fard suisse (tiges et feuilles séparées)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "feuilles de chou, tiges enlevées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 1,
      "defaultUnit": "medium",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés minces",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Jalapeño frais ou serrano, tranchés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Chili vert en conserve (2 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Fromage feta, émietté",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Fromage de chèvre",
        "labneh (dollops)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 0.25,
      "defaultUnit": "cup",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Liquid",
      "name": "Stock d'eau ou de légumes légers",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "charred_tomatillos",
      "instructions": "Couper les tomatillos et les déposer dans une poêle sèche et non graissée (le fer fondu est idéal) à feu vif. Ne remuez pas. Laissez-les charrer pendant 4-5 minutes jusqu'à ce que les surfaces coupées soient profondément cloquées et noires dans les taches, et que les peaux se soient adoucies et ridées. Les sucres à la surface coupée caramélisent et l'omble, transformant l'auresse brute, astringente de tomatillo en quelque chose de plus profond, légèrement sucré, et fumé. Lorsqu'un tomatillo se libère facilement de la casserole lorsqu'il est muni d'une spatule, il s'est carbonisé correctement. Transférez-les dans un bol — ils continueront à adoucir par la chaleur résiduelle. Les jus qui fuient dans le bol sont précieux : ajoutez-les à la sauce.",
      "visualCue": {
        "primaryTarget": "Les faces coupées sont noir et brun caramel foncé. Les peaux sont ridées et légèrement translucides. Les tomatillos se sont effondrés d'environ 30%.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les visages coupés sont à peine colorés — encore vert pâle-blanc. Les tomatillos sont encore fermes et sentent crus et herbacés.",
            "action": "Retournez à la poêle chaude et continuez le chargement à sec. La poêle doit être vraiment chaude — aucun étourdissement ne signifie pas assez chaud."
          },
          {
            "state": "Perfect",
            "description": "Les marques d'omble de caramel noir couvrent au moins 60% de chaque taille. Les tomatillos sont mous et sombres. L'odeur est douce, fumée et légèrement acide.",
            "action": "Transférer dans un bol et procéder immédiatement à la construction de la base de sauce."
          },
          {
            "state": "Overdone",
            "description": "Les tomatillos sont noirs partout et certains ont commencé à sécher. La chair à l'intérieur peut être string et sèche plutôt que juteuse.",
            "action": "Utilisez - les — la saveur d'omble sera toujours utile dans la sauce. Ajouter une cuillère à soupe supplémentaire d'eau pour compenser le jus perdu."
          }
        ]
      },
      "feelCue": "Les tomatillos bien carbonisés se sentent comme du gel très doux et chaud à travers les pinces — l'intérieur a entièrement cuit et la membrane est tout ce qui les retient ensemble. La poêle doit sentir le sucre brûlé et quelque chose de légèrement tropical."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "spiced_sofrito",
      "instructions": "Dans la même poêle (en laissant tout tomatillo-char – il ajoute de la saveur), chauffer l'huile d'olive à feu moyen. Ajouter l'oignon en dés et les tiges de bave (en morceaux de 1 cm) et cuire en remuant occasionnellement pendant 6 à 8 minutes jusqu'à ce que l'oignon soit doux, translucide et commence à devenir doré aux bords. Ajouter l'ail tranché et le jalapeño et cuire encore 2 minutes jusqu'à odorat. L'ail devrait devenir doré aux bords mais pas brun — une fois qu'il sent l'ail rôti plutôt que cru, vous êtes là. Ajoutez le cumin et la coriandre et remuez-les directement dans l'huile pendant 30 secondes, ce mélange sec les épices dans la graisse et intensifie leur parfum d'un ordre de grandeur. La casserole devrait sentir comme une cuisine marocaine.",
      "visualCue": {
        "primaryTarget": "Oignon doux et translucide aux bords légèrement caramélisés. L'ail est doré mais pas doré. Les épices ont obscurci de leur couleur crue et sentent chaud et grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et ferme. L'ail est frais. Les épices n'ont pas grillé — elles ont l'air sèches et crues dans l'huile.",
            "action": "Continuer la cuisson à feu moyen. En précipitant cette étape, la douceur de l'oignon ne se développe jamais, ce qui vous donne une base brute et pointue."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est entièrement tendre et commence à tourner l'ambre aux bords. L'ail est doré. Le cumin et la coriandre sentent chaud, grillé et légèrement sucré — une base riche et complexe.",
            "action": "Ajouter immédiatement les verts pour éviter que l'ail ne brûle."
          },
          {
            "state": "Overdone",
            "description": "L'ail est bruni et les épices sont foncées et acrides. La base sent amer.",
            "action": "Baissez immédiatement la chaleur et ajoutez les verts — ils refroidiront la poêle et arrêteront la combustion. L'amertume sera surtout masquée par le volume des verts."
          }
        ]
      },
      "feelCue": "Au bon moment, la base de l'oignon-ail-épice fait un étourdissement doux soutenu, non pas le craquement agressif de la chaleur élevée, pas le silence de la chaleur trop basse, mais un bruit de friture doux et stable qui sent profondément parfumé et doux."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "spiced_sofrito",
        "charred_tomatillos",
        "ing_02",
        "ing_03",
        "ing_13",
        "ing_14"
      ],
      "outputState": "green_sauce",
      "instructions": "Ajouter les tomatillos carbonisés (et tout leur jus) dans la poêle, les presser avec le dos d'une cuillère pour les casser en morceaux bruts. Ajouter les feuilles de bard (gros) et les épinards de bébé – la poêle sera incroyablement pleine. Ajouter l'eau et une pincée généreuse de sel. Couvrir et cuire à feu moyen pendant 4-5 minutes jusqu'à ce que les verts se soient complètement flétris et effondrés. Retirer le couvercle et remuer tout ensemble, en brisant les tomatillos plus loin dans la sauce. Cuire à découvert pendant 3-4 minutes, en remuant occasionnellement, jusqu'à ce que la sauce s'épaississe légèrement et que les verts s'intègrent complètement. Goûtez et assaisonnez généreusement — les verts peuvent absorber une quantité surprenante de sel. La sauce doit être vert vif, légèrement molle, agréablement aigre du tomatillo, et profondément salée.",
      "visualCue": {
        "primaryTarget": "Une sauce verte vibrante et texturée, pas une purée lisse, mais aussi des tas de légumes séparés. Les morceaux de tomatillo sont visibles mais doux. Le verger et les épinards sont complètement effondrés et intégrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts sont encore vert vif et tiennent leur forme. Les tomatillos sont toujours en gros morceaux. La sauce est très liquide, elle n'a pas été réduite ou unifiée.",
            "action": "Continuer la cuisson à découvert pendant encore 3-4 minutes, en remuant fréquemment pour aider les verts à se décomposer."
          },
          {
            "state": "Perfect",
            "description": "Les verts sont entièrement flétris et vert olive. La sauce est assez épaisse qu'une cuillère traînée dans le fond laisse un sentier qui se ferme lentement. Les morceaux de tomatillo sont doux et ont surtout fondu dans la sauce.",
            "action": "Faire des puits dans la sauce pour les œufs."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est séchée — elle colle à la poêle et les verts sont passés de vifs à kaki-drab. Le liquide tomatillo s'est évaporé.",
            "action": "Ajouter 3-4 cuillerées à soupe d'eau ou de bouillon et racler la poêle pour la réhumidifier. La couleur aura terned mais la saveur s'intensifie lorsqu'elle est concentrée."
          }
        ]
      },
      "feelCue": "La sauce verte au bon stade fait une bulle lente et paresseuse au centre de la poêle — pas une bouillie rapide, mais un léger tas qui sent simultanément le tomatillo carbonisé, les épinards flétris et le cumin grillé."
    },
    {
      "nodeId": "step_4",
      "action": "Pocher",
      "inputs": [
        "green_sauce",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_shakshuka",
      "instructions": "En utilisant l'arrière d'une grande cuillère, faire six puits peu profonds dans la sauce verte, en appuyant vers le bas de la poêle. Coupez d'abord un œuf dans une petite tasse, ce qui vous donne le contrôle et empêche les fragments de coquille. Faites glisser chaque oeuf de la tasse dans son puits. Dispersez le feta émietté autour des œufs et dans la sauce. Réduire le feu à faible, couvrir la poêle avec un couvercle ou une feuille et cuire 5-8 minutes, en vérifiant fréquemment. Les blancs doivent être simplement fixés — opaques et fermes lorsque vous appuyez sur le bord avec une cuillère — tandis que les jaunes restent visiblement liquides et tremblants. Retirer du feu pendant que les jaunes ont encore l'air sous la peau : la chaleur résiduelle continue de les cuire pendant 1-2 minutes après que la poêle soit sortie. Déposer la coriandre fraîche sur le dessus et servir directement de la poêle avec du pain.",
      "visualCue": {
        "primaryTarget": "Six œufs nichés dans la sauce verte, blancs entièrement opaques et fixés aux bords, jaunes encore visiblement bombés et liquides sous un mince film blanc. Le feta s'est adouci et certains ont fondu dans la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs sont toujours translucides et gigotent lorsque la poêle est légèrement déplacée. Le jaune est complètement nu et entièrement liquide sous aucun film.",
            "action": "Couvrir et cuire encore 2-3 minutes sur le feu le plus bas possible. Vérifiez toutes les 60 secondes."
          },
          {
            "state": "Perfect",
            "description": "Les Blancs sont parfaitement fixés et opaques — pas de translucidité nulle part. Le jaune est encore visiblement bombé et liquide à l'intérieur mais a un mince film opaque sur sa surface. En appuyant très doucement avec un bout de doigt, il donne et agite.",
            "action": "Retirer immédiatement du feu. Garnir et servir dans les 3 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les jaunes sont plats et mats — ils ont été complètement fixés. Les blancs peuvent avoir développé une texture caoutchouteuse à partir de trop de chaleur.",
            "action": "Servir immédiatement — vous ne pouvez pas défaire un œuf. La prochaine fois : regardez la casserole constamment et tirez-la 30 secondes avant de penser qu'elle est prête."
          }
        ]
      },
      "feelCue": "Un œuf de shakshuka parfaitement réglé, légèrement pressé à l'arrière d'une cuillère froide, devrait donner un tourbillon liquide subtil au jaune — comme appuyer sur un ballon d'eau ferme — tandis que le blanc résiste fermement sans donner du tout."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "finished_shakshuka",
        "ing_12"
      ],
      "outputState": "plated_shakshuka",
      "instructions": "Dispersez généreusement la coriandre fraîche sur la poêle finie – la chaleur de la shakshuka la flétrira légèrement au contact, libérant ainsi son parfum. Servir le shakshuka directement de la poêle à table, avec du pita chaud ou du pain croustillant pour déchirer et traîner dans la sauce. Le protocole pour manger: déchirer le pain, glisser à travers la sauce en capturant à la fois l'œuf vert et blanc, assurer la morsure finale a jaune. La shakshuka est de qualité maximale pendant environ 5 minutes après la sortie de la chaleur — l'œuf continue à cuire à partir de la chaleur résiduelle et ferme progressivement. Servir sans cérémonie.",
      "visualCue": {
        "primaryTarget": "La poêle est un paysage vivant : sauce vert olive profonde, six îles blanches brillantes de blanc d'oeuf, six jaunes d'or soleils, des miettes blanches de feta, et un confetti vert frais de coriandre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La garniture est absente ou appliquée avec parcimonie. La présentation visuelle est monochromatique — juste de la sauce verte et de l'œuf.",
            "action": "Ajoutez plus de coriandre. Ajoutez plus de feta. Ce plat est destiné à être généreux avec la garniture — il apporte la saveur et le contraste visuel également."
          },
          {
            "state": "Perfect",
            "description": "Un contraste vibrant entre le vert profond, le blanc, l'or et le vert frais. Le feta brille. Il sent le cumin et l'omble et la coriandre fraîche tout à la fois. Tu veux le manger avant d'avoir une assiette.",
            "action": "Apportez immédiatement la casserole à la table."
          },
          {
            "state": "Overdone",
            "description": "La coriandre a été ajoutée trop tôt et s'est flétrie brun. Les œufs sont prêts à raffermir les jaunes pendant que vous plaquiez.",
            "action": "Ajouter une nouvelle dispersion de coriandre et servir immédiatement indépendamment. La saveur est intacte."
          }
        ]
      },
      "feelCue": "La morsure finale de shakshuka vert — sauce, blanc d'œuf, jaune cassé et pain — doit se sentir simultanément chaud et liquide au centre (jaune), tendre mais résistant (blanc d'œuf), soyeux et acide (sauce), et croquant au bord (croûte de pain). La coriandre est la dernière chose que ton nez enregistre quand tu manges."
    }
  ]
};
