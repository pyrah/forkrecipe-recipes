export default {
  "repoId": "master_french_rouille_001",
  "parentRepoId": null,
  "slug": "rouille",
  "author": "ForkRecipe Kitchen",
  "title": "Rouille",
  "description": "L'aioli au safran et à l'ail rouge rouille vif de Provence, compagnon essentiel de la bouillabaisse, frotté épais sur des croûtons grillés et mis à flot dans le bouillon jusqu'à ce qu'il fonde dans la soupe en rubans dorés.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "condiments",
  "tags": [
    "condiments",
    "français",
    "d ' origine",
    "Aïoli",
    "safran",
    "bouillabaisse",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 2,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "50/50 huile d'olive et huile neutre pour une saveur plus douce"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau chaude (pour safran)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Piment d'Espelette ou cayenne",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé chaud"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Poivre rouge rôti (jarred), égoutté",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "saffron_infusion",
      "instructions": "Crumble les fils de safran entre les doigts dans l'eau chaude. Plongez pendant 10 minutes jusqu'à ce que l'eau tourne un orange vif brûlé et que les fils deviennent translucides. Cette infusion est ce que les couleurs et parfume le rouille — ne sautez pas ou ne précipitez pas.",
      "visualCue": {
        "primaryTarget": "L'eau est devenue ambre-orange profonde, fils de safran maintenant pâle et translucide après avoir cédé leur couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau n'est que faiblement jaune, les fils sont encore rouge-orange. Pas assez de temps.",
            "action": "Attendez les 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "De l'eau bien dorée. Des fils translucides et fanés. Sens floral, miellé et légèrement métallique.",
            "action": "Allez au mortier."
          },
          {
            "state": "Overdone",
            "description": "Le safran est surtendu et légèrement amer et médicinal.",
            "action": "Toujours utilisable — diluer la perfusion avec une cuillère à café plus d'eau."
          }
        ]
      },
      "feelCue": "Frotter un fil entre deux doigts — lorsque la couleur se transfère fortement à votre peau, les fils ont donné leur couleur à l'eau."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "ing_03",
        "ing_08"
      ],
      "outputState": "garlic_paste",
      "instructions": "Dans un grand mortier, livrez des gousses d'ail avec une pincée de sel dans une pâte complètement lisse. Le sel agit comme un abrasif, déchirant les cellules. Plonger dans un mouvement circulaire, presser et traîner le pestle. La pâte doit être complètement lisse — pas de morceaux — car toute cellule d'ail intacte ne sera pas émulsifier correctement.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ail blanche complètement lisse, presque liquide, collante, sans morceaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours en petits morceaux, pas complètement décomposé.",
            "action": "Continuer à frapper et à broyer. Ajouter une autre pincée de sel comme abrasif."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, collant, presque fluide. Forme un mince film sur les murs de mortier. Arôme ailé agressif.",
            "action": "Ajouter le poivre rôti et les jaunes."
          },
          {
            "state": "Overdone",
            "description": "Vous ne pouvez pas trop livres de pâte d'ail — continuez.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Appuyez sur votre bout de doigt dans la pâte — elle devrait être collante et crémeuse, sans grain. Si vous sentez une fibre ou une croûte, continuez à frapper."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "garlic_paste",
        "ing_09",
        "ing_06",
        "ing_01",
        "saffron_infusion",
        "ing_02",
        "ing_07"
      ],
      "outputState": "finished_rouille",
      "instructions": "Ajouter le poivre torréfié et l'espélette à la pâte d'ail et verser dans une pâte lisse. Travaillez dans les jaunes d'œufs et toute la perfusion de safran. Commencer à ajouter de l'huile d'olive, laisser tomber au début, frapper et remuer constamment. Comme une émulsion se forme et le mélange s'épaissit, vous pouvez ajouter de l'huile dans un cours d'eau mince. Terminer avec du jus de citron. La rouille doit être assez épaisse pour tenir sa forme sur une cuillère, nettement plus épaisse que la mayonnaise.",
      "visualCue": {
        "primaryTarget": "Un mayo rouge rouille vif à orange profond — épais, brillant, tenant un monticule. Le safran et le poivre lui donnent une couleur spectaculaire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et grasse — l'émulsion n'a pas encore été complètement formée.",
            "action": "Continuer à ajouter l'huile goutte à goutte en remuant constamment. L'émulsion se formera."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, rouge rouille. Il tient sa forme sur une cuillère. sent l'ail, le safran et le poivre simultanément. Goûte riche, ailky, avec une finale chaude.",
            "action": "Servir aux côtés de la bouillabaisse ou étaler sur les croûtons grillés."
          },
          {
            "state": "Overdone",
            "description": "Rouille s'est cassée — l'huile jaune se déverse sur les côtés.",
            "action": "Commencez par un jaune frais dans un bol propre, puis fouettez lentement dans la rouille cassée comme vous voulez huiler."
          }
        ]
      },
      "feelCue": "Étendre une cuillère à café sur du pain — elle doit s'asseoir à la surface sans courir, assez épaisse pour nécessiter une propagation avec un couteau."
    }
  ]
};
