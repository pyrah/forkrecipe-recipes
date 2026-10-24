export default {
  "repoId": "master_spanish_crema-catalana_001",
  "parentRepoId": null,
  "slug": "crema-catalana",
  "author": "ForkRecipe Kitchen",
  "title": "Créma Catalana",
  "description": "L'ancienne réponse de la Catalogne à la crème brûlée — une crème soyeuse au jaune d'œuf parfumée de zeste de citron et de cannelle plutôt que de vanille, mise dans des plats peu profonds en terre cuite et finie avec une croûte de caramel fragile brûlée avec un fer rouge chaud.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "desserts",
  "tags": [
    "Espagnol",
    "catalan",
    "Coutard",
    "dessert",
    "bleuté",
    "cannelle",
    "agrumes"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "demi-moitié pour un résultat plus riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de ricin (plus extra pour la croûte)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "sucre superfin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Ceylon cannelle",
        "écorce de cassie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron (1 grand citron, pas de piquant)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "zeste d'orange",
        "Zeste de citron Meyer"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Lait infusé",
      "inputs": [
        "ing_01",
        "ing_05",
        "ing_06"
      ],
      "outputState": "infused_milk",
      "instructions": "Mélanger le lait entier avec le bâton de cannelle et le zeste de citron dans une casserole à fond lourd. Mettre à feu moyen et laisser mijoter lentement; de petites bulles se forment au bord, pas un ébullition. Retirer du feu le moment où il vapeur et les premières bulles apparaissent. Couvrir la casserole et laisser tremper pendant 20 minutes hors du feu. Le lait absorbera les huiles parfumées du zeste de citron et l'épice chaude de la cannelle, en construisant la base aromatique qui définit la créma catalana de crème brûlée. Enfilez le lait à travers un tamis fin pour enlever le zeste et la cannelle, en appuyant légèrement pour extraire les huiles aromatisées. Le lait doit sentir les agrumes chauds et les épices.",
      "visualCue": {
        "primaryTarget": "Lait pâle, légèrement ivoire, avec une délicate fragrance citronnée et une suggestion de chaleur cannelle — l'arôme devrait être plus parfum que la nourriture à ce stade.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait sent propre et à peine différent du lait cru — les saveurs n'ont pas eu le temps d'en extraire.",
            "action": "Re-couvrez et abruptez encore 10 minutes. Une pente de 20 minutes est le minimum; 30 est mieux."
          },
          {
            "state": "Perfect",
            "description": "Un parfum distinct, agrumes-avant avec cannelle chaleur derrière. Le lait semble à peine changé en couleur mais les goûts transformés.",
            "action": "Plongez et passez immédiatement à la base de la crème."
          },
          {
            "state": "Overdone",
            "description": "Le lait a été porté à ébullition complète — il a pris une qualité légèrement cuite ou comme de la peau et le zeste de citron est devenu amer par une chaleur prolongée.",
            "action": "Souchez immédiatement et utilisez le lait de toute façon, mais notez l'amertume. Une petite pincée supplémentaire de sucre dans le mélange de jaunes peut aider à compenser."
          }
        ]
      },
      "feelCue": "Tenez votre paume sur le lait chaud tendu et respirez — vous devriez sentir le citron d'abord, puis la cannelle se lève derrière. Ce parfum en couches est votre étoile nord pour la crème finie."
    },
    {
      "nodeId": "step_2",
      "action": "Base de jaune de fouet",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "yolk_sugar_base",
      "instructions": "Dans un grand bol, fouetter les jaunes d'œufs avec le sucre de la roulette jusqu'à ce que le mélange devienne pâle, épais et rubané — lever le fouet et le mélange devrait retomber dans un ruban gras lent qui tient sa forme pendant 2-3 secondes avant de se dissoudre. Cela prend environ 3 minutes de sifflement vigoureux. Puis fouetter dans la fécule de maïs jusqu'à ce qu'il ne reste pas de morceaux secs. La fécule de maïs est ce qui différencie la créma catalana d'une crème de jaune pur — elle donne un ensemble plus ferme et légèrement plus féculent qui tient dans les plats peu profonds de terre cuite et permet l'application de la croûte sans que la crème s'effondre. Ne sautez pas cette étape ou ne remplacez pas la farine.",
      "visualCue": {
        "primaryTarget": "Un mélange pâle, jaune crémeux et épais qui tombe du fouet dans un ruban large et lent et tient sa forme brièvement à la surface — pas de granules de sucre non dissout visibles, pas de stries sèches de fécule de maïs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore mince et jaune vif — le sucre n'a pas dissout et ne forme pas de ruban; il tombe comme du liquide.",
            "action": "Continuez à fouetter. La couleur pâle et le stade du ruban exigent que le sucre soit complètement dissous dans les jaunes."
          },
          {
            "state": "Perfect",
            "description": "Pale, épais et brillant. Le ruban conserve sa forme pendant 2-3 secondes. La fécule de maïs est entièrement incorporée sans morceaux secs.",
            "action": "Que le lait chaud tendu soit prêt et tempéré immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est mousseux et a augmenté de façon spectaculaire en volume à cause du sursaut, ce qui introduit un excès d'air qui créera des bulles dans la crème.",
            "action": "Laisser reposer pendant 5 minutes avant de continuer, et tapoter les plats finis de crème sur le comptoir avant de refroidir à des bulles de surface."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre le bout des doigts — elle doit se sentir lisse et légèrement glissante, sans grain de sucre non dissous ou d'amidon sec. La chaleur de vos doigts ne doit pas changer sensiblement la texture."
    },
    {
      "nodeId": "step_3",
      "action": "Temper et cuire la crème",
      "inputs": [
        "infused_milk",
        "yolk_sugar_base"
      ],
      "outputState": "set_custard_in_dishes",
      "instructions": "Réchauffer le lait infusé à feu moyen jusqu'à ce qu'il soit cuit à la vapeur et juste en dessous d'une mijoter. Versez lentement une petite louche de lait chaud dans le mélange de jaune tout en fouettant constamment — c'est le tempérament qui élève doucement la température de l'œuf sans brouillage. Verser une seconde louche, puis retourner le mélange entier dans la casserole. Cuire à feu moyen-doux, fouetter constamment et couvrir toutes les parties du fond et les coins de la poêle. La crème s'épaissira rapidement — en 3 à 4 minutes, elle commencera à envelopper l'arrière d'une cuillère. Dès qu'il s'épaissit sensiblement et que la première grosse bulle apparaît à la surface, retirer de la chaleur. La fécule de maïs doit atteindre juste après la température de gélatinisation, ce qui se produit autour du premier ébullition. Verser immédiatement dans des plats peu profonds en terre cuite ou en ramekin. Chill découvert pendant au moins 3 heures jusqu'à ce qu'il soit complètement froid et réglé.",
      "visualCue": {
        "primaryTarget": "Une crème douce et veloutée qui enveloppe fortement une cuillère et laisse une ligne propre quand un doigt est attiré à travers elle — pas de grumeaux, pas de stries, pas de morceaux de jaune brouillé, et une couleur dorée uniformément pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le custard est encore mince et liquide — la fécule de maïs n'a pas atteint la gélatinisation et elle coule d'une cuillère comme de la crème. Pas encore de revêtement.",
            "action": "Retourner à feu moyen et fouetter continuellement. Il s'épaissira soudainement — gardez la chaleur modérée et ne vous en éloignez pas."
          },
          {
            "state": "Perfect",
            "description": "Épais, lisses et brillants — enveloppe une cuillère et laisse une ligne propre quand un doigt est tiré à travers. Une ou deux bulles qui brisent la surface.",
            "action": "Retirer immédiatement du feu et verser dans les plats. Ne tardez pas ou la chaleur résiduelle continuera de cuire les œufs."
          },
          {
            "state": "Overdone",
            "description": "Custard s'est brouillé dans des fragments grumeaux et caillés — les œufs ont cuit trop vite ou la chaleur était trop élevée.",
            "action": "Verser immédiatement à travers une souche fine dans un bol froid et presser à travers avec une spatule. Les petites bosses peuvent être lissées de cette façon, bien que les gros caillés ne puissent pas."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers la crème et maintenez-la horizontalement — un doigt tiré à travers le revêtement devrait laisser une ligne qui tient proprement pendant au moins 5 secondes sans que la sauce ne se ferme. C'est de la nappe, la crème est faite."
    },
    {
      "nodeId": "step_4",
      "action": "Caraméliser la croûte",
      "inputs": [
        "set_custard_in_dishes",
        "ing_03"
      ],
      "outputState": "finished_crema_catalana",
      "instructions": "Retirer les plats de crème fraîche du réfrigérateur. Saupoudrer une fine couche de sucre de castre uniforme sur chaque crème — environ 1 cuillère à café par plat de 10 cm — et incliner le plat pour l'étendre uniformément aux bords sans taches nues et sans monticules épais. Le sucre doit être sec et même, comme une mince feuille de papier. Traditionnellement créma catalana est fini avec un fer rouge chaud (ferro), mais une torche de cuisine fonctionne parfaitement: tenir la flamme de 2 à 3 cm de la surface et se déplacer dans des cercles serrés, regarder le sucre fondre, bulle, et caraméliser du centre vers les bords. Arrêter le moment où la surface devient brun-ambre — elle continue à s'assombrir une seconde après que la flamme s'en soit retirée. Le créma doit être servi dans les 10 minutes suivant la caramélisation, avant que le sucre n'absorbe l'humidité et n'adoucisse.",
      "visualCue": {
        "primaryTarget": "Un disque ambre lisse et vitreux de caramel sans taches de sucre blanc, sans taches noires, et une surface uniformément mince qui tape dur et se brise quand tapoté avec une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre a fondu, mais il est toujours d'or pâle et doux — il ne craquera pas lorsqu'il sera tapé et goûte encore de sucre brut plutôt que de caramel.",
            "action": "Continuez avec la torche, travaillant à l'intérieur d'où elle a déjà caramélisé. Visez un uniforme ambre, pas seulement fondu."
          },
          {
            "state": "Perfect",
            "description": "L'ambre profonde, brillante et dure en pierre lorsqu'elle est fraîche se brise proprement avec un robinet à cuillère, révélant la crème froide en bas. Un léger parfum de caramel amer se lève.",
            "action": "Servir en 10 minutes alors que le contraste entre la croûte fragile chaude et la crème crémeuse froide est à son maximum."
          },
          {
            "state": "Overdone",
            "description": "La surface est brun foncé à noir dans les taches et sent acride — le caramel brûlé est irréversiblement amer.",
            "action": "Grattez le sucre brûlé à l'aide d'une cuillère, refroidissez la crème exposée pendant 10 minutes, appliquez une couche fraîche de sucre de ricin et caramélisez de nouveau plus doucement."
          }
        ]
      },
      "feelCue": "Tapotez le centre du caramel avec l'arrière d'une cuillère — il devrait sonner comme du verre et se briser proprement en morceaux. La cuillère doit rencontrer la résistance et ensuite se briser dans une seule fissure croquante, révélant la crème froide et soyeuse en dessous. Ce contraste textural est tout."
    }
  ]
};
