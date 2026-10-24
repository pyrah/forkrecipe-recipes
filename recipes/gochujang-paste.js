export default {
  "repoId": "master_korean_gochujang_001",
  "parentRepoId": null,
  "slug": "gochujang-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Gochujang Paste",
  "description": "Gochugaru chili coréen fermenté avec de la poudre de meju, du riz glutineux et du sel pendant des semaines — une pâte rouge brique profonde avec des couches de complexité sucrée, épicée et salée qu'aucune baignoire commerciale ne peut reproduire, la saveur fondamentale de la cuisine coréenne.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "condiments",
  "tags": [
    "Gochujang",
    "coréen",
    "fermenté",
    "Pâte de chili",
    "condiment",
    "umami"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "30 days 40 min",
  "ratioSystem": "parts",
  "stars": 1160,
  "forks": 87,
  "contributors": 23,
  "license": "CC-BY-SA",
  "createdAt": "2024-12-01",
  "updatedAt": "2025-05-15",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Gochugaru coréen (flacons de poivre rouge grossier)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de riz sucrée",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de riz régulière ( texture légèrement différente)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 150,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Poudre de Meju (poudre de soja fermentée)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de miso (réduire le sel)",
        "Doenjang (réduire le sel)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Yeotgireum (sirop de malt d'orge) ou miel",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de riz",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel (non iodé)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "rice_porridge",
      "instructions": "fouetter la farine de riz glutineuse dans l'eau froide jusqu'à ce qu'il ne reste plus de morceaux, puis la transférer dans une petite casserole. Cuire à feu moyen, en remuant constamment avec une cuillère en bois ou du fouet, pendant 5 à 7 minutes, jusqu'à ce que le mélange s'épaississe à un porridge épais et brillant — il devrait tenir un bref sentier lorsque vous faites glisser une cuillère à travers elle, comme une crème de blé très épaisse. Ce porridge est le substrat de fermentation et fournit les sucres que les micro-organismes vont lentement convertir. Retirer du feu et refroidir à la température ambiante avant de combiner avec d'autres ingrédients.",
      "visualCue": {
        "primaryTarget": "Un porridge épais, brillant, translucide — collant et s'éloignant des côtés de la poêle lorsqu'il est agité. Blanc pâle à crème très légère de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore versable et mince, comme une pâte à crêpes. Pas encore de brillance.",
            "action": "Continuer la cuisson à feu moyen, en remuant constamment. Les amidons doivent être entièrement gélatinisés."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, et s'éloignant légèrement de la poêle. Une cuillère traînée à travers tient un chemin clair pendant 3 secondes avant qu'elle ne se remplisse lentement.",
            "action": "Retirer du feu et refroidir complètement."
          },
          {
            "state": "Overdone",
            "description": "La porridge a commencé à coller et à brûler à la base. Des taches brunes apparaissent.",
            "action": "Transférer immédiatement dans un bol propre. Goûte: si elle est brûlée, la portion brûlée passera à travers. Recommencer s'il est fortement brûlé."
          }
        ]
      },
      "feelCue": "Le porridge refroidi devrait se sentir comme une pâte très épaisse et collante entre les doigts — pas liquide du tout, mais pas caoutchouteux non plus. Il devrait s'étirer légèrement avant de casser."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "rice_porridge",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "gochujang_mixture",
      "instructions": "Dans un grand bol non réactif, mélanger le porridge de riz refroidi, le gochugaru, la poudre de meju, l'yeotgireum (sirop de malt d'orge ou miel) et le sel. Mélanger soigneusement avec une cuillère en bois ou, porter des gants, à la main. Dans un premier temps, le mélange aura l'air de ne pas pouvoir se combiner — le gochugaru est sec et le porridge est humide — mais après 3 à 5 minutes de mélange, il se regroupera dans une pâte épaisse et uniforme rouge profond. Il devrait être la consistance du beurre d'arachide — rigide mais extensible.",
      "visualCue": {
        "primaryTarget": "Pâte uniforme, rouge brique profonde, sans touffes de gochugaru ou de porridge de riz. Gloire et cohésion.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le gochugaru sec est encore visible sous forme de poudre rouge à la surface, non encore incorporé à la base du porridge.",
            "action": "Mélanger plus vigoureusement. Travaillez en pressage circulaire pour incorporer complètement le sec dans le mouillé."
          },
          {
            "state": "Perfect",
            "description": "De couleur rouge brique, brillante et épaisse. Une cuillère en bois traînée à travers laisse un canal propre qui tient sa forme. L'aroma est du chili terreux et du malt sucré.",
            "action": "Transfert dans un récipient de fermentation."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé et la pâte est devenue aérée et légèrement plus légère en couleur.",
            "action": "Continuez. L'aération est cosmétique et se déposera pendant la fermentation."
          }
        ]
      },
      "feelCue": "Porter des gants, presser la pâte contre le bol — il devrait se sentir comme de l'argile épaisse et lisse à modeler, raide mais donnant, avec la chaleur faible du gochugaru immédiatement perceptible à travers le matériau de gant."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "gochujang_mixture"
      ],
      "outputState": "finished_gochujang_paste",
      "instructions": "Transférer dans un pot traditionnel en argile onggi ou, pratiquement, dans un pot en verre à grande bouche. Lisser la surface à plat, puis presser un morceau de papier parchemin ou d'enveloppe plastique directement sur la surface pour empêcher une croûte de se former. Couvrez le pot de façon lâche avec du tissu. Entreposer à l'extérieur dans un endroit ensoleillé (traditionnel) ou dans une pièce chaude (18-25°C). Pendant 4 semaines, la pâte fermentera : les enzymes du meju décomposeront les protéines et les amidons en glutamates et en sucres, le chili se moellera légèrement et la pâte développera la profondeur caractéristique du gochujang. Mélanger tous les jours pour la première semaine. Plus il fermente, plus la saveur est complexe — certains font cuire du ferment pendant 6 mois.",
      "visualCue": {
        "primaryTarget": "Après 4 semaines : une pâte rouge brique foncée avec un arôme nettement plus complexe qu'en emballage. La surface peut présenter une croûte mince et sombre, ce qui est normal.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 semaines, la pâte goûte principalement de gochugaru cru avec seulement une faible profondeur savoureuse. Le meju n'a pas fonctionné.",
            "action": "Continuez à fermenter. Quatre semaines est le minimum pour toute complexité significative à développer."
          },
          {
            "state": "Perfect",
            "description": "Après 4 semaines : la pâte a une saveur profonde et unifiée – sucrée, salée, épicée et salée en une seule. La couleur est un rouge acajou profond. Le bord brut du gochugaru est arrondi et approfondi.",
            "action": "Le gochujang est prêt à être utilisé. Réfrigérer pour arrêter la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Après 6 mois et plus dans des conditions chaudes : très sombre, concentré, avec une saveur presque fermentée-soyée. Très salé, moins sucré.",
            "action": "Encore excellent — c'est un gochujang plus mature. Utiliser en petites quantités dans les marinades et les ragoûts."
          }
        ]
      },
      "feelCue": "Un gochujang complètement fermenté devrait avoir un arôme profond et complexe lorsque vous ouvrez le pot — terreux, doux, et légèrement funky du meju, avec la chaleur de chili en arrière-plan plutôt que l'avant-plan."
    }
  ]
};
