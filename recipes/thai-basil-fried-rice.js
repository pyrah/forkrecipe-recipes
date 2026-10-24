export default {
  "repoId": "master_thai_thai-basil-fried-rice_001",
  "parentRepoId": null,
  "slug": "thai-basil-fried-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz frit de basilic thaïlandais (Khao Pad Krapao)",
  "description": "Le riz jasmin vieux d'un jour a sauté dans un wok de mer avec du porc moulu, de la sauce de poisson, de la sauce aux huîtres, et assez de chilis thaïlandais pour rendre la cuisine inconfortable — puis enterré dans une avalanche de basilic saint qui se flétrit à une couverture brillante et parfumée d'anis. Garni d'un œuf frit dont les bords croustillants et lactés sont aussi importants que le riz lui-même.",
  "cuisine": "Thaï",
  "culture": "Bangkok",
  "category": "grains",
  "tags": [
    "Thaï",
    "Riz frit",
    "basilic",
    "wok",
    "Vite",
    "Saint-basile",
    "œuf"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz jasmin cuit (froid, séparé)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz brun cuit à froid"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc haché (ou épaule grossièrement coupée à la main)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "poulet haché",
        "boeuf haché",
        "tofu extra-ferme émietté"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, à tête brute",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Chilies oculaires d'oiseau (quille de porc noo), tranchées ou cassées (3–6 au goût)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons serrano",
        "rouge jalapeño"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de poisson (Tiparos ou Megachef)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce de soja (vegan)",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce à l'huître végétalienne",
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre (végétable ou saindoux)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "gras de porc fondu"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Saint basilic (bai krapao), feuilles cueillies — le basilic italien est un mauvais substitut",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Basilic thaïlandais (différent profil de saveur)",
        "Basilic italien (dernière station)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Oeufs à frire (1 par portion)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_08"
      ],
      "outputState": "cooked_pork_base",
      "instructions": "Chauffer un wok ou une grande poêle lourde au-dessus de la flamme la plus élevée jusqu'à ce que la fumée s'efface de la surface — 2 minutes minimum. Ajouter 30 g d'huile et tourner immédiatement. Ajouter l'ail et chier à la fois et faire revenir 20 secondes jusqu'à ce que l'ail soit doré et que la cuisine se remplisse d'un parfum piquant et poivré. Ajouter le porc moulu, le casser avec une spatule. Laissez-le semer pendant 30 secondes, puis cassez et lancez. Cuire 2 à 3 minutes au total jusqu'à ce qu'il ne reste pas de rose et que le porc ait des bords dorés et émiettés plutôt que d'être pâle et cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Le porc est doré-brun aux bords avec caramélisation visible, l'ail est ambre, les chilis ont ramolli et obscurci. Pas de liquide dans le wok.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est gris, humide et libérant du liquide. La vapeur plutôt que la friture. L'ail est encore blanc.",
            "action": "Égoutter l'excès de liquide en inclinant le wok, augmenter la chaleur et laisser l'humidité s'évaporer avant de continuer."
          },
          {
            "state": "Perfect",
            "description": "Le porc est rouillé d'or dans les endroits, parfumé et sec. L'ail est ambre grillé. Les piments sont doux et rouge vif. Une grande étourdissement.",
            "action": "Ajouter les sauces assaisonnement et le riz."
          },
          {
            "state": "Overdone",
            "description": "Le porc est séché et mâche, l'ail est foncé et amer, les bords sont noirs.",
            "action": "Ajouter immédiatement le riz pour arrêter la cuisson et absorber l'excès de char."
          }
        ]
      },
      "feelCue": "Le wok doit se sentir chaud à travers une mitaine de four maintenue à 15 cm au-dessus. Le vertige du porc qui frappe la surface doit être immédiat et violent, et non pas progressif."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger",
      "inputs": [
        "cooked_pork_base",
        "ing_01",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "seasoned_fried_rice",
      "instructions": "Ajouter le riz froid dans le wok, en brisant les amas avec la spatule avant qu'il ne frappe la chaleur. Verser la sauce de poisson, la sauce aux huîtres et la sauce de soja autour du bord du wok (pas directement sur le riz) afin que les sauces frappent le métal chaud et le grésillement. Mélanger vigoureusement tout pendant 2 à 3 minutes, presser le riz plat contre la surface du wok pendant 20 secondes à la fois pour permettre le brunissement en contact, puis lancer pour redistribuer. L'objectif est chaque grain enduit et légèrement grillé, pas cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont uniformément ambres et séparés, chacun brillant avec de la sauce. Léger omble visible sur les grains individuels. Il ne reste pas de taches humides ou de grains blancs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est pâle et humide, en plein centre. Les sauces sont mises en commun au fond plutôt que de couvrir les grains.",
            "action": "Augmenter la chaleur, presser le riz plat, et laisser l'omble tranquille pendant 30 secondes avant de jeter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est recouvert d'ambre, légèrement séparé, et sent le caramel et la sauce de poisson. Quelques grains sont plus foncés où ils ont touché le wok. Le riz est assez sec pour le siffler quand l'eau est saupoudrée.",
            "action": "Ajouter les feuilles saintes de basilic."
          },
          {
            "state": "Overdone",
            "description": "Le riz colle au wok dans une croûte et commence à brûler des taches noires.",
            "action": "Déglacer avec une cuillère à soupe d'eau, racler le fond dans le riz, et servir immédiatement."
          }
        ]
      },
      "feelCue": "Le riz froid dans un wok chaud devrait rebondir et se déchirer lorsque vous lancez la poêle — si elle glisse comme du porridge, votre wok n'est pas assez chaud ou le riz était trop humide."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "seasoned_fried_rice",
        "ing_09"
      ],
      "outputState": "finished_basil_rice",
      "instructions": "Retirer le wok du feu. Ajouter toutes les feuilles saintes de basilic à la fois et les plier à travers le riz avec 4-5 coups larges de la spatule. La chaleur résiduelle du riz et du wok va flétrir le basilic en 20 à 30 secondes — vous voulez qu'il s'effondre et brillant mais pas noir ou visqueux. Le saint basilic se flétrit beaucoup plus vite que le basilic italien et devient amer s'il est trop cuit. Les feuilles devraient tourner un vert profond, comme un bijou et libérer une vague de girofle-anis parfum. Goûtez et ajustez avec quelques gouttes de sauce de poisson si nécessaire.",
      "visualCue": {
        "primaryTarget": "Les feuilles de basilic sont de couleur vert émeraude profonde et s'effondrent, intégrées dans tout le riz, libérant un parfum aux herbes vives qui remplit la pièce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont encore rigides et vert vif, certaines debout dans le riz.",
            "action": "Continuez à plier — la chaleur du riz est suffisante. Si les feuilles restent raides après 45 secondes, retournez brièvement le wok à feu doux."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont flétries, vert foncé, légèrement luisantes. Une odeur de girofle-poivre-anis est incomparable. Intégré uniformément à travers le riz.",
            "action": "Assiettez immédiatement et commencez à faire frire les œufs."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles sont noires, croustillantes ou parfumées et amères.",
            "action": "S'il est gravement brûlé, retirez les pires morceaux. Le riz sera encore bon; la saveur de basilic y a cuit."
          }
        ]
      },
      "feelCue": "Le saint basilic flétri doit sentir comme quelqu'un a broyé une girofle entre les doigts, poivrée, florale, avec un léger basilic anisé qui est tout à fait différent du basilic italien."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "ing_10",
        "ing_08"
      ],
      "outputState": "lacey_fried_eggs",
      "instructions": "Dans un petit wok ou poêle, chauffer le reste de 10 g d'huile à feu vif jusqu'à ce qu'il mijote et commence à fumer. Casser les œufs dans l'huile et laisser les faire frire pendant 60 à 90 secondes. Les blancs doivent blister et souffler immédiatement au contact, formant des bords dorés lactés tandis que le jaune reste à peine fixé et brillant. Incliner la poêle et arroser le jaune d'huile chaude à l'aide d'une cuillère. L'œuf est fait quand le blanc est entièrement serti et doré, le jaune encore orange profond et écoulement. Servir immédiatement au dessus du riz.",
      "visualCue": {
        "primaryTarget": "Les blancs d'oeuf sont fixés mais lacés aux bords frisés, dorés dans l'anneau extérieur, tandis que le jaune est un dôme d'orange profonde, opaque au bord mais encore liquide à sa crête.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs sont translucides et jiggly, pas de dentelle ou de couleur aux bords.",
            "action": "L'huile n'était pas assez chaude — attendez qu'elle mijote visiblement avant de craquer l'œuf."
          },
          {
            "state": "Perfect",
            "description": "Les blancs sont entièrement sertis d'une spectaculaire frange dentelle dorée-brun. Yolk est orange et visiblement liquide à l'intérieur. Le fond du blanc a une croûte dorée pâle.",
            "action": "Glissez immédiatement sur le riz — ne le laissez pas reposer dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Yolk est pâle, dur, et entièrement réglé. Les blancs sont profondément bruns et mâchent.",
            "action": "Vous avez fait un plat différent — encore savoureux, mais cassez le jaune sur le riz pour la meilleure expérience texturale."
          }
        ]
      },
      "feelCue": "Le bord lacé de l'oeuf doit se casser lorsqu'il est pressé avec une cuillère, mais le jaune doit donner comme un ballon d'eau — le contraste entre le jaune blanc et le jaune liquide est le point entier."
    }
  ]
};
