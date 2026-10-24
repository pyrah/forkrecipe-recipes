export default {
  "repoId": "master_american_whole_wheat_sandwich_001",
  "parentRepoId": null,
  "slug": "whole-wheat-sandwich-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de sandwich au blé entier",
  "description": "Un pain tendre et légèrement sucré à grains entiers construit pour le sandwich quotidien – assez doux pour compresser sous un couteau sans déchirer, avec juste assez de terre de blé entier pour vous faire sentir comme si vous aviez fait quelque chose de bien.",
  "cuisine": "Américain",
  "culture": "Chez soi",
  "category": "breads",
  "tags": [
    "blé entier",
    "sandwich",
    "tous les jours",
    "pain",
    "doux",
    "à domicile"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 982,
  "forks": 112,
  "contributors": 41,
  "license": "CC-BY-SA",
  "createdAt": "2024-12-01",
  "updatedAt": "2025-02-20",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de blé entier",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de blé blanc entier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de pain"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (105°F)",
      "ratioValue": 72,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure sèche instantanée",
      "ratioValue": 1.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop d'érable",
        "sucre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (canola ou tournesol)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre fondu"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "soaked_flour",
      "instructions": "Mélanger les deux farines avec l'eau chaude et mélanger jusqu'à ce qu'aucune farine sèche ne reste. Couvrir et se reposer pendant 20 minutes. Ce court soaker hydrate le son dans la farine de blé entier, lui donnant le temps d'absorber l'eau et adoucir les bords aigus du son qui autrement couperaient à travers le réseau de gluten et produire un pain dense et friable. Le son de blé entier est hygroscopique — pré-hydratant, il améliore considérablement la sensibilité de la miette finale.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse et uniformément humide sans taches sèches. La couleur sera moyennement brune du blé entier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La farine sèche est encore visible. Le mélange n'est pas entièrement combiné.",
            "action": "Mélanger une autre minute à la main, en veillant à ce que toute la farine soit humidifiée."
          },
          {
            "state": "Perfect",
            "description": "Pâte humide uniforme. Pas de taches sèches. Surface dure avec légèreté. Prêt pour le repos.",
            "action": "Couvrir et reposer 20 minutes avant d'ajouter la levure et d'autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé avant d'ajouter d'autres ingrédients — aucun mal réel n'a été fait à ce stade.",
            "action": "Ajouter le reste des ingrédients."
          }
        ]
      },
      "feelCue": "La farine trempée devrait être comme de l'argile fraîche et humide, dense et uniforme. Appuyez dessus et il devrait retenir une impression sans retomber du tout. Le blé entier ajoute une texture légèrement granuleuse à ce stade."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "soaked_flour",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "developed_sandwich_dough",
      "instructions": "Ajouter la levure, le miel, le sel et l'huile au mélange de farine trempée. Mélanger en bas dans un mélangeur jusqu'à ce qu'il soit combiné, puis augmenter à moyen et pétrir pendant 8-10 minutes. La pâte sera plus douce et plus collante que la pâte à pain blanche en raison du faible rendement en gluten du blé entier. Résistez à ajouter de la farine supplémentaire — une pâte légèrement collante produit un pain plus humide et plus tendre. La pâte est prête quand elle passe une vitre rugueuse : assez mince pour voir la lumière, même si elle déchire légèrement.",
      "visualCue": {
        "primaryTarget": "Une pâte douce et légèrement collante qui nettoie le bol après le pétrissage. Plus lisse qu'au début, mais encore un peu rugueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Larmes immédiatement lorsqu'elles sont tendues. Dure et inégale. Ne tiendra pas une forme de balle.",
            "action": "Continuer à pétrir sur le milieu pendant 3 à 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Douce, collante mais pas collante. Efface les côtés du bol. Attachez 3-4cm avant de déchirer — pas une fenêtre complète mais fermez.",
            "action": "Preuve dans un bol huilé jusqu'à doublé, environ 60 à 90 minutes."
          },
          {
            "state": "Overdone",
            "description": "Je me bats contre le crochet. Ça fait chaud.",
            "action": "Reposez-vous 10 minutes et continuez."
          }
        ]
      },
      "feelCue": "La pâte sandwiche au blé entier devrait être plus douce et légèrement plus collante que la pâte à pain blanche pure, comme du mastic doux avec un soupçon de grain du son. Il devrait coller légèrement à votre main quand vous le touchez mais relâchez-le proprement."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "developed_sandwich_dough"
      ],
      "outputState": "shaped_loaf",
      "instructions": "Après avoir doublé, frappez la pâte et tournez sur une surface légèrement farinée. Plongez dans un rectangle à peu près la largeur de votre poêle à pain 9×5. Plier les deux bouts courts vers le centre, puis rouler la pâte loin de vous dans un cylindre serré. Pincez la couture fermée. Placer le bord de la couture dans une casserole graissée 9×5. Le cylindre doit remplir la casserole de 60 à 70 %. Couvrez et étalez jusqu'à ce que la couronne s'élève de 2 à 3 cm au-dessus de la jante, environ 45 à 60 minutes à 75°F.",
      "visualCue": {
        "primaryTarget": "La couronne de pâte est située de 2 à 3 cm au-dessus du bord de la poêle, légèrement bombée et aérée lorsqu'elle est secouée. Lorsqu'il est poché, le tiret ressort à mi-chemin en 3 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couronne toujours à niveau avec ou sous la jante. La toux est dense quand elle est jiggée.",
            "action": "Continuer la mise à l'épreuve dans un endroit chaud, couvert."
          },
          {
            "state": "Perfect",
            "description": "Couronne bombée 2–3cm au-dessus de la jante. Un coup d'air. Poke revient lentement.",
            "action": "Cuire à 375°F pendant 30 à 35 minutes."
          },
          {
            "state": "Overdone",
            "description": "Crown regardant 5 + cm au-dessus de la jante, se collant légèrement sur les côtés.",
            "action": "Faites cuire immédiatement. La croûte dômera moins dans le four, mais le pain sera encore bien."
          }
        ]
      },
      "feelCue": "Avant la cuisson, le pain éprouvé doit se sentir comme un ballon d'eau très plein — tendu et aéré, donnant au moindre toucher mais tenant sa forme globale. La surface de la pâte doit se sentir sèche et chaude à partir de l'épreuve."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "shaped_loaf"
      ],
      "outputState": "finished_sandwich_bread",
      "instructions": "Cuire au four à 375°F (190°C) pendant 30 à 35 minutes jusqu'à ce que le dessus soit doré et que la température interne atteigne 190 à 195°F (88 à 90°C). Un thermomètre à lecture instantanée est le test le plus fiable. Laisser refroidir dans la casserole pendant 10 minutes, puis démolder et refroidir complètement sur un support de fil — au moins 1 heure. La miette se met à refroidir; la coupe précoce produit une texture gommante et compresse les tranches de façon permanente.",
      "visualCue": {
        "primaryTarget": "Une croûte bien dorée, légèrement retirée des côtés de la poêle. Température intérieure 190-195°F. Des robinets creux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Haut pâle. Température intérieure inférieure à 185°F. Le pain semble dense quand il est tapé. Peut s'effondrer légèrement lorsqu'il est retiré de la poêle.",
            "action": "Retourner au four 8 minutes de plus, tenter avec du papier pour éviter un brunissement supplémentaire."
          },
          {
            "state": "Perfect",
            "description": "Dôme d'or profond. Interne 190°F. Un coup creux. En tranches après refroidissement, la miette est tendre et légèrement humide sans être gommée.",
            "action": "Refroidir complètement sur une grille avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Haut brun foncé, côtés ambrés profonds. Interne sur 200°F. La croûte peut être sèche.",
            "action": "Refroidir et couper — il fera un excellent toast."
          }
        ]
      },
      "feelCue": "Après avoir refroidi pendant une heure, le pain doit se sentir léger et printanier lorsqu'il est pressé doucement des côtés. La croûte sera ferme mais pas dure. Lorsqu'elle est coupée, chaque pièce doit tenir sa forme sans s'effondrer ni se comprimer — l'épreuve d'un grand pain sandwich."
    }
  ]
};
