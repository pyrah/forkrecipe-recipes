export default {
  "repoId": "master_italian_nduja_sauce_001",
  "parentRepoId": null,
  "slug": "nduja-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce aux tomates de Nduja",
  "description": "Le salami de Calabre — tout gras de porc, chili calabrien et intensité guérie — a fondu dans une simple sauce tomate jusqu'à ce qu'il disparaisse dans une émulsion rouge brique brillante qui tache tout ce qu'il touche de chaleur et de pigment. Trente minutes du début à la table, et plus complexe que tout ce qui est rapide a le droit d'être.",
  "cuisine": "Italien",
  "culture": "Calabre",
  "category": "sauces",
  "tags": [
    "sauce",
    "Italien",
    "Calabre",
    "épicé",
    "porc",
    "tomates",
    "pâtes",
    "Vite"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 1203,
  "forks": 89,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Nduja (salami à dispersion calabrienne)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Pâte de chili calabrais + 50g de guanciale (approximation)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Tomates entières en conserve San Marzano",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates fraîches mûres, ensemencées et hachées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Burrata ou mozzarella fraîche à servir (facultatif)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_03"
      ],
      "outputState": "nduja_rendered",
      "instructions": "Chauffer l'huile d'olive dans une casserole à fond lourd à feu moyen. Ajouter l'ail et cuire 90 secondes jusqu'à ce qu'il soit doré. Ajouter le nduja en une seule pièce. À l'aide d'une cuillère en bois, pressez et cassez-la à mesure qu'elle chauffe — en 2 à 3 minutes, elle fondra complètement dans l'huile, libérant ainsi de la graisse rouge orange vif et transformant l'huile d'olive en une émulsion pétillante et parfumée de chili.",
      "visualCue": {
        "primaryTarget": "Nduja est complètement dissoute. L'huile est devenue une couleur rouge brique profonde. Il ne reste pas de morceaux — seulement une émulsion lisse et intense de graisse et d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Nduja n'est pas encore complètement fondu. L'huile est toujours dorée.",
            "action": "Continuez à appuyer avec la cuillère à feu moyen — elle fondra, lui donnera une autre minute."
          },
          {
            "state": "Perfect",
            "description": "Complètement liquide, émulsion rouge profonde. Des odeurs de porc, de chili et de graisse chaude. L'ail est juste visible et doré pâle.",
            "action": "Ajouter les tomates immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brunissant, la graisse commence à se séparer et semble grasse.",
            "action": "Ajouter immédiatement les tomates et réduire la chaleur pour sauver la sauce."
          }
        ]
      },
      "feelCue": "La cuisine se remplira soudainement de la chaleur pénétrante du chili calabrien, une chaleur dans la gorge même de respirer près de la poêle."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "nduja_rendered",
        "ing_02"
      ],
      "outputState": "nduja_tomato_sauce",
      "instructions": "Ajouter les tomates en conserve dans la poêle, les écraser avec votre main pendant que vous versez. Incorporer l'émulsion de nduja dans les tomates — la sauce transformera instantanément un orange rouge vif et profond. Assaisonner légèrement avec du sel (souvenez-vous que le nduja est déjà salé). Laisser mijoter à découvert pendant 20 minutes, en remuant occasionnellement et en broyant les morceaux de tomates restants. La sauce doit réduire et épaissir visiblement.",
      "visualCue": {
        "primaryTarget": "Une sauce riche, brillante, rouge brique. Une texture uniforme sans gros morceaux de tomates. Réduction visible des côtés de la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore rouge vif et aqueuse. Les tomates ne se sont pas cassées. L'acidité brute est encore forte sur la langue.",
            "action": "Continuer à mijoter — la saveur a besoin de 20 minutes pour mélanger et sucrer."
          },
          {
            "state": "Perfect",
            "description": "Deep brique rouge, brillant, épaissi. La sauce s'accroche à une cuillère en bois dans un manteau à écoulement lent. Chaleur équilibrée, douceur et umami.",
            "action": "Goûtez au sel. Ajouter le basilic frais du feu."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très épaisse et commence à prendre sur le fond. Plus sombre autour des bords.",
            "action": "Ajouter une touche d'eau pour les pâtes. Réduire la chaleur et remuer plus fréquemment."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée — la chaleur devrait se construire progressivement sur le dos du palais, et non pas piquer et mourir immédiatement. Si elle est plate, le nduja a besoin de plus de temps pour fondre."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "nduja_tomato_sauce",
        "ing_05"
      ],
      "outputState": "finished_nduja_sauce",
      "instructions": "Retirer du feu. Cuire les feuilles de basilic et remuer dans la sauce. Goûtez et ajustez le sel. Mélanger immédiatement avec des rigatonis cuits, des paccheri ou des calamarata (pâtes tubulaires qui piègent la sauce épicée à l'intérieur). Ajouter une cuillère d'eau de pâtes si nécessaire pour émulsifier. Servir avec la burrata déchirée drapée sur le dessus, qui refroidit la chaleur et ajoute un contraste riche.",
      "visualCue": {
        "primaryTarget": "Sauce brillante rouge brique enrobant les pâtes soigneusement. Le basilic frais se flétrit dans la sauce. Si vous servez avec de la burrata, un nuage de blanc contre le rouge profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce n'a pas entièrement enrobé les pâtes — toujours en pool dans le bol.",
            "action": "Ajouter plus longtemps avec un jet d'eau pour émulsionner et enrober."
          },
          {
            "state": "Perfect",
            "description": "Chaque tube enrobé de sauce rouge foncé avec des taches de basilic. Parfumé, épicé et profondément salé.",
            "action": "Assortir et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a saisi et est devenue très épaisse sur les pâtes — presque sèche.",
            "action": "Ajouter plus d'eau de pâtes, 30 ml à la fois, jeter à feu doux pour se détendre."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir lisse et légèrement lissée sur les lèvres — c'est - à - dire la graisse de porc émulsifiée — avec une chaleur propre qui s'attarde pendant deux minutes après la dégustation."
    }
  ]
};
