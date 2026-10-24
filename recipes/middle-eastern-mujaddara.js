export default {
  "repoId": "master_middleeastern_middleeasternmujaddara_001",
  "parentRepoId": null,
  "slug": "middle-eastern-mujaddara",
  "author": "ForkRecipe Kitchen",
  "title": "Mujaddara (Lentilles et riz à l'oignon croustillant)",
  "description": "Des lentilles brunes terriennes et du riz cuits ensemble jusqu'à ce qu'ils absorbent et partagent tout — finies avec une couronne d'oignons profondément caramélisés si croustillants qu'ils éclatent et si doux qu'ils goûtent du sucre brûlé.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "vegetables",
  "tags": [
    "légumes",
    "végétalien",
    "Sans gluten",
    "lentilles",
    "riz",
    "lévantine"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hour",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Lentilles brunes ou vertes, rincées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Lentilles de Puy (maintenez mieux la forme)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz blanc à grains longs (basmati), rincé",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "riz à grains courts (utiliser moins d'eau)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gros oignons jaunes, coupés en deux et tranchés finement",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "crispy_onions",
      "instructions": "Chauffer l'huile d'olive dans une grande poêle à fond lourd à feu moyen-élevé. Ajouter tous les oignons tranchés — la poêle sera très pleine. Cuire en remuant toutes les 3-4 minutes, pendant 35-45 minutes. Les oignons se rétréciront considérablement, libérant d'abord l'eau, puis brunissant lentement lorsque l'eau s'évaporera. Au cours des 10 dernières minutes, augmenter la chaleur et remuer plus fréquemment que les oignons caramélisent. Le but est profondément bruni, presque croustillant oignons qui sont doux et complexes. Retirer les deux tiers des oignons et réserver comme garniture. Laissez un tiers dans la casserole.",
      "visualCue": {
        "primaryTarget": "Oignons brun acajou profonds qui ont diminué à environ 20% de leur volume original. Certains sont croustillants aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 20 minutes, les oignons sont dorés et doux mais pas encore profondément colorés ou croustillants.",
            "action": "Continuez à cuisiner. Augmenter la chaleur dans les 10 dernières minutes. Les bords croustillants sont la signature du mujaddara."
          },
          {
            "state": "Perfect",
            "description": "Une acajou profonde. Certaines pièces sont vraiment croustillantes. Ils sentent l'oignon caramélisé avec un soupçon d'amertume agréable.",
            "action": "Enlever les deux tiers dans une assiette. Passez à la troisième."
          },
          {
            "state": "Overdone",
            "description": "Les oignons ont passé le caramel au noir brûlé. Une odeur amère et acride.",
            "action": "Jeter les pièces les plus sombres. Les oignons légèrement surcaramélisés sont encore bons — lancez un nouveau lot pour la garniture si nécessaire."
          }
        ]
      },
      "feelCue": "Les oignons entièrement caramélisés devraient se croquer légèrement lorsque vous pressez un entre vos doigts, comme une puce de pomme de terre très mince et légèrement soyeuse. Les bords les plus fins devraient être vraiment cassants."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "crispy_onions",
        "ing_01",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "cooked_lentil_base",
      "instructions": "Dans la même casserole avec le reste du tiers des oignons caramélisés, ajouter le cumin moulu, la coriandre et le toutspice. Remuer pendant 30 secondes. Ajouter les lentilles rincées et l'eau. Porter à ébullition, puis laisser mijoter. Cuire pendant 15 minutes jusqu'à ce que les lentilles soient partiellement tendres, mais qu'elles aient encore une légère morsure. Assaisonner généreusement de sel.",
      "visualCue": {
        "primaryTarget": "Lentilles qui ont gonflé et tourné de leur couleur brute à un brun-vert légèrement muté, tenant toujours leur forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 10 minutes les lentilles sont toujours crayeuses au centre quand mordues.",
            "action": "Continuez à mijoter. Ils finiront avec le riz."
          },
          {
            "state": "Perfect",
            "description": "Les lentilles ont une légère résistance lorsqu'elles sont mordues — tendres à l'extérieur, à peine cuites au centre. Ils ont besoin de 10-12 minutes de plus avec le riz.",
            "action": "Ajouter le riz rincé et procéder."
          },
          {
            "state": "Overdone",
            "description": "Les lentilles sont entièrement douces et certaines commencent à se briser.",
            "action": "Ajouter immédiatement le riz et l'eau. Les lentilles s'enfonceront dans le riz pendant la cuisson finale — encore délicieux, plus de consistance de porridge."
          }
        ]
      },
      "feelCue": "Mordre une lentille — elle devrait offrir une vraie résistance au centre, comme mordre un pois chiche ferme. C'est la cible avant l'entrée du riz."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "cooked_lentil_base",
        "ing_02"
      ],
      "outputState": "finished_mujaddara",
      "instructions": "Ajouter le riz basmati rincé aux lentilles partiellement cuites et mélanger. Vérifiez le niveau d'eau — il devrait y en avoir assez pour couvrir le mélange de 1 cm. Ajoutez un splash plus si nécessaire. Porter à ébullition, puis bien couvrir et réduire la chaleur au réglage le plus bas. Cuire 15 minutes. Ne levez pas le couvercle. Retirer du feu et laisser la vapeur couverte encore 10 minutes. Fluff avec une fourchette. Les lentilles et le riz doivent être cuits et avoir absorbé tout le liquide.",
      "visualCue": {
        "primaryTarget": "Des grains de riz séparés par des lentilles douces et intactes. Tout liquide absorbé. Pas de taches musquées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est toujours crayeux au centre. Certains liquides restent en bas.",
            "action": "Couvrir et cuire encore 5 minutes à feu très doux, puis cuire à la vapeur pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les grains de riz sont moelleux et séparés. Les lentilles sont douces dans l'ensemble. Le mélange sent le cumin et l'oignon caramélisé. Toute l'eau a été absorbée.",
            "action": "Fluff avec une fourchette et une plaque. Top avec des oignons caramélisés réservés."
          },
          {
            "state": "Overdone",
            "description": "Le fond a légèrement brûlé. Le riz est musqué.",
            "action": "Retirer immédiatement du feu. Placez une serviette de cuisine propre sous le couvercle pour absorber la vapeur pendant 5 minutes. La couche inférieure brûlée est un bonus — au Moyen-Orient elle s'appelle qalaya et est prisée."
          }
        ]
      },
      "feelCue": "Faites glisser une fourchette à travers le mujaddara fini — le riz doit se séparer proprement et non pas se taper. La texture doit être moelleuse et distincte, chaque grain et chaque lentilles indépendantes."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "finished_mujaddara",
        "crispy_onions"
      ],
      "outputState": "plated_mujaddara",
      "instructions": "Assortir le mujaddara dans un grand bol peu profond ou une plaque profonde. Pile les oignons caramélisés réservés sur le dessus — ne les remuez pas; le contraste de la base douce et épicée de riz et de lentilles avec la couronne d'oignon croustillante et douce est le plat. Servir avec du yogourt uni, une salade de tomates hachées et de concombre, et du pain plat chaud.",
      "visualCue": {
        "primaryTarget": "Un monticule de riz brun terreux et de lentilles couronnées d'oignons caramélisés sombres et presque écrasants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La garniture d'oignon est encore pâle ou la base du mujaddara semble humide.",
            "action": "Réchauffer la base si nécessaire. Les oignons peuvent être croustillés dans une casserole sèche pendant 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "La couronne des oignons doux et foncés contraste visuellement et texturalement avec la base douce et épicée. L'arôme est de cumin chaud et d'oignon caramélisé.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La garniture d'oignon a ramolli de la vapeur du mujaddara et n'est plus croustillante.",
            "action": "Répartir les oignons sur une plaque à cuisson et faire griller à 200°C pendant 5 minutes pour les ré-encrisser, puis les déposer."
          }
        ]
      },
      "feelCue": "Passez à travers les deux couches avec une cuillère à servir — vous devriez sentir la résistance des oignons croustillants, puis la douceur de production de la base de lentilles-riz. Le contraste est le point entier du plat."
    }
  ]
};
