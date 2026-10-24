export default {
  "repoId": "master_russian_honeycake_001",
  "parentRepoId": null,
  "slug": "honey-cake",
  "author": "ForkRecipe Kitchen",
  "title": "Cake au miel de Medovik",
  "description": "Le gâteau russe en couches de rondelles d'éponge minces, dorées et kissées de miel, chacune adoucie toute la nuit sous le poids d'un glaçage acidulé à la crème aigre qui fusionne les couches en un tout unique, harmonieux et tendre.",
  "cuisine": "Russe",
  "culture": "Europe orientale",
  "category": "desserts",
  "tags": [
    "desserts",
    "Russe",
    "Europe orientale",
    "Chérie",
    "en couches",
    "gâteau",
    "medovik"
  ],
  "difficulty": 2,
  "activeTime": "60 min",
  "totalTime": "12 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Miel (noir, aromatique)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "miel de sarrasin",
        "miel d'acacia"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Bicarbonate de soude",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine pure",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème aigre pleine graisse",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre glacé (pour le gel)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "honey_batter",
      "instructions": "Dans un bain-marie (boulon résistant à la chaleur sur de l'eau mijotée), mélanger le miel, le sucre et le beurre. Incorporer jusqu'à ce qu'il soit fondu et combiné. Retirer brièvement du feu et fouetter rapidement les œufs. Retourner au bain-marie et fouetter dans le bicarbonate de soude — le mélange moussera de façon spectaculaire et triplera à peu près en volume, devenant pâle et aéré. Continuer à remuer sur le feu pendant 5-7 minutes jusqu'à ce que le mélange approfondisse en couleur jusqu'à ce qu'il soit riche en ambre.",
      "visualCue": {
        "primaryTarget": "Une mousse jaune-auto, triple en volume, qui a visiblement obscurci par la caramélisation douce du miel et du sucre, la couleur du thé fort.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mousse est encore en or pâle et à peine foncée. Goûte cru et sucré sans profondeur.",
            "action": "Continuer la cuisson sur le bain-marie. La réaction de Maillard a besoin de temps, l'assombrissement est essentiel pour la saveur."
          },
          {
            "state": "Perfect",
            "description": "Couleur ambre-caramel profonde, mousse épaisse qui tient son volume. Des odeurs de caramel, de caramel et de miel chaud. Le volume a commencé à se stabiliser légèrement.",
            "action": "Retirer du feu et plier immédiatement dans la farine."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, odeur amère, la mousse s'est effondrée. Le miel a trop caramélisé.",
            "action": "Retirer du feu. Les couches auront plus d'amertume, ce qui peut être agréable — goût avant de procéder."
          }
        ]
      },
      "feelCue": "Sentez profondément la mousse — elle devrait sentir le caramel chaud et le miel, comme une maison de pain d'épice. S'il sent plat et doux sans complexité, il n'a pas cuit assez longtemps."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "honey_batter",
        "ing_06"
      ],
      "outputState": "honey_dough",
      "instructions": "Pliez la farine dans le mélange de miel chaud en deux ajouts, en remuant jusqu'à ce qu'une pâte douce et collante se forme. S'avérer sur une surface légèrement farinée. La pâte sera chaude et souple. Divisez en boules égales de 8 à 10, enveloppez le film de collage et reposez-vous pendant 20 minutes. Les entreprises de pâte comme il refroidit et devient beaucoup plus facile de travailler avec.",
      "visualCue": {
        "primaryTarget": "Une pâte chaude, de couleur ambre, laquée mais maniable, qui s'éloigne du bol proprement mais qui colle légèrement à la main.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop collant à manier — il s'accroche à tout. Ne peut être formé en boules sans farine extensive.",
            "action": "Ajouter 20-30 g de farine de plus, un peu à la fois, bien mélanger entre les ajouts."
          },
          {
            "state": "Perfect",
            "description": "Une pâte chaude, dorée, douce. Tacky mais maniable avec des mains légèrement farinées. Ça tient une forme de boule. Ça sent le miel.",
            "action": "Divisez et reposez-vous sous le film de collage."
          },
          {
            "state": "Overdone",
            "description": "La toux est raide et a perdu de l'élasticité. Difficile à rouler mince.",
            "action": "Laissez la pâte reposer plus longtemps à la température ambiante — la chaleur va la détendre."
          }
        ]
      },
      "feelCue": "La pâte chaude doit se sentir comme de la pâte à pain chaude, mais plus sucrée et plus productive — elle tire sur vos doigts doucement plutôt que de se casser en arrière."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "honey_dough"
      ],
      "outputState": "baked_layers",
      "instructions": "Rouler chaque boule de pâte à un cercle très mince (2 mm) directement sur du papier parchemin — tracez une plaque de 20 cm et des garnitures pour obtenir des rondes précises. Cuire sur le parchemin à 180 C (350 F) pendant 5-7 minutes par couche. Ils font cuire très rapidement — surveillent de près. Les couches sont faites quand elles sont uniformément dorées et juste fermes au toucher. Refroidir complètement sur un rack.",
      "visualCue": {
        "primaryTarget": "Disques dorés, minces et légèrement mats, avec de petites bulles à travers la surface. Ils ferment et craquent comme ils refroidissent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, doux, plier sans craquer. Toujours flexible quand chaud.",
            "action": "Retournez encore 2 minutes. Une couche sous-cuite sera gommée et n'absorbera pas correctement la crème."
          },
          {
            "state": "Perfect",
            "description": "L'ambre doré, qui tient sa forme à plat, a quelques bulles cloquées. Snaps propre quand complètement frais. Des odeurs de biscuits et de miel.",
            "action": "Refroidir complètement avant de monter."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé aux bords, très raide, odeur amère.",
            "action": "Utiliser de toute façon — tailler les bords sombres avec des ciseaux. La réfrigération de nuit radoucira considérablement l'amertume."
          }
        ]
      },
      "feelCue": "Une couche refroidie doit se casser proprement lorsqu'elle est cassée — croustillante comme un biscuit digestif — et se dissoudre sur la langue avec chaleur et miel."
    },
    {
      "nodeId": "step_4",
      "action": "Whip",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "sour_cream_frosting",
      "instructions": "fouetter la crème aigre froide avec le sucre glaçant et la vanille jusqu'à ce qu'elle soit juste combinée et légèrement épaissie. N'écrasez pas — le givrage devrait être épais mais encore extensible. Goûtez et ajustez la douceur. Conserver au réfrigérateur jusqu'à ce que nécessaire.",
      "visualCue": {
        "primaryTarget": "Une crème épaisse, blanche, légèrement lustrée qui tient sa forme sur une cuillère mais se dépose lentement — beaucoup plus épaisse que la crème acide liquide, légèrement plus lâche que la crème fouettée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours très versable, ne tient aucune forme, s'épuisera d'entre les couches.",
            "action": "fouetter un peu plus à vitesse moyenne et réfrigérer pendant 20 minutes pour fermer."
          },
          {
            "state": "Perfect",
            "description": "Tient un pic doux, descend lentement de la cuillère, enrobe épais. Goûte sucrée, acidulée et crémeuse.",
            "action": "Utilisation pour montage."
          },
          {
            "state": "Overdone",
            "description": "Graineux et caillé: la crème surmélangée se sépare en lactosérum.",
            "action": "Ne peut pas être complètement sauvé; plier dans une cuillère à soupe fraîche de crème aigre pour lisser légèrement."
          }
        ]
      },
      "feelCue": "Étendre un peu sur le dos de votre main — il devrait se sentir frais, dense, et légèrement résistant, comme le yaourt épais froid, pas aqueux."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "baked_layers",
        "sour_cream_frosting"
      ],
      "outputState": "finished_honey_cake",
      "instructions": "Étendre une généreuse couche de crème sure givrée sur chaque disque, empilant toutes les couches. Appliquer le gel sur les côtés et le dessus du gâteau assemblé. Écraser une ou deux de ces couches découpées en fines miettes et appuyer sur les côtés et en haut comme décoration. Réfrigérer pendant au moins 8 heures — la nuit est idéale. La magie est dans ce reste : les couches croustillantes absorbent la crème et se transforment en quelque chose d'impossiblement doux.",
      "visualCue": {
        "primaryTarget": "Un grand cylindre uniforme entièrement recouvert de crème pâle et de miettes de biscuits dorés, avec des couches de niveau parfaites visibles lorsque le côté est pressé doucement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches sont encore fermes et craquelées lorsqu'elles sont pressées dans le gâteau. Le gel n'a pas eu le temps de les adoucir.",
            "action": "Réfrigérer pendant 8 heures. La patience est tout — ce gâteau n'est pas comestible avant de reposer."
          },
          {
            "state": "Perfect",
            "description": "Lorsqu'elles sont coupées, les couches sont indissociables du givrage: chacune a absorbé la crème pour former un corps unique, soyeux et uniforme. Le gâteau tremble légèrement lorsque l'assiette est tapée.",
            "action": "Couper avec un couteau chaud et sec pour des portions propres."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures au réfrigérateur : le glaçage a pleuré et le gâteau est très humide et presque pudding-like.",
            "action": "Toujours délicieux — il suffit de servir dans des bols profonds plutôt que comme une tranche traditionnelle."
          }
        ]
      },
      "feelCue": "Couper dans le gâteau reposé et le couteau doit glisser à travers avec presque aucune résistance — les couches ayant dissout dans la crème si complètement que la tranche entière donne comme une seule."
    }
  ]
};
