export default {
  "repoId": "master_spanish_lentil_stew_001",
  "parentRepoId": null,
  "slug": "spanish-lentil-stew",
  "author": "ForkRecipe Kitchen",
  "title": "Ragoût de lentil espagnol (Lentejas Estofadas)",
  "description": "Les lentilles vertes de terre braisaient bas et lents avec des pièces de chorizo, de paprika fumé, de carottes et de pommes de terre cireuses — le bouillon devient rouge brique et soyeux, s'accrochant à chaque lentille comme un glaçage.",
  "cuisine": "Espagnol",
  "culture": "Castille",
  "category": "grains",
  "tags": [
    "lentilles",
    "Espagnol",
    "chorizo",
    "ragoût",
    "Paprika fumée",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Lentilles vertes ou brunes (rincées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Lentilles puy"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Chorizo espagnol (semi-curré, tranché 5mm)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Saucisse fumée",
        "Pancetta"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Oignon jaune (fin dés)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte (5mm)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Pommes de terre farcies (2 cm dés)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "navets"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Paprika sucrée fumée (pimentón dulce)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux + une pincée de chipotle"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Eau ou bouillon de poulet léger",
      "ratioValue": 280,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "vinaigre de sherry",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_10",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "sofrito_base",
      "instructions": "Chauffer l'huile d'olive dans un grand pot lourd (au moins 4L) à feu moyen. Ajouter les tranches de chorizo et cuire jusqu'à ce que la graisse coule et les bords se bouclent, environ 3 minutes. Ajouter l'oignon et la carotte. Cuire, en remuant occasionnellement, jusqu'à ce que l'oignon soit complètement translucide et que la carotte commence à ramollir, 8-10 minutes. L'huile doit être teinte d'orange profonde du chorizo.",
      "visualCue": {
        "primaryTarget": "L'oignon est doux et vitreux, la carotte donne légèrement. L'huile dans la poêle est de la graisse de chorizo. Il ne reste pas d'odeur d'oignon cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est toujours blanc translucide avec un parfum cru vif. La carotte ne donne pas de donner lorsqu'elle est pressée avec une cuillère.",
            "action": "Baisser la chaleur et lui donner plus de temps — précipiter la base de sofrito est la principale erreur de saveur dans le ragoût de lentilles."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est doré aux bords et parfumé. La carotte est souple. La graisse est visiblement orange.",
            "action": "Ajouter l'ail et les épices."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est bruni et collant. Les bords des carottes sont sombres. Une odeur amère.",
            "action": "Ajouter une éclaboussure d'eau pour déglacer et diminuer la chaleur avant de procéder."
          }
        ]
      },
      "feelCue": "Appuyez sur une carotte ronde contre le côté de la casserole — elle devrait donner légèrement mais pas de courge. La cuisine devrait sentir la graisse chaude de porc et la douceur d'oignon."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "sofrito_base",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "spiced_sofrito",
      "instructions": "Ajouter l'ail haché et cuire 1 minute jusqu'à odorat. Ajouter le paprika fumé et le cumin directement à l'huile, en remuant constamment. Cuire exactement 30 à 45 secondes — les épices grillées dans la graisse, déverrouillant les composés solubles dans l'huile. Ne laissez pas le paprika brûler ; il devient acride instantanément.",
      "visualCue": {
        "primaryTarget": "Le pot est uniformément rouge rouille. Les bulles de graisse et les étourdissements autour des épices. La vapeur parfumée et sucrée se lève.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices semblent crues et poudreuses, non incorporées dans la graisse. Pas de changement d'arôme grillé.",
            "action": "Remuer vigoureusement et lui donner encore 15 secondes — l'huile doit enrober et activer l'épice."
          },
          {
            "state": "Perfect",
            "description": "Paprika s'est dissout dans la graisse donnant un éclat rouillé uniforme. L'arôme passe de cru à profond et fumé.",
            "action": "Ajouter immédiatement les lentilles et le liquide."
          },
          {
            "state": "Overdone",
            "description": "Paprika sent aiguisé ou acride. Des taches sombres apparaissent sur le fond du pot.",
            "action": "Ajouter le liquide maintenant et gratter le fond. Un paprika légèrement brûlé peut être géré, mais un paprika brûlé ne peut pas."
          }
        ]
      },
      "feelCue": "Le moment de floraison d'épices est instantané — vous sentirez le passage de la poudre crue à la fumée chaude et grillée. Agissez immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_sofrito",
        "ing_01",
        "ing_09",
        "ing_11"
      ],
      "outputState": "braised_lentils",
      "instructions": "Ajouter les lentilles et les feuilles de laurier, mélanger pour enrober la graisse épicée. Verser l'eau ou le bouillon et porter à ébullition à feu vif. Écraser toute mousse qui monte. Réduisez la chaleur à une mijotée douce — de petites bulles paresseuses qui brisent la surface, et non un ébullition. Laisser mijoter à découvert pendant 25 minutes.",
      "visualCue": {
        "primaryTarget": "Une mijotée douce et régulière avec des bulles occasionnelles qui brisent la surface. Le bouillon est rouge brique et commence à épaissir. Les lentilles sont visiblement repulpées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lentilles sont toujours crayeuses au centre quand mordu. Le bouillon est mince et aqueux.",
            "action": "Continuer à mijoter et vérifier à intervalles de 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Lentilles sont juste tendres tout au long, mais tiennent toujours leur forme. Broth a réduit et enrobe légèrement une cuillère.",
            "action": "Ajouter la pomme de terre et continuer."
          },
          {
            "state": "Overdone",
            "description": "Les lentilles commencent à se diviser et à se dissoudre dans le bouillon. La texture est porride.",
            "action": "Ajouter immédiatement la pomme de terre et réduire la chaleur au réglage le plus bas afin d'éviter toute nouvelle dégradation."
          }
        ]
      },
      "feelCue": "Morcez une lentille — elle doit donner proprement sans craie sordide au centre, mais sa peau doit toujours être intacte, ne pas glisser."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "braised_lentils",
        "ing_05",
        "ing_12"
      ],
      "outputState": "finished_stew",
      "instructions": "Ajouter les dés de pomme de terre et assaisonner de sel. Continuer à mijoter pendant 20 à 25 minutes jusqu'à ce que la pomme de terre soit complètement tendre et que le bouillon s'épaississe jusqu'à ce qu'il ait une consistance molle et cohésive. Mélanger occasionnellement pour éviter de coller. Enlever les feuilles de laurier.",
      "visualCue": {
        "primaryTarget": "Les cubes de pommes de terre sont complètement mous, donnant à une cuillère. Le bouillon a été réduit à un liquide épais et brillant qui couvre simplement les solides. Le ragoût se déplace comme une masse lorsque le pot est légèrement secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pomme de terre donne une résistance au centre. Le bouillon est encore aqueux et mince.",
            "action": "Continuer à mijoter, en remuant plus souvent car il diminue."
          },
          {
            "state": "Perfect",
            "description": "La pomme de terre est complètement productive. Le bouillon est épais, brillant et rouge rouille. Lorsque vous faites glisser une cuillère à travers elle, la ligne tient un instant.",
            "action": "Terminer avec du vinaigre."
          },
          {
            "state": "Overdone",
            "description": "La pomme de terre a cassé et épaissi le bouillon en pâte lourde. Les lentilles se sont désintégrées.",
            "action": "Ajoutez une éclaboussure d'eau chaude et remuez vigoureusement — une certaine panne est bienvenue, mais la dissolution totale perd de la texture."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois sur le fond de la casserole — le ragoût devrait revenir lentement pour combler l'écart, comme le caramel chaud, ne pas se précipiter comme l'eau."
    },
    {
      "nodeId": "step_5",
      "action": "Saison",
      "inputs": [
        "finished_stew",
        "ing_13"
      ],
      "outputState": "seasoned_lentejas",
      "instructions": "Hors du feu, ajouter le vinaigre de sherry et remuer. Goûtez et ajustez le sel. Le vinaigre réveille le paprika fumé et soulève tout le ragoût de lourd à vibrant. Laisser reposer 5 minutes avant de servir — le ragoût continue à épaissir car il refroidit légèrement et est toujours meilleur le lendemain.",
      "visualCue": {
        "primaryTarget": "La couleur s'approfondit légèrement lorsqu'elle est agitée. L'odeur passe de pure fumée de viande à lumineuse et complexe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ragoût a un goût plat et unidimensionnel, malgré un assaisonnement correct.",
            "action": "Ajouter une autre cuillère à café de vinaigre de sherry et goûter à nouveau — l'acidité est le pont manquant."
          },
          {
            "state": "Perfect",
            "description": "La fumée, la richesse et l'acidité sont en équilibre. Chaque lentilles est assaisonnée.",
            "action": "Servir dans des bols profonds avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût a un goût aigu et aigre — le vinaigre domine.",
            "action": "Ajouter une pincée de sucre et une louche d'eau chaude, laisser mijoter pendant 2 minutes."
          }
        ]
      },
      "feelCue": "Le ragoût fini devrait se sentir important dans un bol — cuilleré, non versable — avec un bouillon qui enveloppe vos lèvres d'un léger brillant salé."
    }
  ]
};
