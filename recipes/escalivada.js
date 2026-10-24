export default {
  "repoId": "master_spanish_escalivada_001",
  "parentRepoId": null,
  "slug": "escalivada",
  "author": "ForkRecipe Kitchen",
  "title": "Escalivada",
  "description": "Le grand plat d'été de la Catalogne — aubergines, poivrons rouges et oignons rôtis en flamme ou dans un four brûlant jusqu'à ce que les peaux noircissent et s'effondrent, puis pelés et déchirés en longs rubans doux et fumés vêtus d'huile d'olive. La technique est aussi ancienne que le feu.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "vegetables",
  "tags": [
    "végétalien",
    "Sans gluten",
    "catalan",
    "grillés",
    "fumée"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Poivrons rouges (ensemble)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons jaunes",
        "piquillo poivrons (goutte moins de temps)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Aubergine (aubergine entière)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Aubergines italiennes",
        "Aubergines japonaises (temps de cuisson)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (tout entier, non pelé)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "grandes échalotes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, généreuse",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Arbequina ou Hojiblanca huile d'olive préférée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": [
        "gousses d'ail grillées, purée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de sherry",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin rouge vieilli",
        "vinaigre de moscatel"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "ruches"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer grossier et poivre noir",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "charred_vegetables",
      "instructions": "Placer les poivrons entiers, les aubergines et l'oignon non pelé directement sur la grille du four dans un four de 230 °C (450 °F) (ou directement sur la grille du grill sur des charbons de taille moyenne). Faire rôtir, tourner toutes les 15 à 20 minutes avec des pinces, jusqu'à ce que chaque légume soit complètement carbonisé noir à l'extérieur, s'effondrer et doux tout au long — environ 40 à 50 minutes au four, 25 à 35 minutes au-dessus des charbons directs. L'objectif est l'ombrage total: le carbone noir à l'extérieur n'est pas un accident mais le mécanisme par lequel la chair à l'intérieur de vapeurs et d'édulcorants. Ne précipitez pas cette étape en soulevant la chaleur plus loin.",
      "visualCue": {
        "primaryTarget": "Les trois légumes sont uniformément noirs et cloqués à l'extérieur, considérablement réduits en taille, visiblement effondrés et doux. Les jus peuvent être caramélisants sur le plateau en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est légèrement brunie ou cloquée dans des patchs mais pas entièrement noire. Les légumes conservent leur forme originale et se sentent fermes.",
            "action": "Continuez à rôtir. La peau doit être entièrement carbonisée avant la vapeur. Tourner pour exposer les côtés pâles."
          },
          {
            "state": "Perfect",
            "description": "Entièrement noir sur toutes les surfaces, visiblement doux et effondré, légèrement ridé. Steam siffle quand il est touché par des pinces. Un couteau entre avec une résistance nulle.",
            "action": "Transférer immédiatement dans un bol et recouvrir fermement d'une pellicule plastique ou d'une assiette."
          },
          {
            "state": "Overdone",
            "description": "La peau est fendue et sèche, les jus sur le plateau brûlent. Les légumes commencent à sécher plutôt que la vapeur.",
            "action": "Transférer dans le bol immédiatement. La chair à l'intérieur est encore excellente."
          }
        ]
      },
      "feelCue": "Ramassez une aubergine avec des pinces — une aubergine entièrement rôtie se sentira flippée et presque creuse, oscillant comme une chaussette lourde. Il faut plus de temps pour une entreprise."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "charred_vegetables"
      ],
      "outputState": "steamed_vegetables",
      "instructions": "Transférer tous les légumes carbonisés dans un grand bol et couvrir fermement d'enveloppe en plastique ou d'une grande assiette. Laisser la vapeur dans leur propre chaleur pendant au moins 15 minutes — cette étape de vapeur est essentielle. La chaleur et l'humidité piégées font que la peau carbonisée se sépare proprement de la chair en dessous et permettent à la chair de terminer la cuisson à une consistance soyeuse tout au long. Ne sautez pas ou ne raccourcissez pas cette étape. Les légumes seront très chauds — manipuler avec soin.",
      "visualCue": {
        "primaryTarget": "Condensation visible sur l'enveloppe plastique ou sous la plaque. Les légumes se sont adoucis et saignés. Les jus se sont mis au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Condensation minimale. Les légumes se sentent encore assez fermes à travers la peau. La peau n'a pas desserré.",
            "action": "Couvrez à nouveau et attendez au minimum 15 minutes. Plus de temps ne fait pas mal."
          },
          {
            "state": "Perfect",
            "description": "Forte condensation sur le couvercle. La peau des poivrons se sépare visiblement aux bords. L'aubergine s'est complètement effondrée.",
            "action": "Découvrez et commencez à peler."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont trop longs (plus de 30 minutes) — les jus refroidissent et se congelent au fond du bol.",
            "action": "Peler et continuer. La saveur est excellente; la texture peut être légèrement plus dégradée, qui est caractéristique de l'escalivada."
          }
        ]
      },
      "feelCue": "Appuyez sur la peau d'un poivre à travers l'enveloppe plastique — il devrait se sentir comme du papier chaud, humide, complètement détaché de la chair sous elle."
    },
    {
      "nodeId": "step_3",
      "action": "Peler",
      "inputs": [
        "steamed_vegetables"
      ],
      "outputState": "peeled_vegetables",
      "instructions": "Travailler sur le bol pour attraper tous les jus (ils sont d'or), peler la peau carbonisée de chaque légume avec vos doigts — il devrait glisser dans de grandes feuilles avec un minimum d'effort. Enlevez les graines des poivrons en les ouvrant à plat et en grattant la grappe. Peler l'oignon et le séparer en couches naturelles. Ne pas rincer les légumes sous l'eau — le rinçage élimine les jus fumés. Quelques petites taches de char qui s'accrochent à la chair sont souhaitables et ajoutent de la fumée.",
      "visualCue": {
        "primaryTarget": "La chair scintille en couleurs vives : poivrons orange-rouge, aubergines de crème d'ivoire, couches translucides d'oignon. Petites taches de char visibles mais pas de larges taches de peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau ne se détache pas proprement, déchirant et laissant de grandes taches sur la chair.",
            "action": "Les légumes ont besoin de vapeur plus longtemps. Récupérer et attendre encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "La peau se détache dans de grandes feuilles, révélant la chair brillante. Il reste parfois de petites taches de char. La chair brille avec des jus piégés.",
            "action": "Attacher en bandes (ne pas dés) et mélanger dans un bol de service."
          },
          {
            "state": "Overdone",
            "description": "La chair est très douce et commence à se briser pendant le pelage.",
            "action": "Poignez doucement. Escalivada peut être très doux et toujours délicieux — la texture est rustique par nature."
          }
        ]
      },
      "feelCue": "La chair de poivre pelée devrait se sentir comme du satin humide — lisse, productif, légèrement glissant avec ses propres jus sucrés. L'aubergine ressemble à de la crème."
    },
    {
      "nodeId": "step_4",
      "action": "Tranche",
      "inputs": [
        "peeled_vegetables"
      ],
      "outputState": "torn_ribbons",
      "instructions": "Les poivrons et les aubergines ne sont pas coupés en longues lanières d'environ 2 à 3 cm de large, suivant le grain naturel de la chair lorsque c'est possible. La déchirure crée des bords irréguliers et texturés qui tiennent mieux la vinaigrette qu'une surface coupée au couteau et donne au plat son aspect rustique caractéristique. L'oignon se sépare naturellement en ses couches. Disposer le tout dans un plat large et peu profond, entrelacer les différents légumes pour une variété visuelle.",
      "visualCue": {
        "primaryTarget": "Longs rubans irréguliers de poivron rouge, aubergines pâles et oignons translucides disposés de façon lâche sur une large assiette. Pas de coupes parfaites et uniformes — toutes les bordures déchirées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces sont trop grandes et trop volumineuses. Les bandes n'ont pas été séparées.",
            "action": "Plus loin dans les rubans plus minces — escalivada est toujours un arrangement lâche et informel."
          },
          {
            "state": "Perfect",
            "description": "De longs rubans gracieux en trois couleurs, légèrement recoupés, informels mais intentionnels. Jus pooling aux bords du plat.",
            "action": "Habillez-vous immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Torn si fine les légumes se désintègrent en lambeaux. Le plat semble masqué plutôt que composé.",
            "action": "Procéder — la saveur est identique. Considérez-le comme la variante régionale rustique."
          }
        ]
      },
      "feelCue": "Tirez une bande de poivre entre vos doigts — il devrait s'étirer légèrement avant de déchirer, comme de la soie. La chair doit être incroyablement soyeuse et refroidie légèrement au toucher."
    },
    {
      "nodeId": "step_5",
      "action": "Saison",
      "inputs": [
        "torn_ribbons",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "escalivada",
      "instructions": "Arrosez l'huile d'olive généreusement et uniformément sur les légumes disposés. Ajouter l'ail haché, une touche de vinaigre de sherry et assaisonner de sel grossier et de poivre noir. Mélanger très doucement pour enrober, en veillant à ne pas séparer les rubans. Dispersez le persil à feuilles plates. Bouche: L'escalivada doit être sucrée des poivrons, fumée de l'ombrage, et brillante du vinaigre, avec l'ail cru fournissant un contrepoint aigu. Laisser reposer à température ambiante pendant au moins 20 à 30 minutes avant de servir, la saveur s'améliore considérablement lorsque l'ail et le vinaigre se marient avec les légumes.",
      "visualCue": {
        "primaryTarget": "Légumes huilés à l'huile avec des paillettes d'ail et de persil. Les jus et l'huile se sont réunis à la base du plat, créant une vinaigrette rougeâtre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont sous-vêtus et semblent secs. Pas de billard à la base.",
            "action": "Ajouter plus d'huile d'olive — escalivada n'est pas un plat diététique. L'huile est essentielle pour la saveur et la conservation."
          },
          {
            "state": "Perfect",
            "description": "Chaque ruban est légèrement brillant avec de l'huile. Le persil est vert vif, les taches d'ail sont visibles. Les jus mis en commun à la base sentent la fumée, l'huile d'olive et le vinaigre.",
            "action": "Reposez à température ambiante de 20 à 30 minutes et servez avec du bon pain pour tremper."
          },
          {
            "state": "Overdone",
            "description": "Trop de vinaigre — le plat est vif et acide plutôt que équilibré.",
            "action": "Ajouter plus d'huile d'olive pour amortir l'acide, et une pincée de sucre si nécessaire."
          }
        ]
      },
      "feelCue": "Le plat de service doit se sentir chaud mais pas chaud — escalivada est mieux mangé à une température ambiante confortable où l'huile d'olive est fluide et les légumes ont complètement détendu en eux-mêmes."
    }
  ]
};
