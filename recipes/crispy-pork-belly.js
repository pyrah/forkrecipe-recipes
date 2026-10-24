export default {
  "repoId": "master_chinese_crispy_pork_belly_001",
  "parentRepoId": null,
  "slug": "crispy-pork-belly",
  "author": "ForkRecipe Kitchen",
  "title": "Porc Crispy Belly",
  "description": "Siu yuk cantonais à son meilleur — la peau se brise en mille laques, la graisse en dessous a rendu à une couche translucide, donnant, et la viande en dessous est assaisonnée profondément dans le grain.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "proteins",
  "tags": [
    "porc",
    "cantonais",
    "croustillant",
    "rôti",
    "Chinois",
    "Siu-yuk"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "8 hr",
  "ratioSystem": "parts",
  "stars": 1987,
  "forks": 278,
  "contributors": 61,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-20",
  "updatedAt": "2025-04-05",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre (peau, désossée)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poudre de cinqpices",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Mélange chinois à cinq épices"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Poivre blanc (sol)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre blanc",
        "vinaigre de malt"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Cuisson de soda (pour la peau)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Score",
      "inputs": [
        "ing_01"
      ],
      "outputState": "scored_pork",
      "instructions": "À l'aide d'une brochette métallique ou d'une fourche, piquer la peau du ventre de porc des centaines de fois sur toute sa surface, allant à environ 5 mm de profondeur mais ne perçant pas à travers la couche grasse. Flip le ventre et marquer le côté de la viande dans un motif de croisement, 2cm de profondeur. Cette perturbation mécanique de la peau crée des canaux pour rendre la graisse à échapper lors de la torréfaction, ce qui provoque la peau à cloquer et à briser.",
      "visualCue": {
        "primaryTarget": "La surface de la peau est recouverte uniformément de petits trous de perforation, ne montrant pas de grandes taches non perforées. Le côté viande a un motif de diamant soigné de coupes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau a des perforations clairsemées; de grandes surfaces restent lisses et intactes.",
            "action": "Continuer à piéger - même la couverture est essentielle. Les zones intactes resteront durs et mâcheuses."
          },
          {
            "state": "Perfect",
            "description": "La peau ressemble à du papier à grain fin, uniformément piqué. Le côté viande montre des coupes de diamants uniformes sans déchirer.",
            "action": "Passez à l'assaisonnement."
          },
          {
            "state": "Overdone",
            "description": "La peau a été percée si profondément que la couche de graisse inférieure est exposée et commence à se séparer.",
            "action": "Faites attention — la peau peut se rétrécir de façon plus agressive; surveillez attentivement pendant la cuisson."
          }
        ]
      },
      "feelCue": "Exécutez un doigt sur la peau piquée — il devrait se sentir rugueux et brillant comme du papier de sable grossier, sans tache lisse. La peau ne doit pas fléchir lorsque vous essayez de la plier."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "scored_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "seasoned_pork",
      "instructions": "Flip le ventre côté viande. Frottez la poudre à cinq épices, l'ail haché, le poivre blanc et la moitié du sel à fond dans la viande et dans toutes les coupes — assaisonner le plus profondément possible dans les coupes. Dépliez la peau et frottez le sel restant uniformément sur la peau. Placer le côté peau, à découvert, au réfrigérateur pendant au moins 6 heures ou pendant la nuit. L'air dessivant du réfrigérateur est ce qui conduit l'humidité finale hors de la peau.",
      "visualCue": {
        "primaryTarget": "Après la réfrigération, la peau est visiblement sèche — presque papier — et s'est resserrée. La surface a l'air translucide et cuir, pas humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau semble encore humide et pluvieuse après réfrigération, avec un éclat d'humidité.",
            "action": "Retourner au réfrigérateur pendant plusieurs heures. Ne sautez pas cette étape."
          },
          {
            "state": "Perfect",
            "description": "La peau est sèche, légèrement translucide et tendue. Il fait un son faible lorsqu'il est tapé avec un ongle.",
            "action": "Procéder au traitement acide et à la torréfaction."
          },
          {
            "state": "Overdone",
            "description": "La peau est très foncée et contractée; elle est au réfrigérateur depuis plus de 24 heures.",
            "action": "Encore bien de procéder — un séchage plus long donnera généralement des résultats plus nets."
          }
        ]
      },
      "feelCue": "Après une nuit de séchage, la peau doit se sentir comme un parchemin sec, raide, frais et presque translucide lorsqu'elle est maintenue à la lumière. Il devrait faire un doux bruit de ride quand flexed."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "seasoned_pork",
        "ing_05",
        "ing_07"
      ],
      "outputState": "roasted_pork",
      "instructions": "Dissoudre généreusement le bicarbonate de soude dans le vinaigre de riz et brosser sur la peau; l'alcalinité augmente le pH de la peau, accélérant la réaction de Maillard et conduisant au croustillant. Placez le côté peau sur un support en fil sur un plateau doublé de feuilles. Faire cuire à 180 °C (360 °F) pendant 50 minutes pour rendre la graisse, puis sauter à 230 °C (450 °F) pendant 20 à 25 minutes pour le craquage. Veillez attentivement à la dernière étape: la transformation de rendu à cloqué est rapide.",
      "visualCue": {
        "primaryTarget": "Dans la phase à haute chaleur, la peau est activement cloquée: de petites bulles dorées se forment, se lèvent et tournent en ambre profond sur toute la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est dorée mais plate et vitreuse, sans cloques ni bulles visibles.",
            "action": "Augmenter la température du four à 240°C et continuer à surveiller toutes les 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Toute la surface est recouverte de blister doré-ambre de différentes tailles, comme une carte topographique. Acajou profond où les cloques ont atteint leur maximum.",
            "action": "Retirer immédiatement et reposer 10 minutes avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Les blisters ont noirci; fumée acride provenant du four. La surface de la peau est carbonisée.",
            "action": "Supprimer immédiatement. Gratter les zones entièrement carbonisées avec un couteau avant de servir."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez doucement sur la peau avec une poignée de cuillère, il doit sonner creux et craquer audiblement, comme taper un ornement de Noël en verre. Les plaquettes thermoformées doivent se sentir rigides, non molles."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "roasted_pork"
      ],
      "outputState": "rested_pork_belly",
      "instructions": "Retirez le four et reposez-vous sur le support de fil — jamais sur une surface plane qui emprisonnerait la vapeur et adoucirait le craquage. Reposez-vous 10 minutes avant de trancher. Couper à l'aide d'un couteau à clivage pointu ou d'un couteau de chef lourd avec une pression vers le bas plutôt que de scier; le sciage brise les fissures inégalement.",
      "visualCue": {
        "primaryTarget": "Le craquage reste rigide et uniformément cloqué comme il repose. Aucune vapeur ne s'échappe de la surface de la peau. La couche de graisse sous la peau est visible comme un éclat à travers la peau translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vapeur s'élève de la surface de la peau pendant le repos; le craquage est légèrement doux lorsqu'il est pressé.",
            "action": "Reposez-vous plus longtemps sur la grille — l'humidité de surface doit s'évaporer complètement."
          },
          {
            "state": "Perfect",
            "description": "Le craquage est rigide, effarouché et complètement sec. La couche de graisse est blanche, pas liquide.",
            "action": "Couper avec confiance et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le craquage est resté trop longtemps et a commencé à absorber l'humidité ambiante, devenant légèrement cuireux.",
            "action": "Retourner à un four à 230°C pendant 5 minutes pour re-crisp."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt contre le craquage — il devrait se briser immédiatement vers l'intérieur avec un coup aigu. Soulevez une pièce et elle doit se sentir sans poids et rigide; toute flexibilité signifie que l'humidité est encore présente."
    }
  ]
};
