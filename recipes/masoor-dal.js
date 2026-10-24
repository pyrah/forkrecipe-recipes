export default {
  "repoId": "master_indian_masoor_dal_001",
  "parentRepoId": null,
  "slug": "masoor-dal",
  "author": "ForkRecipe Kitchen",
  "title": "Masoor Dal (Soupe de lentilles rouges)",
  "description": "Coupez les lentilles rouges qui fondent en soie dorée en moins de trente minutes, puis rencontrez une tarka de graines de moutarde, de cumin et de chili séché qui frappe la surface avec un sifflement et un arôme qui remplit la cuisine avant que la cuillère atteigne le bol.",
  "cuisine": "Indiens",
  "culture": "Bengali",
  "category": "grains",
  "tags": [
    "indienne",
    "lentilles",
    "végétalien",
    "Vite",
    "tous les jours"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 1542,
  "forks": 178,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-30",
  "updatedAt": "2025-04-12",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Lentilles fendues rouges (masoor dal), rincées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "lentilles fendues jaunes (chana dal)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Tomates de ripe, hachées approximativement",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates coupées en dés en conserve"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, finement haché",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâte gingembre-ail",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Epices de Tarka (graines de moutarde, graines de cumin, chili rouge séché, curcuma)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de moutarde ou de ghee (pour la tarka)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert",
        "poudre d'amchur"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04"
      ],
      "outputState": "cooked_dal",
      "instructions": "Mélanger les lentilles rincées, les tomates, la pâte gingembre-ail et 2,5 parties d'eau dans une casserole moyenne. Ajouter une pincée de curcuma. Porter à ébullition à feu moyen-vif, puis laisser mijoter modérément. Cuire à découvert pendant 15 à 20 minutes, en remuant occasionnellement, jusqu'à ce que les lentilles soient complètement dissoutes dans les tomates et que le mélange soit épais et lisse. Les lentilles passeront du rouge orangé au jaune doré lorsqu'elles cuireont.",
      "visualCue": {
        "primaryTarget": "Le dal est uniformément lisse et jaune doré sans lentilles distinctes visibles. La consistance est entre une soupe épaisse et un porridge — il coule lentement d'une cuillère agitée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles individuelles sont toujours visibles et tiennent leur forme. Le liquide est mince et rouge-orange, avec une texture grainée plutôt que lisse.",
            "action": "Continuer à mijoter à découvert pendant 5 à 8 minutes. Remuer pour éviter de coller. Les lentilles se dissolvent rapidement dès qu'elles atteignent la température."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse et dorée — aucune forme visible de lentilles. Suffisamment épais pour bomber légèrement lorsqu'une cuillère est traînée à travers la surface. Il sent légèrement la tomate cuite et la terre.",
            "action": "Assaisonner de sel. La tarka ira sur le dessus — faire préparer l'huile et les épices avant la prochaine étape."
          },
          {
            "state": "Overdone",
            "description": "Dal est très épais et collant au fond de la poêle, produisant une odeur brûlée. Il a la consistance de la purée de pommes de terre.",
            "action": "Ajouter 60ml d'eau et remuer vigoureusement, racler le fond. Finissez à la consistance souhaitée et réduisez immédiatement la chaleur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère sur la surface du dal cuit — le sentier devrait se remplir lentement en 3-4 secondes. Trop rapide et trop mince; si elle est rigide, elle est trop épaisse."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "ing_05",
        "ing_06"
      ],
      "outputState": "tarka",
      "instructions": "Dans une petite poêle ou une louche, faire chauffer l'huile de moutarde à feu vif jusqu'à ce qu'elle commence à fumer légèrement (le point de fumage neutralise le goût cru sévère de l'huile de moutarde). Ajouter les graines de moutarde et attendre qu'elles éclatent. Ajouter les graines de cumin — elles s'assombriront en 10 secondes. Ajouter le chili rouge séché et faire frire pendant 5 secondes. La tarka entière se produit en moins de 30 secondes — toutes les épices sont mesurées et prêtes avant de chauffer l'huile.",
      "visualCue": {
        "primaryTarget": "L'huile est chatoyante, les graines de moutarde surgissent audiblement, les graines de cumin sont brun foncé et parfumées, et le chili a soufflé et s'est légèrement obscurci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile n'est pas assez chaude — les graines coulent et s'assoient tranquillement dans l'huile plutôt que de sauter. Le tarka sentira cru et huileux plutôt que grillé.",
            "action": "Attendez que l'huile atteigne le point de fumage. La chaleur élevée est obligatoire pour la bonne tarka — le tempérament à faible chaleur produit une saveur plate et grasse."
          },
          {
            "state": "Perfect",
            "description": "Les graines de moutarde poussent vigoureusement comme de minuscules pétards. Les graines de cumin sont brun-or foncé et remplissent la cuisine d'un arôme de noix grillé. Le Chili s'est élargi et a obscurci.",
            "action": "Versez immédiatement sur le dal — ne tardez pas. Les épices continuent à cuire dans l'huile résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Les graines de moutarde ont cessé de sauter et sont carbonisées. Cumin est noir. Le Chili est noirci et fume. La tarka sent amer et acride.",
            "action": "Jeter et recommencer. La tarka brûlée ruinera le dal: l'amertume acride ne peut être masquée."
          }
        ]
      },
      "feelCue": "Vous devriez entendre la tarka avant de la voir — la pop agressive et le craquement des graines de moutarde dans l'huile très chaude est indiscutable et devrait commencer dans les 3 à 5 secondes après que les graines ont frappé l'huile."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "cooked_dal",
        "tarka",
        "ing_03",
        "ing_07"
      ],
      "outputState": "finished_masoor_dal",
      "instructions": "Dans le même pot de dal, si l'oignon cru le fait sauter jusqu'à ce qu'il soit doré dans 1 c. à soupe, puis le combiner avec le dal. Verser la tarka étourdissante directement sur la surface du dal en un seul mouvement décisif. Le pétrole frappera le dal avec un sifflement dramatique. Incorporer. Ajouter le jus de citron, goûter et ajuster le sel. L'acidité éclaire et soulève le plat entier — l'ajouter à la fin, jamais pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Le dal doré a maintenant des tourbillons d'huile aromatique foncée à la surface, parsemé de graines de cumin visibles, de morceaux de chili et de graines de moutarde soufflées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dal semble inchangé — le tarka n'était pas assez chaud lorsqu'il a été versé et a coulé sans réaction visible. Le dal sent comme des lentilles cuites.",
            "action": "Si la tarka refroidit avant de verser, réchauffer le dal et faire une tarka fraîche. L'huile froide et les épices ne fleuriront pas correctement dans le dal."
          },
          {
            "state": "Perfect",
            "description": "La surface montre un éclat aromatique vif avec un paysage complexe d'épices. Un mélange libère une fleur de parfum chaud, grillé et fumé. La saveur est profonde, équilibrée et lumineuse avec du citron.",
            "action": "Servir immédiatement dans des bols avec du riz à la vapeur. Le parfum de tarka se dissipe en quelques minutes."
          },
          {
            "state": "Overdone",
            "description": "Trop de jus de citron ajouté — le dal goûte agressivement aigre et l'équilibre des épices est noyé. La couleur s'est déplacée vers le bronzage de l'acide.",
            "action": "Ajouter une petite pincée de sucre et du sel supplémentaire pour rééquilibrer. Un petit bouton de beurre lisse aussi la netteté."
          }
        ]
      },
      "feelCue": "Au moment où la tarka frappe le dal, la cuisine doit inonder d'une vague de fragrance: cumin grillé, chili fumé et punch herbacé de moutarde. Si l'arôme est plat, la tarka n'était pas assez chaude."
    }
  ]
};
