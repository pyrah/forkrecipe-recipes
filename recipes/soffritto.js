export default {
  "repoId": "master_italian_soffritto_001",
  "parentRepoId": null,
  "slug": "soffritto",
  "author": "ForkRecipe Kitchen",
  "title": "Soffritto italien",
  "description": "La fondation invisible d'un millier de plats italiens — l'oignon, le céleri et la carotte cuits lentement dans l'huile d'olive jusqu'à ce qu'ils se rendent dans un mirepoïx doré qui sent le confort pur et la douceur profonde et salée.",
  "cuisine": "Italien",
  "culture": "Italien",
  "category": "condiments",
  "tags": [
    "base aromatique",
    "oignon",
    "Céleri",
    "Carotte",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "35 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Oignon jaune en dés (2-3 mm)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles, en dés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Carottes, pelées et en dés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre non salé pour un mirpoix plus riche et plus français"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.03,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail finement hachées (facultatif)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sérum",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "diced_vegetables",
      "instructions": "Couper tous les légumes en dés uniformes et fins : environ 2-3mm cubes pour soffritto, pas plus de 5mm. L'uniformité est la clé — si les pièces varient en taille, les plus petites brûleront avant que les plus grandes se ramollissent. Pour l'oignon: réduire de moitié la racine, faire des coupes horizontales et verticales en maintenant la racine intacte, puis couper en travers pour produire un dés fin. Pour le céleri : détachez les cordes extérieures difficiles avec un peleur si les tiges sont épaisses, puis désez finement. Pour la carotte: carrément sur les côtés arrondis, coupé en planches, puis en bâtons, puis en dés.",
      "visualCue": {
        "primaryTarget": "Trois bols uniformément petits, même dés. L'oignon est blanc translucide et légèrement éblouissant. Céleri vert pâle. Carotte orange vive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux sont grands et irréguliers — certains sont deux fois plus gros que d'autres.",
            "action": "Retravaillez les plus gros morceaux. Un dés uniforme conduit à une cuisine inégale."
          },
          {
            "state": "Perfect",
            "description": "Toutes les pièces sont visuellement de taille similaire. Combinés, ils ressemblent à une mosaïque de blanc, vert et orange.",
            "action": "Aller à la cuisine. Saler légèrement les oignons avant de les ajouter à la casserole."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est surmené dans une bouillie humide et juteuse; il libérera trop d'eau dans la casserole.",
            "action": "Sèchez avec une serviette en papier avant de cuisiner."
          }
        ]
      },
      "feelCue": "Prenez une pincée d'oignon coupé en dés — les morceaux devraient tous être à peu près de la même taille entre vos doigts, comme du gravier fin, pas un crumble grossier."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "diced_vegetables",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "softened_soffritto",
      "instructions": "Ajouter l'huile d'olive dans une poêle large à fond lourd à feu moyen-doux. Lorsque l'huile mijote, ajouter l'oignon en dés et une pincée de sel. Cuire en remuant toutes les 2-3 minutes, pendant 8-10 minutes jusqu'à ce que l'oignon soit translucide et commence à ramollir. Ajouter le céleri et la carotte, mélanger. Continuer la cuisson pendant 15 à 20 minutes, en remuant toutes les 3 à 4 minutes, en maintenant le feu doux. Si la poêle sonne fort et actif, abaissez la chaleur — le soffritto devrait s'étourdir doucement, et non frire agressivement.",
      "visualCue": {
        "primaryTarget": "L'oignon est entièrement translucide et très doux. La carotte est tendre. Celery s'effondre. Toute la masse est en or pâle et unifiée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon a encore des taches blanches opaques et une croûte légèrement crue au goût. La carotte est toujours ferme.",
            "action": "Abaissez la chaleur et continuez la cuisson. Couvrir lâchement pour piéger la vapeur et la vitesse adoucissante."
          },
          {
            "state": "Perfect",
            "description": "Tous les légumes sont entièrement tendres sans résistance brute. L'oignon est vitreux et doré. La carotte cède. Tout le soffritto sent profondément salé et doux, comme une cuisine chaude.",
            "action": "Ajouter l'ail (en cas d'utilisation) pendant les 2 dernières minutes, puis utiliser immédiatement ou refroidir."
          },
          {
            "state": "Overdone",
            "description": "Les légumes ont pris une couleur brune importante et la poêle a caramélisé fond en développement. Verging sur un mirépoix français.",
            "action": "Déglacer avec une éclaboussure d'eau, réduire la chaleur et remuer pour incorporer le fond. Cela fonctionne pour ragu mais pas pour les sauces de pâtes plus légères."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de carotte contre le côté de la poêle avec une cuillère — il devrait céder et frotter sans résistance. La poêle doit siffler doucement, pas rugir."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "softened_soffritto"
      ],
      "outputState": "finished_soffritto",
      "instructions": "Goûtez le soffritto et ajustez le sel. Il devrait goûter moelleux, doux et profondément salé sans aucun légume dominant. Si elle a un goût aigu, elle a besoin de plus de temps de cuisson. Si elle a un goût plat, ajouter une petite pincée de sel et cuire encore 2 minutes. Retirer du feu. Utiliser immédiatement comme base pour les viandes Bolognese, Minestrone, risotto ou braisées. Soffritto gèle magnifiquement dans des plateaux de glaçons — un cube par portion rend la cuisson hebdomadaire sans effort.",
      "visualCue": {
        "primaryTarget": "Une pâte de légumes adoucie cohésive, dorée et pâle qui s'est unifiée en une masse harmonieuse plutôt qu'en trois ingrédients distincts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les trois légumes sont encore distincts et séparés. Aucune couleur ou texture unifiée.",
            "action": "Revenir à feu doux pendant 5 minutes, en remuant et en pliant pour s'intégrer."
          },
          {
            "state": "Perfect",
            "description": "Une masse dorée, brillante et sucrée. Les légumes ont perdu leur identité individuelle et fusionné. Goûts de douceur salée concentrée.",
            "action": "Utiliser immédiatement ou refroidir et conserver."
          },
          {
            "state": "Overdone",
            "description": "Le soffritto a bruni profondément et sent maintenant caramélisé plutôt que doux.",
            "action": "Utiliser comme pour les braises rapu ou copieuses. Pour une base de risotto délicate, faire un lot frais."
          }
        ]
      },
      "feelCue": "Une cuillère maintenue sur votre langue doit fondre sans aucune résistance fibreuse — complètement cédée, comme la dégustation de graisse sucrée et concentrée de légumes."
    }
  ]
};
