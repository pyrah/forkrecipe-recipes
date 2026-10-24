export default {
  "repoId": "master_chinese_braisedegplant_001",
  "parentRepoId": null,
  "slug": "chinese-braised-eggplant",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Aubergine braisée à l'ail cantonaise",
  "description": "Les morceaux d'aubergine frits jusqu'à ce que leurs centres soient soyeux et que leurs peaux soient brillantes, puis braisées dans une sauce à l'ail brillante et profondément salée qui s'accroche à chaque morceau comme la laque, le genre de plat qui fait disparaître le riz blanc uni.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "vegetables",
  "tags": [
    "végétalien",
    "Sans gluten",
    "aubergines",
    "Chinois",
    "braise",
    "Ail",
    "cantonais"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergines chinoises ou japonaises, coupées en bâtons de 5 cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Aubergines italiennes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre pour friture",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile de son de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Sauce de soja (tamari sans gluten)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Vin de riz ou sherry sec",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "eau avec une pincée de sucre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Matières végétales ou eau",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Farine de maïs dissoute dans l'eau (1:1)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "fléchée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Flacons de piment séché et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01"
      ],
      "outputState": "salted_eggplant",
      "instructions": "Jeter les bâtons d'aubergine avec une généreuse pincée de sel dans une calandre. Réglez l'évier pendant 20 minutes. L'aubergine libérera une humidité importante. Pat complètement sec avec des serviettes en papier avant la friture — aubergine humide absorbe trois fois plus d'huile.",
      "visualCue": {
        "primaryTarget": "La surface des aubergines après salage",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucune humidité visible à la surface — le temps de salage était trop court.",
            "action": "Pat sécher de toute façon et procéder; l'aubergine absorbera légèrement plus d'huile."
          },
          {
            "state": "Perfect",
            "description": "Des perles de liquide gris clair se sont formées sur les faces coupées et ont été recueillies dans la calandre. Les matraques se sont légèrement adoucies et ont perdu leur crunch rigide.",
            "action": "Pat très sec et passer immédiatement à l'huile chaude."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine est salée pendant plus de 45 minutes et commence à avoir l'air dégonflée et légèrement translucide — sur-extractible.",
            "action": "Sécher et poursuivre; la texture sera fine une fois cuite."
          }
        ]
      },
      "feelCue": "Un bâton d'aubergine bien salé se sent nettement plus léger dans la main que lorsqu'il est cru — l'humidité tirée est importante."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "salted_eggplant",
        "ing_02"
      ],
      "outputState": "fried_eggplant",
      "instructions": "Chauffer l'huile dans un wok à feu vif jusqu'à ce qu'elle fume. Ajouter les bâtons d'aubergine dans une seule couche — ne pas fouler, faire frire en lots. Cuire sans bouger pendant 90 secondes jusqu'à ce que le côté contact soit profondément doré. Mélanger et faire frire les autres côtés, 1-2 minutes au total. L'aubergine doit être dorée et adoucie mais ne doit pas tomber en morceaux. Retirer avec une cuillère à fentes.",
      "visualCue": {
        "primaryTarget": "L'aubergine en frites",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aubergine est encore ferme et pâle — la température de l'huile a trop baissé du fait de la surpopulation. Les morceaux absorbent l'huile sans frire.",
            "action": "Enlever quelques morceaux, augmenter la chaleur au maximum, laisser l'huile récupérer, puis continuer en petits lots."
          },
          {
            "state": "Perfect",
            "description": "Chaque bâton est doré-ambre sur ses visages frits, la peau s'est obscurcie du violet au presque noir, et l'intérieur s'est effondré à un noyau soyeux et productif. Aucune blancheur brute visible lorsqu'une pièce est cassée ouverte.",
            "action": "Égoutter et passer immédiatement à la sauce."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine est devenue très douce et commence à s'effondrer dans le wok — les fibres se sont complètement dégradées.",
            "action": "Égoutter immédiatement et manipuler doucement dans le braise; ajouter moins de amidon de maïs afin que la sauce n'excède pas les morceaux fragiles."
          }
        ]
      },
      "feelCue": "Ramassez un bâton frit — il devrait saguer doucement sous son propre poids, l'intérieur doux et soyeux mais la peau encore intacte."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_09"
      ],
      "outputState": "garlic_sauce_base",
      "instructions": "Verser tout sauf un mince film d'huile du wok. Réduire le feu à moyen. Ajouter l'ail, le gingembre et les flocons de piment. Faire frire pendant 30 à 45 secondes jusqu'à ce que l'ail soit profondément parfumé et que l'ail devienne or pâle aux bords. Ne laissez pas l'ail brunir — en braise rapide, l'ail amer n'a pas le temps de se moeller.",
      "visualCue": {
        "primaryTarget": "L'ail dans le wok",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore blanc vif et l'odeur brute et piquante est nette et non cuite.",
            "action": "Donnez-lui encore 15 secondes à feu moyen."
          },
          {
            "state": "Perfect",
            "description": "L'ail est d'or pâle aux bords mêmes, profondément parfumé, une vague aromatique, douce et noisette, montant du wok. Le gingembre s'est ramolli et a perdu sa netteté.",
            "action": "Ajouter immédiatement les ingrédients liquides."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et commence à sentir vif et amer.",
            "action": "Déglacer immédiatement avec la sauce soja et le vin de riz pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Se tenir près et respirer — le parfum de l'ail dans l'huile chaude devrait vous faire vouloir manger immédiatement. C'est le moment d'ajouter le liquide."
    },
    {
      "nodeId": "step_4",
      "action": "Braiser",
      "inputs": [
        "garlic_sauce_base",
        "fried_eggplant",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_braised_eggplant",
      "instructions": "Ajouter la sauce de soja, le vin de riz et le bouillon au wok et mélanger. Retournez l'aubergine frite au wok. Mélanger doucement pour enrober. Porter à mijoter et cuire 2 à 3 minutes jusqu'à ce que l'aubergine ait absorbé les arômes de sauce. Incorporer la fécule de maïs et arroser dans la sauce mijotante tout en jetant continuellement. Cuire 30 à 60 secondes jusqu'à ce que la sauce épaississe et s'accroche à chaque morceau comme une glaçure. Servir sur du riz blanc.",
      "visualCue": {
        "primaryTarget": "La sauce comme elle s'épaissit",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse — elle se jette au fond du wok et glisse de l'aubergine lorsqu'elle est plaquée.",
            "action": "Ajouter plus de amidon de maïs quelques gouttes à la fois et continuer à jeter à feu vif."
          },
          {
            "state": "Perfect",
            "description": "La sauce s'est épaissie à une consistance laquée brillante qui s'accroche à toutes les surfaces des matraques d'aubergine sans dégoutter. Lorsque le wok est incliné, la sauce se déplace lentement. Une belle glaçure mahogany foncée enveloppe chaque pièce.",
            "action": "Assiette immédiatement sur le riz blanc."
          },
          {
            "state": "Overdone",
            "description": "La sauce a gelé à une pâte épaisse et collante qui s'entremêle entre les morceaux — trop d'amidon de maïs.",
            "action": "Ajouter une cuillère à soupe d'eau chaude, lancer rapidement à feu vif à mince."
          }
        ]
      },
      "feelCue": "Faites glisser le wok doucement — les morceaux d'aubergines doivent glisser sur la sauce, enrobés mais non entassés, chacun scintille individuellement plutôt que collés ensemble."
    }
  ]
};
