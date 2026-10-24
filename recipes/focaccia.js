export default {
  "repoId": "master_italian_focaccia_001",
  "parentRepoId": null,
  "slug": "focaccia",
  "tool": {
    "kind": "dough",
    "doughId": "focaccia"
  },
  "author": "ForkRecipe Kitchen",
  "title": "Focaccia ligurienne",
  "description": "Une dalle dorée de pain à l'huile d'olive de la côte de Gênes – croustillante et cloquée sur le dessus, insaisissable à l'intérieur, fendu par bout des doigts et flocée de sel grossier.",
  "cuisine": "Italien",
  "culture": "Ligurien",
  "category": "breads",
  "tags": [
    "pain",
    "Italien",
    "Huile d'olive",
    "focaccia",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-04-10",
  "updatedAt": "2025-02-01",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (12-13% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "tipo 0 farine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (35-38 C)",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Sel de mer blanc",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": [
        "Sel de maldon"
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
        "ing_04",
        "ing_05"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Mélanger la farine, le sel, la levure et l'eau chaude dans un grand bol. Mélanger avec une cuillère en bois ou de la pâte fouetter jusqu'à ce qu'aucune farine sèche ne reste. La pâte sera mouillée et collante — c'est exact. Ne pas ajouter de farine supplémentaire.",
      "visualCue": {
        "primaryTarget": "Une masse rugueuse et chaotique qui s'accroche à elle-même. Mouiller et agglomérer — pas de taches sèches, pas encore de surface lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche visibles au fond ou aux bords du bol.",
            "action": "Gratter les côtés et plier la farine sèche au centre. Ajouter une cuillère à café d'eau si vraiment sèche."
          },
          {
            "state": "Perfect",
            "description": "Uniquement ravagé et mouillé. Ça colle aux doigts. Il tire dans de longues cordes glutineuses.",
            "action": "Couvrir et se reposer pendant 20 minutes (autolyse)."
          },
          {
            "state": "Overdone",
            "description": "Vous avez trop mélangé avec une machine — la pâte est déjà lisse et élastique.",
            "action": "Continuez. La focaccia peut être légèrement plus serrée en miettes, mais elle va encore bien cuire."
          }
        ]
      },
      "feelCue": "Il devrait se sentir comme de la pâte épaisse et humide — si votre main sort propre, la pâte est trop sèche."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "shaggy_dough",
        "ing_03"
      ],
      "outputState": "developed_dough",
      "instructions": "Arroser la moitié de l'huile d'olive sur la pâte. Effectuez une série de stretch-and-folds: mouiller votre main, saisir un côté de la pâte, l'étirer et le plier sur le centre. Faites tourner le bol à 90 degrés et répétez. Faites quatre plis par tour, trois tours sur 90 minutes (un tour toutes les 30 minutes).",
      "visualCue": {
        "primaryTarget": "Après le troisième jeu de plis, la pâte est lisse, oreiller, et tient sa forme dans le bol. Grandes bulles visibles sous la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore plate et lâche entre les plis. Pas de bulles visibles. Larmes facilement.",
            "action": "Donnez-lui une autre ronde de plis et plus de temps de repos — le gluten a besoin de patience à une hydratation élevée."
          },
          {
            "state": "Perfect",
            "description": "La toux est bouffie, glousse quand le bol est tapoté, et ressort lentement lorsqu'il est poché. Doux et légèrement translucide.",
            "action": "Huiler la poêle et transférer la pâte."
          },
          {
            "state": "Overdone",
            "description": "La toux est devenue serrée et résiste à l'étirement. Il recule agressivement.",
            "action": "Laissez-le se détendre pendant 15 minutes à découvert — le gluten surmené a besoin de repos."
          }
        ]
      },
      "feelCue": "Chaque pli devrait avoir l'impression de tirer un taffiy chaud. La pâte deviendra plus légère dans vos mains à chaque tour — par le troisième, elle se soulève presque."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "proofed_focaccia",
      "instructions": "Verser une généreuse piscine d'huile d'olive dans une casserole en demi-feuille. Transférer la pâte dans la poêle et l'étirer doucement vers les bords. S'il ressort, couvrez-le et attendez 15 minutes, puis étirez à nouveau. Couvrir d'enveloppe en plastique et laisser la preuve jusqu'à ce que doublé et remplir la plupart de la casserole.",
      "visualCue": {
        "primaryTarget": "La douille remplit presque le bord de la poêle au bord, visiblement gonflée et bombée, d'une structure aérée et bubble visible à travers la surface huilée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux s'est à peine répandue. Assise comme un disque épais au centre de la casserole.",
            "action": "Couvrir et attendre — les chambres froides ferment lentement. Passer à un endroit plus chaud si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "La pâte couvre 90 % de la poêle. La surface est oreiller et jiggle comme un lit d'eau. De grandes bulles sont visibles.",
            "action": "Préchauffer le four à 220 C (425 F) et laisser tremper la pâte."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est étendue mince et plate. La surface semble dégonflée avec de grandes bulles effondrées.",
            "action": "C'est surpropriété — le faire cuire de toute façon. La croûte sera bonne, mais la miette sera plus dense."
          }
        ]
      },
      "feelCue": "Appuyez sur un bout de doigt fariné dans la pâte — il devrait lentement revenir vers la moitié, laissant un creux doux. Si elle se remplit instantanément, il lui faut plus de temps. S'il ne ressort pas du tout, il a surprouvé."
    },
    {
      "nodeId": "step_4",
      "action": "Fosse",
      "inputs": [
        "proofed_focaccia",
        "ing_03",
        "ing_06"
      ],
      "outputState": "dimpled_focaccia",
      "instructions": "Arrosez le reste de l'huile d'olive sur la surface et dans n'importe quelle piscine. Répartir vos doigts et les presser fermement dans la pâte, jusqu'au fond de la poêle, créant des fossettes profondes sur toute la surface. Saupoudrer le sel. L'huile sera mise dans les fossettes — c'est ce qui fait focaccia focaccia.",
      "visualCue": {
        "primaryTarget": "La surface est un paysage de gratte-doigts profonds avec l'huile d'olive pooling dans chacun. Des flocons de sel scintillent sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Indentations peu profondes qui ne dentelent pas la surface. L'huile glisse vers les bords.",
            "action": "Appuyez plus fort — utilisez les dix bouts de doigts et poussez jusqu'à la casserole. La pâte peut la prendre."
          },
          {
            "state": "Perfect",
            "description": "Des cratères profonds et dramatiques. Des piscines pétrolières dans chaque fossette. Le sel est uniformément dispersé. La pâte autour de chaque fossette s'est levée dans de petites collines.",
            "action": "Dans le four immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La toux a été déchirée par endroits. L'huile fuit sous la pâte.",
            "action": "Appuyez doucement sur les points déchirés à nouveau ensemble. Le ressort du four guérira les larmes mineures."
          }
        ]
      },
      "feelCue": "Votre bout des doigts devrait rencontrer une résistance et ensuite passer au fond de la poêle. C'est comme si on pressait dans un oreiller ferme, satisfaisant et non violent."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "dimpled_focaccia"
      ],
      "outputState": "finished_focaccia",
      "instructions": "Cuire à 220 °C (425 °F) sur le support intermédiaire inférieur pendant 22-28 minutes, jusqu'à ce qu'il soit profondément doré sur le dessus et croustillant sur le fond. Retirez immédiatement de la poêle sur un porte-fils pour empêcher le fond de la vapeur.",
      "visualCue": {
        "primaryTarget": "De couleur dorée sur le dessus avec des taches plus foncées autour des fossettes. Le fond, lorsqu'il est levé, est même brun caramel et audiblement croquant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle sur le dessus. Le fond est encore doux et blond. Pas de croûte sonore lorsque la casserole est tapée.",
            "action": "Retourner au four 3-5 minutes de plus. Baissez la grille d'une position inférieure pour la chaleur du fond."
          },
          {
            "state": "Perfect",
            "description": "Top riche en or avec des blisters carbonisés aux pics. Le fond est profondément bruni et libère de la poêle avec un craquelin. La focaccia semble creuse quand elle est tapée.",
            "action": "Transférez-le sur une grille. Résister à la coupe pendant au moins 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant brûlé. Les bords sont très sombres. Une odeur amère.",
            "action": "Trim les bords les plus sombres avec des cisailles de cuisine. L'intérieur est probablement encore excellent."
          }
        ]
      },
      "feelCue": "Tapez sur le fond de la focaccia — elle devrait sembler creuse, comme frapper sur une porte en bois. Si ça a l'air dense et dégueulasse, il faut plus de temps. La cuisine doit sentir l'huile d'olive grillée et le blé chaud."
    }
  ]
};
