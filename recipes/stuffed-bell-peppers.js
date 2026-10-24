export default {
  "repoId": "master_mediterranean_stuffedbellpeppers_001",
  "parentRepoId": null,
  "slug": "stuffed-bell-peppers",
  "author": "ForkRecipe Kitchen",
  "title": "Poivrons à cloches farcis méditerranéens",
  "description": "Poivrons rouges doux farcis de riz herbé, de pignons de pin et de groseilles, cuits jusqu'à ce que les poivrons s'adoucissent et s'effondrent autour de leur remplissage parfumé.",
  "cuisine": "Méditerranée",
  "culture": "Grec",
  "category": "vegetables",
  "tags": [
    "grec",
    "méditerranéen",
    "farcis",
    "poivrons",
    "riz",
    "végétarien",
    "cuits"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Gros poivrons rouges",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": [
        "poivrons jaunes ou oranges"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz blanc à grains longs, rincé",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "riz basmati"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Noix de pin",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "amandes grillées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Grossesses séchées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "sultanas, grossièrement hachés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "menthe fraîche, hachée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "menthe séchée (réduire de moitié la quantité)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Base",
      "name": "Tomates passata",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "tomates concassées en conserve"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "Toussages"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_02"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Porter une casserole d'eau salée à ébullition. Ajoutez le riz rincé et faites cuire exactement 7 minutes — vous voulez le riz à moitié cuit, toujours crayeux au centre. Égoutter bien et étendre sur un plateau pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Les grains sont gonflés et blanc-opaque à l'extérieur mais ont toujours un noyau blanc clair et dur quand mordu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont à peine gonflés et complètement croquants.",
            "action": "Retourner à l'eau bouillante 2–3 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Les grains ont une couche externe tendre mais un noyau crayeux distinct. Ils finiront la cuisson à l'intérieur des poivrons.",
            "action": "Égoutter immédiatement et se répandre pour refroidir."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entièrement cuits et commencent à s'écraser. Pas de centre crayeux.",
            "action": "Procéder de toute façon — le remplissage sera plus dense et la texture légèrement plus douce mais toujours délicieuse."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur un grain entre deux doigts, il doit céder au bord extérieur, mais se serrer contre un centre ferme et féculent, comme une lentille légèrement mal cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_09",
        "ing_06",
        "ing_11",
        "ing_12"
      ],
      "outputState": "fragrant_filling_base",
      "instructions": "Chauffer l'huile d'olive dans une grande casserole à feu moyen. Ajouter l'oignon et cuire en remuant, jusqu'à ce qu'il soit doux et translucide, environ 8 minutes. Ajouter l'ail et les pignons; cuire 2 à 3 minutes jusqu'à ce que les pignons soient légèrement dorés. Incorporer les groseilles, la cannelle et le sel. Retirer du feu.",
      "visualCue": {
        "primaryTarget": "L'oignon est doré et translucide; les pignons sont grillés à l'or pâle; les groseilles ont plumé légèrement et scintillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et croquant; les pignons de pin sont décolorées et savoureuses.",
            "action": "Continuer la cuisson à feu moyen, en remuant – l'oignon a besoin de plus de temps pour adoucir et sucrer."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est fondant doux et doré. Les pignons de pin sont un bronzage chaud. La poêle sent l'oignon doux, la cannelle et les noix grillées.",
            "action": "Retirer du feu et plier dans le riz et les herbes fraîches."
          },
          {
            "state": "Overdone",
            "description": "Les pignons de pin sont brun foncé et sentent amer. L'oignon est bruni aux bords.",
            "action": "Enlevez les pignons les plus foncés. L'amertume se dissipera un peu dans le four mais évitera cette prochaine fois."
          }
        ]
      },
      "feelCue": "L'oignon doit fondre entre les doigts lorsqu'il est pressé — pas de croûte à gauche, il suffit de donner de la douceur."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "fragrant_filling_base",
        "parboiled_rice",
        "ing_07",
        "ing_08"
      ],
      "outputState": "assembled_filling",
      "instructions": "Mélanger la base sautée avec le riz, la menthe et le persil. Jetez à distribuer uniformément. Goût — le remplissage doit être assaisonné avec assurance, car le riz absorbera le sel de la passata pendant la cuisson. Couper le dessus des poivrons et enlever les graines et les membranes. Remplissez chaque poivre d'environ trois quarts de plein — le riz va se développer.",
      "visualCue": {
        "primaryTarget": "Le remplissage est un mélange cohésif et bijouté : riz pâle parsemé de pignons de pin doré, de groseilles foncées et d'herbes vertes vives.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage semble pâle et sous-assaisonné; les herbes sont à peine visibles.",
            "action": "Ajoutez d'autres herbes hachées et goûtez encore pour le sel."
          },
          {
            "state": "Perfect",
            "description": "Un remplissage parfumé et coloré qui se tient lâchement. Les poivrons sont pleins de trois quarts avec un peu de place pour se développer.",
            "action": "Disposer dans un plat de cuisson et verser les passata autour de la base."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons sont emballés si étroitement que le riz n'a pas de place pour gonfler.",
            "action": "Retirer un peu de remplissage de chaque poivre et cuire l'excédent le long dans un petit plat à l'épreuve du four."
          }
        ]
      },
      "feelCue": "Le remplissage devrait tomber lâchement d'une cuillère — non pas gommée ou entaillée, mais détendue et parfumée."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_filling",
        "ing_10",
        "ing_01"
      ],
      "outputState": "finished_stuffed_peppers",
      "instructions": "Verser la passata de tomate dans la base du plat de cuisson autour des poivrons. Arrosez l'huile d'olive sur le dessus. Couvrir soigneusement avec du papier et cuire à 180°C (350°F) pendant 40 minutes. Retirer la feuille et cuire encore 15 minutes jusqu'à ce que les peaux de poivre soient ridées, tendres et légèrement carbonisées aux extrémités.",
      "visualCue": {
        "primaryTarget": "Les poivrons se sont légèrement effondrés autour d'un remplissage parfumé entièrement cuit. La peau est cloquée et s'éloigne aux coins. Passata en dessous est réduit et épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poivrons sont encore rigides et rouge vif. Le remplissage semble sec et granuleux.",
            "action": "Récupérer avec du papier et retourner au four pendant 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les poivrons sont mous et rissés, ils s'effondrent doucement. Le remplissage est humide et entièrement cuit. Passata est épaisse et jammy autour de la base.",
            "action": "Reposez-vous 5 minutes avant de servir — ils sont très chauds à l'intérieur."
          },
          {
            "state": "Overdone",
            "description": "Les parois du poivre se sont complètement effondrées et se sont séparées. Le remplissage a séché et contracté.",
            "action": "Servir avec une cuillère de passata supplémentaire pour restaurer l'humidité."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le côté d'un poivre à l'aide d'une cuillère — il devrait donner complètement sans résistance, comme presser une prune mûre."
    }
  ]
};
