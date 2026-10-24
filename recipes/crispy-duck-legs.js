export default {
  "repoId": "master_french_crispy_duck_legs_001",
  "parentRepoId": null,
  "slug": "crispy-duck-legs",
  "author": "ForkRecipe Kitchen",
  "title": "Jambes de canard croustillantes à inclination lente",
  "description": "Les jambes de canard guéries pendant la nuit avec du thym et du sel, puis rendues faibles et lentes jusqu'à ce que la graisse soit complètement liquide sous une peau qui éclate sur la première morsure — la tradition Gascon de la patience transformer l'une des coupes les plus riches de la cuisine en quelque chose d'impossiblement léger et croquant.",
  "cuisine": "Français",
  "culture": "Gazon",
  "category": "proteins",
  "tags": [
    "français",
    "canard",
    "gazon",
    "croustillant",
    "cuits lentement",
    "thym",
    "Ail",
    "confit-adjoint"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "10 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambes de canard, entières (jambes et cuisses)",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "romarin",
        "savoureux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail, coupées en deux",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Poivre noir, grossièrement craqué",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Fleur de sel",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Sel de maldon"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Feuilles de thym fraîches, dépouillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cure",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "cured_duck_legs",
      "instructions": "Noter la peau de canard dans un recoupement diagonal avec un couteau tranchant, couper la peau et la graisse mais pas la viande en dessous. Frottez les jambes avec du sel flocé, du poivre fissuré et du thym, pressez les herbes dans les marques. Coincer les moitiés d'ail et laisser les feuilles sous et autour des jambes dans un plat. Réfrigérer à découvert pendant la nuit (8-12 heures). Le sel puise l'humidité dans la peau et assaisonne la viande.",
      "visualCue": {
        "primaryTarget": "Après une nuit de durcissement, la peau est complètement sèche et légèrement rétrécie sur la couche grasse. Le motif de croisement est clairement visible et défini. L'humidité a été perlée et réabsorbée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 1 à 2 heures de traitement. La peau est encore humide et boiteuse.",
            "action": "Étendre le remède. Le repos de nuit est ce qui fait craquer la peau."
          },
          {
            "state": "Perfect",
            "description": "La peau est presque papereuse — sèche, légèrement raide, complètement mate. Les coupes croisées sont propres et ouvertes. On dirait que la surface a déjà été légèrement traitée.",
            "action": "Laisser passer à la température ambiante 30 minutes avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 24 heures, la surface est devenue assez dure et saline.",
            "action": "Éliminer l'excès de sel avec un chiffon sec et procéder."
          }
        ]
      },
      "feelCue": "Passez votre bout de doigt sur la peau guérie — il devrait sentir comme du papier parchemin sec. Toute étanchéité ou humidité signifie que la peau a besoin de plus de temps de réfrigération découvert pour sécher."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "cured_duck_legs"
      ],
      "outputState": "rendered_duck_legs",
      "instructions": "Placer les pattes de canard sur la peau dans une poêle froide, sèche et à l'épreuve du four. Ne pas préchauffer — le début du froid empêche la peau de se bouillir. Placer dans un four froid et tourner à 130 C (260 F). Cuire pendant 3-4 heures, côté peau pendant tout le temps. La graisse de canard s'en sortira graduellement; les jambes s'assiedront dans une piscine croissante de leur propre graisse dorée. Occasionnellement, inclinez la poêle et la cuillère de l'excès de graisse.",
      "visualCue": {
        "primaryTarget": "Après 3 heures, une généreuse piscine de graisse de canard doré s'est accumulée dans la poêle. La peau, visible aux bords de chaque jambe, est ambre mais pas encore dorée. La viande a commencé à tirer légèrement de l'os du pilon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Très peu de graisse dans la poêle. La peau semble encore blanche et grasse plutôt que transparente et rendue.",
            "action": "Continuer à 130 C. L'approche faible et lente ne peut être précipitée — la graisse a besoin de temps pour se liquéfier à travers toute la couche."
          },
          {
            "state": "Perfect",
            "description": "Grande piscine de graisse dorée. La peau aux bords est ambre et commence à se sentir ferme plutôt que douce. La viande tire librement de l'extrémité du pilon. La jambe a perdu peut-être 20 % de son volume initial.",
            "action": "Augmenter la chaleur pour croquer la peau."
          },
          {
            "state": "Overdone",
            "description": "La graisse a complètement rendu et la jambe de canard commence maintenant à frire dans sa propre graisse plutôt que de rendre. La peau brunit inégalement.",
            "action": "Déplacez-vous immédiatement à l'étape du croustillant à haute chaleur."
          }
        ]
      },
      "feelCue": "Après 3 heures de faible rendu, appuyez fermement sur la jambe — elle doit se sentir fléchissante et gigotée sous la peau, sans poches fermes de graisse solide restante. La graisse est maintenant toute liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "rendered_duck_legs"
      ],
      "outputState": "crispy_duck_legs",
      "instructions": "Verser la plupart de la graisse rendue dans un pot pour économiser. Augmenter le four à 220 C (425 F) ou, pour un maximum de contrôle, transférer les jambes dans une poêle fraîche et la peau croustillante vers le bas sur la cuisinière à feu moyen-élevé pendant 5–8 minutes. Veillez attentivement — l'objectif est une peau enflammée, dorée et non brûlée. Flip pour 2 minutes sur le côté viande.",
      "visualCue": {
        "primaryTarget": "La peau est une mahoganie dorée profonde et uniforme, non pas un or pâle, pas un brun foncé, mais l'ambre riche particulier de la peau de canard parfaitement rendue. Il semble visiblement sec et crépitant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or léger et légèrement douce. Le presser donne un peu au lieu de se briser.",
            "action": "Continuer à croquer: la peau doit perdre toute son humidité avant de se briser."
          },
          {
            "state": "Perfect",
            "description": "La peau est ambre-mahoganie profonde et complètement rigide lorsqu'elle est pressée avec une cuillère. Le taper fait un son creux. Le motif de croisement est encore visible mais doré.",
            "action": "Reposez-vous 3 minutes puis assaisonner avec la fleur de sel."
          },
          {
            "state": "Overdone",
            "description": "La peau est devenue très sombre et commence à ombrager. La graisse peut avoir brûlé.",
            "action": "Retirer immédiatement du feu. Trim les taches les plus sombres avec des ciseaux. La viande à l'intérieur est encore belle."
          }
        ]
      },
      "feelCue": "Appuyez sur la peau avec l'arrière d'une cuillère — une peau parfaitement rendue et croustillante de la jambe de canard ne fléchit ni ne donne. Il se brise légèrement sous pression, comme du verre mince."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "crispy_duck_legs",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_duck_legs",
      "instructions": "Reposez les pattes de canard pendant 3 minutes — juste assez pour que la cuisson se termine, pas assez longtemps pour que la peau s'échauffe et s'adoucisse. Saupoudrer de fleur de sel et de feuilles de thym fraîches. Servir immédiatement le côté peau avec les lentilles du Puy, les champignons sauvages sautés, ou une salade verte amère vêtue de la graisse de canard rendu.",
      "visualCue": {
        "primaryTarget": "Une jambe ambre profonde, une peau tendue et crépitante, avec les cristaux blancs de fleur de sel attrapant la lumière. Quelques feuilles de thym dispersées à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Arrosé trop rapidement après le four. La peau semble humide à la vapeur.",
            "action": "Laisser reposer 3 minutes sur un support, pas une plaque, donc l'air circule sous la peau."
          },
          {
            "state": "Perfect",
            "description": "La peau est encore crépitante et sèche, la fleur de sel n'est pas dissoute dans l'humidité. Le thym est parfumé par la chaleur résiduelle. La viande en dessous tire facilement de l'os.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop longtemps ou couvert. La peau est devenue douce.",
            "action": "Retournez dans une poêle très chaude pendant 90 secondes pour restaurer le craquelin."
          }
        ]
      },
      "feelCue": "Couper la peau à l'aide d'un couteau — il devrait faire une fissure nettement audible, et les morceaux devraient se briser plutôt que se plier. La viande ci-dessous devrait offrir une résistance légère et productive."
    }
  ]
};
