export default {
  "repoId": "master_french_butter_poached_lobster_001",
  "parentRepoId": null,
  "slug": "butter-poached-lobster",
  "author": "ForkRecipe Kitchen",
  "title": "Lobster beurré (Beurre Monté)",
  "description": "La queue de homard et la chair de griffe submergée dans une émulsion de beurre pur, à peine étirée, étincelante, maintenue à une température trop basse pour endurcir les protéines — blanc opaque émergent, incroyablement tendre, dégustation de la mer filtrée à la crème. Ce n'est pas du homard bouilli avec du beurre sur le côté; c'est du homard qui devient du beurre.",
  "cuisine": "Français",
  "culture": "Français-Américain",
  "category": "seafood",
  "tags": [
    "homard",
    "beurre",
    "beurre-monte",
    "pochage",
    "français",
    "occasion spéciale",
    "faible temps"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Langoustes vivants (1,25–1,5 lb chacun)",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "queues fraîches de homard (brute)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, froid, cube (1 cm cubes)",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Tours d'estragon frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "cervil frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Citron, jus et zeste",
      "ratioValue": 0.5,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gousse d'ail légèrement cassée",
      "ratioValue": 1,
      "defaultUnit": "clove",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "parcooked_lobster",
      "instructions": "Porter un grand pot d'eau fortement salée à ébullition. L'eau doit avoir un goût doux. Déplacez chaque homard humainement en conduisant l'extrémité d'un couteau de chef lourd à travers la croix à l'arrière de la tête. Plongez les homards d'abord dans l'eau bouillante. Blanchiment pendant exactement 2 minutes, ce qui met les coquilles au rouge brillant et fait libérer la viande de la coquille proprement, mais laisse l'intérieur essentiellement brut. Transférer immédiatement dans un bain de glace. Une fois assez cool pour gérer, tordez les griffes et les pinces. À l'aide de cisailles de cuisine, couper le dessous de la coquille de la queue et retirer la viande de la queue crue en une seule pièce. Casser les griffes avec un craquelin de homard ou le dos d'un couteau lourd et extraire la viande de griffe en morceaux entiers. Si possible, gardez la viande pétrie reliée à la griffe. Pater toute la viande très sèche avec des serviettes en papier. Assaisonner légèrement avec du sel fin. Toute humidité sur la surface brisera le beurre monté lorsque vous ajoutez le homard.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont rouge brillant partout. La chair exposée où la coquille a été coupée est toujours gris-blanc translucide — non cuite. La viande s'éloigne proprement de la coquille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La coquille est encore partiellement vert foncé/brun. La viande est difficile à extraire sans déchirer.",
            "action": "Retournez à l'eau bouillante pendant 30 à 45 secondes de plus — la coque extérieure doit être réglée avant l'extraction."
          },
          {
            "state": "Perfect",
            "description": "La coquille est uniformément rouge vif. La viande de queue est translucide, la viande de knuckle commence à peine à devenir blanche aux bords. Il tire proprement de la coquille.",
            "action": "Bain de glace immédiatement — arrêter toute chaleur résiduelle. Extraire dans les 3 minutes."
          },
          {
            "state": "Overdone",
            "description": "La viande est blanche et opaque tout au long, commençant à contracter et ferme. Vous avez préparé le homard.",
            "action": "Encore utilisable — votre pas de pochage sera très bref (moins de 90 secondes) juste pour se réchauffer. Ne pas trop boire ou la viande sera caoutchouteuse."
          }
        ]
      },
      "feelCue": "La viande de queue extraite doit se sentir comme du tofu froid, dense, légèrement glissant, suffisamment ferme pour tenir la forme, donnant quand elle est pressée. Si elle est caoutchouteuse et printanière, elle a cuit trop loin dans le blanch."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsionner",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "beurre_monte",
      "instructions": "Dans une petite casserole profonde, laisser mijoter l'eau à feu moyen. Une fois mijoté, commencez à fouetter dans les cubes de beurre froid deux ou trois à la fois, en ajoutant chaque nouvel ajout seulement après que les cubes précédents ont presque entièrement émulsifié — le liquide dans la poêle devrait rester jaune crémeux et opaque, ne jamais se séparer dans une piscine grasse. Maintenir une température entre 82 et 88°C (180 et 190°F) – assez chaude pour faire fondre le beurre, refroidir suffisamment pour maintenir l'émulsion intacte. Utilisez un thermomètre à lecture instantanée. Ajoutez les girofles d'ail et d'estragon cassés pour infuser pendant que vous construisez l'émulsion. Le beurre fini doit être brillant, homogène et enrobé, en tenant une cuillère comme une sauce à la crème. Faire au moins 450 g de beurre pour assurer une profondeur suffisante dans la poêle pour submerger complètement la viande de homard. Gardez au chaud la chaleur la plus basse possible, ou une double chaudière.",
      "visualCue": {
        "primaryTarget": "Une émulsion épaisse, opaque et jaune pâle qui enveloppe l'arrière d'une cuillère. Doit ressembler à de l'hollandaise très fluide — crémeuse et brillante, pas grasse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide semble toujours aqueux avec du beurre fondu et flottant sur le dessus — pas encore émulsifié.",
            "action": "Battre plus fort et réduire légèrement la chaleur. Ajouter le beurre plus lentement, un cube à la fois."
          },
          {
            "state": "Perfect",
            "description": "Opaque, crémeux, or pâle. Enrober une cuillère et laisser un film incliné. Aucune réserve visible de graisse séparée.",
            "action": "Réduire au minimum la chaleur. Ajouter les aromatiques et les maintenir à 82-88°C."
          },
          {
            "state": "Overdone",
            "description": "L'émulsion s'est cassée: une réserve de graisse jaune clair est posée sur un liquide blanc fin.",
            "action": "Retirer du feu. fouetter dans 1 c. à soupe d'eau froide. Ajouter deux cubes de beurre frais et fouetter vigoureusement, ce qui peut le sauver. Sinon, recommencer avec 2 c. à soupe d'eau et reconstruire à partir de zéro."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt propre dans le beurre monté – il devrait enrober votre doigt comme une lotion chaude et riche, ni graisseuse ni aquarelle. La température devrait se sentir chaude mais pas scalding, comme un bain très chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Pocher",
      "inputs": [
        "parcooked_lobster",
        "beurre_monte"
      ],
      "outputState": "poached_lobster",
      "instructions": "À l'aide d'un thermomètre, vérifier que le beurre monté est maintenu à 82-85°C (180-185°F). Abaissez doucement la queue du homard et griffez la viande dans le beurre, en veillant à ce qu'elle soit complètement submergée. Baste en continu avec une grande cuillère, en lançant le beurre chaud sur toutes les surfaces exposées. Pocher 5 à 7 minutes pour les queues, 3 à 4 minutes pour les griffes. L'objectif est la température interne de 60°C (140°F) mesurée à la partie la plus épaisse de la queue, ce qui produit de la viande soyeuse et juste sertie. Ne laissez pas la poêle dépasser 90°C ou les protéines se saisiront et la texture deviendra caoutchouteuse. Retirer du feu et laisser reposer le beurre pendant 1 minute. Soulever avec une cuillère à fente. Pressez quelques gouttes de jus de citron dans le reste du beurre monté, fouettez brièvement et faites-le cuire sur le homard plaqué comme sauce. Terminer avec une pincée de fleur de sel et de feuilles d'estragon frais.",
      "visualCue": {
        "primaryTarget": "La viande de queue est uniformément blanc opaque avec un éclat perlé, ferme mais non contracté. La surface scintille avec une couche d'émulsion de beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de la queue semble encore gris translucide lorsqu'il est pressé ou vérifié par un thermomètre dont la température est inférieure à 55°C.",
            "action": "Retourner au beurre 2 minutes de plus. Vérifiez encore la température."
          },
          {
            "state": "Perfect",
            "description": "La viande est entièrement opaque, blanc brillant, avec une résistance légèrement printanière lorsqu'elle est pressée. Température interne 58-62°C. La surface est brillante avec du beurre.",
            "action": "Retirer immédiatement, assietter, et la sauce à la cuillère. Servir dans les 90 secondes."
          },
          {
            "state": "Overdone",
            "description": "La viande s'est resserrée sensiblement, s'éloignant de sa forme originale. Texture en cas de pression est caoutchouteux et dense. Température interne supérieure à 68°C.",
            "action": "Servir immédiatement — le maintien ultérieur ne fera qu'aggraver la texture. Augmenter le volume de sauce pour compenser la sécheresse."
          }
        ]
      },
      "feelCue": "Une queue parfaite de homard braqué au beurre donne à la pression douce comme une crème ferme, la résistance qui laisse place en douceur et ressort à mi-chemin. La cuisine sent l'océan plié en crème chaude, avec l'estragon filant à travers comme un ruban vert."
    }
  ]
};
