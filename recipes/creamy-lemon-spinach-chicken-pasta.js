export default {
  "repoId": "master_italianamerican_creamylemonspinachchickenpasta_001",
  "parentRepoId": null,
  "slug": "creamy-lemon-spinach-chicken-pasta",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pâtes de poulet au citron crémeux aux épinards",
  "description": "Les pâtes courtes et le poulet doré plié à travers une crème légère et la sauce parmesan qui reste vive avec le zeste de citron et le jus, avec une grande poignée d'épinards s'écroulant dans des rubans à la dernière seconde.",
  "cuisine": "Italien-Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "nuit",
    "pâtes",
    "poulet",
    "Crémeux",
    "citron",
    "épinards",
    "en mer"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pâtes courtes (penne, fusillie ou casarecce), sèches",
      "ratioValue": 350,
      "defaultUnit": "g",
      "substitutions": [
        "Rigatoni",
        "orecchiette"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher, pour l'eau de pâtes",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Poitrines de poulet désossées, coupées en morceaux de 2,5 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses de poulet désossées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel casher, pour le poulet et la sauce",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": [
        "moitié-moitié (minimer doucement; ne pas ébullition)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Citron, zeste puis jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Dairy",
      "name": "Parmesan, râpé finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pécorino romano (utiliser 45 g, il est plus salé)"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Base",
      "name": "Petits épinards",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "chou de bébé",
        "rouille"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Hydration",
      "name": "Eau de cuisson Starchy, réservée",
      "ratioValue": 180,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "al_dente_pasta",
      "instructions": "Porter environ 4 l (4 qt) d'eau à ébullition dans une grande casserole et ajouter le sel. Cuire les pâtes 1 minute de moins que le mode d'emploi de l'emballage, en remuant la première minute. Avant d'égoutter, écoper une tasse de l'eau de cuisson féculente (vous avez besoin d'environ 180 ml), puis égoutter.",
      "visualCue": {
        "primaryTarget": "Pâtes pliées facilement mais avec un noyau blanc mince visible quand mordu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâtes rigides avec un centre crayeux épais.",
            "action": "Faites bouillir une minute et goûtez encore."
          },
          {
            "state": "Perfect",
            "description": "Tendeur extérieur, filet de blanc ferme au centre – il finira dans la sauce.",
            "action": "Réserver l'eau et l'égout."
          },
          {
            "state": "Overdone",
            "description": "Doux tout le long du chemin, surface gonflée et commençant à se diviser.",
            "action": "Égoutter immédiatement et jeter dans la sauce le plus rapidement possible."
          }
        ]
      },
      "feelCue": "L'eau de pâtes doit avoir un goût agréablement salé, comme le bouillon doux."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seared_chicken_pieces",
      "instructions": "Pendant que l'eau chauffe, faire sécher le poulet et assaisonner avec 3/4 c. à thé de sel casher et poivre. Chauffer l'huile dans une poêle de 30 cm de 12 pouces à feu moyen-vif. Ajouter le poulet en une seule couche et cuire sans remuer 3 minutes jusqu'à ce qu'il soit doré en dessous, puis tourner et cuire 2 à 3 minutes de plus jusqu'à ce qu'il soit cuit à 165°F (74°C). Transfert dans une assiette.",
      "visualCue": {
        "primaryTarget": "Faces dorées sur les morceaux de poulet, blanc opaque pendant toute la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surfaces pâles et centre rose brillant; dessous de 165°F (74°C).",
            "action": "Faites cuire 1 minute de plus et revérifiez la plus grande pièce."
          },
          {
            "state": "Perfect",
            "description": "Bruni sur deux côtés, opaque et juteux à l'intérieur, 165°F (74°C).",
            "action": "Retirer dans une assiette."
          },
          {
            "state": "Overdone",
            "description": "Scrounken, stringy et sec aux bords.",
            "action": "Couper plus petit et laisser la sauce faire le travail de les humidifier."
          }
        ]
      },
      "feelCue": "Une pièce cuite se sent ferme avec un léger ressort lorsqu'elle est pressée, non molle et agitée."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "seared_chicken_pieces",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "lemon_cream_base",
      "instructions": "Abaissez le feu à moyen, ajoutez le beurre dans la même poêle et, une fois qu'il mousse, ajoutez l'ail et les flocons de poivre; faites cuire 45 secondes jusqu'à parfumer. Verser la crème et le zeste de citron, racler les morceaux brunis et laisser mijoter doucement de 2 à 3 minutes jusqu'à ce qu'ils épaississent légèrement.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire pâle, légèrement tachetée d'ail et de zeste, bouillonnant doucement autour des bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Crème fine et runny, pas de corps.",
            "action": "Laisser mijoter encore une minute."
          },
          {
            "state": "Perfect",
            "description": "La sauce recouvre légèrement une cuillère et de petites bulles s'élèvent paresseusement.",
            "action": "Ajoutez immédiatement les pâtes."
          },
          {
            "state": "Overdone",
            "description": "Épaisseur et pâteux, graisse de beurre se séparant aux bords.",
            "action": "fouetter quelques cuillerées à soupe d'eau pour le ramener."
          }
        ]
      },
      "feelCue": "Exécutez un doigt sur le dos enduit de la cuillère : la ligne doit tenir une seconde avant d'adoucir."
    },
    {
      "nodeId": "step_4",
      "action": "Émulsionner",
      "inputs": [
        "lemon_cream_base",
        "al_dente_pasta",
        "seared_chicken_pieces",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_11"
      ],
      "outputState": "finished_lemon_chicken_pasta",
      "instructions": "Ajouter les pâtes égouttées et 120 ml d'eau dans la poêle et mélanger à feu moyen-doux pendant 1-2 minutes jusqu'à ce que les pâtes soient al dente et que la sauce s'accroche. Retirez le feu, ajoutez le parmesan en poignées, jetez pour fondre, puis ajoutez les épinards et le poulet et jetez jusqu'à ce que les épinards se fanent. Incorporer 2 c. à soupe de jus de citron, goûter et ajouter plus de citron, sel, poivre ou un jet d'eau de pâtes pour se détendre. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Pâtes glacées et crémeuses aux épinards vert vif flétris et au poulet uniformément distribués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce aqueuse et billard au fond de la casserole.",
            "action": "Ajouter à feu doux encore 30 à 60 secondes; l'amidon le serrera."
          },
          {
            "state": "Perfect",
            "description": "La sauce s'accroche à chaque pièce d'un manteau soyeux, sans billard, les épinards se sont effondrés.",
            "action": "Servir immédiatement — il épaissit comme il est assis."
          },
          {
            "state": "Overdone",
            "description": "Sauce collée et le fromage empilé ou à cordes.",
            "action": "Allongez-vous avec de l'eau chaude de pâtes, hors de la chaleur, jetant vigoureusement."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir soyeuse plutôt que lourde sur la langue, le citron soulevant la richesse à la fin de chaque bouchée."
    }
  ]
};
