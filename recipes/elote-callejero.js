export default {
  "repoId": "master_mexican_elote_callejero_001",
  "parentRepoId": null,
  "slug": "elote-callejero",
  "author": "ForkRecipe Kitchen",
  "title": "Elote Callejero (maïs de la rue mexicaine)",
  "description": "Maïs carbonisé sur un comal ou une grille, puis slathered avec de la mayonnaise, roulé dans du fromage Cotija émietté, dépoussiéré avec du chili, et fini avec du citron vert fraîche — la plus grande collation de rue du Mexique.",
  "cuisine": "Mexicain",
  "culture": "Nourriture de rue mexicaine",
  "category": "vegetables",
  "tags": [
    "maïs",
    "Mexique",
    "Alimentation de rue",
    "cotija",
    "citron vert"
  ],
  "difficulty": 1,
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
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Maïs frais sur la cabillaud (pousses sur ou en dehors)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épis de maïs congelés, dégelés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Mayonnaise",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Créma mexicain",
        "crème aigre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Fromage Cotija (finement émietté)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "queso fresque",
        "feta (moins salé)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de chili ancho (ou piquin)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Assaisonnement de Tajín",
        "cayenne + paprika"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "citron vert fraîche (aspirée pour presser)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "citron"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Coriandre fraîche (approximativement hachée)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
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
      "instructions": "Pelez les défenses en arrière, mais laissez-les attachés comme une poignée, ou secouez complètement. Placez le maïs directement sur une flamme élevée sur un brûleur à gaz, sur un comal sec très chaud, ou sur une grille chaude. Tourner toutes les minutes pendant environ 8-12 minutes jusqu'à ce que les grains développent des taches carbonisées profondes sur l'ensemble de la corb – certains grains doivent être presque noirs tandis que d'autres restent dorés.",
      "visualCue": {
        "primaryTarget": "L'omble montre un ombrage irrégulier sur toute sa surface: taches foncées d'acajou à noires sur les grains en saillie, jaune doré dans les vallées entre les deux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le maïs est cuit à la vapeur et chaud, mais uniformément jaune; aucun ombrage ni changement de couleur. Les amandes ont l'air d'avoir l'air d'avoir l'air d'avoir l'air d'une caramélisation.",
            "action": "Augmentez significativement la chaleur ou déplacez le chevreuil directement sur la flamme; les grains ont besoin d'un contact direct avec la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Les amandes alternent entre noir carbonisé et jaune doré. Certains noyaux sont légèrement ouverts. La coque finit par fumer doucement. Sens de maïs rôti et de caramel.",
            "action": "Transférer dans une assiette et appliquer les garnitures immédiatement quand elles sont chaudes."
          },
          {
            "state": "Overdone",
            "description": "La noix entière est uniformément noire; les grains sont broyés plutôt que simplement carbonisés.",
            "action": "Gratter les grains les plus mauvais avec un couteau à beurre; l'intérieur de la corbeille est encore utilisable."
          }
        ]
      },
      "feelCue": "Chaud hors de la grille, la corbeille est presque trop chaude pour tenir — les taches carbonisées se sentent légèrement collantes, tandis que les grains d'or plombés donnent encore avec un léger éclat de jus lorsqu'ils sont pressés."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "charred_corn",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dressed_elote",
      "instructions": "Alors que le maïs est encore chaud à la vapeur, utilisez une cuillère ou un pinceau pour enrober toute la surface d'une couche généreuse et uniforme de mayonnaise. Enroulez ou pressez le coton enduit dans une assiette de Cotija émietté afin que le fromage adhère tout autour. Poussière en poudre de chili d'en haut. Pressez le citron vert fraîche sur toute la côte. Scatter la coriandre. Terminer avec une pincée de sel.",
      "visualCue": {
        "primaryTarget": "La corbe est épaissement enduite de blanc avec Cotija, rouge-poussière avec de la poudre de chili, et visiblement scintille avec du jus de lime. Cilantro confetti est dispersé à travers la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mâchoire mince et tachetée; le fromage n'est pas bien adhérant; il semble anémique et sec.",
            "action": "Appliquez une couche de mayo plus épaisse avec une cuillère et appuyez fermement sur la Cotija sur la surface — travaillez vite alors que la corbeille est encore chaude et collante."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est recouvert de blanc Cotija. Poudre de Chili poussières orange-rouge sur le dessus. Une limace visible de jus de lime coule sur le côté. Des odeurs de zeste de lime, de chili et de maïs grillé.",
            "action": "Servir immédiatement et manger rapidement — l'éliote est le meilleur chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop de mayo a fait la surface soudée; le fromage s'est dissous dans une pâte humide au lieu d'adhérer à des miettes distinctes.",
            "action": "Rouler la corbe à travers Cotija extra sec pour réabsorber l'humidité."
          }
        ]
      },
      "feelCue": "Un mélange d'éliote parfait vous donne une croûte d'omble, une explosion de jus de maïs sucré, puis la lécherette fraîche de mayo et le crumble de Cotija salé — le tout en une seule bouchée."
    }
  ]
};
