export default {
  "repoId": "master_italian_risottoallamialanese_001",
  "parentRepoId": null,
  "slug": "risotto-alla-milanese",
  "author": "ForkRecipe Kitchen",
  "title": "Risotto alla Milanese",
  "description": "Riz Arborio doré safran des cuisines de Milan, fini avec de la moelle osseuse et une chute de neige de Parmigiano vieilli — chaque cuillère à soupe une vague tremblante de toute 'onda crémeux.",
  "cuisine": "Italien",
  "culture": "Milanais",
  "category": "grains",
  "tags": [
    "grains",
    "Sans gluten",
    "safran",
    "Italien",
    "Risotto",
    "Milanese",
    "laitière"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
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
      "role": "Starch",
      "name": "Riz de Carnaroli ou Arborio",
      "ratioValue": 320,
      "defaultUnit": "g",
      "substitutions": [
        "Violone Nano"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Bouillon de boeuf ou de veau, conservé à la mijotée",
      "ratioValue": 1200,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, finement haché",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, froid, divisé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "moelle osseuse, trempée et nettoyée",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "beurre supplémentaire pour une version végétarienne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano, finement râpé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_03",
        "ing_02"
      ],
      "outputState": "saffron_broth",
      "instructions": "Dissoudre les fils de safran dans 60 ml de bouillon chaud et laisser tremper pendant au moins 10 minutes pendant que vous préparez le soffritto. Conserver le bouillon restant au chaud (sans bouillir) dans une petite casserole à côté du poêle — il doit être chaud lorsqu'il est ajouté au riz, jamais froid.",
      "visualCue": {
        "primaryTarget": "Broth transforme un orange-ambre profond vif et sent floral et métallique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le papillon est encore jaune pâle; les fils de safran sont intacts et ne libèrent pas de couleur.",
            "action": "Chauffer un peu plus le bouillon et laisser 5 minutes de plus de trempe."
          },
          {
            "state": "Perfect",
            "description": "Broth est un riche or orange brillant. Les fils ont perdu leur forme et ont donné toute leur couleur.",
            "action": "Réserver et garder au chaud. Commencez le soffritto."
          },
          {
            "state": "Overdone",
            "description": "Broth a diminué par le chauffage long; la saveur est concentrée au point d'amertume.",
            "action": "Ajouter une touche de bouillon frais pour diluer avant d'utiliser."
          }
        ]
      },
      "feelCue": "Le bouillon raide doit remplir la cuisine d'un parfum légèrement miellé, presque médicinal, c'est - à - dire du safran pur qui libère sa crocine."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "soffritto",
      "instructions": "Faire fondre 40g de beurre avec la moelle osseuse dans une poêle large à base lourde à feu moyen-doux. La moelle fondra dans le beurre et l'enrichira de collagène et de profondeur. Ajouter l'oignon haché et cuire doucement, en remuant souvent, pendant 8 à 10 minutes jusqu'à ce qu'il soit entièrement translucide et doux — ne jamais brunir. Assaisonner légèrement avec du sel.",
      "visualCue": {
        "primaryTarget": "L'oignon est complètement transparent, effondré dans une masse molle, sans bords crus ou dorés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon a encore des sections blanches, opaques et sent cru et vif.",
            "action": "Abaissez la chaleur et donnez-lui 3-4 minutes de plus — l'impatience ici signifie des saveurs dures dans le risotto fini."
          },
          {
            "state": "Perfect",
            "description": "L'oignon a fondu en une masse douce et translucide d'ivoire dans la graisse dorée de la bruyère au beurre. Ça sent doux et doux.",
            "action": "Ajouter le riz immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'oignon deviennent dorés ou bruns; la poêle sent la noix plutôt que douce.",
            "action": "Déglacer avec un jet de vin rapidement et réduire la chaleur — la légère caramélisation ajoutera de la douceur, et non du désastre."
          }
        ]
      },
      "feelCue": "La graisse de la poêle doit ressembler à de l'or liquide — beurreux et brillants — et la cuisine doit sentir de l'oignon sucré."
    },
    {
      "nodeId": "step_3",
      "action": "Toast",
      "inputs": [
        "soffritto",
        "ing_01",
        "ing_07"
      ],
      "outputState": "toasted_rice",
      "instructions": "Ajouter le riz au soffritto et remuer constamment pendant 2 minutes à feu moyen jusqu'à ce que chaque grain soit enrobé de graisse et que les bouts commencent à devenir translucides. Vous entendrez un léger craquement. Verser le vin blanc tout d'un coup — il sifflera et s'évaporera violemment. Incorporer jusqu'à ce que le vin soit complètement absorbé et qu'aucune odeur alcoolique ne subsiste, environ 2 minutes.",
      "visualCue": {
        "primaryTarget": "Les grains de riz ont un halo translucide autour d'un centre blanc crayeux, scintillant avec de la graisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont entièrement blancs et opaques, pas encore enduits de graisse. Le vin est encore visible comme une flaque.",
            "action": "Continuez à remuer et à absorber — le vin doit être complètement parti avant d'ajouter du bouillon."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain mijote de graisse; le vin s'est complètement absorbé et la bouchée alcoolique a cuit. Un léger craquement lorsqu'il est agité.",
            "action": "Commencez à ajouter le bouillon chaud une louche à la fois."
          },
          {
            "state": "Overdone",
            "description": "Le riz commence à coller à la poêle et sent l'amidon sec et grillé. Le vin est parti depuis longtemps.",
            "action": "Ajouter immédiatement la première louche de bouillon chaud — le riz est au bord mais récupérable."
          }
        ]
      },
      "feelCue": "Si vous mordez un grain à ce stade, il doit se sentir crayeux-dur au centre mais glissant avec de la graisse à l'extérieur — parfait pour l'hydratation lente, même."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "toasted_rice",
        "saffron_broth",
        "ing_09"
      ],
      "outputState": "cooked_risotto",
      "instructions": "Ajouter la louche de bouillon chaud par louche (environ 120ml par addition), en remuant constamment et en attendant que chaque louche soit absorbée avant d'ajouter la suivante. Ajouter le bouillon de safran au milieu de la cuisson (environ 8 minutes) pour fixer la couleur dans chaque grain. Continuer à ajouter du bouillon et à remuer pendant 16–18 minutes jusqu'à ce que le riz soit al dente — tendre mais avec la morsure la plus faible au cœur. Retirer du feu 1 minute avant que le riz ne soit complètement cuit.",
      "visualCue": {
        "primaryTarget": "Le riz coule comme une onde lente (all'onda) lorsque la poêle est secouée; jaune d'or profond partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est crayeux et granuleux au centre; le mélange est solidement assis dans la poêle.",
            "action": "Continuer à ajouter du bouillon et à remuer — il faut 2 à 3 minutes de plus et une autre louche."
          },
          {
            "state": "Perfect",
            "description": "Le riz est crémeux et fluide, l'or liquide en couleur, avec une résistance subtile au centre de chaque grain. Déplace comme de la lave quand la casserole bascule.",
            "action": "Retirer immédiatement du feu et passer à la mantecatura."
          },
          {
            "state": "Overdone",
            "description": "Le riz a soufflé — les grains sont entièrement mous sans résistance, et le mélange est gommant plutôt que fluide.",
            "action": "Servir immédiatement avant qu'il ne se pose; sauter l'étape de repos."
          }
        ]
      },
      "feelCue": "Mélanger avec autorité — l'amidon de mouvement constant coaxe du riz dans le liquide, construisant cette vague crémeuse caractéristique sans crème nécessaire."
    },
    {
      "nodeId": "step_5",
      "action": "Monter",
      "inputs": [
        "cooked_risotto",
        "ing_05",
        "ing_08",
        "ing_10"
      ],
      "outputState": "finished_risotto_alla_milanese",
      "instructions": "Hors du feu, ajoutez le reste du beurre froid de 40g coupé en cubes et le Parmigiano-Reggiano. Battre vigoureusement avec une cuillère en bois ou agiter la poêle avec autorité pendant 1 à 2 minutes (mantecatura) pour émulsifier la graisse dans l'amidon et créer une sauce brillante et crémeuse. Assaisonner de poivre blanc et de sel. Couvrez la casserole et reposez-vous pendant 1 minute — c'est le moment tout 'onda. Servir immédiatement dans des bols chauds.",
      "visualCue": {
        "primaryTarget": "Risotto coule de la cuillère dans un ruban lent et brillant, safran-or et tremblant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est visiblement séparé, flottant dans les piscines sur une surface rigide et granuleuse.",
            "action": "Battre plus vigoureusement la chaleur — l'émulsion a besoin d'énergie mécanique, pas plus de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Une masse unifiée, brillante et fluide. Pas de séparation visible des graisses. Couleur dorée profonde. Parfums de safran, de beurre et de fromage vieilli.",
            "action": "Servir dans les 2 minutes — risotto n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Risotto s'est emparé d'une masse solide et collante après s'être assis trop longtemps après la mantecatura.",
            "action": "Incorporer un peu de bouillon chaud pour se détendre; il ne sera pas parfait mais se rétablira."
          }
        ]
      },
      "feelCue": "Le risotto fini devrait verser de la cuillère comme une vague lente et lourde — si elle tient un pic, ajouter une autre éclaboussure de bouillon chaud et battre à nouveau."
    }
  ]
};
