export default {
  "repoId": "master_japanese_nibitashi_001",
  "parentRepoId": null,
  "slug": "nibitashi",
  "author": "ForkRecipe Kitchen",
  "title": "Nibitashi",
  "description": "Une préparation légume de Kyoto de calme et méditative retenue — vert blanchi brièvement mijoté dans un liquide assaisonné délicatement dashi, puis laissé pour absorber le bouillon pendant qu'ils refroidissent. Les verts boivent dans l'umami du dashi et émergent profondément aromatisé mais vibrant, une étude en soustraction.",
  "cuisine": "Japonais",
  "culture": "Kyoto",
  "category": "vegetables",
  "tags": [
    "épinards",
    "Dashi",
    "mijotés",
    "kyoto",
    "washoku",
    "side-dish",
    "Japonais",
    "légumes"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Épinards ou cresses d'eau, racines taillées",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "komatsuna",
        "vert chrysanthème (shungiku)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock de Dashi (chiban dashi)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "kombu dashi pour végétalien"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce soja (légère/sukuchi préférée)",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja régulière"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Katsuobushi (flacons debonito) pour servir",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Graines de sésame grillées (vegan)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_greens",
      "instructions": "Portez une grande casserole d'eau non salée à ébullition. Submerger les tiges d'épinards d'abord pendant 15 secondes, puis pousser les feuilles sous et blanchir pendant 30 à 45 secondes au total. L'eau doit être à ébullition complète tout au long — une vapeur d'ébullition faible au lieu de taches et la couleur souffre. Transférer immédiatement dans un bol d'eau glacée et laisser pendant 1 minute.",
      "visualCue": {
        "primaryTarget": "Les verts deviennent un vert émeraude vif, presque fluorescent immédiatement après avoir frappé l'eau bouillante. La couleur est intensément brillante — plus verte qu'elle ne semblait crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts sont encore partiellement crus. Certaines feuilles ont l'air terne ou vert mat, pas vif. Les tiges se sentent rigides.",
            "action": "Revenez à l'eau bouillante pendant 15 secondes. La fenêtre est brève — quelques secondes font une différence visible."
          },
          {
            "state": "Perfect",
            "description": "Vert émeraude vivide à travers les tiges et les feuilles. Lorsqu'une feuille est levée de l'eau glacée, elle est boiteuse mais la couleur est presque éclatante. Pas de tons jaunes ou olives.",
            "action": "Pressez doucement pour retirer l'excès d'eau — prenez un poing et appuyez sur le côté du bol. Ne vous battez pas violemment."
          },
          {
            "state": "Overdone",
            "description": "La couleur est passée de vert vif à vert olive terne. Les feuilles se sentent musquées et s'effondrent.",
            "action": "Procéder — la saveur est inchangée mais la texture sera douce. Servir comme-est et éviter de blanchir à nouveau."
          }
        ]
      },
      "feelCue": "Soulevez une poignée de l'eau glacée: les épinards blanchis doivent se sentir frais et doux, avec une faible résistance dans les tiges. Si les tiges sont encore fermes et effilées, blanchissez pendant 15 secondes."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter le liquide assaisonnement",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "nibitashi_broth",
      "instructions": "Mélanger le dashi, la sauce soja et le mirin dans une petite casserole. Porter à feu doux à feu moyen. Goûter — le bouillon doit goûter agréablement salé et légèrement sucré, légèrement plus affirmé que vous voulez que le plat fini soit, parce que les verts vont le diluer. Laisser mijoter pendant 2 minutes pour faire cuire l'alcool cru mirin.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré clair et pâle à mijoter. De petites bulles stables s'élèvent du bas. Pas de mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est à peine chaud. Mirin sent cru et alcoolique.",
            "action": "Porter le feu à moyen et laisser mijoter. L'alcool doit être cuit."
          },
          {
            "state": "Perfect",
            "description": "Doucement, mijoter régulièrement. Le liquide sent le dashi avec une note douce et arrondie. Pas de dureté. Goûts propres et profondément salés.",
            "action": "Ajouter les verts blanchis directement au bouillon mijotant."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a considérablement diminué. Goût très salé.",
            "action": "Ajouter une éclaboussure de dashi ou d'eau à mince et ré-goûter avant d'ajouter les verts."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon sur une cuillère — il devrait se sentir presque insupportablement salé et sucré au début de la gorgée, mais pas dur. Cette affirmation est nécessaire parce que les verts l'absorbent et le diluent comme ils sont raides."
    },
    {
      "nodeId": "step_3",
      "action": "Step et cool",
      "inputs": [
        "blanched_greens",
        "nibitashi_broth",
        "ing_05"
      ],
      "outputState": "finished_nibitashi",
      "instructions": "Ajouter les verts blanchis pressés au bouillon mijotant. Submerger doucement et laisser mijoter pendant seulement 60 secondes, ce qui ouvre légèrement les parois cellulaires pour permettre au bouillon d'entrer. Retirer du feu et laisser les verts raides dans le bouillon, hors du feu, pendant 15 minutes pendant que le liquide refroidit. Soulevez les verts, pressez à nouveau doucement pour retirer le bouillon excédentaire et couper en longueurs de 4 cm. Disposer dans les petits monticules dans les bols de service. Déposer une petite quantité de liquide raide sur chaque portion et en haut avec des flocons de bonito.",
      "visualCue": {
        "primaryTarget": "Petits monticules serrés de vert émeraude profond dans des bols en céramique individuels. Une petite flaque de bouillon ambre dashi autour de la base. Bonito flakes drapé à travers le haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts ont été coupés et plaqués mais le bouillon n'a pas pénétré. L'intérieur des tiges est pâle et a un goût fade.",
            "action": "Retourner les verts au bouillon et raide pendant 10 minutes de plus. La couleur devrait s'approfondir légèrement à mesure que l'assaisonnement entre."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de vert est uniformément assaisonné du bord au centre. La saveur dashi est entièrement absorbée — même l'intérieur goûts salés. La couleur reste un vert vif et profond.",
            "action": "Servir à température ambiante ou légèrement frais — le nibitashi est volontairement servi sous la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Les verts ont trempé trop longtemps et ont transformé le olive-drabe. Le bouillon a coloré les verts uniformément mais le vert vif est perdu.",
            "action": "La saveur est excellente même si la couleur s'estompe. Servir et souligner le contraste sensoriel du bouillon et la saveur terreuse des verts."
          }
        ]
      },
      "feelCue": "Appuyez sur une tige entre les dents avant — elle devrait céder avec une faible résistance et donner ensuite proprement, comme mordre à travers une figuier mûre. Toute croûte signifie sous-doté; tout effondrement sans résistance signifie surdoté."
    }
  ]
};
