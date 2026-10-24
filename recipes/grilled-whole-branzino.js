export default {
  "repoId": "master_mediterranean_grilled_whole_branzino_001",
  "parentRepoId": null,
  "slug": "grilled-whole-branzino",
  "author": "ForkRecipe Kitchen",
  "title": "Branzino entier grillé",
  "description": "Un bar de mer européen entier assaisonné simplement avec de l'huile d'olive, du citron et des herbes, grillé sur une chaleur féroce jusqu'à ce que la peau cloque et brise et la chair douce à l'intérieur de vapeurs dans ses propres jus — cuisine méditerranéenne à son plus honnête et dramatique.",
  "cuisine": "Méditerranée",
  "culture": "Méditerranée orientale",
  "category": "seafood",
  "tags": [
    "poissons",
    "grillé",
    "méditerranéen",
    "poissons entiers",
    "simple",
    "citron",
    "herbes"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
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
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Brenzino entier (basse européen), nettoyé et étalonné, environ 500g chacun",
      "ratioValue": 2,
      "defaultUnit": "ea",
      "substitutions": [
        "snapper",
        "dorade/bream de mer",
        "Basse rayée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Citron, moitié jus, moitié tranche fine",
      "ratioValue": 2,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail légèrement broyés",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Graines de romarin frais",
      "ratioValue": 2,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, entiers",
      "ratioValue": 6,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "Sel casher grossier"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Score",
      "inputs": [
        "ing_01"
      ],
      "outputState": "scored_fish",
      "instructions": "À l'aide d'un couteau tranchant, faire 3 coupes diagonales à travers la peau et la chair de chaque côté de chaque poisson — incliné à 45 degrés vers la tête, environ 1 cm de profondeur et 4 cm de longueur, uniformément espacé de l'épaule à la queue. Ces scores servent deux buts : ils permettent à la chaleur de pénétrer plus uniformément les parties les plus épaisses du poisson, et ils donnent à l'assaisonnement et à la cavité aromatiques un chemin dans la chair. Patientez le poisson complètement sec à l'intérieur et à l'extérieur avec des serviettes en papier — un poisson sec grillades, un poisson humide vapeurs.",
      "visualCue": {
        "primaryTarget": "Trois coupes propres et même diagonales visibles de chaque côté du poisson. La chair est visible à travers les coupes. La surface de la peau est complètement sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les découpes sont trop peu profondes — seulement marquer la peau sans atteindre la chair. L'assaisonnement ne pénétrera pas.",
            "action": "Approfondissement des coupures. Angler la lame du couteau vers la tête et appliquer une pression ferme. Vous devriez sentir le couteau voyager à travers la peau et dans la chair."
          },
          {
            "state": "Perfect",
            "description": "Trois coupes même profondes de chaque côté qui s'ouvrent légèrement lorsque le poisson est retenu par la queue. La chair est faiblement visible dans chaque score. La peau est sèche.",
            "action": "Assaisonner immédiatement le poisson pendant que la chair est exposée pour absorber le sel."
          },
          {
            "state": "Overdone",
            "description": "Trop de coupes, ou de coupes qui vont jusqu'à la colonne vertébrale, la chair se brisera sur la grille.",
            "action": "Faites attention. Attachez doucement le poisson avec 2-3 boucles de ficelle de cuisine pour l'aider à tenir ensemble pendant le grillage."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt sur la peau marquée — il devrait se sentir comme une surface sèche et à l'échelle entre les coupes, et vous devriez sentir les bords propres et ouverts de chaque coupe comme des crêtes distinctes. Toute humidité signifie que le poisson a besoin de plus de séchage."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "scored_fish",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "seasoned_stuffed_fish",
      "instructions": "Assaisonner généreusement la cavité de chaque poisson au sel et au poivre. Emportez chaque cavité avec de l'ail écrasé, des brins de thym, un brin de romarin, quelques brins de persil et 2 à 3 fines tranches de citron. Les herbes et le citron parfumeront le poisson de l'intérieur comme il cuisine. Assaisonner l'extérieur — y compris dans les coupes — avec du sel, du poivre et une généreuse bruine d'huile d'olive. Utilisez vos mains pour enrober toute la surface extérieure, en s'assurant que l'huile pénètre dans chaque score.",
      "visualCue": {
        "primaryTarget": "L'extérieur du poisson brille légèrement avec l'huile d'olive. Cristaux de sel visibles sur la peau. Les brindilles et les tranches de citron sont visibles dans la cavité abdominale.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cavité semble vide ou à peine assaisonnée. L'extérieur a des taches fines et sèches sans huile.",
            "action": "Ajouter plus d'aromates à la cavité — ils sont le moteur de saveur du plat. Frotter plus d'huile dans la peau, en se concentrant sur les coupures notées."
          },
          {
            "state": "Perfect",
            "description": "La cavité est remplie d'herbes, d'ail et de citron. L'extérieur est uniformément huilé et salé, avec un assaisonnement visible dans les scores.",
            "action": "Reposez le poisson à température ambiante pendant 10 minutes pendant que la grille atteint la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été sursalé — une croûte de sel blanc visible partout, ou est trempé dans du sel depuis plus de 30 minutes et l'humidité commence à s'écouler.",
            "action": "Badigeonner immédiatement l'excès de sel et griller. Le surselage guérira la surface et empêchera la peau de croquer."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le pouce dans une coupe de pointage — vous devriez sentir la résistance de la chair de poisson crue et froide et sentir le citron, l'huile d'olive et le thym simultanément. Cette ruée aromatique est la promesse de ce qui arrive."
    },
    {
      "nodeId": "step_3",
      "action": "Grille",
      "inputs": [
        "seasoned_stuffed_fish"
      ],
      "outputState": "grilled_branzino",
      "instructions": "Préchauffer une grille de charbon à feu élevé, ou une grille de gaz au maximum (vous avez besoin d'au moins 280°C sur la grille). Nettoyez et huilez bien la grille — une grille propre, chaude, huilée est la différence entre le poisson qui s'enlève magnifiquement et le poisson qui déchire. Placez le poisson sur la grille à un angle de 45 degrés par rapport aux barres. Ne déplacez pas le poisson pendant 5 à 7 minutes. Vous saurez qu'il est prêt à retourner lorsque le poisson libère de la grille sans coller. Flipez une fois en utilisant deux spatules larges, et faites cuire le deuxième côté pendant 4-5 minutes.",
      "visualCue": {
        "primaryTarget": "La peau du côté cuit est carbonisée à noir-bronze dans les motifs de losanges de la grille, blister et éclatantment croustillant. La chair est opaque et s'éloigne des coupures.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 4 minutes, vous essayez de déplacer le poisson et il déchire — la peau est toujours liée à la grille. Flesh est toujours translucide aux scores.",
            "action": "Laisse tomber. Un poisson qui colle est un poisson qui a besoin de plus de temps. Toute tentative pour la forcer déchire la peau."
          },
          {
            "state": "Perfect",
            "description": "Après 6 minutes, le poisson lève la grille. La peau a des marques de grill carbonisées à presque noires, est croquante et sonnante à sec lorsqu'elle est tapée. La chair au pointage devient opaque.",
            "action": "Flip avec deux spatules dans un mouvement confiant. Cuire le deuxième côté 4-5 minutes sans bouger."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a cuit complètement sur le premier côté — la chair se détache avec un test de fourche doux et est complètement opaque tout au long du chemin avant d'être retourné.",
            "action": "Flipez immédiatement et faites cuire le deuxième côté seulement 2–3 minutes. Servir sans délai. Le branzino trop cuit sèche rapidement."
          }
        ]
      },
      "feelCue": "Faites glisser une mince spatule métallique sous le poisson après 5 minutes — si elle glisse sous sans résistance, la peau a formé sa croûte et s'est libérée. Si elle prend et traîne, laissez-la encore 60 secondes et essayez à nouveau."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "grilled_branzino",
        "ing_03"
      ],
      "outputState": "finished_grilled_branzino",
      "instructions": "Transférer le poisson grillé dans un plat chaud et reposer pendant 3 minutes avant de servir. Ce bref repos permet à la chaleur résiduelle de terminer le centre même du poisson et permet aux jus de la cavité de se redistribuer. Pressez généreusement le citron frais sur le dessus – l'acide éclaire la richesse fumée de la peau grillée. Présentez le poisson entier à la table, et utilisez une large spatule et fourche pour le fileter côté table : soulevez le filet supérieur le long de la colonne vertébrale, puis retirez l'épine dorsale pour révéler le filet inférieur.",
      "visualCue": {
        "primaryTarget": "Le poisson repose intact sur le plateau, la peau carbonisée et éclatantement croustillante. Lorsqu'une fourchette est pressée délicatement dans la partie la plus épaisse du dos, la chair s'épanouit et se sépare proprement en grands segments blancs et humides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Au test de fourche, la chair est encore semi-translucide et les segments résistent à la séparation. La colonne vertébrale est encore rose-rouge où elle rencontre la chair la plus épaisse.",
            "action": "Retourner au grill chaud 2 minutes de plus par côté. Branzino cuisine très rapidement à feu vif — 2 minutes est significatif."
          },
          {
            "state": "Perfect",
            "description": "Flûter au point le plus épais (juste derrière l'épaule) s'étale dans des segments blancs brillants au toucher de fourche légère. La cavité vapeur avec l'humidité parfumée aux herbes. La peau semble légèrement croquante lorsqu'elle est tapée.",
            "action": "Servir immédiatement avec du citron et du pain pour éponger les jus parfumés d'herbe du plateau."
          },
          {
            "state": "Overdone",
            "description": "La chair commence à sécher aux bords des partitions, en s'éloignant de minces flocons secs plutôt que de segments humides. La peau peut s'être contractée et retirée de la queue.",
            "action": "Servir immédiatement avec de l'huile d'olive généreuse arrosée sur la chair exposée pour restaurer l'humidité. La saveur reste excellente."
          }
        ]
      },
      "feelCue": "Lorsque vous glissez une fourchette dans la chair juste derrière la nageoire dorsale (point le plus épais), elle doit se séparer avec une résistance zéro et les segments doivent se sentir humides et tendres, non caoutchouteux ou secs, comme la chair d'une poire parfaitement mûre."
    }
  ]
};
