export default {
  "repoId": "master_lebanese_shish-tawook_001",
  "parentRepoId": null,
  "slug": "shish-tawook",
  "author": "ForkRecipe Kitchen",
  "title": "Chish Tawook",
  "description": "Les cuisses de poulet marinées pendant des heures dans un mélange punissant de yogourt, citron, pâte de tomate, ail et sept épices jusqu'à ce que la chair soit tendre au cœur, puis filetées sur des brochettes et grillées sur du charbon de bois jusqu'à ce que les chars de marinade en place et la viande soit incroyablement juteuse à l'intérieur. La réponse ailky du Liban au monde, servie avec un toum si affirmé qu'il pouvait dégager une pièce.",
  "cuisine": "Libanais",
  "culture": "Maison de grillage libanaise",
  "category": "proteins",
  "tags": [
    "lébanèse",
    "poulet",
    "Grille",
    "brochette",
    "yaourt",
    "Ail",
    "citron",
    "marinade"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisses de poulet sans peau désossées (découpées en cubes de 4 cm)",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet (utiliser moins de chaleur, moins de temps)",
        "Ailes de poulet (raccords)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "labneh éclairci avec de l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc — utiliser la moitié de la quantité"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles à l'ail (grâce à un microplan à une pâte)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "poudre d'ail — utiliser 1 c. à thé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "ketchup en cas d'urgence — le goût change considérablement"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Seven-spice (baharat — mélange moulu d'aspice, girofle, cannelle, cumin, coriandre, poivre noir, muscade)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "tousspice + une pincée de cannelle et de muscade"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé pour la profondeur"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Toum (sauce à l'ail au Liban), pain plat chaud, navets marinés et persil frais à servir",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "aioli, bien que le personnage soit différent"
      ]
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
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Dans un grand bol, fouetter ensemble le yogourt, le jus de citron, la pâte d'ail, la pâte de tomate, l'huile d'olive, sept épices, le paprika et le sel jusqu'à ce qu'ils soient combinés dans une marinade uniformément orange-rose. Ajouter les cubes de poulet et mélanger pour s'assurer que chaque surface est enduite. Couvrir et réfrigérer pendant au moins 2 heures et idéalement pendant la nuit — l'acide lactique dans le yogourt et l'acide citrique du citron travaillent lentement à tendrer sans tourner la texture musquée. Retirer du réfrigérateur 30 minutes avant de griller pour enlever le froid.",
      "visualCue": {
        "primaryTarget": "Morceaux de poulet complètement obscurcis par la marinade terre cuite-orange, assis dans le bol sans taches sèches visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains morceaux de poulet montrent encore de la chair pâle à travers la marinade — ils n'ont pas été tournés et enduits à fond.",
            "action": "Recoller et presser fermement la marinade dans toutes les surfaces, y compris les côtés coupés."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface est recouverte de marinade orange épaisse. Des odeurs d'ail, d'épices et de citron. Après 2+ heures, les 2–3 mm extérieurs du poulet se sont légèrement opaques de l'acide.",
            "action": "Filer sur les brochettes et griller."
          },
          {
            "state": "Overdone",
            "description": "Mariné pendant plus de 24 heures — l'acide a transformé la chair externe en mousseux, gris et presque cuit.",
            "action": "Cuire immédiatement, bien que la texture soit légèrement plus mushi que l'idéal. Réduire légèrement le temps de grillage."
          }
        ]
      },
      "feelCue": "Un morceau de poulet bien mariné doit se sentir légèrement collant quand vous le ramassez — enduit mais pas noyé, comme un morceau de viande dans une pâte épaisse."
    },
    {
      "nodeId": "step_2",
      "action": "Grille",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "grilled_skewers",
      "instructions": "Enfilez le poulet mariné sur des brochettes métalliques (si vous utilisez du bois, trempez dans l'eau pendant 30 minutes d'abord), en alternance avec des légumes en option. Griller à haute chaleur directe — le charbon de bois est idéal, un grill à gaz au maximum est la prochaine meilleure option, une poêle en fonte à l'intérieur à crier haute chaleur est acceptable. Cuire de 4 à 5 minutes de chaque côté jusqu'à ce que la marinade soit carbonisée et que le poulet soit cuit. Ne déplacez pas le poulet pendant les 2 premières minutes de chaque côté — laissez la croûte se former. La marinade se noircira dans les taches de la pâte de tomates sucres — ce n'est pas brûler, c'est caramélisation. Temps total de cuisson : 10-12 minutes.",
      "visualCue": {
        "primaryTarget": "Profondément carbonisé et caramélisé sur les surfaces extérieures avec une couleur acajou foncée aux bords de la pâte de tomate, scintillement et étourdissement, avec des jus blancs limpides lorsque la pièce la plus épaisse est coupée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est pâle et la marinade semble à la vapeur plutôt que carbonisée. Les jus sont roses quand la pièce la plus épaisse est coupée.",
            "action": "Continuer le grillage et augmenter la chaleur. Déplacez les morceaux dans une zone plus chaude du grill."
          },
          {
            "state": "Perfect",
            "description": "Char d'acajou foncé en patchs, intérieur brillant en or blanc. Les jus sont limpides et incolores lorsque la pièce la plus épaisse est coupée au centre. Ça sent comme une grille de Beyrouth.",
            "action": "Reposez-vous 3 minutes avant de retirer les brochettes."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est uniformément noir à l'extérieur et la chair est sèche et serrée lorsqu'elle est coupée.",
            "action": "Habillez immédiatement avec l'huile d'olive, le citron et le persil frais. L'acidité et la graisse masqueront une certaine sécheresse."
          }
        ]
      },
      "feelCue": "Appuyez sur la pièce la plus épaisse avec un doigt — la cuisse de poulet parfaitement cuite résiste fermement mais ressort immédiatement, comme un muscle tendu. Si elle se sent douce et céder, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "grilled_skewers"
      ],
      "outputState": "rested_skewers",
      "instructions": "Retirer les brochettes du feu et reposer 3 à 5 minutes sur une assiette chaude avant de glisser le poulet. Le repos permet aux jus redistribués à la surface pendant la cuisson d'être réabsorbés dans la chair. Si vous coupez immédiatement, vous perdrez une quantité importante de jus dans l'assiette. Couvrir l'omble de papier, mais ne pas l'envelopper étroitement.",
      "visualCue": {
        "primaryTarget": "Les brochettes reposent sur la plaque avec de la vapeur qui monte doucement. Le char extérieur s'est installé du grésillement à une lueur tranquille. Pas encore de jus sur l'assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins d'une minute de repos — le poulet est encore actif et les jus se déversent lorsque les brochettes sont touchées.",
            "action": "Attendez les 3-5 minutes. Cette étape n'est pas négociable — la différence de jutosité est importante."
          },
          {
            "state": "Perfect",
            "description": "L'extérieur est calme, pas de étourdissement actif. Une petite quantité de jus est apparue sur l'assiette, mais le vrac est conservé dans la viande.",
            "action": "Faites glisser les brochettes et l'assiette."
          },
          {
            "state": "Overdone",
            "description": "Reposé pendant plus de 15 minutes à découvert — le poulet s'est refroidi, l'omble s'est carbonisé et le plat est tiède.",
            "action": "Une explosion rapide de 30 secondes sur le gril ou sous une grille restaure la croustillante."
          }
        ]
      },
      "feelCue": "Après le repos, coupez une pièce ouverte à son point le plus épais — les jus devraient se mettre à l'intérieur de la coupe plutôt que de s'écouler librement. C'est le jus qui reste à sa place."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "rested_skewers",
        "ing_10"
      ],
      "outputState": "finished_shish_tawook",
      "instructions": "Faites glisser le poulet des brochettes sur un plateau de service. Scatter le persil à feuilles plates haché sur le dessus. Servir immédiatement avec du pain plat chaud, un bol généreux de toum (sauce à l'ail au Liban), des navets roses marinés et des tranches de tomates fraîches. Le rapport correct est: poulet sur le pain, un frottis de toum, un navet mariné, et une pression de citron sur tout le truc. C'est un plat qui exige de manger avec vos mains.",
      "visualCue": {
        "primaryTarget": "Un plateau empilé de morceaux de poulet foncés, parfumés, brillants avec du persil vert vif, entouré de pain plat blanc et le rose vif de navets marinés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet a été plaqué sans les accompagnements — le toum et les navets marinés ne sont pas des garnitures facultatives, ils sont des composants structuraux du plat.",
            "action": "Servez tout simultanément. Le tawook shish sans toum est incomplet."
          },
          {
            "state": "Perfect",
            "description": "Toute la table est disposée avec le plateau au centre, toum dans un bol à côté, pain plat empilé et chaud, persil brillant et frais. Le poulet sent l'omble et les épices.",
            "action": "Mangez immédiatement et avec enthousiasme."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est assis depuis plus de 15 minutes et l'omble est devenu terne et la chair se serre à mesure qu'elle refroidit.",
            "action": "Une pression de jus de citron frais sur le poulet froid le ravive dramatiquement."
          }
        ]
      },
      "feelCue": "La prise d'un morceau chaud de tawook shish avec vos doigts devrait les laisser légèrement taché orange de la marinade et l'éclairement — c'est le signe d'un morceau bien mariné, bien reposé."
    }
  ]
};
