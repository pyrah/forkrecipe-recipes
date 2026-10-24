export default {
  "repoId": "fork_french_supreme_001",
  "parentRepoId": "master_french_veloute_001",
  "slug": "sauce-supreme",
  "parentSlug": "veloute",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Suprême",
  "description": "Un velours de poulet réduit avec de la crème jusqu'à ce qu'il devienne luxuriant, ivoire et brillant, puis monté avec du beurre froid pour un miroir brillant. Le suprême des sauces blanches — construit pour le poulet poché, le suprême de la volaille, et tout ce qui veut goûter de la volaille pure et soyeuse.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "fille-sauce",
    "crème",
    "volailles"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Un velouté de poulet réduit à la crème jusqu'à ce que luxuriant et brillant – le suprême des sauces blanches, classique sur la volaille.",
  "changes": {
    "ingredientsAdded": 2,
    "ingredientsRemoved": 0,
    "ingredientsModified": 1,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 1
  },
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Poulet blanc",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "viande bovine blanche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre (froid, pour monter/finir)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "blond_roux",
      "instructions": "Faire fondre le beurre à feu moyen-doux jusqu'à ce qu'il mousse sans brunir, puis fouetter dans la farine. Cuire en remuant, 4 à 6 minutes jusqu'à ce que l'odeur de la farine brute se transforme en noisette grillée et que la pâte soit de la paille pâle — un roux blond.",
      "visualCue": {
        "primaryTarget": "Une pâte lâche, brillante et à paille pâle qui se déplace comme du sable humide et sent les noix grillées chaudes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Blanc vif et pâteux, sent toujours la farine crue.",
            "action": "Mélanger sur la chaleur encore une minute jusqu'à ce que la couleur se déplace pour évanouir la paille et l'odeur devient noisette."
          },
          {
            "state": "Perfect",
            "description": "Même la paille pâle, lisse et fluide, légèrement noisette. Bubbles paresseux aux bords.",
            "action": "Tirez du feu et préparez le bouillon de poulet chaud."
          },
          {
            "state": "Overdone",
            "description": "Glissé doré-brun et fortement grillé.",
            "action": "Recommencer pour une vraie blonde — un roux brun ferait bouillir l'ivoire propre que cette sauce veut."
          }
        ]
      },
      "feelCue": "Le fouet traîne à travers une pâte douce et fluide sans résistance. S'il se met à sécher, il y a trop de farine."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "blond_roux",
        "ing_01"
      ],
      "outputState": "loose_veloute",
      "instructions": "Hors du feu, fouetter le bouillon de poulet blanc chaud dans le roux en trois ou quatre ajouts, laissant chacun disparaître avant le suivant. Retourner à feu moyen, porter à ébullition douce, puis laisser mijoter à nu et écrémer jusqu'à ce que la surface soit propre.",
      "visualCue": {
        "primaryTarget": "Un poulet ivoire pâle, lisse, sans morceaux, brillant, avec une surface claire et propre après écrèmege.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et aqueuse, la surface jette encore de la mousse grise.",
            "action": "Laisser mijoter et écrémer quelques minutes de plus — le corps se construit et la mousse cesse de faire surface avec le temps."
          },
          {
            "state": "Perfect",
            "description": "Doux, lustré, ivoire pâle; enrobe légèrement le fouet; surface claire entre les écumes.",
            "action": "Verser la crème et commencer à réduire."
          },
          {
            "state": "Overdone",
            "description": "Collez et collez-la avant que la crème ne soit même dedans.",
            "action": "fouetter dans un peu de bouillon chaud pour le desserrer avant d'ajouter la crème."
          }
        ]
      },
      "feelCue": "Sentez que l'épaississement doux attrape le fouet à mesure qu'il bouillit — c'est l'amidon qui sert. La mijoter doit être un blip paresseux, jamais un ébullition."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "loose_veloute",
        "ing_09"
      ],
      "outputState": "reduced_supreme",
      "instructions": "Verser la crème lourde dans le velours mijotant. Réduire doucement à feu moyen-doux, en remuant souvent et en grattant le fond, jusqu'à ce que la sauce soit enrichie, l'ivoire et assez épaisse pour enrober l'arrière d'une cuillère. Cette réduction de crème est ce qui transforme un velouté uni en suprême — s'attend à perdre environ un tiers du volume.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire brillante réduit jusqu'à ce qu'elle nappe une cuillère — tirez un doigt sur la cuillère enduite et la ligne tient propre sans inonder. Il tombe de la cuillère dans des rubans lents et lourds.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est pâle et lâche, sort de la cuillère dans une mince feuille, goûte plus de crème que le poulet concentré.",
            "action": "Continuer à réduire à mijoter doucement, en remuant, jusqu'à ce que le volume tombe et que la saveur se concentre."
          },
          {
            "state": "Perfect",
            "description": "Riche ivoire, brillant, enrobe une cuillère dans une serviette propre. Goûte profondément de poulet arrondi à la crème.",
            "action": "Tirez le feu pour monter avec du beurre froid."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin — lourd, collant, commençant à attraper et brunir sur le fond de la poêle, bords tournant bronzant.",
            "action": "fouetter dans un jet de bouillon chaud ou de crème à la fois pour se détendre, et baisser la chaleur avant qu'elle scorse."
          }
        ]
      },
      "feelCue": "Mélanger et vous sentez la sauce épaissir sous la cuillère et commencer à murmurer contre le fond de la poêle — qui traîne vous dit qu'il est presque réduit. Il sent la richesse concentrée de poulet rôti."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "reduced_supreme",
        "ing_10",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_supreme",
      "instructions": "Hors du feu, fouetter dans le beurre froid un cube à la fois, tourbillonner la poêle, laisser chaque morceau fondre dans la sauce avant d'ajouter le suivant (monter au beurre). Cela donne au suprême son miroir brillant et une richesse finale en velours. Assaisonner de sel et une touche de poivre blanc. Gardez-le au chaud, mais ne le laissez jamais bouillir après le montage, ou le beurre se fendra.",
      "visualCue": {
        "primaryTarget": "Une sauce d'ivoire sans défaut, avec un miroir brillant, épaisse et luxuriante, qui enrobe le poulet poché dans une feuille collante et satinée. La surface brille; elle tombe de la cuillère dans des rubans lourds et brillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce semble mate et plate — le beurre n'a pas encore été travaillé, ou seulement partiellement.",
            "action": "Continuez à fouetter dans le beurre froid hors du feu, cube par cube, jusqu'à ce que la surface devienne brillante et que la sauce épaississe légèrement."
          },
          {
            "state": "Perfect",
            "description": "Haut de gamme, ivoire, velours; s'accroche à une cuillère et au poulet; goût rond, riche et propre.",
            "action": "Servir immédiatement sur la volaille — c'est à son meilleur au moment où elle est terminée."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été bouillie ou surchauffée après le montage — elle a l'air grasse et cassée, avec une fine graisse qui se sépare.",
            "action": "Tirez le feu et fouettez dans une éclaboussure de crème froide ou quelques gouttes d'eau froide pour ramener l'émulsion ensemble."
          }
        ]
      },
      "feelCue": "Au fur et à mesure que le beurre froid fond, la sauce se resserre visiblement sous le fouet et se sent plus lourde et plus soyeuse sur la cuillère. Il devrait verser comme du satin chaud, jamais gras."
    }
  ]
};
