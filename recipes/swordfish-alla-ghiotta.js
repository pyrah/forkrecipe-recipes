export default {
  "repoId": "master_italian_swordfish_alla_ghiotta_001",
  "parentRepoId": null,
  "slug": "swordfish-alla-ghiotta",
  "author": "ForkRecipe Kitchen",
  "title": "Swordfish alla Ghiotta",
  "description": "Les steaks d'espadon braisés de style sicilien dans une sauce agrodolce douce d'olives, de câpres, de tomates cerises, de céleri, de pignons et de raisins secs — les saveurs d'un mercato de Palerme distillé dans une seule poêle parfumée. Bittersweet, Briny, et immanquablement marine.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "seafood",
  "tags": [
    "Italien",
    "sicilienne",
    "espadon",
    "Produits de la mer",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Steaks d'espadon (2 cm d'épaisseur)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "steaks de thon",
        "Mahi-mahi"
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
      "role": "Allium",
      "name": "Oignon blanc, tranché finement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri, tranchées finement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tomates cerises égouttées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Olives vertes Castelvetrano, piquées et coupées en deux",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "olives de Cerignola",
        "Olives niçoises"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Câpres, salées (rincées) ou en saumure (drainées)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "baies de câpres, coupées en deux"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin rouge",
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Noix de pin",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Amandes liquéfiées"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Raisins (ou sultanas)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Cerises"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "basilic frais"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Semer l'espadon",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_13",
        "ing_14"
      ],
      "outputState": "seared_swordfish",
      "instructions": "Patientez les steaks d'espadon très secs et assaisonner généreusement les deux côtés avec du sel et du poivre. Chauffer la moitié de l'huile d'olive dans une grande poêle lourde à feu vif jusqu'à ce qu'elle fume. Semer l'espadon pendant 2 à 3 minutes de chaque côté jusqu'à ce qu'une croûte dorée se forme sur les deux faces. Le poisson ne sera pas cuit à travers — vous construisez la croûte et le fond, et non pas la finition du poisson. Retirer dans une assiette. Le poisson finira dans la sauce.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée profonde sur les deux faces de chaque steak. Les bords deviennent opaques, mais le centre est encore translucide lorsque le steak est levé et vu de côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est collé à la poêle et le dessous est pâle. La croûte ne s'est pas formée. La poêle fait un bruit calme et brûlant plutôt qu'un étourdissement audacieux.",
            "action": "Attendez — la croûte doit se former complètement pour que le poisson se libère. Si elle colle, la chaleur est trop faible ou le poisson trop humide."
          },
          {
            "state": "Perfect",
            "description": "Une croûte ferme et dorée s'est formée. Le poisson se libère proprement de la poêle. Les bords sont opaques de 40 à 50%, le centre encore translucide.",
            "action": "Retirer dans une assiette. La cuisson restante se fera dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "La croûte est sombre et le poisson est déjà opaque à 80% par son épaisseur. Il sera trop cuit quand il sera retourné à la sauce.",
            "action": "Supprimer immédiatement. Réduire la sauce rapidement et ajouter le poisson pendant seulement 60 secondes à la fin."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre de l'espadon avec votre bout de doigt — il devrait se sentir ferme à la surface de la croûte mais donner doucement en dessous, comme presser une poitrine de poulet crue. Rigide dans l'ensemble signifie qu'il est déjà dépassé."
    },
    {
      "nodeId": "step_2",
      "action": "Construire la base de l'agrodolce",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_02",
        "ing_10",
        "ing_11"
      ],
      "outputState": "agrodolce_base",
      "instructions": "Dans la même poêle, réduire à feu moyen et ajouter le reste de l'huile. Ajouter l'oignon et le céleri. Cuire en remuant pendant 6 à 8 minutes jusqu'à ce que l'oignon soit complètement doux et translucide et commence à devenir doré. Ajoutez les noix de pin et faites cuire 2 minutes jusqu'à ce qu'elles soient légèrement grillées. Ajouter les raisins secs et remuer pendant 30 secondes jusqu'à ce qu'ils s'enfoncent légèrement.",
      "visualCue": {
        "primaryTarget": "L'oignon et le céleri sont doux et translucides, les pignons sont un tandem d'or pâle, les raisins secs sont plumés et brillants. La poêle a récupéré le fond résiduel du poisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore raide et opaque, le céleri cru. Les noix de pin sont blanches et crues.",
            "action": "Cuire encore 3 minutes. La base doit être entièrement douce ou la sauce aura un goût cru et dur."
          },
          {
            "state": "Perfect",
            "description": "L'oignon et le céleri sont complètement doux et sucrés. Les noix de pin sont dorées. Les raisins secs sont durs et commencent à libérer leur douceur.",
            "action": "Ajouter les tomates, les câpres et les olives."
          },
          {
            "state": "Overdone",
            "description": "Les noix de pin sont brun foncé et amères. L'oignon est caramélisé en ambre foncé.",
            "action": "Enlevez les noix de pin si elles sont très sombres. La douceur de l'oignon caramélisé profond nécessitera un vinaigre supplémentaire pour équilibrer."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de céleri contre le côté de la poêle — il devrait écraser facilement sans résistance croquante, donnant comme de la cire ramollie. Crunch signifie que la base a besoin de plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Ajouter les tomates et l'agrodolce",
      "inputs": [
        "agrodolce_base",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "ghiotta_sauce",
      "instructions": "Ajouter les tomates cerises, les olives et les câpres rincées dans la poêle. Incorporer et cuire 3 minutes jusqu'à ce que les tomates commencent à se décomposer et à libérer leur jus. Dans un petit bol, dissoudre le sucre dans le vinaigre de vin, puis verser sur la poêle. Mélanger. La sauce sentira immédiatement vif et lumineux du vinaigre. Laisser mijoter de 4 à 5 minutes jusqu'à ce que la sauce s'épaississe légèrement et que le bord aigu du vinaigre cru se mêle à quelque chose de doux et arrondi.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge rouille vive, légèrement sirupeuse, parsemée d'olives, de câpres et de tomates effondrées. La sauce tient sa forme lorsqu'elle est poussée avec une cuillère et mijote d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, le vinaigre encore aiguisé et cru, les tomates à peine cassées. Il sent plus le vinaigre qu'une sauce.",
            "action": "Laisser mijoter encore 4 minutes, à découvert. L'eau des tomates doit s'évaporer."
          },
          {
            "state": "Perfect",
            "description": "L'agro-dolce est équilibrée — la douceur du vinaigre présent mais arrondi, la douceur du sucre et des raisins en dessous, la saumure des câpres et des olives en avant. La sauce a la consistance d'une confiture molle.",
            "action": "Replacez l'espadon dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à une pâte épaisse et très sucrée qui s'accroche fortement à la poêle. La luminosité du vinaigre est disparue, remplacée par une douceur qui cloie.",
            "action": "Ajouter une touche d'eau et quelques gouttes de vinaigre pour ramener la luminosité avant d'ajouter le poisson."
          }
        ]
      },
      "feelCue": "Plonger une cuillère dans la sauce et siroter — il devrait d'abord frapper doux, puis aigre arrive derrière, puis la saumure d'olive et câpres terre salée à l'arrière du palais. Si la séquence s'effondre dans une seule note plate, elle doit être ajustée."
    },
    {
      "nodeId": "step_4",
      "action": "Brise et finition",
      "inputs": [
        "ghiotta_sauce",
        "seared_swordfish",
        "ing_12"
      ],
      "outputState": "finished_ghiotta",
      "instructions": "Nettoyez les steaks d'espadon dans la sauce, en cuillant une sauce sur le dessus de chacun. Couvrir la poêle et brasser à feu doux pendant 6-8 minutes, selon l'épaisseur. La sauce vaporisera doucement le poisson d'en haut pendant que la chaleur résiduelle d'en bas finit l'intérieur. Couvrez-vous et vérifiez : les poissons devraient être à peine opaques dans l'ensemble, toujours légèrement en rendement au centre même. Ne pas trop cuire — l'espadon sèche rapidement. Cuire les feuilles de menthe fraîche sur le dessus et servir de la poêle.",
      "visualCue": {
        "primaryTarget": "L'espadon est entièrement opaque et à peine serti, la sauce enrobant le dessus d'une couche de rouge et de vert brillant et de bijou. Les feuilles fraîches de menthe éclairent la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de l'espadon est encore translucide et frais. La chair résiste à l'éclaboussure lorsqu'elle est délicate.",
            "action": "Remplacer le couvercle et cuire encore 2 minutes. Testez à nouveau — l'espadon va de sous - mort à la perfection très rapidement."
          },
          {
            "state": "Perfect",
            "description": "L'espadon est uniformément ivoire-opaque partout, donnant à la pression douce d'une cuillère. La chair se sépare en grands flocons propres. La sauce a teint la surface d'une rouille vive.",
            "action": "Retirer du feu, déchirer la menthe sur le dessus et servir."
          },
          {
            "state": "Overdone",
            "description": "L'espadon est sec et ferme, en petits morceaux serrés. La texture est passée de viande à granulaire.",
            "action": "Servir avec de la sauce supplémentaire cuillerée généreusement sur le dessus. L'agrodolce fournira de l'humidité. Sourdough sur le côté aide."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre d'un steak d'espadon d'un doigt — il devrait donner comme presser un morceau épais de poitrine de poulet cuite, légèrement plus ferme que cru, mais loin de rigide. Si votre doigt rebondit, le poisson est fait; s'il coule sans résistance, il a besoin de plus de temps."
    }
  ]
};
