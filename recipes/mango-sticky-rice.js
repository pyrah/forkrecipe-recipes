export default {
  "repoId": "master_thai_mangostickyrice_001",
  "parentRepoId": null,
  "slug": "mango-sticky-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz Sticky Thai Mango",
  "description": "Un riz collant brillant et trempé de noix de coco couronné de mangue mûre et d'un filet de crème de coco salée, le dessert d'été qui goûte les marchés nocturnes de Bangkok à leur meilleur.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "desserts",
  "tags": [
    "Thaï",
    "Mango",
    "de riz collant",
    "noix de coco",
    "dessert",
    "Sans gluten",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz glutineux (doux), trempé 2 heures et égoutté",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait de coco plein gras",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco (diluée légèrement)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de palme ou sucre brun léger",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre blanc",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Mangoustes, pelées et coupées en tranches",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "Nam Dok Mai mangue",
        "Mangue d'Alphonso mûre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots grillés"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser reposer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_rice",
      "instructions": "Couvrir le riz glutineux cru d'au moins 5 cm d'eau froide et tremper pendant au moins 2 heures, idéalement pendant la nuit. Égoutter complètement dans un tamis à mailles fines avant d'évacuer. Ne sautez pas cette étape — le trempage permet au riz de s'évaporer uniformément sans sécher.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont enflés et blancs opaques, sans noyau sec visible. Ils se sentent doux lorsqu'ils sont pressés entre vos doigts mais tiennent toujours leur forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grains encore translucides ou crayeux au centre lorsqu'ils sont maintenus à la lumière. Enclenchez quand vous êtes pressé.",
            "action": "Souffle plus longtemps. Grains insuffisamment trempés vapeur inégalement, donnant un extérieur gommeux avec un noyau dur et mâcheux."
          },
          {
            "state": "Perfect",
            "description": "Grains blancs uniformément opaques qui produisent doucement sous la pression des doigts sans s'effondrer.",
            "action": "Égoutter à travers un tamis fin et procéder à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les céréales ont commencé à se décomposer, libérant de l'amidon dans l'eau de trempe qui est maintenant laiteuse et épaisse.",
            "action": "Égoutter immédiatement. Le riz trop souillé va bousiller, mais continuer — la saveur sera bonne."
          }
        ]
      },
      "feelCue": "Un grain complètement trempé pressé entre le pouce et le doigt devrait donner avec à peine n'importe quelle résistance — doux, mais encore entier."
    },
    {
      "nodeId": "step_2",
      "action": "vapeur",
      "inputs": [
        "soaked_rice"
      ],
      "outputState": "steamed_rice",
      "instructions": "Étaler un panier en bambou ou en métal avec un chiffon humide ou une feuille de banane. Étendre le riz égoutté dans une couche uniforme de 4 cm de profondeur. Faire bouillir l'eau pendant 20 à 25 minutes, en retournant la masse de riz à mi-chemin. Le riz est fait lorsque les grains sont translucides, collants et tendres.",
      "visualCue": {
        "primaryTarget": "Les grains sont entièrement translucides — pas de centres blancs et crayeux visibles. La masse est cohésive et brillante, s'accrochant dans une dalle souple et collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les centres sont encore blancs et opaques. Les grains se sentent fermes et séparés lorsqu'ils sont jetés.",
            "action": "Continuer la vapeur 5 minutes de plus. Le riz glutineux non cuit a une texture d'amidon brut désagréable."
          },
          {
            "state": "Perfect",
            "description": "Entièrement translucides, uniformément collants, les grains se tiennent ensemble mais peuvent être séparés par une cuillère. La vapeur s'élève librement de la masse.",
            "action": "Transférer immédiatement dans un bol et plier dans la crème de coco chaude."
          },
          {
            "state": "Overdone",
            "description": "Le riz s'est effondré dans une masse collante et sans forme. Je me suis fortement collé au tissu.",
            "action": "Procéder — le riz collant trop cuit est toujours délicieux, juste plus dense. Utilisez une spatule humide pour plier dans la crème de noix de coco."
          }
        ]
      },
      "feelCue": "Une pincée de riz collant à la vapeur devrait s'accrocher à lui-même et à vos doigts avec une traction satisfaisante et élastique — pas mouillée et lissée, pas sèche et s'écrouler."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "seasoned_coconut_cream",
      "instructions": "Mélanger le lait de coco, le sucre et le sel dans une petite casserole. Chauffer à feu moyen-doux, en remuant, jusqu'à ce que le sucre et le sel soient complètement dissous. Ne pas faire bouillir — vous voulez une crème chaude et fluide, pas une sauce réduite. Réserver 4 cuillerées à soupe de ce liquide dans un petit bol pour servir de sauce fine à la bruine; garder le reste au chaud.",
      "visualCue": {
        "primaryTarget": "Un liquide doux et légèrement vapeur sans grains de sucre visibles. La crème doit être fluide et juste commencer à libérer de la vapeur — sans mijoter.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de sucre encore visibles attraper la lumière. Le liquide est froid ou à température ambiante.",
            "action": "Incorporer et réchauffer davantage à feu doux jusqu'à ce que vous ne puissiez plus sentir de grain lorsque vous frottez la cuillère sur la poêle."
          },
          {
            "state": "Perfect",
            "description": "Crème lisse, soyeuse, légèrement sucrée et salée qui enveloppe la cuillère légèrement. Juste chaud au toucher — pas à l'échouement.",
            "action": "Plier immédiatement dans le riz chaud à la vapeur. La chaleur du riz et la crème chaude fonctionnent ensemble."
          },
          {
            "state": "Overdone",
            "description": "Le lait de noix de coco a bouilli et séparé — liquide pâle et aqueux visible avec une couche de graisse jaunâtre sur le dessus.",
            "action": "fouetter vigoureusement pour réémulsionner, puis refroidir légèrement avant d'utiliser. La saveur n'est pas affectée, mais la texture sera légèrement plus grasse."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt – la crème doit se sentir chaude et soyeuse, enrobant la peau légèrement. Il doit goûter nettement salé-douce dans l'équilibre, pas purement sucré."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "steamed_rice",
        "seasoned_coconut_cream"
      ],
      "outputState": "dressed_rice",
      "instructions": "Transférer le riz chaud à la vapeur dans un grand bol. Verser la crème de coco assaisonnée chaude (réserver la 4 c. à soupe mise de côté plus tôt) sur le riz tout à la fois. Plier doucement avec une cuillère en bois ou une pagaie de riz — couper à travers le centre et plier les côtés par-dessus, en tournant. Ne remuez pas vigoureusement ou le riz devient collant.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont uniformément enduits et brillants, la masse est cohésive et brillante. Pas de piscines de crème non absorbée assise au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème de noix de coco est toujours au fond. Certains grains sont secs et non couchés.",
            "action": "Continuez à plier doucement. Le riz chaud a besoin de plus de tournure pour absorber le liquide uniformément."
          },
          {
            "state": "Perfect",
            "description": "Riz uniformément brillant qui tient ensemble dans un monticule doux. Toute la crème absorbée. La masse est parfumée de noix de coco.",
            "action": "Couvrir étroitement avec un couvercle ou un enveloppement en plastique et reposer 15 minutes."
          },
          {
            "state": "Overdone",
            "description": "Surplié — le riz est devenu une pâte collante et uniforme. Définition du grain perdu.",
            "action": "Continuez. Le riz collant surmené est moins élégant, mais la saveur est la même. Ne pas plier plus loin."
          }
        ]
      },
      "feelCue": "Le riz habillé devrait se sentir lourd et céder dans la cuillère — riche en crème de coco absorbée, pas liquide, pas sèche."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "dressed_rice"
      ],
      "outputState": "rested_sticky_rice",
      "instructions": "Couvrir soigneusement le bol et reposer 15 minutes à température ambiante. Cela permet au riz d'absorber complètement la crème de noix de coco et la texture de stabiliser — le riz fraîchement habillé est trop doux et humide pour être bien plat.",
      "visualCue": {
        "primaryTarget": "Le riz s'est légèrement raffermi dans une masse cohésive et moulageable. La surface est brillante et la crème n'est plus visiblement liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est encore très humide, la crème coule quand le bol est incliné.",
            "action": "Couvrir et reposer plus longtemps. 15 minutes, c'est le minimum — 20, c'est bien."
          },
          {
            "state": "Perfect",
            "description": "Le riz tient sa forme lorsqu'il est écopé d'une cuillère, avec une texture en douceur, presque réglée. Parfumé, brillant et cohésif.",
            "action": "Plaquer immédiatement ou tenir au chaud jusqu'à 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le riz s'est complètement refroidi et s'est raidi dans un bloc dense, perdant ainsi sa qualité de fondu.",
            "action": "Chauffer brièvement sur le panier de vapeur pendant 2 à 3 minutes pour restaurer la texture."
          }
        ]
      },
      "feelCue": "Le riz rembourré doit donner légèrement lorsqu'il est pressé à l'aide d'une cuillère — donnant, non raide, avec un doux ressort. Il contient un moule mais n'est pas caoutchouteux."
    },
    {
      "nodeId": "step_6",
      "action": "Assembler",
      "inputs": [
        "rested_sticky_rice",
        "ing_05",
        "ing_06",
        "seasoned_coconut_cream"
      ],
      "outputState": "finished_mango_sticky_rice",
      "instructions": "Monter une portion généreuse de riz chaud collant sur une assiette ou un bol peu profond. Disposer la mangue coupée le long du riz. Dressez la fine sauce de noix de coco réservée (les 4 c. à soupe mises de côté à l'étape 3) sur le riz et la mangue. Éparpiller les graines de sésame sur le dessus. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Un monticule scintillant de riz de coco d'ivoire à côté de tranches de mangue dorées et jaunes vives, enfilées d'une fine bruine de noix de coco et flocées de sésame grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mangue n'est pas mûre: jaune pâle ou vert, ferme, aigre, manque de parfum.",
            "action": "Utilise une mangue déchirante. Les mangues d'Ataulfo sont prêtes lorsque la peau est légèrement plissée aux épaules et que le fruit donne sous une légère pression du pouce."
          },
          {
            "state": "Perfect",
            "description": "Mangue d'or profond, parfumée et juteuse, contrairement au riz d'ivoire brillant. Une mince et fluide marmite de noix de coco autour du riz.",
            "action": "Servir à la fois — le riz chaud et le contraste de mangue froide est le point du plat."
          },
          {
            "state": "Overdone",
            "description": "Le riz s'est refroidi et raidi, la mangue s'est oxydée et dorée, la noisette de noix de coco s'est enroulée.",
            "action": "Ce plat ne tient pas bien. Préparez-vous juste avant de servir; ne vous assemblez pas avant."
          }
        ]
      },
      "feelCue": "La mangue doit céder sous une fourchette comme du beurre très mûr — soyeux, pas fibreux. Le riz chaud contre la mangue fraîche crée le contraste de température essentiel qui fait ce dessert."
    }
  ]
};
