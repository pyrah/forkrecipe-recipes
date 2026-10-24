export default {
  "repoId": "master_japanese_chawanmushi_001",
  "parentRepoId": null,
  "slug": "chawanmushi",
  "author": "ForkRecipe Kitchen",
  "title": "Chawanmushi",
  "description": "Coutard d'œufs à la vapeur soyeux japonais serti d'ichiban dashi — si délicat qu'il tient à peine sa forme, tremblant quand la tasse est inclinée, remplie de crevettes et de mitsuba.",
  "cuisine": "Japonais",
  "culture": "Kyoto",
  "category": "eggs",
  "tags": [
    "Japonais",
    "œuf",
    "vapeur",
    "Dashi",
    "élégant"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
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
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs (large, température ambiante)",
      "ratioValue": 3,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Ichiban dashi (chaud, pas chaud)",
      "ratioValue": 1.5,
      "defaultUnit": "cups",
      "substitutions": [
        "kombu dashi (vegan)",
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce soja (légère, préférée des usukuchis)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Crevettes crues (peautées, dépeintes, queue sur)",
      "ratioValue": 6,
      "defaultUnit": "pieces",
      "substitutions": [
        "tranches de pétoncle",
        "poitrine de poulet, fines bandes"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Kamaboko (gâteau de poisson), tranché",
      "ratioValue": 4,
      "defaultUnit": "slices",
      "substitutions": [
        "casquettes de champignons shiitake"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Mitsuba ( persil japonais) ou trèfle, feuilles",
      "ratioValue": 6,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Feuilles de cresson",
        "Persil à feuilles plates",
        "Cerveau"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange d'oeufs de battre et de souche",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "strained_egg_dashi",
      "instructions": "Battre les œufs doucement avec des baguettes ou une fourchette dans un mouvement de coupe et de coupe — ne pas fouetter vigoureusement. Le but est de briser les jaunes et de mélanger les blancs et les jaunes dans un mélange uniforme sans incorporer d'air, ce qui créerait des bulles dans la crème vapeur. Dans un bol ou un pot séparé, mélanger le dashi chaud, la sauce soja, le mirin et le sel et mélanger. Versez le dashi assaisonné dans les œufs battus progressivement, en remuant doucement pendant que vous versez. Le rapport dashi-to-egg d'environ 2,5:1 par volume est ce qui produit la consistance tremblante à peine fixée — plus d'œuf et la crème devient ferme; moins et il ne sera pas réglé. Placer le mélange entier à travers un tamis à mailles fines dans une cruche à verser, presser le chalazae à l'aide d'une cuillère, puis filtrer une fois de plus à travers la nappe si possible pour un résultat impeccablement lisse.",
      "visualCue": {
        "primaryTarget": "Un liquide parfaitement lisse, doré pâle, sans bulles visibles, sans stries blanches et sans mousse, uniforme de haut en bas lorsque la cruche est légèrement tourbillonnée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange a des stries blanches visibles d'albumen non mélangé, des cristaux de sel non dissous sont visibles, et la surface est mousseuse avec des bulles d'air.",
            "action": "Enfilez à nouveau à travers un tamis fin et pop toutes les bulles restantes avec une serviette en papier pressé doucement à la surface. Les bulles dans le mélange deviennent des trous dans la crème."
          },
          {
            "state": "Perfect",
            "description": "Doux, chatoyant, or uniformément pâle. Elle coule silencieusement d'une cuillère dans une fine feuille uniforme. Pas de mousse, pas de stries, pas de particules.",
            "action": "Verser dans les tasses préparées immédiatement et procéder. Ne laissez pas le mélange reposer longtemps, car les protéines d'oeufs commenceront à coaguler au fond."
          },
          {
            "state": "Overdone",
            "description": "Le mélange d'oeufs a été laissé debout et une fine couche légèrement coagulée s'est formée au fond du pot.",
            "action": "Mélanger délicatement pour réintégrer et resserrer une fois de plus avant de verser dans des tasses. Verser les tasses immédiatement après."
          }
        ]
      },
      "feelCue": "Frottez une goutte du mélange tendu entre vos doigts : vous devriez sentir une douceur absolue, comme de la crème froide. Toute graine est assaisonnement non dissout; toute corde à cordes est un cordon d'oeufs non entraîné. Les deux vont écraser la crème finie."
    },
    {
      "nodeId": "step_2",
      "action": "Préparer les garnitures et les tasses",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "loaded_cups",
      "instructions": "Divisez les crevettes et les tranches de kamaboko uniformément parmi 4 tasses de chawanmushi (ou tout autre tasse ou ramequins résistants à la chaleur avec couvercles). Arrangez-les avec un certain soin — dans le service traditionnel, la crevette s'enroule attrayantement contre le mur de la tasse où ils peuvent être vus à travers la crème une fois qu'il se met, agissant comme un indicateur visuel de qualité. Si vous utilisez shiitake, placez-les côté culot vers le bas. Laisser de l'espace en haut — remplir les tasses jusqu'à 80% de capacité, car la crème a besoin d'espace pour mettre sans toucher le couvercle. N'ajoutez pas encore la mitsuba, elle continuera juste avant de servir.",
      "visualCue": {
        "primaryTarget": "Coupes avec les garnitures disposées dans un motif attrayant, non encombré, ne remplissant pas plus d'un tiers de la hauteur de la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les garnitures sont crues et non préparées: crevettes encore non dévêtues, shiitake impures, ajoutées dans un tas désordonné plutôt que disposées.",
            "action": "Chawanmushi est un plat élégant, la présentation des matières de remplissage. Arrangez-vous bien; la crème se place autour du remplissage comme une fenêtre transparente dans l'intérieur de la tasse."
          },
          {
            "state": "Perfect",
            "description": "Deux à trois articles par tasse, disposés intentionnellement, avec les crevettes bien courbées et le kamaboko placé plat. Les tasses ont l'air d'avoir été mises en scène avant l'entrée de la crème.",
            "action": "Verser lentement le mélange d'oeufs sur les garnitures, idéalement à travers le dos d'une cuillère pour minimiser les perturbations et les bulles."
          },
          {
            "state": "Overdone",
            "description": "Les tasses sont remplies de garnitures, laissant peu de place à la crème – le set chawanmushi se remplira principalement de fines veines de crème plutôt qu'un plat unifié et délicat.",
            "action": "Enlevez un peu de remplissage. Les garnitures devraient mettre l'accent sur la crème, et non sur la foule."
          }
        ]
      },
      "feelCue": "Tenez une tasse vide dans votre paume et sentez son poids — les tasses de chawanmushi sont intentionnellement légères. Le remplissage à l'intérieur ne devrait pas faire la tasse se sentir devant-lourd quand incliné. Une tasse bien chargée se sent équilibrée, pas très lourde."
    },
    {
      "nodeId": "step_3",
      "action": "Verser et vapeur",
      "inputs": [
        "strained_egg_dashi",
        "loaded_cups"
      ],
      "outputState": "steamed_chawanmushi",
      "instructions": "Verser lentement le mélange d'oeufs tendus dans chaque tasse sur l'arrière d'une cuillère pour éviter de perturber les garnitures ou de créer des bulles. Remplir à environ 1 cm sous la jante. Essuyez toutes les bulles de la surface avec une serviette en papier ou le bord d'une cuillère — toute bulle de la surface laissera un cratère quand il éclatera pendant la vapeur. Couvrir chaque tasse de son couvercle (ou feuille enveloppée). Placer dans un vapeur de bambou ou dans une casserole avec une grille à vapeur. Steam à feu moyen-doux — pas un ébullition, juste une vapeur douce et régulière. Un ébullition violent fera cuire la crème trop vite aux bords, créant une texture piquée et spongieuse appelée 'su' (trous). Steam pendant 12-15 minutes. Vérifiez à 12 minutes: la crème doit trembler en une seule unité lorsqu'elle est légèrement secouée, le centre étant à peine réglé.",
      "visualCue": {
        "primaryTarget": "Une surface lisse et dorée en ivoire pâle sur la crème, sans trous de surface ni bulles, et un tremblement uniforme et à peine fixé lorsque la coupe est légèrement déplacée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Custard est encore liquide au centre — les vagues se déplacent indépendamment à la surface lorsqu'elles sont agitées, et une brochette insérée au centre sort enrobée d'œuf liquide.",
            "action": "Récupérer et vapeur pendant 3 minutes. Vérifiez encore avec le test de tremblement. Le sursaut est un résultat pire que le court délai supplémentaire."
          },
          {
            "state": "Perfect",
            "description": "La surface est lisse et ivoire, tremblant comme une seule masse lorsqu'elle est inclinée — non pas des vagues, mais un seul wobble unifié, comme la gelée froide ferme. Une brochette insérée sort propre ou avec une petite quantité de liquide transparent.",
            "action": "Retirer immédiatement du vapeur. Réglez plus longtemps et la texture soyeuse disparaît. La chaleur résiduelle dans la tasse continuera de placer le centre."
          },
          {
            "state": "Overdone",
            "description": "La surface a des piqûres visibles et des trous (su), la crème s'est retirée des côtés de la coupe, et la texture est granuleuse et légèrement caoutchouteuse — elle a été trop cuite et les protéines ont été trop serrées.",
            "action": "Rien à restaurer. Servir généreusement garni pour déguiser le pitting. La prochaine fois : baissez la température de la vapeur et vérifiez plus tôt."
          }
        ]
      },
      "feelCue": "Maintenez la coupe stable dans votre paume et donnez-lui un quart de tour ferme et arrêtez - vous voulez que la crème tremble et se dépose immédiatement, comme une boule de neige après avoir agité. Si elle s'efface liquidement, il lui faut plus de temps. Si elle bouge à peine, elle est trop cuite."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir et servir",
      "inputs": [
        "steamed_chawanmushi",
        "ing_08"
      ],
      "outputState": "finished_chawanmushi",
      "instructions": "Enlevez les tasses du vapeur et laissez-les reposer pendant 2 minutes — la crème ferme le dernier degré de réglage de la chaleur résiduelle. Enlevez les couvercles et ajoutez 1–2 brins mitsuba à chaque tasse, pressez doucement les tiges dans la surface crème afin qu'elles soient légèrement droites. Servir immédiatement dans la tasse, avec de petites cuillères. Chawanmushi est mangé avec une cuillère en brisant la surface lisse et scooping crème et se remplir ensemble. Il est servi chaud en hiver et réfrigéré (chawanmushi froid nécessite un ratio d'oeufs plus ferme) en été. Les mitsuba se faneront rapidement — serviront sans tarder.",
      "visualCue": {
        "primaryTarget": "Une surface de crème d'ivoire pâle avec les feuilles mitsuba vertes pressées, la tasse encore en vapeur doucement, les crevettes visibles comme une courbe rose chaude à travers les côtés de la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Custard est encore liquide au centre lorsque la garniture est ajoutée et il s'écoule vers les bords lorsqu'il est incliné — la garniture coule.",
            "action": "Retournez la tasse au vapeur (sans mitsuba) pour encore 3 minutes et vérifiez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "La mitsuba se tient doucement dans la surface à peine ferme, la crème est encore chaude et en vapeur, et la crevette est visible comme un arc rose à travers la paroi translucide de l'œuf dashi. Parfait.",
            "action": "Servir dans les 5 minutes. Chawanmushi à son sommet est servi moments hors du vapeur."
          },
          {
            "state": "Overdone",
            "description": "Custard a été laissé à refroidir et a mis raide, rétrécissant des parois de la tasse, avec un liquide aqueux pooling autour des bords.",
            "action": "Servir tel quel — il est encore délicieux, mais pas à son meilleur éthéré. Verser tout liquide qui pleure avant de le présenter."
          }
        ]
      },
      "feelCue": "Brisez la surface avec une cuillère : vous ne devez sentir que la plus douce résistance, comme briser la peau d'une pêche très mûre. L'intérieur devrait céder sans aucun ressort — simplement s'effondrer tranquillement dans un nuage doux et soyeux qui glisse de la cuillère plutôt que de tenir sa forme."
    }
  ]
};
