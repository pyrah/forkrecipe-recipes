export default {
  "repoId": "master_chinese_salt_baked_sea_bass_001",
  "parentRepoId": null,
  "slug": "salt-baked-sea-bass",
  "author": "ForkRecipe Kitchen",
  "title": "Basse mer salée",
  "description": "Un bar de mer entier enrobé d'une croûte de sel liée aux œufs et cuit jusqu'à ce que la croûte soit dure comme de la pierre — à l'intérieur, le poisson a cuit à la vapeur dans ses propres jus et la chaleur de la croûte scellée, émergeant parfaitement cuit, doux-floqué, et explosivement parfumé de gingembre et d'échon.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "seafood",
  "tags": [
    "base maritime",
    "Chinois",
    "cantonais",
    "croûte salée",
    "poissons entiers",
    "vapeur",
    "gingembre"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
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
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bars entiers, nettoyés et étalonnés (environ 700g)",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "Déclencheur entier",
        "Bream entier",
        "Truite entière"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer grossier (non fin — il doit être granulé)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher",
        "sel de roche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Blancs d'oeufs, légèrement battus",
      "ratioValue": 3,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé, tranché en pièces de monnaie",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalons (oignons de printemps), liés dans un noeud lâche",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Coriandres fraîches",
      "ratioValue": 6,
      "defaultUnit": "ea",
      "substitutions": [
        "persil à feuilles plates si allergique à la coriandre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "sauce soja (soja léger)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Vin de riz shaoxant",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "Vermouth sec"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Peler",
      "inputs": [
        "ing_01"
      ],
      "outputState": "dried_fish",
      "instructions": "Préchauffer le four à 200°C (390°F) avec un support en position centrale. Pat le bar de mer complètement sec — à l'intérieur de la cavité et partout à l'extérieur — avec de multiples changements de serviettes en papier. La sécheresse est critique : toute humidité à la surface du poisson s'écoule à l'intérieur de la croûte salée plutôt que de laisser le poisson cuire dans la chaleur résiduelle sèche de la croûte. Inspectez le poisson pour les autres écailles en tirant un doigt de la queue à la tête — tout ce qui reste empêchera la croûte de s'étanchéité correctement et pourra s'intégrer dans le poisson.",
      "visualCue": {
        "primaryTarget": "La peau de poisson est complètement mate et sèche sans tache scintilleante ou humide. L'intérieur de la cavité est également sec lors de l'inspection.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau brille toujours avec l'humidité de la glace du poisson-monger. Des taches sombres humides sur la peau et des taches humides dans la cavité.",
            "action": "Patez encore avec des serviettes en papier sec frais et laissez à découvert à température ambiante pendant 5 minutes avant d'encaisser. Même un mince film d'humidité affecte la croûte."
          },
          {
            "state": "Perfect",
            "description": "La peau est complètement mate. L'exécution d'une serviette en papier sec sur elle ne produit pas d'humidité. L'intérieur de la cavité est sec au toucher.",
            "action": "Embouts immédiatement et procéder à la construction de la croûte salée."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été laissé découvert si longtemps que la surface a commencé à sécher et à se raffermir légèrement aux points les plus fins, comme la queue.",
            "action": "Procéder immédiatement — le séchage superficiel n'affecte pas l'alimentation. La croûte salée la protégera."
          }
        ]
      },
      "feelCue": "Courez un doigt sec de la queue à la tête à travers la peau du poisson — il devrait attraper légèrement sur les écailles et se sentir complètement sec, comme toucher le papier parchemin sec, pas la surface glissante humide d'un poisson fraîchement lavé."
    },
    {
      "nodeId": "step_2",
      "action": "Matériel",
      "inputs": [
        "dried_fish",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_09"
      ],
      "outputState": "stuffed_fish",
      "instructions": "Placer les tranches de gingembre dans une couche qui se chevauche le long du plancher de la cavité. Placez les pétoncles à nœuds sur le dessus du gingembre et placez les coriandres autour d'eux. Arrosez le vin Shaoxing dans la cavité, il parfumera le poisson à la vapeur. Fermez la cavité en appuyant doucement sur les côtés du poisson. Les aromatiques à l'intérieur n'assaisonnent pas directement la chair; ils créent un environnement parfumé de vapeur qui parfume le poisson de l'intérieur.",
      "visualCue": {
        "primaryTarget": "La cavité est bien remplie avec du gingembre, des oignons et des herbes. Les côtés du poisson sont pressés ensemble. La farce est visible si le ventre est ouvert mais ne se répand pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu d'arômes — la cavité semble clairsemée et le gingembre et les pétoncles couvrent moins de la moitié de la longueur intérieure.",
            "action": "Ajouter encore du gingembre et des oignons. La cavité doit être généreusement emballée mais pas si pleine qu'elle ne peut pas fermer."
          },
          {
            "state": "Perfect",
            "description": "Caviété soigneusement et complètement emballé. Les côtés du poisson se ferment avec une presse douce. Parfum faint de gingembre et de vin Shaoxing déjà présent.",
            "action": "Passer à la construction de la croûte salée."
          },
          {
            "state": "Overdone",
            "description": "Il est tellement abondant que le poisson ne peut pas fermer. L'aromatisme s'élargit de l'ouverture de la cavité.",
            "action": "Enlevez quelques morceaux. Un poisson suralimenté ne scellera pas correctement la croûte salée."
          }
        ]
      },
      "feelCue": "Appuyez sur le ventre du poisson farci fermé avec votre paume — il devrait rester fermé avec une pression douce, pas ressort ouvert. S'il ressort ouvert, réduire légèrement la farce."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "stuffed_fish",
        "ing_02",
        "ing_03"
      ],
      "outputState": "salt_crusted_baked_fish",
      "instructions": "Mélangez le gros sel de mer et les blancs d'oeuf légèrement battus avec vos mains jusqu'à ce que le mélange ressemble au sable humide qui tient sa forme lorsqu'il est pressé — il devrait s'écraser, non s'effondrer. Étendre un lit de 1,5 cm du mélange de sel sur un plateau ou un plat à l'épreuve du four. Pose le poisson farci sur le lit. Emballez le reste du mélange de sel sur et autour de tout le poisson, appuyez fermement pour construire une croûte uniforme de 2 cm d'épaisseur sur tous les côtés. Scellez les trous, surtout autour de la queue et de la tête. Cuire à 200°C pendant 25 à 30 minutes (environ 20 minutes par 500 g de poids du poisson, plus 5 minutes pour la croûte).",
      "visualCue": {
        "primaryTarget": "Après cuisson, la croûte salée s'est durcie à un ivoire uniformément pâle ou une coquille légèrement dorée qui semble creuse lorsqu'elle est tapée. Il n'y a pas de fissures ou de taches molles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est encore un peu molle et donne en place — les blancs d'œufs n'ont pas encore été complètement fixés. Des taches molles sur la partie la plus épaisse du poisson.",
            "action": "Retourner au four 5 minutes de plus. Une croûte molle signifie que l'intérieur est également probablement mal cuit."
          },
          {
            "state": "Perfect",
            "description": "La croûte semble creuse et dure lorsqu'elle est frappée avec un joint, comme taper un pot de terre cuite. La surface est sèche, blanc cassé et légèrement colorée. Une mince fissure peut apparaître le long du dos.",
            "action": "Apportez immédiatement le plat à la table et fissurez la croûte de façon théâtrale avec le dos d'une grande cuillère de service."
          },
          {
            "state": "Overdone",
            "description": "La croûte a développé une couleur dorée très profonde à brune. Le poisson à l'intérieur a probablement cuit plus loin que prévu.",
            "action": "Casser immédiatement après avoir retiré le four. La croûte épaisse isole le poisson et il continuera à cuire si laissé scellé. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Frappez fortement la croûte avec un joint après la cuisson — il devrait sonner creux et dur, comme un pot de fleurs d'argile, ne pas donner sous votre joint. Toute douceur nécessite plus de temps."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "salt_crusted_baked_fish"
      ],
      "outputState": "unveiled_salt_baked_fish",
      "instructions": "À table, présentez le plat croqué au sel. À l'aide d'une cuillère lourde ou d'un petit marteau, fissurer la croûte le long de la colonne vertébrale avec quelques coups fermes. Soulevez les gros morceaux de croûte: la peau de poisson s'en va souvent avec la croûte supérieure, révélant une chair blanche brillante et perlée. Badigeonner les granules de sel qui s'accrochent à la chair avec une brosse à pâtisserie. Le poisson n'aura pas de goût salé — la croûte salée ne le fait que de l'extérieur à travers la peau, pas dans la chair.",
      "visualCue": {
        "primaryTarget": "Après avoir fissuré et enlevé la croûte, la chair de poisson est blanche, entièrement opaque et humide. Il se sépare proprement en grands segments brillants lorsqu'il est touché par une fourchette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair de l'épine dorsale est toujours translucide ou légèrement rose-gris. Les segments résistent à la séparation lorsqu'une fourchette est pressée à la colonne vertébrale.",
            "action": "Remplacer les morceaux de croûte et retourner au four pendant 8 minutes. La croûte, même fissurée, continuera à chauffer."
          },
          {
            "state": "Perfect",
            "description": "La chair est uniformément blanche, perlée et brillante. Les segments se séparent sans effort. La vapeur s'élève doucement du poisson ouvert. Le parfum de gingembre et de pétoncle est immédiat et beau.",
            "action": "Arroser de sauce de soja et d'huile de sésame et servir directement depuis le plat."
          },
          {
            "state": "Overdone",
            "description": "La chair semble sèche et compacte aux zones plus minces près de la queue. Les segments sont légèrement caoutchouteux plutôt que brillants.",
            "action": "Servir immédiatement avec de l'huile de sésame en plus, puis arroser généreusement. Évitez les sections de queue les plus sèches."
          }
        ]
      },
      "feelCue": "Touchez légèrement la chair exposée avec le dos d'une fourchette — le poisson au sel parfait devrait se sentir chaud et céder avec la résistance la plus faible, comme appuyer sur une mangue très douce et mûre. La chair fraîche ou dure nécessite plus de temps."
    },
    {
      "nodeId": "step_5",
      "action": "Terminer",
      "inputs": [
        "unveiled_salt_baked_fish",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_salt_baked_sea_bass",
      "instructions": "Travailler rapidement pour que le poisson ne refroidisse pas, arroser la sauce de soja uniformément sur la chair exposée, suivie de l'huile de sésame grillée — l'huile de sésame devrait s'étourdir légèrement lorsqu'elle touche le poisson chaud. Servir directement du plat avec du riz blanc au jasmin à la vapeur et un simple légume vert sauté. Utilisez une cuillère à soupe pour enlever des portions de la chair de la colonne vertébrale, en maintenant les segments aussi grands et intacts que possible — ce poisson mérite d'être mangé dans des morceaux généreux et humides, non déchiquetés.",
      "visualCue": {
        "primaryTarget": "La chair est recouverte d'un mince film scintillant de soja et de sésame. Le soja foncé crée un beau contraste avec la chair blanche. La cuisine sent le sésame grillé, le soja et le gingembre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le soja n'a pas encore été ajouté: la chair semble pâle et non assaisonnée. Sans le soja, le plat manque de la profondeur salée qui relie le poisson sucré au remplissage aromatique.",
            "action": "Ajouter immédiatement la sauce de soja et l'huile de sésame. Le poisson se refroidit vite."
          },
          {
            "state": "Perfect",
            "description": "Fine même glaçure de soja, juste assez pour assaisonner sans pulvériser à la base du plat. Le parfum de l'huile de sésame se marie avec le gingembre et l'échon qui sortent de la cavité ouverte.",
            "action": "Apportez à la table et servez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de sauce de soja — la chair nage dans le liquide et goûte agressivement salé, accablant la douceur subtile de la basse.",
            "action": "Incliner le plat et verser l'excès de soja. Ajouter un jet d'eau chaude et quelques gouttes d'huile de sésame pour rétablir l'équilibre."
          }
        ]
      },
      "feelCue": "La première bouchée doit avoir un goût propre, doux et de la mer, l'huile de gingembre et de sésame arrivant comme un murmure aromatique chaud plutôt qu'un cri. Si le sel domine, la croûte est trop fine ou le poisson est sous-dimensionné pour le rapport sel."
    }
  ]
};
