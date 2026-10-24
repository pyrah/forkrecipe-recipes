export default {
  "repoId": "master_french_rillettes_de_porc_001",
  "parentRepoId": null,
  "slug": "rillettes-de-porc",
  "author": "ForkRecipe Kitchen",
  "title": "Rillettes de Porc",
  "description": "L'épaule de porc cuite pendant des heures dans sa propre graisse de fusion jusqu'à ce que chaque fibre se rende, puis déchiquetée à la main et emballée dans des crevettes avec suffisamment de graisse pour la préserver. Répartir abondamment sur du pain froid, c'est la chose la plus honnête de la tradition charcuterie française.",
  "cuisine": "Français",
  "culture": "Tourangeau",
  "category": "proteins",
  "tags": [
    "français",
    "porc",
    "charcuterie",
    "confit",
    "Étendue",
    "Cuisson lente",
    "Loire"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "5 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Epaule de porc, peau coupée en cubes de 5 cm",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "ventre de porc",
        "joue de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard ou graisse de porc",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "gras de canard"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Bouquet garni (baie, thym, tiges de persil)",
      "ratioValue": 1,
      "defaultUnit": "bundle",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Quatre épices (poivre blanc, muscade, gingembre, girofle)",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "cidre sec"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_05",
        "ing_04"
      ],
      "outputState": "seasoned_pork",
      "instructions": "Mélanger les cubes de porc avec le sel et le quarte d'épices dans un grand bol, enrobant chaque surface. Le rapport sel est de 12 g par kg de viande — un assaisonnement précis est essentiel car les rillettes seront consommées froidement et les graisses non assaisonnées sont molles. Si le temps le permet, couvrir et réfrigérer pendant la nuit pour laisser pénétrer le remède. Minimum 2 heures.",
      "visualCue": {
        "primaryTarget": "Chaque cube de porc est recouvert d'un film d'assaisonnement visible. Le sel commencera à attirer l'humidité à la surface, créant ainsi une saumure légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'assaisonnement est seulement à la surface et n'a pas été autorisé à pénétrer. Le porc a l'air sec et épicé.",
            "action": "Laisser plus de temps de repos — 2 heures minimum, idéal pour la nuit. Le sel a besoin de temps pour migrer vers l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Après au moins 2 heures, la surface semble légèrement humide par l'humidité tirée. Les épices sentent chaud et aromatique quand le bol est couvert et levé.",
            "action": "Aller à la cuisson lente."
          },
          {
            "state": "Overdone",
            "description": "Le sel a été laissé plus de 24 heures et la surface de porc semble cuir et très ferme.",
            "action": "Rincer légèrement, tapoter et poursuivre. La viande continuera à produire dans la longue cuisson, mais peut être légèrement plus ferme dans la texture."
          }
        ]
      },
      "feelCue": "Après la période de repos, appuyez sur un cube — il doit se sentir plus dense et légèrement plus productif que le porc frais, car le sel a commencé à décomposer les protéines musculaires à la surface."
    },
    {
      "nodeId": "step_2",
      "action": "Brise",
      "inputs": [
        "seasoned_pork",
        "ing_02",
        "ing_03",
        "ing_06"
      ],
      "outputState": "braised_pork",
      "instructions": "Placez le porc assaisonné dans un pot de fonte ou d'émail lourd. Ajouter le saindoux, le bouquet garni et le vin blanc. La graisse devrait venir à peu près à la moitié du porc. Cuire dans un four de 130 C (265 F), à découvert, pendant 3,5 à 4,5 heures, en faisant tourner les morceaux de porc doucement toutes les heures. Le liquide sera réduit et la graisse deviendra claire. Le pot devrait maintenir une bulle très paresseuse — presque aucun mouvement à la surface.",
      "visualCue": {
        "primaryTarget": "La graisse est claire, dorée et à peine chatoyante. Les morceaux de porc ont l'air effondrés, profondément dorés aux bords, et commencent à déchiqueter lorsqu'ils sont plissés d'une fourchette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de porc conservent leur forme. Tirer avec deux fourchettes répond à la résistance. La graisse contient encore de l'humidité blanche.",
            "action": "Continuez à cuisiner. Les rillettes sous-cuites auront une texture grossière et mâcheuse. Le collagène ne s'est pas encore converti."
          },
          {
            "state": "Perfect",
            "description": "Le porc s'effondre lorsqu'une fourchette est pressée contre un cube. La graisse est propre et dorée. La poêle sent profondément le porc et le thym. Tout tissu conjonctif s'est dissous dans la graisse.",
            "action": "Retirer du four et commencer à déchiqueter tout en restant chaud."
          },
          {
            "state": "Overdone",
            "description": "Le porc s'est complètement désintégré et la graisse commence à s'assombrir. Les bords du pot sont très bruns.",
            "action": "Supprimer immédiatement. La texture peut être légèrement musclée, mais la saveur est fine. Shred et pot comme d'habitude."
          }
        ]
      },
      "feelCue": "Atteindre avec deux fourchettes et tirer à un cube — il devrait se séparer en fibres longues avec la pression la plus légère, comme le coton tiré chaud. S'il résiste, il lui faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "braised_pork"
      ],
      "outputState": "shredded_rillettes",
      "instructions": "Retirer le bouquet garni et lever les morceaux de porc dans un grand bol avec une cuillère à fentes, en réservant toute la graisse de cuisson. Alors que le porc est encore chaud, utilisez deux fourchettes pour le séparer en longues fibres rugueuses — pas une pâte fine, mais des lambeaux grossiers où les fibres individuelles sont visibles. Déposer suffisamment de graisse chaude et tendue sur la viande déchiquetée pour l'humidifier généreusement et la lier à une masse extensible. Goûtez et ajustez le sel. Il devrait avoir un goût assaisonné.",
      "visualCue": {
        "primaryTarget": "Fibres de porc rugueuses et dorées humidifiées de graisse claire. Le mélange est cohésif mais grossier — pressé dans une roche, il montre une texture visible, pas une pâte lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lambeaux sont trop longs et le mélange est rigide et lâche. Il s'effondre plutôt que de se lier.",
            "action": "Ajouter plus de gras chaud et plier à nouveau. La graisse est le liant — le mélange doit tenir sa forme lorsqu'il est pressé."
          },
          {
            "state": "Perfect",
            "description": "Fibres d'or rugueuses attachées à la graisse claire. Pressé dans une cuillère, il tient sa forme. Les morceaux individuels sont visibles. Goûte riche, porcin et bien assaisonné.",
            "action": "Emballez immédiatement dans des crevettes stérilisées."
          },
          {
            "state": "Overdone",
            "description": "Vous avez surmené les lambeaux et produit une pâte lisse et mousseuse.",
            "action": "La saveur est inchangée mais la texture grossière traditionnelle est perdue. C'est maintenant quelque chose de plus proche du pâté, le servir en tant que tel."
          }
        ]
      },
      "feelCue": "Prenez une grande pincée du mélange et appuyez-le entre vos doigts — il devrait tenir ensemble dans un bouchon compact de fibres, puis se séparer proprement quand tiré. Si elle s'écroule en poudre sèche, ajouter plus de graisse."
    },
    {
      "nodeId": "step_4",
      "action": "Jeu",
      "inputs": [
        "shredded_rillettes"
      ],
      "outputState": "finished_rillettes_de_porc",
      "instructions": "Emballez les rillettes fermement dans des crevettes ou des ramequins en verre stérilisé, en appuyant vers le bas pour éliminer les poches d'air. Versez une fine couche de la graisse tendue restante sur le dessus — c'est le sceau de préservation. Laisser refroidir jusqu'à température ambiante, puis réfrigérer à découvert jusqu'à ce que le bouchon de graisse soit complètement réglé. Une fois réglées, les rillettes resteront réfrigérées pendant 2 semaines. Servir à température ambiante avec du pain croustillant et des cornichons.",
      "visualCue": {
        "primaryTarget": "Une casquette de gras ivoire-or pâle a posé solide sur le dessus de la roche. Pas de poches d'air visibles sur les côtés. La surface est plate et opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouchon est encore liquide ou semi-liquide. Les rillettes ci-dessous ne sont pas entièrement réglées.",
            "action": "Réfrigérer plus longtemps. Le bouchon de graisse doit être solide pour sceller l'air et empêcher l'oxydation."
          },
          {
            "state": "Perfect",
            "description": "Le bouchon est complètement opaque et solide. Il est d'or pâle et s'est légèrement contracté des côtés de la roche, créant ainsi un sceau propre. Les rillettes en dessous sont fermes mais extensibles.",
            "action": "Sceller avec un couvercle et réfrigérer. Retirer du réfrigérateur 30 minutes avant de servir pour permettre à la graisse de ramollir."
          },
          {
            "state": "Overdone",
            "description": "Le bouchon de graisse a été au réfrigérateur si longtemps qu'il est devenu très blanc et cireux.",
            "action": "C'est bien, il conserve encore la viande en dessous. Découpez-le pour servir et jetez-le ou incorporez-le dans les rillettes."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le bouchon gras avec un bout de doigt — il doit être solide et inébranlable, comme le saindoux froid. Pas de gâchis. En dessous, les rillettes devraient être fermes, mais pas rocailleuses — vous devriez pouvoir appuyer sur un pouce avec un effort modéré."
    }
  ]
};
