export default {
  "repoId": "master_peruvian_causa_limena_001",
  "parentRepoId": null,
  "slug": "causa-limena",
  "author": "ForkRecipe Kitchen",
  "title": "Causa Limeña",
  "description": "Une terrine froide de limeño de pommes de terre jaunes masquée d'ají amarillo et de chaux — acidulée, ensoleillée et étonnamment audacieuse — pressée autour d'une farce de salade de thon crémeuse et tranchée d'avocat, puis réfrigérée dans une tour ferme et trancheuse qui révèle ses couches seulement lorsqu'elle est coupée.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "vegetables",
  "tags": [
    "périuvien",
    "pommes de terre",
    "terrine",
    "Aji-amarillo",
    "Chaux",
    "avocat",
    "thon",
    "froid"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre à chair jaune (papa amarilla ou or du Yukon, pelées)",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "Pommes de terre rousses (blande, mais fonctionne)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Ají amarillo pâte",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "poivron jaune purée + 1⁄2 c. à thé caïenne (mineur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (légume ou tournesol)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Thon en conserve dans l'huile d'olive (drainé)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet pochée, finement déchiquetée",
        "saumon en conserve"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Mayonnaise",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Avocat en rouille (coté 5mm d'épaisseur)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Tranches d'olives noires, oeufs durs, brins de persil frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "câpres, radis tranchés, microherbes"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_potatoes",
      "instructions": "Mettre les pommes de terre pelées et les moitiés dans une casserole d'eau froide bien salée et porter à ébullition. Cuire jusqu'à ce qu'il soit complètement tendre et qu'un couteau glisse sans résistance — environ 20 à 25 minutes selon la taille. Égoutter immédiatement et étaler sur un plateau pour sécher à la vapeur pendant 5 minutes. Cette étape est critique : les pommes de terre humides produisent une causa collante qui ne tiendra pas sa forme. Les pommes de terre doivent être très sèches en purée.",
      "visualCue": {
        "primaryTarget": "Les pommes de terre sont de couleur jaune très pâle, s'écroulant aux bords, avec une surface farineuse complètement sèche après égouttage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un couteau rencontre une résistance au centre. La pomme de terre craque plutôt que compresse.",
            "action": "Retourner à la casserole avec la chaleur à basse température pendant 5 minutes de plus — ne pas re-submerger dans l'eau."
          },
          {
            "state": "Perfect",
            "description": "Une brochette passe avec une résistance nulle. Les bords de la pomme de terre commencent à peine à s'effondrer.",
            "action": "Égoutter et assécher. Ne pas couvrir de plastique — la vapeur doit s'échapper."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre sont arrosées et s'écroulent dans le pot, s'écroulant lorsqu'elles sont levées.",
            "action": "Égoutter extrêmement bien et étaler sur un plateau dans un four à 150°C pendant 5 minutes pour sécher avant d'écraser."
          }
        ]
      },
      "feelCue": "Une pomme de terre causa parfaitement cuite, pressée entre deux doigts, devrait s'effondrer sèchement et immédiatement, comme un bâton de craie, sans printemps humide."
    },
    {
      "nodeId": "step_2",
      "action": "Mash",
      "inputs": [
        "cooked_potatoes",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "causa_dough",
      "instructions": "Alors que les pommes de terre sont encore chaudes, passez-les à travers un rizier de pomme de terre ou pressez-les à travers une passoire à mailles fines avec une spatule — n'utilisez jamais un robot alimentaire, qui les rendra collants. Transférer la pomme de terre rizisée dans un grand bol. Ajouter la pâte ají amarillo, le jus de lime et l'huile. Plier et travailler avec une spatule flexible jusqu'à ce que complètement homogène, sans stries blanches de pommes de terre non mélangées. Assaisonner de sel. La pâte de causa doit avoir un goût audacieux de chaux et d'ají, avec une couleur jaune orange vif et la texture d'argile douce et souple.",
      "visualCue": {
        "primaryTarget": "Une masse uniforme, jaune doré vif — la couleur du jaune d'œuf — sans taches blanches de pommes de terre non mélangées et sans grumeaux visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les stries de pommes de terre blanches non mélangées sont visibles partout, la saveur est inégale.",
            "action": "Plier plus fermement jusqu'à ce qu'il soit complètement uniforme — chaque bouchée doit avoir le même goût."
          },
          {
            "state": "Perfect",
            "description": "Uniforme or-orange, sent intensément la chaux et l'ají, tient sa forme lorsqu'il est pressé dans une boule mais est souple et lisse.",
            "action": "Divisez en trois parties égales. Passez à l'assemblage."
          },
          {
            "state": "Overdone",
            "description": "Surmené — la pâte est devenue dense, collante et légèrement collante.",
            "action": "Malheureusement, cela ne peut être corrigé. Travailler doucement et rapidement à l'avenir — causa n'est pas de la pâte à pain."
          }
        ]
      },
      "feelCue": "La pâte de causa doit se sentir comme dense, fraîche Play-Doh — lisse, souple, et capable de tenir toute forme que vous appuyez sur elle sans craquer ou s'effondrer."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "causa_dough",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "assembled_causa",
      "instructions": "Mélangez le thon égoutté avec la mayonnaise et assaisonnez avec du sel et un peu de chaux — il doit goûter bien assaisonné et crémeux. Étaler un moule à pain ou un moule à anneau individuel avec du plastique. Appuyez fermement sur un tiers de la pâte causa dans la base dans une couche homogène et compacte. Déposer les tranches d'avocat dans une seule couche légèrement recoupante. Étendre le mélange de thon uniformément sur l'avocat. Appuyez sur les deux tiers restants de la pâte causa sur le thon en deux couches égales, en appuyant fermement entre chaque addition pour éliminer les vides d'air. Les couches doivent être denses et cohésives ou la causa s'effondrera lorsqu'elle sera tranchée.",
      "visualCue": {
        "primaryTarget": "Du côté d'un récipient en verre, des bandes horizontales distinctes sont visibles: pomme de terre dorée, avocat vert, thon à la crème, pomme de terre dorée — chaque couche plate et de niveau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches sont inégales, le remplissage du thon a des bosses, des trous d'air sont visibles.",
            "action": "Appuyez fermement sur le dessus avec le dos d'une cuillère humide pour compresser, et réfrigérer comme-est."
          },
          {
            "state": "Perfect",
            "description": "Des couches plates et de niveau avec des distinctions de couleur claires. Le causa assemblé est ferme sous pression douce.",
            "action": "Pliez le plastique sur le dessus et réfrigérez-le pendant au moins 1 heure avant de le démonter."
          },
          {
            "state": "Overdone",
            "description": "La causa a été surremplie et l'enveloppe en plastique ne peut pas se refermer sur le dessus.",
            "action": "Retirer l'excédent de la couche supérieure, le mettre à niveau et procéder. Servir la causa supplémentaire comme une petite dégustation latérale."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur le dessus de la causa assemblée à travers le plastique, il devrait donner légèrement et ensuite résister — ferme et froid, sans friction."
    },
    {
      "nodeId": "step_4",
      "action": "Refroidissement",
      "inputs": [
        "assembled_causa",
        "ing_09"
      ],
      "outputState": "causa_limena",
      "instructions": "Réfrigérer le causa assemblé pendant au moins 1 heure, ou jusqu'à 24 heures — il ne fait qu'améliorer à mesure qu'il ferme et que les saveurs se mélangent. Lorsqu'il est prêt à servir, démoudre sur une planche à découper ou sur une plaque de service en inversant le moule et en levant doucement. Enlevez l'enveloppe en plastique. Avec un couteau tranchant trempé dans l'eau chaude et essuyé entre les coupes, couper en portions propres. Garnir chaque portion d'olives noires tranchées, de quartiers d'oeufs durs et de persil. Servir à froid — le causa est un plat froid.",
      "visualCue": {
        "primaryTarget": "Coupes transversales claires et visibles lorsqu'elles sont tranchées — pomme de terre dorée, avocat vert, thon blanc crème, pomme de terre dorée — chaque couche est distincte et intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Causa s'écroule en tranches, les couches ne tiennent pas ensemble.",
            "action": "Il a fallu plus de temps au réfrigérateur — 1 heure minimum, 2 heures idéales. Servez-le comme un tas de fourche et appelez-le déconstruite."
          },
          {
            "state": "Perfect",
            "description": "Une tranche nette et nette révèle de belles couches horizontales distinctes. La causa tient sa forme sur l'assiette sans s'effondrer.",
            "action": "Garnir et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Causa a été réfrigéré trop longtemps (plus de 24 heures) - l'avocat a légèrement décoloré.",
            "action": "Couper tout bord d'avocat décoloré visible dans la tranche. La saveur est encore excellente — servir avec confiance."
          }
        ]
      },
      "feelCue": "La première fourche devrait donner un coup propre et frais à travers la pomme de terre et un rendement doux à travers l'avocat — le contraste de ferme et de rendement en une seule bouchée est le point."
    }
  ]
};
