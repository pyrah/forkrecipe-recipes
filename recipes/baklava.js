export default {
  "repoId": "master_turkish_baklava_001",
  "parentRepoId": null,
  "slug": "baklava",
  "author": "ForkRecipe Kitchen",
  "title": "Turquie Baklava",
  "description": "Des couches translucides de pistaches broyées de phyllo, trempées dans du sirop de sucre parfumé d'eau de rose, éclatent au toucher, puis se dissolvent en douceur de miel qui s'attarde au fond de la bouche bien après la dernière bouchée.",
  "cuisine": "Turquie",
  "culture": "Ottoman",
  "category": "desserts",
  "tags": [
    "Baklava",
    "turc",
    "pâtisserie",
    "phyllo",
    "Pistaches",
    "sirop",
    "Pouf",
    "Cuisson"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Feuilles de pâte à papier (dégelées)",
      "ratioValue": 1,
      "defaultUnit": "pack",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Pistaches non salées hachées finement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Noix",
        "Pistaches et noix mélangées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre clarifié (samneh), fondu",
      "ratioValue": 0.4,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee",
        "beurre non salé fondu régulier"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 0.6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron (fraîchement pressé)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de tartre dissoute dans l'eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "eau de fleur d'orange"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sugar_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une casserole lourde à feu moyen. Mélanger seulement jusqu'à ce que le sucre se dissout, puis arrêter de remuer entièrement. Porter à ébullition et laisser mijoter de 8 à 10 minutes jusqu'à ce qu'il y ait un léger épaississement. Retirer du feu, ajouter le jus de citron et l'eau de rose et remuer une fois. Le sirop doit être fabriqué en premier et refroidi complètement à température ambiante avant que le baklava ne sorte du four. Le sirop chaud sur le baklava chaud le rend mousseux plutôt que croquant.",
      "visualCue": {
        "primaryTarget": "Un sirop d'or clair et pâle qui file légèrement d'une cuillère mais coule librement. Ça sent peu les roses. Quand une goutte frappe une assiette froide, elle tient une piscine mince et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours aqueux et mince — coule une cuillère dans des gouttes sans aucun revêtement. Pas de fil de sirop quand la cuillère est levée.",
            "action": "Continuer à mijoter et tester à nouveau toutes les 2 minutes. Le sirop doit se concentrer pour pénétrer les couches et rester croquant."
          },
          {
            "state": "Perfect",
            "description": "Coats une cuillère froide légèrement. Un fil se forme et se casse rapidement lorsqu'une goutte est étirée entre deux doigts froids. Or pâle et transparent.",
            "action": "Retirer du feu. Ajouter le jus de citron et l'eau de rose (pas avant, ou l'acidité interfère avec le réglage). Refroidir complètement — cela prend 45 minutes à 1 heure."
          },
          {
            "state": "Overdone",
            "description": "Le sirop est devenu trop épais, il se met à un bonbon dur sur l'assiette froide, et la couleur s'amplifie vers l'ambre.",
            "action": "Ajouter un jet d'eau, remuer et revenir brièvement à la chaleur pour dissoudre. Le sirop surréduit cristallise dans les couches et rend le baklava granuleux."
          }
        ]
      },
      "feelCue": "Frotter une goutte refroidie de sirop entre les doigts propres — il devrait se sentir légèrement collant mais pas mis dur. S'il file et casse dans un centimètre, il est correct; s'il tire dans une longue corde, il est surréduit."
    },
    {
      "nodeId": "step_2",
      "action": "Refroidir",
      "inputs": [
        "sugar_syrup"
      ],
      "outputState": "cooled_syrup",
      "instructions": "Versez le sirop chaud dans un grand récipient peu profond et laissez-le découvert à température ambiante jusqu'à ce qu'il soit complètement froid, ce qui prend au moins 45 minutes. Ne le précipitez pas au réfrigérateur (condensation le dilue). Pendant qu'il refroidit, installez votre espace de travail : débarrassez le phyllo et gardez-le sous un chiffon humide pour éviter le séchage, préparez les pistaches hachées, et le beurre et alignez la poêle.",
      "visualCue": {
        "primaryTarget": "Un sirop à température ambiante sans vapeur. Il se déverse lentement et épais, et un doigt pressé contre la surface du récipient ne ressent aucune chaleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est encore chaud ou chaud au toucher. La vapeur s'élève faiblement. Le verser sur le baklava chaud vaporiserait et adoucirait la pâtisserie plutôt que de la croquer.",
            "action": "Attendez. Même le sirop légèrement chaud empêche un croustillant approprié. Utiliser un thermomètre à sonde — cible inférieure à 25°C (77°F)."
          },
          {
            "state": "Perfect",
            "description": "Complètement froid, température ambiante. Clair, versable, légèrement visqueux. Pas de chaleur sur la paroi extérieure du vaisseau.",
            "action": "Préparez-vous. Ne pas réfrigérer — un sirop froid s'épaissit trop et peut se cristalliser quand il frappe la pâtisserie chaude."
          },
          {
            "state": "Overdone",
            "description": "Vous avez réfrigéré le sirop et il s'est épaissi à presque solide ou cristallisé.",
            "action": "Chauffer doucement sur la cuisinière avec une éclaboussure d'eau pour la réévacuer. Refroidir à la température ambiante avant d'utiliser."
          }
        ]
      },
      "feelCue": "Appuyez sur le plat de votre main contre le bol — il ne devrait pas se sentir différent de l'air qui l'entoure. C'est la seule règle que les professionnels ne compromissent jamais : sirop froid, baklava chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_02"
      ],
      "outputState": "assembled_baklava",
      "instructions": "Badigeonner généreusement la base de la casserole de beurre clarifié. Poser une feuille de phyllo, brosser avec du beurre, répéter jusqu'à ce que la moitié des feuilles soient utilisées. Dispersez les pistaches uniformément à travers la surface dans une couche de niveau. Continuer la stratification et le beurre des feuilles de phyllo restantes sur le dessus. Badigeonner le haut de la feuille avec du beurre supplémentaire. À l'aide d'un couteau tranchant, couper le baklava jusqu'au fond de la poêle en un motif de diamant ou de grille carrée — les coupes doivent passer tout le chemin avant la cuisson, pas après.",
      "visualCue": {
        "primaryTarget": "Une pile parfaitement uniforme de phyllo translucide au beurre, avec une couche de pistaches verte distincte visible au centre, vue de côté. Les lignes de coupe sont propres et atteignent la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre a été appliqué de façon inégale ou parcimonieuse. Certaines feuilles de phyllo semblent sèches, ternes ou collent ensemble. Les pistaches de la couche de pistaches sont bombées plutôt que nivelées.",
            "action": "Plus de beurre est toujours mieux ici — chaque couche a besoin d'une brosse complète. Mettre la couche de noix à plat de votre main. Si les feuilles collent, les séparer soigneusement avec une brosse à pâtisserie sèche."
          },
          {
            "state": "Perfect",
            "description": "Chaque feuille de phyllo brille avec une couche de beurre uniforme. La couche de pistaches est plate, uniforme et confinée au milieu. Toutes les découpes vont à la base de la poêle.",
            "action": "Cuire immédiatement — une pile de phyllo beurré qui attend à la température ambiante commence à absorber l'humidité et devient boiteuse."
          },
          {
            "state": "Overdone",
            "description": "Le phyllo a été manipulé trop lentement et certaines feuilles ont séché et craqué. Les lignes de coupe sont raclées ou seulement partiellement à travers les couches.",
            "action": "Les feuilles craquées ou cassées sont esthétiquement fines — le produit final cache les fractures internes sous le sirop. Recoupez les lignes qui n'ont pas atteint le fond de la casserole."
          }
        ]
      },
      "feelCue": "Chaque feuille doit se sentir souple et lissée sous le pinceau, pas papier ou collant. Si les feuilles de phyllo se déchirent lorsque vous les ramassez, elles sont séchées — gardez la pile inutilisée couverte d'un chiffon humide en tout temps."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_baklava"
      ],
      "outputState": "baked_baklava",
      "instructions": "Cuire au four préchauffé à 160°C (32°F) pendant 50 à 60 minutes jusqu'à ce que toute la surface soit uniformément dorée et que la pâtisserie soit creuse lorsqu'elle est tapée. Ne précipitez pas le four à feu plus élevé — une température basse et constante rend tout le beurre et croustille chaque couche sans brûler la surface avant les ensembles intérieurs. Retirer du four et verser immédiatement le sirop refroidi uniformément sur le baklava chaud — verser lentement et dans un ruisseau stable afin que chaque partie reçoive du sirop. Le vertige sera violent. Laisser intact pendant au moins 4 heures avant de couper le long des lignes préfabriquées.",
      "visualCue": {
        "primaryTarget": "Chaque surface exposée est un or ambré uniforme et profond. Pas de taches pâles entre les lignes de coupe. Les bords coupés révèlent un mur de couches toujours dorées de haut en bas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est en or, mais les côtés des coupes sont encore pâles et les couches ne sont pas broyées. Le baklava se penche plutôt que de craquer quand une pièce est levée.",
            "action": "Retourner au four pendant 10 minutes. Le baklava sous-cuit absorbe le sirop mais s'effondre dans une masse soyeuse plutôt qu'une pâte croustillante."
          },
          {
            "state": "Perfect",
            "description": "De l'or uniformément profond sur le dessus et tous les bords coupés. La pâtisserie semble légèrement creuse lorsqu'elle est tapée. Une pièce levée tient sa forme et les couches sont visiblement séparées et croustillantes.",
            "action": "Versez le sirop froid immédiatement et uniformément — n'attendez pas. Le sizzle et la vapeur est le sirop qui est tiré entre les couches chaudes."
          },
          {
            "state": "Overdone",
            "description": "La surface et les bords supérieurs sont brun foncé ou presque brûlés, sentant le beurre brûlé. La couche supérieure est fragile et s'effondre.",
            "action": "Verser immédiatement le sirop pour arrêter la cuisson. La couche supérieure la plus foncée peut être amère; goûtez un coin. La prochaine fois, réduisez la température du four de 10°C."
          }
        ]
      },
      "feelCue": "Lorsque vous versez le sirop froid sur le baklava chaud, vous entendrez une poussée de vapeur et un sifflement — c'est-à-dire le sirop tiré par action capillaire entre chaque couche. La poêle sera plus légère après l'absorption du sirop. Reposez-vous à température ambiante pendant au moins 4 heures avant de couper."
    },
    {
      "nodeId": "step_5",
      "action": "Glacer",
      "inputs": [
        "baked_baklava",
        "cooled_syrup"
      ],
      "outputState": "finished_baklava",
      "instructions": "Si un sirop n'est pas pulvérisé, ajoutez-le maintenant, inclinant doucement la poêle pour la distribuer. Ne couvrez pas le baklava pendant qu'il repose — couvrez les pièges à vapeur et adoucissez la croûte. Après au moins 4 heures (la nuit est meilleure), recouper le long des lignes originales, essuyer le couteau entre les coupes. Servir à température ambiante. Entreposer à découvert ou sous une tente très lâche à température ambiante pendant jusqu'à 5 jours — ne jamais réfrigérer.",
      "visualCue": {
        "primaryTarget": "Les morceaux sont brillants avec du sirop mais tiennent un bord croustillant et se brisent proprement en mordant. Le remplissage de pistaches est humide et parfumé. Le sirop est légèrement glacé plutôt qu'une piscine collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux sont doux et courbés plutôt que de se casser. Les couches n'ont pas eu le temps de réabsorber correctement le sirop — la pâte est mouillée plutôt qu'enduite de sirop.",
            "action": "Reposez-vous plus longtemps — 4 heures au minimum. Le repos nocturne produit une texture nettement meilleure lorsque le sirop se distribue et que les couches de pâte se stabilisent."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce se brise à la première morsure dans des dizaines de couches de fissure. Le centre de pistaches est humide et parfumé avec de l'eau de rose. Doux, oui, mais le citron l'empêche de cloîtrer.",
            "action": "Servir et manger. Baklava s'améliore pendant les deux premiers jours après la cuisson car le sirop se distribue entièrement."
          },
          {
            "state": "Overdone",
            "description": "Les pièces se sont assises trop longtemps dans une cuisine humide et la surface est devenue humide et collante plutôt que croquante.",
            "action": "Chauffer brièvement dans un four à 150 °C pendant 10 minutes pour éliminer l'excès d'humidité et ré-écraser la surface."
          }
        ]
      },
      "feelCue": "Un morceau parfait de baklava se brise lorsque vous le pressez d'en haut — une fissure propre et papier, comme casser une galette — et le remplissage de pistaches tient ensemble plutôt que de s'effondrer. Le sirop enveloppe les lèvres sans goutter."
    }
  ]
};
