export default {
  "repoId": "master_french_frenchbouillabaisse_001",
  "parentRepoId": null,
  "slug": "french-bouillabaisse",
  "author": "ForkRecipe Kitchen",
  "title": "Bouillabaisse française",
  "description": "Le grand ragoût de poisson de Marseille — un ébullition furieuse d'huile d'olive et de bouillon de safran qui émulsifie en une soupe brillante et opaque dans laquelle plusieurs espèces de poissons méditerranéens terminent la cuisson, servi avec rouille et croûtons grillés.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "français",
    "ragoût",
    "safran",
    "marseille",
    "Rouille"
  ],
  "difficulty": 4,
  "activeTime": "90 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poissons fermes mélangés (rascasse, lotte, anguille), coupés en morceaux",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "morue, flétan et bar"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Poissons tendres (mollet rouge, merlan), entiers ou coupés en deux",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "snapper, truite"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ampoule en fenouil, tranchée",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons jaunes, tranchés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail écrasées",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Tomates de ripe, hachées approximativement",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "une tomate prune de 400g d'étain"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Fils de safran, trempés dans 100 ml d'eau chaude",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Peau d'orange séchée (zeste d'orange)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "1 bande de peau d'orange fraîche"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Thym frais et bouquet de feuilles de laurier garni",
      "ratioValue": 1,
      "defaultUnit": "bouquet",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Pastis ou Pernod",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "liqueur sèche d'anis"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Liquid",
      "name": "Stocks ou eaux de poissons",
      "ratioValue": 1500,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Rouille (mayonnaise safran-ail)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Garnish",
      "name": "tranches de baguette grillées (croûtons)",
      "ratioValue": 8,
      "defaultUnit": "slices",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09",
        "ing_10"
      ],
      "outputState": "soffritto_base",
      "instructions": "Dans un grand pot large (au moins 6L), faire chauffer l'huile d'olive à feu moyen. Ajouter le fenouil, l'oignon et l'ail. Transpirer pendant 10 minutes jusqu'à assouplir et parfumer. Ajouter les tomates, l'écorce d'orange et le bouquet garni. Cuire à feu moyen-vif pendant 15 minutes jusqu'à ce que les tomates se décomposent et que le mélange soit épais et parfumé. L'huile doit être visiblement séparée et chatoyante aux bords.",
      "visualCue": {
        "primaryTarget": "Une base végétale épaisse et rouillée avec de l'huile d'olive visiblement séparée aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont encore molles et la base est humide; l'huile n'est pas séparée.",
            "action": "Faire cuire 5 minutes de plus sur moyenne-élevée, presser les tomates avec une cuillère."
          },
          {
            "state": "Perfect",
            "description": "La base est épaisse, sombre et parfumée. Les piscines d'huile aux bords. La peau et le fenouil sont entièrement doux.",
            "action": "Ajouter le stock de poissons, l'eau de safran et les pastis."
          },
          {
            "state": "Overdone",
            "description": "La base a brûlé sur le fond; des taches sombres et une odeur amère.",
            "action": "Déglacer avec 200 ml de stock de poisson immédiatement; la couche supérieure est récupérable."
          }
        ]
      },
      "feelCue": "Le soffritto doit sentir le Midi — l'anis, la tomate et la pelure d'orange se mêlent à l'huile d'olive chaude — profondément méditerranéenne et complexe."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "soffritto_base",
        "ing_12",
        "ing_08",
        "ing_11",
        "ing_13"
      ],
      "outputState": "bouillabaisse_broth",
      "instructions": "Verser dans le stock de poisson, l'eau de safran et les pastis. Assaisonner généreusement de sel et de poivre. Porter à un roulement complet vigoureux à feu vif — l'ébullition doit être violente et non douce. L'ébullition agressive est ce qui émulsionne l'huile d'olive dans le bouillon, en le transformant d'un stock clair en bouillon orange d'or opaque signature de bouillabaisse. Faire bouillir dur pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Broth a transformé l'orange d'or opaque, pas clair, l'huile d'olive y a émulsifié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est encore clair ou semi-clair; le pétrole et le stock sont visiblement séparés. Un mijot doux ne peut pas atteindre l'émulsion.",
            "action": "Augmenter jusqu'à ébullition furieuse — la chaleur élevée n'est pas négociable ici."
          },
          {
            "state": "Perfect",
            "description": "Le papillon est opaque, doré et légèrement épais. Des odeurs de safran, d'anis et d'océan. Le pétrole est entièrement incorporé.",
            "action": "Commencez à ajouter du poisson par ordre de fermeté."
          },
          {
            "state": "Overdone",
            "description": "Le broth a diminué de façon trop agressive; il devient très salé et épais.",
            "action": "Ajouter 300 ml d'eau chaude et revenir à ébullition brièvement avant d'ajouter du poisson."
          }
        ]
      },
      "feelCue": "Le bouillon bouillant doit se sentir vivant dans le pot — se cassant et grincant, enrobant les côtés du pot dans un éclat d'orange au fur et à mesure que l'émulsion se construit."
    },
    {
      "nodeId": "step_3",
      "action": "Pochette",
      "inputs": [
        "bouillabaisse_broth",
        "ing_01",
        "ing_02"
      ],
      "outputState": "finished_bouillabaisse",
      "instructions": "Réduire l'ébullition en mijotant vigoureusement. Ajouter le poisson ferme d'abord (poissons communs, conger, rascasse) et cuire 5 minutes. Ajouter ensuite le poisson tendre (mulette, merlan) et cuire 3 à 4 minutes de plus. Les mollusques, si vous les utilisez, rentrez à la dernière minute. Le poisson doit être simplement cuit à travers — opaque et juste commencer à flocer, pas tomber en morceaux. Enlevez le bouquet garni. Ne remuez pas — utilisez une cuillère pour assainir le poisson avec le bouillon.",
      "visualCue": {
        "primaryTarget": "Le poisson est opaque dans l'ensemble, en tenant sa forme mais en se rendant facilement à une cuillère sans section translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre des morceaux de poisson est encore translucide et résiste à la cuillère. Bouillon mince visible dans les crevasses.",
            "action": "Continuer à mijoter 2 à 3 minutes de plus, en basant avec le bouillon."
          },
          {
            "state": "Perfect",
            "description": "Le poisson est opaque et commence à flocer au point le plus épais. Il résiste à peine à une cuillère. Le bouillon est richement aromatisé et doré.",
            "action": "Déposer le bouillon d'abord dans des bols chauds, puis organiser le poisson sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est effondré et s'est cassé en flocons dans le bouillon. Le papillon est devenu nuageux à cause de la libération de protéines.",
            "action": "Servir comme-est — la saveur est encore excellente; il suffit de la présenter comme une bouillabaisse plus rustique, de style paysan."
          }
        ]
      },
      "feelCue": "Appuyez sur le morceau le plus épais de moine avec une cuillère — il devrait produire complètement sans résistance, comme presser dans le pain doux, et ressorter toujours si légèrement quand relâché."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "finished_bouillabaisse",
        "ing_14",
        "ing_15"
      ],
      "outputState": "plated_bouillabaisse",
      "instructions": "Déposer le bouillon doré dans de grands bols chauds. Disposer les morceaux de poisson sur le dessus. Float les croûtons grillés sur le bouillon et étaler chacun avec une poupée généreuse de rouille. La rouille se dissout légèrement dans le bouillon chaud comme elle est mangée, l'enrichissant davantage. Servir immédiatement avec rouille supplémentaire et croûtons sur le côté.",
      "visualCue": {
        "primaryTarget": "Bols d'or profond de bouillon opaque avec diverses espèces de poissons visibles, croûtons flottant avec rouille, toute la table sentant le safran et la mer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est servi froid ou chaud plutôt que chaud; les croûtons ne sont pas grillés.",
            "action": "S'assurer que le bouillon est à une mijotation en lambeaux."
          },
          {
            "state": "Perfect",
            "description": "Les bols s'échauffent agressivement. Broth est orange-or brillant. Le poisson est distinct et identifiable. Rouille brille jaune safran sur les croûtons.",
            "action": "Servir immédiatement — bouillabaisse n'attend pas."
          },
          {
            "state": "Overdone",
            "description": "Le poisson est resté trop longtemps dans le bouillon chaud et s'effondre avant de servir.",
            "action": "Servir rapidement dans des bols individuels; la texture est compromise mais la saveur est à son maximum."
          }
        ]
      },
      "feelCue": "La première cuillère de bouillon de bouillabaisse devrait se sentir presque paradoxale – huileuse et riche mais aussi tranchante et brillante du safran, avec une douceur d'anis à la fin."
    }
  ]
};
