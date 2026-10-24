export default {
  "repoId": "master_ethiopian_berbere_001",
  "parentRepoId": null,
  "slug": "berbere",
  "author": "ForkRecipe Kitchen",
  "title": "Berbère",
  "description": "La pierre angulaire de la cuisine éthiopienne: les piments séchés, les épices chaudes et les aromates aigus grillés et broyés ensemble dans un mélange brun-rougeâtre profond qui donne aux wats et aux tibias leur chaleur caractéristique et leur complexité en couches.",
  "cuisine": "Éthiopien",
  "culture": "Éthiopien",
  "category": "condiments",
  "tags": [
    "mélange d'épices",
    "ethiopienne",
    "Chili",
    "aromatiques",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 2,
    "bitter": 3,
    "umami": 2,
    "heat": 8
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chilies rouges séchées (guajillo ou Nouveau-Mexique), tiges enlevées",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "ancho séché pour une version plus légère",
        "oeil d'oiseau séché pour plus chaud"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Graines de coriandre",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Gousses de cardamome noir (ou vert), graines seulement",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Cardamome vert"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de fénugreek",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Cannelle du sol",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "en cassie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Vers le sol",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Gousses de terre",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel de mer ou de casher",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "1/2 partie de gingembre moulu séché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Oignon, râpé ou haché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "toasted_whole_spices",
      "instructions": "Dans une poêle sèche lourde à feu moyen-doux, toaster les épices entières en lots par taille — les chilis séchés d'abord (1–2 minutes par côté, en pressant à plat avec une spatule), puis les graines entières ensemble. Mélangez les graines en permanence et retirez de la chaleur dès que vous entendez les premiers éclats et sentez une vague profondément aromatique — environ 90 secondes à 2 minutes. Le but est de chasser l'humidité de surface et de fleurir les huiles aromatiques sans brûler. Mettre les épices grillées sur une assiette pour refroidir complètement avant de broyer.",
      "visualCue": {
        "primaryTarget": "Les chiles sont souples et légèrement cloqués avec de légères marques d'omble. Les graines sont de 1 à 2 nuances plus foncées, parfumées, et commencent à pop.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilies sont encore raides, les graines sont pâles et sentent crus et pétillants.",
            "action": "Continuer à griller à feu doux. Les épices sous-toasted produisent un berbère plat et unidimensionnel."
          },
          {
            "state": "Perfect",
            "description": "Les chilies sont parfumées et légèrement flexibles, la fumée est faible. Les graines sont visiblement plus foncées, l'odeur du pain chaud et des aromatiques complexes.",
            "action": "Étaler sur une assiette immédiatement pour refroidir."
          },
          {
            "state": "Overdone",
            "description": "Les graines commencent à sentir acride ou brûlé. Les chilies ont des taches carbonisées foncées.",
            "action": "Jetez les graines profondément brûlées et cueillez-les. Continuez avec le reste — une suralimentation mineure est acceptable."
          }
        ]
      },
      "feelCue": "Un chili grillé doit se sentir cuir et souple — le plier en deux et il ne doit pas craquer. Un chili cru craque proprement. L'air de la cuisine doit sentir du chili grillé à sec et des épices chaudes et complexes."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "toasted_whole_spices"
      ],
      "outputState": "ground_spices",
      "instructions": "Laisser les épices grillées refroidir entièrement à la température ambiante — le broyage d'épices chaudes crée de la vapeur qui transforme votre poudre en croûtes. Enlevez les piments grillés en morceaux, enlevant et en jetant les graines restantes (enlevant les graines augmente la chaleur, en les enlevant le modéré). Mouiller toutes les épices grillées dans un broyeur ou un mélangeur d'épices jusqu'à ce que le mélange soit une poudre fine, uniforme et rouge brique. Plongez dans un tamis à mailles fines — rabattre les morceaux grossiers qui restent. La poudre doit être suffisamment sèche pour s'écouler librement.",
      "visualCue": {
        "primaryTarget": "Une poudre fine, rouge brique à l'orange profonde qui coule comme de la farine, sans fragments de graines visibles ou de piments fibreux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fragments de graines visibles et morceaux de chili fibreux. La poudre est grossière et sablonneuse.",
            "action": "Rebrancher en lots. Couper et rabattre les morceaux grossiers. Berbere grossier a une texture désagréable."
          },
          {
            "state": "Perfect",
            "description": "Poudre lisse, fine et de couleur uniforme. Il coule librement quand il est tapé. Ça sent vif et aromatique.",
            "action": "Transférer dans un bol et ajouter le reste des épices."
          },
          {
            "state": "Overdone",
            "description": "La poudre est si fine qu'elle est devenue presque poussiéreuse. Les huiles aromatiques ont été libérées par la chaleur du surgissement.",
            "action": "Continuez immédiatement. L'épice extrêmement fine perd rapidement ses volatiles — mélangez et entreposez immédiatement."
          }
        ]
      },
      "feelCue": "Frottez une petite pincée de base berbère entre vos doigts – elle devrait se sentir soyeuse, comme du paprika de haute qualité. Tout grain signifie plus de broyage est nécessaire."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "ground_spices",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "dry_berbere_blend",
      "instructions": "Mélanger la poudre fraîchement moulue de chili-spice avec la cannelle, l'allspice, les girofles et le sel. Mélanger jusqu'à ce que la couleur soit complètement uniforme — pas de stries de cannelle-brun ou d'allspice pâle visible. Ce mélange de berbère sec est une agrafe de garde-manger : conserver dans un pot hermétique et l'utiliser pendant 3 mois. C'est la base de la version de pâte ci-dessous.",
      "visualCue": {
        "primaryTarget": "Un mélange riche, uniforme, rouge brique à orange foncé sans stries de couleur ni taches pâles. La surface ressemble à un beau paprika foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries pâles de cannelle ou d'alspice visibles dans le mélange rouge.",
            "action": "Mélanger plus soigneusement — utiliser un petit fouet ou tamiser ensemble."
          },
          {
            "state": "Perfect",
            "description": "Entièrement uniforme rouge brique, profondément parfumé. Sentez simultanément de chaleur de chili, d'épices chaudes et d'aromates complexes.",
            "action": "Utiliser comme un frottage sec, ou continuer à coller la forme."
          },
          {
            "state": "Overdone",
            "description": "S.O. pour un mélange sec — cette étape ne peut pas être vraiment exagérée.",
            "action": "Conserver dans un contenant hermétique à l'abri de la chaleur et de la lumière."
          }
        ]
      },
      "feelCue": "Un bout de doigt pressé dans le mélange sec devrait sortir uniformément rouge-orange, en masquant les crêtes de l'empreinte digitale — un signe de bonne, épice fraîche fine-sol avec des huiles intactes."
    },
    {
      "nodeId": "step_4",
      "action": "Saucisse",
      "inputs": [
        "dry_berbere_blend",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_berbere",
      "instructions": "Pour faire la forme de pâte utilisée en cuisine éthiopienne : faire chauffer une poêle sèche à feu moyen-doux. Ajouter l'oignon et le gingembre sans huile. Mélanger constamment, cuire le mélange d'oignon jusqu'à ce qu'il soit très sec et commence juste à colorier — environ 10 minutes. Cette friture sèche des aromatiques sans huile est une technique traditionnelle éthiopienne qui concentre la saveur sans ajouter de graisse. Ajouter le mélange de berbère sec et 2 à 3 cuillères à soupe d'eau ou de tej (vin de miel éthiopien). Incorporer continuellement 3-4 minutes à feu doux, en ajoutant une cuillère à soupe à la fois pour former une pâte épaisse. La pâte est faite lorsque l'odeur d'oignon cru a entièrement cuit.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique épaisse et sombre qui tient sa forme lorsqu'elle est écopée d'une cuillère. L'oignon et le gingembre sont complètement intégrés, et la surface mijote faiblement avec les huiles d'épices libérées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte sent l'oignon cru et a une qualité nette et non cuite. La couleur est orange-rouge vif.",
            "action": "Continuer la cuisson à feu doux en remuant constamment pendant 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Deep brique rouge, intensément aromatique. L'odeur d'oignon brut est disparue, remplacée par une profondeur savoureuse complexe. La pâte coule lentement d'une cuillère.",
            "action": "Refroidir, puis transférer dans un pot scellé. Réfrigérer pendant 2 semaines, geler pendant 6 mois."
          },
          {
            "state": "Overdone",
            "description": "La pâte est collée et brûlée, avec des taches sombres et une odeur amère.",
            "action": "Dégraisser la pâte non brûlée et jeter les morceaux brûlés. Ajouter une cuillère à soupe d'eau et remuer pour récupérer."
          }
        ]
      },
      "feelCue": "Une pâte de berbère finie pressée entre deux doigts devrait se sentir lisse et légèrement grasse — les huiles d'épices ont pleinement fleuri. Il ne devrait pas y avoir de grain, et la couleur devrait tacher vos doigts immédiatement un rouge-orange profond."
    }
  ]
};
