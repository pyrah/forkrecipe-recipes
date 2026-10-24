export default {
  "repoId": "master_japanese_miso_glazed_black_cod_001",
  "parentRepoId": null,
  "slug": "miso-glazed-black-cod",
  "author": "ForkRecipe Kitchen",
  "title": "Miso-Glace de morue noire",
  "description": "La préparation emblématique de Nobu : filets de poissons-sables submergés de miso blanc doux, saké et mirin pendant deux à trois jours jusqu'à ce que la glaçure devienne une partie du poisson, puis grillés à un éclat caramélisé et laqué qui se brise doucement au toucher d'une fourchette.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "poissons",
    "Japonais",
    "miso",
    "grillés",
    "umami",
    "Nobu",
    "poissons-sables"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "3 days (marinade)",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de morue noire (poissons sablés), avec peau, épinoches enlevées",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "bar de mer",
        "saumon"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Miso blanc (shiro miso)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune doux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "2 c. à thé de sucre dissous dans 60 ml de saké"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer (pour les poissons à tartiner sec)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chauffer",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "simmered_base",
      "instructions": "Mélanger le saké, le mirin et le sucre dans une petite casserole à feu moyen. Porter à mijoter doucement et cuire 2-3 minutes, en remuant, jusqu'à ce que le sucre se dissout et que l'alcool se réchauffe — l'odeur de bouillie brute se rafraîchira à un arôme doux et doux. Ne pas faire bouillir vigoureusement. Retirer du feu et laisser refroidir complètement à la température ambiante avant d'ajouter le miso.",
      "visualCue": {
        "primaryTarget": "Un liquide ambre mince et pâle qui enrobe peu une cuillère. Le sucre est complètement dissous — pas de granules visibles lorsqu'il est incliné dans la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'alcool brut sent toujours vif et mordant. Les granules de sucre sont visibles lorsque vous inclinez la casserole.",
            "action": "Continuer à mijoter et à remuer encore une minute. Réduire la chaleur si elle menace de bouillir dur."
          },
          {
            "state": "Perfect",
            "description": "Le liquide sent doux et peu vineux, comme le vin chaud du dessert. C'est clair. Assez cool pour toucher.",
            "action": "Fouetter dans le miso de la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a diminué de plus d'un tiers et a commencé à caraméliser, s'assombrissant à l'ambre.",
            "action": "Ajouter une touche de saké ou d'eau pour se détendre, bien remuer et retirer de la chaleur. La saveur est plus concentrée mais toujours bonne."
          }
        ]
      },
      "feelCue": "Le liquide doit se sentir légèrement plus visqueux que l'eau contre le bout des doigts — miel chaud-mince, pas sirupeux."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "simmered_base",
        "ing_02"
      ],
      "outputState": "miso_marinade",
      "instructions": "Ajouter le miso blanc à la base de saké-mirin refroidi et fouetter vigoureusement jusqu'à ce que la pâte soit complètement dissoute et que le mélange soit uniformément lisse et crémeux. Il ne devrait pas y avoir de morceaux de miso visible. La marinade finie est sucrée-salée, intensément savoureuse, et l'ivoire pâle de couleur. Laisser refroidir complètement avant utilisation.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ivoire lisse, crémeuse et pâle sans morceaux de miso plus foncés. Il sort un fouet dans un ruban lent et régulier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de miso non dissout visible. Le mélange est grumelé ou de couleur inégale.",
            "action": "Continuez à fouetter. Si la pâte est très froide et raide, placez le bol sur de l'eau tiède brièvement en remuant."
          },
          {
            "state": "Perfect",
            "description": "ivoire uniformément pâle, soyeux et légèrement brillant. Sensation profonde de riz fermenté et de mirin doux.",
            "action": "Utiliser immédiatement pour enrober le poisson ou réfrigérer jusqu'à une semaine."
          },
          {
            "state": "Overdone",
            "description": "L'air a été incorporé et la marinade est mousseuse.",
            "action": "Réserver 5 minutes pour que la mousse s'abaisse avant de couvrir le poisson."
          }
        ]
      },
      "feelCue": "La marinade doit glisser entre les doigts comme un mince hummus — crémeux avec une faible résistance, et non pas gritty."
    },
    {
      "nodeId": "step_3",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_06",
        "miso_marinade"
      ],
      "outputState": "marinated_cod",
      "instructions": "Faites sécher les filets de morue avec des serviettes en papier, puis salez légèrement les deux côtés et laissez-les reposer 10 minutes. Le sel dégage de l'humidité de surface qui diluerait la marinade. Essuyer le sel et toute humidité exsudée. Étendre généreusement la marinade miso sur toutes les surfaces de chaque filet, en la travaillant doucement dans la chair. Placez dans un contenant scellé ou un sac à fermeture éclair, pressez l'air et réfrigérez pendant au moins 24 heures — 48-72 heures est idéal et transforme le poisson.",
      "visualCue": {
        "primaryTarget": "Chaque surface est uniformément recouverte d'une épaisse couche de miso ivoire-crème. Pas de taches nues. Le poisson est à peine visible sous le revêtement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 24 heures — la glaçure est assise à la surface sans avoir pénétré. L'arôme sera à la surface seulement.",
            "action": "Prolongez le temps de marinage. Ce plat récompense la patience: 2-3 jours, c'est le bon endroit."
          },
          {
            "state": "Perfect",
            "description": "Après 48-72 heures, le miso a teint le poisson doré et la chair se sent légèrement plus ferme. Le filet sent profondément la douceur fermentée.",
            "action": "Essuyez l'excès de marinade et passez au broyage."
          },
          {
            "state": "Overdone",
            "description": "Plus de 4 jours — le sel du miso a commencé à guérir le poisson de façon excessive. La chair est dense et légèrement caoutchouteuse.",
            "action": "La saveur est intensément salée et la texture sera plus ferme que idéale, mais toujours délicieuse. Essuyer propre et griller comme d'habitude."
          }
        ]
      },
      "feelCue": "Après 2-3 jours, les filets se sentent subtilement plus fermes sous le revêtement — le sel du miso a légèrement guéri la couche externe, lui donnant une qualité soyeuse et set."
    },
    {
      "nodeId": "step_4",
      "action": "Broil",
      "inputs": [
        "marinated_cod"
      ],
      "outputState": "broiled_black_cod",
      "instructions": "Préchauffer le griler à la chaleur maximale avec le support 10-12 cm (4-5 pouces) de l'élément. Essuyer l'excès de marinade de chaque filet avec vos doigts — une couche trop épaisse brûle avant que le poisson ne cuise. Placer les filets côté peau sur un plateau doublé de feuilles. Faire griller 8-12 minutes en regardant constamment. La glaçure va buller, caraméliser, et transformer une ambre profonde en acajou en patchs. Le poisson est fait quand il est opaque partout et flocons facilement avec une fourchette au point le plus épais.",
      "visualCue": {
        "primaryTarget": "La glaçure est caramélisée en ambre profond, presque acajou aux bords, avec un éclat brillant qui attrape la lumière comme la laque. La chair en dessous est de l'ivoire opaque et se sépare en grands flocons brillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est encore pâle et mate — la réaction de Maillard a à peine commencé. Le centre du filet résiste à la fourchette.",
            "action": "Brûlez encore 2-3 minutes. Si la glaçure est coloration plus rapide que le poisson est la cuisson, baissez la grille une position."
          },
          {
            "state": "Perfect",
            "description": "La glace est jaune foncé avec des taches carbonisées aux points les plus hauts. Flesh s'éclabousse dans de grands morceaux humides et brillants avec la translucidité la plus faible au centre.",
            "action": "Retirer immédiatement et servir sans délai."
          },
          {
            "state": "Overdone",
            "description": "La glace a noirci et sent l'acride. La chair est sèche et se sépare en petits flocons serrés plutôt qu'en grands oreillers.",
            "action": "Gratter délicatement la croûte la plus foncée. La nature riche en huile de poisson de sable signifie que l'intérieur est plus indulgent que les poissons plus maigres."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la partie la plus épaisse du filet avec un bout de doigt — il devrait céder comme du beurre doux, donnant dans des plans distincts de chair plutôt que de presser à une masse uniforme."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "broiled_black_cod"
      ],
      "outputState": "finished_miso_cod",
      "instructions": "Servir immédiatement sur des assiettes chaudes. Le poisson n'a besoin de rien au-delà de lui, bien qu'un petit monticule de gingembre mariné et quelques tiges de broccolini blanchi complètent l'assiette. Si le filet colle à la feuille, glissez une fine spatule entre la peau et la feuille — la peau adhère parfois. Servir la peau vers le bas et manger la glaçure caramélisée d'abord — c'est la couronne du plat.",
      "visualCue": {
        "primaryTarget": "Un filet de laque ambre profonde sur la chair d'ivoire, avec les plans distincts de sablefish floc visible au bord où il a été délicatement séparé. La vapeur s'élève doucement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson a refroidi sur le plateau et la glaçure s'est raidie sur un film mat.",
            "action": "Flash sous le grilleur pendant 60 secondes pour réchauffer et relancer le brillant."
          },
          {
            "state": "Perfect",
            "description": "La glace est brillante et fondue sur les bords. Le poisson libère de la vapeur quand la fourche la sépare. L'assiette est chaude.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le poisson est resté trop longtemps et a séché. La glaçure a été entièrement réglée et a perdu son éclat.",
            "action": "Un pinceau de mirin chaud avec une goutte de soja, peint avant de servir, restaure un peu de brillant."
          }
        ]
      },
      "feelCue": "Lorsque la fourche glisse dans le filet, elle ne doit rencontrer presque aucune résistance: la chair de poisson-sable riche en huile donne comme du beurre froid, se séparant en couches translucides et produisant."
    }
  ]
};
