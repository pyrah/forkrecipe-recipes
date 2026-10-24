export default {
  "repoId": "master_american_porktenderloin_001",
  "parentRepoId": null,
  "slug": "pork-tenderloin",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Tenderloin de porc rôti pan-mer",
  "description": "La plus indulgente des coupes maigres — cousues dans une casserole chaude jusqu'à l'acajou de tous les côtés, finies dans un four chaud, puis reposées jusqu'à ce que les jus se redistribuent en un centre blush-pink, incroyablement tendre.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "proteins",
  "tags": [
    "porc",
    "américains",
    "grillés",
    "panés",
    "Sans gluten",
    "Vite",
    "filet"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet de porc (peau d'argent enlevée)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin (utiliser la moitié du poids)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "paprika régulier"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre à forte concentration de fumée (avocat ou graines de raisin)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Thym frais et romarin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sauge fraîche"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Giroves d'ail écrasées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "seasoned_tenderloin",
      "instructions": "Retirez la peau argentée : glissez l'extrémité d'un couteau mince sous la membrane argentée et anglez légèrement la lame vers le haut, sciant vers l'avant tout en tirant la peau tendue avec votre autre main. Il devrait sortir en une ou deux bandes. Le filet est complètement sec. Mélanger le sel, le poivre, le paprika fumé et la poudre d'ail et frotter uniformément sur chaque surface. Repos à la température ambiante pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Le filet est un rouge-rose uniforme, uniformément dépoussiéré dans un frottage d'épices de couleur rouille sans membrane d'argent restant et sans taches d'assaisonnement nues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau argentée est encore présente, visible comme une bande brillante, blanchâtre et translucide le long du dessus. L'assaisonnement au rythme.",
            "action": "Enlevez d'abord la peau argentée – elle se serrera pendant la cuisson et fera frire le filet et cuire de façon inégale."
          },
          {
            "state": "Perfect",
            "description": "Complètement parés, assaisonnés uniformément dans une croûte rouge rouille, la surface sèche au toucher. Le parfum d'épices est immédiat.",
            "action": "Reposez-vous 20 minutes à température ambiante pendant que vous préchauffez le four et la poêle."
          },
          {
            "state": "Overdone",
            "description": "Salé trop loin à l'avance (plus de 2 heures à température ambiante). La surface semble humide et décolorée.",
            "action": "Pat sèche encore une fois avant de semer. L'humidité de la surface provoque la vapeur plutôt que la mer."
          }
        ]
      },
      "feelCue": "Courez votre doigt le long du filet — pas de crêtes, pas de taches lisses. La surface doit être sèche et légèrement grincée par le frottage des épices."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "seasoned_tenderloin",
        "ing_06"
      ],
      "outputState": "seared_tenderloin",
      "instructions": "Préchauffer le four à 220 C (425 F). Chauffer une poêle au four (fer fondu de préférence) à feu vif pendant 3 minutes jusqu'à ce qu'elle crie chaud. Ajouter l'huile — elle devrait mijoter immédiatement. Semer le filet pendant 90 secondes par face, en tournant à travers les quatre larges faces jusqu'à ce que chaque surface soit brun acajou. Utilisez des pinces et appliquez une pression ferme vers le bas pour maximiser le contact.",
      "visualCue": {
        "primaryTarget": "Une croûte brun acajou uniforme couvrant chaque face du filet, sans taches grises ou pâles. L'épice est caramélisée et parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La couleur est gris ou brun pâle plutôt qu'acajou. La viande libère toujours l'humidité et la vapeur.",
            "action": "Augmentez la chaleur et attendez. La croûte d'épices a besoin d'une chaleur élevée et sèche pour caraméliser. Ne pas retourner jusqu'à ce que la viande libère proprement."
          },
          {
            "state": "Perfect",
            "description": "Une croûte acajou profonde et même sur les quatre côtés. Les trempages dans la poêle sont en bronze foncé, pas en noir. Le filet s'est légèrement contracté et tient fermement sa forme.",
            "action": "Ajouter le beurre, le thym, le romarin et l'ail dans la poêle. Déplacez-vous immédiatement au four."
          },
          {
            "state": "Overdone",
            "description": "La croûte est noire et les gouttes sont brûlantes. Une odeur amère et acride.",
            "action": "Retirer le filet, essuyer la casserole et ajouter la graisse fraîche. L'omble extérieur sera partiellement masqué par le beurre basting dans le four. Écourter le temps du four de 2 minutes."
          }
        ]
      },
      "feelCue": "Maintenez le filet contre la poêle avec des pinces — vous devriez entendre un grésillement continu et affirmé, et ne pas planer. Soulever après 90 secondes : si la croûte se libère proprement et est acajou, elle est prête à tourner."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "seared_tenderloin",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "roasted_tenderloin",
      "instructions": "Ajouter le beurre, le thym, le romarin et l'ail concassé dans la poêle. Transférer la poêle au four préchauffé. Faire cuire pendant 10 à 12 minutes, en faisant mi-bourrer la poêle et en cuillerant le beurre d'herbe fondu sur le filet. Retirer lorsqu'un thermomètre à lecture instantanée lit 60 C (140 F) au point le plus épais — la cuisson de report l'amènera à 63 C (145 F).",
      "visualCue": {
        "primaryTarget": "Le filet s'est raffermi et serré au four. Le beurre d'herbe bouillonne dans la poêle. Lorsque la sonde est effectuée, le centre du point le plus épais enregistre 60 C.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Température intérieure inférieure à 55 °C. La section la plus épaisse est encore très douce lorsqu'elle est pressée avec un bout de doigt à travers une mitaine du four.",
            "action": "Retourner au four 3-4 minutes de plus. Vérifiez à nouveau la température au point le plus épais, et non le centre du journal."
          },
          {
            "state": "Perfect",
            "description": "60 C interne. Le filet se sent ferme, mais avec un léger rendement lorsqu'il est pressé. La chair s'est mise mais pas serrée. Le beurre d'herbe est doré et parfumé.",
            "action": "Retirer du four et transférer le filet sur une planche à découper pour se reposer. Verser le beurre de casserole dessus."
          },
          {
            "state": "Overdone",
            "description": "Température intérieure au-dessus de 70 C. Le filet se sent rigide et dur lorsqu'il est pressé. Les jus sur le plancher de la casserole commencent à brunir et à brûler.",
            "action": "Supprimer immédiatement. Laissez la chaleur résiduelle finir — ne la retournez pas au four. La période de repos aidera à retenir les jus restants."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur le centre du filet avec votre pouce à travers un chiffon — à 60°C, il devrait avoir l'impression de presser sur la base charnue de votre pouce avec votre main détendu ouverte. Printemps et résistance, pas rigidité."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "roasted_tenderloin"
      ],
      "outputState": "rested_tenderloin",
      "instructions": "Transférer le filet dans une planche à découper chaude et la tente en toute liberté avec du papier. Repose exactement 8 minutes. Ne pas couper plus tôt — la température augmentera de 3 degrés et les jus ont besoin de temps pour redistribuer à l'intérieur des fibres musculaires contractées.",
      "visualCue": {
        "primaryTarget": "Le filet semble se dégonfler très légèrement au fur et à mesure que les fibres se détendent, et un petit bassin de jus d'or rose se forme sur la planche à découper en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Coupe trop tôt (moins de 5 minutes). Les jus se déversent immédiatement lorsqu'ils sont coupés — les fibres sont encore contractées.",
            "action": "Vous ne pouvez pas annuler ça, mais la prochaine fois, reposez-vous plus longtemps. Couper rapidement et servir immédiatement pour minimiser la perte de jus."
          },
          {
            "state": "Perfect",
            "description": "Après 8 minutes, le filet est visiblement détendu. Une petite flaque de jus rosé a été recueillie sur la planche. La croûte est encore chaude et parfumée. Registres intérieurs 63 C.",
            "action": "Couper et servir."
          },
          {
            "state": "Overdone",
            "description": "Reposé au-delà de 20 minutes sans feuille — l'extérieur s'est refroidi et la croûte s'est adoucie.",
            "action": "Tranchez et clignotez brièvement sous une grille pendant 60 secondes pour réchauffer la surface et re-criper la croûte."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le filet reposé — il devrait se sentir nettement plus doux et plus productif qu'il ne l'a fait directement du four, signe que les fibres musculaires ont libéré leur adhérence sur les jus."
    },
    {
      "nodeId": "step_5",
      "action": "Trancher",
      "inputs": [
        "rested_tenderloin"
      ],
      "outputState": "finished_pork_tenderloin",
      "instructions": "À l'aide d'un couteau tranchant, couper le filet en médaillons de 1,5 à 2 cm d'épaisseur, en étirant sur une légère diagonale pour un visage plus large. Chaque tranche doit révéler un intérieur uniforme de rose pâle entouré de la croûte foncée. Déposer les jus de repos et le reste du beurre d'herbe sur les tranches. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Médaillons présentant un intérieur bleuâtre (l'ombre exacte d'une rose pâle) du bord au bord, entouré d'un mince anneau de croûte brun acajou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est rouge-rose profonde et brillant au centre, ressemblant à de la viande crue. Température inférieure à 58 C.",
            "action": "Ventilez les tranches sur une plaque à l'épreuve du four et retournez à un four 180 C pendant 5 minutes. Le rose sortira même sans plus de séchage."
          },
          {
            "state": "Perfect",
            "description": "Un rose-rose uniforme, comme le saumon pâle. Moistes mais pas pleurs. La croûte est intacte sur chaque tranche et les tranches tiennent leur forme.",
            "action": "Spoon jus de repos sur et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est gris blanc partout. Les tranches se sentent sèches et serrées sous le couteau. Pas de jus sur la planche.",
            "action": "Servir avec une casserole faite à partir des gouttes d'eau déglacées ou avec un généreux filet d'huile d'olive. La saveur de la croûte est encore excellente."
          }
        ]
      },
      "feelCue": "Le couteau doit glisser à travers chaque médaillon avec une résistance minimale — une presse vers l'avant douce, pas un mouvement de sciage. Si vous sentez la viande repousser contre la lame, les fibres sont trop cuites et serrées."
    }
  ]
};
