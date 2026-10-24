export default {
  "repoId": "master_greek_greek_gigantes_001",
  "parentRepoId": null,
  "slug": "greek-gigantes",
  "author": "ForkRecipe Kitchen",
  "title": "Gigantes Plaki",
  "description": "D'énormes haricots au beurre blanc cuits bas et lents dans une sauce tomate riche à l'huile d'olive, au céleri et à l'oignon doux jusqu'à ce que leurs peaux se fendent et que leurs intérieurs deviennent crémeux et donnent.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "vegetables",
  "tags": [
    "gigantes",
    "grec",
    "Haricots cuits",
    "tomates",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Haricots gigants séchés (haricots blancs géants), trempés pendant la nuit",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "fèves de beurre (en conserve — sauter les étapes 1 et 2)",
        "haricots cannellini"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 2,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés minces",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles en dés",
      "ratioValue": 3,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates en conserve concassées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates fraîches mûres, pelées et broyées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Pâte de tomates",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "d'aneth"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Liquid",
      "name": "Stocks d'eau ou de légumes",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "parboiled_beans",
      "instructions": "Égoutter les haricots trempés et bien rincer. Couvrir d'eau froide dans une grande casserole d'au moins 5 cm. Porter à ébullition, enlever toute mousse blanche qui monte dans les 5 premières minutes. Réduire à mijoter vigoureusement et cuire de 45 à 60 minutes jusqu'à ce que les haricots soient tendres mais encore légèrement fermes au centre — ils finiront au four. Égoutter et réserver.",
      "visualCue": {
        "primaryTarget": "Les haricots sont bruns et crémeux blancs, élargis pour environ doubler leur taille sèche. Ils tiennent leur forme mais squash facilement entre deux doigts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont encore denses et crayeux au centre. Ils résistent à une pression ferme entre les doigts.",
            "action": "Continuer à bouillir — les haricots partiellement cuits ne s'adouciront jamais complètement dans la sauce tomate acide au four."
          },
          {
            "state": "Perfect",
            "description": "Squash complètement entre deux doigts avec la pression de la lumière. Pas de craie. La peau est intacte mais détendue.",
            "action": "Égoutter immédiatement et passer à la sauce."
          },
          {
            "state": "Overdone",
            "description": "Les haricots sont très doux et certaines peaux ont fendue. Ils commencent à s'effondrer.",
            "action": "Égoutter immédiatement et manipuler très doucement. Ils se décomposeront davantage au four — le résultat sera plus crémeux que des haricots distincts."
          }
        ]
      },
      "feelCue": "Appuyez sur un haricot entre le pouce et l'index — il devrait donner complètement avec une pression modérée, laissant un frottis lisse et dense. Pas de craie."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "soffritto",
      "instructions": "Préchauffer le four à 180 C (350 F). Dans une grande poêle ou poêle, chauffer la moitié de l'huile d'olive à feu moyen. Ajouter l'oignon, l'ail et le céleri. Cuire, en remuant, pendant 12 à 15 minutes jusqu'à ce que tout soit très doux, doux-éperlan, et commence juste à devenir doré aux bords. Ne précipitez pas cette étape.",
      "visualCue": {
        "primaryTarget": "Translucide, oignon jammy et céleri avec une pointe d'or aux bords. Le mélange a diminué de moitié et semble brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et le céleri est vert vif et croquant. Une odeur crue et piquante.",
            "action": "Plus de temps à feu moyen — les alliums crus feront goûter la sauce dure et nette, pas sucrée et moelleuse."
          },
          {
            "state": "Perfect",
            "description": "Les trois légumes sont complètement ramollis, sucrés et légèrement dorés. Le mélange ressemble à une pile douce et parfumée. Celery a perdu son vert vif, tournant un jade muet.",
            "action": "Ajouter la pâte de tomate à pincer."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est profondément caramélisé et brun. L'ail a commencé à croquer.",
            "action": "Procéder — la caramélisation supplémentaire rendra la sauce plus douce et plus riche. Surveille l'ail."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers le soffritto — il devrait se déplacer facilement comme une pâte douce, laissant un sentier qui se ferme lentement. Si elle résiste, cuire plus longtemps."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "soffritto",
        "ing_05",
        "ing_06",
        "ing_11",
        "ing_09",
        "ing_10",
        "ing_12"
      ],
      "outputState": "tomato_sauce",
      "instructions": "Ajouter la pâte de tomate à la soffritto et remuer pendant 2 minutes jusqu'à ce qu'elle s'assombrisse du rouge vif au brun rouille (c'est le pinçage – il adoucit l'acidité). Ajouter les tomates écrasées, le sucre, le sel, le poivre et l'eau ou le bouillon. Mélanger. Laisser mijoter pendant 10 minutes jusqu'à ce qu'elle épaississe légèrement.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, rouge bordeaux avec des morceaux de légumes visibles. La surface bouillonne doucement. La couleur est plus foncée que les tomates en conserve crues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est lumineuse, fine et aqueuse. Ça sent cru et acide.",
            "action": "Laisser mijoter davantage — la sauce doit se concentrer légèrement avant l'entrée des haricots ou elle sera trop liquide au four."
          },
          {
            "state": "Perfect",
            "description": "Bourgogne profonde, épaissie délicatement, sentant la tomate cuite et le céleri. Goûte agréablement sucrée, bien assaisonnée.",
            "action": "Ajouter les haricots et les transférer au four."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très épaisse et sombre, collée à la poêle. Un peu amer.",
            "action": "Ajouter 100 ml d'eau, remuer et poursuivre."
          }
        ]
      },
      "feelCue": "La sauce doit enrober l'arrière d'une cuillère dans une couche mince et uniforme — non transparente et aqueuse, pas si épaisse qu'elle s'y accroche."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "tomato_sauce",
        "parboiled_beans",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_gigantes_plaki",
      "instructions": "Repliez doucement les haricots parboulés dans la sauce tomate dans la poêle. Arrosez le reste de l'huile d'olive sur le dessus. Transférer au four préchauffé découvert. Cuire au four pendant 50 à 60 minutes, en tournant les haricots une fois à mi-chemin, jusqu'à ce que la sauce soit épaisse et confitureuse et que la couche supérieure des haricots ait formé une croûte légèrement caramélisée et foncée. Éparpiller du persil frais sur le dessus juste avant de servir.",
      "visualCue": {
        "primaryTarget": "Une casserole de haricots brillants, laqués de sauce avec quelques peaux fendues et des dessus caramélisés. La sauce est visiblement épaisse et à peine versable — elle s'accroche à chaque fève. Le persil vert vif ponctue la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore molle et aqueuse. Les haricots semblent pâles et n'absorbent pas la sauce. La couche supérieure n'a pas caramélisé.",
            "action": "Retourner 15 minutes au four à découvert. Les haricots doivent boire dans la sauce."
          },
          {
            "state": "Perfect",
            "description": "La sauce est épaisse et confitureuse, presque absorbée par les haricots. La couche supérieure a une croûte caramélisée légèrement foncée. La cuisine sent la tomate sucrée et l'huile d'olive. Chaque fève est tendre tout au long, son intérieur crémeux.",
            "action": "Scatter le persil et servir chaud ou à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "La sauce est complètement réduite et les haricots en haut sont secs et croustillants. Les bords de la poêle sont sombres.",
            "action": "Ajouter 100 ml d'eau chaude, remuer doucement et retourner au four pendant 5 minutes avec du papier sur le dessus."
          }
        ]
      },
      "feelCue": "Ramassez un haricot et mordez-le en deux — l'intérieur doit être crémeux et productif, presque comme une crème dense et salée, sans centre ferme ou crayeux."
    }
  ]
};
