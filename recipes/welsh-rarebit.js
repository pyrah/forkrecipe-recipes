export default {
  "repoId": "master_british_welsh_rarebit_001",
  "parentRepoId": null,
  "slug": "welsh-rarebit",
  "author": "ForkRecipe Kitchen",
  "title": "Pays-Bas",
  "description": "Pas un fromage sur le toast, mais une sauce au fromage — soyeuse, laquée à la bière et à la moutarde — versé sur le pain et grillé jusqu'à ce qu'il bulle et cloques dans une surface ambre et cratère qui s'effondre dans la richesse de chaque bouchée.",
  "cuisine": "Anglais",
  "culture": "Pays de Galles",
  "category": "sauces",
  "tags": [
    "britanniques",
    "fromage",
    "sauce",
    "bière",
    "grillé"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 760,
  "forks": 95,
  "contributors": 12,
  "license": "CC-BY-SA",
  "createdAt": "2024-11-20",
  "updatedAt": "2025-07-08",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Cheddar mature, râpé grossièrement",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Gruyère",
        "cheddar américain pointu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Blé foncé ou stout",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "pâle",
        "Worcestershire + eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Beurre non salé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre salé (réduire le sel ajouté)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de moutarde anglaise",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Moutarde de Dijon (double du montant)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "sauce Worcestershire",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + tamarin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Pain épais coupé (goutte ou fleur)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Muffin anglais",
        "Carotte"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_06"
      ],
      "outputState": "toasted_bread",
      "instructions": "Faire griller le pain sous le gril d'un seul côté jusqu'à ce qu'il soit doré et ferme. Ce toast à face unique signifie que le dessous reste légèrement doux et absorbant – il absorbera la sauce au fromage plutôt que de la repousser. Ne pas toaster les deux côtés ou le rarebit va glisser.",
      "visualCue": {
        "primaryTarget": "La surface supérieure est dorée-brun avec des crêtes foncées sur les points élevés. Le dessous reste pâle et légèrement souple.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface supérieure est à peine colorée, encore douce et productive. Il ne tiendra pas correctement la sauce au fromage et pourrait devenir mousseux.",
            "action": "Revenez sous le grill pendant une minute jusqu'à ce qu'il soit nettement doré."
          },
          {
            "state": "Perfect",
            "description": "La surface supérieure est dorée avec une croûte ferme et sèche. Les points élevés ont un léger char. Le dessous reste doux et blanc.",
            "action": "Retirer du gril et faire la sauce rarebit tandis que le pain est encore chaud."
          },
          {
            "state": "Overdone",
            "description": "La surface supérieure est brun foncé ou brûlée dans des endroits. Le pain est rigide dans l'ensemble — le dessous a séché de la chaleur.",
            "action": "Continuez, mais la base sera très croquante. La saveur brûlée peut concurrencer le fromage."
          }
        ]
      },
      "feelCue": "Le visage grillé doit se sentir rigide et sec lorsqu'il est pressé avec un bout de doigt, alors que le visage inférieur donne légèrement sous pression — cette double texture est le fondement structurel du plat."
    },
    {
      "nodeId": "step_2",
      "action": "Faire fondre",
      "inputs": [
        "ing_03",
        "ing_02",
        "ing_04",
        "ing_05"
      ],
      "outputState": "beer_base",
      "instructions": "Faire fondre le beurre dans une petite casserole à feu doux. Ajouter la bière et laisser mijoter doucement — ne pas bouillir agressivement ou l'amertume de la bière dominera. Ajouter la poudre de moutarde et la sauce Worcestershire et mélanger. La base doit être chaude et unifiée avant l'entrée du fromage.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré doux qui sent simultanément le houblon grillé, la moutarde et le beurre. Lentement, même des bulles à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est juste fondu mais la bière est froide. Le mélange se sépare, avec de la graisse flottant sur la bière.",
            "action": "Continuez à chauffer doucement — le mélange doit atteindre une mijotée douce avant l'émulsion de graisse et de liquide."
          },
          {
            "state": "Perfect",
            "description": "Liquide ambré lisse et unifié. Tous les composants ont fusionné en une base parfumée et légèrement mousseuse. La température est juste en dessous d'un mijot.",
            "action": "Réduire la chaleur au réglage le plus bas et commencer à ajouter du fromage."
          },
          {
            "state": "Overdone",
            "description": "La bière a bouilli et a diminué considérablement. L'arôme de houblon vif et amer s'est intensifié. Le beurre s'est peut-être séparé.",
            "action": "Ajouter un peu plus de bière et remuer pour se réinsérer. Réduire la chaleur avant de continuer avec le fromage."
          }
        ]
      },
      "feelCue": "La base de bière doit sentir le tannage, le malté et le beurre à la fois, comme un pub qui vend aussi du bon fromage. Cet arôme signifie que l'alcool a cuit et les saveurs commencent à fondre."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "beer_base",
        "ing_01"
      ],
      "outputState": "rarebit_sauce",
      "instructions": "Ajouter le fromage râpé à la base de bière chaude en trois ou quatre ajouts, en remuant constamment avec une cuillère en bois ou une spatule après chaque ajout. Maintenir la chaleur très basse — le fromage doit fondre à partir de chaleur résiduelle, et non de chaleur directe. La surchauffe fera saisir les protéines et séparer les graisses. Incorporer la figure-huit jusqu'à ce qu'elle soit complètement lisse et brillante.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, brillante et uniforme qui coule lentement et enrobe fortement une cuillère. Pas de chaînes visibles de protéines ou de pools de gras séparés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage n'a pas complètement fondu — les morceaux et les lambeaux sont encore visibles. La sauce est stringée et inégale.",
            "action": "Mélanger doucement à feu très doux pendant encore 1 à 2 minutes jusqu'à ce que les morceaux se dissolvent complètement."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, sauce épaisse avec un éclat brillant. Lorsque vous soulevez la cuillère, la sauce tombe dans un ruban lent et continu. La couleur est bien dorée.",
            "action": "Verser immédiatement sur le pain grillé et faire griller immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est cassée – une texture grimpante et grimpante, avec une mise en commun visible des graisses jaunes sur la surface. Les protéines ont été saisies de surchauffe.",
            "action": "Retirer du feu et fouetter vigoureusement dans une cuillère à soupe froide de beurre. Cela peut partiellement sauver une sauce au fromage cassé."
          }
        ]
      },
      "feelCue": "Déposer une cuillère froide dans la sauce rare et la lever. La sauce doit s'accrocher à la surface du métal dans une couche épaisse et opaque sans glisser, comme un béchamel. S'il coule librement, remuer plus longtemps. Si elle est granuleuse, la chaleur était trop élevée."
    },
    {
      "nodeId": "step_4",
      "action": "Griller",
      "inputs": [
        "rarebit_sauce",
        "toasted_bread"
      ],
      "outputState": "finished_welsh_rarebit",
      "instructions": "Déposer généreusement la sauce rare sur le côté grillé du pain dans une couche épaisse et uniforme d'au moins 1 cm de profondeur. Placer sous un gril très chaud (broiler) pendant 3 à 4 minutes jusqu'à ce que la surface soit bouillonnante, cloquée et profondément dorée. Attention : la différence entre parfait et brûlé est de 30 secondes. Servir immédiatement sur des assiettes chaudes.",
      "visualCue": {
        "primaryTarget": "La surface est bombée et blister avec des taches irrégulières d'ambre foncé, comme un gratin. Les bords sont légèrement plus foncés où ils surplombent le pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est jaune pâle avec de fines bulles mais pas de couleur. On dirait que la sauce vient de sortir du poêle, sans caractère grillé.",
            "action": "Continuez sous le gril. La surface du fromage doit frapper la réaction de Maillard — couleur signifie saveur."
          },
          {
            "state": "Perfect",
            "description": "Blister ambre profond avec quelques taches d'omble presque noires sur les pics. La sauce est gonflée et mise à la surface tout en restant liquide sous. Une huile dorée brille sur les sommets.",
            "action": "Glissez sur des plaques chaudes et servez dans les 60 secondes — la croûte s'effondre à mesure qu'elle refroidit."
          },
          {
            "state": "Overdone",
            "description": "La surface est brun foncé et crépitante. L'odeur du fromage brûlé est acride. La sauce ci-dessous a séché dans une dalle caoutchouteuse.",
            "action": "Le haut brûlé peut être gratté pour révéler le fromage fondu en dessous. Une mise en garde pour la prochaine fois : ne jamais laisser le grill sans surveillance."
          }
        ]
      },
      "feelCue": "La raréfaction finie devrait se sentir lourde et fondue lorsque la plaque est inclinée — vous pouvez l'entendre se déplacer légèrement. Le fait de taper la surface cloquée avec une cuillère devrait donner un son creux sur la croûte et une résistance douce en dessous."
    }
  ]
};
