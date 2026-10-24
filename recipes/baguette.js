export default {
  "repoId": "master_french_baguette_001",
  "parentRepoId": null,
  "slug": "baguette",
  "author": "ForkRecipe Kitchen",
  "title": "Baguette",
  "description": "La référence parisienne — une pâte lente et fermentée à froid de rien d'autre que de la farine, de l'eau, du sel, et un murmure de levure, s'est emparée d'un long pain blister avec une croûte croustillante, une miette crémeuse ouverte, remplie de trous irréguliers, et le faible parfum de blé doux que seul le temps et la vapeur peuvent construire.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "breads",
  "tags": [
    "baguette",
    "français",
    "Toux maigre",
    "Poolish",
    "croûte",
    "végétalien"
  ],
  "difficulty": 4,
  "activeTime": "1 hour",
  "totalTime": "20 hours",
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
      "name": "Farine de pain (T65 ou ~12% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine polyvalente pour une miettes plus molles",
        "Mélanger avec 5% de blé entier pour la saveur"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau (pour le poolish + pâte)",
      "ratioValue": 72,
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
        "levure sèche active (proof first)",
        "levure fraîche à 3× le poids"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel de mer gris fin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Farine de riz ou semoule (pour la poussière)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Farine polyvalente"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau bouillante (pour la vapeur du four)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "glaçons sur un plateau chaud"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fermenter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "poolish",
      "instructions": "La veille, construisez un poolish: mélangez 100 g de farine, 100 g d'eau (température ambiante) et une petite pincée de levure — environ 1/16 cuillère à café — dans une pâte molle, semblable à une pâte. Couvrir et laisser à température ambiante fraîche pendant 12 à 16 heures. Ce lent pré-ferment construit la saveur blé, peu de noix et les acides organiques qui donnent une vraie baguette son caractère, bien avant que la pâte principale soit mélangée.",
      "visualCue": {
        "primaryTarget": "Une pâte pétillante et molle qui s'est levée, bombée, et qui a juste commencé à tomber au centre, sa surface une toile de petites et grandes bulles, sentant sucrément la levure, la bière, et le blé mûr.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est plate et lente avec seulement quelques bulles dispersées. Ça sent surtout la farine crue.",
            "action": "Donnez-lui plusieurs heures de plus dans un endroit plus chaud. Une cuisine froide ralentit considérablement un poolish — la patience crée de la saveur."
          },
          {
            "state": "Perfect",
            "description": "Domé et mousseux sur toute la surface, avec une faible fossette se formant au centre où il a culminé et est sur le point de s'effondrer. Il sent aromatique et légèrement tannant.",
            "action": "Utilisez-le maintenant, au moment du pic — mélangez-le directement dans la pâte finale."
          },
          {
            "state": "Overdone",
            "description": "Entièrement effondré, soupeux et sentant fortement l'amer ou l'acétone. Les bulles ont explosé.",
            "action": "Toujours utilisable si seulement effondré, bien que le pain sera plus aigre. S'il sent le démaquillant, jetez - le et reconstruisez - il surfermenté."
          }
        ]
      },
      "feelCue": "Mélanger le poolish mûr et il doit être lâche et élastique, en tirant dans de longs brins collants avec du gaz visible piégé à l'intérieur. Elle sent l'intérieur d'une brasserie — levure, douce, légèrement alcoolique."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "poolish",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Ajouter le reste de la farine, le reste de l'eau et le reste de la levure au poolish et mélanger à une masse chaotique sans farine sèche. Repose-le de 20 à 30 minutes (autolyse) pour que la farine s'hydrate complètement et que le gluten commence à se former seul. Puis saupoudrer le sel sur le dessus et le presser et le plier jusqu'à ce qu'il soit entièrement incorporé. La pâte sera humide et collante à cette forte hydratation — résistez à ajouter de la farine. Agenouillez brièvement ou utilisez des gifles jusqu'à ce qu'elles se retrouvent dans une boule rugueuse et cohésive.",
      "visualCue": {
        "primaryTarget": "Une pâte humide, légèrement collante et cohésive qui a tiré proprement des côtés du bol dans une boule rugueuse, sans taches sèches et sans flaque d'eau libre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des stries sèches de farine, ou la pâte est grumelée et se sépare plutôt que de se tenir ensemble.",
            "action": "Continuez à mélanger et à vous reposer. Ajouter de l'eau par la cuillère à café seulement si vraiment sèche."
          },
          {
            "state": "Perfect",
            "description": "Une masse uniforme, souple et collante avec une surface légèrement rugueuse qui s'accroche aux doigts mais libère le bol. Le sel s'est dissous sans grain.",
            "action": "Couvrir et commencer la fermentation en vrac avec des plis."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue molle, soupeuse, et sans vie, due au surmélange, se déchirant dans une soupe collante qui ne va pas péter.",
            "action": "Reposez-le couvert pendant 20 minutes ; le gluten se détendrea et re-convertira. Puis procéder doucement avec des plis plutôt que de pétrir."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir vivante et élastique — collante et non collante — en se retirant lorsque vous l'étirez. Après l'entrée du sel, il se resserre sensiblement et cesse de se sentir visqueux."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "bulk_dough",
      "instructions": "Fermenter en vrac la pâte dans un récipient légèrement huilé et couvert. Au cours des 2 premières heures, donnez-lui trois ou quatre ensembles de stretch-and-folds espacés d'environ 30 minutes: mouiller votre main, soulever un côté de la pâte vers le haut et au-dessus de lui-même, tourner le bol, et répéter autour des quatre côtés. Chaque pli construit la force et piège le gaz. Après les plis, levez - vous sans gêne jusqu'à ce qu'il soit presque doublé et visiblement aéré — environ 2 à 3 heures à température ambiante totale, ou réfrigérez - le une nuit pour obtenir une saveur plus profonde.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, bouffie et jiggly qui a grandi d'environ trois quarts pour doubler, bombé et parsemé de bulles visibles sous la surface, oscillant comme une cuartrée bien définie lorsqu'elle est bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est dense et plate avec peu de bulles, lente au printemps et à peine cultivée.",
            "action": "Donnez-lui plus de temps dans un endroit plus chaud. La pâte sous-proof est serrée et gommée avec une miette fermée."
          },
          {
            "state": "Perfect",
            "description": "Léger, bombé, et plein de gaz, gigotant lorsque le conteneur est secoué. Un doigt poché laisse une bosse qui ressort lentement et seulement de côté.",
            "action": "Éteignez-le doucement pour préserver le gaz, et déplacez-vous vers la division et la façonnage."
          },
          {
            "state": "Overdone",
            "description": "Bubble mais lâche et dégonflant, aur-smelling, avec une bosse qui ne se rétablit pas du tout.",
            "action": "Façonnez - le maintenant sans délai et faites - le cuire rapidement — la pâte surproofée se répand à plat et les larmes. Manipulez très doucement pour sauver ce qui reste de gaz."
          }
        ]
      },
      "feelCue": "À chaque pli, la pâte doit se sentir plus forte et plus cohésive, allant de collant et sans forme à lisse et comme un ballon. Ripe pâte en vrac se sent oreiller et plein d'air, presque sans poids quand soulevé."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "bulk_dough",
        "ing_05"
      ],
      "outputState": "shaped_loaves",
      "instructions": "Tourner la pâte sur une surface légèrement farinée et diviser en trois morceaux d'environ 250 g chacun. Pré-former chacun de façon lâche dans un rectangle et reposer 15 à 20 minutes couvertes, de sorte que le gluten se détend. Pour former, aplatir doucement une pièce dans un rectangle, plier le tiers supérieur vers le bas et sceller, plier le tiers inférieur vers le haut et sceller, puis rouler et taper du centre vers l'extérieur dans un bâton mince de 14 pouces avec des extrémités pointues. Placer les pains sur le côté de la couture dans les plis d'un canapé fortement fariné (utiliser la farine de riz pour éviter le collage) et prouver 45 à 75 minutes jusqu'à ce qu'il soit gonflé.",
      "visualCue": {
        "primaryTarget": "Trois pains serrés, uniformément effilés, avec une peau lisse et serrée et une couture scellée, plissés et doux, mais tenant toujours une forme de torpille définie avec des extrémités pointues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pains sont fermes et denses, à peine levés, en ressortant instantanément lorsqu'ils sont pressés.",
            "action": "Preuve plus longtemps dans un endroit chaud sans brouillon. Des pains sous-protégés squattent avec une miette dense et serrée."
          },
          {
            "state": "Perfect",
            "description": "Plump et gonflé avec un délicat joggle, une dent légèrement pressé ressort lentement laissant une marque faible. La peau est tendue et lisse.",
            "action": "Plongez sur une peau ou un parchemin côté couture vers le bas, marquer et cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Étendre à plat et relâcher, la peau s'est détachée et saggy, une dent pressée restant mise.",
            "action": "Faites cuire tout de suite avec un score confiant. S'attendre à un pain plus plat et plus rustique — les baguettes surpropriétés perdent leur lift et leurs oreilles audacieuses."
          }
        ]
      },
      "feelCue": "Un pain bien en forme se sent ferme et étanche au tambour à la surface avec une peau tendue sur un noyau aéré. Forme avec une touche légère et confiante ; le dégazage trop dur s'effondre de la miette ouverte pour laquelle vous avez fermenté."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "shaped_loaves",
        "ing_06"
      ],
      "outputState": "finished_baguette",
      "instructions": "Préchauffer une pierre ou un acier à 475°F (245°C) avec un plateau vide sur le support inférieur. Transférer les pains à l'épreuve sur le parchemin. Avec un rasoir ou un lame maintenu à un angle bas de 30 degrés, faire trois ou quatre longues coupes diagonales qui se chevauchent sur la longueur de chaque pain — presque parallèles, non croisés. Faites glisser les pains sur la pierre et versez immédiatement l'eau bouillante dans le plateau de fond chaud pour inonder le four de vapeur, puis fermez la porte. Cuire 12 minutes avec de la vapeur, puis retirer le plateau, évacuer tout excès, et cuire 8 à 12 minutes de plus jusqu'à ce que l'or profond et le craquage. Laisser refroidir sur une grille pendant au moins 20 minutes — la miette est encore en place.",
      "visualCue": {
        "primaryTarget": "Un pain doré-brun profond avec une croûte boursouflée et brillante et les coupures s'ouvrent dans des «oreilles» surélevées et tranchantes; il craque audiblement et chante en refroidissant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est blonde pâle et douce, les oreilles à peine ouvertes, et le pain est lourd avec peu de couleur.",
            "action": "Gardez la cuisson — les baguettes pâles sont gommées à l'intérieur et s'évanouit rapidement. Poussez la croûte vers un véritable or profond pour la saveur et la croûte."
          },
          {
            "state": "Perfect",
            "description": "Riche croûte d'ambre à mahoganie, brillante et cloquée, avec des coupes qui ont jailli dans des oreilles crispées. Enfoncé sur le fond, il semble creux et crépite pendant qu'il refroidit.",
            "action": "Laisser refroidir sur un rack au moins 20 minutes avant de trancher afin que la miette ouverte et crépuscule puisse terminer le réglage."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'obscurcit vers le feu avec des bords brûlés amers et une odeur acride.",
            "action": "Tirez immédiatement. Une touche d'acajou profond est une bonne saveur; le noir est amer. Baissez le four à 15 degrés la prochaine fois."
          }
        ]
      },
      "feelCue": "Une baguette finie est étonnamment légère pour sa taille et la croûte craque fort lorsqu'elle est pressée. Maintenez-le à l'oreille après la cuisson — un pain bien cuit chante littéralement, la croûte tictant et se cassant à mesure qu'elle refroidit. La miette se déchire en brins de crème irréguliers et brillants."
    }
  ]
};
