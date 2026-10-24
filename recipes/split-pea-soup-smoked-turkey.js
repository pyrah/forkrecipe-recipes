export default {
  "repoId": "master_american_splitpeasoupsmokedturkey_001",
  "parentRepoId": null,
  "slug": "split-pea-soup-smoked-turkey",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de pois fendue avec la dinde fumée",
  "description": "Des pois verts fendus mijotés d'une jambe de dinde fumée jusqu'à ce qu'ils s'effondrent dans une soupe épaisse, terreuse, jade-verte, parsemée de carottes et tirée de viande fumée et illuminé par une éclaboussure de vinaigre.",
  "cuisine": "Américain",
  "culture": "Cuisine à la maison Heartland",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "Soupe",
    "congélateur",
    "pois fendus",
    "Turkey fumé",
    "légumineuses",
    "gros lot"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "2 hr",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre ou huile d'olive non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune en dés",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Carottes coupées en dés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Céleri en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Pois fendus verts, ramassés et rincés",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": [
        "pois fendus jaunes"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Jambe ou ailes de dinde fumée",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "jambon fumé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 2250,
      "defaultUnit": "ml",
      "substitutions": [
        "à moitié d'eau, à moitié de poulet à faible teneur en sodium"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuilles de laurier séchées",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 3,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1/2 c. à soupe de thym séché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel casher (ajouter seulement à la fin)",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron",
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Persil à feuilles plates, haché et croûtons",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "sweated_vegetables",
      "instructions": "Faire fondre le beurre dans une casserole de 6 litres à feu moyen. Ajouter l'oignon, la carotte et le céleri et cuire de 8 à 10 minutes, en remuant occasionnellement, jusqu'à ce que l'oignon soit doux et translucide. Ajouter l'ail et cuire 1 minute. Ne salez pas encore — la dinde fumée assaisonnera la casserole.",
      "visualCue": {
        "primaryTarget": "Légumes doux et brillants avec l'oignon translucide et sans brunissement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Blanc d'oignon et ferme; carottes croquantes.",
            "action": "Cuire encore 2 à 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Oignon translucide et doux; carottes légèrement adoucies; arôme doux.",
            "action": "Ajouter les pois, la dinde et l'eau."
          },
          {
            "state": "Overdone",
            "description": "Légumes brunis aux bords.",
            "action": "Un peu de brunissement est bien; il ajoute de la profondeur. Abaissez la chaleur et avancez."
          }
        ]
      },
      "feelCue": "L'oignon doit s'écouler entre la cuillère et la casserole sans croquer."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "sweated_vegetables",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "simmered_split_peas",
      "instructions": "Ajouter les petits pois, la dinde fumée, l'eau, la baie, le thym et le poivre. Porter à ébullition, écrémer la mousse, puis réduire à mijoter doucement. Cuire partiellement couvert 1 h 15 min–1 h 30 min, en remuant le fond toutes les 15 minutes (puits cassés évier et cornichons), jusqu'à ce que les pois soient complètement décomposés et que la viande de dinde soit molle.",
      "visualCue": {
        "primaryTarget": "Pois dissous dans une soupe épaisse et verte d'olive; viande de dinde s'éloignant facilement de l'os.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pois encore entiers et distincts; liquide mince et aqueux.",
            "action": "Continuer à mijoter, en remuant plus souvent qu'il épaissit."
          },
          {
            "state": "Perfect",
            "description": "Les pois se sont effondrés dans une purée grossière qui enrobe une cuillère épaissement.",
            "action": "Retirer la dinde pour tirer la viande."
          },
          {
            "state": "Overdone",
            "description": "La soupe est d'épaisseur de pâte et de capture; taches brunes du fond.",
            "action": "Ne grattez pas. Transférer dans un pot propre, en laissant la couche brûlée, et ajouter l'eau chaude."
          }
        ]
      },
      "feelCue": "Mélanger du bas — la cuillère doit se déplacer à travers du velours épais, et non saisir sur une couche collante."
    },
    {
      "nodeId": "step_3",
      "action": "Déchiré et fini",
      "inputs": [
        "simmered_split_peas",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "finished_split_pea_soup",
      "instructions": "Élevez la dinde, la baie et les tiges de thym. Lorsque la dinde est assez fraîche pour être manipulée, tirez la viande dans des morceaux de morsure, jetant la peau, les os et les tendons minces, semblables à des aiguilles, dans la jambe. Pour une soupe plus douce, blitz brièvement avec un mélangeur d'immersion. Retournez la viande et ramenez-la à la mijoter pour que tout soit chaud (165°F / 74°C). Incorporer le vinaigre, puis assaisonner de sel seulement si nécessaire. Finis d'eau au goût. Servir avec du persil et des croûtons. Pour congeler : refroidir dans des récipients peu profonds, réfrigérer dans les 2 heures et congeler jusqu'à 3 mois. Il met presque solide à froid — ajoutez de l'eau en réchauffant, en remuant constamment.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse et vert jade avec des taches de carotte orange et des lambeaux de dinde fumée rose.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goût lourd et muté; texture granuleuse.",
            "action": "Ajouter quelques gouttes de vinaigre à la fois et mélanger brièvement pour obtenir une douceur."
          },
          {
            "state": "Perfect",
            "description": "Terreux, fumé, légèrement salé, avec un lifting lumineux à la fin; coule lentement d'une louche.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Trop salé d'une jambe fumée très salée.",
            "action": "Ajouter l'eau non salée et un cube de pomme de terre petite; laisser mijoter 15 minutes."
          }
        ]
      },
      "feelCue": "Verser une louche dans le pot — elle devrait tomber dans un ruban épais et lent et s'installer doucement, comme un porridge lâche."
    }
  ]
};
