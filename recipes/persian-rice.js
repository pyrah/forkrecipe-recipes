export default {
  "repoId": "master_iranian_persianrice_001",
  "parentRepoId": null,
  "slug": "persian-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz chilo persan avec Tahdig",
  "description": "Le joyau de la couronne de la table iranienne, la basmati à grains longs par huilée, drainée et finie à la vapeur sur un bouclier de beurre et de pomme de terre qui devient le tahdig : une croûte dorée incroyablement croustillante qui est la pièce la plus battue sur n'importe quel plateau persan.",
  "cuisine": "Iranien",
  "culture": "Perse",
  "category": "grains",
  "tags": [
    "grains",
    "Iranien",
    "persienne",
    "riz",
    "safran",
    "Tahdig",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "90 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz basmati (âgé, à grains longs)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour trempe et parboulage)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé ou huile végétale",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Filets de safran (fromés dans l'eau chaude)",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Pommes de terre moyennes (peautées, coupées en tranches de 5 mm)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "pain laves mince",
        "pita tranché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_rice",
      "instructions": "Rincer le basmati dans de l'eau froide jusqu'à ce que l'eau soit claire — au moins 5-6 rinçages. Faire tremper dans l'eau froide avec 1 cuillerée à soupe de sel pendant 30 minutes minimum (jusqu'à 4 heures). Le trempage hydrate le grain, ce qui lui permet d'allonger considérablement pendant la vapeur. Égoutter et rincer une fois de plus.",
      "visualCue": {
        "primaryTarget": "Les grains de riz qui ont visiblement gonflés et semblent légèrement translucides, l'eau provenant du rinçage final étant claire et sans nuage d'amidon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore blancs opaques, durs quand mordus. L'eau est encore laiteuse avec de l'amidon.",
            "action": "Laisser tremper encore 30 minutes. Les basmati non souillés ne s'allongeront pas et la méthode tahdig produira des résultats inégaux."
          },
          {
            "state": "Perfect",
            "description": "Les grains s'allongent légèrement, se sentent plus fermes mais légèrement printaniers, et l'eau de rinçage est claire. Un grain mordu est presque tendre à l'extérieur mais toujours ferme au cœur.",
            "action": "Faire bouillir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont trempés pendant plus de 6 heures et sont très doux, facilement broyés. L'extérieur est arrosé.",
            "action": "Continuez mais réduisez considérablement le temps de parboulage — ces grains cuireont plus vite."
          }
        ]
      },
      "feelCue": "Serrez un grain imbibé entre vos ongles – il devrait offrir une résistance distincte au cœur, mais donner au bord extérieur. Toujours ferme, mais plus difficile."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "soaked_rice"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Porter un grand pot d'eau fortement salée à ébullition (doit avoir un goût d'eau de mer). Ajouter le riz égoutté. Parboil découvert pendant 5-7 minutes exactement, en remuant doucement une fois. Un grain est prêt lorsqu'il est allongé et tendre à l'extérieur, mais il a un noyau blanc ferme quand il est mordu — comme les pâtes 2 minutes avant al dente. Égoutter immédiatement dans un tamis et rincer à l'eau froide pour arrêter la cuisson. Le riz n'est qu'à moitié fait à ce stade.",
      "visualCue": {
        "primaryTarget": "Des grains longs et élégants qui se sont allongés et blanchis dans l'ensemble, tenant toujours leur forme propre mais pliant légèrement au lieu de craquer lorsqu'ils sont incurvés entre le doigt et le pouce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les céréales sont très fermes. Des snaps plutôt que des virages. Toujours opaque et féculent.",
            "action": "Retournez à l'eau bouillante encore 2 minutes. Le grain doit être mi-cuit avant la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont allongés, blancs vifs et plissés sans éclat. L'extérieur est tendre mais le centre a un noyau opaque blanc visible lorsqu'il est mordu.",
            "action": "Égoutter immédiatement dans un tamis et rincer à l'eau froide."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entièrement cuits et tendres. Ils deviendront musqués pendant la vapeur.",
            "action": "Passez très rapidement à l'étape de vapeur — réduisez le temps de vapeur à 20-25 minutes."
          }
        ]
      },
      "feelCue": "Pincez un grain entre deux doigts après le parboulement — l'extérieur doit se sentir lisse et tendre, mais appliquer la pression des deux côtés doit révéler une résistance ferme et crayeuse au centre."
    },
    {
      "nodeId": "step_3",
      "action": "vapeur",
      "inputs": [
        "parboiled_rice",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_persian_rice",
      "instructions": "Faire fondre le beurre dans un pot anti-adhésif à fond lourd sur un pot moyen-élevé. Coucher la pomme de terre tranchée en une seule couche uniforme sur le fond. Enfoncez le riz séché sur le dessus dans une pyramide douce — ne le pressez pas. Arrosez le safran fleuri au-dessus du tiers supérieur. Envelopper le couvercle du pot dans un chiffon propre pour absorber la condensation, placer sur serré. Cuire à feu moyen-élevé pendant 3 minutes, puis réduire au minimum. Steam pendant 35-45 minutes. Pour servir : inverser le pot entier sur un plateau de service afin que le tahdig doré ressorte sur le dessus.",
      "visualCue": {
        "primaryTarget": "Inversé : un dôme de grains de riz allongés, séparés, cuits à la vapeur avec une couronne d'or safran vif, entouré à la base par un tahdig parfaitement doré et intact.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tahdig de la pomme de terre est pâle et n'a pas de croustillant. Lorsqu'il est inversé, il colle à la poêle et larmes. Les grains sont encore légèrement fermes.",
            "action": "Retour à feu moyen, couvert, pour 10 minutes de plus. Le tahdig a besoin de couleur et les grains ont besoin de plus de temps de vapeur."
          },
          {
            "state": "Perfect",
            "description": "Tahdig de pomme de terre dorée-ambre qui libère dans une seule couche intacte lorsque le pot est inversé. Les grains sont séparés, allongés (jusqu'à 3x de leur longueur sèche) et moelleux — chaque grain est distinct et non collant.",
            "action": "Servir le tahdig comme pièce maîtresse et le riz bombé à côté."
          },
          {
            "state": "Overdone",
            "description": "Tahdig est brun foncé à noir. Une odeur de pomme de terre brûlée. Certains grains peuvent être légèrement secs.",
            "action": "Servir le riz, jeter la couche de tahdig brûlée. Saluvage en ajoutant un filet de beurre de safran fondu sur le riz plaqué."
          }
        ]
      },
      "feelCue": "Après avoir inversé, appuyez sur un coin du tahdig — il devrait craquer et sonner creux, comme presser à travers une fine couche de nourriture frite. S'il est doux et flexible, il n'est pas fait."
    }
  ]
};
