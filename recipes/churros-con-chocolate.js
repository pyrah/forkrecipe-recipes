export default {
  "repoId": "master_spanish_churros_con_chocolate_001",
  "parentRepoId": null,
  "slug": "churros-con-chocolate",
  "author": "ForkRecipe Kitchen",
  "title": "Chocolat Churros con",
  "description": "Crisp, cordes arquées de pâte à choux frite — dorée et brisée sur les crêtes, donnant à l'intérieur — dépoussiérées dans du sucre de cannelle et plongées dans une tasse de chocolat chaud espagnol amer, épais de velours.",
  "cuisine": "Espagnol",
  "culture": "Espagnol",
  "category": "desserts",
  "tags": [
    "végétarien",
    "Espagnol",
    "frits",
    "dessert",
    "chocolat"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "saindoux (traditionnel)",
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Œufs (gros)",
      "ratioValue": 2,
      "defaultUnit": "unit",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "sucre blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Huile végétale pour friture",
      "ratioValue": 1,
      "defaultUnit": "L",
      "substitutions": [
        "huile de tournesol",
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "Lait d'avoine sans lait"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre (pour la sauce au chocolat)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Umami",
      "name": "Chocolat noir 70%, finement haché",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Chips de chocolat doux amer"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "hot_liquid",
      "instructions": "Mélanger l'eau, le beurre et le sel dans une casserole à fond lourd à feu vif. Porter à ébullition complète, en remuant jusqu'à ce que le beurre soit complètement fondu et incorporé. Toute la surface doit être turbulente — aucune lécherette de beurre ne doit flotter sur le dessus. Retirer du feu le moment où il atteint un ébullition complet; un moment de surboulement évapore trop d'eau et jette votre ratio farine.",
      "visualCue": {
        "primaryTarget": "Un liquide homogène à bouillir vigoureusement sans séparation visible du beurre. La vapeur est généreuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre à la surface et le liquide mijote doucement, sans bouillir.",
            "action": "Gardez le feu à haute température et attendez un véritable ébullition avant d'ajouter de la farine."
          },
          {
            "state": "Perfect",
            "description": "Bouillir complètement sur toute la surface, le beurre complètement émulsifié dans l'eau, sans séparation.",
            "action": "Retirer immédiatement du feu et ajouter toute la farine à la fois."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a diminué visiblement; le fond de la casserole est visible à travers une fine couche. La vapeur est excessive.",
            "action": "Ajouter une cuillère à soupe d'eau chaude pour compenser, revenir brièvement à ébullition, puis procéder."
          }
        ]
      },
      "feelCue": "Tenez votre main au - dessus de la poêle — vous devriez sentir une chaleur intense et constante rayonner avant même que le liquide entre en vue."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "ing_04",
        "hot_liquid"
      ],
      "outputState": "panade",
      "instructions": "Mettre toute la farine dans le liquide bouillant. Passer immédiatement à une cuillère en bois rigide ou à une spatule de silicone et remuer vigoureusement, en pressant la pâte sur les côtés de la poêle. Dans les 60 à 90 secondes, le mélange s'éloigne des côtés et forme une seule boule cohésive. Continuer à sécher la pâte à feu moyen pendant encore 2 minutes, en remuant constamment. Cette étape élimine l'excès d'humidité et fait cuire l'amidon afin que la pâte puisse absorber les œufs sans devenir soupeuse.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et mate qui tire proprement loin des murs de la poêle et se rassemble autour de la cuillère. Un film mince et sec se forme sur la base de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est toujours collante et s'accroche à la poêle avec des stries humides. Pas de film sur le fond de la poêle.",
            "action": "Continuer à remuer à feu moyen — la pâte a besoin de plus de temps de séchage avant d'ajouter des œufs."
          },
          {
            "state": "Perfect",
            "description": "Une masse cohésive brillante et matte. Une fine pellicule d'amidon (panada) enveloppe le fond. La toux ne colle pas à la cuillère lorsqu'elle est debout dans la masse.",
            "action": "Transférer dans un bol de mélangeur ou un bol large et refroidir 5 minutes avant d'ajouter des œufs."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est émiettée et grittée, elle s'écroule plutôt que de se tenir ensemble. Sens d'amidon brûlé.",
            "action": "Jeter et recommencer — la panade surséchée produira des churros granuleux."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur votre paume sur la boule de pâte — elle devrait être sèche et presque cireuse, comme une purée ferme, sans transfert d'humidité à votre main."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "panade",
        "ing_05"
      ],
      "outputState": "churro_dough",
      "instructions": "Battre les oeufs un à la fois dans la panade refroidie à l'aide d'un mélangeur à main, d'un mélangeur à pied avec une pagaie ou d'un batteur à main intense avec une cuillère en bois. Après chaque œuf, la pâte aura l'air cassée et glissante — continuez à battre jusqu'à ce qu'elle absorbe complètement avant d'ajouter la suivante. Lorsque les deux œufs sont incorporés, la pâte doit être lisse, brillante et juste assez rigide pour tenir une pipe. Tester en soulevant la cuillère : la pâte doit tomber dans un ruban lent et épais et tenir une forme en V à l'extrémité.",
      "visualCue": {
        "primaryTarget": "Pâte brillante et lisse qui tombe de la cuillère dans un ruban en V lent et lourd, sans éclater ni verser librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est trop raide, elle tombe en morceaux, pas en ruban. La tuyauterie sera difficile et les churros peuvent craquer pendant la friture.",
            "action": "Battre dans un jaune d'œuf supplémentaire ou une cuillère à soupe d'eau pour adoucir la consistance."
          },
          {
            "state": "Perfect",
            "description": "Pipe-able, lisse et brillant. La pâte conserve une forme étoilée lorsqu'elle est conduite et ne s'effondre pas. Les chutes sont un lent, défini comme un V-ribbon.",
            "action": "Remplir un sac de tuyauterie muni d'une grande pointe étoile ouverte (1,5 cm) et chauffer l'huile."
          },
          {
            "state": "Overdone",
            "description": "La toux est trop lâche et coule comme une pâte épaisse; elle ne tiendra pas la forme de l'étoile arquée dans l'huile.",
            "action": "La pâte ne peut pas être épaissie une fois éclaircie; les churros résultants auront encore bon goût mais seront des cordes rondes sans crêtes définies."
          }
        ]
      },
      "feelCue": "La pâte doit résister à la cuillère à chaque battement, puis relâcher avec un brin brillant et satisfaisant, comme une pâte à gâteau très raide."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "churro_dough",
        "ing_08"
      ],
      "outputState": "fried_churros",
      "instructions": "Chauffer l'huile végétale à 175–180°C (350°F) dans une casserole profonde ou un wok – utilisez un thermomètre. Tuyau de 15 à 20 cm de longueur de pâte directement dans l'huile chaude à l'aide de ciseaux ou d'un couteau pour couper chaque corde. Faire frire en petits lots de 3 à 4 sans fouler, en tournant une fois avec des pinces après 2 minutes. Le temps total d'alevage est de 4 à 5 minutes par lot jusqu'à ce qu'il soit profondément doré. La température de l'huile diminuera lorsque vous ajoutez de la pâte; ajuster la chaleur pour maintenir 170°C. Égoutter sur un support en fil, et non sur du papier — le papier piège la vapeur et adoucit la croûte.",
      "visualCue": {
        "primaryTarget": "Des churros riches en or ambré avec des crêtes clairement définies à pointe d'étoiles qui sont plus sombres aux sommets. La surface doit être uniformément colorée, pas tachetée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, presque jaune. Les crêtes sont légèrement colorées mais le corps est encore blond. L'intérieur sera pâteux et gras.",
            "action": "Retourner à l'huile pendant 60 à 90 secondes de chaque côté; l'extérieur doit être en or profond pour que l'intérieur puisse cuire."
          },
          {
            "state": "Perfect",
            "description": "De l'ambre profond. Les crêtes sont plus sombres — presque acajou — et le corps est uniformément doré. Ils étourdissent audiquement et se sentent rigides lorsqu'ils sont tapés de pinces.",
            "action": "Égoutter sur une grille de fils et rouler immédiatement dans du sucre de cannelle tout en coulant chaud."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à brun rougeâtre. Les crêtes sont carbonisées. Des odeurs de pâte brûlée.",
            "action": "Tirez immédiatement; brossez l'extérieur le plus sombre et le goût — si amer à travers, ces morceaux sont perdus, mais l'intérieur peut être récupéré comme morceaux de churro dans la crème glacée."
          }
        ]
      },
      "feelCue": "Un churro parfait sonne creux et se sent rigide lorsqu'il est tapé avec un ongle — le mur aurait dû se mettre dans une coquille croustillante que vous pouvez entendre."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "fried_churros",
        "ing_06",
        "ing_07"
      ],
      "outputState": "cinnamon_churros",
      "instructions": "Mélanger le sucre de la roulette et la cannelle moulue dans un grand bol peu profond — environ 10 parties de sucre à une partie de cannelle. Rouler chaque churro chaud dans le mélange immédiatement après égouttage, tourner pour enrober chaque crête. L'huile résiduelle agit comme un liant; si le sucre glisse, le churro a trop refroidi. Travaillez vite. Disposer sur une assiette sans empiler pour préserver la croûte.",
      "visualCue": {
        "primaryTarget": "Chaque crête et rainure est recouverte de sucre de cannelle pétillant. Le churro brille sous la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'est que d'un côté ou glisse dans des endroits. Plaquettes de pâte non couchée visibles.",
            "action": "Reroulez tout en restant chaud, appuyez doucement pour aider le sucre à adhérer."
          },
          {
            "state": "Perfect",
            "description": "Revêtement complet et uniforme du sucre de cannelle mousseux sur toutes les surfaces. La croûte reste croquante. Vous pouvez entendre une légère crise quand le churro fléchit.",
            "action": "Servir immédiatement avec le chocolat chaud."
          },
          {
            "state": "Overdone",
            "description": "Le sucre a formé une croûte épaisse et cloie qui obscurcit les crêtes; goût amer de sucre brûlé si le sucre a frappé l'huile chaude.",
            "action": "Rien à faire une fois sursugaré — il suffit de noter la proportion pour la prochaine fois et servir comme-est."
          }
        ]
      },
      "feelCue": "Roulez le churro entre vos doigts dans le bol à sucre — les crêtes devraient attraper les cristaux comme un lime, donnant un doux frêle gris."
    },
    {
      "nodeId": "step_6",
      "action": "Mijoter",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "chocolate_sauce",
      "instructions": "Frottez la fécule de maïs dans environ 50 ml du lait froid jusqu'à ce qu'elle soit complètement dissoute — pas de grumeaux. Verser le reste du lait et du sucre dans une petite casserole à feu moyen et chauffer jusqu'à ce qu'il soit cuit à la vapeur. Ajouter la fécule de maïs dissoute en fouettant constamment. Lorsque le mélange commence à vapeur et à épaissir, réduire la chaleur à faible et ajouter le chocolat noir finement haché tout à la fois. Incorporer lentement jusqu'à ce que le chocolat fonde complètement et que la sauce recouvre l'arrière d'une cuillère, ce qui est censé être beaucoup plus épais que le cacao chaud. Il devrait bomber légèrement lorsqu'il est tombé d'une cuillère.",
      "visualCue": {
        "primaryTarget": "Une sauce brun foncé brillant qui enveloppe la cuillère d'une couche épaisse et opaque et tombe dans des rubans lents. Il devrait être assez épais qu'une cuillère traînée à travers tient une ligne pendant 2 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et runny, comme du lait au chocolat. La cuillère ne laisse aucun revêtement transparent.",
            "action": "Continuer la cuisson à feu doux, en remuant constamment, jusqu'à ce que la sauce s'épaississe jusqu'à l'étape du ruban — généralement encore 3 à 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Couchez la cuillère. Un doigt tiré dans le dos laisse une ligne propre qui tient. Brun profond, pas noir, avec un éclat brillant.",
            "action": "Verser dans des tasses de service immédiatement et garder au chaud."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été saisie dans une pâte granuleuse et rigide. Des lumps de chocolat ont brûlé sur le fond.",
            "action": "fouetter dans une cuillère à soupe de lait chaud de la chaleur pour se détendre; si granuleux, filtrer à travers un tamis fin."
          }
        ]
      },
      "feelCue": "Plongez une cuillère à café et laissez le chocolat retomber dans la poêle — il devrait tomber dans des feuilles épaisses et fondues, et non dans des gouttes ou des ruisseaux."
    }
  ]
};
