export default {
  "repoId": "master_chinese_pekingduck_001",
  "parentRepoId": null,
  "slug": "peking-duck",
  "author": "ForkRecipe Kitchen",
  "title": "Canard à Pékin",
  "description": "Le pinacle de la cuisine rôtie chinoise — un canard entier séché à l'air pendant 24 heures, laqué de maltose et de soja jusqu'à ce que la peau éclate au toucher, la graisse rendue complètement sous une coquille d'acajou brûlée.",
  "cuisine": "Chinois",
  "culture": "Pékin",
  "category": "proteins",
  "tags": [
    "protéine",
    "Chinois",
    "canard",
    "grillés",
    "Piège",
    "peau croustillante"
  ],
  "difficulty": 5,
  "activeTime": "1 hour",
  "totalTime": "30 hours",
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
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Canard entier (2,2 à 2,5 kg), nettoyé",
      "ratioValue": 2300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sirop de maltose",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "miel (moins visqueux)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin de riz shaoxant",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau bouillante (pour blanchir)",
      "ratioValue": 2000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre de cinqpices",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Oignon de printemps, coupé en longueurs",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "seasoned_duck",
      "instructions": "Mélanger cinq épices et sel. Enlever le cou et les abats. Sécher soigneusement la cavité du canard avec des serviettes en papier. Frotter le mélange de sel à cinqpices à l'intérieur de la cavité. Remplis la cavité de gingembre et d'oignon de printemps. Coupe l'ouverture avec une brochette. À l'aide d'une pompe à vélo ou d'une buse de compresseur d'air insérée sous la peau à l'ouverture du cou, gonflez la peau loin du sein, ce qui sépare la graisse sous-cutanée de la chair, la clé pour briser la peau croustillante.",
      "visualCue": {
        "primaryTarget": "La peau de poitrine du canard doit avoir l'air visiblement gonflée et séparée de la viande en dessous, comme un petit oreiller.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est toujours à plat contre la chair — l'air n'a pas pénétré assez loin.",
            "action": "Réinsérer la buse au cou et pomper lentement tout en appuyant sur la peau du cou fermée autour. Travailler de l'air vers les jambes aussi."
          },
          {
            "state": "Perfect",
            "description": "La peau de la poitrine s'est séparée visiblement, la peau de la cuisse semble tendue. Le canard semble gonflé et rond, pas plat.",
            "action": "Déplacez-vous immédiatement pour blanchir."
          },
          {
            "state": "Overdone",
            "description": "La peau a déchiré dans un endroit où trop de pression s'est accumulée.",
            "action": "Patch avec un cure-dent pour tenir la peau. La déchirure scellera pendant le séchage et la torréfaction."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur la peau gonflée de la poitrine, il doit se sentir comme un raisin mûr — tendu et printanier, avec une poche d'air distincte entre votre doigt et la viande en dessous."
    },
    {
      "nodeId": "step_2",
      "action": "Blanch",
      "inputs": [
        "seasoned_duck",
        "ing_05"
      ],
      "outputState": "blanched_duck",
      "instructions": "Tenez le canard au-dessus d'un grand pot ou wok par son cou trussé. Faire bouillir l'eau lentement et uniformément sur toute la surface de la peau pendant 2 à 3 minutes – la peau se serrera et deviendra blanche opaque. Cela ouvre les pores et resserre la matrice protéique, permettant une meilleure adhérence de la laque et une peau finale plus croustillante.",
      "visualCue": {
        "primaryTarget": "La peau passe de l'ivoire pâle à un blanc serré et opaque, tout en s'éloignant légèrement des jambes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau a toujours l'air lâche, jaunâtre et légèrement translucide.",
            "action": "Continuer l'eau bouillante, en se concentrant sur les taches pâles."
          },
          {
            "state": "Perfect",
            "description": "resserré uniformément, blanc et visiblement contrasté. Le canard semble maintenant plus maigre.",
            "action": "Laissez bien égoutter avant la laquage."
          },
          {
            "state": "Overdone",
            "description": "La peau commence à cuire à travers et blister à partir de trop d'eau bouillante.",
            "action": "Passez rapidement au laquage. La peau sera encore croquante au four."
          }
        ]
      },
      "feelCue": "Après avoir blanchi, la peau doit se sentir comme du parchemin tat quand vous lancez un doigt le long de la poitrine — raide et papier, pas doux."
    },
    {
      "nodeId": "step_3",
      "action": "Glace",
      "inputs": [
        "blanched_duck",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "lacquered_duck",
      "instructions": "Chauffer le maltose dans une petite poêle à feu très doux jusqu'à ce qu'il coule. Incorporer le vin Shaoxing et la sauce soja pour faire une laque. Badigeonner une fine, même couche sur toute la peau de canard. Suspendre le canard dans un endroit frais et aéré (ou devant un ventilateur) et répéter le laquage toutes les 4 heures pour un total de 3 à 4 couches sur 24 heures. La peau doit être entièrement sèche entre les couches. C'est non négociable: l'humidité piégée sous la laque vaporise la peau au lieu de la croustiller.",
      "visualCue": {
        "primaryTarget": "Après 24 heures, la peau de canard doit avoir l'air d'ambre foncée-mahogany, sèche comme peau de tambour, et légèrement collante au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle et reste douce ou sinueuse. Seulement une ou deux couches appliquées.",
            "action": "Continuer à sécher et appliquer plus de laques. Ne pas rôtir jusqu'à ce que la peau soit serrée et foncée."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou brun, uniformément sec et serré. Cacher la poitrine fait un son légèrement creux. Pas de taches collantes.",
            "action": "Passer à la torréfaction à feu vif."
          },
          {
            "state": "Overdone",
            "description": "Laque s'est construite de façon inégale — des plaques épaisses presque noires alternant avec des zones plus légères.",
            "action": "Utilisez un pinceau propre pour redistribuer légèrement avant l'heure de séchage finale. Une couleur inégale est cosmétique, mais un croustillant inégal n'est pas."
          }
        ]
      },
      "feelCue": "La peau laquée séchée doit se sentir comme du vinyle rigide — lisse, frais et complètement inélastique. Si elle se penche légèrement sous vos doigts, il faut encore une heure de séchage."
    },
    {
      "nodeId": "step_4",
      "action": "Rôtis",
      "inputs": [
        "lacquered_duck"
      ],
      "outputState": "roasted_duck",
      "instructions": "Préchauffer le four à 220 C (430 F). Placez la poitrine du canard vers le bas sur un porte-fils placé sur un plateau profond avec 2 cm d'eau sous (pour attraper la graisse qui coule et empêcher de fumer). 25 minutes. Plongez jusqu'à la poitrine, augmentez jusqu'à 240 C (465 F) et faites rôtir encore 20 à 25 minutes jusqu'à ce que la peau soit croustillante et laquée profondément.",
      "visualCue": {
        "primaryTarget": "Peau d'acajou glissée avec un éclat de laque-miroir, bublée et cloquée aux points élevés du sein. Le bac à goutte d'eau ci-dessous devrait contenir une réserve de gras rendu transparent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau a l'air mate et foncée, mais elle n'a ni bulle ni cloque. Il fléchit lorsqu'il est pressé.",
            "action": "Augmenter le four à 250 C et faire rôtir encore 10 minutes, en regardant attentivement."
          },
          {
            "state": "Perfect",
            "description": "Peau bouillie, blister, fracassante. Le tapotage à l'aide d'une cuillère produit un « clic » aigu. Acajou profond avec des reflets dorés-ambre où la graisse a mis en commun.",
            "action": "Reposez-vous 5 minutes, puis découpez la peau et la viande séparément."
          },
          {
            "state": "Overdone",
            "description": "La peau a noirci et la laque a brûlé à un omble amer.",
            "action": "Utilisez un couteau tranchant pour racler la couche supérieure noircie, la couche inférieure est souvent encore bonne. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Tapotez la peau de canard finie avec un ongle — il devrait produire un clic vif et résonnant, comme tapoter l'arrière d'un téléphone. Si ça a l'air terne, il faut plus de temps à haute chaleur."
    }
  ]
};
