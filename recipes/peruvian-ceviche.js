export default {
  "repoId": "master_peruvian_peruvianceviche_001",
  "parentRepoId": null,
  "slug": "peruvian-ceviche",
  "author": "ForkRecipe Kitchen",
  "title": "Ceviche péruvienne avec Leche de Tigre",
  "description": "Le bar de mer fin est guéri en punissant le jus de lime et ají amarillo jusqu'à ce que la chair devienne blanche et tendre, servie dans son propre lait de tigre laiteux que l'on s'attend à boire à la fin.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "périuvien",
    "Ceviche",
    "Chaux",
    "cru",
    "agrumes"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet de bar de mer (corvina), grade sashimi",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "flétan",
        "Flotteur",
        "poisson blanc ferme"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de chaux frais (environ 16 chaux)",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon rouge, finement coupé en demi-lunes",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Ají amarillo (ou 2 piments frais)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de rocot",
        "habanero, ensemencé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousse d'ail, râpée",
      "ratioValue": 1,
      "defaultUnit": "clove",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Coriandre fraîche, feuilles et tiges minces",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Amandes de maïs Choclo (ou maïs sur la corbe)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "grains de maïs frais"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Camote (pomme de terre sucrée), cuite et tranchée",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "patates douces régulières"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Gingembre frais, 1cm pièce, râpé",
      "ratioValue": 5,
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
      "outputState": "sliced_fish",
      "instructions": "S'assurer que le poisson est aussi froid que possible — geler partiellement pendant 20 minutes si nécessaire pour les coupes plus propres. Couper en cubes de 2 cm contre le grain de la chair. L'uniformité est importante : les morceaux irréguliers guérissent à des taux différents, laissant certains sur-currés et crayeux tandis que d'autres sont encore crus. Déposer immédiatement dans un bol réfrigéré en céramique ou en verre.",
      "visualCue": {
        "primaryTarget": "Des cubes translucides, scintillants de taille uniforme, bien crus, avec une odeur d'océan propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les découpes sont égratignées, déchirantes plutôt que propres; le poisson est trop chaud.",
            "action": "Réfrigérer le poisson 15 minutes avant de continuer à couper."
          },
          {
            "state": "Perfect",
            "description": "Nettoyer les cubes de 2cm avec des bords définis, scintillement et translucide. Pas de déchirements. Il fait froid au toucher.",
            "action": "Passez immédiatement au remède — les poissons chauds surgissent inégalement."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été manipulé de manière excessive et commence à se réchauffer; les bords montrent un léger adoucissement.",
            "action": "Réfrigérer 10 minutes avant d'ajouter la chaux."
          }
        ]
      },
      "feelCue": "Un morceau de bar cru bien refroidi doit se sentir ferme et revenir en arrière lorsqu'il est pressé — comme un muscle réfrigéré, pas un gel mou."
    },
    {
      "nodeId": "step_2",
      "action": "Cure",
      "inputs": [
        "sliced_fish",
        "ing_02",
        "ing_05",
        "ing_10",
        "ing_06",
        "ing_04"
      ],
      "outputState": "ceviche_mixture",
      "instructions": "Assaisonner les cubes de poisson de sel et mélanger pour enrober. Ajouter l'ail, le gingembre et la pâte ají amarillo. Verser le jus de lime sur tout — il devrait y en avoir assez pour submerger complètement le poisson. Jetez doucement. Le traitement acide commence immédiatement : pour le ceviche péruvien, le temps de traitement idéal n'est que de 3 à 5 minutes pour un intérieur tendre et à peine cuit. Goûtez à 3 minutes — le poisson doit être blanc à l'extérieur mais encore légèrement translucide au centre.",
      "visualCue": {
        "primaryTarget": "Les cubes de poisson sont blancs à l'extérieur avec un centre peu translucide et nacré. Leche de tigre (liquide curant) est devenu laiteux-opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 minutes : extérieur encore translucide ; le poisson a un goût cru. Leche de tigre est toujours clair.",
            "action": "Pure encore 1-2 minutes, dégustation toutes les 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "À 3-5 minutes: extérieur blanc avec un centre juste-translucide. Leche de tigre est nuageux et blanc des protéines de poisson. Le poisson est tendre mais ferme.",
            "action": "Ajouter l'oignon et la coriandre et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 8 minutes: le poisson est entièrement blanc tout au long, commençant à serrer et à devenir caoutchouteux. Leche de tigre est très laiteux.",
            "action": "Servir le plus rapidement possible — la texture sera plus ferme mais la saveur reste excellente."
          }
        ]
      },
      "feelCue": "Pressez doucement un cube guéri – il devrait se sentir comme une crème ferme : une certaine résistance à la surface, une douceur qui donne à l'intérieur, jamais printanière ou caoutchouteuse."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "ceviche_mixture",
        "ing_03",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_peruvian_ceviche",
      "instructions": "Ajouter l'oignon rouge tranché et la moitié de la coriandre au ceviche et jeter une fois. Goûtez et ajustez le sel et ají amarillo. Servir immédiatement dans des bols réfrigérés — verser la pleine leche de tigre sur et autour du poisson. Disposer le maïs et la camote en tranches sur le côté. Dispersez la coriandre restante. La leche de tigre n'est pas un sous-produit — c'est tout le point. Servir avec une cuillère.",
      "visualCue": {
        "primaryTarget": "Poisson blanc-courbé flottant dans une leche de tigre blanc-jaune opaque nuageuse avec oignon écarlate et coriandre vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Leche de tigre est encore clair ; le plat a l'air sous-vêtus et étoilé.",
            "action": "Ajouter plus de jus de lime et guérir 1 minute de plus."
          },
          {
            "state": "Perfect",
            "description": "La leche de tigre lactée dans le bol, le poisson est blanc et tendre, l'oignon est croquant et magenta. Sensation agressive d'agrumes avec une finition thermique.",
            "action": "Servir immédiatement — ceviche n'attend pas."
          },
          {
            "state": "Overdone",
            "description": "L'oignon s'est flétri dans l'acide et a perdu sa croûte; tout le plat semble carbonisé.",
            "action": "Servir immédiatement quelle que soit sa saveur, même si la texture s'est adoucie."
          }
        ]
      },
      "feelCue": "Ceviche devrait vous frapper dans le nez avec la luminosité propre, presque pharmaceutique de la chaux fraîche avant une chaleur lente se construit à l'arrière de la gorge — si ce n'est pas, ajouter plus de chaux et plus ají."
    }
  ]
};
