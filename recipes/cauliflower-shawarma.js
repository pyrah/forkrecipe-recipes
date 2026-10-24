export default {
  "repoId": "master_levantine_cauliflower_shawarma_001",
  "parentRepoId": null,
  "slug": "cauliflower-shawarma",
  "author": "ForkRecipe Kitchen",
  "title": "Choux-fleurs Shawarma",
  "description": "Une tête entière de chou-fleur laquée dans des épices chaudes et rôtie jusqu'à ce que les fleurs caramélisent à une ambre crépitante — croquante où exposée, donnant et fumé au cœur.",
  "cuisine": "Levantine",
  "culture": "Levantine",
  "category": "vegetables",
  "tags": [
    "lévantine",
    "chou-fleur",
    "végétalien",
    "grillés",
    "shawarma-spice"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 987,
  "forks": 128,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-01",
  "updatedAt": "2025-08-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux-fleurs, coupés en grandes fleurs",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "brocoli",
        "Roumanie"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Mélange d'épices de Shawarma (cumin, coriandre, curcuma, paprika fumé, cannelle, tousspices)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "C'est pas vrai."
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron, fraîchement pressé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Persil frais à feuilles plates, approximativement haché",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Coriandre fraîche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "shawarma_paste",
      "instructions": "Dans un grand bol, fouetter l'huile d'olive, mélanger les épices shawarma et saler dans une pâte épaisse et parfumée. L'huile doit être entièrement absorbée par les épices — pas de séparation. Cette pâte a besoin d'enrober chaque fleuron généreusement, alors assurez-vous que la consistance est suffisamment épaisse pour s'accrocher plutôt que de goutter.",
      "visualCue": {
        "primaryTarget": "Une pâte uniformément orange-or sans piscine d'huile assise sur le dessus. Les épices sont entièrement dispersées et le mélange a une consistance en pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sont encore poudreuses dans les poches et l'huile est séparée sur le dessus. Le mélange semble strié.",
            "action": "Plus vigoureusement. L'huile a besoin de temps pour hydrater complètement les épices."
          },
          {
            "state": "Perfect",
            "description": "Doux, épais, pâte d'orange uniforme. Toutes les épices sont entièrement incorporées et le mélange se maintient sur une cuillère sans goutte à goutte.",
            "action": "Ajouter le chou-fleur et mélanger pour enrober."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été trop mélangée et commence à se séparer à nouveau, l'air gras.",
            "action": "Procéder — le mélange excessif de la marinade ne lui nuit pas. La pâte enrobera toujours les fleurs."
          }
        ]
      },
      "feelCue": "La pâte doit sentir intensément le cumin grillé et la fumée — si elle sent seulement de la poudre crue, fleurir les épices dans l'huile dans une petite casserole pendant 30 secondes d'abord."
    },
    {
      "nodeId": "step_2",
      "action": "Manteau et repos",
      "inputs": [
        "shawarma_paste",
        "ing_01"
      ],
      "outputState": "marinated_cauliflower",
      "instructions": "Ajouter les fleurs de chou-fleur dans le bol de pâte et mélanger soigneusement, en utilisant vos mains pour travailler la pâte dans chaque crevasse. Plus la surface est couverte, plus vous obtiendrez de caramélisation. Laisser reposer le chou-fleur dans la marinade pendant au moins 10 minutes pendant que le four préchauffe à 220°C (425°F).",
      "visualCue": {
        "primaryTarget": "Chaque fleur est uniformément recouverte de pâte d'orange profonde. Aucun chou-fleur blanc n'est visible. La surface semble mate et presque veloutée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes taches de chou-fleur blanc visibles. La pâte est assise à la surface plutôt que travaillée.",
            "action": "Continuez à masser avec vos mains — les doigts atteignent là où les cuillères ne peuvent pas."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, même couche de pâte sur chaque surface. Les fleurs ont l'air d'or orange mat. La pâte a commencé à absorber dans les faces coupées.",
            "action": "Étaler sur une plaque de cuisson et rôtir."
          },
          {
            "state": "Overdone",
            "description": "Le chou-fleur a été trop manipulé et certains fleurons commencent à se briser.",
            "action": "Passez à la torréfaction: les petites pièces caramélisent plus rapidement et deviennent croustillantes."
          }
        ]
      },
      "feelCue": "Chaque fleuron doit se sentir uniformément léché et légèrement collant sous vos doigts — si vous pouvez vous sentir sec, les taches rugueuses, remuer à nouveau."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "marinated_cauliflower"
      ],
      "outputState": "roasted_cauliflower",
      "instructions": "Étendre les fleurs enrobées en une seule couche sur une grande plaque de cuisson, en les coupant si possible. Faire cuire à 220°C pendant 25-30 minutes, sans remuer pendant les 20 premières minutes. La chaleur élevée et le calme sont ce qui crée la croûte caramélisée profonde. Après 20 minutes, vérifiez et retournez les pièces très sombres en dessous.",
      "visualCue": {
        "primaryTarget": "Les fleurs sont profondément caramélisées sur les faces coupées — ambrées foncées aux bords carbonisés — alors que l'intérieur est tendre et en vapeur lorsqu'il est percé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fleurs sont douces mais jaune pâle-orange. Pas de croûte caramélisée. Ils semblent cuits à la vapeur plutôt que rôtis.",
            "action": "Retourner au four pendant 10 minutes. Le four peut avoir besoin de plus de temps pour atteindre la température — vérifier avec un thermomètre."
          },
          {
            "state": "Perfect",
            "description": "Croûte ambrée profonde sur les faces coupées, avec quelques bords carbonisés. Le chou-fleur est tendre lorsqu'il est percé avec un couteau, mais il conserve sa forme.",
            "action": "Retirer du four et finir avec du jus de citron et du persil."
          },
          {
            "state": "Overdone",
            "description": "Beaucoup de fleurets ont noirci et les épices sentent acride. Les centres sont très doux et commencent à s'effondrer.",
            "action": "Supprimer immédiatement. Les morceaux carbonisés peuvent être parés — la saveur sera plus amère et plus fumée."
          }
        ]
      },
      "feelCue": "Une fourche devrait glisser dans la partie la plus épaisse avec presque aucune résistance, comme pousser dans le beurre mou — mais l'extérieur devrait avoir une légère croûte qui donne une faible croûte quand tapoté."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et servir",
      "inputs": [
        "roasted_cauliflower",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_shawarma",
      "instructions": "Transférer immédiatement le chou-fleur rôti dans un plateau de service. Presser le jus de citron frais sur le dessus tout en étant encore chaud — l'acide s'étourdira au contact et soulèvera les épices caramélisées. Scatter avec du persil à feuilles plates haché. Servir immédiatement lorsque la croûte s'adoucit.",
      "visualCue": {
        "primaryTarget": "Collant des fleurs ambres sur le plateau, flanqué de persil vert vif, avec des spores de vapeur toujours en hausse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou-fleur semble encore sec et terne, sans éclat de citron.",
            "action": "Ajouter plus de jus de citron — l'acide est le pont de saveur qui relie l'épice à la caramélisation sucrée."
          },
          {
            "state": "Perfect",
            "description": "Les fleurs brillent du citron, le persil est vert vif et frais. La vapeur monte encore du chou-fleur chaud.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le chou-fleur est resté trop longtemps, la croûte s'est adoucie et le persil est flétri à vert foncé.",
            "action": "La saveur est encore bonne. La prochaine fois, assiette à la dernière seconde — ce plat n'attend pas."
          }
        ]
      },
      "feelCue": "Le citron qui frappe la surface épicée chaude devrait produire un sifflement bref et parfumé et une floraison de vapeur d'agrumes – ce moment est le pic d'arôme du plat."
    }
  ]
};
