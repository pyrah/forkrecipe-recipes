export default {
  "repoId": "master_french_lava_cake_001",
  "parentRepoId": null,
  "slug": "chocolate-lava-cake",
  "author": "ForkRecipe Kitchen",
  "title": "Cake de lava au chocolat",
  "description": "Un paradoxe dans un ramekin — un gâteau avec une coquille de chocolat entièrement sertie qui cache un centre sombre et fluide de pure ganache fondue, l'intérieur coulant dans une rivière lente et chaude quand la cuillère brise la croûte fine.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "desserts",
  "tags": [
    "chocolat",
    "lave",
    "fondu",
    "français",
    "dessert",
    "Cuisson",
    "élégant"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 2891,
  "forks": 312,
  "contributors": 74,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-15",
  "updatedAt": "2025-05-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 3,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, plus extra pour ramequins",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Chocolat noir (70% cacao), approximativement haché",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Chips de chocolat doux amer"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Gros œufs (ensemble)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre en poudre (givrage)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de gâteau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation de ramequins",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepared_ramekins",
      "instructions": "Beurre quatre ramequins de 180 ml (6 oz) généreusement et poussière avec de la poudre de cacao ou de la farine, en tapant l'excédent. Le revêtement beurre-coca doit être complet et même — toute tache nue et le gâteau va coller, ruiner le démolage. Réfrigérer les ramekins préparés pendant que vous faites la pâte. Les ramequins froids aident la coquille extérieure à se placer rapidement dans le four, créant ainsi la différence de température qui maintient le liquide central.",
      "visualCue": {
        "primaryTarget": "L'intérieur de chaque ramekin est uniformément recouvert d'un mince film brun cacao mat. Pas de taches nues ou brillantes. Le revêtement s'étend jusqu'à la jante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couverture mince avec taches visibles nues ou brillantes. Le beurre semble strié plutôt que uniforme. Cocoa n'a pas adhéré à certains endroits.",
            "action": "Beurre et poussière à nouveau — cette étape est la police d'assurance pour un non-mollé propre. Ne précipitez jamais la préparation de ramekin."
          },
          {
            "state": "Perfect",
            "description": "Couverture complète, mate, uniforme de la base à la jante. Quand on pointe le ramekin, aucun cacao ne tombe, il a adhéré complètement au beurre.",
            "action": "Réfrigérer les ramekins tout en faisant la pâte."
          },
          {
            "state": "Overdone",
            "description": "Une couche épaisse et épaisse de cacao avec des griffes. Elle laissera un extérieur pulvérulent sur le gâteau cuit.",
            "action": "Tapez fermement pour secouer l'excès avant de réfrigérer."
          }
        ]
      },
      "feelCue": "Courez un doigt le long de la paroi intérieure — il devrait se sentir légèrement sec et grippé, comme du papier de sable fin enrobé de cacao fin, non lissé ni nu."
    },
    {
      "nodeId": "step_2",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "chocolate_butter_base",
      "instructions": "Mélanger le beurre et le chocolat haché dans un bol thermofuge sur une casserole d'eau à peine mijotante (bain-marie). L'eau ne doit pas toucher le fond du bol. Mélanger doucement et fréquemment jusqu'à ce que le mélange soit complètement fondu et lisse — retirer de la chaleur le moment où la dernière pièce solide a fondu, car continuer à chauffer rendra le chocolat granuleux. Le mélange fini doit être brillant, fluide et sentir profondément le chocolat noir.",
      "visualCue": {
        "primaryTarget": "Un mélange de chocolat brillant, doux et uniformément foncé sans grumeaux ni grain. Il doit couler comme une sauce fine et veloutée lorsque le bol est incliné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des lumps de chocolat partiellement fondu encore visibles. Beurre et chocolat n'ont pas été entièrement incorporés — ils semblent séparés ou striés.",
            "action": "Continuer à remuer sur de l'eau à peine mijotante. Déplacez parfois le bol de la vapeur pour éviter la surchauffe."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, brillant et homogène. Il coule dans un ruban continu d'une cuillère. Un parfum de chocolat profond et propre sans amertume.",
            "action": "Retirer du feu et refroidir à la température ambiante avant d'ajouter des œufs."
          },
          {
            "state": "Overdone",
            "description": "Le chocolat s'est emparé — il a l'air grainé, terne et raide plutôt que brillant et fluide. Il peut avoir une odeur légèrement brûlée.",
            "action": "Ajouter une cuillère à soupe de crème chaude et remuer vigoureusement — cela peut parfois sauver le chocolat saisi. Si ça se calme, allez-y."
          }
        ]
      },
      "feelCue": "Le chocolat fondu doit se sentir chaud mais pas chaud à l'intérieur de votre poignet — environ la température du corps. Plus chaud que cela et il fera cuire les œufs lorsqu'il sera ajouté; plus frais et il sera épais et difficile à incorporer."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "egg_sugar_mixture",
      "instructions": "Dans un grand bol, fouetter les œufs entiers, les jaunes, le sucre en poudre, le sel et la vanille vigoureusement à la main pendant 2 minutes complètes jusqu'à ce que le mélange soit pâle, épais et rubané. Cette étape aérer la pâte et donne à la coquille extérieure sa structure légèrement cakey — sans ce fouet, le gâteau sera plus comme set ganache à travers plutôt que d'avoir une coquille définie. Le mélange devrait éclaircir sensiblement la couleur.",
      "visualCue": {
        "primaryTarget": "Le mélange est passé d'or profond à un jaune pâle et crémeux et a pratiquement doublé en volume. Lorsque le fouet est levé, il tombe dans des rubans épais et paresseux qui tiennent brièvement avant de se dissoudre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours profondément doré et mince. Pas de formation de ruban. Les bulles sont grandes et instables plutôt que fines et persistantes.",
            "action": "Continuez à fouetter — cela nécessite 2 minutes complètes d'activité vigoureuse. Utilisez un mélangeur électrique si votre bras est fatigant."
          },
          {
            "state": "Perfect",
            "description": "Pale, crémeux et aéré. L'épreuve du ruban passe — le mélange tient sa forme brièvement lorsqu'il est arrosé du fouet. Le volume a augmenté visiblement.",
            "action": "Plier dans le mélange de chocolat refroidi."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été battu si longtemps qu'il semble raide et légèrement sec, et ne coule pas en douceur. Mousse d'oeufs suraérée.",
            "action": "Procéder — l'excès d'air s'échappera pendant la cuisson et le résultat structurel est le même."
          }
        ]
      },
      "feelCue": "Lorsque vous laissez le fouet couler sur la surface, le ruban doit s'asseoir sur le dessus un moment avant de retomber lentement dans — c'est le test visuel que les œufs ont pris assez d'air pour construire la structure."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "chocolate_butter_base",
        "egg_sugar_mixture",
        "ing_06"
      ],
      "outputState": "lava_cake_batter",
      "instructions": "Verser le mélange de chocolat refroidi dans le mélange d'oeufs et plier doucement avec une spatule jusqu'à ce qu'il soit simplement combiné. Sirotez la farine sur le dessus et repliez à nouveau avec des coups minimes — 8-10 plis maximum. Le surmélange développe le gluten et durcit la coquille extérieure. La pâte doit être lisse, sombre et à peine homogène — arrêtez dès qu'il ne reste plus de traces de farine.",
      "visualCue": {
        "primaryTarget": "Pâte lisse, foncée, brillante sans stries de farine visibles. Il coule dans un ruban épais et lent. Pas de grosses bulles ou stries de chocolat non mélangé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de farine encore visibles comme des rubans pâles à travers la pâte sombre. Les couches de chocolat et d'oeuf sont encore marbrées plutôt que combinées.",
            "action": "Plier encore 3-4 fois, tourner le bol au fur et à mesure. Gardez les coups grands et délibérés."
          },
          {
            "state": "Perfect",
            "description": "Toujours sombre et brillant. Pas de stries de farine. Pas de stries chocolatées. Elle tombe dans un ruban lent, même de la spatule.",
            "action": "Diviser en ramequins préparés et cuire ou réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La batterie a été surpliée et est lisse au point d'être élastique — vous pouvez voir la pâte tirer légèrement lorsqu'elle est tombée. Le gluten s'est développé.",
            "action": "Cuire immédiatement — l'extérieur sera légèrement plus dense mais le centre fondu fonctionnera encore."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir presque aérée lorsque vous la pliez — la mousse d'œuf est toujours présente, et la pâte doit se sentir plus légère qu'elle ne l'a l'air. Une pâte lourde et dense signifie que les œufs étaient froids ou sous-volés."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "lava_cake_batter",
        "prepared_ramekins"
      ],
      "outputState": "finished_lava_cake",
      "instructions": "Remplir chaque ramequin préparé trois quarts plein. Cuire à 220°C (425°F) pendant exactement 10-12 minutes, le timing est tout. Les bords doivent être fixés et retirés des murs de ramekin, mais le centre doit visiblement se gigoler lorsque la poêle est secouée. Lancer un couteau mince autour du bord de chaque gâteau, placer une assiette chaude sur le dessus, et inverser en un mouvement décisif. Attends 10 secondes, puis lève le ramekin. Servir immédiatement — le centre continuera à se mettre en place dans les 2 minutes.",
      "visualCue": {
        "primaryTarget": "Set, plateau légèrement bombé avec surface sèche mat. Lorsque la poêle est agitée doucement, le centre de chaque gâteau oscille nettement tandis que les bords restent fermes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toute la surface supérieure tremble lorsqu'elle est secouée. Les bords ne s'éloignent pas des murs de ramekin. La pâte peut encore paraître humide et brillante au centre.",
            "action": "Retournez encore 2 minutes. La différence entre underdone et parfait ici est d'environ 2 minutes de temps de cuisson."
          },
          {
            "state": "Perfect",
            "description": "Bords fixés et mats. Le centre s'agite mais n'est pas liquide. Le dessus est bombé et sec. L'arôme est intense chocolat noir.",
            "action": "Retirer du four. Attendez 1 minute, puis retournez sur des assiettes chaudes."
          },
          {
            "state": "Overdone",
            "description": "Tout le haut est ferme et il n'y a pas de puzzle. Les bords se sont complètement éloignés et peuvent être légèrement fissurés. Aucun mouvement.",
            "action": "Inversez de toute façon — vous avez un gâteau au chocolat dense et entièrement cuit. Toujours délicieux, mais pas de lave."
          }
        ]
      },
      "feelCue": "Lorsque vous invertissez le ramekin et le soulevez, un dôme chaud de gâteau au chocolat devrait libérer proprement. En 5 secondes, une fissure doit apparaître en haut lorsque le centre fondu commence à pousser à travers — c'est le moment de servir."
    }
  ]
};
