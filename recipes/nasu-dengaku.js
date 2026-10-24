export default {
  "repoId": "master_japanese_nasudengaku_001",
  "parentRepoId": null,
  "slug": "nasu-dengaku",
  "author": "ForkRecipe Kitchen",
  "title": "Nasu Dengaku",
  "description": "Aubergines japonaises coupées torréfiés jusqu'à ce qu'elles soient fondues, puis glacées de miso blanc doux et caramélisées sous le gril à une finition laquée et amère.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "vegetables",
  "tags": [
    "Japonais",
    "aubergines",
    "miso",
    "glacé",
    "végétarien",
    "izakaya",
    "umami"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 0,
    "bitter": 2,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergines japonaises (nasu)",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "Aubergines chinoises"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Shiro miso blanc",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune doux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Échalote (oignon de printemps), tranché finement",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "ruches"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "roasted_eggplant",
      "instructions": "Préchauffer le four à 200°C (400°F). Coupez les aubergines dans le sens long. À l'aide d'un couteau tranchant, marquer la chair coupée dans un motif de coupe croisée profonde — coupe à environ 1,5 cm d'écart et 1 cm de profondeur — sans percer la peau. Badigeonner généreusement la chair marquée de l'huile de sésame. Placer le côté coupé sur un plateau de cuisson doublé et rôtir pendant 15 à 18 minutes jusqu'à ce que la chair soit complètement molle et que la peau commence à rider.",
      "visualCue": {
        "primaryTarget": "Faces coupées vers le bas; les moitiés d'aubergines se sont effondrées et la peau est visiblement ridée et s'éloigne de la chair. Lorsqu'elle est retournée, la chair a l'air d'or pâle et très douce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore tendue et l'aubergine tient sa forme arrondie. La chair résiste à une brochette.",
            "action": "Retourner au four 5 minutes de plus. L'intérieur doit être entièrement cuit avant le vitrage ou la texture sera spongieuse."
          },
          {
            "state": "Perfect",
            "description": "L'aubergine s'est effondrée; la peau est ridée. La chair marquée est d'or pâle et une brochette passe sans résistance. Le croisement s'est ouvert comme un ventilateur.",
            "action": "Faites glisser les moitiés et préparez la glaçure dengaku."
          },
          {
            "state": "Overdone",
            "description": "La chair est très sombre aux bords marqués et commence à sécher. La peau s'est divisée en plusieurs endroits.",
            "action": "Passez rapidement à l'étape de glaçage — les bords carbonisés ajouteront de la profondeur, mais ne grillez pas trop longtemps."
          }
        ]
      },
      "feelCue": "Pressez l'aubergine doucement à travers un chiffon — il devrait se sentir comme une éponge douce, sans poche ferme de chair non cuite nulle part."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "dengaku_glaze",
      "instructions": "Dans un petit bol, fouetter le miso blanc, le mirin, le saké et le sucre jusqu'à ce qu'il soit complètement lisse et brillant. La glaçure doit être assez épaisse pour marmonner sur une cuillère — si elle semble trop raide, ajouter une cuillère à café de mirin. S'il fonctionne librement, le miso peut être très humide; un bref remuement à feu doux le serrera.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante et dorée qui rubane d'une cuillère et tient sa forme brièvement avant de s'étendre lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est grumelée avec un miso non mélangé. Des touffes blanches sont visibles partout.",
            "action": "Whisk plus vigoureusement — le miso doit se dissoudre complètement dans le mirin et le saké."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte satinée avec une consistance de miel. La couleur est un bronzage doré chaud.",
            "action": "Répartir abondamment sur chaque moitié d'aubergine."
          },
          {
            "state": "Overdone",
            "description": "Le glaçage est trop liquide du surmenage — il glissera de l'aubergine sous la grille.",
            "action": "Incorporer une petite quantité de miso supplémentaire pour épaissir jusqu'à une pâte à tartiner."
          }
        ]
      },
      "feelCue": "La glaçure doit être collante et légèrement résistante lorsqu'elle est tirée avec un doigt — collant et dense, comme le miel froid."
    },
    {
      "nodeId": "step_3",
      "action": "Glacer",
      "inputs": [
        "roasted_eggplant",
        "dengaku_glaze",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_nasu_dengaku",
      "instructions": "Dépliez les moitiés d'aubergines grillées coupées. À l'aide d'une cuillère ou d'une brosse à pâtisserie, étaler généreusement et uniformément la glaçure dengaku sur chaque surface coupée, en couvrant toute la chair et en l'ouvrant dans le crosshatch marqué. Placer sous un gril chaud (ou retourner au support supérieur à 230°C) pendant 3 à 5 minutes, en observant de près, jusqu'à ce que la glaçure s'assombrisse à un brun acajou profond et bulle vigoureusement aux bords. Garnir immédiatement de graines de sésame et de pétoncle.",
      "visualCue": {
        "primaryTarget": "La glaçure est caramélisée en acajou laqué profond, plus foncé que le miel, avec des bords bouillonnants et des taches d'omble dans la partie la plus profonde des coupes croisées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est encore en or pâle et brillante mais pas encore caramélisée. Pas de bulles aux bords. Ça a l'air mouillé.",
            "action": "Revenez sous le grille-pain pendant 1 à 2 minutes de plus. Regardez constamment — il passe de parfait à brûlé en moins d'une minute."
          },
          {
            "state": "Perfect",
            "description": "Glaze est un acajou riche et brillant avec des taches plus foncées dans les lignes de score. Les bulles se sont repliées sur une finale satinée. La cuisine sent le miso caramélisé et le sésame.",
            "action": "Retirer immédiatement et garnir de sésame et de pétoncle. Servir dans les 2 minutes."
          },
          {
            "state": "Overdone",
            "description": "La glace est très sombre, presque noire, et sent le sucre brûlé. Les protéines miso se sont carbonisées.",
            "action": "Enlevez doucement les taches les plus noires avec un couteau. L'aubergine sous-jacente est toujours parfaite."
          }
        ]
      },
      "feelCue": "La surface doit se sentir collante quand vous passez un doigt légèrement sur elle — non pas mouillée, non durcie, mais avec cette qualité particulière collante-sèche de miso correctement caramélisé."
    }
  ]
};
