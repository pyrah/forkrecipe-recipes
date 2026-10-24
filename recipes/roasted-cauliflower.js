export default {
  "repoId": "master_mediterranean_whole_roasted_cauliflower_001",
  "parentRepoId": null,
  "slug": "roasted-cauliflower",
  "author": "ForkRecipe Kitchen",
  "title": "Choux-fleurs rôtis entiers",
  "description": "Une tête entière braisée tendre dans de l'eau salée et citronnée, puis bronzée dans le four sous une couche d'huile d'olive jusqu'à ce que les caillés deviennent sucrés aux noix et la couronne croustillante en fleurets brisés et caramélisés — servit de pièce centrale, sculptée à la table comme un rôti.",
  "cuisine": "Méditerranée",
  "culture": "Méditerranée orientale",
  "category": "vegetables",
  "tags": [
    "chou-fleur",
    "grillés",
    "méditerranéen",
    "végétarien",
    "végétalien",
    "pièce centrale"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tête entière de chou-fleur (feuilles coupées, tige coupée à plat)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Romanesco",
        "deux petites têtes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher (pour l'eau blanchissante)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Citron (à moitié jus, moitié pour servir)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Ghee fondu pour une croûte plus riche"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles d'ail (grâce à une pâte)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "confit ail"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Caravane"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux",
        "Poivre d'Alep"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer et poivre noir (pour finir)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Persil coupé et pignons de pin grillées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Amandes à la menthe et grillées",
        "graines de grenade"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "parcooked_cauliflower",
      "instructions": "Portez un grand pot d'eau profond à ébullition et assaisonner avec agressivité avec le sel casher et le jus de la moitié du citron — il devrait goûter comme de l'eau de mer. Abaissez la tête entière parée dans le bas de la tige, couvrez et laissez mijoter 8 à 12 minutes. Le chou-fleur est ainsi adouci et la tige dense est adoucie, ce qui lui permet de cuire avant que la surface ne brûle au four. Soulevez-le soigneusement avec deux cuillères à fentes ou une araignée et placez-le sur une grille pour égoutter et sécher à la vapeur complètement.",
      "visualCue": {
        "primaryTarget": "La tête s'est émoussée de blanc craie à un ivoire faible et un couteau à parure glisse dans la tige du noyau avec une résistance légère, comme une pomme de terre à peine cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un couteau rencontre un noyau dur et croquant à la tige et les fleurs se sentent encore rigides et sournoises.",
            "action": "Laisser mijoter encore quelques minutes. La tige doit produire ou le centre sera brut lorsque l'extérieur est bruni."
          },
          {
            "state": "Perfect",
            "description": "Une lame rencontre une résistance douce, même au cœur et les fleurs se sentent tendres mais toujours intactes et tiennent leur forme.",
            "action": "Égoutter la tige sur une grille et la laisser sécher à la vapeur pendant plusieurs minutes — l'humidité de surface est l'ennemi du brunissement."
          },
          {
            "state": "Overdone",
            "description": "Les fleurs sont en train de s'effondrer, la tête se sent lâche et arrosée, et les morceaux se brisent quand ils sont levés.",
            "action": "Manipuler très doucement et égoutter plus longtemps. Il rôtira encore magnifiquement — il suffit d'attendre un résultat plus doux et plus cuillerable qu'un résultat carvable."
          }
        ]
      },
      "feelCue": "Soulevée de l'eau, la tête doit se sentir lourde et souple, pas raide. Laissez - le s'asseoir jusqu'à ce qu'il cesse de chauffer et que la surface soit mate et sèche au toucher."
    },
    {
      "nodeId": "step_2",
      "action": "Manteau",
      "inputs": [
        "parcooked_cauliflower",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dressed_cauliflower",
      "instructions": "fouetter l'huile d'olive avec la pâte d'ail, le cumin et le paprika fumé dans un lisier de couleur rouille. Placer la tête égouttée dans une poêle à l'épreuve du four ou sur une feuille doublée et masser l'huile épicée sur toutes les surfaces, en l'ouvrant dans les crevasses entre les fleurs et sur la tige coupée. Soyez généreux — l'huile est à la fois l'assaisonnement et le milieu de friture qui croustille la couronne.",
      "visualCue": {
        "primaryTarget": "Toute la tête brille d'un rouge-terracotta, avec de l'huile légèrement piquée dans les plis et pas de taches sèches et pâles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des espaces blancs grisâtres montrent entre les fleurons et le frotte d'épices qui ne se trouve que sur le dessus en forme de dôme.",
            "action": "Inclinez la tête et brossez l'huile dans les coutures et sous le côté. Les taches non enrobées restent pâles et fadent au four."
          },
          {
            "state": "Perfect",
            "description": "Un manteau uniforme brillant, teint d'épices, s'accroche à toute la surface, de la couronne à la tige, et la cuisine sent le cumin grillé.",
            "action": "Placez-la dans la casserole et déplacez-la directement au four."
          },
          {
            "state": "Overdone",
            "description": "L'huile s'écoule dans une flaque autour de la base et le frottement semble lavé et pâle.",
            "action": "Verser l'excès d'huile et ajouter une autre légère poussière de paprika et de cumin directement sur la surface humide."
          }
        ]
      },
      "feelCue": "La surface doit se sentir lissée et complètement saturée sous vos doigts, la griffe plutôt que de glisser. L'ail cru et le paprika fumé doivent sentir vif et vif, ils se mêlent et s'édulcorent dans la chaleur."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "dressed_cauliflower"
      ],
      "outputState": "roasted_cauliflower",
      "instructions": "Faire cuire dans un four chaud à 220C / 425F pendant 30 à 40 minutes, en baissant une ou deux fois avec l'huile qui s'accumule dans la poêle. Le brunissement Maillard transforme la courge de surface profondément dorée et concentre les sucres en une douceur de noix, presque popcorn. La tête est faite lorsque la couronne est bronzée et craquelée et qu'une brochette glisse au centre sans résistance.",
      "visualCue": {
        "primaryTarget": "Un dôme d'acajou doré bruni avec des bouts de fleuret laqués et quelques bords sombres et blisters, tandis que l'intérieur est fondu en douceur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est en or pâle et encore douce, sans bords croustillants ni brunissement sur les extrémités du fleuron.",
            "action": "Retourner au four et lever la chaleur si nécessaire. La couleur est la saveur ici — poussez-la bien passé blond."
          },
          {
            "state": "Perfect",
            "description": "Deep golden-brown partout avec des bouts de crevasses, l'étrange bord carbonisé, et une brochette planant à travers le centre sans résistance.",
            "action": "Tirez-le maintenant, pressez sur le citron restant et reposez-vous cinq minutes avant de tailler."
          },
          {
            "state": "Overdone",
            "description": "De grandes taches sont passées de brun à noir amer et la fumée acride se lève de la poêle.",
            "action": "Retirer immédiatement et couper les bouts brûlés. Un four plus frais et une tente d'aluminium sauveront le prochain."
          }
        ]
      },
      "feelCue": "Tapez sur la couronne — il doit sembler et se sentir croquant, les bouts se cassent légèrement, tandis qu'une brochette à travers le cœur rencontre la douceur de donner du beurre. L'arôme devient sucré et grillé, le bord de l'ail brut a longtemps disparu."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "roasted_cauliflower",
        "ing_03",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_roasted_cauliflower",
      "instructions": "Transférer la tête reposée dans un plateau chaud. Pressez sur le jus de la moitié restante du citron, dispersez avec du sel feuilleté et quelques moulures de poivre noir, puis douchez avec du persil haché et des pignons de pin grillées. Portez le tout à la table et découpez les coins épais de la couronne à travers la tige tendre, en cuillant l'huile de poêle épicée sur chaque portion.",
      "visualCue": {
        "primaryTarget": "Une tête en bronze brillant aux herbes vertes et aux pignons de pin dorés, coupant en coins qui tiennent ensemble de la couronne croustillante au noyau doux et assaisonné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou-fleur a un goût plat et une note, sans éclats coupant la richesse de l'huile.",
            "action": "Ajouter plus de citron et de sel feuilleté à la table — l'acide et la croûte réveillent tout le plat."
          },
          {
            "state": "Perfect",
            "description": "Chaque coin est broyé et crémeux, salé et légèrement fumé, levé par le citron et le sel et fini avec des herbes fraîches et croquant.",
            "action": "Servir à la fois pendant que la couronne est encore crépitante, avec l'huile de poêle cuillerée."
          },
          {
            "state": "Overdone",
            "description": "La tête s'est refroidie et est devenue douce et grasse, la couronne croquante est devenue mâcheuse.",
            "action": "Retournez-la dans un four chaud pendant quelques minutes pour re-crisp, puis ré-habiller avec du citron frais et des herbes."
          }
        ]
      },
      "feelCue": "La première coupe devrait donner un léger craquement à la couronne puis donner à un intérieur doux et vapeur. En bouche, il fait vibrer les noix et les savoureux, illuminés par le citron, les pignons ajoutant une croûte beurreuse contre les cords tendres."
    }
  ]
};
