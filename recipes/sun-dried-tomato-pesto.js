export default {
  "repoId": "master_sicilian_sundried_tomato_pesto_001",
  "parentRepoId": null,
  "slug": "sun-dried-tomato-pesto",
  "author": "ForkRecipe Kitchen",
  "title": "Pesto de tomate séchée au soleil",
  "description": "Un pesto sicilien né de l'abondance estivale et de la patience du soleil — tomates séchées à l'huile moulues d'amandes, d'ail et de basilic dans une pâte rubis-rouge profonde qui s'accroche au rigatoni comme du velours et des goûts d'août conservés dans un pot.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "condiments",
  "tags": [
    "pesto",
    "tomates séchées au soleil",
    "sicilienne",
    "Italien",
    "condiment",
    "pâtes"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 1420,
  "forks": 109,
  "contributors": 28,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-20",
  "updatedAt": "2025-05-10",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Tomates séchées au soleil (emballées à l'huile, égouttées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates séchées à sec (réhydrater à l'eau chaude 20 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Amandes blanchies",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Noix de pin grillées",
        "Noix grillées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates",
        "combinaison"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra-vierge (sicilienne préférée)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Pecorino Romano (gré)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Parmigiano-Reggiano",
        "levure nutritionnelle (vegan)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Peperoncino séché (glaces rouges)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "piment rouge frais"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "almond_garlic_paste",
      "instructions": "Dans un robot culinaire, combiner les amandes blanchies et les gousses d'ail. Pulse 10-12 fois jusqu'à ce que vous ayez une pâte grossière et irrégulière — les amandes doivent être décomposées en petites miettes mais pas complètement lisse. Le surtraitement conduit maintenant à un pesto huileux et sans texture. En Sicile, cela se ferait dans un mortier de marbre, appuyant sur des traits circulaires, et cette méthode produit une texture un peu plus rugueuse, plus caractéristique — utilisez-le si vous avez la patience et le mortier.",
      "visualCue": {
        "primaryTarget": "Crumble d'amandes et d'ail, brut et sec, morceaux irréguliers allant des miettes fines aux petits morceaux de 3 mm. Pas encore de pâte visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amandes sont toujours en gros morceaux et l'ail est juste craqué, non incorporé.",
            "action": "Plus d'impulsions, en courts éclats. Le mélange doit ressembler à une chapelure brute avant d'ajouter d'autres éléments."
          },
          {
            "state": "Perfect",
            "description": "Crumble sec et rugueux avec quelques petits morceaux d'amande encore visibles. L'ail est également distribué. L'odeur est forte et noisette.",
            "action": "Ajouter les tomates séchées au soleil et continuer."
          },
          {
            "state": "Overdone",
            "description": "Les amandes ont été transformées en pâte lisse et le mélange commence à paraître huileux.",
            "action": "Procéder — la texture finale sera plus lisse que l'idéal, mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Frottez une pincée de crumble entre vos doigts — vous devriez sentir à la fois le grain sablonneux de farine d'amande et des fragments plus durs de morceaux pas tout à fait cassés."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "almond_garlic_paste",
        "ing_01",
        "ing_04",
        "ing_08"
      ],
      "outputState": "tomato_herb_mixture",
      "instructions": "Ajouter les tomates séchées au soleil, le basilic et le peperoncino au robot culinaire. Pulse 8-10 fois à combiner — les tomates se décomposent lentement, libérant leurs huiles concentrées dans le crumble d'amande. Le mélange commencera à paraître presque rouge-noir à ce stade, le basilic fournissant des taches vertes. Il devrait être très grossier et sec — l'huile d'olive vient ensuite et transformera entièrement la texture.",
      "visualCue": {
        "primaryTarget": "Un mélange rugueux et rouge foncé avec des morceaux visibles de tomates et des flocons de basilic répartis dans toute la base d'amande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates séchées au soleil sont toujours en gros morceaux, assises sur le mélange d'amande plutôt que intégrées.",
            "action": "Pulse plus — les tomates doivent se décomposer en fragments plus petits pour se fondre avec le reste."
          },
          {
            "state": "Perfect",
            "description": "Un gros mélange rouge-vert foncé avec les tomates se décomposent uniformément en petits morceaux. Intensément aromatique.",
            "action": "Ajouter l'huile d'olive et le fromage."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est complètement lisse et pâteux avant d'ajouter l'huile.",
            "action": "Le pesto sera plus dense qu'idéal. Continuez — il aura encore un excellent goût."
          }
        ]
      },
      "feelCue": "Le mélange sentira intensément la tomate séchée au soleil et l'ail cru — un parfum concentré, légèrement sucré et salé qui est plus complexe que la tomate fraîche. Si vous ne sentez rien, vérifiez la qualité de vos tomates séchées au soleil."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "tomato_herb_mixture",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_pesto",
      "instructions": "Avec le processeur alimentaire en marche, arrosez lentement l'huile d'olive. Ajouter le Pecorino Romano râpé. Pouls à combiner. Le pesto se transformera de sec et émietté en une pâte cohésive, brillante et extensible. Assaisonner de sel et de poivre noir. Bouche : il doit être intensément salé, légèrement salé, avec une profonde richesse en tomates et une note d'herbe brillante. Si trop épais, ajouter plus d'huile d'olive. Entreposer l'huile pour éviter l'oxydation — une fine couche d'huile déversée sur le dessus avant le froid prolonge la durée de conservation de plusieurs jours.",
      "visualCue": {
        "primaryTarget": "Une pâte rubis-rouge brillant et profond avec une texture visible — pas une purée lisse, mais assez cohésive pour tenir sa forme lorsqu'elle est étendue sur du pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore sec et friable, l'huile n'est pas complètement intégrée et les piscines sont séparées.",
            "action": "Ajouter plus d'huile et continuer le traitement jusqu'à ce que le mélange cohère dans une pâte."
          },
          {
            "state": "Perfect",
            "description": "Pâte glorieuse, de couleur profonde, tartinable. Il tient une forme lorsqu'il est bombé sur une cuillère. Goûte intensément de tomate, d'ail et de fromage.",
            "action": "Transférer dans un pot, lisser la surface et verser une fine couche d'huile d'olive sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Surtransformé à une purée huileuse complètement lisse. A perdu toute texture.",
            "action": "Il est toujours excellent pesto — texture est une préférence, pas une exigence de saveur."
          }
        ]
      },
      "feelCue": "Une petite quantité étalée sur le bout des doigts devrait se sentir légèrement huileuse et granuleuse, la texture amande et tomate intacte sous la lécherette d'une bonne huile d'olive."
    }
  ]
};
