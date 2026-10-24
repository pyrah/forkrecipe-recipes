export default {
  "repoId": "master_american_pulled_pork_001",
  "parentRepoId": null,
  "slug": "pulled-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Porc fumé faible et faible",
  "description": "Une épaule de porc en os s'est écrasée et s'est effondrée pendant plus de dix à quatorze heures de fumée de feuillus. Bark sombre comme acajou, intérieur qui se sépare en longues cordes à fil de soie avec rien de plus que deux fourchettes et une touche légère.",
  "cuisine": "Américain",
  "culture": "Carolinien",
  "category": "proteins",
  "tags": [
    "bbq",
    "porc",
    "fumé",
    "pulvérulent",
    "sud",
    "faible et faible",
    "Carolina"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "14 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc désossée (bout de Boston), de 4 à 5 kg",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "épaule de porc désossée (réduire le temps de cuisson par ~1 h)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "BBQ frotter à sec (voir la recette bbq-sec-rub)",
      "ratioValue": 6,
      "defaultUnit": "tbsp",
      "substitutions": [
        "frotter la compétition achetée au magasin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Moutarde jaune",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce chaude comme liant"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Cidre de pomme (pour le spritzing)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de pomme",
        "ACV dilué"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Bois de hickory ou de chêne",
      "ratioValue": 4,
      "defaultUnit": "chunks",
      "substitutions": [
        "bois de noix de pécan",
        "Bois de pomme (mince, plus sucré)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme (pour la finition)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel aplati (pour la finition)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rubbed_shoulder",
      "instructions": "Patientez l'épaule de porc complètement sèche avec des serviettes en papier. À l'aide de vos mains, enrobez chaque surface — côtés, bouchon gras, os — d'une couche mince et uniforme de moutarde jaune (ceci agit uniquement comme un liant et disparaît pendant la cuisson; vous ne le goûterez pas). Appliquer immédiatement le frottage sec généreusement sur toutes les surfaces, le presser fermement dans la chair. Envelopper soigneusement en plastique et réfrigérer pendant la nuit ou au moins 4 heures. Retirer du réfrigérateur 1 heure avant la cuisson pour tempérer légèrement.",
      "visualCue": {
        "primaryTarget": "Une épaule uniformément enduite sans peau nue. Le frottage doit être opaque et collant après réfrigérant, non sec et poudreux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plaques de viande nues visibles ou minces et poussiéreuses.",
            "action": "Appliquer plus de frotter et appuyer fermement. La moutarde l'aide à coller — ajouter plus si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Épais, même la croûte d'acajou s'accroche à la surface de la viande. Légèrement collant au toucher après le repos.",
            "action": "Passez au fumeur."
          },
          {
            "state": "Overdone",
            "description": "Rubir si épais qu'il glisse dans des draps. La surface est humide avec de l'humidité étirée.",
            "action": "L'excès de Pat revient doucement. Une chute est normale sur les coupes humides."
          }
        ]
      },
      "feelCue": "Après une nuit de repos, le frottage doit se sentir presque comme de la pâte — le sel a attiré l'humidité et la surface est humide et collante plutôt que sèche et granuleuse."
    },
    {
      "nodeId": "step_2",
      "action": "Fumer",
      "inputs": [
        "rubbed_shoulder",
        "ing_05",
        "ing_04"
      ],
      "outputState": "stalled_shoulder",
      "instructions": "Préchauffez votre fumeur à 107–121 C (225–250 F). Placez le bouchon de graisse de l'épaule directement sur la grille. Ajouter des morceaux de bois pour une fumée bleue mince et constante, et non de la fumée blanche qui devient amère. Maintenir la température et la fumée pendant 6-8 heures. Toutes les 90 minutes après les 3 premières heures, spritz toutes les surfaces avec du cidre de pomme pour garder l'écorce humide et encourager l'absorption de fumée. La température interne sera de 68 à 74 °C (155 à 165 °F) et le plateau pendant 2 à 3 heures. Ne pas lever la chaleur.",
      "visualCue": {
        "primaryTarget": "L'écorce a transformé une acajou profonde en noir sur l'extérieur. Le bouchon de graisse a partiellement baissé. La sonde de viande glisse avec une résistance minimale au décrochage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'écorce est encore rougeâtre et douce. La viande ne se retire que légèrement de l'os.",
            "action": "Continuez à fumer. Vous n'avez pas encore atteint le décrochage — ne vous précipitez pas avec plus de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Aboiement noir acajou foncé, ferme et légèrement croquant. La viande a diminué visiblement de l'extrémité osseuse. Température interne planant 68–74 C.",
            "action": "Envelopper le papier de boucher pour pousser à travers le décrochage (la béquille du Texas)."
          },
          {
            "state": "Overdone",
            "description": "L'écorce est noire et cendre avec une odeur dure et acride. L'écorce s'éteint dans des morceaux secs.",
            "action": "Enveloppez immédiatement et n'ajoutez pas plus de bois. L'intérieur sera encore bon."
          }
        ]
      },
      "feelCue": "Gagnez l'extrémité osseuse avec une serviette — au moment où vous frappez le décrochage, il devrait juste avoir le plus faible frottement, comme une dent lâche, mais pas encore tirer libre."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "stalled_shoulder"
      ],
      "outputState": "probe_tender_shoulder",
      "instructions": "Enveloppez fermement l'épaule en deux feuilles de papier boucher non couché (ou en feuilles comme un recul). Retourner au fumeur à la même température. Continuer la cuisson jusqu'à ce qu'un thermomètre à sonde glisse dans la partie la plus épaisse de l'épaule avec une résistance nulle — comme pousser dans le beurre mou — à une température interne d'environ 93–96 C (200–205 F). Cela prend généralement encore 3 à 5 heures après l'emballage. L'os doit être complètement lâche.",
      "visualCue": {
        "primaryTarget": "Le thermomètre de sonde enregistre 93-96 C et glisse dans la viande sans poussée du tout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sonde rencontre une résistance ferme ou lit en dessous de 90 C. L'os se sent toujours ancré.",
            "action": "Récupérer et retourner au fumeur pendant 30 à 60 minutes. Vérifiez encore."
          },
          {
            "state": "Perfect",
            "description": "La sonde glisse comme de la crème chaude — pas de résistance. L'os peut être tordu et tiré libre avec un remorqueur doux. Température interne 93–96 C.",
            "action": "Transférer (toujours emballé) dans une glacière avec des serviettes pour se reposer pendant au moins 1 heure."
          },
          {
            "state": "Overdone",
            "description": "La viande se sent musquée et liquide sort du papier. Température interne supérieure à 99 C.",
            "action": "Tirez immédiatement et reposez-vous dans une glacière. Il tirera toujours bien — la texture est juste légèrement plus douce."
          }
        ]
      },
      "feelCue": "Soulevez l'épaule enveloppée — elle devrait se sentir considérablement plus lourde et plus liquide que lorsqu'elle est entrée, se déplaçant et slothing légèrement à l'intérieur du papier."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "probe_tender_shoulder"
      ],
      "outputState": "rested_pork",
      "instructions": "Transférer l'épaule enveloppée, encore scellée, dans un refroidisseur propre doublé de serviettes repliées. Fermez la glacière. Reposez-vous pendant au moins 1 heure, jusqu'à 4 heures. Ce repos n'est pas facultatif — il permet de réabsorber les jus internes dans les fibres musculaires. Découper trop tôt les résultats de jus s'épuisent sur la planche, ne pas rester dans la viande.",
      "visualCue": {
        "primaryTarget": "L'emballage emballé conserve sa forme mais se sent quelque peu productif lorsqu'il est pressé doucement — la viande se détend.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 15 à 20 minutes de repos. Le paquet est encore très chaud et rigide.",
            "action": "Continuez à vous reposer. Le refroidisseur tiendra la température facilement pendant 3-4 heures."
          },
          {
            "state": "Perfect",
            "description": "Après 1 à 2 heures, le paquet a cessé de se mettre à la vapeur lorsqu'il est ouvert. La viande tient sa forme lorsque le papier est pelé en arrière, mais se sépare facilement lorsqu'elle est tirée.",
            "action": "Déballez et tirez la viande."
          },
          {
            "state": "Overdone",
            "description": "Reposé plus de 4-5 heures dans la glacière. La température interne a peut-être chuté en dessous du seuil de sécurité alimentaire de 60 °C (140 °F).",
            "action": "Vérifier la température avant de servir. Réchauffer dans une casserole couverte avec un jet de jus de pomme si nécessaire."
          }
        ]
      },
      "feelCue": "Après un bon repos, la surface de la viande se sentira chaude mais pas chaude à l'arrière de la main — comme une couette épaisse, pas une poêle chaude."
    },
    {
      "nodeId": "step_5",
      "action": "Assembler",
      "inputs": [
        "rested_pork",
        "ing_06",
        "ing_07"
      ],
      "outputState": "pulled_pork",
      "instructions": "Déposez l'épaule sur une grande planche à découper pour capturer les jus. Enlevez et jetez l'os — il devrait glisser libre avec aucun effort. À l'aide de deux fourchettes ou de gants résistants à la chaleur, séparer la viande en longs brins, en travaillant avec le grain du muscle. Hacher à peu près tous les gros morceaux d'écorce et les plier à travers la viande tirée pour obtenir un contraste de texture. Arrosez les jus de planche ramassés sur la viande. Terminer avec une légère éclaboussure de vinaigre de cidre de pomme et une pincée de sel. Goûtez et ajustez.",
      "visualCue": {
        "primaryTarget": "Longs brins de porc, comme de la soie, avec des morceaux d'écorce foncée pliés, scintillent avec les jus de cuisson collectés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande nécessite des efforts considérables pour tirer — elle se déchire en morceaux plutôt qu'en longs brins.",
            "action": "L'épaule a probablement besoin de 30 à 60 minutes de cuisson. Chop plutôt que de tirer pour servir."
          },
          {
            "state": "Perfect",
            "description": "La viande tombe dans de longs brins humides avec une légère pression de fourche. Des taches d'écorce sombres sont distribuées. Glisser avec du jus.",
            "action": "Servir immédiatement sur les pains, ou tenir dans une casserole couverte."
          },
          {
            "state": "Overdone",
            "description": "La viande s'écroule pour bousculer sans structure de fil — presque en pâte.",
            "action": "Toujours délicieux. Servez-le de style chunky-choc, Carolina-hash style, ou empilez-le sur nachos."
          }
        ]
      },
      "feelCue": "Le porc bien tiré doit se sentir soyeux et légèrement collant entre les doigts — chaque brin se séparant proprement sans être déchiqueté. Pressez une petite poignée : elle devrait se tenir brièvement puis s'effondrer."
    }
  ]
};
