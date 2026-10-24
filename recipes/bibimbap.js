export default {
  "repoId": "master_korean_bibimbap_001",
  "parentRepoId": null,
  "slug": "bibimbap",
  "author": "ForkRecipe Kitchen",
  "title": "Dolsot Bibimbap",
  "description": "Le riz à grains courts à la vapeur, chargé de légumes assaisonnés individuellement, d'un jaune d'œuf doux et d'une pâte de gochujang rouge gras, servi dans un bol en pierre chaud qui sert le riz à une croûte dorée.",
  "cuisine": "Coréen",
  "culture": "Jeonju",
  "category": "grains",
  "tags": [
    "bol de riz",
    "coréen",
    "légumes",
    "Gochujang",
    "œuf"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains courts (cuit)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "riz à grains moyens"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs (un par bol)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Gochujang (Pâte de chili coréen)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre ou miel (pour la sauce bibimbap)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de riz"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Ail (mincé, pour assaisonnement namul)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Épinards (blanchis et pressés à sec)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "cresson d'eau",
        "rouille"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Carottes (julienned, brièvement sautées)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "radis daikon"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Starch",
      "name": "Choux de haricots (blanchi, égoutté)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Choux de haricots mung"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Umami",
      "name": "Champignons chiitake (sétis, sautés)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Champignons d'huître"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile de sésame + beurre (pour revêtement en bol de dolsot)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_07",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seasoned_namul",
      "instructions": "Préparer chaque légume séparément sous forme de namul. Pour les épinards : blanch 30 secondes, choc dans l'eau glacée, pressez chaque goutte d'eau, puis lancez avec une pincée de sel, une demi cuillère à café d'huile de sésame et une petite quantité d'ail haché. Pour les carottes : faire revenir dans une casserole sèche 2 minutes jusqu'à ce qu'elle soit à peine tendre, assaisonner de sel et d'huile de sésame. Pour les pousses de haricots : blanch 2 minutes, égoutter, mélanger avec de l'huile de sésame et du sel. Pour les champignons : faire sauter dans une goutte d'huile sur une hauteur moyenne jusqu'à ce que l'humidité s'est évaporée. Chaque légume doit avoir un goût agréablement assaisonné.",
      "visualCue": {
        "primaryTarget": "Chaque légume brille avec de l'huile de sésame et conserve sa couleur individuelle: épinards verts profonds, carotte orange vive, pousses d'or pâle, champignons brun foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont peu assaisonnés et goûtent mal. Les épinards ont encore un excès d'eau en dessous.",
            "action": "Goûtez chaque composant et ajoutez le sel et l'huile de sésame progressivement jusqu'à ce que chacun soit salé seul."
          },
          {
            "state": "Perfect",
            "description": "Chaque namul a un goût équilibré et salé, avec un assaisonnement visible et un léger parfum de sésame. Les épinards sont pressés complètement secs.",
            "action": "Disposer en piles séparées à température ambiante, prêtes à être assemblées."
          },
          {
            "state": "Overdone",
            "description": "N'importe quel légume est sursauté — il rendra le bol fini inéditément salé.",
            "action": "Rincez légèrement sous l'eau froide, pressez à sec et ré-saisonnez prudemment."
          }
        ]
      },
      "feelCue": "Serrer les épinards blanchis devrait sentir comme enfiler un chiffon — la boule devrait être dense et sèche, en libérant seulement quelques gouttes d'eau à la fin."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "bibimbap_sauce",
      "instructions": "Mélanger le gochujang, le sucre, l'huile de sésame et la sauce de soja dans un petit bol jusqu'à ce qu'il soit doux et brillant. La sauce doit goûter chaud, sucré et salé dans une mesure égale. Finir avec une cuillère à café d'eau si trop épaisse pour remuer. Cette sauce est brassée dans le bol à la table — sa richesse et sa chaleur sont l'assaisonnement final du plat.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique brillante et profonde qui coule lentement d'une cuillère dans un ruban épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a l'air granuleuse et séparée; le sucre n'a pas dissout.",
            "action": "Incorporer vigoureusement pendant 1 à 2 minutes jusqu'à ce qu'il soit complètement homogène."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant et profondément rouge. Le goût révèle la chaleur, la douceur et le funk fermenté en couches.",
            "action": "Réserver pour montage."
          },
          {
            "state": "Overdone",
            "description": "La sauce surminée est rincée et glisse de la nourriture au lieu d'enrober.",
            "action": "Ajouter plus de gochujang pour restaurer le corps."
          }
        ]
      },
      "feelCue": "Une touche sur le dos de votre main devrait se sentir collante et épaisse, collante plutôt que de courir. La chaleur devrait arriver lentement, en construisant une seconde après le goût initial."
    },
    {
      "nodeId": "step_3",
      "action": "Chauffer",
      "inputs": [
        "ing_12",
        "ing_01"
      ],
      "outputState": "hot_dolsot",
      "instructions": "Enrober généreusement l'intérieur d'un bol de dolsot en pierre (ou poêle en fonte lourde) avec l'huile de sésame et le mélange de beurre. Placer sur la cuisinière à feu moyen-élevé et chauffer jusqu'à ce que la graisse fume. Ajouter le riz cuit dans une couche uniforme, le presser légèrement sur le fond et sur les côtés. Réduisez à moyen et faites cuire pendant 5 à 7 minutes jusqu'à ce que vous entendiez un crépitement constant et intense de la base.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée se forme visiblement aux bords où le riz rencontre le bol. Des escargots minces se lèvent et la poignée du bol est trop chaude pour toucher nu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de craquelin, pas de croûte. Le riz semble cuit à la vapeur et moelleux, non comprimé et croquant.",
            "action": "Augmentez légèrement la chaleur et attendez encore 2 minutes sans toucher."
          },
          {
            "state": "Perfect",
            "description": "Le riz autour des bords est devenu doré-ambre et audiblement croquant. Un léger sésame grillé et un arôme de riz remplissent la cuisine.",
            "action": "Ajouter immédiatement les garnitures de namul et les œufs avant que le bol ne refroidisse."
          },
          {
            "state": "Overdone",
            "description": "Le crépitement s'est transformé en une odeur brûlante; la fumée brun foncé s'élève. Le riz brûle, pas croquant.",
            "action": "Retirer de la chaleur; la croûte inférieure peut être raclée et servie — le premier millimètre d'omble ajoute de la saveur, le second est amer."
          }
        ]
      },
      "feelCue": "Tenez la poignée du bol avec une serviette épaisse — la chaleur devrait rayonner à travers le tissu. Le son crépitant devrait être rythmique et bruyant, comme un enregistrement de feu."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "hot_dolsot",
        "seasoned_namul",
        "ing_02",
        "bibimbap_sauce"
      ],
      "outputState": "finished_bibimbap",
      "instructions": "Travailler rapidement pendant que le bol crie chaud, organiser le namul assaisonné dans des piles distinctes autour du périmètre du riz - épinards, carottes, germes et champignons dans des coins séparés, jamais mélangés. Placer un jaune d'œuf cru ou un œuf légèrement doré au centre. Ajouter une généreuse cuillère de sauce bibimbap à côté de l'œuf. Apportez immédiatement à la table — le bol continue à croquer le riz à travers le repas. Chaque dîner remue tout ensemble juste avant de manger.",
      "visualCue": {
        "primaryTarget": "Un bol de couleur vive et concentrique — vert foncé, orange, ivoire et brun autour d'un jaune d'œuf doré. Le bol est visiblement trop chaud pour toucher et les flocons de vapeur se lèvent des bords du riz.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte de riz ne s'est pas formée. Bol assemblé mais tiède. L'oeuf a l'air pâle et dénudé.",
            "action": "Retourner le bol au brûleur pendant 3 minutes après l'assemblage pour construire la croûte."
          },
          {
            "state": "Perfect",
            "description": "Chaque composant a sa propre identité dans son coin. Le bol craque. Le jaune d'œuf est lumineux et intact. La sauce rouge gochujang fait une bande vibrante.",
            "action": "Servir avec une cuillère longue pour mélanger. Préviens le diner de ne pas toucher au bol."
          },
          {
            "state": "Overdone",
            "description": "Les garnitures ont été ajoutées trop tôt et sont maintenant flétries et tristes. L'oeuf est brouillé par la chaleur résiduelle du bol.",
            "action": "Aucune récupération pour l'œuf — servir comme tel. La saveur est intacte même si la présentation souffre."
          }
        ]
      },
      "feelCue": "Le bol à la table devrait être trop chaud pour tenir sans un tissu épais. Lorsqu'il est agité, le riz au fond doit se briser en morceaux d'or croustillants — cette texture contre l'œuf tendre et le namul tendre est le point entier."
    }
  ]
};
