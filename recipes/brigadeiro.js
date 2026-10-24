export default {
  "repoId": "master_brazilian_brigadeiro_001",
  "parentRepoId": null,
  "slug": "brigadeiro",
  "author": "ForkRecipe Kitchen",
  "title": "Brigadeiro",
  "description": "La confiserie au chocolat bien-aimée du Brésil : lait condensé sucré cuit avec du beurre et du cacao en poudre jusqu'à ce qu'il s'éloigne de la poêle dans une masse brillante, comme du caramel, puis refroidi, roulé dans des sphères, et enduit dans des saupoudrers de chocolat.",
  "cuisine": "Brésil",
  "culture": "Brésil",
  "category": "desserts",
  "tags": [
    "chocolat",
    "truffe",
    "Brésilien",
    "doux",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "90 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 10,
    "salty": 1,
    "sour": 0,
    "bitter": 3,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Lait condensé sucré",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Poudre de cacao non sucrée",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de cacao naturel (un peu plus acide)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Pince de sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Saupoudres de chocolat (granulado)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "cacao en poudre",
        "Noix concassées",
        "noix de coco déchiquetées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "combined_mixture",
      "instructions": "Dans une casserole moyennement à fond lourd (pas antiadhésive – vous devez voir le changement de couleur sur le fond de la casserole), combiner le lait condensé, le beurre, la poudre de cacao tamisé et le sel. Mélanger avec une spatule résistante à la chaleur avant d'allumer la chaleur, en veillant à ce que le cacao soit complètement incorporé avant d'appliquer la chaleur, ce qui évite les grumeaux. Mettre à feu moyen-doux.",
      "visualCue": {
        "primaryTarget": "Un mélange uniforme, brillant et brun chocolat, sans morceaux de cacao secs. Le beurre est entièrement intégré — pas de séparation visible des graisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La poudre de cacao a des morceaux secs flottants ou entassés. Le beurre n'est pas encore incorporé.",
            "action": "Mélanger vigoureusement la chaleur avant d'allumer le brûleur. La chaleur avec des grumeaux provoquera des brûlures."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, brillant, brun foncé. Beurre complètement fondu et mélangé. Des odeurs de chocolat riche.",
            "action": "Commencez à remuer continuellement à feu moyen-doux."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été chauffé avant la dissolution du cacao, des taches brunes foncées de cacao brûlé visibles.",
            "action": "Plongez dans un tamis à mailles fines avant que le mélange ne s'épaississe. Procédez avec prudence sur une chaleur plus faible."
          }
        ]
      },
      "feelCue": "Avant de chauffer, faire passer la spatule sur le fond — elle devrait se sentir lisse sans résistance granuleuse du cacao non dissous."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "combined_mixture"
      ],
      "outputState": "brigadeiro_dough",
      "instructions": "Cuire le mélange à feu moyen-doux, en remuant en continu avec la spatule en coups longs et lents sur l'ensemble du fond de la poêle, sans cesser de remuer. Le mélange s'épaissira progressivement. Après 8 à 12 minutes, il commencera à s'éloigner des côtés et du fond de la poêle en faisant glisser la spatule. C'est le test critique : faites glisser une ligne sur le fond de la poêle avec votre spatule. Si la ligne reste dégagée pendant 3 secondes avant que le mélange ne se recoupe, elle est prête. Retirer immédiatement du feu.",
      "visualCue": {
        "primaryTarget": "Le mélange s'est légèrement foncé à un brun chocolat plus profond. Il s'éloigne des côtés de la poêle et laisse un chemin propre lorsque la spatule traîne en bas. La texture est passée d'un liquide versable à une pâte épaisse et fudge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore versable comme la sauce au chocolat. Le test de ligne ne laisse pas de chemin clair, il revient instantanément.",
            "action": "Continuer à remuer à feu moyen-doux. La transformation se produit progressivement, puis subitement dans les 2 dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Le sentier de la spatule dure 3 secondes. Les monticules de mélange se détachent légèrement lorsque la spatule le soulève. Il tire proprement de tout le fond de la poêle. Sens de lait cuit et de chocolat noir.",
            "action": "Retirer immédiatement du feu et verser sur une plaque ou un bol graissé. Ne grattez pas les morceaux brûlés du bas."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est rigide et granuleux. Il déchire plutôt que coule quand la spatule bouge. A la texture du caramel sec.",
            "action": "Ajouter 1 cuillère à soupe de crème tiède et remuer vigoureusement le feu pour se détendre. La texture se rétablira partiellement — elle peut rouler légèrement collant."
          }
        ]
      },
      "feelCue": "Le son change nettement lorsque le brigadeiro est prêt — au lieu d'un liquide continu, on entend un bruit de grattage plus lent et plus lourd lorsque la masse épaisse traîne à travers la casserole. Faites confiance à vos oreilles."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidir",
      "inputs": [
        "brigadeiro_dough"
      ],
      "outputState": "cooled_brigadeiro",
      "instructions": "Verser le mélange cuit sur une plaque graissée ou dans un bol peu profond. Ne grattez pas le pot — la couche inférieure collée aura un goût amer. Étaler légèrement avec la spatule. Laisser refroidir complètement à température ambiante (30 minutes minimum), puis réfrigérer pendant au moins 30 minutes. Cold brigadeiro est essentiel pour rouler — une brigadeiro chaude s'attachera à vos mains et ne peut pas former des sphères propres. Le mélange doit être suffisamment ferme pour scoop et tenir sa forme.",
      "visualCue": {
        "primaryTarget": "Après refroidissement : un disque de chocolat noir ferme qui tient sa forme lorsque la plaque est inclinée. La surface est mate plutôt que brillante. Le mélange contient un tiret propre lorsqu'il est pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore chaud et doux — un doigt pressé dans les feuilles d'un tiret permanent et s'éloigne collant.",
            "action": "Réfrigérer encore 20 à 30 minutes. La patience ici empêche un gâchis collant et inapplicable pendant le roulement."
          },
          {
            "state": "Perfect",
            "description": "Ferme mais souple. Retient sa forme mais donne facilement sous pression. Soulève de la plaque dans une masse cohésive.",
            "action": "Graisser légèrement les mains avec du beurre et commencer à rouler."
          },
          {
            "state": "Overdone",
            "description": "Solide et difficile à nettoyer. Des fissures pliées.",
            "action": "Laisser reposer à température ambiante pendant 10 minutes pour ramollir légèrement avant de rouler."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface avec un bout de doigt — il devrait se sentir comme de l'argile très froide: laisse un tiret mais ne colle pas à votre doigt quand vous tirez."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "cooled_brigadeiro",
        "ing_05"
      ],
      "outputState": "finished_brigadeiros",
      "instructions": "Graisser légèrement les mains avec du beurre. À l'aide d'une petite cuillère ou d'une ballette de melon, faites des portions d'environ 1,5 cuillère à soupe chacune. Rouler chaque portion entre vos paumes graissées dans un mouvement circulaire, en appliquant une pression douce, même pour former une sphère lisse. Travaillez vite — la chaleur de vos mains commence à adoucir le brigadeiro. Rouler chaque boule immédiatement dans les saupoudrers de chocolat, presser doucement pour adhérer, puis placer dans une tasse de bonbons en papier. Si le mélange devient trop mou pour rouler, refroidissez vos mains sous l'eau froide et laissez sécher avant de continuer.",
      "visualCue": {
        "primaryTarget": "Des sphères de chocolat uniformes d'environ 2,5 cm de diamètre, entièrement recouvertes de saupoudrers bruns sans taches nues. Doux, rond, et tenant leur forme à température ambiante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les sphères sont irrégulières avec des fonds plats où elles reposent sur la paume. Les taches sont irrégulières et glissent.",
            "action": "Replacez-les entre vos paumes et vos recoins. Refroidissez vos mains entre les lots."
          },
          {
            "state": "Perfect",
            "description": "Doux, rond, uniformément revêtu. Les asperges sont respectées dans une couche dense et uniforme. Il tient sa forme de dôme sans s'accrocher.",
            "action": "Mettre dans des tasses en papier et réfrigérer jusqu'à servir. Ils restent réfrigérés jusqu'à 5 jours."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est trop chaud et malsain — les sphères se sont aplaties sur les disques. Les asperges sont à moitié enrobées plutôt que d'enrober la surface.",
            "action": "Réfrigérer les brigadeiros en forme pendant 15 minutes pour les raffermir, puis rerouler et re-coat."
          }
        ]
      },
      "feelCue": "Des rouleaux de brigadeiro bien fixés entre des palmiers graissés avec une résistance douce, comme rouler une boule ferme de cire douce. S'il colle fortement à votre paume et se déforme, il est trop chaud."
    }
  ]
};
