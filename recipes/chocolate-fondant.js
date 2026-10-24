export default {
  "repoId": "master_french_chocolate_fondant_001",
  "parentRepoId": null,
  "slug": "chocolate-fondant",
  "author": "ForkRecipe Kitchen",
  "title": "Fondant au chocolat (Cake Molten Lava)",
  "description": "Un gâteau chocolaté individuel profondément sombre avec une coquille à peine posée qui s'effondre sur l'assiette pour libérer une rivière de ganache liquide du centre - la marge entre triomphe et désastre est exactement deux minutes dans le four.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "desserts",
  "tags": [
    "chocolat",
    "dessert",
    "fondu",
    "Personne",
    "Dîner",
    "Cuisson"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 2740,
  "forks": 512,
  "contributors": 63,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 4,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, plus supplément pour graissage",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Chocolat noir (70 % de matières solides de cacao), haché",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "chocolat doux amer 66-72%"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Oeufs entiers",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine pure, plus supplément pour la poussière",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz (sans gluten)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "chocolate_butter_base",
      "instructions": "Faire fondre le beurre et le chocolat ensemble dans un bol thermofuge sur une casserole d'eau à peine mijotée (bain-marie). Ne laissez pas le bol toucher l'eau. Incorporer délicatement jusqu'à ce qu'il soit complètement fondu et brillant. Retirer du feu et réserver pour refroidir légèrement — vous voulez qu'il soit chaud, pas chaud (environ 40 C). Pendant ce temps, beurre et farine six moules individuels de dariole ou ramequins (100 ml), puisant l'excès de farine.",
      "visualCue": {
        "primaryTarget": "Une ganache fluide uniformément brillante sans grumeaux ni grain. La surface brille comme du bois laqué et tombe dans un ruban lisse de la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est fondu mais le chocolat a encore des morceaux. Le mélange semble cassé et granuleux.",
            "action": "Continuez à remuer à feu doux — même la chaleur douce fondra les morceaux restants."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, fluide. La température est chaude mais ne brûle pas lorsqu'elle est testée sur le poignet intérieur.",
            "action": "Retirer du feu et refroidir 5 minutes avant d'ajouter les œufs."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est emparé: il est épais, granuleux et terne. Le chocolat a brûlé.",
            "action": "Une ganache saisie ne peut être récupérée. Recommencer avec du chocolat frais et du beurre, à feu doux."
          }
        ]
      },
      "feelCue": "La base doit couler comme de la crème épaisse et sentir intensément le chocolat noir, avec un soupçon de lait chaud — pas fumé, pas tranchant."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "egg_sugar_ribbon",
      "instructions": "Dans un grand bol, fouetter les œufs entiers, les jaunes d'œufs et le sucre de castre vigoureusement à la main (ou avec un fouet électrique) pendant 3-4 minutes jusqu'à ce que le mélange soit pâle, épais et tombe du fouet dans un large ruban qui tient sa forme à la surface pendant 2-3 secondes avant de se dissoudre. C'est cette aération qui donne au fondeur sa coquille mince, ressemblant à du soufflé.",
      "visualCue": {
        "primaryTarget": "Un mélange jaune pâle et crémeux qui tombe du fouet levé dans un ruban épais et lent, s'écrivant sur lui-même un moment avant de retomber.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours liquide et jaune, sans changement de volume ni de couleur. Élimine le fouet en fils fins.",
            "action": "Continuez à fouetter: le sucre doit se dissoudre et les œufs doivent être aérés."
          },
          {
            "state": "Perfect",
            "description": "Pale et doublé en volume. Le ruban tient 2-3 secondes. Le mélange se sent significativement plus épais lorsque le fouet se lève.",
            "action": "Pliez dans la base de chocolat immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Survolé par la machine : très raide et mousseux, laissant des pics raides. Il sera difficile de plier sans dégonfler.",
            "action": "Plier très doucement — le fondeur fonctionnera encore mais peut avoir une coquille plus sèche."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez le fouet, le ruban doit tomber lentement et avec du poids, comme un large ruban de satin plutôt qu'un fil d'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "egg_sugar_ribbon",
        "chocolate_butter_base",
        "ing_06",
        "ing_07"
      ],
      "outputState": "fondant_batter",
      "instructions": "Verser la base chaude de beurre de chocolat dans le ruban de sucre. Plier avec une grande spatule à l'aide de mouvements larges et délibérés à partir du fond du bol — ne pas remuer. Lorsqu'il est presque combiné, tamiser au-dessus de la farine et du sel, puis plier jusqu'à ce qu'il soit simplement incorporé sans stries sèches visibles. La pâte doit être brillante, fluide et aérée. Diviser uniformément entre les moules préparés, remplir à 1 cm au-dessous de la jante. Réfrigérer pendant au moins 20 minutes (jusqu'à 24 heures).",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante, foncée sans stries de farine ou d'oeuf. Il se déverse proprement dans les moules et la surface est plane et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des éraflures de mélange d'oeufs pâles et des stries de chocolat noir encore visibles. Poches de farine non mélangées.",
            "action": "Continuer le pliage avec 4-5 coups de plus – chaque pli comprend environ 10%."
          },
          {
            "state": "Perfect",
            "description": "Toujours sombre et brillant. La batterie maintient son niveau dans le moule sans endosser ni couler. Ça sent le chocolat.",
            "action": "Réfrigérer jusqu'à ce qu'il soit prêt à cuire."
          },
          {
            "state": "Overdone",
            "description": "La batterie s'est dégonflée: elle est dense et liquide, elle n'est plus aérée. Surplié.",
            "action": "Faire cuire quand même. La coquille sera plus dense et le centre liquide sera plus petit, mais le fondeur fonctionnera encore."
          }
        ]
      },
      "feelCue": "La pâte doit verser de la spatule comme une double crème épaisse — pas aussi fluide que l'eau, mais pas assez raide pour tenir une forme. Vous devriez voir de petites bulles suspendues."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "fondant_batter"
      ],
      "outputState": "finished_fondant",
      "instructions": "Préchauffer le four à 200 C (fan 190 C). Placer les moules sur un plateau de cuisson et cuire pendant exactement 10 à 12 minutes (10 pour un centre très liquide, 12 pour un fluide moussant). L'extérieur doit être réglé et s'éloigner très légèrement des côtés du moule; le centre doit encore osciller. Lancez un couteau autour du bord, retournez sur des plaques chaudes et attendez 5 secondes avant de soulever le moule. Servir immédiatement — le centre commence à être réglé dans les 2 minutes suivant la sortie du four.",
      "visualCue": {
        "primaryTarget": "Entièrement relevé avec une surface bombée, mate, set. Le moule se soulève proprement pour révéler un gâteau foncé brillant qui tient sa forme pendant 3-4 secondes avant que le centre commence à couler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le haut est encore brillant et liquide. Le gâteau s'effondre complètement lorsqu'il est inversé — plus une flaque qu'un gâteau.",
            "action": "Retourner le moule au four 2 minutes de plus. La ligne entre brut et droit est étroite."
          },
          {
            "state": "Perfect",
            "description": "Domé et posé sur le dessus, mat, tirant du moule. Inverse proprement. Le centre coule lentement et brillamment lorsqu'il est coupé ou pressé.",
            "action": "Assiette immédiatement et apportez à la table immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le haut est entièrement à l'air sec. Lorsqu'il est coupé, l'intérieur est uniformément éponge sans centre liquide — un gâteau au chocolat, pas un fondant.",
            "action": "Accepter le résultat. Servir avec de la sauce caramel chaude pour compenser le centre perdu."
          }
        ]
      },
      "feelCue": "Tapez doucement le haut du moule avec un bout de doigt — la coquille devrait se sentir réglée et ressortre, mais la masse sous elle devrait se déplacer et se courber légèrement, comme taper un ballon d'eau."
    }
  ]
};
