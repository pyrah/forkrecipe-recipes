export default {
  "repoId": "master_lebanese_fattoush_001",
  "parentRepoId": null,
  "slug": "fattoush",
  "author": "ForkRecipe Kitchen",
  "title": "Groseille",
  "description": "Une salade croustillante et agitée de pain plat d'un jour grillée à éclater, jetée avec de la tomate, du concombre, du radis et des herbes sous un pansement qui frappe avec du sumac — l'épice fruitée de tarte qui teinte tout le bol une rose poussiéreuse et rend impossible l'arrêt de manger.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "vegetables",
  "tags": [
    "salade",
    "lébanèse",
    "Pita",
    "Sumac",
    "lévantine",
    "salade de pain",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pain pita d'un jour (2 rondelles)",
      "ratioValue": 2,
      "defaultUnit": "rounds",
      "substitutions": [
        "pain de lave",
        "tortillas de farine morte"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra-vierge (pour toaster pita)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Tomates à croquer, coupées en quartiers",
      "ratioValue": 3,
      "defaultUnit": "medium",
      "substitutions": [
        "tomates cerises, coupées en deux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Concombres perses, tranchés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "Concombre anglais, ensemencé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Radis rouges, tranchés en rondelles fines",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": [
        "radis de pastèque"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignons de printemps, coupés en tranches",
      "ratioValue": 4,
      "defaultUnit": "stalks",
      "substitutions": [
        "oignons rouges, tranchés finement et rincés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de persil à feuilles plates",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 0.25,
      "defaultUnit": "cup",
      "substitutions": [
        "menthe séchée (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (vêtements)",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Sumac au sol",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "zeste de citron + jus de citron supplémentaire (faible substitut)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Spice",
      "name": "Alep flocons de poivre (ou flocons de chili)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "flocons de chili rouge (utiliser la moitié du montant)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "pita_chips",
      "instructions": "Déchirez ou coupez les rondelles de pita en morceaux rugueux — environ 3-4 cm de travers, formes irrégulières bienvenues. Les bords radés deviennent les parties les plus croustillantes. Placez-les dans un bol, arrosez d'huile d'olive et jetez-les donc chaque pièce est légèrement enduite. Étaler sur une plaque de cuisson en une seule couche et cuire au four à 200 C (400 F) pendant 8-12 minutes, en tournant une fois à mi-chemin, jusqu'à ce qu'il soit doré et complètement rigide. Chaque pièce doit être entièrement grillée — celle qui reste douce se tournera pour bousculer le moment où le pansement s'y posera. Alternativement, les faire frire dans une piscine d'huile peu profonde dans une poêle à feu moyen-vif, en tournant fréquemment, pour un résultat plus riche et plus doré. Quoi qu'il en soit, ils devraient se briser, et non se plier. Laissez-les refroidir complètement avant d'ajouter à la salade — les croustilles chaudes vaporisent les légumes.",
      "visualCue": {
        "primaryTarget": "Des pitas brun-gol foncé, rigides et crépitants audiblement pressés. Pas de taches pâles ou molles. Ils ressemblent à des croûtons chers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces de pita sont en or clair et se plient légèrement sous pression. Ils se ramolliront quelques minutes après avoir touché la vinaigrette.",
            "action": "Retourner au four 3-4 minutes de plus. Ne soyez pas timide à propos de la couleur — les jetons pâles sont des jetons ensanglantés."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée partout. Assez rigide pour se casser proprement en cas de rupture. On dirait des craquelins cassés. L'odeur est grillée, noisette, légèrement carbonisée aux bords.",
            "action": "Laisser refroidir complètement sur la plaque de cuisson avant d'ajouter à la salade."
          },
          {
            "state": "Overdone",
            "description": "Les chips sont brun très foncé, avec quelques bords presque noirs. Une odeur amère. Bristé au point de se briser en miettes.",
            "action": "Jeter les pièces les plus sombres. Les brun clair du centre du plateau sont récupérables — ils ajouteront de la couleur mais avec une note légèrement amère."
          }
        ]
      },
      "feelCue": "Une puce de pita parfaitement grillée se rompt avec une touche nette et propre, comme casser un cracker, et l'odeur fraîche-cuite est chaude et noisette, avec ce parfum de croûte de pain de levure distinctif."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "sumac_dressing",
      "instructions": "Dans un petit bol ou un pot, mélanger le jus de citron, l'huile d'olive, le sumac, le sel et le poivre d'Alep. Frottez vigoureusement ou secouez le pot jusqu'à ce qu'il soit combiné — il n'émulsionnera pas complètement puisqu'il n'y a pas de liant, mais il devrait s'assembler dans un lisier mou et acidulé. Goûtez-le: il doit être amer (du citron et du sumac), fruité (le sumac est presque de qualité canneberge), et agréablement épicé de l'Alep. Sumac n'est pas seulement décoratif, c'est l'agent acide primaire à côté du citron et il tache tout ce qu'il touche une rose-rose poussiéreuse. Laissez la vinaigrette reposer pendant 5 minutes afin que le sumac puisse fleurir et adoucir légèrement dans l'acide.",
      "visualCue": {
        "primaryTarget": "Un pansement profond, légèrement opaque avec des particules visibles de sumac. Lorsqu'il est secoué, il se réunit brièvement avant de se séparer. La couleur est distinctive — indubitablement sumac.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette a un goût plat — pas assez de sumac ou de citron. On dirait une vinaigrette à huile de citron sans teinte rose caractéristique.",
            "action": "Ajouter une autre demi cuillère à café de sumac et presser plus de citron. Laissez-la encore 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Légère aigre, fruitée, profondément salée du sel, et avec une douce chaleur persistante de l'Alep. La couleur est une rose poussiéreuse distincte. Ça sent le zeste de citron et les baies séchées.",
            "action": "Verser sur la salade assemblée immédiatement avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Trop de sumac rend le pansement gritty, trop tannique, et sèche dans la bouche. L'aurore est agressive et unidimensionnelle.",
            "action": "Ajouter plus d'huile d'olive pour tempérer l'auresse et diluer la concentration de sumac. Plus d'huile le rend plus rond."
          }
        ]
      },
      "feelCue": "Un bout de doigt trempé dans la vinaigrette de sumac et goûté devrait produire une amerie aiguë qui frappe immédiatement, puis une chaleur fruitée qui persiste — comme l'impression laissée par la canneberge séchée, florale et tarte, pas dure."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "pita_chips",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "sumac_dressing"
      ],
      "outputState": "finished_fattoush",
      "instructions": "Dans un grand bol, mélanger les tomates, le concombre, les radis, les oignons de printemps, le persil et la menthe. Assaisonner les légumes avec une pincée de sel directement et jeter — cela dégage une petite quantité de jus qui rejoint la vinaigrette. Ajouter la vinaigrette de sumac et mélanger soigneusement, en veillant à ce que chaque légume soit enduit. Enfin, ajoutez les chips pita grillés et lancez une dernière fois — doucement, afin que les chips ne se brisent pas en miettes fines. Les chips doivent entrer immédiatement avant de servir, jamais avant. Fattoush n'attend personne : une fois que le pansement rencontre les chips, vous avez environ 10 minutes avant qu'ils perdent leur croquant. Servir dans le bol le plus large que vous possédez et manger immédiatement.",
      "visualCue": {
        "primaryTarget": "Une salade vive et de couleur bijou : quartiers de tomates rouges, concombre vert, radis rose, chips pita dorés, et le bol entier a pulvérisé une rose poussiéreuse de la vinaigrette sumac. Chaque élément brille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salade a l'air sèche — la vinaigrette n'a pas enrobé les légumes, et les chips pita sont assis sur une pile déshabillée.",
            "action": "Jeter plus soigneusement, soulever du bas. Ajouter une autre cuillère à soupe de vinaigrette si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Chaque légume brille avec de la vinaigrette. Les croustilles sont encore croquantes et contrastent fortement avec les légumes juteux. La couleur est vive et variée. Il sent lumineux, tannant et à base de plantes simultanément.",
            "action": "Servir immédiatement — un délai de plus de 10 minutes est l'ennemi de cette salade."
          },
          {
            "state": "Overdone",
            "description": "Les chips de pita se sont adoucis et commencent à se dissoudre dans la vinaigrette. La salade semble boueuse plutôt que croquante. La texture est uniforme et douce.",
            "action": "Faites griller un lot frais de chips de pita et jetez-les à la table. Les légumes sont fins, seuls les chips sont perdus."
          }
        ]
      },
      "feelCue": "Une morsure parfaite de fattoush procure simultanément une croûte (pipe), une résistance (cucumber), un don doux (tomato) et un liquide de tarte vif (vêtements) — quatre textures et le sumac aigre-fruité tout d'un coup, finissant par la morsure fraîche de menthe fraîche."
    }
  ]
};
