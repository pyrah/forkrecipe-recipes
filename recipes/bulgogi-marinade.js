export default {
  "repoId": "master_korean_bulgogi-marinade_001",
  "parentRepoId": null,
  "slug": "bulgogi-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Marinade Bulgogi",
  "description": "Une marinade laque-dark qui tende le boeuf finement tranché avec les enzymes de la poire asiatique tandis que le soja, le sésame et le sucre brun construisent un glaçage qui caramélise les bords collants et fumés sur une grille chaude — l'âme de chaque table de barbecue coréenne.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "condiments",
  "tags": [
    "boeuf",
    "marinade",
    "coréen",
    "soja",
    "sésame"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce soja (ganjang)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun ou muscovado foncé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie",
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Poire d'Asie (ou kiwi), râpée sur un fin râpe",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Poire de bosc",
        "Jus d'ananas (1/2 partie)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, râpé ou pressé (4 girofles)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalote, finement coupée (3 tiges)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Gochugaru (facultatif, pour la chaleur)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soy_sugar_base",
      "instructions": "Mélanger la sauce de soja et le sucre brun dans un bol assez grand pour éventuellement tenir tout votre boeuf. Mélanger vigoureusement avec une fourchette ou fouetter pendant 60 à 90 secondes jusqu'à ce que le sucre soit complètement dissous – le sucre granulaire ne se dissoudra pas uniformément lorsque le bœuf froid entrera et pourra laisser des taches sucrées. Le mélange doit être uniformément foncé et sirupeux.",
      "visualCue": {
        "primaryTarget": "Un liquide brun foncé brillant sans granulés de sucre visibles. Lorsque vous soulevez la cuillère, elle coule dans une mince feuille légèrement visqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les granules de sucre sont encore visibles, fixés au fond lorsque vous arrêtez de remuer.",
            "action": "Continuez à remuer — ou micro-ondes 10 secondes et remuez à nouveau pour aider à la dissolution."
          },
          {
            "state": "Perfect",
            "description": "Liquide entièrement clair, uniformément foncé. Des odeurs de caramel et de soja.",
            "action": "Ajouter la poire râpée, l'ail et les arômes."
          },
          {
            "state": "Overdone",
            "description": "Vous avez chauffé le mélange sur le poêle et le sucre commence à caraméliser un sirop épais.",
            "action": "Retirer du feu et mincer avec une cuillère à soupe d'eau. Refroidir avant d'ajouter de la poire ou des enzymes sera détruit."
          }
        ]
      },
      "feelCue": "Frotter une goutte entre le pouce et l'index — vous ne devriez pas sentir de cristaux de sucre gras. Le mélange doit être lisse et légèrement collant."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "soy_sugar_base",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "complete_marinade",
      "instructions": "Râper la poire asiatique sur le meilleur côté d'une boîte grater directement dans la base de soja-sucre — inclure tout le jus qui s'écoule. Ajouter l'ail pressé, le pétoncle tranché, le poivre noir et le gochugaru si vous l'utilisez. Mélangez tout ensemble. La poire apporte des enzymes de protéase croquantes qui décomposent les fibres musculaires dans le boeuf pendant 30 minutes à 4 heures; au-delà de 6 heures la viande deviendra pâteuse, donc planifiez en conséquence.",
      "visualCue": {
        "primaryTarget": "Une marinade sombre et moelleuse avec des fils de pétoncle visibles et de la pulpe de poire en suspension. La couleur est un acajou-brun profond avec des taches de vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ingrédients sont ajoutés mais non agités — la poire est assise sur le dessus, l'ail est empilé ensemble.",
            "action": "Mélanger soigneusement jusqu'à ce que tous les éléments soient uniformément répartis."
          },
          {
            "state": "Perfect",
            "description": "Une marinade uniforme et cohésive. Pulpe de poire uniformément distribuée. Des odeurs de sésame, de soja et de poire fraîche.",
            "action": "Ajouter l'huile de sésame, puis goûter."
          },
          {
            "state": "Overdone",
            "description": "Vous avez mélangé la marinade à une purée lisse — c'est très bien, mais vous perdez la garniture texturale de fils de pétoncle.",
            "action": "Procéder — une marinade lisse fonctionne parfaitement bien."
          }
        ]
      },
      "feelCue": "Le frottement d'une petite quantité de la marinade brute entre vos doigts devrait se sentir légèrement huileux du sésame, mais légèrement collant du sucre, ce qui crée la croûte de caramel sur la grille."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "complete_marinade",
        "ing_06",
        "ing_09"
      ],
      "outputState": "finished_bulgogi_marinade",
      "instructions": "Arrosez l'huile de sésame sur la marinade et remuez doucement pour la combiner — ne l'émulsionnez pas complètement; vous voulez des gouttes d'huile visibles qui toucheront la surface du grill chaud et parfumeront instantanément la viande. Épargnez les graines de sésame grillées si vous les utilisez. Goûtez la marinade sur un bout de doigt : elle doit être intensément salée et sucrée avec une colonne vertébrale de soja propre. Ajouter plus de sucre si plat, plus de soja si trop sucré. Pour l'utilisation : ajouter le ribeye finement tranché ou la longe (2–3 mm), mélanger pour enrober chaque surface et réfrigérer pendant au moins 30 minutes et jusqu'à 4 heures.",
      "visualCue": {
        "primaryTarget": "La marinade glissée avec de l'huile de sésame brille à la surface et des graines grillées parsemées. Couleur brun foncé avec un arôme chaud et appétissant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Huile de sésame non ajoutée. Marinade sent à plat, sans la note supérieure aromatique de noix.",
            "action": "Ajouter l'huile de sésame — il n'est pas facultatif pour le profil d'arôme de grill."
          },
          {
            "state": "Perfect",
            "description": "La marinade parfumée, équilibrée, profondément salée et sucrée qui vous donne envie de commencer à griller immédiatement. Chaque composant est visible.",
            "action": "Ajouter le boeuf et la marinade, ou conserver au réfrigérateur pendant 3 jours maximum."
          },
          {
            "state": "Overdone",
            "description": "La marinade est assise avec du boeuf cru depuis plus de 8 heures — les enzymes de la poire ont surmené la viande dans une texture musquée.",
            "action": "Cuire immédiatement le boeuf — il est encore comestible mais ne tiendra pas sa forme sur le grill. Mieux cuit dans une poêle que grillé."
          }
        ]
      },
      "feelCue": "Lorsque vous lancez le boeuf dans cette marinade, il devrait enrober chaque surface d'un film sombre et brillant — si la marinade se trouve au fond et que la viande semble pâle, vous devez la masser plus agressivement."
    }
  ]
};
