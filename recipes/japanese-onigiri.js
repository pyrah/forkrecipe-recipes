export default {
  "repoId": "master_japanese_japaneseonigiri_001",
  "parentRepoId": null,
  "slug": "japanese-onigiri",
  "author": "ForkRecipe Kitchen",
  "title": "Japonais Onigiri",
  "description": "Le riz chaud et assaisonné est comprimé dans un triangle ferme, son nori salé crépitant extérieur à la première bouchée pour révéler un remplissage salé caché au centre — le parfait repas portable du Japon.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "grains",
  "tags": [
    "grains",
    "Sans gluten",
    "riz",
    "Japonais",
    "onigiri",
    "portable",
    "collation"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz japonais à grains courts (riz sushi)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Riz de Calrose"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 360,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour les mains et le riz)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Feuilles de nori, découpées en bandes",
      "ratioValue": 2,
      "defaultUnit": "sheets",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Umeboshi (plume pickled) ou mayo de thon",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de saumon salés",
        "Oies de morue assaisonnées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sauce soja (pour les mains mouillées, en option)",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "cooked_rice",
      "instructions": "Rincer le riz jusqu'à ce que l'eau soit presque claire (5–6 rinçages). Égoutter et laisser le riz sécher dans la casserole pendant 10 minutes — ce pré-repose ferme l'extérieur. Ajouter l'eau mesurée, couvrir soigneusement et porter à ébullition à feu vif. Dès que vous entendez l'ébullition, réduisez à la plus basse mijoter et faites cuire 12 minutes. Retirer du feu sans soulever le couvercle et la vapeur pendant 10 minutes. Le riz est prêt lorsque vous ouvrez le couvercle à une bouffée de vapeur sans eau visible à la surface.",
      "visualCue": {
        "primaryTarget": "Les grains sont brillants, entièrement cuits et légèrement collants, avec un parfum propre et doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains ont toujours un centre crayeux et dur. La surface est terne.",
            "action": "Récupérer et éteindre la vapeur pendant encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont plombés, brillants et s'accrochent lorsqu'ils sont pressés, mais les grains individuels sont encore distincts. Ça sent propre et doux.",
            "action": "Laisser refroidir légèrement jusqu'à ce qu'il soit juste assez chaud pour manipuler (pas chaud) avant de façonner."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont explosé et le riz est devenu très doux et collant. La couche inférieure sent légèrement brûlée.",
            "action": "Utiliser pour onigiri de toute façon — le riz trop cuit forme très bien, il sera juste plus dense."
          }
        ]
      },
      "feelCue": "Exécutez une pagaie de riz à travers le riz cuit du bas vers le haut - il devrait plier dans des rubans propres qui brillent à la vapeur et s'accrochent doucement sans être gommés."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "cooked_rice",
        "ing_03"
      ],
      "outputState": "seasoned_rice",
      "instructions": "Alors que le riz est encore chaud, le transformer en un grand bol plat à l'aide d'une pagaie de riz. Saupoudrer le sel uniformément sur la surface. Plier le riz à l'aide d'un mouvement de coupe et de repliage (sans remuer) pour distribuer le sel sans écraser les grains. Le ventilateur ou laisser refroidir à une température où vous pouvez le manipuler confortablement — juste au-dessus de la température du corps, autour de 40°C.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont uniformément distribués, brillants et légèrement séparés — pas d'entailles, pas de taches sèches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sel est inégalement distribué; certaines morsures seront molles, d'autres trop salées.",
            "action": "Plier plus de fois en utilisant le mouvement de coupe."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain brille légèrement et le riz a un goût assaisonné, légèrement salé et doux à la fois.",
            "action": "Formez immédiatement tout en restant chaud."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été agité de façon trop agressive et les grains se sont cassés et sont devenus du pâteux.",
            "action": "Procéder — la texture est légèrement compromise mais l'onigiri restera en forme."
          }
        ]
      },
      "feelCue": "Le riz chaud et assaisonné doit se sentir comme une argile doucement humide entre vos palmiers — donnant, mais avec le printemps, pas mouillé ou collant."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "seasoned_rice",
        "ing_05",
        "ing_04",
        "ing_06"
      ],
      "outputState": "finished_onigiri",
      "instructions": "Mouiller les deux palmiers avec de l'eau froide et frotter avec une pincée généreuse de sel — cela empêche de coller et ajoute de la saveur à l'extérieur. Prenez environ 120g de riz chaud et formez une boule lâche dans un palmier. Appuyez sur une indentation peu profonde au centre et placez votre remplissage (umeboshi, thon mayo, ou flocons de saumon) à l'intérieur. Fermez le riz autour de la garniture. Coupez les deux mains en forme de V et appuyez fermement sur les côtés tout en tournant, formant un triangle compact avec trois faces plates et trois crêtes. Enveloppez la base avec une bande de nori. Répéter pour le reste du riz et des garnitures.",
      "visualCue": {
        "primaryTarget": "Un triangle ferme et compact avec des faces plates, trois crêtes définies, et une bande de nori à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le triangle est lâche et s'effondre; le remplissage tombe quand il est ramassé. Le riz n'a pas assez comprimé.",
            "action": "Recompresser avec une pression de la paume plus ferme — 6–8 presses décisives, tournant 120 degrés entre chacune."
          },
          {
            "state": "Perfect",
            "description": "Onigiri tient fermement sa forme triangulaire lorsqu'il est ramassé, avec un léger rendement lorsqu'il est pressé. Nori adhère proprement. Le remplissage est centré et invisible.",
            "action": "Servir immédiatement ou envelopper soigneusement le produit en plastique pour plus tard."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été comprimé dans un bloc dur et dense sans légèreté. Le triangle est trop rigide et la texture du riz est dense.",
            "action": "Servir immédiatement — onigiri dense est encore délicieux, tout simplement moins élégant."
          }
        ]
      },
      "feelCue": "Un onigiri bien fait devrait se sentir comme une poignée de main ferme, solide et confiante, mais pas douloureusement dure. Il devrait céder légèrement lorsque vous pressez sans s'effondrer."
    }
  ]
};
