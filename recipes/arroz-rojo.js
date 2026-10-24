export default {
  "repoId": "master_mexican_arroz_rojo_001",
  "parentRepoId": null,
  "slug": "arroz-rojo",
  "author": "ForkRecipe Kitchen",
  "title": "Arroz Rojo (riz rouge mexicain)",
  "description": "L'indispensable plat d'accompagnement du Mexique — riz à grains longs grillé à l'huile jusqu'à ce que chaque grain devienne blond pâle, puis mijoté dans une tomate mélangée, l'ail et la sauce à l'oignon jusqu'à ce que les grains soient individuellement rouge corail, moelleux et séparés, parfumés de cumin.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "grains",
  "tags": [
    "Mexique",
    "riz",
    "side-dish",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz blanc à grains longs",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "grain moyen pour un résultat légèrement plus collant"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Tomates plumées",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": [
        "tomates concassées en conserve de 200 ml"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, quart",
      "ratioValue": 0.25,
      "defaultUnit": "whole",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Bouillon de poulet ou de légumes",
      "ratioValue": 600,
      "defaultUnit": "ml",
      "substitutions": [
        "eau plus 1 c. à thé bouillon poudre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Le chile de Serrano",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "jalapeño pour moins de chaleur",
        "omit pour léger"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Carotte, pelée et coupée en dés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Pois congelés",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pois frais",
        "Maïs décortiqué"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile végétale",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de tournesol",
        "saindoux pour une saveur plus traditionnelle"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "tomato_puree",
      "instructions": "Mélanger les tomates, l'ail et le quart d'oignon dans un mélangeur avec 100 ml de bouillon et blitz à une purée complètement lisse. Vous devez avoir environ 350 ml de liquide. La purée brute sera rouge-orange vif ; elle s'approfondira pendant la cuisson. Mettez de côté.",
      "visualCue": {
        "primaryTarget": "Un liquide doux, rouge-orange vif, sans morceaux visibles de tomate, des graines cassées, la consistance de la sauce fine aux pâtes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux d'oignon ou de peau de tomate sont encore visibles flottant dans la purée.",
            "action": "Mélanger encore 30 secondes et passer à travers un tamis grossier si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Uniformement lisse et versable, légèrement orange-rose. Ça sent la tomate crue et l'ail.",
            "action": "Mettez de côté — il va dans le riz après l'étape de toast."
          },
          {
            "state": "Overdone",
            "description": "La purée a été mélangée si longtemps qu'elle est chaude et mousseuse.",
            "action": "Qu'elle se contente d'ajouter un instant — aucun mal réel."
          }
        ]
      },
      "feelCue": "Plongez un doigt et goûtez à la purée crue – elle devrait goûter vifment de la tomate fraîche avec une bouchée d'ail pointue. Cette crudité fera cuire dans la douceur."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "ing_09",
        "ing_01"
      ],
      "outputState": "toasted_rice",
      "instructions": "Chauffer l'huile dans une grande casserole à fond lourd ou dans un four hollandais à feu moyen-vif jusqu'à ce qu'elle mijote. Ajouter le riz sec (non rincé) tout à la fois et remuer constamment avec une cuillère en bois pendant 4-6 minutes. Les grains vont progressivement passer du blanc au blond pâle, puis à une couleur dorée chaude. Ne t'en va pas — le toast est ce qui maintient les grains de riz mexicains séparés plutôt que d'empiler. La chambre se remplira d'un arôme de popcorn noisette.",
      "visualCue": {
        "primaryTarget": "Les grains sont uniformément dorés pâles — la couleur des graines de sésame crues — et certains commencent à montrer de légers bords de bronzage. La casserole sent la chaleur sèche et noisette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont toujours blancs crayeux et opaques sans changement de couleur. Ils sentent l'amidon cru.",
            "action": "Continuez à remuer sur le feu — le toast empêche le riz fini d'être gommé et pâteux."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont uniformément dorés avec des bords légèrement plus foncés. Ils battent et sifflent et sentent le pop-corn chaud et la noix.",
            "action": "Ajouter la carotte coupée en dés et le serrano, remuer pendant 30 secondes, puis verser dans la purée de tomate — il éclaboussera, alors reculez."
          },
          {
            "state": "Overdone",
            "description": "Plusieurs grains sont devenus brun foncé et l'odeur de l'amidon brûlé.",
            "action": "Réduire immédiatement la chaleur. Quelques grains foncés sont fins; si la majorité d'entre eux sont bruns, jetez et recommencez — le riz brûlé aura un goût amer."
          }
        ]
      },
      "feelCue": "Secouez la marmite et écoutez — les grains grillés se déchirent et scatter librement, tandis que le riz n'est pas mangé est lourd et calme. Le poids de la casserole est plus léger que l'humidité."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "toasted_rice",
        "tomato_puree",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_10",
        "ing_11"
      ],
      "outputState": "cooking_rice",
      "instructions": "Ajouter la carotte et le piment serrano au riz grillé et remuer pendant 30 secondes. Verser dans la purée de tomate — elle siffle et éclabousse lorsqu'elle touche l'huile chaude — et remuer immédiatement pour enrober tous les grains. Ajouter le bouillon restant, le cumin et le sel. Porter à ébullition, en remuant une fois, puis réduire au plus bas feu possible, couvrir soigneusement et cuire pendant 18 à 20 minutes.",
      "visualCue": {
        "primaryTarget": "Comme le bouillon est absorbé le riz doit être à la vapeur, la couleur se transformant du rouge vif à un profond corail-orange que chaque grain boit dans la sauce tomate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 18 minutes, le couvercle affiche encore une forte condensation et le bouillon est visible bouillonnant dans le pot.",
            "action": "Resceller et cuire de 3 à 5 minutes de plus sur le feu le plus bas."
          },
          {
            "state": "Perfect",
            "description": "La vapeur a cessé de monter sous le couvercle. Lorsque vous soulevez soigneusement un coin, le liquide est absorbé et les grains semblent gonflés et séparés, corallien-rouge profond.",
            "action": "Retirer du feu et laisser reposer sans ouverture pendant 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Une odeur brûlée se lève et vous pouvez entendre craquer du fond. Le couvercle est sec.",
            "action": "Retirer immédiatement du feu. La couche inférieure peut être croustillante, la racler et servir le reste, ce qui sera probablement bien."
          }
        ]
      },
      "feelCue": "Au moment où le bouillonnement rapide sous le couvercle se calme à un sifflement parfois doux, le riz est presque fait — c'est le bruit de vapeur remplaçant le liquide comme le transfert de chaleur dominant. Fais-le confiance."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "cooking_rice",
        "ing_08"
      ],
      "outputState": "finished_arroz_rojo",
      "instructions": "Retirer du feu. Éparpiller les pois congelés sur la surface, les recouvrir et laisser reposer 5 minutes — la vapeur résiduelle dégelera et réchauffera les pois sans les faire bouillir. Ensuite, utilisez une fourchette pour glisser doucement des bords vers l'intérieur, en écartant les grains. Retirer le piment serrano avant de servir si désiré. Goûtez au sel.",
      "visualCue": {
        "primaryTarget": "Grains individuels rouge corail, entièrement séparés et légèrement brillants, avec des pois vert vif répartis dans des taches de carottes visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains grains sont encore entassés et les pois sont encore congelés au centre.",
            "action": "Ajouter 2 cuillerées à soupe d'eau autour des bords, recouvrir et revenir à la chaleur la plus basse pendant 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est individuel, profondément coloré et entièrement cuit sans centre brut. Les pois sont vert vif et juste tendre. Le riz sent le cumin, la tomate et la chaleur.",
            "action": "Servir immédiatement aux côtés des haricots, des tacos ou de la viande grillée."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entassés ensemble et certains se sont cassés en fragments d'amidon. Les pois sont devenus kaki-drab.",
            "action": "Servir chaud — la saveur est toujours excellente même si la texture est plus douce que idéale."
          }
        ]
      },
      "feelCue": "Fourchez un petit monticule et sentez - le: les grains doivent se détacher des dents proprement, chacun distinct, avec juste assez d'humidité pour se sentir tendre sans aucun collant humide."
    }
  ]
};
