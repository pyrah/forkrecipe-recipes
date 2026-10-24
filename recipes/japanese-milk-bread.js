export default {
  "repoId": "master_japanese_japanese_milk_bread_001",
  "parentRepoId": null,
  "slug": "japanese-milk-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de lait japonais (Shokupan)",
  "description": "Hokkaido shokupan — un pain blanc japonais d'oreiller, incroyablement doux, construit sur la technique tangzhong, où une petite portion de farine est cuite dans un gel qui verrouille l'humidité dans la miette, ce qui se traduit par un pain qui se déchire dans le blanc nuageux, des feuilles de gossamer et reste frais pendant des jours.",
  "cuisine": "Japonais",
  "culture": "Hokkaido",
  "category": "breads",
  "tags": [
    "Shokupan",
    "Japonais",
    "Pain de lait",
    "Tangzhong",
    "doux",
    "Pullman",
    "hokkaido"
  ],
  "difficulty": 3,
  "activeTime": "50 min",
  "totalTime": "5 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
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
        "farine tout usage (légèrement moins de mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de pain pour tangzhong (mis de côté)",
      "ratioValue": 6,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Lait entier chaud (38 C) pour pâte principale",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "lait d'avoine plein gras"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Lait entier pour tangzhong",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "Margarine"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Grand œuf",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Crème lourde (pour brossage, en option)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "lait",
        "lavage des œufs"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuisson tangzhong",
      "inputs": [
        "ing_02",
        "ing_04"
      ],
      "outputState": "tangzhong_paste",
      "instructions": "fouetter la farine tangzhong avec le lait froid dans une petite casserole jusqu'à ce qu'elle soit complètement lisse et sans grumeaux. Placer sur feu moyen-doux et cuire, en remuant constamment avec une spatule de silicone, pendant 3 à 5 minutes jusqu'à ce que le mélange s'épaississe dans une pâte épaisse, brillante, semblable à du pudding et un thermomètre lit 65 C (150 F). A cette température, les granules d'amidon sont entièrement gélatinisés, et dans cet état gélatinisé, ils peuvent absorber et verrouiller beaucoup plus d'eau que l'amidon brut. Retirer du feu, presser une feuille d'enveloppe plastique directement sur la surface pour empêcher la formation d'une peau et la refroidir à la température ambiante.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, lisse, blanc ivoire qui tient un sentier clair lorsque la spatule est tirée à travers le fond de la casserole et la température lit 65 C.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et laiteux. Aucun sentier ne se forme lorsqu'il est agité. Moins de 60 °C.",
            "action": "Continuez la cuisson et l'agitation — la transformation du liquide en gel se produit sur une fenêtre à température étroite près de 65 °C, donc soyez patient."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur et brillant, comme une crème de pâtisserie sans oeufs. Il tient sa forme brièvement, puis s'installe lentement. Le sentier laissé par la spatule se ferme en 2-3 secondes. 65 C.",
            "action": "Appuyez sur l'enveloppe plastique à la surface et refroidissez complètement avant d'ajouter à la pâte."
          },
          {
            "state": "Overdone",
            "description": "Très raide, gommant, et s'éloignant des côtés de la poêle dans une masse caoutchouteuse.",
            "action": "fouetter dans une cuillère à café de lait pour se détendre, puis procéder. La pâte est toujours fonctionnelle."
          }
        ]
      },
      "feelCue": "Cool tangzhong pressé entre deux doigts se sent lisse, épais et légèrement élastique — pas gommant comme du pudding surcuit, et pas liquide. Il devrait tenir une empreinte digitale brièvement avant de se remplir lentement."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "tangzhong_paste"
      ],
      "outputState": "shaggy_enriched_dough",
      "instructions": "Dans un bol mélangeur, mélanger la farine de pain, le sucre, le sel et la levure instantanée (préserver le sel et la levure sur les côtés opposés du bol avant de mélanger). Ajouter le lait chaud, l'œuf et le tangzhong refroidi. À l'aide du crochet à pâte, mélanger à basse vitesse pendant 2 minutes jusqu'à combinaison, puis augmenter à moyen pendant 5 minutes. La pâte sera chaotique et collante au début — résistez à ajouter de la farine supplémentaire. Il se réunira au fur et à mesure que le gluten se développe et que le tangzhong s'intègre. Après 5 minutes, il devrait commencer à s'éloigner des côtés du bol.",
      "visualCue": {
        "primaryTarget": "Toux qui s'accroche au crochet et qui s'éloigne des côtés du bol, pas encore lisse, encore quelque peu collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux éclabousse autour du bol et ne coiffe pas. La farine n'est pas entièrement incorporée.",
            "action": "Laisser mélanger à basse vitesse pendant 1-2 minutes avant d'augmenter la vitesse."
          },
          {
            "state": "Perfect",
            "description": "La toux s'accroche au crochet et nettoie les côtés du bol (essentiellement — certains collants au fond sont bien). Ça a l'air dur et légèrement brillant.",
            "action": "Commencez à ajouter du beurre dans la prochaine étape."
          },
          {
            "state": "Overdone",
            "description": "Déjà lisse et tirant entièrement propre avant l'ajout de beurre.",
            "action": "Passer à l'addition de beurre — aucun mal fait."
          }
        ]
      },
      "feelCue": "À ce stade, la pâte doit se sentir assez collante à un doigt pressé dedans — c'est correct et attendu. Shokupan est une pâte enrichie en haute hydratation et le collant se résoudra complètement une fois le beurre entièrement incorporé."
    },
    {
      "nodeId": "step_3",
      "action": "Pétrir",
      "inputs": [
        "shaggy_enriched_dough",
        "ing_05"
      ],
      "outputState": "developed_milk_dough",
      "instructions": "Avec le mélangeur fonctionnant sur support, ajouter le beurre ramolli en petits morceaux, environ 1 cuillère à soupe à la fois, en attendant que chaque addition soit complètement absorbée avant d'ajouter la suivante. Cela prendra de 8 à 10 minutes de mélange au total après que le beurre soit entièrement dans. La pâte passera par une phase laid — en apparence grasse et cassée — avant de revenir ensemble dans une boule élastique soyeuse qui tire complètement propre du bol. Augmenter à moyenne-élevée pendant les 2 dernières minutes. Le test de vitre doit être très facile à passer : une petite pièce s'étire jusqu'à presque translucide sans déchirer.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte soyeuse, lisse et blanc ivoire qui tire complètement propre du bol et du crochet. La surface est presque brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore légèrement gras ou cassé. Des larmes de fenêtre immédiatement.",
            "action": "Continuez à pétrir — le réseau de gluten n'est pas encore assez fort pour tenir la graisse en suspension. Encore 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Silky lisse, ressort rapidement, nettoie complètement le bol et passe facilement le test de vitre. La surface ressemble presque à la peau.",
            "action": "Forme en boule et en vrac-ferment."
          },
          {
            "state": "Overdone",
            "description": "Extrêmement serré et raide, pas du tout collant. A une qualité légèrement caoutchouteuse.",
            "action": "Reposez-vous pendant 15 minutes et continuez. La pâte enrichie surmenée fait encore des ravages."
          }
        ]
      },
      "feelCue": "La pâte à pain au lait entièrement développée est la pâte à pain la plus douce que vous manierez jamais — elle devrait être chaude, soyeuse, lisse et non collante, donnant à la pression comme une guimauve ferme."
    },
    {
      "nodeId": "step_4",
      "action": "Faire lever",
      "inputs": [
        "developed_milk_dough"
      ],
      "outputState": "bulk_risen_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, couvrir d'enveloppe plastique et la laisser monter à température ambiante (24–26 C) pendant 1 à 1,5 heures, jusqu'à ce qu'elle ait doublé en taille. En raison du tangzhong et de la teneur élevée en beurre, cette pâte augmente plus lentement qu'une pâte maigre. L'abattre une fois à mi-chemin (45 minutes) aide à développer une miette plus uniforme et fine en redistribuant la levure et le gaz redistribuant. Après la pleine montée, refroidir la pâte au réfrigérateur pendant 20 minutes pour la raffermir, ce qui rend la pâte collante beaucoup plus facile à diviser et à façonner proprement.",
      "visualCue": {
        "primaryTarget": "La toux a nettement doublé — coupole au-dessus du bord du bol. La surface est lisse et oreiller. Le bol tremble avec un doux jiggle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Croissance inférieure à 50%. Sensé et ferme. Le poke se remplit immédiatement.",
            "action": "Retour à un endroit plus chaud — les pâtes enrichies ont besoin de chaleur et de temps pour surmonter l'effet de la graisse sur la levure."
          },
          {
            "state": "Perfect",
            "description": "Double. Un poke à deux doigts se remplit lentement, à mi-chemin. La toux est légère et aérée. Des odeurs de lait chaud et de pain.",
            "action": "Refroidir brièvement, puis diviser et façonner."
          },
          {
            "state": "Overdone",
            "description": "Plus que doublé, surface montrant de grandes bulles. Ça sent un peu l'alcool.",
            "action": "Descendez, formez et procédez. Le pain de lait surfermenté est encore très bon."
          }
        ]
      },
      "feelCue": "Placez votre poing doucement dans la pâte doublée — il devrait se dégonfler lentement comme un pneu perforé, donnant un soupir doux de gaz. La pâte surfermentée s'effondre instantanément et plane; la pâte sous-fermentée est à peine dentée."
    },
    {
      "nodeId": "step_5",
      "action": "Forme et casserole",
      "inputs": [
        "bulk_risen_dough"
      ],
      "outputState": "panned_milk_bread",
      "instructions": "Divisez la pâte réfrigérée en 4 morceaux égaux. Aplatir chaque pièce dans un rectangle, plier les longs côtés vers le centre, et rouler dans un cylindre serré. Placer les 4 cylindres côte à côte dans une poêle à pain Pullman graissée 9x5 (ou une poêle standard), côté couture vers le bas. Pour un dôme shokupan classique, laissez la poêle à découvert. Pour un pain Pullman plat, glissez le couvercle. Couvrir et étaler à température ambiante pendant 1 à 1,5 heures, jusqu'à ce que la pâte soit à 2 cm au-dessus de la jante (dôme) ou remplir la casserole Pullman 90%.",
      "visualCue": {
        "primaryTarget": "Quatre rouleaux de taille égale remplissant la poêle côte à côte, bombés au-dessus de la jante après étalonnage. La surface est lisse et légèrement brillante du lavage oeuf/crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rouleaux n'ont pas encore craqué la jante. Sensé et serré.",
            "action": "Attendez encore 20 à 30 minutes. Les pâtes enrichies sont lentes au stade de la dernière épreuve."
          },
          {
            "state": "Perfect",
            "description": "Cresting 2 cm au-dessus de la jante (ou 90% de remplissage du Pullman). Jiggle-jiggly. Un poke ressort à mi-chemin.",
            "action": "Badigeonner de crème et cuire."
          },
          {
            "state": "Overdone",
            "description": "Jelly-like, presque tremblant, et extrêmement doux. Poke ne revient pas.",
            "action": "Cuire immédiatement — attendez plus longtemps et la pâte s'effondrera."
          }
        ]
      },
      "feelCue": "Badigeonner la crème ou le lait sur la surface éprouvée : il doit glisser facilement sans déchirer la peau délicate. La surface doit se sentir presque impossiblement douce et légère, comme toucher la joue d'un bébé."
    },
    {
      "nodeId": "step_6",
      "action": "Cuire au four",
      "inputs": [
        "panned_milk_bread",
        "ing_10"
      ],
      "outputState": "finished_japanese_milk_bread",
      "instructions": "Badigeonner le pain de crème ou de lait pour une croûte dorée brillante et profonde. Cuire à 180 °C (355 F) pendant 30 à 35 minutes pour un pain de dôme, ou 35 à 40 minutes avec le couvercle Pullman allumé. Le pain est fait quand le dessus est riche, même doré (pas de taches de pâte pâle), la température interne lit 93–96 C (200–205 F), et les côtés s'éloignent de la poêle. Retirer immédiatement de la casserole et refroidir complètement sur un support de fil pendant au moins 1 heure avant de trancher. La miette sera dense et gommée si elle est coupée à chaud — elle continue à se mettre au froid.",
      "visualCue": {
        "primaryTarget": "Même, dôme doré brillant. Pas de tache pâle. Température intérieure 94 C. Lorsqu'elles sont levées de la casserole, les côtés sont dorés et le fond semble creux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle avec des taches blanches sur le dôme ou les côtés. Température intérieure inférieure à 90 °C. Le pain est doux et lourd lorsqu'il est battu.",
            "action": "Revenez encore 5 minutes. Tente avec feuille si haut est déjà sombre pour terminer la cuisson de l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Riche, même, dôme d'or profond. 94 C interne. Bouton de fond creux. La cuisine sent le lait chaud, le beurre et le sucre caramélisé.",
            "action": "Laisser refroidir 1 heure avant de trancher. La patience ici n'est pas facultative."
          },
          {
            "state": "Overdone",
            "description": "Dôme brun foncé ou cassé. Stiff, la croûte dure.",
            "action": "L'intérieur peut encore être parfait — la croûte enrichie de shokupan durcit rapidement lorsqu'elle est surchauffée, mais la miette survit habituellement."
          }
        ]
      },
      "feelCue": "Un shokupan refroidi comprimé entre deux palmiers devrait revenir complètement et presque silencieusement — la miette tangzhong est si élastique qu'elle absorbe la pression et la libère. Découper une tranche : la miette doit se détacher en longs fils soyeux, en coton-candy, et non s'effondrer."
    }
  ]
};
