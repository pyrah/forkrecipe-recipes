export default {
  "repoId": "master_french_souffle_au_fromage_001",
  "parentRepoId": null,
  "slug": "souffle-au-fromage",
  "author": "ForkRecipe Kitchen",
  "title": "Fromage soufflé",
  "description": "Une colonne tremblante de Gruyère et de Parmesan qui s'élève de son ramekin comme une couronne — sa croûte craque pour révéler un intérieur fondu, oeufé fileté de muscade et de fromage aiguisé.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "eggs",
  "tags": [
    "français",
    "soufflé",
    "fromage",
    "technique",
    "œufs"
  ],
  "difficulty": 5,
  "activeTime": "45 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 2,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé (plus supplément pour graissage)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz (sans gluten)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait entier (chauffé)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "moitié et moitié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Gruyère (finement râpé)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Comté",
        "Emmental"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Parmesan (finement râpé, plus supplément pour la poussière)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Blancs d'oeufs (grands, à température ambiante)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "masse au sol"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre de Cayenne (pinche)",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": [
        "poivre blanc"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "prepared_ramekins",
      "instructions": "Préchauffer le four à 190 C (375 F) avec une grille dans le tiers inférieur. Beurrer généreusement quatre ramequins de 200 ml, enrober les côtés de coups vers le haut. Poussez l'intérieur de chacun avec le parmesan finement râpé, basculer et tapoter pour enrober uniformément, puis abattre tout excès. Placer sur une plaque de cuisson et réfrigérer jusqu'à ce que la base soit prête.",
      "visualCue": {
        "primaryTarget": "Les murs de Ramekin montrent une couche uniforme et fine de parmesan blanc-jaune sans taches nues. Le beurre doit être mat et ferme, pas humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Patches de verre nu visibles par le revêtement parmesan.",
            "action": "Re-beurrer les taches nues et la poussière à nouveau — le soufflé restera sans couverture complète."
          },
          {
            "state": "Perfect",
            "description": "L'intérieur de chaque ramekin est entièrement recouvert d'une couche sèche, même blanche dorée. Pas de beurre à la base.",
            "action": "Retourner au réfrigérateur et commencer la base de béchamel."
          },
          {
            "state": "Overdone",
            "description": "Des touffes épaisses de parmesan se sont formées au fond de l'excès.",
            "action": "Éteignez l'excès fermement avant de refroidir — une couche épaisse peut inhiber la montée vers le haut."
          }
        ]
      },
      "feelCue": "Exécutez votre bout de doigt autour de l'intérieur — il devrait se sentir comme du papier de sable fin et sec. Si votre doigt sort gras avec du fromage lâche, le ramekin est sur-enrobé."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_06",
        "ing_04",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "cheese_base",
      "instructions": "Faire fondre le beurre dans une casserole lourde à feu moyen. Ajouter la farine en même temps et remuer vigoureusement pendant 90 secondes jusqu'à ce que le roux sente la pâte cuite mais soit encore pâle. Tirer la poêle de la chaleur et verser dans le lait chaud dans un cours d'eau constant, fouetter constamment pour éviter les grumeaux. Retourner à feu moyen et fouetter jusqu'à ce que le béchamel s'épaississe à une pâte rigide et brillante — il devrait s'éloigner des parois de la poêle. Retirer du feu. Battre dans les jaunes d'œufs un à la fois, puis plier dans les deux fromages, sel, muscade et cayenne. Couvrir la surface de l'enveloppe plastique et garder au chaud.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, brillante et d'or profond qui tient un pic lorsque vous soulevez la spatule — assez dense pour se masturber sur elle-même, pas dribble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours lâche et versable. Les jaunes d'oeufs ne sont pas entièrement incorporés — jaune strié visible.",
            "action": "Retourner à feu doux et remuer constamment pendant 2 minutes jusqu'à ce qu'il épaississe et cohère."
          },
          {
            "state": "Perfect",
            "description": "La base tombe d'une spatule dans un ruban épais et lent et tient immédiatement sa forme. Le fromage est entièrement fondu; la surface est lisse et brillante.",
            "action": "Retirer du feu, presser l'enveloppe plastique directement sur la surface, et procéder au fouettage des blancs."
          },
          {
            "state": "Overdone",
            "description": "Surface grainée; la base est caillée ou présente des dépôts d'oeufs secs autour des bords.",
            "action": "Les jaunes brouillaient — fouetter dans une cuillère à soupe de lait froid hors de la chaleur pour le lisser avant de procéder. Le soufflé sera légèrement plus dense."
          }
        ]
      },
      "feelCue": "Une cuillère en bois traînée à la base de la poêle devrait laisser une ligne propre qui tient pendant plusieurs secondes — si elle coule immédiatement pour combler l'écart, laisser mijoter plus longtemps."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "ing_07",
        "ing_08"
      ],
      "outputState": "stiff_whites",
      "instructions": "Assurez-vous que le bol et le fouet sont parfaitement propres et sans graisse. Ajouter une petite pincée de sel aux blancs d'œufs. Frottez à vitesse moyenne jusqu'à ce que la mousse soit mousseuse, puis augmentez à haute et fouettez jusqu'à ce que des pics raides et brillants se forment. Les blancs doivent tenir leur forme fermement lorsque le fouet est inversé, mais les bouts peuvent se boucler si légèrement — c'est parfait. Ne pas fouetter pour sécher, pics ternes.",
      "visualCue": {
        "primaryTarget": "Des pics lumineux, blancs et enflammés qui se dressent fermement lorsque le fouet est levé et brillent comme du satin en bonne lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pics s'envolent immédiatement. La surface semble mouillée et lâche. Le bol incliné à 90 degrés fait glisser les blancs.",
            "action": "Continuez à fouetter haut pendant une minute et testez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Les pics tiennent complètement debout avec seulement la plus faible boucle à l'extrémité même. La surface brille comme des paillettes de guimauve. Le bol inversé reste mis.",
            "action": "Pliez immédiatement dans la base chaude du fromage — les blancs déflatent s'ils restent debout."
          },
          {
            "state": "Overdone",
            "description": "Les blancs ont l'air secs, crayeux et granuleux. Ils s'accrochent au fouet en masse dense et ont perdu leur éclat.",
            "action": "Le soufflé peut encore fonctionner, mais la texture finale sera plus sèche. Ajouter un jaune supplémentaire à la base pour compenser la perte de levage."
          }
        ]
      },
      "feelCue": "Un blanc bien fouetté est frais, raide et complètement inodore. Il devrait se sentir comme de la mousse de rasage — dense, léger, et pas à distance mouillé contre le dos de votre main."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "stiff_whites",
        "cheese_base"
      ],
      "outputState": "souffle_batter",
      "instructions": "Incorporer vigoureusement une grande cuillère (environ un quart) des blancs raides dans la base chaude du fromage pour l'alléger. Cette cuillère sacrificielle ouvre la texture. À l'aide d'une large spatule, plier délicatement les blancs restants dans la base en trois ajouts : couper à travers le centre, balayer le bas, et rouler les côtés, tournant le bol un quart de tour après chaque course. Arrêtez l'instant où il ne reste pas de stries blanches. Chaque pli inutile coûte l'ascenseur.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle et volumineuse de faible qualité marbrée — à peine uniforme, encore aérée, pas de stries lourdes de base visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes poches blanches de blancs non incorporés restent. La pâte a l'air à deux tons.",
            "action": "Donnez - lui deux ou trois plis plus prudents: les blancs s'effondreront s'ils sont cuits sans mélange."
          },
          {
            "state": "Perfect",
            "description": "Léger comme la mousse. La pâte tient son volume et les monticules doucement dans le bol.",
            "action": "Spoon immédiatement dans les ramequins préparés et cuire sans tarder."
          },
          {
            "state": "Overdone",
            "description": "La batterie s'est dégonflée visiblement. Il est plus dense, plus foncé, et ne tient plus de monticule — il s'étend à plat dans le bol.",
            "action": "Faites cuire quand même. Le soufflé augmentera moins considérablement mais sera encore comestible."
          }
        ]
      },
      "feelCue": "La pâte doit sentir la lumière sur la spatule, presque sans poids. S'il est lourd et dense comme des œufs brouillés, les blancs sont surpliés."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "souffle_batter",
        "prepared_ramekins"
      ],
      "outputState": "finished_souffle",
      "instructions": "Remplir chaque ramekin préparé à moins de 1 cm de la jante. Courez votre pouce autour de la lèvre intérieure de chaque ramekine pour créer une rainure peu profonde, ce qui guide le soufflé à se lever droit vers le haut plutôt que de se déplacer d'un côté. Cuire à 190 °C (375 F) pendant 12 à 14 minutes sans ouvrir la porte du four. Servir immédiatement dès qu'ils sortent — un soufflé n'attend personne.",
      "visualCue": {
        "primaryTarget": "Chaque soufflé s'est levé de 3 à 4 cm au-dessus du bord du ramekin, formant un dôme doré-brun avec un dessus légèrement fissuré. Les côtés de la coupole sont fermes; le centre très court très légèrement lorsque la grille du four est légèrement bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les soufflés se sont levés, mais tout le haut s'est considérablement serré et la surface semble pâle et presque humide.",
            "action": "Fermez doucement le four et faites cuire 2 minutes de plus — ne claquez pas la porte ou les soufflés s'effondreront."
          },
          {
            "state": "Perfect",
            "description": "Les couronnes sont profondément dorées avec des dessus fêlés. L'extérieur de 1 cm est fixé et ferme; le noyau intérieur se déplace légèrement — un centre crémeux, semblable à de la lave. L'intérieur est crépuscule et fondu.",
            "action": "Course à la table. Chaque seconde compte."
          },
          {
            "state": "Overdone",
            "description": "Les soufflés se sont levés et commencent maintenant à s'éloigner des bords. Le dôme est très sombre et la surface bombée s'est effondrée vers l'intérieur.",
            "action": "Servir immédiatement comme un soufflé fallen — la saveur est identique, seul le drame est perdu."
          }
        ]
      },
      "feelCue": "Le ramekin devrait être trop chaud pour tenir confortablement avec les mains nues, et quand vous l'amener au niveau du nez, vous serez frappé avec une vague de noix, de fromage brunissant et de vapeur d'oeuf — cette odeur est votre signal pour courir à la table."
    }
  ]
};
