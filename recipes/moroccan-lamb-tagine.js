export default {
  "repoId": "master_moroccan_moroccan_lamb_tagine_001",
  "parentRepoId": null,
  "slug": "moroccan-lamb-tagine",
  "author": "ForkRecipe Kitchen",
  "title": "Tagine d'agneau marocain",
  "description": "L'épaule d'agneau braisée basse et lente dans un vase d'argile au safran, au gingembre, au citron conservé et aux abricots séchés jusqu'à ce que la viande se rende complètement — sucrée et salée et aromatique tout à la fois, l'odeur même d'une médina de Marrakech au crépuscule.",
  "cuisine": "Maroc",
  "culture": "Maroc",
  "category": "proteins",
  "tags": [
    "Maroc",
    "agneau",
    "ragoût",
    "épicé",
    "Fruits secs"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hrs 30 min",
  "ratioSystem": "parts",
  "stars": 2940,
  "forks": 231,
  "contributors": 30,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-05",
  "updatedAt": "2025-12-18",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau, désossée, coupée en morceaux de 5 cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule de chèvre",
        "mandrin de boeuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, râpé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Ras el hanout mélange d'épices",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "mélange égal de cumin, coriandre, curcuma, gingembre, cannelle, paprika"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gingembre moulu",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais, 3x quantité, râpé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Fils de safran (à 2 c. à soupe d'eau chaude)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée curcuma + pincée fumée paprika"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Abricots séchés, coupés en deux",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "pruneaux piquées",
        "raisins dorés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Citron conservé (rincer seulement, rincé et tranché)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "2 c. à thé zeste de citron frais + 1 c. à thé sel"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'argan pour une saveur plus authentique"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks de poulet ou d'agneau",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "eau avec un os d'agneau"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Coriandres fraîches et amandes grillées",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "agneau mariné",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "marinated_lamb",
      "instructions": "Dans un grand bol, jeter les morceaux d'agneau avec l'oignon râpé, le ras el hanout, le gingembre moulu et l'eau de safran fleuri. Mélanger soigneusement pour enrober chaque surface. L'oignon commencera à se décomposer du sel dans les épices et à enrober l'agneau dans une pâte parfumée légèrement humide. Couvrir et mariner pendant au moins 30 minutes à température ambiante ou jusqu'à 24 heures au réfrigérateur. Plus la marinade est longue, plus l'épice pénètre dans la viande.",
      "visualCue": {
        "primaryTarget": "Pièces d'agneau uniformément enduites dans une pâte d'or-orange profonde. Le safran a teint l'oignon et les épices d'un jaune chaud uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange d'épices est assis sur la surface de la viande dans des touffes sèches. Le liquide d'oignon n'a pas encore dissous et distribué les épices.",
            "action": "Jetez plus vigoureusement et laissez reposer encore 15 minutes. L'oignon doit se décomposer légèrement pour servir de véhicule aux épices."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce est enduite d'une pâte orangée et uniforme. La couleur du safran est uniformément répartie, aucune épice sèche n'est visible.",
            "action": "Allez au brunissement."
          },
          {
            "state": "Overdone",
            "description": "L'agneau a mariné trop longtemps sans réfrigération — l'oignon a commencé à fermenter légèrement, donnant une odeur aigre ou déodorante.",
            "action": "Jeter et recommencer. La marination non réfrigérée au-delà de 2 heures dans des conditions chaudes est un risque pour la sécurité alimentaire."
          }
        ]
      },
      "feelCue": "L'agneau mariné devrait se sentir collant et collant au toucher — le revêtement d'oignon d'épices s'accroche à vos doigts lorsque vous prenez une pièce, un signe qu'il adhérera à travers la couture."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "marinated_lamb",
        "ing_08"
      ],
      "outputState": "seared_lamb",
      "instructions": "Chauffer l'huile d'olive dans une base de tagine ou un four hollandais lourd à feu moyen-vif jusqu'à ce qu'elle mijote. Retirez l'agneau mariné du bol, en grattant l'excédent de pâte d'oignon (enlevez-le – il va dans la suite). Casser l'agneau en lots, sans fouler, pendant 3 à 4 minutes de chaque côté jusqu'à ce qu'il soit profondément doré. Le revêtement d'épices caramélise et forme une croûte d'acajou aromatique. Ne précipitez pas cette étape — le brunissement approprié fournit la complexité structurelle sur laquelle s'appuie le long braise.",
      "visualCue": {
        "primaryTarget": "Croûte acajou-brun profonde sur toutes les faces de mer, avec le revêtement d'épices caramélisées à des taches presque noires et un riche fond aromatique se développant sur le fond de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est grise et libère du liquide dans la poêle plutôt que de brunir. Le revêtement d'épices semble terne et cuit à la vapeur plutôt que caramélisé.",
            "action": "Augmenter la chaleur et réduire la quantité de viande dans la poêle. Les vapeurs de viande en foule — il faut de l'espace sec autour de chaque morceau pour brunir."
          },
          {
            "state": "Perfect",
            "description": "Profondément doré sur les faces de mer, avec une croûte d'acajou. Le fond de la poêle a un riche fond sombre. La cuisine sent les épices grillées dans la graisse.",
            "action": "Retirer dans une assiette et ajouter la pâte réservée à l'oignon dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "La croûte est noire et acride. Le fond de la poêle est sombre et commence à fumer.",
            "action": "Enlevez l'agneau. Déglacer la poêle avec un jet de bouillon et réduire avant d'ajouter la pâte d'oignon — le fond est précieux mais les morceaux brûlés doivent être grattés soigneusement."
          }
        ]
      },
      "feelCue": "Un morceau d'agneau bien scellé devrait résister quand vous essayez de le déplacer dans la première minute — il est de construire sa croûte. Lorsqu'il sort proprement seul, il est prêt à basculer."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "seared_lamb",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "braised_tagine",
      "instructions": "Ajouter la pâte réservée à l'oignon dans la poêle et cuire à feu moyen pendant 5 minutes jusqu'à ramollir. Retournez l'agneau et les jus de repos. Ajouter les abricots, la croûte de citron conservée et le bouillon — le liquide devrait atteindre la moitié des morceaux d'agneau, et non les submerger. Porter à mijoter, puis bien couvrir (utiliser la feuille sous le couvercle pour un meilleur joint) et réduire la chaleur au plus bas ébullition possible. Faire cuire pendant 1 heure 45 minutes à 2 heures, vérifier toutes les 30 minutes et tourner la viande une fois, jusqu'à ce que l'agneau tombe de l'os et la sauce a réduit à une consistance richement aromatisée, légèrement sirupeuse.",
      "visualCue": {
        "primaryTarget": "L'agneau qui tombe avec une cuillère, entouré d'une sauce très colorée et brillante avec des abricots visibles gonflés à la translucidité et la croûte de citron adoucie à la soie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau résiste lorsqu'il est pressé — vous pouvez sentir les fibres musculaires encore intactes. La sauce est fine et aqueuse. Les abricots ont l'air secs et non écroulés.",
            "action": "Continuez à faire des larmes. Le tissu conjonctif de l'épaule d'agneau a besoin de temps pour se convertir en gélatine — il n'y a pas de raccourci."
          },
          {
            "state": "Perfect",
            "description": "L'agneau s'effondre lorsqu'il est pressé par deux doigts. La sauce est épaisse et brillante, enrobant une cuillère. Les abricots sont plumés et légèrement caramélisés aux bords. Le citron conservé est presque dissous.",
            "action": "Retirer le couvercle, augmenter le feu à moyen et réduire la sauce d'un tiers si elle semble encore mince."
          },
          {
            "state": "Overdone",
            "description": "L'agneau s'est complètement désintégré — il est maintenant des lambeaux à cordes dans la sauce plutôt que des morceaux identifiables. La sauce est très douce et épaisse.",
            "action": "Procéder — le tagine sera saucy plutôt que structurel, ce qui est rustique mais toujours délicieux. Servir sur le couscous."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'agneau avec votre bout de doigt à travers le couvercle du pot — si elle donne immédiatement comme du beurre, le braise est fait. Si elle repousse même légèrement, donnez-lui encore 20 minutes."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et garnir",
      "inputs": [
        "braised_tagine",
        "ing_10"
      ],
      "outputState": "finished_tagine",
      "instructions": "Goûtez la sauce et ajustez - elle doit être complexe, sucrée-savoureuse, avec le citron conservé offrant une luminosité de fond. Si trop sucré, ajoutez un peu de citron frais. Si elle est trop fine, laisser mijoter sur le milieu pendant 5-10 minutes avec le couvercle. Éparpiller la coriandre fraîche et les éclats d'amande grillés sur la surface juste avant de servir. Servir dans le four à tagner ou au hollandais directement à la table avec du couscous, du pain plat et de l'harissa sur le côté.",
      "visualCue": {
        "primaryTarget": "Une sauce riche en ambre-or profonde parsemée d'abricots de plomb et adoucie de citron conservé, d'agneau submergé et donnant, couronné de coriandre verte vive et d'amandes grillées pâles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et pâle — la saveur est plate et l'agneau semble pâle où il est assis dans le liquide.",
            "action": "Laisser mijoter à découvert pendant encore 10 minutes pour concentrer la sauce et approfondir la couleur."
          },
          {
            "state": "Perfect",
            "description": "Gloire, sauce aromatisée. Les morceaux d'agneau sont intacts mais s'effondrent. L'équilibre sucré-sour-savoureux est immédiatement apparent. Garnir ajouté juste avant le service.",
            "action": "Apportez tout le vaisseau à la table et servez le style familial."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte épaisse et très sucrée. Les abricots se dissolvent et le citron conservé est invisible.",
            "action": "Ajoutez un peu de bouillon chaud pour desserrer et éclaircir avec du jus de citron frais."
          }
        ]
      },
      "feelCue": "La sauce finie devrait enrober une cuillère d'un film brillant et légèrement sirupeux. Exécutez votre doigt sur la cuillère en arrière et la ligne tient pendant 3 secondes avant que la sauce ne bouge pour la remplir."
    }
  ]
};
