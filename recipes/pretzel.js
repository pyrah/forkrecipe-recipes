export default {
  "repoId": "master_german_pretzel_001",
  "parentRepoId": null,
  "slug": "pretzel",
  "author": "ForkRecipe Kitchen",
  "title": "Pretzel tendre bavarois",
  "description": "Un bretzel doux bavarois — bras épais de pain, profondément acajou de sa trempe alcaline, avec une mâche dense et satisfaisante qui donne à l'intérieur un nuage doux poussière avec des cristaux de sel grossiers qui croquent sous la dent.",
  "cuisine": "Allemand",
  "culture": "Bavarois",
  "category": "breads",
  "tags": [
    "bretzel",
    "allemand",
    "pain",
    "Bicarbonate de soda",
    "soft-pretzel",
    "bavarois"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 1,
    "bitter": 2,
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
        "Farine polyvalente"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (32 C)",
      "ratioValue": 58,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Soda au four (pour bain de trempe alcaline)",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "solution de lysse de qualité alimentaire 1%"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Sel de bretzel grossier",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Sel de mer flocé"
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
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pretzel_dough",
      "instructions": "Mélanger l'eau chaude, la levure instantanée et le beurre adouci dans un grand bol; remuer brièvement. Ajouter la farine et le sel. Mélanger jusqu'à ce qu'une pâte dure et raide se forme — cette pâte est nettement plus ferme qu'une pâte à pain typique. Il devrait nettoyer les côtés du bol. Si elle est encore collante, ajouter de la farine une cuillère à soupe à la fois.",
      "visualCue": {
        "primaryTarget": "Une boule cohésive et lisse qui colle à peine aux côtés du bol. Stiffer et plus sec qu'une pâte à focaccia ou arnaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mouiller et collant, s'accrocher au bol en draps, ne tiendra pas une forme.",
            "action": "Ajouter la farine 1 cuillère à soupe à la fois et continuer à mélanger jusqu'à ce qu'elle purifie le bol."
          },
          {
            "state": "Perfect",
            "description": "Balle ferme, légèrement collante. Il tient sa forme quand il est tombé. Pas aussi lisse que de la pâte pétrie.",
            "action": "Transférer sur une surface de travail et commencer à pétrir."
          },
          {
            "state": "Overdone",
            "description": "Crumbly et raide, difficile à rassembler, fissure aux bords.",
            "action": "Ajouter de l'eau chaude 1 cuillère à café à la fois et pétrir pour le rassembler."
          }
        ]
      },
      "feelCue": "La pâte à pretzel doit être comme de l'argile à modeler ferme, nettement plus rigide que la pâte à pizza. Il devrait contenir une empreinte digitale sans s'effondrer."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "pretzel_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Agenouillez à la main pendant 8 à 10 minutes sur une surface non nourrie, ou 5 minutes dans un mélangeur de stand avec un crochet de pâte à vitesse moyenne. La pâte est raide — utilisez le talon de votre main pour pousser le tour. Il deviendra lisse et élastique à mesure que le gluten se développe. La pâte doit passer l'essai de la vitre : étirer une petite pièce suffisamment fine pour voir la lumière à travers sans déchirer.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et satinée sans grumeaux ni larmes visibles. La surface est tendue et légèrement brillante. La pâte s'étire sans se casser immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore rugueuse et cahoteuse; la pâte se déchire lorsqu'elle est étirée; le test de la vitre échoue; il déchire immédiatement.",
            "action": "Continuez à pétrir — le gluten a besoin de plus de travail. Vérifiez toutes les 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse satinée, passe le test de vitre : s'étire dans une membrane mince et translucide sans déchirer.",
            "action": "Tourner dans une boule, placer dans un bol légèrement huilé, couvrir et la preuve."
          },
          {
            "state": "Overdone",
            "description": "La toux est devenue dure et caoutchouteuse, très résistante, larmes lorsqu'elle est tirée.",
            "action": "Couvrir et se reposer 20 minutes — gluten surmené doit se détendre."
          }
        ]
      },
      "feelCue": "La pâte de bretzel bien kneaded a la fermeté d'une balle de tennis et la douceur du cuir chaud. Il rebondit lentement lorsqu'il est pressé."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "proofed_dough",
      "instructions": "Couvrir la pâte et la laisser étaler à température ambiante (22–24 C) pendant 45–60 minutes jusqu'à ce qu'elle soit bien gonflée. Il ne doublera pas comme une pâte à pain maigre — la fermentation lente de la graisse et de l'hydratation raide. Alors que la pâte résiste, porter 1 litre d'eau à ébullition dans une grande casserole et dissoudre le bicarbonate de soude — il va buller furieusement. Réduire en mijotant régulièrement.",
      "visualCue": {
        "primaryTarget": "La toux a augmenté d'environ 50 % en volume. La surface est lisse, légèrement oreiller, et ressort lorsqu'elle est pochée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine cultivée; dense et raide; le poke laisse une bosselure permanente plutôt que de retomber.",
            "action": "Passez à un endroit plus chaud et donnez-lui encore 20 minutes — la levure a besoin de chaleur pour s'activer."
          },
          {
            "state": "Perfect",
            "description": "Notamment gonflé, le poke ressort lentement mais complètement. Ça sent la levure légère.",
            "action": "Divisez, roulez en cordes et formez en bretzels."
          },
          {
            "state": "Overdone",
            "description": "La toux est très gonflée, dégonfle lorsqu'elle est touchée, sent fortement l'alcool.",
            "action": "Formez immédiatement. Réduire le deuxième repos après la formation à 10 minutes."
          }
        ]
      },
      "feelCue": "La pâte de bretzel éprouvée doit se sentir oreiller mais avec l'épine dorsale — pressez - la et elle revient lentement, contrairement à une pâte surprotégée qui s'effondre et reste plate."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "proofed_dough",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dipped_pretzels",
      "instructions": "Divisez la pâte en 8 morceaux égaux. Rouler chacun dans une corde de 60 cm, plus épais au centre et conique aux extrémités. Former une forme U, tordre les extrémités deux fois l'un autour de l'autre, plier et appuyer sur l'arc inférieur. Déposer sur des plaques de cuisson doublées de parchemins et refroidir au congélateur pendant 15 minutes. Travaillant un à la fois, plongez chaque bretzel dans le bain de soude mijotant pendant 30 secondes de chaque côté, en tournant une fois. La solution alcaline est ce qui crée la croûte d'acajou et la mâche distinctive. Placer sur la plaque de cuisson, couper 3 fentes peu profondes sur le ventre épais et disperser généreusement le bretzel grossier sel.",
      "visualCue": {
        "primaryTarget": "Chaque bretzel tient sa forme classique après le trempage — la pâte a une surface mat, légèrement tachée du bain alcalin, la couleur déplacée de l'ivoire à un bronzage pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bretzels ont sauté ou ont été submergés trop brièvement — la surface semble pâle et inchangée, brillante.",
            "action": "Submerger à nouveau pendant 30 secondes de chaque côté dans un bain de soude mijotant (sans bouillir)."
          },
          {
            "state": "Perfect",
            "description": "La surface de bronzage mat, légèrement tacky, tient sa forme bretzel. Les bras et le ventre sont clairement définis. Cristaux de sel adhérant à la surface.",
            "action": "Cuire immédiatement à 220 °C (425 °F)."
          },
          {
            "state": "Overdone",
            "description": "Les pretzels ont été trempés dans une solution bouillante (sans mijoter) et ont commencé à s'effondrer ou à tremper trop longtemps et se désintègrent.",
            "action": "Saluvage en plaçant sur la poêle et la cuisson — ils peuvent sembler irréguliers mais auront toujours le goût correct."
          }
        ]
      },
      "feelCue": "Après la cuisson, la surface de la pâte est légèrement glissante et presque savonneuse — c'est l'alcalinité qui fait son travail. Manipulation avec soin et travail rapide."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "dipped_pretzels"
      ],
      "outputState": "finished_pretzels",
      "instructions": "Cuire à 220 °C (425 °F) pendant 14 à 18 minutes jusqu'à ce que l'acajou soit profondément acajou — plus foncé que vous ne le pensez. La croûte de pretzel devrait être presque la couleur du chocolat noir à son meilleur. Le revêtement alcalin Maillard-bruns à une température inférieure à celle du pain ordinaire, donc la couleur vient vite. Faites tourner la poêle à mi-chemin. Laisser refroidir sur un support de fil pendant 5 minutes avant de servir au chaud.",
      "visualCue": {
        "primaryTarget": "Croûte acajou-brun profonde — la couleur du chocolat noir ou de la mélasse noire, pas du caramel. Les fentes sur le ventre s'ouvrent et l'intérieur montre du pain pâle et brûlant en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Ambre pâle ou croûte dorée. Le bretzel sera doux et fade — il n'a pas développé la croûte de Maillard amère qui définit un bretzel bavarois.",
            "action": "Retourner au four pendant 3-5 minutes. La croûte de Pretzel devrait être sans crainte sombre."
          },
          {
            "state": "Perfect",
            "description": "Brun d'acajou foncé, le ventre s'ouvre et pâle. À l'intérieur est moelleux, la vapeur monte quand cassé. Les cristaux de sel sont toujours entiers et croquants.",
            "action": "Reposez-vous 5 minutes et servez au chaud. Mangez dans les 2 heures pour la meilleure texture de croûte."
          },
          {
            "state": "Overdone",
            "description": "Encroûtement noir, amer, le sel s'est dissous et brûlé à la surface.",
            "action": "Trim l'extérieur le plus sombre avec un couteau. L'intérieur est probablement encore bon."
          }
        ]
      },
      "feelCue": "Un bretzel fini se sent lourd pour sa taille et ferme partout — pas de taches molles et squishy. La croûte doit résister à l'ongle plutôt qu'à la production. Brisez-en un ouvert sur un nuage de vapeur et tirez la douceur."
    }
  ]
};
