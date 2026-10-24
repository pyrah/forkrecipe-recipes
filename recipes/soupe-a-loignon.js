export default {
  "repoId": "master_french_soupe_a_loignon_001",
  "parentRepoId": null,
  "slug": "soupe-a-loignon",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe à l'Oignon gratinée",
  "description": "Les oignons sont cuits lentement jusqu'à ce qu'ils soient incroyablement sucrés et confitureux, puis mijotés dans le stock de bœuf et versés sur du pain grillé, enterrés sous le gruyère fondu et bouillonnant, le remède parisien pour n'importe quoi.",
  "cuisine": "Français",
  "culture": "bistrot parisien",
  "category": "stocks",
  "tags": [
    "Soupe d'oignon française",
    "français",
    "bistrot",
    "Gruyère",
    "pain"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Oignons jaunes (finement tranchés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "oignons blancs",
        "variétés d'oignon mélangées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié",
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "vinaigre de vin blanc dilué"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Stock de viande bovine (bonne qualité)",
      "ratioValue": 150,
      "defaultUnit": "parts",
      "substitutions": [
        "Viande bovine",
        "poulet foncé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "tranches de baguette (1 cm d'épaisseur, grillées)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Croûtons à sarcelles",
        "douleur de campagne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Gruyère (gravure grossière)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Emmental",
        "Beaufort"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_08"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Faire fondre le beurre dans un pot large à fond lourd à feu moyen-doux. Ajouter tous les oignons avec une pincée généreuse de sel et remuer pour enrober. Cuire à découvert, en remuant toutes les 5 à 8 minutes, pendant 45 à 60 minutes au total. Ne pressez pas : les oignons doivent passer à travers transparent, puis blond, puis doré, puis acajou-brun profond. Ils devraient réduire à environ un cinquième de leur volume d'origine et sentir doux et noisette, jamais brûlé.",
      "visualCue": {
        "primaryTarget": "Une masse jammy profondément dorée qui s'est effondrée jusqu'à une fraction de son volume d'origine, avec un éclat brillant et presque sirupeux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont blonds pâles ou translucides — doux mais plats, sans profondeur. La soupe sera mince et unidimensionnelle.",
            "action": "Continuer la cuisson à feu moyen-doux, en remuant plus fréquemment pour éviter de coller. Ajouter une éclaboussure d'eau si le fond s'obscurcit trop vite."
          },
          {
            "state": "Perfect",
            "description": "Deep amber-mahogany, confiture, et parfumé. Ils s'accrochent à la cuillère comme la marmelade et le fond du pot est recouvert d'un fond sombre.",
            "action": "Déglacer immédiatement avec du vin blanc et racler chaque peu d'affection."
          },
          {
            "state": "Overdone",
            "description": "Mors noirs visibles; odeur vive et acride brûlée. Les oignons ont un goût amer plutôt que sucré.",
            "action": "Jeter si vraiment brûlé. Si juste très sombre et légèrement amer, procéder et ajouter une petite pincée de sucre au stock pour équilibrer."
          }
        ]
      },
      "feelCue": "Une cuillère en bois traînée dans le pot devrait laisser un sentier qui se remplit lentement, comme une épaisse confiture — les oignons n'ont plus de résistance structurelle."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "caramelized_onions",
        "ing_03",
        "ing_07"
      ],
      "outputState": "deglazed_onion_base",
      "instructions": "Verser le vin blanc et racler vigoureusement avec une cuillère en bois pour soulever tout le fond brun du fond du pot. Ajouter les brins de thym. Laissez le vin diminuer jusqu'à ce que presque complètement absorbé, environ 3-4 minutes — vous devriez entendre un étourdissement agressif qui se fane à une bulle tranquille.",
      "visualCue": {
        "primaryTarget": "Le vin s'est réduit à presque rien et les oignons sont à nouveau brillants et sombres, maintenant parfumés avec du vin réduit et des herbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore très liquide et pâle; le fond n'a pas complètement levé. Le mélange a l'air aqueux.",
            "action": "Continuer à réduire à feu moyen, en remuant fréquemment pour empêcher les oignons de prendre."
          },
          {
            "state": "Perfect",
            "description": "Le vin est réduit à un glaçage. Le fonds est entièrement incorporé. Les oignons semblent brillants et légèrement épaississants. L'odeur est ronde et complexe.",
            "action": "Ajouter le bouillon de boeuf et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Les oignons se collent à nouveau et le vin s'est complètement évaporé, laissant le mélange sec.",
            "action": "Ajouter immédiatement le bouillon de boeuf pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "La vapeur à ce stade sent vif et vineux, puis passe à un arôme plus doux et plus rond que l'alcool brûle."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "deglazed_onion_base",
        "ing_04"
      ],
      "outputState": "onion_soup",
      "instructions": "Verser le bouillon de boeuf et laisser mijoter. Cuire à découvert pendant 20 minutes, permettant à la douceur de l'oignon et à la profondeur du stock de fondre. Boucher et assaisonner avec du sel et du poivre. Des poissons sur les tiges de thym.",
      "visualCue": {
        "primaryTarget": "Une soupe foncée brun-ambre avec une surface légèrement chatoyante et des brins d'oignon visibles à travers – riche mais limpide, pas trouble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les goûts de soupe d'éléments séparés — le stock de boeuf et les oignons doux ne se sont pas unifiés. La surface semble plate.",
            "action": "Laisser mijoter encore 10 minutes pour encourager l'intégration."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon unifié et profondément salé avec douceur en dessous. La couleur est claire et sombre. Les goûts comme les oignons et le stock sont inséparables.",
            "action": "Déposer dans des crevettes sans danger au four et passer à la gratinée."
          },
          {
            "state": "Overdone",
            "description": "La soupe a considérablement diminué et a un goût très salé; la surface peut sembler sirupeuse.",
            "action": "Ajouter une éclaboussure d'eau chaude ou de bouillon non salé pour corriger; réassaisonner."
          }
        ]
      },
      "feelCue": "Goûtez à l'extrémité d'une cuillère — elle doit être à la fois douce, salée et pleine, sans bords rudes ou tranchants."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "onion_soup",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_soupe_a_loignon",
      "instructions": "Placer la soupe chaude dans des crevettes sans danger au four sur une plaque de cuisson. Flotter une ou deux tranches de baguette grillées sur chaque surface. Pile le Gruyère généreusement sur le pain et la jante – le fromage doit recouvrir complètement la surface et draper sur le bord de chaque crevette. Faire griller sur la grille du haut pendant 4 à 6 minutes jusqu'à ce que le fromage soit profondément doré, bouillonnant et tacheté de blisters bruns.",
      "visualCue": {
        "primaryTarget": "Une croûte de fromage doré, blister et dorée, scellée au bord de la croûte, avec une soupe ambre bouillonnant à travers toutes les fissures aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage est fondu mais pâle et blanc, sans couleur. Aucune croûte ne s'est formée.",
            "action": "Retourner à la grille pour 2 à 3 minutes de plus. Déplacez les crocs plus près de l'élément."
          },
          {
            "state": "Perfect",
            "description": "Croûte dorée profonde avec des taches plus foncées, scellées sur le bord. La soupe bouillonne audiblement aux bords. Le fromage tire en longs brins quand une cuillère casse la surface.",
            "action": "Servir immédiatement — les crevettes sont extrêmement chaudes."
          },
          {
            "state": "Overdone",
            "description": "Le fromage est brun foncé et carbonisé en patchs. Ça sent amer. Le pain en dessous peut avoir durci jusqu'à un croustillant.",
            "action": "Enlevez les taches brûlées. La soupe est encore bonne, servez avec prudence."
          }
        ]
      },
      "feelCue": "Lorsque vous traversez la croûte à l'aide d'une cuillère, une poussée de vapeur piégée devrait s'échapper avec un sifflement faible — la soupe sous laquelle elle est encore furieusement chaude."
    }
  ]
};
