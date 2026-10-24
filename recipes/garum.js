export default {
  "repoId": "master_ancient-roman_garum_001",
  "parentRepoId": null,
  "slug": "garum",
  "author": "ForkRecipe Kitchen",
  "title": "Garum",
  "description": "Le moteur umami de Rome — de petits poissons gras et leurs propres viscères salés dans un baril et laissés à autolyser sous le soleil méditerranéen jusqu'à ce que la chair se dissout dans une liqueur claire, ambre et salée. C'est la reconstruction sans danger alimentaire d'Apicius et de la Geoponica : fortement salée, lentement digestée, puis filtrée à une saumure brillante qui sent la mer crue et goûts de pure profondeur salée une fois cuite.",
  "cuisine": "Ancien romain",
  "culture": "Antiquité méditerranéenne",
  "category": "condiments",
  "tags": [
    "Garum",
    "liquamen",
    "fermenté",
    "poisson-sauce",
    "romaine",
    "apicius",
    "umami",
    "historique"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "90 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Petits poissons gras entiers (anchois, sardine, sprat ou maquereau), avec viscères intacts",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "anchois frais entiers (meilleur, classique)",
        "un mélange de petits poissons entiers plus des boyaux/sang de poissons supplémentaires pour une sauce de style haimation plus riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer grossier (non iodé)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "sel de décapage",
        "sel casher en poids"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Origan séché (rigani)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "Marjoram séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Frondes fraîches d'aneth ou de fenouil",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "graines de fenouil séchées, légèrement broyées"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Graines de coriandre, craquées",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Graines de cumin pour une note plus élevée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Hydration",
      "name": "Vieux vins ou poissons (facultatif, pour accélérer la saumure)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "eau",
        "omit entièrement pour un ferment plus sec et plus lent"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "salted_fish_mass",
      "instructions": "Peser le poisson entier et non gobé — les viscères portent les enzymes protéolytiques qui font le travail — et rincer le grain de surface. Dans un récipient non réactif (verre, verre ou plastique de qualité alimentaire; jamais de métal nu) couche le poisson avec le sel, commençant et se terminant par une généreuse couche de sel et écrasant le poisson légèrement si chair et intestin se mêlent. Le sel doit être d'au moins 25 à 30 pour cent du poids du poisson : il s'agit de la ligne de sécurité alimentaire, assez élevée pour supprimer le Clostridium et les bactéries putréfiantes tout en permettant aux enzymes propres au poisson et aux microbes tolérants au sel d'autolyser lentement la chair. Rien de moins et ça pourrit plutôt que des ferments.",
      "visualCue": {
        "primaryTarget": "Chaque poisson est entièrement enduit et emballé dans du sel humide, collant, sans chair nue exposée à l'air — une masse dense, scintillante, rose-gris qui sent déjà nettement le bruissement plutôt que la chair de poisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches de poissons minces montrent par le sel mince, et la surface semble sèche et poudreuse plutôt que humide.",
            "action": "Ajouter plus de sel et appuyer fermement sur la masse. C'est la façon la plus courante de gâcher le garum — errez lourd."
          },
          {
            "state": "Perfect",
            "description": "Le poisson et le sel forment une masse cohésive et pleurante; en moins d'une heure ou deux, le sel dégage de l'humidité et un film de saumure commence à s'accumuler. Ça sent propre, salé et marin.",
            "action": "Poidser la surface et passer à l'étape de saignage."
          },
          {
            "state": "Overdone",
            "description": "Tellement de sel qu'il ne se dissoudra jamais complètement en saumure et que les poissons sont séchés comme dans une cure de morue salée.",
            "action": "C'est sûr mais lent — ajoutez l'éclaboussure de vin ou de bouillon en option pour démarrer la saumure, et attendez un ferment plus long."
          }
        ]
      },
      "feelCue": "La masse salée devrait se sentir froide, sèche et lourde, libérant du liquide lorsque vous le pressez. L'odeur est l'épreuve : saumure aiguë et mer fraîche, jamais sulfurée ou aigre-rottée. Faites confiance à votre nez à chaque étape."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "salted_fish_mass",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "packed_ferment",
      "instructions": "Scatter l'origan, l'aneth ou le fenouil, la coriandre fissurée et la baie à travers la masse — les recettes romaines exigent des herbes aromatiques à la fois pour la saveur et, ils croyaient, pour tempérer l'odeur. En cas d'utilisation, verser dans l'éclaboussure de vieux vins ou de poissons pour aider la saumure. Emballez tout fermement dans un pot propre, pressez les poches d'air, et placez un poids (un sac rempli de saumure ou une pierre désinfectée) sur le dessus afin que les solides restent immergés une fois la saumure levée. Couvrir de tissu ou d'un couvercle qui laisse le gaz s'échapper mais empêche les insectes de s'échapper. Le poisson doit rester sous la saumure du ferment entier; tout ce qui s'enfonce au-dessus de la surface peut se mouler.",
      "visualCue": {
        "primaryTarget": "Un pot serré avec le poisson pondéré entièrement submergé sous une couche montante de saumure grise nuageuse, herbes suspendues dans tout, espace de tête minimal.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poissons flottent au-dessus de la ligne de liquide, ou de grandes poches d'air restent piégées dans l'emballage.",
            "action": "Appuyez plus fort, ajoutez une saumure de sel de 25 % (250 g de sel par litre d'eau) jusqu'à ce que tout soit couvert et re-poids."
          },
          {
            "state": "Perfect",
            "description": "La saumure a grimpé sur les solides pondérés, le paquet est dense et sans bulles, et les herbes sont uniformément distribuées.",
            "action": "Étiquette avec la date et déplacer quelque part chaud au ferment."
          },
          {
            "state": "Overdone",
            "description": "Le pot est entaillé si plein il n'y a pas de place pour la saumure pour augmenter le poids.",
            "action": "Enlevez un peu des solides — laissez au moins quelques centimètres de l'espace de tête pour que les poissons puissent rester submergés."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur le poids vers le bas, la saumure devrait bien monter et couvrir le poisson, puis s'infiltrer lentement. Le pot emballé se sent solide et lourd sans vide d'air."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "packed_ferment"
      ],
      "outputState": "autolyzed_liquamen",
      "instructions": "Placez le pot dans un endroit chaud — les Romains ont utilisé le soleil méditerranéen complet pendant un à trois mois; à l'intérieur, tenez-le à un endroit stable de 30 à 40 C (un placard chaud, près d'un radiateur, ou un déshydratant faible) pendant 2 à 3 mois. Chaque semaine, ouvrez-le, laissez le gaz s'éteindre et remuez doucement ou repoussez les solides sous la saumure. Au fil des semaines, les enzymes de poisson (et les bactéries tolérantes au sel) digèrent la protéine : la chair s'effondre, se brise et se dissout enfin, tandis que le liquide s'assombrit du gris nuageux à un noyer-ambre clair. Le raccourci Apicius classique le tenait chaud au soleil pendant aussi peu que 20 à 30 jours; un endroit frais peut prendre 6 mois ou plus. Il se fait quand les solides ont largement liquéfié et l'odeur se transforme de la pêche crue à profondément salé et bouillonnant.",
      "visualCue": {
        "primaryTarget": "Le poisson s'est effondré dans une boue molle d'os et de peau sous un liquide clair, brillant, ambre à mahogany qui sent intensément savore, salé et bouillonnant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson tient toujours sa forme, le liquide est pâle et moulu, et l'arôme est fortement poissonneux sans cette profondeur savoureuse ronde.",
            "action": "Continuez à fermenter et gardez-le au chaud. Mélanger chaque semaine. Donnez - lui plus de temps: le garum mal cuit a un goût mince et cru."
          },
          {
            "state": "Perfect",
            "description": "La chair s'est dissoute dans une pâte lâche, les os sont libres au fond, et une liqueur d'ambre claire est assise sur le dessus sentant fortement l'umami et la mer. Une goutte sur la langue est ronde, savoureuse et légèrement salée.",
            "action": "Arrêter le ferment et passer au filtrage."
          },
          {
            "state": "Overdone",
            "description": "L'odeur devient vraiment putride — sulfureuse, comme l'ammoniaque ou les œufs pourris — ou vous voyez des moisissures colorées, des bourrasques ou un film visqueux.",
            "action": "Jetez tout le lot. Un garum sain sent agressivement savoureux, mais jamais d'ammoniaque ou d'eaux usées; un moule de surface ou un récif pourri signifie que le sel était trop bas ou que le poisson restait au-dessus de la saumure. Ne le goûtez pas."
          }
        ]
      },
      "feelCue": "Frottez un peu de liquide entre vos doigts — il devrait être lissé et légèrement gras, pas visqueux ou câblé. L'arôme est fort et sans équivoque savoureux; s'il sent l'ammoniac ou la pourriture, croyez que l'avertissement sur la recette et jetez-la dehors."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "autolyzed_liquamen"
      ],
      "outputState": "finished_garum",
      "instructions": "Déposer la liqueur claire du haut du sédiment, puis filtrer tout à travers un tamis fin doublé de plusieurs couches de cheesewill ou d'un tissu de coton propre — les Romains ont appelé ce liquamen éclairci, et les solides dépensés laissés derrière était la pâte allec moins cher. Pour un garum cristallin et brillant, souchez deux fois et laissez-le s'installer pour que toutes les fines tombent. En option, laissez mijoter le liquide tendu doucement pendant quelques minutes et écrémer pour pasteuriser et le concentrer. Bouteille dans un pot propre scellé. Le garum fini est intensément salé et salé; utilisez-le par la cuillère à café comme Rome l'a fait — pour assaisonner les sauces, les braises, les verts et même les plats sucrés — où il fond en umami pur et invisible. Il se conserve des mois à des années dans le frigo grâce à son sel.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré clair et brillant avec un léger éclat, exempt de solides, versant proprement sur la cuillère — comme un stock de poisson foncé, brillant, très salé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide tendu est nuageux et plein de fines en suspension, avec des sédiments qui ne se déposent pas.",
            "action": "Plongez à nouveau à travers un chiffon frais et laissez-le reposer froid pendant la nuit; versez le liquide clair des dregs fixés."
          },
          {
            "state": "Perfect",
            "description": "Garum ambré clair et brillant qui enrobe une cuillère et goûte d'une saveur concentrée et arrondie derrière un mur de sel — une seule goutte transforme un plat.",
            "action": "Bouteille, réfrigérer et utiliser avec parcimonie. Garder la pâte épuisée comme allec pour assaisonner les plats rustiques."
          },
          {
            "state": "Overdone",
            "description": "S'il est mijoté, il s'est réduit trop loin et est devenu durement salé, lugubre ou brûlé aux bords.",
            "action": "Allongez-vous avec un peu d'eau pour ramener le sel à l'équilibre; s'il est brûlé, retirez le liquide propre et jetez les filets brûlés."
          }
        ]
      },
      "feelCue": "La sauce finie doit verser fin et propre, ne laissant qu'une légère lisse sur la cuillère. Sur la langue, il atteint d'abord le sel, puis fleurit en profondeur savore, jamais amer, aigre ou ammoniaque. Une goutte dans une casserole de nourriture de cuisine devrait disparaître en pur umami."
    }
  ]
};
