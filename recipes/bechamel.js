export default {
  "repoId": "master_french_bechamel_001",
  "parentRepoId": null,
  "slug": "bechamel",
  "author": "ForkRecipe Kitchen",
  "title": "Béchamel",
  "description": "Une des sauces mères françaises — un roux pâle de beurre et de farine de lait chaud dédoublé en quelque chose de brillant et de velours-louche, chuchoté de muscade et de poivre blanc. La toile blanche derrière mille gratins.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "mère-sauce",
    "rouge",
    "laitière"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier (chauffé)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "2% lait",
        "moitié-moitié pour une sauce plus riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Wondera pour une sauce à l'épreuve des grumeaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.02,
      "defaultUnit": "part",
      "substitutions": [
        "une pincée pré-gérée, dans une pincée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 0.04,
      "defaultUnit": "part",
      "substitutions": [
        "poivre noir si ça ne vous dérange pas les taches"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire le roux",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "white_roux",
      "instructions": "Faire fondre le beurre à feu moyen-doux jusqu'à ce qu'il mousse mais ne brunisse pas. fouetter la farine en même temps et cuire en remuant constamment pendant 2-3 minutes. Le but est de faire cuire le goût de la farine crue tout en gardant le roux pâle — un roux blanc, pas blond. Ne le laissez pas colorier.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et pâle de la couleur du sable humide, desserrant légèrement pendant qu'il cuit et sentant faible de la croûte à tarte — grillé mais pas noisette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte sent toujours cru et farineux, pâteux et épais, sans arôme de la poêle.",
            "action": "Continuez à remuer sur le feu une minute de plus — l'odeur crue doit être cuite ou elle hantera la sauce finie."
          },
          {
            "state": "Perfect",
            "description": "Le roux est lâche et bouillonnant doucement, la couleur de l'os ou du sable humide, et sent comme la croûte courte chaude. Ça bouge comme de la lave quand tu traînes le fouet.",
            "action": "Il est prêt pour le lait. Avoir le lait chaud à portée de bras."
          },
          {
            "state": "Overdone",
            "description": "Le roux a bronzé à une couleur blond ou cacahuète et sent nettement la noix.",
            "action": "Pour un vrai béchamel blanc, recommencez. Ou bien accepter une sauce légèrement ivoire, plus noisette — elle se liera encore."
          }
        ]
      },
      "feelCue": "Le roux devrait traîner contre le fouet comme une pâte épaisse, puis se détendre pendant que la farine cuit. Il siffle doucement; il ne devrait jamais craquer ni fumer."
    },
    {
      "nodeId": "step_2",
      "action": "Société",
      "inputs": [
        "white_roux",
        "ing_01"
      ],
      "outputState": "loose_bechamel",
      "instructions": "Verser le lait chaud dans un cours d'eau mince, fouettant dur et constamment. Ajouter le premier tiers lentement pour laisser le roux l'absorber dans une pâte épaisse, puis couler dans le reste. C'est en fouettant chaque addition que la sauce reste lisse — le lait ajouté tout à la fois fait des grumeaux.",
      "visualCue": {
        "primaryTarget": "Un liquide mince, uniforme, sans morceaux de la couleur de la crème, juste commencer à vapeur, avec le fouet laissant des sentiers de décoloration à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de roux dans le lait mince; la sauce semble cassée et granuleuse.",
            "action": "fouetter vigoureusement pour les briser, ou passer par un tamis fin avant de continuer. Baissez la chaleur pour ne pas attraper."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse et versable, comme de la crème lourde, avec un léger éclat et aucune bosse visible. Les sentiers du fouet se ferment lentement.",
            "action": "Portez-le à une mijotée douce pour commencer à épaissir."
          },
          {
            "state": "Overdone",
            "description": "Le lait a été ajouté trop vite et trop chaud, brûlant sur le fond et flanquant la sauce de brun.",
            "action": "Arrêtez de gratter le fond et versez la sauce dans une casserole propre, laissant la couche brûlée derrière."
          }
        ]
      },
      "feelCue": "Chaque éclaboussure de lait desserre la résistance sous le fouet. Écoutez le moment où l'épais squuelch de pâte se transforme en le doux slosh de liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "loose_bechamel"
      ],
      "outputState": "nappe_bechamel",
      "instructions": "Faire mijoter à nu à feu moyen-doux, fouetter souvent et racler les coins de la poêle. Cuire de 8 à 10 minutes jusqu'à ce qu'il épaississe pour napper la consistance — assez épaisse pour enrober le dos d'une cuillère. Une peau essaiera de se former, la garder en mouvement.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante qui enveloppe l'arrière d'une cuillère; un doigt tiré à travers le revêtement laisse un canal propre et durable qui ne renverse pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux; il court tout droit de la cuillère et le canal se ferme instantanément.",
            "action": "Laisser mijoter quelques minutes de plus, fouetter, évaporer l'eau et laisser l'amidon complètement gélatiniser."
          },
          {
            "state": "Perfect",
            "description": "Velours et assez épais pour napper — il s'accroche à la cuillère, la ligne tirée tient, et il tombe du fouet dans un ruban lisse.",
            "action": "Tirez de la chaleur et assaisonner."
          },
          {
            "state": "Overdone",
            "description": "Colle et raide, collant comme de la pâte de papier peint, avec une surface terne plutôt que brillante.",
            "action": "fouetter dans un jet de lait chaud pour le desserrer vers un ruban versable et brillant."
          }
        ]
      },
      "feelCue": "Le fouet rencontre une résistance constante, même et la sauce se brouille paresseusement, en envoyant lentement des bulles lourdes. Il doit sentir doux de lait cuit, jamais brûlé."
    },
    {
      "nodeId": "step_4",
      "action": "Saison et fin",
      "inputs": [
        "nappe_bechamel",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_bechamel",
      "instructions": "Hors de la chaleur, assaisonner de sel, une grille soignée de muscade et de poivre blanc. Goûter et ajuster — béchamel doit goûter de la crème assaisonnée, la muscade présente mais innommable. Si vous utilisez un piqué d'oignon, pêchez-le maintenant. Appuyez sur l'enveloppe plastique sur la surface si vous tenez.",
      "visualCue": {
        "primaryTarget": "Une sauce d'ivoire vierge, brillante et versable, sans taches visibles au-delà de la poussière la plus faible de muscade — il devrait ressembler à de la soie liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tasting plat et laiteux; il se lit comme du lait épaissé plutôt qu'une sauce.",
            "action": "Ajouter le sel une pincée à la fois jusqu'à ce que les saveurs se lèvent, puis re-goût pour la muscade."
          },
          {
            "state": "Perfect",
            "description": "Équilibré et salé, le sel invisible, la muscade une note de fond chaude. Doux, brillant et revêtement.",
            "action": "Utiliser immédiatement, ou couvrir de surface à surface et tenir au chaud."
          },
          {
            "state": "Overdone",
            "description": "Agressivement nutmeggy ou dur avec du poivre, la laiterie enterrée sous des épices.",
            "action": "fouetter dans du lait plus chaud pour diluer, puis rééquilibrer le sel."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère propre à travers et soulevez - la: la sauce devrait draper dans un rideau lisse et non cassé. L'arôme est crème chaude avec un fantôme de muscade, jamais un coup de poing de lui."
    }
  ]
};
