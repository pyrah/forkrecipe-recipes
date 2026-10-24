export default {
  "repoId": "master_middleeastern_babaghanoush_001",
  "parentRepoId": null,
  "slug": "baba-ghanoush",
  "author": "ForkRecipe Kitchen",
  "title": "Baba Ghanoush",
  "description": "L'aubergine grillée à l'char a écopé de sa peau et battue avec du tahini, du citron et de l'ail dans une trempe fumée et soyeuse qui porte le fantôme du feu dans chaque bouchée.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "vegetables",
  "tags": [
    "lévantine",
    "Moyen-Orient",
    "aubergines",
    "trempette",
    "fumée",
    "végétalien",
    "meze"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Grandes aubergines (aubergines)",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Tahini (bien ciré)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "pul biber (poivre d'Alep)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "menthe fraîche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "charred_eggplant",
      "instructions": "Placer les aubergines entières directement sur un brûleur à gaz à haute flamme, ou aussi près que possible d'un grill ou d'un élément de grille très chaud. Char de tous les côtés, tournant avec des pinces toutes les 3-4 minutes, jusqu'à ce que tout l'extérieur soit noirci et que l'aubergine se soit complètement effondrée et se sente creuse. Cela prend 15-20 minutes au total. Plus la fumée est carbonisée, plus la fumée est profonde.",
      "visualCue": {
        "primaryTarget": "Toute la peau extérieure est noircie, papier et craquelée. L'aubergine s'est visiblement effondrée et dégonflée — elle semble vaincue, petite par rapport à l'endroit où elle a commencé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau n'est tachetée qu'avec de l'omble; l'aubergine est encore ferme et pleine lorsqu'elle est pressée. La chair intérieure sera fibreuse et aura un goût cru.",
            "action": "Continuer à carboniser au-dessus d'une flamme directe, tourner pour atteindre des taches non noircies."
          },
          {
            "state": "Perfect",
            "description": "Toutes les surfaces sont profondément noires et papiers. L'aubergine s'effondre complètement lorsqu'elle est levée, presque sans poids. Steam siffle des fentes dans la peau.",
            "action": "Transférer dans un bol couvert et vapeur pendant 10 minutes pour desserrer la peau."
          },
          {
            "state": "Overdone",
            "description": "La peau s'est entièrement brûlée; la chair est exposée et sèche sur la flamme.",
            "action": "Supprimer immédiatement et procéder. Certains cendres peuvent entrer dans la chair — le choisir pendant le scoop."
          }
        ]
      },
      "feelCue": "Pressez l'aubergine doucement à travers une serviette — il devrait se sentir comme un ballon dégonflé, doux et donnant partout, sans poches fermes de chair non cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "charred_eggplant"
      ],
      "outputState": "drained_eggplant_flesh",
      "instructions": "Placez les aubergines carbonisées dans une calandre sur un bol. Couvrez la calandre et laissez-les cuire 10 minutes, ce qui relâche la peau et permet à l'aubergine de libérer du liquide amer. Épluchez toute la peau carbonisée avec vos doigts, en travaillant avec soin pour enlever toute grande tache de noir. Jetez le liquide qui a été recueilli. Laisser la chair drainée s'asseoir encore 5 minutes pour verser plus de liquide.",
      "visualCue": {
        "primaryTarget": "Peau pâle, humide, parfumée à la fumée sans taches de peau noire restantes. La calandre contient un petit bassin de liquide sombre et amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau colle et déchire la chair; le liquide fonctionne toujours librement. La chair semble mouillée.",
            "action": "Donnez-lui plus de temps — la vapeur fonctionne toujours. Ne précipitez pas l'étape de vidange ou la trempette sera aqueuse."
          },
          {
            "state": "Perfect",
            "description": "La chair est soyeuse, beige gris pâle et cohésive. La plupart des liquides sont drainés. La peau s'éloigne complètement.",
            "action": "Transférer la chair dans un grand bol et procéder à la mastication."
          },
          {
            "state": "Overdone",
            "description": "La chair s'est séchée et devient fibreuse et s'assoie trop longtemps.",
            "action": "Continuez immédiatement — ajoutez immédiatement les tahini pour les lier et les humidifier avant qu'ils ne sèchent davantage."
          }
        ]
      },
      "feelCue": "La chair doit se sentir comme de la soie fraîche et humide entre vos doigts — douce et s'effondrer, avec des fibres à cordes occasionnelles provenant des cavités des graines."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "drained_eggplant_flesh",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_baba_ghanoush",
      "instructions": "À l'aide d'une fourchette ou d'un peste, écraser l'ail avec le sel dans une pâte lisse. Ajouter la chair et la purée d'aubergine à peu près — une certaine texture est la bienvenue. Battre dans le tahini et le jus de citron en alternant les additions, en dégustant au fur et à mesure. La trempette se serre et devient crémeuse à mesure que le tahini émulsifie avec l'aubergine. Ajustez le sel et le citron avec agressivité — il a besoin de plus que vous ne vous attendez. Transférer dans une assiette de service, faire un puits avec le dos d'une cuillère, arroser avec l'huile d'olive, la poussière avec le paprika, et disperser le persil.",
      "visualCue": {
        "primaryTarget": "Plongée crémeuse, gris colombe pâle, avec des fils d'aubergine visibles déchiquetés par la fumée. La surface prend la lumière avec un éclat d'huile d'olive pooling dans le puits central.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dip semble granuleux et séparé — le tahini n'a pas été incorporé; aubergines et graisses sont distinctes.",
            "action": "Battre plus vigoureusement avec une fourchette en coups circulaires, en ajoutant du jus de citron une cuillère à café à la fois."
          },
          {
            "state": "Perfect",
            "description": "Lisse et cohésive avec une légère texture grossière de l'aubergine. La trempette tient un tourbillon et la couleur est uniformément gris pâle sans stries foncées de tahini non mélangé.",
            "action": "Goûtez au sel et au citron — il devrait être brillant et affirmé. Plaque et bruine."
          },
          {
            "state": "Overdone",
            "description": "Sur-battez à une pâte complètement lisse et sans caractéristiques. Une partie du caractère rustique a été perdue.",
            "action": "Plier dans un petit morceau d'aubergine grossièrement purée pour restaurer la texture."
          }
        ]
      },
      "feelCue": "Le plongeon fini doit se sentir soyeux et substantiel sur une cuillère — il tient sa forme brièvement avant de s'étendre, comme une crème très épaisse. La fumée devrait frapper l'arrière de votre gorge d'abord, puis le citron, puis le sel."
    }
  ]
};
