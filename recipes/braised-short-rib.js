export default {
  "repoId": "master_american_braisedshortrib_001",
  "parentRepoId": null,
  "slug": "braised-short-rib",
  "author": "ForkRecipe Kitchen",
  "title": "Côtes courtes braisées de vin rouge",
  "description": "Des côtes courtes de bœuf désossées cousues à une croûte profondément caramélisée, puis submergées de vin rouge et d'aromates et braisées bas et lentes pendant quatre heures jusqu'à ce que le collagène ait fondu dans une sauce brillante et tremblante qui enveloppe la fourchette en rubans foncés.",
  "cuisine": "Américain",
  "culture": "Américain contemporain",
  "category": "proteins",
  "tags": [
    "protéine",
    "américains",
    "boeuf",
    "braisés",
    "Vin rouge",
    "cuits lentement",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "5 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes courtes de bœuf osseux (cut anglais)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "côtes courtes coupées en flanken",
        "joues de bœuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Vin rouge sec (Cabernet ou Syrah)",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de viande bovine supplémentaire"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Viande bovine",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "Viande bovine"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, haché approximativement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâtes de céleri, hachées approximativement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Carottes, grossièrement hachées",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Giroves d'ail écrasées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Thym frais et feuilles de laurier",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre pour la mer",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "suif de bœuf"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_10",
        "ing_11"
      ],
      "outputState": "seared_ribs",
      "instructions": "Pat les côtes courtes complètement sèches — l'humidité de surface est l'ennemi de la formation de la croûte. Assaisonner agressivement avec du sel et du poivre. Chauffer un four hollandais lourd ou un pot de cuisson à feu vif jusqu'à ce que l'huile fume. Semer les côtes en lots, de 3 à 4 minutes de chaque côté, jusqu'à ce qu'une croûte acajou profonde se forme sur toutes les surfaces. Ne pas fouler la poêle; la vapeur empêchera le brunissement. Retirer et réserver.",
      "visualCue": {
        "primaryTarget": "Une croûte Maillard profondément brune et presque noire sur toutes les surfaces planes de chaque côte. L'enrobage affectueux du fond de la casserole devrait être noir et foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les côtes sont gris-brun sans croûte — elles sont à la vapeur, pas à la mer. La surface est encore humide.",
            "action": "Enlever les côtes, essuyer la poêle, réchauffer pour fumer et saisir moins de côtes à la fois."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou-brun sur toutes les surfaces de mer. Les côtes se libèrent proprement de la poêle lorsqu'une croûte s'est formée. Un fond sombre et caramélisé.",
            "action": "Cuire les côtes restantes, puis cuire le mirpoix dans la même graisse."
          },
          {
            "state": "Overdone",
            "description": "La croûte est devenue noire et le fond est carbonisé: le liquide qui se lève aura un goût amer.",
            "action": "Essuyer la poêle avec une serviette en papier avant d'ajouter des légumes. Déglacer soigneusement et goûter le liquide avant de procéder."
          }
        ]
      },
      "feelCue": "Lorsque les côtes se détachent proprement de la poêle sans tirer, la croûte s'est formée — jamais les piquant tôt ou la croûte se déchirera et restera derrière."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "seared_ribs",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_02"
      ],
      "outputState": "braising_liquid",
      "instructions": "Dans la même casserole, faire cuire l'oignon, le céleri, la carotte et l'ail dans la graisse fondue à feu moyen jusqu'à ce qu'ils se ramollissent et commencent à caraméliser, environ 8 minutes. Ajouter la pâte de tomate et cuire, en remuant, pendant 2 minutes jusqu'à ce qu'elle s'assombrisse à un rouge brique. Verser dans le vin rouge et gratter tout le fond du fond. Laisser mijoter jusqu'à ce que le vin ait diminué de moitié, environ 10 minutes.",
      "visualCue": {
        "primaryTarget": "Le liquide de graissage doit être de couleur violette-burgundy profonde avec une consistance légèrement réduite, légèrement sirupeuse. Tout le fond sombre de la poêle s'est dissous dans le liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin sent toujours cru et vif — l'alcool n'a pas encore cuit. Le liquide est mince et violet vif.",
            "action": "Continuez à réduire. L'odeur du vin cru doit s'estomper avant d'ajouter du bouillon et des côtes."
          },
          {
            "state": "Perfect",
            "description": "Réduction de moitié, odeurs de vin cuit et de légumes caramélisés. Un brun bourgogne profond, presque opaque. Pas d'alcool.",
            "action": "Ajouter le stock, le thym et la baie. Retourne les côtes."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin — le liquide est épais et collant et les sucres du vin commencent à brûler.",
            "action": "Ajouter immédiatement le stock et racler le fond. Réduire légèrement la température finale du braise."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans le vin réduit et le goût — il devrait avoir une profondeur ronde de fruits cuits sans bord d'alcool vif. Si vos yeux arrosent légèrement, il faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "braising_liquid",
        "ing_03",
        "ing_09"
      ],
      "outputState": "braised_short_ribs",
      "instructions": "Retournez les côtes dans le pot. Ajouter le stock de boeuf, le thym et la baie jusqu'à ce que le liquide monte les deux tiers des côtes — ne pas plonger. Porter à la mijote nue, puis couvrir et transférer dans un four de 150 C (300 F). Braser pendant 3,5 à 4 heures, tourner les côtes une fois à mi-chemin. Le four assure une chaleur uniforme et douce de tous les côtés que la mijotation de la cuisinière ne peut pas correspondre.",
      "visualCue": {
        "primaryTarget": "Après 4 heures, la viande s'éloigne visiblement de l'os de 1 à 2 cm. Le liquide de braisage a réduit et obscurci à une sauce brillante presque noire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est cuite mais s'accroche encore fermement à l'os. Une fourche pressée à la viande répond à une résistance notable — le collagène n'a pas complètement converti.",
            "action": "Continuez à faire des larmes. Vérifiez toutes les 30 minutes. La côte courte sous-brasée est string, pas soyeuse."
          },
          {
            "state": "Perfect",
            "description": "La viande tire de l'os avec une pression douce. Une fourche insérée dans des diapositives sans résistance. Le liquide de cuisson est épais, brillant, et enveloppe l'arrière d'une cuillère.",
            "action": "Retirer soigneusement les côtes. Réduire la sauce au besoin, puis servir."
          },
          {
            "state": "Overdone",
            "description": "La viande est tombée de l'os et commence à se désintégrer dans la sauce.",
            "action": "Transférer soigneusement les morceaux dans un plat de service. La sauce sera excellente — la déformation et la réduction. La viande est encore délicieuse, juste plus rustique."
          }
        ]
      },
      "feelCue": "Lorsque vous êtes brasé à la perfection, vous pouvez tirer l'os de la côte libre avec deux doigts et aucune résistance — il glisse proprement à travers la viande qui a la texture tremblante et productive de gelée très ferme."
    }
  ]
};
