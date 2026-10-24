export default {
  "repoId": "master_egyptian_koshari_001",
  "parentRepoId": null,
  "slug": "koshari",
  "author": "ForkRecipe Kitchen",
  "title": "Kashari",
  "description": "La grande nourriture de rue de l'Égypte était rassemblée en couches — lentilles, riz et petites pâtes dans une base, noyée dans une sauce de tomate épicée ardente, enterrée sous des oignons frits croustillants, et aiguisée avec une vinaigrette ail-vine — chaotique, cacophonique et totalement irrésistible.",
  "cuisine": "Égyptienne",
  "culture": "Égyptienne",
  "category": "grains",
  "tags": [
    "végétalien",
    "Égyptienne",
    "Produits de la rue",
    "lentilles",
    "riz",
    "pâtes"
  ],
  "difficulty": 2,
  "activeTime": "50 min",
  "totalTime": "1 hour 30 min",
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
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Lentilles brunes, rincées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "lentilles vertes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Macaronis ou ditalini d'ormeaux",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "pâtes de petite coquille"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Grand oignons jaunes, tranchés finement",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile neutre (divisée)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Tomates en conserve concassées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Poivre de Cayenne",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de chili"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Liquid",
      "name": "Stocks d'eau ou de légumes",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_02",
        "ing_13"
      ],
      "outputState": "cooked_lentils",
      "instructions": "Placer les lentilles dans une casserole, couvrir d'eau, porter à ébullition et cuire pendant 20 minutes jusqu'à ce qu'elles soient complètement tendres mais pas musquées. Égoutter et assaisonner légèrement avec du sel. Mettez de côté.",
      "visualCue": {
        "primaryTarget": "Plump, lentilles brunes entièrement cuites qui tiennent leur forme. Pas de centres crayeux, pas de grains fendus ou dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centre en croûte ou en croquant quand mordu.",
            "action": "Cuire encore 5 à 8 minutes."
          },
          {
            "state": "Perfect",
            "description": "Complètement tendre, forme entièrement retenue. Presse facilement entre les doigts à une pâte lisse.",
            "action": "Égoutter et assaisonner légèrement."
          },
          {
            "state": "Overdone",
            "description": "Les lentilles se sont effondrées dans une soupe épaisse.",
            "action": "Drainez soigneusement; ils peuvent encore être utilisés mais la base kochari sera moins distincte."
          }
        ]
      },
      "feelCue": "Appuyez sur une lentille entre le pouce et l'index — elle devrait s'effondrer instantanément dans un frottis lisse, semblable à une pâte, sans résistance granulaire. C'est une lentille bien cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_13"
      ],
      "outputState": "cooked_rice",
      "instructions": "Rincer le riz jusqu'à ce que l'eau coule. Mélanger avec de l'eau dans un rapport 1:1,5 dans une casserole. Ajouter une pincée de sel et une cuillère à café d'huile. Porter à ébullition, couvrir, réduire à feu minimum et cuire de 15 à 18 minutes jusqu'à ce que le liquide soit complètement absorbé. Repos couvert 5 minutes.",
      "visualCue": {
        "primaryTarget": "Graines de riz blanc. Pas de liquide de mise en commun visible. Évents à vapeur lorsque le couvercle est levé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chalky, grains de riz fermes. Liquide encore visible.",
            "action": "Remplacer le couvercle et continuer pendant 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain se sépare et est moelleux. Propre et blanc. Les fourches se séparent facilement.",
            "action": "Réserver à découvert brièvement pour libérer la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entassés et collants. Certains ont ouvert.",
            "action": "Étaler sur un plateau pour refroidir et sécher légèrement avant d'utiliser."
          }
        ]
      },
      "feelCue": "Exécutez une fourchette à travers le riz — chaque grain doit se déplacer indépendamment, rebondissant contre les dents sans accroupir ni traîner."
    },
    {
      "nodeId": "step_3",
      "action": "Bouillir",
      "inputs": [
        "ing_03"
      ],
      "outputState": "cooked_pasta",
      "instructions": "Faire cuire les pâtes dans de l'eau bouillante généreusement salée jusqu'à ce que l'al dente passe au - dessus de la craie. Égoutter et jeter avec une petite bruine d'huile pour éviter les accroupissements. Mettez de côté.",
      "visualCue": {
        "primaryTarget": "Petits morceaux de pâtes uniformément cuits avec une légère fermeté à la morsure. Pas musclé, pas au centre blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centre crayeux blanc quand mordu.",
            "action": "Cuire encore 1-2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Tendeur, légère morsure, pas de centre blanc. Les pâtes tiennent leur forme.",
            "action": "Égoutter et huile légèrement."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes sont douces et musquées.",
            "action": "Utilisez rapidement; les pâtes musquées en koshari ne sont pas idéales mais acceptables — les textures sont déjà mélangées."
          }
        ]
      },
      "feelCue": "Mordre un morceau de pâtes — vous devriez sentir une résistance très faible au centre, puis un rendement propre et tendre. Cette petite résistance est al dente."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "crispy_fried_onions",
      "instructions": "Chauffer une quantité généreuse d'huile dans une casserole large à feu moyen-vif. Ajouter tous les oignons tranchés et faire frire, en remuant fréquemment, pendant 20 à 25 minutes, jusqu'à ce que les oignons soient profondément dorés, éparpillés et croustillants. Retirer avec une cuillère à fente dans une assiette en papier doublée de serviette. Assaisonner de sel immédiatement. Les oignons croqueront plus loin quand ils refroidiront.",
      "visualCue": {
        "primaryTarget": "Acajou foncé, anneaux et brins d'oignon croustillants. Suspendu à environ un cinquième de leur volume original. Certains bouts presque brûlés sont souhaitables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Doré, doux, toujours boiteux. Pas encore croustillant.",
            "action": "Continuez à frire: les oignons kashari doivent être croustillants, non caramélisés dans le style mujaddara."
          },
          {
            "state": "Perfect",
            "description": "Brun foncé avec des bords très croustillants. Croquer audible lorsqu'il est manipulé. Profondément salé et légèrement amer.",
            "action": "Retirer et assaisonner immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Uniquement noir et acride.",
            "action": "Jeter et redémarrer — les oignons brûlés sont trop amers pour servir de garniture."
          }
        ]
      },
      "feelCue": "Soulevez une pincée d'oignons frits et écoutez — ils devraient craquer audiquement. Lâche-en un sur le comptoir : il devrait taper, pas toud. Si ça tord, c'est encore doux."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "spiced_tomato_sauce",
      "instructions": "Dans la même casserole utilisée pour les oignons, faire revenir l'ail dans le reste de l'huile pendant 30 secondes à feu moyen jusqu'à ce qu'il soit parfumé. Ajouter le cumin, la coriandre et la cayenne et remuer pendant 30 secondes. Ajouter les tomates écrasées, le vinaigre et le sel. Laisser mijoter 15 à 20 minutes jusqu'à ce que la sauce s'épaississe et que l'huile se sépare de la surface.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique profonde. Assez épais pour enrober une cuillère. Huile visible comme une couche chatoyante sur le dessus. Arôme de vinaigre pointu équilibré par la douceur tomate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une sauce fine et aqueuse. Sens cru et acide.",
            "action": "Laisser mijoter à découvert 5-10 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Épais, riche, rouge brique. Cuillère en manteau. Epicé, salé, agréablement aiguisé.",
            "action": "Goûtez et ajustez le sel et le vinaigre avant de les assembler."
          },
          {
            "state": "Overdone",
            "description": "Très épais, en pâte, foncé. Se tenir à la poêle.",
            "action": "Ajouter un jet d'eau et remuer pour se détendre."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée à la sauce — elle devrait vous frapper immédiatement de chaleur et d'acide, puis laisser place à la tomate profonde et à la chaleur du cumin. Il devrait goûter légèrement agressif à lui seul, car il est destiné à assaisonner la base douce en dessous."
    },
    {
      "nodeId": "step_6",
      "action": "Assemblage",
      "inputs": [
        "cooked_lentils",
        "cooked_rice",
        "cooked_pasta",
        "crispy_fried_onions",
        "spiced_tomato_sauce"
      ],
      "outputState": "finished_koshari",
      "instructions": "Dans des bols individuels ou dans un grand plat de service : déposer le riz et les lentilles ensemble comme base. Ajouter les pâtes sur le dessus. Déposer généreusement la sauce tomate sur tout. Couronne avec un énorme monticule d'oignons frits croustillants. Servir la sauce tomate supplémentaire et un petit plat de vinaigre blanc sur le côté pour des ajustements individuels. Mangez immédiatement — les oignons croustillants adoucissent rapidement une fois que la sauce les touche.",
      "visualCue": {
        "primaryTarget": "Un bol d'abondance chaotique : grains blancs et bruns à la base, sauce rouge inondant sur eux, et une couronne d'oignon brun foncé spectaculaire. Vivant et coloré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bol semble sec — sauce insuffisante. Les saveurs ne s'uniront pas sans.",
            "action": "Ajouter plus de sauce tomate généreusement."
          },
          {
            "state": "Perfect",
            "description": "Sauce trempée dans les grains. Des oignons croustillants offrant un contraste textural. L'odeur est complexe : cumin, tomate, vinaigre et oignon caramel tout à la fois.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le bol est trop long: les oignons sont boiteux et saupoudrés de sauce. Pas de crise.",
            "action": "Éparpiller les oignons croustillants frais d'un lot réservé sur le dessus."
          }
        ]
      },
      "feelCue": "Une cuillère correctement assemblée doit avoir au moins trois textures: le don doux du riz et des lentilles, la résistance des pâtes al dente, et la façon croquante d'un oignon frit. Chaque morsure devrait être une combinaison différente."
    }
  ]
};
