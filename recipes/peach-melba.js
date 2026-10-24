export default {
  "repoId": "master_french_peach_melba_001",
  "parentRepoId": null,
  "slug": "peach-melba",
  "author": "ForkRecipe Kitchen",
  "title": "Pêche Melba",
  "description": "L'hommage d'Escoffier à une soprano — pêches mûres pochées entières dans du sirop de vanille jusqu'à ce qu'elles glissent de leur peau, mettent sur une quenelle de crème glacée froide vanille, et voilées dans une sauce crue framboise melba qui saigne sur les côtés du coupé.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "desserts",
  "tags": [
    "dessert",
    "français",
    "pêche",
    "framboise",
    "prix",
    "Fruits pochés",
    "glaces"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Pêches en pierre libre ridée mais ferme (entièrement)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "nectarines",
        "pêches jaunes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau (pour le sirop de pochage)",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour le sirop)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Haricots de vanille (splits et raclés)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé de vanille"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Citron (jus et pelure)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Framboises fraîches (pour la sauce melba)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "framboises congelées, dégelées"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre glacé (pour la sauce, au goût)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Meilleure crème glacée vanille",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "gelato vanille"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Amandes grillées",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Amandes liquéfiées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "vanilla_syrup",
      "instructions": "Mélanger l'eau et le sucre de caster dans une casserole juste assez large pour tenir les pêches correctement. Grattez les graines de vanille et déposez-les dans le gout, ajoutez la bande de l'écorce de citron et une pression du jus, et réchauffez à feu moyen, en remuant, jusqu'à ce que le sucre se dissout complètement. Portez à mijoter doucement afin que le sirop soit clair et parfumé avant que le fruit n'entre.",
      "visualCue": {
        "primaryTarget": "Un sirop clair, pâle, flanqué de graines de vanille, qui s'échauffe doucement avec de minuscules bulles montant au bord — pas de grains non dissous sur la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est nuageux et vous pouvez sentir des cristaux de sucre broyer quand vous remuez; il n'a pas encore vapeur.",
            "action": "Continuez à remuer sur le feu jusqu'à ce que chaque grain se dissout et que le liquide devienne vitreux et clair."
          },
          {
            "state": "Perfect",
            "description": "Sirop cristallin, faible parfum de vanille s'élevant à la vapeur, une mijotée paresseuse se brise à la surface.",
            "action": "Baisser la chaleur et glisser dans les pêches pour pocher."
          },
          {
            "state": "Overdone",
            "description": "Le sirop diminue durement et commence à épaissir ou à colorier les bords avant d'ajouter un fruit.",
            "action": "Ajouter un jet d'eau pour le ramener à une fine consistance de pochage et baisser la chaleur."
          }
        ]
      },
      "feelCue": "Plongez la cuillère et sentez-vous pour le grit — quand il traîne doucement sans résistance sablonneuse, le sucre est parti et le sirop est prêt."
    },
    {
      "nodeId": "step_2",
      "action": "Pocher",
      "inputs": [
        "vanilla_syrup",
        "ing_01"
      ],
      "outputState": "poached_peaches",
      "instructions": "Abaissez les pêches entières dans le sirop à peine mijotant, couvrez-les d'un tour de parchemin pour les garder submergés, et braquez doucement pendant 12-18 minutes selon la maturité, en tournant une fois. Ils se font lorsqu'un couteau à trier glisse dans la chair sans résistance. Soulevez - les, et une fois assez frais pour les manipuler, glissez - les sur les peaux — ils devraient les éplucher dans des draps. Couper et lapider, puis refroidir les pêches dans leur sirop.",
      "visualCue": {
        "primaryTarget": "Pèches tendres dont les peaux se cassent et se fendent, avec une pointe de couteau coulant à la pierre comme dans le beurre doux et aucun noyau ferme restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les peaux s'accrochent encore fermement et un couteau rencontre un noyau croquant et résistant près du centre.",
            "action": "Retournez-les au sirop et braconnez encore quelques minutes, testant à nouveau au point le plus épais."
          },
          {
            "state": "Perfect",
            "description": "Les peaux se détachent et glissent proprement, la chair est soyeuse et translucide au bord, un couteau glisse sur la pierre sans obstacle.",
            "action": "Soulevez, pelez, moitié et pierre, puis refroidissez les pêches submergées dans leur sirop."
          },
          {
            "state": "Overdone",
            "description": "Les pêches s'effondrent, s'effondrent et se brisent à mesure que vous les soulevez, la chair est immobile et sans forme.",
            "action": "Retirer à la fois et manipuler doucement; servir les plus doux cassés dans le coupé plutôt que comme des moitiés soignées."
          }
        ]
      },
      "feelCue": "Garder le sirop au murmure d'une mijotée, ne jamais faire bouillir — une ébullition dure écrase les fruits. La pêche devrait se rendre au couteau plutôt que de la combattre."
    },
    {
      "nodeId": "step_3",
      "action": "Purée",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_05"
      ],
      "outputState": "melba_sauce",
      "instructions": "Blitz les framboises avec le sucre glaçant et quelques gouttes de jus de citron à une purée lisse — sans cuisson, pour garder la couleur vive et la saveur fraîche. Passez-le dans un tamis fin, appuyez fort pour extraire chaque goutte et laisser les graines derrière. Goûtez et ajustez le sucre pour que la sauce soit sucrée mais encore lumineuse avec l'acidité. Refroidir jusqu'à froid.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante, intensément cramoisi, lisse et sans pépins, assez épaisse pour enrober une cuillère mais encore verser dans un ruban.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût vif et mince, ou est encore tachetée de graines et de pulpe pâle qui n'a pas été pressée.",
            "action": "Sieve encore plus fermement et fouetter dans un peu plus de sucre glace jusqu'à ce qu'il se termine sans perdre son tang."
          },
          {
            "state": "Perfect",
            "description": "Rubis profond, soyeux et sans pépins, équilibré entre sucré et tarte, tombant de la cuillère dans un ruban brillant.",
            "action": "Refroidissez la sauce jusqu'à ce que vous soyez prêt à l'assiette."
          },
          {
            "state": "Overdone",
            "description": "La sauce est fraîchement sucrée et terne, la luminosité framboise fraîche aplatie par trop de sucre.",
            "action": "Aiguisez-le avec quelques gouttes de jus de citron ou une poignée de baies fraîches concassées pour raviver l'acidité."
          }
        ]
      },
      "feelCue": "Appuyez sur la purée à travers le tamis jusqu'à ce qu'il ne reste plus que des graines sèches — l'arrière de la cuillère devrait sortir propre. La sauce finie sent uniquement la framboise fraîche, jamais cuite ni confiture."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "poached_peaches",
        "ing_08",
        "melba_sauce",
        "ing_09"
      ],
      "outputState": "finished_peach_melba",
      "instructions": "Refroidissez vos coupés ou lunettes peu profondes. Placez une généreuse boule de crème glacée à la vanille froide à la base de chacun, arrangez deux moitiés de pêche coupées sur le dessus, puis cuillerez la sauce melba froide sur le fruit afin qu'il saigne sur la crème glacée. Éparpiller avec des amandes grillées et servir à la fois, avant que la crème glacée commence à ramollir.",
      "visualCue": {
        "primaryTarget": "Une sauce cramoisi brillante qui coule sur une pêche dorée arrondie se sépare sur une ferme quenelle blanche de crème glacée, finie par un craquage d'amandes grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème glacée est rocailleuse et givrée, les pêches encore chaudes du sirop le fondant dans une flaque, sauce glissante trop fine.",
            "action": "Laissez la crème glacée refroidir une minute pour une cuillère propre et assurez-vous que les pêches sont entièrement réfrigérées avant de les poser."
          },
          {
            "state": "Perfect",
            "description": "Crème glacée froide et écorcable tenant sa forme, pêches glaciales fraîches, rubans de sauce rubis pooling à la base, amandes croustillantes sur le dessus.",
            "action": "Servir immédiatement pendant que tout est froid et le contraste est le plus net."
          },
          {
            "state": "Overdone",
            "description": "La crème glacée a fondu en soupe et le coupé entier est une piscine rose effilée avec les pêches qui s'enfoncent.",
            "action": "Conservez les coupés assemblés au congélateur pendant un moment seulement avant de servir."
          }
        ]
      },
      "feelCue": "Tout devrait se retrouver froid: la cuillère frappe une crème glacée ferme, donne de la pêche et refroidit la sauce en un seul coup. Servez l'instant où il est construit, tandis que la sauce coule encore et les amandes encore croquant."
    }
  ]
};
