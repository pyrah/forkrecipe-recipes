export default {
  "repoId": "master_korean_kalbi_001",
  "parentRepoId": null,
  "slug": "kalbi",
  "author": "ForkRecipe Kitchen",
  "title": "Côtes courtes Kalbi coréennes",
  "description": "Des côtes courtes beurrées laquées dans une marinade de soya, grillées jusqu'à ce que les bords caramélisent et que les os riches en moelle parfument la fumée.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "proteins",
  "tags": [
    "boeuf",
    "coréen",
    "grillé",
    "côtes courtes",
    "bbq",
    "marinade",
    "Kalbi",
    "- Oui."
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes courtes coupées (coupées transversalement) de 1 cm d'épaisseur",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "côtes du dos de boeuf beurré",
        "Côtes courtes coupées en LA"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Poire asiatique râpée (avec jus)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Poire de bosc",
        "kiwis (utiliser la moitié — plus enzymatique)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari",
        "amines de noix de coco (moins salées)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 6,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et râpé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre haché (3 g)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "pcs",
      "substitutions": [
        "dessus d'oignon vert"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser reposer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_ribs",
      "instructions": "Placez les côtes flanquées dans un grand bol d'eau froide. Faire tremper pendant 30 minutes, changer l'eau une fois à mi-chemin. Cela retire des fragments de sang et d'os de surface, produisant un plat plus propre et moins gamey fini. Pat soigneusement sécher avec des serviettes en papier quand c'est fait.",
      "visualCue": {
        "primaryTarget": "L'eau devient légèrement rose puis s'éclaircit. Les côtes émergent avec des bords osseux pâles et propres et une surface mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est profondément rouge et nuageuse après 10 minutes.",
            "action": "Égoutter et remplir immédiatement. Les côtes ont besoin d'au moins 15 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "L'eau est légèrement roussée et claire. Les extrémités osseuses sont blanches. La chair est un rouge profond propre.",
            "action": "Pat sec des deux côtés — l'humidité de surface est l'ennemi de la caramélisation."
          },
          {
            "state": "Overdone",
            "description": "Soupie plus d'une heure — la viande a commencé à lixivier le goût dans l'eau et semble pâle.",
            "action": "Pat sèche et continue. La marinade restaurera la saveur."
          }
        ]
      },
      "feelCue": "Les côtes doivent être froides, fermes et lissées de l'eau. Patientez jusqu'à ce que la serviette de papier s'en aille complètement sèche — toute humidité va vapeur plutôt que de semer."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "soaked_ribs",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "marinated_ribs",
      "instructions": "Mélanger la poire râpée et son jus, la sauce de soja, l'huile de sésame, le sucre, l'ail, le gingembre, l'échon et le poivre noir jusqu'à ce que le sucre se dissout. Les enzymes de la poire (protéases) vont tendrer le collagène dans la viande osseuse. Submerger complètement les côtes, presser les bulles d'air. Faire mariner au réfrigérateur pendant au moins 4 heures; 8 heures est idéal. Ne pas mariner au-delà de 24 heures ou la viande commencera à devenir musquée.",
      "visualCue": {
        "primaryTarget": "Les côtes sont entièrement submergées dans une marinade brun-ambre profonde avec de la poire râpée visible et des morceaux d'ail enrobant chaque surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est assise sur les côtes sans revêtement; les côtes flottent plutôt que se submerger.",
            "action": "Appuyez sur les côtes et peser avec une assiette. Masser la marinade dans la viande si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Côtes entièrement enduites, coloration marinade dans la surface de la viande. Après 4 heures et plus, la chair près de l'os s'est sensiblement obscurcie.",
            "action": "Retirer du réfrigérateur 20 minutes avant de griller. Jeter l'excès de marinade."
          },
          {
            "state": "Overdone",
            "description": "Après 24 heures et plus : la chair est douce et légèrement visqueuse au toucher – les enzymes de poire sont sur-tendrées.",
            "action": "Cuire rapidement à feu vif; la texture sera toujours acceptable sinon idéale."
          }
        ]
      },
      "feelCue": "Atteindre la marinade et presser une côte — la viande doit se sentir ferme mais piquante du soja et du sucre. Après 8 heures, la chair près de l'os se sentira légèrement plus productive, presque soyeuse."
    },
    {
      "nodeId": "step_3",
      "action": "Griller",
      "inputs": [
        "marinated_ribs"
      ],
      "outputState": "grilled_kalbi",
      "instructions": "Chauffer le gril ou le gril à feu vif. Griller les côtes en une seule couche sans encombrer, 2–3 minutes de chaque côté. Vous voulez une caramélisation rapide du sucre et du soja — l'omble est la saveur. Les os parfumeront l'air avec une fumée caramélisée et noisette. Ne bougez pas les côtes avant qu'elles ne se détachent proprement des grilles.",
      "visualCue": {
        "primaryTarget": "Laquage acajou-brun profond sur les deux côtés avec carbon-noir concentré aux bords fins de l'os. Les marques de gril sont presque invisibles sous la même caramélisation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours gris beige à la surface, la viande libère du liquide plutôt que de la caramélisation. Ça colle au grill.",
            "action": "Ne le forcez pas — attendez encore 30 secondes. La viande se libérera quand la croûte Maillard se sera formée."
          },
          {
            "state": "Perfect",
            "description": "Laqué brun foncé, bords carbonisés à noir. Soufflant fort. Rejets proprement avec pinces. Les extrémités osseuses sont brunes.",
            "action": "Flip et griller l'autre côté. Le temps total de cuisson sera de 5 à 6 minutes."
          },
          {
            "state": "Overdone",
            "description": "Un noir uniforme avec une odeur amère. Le sucre a carbonisé la caramélisation passée.",
            "action": "Moins de chaleur pour les lots restants. Couper les bords les plus amers avant de servir."
          }
        ]
      },
      "feelCue": "Grappe un bout d'os avec des pinces — la côte doit être tendue et raide, et non floppée. Appuyez sur la viande entre les os avec votre doigt: il devrait y avoir une résistance ferme et un léger ressort, pas de mushiness."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "grilled_kalbi",
        "ing_10",
        "ing_08"
      ],
      "outputState": "finished_kalbi",
      "instructions": "Transférer immédiatement dans un plateau de service. Éparpillement de graines de sésame grillées et de pétoncle fraîchement tranché sur le dessus tandis que la chaleur résiduelle fleurit l'arôme de sésame. Servir avec du riz à la vapeur, du kimchi et des feuilles de laitue pour l'emballage.",
      "visualCue": {
        "primaryTarget": "Côtes laquées surmontées de graines de sésame blanc et de pétoncle vert vif contre la surface caramélisée presque noire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de sésame sont crues et pâles; ajoutées trop tôt et devenant huileuses.",
            "action": "Épargnez une seconde ronde de graines juste avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Les graines et le pétoncle s'assoient vif et frais sur le dessus de la viande chaude et scintillante. La chaleur flétrit à peine les anneaux de pétoncle.",
            "action": "Servir immédiatement — le kalbi est le meilleur moment où il quitte le grill."
          },
          {
            "state": "Overdone",
            "description": "Il est permis de s'asseoir trop longtemps — les graines ont bruni plus loin et le pétoncle s'est complètement flétri.",
            "action": "Redistribuer la garniture fraîche et donner aux côtes une explosion de 30 secondes sur le gril pour relancer."
          }
        ]
      },
      "feelCue": "Les graines de sésame doivent se sentir sèches et croquantes, contrastant avec le glaçage collant et presque collant sur la viande. Soulevez une côte par l'os — il devrait tenir fermement ensemble avec un léger donner quand vous mordez."
    }
  ]
};
