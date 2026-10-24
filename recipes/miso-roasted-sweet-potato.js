export default {
  "repoId": "master_japanese_miso_roasted_sweet_potato_001",
  "parentRepoId": null,
  "slug": "miso-roasted-sweet-potato",
  "author": "ForkRecipe Kitchen",
  "title": "Pommes de terre douces grillées en miso",
  "description": "Des patates douces entières japonaises rôties bas et lents jusqu'à ce que leurs sucres caramélisent de l'intérieur, puis fendent et glacés avec un mélange de miso blanc et de beurre qui fond dans chaque fissure — le plus simple des choses, rendu lumineux.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "vegetables",
  "tags": [
    "Sans gluten",
    "Potato doux",
    "miso",
    "grillés",
    "côté",
    "umami"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "1 hr 10 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pommes de terre douces japonaises (Satsumaimo) ou patates douces à chair orange",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "toute variété épaisse de patates douces"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Shiro miso blanc",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune doux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "beurre végétal"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "1 c. à thé miel + 1 c. à thé saké"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Oignon de printemps tranché finement (partie verte seulement)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01"
      ],
      "outputState": "roasted_sweet_potato",
      "instructions": "Préchauffer le four à 180 C (355 F). Placez la totalité des patates douces non pelées directement sur la grille du four avec un plateau recouvert de feuilles ci-dessous pour attraper les gouttes d'eau. Faire cuire 55 à 75 minutes selon la taille (une baguette pressée dans la partie la plus épaisse ne devrait pas résister). La peau va clotter et dégonfler; un sirop foncé caramélisé s'écoule des extrémités.",
      "visualCue": {
        "primaryTarget": "Pommes de terre douces entières au four",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est toujours tendue et brillante. Aucun sirop n'a coulé. Centre toujours ferme quand pressé.",
            "action": "Continuez à rôtir. Les patates douces ont besoin de temps — les sucres doivent migrer et se concentrer lentement. Une pomme de terre de 200 g prend généralement 60 à 65 minutes."
          },
          {
            "state": "Perfect",
            "description": "La peau est ridée, légèrement dégonflée et très sombre dans les endroits. Un sirop ambré caramélisé s'est cristallisé autour des extrémités et a coulé sur le plateau. Une baguette glisse avec une résistance nulle partout, y compris au centre. La pomme de terre est très douce lorsqu'elle est pressée doucement.",
            "action": "Retirer du four et laisser reposer 5 minutes avant de diviser."
          },
          {
            "state": "Overdone",
            "description": "La peau est noircie et sèche. Le sirop a brûlé sur le plateau. L'intérieur peut avoir séché près de la peau.",
            "action": "L'intérieur est probablement encore excellent. Jeter les 3–4 mm extrêmes s'il a un goût amer, puis procéder."
          }
        ]
      },
      "feelCue": "Pressez doucement la pomme de terre chaude à travers une serviette de cuisine pliée — il devrait se sentir comme un sac de haricots doux sans taches fermes nulle part. Toute dureté est une chair mal cuite qui a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Faire fondre",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "miso_butter_glaze",
      "instructions": "Pendant que les pommes de terre rôtissent, mélanger le beurre ramolli, le miso blanc et le mirin dans un petit bol. Incorporer vigoureusement jusqu'à ce qu'il soit complètement lisse et homogène. Le mélange sera une pâte ambre pâle. Réserver à température ambiante.",
      "visualCue": {
        "primaryTarget": "Pâte de beurre miso",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre et miso sont encore séparés — des stries de beurre blanc visibles dans le miso brun.",
            "action": "Mélanger plus vigoureusement jusqu'à ce qu'il soit complètement unifié. Le beurre froid ne se mélange pas facilement, qu'il s'adoucisse complètement d'abord."
          },
          {
            "state": "Perfect",
            "description": "Une pâte ambre lisse et pâle qui tient sa forme sur une cuillère. Des odeurs de soja fermenté, de lait et de douceur faible du mirin.",
            "action": "Mettez de côté. Il fondra au contact de la pomme de terre chaude."
          },
          {
            "state": "Overdone",
            "description": "S.O. — Cette étape ne peut pas être exagérée.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La pâte finie doit se sentir soyeuse et cohésive lorsqu'elle est frottée entre les doigts — pas de grain de miso non dissout, pas de séparation du beurre."
    },
    {
      "nodeId": "step_3",
      "action": "Glace",
      "inputs": [
        "roasted_sweet_potato",
        "miso_butter_glaze",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_miso_sweet_potato",
      "instructions": "Divisez chaque patate douce dans le sens de la longueur avec un couteau tranchant — mais pas tout à fait tout le chemin à travers. Appuyez sur les deux bouts pour ouvrir la fente et créer une cavité. Spoon ou pipe une quantité généreuse de beurre miso dans la cavité. Terminer sous le gril à feu vif pendant 3-4 minutes jusqu'à ce que la glaçure soit bouillie et caramélisée. Éparpillement de sel, de graines de sésame et d'oignon de printemps.",
      "visualCue": {
        "primaryTarget": "Pommes de terre douces émaillées sous le grill",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre miso n'a pas encore caramélisé — il est encore pâle et fondu mais non bronzé.",
            "action": "Retournez sous la grille pendant 2 minutes. Les sucres dans le miso et le mirin ont besoin de chaleur directe radiante pour caraméliser."
          },
          {
            "state": "Perfect",
            "description": "Le beurre miso a fait des bulles et s'est mis dans une glaçure foncée brun-ambre avec des taches caramélisées plus foncées. Les bords de la pomme de terre fendue sont dorés et légèrement croquants. La cuisine sent le soja grillé et le caramel sucré.",
            "action": "Assiette immédiatement et garnir. Mangez bien chaud — le contraste entre l'extérieur caramélisé et l'intérieur crémeux est à son meilleur en ce moment."
          },
          {
            "state": "Overdone",
            "description": "La glace est brun foncé et commence à sentir brûlé. Les sucres du miso sont passés du caramel à l'amer.",
            "action": "Supprimer immédiatement. Grattez les parties les plus sombres de la glaçure et ajoutez un petit bouton de beurre frais uni pour adoucir l'amertume."
          }
        ]
      },
      "feelCue": "Se jeter dans la fente avec une cuillère — l'intérieur devrait se séparer comme de la soie chaude, donnant à la pression la plus légère, avec la glaçure brillante pooling dans le creux et tout le truc s'effondre doucement en lui-même."
    }
  ]
};
