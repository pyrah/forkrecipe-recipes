export default {
  "repoId": "master_french_paindecampagne_001",
  "parentRepoId": null,
  "slug": "pain-de-campagne",
  "author": "ForkRecipe Kitchen",
  "title": "Douleur de Campagne",
  "description": "Un pain de campagne français classique avec une croûte de farine brûlée qui éclate à la première coupe – un doux tang du sourd, une miette ouverte et irrégulière filetée de la noix de blé entier et de seigle.",
  "cuisine": "Français",
  "culture": "Lyonnaise",
  "category": "breads",
  "tags": [
    "douleur de campagne",
    "français",
    "Pâtes alimentaires",
    "pain de pays",
    "artisan",
    "farine mélangée"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "18 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (T65 ou 12% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine polyvalente"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine de blé entier",
      "ratioValue": 18,
      "defaultUnit": "%",
      "substitutions": [
        "farine d'épeautre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine de seigle foncé (T170)",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de seigle entière"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau fraîche (22 C)",
      "ratioValue": 72,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Démarrage actif à l'aurore (hydratation à 100%)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Autolyse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "autolyse_dough",
      "instructions": "Mélanger les trois farines dans un grand bol et fouetter brièvement pour distribuer le blé entier et le seigle uniformément à travers la farine de pain. Ajouter l'eau fraîche et mélanger avec les mains mouillées ou une spatule raide jusqu'à ce qu'aucune farine sèche ne reste. La pâte sera rugueuse et chaotique — plus humide qu'un simple pain blanc parce que les farines de grains entiers continueront à absorber de l'eau. Couvrir soigneusement et reposer 45 minutes. Pas d'entrée, pas encore de sel. Cette autolyse permet aux particules de grains entiers d'hydrater complètement et au gluten de commencer à s'organiser sans agitation.",
      "visualCue": {
        "primaryTarget": "Après 45 minutes : une pâte qui a lissé sensiblement. La texture rugueuse et râpée a cédé la place à une masse cohésive et légèrement collante avec un sommet en forme de dos.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rugueux et stringé après 45 minutes; déchire facilement; les particules de grains entiers se sentent vives et non hydratées.",
            "action": "Reposez-vous encore 20 minutes. Le blé entier et le seigle absorbent l'eau lentement."
          },
          {
            "state": "Perfect",
            "description": "Lisse, cohésif et s'étire quelques centimètres sans déchirer. La pâte a une faible odeur de blé entier. Il tient sa forme dans le bol.",
            "action": "Ajouter le démarrage et le sel et effectuer le pli de laminage."
          },
          {
            "state": "Overdone",
            "description": "La toux se sent légèrement chaude et a une légère amerie — la fermentation a commencé sans entrée.",
            "action": "Procéder immédiatement et réduire le temps de fermentation en vrac de 30 minutes."
          }
        ]
      },
      "feelCue": "Après l'autolyse, la pâte devrait se sentir nettement plus douce qu'après le mélange — les particules de grains entiers se sont adoucies et le gluten a commencé à s'organiser sans aucun effort de votre part. C'est presque soyeux."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "autolyse_dough",
        "ing_05",
        "ing_06"
      ],
      "outputState": "mixed_dough",
      "instructions": "Versez le démarreur actif sur la pâte autolyse; dispersez le sel sur le dessus. Effectuer un pli de laminage : humidifier légèrement la surface de travail, répartir la pâte dans un mince rectangle, plier en tiers, puis en tiers dans l'autre sens, en la ramenant dans le bol. Suivez avec un ensemble de stretch-and-folds pour intégrer pleinement tout. La pâte se sentira d'abord lâche et glissante comme le démarreur la rend plus humide — c'est exact. Le sel le serrera au cours des prochaines heures.",
      "visualCue": {
        "primaryTarget": "Couleur uniforme sans stries de cristaux de sel plus légers ou non dissous. La toux s'est ressaisie dans une masse cohésive après la lamination.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Stries de sel blanc visible; rubans de départ pâles non mélangés; la pâte semble marbrée.",
            "action": "Continuer le pliage — le sel et le démarreur doivent être complètement incorporés avant la fermentation en vrac."
          },
          {
            "state": "Perfect",
            "description": "Uniforme. La pâte est molle mais cohérente, ressort lentement lorsqu'elle est cuite. Ça sent agréablement aigre de l'entrée.",
            "action": "Couvrir et commencer la fermentation en vrac avec des étirements."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé au point de déchirer — la lamination était trop agressive ou la pâte trop froide.",
            "action": "Reposez-vous 20 minutes avant de commencer les jeux d'étirement."
          }
        ]
      },
      "feelCue": "Juste après l'incorporation, la pâte se sentira lâche et presque liquide dans les endroits — le démarreur ajoute l'hydratation. Le premier stretch-and-fold se sentira déjà un peu plus organisé que le dernier."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "mixed_dough"
      ],
      "outputState": "bulk_dough",
      "instructions": "Couvrez le bol. Au cours des 4 prochaines heures, effectuer quatre séries de stretch-and-folds, un ensemble toutes les 45-60 minutes. Après le dernier set, laisser non perturbé pendant 1-2 heures de plus jusqu'à ce que le vrac soit complet. Fermentation totale en vrac: 5–6 heures à 21–23 C. La douleur de campagne bénéficie d'un volume plus long et plus frais qu'un pur aurard blanc — les farines de grains entiers créent une activité enzymatique plus complexe et le seigle contribue à un tang doux et accessible.",
      "visualCue": {
        "primaryTarget": "Augmentation en volume de 60 à 70 %. La pâte est visiblement aérée, bombée en haut, avec de petites bulles traçant la paroi du bol. La surface semble légèrement plus lisse que le sarcelle blanc en raison du son des farines de grains entiers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Augmentation de moins de 40 % du volume après 5 heures. La toux est encore dense et à peine bouchée.",
            "action": "Étendre le volume de 1 heure et passer à un environnement plus chaud. Les farines entières ralentissent la fermentation."
          },
          {
            "state": "Perfect",
            "description": "Augmentation de 65 à 70 %, dôme visible, bulles le long de la paroi de la cuvette, saute en cas de tremblement. Ça sent agréablement aigre et noisette.",
            "action": "Procédez à la mise en forme et à la preuve du froid."
          },
          {
            "state": "Overdone",
            "description": "Le dôme s'est effondré; la surface est collante et humide; l'odeur d'alcool vive domine.",
            "action": "Formez immédiatement et à l'épreuve du froid seulement 8-10 heures."
          }
        ]
      },
      "feelCue": "A la fin de la pâte en vrac, la pâte doit se sentir aérée et élastique, elle s'étire facilement en longs brins lacés lorsque vous arrivez avec des mains mouillées. Vous pouvez voir des bulles éclater en le soulevant."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "bulk_dough"
      ],
      "outputState": "shaped_loaf",
      "instructions": "Verser délicatement la pâte en vrac sur une surface légèrement farinée. Pré-former en rond en pliant les bords vers le centre, puis en retournant la couture vers le bas. Repos à découvert 20 minutes. Forme finale: Flip, s'étirer doucement à un ovale, plier les deux côtés au centre, rouler vers vous avec les mains cousues sous pour construire la tension de surface. Pour l'aspect traditionnel de la douleur de campagne, placez le bord de la couture dans une banneton fortement poussiéreuse avec un mélange de farine et de farine de seigle. Cold-proof au réfrigérateur 10–14 heures. Avant de cuire, époussetez le dessus du pain (qui sera le fond de la banneton) avec plus de farine de seigle — il crée la croûte farineuse caractéristique.",
      "visualCue": {
        "primaryTarget": "Un rond tat, à haute dominance assis en toute confiance dans le banneton, couture cousue en dessous et la surface assez tat pour résister à un poke doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain se répand latéralement, le dôme est plat plutôt que haut, la couture est visible du côté.",
            "action": "Reformage : utilisez un racleur de banc pour retirer la pâte et la reresser. Travailler rapidement avec une main confiante."
          },
          {
            "state": "Perfect",
            "description": "Dôme élevé, couture scellée, bonne tension de surface. Surface épurée. Il est assis dans le banneton sans s'étendre.",
            "action": "Couvrir et réfrigérer 10 à 14 heures pour le retard froid."
          },
          {
            "state": "Overdone",
            "description": "La surface est déchirée par une tension excessive; la peau de gluten est visiblement endommagée.",
            "action": "Pliez les larmes doucement fermé et la preuve froide. La croûte se formera autour des dégâts."
          }
        ]
      },
      "feelCue": "Une douleur bien en forme de campagne se sent comme un sac de haricots ferme et rempli — lourd, arrondi, et avec suffisamment de tension qui presse la surface avec un bout de doigt entraîne un retour lent plutôt qu'un ressort-retour instantané."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "shaped_loaf"
      ],
      "outputState": "finished_pain_de_campagne",
      "instructions": "Préchauffer un four hollandais à 250 C (480 F) pendant 45 minutes. Marquer le pain froid avec un lame : une barre oblique centrale ou un motif de coupe croisée. Baisser dans le four hollandais et cuire couvert 20 minutes, puis découvert à 220 C (425 F) pendant 25-30 minutes jusqu'à ce que la croûte soit profondément brûlée avec des taches de farine plus légères (où la farine de banneton n'a pas caramélisé). La farine de seigle dans la croûte reste mate et pâle contre la farine de pain plus foncée — ce contraste est la signature visuelle d'une douleur de campagne.",
      "visualCue": {
        "primaryTarget": "Une croûte brunâtre ambrée avec des taches de poudre de farine mate pâle où le patron de banneton a été transféré. Le score s'est ouvert de façon spectaculaire. La croûte est profondément caramélisée, pas pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle, à peine caramélisée. Le tapotage du fond semble dense. Les taches farine-poussière ne contrastent pas encore avec la couleur de la croûte.",
            "action": "Le four a découvert 5 à 8 minutes à 220 °C. La température interne devrait atteindre 96 à 98 °C."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-brun avec visiblement des taches de farine plus légères. Le score a considérablement fleuri. Un bruit creux en bas. La cuisine sent le blé caramélisé et l'aurore.",
            "action": "Laisser refroidir sur une grille au moins 1 heure. Le léger tang se développe complètement à mesure que la miette se refroidit."
          },
          {
            "state": "Overdone",
            "description": "La croûte presque noire, l'odeur de farine brûlée, la croûte est très rigide et s'éloigne de la miette.",
            "action": "Refroidir et couper. La miette sera excellente."
          }
        ]
      },
      "feelCue": "Au four, la douleur de campagne est plus légère qu'elle n'en a l'air : la miette ouverte est pleine de poches d'air. La croûte devrait fléchir et craqueler pendant qu'elle refroidit sur le rack, libérant une série de minuscules pops et sifflements."
    }
  ]
};
