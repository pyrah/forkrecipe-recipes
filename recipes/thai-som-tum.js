export default {
  "repoId": "master_thai_thaisomtum_001",
  "parentRepoId": null,
  "slug": "thai-som-tum",
  "author": "ForkRecipe Kitchen",
  "title": "Som Tum (Salade de papaye verte thaïlandaise)",
  "description": "La papaye crue s'est éparpillée d'ail et de piment dans un mortier, puis a été jetée avec du citron vert, de la sauce de poisson, du sucre de palme et des crevettes séchées — augure-chaud-doux-sel dans un équilibre si précis que chaque composant disparaît en un seul coup électrisant.",
  "cuisine": "Thaï",
  "culture": "Isaan",
  "category": "vegetables",
  "tags": [
    "légumes",
    "Sans gluten",
    "Thaï",
    "papaye",
    "citron vert",
    "épicé",
    "mortier et peste"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 5,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Papaya verte (non mûre), pelée et déchiquetée",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "mangue verte",
        "kohlrabi + combinaison de concombre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chilis frais de l'œil d'oiseau thaïlandais",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "serrano (moins de chaleur)",
        "Chili rouge séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja + pincée de nori poudre pour végétalien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de palme (ou sucre brun léger)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Crevettes séchées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "skip pour végétalien",
        "pâte de crevette fermentée, petite quantité"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "tomates de raisins"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Fèves longues (longueur de la cour), coupées en morceaux de 3 cm",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "haricots verts"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Cacahuètes grillées, grossièrement broyées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "pounded_aromatics",
      "instructions": "Dans un grand mortier de granit et un pilon, ajouter les gousses d'ail et le chilis des yeux entiers. Pound jusqu'à ce qu'ils soient meurtris et cassés — pas une pâte, mais plus tout. Cela libère l'allicine dans l'ail et les huiles de capsaïcine dans le chili sans les faire disparaître dans une pâte. Dans le tum som, vous voulez des éclats visibles d'ail et de chili partout, pas une sauce homogène. La technique, c'est de tabasser, pas de broyer.",
      "visualCue": {
        "primaryTarget": "L'ail en morceaux durs et déchirés. Le Chili s'ouvre, les graines sont visibles. Le mortier sent l'ail cru et le chili frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours entier et dur. Le Chili est intact.",
            "action": "Livre plus dur et plus vigoureusement. Vous devez briser les murs de cellules, pas simplement déplacer les choses."
          },
          {
            "state": "Perfect",
            "description": "L'ail est en morceaux irréguliers avec des fibres fractionnées. Le Chili est fissuré et les graines sont exposées. Le mortier sent vif et intense.",
            "action": "Ajouter la crevette séchée et la livre brièvement, puis ajouter la papaye."
          },
          {
            "state": "Overdone",
            "description": "L'ail et le chili ont été pincés dans une pâte lisse.",
            "action": "Encore bon — les saveurs seront plus uniformes et intenses tout au long de la salade."
          }
        ]
      },
      "feelCue": "Chaque livre devrait se sentir comme une frappe contrôlée — ferme et délibérée, en utilisant le poids du peste plutôt que la force brute. Le son devrait être un bruit aigu et boisé avec le fond de la peste frappant le mur de mortier."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "pounded_aromatics",
        "ing_07",
        "ing_01",
        "ing_09"
      ],
      "outputState": "pounded_salad_base",
      "instructions": "Ajouter les crevettes séchées au mortier et les casser brièvement. Ajouter la papaye déchiquetée et les longs morceaux de haricots. Maintenant, utilisez une technique combinée de livre et de toss: livrez doucement avec le pilon tout en utilisant une grande cuillère pour lancer le mélange. Le but est de contusionner les brins de papaye pour qu'ils absorbent la vinaigrette, et non de les écraser. Vous voulez que les brins de papaye restent intacts, mais adoucis et pliables à partir des coups. Ajouter la moitié des tomates cerises et leur donner 2 à 3 livres doux pour les écraser légèrement afin qu'ils libèrent leur jus.",
      "visualCue": {
        "primaryTarget": "Les brins de papaye sont légèrement translucides aux bords des ecchymoses. Les tomates sont légèrement écrasées et libèrent du jus. Le mélange commence à mettre du liquide au fond du mortier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les brins de papaye sont encore complètement crus et rigides. Pas de liquide au fond du mortier.",
            "action": "Livre plus — la papaye doit être meurtrie pour absorber la vinaigrette. 20-30 grèves minimum."
          },
          {
            "state": "Perfect",
            "description": "Les brins de papaye sont légèrement adoucis et commencent à tourner translucide aux bords. Les tomates sont légèrement écrasées et saignent le jus. Juice se rassemble à la base du mortier.",
            "action": "Ajouter les ingrédients de la vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Papaya a été battue. Aucune texture ne reste.",
            "action": "Encore comestible — la saveur sera bonne mais la texture est perdue. Pour la prochaine fois, livrez moins agressivement et utilisez la technique de lancer plus."
          }
        ]
      },
      "feelCue": "Ramassez un brin de papaye battue — il devrait plier sans casser et sentir légèrement humide plutôt que sec et croquant. S'il est encore très raide et sec, livrez plus."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "pounded_salad_base",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_som_tum",
      "instructions": "Ajouter le sucre de palme, la sauce de poisson et le jus de lime au mortier. Toss et légèrement tout battre ensemble pour combiner. Goûter constamment — le som tum est sur l'équilibre de précision entre les quatre saveurs: aigre (lime), salé (sauce de poisson), doux (sucre), et umami-chaud (chili + sauce de poisson). Ajuster un élément à la fois : plus de citron vert pour la luminosité, plus de sauce de poisson pour la profondeur et le sel, plus de sucre pour adoucir si trop dur. Aucun lot n'est identique: le jus de lime et l'acidité naturelle de la papaye varient. La salade finie devrait être assaisonnée de façon agressive selon les normes occidentales — c'est intentionnel.",
      "visualCue": {
        "primaryTarget": "Un pansement brillant et teinté d'ambre pour chaque brin de papaye. Le jus de tomate et la vinaigrette se sont combinés dans une piscine à la base du mortier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ingrédients d'habillage n'ont pas été complètement combinés. Piscines de sauce de poisson visibles. Les granules de sucre sont encore visibles.",
            "action": "Jetez plus agressivement. Le sucre doit se dissoudre complètement avant de goûter pour l'équilibre."
          },
          {
            "state": "Perfect",
            "description": "Un pansement brillant et unifié qui recouvre tout. La papaye a absorbé la saveur et n'est plus neutre-tâche. Chaque morsure produit simultanément de l'aurore-chaud-sel-douce.",
            "action": "Transférer dans une assiette et finir avec des cacahuètes."
          },
          {
            "state": "Overdone",
            "description": "Trop liquide — la salade nage plutôt que habillée.",
            "action": "Soulever les solides avec des pinces et servir sur le riz, qui absorbera la vinaigrette supplémentaire."
          }
        ]
      },
      "feelCue": "Goûtez la vinaigrette du mortier — il devrait simultanément faire votre eau de bouche (sour), vous faire atteindre l'eau (chauffe), et vous garder revenir (umami). Si une sensation domine complètement, elle est déséquilibrée."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "finished_som_tum",
        "ing_10"
      ],
      "outputState": "plated_som_tum",
      "instructions": "Transférer le som tum dans une assiette en utilisant des pinces, en maintenant les brins de papaye intacts et disposés de façon lâche. Verser le reste de la vinaigrette du mortier sur la salade. Dispersez les cacahuètes grillées sur le dessus. Servir immédiatement à côté de riz collant. Som tum ne tient pas — le sel et l'acide vont continuer à flétrir la papaye et la salade sera soyeuse dans les 30 minutes. Faire et manger.",
      "visualCue": {
        "primaryTarget": "Un monticule lumineux de brins de papaye pâle, de tomates rouges vives et de haricots verts dans une vinaigrette ambre, surmonté d'arachides dorées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les arachides ne sont pas ajoutées. La salade semble pâle et manque de contraste textural.",
            "action": "Ajouter généreusement des cacahuètes. Ils fournissent la croûte et la richesse qui équilibrent l'acidité de la salade."
          },
          {
            "state": "Perfect",
            "description": "Couleurs vives: papaye pâle, tomate rouge, haricots verts. Cacahuètes dorées et dispersées. Dressing scintillement sur chaque surface.",
            "action": "Servir dans les 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Papaya s'est flétrie jusqu'à une masse sombre et pâle. Le pansement est entièrement absorbé et les couleurs sont ternes.",
            "action": "Ça fait trop longtemps. La saveur est encore bonne — servir sur le riz chaud et il devient un excellent composant de salade chaude."
          }
        ]
      },
      "feelCue": "Mordre dans la salade — vous devriez sentir plusieurs textures simultanément: la croûte d'arachide, la légère résistance de la papaye, la douceur de la tomate, et la pop du long fève. Si tout est uniformément doux, il faut le manger plus tôt la prochaine fois."
    }
  ]
};
