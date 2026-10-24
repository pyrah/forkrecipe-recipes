export default {
  "repoId": "master_indian_kadhi_001",
  "parentRepoId": null,
  "slug": "kadhi",
  "author": "ForkRecipe Kitchen",
  "title": "Punjabi Kadhi",
  "description": "Un curry au yogourt doré au pois chiche du Pendjab — des beignets bhajia mijotés dans une sauce aigre, teinte de curcuma, trempée de moutarde, de chili séché et d'une pincée finale de méthi, profondément satisfaisante et complètement végétarienne.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "sauces",
  "tags": [
    "indienne",
    "yaourt",
    "pois chiches",
    "curry",
    "acide",
    "confort"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 2,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt plein de matière grasse, doux et fouetté",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "yaourt de soja végétalien, plein gras"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Farine de pois chiches (blé), ciselée",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Ghee",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de moutarde noire",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Oignon jaune, tranché finement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Piments rouges séchés, entiers",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "1 cuillerée au chili"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Feuilles de curry, fraîches ou sèches",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "1/4 ct asafoetida (hing)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Feuilles de fénugreek séchées (kasuri methi)",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Binder",
      "name": "Farine de pois chiches supplémentaire (san, pour pakoras)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Allium",
      "name": "Petit oignon rouge, finement tranché (pour pakoras)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Fat",
      "name": "Huile neutre pour la friture de pakoras",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "kadhi_base",
      "instructions": "Dans un grand pot à fond lourd, fouetter ensemble le yogourt, la farine de pois chiches et l'eau jusqu'à ce qu'elle soit complètement lisse sans qu'il reste de morceaux de farine. L'ordre est important: fouetter la farine de pois chiches dans le yogourt d'abord avant d'ajouter l'eau, ce qui empêche les grumeaux, car l'épaisseur du yogourt aide la farine à s'incorporer avant d'être diluée. Ajouter le curcuma et le sel. Le mélange qui en résulte doit être la consistance d'une pâte très fine: opaque, jaune vif et sentant la farine de pois chiche crue. Régler le pot à feu moyen et commencer à remuer immédiatement.",
      "visualCue": {
        "primaryTarget": "Une pâte mince uniforme, opaque et à or jaune vif sans grumeaux; lorsqu'elle est agitée, elle se déplace comme un liquide cohésif sans stries blanches ou entaillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de farine de pois chiches flottent dans le mélange; le mélange semble tacheté plutôt que uniforme.",
            "action": "fouetter plus vigoureusement, en prêtant attention aux bords inférieurs de la casserole où se cache la farine."
          },
          {
            "state": "Perfect",
            "description": "Pâte fine lisse, uniforme et teintée de jaune qui coule proprement sans morceaux solides.",
            "action": "Placer immédiatement sur le feu et commencer à remuer — le yogourt sert si la chaleur est appliquée avant que le fouet ne soit terminé."
          },
          {
            "state": "Overdone",
            "description": "Le yogourt a été mélangé à de l'eau chaude et a commencé à durcir avant que la farine de pois chiches ne soit entièrement incorporée.",
            "action": "La farine de pois chiches va encore épaissir le mélange."
          }
        ]
      },
      "feelCue": "Plongez un doigt — la pâte doit se sentir soyeuse et légèrement glissante, sans grain de farine non incorporée contre votre bout de doigt. Si ça sent le sable, fouetter plus longtemps."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "kadhi_base"
      ],
      "outputState": "thickened_kadhi",
      "instructions": "Cuire la base de kadhi à feu moyen, en remuant constamment et vigoureusement pendant les 10 premières minutes — le mélange yogourt-chickpea est susceptible de scorch ou de curdle s'il reste sans surveillance. Comme il chauffe, la farine de pois chiches commencera à épaissir le mélange et les protéines du yogourt seront domptées par l'amidon. Une fois qu'il atteint une mijotée douce (petites bulles se brisant à la surface), réduire à moyen-doux et cuire à découvert pendant 15 à 20 minutes, en remuant toutes les 3 à 4 minutes. Le kadhi est prêt quand il s'est épaissi à la consistance d'une sauce à la crème légère et le goût cru de farine de pois chiche a cuit.",
      "visualCue": {
        "primaryTarget": "Une sauce jaune épaisse, brillante et d'or profond qui enveloppe l'arrière d'une cuillère et coule lentement; pas de courbure visible; la surface bulle doucement plutôt que furieusement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Kadhi est encore mince et goûte cru et farineux; n'a pas encore épaissi; temps de cuisson inférieur à 20 minutes.",
            "action": "Continuer à mijoter — le goût de la farine crue prend du temps à cuire; la patience est essentielle."
          },
          {
            "state": "Perfect",
            "description": "Consistance à la nappe; enrobe la cuillère; goûte tannant, légèrement terreux et riche en pois chiches sans note de farine crue. Le curcuma l'a rendu doré et brillant.",
            "action": "Commencez le tadka pendant que le kadhi se repose à un mijot doux."
          },
          {
            "state": "Overdone",
            "description": "Kadhi a trop réduit; il est très épais et presque pâteux; le goût aigre s'est concentré à rude.",
            "action": "Incorporer dans l'eau à la cuillère pour se détendre; goûter et ajouter une pincée de sucre pour arrondir l'aurore."
          }
        ]
      },
      "feelCue": "Enrober un doigt et le toucher au pouce — le kadhi épaissé devrait se sentir légèrement glissant et laisser un revêtement clair qui ne s'efface pas immédiatement. Une sensation fine et aqueuse signifie qu'il faut plus de temps pour cuisiner."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "ing_13",
        "ing_14",
        "ing_15"
      ],
      "outputState": "pakoras",
      "instructions": "Mélanger la farine de pois chiches supplémentaire avec l'oignon rouge tranché, une pincée de sel, une pincée de poudre de chili, et assez d'eau pour faire une pâte épaisse (environ 50 g d'eau) qui maintient les tranches d'oignon ensemble lorsqu'une touffe est tombée. Chauffer l'huile neutre dans une casserole profonde à 175°C / 350°F. Déposer des cuillères de la coupe d'oignons dans l'huile et faire frire en lots pendant 3 à 4 minutes, en tournant une fois, jusqu'à ce qu'elles soient dorées et croustillantes. Égoutter sur des serviettes en papier. Ces pakoras sont ajoutés au kadhi pour mijoter brièvement; les rendre légèrement plus croustillants que vous voulez les manger autonome assure qu'ils tiennent leur structure après le temps dans la sauce.",
      "visualCue": {
        "primaryTarget": "Pakoras dorés-bruns, aux bords croustillants et aux brins visibles d'oignon; uniformément colorés; non gras lorsqu'ils sont pressés sur une serviette en papier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pakoras sont d'or pâle et encore doux; ils se dissolvent complètement dans le kadhi.",
            "action": "Faire frire encore 1 à 2 minutes jusqu'à ce qu'il soit bien doré et ferme."
          },
          {
            "state": "Perfect",
            "description": "Deep or-brun, extérieur ferme; surface légèrement croustillante qui s'adoucira à l'oreiller dans le kadhi tout en conservant sa forme.",
            "action": "Égoutter sur des serviettes en papier et réserver pour la mijoter finale."
          },
          {
            "state": "Overdone",
            "description": "Les pakoras sont brun foncé et durs; ils resteront durs même après avoir mijoté dans le kadhi.",
            "action": "Faire tremper brièvement dans l'eau tiède pendant 5 minutes avant d'ajouter à la sauce pour adoucir."
          }
        ]
      },
      "feelCue": "Appuyez sur un pakora chaud: l'extérieur doit se sentir ferme et sec, pas gras. Pressez plus fort — le centre devrait produire légèrement, indiquant qu'il est cuit à travers et moelleux plutôt que pâteux."
    },
    {
      "nodeId": "step_4",
      "action": "Bloom",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "kadhi_tadka",
      "instructions": "Dans une petite poêle, faire chauffer le ghee à feu moyen-vif. Ajouter les graines de moutarde noire et laisser sauter pendant 30 secondes. Ajoutez les graines de cumin, l'oignon tranché, les piments entiers séchés et les feuilles de curry — reculez, car les feuilles de curry crachent de façon spectaculaire. Faire frire 4 à 5 minutes en remuant jusqu'à ce que l'oignon soit doré et que les feuilles de curry soient croustillantes. Retirer du feu et s'effondrer dans les feuilles de fénugreek séchées (kasuri methi) — elles entrent dans le feu pour protéger leurs composés aromatiques volatils de la combustion. Le tadka sifflera et craquera spectaculairement quand il sera versé dans le kadhi.",
      "visualCue": {
        "primaryTarget": "Un mélange parfumé et étourdissant d'oignon doré, d'épices entières obscurcies, de feuilles de curry croustillantes et de ghee aromatique dans une petite casserole – le parfum est intensément salé et fumé-floral des feuilles de curry.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de moutarde n'ont pas complètement sauté; l'oignon est encore pâle; les feuilles de curry sont encore vert clair plutôt que foncé et croquant.",
            "action": "Augmenter la chaleur et faire cuire plus longtemps; l'arôme fumé distinctif des feuilles de curry ne se développe que lorsqu'elles sont entièrement frites."
          },
          {
            "state": "Perfect",
            "description": "Loud pop de graines de moutarde suivie d'oignon croquant; feuilles de curry obscurcies et parfumées; oignon doré. L'arôme est fumé, floral et enivrant.",
            "action": "Retirer du feu, ajouter le kasuri methi et verser sur le kadhi immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est brun foncé-noir; les feuilles de curry sont carbonisées et amères; le ghee sent l'acride.",
            "action": "Jeter et faire un tadka frais — un tadka brûlé domine tout le pot de kadhi."
          }
        ]
      },
      "feelCue": "Dès que les graines de moutarde commencent à sauter, le compte à rebours commence. Gardez une main sur le couvercle de la casserole pour protéger contre les éclaboussures; le étourdissement doit picer et puis adoucir dans les 30 secondes que l'humidité brûle de l'oignon."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser mijoter",
      "inputs": [
        "thickened_kadhi",
        "kadhi_tadka",
        "pakoras"
      ],
      "outputState": "finished_kadhi",
      "instructions": "Verser le tadka sur le kadhi mijotant, en remuant immédiatement pour incorporer le ghe épicé dans toute la sauce. Ajouter les pakoras doucement, les pousser sous la surface afin qu'ils commencent à absorber le kadhi. Laisser mijoter à feu doux de 5 à 7 minutes — juste assez de temps pour que les pakoras s'adoucissent et gonflent de la sauce sans tomber en morceaux. Goûtez et ajustez le sel; si l'auresse est trop forte, ajoutez une demi cuillère à café de sucre. Servir dans des bols profonds sur du riz basmati cuit à la vapeur. Le kadhi doit être généreusement versé sur le riz afin que le riz puisse absorber la sauce dorée tannée.",
      "visualCue": {
        "primaryTarget": "Une sauce bien dorée et brillante avec des pakoras dorés enflammés et flottants; une lécherette visible de ghee parfumé à la surface de la tadka; des feuilles de curry et des épices entières visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tadka pas encore ajouté; pakoras encore croustillant et séparé; saveurs non unifiées.",
            "action": "Verser le tadka et laisser mijoter 5 minutes – l'étape d'intégration n'est pas facultative."
          },
          {
            "state": "Perfect",
            "description": "Pakoras sont plumés et oreillers, ayant absorbé le kadhi mais toujours identifiable; la sauce est brillante, tannante et complexe; piscines de ghee à la surface.",
            "action": "Servir sur le riz immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Pakoras s'est complètement dissout dans la sauce, qui est maintenant très épaisse avec des morceaux visibles d'anciennes beignets.",
            "action": "Finissez avec de l'eau et servez - il est maintenant un style plus épais de kadhi, tout aussi délicieux."
          }
        ]
      },
      "feelCue": "Soulevez une pakora de la casserole — elle devrait se sentir douce mais printanière, comme une éponge humide qui tient sa forme. Si elle s'écroule dans la louche, elle a mijoté trop longtemps. S'il est encore dur et sec au centre, donnez-lui 2 minutes de plus."
    }
  ]
};
