export default {
  "repoId": "master_japanese_dashi_001",
  "parentRepoId": null,
  "slug": "ichiban-dashi",
  "author": "ForkRecipe Kitchen",
  "title": "Ichiban Dashi",
  "description": "Le stock mère de la cuisine japonaise. Deux extractions — kombu pour glutamate, katsuobushi pour inosinate — donnent un bouillon umami clair en moins de vingt minutes de travail patient.",
  "cuisine": "Japonais",
  "culture": "Washoku",
  "category": "stocks",
  "tags": [
    "bouillon",
    "Japonais",
    "umami",
    "kombu",
    "Nom de famille"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-03-01",
  "updatedAt": "2024-10-20",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 10,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Solvent",
      "name": "Eau douce",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Glutamate",
      "name": "Kombu (poule séchée)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Inosinate",
      "name": "Katsuobushi (flacons debonito)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de thon fumé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "kombu_water",
      "instructions": "Placer kombu dans l'eau froide. Laissez-le se réhydrater tranquillement, hors de la chaleur.",
      "visualCue": {
        "primaryTarget": "L'eau a changé une faible couleur de paille; kombu a défourné et adouci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est toujours claire, kombu raide.",
            "action": "Attendez plus longtemps — lents travaux d'extraction."
          },
          {
            "state": "Perfect",
            "description": "De l'eau d'or pâle, douce et souple kombu.",
            "action": "Commencer la chaleur douce."
          },
          {
            "state": "Overdone",
            "description": "Des brins visqueux dans l'eau.",
            "action": "La souche et l'utilisation de toute façon — la saveur reste bonne."
          }
        ]
      },
      "feelCue": "Il sent peu la mer après une longue pluie."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "kombu_water"
      ],
      "outputState": "primed_kombu",
      "instructions": "Apportez de l'eau juste en dessous d'un mijot. Tirez le kombu au moment où de petites bulles s'accrochent au bord du pot.",
      "visualCue": {
        "primaryTarget": "Une traînée de fines bulles autour du bord — jamais un ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Froid à tiède. Pas de bulle.",
            "action": "Augmentez patiemment la chaleur."
          },
          {
            "state": "Perfect",
            "description": "La vapeur monte. Bubbles perle au bord.",
            "action": "Relevez Kombu maintenant."
          },
          {
            "state": "Overdone",
            "description": "Bouillir. Le papillon devient nuageux et amer.",
            "action": "Restreindre et réduire les attentes."
          }
        ]
      },
      "feelCue": "Un léger bruit de la casserole — le son juste avant qu'une bouilloire chante."
    },
    {
      "nodeId": "step_3",
      "action": "Faire infuser",
      "inputs": [
        "primed_kombu",
        "ing_03"
      ],
      "outputState": "bonito_bloom",
      "instructions": "Hors de la chaleur, dispersez katsuobushi à travers la surface. Laissez-le couler de son propre temps.",
      "visualCue": {
        "primaryTarget": "Les flocons ont tous coulé au fond; le bouillon est la couleur du thé faible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des flocons qui flottent encore dans des touffes.",
            "action": "Attendez. Ne remuez pas."
          },
          {
            "state": "Perfect",
            "description": "Tous les flocons se sont installés, bouillon clair ambre.",
            "action": "Enfilez le tissu."
          },
          {
            "state": "Overdone",
            "description": "Broth sombre, sent le poisson et aiguisé.",
            "action": "Utilisez des soupes plus fortes, pas délicates."
          }
        ]
      },
      "feelCue": "Le parfum fumé du bonito doit se lever doucement — ne jamais frapper."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "bonito_bloom"
      ],
      "outputState": "ichiban_dashi",
      "instructions": "Verser à travers un tamis en tissu. Ne pressez pas les solides — laissez la gravité faire tout le travail.",
      "visualCue": {
        "primaryTarget": "Un bouillon clair et doré sans sédiments.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Nuageux, les particules dérivent.",
            "action": "De nouveau à travers un tissu plus fin."
          },
          {
            "state": "Perfect",
            "description": "Ambre clair, surface vitrée.",
            "action": "Utiliser dans les 24 heures."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé le tissu — le bouillon est devenu amer.",
            "action": "Épargnez pour la louange, pas la soupe."
          }
        ]
      },
      "feelCue": "Des odeurs de mousse de bois et d'océan. Goûte rond, pas vif, comme une note."
    }
  ]
};
