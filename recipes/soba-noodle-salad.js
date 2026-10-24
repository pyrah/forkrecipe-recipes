export default {
  "repoId": "master_japanese_soba_noodle_salad_001",
  "parentRepoId": null,
  "slug": "soba-noodle-salad",
  "author": "ForkRecipe Kitchen",
  "title": "Salade froide de nouilles de Soba",
  "description": "Des nouilles de sarrasin réfrigérées habillées d'un tsuyu sésame-soy qui est à la fois salé, noisette et brillant avec du vinaigre de riz — le genre de bol qui se sent comme un soulagement par un après - midi chaud.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "grains",
  "tags": [
    "Japonais",
    "Soba",
    "nouilles",
    "froid",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 1204,
  "forks": 97,
  "contributors": 14,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-20",
  "updatedAt": "2025-06-30",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Nouilles de soba séchées (100 % sarrasin ou mélange)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "nouilles ramen",
        "nouilles de riz sans gluten"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "sauce soja (faible-sodium)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Chili huile de sésame pour la chaleur"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "ponzu",
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Mirin ou miel",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop d'érable",
        "agave"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Gingembre frais râpé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de gingembre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Graines de sésame grillées et oignons de printemps tranchés",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "bandes de nori",
        "Shichimi togarashi"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "sesame_dressing",
      "instructions": "Mélanger la sauce de soja, l'huile de sésame, le vinaigre de riz, le mirin et le gingembre râpé dans un petit bol jusqu'à ce qu'il soit complètement combiné. Goûtez et ajustez : l'équilibre doit être salé du soja, aiguisé du vinaigre, et avec une douceur propre du mirin qui arrondit les bords. Faites la vinaigrette d'abord pour que les saveurs aient le temps de fondre pendant que vous faites cuire les nouilles.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette lisse, uniformément foncée, sans stries d'huile assises sur la surface. L'huile doit être entièrement émulsifiée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile de sésame flotte dans une piscine séparée. La vinaigrette a l'air fendue et grasse.",
            "action": "Plus vigoureusement. Le gingembre aide à l'émulsion — griller plus finement pour une meilleure liaison."
          },
          {
            "state": "Perfect",
            "description": "Ambre foncé uniforme, légèrement épaissi. L'huile de sésame est entièrement incorporée. Goûts équilibrés : salés, acidulés, doux, noisette.",
            "action": "Réserver et cuire les nouilles."
          },
          {
            "state": "Overdone",
            "description": "Survolé — le pansement semble mousseux et aéré.",
            "action": "Laissez-la tranquille une minute. La mousse va s'effondrer et la vinaigrette est encore parfaitement utilisable."
          }
        ]
      },
      "feelCue": "La vinaigrette doit sentir le sésame grillé, le soja et le gingembre simultanément — si une note domine, ajuster: une touche plus de vinaigre pour la luminosité, une touche plus de mirin pour la douceur."
    },
    {
      "nodeId": "step_2",
      "action": "Chaud et refroidissement",
      "inputs": [
        "ing_01"
      ],
      "outputState": "chilled_noodles",
      "instructions": "Portez une grande casserole d'eau non salée à ébullition. Ajouter les nouilles de soba et cuire selon le mode d'emploi de l'emballage, habituellement de 4 à 6 minutes, en remuant souvent pour éviter les accrochages. Quand al dente, égoutter immédiatement et transférer dans un grand bol d'eau glacée. Agiter les nouilles avec vos mains pendant 30 secondes pour éliminer l'amidon de surface et refroidir soigneusement. Égoutter et secouer l'excès d'eau. Le soba devient collant s'il est laissé s'asseoir dans l'eau chaude ou sans rinçage.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont réfrigérées, séparées et ont un léger éclat de rinçage à l'amidon. Ils tiennent leur coupe transversale ronde et ne restent pas ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles se sentent raides et crayeuses quand mordues. Le centre est encore ferme sarrasin blanc.",
            "action": "Retourner à l'eau bouillante pour 1 minute de plus et re-test."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles sont tendres mais avec une légère résistance au sarrasin. Refroidi à travers, séparé, et bonification. La surface n'est plus collante.",
            "action": "Égoutter et s'habiller immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont douces, molles et commencent à s'effondrer aux extrémités. Ils se battent facilement.",
            "action": "Poignez doucement, habillez-vous légèrement. La texture sera plus douce mais la saveur est inchangée."
          }
        ]
      },
      "feelCue": "Le soba refroidi devrait se sentir doux et soyeux entre les doigts, chaque brin séparé — lorsque vous soulevez une poignée, ils devraient revenir dans le bol individuellement, pas en touffes."
    },
    {
      "nodeId": "step_3",
      "action": "Robe et toss",
      "inputs": [
        "chilled_noodles",
        "sesame_dressing"
      ],
      "outputState": "dressed_noodles",
      "instructions": "Ajouter les nouilles réfrigérées et bien drainées à la vinaigrette et les mélanger à l'aide de baguettes ou de pinces, lever et tourner au lieu de remuer pendant 1 à 2 minutes. Chaque brin doit être uniformément recouvert. Ne pas ajouter tout le pansement à la fois — commencer par les trois quarts et ajouter plus au goût. Les nouilles continueront à absorber la vinaigrette pendant qu'elles s'assoient.",
      "visualCue": {
        "primaryTarget": "Chaque brin de nouilles est uniformément recouvert d'une vinaigrette jaune-auto brillante. Pas de taches blanches sèches de nouilles visibles. Le bol a l'air brillant et sombre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines nouilles sont pâles et déshabillées. Les bassins de pansement au fond du bol.",
            "action": "Continuez à lancer et à soulever. Les baguettes sont meilleures que les cuillères pour atteindre chaque brin."
          },
          {
            "state": "Perfect",
            "description": "Revêtement ambre uniforme sur chaque brin. Le bol sent le sésame, le soja et le gingembre. Les nouilles glissent l'une sur l'autre sans coller.",
            "action": "Ajouter les garnitures et servir."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont survêtues et nagent en excès de liquide. La texture commence à s'assouplir.",
            "action": "Pressez doucement l'excès de liquide des nouilles. Servir rapidement avant que la texture ne se détériore davantage."
          }
        ]
      },
      "feelCue": "Soulevez un enchevêtrement de nouilles habillées — elles devraient s'enfiler dans des rubans brillants sans empiler. Un brin pressé entre les doigts doit se sentir lisse et lissé, non mouillé ou visqueux."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir et servir",
      "inputs": [
        "dressed_noodles",
        "ing_07"
      ],
      "outputState": "finished_soba_salad",
      "instructions": "Divisez les nouilles habillées entre des bols de service réfrigérés ou un plateau. Épargnez les graines de sésame grillées et les oignons de printemps tranchés sur le dessus. Servir immédiatement — les nouilles sont meilleures dans les 10 minutes suivant la vinaigrette. Si vous prenez de l'avance, gardez les nouilles et la vinaigrette séparées et combinez juste avant de servir.",
      "visualCue": {
        "primaryTarget": "Bobines de nouilles ambrées foncées couronnées de graines de sésame blanc et d'oignons verts vifs. Le bol est froid au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les garnitures sont absentes ou rares. Le bol est monochromatique et sans texture.",
            "action": "Ajouter plus de graines de sésame et d'oignons de printemps — ils contribuent à la texture et au contraste visuel qui fait partie de l'expérience alimentaire."
          },
          {
            "state": "Perfect",
            "description": "Généreuse dispersion des graines et de l'oignon de printemps. Nouilles encore froides et séparées. Le bol est vibrant et aromatique.",
            "action": "Servir immédiatement pendant qu'il fait encore froid."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont assises depuis plus de 20 minutes — elles ont absorbé toute la vinaigrette et sont devenues sèches et entachées.",
            "action": "Ajouter une petite bruine d'huile de sésame et une éclaboussure de sauce de soja. La prochaine fois, habillez-vous et servez immédiatement."
          }
        ]
      },
      "feelCue": "Le bol devrait se sentir froid dans les mains — s'il s'est réchauffé à la température ambiante, toute l'expérience change; les saveurs s'aplatissent et la texture est terne."
    }
  ]
};
