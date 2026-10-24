export default {
  "repoId": "master_indian_masala_chai_001",
  "parentRepoId": null,
  "slug": "masala-chai",
  "author": "ForkRecipe Kitchen",
  "title": "Masala Chai",
  "description": "La bouilloire du bord de la route distillée à son essentiel — thé noir et lait mijoté dur avec la cardamome broyée à la main, le gingembre et les grains de poivre fissurés jusqu'à ce que toute la casserole tourne le bronzage profond du caramel et jette une vapeur parfumée et poivrée. Douce, épicée et assez forte pour tenir une cuillère.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "beverages",
  "tags": [
    "Chai",
    "thé",
    "Masala",
    "épicé",
    "lait",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "lait d'avoine plein gras",
        "lait de bison pour un pot plus riche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Thé noir fort (Assam CTC)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "tout thé noir à feuilles larges robuste",
        "deux sacs de thé forts"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gousses de cardamome vert",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "une pincée de cardamome au sol ajouté tard"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Gingembre frais (peauté)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "1/4 c. à thé poudre de gingembre séchée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "une petite pincée de poivre long"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Aboiement de cannelle (cassie)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "véritable cannelle Ceylan pour une note plus légère"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Jaggé",
        "Le miel agité par la chaleur"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "crushed_masala",
      "instructions": "Casser les gousses de cardamome s'ouvrent et pointent dans leurs graines noires avec les défenses. Ajoutez les grains de poivre, les girofles, un morceau d'écorce de cannelle cassé, et tapez tout grossièrement dans un mortier — vous voulez les épices meurtries et cassées ouvertes, non pulvérisées. Enfilez le gingembre pelé séparément dans une pulpe fibreuse. L'écrasement de produits frais libère des huiles volatiles qu'un masala d'avant-sol a depuis longtemps perdues, et la texture grossière abrupte proprement sans obscurcir le chai.",
      "visualCue": {
        "primaryTarget": "Un rugueux, parfumé, de cardamome fractionné, de grains de poivre cassés et de cannelle cassée, avec le gingembre réduit à une pulpe humide et à cordes qui sent vif et vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pods sont encore entiers et les grains de poivre intacts, roulant autour du mortier sans rupture.",
            "action": "Continuez à frapper. Les gousses doivent se diviser et les grains de poivre se fissurent — les épices scellées aromatisent à peine le pot."
          },
          {
            "state": "Perfect",
            "description": "Chaque goupille de cardamome est ouverte, les grains de poivre sont fissurés en moitiés et en quarts, la cannelle est en attelles, et les odeurs de cuisine d'épices chaudes et de gingembre.",
            "action": "Grattez tout — les défenses, les graines, la pulpe de gingembre et tout jus — directement dans l'eau."
          },
          {
            "state": "Overdone",
            "description": "Le masala est une poudre fine et poussiéreuse et le gingembre est liquéfié.",
            "action": "Utilisable, mais il sera nuageux et légèrement boueux la bière. Strain extra soigneusement à la fin."
          }
        ]
      },
      "feelCue": "Le pestle devrait rencontrer une croûte satisfaisante car les gousses et les grains de poivre laissent place. À ce stade, une gouffre devrait faire fourmiller votre nez — ce coup de poivre et de cardamome est l'âme du masala chai."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "crushed_masala",
        "ing_01"
      ],
      "outputState": "spiced_decoction",
      "instructions": "Mettre le masala broyé dans l'eau dans une petite casserole et porter à ébullition. Laissez-le buller pendant 2 à 3 minutes — c'est une vraie décoction, en tirant la chaleur et l'arôme des épices dans l'eau avant que le lait ne pénètre. L'eau teintera l'or pâle et la vapeur deviendra inaltérablement poivrée et gingembre.",
      "visualCue": {
        "primaryTarget": "Une eau bouillonnante, légèrement dorée, transportant des taches d'épices, jetant une vapeur forte et chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore claire et la vapeur sent peu plus que l'eau chaude.",
            "action": "Continuez à bouillir. Les épices ont besoin d'un ébullition dur et ouvert pour abandonner leurs huiles."
          },
          {
            "state": "Perfect",
            "description": "L'eau est devenue pâle paille-or, les épices dansent dans un ébullition, et l'arôme est piquant et épicé.",
            "action": "Ajouter les feuilles de thé et laisser bouillir."
          },
          {
            "state": "Overdone",
            "description": "La poêle est presque sèche et les épices sont brûlées.",
            "action": "Garnir d'un jet d'eau et baisser la chaleur avant d'ajouter du thé — le masala brûlé devient amer."
          }
        ]
      },
      "feelCue": "Penchez-vous au-dessus de la poêle : la vapeur doit piquer légèrement avec du gingembre et du poivre. Le son est un ébullition intense, plein de gorge, pas un mijot paresseux."
    },
    {
      "nodeId": "step_3",
      "action": "Streep",
      "inputs": [
        "spiced_decoction",
        "ing_03"
      ],
      "outputState": "tea_brew",
      "instructions": "Incorporer le thé dans l'eau d'épice bouillante et le garder à ébullition rapide pendant 1 à 2 minutes. La feuille de CTC brasse rapidement et sombrement; vous voulez une liqueur forte, presque inky parce que le lait à venir va diluer et le pâler considérablement. La couleur devrait s'approfondir jusqu'à une acajou riche.",
      "visualCue": {
        "primaryTarget": "Un brassage brun-rougeâtre foncé à ébullition régulière, les feuilles gonflées et trébuchantes, la surface portant une mince mousse tannique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est un ambre faible et vous pouvez encore voir clairement au fond de la casserole.",
            "action": "Faites bouillir encore une demi-minute. Le thé sous-brûlé fait un mince chai laiteux sans colonne vertébrale."
          },
          {
            "state": "Perfect",
            "description": "Un brassage acajou profond, presque opaque avec une mousse serrée — il semble trop fort à lui seul, ce qui est exactement juste.",
            "action": "Verser le lait et le sucre."
          },
          {
            "state": "Overdone",
            "description": "La bière a bouilli longtemps et dure et sent sévèrement astringent et amer.",
            "action": "Déplacez - vous tout droit vers le lait — les produits laitiers et le sucre masqueront une certaine amertume, mais la prochaine fois raccourcir l'ébullition du thé."
          }
        ]
      },
      "feelCue": "Elle devrait avoir l'air presque agressivement sombre et tannique. Faites-le confiance — au moment où le lait frappe, cette intensité devient la force parfaite."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "tea_brew",
        "ing_02",
        "ing_09"
      ],
      "outputState": "finished_chai",
      "instructions": "Verser le lait et ajouter le sucre, puis ramener la casserole entière à ébullition. Regardez-le de près — alors qu'il monte la casserole et menace de mousser, retirez-la brièvement de la chaleur pour la régler, puis retournez-la. Répétez cette montée-bouteille deux ou trois fois sur 2 à 3 minutes; chaque ébullition épaissit le chai et mélange le thé, l'épice et le lait en un seul. Verser d'une hauteur à travers une fine souche en tasses pour laisser les feuilles et les épices derrière et construire un peu de mousse sur le dessus.",
      "visualCue": {
        "primaryTarget": "Un chai uniforme, chaud-tan, la couleur du caramel laiteux, mousser les côtés de la poêle et donner une vapeur douce, épicée, laiteuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chai est pâle et semble mince et aqueux, le lait n'est pas encore complètement bouilli dans le thé.",
            "action": "Laissez-le pousser à ébullition complète au moins une fois de plus. Les ébullitions sont ce qui donne au chai son corps et ronde, saveur de lait cuit."
          },
          {
            "state": "Perfect",
            "description": "Un riche, même bronzé avec un col mousseux, ayant bouilli et s'étant installé quelques fois. Il sent doux, gingembre et entièrement intégré.",
            "action": "Plongez et versez immédiatement, d'une hauteur, dans des tasses chaudes."
          },
          {
            "state": "Overdone",
            "description": "Le chai a bouilli ou réduit trop loin, goûtant cuit, trop sucré et légèrement écalé.",
            "action": "Coupez-le avec un jet de lait chaud ou d'eau et rééquilibrez la douceur avant de servir."
          }
        ]
      },
      "feelCue": "Le moment classique, c'est la mousse qui roule dans la casserole, puis tirez-la juste avant qu'elle ne déborde. Le chai fini doit enrober la tasse d'un faible film collant et avoir un goût doux, fort et réchauffant, avec le piment qui atterrit comme un doux glaçage dans la gorge."
    }
  ]
};
