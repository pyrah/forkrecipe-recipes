export default {
  "repoId": "master_polish_pierogi-dough_001",
  "parentRepoId": null,
  "slug": "pierogi-dough",
  "author": "ForkRecipe Kitchen",
  "title": "Pierogi Dough",
  "description": "Une pâte souple et soyeuse qui roule de façon impossible sans déchirer — pâle et lisse comme du cuir chamois, suffisamment souple pour plisser facilement, mais assez ferme pour survivre à un ébullition.",
  "cuisine": "Polonais",
  "culture": "Polonais",
  "category": "breads",
  "tags": [
    "les boulettes",
    "pâte",
    "poli",
    "bouillie",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "60 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
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
      "name": "Farine plate (tout usage)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tipo 00 farine pour une soyosité supplémentaire"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Crème acide (graisse pleine)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, fondu (pour ébullition)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol"
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
      "outputState": "shaggy_pierogi_dough",
      "instructions": "Défoncer la farine sur une surface de travail propre et faire un grand puits au centre. Ajouter les jaunes d'œufs, la crème sure, l'eau chaude et le sel au puits. Battre les ingrédients humides doucement avec une fourchette, puis incorporer progressivement la farine des parois intérieures du puits, en remuant dans une spirale d'élargissement. Quand le mélange devient trop épais pour remuer, commencez à pétrir avec vos mains — de la farine des bords vers l'intérieur, en pressant et en pliant. La pâte se retrouvera dans une masse rugueuse, légèrement collante.",
      "visualCue": {
        "primaryTarget": "Une masse de pâte cohésive et légèrement collante qui se maintient sans s'effondrer. Pas de poches de farine sèche. Dure et irrégulière dans la texture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est émiettée et s'effondre. Farine sèche à la surface.",
            "action": "Ajouter l'eau chaude une cuillère à café à la fois, pétrir après chaque addition, jusqu'à ce que la pâte cohère."
          },
          {
            "state": "Perfect",
            "description": "La touffe se tient bien et est légèrement collante mais pas humide. C'est bien.",
            "action": "Agenouiller pendant 5-8 minutes jusqu'à ce qu'il soit lisse."
          },
          {
            "state": "Overdone",
            "description": "La toux est très humide et collante, s'étendant sur la surface de travail.",
            "action": "Poudre avec la farine une cuillère à soupe à la fois, pétrir après chaque ajout, jusqu'à ce que la pâte cesse de se répandre."
          }
        ]
      },
      "feelCue": "La pâte initiale doit avoir l'air épaisse et légèrement piquante; elle colle légèrement aux doigts, mais ne se tire pas dans les cordes ou se sent mouillée. Cette légèreté est la crème aigre qui fonctionne."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "shaggy_pierogi_dough"
      ],
      "outputState": "rested_pierogi_dough",
      "instructions": "Agenouillez la pâte sur une surface légèrement farinée pendant 5-8 minutes à l'aide d'un rythme de retournement : poussez le talon de votre main vers l'avant, repliez la pâte sur elle-même, tournez un quart de tour, répétez. La pâte se transforme de rugueux et grumeux à lisse et souple. Il ne devrait pas exiger beaucoup de farine — ajouter seulement assez pour empêcher le collage. Une fois lisses, envelopper fermement l'enveloppe en plastique et reposer à température ambiante pendant 30 minutes. Ce repos est essentiel : il détend le gluten pour que la pâte soit roulée en papier-mince sans retomber.",
      "visualCue": {
        "primaryTarget": "Pâte lisse, pâle, légèrement brillante avec une surface comme le cuir chamois. Pas de grumeaux, de larmes ou de taches rugueuses. Il ressort lentement quand il pète.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore rugueuse et grogneuse. Larmes légèrement tendues. Les résistances se retournent ensemble.",
            "action": "Agenouillez encore 3 minutes. Le réseau de gluten est encore sous-développé."
          },
          {
            "state": "Perfect",
            "description": "Surface complètement lisse. Couleur pâle uniforme. Lentement, il ressort vers la moitié quand il est poché. Se sent doux, soyeux et souple.",
            "action": "Enveloppez bien et reposez-vous 30 minutes à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "La toux est chaude, très raide et élastique.",
            "action": "Envelopper et reposer pendant 20 minutes. La pâte surcollée se détend bien; le reste est obligatoire."
          }
        ]
      },
      "feelCue": "Après le pétrissage, la pâte devrait se sentir soyeuse et presque élastique sous la paume, comme en appuyant sur un tampon de gel ferme. Poussez un pouce à l'intérieur: il devrait lentement revenir en arrière trois quarts du chemin. Si elle revient instantanément, elle a besoin de plus de repos."
    },
    {
      "nodeId": "step_3",
      "action": "Rouleaux",
      "inputs": [
        "rested_pierogi_dough"
      ],
      "outputState": "rolled_dough_sheets",
      "instructions": "Diviser la pâte reposée en deux moitiés (conserver une moitié couverte pendant le travail de l'autre). Sur une surface légèrement farinée, rouler avec un rouleau du centre vers l'extérieur, tourner la feuille un quart de tour après chaque 3-4 passe. Le but est une feuille uniforme de 2mm d'épaisseur, assez mince pour être presque translucide lorsqu'elle est portée à la lumière, mais pas si mince qu'elle déchire. Couper les cercles avec une coupe ronde de 7-8 cm ou un verre retourné. Reroulez les débris une fois.",
      "visualCue": {
        "primaryTarget": "Une feuille lisse et uniforme d'environ 2 mm d'épaisseur — lorsqu'elle est maintenue jusqu'à une source lumineuse, elle doit être légèrement translucide. Les cercles sont coupés de façon propre sans arêtes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La feuille est de 4mm ou plus — trop épaisse. Les pierogis seront maigres et lourds. Les bords des cercles coupés ont l'air volumineux.",
            "action": "Continuer à rouler — appliquer une pression plus uniforme du centre vers l'extérieur. Faites tourner la feuille plus fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Feuille de 2 mm montrant une très légère translucidité lorsqu'elle est levée. Les cercles coupent proprement et tiennent leur forme ronde. Assez mince pour être tendre, assez épaisse pour être plissée.",
            "action": "Remplir et plisser immédiatement, ou garder les cercles couverts d'un chiffon humide."
          },
          {
            "state": "Overdone",
            "description": "La feuille se déchire ou a des trous. Translucide au point d'être vu. Sera cassé quand rempli et bouilli.",
            "action": "Reroulez doucement avec des débris pour patcher les larmes. Un peu plus épais est toujours mieux que trop mince."
          }
        ]
      },
      "feelCue": "La feuille roulée devrait être fraîche, lisse et souple, elle devrait draper sur votre main comme un tissu mince sans glisser dans vos doigts. Si elle déchire juste de la manipulation, elle est trop mince."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "rolled_dough_sheets",
        "ing_06"
      ],
      "outputState": "cooked_pierogi",
      "instructions": "Portez un grand pot d'eau bien salée à ébullition. Travaillez en lots — pas plus de 8-10 pierogi à la fois pour éviter les chutes de température et de collage. Abaissez doucement le pierogi avec une cuillère à fentes. Ils couleront jusqu'au fond, puis flotteront en cuisine. Une fois qu'ils flottent, cuire encore 2-3 minutes pendant un total de 4-5 minutes à partir de l'entrée. Retirer avec une cuillère à fentes, égoutter et mélanger immédiatement avec du beurre fondu pour éviter de coller.",
      "visualCue": {
        "primaryTarget": "Le pierogi cuit flotte à la surface, légèrement plumé et translucide, avec une surface lisse et non pliée. Les bords scellés sont intacts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pierogi ont à peine flotté ou n'ont pas encore flotté. La pâte a l'air gommée et mouillée quand mordue.",
            "action": "Cuire encore 1-2 minutes après avoir flottant. La pâte crule de pierogi est stodique et désagréable."
          },
          {
            "state": "Perfect",
            "description": "Flouer avec une surface lisse, légèrement translucide. La vapeur à l'intérieur. La toux est tendre et soyeuse lorsqu'elle est mordue — pas de goût d'amidon cru.",
            "action": "Égoutter, mélanger le beurre et servir immédiatement. Ou refroidir et fritr dans le beurre pour les côtés dorés et croustillants."
          },
          {
            "state": "Overdone",
            "description": "Pierogi est dans l'eau depuis trop longtemps. La pâte a commencé à gonfler et à se gonfler. Le bord scellé peut s'ouvrir.",
            "action": "Supprimer immédiatement. Les pierogis très surcuits deviennent waterlogged — servent rapidement avec du beurre."
          }
        ]
      },
      "feelCue": "Un pierogi cuit doit se sentir plumé et léger lorsqu'il est soulevé sur une cuillère, bien gonflé de la vapeur qui se trouve à l'intérieur. Bite un: la pâte doit être soyeuse et tendre, juste légèrement mâcheuse, donnant instantanément pour révéler le remplissage."
    }
  ]
};
