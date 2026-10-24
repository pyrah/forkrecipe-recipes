export default {
  "repoId": "master_italianamerican_spinachricottashells_001",
  "parentRepoId": null,
  "slug": "spinach-ricotta-stuffed-shells",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Coquilles farcies d'épinards et de Ricotta",
  "description": "Coquilles de pâtes jumbo farcies d'un ricotta-épinard citronné, nichées dans une sauce tomate à base d'ail et cuites sous une couverture de mozzarella brunâtre bouillonnante. Crémeux, chiant et profondément réconfortant.",
  "cuisine": "Italien-Américain",
  "culture": "Cuisine maison italo-américaine",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "pâtes",
    "ricotta",
    "épinards",
    "cuits",
    "la nourriture confortable"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "75 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Tomates concassées",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "tomates passata"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Basilic frais",
      "ratioValue": 10,
      "defaultUnit": "leaves",
      "substitutions": [
        "1 c. à thé d'origan séché"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Coquilles de pâtes Jumbo (environ 24)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Tubes de manicotte"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Ricotta de lait entier",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Epinards hachés congelés, dégelés et pressés très secs",
      "ratioValue": 280,
      "defaultUnit": "g",
      "substitutions": [
        "450 g d'épinards frais, flétris et pressés"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Oeufs gros",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Fromage dur de type parmesan (rennet végétarien), râpé",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Zeste de citron",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Nutemeg, fraîchement râpé",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Mozzarella à faible odeur, déchiquetée",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "provolone"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel casher et poivre noir",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_14"
      ],
      "outputState": "quick_tomato_sauce",
      "instructions": "Chauffer l'huile d'olive dans une casserole à feu moyen-doux. Ajouter l'ail et le poivre et cuire 1-2 minutes jusqu'à ce que l'ail soit doré. Ajouter les tomates concassées, le basilic, 1 cuillère à café de sel et le poivre. Laisser mijoter doucement 15 minutes, en remuant occasionnellement, jusqu'à ce qu'il y ait un léger épaississement. Pendant ce temps, chauffer le four à 375°F (190°C).",
      "visualCue": {
        "primaryTarget": "Une sauce légèrement épaissie, rouge brique avec un éclat d'huile aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et rouge vif, goûtant cru et teinté.",
            "action": "Laisser mijoter 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "La sauce a approfondi en couleur et enrobe une cuillère; goût doux et arrondi.",
            "action": "Retirer les tiges de basilic et réserver."
          },
          {
            "state": "Overdone",
            "description": "La sauce est épaisse et éclaboussante, collée sur le fond.",
            "action": "Incorporer 60 ml d'eau à desserrer."
          }
        ]
      },
      "feelCue": "L'ail doit sentir doux et grillé lorsque les tomates entrent — jamais pointu ni brûlé."
    },
    {
      "nodeId": "step_2",
      "action": "Feuilles",
      "inputs": [
        "ing_06",
        "ing_14"
      ],
      "outputState": "parboiled_shells",
      "instructions": "Faire bouillir les coquilles dans un grand pot d'eau salée pendant 2 minutes de moins que le temps d'emballage (habituellement de 7 à 8 minutes). Égoutter doucement, rincer à l'eau fraîche et les déposer sur un plateau huilé afin qu'ils ne collent pas ensemble. Faites cuire quelques-uns de plus — certains se déchirent toujours.",
      "visualCue": {
        "primaryTarget": "Des coquilles souples qui tiennent leur forme enroulée sans fissures.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont raides et craquent lorsqu'elles sont ouvertes.",
            "action": "Faites bouillir encore une minute."
          },
          {
            "state": "Perfect",
            "description": "Flexible et entier, toujours ferme à la morsure.",
            "action": "Égoutter, rincer et allonger."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont molles et déchirantes, s'effondrent à plat.",
            "action": "Utiliser des coquillages déchirés pour patcher le plat; cuire quelques minutes de moins."
          }
        ]
      },
      "feelCue": "Une coquille devrait s'ouvrir sous votre pouce comme une palourde molle sans se diviser à la couture."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "ricotta_spinach_filling",
      "instructions": "Dans un bol, mélanger la ricotta, les épinards pressés, les oeufs, le fromage dur râpé, le zeste de citron, la muscade, 80 g de mozzarella, le sel de 3/4 de cuillère à café et le poivre jusqu'à ce qu'il soit uniformément combiné. Goûtez avant d'ajouter l'oeuf si vous voulez vérifier l'assaisonnement.",
      "visualCue": {
        "primaryTarget": "Un remplissage épais, pâle et uniforme avec des épinards vert foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des poches blanches de ricotta et des épinards.",
            "action": "Continuer à plier jusqu'à ce qu'il soit uniformément tacheté."
          },
          {
            "state": "Perfect",
            "description": "Uniformement vert et assez épais pour tenir une cuillère droite.",
            "action": "Remplissez les coquilles."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est lâche et le liquide vert pleure.",
            "action": "Incorporer 2 cuillères à soupe de fromage râpé ou de chapelure pour le raffermir."
          }
        ]
      },
      "feelCue": "Il devrait tenir sa forme comme une épaisse purée de pommes de terre, et non s'effondrer."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "quick_tomato_sauce",
        "parboiled_shells",
        "ricotta_spinach_filling"
      ],
      "outputState": "filled_shell_dish",
      "instructions": "Étaler les deux tiers de la sauce sur le fond d'un plat de cuisson de 23 x 33 cm. Remplir chaque coquille d'environ 2 cuillerées à soupe de remplissage et les nicher dans une seule couche. Verser le reste de la sauce entre les coquilles.",
      "visualCue": {
        "primaryTarget": "Des rangées serrées de coquilles de plomberie assises dans de la sauce rouge, en remblayant les yeux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles semblent minces et sous-remplies, et les trous sont larges.",
            "action": "Ajouter plus de remplissage et pousser les coquilles plus près."
          },
          {
            "state": "Perfect",
            "description": "Les coquilles sont généreusement remplies et touchantes, sauce autour et au-dessus.",
            "action": "Garnir de fromage et cuire."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est tellement haut qu'il déborde.",
            "action": "Grattez le dos — il soufflera et s'échappera pendant la cuisson."
          }
        ]
      },
      "feelCue": "Chaque coquille doit se sentir lourde et pleine dans votre main, se refermant doucement autour du remplissage."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "filled_shell_dish",
        "ing_13"
      ],
      "outputState": "finished_stuffed_shells",
      "instructions": "Dispersez les 120 g de mozzarella restants sur le dessus. Couvrir d'une feuille d'aluminium et cuire à 375°F (190°C) pendant 20 minutes. Couvrir et cuire encore 10 à 15 minutes jusqu'à ce que le fromage soit brun tacheté et bouillonnant. Reposez-vous 10 minutes avant de servir ainsi les ensembles de remplissage.",
      "visualCue": {
        "primaryTarget": "Mozzarella fondue, blister avec des taches dorées et de la sauce bouillonnant aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage est fondu mais blanc pâle; la sauce ne bouillonne pas aux bords.",
            "action": "Cuire encore 5 minutes ou faire griller 1 à 2 minutes en regardant attentivement."
          },
          {
            "state": "Perfect",
            "description": "Le fromage est bouillonnant avec des blisters dorées; la sauce est épaisse et mijotée autour des bords.",
            "action": "Reposez 10 minutes et servez."
          },
          {
            "state": "Overdone",
            "description": "Le fromage est foncé et cuireux; les bouts de coquille sont durs et croquants.",
            "action": "Verser la sauce trop tiède au moment de servir pour adoucir les dessus."
          }
        ]
      },
      "feelCue": "Un couteau à travers le centre devrait rencontrer un remplissage chaud et à vapeur qui tient ensemble plutôt que de s'épuiser."
    }
  ]
};
