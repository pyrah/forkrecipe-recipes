export default {
  "repoId": "master_turkish_tarator_001",
  "parentRepoId": null,
  "slug": "tarator",
  "author": "ForkRecipe Kitchen",
  "title": "Tarateur",
  "description": "Une sauce froide pâle et crémeuse de noix moulues et de tahini émulsifiée de vinaigre et d'ail — dense comme mayonnaise, noix et terre, avec un éclat de vinaigre vif qui coupe à travers des poissons frits riches ou des légumes rôtis.",
  "cuisine": "Turquie",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "Noix",
    "Ail",
    "Tahini",
    "végétalien",
    "sauce froide"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 5,
    "bitter": 3,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "moitiés de noix grillées et refroidies",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "amandes blanchies pour une version plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Pain blanc d'un jour, croûtes enlevées, déchirées en morceaux",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "chapelures trempées dans l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Tahini (pâte de sésame bien cirée)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron pour une version plus lumineuse"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_walnuts",
      "instructions": "Étaler les moitiés de noix sur un plateau de cuisson sec et faire griller à 175C (350F) pendant 6-8 minutes, ou dans une poêle sèche à feu moyen pendant 4-5 minutes, en remuant occasionnellement. Les noix sont cuites lorsqu'elles sentent la noix profonde et grillée et ont légèrement foncé. Laisser refroidir complètement avant le broyage : les noix chaudes deviennent huileuses et collent trop rapidement dans le processeur.",
      "visualCue": {
        "primaryTarget": "Les noix sont légèrement foncées — du bronzage pâle au brun doré — et l'odeur de noix chaudes grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix sont encore pâles et sentent crus. Pas d'arôme grillé.",
            "action": "Revenez au feu encore 2 minutes, en regardant attentivement — les noix brûlent rapidement."
          },
          {
            "state": "Perfect",
            "description": "Golden-brun avec un arôme profond, grillé, noix. Un peu parfumé de brunissement. Se sentir chaud et sec.",
            "action": "Étaler sur une surface fraîche et laisser refroidir complètement avant le traitement."
          },
          {
            "state": "Overdone",
            "description": "Les noix sont brun foncé avec une odeur brûlée et amère. Fumée acride.",
            "action": "Jeter et recommencer: l'amertume de noix brûlée est irréversible et dominera la sauce."
          }
        ]
      },
      "feelCue": "Bite un sur deux — l'intérieur devrait être doré-tan et odeur de pâtisserie chaude. Intérieur ivoire pâle signifie sous-doté; intérieur noir signifie brûlé."
    },
    {
      "nodeId": "step_2",
      "action": "Trempage",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "soaked_bread",
      "instructions": "Placez les morceaux de pain déchirés dans un petit bol et versez le vinaigre blanc sur eux. Tourner pour enrober et laisser reposer 3-5 minutes jusqu'à ce que le pain soit complètement saturé et s'effondrer. Le pain au vinaigre agit à la fois comme émulsifiant et comme un moyen d'introduire l'acide en douceur dans la sauce plutôt que dans les poches dures.",
      "visualCue": {
        "primaryTarget": "Le pain est complètement saturé et s'effondre, légèrement teinté par le vinaigre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain a encore un centre blanc sec et est seulement humide à l'extérieur.",
            "action": "Poussez les morceaux dans le vinaigre et attendez encore 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le pain s'effondre complètement lorsqu'il est pressé et le vinaigre est complètement absorbé. Pas d'intérieur sec.",
            "action": "Ajouter directement au processeur sans serrer."
          },
          {
            "state": "Overdone",
            "description": "Le pain s'est entièrement dissous dans une pâte de vinaigre.",
            "action": "Parfait — ajoutez tout, y compris le liquide, au processeur."
          }
        ]
      },
      "feelCue": "Pressez une pièce — elle devrait se dissoudre entre vos doigts en une pâte sèche, sans résistance sèche."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "toasted_walnuts",
        "soaked_bread",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_tarator",
      "instructions": "Mélanger les noix grillées, le pain au vinaigre, le tahini, les gousses d'ail et le sel dans un robot culinaire. Procéder pendant 30 secondes jusqu'à ce que les noix soient finement broyées. Avec la machine en marche, ajouter l'eau froide dans un ruisseau lent, puis l'huile d'olive. Procéder jusqu'à ce que la sauce soit lisse, crémeuse et homogène — environ 90 secondes au total. L'eau froide est essentielle : elle empêche les huiles de noix de se séparer et produit une émulsion stable et mayonnaise. Goûtez et ajustez avec plus de vinaigre pour la netteté, plus d'eau pour une sauce plus lâche.",
      "visualCue": {
        "primaryTarget": "Une sauce beige-crème pâle, lisse et épaisse, qui verse lentement comme de la crème lourde et tient des monticules doux quand cuilleré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est grossière et granuleuse — des morceaux de noix encore visibles. Huile non émulsifiée, mise en commun à la surface.",
            "action": "Procéder pendant 60 secondes. Grattez les côtés et mélangez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Doux, crémeux, beige-ivoreux pâle. Il tient sa forme brièvement lorsqu'il est tombé d'une cuillère. Des odeurs de noix grillées, de sésame et de vinaigre. Épais mais versables.",
            "action": "Réfrigérer jusqu'au service. Garde 3 jours scellés."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue gris beige et légèrement huileuse — les noix trop transformées ont libéré trop d'huile.",
            "action": "fouetter dans une cuillère à soupe d'eau froide pour réémulsionner."
          }
        ]
      },
      "feelCue": "Une petite cuillère sur la langue doit être lisse, légèrement épaisse, amère de noix, tranchante du vinaigre, et laisser une chaleur d'huile de sésame à l'arrière de la gorge."
    }
  ]
};
