export default {
  "repoId": "master_japanese_japanesematchalatte_001",
  "parentRepoId": null,
  "slug": "japanese-matcha-latte",
  "author": "ForkRecipe Kitchen",
  "title": "Japonais Matcha Latte",
  "description": "Un matcha de qualité cérémonielle fouetté à une pâte de jade mousseuse avec quelques gouttes d'eau, puis noyé dans du lait d'avoine légèrement cuit à la vapeur — herbacé, légèrement amer et réchauffant, avec un bouchon de mousse qui tient le fantôme d'un motif de fouet de chasse.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "beverages",
  "tags": [
    "boisson",
    "végétalien",
    "sans produits laitiers",
    "matcha",
    "Japonais",
    "Latte",
    "cérémonie"
  ],
  "difficulty": 1,
  "activeTime": "8 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 0,
    "bitter": 3,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Poudre de matcha de qualité cérémonielle",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "matcha culinaire (plus amer, vert plus vif)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude, 70-75°C (ébullition du NOT)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait d'avoine, style barista",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "lait laitier entier",
        "lait d'amande (moins de mousse)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sirop d'érable ou sirop simple",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": [
        "Chérie",
        "agave pour végétalien"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "matcha_paste",
      "instructions": "Sirotez la poudre de matcha à travers une fine passoire directement dans un bol de céramique (chawan) chaud ou une tasse large — le tamisage se brise des touffes qui ne se dissoudreont jamais une fois le lait ajouté. Ajouter un jet d'eau de 70 à 75°C (environ 10 ml) et utiliser un chaînon de bambou (poisson de matcha) pour travailler la poudre dans une pâte lisse, presser et travailler les poils contre les touffes. Une fois qu'une pâte uniforme vert foncé se forme, verser dans le reste de l'eau et fouetter dans un mouvement rapide W ou M — non circulaire — pendant 20 à 30 secondes jusqu'à ce qu'une mousse dense et uniforme recouvre la surface et que le matcha passe du vert foncé à un jade lumineux et nuageux.",
      "visualCue": {
        "primaryTarget": "Une mousse jade-verte vive recouvrant toute la surface du bol, sans grumeaux vert foncé visible et sans poudre sèche aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des touffes vert foncé flottent ou s'assoient au fond. La poudre n'est pas complètement hydratée. La surface semble mate et striée.",
            "action": "Continuez à fouetter avec la W-motion pendant encore 20 secondes, en concentrant la poursuite sur les touffes visibles."
          },
          {
            "state": "Perfect",
            "description": "Une mousse de jade lumineuse et uniforme couvre toute la surface. Le matcha ci-dessous est complètement dissous et profondément coloré. Ça sent l'herbe et le frais.",
            "action": "Verser le lait d'avoine chaud immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La mousse s'est effondrée par un mouvement circulaire. Le matcha semble sombre et plat.",
            "action": "Il est bon de boire, mais moins visuellement. La prochaine fois, utilisez le W-motion et arrêtez quand la mousse se forme."
          }
        ]
      },
      "feelCue": "La température de l'eau compte énormément — au-dessus de 80°C, les catéchines du matcha deviennent amères et dures. À 70-75°C, le fouet ne libère que douceur et umami."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "ing_03"
      ],
      "outputState": "steamed_oat_milk",
      "instructions": "Chauffer le lait d'avoine dans une petite casserole à feu moyen, en remuant constamment, jusqu'à ce qu'il atteigne 60-65°C — vapeur, avec de minuscules bulles apparaissant autour des bords mais ne bouillant pas. Si vous avez une baguette de vapeur, la vapeur à la même température. Retirer du feu et mousser vigoureusement avec un freur de lait portatif pendant 20 à 30 secondes jusqu'à ce que le volume augmente d'un tiers et qu'un micromousse dense se forme sur le dessus. Le lait d'avoine de style barista contient des graisses supplémentaires qui l'aident à mousser - le lait d'avoine régulier moussera moins mais fonctionne toujours.",
      "visualCue": {
        "primaryTarget": "Un lait blanc pâle et crémeux avec une couche de micromousse dense et veloutée sur le dessus — de fines bulles, pas de grandes fentes, la surface se déplaçant lentement lorsqu'elle est inclinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est chaud mais sans mousse — il ressemble à du lait chaud sans texture.",
            "action": "Frotte avec le frère portatif pendant 20 secondes."
          },
          {
            "state": "Perfect",
            "description": "Une mousse brillante et épaisse qui s'accroche aux parois de la cruche. Le lait ci-dessous est vapeur et uniforme. La mousse coule lentement.",
            "action": "Versez immédiatement sur le matcha fouetté."
          },
          {
            "state": "Overdone",
            "description": "Le lait a bouilli — de grandes bulles et une odeur de lait brûlé. La mousse est fine et aqueuse.",
            "action": "Laisser refroidir légèrement et refermer. Le lait d'avoine bouilli perd sa douceur et sa capacité à mousser."
          }
        ]
      },
      "feelCue": "Le lait d'avoine barista bien broyé devrait se sentir presque épais de velours lorsqu'il est agité dans le pichet — lourd et lent, pas mince et slosy."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "matcha_paste",
        "steamed_oat_milk",
        "ing_04"
      ],
      "outputState": "finished_matcha_latte",
      "instructions": "Ajouter l'édulcorant au matcha fouetté dans le bol et mélanger brièvement. Tenez le bol de matcha ou versez-le dans une tasse chaude. Verser le lait d'avoine cuit à la vapeur dans un cours d'eau lent et stable d'une hauteur d'environ 10 cm, retenir la mousse avec une cuillère jusqu'au dernier moment, puis laisser couler la mousse sur le dessus. Le matcha et le lait tourneront ensemble dans un ombré de jade et de crème. Pour une présentation en couches, verser lentement le lait sur le dos d'une cuillère tenue à la surface pour les garder distincts. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Une boisson jade-verte profonde avec un bouchon en mousse blanc crème — ombré où le lait et le matcha se rencontrent, la surface légèrement bombée de mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le matcha et le lait n'ont pas intégré — des éviers vert foncé, la mousse blanche flotte séparément avec une dure ligne de séparation.",
            "action": "Mélanger doucement avec une cuillère une fois avant de boire. Les couches sont jolies mais destinées à être mélangées."
          },
          {
            "state": "Perfect",
            "description": "Un dégradé de jade à crème sans couture avec un dôme en mousse veloutée. L'arôme est herbacé et laiteux. La couleur du jade est vive et saturée.",
            "action": "Servir immédiatement — matcha oxyde et terne rapidement."
          },
          {
            "state": "Overdone",
            "description": "Le matcha est resté trop longtemps. La surface est brun-olive terne plutôt que jade vive et la mousse a dégonflé.",
            "action": "Mélanger et ajouter une pincée fraîche de matcha tamisé sur la mousse pour la couleur, puis servir."
          }
        ]
      },
      "feelCue": "La première gorgée devrait donner la douceur végétale du matcha et le corps rond crémeux du lait d'avoine simultanément — pas amer-alors-doux, mais unifié et doux dès le premier goût."
    }
  ]
};
