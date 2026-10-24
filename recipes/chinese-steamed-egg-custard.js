export default {
  "repoId": "master_chinese_chinesesteamedeggcustard_001",
  "parentRepoId": null,
  "slug": "chinese-steamed-egg-custard",
  "author": "ForkRecipe Kitchen",
  "title": "Oeufs à vapeur chinois",
  "description": "Zh.ng dàn — une crème salée si soyeuse qu'elle tremble au toucher d'une cuillère, sa surface lisse comme du jade poli, surmontée de quelques gouttes d'huile de soja et de sésame qui s'amoncellent dans des îles sombres et parfumées.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "eggs",
  "tags": [
    "œufs",
    "Sans gluten",
    "Chinois",
    "vapeur",
    "Coutard",
    "soyeux",
    "salé"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude ou dashi (environ 60°C)",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet chaud (non salé) pour umami supplémentaire"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sauce de soja léger (pour la crème)",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": [
        "sel au goût"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sauce de soja légère (sauce de finissage)",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 3,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Oignon de printemps, finement tranché sur le biais",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Échalote frite",
        "de chili à coupe fine"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "strained_egg_mixture",
      "instructions": "Battre délicatement les œufs avec des baguettes à l'aide d'un mouvement latéral – l'objectif est d'intégrer complètement l'air. Ajouter l'eau chaude (pas chaude) et la sauce soja. L'eau doit être chaude et non bouillante : le liquide chaud précuit les protéines et l'eau froide les met inégalement. Battre délicatement pour combiner, puis passer à travers un tamis à mailles fines dans le bol à vapeur ou les tasses individuelles. Le tamisage n'est pas négociable — il élimine les chalazae et les bulles qui créent des trous de piqûre et d'air dans la crème finie. Éteignez toute mousse de la surface avec une cuillère et couvrez-la fermement avec un film de collage pour éviter que la condensation ne coule sur la surface.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or pâle complètement lisse avec zéro bulle à la surface, entièrement recouvert de film collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des brins blancs visibles de chalazae, ou une couche de mousse sur la surface de surbattement.",
            "action": "Retirez-vous à travers un tamis fin et utilisez une serviette en papier pour enlever les bulles de surface restantes."
          },
          {
            "state": "Perfect",
            "description": "Limpide, uniforme or ambre avec mousse zéro. Ça verse comme de la crème légère. La surface est lisse-miroir sous le film de collage.",
            "action": "Placez immédiatement dans le vapeur."
          },
          {
            "state": "Overdone",
            "description": "L'eau était trop chaude lorsqu'on l'a ajoutée et les œufs ont commencé à brouiller, des morceaux blancs visibles dans le mélange.",
            "action": "La souche très bien — les petits morceaux précuits peuvent être enlevés. La custarde sera encore en place, avec une texture moins uniforme."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir à peine plus épais que l'eau lorsqu'il est versé dans le bol - le rapport oeuf-liquide est délibérément élevé pour une soyosité maximale."
    },
    {
      "nodeId": "step_2",
      "action": "vapeur",
      "inputs": [
        "strained_egg_mixture"
      ],
      "outputState": "set_custard",
      "instructions": "Configurez votre vapeur avec de l'eau bouillante, mais réduisez immédiatement à la plus basse mijoter possible avant d'ajouter la crème. L'ennemi de la crème lisse est la vapeur agressive. Placer le bol couvert dans le vapeur, puis baisser la chaleur afin que seulement un murmure de vapeur circule. Steam à basse température pendant 12-15 minutes. Ne pas ouvrir le couvercle plus d'une fois pour vérifier. La crème est faite lorsqu'elle ne s'enroule plus comme un liquide, mais s'agite comme un gel doux unifié. Si votre poêle ne peut pas supporter suffisamment de chaleur, fissurer le couvercle du vapeur ouvert de 1 à 2 cm pour laisser échapper l'excès de vapeur, ce qui empêche la température de monter trop haut.",
      "visualCue": {
        "primaryTarget": "Un ensemble, une surface légèrement bombée, complètement lisse, d'or pâle, sans piqûre, sans cratères ni bulles, comme un miroir recouvert de crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est encore liquide et sloshy quand le bol est légèrement déplacé. Les bords peuvent être fixés, mais le milieu est rudimentaire.",
            "action": "Récupérer et cuire encore 3-4 minutes. Testez encore en tremblant doucement."
          },
          {
            "state": "Perfect",
            "description": "Toute la surface est réglée et tremble comme une gelée solide lorsque le bol est déplacé. La surface est lisse comme le verre. De l'ambre pâle.",
            "action": "Retirer immédiatement du vapeur et garnir de sauces et garnir."
          },
          {
            "state": "Overdone",
            "description": "La surface est encombrée de miel dans un paysage cratère et bubble: la crème cuite trop chaude et les protéines ont contracté et expulsé le liquide.",
            "action": "Encore comestible — la texture est spongieuse plutôt que soyeuse. Ajouter les sauces finales pour ajouter l'humidité. Baisse la chaleur la prochaine fois."
          }
        ]
      },
      "feelCue": "Tapotez doucement le bord du bol : la crème devrait mijoter et trembler en une seule masse, comme une panna cotta très douce. Si les ondulations traversent la surface comme des vagues séparées, il n'est pas encore réglé."
    },
    {
      "nodeId": "step_3",
      "action": "Garnir",
      "inputs": [
        "set_custard",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_steamed_egg_custard",
      "instructions": "Enlevez soigneusement le film de collage — la vapeur accumulée et la condensation s'enrouleront. Arrosez la sauce de soja finale et l'huile de sésame à travers la surface en deux ou trois passes — ils se jetteront dans des îles sombres et parfumées sur la crème pâle. Dispersez l'oignon de printemps en haut. Servir immédiatement dans le bol à vapeur, en écopant des portions à la table avec une cuillère. La crème est meilleure au moment où elle est faite ; elle commence à pleurer le liquide pendant qu'il refroidit.",
      "visualCue": {
        "primaryTarget": "Une surface en or pâle, mirroir-lisse parsemée de piscines sombres d'huile de soja et de sésame, éparpillée de rondelles d'oignon vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface du custard s'est cassée ou s'est effondrée là où le film de collage s'est collé et a été arraché trop brusquement.",
            "action": "La saveur est inchangée — le visuel est la seule perte. La prochaine fois, vaporisez légèrement le film de collage avec de l'huile avant de couvrir."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse et brillante avec les garnitures bien assises sur le dessus. Tout le bol tremble doucement en le portant à la table.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Custard a commencé à pleurer l'eau liquide de se reposer trop longtemps. La surface semble lisse et humide.",
            "action": "Incliner doucement le bol pour égoutter l'excès de liquide, ajouter les garnitures et servir."
          }
        ]
      },
      "feelCue": "Une crème parfaitement sertie donne à une cuillère sans résistance: elle se compose de parties comme du tofu à soie très ferme, frémissant aux bords de la coupe."
    }
  ]
};
