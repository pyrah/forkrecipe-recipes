export default {
  "repoId": "master_brazilian_moqueca_de_peixe_001",
  "parentRepoId": null,
  "slug": "moqueca-de-peixe",
  "author": "ForkRecipe Kitchen",
  "title": "Moqueca de Peixe",
  "description": "Le ragoût bahaï de la diaspora africaine : épais poisson blanc mijoté dans une casserole de terre cuite avec du lait de coco, de l'huile de palme dendê, de la tomate, de l'oignon et de la coriandre jusqu'à ce que le bouillon soit une orange brillante, parfumée de quelque chose de tout à fait propre – tropical, riche et légèrement enflammé.",
  "cuisine": "Brésil",
  "culture": "Bahian",
  "category": "seafood",
  "tags": [
    "Sans gluten",
    "sans produits laitiers",
    "poissons",
    "ragoût",
    "noix de coco",
    "Afro-brazilien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de poissons blancs épais (cod, bar ou mérou)",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "flétan",
        "snapper"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Dendê (huile de palme rouge)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "paprika fumé dans l'huile d'olive — non authentique mais fonctionnel"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Tomates de ripe, coupées en rondelles",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "400 g d'étain tomates entières"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, tranché en rondelles fines",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "poivrons rouges et verts, tranchés en fines bandes",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), grossièrement hachée",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de chaux",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Piments de malagueta ou bonnet de scotch, tranchés finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "piment des yeux d'oiseau"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_09",
        "ing_06",
        "ing_11"
      ],
      "outputState": "marinated_fish",
      "instructions": "Couper les filets de poisson en grandes portions (environ 150 g chacune). Dans un bol, mélanger avec le jus de lime, la moitié de l'ail et le sel. Mélanger doucement pour enrober. Faire mariner de 20 à 30 minutes au réfrigérateur. Le jus de lime commencera à dénaturationr les protéines de surface, donnant au poisson un aspect légèrement opaque et une surface plus parfumée.",
      "visualCue": {
        "primaryTarget": "Poissons dans la marinade de chaux",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est encore complètement translucide et à l'aspect brut après seulement 5 minutes. Pas assez de temps pour la marinade pour pénétrer.",
            "action": "Faire mariner au minimum 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "La surface du poisson est légèrement opaque — légèrement « cuite » par l'acide. La chair est ferme et parfumée avec de la chaux et de l'ail. Pas de brunissement ou de gris.",
            "action": "Continuez à construire le ragoût."
          },
          {
            "state": "Overdone",
            "description": "Le poisson marine depuis plus de 2 heures dans le jus de lime. La surface est blanche et « cuite » partout, s'écroulant lorsqu'elle est touchée.",
            "action": "Réduisez considérablement le temps de cuisson — le poisson aura besoin de très peu de chaleur pour cuire."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un morceau de poisson mariné — il devrait se sentir légèrement plus ferme que le poisson cru, mais toujours plein rendement, comme le tofu ferme plutôt que la viande."
    },
    {
      "nodeId": "step_2",
      "action": "Assemblage",
      "inputs": [
        "ing_02",
        "ing_05",
        "ing_04",
        "ing_07",
        "ing_10"
      ],
      "outputState": "layered_moqueca",
      "instructions": "Dans un pot d'argile lourd (idéal) ou une casserole large à fond lourd, verser l'huile dendê. Coucher les rondelles d'oignon sur la base, puis les rondelles de tomate, puis les bandes de poivre, puis le piment. Cette approche en couches est traditionnelle: les légumes cuits en séquence à partir de la chaleur de l'huile ci-dessous.",
      "visualCue": {
        "primaryTarget": "Légumes stratifiés dans la poêle",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "S.O. — C'est une étape de montage à froid.",
            "action": "S'assurer que les couches sont uniformes et couvrir toute la base de la poêle de sorte que le poisson cuisine entouré de légumes de tous les côtés."
          },
          {
            "state": "Perfect",
            "description": "Des couches distinctes, même d'oignon rouge-orange, des rondelles de tomates rouges et des bandes de poivre multicolores. L'huile dendê à la base est un rouge orange vif.",
            "action": "Dispersez le reste de l'ail sur le dessus et posez les morceaux de poisson sur les couches de légumes."
          },
          {
            "state": "Overdone",
            "description": "S.O. au stade de montage.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La casserole en couches devrait être froide et humide lorsque vous placez le poisson sur le dessus — l'humidité des légumes et du poisson cru créera la vapeur qui commence le processus de cuisson."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "layered_moqueca",
        "marinated_fish",
        "ing_03",
        "ing_08"
      ],
      "outputState": "finished_moqueca",
      "instructions": "Placez les morceaux de poisson marinés sur le dessus des légumes stratifiés. Verser le lait de coco sur tout — il devrait presque submerger le poisson. Couvrir soigneusement et cuire à feu moyen pendant 15 à 20 minutes, sans remuer, jusqu'à ce que le poisson soit juste cuit et le lait de coco s'est combiné avec les jus de légumes et l'huile de palme pour créer un bouillon rouge orange brillant. Ajouter la plupart de la coriandre dans les 2 dernières minutes. Goûtez et ajustez le sel.",
      "visualCue": {
        "primaryTarget": "Bouillon de moqueca et poisson pendant la cuisson",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est toujours translucide au centre. Le bouillon est pâle et n'a pas encore émulsifié l'huile de palme et le lait de coco.",
            "action": "Couvrir et continuer à mijoter — le bouillon deviendra orange au fur et à mesure que le dendê émulsifie dans le lait de coco."
          },
          {
            "state": "Perfect",
            "description": "Le poisson est opaque tout au long du parcours, mais conserve sa forme dans de grands flocons humides. Broth est un rouge orangé vif et nuageux, le dendê et la noix de coco ont émulsifié en une sauce riche et aromatique. Coriandre flotte sur le dessus. Le pot sent la richesse tropicale.",
            "action": "Servir directement de la casserole à la table. Dispersez le reste de la coriandre sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Les poissons se sont séparés en flocons et se sont désintégrés dans le bouillon. Broth s'est séparé — l'huile flottant à la surface du lait de coco.",
            "action": "Servir immédiatement et très doucement. Ne remuez pas. La saveur est intacte mais la texture du poisson a disparu."
          }
        ]
      },
      "feelCue": "Utilisez une grande cuillère pour tirer un morceau de poisson du bouillon — il devrait se briser en grands flocons, humides, séparés plutôt qu'une seule pièce cohésive. Si elle résiste et se sent caoutchouteuse, elle a besoin de plus de temps; si elle se dissout dans la cuillère, elle est trop cuite."
    }
  ]
};
