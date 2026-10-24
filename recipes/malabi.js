export default {
  "repoId": "master_middle_eastern_malabi_001",
  "parentRepoId": null,
  "slug": "malabi",
  "author": "ForkRecipe Kitchen",
  "title": "Malabi",
  "description": "Un pudding blanc lait qui tremble comme le clair de lune — sert avec de la fécule de maïs à une consistance délicate et douce, parfumée d'eau de rose et de fleur d'oranger, et servi froide sous une rivière de sirop de rose et de pistaches écrasées.",
  "cuisine": "Moyen-Orient",
  "culture": "Israélienne/turque",
  "category": "desserts",
  "tags": [
    "Sans gluten",
    "végétarien",
    "Moyen-Orient",
    "dessert",
    "rose",
    "pudding"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "2 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "Lait d'avoine (ensemble légèrement moins riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "crème de noix de coco sans lait"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre (utilisation 40 g)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de fleur d'orange (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Eau de fleur d'orange",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre (pour le sirop de rose)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau (pour le sirop de rose)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Eau de rose (pour sirop)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Mélasse ou grenadine de grenade",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "quelques gouttes de colorant alimentaire rouge naturel"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Pistaches décortiquées, approximativement hachées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Noix concassées"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Pétales de roses séchées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Noix de coco déshydratée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_04",
        "ing_01"
      ],
      "outputState": "slurry",
      "instructions": "Mesurer 100 ml de lait froid dans un petit bol. Ajouter toute la fécule de maïs et fouetter vigoureusement jusqu'à ce qu'il ne reste pas une seule masse – le mélange doit ressembler à de la peinture blanche mince sans tache de poudre sèche flottant à la surface ou s'accrocher au bol. Cette technique de lisier empêche l'amidon de se saisir en morceaux lorsqu'il atteint le liquide chaud. Les 400 ml restants de lait entrent dans la casserole.",
      "visualCue": {
        "primaryTarget": "Un liquide blanc lisse, complètement sans grumeaux, la consistance de la crème fine. Versé sur un comptoir sombre, il ne devrait pas laisser de bosses derrière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux blancs d'amidon de maïs non dissous sont visibles au fond du bol ou flottent dans le lait.",
            "action": "fouetter plus vigoureusement pendant encore 60 secondes; presser les morceaux visibles contre la paroi du bol avec le fouet."
          },
          {
            "state": "Perfect",
            "description": "Liquide blanc laiteux parfaitement lisse et uniforme. Pas de texture, pas de bosses, pas de taches de poudre sèche.",
            "action": "Réserver et préparer la casserole avec le reste de lait et de crème."
          },
          {
            "state": "Overdone",
            "description": "Il n'est pas possible de sur-dissoudre un lisier froid — cette étape ne peut pas être exagérée.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Frottez une goutte de lisier entre vos doigts — il devrait être aussi doux que la lotion, pas du tout gritty."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "slurry",
        "ing_02",
        "ing_03"
      ],
      "outputState": "set_malabi",
      "instructions": "Verser le reste de 400 ml de lait dans une casserole moyenne avec la crème et le sucre. Chauffer à feu moyen, en remuant doucement jusqu'à dissolution du sucre. Lorsque le mélange est en vapeur et juste en dessous de la mijotation, verser dans le lisier de fécule de maïs dans un cours d'eau mince et stable tout en fouettant continuellement et vigoureusement. N'arrêtez pas de siffler. Le mélange commencera à épaissir en 2 à 3 minutes. Continuer à fouetter à feu moyen-doux jusqu'à ce que les premières grandes bulles paresseuses brisent la surface, ce qui active complètement l'amidon. Retirer immédiatement du feu et fouetter dans l'eau de rose et l'eau de fleur d'oranger. Le parfum résiduel est délicat ; la chaleur le détruit rapidement, donc rajoutez la flamme.",
      "visualCue": {
        "primaryTarget": "Un pudding blanc épais, lisse et opaque qui tombe du fouet dans des rubans lents et lourds et tient un faible motif de surface pendant 2-3 secondes avant de se déposer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore mince et rugueux, il enrobe le fouet dans une couche mince et aqueuse qui s'écoule rapidement. N'a pas encore épaissi à une consistance de pudding.",
            "action": "Continuer à fouetter à feu moyen — l'amidon a besoin d'atteindre une température de gélatinisation complète (~95°C). Encore quelques minutes."
          },
          {
            "state": "Perfect",
            "description": "Assez épais pour tomber dans des draps lents et lourds du fouet. Blanc opaque et soyeux. Les premières bulles paresseuses ont brisé la surface. La cuisine sent le lait.",
            "action": "Retirer immédiatement du feu et fouetter dans l'eau de rose et l'eau de fleur d'oranger. Verser dans des tasses."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est une masse très épaisse, presque solide — il s'agrippe plutôt que se déverse. Starch a complètement surgélatinisé.",
            "action": "Finissez avec une cuillère à soupe de lait froid et fouettez vigoureusement, puis versez immédiatement — la texture de l'ensemble sera toujours acceptable."
          }
        ]
      },
      "feelCue": "Plongez une cuillère propre dans le dos et lancez votre doigt à travers le dos — la ligne doit tenir propre et ferme sans que le pudding s'écoule à travers elle."
    },
    {
      "nodeId": "step_3",
      "action": "Réfrigérer",
      "inputs": [
        "set_malabi"
      ],
      "outputState": "chilled_malabi",
      "instructions": "Verser le pudding chaud dans des tasses ou des verres individuels — environ 120–150 ml par tasse. Si la surface a une forme de peau, passez-la à travers un tamis fin que vous versez pour un haut parfaitement lisse. Appuyez doucement sur chaque tasse sur le comptoir pour régler. Laisser à l'abri à température ambiante pendant 15 minutes jusqu'à ce que la surface ne s'éteigne plus, puis couvrir de plastique d'enveloppe pressé directement sur la surface (pour prévenir une peau) et réfrigérer pendant au moins 2 heures. Le pudding est mieux servi froid — l'eau de rose et les saveurs de fleur d'orange fleurissent plus clairement quand il est réfrigéré.",
      "visualCue": {
        "primaryTarget": "Parfaitement lisse, blanc, puddings fermes sans peau de surface ni fissures. Ils doivent trembler comme panna cotta quand la tasse est légèrement secouée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pudding se déplace encore comme un liquide épais lorsqu'elle est secouée après 2 heures de refroidissement. Il n'est pas prêt.",
            "action": "Réfrigérer une autre heure; l'amidon a besoin de plus de temps pour geler complètement à la température du réfrigérateur."
          },
          {
            "state": "Perfect",
            "description": "Ferme avec un délicat et doux jeu. La surface est mate-smooth et blanche-neige. Tient un léger tiret lorsqu'il est pressé avec un bout de doigt avant de ressortir.",
            "action": "Garnir de sirop de rose et de garnitures juste avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La pudding est très dure et raide, comme une boule en caoutchouc. Ça ne me gêne pas du tout. Temps de refroidissement excessif ou trop long.",
            "action": "Servir de toute façon — la saveur n'est pas affectée. Augmenter le rapport crème/lait la prochaine fois pour un ensemble plus délicat."
          }
        ]
      },
      "feelCue": "Inclinez doucement la tasse — le pudding doit glisser fractionnellement et puis se prendre, comme un blanc-manger très ferme, pas comme la gélatine."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "rose_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une petite casserole à feu moyen. Incorporer jusqu'à ce que le sucre se dissout et laisser mijoter 3 minutes sans remuer. Retirer du feu et remuer dans l'eau de rose et la mélasse de grenade ou la grenadine. Le sirop doit être d'une couleur rose molle ou poussiéreuse. Refroidir à température ambiante — ne versez pas de sirop chaud sur le pudding froid ou il fondra la surface et créera une piscine aqueuse. Le contraste entre le pudding blanc froid et le sirop de rose parfumé est tout le point.",
      "visualCue": {
        "primaryTarget": "Un sirop rose clair et pâle qui sort librement d'une cuillère dans un fil mince. Parfumé de roses et légèrement acidulé de la grenade.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est mince et aqueux; il sort instantanément de la cuillère sans corps.",
            "action": "Retourner au feu et laisser mijoter 2 minutes de plus pour se concentrer légèrement."
          },
          {
            "state": "Perfect",
            "description": "Légèrement visqueux, blush-pink, et magnifiquement parfumé. Enrober l'arrière d'une cuillère à peine. Goûte floral-douce avec un murmure de tarte.",
            "action": "Laisser refroidir à température ambiante avant de verser sur le malabi réfrigéré."
          },
          {
            "state": "Overdone",
            "description": "Le sirop est épais et ressemble à un bonbon — lorsqu'il sera refroidi, il durcira sur la surface du pudding plutôt que de s'amadouer avec grâce.",
            "action": "Finir avec une cuillère à soupe d'eau, remuer et refroidir."
          }
        ]
      },
      "feelCue": "Une goutte de sirop refroidi sur le poignet devrait se sentir comme de l'eau parfumée à la rose - légère et claire, pas du tout collante."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "chilled_malabi",
        "rose_syrup",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_malabi",
      "instructions": "Juste avant de servir, cuillerer 2 à 3 cuillères à soupe de sirop de rose à température ambiante sur chaque tasse de malabi réfrigérée, la laisser s'accumuler aux bords de la surface et s'infiltrer légèrement sur les côtés. Dispersez des pistaches grossièrement hachées sur le centre — elles fournissent le contraste textural qui fait le dessert. Ajouter quelques pétales de rose séchés et une pincée de noix de coco déshydratée. Servir immédiatement pendant que le pudding est encore froid et les garnitures sont fraîches et croustillantes. Malabi n'attend pas bien une fois garni, les noix ramollissent dans le sirop.",
      "visualCue": {
        "primaryTarget": "Une tasse de pudding blanc neige portant une couronne de sirop rose avec des pistaches vert vif, des pétales de rose rouge profond et de la neige de noix de coco blanche sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas assez de sirop — la surface du pudding semble sèche et lisse. Les garnitures sont rares.",
            "action": "Ajouter plus de sirop; le pudding peut prendre plus que vous ne vous attendez sans devenir trop sucré."
          },
          {
            "state": "Perfect",
            "description": "Les piscines de sirop magnifiquement en haut et gouttes d'eau attrayantement dans le bord intérieur de la tasse. Les pistaches sont vert vif, pétales de roses dramatiques rose-rouge, blanc de coco. Visuellement frappant.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Tellement de sirop le pudding se noie et les garnitures ont coulé et adouci.",
            "action": "Rien à faire après le pliage — servir immédiatement et noter d'utiliser moins de sirop la prochaine fois."
          }
        ]
      },
      "feelCue": "Tapotez le pudding avec une cuillère — il devrait donner une résistance faible et satisfaisante avant que la cuillère ne brise à l'intérieur frais et soyeux."
    }
  ]
};
