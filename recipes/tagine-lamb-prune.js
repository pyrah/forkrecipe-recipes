export default {
  "repoId": "master_moroccan_tagine_lamb_prune_001",
  "parentRepoId": null,
  "slug": "tagine-lamb-prune",
  "author": "ForkRecipe Kitchen",
  "title": "Tagine d'agneau avec pruneaux et amandes",
  "description": "L'épaule d'agneau braisée dans un brouillard capricieux d'épices marocaines avec des pruneaux qui fondent dans la sauce, du miel qui la laque à un brillant acajou, et du safran qui tourne l'or entier — fini avec des amandes grillées et de la coriandre fraîche, elle s'effondre au toucher le plus léger d'une cuillère.",
  "cuisine": "Maroc",
  "culture": "Maroc",
  "category": "proteins",
  "tags": [
    "Maroc",
    "agneau",
    "Tagine",
    "nord-africain",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau (coupée en morceaux de 5 cm, morceaux osseux préférés)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "cou d'agneau (augmentation du temps de cuisson de 30 min)",
        "épaule de chèvre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc (grâpé sur une boîte)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail (finement hachées)",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais (peauté et râpé finement)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu — utiliser 1 c. à thé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Le Président",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": [
        "Mélange égal de cumin, de coriandre, de cannelle et d'aspice"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Fils de safran (à 3 c. à soupe d'eau chaude)",
      "ratioValue": 0.3,
      "defaultUnit": "g",
      "substitutions": [
        "une petite pincée de curcuma pour la couleur seulement — la saveur est perdue"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Pruneaux",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Abricots séchés",
        "dates de mariage"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Chéri runny",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "mélasse de grenade pour un glaçage plus tart"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Amandes blanchies (reposées dans une poêle sèche jusqu'à l'or)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Noix de pin grillées",
        "Graines de sésame grillées"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Coriandre fraîche (approximativement hachée)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Liquid",
      "name": "Agneau ou bouillon de poulet",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "eau – réduire le sel en conséquence"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'argan pour une saveur plus authentique"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_15",
        "ing_16"
      ],
      "outputState": "seared_lamb",
      "instructions": "Faites sécher les morceaux d'agneau avec des serviettes en papier et assaisonnez généreusement de sel et de poivre. Chauffer l'huile d'olive à feu moyen-vif dans une base lourde de tagine ou un grand four hollandais jusqu'à ce qu'elle mijote. Casser l'agneau en lots, laissant de l'espace entre les morceaux, pendant 2 à 3 minutes de chaque côté jusqu'à ce qu'il soit profondément doré. La graisse d'agneau rend magnifiquement et sent la lanoline et la douceur — ne foulez pas ou vous allez vapeur au lieu de la mer. Retirer et reposer sur une assiette, en conservant toute la graisse dans le pot.",
      "visualCue": {
        "primaryTarget": "Chaque morceau d'agneau porte une croûte dorée uniforme sur au moins deux surfaces, et le pot a un bâtiment parfumé sombre sur son sol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est gris et liquide exsudant dans la poêle, mijotant dans ses propres jus plutôt que de brunir.",
            "action": "La poêle est trop fraîche ou trop bondée. Enlevez quelques morceaux et levez le feu jusqu'à ce que les morceaux restants grésillent brusquement quand ils entrent en contact avec la graisse."
          },
          {
            "state": "Perfect",
            "description": "Même, croûte dorée sur les visages exposés; la viande libère proprement du pot quand elle est bouchée. La graisse de la poêle est riche en ambre et parfumée.",
            "action": "Retirer l'agneau et cuire la base épicée dans le gras restant."
          },
          {
            "state": "Overdone",
            "description": "La croûte est devenue noire et le fond de la poêle commence à sentir l'acre.",
            "action": "Déglacer avec un jet de stock immédiatement pour soulever le fond avant qu'il ne devienne amer, puis baisser la chaleur pour la prochaine étape."
          }
        ]
      },
      "feelCue": "L'agneau siffle fort dès qu'il contacte la graisse. Résistez à l'envie de le déplacer, qu'il reste assis jusqu'à ce qu'il se libère seul; c'est le moment où la croûte est bien formée."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "seared_lamb",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "spiced_base",
      "instructions": "Baisser le feu à moyen. Ajouter l'oignon râpé dans le pot — il va scintiller et libérer une grande quantité d'humidité immédiatement. Faire cuire, en remuant souvent et en grattant le fond libre, pendant 8 à 10 minutes jusqu'à ce que l'oignon ait complètement ramolli et que l'humidité se soit largement évaporée. Ajouter l'ail, le gingembre, le ras el-hanout, le cumin, la cannelle et le curcuma. Incorporer continuellement pendant 2 minutes jusqu'à ce que les épices soient parfumées et enrober uniformément tout dans une pâte de terre cuite profonde. La cuisine doit sentir complexe, chaud et presque floral.",
      "visualCue": {
        "primaryTarget": "L'oignon s'est dissout dans la pâte d'épices, la base entière est de couleur rouille-ambre profonde, et de fines spores de vapeur s'élèvent parfumées d'épices chaudes — pas de fumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore humide et pâle, les épices flottent dans le liquide plutôt que de frire dans la graisse, et la netteté brute des épices fraîches domine encore l'arôme.",
            "action": "Continuer à cuire et à remuer jusqu'à ce que toute l'humidité de l'oignon se soit évaporée et que les épices soient vraiment frites dans le gras restant."
          },
          {
            "state": "Perfect",
            "description": "La base est sèche, aromatique et profondément colorée, sentant des épices chaudes et complexes — cannelle, cumin, et quelque chose de presque floral du ras el hanout.",
            "action": "Ajouter immédiatement le bouillon et l'eau de safran pour empêcher les épices de brûler."
          },
          {
            "state": "Overdone",
            "description": "La pâte d'épices colle dur au plancher de la casserole et commence à brûler, avec un bord sec et acride apparaissant dans l'arôme.",
            "action": "Déglacer avec un jet de stock immédiatement. Les épices deviendront amères s'ils brûlent — soulevez tout le fond alors qu'il est encore caramélisé plutôt que carbonisé."
          }
        ]
      },
      "feelCue": "Mélanger la base et sentir la résistance sous votre cuillère — lorsque l'humidité a cuit, la cuillère glissera à travers une pâte épaisse, presque sèche plutôt que de glisser à travers l'oignon humide. Ce frottement est le signal pour ajouter du liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "spiced_base",
        "ing_09",
        "ing_14"
      ],
      "outputState": "braising_tagine",
      "instructions": "Verser le bouillon chaud et le safran avec son eau forte, en remuant pour le combiner avec la base d'épices. Remettez l'agneau mariné dans le pot et nichez les morceaux afin qu'ils s'assoient dans une seule couche, la plupart submergés. Porter à mijoter doucement, puis couvrir et cuire à feu doux (ou dans un four à 160 °C / 325 °F) pendant 1 heure 30 minutes, en retournant l'agneau à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Un bouillon doré-ambre, teinté légèrement jaune du safran, mijotant à peine autour des morceaux d'agneau — le couvercle du pot tremble avec la bulle parfois lente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1 heure : l'agneau résiste encore à la fourchette et la sauce est fine et orange, avec les notes d'épices individuelles non encore unifiées.",
            "action": "Couvrez-vous et continuez à braquer. Le collagène a besoin de temps. Goûtez le bouillon — s'il goûte cru et épicé plutôt que profond et unifié, il lui faut plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Après 1,5 heure : l'agneau se rend au toucher d'une fourchette et la sauce s'est approfondie en couleur à un or ambré chaud, les épices tissées en une saveur cohérente plutôt que des notes séparées.",
            "action": "Ajouter les pruneaux, le miel et le safran s'il n'est pas encore ajouté, et continuer à braquer à découvert pour réduire."
          },
          {
            "state": "Overdone",
            "description": "L'agneau tombe en morceaux et la sauce s'est réduite trop loin, devenant salée et épaisse.",
            "action": "Ajouter une touche de bouillon chaud pour desserrer la sauce et manipuler l'agneau très doucement à partir de ce point pour conserver les morceaux."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle après 1,5 heure et respirez — l'arôme doit être un parfum profondément unifié et complexe où aucune épice ne s'annonce sur les autres. Cette intégration est le signal que le braise fonctionne."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "braising_tagine",
        "ing_10",
        "ing_11"
      ],
      "outputState": "glazed_tagine",
      "instructions": "Ajouter les pruneaux et arroser le miel. Incorporer doucement afin de ne pas briser les morceaux d'agneau maintenant tendres. Retirer le couvercle et relever le feu à moyen. Laisser mijoter à découvert de 20 à 25 minutes, en abaissant la viande à l'occasion, jusqu'à ce que la sauce ait réduit à un glaçage épais, brillant et de couleur acajou qui enrobe fortement l'arrière d'une cuillère. Les pruneaux seront partiellement dissous dans la sauce, ajoutant corps et douceur. Goûtez et corrigez l'assaisonnement avec du sel.",
      "visualCue": {
        "primaryTarget": "Une sauce acajou-brun profonde qui s'accroche épaissement à l'agneau et aux murs de la marmite, qui brille sous la lumière comme du caramel foncé — les pruneaux sont doux, gonflés et presque dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et ambre, en courant librement sur une cuillère. Les pruneaux sont entiers et fermes. La douceur et le brillant qui définissent ce plat ne sont pas encore présents.",
            "action": "Continuer à mijoter à découvert, en remuant doucement. La réduction de l'ambre à l'acajou glaçure prend du temps — ne pas se précipiter avec une chaleur élevée, ou le miel brûlera avant que la sauce diminue."
          },
          {
            "state": "Perfect",
            "description": "La sauce est épaisse, brillante et acajou; elle tombe de la cuillère dans une feuille lente et lourde. Les pruneaux sont gonflés et tendres, partiellement fusionnés avec la sauce. La saveur est douce, épicée et profondément salée tout à la fois.",
            "action": "Garnir et servir immédiatement sur le couscous ou le pain."
          },
          {
            "state": "Overdone",
            "description": "La sauce a réduit au-delà de l'étape de glaçure à un concentré collant et confitureux qui a surtout un goût sucré et salé, avec l'épice et le goût d'agneau enterré.",
            "action": "Ajouter un peu de bouillon chaud, remuer doucement et goûter. Le solde peut généralement être restauré avec un petit ajout de stock — l'ajouter progressivement."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans la sauce et maintenez-la à niveau — elle devrait tomber dans une feuille lente et ininterrompue, puis arrêter. Si elle s'écoule dans un ruisseau, elle doit encore être réduite. S'il tombe à peine et s'accroche dans une couche solide, il est allé trop loin."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "glazed_tagine",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_tagine",
      "instructions": "Éparpiller les amandes grillées sur la surface du tagine et finir avec une généreuse poignée de coriandre grossièrement hachée. Servir directement de la base de tagine ou transférer dans un plat de service large. Le contraste des amandes croquantes avec la sauce soyeuse et l'agneau doux, et la luminosité de l'herbe fraîche contre la glaçure sombre et douce, est ce qui rend le plat complet. Servir avec du couscous, du pain plat chaud ou du riz pour absorber la sauce.",
      "visualCue": {
        "primaryTarget": "La glaçure d'acajou foncé est éparpillée d'amandes dorées et d'herbes vertes vives.Le contraste des couleurs et des textures est intentionnel et frappant sur le fond richement sombre de la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amandes sont pâles et sous-dones, goûtant crus et légèrement amers plutôt que grillés et noisette.",
            "action": "Faire griller les amandes dans une poêle sèche à feu moyen, en les jetant fréquemment, jusqu'à ce qu'elles deviennent d'or profond et qu'elles sentent du beurre chaud et noisette — environ 4 à 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Des amandes dorées, croquantes et des herbes vertes vibrantes s'assoient sur la sauce acajou brillante. La première bouchée délivre un agneau riche, un glaçage doux, une croûte de noix et une coriandre fraîche.",
            "action": "Servir immédiatement — les amandes commenceront à ramollir dans la sauce après 10-15 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les amandes ont été ajoutées trop tôt et ont absorbé la sauce, perdant leur croquant entièrement. Le contraste textural a disparu.",
            "action": "Toujours ajouter la garniture d'amande au tout dernier moment avant de servir, jamais pendant le braise ou la réduction."
          }
        ]
      },
      "feelCue": "Appuyez sur une amande grillée entre deux doigts avant de la garnir — elle devrait se casser proprement et croustillantement. S'il comprime et plisse, il est sous-doré ou est resté dans l'impasse; toast un lot frais pour la garniture."
    }
  ]
};
