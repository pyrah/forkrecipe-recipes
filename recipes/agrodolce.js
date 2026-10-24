export default {
  "repoId": "master_italian_agrodolce_001",
  "parentRepoId": null,
  "slug": "agrodolce",
  "author": "ForkRecipe Kitchen",
  "title": "Agrodolce",
  "description": "Réduction aigre-douce sicilienne : du vinaigre de vin rouge et du sucre mijotent jusqu’à former un sirop, puis sont relevés de pignons, de raisins secs et d’aromates. Cette sauce brillante, couleur acajou, accompagne le gibier et le porc. Sa saveur oscille entre caramel et acidité, avec une profondeur ancienne et complexe.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "sauces",
  "tags": [
    "agrodolce",
    "Italien",
    "aigre-doux",
    "sicilienne"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "miel pour une agrodolce florale",
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sherry pour une saveur plus profonde",
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes ou oignons rouges, tranchés finement",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Raisins (or ou noir)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Cerises séchées",
        "Cerises séchées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Noix de pin, légèrement grillées",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": [
        "aux amandes grillées"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet pour une version sans alcool"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Graines de romarin frais",
      "ratioValue": 1,
      "defaultUnit": "sprig",
      "substitutions": [
        "thym",
        "feuille de laurier"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Adoucir les échalotes",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_08"
      ],
      "outputState": "softened_shallots",
      "instructions": "Chauffer l'huile d'olive dans une grande casserole à feu moyen-doux. Ajouter les échalotes tranchées et le rameau de romarin. Cuire doucement, en remuant de temps en temps, pendant 6-8 minutes jusqu'à ce que les échalotes soient complètement douces, translucides et commencent juste à prendre une couleur dorée claire. Ils ne doivent pas brunir — la douceur de l'agrodolce vient du sucre, pas de l'oignon caramélisé.",
      "visualCue": {
        "primaryTarget": "Anneaux d'échalote translucides et floppy dans l'huile chaude, or pâle à leurs bords, le romarin commence à libérer sa résine dans l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore opaques et légèrement croquantes, tenant leur structure brute. Ils n'ont pas ramolli dans l'huile.",
            "action": "Abaissez le feu et continuez la cuisson avec un couvercle sur 3-4 minutes. Agrodolce a besoin de l'oignon complètement transpiré avant l'arrivée des liquides."
          },
          {
            "state": "Perfect",
            "description": "Complètement doux et translucide, doré aux bords, mais généralement pâle. L'huile dans la poêle est parfumée de romarin.",
            "action": "Ajouter le vin à déglacer, puis commencer à construire l'équilibre de notre douceur."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes ont bruni et commencent à croquer aux bords, la poêle sent l'oignon caramélisé.",
            "action": "Continuez, mais sachez que l'agrodolce aura un bord légèrement plus salé et amer de l'allium doré."
          }
        ]
      },
      "feelCue": "Les échalotes devraient ressembler à des rubans mou dans l'huile — vous devriez pouvoir voir l'huile à travers eux. Ils se sentiront tout doux si vous appuyez un contre la poêle avec une cuillère."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer et ajouter les raisins secs",
      "inputs": [
        "softened_shallots",
        "ing_07",
        "ing_05"
      ],
      "outputState": "reduced_base",
      "instructions": "Verser le vin blanc et le laisser buller et réduire de moitié à feu moyen, 3-4 minutes. Ajouter les raisins secs. Continuer à mijoter jusqu'à ce que le vin soit presque évaporé et que les raisins secs aient trempé dans le liquide. La poêle sera jammy et légèrement réduite.",
      "visualCue": {
        "primaryTarget": "Le vin s'est en grande partie évaporé; la poêle contient une petite quantité de liquide sirupeux, dentelé pourpre, avec des raisins secs de plomb nichés parmi les échalotes douces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore visiblement liquide et mince, pas encore réduit. Les raisins secs sont broyés et n'ont pas absorbé de liquide.",
            "action": "Augmenter légèrement le feu et laisser mijoter encore 2-3 minutes jusqu'à ce que le vin réduise à un glaçage sirupeux enrobant les échalotes."
          },
          {
            "state": "Perfect",
            "description": "Le vin est réduit à un sirop concentré; les raisins sont gonflés et scintillent. Une cuillère en bois traînée sur le fond laisse un sentier propre qui se remplit lentement.",
            "action": "Ajouter le sucre et le vinaigre pour construire l'agrodolce propre."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est réduit trop loin et les raisins commencent à s'attraper sur le fond de la poêle. L'arôme est vif et légèrement brûlé.",
            "action": "Ajoutez immédiatement une éclaboussure de vinaigre pour déglacer — il soulèvera le fond et l'acide empêchera toute autre combustion."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — le liquide doit se déplacer lentement, en enrobant le fond d'un mince film collant. Les raisins devraient être brillants et gonflés, comme les raisins."
    },
    {
      "nodeId": "step_3",
      "action": "Construire l'agrodolce",
      "inputs": [
        "reduced_base",
        "ing_01",
        "ing_02"
      ],
      "outputState": "agrodolce_sauce",
      "instructions": "Ajouter le sucre dans la poêle et remuer pendant 30 secondes jusqu'à ce qu'il commence à se dissoudre dans la chaleur de la base. Verser le vinaigre de vin rouge tout d'un coup — il fera une forte bulle. Mélanger et laisser mijoter à feu moyen pendant 8-10 minutes jusqu'à ce que la sauce diminue à une consistance sirupeuse qui enrobe une cuillère. Goût tout au long : le rapport sucre/ aigre devrait se sentir équilibré, et non pas à sens unique.",
      "visualCue": {
        "primaryTarget": "Une sauce acajou, sirupeuse et profonde — le vinaigre et le sucre ont réduit en quelque chose d'épais et brillant, s'accrochant à la cuillère et échalotes dans des feuilles de laque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et nette, avec l'acidité du vinaigre vers l'avant et la douceur non encore intégrée. Il coule librement de la cuillère.",
            "action": "Continuer à mijoter pour réduire. L'équilibre entre sucré et aigre n'apparaît que lorsque la teneur en eau se consume."
          },
          {
            "state": "Perfect",
            "description": "Assez épais pour enrober l'arrière d'une cuillère d'une couche brillante de couleur acajou. Douce et aigre arrivent ensemble, puis la sauce s'attarde. Les échalotes et les raisins secs sont suspendus dans la glaçure.",
            "action": "Incorporer les pignons grillés et assaisonner. Servir au chaud."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à une pâte collante et jammy qui file lorsqu'elle est levée sur une cuillère. Très doux, le vinaigre a largement disparu.",
            "action": "Ajouter une touche de vinaigre de vin rouge et une cuillère à soupe d'eau chaude, remuer à feu doux et goûter à nouveau."
          }
        ]
      },
      "feelCue": "Plongez une cuillère, maintenez-la et regardez tomber la sauce — à la bonne consistance, elle tombe dans des perles épaisses et lentes qui s'attachent momentanément avant de casser. Une goutte sur une plaque froide devrait tenir sa forme brièvement."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer avec les pignons de pin",
      "inputs": [
        "agrodolce_sauce",
        "ing_06",
        "ing_09"
      ],
      "outputState": "finished_agrodolce",
      "instructions": "Hors du feu, plier dans les pignons grillés et assaisonner de sel et de poivre noir. Le sel aiguisera de façon spectaculaire le contraste de la saveur douce — goût après chaque pincement. Enlevez le rameau de romarin. Servir au chaud sur le canard, le filet de porc, les cuisses de poulet grillées ou la courge d'hiver rôtie.",
      "visualCue": {
        "primaryTarget": "Une sauce foncée et brillante avec les pignons de pin qui brillent à l'intérieur, les échalotes et les raisins visibles à travers la glaçure acajou – il devrait ressembler à quelque chose de laqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pignons sont pâles et crus, pas encore grillés, leur donnant un goût vert amer dans la sauce finie.",
            "action": "Faire cuire les pignons séparément dans une poêle sèche jusqu'à ce qu'ils soient dorés avant de les ajouter — ils doivent sentir la noix et le chaud."
          },
          {
            "state": "Perfect",
            "description": "Les pignons sont dorés, leur richesse grillée comblant l'écart entre la netteté du vinaigre et la douceur du sucre. La sauce est équilibrée, brillante et aromatisée.",
            "action": "Servir immédiatement ou tenir au chaud. Agrodolce firmes comme il refroidit mais peut être réchauffé doucement."
          },
          {
            "state": "Overdone",
            "description": "Sursaisonnée de sel — la sauce a un goût aigu et unidimensionnel, l'équilibre sucré-sour est perturbé.",
            "action": "Incorporer une petite pincée supplémentaire de sucre pour rééquilibrer. Ajouter le sel parcimonieusement — cette sauce porte la sienne."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillère : des coups sucrés d'abord, puis l'acide soulève l'arrière du palais, puis le sel resserre tout et la richesse en pignons de pin s'attarde. Si une seule note crie, ajustez-la avant que la sauce ne quitte le pot."
    }
  ]
};
