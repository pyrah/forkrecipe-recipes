export default {
  "repoId": "master_continental_homemade_yogurt_001",
  "parentRepoId": null,
  "slug": "yogurt",
  "author": "ForkRecipe Kitchen",
  "title": "Yogurt fait maison",
  "description": "Le lait entier scaldé, refroidi à la chaleur du sang et ensemencé d'une cuillerée de culture vivante, puis laissé dormir dans sa propre chaleur jusqu'à ce qu'il se mette en une crème tremblante, tannante — blanc pur, propre et légèrement sucré, le miracle quotidien de deux ingrédients se transformant en un seul.",
  "cuisine": "Continental",
  "culture": "Europe centrale",
  "category": "fermented",
  "tags": [
    "yaourt",
    "fermenté",
    "culture-dairy",
    "probiotique",
    "deux ingrédients",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "10 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Lait entier (non pasteurisé)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "2% de lait pour un ensemble plus mince",
        "Lait de chèvre pour un caillé plus tangier et plus doux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Yogourt des cultures vivantes pures (cultures actives, comme point de départ)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "un sachet de culture de yogourt lyophilisé (suivre la dose du paquet)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait sec non gras en poudre (facultatif, pour un ensemble plus épais)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "omettre pour un yaourt plus lâche et versable"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Écaillé",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "scalded_milk",
      "instructions": "fouetter le lait en poudre facultatif dans le lait froid pour dissoudre les morceaux, puis verser dans une casserole à fond lourd. Chauffer à feu moyen, en remuant souvent et en grattant le fond de sorte qu'il ne capture pas, jusqu'à ce que le lait atteigne 180 à 185°F (82 à 85°C) – juste en dessous d'un ébullition, avec la vapeur montante et un fin anneau de mousse au bord. Attendez 5 minutes. Cette étape ne consiste pas à tuer des bactéries; elle dénature les protéines de lactosérum, de sorte qu'elles se recoupent en un épais caillé au lieu d'un mince, pleureux.",
      "visualCue": {
        "primaryTarget": "Les essoufflements de vapeur lèvent une surface vitreuse, une peau délicate commence à se former au bord, et les premières petites bulles se brisent aux bords sans ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est chaud mais plat et silencieux, sans vapeur ni mousse, bien sous 180°F sur le thermomètre.",
            "action": "Continuez à chauffer et à remuer. Ne pressez pas la chaleur trop élevée ou les brûlures du fond — le milieu est juste."
          },
          {
            "state": "Perfect",
            "description": "Steady vapeur, un anneau mousseux autour du bord, et le thermomètre garé à 180 à 185°F. Le lait sent légèrement sucré et cuit, comme le haut du pudding de riz chaud.",
            "action": "Tenez 5 minutes à la température, puis retirez la chaleur pour refroidir."
          },
          {
            "state": "Overdone",
            "description": "Le lait a bouilli ou une peau coriace et brune, des morceaux brûlés se sont formés sur le fond.",
            "action": "Écraser la peau et NE PAS gratter le fond brûlé dans le pot. Une faible note cuite est bonne; un acride brûlé, il passera à travers, donc si mal brûlé, recommencer."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère sur le fond — à la température, vous sentirez qu'il commence juste à s'accrocher et épaissir presque imperceptiblement. L'odeur passe de cru et laiteux à sucré et cuit."
    },
    {
      "nodeId": "step_2",
      "action": "Température",
      "inputs": [
        "scalded_milk"
      ],
      "outputState": "cooled_milk",
      "instructions": "Laisser refroidir le lait à 110 à 115°F (43 à 46°C) – température corporelle, chaud mais pas chaud à un bout propre. Mélanger doucement de temps en temps pour empêcher une peau épaisse de se former, ou mettre le pot dans un bain d'eau glacée pour l'accélérer. Cette fenêtre est importante : plus chaude qu'environ 120°F tue la culture, plus froide que 105°F et fonctionne lentement ou pas du tout. Si une peau s'est formée, retirez-la pour ne pas faire de grumeaux.",
      "visualCue": {
        "primaryTarget": "Le lait est immobile et chaud sans vapeur, assis régulièrement à 110 à 115°F sur le thermomètre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours à vapeur, thermomètre au-dessus de 120°F. Trop chaud pour semer.",
            "action": "Attendez, ou utilisez un bain de glace. L'ajout de culture va écraser les bactéries et le yogourt ne sera pas réglé."
          },
          {
            "state": "Perfect",
            "description": "Pas de vapeur, le côté du pot est confortablement chaud à tenir, thermomètre à 110 à 115°F.",
            "action": "Déplacez-vous rapidement pour le semer avec le démarreur avant de refroidir davantage."
          },
          {
            "state": "Overdone",
            "description": "Le lait a chuté en dessous de 105°F et ne sent que tiède.",
            "action": "Réchauffez doucement à feu doux dans la fenêtre, en remuant constamment, puis continuez. Le lait frais se ferment lentement plutôt que d'échouer."
          }
        ]
      },
      "feelCue": "Une goutte à l'intérieur de votre poignet devrait se sentir agréablement chaud comme la bouteille d'un bébé — jamais chaud. Si ça pique, c'est trop chaud; si tu le sens à peine, c'est trop cool."
    },
    {
      "nodeId": "step_3",
      "action": "Inoculer",
      "inputs": [
        "cooled_milk",
        "ing_02"
      ],
      "outputState": "seeded_milk",
      "instructions": "Assurez-vous que le yaourt de départ est frais et étiqueté avec des cultures vivantes ou actives. Dans un petit bol, fouettez-le avec une tasse de lait chaud jusqu'à ce qu'il soit complètement lisse et sans grumeaux, puis remuez-le dans le pot et fouettez soigneusement afin que la culture soit uniformément dispersée. N'exagèrez pas le démarrage — un peu va loin, et trop en fait foule les bactéries et donne un résultat plus aigre et plus mince.",
      "visualCue": {
        "primaryTarget": "Un lait uniforme, légèrement mousseux, blanc pur, sans stries ni touffes flottantes d'entrée — chaque cuillère semble identique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des rubans visibles ou des blobs d'entrée épaisse flottent encore dans le lait mince; il n'est pas uniformément mélangé.",
            "action": "Encore du fouet. L'ensemencement est inégal, laissant des taches fines et épaisses dans le yaourt final."
          },
          {
            "state": "Perfect",
            "description": "Lait chaud lisse, homogène et peu mousseux qui sent frais et légèrement tannant de l'entrée.",
            "action": "Verser dans des pots propres ou un contenant et passer immédiatement à l'étape d'incubation."
          },
          {
            "state": "Overdone",
            "description": "Le mélange semble cassé ou légèrement caillé aux bords.",
            "action": "Le lait était probablement encore trop chaud. Whisk lisse et continuer de toute façon; il peut mettre plus doux que l'idéal."
          }
        ]
      },
      "feelCue": "La première méthode de lisier est la clé: mélanger le démarreur dans un peu de lait avant que le pot entier n'empêche les touffes. Le lait se sent encore réconfortant au toucher du pot quand vous le remplissez."
    },
    {
      "nodeId": "step_4",
      "action": "Incuber",
      "inputs": [
        "seeded_milk"
      ],
      "outputState": "finished_yogurt",
      "instructions": "Maintenez le lait ensemencé à une température constante de 105 à 115°F (40 à 46°C) pendant 6 à 10 heures, non perturbé — dans un four allumé avec la lumière allumée, dans une glacière remplie de pots d'eau chaude, dans une casserole chaude enveloppée ou dans un yaourt. Ne bougez pas, ne remuez pas, ne le bousculez pas pendant qu'il se met; l'agitation brise le caillé de formation. Commencez à vérifier à 6 heures: Conseillez doucement le pot et regardez pour un ensemble propre. Plus long signifie plus épais et plus tangent. Quand c'est à votre goût, réfrigérez-le au moins 4 heures pour le raffermir complètement et arrêter les averses. Pour le style grec, lisez un tamis avec du tissu et égouttez le yaourt réfrigéré de 1 à 2 heures.",
      "visualCue": {
        "primaryTarget": "Tilted doucement, le yogourt s'éloigne du côté dans une masse tremblante comme la crème douce, tenant sa forme, avec peut-être un mince film de lactosérum clair jaune-vert pooling à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tilting le bocal, le contenu se perd toujours comme du lait mince et soupeux qui n'a pas gelé. Petit à petit.",
            "action": "Continuez à incuber et vérifiez l'heure. Un jeu faible signifie une basse température, un démarrage inexistant, ou tout simplement plus de temps nécessaire — la chaleur et la patience le réparent habituellement."
          },
          {
            "state": "Perfect",
            "description": "Un gel wobbling propre qui conserve l'impression d'une cuillère, sentant agréablement amer et goûtant lumineux et tannant avec une finale crémeuse.",
            "action": "Réfrigérer à la fois pendant au moins 4 heures. Refroidir les firmes le caillé et les verrous dans la saveur; économiser quelques cuillères comme le démarreur pour votre prochain lot."
          },
          {
            "state": "Overdone",
            "description": "Amer avec beaucoup de lactosérum séparé et peut-être une surface légèrement grainée, fissurée ou courbée.",
            "action": "Il est surfermenté mais parfaitement sûr — remuez le lactosérum et utilisez-le pour la cuisson, les smoothies ou les marinades. La prochaine fois, incubez le refroidisseur ou pendant moins d'heures."
          }
        ]
      },
      "feelCue": "Résistez à l'envie de jeter un coup d'œil et de prod — un seul coup de pouce dans les premières heures peut détruire l'ensemble. Bien fait, une cuillère se tient un moment avant de couler, et les parties caillées avec un clivage doux et custaminé plutôt qu'un slosh aqueux."
    }
  ]
};
