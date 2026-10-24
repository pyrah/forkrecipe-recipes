export default {
  "repoId": "master_american_sourdough_sandwich_loaf_001",
  "parentRepoId": null,
  "slug": "sourdough-sandwich-loaf",
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Sandwich pain",
  "description": "Un pain de sandwich américain doux, de style Pullman, entièrement levé par une entrée active de sarcelle — assez tendre pour couper fin pour le toast mais suffisamment tannant pour que vous goûtiez le ferment à l'arrière de chaque bouchée. La miette est d'un oreiller et de près, la croûte est fine et dorée, et toute la cuisine sent comme une boulangerie pendant des heures.",
  "cuisine": "Américain",
  "culture": "Pacifique Nord-Ouest",
  "category": "breads",
  "tags": [
    "Pâtes alimentaires",
    "sandwich",
    "pain",
    "Pullman",
    "pain pan",
    "fermenté"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "18 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
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
        "farine universelle (ajouter 1 % de gluten de blé vital)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (30–34 C)",
      "ratioValue": 72,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Démarrage actif aurifère (hydratation à 100%, nourri il y a 8h)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
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
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "sucre",
        "sirop d'érable"
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
        "ing_06"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Mélanger la farine, l'eau, le démarrage actif et le miel dans un grand bol. Mélanger avec une cuillère en bois ou de la pâte fouetter jusqu'à ce qu'aucune farine sèche ne reste. La pâte sera rugueuse et collante — résistez à l'envie d'ajouter plus de farine. Couvrir avec une serviette humide et laisser reposer (autolyser) pendant 30 minutes. Ce reste permet à la farine d'hydrater complètement et au gluten de commencer à se former sans pétrir, ce qui réduit significativement le temps de mélange et améliore la structure de la miette. Vérifiez que votre démarreur est vraiment actif: il aurait dû doubler depuis l'alimentation et l'odeur levure et agréablement aigre.",
      "visualCue": {
        "primaryTarget": "Une masse rugueuse et chaotique qui tient ensemble mais semble inégale. Pas de stries sèches, un peu collantes. La surface est mate et légèrement bosselée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poches de farine sèche restent au fond ou aux bords. La pâte s'effondre lorsqu'elle est pressée.",
            "action": "Mélanger plus soigneusement à la main, presser et plier jusqu'à ce qu'il soit complètement incorporé. Un éclaboussure plus d'eau (5g) peut aider si la farine est très soif."
          },
          {
            "state": "Perfect",
            "description": "Brut uniformément et humide sans farine sèche. Clings sur les côtés du bol. Des odeurs de blé et un soupçon de ferment de l'entrée.",
            "action": "Couvrir et reposer 30 minutes avant d'ajouter du sel et du beurre."
          },
          {
            "state": "Overdone",
            "description": "La toux est déjà lisse et soyeuse à cause du surmélange: le gluten est développé avant que le sel et la graisse ne soient incorporés.",
            "action": "Continuer de toute façon; ajouter le sel et le beurre dans la prochaine étape et continuer. Le pain ira bien."
          }
        ]
      },
      "feelCue": "La pâte doit coller agressivement à vos mains et s'éloigner dans des cordes épaisses et collantes — que l'embout est l'hydratation faisant son travail. S'il pele votre paume proprement, il est trop sec."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "shaggy_dough",
        "ing_04",
        "ing_05"
      ],
      "outputState": "developed_dough",
      "instructions": "Saupoudrer le sel sur la pâte reposée et le presser à travers la pâte avec les doigts jusqu'à ce qu'il soit uniformément distribué — environ 2 minutes de pression agressive. Ajouter le beurre ramolli en petits morceaux et continuer à presser et plier jusqu'à ce qu'il soit complètement absorbé. Effectuez des stretch-and-folds: mouillez votre main, saisissez le bord éloigné de la pâte, étirez-la au-dessus sans déchirer, et pliez-la au-dessus du centre. Rotation de 90 degrés et répétition — 4 plis égale un tour. Faire 4 rondes au total, espacées de 30 minutes, sur 2 heures. À la ronde finale, la pâte doit être lisse, forte et nettement élastique.",
      "visualCue": {
        "primaryTarget": "Une pâte douce, souple et légèrement collante qui tient une forme ronde dans le bol. La surface est presque lisse de soie. De grandes bulles commencent à apparaître en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours enroulé, il se déchire facilement lorsqu'il est étiré et se brise plutôt que de s'étirer dans une fenêtre translucide.",
            "action": "Terminez les 4 pliages avant de passer — le développement du gluten est sensible au temps dans le sourd; les raccourcis apparaissent dans la miette."
          },
          {
            "state": "Perfect",
            "description": "S'étire dans une mince feuille translucide (test à vitres) sans déchirer. Ça rebondit lentement quand on pète. Doux à la surface.",
            "action": "Procéder à la fermentation en vrac dans un bol légèrement huilé."
          },
          {
            "state": "Overdone",
            "description": "Serrer, se cassant en arrière instantanément lorsqu'il est étiré, résister aux plis — gluten surcollé.",
            "action": "Couvrir et reposer 20 minutes à découvert pour se détendre. Alors continuez."
          }
        ]
      },
      "feelCue": "Après le dernier pli, la pâte doit se sentir vivante dans vos mains – légèrement chaude de fermentation, tendue mais donnant, comme un lobe d'oreille ferme plutôt qu'une bande de caoutchouc."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "bulk_fermented_dough",
      "instructions": "Transférer la pâte dans un contenant légèrement huilé et en vrac à température ambiante (21–24 C) pendant 8–10 heures, ou passer la nuit au réfrigérateur (4 C) pendant 12–14 heures. Le retard froid ralentit la fermentation et développe une saveur aigre plus profonde — pour un pain tangier, toujours refroidi. La pâte est prête lorsqu'elle a augmenté de 50 à 75 % en volume (pas doublée, car le fumier est plus lent), se sent plus légère et jiggly, et de petites bulles sont visibles le long des côtés et du fond du récipient. Fossettes pressées dans la surface ressort lentement et paresseusement.",
      "visualCue": {
        "primaryTarget": "La toux est visiblement gonflée — environ 60 à 70 % de plus qu'elle n'a commencé. La surface est bombée et lisse. Les bulles s'accrochent aux côtés du contenant. Un poke laisse un tiret de remplissage lent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine cultivé; dense, froid et serré. Le poke se remplit immédiatement et complètement.",
            "action": "Donnez-lui plus de temps à un endroit plus chaud. Sourdough n'est pas la levure, elle a besoin de patience. Une cuisine froide a besoin de plus d'heures."
          },
          {
            "state": "Perfect",
            "description": "Grandir de 60 à 70 %, jiggly lorsque le récipient est secoué, bulles visibles sur les côtés. Un poke se remplit à mi-chemin et tient pour un rythme avant de terminer.",
            "action": "Façonnez-le à froid — tout droit du réfrigérateur est idéal."
          },
          {
            "state": "Overdone",
            "description": "Ballonné avec de grands trous; sent agressivement acide. Des jiggles comme de la gelée.",
            "action": "Formez-le immédiatement et prouvez-le dans la casserole sans tarder. Une pâte légèrement surfermentée sera plus tangente et aura une miettes plus denses, mais fera encore cuire."
          }
        ]
      },
      "feelCue": "Astucez le récipient et la pâte devrait lentement se détacher des murs comme une masse détendue et aérée — ne pas jeter comme un poids mort, et ne pas s'accrocher obstinément comme de la pâte crue."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "bulk_fermented_dough"
      ],
      "outputState": "shaped_loaf",
      "instructions": "Tourner la pâte sur une surface non affectée. Tapez doucement dans un rectangle à peu près la longueur de votre poêle à pain. Pliez les longs côtés vers le centre comme une lettre, puis roulez-la fermement depuis le haut, en scellant la couture avec vos pouces pendant que vous allez. Vous voulez une tension de surface sans dégazer la miette, ferme mais pas agressive. Abaissez le bord du tronc dans un moule bien graissé de 9x5 pouces (23x13 cm). La pâte doit remplir la casserole d'environ 60 à 65% et s'asseoir légèrement sous le bord.",
      "visualCue": {
        "primaryTarget": "Une couture assise en rondins serrée, de forme uniforme dans la casserole, la remplissant d'une extrémité à l'autre. La surface est tendue et lisse, sans larmes ni taches raclées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Loose, floppy log sans tension de surface. Toux et écarte à plat dans la poêle.",
            "action": "Retirez-vous de la casserole, reformez-la avec plus de tension, pliez la couture et roulez à nouveau, en appliquant une pression vers le bas sur le rouleau final."
          },
          {
            "state": "Perfect",
            "description": "Cylindre serré avec une peau lisse et tendue. Il ne ressort que légèrement lorsqu'il est poché. Convient à l'extrémité de la casserole à la fin et se trouve environ 60% plein.",
            "action": "Couvrir d'un enveloppement en plastique huilé et prouver jusqu'à ce qu'il arête la jante."
          },
          {
            "state": "Overdone",
            "description": "La surface a été déchirée lors de la mise en forme, révélant de grands trous intérieurs. La toux est serrée et résiste au mouvement.",
            "action": "Placez de toute façon dans la casserole — les larmes de surface ne gâchent pas le pain, elles changent simplement le score. Scellez toutes les grosses déchirures en pinçant la pâte."
          }
        ]
      },
      "feelCue": "Un pain bien en forme se sent tendu lorsqu'il est tapé, comme un tambour — non creux mais printanier, comme si la surface était sous une légère tension. Exécutez votre paume le long du haut : elle doit se sentir uniformément lisse et ferme."
    },
    {
      "nodeId": "step_5",
      "action": "Preuve",
      "inputs": [
        "shaped_loaf"
      ],
      "outputState": "proofed_loaf",
      "instructions": "Couvrir la poêle d'une enveloppe en plastique huilé et la conserver à température ambiante (21–24 C) pendant 3–5 heures, ou jusqu'à ce que le dôme de la pâte soit à environ 2 cm au-dessus du bord de la poêle. Si vous retardez le volume dans le frigo, la preuve finale prendra la fin plus longue de cette gamme. Vous pouvez également faire une épreuve finale froide pendant la nuit dans le réfrigérateur pour faire cuire le lendemain matin — tirer directement du réfrigérateur dans le four. Trente minutes avant la cuisson, préchauffer le four à 200 C (400 F).",
      "visualCue": {
        "primaryTarget": "Le dôme s'élève à 2 cm au-dessus de la jante de la poêle, en s'accrochant doucement lorsque celle-ci est bouchée. Un doigt se remplit lentement, environ à mi-chemin, pendant 10 à 15 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux couronne à peine la jante. Poke ressort instantanément et complètement. Le pain cuit sera maintenant dense avec de grands tunnels.",
            "action": "Attendre plus longtemps — on ne peut pas précipiter les épreuves à la dure. Vérifiez encore dans 45 minutes."
          },
          {
            "state": "Perfect",
            "description": "Dome se lève avec confiance au-dessus de la poêle. Doucement. Poke ressort à mi-chemin et tient. Surface légère et oreiller.",
            "action": "Fixez une ligne peu profonde au centre avec un couteau tranchant et chargez-la dans le four chaud."
          },
          {
            "state": "Overdone",
            "description": "Dome est plat ou commence à s'effondrer vers l'intérieur. Poke laisse un cratère qui bouge à peine. La surface semble légèrement ridée.",
            "action": "Faites cuire immédiatement sans marquer. Le pain aura encore une bonne saveur, mais peut avoir une miette dense. La prochaine fois, utilisez une pièce légèrement plus froide pour la preuve finale."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface couverte d'un doigt : un pain bien étagé donne comme un oreiller doux et ressort paresseusement, comme si le gluten disait « Je suis prêt mais pas pressé »."
    },
    {
      "nodeId": "step_6",
      "action": "Cuire",
      "inputs": [
        "proofed_loaf"
      ],
      "outputState": "finished_sourdough_sandwich_loaf",
      "instructions": "Noter une fente superficielle vers le bas du centre du pain (facultatif mais donne à la croûte une fente contrôlée). Cuire à 200 C (400 F) pendant 35 à 40 minutes, en recouvrant la poêle avec du papier d'aluminium pendant les 20 premières minutes pour éviter que la croûte ne brunisse trop vite avant les miettes. Retirez le papier et continuez à cuire jusqu'à ce que la température interne soit de 93 à 96 °C (200 à 205 °F) et que le dessus soit doré. Laisser refroidir dans la casserole pendant 10 minutes, puis tourner sur une grille. Ne pas couper pendant au moins 1 heure — la miette continue de se fixer à mesure que le pain refroidit.",
      "visualCue": {
        "primaryTarget": "Top en dôme doré et brun profond avec un bordé naturel divisé le long du score. La croûte semble creuse quand le fond est tapé. Température intérieure 94 C.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Haut blond pâle. Température intérieure inférieure à 90°C. La croûte sera gommée et le pain se compressera en tranches.",
            "action": "Retourner pour 5 à 8 minutes de plus et répéter. Si le dessus est déjà sombre, tente avec du papier pendant que le centre se termine."
          },
          {
            "state": "Perfect",
            "description": "Riche en or ambre, creux au fond, intérieur 94 C. Le pain tire proprement de la poêle. La croûte est fine et se brise doucement.",
            "action": "Refroidir au minimum 1 heure avant de trancher — la patience thermique est l'ingrédient final."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, croûte raide. Une odeur amère. L'intérieur peut être trop sec.",
            "action": "Couper et vérifier — si la miette est bonne, la croûte était tout simplement sombre. Les croûtes épaisses se calment lorsque le pain est enveloppé."
          }
        ]
      },
      "feelCue": "Un pain bien cuit se sent étonnamment léger lorsque vous le soulevez — les cellules d'air que vous avez construites sur 18 heures sont là, en tenant la structure. La croûte devrait craquer doucement car elle refroidit sur la grille."
    }
  ]
};
