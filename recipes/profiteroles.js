export default {
  "repoId": "master_french_profiteroles_001",
  "parentRepoId": null,
  "slug": "profiteroles",
  "author": "ForkRecipe Kitchen",
  "title": "Profiteroles avec sauce au chocolat",
  "description": "Des soufflets de choux aérés, creux au centre, remplis de chantilly vanillé et noyés sous une sauce chocolatée chaude soyeuse – le dessert bistro parisien déraisonnablement parfait, fait de rien de plus que de la farine, du beurre, des œufs et du chocolat.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "desserts",
  "tags": [
    "les bénéfices",
    "Choux",
    "français",
    "chocolat",
    "crème-puff",
    "pâtisserie",
    "bistrot"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général (à l'exclusion des farines)",
      "ratioValue": 125,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Beurre de style européen pour une saveur plus riche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "moitié d'eau, moitié de lait entier pour une coquille plus tendre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Œufs (grands, légèrement battus)",
      "ratioValue": 160,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde (35%+ gras)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Base",
      "name": "Chocolat noir 70% finement haché",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Amer doux 60% pour une sauce plus sucrée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_03",
        "ing_02",
        "ing_05",
        "ing_06"
      ],
      "outputState": "butter_liquid",
      "instructions": "Mélanger l'eau, le beurre en dés, le sel et le sucre dans une casserole lourde. Mettre à feu moyen et remuer parfois jusqu'à ce que le beurre fond complètement. Augmenter la chaleur et faire bouillir toute la bulle qui brise la surface. Ne le laissez pas réduire; préparez la farine et agissez immédiatement quand elle ébullition. Une ébullition partielle n'est pas suffisante: tout le liquide doit être à ébullition réelle lorsque la farine entre, ou l'amidon ne cuit pas correctement.",
      "visualCue": {
        "primaryTarget": "Faire bouillir une mousse blanche vigoureuse sur toute la surface de la casserole. Le beurre est complètement émulsifié dans l'eau, pas de couche de graisse claire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre a fondu, mais le liquide ne fait que mijoter, pas bouillir. De petites bulles bordent le bord. La vapeur augmente mais aucune activité vigoureuse au centre.",
            "action": "Augmentez la chaleur et attendez un ébullition complet. Ajouter de la farine au liquide mijotant ne cuit pas correctement l'amidon et le chou ne sert pas."
          },
          {
            "state": "Perfect",
            "description": "Le liquide est bouillant vigoureusement sur toute sa surface, pas seulement aux bords. La vapeur et la mousse se lèvent. Le beurre et l'eau sont entièrement mélangés.",
            "action": "Retirer du feu et ajouter toute la farine en un seul mouvement."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a bouilli trop longtemps et a diminué sensiblement — la poêle semble à moitié vide par rapport au début.",
            "action": "Le rapport entre le liquide et la farine a changé. Ajouter 20-30 ml d'eau et ramener à ébullition avant d'ajouter la farine."
          }
        ]
      },
      "feelCue": "Vous devriez sentir la chaleur rayonner de la poêle avant de vous approcher — un ébullition vigoureux, agressif, pas une mijotée douce. Dès qu'il fait bouillir, agir sans hésiter."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "butter_liquid",
        "ing_01",
        "ing_04"
      ],
      "outputState": "choux_paste",
      "instructions": "Astucez toute la farine dans le liquide bouillant. Mélanger immédiatement et vigoureusement avec une cuillère en bois — le mélange se saisira dans une masse rugueuse et chaotique, puis lissera dans 30 secondes dans une boule. Retourner à feu moyen et continuer à remuer, presser la pâte contre le fond de la poêle, pendant 1 à 2 minutes pour la sécher — une peau mince doit se former sur la base de la poêle. Transférer dans un bol de mélangeur ou un grand bol et battre brièvement pour refroidir, puis ajouter les œufs battus en 6 à 8 ajouts, battre bien après chaque. Arrêtez lorsque la pâte tombe du batteur dans un V lent et conserve sa forme lorsqu'elle est conduite.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante et cohésive qui tombe du batteur dans une forme V lente, lourde et inversée et tient les crêtes pipelées sans s'étendre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est trop raide — elle s'éloigne du batteur en morceaux plutôt que de couler dans un V. Les formes de pipes se fissureraient plutôt que de souffler. Tous les œufs n'ont pas été ajoutés.",
            "action": "Ajouter encore 20 g d'œuf et battre soigneusement. Essai à nouveau — le test de chute en V est le seul indicateur fiable. Chaque ajout d'oeufs desserre et glose la pâte."
          },
          {
            "state": "Perfect",
            "description": "Une pâte lisse et brillante de couleur or pâle. Des chutes du batteur dans un V lent et ininterrompu. Lorsqu'elle est montée sur une plaque de cuisson, elle tient des crêtes et ne s'effondre pas.",
            "action": "Transférer immédiatement dans un sac de tuyauterie muni d'une buse et d'un tuyau de 1 cm. La pâte de Choux sèche rapidement et ne doit pas se reposer."
          },
          {
            "state": "Overdone",
            "description": "La pâte est trop molle — liquide, brillant et fluide. Il ne peut pas tenir une pipe et s'étale à plat sur la plaque de cuisson immédiatement.",
            "action": "Tu as ajouté trop d'oeufs. Il n'y a pas de remède pour la pâte de chou surminée, les bouffées seront plates et denses. La prochaine fois, ajoutez l'œuf plus lentement et arrêtez le test V au bon moment."
          }
        ]
      },
      "feelCue": "Verser une poupée de choux sur une cuillère en bois et l'incliner — il devrait glisser lentement comme un ruban propre et intact se terminant dans un point. Si elle tombe immédiatement ou ne bouge pas, c'est faux."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "choux_paste"
      ],
      "outputState": "baked_puffs",
      "instructions": "Préchauffer le four à 200°C (390°F). Piper la pâte de choux sur les plaques de cuisson doublées en rondelles d'environ 3 cm de diamètre, espacées de 5 cm. Mouiller un doigt et lisser les pics. Cuire au four de 20 à 25 minutes jusqu'à ce qu'ils soient gonflés, dorés et rigides. Ne pas ouvrir le four dans les 15 premières minutes. Après que les bouffées soient dorées et tiennent leur forme, réduisez la chaleur à 170°C et faites cuire 5 minutes de plus pour sécher l'intérieur. Transférer sur un rack et percer la base de chaque bouffée avec une brochette pour libérer la vapeur. Refroidir complètement avant de remplir.",
      "visualCue": {
        "primaryTarget": "Des bouffées très dorées et bien arrondies avec une coquille rigide et un intérieur creux audible lorsqu'on les tape. Les coquilles maintiennent leur forme sans adoucissement ni effondrement lorsqu'elles sont retirées du four.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bouffées semblent gonflées et dorées mais s'effondrent dans les 5 minutes suivant la sortie du four, tombant à plat et doux. L'intérieur est encore mouillé et non réglé.",
            "action": "Retournez immédiatement au four — les bouffées effondrées peuvent parfois être sauvées si elles sont prises tôt. Ils ont besoin de plus de temps à la température inférieure pour sécher entièrement l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Ferme, ambrée profonde, sonnant creux quand tapoté. Tenez leur forme après 15 minutes à température ambiante. La base est brun foncé et sèche.",
            "action": "Piercez la base avec une brochette, refroidissez complètement et remplissez dans les 30 minutes suivant le remplissage. Les bouffées remplies s'adoucissent après 1 heure."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé approchant brûlé, très rigide et dur. L'intérieur peut être sur-séché et fragile.",
            "action": "Ils sont encore utilisables — la sauce au chocolat masquera une coquille légèrement amère. Trim les bases les plus sombres si nécessaire. Réduire la température du four de 10°C la prochaine fois."
          }
        ]
      },
      "feelCue": "Prenez une bouffée refroidie et secouez - la doucement — vous devriez entendre et sentir l'espace creux à l'intérieur, comme cliqueter une boîte vide. S'il est solide ou dense, il n'a pas suffisamment séché. Une coquille ferme, sèche et aérée est le but."
    },
    {
      "nodeId": "step_4",
      "action": "Faire fondre",
      "inputs": [
        "ing_07",
        "ing_08"
      ],
      "outputState": "chocolate_sauce",
      "instructions": "Chauffer la moitié de la crème lourde dans une petite casserole à un peu en dessous d'un ébullition — des flocons de vapeur et un carquois de mouvement de surface, pas de bulles de roulement. Verser la crème chaude sur le chocolat noir finement haché dans un bol thermofuge et laisser intact pendant 90 secondes. Incorporer du centre vers l'extérieur en cercles lents jusqu'à ce que la ganache soit complètement lisse et brillante. La sauce doit être versable et chaude, mais pas rugueuse — si trop épaisse, ajouter une touche de crème. Gardez au chaud sur une casserole d'eau chaude.",
      "visualCue": {
        "primaryTarget": "Une sauce au chocolat profonde, brillante et fluide — la couleur d'un miroir foncé, lisse sans grumeaux ni stries de chocolat non fondu. Elle tombe d'une cuillère dans un ruban épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lumps de chocolat non fondu restent visibles. La sauce a l'air cassée, grasse ou granuleuse. Cela signifie que la crème n'était pas assez chaude ou que le chocolat n'était pas assez fin.",
            "action": "Incorporer doucement à feu très doux ou chauffer doucement au micro-ondes en 10 secondes jusqu'à ce que les morceaux se dissolvent. Si cassé (huile séparée), ajouter une cuillère à café de crème chaude et remuer en rond."
          },
          {
            "state": "Perfect",
            "description": "Gloire, sombre et lisse. Il coule d'une cuillère dans un ruban lent et non cassé avec une brillance humide. Ça sent le chocolat noir.",
            "action": "Restez au chaud. Verser sur les profitseroles remplis au dernier moment possible — les entreprises de sauce qu'il refroidit."
          },
          {
            "state": "Overdone",
            "description": "La crème était trop chaude et brûlée, donnant un léger sous-ton amer de lait brûlé. Ou la sauce s'est assise trop longtemps et s'est mise à un épais glaçage flou.",
            "action": "En cas de brouillard, réchauffez doucement avec une touche de crème. Une crème brûlée ne peut être fixée — remake si la note brûlée est forte."
          }
        ]
      },
      "feelCue": "La sauce ganache finie doit se sentir chaude (pas chaude) et envelopper l'arrière d'une cuillère dans une couche que vous pouvez tracer une ligne propre à travers avec un doigt. Si vous pouvez voir votre bout de doigt à travers la sauce sur la cuillère, il est trop mince."
    },
    {
      "nodeId": "step_5",
      "action": "Fouetter",
      "inputs": [
        "baked_puffs",
        "ing_07",
        "ing_09",
        "chocolate_sauce"
      ],
      "outputState": "finished_profiteroles",
      "instructions": "À l'aide de crème froide, de bol froid et de batteurs froids, fouetter la crème lourde restante avec l'extrait de vanille pour raffermir mais pas les pics raides — il devrait tenir sa forme quand piped mais se sentir aéré, pas grainé. Transfert dans un sac de tuyauterie. Faites une petite incision dans la base de chaque bouffée avec un couteau dentelé et un tuyau dans la crème jusqu'à ce que la bouffée soit nettement plus lourde. Disposer dans un bol ou sur une assiette, empiler généreusement, et verser la sauce au chocolat chaud sur la table afin que les invités entendent la sauce frapper la crème. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Des bouffées remplies assises sur un nuage de crème supplémentaire, la sauce au chocolat chaud brillant sur le dessus et baissant autour des bases, toujours couler quand servi.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème à l'intérieur des bouffées est encore liquide — elle était sous-volée et s'épuise lorsque la bouffée est inclinée. La sauce est froide et sertie, sans couler.",
            "action": "fouetter la crème avant de la remplir. Réchauffer la sauce. Profiteroles sont à leur meilleur servi immédiatement tandis que la sauce est liquide et les bouffées sont fraîches."
          },
          {
            "state": "Perfect",
            "description": "Chaque bouffée est nettement lourde avec de la crème et la tient lorsqu'elle est inclinée. La sauce chaude s'écoule doucement et brillantement sur la tour. Le contraste de température entre la crème froide et le chocolat chaud est immédiat.",
            "action": "Mangez dans les 10 minutes — la crème commence à adoucir les coquilles bouffées après cela."
          },
          {
            "state": "Overdone",
            "description": "Les bouffées ont été remplies il y a plus d'une heure et les coquilles sont devenues molles et soyeuses de l'humidité de la crème. La sauce s'est raffermie à un glaçage froid.",
            "action": "Remplir et sauce profiteroles seulement au moment de servir. L'assemblage de bouffées, de sauce et de crème peut être préparé jusqu'à 4 heures à l'avance et assemblé sur commande."
          }
        ]
      },
      "feelCue": "Un profitérole fraîchement rempli devrait se sentir plus lourd que vous ne l'espérez — coquille légère, lourde avec de la crème à l'intérieur. Mordre dedans et la coquille devrait donner une courte croûte avant de céder à la crème froide. La sauce chaude qui frappe la crème froide est la pointe du plat entier."
    }
  ]
};
