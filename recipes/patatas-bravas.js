export default {
  "repoId": "master_spanish_patatas-bravas_001",
  "parentRepoId": null,
  "slug": "patatas-bravas",
  "author": "ForkRecipe Kitchen",
  "title": "Patatas Bravas",
  "description": "Tapa au bar bien-aimé de Madrid — pommes de terre épaisses deux fois frites à un extérieur croustillant et un centre moelleux, servies dans une sauce épicée tomate-paprika brava et un filet d'aioli.",
  "cuisine": "Espagnol",
  "culture": "Espagne",
  "category": "vegetables",
  "tags": [
    "Espagnol",
    "pommes de terre",
    "Tapas",
    "épicé",
    "frits",
    "sauce"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre mousseuses (Maris Piper ou Russet), pelées et coupées en morceaux de 3 cm",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Pommes de terre King Edward"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive ou de tournesol pour la friture",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": [
        "Huile de son de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Tomates ripées, hachées approximativement (ou en conserve)",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "Tomates en conserve de San Marzano"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Paprika chaud fumé (pimentón picante)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "paprika doux et Cayenne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika fumé doux (pimentón dulce)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de sherry",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive pour sauce brava",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pommes de terre",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "parboiled_potatoes",
      "instructions": "Placer les morceaux de pommes de terre dans un grand pot et couvrir généreusement d'eau salée froide. Porter à ébullition à feu vif et cuire de 12 à 15 minutes jusqu'à ce que les pommes de terre soient juste cuites à travers mais ne tombent pas en morceaux. Égoutter dans une calandre et agiter vigoureusement la calandre 5-6 fois pour rugir les bords. Ce dégrossissement brise l'amidon extérieur en points déchiquetés et irréguliers qui se transformeront en la croûte encrassée qui définit les grands bravas. Répartir les pommes de terre rugueuses en une seule couche sur un support et les laisser sécher à la vapeur pendant au moins 10 minutes. Plus la surface est sèche, plus la croûte est féroce.",
      "visualCue": {
        "primaryTarget": "Des morceaux de pommes de terre aux bords chaotiques et rugueux et un extérieur sec, mat et crayeux du séchage à la vapeur — ils devraient être presque givrés avec de l'amidon de surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de pommes de terre sont encore difficiles au centre — une brochette rencontre une résistance significative. L'extérieur ne va pas pleuvoir pendant la friture.",
            "action": "Retourner à l'eau bouillante pendant 3 à 4 minutes. Le bois doit aller assez loin pour que le centre soit complètement tendre."
          },
          {
            "state": "Perfect",
            "description": "Il suffit de céder au centre avec un extérieur crayeux et rugueux. Ils tiennent leur forme mais les bords sont visiblement ébranlés par les tremblements.",
            "action": "Séchage à la vapeur sur un support pendant 10 minutes minimum avant la première friture."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre ont bouilli trop longtemps et s'écroulent; les morceaux ne peuvent pas tenir ensemble pour frire.",
            "action": "Poignez très doucement pendant la friture. Un bravo émietté est moins tragique qu'il ne semble — les pièces rugueuses encore bien frire et les formes irrégulières peuvent être charmantes."
          }
        ]
      },
      "feelCue": "Ramassez un morceau de pomme de terre et secouez - il devrait sentir la lumière pour sa taille, comme l'humidité quitte déjà la surface. L'extérieur doit se sentir sec et légèrement poudreux sous vos doigts, pas humide ou lissé."
    },
    {
      "nodeId": "step_2",
      "action": "Construire la sauce brava",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "brava_sauce",
      "instructions": "Chauffer l'huile d'olive pour la sauce dans une petite casserole à feu moyen. Ajouter l'ail tranché et cuire 1 à 2 minutes jusqu'à ce que l'or soit pâle. Ajouter les deux paprikas et remuer pendant 30 secondes — le paprika fleurit presque immédiatement, tournant l'huile un orange rouge vif. Ajouter les tomates hachées et une pincée de sel et cuire, en remuant occasionnellement, pendant 15 à 20 minutes jusqu'à ce que les tomates se soient complètement cassées et que la sauce ait épaissi et obscurci. Ajouter le vinaigre de sherry, mélanger et goûter. La sauce doit être audacieuse, fumée et chaude — non seulement légèrement épicée mais vraiment brava (brave, féroce). Mélanger jusqu'à ce qu'il soit lisse avec un mélangeur de bâtons ou passer à travers un tamis. Restez au chaud.",
      "visualCue": {
        "primaryTarget": "Une sauce acajou-orange profonde avec une surface lustrée, légèrement huileuse, assez épaisse pour enrober fortement le dos d'une cuillère sans courir. L'arôme doit être intensement fumé-doux avec une chaleur de fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince et goûte toujours de la tomate crue — l'humidité n'a pas cuit et le paprika n'a pas été intégré à la tomate.",
            "action": "Continuer la cuisson à feu moyen, en remuant occasionnellement. Il doit réduire d'environ la moitié de l'endroit où il a commencé."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, profondément coloré et intensément aromatisé — paprika fumé dominant, avec corps de tomate douce et une luminosité de vinaigre à la fin.",
            "action": "Retirer du feu, mélanger lisse et garder au chaud jusqu'à ce que les pommes de terre soient frites."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est réduite trop loin et est collée à la poêle, devenant granuleuse et amère-smelling du paprika brûlé.",
            "action": "Ajouter un jet d'eau ou de jus de tomate pour se détendre et retirer du feu. La saveur brûlée est difficile à masquer — mieux à étirer et accepter une sauce fine que de servir une sauce brûlée."
          }
        ]
      },
      "feelCue": "Plongez un doigt et frottez la sauce — elle doit être soyeuse et enrober la peau uniformément, pas grasse ou aqueuse. La chaleur devrait arriver une seconde après la fumée douce — d'abord le paprika, puis la brûlure grimpant."
    },
    {
      "nodeId": "step_3",
      "action": "Double frite",
      "inputs": [
        "ing_02",
        "parboiled_potatoes"
      ],
      "outputState": "fried_potatoes",
      "instructions": "Chauffer l'huile de friture dans une poêle large et lourde à 150C / 300F. Ajouter les morceaux de pommes de terre en lots et faire frire pendant 4 à 5 minutes jusqu'à ce qu'ils aient un extérieur pâle, mais sans couleur — c'est le premier frit, qui chasse toute humidité de surface restante et commence à construire la structure intérieure. Retirer avec une cuillère à fente et égoutter sur une serviette en papier. Augmenter la température de l'huile à 190C / 375F. Retourner les pommes de terre en petits lots et les faire frire pendant 3-4 minutes jusqu'à ce qu'elles deviennent en or profond, avec une croûte enroulée, gonflée et irrégulière. Retirer et égoutter immédiatement. Assaisonner avec des flocons de sel de mer au moment où ils quittent l'huile alors que la surface est encore humide de graisse — le sel va coller. Ne pas empiler les pommes de terre finies — elles perdent leur croûte en quelques secondes contre la vapeur de l'autre.",
      "visualCue": {
        "primaryTarget": "Pommes de terre à l'extérieur profondément doré et irrégulier, la surface devrait être presque cloquée dans les endroits, avec des crêtes lugubres de l'arrachage et croquant dans l'huile chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle et doux — l'extérieur n'a pas formé une croûte appropriée et les pommes de terre se sentent creuses lorsqu'elles sont pressées. Ils vont s'évanouir rapidement.",
            "action": "Retournez à l'huile chaude pour encore 2 minutes. L'huile doit être vraiment chaude (190C) pour que la croûte se forme."
          },
          {
            "state": "Perfect",
            "description": "Or profond avec une croûte irrégulière et craquante qui semble creuse quand tapotée et brisée sous une légère pression. L'intérieur est moelleux et vapeur.",
            "action": "Assaisonner immédiatement de sel et servir en quelques minutes, sauce à table."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé ou commençant à paraître huileux, avec une croûte dure et épaisse qui a un goût amer plutôt que grillé. L'intérieur a séché.",
            "action": "Égoutter et assaisonner; couper un ouvert pour évaluer — si l'intérieur est encore moelleux et pâle, seul l'extérieur est surdosé. La sauce aidera."
          }
        ]
      },
      "feelCue": "Tapotez une pomme de terre finie avec votre ongle — elle devrait sonner légèrement creux, comme tapoter une mince tuile de céramique. Cette bague creuse est le son de l'extérieur croustillant et l'espace de vapeur qu'elle a fait entre la croûte et l'intérieur moelleux."
    },
    {
      "nodeId": "step_4",
      "action": "Sauce et servir",
      "inputs": [
        "fried_potatoes",
        "brava_sauce"
      ],
      "outputState": "finished_patatas_bravas",
      "instructions": "Disposer les pommes de terre frites dans un plat peu profond ou dans un cazuela en une seule couche lâche. Spoon la sauce brava chaude généreusement sur le dessus — pas une mince bruine mais un revêtement approprié, assez pour que chaque pomme de terre soit touchée. La sauce devrait pulvériser légèrement dans les espaces entre les pommes de terre. Servir immédiatement. Bravas devrait toujours arriver à la table chaude — la fenêtre entre parfait et soggy est étroite. Si vous servez avec de l'aioli (traditionnelle dans certaines régions), arrosez-le sur la sauce en fines lignes ou en zigzags. La version double-sauce (bravas avec brava et aioli) est appelée bravas 'ali-oli' et est une offre commune de tapas de Madrid.",
      "visualCue": {
        "primaryTarget": "Pommes de terre dorées à moitié submergées dans la sauce brava rouge foncé, la sauce scintille toujours et baignée, la vapeur montant des pommes de terre en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce appliquée trop parcimonieusement — les pommes de terre sont pour la plupart nues et l'impact brava est perdu. Le plat a l'air sec.",
            "action": "Ajouter plus de sauce. Bravas devrait être soudé assez généreusement pour que vous écoper la sauce avec chaque morceau de pomme de terre."
          },
          {
            "state": "Perfect",
            "description": "Chaque pomme de terre est enrobée de sauce épicée et audacieuse; la croûte est encore audible lorsqu'une pomme de terre est ramassée; la chaleur de la sauce et la croûte arrivent simultanément.",
            "action": "Mangez immédiatement — ce plat n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Pommes de terre souillées et laissées assises pendant plus de 10 minutes — la croûte a absorbé l'humidité de la sauce et est devenue molle et lourde.",
            "action": "Rien à récupérer ici. Pour le prochain service, gardez les pommes de terre et la sauce séparées et combinez au dernier moment."
          }
        ]
      },
      "feelCue": "Agiter à travers une pomme de terre souillée — vous devriez entendre la fissuration de la croûte une fraction de seconde avant que l'intérieur ne cède le pas et que la chaleur de la sauce se répande sur votre langue. La croûte devrait survivre à la sauce. C'est tout."
    }
  ]
};
