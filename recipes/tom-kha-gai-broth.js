export default {
  "repoId": "master_thai_tom-kha-gai-broth_001",
  "parentRepoId": null,
  "slug": "tom-kha-gai-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Tom Kha Gai Broth",
  "description": "Le bouillon de soupe de noix de coco-galangal parfumé de Thaïlande — citronnelle, galangal et feuilles de lime de kaffir mijotées dans du lait de noix de coco avec du bouillon de poulet jusqu'à ce que la cuisine se remplisse d'une vapeur d'agrumes-floral capricieux.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "stocks",
  "tags": [
    "Thaï",
    "noix de coco",
    "Galangal",
    "citronnelle",
    "poulet",
    "aromatiques"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Lait de coco, plein gras (en conserve ou frais)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "crème de coco diluée 1:1 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock de poulet (non salé)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "stock végétal pour la version végétalienne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Galangal, tranché 3 mm d'épaisseur (peau sur)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "jeune gingembre (la saveur diffère fortement)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, meurtries et coupées en bâtons de 4 cm",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles de citron vert kaffir déchirées",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "zeste de citron vert (2 citron vert; bien inférieur)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Viande de cuisse de poulet, tranché 1 cm d'épaisseur",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tofu ou champignons pour végétaliens"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Champignons d'huître ou champignons de paille, déchirés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "champignons des huîtres",
        "Champignons crémini"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "sauce soja + pincée de MSG"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Chilies oculaires d'oiseau, meurtris",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de chili rouge séché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Feuilles de coriandre fraîches",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Feuilles de basilic thaï"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "aromatic_broth_base",
      "instructions": "Mélanger le lait de coco et le bouillon de poulet dans une casserole moyenne. Ajouter les tranches de galangal, les bâtons de citronnelle et les feuilles de lime kaffir déchirées. Mettre à feu moyen et laisser mijoter doucement — pas à ébullition. Un ébullition complet brise l'émulsion de lait de coco et rend le bouillon granuleux et huileux. Laissez-le tremper à une mijoter paresseuse pendant 10 à 12 minutes, en pressant parfois les aromatiques contre le côté de la poêle avec une cuillère en bois pour les encourager à libérer leurs huiles volatiles. Le galangal devrait commencer à regarder légèrement translucide aux bords.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ivoire crémeux tremblant à peine à la surface, parsemé de pièces de monnaie galangales pâles et de citronnelle bouillante, vaporisant avec un parfum chaud, intensément floral-citrus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est chaud mais la citronnelle et le galangal sentent toujours cru et herbacé plutôt que doux et floral. Le liquide est pâle et aqueux.",
            "action": "Continuez à mijoter. Les huiles aromatiques dans le galangal sont libérées lentement à feu doux — augmenter légèrement la chaleur si nécessaire, mais maintenir une mijotée, pas un ébullition."
          },
          {
            "state": "Perfect",
            "description": "La cuisine sent la fleur d'agrumes, le pin et une faible chaleur terreuse. Le bouillon a pris une faible teinte d'ivoire-or du galangal. La pression sur la citronnelle libère un dernier éclat de parfum.",
            "action": "Ajouter le poulet, les champignons et les piments meurtris, alors que la chaleur est douce."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli — la surface présente un éclat huileux de graisse de noix de coco séparée et le liquide semble légèrement caillé. Le parfum est devenu plat et cuit.",
            "action": "Baissez immédiatement la chaleur. Ajouter une touche de lait de coco frais et remuer pour réémulsionner. La saveur peut être légèrement ternie mais sera toujours acceptable."
          }
        ]
      },
      "feelCue": "Coupez vos mains autour de la vapeur qui s'élève du pot et respirez — vous devriez sentir le citron vert de kaffir au - dessus de tout le reste, une note d'eucalyptus floral et frais coupée par la chaleur plus terreuse du galangal. Si vous sentez surtout la noix de coco, les aromatiques ont besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "aromatic_broth_base",
        "ing_06",
        "ing_07",
        "ing_10"
      ],
      "outputState": "cooked_broth",
      "instructions": "Ajouter la viande de cuisse de poulet en tranches, les champignons et les piments bleus de l'œil des oiseaux dans le bouillon mijotant. Mélanger doucement pour séparer les tranches de poulet. Maintenez une mijoter douce et faites cuire 6 à 8 minutes jusqu'à ce que le poulet soit simplement cuit — il doit se sentir ferme lorsqu'il est pressé avec une cuillère, mais pas sec ou à cordes. Les champignons deviendront soyeux. Ne pas trop cuire le poulet ou il deviendra caoutchouteux; le bouillon de noix de coco continue à porter la chaleur même hors de la flamme.",
      "visualCue": {
        "primaryTarget": "Les tranches de poulet sont passées d'un rose cru à un blanc mat opaque. Les champignons se sont adoucis et sont légèrement obscurcis aux bords. Broth a pris un léger roussissement des chilies.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches de poulet sont encore roses au centre lorsqu'elles sont pressées à l'aide de deux cuillères. Les champignons sont encore fermes et au goût cru.",
            "action": "Continuer à mijoter encore 2 à 3 minutes. Vérifiez la tranche de poulet la plus épaisse en la pressant — elle ne devrait offrir aucune résistance rose."
          },
          {
            "state": "Perfect",
            "description": "Le poulet est tout simplement opaque, juteux et tendre. Les champignons se sont adoucis à une texture soyeuse. Broth sent profondément aromatique avec une faible chaleur de chile.",
            "action": "Retirer du feu. Assaisonner avec de la sauce de poisson maintenant avant d'ajouter le citron vert — chauffer l'acidité du citron vert."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est sec et commence à être déchiqueté dans le bouillon. Les champignons sont arrosés et sans forme.",
            "action": "Retirer immédiatement du feu. Le poulet sera moins tendre mais le bouillon lui-même est encore excellent. Servir rapidement — plus longtemps, la protéine sera durcie."
          }
        ]
      },
      "feelCue": "Déposer un morceau de poulet et le presser délicatement contre le bord de la casserole — il devrait donner avec une légère résistance et ressortre. S'il s'effondre et s'effondre, il a dépassé la fenêtre idéale."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "cooked_broth",
        "ing_08",
        "ing_09"
      ],
      "outputState": "seasoned_broth",
      "instructions": "Retirer la casserole du feu avant d'ajouter la sauce de poisson et le jus de lime – l'acidité du citron vert est volatile et le topnote lumineux s'évapore lorsqu'il est cuit. Incorporer d'abord la sauce de poisson, goûter et ajuster. Puis ajouter le jus de lime par étapes, dégustation après chaque ajout. L'équilibre de ce bouillon est tout: il doit être simultanément salé, aigre et légèrement sucré de la noix de coco, avec une chaleur de fond des chilis. S'il a un goût plat, ajouter plus de sauce de poisson; s'il a un goût fin et aigre, une pincée de sucre de palme le ronge.",
      "visualCue": {
        "primaryTarget": "Le bouillon est entièrement assaisonné, brillant et aromatique. La surface mijote avec une fine perle d'huile de coco et la couleur est une crème d'ivoire chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon a un goût plat, unidimensionnel et riche en noix de coco — ni le salinité de la sauce de poisson ni la luminosité du citron vert ne l'ont encore ouvert.",
            "action": "Ajouter la sauce de poisson une cuillère à café à la fois et goûter après chaque ajout avant d'ajouter du citron vert."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon offre quatre saveurs en séquence : d'abord salée, puis aigre, puis une richesse sucrée crémeuse de la noix de coco, puis une chaleur de bâtiment tranquille. Le parfum de lime est vif et haut de page.",
            "action": "Déposer dans les bols immédiatement, sur le riz si désiré. Garnir à la table."
          },
          {
            "state": "Overdone",
            "description": "Trop de jus de lime ajouté à la chaleur — le bouillon est fortement aigre et la noix de coco est submergée. Le parfum de citron vert est devenu tranchant et métallique.",
            "action": "Ajoutez un peu plus de lait de coco et une pincée de sucre de palme pour retirer l'acide. La prochaine fois, retirer le pot de chaleur avant d'ajouter du citron vert."
          }
        ]
      },
      "feelCue": "Prenez une petite gorgée directement de la louche. La note aigre devrait arriver aux côtés de votre langue d'abord, puis le sel s'étend à travers le milieu, puis la richesse en noix de coco enveloppe l'arrière de la gorge. Si l'un d'eux arrive seul, l'équilibre est annulé."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "seasoned_broth",
        "ing_11"
      ],
      "outputState": "finished_tom_kha_gai",
      "instructions": "Déposer le bouillon dans des bols, distribuer uniformément le poulet et les champignons. Épargnez les feuilles de coriandre fraîche sur chaque bol juste avant de les servir — ne les remuez pas. Ne servez pas les feuilles de galangal, de citronnelle ou de lime kaffir comme nourriture; elles sont consommées autour. Fournissez un petit plat de quartiers de citron vert et de sauce de poisson à la table afin que les invités puissent s'adapter à leur propre goût. Le bouillon est destiné à être siroté, pas seulement cuillé.",
      "visualCue": {
        "primaryTarget": "Un bol d'ivoire à la vapeur avec des morceaux de poulet pâle, des champignons soyeux, et une dispersion de coriandre vert vif flottant sur un bouillon crémeux et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La garniture a été ajoutée trop tôt et la coriandre est flétrie et olive-drabe. La chaleur a cuit les notes fraîches.",
            "action": "Ajouter la garniture seulement au moment de servir. Préparez les feuilles et déchirez à l'avance."
          },
          {
            "state": "Perfect",
            "description": "La coriandre verte vibrante se trouve sur la surface de l'écume, son parfum se mêle à la vapeur de coco. Le bouillon est assez chaud pour envoyer une colonne de vapeur aromatique vers le haut.",
            "action": "Servir immédiatement. Ce bouillon doit être mangé immédiatement — il ne s'améliore pas en étant assis."
          },
          {
            "state": "Overdone",
            "description": "Les bols ont attendu et la graisse de noix de coco s'est relevée et solidifiée dans un anneau pâle autour du bord. Le bouillon est tiède.",
            "action": "Remettre le bouillon à mijoter doucement pour réémulsionner et réchauffer, puis garnir à l'état frais."
          }
        ]
      },
      "feelCue": "Tenez le bol près avant de boire — la vapeur devrait porter un double signal de citron vert et de galangal qui vous fait inhaler involontairement. Ce souffle involontaire est le signe que le bouillon est prêt."
    }
  ]
};
