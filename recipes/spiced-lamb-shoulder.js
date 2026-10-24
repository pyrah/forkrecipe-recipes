export default {
  "repoId": "master_moroccan_spiced_lamb_shoulder_001",
  "parentRepoId": null,
  "slug": "spiced-lamb-shoulder",
  "author": "ForkRecipe Kitchen",
  "title": "Épaules marocaines à agneau rouillé lentement",
  "description": "Une épaule d'agneau en os frotté avec une pâte épaisse de ras el hanout, conserve le citron et l'ail, puis rôti lentement jusqu'à ce que la viande donne au toucher le plus léger et tombe de l'os en lambeaux tendres et parfumés.",
  "cuisine": "Maroc",
  "culture": "Maroc",
  "category": "proteins",
  "tags": [
    "Maroc",
    "agneau",
    "torréfié lentement",
    "Le ras-el-hanout",
    "nord-africain",
    "épicé"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "5 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau désossée (2–2,5 kg)",
      "ratioValue": 2200,
      "defaultUnit": "g",
      "substitutions": [
        "cuisse d'agneau désossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Le Président",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Citron conservé, rind seulement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à thé zeste de citron + 1 c. à thé sel"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Graines de romarin fraîches",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "thym"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks de poulet ou d'agneau",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "eau avec une pression de citron"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Fils de safran, trempés dans 2 c. à soupe d'eau chaude",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sirop de date"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Coriandre fraîche et persil à feuilles plates, mélangées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Amandes grillées ou pignons de pin",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_10",
        "ing_11"
      ],
      "outputState": "spice_paste",
      "instructions": "Pound ou mélanger l'ail à une pâte avec une pincée de sel. Finement hacher la croûte de citron conservée. Combiner avec le ras el hanout, l'huile d'olive, la coriandre, l'eau de safran, le miel et le sel pour former une pâte aromatique épaisse. Goûter — il doit être salé, floral, ailé et brillant avec des agrumes.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et orange rouille avec des taches d'herbe visibles et des fils de safran. Doit envelopper l'arrière d'une cuillère sans goutter.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est trop fine et grasse. Il n'adhérera pas à la surface de l'agneau.",
            "action": "Ajoutez plus de ras el hanout ou livrez l'ail plus soigneusement pour épaissir."
          },
          {
            "state": "Perfect",
            "description": "Assez épais pour tenir sa forme sur une cuillère. Profondément aromatique avec du safran, du cumin, de la cannelle et du citron conservé, tous distincts.",
            "action": "Appliquer immédiatement sur l'agneau."
          },
          {
            "state": "Overdone",
            "description": "S/O — c'est une pâte brute.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Goûtez un bout de pâte — le safran doit s'enregistrer comme floral et faiblement métallique, le citron conservé comme brillant et saline, le ras el hanout comme chaud et complexe."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "spice_paste",
        "ing_08"
      ],
      "outputState": "marinated_shoulder",
      "instructions": "À l'aide d'un petit couteau tranchant, faire 12–16 incisions profondes sur toute l'épaule, 3–4 cm de profondeur. Poussez une tranche d'ail et une pincée de pâte d'épices dans chaque. Frottez le reste de la pâte sur l'extérieur, en l'ouvrant dans chaque crevasse et autour de l'os. Branches de romarin cousues sous l'épaule. Marinate couverte au réfrigérateur pendant au moins 4 heures, idéalement pendant la nuit.",
      "visualCue": {
        "primaryTarget": "L'épaule est complètement recouverte d'une pâte épaisse et parfumée orange-brun sans taches de viande nues visibles. Les incisions sont farcies de pâte et d'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte n'est qu'en surface, pas d'incisions. Les saveurs ne pénétreront pas profondément dans l'épaule épaisse.",
            "action": "Coupez les incisions — elles sont essentielles pour une épaule aussi grande."
          },
          {
            "state": "Perfect",
            "description": "Toutes les incisions farcies, toute la surface épaissement recouverte. Après une nuit de mariage, la pâte s'est obscurcie et s'est fermement collée.",
            "action": "Porter à température ambiante 1 heure avant la torréfaction."
          },
          {
            "state": "Overdone",
            "description": "Sur-marié au-delà de 24 heures.",
            "action": "Toujours excellent. Continuez."
          }
        ]
      },
      "feelCue": "Après la matinée de la nuit, la pâte doit se sentir presque sèche à la surface, elle s'est collée à l'agneau et formera une croûte au four."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "marinated_shoulder",
        "ing_09"
      ],
      "outputState": "slow_roasted_shoulder",
      "instructions": "Placez l'épaule dans un grand plat rôti. Versez le stock autour de la base. Couvrir étroitement avec deux couches de feuille, sceller complètement les bords. Faire cuire à 160 °C (320 °F) pendant 3,5 à 4 heures. L'épaule est faite lorsque la viande tire sans effort de l'os lorsqu'elle est sonnée avec une fourchette.",
      "visualCue": {
        "primaryTarget": "Au bout de 3,5 heures, le lever révèle une épaule qui s'est visiblement effondrée. L'os est exposé à la fin et la viande s'est retirée significativement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande s'accroche encore à l'os et résiste lorsqu'une fourchette est insérée et tordue. L'épaule conserve sa forme originale.",
            "action": "Recouvrez et continuez à 160 C. Vérifiez toutes les 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "La viande glisse de l'os sans effort. L'épaule s'est effondrée et tombe presque seule. La graisse est complètement rendue.",
            "action": "Retirer le papier et augmenter la température de la croûte."
          },
          {
            "state": "Overdone",
            "description": "La viande est complètement tombée de l'os et est déchiquetée dans les jus.",
            "action": "Retirer immédiatement du four. Toujours délicieux — servir d'agneau tiré."
          }
        ]
      },
      "feelCue": "Poussez une fourchette dans la partie la plus épaisse de l'épaule et tournez — à la finesse parfaite, les parties de viande sans résistance et la fourchette sort sans effort."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "slow_roasted_shoulder"
      ],
      "outputState": "crusted_shoulder",
      "instructions": "Enlevez le film. Élever le four à 200 C (400 F). Rôtir à découvert de 20 à 25 minutes, puis arroser les jus de poêle toutes les 8 minutes, jusqu'à ce que la surface développe une croûte aromatique profondément brûlée. Les jus dans la poêle auraient dû être réduits à un jus riche.",
      "visualCue": {
        "primaryTarget": "La surface de l'épaule est profondément bronzée et croûtée, la pâte d'épices visiblement caramélisée en un revêtement sombre et brillant. Le jus est ambré et sirupeux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface semble pâle et humide. Pas de formation de croûte.",
            "action": "Continuer à découvert et se baser plus fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Une croûte sombre, parfumée et croustillante sur une épaule qui brille avec des jus de poêle. Le ras el hanout sent grillé et complexe, pas cru.",
            "action": "Reposez-vous 15 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'est noircie et s'effondre. Une odeur amère.",
            "action": "Supprimer immédiatement. Grattez les morceaux les plus foncés et servez avec les bons morceaux de croûte."
          }
        ]
      },
      "feelCue": "La surface de la croûte doit se sentir ferme et légèrement sèche sous une cuillère — presser et elle doit résister, ne pas céder. La viande ci-dessous sera complètement molle."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "crusted_shoulder",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_lamb_shoulder",
      "instructions": "Reposez l'épaule pendant 15 minutes avant de servir. Éparpiller les herbes fraîches et les noix grillées directement sur l'épaule. Servir à table dans le plat rôti, en utilisant deux grandes fourchettes pour séparer la viande. Déposer le jus de poêle sur chaque portion.",
      "visualCue": {
        "primaryTarget": "Une épaule en croûte spectaculaire sur un plateau, vert herbacé brillant et noix d'ivoire contrastent avec la croûte acajou foncée. Pan jus pooling à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Herbes placées avant de se reposer — elles se sont flétries dans la vapeur.",
            "action": "Toujours ajouter de la garniture fraîche au dernier moment."
          },
          {
            "state": "Perfect",
            "description": "Herbes fraîches et vibrantes sur une épaule légèrement refroidie. La viande se sépare en longs morceaux humides avec un remorqueur de la fourchette.",
            "action": "Servir avec du couscous ou du pain plat."
          },
          {
            "state": "Overdone",
            "description": "Trop reposé et trop cool. La graisse s'est solidifiée.",
            "action": "Un retour rapide de 5 minutes dans un four chaud se réchauffera sans séchage."
          }
        ]
      },
      "feelCue": "La viande doit se détacher en longs lambeaux humides sans effort de deux fourchettes — si vous devez la couper, l'épaule a besoin de plus de temps au four."
    }
  ]
};
