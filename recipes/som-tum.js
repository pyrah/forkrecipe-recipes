export default {
  "repoId": "master_thai_som_tum_001",
  "parentRepoId": null,
  "slug": "som-tum",
  "author": "ForkRecipe Kitchen",
  "title": "Soum Tum (Salade de papaye verte)",
  "description": "Saupoudrer de papaye non mûre d'ail, de piments, de citron vert, de sauce de poisson et de sucre de palme — un équilibre cinétique de chaleur aigre, salée, douce et incendiaire qui est simultanément rafraîchissante et addictif.",
  "cuisine": "Thaï",
  "culture": "Isaan",
  "category": "vegetables",
  "tags": [
    "salade",
    "Thaï",
    "papaye",
    "épicé",
    "acide"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "15 min",
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
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Papaya verte (non mûre) (peautée, déchiquetée ou julienne)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mangue verte",
        "kohlrabi pour texture seulement"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Oiseaux d'oiseaux",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Serrano (milder)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de poisson (nom pla)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme (gâté ou rasé)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Crevettes séchées",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour végétarien"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Haricots longs ou haricots verts (coupés en longueurs de 3 cm)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Tomates cerises (chaudées)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates de raisins"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Cacahuètes grillées",
      "ratioValue": 8,
      "defaultUnit": "parts",
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
      "instructions": "Placez l'ail et les piments des yeux dans un grand mortier d'argile thaïlandais (dîne de krok). Pound avec le pestle jusqu'à ce que l'ail et les piments soient grossièrement cassés — pas une pâte lisse. Vous voulez des morceaux visibles d'ail et de chili, les huiles libérées mais la texture encore grossière et chunky. Réduire ou augmenter le nombre de piments selon la préférence pour la chaleur : 2 piments est doux, 5 est le standard du marché thaïlandais, 8 est le niveau Isaan-grand-mère.",
      "visualCue": {
        "primaryTarget": "Morceaux grossiers, fragments d'ail et de chili déchiquetés avec des huiles libérées qui brillent sur la surface du mortier. Le mortier sent fortement l'ail cru et la capsaïcine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les piments et l'ail sont à peine craqués — il reste des morceaux entiers. Huiles non libérées.",
            "action": "Pound plus fermement pendant encore 30 secondes. L'objectif est de contusion, pas de purée."
          },
          {
            "state": "Perfect",
            "description": "Morceaux d'ail et de chili avec du jus et de l'huile visibles. La couleur est vive: ail blanc, fragments de chili rouge.",
            "action": "Ajouter les haricots et les tomates."
          },
          {
            "state": "Overdone",
            "description": "Pounded à une pâte lisse. Le contraste textural de la salade sera diminué.",
            "action": "Encore utilisable — continuez. La saveur est identique."
          }
        ]
      },
      "feelCue": "Le pilon doit rebondir légèrement après chaque coup ferme — si le mouvement est amorti et musqué, les aromatiques deviennent trop pulvérisés. Arrêtez de frapper et utilisez un mouvement de contusion plus doux."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "pounded_aromatics",
        "ing_08",
        "ing_09",
        "ing_07"
      ],
      "outputState": "bruised_salad_base",
      "instructions": "Ajoutez les longs morceaux de haricots au mortier et livrez délicatement 4 à 5 fois pour les ecchymoser et les diviser — ils devraient craquer et relâcher le jus, mais ne pas tourner en bouillir. Ajouter les demi-tomates cerises et livrer encore 3 à 4 fois jusqu'à ce que les tomates éclatent et libèrent leur jus dans le mortier. Ajouter la crevette séchée et la livre une ou deux fois à incorporer. L'objectif est de contusions et non de purée: vous voulez que les légumes s'ouvrent et libèrent leur liquide dans la vinaigrette, et non se dissoudre.",
      "visualCue": {
        "primaryTarget": "Les haricots sont fendus et légèrement aplatis. Les tomates sont des éclats et du jus de sang dans le mortier. Les crevettes séchées sont légèrement adoucies et intégrées. Le mortier contient une petite piscine de jus de légumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont encore intacts et ronds. Tomates intactes. Pas de liquide dans le mortier.",
            "action": "Continuer à frapper avec un peu plus de force — les haricots doivent particulièrement se diviser pour absorber la vinaigrette."
          },
          {
            "state": "Perfect",
            "description": "Les haricots creusaient et pleuraient. Des tomates éclatent et juteuses. Crevettes séchées ramollies et parfumées. Pool de jus rose pâle dans la base de mortier.",
            "action": "Ajouter les ingrédients de la vinaigrette et la papaye."
          },
          {
            "state": "Overdone",
            "description": "Les haricots et les tomates ont été réduits à un lisier végétal.",
            "action": "La salade aura un bon goût mais la texture sera plus d'une pâte rugueuse qu'une salade. Réglez la technique de frappe la prochaine fois."
          }
        ]
      },
      "feelCue": "Chaque livre du pestle devrait avoir l'impression de rencontrer une résistance et de donner — cette fissure élastique quand un haricot se divise est le son et la sensation de la technique correcte."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "bruised_salad_base",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "dressed_base",
      "instructions": "Ajouter le sucre de palme, la sauce de poisson et le jus de lime au mortier. Utilisez le pestle pour remuer et légèrement contuser pour dissoudre le sucre de palme. Goûtez la vinaigrette à l'aide d'une cuillère — elle devrait être amère du citron vert, salée de la sauce de poisson et sucrée du sucre de palme, avec la chaleur de l'édifice chili à la fin. Ajustez le solde maintenant avant d'ajouter la papaye. La vinaigrette doit être légèrement plus intense que désiré dans le plat fini, car la papaye la diluera.",
      "visualCue": {
        "primaryTarget": "Le liquide au fond du mortier est un ambre clair et pâle avec une odeur complexe de zeste de lime, de funk de sauce de poisson et de sucre de palme sucré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette a un goût plat: trop peu d'acide ou de sucre non complètement dissous.",
            "action": "Ajouter plus de jus de lime en petits incréments. Grincer le sucre de palme avec le pestle si des grumeaux restent."
          },
          {
            "state": "Perfect",
            "description": "Un seul goût vous fait saliver et sucer légèrement. L'équilibre de la sucrée aigre-sel est clair avec la chaleur à la finale. Un peu plus intense que le plat final.",
            "action": "Ajouter la papaye déchiquetée."
          },
          {
            "state": "Overdone",
            "description": "Trop de sauce de poisson rend la vinaigrette plus salée que acide. Ça sent le funky et l'excès de pouvoir.",
            "action": "Ajouter plus de jus de lime et une pincée de sucre de palme pour ramener l'acide et adoucir le sel."
          }
        ]
      },
      "feelCue": "L'arôme qui monte du mortier devrait faire de votre eau de bouche avant de le goûter — citron vert vif, sauce de poisson salée, et chaud sucre de palme créant une odeur qui est d'une certaine façon simultanément frais et piquant."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "dressed_base",
        "ing_01",
        "ing_10"
      ],
      "outputState": "finished_som_tum",
      "instructions": "Ajouter la papaye verte déchiquetée au mortier en quelques poignées. Utilisez le pestle pour battre légèrement et la cuillère pour lancer simultanément — une technique à deux mains qui écrase légèrement la papaye tout en enrobant chaque brin dans la vinaigrette. Pound légèrement 5 à 6 fois en tournant avec la cuillère, puis goûter et ajuster l'assaisonnement. Ajouter les cacahuètes grillées et mélanger une fois de plus. Servir immédiatement dans le mortier ou dans une assiette de service. Som tum ne conserve pas — l'acide flétrit la papaye dans les 30 minutes.",
      "visualCue": {
        "primaryTarget": "Des brins de papaye pâles et semi-translucides scintillent avec de la vinaigrette, vifs contre le chili rouge et les haricots verts. Le jus de mortier s'accroche à chaque brin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les brins de papaye ne sont pas encore enduits — la vinaigrette est encore enroulée au fond tandis que la papaye est sèche sur le dessus.",
            "action": "Jetez et livrez plus, levant du fond pour amener le pansement à travers la papaye."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin de papaye est enduit et scintillement. La salade est vibrante de couleur: papaye d'ivoire pâle, chili rouge, haricots verts, tomate rouge. Le goût délivre les quatre notes clés simultanément : aigre, salé, doux, chaud.",
            "action": "Scatter les cacahuètes sur le dessus et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Papaya a été battue à un mash doux et humide. La salade a l'air grise et plate.",
            "action": "Servir immédiatement; aucun rétablissement. La saveur est identique mais la texture est perdue."
          }
        ]
      },
      "feelCue": "Soulevez un paquet de brins de papaye habillés — ils devraient être lisses et frais, presque croquants. La résistance croquante de la papaye crue contre la vinaigrette intense est le cœur textural du plat."
    }
  ]
};
