export default {
  "repoId": "fork_sourdough_pizzadough_001",
  "slug": "sourdough-pizza-dough",
  "parentRepoId": "master_neapolitan_pizzadough_001",
  "parentSlug": "neapolitan-pizza-dough",
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Pizza Dough",
  "description": "Une variante naturellement levée qui échange la levure commerciale pour un démarreur aurifère mature. Ferment plus long, saveur plus profonde, miettes plus ouvertes. Le tang est une fonctionnalité, pas un bug.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "breads",
  "tags": [
    "pâte",
    "Pâtes alimentaires",
    "fermenté",
    "pizza",
    "wild-yeast"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "36 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-04-20",
  "updatedAt": "2024-10-15",
  "forkNote": "Remplace la levure commerciale par un démarreur aurifère. Ferment plus long, saveur plus complexe, miettes légèrement plus tangentes.",
  "changes": {
    "ingredientsAdded": 1,
    "ingredientsRemoved": 1,
    "ingredientsModified": 1,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 3
  },
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 6,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "00 farine",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "farine de pain",
        "tipo 0"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau (froid)",
      "ratioValue": 0.65,
      "defaultUnit": "g",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.028,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Démarrage à l'aurore mature",
      "ratioValue": 0.2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "shaggy_mass",
      "instructions": "Mélanger la farine et l'eau. Mélanger jusqu'à ce qu'aucune farine sèche ne reste. N'ajoutez pas encore de entrée — laissez la farine s'hydrater.",
      "visualCue": {
        "primaryTarget": "Une masse rugueuse et chaotique sans taches sèches. Plus humide que la version levure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches sèches visibles en bas.",
            "action": "Ajouter une cuillère à soupe d'eau et mélanger à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Shaggy, collant, pas de farine sèche. C'est plus humide que prévu.",
            "action": "Couvre et autolyse."
          },
          {
            "state": "Overdone",
            "description": "Soupy — trop d'eau.",
            "action": "Ajouter la farine une cuillère à soupe à la fois."
          }
        ]
      },
      "feelCue": "Plus humide et plus collante que la pâte à levure. Il devrait s'accrocher à vos mains comme de l'argile humide."
    },
    {
      "nodeId": "step_2",
      "action": "Autolyser",
      "inputs": [
        "shaggy_mass"
      ],
      "outputState": "rested_dough",
      "instructions": "Couvrir et laisser reposer la pâte pendant 45-60 minutes. La farine absorbe l'eau et le gluten s'organise sans travail.",
      "visualCue": {
        "primaryTarget": "La toux s'est lissée, a perdu ses bords déchiquetés, se sent plus cohésive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours dur et louche.",
            "action": "Attendez encore 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Lisses, extensibles, larmes moins lorsqu'elles sont tirées.",
            "action": "Ajouter entrée et sel."
          },
          {
            "state": "Overdone",
            "description": "Commençant à fermenter seul (boubles).",
            "action": "Ajouter immédiatement le démarreur et le sel."
          }
        ]
      },
      "feelCue": "Silky par rapport au départ louche. Les étriers sans craquer."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "rested_dough",
        "ing_05",
        "ing_03"
      ],
      "outputState": "developed_dough",
      "instructions": "Ajouter le démarreur et le sel. Pressez à travers la pâte pour la distribuer, puis effectuez 4 séries de stretch-and-folds à intervalles de 30 minutes.",
      "visualCue": {
        "primaryTarget": "Après 4 jeux de plis : la pâte tient forme, la surface est lisse, vous pouvez voir des bulles d'air à travers le côté du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Larmes lorsqu'elles sont tendues, aplatissent immédiatement.",
            "action": "Ajouter un autre jeu de plis et attendre 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Jiggles quand vous secouez le bol. S'étire dans une fenêtre mince.",
            "action": "Commencez le ferment en vrac."
          },
          {
            "state": "Overdone",
            "description": "Serré et printanier, ne s'étire pas.",
            "action": "Passez le prochain pli. Détends-toi."
          }
        ]
      },
      "feelCue": "Chaque ensemble de plis doit se sentir plus facile que le dernier. Au quatrième moment, la pâte ressemble à de la mozzarella chaude."
    },
    {
      "nodeId": "step_4",
      "action": "Fermenter",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "bulk_dough",
      "instructions": "Couvre-toi. Ferment en vrac à température ambiante pendant 6-10 heures (ou nuit au réfrigérateur). La pâte doit pousser de 50 à 75 %, pas doubler.",
      "visualCue": {
        "primaryTarget": "Grandit de 50 à 75 %, surface bombée avec des bulles visibles, arôme légèrement acide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine relevé, dense, pas de bulles.",
            "action": "Passez à un endroit plus chaud et attendez."
          },
          {
            "state": "Perfect",
            "description": "Puffy, dôme, jiggly, sent le yogourt et la farine.",
            "action": "Forme en boules."
          },
          {
            "state": "Overdone",
            "description": "Effondré, très aigre, collant et lâche.",
            "action": "Formez doucement. La pizza sera plus tangente mais toujours bonne."
          }
        ]
      },
      "feelCue": "Ça sent le yaourt et le pain frais. Un poke revient très lentement — beaucoup plus lentement que la pâte à levures."
    },
    {
      "nodeId": "step_5",
      "action": "Façonner",
      "inputs": [
        "bulk_dough"
      ],
      "outputState": "balled_doughs",
      "instructions": "Divisez en portions. Pré-former en rondelles, reposer 15 minutes, puis former en boules serrées. Réfrigérer pendant 12-24 heures avant utilisation.",
      "visualCue": {
        "primaryTarget": "Des boules lisses et tendues, légèrement agitées. La surface peut présenter de minuscules cloques de fermentation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Semelles visibles, sans tenir la forme.",
            "action": "Reposez-vous 10 minutes, remodelez."
          },
          {
            "state": "Perfect",
            "description": "Tait, doux, léger. Plaquettes formant sur la surface.",
            "action": "Réfrigérer et utiliser dans les 48 heures."
          },
          {
            "state": "Overdone",
            "description": "La déchirure de surface, exposant l'intérieur collant.",
            "action": "Repose-toi et remodele doucement avec les mains mouillées."
          }
        ]
      },
      "feelCue": "Plus léger et plus aéré que la pâte à levure. La surface ressemble à un ballon d'eau, tendu mais délicat."
    }
  ]
};
