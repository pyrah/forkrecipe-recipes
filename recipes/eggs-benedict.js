export default {
  "repoId": "master_american_eggs_benedict_001",
  "parentRepoId": null,
  "slug": "eggs-benedict",
  "author": "ForkRecipe Kitchen",
  "title": "Œufs Benoît",
  "description": "L'apex du dimanche – des oeufs légèrement pochés sur du bacon canadien croustillant et des moitiés de muffins anglais grillés, noyés dans un chaud hollandaise doré aiguisé au citron. Trois techniques distinctes, l'émulsion, le poach, le toast, se sont synchronisées en une seule assiette.",
  "cuisine": "Américain",
  "culture": "New York",
  "category": "eggs",
  "tags": [
    "œufs",
    "brunch",
    "américains",
    "nouveau-né",
    "hollandaise"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "40 min",
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
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Gros œufs (pour le braconnage)",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Bacon canadien ou lard arrière",
      "ratioValue": 4,
      "defaultUnit": "slices",
      "substitutions": [
        "Jambon de Serrano",
        "saumon fumé pour oeufs Royale"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Muffins anglais, cassés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "Tours aurifères grillés",
        "moitiés de brioche"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaunes d'œufs (pour hollandaise)",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre clarifié (chaud)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "beurre fondu entier — plus dur à émulsifier mais faisable"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Vin blanc (pour le braconnage)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre léger"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir si les taches sont acceptables"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre Cayenne, pincer",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé pour la couleur"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Hydration",
      "name": "Eau (pour le braconnage)",
      "ratioValue": 1500,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Émulsifier",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "hollandaise",
      "instructions": "Faites d'abord l'hollandaise — il tiendra chaud pendant que vous braconnez. Placez un grand bol sur un pot d'eau à peine mijotante (le fond du bol ne doit pas toucher l'eau). Ajouter les jaunes d'œufs et une cuillère à soupe d'eau. Whisk constamment et vigoureusement, en déplaçant le bol sur et hors de la chaleur de sorte que les jaunes réchauffent doucement plutôt que brouillé — 3-5 minutes jusqu'à ce qu'ils deviennent épais, pâles et ruban-comme et vous pouvez voir le fond du bol à travers les sentiers de fouet. Retirer du feu. Commencer à ajouter le beurre clarifié chaud dans une bruine mince et lente, en fouettant constamment. La sauce émulsifiera et épaissira avec chaque addition. Une fois la moitié du beurre entré et la sauce est épaisse et brillante, vous pouvez ajouter le reste dans un ruisseau plus rapide. Assaisonner de jus de citron, sel, poivre blanc et cayenne. Gardez au chaud en plaçant le bol sur le pot d'eau chaude (mais pas mijotante) avec le feu.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse et dorée qui tombe du fouet dans un ruban lisse et continu. Il devrait envelopper l'arrière d'une cuillère de façon épaisse et tenir un canal tiré du doigt sans fermer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et versable, en piqué immédiatement de la cuillère. Les jaunes n'étaient pas assez cuits avant l'ajout du beurre.",
            "action": "Retourner au bain marie à feu très doux et fouetter constamment jusqu'à ce qu'il s'épaississe — ne pas bouillir ou il sera caillé."
          },
          {
            "state": "Perfect",
            "description": "Épais, brillant et or pâle. Des chutes de la cuillère dans un ruisseau lent et intact. Goûte riche et beurré avec un bord citron clair.",
            "action": "Gardez-vous au chaud sur le bain marin hors-chauffage et passer au braconnage."
          },
          {
            "state": "Overdone",
            "description": "La sauce est cassée — elle a l'air grasse et caillée, le beurre se sépare en flaques jaunes.",
            "action": "fouetter un jaune d'œuf frais dans un bol propre et chaud, puis arroser très lentement dans la sauce cassée, fouetter constamment — le nouveau jaune peut réémulsionner la sauce cassée."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez le fouet et tracez une figure-8 dans le mélange de jaune, la figure doit tenir pendant une seconde avant de se dissoudre — c'est-à-dire le stade du ruban, le bon moment pour commencer à ajouter du beurre."
    },
    {
      "nodeId": "step_2",
      "action": "Pochette",
      "inputs": [
        "ing_11",
        "ing_07",
        "ing_01"
      ],
      "outputState": "poached_eggs",
      "instructions": "Remplissez une grande casserole peu profonde d'eau à une profondeur d'environ 8cm. Ajouter le vinaigre de vin blanc (il aide les blancs à cocher) et laisser mijoter à nu — 82-85°C, juste en dessous d'un ébullition avec de petites bulles montant du fond, pas un ébullition enrouleur. Casser chaque oeuf dans une petite tasse. Mélangez l'eau doucement pour créer un vortex lent et glissez l'œuf au centre. L'eau tourbillonnante enveloppe le blanc autour du jaune. Cuire de 3 à 4 minutes pour un jaune. Soulevez avec une cuillère à fentes et touchez le blanc — il devrait être entièrement réglé, mais le jaune devrait wobble comme un ballon d'eau. Égoutter sur une serviette pliée. Si vous faites les quatre à la fois, utilisez une grande casserole et travaillez rapidement. Vous pouvez garder les œufs pochés dans de l'eau chaude jusqu'à 30 minutes.",
      "visualCue": {
        "primaryTarget": "Un œuf poché ovale compact avec un blanc entièrement opaque qui est lisse plutôt qu'attaché, et un dôme visible de jaune liquide doux sous la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est encore translucide et gelée autour du jaune. L'œuf s'effondre et se propage lorsqu'il est levé.",
            "action": "Retournez à l'eau pendant 60 à 90 secondes et testez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Le blanc est entièrement réglé et opaque, juste assez ferme pour tenir sa forme. Le jaune se déplace comme du liquide sous une légère pression de la cuillère. L'œuf se tient élégamment.",
            "action": "Égoutter et déposer immédiatement ou tenir dans de l'eau chaude (pas chaude)."
          },
          {
            "state": "Overdone",
            "description": "Le jaune est solide et le blanc est caoutchouteux et s'en écarte. L'œuf semble gonflé et sec.",
            "action": "Servir rapidement — les œufs pochés trop cuits sont encore comestibles, juste coupés en eux avant de servir, donc personne n'est surpris."
          }
        ]
      },
      "feelCue": "Lorsque vous bercez un parfait œuf poché dans une cuillère à fentes, il devrait sentir lourd et liquide au centre — comme un petit ballon d'eau enfermé dans une mince coquille en caoutchouc. La fermeté aux bords blancs, donnant au centre du jaune."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "toasted_base",
      "instructions": "Pendant que les œufs braconnent, faire chauffer une poêle sèche ou une grille à feu moyen-élevé. Semer les tranches de bacon canadiennes pendant 2 minutes de chaque côté jusqu'à ce qu'elles soient légèrement caramélisées aux bords et réchauffées. Porter simultanément les moitiés du muffin anglais — coupées dans la même casserole ou sous un grille-pain — jusqu'à ce qu'elles soient dorées et légèrement croustillantes à la surface. La légère croûte du muffin est structurelle : elle empêche le jaune liquide de l'œuf de s'imprégner immédiatement et de faire une base de soggy.",
      "visualCue": {
        "primaryTarget": "Bacon canadien aux bords caramélisés légers. Le muffin anglais demi-brun doré et légèrement croquant sur le visage coupé avec les coins caractéristiques et les crannies attraper la chaleur inégalement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bacon est pâle et doux, à peine chauffé. Le muffin est blond et mâche sans croquant.",
            "action": "Revenez à la chaleur — une minute de plus de chaque côté pour le bacon, et plus longtemps sous la grille pour le muffin."
          },
          {
            "state": "Perfect",
            "description": "Bacon a des bords acajou clair caramélisé et est chaud à travers. Muffin est doré-brun avec quelques taches plus sombres blisters où les coins ont pris la chaleur.",
            "action": "Assiette immédiatement : muffin d'abord, puis bacon, puis oeuf, puis hollandaise."
          },
          {
            "state": "Overdone",
            "description": "Le bacon est sec et mâcheux avec des bords croustillants très foncés. Le muffin est dur et fragile plutôt que croquant.",
            "action": "Benedict est pardonneur. L'hollandaise va tout adoucir."
          }
        ]
      },
      "feelCue": "Appuyez sur le muffin grillé à moitié coupé vers le haut — il devrait offrir une faible résistance au craquage à la surface avant de céder la place à un intérieur doux. Ce contraste textural est ce pour quoi il est là."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "toasted_base",
        "poached_eggs",
        "hollandaise"
      ],
      "outputState": "finished_eggs_benedict",
      "instructions": "Travaillez rapidement — tout devrait être chaud simultanément. Placez deux moitiés de muffins grillés sur chaque assiette, coupez-la. Coucher une tranche de bacon canadien chaud sur chaque moitié. Utilisez une cuillère à fentes pour soulever soigneusement un œuf poché, poser brièvement le fond sur une serviette de cuisine pliée pour enlever l'excès d'eau, et placer un oeuf sur chaque tranche de bacon. Spoon hollandaise généreusement sur chaque œuf — il devrait baigner autour de la base et cascader le muffin. Terminer avec une poussière de Cayenne ou de paprika. Servir sans retard.",
      "visualCue": {
        "primaryTarget": "Une pile composée : muffin doré, bacon acajou, oeuf à dominance blanche, hollandaise dorée en cascade sur les côtés, et un léger roulis de cayenne rouge sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'hollandaise est mince et s'écoule entièrement. Le blanc d'œuf semble rampé et pâle. Le muffin est encore doux.",
            "action": "Retrousser le muffin et épaissir le hollandaise avant de se réassembler."
          },
          {
            "state": "Perfect",
            "description": "Chaque composant est chaud. L'hollandaise est assez épaisse pour s'accrocher lentement à l'œuf et à la cascade. Couper dans l'œuf et le jaune coule doré dans la sauce ci-dessous.",
            "action": "Mangez immédiatement. Ce plat ne vieillit pas avec grâce."
          },
          {
            "state": "Overdone",
            "description": "Tout ce qui est assis est assemblé pendant 5 minutes — le muffin est soyeux, le jaune est alimenté par la chaleur résiduelle, et le hollandaise s'est refroidi en pâte épaisse.",
            "action": "La vitesse est tout le jeu. La prochaine fois, étranglez la cuisson pour que tout se termine immédiatement."
          }
        ]
      },
      "feelCue": "Coupez tout droit à travers le centre de la pile avec le côté d'une fourchette — la résistance devrait aller: un léger croûte de muffin, donnant du bacon, et puis la pop du jaune cassé ouvert pour inonder tout en bas avec un liquide doré chaud."
    }
  ]
};
