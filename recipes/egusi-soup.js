export default {
  "repoId": "master_nigerian_egusi_soup_001",
  "parentRepoId": null,
  "slug": "egusi-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe Egusi",
  "description": "Les graines de melon moulues frisent dans l'huile de palme jusqu'à ce qu'elles sentent les noix grillées, puis fondent dans un épais ragoût salé, fileté de verts amers et approfondi par une base en couches d'umami de poisson de stock, d'écrevisse et de toute viande qui remplit la maison — une soupe qui est simultanément un ragoût, une sauce et un repas.",
  "cuisine": "Nigérian",
  "culture": "Nigérian",
  "category": "proteins",
  "tags": [
    "nigérien",
    "graines de melon",
    "Verts",
    "huile de palme",
    "ragoût"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 2100,
  "forks": 180,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-03",
  "updatedAt": "2025-08-14",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Egusi moulu (semences de melon), grossièrement mélangé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de citrouille moulue — profil de graisse similaire, saveur plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile de palme rouge",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "huile végétale (perte la couleur et l'authenticité de la saveur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Viandes assorties ou poissons (bœuf, shaki, poisson de stock)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "poulet",
        "poisson fumé seul"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Écrevisse au sol (crevettes séchées fumées)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de crevette (utiliser 1/3 de la quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Tomates et poivrons de bonnet à scotch, mélangés",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates en conserve avec habanero"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles amères ou épinards, lavés et déchiquetés",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "chou",
        "épinards congelés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel et cubes assaisonnement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Base de viande cuite",
      "inputs": [
        "ing_03",
        "ing_07"
      ],
      "outputState": "cooked_meat_stock",
      "instructions": "Assaisonner toutes les viandes avec du sel et des cubes d'assaisonnement. Si vous utilisez du poisson de stock, réhydratez-le dans de l'eau chaude pendant 30 minutes à l'avance. Faire cuire les viandes assorties dans une casserole avec une petite quantité d'eau à feu moyen jusqu'à tendreté, environ 20 à 30 minutes selon les coupes. Cela crée à la fois de la viande cuite et un stock concentré et salé qui formera la base liquide de la soupe. Réservez le matériel de cuisine.",
      "visualCue": {
        "primaryTarget": "La viande est tendre et se sépare avec une résistance minimale. Le stock est réduit à un liquide riche, nuageux et profondément coloré avec des gouttelettes de graisse visibles à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est ferme et mâcheuse. Le stock est pâle et mince. Les protéines dures ne s'adouciront pas une fois ajoutées à la base de l'egusi.",
            "action": "Continuer à mijoter avec un couvercle allumé jusqu'à ce qu'une fourche glisse et se tord sans résistance."
          },
          {
            "state": "Perfect",
            "description": "La viande est tendre partout. Le stock est richement salé et a un bon corps — une petite quantité de gels légèrement lorsqu'il est tombé sur une surface froide.",
            "action": "Retirer du feu, réserver. Faites frire l'égusi."
          },
          {
            "state": "Overdone",
            "description": "La viande tombe en morceaux. Le stock a trop diminué et est très sombre et concentré.",
            "action": "Enlevez la viande immédiatement. Ajouter de l'eau au stock concentré pour restaurer le volume avant d'ajouter à l'égusi."
          }
        ]
      },
      "feelCue": "Pressez un morceau de bœuf cuit entre vos doigts — il devrait se compresser complètement et se sentir céder tout au long, et non s'étendre au centre. Si ça revient, il lui faut plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Fry egusi dans l'huile de palme",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "fried_egusi_paste",
      "instructions": "Chauffer l'huile de palme dans un grand pot à feu moyen jusqu'à ce qu'elle liquéfie et mijote — ne la laissez pas fumer. Ajouter la purée de tomate et de poivre mélangée et faire frire pendant 10 minutes, en remuant, jusqu'à ce que l'odeur brute de tomate soit disparue et que l'huile recommence à se séparer. Ajouter l'égusi moulu dans une couche uniforme sur la base de la tomate. Ne pas remuer immédiatement — laissez-le frire et régler pendant 3-4 minutes. Puis remuer pour mélanger et continuer à frire, en remuant régulièrement, pendant 8-10 minutes jusqu'à ce que l'egusi sente la noix et a tourné de jaune pâle à une couleur dorée plus profonde.",
      "visualCue": {
        "primaryTarget": "Egusi est passé de miettes pâles et sèches à une masse cohésive et dorée qui tient ensemble lorsqu'elle est pressée avec la cuillère. Le mélange sent les noix grillées et la tomate épicée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Egusi est encore jaune pâle et friable avec une saveur crue de noix légèrement amère. Le mélange est sec et farineux en texture.",
            "action": "Continuer à frire et à remuer. L'égusi brut rend la soupe amère et amère — cette étape n'est pas négociable."
          },
          {
            "state": "Perfect",
            "description": "Egusi est doré, cohésif et sent les graines chaudes de melon grillé et la tomate fumée. L'huile de palme est visiblement rouge-orange, se séparant aux bords.",
            "action": "Ajouter l'écrevisse, la viande cuite et le stock de viande. Mélanger et mijoter."
          },
          {
            "state": "Overdone",
            "description": "Egusi est brun foncé avec une odeur de noix amère. Petites taches noires visibles. L'huile de palme fume.",
            "action": "Ajouter le bouillon de viande immédiatement pour arrêter la cuisson. L'égusi aura un goût amer mais la soupe peut encore être sauvée avec des assaisonnements supplémentaires et des écrevisses."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité du mélange d'égusi entre vos doigts — il devrait se sentir comme un repas d'amande chaud, légèrement gras, tenant sa forme brièvement avant de s'effondrer. S'il est poudreux et sec, il n'a pas encore absorbé assez de graisse."
    },
    {
      "nodeId": "step_3",
      "action": "Faire mijoter le ragoût",
      "inputs": [
        "fried_egusi_paste",
        "ing_04",
        "cooked_meat_stock"
      ],
      "outputState": "simmered_egusi",
      "instructions": "Ajouter l'écrevisse moulue au mélange d'égusi, en remuant bien. Ajouter les viandes cuites et verser suffisamment de viande réservée pour apporter la soupe à votre consistance souhaitée — la soupe d'égusi doit être épaisse, non aqueuse. Mélanger soigneusement tous les éléments. Porter à mijoter doucement et cuire en remuant occasionnellement pendant 10 à 12 minutes. L'egusi absorbera le liquide et gonflera légèrement, devenant riche et épais. Goûter et ajuster le sel et l'assaisonnement.",
      "visualCue": {
        "primaryTarget": "La soupe est assez épaisse qu'une cuillère traînée à travers la surface laisse un sentier qui se remplit lentement sur 3-4 secondes. Rouge orangé profond avec des égusi visibles, de la viande et des écrevisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe est encore mince et aqueuse avec des piscines d'huile séparées visibles à la surface. L'egusi n'a pas encore complètement absorbé le liquide.",
            "action": "Continuer à mijoter à découvert, en remuant toutes les quelques minutes. La soupe s'épaissira significativement lorsque l'égusi continuera à s'hydrater et à cuire."
          },
          {
            "state": "Perfect",
            "description": "Un ragoût épais et cohésif qui se déplace en une masse lorsque le pot est incliné. Profondément salé et épicé. L'egusi a complètement fusionné avec le stock en une consistance riche, semblable à une sauce.",
            "action": "Ajouter les feuilles vertes pour la dernière étape."
          },
          {
            "state": "Overdone",
            "description": "La soupe est devenue trop épaisse et est collée au fond avec chaque remuement, commençant à brûler.",
            "action": "Ajouter une éclaboussure d'eau ou de bouillon, réduire la chaleur au réglage le plus bas et remuer en continu pendant 1 minute."
          }
        ]
      },
      "feelCue": "L'arôme doit être profondément salé: noix grillées, écrevisses fumées et poivre chaud. Goûtez une petite cuillère: la saveur doit être riche et stratifiée, pas une dimension chaude ou une dimension salée."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer avec les verts",
      "inputs": [
        "simmered_egusi",
        "ing_06"
      ],
      "outputState": "finished_egusi_soup",
      "instructions": "Ajouter la feuille déchiquetée amère ou les épinards dans le pot et remuer pour mélanger. Cuire 3 à 5 minutes pour les épinards ou jusqu'à 8 minutes pour les feuilles amères, ce qui profite d'une cuisson légèrement plus longue pour assouplir son bord. Les verts doivent rester vibrants, flétris, mais pas ternes. Faire un dernier contrôle d'assaisonnement: la soupe doit être salissante (elle est servie sur l'igname ou le fufu, qui ont besoin de sauces bien assaisonnées). Servir dans des bols avec de l'igname ou de l'éba.",
      "visualCue": {
        "primaryTarget": "Les verts sont flétris mais vert vif, répartis dans l'épais ragoût rouge-orange. Le pot ressemble à un vitrail — rouge chaud avec des fils vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts sont encore bruts, brillants et raides, assis sur le dessus plutôt que intégrés. La feuille amère brute a un bord dur et médicinal.",
            "action": "Incorporer et couvrir encore 3 minutes. La vapeur aidera à flétrir les verts plus uniformément."
          },
          {
            "state": "Perfect",
            "description": "Les verts sont entièrement flétris et uniformément distribués, conservant une couleur vibrante. La soupe se déplace comme une masse épaisse et cohésive. Le goût est équilibré : salé, épicé, avec une légère amertume végétale.",
            "action": "Servir chaud sur l'igname piquée."
          },
          {
            "state": "Overdone",
            "description": "Les verts ont changé en khaki-olive et ont perdu leur couleur. Ils ont une odeur trop cuite, légèrement sulfureuse. La soupe est terne.",
            "action": "Servir immédiatement. Pour les futurs lots, ajouter les verts dans les 3 dernières minutes seulement."
          }
        ]
      },
      "feelCue": "Soupière d'egusi parfaite qui se glisse dans des feuilles épaisses et lentes plutôt que de couler ou de verser, enrober généreusement la cuillère de chaque ascenseur."
    }
  ]
};
