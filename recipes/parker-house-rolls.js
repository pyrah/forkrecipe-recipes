export default {
  "repoId": "master_american_parkerhouserolls_001",
  "parentRepoId": null,
  "slug": "parker-house-rolls",
  "author": "ForkRecipe Kitchen",
  "title": "Parker House Rolls",
  "description": "Des rouleaux de dîner enrichis de lait et de beurre se sont repliés et pressés avant leur dernière épreuve, créant ainsi une couture douce qui s'ouvre pour révéler des couches molles d'oreiller et de plumes à l'intérieur d'une coquille de beurre brillant.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Angleterre (Boston)",
  "category": "breads",
  "tags": [
    "Maison de stationnement",
    "diner-rolls",
    "américains",
    "beurre",
    "enrichi",
    "doux",
    "Tir à l'eau",
    "jour férié"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "3 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de pain (légèrement mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier, chauffé (40 C)",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine (moins riche)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé fondu (pour brossage)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel de mer (pour finissage)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de maldon"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "enriched_dough",
      "instructions": "Mélanger le lait chaud, le sucre et la levure dans un grand bol et laisser reposer 5 minutes jusqu'à mousser (en utilisant la levure instantanée, ajouter directement à la farine). Ajouter les œufs, le beurre ramolli, la farine et le sel. Mélanger jusqu'à ce qu'une pâte brute se forme, puis pétrir à la main pendant 8-10 minutes ou avec un crochet de pâte pendant 6-8 minutes. La pâte doit être douce, lisse et légèrement collante, enrichie de beurre et d'œufs, mais non humide.",
      "visualCue": {
        "primaryTarget": "Une pâte douce, souple et légèrement collante, plus douce que la pâte à pain, mais qui tient une forme de boule. Fini doré des jaunes d'œufs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface dure et inégale. Larmes dures lorsqu'elles sont tendues. Le beurre peut être visible dans les stries démêlées.",
            "action": "Agenouille-toi. Le beurre doit être entièrement travaillé dans la matrice de farine."
          },
          {
            "state": "Perfect",
            "description": "Doux, doré, légèrement collant mais pas collant. Fenêtre: s'étire mince sans déchirer. Revenez lentement. Sens de beurre et de pâte fraîche.",
            "action": "Preuve dans un bol couvert jusqu'à doublé, environ 1–1,5 heures."
          },
          {
            "state": "Overdone",
            "description": "La toux est chaude, un peu humide, et le beurre s'est séparé, laissant des taches huileuses.",
            "action": "Refroidir la pâte pendant 20 minutes. Le froid va solidifier le beurre et vous permettre de continuer à pétrir."
          }
        ]
      },
      "feelCue": "La pâte finie devrait être la pâte à pain la plus douce et la plus souple que vous ayez jamais touchée, presque soyeuse, laissant place à une pression douce comme un oreiller doux. Il devrait à peine s'accrocher à votre main et s'éloigner proprement quand vous levez votre paume."
    },
    {
      "nodeId": "step_2",
      "action": "Faire lever",
      "inputs": [
        "enriched_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Couvrez bien la pâte et laissez-la monter à température ambiante jusqu'à ce qu'elle double, soit environ 1–1,5 heures. Tournez doucement la pâte levée sur une surface légèrement farinée. Verser à environ 1 cm d'épaisseur. À l'aide d'une coupe ronde (6-7 cm), découper les ronds. Badigeonner chaque rond de beurre fondu, puis le plier en deux afin que le beurre soit à l'intérieur et que le bord supérieur surplombe légèrement le fond d'environ 5 mm.",
      "visualCue": {
        "primaryTarget": "Formes demi-lune pliées avec un pli propre au sommet et la moitié supérieure légèrement surplombant le bas, chacune scintille avec du beurre sur le pli intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est raide et n'a pas doublé. Les ronds ressortent quand ils sont roulés.",
            "action": "Que la pâte continue à monter. Les pâtes enrichies augmentent plus lentement que les pâtes maigres."
          },
          {
            "state": "Perfect",
            "description": "Dough est doublé et oreiller. Les ronds se roulent facilement et le pli tient sa forme. Beurre visible à la couture.",
            "action": "Disposer étroitement dans le plat de cuisson et laisser la preuve pendant 45 à 60 minutes."
          },
          {
            "state": "Overdone",
            "description": "Dough surproofed et est très lâche et collant. Il tombe à l'écart quand il est plié.",
            "action": "Laisser refroidir la pâte pendant 15 minutes pour la fermer légèrement avant de la rouler et de la couper."
          }
        ]
      },
      "feelCue": "Lorsque vous pliez le tour broyé au beurre, pressez doucement la moitié supérieure vers le bas — le beurre devrait être contenu à l'intérieur, créant une couche intérieure lisse qui deviendra la séparation plumeuse entre les deux moitiés après cuisson."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "risen_dough",
        "ing_08"
      ],
      "outputState": "proofed_rolls",
      "instructions": "Disposer les rouleaux pliés étroitement dans un plat de cuisson beurré ou sur une plaque de cuisson, le pli faisant face dans la même direction et les rouleaux se touchant. Couvrir lâchement et laisser la preuve jusqu'à ce qu'il soit visiblement gonflé et commencer à presser contre leurs voisins, environ 45-60 minutes. Ils devraient avoir l'air pleins et comme des oreillers avant d'aller au four.",
      "visualCue": {
        "primaryTarget": "Une casserole de rouleaux bien emballés, gonflés, pliés qui se sont levés l'un dans l'autre, chacun clairement bombé et doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rouleaux ont des espaces entre eux et semblent plats. N'ont pas rempli la casserole.",
            "action": "Reposez-vous plus longtemps. Les rouleaux doivent appuyer l'un contre l'autre — ce contact est ce qui crée la texture caractéristique de traction-apart."
          },
          {
            "state": "Perfect",
            "description": "Les rouleaux touchent et pressent doucement les voisins. Chacun est bombé et visiblement gonflé. Un poke ressort vers la moitié des 2 secondes.",
            "action": "Badigeonner doucement de beurre fondu et cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les rouleaux sont très gonflés et ont commencé à déborder la casserole. La surface semble fragile.",
            "action": "Cuire immédiatement, très doucement. Les rouleaux surproofés seront toujours délicieux mais seront moins définis."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le haut d'un rouleau étagé d'un bout de doigt — il devrait céder avec à peine n'importe quelle résistance, comme presser un guimauve, et ressort avec un rebond lent et aéré. Cette résistance presque nulle vous indique que la structure du gaz est entièrement formée et prête pour le four."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "proofed_rolls",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_parker_house_rolls",
      "instructions": "Badigeonner délicatement les rouleaux éprouvés avec du beurre fondu. Cuire à 190 °C (375 F) pendant 18 à 22 minutes jusqu'à ce que le dessus soit profondément doré et que les rouleaux sonnent creux lorsqu'ils sont tapés. Repose immédiatement avec du beurre fondu dès qu'ils sortent du four. Saupoudrer le sel sur le dessus. Servir au chaud.",
      "visualCue": {
        "primaryTarget": "Rouleaux très dorés, brillants, tirant-apart avec des plis définis visibles à la couture et une couleur uniforme sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des hauts en or pâle. L'intérieur est doux et peut être légèrement pâteux au pli.",
            "action": "Faire cuire encore 3-5 minutes. Enrichir la couleur — l'œuf et le sucre dans la pâte ont besoin de chaleur pour caraméliser complètement."
          },
          {
            "state": "Perfect",
            "description": "De l'ambre profond. La ligne de repli est visible. Chaque rouleau a un haut en forme de dos défini et est pressé contre ses voisins. L'intérieur est doux et plumeux lorsqu'il est séparé. Ça sent le beurre intense.",
            "action": "Badigeonner immédiatement avec plus de beurre tout en étant chaud. La surface chaude l'absorbera complètement."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, bords légèrement brûlés. L'intérieur peut se sécher.",
            "action": "Tente avec feuille pour les 5 dernières minutes de cuisson. Badigeonner de beurre supplémentaire lorsqu'il est fait pour rajouter l'humidité."
          }
        ]
      },
      "feelCue": "Tirer un rouleau de la casserole et le séparer au pli — l'intérieur devrait jaillir en couches molles et plumeuses avec la couche beurrée se séparant proprement. La miette à l'intérieur est blanche-coton, à grain fin, et ressort immédiatement lorsqu'elle est légèrement comprimée. Tenez-le debout: il devrait se sentir presque sans poids pour sa taille."
    }
  ]
};
