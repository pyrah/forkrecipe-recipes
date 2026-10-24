export default {
  "repoId": "master_french_jerusalem_artichoke_soup_001",
  "parentRepoId": null,
  "slug": "jerusalem-artichoke-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe d'Artichaut de Jérusalem",
  "description": "Une soupe tranquille et captivante d'artichauts de Jérusalem rôtis se purifia dans un bisque d'ivoire pâle avec la douceur terreuse distincte de l'artichaut et du tournesol, approfondie par une base d'échalote et une touche soignée d'huile de truffes ou de noisette arrosée à la finale.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "vegetables",
  "tags": [
    "Jerusalem-artichaut",
    "Soupe",
    "français",
    "hiver",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Artichauts de Jérusalem (sunchokes), frottés",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "panais (moins de saveur distinctive)",
        "céleriac"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, coupées en tranches",
      "ratioValue": 4,
      "defaultUnit": "shallots",
      "substitutions": [
        "un demi-oignon jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Stock de légumes, chaud",
      "ratioValue": 900,
      "defaultUnit": "ml",
      "substitutions": [
        "poulet (non végétarien, plus riche)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "crème fraîche",
        "crème d'avoine pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive (à rôtir)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché (demi-quantité)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile de truffe ou de noisettes (pour la finition)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Bonne huile d'olive"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Chives, finement cueillies",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Noisettes grillées, grossièrement broyées",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Échalotes croustillantes"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "roasted_artichokes",
      "instructions": "Préchauffer le four à 200 C (400 F). Coupez les artichauts de Jérusalem en morceaux d'environ 3 cm — pas besoin de peler, la peau porte de la saveur. Verser sur une plaque de cuisson les échalotes tranchées, les gousses d'ail non pelées, l'huile d'olive, les brins de thym et une généreuse pincée de sel. Faire cuire 25 à 30 minutes, tourner une fois, jusqu'à ce que les artichauts soient dorés sur les surfaces coupées, complètement tendres, et que les peaux soient légèrement ridées.",
      "visualCue": {
        "primaryTarget": "Pièces d'artichaut knobbly avec des surfaces coupées dorées caramélisées et des peaux légèrement ridées. Les échalotes et l'ail sont tendres et carbonisés aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les artichauts sont pâles, les visages coupés à peine colorés. Une pointe de couteau rencontre une résistance au centre.",
            "action": "Continuer le rôtissage — les sunchokes sous-rôtis font une soupe grise et fine avec aucune de la douceur caramel."
          },
          {
            "state": "Perfect",
            "description": "Deep doré-brun sur les faces planes coupées, peaux légèrement ridées, donnant complètement à une fourchette. La poêle sent le caramel doux et terreux et le thym.",
            "action": "Éteignez l'ail et transférez tout au mélangeur."
          },
          {
            "state": "Overdone",
            "description": "Certaines pièces sont très sombres et sèches aux bords. La peau est entièrement carbonisée sur certains.",
            "action": "Retirer les morceaux les plus carbonisés et continuer avec le reste. La soupe aura un bord amer plus prononcé — équilibre avec de la crème supplémentaire."
          }
        ]
      },
      "feelCue": "Prenez un morceau et appuyez entre le pouce et le doigt — il devrait s'effondrer complètement sans effort, comme une pomme de terre rôtie."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_06"
      ],
      "outputState": "butter_base",
      "instructions": "Pendant que les artichauts rôtissent, faire fondre le beurre dans une grande casserole à feu moyen-doux. Laisser mousser et cuire 2 à 3 minutes jusqu'à ce qu'il sente peu la noix — beurre bruit. Cela enrichit la base de la soupe.",
      "visualCue": {
        "primaryTarget": "Beurre doré pâle avec une mousse légère, qui commence juste à montrer des taches brun pâle dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre a à peine fondu et est encore jaune pâle. Pas de mousse, pas de noix.",
            "action": "Continuer la cuisson à feu moyen-doux — l'objectif est un léger bruit, pas du beurre fondu cru."
          },
          {
            "state": "Perfect",
            "description": "Or pâle, mousse, avec des premiers murmures d'arôme de noisette. Des taches brunes qui apparaissent.",
            "action": "Réserver la chaleur jusqu'à ce que les artichauts soient terminés."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est brun foncé et sent acride. Lait brûlé solide visible.",
            "action": "Jeter et commencer par du beurre frais — le beurre brûlé rendra la soupe amère."
          }
        ]
      },
      "feelCue": "Au moment où l'odeur de noix devient distincte — comme les noisettes grillées chaudes — le beurre est prêt. C'est une question de secondes à ce stade."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "roasted_artichokes",
        "butter_base",
        "ing_04"
      ],
      "outputState": "rough_puree",
      "instructions": "Pressez l'ail rôti de sa peau dans le mélangeur. Ajouter tous les artichauts rôtis, les échalotes et le beurre. Jeter les tiges de thym. Verser suffisamment de bouillon chaud pour couvrir les solides. Mélanger à haute vitesse pendant 2 à 3 minutes jusqu'à ce qu'il soit complètement lisse. Ajouter plus de stock pour atteindre une consistance entre la crème lourde et un porridge mince. Passer à travers un tamis à mailles fines pour un résultat exceptionnellement raffiné.",
      "visualCue": {
        "primaryTarget": "Une purée d'ivoire pâle uniformément lisse, sans morceaux ni fils fibreux. La couleur est un or doux et muet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles et des brins fibreux des peaux d'artichaut. La purée est grise et hétérogène.",
            "action": "Mélanger beaucoup plus longtemps, ou passer à travers un tamis fin pour enlever les fibres. La texture d'un velours doit être parfaitement lisse."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, or pâle, qui coule lentement du mélangeur. Goûte intensément d'artichaut torréfié doux avec une légère noisette.",
            "action": "Transférer dans une casserole et chauffer à feu doux."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est très aéré et a augmenté en volume. Une couche de mousse est posée sur le dessus.",
            "action": "Laisser reposer 5 minutes avant de procéder. N'essayez pas d'utiliser la soupe pendant qu'elle est mousseuse."
          }
        ]
      },
      "feelCue": "Frottez une goutte entre deux doigts – complètement lisse, comme de la crème du visage froid, sans particules râpées ni brins fibreux."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "rough_puree",
        "ing_05",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_jerusalem_artichoke_soup",
      "instructions": "Retournez la purée dans une casserole à feu doux. Incorporer la crème. Ajuster la consistance avec le stock supplémentaire si trop épais. Assaisonner soigneusement avec du sel et du poivre blanc. Ne pas faire bouillir après l'ajout de la crème. Déposer dans des bols chauds. Finissez chaque bol avec une fine bruine de truffes ou d'huile de noisettes, un peu de ciboulette et quelques noisettes concassées grillées.",
      "visualCue": {
        "primaryTarget": "Une soupe d'ivoire pâle et soyeuse dans un bol chaud. Un fil sombre de spirales d'huile traverse la surface. La ciboulette verte et les fragments de noisettes grillées offrent un contraste textural.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe est trop épaisse et est assise dans un dôme dans le bol. La crème n'a pas été incorporée et la surface est terne.",
            "action": "fouetter la crème complètement hors du feu, puis ajouter le stock en petites quantités pour se détendre à une consistance versable."
          },
          {
            "state": "Perfect",
            "description": "S'écoule doucement lorsque le bol est incliné. ivoire pâle, soyeux, avec une surface brillante de la crème. La bruine d'huile de truffe se trouve à la surface comme un anneau foncé. Sens de terre, caramel doux et thym. Les chips sont vert vif et frais.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La soupe était bouillie après l'ajout de la crème. La surface est brisée et granuleuse. La crème s'est fendue et la soupe a l'air caillée.",
            "action": "Mélanger brièvement avec un mélangeur d'immersion pour réémulsionner. Servir immédiatement."
          }
        ]
      },
      "feelCue": "La soupe doit se sentir riche et enrobée sur la langue, avec une longue finale terreuse et sucrée qui reste comme des légumes torréfiés chauds — pas fade ou mince."
    }
  ]
};
