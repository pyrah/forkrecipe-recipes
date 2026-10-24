export default {
  "repoId": "master_colombian_arepas_001",
  "parentRepoId": null,
  "slug": "arepas",
  "author": "ForkRecipe Kitchen",
  "title": "Arépas",
  "description": "Le battement d'or de la table colombienne — gâteaux masa formés à la main et triés jusqu'à ce qu'une croûte dorée laquée laisse place à un intérieur dense et satisfaisant qui absorbe le beurre, berce le fromage, et tient tout ce que vous pressez dedans.",
  "cuisine": "Colombien",
  "culture": "Colombienne andine",
  "category": "breads",
  "tags": [
    "arepa",
    "contenant de la cocaïne",
    "maïs",
    "grille",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Masarepa (repas de maïs blanc précuits, p.ex. P.A.N.)",
      "ratioValue": 2,
      "defaultUnit": "cups",
      "substitutions": [
        "masarepa jaune"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 2.25,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Saindoux",
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Queso blanco ou mozzarella (facultatif)",
      "ratioValue": 0.5,
      "defaultUnit": "cups",
      "substitutions": [
        "cotija",
        "feta (pat à sec)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "masa_dough",
      "instructions": "Dans un grand bol, mélanger le masarepa, l'eau chaude, le sel et le beurre ramolli. Mélanger avec une fourchette jusqu'à ce que le beurre soit distribué et que l'eau ait été absorbée, puis pétrir la masa avec vos mains pendant 2-3 minutes. Le masarepa est une farine précuite, qui s'hydrate très rapidement, contrairement à la farine de maïs crue. La pâte qui en résulte doit être lisse, non collante et souple — la consistance du jeu-Doh humide. Si ajouter du fromage, pétrir dans la pâte maintenant. Laissez reposer la masa pendant 5 minutes, recouverte d'un chiffon humide. Au cours de ce bref repos, l'amidon continue d'absorber l'eau et la pâte s'attache légèrement à la consistance de formation idéale.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, uniforme, légèrement lustrée, sans miettes sèches ni taches humides. Prend sa forme quand une balle est formée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Doucement et granuleux. Il tombe à l'écart lorsqu'il est formé en balle. Morceaux secs de masarepa non hydraté visibles.",
            "action": "Ajouter de l'eau chaude une cuillère à soupe à la fois, pétrir après chaque ajout. Le masarepa l'absorbera rapidement."
          },
          {
            "state": "Perfect",
            "description": "Doux, cohésif et légèrement doux. Forme une balle propre sans coller à vos mains. Lorsque vous appuyez sur un pouce dedans, l'impression tient propre sans craquer.",
            "action": "Reposez 5 minutes puis divisez et formez."
          },
          {
            "state": "Overdone",
            "description": "Humide et collante. La toux s'accroche aux mains et ne tient pas forme lorsqu'elle est formée dans une balle.",
            "action": "Agenouillez en masarepa une cuillère à soupe à la fois jusqu'à ce que la pâte conserve sa forme proprement."
          }
        ]
      },
      "feelCue": "La masa bien hydratée se sent comme de l'argile douce et chaude — donnant sous pression mais assez ferme pour tenir n'importe quelle forme que vous lui donnez sans relâche. Il ne doit pas laisser de résidus sur les mains sèches."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "masa_dough"
      ],
      "outputState": "formed_arepas",
      "instructions": "Divisez la masa en 6-8 parties égales (environ la taille d'une balle de golf). Roulez chacun entre vos paumes dans une sphère lisse, puis pressez entre des paumes plates pour former un disque uniforme d'environ 1 cm d'épaisseur et de 8-10 cm de travers. Le disque doit avoir des bords lisses et non craqués — lancez un bout humide le long des fissures et pressez - les fermés. Les arepas plus épais (1,5 cm) font cuire plus lentement et ont un intérieur plus pâteux; les arepas plus minces (0,7 cm) développent plus de croûte que l'intérieur. Les arepas colombiens sont généralement d'environ 1 cm.",
      "visualCue": {
        "primaryTarget": "Disques lisses, uniformément ronds, d'épaisseur uniforme, sans fissures sur les bords ou les surfaces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bords craqués et une surface inégale. Le disque est plus épais au centre que les bords.",
            "action": "Hydratez légèrement vos paumes et reformez-les, en appliquant même la pression du centre vers l'extérieur lorsque vous appuyez."
          },
          {
            "state": "Perfect",
            "description": "Doux, même des disques sans fissures. Toute la même épaisseur. Des bords ronds propres.",
            "action": "Placer directement sur une grille préchauffée."
          },
          {
            "state": "Overdone",
            "description": "Trop mince — 5 mm ou moins. Cuire très rapidement et peut ne pas avoir assez de texture intérieure.",
            "action": "Re-ballez les minces et appuyez encore à 1 cm. Utilisez une petite échelle de cuisine si la cohérence est importante."
          }
        ]
      },
      "feelCue": "Le arepa formé se sent dense et solide dans le palmier, non creux ni fragiles. Une pression douce devrait avoir l'impression de presser une boule de stress ferme, sans donner vers l'effondrement."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "formed_arepas"
      ],
      "outputState": "griddled_arepas",
      "instructions": "Chauffer à feu moyen une poêle sèche en fonte, une poêle comale ou une poêle lourde (pas d'huile – les arepas sont cuits à sec à la surface, bien qu'un léger pinceau de beurre ajoute de la saveur). Lorsque la grille est assez chaude pour qu'une goutte d'eau s'évapore et s'évapore en 2-3 secondes, ajoutez les arepas en une seule couche sans fouler. Cuire 5-7 minutes de chaque côté sans déranger, jusqu'à ce qu'une croûte dorée bien définie se soit formée sur chaque visage. Résistez à les presser ou à les déplacer — la croûte a besoin d'un contact ininterrompu avec la surface chaude pour se développer correctement. Un arepa est fini quand il semble creux lorsqu'il est tapé avec un joint et la croûte est ferme plutôt que douce.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée uniforme sur les deux faces plates, sans taches pâles molles. Les bords peuvent montrer une légère coloration plus légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface pâle et douce qui laisse une bosselure lorsqu'elle est pressée. L'intérieur est toujours à la mode.",
            "action": "Continuer la cuisson à feu moyen. N'augmentez pas la chaleur — une grille trop chaude brûle l'extérieur avant que l'intérieur ne cuise."
          },
          {
            "state": "Perfect",
            "description": "Riche croûte dorée à ambre. Le tapotage avec un noeud produit un son creux. L'arepa a légèrement séché aux bords et se soulèvera proprement de la grille.",
            "action": "Servir immédiatement avec du beurre, ou fractionner et remplir."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à croûte noire. Les odeurs extérieures du maïs brûlé. L'intérieur peut être gommé si la chaleur était très élevée.",
            "action": "Grattez la croûte la plus sombre avec un tranchant de couteau, révélant une couche encore dorée en dessous. Moins de chaleur pour les arepas restants."
          }
        ]
      },
      "feelCue": "Tapotez l'arepa cuit avec un joint courbé — il devrait sembler creux et solide, comme frapper sur une porte en bois épaisse. Un arepa bien cuit tient sa forme complètement lorsqu'il est ramassé; il ne saigne ni ne se courbe."
    }
  ]
};
