export default {
  "repoId": "master_thai_fish_curry_001",
  "parentRepoId": null,
  "slug": "thai-fish-curry",
  "author": "ForkRecipe Kitchen",
  "title": "Curry Thai Red Fish",
  "description": "Crème de coco et pâte de curry rouge dans leur dialogue essentiel — la pâte fleurit dans l'huile jusqu'à ce que la pièce sente comme une cuisine thaïlandaise, crème de coco ajoutée par étapes pour construire une sauce simultanément riche et électrique avec la chaleur.",
  "cuisine": "Thaï",
  "culture": "Thaï",
  "category": "seafood",
  "tags": [
    "Thaï",
    "curry",
    "noix de coco",
    "poissons",
    "curry rouge",
    "Sud-est asiatique"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 2100,
  "forks": 222,
  "contributors": 58,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-25",
  "updatedAt": "2025-04-08",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poisson blanc ferme (snapper ou barramundi, peau coupée en morceaux de 5 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "saumon",
        "tofu pour végétalien"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Pâte de curry rouge thaïlandaise",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de curry vert pour un profil thermique différent"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Crème de noix de coco (pas de lait)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja pour végétalien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de palme (ou sucre brun léger)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Aubergines thaïlandaises (chaudées) ou pousses de bambou",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "courgettes",
        "poivron"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Basilic thaïlandais frais (préféré au basilic saint)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "basilic régulier"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles de chaux de Kaffir (torées)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de chaux"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bloom",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "bloomed_paste",
      "instructions": "Spoon 4 cuillerées à soupe de la crème épaisse qui s'est levée au dessus de la crème de noix de coco peuvent dans un wok ou une casserole large. Chauffer au-dessus de moyenne-élevée jusqu'à ce qu'elle commence à buller et que la crème commence à se séparer (l'huile se sépare des solides). Ajouter la pâte de curry rouge et faire frire dans la crème de coco pendant 2-3 minutes, en remuant constamment, jusqu'à ce que la pâte s'assombrisse légèrement, l'huile se sépare complètement, et le parfum remplit la cuisine. Cette étape de friture dans la crème de noix de coco est l'étape la plus importante — ne la précipitez pas.",
      "visualCue": {
        "primaryTarget": "La pâte de curry s'est assombrie et frite dans l'huile de coco libérée autour. L'huile s'est nettement séparée et est visible au bord de la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est pâle et humide, assise dans la crème de noix de coco sans friture. Pas de séparation, pas d'obscurité.",
            "action": "Augmenter le feu à moyen-élevé. La crème doit se fractionner pour faire frire la pâte."
          },
          {
            "state": "Perfect",
            "description": "La pâte est de couleur plus profonde, parfumée et entourée d'huile de coco séparée. L'odeur est intense de citronnelle, de galangal et de piment.",
            "action": "Ajouter le reste de la crème de coco par étapes."
          },
          {
            "state": "Overdone",
            "description": "La pâte est sombre et collée à la poêle. Certaines pièces commencent à brûler. Une odeur d'acride.",
            "action": "Ajouter immédiatement le reste de la crème de coco pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Lorsque la pâte de curry est bien fleurie, le parfum est extraordinaire: des couches de citronnelle, de galangal, de chaux de kaffir et de piment se lèvent ensemble dans un nuage aromatique."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "bloomed_paste",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08",
        "ing_06"
      ],
      "outputState": "curry_sauce",
      "instructions": "Ajouter le reste de la crème de coco et mélanger avec la pâte fleurie. Ajouter la sauce de poisson, le sucre de palme et les feuilles de lime kaffir déchirées. Mélanger et goûter – ajuster l'équilibre des sauces salées (poisson), sucrées (sucre de palme) et chaudes (pâte de curry) jusqu'à ce qu'elles soient harmonieuses. Ajouter l'aubergine thaïlandaise. Laisser mijoter 5-7 minutes jusqu'à ce que l'aubergine soit juste tendre, mais conserve sa forme. La sauce doit être riche, légèrement épaissie et profondément colorée.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge-orange profonde avec une richesse en crème de noix de coco visible – légèrement brillante et uniforme. Les morceaux d'aubergine sont tendres et ont absorbé la couleur de la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et pâle. L'aubergine est toujours ferme et blanche à l'intérieur. Saveur de pâte de curry est mince.",
            "action": "Laisser mijoter 5 minutes de plus. Les légumes ont besoin de temps pour libérer l'humidité et concentrer la sauce."
          },
          {
            "state": "Perfect",
            "description": "sauce riche, rouge-orange, légèrement épaissie. L'aubergine est tendre jusqu'au bout. Profil de saveur équilibré.",
            "action": "Ajouter le poisson et cuire brièvement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est très épaisse et grasse. L'aubergine s'est effondrée en bouillie.",
            "action": "Ajouter un jet d'eau pour se détendre. Faites cuire le poisson."
          }
        ]
      },
      "feelCue": "Une sauce au curry thaïlandais bien équilibrée devrait goûter quatre choses simultanément : la chaleur, la douceur, le sel et le fantôme d'agrumes de la chaux kaffir. Si quelqu'un domine, ajustez."
    },
    {
      "nodeId": "step_3",
      "action": "Pochette",
      "inputs": [
        "curry_sauce",
        "ing_01"
      ],
      "outputState": "cooked_curry",
      "instructions": "Nettoyez les morceaux de poisson dans la sauce au curry. Réduire le feu à moyen-doux, couvrir et cuire pendant 4-6 minutes selon l'épaisseur. Le poisson se fait quand il devient opaque tout au long et flocons facilement quand une fourchette est pressée doucement contre la chair. Ne remuez pas après avoir ajouté du poisson — les morceaux sont délicats et se briseront. Arrosez doucement en cuillerant de la sauce sur le dessus exposé une fois pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Le poisson est blanc opaque tout au long avec une légère teinte orange de la sauce. La chair flotte facilement lorsqu'une fourchette est pressée au point le plus épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson a un centre translucide et résiste aux flocons. La chair est fraîche au centre.",
            "action": "Couvrir et cuire encore 2-3 minutes. Vérifiez à nouveau en appuyant doucement avec une fourchette."
          },
          {
            "state": "Perfect",
            "description": "Opaque tout au long, flocons avec une pression douce, et la sauce a infusé dans les couches de surface.",
            "action": "Retirer du feu et ajouter le basilic et le jus de lime."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'affaisse tout seul et s'écroule dans la sauce. La texture est sèche et granuleuse.",
            "action": "Retirer immédiatement du feu. Servir doucement, cuillerer autour du poisson plutôt que de le traverser."
          }
        ]
      },
      "feelCue": "Le poisson braconné dans le curry a l'impression qu'il a à peine besoin d'une fourchette — il se retrouve au toucher et tombe dans de grands flocons humides plutôt que de petits miettes sèches."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "cooked_curry",
        "ing_07",
        "ing_09"
      ],
      "outputState": "finished_thai_fish_curry",
      "instructions": "Retirer du feu. Cuire dans les feuilles de basilic thaïlandais et remuer doucement une fois. Pressez le jus de lime sur le dessus. Goûtez encore une fois pour l'équilibre final du sel, du sucre, de l'amer et de la chaleur — c'est le moment de s'ajuster. Servir immédiatement sur le riz jasmin. Le basilic doit entrer dans la chaleur pour préserver sa fragrance d'anis-clove.",
      "visualCue": {
        "primaryTarget": "Curry rouge orangé profond avec des feuilles de basilic vert flétris mais vibrants et des morceaux de poisson brillants juste visibles sous la surface de la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas d'ajout de basilic ou de jus de lime. Le curry est plat et unidimensionnel.",
            "action": "Ajoutez les deux. La finale aromatique sépare le curry thaïlandais de la sauce générique."
          },
          {
            "state": "Perfect",
            "description": "Le basilic vient de se flétrir de la chaleur résiduelle. La luminosité de la chaux traverse la richesse. Les couleurs sont vives.",
            "action": "Servir immédiatement sur le riz jasmin."
          },
          {
            "state": "Overdone",
            "description": "Le basilic a été ajouté à la chaleur et est devenu complètement noir et amer. La chaux a été ajoutée trop tôt et s'estompée.",
            "action": "Ajouter le basilic frais déchiré sur le dessus à la table à la place."
          }
        ]
      },
      "feelCue": "La fragrance du basilic thaïlandais déchiré dans le curry chaud est immédiate et puissante, avec une note de girofle douce qui se lève à travers la vapeur de coco et de piment."
    }
  ]
};
