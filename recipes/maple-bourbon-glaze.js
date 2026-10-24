export default {
  "repoId": "master_american_maple-bourbon-glaze_001",
  "parentRepoId": null,
  "slug": "maple-bourbon-glaze",
  "author": "ForkRecipe Kitchen",
  "title": "Glace à l'érable Bourbon",
  "description": "Le sirop d'érable ambré foncé et le bourbon droit se réduisent ensemble en une laque d'une profondeur extraordinaire : l'alcool souille la douceur brute et laisse derrière le caramel, la vanille et le chêne qui s'accrochent aux côtes de porc, caramélise les choux de Bruxelles et donne au saumon rôti une finale verreuse et amère. Une cuillère de Dijon et une pincée de sel l'attachent ensemble.",
  "cuisine": "Américain",
  "culture": "Sud américain et nord-est",
  "category": "sauces",
  "tags": [
    "américains",
    "érable",
    "bourbon",
    "glaçure",
    "sauce",
    "porc",
    "légumes",
    "doux"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Sirop d'érable pur (Grade Un goût foncé et robuste)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Grade A ambre (arôme plus léger)",
        "miel (floral mais fonctionne)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Bourbon droit (100-proof préféré pour la rétention de saveur après cuisson)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "whisky de seigle (épices)",
        "cidre de pomme (non alcoolisé, ajouter 1 c. à thé de jus de citron)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de poisson (plus d'umami, moins propre)",
        "sauce Worcestershire"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Moutarde à grains entiers ou à Dijon",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Dijon lisse ( texture finale)",
        "Moutarde anglaise (sharper)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Ail (amende hachée)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre d'ail (grande pincée)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir craqué",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Combiner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "raw_glaze_mixture",
      "instructions": "Mélanger le sirop d'érable, le bourbon, la sauce soja, la moutarde, l'ail, le sel et le poivre dans une petite casserole jusqu'à ce qu'ils soient complètement combinés et lisses. La moutarde aura besoin de quelques secondes supplémentaires de fouettage pour s'intégrer pleinement. Goûtez le mélange cru – il sera intensément sucré avec de l'alcool cru et de la moutarde pointue. Ces bords seront considérablement arrondis pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré lisse et foncé, sans séparation visible ni grumeaux de moutarde. Le bourbon allège légèrement la couleur de l'érable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grumeaux de moutarde sont encore visibles et le mélange est séparé — huile de la moutarde flottant sur le dessus.",
            "action": "fouetter plus vigoureusement jusqu'à ce qu'il soit complètement émulsifié et lisse."
          },
          {
            "state": "Perfect",
            "description": "Ambre foncé uniforme, lisse et fluide. Sens de bourbon cru et d'érable doux avec une note de moutarde pointue.",
            "action": "Mettre à feu moyen."
          },
          {
            "state": "Overdone",
            "description": "Rien ne peut être exagéré dans le mélange — procéder à la chaleur.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Le mélange cru doit se sentir aqueux et mince entre les doigts — beaucoup plus mince que la glaçure finie sera. L'alcool le fait circuler librement avant que la chaleur le concentre."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "raw_glaze_mixture"
      ],
      "outputState": "finished_maple_bourbon_glaze",
      "instructions": "Porter le mélange à ébullition à feu moyen, en remuant fréquemment. Une fois bouillant, réduire à mijoter régulièrement et cuire de 8 à 12 minutes, en remuant toutes les 30 secondes, jusqu'à ce que la glaçure ait diminué d'environ la moitié et enveloppe fortement l'arrière d'une cuillère. Regardez attentivement dans les 2 dernières minutes — les glaçures au sirop d'érable vont de parfait à brûlé très rapidement. L'alcool brûlera dans les 2-3 premières minutes de mijotage. Retirer de la chaleur lorsqu'un doigt tiré à travers le revêtement de la cuillère tient une ligne propre pendant 5 secondes.",
      "visualCue": {
        "primaryTarget": "Glaçure foncée brun-ambre, nettement plus foncée et plus opaque que le mélange cru. Il s'écoule lentement d'une cuillère dans une seule feuille épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux, s'échappe rapidement de la cuillère. L'odeur du bourbon brut reste dominante.",
            "action": "Continuez à réduire. La glaçure a besoin de plus de temps — la couleur devrait s'approfondir sensiblement comme les concentrés de sucre."
          },
          {
            "state": "Perfect",
            "description": "Deep brulé ambre, brillant, et qui coule comme du caramel chaud. Une ligne de doigt à travers le revêtement de la cuillère tient proprement. Parfums d'érable caramélisé, de chêne et de soja sucré. Le bourbon est présent comme chaleur et complexité, et non comme alcool brut.",
            "action": "Retirer du feu et utiliser immédiatement ou refroidir à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "La glace a saisi et formé un bonbon raide dans la poêle. Très sombre, odeur de caramel amer.",
            "action": "Ajouter 2 cuillères à soupe d'eau chaude et remuer doucement à feu doux pour dissoudre. La prochaine fois, retirer de la chaleur plus tôt."
          }
        ]
      },
      "feelCue": "Au moment de la réduction parfaite, la glaçure s'étire entre deux doigts dans un fil mince et collant avant de se casser proprement. La cuisine se remplit de l'odeur de la vanille chaude, du caramel et de la fumée de bois du bourbon qui s'évapore — une odeur qui devrait faire arrêter n'importe qui dans la pièce ce qu'il fait."
    }
  ]
};
