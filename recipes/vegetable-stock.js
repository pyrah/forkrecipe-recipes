export default {
  "repoId": "master_french_vegetable_stock_001",
  "parentRepoId": null,
  "slug": "vegetable-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de légumes",
  "description": "Un bouillon de légumes clair et doré construit sur la trinité aromatique française classique – l'oignon, la carotte et le céleri transpiraient doucement dans la douceur, puis coaxaient avec le poireau, la tomate et les herbes dans un bouillon propre et parfumé qui goûte au jardin, et non au porte-épices. Pas de brunissement, pas de sel, pas de bâillon : juste une essence légume brillante, prête à porter un risotto, une soupe ou un braise.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "stocks",
  "tags": [
    "stock",
    "légumes",
    "français",
    "bouillon",
    "mirpoix",
    "végétalien",
    "base"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre ou beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, pelé, coupé en deux",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "haut de poireaux",
        "Échalote"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Carotte, broyée, grossièrement hachée",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "panais (pour un stock plus doux et plus terreux)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles, hachées",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Racine de céleri",
        "tige de love"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Fuite, blanche et vert pâle, fendue et lavée",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "oignon supplémentaire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Farine de tomate ou 1 c. à soupe de pâte de tomate",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "une croûte de parmesan",
        "shiitake séché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Giroves d'ail écrasées, peau sur",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Bouquet garni (graines de persil, thym, feuilles de laurier)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "quelques frondes de fenouil pour une note d'anis"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Graines de poivre noires, légèrement craquées",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "grains de poivre blanc pour un stock plus pâle"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Solvent",
      "name": "Eau froide",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "sweated_mirepoix",
      "instructions": "Chauffer l'huile ou le beurre dans un dépôt lourd à feu moyen-doux. Ajouter l'oignon, la carotte, le céleri, le poireau et l'ail concassé et mélanger pour enrober. Transpirer doucement pendant 8 à 10 minutes, en remuant souvent, jusqu'à ce que les légumes adoucissent et sentent doux et parfumé. L'objectif est d'extraire l'humidité et de développer la douceur SANS couleur — garder la chaleur faible. Browner ici teinterait et boueux un stock destiné à rester propre et lumineux.",
      "visualCue": {
        "primaryTarget": "Les légumes sont brillants, basculés et adoucis, l'oignon est devenu translucide aux bords, avec un arôme doux qui s'élève et pas un soupçon de brun doré nulle part.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore fermes, opaques et durs; le pot sent cru plutôt que sucré.",
            "action": "Continuez à transpirer à feu doux pendant quelques minutes. Vous voulez qu'ils soient adoucis et aromatiques avant que n'importe quel liquide n'entre."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont translucides et toute la masse est douce et scintillante, ce qui libère une odeur douce et moelleuse de légumes. Aucune couleur.",
            "action": "Ajouter la tomate et les aromatiques et continuer à l'étape suivante."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brunis et le pot sent grillé ou caramélisé.",
            "action": "Retirez immédiatement la chaleur. Un peu de couleur donne un stock plus profond et plus sombre — acceptable, mais il ne sera plus une base pâle et neutre."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement calme et constant, et non un craquement agressif — s'il crache et craque, la chaleur est trop élevée. Les légumes doivent céder doucement lorsqu'ils sont pressés avec la cuillère."
    },
    {
      "nodeId": "step_2",
      "action": "Construire",
      "inputs": [
        "sweated_mirepoix",
        "ing_06",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "raw_stockpot",
      "instructions": "Incorporer la tomate (ou la pâte de tomate) et laisser cuire une minute pour perdre son bord brut et prêter une douce colonne vertébrale salée. Ajouter le bouquet garni et les grains de poivre fissurés, puis verser dans l'eau froide. L'eau doit couvrir les légumes d'un pouce ou deux. Portez lentement vers un mijot; ne le laissez pas bouillir.",
      "visualCue": {
        "primaryTarget": "Un pot plein d'eau froide et nuageuse avec les légumes et les herbes suspendues et juste commencer à libérer des fils paresseux de vapeur qu'il réchauffe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore froide et immobile; rien ne bouge et aucun arôme n'a encore évolué.",
            "action": "Soyez patient et laissez-le chauffer progressivement. La montée lente à un mijot est ce qui extrait saveur propre."
          },
          {
            "state": "Perfect",
            "description": "De petites bulles commencent à s'élever du fond et la surface tremble, avec une vapeur parfumée commençant à décoller.",
            "action": "Maintenez - le ici à un mijot nu et passez à l'extraction — ne le laissez jamais atteindre un ébullition."
          },
          {
            "state": "Overdone",
            "description": "Le pot a frappé un ébullition dur et enroulé, poussant les légumes violemment et tournant le liquide nuageux.",
            "action": "Baissez immédiatement la chaleur. Un ébullition émulsifie les particules fines dans le bouillon et le rend agité et terni."
          }
        ]
      },
      "feelCue": "L'eau doit être froide contre le pot chaud. Comme il chauffe, la cuisine se remplit de l'odeur du céleri et des herbes — un arôme vert, frais de jardin, jamais amer."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "raw_stockpot"
      ],
      "outputState": "extracted_stock",
      "instructions": "Maintenez le pot à la frémissante barest — quelques bulles qui brisent paresseusement la surface — pendant 40 à 45 minutes, à découvert ou à peine cassé. Écraser toute mousse qui monte dans les dix premières minutes. Résistez à la cuisiner plus longtemps : contrairement aux stocks de viande, les stocks de légumes deviennent ternes, amers et choux-comme s'ils étaient surextraits. Goûtez à 40 minutes; quand le bouillon goûte doux, arrondi, et clairement des légumes, il est fait.",
      "visualCue": {
        "primaryTarget": "Un bouillon légèrement doré à la vapeur avec seulement des bulles occasionnelles, les légumes se sont fanés et dépensés, le liquide s'est dégagé sous une mince surface propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon a un goût fin et aqueux, plus comme l'eau chaude que le bouillon, avec peu d'arôme.",
            "action": "Donnez-lui encore 10 à 15 minutes à une mijoter nue et goûtez à nouveau. Il lui faut du temps pour construire son corps."
          },
          {
            "state": "Perfect",
            "description": "Le liquide est parfumé et doré, goûtant sucré et plein de saveur de légumes propres avec une douce profondeur salée de la tomate. Les légumes semblent épuisés et pâles.",
            "action": "Tuer la chaleur et passer à la pression avant les aplatissements de saveur."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon sent et goûte plat, sulfureux ou légèrement amer, avec un bord de chou mijoté.",
            "action": "Arrêtez immédiatement et forcez-vous. Vous ne pouvez pas inverser la surextraction; la prochaine fois tirez à 40 minutes."
          }
        ]
      },
      "feelCue": "Tenez votre visage au-dessus de la casserole: la vapeur doit sentir doux et vert comme une réserve dans un bon bistrot, jamais dur ou aigre. La surface bouge à peine — si elle grogne, baisse-la."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "extracted_stock"
      ],
      "outputState": "finished_stock",
      "instructions": "Mettre un tamis à mailles fines (liné d'une couche de fromage pour un stock cristallin) sur un bol propre ou un second pot. Faire passer le stock au lieu de le déverser — déranger les solides installés le rend moins clair. Laissez les légumes couler par eux-mêmes; ne les pressez PAS, comme force de pression la pulpe trouble et l'amertume dans le bouillon. Laisser refroidir rapidement dans un bain de glace, puis réfrigérer jusqu'à 4 jours ou congeler pendant des mois.",
      "visualCue": {
        "primaryTarget": "Un stock d'or clair, translucide et pâle, sans débris flottants, assez léger pour lire l'impression, avec un éclat clair et sans sédiments boueux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les particules d'herbe, de poivre et de pulpe végétale obscurcissent le liquide tendu et se déposent au fond.",
            "action": "Plongez une seconde fois dans la nappe de fromage et laissez-la s'installer. Retirez le liquide clair au-dessus des sédiments."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon doré brillant, clair, exempt de particules, qui a un goût brillant et arrondi et prêt pour les saisons (ajouter du sel seulement quand vous cuisinez avec).",
            "action": "Laisser refroidir rapidement dans un bain de glace, puis entreposer. Le laisser sans sel le maintient polyvalent pour n'importe quel plat."
          },
          {
            "state": "Overdone",
            "description": "Le stock est nuageux et gris car les légumes étaient pressés ou l'ébullition était trop dure.",
            "action": "Laissez-le reposer au réfrigérateur et décanter la portion claire, ou utilisez le stock nuageux pour les soupes et les braises où la clarté n'a pas d'importance."
          }
        ]
      },
      "feelCue": "Le stock doit se sentir léger et soyeux sur la cuillère, jamais gélatineux ou épais. Refroidie, elle reste liquide — le stock végétal n'a pas de gélatine, donc une texture fine et propre est exactement juste."
    }
  ]
};
