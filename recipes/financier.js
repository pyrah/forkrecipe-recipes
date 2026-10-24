export default {
  "repoId": "master_french_financier_001",
  "parentRepoId": null,
  "slug": "financier",
  "author": "ForkRecipe Kitchen",
  "title": "Bénéficiaire",
  "description": "Un petit gâteau rectangulaire avec une croûte caramélisée crépitante qui laisse place à un intérieur humide et parfumé d'amande parfumé de beurre brun — la coquille se comporte comme un biscuit, le centre comme un frangipane chaud. Créé par des pâtissiers parisiens pour les banquiers qui ne pouvaient pas se permettre de tacher leurs menottes.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "desserts",
  "tags": [
    "dessert",
    "français",
    "Amandes",
    "Beurre brun",
    "petits gâteaux",
    "pâtisserie",
    "Pas de gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 1350,
  "forks": 78,
  "contributors": 24,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-02-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 115,
      "defaultUnit": "g",
      "substitutions": [
        "beurre brun peut être préparé à l'avance"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine d'amande (blanchie)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de noisette"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre en poudre (givrage)",
      "ratioValue": 130,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz (sans gluten)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Blancs d'oeufs (4 grands, non fouettés)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 3,
      "defaultUnit": "ml",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "beurre_noisette",
      "instructions": "Couper le beurre en petits morceaux et fondre dans une casserole de couleur claire à feu moyen. Le beurre moussera et sapera lorsque l'eau s'évaporera. Continuer la cuisson, en tourbillonnant fréquemment, jusqu'à ce que la mousse s'abaisse et que le lait se solidifie sur le fond de la poêle, faire tourner un riche brun noisette et que l'arôme passe de la crème au caramel. Versez immédiatement un tamis fin dans un bol pour arrêter la cuisson. Refroidir à la température ambiante.",
      "visualCue": {
        "primaryTarget": "Couleur des solides de beurre dans la poêle",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre jaune doré, mousse encore présente. Ça sent la crème chaude, pas les noix.",
            "action": "Continuez à cuisiner. La réaction de Maillard n'a pas encore commencé. La patience est nécessaire."
          },
          {
            "state": "Perfect",
            "description": "La mousse s'abaisse pour révéler un liquide ambré profond avec des taches brunes grillées. L'arôme intense de noisette remplit la cuisine.",
            "action": "Plongez immédiatement dans un bol. Même hors chauffage, la poêle chaude continue de cuire."
          },
          {
            "state": "Overdone",
            "description": "Les mouches sont devenues noires, et l'odeur est passée de la noisette à l'acride et au feu.",
            "action": "Jetez et recommencez. Le beurre brûlé donnera aux financiers un ton amer et désagréable."
          }
        ]
      },
      "feelCue": "Le beurre brun tendu doit se sentir légèrement plus chaud que la température du corps et mettre une cuillère dans un film ambre et soyeux qui sent agressivement les noix grillées."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "beurre_noisette"
      ],
      "outputState": "financier_batter",
      "instructions": "Battre la farine d'amande, le sucre en poudre, la farine tout usage et le sel dans un grand bol. Ajouter les blancs d'oeufs non fouettés et la vanille et remuer jusqu'à ce qu'une pâte lisse et homogène se forme. Verser le beurre brun refroidi et remuer jusqu'à ce qu'il soit entièrement incorporé et brillant. Ne fouettez pas l'air dans la pâte — remuez doucement. Reposez la pâte 30 minutes au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Cohérence de la pâte au financier",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le battement est grumelé avec des touffes de farine d'amande visibles. Le beurre brun se trouve dans les piscines visibles.",
            "action": "Continuer à remuer jusqu'à ce qu'il soit parfaitement lisse. La graisse doit être complètement émulsifiée."
          },
          {
            "state": "Perfect",
            "description": "Le battement est lisse, brillant, et la couleur du caramel pâle. Il coule librement d'une cuillère dans un ruban épais et uniforme.",
            "action": "Réfrigérer 30 minutes avant la cuisson — le reste relaxe le gluten et concentre la saveur."
          },
          {
            "state": "Overdone",
            "description": "La batteuse a été surstirée et semble aérée avec des bulles visibles partout.",
            "action": "Les financiers feront encore cuire correctement, bien que la croûte ne soit pas aussi compacte et crépitante."
          }
        ]
      },
      "feelCue": "La pâte reposée devrait être fraîche et visqueuse; en grimpant une cuillère à travers elle, on devrait se sentir comme passer par le miel épais, laissant un sentier propre."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "financier_batter"
      ],
      "outputState": "finished_financiers",
      "instructions": "Préchauffer le four à 200 C (390 F). Beurrer gentiment les moules financiers et congeler pendant 5 minutes — un moule à beurre correctement congelé crée la coquille crépitante signature. Remplir les moules à moins de 3 mm du dessus. Cuire 12 à 15 minutes jusqu'à ce que les bords soient brun-or profond et s'éloignent du moule, le centre est fixé mais a encore un très léger dôme-jiggle, et une brochette sort avec des miettes humides (pas humides).",
      "visualCue": {
        "primaryTarget": "Bords financiers et surface en moule",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont pâles et ne sont pas tirés du moule. Le centre gronde de façon lâche comme un flan très doux.",
            "action": "Retour pour 2-3 minutes de plus. La pompe de bord est le signal clé — ne le pressez pas."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont d'or foncé, caramélisé, tiré proprement loin des murs de moisissure. La surface est bombée et une riche couleur ambre. Une brochette montre des miettes humides, pas de la pâte humide.",
            "action": "Laisser refroidir dans le moule pendant 5 minutes, puis déformer sur une grille."
          },
          {
            "state": "Overdone",
            "description": "Les financiers ont craqué à travers le haut et les bords sont brun très foncé. L'intérieur sera sec.",
            "action": "Démoudre immédiatement pour arrêter la chaleur de transport. Badigeonner avec un peu de miel chaud pour restaurer l'humidité de surface."
          }
        ]
      },
      "feelCue": "Un financier bien cuit devrait résister lorsqu'il est pressé sur le dessus — pas rebondir comme un gâteau, mais tenir sa forme fermement comme un cookie ferme. Le fond, lorsqu'il n'est pas moulé, doit être acajou et craquer audiblement lorsqu'il est tapé avec un ongle."
    }
  ]
};
