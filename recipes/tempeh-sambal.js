export default {
  "repoId": "master_indonesian_tempeh_sambal_001",
  "parentRepoId": null,
  "slug": "tempeh-sambal",
  "author": "ForkRecipe Kitchen",
  "title": "Tempeh Sambal (Tempe Kering)",
  "description": "Tranche de Tempeh fine et frite jusqu'à l'or et la noix, puis jetée dans un sambal de chiles rouges, d'échalotes, de citronnelle et de manies de kécap qui caramélise à une laque dans la poêle — chaque morceau de tempeh absorbant la glaçure sucrée et épicée tout en maintenant sa morsure caractéristique ferme et charnue. C'est l'une des grandes préparations végétaliennes: profondément satisfaisantes d'une manière qui n'a rien à voir avec l'imitation de la viande.",
  "cuisine": "Indonésien",
  "culture": "Javanese/Balinese",
  "category": "vegetables",
  "tags": [
    "tempeh",
    "sambal",
    "par an",
    "végétalien",
    "Sans gluten",
    "frits",
    "javanais"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 1078,
  "forks": 68,
  "contributors": 20,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tempeh, tranché 5 mm d'épaisseur",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Chiles rouges (cayenne ou serrano), tranchés",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de chiles séchés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Lemongrass, tige interne seulement, meurtris",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Masque de kécap (sauce de soja sucrée)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + sucre de palme, 1:1"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile de coco ou huile neutre pour la friture",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles de laurier fraîche (feuilles de salam si disponibles)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Frire",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "fried_tempeh",
      "instructions": "Chauffer 1 cm d'huile dans une poêle large à feu moyen-élevé. Lorsque l'huile mijote et qu'un petit morceau de tempeh s'échauffe immédiatement au contact, commencer à faire frire les tranches de tempeh en une seule couche, sans fouler. Faire frire de 3 à 4 minutes de chaque côté jusqu'à ce qu'il soit bien doré et croustillant à l'extérieur. Le tempeh ne doit pas être pâle — il faut de la couleur pour que le vitrage ultérieur fonctionne correctement. Égoutter sur un support, pas des serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Les tranches de Tempeh sont uniformément dorées et brunes des deux côtés. Les bords sont croquants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tempeh est d'or pâle et encore doux. La surface ne craque pas quand elle est pressée.",
            "action": "Continuer à frire 2 minutes de plus par côté. L'extérieur doit être bien frit avant le vitrage."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée sur toutes les surfaces. Les bords sont croquants et craquant audiblement lorsqu'ils sont pressés. L'odeur est de soja rôti et de bonbon de noix frites.",
            "action": "Égoutter sur une grille. Verser l'excédent d'huile de la casserole, laissant environ 1 cuillère à soupe."
          },
          {
            "state": "Overdone",
            "description": "Tempeh est brun foncé avec des taches carbonisées. Ça sent amer.",
            "action": "Température d'huile inférieure pour le prochain lot. Utilisez ces morceaux dans le sambal — la glaçure masquera une certaine amertume."
          }
        ]
      },
      "feelCue": "Une tranche de tempeh bien frite devrait se sentir rigide et crépiter audiblement quand vous appuyez avec une spatule — ce crépitement vous dit que l'extérieur a mis et tiendra jusqu'à la sambal humide sans aller soggy."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_09"
      ],
      "outputState": "sambal_base",
      "instructions": "Dans la même casserole avec le reste de la cuillère à soupe d'huile, ajouter les échalotes et cuire à feu moyen jusqu'à ce qu'elles soient dorées et commencer à caraméliser — environ 5 minutes. Ajouter les piments tranchés, l'ail, la citronnelle et les feuilles de laurier. Faire frire pendant 3 minutes jusqu'à ce que les chiles soient adoucis et parfumés. Les échalotes devraient être bien au-delà des translucides, s'approchant de la croustillante et de l'or, avant d'ajouter le kécap manis.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont dorées et légèrement croquantes. Les Chiliens sont adoucis. La poêle sent l'allium et le piment caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore blanches et ont une odeur crue. Les Chiliens n'ont pas ramolli.",
            "action": "Continuer la cuisson à feu moyen. Les échalotes ont besoin d'une caramélisation complète avant d'ajouter la glaçure."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes sont dorées, légèrement croquantes et confitureuses. Les Chiliens sont rouge vif et adoucis. Le citronnelle est parfumée. Toute la poêle sent l'Indonésien Warung.",
            "action": "Ajouter le kecap manis et retourner le tempeh frit."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu très sombre et amer. Les échalotes commencent à brûler.",
            "action": "Ajouter immédiatement le kecap pour déglacer et arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Lorsque vous faites glisser une cuillère à travers les échalotes sautées, ils doivent se sentir jammy et légèrement collant contre la poêle — cette collante est le sucre naturel caramélisant, qui est exactement ce que vous voulez avant que le kecap manis entre."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "sambal_base",
        "fried_tempeh",
        "ing_06"
      ],
      "outputState": "finished_tempeh_sambal",
      "instructions": "Ajouter le tempeh frit à la base du sambal. Versez le kecap manis sur tout. Mélanger vigoureusement à feu vif pendant 2 à 3 minutes jusqu'à ce que le kecap manis caramélise et enveloppe chaque morceau de tempeh dans un glaçage sombre et brillant. Le liquide devrait diminuer complètement — la poêle devrait être presque sèche. Assaisonner de sel si nécessaire (kecap manis est déjà assez salé). Retirer la citronnelle et les feuilles de laurier avant de servir.",
      "visualCue": {
        "primaryTarget": "Tempeh est recouvert d'une glaçure foncée caramélisée. La poêle est presque sèche. Chaque pièce brille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Kecap manis est toujours liquide dans la casserole. Tempeh n'est pas glacé, juste mouillé.",
            "action": "Augmenter la chaleur et continuer à jeter pendant 60 à 90 secondes jusqu'à ce que le liquide diminue."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de tempeh est laqué dans un vernis acajou foncé. La poêle est sèche. Chaque pièce brille avec le manis du kecap réduit. La cuisine sent le soja sucré caramélisé.",
            "action": "Servir immédiatement sur le riz ou comme plat d'accompagnement."
          },
          {
            "state": "Overdone",
            "description": "Glaze est passé du caramélisé au brûlé. Les morceaux noirs s'accrochent à la casserole.",
            "action": "Retirer immédiatement de la chaleur. La note légèrement amère de la surcaramélisation fonctionne en fait en petites quantités. Servez vite."
          }
        ]
      },
      "feelCue": "Le sambal tempeh fini devrait avoir un extérieur légèrement collant et laqué qui résiste momentanément à la fourche avant le rendement intérieur — cette résistance est la différence entre une glaçure et une sauce."
    }
  ]
};
