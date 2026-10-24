export default {
  "repoId": "master_italian_pasta-alla-carbonara_001",
  "parentRepoId": null,
  "slug": "pasta-alla-carbonara",
  "author": "ForkRecipe Kitchen",
  "title": "Pasta alla Carbonara",
  "description": "Les pâtes les plus exigeantes de Rome — les spaghettis enveloppés d'une sauce tremblante, riche en œuf-jaune qui existe dans la marge rasoir-mince entre la crème soyeuse et la catastrophe brouillée, ponctuée par des éclats de guanciale croustillante et une chute de neige de vieux Pecorino.",
  "cuisine": "Italien",
  "culture": "Romain",
  "category": "grains",
  "tags": [
    "pâtes",
    "œuf",
    "guanciale",
    "romaine",
    "fromage"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 7,
    "sour": 1,
    "bitter": 2,
    "umami": 8,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Spaghetti ou rigatoni",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Tonnarelli",
        "mezze maniché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Guanciale ( joue de porc guérie), coupée en lardons",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "pancetta tesa (non fumé)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaunes d'œuf (4 pour 400 g de pâtes)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeuf entier (1 pour 400 g de pâtes)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Pecorino Romano, finement râpé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "50/50 Pecorino et Parmigiano-Reggiano"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre noir, grossièrement moulu et grillé",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau de cuisson des pâtes, féculente et salée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rendu",
      "inputs": [
        "ing_02"
      ],
      "outputState": "rendered_guanciale",
      "instructions": "Placez les lardons guanciaux dans une poêle froide et sèche, sans huile. Commencez à feu moyen-doux et faites cuire lentement pendant 8-12 minutes, en tournant occasionnellement. La graisse doit rendre doucement; la chaleur élevée rendra l'extérieur difficile avant que la graisse intérieure ait fondu. Cuire jusqu'à ce que la graisse soit entièrement translucide et que les portions de viande soient croustillantes et dorées aux bords. Retirer la poêle de la chaleur et utiliser une cuillère à fentes pour transférer la guanciale dans une serviette en papier brièvement, puis revenir à la poêle avec toute la graisse rendue. La poêle et la graisse doivent être chaudes mais pas chaudes lorsque la sauce est faite.",
      "visualCue": {
        "primaryTarget": "Les lardons sont dorés-ambres et croustillants aux bords, avec des gras translucides dans la poêle. La graisse est claire et chatoyante, pas sombre ou de fumer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse est encore blanche et opaque. La viande est douce et mâcheuse, sans bord croustillant.",
            "action": "Continuer à feu moyen-doux. La graisse doit être entièrement rendue avant les croustilles de viande."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont d'or profond et croustillants; les parties intérieures sont encore légèrement tendres. La graisse dans la poêle est claire, dorée et parfumée avec de la douceur de porc.",
            "action": "Retirer du feu. Gardez la poêle au chaud — elle sera nécessaire pour la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le guanciale est uniformément brun foncé et dur partout. La graisse a commencé à fumer et les odeurs brûlées.",
            "action": "Supprimer immédiatement. Si la graisse n'est pas brûlée, elle peut encore être utilisée. Laisser refroidir la poêle avant d'ajouter le mélange d'oeufs."
          }
        ]
      },
      "feelCue": "La graisse rendue doit sentir doux et propre — comme les bonbons de porc chauds, pas acride. Les pièces de la guanciale doivent cliquer légèrement contre la poêle, et non contre le calmar."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "carbonara_sauce_base",
      "instructions": "Alors que la guanciale rend, combiner les jaunes d'œufs et l'œuf entier dans un bol assez grand pour éventuellement tenir toutes les pâtes. Ajouter la moitié du Pecorino finement râpé et une généreuse quantité de poivre noir fraîchement broyé. fouetter vigoureusement jusqu'à ce que le mélange soit lisse, épais et jaune pâle — la consistance de la crème lourde. Il devrait tomber du fouet dans un ruban épais et continu. Ne pas ajouter de sel — la graisse guanciale et Pecorino fournissent tout le sel dont ce plat a besoin.",
      "visualCue": {
        "primaryTarget": "Une crème épaisse, lisse, jaune pâle avec la consistance de crème lourde ou crème molle. Des chutes du fouet dans un ruban épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jaunes d'œufs et le fromage ne sont pas entièrement incorporés — des traces blanches de fromage sont encore visibles dans la base jaune.",
            "action": "Plus vigoureusement. La friction du fouet commence à émulsifier le mélange."
          },
          {
            "state": "Perfect",
            "description": "Consistance uniforme jaune pâle, épaisse, crémeuse. Le fromage est entièrement incorporé. Des chutes du fouet dans un ruban lent et lourd.",
            "action": "Réserver près du poêle. Il doit être à température ambiante quand il rencontre les pâtes."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est mousseux avec de grandes bulles d'air.",
            "action": "Laissez reposer la mousse. Ce n'est pas un problème."
          }
        ]
      },
      "feelCue": "La base de la sauce doit se sentir presque comme un yogourt épais lorsqu'elle est brassée avec une cuillère — il devrait y avoir une résistance lorsque vous la faites glisser dans le bol."
    },
    {
      "nodeId": "step_3",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "al_dente_pasta",
      "instructions": "Cuire les pâtes dans un grand pot d'eau bien salée (l'eau doit goûter agréablement salée, comme une mer douce). Cuire à 1 minute de moins que le temps d'al dente de l'emballage — il finira la cuisson dans la sauce hors-chauffe. Avant de les égoutter, arrosez au moins une tasse (240ml) d'eau de cuisson des pâtes – cette eau trouble et fébrile est le pivot de la sauce. Égoutter les pâtes mais ne pas rincer.",
      "visualCue": {
        "primaryTarget": "Pasta qui est à peine sous -done — ferme avec une ligne blanche très faible quand mordu. Il finira dans la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un noyau blanc important quand mordu. Dégustation toujours crayeuse et farineuse.",
            "action": "Cuire encore 30 secondes et revérifier. Les pâtes doivent être presque faites avant de quitter l'eau."
          },
          {
            "state": "Perfect",
            "description": "À peine sous -dos: tendre extérieur, légère fermeté dans l'ensemble, minuscule fil blanc au centre. Les pâtes ont absorbé la saveur de l'eau salée.",
            "action": "Réserver l'eau de pâtes immédiatement, puis égoutter et transférer dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Entièrement doux sans résistance. Sera complètement doux dans l'étape finale de la sauce.",
            "action": "Passez rapidement à travers les étapes restantes — ne laissez pas ces pâtes refroidir."
          }
        ]
      },
      "feelCue": "Agiter un brin contre votre dent avant — vous devriez sentir un « snap » ferme à travers environ 80% de l'épaisseur, puis un dernier fil mince de résistance. Ce fil est la marge entre al dente et trop cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "al_dente_pasta",
        "rendered_guanciale"
      ],
      "outputState": "pasta_with_guanciale",
      "instructions": "Transférer les pâtes égouttées directement dans la poêle avec la guanciale et sa graisse fondue à feu moyen. Mélanger vigoureusement pendant 30 secondes, en s'assurant que chaque brin est recouvert de graisse de porc et a eu un contact avec la poêle chaude. Cette étape aromatise les pâtes avant l'arrivée de la sauce aux œufs. Ajouter 2-3 cuillerées à soupe de l'eau de pâtes réservée à la casserole et jeter à nouveau — l'amidon dans l'eau commence à construire l'émulsion.",
      "visualCue": {
        "primaryTarget": "Pâtes brillantes et uniformément recouvertes de graisse guanciale rendue. Chaque brin brille. Les pièces de Guanciale sont distribuées partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes ont l'air sèches et nattes. Le gras n'a pas recouvert les brins. Guanciale est assise en bas.",
            "action": "Jeter plus activement — soulever et jeter plutôt que simplement remuer. Ajoutez un peu plus d'eau pour pâtes."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin recouvert et scintillement. La vapeur s'élève. Guanciale uniformément distribuée. Pan est chaud mais pas criant.",
            "action": "Retirer la poêle du feu avant d'ajouter la sauce aux œufs."
          },
          {
            "state": "Overdone",
            "description": "La poêle est trop chaude et les pâtes commencent à sécher et à coller.",
            "action": "Ajouter l'eau de pâtes et retirer immédiatement de la chaleur. La poêle doit refroidir avant l'entrée de la sauce aux œufs."
          }
        ]
      },
      "feelCue": "Les pâtes doivent sonner comme un étourdissement doux et humide, car elles se jettent dans la graisse, et non comme une couche dure. Si vous entendez du craquelin ou de la fumée, la poêle est trop chaude pour la sauce aux œufs."
    },
    {
      "nodeId": "step_5",
      "action": "Émulsionner",
      "inputs": [
        "pasta_with_guanciale",
        "carbonara_sauce_base",
        "ing_07"
      ],
      "outputState": "finished_carbonara",
      "instructions": "C'est l'étape critique. Retirez entièrement la poêle du feu et laissez reposer 30 secondes du brûleur. Verser le mélange de fromage aux oeufs sur les pâtes et commencer immédiatement à jeter vigoureusement avec des pinces tout en ajoutant simultanément des pâtes d'eau à soupe à la fois. La chaleur résiduelle des pâtes et de la poêle placera délicatement les œufs dans une sauce — mais seulement si vous continuez à bouger. L'eau de pâtes lubrifie la sauce et empêche les œufs de se brouiller en distribuant la chaleur. Visez une consistance entre la crème épaisse et la crème molle – elle doit couler lorsque la poêle est inclinée mais s'accroche à chaque brin. Ajouter le Pecorino restant en deux ajouts, en jetant entre chacun. Goûtez et ajustez le poivre.",
      "visualCue": {
        "primaryTarget": "Une sauce lustrée, crémeuse et jaune pâle qui s'accroche à chaque brin de pâtes et coule lentement lorsque la poêle est inclinée. Pas de courbure visible. Pas de liquide de mise en commun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. L'oeuf n'a pas été émulsifié — il court librement au fond de la poêle. Les pâtes sont déshabillées.",
            "action": "Déplacer plus vigoureusement la poêle sur une flamme très basse pendant 10 secondes, en jetant constamment. L'eau de pâtes amylacées aidera à se lier."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, uniforme crème jaune pâle revêtement chaque brin. Il coule comme de la crème lourde lorsqu'il est incliné. Pas de mise en commun de liquide à la base de la casserole.",
            "action": "Assortir immédiatement dans des bols chauds et servir."
          },
          {
            "state": "Overdone",
            "description": "Cords jaunes visibles. La sauce est brouillée et séparée. Liquid s'est mis à la base.",
            "action": "Vous ne pouvez pas défaire les œufs, mais la saveur est intacte. Mélanger dans une généreuse éclaboussure d'eau chaude de pâtes hors de la chaleur et continuer à bouger — l'amidon peut partiellement réémulsionner légèrement brouillage."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — les pâtes habillées doivent lentement glisser comme une masse cohésive, non séparée en brins de pâtes nageant dans le liquide. Ça devrait ressembler à une seule entité brillante."
    }
  ]
};
