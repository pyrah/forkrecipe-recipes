export default {
  "repoId": "master_indian_saag_paneer_001",
  "parentRepoId": null,
  "slug": "saag-paneer",
  "author": "ForkRecipe Kitchen",
  "title": "Saag Paneer",
  "description": "Les épinards blanchis se mélangent dans une purée de velours foncé, mijotés de gingembre, d'ail et d'épices entières jusqu'à ce qu'il devienne une sauce riche et profondément savore, puis pliés avec des cubes dorés de pane fraîche qui tiennent leur forme contre le vert soyeux. Le plat fini a le goût de la forêt et du foyer en même temps.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "vegetables",
  "tags": [
    "épinards",
    "panneau",
    "végétarien",
    "punjabi",
    "curry",
    "Verts"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Epinards frais (palak), lavés, tiges durs enlevées",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Verts moutarde (sarson) pour un profil plus amer",
        "épinards congelés (dégelés et pressés)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Paneer, coupé en cubes de 2 cm",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "tofu ferme",
        "Halloween"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Ghee ou huile neutre",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Graines de cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune, finement haché",
      "ratioValue": 1,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé (1 po)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poudre de chili rouge cachemiri",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "cayenne (utiliser la moitié du montant)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Crème lourde ou yogourt plein gras",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "crème de coco"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Liquid",
      "name": "Eau (pour blanchir)",
      "ratioValue": 2,
      "defaultUnit": "L",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_15"
      ],
      "outputState": "blanched_spinach",
      "instructions": "Apportez une grande casserole d'eau non salée à un ébullition féroce. Ajouter tous les épinards à la fois — il va sembler un volume énorme, mais il s'effondre considérablement. Poussez les épinards sous la surface et faites cuire pendant 2 minutes exactement : pas plus, ou il perdra sa couleur vert vif et tournera un vert-armée boueux. Drainez immédiatement et plongez dans un bol d'eau glacée, en tenant 1 minute pour arrêter toute cuisson. Soulevez les épinards de l'eau froide et pressez fermement avec les deux mains pour retirer le plus de liquide possible – l'excès d'eau va réduire la sauce finale. Transférer dans un mélangeur et blitz jusqu'à ce qu'il soit complètement lisse, environ 2 minutes, en ajoutant seulement 2 à 3 cuillerées à soupe de l'eau blanchissante si la lame lutte. La purée doit être verte électrique et versable.",
      "visualCue": {
        "primaryTarget": "Une purée d'épinards brillamment vive, presque vert néon, sans fibre visible. La couleur devrait ressembler à de l'herbe fraîche plutôt que des herbes séchées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée est encore fibreuse et molle. Le mélangeur a laissé des bouts à cordes. La couleur est bonne mais la texture est grossière.",
            "action": "Continuer à mélanger en haut. Ajouter de l'eau une cuillère à soupe à la fois pour faire bouger les lames."
          },
          {
            "state": "Perfect",
            "description": "Silk-smooth, vert électrique, verse dans un ruban stable. Ça sent l'herbe et le frais, presque sucré.",
            "action": "Réserver et commencer la base du masala."
          },
          {
            "state": "Overdone",
            "description": "Les épinards n'ont pas été immédiatement choqués dans l'eau froide et sont passés d'un vert vif à un vert gris-vert. La couleur oxydée est permanente.",
            "action": "Procéder — la saveur n'est pas affectée. Une pincée de bicarbonate de soude dans le pot la prochaine fois aidera à préserver la couleur."
          }
        ]
      },
      "feelCue": "Après avoir serré, la boule d'épinards devrait se sentir presque sèche entre vos paumes — si l'eau coule librement dans vos doigts, continuez à presser. La cuisine sent les légumes chauds et frais, propres et légèrement minéraux."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "masala_base",
      "instructions": "Chauffer le ghee dans une poêle large et lourde à feu moyen-vif. Quand il mijote, ajoutez les graines de cumin et laissez-les craqueler et s'assombrir pendant 20 secondes. Ajouter l'oignon et faire cuire, en remuant fréquemment, pendant 10-12 minutes jusqu'à ce qu'il soit profondément doré et caramélisé aux bords — ne pas précipiter cette étape; la douceur de l'oignon correctement doré forme l'épine dorsale de saveur de l'ensemble du plat. Ajouter l'ail et le gingembre et cuire encore 2 minutes jusqu'à ce que l'odeur brute disparaisse et que le mélange devienne une pâte dorée pâle. Ajouter la coriandre moulue, le cumin, la poudre de chili et le curcuma; remuer constamment pendant 90 secondes, faire griller les épices moulues dans la graisse sans les laisser brûler. Le masala est prêt quand la graisse se sépare visiblement autour des bords du mélange d'épices — le signal d'un vieux cuisinier appelé « bhunoing » que la crue a été chassée.",
      "visualCue": {
        "primaryTarget": "Une pâte ambre profonde d'oignon, de gingembre et d'ail avec un anneau de ghe doré clair se séparant de la masse d'épices solides autour des bords de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont translucides et pâles, à peine ramollis. Pas encore de séparation des graisses. L'odeur d'épices est vive et crue, comme assaisonnement en poudre plutôt que de la profondeur cuite.",
            "action": "Abaissez la chaleur et continuez la cuisson. Rushing l'oignon est l'erreur la plus courante dans la cuisine indienne."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont un or tawny profond, presque jammy. Les piscines de graisse visiblement autour des bords. L'odeur est moelleuse, grillée et profondément savoureuse — rien de brut ou de dur.",
            "action": "Ajouter la purée d'épinards."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun foncé et amers. Les épices commencent à fumer et à sentir l'acride. La masse est collée à la casserole.",
            "action": "Déglacer avec une cuillère à soupe d'eau pour arrêter le brunissement. L'amertume sera en partie masquée par les épinards, mais utilisez une chaleur plus douce la prochaine fois."
          }
        ]
      },
      "feelCue": "Pressez une cuillère en bois dans la masse d'oignon — elle devrait produire sans résistance, comme presser à travers de l'argile molle. L'arôme passe de vif et oignon-avant à doux, grillé, et complexe à mesure que la caramélisation progresse."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "masala_base",
        "blanched_spinach",
        "ing_14",
        "ing_12",
        "ing_13"
      ],
      "outputState": "saag_sauce",
      "instructions": "Verser la purée d'épinards dans la base chaude du masala — elle va saper et vapeur de façon spectaculaire. Mélanger soigneusement et réduire le feu à moyen-doux. Laisser mijoter à découvert de 8 à 10 minutes, en remuant occasionnellement, jusqu'à ce que le saag s'assombrisse légèrement de son vert électrique à un vert forestier plus riche et s'épaississe à la consistance d'une sauce versable. Assaisonner de sel. Incorporer le garam masala et tourner dans la crème ou le yogourt — la laiterie tempère la netteté et ajoute le corps. Si vous utilisez du yogourt, réduisez la chaleur au minimum avant de l'ajouter pour éviter les courbures. La sauce doit maintenant goûter assaisonnée, chaudement épicée et riche sans lourdeur.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse et foncée vert forêt qui enveloppe l'arrière d'une cuillère et tient sa forme lorsque vous faites glisser un doigt à travers elle. De petites piscines de ghee sont visibles à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore très fine et vert pâle, les épinards crus et le masala non encore intégrés. La saveur est plate et végétale.",
            "action": "Continuer à mijoter — l'intégration prend du temps. La couleur doit s'approfondir visiblement pendant 5 minutes de cuisson."
          },
          {
            "state": "Perfect",
            "description": "Épais, brillant, et profondément aromatisé. Enrober la cuillère dans une couche veloutée. La couleur est une forêt riche et saturée de pailles dorées.",
            "action": "Ajouter le panneau."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à une pâte très épaisse et crache. La couleur est allée vers un brun-vert boueux.",
            "action": "Ajouter l'eau chaude 2 cuillères à soupe à la fois jusqu'à ce que la sauce se détache à une consistance versable. Goûtez au sel."
          }
        ]
      },
      "feelCue": "La sauce doit sentir la couche et complexe — vert et herbacé des épinards, grillé des épices, doux de la crème. Il devrait s'accrocher à une cuillère dans une feuille, pas couler comme de l'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Saisir",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "golden_paneer",
      "instructions": "Dans une petite poêle séparée, faire chauffer 1 cuillerée à soupe à feu moyen-vif. Ajouter les cubes de paneer en une seule couche — ils doivent étourdir immédiatement au contact de la graisse. Laissez-les reposer pendant 90 secondes jusqu'à ce que la face inférieure soit dorée, puis retournez chaque cube et répétez sur le côté adjacent. Vous ne faites que brunir la surface — l'intérieur de la vitre n'a pas besoin de cuisiner, seulement l'extérieur a besoin de couleur et une légère croûte pour l'aider à tenir sa forme dans la sauce. Travaillez en lots si votre poêle est petit. Égoutter sur une serviette en papier.",
      "visualCue": {
        "primaryTarget": "cubes avec au moins deux faces dorées. La croûte doit être visiblement réglée et légèrement plus foncée que l'intérieur blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paneer est encore blanc pur sur tous les visages, doux, et se cassent lorsqu'il est déplacé. N'a développé aucune couleur.",
            "action": "Augmenter la chaleur. La poêle doit être sèche (porter avec une serviette en papier) pour que la surface brunisse plutôt que la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Deux ou trois visages ont une croûte dorée légèrement croquante. L'intérieur est encore blanc et ferme. Les cubes tiennent leur forme quand ils sont bouchés.",
            "action": "Ajouter immédiatement à la sauce saag — ajoutez-les du feu si la sauce est très chaude pour éviter une rupture."
          },
          {
            "state": "Overdone",
            "description": "Paneer est profondément brun et est devenu caoutchouteux et dur. La croûte est dure.",
            "action": "Ajouter le paneer à la sauce maintenant et laisser mijoter pendant 5 minutes, l'humidité réhydrate légèrement la surface."
          }
        ]
      },
      "feelCue": "Un cube de paneer bien ciré se sent ferme et printanier lorsqu'il est pressé, pas doux et s'effondre. La surface a un faible rendement, comme le pressage d'une gomme en caoutchouc ferme, et les odeurs de cuisine des produits laitiers brunis — chauds, légèrement sucrés, noix."
    },
    {
      "nodeId": "step_5",
      "action": "Terminer",
      "inputs": [
        "saag_sauce",
        "golden_paneer"
      ],
      "outputState": "finished_saag_paneer",
      "instructions": "Plier délicatement les cubes dorés dans la sauce saag chaude, en veillant à ne pas casser les cubes. Faire baisser le feu et laisser le paneer se réchauffer dans la sauce pendant 3-4 minutes, ce qui permet au fromage d'absorber la sauce épicée à la surface tout en restant ferme au centre. Ne faites pas bouillir la sauce après avoir ajouté le paneer, car le feu élevé la rendra caoutchouteuse. Goûtez le plat final pour le sel. Servir avec un dernier tourbillon de crème ou un petit bouton de beurre sur le dessus, accompagné de naan chaud, paratha, ou basmati vapeur.",
      "visualCue": {
        "primaryTarget": "Les cubes de paneer or ivoire bercés dans une sauce veloutée et vert foncé. Chaque cube conserve sa forme et a une croûte dorée distincte visible où il a été coulé. La sauce enrobe chaque cube sans les noyer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de paneer sont encore froids au centre et n'ont absorbé aucune couleur ou saveur de la sauce. Le plat semble assemblé plutôt que cohérent.",
            "action": "Continuer à feu doux pendant 3-4 minutes de plus. Couvrir avec un couvercle pour emprisonner la vapeur et réchauffer doucement le fromage."
          },
          {
            "state": "Perfect",
            "description": "La poêle est chauffée à travers, l'extérieur a pris une teinte vert pâle où la sauce a été absorbée, et chaque cube est structurellement intact. La sauce et le fromage sont unifiés sur la cuillère.",
            "action": "Servir immédiatement avant de serrer le fromage."
          },
          {
            "state": "Overdone",
            "description": "Paneer est devenu caoutchouteux par une chaleur prolongée. Les cubes rétrécissent et pleurent le liquide dans la sauce, l'éclaircissant.",
            "action": "Retirer immédiatement du feu. Le plat est toujours bon — servir rapidement avant que le fromage se resserre davantage."
          }
        ]
      },
      "feelCue": "Mélanger le paneer saag fini avec une cuillère — il devrait se déplacer comme une sauce unifiée, brillante, épaisse, et chaque cube de paneer devrait rester entier pendant que la cuillère passe autour. L'odeur est profondément savoureuse, verte, et le réchauffement."
    }
  ]
};
