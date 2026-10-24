export default {
  "repoId": "master_american_sourdoughdiscardpancakes_001",
  "parentRepoId": null,
  "slug": "sourdough-discard-pancakes",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Jeter les crêpes",
  "description": "Un crêpe de fin de semaine à zéro déchet qui transforme les déchets de sourds non nourris en rondelles hautes et moelleuses avec un tang subtil et une miette à travers de minuscules tunnels de bicarbonate de soude réagissant avec l'acide du démarreur.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "breads",
  "tags": [
    "Crêpes",
    "Pâtes alimentaires",
    "Rejet",
    "Petit déjeuner",
    "américains",
    "grille",
    "fermenté"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "farine de blé entier (denser, noisettes)",
        "Farine d'avoine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Déchets de sarcophages actifs (hydratation à 100%)",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "tout démarreur d'hydratation — ajuster le liquide en conséquence"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "beurre (plus tang)",
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 2,
      "defaultUnit": "each",
      "substitutions": [
        "oeuf de lin (1 c. à soupe de lin moulu + 3 c. à soupe d'eau, 5 min)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile neutre",
        "beurre brun (plus de saveur)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop d'érable ou sucre",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "wet_mix",
      "instructions": "Dans un grand bol, mélanger les déchets de charcuterie, le lait, les oeufs, le beurre fondu et le sirop d'érable. fouetter jusqu'à ce que le rejet soit complètement cassé et que le mélange soit uniforme. Le rejet doit se dissoudre en douceur dans le lait et les œufs — si votre rejet est particulièrement raide, fouetter avec le lait d'abord jusqu'à ce qu'il soit lisse avant d'ajouter les œufs. Le mélange humide sentira agréablement acidulé de la défausse.",
      "visualCue": {
        "primaryTarget": "Liquide lisse et jaune pâle avec une surface légèrement mousseuse. Pas de stries blanches de blanc d'œuf non incorporé. Conjugué uniformément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des lumps de déchets de sardes visibles. Des traces blanches d'œufs. Surface non mousseuse.",
            "action": "fouetter plus vigoureusement, en brisant la défausse contre les côtés du bol. Un rejet légèrement raide peut être têtu — persister."
          },
          {
            "state": "Perfect",
            "description": "Liquide lisse et uniforme jaune pâle. Un peu mousseux. Ça sent le aigre et l'oeuf. Jeter entièrement incorporé.",
            "action": "Ajouter les ingrédients secs."
          },
          {
            "state": "Overdone",
            "description": "Ici, il n'est pas possible de surbrillancer les œufs — la graisse du beurre empêche les surbrillances.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Plongez votre doigt dans le mélange humide — il devrait goûter de l'oeuf, du beurre, et un tang de fond distinct de l'auriculeuse. Ce tang est l'acide qui réagira avec le bicarbonate de soude pour soulever les crêpes."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "wet_mix",
        "ing_01",
        "ing_07",
        "ing_08"
      ],
      "outputState": "pancake_batter",
      "instructions": "Dans un bol séparé, fouetter la farine, le bicarbonate de soude et le sel. Verser les ingrédients secs dans le liquide tout à la fois. Plier avec une spatule en caoutchouc en utilisant de grands traits de balayage — seulement 10 à 15 plis jusqu'à ce que les ingrédients secs soient à peine incorporés. La pâte sera bosseuse. C'est exact. Le surmélange active le gluten et produit des crêpes durs et mâcheuses au lieu de tendres et moelleuses. Arrêtez de mélanger quand vous verrez encore quelques brins de farine — ils s'hydrateront pendant le reste.",
      "visualCue": {
        "primaryTarget": "Une pâte pulvérulente et versable avec des stries de farine visibles et pas de grandes poches de farine sèche. Quelques petits morceaux sont attendus et souhaitables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes poches sèches de farine au fond du bol. Farine sèche à la surface.",
            "action": "Quelques plis plus doux ciblant les poches sèches seulement. Ne pas mélanger globalement."
          },
          {
            "state": "Perfect",
            "description": "Le battement est grumeux mais pas de grandes poches sèches. Une louche versée coule lentement et uniformément. Quelques stries de farine sont fines.",
            "action": "Reposez-vous 5 minutes pendant que la grille chauffe."
          },
          {
            "state": "Overdone",
            "description": "Pâte lisse, mince, sans grumeaux. Le gluten est développé. Les pancakes seront durs.",
            "action": "Les crêpes sont toujours comestibles. La prochaine fois: 10 plis maximum. Considérez ceci comme une leçon."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir aérée et légèrement résistante sous la spatule — les déchets de soda et de bicarbonate commencent déjà à réagir, produisant de petites bulles. Si vous maintenez le bol jusqu'à l'oreille et écoutez attentivement, vous pouvez parfois entendre la pâte péter tranquillement."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "pancake_batter"
      ],
      "outputState": "finished_pancakes",
      "instructions": "Chauffer une poêle en fonte ou antiadhésive à feu moyen pendant 3 minutes. Graisser légèrement avec du beurre ou de l'huile neutre, essuyer l'excès avec une serviette en papier — trop de graisse provoque un brunissement inégal et aucune croûte. Verser une louche (environ 80 ml) de pâte par crêpe. Ne le répandez pas — laissez - le semer naturellement. Surveillez la surface : des bulles apparaissent d'abord aux bords, puis marchent vers le centre. Flip quand les bulles couvrent la plus grande partie de la surface ET les bords regardent ensemble et mat (pas brillant). Faire cuire 90 secondes sur le deuxième côté. Servir immédiatement — les crêpes perdent leur hauteur de vapeur en quelques minutes.",
      "visualCue": {
        "primaryTarget": "Un fond brun doré et une surface recouverte de bulles brisées et intactes avec un anneau de bord mat. Après le retournement, les deux côtés doivent être d'un brun doré même moyen sans taches brutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tourné trop tôt : le dessous est posé mais pâle, le dessus est encore entièrement humide et brillant sans bulles. Le pancake se dégonfle quand il est retourné.",
            "action": "Repliez-vous si possible. Prochain crêpe: attendez que les bulles atteignent le centre et les bords sont mats."
          },
          {
            "state": "Perfect",
            "description": "Fond doré-brun, haut entièrement bubbled avec bords mats avant le flip. Après le retournement : même brun doré des deux côtés. La crêpe est épaisse et printanière.",
            "action": "Servir immédiatement. Tenez dans un four 90 C si vous faites un grand lot."
          },
          {
            "state": "Overdone",
            "description": "Le fond brun foncé avant la surface présente des bulles — chaleur trop élevée. Les bords peuvent être secs et trop brunis.",
            "action": "Baisser la chaleur entre les lots. Laisser refroidir pendant 60 secondes. Essuie et ré-graisse."
          }
        ]
      },
      "feelCue": "Un crêpe parfait pour les arbustes devrait rebondir lorsque vous le pressez doucement avec une spatule – haute, printanière et légèrement résistante. Appuyez sur votre pouce dans le haut : il devrait compresser et rebondir comme une éponge très douce. Le dessous doit se sentir croquant et presque papier, contrastant avec l'intérieur humide et tendre."
    }
  ]
};
