export default {
  "repoId": "master_indian_tandoori_leg_of_lamb_001",
  "parentRepoId": null,
  "slug": "tandoori-leg-of-lamb",
  "author": "ForkRecipe Kitchen",
  "title": "Jambe d'agneau tandoori",
  "description": "Une jambe entière à l'os a marqué profondément à l'os et a emballé avec deux marinades de yogourt épicées successives, puis torréfié à la chaleur de la mer jusqu'à ce que les bords soient carbonisés et parfumés pendant que la viande à l'intérieur reste rose et donne — la grandeur de la tangdoor ramené à la maison.",
  "cuisine": "Indiens",
  "culture": "Punjabi indien du Nord",
  "category": "proteins",
  "tags": [
    "agneau",
    "tandoori",
    "indienne",
    "punjabi",
    "rôti",
    "épicé",
    "yaourt"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "6 hr (marinade)",
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
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambe d'agneau désossée (environ 2,5 kg)",
      "ratioValue": 2500,
      "defaultUnit": "g",
      "substitutions": [
        "épaule d'agneau désossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt de lait entier",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "yogourt grec plein gras"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (légume ou moutarde)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre de chili rouge cachemiri",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux + pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Pâte de gingembre frais",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "1,5 c. à soupe de gingembre frais râpé finement"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Pâte d'ail",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "6 gros gousses, broyées à la pâte"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 16,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Ghee, pour le basting",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié",
        "beurre non salé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Inciser",
      "inputs": [
        "ing_01"
      ],
      "outputState": "scored_lamb",
      "instructions": "À l'aide d'un couteau de désossage étroit et tranchant, faire des fentes profondes sur toute la jambe — 6 à 8 coupes de chaque côté, chacune d'environ 3 à 4 cm de profondeur et d'angle pour atteindre le plus près possible de l'os. Travaillez méthodiquement : marquez le haut, le dessous et la tige. L'objectif est de créer autant de contact marinade-viande que possible et de réduire l'épaisseur efficace de la jambe pour une cuisson plus uniforme. Score à travers n'importe quel bouchon gras épais ainsi.",
      "visualCue": {
        "primaryTarget": "La jambe est couverte de fentes creuses profondes tous les 4 à 5 cm que vous pouvez ouvrir avec vos doigts et voir de la viande rouge crue à l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les découpes sont peu profondes — 1 cm ou moins — et ne font que traverser la graisse et la surface même de la viande. La marinade ne pénétrera pas.",
            "action": "Retourne le couteau et coupe plus profondément. Angle la lame vers l'os. Plus vous marquez agressivement, plus la saveur pénètre."
          },
          {
            "state": "Perfect",
            "description": "Des gazes profondes et spectaculaires s'ouvrent jusqu'à 2–3 cm de largeur lorsque la viande est légèrement tirée. L'os est visible dans au moins une ou deux découpes de chaque côté.",
            "action": "Passez à la première marinade."
          },
          {
            "state": "Overdone",
            "description": "Les découpes sont si nombreuses et profondes que la viande commence à tomber loin de l'os en sections.",
            "action": "Attachez la jambe avec la ficelle de cuisine en 3–4 endroits pour tenir la forme pendant la cuisson. La saveur sera exceptionnelle."
          }
        ]
      },
      "feelCue": "Vous devriez sentir le couteau frapper et gratter l'os sur les coupes les plus profondes près de la tige et de la hanche socket. Si le couteau ne voyage que par une résistance douce, il n'est pas allé assez loin."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "scored_lamb",
        "ing_03",
        "ing_05",
        "ing_12"
      ],
      "outputState": "first_marinated_lamb",
      "instructions": "Mélanger le jus de citron, la moitié de la poudre de chili cachemiri et le sel dans une pâte rugueuse. Frottez cette première marinade agressivement sur tout l'agneau — sur la surface, et profondément dans chaque clique et score avec vos doigts. Cette première marinade acide et sel commence à décomposer les protéines de surface et à transporter la chaleur profondément dans la viande. Reposez-vous 30 minutes à température ambiante pendant que vous préparez la deuxième marinade.",
      "visualCue": {
        "primaryTarget": "La surface de l'agneau est uniformément enduite d'une fine pâte rouge, et les incisions sont teintées de rouge-orange profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est assise à la surface de la viande plutôt que d'être travaillée. Les coupures n'ont pas été remplies.",
            "action": "Utilisez vos doigts pour pousser la pâte profondément dans chaque tranche. L'action physique du pressurage est aussi importante que la pâte elle-même."
          },
          {
            "state": "Perfect",
            "description": "Chaque coupe est remplie de pâte rouge. La surface est uniformément colorée. Le citron et le sel sentent vif et lumineux.",
            "action": "Reposez-vous 30 minutes, puis appliquez la deuxième marinade."
          },
          {
            "state": "Overdone",
            "description": "La marinade a été assise plus d'une heure avant l'application de la seconde, l'acide commence à dénaturer les protéines de surface.",
            "action": "Passez immédiatement à la deuxième marinade. La texture peut être légèrement crayeuse sur la surface même, mais elle se rétablira au four."
          }
        ]
      },
      "feelCue": "Le jus de citron fera sentir la surface légèrement collante et ferme au toucher après 15 minutes — c'est l'acide qui commence à serrer la protéine, créant une meilleure base pour la marinade du yogourt à adhérer."
    },
    {
      "nodeId": "step_3",
      "action": "Faire mariner",
      "inputs": [
        "first_marinated_lamb",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "fully_marinated_lamb",
      "instructions": "fouetter ensemble le yogourt, l'huile, le reste du chili cachemiri, le cumin, la coriandre, le garam masala, le curcuma, la pâte de gingembre et la pâte d'ail jusqu'à ce qu'elle soit lisse et uniformément rouge-orange. Goûtez - il doit être gras, parfumé et légèrement salé (l'agneau porte déjà du sel de la première marinade). Appliquer cette deuxième marinade sur tout l'agneau, la travailler profondément dans chaque coupe et sous toute membrane lâche. Déposer dans un grand plat, couvrir d'enveloppe plastique et réfrigérer pendant 4 à 6 heures, ou idéalement pendant la nuit.",
      "visualCue": {
        "primaryTarget": "L'agneau est complètement encastré dans une épaisse couche de yogourt rouge orange qui remplit chaque tranche. On dirait qu'il a été peint.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est mince et coule de la viande plutôt que de la couvrir. Yogourt peut avoir été trop dilué ou froid.",
            "action": "Remettez la marinade à l'eau épaisse et assurez-vous que le yogourt est à température ambiante."
          },
          {
            "state": "Perfect",
            "description": "Un revêtement épais, uniforme et rouge-orange vif sur toute la jambe. La marinade s'accroche et ne coule pas lorsque la jambe est inclinée. Il remplit toutes les incisions.",
            "action": "Couvrir et réfrigérer au minimum 4-6 heures, tourner une fois à mi-chemin."
          },
          {
            "state": "Overdone",
            "description": "L'agneau marine depuis plus de 24 heures. La texture de la viande de surface sera légèrement pâteuse de l'acide yogourt.",
            "action": "Porter à la température ambiante avant de rôtir (2 heures hors du réfrigérateur). Essuyer la couche très extrême de marinade avant de rôtir pour éviter de brûler le revêtement de yogourt."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur le revêtement marinade — il doit adhérer dans une couche épaisse, en pâte et ne pas glisser sous votre bout de doigt. Si elle glisse, soit la surface est trop humide, soit le yogourt est trop mince."
    },
    {
      "nodeId": "step_4",
      "action": "Rôtir",
      "inputs": [
        "fully_marinated_lamb",
        "ing_13"
      ],
      "outputState": "roasted_lamb",
      "instructions": "Amenez l'agneau à température ambiante 2 heures avant la cuisson. Préchauffer le four à 220°C (425°F) avec une grille dans le tiers supérieur. Placer l'agneau sur une grille en fil sur un plateau de grillage (pour attraper les gouttes d'eau et permettre la circulation de l'air sous la viande). Faire cuire à 220°C pendant 25 à 30 minutes jusqu'à ce que le revêtement marinade soit carbonisé et noirci dans les taches — cet omble est une saveur essentielle. Pendant ce temps, chauffer le ghee dans une petite casserole. Après 25 minutes, abreuvez généreusement l'agneau avec du ghee, puis réduisez le four à 180°C (350°F) et continuez le rôtissage pendant 45 à 60 minutes de plus (environ 20 min par 500g pour le rose moyen).",
      "visualCue": {
        "primaryTarget": "La croûte de marinade est carbonisée aux extrémités et aux bords des découpes marquées, rouge orangé profond dans le corps, et la jambe est sombre et spectaculaire. Un thermomètre à lecture instantanée lit 62-65°C au point le plus épais de l'os pour le milieu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le revêtement Marinade est toujours orange et doux, pas carbonisé. Thermomètre se lit sous 58°C. La viande sera cru-rare près de l'os.",
            "action": "Revenez à 220°C pendant 10 minutes, puis vérifiez à nouveau. Ne le coupez pas — vous perdrez les jus."
          },
          {
            "state": "Perfect",
            "description": "L'omble noirci à la crête de chaque slash, corps ambre-rouge profond. Thermomètre lit 62-65°C (rose moyenne). Le ghee est caramélisé sur la surface.",
            "action": "Retirez-vous et reposez-vous immédiatement pendant 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Thermomètre se lit au-dessus de 75°C. La surface est uniformément brun foncé. La viande s'est retirée de l'os et la jambe a l'air réduite.",
            "action": "Retirer immédiatement et reposer 20 minutes couverts — le repos redistribuera les jus. La viande sera encore très bonne."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse de la jambe près de la hanche avec un doigt — il devrait donner avec une résistance moyenne, comme appuyer sur la base de votre pouce quand la main est détendue. Ferme mais pas rigide."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "roasted_lamb"
      ],
      "outputState": "rested_tandoori_lamb",
      "instructions": "Transférer l'agneau sur une planche à découper et la tente lâchement avec du papier — ne pas envelopper étroitement, ce qui piège la vapeur et adoucit la croûte. Reposez-vous pendant 20 minutes minimum. Ce n'est pas facultatif : la température interne va augmenter de 2 à 3 °C (cuisine carry-over) et les fibres musculaires vont se détendre et réabsorber les jus. Une jambe coupée trop tôt saigne sur la planche et la viande est dure. Utilisez le temps de repos pour racler le plateau de torréfaction qui coule dans une petite casserole et réduire avec un jet d'eau pour une sauce de casserole.",
      "visualCue": {
        "primaryTarget": "L'agneau ne montre aucun jus rose courant sur la planche pendant le reste. La surface s'obscurcit légèrement et développe un léger gloss des jus de repos redistribués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau s'est reposé moins de 10 minutes. Une fois coupés, les jus roses vifs inondent la planche.",
            "action": "Remettez les tranches à la tente en feuilles et laissez reposer encore 5 minutes. La qualité de l'alimentation vaut la peine d'attendre."
          },
          {
            "state": "Perfect",
            "description": "Après 20 minutes, la planche est sèche. La jambe tient sa forme lorsqu'elle est sculptée. Les jus sont limpides avec un blush rose — pas du sang.",
            "action": "Couper le grain en tranches épaisses, en travaillant autour de l'os. Servir avec du naan, du raita et de l'oignon cru tranché."
          },
          {
            "state": "Overdone",
            "description": "L'agneau s'est reposé pendant plus de 40 minutes et commence à refroidir. La croûte s'est considérablement adoucie.",
            "action": "Couper et servir immédiatement sur des assiettes chaudes. Une bruine de ghee chaud ravivera la surface. La saveur n'est pas affectée par un repos supplémentaire."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez la jambe reposée à travers la feuille, elle doit se sentir moins printanière que lorsqu'elle sort du four — les fibres musculaires se sont détendues et tiennent les jus plutôt que de les expulser lorsqu'elles sont pressées."
    }
  ]
};
