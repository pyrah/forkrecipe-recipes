export default {
  "repoId": "master_french_eclairs_001",
  "parentRepoId": null,
  "slug": "eclairs",
  "author": "ForkRecipe Kitchen",
  "title": "Éclairs au chocolat",
  "description": "Les plus exigeants des classiques de la pâtisserie française — une coquille creuse de pâte à choux qui doit être absolument sèche et rigide, remplie de crème de pâtisserie froide qui a été pliée avec de la crème fouettée à la légèreté de soie, scellée avec un fondant de chocolat noir brillant miroir qui se met en quelques secondes et craque proprement quand mordu.",
  "cuisine": "Français",
  "culture": "Pâtisserie française",
  "category": "desserts",
  "tags": [
    "Éclairs",
    "Choux",
    "Crème de pâtisserie",
    "chocolat",
    "français",
    "pâtisserie",
    "élégant"
  ],
  "difficulty": 4,
  "activeTime": "90 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 1567,
  "forks": 112,
  "contributors": 27,
  "license": "CC-BY-SA",
  "createdAt": "2025-03-08",
  "updatedAt": "2025-07-01",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié eau, moitié lait entier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, cube",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général, ciselée",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de pain (coquille plus sèche)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Gros œufs (température ambiante)",
      "ratioValue": 110,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Lait entier (pour la crème de pâtisserie)",
      "ratioValue": 150,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Jaunes d'œufs (pour la crème de pâtisserie)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre granulé (pour la crème de pâtisserie)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Farine de maïs (pour crème de pâtisserie)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de crème"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Structure",
      "name": "Chocolat noir (64%) pour glaçage de fondant",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Crème lourde (pour glaçage de fondant)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crème pâtissière cuite",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "pastry_cream",
      "instructions": "Chauffer le lait à une mijotée nue. Dans un bol, fouetter les jaunes, le sucre et la fécule de maïs jusqu'à ce qu'ils soient pâles et épais. Verser la moitié du lait chaud sur le mélange d'oeufs, fouetter constamment, puis retourner tout dans la casserole. Cuire à feu moyen, en remuant constamment avec un fouet, jusqu'à ce que la crème s'épaississe et s'épaississe — il faut qu'elle atteigne un ébullition complet pour faire cuire complètement l'enzyme de fécule de maïs qui la rende mince à nouveau lors du refroidissement. Placer le tamis dans un bol propre, presser le plastique directement sur la surface et réfrigérer jusqu'à ce qu'il soit complètement froid – au moins 2 heures.",
      "visualCue": {
        "primaryTarget": "Crème épaisse, brillante, lisse sans grumeaux. Lorsqu'un doigt est traîné à travers un revêtement à l'arrière d'une cuillère, la ligne se maintient proprement sans s'écouler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est encore versable et mince. Une ligne de doigt sur le dos d'une cuillère revient immédiatement. Il n'a pas atteint un ébullition complet.",
            "action": "Continuer la cuisson et remuer vigoureusement. La crème de pâtisserie sous-cuite a un goût d'amidon et s'amincit considérablement sur la réfrigération."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, et à peine versable à l'état chaud. Assure une consistance ferme et trancheuse lorsqu'elle est réfrigérée. Le test de la ligne des doigts tient parfaitement.",
            "action": "Appuyez immédiatement sur l'enveloppe plastique directement sur la surface et réfrigérez."
          },
          {
            "state": "Overdone",
            "description": "La crème est devenue très épaisse et bosselée. Petits caillés visibles — les protéines d'oeufs ont commencé à coaguler en œuf brouillé.",
            "action": "Plongez immédiatement dans un tamis fin et fouettez vigoureusement — souvent récupérables si vous agissez rapidement."
          }
        ]
      },
      "feelCue": "La crème doit tomber du fouet dans les vagues épaisses et lentes quand elle est faite — plus dense que la hollandaise mais plus légère que le pudding. L'arôme doit être propre et laiteux avec une note d'oeuf cuit, jamais féculent ou cru."
    },
    {
      "nodeId": "step_2",
      "action": "Tuyaux",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "piped_eclairs",
      "instructions": "Faire du pâte à choux: porter l'eau, le beurre et le sel à ébullition, ajouter toute la farine à la fois, remuer vigoureusement jusqu'à ce que la pâte s'éloigne de la poêle et former une pellicule sèche sur le fond (environ 2 minutes à feu moyen). Laisser refroidir 2 minutes, puis battre les œufs un à la fois jusqu'à ce que la pâte tombe d'une cuillère dans un ruban en V. Remplir un sac de tuyauterie d'un grand bout uni (14mm). Tube de 12cm de grumes sur une feuille parcheminée, gardant le tuyau absolument à niveau et cohérent en pression. Mouiller un doigt et lisser les pics.",
      "visualCue": {
        "primaryTarget": "Grumes uniformes de 12cm avec un diamètre constant d'environ 2,5cm. La surface est lisse sans pics ni crêtes. Tous les journaux sont de la même taille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les logs sont d'épaisseur inégale — graisse au début, mince à la fin. La pâte traînée comme elle a été débitée. Des pics visibles où le sac de tuyauterie a été levé.",
            "action": "Des pics lisses avec un bout humide. Une épaisseur inégale conduit à une cuisson inégale: des sections plus épaisses restent crues alors que de fines sections brûlent."
          },
          {
            "state": "Perfect",
            "description": "Des billes uniformes et lisses de 12cm de diamètre constant. La surface est légèrement brillante. Tout semble identique.",
            "action": "Cuire immédiatement à 200°C pendant 25 à 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "La toux était trop molle et les billes se sont étendues à plat. Ils sont plus larges que prévu et la forme a perdu de définition.",
            "action": "Faire cuire de toute façon — la coquille fonctionnera mais peut être plus difficile à remplir uniformément."
          }
        ]
      },
      "feelCue": "La pâte doit être lisse mais légèrement collante lorsqu'elle est touchée. Lorsque vous retirez le sac de tuyauterie, la pâte doit s'étirer jusqu'à un point fin, puis claquer propre — s'il ne claque pas, il est trop humide."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "piped_eclairs"
      ],
      "outputState": "baked_eclairs",
      "instructions": "Cuire à 200 °C (390 °F) pendant 25 minutes sans ouvrir le four — la vapeur à l'intérieur des coquilles est la cause de la cavité creuse, et l'air froid les effondrera irréversiblement. Après 25 minutes, réduire à 170°C et cuire encore 10 minutes avec la porte du four légèrement ajar pour permettre à la vapeur de s'échapper. Les coquilles finies doivent être de couleur dorée profonde, complètement sèches, creuses et rigides. Piercez chaque extrémité immédiatement avec une brochette quand ils sortent du four.",
      "visualCue": {
        "primaryTarget": "De profondes coquilles dorées-ambres qui se sentent complètement rigides lorsqu'elles sont pressées doucement. Son creux quand tapoté. La fissure le long de la partie supérieure (la fente naturelle des choux) semble sèche et sertie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or mais les coquilles se sentent douces et légèrement fléchissantes lorsqu'elles sont pressées. L'intérieur est encore humide, le creux n'a pas complètement séché.",
            "action": "Faites cuire 5 minutes de plus avec la porte ajar. Les éclairs mous s'effondrent en quelques minutes et ne peuvent être remplis."
          },
          {
            "state": "Perfect",
            "description": "Des coquilles d'or rigides et profondes qui sonnent creux lorsqu'elles sont tapées. La séparation naturelle le long du dessus est sèche et set. Ils tiennent leur forme complètement.",
            "action": "Pierce se termine immédiatement et refroidit complètement sur un rack avant de le remplir."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, presque acajou. Les coquilles sont extrêmement rigides et la fissure naturelle s'est ouverte très large, exposant l'intérieur creux.",
            "action": "Procéder — le four plus foncé signifie une coquille légèrement plus amère, qui se marie bien avec la crème de pâtisserie douce."
          }
        ]
      },
      "feelCue": "Une coquille d'éclair parfaitement cuite se sent creuse et légère, presque impossible à mettre en lumière pour sa taille. Pressez doucement entre le pouce et les doigts : il devrait être complètement rigide sans donner du tout, comme serrer un cracker sec."
    },
    {
      "nodeId": "step_4",
      "action": "Remplir",
      "inputs": [
        "baked_eclairs",
        "pastry_cream"
      ],
      "outputState": "filled_eclairs",
      "instructions": "fouetter brièvement la crème de pâtisserie fraîche jusqu'à ce qu'elle soit lisse. Remplissez un sac de tuyauterie d'un petit bout uni (5mm). Insérez l'extrémité dans l'un des bouts percés de chaque clairon et pipe lentement, en remplissant jusqu'à ce que la crème commence juste à émerger de l'autre bout. La coquille doit se sentir nettement plus lourde et les côtés doivent résister doucement lorsqu'ils sont pressés, signe de remplissage uniforme. Ne pas surcharger — les coquilles de gonflement semblent maladroites et risquent de craquer.",
      "visualCue": {
        "primaryTarget": "Chaque clair se sent uniformément pondéré et lourd. Une petite perle de crème est à peine visible aux deux extrémités. Pas de bourdonnement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'éclair est léger et creux. Très peu de crème a émergé de l'extrémité au cours du remplissage. Une morsure révélera une grande cavité vide.",
            "action": "Insérez à nouveau l'embout de tuyauterie et ajoutez plus de crème – le but est complet, même le remplissage partout."
          },
          {
            "state": "Perfect",
            "description": "Shell se sent lourd et uniforme. Une petite perle de crème à chaque perçage. Les côtés sont lisses sans gonflement. Le remplissage sera cohérent dans chaque bouchée.",
            "action": "Plongez dans la glaçure au chocolat immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les côtés commencent à gonfler vers l'extérieur et peuvent se fissurer. La crème émerge librement des deux extrémités.",
            "action": "La coquille a été surchargée. Appuyez doucement sur les côtés pour redistribuer, et émailler immédiatement pour tenir forme."
          }
        ]
      },
      "feelCue": "Un éclair bien rempli devrait avoir l'impression d'avoir un intérieur dense et uniforme — pas de centre creux, pas de taches lourdes. Courez vos doigts le long de la longueur: il doit se sentir toujours solide et modérément pondéré."
    },
    {
      "nodeId": "step_5",
      "action": "Glace",
      "inputs": [
        "filled_eclairs",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_eclairs",
      "instructions": "Faire la glaçure: faire mijoter la crème lourde, verser sur le chocolat noir haché, attendre 60 secondes, puis remuer du centre vers l'extérieur jusqu'à ce que complètement lisse et brillant. Plongez le haut de chaque éclair dans la glaçure à un angle de 45 degrés, permettant l'excès de goutter pendant 3-4 secondes. Exécutez un doigt propre le long d'un bord du côté trempé pour créer une ligne de glaçage propre. Réfrigérer pendant 20 minutes pour mettre la glaçure avant de servir. La glaçure devrait être ferme et se fissurer proprement quand elle est mordue.",
      "visualCue": {
        "primaryTarget": "Une casquette en chocolat lisse, brillant miroir, couvrant le tiers supérieur de chaque clairon. La ligne de glaçure est propre et de niveau. Pas de gouttes sur les côtés. La glaçure a mis sur une surface ferme et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glaçure est trop chaude et mince — elle descend les côtés plutôt que de s'asseoir dans un capuchon contrôlé. Des gouttes visibles sur la coquille. La surface ne sera pas assez ferme.",
            "action": "Laissez refroidir la glaçure jusqu'à ce qu'elle recouvre l'arrière d'une cuillère — environ 35–38°C est idéal pour tremper."
          },
          {
            "state": "Perfect",
            "description": "Couvercle de glaçage propre et de niveau avec une brillance miroir. Pas de gouttes. La glaçure se met à la température ambiante en environ 5 minutes et se sent ferme — et non latte — lorsqu'elle est touchée.",
            "action": "Servir dans les 4 heures suivant le vitrage."
          },
          {
            "state": "Overdone",
            "description": "La glaçure a trop refroidi et est épaisse et matifiée. Il traîne sur la surface de la coque et se sert d'une texture rugueuse et inégale.",
            "action": "Chauffer la glaçure délicatement sur un bain-marie à 38°C et réaspirer."
          }
        ]
      },
      "feelCue": "Un ensemble de glaçures doit se sentir ferme et frais sous un bout de doigt — pas collant. Lorsque vous mordez à travers elle, il devrait craquer proprement avec un coup aigu, satisfaisant avant de céder la place à la crème de pâtisserie fraîche et soyeuse à l'intérieur."
    }
  ]
};
