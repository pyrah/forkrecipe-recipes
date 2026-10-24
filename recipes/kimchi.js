export default {
  "repoId": "master_korean_napa-kimchi_001",
  "parentRepoId": null,
  "slug": "kimchi",
  "author": "ForkRecipe Kitchen",
  "title": "Napa Kimchi",
  "description": "Classique baechu kimchi — chou de napa entier salin jusqu'à ce qu'il plie sans casser, laqué avec une pâte de gochugaru cramoisi épaissie par le riz doux porridge, puis laissé à lacto-ferment dans quelque chose de funky, fizzy, et vivant.",
  "cuisine": "Coréen",
  "culture": "Péninsule coréenne",
  "category": "fermented",
  "tags": [
    "kimchi",
    "coréen",
    "fermenté",
    "lactofermentation",
    "Banchan",
    "gochugaru"
  ],
  "difficulty": 3,
  "activeTime": "1 hour",
  "totalTime": "3 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 5,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux de napa (baechu), coupés en deux ou en quatre",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "chou vert"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sels de mer grossiers (pour saumure)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine de riz douce (glutinée, pour porridge)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Farine polyvalente",
        "riz froid"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Gochugaru (poivrons rouges coréens)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Giroves d'ail, râpées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Saeujeot (crevettes fermentées salées) et sauce de poisson",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "miso (vegan)",
        "sauce de soja (vegan)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Poire asiatique râpée (ou sucre)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "pomme",
        "sucre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Radis coréens (mu) et pétoncles, julienned",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Daïkon",
        "Carotte"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Solvent",
      "name": "Eau (pour saumure et porridge)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Choux saumâtres",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_10"
      ],
      "outputState": "wilted_cabbage",
      "instructions": "Couper le napa ou le quart dans le sens de la longueur, en maintenant le noyau intact afin que les feuilles restent attachées. Dissoudre un tiers du sel dans l'eau pour faire une saumure rapide et tremper le chou; puis soulever chaque section et déposer le sel restant entre les feuilles, le concentrer sur les côtes blanches épaisses. Placez le chou coupé dans un grand bol et laissez-le reposer à température ambiante pendant 2 heures, en retournant toutes les 30 minutes, jusqu'à ce que les feuilles soient limpides et pliables. Rincer complètement trois fois dans de l'eau froide pour éliminer l'excès de sel, puis égoutter les côtés coupés dans une calandre pendant 30 minutes.",
      "visualCue": {
        "primaryTarget": "Les feuilles sont profondément flétries et translucides aux bords. Une grosse côte blanche se plie dans un U sans craquer, et une perle de liquides pleure de la surface coupée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les côtes se cassent encore et les feuilles ressortent. Un peu de liquide s'est mis dans le bol.",
            "action": "Saler à nouveau légèrement les côtes et lui donner encore 30-60 minutes, en retournant. Les cuisines froides et les têtes denses prennent plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Toute la section drape doucement sur votre main. Une côte se plie en deux sans craquelure. Le chou a nettement rétréci et libéré un bassin de saumure.",
            "action": "Rincer trois fois et bien égoutter — goûter une feuille, il devrait être agréablement salé comme un bon cornichon, pas dur."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles sont musquées, grises et glissantes; le chou se déchire au toucher.",
            "action": "Rincer d'une manière extra-forte pour retirer le sel et le manipuler doucement. La texture sera plus douce mais le kimchi est encore bon — mangez-le plus tôt."
          }
        ]
      },
      "feelCue": "Ramassez un quart par le cœur — le chou bien saigné pend lourd et souple comme une serviette humide. Snap une côte près de l'oreille: silence signifie prêt, une fissure croustillante signifie continuer à saigner."
    },
    {
      "nodeId": "step_2",
      "action": "Préparation de porridge",
      "inputs": [
        "ing_03",
        "ing_10"
      ],
      "outputState": "rice_porridge",
      "instructions": "fouetter la farine de riz sucrée dans une tasse d'eau froide jusqu'à ce qu'elle soit lisse, puis cuire à feu moyen, en remuant constamment, jusqu'à ce qu'elle s'épaississe dans une pâte translucide et brillante — 3 à 5 minutes. Il devrait tomber de la cuillère dans un ruban lent. Refroidir complètement; le porridge chaud tuera la culture et fera cuire les aromatiques. Cette amidon donne au corps assaisonné de s'accrocher aux feuilles et nourrit les bactéries lactiques pendant la fermentation.",
      "visualCue": {
        "primaryTarget": "Une pâte claire, comme de la gelée, la texture de pâte de papier peint lâche qui enveloppe l'arrière d'une cuillère et coule lentement dans une feuille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince, laiteuse et aqueuse; elle coule de la cuillère dans des gouttes plutôt qu'un ruban.",
            "action": "Continuez à cuisiner et à remuer encore une minute ou deux — il s'épaissit soudainement vers la fin."
          },
          {
            "state": "Perfect",
            "description": "Gloire et translucide, assez épais pour laisser une trace nette lorsque vous faites glisser la cuillère sur le fond de la poêle. Ça glisse dans un ruban lent.",
            "action": "Tirer de la chaleur et refroidir à la température ambiante avant de mélanger la pâte."
          },
          {
            "state": "Overdone",
            "description": "Stiff, chewing-gum et grumeux, il se glisse dans une boule de gel.",
            "action": "fouetter dans une éclaboussure d'eau froide de la chaleur pour la relâcher dans une pâte versable."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère à travers la poêle : un sentier qui tient son bord pour un battement avant d'envahir le dos signifie qu'il est prêt. Il devrait sentir légèrement sucré et amidon, jamais brûlé."
    },
    {
      "nodeId": "step_3",
      "action": "Construire la pâte",
      "inputs": [
        "rice_porridge",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "kimchi_paste",
      "instructions": "Dans le porridge refroidi remuer le gochugaru et laisser fleurir pendant 10 minutes — il gonflera et tournera une brique rouge profonde. Ajouter l'ail râpé, le gingembre, la saeujeot et la sauce de poisson, et la poire râpée, et mélanger à une pâte à cuiller lâche. Pliez dans le radis julienne et les pétoncles. Bouche : il doit être agressivement salé, sucré, salé et chaud, car le chou saigné va le muter. Ajuster avec plus de sauce de poisson pour le sel ou la poire pour la douceur.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, écarlate, scintillante, tachetée de radis blancs et de pétoncle vert, assez lâche pour frotter mais pas écailleuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sec et granuleux; le gochugaru n'a pas hydraté et la pâte ne se répand pas.",
            "action": "Ajouter le porridge ou une cuillère d'eau et reposer encore 5 minutes pour laisser les flocons boire et adoucir."
          },
          {
            "state": "Perfect",
            "description": "Rouge brillant profond, lisse et collant, extensible comme une confiture épaisse. Il a un goût trop fort à lui seul, exactement.",
            "action": "Passez directement à la farce du chou en portant des gants."
          },
          {
            "state": "Overdone",
            "description": "Soupir et mince; il glisse d'une feuille au lieu de s'accrocher.",
            "action": "Incorporer plus de gochugaru une cuillère à la fois jusqu'à ce qu'elle regagne et s'accroche."
          }
        ]
      },
      "feelCue": "Frottement entre les doigts gantés, la pâte est veloutée avec du grain de poivre. Il doit sentir l'ail et l'océan — l'ail, le funk des crevettes, et la chaleur terne du chili."
    },
    {
      "nodeId": "step_4",
      "action": "Pochettes et emballages",
      "inputs": [
        "wilted_cabbage",
        "kimchi_paste"
      ],
      "outputState": "packed_kimchi",
      "instructions": "Porter des gants, déposer une section de chou et frotter la feuille par la feuille, la travailler dans chaque couche et la concentrer sur les côtes blanches. Plier la partie farcie dans un paquet rangé, l'envelopper dans sa propre feuille extérieure, et l'emballer dans un pot ou une crosse propre, appuyant fermement pour expulser les poches d'air. Laisser au moins 3 cm de l'espace de tête — bulles de kimchi et s'élever comme il ferment. Plongez le bol de pâte avec une éclaboussure d'eau et versez-le sur le dessus pour garder tout immergé.",
      "visualCue": {
        "primaryTarget": "Chaque feuille est peinte en rouge à droite à la base, les faisceaux sont pressés serrés sans air pris au piège, et un film de saumure pourpre se lève pour couvrir le chou quand pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pauses pâles de chou non pasteurisé, emballage lâche avec poches d'air visibles, et le chou est assis au-dessus de la ligne liquide.",
            "action": "Ouvrez les faisceaux et collez les taches nues, puis appuyez plus fort pour emballer l'air et submerger le haut."
          },
          {
            "state": "Perfect",
            "description": "Un rouge uniforme, densément emballé, et juste submergé dans sa propre saumure assaisonnée. Le pot est lourd et solide.",
            "action": "Sceller librement et réserver au ferment."
          },
          {
            "state": "Overdone",
            "description": "Choux écrasés et meurtris nageant dans trop de liquide du suremballage.",
            "action": "Aucun mal n'a été fait — continuez; la texture sera un peu plus douce mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface emballée avec un poing: la saumure devrait bien monter et couvrir le chou, puis redescendre. Le pot doit se sentir dense, sans donner creux de l'air piégé."
    },
    {
      "nodeId": "step_5",
      "action": "Ferment",
      "inputs": [
        "packed_kimchi"
      ],
      "outputState": "finished_kimchi",
      "instructions": "Couvrir lâchement (un couvercle serti d'ajar, ou un poids de fermentation sous un chiffon) et laisser à température ambiante fraîche, 18-22°C, pendant 1 à 3 jours. Placez le pot sur une assiette pour attraper le débordement. Une fois par jour, pressez le chou sous la saumure avec une cuillère propre pour libérer du gaz et le laisser immergé. Goûtez tous les jours : il est prêt quand il devient agréablement aigre et acidulé et vous voyez des bulles animées. Puis transférer au réfrigérateur, où il mûrit lentement pendant des semaines et se conserve pendant des mois.",
      "visualCue": {
        "primaryTarget": "De petites bulles s'accrochent au chou et à la saumure, le liquide est légèrement nuageux, et l'odeur est vive, aigre et funky plutôt que crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de bulles, saumure claire, et la saveur goûte encore comme des légumes salés crus avec de l'ail pointu.",
            "action": "Laissez encore une demi-journée à plein jour à la température ambiante et goûtez à nouveau — la chaleur accélère."
          },
          {
            "state": "Perfect",
            "description": "Bubbling actif, arôme tanneur, saumure étourdissante sur la langue. La croûte tient mais la saveur est ronde et complexe.",
            "action": "Déplacez-le au réfrigérateur pour ralentir le ferment et verrouiller l'équilibre."
          },
          {
            "state": "Overdone",
            "description": "Agressivement aigre et doux, la saumure plate et surgissante, le chou boiteux.",
            "action": "Réfrigérer immédiatement et utiliser le kimchi trop mûr pour cuisiner — kimchi jjigae, riz frit et crêpes l'adorent."
          }
        ]
      },
      "feelCue": "Ouvrez le pot et écoutez un sifflement doux et des fizz; l'odeur devrait rendre votre bouche de l'eau avec amer. Un goût devrait fourmiller légèrement avec la carbonation et casser avec la croûte retenue."
    }
  ]
};
