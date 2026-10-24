export default {
  "repoId": "master_indian_dal_makhani_001",
  "parentRepoId": null,
  "slug": "dal-makhani",
  "author": "ForkRecipe Kitchen",
  "title": "Dal Makhani",
  "description": "Lentilles noires entières et fèves de rein mijotées lentement pendant la nuit dans les tomates, le beurre et la crème — le dal qui définit le confort des Indiens du Nord, riche et noir de minuit.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "grains",
  "tags": [
    "dal",
    "lentilles",
    "indienne",
    "punjabi",
    "végétarien",
    "Cuisson lente",
    "confort"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "14 hr",
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
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "URAD noir entier",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "lentilles béluga noires"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Haricots rouges séchés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots rénaux en conserve (réduire le temps d'immersion)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Tomates passata",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates concassées en conserve"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre végétal"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème de cajou"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poudre de chili cachemiri",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux + pincée cayenne"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Kasuri methi (feuilles de fénugreek séchées)",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_dal_and_beans",
      "instructions": "Rincer l'urad noir et les haricots des reins sous l'eau froide jusqu'à ce que l'eau soit claire. Mélanger dans un grand bol, couvrir d'eau froide d'au moins 5 cm et tremper pendant au moins 8 heures ou toute la nuit. Le dal va gonfler pour presque doubler son volume. Égoutter et jeter l'eau de trempe avant la cuisson.",
      "visualCue": {
        "primaryTarget": "Plumeau, dal gonflé et haricots qui se sont développés des cailloux ridés aux sphères lisses et tendues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dal a toujours l'air dense et éparpillé. Centre toujours blanc crayeux quand on est fendu ouvert.",
            "action": "Continuez à tremper. Par temps froid, prolonger jusqu'à 12 heures. Ne jamais cuire l'urad entier non apaisé — il refusera d'adoucir dans un délai raisonnable."
          },
          {
            "state": "Perfect",
            "description": "Tant le dal que les haricots sont enflés et enflés, légèrement mats à la surface. Ils écrasent entre les doigts avec une pression ferme mais induisante.",
            "action": "Égoutter et passer immédiatement à l'étape d'immersion."
          },
          {
            "state": "Overdone",
            "description": "Les peaux se divisent et glissent. Une odeur aigre et fermentée s'élève de l'eau qui trempe.",
            "action": "Égoutter et cuire immédiatement. Le dal est encore parfaitement utilisable — ne le laissez pas s'imprégner davantage."
          }
        ]
      },
      "feelCue": "Un dal d'urad noir bien trempé ressemble à un raisin ferme — il donne légèrement quand pincée entre deux doigts mais tient toujours sa forme. La peau doit se sentir tendue, pas lâche ou lâche."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "soaked_dal_and_beans"
      ],
      "outputState": "cooked_dal",
      "instructions": "Transférer le dal drainé et les haricots dans une casserole lourde ou une cuisinière à pression. Couvrir d'eau froide fraîche de 5 cm. Si vous utilisez une cuisinière à pression, faites cuire à haute pression pendant 25 à 30 minutes. Si vous mijotez sur la cuisinière, porter à ébullition, écrémer toute mousse grise, puis réduire à mijoter doucement. Cuire 60 à 90 minutes, en ajoutant de l'eau chaude pour maintenir le dal immergé. Le dal et les haricots doivent être complètement, complètement doux avant de les combiner avec le masala — un dal sous - done ne finira jamais correctement la cuisson dans la sauce. Réservez le liquide de cuisson.",
      "visualCue": {
        "primaryTarget": "Complètement doux dal et haricots avec quelques peaux éclatantes. Le liquide de cuisson est opaque, brun foncé et nuageux avec de l'amidon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots tiennent toujours leur forme fermement lorsqu'ils sont pressés. Pas de nuages dans l'eau de cuisson. Les haricots rein se sentent crayeux et gritty au centre.",
            "action": "Continuer la cuisson en ajoutant de l'eau si nécessaire. Cette étape ne peut pas être précipitée - les haricots durs dans le dal makhani est une erreur irrécupérable."
          },
          {
            "state": "Perfect",
            "description": "Un haricot pressé entre le pouce et l'index s'effondre sans résistance dans une pâte lisse et crémeuse. Quelques peaux ont explosé. L'eau est sombre et féculente.",
            "action": "Réserver tout le liquide de cuisson — c'est la base du dal. Continuez à construire le masala."
          },
          {
            "state": "Overdone",
            "description": "La plupart des peaux ont éclaté et le dal a commencé à se dissoudre en une masse épaisse, semblable au porridge.",
            "action": "Continuer — ce n'est pas un problème. Le dal légèrement surcuit crée une texture finale encore plus soyeuse et est la façon dont les meilleurs dhabas le cuisinent."
          }
        ]
      },
      "feelCue": "Pincez un haricot de rein cuit entre le pouce et l'index. Il devrait s'effondrer instantanément dans une pâte lisse sans résistance à l'amidon au centre."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_13"
      ],
      "outputState": "bhuna_masala",
      "instructions": "Dans un pot à fond lourd ou karahi séparé, faire fondre la moitié du beurre à feu moyen. Ajouter les graines de cumin et attendre 30 secondes jusqu'à ce qu'elles craignent et s'assombrissent. Ajouter l'oignon et faire cuire, en remuant fréquemment, pendant 12 à 15 minutes jusqu'à ce qu'il soit brun-or profond — pas blond, pas pâle. Ajouter l'ail et le gingembre; cuire 2 minutes jusqu'à ce que l'odeur brute disparaisse. Ajouter la poudre de chili cachemiri, le garam masala et le sel; remuer pendant 30 secondes jusqu'à parfumer. Verser la passata de tomate et cuire, en remuant souvent et en grattant le fond, pendant 15 à 20 minutes. C'est la bhuna : le masala doit être rôti dans la poêle jusqu'à ce que la graisse se sépare et les piscines aux bords, la tomate devient rouge brique profonde, et il n'y a plus d'odeur de tomate crue. Ne vous pressez pas.",
      "visualCue": {
        "primaryTarget": "Graisse visiblement piscines et frissons aux bords du masala. La couleur est rouge rouille profonde, presque marron. La texture est jammy et concentrée, pas liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Masala est encore rouge-orange et humide. Une odeur de tomate forte et acide persiste. La graisse n'est pas séparée.",
            "action": "Gardez la cuisson à feu moyen, en remuant pour éviter de coller. L'huile doit se séparer des bords avant de procéder — cela demande patience."
          },
          {
            "state": "Perfect",
            "description": "Des piscines de beurre visiblement aux bords. Le masala est sombre, jammy, et glisse proprement de la cuillère dans une masse lente. L'arôme est doux, noisette et profondément épicé — pas de bord cru.",
            "action": "Ajouter le dal cuit et son liquide de cuisson réservé dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Masala est brun foncé et commence à coller au bas dans les taches de noircissement. Un bord amer à l'odeur.",
            "action": "Déglacer immédiatement avec une louche de l'eau de cuisson du dal et gratter tout le fond du fond — il est encore savoureux."
          }
        ]
      },
      "feelCue": "Un masala bien balayé fait un bruit de craquage sec pendant que vous le remuez, pas un bruit de vapeur humide. Quand le craquelin remplace le sifflement, la graisse s'est séparée et la bhuna est faite."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "cooked_dal",
        "bhuna_masala",
        "ing_08",
        "ing_12"
      ],
      "outputState": "finished_dal_makhani",
      "instructions": "Ajouter le dal et les haricots cuits au bhuna masala, ainsi que suffisamment de liquide de cuisson réservé pour faire une consistance épaisse mais versable. Mélangez tout ensemble et faites mijoter doucement. Cuire à découvert sur la chaleur absolue la plus basse — un diffuseur aide — pendant au moins 2 heures, en remuant toutes les 20 minutes. Quatre à six heures, c'est mieux. Le dal s'amplifiera de brun à presque noir et les saveurs s'uniront. A 15 minutes, mélanger la crème lourde et le beurre restant. Frottez vigoureusement le kasuri methi entre vos paumes pour libérer ses huiles avant de l'écraser. Goûtez et corrigez le sel. Servir avec du beurre naan ou des basmati à la vapeur.",
      "visualCue": {
        "primaryTarget": "Dard foncé de minuit, brillant avec des piscines de beurre rouge orange chatoyant à la surface. Assez épais pour envelopper l'arrière d'une cuillère dans une goutte épaisse et lente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dal est encore brun-rouge, pas sombre. La texture est bouillonnante et lâche. Les saveurs ont un goût net et séparé — vous pouvez encore identifier la tomate et les épices comme des choses individuelles.",
            "action": "Continuez à mijoter. Dal makhani est un plat du temps. Même 2 heures, c'est le minimum : la mijotée de nuit est ce qui crée sa profondeur légendaire."
          },
          {
            "state": "Perfect",
            "description": "Le dal est presque noir, brillant et épais. Il enveloppe l'arrière d'une cuillère dans un ruban velouté. Beurre et crème ont émulsifié dans l'ensemble. L'arôme est fumé, beurreux et profondément complexe.",
            "action": "Terminer avec du kasuri methi, ajuster le sel et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le dal s'est épaissi jusqu'à une pâte raide qui déboîte la cuillère. La crème a légèrement cassé et vous pouvez voir des fils blancs.",
            "action": "Ajouter l'eau chaude ou le bouillon, remuer vigoureusement à feu doux et laisser mijoter. La saveur est encore excellente — il suffit de se détendre."
          }
        ]
      },
      "feelCue": "Dal makhani devrait se sentir lourd dans la poche — non pas bouillonnant, pas pudding-stiff, mais quelque part entre les deux, avec une résistance soyeuse qui s'accroche à la cuillère et tombe dans un courant lent et brillant."
    }
  ]
};
