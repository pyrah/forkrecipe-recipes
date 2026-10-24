export default {
  "repoId": "master_west_african_mafe_groundnut_stew_001",
  "parentRepoId": null,
  "slug": "mafe-groundnut-stew",
  "author": "ForkRecipe Kitchen",
  "title": "Mafé (Pâtisserie d'arachides d'Afrique de l'Ouest)",
  "description": "Un ragoût construit sur une base de beurre naturel d'arachide — non pas le genre sucré, industriel, mais la pâte d'arachide crue, huileuse, légèrement amère qui bulle dans quelque chose de noisette et profonde quand il rencontre le boeuf, la tomate, et la chaleur lente d'un pot lourd. C'est le genre de ragoût qui améliore chaque heure qu'il est assis, et la cuisine sent comme si elle cuisinait depuis le matin, même si vous avez commencé à midi.",
  "cuisine": "Afrique de l'Ouest (Sénégalais)",
  "culture": "Sénégal/Afrique de l ' Ouest",
  "category": "proteins",
  "tags": [
    "boeuf",
    "arachide",
    "ragoût",
    "Afrique de l ' Ouest",
    "sénégales",
    "Sans gluten",
    "arachide"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 1123,
  "forks": 67,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Boeuf (pouce ou épaule), cube 4cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule d'agneau",
        "cuisses de poulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Beurre naturel d'arachide (non sucré)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte d'arachide crue"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Tomates entières en conserve, broyées à la main",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates fraîches, blanchies et pelées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, coupé en dés",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Gingembre frais, râpé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Pommes de terre douces, cubes 3cm",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "pomme de terre blanche",
        "manioc"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Flacons de chile séchés ou bonnet de scotch",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Viande bovine ou végétale",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "seared_beef",
      "instructions": "Les cubes de boeuf sont complètement secs avec des serviettes en papier — l'humidité est l'ennemi d'une bonne couture. Assaisonner agressivement avec du sel. Chauffer une casserole lourde ou un four hollandais à feu vif jusqu'à ce qu'une goutte d'eau s'évapore au contact. Ajouter l'huile et saisir le bœuf en une seule couche, sans encombrer, pendant 3 à 4 minutes de chaque côté jusqu'à ce qu'il soit profondément doré sur toutes les surfaces. Travail en lots. Le but est une croûte d'acajou foncée sur tous les visages, pas de vapeur grise.",
      "visualCue": {
        "primaryTarget": "Croûte acajou-brun profonde de tous les côtés du bœuf. Pas de vapeur, seulement des étourdissements.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf libère l'humidité et la vapeur. La casserole est pleine d'eau. La viande est grise.",
            "action": "Enlevez la moitié de la viande. Le surpeuplement provoque la vapeur. Augmenter la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Des étourdissements agressifs. Chaque face du boeuf est une acajou profonde avec une croûte caramélisée. La poêle a développé un fond sombre.",
            "action": "Retirer le bœuf et déglacer la poêle avec un jet de bouillon."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf est noir et le fond est en train d'être brûlé.",
            "action": "Déglacer immédiatement avec de l'eau, grattage. Ajouter moins d'huile et moins de chaleur pour le prochain lot."
          }
        ]
      },
      "feelCue": "Lorsqu'un cube de boeuf se libère naturellement de la poêle sans s'y coller, la croûte de Maillard s'est complètement formée — libération forcée avant ce point déchire la croûte et gaspille la saveur."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Dans le même pot avec le fond de bœuf, ajouter l'oignon en dés et cuire à feu moyen, grattant constamment le fond, pendant 8-10 minutes jusqu'à ce que profondément doré et translucide. Ajouter l'ail et le gingembre et cuire encore 2 minutes, en remuant jusqu'à parfumer. L'oignon doit être bien au-delà du translucide, s'approchant de l'ambre doré, avant que les liquides ne soient ajoutés. Cette caramélisation fournit le sous-ton sucré et salé qui équilibre le beurre d'arachide.",
      "visualCue": {
        "primaryTarget": "L'oignon est doré-ambre et translucide, doux partout. L'ail est parfumé mais non bruni.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et croquant. Le Fonds n'a pas été entièrement incorporé.",
            "action": "Continuer la cuisson avec une cuillère à soupe d'eau pour aider à soulever le fond. Ne précipitez pas cette étape."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est doux, ambre et confiture. Le fond du bœuf est entièrement incorporé dans l'oignon. Le pot sent l'allium caramélisé sucré et l'épice.",
            "action": "Ajouter les tomates et le beurre d'arachide."
          },
          {
            "state": "Overdone",
            "description": "L'ail est bruni et sent amer.",
            "action": "Ajouter immédiatement les tomates pour arrêter la cuisson. La légère amertume sera absorbée dans le ragoût."
          }
        ]
      },
      "feelCue": "Lorsque l'oignon est prêt, il doit se sentir complètement doux lorsqu'il est pressé contre le côté de la casserole avec une cuillère — pas de croûte, pas de résistance, il suffit de céder, douceur."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "seared_beef",
        "softened_aromatics",
        "ing_02",
        "ing_03",
        "ing_09",
        "ing_10"
      ],
      "outputState": "simmering_stew",
      "instructions": "Ajouter les tomates concassées aux aromatiques et cuire 5 minutes en remuant, jusqu'à ce que les tomates s'assombrissent et que l'huile se sépare aux bords — c'est du pinçage, même si les Français ne revendiquent pas ce ragoût. Ajouter le beurre d'arachide et mélanger jusqu'à dissolution complète dans la base de tomate. Dans un premier temps, la pâte résistera au mélange — pressez - la contre la paroi du pot chaud et remuez - la jusqu'à ce qu'elle soit lisse. Retournez le boeuf mariné, ajoutez le stock et le piment, portez à ébullition, puis réduisez à la mijotée la plus basse. Cuire partiellement couvert pendant 60 minutes.",
      "visualCue": {
        "primaryTarget": "Un ragoût épais et brun-orange qui coule lentement. Le beurre de cacahuètes est entièrement homogénéisé — pas de léchers gras ou de morceaux blancs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre d'arachide est encore visible en morceaux blancs. Le stock est mince et aqueux. Le boeuf est toujours ferme.",
            "action": "Continuez à mijoter. Mélanger fréquemment pour décomposer le beurre d'arachide."
          },
          {
            "state": "Perfect",
            "description": "Le ragoût est épais, brillant et brun orangé profond. Le boeuf produit lorsqu'il est pressé avec une cuillère. L'huile des cacahuètes est levée et peut être écrémée si désiré.",
            "action": "Ajouter la patate douce et poursuivre."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût a été réduit à une pâte très épaisse et commence à brûler au fond.",
            "action": "Ajouter le bouillon chaud ou l'eau et remuer du fond. Réduire significativement la chaleur."
          }
        ]
      },
      "feelCue": "Lorsque le beurre d'arachide est complètement dissous dans le ragoût, la sauce doit se sentir uniformément soyeuse sur la langue — que la douceur vous indique l'émulsion a tenu et les huiles d'arachide sont pleinement incorporées."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "simmering_stew",
        "ing_07"
      ],
      "outputState": "finished_mafe",
      "instructions": "Ajouter la patate douce cube dans le ragoût. Ajouter à la sauce aux cacahuètes. Continuer à mijoter à découvert pendant 25 à 30 minutes de plus, jusqu'à ce que la patate douce soit entièrement tendre et commence à se décomposer aux bords — ces bords brisés épaississent le ragoût plus loin. Goûtez agressivement : le mafé a besoin de sel significatif. Ajuster avec du sel et du piment. Servir sur du riz blanc ou avec du pain thiéboudienne pour tremper.",
      "visualCue": {
        "primaryTarget": "La patate douce est tendre et se brise aux bords. Le ragoût est épais et brillant. Une cuillère traînée à travers laisse un canal clair pendant 2 secondes avant de fermer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La patate douce résiste à un couteau. Les centres sont encore difficiles. Le ragoût est plus mince que désiré.",
            "action": "Continuer à mijoter à découvert pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "La patate douce est en pleine croissance et les bords se sont légèrement dissous dans le ragoût, l'épaississant davantage. La sauce est brun orangé profond et brillant.",
            "action": "Servir immédiatement sur le riz."
          },
          {
            "state": "Overdone",
            "description": "La patate douce est entièrement dissoute. Le ragoût est très épais et collant.",
            "action": "Ajouter le bouillon chaud ou l'eau pour se détendre à une consistance versable."
          }
        ]
      },
      "feelCue": "Le mafé fini doit être lourd sur la poche — ce poids des protéines d'arachide et de la fécule de patate douce dissoute est ce qui distingue un ragoût d'arachide approprié d'une soupe fine."
    }
  ]
};
