export default {
  "repoId": "master_spanish_sofrito_catala_001",
  "parentRepoId": null,
  "slug": "sofrito-catala",
  "author": "ForkRecipe Kitchen",
  "title": "Sofrito Català",
  "description": "La tomate frite et la base d'oignons de la cuisine catalane – cuite jusqu'à ce qu'elle s'assombrisse et se concentre dans une réduction sucrée et confitureuse qui est le fondement d'innombrables plats catalans.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "sauces",
  "tags": [
    "sauce à la base",
    "Espagnol",
    "tomates",
    "catalan",
    "base de cuisson"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Tomates très mûres (grâpées sur une boîte de râpe, peaux jetées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières en conserve, broyées à la main"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune (très finement coupé en dés)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (fruitée, non amère)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Fils de thym frais (facultatif, 2–3)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "feuille de laurier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_04",
        "ing_05"
      ],
      "outputState": "caramelized_onion",
      "instructions": "Chauffer l'huile d'olive dans une poêle large et lourde (de préférence en fonte ou émaillée) à feu moyen-doux. Ajouter l'oignon finement coupé et le sel. Cuire lentement, en remuant toutes les 3 à 4 minutes, pendant 20 à 25 minutes. Ne vous précipitez pas avec une chaleur plus élevée — l'oignon doit caraméliser doucement en une masse douce et dorée. Il passera par translucide, puis blond, puis l'or profond.",
      "visualCue": {
        "primaryTarget": "L'oignon d'or profond qui s'est effondré à environ un quart de son volume d'origine, jammy et profondément sucré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est toujours translucide ou blond — les sucres ne se sont pas développés. Sens brut et vif.",
            "action": "Continuer à feu moyen-doux; augmenter légèrement le feu si la poêle semble trop fraîche."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-or, complètement effondré, jammy et presque collant. Sentir profondément sucré sans netteté brute.",
            "action": "Ajouter l'ail et le thym, puis passer à la tomate."
          },
          {
            "state": "Overdone",
            "description": "L'oignon a pris des taches brun foncé et sent amer.",
            "action": "Ajoutez une éclaboussure d'eau, remuez et réduisez la chaleur — sauvez ce que vous pouvez caraméliser avant d'ajouter de la tomate."
          }
        ]
      },
      "feelCue": "Mélanger l'oignon et il devrait se sentir presque soyeux sur la cuillère — pas de résistance, juste une masse douce et donnante qui se déplace comme de la confiture."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "caramelized_onion",
        "ing_03",
        "ing_06"
      ],
      "outputState": "aromatic_base",
      "instructions": "Ajouter l'ail haché et le thym à l'oignon caramélisé et cuire 2 minutes à feu moyen, en remuant fréquemment, jusqu'à ce que l'ail soit doux et parfumé mais non doré. L'ail doit fondre dans l'oignon plutôt que de rester en morceaux distincts.",
      "visualCue": {
        "primaryTarget": "L'ail s'est dissous dans l'oignon, pas de morceaux blancs distincts visibles. Le thym est flétri et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'odeur d'ail brut est encore vive et dominante. Les pièces sont encore blanches et distinctes.",
            "action": "Cuire encore une minute à feu moyen."
          },
          {
            "state": "Perfect",
            "description": "L'ail s'est adouci et a fusionné avec l'oignon. Sens doux et riche avec une douce chaleur aromatique.",
            "action": "Ajouter immédiatement la tomate râpée."
          },
          {
            "state": "Overdone",
            "description": "L'ail est bruni et sent légèrement amer.",
            "action": "Ajouter immédiatement la tomate pour arrêter la cuisson de l'ail."
          }
        ]
      },
      "feelCue": "La poêle à ce stade doit sentir profondément salé et doux — les trois aromatiques (huile, oignon, ail) unifiés en un parfum chaud et rond."
    },
    {
      "nodeId": "step_3",
      "action": "Réduire",
      "inputs": [
        "aromatic_base",
        "ing_01"
      ],
      "outputState": "finished_sofrito",
      "instructions": "Ajouter la tomate râpée dans la poêle — elle crachera et crachera énergiquement. Mélanger avec l'oignon et augmenter la chaleur à moyen-élevé. Cuire en remuant toutes les quelques minutes, pendant 20 à 25 minutes. La tomate passera à travers saucisse, puis épaisse, puis profondément concentrée — elle est prête quand elle a diminué de deux tiers, a tourné une brique rouge profonde, et ne colle plus à une spatule traînée à travers la base.",
      "visualCue": {
        "primaryTarget": "Une pâte noire, épaisse, rouge brique qui bouge à peine quand la casserole est inclinée. Pas de liquide aqueuse, pas de brillance de l'excès d'humidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sofrito est toujours orange et lâche — l'eau n'a pas cuit. Goûte lumineux et acide.",
            "action": "Continuer la cuisson à feu moyen, en remuant régulièrement, pendant encore 5 à 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Rouge brique foncé, jammy, presque sec. Ça glisse sur la cuillère. Goûte doux, concentré et salé avec une amertume de fond.",
            "action": "Retirer les tiges de thym, assaisonner, refroidir et utiliser ou conserver."
          },
          {
            "state": "Overdone",
            "description": "Sofrito a brûlé aux bords, sent l'acride, et a un bord sombre autour de la poêle.",
            "action": "Ajouter une éclaboussure d'eau, gratter et jeter les taches brûlées, et retirer de la chaleur."
          }
        ]
      },
      "feelCue": "Faites glisser lentement une cuillère en bois sur la base de la casserole — si elle laisse un sentier propre qui se remplit lentement, le sofrito est prêt; si le sentier se remplit instantanément, faites-le cuire plus longtemps."
    }
  ]
};
