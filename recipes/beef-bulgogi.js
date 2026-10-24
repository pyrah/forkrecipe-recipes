export default {
  "repoId": "master_korean_beefbulgogi_001",
  "parentRepoId": null,
  "slug": "beef-bulgogi",
  "author": "ForkRecipe Kitchen",
  "title": "Boeuf coréen Bulgogi",
  "description": "Morceau de boeuf finment tranché mariné dans un élixir de poire et de soie, grillé ou cuit en quelques secondes — doux, salé, caramélisé aux bords et irrésistiblement tendre.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "proteins",
  "tags": [
    "boeuf",
    "coréen",
    "grillé",
    "marinade",
    "bulgogi",
    "bbq"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Viande de boeuf côtelé ou longe, partiellement congelée",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "filet de bœuf",
        "steak de flanc (slice à travers le grain)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Poire asiatique râpée de jus",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Poire de bosc",
        "kiwi (utiliser 30 g — enzymes plus puissantes)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari",
        "sauce de soja à faible teneur en sodium"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "Chérie",
        "sirop de maïs"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail hachées à pâte",
      "ratioValue": 5,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et râpé",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu (2 g)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalons, tranchés finement (blanches pour marinade, verts pour garnir)",
      "ratioValue": 4,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Tranche",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sliced_beef",
      "instructions": "Placer le boeuf au congélateur de 30 à 45 minutes jusqu'à ce qu'il soit ferme mais non congelé, une légère croûte de gel à l'extérieur, ce qui donne de l'intérieur. À l'aide d'un couteau très tranchant, couper le grain aussi fin que possible : 2–3 mm est idéal. La viande partiellement congelée tient sa structure sous la lame, permettant des coupes qui seraient impossibles avec le boeuf à température ambiante. Éventer les tranches dans un plat large et peu profond pour mariner.",
      "visualCue": {
        "primaryTarget": "Tranches fines translucides, chacune montrant clairement le motif du grain. De 2 à 3 mm. Pas de larmes ou de sections épaisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Boeuf trop doux — la lame pousse plutôt que les coupes, produisant des plaques épaisses et inégales.",
            "action": "Retourner au congélateur pendant 10 minutes. Plus c'est ferme, plus la coupe est mince."
          },
          {
            "state": "Perfect",
            "description": "Presque à travers au point le plus mince. Chaque tranche drape sur elle-même comme du tissu. Lignes de grains visibles et intactes.",
            "action": "Les tranches d'éventail dans la marinade immédiatement — ne les laissez pas dégeler et se serrer ensemble."
          },
          {
            "state": "Overdone",
            "description": "La viande de boeuf est congelée solide — le couteau brise plutôt que des tranches, produisant des fragments friables.",
            "action": "Dégeler à la température ambiante pendant 10 minutes et réessayer."
          }
        ]
      },
      "feelCue": "Soulevez une tranche et laissez-la draper au-dessus de votre doigt — il doit se comporter comme un mince morceau de tissu, souple et légèrement translucide. S'il est rigide, le boeuf est encore trop froid."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "sliced_beef",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "marinated_bulgogi",
      "instructions": "Fouetter la sauce soja, la poire râpée, l'huile de sésame, le sucre, l'ail, le gingembre, les blancs d'oignon et le poivre jusqu'à ce que le sucre se dissout complètement. Verser sur les tranches de bœuf en éventail. Avec des mains propres, massez la marinade dans chaque tranche, les séparant pour assurer une couverture complète. Couvrir et réfrigérer. Faire mariner un minimum de 2 heures; 4 heures est le bon endroit. Au-delà de 8 heures, les enzymes de poire commencent à compromettre la texture du boeuf.",
      "visualCue": {
        "primaryTarget": "Chaque tranche de bœuf enrobée d'une marinade jaune foncé brillant. La viande a absorbé la couleur et la surface semble légèrement teintée plutôt que humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont entrecoupées de marinade assises entre elles plutôt que de les enrober chacune. Des taches pâles visibles.",
            "action": "Séparer les tranches et masser à nouveau. Ventilez-les en une seule couche."
          },
          {
            "state": "Perfect",
            "description": "Après 4 heures : la chair s'est obscurcie jusqu'à un riche brun-ambre. La marinade est absorbée, laissant un léger éclat. L'arôme de sésame et de soja pénètre.",
            "action": "Retirer du réfrigérateur 15 minutes avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "La surface du boeuf est douce et légèrement visqueuse après plus de 12 heures — les enzymes ont commencé à décomposer les protéines de surface.",
            "action": "Cuire immédiatement. L'intérieur sera toujours tendre et savoureux."
          }
        ]
      },
      "feelCue": "Appuyez sur une tranche contre le plat — il doit se sentir légèrement collant du soja et du sucre, pas mouillé ou glissant. La viande doit être légèrement plus tendre que crue, même avant la cuisson."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "marinated_bulgogi"
      ],
      "outputState": "seared_bulgogi",
      "instructions": "Chauffer une poêle ou un gril en fonte à la chaleur la plus élevée possible jusqu'à ce qu'il fume. Travaillez en très petits lots — une seule couche de tranches ne couvrant pas plus d'un tiers de la surface de la poêle. Le sucre dans la marinade caramélise instantanément sur une surface chaude et hurlante; l'engorgement baisse la température de la poêle et produit de la vapeur au lieu de la mer. Faire cuire chaque lot de 60 à 90 secondes de chaque côté. La caramélisation se produit dans les 30 premières secondes de contact.",
      "visualCue": {
        "primaryTarget": "Deep acajou brun avec des bords légèrement carbonisés et collants. Chaque tranche porte une marque de grill ou de poêle. Pas de surface grise, à la vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gris pâle et humide. La viande libère du liquide dans la poêle. Ça colle légèrement.",
            "action": "Tu as bouché la casserole. Enlevez la moitié du boeuf, laissez la poêle retomber à la température, puis entrez en petits lots."
          },
          {
            "state": "Perfect",
            "description": "Brun foncé aux bords carbonisés presque noirs. Le sucre a laqué sur la surface. L'arôme de caramel et de soja remplit la cuisine. Libérer proprement.",
            "action": "Transférer immédiatement dans l'assiette de service. Continuez avec le prochain lot."
          },
          {
            "state": "Overdone",
            "description": "Le sucre a brûlé une croûte noire et acride. Fumée amère visible.",
            "action": "Essuyez la casserole entre les lots. Réduire la chaleur de 10% pour le prochain tour."
          }
        ]
      },
      "feelCue": "Les bords des tranches cuites doivent être légèrement croustillants lorsqu'elles sont touchées; le sucre caramélisé forme une croûte fine et vitreuse. Le centre devrait se développer doucement, presque fondre sous pression."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "seared_bulgogi",
        "ing_10",
        "ing_08"
      ],
      "outputState": "finished_bulgogi",
      "instructions": "Pile le bulgogi marin sur un plateau de service. Scatter grillé graines de sésame et les verts de pétoncle réservés sur le dessus. Servir immédiatement aux côtés du riz à grains courts, du kimchi et du banchan. Pour le ssam, fournir des feuilles de perilla et du riz pour l'emballage.",
      "visualCue": {
        "primaryTarget": "Collants, tranches caramélisées foncées empilées de sésame blanc et de pétoncle vert vif. La vapeur monte de la pile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Garnir éparpillé avant que le boeuf ait été plaqué — graines de sésame huiler dans les jus de poêle résiduels.",
            "action": "Arrangez toujours le boeuf d'abord, puis garnissez-le tout en bouillant."
          },
          {
            "state": "Perfect",
            "description": "Graines de sésame blanc vif et sec contre la viande foncée. L'échalote sonne vert vif. La vapeur parfumée de sésame et de caramel.",
            "action": "Servir immédiatement — le boulgogi est mieux mangé au moment où il est hors de la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Autorisé à s'asseoir — la viande s'est refroidie, la graisse s'est légèrement condensée, le pétoncle est flétri et sombre.",
            "action": "Une explosion de 30 secondes dans la casserole va la relancer. Ajouter la garniture fraîche."
          }
        ]
      },
      "feelCue": "Ramasser une tranche avec des baguettes — il devrait draper et plier sans résistance, les bords légèrement croustillants, le centre donnant et tendre. Les graines de sésame doivent croquer individuellement sous la dent."
    }
  ]
};
