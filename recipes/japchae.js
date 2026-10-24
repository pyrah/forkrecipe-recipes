export default {
  "repoId": "master_korean_japchae_001",
  "parentRepoId": null,
  "slug": "japchae",
  "author": "ForkRecipe Kitchen",
  "title": "Japchae",
  "description": "Des nouilles en verre de patate douce soyeuse jetées avec des légumes julienned et du boeuf mariné de soja, scintillent sous une laque d'huile de sésame et de sucre — doux, mâcheux et profondément salés à chaque fourchette. Chaque composant est cuit séparément et marié au dernier moment de sorte que rien ne perd sa couleur ou sa texture.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "grains",
  "tags": [
    "coréen",
    "nouilles",
    "nouilles de verre",
    "boeuf",
    "sésame",
    "sauté"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Dangmyeon (Nouilles sucrées en verre de pomme de terre)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Mung bean vermicelli"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Linge de bœuf ou côtelé, julienned",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Bandes de tofu",
        "bandes de champignons"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie",
        "spirin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Oeufs",
      "ratioValue": 2,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Épinards blanchis et pressés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "cresson d'eau"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Champignons chiitake, julienned",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Champignons d'huître",
        "shiitake séché réhydraté"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Structure",
      "name": "Carotte, julienned",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Structure",
      "name": "poivron rouge, julienned",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "poivron jaune"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre (grape graine ou canola)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "marinated_beef",
      "instructions": "Julienne le bœuf en bandes d'environ 5 cm de long et 3 mm d'épaisseur, coupant contre le grain. Mélanger 2 cuillères à soupe de sauce soja, 1 cuillère à soupe de sucre, 1 cuillère à soupe d'huile de sésame et toute l'ail haché dans un bol. Ajoutez le bœuf, jetez soigneusement chaque bande enduite et laissez-la reposer à température ambiante pendant que vous préparez les autres composants — au moins 15 minutes. Le sucre tire l'humidité de surface du boeuf et permet une caramélisation rapide dans la poêle. Ne salez pas de plus; le soja porte toute la salinité dont le boeuf a besoin. Les bandes doivent sentir profondément salé et légèrement sucré, avec l'ail ramollissant et devenant aromatique comme il est assis.",
      "visualCue": {
        "primaryTarget": "Bandes de boeuf recouvertes d'une marinade sombre et brillante, qui commence à avoir l'air légèrement collante et profondément colorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bandes sont encore pâles et la marinade n'a pas été absorbée — elles ont l'air mouillées plutôt que revêtues.",
            "action": "Jetez encore et attendez 10 minutes supplémentaires; le sucre a besoin de temps pour oser dans les fibres de viande."
          },
          {
            "state": "Perfect",
            "description": "Chaque bande a une couche d'acajou foncé uniforme, la marinade s'est serrée dans une couche de glaçure, et le bol n'a presque pas de liquide commun.",
            "action": "Faites cuire les légumes pendant que le bœuf finit la marinade."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf s'est assis plus d'une heure et les protéines de surface commencent à avoir l'air grisâtres et serrés.",
            "action": "Cuire immédiatement; la saveur sera encore excellente, mais la texture se raffermira plus rapidement dans la poêle."
          }
        ]
      },
      "feelCue": "Les bandes de boeuf doivent se sentir légèrement collantes entre les doigts, collantes du sucre mais pas visqueuses — comme le parchemin lissé plutôt que la viande humide."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_noodles",
      "instructions": "Portez une grande casserole d'eau à ébullition. Déposez les nouilles du dangmyéon sans les briser, elles s'assoupliront et se décrocheront seules. Cuire de 6 à 8 minutes, en remuant occasionnellement pour éviter les accrochages. Goûtez une nouille: elle devrait être entièrement translucide tout au long avec une résistance agréablement mâchante — pas de gomme au centre, pas de mousse. Égoutter immédiatement et rincer sous l'eau courante froide pour arrêter la cuisson et retirer l'excès d'amidon. Serrez la calandre. Alors qu'il est encore chaud, jeter les nouilles avec 1 cuillère à soupe de sauce soja et 1 cuillère à café d'huile de sésame pour les assaisonner et les empêcher de coller ensemble. Utilisez des ciseaux de cuisine pour couper les nouilles deux ou trois fois, ce qui les rend beaucoup plus faciles à jeter et à manger sans perdre leur mâche essentielle.",
      "visualCue": {
        "primaryTarget": "Nouilles entièrement translucides, uniformément vitreuses, sans centre blanc crayeux visible lorsqu'un brin est mordu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont encore partiellement opaques — une morsure révèle un noyau blanc et amylacé et la texture est granuleuse plutôt que mâcheuse.",
            "action": "Retourner à l'eau bouillante pendant 1 à 2 minutes de plus et procéder à un nouveau test."
          },
          {
            "state": "Perfect",
            "description": "Complètement clair et vitreux d'un bord à l'autre; la nouille est souple, donne une mâche satisfaisante au dos du printemps et tient sa forme lorsqu'elle est levée.",
            "action": "Égoutter, rincer à froid et assaisonner immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont gonflées, translucides et limpides; elles s'allongent sans résistance lorsqu'elles sont tirées et s'agrippent fortement.",
            "action": "Rincer l'eau très froide de façon agressive, assaisonner immédiatement et utiliser rapidement; le dangmyéon trop cuit devient collant sur pied."
          }
        ]
      },
      "feelCue": "Une nouille parfaitement cuite devrait rebondir légèrement lorsqu'elle est pressée entre le pouce et l'index — élastique comme une mince bande de caoutchouc, pas douce comme une nouille de pâtes cuites."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_14"
      ],
      "outputState": "cooked_vegetables",
      "instructions": "Travaillez chaque légume séparément — c'est le travail du japchae et la source de sa beauté. Chauffer un wok ou une poêle large à feu vif jusqu'à ce qu'il commence à fumer. Ajouter une cuillère à café d'huile neutre et faire revenir la carotte julienne pendant 90 secondes avec une pincée de sel; il devrait encore avoir une légère bouchée. Retirer dans une assiette. Répéter avec le poivron (60 secondes – il devrait rester rouge vif), puis les shiitake champignons (2 minutes, jusqu'à ce que leurs bords commencent à brunir et ils sentent profondément boisé). Pour les épinards, blanchir brièvement dans l'eau bouillante salée, égoutter, presser dur jusqu'à presque sécher, mélanger avec quelques gouttes d'huile de sésame et une pincée de sel. Cuire les oeufs comme un jidan mince : battre les jaunes et les blancs séparément si la précision compte, cuire comme deux omelettes fines, laisser refroidir, couper en bandes de 5 cm. Chaque légume cuit seul conserve sa couleur, son arôme et sa texture individuelles.",
      "visualCue": {
        "primaryTarget": "Chaque légume vif dans sa propre couleur: carottes orange, poivron rouge, champignons acajou foncé, épinards vert vif — une palette de peintre sur une seule assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont crus-brillants sans bords caramélisés; les carottes sont rigides et les champignons sentent crus et végétaux.",
            "action": "Retournez brièvement chaque composant au wok sur une chaleur très élevée."
          },
          {
            "state": "Perfect",
            "description": "Les carottes sont simplement tendres avec un léger croquant; les champignons sont brunis aux bords et profondément aromatiques; les épinards sont vert brillant et compacts.",
            "action": "Mettez tout de côté et faites cuire le bœuf."
          },
          {
            "state": "Overdone",
            "description": "Les couleurs sont ternes — les carottes sont orange-brun, le poivron est devenu doux et sa peau est ridée, les champignons sont complètement doux sans caramélisation.",
            "action": "Utiliser comme-est; la saveur reste mais l'attrait visuel est diminué."
          }
        ]
      },
      "feelCue": "Le wok devrait être si chaud que chaque légume frappe avec un étourdissement aigu et percussif — si vous entendez un sifflement lent et humide au lieu d'une fissure et de cracher, la poêle n'est pas assez chaude."
    },
    {
      "nodeId": "step_4",
      "action": "Saisir",
      "inputs": [
        "marinated_beef",
        "ing_12"
      ],
      "outputState": "cooked_beef",
      "instructions": "Chauffer le wok au-dessus de la flamme la plus élevée que votre poêle permet jusqu'à ce qu'il mijote visiblement et commence à fumer. Ajouter un mince film d'huile neutre. Étendre le bœuf mariné en une seule couche — ne pas fouler la poêle ou la viande va vapeur plutôt que de semer. Cuire pendant 60 à 90 secondes jusqu'à ce que le fond développe une croûte caramélisée foncée du sucre dans la marinade. Ajouter et cuire encore 30 secondes. La viande de bœuf doit être juste cuite à travers — dans un plat comme le japchae, elle doit être tendre et non rigide. Le sucre marinade sera légèrement charmé dans les endroits, ajoutant une agréable amertume qui équilibre la douceur de la sauce. Travaillez en deux lots si la casserole est pleine; une casserole bondée de vapeurs et la glaçure se transforme en flaque.",
      "visualCue": {
        "primaryTarget": "Bandes de boeuf aux bords caramélisés acajou-noir profond, brillant et légèrement carbonisé aux extrémités, non gris et vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bandes sont grises tout au long, sans couleur sur leur surface; la marinade est encore humide et mise en commun dans la casserole.",
            "action": "Augmenter la chaleur au maximum et presser les bandes à plat pour encourager le brunissement."
          },
          {
            "state": "Perfect",
            "description": "Les bandes ont des bords carbonisés, laqués et un riche intérieur brun; la marinade a réduit à un revêtement collant glacé chaque pièce.",
            "action": "Retirer du feu et combiner avec des nouilles et des légumes."
          },
          {
            "state": "Overdone",
            "description": "Le sucre est entièrement carbonisé — les bandes sont très sombres et la poêle sent le sucre brûlé plutôt que la viande caramélisée.",
            "action": "Déglacer la poêle avec une cuillère à soupe d'eau immédiatement et racler; utiliser le boeuf comme-est avec de la sauce supplémentaire pour équilibrer l'amertume."
          }
        ]
      },
      "feelCue": "La cuisine devrait se remplir d'une fumée sucrée de la marinade caramélisante — cette odeur de soja et de sucre carbonisé aux bords de la poêle est l'âme du boeuf coréen cuit au wok."
    },
    {
      "nodeId": "step_5",
      "action": "Mélanger",
      "inputs": [
        "cooked_noodles",
        "cooked_vegetables",
        "cooked_beef",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_13"
      ],
      "outputState": "finished_japchae",
      "instructions": "Dans le plus grand bol ou le wok lui-même, combiner les nouilles assaisonnées, tous les légumes cuits, et le boeuf. Arrosez le reste de la sauce de soja, du sucre et de l'huile de sésame — goût au fur et à mesure que vous y allez; japchae est destiné à être nettement sucré-savori, donc soyez audacieux avec le sucre et le soja. Mélangez tout doucement mais soigneusement avec des pinces ou des mains propres, levant du bas pour distribuer tout uniformément sans casser les nouilles. Goûtez à plusieurs reprises et ajustez : plus de sucre s'il manque de chaleur, plus de soja s'il est plat, plus d'huile de sésame pour la richesse et l'arôme. Transférer dans un plateau de service et arranger les bandes de jidan sur le dessus. Éparpiller libéralement les graines de sésame. Le japchae est excellent à température ambiante et s'améliore après 20 minutes de repos – les nouilles absorbent la sauce et les saveurs se marient.",
      "visualCue": {
        "primaryTarget": "Un monticule brillant de nouilles dans lequel des fils de couleur - orange, rouge, vert, brun foncé - soufflent à travers les brins translucides de verre, fini avec des bandes d'oeufs dorés et une dispersion de graines de sésame.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Nouilles et légumes s'assoient côte à côte sans mélange; la sauce apparaît principalement sur les nouilles et les légumes sont secs.",
            "action": "Mélanger plus vigoureusement et ajouter une cuillère à café supplémentaire d'huile de sésame pour aider la sauce à distribuer."
          },
          {
            "state": "Perfect",
            "description": "Chaque nouille est enrobée de sauce et enroulée de légumes et de boeuf; la surface brille d'huile de sésame et l'arôme est profondément sucré, salé et noisette.",
            "action": "Goûtez une dernière fois, assaisonnement et assiette."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles se sont assemblées et les légumes sont écrasés; le mélange semble dense et boueux.",
            "action": "Ajouter une petite éclaboussure d'eau et d'huile de sésame et remuer doucement pour se détendre."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez une fourche, les nouilles doivent s'endraper librement et se sentir substantielles sans être lourdes — des brins glissants et rebondissants filetés de couleur et d'odeur de sésame grillé."
    }
  ]
};
