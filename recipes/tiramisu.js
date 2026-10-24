export default {
  "repoId": "master_italian_tiramisu_001",
  "parentRepoId": null,
  "slug": "tiramisu",
  "author": "ForkRecipe Kitchen",
  "title": "Tiramisù",
  "description": "Savoiardi en couches sous un nuage de mascarpone fouetté et de sabayon — froid, boueux et amer, avec une poussière de cacao qui se brise comme de la neige sombre sous la cuillère. Le nom signifie \"m'attraper\", et c'est le cas.",
  "cuisine": "Italien",
  "culture": "Vénitien",
  "category": "desserts",
  "tags": [
    "tiramisu",
    "Italien",
    "mascarpone",
    "expresso",
    "Pas de cuisson",
    "dessert"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "6 hr 35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 3,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Jaunes d'œufs (très frais, température ambiante)",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": [
        "Jaunes d'œuf pasteurisées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé (amende éclairée)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Mascarpone (froid)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Crème lourde (froid, 35% de graisse)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "blancs d'oeufs fouettés (4 blancs) pour la méthode classique non-crème"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Savoiardi (ladyfingers)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "padsini",
        "doigts éponges"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Espresso, fort et fraîchement brassé (refroidi)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "café pot de moka forte",
        "café filtre double résistance"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Vin de Marsala (ou rhum foncé)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "liqueur de café",
        "omit pour sans alcool"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Poudre de cacao non sucrée (procédé néerlandais)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "chocolat noir râpé"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel de mer fin (pinch)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Température",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_09"
      ],
      "outputState": "warm_sabayon",
      "instructions": "Mélanger les jaunes d'œufs, le sucre et le sel dans un bol thermofuge sur une casserole d'eau à peine mijotée (un bain-marie). fouetter constamment et vigoureusement pendant 5-7 minutes. Le mélange sera mince, puis pâle, puis épaissira lorsque les œufs cuireont doucement à une température sûre (environ 70°C / 160°F). Ne laissez jamais le bol toucher l'eau ou les jaunes brouillés. Retirer de la chaleur dès qu'elle tombe dans des rubans épais et pâles.",
      "visualCue": {
        "primaryTarget": "Sabayon clair, brillant, jaune citron qui a triplé en volume. Lorsque vous soulevez le fouet, il tombe dans un ruban lent qui est assis sur la surface pendant quelques secondes avant de couler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours lâche, jaune foncé, et runny. Le ruban disparaît instantanément. Le sucre est gritté lorsqu'il est frotté entre les doigts.",
            "action": "Continuez à fouetter. Le sucre doit se dissoudre complètement et le volume doit se construire — il n'est pas prêt jusqu'à ce qu'il ruban."
          },
          {
            "state": "Perfect",
            "description": "Pale, épais, mousseux et chaud au toucher. Le fouet laisse des traces qui tiennent. Doux, pas granuleux.",
            "action": "Retirer du feu et fouetter le feu pendant une autre minute pour refroidir légèrement avant de plier en mascarpone."
          },
          {
            "state": "Overdone",
            "description": "Des flocons caillés d'oeufs cuits apparaissent; l'odeur devient oeuvrée et la texture devient grumelée.",
            "action": "Plongez immédiatement dans un tamis fin pour attraper le caillé. Si vous avez mal brouillé, recommencez — il n'y a pas de sauvetage d'un jaune entièrement cuit."
          }
        ]
      },
      "feelCue": "Le whisk devrait avoir l'impression qu'il rencontre une résistance de plus en plus forte — au moment où votre bras enregistre une épaisse traînée satinée, vous êtes là. Le bol devrait être chaud mais jamais assez chaud pour vous blesser la main."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "warm_sabayon",
        "ing_03",
        "ing_04"
      ],
      "outputState": "mascarpone_cream",
      "instructions": "Déposer le mascarpone froid avec une spatule jusqu'à ce qu'il soit lisse, puis le plier dans le sabayon refroidi en deux ajouts jusqu'à ce qu'il soit uniforme. Dans un bol froid séparé, fouetter la crème lourde aux pics doux. Pliez la crème fouettée dans le mélange de mascarpone doucement, du bas vers le haut, jusqu'à ce qu'elle soit simplement combinée. Arrêter l'instant où il est homogène — le surmenage écrasera l'air et le rendra granuleux ou fractionné.",
      "visualCue": {
        "primaryTarget": "Une crème douce, aérée et pâle qui maintient des pics et des monticules doux sur la spatule sans courir. Il ne reste pas de stries de mascarpone ou de crème non mélangée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries marbrées de crème blanche et de sabayon jaune sont encore visibles; des poches de mascarpone raide se cachent au fond du bol.",
            "action": "Plier encore quelques fois, en grattant le fond du bol, jusqu'à ce que la couleur soit uniforme. Soyez doux pour garder l'air."
          },
          {
            "state": "Perfect",
            "description": "La couleur uniforme de l'ivoire, légère et abondante, tient un pic doux qui s'effondre lentement. Étalable mais pas versable.",
            "action": "Commencez à assembler immédiatement pendant qu'il est au volume maximum."
          },
          {
            "state": "Overdone",
            "description": "La crème a l'air terne, dense et légèrement grainée ou beurrée; elle peut pleurer liquide. L'air est parti.",
            "action": "Arrête de plier. Il est encore utilisable, mais sera plus dense — assemblez rapidement et refroidissez bien."
          }
        ]
      },
      "feelCue": "Pliez comme vous mettez la crème dans le lit – des coups lents et délibérés au centre et sur les côtés. Il doit sentir la lumière et céder, jamais rigide ou résistant."
    },
    {
      "nodeId": "step_3",
      "action": "Trempage",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "soaked_layer",
      "instructions": "Incorporer le Marsala (ou rhum) dans l'espresso refroidi dans un plat peu profond. Travaillant un à la fois, plongez chaque savoiardo dans le café pendant ONE seconde de chaque côté — une entrée et sortie rapide. Les coccinelles ont soif ; elles continuent à absorber après avoir quitté le liquide. Arrangez les doigts trempés dans une seule couche serrée dans la base de votre plat, parures pour s'adapter.",
      "visualCue": {
        "primaryTarget": "Une ladyfinger qui est humidifiée à travers mais tient toujours sa forme — obscurci avec du café à l'extérieur, avec un faible noyau sec que vous pouvez sentir. Il devrait rester ferme dans le plat, pas sombrer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des taches sèches pâles; le biscuit est raide et se brise. La couche finie sera dure et cakey.",
            "action": "Plongez une fraction plus longtemps la prochaine fois — une demi-seconde de plus. Vous voulez humide, pas croquant."
          },
          {
            "state": "Perfect",
            "description": "Éteint de café et souple, tenant sa forme de loch lorsqu'il est levé. Les ressorts reviennent faiblement lorsqu'ils sont pressés.",
            "action": "Pose-le et passe vite au suivant."
          },
          {
            "state": "Overdone",
            "description": "Le doigt saigne, se brise ou coule du café. Il transformera la couche en bouillir et pleurera dans la crème.",
            "action": "Utilisez - le quand même appuyé à plat dans la base, et plongez le reste plus rapidement — un seul passage rapide par côté."
          }
        ]
      },
      "feelCue": "Écouter et sentir : un savoiardo bien trempé donne une pression douce et oreiller sans tomber en morceaux. Si le café coule dans vos doigts quand vous le soulevez, il s'est noyé."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "soaked_layer",
        "mascarpone_cream"
      ],
      "outputState": "assembled_tiramisu",
      "instructions": "Étaler la moitié de la crème mascarpone uniformément sur la première couche de savoiardi trempé, la lisser dans les coins avec une spatule offset. Construisez une deuxième couche de coccinelles trempées sur le dessus, puis couronnez-la avec la crème restante, tourbillonnant la surface lisse ou en pics doux. Couvrir et réfrigérer.",
      "visualCue": {
        "primaryTarget": "Deux strates de biscuit propres et de crème qui remplissent le plat jusqu'au bord, la couche supérieure de crème épaisse et même sans biscuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est trop fine et inégale; les doigts trempés montrent à travers le dessus, et les couches semblent inégales.",
            "action": "Redistribuer la crème de sorte que le dessus soit entièrement recouvert — la surface doit être une feuille non cassée prête pour le cacao."
          },
          {
            "state": "Perfect",
            "description": "Même des couches généreuses avec un haut crème lisse assis juste sous la jante. Les bords sont propres et définis.",
            "action": "Couvrir soigneusement et réfrigérer pendant au moins 6 heures, idéalement toute la nuit."
          },
          {
            "state": "Overdone",
            "description": "Surremplis et enflammés, la crème presse sur les côtés; ou tellement de café poolé à la base que le fond nage.",
            "action": "Conseilnez n'importe quel café en piscine de la base avant de refroidir, et ne surremplissez pas — une jante propre se sert mieux."
          }
        ]
      },
      "feelCue": "Le plateau assemblé doit se sentir frais et stable, avec un doux donner sur le dessus comme un ensemble de crème. Résistez à l'envie de servir tôt — la patience permet au biscuit et à la crème de se marier en un seul tout tendre."
    },
    {
      "nodeId": "step_5",
      "action": "Poussière",
      "inputs": [
        "assembled_tiramisu",
        "ing_08"
      ],
      "outputState": "finished_tiramisu",
      "instructions": "Après avoir refroidi et réglé le tiramisù (6 heures minimum), époussetez la surface avec de la poudre de cacao à travers un tamis fin dans un voile homogène et généreux — mais juste avant de servir, il reste sec et mat plutôt que de se dissoudre dans la crème. Couper avec un couteau chaud et essuyé pour des tranches propres.",
      "visualCue": {
        "primaryTarget": "Une couverture de coco foncée uniforme et mate sur un ensemble de tiramisù qui conserve un bord propre en tranches, révélant deux couches de crème et de biscuit distinctes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cacao fin, patchy avec des trous pâles; le dessert tremble encore et les tranches s'effondrent.",
            "action": "Poussez un deuxième passe pour une couverture complète, et si elle oscille, retournez-le au réfrigérateur pour le mettre plus longtemps avant de couper."
          },
          {
            "state": "Perfect",
            "description": "Voile de cacao velouté uniforme; les tranches tiennent leur forme avec des couches définies et une première morsure fraîche, crémeuse et amère.",
            "action": "Servir froid, directement depuis le réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "Le cacao appliqué trop tôt est devenu humide et boueux, ou si épais qu'il forme une masse sèche et amère qui gonfle lorsque vous prenez une bouchée.",
            "action": "Grattez le pire et repoussiérez légèrement juste avant de servir. Un murmure de cacao suffit."
          }
        ]
      },
      "feelCue": "Le cacao fini devrait rester sec sur le dessus — expirer doucement à travers lui et une faible poussière devrait soulever. La première cuillère doit être froide, puis du cacao amer, puis de la crème douce, puis du biscuit de café boueux sous."
    }
  ]
};
