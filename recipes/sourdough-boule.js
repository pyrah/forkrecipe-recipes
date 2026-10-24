export default {
  "repoId": "master_american_sourdough_boule_001",
  "parentRepoId": null,
  "slug": "sourdough-boule",
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Boule",
  "description": "Un pain de campagne à forte hydratation né de levures sauvages et de patience — sa croûte se brise comme de la porcelaine, sa miette s'ouvre dans des grottes spectaculaires et irrégulières qui capturent le beurre et tiennent la confiture. C'est le pain quotidien du Pacifique Nord-Ouest : naturellement levain, profondément aromatisé, amer, sans apologétique.",
  "cuisine": "Américain",
  "culture": "Pacifique Nord-Ouest",
  "category": "breads",
  "tags": [
    "pain",
    "Pâtes alimentaires",
    "levain naturel",
    "végétalien"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "24 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (12–13% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de gluten",
        "tipo 0 farine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau (température ambiante, 72-75°F)",
      "ratioValue": 75,
      "defaultUnit": "%",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Démarrage actif à l'aurore (hydratation à 100%)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "démarrage rigide à 25%"
      ]
    },
    {
      "ingId": "ing_04",
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
        "ing_02"
      ],
      "outputState": "autolysed_dough",
      "instructions": "Mélanger la farine et l'eau dans un grand bol. Mélanger à la main jusqu'à ce qu'il ne reste plus de farine sèche, ce qui prend environ 2 minutes de mélange rugueux. La pâte sera chaotique et rugueuse, presque réticente. Couvrir et reposer à température ambiante pendant 30 à 60 minutes. Pendant ce reste, les enzymes de la farine commencent à décomposer les protéines et l'amidon, et les liaisons au gluten se forment sans aucun effort mécanique. Quand vous retournerez à la pâte, il aura visiblement lissé et détendu.",
      "visualCue": {
        "primaryTarget": "Une masse rugueuse et inégale lorsque vous commencez — après le reste, la surface est nettement plus lisse, la pâte légèrement bombée, avec une odeur propre de lin de blé humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rampé et collant avec des taches sèches visibles ou une odeur farineuse après le reste.",
            "action": "Donnez-lui encore 15 minutes de couverture — la farine a besoin de plus de temps pour absorber complètement l'eau avant d'ajouter du sel."
          },
          {
            "state": "Perfect",
            "description": "Cohésif, légèrement collant et nettement plus lisse que lorsque vous avez commencé. Lorsque vous tirez une pièce, elle s'étire dans une feuille translucide avant de déchirer.",
            "action": "Ajouter le démarreur et le sel et passer à l'étape de pliage."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est assise trop longtemps et commence à sentir légèrement aigre, se mouvant et presque collant.",
            "action": "Procéder immédiatement — l'horloge de fermentation a commencé tôt; le temps de fermentation en vrac sera plus court."
          }
        ]
      },
      "feelCue": "Avant le reste, il vous combat — collant et inébranlable. Après, il se sent comme du cuir chamois doux : souple, légèrement chaud, laissant place à des mains propres."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "autolysed_dough",
        "ing_03",
        "ing_04"
      ],
      "outputState": "bulk_fermented_dough",
      "instructions": "Ajouter le démarreur actif et disperser le sel sur la surface de la pâte. Rincer le sel avec les doigts, puis effectuer une série de 4 stretch-and-folds: mouiller votre main, atteindre sous un côté de la pâte, l'étirer jusqu'à ce que vous ressentiez la résistance, puis le plier sur le dessus. Faites tourner le bol à 90° et répétez tout autour. Faites cela pour 4 tours au total, espacés de 30 minutes. Après le dernier pli, laisser le ferment en vrac de pâte non perturbé à 75–78°F (24–26°C) pendant un total de 4–5 heures à partir de l'ajout du démarreur, jusqu'à ce qu'il ait augmenté de 50–75 % et soit visiblement bouilli.",
      "visualCue": {
        "primaryTarget": "Après le pli final et à travers le repos en vrac: la pâte doit dômer doucement dans le bol, avec un réseau de bulles visibles à travers les murs, sentant agréablement le yogourt et le blé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Petit gain de volume après 5 heures; la pâte semble encore dense et plate, avec peu de bulles.",
            "action": "Déplacez la pâte vers un endroit plus chaud — 78-80°F — et attendez encore une heure. Ne pas procéder à la formation jusqu'à ce que vous voyez au moins 50% d'augmentation de volume."
          },
          {
            "state": "Perfect",
            "description": "La toux a grandi de 50 à 75 %, est domptée et jiggly, couverte de bulles de surface, et s'éloigne proprement des parois du bol lorsqu'elle est levée.",
            "action": "Tourner doucement sur une surface non affectée pour pré-former."
          },
          {
            "state": "Overdone",
            "description": "Le dôme a culminé et a commencé à s'effondrer; la pâte sent fortement acide et se sent lâche et presque liquide.",
            "action": "Formez immédiatement et raccourcissez la preuve finale — la pâte a surfermenté mais peut encore produire du bon pain si vous bougez rapidement."
          }
        ]
      },
      "feelCue": "À chaque pli successif, la pâte se transforme d'une masse collante, réticente à quelque chose de lisse et plein de vie — par pli 4, elle devrait s'éloigner du bol comme un oreiller chaud, léger et aéré entre vos paumes."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "bulk_fermented_dough"
      ],
      "outputState": "shaped_boule",
      "instructions": "Tournez la pâte sur une surface légèrement farinée. Pliez les bords vers le centre, puis retournez-le côté couture vers le bas. En utilisant les deux mains coupées autour de la pâte, faites le glisser vers vous à travers le banc avec une légère pression vers le bas — la friction resserre la surface. Répétez ce mouvement 4-5 fois, en tournant légèrement chaque passe, jusqu'à ce que la boule ait un sommet lisse et tendu sans larmes. Transférer le bord de la couture dans une banneton bien fermentée (la farine de riz est idéale) ou dans un bol à la farine doublé d'une serviette à thé fariné. La boule doit avoir une forme ronde et ne pas sasser latéralement.",
      "visualCue": {
        "primaryTarget": "Un hémisphère lisse et tendu avec une surface qui attrape uniformément la lumière — pas de rides, pas de larmes, pas de coutures visibles sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface lisse, ridée avec plis visibles et la pâte s'étendant latéralement dès qu'elle est placée dans le banneton.",
            "action": "Retirez-vous de la banneton, retournez sur le banc et faites glisser à nouveau avec une friction plus délibérée. La surface doit être tendue avant le retard."
          },
          {
            "state": "Perfect",
            "description": "Un dôme tendu qui tient sa forme propre, printanière à un toucher léger et avec une surface qui ressemble à de la soie étirée.",
            "action": "Couvrir avec une enveloppe en plastique ou un capuchon de douche et transférer au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La surface a déchiré — de petites larmes blanches apparaissent là où le gluten a cédé pendant la formation.",
            "action": "Arrêtez de façonner immédiatement, laissez reposer 20 minutes, puis reformer doucement sans tension supplémentaire. Des larmes mineures scelleront le four."
          }
        ]
      },
      "feelCue": "La boule correctement façonnée devrait se sentir comme un ballon ferme — taute partout, printanière lorsque vous appuyez légèrement sur un doigt dans le haut, avec le gaz intérieur à peine contenu. Si elle se sent dense et lourde, la forme est trop serrée."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "shaped_boule"
      ],
      "outputState": "cold_retarded_boule",
      "instructions": "Réfrigérer la boule en forme, couverte, pendant 10 à 16 heures (la nuit est idéale). Le retard froid ralentit la fermentation tout en permettant au goût aigre de se développer et à la pâte de se raffermir pour un score plus propre. La pâte n'a pas besoin d'être radicalement différente après le retard — une légère augmentation de la taille est normale. Cuire directement du réfrigérateur sans réchauffement à la température ambiante; la pâte froide marquera plus proprement.",
      "visualCue": {
        "primaryTarget": "Après le froid retard: la boule devrait paraître légèrement plus grande que quand elle est entrée, avec une surface sèche et tendue de l'air du réfrigérateur — pas visqueuse, pas effondrée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La boule est solide, sans élévation visible, et la pâte est très raide du froid.",
            "action": "La pâte a peut - être été trop froide — laissez - la reposer à température ambiante pendant 30 minutes, mais non plus avant de marquer et de cuire."
          },
          {
            "state": "Perfect",
            "description": "Une légère augmentation de la taille, ferme mais non rigide au toucher, avec une surface extérieure sèche qui tient une impression du bout des doigts brièvement.",
            "action": "Score et cuire immédiatement à partir du froid — ne pas tempérer."
          },
          {
            "state": "Overdone",
            "description": "La boule est surproofée même au froid : la surface est fissurée ou la pâte est douce et se presse sans retomber.",
            "action": "Cuire immédiatement, aussi doucement que possible, sans s'attendre à une source de four dramatique — le pain sera encore bon mais plat."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme de l'argile froide, ferme, légèrement résistante, mais non congelée. Lorsque vous appuyez sur un bout de doigt dans le fond du pain, il laisse une impression nette sans déborder."
    },
    {
      "nodeId": "step_5",
      "action": "Score",
      "inputs": [
        "cold_retarded_boule"
      ],
      "outputState": "scored_boule",
      "instructions": "Placer un four néerlandais au four et préchauffer à 500°F (250°C) pendant au moins 45 minutes. Lorsque le four est chaud, retirer la boule du réfrigérateur. Couper un grand carré de parchemin pour agir comme une élingue. Déposez la bordure de la boule froide sur le parchemin. À l'aide d'un couteau à pain lamellé ou tranchant maintenu à un angle de 30 à 45°, marquez un seul arc de confiance à travers le haut — l'oreille — avec une course continue. La profondeur doit être d'environ 1⁄2 pouce (1,2 cm). Des notes décoratives supplémentaires peuvent être ajoutées perpendiculairement, mais l'oreille principale est la soupape de pression.",
      "visualCue": {
        "primaryTarget": "Une coupe nette et décisive – la pâte s'ouvre le long de la ligne de partition immédiatement, révélant un intérieur plus léger. Les bords de la coupe s'enroulent légèrement vers le haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La lame s'est traînée et s'est déchirée, laissant une entaille irrégulière qui s'est refermée.",
            "action": "Avec une lame très froide, très tranchante, maintenue à angle raide, faire une coupe plus décisive à côté de la première. Le four guérira la plupart des larmes de surface."
          },
          {
            "state": "Perfect",
            "description": "Un arc propre, 4-5 pouces de long et 1⁄2 pouce de profondeur, avec des bords de curling et un aperçu visible de l'intérieur gazeux. La pâte ne dégonfle pas.",
            "action": "Soulever avec le parchemin et descendre dans le four chaud hollandais."
          },
          {
            "state": "Overdone",
            "description": "Vous avez marqué trop profond — plus de 3⁄4 de pouce — et la pâte s'est dégonflée visiblement, s'écroulant vers l'intérieur le long de la coupe.",
            "action": "Cuire de toute façon; le pain sera encore excellent, bien que le ressort du four et l'oreille puissent être réduits."
          }
        ]
      },
      "feelCue": "Score en un seul coup avec la confiance d'un chirurgien — l'hésitation traîne la lame et les larmes. La pâte froide n'offre presque aucune résistance à un lamellé aigu : elle devrait avoir envie de couper à travers du beurre réfrigéré."
    },
    {
      "nodeId": "step_6",
      "action": "Cuire",
      "inputs": [
        "scored_boule"
      ],
      "outputState": "finished_sourdough_boule",
      "instructions": "Abaissez la boule sur son parchemin dans le four hollandais préchauffé. Couvrir avec le couvercle et cuire au four à 500°F pendant 20 minutes (la vapeur de la pâte crée l'environnement de source du four). Retirer le couvercle, laisser tomber la température à 460°F (238°C) et cuire 20 à 25 minutes de plus à découvert jusqu'à ce que la croûte soit un brun acajou profond. Retirer du four néerlandais et laisser refroidir sur une grille pendant au moins 1 heure avant de couper — la miette est encore en place à l'intérieur.",
      "visualCue": {
        "primaryTarget": "Une oreille spectaculaire et fissurée debout de la surface, entourée d'une croûte d'ambre profonde à mahoganie qui semble creuse quand rapée fermement sur le fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est ambre pâle ou dorée; l'oreille n'a pas complètement ouvert; le fond sonne terne et touffu plutôt que creux.",
            "action": "Retourner au four découvert pendant 5 à 8 minutes de plus. Un bouleau auriculeux entièrement cuit est plus foncé que vous pensez qu'il doit être."
          },
          {
            "state": "Perfect",
            "description": "Une acajou profonde avec une oreille considérablement ouverte, des cloques caramélisées visibles à travers la surface, et un coup creux sur le fond. La cuisine sent le grain rôti et le caramel.",
            "action": "Transférer sur une grille et résister à la coupe pendant au moins 1 heure – l'intérieur est toujours à 200°F et la miette est active."
          },
          {
            "state": "Overdone",
            "description": "La croûte est très foncée, s'approchant du noir à l'oreille et à la base, avec une odeur amère et carbonisée qui domine l'arôme du pain.",
            "action": "Laisser refroidir complètement avant de déguster. Souvent, seule la coquille extérieure est brûlée; l'intérieur reste délicieux. Couper toute croûte carbonisée."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez le pain fini, il devrait être étonnamment léger pour sa taille, signe de bonne miette ouverte. La croûte, lorsqu'elle est fraîche, craque audiblement lorsqu'elle est pressée doucement, et le fond semble creux comme un tambour."
    }
  ]
};
