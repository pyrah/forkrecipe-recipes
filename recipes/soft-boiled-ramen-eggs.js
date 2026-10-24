export default {
  "repoId": "master_japanese_soft_boiled_ramen_eggs_001",
  "parentRepoId": null,
  "slug": "soft-boiled-ramen-eggs",
  "author": "ForkRecipe Kitchen",
  "title": "Ajitsuke Tamago",
  "description": "Oeufs mous avec un jaune jammy, à peine coupé, pelé et mariné pendant la nuit dans une tare de soja-mirin-sake jusqu'à ce que les blancs tachent l'ambre et les jaunes se transforment en un or flou et profondément salé.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "eggs",
  "tags": [
    "Légumes et légumes",
    "Japonais",
    "mariné",
    "huilé doux",
    "umami",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "13 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Gros œufs (froid du réfrigérateur)",
      "ratioValue": 6,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (koikuchi)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Vin de riz doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Kombu séché (5 cm pièce)",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau (à bouillir)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_07",
        "ing_01"
      ],
      "outputState": "soft_boiled_eggs",
      "instructions": "Portez un pot d'eau à ébullition vigoureuse et enroulée — suffisamment d'eau pour couvrir les œufs d'au moins 2 cm. Abaissez les œufs en un à la fois à l'aide d'une cuillère à fente ou d'une araignée, directement depuis le réfrigérateur (les oeufs froids dans l'eau bouillante donnent un timing plus prévisible). Faire bouillir à un mijotement constant de moyenne-élevée — pas une hurne furieuse qui fend les coquilles — pendant exactement 6 minutes et 30 secondes. Pendant ce temps, préparez un bain de glace dans un grand bol. Transférer immédiatement dans le bain de glace et refroidir au moins 5 minutes avant de peler.",
      "visualCue": {
        "primaryTarget": "Eau à ébullition régulière et modérée: bulles actives mais non violentes. Œufs entièrement submergés. Le minuteur est le véritable guide ici; les repères visuels pendant l'ébullition sont minimes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "En dessous de 6 minutes : les blancs seront placés à l'extérieur mais translucides et gelés près du jaune, trop lâches pour être pelés proprement.",
            "action": "Retourner à l'eau bouillante pendant 30 secondes d'accroissement et de glace chaque fois."
          },
          {
            "state": "Perfect",
            "description": "A 6 min 30 sec (à partir d'oeufs de réfrigérateur à froid) : blancs, tout simplement fermes, le jaune est jammy et profondément doré avec un centre liquide-doux qui donne sous pression douce. L'œuf tient sa forme mais le jaune tremble.",
            "action": "Transférer immédiatement dans le bain de glace pour arrêter toute cuisson."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 7 minutes : le centre du jaune commence à se fixer et à se raffermir, perdant la texture floue du jammy ; un anneau gris-vert pâle se formera autour du jaune à 9 minutes et plus.",
            "action": "Utilisez ces œufs à d'autres fins (œufs détestés, salade d'oeufs). Commencez un nouveau lot et le temps précisément."
          }
        ]
      },
      "feelCue": "Lorsque vous retirez l'œuf et pressez-le doucement à travers la coquille, le jaune devrait offrir presque aucune résistance — vous sentirez qu'il donne comme du beurre froid, un don doux qui vous dit que le centre est toujours défini-but-tender."
    },
    {
      "nodeId": "step_2",
      "action": "Peler",
      "inputs": [
        "soft_boiled_eggs"
      ],
      "outputState": "peeled_soft_boiled_eggs",
      "instructions": "Peler les œufs réfrigérés sous un mince jet d'eau courante froide. Casser la coquille partout en roulant doucement l'oeuf sur le comptoir, puis commencer à peler de l'extrémité large où la poche d'air est, glisser votre pouce sous la membrane. L'eau froide aide la membrane à se séparer du blanc proprement. Travaillez lentement — un blanc d'œuf de 6,5 minutes est mis mais plus délicat qu'un blanc dur. Séchage Pat avec du papier de cuisine quand c'est fait.",
      "visualCue": {
        "primaryTarget": "Une surface blanche d'œuf lisse et non blanchie, brillante, blanche d'ivoire, sans gouges ni larmes. Le blanc tient fermement sa forme ovale lorsqu'il est coupé dans la paume.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les larmes blanches que vous épluchez — des morceaux de blanc qui s'en vont avec la membrane de la coquille, laissant une surface pochée. L'œuf peut avoir été sous-froid ou pelé trop tôt.",
            "action": "Refroidir plus longtemps dans le bain de glace (jusqu'à 10 minutes) avant de tenter de peler les oeufs restants."
          },
          {
            "state": "Perfect",
            "description": "La coquille sort en gros morceaux avec la membrane intacte; le blanc est lisse, ferme et complètement opaque. Pas de collants entre la coquille et le blanc.",
            "action": "Séchez-vous et passez à la marinade."
          },
          {
            "state": "Overdone",
            "description": "La coquille colle agressivement et prend de grands morceaux de blanc avec elle — souvent causée par des oeufs très frais (faible pH) ou un refroidissement insuffisant. La surface de l'œuf est ravagée.",
            "action": "Les œufs frais se pelent toujours plus mal; utilisez des œufs âgés d'au moins une semaine. Une cuillère à café de bicarbonate de soude dans l'eau bouillante peut également aider."
          }
        ]
      },
      "feelCue": "Un ajitsuke bien pelé et bien refroidi doit se sentir ferme mais pas caoutchouteux dans la paume — compact, frais et lisse, comme une petite pierre polie."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "cooled_tare",
      "instructions": "Mélanger la sauce de soja, le mirin, le saké, l'eau et le kombu dans une petite casserole. Faire mijoter doucement à feu moyen et cuire 3 minutes pour faire cuire l'alcool du saké et laisser le kombu commencer à libérer ses glutamates. Retirez le kombu après 4 minutes au total (le kombu surélevé devient visqueux et amer). Refroidir complètement l'ivraie à température ambiante avant d'ajouter les œufs — ajouter des oeufs chauds à l'ivraie chaude fait cuire le jaune plus loin. La tare peut être préparée des heures à l'avance.",
      "visualCue": {
        "primaryTarget": "Un liquide foncé et brillant qui sent simultanément sucré et salé — le bord de l'alcool brut du saké devrait disparaître, remplacé par un parfum arrondi et chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tare sent l'alcool et le vif — le saké n'a pas complètement cuit. La couleur est pâle pour le rapport de soja utilisé.",
            "action": "Laisser mijoter encore 2 minutes jusqu'à ce que la note d'alcool vive disparaisse de la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, sent complexe: doux mirin caramel, soja salin, un murmure marin du kombu. Goûté intensément assaisonné — il devrait, comme il sera dilué par l'œuf blanc sur les heures.",
            "action": "Laisser refroidir complètement, enlever le kombu et ajouter les œufs pelés."
          },
          {
            "state": "Overdone",
            "description": "La tare a diminué de plus d'un tiers — maintenant très épaisse et enfermant les sucres de soja. Sensations brûlées plutôt que douces.",
            "action": "Ajouter de l'eau pour restaurer le volume et ajuster la salinité au goût."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans la tare refroidie – il devrait se sentir légèrement collant et enrober votre peau. Goûtez-le : agressifment salé et doux, presque écrasantement, ce qui est correct pour une marinade."
    },
    {
      "nodeId": "step_4",
      "action": "Marinaté",
      "inputs": [
        "peeled_soft_boiled_eggs",
        "cooled_tare"
      ],
      "outputState": "marinated_ramen_eggs",
      "instructions": "Placez les œufs pelés dans un sac à fermeture éclair ou dans un contenant à bourrelet suffisamment grand pour les retenir. Verser la tare refroidie sur les œufs et sceller le sac, presser l'air afin que la tare touche chaque surface de chaque oeuf. Réfrigérer pendant au moins 4 heures; la nuit (8 à 12 heures) est idéale. Ne dépassez pas 24 heures — le sel resserre le blanc à une texture caoutchouteuse et trop dense et le jaune perdra sa fugacité. Tourner le sac de temps en temps pour que tous les côtés marinent uniformément.",
      "visualCue": {
        "primaryTarget": "Après 8–12 heures: les blancs taillaient un brun-ambre profond et uniforme — la couleur du thé fort. Le jaune, lorsqu'il est tranché, est un orange-or profond au centre, jammy et scintillement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 4 heures : les blancs ne sont que légèrement teintés — bronzage pâle sur la couche externe, encore pour la plupart blancs en dessous. La pénétration de l'arôme est peu profonde.",
            "action": "Laisser au moins 4 heures de plus; la marinade prend le temps de pénétrer le blanc dense."
          },
          {
            "state": "Perfect",
            "description": "De 8 à 12 heures : extérieur ambré brillant, avec le blanc entièrement teinté. Couper pour révéler un centre de jaune jammy, brûlé-sienne qui brille et donne à la coupe. Le goût est profondément salé, légèrement sucré, sans goût d'oeuf cru.",
            "action": "Couper en longueur dans le centre avec un couteau tranchant ou un fil dentaire pour une présentation propre."
          },
          {
            "state": "Overdone",
            "description": "À 24 heures et plus: le blanc est devenu très sombre, presque noir à la surface, et a pris une texture spongieuse, presque squeaky de trop de sel. Le jaune a légèrement séché et a perdu son centre liquide.",
            "action": "Utilisez-les comme condiment ou coupez-les finement dans un bol de riz plutôt que de servir à moitié. La prochaine fois, tirez à 12 heures."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez l'oeuf mariné doucement dans le sac, le jaune doit encore se sentir céder — un doux repousse, comme appuyer sur une prune mûre à travers sa peau. S'il se sent uniformément ferme jusqu'au bout, le jaune s'est raffermi devant sa fenêtre."
    }
  ]
};
