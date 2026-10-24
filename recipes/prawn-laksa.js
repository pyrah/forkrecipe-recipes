export default {
  "repoId": "master_malaysian_prawnlaksa_001",
  "parentRepoId": null,
  "slug": "prawn-laksa",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Laksa crevés",
  "description": "Un bol de nouilles de riz noyées dans un bouillon qui est simultanément ardent, riche et aigre — la crème de noix de coco se repliant autour de la citronnelle et de la pâte de crevettes comme une marée chaude, prune les crevettes à peine cuites dans la mijot finale.",
  "cuisine": "Malaisien",
  "culture": "Peranakan-Nyonya",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "crevettes",
    "nouilles",
    "Malaysian",
    "Laksa",
    "noix de coco",
    "épicé",
    "Soupe"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes, pelées et dépouillées (coquilles réservées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "crevettes cuites ajoutées à la fin"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Crème de coco (graisse)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "lait de coco pour bouillon plus léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Crevettes ou bouillons de poulet",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "eau + coquilles de crevettes mijotées 20 min"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Pâte de laksa (achetée en magasin ou à partir de zéro)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de curry rouge + pâte de crevette + citronnelle"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Pâte de crevettes séchées (belacan), grillée",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "miso pâte (pas traditionnelle mais travaille)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Vermicelli de riz épais (nouilles laksa), trempé",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Nouilles à bâton de riz"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de lime fraîchement pressé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "sel + pointe de sauce soja"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Choux de haricots, feuilles de laksa (coriandre vietnamienne) et chili rouge tranché",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Coriandre régulière + menthe"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_03",
        "ing_01"
      ],
      "outputState": "prawn_stock",
      "instructions": "Si vous utilisez des coquillages crus de crevettes, faites-les mijoter dans le stock pendant 15 minutes pour construire une base de mollusques plus profonde. Retirez et jetez les coquilles. Cette étape augmente considérablement la saveur de crevette dans le bouillon et vaut le temps supplémentaire. Si vous utilisez du stock de crevettes prêt à l'emploi, sautez la coquille.",
      "visualCue": {
        "primaryTarget": "Le stock a transformé un faible rose-corallien et sent fortement les crevettes rôties.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est encore pâle et mince. Arôme crevé faible.",
            "action": "Laisser mijoter 5 minutes de plus, puis goûter — il devrait goûter clairement des mollusques."
          },
          {
            "state": "Perfect",
            "description": "Bouillon teinté de corail, arôme intensément salé et de coquillages doux. Un peu réduit.",
            "action": "La souche et la réserve. Jetez les coquilles."
          },
          {
            "state": "Overdone",
            "description": "Le stock a diminué de plus de la moitié et goûte amer ou boueux.",
            "action": "Diluer avec de l'eau ou du matériel supplémentaire pour corriger la concentration."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon à l'aide d'une cuillère — elle doit enrober la langue de douceur et de profondeur savoureuse, et non pas de goût aqueux ou plat."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "fried_laksa_paste",
      "instructions": "Chauffer un peu d'huile dans un pot profond à feu moyen. Ajouter la pâte de laksa et le bélacan grillé. Faire frire, en remuant constamment, pendant 3-4 minutes jusqu'à ce que la pâte s'assombrisse d'une seule nuance, que l'odeur brute brûle, et que l'huile commence à se séparer et à s'accumuler autour des bords de la pâte. Cette étape de « cuisson » est essentielle: la pâte crue a un goût aigu et déséquilibré.",
      "visualCue": {
        "primaryTarget": "La pâte s'est obscurcie de rouge-orange vif à une brique plus profonde et plus muette. Pools d'huile visiblement autour des bords de la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore orange vive et sent cru et vif: la citronnelle crue et le chili non cuit dominent.",
            "action": "Continuer à frire à feu moyen, en remuant constamment. Ne vous précipitez pas avec une chaleur élevée."
          },
          {
            "state": "Perfect",
            "description": "Pâte de brique-orange plus profonde, la cuisine sent complexe et grillée — citronnelle, galangale, et une légère douceur. L'huile est clairement séparée aux bords du pot.",
            "action": "Verser la crème de noix de coco immédiatement pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est assombrie à brune dans les taches et sent brûlé. Les aromatiques brûlent.",
            "action": "Réduire la chaleur et ajouter immédiatement de la crème de coco pour arrêter la combustion."
          }
        ]
      },
      "feelCue": "Mélanger avec une cuillère en bois et sentir la résistance — quand la pâte passe de douce et humide à légèrement grainée et collante, les aromatiques sont cuits."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "fried_laksa_paste",
        "ing_02",
        "prawn_stock",
        "ing_08"
      ],
      "outputState": "laksa_broth",
      "instructions": "Verser la crème de coco et le bouillon de crevettes. Mélanger et laisser mijoter en douceur — pas un ébullition qui brisera la crème de noix de coco et rendra le bouillon granuleux. Assaisonner avec de la sauce de poisson. Laisser mijoter doucement pendant 10 minutes, en remuant occasionnellement, jusqu'à ce que le bouillon soit parfumé, riche et légèrement épaissi.",
      "visualCue": {
        "primaryTarget": "Un bouillon doré-orange avec une surface veloutée. Pas de patchs caillés. Les bulles se lèvent paresseusement aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est pâle et mince, pâte toujours se séparant en touffes.",
            "action": "Laisser mijoter 3 minutes de plus, en remuant pour intégrer complètement la pâte."
          },
          {
            "state": "Perfect",
            "description": "Bouillon orangé-or profond, légèrement visqueux. Goûts de noix de coco, de citronnelle et de profondeur salée. La surface mijote d'une légère lisure.",
            "action": "Ajouter les crevettes et les nouilles."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli trop dur — la crème de noix de coco caillée forme des granules blancs à la surface.",
            "action": "Réduire la chaleur au réglage le plus bas et fouetter vigoureusement. Certains cambriolages ne peuvent pas être inversés, mais la saveur reste intacte."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon — il doit se sentir soyeux sur la langue avec une chaleur lente et la douceur de la noix de coco."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "laksa_broth",
        "ing_01",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "finished_prawn_laksa",
      "instructions": "Apportez le bouillon à une mijotée vivante. Ajouter les nouilles trempées et pocher pendant 2 minutes jusqu'à tendreté. Glisser dans les crevettes crues et cuire pendant exactement 90 secondes jusqu'à ce que tout soit rose. Retirer immédiatement du feu. Régler l'assaisonnement avec du jus de lime et de la sauce de poisson. Déposer dans des bols profonds sur un nid de nouilles et de crevettes. Garnir de pousses de haricots, de feuilles de laksa et de chili tranché.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont uniformément rose-orange, enroulées dans un doux C. Les nouilles sont tendres mais ont encore une légère morsure. Les garnitures sont vives et fraîches contre le bouillon doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore gris translucide au centre, les nouilles se sentent dures.",
            "action": "90 secondes de plus dans le bouillon, puis tester une crevette en la coupant en deux."
          },
          {
            "state": "Perfect",
            "description": "Crevettes orange rose dans des courbures en C doux, entièrement opaques. Nouilles soyeuses et tendres. Broth est parfumé et complexe.",
            "action": "Servir immédiatement — laksa n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont enroulées dans des formes O serrées et caoutchouteuses. Les nouilles se sont légèrement dissoutes dans le bouillon.",
            "action": "Servir immédiatement avec du citron vert supplémentaire — l'acide rafraîchit un plat trop cuit."
          }
        ]
      },
      "feelCue": "Après la première gorgée, le bouillon devrait laisser un faible enrobage sur les lèvres: noix de coco et épices, et non de l'eau."
    }
  ]
};
