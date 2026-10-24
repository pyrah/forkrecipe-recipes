export default {
  "repoId": "master_japanese_matcha_ice_cream_001",
  "parentRepoId": null,
  "slug": "matcha-ice-cream",
  "author": "ForkRecipe Kitchen",
  "title": "Crème glacée Matcha",
  "description": "Ceremonial-grade Uji matcha — astringent, végétal, la couleur de la mousse après la pluie — a coulé dans une riche base de crème jusqu'à ce qu'il gèle dans une crème sucrée amère qui enveloppe la langue dans des tannins de thé vert avant que la douceur laitière suit. La tension entre amer et doux est ce qui fait que cette crème glacée se sent comme si elle appartenait à une cérémonie de thé, pas seulement un bol de dessert.",
  "cuisine": "Japonais",
  "culture": "Uji, Kyoto",
  "category": "desserts",
  "tags": [
    "Japonais",
    "matcha",
    "glaces",
    "thé vert",
    "uj",
    "dessert",
    "Non adapté"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "5 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 0,
    "bitter": 3,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 240,
      "defaultUnit": "g",
      "substitutions": [
        "Lait d'avoine (la texture sera légèrement plus agréable)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème lourde (35%+ gras)",
      "ratioValue": 360,
      "defaultUnit": "g",
      "substitutions": [
        "crème de noix de coco sans lait (arôme distinct)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Jaunes d'oeufs (5 grandes)",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "muscoudo léger (ajoute une note de mélasse qui concurrence le matcha)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Poudre de matcha de qualité cérémonielle (Uji préféré)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "matcha culinaire (utiliser 25g; la saveur est plus grossière et plus amère)",
        "grade culinaire de qualité supérieure (25g)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer (une petite pincée)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_05",
        "ing_01"
      ],
      "outputState": "matcha_milk",
      "instructions": "Sirotez la poudre de matcha dans un bol large et peu profond pour briser n'importe quelle touffe. Ajouter 3 cuillères à soupe (environ 45g) de lait entier mesuré, chaud mais pas chaud (environ 60 C). À l'aide d'un fouet en bambou (matcha whisk) ou d'un petit fouet en ballon, fouetter le matcha et le lait dans des traits rapides en forme de 'M' et 'W' jusqu'à ce qu'une pâte lisse et sans morceaux se forme. Ajouter le lait restant progressivement, fouetter pour maintenir la douceur. La pâte de Matcha doit être complètement homogène avant d'être ajoutée à la crème – une seule masse non dissoute laissera une stries vert amère dans la crème glacée finie.",
      "visualCue": {
        "primaryTarget": "Un liquide vif, uniformément vert, sans taches plus claires ou plus foncées, sans empiècements flottants, et une fine couche de mousse fine du fouet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Petits morceaux vert foncé visibles flottant dans le lait. Streaks de poudre non mélangée sur les côtés du bol.",
            "action": "Continuez à fouetter dans le motif 'W' — le matcha non dissous ne se dissoudra pas une fois ajouté à la crème et créera des taches amères."
          },
          {
            "state": "Perfect",
            "description": "Vert uniformément vif dans l'ensemble, mousse fine sur le dessus, pas de bosses. Des odeurs d'herbe fraîchement coupée, d'algues et de lait.",
            "action": "Ajouter à la crème restante et chauffer pour la base de crème."
          },
          {
            "state": "Overdone",
            "description": "Vous avez trop fouetté et le lait est maintenant très mousseux — difficile à peser et ajoutera de l'air à la crème.",
            "action": "Laisser reposer 2 minutes pour que la mousse s'abaisse avant de continuer."
          }
        ]
      },
      "feelCue": "Exécutez l'arrière d'une cuillère dans le lait de matcha — il devrait laisser un canal vert jade propre et vif qui retient ses bords pendant 2 secondes avant que le lait ne revienne. Pas de stries, pas d'îles de poudre plus foncée."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "yolk_mixture",
      "instructions": "Dans un bol moyennement résistant à la chaleur, fouetter vigoureusement les jaunes d'œufs et le sucre de roulette pendant environ 2 minutes jusqu'à ce que le mélange soit devenu pâle, épaississant sensiblement, et tombe du fouet dans un ruban lent et large. C'est l'étape du ruban — elle indique qu'il y a eu suffisamment d'air et d'émulsion pour donner le corps de la crème. Les jaunes seront prêts lorsqu'ils auront doublé en volume, tournés d'orange profonde à jaune crème pâle, et le ruban se maintient à la surface pendant 3 secondes avant de couler. Cette étape aide également à tamponner les jaunes contre le brouillage lorsque le lait chaud de matcha est ajouté.",
      "visualCue": {
        "primaryTarget": "Une mousse pâle, aérée et de couleur crème qui tombe du fouet dans un ruban épais et lent et tient une trace à la surface du bol pendant 2 à 3 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore jaune et liquide — il n'a pas changé de couleur ni de volume. Des chutes du fouet dans une goutte d'eau immédiate.",
            "action": "Continuez à fouetter — le sucre n'a pas encore complètement dissous dans les jaunes et le mélange sera mince si utilisé maintenant."
          },
          {
            "state": "Perfect",
            "description": "Jaune crème pâle, doublé en volume, ruban tient 3 secondes. Une cuillère levée tombe dans un motif replié plutôt que de se dissoudre immédiatement.",
            "action": "Préparez les outils de chauffage et de tempérage du lait de matcha, qui doivent être utilisés rapidement et aérés."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est blanc, très raide, et a commencé à grainer ou à se séparer.",
            "action": "Chauffer brièvement le bol sur une casserole d'eau chaude et fouetter de nouveau pour recombiner. Le léger surbattement n'a pas d'incidence pour la custarde finale."
          }
        ]
      },
      "feelCue": "Plongez dans le doigt — il doit goûter intensément sucré et oeuf, enrobant votre bout de doigt dans un mince film. La texture sous votre doigt doit se sentir comme du lait condensé très lâche et aéré."
    },
    {
      "nodeId": "step_3",
      "action": "Tempérer",
      "inputs": [
        "matcha_milk",
        "ing_02",
        "yolk_mixture",
        "ing_06"
      ],
      "outputState": "matcha_custard",
      "instructions": "Mélanger le lait de matcha et le reste de la crème lourde dans une casserole moyenne. Chauffer à feu moyen, en remuant occasionnellement, jusqu'à ce que le mélange commence à vapeur et que de petites bulles apparaissent au bord — environ 75 °C. Ne pas faire bouillir. Versez lentement environ un tiers de la crème chaude de matcha dans le mélange de jaune tout en fouettant constamment — c'est le tempérament: élever graduellement la température de l'oeuf pour éviter les brouillages. Verser le mélange de jaune trempé dans la casserole avec la crème chaude restante. Cuire à feu moyen-doux, en remuant constamment avec une spatule de silicone dans la figure-huit motifs et en grattant le fond et les coins, jusqu'à ce que la crème atteigne 82 C et enrobe l'arrière d'une cuillère proprement. Ajouter la pincée de sel. Empruntez immédiatement un tamis à mailles fines dans un bol propre placé sur un bain de glace.",
      "visualCue": {
        "primaryTarget": "Une crème verte épaisse et vive qui enrobe la spatule dans un film distinct et opaque — courir un doigt dans le dos laisse une ligne propre qui tient sans goutter.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le custard est mince et coule librement de la spatule. La ligne tracée sur le dos disparaît en moins d'une seconde. La température est inférieure à 79 °C.",
            "action": "Continuer la cuisson en remuant constamment. Custard s'épaissit soudainement dans la gamme 80-82 C — soyez prêt."
          },
          {
            "state": "Perfect",
            "description": "Cohérence de la nappe — le revêtement de la spatule tient une ligne propre pendant 5+ secondes. Température 82 C. Vert jade profond. Des odeurs de matcha herbacé et de crème.",
            "action": "Plongez immédiatement à travers un tamis fin dans un bol sur un bain de glace. Mélanger pour refroidir, puis réfrigérer jusqu'à ce qu'il soit complètement froid avant de grincer."
          },
          {
            "state": "Overdone",
            "description": "Oeuf vert brouillé visible — petit caillé formant. Une texture grainée. Température supérieure à 85 °C.",
            "action": "Plongez immédiatement dans un tamis très fin — les protéines caillées seront capturées. Mélanger la crème tendue avec un mélangeur à main pour restaurer la douceur. Un peu moins riche que l'idéal mais utilisable."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt sur l'arrière de la cuillère enrobée de crème — si la ligne reste croustillante et ne se remplit pas lorsque vous pointez la cuillère, la crème est prête. Si elle se renverse de l'autre côté du doigt, continuez à cuisiner."
    },
    {
      "nodeId": "step_4",
      "action": "Congeler",
      "inputs": [
        "matcha_custard"
      ],
      "outputState": "finished_matcha_ice_cream",
      "instructions": "Laisser refroidir complètement la base de crème au-dessus du bain de glace, en remuant occasionnellement, puis réfrigérer pendant au moins 2 heures ou toute la nuit jusqu'à ce qu'elle soit complètement réfrigérée — environ 4 C. Churn dans une machine à crème glacée selon les instructions du fabricant jusqu'à ce que la crème glacée soit la consistance d'un service doux épais et écorcable (environ 20 à 25 minutes). Transférer dans un contenant réfrigéré, presser le papier parchemin directement sur la surface pour empêcher la formation de cristaux de glace et congeler pendant au moins 3 heures avant d'écoper. Pour une version sans chunn: fouet 200g de la crème lourde à pics moyens séparément, plier dans la crème fraîche, et congeler dans une poêle à pain pendant 5 heures.",
      "visualCue": {
        "primaryTarget": "Une crème glacée jade-verte profonde et mate avec une texture dense et lisse qui tient une forme de scoop propre — pas glacé ou cristallin, mais velouté et opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème glacée est encore douce et pâle: elle fond immédiatement lorsqu'elle est écopée, elle a un noyau liquide. Pas assez de temps de congélation.",
            "action": "Retourner au congélateur pour une autre heure. Le rapport custard est élevé et nécessite un temps de congélation complet à régler."
          },
          {
            "state": "Perfect",
            "description": "Scoops propre avec une boule chaude, tient sa forme ronde pendant 60+ secondes à la température ambiante avant d'adoucir, et l'intérieur est uniformément dense avec pas de carottes glacées ou de taches de gel blanc.",
            "action": "Servir immédiatement dans des bols réfrigérés. Paire de sésame cassant, de haricots rouges doux (anko), ou de mochi."
          },
          {
            "state": "Overdone",
            "description": "La crème glacée est rocailleuse — un scoop chaud traîne plutôt que des boucles. Morceaux cristallins glacés visibles sur la face coupée.",
            "action": "Transférer au réfrigérateur pendant 15 minutes pour tempérer. La texture glacée peut indiquer que la base était trop diluée ou que le pourcentage de graisse crème était trop faible."
          }
        ]
      },
      "feelCue": "Prenez un petit goût directement dans le bol fouettant avant le gel final — il devrait goûter exactement comme une maison de thé japonaise sent: thé vert intensement végétal, légèrement amer, avec la crème entrant comme un atterrissage doux sur la finale."
    }
  ]
};
