export default {
  "repoId": "master_spanish_patatas-bravas-sauce_001",
  "parentRepoId": null,
  "slug": "patatas-bravas-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce de bravas Patatas",
  "description": "Une sauce rouge- paprika audacieuse avec la férocité fumée du chilis séché et le contrepoint frais à l'ail de l'aioli – chaque bouchée de pomme de terre arrive à deux températures, deux textures, deux tempéraments.",
  "cuisine": "Espagnol",
  "culture": "Espagne",
  "category": "sauces",
  "tags": [
    "tomates épicées",
    "Aïoli",
    "Espagnol",
    "Tapas",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 5,
    "sour": 3,
    "bitter": 2,
    "umami": 5,
    "heat": 7
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail, finement hachées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Paprika fumé doux (pimentón dulce)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika fumé à chaud (pimentón picante)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Cayenne, utilisez la moitié de la quantité"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates en conserve concassées",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates fraîches, râpées sur une boîte"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de sherry",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Mayonnaise pleine matière grasse (pour couche d'aioli)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "bloomed_paprika_base",
      "instructions": "Chauffer l'huile d'olive dans une petite casserole à feu moyen-doux. Ajouter l'ail haché et cuire pendant 60-90 secondes, en remuant constamment, jusqu'à ce qu'il soit parfumé et commence juste à tourner doré aux bords — non doré. Retirer du feu et ajouter immédiatement les deux paprikas. Agiter vigoureusement pendant 30 secondes; la chaleur résiduelle fleurira les épices sans les brûler. Le paprika brûlant est irréversible et produit une amertume aiguë.",
      "visualCue": {
        "primaryTarget": "L'huile est teinte d'un rouge brique profond, le paprika entièrement mouillé et parfumé. L'ail est doré aux bords, mais pas brun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est translucide et frais. Paprika est assis dans des touffes, pas complètement dispersé dans l'huile.",
            "action": "Retourner à feu doux pendant 30 secondes, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "L'huile est rouge-orange vif, uniformément teintée. Des odeurs de fumée douce, d'épices grillées et d'ail doux.",
            "action": "Ajouter immédiatement les tomates pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun ou le paprika sent aiguisé et acride. Des taches sombres dans l'huile.",
            "action": "Jeter et recommencer — le paprika brûlé détruit toute la sauce et ne peut être réparé."
          }
        ]
      },
      "feelCue": "Tenez votre paume au - dessus de la poêle — vous devriez sentir la chaleur, mais pas la chaleur brûlante. Les épices doivent siffler doucement quand elles frappent l'huile, et non pas cracher."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "bloomed_paprika_base",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "bravas_sauce",
      "instructions": "Ajouter les tomates concassées, le vinaigre de sherry, le sel et le sucre dans la casserole. Mélanger avec la base de paprika fleurie. Faire mijoter légèrement à feu moyen, puis réduire à faible. Cuire à découvert pendant 15 à 20 minutes, en remuant de temps en temps, jusqu'à ce que la sauce s'épaississe à une pâte molle qui fond légèrement sur une cuillère et ne goûte plus cru.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, brillante et rouge foncé qui enveloppe l'arrière d'une cuillère et laisse une ligne propre quand vous tirez un doigt dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse. Les tomates ont un goût vif et cru. Des bulles de surface activement.",
            "action": "Continuez à mijoter. Mélanger plus souvent pour éviter de coller sur le fond."
          },
          {
            "state": "Perfect",
            "description": "La sauce s'éloigne des côtés de la poêle lorsqu'elle est remuée. La ligne draguée spoon tient propre pendant 3 secondes. L'arôme est profond, fumé et équilibré.",
            "action": "Goûtez et ajustez - plus de vinaigre pour la luminosité, le sucre pour apprivoiser l'acidité. Laisser refroidir légèrement avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très épaisse et sombre, collant agressivement à la poêle. Peut avoir un bord légèrement caramélisé ou amer.",
            "action": "Arroser d'une éclaboussure d'eau et remuer vigoureusement à feu doux pour réintégrer."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois sur le fond de la casserole — si la sauce se referme lentement sur 2-3 secondes, elle est prête. Une crue rapide nécessite plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "bravas_sauce"
      ],
      "outputState": "smooth_bravas_sauce",
      "instructions": "Pour une sauce au restaurant-smooth, transférez soigneusement la sauce tiède dans un mélangeur et mélangez-la haut pendant 60 secondes jusqu'à ce qu'elle soit complètement lisse. Alternativement, utiliser un mélangeur d'immersion directement dans la casserole. C'est facultatif — la sauce est excellente, soit molle, soit lisse — mais la version lisse s'accroche mieux aux pommes de terre frites.",
      "visualCue": {
        "primaryTarget": "Une sauce uniformément brillante, de couleur profonde sans graines de tomate ni fragments de peau visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a une texture rugueuse et granuleuse. Morceaux de peau de tomate visibles.",
            "action": "Mélanger plus longtemps. Si vous utilisez un mélangeur d'immersion, déplacez-le dans tout le volume de la sauce."
          },
          {
            "state": "Perfect",
            "description": "La sauce sort du mélangeur dans une feuille lisse et brillante. Riche, même la couleur partout.",
            "action": "Retourner dans la poêle pour réchauffer doucement avant de servir, ou refroidir et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été surchargée et est maintenant mousseuse et pâle de l'aération.",
            "action": "Laisser reposer 5 minutes. La mousse s'installera et la couleur s'approfondira à nouveau."
          }
        ]
      },
      "feelCue": "Exécutez un doigt sur l'arrière d'une cuillère — il devrait se sentir complètement lisse, comme la laque peinte, sans grain ni texture."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_02"
      ],
      "outputState": "quick_aioli",
      "instructions": "Pour la couche d'aioli : remuer la mayonnaise avec une petite gousse d'ail hachée et le jus de citron frais jusqu'à ce qu'elle soit lisse. Boucher — il doit être aiguisé avec l'ail, brillant avec le citron, et crémeux. C'est un aioli raccourci; pour la version complète, émulsifier à partir du jaune d'œuf. Réfrigérer jusqu'au service.",
      "visualCue": {
        "primaryTarget": "Une crème épaisse et pâle avec de minuscules taches d'ail, brillante et lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail et le citron ne sont pas entièrement incorporés. Streaks de mayo clair visible.",
            "action": "Mélanger plus vigoureusement pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, blanc ivoire, fortement ailé avec un lifting citron clair. Prend un pic doux quand traîné.",
            "action": "Couvrir et réfrigérer jusqu'à ce que nécessaire."
          },
          {
            "state": "Overdone",
            "description": "Trop de citron a éclairci la mayo à une consistance d'écoulement.",
            "action": "Incorporer une cuillère de mayo frais pour rééquilibrer la texture."
          }
        ]
      },
      "feelCue": "L'aioli doit tomber d'une cuillère dans un ruban épais et lent, suffisamment substantiel pour se mettre sur la sauce sans sombrer immédiatement."
    }
  ]
};
