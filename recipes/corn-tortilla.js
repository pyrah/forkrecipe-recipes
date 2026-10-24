export default {
  "repoId": "master_mexican_corn_tortilla_001",
  "parentRepoId": null,
  "slug": "corn-tortilla",
  "author": "ForkRecipe Kitchen",
  "title": "Tortille de maïs",
  "description": "Des rondelles à trois ingrédients de masa nixtamalisées pressées minces, cuites sur un comal sec jusqu'à ce qu'elles bouffent et char dans des taches, avec un parfum de maïs terreux et légèrement sucré.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "breads",
  "tags": [
    "tortilla",
    "Mexique",
    "Masa",
    "maïs",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Masa harina (farine de maïs nixtamalisée, p.ex. Maseca)",
      "ratioValue": 2,
      "defaultUnit": "cups",
      "substitutions": [
        "masa fraîchement moulue (utiliser 3 tasses pour le même rendement)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (105–115°F / 41–46°C)",
      "ratioValue": 1.5,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "masa_dough",
      "instructions": "Mélanger la masa harina et saler dans un bol moyen. Ajouter l'eau chaude progressivement, mélanger avec vos mains pendant que vous versez. Tricoter la pâte en taillant et en pliant pendant 2-3 minutes jusqu'à ce qu'elle se combine dans une boule lisse et uniforme sans stries sèches. La masa devrait avoir l'impression qu'elle est tendre, souple, humide et lisse, et non collante ou émiettée. Couvrir avec un chiffon humide et reposer 5-10 minutes. Ce repos est bref mais important : la masa harina absorbe complètement l'eau pendant le repos, et la pâte qui semblait légèrement sèche atteint souvent la bonne consistance après avoir attendu. Testez l'hydratation en appuyant sur une boule dans votre paume : si les bords craquent, ajoutez de l'eau une cuillère à café à la fois ; si elle colle à votre paume et laisse des résidus, ajoutez une pincée plus de masa harina.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et uniforme de pâte qui tient ensemble sans craquer aux bords. La couleur est un jaune-tan pâle uniforme. La surface est lisse sans fissures ni stries sèches lorsque vous pincez et repliez une pièce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est émiettée et s'effondre lorsqu'elle est pressée. Les bords craquent quand vous roulez une balle entre vos paumes. La pâte a l'air poudreuse dans les taches.",
            "action": "Ajouter une cuillerée à café à la fois, pétrir après chaque addition, jusqu'à ce que la pâte se maintienne lorsqu'elle est pressée. Trop peu d'eau est l'erreur la plus courante de la masa harina."
          },
          {
            "state": "Perfect",
            "description": "Balle lisse et souple qui presse à plat sans craquer. C'est comme de l'argile de modélisation douce. Pas de collants sur une paume sèche, pas de chute au bord. Une tortilla pressée tient une forme ronde propre sans déchirer.",
            "action": "Divisez en parties de golf (environ 35 g chacune) et appuyez sur."
          },
          {
            "state": "Overdone",
            "description": "La toux est collante et collante, elle laisse un film sur vos paumes et la surface de la tortilla pressée semble humide et boiteuse. Il peut coller au plastique dans la presse.",
            "action": "Knead dans masa harina une cuillère à soupe à la fois jusqu'à ce que l'embout soit résolu. La masa trop hydratée fabrique aussi des tortillas qui s'évaporent sur le comal plutôt que de développer l'omble."
          }
        ]
      },
      "feelCue": "La pâte masa parfaite doit se sentir comme l'intérieur d'une oreille douce — souple, lisse et parfaitement céder sans être collante. Lorsque vous roulez une balle entre vos paumes, elle doit se sentir dense et même, ne laissant aucun résidu. Appuyez entre le pouce et l'index : les bords doivent appuyer à plat sans craquer. Ce seuil tactile — pas de fissure, pas de bâton — est la cible."
    },
    {
      "nodeId": "step_2",
      "action": "Presser",
      "inputs": [
        "masa_dough"
      ],
      "outputState": "pressed_tortillas",
      "instructions": "Divisez la pâte en boules d'environ 35 g chacune. Placez une balle entre deux feuilles de plastique (coupée d'un sac à fermeture éclair fonctionne bien) dans une presse à tortilla. Appuyez fermement avec un mouvement lisse — ne pas basculer ou pomper la poignée. Ouvrir, tourner la tortilla 180° et presser à nouveau pour une épaisseur uniforme. La tortilla doit être uniformément mince (environ 2 mm) et ronde, d'environ 15 cm (6 pouces) de diamètre. Peler soigneusement du plastique — il doit libérer proprement si hydraté correctement. Si vous n'avez pas de presse, utilisez une poêle à fond plat ou une goupille de roulement.",
      "visualCue": {
        "primaryTarget": "Un disque mince, même rond avec des bords lisses et non craqués. La couleur est uniforme jaune-tan pâle et la surface est même sans taches ou trous fins. Une fois pelé du plastique, il tient sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tortilla est trop épaisse — plus de 4 mm. On dirait une petite rondelle de hockey. Les tortillas épaisses cuisinent inégalement, restant pâteux au centre pendant que les chars de surface.",
            "action": "Appuyez à nouveau avec plus de force, ou utilisez plus de poids sur la presse. Alternativement, utiliser un laminoir pour rouler plus finement entre les feuilles de plastique."
          },
          {
            "state": "Perfect",
            "description": "Mince (2 mm), même ronde avec des bords propres. Suffisamment de lumière pour voir votre main à travers elle dans une fenêtre lumineuse mais pas papier-fin. Pele le plastique en une seule pièce.",
            "action": "Cuire immédiatement sur un comal préchauffé. Les tortillas pressées peuvent se reposer sous un chiffon humide pendant quelques minutes, mais ne doivent pas rester longtemps assis ou elles sèchent aux bords."
          },
          {
            "state": "Overdone",
            "description": "Tortilla est translucidement mince — vous pouvez le voir clairement. Les bords semblent arrachés et déchirés là où ils ont été pressés au-delà de sa limite structurelle. Il déchire quand il est pelé du plastique.",
            "action": "Re-ballez soigneusement, agenouillez brièvement, et ré-pressez avec moins de force. Les tortillas trop minces brûlent instantanément sur le comal et n'ont pas de bouffées. Une presse fraîche d'une pièce re-ballée est toujours mieux que de travailler avec une feuille déchirée."
          }
        ]
      },
      "feelCue": "Une tortilla correctement pressée devrait se détacher du plastique en douceur, sans résistance ni déchirement — la façon dont un autocollant rond se détache de son support. Tenez-le sur votre paume : il devrait draper légèrement les bords et se sentir frais, doux et flexible. Si elle est rigide ou craquelée, la pâte est trop sèche. Si elle s'étire et déchire, elle est trop humide ou trop fine."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "pressed_tortillas"
      ],
      "outputState": "finished_tortillas",
      "instructions": "Chauffer à feu vif une poêle à comal sec, en fonte ou à grille lourde jusqu'à ce qu'elle soit très chaude — une goutte d'eau devrait vaporiser instantanément. Ne graissez pas la surface. Placez la tortilla sur le comal et faites cuire 30 à 40 secondes sur le premier côté – vous verrez les bords commencer à paraître secs et légèrement plus légers, et de petites bulles de vapeur peuvent se former à la surface. Flip avec une spatule plate. Cuire le deuxième côté 30 à 40 secondes, puis retourner sur le premier côté. Sur ce troisième contact, la vapeur piégée fera souffler la tortilla, parfois de façon spectaculaire, dans un ballon complet. Cette bouffée est un signe de cuisson parfaite : elle signifie que les deux couches de surface se séparent proprement, créant un intérieur léger et aéré. La durée totale de cuisson par tortilla est de 90 secondes à 2 minutes. Empiler dans un récipient en tissu immédiatement pour emprisonner la vapeur et garder doux.",
      "visualCue": {
        "primaryTarget": "bronzage léger avec des taches irrégulières brun foncé et légèrement carbonisées des deux côtés, et une bouffée complète ou partielle pendant le troisième contact. Les bords semblent secs et légèrement cloqués. La surface semble grillée et mate, pas crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est pâle, surtout crue. Pas de taches de char. La tortilla ne souffle pas. Sense pâteux et humide quand pressé.",
            "action": "Cuire encore 15 à 20 secondes de chaque côté. Le comal peut ne pas être assez chaud — augmenter la chaleur. Une tortilla sous-cuite larmes et des bâtons lorsqu'il est utilisé pour ramasser de la nourriture."
          },
          {
            "state": "Perfect",
            "description": "Les deux côtés montrent un motif de fond bronzé avec des taches brun foncé. La tortilla a soufflé au moins partiellement sur le dernier tour. Il est souple quand chaud, ferme quand frais, avec un arôme de maïs grillé.",
            "action": "Piquer immédiatement dans une serviette en tissu ou une tortille chaude. La vapeur piégée les maintient souples pendant 20 à 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Noir brun foncé partout, raide et sec. Des odeurs de maïs brûlé. Ne souffle pas — la surface scellée avant que la vapeur puisse se former. Bristé et craquelure quand plié.",
            "action": "Jeter et réduire la chaleur comale, ou faire cuire plus rapidement. Tortilles de maïs vont de parfait à brûlé très rapidement sur la chaleur élevée."
          }
        ]
      },
      "feelCue": "Une tortilla finie, fraîche du comal et empilée dans un chiffon, devrait être souple et chaude — vous devriez pouvoir la plier en deux sans craquelure. Lorsque vous appuyez sur la pile avec votre paume, il devrait donner doucement. Si les tortillas craquent lorsqu'elles sont pliées, soit elles sont surcuites, soit elles n'ont pas été empilées immédiatement en tissu pour retenir la vapeur. L'arôme doit être grillé au maïs — sucré, noisette, peu terreux — et non pas à la farine crue ou brûlée."
    }
  ]
};
