export default {
  "repoId": "master_hungarian_goulash-paste_001",
  "parentRepoId": null,
  "slug": "goulash-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte goulash hongroise",
  "description": "Une pâte aromatique rouge brique construite sur du paprika hongrois doux, des oignons caramélisés et de la graisse de boeuf rendu — l'âme concentrée de goulasch qui peut être brassée en stock pour faire le ragoût, ou se répandre comme un condiment.",
  "cuisine": "Hongrois",
  "culture": "Hongrois",
  "category": "sauces",
  "tags": [
    "paprika",
    "boeuf",
    "Hongrois",
    "ragoût",
    "pâte"
  ],
  "difficulty": 3,
  "activeTime": "60 min",
  "totalTime": "75 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 2,
    "bitter": 2,
    "umami": 6,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Oignons jaunes, coupés en dés",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Suif de lard ou de bœuf (ou huile neutre)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Paprika hongrois doux",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika hongrois chaud ou paprika fumé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "cayenne (utiliser la moitié du montant)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gousses d'ail hachées",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "poivron vert, finement coupé en dés",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre de cubanelle"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
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
      "name": "Graines de carave, légèrement broyées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Viande bovine",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "deeply_caramelized_onions",
      "instructions": "Faire fondre le saindoux ou la graisse dans une grande poêle à fond lourd (une poêle en fonte est idéale) à feu moyen-doux. Ajouter tous les dés d'oignons avec une pincée généreuse de sel. Cuire en remuant toutes les 5-7 minutes, pendant 40-50 minutes au total. Les oignons passeront par étapes : translucide et translucide à 10 minutes, puis ramollissant et réduisant à 20 minutes, puis commençant à caraméliser et doré à 30 minutes. Vous les voulez à l'ambre d'or profond — pas brun foncé — quand le paprika entre. Ne précipitez pas cette étape ; augmenter la chaleur pour presser le processus provoque l'amertume.",
      "visualCue": {
        "primaryTarget": "Des oignons fortement dorés-ambres qui ont réduit à environ un cinquième de leur volume original, doux et confitureux, avec une odeur caramélisée douce et aucune netteté brute.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore dorés ou bronzés. Ils sentent doux mais pas encore profondément caramélisé.",
            "action": "Continuer la cuisson à feu moyen-doux pendant 15-20 minutes. La récompense de la saveur est à la dernière étape — ne vous arrêtez pas tôt."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, presque la couleur du thé fort. Volume réduit à un cinquième. Goûtez un: il doit être intensément sucré et salé, presque comme de la marmelade. La texture de Jammy.",
            "action": "Ajouter l'ail, le poivron et la carafe. Mélanger et cuire 3 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun foncé ou noir aux bords. L'odeur est amère et tranchante.",
            "action": "Enlevez les morceaux les plus sombres. Ajouter une touche de stock pour déglacer et refroidir légèrement la poêle avant d'ajouter le paprika."
          }
        ]
      },
      "feelCue": "Les oignons parfaitement caramélisés devraient s'effondrer jusqu'à un quasi-collé lorsqu'ils sont pressés à l'arrière d'une cuillère — pas de croûte, pas de structure. L'odeur est profondément sucrée et salée, comme la soupe à l'oignon à son meilleur."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "deeply_caramelized_onions",
        "ing_05",
        "ing_06",
        "ing_09"
      ],
      "outputState": "aromatic_base",
      "instructions": "Ajouter l'ail haché, le poivron vert en dés et les graines de carvi légèrement broyées aux oignons caramélisés. Incorporer et cuire 3-4 minutes à feu moyen jusqu'à ce que l'ail soit parfumé et que le poivron ait légèrement ramolli. L'ail ne doit pas brunir — garder le feu modéré. Ajouter la pâte de tomate, la remuer dans le mélange et la faire frire pendant 2 minutes jusqu'à ce qu'elle s'assombrisse en rouge brique et sente caramélisée.",
      "visualCue": {
        "primaryTarget": "L'ail s'est adouci et est parfumé (non bruni). Le poivron est légèrement adouci. La pâte de tomates est devenue rouge brique et sent le confiture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore vif et goûté. Le poivron est dur et croquant.",
            "action": "Cuire encore 2 minutes à feu moyen. L'ail cru dans une pâte aura un goût dur."
          },
          {
            "state": "Perfect",
            "description": "L'ail est parfumé et doux, pas doré. Le poivre est adouci. La pâte de tomates est rouge brique et confiture. Le mélange sent complexe et salé.",
            "action": "Retirer brièvement du feu avant d'ajouter du paprika."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu doré et sent légèrement amer.",
            "action": "Continuez mais réduisez la chaleur agressivement avant d'ajouter du paprika — le paprika brûlé ne peut être sauvé."
          }
        ]
      },
      "feelCue": "Lorsque l'ail et le poivre sont à droite, la poêle sentira intensément aromatique — l'ail vif sucré dans quelque chose de terreux, la note végétale verte du poivre ramollissant. Caraway ajoute une légère chaleur à l'anis."
    },
    {
      "nodeId": "step_3",
      "action": "Bloom",
      "inputs": [
        "aromatic_base",
        "ing_03",
        "ing_04"
      ],
      "outputState": "paprika_paste",
      "instructions": "ÉTAPE CRITIQUE : Retirez entièrement la poêle de la chaleur ou réduisez à la valeur la plus basse absolue. Ajouter tout le paprika doux et chaud à la fois. Incorporer vigoureusement le mélange d'huile et d'oignon. La chaleur résiduelle dans la poêle est suffisante — le paprika brûle en quelques secondes s'il frappe directement une poêle chaude, devenant amer et irréversible. Mélanger en continu pendant 30-45 secondes jusqu'à ce que le paprika soit entièrement incorporé et que le mélange ait fait un rouge-brique uniforme et vif. Retour à la chaleur la plus basse possible.",
      "visualCue": {
        "primaryTarget": "Pâte rouge brique uniforme, sans poches paprika sèches. Le mélange ressemble presque à une confiture rouge lisse. Pas de taches sombres ou noires.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paprika n'est pas entièrement incorporé. Poudre rouge sèche visible mélangée à la pâte.",
            "action": "Agiter vigoureusement pendant 30 secondes. Chaque granule de paprika doit être recouvert de graisse pour fleurir correctement."
          },
          {
            "state": "Perfect",
            "description": "Pâte uniforme rouge brique profonde. Couleur rouge vive, presque fluorescente. L'odeur est profondément paprika — douce, chaude et légèrement florale. Pas de notes pointues ou acrides.",
            "action": "Ajouter le stock et remuer pour se détendre. Laisser mijoter 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue brun foncé ou noir dans les taches. Une odeur aiguë, amère et acride s'est développée. Paprika a brûlé.",
            "action": "Malheureusement, le paprika brûlé doit être jeté — il rendra la pâte entière amère. Commencez à partir de la base aromatique pas à nouveau avec le paprika frais."
          }
        ]
      },
      "feelCue": "Lorsque le paprika fleurit correctement dans la graisse chaude, il sent comme le meilleur restaurant hongrois que vous avez jamais été dans - vif, complexe, légèrement fruité, et chaud. Cette odeur est le signal pour procéder immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Réduire",
      "inputs": [
        "paprika_paste",
        "ing_10",
        "ing_08"
      ],
      "outputState": "finished_goulash_paste",
      "instructions": "Ajouter le bouillon de bœuf et le sel à la pâte. Mélanger — le mélange se desserre dans une pâte-sauce épaisse. Laisser mijoter à feu très doux pendant 8-10 minutes, en remuant fréquemment, jusqu'à ce que le stock ait diminué et que la pâte s'épaississe de nouveau à une consistance de confiture qui tient un monticule sur une cuillère. Goûtez et ajustez le sel. La pâte doit être intensément salée, douce, paprika-avant et complexe. Laisser refroidir complètement avant d'être entreposé — il conserve au réfrigérateur pendant 2 semaines ou surgelé pendant 3 mois.",
      "visualCue": {
        "primaryTarget": "Pâte épaisse, rouge brique avec une texture jammy qui tient sa forme sur une cuillère sans courir. Profondément coloré et brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est trop fine et savoureuse. Il coule d'une cuillère comme une soupe épaisse.",
            "action": "Continuer à mijoter encore 5 minutes à feu doux. Le but est une pâte concentrée et épaisse."
          },
          {
            "state": "Perfect",
            "description": "Il tient un monticule sur une cuillère. Tomber dans une feuille lente et épaisse lorsque la cuillère est inclinée. Profondément rouge et brillant. Une saveur concentrée et complexe.",
            "action": "Laisser refroidir et conserver, ou utiliser immédiatement dans la goulasse en se dissolvant dans le stock de boeuf."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été réduite à une brique très épaisse, presque sèche qui colle à la poêle.",
            "action": "Ajouter une cuillère à soupe de bouillon ou d'eau pour se détendre. Incorporer à feu doux jusqu'à ce qu'il revienne à une pâte extensible."
          }
        ]
      },
      "feelCue": "La pâte finie doit s'accrocher à une cuillère et tomber lentement lorsque vous l'inclinez — la consistance d'une épaisse confiture de fruits. L'odeur doit être profondément torréfié paprika avec l'oignon doux, l'ail, et une épice chaude sous courant."
    }
  ]
};
