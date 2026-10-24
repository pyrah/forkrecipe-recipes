export default {
  "repoId": "master_mexican_salsa_roja_001",
  "parentRepoId": null,
  "slug": "salsa-roja",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Roja",
  "description": "Tomates de Charred Roma et chilis séchés mélangés dans une salsa de table fumée et terreuse avec une colonne vertébrale torréfié profonde et une chaleur vive et persistante.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "sauces",
  "tags": [
    "salsa",
    "Mexique",
    "grillés",
    "tomates",
    "Chili",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 2,
    "bitter": 2,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Tomates roms (mûres, coupées en deux dans le sens de la longueur)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates mûres de vigne",
        "tomates cuites au feu en conserve"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Piments de guajillo séchés (tiges et graines enlevées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "ancho chili pour version plus légère"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chilies séchées (tiges enlevées)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "cayenne pour la chaleur seulement"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, coupé en quartiers épais",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Origan mexicain séché",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "épazote frais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre (pour friture)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Légumes-char",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "charred_vegetables",
      "instructions": "Chauffer à feu vif une poêle sèche en fonte comale ou lourde jusqu'à ce qu'elle commence à fumer. Déposer les moitiés de tomates coupées, les coins d'oignon et l'ail non pelé directement sur la surface sèche. Ne pas ajouter d'huile. Char tout: les tomates devraient développer des taches de vrai noir sur la face coupée et les peaux devraient blister et fendre; les coins d'oignon devraient char sur les bords et adoucir; l'ail devrait s'assombrir dans la peau et se sentir doux quand pressé. Tourner tout une ou deux fois et enlever comme il atteint le bon niveau de char. L'ail prendra environ 6-8 minutes, les tomates 5-7, l'oignon 8-10.",
      "visualCue": {
        "primaryTarget": "Les découpes de tomates sont un patchwork de peau noire carbonisée, cloquée et caramélisée. Les coins d'oignon sont adoucis et noircis à leur extrémité. L'ail est brun foncé et les gousses à l'intérieur sont dorées et douces lorsqu'elles sont pressées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes ne sont que légèrement colorés ou mous à la vapeur plutôt que grillés à l'omble. La salsa manquera de son épine dorsale fumée et douce.",
            "action": "Revenez au comal et appuyez fermement pour maximiser le contact. Résistez à les déplacer — l'omble nécessite un contact soutenu avec la surface chaude."
          },
          {
            "state": "Perfect",
            "description": "Les trois composants portent de l'omble noir visible à côté de la chair caramélisée et ramollie. La cuisine sent la fumée de bois et la tomate torréfié. Les gousses d'ail pelées sont dorées et complètement douces.",
            "action": "Transférer dans un mélangeur ou un molcajete avec le chili et procéder immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les tomates se sont complètement effondrées et se sont transformées en bouillies noires — trop carbonisées pour fournir un corps de tomate à la salsa.",
            "action": "Vous pouvez encore les utiliser — réduire ou omettre le sel et ajouter une tomate fraîche crue au mélangeur pour rétablir le corps et équilibrer l'amertume."
          }
        ]
      },
      "feelCue": "Appuyez sur la moitié de la tomate avec une cuillère : elle devrait donner facilement, la chair douce et vapeur sous un extérieur carbonisé. La gousse d'ail pressée dans sa peau doit apparaître comme une pâte dorée — aucune résistance."
    },
    {
      "nodeId": "step_2",
      "action": "Pilies de Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "toasted_chilies",
      "instructions": "Sur le même comal chaud, toast le guajillo séché et les piments árbol. Appuyez sur chaque plat de chili pendant 10-15 secondes de chaque côté en utilisant une spatule — vous voulez qu'ils bouffent légèrement, relâchez un parfum de chili grillé, et développez quelques taches plus foncées. Ne les charriez pas autant que les tomates; l'objectif est de réveiller leurs saveurs terreuses, séchées aux fruits et de les adoucir légèrement. Une fois grillé, trempez immédiatement dans de l'eau juste bouillie pendant 10 minutes pour réhydrater avant de mélanger. Égoutter et utiliser tel quel — il n'est pas nécessaire d'éloigner le liquide imbibé à moins qu'il ne soit très amer.",
      "visualCue": {
        "primaryTarget": "Les chilies ont soufflé légèrement et sentent la terre grillée, parfumée comme des fruits secs et de la fumée. Leur couleur s'est approfondie jusqu'à une acajou sombre et brillante. Après trempe, ils sont souples et déchirent facilement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis sont encore poussiéreux et raides, non gonflés ni parfumés. Ils goûteront plat et cru dans la salsa finie.",
            "action": "Pressez-les plus fermement sur le comal chaud et attendez le parfum de chili grillé incomparable avant de le retirer."
          },
          {
            "state": "Perfect",
            "description": "Puffé, brillant, parfumé. Après avoir trempé, ils se déchirent comme du cuir mouillé — souple sans raideur. L'odeur est complexe : grillée, fumée et fruitée.",
            "action": "Égoutter et ajouter au mélangeur avec les légumes carbonisés."
          },
          {
            "state": "Overdone",
            "description": "Les chilies sont noir carbonisé et sentent l'acride. L'eau de trempage sera amèrement désagréable et devrait être jetée.",
            "action": "Jeter et commencer par des chilis frais — le guajillo brûlé en particulier devient durement amer et ne peut être sauvé."
          }
        ]
      },
      "feelCue": "Un chili parfaitement réhydraté se plie dans les doigts sans craquer ni déchirer — il a la souplesse d'un chiffon humide et sent simultanément comme des raisins secs, du cuir et un feu de bois lointain."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "charred_vegetables",
        "toasted_chilies",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "blended_salsa",
      "instructions": "Peler l'ail de ses peaux carbonisées. Ajouter les tomates carbonisées (avec leurs peaux et les morceaux carbonisés), l'oignon, l'ail, les chilis égouttés et l'origan séché à un mélangeur. Mélanger à haute vitesse pendant 30-60 secondes — pas trop longtemps. Une grande salsa roja a une texture : des taches visibles de peau de chili, de petites poches de graines de tomate, une consistance légèrement grossière. Assaisonner de sel et ajouter le jus de lime. Bouche : Il doit être fumé, profond et terreux avec une finition acide brillante et présente mais pas une chaleur écrasante.",
      "visualCue": {
        "primaryTarget": "Salsa rouge brique profonde à presque noire avec une texture légèrement grossière et des taches visibles de peau de chili. Il se déverse dans un ruisseau lâche et écorcable, pas une purée lisse, pas un bouillon aqueux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop grossière et trop épaisse — les morceaux d'oignon et de tomate sont à peine décomposés, et la sauce manque de cohésion.",
            "action": "Pulse le mélangeur encore quelques fois pour décomposer les pièces plus grandes tout en conservant la texture."
          },
          {
            "state": "Perfect",
            "description": "Cohésif, légèrement grossier, un rouge-brique profond. Il enveloppe une puce uniformément et ne s'enfuit pas immédiatement. La couleur est complexe — rouge, brun et foncé — pas rouge plat.",
            "action": "Passer à l'étape de friture pour la floraison finale de saveur."
          },
          {
            "state": "Overdone",
            "description": "Mélange à une purée aérée complètement lisse, plus comme une soupe qu'une salsa. La texture a été perdue.",
            "action": "Vous pouvez toujours l'utiliser tel quel, mais appelez-le salsa taquera plutôt que salsa roja pour l'honnêteté."
          }
        ]
      },
      "feelCue": "La salsa mélangée doit se sentir légèrement râpée et substantielle lorsqu'elle est frottée entre les doigts — pas lisse comme une purée, pas aqueuse comme du jus. La chaleur des piments devrait arriver en bouche 2-3 secondes après la dégustation, pas immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Faire frire la salsa",
      "inputs": [
        "blended_salsa",
        "ing_09"
      ],
      "outputState": "finished_salsa_roja",
      "instructions": "Chauffer l'huile dans une casserole à feu moyen-élevé jusqu'à ce qu'elle mijote. Versez soigneusement la salsa mélangée — elle crachera et sifflera violemment. Mélanger et faire frire, en laissant la salsa tordre dans l'huile chaude pendant 3-5 minutes, en remuant fréquemment. Cette brève friture, appelée « freír la salsa », approfondit la couleur, concentre la saveur et intègre les bords bruts. La salsa va s'assombrir légèrement, réduire un peu, et développer une saveur plus unifiée, ronde. Goûtez encore pour le sel et la chaux.",
      "visualCue": {
        "primaryTarget": "La salsa a obscurci 1-2 nuances du mélange à une brique-rouge-brun plus profonde. Elle est activement étourdissante et saupoudrée dans l'huile, et l'arôme est torréfié et concentré plutôt que cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salsa a encore un goût vif et brut, le chili et la tomate n'ont pas été intégrés. Il ressemble à ce qu'il a fait lors du premier mélange.",
            "action": "Continuer à frire — la transformation prend les 3-5 minutes complètes de grésillage actif dans l'huile chaude."
          },
          {
            "state": "Perfect",
            "description": "Un peu plus foncé, unifié et rond — une saveur unique et cohésive plutôt que des notes distinctes de tomates, de chili et d'omble. L'odeur est profondément salée et torréfié.",
            "action": "Retirer du feu, refroidir légèrement et servir à la température ambiante comme salsa de table ou condiment de taco."
          },
          {
            "state": "Overdone",
            "description": "La salsa a été réduite à une pâte épaisse et commence à coller et à brûler au fond de la poêle. L'eau a cuit trop vite.",
            "action": "Ajouter une éclaboussure d'eau, remuer pour déglacer et desserrer, et réduire immédiatement la chaleur."
          }
        ]
      },
      "feelCue": "La salsa à frire devrait progressivement se calmer d'une violente crache à une bulle plus douce et plus lente. Quand il cesse de sonner comme une tempête de pluie et commence à sonner comme une mijote lente, le freír est fait."
    }
  ]
};
