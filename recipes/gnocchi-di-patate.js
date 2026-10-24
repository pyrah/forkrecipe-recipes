export default {
  "repoId": "master_italian_gnocchi-di-patate_001",
  "parentRepoId": null,
  "slug": "gnocchi-di-patate",
  "author": "ForkRecipe Kitchen",
  "title": "Gnocchi di Patate",
  "description": "Des boulettes de pommes de terre dorées de la Vénétie — des pommes de terre féculentes cuites au four, riées alors qu'elles étaient encore chaudes et travaillées avec juste assez de farine pour tenir ensemble, façonnées en coussins arqués qui font cuire en quelques secondes et se dissolvent sur la langue.",
  "cuisine": "Italien",
  "culture": "Vénétie",
  "category": "grains",
  "tags": [
    "Italien",
    "Vénétie",
    "pommes de terre",
    "gnocchi",
    "fait maison",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre floues (Russet ou King Edward), non pelées",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Désirée (légèrement moins féculente — acceptable)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine plate (toute utilisation ou 00), plus poudre",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "farine de semoule (ajoute une agréable graisse)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Grand jaune d'œuf",
      "ratioValue": 1,
      "defaultUnit": "yolk",
      "substitutions": [
        "oeuf entier (rendre les gnocchi légèrement plus denses)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Râpé fin Parmigiano-Reggiano (enrichissement facultatif)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé et feuilles de sauge fraîches, pour servir",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "beurre brun",
        "pesto",
        "sauce tomate"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire",
      "inputs": [
        "ing_01"
      ],
      "outputState": "baked_dry_potatoes",
      "instructions": "Préchauffer le four à 200 C (400 F). Piquez chaque pomme de terre plusieurs fois avec une fourchette et faites cuire directement sur la grille du four pendant 50 à 60 minutes jusqu'à ce qu'elle soit complètement tendre et que les peaux aient séché et croustillé. Ce n'est pas négociable : faire cuire les pommes de terre plutôt que les faire bouillir les maintient au sec. Les pommes de terre bouillies absorbent l'eau, et les pommes de terre chargées d'eau nécessitent plus de farine pour se lier, rendant les gnocchi denses et durs. L'objectif est l'intérieur de la pomme de terre la plus sèche et la plus flufiante possible.",
      "visualCue": {
        "primaryTarget": "Les pommes de terre sont légèrement effondrées, avec des peaux ridées, sèches et papiers. Lorsqu'il est percé avec une brochette mince, il glisse à travers toute la pomme de terre avec une résistance zéro sous n'importe quel angle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pomme de terre résiste à la brochette au centre. La peau est encore lisse et ramollie. La chair, lorsqu'elle est brisée, est dense et légèrement translucide.",
            "action": "Retourner au four encore 10-15 minutes. La pomme de terre non cuite rend le gnocchi de plomb dense."
          },
          {
            "state": "Perfect",
            "description": "Peau ridée, effondrée. Une brochette ne rencontre aucune résistance à l'intérieur. Lorsqu'il est cassé, l'intérieur est complètement sec, flocé et farineux — il devrait ressembler à une dérive fraîche.",
            "action": "Riz les pommes de terre immédiatement, alors qu'elles sont encore chaudes."
          },
          {
            "state": "Overdone",
            "description": "Les peaux de pommes de terre sont brûlées, et la chair directement sous la peau est sombre et sèche.",
            "action": "Couper la couche extérieure sombre et n'utiliser que l'intérieur non endommagé. Le gnocchi ira bien."
          }
        ]
      },
      "feelCue": "Presser une pomme de terre cuite à travers une serviette à thé — elle devrait donner immédiatement et s'effondrer complètement sans résistance, comme serrer le sable sec dans un chiffon. Toute fermeté au centre nécessite plus de temps au four."
    },
    {
      "nodeId": "step_2",
      "action": "Riz et sec",
      "inputs": [
        "baked_dry_potatoes"
      ],
      "outputState": "riced_potato",
      "instructions": "Travaillant le plus rapidement possible, réduire de moitié les pommes de terre chaudes et les croquer ou les presser à travers un rizier de pomme de terre directement sur une grande surface de travail propre ou dans un grand bol peu profond — jamais un robot culinaire, un mélangeur ou un mélangeur électrique, qui tous développent l'amidon en colle. Les pommes de terre doivent être riées pendant qu'elles sont brûlantes : la chaleur entraîne la vapeur au moment où elles tombent et les sèchent davantage. Répartir la pomme de terre rizisée dans une fine couche et la laisser sécher à la vapeur pendant 3-4 minutes. Vous devriez voir de la vapeur monter de la pile. Plus l'humidité s'échappe, moins vous aurez besoin de farine.",
      "visualCue": {
        "primaryTarget": "Un tas de pommes de terre enneigées et légèrement riées, à la vapeur qui s'élève. Chaque brin est distinct, sec et aéré — la pile ressemble à du parmesan râpé plutôt qu'à de la purée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pomme de terre était rizisée alors qu'elle était à peine chaude — aucune vapeur visible ne s'élevant, et les brins sont entassés et légèrement tachés. L'humidité est piégée à l'intérieur.",
            "action": "Répartir dans une couche plus mince et laisser reposer encore quelques minutes. Chauffer légèrement la surface si possible."
          },
          {
            "state": "Perfect",
            "description": "Steaming, neigeux, brins complètement individuels. La pile est légère et sèche, pas dense. Lorsque vous passez vos doigts à travers elle, les brins se séparent sans accroupir.",
            "action": "Procédez immédiatement au mélange tout en restant chaud — la pomme de terre froide rizée devient collante."
          },
          {
            "state": "Overdone",
            "description": "La pomme de terre rizisée il y a trop longtemps et a complètement refroidi et séché à une croûte dure à l'extérieur. Sticky et dense.",
            "action": "Brèvement chaud dans le micro-ondes en 30 secondes éclats, puis procéder, mais le gnocchi aura besoin un peu moins de farine."
          }
        ]
      },
      "feelCue": "Passez vos doigts propres à travers la pile de pommes de terre rizées — chaque brin doit se sentir léger et séparé, tombant les uns des autres comme du sable sec. Tous les signaux d'accroupissement ou de collance ont piégé l'humidité. La pile doit être chaude mais pas mouillée contre votre paume."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "riced_potato",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "gnocchi_dough",
      "instructions": "Faites un puits au centre de la patate chaude rizée. Ajouter le sel, le jaune d'œuf et le Parmigiano-Reggiano si vous l'utilisez. Ajouter environ les deux tiers de la farine. À l'aide d'un racleur de banc ou de vos mains, incorporer tout avec le toucher le plus léger possible — un mouvement de coupe et de pliage, jamais un mouvement de pétrissage. Ajouter de la farine en petits incréments à partir du tiers restant seulement si nécessaire pour que la pâte se tienne à peine ensemble. Moins de farine est toujours mieux : la pâte finie doit avoir l'air rugueuse et à peine cohésive, pas lisse et élastique. Une pâte de gnocchi lisse a été surmenée et produira des boulettes denses et mâcheuses. Arrêtez de mélanger le moment où la pâte tient ensemble sans s'effondrer.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse, légèrement chassante, qui tient debout lorsqu'elle est pressée mais qui semble loin d'être lisse. La surface est inégale et farineuse. Il ne ressort pas quand il est poché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux s'écroule lorsqu'elle est pressée et ne tient pas une forme. Trop sec ou trop peu d'œuf.",
            "action": "Ajouter progressivement le reste de la farine avec un peu plus de jaune d'œuf, un ajout à la fois. À peine travailler dedans."
          },
          {
            "state": "Perfect",
            "description": "Dough tient ensemble quand pressé mais semble rugueux et à peine mélangé. Une pièce pincée tient sa forme sans s'effondrer. Sensation de douceur, d'oreiller et de non-springy.",
            "action": "Formez immédiatement le gnocchi — ne reposez pas cette pâte."
          },
          {
            "state": "Overdone",
            "description": "La toux est lisse et élastique et ressort lorsqu'elle est cuite. Il a été trop mélangé, développant du gluten de pomme de terre et activant l'excès d'amidon.",
            "action": "Procéder à la mise en forme, mais les gnocchi seront plus denses et mâcheurs que l'idéal. Il n'y a pas de récupération du surmélange."
          }
        ]
      },
      "feelCue": "Pincez un morceau de pâte et roulez-le entre vos paumes: il devrait former une boule lisse et tenir sans craquer, mais devrait se sentir doux et légèrement céder — presque comme un nuage ferme. S'il ressort contre vos paumes, vous l'avez trop travaillé."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "gnocchi_dough"
      ],
      "outputState": "shaped_gnocchi",
      "instructions": "Prosternez votre surface de travail légèrement. Divisez la pâte en 6–8 portions et roulez chacune dans une corde d'environ 2 cm de diamètre — utilisez une touche légère et sans pression. Couper chaque corde en morceaux de 2 cm. Pour former : tenir une fourchette dans une main, les dents orientées vers le bas. Appuyez sur un morceau de gnocchi contre les dents avec votre pouce et roulez-le vers le bas et hors de la fourche en un mouvement lisse, créant la coquille à crête classique. La crête n'est pas décorative, elle augmente considérablement la surface de la sauce. Alternativement, appuyez légèrement avec votre pouce pour créer un creux. Placer le gnocchi en forme sur un plateau fariné en une seule couche sans toucher.",
      "visualCue": {
        "primaryTarget": "Petits oreillers ovales d'environ 2 cm de long avec des crêtes distinctes d'un côté et un léger creux concave de l'autre de la pression du pouce. Ils s'assoient sur le plateau de farine sans coller ni aplatir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les gnocchis sont rugueux, déchirés, ou mal déchiquetés — ils se sont effondrés pendant le laminage ou la coupe, ce qui suggère que la pâte est trop sèche.",
            "action": "Ajouter encore un petit ajout de jaune d'œuf et de farine, en travaillant au minimum. Des formes très rugueuses feront encore cuire et goûteront bien."
          },
          {
            "state": "Perfect",
            "description": "Même des oreillers avec des crêtes claires. Ils tiennent leur forme sur le plateau sans s'étendre. La surface est légèrement farinée et sèche au toucher.",
            "action": "Cuire immédiatement dans de l'eau bouillante salée ou congeler sur le plateau avant de le transférer dans un sac."
          },
          {
            "state": "Overdone",
            "description": "Les gnocchi ont été trop manipulés et sont chauds et collants, commençant à se coller l'un à l'autre et au plateau.",
            "action": "Réfrigérer pendant 15 minutes pour les raffermir avant la cuisson. Travaillez plus rapidement sur les portions restantes."
          }
        ]
      },
      "feelCue": "Prenez un gnocco en forme et appuyez - le doucement — il devrait se sentir ferme mais coussiné, comme un petit coussin rempli, pas dur ou caoutchouteux. Replacez-le sur le plateau : il doit tenir sa forme exactement et non s'effondrer ou aplatir."
    },
    {
      "nodeId": "step_5",
      "action": "Pochette",
      "inputs": [
        "shaped_gnocchi",
        "ing_06"
      ],
      "outputState": "finished_gnocchi",
      "instructions": "Portez un grand pot d'eau généreusement salée à ébullition. Cuire les gnocchi en lots — ne jamais fouler le pot, qui baisse la température et les fait coller ensemble. Baissez-les doucement. Ils couleront, puis monteront à la surface pendant qu'ils cuisineront. Attendez exactement 30 secondes après qu'ils se lèvent avant de retirer — ce bref délai supplémentaire permet de régler entièrement l'intérieur. Poissonr avec une araignée ou une cuillère à fentes, les laisser égoutter brièvement. Pendant ce temps, faire fondre le beurre dans une grande casserole avec les feuilles de sauge jusqu'à ce que le beurre commence à tourner noisette-or (beurre noisette). Mettre le gnocchi dans le beurre brun pendant 30 secondes jusqu'à ce qu'il soit enduit et très légèrement cuit. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Plump, gnocchi brillant flottant à la surface de l'eau, juste émergeant. Dans la poêle, leurs surfaces sont embrassées avec l'or le plus pâle du beurre brun et elles brillent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les gnocchi sont toujours au fond du pot ou viennent de se lever et ont été enlevés immédiatement. L'intérieur est dense et froid au centre.",
            "action": "Attendez la pleine 30 secondes après qu'ils se soient retirés. Le flotteur n'est pas le signal — les 30 secondes d'attente après le flotteur."
          },
          {
            "state": "Perfect",
            "description": "Les surfaces sont lisses et brillantes. Ils tiennent leur forme lorsqu'ils sont manipulés doucement avec une cuillère. Dans le beurre, ils prennent la couleur dorée la plus légère sans croquant. Sur la langue, ils se dissolvent presque instantanément.",
            "action": "Assiette immédiatement — gnocchi coller ensemble dans les minutes qui suivent la sortie du feu."
          },
          {
            "state": "Overdone",
            "description": "Les gnocchi ont cuit trop longtemps — ils sont gonflés et tombent dans l'eau, leurs surfaces se désintègrent.",
            "action": "Supprimer immédiatement. Servir rapidement et doucement; ils peuvent encore avoir bon goût même s'ils sont visuellement compromis."
          }
        ]
      },
      "feelCue": "Prenez un gnocco entre deux doigts et appuyez très doucement — il devrait avoir l'impression de presser un oreiller ferme, donnant légèrement sur les côtés sans s'effondrer. Sur la langue, il devrait se dissoudre en douceur de pomme de terre oreiller dans deux mâches, laissant seulement un murmure de pomme de terre et de beurre de sauge."
    }
  ]
};
