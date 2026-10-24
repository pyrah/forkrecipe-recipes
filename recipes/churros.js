export default {
  "repoId": "master_spanish_churros_001",
  "parentRepoId": null,
  "slug": "churros",
  "author": "ForkRecipe Kitchen",
  "title": "Churros espagnol",
  "description": "Pâte frite sans graisse en forme d'étoile et roulée dans du sucre de cannelle — le petit déjeuner de Madrid, mieux plongée encore chaude dans une tasse de chocolat chaud épais et presque solide, la pâte intérieure encore légèrement humide au centre.",
  "cuisine": "Espagnol",
  "culture": "Castille",
  "category": "desserts",
  "tags": [
    "Churros",
    "Espagnol",
    "frits",
    "cannelle",
    "Produits de la rue",
    "Petit déjeuner",
    "pâte"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général (plainte)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau bouillante",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive (ou beurre non salé)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "huile végétale neutre",
        "Saindoux pour une saveur plus traditionnelle"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "cannela (cannelle mexicaine plus douce)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé (pour revêtement)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin",
        "sucre vanille"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol",
        "huile d'olive raffinée",
        "Saindoux"
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
        "ing_04"
      ],
      "outputState": "churro_dough",
      "instructions": "Porter l'eau à ébullition dans une casserole. Ajouter le sel et l'huile et les laisser dissoudre dans l'eau, puis retirer la poêle de la chaleur et mettre toute la farine à la fois. Mélanger immédiatement et vigoureusement avec une cuillère en bois — l'eau bouillante fait cuire l'amidon dans la farine (il s'agit d'un pâté à choux relatif), créant une pâte lisse et raide qui s'éloigne proprement des côtés de la poêle. Continuer à remuer pendant 1 à 2 minutes jusqu'à ce qu'il ne reste plus de farine brute et que la pâte forme une seule masse cohésive.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, rigide et non collante qui tient sa forme dans la poêle et s'éloigne des parois proprement. Pas de plaques de farine sèche, pas de grumeaux. De l'ivoire pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumpy et hétérogène. Poches sèches de farine non cuite visibles. La pâte ne tient pas debout quand elle est pressée.",
            "action": "Continuer à remuer sur la chaleur résiduelle pendant une autre minute. L'amidon a besoin de cuire entièrement — la pâte sous -done éclatera dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Doux, homogène et assez raide qu'une cuillère traînée à travers elle laisse un canal propre qui se remplit lentement en arrière. Ça sent la pâte cuite.",
            "action": "Transférer dans le sac de tuyauterie muni d'une grosse buse étoile (1 cm minimum) et reposer pendant 5 minutes pour refroidir légèrement avant la tuyauterie."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est séchée sur la cuisinière, s'est émiettée ou collée et brûlée sur le fond de la poêle.",
            "action": "Ajouter une cuillère à soupe d'eau chaude et remuer pour réhydrater. Une pâte légèrement surséchée est encore pipeable si elle est réhydratée avec soin."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir dense et chaude lorsqu'elle est pressée, comme la purée raide. Il ne devrait pas être collant sur vos doigts, mais il ne devrait pas non plus laisser de résidus de farine sèche. Suffisamment pour tuyauter sans s'effondrer, suffisamment souple pour traverser la pointe de l'étoile proprement."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "churro_dough"
      ],
      "outputState": "rested_dough",
      "instructions": "Transférer la pâte dans un grand sac de tuyauterie muni d'une grosse buse étoile — une étoile de 6 ou 8 points avec au moins une ouverture de 1,5 cm. Tordre la fermeture et reposer 5 minutes. Le court repos permet à la pâte de refroidir juste assez pour qu'elle n'adoucisse pas le sac, et donne au gluten un moment pour se détendre afin que la pâte extrude uniformément. Pendant ce temps, mélanger la cannelle et le sucre dans un plateau peu profond et le placer à côté du poêle. Chauffer l'huile de friture dans un pot profond et large à 180°C (356°F).",
      "visualCue": {
        "primaryTarget": "Le sac de tuyauterie est ferme et tendu. Le thermomètre à huile lit 180°C et la surface de l'huile mijote mais ne fume pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore trop chaude — elle adoucit le sac de tuyauterie et l'huile n'a pas encore atteint la température.",
            "action": "Attendez encore quelques minutes. La pénétration dans l'huile sous-température provoque l'absorption de l'huile par les churros avant la mise en croûte."
          },
          {
            "state": "Perfect",
            "description": "Dough a refroidi à une température maniable. L'huile est à 180°C — une chapelure a chuté vigoureusement dans les étourdissements et s'élève en 2 secondes.",
            "action": "Test-pipe un churro. Il doit gréer fermement au contact et tenir sa forme étoilée dans l'huile."
          },
          {
            "state": "Overdone",
            "description": "La pâte a refroidi trop longtemps et devient très raide et dure à pipe. L'huile fume et approche de 200°C.",
            "action": "Aplatissez brièvement la pâte pour la réchauffer. Baissez la température de l'huile en retirant de la chaleur pendant 30 secondes avant de faire frire."
          }
        ]
      },
      "feelCue": "Le sac de tuyauterie devrait se sentir chaud mais pas chaud contre la paume de votre main — une température que vous pourriez tenir confortablement. Si la buse est trop chaude pour toucher, attendez une minute."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "rested_dough",
        "ing_07"
      ],
      "outputState": "fried_churros",
      "instructions": "Tenir le sac de tuyauterie au-dessus de l'huile chaude, tube de 10 à 15 cm de longueur directement dans l'huile, en utilisant des ciseaux ou un couteau pour couper la pâte proprement à la buse. Faire frire en petits lots — pas plus de 4 à 5 à la fois — pendant 2 à 3 minutes de chaque côté, en tournant une fois, jusqu'à ce qu'il y ait un brun doré profond de tous les côtés. Les crêtes de la buse d'étoile sont la croûte du churro — elles se croquant avant les ensembles intérieurs de la pâte. Soulever avec une araignée ou des pinces et égoutter sur un support ou une serviette en papier pendant 30 secondes au plus avant le revêtement.",
      "visualCue": {
        "primaryTarget": "Deep, même doré-brun sur toutes les crêtes et les rainures. La coupe transversale de l'étoile est prononcée et tient sa forme. Pas de taches pâles, pas de taches sombres. L'intérieur est encore légèrement doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Blond pâle et doux sur toutes les surfaces. Les churros se sentent légers et bouncy mais gras lorsqu'ils sont pressés — la croûte n'a pas été mise et ils deviendront rapidement ensevelis.",
            "action": "Retournez à l'huile. Les churros ont besoin d'une couleur profonde — les churros pâles sont presque toujours aussi gras et doux à l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Riche en or ambré avec une croûte croustillante et audible lorsqu'elle est tapée. Les crêtes sont légèrement plus sombres que les rainures. À l'intérieur, quand la pâte est déchirée, elle est posée et à peine humide au centre.",
            "action": "Égoutter brièvement et se déplacer immédiatement vers le revêtement cannelle-sucre — le sucre adhère le mieux à la surface chaude et huileuse."
          },
          {
            "state": "Overdone",
            "description": "Dark acajou brun, très dur. Les crêtes sont presque brûlées et le sucre que vous ajoutez va fondre et brûler immédiatement.",
            "action": "Mangez - les rapidement — ils ont une fenêtre courte avant de durcir complètement. La prochaine fois, réduisez la température de l'huile de 10°C ou raccourcissez le temps de friture."
          }
        ]
      },
      "feelCue": "Un churro parfait directement de l'huile sonne creux quand tapoté — un clic calme plutôt qu'un bourbier terne. Il devrait se sentir assez rigide pour tenir sa forme lorsqu'il est soulevé d'une extrémité, mais l'intérieur devrait avoir un faible donner quand vous le pressez doucement entre deux doigts."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "fried_churros",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_churros",
      "instructions": "Déposez immédiatement les churros drainés à chaud dans le mélange cannelle-sucre et jetez-les pour les enrober ou les rouler rapidement dans le plateau. L'huile résiduelle sur la surface est la colle — le revêtement ne va pas bien adhérer une fois refroidi. Servir dans les 10 minutes suivant la friture. Les churros ne se maintiennent pas bien : ils commencent à perdre leur claquement en moins de 20 minutes lorsque la vapeur migre de l'intérieur à la croûte.",
      "visualCue": {
        "primaryTarget": "Une couche uniforme et étincelante de sucre de cannelle sur chaque surface, l'huile chaude agissant comme adhésif. Le sucre brille légèrement de la chaleur des churros.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre de cannelle est patchy ou a pour la plupart baissé. Surfaces d'or mince visibles entre les crêtes où aucun sucre n'est collé.",
            "action": "Rouler pendant que le churro est encore chaud et huileux. Appuyez légèrement sur le sucre dans la surface avec votre paume si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Chaque rainure et chaque crête sont assaisonnées de sucre. L'odeur de cannelle s'élève à mesure que la chaleur fleurit l'épice. Une pincée de l'enduit entre les doigts se sent douce-gritte.",
            "action": "Servir immédiatement avec du chocolat chaud épais pour tremper. Ne pas empiler les churros l'un sur l'autre — ils s'entretuent doucement."
          },
          {
            "state": "Overdone",
            "description": "Les churros ont été enduits alors qu'ils étaient mouillés (pas bien drainés) et le sucre s'est dissous dans une pâte collante plutôt qu'un éclat sec.",
            "action": "Égoutter plus soigneusement la prochaine fois. Le revêtement est cosmétique — il n'affectera pas beaucoup la saveur, mais la texture collante est désagréable."
          }
        ]
      },
      "feelCue": "Ramassez un churro enduit et tapez - le sur le comptoir — il devrait sonner légèrement avec une coquille croustillante. La cannelle-sucre doit se sentir sèche et pétillante entre les doigts, pas humide ou sirupeuse."
    }
  ]
};
