export default {
  "repoId": "master_french_ratatouille_001",
  "parentRepoId": null,
  "slug": "ratatouille",
  "author": "ForkRecipe Kitchen",
  "title": "Ratatouille",
  "description": "La pratique provençale non pressée de cuisiner chaque légume d'été à part, selon ses propres conditions, puis de les marier dans une base de tomates de vin profond jusqu'à ce que tout le ragoût goûte de soleil, d'huile d'olive, et les collines sèches du Var. Gloire, confiture, jamais aqueux.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "vegetables",
  "tags": [
    "ratatouille",
    "français",
    "d ' origine",
    "légumes",
    "ragoût",
    "été"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergines (coupées en cubes de 2 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "aubergines de graffiti",
        "Aubergines japonaises"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Zucchini (coupé en demi-lunes de 2 cm)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "courge jaune d'été"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "poivrons rouges et jaunes (2 cm)",
      "ratioValue": 70,
      "defaultUnit": "parts",
      "substitutions": [
        "poivrons romains"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Tomates à la prune (peau, hachée)",
      "ratioValue": 90,
      "defaultUnit": "parts",
      "substitutions": [
        "bonnes tomates San Marzano en conserve"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune (coupé)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail coupés",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Thym et baie frais (petit paquet)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "herbe de Provence"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Basilic frais (torn, pour finir)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sel et égout",
      "inputs": [
        "ing_01",
        "ing_10"
      ],
      "outputState": "drained_eggplant",
      "instructions": "Mélanger les cubes d'aubergine avec environ un tiers du sel dans une calandre et laisser reposer 20-30 minutes. Des perles de liquide brun vont pleurer. Appuyez doucement et tapez bien au sec avec une serviette. Cela s'effondre les parois cellulaires spongieuses, de sorte que l'aubergine brunisse au lieu de boire un flot d'huile.",
      "visualCue": {
        "primaryTarget": "Les visages coupés ont l'air légèrement humides et éparpillés, le plancher colandé tacheté de gouttes ambres. Les cubes se sentent plus denses et plus souples que lorsqu'ils sont crus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aubergine se sent encore ferme, sèche et squeaky; aucun liquide n'a été mis en commun en dessous.",
            "action": "Donnez - lui encore 10 à 15 minutes — l'aubergine mûre a besoin de temps pour libérer son amertume et son humidité."
          },
          {
            "state": "Perfect",
            "description": "Les surfaces scintillent avec l'humidité transpirée, les cubes se plient légèrement sous une presse, les gouttelettes ambres recueillies sous.",
            "action": "Séchez-vous et passez à la casserole."
          },
          {
            "state": "Overdone",
            "description": "Les cubes sont limpides, gris et goûtent agressivement au sel.",
            "action": "Rincer brièvement sous l'eau froide, presser et bien sécher; réduire le sel ajouté plus tard dans le ragoût."
          }
        ]
      },
      "feelCue": "Pressée entre le papier, l'aubergine doit se sentir souple et légèrement collante — pas mouillée, pas sèche. La serviette sort légèrement teintée, jamais trempée."
    },
    {
      "nodeId": "step_2",
      "action": "Séparément",
      "inputs": [
        "drained_eggplant",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "seared_vegetables",
      "instructions": "Travaillant dans une grande poêle à feu moyen-vif, entrez chaque légume seul dans un film d'huile d'olive : aubergine jusqu'à l'or profond, courgettes jusqu'à ce qu'elles soient tachetées et tendres, poivrons jusqu'à ce que les bords carbonisés soient adoucis. Ne foulez pas: une casserole remplie de vapeurs. Réserver chaque lot à mesure qu'il se termine. La cuisine à part est l'âme de la vraie ratatouille : chaque légume garde son caractère propre.",
      "visualCue": {
        "primaryTarget": "Chaque pile est nettement brunie — aubergine acajou, courgettes roussâtres, poivrons cloqués — tout en tenant leur forme, brillante avec de l'huile mais pas grasse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont pâles, doux, et de l'eau qui pleure dans la poêle; pas de couleur, pas d'arôme de caramel.",
            "action": "Levez la chaleur, travaillez en petits lots, et attendez — la couleur est la saveur ici."
          },
          {
            "state": "Perfect",
            "description": "En or profond, bords cloqués, tendres mais intacts. La cuisine sent la noix et le doux, l'huile brille.",
            "action": "Retirer et réserver; construire la base de tomates dans la même casserole."
          },
          {
            "state": "Overdone",
            "description": "Des bords noircis à l'amertume, des aubergines s'effondrent à la bouillie, des poivrons se transforment en flaques de frêne.",
            "action": "Tirer immédiatement et choisir les morceaux brûlés; réduire la chaleur pour le prochain lot."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement constant et confiant, jamais un rugissement ou une vapeur silencieuse. Les légumes doivent se libérer proprement de la poêle lorsqu'une pièce est bien cousue — si elle colle et déchire, donnez-lui quelques secondes de plus."
    },
    {
      "nodeId": "step_3",
      "action": "Construire la base",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_04",
        "ing_08",
        "ing_07"
      ],
      "outputState": "tomato_base",
      "instructions": "Dans la même casserole, adoucir l'oignon tranché dans l'huile d'olive à feu moyen jusqu'à ce que translucide, 6-8 minutes, puis ajouter l'ail pendant une minute jusqu'à parfumer. Ajouter les tomates hachées et le paquet d'herbe. Laisser mijoter délicatement, en remuant, jusqu'à ce que les tomates se décomposent en une sauce épaisse et confitureuse avec l'huile commençant à se séparer aux bords, environ 12-15 minutes.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique brillante qui fond sur une cuillère, avec un mince halo d'huile d'orange pooling au bord — pas de flaque aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est molle et lumineuse, les tomates sont encore dans des morceaux d'eau distincts, goûtant vif et cru.",
            "action": "Continuez à mijoter à découvert si l'excès d'eau cuit et la saveur approfondit."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, jammy, rouge profond. Une cuillère traînée à travers la poêle laisse un sentier qui se remplit lentement. Perles d'huile aux bords.",
            "action": "Pliez dans les légumes secs."
          },
          {
            "state": "Overdone",
            "description": "La sauce est sombre, collante et captive sur le fond de la poêle avec une odeur brûlée.",
            "action": "Incorporer une éclaboussure d'eau pour se détendre et racler le fond avant qu'il ne brûle; abaisser la chaleur."
          }
        ]
      },
      "feelCue": "La résistance à l'arrachage se construit à mesure que l'eau part — la sauce doit tirer derrière la cuillère comme de la confiture molle. L'arôme passe de vif et acide à rond, doux et concentré."
    },
    {
      "nodeId": "step_4",
      "action": "Mariage et ragoût",
      "inputs": [
        "tomato_base",
        "seared_vegetables",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_ratatouille",
      "instructions": "Pliez tous les légumes dans la base de tomates. Couvrir et cuire à feu doux pendant 20-25 minutes afin que les saveurs se marient, puis découvrir pour les 10 dernières minutes pour serrer le ragoût. Jeter le paquet d'herbe, goûter et ajuster le sel, et remuer le basilic déchiré de la chaleur. La ratatouille est la meilleure après le repos: chaude ou à température ambiante, jamais chaude.",
      "visualCue": {
        "primaryTarget": "Légumes brillants et soyeux, suspendus dans une sauce juste assez épaisse pour enrober — morceaux distincts dans un ragoût de confiture unifié, avec un éclat d'huile d'olive sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bassins liquides aqueux au fond; les morceaux ont un goût séparé plutôt que mélangé; la sauce coule finement de la cuillère.",
            "action": "Défaire et laisser mijoter plus longtemps pour réduire le liquide et laisser les légumes échanger saveur."
          },
          {
            "state": "Perfect",
            "description": "Légumes tendres dans une sauce brillante et collante. Les saveurs goût tissées ensemble pourtant chaque légume est encore reconnaissable. L'huile brille à la surface.",
            "action": "Hors feu, plier le basilic et reposer au moins 15 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Tout s'est effondré dans une mousse foncée indistincte; la sauce est sèche et pâteuse, collée à la poêle.",
            "action": "Allongez-vous avec un peu d'eau ou d'huile d'olive et servez-vous d'une version rustique et extensible, excellent sur le pain grillé."
          }
        ]
      },
      "feelCue": "Le ragoût fini devrait tomber richement d'une cuillère, laissant le métal légèrement enduit — pas soupeux, pas raide. Il doit sentir l'huile d'olive, la tomate douce et les herbes chaudes. Goûté à la température ambiante, les saveurs s'ouvrent et s'achèvent."
    }
  ]
};
