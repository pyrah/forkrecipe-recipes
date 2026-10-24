export default {
  "repoId": "master_british_lemon_curd_001",
  "parentRepoId": null,
  "slug": "lemon-curd",
  "author": "ForkRecipe Kitchen",
  "title": "Curd citron britannique",
  "description": "Les jaunes d'oeufs, le beurre et les agrumes farouches font cuire dans une crème fondue, jaune clair, qui frappe la langue avec une tarte vive et presque douloureuse avant que le beurre la lisse en soie. Étendre épais sur des scones chauds ou cuilleré sur meringue, il est concentré en soleil dans un pot.",
  "cuisine": "Anglais",
  "culture": "Thé anglais de l'après-midi",
  "category": "desserts",
  "tags": [
    "citron",
    "curd",
    "britanniques",
    "agrumes",
    "pâtisserie",
    "préserver",
    "Étendue"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 5,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Jus de citron frais (environ 4 grands citrons), tendu",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert",
        "jus de fruit de passion"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne (sucre blanc fin)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "miel (réduire de 20%)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Grand jaune d'œuf",
      "ratioValue": 4,
      "defaultUnit": "yolks per 100ml juice",
      "substitutions": [
        "oeufs entiers (4 jaunes = 2 œufs entiers, résultat plus riche)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé, froid, cubes",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre salé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Zeste de citron, râpé finement (des mêmes citrons)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "Zeste de citron Meyer"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer fin, une pincée",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "raw_curd_base",
      "instructions": "Dans un bol moyennement résistant à la chaleur — en verre ou en acier inoxydable, non en aluminium, qui réagit avec les agrumes — combinez le jus de citron, le sucre de ricin, les jaunes d'œufs et le zeste de citron. fouetter vigoureusement pendant environ 90 secondes jusqu'à ce que le mélange soit uniformément combiné et que le sucre commence à se dissoudre. Vous remarquerez que les jaunes s'épaississent légèrement à partir de l'acide et du sucre — ceci est sûr à température ambiante pendant le court laps de temps nécessaire pour préparer votre bain-marie. Ne pas encore ajouter le beurre; il va plus tard à une température plus basse pour créer l'émulsion qui donne caillé son corps soyeux caractéristique. Assurez - vous qu'il ne reste pas de stries jaunes — le mélange doit être d'un jaune canari clair et uniforme.",
      "visualCue": {
        "primaryTarget": "Un liquide uniforme, jaune vif, légèrement épaissi par l'interaction sucre-jaune, sans stries blanches et zeste fin suspendu dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre encore visible comme des grains non dissous au fond du bol. Le jaune blanc n'est pas mélangé.",
            "action": "Encore 30 secondes. Le sucre n'a pas besoin d'être complètement dissous — il se dissout sur la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Lisse, jaune vif, liquide uniforme. Le sucre est principalement dissous. Mélanger le fouet dans une couche mince et uniforme.",
            "action": "Réglez le bol sur le bain-marie et commencez à cuisiner."
          },
          {
            "state": "Overdone",
            "description": "L'acide a commencé à cuire les jaunes prématurément — vous pouvez voir des caillés blancs se former si vous l'avez laissé trop longtemps à température ambiante.",
            "action": "Passer à travers un tamis à mailles fines immédiatement et procéder avec prudence sur la chaleur."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir légèrement glissant entre les doigts à partir de la lécithine de jaune d'œuf — non pas gritte, non aqueuse, mais un gel liquide lisse."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "raw_curd_base"
      ],
      "outputState": "thickened_curd",
      "instructions": "Placez le bol sur un pot d'eau à peine mijotante — le fond du bol ne doit pas toucher l'eau, et l'eau ne doit pas bouillir agressivement. Cette configuration bain-marie n'est pas négociable : la chaleur directe brouillera les jaunes avant qu'ils ne puissent émulsifier. Cuire le caillé, en remuant constamment avec une spatule de silicone ou une cuillère en bois, en atteignant chaque coin du bol. Ne laissez pas le caillé s'asseoir encore 10 secondes — les bords et le fond cuireont plus vite que le centre. Maintenez un mouvement constant et doux. Après 8 à 12 minutes, le caillé s'épaissira sensiblement, passant de mince et liquide à quelque chose qui tient un sentier lorsque vous faites glisser la spatule à travers la surface. Le caillé est fait lorsqu'il recouvre l'arrière d'une cuillère épaissement et qu'un doigt tiré à travers laisse une ligne propre et définie qui ne se remplit pas. Température cible: 75–82°C (167–180°F). Tirez - le dès qu'il nappe la cuillère — la chaleur résiduelle continue à cuire.",
      "visualCue": {
        "primaryTarget": "Le caillé recouvre le dos d'une cuillère propre dans une couche épaisse, opaque et jaune vif. Un doigt tiré à travers laisse un canal net et net qui ne se ferme pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le caillé est encore mince et versable. Il s'échappe de l'arrière de la cuillère comme de l'eau. Le canal se ferme immédiatement lorsque vous tirez votre doigt.",
            "action": "Continuez à cuisiner et à remuer. Elle s'épaissira soudainement — soyez prêts. À ce stade, vous pouvez augmenter légèrement la chaleur, mais ne laissez jamais l'eau bouillir."
          },
          {
            "state": "Perfect",
            "description": "Le caillé est épais et crémeux, il se déplace lentement hors de la spatule. Le canal reste net. La vapeur s'élève mais le caillé ne bulle pas. Jaune pâle et opaque.",
            "action": "Retirer immédiatement du feu et verser le beurre dans un tamis fin."
          },
          {
            "state": "Overdone",
            "description": "La surface montre de minuscules bulles. Le caillé sent l'oeuf plutôt que le citron. Des morceaux brouillés sont visibles.",
            "action": "Plongez immédiatement dans un tamis à mailles fines, en appuyant sur la spatule. Le goût de citron sera toujours là."
          }
        ]
      },
      "feelCue": "La spatule devrait glisser contre le caillé avec une résistance douce — comme en remuant un épais milkshake — et lorsque vous le soulevez, le caillé devrait tomber dans des gouttes lentes et lourdes qui tiennent brièvement leur forme avant de se fusionner."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "thickened_curd",
        "ing_04",
        "ing_06"
      ],
      "outputState": "finished_lemon_curd",
      "instructions": "Retirer le bol du feu et passer immédiatement le caillé chaud à travers un tamis à mailles fines dans un bol propre, ce qui capture tout chalazae (fils blancs) ou morceaux d'oeuf cuits et assure un caillé parfaitement lisse. Ajouter le beurre glacé en cubes au tamis à la fois. La différence de température est intentionnelle : le beurre froid refroidit rapidement le caillé (arrêtant la cuisson) tout en y émulsifiant simultanément. Mélanger doucement avec la spatule, en encourageant chaque cube à fondre et à incorporer. Ajouter la pincée de sel de mer — c'est remarquable ce qu'il fait à la saveur de citron, le faisant passer de la saveur sucrée à quelque chose de plus complexe et vivant. Une fois tout le beurre incorporé et le caillé est brillant et lisse, verser immédiatement dans des pots stérilisés et sceller. Il continuera à épaissir en refroidissant. Réfrigérer pendant quatre semaines.",
      "visualCue": {
        "primaryTarget": "Un caillé profondément lustré, intensément jaune qui est assez épais pour marmonner dans une cuillère mais qui reste suffisamment fluide pour s'aplatir lentement pendant 10 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le caillé est encore mince et coule même après l'ajout du beurre — le beurre a fondu mais n'a pas été émulsifié. Le mélange semble légèrement gras.",
            "action": "Remuer plus vigoureusement. S'il est encore mince après 2 minutes, le caillé est sous-cuisiné — revenez brièvement au bain-marie pour s'épaissir davantage."
          },
          {
            "state": "Perfect",
            "description": "Profondément brillant, épais, coulis qui montent sur une cuillère. La couleur est jaune canari intense. Le beurre est complètement absorbé et la surface a un reflet subtil.",
            "action": "Jar et sceller immédiatement pendant qu'il fait encore chaud."
          },
          {
            "state": "Overdone",
            "description": "Le caillé s'est mis trop ferme dans le bol avant de jarreter — il semble raide et presque jonché.",
            "action": "Chauffer doucement sur le bain-marie en remuant lentement, jusqu'à ce qu'il soit à nouveau liquide, puis jarrer immédiatement."
          }
        ]
      },
      "feelCue": "Une petite goutte sur la lèvre devrait se sentir fraîche à partir du beurre et immédiatement aiguisée avec du citron — la surdité devrait frapper d'abord, puis la douceur, puis une longue finale crémeuse qui enveloppe l'intérieur de votre bouche longtemps après avoir avalé."
    }
  ]
};
