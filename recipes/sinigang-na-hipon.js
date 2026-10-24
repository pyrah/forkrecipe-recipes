export default {
  "repoId": "master_filipino_sinigang_na_hipon_001",
  "parentRepoId": null,
  "slug": "sinigang-na-hipon",
  "author": "ForkRecipe Kitchen",
  "title": "Sinigang na Hipon",
  "description": "Bouillon aigre définitif des Philippines: crevettes à la tête mijotées de kangkong, de tomates, de daikon et d'aubergines dans une soupe au tamarin-brillante qui est à la fois légère, goudronneuse et profondément satisfaisante.",
  "cuisine": "Philippine",
  "culture": "Philippine",
  "category": "seafood",
  "tags": [
    "Sans gluten",
    "Filipino"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes crues, tête-à-tête et coquillages",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "crevettes sans tête",
        "crevettes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Pâte de tamarin (ou mélange de siniang de 1 paquet)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pulpe de tamarin frais (100 g)",
        "mélange de sampaloc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 1,
      "defaultUnit": "medium",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Tomates ripées, en quartiers",
      "ratioValue": 3,
      "defaultUnit": "medium",
      "substitutions": [
        "tomates entières en conserve (200 g)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Radis Daikon, tranches de 1 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "radis de pastèque"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Aubergines japonaises, coupées en morceaux",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "aubergines mondiales"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Épinards d'eau (kangkong) ou petits épinards",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Bok choy",
        "épinards réguliers"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Pilosités vertes longues (haba en lin)",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "poivre de serrano",
        "Poivre de banane"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "sauce de poisson (pâtes)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja",
        "sel au goût"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 1.5,
      "defaultUnit": "liters",
      "substitutions": [
        "stocks de poissons légers"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_10",
        "ing_03",
        "ing_04"
      ],
      "outputState": "aromatic_broth",
      "instructions": "Portez l'eau à ébullition dans un grand pot. Ajouter l'oignon et les tomates. Faire bouillir vigoureusement pendant 8 à 10 minutes, en pressant parfois les tomates contre le côté de la casserole avec le dos d'une cuillère pour les aider à se décomposer et à libérer leur jus dans l'eau. Les tomates ne sont pas seulement aromatiques — elles fournissent corps et douceur qui cadrent le tamarin aigre. Le bouillon va tourner un peu rose-orange au fur et à mesure qu'ils se dissolvent.",
      "visualCue": {
        "primaryTarget": "Le papillon est faiblement rose-orange de la tomate dissoute. L'oignon s'est adouci et commence à s'effondrer aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont toujours fermes et entières, flottant intactes. C'est clair. La douceur et le corps qu'ils fournissent ne sont pas encore entrés dans le liquide.",
            "action": "Continuer à bouillir et presser les tomates contre la paroi du pot pour accélérer leur dégradation."
          },
          {
            "state": "Perfect",
            "description": "Les tomates se sont effondrées dans le bouillon, laissant la peau douce derrière. Les couches d'oignon se sont séparées et ramollies. Broth est légèrement coloré et sent doux et végétal.",
            "action": "Ajouter le tamarin et les légumes durs."
          },
          {
            "state": "Overdone",
            "description": "Le papillon diminue et devient trop concentré. Le niveau de l'eau a considérablement baissé.",
            "action": "Ajoutez une éclaboussure plus d'eau pour restaurer le volume. Sinigang doit être un bouillon léger, pas un ragoût dense."
          }
        ]
      },
      "feelCue": "À ce stade, le bouillon devrait goûter presque sucré des tomates, à peine salées, minces et propres. Le tamarin le transformera complètement."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "aromatic_broth",
        "ing_02",
        "ing_05",
        "ing_06"
      ],
      "outputState": "soured_broth",
      "instructions": "Ajouter la pâte de tamarin (ou mélange de siniang) et remuer jusqu'à dissolution complète. Goûtez le bouillon — il doit être amer et ardem. Ajouter les rondelles de daikon et les morceaux d'aubergines. Ajuster le feu à mijoter doucement et cuire 10 à 12 minutes jusqu'à ce que le daikon soit tendre lorsqu'il est percé avec une baguette. L'aubergine absorbera le bouillon acide et deviendra soyeuse. L'aurorité de Sinigang devrait vous faire sucer légèrement mais pas de treuil.",
      "visualCue": {
        "primaryTarget": "Broth est un brun-ambre translucide du tamarin. Daikon s'est transformé en crème blanche. L'aubergine a obscurci et adouci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Daikon est toujours agité et résiste à une baguette. L'aurore du bouillon est très nette et rafraîchissante — les légumes ne l'ont pas encore absorbée.",
            "action": "Faites mijoter 4 minutes de plus. Les légumes complètent le tamarin en ramollissant."
          },
          {
            "state": "Perfect",
            "description": "Daikon se livre à une baguette avec une légère pression mais conserve sa forme. L'aubergine est soyeuse et a pris la couleur du bouillon aigre. L'acidité s'est membrée en une tarte ronde et brillante.",
            "action": "Ajouter les crevettes."
          },
          {
            "state": "Overdone",
            "description": "Daikon est devenu musqué et brisé. L'aubergine s'est dissoute dans le bouillon, ce qui le rend nuageux. La note aigre s'estompée.",
            "action": "Ajouter les crevettes immédiatement et servir dès qu'elles sont cuites."
          }
        ]
      },
      "feelCue": "Une cuillère de bouillon à ce stade devrait faire mal à l'arrière de votre mâchoire agréablement — c'est le tamarin faisant son travail."
    },
    {
      "nodeId": "step_3",
      "action": "Pochette",
      "inputs": [
        "soured_broth",
        "ing_01",
        "ing_08"
      ],
      "outputState": "cooked_shrimp",
      "instructions": "Ajouter les crevettes et les chiles verts entiers au bouillon mijotant. Les crevettes sont crues et cuisent rapidement — 3-5 minutes selon la taille. Les têtes vont lécher leur graisse corallienne-orange directement dans le bouillon, l'enrichir avec l'umami. Ne pas trop cuire : les crevettes se serrent rapidement et deviennent caoutchouteuses au-delà de 5 minutes. Regardez-les changer de couleur et retirer de la chaleur au moment où le dernier tourne entièrement rose.",
      "visualCue": {
        "primaryTarget": "Chaque crevette est uniformément corallienne sur la coquille. La chair visible à l'articulation de la tête est blanche opaque. Le bouillon a pris une teinte orange plus profonde de la graisse de la tête.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore partiellement translucides. La chair est douce et gelée au centre. La graisse de la tête n'est pas encore complètement libérée.",
            "action": "Laisser mijoter encore 1-2 minutes et vérifier à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Les coquilles sont entièrement coralliennes. La chair est opaque. Le bouillon s'est éclairci avec une faible teinte orange de la graisse de la tête. Les queues sont enroulées dans un arc doux.",
            "action": "Ajouter les feuilles vertes et assaisonner."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont serrées en C ou en O. La chair est dense et légèrement sèche quand mordue. Les coquilles s'éloignent de la chair.",
            "action": "Servir immédiatement. Continuer à cuisiner les rend progressivement plus caoutchouteux — les mettre dans des bols maintenant."
          }
        ]
      },
      "feelCue": "Soulevez une crevette et pliez-la délicatement — une crevette parfaitement cuite se fléchit au milieu plutôt que de se casser raide ou de flipper complètement boiteux."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "cooked_shrimp",
        "ing_07",
        "ing_09",
        "ing_11"
      ],
      "outputState": "finished_sinigang",
      "instructions": "Ajouter les feuilles d'épinards d'eau (ou épinards) et les tiges au pot. Ils se fanent en 1-2 minutes — les tiges d'abord, les feuilles durent. Assaisonner le bouillon avec de la sauce de poisson et du sel, les ajouter graduellement et goûter après chaque ajout. Le profil final de la saveur doit être brillant et aigre comme la note dominante, avec une colonne vertébrale umami salée de la sauce de poisson et les têtes de crevettes, et une douceur de fond des tomates. Servir immédiatement dans des bols profonds avec du riz blanc à la vapeur sur le côté.",
      "visualCue": {
        "primaryTarget": "Vert vif flétris dans tout le bol. Dégagez, bouillon ambre. Crevettes roses visibles à travers la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts sont encore raides et sombres, les tiges non cuites. sauce de poisson non encore ajoutée — le bouillon a un goût plat et sous-assaisonné.",
            "action": "Cuire 1 minute de plus puis ajouter la sauce de poisson et le sel au goût."
          },
          {
            "state": "Perfect",
            "description": "Les verts sont vert vif et simplement flétris — les tiges sont tendres, les feuilles s'effondrent mais pas le gris. Le bouillon est légèrement aigre, salé et propre. L'auresse frappe d'abord, l'umami suit.",
            "action": "Servir immédiatement dans des bols profonds aux côtés du riz."
          },
          {
            "state": "Overdone",
            "description": "Les verts sont devenus gris-vert et commencent à se briser. Le bouillon sent cuit et plat, avec moins de luminosité aigre.",
            "action": "Servir immédiatement. Ajouter une petite pression de pâte de tamarin dans le bol pour restaurer la luminosité."
          }
        ]
      },
      "feelCue": "Le bouillon fini devrait avoir le goût d'une pluie fraîche, rafraîchissante et nourrissante, avec une luminosité acide qui ouvre le palais."
    }
  ]
};
