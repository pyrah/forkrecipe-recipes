export default {
  "repoId": "master_british_englishmuffin_001",
  "parentRepoId": null,
  "slug": "english-muffin",
  "author": "ForkRecipe Kitchen",
  "title": "Muffin anglais",
  "description": "Nook-and-creanny griddle muffins cuits bas et lent sur une surface en fonte jusqu'à ce que la croûte soit dorée et mate — à la fourche-split pour révéler un intérieur lace et irrégulier qui absorbe le beurre au contact et brunit à un caramel profond sous le grilleur.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "breads",
  "tags": [
    "muffin anglais",
    "britanniques",
    "Petit déjeuner",
    "pain à bille",
    "Nooks-and-crannies",
    "sémoline"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier, chauffé à 38 C",
      "ratioValue": 45,
      "defaultUnit": "%",
      "substitutions": [
        "Lait d'avoine",
        "2% lait"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (40 C)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (dissoudre d'abord)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Semoule fine ou farine de maïs, pour la poussière",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "farine de riz grossière"
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
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "muffin_dough",
      "instructions": "Mélanger le lait chaud, l'eau chaude, le sucre et la levure instantanée dans un grand bol. Incorporer et laisser reposer 5 minutes jusqu'à légèrement mousseux. Ajouter le beurre ramolli et le sel. Ajouter la farine à la fois et mélanger avec une cuillère en bois jusqu'à ce qu'une pâte chaotique se forme, puis passer à la main. La pâte à muffin anglaise est particulièrement plus humide et plus douce que la pâte à pain typique. La forte hydratation est ce qui crée l'intérieur caractéristique ouvert, lacéré. Ne pas ajouter de farine pour faciliter la manipulation.",
      "visualCue": {
        "primaryTarget": "Une boule douce et légèrement collante qui tient sa forme mais s'accroche au bol. Plus humide que ce que vous pensez pour une pâte à pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Verse plutôt que de tenir une forme; la farine n'est pas entièrement incorporée; la consistance en pâte humide.",
            "action": "Ajouter la farine 1 cuillère à soupe à la fois. La pâte doit être collante mais façonnable — non versable."
          },
          {
            "state": "Perfect",
            "description": "Balle douce et légèrement collante. Éloignez-vous du bol, mais collez-vous à la main jusqu'à ce que vous flissez. Des odeurs de lait chaud et de levure.",
            "action": "Agenouillez brièvement jusqu'à ce qu'il soit lisse et commencez la première preuve."
          },
          {
            "state": "Overdone",
            "description": "Stiff et sec — ajouté trop de farine. Ne produira pas la miette ouverte caractéristique.",
            "action": "Ajouter l'eau chaude 1 cuillère à soupe à la fois et la pétrir jusqu'à ce que la pâte ramollisse."
          }
        ]
      },
      "feelCue": "La pâte de muffin anglaise devrait être aussi douce que la joue d'un bébé — incroyablement douce, légèrement chaude du lait et à peine collante. Résistez à chaque envie d'ajouter plus de farine."
    },
    {
      "nodeId": "step_2",
      "action": "Faire lever",
      "inputs": [
        "muffin_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Aplatissez la pâte sur une surface légèrement huilée (non farinée – l'huile la maintient extensible) pendant 5 minutes jusqu'à ce qu'elle soit lisse et élastique. Placer dans un bol légèrement huilé, couvrir d'enveloppe en plastique et laisser monter dans un endroit chaud (26–28 C) pendant 60–75 minutes jusqu'à doubler. La pâte de muffin anglaise s'élève rapidement en raison de son hydratation enrichie et de son lait chaud. Tandis qu'il monte, lignez deux plaques de cuisson avec le parchemin et la poussière généreusement avec la semoule fine ou la farine de maïs.",
      "visualCue": {
        "primaryTarget": "La toux a doublé, la surface est bombée, et le bol montre des marques d'expansion claires. Le jogging du bol rend le carquois de masse légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Croissance inférieure à 50% après 60 minutes. Sensé, serré, pas rigolo.",
            "action": "Passez à un endroit plus chaud et attendez. Vérifiez en incréments de 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Dôme nettement doublé, lisse, léger. Poke avec un doigt fariné laisse une fossette qui ressort lentement à mi-chemin.",
            "action": "S'en tirer doucement et commencer à couper ou façonner les muffins."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est effondrée, une forte odeur d'alcool, très jiggly et fragile.",
            "action": "Continuez immédiatement à façonner. Les muffins auront encore une bonne saveur et des coins, bien que légèrement plus dense."
          }
        ]
      },
      "feelCue": "La pâte de muffin anglaise est incroyablement fragile, bien éprouvée, car elle est faite avec des touches légères et confiantes plutôt que de serrer ou de grincer. Il doit se sentir aéré et presque liquide sous une peau mince et taupe."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "risen_dough",
        "ing_08"
      ],
      "outputState": "shaped_rounds",
      "instructions": "Poussez généreusement la surface de travail avec de la semoule. Éteignez la pâte levée sans la frapper vers le bas — vous voulez conserver autant de bulles que possible. Patientez doucement jusqu'à un rectangle d'épaisseur égale de 2 cm; n'utilisez pas de laminoir. À l'aide d'une coupe ronde de 8 à 9 cm, appuyez tout droit sans torsion et coupez autant de rondelles que possible. Déposer chaque coupe sur le parchemin à la semolina et épousseter généreusement le dessus avec plus de semolina. Recueillir les débris, plier doucement, reposer 5 minutes et couper à nouveau. Le revêtement semoule est essentiel : il s'agit de la signature visuelle et textuelle d'un muffin anglais et empêche de coller sur la grille.",
      "visualCue": {
        "primaryTarget": "Même des rondelles de 8 à 9 cm de long et de 2 cm de haut, fortement dépoussiérées sur le dessus et le bas avec de la semoule. Les bords coupés doivent présenter une structure légèrement ouverte et bubble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ronds sont irréguliers ou très fins — la pâte n'a pas été galbée à 2 cm avant la coupe.",
            "action": "Regonfler les débris à 2 cm et les couper. Même l'épaisseur est importante pour la cuisson uniforme des grilles."
          },
          {
            "state": "Perfect",
            "description": "Même des disques ronds, d'une épaisseur de 2 cm, généreusement recouverts de semoule. La taille coupée montre de petites bulles de la fermentation — le début de la structure du coin.",
            "action": "Couvrir lâchement et laisser reposer et bouffer pendant 30 minutes avant de faire cuire les filets."
          },
          {
            "state": "Overdone",
            "description": "Les rondelles ont été trop manipulées et s'est effondrées — elles semblent plates et dégonflées sans structure interne visible.",
            "action": "Laissez-les se reposer pendant 45 minutes. Certains gaz seront réaménagés lors de la deuxième épreuve."
          }
        ]
      },
      "feelCue": "Les rondelles de muffins anglais fraîchement coupées se sentent flottantes — prenez-en une et elle se sent plus légère que sa taille ne le suggère. Les côtés sont doux et donnent doucement sous vos doigts sans perdre leur forme circulaire."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "shaped_rounds"
      ],
      "outputState": "proofed_rounds",
      "instructions": "Couvrez les rondelles en forme de façon lâche avec un chiffon ou une plaque inversée. Reposez à température ambiante pendant 30 minutes. Les rondelles souffleront légèrement et se sentiront nettement plus aérées. Cette seconde preuve développe la structure finale et permet au gluten de se détendre suffisamment pour que les muffins ne ressortent pas agressivement sur la grille. Le revêtement de semoule absorbera un peu d'humidité de la pâte et se raffermira légèrement, ce qui l'aidera à adhérer.",
      "visualCue": {
        "primaryTarget": "Les ronds ont beaucoup gonflé — visiblement plus haut et plus arrondi sur le dessus. Le revêtement en semoule semble légèrement mat et plus sec qu'après la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ronds semblent identiques à ceux qui ont été coupés — plats et non gonflés. La toux est encore froide ou la température ambiante était trop froide.",
            "action": "Attendez 30 minutes dans un endroit plus chaud. La coupe et la manutention expulsent les gaz qui doivent être réaménagés."
          },
          {
            "state": "Perfect",
            "description": "Étonnamment gonflé, visiblement plus grand. Presser légèrement révèle un intérieur printanier et rempli d'air. Le revêtement en sémolina est mat et sec.",
            "action": "La deuxième preuve est à son apogée."
          },
          {
            "state": "Overdone",
            "description": "Les ronds sont très gonflés après plus de 60 minutes — peut être fragile et difficile à retourner sans dégonfler.",
            "action": "Cuire immédiatement, être très doux en tournant. La texture peut être légèrement inégale, mais la saveur sera excellente."
          }
        ]
      },
      "feelCue": "Les rondelles de muffins prouvées doivent se sentir comme de petits soufflés fragiles — pressez l'un très doucement avec un seul doigt et sentez-le repousser avec une petite résistance précise. Trop de pression la dégonflera."
    },
    {
      "nodeId": "step_5",
      "action": "Frire",
      "inputs": [
        "proofed_rounds"
      ],
      "outputState": "finished_english_muffins",
      "instructions": "Chauffer une grille en fonte ou une poêle lourde à feu moyen-doux pendant 3 minutes — sans huile ni beurre nécessaire, le revêtement de semoule empêche le collage et crée la croûte mate et sèche caractéristique. Placez les rondelles côté semoule vers le bas, laissant la place entre eux. Cuire de 6 à 7 minutes du premier côté sans bouger — résistez à soulever pour vérifier trop tôt, car cela perturbe la formation de la croûte. Le muffin doit se libérer naturellement quand il est prêt. Fliper et cuire 6 à 7 minutes sur le deuxième côté. Les muffins doivent se sentir fermes lorsqu'ils sont pressés des côtés et sonner légèrement creux lorsqu'ils sont tapés sur le dessus. Refroidir sur un support de fil; diviser avec une fourchette — ne jamais couper avec un couteau. La fourche déchire la miette le long de ses poches d'air naturel, créant ainsi la structure caractéristique de l'insecte.",
      "visualCue": {
        "primaryTarget": "Même la croûte mate et dorée des deux côtés plats n'est pas pâle, ni brun foncé. Les côtés sont pâles et légèrement doux. Le tapotage du haut produit un son creux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une croûte de couleur crème pâle sur le fond après 6 minutes; la pâte est encore squishy lorsqu'elle est pressée des côtés; le taraudage semble dense.",
            "action": "Baissez légèrement la chaleur et faites cuire plus longtemps – l'intérieur doit être réglé avant que la croûte ne colore correctement."
          },
          {
            "state": "Perfect",
            "description": "Même la croûte dorée sur les deux faces plates, les côtés pâles et légèrement printaniers, son creux quand tapoté. La fourche scindée pour révéler la dentelle caractéristique, l'intérieur irrégulier.",
            "action": "Laisser refroidir 5 minutes, puis diviser avec une fourchette pour exposer les coins. Servir immédiatement ou conserver dans un sac hermétique."
          },
          {
            "state": "Overdone",
            "description": "Des visages plats brun foncé ou presque noirs avec une odeur amère et grillée. L'intérieur peut encore être légèrement pâteux si la chaleur était trop élevée et l'extérieur cuit plus rapidement que l'intérieur.",
            "action": "Séparez-en un pour vérifier. Si l'intérieur est gommé, terminer dans un four 160 C pendant 5 à 8 minutes."
          }
        ]
      },
      "feelCue": "Un muffin anglais fini se sent ferme, mais avec un léger donner quand il est pressé des côtés — comme une éponge ferme, pas une brique. Fixez-en un et appuyez sur votre pouce dans la miette exposée : il devrait revenir d'un million de petites poches d'air tout à la fois."
    }
  ]
};
