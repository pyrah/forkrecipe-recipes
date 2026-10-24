export default {
  "repoId": "master_italian_affogato_001",
  "parentRepoId": null,
  "slug": "affogato",
  "author": "ForkRecipe Kitchen",
  "title": "Affogato al Caffè",
  "description": "Une boule de glace fior di latte noyée sous un espresso brûlant : le choc du froid et du chaud, du sucré et de l’amer crée une harmonie qui les dépasse.",
  "cuisine": "Italienne",
  "culture": "Italienne",
  "category": "beverages",
  "tags": [
    "italian",
    "espresso",
    "gelato",
    "café",
    "dessert",
    "boisson",
    "rapide"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 0,
    "bitter": 4,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Glace fior di latte ou glace à la vanille",
      "ratioValue": 2,
      "defaultUnit": "scoops",
      "substitutions": [
        "glace à la vanille de qualité",
        "glace stracciatella"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Espresso fraîchement extrait (dose de 7 g, volume de 30 ml)",
      "ratioValue": 1,
      "defaultUnit": "shot",
      "substitutions": [
        "ristretto, plus corsé",
        "café extrait à la moka"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Liqueur d’amaretto, facultative",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "Frangelico",
        "Kahlua"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Refroidissement",
      "inputs": [
        "ing_01"
      ],
      "outputState": "gelato_in_glass",
      "instructions": "Placez un petit verre, une tasse en céramique ou un bol en métal au congélateur pendant 5 minutes. Déposez deux boules de glace bien fermes dans le récipient préalablement refroidi. La glace doit être à la bonne température pour être servie : pas dure comme de la pierre, mais assez ferme pour garder sa forme. Si vous utilisez de l’amaretto, versez-le maintenant sur la glace, avant l’espresso.",
      "visualCue": {
        "primaryTarget": "Deux boules de glace pâle, intactes et fermes dans un récipient froid. Elles gardent leur forme bombée et ne brillent pas encore de fonte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le récipient est tiède. La glace commence aussitôt à fondre à son contact.",
            "action": "Refroidissez toujours le récipient de service. Une tasse chaude ferait fondre la glace par-dessous avant même l’arrivée de l’espresso."
          },
          {
            "state": "Perfect",
            "description": "La glace reste ferme dans une tasse glacée. Aucun liquide ne s’accumule au fond ; le verre se couvre légèrement de buée.",
            "action": "Extrayez immédiatement l’espresso : chaque seconde d’attente atténue le contraste."
          },
          {
            "state": "Overdone",
            "description": "La glace commence à fondre et les boules perdent leur forme.",
            "action": "Agissez rapidement. La glace doit être ferme lorsque l’espresso est versé pour créer un contraste thermique marqué."
          }
        ]
      },
      "feelCue": "Après refroidissement, le récipient doit être très froid au toucher, presque douloureux à tenir à mains nues. Il préservera la glace pendant la minute nécessaire à l’extraction de l’espresso."
    },
    {
      "nodeId": "step_2",
      "action": "Infuse",
      "inputs": [
        "gelato_in_glass",
        "ing_02",
        "ing_03"
      ],
      "outputState": "finished_affogato",
      "instructions": "Extrayez l’espresso et versez-le directement sur la glace d’un geste franc et régulier. Ne le laissez pas refroidir : le contraste entre l’espresso brûlant et la glace est la signature de l’affogato. Servez sans attendre et ne mélangez pas.",
      "visualCue": {
        "primaryTarget": "La surface de la glace fume au contact de l’espresso chaud. Le café sombre s’accumule autour de la boule et commence à faire fondre sa base en formant des traînées crémeuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L’espresso a refroidi avant d’être versé. Aucun dégagement de vapeur au contact : le choc thermique est perdu.",
            "action": "Extrayez un nouvel espresso et versez-le immédiatement. Un affogato tiède ne se rattrape pas."
          },
          {
            "state": "Perfect",
            "description": "L’espresso brûlant rencontre la glace froide et produit une belle vapeur. Le café qui l’entoure est sombre et parfumé, tandis que le sommet de la boule reste intact.",
            "action": "Servez immédiatement avec une petite cuillère."
          },
          {
            "state": "Overdone",
            "description": "L’affogato a été préparé depuis plus de deux minutes. La glace a fondu dans l’espresso : le contraste a disparu et il ne reste qu’un café doux et tiède.",
            "action": "Il n’y a rien à faire : un affogato se prépare à table et se déguste immédiatement."
          }
        ]
      },
      "feelCue": "Juste après avoir versé l’espresso, la chaleur doit rayonner de la tasse. La vapeur qui s’élève de la glace est essentielle : elle indique que l’affogato a été préparé comme il faut."
    }
  ]
};
