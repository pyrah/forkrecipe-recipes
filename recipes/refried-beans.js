export default {
  "repoId": "master_mexican_refried-beans_001",
  "parentRepoId": null,
  "slug": "refried-beans",
  "author": "ForkRecipe Kitchen",
  "title": "Haricots noirs refusés",
  "description": "Frijoles refritos de la cuisine Oaxacan — haricots noirs mijotés jusqu'à ce qu'ils se rendent, puis massés en saindoux avec de l'oignon jusqu'à ce qu'ils forment une pâte veloutée et salée qui tient une cuillère droite.",
  "cuisine": "Mexicain",
  "culture": "Oaxacan",
  "category": "grains",
  "tags": [
    "haricots",
    "Mexique",
    "oaxacan",
    "side-dish",
    "confort"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "3 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-18",
  "updatedAt": "2024-12-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Haricots noirs séchés",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots pinto"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (ou huile végétale)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait de bacon",
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (en dés pour le bouillon)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Épazote (frais ou secs)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Origan mexicain"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Eau",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mijoter les haricots",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "cooked_beans",
      "instructions": "Rincer les haricots et les déposer dans une grande casserole avec de l'eau, de l'oignon coupé et de l'épazote. Porter à ébullition, puis laisser mijoter. Cuire à découvert pendant 2 à 2,5 heures, en ajoutant de l'eau chaude au besoin pour maintenir les haricots immergés. Ne salez pas avant les 30 dernières minutes — le sel précoce durcit les peaux. Les haricots sont faits quand ils écrasent sans effort entre vos doigts.",
      "visualCue": {
        "primaryTarget": "Les haricots sont uniformément violet-noir foncé, gonflés à deux fois leur taille sèche, avec des peaux intactes mais tendres. Le liquide de cuisson est épais, sombre et enky — presque comme un café fort.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont fermes, craies au centre quand mordus. Les peaux sont durs. Le liquide de cuisson est mince et aqueux.",
            "action": "Continuez à mijoter. Ajouter plus d'eau chaude si le niveau a baissé. L'altitude, l'âge des haricots et la dureté de l'eau affectent le temps."
          },
          {
            "state": "Perfect",
            "description": "Les haricots s'écrasent entre le pouce et le doigt sans résistance. Une cuillerée machette facilement contre le côté du pot. Le papillon est visqueux, sombre et aromatisé par les haricots.",
            "action": "Réservez le liquide de cuisson. Égoutter les haricots."
          },
          {
            "state": "Overdone",
            "description": "Les haricots s'ouvrent et tombent dans le bouillon. La casserole est plus pâte que les haricots.",
            "action": "En fait, c'est bien pour les haricots refried — vous avez une longueur d'avance sur l'échouement. Aller directement à la friture."
          }
        ]
      },
      "feelCue": "Faites passer un haricot et pressez - le entre vos doigts — il devrait squash avec une résistance nulle, comme presser une mûre. Le bouillon doit sentir profondément terre, comme le sol humide après la pluie."
    },
    {
      "nodeId": "step_2",
      "action": "Graisse tendre",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "flavored_fat",
      "instructions": "Chauffer le saindoux dans une poêle large et lourde à feu moyen. Quand il mijote, ajouter l'oignon en dés. Cuire en remuant occasionnellement jusqu'à ce que l'oignon soit doux, doré et doux — environ 8 minutes. La graisse aromatisée à l'oignon est le fondement de la richesse des haricots refried.",
      "visualCue": {
        "primaryTarget": "L'oignon coupé est translucide et doré aux bords, assis dans un saindoux odorant et chatoyant. La poêle sent doux et porcin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et croquant. Lard n'est pas entièrement rendu et a des patchs solides.",
            "action": "Baisser la chaleur et continuer — l'oignon doit transpirer doucement, pas frire."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est doux, doré et sucré. La boue est entièrement liquide, limpide et parfumée. Quelques bords caramélisés sur l'oignon ajoutent de la profondeur.",
            "action": "Commencez à ajouter des haricots."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est brun foncé ou brûlé. Lard sent l'acride. Des morceaux noirs collés à la poêle.",
            "action": "Recommencer avec du saindoux frais et de l'oignon. L'allium brûlé rendra tout le plat amer."
          }
        ]
      },
      "feelCue": "Le saindoux doit s'étourdir doucement, pas sauter. Si la graisse éclabousse, la chaleur est trop élevée. La cuisine devrait sentir la maison d'une grand - mère mexicaine — chaude, porcine et sucrée."
    },
    {
      "nodeId": "step_3",
      "action": "Mash",
      "inputs": [
        "cooked_beans",
        "flavored_fat"
      ],
      "outputState": "mashed_beans",
      "instructions": "Ajouter les haricots cuits dans la poêle en lots, en les massant dans le mélange de gras d'oignon avec une maseuse de pommes de terre ou l'arrière d'une grande cuillère en bois. Ajouter les éclaboussures du bouillon de haricots réservé pour maintenir le mélange humide. Travaillez en lots — alevons, mash, ajoutez plus de haricots. Les haricots devraient frire et frire en purée, et pas seulement être remués.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et sombre qui tient une crête lorsqu'elle est traînée avec une cuillère. Certains morceaux de haricots entiers restent pour la texture. La surface scintille avec la graisse rendue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mouilleux et humide — plus comme un ragoût de haricots rugueux qu'une pâte. Les haricots ne sont pas frits, juste assis dans du liquide.",
            "action": "Augmenter légèrement la chaleur et écraser de façon plus agressive. Laisser le liquide cuire avant d'ajouter plus de haricots."
          },
          {
            "state": "Perfect",
            "description": "Une pâte épaisse et extensible qui s'éloigne de la poêle en masse. Glisser avec du gras. Certains haricots entiers visibles mais la majorité est une purée crémeuse et unifiée.",
            "action": "Assaisonner et ajuster la consistance."
          },
          {
            "state": "Overdone",
            "description": "Séché et émietté. Se tenir à la casserole. Pas d'éclat — la graisse a été absorbée ou évaporée.",
            "action": "Ajouter le bouillon de haricots réservé une cuillère à soupe à la fois et remuer jusqu'à ce que la pâte soit à nouveau humide."
          }
        ]
      },
      "feelCue": "Le son est la clé — vous devriez entendre un bouillonnement constant et épais, comme des pots de boue dans un champ géothermique. Chaque mash doit répondre à la résistance, puis céder. Si la cuillère bouge librement, elle est trop humide. Si elle colle, ajouter le bouillon."
    },
    {
      "nodeId": "step_4",
      "action": "Saison et fin",
      "inputs": [
        "mashed_beans",
        "ing_05"
      ],
      "outputState": "finished_refried_beans",
      "instructions": "Assaisonner de sel au goût. Continuer la cuisson à feu moyen-doux, en remuant constamment, pendant encore 3-5 minutes. Les haricots se serreront et deviendront brillants. Ils devraient être assez épais pour tenir une cuillère droite, mais encore extensibles, comme le beurre d'arachide. Régler avec le bouillon de haricots si trop épais.",
      "visualCue": {
        "primaryTarget": "Une pâte foncée, brillante et voluptueuse qui fond lentement en cuillère et tient sa forme. La surface est satinée par la graisse. Une cuillère se tient brièvement debout avant de sombrer lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours soupeux et lâche. Il glisse sur une cuillère inclinée. Pas d'éclat.",
            "action": "Continuer la cuisson à feu moyen, en remuant constamment. L'excès d'humidité doit s'évaporer."
          },
          {
            "state": "Perfect",
            "description": "Sensé, brillant et riche. Prend une forme sur la plaque. Une traînée de la cuillère laisse un sentier propre qui se remplit lentement. Arôme profond et salé.",
            "action": "Servir immédiatement, ou garder au chaud avec une pellicule de bouillon sur la surface pour empêcher une peau de se former."
          },
          {
            "state": "Overdone",
            "description": "Surface sèche et craquée. Éloignez-vous de la poêle en morceaux raides. Ça a un goût crayeux.",
            "action": "Incorporer le bouillon de haricots et un petit bouton de saindoux. Battre vigoureusement — la pâte peut être ravivée."
          }
        ]
      },
      "feelCue": "Goûtez les haricots — ils devraient envelopper votre palais d'une richesse veloutée, puis laisser place à une saveur profonde et terreuse avec un murmure de graisse de porc. S'ils ont le goût plat, ils ont besoin de plus de sel. S'ils se sentent gritty sur la langue, ils n'ont pas été suffisamment massés."
    }
  ]
};
