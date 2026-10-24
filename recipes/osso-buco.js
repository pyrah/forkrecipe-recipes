export default {
  "repoId": "master_italian_osso_buco_001",
  "parentRepoId": null,
  "slug": "osso-buco",
  "author": "ForkRecipe Kitchen",
  "title": "Osso Buco alla Milanese",
  "description": "Le grand braise de veau de Milan — jarrets coupés en croix mijotés de vin blanc et de bouillon jusqu'à ce que la moelle tremble dans sa prise et que la sauce transforme la couleur de l'ancienne ambre. Une averse de gremolata coupée à travers la richesse : ail cru, zeste de citron et persil qui réveillent tout le plat.",
  "cuisine": "Italien",
  "culture": "Milanais",
  "category": "proteins",
  "tags": [
    "Italien",
    "braise",
    "Viande bovine",
    "Milanese",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Osso buco de veau (jarrets coupés en travers, épais de 4 à 5 cm, attaché avec ficelle de cuisine)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "osso buco de porc",
        "Jarrets d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Carotte (petits dés)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Célèbres (petits dés)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc (petits dés)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail (crues)",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Vin blanc sec (Pinot Grigio ou Soave)",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Viande bovine (chaud)",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Pâte de tomates",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1 tomate à prune mûre, broyée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuille de la baie",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Citrus",
      "name": "Zeste de citron (finement râpé, pour gremolata)",
      "ratioValue": 1,
      "defaultUnit": "lemon",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Herb",
      "name": "Persil à feuilles plates (finement haché, pour gremolata)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Allium",
      "name": "Ail (finement haché, pour gremolata)",
      "ratioValue": 1,
      "defaultUnit": "clove",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "seared_shanks",
      "instructions": "Patientez les jarrets de veau complètement secs avec une serviette en papier — toute humidité de surface va vapeur au lieu de la mer. Assaisonner généreusement de sel et de poivre sur tous les côtés. Chauffer le beurre et l'huile d'olive dans un four ou un brassage néerlandais large et lourd à feu moyen-vif jusqu'à ce que les mousses de beurre s'abaissent. Semer les jarrets à plat par lots, ne jamais encombrer, pendant 3-4 minutes de chaque côté jusqu'à ce qu'une croûte acajou profonde se forme. Tourner et saisir brièvement les os. Retirer et reposer sur une assiette.",
      "visualCue": {
        "primaryTarget": "Chaque tige porte une croûte d'acajou sombre et uniforme sur les deux faces plates, et le plancher en pot est peint avec un riche fond brun-ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est beige pâle et a libéré du liquide dans la poêle, qui mijote maintenant plutôt que de semer. Aucune croûte visible.",
            "action": "La casserole était trop fraîche ou trop bondée. Retirer quelques morceaux, lever le feu jusqu'à ce que la graisse mijote, et attendre que le étourdissement aiguise avant de retourner la viande."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'acajou brûlée couvre les deux faces plates; la tige se libère proprement lorsqu'elle est munie de pinces. Le fond de la poêle est ambre foncé et parfumé.",
            "action": "Retirer les jarrets et construire le soffritto dans le même pot."
          },
          {
            "state": "Overdone",
            "description": "La croûte est devenue brun foncé au noir et l'affection sur le plancher de pot est carbonisée, envoyant une fumée amère et acride.",
            "action": "Tirez immédiatement la casserole hors de la chaleur. Si le fond est brûlé plutôt que caramélisé, déglacer avec une éclaboussure de vin et le pourboire avant de commencer le soffritto."
          }
        ]
      },
      "feelCue": "La tige doit siffler fort au moment où elle touche la graisse et résiste au levage pendant les deux premières minutes — cette résistance est la croûte qui se lie au métal. Quand il libère librement, il est prêt à tourner."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "seared_shanks",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08"
      ],
      "outputState": "softened_soffritto",
      "instructions": "Baisser le feu à moyen. Ajouter la carotte, le céleri et l'oignon dans la casserole et cuire dans la graisse restante, grattant le fond avec une cuillère en bois alors que les légumes libèrent leur humidité, pendant 8-10 minutes jusqu'à ce que doux et légèrement doré aux bords. Ajouter l'ail et la pâte de tomate, bien remuer et cuire encore 2 minutes jusqu'à ce que la pâte s'assombrisse de rouge vif à une couleur brique profonde et sente grillée et sucrée.",
      "visualCue": {
        "primaryTarget": "Les légumes sont complètement doux et brillants, l'oignon translucide et l'or pâle aux bords. La pâte de tomate a frit à une couleur de brique rouille qui enrobe le soffritto.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon et le céleri sont encore croquants et pâles; la pâte de tomate est vive écarlate et sent le teint et le cru.",
            "action": "Conservez la cuisson à feu moyen – les légumes doivent s'assouplir complètement ou ils resteront gras dans la sauce finale. La pâte a besoin d'une autre minute dans l'huile pour perdre sa netteté brute."
          },
          {
            "state": "Perfect",
            "description": "Soffritto est complètement doux, parfumé, avec la pâte un revêtement en brique profonde chaque pièce. L'ail est parfumé mais pas brun.",
            "action": "Déglacer avec le vin blanc immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu brun foncé et amer; les légumes brûlent sur le fond avec une odeur de sucre vif et brûlé.",
            "action": "Déglacer immédiatement avec un jet de vin pour arrêter la cuisson et lever le fond. Si l'ail est très sombre, le poisson dehors — il fera la sauce amère."
          }
        ]
      },
      "feelCue": "Mélanger le soffritto et sentir la résistance sous votre cuillère — il devrait se déplacer à travers des légumes glissants et à rendement sans sensation de grattage. La cuisine devrait se remplir d'une douce chaleur d'oignon."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "softened_soffritto",
        "ing_06"
      ],
      "outputState": "wine_base",
      "instructions": "Verser le vin blanc en même temps et augmenter le feu à moyen-élevé. Gratter vigoureusement le plancher de la casserole en arrivant à ébullition, dissoudre tout le fond dans le liquide. Laissez-le réduire de moitié, environ 4-5 minutes, jusqu'à ce que l'odeur d'alcool cru se consume et soit remplacée par un parfum moelleux et fruité.",
      "visualCue": {
        "primaryTarget": "Le vin a réduit à environ la moitié de son volume original, légèrement doré et brillant, et la vapeur sent les fruits chauds et les légumes caramélisés plutôt que l'alcool cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore mince et d'or pâle; la vapeur pique le nez avec des fumées d'alcool vives.",
            "action": "Gardez-le à mijoter modérément — l'alcool doit cuire avant d'ajouter le bouillon ou il laissera un bord cru et alcooleux dans la sauce finie."
          },
          {
            "state": "Perfect",
            "description": "Volume coupé en deux, couleur approfondie à un léger or ambre, et l'arôme est moelleux et fruité avec seulement un murmure de vin.",
            "action": "Ajoutez le bouillon chaud, les herbes et renichez les jarrets."
          },
          {
            "state": "Overdone",
            "description": "Le liquide est réduit à un sirop collant et concentré sur le plancher de la casserole qui a un goût vif et sucré.",
            "action": "Ajouter immédiatement un jet de stock pour le desserrer avant de construire le liquide de brasage plus loin."
          }
        ]
      },
      "feelCue": "Penchez-vous sur le pot et respirez lentement — au moment où vos yeux cessent d'arroser des fumées d'alcool et que vous sentez seulement des fruits chauds et cuits, le vin est prêt."
    },
    {
      "nodeId": "step_4",
      "action": "Braiser",
      "inputs": [
        "wine_base",
        "ing_07",
        "ing_09",
        "ing_10"
      ],
      "outputState": "braised_shanks",
      "instructions": "Verser dans le bouillon chaud et ajouter les feuilles de laurier et le thym, les enfiler sous le liquide. Nettoyez les jarrets souillés dans le pot debout, l'os de la moelle vers le haut, ce qui maintient la moelle dans la prise pendant qu'elle s'adoucit. Le liquide devrait monter à mi-chemin. Porter à une mijoteuse nue, couvrir soigneusement, et transférer à un four à 160°C / 325°F. Braser pendant 1 heure 30 minutes à 2 heures, abaisser les jarrets une ou deux fois, jusqu'à ce que la viande soit complètement tendre et s'éloigner de l'os aux bords.",
      "visualCue": {
        "primaryTarget": "La viande s'est rétrécie de l'os, la moelle s'assied glossy et vibrant dans sa socket, et la sauce est un riche brun-ambre qui enrobe une cuillère légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est encore ferme et s'accroche étroitement à l'os; une brochette rencontre une résistance au point le plus épais. La sauce est fine et aqueuse.",
            "action": "Couvrir et retourner au four pendant 30 minutes. Collagène a besoin de temps — vous ne pouvez pas le précipiter."
          },
          {
            "state": "Perfect",
            "description": "La viande donne et commence juste à tirer de l'os aux bords, mais tient toujours ensemble comme une pièce entière. Marrow est doux et tremblant. La sauce est brillante et ambre.",
            "action": "Retirer du four. Soulevez les jarrets doucement et réduisez la sauce si nécessaire, puis terminez avec des gremolata."
          },
          {
            "state": "Overdone",
            "description": "La viande s'effondre dans la casserole et la sauce est réduite à un concentré salé et collant.",
            "action": "Retirez immédiatement les jarrets et manipulez doucement. Déposez la sauce avec une touche de bouillon chaud et goûtez soigneusement au sel avant de terminer."
          }
        ]
      },
      "feelCue": "Faites glisser un couteau fin dans le muscle le plus épais — il ne devrait pas rencontrer de résistance, planant à travers comme si à travers le beurre doux. La moelle doit être visiblement molle, miroitant dans la selle osseuse."
    },
    {
      "nodeId": "step_5",
      "action": "Faire réduire",
      "inputs": [
        "braised_shanks",
        "ing_13"
      ],
      "outputState": "finished_sauce",
      "instructions": "Soulevez soigneusement les jarrets sur une assiette chaude et couvrez-les de papier. Jeter les feuilles et le thym. Goûtez le liquide de graissage et éjaculez toute graisse flottant sur la surface. Si la sauce est fine, laissez-la mijoter à feu moyen pendant 5-10 minutes jusqu'à ce qu'elle diminue à une consistance de revêtement. Assaisonner de sel et de poivre et retirer la ficelle des jarrets.",
      "visualCue": {
        "primaryTarget": "La sauce est un brun-ambre clair avec un brillant uniforme, enrobant l'arrière d'une cuillère et tenant une ligne tracée pendant plusieurs secondes avant de se refermer lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce sort de la cuillère comme de l'eau et goûte mince, avec le vin et le stock pas encore unifié.",
            "action": "Laisser mijoter à découvert plus longtemps, en remuant occasionnellement. Goûtez toutes les quelques minutes — il se concentre rapidement à la fin."
          },
          {
            "state": "Perfect",
            "description": "Une sauce lustrée, légèrement croustillante qui sent le veau, le vin et les légumes sucrés dans un souffle complexe. La ligne tracée dans le revêtement de la cuillère tient proprement.",
            "action": "Plongez sur les jarrets et la douche avec gremolata à la table."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une glaçure collante et sucrée qui goûte principalement de sel et de sucres caramélisés, le vin étant enterré.",
            "action": "Ajouter le bouillon chaud ou arroser une cuillère à soupe à la fois jusqu'à ce que l'équilibre soit rétabli. Goûtez avant chaque ajout."
          }
        ]
      },
      "feelCue": "Plonger une cuillère et la tenir droite — la sauce devrait la mettre en douceur et tomber dans une feuille lente et stable, et ne pas couler dans des gouttes séparées. Il doit sentir tout le braise, pas aucun ingrédient."
    },
    {
      "nodeId": "step_6",
      "action": "Dresser",
      "inputs": [
        "finished_sauce",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "finished_osso_buco",
      "instructions": "Mélanger le zeste de citron finement râpé, le persil haché et l'ail haché ensemble dans un petit bol pour faire la gremolata. Il doit être combiné mais non masqué – la texture de chaque élément doit rester visible. Déposer les jarrets sur les assiettes ou le risotto de safran, déposer sur la sauce et disperser une pincée généreuse de gremolata sur chaque jarret au dernier moment. Ne pas remuer le gremolata dans le braise — sa fraîcheur est destinée à contraster la richesse.",
      "visualCue": {
        "primaryTarget": "Le vert vif et le jaune de la gremolata s'assoient vivement contre la sauce acajou foncée et la viande de veau pâle, et le parfum cru d'ail et de citron s'élève brusquement sur la riche vapeur de graissage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gremolata ajouté trop tôt ou trop peu — l'assiette se lit comme tout brun riche sans luminosité.",
            "action": "Ajouter plus de gremolata sur le dessus. Il est censé être une douche généreuse, pas un murmure."
          },
          {
            "state": "Perfect",
            "description": "Un confetti visible et parfumé de persil vert, de zeste jaune et d'ail blanc est posé sur la sauce foncée. La première bouchée apporte de la richesse suivie immédiatement d'un éclat d'agrumes et d'herbes.",
            "action": "Servir immédiatement — gremolata se flétrit rapidement une fois qu'il touche la sauce chaude."
          },
          {
            "state": "Overdone",
            "description": "Gremolata a été remué dans la sauce et a flétri, perdant toute luminosité et libérant l'ail amer dans le braise.",
            "action": "Faites un nouveau lot pour garnir — le gremolata doit continuer au tout dernier moment pour faire son travail."
          }
        ]
      },
      "feelCue": "Goûtez une pincée de gremolata d'abord – vous devriez obtenir la bouchée d'ail cru, un parfum de citron propre, et la fraîcheur herbacée du persil. Ce contraste est exactement ce dont le plat a besoin."
    }
  ]
};
