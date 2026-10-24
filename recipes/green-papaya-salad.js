export default {
  "repoId": "master_thai_green_papaya_salad_001",
  "parentRepoId": null,
  "slug": "green-papaya-salad",
  "author": "ForkRecipe Kitchen",
  "title": "Som Tam (Salade de papaye verte)",
  "description": "Pounded et meurtris dans un mortier d'argile, la papaye verte déchiquetée se transforme en un enchevêtrement vif et goutte à goutte où chaque brin porte du citron vert aigre, de la sauce de poisson salée, et assez de chaleur de chili pour rendre les bouts de vos oreilles rouges.",
  "cuisine": "Thaï",
  "culture": "Isan Thai",
  "category": "vegetables",
  "tags": [
    "Thaï",
    "salade",
    "papaye",
    "végétalien",
    "épicé"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 1924,
  "forks": 221,
  "contributors": 30,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-03",
  "updatedAt": "2025-05-18",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
    "umami": 2,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Papaya verte (non mûre), pelée et déchiquetée en allumettes",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mangue verte",
        "KOHLRABI",
        "Jicama"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chilies oculaires thaïes (2-5, ajuster à la tolérance)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chilies"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron vert frais (à partir de 2-3 citron vert)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de poisson (ou sauce de soja pour végétalien)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "soja léger + MSG pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme, rasé (ou cassonade)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sucre de coco",
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Crevettes séchées (kung haeng) — en option pour le style Isan",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour végétarien"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Tomates régulières, classées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Haricots longs ou haricots verts, coupés en morceaux de 3 cm",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Faire craquer les pois"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre aromatiques",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "pounded_aromatics",
      "instructions": "Dans un grand mortier d'argile ou de pierre, ajouter les piments et l'ail. Pound avec le pestle jusqu'à ce qu'il se décompose en pâte grossière — pas lisse, mais pas de gros morceaux. La rupture des cellules libère des composés volatils qui rendent la salade parfumée et imprégnante. Un saladier et une cuillère en bois ne peuvent pas reproduire cela; le mortier n'est pas facultatif.",
      "visualCue": {
        "primaryTarget": "L'ail et les piments sont meurtris et cassés, libérant des huiles — vous devriez voir une pâte légèrement humide et parfumée avec une texture visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours en morceaux entiers; les piments sont fissurés mais non cassés.",
            "action": "Continuer à frapper — 15-20 grèves fermes avec le pestle."
          },
          {
            "state": "Perfect",
            "description": "Pâte grossière — purée d'ail à une pulpe avec des morceaux fibreux, des chilis fendus et libérant de l'huile rouge-orange. Sensation d'ail cru et de chili.",
            "action": "Ajouter les haricots longs et les tomates."
          },
          {
            "state": "Overdone",
            "description": "Pâte douce et humide sans texture: l'amertume à l'ail est surextractible.",
            "action": "C'est très bien, les saveurs seront équilibrées une fois la vinaigrette ajoutée."
          }
        ]
      },
      "feelCue": "Vos yeux devraient être légèrement arrosés à partir des composés volatils de chili libérés dans l'air — c'est le mortier qui fonctionne correctement."
    },
    {
      "nodeId": "step_2",
      "action": "Légumes bleus",
      "inputs": [
        "pounded_aromatics",
        "ing_08",
        "ing_09"
      ],
      "outputState": "bruised_vegetables",
      "instructions": "Ajouter les haricots longs et les tomates cerises au mortier. Utilisez le pestle pour les ecchymoses — pressez et tapez légèrement les tomates jusqu'à ce qu'elles libèrent du jus, et fissurez légèrement les haricots. Ensuite, utilisez une grande cuillère pour jeter tout ensemble. La technique du mortier en même temps meurtrissures et robes — les légumes doivent s'ouvrir et ne pas se désintégrer.",
      "visualCue": {
        "primaryTarget": "Les tomates sont légèrement broyées et libèrent du jus rouge; les haricots longs sont fissurés à intervalles mais conservent leur forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont intactes sans jus libéré; les haricots sont entiers et imperméables — ils n'absorbent pas la vinaigrette.",
            "action": "Bruser plus fermement avec le pilon, presser vers le bas plutôt que frapper."
          },
          {
            "state": "Perfect",
            "description": "Les tomates sont fendues et juteuses, de longs haricots fêlés en plusieurs endroits. Le fond du mortier a une flaque de jus de tomate mélangé et de pâte chili-ail.",
            "action": "Ajouter la papaye et la vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Les tomates sont complètement broyées en pulpe; les haricots sont musqués — la texture est perdue.",
            "action": "Continuez avec la recette. La sauce sera plus épaisse et plus tomate."
          }
        ]
      },
      "feelCue": "Appuyez sur un haricot meurtri entre les doigts — il doit fléchir et plier sans se casser, ce qui signifie qu'il est ouvert mais a encore l'intégrité structurelle."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger la vinaigrette",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "som_tam_dressing",
      "instructions": "Dans un petit bol, mélanger le jus de lime, la sauce de poisson et le sucre de palme. Incorporer jusqu'à dissolution du sucre. Goûter — il doit être amer avec agressivité avec une colonne vertébrale salée et une douceur subtile. Ce ratio de vinaigrette est un point de départ; ajuster à votre préférence avant d'ajouter à la salade. En Thaïlande, le tampon som est ajusté à l'ordre au mortier.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette dorée claire avec du sucre dissous — aucun cristal visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des granules de sucre encore visibles au fond du bol.",
            "action": "Incorporer plus vigoureusement ou réchauffer brièvement le micro-ondes pendant 5 secondes."
          },
          {
            "state": "Perfect",
            "description": "Entièrement dissout, lisse, doré jaune vif. Goûte aigre-première, savoureuse-seconde, à peine sucré. L'arôme de citron vert est vif.",
            "action": "Verser sur la papaye."
          },
          {
            "state": "Overdone",
            "description": "Non applicable pour une vinaigrette froide, mais si le rapport est incorrect — trop sucré ou trop salé — ajuster maintenant avant d'ajouter à la papaye, qui est difficile à fixer une fois combiné.",
            "action": "Ajuster avec plus de jus de lime ou de sauce de poisson au besoin."
          }
        ]
      },
      "feelCue": "Goûtez la vinaigrette seule — elle devrait être trop de tout, ce qui est correct, car la papaye verte est très neutre et absorbera et tempérera toutes les saveurs."
    },
    {
      "nodeId": "step_4",
      "action": "Verser et servir",
      "inputs": [
        "ing_01",
        "ing_07",
        "bruised_vegetables",
        "som_tam_dressing"
      ],
      "outputState": "finished_som_tam",
      "instructions": "Ajouter la papaye déchiquetée et les crevettes séchées au mortier. Verser la vinaigrette sur le dessus. En utilisant à la fois le pestle (légèrement) et une grande cuillère, jetez et ecchymosez tout ensemble pendant 1 à 2 minutes — en mélangeant et en appuyant simultanément pour aider la papaye à absorber la vinaigrette. Goûtez, ajustez et servez immédiatement le riz collant.",
      "visualCue": {
        "primaryTarget": "Les brins de papaye scintillent avec de la vinaigrette, légèrement flétris, mais encore avec de la croûte – vert blanc vif contre la tomate rouge et les crevettes séchées à l'orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les brins de papaye sont encore secs et pâles; les bassins de pansement au fond du mortier plutôt que de s'accrocher à la papaye.",
            "action": "Continuez à jeter et à frapper légèrement pendant une autre minute; la papaye doit être légèrement meurtrie pour absorber."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin de papaye brille avec la vinaigrette et a absorbé la saveur de citron vert-sour. La croûte est présente mais légèrement produite. Les couleurs sont vives. L'odeur est le citron vert, la sauce de poisson et le chili.",
            "action": "Assortir et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La papaye s'est flétrie jusqu'au limon; la texture est perdue et la salade a l'air waterlogged.",
            "action": "Servir immédiatement, quelle que soit sa forme, le tam est toujours délicieux, juste plus doux. La prochaine fois, servir plus vite après le mélange."
          }
        ]
      },
      "feelCue": "Prenez une pincée de papaye habillée — il devrait se sentir frais et croustillant avec une légère humidité, la papaye libérant une petite quantité de jus lorsqu'elle est pressée mais ne se tournant pas à la bouillie."
    }
  ]
};
