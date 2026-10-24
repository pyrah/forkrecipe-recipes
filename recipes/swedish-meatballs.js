export default {
  "repoId": "master_scandinavian_swedish_meatballs_001",
  "parentRepoId": null,
  "slug": "swedish-meatballs",
  "author": "ForkRecipe Kitchen",
  "title": "Boules de viande suédoises (Köttbullar)",
  "description": "Petits, parfaitement ronds et cousues à une croûte d'acajou, ces boulettes de viande sont à moitié de porc, à moitié de bœuf, liées à des miettes de pain à la crème et épicées avec de l'aspice et du poivre blanc.",
  "cuisine": "Scandinave",
  "culture": "Suédois",
  "category": "proteins",
  "tags": [
    "suédois",
    "boulettes de viande",
    "crème-sauce",
    "confort",
    "Boeuf de porc"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 2190,
  "forks": 267,
  "contributors": 35,
  "license": "CC-BY-SA",
  "createdAt": "2024-12-01",
  "updatedAt": "2025-12-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Boeuf haché (20% de matières grasses)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "tous les porques",
        "dinde hachée (moins riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc haché",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Fil d'Ariane trempé dans la crème lourde",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "pain blanc d'un jour imbibé de lait"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, râpé ou haché très fin",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre blanc et tout-puits",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "muscade et poivre noir"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème lourde et viande bovine (pour sauce)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "crème aigre éclaircie avec le stock"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Farine à usage général (pour la sauce rouge)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Mélange de farine sans gluten"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "meatball_mixture",
      "instructions": "Dans un grand bol, mélanger le boeuf moulu, le porc moulu, la chapelure à la crème, l'oignon râpé, l'Allspice, le poivre blanc et une pincée généreuse de sel. Mélanger à la main jusqu'à ce qu'il soit simplement combiné — ne pas surcharger le mélange ou les boulettes de viande deviendront denses et serrées plutôt que tendres. Testez une petite boule en la faisant frire dans une poêle chaude pendant 2 minutes et dégustez pour assaisonner. Régler l'assaisonnement du mélange brut en conséquence.",
      "visualCue": {
        "primaryTarget": "Un mélange de viande rose pâle, uniformément texturé, sans morceaux de chapelure blanche visiblement non mélangés ni poches d'épices sèches. Cohésif mais lâche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange n'est pas entièrement combiné — des stries de bœuf pur et de porc pur sont visibles. Les morceaux de chapelure blanche n'ont pas été intégrés. Le goût sera inégal dans les boulettes de viande.",
            "action": "Mélanger davantage avec vos mains, presser entre vos doigts pour se combiner complètement. Arrêtez dès l'uniforme."
          },
          {
            "state": "Perfect",
            "description": "Mélange uniforme rose pâle qui tient une forme de boule lorsqu'elle est roulée mais n'est pas serrée ou dense. Pas de morceaux visibles ou de portions non mélangées. Ça sent le tout et l'oignon.",
            "action": "Rouler en boules d'environ 2,5cm de diamètre. Réfrigérer 15 minutes avant la cuisson pour les aider à tenir leur forme."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été surmené et se sent serré et collant. Il s'éloigne du bol en une seule masse caoutchouteuse. Les protéines graisseuses ont été émulsifiées trop étroitement.",
            "action": "Procéder, mais les boulettes de viande finales seront plus denses et plus comme la saucisse que la texture tendre traditionnelle."
          }
        ]
      },
      "feelCue": "Le mélange de boulettes de viande doit se sentir frais, doux et légèrement collant entre vos paumes quand vous le roulez — comme travailler avec de l'argile légèrement humide qui tient sa forme lorsque vous arrêtez de presser."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "meatball_mixture",
        "ing_07"
      ],
      "outputState": "seared_meatballs",
      "instructions": "Faire fondre le beurre dans une casserole large, à fond lourd, à feu moyen-vif jusqu'à ce qu'il mousse puis commence à s'effondrer. Ajouter les boulettes de viande en une seule couche — ne pas fouler; travailler en lots si nécessaire. Agiter doucement la poêle après 90 secondes pour rouler les boulettes de viande sur un nouveau visage — leur forme ronde leur permet de s'autoroter avec un tremblement. Continuer à agiter et rouler toutes les 60 à 90 secondes pendant 6 à 8 minutes au total jusqu'à ce qu'il soit uniformément doré. Ne pas utiliser une cuillère pour les tourner; agiter préserve leur forme ronde.",
      "visualCue": {
        "primaryTarget": "Un brun d'or uniformément foncé partout sans taches pâles. Les boulettes de viande sont rigides et tiennent leur forme ronde lorsque la poêle est secouée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les boulettes de viande sont dorées pâles ou blondes sur leurs côtés brunis. Ils sont encore doux et se déforment légèrement lorsque la poêle est secouée.",
            "action": "Continuer à feu moyen-élevé. La surface doit atteindre une bonne croûte Maillard avant qu'elle ne se libère proprement de la poêle."
          },
          {
            "state": "Perfect",
            "description": "Toutes les boulettes de viande ont une couleur brun-ambre profonde partout sans taches pâles. Rigide et rond quand secoué. Les jus qui se sont échappés dans la poêle sont d'ambre foncé et parfumés de viande et de beurre.",
            "action": "Retirer les boulettes de viande et réserver. Déglacer la poêle pour la sauce sans la nettoyer."
          },
          {
            "state": "Overdone",
            "description": "Les boulettes de viande sont brun foncé à noir sur au moins un visage. Une forte odeur carbonisée. Ils ont peut-être craqué de trop de chaleur.",
            "action": "Supprimer immédiatement. L'intérieur est probablement bien. La sauce couvrira la couleur extérieure, et le fond sombre ajoute de la saveur à la sauce si vous déglacez soigneusement."
          }
        ]
      },
      "feelCue": "Lorsque les boulettes de viande sont prêtes à se libérer de la poêle, elles le font avec une faible «pop» comme le vide de la croûte se brise. Essayez de rouler l'un avec une cuillère — si elle glisse doucement à travers la poêle en une seule pièce, la croûte s'est mise."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "seared_meatballs",
        "ing_06"
      ],
      "outputState": "cream_gravy",
      "instructions": "Dans la poêle à boulettes avec son fond intact, faire fondre un petit bouton de beurre. Ajouter une cuillère à soupe de farine et cuire 1 minute, en remuant constamment dans le fond pour faire un roux. Peu à peu fouetter dans le stock de bœuf, raclant tout le fond sombre. Porter à mijoter, puis mélanger la crème lourde. Laisser mijoter 5 minutes jusqu'à ce que la sauce soit assez épaisse pour enrober une cuillère. Assaisonner avec du sel, du poivre blanc et un soupçon de sauce soja pour la profondeur.",
      "visualCue": {
        "primaryTarget": "Une sauce lustrée, pâle-ambrée qui enveloppe l'arrière d'une cuillère dans une couche mince et uniforme. La surface montre une mijotée douce et lente avec de minuscules bulles aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gravy est mince et aqueuse, en courant une cuillère dans un ruisseau rapide. La farine ne l'a pas encore épaissie. La farine crue a un goût détectable.",
            "action": "Laisser mijoter encore 3 à 5 minutes, en remuant constamment. Si elle est encore mince après 8 minutes, mélanger une cuillère à café d'amidon de maïs avec de l'eau froide et fouetter."
          },
          {
            "state": "Perfect",
            "description": "Gravy enveloppe une cuillère uniformément et s'enfuit lentement. Lorsque vous penchez la casserole, elle se déplace comme une feuille cohésive plutôt que comme de l'eau. La couleur est un ambre d'or chaud issu du stock de bœuf et du fond. L'arôme est savoureux, crémeux et profondément charnu.",
            "action": "Retournez les boulettes de viande dans la sauce et faites chauffer pendant 3 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Gravy a réduit la consistance de la sauce passée à une pâte épaisse et collante qui fond sur une cuillère. L'arôme est très concentré et peut être trop salé.",
            "action": "fouetter en bouillon de boeuf ou crème supplémentaire pour rétablir l'uniformité."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la sauce chaude et frottez votre pouce dessus — la sauce devrait s'accrocher à votre bout de doigt dans un film mince et huileux qui ne coule pas immédiatement. Il doit se sentir riche, pas aqueux, et laisser un léger résidu gras sur votre peau."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "seared_meatballs",
        "cream_gravy"
      ],
      "outputState": "finished_swedish_meatballs",
      "instructions": "Retournez toutes les boulettes de viande dans la sauce à la crème. Laisser mijoter doucement à feu doux pendant 5 minutes pour chauffer et permettre aux boulettes de viande d'absorber une partie de la saveur de sauce. Ne pas faire bouillir — une chaleur élevée resserre les boulettes de viande et fait casser la sauce. Servir sur les nouilles d'œufs, la purée de pommes de terre ou la confiture de lingonberry à côté, avec une garniture d'aneth fraîche.",
      "visualCue": {
        "primaryTarget": "Les boulettes de viande sont entièrement enrobées d'une sauce ambre pâle et brillante. Lorsqu'il est coupé en deux, l'intérieur est uniformément cuit — pas de rose au centre. Les jus sont dégagés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de boulettes de viande est encore rose ou rose gris. Les jus sont légèrement rouges lorsqu'ils sont coupés. La température intérieure n'a pas atteint 70°C.",
            "action": "Continuer à mijoter dans la sauce pendant encore 3-4 minutes à feu doux. Le mijot doux fera cuire l'intérieur sans durcir l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "Cuisez uniformément jusqu'à un brun gris juteux pâle. En coupe, l'intérieur est tendre et humide. La sauce s'accroche à la surface de coupe. Le toutspice et le poivre blanc sont détectables mais non dominants.",
            "action": "Servir immédiatement. Les boulettes de viande dans la sauce crème refroidissent rapidement et la texture change significativement au fur et à mesure que la graisse se solidifie."
          },
          {
            "state": "Overdone",
            "description": "Les boulettes de viande se sont serrées et sont devenues caoutchouteuses. L'intérieur est sec et la viande a commencé à s'éloigner de la surface. La sauce s'est réduite et épaissie autour d'eux.",
            "action": "Ajouter une touche de crème et un bouton de beurre à la sauce et servir avec de la sauce supplémentaire sur chaque portion pour compenser la texture sèche."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur une boule de viande avec l'arrière d'une cuillère — elle devrait produire légèrement sous pression comme un champignon ferme, puis ressortez à mi-chemin quand vous relâchez. Plein retour de printemps signifie sous-cuisson; aucun retour de printemps signifie surcuisson."
    }
  ]
};
