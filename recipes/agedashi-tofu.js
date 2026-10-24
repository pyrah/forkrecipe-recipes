export default {
  "repoId": "master_japanese_agedashi_tofu_001",
  "parentRepoId": null,
  "slug": "agedashi-tofu",
  "author": "ForkRecipe Kitchen",
  "title": "Agedashi Tofu",
  "description": "Des cubes de tofu silken ont été épluchés dans de la fécule de pomme de terre et frits jusqu'à ce que leur enrobage se répande dans une coquille tremblante et semi-translucide, puis mis à la dérive dans un bouillon chaud de tentsuyu qui s'infiltre dans la croûte en temps réel.",
  "cuisine": "Japonais",
  "culture": "Izakaya japonais",
  "category": "proteins",
  "tags": [
    "Japonais",
    "tofu",
    "frits",
    "Dashi",
    "izakaya"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 1654,
  "forks": 142,
  "contributors": 18,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-19",
  "updatedAt": "2025-10-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Silence ou tofu doux",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tofu ferme (moins de crème)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Katakuriko (amidon de pomme de terre)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de maïs"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Dashi (kombu + katsuobushi)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "kombu dashi (vegan)",
        "shiitake dashi"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sauce de soja (sukuchi léger)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja régulière (résultat d'un darrateur)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Saké + pincée de sucre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de friture neutre",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Daikon râpé, gingembre râpé, katsuobushi, oignon vert",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Myoga gingembre",
        "shichimi"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Presser et sécher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "dried_tofu",
      "instructions": "Retirer le tofu de son emballage et envelopper en 3-4 couches de serviettes en papier. Placer sur une surface plane avec une petite plaque sur le dessus comme un poids — n'utilisez pas de livres lourds, qui écraseront le tofu de soie. Laisser reposer 15 minutes pour obtenir l'humidité de la surface. Couper en 6-8 cubes, environ 4x4cm. Tremper très doucement chaque visage coupé sec avec des serviettes en papier. Cette étape est essentielle : l'humidité de surface provoque la dissolution du revêtement d'amidon avant la friture, ce qui donne un cube à l'huile chauve plutôt qu'une coquille croquante.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu sont visiblement plus secs — la surface a une légère apparence mate plutôt que l'aspect humide et brillant du tofu frais. Pas de piscine sur la planche à découper.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes sont encore très humides. Une empreinte digitale sur la surface se remplit immédiatement d'humidité. Les serviettes en papier sont complètement saturées.",
            "action": "Reconditionner les serviettes en papier frais pendant encore 5-10 minutes. Le tofu humide fera revenir la vapeur plutôt que croustillant."
          },
          {
            "state": "Perfect",
            "description": "Les surfaces sont mates et légèrement collantes. Les cubes se sentent plus fermes que le tofu frais, mais encore jiggle quand la planche est secouée. Les empreintes digitales restent visibles.",
            "action": "Passez immédiatement à la poussière avec de l'amidon — ne les laissez pas s'asseoir longtemps après le séchage."
          },
          {
            "state": "Overdone",
            "description": "La surface du tofu commence à avoir un aspect légèrement essuyé: la surface extérieure de 1 mm s'est séchée et semble blanche et papieruse.",
            "action": "Continuez quand même. L'extérieur peut être légèrement plus ferme que l'idéal, mais il fera encore bien frire."
          }
        ]
      },
      "feelCue": "Un cube de tofu séché doit se sentir comme un morceau ferme de beurre très froid — légèrement résistant à vos doigts mais toujours clairement céder à l'intérieur si vous appuyez plus fermement."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "tentsuyu_sauce",
      "instructions": "Mélanger le dashi, la sauce de soja usukuchi et le mirin dans une petite casserole. Faire mijoter légèrement à feu moyen, en remuant pour combiner. Cuire 2 minutes. Goûter — il devrait être légèrement salé, salé avec une douceur de fond et propre. La sauce de soja pâle est traditionnelle pour l'âgeashi pour préserver la couleur dorée de la sauce; le soja régulier rend une version plus foncée et plus profonde. Garder au chaud jusqu'à ce que nécessaire.",
      "visualCue": {
        "primaryTarget": "La sauce est pâle ambre-or de couleur, légèrement vapeur. La surface montre de minuscules bulles de la mijotation, mais pas d'ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est froide ou à peine chaude. Mirin n'a pas complètement incorporé — la sauce sent bouché et sucré séparément.",
            "action": "Laisser mijoter pendant au moins 2 minutes pour faire cuire l'alcool cru et épouser les saveurs."
          },
          {
            "state": "Perfect",
            "description": "La sauce est uniformément chaude, dorée pâle, et sent le dashi salé avec une douceur douce. L'odeur d'alcool du mirin a disparu.",
            "action": "Couvrir sur la chaleur la plus basse jusqu'à ce que le tofu soit frit."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué considérablement et est maintenant plus foncée et très salée. Le volume est nettement inférieur au début.",
            "action": "Ajouter plus de dashi pour ramener au bon volume et diluer le sel. Ne pas faire bouillir."
          }
        ]
      },
      "feelCue": "Le tentsuyu doit sentir la mer du dashi et goûter propre et délicatement savore sur votre langue — pas tranchant, pas doux, une note de fond qui amplifie le tofu."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "dried_tofu",
        "ing_02",
        "ing_06"
      ],
      "outputState": "fried_tofu",
      "instructions": "Chauffer l'huile à 180°C (355°F) dans un pot étroit profond ou un petit wok. Travailler rapidement, rouler chaque cube de tofu dans de la fécule de pomme de terre, presser doucement pour adhérer, puis secouer l'excès — vous voulez une fine, même la poussière, pas une couche épaisse. Baisser les cubes en huile un à la fois à l'aide de baguettes ou d'une araignée. Faire frire 3-4 pièces à la fois pendant 2-3 minutes, en tournant une fois, jusqu'à ce que le revêtement soit en or très pâle. Le revêtement doit être presque translucide, pas profondément doré.",
      "visualCue": {
        "primaryTarget": "Le revêtement est serti mais à peine doré – presque transparent, légèrement crème. Les cubes flottent librement et le bouillonnement autour d'eux est stable et moyen-vigoreux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le revêtement est encore doux et blanc — il n'a pas été fixé. Les cubes peuvent se coller. Température de l'huile trop basse.",
            "action": "Augmentez la température de l'huile et attendez les 3 minutes complètes. Des pièces mobiles trop tôt déchirent le revêtement souple."
          },
          {
            "state": "Perfect",
            "description": "Le revêtement est léger, semi-translucide et à peine doré. Les cubes ne collent pas ensemble. Lorsqu'elle est levée, l'huile s'écoule proprement.",
            "action": "Retirer et égoutter sur un rack. Ajouter le bouillon immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le revêtement est d'or profond et commence à brunir. La coquille subtile et délicate est devenue une croûte épaisse et croustillante.",
            "action": "Procéder — encore délicieux, mais le revêtement traditionnel translucide a disparu. Réduire la température pour le prochain lot."
          }
        ]
      },
      "feelCue": "Le revêtement oldashi bien frit est chuchotant – on peut presque voir le tofu blanc à travers lui, comme une vitre givrée. S'il est opaque et solide, il est exagéré."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "fried_tofu",
        "tentsuyu_sauce",
        "ing_07"
      ],
      "outputState": "finished_agedashi_tofu",
      "instructions": "Mettre 2-3 cubes de tofu frits dans un petit bol profond. Ladle chaud tentesuyu sauce et autour d'eux immédiatement — la sauce devrait venir environ à mi-haut des côtés des cubes. Garnir le haut de chaque cube d'un petit monticule de daikon râpé, d'une pincée de gingembre râpé, de quelques brins de katsuobushi (qui va vaguer dans la chaleur) et d'oignon vert finement tranché. Servir dans les 60 secondes. Toute la magie de l'âgeashi est le moment où le revêtement croquant commence à absorber le bouillon — ce processus commence à la seconde où vous versez la sauce.",
      "visualCue": {
        "primaryTarget": "Les cubes sont à moitié submergés dans un bouillon doré pâle. Les garnitures sont placées sur le dessus. Le katsuobushi bat. Le revêtement de la conduite d'eau commence déjà à s'assouplir et à devenir translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tofu a été plaqué sans bouillon ou le bouillon n'a pas été versé. Pas encore d'interaction entre le revêtement et la sauce.",
            "action": "Ajouter immédiatement le bouillon chaud. C'est l'interaction déterminante du plat."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est légèrement bouillant. Le revêtement juste à la ligne de bouillon s'est adouci à une texture soyeuse et gelée tandis que le dessus est encore à peine croquant. Katsuobushi bouge.",
            "action": "Servir et manger immédiatement. Cette fenêtre dure environ 2 minutes."
          },
          {
            "state": "Overdone",
            "description": "Tofu est assis dans un bouillon depuis trop longtemps. Tout le revêtement s'est dissous dans la sauce. Les cubes sont doux et waterlogged partout.",
            "action": "Encore délicieux comme un tofu doux dans un plat de bouillon, mais le contraste textural est disparu. Servez plus vite la prochaine fois."
          }
        ]
      },
      "feelCue": "Mangez de l'âgeashi avec une cuillère — transpercez le revêtement adouci, laissez le bouillon chaud inonder, et éprouvez la douceur simultanée du tofu et la résistance à peine là de la croûte de dissolution."
    }
  ]
};
