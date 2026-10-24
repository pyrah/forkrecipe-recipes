export default {
  "repoId": "master_thai_basil_chicken_001",
  "parentRepoId": null,
  "slug": "thai-basil-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Pad Krapow Gai (poulet de basilic thaïlandais)",
  "description": "Le plat chaque cuisinier thaïlandais fait un mardi — poulet haché avec basilic saint, chilis, et l'ail dans un wok chaud à la mer, fini en minutes, les feuilles de basilic se flétrissent en velours parfumé foncé qui parfume chaque grain de riz sous eux.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "proteins",
  "tags": [
    "Thaï",
    "poulet",
    "basilic",
    "sauté",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 4102,
  "forks": 462,
  "contributors": 48,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-10",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisse de poulet hachée ou grossièrement moulue",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poitrine de poulet",
        "porc",
        "tofu ferme émietté"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chilies de l'œil de l'oiseau thaïlandais, tranchées (ajuster à la tolérance)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chilies",
        "piments rouges séchés"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de basilic saint (krapow) — NON basilic thaïlandais",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Basilic doux thaïlandais (différente saveur mais utilisable)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce à l'huître",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce végétarienne aux huîtres"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + pincer MSG"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce de soja foncé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja léger (ajouter plus)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux pour la profondeur du restaurant"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger la sauce",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "krapow_sauce",
      "instructions": "Mélanger la sauce aux huîtres, la sauce au poisson et la sauce au soja foncé dans un petit bol. Mélanger. Goûter — il devrait être fortement salé et salé. Cette sauce va rapidement à feu vif, donc il est essentiel de la préparer avant de commencer. Ne jamais assaisonner un brassage en agitant des bouteilles sur un wok chaud.",
      "visualCue": {
        "primaryTarget": "sauce brun foncé uniforme, entièrement combinée sans séparation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce de poisson et sauce à l'huître non encore mélangées — vous pouvez voir deux couches distinctes.",
            "action": "Incorporer vigoureusement pendant 10 secondes."
          },
          {
            "state": "Perfect",
            "description": "Doux, sauce foncée uniforme. Des odeurs de sauce au poisson et de sauce aux huîtres sucrées.",
            "action": "Réglez à côté du poêle à portée de bras."
          },
          {
            "state": "Overdone",
            "description": "Sans objet — c'est un mélange froid.",
            "action": "Sans objet"
          }
        ]
      },
      "feelCue": "La sauce doit être assez épaisse pour enrober une baguette — pas rincée comme de la sauce de soja, pas épaisse comme de la mélasse."
    },
    {
      "nodeId": "step_2",
      "action": "Aromates frits",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_08"
      ],
      "outputState": "fried_aromatics",
      "instructions": "Chauffer l'huile dans un wok à feu vif jusqu'à ce qu'elle fume. Ajouter l'ail et les yeux d'oiseau ensemble. Faire frire pendant 30-45 secondes, en remuant constamment — l'ail commencera à s'orner aux bords et les chilis feront tourner l'huile rouge-orange vif. Ne laissez pas brûler l'ail ou le plat sera amer.",
      "visualCue": {
        "primaryTarget": "L'ail est d'or pâle aux bords avec des centres blancs; les chilis ont fleuri l'huile à un rouge orange. Le parfum remplit la cuisine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est blanc cru, les chilis sont encore rouge vif — pas de couleur, pas de parfum libéré.",
            "action": "Augmenter la chaleur et continuer; remuer constamment."
          },
          {
            "state": "Perfect",
            "description": "Les bords d'ail sont en or pâle, les centres sont encore blancs. L'huile est rouge-orange vif des piments. Arôme aigu, grillé avec un chili chaud visible sous forme de vapeur.",
            "action": "Ajouter le poulet immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun foncé ou noir, sent dur et amer.",
            "action": "Jeter et recommencer — l'ail brûlé ne peut être sauvé et ruinera le plat."
          }
        ]
      },
      "feelCue": "La chaleur de chili devrait frapper l'arrière de votre gorge même avant que le poulet entre — si vous ne déchirez pas légèrement, soit les chilis sont doux ou le wok n'est pas assez chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Poêle",
      "inputs": [
        "ing_01",
        "fried_aromatics",
        "krapow_sauce"
      ],
      "outputState": "cooked_chicken",
      "instructions": "Ajouter le poulet haché et le casser avec une spatule immédiatement. Arroser à feu vif pendant 2-3 minutes, presser le poulet plat contre le wok pour obtenir de la couleur plutôt que de la vapeur. Quand il ne reste pas de rose, versez la sauce autour du bord du wok (pas au-dessus du poulet) – elle crève légèrement et s'arrose légèrement avant de se mélanger. Mets-toi à manteaur.",
      "visualCue": {
        "primaryTarget": "Le poulet est découpé en morceaux variés et irréguliers — certains caramélisés et plus foncés, le plus doré. Enrobé uniformément dans la sauce foncée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches roses encore visibles dans le poulet; la sauce n'a pas été entièrement enduite — semble pâle et aqueuse.",
            "action": "Continuer à feu vif pendant 60 à 90 secondes, étaler le poulet plat."
          },
          {
            "state": "Perfect",
            "description": "Pas de restes roses; certaines pièces ont des bords carbonisés. La sauce s'accroche à chaque pièce dans un manteau brillant. La cuisine est remplie de fumée et de vapeur parfumée.",
            "action": "Ajouter le basilic sacré."
          },
          {
            "state": "Overdone",
            "description": "Le poulet a séché et s'est considérablement rétréci; la sauce commence à brûler sur le wok.",
            "action": "Ajouter immédiatement un jet d'eau (1-2 c. à soupe) et mélanger pour déglacer."
          }
        ]
      },
      "feelCue": "Écoutez le rugissement du wok — le craquage constant et agressif signifie que vous êtes agité. N'importe quelle goutte à un doux étourdissement signifie que la température est tombée et vous êtes en train de vapeur."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer avec le basilic",
      "inputs": [
        "cooked_chicken",
        "ing_04"
      ],
      "outputState": "finished_pad_krapow",
      "instructions": "Retirer le wok du feu (ou le réduire au minimum). Ajouter les feuilles de basilic sacré à la fois et jeter vigoureusement pendant 10-15 secondes. Les feuilles se fanent presque instantanément de la chaleur résiduelle. Ne les cuisez pas trop — ils devraient être flétris et vert foncé, pas bruns et musqués. Assortir immédiatement sur le riz jasmin avec un oeuf frit sur le dessus.",
      "visualCue": {
        "primaryTarget": "Les feuilles de basilic sont flétries à vert foncé et brillant, et non brunes. Ils s'accrochent aux morceaux de poulet et le plat sent intensément le basilic saint et la sauce de poisson caramélisée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles de basilic sont encore vert vif, droites et crues — elles n'ont pas libéré leurs huiles essentielles dans le plat.",
            "action": "Revenez à feu doux pendant encore 10-15 secondes, jetant constamment."
          },
          {
            "state": "Perfect",
            "description": "Feuilles flétries et foncées à un vert brillant profond, complètement intégrées au poulet. L'arôme de saint basilic — légèrement girofle, poivré — domine le plat.",
            "action": "Tout de suite."
          },
          {
            "state": "Overdone",
            "description": "Le basilic est brun olive et mousseux; les huiles aromatiques ont complètement cuit et il sent plat.",
            "action": "Le plat est toujours bon — vous venez de perdre la luminosité des herbes. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Le basilic doit se flétrir avec juste un toss ou deux dans la chaleur résiduelle du wok — s'il a besoin de plus de 15 secondes, le wok n'était pas assez chaud pour commencer."
    }
  ]
};
