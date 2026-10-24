export default {
  "repoId": "master_french_tarte_tatin_001",
  "parentRepoId": null,
  "slug": "tarte-tatin",
  "author": "ForkRecipe Kitchen",
  "title": "Tarte Tatin",
  "description": "La grande tarte à l'envers de la France — pommes caramélisées dans le beurre et le sucre jusqu'à l'ambre et donnant, puis recouvertes d'un couvercle de pâtisserie et cuites au four, inversées au dernier moment pour révéler une couronne brillante et laquée de caramel.",
  "cuisine": "Français",
  "culture": "Solognote français",
  "category": "desserts",
  "tags": [
    "végétarien",
    "français",
    "pomme",
    "Caramel",
    "tarte",
    "Cuisson"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 2,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pommes (Granny Smith ou Golden Delicious, pelées, cardées, quadrillées)",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "Braeburn",
        "Pommes de coco"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "sucre demerara (plus riche, moins même caramel)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Graines de vanille ou d'extrait de vanille",
      "ratioValue": 1,
      "defaultUnit": "bean",
      "substitutions": [
        "1 c. à thé extrait de vanille"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine à usage général (pour pâtisserie)",
      "ratioValue": 180,
      "defaultUnit": "g",
      "substitutions": [
        "00 farine"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre froid non salé (pour pâtisserie, cube)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour pâtisserie)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin (pour pâtisserie)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau glacée (pour pâtisserie)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "chilled_pastry_dough",
      "instructions": "Tremper la farine dans un bol froid. Ajouter le beurre froid cube et frotter entre vos doigts jusqu'à ce que le mélange ressemble à des chapelures grossières avec quelques morceaux de beurre de taille de pois restant — ces laminations créent de la flakiness. Ajouter le sucre et le sel. Arroser dans l'eau froide une cuillère à soupe à la fois, presser la pâte ensemble avec une fourchette après chaque addition, s'arrêtant dès qu'elle cohère lorsqu'elle est pressée. Ne knead pas. Appuyez sur un disque plat, enveloppez le plastique et réfrigérez pendant au moins 30 minutes.",
      "visualCue": {
        "primaryTarget": "Un disque rugueux et chaotique avec des taches de beurre visibles. La pâte tient ensemble lorsqu'elle est pressée, mais n'a pas l'air lisse — texture plus proche d'une garniture effilée qu'une pâte à pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte s'écroule lorsqu'elle est pressée et il y a encore de la farine dans le bol. L'eau n'a pas été complètement absorbée.",
            "action": "Ajouter une autre cuillère à café d'eau froide et presser ensemble. Ne pétrissez pas — pressez et pliez."
          },
          {
            "state": "Perfect",
            "description": "Se tient ensemble lorsqu'il est pressé sans s'effondrer. Des taches de beurre visibles. La surface semble rugueuse et inégale — pas lisse. Ça fait froid et ferme.",
            "action": "Enrouler et réfrigérer pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "La pâte est lisse et élastique — elle a été surmenée. Le beurre a complètement fondu. La pâtisserie sera dure plutôt que molle.",
            "action": "Réfrigérer pendant 1 heure pour détendre le gluten autant que possible avant de rouler."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur la pâte — elle devrait cohere sans coller à vos mains. Les flocons de beurre devraient se sentir nettement plus frais que la matrice de farine autour d'eux."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "caramel_base",
      "instructions": "Dans une poêle à fond lourd (fer fondu ou acier inoxydable) de 24 cm, faire fondre le beurre à feu moyen. Ajouter le sucre en une seule couche. Ne remuez pas. Laissez le sucre fondre et caraméliser, en inclinant doucement la poêle pour encourager une coloration uniforme. Ajouter la fève de vanille et un peu de jus de citron. Lorsque le caramel est une ambre rouge brique profonde — la couleur du rhum noir —, retirez de la chaleur. Le caramel continuera à cuire dans la chaleur résiduelle de la poêle, alors tirez-le une ombre avant de penser qu'il est prêt.",
      "visualCue": {
        "primaryTarget": "Un caramel ambré profond et clair — la couleur du miel foncé — avec seulement les premières lueurs de fumée apparaissant aux bords. Parfums de beurre grillé et de caramel, non brûlés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel doré pâle qui sent seulement le sucre et le beurre. Pas assez de développement Maillard — le caramel sera trop doux et unidimensionnel.",
            "action": "Continuer la cuisson, en inclinant la poêle pour une couleur uniforme, jusqu'à ce qu'elle approfondisse pour s'ambrir."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, claire et brillante, avec une odeur sucrée amère complexe. La couleur se lit comme du rhum noir ou du vieux whisky. Toujours en mouvement fluide dans la casserole.",
            "action": "Retirer du feu et arranger immédiatement les pommes."
          },
          {
            "state": "Overdone",
            "description": "Caramel brun foncé avec une fumée visible et une odeur aiguë, amère et acride. La casserole libère des sillons sombres.",
            "action": "Verser immédiatement dans un bol avec 2 cuillerées à soupe d'eau tiède — attention à la vapeur violente. Recommence."
          }
        ]
      },
      "feelCue": "Tenez-vous près de la poêle et respirez — le caramel est prêt lorsque l'odeur passe du doux au complexe, avec un bord doux amer distinct sous la richesse beurrée."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "caramel_base",
        "ing_01"
      ],
      "outputState": "caramelized_apples",
      "instructions": "Travailler rapidement pendant que le caramel est encore fluide, arranger les pommes en quartiers serrés dans la poêle en cercles concentriques, en bas incurvé et en bout de tige vers le centre. Emballez - les très serrés — ils rétréciront considérablement pendant la cuisson. Retourner la poêle à feu moyen et cuire sur la plaque de cuisson pendant 12-15 minutes, presser occasionnellement les pommes avec une spatule, jusqu'à ce que les bulles de caramel épais autour d'eux et les pommes ont ramolli et commencé à tourner translucide aux bords. Les jus des pommes se combineront avec le caramel pour créer la sauce de la tarte.",
      "visualCue": {
        "primaryTarget": "Sauce caramel ambre bouillonnant épaissement autour de quartiers de pommes serrés, légèrement translucides. Les dos courbés des pommes sont maintenant légèrement dorés et tendres lorsqu'ils sont percés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes sont toujours croustillantes et blanches à l'intérieur lorsqu'elles sont percées. Le caramel est mince et aqueux à partir du jus de pomme qui ne diminue pas encore.",
            "action": "Continuez à cuisiner. Le caramel doit se recentrer à mesure que le liquide de pomme s'évapore."
          },
          {
            "state": "Perfect",
            "description": "Les pommes se sont adoucies à un rendement doux lorsqu'elles sont pressées mais ne s'effondrent pas. Le caramel est épais et sirupeux autour d'eux. Les bords des pommes brillent ambre du caramel.",
            "action": "Drapez le disque de pâte froide sur les pommes et faites cuire."
          },
          {
            "state": "Overdone",
            "description": "Les pommes se sont complètement effondrées dans une compote musquée. Le caramel a diminué trop loin et est sombre et fumant.",
            "action": "Transférer ce qui reste à une coquille de tarte et en haut avec de la pâtisserie — le résultat sera plus d'une tarte caramélisée de remplissage de pomme que d'une tarte tatin structurée."
          }
        ]
      },
      "feelCue": "Appuyez sur un quart avec un doigt à travers la surface de la pâtisserie quand il est assez frais pour toucher — il devrait céder doucement, comme appuyer sur une pêche mûre, sans croquer."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "caramelized_apples",
        "chilled_pastry_dough"
      ],
      "outputState": "baked_tarte_tatin",
      "instructions": "Préchauffer le four à 200°C (400°F). Retirer le disque de pâtisserie du réfrigérateur et le rouler sur une surface farinée jusqu'à un cercle de 2 cm de plus que le diamètre de la poêle. Drapez la pâte sur les pommes dans la poêle, en tapant l'excédent autour des bords intérieurs de la poêle pour enfermer complètement les pommes. Pierce la pâtisserie une fois au centre pour laisser échapper la vapeur. Cuire au four pendant 22 à 28 minutes jusqu'à ce que la pâtisserie soit bien dorée et croustillante et que le caramel soit visiblement bouillonnant autour des bords.",
      "visualCue": {
        "primaryTarget": "Un dôme de pâtisserie profondément doré-brun, uniformément coloré, avec du caramel qui commence à buller à travers les côtés. La pâtisserie semble sèche et crépitante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est d'or pâle et encore légèrement douce lorsqu'elle est pressée. Caramel ne bouillonne pas aux bords.",
            "action": "Cuire encore 5 minutes. La pâtisserie pâle signifie sous -done — ne soyez pas timide avec la couleur ici."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde, uniformément colorée. Caramel est visiblement bouillonnant à travers les côtés et les odeurs de cuisine de pomme caramélisée et de pâtisserie brune. La pâtisserie semble creuse quand on la tape.",
            "action": "Retirer du four et retourner immédiatement sur une assiette de service."
          },
          {
            "state": "Overdone",
            "description": "La pâtisserie est brun foncé et les bords sont noircis. Caramel très foncé visible sur les côtés.",
            "action": "Inverser immédiatement, peu importe — le caramel foncé peut avoir un bord amer, mais le contraste avec la pâtisserie compense souvent."
          }
        ]
      },
      "feelCue": "Tapez le dôme de la pâtisserie avec un noeud — il devrait sonner creux et craquer légèrement sous la pression, comme une bonne coquille de croissant."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "baked_tarte_tatin"
      ],
      "outputState": "finished_tarte_tatin",
      "instructions": "C'est le moment décisif : placer une grande assiette plate (plus grande que la poêle, avec un léger bord pour attraper le caramel) sur le dessus de la poêle. Dans un mouvement rapide et confiant, retourner la poêle et la plaque ensemble. Maintenez 3 secondes, puis soulevez la poêle. Les morceaux de pomme qui se déplacent peuvent être remplacés en douceur par une cuillère — le caramel est encore assez fluide pour les coller. Servir en 20 minutes pendant que la pâtisserie est encore croquante, avec une cuillère de crème fraîche, crème caillotée ou crème glacée à la vanille.",
      "visualCue": {
        "primaryTarget": "Une mosaïque ambrée scintillante de quartiers de pommes caramélisées disposés dans leurs cercles concentriques, chaque pièce laquée d'un glaçage profond et foncé au caramel. La base de pâte est visible en dessous, toujours croquante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après l'inversion, les pommes et le caramel ont tous glissé sur la pâtisserie et restent dans la poêle. La tarte s'est déconstruite.",
            "action": "Mettez les pommes caramélisées sur la pâtisserie qui a atterri sur l'assiette et servir de tarte tatin déconstruite — la saveur est identique."
          },
          {
            "state": "Perfect",
            "description": "Une tarte cohésive et dramatique aux pommes fermement collées et scintillement au caramel. Le caramel coule lentement sur les côtés. La pâte en dessous est sèche et croquante.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le caramel refroidit trop avant d'inverser et la tarte est collée à la poêle. Les pommes sont laissées derrière.",
            "action": "Remettre la poêle à feu doux pendant 1-2 minutes pour refondre le caramel, puis retourner rapidement."
          }
        ]
      },
      "feelCue": "Au moment où vous soulevez la casserole, vous devriez sentir une poussée de vapeur chaude parfumée au caramel et entendre le léger étourdissement du caramel chaud rencontrer l'assiette fraîche."
    }
  ]
};
