export default {
  "repoId": "master_mexican_birria_tacos_001",
  "parentRepoId": null,
  "slug": "birria-tacos",
  "author": "ForkRecipe Kitchen",
  "title": "Tacos de Birria (Tacos de Birria)",
  "description": "Des côtes courtes de boeuf braisaient bas et lents dans un mélange de guajillo, d'anchois et de árbol chiles, le bouillon si richement gélatineux qu'il frit en laque lorsque la tortilla frappe la poêle. Chaque taco est une affaire à deux gouttes : tremper la tortilla de maïs dans le consommé, la charger avec du boeuf déchiqueté et du fromage Oaxacan, puis la saisir jusqu'à ce que les cloques extérieures et le fromage fondent dans la viande.",
  "cuisine": "Mexicain (Jalisco)",
  "culture": "Jalisciense",
  "category": "proteins",
  "tags": [
    "boeuf",
    "tacos",
    "braise",
    "les chiles",
    "Mexique",
    "Jalisco",
    "Consommation",
    "Sans gluten"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 1847,
  "forks": 134,
  "contributors": 42,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes courtes de boeuf",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mandrin de boeuf",
        "jambe de chèvre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Chiles de Guajillo, pédés et ensemencés",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Chiles anchos, épinés et ensemencés",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Chiles de pasilla"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Chiles d'arbol, en tige",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Tomates roms, coupées en deux",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gousses d'ail",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Stick de cannelle mexicaine (canelle)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Origan mexicain séché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Marjoram"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "toasted_chiles",
      "instructions": "Chauffer une poêle en comal sec ou en fonte à feu moyen. Appuyez sur chaque chile plat contre la surface pendant 10 à 15 secondes de chaque côté, jusqu'à ce qu'il adoucisse et sente profondément parfumé — comme les raisins secs et le cuir — avec la plus faible touche de fumée. Transférer immédiatement dans un bol et couvrir d'eau bouillante. Peser avec une assiette et tremper pendant 20 minutes jusqu'à ce qu'il soit complètement souple.",
      "visualCue": {
        "primaryTarget": "Les Chiliens devraient être profondément pliables et une ombre plus foncée, la surface légèrement cloquée mais pas carbonisée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens sont encore raides et papiers. Le bol d'eau imbibée est à peine teinté.",
            "action": "Retourner chaque chile dans le comal pendant 5 à 8 secondes de chaque côté."
          },
          {
            "state": "Perfect",
            "description": "Les Chiliens sont souples et solidaires. L'eau qui sème est rouge brique. La cuisine sent les fruits secs et la fumée chaude.",
            "action": "Égoutter les chiles, réserver 1 tasse liquide de trempage. Procéder au mélange."
          },
          {
            "state": "Overdone",
            "description": "Des taches noires recouvrent la peau de chile. L'eau qui sème sent acre et amère.",
            "action": "Jeter les chiles noircis — ils rendront la sauce entière amère. Utiliser des chiles non grillés trempés uniquement dans l'eau bouillante."
          }
        ]
      },
      "feelCue": "Un chile bien grillé est aussi souple qu'un morceau de cuir doux et libère un arôme chaud et noisette au moment où il touche la poêle chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "charred_aromatics",
      "instructions": "Sur le même comal sec ou poêle à feu vif, placer les moitiés de tomates coupées, les quartiers d'oignon et les gousses d'ail (non pelées). Char jusqu'à ce que les tomates soient noircies dans les taches et les jus ont caramélisé, environ 8 minutes. Tourne tout une fois. Les peaux d'ail seront cloquées et les bords de l'oignon iront en ambre foncé. Ne vous précipitez pas — cet omble est l'épine dorsale de la saveur du consommé.",
      "visualCue": {
        "primaryTarget": "Des marques de char sur les tomates. Bords d'oignon noircis. Peaux d'ail blister et papier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont juste à la vapeur, pas d'omble visible. L'oignon est ramolli mais pâle.",
            "action": "Augmenter la chaleur. Laissez tout intact pendant au moins 4 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les tomates ont des taches noires distinctes et une chair effondrée. Les bords de l'oignon sont foncés, ambrés ou noirs. Les peaux d'ail sont carbonisées et papier.",
            "action": "Retirer du feu. Peler l'ail. Transférez tout au mélangeur."
          },
          {
            "state": "Overdone",
            "description": "Tous les aromatiques sont uniformément noirs et acrides. La fumée est excessive.",
            "action": "Jetez le lot. L'amertume ne fera pas cuire à partir d'une base aromatique entièrement brûlée."
          }
        ]
      },
      "feelCue": "Vous voulez que le comal crie chaud pour que l'humidité soit chassée et la caramélisation, non la vapeur, fait le travail — les tomates doivent siffler et cracher quand ils entrent en contact."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "toasted_chiles",
        "charred_aromatics",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "birria_chile_paste",
      "instructions": "Égoutter les chiles réhydratés, réserver le liquide absorbant. Peler l'ail. Mélanger les chiles, les aromatiques carbonés, la cannelle, l'origan et le sel dans un mélangeur. Ajouter 1 tasse du liquide de trempage réservé (dégustez-le d'abord — s'il est amer, utilisez plutôt de l'eau pure). Mélanger en haut pendant 90 secondes jusqu'à ce qu'il soit complètement lisse. La sauce doit verser comme de la crème lourde. Passer à travers un filtre moyen, presser les solides.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique profonde, presque acajou qui enveloppe une cuillère épaissement sans fragments de peau de chile visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est granuleuse. Les peaux du Chili sont visibles comme des taches. Le mélange se déverse à peine.",
            "action": "Mélanger encore 60 secondes. Ajoutez un peu plus de liquide pour aider les lames à attraper."
          },
          {
            "state": "Perfect",
            "description": "La sauce verse en douceur, enrobe une cuillère dans une couche rouge-brun profonde, et passe à travers la passoire avec très peu de déchets solides.",
            "action": "Assaisonner de sel et faire cuire."
          },
          {
            "state": "Overdone",
            "description": "La sauce est fine et aqueuse par excès de liquide. La couleur est orange pâle.",
            "action": "Il réduira pendant le brasage. Ajouter seulement assez d'eau dans le pot pour couvrir la viande."
          }
        ]
      },
      "feelCue": "Lorsque vous faites glisser un doigt dans la sauce à l'arrière de la cuillère, la ligne doit tenir pendant 3 secondes avant que les bords commencent à glisser en arrière."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "ing_01",
        "birria_chile_paste"
      ],
      "outputState": "braised_birria",
      "instructions": "Assaisonner les côtes courtes agressivement avec du sel. Dans un grand four hollandais ou un pot lourd, faire revenir les côtes par lots à feu vif — 4 minutes de chaque côté jusqu'à ce qu'elles soient profondément séchées. Verser la pâte de chile et suffisamment d'eau pour couvrir la viande (environ 4-5 tasses). Porter à ébullition, puis laisser mijoter au plus bas. Couvrir et cuire partiellement pendant 3,5 à 4 heures, jusqu'à ce que la viande tombe de l'os sans résistance. Graisse écrémée de la surface toutes les 45 minutes — cette graisse écrémée est de l'or; réservez-la pour faire frire les tortillas.",
      "visualCue": {
        "primaryTarget": "La viande doit glisser de l'os sous la pression la plus douce. Le consommé est profondément rouge, brillant et visiblement réduit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande résiste lorsqu'elle est tirée avec des pinces. L'intérieur est encore gris rose. Consommé est mince.",
            "action": "Continuez à braquer, à vérifier toutes les 30 minutes. Le collagène n'a pas encore été transformé en gélatine."
          },
          {
            "state": "Perfect",
            "description": "Les côtes courtes donnent à coup sûr. Le consommé qui l'entoure est assez épais pour enrober une louche et agiter comme un jello lâche quand le pot est bouché.",
            "action": "Retirer la viande, la déchiqueter, jeter les os. Saison conseillée au goût."
          },
          {
            "state": "Overdone",
            "description": "La viande s'est désintégrée dans des lambeaux secs. Le gras s'est séparé et flotte sous forme de lécher épais orange.",
            "action": "Abattez la couche grasse, déchiquetez la viande doucement, ajoutez une tasse d'eau au consommé et goûtez pour l'équilibre."
          }
        ]
      },
      "feelCue": "Le consommé devrait être assez riche pour qu'une cuillère se refroidisse à un gel doux sur une assiette froide, ce qui tremble vous dit que le collagène a fait son travail."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "braised_birria"
      ],
      "outputState": "finished_birria_tacos",
      "instructions": "Chauffer un comal ou une grille à feu moyen-élevé. Badigeonner ou étaler la graisse de chile écrémé réservée sur la surface. Plongez une tortilla de maïs dans le consommé chaud pendant 3-4 secondes — il devrait émerger une brique rouge profonde. Pose ça sur le comal. Pile un côté avec de la viande de birria déchiquetée et un poing de quesillo (fromage Oaxacan). Repliez la tortilla et appuyez doucement. Cuire 90 secondes par côté, jusqu'à ce que les croustillants extérieurs et le fromage aient fondu dans la viande. Servir avec un ramekin de consommé chaud pour tremper, dés d'oignon blanc et de coriandre.",
      "visualCue": {
        "primaryTarget": "Tacos sont laqués une acajou profonde avec des bords croustillants et blisters. Le fromage est complètement fondu. Consommé brille dans le ramekin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tortilla est encore molle et molle. Le fromage n'a pas fondu. Pas de vertige sonore.",
            "action": "Appuyez sur le taco avec une spatule. Attendez encore 60 secondes de chaque côté."
          },
          {
            "state": "Perfect",
            "description": "Taco est rigide et laqué. Un léger craquement est audible lorsque la spatule la presse. Les premières ficelles de fromage apparaissent à la couture.",
            "action": "Assiette immédiatement, consommé sur le côté."
          },
          {
            "state": "Overdone",
            "description": "Tortilla a brûlé à un croustillant et craque plutôt que des plis. Le fromage est carbonisé aux bords.",
            "action": "Réduire la chaleur. Le comal est trop chaud — trempez une tortilla fraîche et continuez."
          }
        ]
      },
      "feelCue": "Le taco fini doit se sentir rigide et craquer faiblement lorsqu'il est soulevé — l'extérieur une mince coquille fragile qui se brise pour révéler l'intérieur fondu et bouillonnant."
    }
  ]
};
