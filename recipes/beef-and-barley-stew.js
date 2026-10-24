export default {
  "repoId": "master_american_beefandbarleystew_001",
  "parentRepoId": null,
  "slug": "beef-and-barley-stew",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Boeuf et ragoût d'orge",
  "description": "Chuck très bruni braisé lentement avec des champignons, des carottes, et du thym jusqu'à ce qu'il donne à une cuillère, la sauce foncée épaissie par de l'orge perlée à croquer.",
  "cuisine": "Américain",
  "culture": "Cuisine à domicile du Midwestern",
  "category": "proteins",
  "tags": [
    "cuisine maison",
    "braise",
    "ragoût",
    "congélateur",
    "boeuf",
    "orge",
    "gros lot"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
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
      "name": "Bouchée de boeuf, parée et coupée en cubes de 4 cm",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "côte courte désossée",
        "Shin de bœuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher, divisé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "suif de bœuf"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons jaunes en dés",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Céleri en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Champignons crémini, quartiers",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "champignons bouton"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Glutamate",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Stock de boeuf, faible teneur en sodium",
      "ratioValue": 2000,
      "defaultUnit": "ml",
      "substitutions": [
        "moitié stock, moitié bière noire"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Umami",
      "name": "sauce Worcestershire",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1 c. à thé de thym séché"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Feuilles de laurier séchées",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Starch",
      "name": "Oxyde de perle, rincé",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "farro (circulation similaire)"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Base",
      "name": "Carottes, coupées en morceaux de 2 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "panais"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Garnish",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "browned_beef",
      "instructions": "Patter le bœuf très sec et assaisonner avec 10 g de sel et de poivre. Chauffer 30 ml d'huile dans un four hollandais lourd de 6 à 7 litres à feu moyen-vif jusqu'à ce qu'il mijote. Faire revenir le boeuf en 3 lots, laissant de l'espace entre les cubes, de 3 à 4 minutes de chaque côté pour 2 côtés, jusqu'à ce que la croûte soit profonde. Transférer dans un bol. Ne nettoie pas le pot.",
      "visualCue": {
        "primaryTarget": "Croûtes brun-châtaigne sur au moins deux faces de chaque cube et un fond foncé et collant recouvrant le plancher du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est gris et cuit à la vapeur dans ses propres jus; peu de formes affectueuses.",
            "action": "Le pot est surpeuplé ou pas assez chaud. Cuire en petits lots et laisser évaporer le liquide avant de tourner."
          },
          {
            "state": "Perfect",
            "description": "La croûte d'acajou profonde qui se libère par elle-même, le caramel est brun rougeâtre et sent le rôti.",
            "action": "Déplacez-vous vers le lot suivant; ajoutez une éclaboussure d'huile si le pot semble sec."
          },
          {
            "state": "Overdone",
            "description": "Le Fonds est noir dans des patchs avec une odeur amère et acride.",
            "action": "Baissez la chaleur. Déglacer avec un peu d'eau, de raclure et de goût — jeter ce liquide s'il est amer."
          }
        ]
      },
      "feelCue": "Un cube devrait s'éloigner du pot avec une pression de pinces légères; s'il déchire ou s'accroche, il a besoin d'une autre minute."
    },
    {
      "nodeId": "step_2",
      "action": "Construire la base du ragoût",
      "inputs": [
        "browned_beef",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "stew_base",
      "instructions": "Réduire le feu à moyen et ajouter les 15 ml restants d'huile, d'oignons, de céleri et de champignons. Cuire de 8 à 10 minutes, en grattant les légumes car ils dégagent de l'humidité, jusqu'à ce que les champignons soient dorés et que le liquide s'évapore. Ajouter l'ail et la pâte de tomate et cuire 2 minutes en remuant, jusqu'à ce que la pâte s'assombrisse en brique rouge.",
      "visualCue": {
        "primaryTarget": "Des oignons doux, des champignons bronzés et de la pâte de tomate foncés à la rouille, tous accrochés à un plancher presque sec.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Champignons pâles et mouillés; pâte de tomate rouge vif et goût cru.",
            "action": "Continuez à cuisiner jusqu'à ce que la poêle se calme et que la pâte s'assombrisse."
          },
          {
            "state": "Perfect",
            "description": "Pot grésille plutôt que bulles; la pâte est de couleur brique et sent sucré-savoureux.",
            "action": "Ajouter le liquide."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomates est brun-noir et collante.",
            "action": "Déglacer immédiatement; le caramel léger est fin, le charbon ne l'est pas."
          }
        ]
      },
      "feelCue": "Le son passe d'une bulle humide à un étourdissement sec quand le liquide de champignons a cuit."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "stew_base",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "braised_beef",
      "instructions": "Chauffer le four à 325°F (165°C). Verser dans le stock et Worcestershire, racler le pot propre. Retourner le bœuf et ses jus, ajouter le thym et la baie, et faire mijoter sur la cuisinière. Couvrir et braiser au four 1 heure 30 minutes. (Alternative à l'étuve : la plus basse mijoter avec le couvercle légèrement ajar, en remuant toutes les 20 minutes.)",
      "visualCue": {
        "primaryTarget": "Un liquide brun foncé à peine tremblant avec des cubes de bœuf qui ont commencé à se détendre et arrondi aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Boeuf encore serré et bon marché; liquide mince et dégustation principalement de stock.",
            "action": "Continuez à braquer en tranches de 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Un cube donne à la pression ferme de fourche mais ne s'effondre pas encore – il finira avec l'orge.",
            "action": "Ajouter l'orge et les carottes."
          },
          {
            "state": "Overdone",
            "description": "Le liquide est tombé sous la viande et la couche supérieure sèche.",
            "action": "Garnir de bouillon chaud ou d'eau pour couvrir."
          }
        ]
      },
      "feelCue": "Pincez un cube avec des pinces : il devrait donner comme une éponge ferme plutôt qu'une boule de caoutchouc."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "braised_beef",
        "ing_14",
        "ing_15"
      ],
      "outputState": "beef_barley_stew",
      "instructions": "Incorporer l'orge, les carottes et le sel restant de 5 g, en veillant à ce que l'orge soit immergée (ajouter 250 ml d'eau si le liquide se trouve sous les solides). Couvrir et retourner au four pendant 45 à 50 minutes, en remuant une fois, jusqu'à ce que l'orge soit tendre et tendre et que le boeuf soit tendre.",
      "visualCue": {
        "primaryTarget": "Graines d'orge enroulées, translucides, suspendues dans une sauce qui enrobe la viande; carottes tendres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'orge a un noyau blanc dur; ragoût encore soupeux.",
            "action": "Retourner au four 10-15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Orge tendre à croquer sans centre crayeux; le boeuf se sépare du côté de la fourchette; la sauce est légèrement épaissie.",
            "action": "Finition et saison."
          },
          {
            "state": "Overdone",
            "description": "L'orge a bu tout le liquide et le ragoût est piquant, collé au fond.",
            "action": "Loyer avec du bouillon chaud ou de l'eau jusqu'à ce qu'il coule d'une cuillère."
          }
        ]
      },
      "feelCue": "La viande de boeuf doit être déchiquetée lorsqu'elle est pressée contre la paroi du pot avec une cuillère."
    },
    {
      "nodeId": "step_5",
      "action": "Saison et fin",
      "inputs": [
        "beef_barley_stew",
        "ing_02",
        "ing_16"
      ],
      "outputState": "finished_beef_barley_stew",
      "instructions": "Enlevez les tiges de thym et les feuilles de laurier. Excédent de graisse de la surface. Goûtez et ajustez le sel et le poivre; dispersez avec du persil. Pour congeler : refroidir dans des récipients peu profonds et réfrigérer dans les 2 heures; congeler jusqu'à 3 mois. L'orge n'arrête pas d'absorber le liquide dans l'entreposage, alors ajoutez 150 à 250 ml d'eau ou de stock par litre lorsqu'il est réchauffé jusqu'à ce qu'il mijote régulièrement.",
      "visualCue": {
        "primaryTarget": "Un ragoût brillant, enrobé de cuillères sans piscine de gras orange sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lécher la graisse à la surface; goût plat.",
            "action": "Skim avec une louche et assaisonner en petites pinces."
          },
          {
            "state": "Perfect",
            "description": "Une sauce riche et propre; le boeuf, l'orge et les carottes sont distribués uniformément.",
            "action": "Servir avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "Sursalé après une longue réduction.",
            "action": "Ajouter de l'eau non salée et une poignée d'orge ou de pommes de terre cuites supplémentaires pour rééquilibrer."
          }
        ]
      },
      "feelCue": "Une cuillère doit se sentir pleine dans la bouche — la sauce s'accroche légèrement aux lèvres de l'amidon d'orge et de la gélatine."
    }
  ]
};
