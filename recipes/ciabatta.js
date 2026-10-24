export default {
  "repoId": "master_italian_ciabatta_001",
  "parentRepoId": null,
  "slug": "ciabatta",
  "tool": {
    "kind": "dough",
    "doughId": "ciabatta"
  },
  "author": "ForkRecipe Kitchen",
  "title": "Ciabatta",
  "description": "Le pain de pantoufle — une pâte mouillée et molle fermentée avec un poolish et pliée plutôt que pétrie, cuit dans une croûte blister, pulvérisée à la farine, sur une miette, percé de trous vitreux et irréguliers. Il faut l'ouvrir et il faut la vapeur, l'odeur de crème et de blé, et remorquer comme la dentelle humide.",
  "cuisine": "Italien",
  "culture": "Lombard",
  "category": "breads",
  "tags": [
    "Ciabatta",
    "Italien",
    "pain",
    "haute hydratation",
    "Poolish",
    "à chapelure ouverte"
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
    "sweet": 1,
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
      "name": "Farine de pain (protéines élevées, ~12,5%)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine italienne Tipo 0",
        "mélange de farine de pain avec un peu de tout-usage"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau (froide, pour le poolish et la pâte)",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure sèche instantanée",
      "ratioValue": 0.6,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active, fleurie en premier",
        "Démarrage à l'aurore à 2 % (ferment de sortie)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2.2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "omit pour une miette plus maigre et plus sèche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine de semoule ou de riz",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de blé dur grossière"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Ferment",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "poolish",
      "instructions": "La veille, construire un poolish: fouetter ensemble un tiers de la farine, un poids égal de l'eau (environ 30% de farine à 100% d'hydratation), et une pincée de la levure — environ un cinquième du total. Ça devrait être une pâte à crêpes. Couvrir et laisser à température ambiante fraîche pendant 12 à 16 heures. Ce préferment long et lent est l'endroit où le goût et l'extensibilité du pain sont construits; précipitant il donne un pain fade et serré.",
      "visualCue": {
        "primaryTarget": "Une pâte bâclée, bombée, enlacée de bulles sur toute la surface, qui commence juste à couler au centre, sentant doux, leveux et peu de yaourt ou de bière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est généralement plate avec seulement quelques bulles dispersées. Ça sent la farine crue, pas la fermentation.",
            "action": "Laissez-le plus longtemps dans un endroit plus chaud. Une cuisine froide peut avoir besoin de 16 heures ou plus avant que le poolish soit prêt."
          },
          {
            "state": "Perfect",
            "description": "Risen et dôme, tout le haut couvert de bulles, avec le centre commence juste à s'écrouler vers le bas. Aroma est vineux et lactique.",
            "action": "Utilisez - le maintenant — au maximum il a la force maximale et la meilleure saveur. Mélanger immédiatement la pâte finale."
          },
          {
            "state": "Overdone",
            "description": "Le poolish s'est complètement effondré dans une pâte plate, dégonflée, fortement aigre et alcoolique, parfois avec une peau grisâtre.",
            "action": "Encore utilisable si seulement s'effondrait — procédez mais attendez - vous à un pain plus tangent. S'il sent le vernis à ongles, il surfermenté; la pâte sera molle et faible."
          }
        ]
      },
      "feelCue": "Tapez sur le bol — un billard mûr comme une mousse molle et aérée et est enfilée de bulles tout au long, pas seulement sur le dessus. Ça sent plus la bière que la pâte."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "poolish",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Ajouter le reste de la farine, de l'eau, de la levure et de l'huile d'olive au poolish et mélanger à une masse chaotique et collante — pas de vraie pétrissage, juste assez pour hydrater chaque morceau de farine. Couvrir et reposer 20 minutes (une autolyse) pour que la farine absorbe complètement l'eau et que le gluten commence à s'organiser seul. Saupoudrer ensuite le sel sur le dessus et le presser à travers la pâte avec les mains mouillées jusqu'à ce qu'il soit uniformément distribué. La pâte sera très humide et molle ; cette hydratation élevée est ce qui fait la miette ouverte de ciabatta, donc résistez à ajouter de la farine.",
      "visualCue": {
        "primaryTarget": "Une pâte humide, collante et cohésive qui s'éloigne de vos doigts en longs brins collants, mais qui s'étend dans le bol, trop lâche pour tenir une balle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des stries de farine sèche et la pâte se brise en touffes grumelées plutôt qu'en une seule masse collante.",
            "action": "Gardez doucement le mélange avec les mains mouillées jusqu'à ce qu'il ne reste plus de farine sèche, puis donnez-lui le repos autolytique."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme très humide qui s'accroche et s'étire des doigts, brillante où l'huile et le sel ont travaillé. Il s'étend pour remplir le bol.",
            "action": "Couvrir et passer à la fermentation en vrac avec des étirements."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue soupeuse et pâteuse sans étirement, souvent en mélangeant une pâte humide ou en ajoutant de l'eau.",
            "action": "Construisez la force en arrière avec des plis supplémentaires dans la prochaine étape, espacés plus étroitement. Évitez d'ajouter de la farine qui tue la miette ouverte."
          }
        ]
      },
      "feelCue": "Mouiller les mains avant de les toucher — la pâte devrait être comme de la pâte épaisse et collante qui s'accroche aux doigts. Il semblera extrêmement lâche; c'est exact pour la ciabatta."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Ferment en vrac dans une baignoire huilée pendant environ 2 à 3 heures à température ambiante chaude, renforcement de la résistance avec étirements au lieu de pétrir. Avec une main mouillée, prendre un côté de la pâte, l'étirer, et le plier sur le centre; tourner la baignoire et répéter sur les quatre côtés. Faites un ensemble complet de quatre plis toutes les 30 minutes pendant les 90 premières minutes, puis laissez la pâte monter sans gêne. Chaque pli resserre le gluten et piège le gaz; au cours de la session, la pâte molle se transforme en quelque chose de jiggly, de bouffeux et plein d'air.",
      "visualCue": {
        "primaryTarget": "Une pâte bouffée et enrobée a grosso modo doublée, jiggly et vivante lorsque la baignoire est bouchée, avec de grandes bulles visibles à travers les côtés et la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore plate et lâche avec peu de bulles, et les larmes plutôt que s'étirent pendant un pli.",
            "action": "Donnez-lui plus de temps et un autre pli doux. La chaleur la accélère — trouver une tache autour de 24-26°C."
          },
          {
            "state": "Perfect",
            "description": "En gros doublé, aéré et frémissant, tenant des plis lâches lorsqu'ils sont manipulés et bombés de grosses bulles sous la surface.",
            "action": "Arrêter de plier et procéder à la division et à l'épreuve. La pâte doit se sentir forte mais extensible."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est relevée puis a commencé à s'effondrer et à se répandre à plat, sentant fortement l'aurore, avec une surface fragile qui se dégonfle au toucher.",
            "action": "Déplacez-vous vers la façonnage immédiate et manipulez doucement — la pâte surprotégée a peu de ressort de four laissé. Réduire le temps en vrac prochain lot."
          }
        ]
      },
      "feelCue": "Au dernier pli, la pâte doit se sentir souple et en forme de ballon, s'étirer mince sans déchirer et tirer en arrière avec une tension élastique douce. Il va gonfler et se détendre lentement quand vous lâchez."
    },
    {
      "nodeId": "step_4",
      "action": "Preuve",
      "inputs": [
        "developed_dough",
        "ing_06"
      ],
      "outputState": "proofed_loaves",
      "instructions": "Farinez généreusement votre surface de travail et un canapé ou une serviette farinée avec la semoule ou la farine de riz. Tuez la pâte sans la frapper vers le bas — vous voulez garder le gaz. Poussez le haut, puis avec un couteau de banc couper en deux ou trois rectangles rugueux, maniant le moins possible. Étirez-les doucement dans une forme de pantoufle, transférez-les (à la farine vers le bas, puis retournez à la cuisson) sur le canapé fariné, et pliez le tissu entre les pains. Preuve 30 à 45 minutes jusqu'à ce que bouffi et oreiller. Entre-temps, chauffer le four à 245°C (475°F) avec une pierre ou de l'acier et une casserole à vapeur.",
      "visualCue": {
        "primaryTarget": "Des rectangles doux, gonflés et fendus qui se sont détendus et se sont légèrement répandus, oscillant comme un ballon d'eau et parsemés de bulles juste sous la surface farinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pains sont denses et fermes, tenant des bords tranchants et se sentant solides plutôt qu'aérés.",
            "action": "Donnez-leur encore 10-20 minutes. Ils doivent avoir l'air nettement gonflés et sentir la lumière avant de cuire."
          },
          {
            "state": "Perfect",
            "description": "Oreiller et jiggly, étendre à une forme de chausson détendu avec des bulles de surface montrant. Un bout de doigt fariné laisse une bosse qui revient lentement.",
            "action": "Cuire immédiatement sur la pierre chaude à la vapeur. Ne dégazez pas — la manipulation douce garde les trous."
          },
          {
            "state": "Overdone",
            "description": "Les pains se sont étendus minces et plats, la surface est devenue fragile et pétillante, et une bosse ne ressort pas du tout.",
            "action": "Cuire immédiatement et ne pas les déplacer. S'attendre à des pains flatteurs mais toujours bonne saveur; raccourcir la preuve la prochaine fois."
          }
        ]
      },
      "feelCue": "Un pain prêt ressemble à un coussin rempli de gaz — léger, agité et tendre. Un poke doux laisse une bosse qui se remplit lentement et seulement partiellement; s'il ressort juste en arrière, il a besoin de plus de temps, s'il reste mettre il est surpropriété."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "proofed_loaves"
      ],
      "outputState": "finished_ciabatta",
      "instructions": "Déposez chaque côté de farine de pain sur une pelure ou un parchemin et glissez sur la pierre chaude, en maintenant la forme du chausson. Verser l'eau bouillante dans la casserole (ou arroser les murs du four) et fermer la porte rapidement. Cuire à la vapeur pendant les 10 premières minutes pour obtenir un maximum de ressort et de cloques, puis évacuer la vapeur et cuire encore 10 à 15 minutes jusqu'à ce qu'elle soit bien dorée et crépitante. Les pains sont faits à une température interne d'environ 96-99°C (205-210°F). Refroidir complètement sur un rack — au moins une heure — avant de déchirer; la miette est toujours placée à l'intérieur.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée burnée, blister, avec de la farine, crépitant audiblement à mesure qu'elle refroidit, avec une miette aérée pleine de trous irréguliers brillants, déchirés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est blonde pâle et douce, la lumière de pain pour sa taille, et le fond semble terne quand tapoté.",
            "action": "Cuire plus longtemps avec le four ventilé. Une bonne ciabatta a besoin d'une couleur profonde et d'une croûte croustillante et résonante."
          },
          {
            "state": "Perfect",
            "description": "D'or profond avec des cloques plus foncées, une croûte mince et un tambour creux sur le fond. Terne ouverte, la miette est ouverte, brillante et élastique.",
            "action": "Refroidir complètement sur un rack avant de trancher pour échapper à la vapeur et les jeux de miettes — couper à chaud la rend gommante."
          },
          {
            "state": "Overdone",
            "description": "La croûte est très sombre à brûlée et goûte acre et amère, la miette sèche près des bords.",
            "action": "Tirez-le plus tôt la prochaine fois et baissez légèrement la chaleur après la phase de vapeur. Une croûte sombre est bonne; une croûte noire est brûlée."
          }
        ]
      },
      "feelCue": "Écoutez le chant de la croûte: un léger craquement qui refroidit est le signe d'une coquille fine et croquante. Pressez doucement; il devrait donner avec une légère croûte sur un intérieur printanier et léger. Le fond doit paraître creux lorsqu'il est frappé."
    }
  ]
};
