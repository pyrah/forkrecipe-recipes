export default {
  "repoId": "master_italian_wild_mushroom_risotto_001",
  "parentRepoId": null,
  "slug": "wild-mushroom-risotto",
  "author": "ForkRecipe Kitchen",
  "title": "Champignons sauvages Risotto",
  "description": "La louche de riz Carnaroli coaxed louche par louche dans une mantecatura de Parmigiano et de beurre, lacé tout au long avec des porcines et le parfum sombre et résineux de champignons forestiers — un plat qui récompense la patience avec une consistance presque liquide, comme onde.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "grains",
  "tags": [
    "Italien",
    "Risotto",
    "champignon",
    "parmesan",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 2751,
  "forks": 318,
  "contributors": 42,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-15",
  "updatedAt": "2026-01-08",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
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
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Violone Nano"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Champignons sauvages mélangés (porcini, chanterelle, crémini), tranchés",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "porcin séché réhydraté",
        "shiitake"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Légumes chauds ou poulets légers",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": [
        "liquide de trempage des champignons + stock"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes coupées en dés",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, froid, cubes",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive de haute qualité pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano, finement râpé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano",
        "Pecorino Romano"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "stock supplémentaire"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "seared_mushrooms",
      "instructions": "Dans une grande casserole à feu vif, faire fondre un petit bouton de beurre jusqu'à ce que la mousse s'abaisse. Ajouter les champignons en une seule couche et cuire sans bouger pendant 2 à 3 minutes jusqu'à ce qu'ils soient profondément dorés. Assaisonner de sel, mélanger une fois et cuire encore 1 minute. Retirer et réserver. Les champignons doivent être séchés séparément pour chasser l'humidité et développer de la saveur — les ajouter directement au risotto donne des champignons gris à vapeur.",
      "visualCue": {
        "primaryTarget": "Les champignons portent une croûte d'acajou profonde sur leur visage plat, ont diminué d'environ un tiers, et sentent intensément le sol forestier rôti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont pâles et mouillés, dans la poêle. Ils ont l'air à la vapeur plutôt que de mer.",
            "action": "Augmentez la chaleur et arrêtez de remuer. L'humidité doit s'évaporer avant le brunissement."
          },
          {
            "state": "Perfect",
            "description": "Brun foncé sur les surfaces coupées, rétrécies et fermes. Un arôme riche et terreux remplit la cuisine.",
            "action": "Assaisonner, retirer de la chaleur et réserver."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont très foncés et commencent à croquer aux bords. L'odeur est presque brûlée.",
            "action": "Supprimer immédiatement. Ils vont encore aromatiser le risotto mais ajouter une note légèrement amère."
          }
        ]
      },
      "feelCue": "Les champignons cuits doivent se sentir fermes et charnus sous une cuillère — rien de tel que la texture douce et glissante avec laquelle ils ont commencé. La pression devrait donner une résistance dense, presque comme du cuir."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "toasted_rice",
      "instructions": "Dans un pot large à fond lourd à feu moyen, faire fondre la moitié du beurre et adoucir les échalotes pendant 3 à 4 minutes jusqu'à translucide. Ajouter le riz sec et remuer constamment pendant 2 minutes jusqu'à ce que chaque grain soit enrobé de graisse et que les grains passent de blanc crayeux à légèrement translucide aux bords. Vous devriez entendre un son en clic doux que les grains attraper le fond. Cette tostatura est essentielle — elle scelle l'amidon de sorte que le riz absorbe progressivement le liquide plutôt que tout à la fois.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont brillants avec de la graisse et légèrement translucides à leurs bords. Un léger arôme de noix s'élève et les grains cliquent contre la poêle lorsqu'elle est agitée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore uniformément blancs crayeux. L'odeur d'amidon brut persiste.",
            "action": "Continuer à griller, en remuant constamment. Le riz sous-toasté absorbe trop rapidement le liquide et devient musqué."
          },
          {
            "state": "Perfect",
            "description": "Les grains brillent, les bords sont translucides, et un léger arôme grillé est présent. Un grain pressé entre les doigts se sent encore dur à son cœur.",
            "action": "Ajouter le vin blanc."
          },
          {
            "state": "Overdone",
            "description": "Les grains deviennent dorés et certains commencent à éclater. Les échalotes capturent.",
            "action": "Ajouter immédiatement le vin pour arrêter la chaleur. Le riz sera encore utilisable mais prendra un peu moins de liquide."
          }
        ]
      },
      "feelCue": "Le riz sec doit cliquer audiblement contre la casserole en métal que vous remuez — un rythme subtil et cailloux qui indique que les grains sont grillés et prêts à boire du vin."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer et construire",
      "inputs": [
        "toasted_rice",
        "ing_07",
        "ing_03"
      ],
      "outputState": "built_risotto",
      "instructions": "Verser le vin blanc dans le riz grillé et remuer vigoureusement. Cuire jusqu'à absorption complète, environ 2 minutes. Ajouter ensuite le bouillon chaud une louche à la fois (environ 100ml), en remuant constamment et en attendant que chaque ajout soit presque complètement absorbé avant d'ajouter le prochain. Conserver le bouillon chaud dans une casserole séparée. Ce processus prend 18-20 minutes au total — ne le précipitez pas avec de grands ajouts de stock froid.",
      "visualCue": {
        "primaryTarget": "Après chaque louche, le liquide réduit pour laisser le riz crémeux et à peine fluide, l'amidon formant une lécherette laiteuse entre les grains.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 18 minutes, le riz est encore très ferme et crayeux au centre quand il est mordu. La suspension étoilée semble aqueuse.",
            "action": "Continuer d'ajouter du stock et de remuer. Le riz vous dira quand il sera prêt — la dégustation est le seul test fiable."
          },
          {
            "state": "Perfect",
            "description": "Le riz est al dente — donnant à l'extérieur avec une petite résistance agréable au centre. Le mélange coule et se répand lentement lorsque le pot est secoué, comme la lave. L'amidon est épais et crémeux entre les grains.",
            "action": "Retirer immédiatement du feu et mantequer."
          },
          {
            "state": "Overdone",
            "description": "Le riz n'a pas de texture — chaque grain est doux tout au long du parcours et commence à se briser. L'amidon est collant et lourd.",
            "action": "Retirer du feu maintenant. Ajouter une petite louche de bouillon chaud pour se détendre. Passer à la mantecatura — le beurre améliorera la texture."
          }
        ]
      },
      "feelCue": "Dégustation à la marque de 18 minutes: le grain devrait offrir une petite quantité de résistance de dentifrice au centre même — pas une dureté brute, pas une uniformité douce, mais un nube distinct et agréable d'amidon."
    },
    {
      "nodeId": "step_4",
      "action": "Monter",
      "inputs": [
        "built_risotto",
        "seared_mushrooms",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_risotto",
      "instructions": "Retirer complètement la casserole du feu. Ajouter les champignons séchés, puis remuer vigoureusement le beurre glacé et le Parmigiano râpé tout d'un coup, en utilisant une cuillère en bois ou une spatule de silicone dans une figure-huit mouvement rapide pendant 1–2 minutes. Cette mantecatura est ce qui crée la signature comme onde, la consistance tout 'onda. Le beurre froid émulsifie avec le liquide de cuisson féculent dans une sauce riche et brillante. Servir immédiatement sur des assiettes chaudes (pas chaudes).",
      "visualCue": {
        "primaryTarget": "Le risotto se déplace comme une seule vague brillante quand le pot est secoué. Elle s'étend lentement sur une assiette chaude pour former un disque mince et crémeux plutôt que de s'asseoir dans un monticule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Risotto est assis dans un monticule serré sur l'assiette et ne se propage pas. Le beurre n'est pas complètement émulsifié et les piscines sont séparées.",
            "action": "Mélanger plus vigoureusement et ajouter une petite éclaboussure de bouillon chaud — l'émulsion a besoin d'énergie et d'eau pour se former."
          },
          {
            "state": "Perfect",
            "description": "Un doux tremblement de la plaque envoie le risotto se déchirer vers l'extérieur dans une vague lente et brillante. La surface est brillante et uniforme. Il s'installe à environ 1,5cm de profondeur.",
            "action": "Servir dans les deux minutes avant les ensembles d'amidon."
          },
          {
            "state": "Overdone",
            "description": "Risotto a refroidi trop longtemps et est maintenant épais et collant, se plaçant dans une masse comme il refroidit. L'amidon est gelé.",
            "action": "Ajouter une petite louche de bouillon chaud et remuer brièvement à feu doux. Servir immédiatement — le risotto n'attend personne."
          }
        ]
      },
      "feelCue": "Le risotto fini devrait avoir la fluidité du porridge lâche et un brillant comme la pierre polie — quand une cuillère est levée et larguée, il devrait tomber dans des rideaux lents et réticents, pas atterrir avec un thoud."
    }
  ]
};
