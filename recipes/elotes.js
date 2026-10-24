export default {
  "repoId": "master_mexican_elotes_001",
  "parentRepoId": null,
  "slug": "elotes",
  "author": "ForkRecipe Kitchen",
  "title": "Elotes",
  "description": "Des épis entiers charnus de maïs slathered in tanny Mexicain crema, roulés dans du Cotija salé, pulvérisés avec de la poudre de chili, et frappés avec une pression de citron vert — chaque morsure est simultanément fumée, crémeuse, salée, acide, et vivante avec la chaleur.",
  "cuisine": "Mexicain",
  "culture": "Mexicain Street Food",
  "category": "vegetables",
  "tags": [
    "Élotes",
    "Mexique",
    "maïs",
    "Produits de la rue",
    "cotija",
    "Chili"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Maïs frais sur l'épi, décortiqué",
      "ratioValue": 4,
      "defaultUnit": "ears",
      "substitutions": [
        "maïs congelé sur la corbe (dégeler complètement avant le grillage)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Créma mexicain",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "crème aigre",
        "mayonnaise (riche, moins acidulée)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Mayonnaise",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "crème supplémentaire"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Fromage Cotija finement émietté",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "feta (moins salé, rincer d'abord)",
        "Parmesan"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre de Chili (à base d'anchois ou de guajillos)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Tajin (ajoute du sel de citron vert)",
        "paprika fumé + Cayenne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "citron vert, coupée en deux",
      "ratioValue": 2,
      "defaultUnit": "limes",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Griller",
      "inputs": [
        "ing_01"
      ],
      "outputState": "charred_corn",
      "instructions": "Chauffer un gril ou un gril à feu vif. Placer le maïs décortiqué directement sur les grilles sur la partie la plus chaude du feu. Tourner les oreilles toutes les 2 à 3 minutes, en laissant chaque ombrage avant de tourner. La durée totale de cuisson est de 8 à 12 minutes. Vous voulez un noircissement significatif sur chaque face du noyau, pas seulement des marques de grill.",
      "visualCue": {
        "primaryTarget": "Chaque face du noyau est soit jaune doré profond, soit noir carbonisé. Le maïs a l'air d'une couleur inégale — des taches de jaune vif entre des bandes de tigre noir. La vapeur s'élève de l'épi lorsqu'elle est tournée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Amandes jaunes pâles avec seulement des marques de couture faibles. Le maïs a l'air cru et brillant. Pas de caramélisation.",
            "action": "Remonter la chaleur et laisser le maïs plus longtemps dans chaque position. Ne précipitez pas cela — l'omble est la saveur."
          },
          {
            "state": "Perfect",
            "description": "Chaque oreille a 30 à 40 % de grains noircis ou profondément carbonisés dispersés parmi les grains jaune doré. Le chou sent le caramel doux et fumé. Les amandes éclatent de jus lorsqu'elles sont pressées.",
            "action": "Déplacez-vous dans une zone plus froide ou retirez-vous de la chaleur. Assemblez-vous immédiatement pendant la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Toute l'oreille est noire. La plupart des grains sont broyés et secs. Une odeur de fumée amère domine.",
            "action": "Débarrassez-vous du pire char. Les grains intérieurs peuvent encore être doux — assembler et servir, le crème équilibrera l'amertume."
          }
        ]
      },
      "feelCue": "Appuyez sur un noyau avec votre vignette — il devrait éclater de jus sucré et laiteux. S'il est ferme et sec, le maïs a besoin de plus de temps et de chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "crema_mixture",
      "instructions": "Incorporer le crème et la mayonnaise dans un petit bol jusqu'à ce qu'il soit lisse. La combinaison est plus riche que l'un ou l'autre seul — le mayo ajoute corps et collage, le crème ajoute tang. Assaisonner avec une pincée de sel.",
      "visualCue": {
        "primaryTarget": "Une sauce uniforme, blanc ivoire, assez épaisse pour enrober une oreille de maïs sans dégoutter immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le crème et le mayo sont encore deux couches distinctes dans le bol — non mélangés.",
            "action": "Mélanger vigoureusement jusqu'à ce qu'il soit complètement homogène."
          },
          {
            "state": "Perfect",
            "description": "Doux, blanc crémeux, avec une consistance entre la crème aigre et le yogourt grec. Il tient sa forme brièvement sur une cuillère.",
            "action": "Enrober le maïs pendant qu'il est encore chaud."
          },
          {
            "state": "Overdone",
            "description": "La sauce est aqueuse ou coupée en morceaux.",
            "action": "Ajouter une cuillère à soupe de mayo pour réémulsionner et remuer doucement."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir fraîche et épaisse contre un doigt — si elle se sent mince ou liquide, ajouter plus de mayonnaise."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "charred_corn",
        "crema_mixture",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_elotes",
      "instructions": "Travailler rapidement pendant que le maïs est chaud, brosser ou cuillèrer le mélange crème généreusement sur chaque oreille, enrober tous les côtés. Rouler immédiatement l'oreille enduite dans une assiette de Cotija émiettée, en appuyant légèrement pour que le fromage adhère. Poussière avec poudre de chili. Pressez le citron vert sur chaque oreille juste avant de servir. Terminer avec une dispersion de coriandre.",
      "visualCue": {
        "primaryTarget": "Blanc neigeux Cotija colle le maïs à la crème sur fond de grains carbonisés noirs et dorés. Les poudres de chili rouge-orange vivides pulvérisent la surface. Cilantro ajoute des taches de vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La couche de crème est mince, la Cotija n'a pas adhéré et tombe, et le maïs semble la plupart du temps nu.",
            "action": "Appliquer une autre couche de crème et presser fermement le fromage tandis que le maïs est encore chaud et collant."
          },
          {
            "state": "Perfect",
            "description": "Le crème enveloppe complètement le maïs sous une couche pleine, même de Cotija. La poudre de Chili est visible. Le maïs s'évapore légèrement dans le revêtement. Ça sent le char, le citron vert et le chili grillé.",
            "action": "Servir sur des brochettes ou dans du papier ciré en 2 minutes — les élotes n'attendent personne."
          },
          {
            "state": "Overdone",
            "description": "Le crème a glissé sur l'assiette parce que le maïs est trop frais, et le Cotija se rassemble au fond.",
            "action": "Retournez à un gril ou une poêle très chaud pour réchauffer et restaurer l'adhérence du revêtement."
          }
        ]
      },
      "feelCue": "L'oreille finie doit se sentir chaude et légèrement collante lorsque vous la ramassez — le crème et le fromage forment un manteau ferme et productif qui laisse vos doigts agréablement malsains."
    }
  ]
};
