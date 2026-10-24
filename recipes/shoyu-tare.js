export default {
  "repoId": "master_japanese_shoyu_tare_001",
  "parentRepoId": null,
  "slug": "shoyu-tare",
  "author": "ForkRecipe Kitchen",
  "title": "Shoyu Tare",
  "description": "Une petite cuillère concentrée de cette réduction à l'encre sombre transforme n'importe quel bol de bouillon uni en ramen de Tokyo — sauce de soja cuite avec du mirin, du saké et du kombu jusqu'à ce qu'il épaississe à un liquide brillant et complexe qui porte du sel, de l'umami, et une colonne vertébrale basse de douceur tout à la fois. Quelques cuillères à soupe assaisonnent un lot entier.",
  "cuisine": "Japonais",
  "culture": "Ramen de Tokyo",
  "category": "condiments",
  "tags": [
    "Japonais",
    "Ramen",
    "de soja",
    "assaisonnement",
    "tare",
    "umami"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Seasoning",
      "name": "Sauce soja (koikuchi, foncé)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "tamari sans gluten; réduit légèrement la salinité"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, pas Mirin-fu)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sherry sec plus 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Gâteau (sèche, cuisine ou boisson)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Vermouth sec",
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Kombu (poule séchée, pièce de 10 cm)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "1 tsp MSG au lieu de kombu"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Champignons à shiitake séchés (2 entiers)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "porcines séchés pour un profil umami différent"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Ail (2 girofles, légèrement cassés)",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "raw_tare_mixture",
      "instructions": "Mélanger tous les ingrédients dans une petite casserole à fond lourd. Le kombu et le shiitake doivent être submergés. Placer à feu doux et porter très lentement à un peu moins d'une mijoter — la surface liquide devrait trembler avec de petites bulles (environ 60 à 70 C) mais jamais bouillir. Maintenir cette température pendant 15 minutes. Cette infusion à basse température extrait des glutamates du kombu et du shiitake sans provoquer d'aromatisants ou de la sauce de soja amère. Enlevez le kombu avant que le liquide n'atteigne une mijote complète — le kombu cuit devient visqueux et donne une saveur de mer-mud si bouilli.",
      "visualCue": {
        "primaryTarget": "La surface liquide s'enroule avec des bulles microscopiques le long du bord de la casserole, tremblant mais ne roulant pas. Le kombu s'est adouci et est passé du noir au vert de la forêt.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est juste chaud; aucun mouvement à la surface. Kombu est toujours rigide.",
            "action": "Augmentez la chaleur très légèrement et attendez — la perfusion de kombu est sensible à la température et nécessite une chaleur douce soutenue."
          },
          {
            "state": "Perfect",
            "description": "La surface mijote avec de minuscules bulles persistantes; kombu est souple et lissé; les odeurs liquides de soja et de mer.",
            "action": "Enlever et jeter kombu. Augmenter la chaleur pour laisser mijoter la réduction."
          },
          {
            "state": "Overdone",
            "description": "Plein ébullition — le liquide est moussant et le kombu est devenu visqueux.",
            "action": "Enlevez immédiatement le kombu, réduisez le feu et éjaculez toute mousse. La tare sera légèrement plus amère mais toujours fonctionnelle."
          }
        ]
      },
      "feelCue": "Maintenez votre main sur la poêle — la chaleur devrait être comme la chaleur d'un trottoir d'été, stable et enveloppante plutôt que la chaleur agressive d'un ébullition."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "raw_tare_mixture"
      ],
      "outputState": "finished_shoyu_tare",
      "instructions": "Enlevez le kombu. Augmenter le feu à moyen et laisser mijoter doucement le mélange. Cuire à découvert pendant 10 à 15 minutes, en remuant de temps en temps, jusqu'à ce que le liquide ait diminué d'environ 30 à 40 pour cent et s'est légèrement épaissi — il devrait enrober une cuillère dans un mince film brillant. L'alcool du mirin et du saké sera cuit, laissant leur douceur derrière. Retirer et jeter le shiitake et l'ail. Laisser refroidir complètement la tare avant d'utiliser — elle s'épaissit davantage pendant qu'elle refroidit. A conserver dans un bocal scellé jusqu'à 3 mois.",
      "visualCue": {
        "primaryTarget": "Un liquide profondément brillant et réduit qui recouvre une cuillère plutôt que de s'égoutter dans de fines gouttes — la surface capte la lumière comme la laque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est mince et coule d'une cuillère dans un ruisseau continu. Goûts vifs et alcooliques.",
            "action": "Continuer à mijoter; l'alcool n'a pas encore cuit et la réduction est incomplète."
          },
          {
            "state": "Perfect",
            "description": "La tare enveloppe une cuillère dans un film mince mais défini; quand vous lancez un doigt sur l'arrière de la cuillère, elle laisse une ligne propre. Ça sent rond, doux-salé et profondément salé.",
            "action": "Cool complètement. Plongez dans un bon tamis. Utilisez 25-35g par 250ml de bouillon."
          },
          {
            "state": "Overdone",
            "description": "La tare a été réduite à une pâte qui s'accroche autour de la cuillère. Très collant. Une odeur de sucre brûlé.",
            "action": "Déglacer avec 30ml d'eau ou de dashi, remuer à feu doux jusqu'à ce qu'il soit desserré, puis retirer de la chaleur — ne pas réduire davantage."
          }
        ]
      },
      "feelCue": "Une goutte de tare refroidie pressée entre deux doigts devrait se détacher dans un fil mince et vitreux avant de se briser — pas couler comme de l'eau, pas s'étirer comme du caramel. Ce fil est ta serviette."
    }
  ]
};
