export default {
  "repoId": "master_ethiopian_berbere_spice_blend_001",
  "parentRepoId": null,
  "slug": "berbere-spice-blend",
  "author": "ForkRecipe Kitchen",
  "title": "Mélange d'épices de Berbere",
  "description": "Le mélange d'épices emblématique de l'Éthiopie est construit sur des chiles séchés et du fenugrec — le chile fournissant une chaleur chaude et de construction et le fenugrec une amertume distincte qui ancre la douceur du cardamome et de la cannelle dans quelque chose d'antique et complexe. Broyé d'épices entières et fleuri dans une casserole sèche, il parfume toute la cuisine dans une vague qui est à la fois familière et entièrement la sienne.",
  "cuisine": "Éthiopien",
  "culture": "Éthiopien/Érythrée",
  "category": "condiments",
  "tags": [
    "d'épices",
    "ethiopienne",
    "berbère",
    "végétalien",
    "Sans gluten",
    "Épice sèche"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 987,
  "forks": 72,
  "contributors": 18,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 3,
    "umami": 1,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Chiles rouges séchés (guajillo ou Nouveau-Mexique)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "chiles éthiopiens séchés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Graines de fénugreek",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Gousses de cardamome Ethiopien",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "gousses de cardamome vert"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de coriandre",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Gingembre moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "toasted_whole_spices",
      "instructions": "Placer toutes les épices entières (chilles, fenugrec, korarima, coriandre, grains de poivre et girofles) dans une poêle sèche à feu moyen. Secouer constamment pendant 2 à 3 minutes. Cette étape est critique : chaque épice a besoin de chaleur pour volatiliser ses huiles essentielles, mais chaque épice a aussi une tolérance différente pour la chaleur. Fenugreek en particulier va de parfumé à amer en quelques secondes — regardez - le attentivement. Le mélange est prêt quand il sent chaud, rôti et complexe, pas quand une seule épice domine.",
      "visualCue": {
        "primaryTarget": "Les épices sont parfumées, très légèrement foncées, et commencent à fumer faiblement. Fenugreek passe de l'or pâle à un ambre plus profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sentent crus et poussiéreux. Aucune huile volatile n'a été libérée. L'amertume brute du fenugrec est dominante.",
            "action": "Continuer à griller à feu moyen. Écoutez un léger craquement et veillez sur les premières mouches de fumée parfumée."
          },
          {
            "state": "Perfect",
            "description": "La cuisine entière se remplit d'un arôme complexe et chaud. Fenugreek est ambre. Les graines de coriandre sont légèrement dorées. Les Chiliens ont légèrement ramolli.",
            "action": "Transférer immédiatement dans un bol frais — ne pas laisser dans la poêle chaude ou ils continueront à cuire."
          },
          {
            "state": "Overdone",
            "description": "Fenugreek sent acride et amer. Des taches noires apparaissent. Les vêtements sentent brûlés.",
            "action": "Jeter le fenugrec et les girofles. Utilisez les épices grillées restantes avec du fenugrec frais et des girofles."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez une graine de coriandre grillée entre la vignette et l'ongle, elle doit produire et libérer immédiatement un éclat de parfum chaud et d'agrumes – que la libération d'arôme indique que les huiles ont été correctement activées."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "toasted_whole_spices",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_berbere",
      "instructions": "Refroidir complètement les épices grillées — les épices chaudes vaporiseront dans le broyeur et l'humidité écrasera la poudre. Mouiller dans un broyeur d'épices ou un broyeur de café réservé aux épices, en lots si nécessaire, à une poudre fine. Ajouter la cannelle, le gingembre, le sel et le pouls avant le mouillage. Passer à travers un tamis à mailles fines pour enlever les fragments de coque non broyés. Conserver dans un pot hermétique à l'abri de la lumière. Utiliser dans les 3 mois pour une puissance complète — après cela la chaleur disparaît d'abord, puis les aromatiques.",
      "visualCue": {
        "primaryTarget": "Poudre rouge brique profonde à brun rouillé, uniformément fine sans fragments visibles de coque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La poudre est grossière et présente des flocons visibles de peau de chile et de fragments entiers de maïs poivré.",
            "action": "Désolé. La texture fine est importante pour un assaisonnement uniforme dans les ragoûts."
          },
          {
            "state": "Perfect",
            "description": "Poudre fine, uniformément rouge brique. Passe à travers le tamis avec un minimum de déchets. L'odeur est en couches : chaleur de chile d'abord, puis épices chaudes, puis la profondeur amère distinctive du fenugrec.",
            "action": "Transférer dans un pot hermétique dans un endroit frais et sombre."
          },
          {
            "state": "Overdone",
            "description": "La poudre s'est réchauffée par le broyage et sent la cuisson. Les huiles sont volatilisantes à partir de la chaleur du broyeur.",
            "action": "Étaler sur une assiette pour refroidir pendant 5 minutes avant de jarrer. La chaleur endommage les aromatiques volatils."
          }
        ]
      },
      "feelCue": "Frotter une pincée de berbère finie entre le pouce et l'index – elle doit se sentir fine et légèrement huileuse à partir des huiles de chile, sans râpe, et laisser la peau visiblement colorée rouge-orange profonde."
    }
  ]
};
