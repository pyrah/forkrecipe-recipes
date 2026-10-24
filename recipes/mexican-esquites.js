export default {
  "repoId": "master_mexican_mexicanesquites_001",
  "parentRepoId": null,
  "slug": "mexican-esquites",
  "author": "ForkRecipe Kitchen",
  "title": "Esquites (Salade de maïs de la rue mexicaine)",
  "description": "Des grains de maïs carbonisé ont été jetés au chaud avec de la créma, de la chaux, du cotija et de la poudre de chile.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "vegetables",
  "tags": [
    "légumes",
    "végétarien",
    "maïs",
    "Mexique",
    "Produits de la rue",
    "cotija"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graines fraîches (à partir de 4 épis) ou congelées",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "maïs en conserve (drainer bien et sécher avant l'abattage)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème créma ou aigre mexicaine",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Yogourt grec",
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Mayonnaise",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "mayo végétalien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Fromage Cotija, émietté",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "fromage feta",
        "Parmesan"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Jus de chaux frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Chili poudre ou tajín",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "poudre d'ancho",
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc haché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Coriandre fraîche, hachée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre ou huile neutre",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_10",
        "ing_09"
      ],
      "outputState": "charred_corn",
      "instructions": "Chauffer une poêle en fonte large et sèche ou une poêle lourde sur la plus haute chaleur possible jusqu'à ce que vous puissiez maintenir votre paume 5cm au-dessus de la surface pendant seulement 1-2 secondes. Ajouter le beurre, laisser mousser et commencer à brunir, puis ajouter les grains de maïs dans une seule couche non surpeuplée — vous devrez peut-être le faire en deux lots. Ne pas remuer pendant 2 minutes. Laissez la couche inférieure de maïs entrer en contact dur avec la poêle chaude et l'omble. Puis jetez une fois et laissez-la reposer encore 90 secondes. Le but est l'ombrage noir visible sur certains grains avec d'autres restant dorés — une variété d'omble est plus intéressante que le brunissement uniforme.",
      "visualCue": {
        "primaryTarget": "Une mosaïque de grains de maïs jaune-or, ambre profond et noir-char. La poêle devrait avoir un goût sombre et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tous les grains sont jaune pâle et à la vapeur. Pas de char nulle part. La poêle est trop froide ou le maïs trop humide.",
            "action": "Enlever la moitié du maïs si elle est surpeuplée. Augmenter la chaleur. Attendez que la poêle crie chaud avant d'ajouter du maïs."
          },
          {
            "state": "Perfect",
            "description": "Un spectre de char — quelques grains noirs, un peu d'or ambre, un peu pâle. La cuisine sent le pop-corn et le beurre. Le maïs a séché légèrement et concentré dans la douceur.",
            "action": "Transférer dans un bol et procéder tout en étant encore chaud."
          },
          {
            "state": "Overdone",
            "description": "La plupart des grains sont uniformément noirs. La poêle a brûlé.",
            "action": "Le maïs est fin — le maïs très carbonisé est intentionnel dans la nourriture de rue mexicaine. Passez à la recette."
          }
        ]
      },
      "feelCue": "Écoutez un pop constant et agressif et sifflez quand le maïs est dans la poêle chaude — il devrait sonner comme du popcorn sur le point de sauter. Le silence signifie que la poêle n'est pas assez chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Découpe",
      "inputs": [
        "charred_corn",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dressed_esquites",
      "instructions": "Alors que le maïs est encore chaud, transférer dans un bol. Ajouter le créma, la mayonnaise, le jus de lime, la poudre de chile et les pétoncles tranchés. Jetez immédiatement — la chaleur du maïs réchauffera la vinaigrette et l'aidera à enrober chaque grain. Goûtez et ajustez : plus de chaux pour la luminosité, plus de chile pour la chaleur, une pincée de sel si nécessaire. La vinaigrette doit être crémeuse, acidulée et épicée; chaque morsure doit avoir les quatre éléments simultanément.",
      "visualCue": {
        "primaryTarget": "Amandes de maïs carbonisé entièrement enrobées d'une vinaigrette crémeuse jaune pâle avec des taches rouge chile visibles et de l'échalon vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'habillage ne recouvre pas entièrement le maïs — certains grains sont secs et non couchés.",
            "action": "Jetez plus vigoureusement. Si la vinaigrette est trop épaisse, quelques gouttes de jus de lime le desserrent."
          },
          {
            "state": "Perfect",
            "description": "Chaque noyau est enduit. Le mélange est chaud, à la vapeur, et l'odeur de char se mêle à la chaux et à la crème. Le pétoncle est distribué partout.",
            "action": "Assietter et finir avec le cotija et les herbes."
          },
          {
            "state": "Overdone",
            "description": "La vinaigrette est passée de crémeux à mince de trop de jus de lime.",
            "action": "Ajouter une cuillère à soupe supplémentaire de créma pour restaurer le corps."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée — la première saveur devrait être le maïs sucré, puis la crème, puis la luminosité de la chaux couper à travers, puis une chaleur construire à partir du chile. Si un élément domine, ajustez."
    },
    {
      "nodeId": "step_3",
      "action": "Garnir",
      "inputs": [
        "dressed_esquites",
        "ing_04",
        "ing_08",
        "ing_06"
      ],
      "outputState": "finished_esquites",
      "instructions": "Transférer dans des tasses ou un bol de service. Dispersez généreusement le cotija émietté sur le dessus — il devrait ressembler à une neige de fromage salé. Ajouter la coriandre hachée. Terminer avec une poussière supplémentaire de poudre de chile sur le dessus pour un contraste visuel et un coup de chaleur supplémentaire. Servir immédiatement — c'est un plat chaud et le contraste textural des grains carbonisés diminue à mesure qu'ils refroidissent.",
      "visualCue": {
        "primaryTarget": "Maïs crémeux, carbonisé dans une tasse ou un bol avec une généreuse casquette de cotija blanc, une coriandre verte vive et une poussière rouge rouille de chile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Peu garnir — le plat semble monochromatique et plat.",
            "action": "Soyez généreux avec le cotija. Il ne s'agit pas seulement d'une garniture — c'est une composante principale de la saveur."
          },
          {
            "state": "Perfect",
            "description": "Cotija abondante, coriandre brillante et rouge chile visible. Les couleurs sont vives et appétissantes. La vapeur monte toujours du maïs.",
            "action": "Servir dans les 5 minutes suivant la vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Le maïs s'est refroidi et ne fume plus. La vinaigrette a absorbé et les grains ont l'air secs.",
            "action": "Une explosion de 30 secondes dans une poêle chaude avec une goutte de beurre la ravive. Ajouter le cotija frais et les herbes après le réchauffage."
          }
        ]
      },
      "feelCue": "Coupez une cuillère et laissez tomber — le maïs devrait tomber dans une cascade crémeuse, et non dans un clatter sec. Chaque noyau doit briller avec de la vinaigrette."
    }
  ]
};
