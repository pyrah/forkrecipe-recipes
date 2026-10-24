export default {
  "repoId": "master_indian_chapati_001",
  "parentRepoId": null,
  "slug": "chapati",
  "author": "ForkRecipe Kitchen",
  "title": "Chapitre",
  "description": "Le pain quotidien de l'Inde du Nord — rien de plus qu'un atta, de l'eau et du sel, fait tous les matins par les mains pratiquées, soufflait sur une flamme ouverte jusqu'à ce qu'il ballonne avec de la vapeur piégée, puis déchiré et utilisé pour scoop dal, sabzi, et tout entre les deux.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "breads",
  "tags": [
    "Pain plat",
    "indienne",
    "sans levain",
    "blé entier",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Atta (farine de chapati, blé entier moulu en pierre)",
      "ratioValue": 2,
      "defaultUnit": "cups",
      "substitutions": [
        "parties égales tout usage + farine de blé entier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 0.75,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Ghee ou huile neutre (facultatif, pour la finition)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "beurre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "chapati_dough",
      "instructions": "Combiner atta et sel dans un bol profond (la forme traditionnelle de thali est idéale — les côtés hauts aident à contenir le pétrissage). Ajouter l'eau tiède graduellement, mélanger avec les doigts pendant que vous versez. L'Atta absorbe l'eau différemment de la farine tout usage — elle peut prendre plus que prévu. Ajouter de l'eau jusqu'à ce que la pâte se réunisse, puis tourner sur la surface et pétrir pendant 8-10 minutes avec le talon de votre paume, en utilisant un mouvement rythmique push-fold-rootate. La pâte finie doit être très douce, plus douce que la pâte à pain, nettement plus douce que la pâte à pizza. Il ne doit pas coller, mais il doit céder sous la pression la plus légère.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et très douce sans taches ou fissures rugueuses. Beaucoup plus doux que la plupart des pâtes à pain — presque comme mozzarella ferme dans la pliabilité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore légèrement rugueux, montre de petites fissures lorsqu'elles se forment en boule. Trop ferme, plus comme la pâte à pain que la pâte chapati.",
            "action": "Ajouter une cuillère à café à la fois, pétrir après chaque. Atta peut absorber plus d'eau que prévu."
          },
          {
            "state": "Perfect",
            "description": "Très doux, très doux. Pique légèrement sous son propre poids lorsqu'il est placé sur la surface. Un doigt poché laisse une impression claire. Ne colle pas aux mains propres.",
            "action": "Couvrir avec un chiffon humide et reposer 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Sticky, collant aux mains, coule légèrement. Trop d'eau.",
            "action": "Aplatissez une cuillère à café à la fois jusqu'à ce qu'elle cesse de coller."
          }
        ]
      },
      "feelCue": "La pâte Chapati doit se sentir plus douce qu'un lobe d'oreille, mais plus ferme que la joue d'un bébé — extrêmement productive, comme un velours chaud et dense. Si ça ressemble à de la pâte à pain, il lui faut plus d'eau."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser reposer",
      "inputs": [
        "chapati_dough"
      ],
      "outputState": "rested_dough",
      "instructions": "Couvrir la pâte avec un chiffon humide et reposer à température ambiante pendant 20-30 minutes. Pendant ce repos, le gluten se détend (en faisant rouler des rondelles très minces sans ressort) et le son de blé entier dans l'atta absorbe complètement l'eau et s'adoucit. Ce repos est plus important pour le chapati que pour tout autre pain plat — sans lui, les rondelles roulées ressortent et le chapati fini sera dur plutôt que doux. Divisez la pâte reposée en 10-12 parties de balle de golf.",
      "visualCue": {
        "primaryTarget": "La pâte reposée s'est adoucie et se sent soyeuse au toucher. Plus de résistance lors de la cuisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La touffe recule quand une pièce est étirée. Le son est encore légèrement éraflé contre les doigts.",
            "action": "Récupérer et attendre encore 10 minutes. La différence entre 15 minutes et 25 minutes de repos est importante."
          },
          {
            "state": "Perfect",
            "description": "Silky, qui donne, a une impression facile. S'étirent sans déchirer. Sentiment légèrement plus chaud que lorsque pétrifié en raison de l'hydratation continue.",
            "action": "Divisez et roulez."
          },
          {
            "state": "Overdone",
            "description": "Le tissu a séché et la pâte a formé une peau à la surface.",
            "action": "Éplucher toute croûte séchée et jeter. Agenouillez doucement la pâte intérieure douce avec les mains mouillées avant de diviser."
          }
        ]
      },
      "feelCue": "Une pâte de chapati bien reposée semble presque s'appuyer dans votre main quand vous la pressez — si douce et productive qu'elle n'offre presque aucune résistance, comme la pression dans le fromage à la crème très ferme."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "rested_dough"
      ],
      "outputState": "rolled_rounds",
      "instructions": "Sur une surface légèrement farinée (atta est le meilleur pour la poussière), rouler chaque boule de pâte avec une fine broche de laminage (le bélan traditionnel est étroit et plus léger qu'une broche de laminage Western, permettant une rotation rapide). Roulez du centre vers l'extérieur avec de la lumière, des coups rapides, tournant le rond de 45-60 degrés après chaque passage pour garder le cercle uniforme. La cible est un cercle de 20-22 cm de diamètre et 1,5-2 mm d'épaisseur — environ l'épaisseur de deux cartes de crédit empilées. Il doit être translucide dans les taches les plus fines. La poussière seulement autant que nécessaire pour empêcher le collage — l'excès d'atta rend la fumée tawa et le chapati difficile.",
      "visualCue": {
        "primaryTarget": "Un disque rond, même d'environ 20 cm de diamètre. Presque translucide dans les zones les plus minces. Des bords aussi fins que le centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Petit, épais, avec des bords nettement plus épais que le centre. L'épingle ne voyage pas jusqu'aux bords.",
            "action": "Appliquer la pression jusqu'au bord du rond, pas seulement au centre. Rotation plus fréquente."
          },
          {
            "state": "Perfect",
            "description": "Grand, mince, même cercle. La lumière passe par les taches les plus fines lorsqu'elle est retenue. Le rouleau ne rencontre presque aucune résistance.",
            "action": "Cuire immédiatement sur le tawa préchauffé."
          },
          {
            "state": "Overdone",
            "description": "Des larmes au centre. Trop mince dans les endroits et le rond est devenu mal formé.",
            "action": "Re-baller les déchirés et recommencer. Pour les larmes mineures, humidifier les bords avec de l'eau et presser fermé."
          }
        ]
      },
      "feelCue": "Un chapati bien roulé est si mince que vous sentez la surface de travail à travers la pâte sous le laminoir — une texture légèrement granuleuse de la farine pulvérisée sous le disque."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "rolled_rounds",
        "ing_04"
      ],
      "outputState": "finished_chapati",
      "instructions": "Chauffer un tawa sec (bouilloire plate en fonte) ou une poêle lourde à feu vif jusqu'à ce qu'une goutte d'eau s'évapore dans 1 seconde. Placer un chapati sur la surface sèche et cuire pendant 45-60 secondes jusqu'à ce que la surface commence à montrer des taches sèches mates et de petites bulles. Fliper en utilisant des pinces et cuire le deuxième côté pendant 30-45 secondes jusqu'à ce qu'il montre des taches mates similaires et des bulles légèrement plus grandes. Transférer directement sur une flamme à gaz avec des pinces ou utiliser un dompteur de flamme de fil: tenir le chapati sur la flamme ouverte pendant 5-10 secondes de chaque côté. La vapeur piégée gonfle le chapati dans un ballon complet — c'est le signe d'un chapati bien fait et indique que l'intérieur est cuit. Retirer immédiatement, brosser avec le ghee si vous l'utilisez, et empiler sous un chiffon propre pour garder doux.",
      "visualCue": {
        "primaryTarget": "Un ballon chapati entièrement gonflé au-dessus de la flamme, doré-tan sur les surfaces cuites avec de petites taches carbonisées de la chaleur directe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sur le tawa : toujours translucide et cru. Ne gonfle pas au-dessus de la flamme. Reste plat et légèrement humide.",
            "action": "Retourner au tawa pendant 30 secondes de plus par côté — il n'est pas prêt pour la flamme jusqu'à ce que les deux côtés soient cuits. Un chapati se gonfle de la vapeur d'un intérieur cuit."
          },
          {
            "state": "Perfect",
            "description": "Puffe dans un ballon complet au-dessus de la flamme dans les 5 secondes. Or avec de petites taches carbonisées. Lorsqu'ils sont dégonflés, les deux côtés se séparent proprement dans une poche.",
            "action": "Badigeonner avec le ghee et empiler. Prêt à manger immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Plaques brun foncé ou noir. Le ballon a explosé et le chapati a l'air brûlé. Une odeur carbonisée.",
            "action": "Abaissez la flamme ou réduisez le temps sur la flamme. Le contact direct avec le feu doit être bref — quelques secondes, pas une demi-minute."
          }
        ]
      },
      "feelCue": "Tenez un chapati juste cuit près de votre joue avant de brosser — la vague de vapeur qu'il libère est chaude, parfumée de blé entier et d'omble, la température d'un repas frais."
    }
  ]
};
