export default {
  "repoId": "master_british_english_muffins_001",
  "parentRepoId": null,
  "slug": "english-muffins",
  "author": "ForkRecipe Kitchen",
  "title": "Muffins anglais",
  "description": "Des rondelles épaisses de levures cuites lentement sur une grille en fonte, jusqu'à ce que leurs côtés soient d'or pâle et que leurs intérieurs soient un labyrinthe de noks et de crannies qui piègent le beurre.",
  "cuisine": "Anglais",
  "culture": "Anglais",
  "category": "breads",
  "tags": [
    "muffin anglais",
    "grille",
    "pain",
    "Petit déjeuner"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "3 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
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
      "role": "Hydration",
      "name": "Lait entier (chauffé, 100°F / 38°C)",
      "ratioValue": 65,
      "defaultUnit": "%",
      "substitutions": [
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure sèche instantanée",
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
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "Saindoux",
        "Écourtement des légumes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Oeufs (1 gros)",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Semoule ou farine de maïs fine (pour la poussière)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de riz"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "english_muffin_dough",
      "instructions": "fouetter le lait chaud, le sucre et la levure ensemble et laisser reposer 5 minutes jusqu'à mousser (la levure instantanée peut être ajoutée directement à la farine à la place). Dans un grand bol, mélanger la farine et le sel. Ajouter le mélange de levure, le beurre ramolli et l'œuf. Mélanger jusqu'à ce qu'une pâte collante légèrement humide se forme. Cette pâte est plus humide que la pâte à pain typique — presque à mi-chemin entre une pâte et une pâte — et cette hydratation élevée est exactement ce qui crée la structure caractéristique du coin ouvert lorsque les muffins sont cuits. Agenouillez à la main de 6 à 8 minutes (la pâte sera collante et voudra s'accrocher; utilisez un racleur de pâte et résistez à ajouter de la farine) ou 5 minutes dans un mélangeur de stand avec le crochet de pâte. La pâte finie doit être lisse, extensible et collante, mais non inapplicable.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et un peu collante qui tient ensemble comme une balle mais adhère au bol et au banc sans farine. Il s'étend librement sans déchirer et a un éclat satiné. Pas aussi sec que de la pâte à pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est rugueuse, lugubre et larmes lorsqu'elle est tendue. Le beurre n'est pas entièrement incorporé — des stries graisseuses visibles.",
            "action": "Agenouillez encore 3-4 minutes. Beurre prend du temps à incorporer; au départ, il peut sentir qu'il brise la pâte, mais le pétrissage continu l'amènera."
          },
          {
            "state": "Perfect",
            "description": "Balle lisse, élastique et collante. Il ressort environ les deux tiers quand il pète. S'étire sur une membrane très fine avant de déchirer. Pas de stries de beurre visibles.",
            "action": "Couvrir et fermer en vrac de 1 à 1,5 heure à température ambiante jusqu'à ce qu'il ait doublé."
          },
          {
            "state": "Overdone",
            "description": "La toux est très chaude, a commencé à fermenter sur le banc, et se sent lâche ou sur-extensible — elle ressort à peine lorsqu'elle est cuite.",
            "action": "Formez immédiatement et déplacez-vous dans un environnement d'épreuve plus frais. La pâte est encore fine mais la fenêtre pour une bonne structure se rétrécit."
          }
        ]
      },
      "feelCue": "La pâte de muffin anglaise est intentionnellement plus humide que vous ne vous y attendiez. Résistez à l'envie d'ajouter de la farine — l'adhésif est le ticket pour les coins et les cranes. La pâte devrait s'éloigner des côtés du bol lorsqu'elle est mélangée mais coller à vos paumes si vous appuyez à plat. Lorsqu'elle est bien pétrie, elle doit s'étirer sur un bras complet avant de déchirer."
    },
    {
      "nodeId": "step_2",
      "action": "Preuve",
      "inputs": [
        "english_muffin_dough"
      ],
      "outputState": "cut_rounds",
      "instructions": "Laissez la pâte en vrac-ferment, couvert, jusqu'à doublé — environ 1–1,5 heures. Poussez gentiment une plaque de cuisson avec de la semoule ou de la farine de maïs. Tourner la pâte sur une surface légèrement farinée, en étant doux pour préserver les bulles. Pat ou rouler doucement à 1 pouce / 2,5 cm d'épaisseur — pas plus mince, ou les muffins n'auront pas assez de volume intérieur pour les coins. Couper les rondelles avec une coupe de 3,5 pouces / 9 cm. Posez-les côté semoule sur la feuille préparée. Poussez généreusement les dessus avec plus de semoule. Couvrir et étaler 30 à 45 minutes jusqu'à ce qu'il soit visiblement gonflé et jiggly. Ne pas prouver jusqu'à ce qu'il ait doublé à nouveau — les muffins anglais devraient aller sur la grille légèrement sous-proofé afin qu'ils continuent à monter sur la chaleur.",
      "visualCue": {
        "primaryTarget": "Rondes enrobées de semoule, légèrement domptées. Ils devraient être nettement plus grands et plus légers que lors de la première coupe, mais pas complètement doublés — environ 60 à 70 % plus grands.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ronds semblent plats et denses, à peine gonflés. Fossettes de surface plutôt que ressorts lorsqu'elles sont pressées. La pâte semble serrée.",
            "action": "Couvrir et prouver 15 à 20 minutes de plus. Ils ont besoin de suffisamment de gaz pour créer la structure du coin lorsqu'ils touchent la grille."
          },
          {
            "state": "Perfect",
            "description": "Visiblement gonflés, ronds et collants, jonglants lorsque vous déplacez le plateau. Appuyez doucement — le tiret se remplit lentement pendant 3-4 secondes.",
            "action": "Cuire immédiatement sur la grille préchauffée."
          },
          {
            "state": "Overdone",
            "description": "Les ronds semblent très aérés et légèrement effondrés ou irréguliers. Ils se sentent très légers et la surface ressort immédiatement, suggérant que la levure s'est épuisée.",
            "action": "Cuire immédiatement — ils sont encore bons mais peuvent ne pas se développer autant de coins. Les muffins seront plus tendres et ouverts, mais ils ne s'élèveront peut-être pas beaucoup plus loin sur la grille."
          }
        ]
      },
      "feelCue": "Soulevez doucement un rond à l'épreuve — il devrait sentir une lumière inattendue pour sa taille, presque aérée, comme ramasser un petit nuage. Remettez-le soigneusement. La pâte de muffin anglaise prouvée est fragile; la manipulation rugueuse va effondrer les bulles de gaz que vous avez passé une heure à construire."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "cut_rounds"
      ],
      "outputState": "griddle_cooked_muffins",
      "instructions": "Chauffer une grille en fonte ou une poêle lourde à feu doux – 300–325°F / 150–160°C est idéal. Ne pas utiliser une poêle antiadhésive (elle est trop chaude au fond). Ne graissez pas la casserole — le revêtement de semoule empêche le collage et crée la croûte caractéristique du fond légèrement croquant. Cuire les muffins en lots de 7 à 9 minutes par côté. Les côtés doivent rester pâles (ils ne cuisinent que du bas et du haut). Dépliez une fois lorsque le fond est d'or moyen et qu'une ligne d'aspect sec apparaît à mi-chemin du côté du muffin — l'intérieur est visible. Après cuisson, refroidir 10 minutes avant de diviser. Toujours diviser avec une fourchette en insérant les dents tout autour de la circonférence et en s'éloignant — jamais couper avec un couteau, qui compresse la miette et détruit les coins.",
      "visualCue": {
        "primaryTarget": "Même les dessus et les fonds bruns d'or moyen avec des côtés pâles et incrustés. Les muffins ont l'air bombés et bien enfilés. Lorsque vous en divisez une avec une fourchette, l'intérieur révèle un réseau ouvert et inégal de trous et de coins irréguliers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fond est en or pâle mais la ligne fixe ne s'étend pas au-delà de la marque à mi-chemin. L'intérieur, lorsqu'il est fendu, semble pâteux et dense au centre avec une texture gommée.",
            "action": "Retourner à la grille sur la chaleur la plus basse possible pendant 3 à 4 minutes de plus de chaque côté. En alternative, terminer dans un four de 350 °F / 175 °C pendant 5 à 8 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les deux visages sont dorés. Lorsqu'il est divisé, l'intérieur est entièrement réglé avec une miette ouverte et irrégulière — un réseau visible de trous traverse tout le muffin. Pas de centre de beignet.",
            "action": "Laisser refroidir 10 minutes, à la fourche, grillé et beurre immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les visages sont brun foncé ou brun tacheté. Les côtés ont également commencé à brunir. Le muffin est dur et dense.",
            "action": "Couper la surface la plus sombre avec un couteau à pain. L'intérieur est généralement bien. Température de grille inférieure à la prochaine tranche — Les muffins anglais ont besoin d'une chaleur douce et soutenue, et non d'une chaleur élevée."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur le dessus d'un muffin sur la grille, il doit résister doucement mais ressortre — s'il s'effondre sous le toucher le plus léger, il n'est pas encore réglé. Après la cuisson, le muffin doit se sentir ferme et entièrement cuit au four, et non squishy. Lorsque vous le divisez en fourche, il devrait y avoir un son déchirant audible que les coins se détachent, comme si vous déchiriez du papier très mince."
    }
  ]
};
