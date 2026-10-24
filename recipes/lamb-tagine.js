export default {
  "repoId": "master_moroccan_lambtagine_001",
  "parentRepoId": null,
  "slug": "lamb-tagine",
  "author": "ForkRecipe Kitchen",
  "title": "Tagine d'agneau marocain avec citron et olives conservés",
  "description": "L'épaule d'agneau ossée braisée pendant deux heures dans un nuage parfumé de ras el hanout, de safran et de gingembre jusqu'à ce qu'elle tombe à la main, puis finie avec la salinité aiguë du citron conservé et la saumure d'olives vertes craquelées.",
  "cuisine": "Maroc",
  "culture": "Marrakchi",
  "category": "proteins",
  "tags": [
    "agneau",
    "Maroc",
    "Tagine",
    "braisés",
    "safran",
    "conserve de citron",
    "olives",
    "Marrakech"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Epaule d'agneau désossée, coupée en morceaux de 5 cm",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "cou d'agneau osseux",
        "épaule de chèvre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, râpé grossièrement",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Giroves d'ail hachées à pâte",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Le Président",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Gingembre moulu",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre frais, râpé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Ronde de citron conservée, épilée, tranchée finement",
      "ratioValue": 1,
      "defaultUnit": "quarter",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Olives vertes craquées (picholine ou Castelvetrano)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "olives beldi marocaines"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Coriandre fraîche, grossièrement déchirée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement déchiré",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "coriandre fraîche"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'argan pour servir"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Liquid",
      "name": "Eau ou bouillon de poulet léger",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_07",
        "ing_13"
      ],
      "outputState": "saffron_water",
      "instructions": "Crumblez les fils de safran entre vos doigts directement dans un petit bol. Verser 3 cuillères à soupe (45ml) d'eau juste bouillie sur elles et remuer. Laisser raide pendant au moins 15 minutes — le liquide tournera un or ambre vif et sentira floral et miellé. Cette étape de floraison extrait la picrocrocine et les composés safranaux qui donnent au safran sa couleur et sa fragrance, qui se dissolvent beaucoup plus complètement dans l'eau chaude que dans l'huile ou le liquide froid. Réserver le liquide restant comme eau de cuisson.",
      "visualCue": {
        "primaryTarget": "Après 15 minutes : un liquide ambré-or vif avec un parfum très floral, semblable au foin. Les fils sont allégés à un jaune orange pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 5 minutes : le liquide est encore jaune pâle, à peine teinté. L'extraction de la couleur et de l'arôme est minimale.",
            "action": "Attendez 15 minutes. La chaleur accélère la libération — si l'eau a trop refroidi, ajoutez une éclaboussure d'eau bouillante."
          },
          {
            "state": "Perfect",
            "description": "Vivide ambre-or, profondément parfumée. Les fils sont épuisés et pâles. Une goutte sur le papier blanc montre une riche tache dorée.",
            "action": "Réserver et commencer à brunir l'agneau."
          },
          {
            "state": "Overdone",
            "description": "Impossible de surbrilonner le safran dans l'eau — il ne peut être surexposé à la chaleur élevée pendant la cuisson, ce qui endommage l'arôme.",
            "action": "Continuez. L'eau de safran peut descendre jusqu'à une heure sans inconvénient."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans l'eau de safran et frottez - il doit tacher votre peau immédiatement et durablement, un orange doré chaud qui sent floral et faiblement médicinal."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "ing_01",
        "ing_12",
        "ing_14"
      ],
      "outputState": "browned_lamb",
      "instructions": "Chauffer l'huile d'olive dans une large base de tagine ou une casserole lourde à feu moyen-vif. Assaisonner les morceaux d'agneau avec du sel. Travailler en deux ou trois lots — ne jamais fouler la poêle — saisir l'agneau sur tous les côtés coupés jusqu'à ce que profondément acajou-brun. Chaque pièce a besoin de 3-4 minutes non perturbé par côté. Résistez à l'envie de déplacer la viande : elle se libérera lorsque la croûte se sera formée. Ce brunissement n'est pas une question de cuisson de l'agneau, c'est une question de construction d'un fond caramélisé profond qui devient le fondement du braise entier.",
      "visualCue": {
        "primaryTarget": "Morceaux d'agneau avec une croûte acajou-brun profonde sur toutes les surfaces coupées. Un amour doré sur le fond de la poêle — pas noir, pas pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est gris et cuit à la vapeur plutôt que bruni. Surface pâle, pas de croûte, la viande collée et déchirée lorsqu'elle est déplacée.",
            "action": "La casserole était bondée ou pas assez chaude. Sécher les morceaux d'agneau et les saisir en petits lots à feu plus élevé."
          },
          {
            "state": "Perfect",
            "description": "Riche, croûte d'acajou foncée sur toutes les surfaces. Un parfum doré sur le fond du pot. La cuisine sent la viande caramélisée et l'huile d'olive.",
            "action": "Retirer les morceaux brunis dans une assiette et saisir les lots restants."
          },
          {
            "state": "Overdone",
            "description": "L'agneau est noirci à l'extérieur et le fond est brun foncé et acride-smelling.",
            "action": "Réduire immédiatement la chaleur. Déglacer la poêle avec un jet d'eau et jeter le liquide le plus sombre avant de construire le braise."
          }
        ]
      },
      "feelCue": "Soulevez un morceau d'agneau bruni — la croûte doit être ferme et sèche, non molle et glissante. Une couche d'acajou profonde se sent légèrement rugueuse sous les doigts, comme du pain grillé."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "browned_lamb",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "saffron_water"
      ],
      "outputState": "braised_lamb",
      "instructions": "Dans la même casserole, ajouter l'oignon râpé et la pâte d'ail à feu moyen. Cuire en remuant pendant 5 minutes jusqu'à ce que l'oignon se ramollisse et que la majeure partie de son humidité s'évapore. Ajouter le ras el hanout, le gingembre et le curcuma; remuer pendant 1 minute jusqu'à ce que les épices soient parfumées et enrober l'oignon. Retournez tous les agneaux brunis dans le pot, en les baissant étroitement. Verser l'eau de safran et le liquide restant. Porter à mijoter doucement, couvrir soigneusement et cuire sur le feu le plus bas possible pendant 2 heures. Vérifiez et remuez toutes les 30 minutes, en veillant à ce que le fond ne brûle pas.",
      "visualCue": {
        "primaryTarget": "Après 2 heures : une sauce rouge-ambre profonde s'accroche à l'agneau tendre. La sauce a diminué d'environ un tiers et semble brillante. L'agneau doit se déposer aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1 heure: l'agneau est encore ferme et résiste à un couteau. La sauce est fine et aqueuse. La viande s'éloigne de l'os mais les fibres sont encore dures.",
            "action": "Récupérer et continuer à faire du louage. L'épaule d'agneau a besoin de 2 heures complètes — dans un vrai tagine sur le bas charbon, encore plus longtemps."
          },
          {
            "state": "Perfect",
            "description": "L'agneau est profondément tendre — il donne à une cuillère et l'os tire facilement. La sauce est brillante et enduite, d'or-ambre profond du safran et du curcuma. Des odeurs de safran, d'épices chaudes et de viande caramélisée.",
            "action": "Découvrez le pot et ajoutez le citron et les olives conservés pour la réduction finale."
          },
          {
            "state": "Overdone",
            "description": "L'agneau est complètement dissous dans la sauce. Le liquide est réduit à une pâte épaisse. L'odeur est légèrement brûlée.",
            "action": "Ajouter l'eau chaude pour se détendre, réduire la chaleur au minimum absolu, et remuer doucement pour éviter d'autres collages."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'agneau braisé avec une cuillère après 90 minutes — il devrait donner complètement, se sentir doux comme le Brie mûr plutôt que la résistance printanière de la viande sous-cuite."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "braised_lamb",
        "ing_08",
        "ing_09"
      ],
      "outputState": "reduced_tagine",
      "instructions": "Ajouter la croûte de citron et les olives vertes craquelées. Mélanger doucement à distribuer – le citron et les olives sont fragiles. Découvrez la casserole et augmentez légèrement à mijoter. Cuire encore 15 à 20 minutes, en remuant occasionnellement, jusqu'à ce que la sauce ait réduit à une consistance de revêtement brillante. Le citron conservé moellera et parfumera la sauce avec une note d'agrumes floral-sel complexe. Bouche: Si trop salé (les olives et le citron ajoutent du sodium significatif), n'ajoutez pas plus de sel; ajoutez plutôt une pincée de sucre ou une éclaboussure d'eau.",
      "visualCue": {
        "primaryTarget": "Une sauce lustrée, légèrement réduite avec des taches visibles de citron pâle conservé et des ronds d'olive. La sauce doit enrober l'arrière d'une cuillère et tomber dans des gouttes épaisses, pas courir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse. Le citron et les olives conservés sont distincts et séparés de la sauce — pas encore intégrés.",
            "action": "Continuer à réduire à découvert. Mélanger doucement et goûter — le citron a besoin d'au moins 10 minutes pour adoucir et parfumer le braise."
          },
          {
            "state": "Perfect",
            "description": "Sauce brillante, enrobée de l'arôme de citron conservé tissée. Les olives sont ramollies et légèrement ramollies. Le tagine sent le safran, le citron et la saumure d'olive.",
            "action": "Terminer avec des herbes fraîches."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte épaisse et salée et le citron est devenu très amer par sur-réduction.",
            "action": "Ajouter l'eau chaude et remuer vigoureusement. Goûtez à l'amertume avant d'ajouter plus de citron."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère dans la sauce — elle devrait laisser une piste propre qui tient pendant 2-3 secondes avant que la sauce se referme. Si elle fonctionne immédiatement, réduisez encore."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "reduced_tagine",
        "ing_10",
        "ing_11"
      ],
      "outputState": "lamb_tagine",
      "instructions": "Retirer du feu. Goûtez au sel, à l'acide et à la profondeur — ajustez avec une dernière pincée de sel ou une goutte de jus de citron si nécessaire. Dispersez généreusement la coriandre déchirée et le persil à feuilles plates sur la surface. Servir directement de la casserole à la table. Mangez avec du pain croustillant ou du couscous, en utilisant le pain pour croquer — jamais une fourchette. L'agneau devrait tomber dans la sauce quand une cuillère la touche.",
      "visualCue": {
        "primaryTarget": "Un paysage de sauce ambre, d'agneau tendre, de citron pâle et d'olives vertes sous une généreuse dispersion d'herbes vertes vives.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes ajoutées alors que le tagine est encore à ébullition dure — elles se sont flétries dans des chiffons kakis. La fraîcheur a disparu.",
            "action": "Ajouter les herbes seulement de la chaleur. Si vous avez déjà flétri, ajoutez une poignée fraîche juste avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Coriandre et persil vert vif contre la sauce ambre profonde. Les herbes semblent fraîchement déchirées. Le parfum lorsque vous vous penchez sur le pot combine le safran, le citron conservé, l'herbe et l'agneau.",
            "action": "Servir immédiatement du pot."
          },
          {
            "state": "Overdone",
            "description": "Trop d'herbes ont été ajoutées — le tagine sent plus comme tabouleh qu'un braise.",
            "action": "Équilibre en arrachant un peu d'herbe sur le dessus avant de servir. Le plat doit sentir l'agneau d'abord, les herbes ensuite."
          }
        ]
      },
      "feelCue": "Couper un morceau d'agneau avec une cuillère — il ne devrait pas offrir de résistance et revenir dans la sauce sous son propre poids. La sauce sur la cuillère devrait enrober vos lèvres légèrement, comme une veloutine lâche."
    }
  ]
};
