export default {
  "repoId": "master_french_brioche_001",
  "parentRepoId": null,
  "slug": "brioche",
  "tool": {
    "kind": "dough",
    "doughId": "brioche"
  },
  "author": "ForkRecipe Kitchen",
  "title": "Brioche",
  "description": "Le plus riche des pâtes enrichies — un pain brillant et ambre profond, traversé de beurre, d'œufs et d'un ferment froid lent qui se détache en brins dorés et des odeurs de brioche grillée au moment où vous le déchirez.",
  "cuisine": "Français",
  "culture": "Pays-Bas",
  "category": "breads",
  "tags": [
    "brioche",
    "français",
    "enrichi",
    "Viennoiserie",
    "beurre",
    "laminés"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "18 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (protéines élevées, 12–13%)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Type 45 / Farine de pâtisserie française pour une miette plus fine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Oeufs entiers, froids",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": [
        "1 jaune par 2 œufs entiers pour une miette plus riche et plus dorée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait entier, froid",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": [
        "eau pour une miette plus légère"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure fraîche",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "1,5% levure sèche instantanée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": [
        "miel pour une miette plus douce et plus aromatique"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé, frais mais souple (82% de matières grasses)",
      "ratioValue": 50,
      "defaultUnit": "%",
      "substitutions": [
        "bon beurre cultivé pour extra tang"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Jaune d'oeuf battue avec une touche de crème (lavage des œufs)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "oeuf entier battu avec une pincée de sel"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Dans un mélangeur de stand avec le crochet de pâte, combiner la farine, les oeufs froids, le lait froid, la levure fraîche émiettée, le sucre et le sel. Gardez le sel et la levure de toucher directement jusqu'à ce qu'ils frappent la farine. Mélanger à basse température pendant 3 à 4 minutes jusqu'à ce qu'il n'y ait pas de farine sèche et qu'une pâte rugueuse et collante se forme. Tout reste froid — la brioche est une bataille contre la chaleur, et la pâte ne devrait jamais passer à environ 24°C / 75°F avant l'entrée du beurre.",
      "visualCue": {
        "primaryTarget": "Une masse collante, collante et uniformément hydratée qui s'accroche au crochet et au bol, sans tache de farine sèche et sans réservoir d'oeufs lâches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de farine sèche restent et un œuf lâche lèche le fond du bol.",
            "action": "Mélanger 30 à 60 secondes de plus en bas jusqu'à cohésion. Grattez le bol pour attraper de la farine sèche cachée dans les coins."
          },
          {
            "state": "Perfect",
            "description": "Une seule pâte rugueuse et piquante ramassée autour du crochet, brillante avec de l'œuf mais tenant ensemble comme une seule masse.",
            "action": "Passez directement au stade de développement du gluten — ne vous reposez pas encore."
          },
          {
            "state": "Overdone",
            "description": "La pâte est déjà lisse et élastique et elle est chaude au toucher.",
            "action": "Vous avez trop mélangé à ce stade; refroidir le bol pendant 15 minutes avant d'ajouter du beurre afin que la pâte ne surchauffe pas plus tard."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir fraîche, lourde et obstinément collante, comme de l'argile à modeler humide. S'il se sent même légèrement chaud, réfrigérer le bol avant de continuer; chaleur ici signifie pain gras plus tard."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Agenouillez à vitesse moyenne pendant 8 à 12 minutes jusqu'à ce que la pâte soit lisse, très élastique et tire proprement des côtés du bol en une seule gifle. Vous construisez un fort réseau de gluten MAINTENANT, avant que la graisse enrobe les protéines. Arrêter et étirer une petite pièce dans une vitre — elle devrait être mince à translucidité sans déchirer. Développez le gluten entièrement ici; vous ne pouvez pas le construire une fois le beurre entré.",
      "visualCue": {
        "primaryTarget": "Une pâte brillante et printanière qui gifle le bol et s'enlève propre, s'étirant dans une mince vitre translucide qui laisse passer la lumière sans déchirer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte colle encore aux parois du bol et une pièce étirée se déchire rapidement dans une épaisse feuille nuageuse.",
            "action": "Continuez à pétrir en 2 minutes, en vérifiant la fenêtre à chaque fois. Pause si le bol se réchauffe après 26°C / 79°F."
          },
          {
            "state": "Perfect",
            "description": "Doux et satiné, giflant rythmiquement contre le bol et défrichant les côtés ; la vitre s'étend sur du papier-fin et translucide.",
            "action": "Commencez à ajouter le beurre, un bouton à la fois."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue molle, collante et déchiquetée au lieu de s'étirer — le gluten s'est brisé, souvent par surchauffe.",
            "action": "Refroidissez-le dur pendant 30 minutes et procédez doucement; la pâte fortement surcollée ne peut pas être complètement secourue, mais le repos froid l'aide à se raffermir."
          }
        ]
      },
      "feelCue": "Écoutez la gifle rythmique de la pâte contre le bol — ce son est le signal que le gluten est prêt. La pâte doit se sentir tendue et printanière, rebondissant rapidement lorsqu'elle est cuite."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "developed_dough",
        "ing_07"
      ],
      "outputState": "buttered_dough",
      "instructions": "Avec le mélangeur sur moyen-doux, ajouter le beurre frais et souple un bouton de cuillère à soupe à la fois, laissant chaque pièce disparaître dans la pâte avant d'ajouter le suivant — cela prend 5 à 10 minutes. La pâte aura l'air cassée et liquéfiée au début; continuer et elle se ré-assemble dans une masse brillante et souple. Ajouter le beurre lentement afin qu'il soit stratifié dans le gluten plutôt que de le graisser. Terminer lorsque la pâte est satinée, entièrement homogène, et retirer à nouveau le bol.",
      "visualCue": {
        "primaryTarget": "Une pâte très brillante, dorée et élastique avec chaque trace de beurre absorbée – lisse comme du satin et tirant proprement des côtés du bol une fois de plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des frottis ou des taches visibles de beurre non incorporé sillonnent la pâte et elle est grasse et lâche.",
            "action": "Continuez à mélanger jusqu'à ce que le beurre disparaisse; s'il reste gras, vous ajoutez le beurre trop vite — ralentissez et laissez chaque addition absorber."
          },
          {
            "state": "Perfect",
            "description": "Lisses, brillants et élastiques, éclaircissant les parois du bol, avec un léger reflet frais et aucun beurre lâche nulle part.",
            "action": "Rond dans une boule, couvrir, et passer au ferment froid."
          },
          {
            "state": "Overdone",
            "description": "La pâte est chaude (au-dessus de 27°C / 81°F), soupeuse et grasse, avec du beurre qui pleure aux bords.",
            "action": "Arrêter immédiatement et réfrigérer 30 minutes pour raffermir la graisse, puis donner quelques tours lents pour réémulsionner avant la mise à l'épreuve."
          }
        ]
      },
      "feelCue": "La pâte passe par une phase laid et cassée qui a l'impression qu'elle ne se rassemblera jamais — croyez - la et continuez. La pâte finie doit se sentir fraîche, souple et légèrement collante, comme du cuir doux, jamais grasse ou chaude."
    },
    {
      "nodeId": "step_4",
      "action": "Ferment",
      "inputs": [
        "buttered_dough"
      ],
      "outputState": "proofed_dough",
      "instructions": "Reposez la pâte pendant 1 heure à température ambiante, puis pliez-la sur elle-même, pressez à plat, couvrez bien et réfrigérez pendant au moins 8 heures et jusqu'à 24. Ce long ferment froid n'est pas négociable : il raffermit le beurre pour que la pâte soit exploitable, approfondit la saveur avec un léger tang, et ralentit la levure pour une miette uniforme et fine. Le lendemain, divisez, formez (une tressée, un moule cannelé, ou des boules en étain), et prouvez à température ambiante chaude, 24–26°C / 75–79°F, jusqu'à presque doubler et jiggly.",
      "visualCue": {
        "primaryTarget": "Après le ferment froid, une pâte ferme, froide et lisse qui manie comme un mastic frais; après la dernière preuve, un pain d'oreiller, levé qui oscille et ressort lentement lorsqu'il est poché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain en forme est dense et serré, et un poke doux ressort instantanément et complètement.",
            "action": "Continuez à vérifier en 20 minutes. Brioche froide à partir des épreuves du réfrigérateur lentement — être patient, il peut prendre 2 à 3 heures."
          },
          {
            "state": "Perfect",
            "description": "Le pain a presque doublé, semble gonflé et oreiller, et un poke léger laisse une bosse qui se remplit de nouveau lentement et seulement de côté.",
            "action": "Lavez les œufs et faites cuire à la fois — la brioche surprotégée s'effondre dans le four."
          },
          {
            "state": "Overdone",
            "description": "Le pain semble gonflé et lâche, sent le boozy, et un poke laisse une bosse qui ne ressort pas du tout.",
            "action": "Cuire immédiatement et doucement; ce sera un toucher plus grossier mais toujours bon. La prochaine fois, tirez-la de la preuve plus tôt."
          }
        ]
      },
      "feelCue": "Tout droit depuis le réfrigérateur, la pâte doit être froide et ferme, comme de l'argile fraîche. Un pain entièrement éprouvé se sent délicat et rempli d'air, tremblant comme une crème de set quand on pique la poêle."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "proofed_dough",
        "ing_08"
      ],
      "outputState": "finished_brioche",
      "instructions": "Badigeonner délicatement et soigneusement le pain d'œuf-jaune, en entrant dans chaque couture sans le dégonfler. Cuire à 180°C / 350°F pendant 25 à 40 minutes selon la taille, jusqu'à ce que l'acajou-brun profond et la température interne lisent 88–90°C / 190–195°F. Tente lâche avec de la feuille si elle brunit trop vite — le haut sucre et l'oeuf rendent la brioche rapidement. Laisser refroidir complètement sur un rack avant de le trancher; le couper réchauffe la miette tendre.",
      "visualCue": {
        "primaryTarget": "Une croûte d'acajou brillante et profonde qui semble creuse lorsqu'on la tape sur le fond, avec une miette dorée à plumes qui se détache en brins doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle et le pain est lourd; le centre se trouve en dessous de 85°C / 185°F et la croûte est gommante.",
            "action": "Retourner au four et cuire, vérifier la température toutes les 5 minutes. Tente avec feuille si le dessus est déjà sombre."
          },
          {
            "state": "Perfect",
            "description": "Riche, même acajou briller partout, base à sonner creux, température intérieure 88–90°C / 190–195°F, miettes printanières et tendres.",
            "action": "Laisser refroidir complètement sur une grille pendant au moins une heure avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "La croûte est très foncée, s'accroupissant vers l'amère et fragile, et la croûte est sèche près de la croûte.",
            "action": "Couvrir d'une serviette propre car elle refroidit pour adoucir la croûte, et faire griller ou utiliser des tranches de pain ou de pain."
          }
        ]
      },
      "feelCue": "Toute la cuisine doit sentir le beurre chaud et les oeufs grillés. Tapez sur la base refroidie — un coup creux clair signifie que c'est fait. Résistez à couper jusqu'à ce qu'il soit complètement frais; la brioche chaude compresse et gomme sous le couteau."
    }
  ]
};
