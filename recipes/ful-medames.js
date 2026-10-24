export default {
  "repoId": "master_egyptian_ful-medames_001",
  "parentRepoId": null,
  "slug": "ful-medames",
  "author": "ForkRecipe Kitchen",
  "title": "Ful Medames",
  "description": "Des fèves entières de fèves se ferment lentement dans leur propre liquide pendant la nuit, puis sont concassées d'ail, de cumin et d'un volumineux pressoir de citron jusqu'à ce qu'elles deviennent un épais, terreux, profondément satisfaisant.",
  "cuisine": "Égyptienne",
  "culture": "Égyptienne (Alexandrie)",
  "category": "grains",
  "tags": [
    "Égyptienne",
    "Fèves",
    "Petit déjeuner",
    "végétalien",
    "Sans gluten",
    "Cumin",
    "citron",
    "Produits de la rue"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "8 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Fèves de fèves séchées (les petits haricots bruns, pas les gros haricots)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "fèves de fèves en conserve (goutte, rinçage — réduire le temps de cuisson à 20 min)",
        "haricots de rein dans une pincée, bien que la saveur diffère"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau (pour tremper et cuisiner)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail (brûlures, broyées à la pâte avec du sel)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Ail rôti pour un fini plus doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "graines de cumin grillées, moulues — plus parfumées"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais (généré — plein doit être fortement citronné)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc en désespoir"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (pressée à froid, pour la finition)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Persil à feuilles plates (approximativement haché, pour servir)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Coriandre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Flacons de chaillis ou piment vert frais, tranchés (pour servir)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Poivre d'Alep",
        "Harissa"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Tomate à croûte (petite croûte) et oignon de printemps (coupée, pour servir)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "navet mariné",
        "Œufs durs"
      ]
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
      "outputState": "soaked_beans",
      "instructions": "Placer les fèves séchées dans un grand bol et couvrir d'au moins deux fois leur volume d'eau froide. Laisser tremper pendant au moins 8 heures ou pendant la nuit. Les haricots doubleront approximativement en taille. Égoutter et rincer abondamment avant la cuisson. Si vous utilisez des haricots étamés, sautez entièrement cette étape. Le trempage élimine les oligosaccharides qui causent de l'inconfort digestif et réduit le temps de cuisson de 3 heures et plus à 1 à 1,5 heures.",
      "visualCue": {
        "primaryTarget": "Les haricots sont gonflés à presque le double de leur taille sèche, les peaux sont légèrement desserrées et ridées, et l'eau est devenue légèrement brune.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots n'ont gonflé que légèrement et l'eau est encore claire — ils n'ont pas trempé assez longtemps.",
            "action": "Changez l'eau et trempez pendant au moins 4 heures à la température ambiante ou pendant la nuit au réfrigérateur."
          },
          {
            "state": "Perfect",
            "description": "Remarquablement plus grand, légèrement adouci au toucher. Eau de trempage brune. Chaque haricot peut être pressé en douceur et donnera légèrement sans se désintégrer.",
            "action": "Égoutter, rincer et cuire."
          },
          {
            "state": "Overdone",
            "description": "Les haricots trempent depuis plus de 24 heures dans des conditions chaudes, les peaux commencent à se séparer et l'eau sent le ferment.",
            "action": "Égoutter, rincer soigneusement et cuire immédiatement. Les haricots cuits peuvent être légèrement plus doux mais encore fins."
          }
        ]
      },
      "feelCue": "Une fève bien trempée doit donner doucement lorsqu'elle est pressée entre deux doigts, ferme mais avec un peu de rendement, comme un raisin mûr."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "soaked_beans",
        "ing_02"
      ],
      "outputState": "cooked_beans",
      "instructions": "Placez les haricots trempés égouttés dans une grande casserole. Couvrir généreusement d'eau froide fraîche — au moins 5 cm au-dessus du niveau des haricots. N'ajoutez pas encore de sel (le sel durcit les peaux de haricots pendant la cuisson). Porter à ébullition, écrémer toute mousse grise qui monte. Réduire à mijoter régulièrement et cuire 1 à 1,5 heure, en ajoutant de l'eau bouillante si le niveau tombe sous les haricots. Les haricots sont faits quand on peut être écrasé complètement à plat entre deux doigts sans centre ferme restant. Égoutter, réserver une tasse du liquide de cuisson.",
      "visualCue": {
        "primaryTarget": "Haricots dans un liquide de cuisson nuageux et profondément brun. Chaque haricot a l'air d'avoir l'air frais et la peau a commencé à craquer et à peler légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots ont toujours un centre ferme et crayeux quand ils sont mordus. Le liquide de cuisson est encore clair.",
            "action": "Continuer à mijoter et tester toutes les 15 minutes. Les fèves non cuites sont désagréablement féculentes."
          },
          {
            "state": "Perfect",
            "description": "Les haricots écrasent complètement à plat entre deux doigts sans résistance. Marron foncé, à la peau fendue et sentant les légumineuses chaudes et les minéraux.",
            "action": "Égoutter, réserver le liquide de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les haricots se sont coupés complètement et beaucoup se sont tournés vers le pot. Le liquide est très épais.",
            "action": "Procéder — c'est en fait souhaitable pour un crémeux. Réglez l'étape d'écrasement en conséquence."
          }
        ]
      },
      "feelCue": "Goûtez un haricot du pot à la marque de 60 minutes — il devrait goûter terreux et doux, comme la lentilles mais plus terreux, avec la peau offrant presque aucune résistance à la dent."
    },
    {
      "nodeId": "step_3",
      "action": "Piler",
      "inputs": [
        "cooked_beans",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "crushed_ful",
      "instructions": "Dans une grande poêle ou une poêle lourde, chauffer l'huile d'olive à feu moyen. Ajouter la pâte d'ail et le cumin et cuire en remuant pendant 60 secondes jusqu'à parfumer. Ajouter les haricots cuits. À l'aide d'une fourchette, d'une purée de pommes de terre ou de l'arrière d'une louche, écrasez à peu près la moitié des haricots. Ajouter le jus de citron et le sel. Ajoutez les éclaboussures du liquide de cuisson réservé à votre consistance préférée — certaines personnes l'aiment épais comme du porridge, d'autres cuillerables comme de la soupe épaisse. Goûtez agressivement : il doit être gras avec du citron et du cumin, salé et terreux.",
      "visualCue": {
        "primaryTarget": "Un mash brun rugueux avec des haricots entiers visibles assis dans une base épaisse et légèrement boueuse. La couleur est un brun profond, peu beau, glorieux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tous les haricots sont encore entiers et le mélange est sec et savoureux – le cumin et l'ail n'ont pas eu le temps de s'intégrer.",
            "action": "Cuire encore 2 à 3 minutes à feu moyen, en remuant, pour laisser cuire les épices et le citron dans les haricots."
          },
          {
            "state": "Perfect",
            "description": "La moitié des haricots sont écrasés à une pâte crémeuse, la moitié sont intacts. Épais, brillant à l'huile d'olive, sentant le cumin, le citron et l'ail. Goûte profondément salé et lumineux.",
            "action": "Servir immédiatement à sa température la plus chaude ou refroidir à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Tout a été broyé à une pâte beige uniforme sans texture. Il ressemble à l'hummus sans le tahini.",
            "action": "Incorporer une poignée de haricots cuits entiers si vous avez réservé, ou accepter la version plus lisse."
          }
        ]
      },
      "feelCue": "Le ful devrait laisser un résidu sombre et tacheté sur le dos d'une cuillère qui nécessite une lingette appropriée — épaisse, grasse et collante, comme un bon ragu."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "crushed_ful",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_ful_medames",
      "instructions": "Déposer la bouillie chaude dans des bols individuels ou sur une grande assiette de partage. Arrosez abondamment avec de l'huile d'olive fraîche — ne soyez pas timide, c'est la voie égyptienne. Dispersez la tomate en dés, l'oignon de printemps tranché et le persil haché directement sur le dessus. Ajoutez des flocons de piment ou des piments verts frais pour ceux qui veulent de la chaleur. Servir avec du pain plat chaud pour scooping. A Alexandrie, un œuf frit ou dur sur le dessus est traditionnel. Ful est toujours mangé frais et chaud — il ne réchauffe pas bien et la texture devient collante. Faites seulement ce que vous mangerez.",
      "visualCue": {
        "primaryTarget": "Un bol de couleur brun foncé, brillant, couronné de persil vert vif, de tomate rouge, d'oignon de printemps ivoire et d'une généreuse piscine d'huile d'olive dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Ful est froid ou a été trop longtemps assis — la surface a séché et est devenue terne, et les huiles ont été absorbées.",
            "action": "Chauffer doucement avec un jet d'eau et remuer. Réutiliser l'huile d'olive fraîche avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Chaud, brillant, parfumé. Les garnitures lumineuses sont fraîches et vives. La piscine d'huile d'olive brille et n'a pas encore été absorbée.",
            "action": "Mangez immédiatement avec les mains et le pain — ce n'est pas un plat de fourchette."
          },
          {
            "state": "Overdone",
            "description": "Ful est assis depuis une heure et s'épaissit à une consistance en brique, avec les garnitures flétries et le goût de citron s'estompe.",
            "action": "Allonger avec l'eau bouillante, réassaisonner avec le citron et le sel, et ajouter des garnitures complètement fraîches."
          }
        ]
      },
      "feelCue": "Un pur bien fait devrait avoir la température et la densité de porridge épais à la farine d'avoine — le réchauffement et le remplissage dès la première bouchée, avec une luminosité de citron qui coupe à travers la terre."
    }
  ]
};
