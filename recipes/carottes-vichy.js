export default {
  "repoId": "master_french_carottesvichy_001",
  "parentRepoId": null,
  "slug": "carottes-vichy",
  "author": "ForkRecipe Kitchen",
  "title": "Carottes Vichy (carottes émaillées)",
  "description": "Les carottes mijotaient dans l'eau de Vichy, le beurre, et un murmure de sucre jusqu'à tendre et laqué, un côté humble qui brille avec douceur et brillance.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "vegetables",
  "tags": [
    "français",
    "Carottes",
    "glacé",
    "côté",
    "classique",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Carottes, pelées et coupées en rondelles de 5 mm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Carottes pour bébés, coupées en deux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "beurre végétal"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Eau (minéraux parsemés de préférence)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "eau morte"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Cerveau"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "simmering_carrots",
      "instructions": "Disposer les rondelles de carottes en une seule couche dans une grande casserole. Ajouter le beurre, le sucre, le sel et juste assez d'eau pour couvrir à peine les carottes — pas plus. Faire mijoter vigoureusement à feu moyen-vif, à découvert. Cuire, en tourbillonnant parfois la poêle, jusqu'à ce que le liquide ait presque entièrement évaporé et qu'un glaçage sirupeux reste.",
      "visualCue": {
        "primaryTarget": "Le liquide est presque parti et les carottes sont enduites d'une glaçure brillante et ambrée qui s'accroche à chaque tour.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore nuageux et lâche; les carottes résistent à une pointe de couteau. Pas d'éblouissement à la surface.",
            "action": "Continuer la cuisson à feu moyen-vif, à découvert. Résistez à ajouter plus d'eau — faites confiance à la réduction."
          },
          {
            "state": "Perfect",
            "description": "Liquide a réduit à quelques cuillères à soupe de glaçure. Les carottes sont de type fourche et chaque tour est laqué, captant la lumière.",
            "action": "Retirer immédiatement du feu et mélanger avec du persil."
          },
          {
            "state": "Overdone",
            "description": "Glaze a caramélisé en un film sombre et collant. Les bords des carottes commencent à brûler.",
            "action": "Ajouter une éclaboussure d'eau et tourbillonner pour dissoudre les morceaux sombres. La douceur sera plus prononcée mais toujours bonne."
          }
        ]
      },
      "feelCue": "Un cure - cure - cure - cure - cure - cure - cure - cure - carotte ronde avec une résistance douce et uniforme — tendre mais pas musquée, la façon dont une pêche mûre donne à un ongle."
    },
    {
      "nodeId": "step_2",
      "action": "Découpe",
      "inputs": [
        "simmering_carrots",
        "ing_06"
      ],
      "outputState": "finished_carottes_vichy",
      "instructions": "Hors de la chaleur, dispersez le persil haché sur les carottes vitrées. Mélanger doucement pour enrober, puis goûter et ajuster le sel. Servir immédiatement — la glaçure se serre en refroidissant.",
      "visualCue": {
        "primaryTarget": "Chaque carotte ronde est orange brillant avec un éclat de glaçure et de paillettes de persil vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil est agité, mais la glaçure semble mince et aqueuse — trop d'humidité de l'herbe.",
            "action": "Revenez brièvement à feu doux pendant 30 secondes, jetant constamment, pour re-resserrer la glaçure."
          },
          {
            "state": "Perfect",
            "description": "Les carottes sont brillantes, uniformément revêtues et parsemées de vert vif. La casserole est presque propre du liquide.",
            "action": "Assortiment et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le persil s'est flétri jusqu'au drab d'olive et la glaçure s'est emparée d'une masse collante.",
            "action": "Ajouter un petit bouton de beurre froid et une cuillère d'eau; tourner doucement à feu doux pour se détendre."
          }
        ]
      },
      "feelCue": "Les carottes doivent céder au toucher d'une cuillère sans se briser — des rondelles cohésives et laquées qui se déplacent comme une seule fois que la poêle est agitée."
    }
  ]
};
