export default {
  "repoId": "master_persian_saffron_rice_001",
  "parentRepoId": null,
  "slug": "saffron-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Chelow ba Tahdig",
  "description": "Riz de safran persan — la technique du parboil et de la vapeur qui produit du riz d'un raffinement extraordinaire, chaque grain séparé et incroyablement léger, parfumé de safran fleuri, et couronné d'une croûte de tahdig dorée et éclatante que le cuisinier revendique comme leur prix.",
  "cuisine": "Perse",
  "culture": "Perse Iranienne",
  "category": "grains",
  "tags": [
    "végétalien",
    "Sans gluten",
    "persienne",
    "safran",
    "Tahdig",
    "riz"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz basmati (meilleure qualité disponible)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Fils de safran (de qualité supérieure, emballés de manière souple)",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau bouillante (pour la floraison du safran)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin (pour l'eau de trempe et de parboulage)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile neutre ou beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Pour un tahdig plus riche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Yogourt de lait entier (pour liant tahdig)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "un jaune d'œuf + 2 c. à soupe d'huile pour une croûte plus croustillante",
        "tranches de pommes de terre fines pour tahdig"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Curcuma au sol (facultatif, pour la couleur dorée)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "soaked_rice",
      "instructions": "Placer le riz basmati dans un grand bol. Dissoudre 15 g de sel dans 1 litre d'eau froide et verser sur le riz — l'eau doit être aussi salée que la mer; ce sel renforce la structure des grains et empêche le riz de devenir musqué par la suite. Tremper au minimum 30 minutes et idéalement 1 heure. L'assèchement permet au grain d'hydrater lentement et uniformément afin que l'étape de parboulage puisse cuire l'extérieur pendant que le centre reste ferme. Égoutter et rincer doucement à l'eau froide.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont uniformément gonflés, blancs de craie et légèrement allongés de l'imprégnation. L'eau de trempage est nuageuse de l'amidon lixivié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore vitreux et translucides au centre — seule la couche externe a hydraté.",
            "action": "Tremper au moins 30 minutes de plus. Le riz sous-poêlé prendra plus de temps à faire bouillir et risque d'être cuit de façon inégale."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont uniformément blancs opaques, légèrement allongés et enflés. Ils sont fermes mais ont pris de l'eau partout.",
            "action": "Égoutter et procéder à l'épuration dans les 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont trempé 3 heures et plus et commencent à se casser lorsqu'ils sont pincées.",
            "action": "Égoutter immédiatement et réduire le temps de parboulage à 3-4 minutes."
          }
        ]
      },
      "feelCue": "Un grain imbibé entre les ongles doit se briser proprement avec un coup doux — ne pas se briser comme du riz sec, ne pas s'écraser humidement — confirmant même l'hydratation."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "saffron_water",
      "instructions": "Écraser les fils de safran entre les doigts ou dans un petit mortier à une poudre fine — les fils entiers libèrent la couleur et la saveur incomplètement. Placer la poudre de safran dans un petit verre ou une tasse. Verser 60 ml d'eau juste hors de l'ébullition (sans bouillir violemment — autour de 90°C) sur le safran. Mélanger une fois et couvrir la tasse. Laisser raide pendant au moins 15 minutes. L'eau va tourner un ambre-orange profond et brillant et l'odeur de foin, le miel, et quelque chose de métallique et floral. Ce safran fleuri est utilisé en deux endroits: mélangé dans le tahdig, et bruissé sur le riz fini.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré-orange profondément concentré et brillant avec un arôme floral-métallique riche et distinct. Les fils épuisés en bas sont presque incolores.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est jaune pâle et les fils de safran sont encore rouge vif — ils n'ont pas complètement libéré leur couleur ou leur saveur.",
            "action": "Attendez au moins 10 minutes. Le safran ne peut pas être précipité — les composés de couleur sont lents à se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Deep amber-orange, riche et saturé. Des odeurs de safran. Les fils sont en or pâle ou presque blancs au fond.",
            "action": "Diviser : utiliser la moitié pour le tahdig, réserver la moitié pour la bruine finale."
          },
          {
            "state": "Overdone",
            "description": "L'eau de safran est un peu amère d'un excès d'eau trop chaude.",
            "action": "Encore utilisable, mais ajouter moins — l'amertume sera apparente à haute concentration. Diluer avec une cuillère à soupe d'eau."
          }
        ]
      },
      "feelCue": "L'eau de safran correctement fleurie appliquée à l'arrière d'une main devrait tacher un orange-ambre vif qui prend 30 secondes pour même commencer à se faner - la couleur et la saveur sont une; couleur intense signifie saveur intense."
    },
    {
      "nodeId": "step_3",
      "action": "Bouillir",
      "inputs": [
        "soaked_rice",
        "ing_04"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Portez une grande casserole d'eau à ébullition vigoureuse — utilisez au moins 2 litres d'eau pour 400 g de riz; le riz persan a besoin d'espace pour se déplacer librement. Ajouter le sel restant (10 g). Ajouter le riz égoutté et remuer doucement une fois. Faire bouillir pendant 5-7 minutes exactement. Testez le riz en enlevant un grain et en le mordant en deux : l'extérieur doit être entièrement cuit et doux, mais une petite ligne blanche doit encore être visible au centre – le grain est cuit aux deux tiers. C'est le stade du bois. Égoutter immédiatement et passer l'eau froide sur le riz pendant 15 secondes pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Les grains de riz drainés sont allongés, entièrement blancs à l'extérieur, avec un fil visible d'amidon blanc non cuit au centre même quand mordu en deux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre du grain est grand et crayeux; plus de la moitié du grain n'est pas encore cuite.",
            "action": "Retourner à l'eau bouillante pendant 1 à 2 minutes et tester à nouveau. L'extérieur doit être entièrement cuit."
          },
          {
            "state": "Perfect",
            "description": "Extérieur doux, entièrement cuit avec une ligne fine, blanche, non cuite au centre. Le grain s'est considérablement allongé.",
            "action": "Égoutter immédiatement et rincer à l'eau froide. Ne le laissez pas s'asseoir dans le pot."
          },
          {
            "state": "Overdone",
            "description": "Le grain est entièrement cuit à travers tout le chemin — aucun centre blanc visible. Les grains peuvent commencer à se coller ensemble.",
            "action": "Égoutter et rincer immédiatement à l'eau froide. Steam très doucement pour un temps plus court pour éviter la mushiness totale."
          }
        ]
      },
      "feelCue": "Le riz parboulé dans la calandre doit se sentir presque sec et légèrement ferme quand vous le traversez à la main — glissant de l'amidon, mais chaque grain doit être distinct et séparé, et non s'agripper."
    },
    {
      "nodeId": "step_4",
      "action": "Jeu",
      "inputs": [
        "ing_05",
        "ing_06",
        "parboiled_rice",
        "saffron_water",
        "ing_07"
      ],
      "outputState": "layered_pot",
      "instructions": "Verser l'huile dans un pot large, à fond lourd (non-adhésif ou bien assaisonné) et chauffer à feu moyen. Dans un bol, mélanger 3 grosses cuillères de riz parboulé avec le yogourt, la moitié de l'eau de safran et le curcuma s'il l'utilise — c'est le mélange de tahdig. Étendez-le dans une couche mince et uniforme sur le fond de l'huile chaude. Ecoute, ça devrait étourdir doucement. Maintenant, empilez le riz restant sur le dessus en forme de pyramide — ne pressez pas. Faire 5-6 trous à travers le monticule avec la poignée d'une cuillère pour permettre à la vapeur de circuler. Arrosez un mince flux d'huile ou de beurre fondu sur la pyramide.",
      "visualCue": {
        "primaryTarget": "Une pyramide de grains de riz lâches s'élevant au-dessus d'une fine couche de base de safran doré. Les côtés de la pyramide semblent aérés et les canaux de vapeur sont visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange de tahdig s'est répandu dans une couche trop épaisse — sur 1 cm. L'huile n'était pas assez chaude quand le mélange est entré et il n'a pas étourdi.",
            "action": "Continuez mais attendez-vous à un tahdig plus doux et moins croustillant. La chaleur était insuffisante pour la formation initiale de la croûte."
          },
          {
            "state": "Perfect",
            "description": "Mince, même la couche de tahdig qui a étourdi quand il a frappé l'huile. Le monticule de riz est lâche et aéré, en forme de pyramide avec des canaux de vapeur clairs. La casserole sent l'huile chaude et le safran.",
            "action": "Enveloppez le couvercle dans une serviette de cuisine propre et couvrez bien le pot."
          },
          {
            "state": "Overdone",
            "description": "Le tahdig est déjà brunissant agressivement et l'huile fume avant que le couvercle continue.",
            "action": "Réduire immédiatement la chaleur. Le fond cuirea trop vite sans que les couches supérieures soient prêtes."
          }
        ]
      },
      "feelCue": "Le mélange de safran tahdig devrait se sentir comme un porridge de riz très lâche, jaune doré, alors que vous l'étalez — juste assez fluide pour trouver son propre niveau mais assez épais pour tenir les grains ensemble."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "layered_pot"
      ],
      "outputState": "finished_saffron_rice",
      "instructions": "Enveloppez fermement le couvercle du pot dans une serviette de cuisine propre — le tissu absorbe la condensation et empêche les gouttelettes d'eau de retomber sur le riz, ce qui le rend plus humide que moelleux. Placez bien le couvercle. Cuire à feu moyen pendant 5 minutes (ceci commence le croustillant tahdig), puis réduire à la chaleur la plus basse possible et cuire pendant 40-45 minutes sans soulever le couvercle. À déballer: placer le pot sur un chiffon froid et humide ou un porte-pot pendant 2 minutes — le choc thermique aide à libérer le tahdig. Retirez le couvercle, placez fermement un grand plateau plat sur le pot et retournez en un mouvement confiant. Le tahdig devrait glisser doré et intact sur le plateau. Arrosez le reste de l'eau de safran sur le riz blanc.",
      "visualCue": {
        "primaryTarget": "Le riz inversé est une montagne blanche avec des brins de safran doré sur le dessus, reposant sur une croûte tahdig dorée et intacte de la couleur des feuilles d'automne.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tahdig est pâle et doux — il n'a pas croustillant, et il s'accroche au pot plutôt que de se libérer proprement.",
            "action": "La prochaine fois : assurez-vous que l'huile est assez chaude avant que le tahdig n'entre et utilisez un feu moyen pendant les 8 premières minutes avant de réduire."
          },
          {
            "state": "Perfect",
            "description": "Le tahdig se libère proprement dans une croûte intacte, dorée, éclatante. Le riz est blanc, moelleux et parfumé de safran. Les grains individuels sont visibles et distincts.",
            "action": "Arrosez l'eau de safran sur le riz blanc et servez les morceaux de tahdig à côté comme le prix."
          },
          {
            "state": "Overdone",
            "description": "Le tahdig est brun très foncé, presque noir, et sent aiguisé et brûlé plutôt que doré et grillé.",
            "action": "Servir le riz sans le tahdig, laissant la croûte brûlée derrière dans le pot. Toujours un excellent riz."
          }
        ]
      },
      "feelCue": "Lorsque vous tapez sur le fond d'un tahdig non moulé avec un noeud, il devrait sonner avec un son creux et vitreux — comme frapper sur une carrelage de céramique — confirmant la croûte fine et croustillante qui est la marque d'un parfait chelow."
    }
  ]
};
