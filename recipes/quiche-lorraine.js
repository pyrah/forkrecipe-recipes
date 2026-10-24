export default {
  "repoId": "master_french_quichelorraine_001",
  "parentRepoId": null,
  "slug": "quiche-lorraine",
  "author": "ForkRecipe Kitchen",
  "title": "Quiche Lorraine",
  "description": "Une coquille de tarte à croûte courte classique, cuite à l'aveuglette à un croustillant et remplie d'une crème cuite, d'œufs, de lardons et de Gruyère – cuite jusqu'à ce qu'elle soit simplement mise avec le tremblement le plus faible au centre, la surface un profond ondulation dorée.",
  "cuisine": "Français",
  "culture": "Alsace-Lorraine",
  "category": "eggs",
  "tags": [
    "quiche",
    "français",
    "tarte",
    "œufs",
    "Coutard",
    "gruyère",
    "lardons",
    "pâtisserie"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine pure (toute destination)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, froid, cubes",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau glacée",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Lardons (bacon fumé coupé en écailles, coupé en petits bâtons)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "cubes de pancetta fumés",
        "guanciale"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Oeufs grands",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Double crème (crème lourde, 35% de gras minimum)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche",
        "demi crème + crème fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Fromage Gruyère, râpé grossièrement",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Emmental",
        "Cheddar âgé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre blanc fin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crémer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "shortcrust_pastry",
      "instructions": "Dans un grand bol froid, mélanger la farine et le sel. Ajouter le beurre cube froid tout à la fois. En n'utilisant que le bout des doigts (pas les paumes, qui réchauffent le beurre), frottez rapidement le beurre dans la farine jusqu'à ce que le mélange ressemble à de la chapelure grossière avec des morceaux de beurre de taille de pois encore visibles — ces poches de beurre sont ce qui crée une pâte molle et courte. Le processus de frottement ne doit pas durer plus de 2 minutes. Si le beurre commence à fondre, réfrigérer le bol pendant 10 minutes et reprendre. Ajouter l'eau glacée une cuillère à soupe à la fois, en mélangeant avec une fourchette, jusqu'à ce que la pâtisserie se réunisse lorsque vous pressez une poignée — il ne devrait pas être mouillé ou collant. Former dans un disque plat, envelopper en plastique et réfrigérer pendant au moins 30 minutes. Le repos à froid est obligatoire : le gluten se détend, ce qui empêche la pâtisserie de rétrécir pendant la cuisson à l'aveugle.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse et mijotée avec des flocons de beurre visibles, tenant ensemble lorsqu'elle est pressée mais n'ayant pas l'air lisse ou humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est émiettée et s'effondre lorsqu'elle est pressée — trop sèche.",
            "action": "Ajouter de l'eau glacée une cuillère à café à la fois, presser (pas pétrir) jusqu'à ce que la pâte se tienne."
          },
          {
            "state": "Perfect",
            "description": "Toux, miettes, avec des morceaux de beurre visibles de la taille des pois. Il tient une forme ferme lorsqu'il est pressé. Ne semble pas mouillé ou collant.",
            "action": "Former dans un disque, envelopper et réfrigérer pendant 30 minutes minimum."
          },
          {
            "state": "Overdone",
            "description": "La toux est lisse et élastique par surmenage, ou grasse par le beurre chaud — le gluten s'est développé et la pâtisserie sera dure.",
            "action": "Réfrigérer pendant 1 heure et procéder. La pâtisserie sera moins molle mais toujours comestible."
          }
        ]
      },
      "feelCue": "La pâte à croûte courte, bien préparée, doit se sentir fraîche et sablonneuse lorsqu'elle est frottée entre les doigts, avec des flocons de beurre froid distincts encore perceptibles — pas chaud, lisse ou pâteux."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire au four",
      "inputs": [
        "shortcrust_pastry"
      ],
      "outputState": "blind_baked_shell",
      "instructions": "Sur une surface légèrement farinée, rouler la pâte froide dans un cercle d'environ 3 mm d'épaisseur et assez grand pour allonger une boîte de tarte à fond lâche de 23 cm avec un surplomb de 3 cm. Drapez-le au-dessus de la goupille et déroulez-le dans l'étain, en appuyant doucement sur la base et les côtés sans s'étirer. Couper l'excédent à 1 cm au-dessus du bord (il se rétrécira légèrement dans le four). Piquez la base à l'aide d'une fourchette (ceci empêche les bulles). Étaler la pâtisserie avec du papier à pâtisserie et remplir de fèves céramiques ou de riz séché. Réfrigérer 15 minutes. Cuire à l'aveugle à 190 C (375 F) pendant 15 minutes avec les haricots, puis retirer le papier et les haricots et cuire 10 à 12 minutes de plus jusqu'à ce que la base soit dorée et que les bords soient de couleur biscuit clair. La base doit être entièrement cuite avant le remplissage — une base humide ne se rétablira jamais une fois le remplissage versé.",
      "visualCue": {
        "primaryTarget": "Une coquille de tarte à l'or uniformément pâle, sertie et sèche à la base, avec des bords bruns légèrement dorés et aucune tache crue ou pâteuse visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base est encore pâle et légèrement crue, tacky quand elle est touchée. Le centre s'est effondré malgré les fiançailles.",
            "action": "Retournez au four sans les haricots pendant 5 minutes supplémentaires à 190 C."
          },
          {
            "state": "Perfect",
            "description": "Même de l'or pâle partout, serti et sec. Les bords sont légèrement plus sombres. Une odeur très faible de beurre et de biscuits. La base semble creuse quand elle est tapée.",
            "action": "Laisser refroidir légèrement et verser le remplissage. Trim n'importe quelle pâte excédentaire avec un couteau tranchant à la jante."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et la base approche de la couleur d'un biscuit, légèrement surcuit.",
            "action": "Passez au remplissage. La saveur plus foncée de la pâtisserie surcuite complétera le remplissage salé."
          }
        ]
      },
      "feelCue": "Tapez sur la base de la coquille borgne avec un doigt — il devrait sembler légèrement creux, comme tapoter une plaque de porcelaine, pas doux et terne. La surface doit être sèche et ferme, non molle ou printanière."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "ing_05"
      ],
      "outputState": "rendered_lardons",
      "instructions": "Placer les lardons dans une poêle froide (à partir du froid rend la graisse plus complètement). Mettre à feu moyen et cuire, en remuant occasionnellement, jusqu'à ce que la graisse soit complètement rendue et que le bacon soit doré et légèrement croustillant sur les bords, 6–8 minutes. Les lardons devraient être dorés, non carbonisés; la quiche continuera à les cuire pendant le four et ils se raffermiront davantage. À l'aide d'une cuillère à fente, transférer les lardons dans les serviettes en papier pour égoutter. Jeter la graisse fondue (ou économiser pour la cuisson). Les lardons doivent être drainés de l'excès de graisse ou la quiche finie sera grasse et la crème se séparera.",
      "visualCue": {
        "primaryTarget": "Les lardons dorés, rendus et légèrement croquants aux bords, n'ont pas de taches grises à l'aspect cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lardons sont encore roses et gris, gras non rendu, doux et mâcheux.",
            "action": "Continuer la cuisson à feu moyen, en remuant. La graisse doit être rendue avant que le bacon ne brunisse."
          },
          {
            "state": "Perfect",
            "description": "Uniformement doré, légèrement croquant aux bords, gras entièrement rendu. Sensation de graisse de bacon caramélisée.",
            "action": "Égoutter sur les serviettes en papier et réserver pour refroidir."
          },
          {
            "state": "Overdone",
            "description": "Les lardons sont brun foncé et émietté, certains brûlés aux bords — auront un goût amer dans la quiche finie.",
            "action": "Utilisez-les s'ils sont à peine surdosés; jetez-les s'ils sont réellement brûlés. Le remplissage de quiche masquera partiellement toute légère surcuisson."
          }
        ]
      },
      "feelCue": "Un lard bien rendu produit légèrement lorsqu'il est pressé entre les doigts — la graisse est épuisée et la viande est légèrement croquante, mais encore humide à l'intérieur, pas dure et caoutchouteuse."
    },
    {
      "nodeId": "step_4",
      "action": "Fouetter",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10",
        "ing_11"
      ],
      "outputState": "custard_mixture",
      "instructions": "Dans une grande cruche, fouetter légèrement les œufs — juste assez pour combiner jaunes et blancs sans créer de mousse. Ajouter la double crème, le lait, le poivre blanc et une très petite grille de muscade fraîche. fouetter doucement pour combiner. La crème doit être aussi exempte de bulles que possible — une mousse excessive rendra la surface de quiche finie piquée et poreuse plutôt que lisse et dorée. Goûtez à la crème crue pour l'assaisonnement, mais vous pouvez sentir le niveau de sel et d'épices. La quiche classique Lorraine n'utilise qu'une très petite quantité de sel dans le remplissage, car les lardons et Gruyère contribuent tous deux à une salinité significative.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, jaune pâle, à peine mousseux, qui coule librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches encore visibles — les blancs d'œufs ne sont pas entièrement incorporés dans les jaunes et la crème.",
            "action": "fouetter doucement jusqu'au jaune pâle uniforme."
          },
          {
            "state": "Perfect",
            "description": "Jaune doré pâle, lisse, très peu de bulles, coule librement du pot sans grumeaux.",
            "action": "Passez à travers un tamis fin dans un pot propre si vous voyez des morceaux ou des bulles excédentaires."
          },
          {
            "state": "Overdone",
            "description": "Custard est fortement mousseux à cause d'un fouet excessif — la surface est recouverte d'une mousse blanche épaisse.",
            "action": "Laisser reposer 5 minutes jusqu'à ce que la mousse se dépose avant de verser dans la coquille."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la crème — il devrait se sentir à peine plus riche que le lait entier, pas épais comme la crème lourde à lui seul. Les œufs ne l'ont pas encore épaissi, ce qui arrive au four."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "blind_baked_shell",
        "rendered_lardons",
        "ing_09",
        "custard_mixture"
      ],
      "outputState": "finished_quiche_lorraine",
      "instructions": "Placer la coquille au four sur un plateau de cuisson (ce qui facilite le déplacement et permet d'attraper tout dépassement). Dispersez les lardons égouttés uniformément sur la base de la coquille de tarte. Dispersez le Gruyère râpé uniformément sur les lardons. Verser le mélange de crème lentement et soigneusement dans la coquille, le remplir à 3–4 mm au-dessous de la jante de pâte — laisser la place à la crème pour s'étendre légèrement. Transférer au four (180 C / 355 F) et cuire pendant 28 à 35 minutes, jusqu'à ce que la quiche soit posée aux bords, mais qu'elle ait encore un léger tremblement au centre même lorsque vous secouez le plateau de cuisson. La surface doit être un brun doré profond, avec des ondulations douces de la crème en dessous. Une quiche a été cuite jusqu'à ce qu'elle soit complètement rigide au centre — la crème sera granuleuse et pleurera.",
      "visualCue": {
        "primaryTarget": "Une surface en bronze d'or profonde avec des ondulations douces et irrégulières; le centre montrant un tremblement subtil lorsque le plateau est bouché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toute la surface de la quiche est pâle et humide, et le centre s'enroule comme du liquide quand le plateau est bouché.",
            "action": "Retourner au four 5 minutes de plus et vérifier à nouveau. Les bords doivent être entièrement réglés avant que le centre ne soit considéré comme terminé."
          },
          {
            "state": "Perfect",
            "description": "Surface dorée profonde, bords complètement fixés et fermes lorsqu'ils sont touchés, le centre a un tremblement lent et circulaire, comme la gelée, qui s'installe en 5 secondes. Un couteau mince inséré à 3 cm du centre sort propre.",
            "action": "Retirer du four et laisser refroidir sur une grille pendant au moins 20 minutes avant de trancher. La chaleur résiduelle finira le centre."
          },
          {
            "state": "Overdone",
            "description": "La surface est très sombre doré-brun, bords gonflés et légèrement fissurés. Pas de tremblement — le centre est entièrement fixé et rigide.",
            "action": "Supprimer immédiatement. Refroidir sur une grille. La crème sera probablement légèrement grainée dans la texture mais la saveur reste bonne."
          }
        ]
      },
      "feelCue": "Reposez-vous doucement sur la surface de la quiche à son centre, 5 minutes après avoir retiré le four – il devrait se sentir chaud mais produire légèrement, comme presser une mousse ferme, pas solide comme du fromage."
    }
  ]
};
