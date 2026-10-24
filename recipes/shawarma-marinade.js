export default {
  "repoId": "master_levantine_shawarma_marinade_001",
  "parentRepoId": null,
  "slug": "shawarma-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Marinade de Shawarma",
  "description": "Une marinade chaude, rouge brique, construite sur sept épices et un yogourt — elle tendre le poulet ou l'agneau pendant la nuit, laissant une croûte d'épices caramélisées qui s'accroche longtemps après que la crache cesse de tourner.",
  "cuisine": "Levantine",
  "culture": "Palestiniens",
  "category": "condiments",
  "tags": [
    "marinade",
    "Shawarma",
    "lévantine",
    "sept spice",
    "yaourt",
    "grillage"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
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
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "labneh éclairci avec de l'eau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Baharat (mélange de sept épices)",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "Allspice + cannelle + poivre noir"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail hachées à pâte",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "shawarma_marinade_mixed",
      "instructions": "Mélanger le yogourt, le bahrat, le cumin, le curcuma, le jus de citron, la pâte d'ail et le sel dans un bol. fouetter jusqu'à ce que la couleur soit complètement homogène et orange brique. Goûtez sur un morceau de pain — il devrait être fortement épicé, salé et légèrement aigre. La bouchée d'ail cru se rafraîchira toute la nuit au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Une pâte en terre cuite-orange lisse sans morceaux d'épices sèches ou de stries de yogourt blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des écharpes de yogourt blanc et des touffes d'épices non incorporées visibles.",
            "action": "fouetter plus vigoureusement et laisser reposer 2 minutes pour que les épices s'hydratent, puis fouetter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Rouge-orange uniforme, brillant et lisse. Clings à une cuillère dans un ruban épais.",
            "action": "Coat votre protéine soigneusement et réfrigérer au moins 4 heures, idéalement pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "La marinade a été sursaisonnée avec du sel ou du citron au-delà du point de correction du goût.",
            "action": "Ajoutez une cuillère à soupe plus de yogourt pour diluer et rééquilibrer."
          }
        ]
      },
      "feelCue": "La marinade devrait se sentir assez épaisse pour enrober votre bout de doigt sans goutter — si elle s'écoule comme de l'eau, le yogourt est trop mince ou vous avez ajouté trop de citron."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "shawarma_marinade_mixed"
      ],
      "outputState": "marinated_protein",
      "instructions": "Couper les cuisses de poulet ou les tranches d'agneau en profondeur avec un couteau pour faciliter la pénétration. Mettre la viande dans la marinade jusqu'à ce que chaque surface soit recouverte. Couvrir soigneusement et réfrigérer pendant au moins 4 heures; 12 à 24 heures est idéal. Portez la protéine à température ambiante pendant 30 minutes avant la cuisson.",
      "visualCue": {
        "primaryTarget": "La viande est complètement recouverte de marinade orange, sans taches nues. Après la marinade, l'extérieur de la viande aura légèrement raffermi là où l'acide a commencé à fonctionner.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Revêtement fin et patchy. Des taches minces visibles sur la protéine.",
            "action": "Jetez encore et appuyez sur la marinade dans n'importe quelle coupe. Utilisez vos mains — gants allumés."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface est uniformément recouverte. Au bout de 12 heures, la couleur s'est accrue jusqu'au rouge rouille et la viande est plus dense et plus productive aux bords.",
            "action": "Cuire à feu vif ou sous une grille chaude."
          },
          {
            "state": "Overdone",
            "description": "La viande se trouve dans la marinade depuis plus de 36 heures — l'acide a commencé à dénaturé les fibres extérieures à une texture grise et musquée.",
            "action": "Cuire immédiatement. Évitez les longues marinades acides sur les coupes fines."
          }
        ]
      },
      "feelCue": "Les cuisses de poulet bien garnies doivent être glissantes mais légèrement collantes — les protéines à la surface se sont resserrées et ne sont pas musquées."
    }
  ]
};
