export default {
  "repoId": "master_italian_ribollita_001",
  "parentRepoId": null,
  "slug": "ribollita",
  "author": "ForkRecipe Kitchen",
  "title": "Ribollita",
  "description": "Une soupe paysanne toscane épaisse, construite à partir des os du pain d'hier et du nero cavolo le plus sombre de la saison, réchauffée jusqu'à ce que les haricots se dissolvent dans le bouillon et que le pain déchiré gonfle jusqu'à une consistance tremblante, presque porridge, dans laquelle se dresse une cuillère.",
  "cuisine": "Italien",
  "culture": "Toscane",
  "category": "vegetables",
  "tags": [
    "Soupe",
    "Tuscan",
    "pain",
    "haricots",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 4,
    "umami": 6,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Graines de cannellini séchées, trempées pendant la nuit",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots cannellini en conserve, égouttés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Plaque toscane sciocco (pain non salé), déchirée",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tout pain de campagne inexistant"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Cavolo nero (lacinato kale), tiges enlevées, hachées approximativement",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Choux savoy"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâtes de céleri en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Carotte coupée en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Giroves d'ail écrasées",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "tomates entières en conserve de San Marzano, concassées à la main",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, plus plus à finir",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Romarin frais, sauge et thym (lié en un paquet)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "herbes séchées"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_10",
        "ing_11"
      ],
      "outputState": "cooked_beans",
      "instructions": "Égoutter les haricots trempés et couvrir d'eau froide fraîche de 5 cm dans un grand pot. Ajouter le paquet d'herbes et une pincée généreuse de sel. Porter à ébullition, écrémer toute mousse grise qui monte, puis réduire à mijoter doucement. Cuire pendant 60-90 minutes jusqu'à ce que les haricots soient complètement tendres tout au long sans centre crayeux quand mordu. Ne pas ajouter d'acide (pas de tomate, pas de vinaigre) jusqu'à ce que les haricots soient entièrement cuits — les peaux de haricots durs acides. Réserver tout le liquide de cuisson — il devient la base de la soupe. Enlevez le paquet d'herbes. Masser ou mélanger un tiers des haricots cuits directement dans le pot pour créer du corps dans la soupe; laisser les deux tiers entiers.",
      "visualCue": {
        "primaryTarget": "Haricots uniformément blanc crème et complètement tendres. Lorsqu'ils sont pressés entre le pouce et l'index, ils écrasent à une pâte lisse sans grain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont encore fermes avec un centre crayeux et poudreux. Résister au broyage entre les doigts.",
            "action": "Continuez à mijoter. Vérifiez toutes les 15 minutes — les vieux haricots peuvent prendre jusqu'à 2 heures."
          },
          {
            "state": "Perfect",
            "description": "Prêter tout le chemin, écraser à une pâte lisse, mais garder leur peau et la forme dans le bouillon.",
            "action": "Mash un tiers directement dans le pot et passer au soffritto."
          },
          {
            "state": "Overdone",
            "description": "Les haricots ont explosé et sont largement dissous dans le liquide de cuisson. Le bouillon est très épais et féculent.",
            "action": "C'est excellent pour la ribollita — continuez. Les haricots dissous créent un corps naturel."
          }
        ]
      },
      "feelCue": "Pincez un haricot entre le pouce et l'index — il devrait s'écraser complètement et en douceur, avec la texture de beurre doux, ne laissant aucun reste gritty."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "soffritto",
      "instructions": "Dans une grande casserole séparée, faire chauffer l'huile d'olive à feu moyen-doux. Ajouter l'oignon, le céleri, la carotte et l'ail avec une pincée de sel. Cuire lentement pendant 12-15 minutes, en remuant occasionnellement, jusqu'à ce que les légumes soient complètement doux, doux et légèrement dorés. C'est le soffritto — la fondation de la saveur. Les légumes doivent être si doux qu'ils se brisent lorsqu'ils sont pressés avec une cuillère. Ajouter les tomates écrasées, remuer et cuire encore 5 minutes jusqu'à ce que la tomate s'assombrisse légèrement et sente sucrée.",
      "visualCue": {
        "primaryTarget": "Légumes brillants, complètement mous dans un soffritto en or pâle. La tomate a été ajoutée et cuite à un rouge plus foncé et confitureux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon a encore une odeur brute et nette. Les légumes sont translucides mais toujours fermes.",
            "action": "Continuer à feu moyen-doux. La patience est essentielle: le soffritto brut rendra la soupe dure."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont complètement tendres, brillants et sucrés. La tomate est un rouge jammy foncé. Tout semble cohérent.",
            "action": "Ajouter le nero cavolo et les haricots cuits."
          },
          {
            "state": "Overdone",
            "description": "Soffritto est bruni et légèrement collant. Les légumes commencent à sécher.",
            "action": "Ajouter une touche d'eau de cuisson de haricots pour déglacer et humidifier avant d'ajouter les verts."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de carotte contre la paroi du pot avec une cuillère — il devrait frotter complètement avec presque aucune force. Le soffritto doit sentir profondément sucré et salé, comme le début de chaque bonne soupe italienne."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "soffritto",
        "cooked_beans",
        "ing_03"
      ],
      "outputState": "base_ribollita",
      "instructions": "Ajouter les feuilles de cavolo nero au soffritto et remuer jusqu'à ce qu'elles se flétrissent, environ 3 minutes. Verser les haricots cuits avec tout leur liquide de cuisson. Ajouter plus d'eau ou de bouillon si nécessaire — le mélange doit être soupeux, et non ragoûté. Porter à mijoter doucement et cuire 25-30 minutes jusqu'à ce que le nero cavolo soit complètement tendre et ait perdu sa qualité fibreuse. Le bouillon doit goûter profondément salé et légèrement sucré des haricots. Assaisonner généreusement de sel et de poivre.",
      "visualCue": {
        "primaryTarget": "Nero cavolo vert olive foncé complètement flétri et tendre dans un bouillon crémeux et riche en haricots. La soupe semble sombre et substantielle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le nero de Cavolo est encore vert vif et légèrement dur: il reste des tiges croustillantes. Le bouillon est pâle et mince.",
            "action": "Laisser mijoter plus longtemps — il faut au moins 20 minutes de cuisson douce pour devenir tendre."
          },
          {
            "state": "Perfect",
            "description": "Cavolo nero est vert olive foncé, complètement tendre, et a enrichi le bouillon de son amertume. Le bouillon est épais et salé.",
            "action": "Ajouter le pain déchiré et laisser mijoter encore 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Cavolo nero est devenu gris-vert et musqué. Le bouillon est très épais à partir de haricots dissous.",
            "action": "C'est toujours délicieux ribollita. Ajouter le pain et poursuivre."
          }
        ]
      },
      "feelCue": "Mâcher un morceau de cavolo nero — la tige doit produire sans effort et la feuille doit se sentir soyeuse plutôt que fibreuse. Le bouillon doit goûter à toute la terre: doux, amer, salé et profond."
    },
    {
      "nodeId": "step_4",
      "action": "Trempage",
      "inputs": [
        "base_ribollita",
        "ing_02"
      ],
      "outputState": "ribollita_with_bread",
      "instructions": "Appliquez le pain étouffé dans de gros morceaux rugueux — environ 5 cm — et pressez - les dans la soupe mijotée. Ne pas remuer immédiatement. Laisser le pain absorber le bouillon pendant 2-3 minutes, puis remuer doucement pour incorporer. Le pain va gonfler considérablement et commencer à s'effondrer, épaississant la soupe à une consistance de porridge. Ajouter plus de bouillon si le mélange devient trop épais pour remuer. Laisser mijoter encore 15 à 20 minutes à feu doux, en remuant régulièrement pour éviter que le pain ne colle au fond.",
      "visualCue": {
        "primaryTarget": "Le pain est complètement absorbé dans la soupe — pas de morceaux de pain intacts visibles, mais la soupe est considérablement épaissie et a une texture légèrement rugueuse, de type porridge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de pain sont toujours discrets et soyeux — flottant sur la surface sans être entièrement incorporés.",
            "action": "Incorporer plus vigoureusement et continuer à mijoter. Le pain doit se décomposer complètement."
          },
          {
            "state": "Perfect",
            "description": "Le pain s'est dissous dans la soupe, créant une consistance épaisse, semblable à un porridge. Une cuillère traînée à travers laisse un canal qui se remplit lentement.",
            "action": "Goûtez et assaisonnez. La soupe est prête à bouillir (ribollire)."
          },
          {
            "state": "Overdone",
            "description": "La soupe est si épaisse qu'elle est devenue une pâte de brique qui bouge à peine.",
            "action": "Ajouter plus d'eau ou de fève liquide de cuisson et remuer vigoureusement à feu doux pour se détendre."
          }
        ]
      },
      "feelCue": "Mélanger la soupe avec une cuillère en bois — vous devriez sentir une vraie résistance, comme en remuant la polenta. La cuillère devrait laisser un sentier qui se ferme lentement. Si elle se déplace librement, ajouter plus de pain."
    },
    {
      "nodeId": "step_5",
      "action": "Rebois",
      "inputs": [
        "ribollita_with_bread",
        "ing_09"
      ],
      "outputState": "finished_ribollita",
      "instructions": "C'est l'étape qui donne son nom à ribollita: \"reboisé\". Portez l'épaisse soupe à mijoter vif à feu moyen, en remuant fréquemment afin d'éviter que la base du pain ne brûle sur le fond. Laisser mijoter 10 minutes. Goûtez et ajustez généreusement le sel. Déposer dans des bols profonds. Finissez chaque bol avec une généreuse versée de la meilleure huile d'olive que vous ayez – il poolera à la surface et s'enfoncera lentement. Servir avec une mouture grossière de poivre noir et, en option, une tranche de pain grillé sur le dessus.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse, sombre, presque solide avec une couleur olive et haricots profonds. Une généreuse piscine d'huile d'olive vert vif se trouve à la surface de chaque bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe est encore mince et aqueuse. Le pain et les haricots n'ont pas fondu dans la base.",
            "action": "Continuer à mijoter à découvert pour réduire et concentrer les saveurs."
          },
          {
            "state": "Perfect",
            "description": "Épais, profondément savoureux et complètement cohésif. La cuillère se tient debout dans le bol. Les couleurs sont profondes: vert foncé, rouge brique et crème.",
            "action": "Terminer avec l'huile d'olive et servir immédiatement, ou refroidir et réchauffer le lendemain quand il sera encore mieux."
          },
          {
            "state": "Overdone",
            "description": "Brûlé sur le fond — saveur brûlée sombre et amère dans la soupe.",
            "action": "Ne grattez pas le fond brûlé. Versez immédiatement la soupe dans un pot propre, laissant la couche brûlée derrière."
          }
        ]
      },
      "feelCue": "Plongez dans le bol et laissez un ruban de votre meilleure huile d'olive couler dans la surface — vous devriez sentir l'huile herbacée et fruitée frapper la soupe chaude, libérant une vague de parfum d'olive fraîche contre la base salée profonde."
    }
  ]
};
