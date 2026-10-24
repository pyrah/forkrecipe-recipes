export default {
  "repoId": "master_american_red_beans_and_rice_001",
  "parentRepoId": null,
  "slug": "red-beans-and-rice",
  "author": "ForkRecipe Kitchen",
  "title": "La Nouvelle-Orléans Haricots rouges et riz",
  "description": "Des haricots rouges crémeux mijotés lentement avec la saucisse d'Andouille, la sainte trinité, et un enchevêtrement d'assaisonnements créoles — le rituel du lundi de la Nouvelle-Orléans, un plat d'un confort extraordinaire de la plus humble cellier.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Orléans Créole",
  "category": "grains",
  "tags": [
    "haricots",
    "riz",
    "nouveaux-orléens",
    "créole",
    "cajun",
    "etouille",
    "sud",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "haricots rouges séchés, trempés pendant la nuit",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots rénaux en conserve (réduire le temps de cuisson à 30 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Saucisse andouille, coupée en rondelles",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "kielbasa fumé",
        "Saucisse fumée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, coupé en dés",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Céleri en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Poivre vert, coupé en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de baies",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché, quantité réduite de moitié"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 0.04,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.06,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Starch",
      "name": "Riz blanc à grains longs",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "riz décortiqué"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_13",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_02"
      ],
      "outputState": "browned_base",
      "instructions": "Faire fondre le beurre dans une grande casserole lourde ou un four hollandais à feu moyen. Ajouter l'oignon, le céleri et le poivron vert, la sainte trinité de la cuisine créole. Cuire, en remuant de temps en temps, de 8 à 10 minutes jusqu'à ce qu'il se ramollisse et commence à devenir translucide. Ajouter l'ail et cuire encore 1 minute. Poussez les légumes sur les côtés et ajoutez la saucisse Andouille tranchée en une seule couche. Laissez la saucisse brunir 2 à 3 minutes de chaque côté sans la déplacer – vous voulez une croûte rendue qui donnera aux haricots leur profondeur fumée. Mélangez tout ensemble.",
      "visualCue": {
        "primaryTarget": "Les légumes sont doux et dorés aux bords. Les rondelles de saucisses ont une croûte brun visible sur au moins un côté, et la graisse qu'elles ont rendue a mélangé avec le beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore croquants et pâles. Saucisse grise et douce, non dorée. La casserole sent la vapeur et la crue.",
            "action": "Continuez à cuisiner. Le fond (les morceaux bruns collant au fond) est saveur — ne déglacez pas jusqu'à ce qu'il se soit formé correctement."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est translucide et doré. Les rondelles de saucisses ont une croûte brune distincte. Le fond de la casserole a une couche de parfum foncé.",
            "action": "Ajouter les haricots, les herbes et les épices. Le fond va déglacer et colorer la liqueur de pot."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont très sombres et commencent à ombrager. Le saucisson s'est asséché et s'est considérablement rétréci.",
            "action": "Déglacer immédiatement avec une tasse d'eau, racler le fond. Le fond contribuera encore à la saveur. Regardez la chaleur aller de l'avant."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir la graisse de porc fondue et l'oignon caramélisant. Si ça sent le cru et le légume, continuez à cuisiner. Si ça sent la noix et légèrement fumé, vous êtes là."
    },
    {
      "nodeId": "step_2",
      "action": "Brise",
      "inputs": [
        "browned_base",
        "ing_01",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "creamy_red_beans",
      "instructions": "Ajouter les haricots égouttés et trempés dans le pot. Ajouter les feuilles de laurier, le thym, la cayenne, le paprika fumé et une généreuse pincée de sel. Couvrir d'eau froide de 5 cm. Porter à ébullition, puis laisser mijoter. Cuire à découvert ou à couvert lâchement pendant 1,5 à 2 heures, en remuant toutes les 20 minutes et en ajoutant de l'eau pour garder les haricots juste submergés. Après 90 minutes, commencez à broyer quelques haricots contre le côté de la casserole avec l'arrière d'une cuillère — ces haricots écrasés épaissiront la liqueur de pot à une consistance crémeuse, semblable à de la sauce. Continuer jusqu'à ce que le liquide de pot soit épais et crémeux et que les haricots soient complètement tendres. Goûtez au sel, à la Cayenne et à la fumée.",
      "visualCue": {
        "primaryTarget": "Un pot épais, crémeux, rouge rouille de haricots avec un liquide comme de la sauce. Les haricots doivent être complètement doux mais largement intacts, nager dans une sauce qui enrobe une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont encore légèrement fermes au centre. Le liquide est mince et aqueux, plus comme la soupe que la sauce. Les couleurs sont pâles.",
            "action": "Continuez à mijoter. Mash quelques haricots de plus contre le côté du pot pour épaissir le liquide. Ajouter l'eau seulement si les haricots sont exposés."
          },
          {
            "state": "Perfect",
            "description": "Les haricots sont entièrement tendres, quelques-uns se sont décomposés en sauce épaisse. La sauce enveloppe l'arrière d'une cuillère dans un film rouge rouille crémeuse. L'odeur est fumée, salée et profondément charnue.",
            "action": "Éteignez le feu et laissez reposer pendant que vous faites cuire le riz. Les haricots s'épaississent encore plus en s'asseyant."
          },
          {
            "state": "Overdone",
            "description": "La plupart des haricots se sont dissous. Le pot est très épais, presque en pâte. Les tranches de saucisses ont commencé à s'effondrer.",
            "action": "Ajouter l'eau chaude pour se détendre à une consistance versable. Aspirer pour se réinsérer. Ce sera encore excellent — un peu plus unifié."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère de la liqueur de pot. Il devrait enrober votre langue comme de la sauce — visqueuse, fumée, avec une chaleur douce qui se construit à l'arrière de la gorge. Le liquide bouillonnant mince signifie plus de temps et plus de masquage."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_12",
        "ing_11"
      ],
      "outputState": "steamed_rice",
      "instructions": "Pendant que les haricots finissent, cuire le riz dans une casserole séparée. Rincer le riz jusqu'à ce que l'eau soit presque claire. Mélanger avec de l'eau froide dans un rapport 1:1,75, ajouter une pincée de sel et porter à ébullition. Réduire au minimum le feu possible, couvrir soigneusement et cuire 15 minutes. Retirer du feu et reposer couvert pendant 10 minutes sans soulever le couvercle. Fluff avec une fourchette. Le riz devrait être séparé, moelleux et suffisamment sec pour absorber la sauce aux haricots.",
      "visualCue": {
        "primaryTarget": "Séparez les grains blancs moelleux sans colle et sans humidité visible. De petits cratères à vapeur pointent la surface du riz.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont crayeux et légèrement croquants au centre. L'eau peut encore être visible au fond du pot.",
            "action": "Couvrir et cuire encore 3 à 5 minutes à feu très doux. Ne levez pas le couvercle pendant la cuisson — la vapeur fait le travail."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont entièrement cuits, séparés et moelleux. La surface est recouverte de trous de vapeur. Pas d'eau visible. Une odeur de riz propre et légère.",
            "action": "Servir immédiatement avec les haricots rouges lavés généreusement sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Le riz est gommé. Les grains ont explosé et se sont collés ensemble. Sensation brûlée du fond.",
            "action": "Étendre le riz sur une assiette et plisser doucement pour libérer la vapeur. La texture gommée diminuera légèrement une fois que les haricots l'enroberont."
          }
        ]
      },
      "feelCue": "Le riz à grains longs bien cuit est sec et individuel lorsque vous l'avez traversé par une fourchette — chaque grain est distinct, sans pâte entre eux. Un seul grain pressé entre vos doigts doit se sentir complètement doux mais pas musclé."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "creamy_red_beans",
        "steamed_rice"
      ],
      "outputState": "finished_red_beans_and_rice",
      "instructions": "Versez un monticule de riz blanc moelleux au centre de chaque bol. Déposer généreusement les haricots rouges et la saucisse sur et autour du riz afin que la sauce crémeuse flaque à la base. Le rapport classique est à peu près égal parties riz et haricots dans le bol. Garnir de tranches de pétoncle et de quelques morceaux de sauce chaude Louisiane si désiré. Les haricots continueront de s'épaissir au fur et à mesure que le plat s'assoira, ce qui est traditionnel et souhaitable.",
      "visualCue": {
        "primaryTarget": "Un monticule de riz blanc entouré d'un douve de haricots foncés, brillants, rouge rouille et saucisse. La sauce devrait s'accumuler et s'étendre lentement, pas courir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce aux haricots est fine et aqueuse, et coule du riz. Aucune épaisseur visible.",
            "action": "Retourner les haricots à feu doux et laisser mijoter à découvert encore 15 minutes, en massant plus de haricots pour le corps."
          },
          {
            "state": "Perfect",
            "description": "La sauce est assez épaisse pour s'accrocher au riz plutôt que de le traverser. La saucisse est tendre et richement dorée. La couleur globale est un rouge rouille profond et chaud.",
            "action": "Servir avec de la sauce chaude et du pain français croustillant sur le côté."
          },
          {
            "state": "Overdone",
            "description": "Les haricots s'épaississent jusqu'à une pâte très raide et le bol semble sec, pas savoureux.",
            "action": "Incorporer un peu d'eau chaude ou de bouillon de poulet juste avant de servir pour desserrer les haricots à une sauce."
          }
        ]
      },
      "feelCue": "Le bol fini doit se sentir chaud et substantiel — la sauce aux haricots enveloppe la langue avec richesse, le riz fournit un soutien féculent, et la chaleur lente de Cayenne construit dans le dos de la gorge longtemps après la première morsure."
    }
  ]
};
