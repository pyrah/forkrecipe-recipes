export default {
  "repoId": "master_italian_panna_cotta_001",
  "parentRepoId": null,
  "slug": "panna-cotta",
  "author": "ForkRecipe Kitchen",
  "title": "Panna Cotta",
  "description": "La 'crème cuite' du Piémont à son plus pur — crème à peine chauffée à la vanille et juste assez de gélatine pour tenir une frémissante, à peine là-bas secoue quand l'assiette est bouchée et s'effondre sur la langue dans un lavage frais de lait sucré.",
  "cuisine": "Italien",
  "culture": "Piémontais",
  "category": "desserts",
  "tags": [
    "Panna-cotta",
    "Italien",
    "piémont",
    "Coutard",
    "vanille",
    "gélatine",
    "marque à l'avance"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "5 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Crème lourde (35% de matières grasses)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "remplacer jusqu'à 150g par du lait entier pour un ensemble plus léger"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "babeurre pour un panna cotta tangier"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 70,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Haricots de vanille, fendus et raclés",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de vanille",
        "zeste de citron finement blanchi pour une version d'agrumes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Feuille gélatine (or, 200 fleurs)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "gélatine en poudre, même poids, fleuri dans 30g d'eau froide"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Crème fraîche ou yogourt ordinaire (facultatif, hors chauffage)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Mascarpone pour une finition plus riche et plus dense"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Coulis de fruits ou de baies macérées",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Caramel",
        "pulpe passion-fruit",
        "fraises grillées à la balsamique"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bloom",
      "inputs": [
        "ing_05"
      ],
      "outputState": "bloomed_gelatin",
      "instructions": "Submerger les feuilles de gélatine une à la fois dans un bol d'eau froide afin qu'elles ne collent pas ensemble, et les laisser adoucir pendant 5 à 10 minutes. L'eau froide est essentielle: l'eau chaude dissout la surface et vous perdez la gélatine. Les draps seront limpides et entièrement pliables. Soulevez-les et pressez doucement l'excès d'eau; vous voulez la feuille gonflée, et non le liquide absorbant. (Pour la gélatine en poudre, arrosez-la sur 30 g d'eau froide et laissez-la absorber dans une éponge ferme.)",
      "visualCue": {
        "primaryTarget": "Les feuilles sont complètement molles et translucides, comme le film de collage humide, sans taches fermes ou nuageuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont toujours rigides aux bords ou ont des taches opaques et sinueuses qui n'ont pas pris de l'eau.",
            "action": "Laissez-les encore une minute ou deux dans l'eau froide jusqu'à ce qu'ils soient uniformément doux et clairs."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont complètement limpides, vitreuses et glissantes, tenant ensemble lorsqu'elles sont levées. Doucement pressés, ils versent un peu d'eau et se sentent comme de la gelée douce.",
            "action": "Réserver la gélatine pressée et réchauffer la crème."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles ont commencé à se dissoudre et à se décomposer dans l'eau, laissant un liquide lissé et laiteux.",
            "action": "La gélatine est restée trop longtemps sans force. S'ils sont simplement doux et presque intacts, procédez; s'ils ont réellement désintégré, commencez par des draps frais."
          }
        ]
      },
      "feelCue": "Une feuille bien fleurie se sent fraîche, lissée et élastique – elle s'étend sur les doigts et s'étire légèrement sans déchirer."
    },
    {
      "nodeId": "step_2",
      "action": "Infuse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "warm_infused_cream",
      "instructions": "Mélanger la crème, le lait, le sucre et le sel dans une casserole lourde. Grattez les graines de vanille dans le pot et déposez-les dans la capsule vide. Chauffer à feu moyen-doux, en remuant pour dissoudre le sucre, jusqu'à ce que le mélange s'échauffe et tremble à peine aux bords — environ 65 à 75°C. Ne pas faire bouillir; le panna cotta est de la crème cuite, pas de la crème, et vous n'avez besoin que de suffisamment de chaleur pour dissoudre le sucre et ensuite faire fondre la gélatine. Plus la température est basse, plus la saveur finale est propre et laiteuse. Tirez-le de la chaleur au moment où de fines escargots de vapeur se lèvent et de minuscules bulles sonnent la casserole.",
      "visualCue": {
        "primaryTarget": "Une crème brillante et vapeur avec le sucre complètement dissout et un léger frisson à la surface — pas de bulles de roulement, juste le premier mouvement aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème n'est que tiède, les grains de sucre sont encore en râpe contre la cuillère sur le fond de la poêle, et aucune vapeur ne monte.",
            "action": "Gardez le réchauffement doucement et en remuant; la gélatine a besoin de la crème chaude (au-dessus de ~50°C) pour fondre proprement, et le sucre non dissout laissera un set gritty."
          },
          {
            "state": "Perfect",
            "description": "La vapeur, le sucre complètement dissous, la surface tremble mais ne bouillonne pas. Un doigt tiré laisse une trace claire et lisse à l'arrière d'une cuillère.",
            "action": "Enlevez maintenant la chaleur et remuez la gélatine."
          },
          {
            "state": "Overdone",
            "description": "La crème est arrivée à ébullition complète, grimpant la poêle et sent légèrement cuit ou a formé une peau.",
            "action": "Un court ébullition est récupérable: épuisez n'importe quelle peau et laissez-la refroidir une minute avant d'ajouter de la gélatine, mais attendez - vous à une saveur légèrement cuite, moins fraîche."
          }
        ]
      },
      "feelCue": "La cuisine se remplit de vanille chaude et de lait doux; la crème est soyeuse et juste trop chaude pour garder un bout de doigt. Ça doit sentir du lait frais, jamais de la brûlure."
    },
    {
      "nodeId": "step_3",
      "action": "Température",
      "inputs": [
        "warm_infused_cream",
        "bloomed_gelatin",
        "ing_07"
      ],
      "outputState": "set_base",
      "instructions": "Hors de la chaleur, soulevez la capsule de vanille. Ajouter la gélatine pressée à la crème chaude et fouetter doucement jusqu'à ce qu'elle disparaisse complètement — elle se dissout presque instantanément dans le liquide chaud; si vous voyez un fil ou une masse, la crème s'est refroidie trop loin, si bien le réchauffer brièvement. Pour une panna cotta acidulée, fouetter dans la crème fraîche ou le yogourt maintenant, une fois la base refroidie à à peine tiède pour que l'acide ne courge pas. Placer la base à travers un tamis fin dans une cruche pour attraper toute gélatine ou peau non dissoute. Laisser refroidir, en remuant de temps en temps, jusqu'à ce qu'il épaississe à la texture de la crème non set et que les graines de vanille restent suspendues plutôt que de couler.",
      "visualCue": {
        "primaryTarget": "Une base lisse, versable, sans grumeaux, légèrement épaissie, de sorte qu'un revêtement s'accroche à la cuillère et que les taches de vanille s'accrochent uniformément tout au long plutôt que de tomber au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base est mince et chaude, et les graines de vanille coulent toutes au fond en quelques secondes.",
            "action": "Continuez à refroidir et à remuer (un bain d'eau glacée accélère). Le verser chaud laisse toutes les graines réunies à une extrémité de la panna cotta finie."
          },
          {
            "state": "Perfect",
            "description": "Cool mais encore fluide, peu épaississant, les graines de vanille dérivent en suspension. Aucune masse de gélatine visible lorsqu'elle est versée dans un cours d'eau mince.",
            "action": "Verser dans des ramequins ou des verres et refroidir."
          },
          {
            "state": "Overdone",
            "description": "La base s'est posée dans la cruche ou est partie grumelée et striée alors que la gélatine commençait à geler contre les côtés froids.",
            "action": "Chauffer délicatement la cruche sur un bol d'eau chaude et fouetter à nouveau lisse, puis tendre et verser rapidement avant qu'elle ne se répète."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la base de refroidissement — elle devrait laisser une piste qui se remplit lentement, le premier signe que la gélatine prend possession. Il devrait se sentir frais et soyeux, aucun grain de gélatine non dissoute contre la langue."
    },
    {
      "nodeId": "step_4",
      "action": "Jeu",
      "inputs": [
        "set_base",
        "ing_08"
      ],
      "outputState": "finished_panna_cotta",
      "instructions": "Divisez la base entre les ramequins légèrement huilés (pour le démolage) ou les verres de service. Tapez chacun pour régler les bulles d'air, puis refroidissez à découvert jusqu'à ce que les peaux de surface, puis couvrez et refroidissez au moins 4 heures, idéalement pendant la nuit. Pour démoudre, tremper un ramekin brièvement dans l'eau chaude, courir un bout de doigt autour du bord pour briser le joint, inverser sur une assiette et donner un secousse ferme jusqu'à ce qu'il tombe avec une gifle douce. Servir au froid avec des baies macérées, des coulis ou du caramel baigné autour de la base. Tout le point est le frottement: il devrait trembler comme un tambour frappé, pas se tenir debout raide.",
      "visualCue": {
        "primaryTarget": "Un panna cotta brillant et bombé qui tient sa forme sur la plaque mais tremble et s'écarte visiblement lorsque la plaque est tapée, avec une surface propre, lisse et non marquée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il s'effondre ou s'abaisse sur l'assiette et ne tient pas un dôme — le centre est encore liquide sous une peau mince.",
            "action": "Il lui faut plus de temps, ou plus de gélatine. Refroidir plus longtemps; si elle ne tient toujours pas, servir dans le verre comme une crème douce-set plutôt que de démouler."
          },
          {
            "state": "Perfect",
            "description": "Just-set: se tient comme un dôme doux, sillonne tout le chemin à travers quand nudgé, et une cuillère glisse dans avec presque aucune résistance, la surface de guérison lisse derrière elle.",
            "action": "Assiette de fruits ou de sauce et servir à froid."
          },
          {
            "state": "Overdone",
            "description": "Ferme et caoutchouteux — il tient un bord tranchant, rebondit d'une cuillère, et se sent printanier plutôt que fondant.",
            "action": "Trop de gélatine ou trop long. Il n'y a pas de fixation de ce lot (le manger de toute façon), mais la prochaine fois couper la gélatine d'un quart pour ce carquois signature."
          }
        ]
      },
      "feelCue": "Sur la langue il devrait à peine exister — un poids frais et crémeux qui fond au lait liquide en une seconde ou deux sans mâcher, sans peau, sans caoutchouc. Si tu dois le mâcher, c'est trop."
    }
  ]
};
