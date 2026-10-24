export default {
  "repoId": "master_indian_biryani_masala_001",
  "parentRepoId": null,
  "slug": "biryani-masala",
  "author": "ForkRecipe Kitchen",
  "title": "Biryani Masala",
  "description": "Un mélange d'épices Hyderabadi à la main où la maque, la fleur de pierre et l'anis étoilé parfument la cuisine avant qu'un seul grain de riz soit cuit — l'épine dorsale aromatique qui sépare un vrai biryani d'un plat de riz assaisonné. La terre juste avant l'utilisation, il transforme n'importe quel pot de riz en une mémoire olfactive.",
  "cuisine": "Indiens",
  "culture": "Hyderabadi",
  "category": "condiments",
  "tags": [
    "indienne",
    "d'épices",
    "biryani",
    "hyderabadi",
    "Masala",
    "aromatiques"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Gousses de cardamome vert (légèrement écrasées)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Cardamome avant le sol (1,5 partie)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Brosses de cardamome noir (brûlées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "cardamome vert extra (ajoute fumée, profil différent)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "girofles au sol (0,75 parties)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Bâtons de cannelle (ou véritable écorce de cassie, 2 cm)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "cannelle au sol (1 partie)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Anise de l'étoile (ensemble)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de fenouil (2 parties, profil différent)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Lames de macre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "muscade, fraîchement râpée (0,5 parties)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Phool Dagad (fleur de pierre / kalpasi)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "extra mace (la note minérale sera absente mais la saveur sera encore complexe)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Shahi jeera (cumin noir / caraway)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de cumin régulières (arôme plus léger)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Feuilles de la baie (Tej patta indienne, séchée)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Feuilles de laurier méditerranéennes (milder)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poudre de chili rouge cachemiri (pour la couleur et la chaleur légère)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "toasted_spices",
      "instructions": "Placer une poêle sèche et lourde (fer ou acier au carbone) à feu moyen-doux. Lorsque la poêle est chaude mais ne fume pas, ajouter toutes les épices entières sauf la poudre de chili cachemiri et le sel. Faire cuire, agiter la poêle constamment et ne jamais s'éloigner, pendant 3 à 5 minutes. L'objectif est de chasser l'humidité et d'expulser les huiles volatiles — et non de charrer les épices. Regardez les gousses de cardamome : elles bouffent légèrement quand elles sont prêtes. Regardez les gousses : elles commencent à s'ouvrir. Le moment où vous pouvez sentir des vagues distinctes d'arômes d'épices individuelles — d'abord la cardamome, puis la girofle, puis l'anis — le toast est complet. Retirer du feu et aspirer immédiatement sur une assiette froide pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Les épices entières sont légèrement foncées, non plus mates mais légèrement brillantes à partir d'huiles libérées. La vapeur a cessé de se lever. Les gousses de cardamome ont gonflé et les gousses ont commencé à se défourner.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices semblent inchangées — pâles, sèches, mates. L'odeur est encore crue et piquante plutôt que chaude et douce.",
            "action": "Continuer à feu moyen-doux, en tremblant constamment. N'augmentez pas la chaleur pour vous dépêcher — vous brûlerez les huiles volatiles."
          },
          {
            "state": "Perfect",
            "description": "Les épices sont légèrement grillées — visiblement plus foncées mais pas noires. La pièce sent intensément parfumée : douce, chaude et complexe tout à la fois.",
            "action": "Retirer du feu et aspirer immédiatement sur une plaque froide."
          },
          {
            "state": "Overdone",
            "description": "Toute épice est noire ou fumée. Une odeur de camphre dure et amère domine.",
            "action": "Jeter et recommencer: les épices brûlées rendront tout le mélange amer et ne pourront être corrigées."
          }
        ]
      },
      "feelCue": "Ramassez une gousse de cardamome entre deux doigts — si elle s'est légèrement adoucie et libère son parfum lorsqu'elle est légèrement pressée, l'humidité à l'intérieur a cuit et les huiles sont prêtes."
    },
    {
      "nodeId": "step_2",
      "action": "Refroidir",
      "inputs": [
        "toasted_spices"
      ],
      "outputState": "cooled_spices",
      "instructions": "Étendre les épices grillées sur une large assiette en une seule couche et laisser refroidir complètement à température ambiante avant de broyer — environ 5 minutes. Ne précipitez pas cette étape en broyant les épices chaudes : la chaleur résiduelle dans un broyeur d'épices fera évaporer les huiles volatiles pendant le broyage, laissant un masala plat et muet. Enlevez les graines de cardamome de leurs gousses en appuyant avec le plat d'un couteau, jetant les coques de papier. Crumler la cannelle et les feuilles de laurier en petits morceaux pour meuler.",
      "visualCue": {
        "primaryTarget": "Les épices sont revenues à la température ambiante, ne sont plus parfumées à distance, les huiles se sont réinstallées dans les graines et l'écorce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sont encore chaudes au toucher et la plaque libère des spores aromatiques visibles.",
            "action": "Attendez encore 2 minutes — la patience protège ici le goût final."
          },
          {
            "state": "Perfect",
            "description": "Les épices sont fraîches, sèches au toucher et stables. Seulement légèrement parfumé à moins que vous en tenez un près de votre nez.",
            "action": "Transférer dans un broyeur d'épices avec de la poudre de chili et du sel."
          },
          {
            "state": "Overdone",
            "description": "Les épices sont trop longues et ont absorbé l'humidité ambiante (plus de 30 minutes dans une cuisine humide).",
            "action": "Retoutez brièvement pendant 1 minute pour éliminer l'humidité avant de broyer."
          }
        ]
      },
      "feelCue": "Maintenez l'assiette à votre paume — il devrait se sentir neutre, ni chaud ni froid. Les épices doivent être sèches et légèrement rugueuses, non collantes ou humides."
    },
    {
      "nodeId": "step_3",
      "action": "Piler",
      "inputs": [
        "cooled_spices",
        "ing_11",
        "ing_12"
      ],
      "outputState": "biryani_masala_powder",
      "instructions": "Transférer les épices refroidies dans un broyeur d'épices ou un mortier lourd. Ajouter le chili cachemiri en poudre et le sel. Graisser en petites impulsions de 5 secondes, en arrêtant de remuer, jusqu'à ce que vous obteniez une poudre modérément fine — pas tout à fait farineuse, mais pas de morceaux entiers visibles. Une légère grossièreté est souhaitable: la texture ajoute un intérêt visuel dans le plat final. Pour broyer dans un mortier, commencer par les épices les plus dures (cloves, poivre noir, cannelle) et travailler dans les petites graines une fois que les morceaux durs ont cassé. Passer à travers un tamis à mailles moyennes et rabattre les morceaux qui ne passent pas. Conserver dans un pot en verre hermétique à l'abri de la lumière jusqu'à trois semaines.",
      "visualCue": {
        "primaryTarget": "Poudre chaude brun rougeâtre avec des taches visibles de cardamome foncé et de cannelle pâle — de couleur uniforme, non blanc farineux, non noircie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles d'écorce de cannelle, de cardamome et de grains de poivre entiers. La poudre est grossière et inégale.",
            "action": "Grind plus loin dans les pulsations. Enlevez les fragments de musc."
          },
          {
            "state": "Perfect",
            "description": "Poudre homogène, moyennement fine. Reddish-brun avec un parfum d'épices chaudes qui vous frappe au moment où le couvercle de broyeur s'ouvre.",
            "action": "Sift et jar immédiatement. Étiquette avec la date."
          },
          {
            "state": "Overdone",
            "description": "La poudre est très fine et pâle; certaines huiles volatiles se sont dispersées du sur-grindage, surtout si le broyeur courait continuellement et s'échauffait.",
            "action": "Toujours utilisable. Utilisez un peu plus que spécifié dans la recette pour compenser."
          }
        ]
      },
      "feelCue": "Frottez une pincée entre vos doigts — il devrait se sentir comme du sable fin, légèrement huileux à partir des huiles d'épices, et la chaleur devrait s'accumuler sur le bout des doigts dans les 10 secondes de la piperine dans le poivre noir."
    }
  ]
};
