export default {
  "repoId": "master_japanese_dashimakitamago_001",
  "parentRepoId": null,
  "slug": "dashimaki-tamago",
  "author": "ForkRecipe Kitchen",
  "title": "Dashimaki Tamago",
  "description": "Une omelette roulée japonaise parfumée de dashi, douce avec du mirin, et construite une fine couche dorée à la fois sur une casserole rectangulaire de tamagoyaki – soyeuse, printanière et tremblante avec de la douceur crème dans sa section transversale spirale.",
  "cuisine": "Japonais",
  "culture": "Kansai",
  "category": "eggs",
  "tags": [
    "œufs",
    "Sans gluten",
    "Japonais",
    "Tamagoyaki",
    "laminés",
    "Dashi",
    "doux"
  ],
  "difficulty": 3,
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
    "sweet": 3,
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
      "name": "Gros œufs",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Ichiban dashi (froid)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "kombu dashi pour végétalien",
        "dashi instantané dissous dans l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "saké sec + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère (usukuchi)",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja régulière, utiliser la moitié de la quantité"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (sunflower ou son de riz)",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "huile végétale légère"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Radis Daikon, râpés finement",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "Gingembre râpé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "seasoned_egg_mixture",
      "instructions": "Mélanger les œufs, le dashi froid, le mirin, la sauce de soja usukuchi et le sel dans un bol. Battre avec des baguettes à l'aide d'un mouvement de coupe latéral – le but est de casser les jaunes et de bien mélanger sans battre dans l'air ou créer de mousse. Plongez dans un tamis à mailles fines dans un récipient versable (un pot de mesure fonctionne parfaitement). Le tamisage enlève les chalazae et tout blanc non dissous, garantissant un résultat soyeux et sans bosses. Le mélange doit être clair et doré.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré uniforme, presque translucide, sans brins blancs visibles, qui coule proprement dans le tamis sans grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries jaunes ou des fils blancs opaques sont encore visibles dans le mélange.",
            "action": "Plongez dans le tamis et utilisez l'arrière d'une cuillère pour presser les bouts tenaces."
          },
          {
            "state": "Perfect",
            "description": "Complètement homogène, liquide doré pâle avec un reflet doux. Pas de mousse. Pas de stries.",
            "action": "Continuez immédiatement à chauffer la casserole de tamagoyaki."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est mousseux avec de l'air incorporé et semble nettement plus léger en couleur.",
            "action": "Appuyez fermement sur le récipient sur le comptoir pour faire sauter des bulles et laissez reposer 2 minutes avant la cuisson."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir légèrement plus lourd que l'œuf battu — le dashi ajoute le corps que vous pouvez sentir lors de l'inclinaison du pot."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "ing_06"
      ],
      "outputState": "oiled_hot_pan",
      "instructions": "Placer le tamagoyaki rectangulaire à feu moyen. Faire tremper une serviette en papier pliée dans l'huile neutre et la frotter soigneusement sur toute la surface intérieure — la serviette retourne dans le bol pour être réutilisée entre les couches. Chauffer la poêle jusqu'à ce qu'une goutte de mélange d'oeufs s'échauffe immédiatement et se met en moins d'une seconde lorsqu'elle tombe à la surface. La casserole doit être assez chaude pour cuire chaque couche rapidement mais pas si chaude la couleur des oeufs ou bulle avant de rouler.",
      "visualCue": {
        "primaryTarget": "Un film d'huile uniforme et scintillant à travers la poêle, sans pooling ni taches sèches, et une goutte d'oeufs à blanc instantanément au contact.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une goutte de mélange d'oeufs est mouillée et s'étend lentement sans étourdissement.",
            "action": "Attendez encore 30 secondes. Une chaleur insuffisante fait que les couches se collent comme pâte humide."
          },
          {
            "state": "Perfect",
            "description": "La goutte s'étourne immédiatement et se met à un blanc opaque en 1 seconde. L'huile mijote mais ne fume pas.",
            "action": "Verser la première couche d'œuf."
          },
          {
            "state": "Overdone",
            "description": "La poêle fume et l'huile sent fort. Une goutte d'œufs, bruns et bouffées instantanément.",
            "action": "Retirer du feu, essuyer avec la serviette huilée pour refroidir légèrement et revenir à feu moyen-doux."
          }
        ]
      },
      "feelCue": "Tenez votre main à 8 cm au-dessus de la poêle — la chaleur rayonnante devrait se sentir pressante et pointue, mais pas brûlante. Une chaleur soutenue et concentrée."
    },
    {
      "nodeId": "step_3",
      "action": "Rouleaux",
      "inputs": [
        "seasoned_egg_mixture",
        "oiled_hot_pan"
      ],
      "outputState": "rolled_tamagoyaki",
      "instructions": "Verser un tiers du mélange d'oeufs dans la casserole, en inclinant pour enrober la surface d'une couche mince et uniforme. Dès que la surface est d'environ 80% réglée — pas plus liquide mais pas entièrement sèche — utilisez des baguettes ou une spatule tamagoyaki pour rouler l'oeuf vers vous depuis le bord éloigné en 3-4 plis. Poussez le rouleau jusqu'au bout de la casserole. Reconditionner l'espace vide avec la serviette en papier. Verser dans le prochain tiers du mélange d'oeufs, soulevant brièvement le rouleau existant afin que l'oeuf glisse sous celui-ci. Répétez le rouleau vers vous, en incorporant le premier log. Encore de l'huile, versez le dernier tiers, et roulez encore. Le log fini devrait comporter 3 couches dorées distinctes visibles aux extrémités. Transférer immédiatement sur un tapis de bambou ou sur du papier parchemin et rouler fermement dans un cylindre. Appuyez et maintenez 1 minute pour régler la forme.",
      "visualCue": {
        "primaryTarget": "Une bûche bien roulée à l'extérieur caramel-or faible, chaque extrémité montrant une spirale propre de 3 couches d'or pâle séparées par de fines coutures dorées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches se collent comme une masse homogène sans spirale visible. L'extérieur est encore pâle et moelleux.",
            "action": "Le laminage a commencé trop tôt — laissez chaque couche régler encore 10 secondes avant de plier la prochaine fois. La bûche est toujours comestible."
          },
          {
            "state": "Perfect",
            "description": "Un log ferme, légèrement ressortant avec des couches concentriques claires visibles à l'extrémité coupée. L'extérieur est en or pâle sans taches brunes. Rendement légèrement à la pression.",
            "action": "Envelopper le tapis de bambou et presser pour mettre la forme. Reposez-vous 5 minutes avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Des taches brunes visibles ou des bulles sur les couches extérieures. L'intérieur est sec sans crème.",
            "action": "Sauvage par coupe fine — les parties brunes sont l'extérieur seulement et l'intérieur peut encore être tendre."
          }
        ]
      },
      "feelCue": "Le bûcheron fini doit se sentir ferme mais productif — comme une éponge très dense et chaude. Lorsque vous déballez et appuyez dessus, il ressort lentement plutôt que instantanément."
    },
    {
      "nodeId": "step_4",
      "action": "Trancher",
      "inputs": [
        "rolled_tamagoyaki",
        "ing_07"
      ],
      "outputState": "finished_dashimaki_tamago",
      "instructions": "Déposez le tamago et coupez-le dans le sens transversal en rondelles de 2 cm avec un couteau moulu. Disposer le côté coupé pour montrer la spirale. Placez un petit monticule de daikon fraîchement râpé à côté de chaque pièce. Le daikon n'est pas simplement garni — sa légère netteté enzymatique nettoie le palais entre les morsures douces et gourmandes et équilibre la douceur du mirin.",
      "visualCue": {
        "primaryTarget": "Nettoyer les tranches rondes montrant une spirale dorée-ambrée, chaque anneau distinct, placé à côté d'un tas enneigé de daikon râpé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La spirale est invisible ou frottée — les tranches ressemblent à des œufs solides sans couche.",
            "action": "Le roulement était imprécis. La saveur est la même — la prochaine fois, assurez-vous que chaque couche se met entièrement avant de rouler."
          },
          {
            "state": "Perfect",
            "description": "Chaque tranche montre 3 anneaux concentriques clairs d'or pâle. La surface coupée brille légèrement avec la crème dashi à l'intérieur.",
            "action": "Servir à température ambiante ou légèrement chaud."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont sèches et s'effondrent. La spirale est visible, mais l'œuf est émietté, pas crépuscule.",
            "action": "Badigeonner d'un petit dashi pour ajouter de l'humidité avant le placage."
          }
        ]
      },
      "feelCue": "Une tranche parfaitement ajustée rebondit doucement lorsqu'elle est pressée avec un bout de doigt et tient sa forme ronde sans s'effondrer - dense, résistant et humide aussi bon tofu."
    }
  ]
};
