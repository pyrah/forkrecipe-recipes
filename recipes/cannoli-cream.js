export default {
  "repoId": "master_italian_cannoli_cream_001",
  "parentRepoId": null,
  "slug": "cannoli-cream",
  "author": "ForkRecipe Kitchen",
  "title": "Crème de cannoli",
  "description": "La ricotta fraîchement tendue fouettée avec du sucre en poudre, du zeste d'orange et des chips de chocolat — l'âme de la Sicile dans un bol, éthérément légère quand la ricotta est correctement drainée, avec une douceur laitière propre que l'orange coupe comme un couteau.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "desserts",
  "tags": [
    "Cannoli",
    "sicilienne",
    "Italien",
    "ricotta",
    "crème",
    "chocolat",
    "orange",
    "pâtisserie"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Ricotta de lait entier (impastata ou frais)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Ricotta de lait de mouton drainé pour une saveur plus nette"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre en poudre (givrage), criblé",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre caster battu dans pour une texture légèrement plus grainée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Zeste d'orange (finement râpé, 1 grande orange)",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de citron pour une note plus claire et plus nette"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de 1 fève vanille"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Mini chips de chocolat noir",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "chocolat doux amer haché approximativement",
        "Peau d'agrumes confits"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": [
        "une raclure de muscade fraîche"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Pistaches, hachées finement",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "noisettes confites",
        "Amandes grillées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Jeu",
      "inputs": [
        "ing_01"
      ],
      "outputState": "strained_ricotta",
      "instructions": "Déposer un tamis à mailles fines ou une calandre avec une double couche de cheesewet humide et le placer sur un bol au réfrigérateur. Mettre la ricotta dans le tamis et laisser égoutter au moins 1 heure (ou jusqu'à la nuit pour le résultat le plus sec). Jeter le liquide dans le bol. La ricotta bien tendue devrait être grainée et sèche, comme du fromage cottage épais plutôt que du yogourt. La teneur en eau de la ricotta commerciale est la plus grande raison pour laquelle la crème de cannoli s'avère rugueuse : l'égoutter sans pitié.",
      "visualCue": {
        "primaryTarget": "Après s'être drainée, la ricotta se trouve dans un monticule compact et granuleux du tamis. Lorsqu'une cuillère est pressée, aucun liquide ne s'échappe autour des bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La ricotta est encore humide et crémeuse — lorsqu'elle est pressée, un anneau de liquide laiteux apparaît immédiatement autour de la cuillère. Il a la consistance du yogourt grec.",
            "action": "Retourner au réfrigérateur et égoutter au moins 30 minutes. La ricotta humide produit une crème de canoli qui ne peut pas être piped et sèmera les coquilles immédiatement au contact."
          },
          {
            "state": "Perfect",
            "description": "Sécher, miettes, presque pâteuses. Prend une forme lorsqu'elle est pressée. Pas de suintements liquides. Bouche propre et laiteux sans excès d'eau diluant la saveur.",
            "action": "Continuez à battre. Le caillé tendu est maintenant prêt à devenir une crème légère et pipeable."
          },
          {
            "state": "Overdone",
            "description": "Vous avez égoutté au réfrigérateur pendant la nuit dans un tamis découvert et la surface de la ricotta a séché et croûté légèrement, ou elle a absorbé une faible odeur de réfrigérateur.",
            "action": "Écraser toute croûte séchée et procéder — la masse intérieure sera parfaite. À l'avenir, couvrez le tamis de façon lâche avec du film de collage pendant le drainage de nuit."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité de ricotta égoutté entre deux doigts — il doit sentir sec et granulaire, comme du sable fin légèrement humide, pas lisse et brillant comme du fromage à la crème. N'importe quelle glissante signifie plus de drainage est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "strained_ricotta",
        "ing_02"
      ],
      "outputState": "sweetened_ricotta",
      "instructions": "Transférer la ricotta tendue dans un bol. Sirotez le sucre en poudre dessus et battez-le avec une spatule ou un mélangeur à faible vitesse jusqu'à ce qu'il soit complètement lisse, sans morceaux de sucre et sans ricotta caillé restant. Cette étape décompose la texture granuleuse de la ricotta en une masse crémeuse et cohésive. Goût de douceur — le niveau de sucre ici est modeste pour permettre la saveur de la ricotta de passer. Ajouter plus de sucre par la cuillère à soupe si désiré, mais rappelez-vous que les croustilles au chocolat ajouteront de la douceur supplémentaire.",
      "visualCue": {
        "primaryTarget": "Une crème lisse et uniforme au moindre grain, comme une crème crémeuse très épaisse. Pas de morceaux de curd visible. Une cuillère traînée à travers elle laisse un canal propre et à fermeture lente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours assez volumineux, granuleux et inégal. Particules de caillé visibles et sucre non dissous. La texture est incohérente.",
            "action": "Plus longtemps. La ricotta a besoin de temps pour s'adoucir — le sifflement à grande vitesse risque d'introduire trop d'air, si faible et stable gagne."
          },
          {
            "state": "Perfect",
            "description": "Crémeux, doux, avec un soupçon de grain agréable — pas aussi doux que le fromage à la crème, mais pas non plus. Une douceur propre et laiteuse.",
            "action": "Ajoutez maintenant les arômes: zeste d'orange, vanille et cannelle. Ceux-ci entrent avant les jetons pour distribuer uniformément."
          },
          {
            "state": "Overdone",
            "description": "Vous avez battu la ricotta à grande vitesse à une consistance complètement lisse, presque liquide. La crème est maintenant lâche et ne tiendra pas sa forme quand piped.",
            "action": "Réfrigérer pendant 30 minutes pour obtenir une légère fermeté. S'il est encore trop lâche, plier dans une cuillère à soupe de ricotta extra tendue pour resserrer la consistance."
          }
        ]
      },
      "feelCue": "Scoop une petite quantité et le frotter sur votre doigt — il devrait se sentir luxueusement lisse avec juste assez de grain pour vous rappeler qu'il est ricotta. Si votre doigt se sent parfaitement propre après, la ricotta est trop lâche."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "sweetened_ricotta",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_05"
      ],
      "outputState": "cannoli_cream",
      "instructions": "Ajouter le zeste d'orange, l'extrait de vanille et la cannelle à la ricotta sucrée et le plier avec une spatule jusqu'à ce qu'elle soit entièrement distribuée. Plier dans les mini chips au chocolat en dernier, en utilisant trois ou quatre coups pour distribuer uniformément sans les écraser. Les jetons doivent rester entiers et fournir un contraste textuel. Goûte encore une fois : l'orange doit être présente mais non dominante, la cannelle un fond murmure.",
      "visualCue": {
        "primaryTarget": "Une crème flanquée de zeste d'orange et cloutée de chips de chocolat entiers. ivoire uniformément pâle avec des taches de couleur, lisse et écorcable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le zeste et la cannelle sont inégalement distribués, des poches de saveur orange intense alternant avec la ricotta. Les jetons sont empilés d'un côté.",
            "action": "Plier plus soigneusement. Contrairement à une pâte, la crème de ricotta a besoin d'un pliage actif et délibéré pour distribuer les aromatiques."
          },
          {
            "state": "Perfect",
            "description": "Toujours flanqué et pointillé. Chaque cuillerée goûte de ricotta douce, orange, vanille, un murmure de cannelle, et une puce aléatoire. Équilibré et léger.",
            "action": "Réfrigérer pendant au moins 20 minutes avant la canalisation — le refroidissement ferme la crème et facilite la canalisation dans les coquilles proprement."
          },
          {
            "state": "Overdone",
            "description": "Vous avez écrasé les chips de chocolat pendant le pliage et ils se sont dissous dans des stries sombres. La crème a l'air gris-brun marbré.",
            "action": "Plier plus doucement et ajouter des chips frais. Les croustilles ne sont pas un désastre pour la saveur, mais la crème perd l'attrait visuel et la variété texturale."
          }
        ]
      },
      "feelCue": "La crème finie devrait tenir sa forme quand vous la faites glisser et retourner la cuillère à l'envers — elle reste mise pour un compte lent de trois avant de s'enfoncer. Si elle tombe immédiatement, elle doit être plus drainée ou refroidie."
    },
    {
      "nodeId": "step_4",
      "action": "Refroidissement",
      "inputs": [
        "cannoli_cream",
        "ing_07"
      ],
      "outputState": "finished_cannoli_cream",
      "instructions": "Couvrez bien le bol avec un film de collage pressé directement sur la surface de la crème pour empêcher la formation d'une peau. Réfrigérer au moins 20 minutes avant utilisation. Remplir les coquilles de cannoli au tout dernier moment en coulant des deux extrémités pour assurer un remplissage uniforme — les coquilles préremplies plus de 30 minutes à l'avance s'adoucissent et perdent leur croûte. Pour chaque cannoli rempli, terminer la crème exposée aux deux extrémités par une petite pincée de pistaches hachées. D'autre part, servir la crème dans des petits bols ou des tasses avec une galette concassée pour tremper.",
      "visualCue": {
        "primaryTarget": "Crème refroidie qui tient une rosette à pipe propre ou tourbillonne sans chuter. La garniture de pistaches ajoute un contraste vert vif aux extrémités de chaque cannolo.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est encore chaude ou seulement légèrement réfrigérée – elle coule lorsqu'elle est pipe et ne tient pas une forme définie dans la coquille ou la tasse.",
            "action": "Réfrigérer davantage. Au moins 20 minutes est le minimum; 1 heure est meilleure. pipes à crème de ricotta froide avec beaucoup plus de contrôle."
          },
          {
            "state": "Perfect",
            "description": "Prend une forme de pipe proprement. Remplit la coque d'une légère résistance et reste en place lorsque la coque est inclinée. Les pistaches pressent dans la crème.",
            "action": "Remplissez les coquilles et servez immédiatement. Ne jamais réfrigérer les coquilles de canoli remplies — la condensation ruine la croûte en quelques minutes."
          },
          {
            "state": "Overdone",
            "description": "La crème a été réfrigérée toute la nuit sans couvrir correctement et la surface a séché légèrement ou absorbé d'autres odeurs du réfrigérateur.",
            "action": "Incorporer du fond jusqu'à réhydrater la surface et le goût. Si la saveur est propre, procéder. La prochaine fois, appuyez sur le film de collage directement sur la surface."
          }
        ]
      },
      "feelCue": "Une crème de cannoli fraîche, parfaitement faite, devrait se sentir riche et légèrement dense sur la langue — pas léger comme la mousse, pas lourd comme le cheesecake, mais quelque part au milieu, avec la luminosité persistante de l'orange soulevant la richesse à la fin."
    }
  ]
};
