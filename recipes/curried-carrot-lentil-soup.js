export default {
  "repoId": "master_indian_curriedcarrotlentilsoup_001",
  "parentRepoId": null,
  "slug": "curried-carrot-lentil-soup",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de carotte séchée et de lentilles rouges",
  "description": "Les carottes douces et les lentilles rouges s'effondrent dans une purée veloutée, orangée au coucher du soleil, chauffée avec du gingembre et de l'épice au curry, puis s'achèvent avec du lait de coco et une forte pression de citron vert.",
  "cuisine": "Inspirés par les Indiens",
  "culture": "Cuisine maison moderne",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "Soupe",
    "congélateur",
    "végétalien",
    "lentilles",
    "Carotte",
    "curry",
    "gros lot"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre ou ghee",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "1/2 cumin moulu, ajouté avec la poudre de curry"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, haché",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et râpé",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre de curry légère",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "garam masala plus 1 c. à thé curcuma"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Carottes, pelées et tranchées en pièces",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "moitié de carottes, moitié de patate douce"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Lentilles rouges, rincées jusqu'à ce que l'eau soit claire",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "jaune fendue mung dal"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Matières végétales ou eau",
      "ratioValue": 1500,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Lait de coco, plein gras",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "yogourt simple mélangé dans chaque bol"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Jus de lime, frais",
      "ratioValue": 25,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Feuilles de cilantro et flocons de chili",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": [
        "Graines de citrouille grillées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Epices de fleurs",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "spiced_onion_base",
      "instructions": "Chauffer l'huile dans une casserole de 5 à 6 litres à feu moyen. Ajouter les graines de cumin et laisser s'assombrir de 20 à 30 secondes jusqu'à ce qu'elles s'assombrissent. Ajouter l'oignon avec une pincée de sel et cuire de 7 à 8 minutes jusqu'à ce qu'il soit doux et doré aux bords. Incorporer l'ail, le gingembre et la poudre de curry et cuire 60 secondes en remuant constamment.",
      "visualCue": {
        "primaryTarget": "Oignon doré enduit d'une pâte jaune curcuma qui sent le toast et le doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La poudre de curry semble encore poussiéreuse et sèche; odeur d'épices crues et crayeuses.",
            "action": "Ajouter une cuillère d'huile et remuer de 20 à 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Les épices se sont tournées vers une pâte brillante qui s'accroche à l'oignon; l'arôme est chaud et arrondi.",
            "action": "Ajouter immédiatement les carottes, les lentilles et le liquide."
          },
          {
            "state": "Overdone",
            "description": "La pâte est brun foncé et collante, avec une odeur amère et brûlée.",
            "action": "Déglacer immédiatement avec une louche de stock. Si elle a un goût acride, recommencez la base."
          }
        ]
      },
      "feelCue": "Écoutez : les graines de cumin devraient craquer comme de la pluie légère ; si elles se taisent et fument, l'huile était trop chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_onion_base",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tender_carrot_lentils",
      "instructions": "Ajouter les carottes, les lentilles et le stock. Porter à ébullition, écrémer toute mousse, puis laisser mijoter partiellement 25 à 30 minutes, en remuant le fond si souvent (les lentilles rouges coulent et s'attrapent), jusqu'à ce que les carottes soient complètement tendres et que les lentilles se soient dissoutes.",
      "visualCue": {
        "primaryTarget": "Les lentilles ont disparu dans un bouillon d'or épais; les carottes sont suffisamment douces pour écraser la paroi du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles tiennent toujours leur forme de lentille; les pièces de carottes ont un noyau ferme.",
            "action": "Laisser mijoter 5 à 10 minutes de plus, en ajoutant de l'eau si le pot devient épais."
          },
          {
            "state": "Perfect",
            "description": "Les lentilles ont fondu en bouillie; une pièce de carotte s'écrase sous la cuillère sans résistance.",
            "action": "Mélanger."
          },
          {
            "state": "Overdone",
            "description": "Lentilles ont pris et bruni sur le fond; faible odeur brûlée.",
            "action": "Ne grattez pas. Verser la soupe dans un pot propre, laissant la couche coincée derrière."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère sur le fond du pot — il devrait glisser, ne pas saisir sur une couche collante."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange et saison",
      "inputs": [
        "tender_carrot_lentils",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_carrot_lentil_soup",
      "instructions": "Purée avec un mélangeur d'immersion jusqu'à ce qu'elle soit complètement lisse (ou mélangée en lots, remplissant le bocal à moitié plein et aspirant le couvercle). Incorporer le lait de coco et le réchauffer sans bouillir. Ajouter le jus de lime et le sel au goût — habituellement 1,5–2 c. à thé. Finissez avec de l'eau à une consistance versable. Garnir de coriandre et de flocons de chili. Pour congeler : refroidir dans des récipients peu profonds, réfrigérer dans les 2 heures et congeler jusqu'à 3 mois. Il se met en place épais lorsqu'il est froid; desserrer avec de l'eau en réchauffant et ajouter de la chaux fraîche.",
      "visualCue": {
        "primaryTarget": "Soupe orangée et brillante qui coule dans un ruban épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des flecks de carottes et une texture granuleuse; des stries de lait de coco.",
            "action": "Mélanger encore une minute et remuer soigneusement."
          },
          {
            "state": "Perfect",
            "description": "Soie et uniforme, enrobant l'arrière d'une cuillère; brillant à la chaux, doux à la carotte.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Assez raide pour tenir une cuillère debout après être debout.",
            "action": "fouetter dans de l'eau chaude 100 ml à la fois et revenir à la saison avec du sel."
          }
        ]
      },
      "feelCue": "Sur la langue, il doit se sentir comme du velours sans grain; le gingembre doit réchauffer la gorge après avoir avalé."
    }
  ]
};
