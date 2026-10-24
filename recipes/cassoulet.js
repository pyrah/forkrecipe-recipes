export default {
  "repoId": "master_french_cassoulet_001",
  "parentRepoId": null,
  "slug": "cassoulet",
  "author": "ForkRecipe Kitchen",
  "title": "Cassoulet",
  "description": "Une terrine profonde de haricots Tarbais crémeux enterrés sous la confit de canard et la saucisse de Toulouse, cuits jusqu'à ce qu'une croûte dorée croustillante de pain se forme et se reforme trois fois, l'âme du Languedoc dans un seul pot.",
  "cuisine": "Français",
  "culture": "Languedocienne",
  "category": "grains",
  "tags": [
    "français",
    "haricots",
    "canard",
    "Saucisse",
    "Cuisson lente",
    "hiver"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "6 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graines de Tarbais séchées (ou flageolet, trempées pendant la nuit)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "grands haricots du Nord",
        "haricots cannellini"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Pieds confits de canard (2 jambes, de jambes confits)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "jambes de canard grillées lentement dans l'huile d'olive"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Saucisse toulousaine (ou saucisse de porc grossière)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Merguez de porc",
        "saucisse à l'ail frais"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Porc ventre (peau, coupé en gros lardons)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "lardons de bacon fumés",
        "Pancetta"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune (en dés)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Poulet ou porc",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "haricot liquide de cuisson"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Purée de tomates (concentré double)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Bouquet garni (thyme, feuilles de laurier, romarin)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Structure",
      "name": "Pain blanc d'un jour (bétonné en miettes grossières)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "chapelures panko"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_09"
      ],
      "outputState": "cooked_beans",
      "instructions": "Égoutter les haricots trempés et les déposer dans une grande casserole à l'eau froide fraîche pour couvrir de 5 cm. Ajouter le bouquet garni. Porter à ébullition, puis laisser mijoter régulièrement. Cuire de 60 à 90 minutes jusqu'à ce que les haricots soient tendres, mais garder leur forme complètement — ils ne doivent pas être musqués, car ils continueront à cuire dans le cassoulet. Assaisonner avec du sel seulement dans les 10 dernières minutes de cuisson, car saler trop tôt durcit les peaux. Réservez le liquide de cuisson.",
      "visualCue": {
        "primaryTarget": "Les haricots sont blancs crémeux, gonflés et tendres tout au long, mais chaque haricot tient sa forme et n'éclate ni ne se divise lorsqu'il est pressé entre le pouce et l'index.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots ont un centre crayeux et féculent quand ils sont mordus. La peau extérieure est tendre mais l'intérieur est pâteux.",
            "action": "Continuer à mijoter et vérifier toutes les 15 minutes — les haricots sous -dos n'absorberont jamais correctement le bouillon dans la cuisson finale."
          },
          {
            "state": "Perfect",
            "description": "Les haricots sont uniformément crémeux dans l'ensemble, tendres avec une légère morsure — ils tiennent leur forme lorsqu'une cuillère est pressée en eux mais donnent facilement.",
            "action": "Égoutter, réserver le liquide de cuisson et construire le cassoulet."
          },
          {
            "state": "Overdone",
            "description": "Les haricots sont complètement fendus ouverts et musqués, s'écroulant d'un coup.",
            "action": "Ils sont encore utilisables mais le cassoulet sera plus d'un ragoût épais qu'une terrine à haricots distincts. Continuez avec soin."
          }
        ]
      },
      "feelCue": "Appuyez sur un seul haricot entre le pouce et l'index — il doit donner complètement et se sentir uniformément crémeux de la peau au centre, sans noyau dur ou crayeux. Si la peau glisse facilement, le haricot est fait."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "browned_meats",
      "instructions": "Dans une grande casole lourde ou un four hollandais, rendre les lardons du ventre de porc à feu moyen jusqu'à ce que l'or et leur graisse aient couru. Enlevez les lardons. Dans la même graisse, faire revenir les saucisses toulousaines pendant 5-6 minutes jusqu'à ce qu'elles soient profondément colorées — ne pas cuire. Enlevez. Ajouter l'oignon et l'ail au gras restant et cuire à feu moyen-doux pendant 8 minutes jusqu'à ce qu'ils soient adoucis et dorés. Incorporer la purée de tomates et cuire encore 2 minutes jusqu'à ce qu'elle s'assombrisse légèrement. Le fond (mèches connues) au fond du pot est l'épine dorsale de la profondeur du cassoulet.",
      "visualCue": {
        "primaryTarget": "Les saucissons sont profondément dorés de tous les côtés, riches en acajou et en gras dorés. Les lardons sont croustillants et ambres. L'oignon est doux, doré et sent bon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les saucisses sont grises et bouillies plutôt que brunes. L'oignon est fondant et translucide.",
            "action": "Augmentez la chaleur et faites cuire plus longtemps — les viandes non savourées ne contribuent presque pas à la complexité de la saveur du plat final."
          },
          {
            "state": "Perfect",
            "description": "Toutes les surfaces sont profondément dorées. Un riche fond d'acajou enveloppe le fond du pot. La purée de tomate est devenue rouge brique et parfumée.",
            "action": "Déglacer avec une louche de stock et commencer à assembler."
          },
          {
            "state": "Overdone",
            "description": "Le fond de la poêle est noir et acride plutôt que brun acajou.",
            "action": "Verser soigneusement l'excès de graisse et déglacer très doucement — n'utilisez que le fond qui se soulève proprement, laissant tout dépôt vraiment noir."
          }
        ]
      },
      "feelCue": "Mettez une saucisse dans la poêle et écoutez - elle devrait faire un étourdissement fort et affirmé au moment où elle touche la graisse. S'il est simplement assis là tranquillement, la graisse n'est pas assez chaude et la viande va ragoûter plutôt que de semer."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "browned_meats",
        "cooked_beans",
        "ing_02",
        "ing_07"
      ],
      "outputState": "assembled_cassoulet",
      "instructions": "Préchauffer le four à 150 C (300 F). Ajouter les haricots cuits, les lardons, et déposer dans la casserole avec la base oignon-tomate. Mélanger délicatement sans casser les haricots. Nettoyez les saucisses brunes et les pattes confites de canard (peau vers le haut) dans les haricots. Ajouter suffisamment de liquide de cuisson de haricots pour atteindre le dessus des haricots. La peau de canard doit se poser juste au-dessus de la surface, elle formera la première couche de croûte. Porter à frémir sur la cuisinière, puis passer au four et cuire à découvert pendant 2,5 à 3 heures.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée s'est formée sur toute la surface du cassoulet. Visible à travers les bords de la croûte, le bouillon est épais, doré et à peine mijotant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1 heure, la surface est encore blanche et humide. Aucune croûte ne s'est formée.",
            "action": "Augmentez la température du four de 10 degrés et continuez — la croûte a besoin de chaleur sèche pour se former."
          },
          {
            "state": "Perfect",
            "description": "Une croûte dorée continue recouvre la surface. Lorsque le bouillon est pressé doucement avec une cuillère et poussé vers le bas dans les fèves, le bouillon s'élève autour d'elle — cette étape de « rupture de la croûte » est intentionnelle et se produit 2 à 3 fois pendant la cuisson.",
            "action": "Briser la croûte deux fois plus pendant le temps restant de cuisson, à chaque fois la presser dans les haricots et permettre à un nouveau à se former."
          },
          {
            "state": "Overdone",
            "description": "La croûte est devenue très sombre et les haricots au bord de la terrine commencent à sécher et à craquer.",
            "action": "Couvrir librement avec du papier pour le temps restant, ou ajouter une louche de bouillon chaud autour des bords."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur une louche à travers la croûte — vous devriez sentir la résistance de la coquille dorée céder le chemin et entendre le sifflement doux du bouillon se lever à travers les haricots. L'odeur doit être profondément salée, porcine et herbacée."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_cassoulet",
        "ing_10"
      ],
      "outputState": "finished_cassoulet",
      "instructions": "Dans les 30 dernières minutes de cuisson, dispersez les miettes de pain uniformément sur la surface dans une couche mince et continue. Augmenter la température du four à 180 C (350 F) et cuire jusqu'à ce que les miettes soient profondément dorées et croquantes. Cette dernière croûte de miettes est l'élément textural déterminant d'un bon cassoulet — elle devrait se briser lorsqu'une cuillère coupe, laissant place aux haricots crémeux, fumés, parfumés d'herbe en dessous. Reposez-vous 10 minutes avant de servir directement du terrine à la table.",
      "visualCue": {
        "primaryTarget": "Une croûte de miettes d'or uniformément profonde recouvre toute la surface, complètement sèche et croquante. La peau de canard visible à travers la croûte au centre est acajou foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les miettes de pain sont d'or pâle et encore douces, absorbant le bouillon du dessous.",
            "action": "Augmentez la température du four à 190 °C et faites cuire 10 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Les miettes sont la couleur des noisettes grillées — uniforme, croquant, parfumé. Lorsqu'une grosse cuillère se coupe, la miette se brise plutôt que de plier. Les haricots en dessous sont crémeux et savoureux.",
            "action": "Apportez la terrine à la table et servez en brisant la croûte à la table pour le drame."
          },
          {
            "state": "Overdone",
            "description": "Les miettes sont brun foncé, presque carbonisées, et ont un goût amer.",
            "action": "Grattez les miettes les plus sombres de côté et exposez la couche en dessous, qui sera bien écrêtée mais non brûlée."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt sur la surface de la miette — il doit sentir sec, rigide et granulaire comme du papier de sable grossier. Tout don ou douceur signifie que les miettes sont encore humides et nécessitent plus de temps au four."
    }
  ]
};
