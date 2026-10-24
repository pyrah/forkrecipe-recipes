export default {
  "repoId": "master_levantine_chicken-shawarma-marinade_001",
  "parentRepoId": null,
  "slug": "chicken-shawarma-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet marinade de Shawarma",
  "description": "Une pâte de couleur rouille profonde d'épices chaudes, d'ail et de yaourt qui s'infiltre dans le poulet pendant la nuit — le matin la viande est teintée et parfumée, promettant l'omble et la complexité d'une rotisserie sans la cracher.",
  "cuisine": "Levantine",
  "culture": "Levantine Street Food",
  "category": "condiments",
  "tags": [
    "marinade",
    "Shawarma",
    "poulet",
    "épice",
    "lébanèse"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "8 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 4,
    "bitter": 2,
    "umami": 4,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "yaourt de noix de coco sans lait"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail hachées à pâte",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "Alep flocons de poivre (double quantité)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "bloomed_spices",
      "instructions": "Mesurer toutes les épices broyées dans une petite poêle sèche. Placer sur feu moyen et remuer constamment avec une cuillère en bois pendant 60-90 secondes jusqu'à ce que les épices soient parfumées et commencent juste à fumer aux bords. Cette étape de floraison réveille les composés aromatiques volatils. Retirer du feu le moment où vous sentez une profondeur chaude et grillée — pas un bord brûlé.",
      "visualCue": {
        "primaryTarget": "Le mélange d'épices est passé de la poudre crue à une teinte plus foncée et plus riche, et la cuisine se remplit d'un parfum profond et chaleureux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sentent crus et plats, comme la poudre sèche plutôt que la chaleur grillée.",
            "action": "Retourner à la chaleur et remuer constamment pendant encore 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Une vague de parfums chauds et complexes remplit la cuisine. Les épices sont une ombre plus foncée et commencent à se déplacer dans la poêle à partir de la chaleur.",
            "action": "Astucez immédiatement dans le bol de mélange pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Une fumée acérée et amère. Certaines épices sont noires aux bords de la poêle.",
            "action": "Jeter et commencer frais — les épices brûlées rendront toute la marinade amère. L'extra brut 60 secondes ne vaut jamais la peine de sauter."
          }
        ]
      },
      "feelCue": "Vaporisez votre main sur la poêle et le parfum d'épices chaudes devrait vous frapper immédiatement — cumin-avant, puis la douceur de cannelle en dessous."
    },
    {
      "nodeId": "step_2",
      "action": "Hacher finement",
      "inputs": [
        "ing_04",
        "ing_11"
      ],
      "outputState": "garlic_paste",
      "instructions": "Arrosez l'ail très fin, puis saupoudrez le sel dessus et utilisez le plat de votre couteau pour frotter et le faire glisser dans une pâte lisse. Le sel dégage de l'humidité et l'action mécanique décompose les parois cellulaires, libérant l'allicine pour un poinçon maximum. La pâte doit être suffisamment cohésive pour soulever la lame du couteau sans s'effondrer.",
      "visualCue": {
        "primaryTarget": "Une pâte blanche lisse, humide et légèrement collante — pas de morceaux visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est haché mais pas encore une pâte — il reste des morceaux.",
            "action": "Continuez à traîner avec le couteau à plat. Il faut 2-3 minutes de travail."
          },
          {
            "state": "Perfect",
            "description": "Une pâte cohésive qui sent le piquant et le tranchant, tenant ensemble comme une crème épaisse.",
            "action": "Ajouter au bol les épices."
          },
          {
            "state": "Overdone",
            "description": "La pâte d'ail est collante et extrêmement piquante du surmenage.",
            "action": "Utilisez une quantité légèrement plus petite — un peu plus de pâte d'ail travaillée va plus loin."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir légèrement chaude à cause de la friction au couteau-travail et sentir agressivement aiguisée — cette puanteur se rafraîchit toute la nuit dans la marinade."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "bloomed_spices",
        "garlic_paste"
      ],
      "outputState": "finished_marinade",
      "instructions": "Mélanger le yaourt, l'huile d'olive et le jus de citron dans un bol. Ajouter les épices fleuries et la pâte d'ail. fouetter vigoureusement jusqu'à ce qu'il soit complètement lisse et uniformément coloré — une pâte orangée de rouille profonde sans stries blanches de yogourt ou de poches foncées d'épices. Bouche: il doit être assaisonné agressivement, car il enrobera plusieurs livres de poulet. Ajuster le citron et le sel.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, épaisse, orangée de rouille profonde — uniforme en couleur, brillante, avec la consistance d'un smoothie épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des éclats de yogourt blanc et des poches sombres d'épices sont encore visibles.",
            "action": "fouetter plus vigoureusement, vous assurant d'atteindre le fond et les bords du bol."
          },
          {
            "state": "Perfect",
            "description": "Rouge rouille uniforme, épais, parfumé. Une cuillère traînée à travers elle laisse un sillon propre qui tient sa forme.",
            "action": "Appliquer sur le poulet et réfrigérer pendant au moins 2 heures, idéalement toute la nuit."
          },
          {
            "state": "Overdone",
            "description": "Le sursaut a séparé le yogourt et la marinade semble granuleuse.",
            "action": "Ajouter une cuillère à soupe d'eau froide et fouetter brièvement pour réémulsionner."
          }
        ]
      },
      "feelCue": "Plonger le doigt et le goût — la chaleur de Cayenne devrait fleurir après 2-3 secondes, l'aurore du citron devrait être immédiate, et la cannelle devrait être un sous - ton calme."
    },
    {
      "nodeId": "step_4",
      "action": "Faire mariner",
      "inputs": [
        "finished_marinade"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Score cuisses de poulet (sur peau ou sans peau) plusieurs fois à travers la partie la plus épaisse avec un couteau tranchant. Appliquer la marinade sur chaque surface, la presser dans les découpes. Placer dans un sac à fermeture éclair ou un contenant scellé. Réfrigérer pendant au moins 2 heures, au maximum 24 heures. Au-delà de 24 heures, l'acide décompose la texture de la viande. Retirer du réfrigérateur 30 minutes avant la cuisson.",
      "visualCue": {
        "primaryTarget": "Le poulet est également recouvert d'une couche orangée-rouille profonde sans taches nues; les découpes sont remplies de marinade.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet a été dans la marinade moins de 2 heures — la saveur n'aura pas pénétré la viande.",
            "action": "Retournez au frigo. 2 heures est le minimum; la nuit donne des résultats nettement supérieurs."
          },
          {
            "state": "Perfect",
            "description": "Après une nuit de marination, la surface est devenue plus profonde, presque rouge brique. La viande sent l'épice chaude quand le sac est ouvert.",
            "action": "Retirer du réfrigérateur 30 minutes avant la cuisson. Cuire sous une grille chaude ou dans une poêle très chaude jusqu'à ce que les bords soient carbonisés."
          },
          {
            "state": "Overdone",
            "description": "Mariné plus de 24 heures — l'acide a commencé à dénaturé les protéines de surface, donnant une couche externe légèrement granuleuse ou musquée.",
            "action": "Cuire immédiatement et ne pas mariner aussi longtemps à l'avenir. La saveur sera excellente."
          }
        ]
      },
      "feelCue": "Après la matinée de la nuit, pressez un morceau de poulet enduit — la marinade aurait dû sécher légèrement à la surface, formant une croûte collante et parfumée qui caramélisera magnifiquement sous la chaleur."
    }
  ]
};
