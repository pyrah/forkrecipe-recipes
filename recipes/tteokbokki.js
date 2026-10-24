export default {
  "repoId": "master_korean_tteokbokki_001",
  "parentRepoId": null,
  "slug": "tteokbokki",
  "author": "ForkRecipe Kitchen",
  "title": "Tteokbokki",
  "description": "Les gâteaux de riz cylindriques croustillants mijotés dans une sauce de gochujang en feu, la nourriture de rue la plus addictif en Corée, à la fois épicée, douce et collante.",
  "cuisine": "Coréen",
  "culture": "Nourriture de rue coréenne",
  "category": "proteins",
  "tags": [
    "Gâteau de riz",
    "coréen",
    "épicé",
    "Alimentation de rue",
    "Gochujang"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Garae-tteok (gâteaux de riz de cylindre, frais ou réfrigérés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Gâteaux de riz plats (teok)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock d'anchois-kombu (myeolchi yuksu)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "Dashi",
        "eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Gochujang (Pâte de chili coréen)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gochugaru (poivrons rouges coréens)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de maïs",
        "sirop de riz"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Eomuk (feuilles de gâteaux de poissons coréens, coupées en bandes)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "bâtonnets de crabe"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Oignons verts (coupés du biais)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "tteokbokki_sauce",
      "instructions": "Mélanger le stock d'anchois, le gochujang, le gochugaru, le sucre et la sauce de soja dans une poêle ou une poêle large et peu profonde. Battre à feu moyen jusqu'à ce que le gochujang soit complètement dissous et que la sauce soit uniforme. Portez à un doux mijot. Bouche: la sauce crue doit être agressivement chaude, sucrée et salée, légèrement plus intense que vous voulez le plat final, car les gâteaux de riz l'absorberont et le dilueront.",
      "visualCue": {
        "primaryTarget": "Une sauce uniforme, rouge vif sans stries de pâte non dissoute. La surface brille avec de minuscules gouttelettes d'huile du gochujang.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de gochujang rouge foncé flottent encore en stock plus léger. La sauce est séparée.",
            "action": "fouetter vigoureusement pendant une autre minute et augmenter légèrement la chaleur jusqu'à ce qu'elle soit complètement homogène."
          },
          {
            "state": "Perfect",
            "description": "Doux, sauce profondément rouge avec un éclat brillant. Le goût est chaud, doux et salé dans une mesure égale avec une complexité fermentée.",
            "action": "Ajouter les gâteaux de riz."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop avant d'ajouter des gâteaux de riz; elle est déjà épaisse et pâteuse.",
            "action": "Ajouter une éclaboussure d'eau ou de bouillon pour réduire à une consistance fluide."
          }
        ]
      },
      "feelCue": "La vapeur montant de la sauce vous piquera légèrement les yeux — le gochugaru libère la capsaïcine. C'est un signe que le niveau de chaleur est juste."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "tteokbokki_sauce",
        "ing_01",
        "ing_07"
      ],
      "outputState": "simmering_tteokbokki",
      "instructions": "Si vous utilisez des gâteaux de riz réfrigérés, trempez-les dans de l'eau tiède pendant 10 minutes avant de les ramollir. Ajouter les gâteaux de riz et les lanières de gâteau de poisson à la sauce mijotante. Cuire à feu moyen, en remuant fréquemment pour éviter de coller, pendant 8 à 12 minutes jusqu'à ce que les gâteaux de riz soient tendres tout au long. La sauce s'épaissira significativement lorsque l'amidon des gâteaux de riz y sera libéré.",
      "visualCue": {
        "primaryTarget": "Les gâteaux de riz sont enrobés de sauce rouge et visiblement gonflés. La sauce s'est épaissie à une consistance de revêtement brillante qui s'accroche à chaque pièce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les gâteaux de riz sont encore fermes et froids au centre, blancs lorsqu'ils sont cassés en deux. La sauce n'a pas épaissi.",
            "action": "Continuer à mijoter et remuer chaque minute pour vérifier si vous collez."
          },
          {
            "state": "Perfect",
            "description": "Les gâteaux de riz sont uniformément doux et croustillants. La sauce enrobe l'arrière d'une cuillère épaissement et est passée du liquide à une glaçure collante. Le gâteau de poisson est entièrement chauffé et légèrement caramélisé aux bords.",
            "action": "Ajouter les oignons verts et terminer."
          },
          {
            "state": "Overdone",
            "description": "Les gâteaux de riz sont devenus musqués et se désintègrent. La sauce a été réduite à une pâte foncée et collante et commence à brûler sur le fond de la poêle.",
            "action": "Ajouter immédiatement un jet d'eau pour se détendre, réduire la chaleur et servir immédiatement."
          }
        ]
      },
      "feelCue": "Mélanger la poêle — vous devriez sentir les gâteaux de riz devenir plus lourds et plus doux contre la cuillère, car ils absorbent la sauce. Le fond de la poêle doit se sentir légèrement collant, jamais brûlé."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "simmering_tteokbokki",
        "ing_08"
      ],
      "outputState": "finished_tteokbokki",
      "instructions": "Éparpiller les oignons verts tranchés sur la casserole dans les 30 dernières secondes de cuisson et remuer une fois pour incorporer. La sauce à ce point devrait être épaisse, brillante, et s'accrocher à chaque morceau dans une couche lourde. Retirer immédiatement du feu — la chaleur résiduelle de la poêle continuera à cuire le contenu. Servir directement de la poêle avec des cure-dents ou des baguettes.",
      "visualCue": {
        "primaryTarget": "Une casserole de gâteaux de riz glacés, liquéfiés de sauce et de lanières de gâteaux de poisson en sauce écarlate. Les tranches d'oignon vert offrent un contraste de couleur vif. La sauce est assez épaisse pour laisser les sentiers lorsqu'elle est agitée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse. Les oignons verts ont une saveur crue.",
            "action": "Laisser mijoter encore 2 minutes pour réduire la sauce et flétrir légèrement les oignons."
          },
          {
            "state": "Perfect",
            "description": "La sauce est profondément brillante et enrobe chaque pièce. Il tire dans des fils lents et paresseux quand une pièce est levée. Les oignons verts ont légèrement ramolli mais restent verts.",
            "action": "Servir immédiatement tout en brûlant chaud."
          },
          {
            "state": "Overdone",
            "description": "La sauce a caramélisé sur le fond de la poêle et les gâteaux de riz sont collés. Une odeur de caramel amère.",
            "action": "Ajouter 2 cuillères à soupe d'eau et racler pour déglacer; servir immédiatement et ne pas réchauffer."
          }
        ]
      },
      "feelCue": "Appuyez sur un gâteau de riz contre le côté de la poêle à l'aide d'une cuillère — il devrait céder avec une pression douce et revenir légèrement quand il est relâché. Cette élasticité est la marque de tteok à son meilleur."
    }
  ]
};
