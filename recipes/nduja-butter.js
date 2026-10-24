export default {
  "repoId": "master_italian_nduja_butter_001",
  "parentRepoId": null,
  "slug": "nduja-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Nduja Beurre",
  "description": "Beurre non salé fouetté de feu Calabrian nduja jusqu'à ce que les deux se mélangent dans un composé soyeux, parfumé de porc qui se répand comme le luxe et brûle avec une chaleur lente, bâtiment.",
  "cuisine": "Italien",
  "culture": "Calabre",
  "category": "sauces",
  "tags": [
    "Italien",
    "Calabre",
    "Beurre composé",
    "nduja",
    "épicé",
    "porc",
    "Étendue"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "1 hr (chilling)",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, ramolli à température ambiante",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Nduja (sauce Calabrienne extensible)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de chorizo épicée",
        "Poivre rouge rôti et pâte de chili de style « nduja »"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Ciboulette fraîche, très finement hachée",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "persil à feuilles plates, finement haché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Zeste de citron (à partir de 1 citron non épilé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whip",
      "inputs": [
        "ing_01"
      ],
      "outputState": "whipped_butter",
      "instructions": "Le beurre doit être vraiment doux — pas froid et dur, et ne pas commencer à fondre. Laissez-le à température ambiante pendant au moins 45 à 60 minutes avant le début, ou jusqu'à ce qu'il s'éteigne facilement sous une légère pression des doigts. Battre le beurre ramolli dans un bol avec une cuillère en bois ou un mélangeur à la main à vitesse moyenne de 2 à 3 minutes jusqu'à ce qu'il devienne ivoire pâle, augmente en volume, et devient nettement plus léger et fluffier dans la texture. Cette étape aérera le beurre et créera la base d'un composé soyeux qui fondra en douceur plutôt que de se briser dans des piscines grasses.",
      "visualCue": {
        "primaryTarget": "Le beurre est passé d'un jaune profond à une crème d'ivoire pâle et a augmenté légèrement en volume. Il devrait avoir l'air souple et léger plutôt que dense et cireux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore dense, jaune et cireux — il a été battu mais pas encore aéré. La texture est lisse mais lourde.",
            "action": "Continuer à battre pendant encore 1-2 minutes. Si le beurre est encore froid et résistant, il n'a peut - être pas été assez longtemps à la température ambiante — réchauffez brièvement le bol dans un bol d'eau chaude."
          },
          {
            "state": "Perfect",
            "description": "Le beurre est d'ivoire pâle, visiblement moelleux, et s'accroche aux côtés du bol dans des frottis mous et oreillers plutôt que des stries denses. La texture est presque comme de la crème fouettée — légère et facile à plier.",
            "action": "Ajouter le nduja et battre pour combiner."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a été battu trop longtemps et commence à s'adoucir de la friction et de la chaleur, en commençant à regarder légèrement gras ou mouillé aux bords.",
            "action": "Réfrigérer le beurre pendant 5 minutes pour le raffermir légèrement, puis poursuivre avec le nduja. Un beurre composé légèrement doux va toujours rouler et refroidir avec succès."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt dans le beurre fouetté — il devrait laisser une impression propre qui tient sans que le beurre s'effondre, comme une mousse très légère plutôt qu'une pâte lourde."
    },
    {
      "nodeId": "step_2",
      "action": "Crème",
      "inputs": [
        "whipped_butter",
        "ing_02"
      ],
      "outputState": "nduja_butter_base",
      "instructions": "Ajouter le nduja au beurre fouetté. À la température ambiante, le nduja est doux et tartinable, et il est facilement crémeux dans le beurre. Battre à vitesse moyenne jusqu'à ce que le nduja soit complètement incorporé et qu'il ne reste pas de stries rouge-orange. Les huiles de graisse et d'épices du nduja teindreont le beurre d'une couleur chaude terre cuite-orange. Le mélange sent intensément la graisse de porc, la viande fermentée et le chili calabrien, un arôme animal très direct. Cette étape ne devrait pas prendre plus de 90 secondes de battement actif.",
      "visualCue": {
        "primaryTarget": "Un beurre composé uniformément orange-terracotta sans stries visibles de beurre blanc clair ou de nduja non incorporé – complètement cohérent dans la couleur et la texture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de nduja rouge-orange restent visibles contre le beurre plus pâle. Le mélange n'est pas encore uniforme en couleur ou en texture — certaines taches sont denses avec la saucisse, d'autres sont du beurre uni.",
            "action": "Continuez à battre. Grattez les côtés du bol pour capturer n'importe quel nduja qui s'y cache et battre encore 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Un beurre lisse et uniforme en terre cuite-orange qui conserve sa texture légère et moelleuse malgré l'ajout de la saucisse. La couleur est cohérente du bord au centre. La graisse du nduja est complètement émulsifiée dans le beurre.",
            "action": "Ajouter la ciboulette, le zeste de citron, le poivre et le sel."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a été battu si longtemps qu'il se sépare légèrement — un léger éclat de graisse orange apparaît à la surface du composé.",
            "action": "Réfrigérer le mélange pendant 10 minutes, puis battre très brièvement à la main pour ré-homogèner avant de plier dans les aromatiques."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité sur le bout des doigts : la première sensation doit être riche en beurre salé, immédiatement suivie de la chaleur lente et florissante du chili calabrien — non pas une brûlure aiguë mais une lueur de réchauffement qui se construit sur 5-10 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "nduja_butter_base",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "nduja_compound_butter",
      "instructions": "Ajouter la ciboulette, le zeste de citron, le poivre noir et le sel à la base du beurre de nduja. Plier doucement avec une spatule en caoutchouc — ne pas battre, ce qui écraserait la ciboulette et les ferait sombrer. Trois ou quatre plis larges suffisent pour les distribuer uniformément. Placez une grande feuille de plastique sur le comptoir. Déposer le beurre le long d'un seul bord et utiliser l'enveloppe pour le rouler dans une bûche compacte d'environ 5 cm de diamètre. Tordre les extrémités fermement pour compresser et façonner le log. Réfrigérer pendant au moins 45 minutes jusqu'à très ferme, ou congeler jusqu'à 2 mois. Couper en rondelles directement du réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Un log terracotta-orange avec des cigognes vertes visibles partout - le contraste de couleur est frappant, et le log tient fermement sa forme quand il est froid.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les aromatiques ne sont pas distribués de façon uniforme — des croûtes de ciboulette dans certaines régions, des composés simples dans d'autres. Le rouleau d'emballage en plastique est lâche et le log est de forme irrégulière.",
            "action": "Plier plus soigneusement avant de rouler. Une fois enroulé, rouler fermement la bille sur le comptoir tout en appuyant doucement pour la former uniformément, puis retwist les extrémités plus serrées."
          },
          {
            "state": "Perfect",
            "description": "Le log est compact, même en diamètre, et ferme après 45 minutes de refroidissement. Couper les tranches de façon propre avec un couteau tranchant et montrer un motif cohérent en terre cuite et en vert.",
            "action": "Faire fondre les rondelles sur des steaks grillés chauds, remuer dans les pâtes ou le risotto au dernier moment, étaler sur du pain grillé, ou des pétoncles haut de mer."
          },
          {
            "state": "Overdone",
            "description": "Le beurre était trop chaud lorsqu'il était roulé et s'est effondré plutôt que de tenir une forme de log. La ciboulette peut s'être obscurcie par suite d'une manipulation excessive.",
            "action": "Réfrigérer le bûcheron pendant 15 minutes jusqu'à ce qu'il soit suffisamment ferme pour rouler, puis remodeler. Même le beurre composé de forme imparfaite agit de façon identique lorsqu'il est fondu."
          }
        ]
      },
      "feelCue": "Une tranche réfrigérée doit être aussi ferme que le fromage froid — dense, froid et propre sous un couteau. Placé sur une surface chaude, il devrait commencer à fondre aux bords immédiatement, libérant un éclat de graisse parfumée de chili."
    }
  ]
};
