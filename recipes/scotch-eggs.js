export default {
  "repoId": "master_british_scotch_eggs_001",
  "parentRepoId": null,
  "slug": "scotch-eggs",
  "author": "ForkRecipe Kitchen",
  "title": "Oeufs écossais",
  "description": "Oeufs mous enrobés de saucisses de porc assaisonnées, panés et frits à la croûte d'acajou, la collation britannique portable parfaite avec un jaune doré fondu au centre.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "eggs",
  "tags": [
    "Œufs de coco",
    "britanniques",
    "porc",
    "frites profondes",
    "pique-nique",
    "collation",
    "huilé doux"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Œufs, pour les centres (grands, très frais)",
      "ratioValue": 6,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Viande de saucisse de porc de bonne qualité (ou saucisses, décortiquées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié porc, moitié pudding noir pour la profondeur"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Moutarde de Dijon, sel fin et poivre noir",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Moutarde anglaise pour plus de chaleur"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Sauge fraîche et thym, finement hachés ensemble",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "persil et ciboulette frais à feuilles plates"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "Mace"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine pure, pour dragage",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Oeufs battus pour le revêtement (2 œufs)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Panko chapelures (de style japonais pour une croûte maximale)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "miettes de pain séchées grossières"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile végétale pour friture profonde",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol",
        "saindoux (très traditionnel)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soft_boiled_eggs",
      "instructions": "Portez une grande casserole d'eau à ébullition. Abaissez doucement les œufs sur une cuillère — ne les déposez pas ou les coquilles craqueront. Faire bouillir pendant exactement 6 minutes pour un jaune d'une firme runny qui tiendra pendant la friture. Transférer immédiatement dans un bain de glace — un bol d'eau avec autant de glace que vous pouvez l'épargner — et laisser 5 minutes complètes. Le froid arrête la cuisson qui gâcherait le jaune. Peler soigneusement sous l'eau froide courante, à partir de l'extrémité large de la poche d'air. Les blancs seront très délicats.",
      "visualCue": {
        "primaryTarget": "Oeufs épluchés avec des blancs fermes et un jaune d'or-orange qui est fixé aux bords mais tremblant et gel-like au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est encore doux et larmes lors de la manipulation. Yolk est entièrement liquide et l'œuf ne survivra pas à être enveloppé dans la viande de saucisse.",
            "action": "À 5 minutes vous obtenez un blanc presque liquide — si cela se produit, faire frire immédiatement ou l'œuf sera impossible à envelopper. Réglez le timing à 6 min 30 sec pour les blancs plus importants."
          },
          {
            "state": "Perfect",
            "description": "Le blanc est prêt et pele sans déchirer. Le jaune est d'une couleur orangée profonde, de gel et tremble lorsque l'œuf est légèrement secoué.",
            "action": "Manipulation douce — ces œufs ont des blancs délicats qui contusent facilement. Procéder à l'emballage dans les 20 minutes, tout en restant frais."
          },
          {
            "state": "Overdone",
            "description": "Les jaunes sont jaune pâle, entièrement sertis et crayeux. Un anneau vert-gris peut se former autour du jaune à partir du soufre.",
            "action": "Un jaune entièrement cuit à l'intérieur d'un œuf écossais est comestible mais manque tout le point. La prochaine fois, bain de glace immédiatement et réduire le timing à 6 minutes exactement."
          }
        ]
      },
      "feelCue": "Tenez un oeuf pelé dans votre paume — il devrait se sentir frais et très légèrement céder quand vous fermez les doigts, comme appuyer sur un ballon d'eau. Solide tout le chemin à travers les moyens trop cuits."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "seasoned_sausage",
      "instructions": "Mélanger la viande de saucisse, la moutarde, les herbes hachées, la muscade et un assaisonnement généreux de sel et de poivre dans un bol. Mélangez avec vos mains jusqu'à ce que les assaisonnements soient entièrement incorporés et que le mélange se sente légèrement collant et cohésif — aucune stries de moutarde visible. Faire frire une petite pépite dans une poêle sèche chaude et goûter : la saucisse doit être assaisonnée avec hardiesse, herbie et légèrement moutarde. Assaisonner de façon plus agressive qu'il ne semble juste — l'extérieur pané et l'œuf blanc absorberont beaucoup de ce punch.",
      "visualCue": {
        "primaryTarget": "Une pâte à saucisses cohésive, uniformément mélangée, à la rose pâle — pas de stries visibles de moutarde ou de grumeaux d'herbes, pas de morceaux de graisse blanche séparés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moutarde jaune est clairement visible à travers le porc. Pièces de plantes non encore distribuées. Le mélange n'est pas encore cohérent.",
            "action": "Continuez à mélanger avec vos mains. La chaleur de vos mains aide la graisse à lier le mélange ensemble."
          },
          {
            "state": "Perfect",
            "description": "Complètement homogène mélange de rose pâle qui pele proprement les côtés du bol. Prend une forme lorsqu'elle est pressée. Ça sent l'herbe et la moutarde.",
            "action": "Diviser en 6 portions égales et aplatir chacune en une ronde mince avant d'envelopper les œufs."
          },
          {
            "state": "Overdone",
            "description": "Vous avez surmené la viande de saucisse chaude jusqu'à ce que la graisse commence à se séparer — le mélange semble gras et légèrement gris.",
            "action": "Refroidir au réfrigérateur pendant 15 minutes pour fermer la graisse avant d'envelopper les œufs. La viande de saucisse froide enveloppe plus propre et conserve sa forme."
          }
        ]
      },
      "feelCue": "Le mélange de saucisses doit se sentir comme du charrue ferme — souple et lisse, tenant l'impression de vos doigts sans s'y coller."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "soft_boiled_eggs",
        "seasoned_sausage"
      ],
      "outputState": "wrapped_scotch_eggs",
      "instructions": "Travaillant avec une portion de viande de saucisse à la fois, aplatissez-la dans votre paume humide dans un mince, même ovale environ 3 mm d'épaisseur. Mettre un oeuf pelé bouilli au centre. Apportez les bords de la saucisse vers le haut et autour de l'œuf, pressez doucement pour sceller le dessus. Travaillez autour de l'œuf, en veillant à ce que la couche de saucisse soit même tout autour — de fines taches s'ouvriront dans la friteuse. Roulez doucement entre vos paumes pour épater la surface et sceller toutes les coutures. La forme finie doit être un ovale uniforme sans oeuf visible en dessous.",
      "visualCue": {
        "primaryTarget": "Un ovale lisse et uniformément enveloppé de saucisse pâle sans fissures, coutures ou oeuf visible. Les six œufs sont de taille uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le saucisson a des taches minces où l'oeuf est visible à travers la viande, ou la couture supérieure n'a pas été correctement scellée. La couche de saucisse est inégale — épaisse d'un côté et fine de papier de l'autre.",
            "action": "Pincez et pressez plus de saucisses sur les petites taches. Les mains mouillées aident à empêcher le collage. Même l'épaisseur est essentielle: les taches minces sont trop cuites et éclatent alors que les sections plus épaisses sont encore crues."
          },
          {
            "state": "Perfect",
            "description": "Un boyau de saucisse ferme, lisse et uniformément épais autour de chaque œuf. Aucune fissure visible. Forme ovale uniforme sur l'ensemble 6. La couture est complètement pressée.",
            "action": "Réfrigérer pendant 15 minutes avant le panage — refroidir pousse la saucisse et rend le dragage beaucoup plus doux."
          },
          {
            "state": "Overdone",
            "description": "La couche de saucisson est si épaisse (plus de 10 mm) que le centre de la viande ne fera pas cuire au moment où l'extérieur est en or profond.",
            "action": "Re-emballer en utilisant moins de saucisses par œuf, visant une couche de 5 à 7 mm cohérente tout autour."
          }
        ]
      },
      "feelCue": "Tenez un œuf enveloppé dans votre main — il devrait se sentir dense et froid, sans taches molles où la saucisse est mince. Même la fermeté tout autour signifie même la friture."
    },
    {
      "nodeId": "step_4",
      "action": "Pain",
      "inputs": [
        "wrapped_scotch_eggs",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "breaded_scotch_eggs",
      "instructions": "Mettre en place trois bols peu profonds : un avec de la farine assaisonnée de sel et de poivre, un avec les œufs battus, un avec la chapelure panko. Travailler un à la fois, rouler fermement un œuf enveloppé dans la farine, en tapotant tout excès (un épais manteau de farine crée le pastissivité). Plongez dans l'œuf battu, laissant couler tout excès pendant 3 secondes. Roulez dans le panko, pressez fermement les miettes dans chaque surface — pas de taches nues. Pour une croûte extra-croûte, répétez la trempette d'œuf et de panko pour une deuxième couche. Sur un rack.",
      "visualCue": {
        "primaryTarget": "Un ovale entièrement, uniformément enduit sans taches nues, le panko doré s'accroche visiblement dans une couche uniforme légèrement texturée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Panko n'a pas été fermement pressé et tombe dans des patchs. Plusieurs taches nues de viande de saucisse visible. Le revêtement tombera dans l'huile chaude.",
            "action": "Appuyez plus fermement sur les miettes partout avec des paumes coupées. Reprendre l'oeuf et re-coat dans le panko toutes les zones nues avant que l'oeuf sèche."
          },
          {
            "state": "Perfect",
            "description": "Couvercle panko complet, même avec une bonne couverture et une texture visible. Pas de taches nues. L'ovale est légèrement plus lourd et plus ferme du revêtement.",
            "action": "Réfrigérer pendant 10 minutes avant de frire — un revêtement froid et set adhère mieux à l'huile chaude qu'à celle chaude et douce."
          },
          {
            "state": "Overdone",
            "description": "Un revêtement trop épais et grumeux de trop de couches d'oeufs et de miettes — 3 couches ou plus. L'extérieur semble bosselé et inégal.",
            "action": "Deux couches maximum. Un revêtement épais absorbe trop d'huile et devient mousseux avant que la saucisse soit cuite."
          }
        ]
      },
      "feelCue": "Pressez doucement l'oeuf pané — il doit se sentir rigide et entièrement enduit, sans taches molles qui laissent tomber les miettes pour exposer les saucisses."
    },
    {
      "nodeId": "step_5",
      "action": "Frire",
      "inputs": [
        "breaded_scotch_eggs",
        "ing_09"
      ],
      "outputState": "scotch_eggs",
      "instructions": "Chauffer au moins 8 cm d'huile dans un pot lourd et profond à 170°C (340°F) – une température légèrement plus froide que la température standard pour permettre à la couche épaisse de saucisse de cuire avant que les miettes ne brûlent. Abaissez soigneusement 2 ou 3 œufs à la fois (jamais de foule). Faire frire 7 à 8 minutes, tourner toutes les 90 secondes pour obtenir une couleur uniforme, jusqu'à ce que la croûte soit un brun acajou profond et que les œufs flottent librement. Transférer sur un porte-fils (pas sur des serviettes en papier) pendant 2 à 3 minutes pour laisser la cuisson au centre. Tester en appuyant : la croûte doit être rigide et non molle.",
      "visualCue": {
        "primaryTarget": "Oeufs écossais brun acajou profond flottant dans l'huile, avec un extérieur crépitant de couleur uniforme. Pas de tache pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est dorée pâle, pas encore brun foncé. L'huile a peut-être été trop froide. La couche de saucisse sera encore crue ou rose au centre.",
            "action": "Continuez à frire. Si l'huile est fraîche, les miettes absorberont la graisse et deviendront grasses avant que la saucisse soit cuite. Vérifier la température de l'huile avec une sonde."
          },
          {
            "state": "Perfect",
            "description": "Marron acajou profond, flottant, tournant librement dans l'huile. Couper après le repos : la saucisse est entièrement cuite sans rose, et le jaune est doré-orange et gelé au centre.",
            "action": "Reposez-vous sur une grille au moins 2 minutes avant de couper — le jaune continue à se poser et la croûte ferme la chaleur."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun très foncé et approche du noir. Une odeur amère et brûlée. La température de l'huile était trop élevée ou trop longue.",
            "action": "Supprimer immédiatement. L'intérieur de la saucisse et l'œuf sont probablement encore fins — éplucher les sections les plus sombres de la croûte avant de servir s'il est très brûlé."
          }
        ]
      },
      "feelCue": "Tapotez l'œuf écossais avec un joint immédiatement hors de la friteuse — il devrait sembler creux et tranchant, comme frapper sur la poterie. La croûte n'est pas croustillante."
    }
  ]
};
