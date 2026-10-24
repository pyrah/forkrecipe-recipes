export default {
  "repoId": "master_italian_zabaglione_001",
  "parentRepoId": null,
  "slug": "zabaglione",
  "author": "ForkRecipe Kitchen",
  "title": "Zabaglione",
  "description": "Une crème italienne chaude de seulement trois éléments — les jaunes d'œufs, le sucre et le vin Marsala — fouettée sur un bain-marie jusqu'à ce qu'ils triplent en volume et deviennent une mousse incroyablement légère et tremblante qui goûte simultanément du vin doux, de la crème chaude et quelque chose de presque éthéré.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "desserts",
  "tags": [
    "Coutard",
    "Marsala",
    "œuf",
    "dessert",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 8,
    "salty": 1,
    "sour": 2,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Jaunes d'oeufs, température ambiante",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne (superfine)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "miel (utiliser un peu moins)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin sec de Marsala (Florio Secco ou similaire)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Moscato d'Asti",
        "sherry sec",
        "Vin Santo"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Garnish",
      "name": "baies ou pêches de saison fraîches, à servir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "cookies d'amaretti",
        "Pandoro"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "ribboned_yolk_mixture",
      "instructions": "Placez les jaunes d'œufs et le sucre de roulette dans un grand bol en métal ou en verre à fond rond profond. fouetter vigoureusement à la main ou avec un mélangeur jusqu'à ce que le mélange devienne ivoire pâle, triple légèrement en volume, et tombe du fouet dans un ruban épais et lent qui tient sa forme à la surface pendant 2-3 secondes avant de se dissoudre. Ce prémélange, appelé « blanchir », commence l'émulsion et assure une cuisson uniforme et lisse sur le bain-marie. Le sucre doit être presque complètement dissout avant que le bol ne passe à chaud — sentir le mélange entre les doigts; il doit se sentir lisse, pas gritty.",
      "visualCue": {
        "primaryTarget": "ivoire pâle, mélange presque blanc qui a augmenté en volume et tombe du fouet dans un ruban épais et continu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours jaune profond et liquide. Des chutes du fouet dans de fines gouttes, pas un ruban. Les granules de sucre sont visibles.",
            "action": "Continuez à fouetter encore 2-3 minutes. Le changement de couleur et l'augmentation de volume sont essentiels pour une zabaglione stable."
          },
          {
            "state": "Perfect",
            "description": "ivoire pâle, presque doublé en volume. Des chutes dans un ruban lent et épais qui tient brièvement à la surface avant de se dissoudre. Doux au toucher, pas de grit.",
            "action": "Ajouter le Marsala et passer au bain-marie."
          },
          {
            "state": "Overdone",
            "description": "Surgissant sans chaleur — très raide et sèche. Difficile à remuer.",
            "action": "C'est bien, allez au bain-marie. La chaleur va la relâcher."
          }
        ]
      },
      "feelCue": "Frottez une goutte entre vos doigts — il devrait se sentir satiné et lisse, sans les cristaux de sucre restant. Le mélange doit être chaud à cause de la friction du fouet."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ribboned_yolk_mixture",
        "ing_03"
      ],
      "outputState": "zabaglione_base",
      "instructions": "Ajouter le vin Marsala au mélange de yolk-sucre et fouetter pour le combiner. Le mélange s'amincira considérablement, ce qui est attendu. Le Marsala doit être à température ambiante; le vin froid peut provoquer une cuisson inégale des œufs. Goûtez le mélange cru : il doit être doux, vineux et légèrement riche. C'est votre point de départ — tout ce qui suit est juste la cuisson et l'incorporation de l'air.",
      "visualCue": {
        "primaryTarget": "Un liquide mince, pâle-or, uniformément combiné avec aucune stries de jaune d'œuf ou de sucre non mélangé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de jaune foncé ou de sucre non mélangé au fond du bol.",
            "action": "fouetter plus soigneusement jusqu'à ce qu'il soit complètement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Liquide uniforme en or pâle, uniformément combiné. Des odeurs de vin et d'œuf.",
            "action": "Placez le bol sur le bain-marie et commencez à fouetter immédiatement."
          },
          {
            "state": "Overdone",
            "description": "S.O. — Cette étape ne peut pas être exagérée.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Le mélange doit sentir délicatement Marsala — pas l'œuf cru, pas la brûlure d'alcool, mais un parfum rond, fruité, légèrement caramélisé."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "zabaglione_base"
      ],
      "outputState": "cooked_zabaglione",
      "instructions": "Portez une casserole d'eau à mijoter doucement — l'eau ne doit pas toucher le fond du bol, et elle ne doit pas bouillir agressivement. Placer le bol de la base de la zabaglione sur l'eau mijotante et commencer immédiatement à fouetter en continu dans un motif de figure-huit, en veillant à atteindre les côtés et le fond du bol. fouetter sans s'arrêter pendant 8-12 minutes. Le mélange commencera lentement à épaissir, à augmenter considérablement le volume et à passer du liquide à une mousse épaisse. Surveillez la température : si vous voyez de la vapeur monter du mélange ou si les oeufs commencent à avoir l'air grumeux aux bords, retirez immédiatement le bol de la chaleur et continuez à fouetter pendant 30 secondes, puis revenez. La température cible est de 70-75 C (160-170 F). La zabaglione se fait quand elle a triplé en volume et tient un monticule doux.",
      "visualCue": {
        "primaryTarget": "Une mousse pâle et volumineuse trois fois le volume d'origine, tenant un monticule doux lorsque le fouet est levé et retombé. Or pâle à ivoire de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours liquide et mince. Le mélange enrobe à peine le fouet. Moins que doublé en volume. L'odeur de Marsala est encore très importante et crue.",
            "action": "Continuez à fouetter sur le bain-marie. La transformation prend patience — 10 minutes de sifflement continu est normal."
          },
          {
            "state": "Perfect",
            "description": "Triple en volume, épais comme crème fouettée douce, et or pâle. Prend un ruban mou ou un monticule lorsque le fouet est levé. Des odeurs de crème de vin chaud. Atteint 72°C sur un thermomètre à lecture instantanée.",
            "action": "Retirer immédiatement du feu et servir dans les 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Aspect lumpy, granuleux ou brouillé sur les côtés. Une odeur légèrement sulfureuse. La mousse a dégonflé et le mélange semble dense et caillé.",
            "action": "Retirer immédiatement du feu. Si juste commencer à brouiller, à travers un tamis à mailles fines — la texture s'améliore quelque peu. Servir immédiatement, réfrigéré, comme une sauce plutôt qu'une mousse."
          }
        ]
      },
      "feelCue": "Soulevez le fouet et regardez le mélange retomber: il devrait se poser brièvement sur la surface avant de sombrer lentement — comme la crème fouettée douce, pas liquide. Votre bras sera vraiment fatigué à ce stade, ce qui est comment vous savez que c'est fait."
    },
    {
      "nodeId": "step_4",
      "action": "Servir",
      "inputs": [
        "cooked_zabaglione",
        "ing_04"
      ],
      "outputState": "finished_zabaglione",
      "instructions": "Divisez immédiatement la zabaglione chaude entre des verres chauds ou des coupés peu profonds — elle commencera à dégonfler et à se séparer dans les 10-15 minutes, donc la vitesse compte. Déposer les baies fraîches ou les pêches en tranches à côté ou sous la mousse. La mousse chaude contre les fruits froids ou à température ambiante est le contraste déterminant du plat. Servir avec une petite cuillère et un biscuit délicat comme un savoiardi ou un amaretto si désiré. Zabaglione peut également être réfrigéré brièvement et servi à froid, auquel cas plier dans une petite quantité de crème fouettée douce alors qu'il est encore chaud pour stabiliser la mousse.",
      "visualCue": {
        "primaryTarget": "Mousse d'or pâle soufflant au-dessus du bord du verre, brillant et tremblant, avec des fruits brillants à côté ou en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Zabaglione servi trop cool et déjà déflatant. Ça a l'air aqueux dans le verre.",
            "action": "Zabaglione doit être servi immédiatement à partir de la chaleur. Préparez les verres et les fruits avant de commencer à cuisiner."
          },
          {
            "state": "Perfect",
            "description": "Mousse chaude et volumineuse d'or pâle à peine contenue dans le verre. Tremble quand il est touché. Le fruit offre un contraste de couleur brillant.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Servi trop tard — la mousse s'est complètement dégonflée dans une fine couche de crème liquide au fond du verre.",
            "action": "Il a encore un excellent goût — le cuillerer sur le fruit comme une sauce. Pour référence future, préparez des verres avant de commencer."
          }
        ]
      },
      "feelCue": "La première cuillerée doit sentir une lumière impossible sur la langue — un nuage chaud, doux et vineux qui se dissout avant de s'y attendre, laissant derrière elle une chaleur qui rayonne de la poitrine."
    }
  ]
};
