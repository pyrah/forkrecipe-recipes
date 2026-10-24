export default {
  "repoId": "master_mexican_flourtortillas_001",
  "parentRepoId": null,
  "slug": "flour-tortillas",
  "author": "ForkRecipe Kitchen",
  "title": "Tortilles à farine mexicaines",
  "description": "Les tortillas de blé sont tendres avec du saindoux, des tissus roulés et cuits sur un comal sec jusqu'à ce qu'elles soient vétustes, pliables et subtilement sucrées, le récipient parfait qui ne rivalise jamais avec son remplissage.",
  "cuisine": "Mexicain",
  "culture": "Mexique du Nord (Sonoran)",
  "category": "breads",
  "tags": [
    "tortillas",
    "Mexique",
    "Pain plat",
    "Saindoux",
    "comal",
    "blé",
    "Nord-mexican"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de pain (résultat chewier)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (manteca)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Écourtement des légumes",
        "beurre (arôme plus riche)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (environ 50 °C)",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
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
      "outputState": "sandy_dough",
      "instructions": "Dans un grand bol, fouetter la farine, le sel et la poudre à pâte. Ajouter le saindoux ou le raccourcissement en petits morceaux. À l'aide de votre bout des doigts ou d'une coupe-pâtisserie, tricotez la graisse dans la farine jusqu'à ce qu'elle ressemble à une chapelure grossière et irrégulière avec des poches de graisse de taille de pois encore visibles, comme une croûte à tarte. Ne pas trop travailler.",
      "visualCue": {
        "primaryTarget": "Un mélange friable et sablonneux avec des poches de graisse irrégulières aux pois. Pas de gros morceaux de graisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De gros morceaux non incorporés de graisse encore visibles. Le mélange n'est pas cohérent.",
            "action": "Travaillez la graisse plus soigneusement. Chaque morceau de graisse doit s'aplatir en minces flocons contre la farine."
          },
          {
            "state": "Perfect",
            "description": "Sandy, miettes, cohésives quand pressées. Le gras est entièrement incorporé dans de petites poches irrégulières. Ça sent le saindoux.",
            "action": "Ajouter l'eau chaude et mélanger à une pâte."
          },
          {
            "state": "Overdone",
            "description": "La graisse a été complètement fondue dans la farine par surmélange. Le mélange semble uniforme et collé.",
            "action": "Refroidir le bol pendant 10 minutes, puis continuer. Un peu surmené mais toujours utilisable."
          }
        ]
      },
      "feelCue": "Pressez une poignée du mélange de farine-graisse — il devrait se tenir lâchement lorsqu'il est comprimé mais s'effondrer lorsque vous ouvrez la main. Ce fragile accrochage vous dit que la graisse est distribuée correctement."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "sandy_dough",
        "ing_03"
      ],
      "outputState": "rested_dough",
      "instructions": "Verser l'eau tiède sur le mélange farine-graisse et remuer avec une fourchette jusqu'à ce qu'une pâte rugueuse se forme. Éteindre et pétrir pendant 2 à 3 minutes jusqu'à ce que la pâte de tortilla de farine soit lisse. L'objectif est lisse, pas élastique. Couvrir d'un chiffon humide et reposer pendant 30 minutes.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et souple sans taches rugueuses, reposant sous un chiffon humide. Une surface légèrement trapue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est dure et chaotique. Les larmes de la toux quand vous essayez de l'étirer. Il a encore des stries visibles.",
            "action": "Agenouillez encore 1-2 minutes. Les poches de graisse doivent simplement s'intégrer pleinement au réseau de la farine d'eau."
          },
          {
            "state": "Perfect",
            "description": "Douce et douce. Pas élastique — il ne ressort pas. Prend une empreinte digitale pressée sans la remplir.",
            "action": "Reposez au minimum 30 minutes. Ce repos est essentiel pour que le gluten se détende suffisamment pour rouler tissu-fin."
          },
          {
            "state": "Overdone",
            "description": "La toux est très élastique et ressort agressivement lorsqu'elle est pressée.",
            "action": "Reposez 45 minutes au lieu de 30. Il faut plus de temps pour se détendre."
          }
        ]
      },
      "feelCue": "La pâte reposée doit se sentir comme un lobe d'oreille doux et chaud, souple, légèrement collant, sans élasticité. Si vous tirez un petit morceau et qu'il ressort, il faut plus de repos."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "rested_dough"
      ],
      "outputState": "rolled_tortillas",
      "instructions": "Divisez la pâte en 8-10 boules égales. Sur une surface légèrement farinée, rouler chaque boule en une forme mince et arrondie d'environ 20 à 22 cm de diamètre. Rouler du centre vers l'extérieur dans toutes les directions, en tournant fréquemment. L'épaisseur idéale est de 1–2 mm — presque translucide. Reposez chaque tortilla roulée sous un chiffon pendant que vous roulez les autres.",
      "visualCue": {
        "primaryTarget": "Disques minces, presque translucides, ronds avec bords irréguliers, d'environ 20 cm de diamètre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Épais, pâteux, moins de 20 cm. Ça revient quand tu essaies de le rouler.",
            "action": "Reposez 5 minutes et essayez encore. Le gluten a besoin de plus de temps de relaxation avant d'accepter un rouleau mince."
          },
          {
            "state": "Perfect",
            "description": "1–2 mm de minceur, presque translucide. Irrégulier mais à peu près rond. Retient sa forme roulée sans tirer de manière significative.",
            "action": "Placer entre les morceaux de parchemin pour éviter de coller et cuire dans les 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Rouleau si mince qu'il a déchiré par endroits.",
            "action": "Continuez — les petites larmes sont bonnes. Patch en pressant les bords de la pâte à nouveau ensemble."
          }
        ]
      },
      "feelCue": "Tenez la tortilla roulée jusqu'à une source lumineuse — vous devriez être en mesure de voir votre ombre de main à travers elle. Ce niveau de translucidité est l'épaisseur de la cible."
    },
    {
      "nodeId": "step_4",
      "action": "Faire griller",
      "inputs": [
        "rolled_tortillas"
      ],
      "outputState": "finished_flour_tortillas",
      "instructions": "Chauffer une poêle en comal sec, en fonte ou une poêle lourde à feu moyen-élevé à élevé jusqu'à très chaud. Faire cuire chaque tortilla de 45 à 60 secondes de chaque côté. Le premier côté doit développer des cloques dorées. Flip quand la surface perd son aspect translucide, brut et les premières cloques apparaissent. Piquer les tortillas finies dans un chiffon propre pour piéger la vapeur et garder pliable.",
      "visualCue": {
        "primaryTarget": "Tortilles or ivoire avec des cloques brun foncé éparpillées sur les deux côtés. Légèrement gonflé dans les taches pendant la cuisson. Flexible lorsqu'il est empilé dans le tissu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours pâle, pâteux et légèrement translucide. texture gommy.",
            "action": "Cuire plus longtemps. La saveur de pâte crue doit cuire. Attendez les ampoules avant de retourner."
          },
          {
            "state": "Perfect",
            "description": "Or avec des blisters brun foncé. Quelques bouffées pendant la cuisson. Des odeurs de blé grillé et de saindoux. Flexible quand empilé.",
            "action": "Empilez immédiatement dans un chiffon. Ils s'adoucissent et s'entretuent dans la pile."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, commençant à durcir et croustillant. Les bords sont brittl.",
            "action": "Enveloppez-les dans un chiffon très humide pendant 2 minutes — la vapeur les résoudra partiellement."
          }
        ]
      },
      "feelCue": "Tirez une tortilla de la pile de tissu après 2 minutes — il devrait être suffisamment souple pour plier en deux sans craquer, chaud des deux côtés de la vapeur. Le chiffonnage est ce qui transforme un pain plat cuit en l'enveloppe tendre et productive qui définit un grand taco."
    }
  ]
};
