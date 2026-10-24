export default {
  "repoId": "master_west_african_maafe_peanut_stew_001",
  "parentRepoId": null,
  "slug": "maafe-peanut-stew",
  "author": "ForkRecipe Kitchen",
  "title": "Mafe (Bâti d'arachides d'Afrique de l'Ouest)",
  "description": "Un ragoût malien et sénégalais où le beurre d'arachide fond dans une base de tomates et de bouillons, enveloppant l'agneau braisé et la patate douce dans une sauce si riche et onctueuse qu'il s'accroche à la cuillère comme du velours liquide — chaque bol une corde serrée entre la douceur de noix et la profondeur salée et poivrée.",
  "cuisine": "Afrique de l ' Ouest",
  "culture": "Mali/Sénégalais",
  "category": "proteins",
  "tags": [
    "Afrique de l ' Ouest",
    "arachide",
    "ragoût",
    "agneau",
    "tomates"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 1780,
  "forks": 165,
  "contributors": 21,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-14",
  "updatedAt": "2025-12-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau désossée, coupée en morceaux de 5 cm",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "mandrin de boeuf",
        "cuisses de poulet sur la peau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Beurre d'arachide non sucré",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "arachides grillées fraîchement moulues"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Tomates entières en conserve, broyées à la main",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "4 tomates prunes fraîches, mélangées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon coupé en dés",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Pommes de terre douces, pelées et cubes",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Pommes de terre régulières",
        "courge d'hiver"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Stocks de poulet ou d'agneau",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Bonnet de scotch frais ou habanero, entier",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de Cayenne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel, poivre noir, cube assaisonnement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agneau de mer",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "seared_lamb",
      "instructions": "Assaisonner généreusement les morceaux d'agneau avec du sel et du poivre. Chauffer une huile neutre dans un grand pot lourd à feu vif jusqu'à ce qu'elle mijote. Casser l'agneau en lots — ne pas fouler le pot — pendant 3 à 4 minutes de chaque côté jusqu'à ce qu'il soit profondément doré sur au moins deux surfaces. Transférer dans une assiette. Le brunissement n'est pas seulement esthétique : il construit les composés de saveur Maillard qui donneront au ragoût sa profondeur profonde et torréfié.",
      "visualCue": {
        "primaryTarget": "Chaque morceau d'agneau a une croûte brun acajou uniforme et profonde sur au moins deux côtés. Le pot a de l'affection visible — des dépôts sombres et caramélisés collés au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est gris pâle sur la surface de mer. La viande a été cuite à la vapeur plutôt qu'à la mer, ce qui indique que le pot était surpeuplé ou pas assez chaud.",
            "action": "Retirer quelques morceaux et les saisir en petits lots. Le goût et la couleur sont essentiels à la saveur du ragoût — ne sautez pas cela."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'acajou. Le fond du pot a une couche de couleur marron. L'agneau se libère proprement de la poêle lorsqu'il est tiré avec des pinces.",
            "action": "Réserver l'agneau et construire la sauce dans la même casserole, en utilisant le fond comme base de saveur."
          },
          {
            "state": "Overdone",
            "description": "Les surfaces d'agneau sont brun foncé, presque noires, avec une odeur acride. Le fond de la poêle est sombre et peut être brûlé.",
            "action": "Déglacer immédiatement avec le stock, racler vigoureusement. Goûtez le stock — si amer, continuez avec moins de fond brûlé et ajoutez une pincée de sucre pour équilibrer."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'agneau avec vos pinces — il doit se sentir ferme et résistant à la surface avec un léger donner en dessous. Vous devriez entendre un étourdissement fort et soutenu qui ne se calme pas jusqu'à ce que vous arrêtiez de le toucher."
    },
    {
      "nodeId": "step_2",
      "action": "Construire une base d'oignons de tomates",
      "inputs": [
        "seared_lamb",
        "ing_03",
        "ing_04",
        "ing_07",
        "ing_06"
      ],
      "outputState": "tomato_stew_base",
      "instructions": "Dans la même casserole à feu moyen, ajouter l'oignon en dés et cuire, grattant le fond, pendant 5 minutes jusqu'à ce que doux et translucide. Ajouter les tomates concassées et remuer, en grattant tous les morceaux caramélisés du fond — ceux-ci se dissolvent dans la sauce. Ajouter l'ensemble du bonnet de scotch (le laisser entier et intact pour contrôler la chaleur — la ponctuer libère beaucoup plus de capsaïcine). Verser le stock et ajouter l'agneau marin. Faites frémir.",
      "visualCue": {
        "primaryTarget": "Un bouillon rouge-orange profond avec les morceaux d'agneau submergés ou presque, le capot de scotch intact flottant à la surface. Tout le fond s'est dissous dans le liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fonds Pan n'a pas été entièrement incorporé — les dépôts bruns sont toujours collés au fond. Le bouillon est mince et pâle, sans la couleur des tomates.",
            "action": "Incorporer vigoureusement et ajouter un peu plus de bouillon pour aider à dissoudre le fond. Les morceaux bruns sont une saveur concentrée — ne laisser aucun derrière."
          },
          {
            "state": "Perfect",
            "description": "Bouillon rouge tomate, richement coloré, sans goût. Des pièces d'agneau visibles sous la surface. Le capot entier de scotch flotte. Le liquide sent profondément savoureux avec un sous-ton chaud de chili.",
            "action": "Ajouter le beurre d'arachide et laisser mijoter pour mélanger."
          },
          {
            "state": "Overdone",
            "description": "Le capot scotch a été cassé ouvert ou perforé — le bouillon sera beaucoup plus chaud que prévu. L'huile du chili est visible à la surface.",
            "action": "Enlevez les fragments de bonnet de scotch. Ajoutez plus de stock et continuez — le ragoût sera très épicé. Goûtez et équilibrez avec du beurre d'arachide supplémentaire, qui tempère la chaleur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois sur le fond du pot — vous ne devriez pas sentir de résistance des dépôts coincés. Le liquide doit s'écouler en douceur dans le sentier laissé par la cuillère, indiquant que tout s'est dissous."
    },
    {
      "nodeId": "step_3",
      "action": "Ajouter le beurre d'arachide et la patate douce",
      "inputs": [
        "tomato_stew_base",
        "ing_02",
        "ing_05"
      ],
      "outputState": "simmering_maafe",
      "instructions": "Ajouter une tasse du bouillon chaud dans un bol et fouetter le beurre de cacahuète jusqu'à ce qu'il soit lisse — ce qui tempère le beurre de cacahuètes de sorte qu'il ne se saisit pas lorsqu'il est ajouté au pot. Verser le mélange d'arachide lisse dans le pot, en remuant pour incorporer complètement. Ajouter les cubes de patate douce. Laisser mijoter à découvert de 35 à 40 minutes, en remuant toutes les 10 minutes, jusqu'à ce que l'agneau soit tendre, la patate douce est molle, et la sauce s'est épaissie jusqu'à un ragoût brillant et riche qui enrobe la cuillère.",
      "visualCue": {
        "primaryTarget": "Le ragoût s'est épaissi jusqu'à une couleur brun-orange profonde. Le beurre de cacahuètes a été entièrement intégré — pas de stries blanches visibles. La patate douce est tendre lorsqu'elle est percée avec un couteau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et aqueuse, ou des stries de beurre d'arachide non intégré sont visibles. La patate douce résiste à un couteau. L'agneau est toujours ferme lorsqu'il est en marche.",
            "action": "Continuer à mijoter à découvert et à remuer régulièrement. Le ragoût s'épaissira naturellement sous forme de protéines de beurre d'arachide et de fécule de pomme de terre douce."
          },
          {
            "state": "Perfect",
            "description": "Sa sauce épaisse, brillante et uniformément colorée. La patate douce est tendre partout. L'agneau s'effondre avec une légère pression de fourche. Une cuillère traînée à travers la surface laisse un sentier qui se remplit de plus de 4 à 5 secondes.",
            "action": "Enlevez le poivre de bonnet de scotch. Goûtez et assaisonnez. Servez."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très épaisse et commence à brûler sur le fond. La patate douce est musquée et désintégrée dans le ragoût. L'agneau tombe en morceaux.",
            "action": "Ajouter le bouillon ou l'eau pour se détendre, remuer doucement (de manière à ne pas briser la patate douce plus loin) et retirer du feu."
          }
        ]
      },
      "feelCue": "Frotter une petite quantité de sauce entre les doigts — elle devrait se sentir lisse et riche de l'huile d'arachide, sans dilution aqueuse. L'arôme doit être simultanément noisette, salé et légèrement sucré de la pomme de terre."
    },
    {
      "nodeId": "step_4",
      "action": "Finale et saison",
      "inputs": [
        "simmering_maafe"
      ],
      "outputState": "finished_maafe",
      "instructions": "Retirez tout le poivre de scotch avant de servir — jetez-le. Goûtez le ragoût et ajustez le sel, assaisonner le cube et chauffer à votre préférence. Si le ragoût est trop épais, ajoutez un peu de bouillon. Si trop mince, laisser mijoter pendant 5 minutes. La sauce doit être assez épaisse pour être légèrement butée sur une cuillère à servir. Servir sur du riz blanc ou avec du pain blanc, l'agneau et la patate douce étant bien visibles.",
      "visualCue": {
        "primaryTarget": "Ragoût brun orangé profond avec des morceaux visibles d'agneau tendre et de patate douce. Sauce légèrement sur une cuillère. Surface riche et brillante sans séparation d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et verse comme de la soupe. La saveur de beurre d'arachide est faible et la tomate domine. L'équilibre entre la noix et la savoureuse est rompu.",
            "action": "Ajouter une cuillère à soupe de beurre d'arachide dissous en bouillon chaud et laisser mijoter 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Sauce épaisse, brillante et aromatisée qui est à la fois nutty, salée, tomate-avant et chaudement épicée. Mounds sur une cuillère et tombe dans des draps épais. La chaleur du capot de scotch est une chaleur de fond, pas un coup de poing.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est séparée — des piscines d'huile d'arachide orange visibles à la surface avec un ragoût raide en dessous. Trop épaisse et pâteuse.",
            "action": "Ajouter le bouillon, retirer de la chaleur et remuer vigoureusement en grands cercles. L'émulsion se reformera car elle refroidit légèrement."
          }
        ]
      },
      "feelCue": "Goûtez la sauce seule — le goût d'arachide devrait arriver d'abord, chaud et rôti, suivi de tomates salées, puis d'une chaleur de construction lente du poivre. Chaque note doit arriver en séquence, pas simultanément dans un muffle."
    }
  ]
};
