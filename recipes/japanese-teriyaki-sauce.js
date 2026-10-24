export default {
  "repoId": "master_japanese_japaneseteriyakisauce_001",
  "parentRepoId": null,
  "slug": "japanese-teriyaki-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce japonaise Teriyaki",
  "description": "Un glaçure à quatre ingrédients réduit à une laque acajou – sauce soja, mirin, saké et sucre cuits ensemble jusqu'à ce qu'ils s'épaississent dans une sauce brillante et collante qui charde à une coquille de sel doux sur le poisson grillé ou le poulet.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "condiments",
  "tags": [
    "condiment",
    "végétalien",
    "Sans gluten",
    "soja",
    "Japonais",
    "glaçure",
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
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce soja (tamari sans gluten)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "aminos de noix de coco pour le sodium inférieur"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Gâteau sec",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec",
        "vinaigre de riz (réduire de moitié)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun pour une note de mélasse",
        "Chlorure de miel"
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
        "ing_03",
        "ing_04"
      ],
      "outputState": "reduced_teriyaki",
      "instructions": "Mélanger les quatre ingrédients dans une petite casserole lourde. Mélanger pour dissoudre le sucre. Porter à ébullition à feu moyen, puis laisser mijoter régulièrement. Cuire en remuant occasionnellement pendant 8 à 12 minutes. La sauce va buller vigoureusement au début, puis les bulles ralentiront et pousseront plus grand et plus visqueux comme elle diminue. Regardez attentivement ces dernières minutes — les sucres vont du sirop à la combustion très rapide. La sauce est faite quand elle enveloppe l'arrière d'une cuillère et une ligne tirée à travers elle avec un doigt tient propre pendant 2 secondes.",
      "visualCue": {
        "primaryTarget": "Une sauce acajou brillante et profonde qui enrobe la cuillère épaissement et tombe dans un ruban lent et non cassé plutôt que de s'écouler en gouttes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore aqueuse et pâle, dégoulinant la cuillère dans un ruisseau mince. Les bulles sont petites et rapides.",
            "action": "Continuez à mijoter. La sauce a besoin de plus de temps de réduction — la patience ici empêche une glaçure faible."
          },
          {
            "state": "Perfect",
            "description": "Dark, brillant, acajou-brun. Des chutes d'une cuillère dans un ruban lent et régulier. Le test en ligne dure 2 secondes. Des odeurs de soja caramélisé et de vin de riz sucré.",
            "action": "Retirer immédiatement du feu et laisser refroidir. Il s'épaissira encore plus en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "La sauce a réduit à une masse collante, presque solide qui sent le sucre brûlé et le caramel amer.",
            "action": "Ajouter 1-2 c. à soupe d'eau et remuer à feu doux pour dissoudre. Goût — si l'amertume est faible, elle est utilisable."
          }
        ]
      },
      "feelCue": "Au bon moment, la sauce enrobera la cuillère comme de la laque — vous pouvez sentir la viscosité et le poids ajoutés en remuant par rapport au liquide mince au début."
    },
    {
      "nodeId": "step_2",
      "action": "Frais",
      "inputs": [
        "reduced_teriyaki"
      ],
      "outputState": "finished_teriyaki_sauce",
      "instructions": "Verser la sauce dans un pot de verre ou un récipient thermofuge et laisser refroidir complètement à température ambiante. Comme il refroidit, il s'épaissira d'un sirop versable à une glaçure collante. S'il devient trop épais à température ambiante, réchauffez doucement avec un jet d'eau. A conserver réfrigéré jusqu'à 3 semaines. Badigeonner sur les protéines au cours des dernières minutes de grillage ou de broyage - appliquer tôt fait brûler les sucres avant que la protéine soit cuite.",
      "visualCue": {
        "primaryTarget": "Une sauce à l'ambre foncé glacé, visqueux, refroidie et miroir qui s'accroche à une cuillère sans goutte à goutte, versable mais épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce refroidie est encore assez fine et runny — elle était sous-réduite.",
            "action": "Retournez dans la casserole et réduisez encore 3 à 4 minutes."
          },
          {
            "state": "Perfect",
            "description": "Visqueux, brillant, acajou profond. Se tient à une cuillère inclinée pendant 3-4 secondes avant de commencer à glisser. Goûte doux-salté-umami.",
            "action": "Garnir, réfrigérer et utiliser dans les 3 semaines."
          },
          {
            "state": "Overdone",
            "description": "La sauce refroidie est solide, impossible à cuillèrer.",
            "action": "Chauffer dans une petite casserole avec 2 c. à soupe d'eau, en remuant à feu doux jusqu'à ce qu'il soit à nouveau liquide."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la sauce refroidie — il doit se sentir légèrement collant et s'accrocher à la peau, se libérant lentement plutôt que de s'enfuir immédiatement."
    }
  ]
};
