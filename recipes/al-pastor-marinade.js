export default {
  "repoId": "master_mexican_al_pastor_marinade_001",
  "parentRepoId": null,
  "slug": "al-pastor-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Al Pastor Achiote-Guajillo Marinade",
  "description": "Une pâte farouchement colorée de chiles de guajillo réhydratés, d'achiote annatto-brique, d'ananas et d'épices chaudes – moulues ensemble et pressées dans une épaule de porc fine-découpée jusqu'à ce que la viande soit teinte rouge-orange vif et chaque fibre porte la douce-smoke signature du tropo de taqueria.",
  "cuisine": "Mexicain",
  "culture": "Mexico",
  "category": "sauces",
  "tags": [
    "marinade",
    "Al-pasteur",
    "Mexique",
    "porc",
    "Guajillo",
    "Achiote",
    "Taco"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Chiles de guajillo séchés, ensemencés",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": [
        "Nouveau-Mexique"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Chiles anchos séchés, ensemencés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Mulato chile"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Pâte d'achiote (recado rojo)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à soupe de poudre d'annatto + 1 cumin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, grossièrement haché",
      "ratioValue": 0.5,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Ananas frais, hachés approximativement",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "ananas en conserve dans le jus (pas le sirop)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Vinaigre blanc",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre de cidre"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus d'orange frais",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Graines de cumin grillées",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "cumin au sol (3/4 c. à thé)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Origan mexicain, séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Marjoram"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": [
        "1/2 c. à thé poivre noir moulu"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Gousses de terre",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "toasted_chiles",
      "instructions": "Chauffer une poêle en comal sec ou en fonte à feu moyen-vif jusqu'à très chaud. Appuyez sur chaque guajillo et ancho chile plat sur la surface sèche avec une spatule pendant 10 à 15 secondes de chaque côté — vous voulez que la chair s'assombrisse de rouge brique vif à un brun rougeâtre plus profond avec de petites taches cloquées, libérant une floraison d'arôme doux et légèrement fumé. Guajillo chiles toast plus vite que les anchos — regardez - les attentivement. Au moment où vous sentez quelque chose de fruité et légèrement grillé, ils sont faits. Transférer immédiatement dans un bol et couvrir de 2 tasses d'eau très chaude (non bouillante). Peser avec une assiette et tremper pendant 20 à 25 minutes jusqu'à ce qu'il soit complètement doux et souple. L'eau d'imprégnation transforme un orange-brique vif. Réservez 3 cuillerées à soupe du liquide de trempage — il porte une saveur qui sera ajoutée à la marinade. Égoutter les chiles et les utiliser immédiatement.",
      "visualCue": {
        "primaryTarget": "Les Chiliens s'obscurcissent en brun rougeâtre, sont pliés lorsqu'ils sont pliés, et l'odeur de fruits secs doux et de fumée douce. L'eau qui sème est vive, orange brique à rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens sont encore raides et cassants, de couleur inchangée par rapport à leur état séché. De l'eau à peine teintée. Aroma est plat et poussiéreux.",
            "action": "Le comal n'est pas assez chaud. Augmentez la chaleur et attendez que la poêle se rétablisse complètement avant de re-découper. Appuyez plus longtemps sur les chiles — ils ont besoin d'une vraie chaleur de contact."
          },
          {
            "state": "Perfect",
            "description": "Les Chiliens sont souples et foncés à un brun rougeâtre profond. Émettre un arôme sucré et fumé complexe. Après le trempage, ils sont complètement doux et l'eau de trempage est une brique vive orange.",
            "action": "Égoutter, réserver le liquide de trempage et le transférer au mélangeur."
          },
          {
            "state": "Overdone",
            "description": "Les Chiliens deviennent noirs avec une odeur acride, semblable à une frêne plutôt qu'une douce fumée. L'eau qui sème est très sombre et opaque.",
            "action": "Jetez. Les guajillos brûlés rendront la marinade amère plutôt que fruitée et fumée. Commencez par des chiles frais à feu doux."
          }
        ]
      },
      "feelCue": "Un guajillo bien trempé se sent comme du daim humide — lisse, souple et substantiel. L'eau de trempage doit sentir les fruits secs et la chaleur douce de chile, et non l'amertume."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "toasted_chiles",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_al_pastor_marinade",
      "instructions": "Mélanger les chiles trempés égouttés, le liquide de trempage réservé, la pâte d'achiote, l'oignon, l'ail, l'ananas frais, le vinaigre blanc, le jus d'orange, les graines de cumin grillées, l'origan séché, les grains de poivre noir, les girofles moulues et le sel dans un mélangeur. Mélanger haut pendant 2 minutes jusqu'à ce que la marinade soit complètement lisse. Arrêtez le mélangeur et frottez une petite quantité entre vos doigts — si vous sentez une graine des graines, des grains de poivre ou des peaux de chile, mélangez pendant une autre minute. La marinade finie doit être rouge orange vif à rouge brique profonde, complètement lisse, et tachera tout ce qu'elle touche. Goûtez-le maintenant: la marinade brute sera assez nette — brillante de l'ananas et du vinaigre, avec une chaleur de chile de bâtiment et une profondeur terreuse, presque florale de l'achiote. Il se rafraîchira considérablement pendant la période de marination, en perdant sa brutité et en s'intégrant à la viande. Utiliser immédiatement : appliquer sur les tranches minces (3 à 5 mm), enrober généreusement chaque surface. Faire mariner au réfrigérateur pendant au moins 4 heures, idéalement 12 à 24 heures.",
      "visualCue": {
        "primaryTarget": "Pâte rouge orange vif à rouge brique qui est complètement lisse — pas de fragments de graines visibles ou morceaux de peau de chile. Assez coloré pour tacher les contenants en plastique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade présente des morceaux visibles de peau de chile, d'oignon ou de maïs poivré. La couleur est inégale et striée plutôt que uniformément vive. L'arôme est chunky et disjoint.",
            "action": "Mélanger plus longtemps — 3 minutes complètes en hauteur. Ajouter une cuillère à soupe supplémentaire du liquide de trempage pour aider le mélangeur à traiter la pâte épaisse plus efficacement."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte rouge-orange vif. Je mets tout au contact. L'arôme est lumineux, complexe: douceur de l'ananas, profondeur du piment, achiote terreuse et base d'épices chaudes. Enrober l'arrière d'une cuillère dans une couche opaque et uniforme.",
            "action": "Appliquer généreusement sur le porc, travailler la marinade dans chaque surface et entre les tranches."
          },
          {
            "state": "Overdone",
            "description": "Surcollé à une consistance aérée, légèrement mousseuse. La couleur s'est légèrement allégée de l'aération. Toujours aromatisé correctement.",
            "action": "Laissez reposer 5 minutes avant d'appliquer la viande. La mousse va tomber."
          }
        ]
      },
      "feelCue": "La marinade doit se sentir soyeuse et lissée entre les doigts — froide du mélangeur, profondément colorée, tachante immédiatement. L'achiote lui donne une qualité presque lissée à l'huile, enrobant toute surface qu'elle touche dans un brillant film orange-rouge qui ne s'essuye pas facilement."
    }
  ]
};
