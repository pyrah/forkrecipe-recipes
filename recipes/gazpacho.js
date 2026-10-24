export default {
  "repoId": "master_spanish_gazpacho_001",
  "parentRepoId": null,
  "slug": "gazpacho",
  "author": "ForkRecipe Kitchen",
  "title": "Gazpacho Andaluz",
  "description": "La légendaire soupe de tomates crues réfrigérée d'Andalousie — tomates de haute saison mélangées avec du pain, du concombre, du poivre, du vinaigre de sherry et de l'huile d'olive dans une soupe soyeuse et froide qui verse comme du velours.",
  "cuisine": "Espagnol",
  "culture": "Andalous",
  "category": "vegetables",
  "tags": [
    "Espagnol",
    "et andalous",
    "tomates",
    "Soupe froide",
    "végétalien",
    "rafraîchissant",
    "été"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tomates à la prune, décortiquées et hachées approximativement",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "tomates mûries de vigne",
        "tomates héritières"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Concombre, pelé et ensemencé",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "Concombre anglais"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "poivron vert, ensemencé et haché grossièrement",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": [
        "Poivre à frire italien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Pain blanc, croûtes enlevées",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "baguette d'un jour"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de sherry (vinagre de Jerez)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "vinaigre de vin rouge",
        "vinaigre blanc vieilli"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, plus plus à finir",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire tremper le pain",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_09"
      ],
      "outputState": "soaked_bread",
      "instructions": "Appliquez le pain en morceaux et placez-le dans un petit bol. Verser le vinaigre de sherry dessus, puis ajouter suffisamment d'eau glacée pour ne pas plonger le pain. Appuyez dessus sous le liquide et laissez tremper pendant 10 minutes. Le pain gonflera, absorbera le vinaigre et ramollira dans une pâte. Ce pré-soak assure que le vinaigre est uniformément distribué dans toute la soupe plutôt que de s'asseoir sur le dessus, et donne au pain le temps d'hydrater de sorte qu'il émulsifie proprement dans la base mélangée. Pressez doucement le pain trempé avant d'ajouter au mélangeur — vous voulez saturé, pas arrosé.",
      "visualCue": {
        "primaryTarget": "Les morceaux de pain sont gonflés, uniformément pâles et humides tout au long, sans miettes blanches sèches qui restent au centre, et le liquide environnant est devenu légèrement rose du contact avec la tomate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain est encore ferme au cœur avec un intérieur blanc et sec — il se mélangera comme des grumeaux plutôt que de s'intégrer en douceur.",
            "action": "Appuyez sur le pain sous le liquide et attendez encore 5 minutes. Le pain doit être complètement saturé avant le mélange."
          },
          {
            "state": "Perfect",
            "description": "Le pain est oreiller, adouci uniformément et s'effondre facilement lorsqu'il est pressé. Il sent le vinaigre et peu de blé.",
            "action": "Éteignez l'excès d'eau et ajoutez directement au mélangeur avec les légumes."
          },
          {
            "state": "Overdone",
            "description": "Le pain s'est dissous dans le liquide, devenant un lisier mince et pâle, sans structure restante.",
            "action": "Cela est encore utilisable — le pain dissous sera encore émulsifiant, bien que la soupe puisse être légèrement plus mince. Procéder au mélange."
          }
        ]
      },
      "feelCue": "Pressez un morceau entre les doigts – il devrait se sentir comme une éponge humide, donnant complètement sans cœur résistant. Le liquide parfumé au vinaigre doit s'écouler librement lorsqu'il est pressé."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_07",
        "ing_08",
        "soaked_bread"
      ],
      "outputState": "rough_gazpacho",
      "instructions": "Mélanger les tomates hachées, le concombre, le poivron et l'ail dans un mélangeur à grande vitesse avec le pain trempé pressé, l'huile d'olive et le sel. Mélanger à haute intensité pendant 90 secondes — les tomates vont éclater dans un liquide rouge-orange vif mousseux. Goûtez et ajustez le sel. Le mélange initial sera chaud du frottement moteur et peut sembler légèrement granuleux ou mousseux. C'est normal. Le mouvement clé ici est de mélanger l'huile d'olive directement avec les légumes afin qu'il émulsifie dans la teneur en eau naturelle de la tomate — versez-le pendant que le mélangeur fonctionne si votre machine le permet, ce qui crée une émulsion plus lisse.",
      "visualCue": {
        "primaryTarget": "Un liquide vif, mousseux, rouge-orange qui sent intensément la tomate crue, l'ail et l'huile d'olive — l'arôme devrait remplir la cuisine de quelque chose entre une salade et un jardin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est ample et hétérogène, avec des morceaux visibles de peau de tomate et de poivre. Le mélangeur sonne travaillé et le mélange ne tire pas vers le centre.",
            "action": "Mélanger encore 60 secondes en hauteur. Si la machine est en difficulté, ajoutez une éclaboussure d'eau plus froide pour desserrer le mélange."
          },
          {
            "state": "Perfect",
            "description": "Un liquide lisse, uniforme, de couleur profonde avec de la mousse rose fine sur le dessus. Le parfum d'ail est présent, mais pas aiguisé, il s'est membré dans la tomate.",
            "action": "Procéder directement à la déformation pendant que le mélangeur est encore froid."
          },
          {
            "state": "Overdone",
            "description": "Mélangeé si longtemps que le mélange est chaud au toucher et l'huile d'olive a commencé à se briser, tournant le liquide gras et un peu amer.",
            "action": "Refroidir immédiatement sur un bain de glace. L'émulsion peut se rétablir partiellement à mesure qu'elle se refroidit; la perte de saveur due à la chaleur est en grande partie irréversible, donc mélanger les futurs lots dans des rafales plus courtes."
          }
        ]
      },
      "feelCue": "Plongez un doigt — le liquide doit se sentir légèrement glissant à partir de l'huile d'olive émulsifiée, et non aqueux. Frottez-le sur votre paume; il devrait laisser un éclat léger et brillant."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "rough_gazpacho"
      ],
      "outputState": "strained_gazpacho",
      "instructions": "Mettre une souche fine sur un grand bol et verser la soupe mélangée dans des lots. Utilisez une louche ou une spatule souple pour presser les solides et extraire chaque goutte de liquide — les peaux de tomate et les fibres qui restent dans la souche sont ce qui ferait la soupe finale grainée. Tricoter le dos de la louche en mouvements circulaires contre la maille. Jeter les solides pressés. La soupe tendue sera nettement plus propre, un rubis-orange profond et plus soyeuse qu'avant. Goûtez encore et ajustez le sel et le vinaigre.",
      "visualCue": {
        "primaryTarget": "Le liquide passant par la passoire est un rubis-orange clair, avec un corps uniforme et velouté — aucun fragment visible de peau de tomate ou de fibre dans le bol ci-dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe dans le bol semble encore rugueuse et granuleuse, avec de la mousse orange et des morceaux de poivre ou de peau visibles à la surface.",
            "action": "Passez une seconde fois à travers le filtre, pressez plus fermement la pulpe résiduelle."
          },
          {
            "state": "Perfect",
            "description": "Un liquide soyeux, propre, de couleur profonde avec une fine, même éclat. Une petite quantité de mousse sur le dessus est bonne — elle se déposera pendant le refroidissement.",
            "action": "Couvrir le bol et réfrigérer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Surpression, forçant l'huile de graine amère et la fibre sèche à travers le filet, rendant la soupe goût légèrement dure.",
            "action": "Rien à corriger à ce stade, mais à l'avenir les lots cessent de presser lorsque la résistance devient très raide."
          }
        ]
      },
      "feelCue": "Tenez une cuillère à la lumière — elle devrait avoir la translucidité de l'eau de tomate, ni opaque comme du jus, ni trouble comme un smoothie. Faites pivoter la cuillère; elle devrait enrober la cuillère dans un film mince, même."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer",
      "inputs": [
        "strained_gazpacho"
      ],
      "outputState": "chilled_gazpacho",
      "instructions": "Couvrir soigneusement le bol et réfrigérer pendant au moins 2 heures, de préférence 3. Le refroidissement n'est pas facultatif — le gazpacho est un plat fondamentalement froid et les saveurs ne s'intègrent pas avant le froid. Alors qu'il refroidit, l'émulsion d'huile d'olive se serrera, l'acide se moellera, et l'ail perdra sa netteté brute et fera partie de l'ensemble harmonique. Avant de servir, goûtez encore : le froid supprime la perception du sel, donc vous aurez presque certainement besoin d'une touche plus de sel et de vinaigre à ce stade. Servir dans des bols réfrigérés avec un fil d'huile d'olive, quelques gouttes de vinaigre de sherry supplémentaire, et en option des dés de concombre ou des herbes hachées sur le dessus.",
      "visualCue": {
        "primaryTarget": "La soupe s'est approfondie jusqu'à un riche, froid, rouge profond, sans mousse restante, un corps soyeux uniforme, et un léger reflet d'huile d'olive à la surface. Ça sent la tomate froide et l'été.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours à température ambiante ou juste légèrement frais — les saveurs sont crues et séparées, et l'huile d'olive flotte plutôt que de s'intégrer.",
            "action": "Retourner au réfrigérateur. La soupe a vraiment besoin de 2 heures minimum à la température du réfrigérateur pour être son meilleur soi."
          },
          {
            "state": "Perfect",
            "description": "Ice-froid partout, profondément aromatisé, équilibré entre la tomate douce, l'acide vif et l'huile d'olive herbacée. L'ail est présent mais pas tranchant.",
            "action": "Ajuster le sel et le vinaigre de sherry, puis servir immédiatement dans des bols froids."
          },
          {
            "state": "Overdone",
            "description": "Laisser au réfrigérateur plus de 24 heures; l'ail s'est aiguisé et le pain a rendu la soupe légèrement collante.",
            "action": "Peau encore une fois si collante. Un éclaboussure de vinaigre de sherry et une goutte d'huile d'olive peuvent raviver un lot légèrement sur-reposé."
          }
        ]
      },
      "feelCue": "La soupe finie doit verser comme de la crème froide — plus lourd que l'eau, avec une légère viscosité de l'huile émulsifiée et du pain. Il devrait frapper l'arrière de la gorge avec froid d'abord, puis une vague d'acide, puis le corps de tomate douce. Rien ne doit goûter cru ou tranchant."
    }
  ]
};
