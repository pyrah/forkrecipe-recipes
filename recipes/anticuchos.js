export default {
  "repoId": "master_peruvian_anticuchos_001",
  "parentRepoId": null,
  "slug": "anticuchos",
  "author": "ForkRecipe Kitchen",
  "title": "Anticuchos de Corazón",
  "description": "L'emblématique brochette de coeur de bœuf de Lima, à grain de rue, est marinée pendant la nuit dans l'ají panca, le cumin et le vinaigre.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "proteins",
  "tags": [
    "périuvien",
    "coeur de bœuf",
    "brochette",
    "grillé",
    "Produits de la rue",
    "fumée"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coeur de boeuf, parures de graisse, de membrane et de ventricule, coupé en cubes de 3 cm",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Rein de boeuf",
        "cuisse de poulet ferme"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Ají panca (ou ají panca séché, trempé et mélangé)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de chili ancho",
        "pâte de guajillo"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail, finement hachées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
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
      "role": "Seasoning",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile végétale (pour le basting)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "marinade réservée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Maïs péruvien bouilli (choclo) ou maïs sur la corbe, coupé en rondelles",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "maïs régulier"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Pommes de terre bouillies, à servir",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "patates douces"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "trimmed_heart",
      "instructions": "Travaillant sur une planche solide, examinez soigneusement le cœur de boeuf. À l'aide d'un couteau à désossage tranchant, éloignez les poches visibles de graisse extérieure — elles sont aromatisées en suif et ne rendront pas dans le court temps de grill. Plus important encore, ressentez et coupez les tubes conjonctifs blancs fermes (l'aorte et les vaisseaux pulmonaires) qui traversent le haut du cœur, et épluchez la membrane externe dure qui recouvre les parois du ventricule. Le muscle actuel du cœur est différent de toute autre coupe — il est rouge profond, extrêmement fin et dense, avec presque aucune graisse intramusculaire. Couper le muscle nettoyé en morceaux d'environ 3 cm d'épaisseur. Ils devraient ressembler à de petits médaillons irréguliers, plus foncés et plus uniformes qu'un steak.",
      "visualCue": {
        "primaryTarget": "Morceaux musculaires de couleur rouge-brunge, sans graisse blanche, sans tissu conjonctif et sans membrane visible, propres, denses et très sombres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tubes conjonctifs blancs encore visibles; membrane encore gainant les sections du muscle; poches grasses présentes.",
            "action": "Continuer le parage – les tissus conjonctifs de la brochette finale seront caoutchouteux et intouchables même après le grillage."
          },
          {
            "state": "Perfect",
            "description": "Médaillons musculaires rouges foncés propres; pas de tissu blanc; texture à grain fin visible au visage coupé; les morceaux sont même d'épaisseur pour une cuisson uniforme.",
            "action": "Transférer dans un bol de mélange et commencer la marinade."
          },
          {
            "state": "Overdone",
            "description": "Morceaux coupés trop fins (moins de 2 cm); ils seront trop cuits et deviendront du cuir-tough sur le grill.",
            "action": "Procéder — mais réduire sensiblement le temps de grillage et les surveiller de près."
          }
        ]
      },
      "feelCue": "Manipulation d'un morceau de cœur paré — il devrait se sentir nettement plus ferme et plus dense qu'un steak, presque comme une poitrine de poulet très ferme, sans donner ni gigoter. Il reviendra immédiatement sous votre pouce. Cette densité est le muscle qui ne cesse jamais de fonctionner, et il a besoin de la marinade pour la tendresse."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "trimmed_heart",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "marinated_heart",
      "instructions": "Dans le bol, mélanger la pâte ají panca, le vinaigre de vin rouge, l'ail haché, le cumin moulu, le sel et le poivre noir. Mélanger soigneusement vos mains, masser la marinade dans chaque surface et crevasse de la viande. Le vinaigre commence immédiatement une tendresse acide douce, et l'ají panca — qui est fumé, doux et fruité d'une manière distincte de l'ají amarillo — tache la viande d'un violet rouge brique profond. Couvrir soigneusement le bol et réfrigérer pendant au moins 3 heures, idéalement pendant la nuit. Plus il marine (jusqu'à 24 heures), plus le vinaigre adoucit les fibres musculaires serrées et plus les épices pénètrent profondément. Une heure avant la cuisson, filez les morceaux sur des brochettes métalliques — deux ou trois pièces par brochette, laissant un peu d'espace entre elles.",
      "visualCue": {
        "primaryTarget": "Profondément teinté, rouge brique à violet foncé morceaux de cœur qui ont absorbé la marinade entièrement — pas de taches grises crues, pas de mise en commun de liquide séparé, la pâte s'accroche uniformément à chaque surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade assise sur la surface plutôt que pénétrante ; les faces coupées sont toujours le rouge profond original sans aucun changement de couleur de la pâte.",
            "action": "Massage plus vigoureusement et prolonger le temps de marination; le muscle dense a besoin d'un contact plus long que la plupart des protéines."
          },
          {
            "state": "Perfect",
            "description": "Enduit uniformément dans une pâte rouge brique profonde; les morceaux sentent la fumée, le cumin, le vinaigre et l'ail — une chaleur complexe et salée. La surface est légèrement collante de la pâte.",
            "action": "Filez sur les brochettes et portez à température ambiante 30 minutes avant de griller."
          },
          {
            "state": "Overdone",
            "description": "Mariné pendant plus de 24 heures dans un milieu riche en acides; la surface de la viande est devenue grise et partiellement « cuite » par l'acide, perdant ainsi son ressort.",
            "action": "Pat sec et procéder — la texture sera légèrement plus douce de la cure acide prolongée, mais la saveur sera encore plus assaisonnée."
          }
        ]
      },
      "feelCue": "Une fois la marinade allumée pendant plusieurs heures, pressez doucement l'une des pièces — elle aurait dû produire très légèrement par rapport à la pièce brute taillée, donnant juste une touche plus avant de ressortir. Pas doux, mais légèrement plus conforme. Ce petit changement vous dit que la soumission fonctionne."
    },
    {
      "nodeId": "step_3",
      "action": "Grille",
      "inputs": [
        "marinated_heart",
        "ing_08"
      ],
      "outputState": "grilled_skewers",
      "instructions": "Préparez votre grill pour une chaleur directe extrêmement élevée — le charbon est authentique et optimal, le gaz fonctionne mais manque de fumée. La grille de grillage doit être si chaude que les brochettes s'étournent immédiatement et fort au contact. Badigeonner la grille d'un peu d'huile pour éviter le collage. Placez les brochettes perpendiculairement aux barres de grille et laissez-les tranquilles pendant 2 à 3 minutes pour développer un char profond. Tourner une fois; faire griller le deuxième côté pendant 2 minutes de plus. Le temps de cuisson total est de 4 à 5 minutes — le cœur de boeuf est mieux mangé moyen, avec un léger roussissement de rose au centre même des morceaux épais. Si vous le faites cuire au-delà de cela, les fibres musculaires se contractent violemment et la texture va de agréablement mâcher-tendre à vraiment dur. Pendant le grillage, arrosez une fois avec de l'huile pour créer des éruptions supplémentaires et les marques caractéristiques d'omble de feu kissed des anticuchos cuits dans la rue.",
      "visualCue": {
        "primaryTarget": "Des brochettes avec des bords et des surfaces profondément carbonisés et presque noirs sur un intérieur rouge foncé, juste passé-raw. Les marques de gril sont audacieuses et vraies, avec une qualité laquée brillante de la marinade caramélisant dans la chaleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'extérieur est sombre de la marinade mais non carbonisé; pas de traces profondes de grill; l'intérieur est encore cru et très printanier.",
            "action": "Revenez à la partie la plus chaude de la grille et ne déplacez pas les brochettes — laissez-les s'asseoir jusqu'à ce qu'ils libèrent naturellement de la grille, ce qui signale la formation de la taille."
          },
          {
            "state": "Perfect",
            "description": "Les lignes d'omble gras, la marinade caramélisée créant une croûte laquée, un rose pâle au centre absolu de chaque pièce, et un intérieur riche mais pas musqué. L'odeur est la fumée, la marinade du soja et la viande carbonisée.",
            "action": "Reposez les brochettes pendant 2 minutes avant de servir — les jus doivent être redistribués."
          },
          {
            "state": "Overdone",
            "description": "Les brochettes sont entièrement grises; l'extérieur est très sombre et la viande est nettement dure et résistante lorsqu'elle est pressée avec un doigt.",
            "action": "Couper la viande et la terminer avec une pression rapide de jus de lime et plus de pâte ají panca en sauce pour masquer la sécheresse."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de cœur sur la brochette avec votre bout de doigt — le cœur correctement grillé devrait résister avec un ressort ferme, comme presser la base de votre pouce, puis repousser lentement. S'il donne comme une éponge, il est sous-doté; s'il est complètement rigide et ne compresse pas du tout, il est surdoté."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "grilled_skewers",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_anticuchos",
      "instructions": "Laisser reposer les brochettes 2 minutes de la chaleur. Assiette dans le style traditionnel de Lima street-food: les brochettes posées directement sur des rondelles de chocolat bouilli (ou de maïs sur la cab coupé en rondelles) et la pomme de terre bouillie — l'amidon doux des deux contrebalance le cœur carbonisé, acide, profondément salé. À Lima, un vendeur anticucho vous remettra la brochette avec le maïs et la pomme de terre déjà empalés à la base, de sorte que chaque morsure peut alterner entre la viande et l'amidon. Aucune sauce supplémentaire n'est strictement nécessaire, mais une cuillère de marinade restante chaude et réduite fait une excellente sauce à tremper rapidement, ou servir avec une pâte ají amarillo supplémentaire sur le côté.",
      "visualCue": {
        "primaryTarget": "Des brochettes carbonisées et brillantes de coeur rouge foncé-violet reposant sur du maïs et de la pomme de terre émincés pâles - le contraste de l'omble noir avec l'amidon blanc crème est la signature d'un chariot Lima anticuchos.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poêles plaqués avant le repos; les jus coulent librement sur l'assiette et la viande est nettement plus douce et moins parfumée.",
            "action": "Il est trop tard pour se défaire — la prochaine fois, reposez les brochettes avant de poser."
          },
          {
            "state": "Perfect",
            "description": "Des brochettes laquées, reposantes, avec des jus maintenus; l'odeur d'omble s'est mêlée à un parfum profond et fumé. Le maïs et la pomme de terre absorbent les jus de viande. Une assiette complète et satisfaisante.",
            "action": "Mangez immédiatement — les anticuchos doivent être consommés chaud du grill."
          },
          {
            "state": "Overdone",
            "description": "Les brochettes ont été maintenues au chaud trop longtemps et ont continué à cuisiner; le cœur s'est serré et semble terne et sombre tout au long.",
            "action": "Couper finement le grain et servir comme une assiette de style carpaccio avec du jus de lime et de la pâte d'ají pour raviver les saveurs."
          }
        ]
      },
      "feelCue": "Prenez une bouchée — la résistance initiale de la croûte devrait rapidement céder à un intérieur tendre, légèrement mâché avec une richesse minéral-fer prononcée qui est sans conteste la viande d'organe, enveloppée dans la chaleur du cumin et la fumée de fruits foncés de ají panca. S'il a un goût plat et gris, le grill n'était pas assez chaud et la marinade n'a jamais caramélisé."
    }
  ]
};
