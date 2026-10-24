export default {
  "repoId": "master_indian_chicken_tikka_masala_001",
  "parentRepoId": null,
  "slug": "chicken-tikka-masala",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet Tikka Masala",
  "description": "Poulet mariné de yogourt carbonisé plié dans une sauce tomate veloutée et parfumée de fénugrek enrichie de crème – fumée aux bords, chaude et arrondie au cœur. Le plat qui fait le pont d'une tandoor Punjabi et d'une maison de curry britannique.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "proteins",
  "tags": [
    "poulet",
    "curry",
    "tandoori",
    "Crémeux",
    "tomates",
    "épicé"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "5 hr 30 min",
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
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisse de poulet désossée (coupée en morceaux de 4 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poitrine de poulet désossée",
        "panneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein de matière grasse (épaisseur / style grec)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "courbure suspendue"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâte gingembre-ail",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais râpé + ail broyé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre de chili rouge cachemiri (rouge foncé, doux)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika + une pincée de cayenne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon jaune (en dés)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Tomate passata / purée lisse",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières en conserve mélangées"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Crème lourde",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème de cajou",
        "crème de coco"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles de fénugreek séchées (kasuri methi)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Ghee ou huile neutre",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_11"
      ],
      "outputState": "marinated_chicken",
      "instructions": "fouetter le yogourt avec la moitié de la pâte gingembre-ail, un tiers du garam masala, les deux tiers du chili cachemirien et la moitié du sel. Enrobez soigneusement les cuisses de poulet, couvrez et réfrigérez pendant au moins 4 heures — la nuit est meilleure. Les cultures acides et vivantes du yogourt tendressent la viande tandis que le chili la tache d'un rouge de brique profonde.",
      "visualCue": {
        "primaryTarget": "Chaque pièce est entièrement enveloppée d'une épaisse couche de yogourt rouge rouille, sans taches chauves. La marinade tient à la viande plutôt qu'au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est mince et glisse; les pièces semblent rose pâle avec une couverture striée.",
            "action": "Incorporer une cuillère plus épaisse de yogourt et de chili pour épaissir le manteau, puis retourner au réfrigérateur pour le repos complet."
          },
          {
            "state": "Perfect",
            "description": "Revêtement rouge foncé uniforme qui s'accroche comme de la peinture humide; le bol sent l'épice chaude et le tang. La viande s'est légèrement raffermie par l'acide.",
            "action": "Filez sur des brochettes ou étalez sur un rack pour carboniser."
          },
          {
            "state": "Overdone",
            "description": "La surface est aqueuse et grise; le liquide s'est séparé et mis en commun (marié bien au-delà d'une journée).",
            "action": "Égoutter l'excès de liquide et taper les morceaux; la texture sera plus douce mais toujours bonne — car rapidement."
          }
        ]
      },
      "feelCue": "Les morceaux enduits doivent être lisses et lourds, le yogourt accroche vos doigts. L'odeur est brillante et lactique, pas aigre ou fermentée — si elle sent bon, la marinade est partie trop longtemps."
    },
    {
      "nodeId": "step_2",
      "action": "Char (tikka)",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "charred_tikka",
      "instructions": "Char le poulet dur et rapide sous un gril, dans une poêle en fonte chaude, ou sur une flamme ouverte. Vous voulez des taches profondément noircies pendant que l'intérieur reste juste cuit — environ 3-4 minutes de chaque côté. Ne pas faire cuire à sec; il finira dans la sauce. La marinade brûlée est l'âme de 'tikka' et apporte la fumée.",
      "visualCue": {
        "primaryTarget": "Les bords et les points élevés sont cloqués à presque noir, le reste une acajou brillante. Jus perles sur la surface et les morceaux ont rétréci et serré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est rouge pâle et terne, sans marques d'omble, la marinade semble toujours crue et pâteuse.",
            "action": "Levez la chaleur et laissez les morceaux non perturbés plus longtemps — l'omble a besoin d'un contact direct et ininterrompu."
          },
          {
            "state": "Perfect",
            "description": "Blistettes noircies sur un corps brun-rouge brûlé; un arôme fumé et grillé. C'est juste cuit, toujours juteux au centre.",
            "action": "Reposez les morceaux pendant que vous construisez la sauce."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux sont uniformément noirs et éparpillés, les bords tournant vers les cendres, la viande ferme et sèche.",
            "action": "Éliminez tout morceau vraiment carbonisé; simer dans la sauce va récupérer un peu d'humidité."
          }
        ]
      },
      "feelCue": "Écoutez une couture agressive et veillez à ce que la fumée s'évapore — c'est - à - dire qu'elle a de la saveur et non de l'échec. Un poke doit répondre à une résistance printanière, pas au calmar de la viande crue ou au rebond dur du surcuit."
    },
    {
      "nodeId": "step_3",
      "action": "Bhuna (frappez la base)",
      "inputs": [
        "ing_10",
        "ing_06",
        "ing_03",
        "ing_07",
        "ing_05",
        "ing_11"
      ],
      "outputState": "masala_base",
      "instructions": "Chauffer le ghee et faire frire l'oignon jusqu'à ce qu'il soit bien doré, 8-10 minutes. Ajouter le reste de la pâte gingembre-ail et faire cuire 1 minute. Ajouter le reste du chili cachemiri et la passata avec le reste du sel. Bhuna — faire frire et remuer à feu moyen — jusqu'à ce que la tomate s'assombrisse, se resserre et que la graisse se sépare aux bords, environ 10-12 minutes. Cette friture, pas simplement mijotante, est ce qui construit la profondeur.",
      "visualCue": {
        "primaryTarget": "Un masala épais, brillant, rouge brique qui s'éloigne proprement des côtés de la poêle, avec de petites piscines de graisse teinte orange se séparant autour du bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est molle, rouge vif et sent fortement la tomate crue; aucune graisse ne s'est séparée.",
            "action": "Continuez à frire à feu constant, en remuant, jusqu'à ce qu'il épaississe et que le bord cru de la tomate disparaisse."
          },
          {
            "state": "Perfect",
            "description": "Masala obscurci et jammy qui laisse un sentier propre quand vous faites glisser une cuillère; la graisse brille au bord et l'arôme est doux et rôti.",
            "action": "Allongez-vous avec un jet d'eau si nécessaire, puis pliez dans le poulet."
          },
          {
            "state": "Overdone",
            "description": "Masala colle et brûle, avec des taches brunes foncées sur la poêle et une odeur amère et brûlée.",
            "action": "Tirez le feu, ajoutez une éclaboussure d'eau pour déglacer, et grattez les morceaux collés avant qu'ils ne tournent le plat acride."
          }
        ]
      },
      "feelCue": "La base devient calme et lourde à mesure qu'elle se resserre; l'éclaboussure de friture précoce s'installe dans un gloussement lent et effréné. Lorsque la cuillère rencontre une vraie résistance et que la graisse brille, la bhuna est faite."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter et terminer",
      "inputs": [
        "masala_base",
        "charred_tikka",
        "ing_08",
        "ing_09",
        "ing_04"
      ],
      "outputState": "finished_tikka_masala",
      "instructions": "Pliez le poulet carbonisé (et tout jus de repos) dans la base du masala avec suffisamment d'eau pour enrober la sauce. Laisser mijoter doucement 6-8 minutes jusqu'à ce que le poulet soit cuit et a trempé la sauce. Incorporer la crème et le masala de garam restant, puis écraser les feuilles de fénugreek séchées entre vos paumes et les disperser. Laisser mijoter 2 minutes de plus — ne pas faire bouillir dur une fois la crème introduite — et reposer le feu avant de servir.",
      "visualCue": {
        "primaryTarget": "Une sauce en terre cuite-orange brillante qui sirote le poulet et enrobe l'arrière d'une cuillère, avec des gouttelettes de graisse qui brillent à la surface et des flecks de fénugrek.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gravy est mince et aqueuse; la crème est assise comme des stries pâles et la couleur est rose terne.",
            "action": "Laisser mijoter quelques minutes de plus pour réduire et laisser la crème se marier; la couleur s'approfondira en orange."
          },
          {
            "state": "Perfect",
            "description": "Unified, soyeux, sauce en terre cuite collant au poulet brillant; arôme arrondi de fenugrec et d'épices chaudes. Une cuillère laisse un chemin de remplissage lent.",
            "action": "Reposez-vous 5 minutes hors feu, puis servez avec du riz naan ou basmati."
          },
          {
            "state": "Overdone",
            "description": "Gravy a bouilli et fendue, avec des lèches huileuses et de la crème cordlée grainée; le poulet est sec et à cordes.",
            "action": "Abaissez le feu, remuez dans une cuillère de crème fraîche ou un jet d'eau pour réémulsionner et arrêtez immédiatement la cuisson."
          }
        ]
      },
      "feelCue": "Goût pour l'équilibre : la crème devrait adoucir le chili à une lueur chaude, le fenugrec devrait humer le saveur d'érable en arrière-plan, et un léger tang tomate devrait l'empêcher de tourner la cloie. Si le goût est plat, une pincée de sel et une pression d'acide le réveillent."
    }
  ]
};
