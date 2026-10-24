export default {
  "repoId": "master_mexican_salsa_verde_tomatillo_001",
  "parentRepoId": null,
  "slug": "salsa-verde-tomatillo",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Verde (Tomatillo)",
  "description": "Une sauce de table brillante et tannante du centre du Mexique — des tomatillos et des jalapeños blisters sous une grille jusqu'à ce que leurs peaux noircissent et ombragent l'oignon cru, l'ail et un poing de coriandre en quelque chose de vivant. L'omble n'est pas une erreur; c'est la sauce.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "sauces",
  "tags": [
    "sauce",
    "Mexique",
    "salsa",
    "tomatillo",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tomatillos frais, décortiqués et rincés",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "tomatillos entiers en conserve, drainés (charnez-les de toute façon)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Jalapeños (ensemble, tiges sur)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chiles pour plus de chaleur, poblano pour moins"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, à peu près cantonné",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "Ail rôti pour une note plus sucrée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "persil à feuilles plates pour ceux qui sont opposés à la coriandre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc dans une pincée"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Broil",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "charred_vegetables",
      "instructions": "Placez un support de four à 4 pouces sous la grille et placez-le à haute. Disposer les tomatillos, les jalapeños entiers, les quartiers d'oignons et les gousses d'ail non pelées sur une plaque de cuisson doublée de feuilles en une seule couche. Faire griller 8 à 10 minutes, en tournant une fois la poêle, jusqu'à ce que les tomatillos soient noircis et cloqués dans les taches, adoucis et s'effondrent, et que les peaux jalapeño soient carbonisées. Flip tout une fois à mi-chemin. L'ail doit être doux à l'intérieur de sa peau.",
      "visualCue": {
        "primaryTarget": "Tomatillos avec des taches noircies sur leur face supérieure, du jus doux et pleurant sur la feuille; jalapeños avec des peaux brûlées et cloquées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomatillos sont encore fermes et vert vif, les peaux sont intactes. Pas de noircissement. Ils ont l'air crus.",
            "action": "Retourner à la grille pour 3-5 minutes de plus. Déplacez la casserole plus près de l'élément si votre grille-lait est faible."
          },
          {
            "state": "Perfect",
            "description": "Les Tomatillos sont adoucis et basculés, avec de l'omble foncé sur leur face supérieure et une piscine de jus vert de tarte sur la feuille. Les peaux de Jalapeño sont papier et noircies dans les endroits.",
            "action": "Laisser reposer 5 minutes, puis éplucher l'ail et tirer les tiges des jalapeños — laisser l'omble sur tout le reste."
          },
          {
            "state": "Overdone",
            "description": "Les Tomatillos ont éclaté complètement et sont réduits à bousculer, le jus brûlant sur la feuille. Les jalapeños sont uniformément noircis.",
            "action": "La saveur sera plus amère et fumée que la tarte. Grattez tout dans le mélangeur, mais ajoutez la coriandre et le jus de lime avant de déguster."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un tomatillo avec l'arrière d'une cuillère — il devrait donner sans résistance, comme un raisin doux, et la peau devrait glisser. Si elle repousse, elle a besoin de plus de temps sous la chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "charred_vegetables",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "blended_salsa",
      "instructions": "Pressez directement l'ail rôti de ses peaux de papier dans un mélangeur. Ajouter les tomatillos carbonisés et leurs jus accumulés, les jalapeños (semences et tout pour la chaleur complète, ou desemence pour plus doux), et l'oignon. Pulse 4-5 fois pour le décomposer, puis ajouter la coriandre, le jus de lime et le sel. Mélangez à votre texture préférée — quelques autres pulsations pour rustique et chunky, un blitz de 20 secondes pour une sauce versable.",
      "visualCue": {
        "primaryTarget": "Une sauce olive-verte éclatante avec des morceaux d'omble plus foncé et une coriandre fraîche, assez lâche pour verser mais pas aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore épaisse avec des morceaux solides visibles de tomatillo; elle est assise dans des touffes plutôt que de couler.",
            "action": "Pulse plusieurs fois, en appuyant sur de grands morceaux avec une spatule entre les impulsions."
          },
          {
            "state": "Perfect",
            "description": "Une sauce légèrement rustique, versable avec quelques petites taches d'omble et d'herbe. La couleur est vive, fumée vert olive, ni aqueuse ni épaisse.",
            "action": "Goûtez au sel et au citron vert. Ajuster et laisser reposer pendant 10 minutes — la saveur continue à se développer."
          },
          {
            "state": "Overdone",
            "description": "Mélangé trop longtemps en une purée lisse et uniforme à l'air incorporé, en la transformant en un vert mousseux plus léger.",
            "action": "Il aura toujours le goût correct; la texture est simplement de style restaurant plutôt que de style molcajete. Laisse-le se reposer."
          }
        ]
      },
      "feelCue": "Exécutez une cuillère dans la salsa mélangée — elle devrait revenir dans le canal en deux secondes. S'il se tient dans un monticule, ajouter une cuillère à soupe d'eau. S'il s'agit d'eau, il s'est écrasé et a perdu son corps."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "blended_salsa",
        "ing_07",
        "ing_06"
      ],
      "outputState": "finished_salsa_verde",
      "instructions": "Goûtez la salsa et assaisonnez en couches: ajoutez du sel d'abord jusqu'à ce que la saveur tomatillo se met en évidence, puis ajoutez du jus de lime en petits incréments pour amplifier la luminosité sans la pousser à l'ameresse. Une bonne salsa verde devrait goûter lumineux et tannant, avec la chaleur arrivant à l'arrière du palais. Laissez - le reposer à température ambiante pendant 10 minutes avant de servir — les saveurs se tricotent comme elles sont.",
      "visualCue": {
        "primaryTarget": "Une sauce vibrante et baignée d'une couleur vert olive à jade. Il sent simultanément l'omble, l'herbe fraîche et les agrumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plat et muet; le tomatillo tang est enterré et la salsa n'a pas de goût particulier.",
            "action": "Ajouter le sel une pincée à la fois, goûter entre chaque addition. L'acide suivra une fois le sel déverrouiller les saveurs."
          },
          {
            "state": "Perfect",
            "description": "Lumineux et poinçonné, le tanin du tomatillo s'équilibre contre l'omble, la coriandre présente mais pas écrasante, une chaleur propre sur la finale.",
            "action": "Servir immédiatement ou réfrigérer. La salsa gardera 5 jours et s'intensifie pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "Agressivement aigre ou salé, la chaleur de chile domine tout, la saveur tomatillo perdue.",
            "action": "Ajouter un tomatillo frais ou un petit morceau d'oignon cru et se remettre à diluer. Une pincée de sucre peut dompter l'excès d'acide."
          }
        ]
      },
      "feelCue": "Déposer une puce ou une cuillère propre dans la salsa finie. Le tomatillo tang devrait arriver en premier, la chaleur de chile seconde, et l'herbe de la coriandre devrait s'attarder sur l'exhalée. Si une seule note déborde, la sauce doit être rééquilibrée."
    }
  ]
};
