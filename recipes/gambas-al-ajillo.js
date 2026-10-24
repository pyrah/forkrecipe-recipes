export default {
  "repoId": "master_spanish_gambas_al_ajillo_001",
  "parentRepoId": null,
  "slug": "gambas-al-ajillo",
  "author": "ForkRecipe Kitchen",
  "title": "Gambas al Ajillo",
  "description": "La tapa la plus séduisante d'Espagne — les crevettes cousues dans un inferno d'huile d'olive, d'ail et de chile séché jusqu'à ce que les coquilles crachent et sizzle, mangées directement de la cazuela d'argile avec du pain déchiré pour traîner à travers l'huile ailky.",
  "cuisine": "Espagnol",
  "culture": "Espagnol",
  "category": "seafood",
  "tags": [
    "Sans gluten",
    "Espagnol",
    "Tapas"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes crues, décortiquées et décortiquées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "grandes crevettes",
        "queues langoustines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Poivrons ou piments rouges séchés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "pincée de Cayenne",
        "piments secs"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Sherry sec (fino ou manzanilla)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chauffer",
      "inputs": [
        "ing_02"
      ],
      "outputState": "smoking_oil",
      "instructions": "Verser l'huile d'olive dans un cazuela, une poêle lourde ou une poêle en fonte. Réglez sur la plus haute chaleur possible votre poêle. Attendez patiemment — l'huile doit vraiment se déchirer chaud, chatoyant et presque fumer, avant que rien d'autre n'entre. Un thermomètre lit environ 180 C (356 F). Cette chaleur extrême n'est pas facultative : c'est ce qui fait que les crevettes s'aspirent plutôt que de la vapeur et que l'ail se parfume plutôt que de brûler.",
      "visualCue": {
        "primaryTarget": "L'huile mijote dans des courants rapides, qui se déchirent sur toute la surface. Une lueur de fumée apparaît aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile reste immobile et brillante. Pas de frisson. La goutte d'ail va maintenant produire de l'huile d'ail amère et brute.",
            "action": "Continuez le chauffage. Ne vous précipitez pas: la chaleur moyenne donne un résultat à la vapeur et non pas à la mer."
          },
          {
            "state": "Perfect",
            "description": "L'huile danse et brille visiblement. Une goutte d'eau s'efface immédiatement. Les fêlures de fumée s'élèvent du bord de la poêle.",
            "action": "Ajouter l'ail et le chile immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Une forte fumée continue. L'huile sent l'acride plutôt que l'herbe.",
            "action": "Retirer la poêle du feu pendant 30 secondes, puis revenir à moyenne-élevée. L'huile d'olive au-dessus de 210 C se dégrade en saveur."
          }
        ]
      },
      "feelCue": "Maintenez votre palmier à deux pouces au - dessus de l'huile — vous devriez pouvoir sentir la chaleur s'élever en une seconde."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "smoking_oil",
        "ing_03",
        "ing_04"
      ],
      "outputState": "aromatic_oil",
      "instructions": "Ajouter l'ail tranché et les chiles entiers séchés à l'huile de cuisson dans un mouvement confiant. Ils cracheront et frémiront violemment — c'est exact. Faire pivoter la poêle ou utiliser une cuillère en bois pour maintenir l'ail en mouvement constant. La fenêtre est étroite: vous voulez l'ail doré aux bords, juste légèrement translucide au centre, avec un parfum de noix qui s'élève de la poêle. Au total, 30 à 45 secondes.",
      "visualCue": {
        "primaryTarget": "Les tranches d'ail sont d'or pâle aux bords, blanc crème au centre. Les Chiliens ont foncé jusqu'à un rouge brique plus profond. Un arôme doux et noisette remplit la cuisine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore blanc pâle et parfumé. Aucune couleur n'a été développée. L'huile n'a pas encore pris son caractère d'ail.",
            "action": "Tourner en continu pendant 15 secondes de plus à feu vif."
          },
          {
            "state": "Perfect",
            "description": "L'ail est bordé d'or, parfumé, et commence juste à croquer aux pointes mêmes. Les Chiliens sont foncés et aromatiques. L'huile a transformé un or chaud, teinté d'ambre.",
            "action": "Ajouter immédiatement des crevettes — n'attendez pas."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et sent amer. L'huile a un goût acride. Jeter et recommencer: l'ail brûlé rendra le plat entier amer.",
            "action": "Jeter le contenu, essuyer la casserole et recommencer."
          }
        ]
      },
      "feelCue": "Écoute : le vertige devrait être fort et agressif. Si ça sonne comme un bouillonnement silencieux, votre chaleur est trop faible."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "aromatic_oil",
        "ing_01",
        "ing_08"
      ],
      "outputState": "seared_prawns",
      "instructions": "Assaisonner les crevettes légèrement avec du sel, puis les ajouter à la poêle en une seule couche. Ne foulez pas — si votre poêle est petit, travaillez en deux lots. Les crevettes doivent entrer en contact avec l'huile chaude, pas entre elles. Laissez-les semer sans gêne pendant 60 à 90 secondes jusqu'à ce que le dessous ait tourné corallien et opaque à mi-chemin de la chair. Les coquilles devraient commencer à s'ombrer aux bords. Puis retournez chaque crevette.",
      "visualCue": {
        "primaryTarget": "Le dessous est entièrement rose et opaque. La coquille a été cloquée et croustillée aux bords. Le haut est toujours transparent gris-rose.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair est toujours complètement translucide et grise. Les coquilles n'ont pas changé de couleur. Pas de char sur les bords de la coquille.",
            "action": "Laisser tranquille pendant 30 à 45 secondes — résister à l'envie de les déplacer."
          },
          {
            "state": "Perfect",
            "description": "La chair est rose et opaque de la base jusqu'au point médian. Les coquilles ont commencé à brunir et à blister. Les jus se rassemblent autour de chaque crevette.",
            "action": "Flip chaque crevette pour terminer la cuisson sur le deuxième côté."
          },
          {
            "state": "Overdone",
            "description": "La chair est totalement opaque et sous-jacente. Les coquilles sont très sombres. Les crevettes commencent à se boucler étroitement.",
            "action": "Sortez - les immédiatement — les crevettes trop cuites sont caoutchouteuses en 30 secondes."
          }
        ]
      },
      "feelCue": "Une crevette bien cousue résiste brièvement à la spatule, puis libère proprement. S'il colle, il n'est pas prêt à retourner."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer",
      "inputs": [
        "seared_prawns",
        "ing_05"
      ],
      "outputState": "glazed_prawns",
      "instructions": "Flip toutes les crevettes, puis verser immédiatement dans le sherry sec. La poêle rugira et s'échauffera de façon spectaculaire. L'alcool s'allumera brièvement si vous êtes sur un poêle à gaz — c'est bien. Tourner la poêle pour dissoudre le fond caramélisé et enrober les crevettes. Faire cuire 30 secondes de plus jusqu'à ce que les crevettes soient entièrement roses et que le sherry soit réduit à une émulsion brillante dans l'huile.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont entièrement roses et enroulées en forme douce de C. La sauce est un ambre brillant et émulsifié accroché à chaque crevette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore grises dans les taches. La sauce est très lâche et aqueuse — le sherry n'a pas diminué.",
            "action": "Cuire encore 20 secondes à feu vif, en tourbillonnant constamment."
          },
          {
            "state": "Perfect",
            "description": "Chaque crevette est uniformément rose et enroulée, juste légèrement ferme au toucher. La sauce est un sirop brillant aromatique réduit qui recouvre tout.",
            "action": "Retirer du feu et terminer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont enroulées et caoutchouteuses. La sauce s'est réduite à presque rien et commence à sentir amer.",
            "action": "Retirer du feu et servir immédiatement — la sauce peut être sauvée avec une petite éclaboussure de sherry ajouté du feu."
          }
        ]
      },
      "feelCue": "Prod une crevette doucement avec votre bout de doigt — il devrait se sentir comme la base charnue de votre pouce quand détendue, pas dur et caoutchouteux."
    },
    {
      "nodeId": "step_5",
      "action": "Terminer",
      "inputs": [
        "glazed_prawns",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_gambas",
      "instructions": "Hors du feu, pressez le jus de citron directement sur les crevettes et dispersez le persil haché. Tourner la poêle une fois de plus pour la combiner. L'acide du citron coupera à travers la richesse de l'huile et soulèvera le plat entier. Transférer immédiatement dans un cazuela chaud ou servir directement de la poêle — gambas al ajillo doit arriver à la table encore grésillante, avec l'huile ailky mise au fond pour le pain.",
      "visualCue": {
        "primaryTarget": "Les taches de persil vert vif contrastent avec les crevettes coralliennes baignées d'huile dorée et parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le plat a l'air lourd et monochrome — pas de vert, pas de luminosité. Le persil n'est pas encore ajouté.",
            "action": "Ajouter le persil et le citron et servir. Ils ne sont pas négociables pour l'équilibre."
          },
          {
            "state": "Perfect",
            "description": "Persil vif contre les crevettes roses. Piscines d'huile à la base de la casserole, ambre et scintillant. Une note d'agrumes propre coupe la richesse en ail lorsque vous vous penchez sur le plat.",
            "action": "Servir immédiatement — ces secondes comptent."
          },
          {
            "state": "Overdone",
            "description": "Le persil s'est flétri en vert terne à cause de la chaleur résiduelle. Le citron a perdu sa luminosité. Le plat sent seulement l'ail cuit.",
            "action": "Servez quand même. La saveur est encore excellente — la prochaine fois, ajouter le persil à la dernière seconde."
          }
        ]
      },
      "feelCue": "La poêle doit siffler faiblement quand vous pressez dans le citron — si elle est silencieuse, la poêle a trop refroidi et vous avez perdu la fenêtre pour le service de grésillement."
    }
  ]
};
