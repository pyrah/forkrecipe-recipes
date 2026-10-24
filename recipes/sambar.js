export default {
  "repoId": "master_south_indian_sambar_001",
  "parentRepoId": null,
  "slug": "sambar",
  "author": "ForkRecipe Kitchen",
  "title": "Sambar",
  "description": "Un bouillon aigre, pimenté de toor dal parsemé de légumes et construit sur une base de tamarin — en même temps soupe, sauce et condiment, versé sur le riz ou aux côtés d'idli et dosa. La poudre de sambar est l'âme: faites votre propre si vous le pouvez.",
  "cuisine": "Inde du Sud",
  "culture": "Tamil Nadu",
  "category": "stocks",
  "tags": [
    "lentilles",
    "Tamarin",
    "végétalien",
    "Sans gluten",
    "Inde du Sud",
    "tamilien",
    "bouillon"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 1120,
  "forks": 78,
  "contributors": 30,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-02-01",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tor dal (pois de pigeon cassés)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "CHANA DAL",
        "Dal de lune"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Pâte de tamarin (concentrée)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de 2 limes par portion"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Légumes mélangés (stick, aubergines, oignons perlés, tomates)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "tout légume ferme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de Sambar",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "pour non végétaliens"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de moutarde",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles fraîches de curry",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "feuilles de curry séchées, doublées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Piments rouges séchés (Byadagi ou similaires)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "cooked_dal",
      "instructions": "Rincer le dal jusqu'à ce que l'eau coule. Cuire dans une cuisinière à pression avec de l'eau pour 3 sifflets ou laisser mijoter dans un pot couvert pendant 30 à 35 minutes jusqu'à ce qu'il soit complètement doux. fouetter ou écraser le dal cuit dans une pâte douce et crémeuse — ce sera le corps du sambar.",
      "visualCue": {
        "primaryTarget": "Le toor dal cuit — sa texture en purée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dal a toujours un centre crayeux et gritty quand il est pressé. L'eau est encore très claire.",
            "action": "Cuire encore 10 minutes et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain s'effondre pour lisser la crème sous une cuillère. Le liquide de cuisson est épais et doré.",
            "action": "Mash ou fouetter lisse, puis ajouter l'eau à la consistance souhaitée."
          },
          {
            "state": "Overdone",
            "description": "Dal s'est complètement dissout dans l'eau, formant une pâte très épaisse, sans grains entiers.",
            "action": "Ajouter plus d'eau à mince; la base sambaire sera plus riche que d'habitude mais toujours excellente."
          }
        ]
      },
      "feelCue": "Pressez le toor cuit dal entre les doigts — il devrait se dissoudre complètement sans aucune résistance de gritty, comme lisser l'argile chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "cooked_dal",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_10"
      ],
      "outputState": "sambar_base",
      "instructions": "Mélanger la purée de dal avec la pâte de tamarin, la poudre de sambar, le sel et les légumes dans un grand pot. Ajouter suffisamment d'eau pour faire un bouillon mince. Porter à ébullition, puis laisser mijoter de 15 à 20 minutes jusqu'à ce que les légumes soient complètement tendres et que le bouillon se soit unifié en une sauce cohésive et épicée.",
      "visualCue": {
        "primaryTarget": "La couleur et le corps du bouillon – il s'approfondit à mesure que le tamarin et la poudre sambaire s'intègrent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth goûte cru et aigre avec une note d'épices plate et gritty — la poudre de sambar n'a pas cuit.",
            "action": "Laisser mijoter encore 10 minutes et goûter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Bouillon brun Russet, légèrement épais par rapport au dal, avec un profil aigre-épicé-umami arrondi. Les légumes sont complètement tendres mais ne s'effondrent pas.",
            "action": "Allez à la tadka."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a trop réduit et s'épaissit en ragoût; les légumes sont musqués.",
            "action": "Ajouter 50ml d'eau à la fois, remuer et laisser mijoter brièvement."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée de la base sambaire avant la tadka — elle devrait d'abord toucher l'aurore, puis épicer, puis un umami chaud à partir du dal. Si une note noie les autres, équilibrez maintenant."
    },
    {
      "nodeId": "step_3",
      "action": "Bloom",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "sambar_tadka",
      "instructions": "Dans une petite casserole, chauffer l'huile à feu vif jusqu'à ce qu'elle commence à fumer légèrement. Ajoutez les graines de moutarde et couvrez-les d'un couvercle — elles s'évaporeront violemment en 10 secondes. Découvrez, ajoutez les feuilles de curry (reculez – elles éclabousseront) et les piments rouges séchés. Incorporer pendant 15 secondes, puis verser le tadka entier dans le sambar.",
      "visualCue": {
        "primaryTarget": "Les graines de moutarde dans l'huile chaude — leur couleur et leur son.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines n'ont pas encore sauté — l'huile n'est pas assez chaude.",
            "action": "Couvrir et augmenter la chaleur; attendre la première pop audible avant d'ajouter d'autres aromatiques."
          },
          {
            "state": "Perfect",
            "description": "Les graines surgissent rapidement et sont devenues plus légères (du noir au grisâtre). Les feuilles de curry sont translucides et croquantes. Les chilis rouges sont plus foncés.",
            "action": "Verser immédiatement dans le sambar."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont surchargées et commencent à brûler; l'huile sent l'amertume.",
            "action": "Jeter ce tadka et le répéter dans de l'huile fraîche — un tadka brûlé ruinera le sambaire."
          }
        ]
      },
      "feelCue": "Quand le tadka frappe le sambar, recule, il éclate dans un étourdissement féroce. Incorporez-le immédiatement pendant que la vapeur aromatique monte encore."
    }
  ]
};
