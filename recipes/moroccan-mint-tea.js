export default {
  "repoId": "master_moroccan_moroccanminttea_001",
  "parentRepoId": null,
  "slug": "moroccan-mint-tea",
  "author": "ForkRecipe Kitchen",
  "title": "Thé à la menthe marocaine",
  "description": "Atay — thé vert de poudre imprégné d'un poing extravagant de menthe fraîche et versé d'une grande hauteur dans de petits verres pour construire une couronne de mousse, puis sucré jusqu'à ce qu'il goûte à la fois du jardin et du désert.",
  "cuisine": "Maroc",
  "culture": "Maghrebi",
  "category": "beverages",
  "tags": [
    "boisson",
    "végétalien",
    "Sans gluten",
    "menthe",
    "Maroc",
    "thé",
    "doux"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Thé vert à poudre (pâtes laminées)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "autre thé vert chinois",
        "Sac à thé à la menthe en dernier recours"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude, 80-85°C (non bouillante)",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Menthe fraîche, grosse grappe",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "nana menthe (la variété marocaine)",
        "menthe poivrée (utiliser moins — plus intense)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre (cane blanche ou sucre de roche)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "plus ou moins au goût — le thé marocain est intentionnellement très sucré"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Streep",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "brewed_tea",
      "instructions": "Placez les pastilles de thé en poudre dans une petite théière marocaine traditionnelle (ou toute théière). Verser environ 100 ml d'eau chaude sur le thé, tourner pendant 5 secondes, et verser immédiatement cette première eau de rinçage, ce qui « lave » le thé, en éliminant toute poussière et l'amertume vert vif qui ferait le thé astringent. Versez maintenant le reste de l'eau chaude sur le thé lavé. Steep pendant exactement 3 minutes. Plus longtemps et le thé devient amer et vif, accablant la menthe.",
      "visualCue": {
        "primaryTarget": "Une liqueur de thé vert doré pâle dans le pot, les boulettes de poudre enflaient et commencent tout juste à s'ouvrir aux coutures.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'alcool est très pâle et presque incolore. Les pastilles sont encore bien roulées.",
            "action": "Encore une minute. Le thé sous-extracté manque du corps pour tenir contre la menthe et le sucre."
          },
          {
            "state": "Perfect",
            "description": "Une couleur vert-ambre clair et pâle. Les pastilles ont gonflé et beaucoup ont ouvert en fragments de feuilles. Sens propre et légèrement végétal.",
            "action": "Ajouter immédiatement la menthe et le sucre."
          },
          {
            "state": "Overdone",
            "description": "Le thé est devenu brun-or foncé et sent aigu et tannique.",
            "action": "Diluer avec un jet d'eau chaude fraîche. Le thé vert surélevé devient astringent et ne peut pas être fixé par la menthe seule."
          }
        ]
      },
      "feelCue": "La vapeur de la casserole doit sentir propre et verte — comme l'herbe coupée après la pluie. Une odeur dure ou brûlée signifie que l'eau était trop chaude ou que le thé était trop profond."
    },
    {
      "nodeId": "step_2",
      "action": "Infuse",
      "inputs": [
        "brewed_tea",
        "ing_03",
        "ing_04"
      ],
      "outputState": "mint_tea",
      "instructions": "Emballez généreusement la menthe fraîche dans la théière — tiges, feuilles et tout. Le thé à la menthe marocaine utilise beaucoup plus de menthe qu'il ne semble raisonnable; la grappe devrait être assez grande pour farcir le pot presque plein. Ajouter le sucre directement dans la casserole. Placer sur le feu le plus bas possible ou simplement mettre le couvercle et laisser infuser la menthe dans le thé chaud pendant 2–3 minutes. Traditionnellement, un verre est versé de la théière, puis retourné à la casserole, trois fois — ce mélange et aérer le thé et dissout le sucre. Goûtez et ajustez la douceur — le thé marocain devrait goûter très sucré selon la plupart des normes.",
      "visualCue": {
        "primaryTarget": "Un thé vert doré aux feuilles de menthe visibles pressées contre les côtés du pot, et une couleur verte plus profonde et plus complexe que le thé uni.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'arôme de menthe est faible et le thé goûte encore principalement de thé vert avec peu de fraîcheur à la menthe.",
            "action": "Infuse encore 2 minutes. La menthe fraîche libère ses huiles plus lentement que séchée."
          },
          {
            "state": "Perfect",
            "description": "Un thé aromatique vibrant avec une douceur équilibrée et un caractère de menthe vif — refroidissement et réchauffement à la fois, avec le thé vert fournissant une colonne vertébrale herbacée.",
            "action": "Servir immédiatement en versant de hauteur."
          },
          {
            "state": "Overdone",
            "description": "La menthe a sur-infusion et le goût du thé de la médecine à base de plantes plutôt que la menthe fraîche. Une amertume un peu camphre.",
            "action": "Retirez la menthe maintenant, ou diluer avec un peu d'eau chaude fraîche pour adoucir l'intensité."
          }
        ]
      },
      "feelCue": "Le pot devrait se sentir chaud au berceau entre les deux mains — la coutume marocaine de tenir le verre chaud fait partie du rituel d'hospitalité."
    },
    {
      "nodeId": "step_3",
      "action": "Verser",
      "inputs": [
        "mint_tea"
      ],
      "outputState": "finished_moroccan_mint_tea",
      "instructions": "Tenez la théière haute au - dessus d'un petit verre — d'au moins 30 cm — et versez - la dans un cours d'eau mince et stable. La hauteur aérer le thé et construit la couronne traditionnelle de mousse sur le dessus. Cette mousse n'est pas fortuite; elle est un signe de qualité et de compétence du verseur. Remplir de petites lunettes sans manche environ deux tiers pleines. Ne pas remuer — la couche de mousse est le point. Servir immédiatement. Au Maroc, trois verres sont personnalisés : « le premier verre est aussi doux que la vie, le second aussi fort que l'amour, le troisième aussi amer que la mort ».",
      "visualCue": {
        "primaryTarget": "Un petit verre des deux tiers plein de thé vert ambre, surmonté d'un dôme de mousse fine et pâle formé par le haut vers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de mousse sur le dessus — la coulée était trop étroite et lente. Le thé a l'air plat.",
            "action": "Verser de plus grande hauteur dans un cours d'eau plus mince. La pression et l'aération créent la mousse."
          },
          {
            "state": "Perfect",
            "description": "Un thé vert doré avec un centimètre de mousse fine et persistante sur le dessus. L'arôme s'élève brusquement du verre — menthe, doux et légèrement végétal.",
            "action": "Servir immédiatement quand il fait chaud."
          },
          {
            "state": "Overdone",
            "description": "Le verre est surrempli et la mousse s'est répandue. Le thé est tiède de trop d'aération.",
            "action": "Servez ce que vous avez. Remplir les verres moins la prochaine fois — les deux tiers permettent la place pour la mousse."
          }
        ]
      },
      "feelCue": "Le verre devrait être presque trop chaud pour tenir — traditionnellement coupé dans les deux mains pour les réchauffer, ou tenu par la jante. La première gorgée doit être un éclat concentré de douceur de menthe."
    }
  ]
};
