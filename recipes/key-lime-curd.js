export default {
  "repoId": "master_american_key-lime-curd_001",
  "parentRepoId": null,
  "slug": "key-lime-curd",
  "author": "ForkRecipe Kitchen",
  "title": "Clef de lime",
  "description": "Un caillé jaune-soleil pâle avec la tarte florale, presque tropicale, de vraies citron vert clés, s'épaississait lentement sur une double chaudière jusqu'à ce qu'elle enveloppe une cuillère comme du satin liquide.",
  "cuisine": "Américain",
  "culture": "Floridienne",
  "category": "desserts",
  "tags": [
    "citron vert clé",
    "curd",
    "tarte",
    "Floride",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 6,
    "salty": 2,
    "sour": 9,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Jus de citron vert frais (environ 12 à 15 citron vert)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Jus de lime perse (moins floral, encore excellent)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre blanc granulé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Gros œufs entiers",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Grand jaune d'œuf",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, froid, cubes",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de coco (arôme légèrement différent, fonctionne encore)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Zeste de citron vert clé (à partir de citron vert jus)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin (pinche)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "curd_base",
      "instructions": "Dans le bol supérieur d'une double chaudière (ou d'un bol résistant à la chaleur qui s'adapte bien sur une casserole), fouetter ensemble le jus de citron vert clé, le sucre, les œufs entiers, les jaunes, le zeste et le sel jusqu'à ce que le sucre montre des signes de dissolution et le mélange est uniformément combiné. Il ne devrait pas y avoir de stries jaunes non incorporées. Ne commencez pas encore à chauffer — le prémélange assure une cuisson uniforme et empêche les œufs sur le fond du bol chaud de se brouiller avant que le sucre se dissout.",
      "visualCue": {
        "primaryTarget": "Un liquide jaune pâle uniforme sans stries visibles de blanc d'œuf ou de jaune. Zest distribué partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries jaunes sont visibles à travers le blanc d'œuf plus léger. Le sucre est encore largement non dissous.",
            "action": "Frottez plus vigoureusement pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Liquide lisse, uniforme et mince jaune pâle. Zest est distribué uniformément. Le mélange tombe du fouet dans une mince feuille uniforme.",
            "action": "Réglez-vous sur une casserole d'eau à peine mijotante (double chaudière) et commencez la cuisson."
          },
          {
            "state": "Overdone",
            "description": "S/O à ce stade — vous ne pouvez pas trop cuire avant d'appliquer la chaleur.",
            "action": "Passez à la double chaudière."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir comme de la crème très fine — légèrement plus épaisse que l'eau du sucre dissous, avec l'huile des jaunes à peine décelables. Le jus de lime doit faire votre eau de bouche à partir de l'arôme seul."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "curd_base"
      ],
      "outputState": "thickened_curd",
      "instructions": "Placez le bol sur un pot de 3 à 4 cm d'eau à peine mijotée — le bol ne doit pas toucher la surface de l'eau. Cuire à feu moyen-doux, en remuant constamment avec une spatule ou un fouet thermofuge, en veillant à gratter les côtés et le fond du bol. Le caillé s'épaissit graduellement pendant 10 à 15 minutes. Il est fait quand il enrobe le dos d'une cuillère et tient une ligne tirée à travers elle. Ne précipitez pas cela avec plus de chaleur — les œufs brouillés sont irréversibles.",
      "visualCue": {
        "primaryTarget": "Le caillé s'est épaissi à la consistance du caillé de citron ou du pudding fin. Il enveloppe une cuillère dans une couche continue et un doigt tiré à travers cette couche tient un bord propre pendant 3-4 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux. Il coule de la cuillère comme du jus. Pas de revêtement à la cuillère.",
            "action": "Continuer à remuer sur la double chaudière. Vérifiez que l'eau ci-dessous mijote."
          },
          {
            "state": "Perfect",
            "description": "Coats une cuillère en métal et tient une ligne propre. La couleur est passée du jaune pâle à un jaune légèrement plus profond, plus opaque. La vapeur s'élève de la surface. La température interne est d'environ 77–80 °C (170–176 °F).",
            "action": "Retirer immédiatement du feu et ajouter le beurre froid."
          },
          {
            "state": "Overdone",
            "description": "De petites taches blanches ou des grumeaux apparaissent — les œufs brouillent. La surface est devenue granuleuse plutôt que lisse.",
            "action": "Retirer immédiatement du feu et verser à travers une grille fine. Appuyez fort sur les solides. Le caillé peut être encore utilisable si pris tôt."
          }
        ]
      },
      "feelCue": "Maintenez l'arrière de la cuillère et soufflez à travers elle — un caillé correctement épaissé devrait s'écrouler et rider là où le souffle le frappe plutôt que de courir librement. La vapeur qui sort du bol doit sentir uniquement du citron vert avec une douceur riche et oeuvrée en dessous."
    },
    {
      "nodeId": "step_3",
      "action": "Monter au beurre",
      "inputs": [
        "thickened_curd",
        "ing_05"
      ],
      "outputState": "finished_curd",
      "instructions": "Retirer le bol du feu. Ajouter les cubes de beurre froid tous à la fois et remuer dans des cercles vigoureux jusqu'à ce que chaque cube ait complètement fondu dans le caillé. Le beurre froid abaisse la température, arrête la cuisson et émulsifie dans le caillé pour créer une texture brillante et riche. Placer le caillé fini dans un bol propre pour enlever le zeste et les solides d'oeufs errants. Appuyez sur l'enveloppe en plastique directement sur la surface du caillé (le toucher complètement) pour éviter la formation d'une peau. Réfrigérer jusqu'à froid et régler.",
      "visualCue": {
        "primaryTarget": "Cord brillant, lisse, vert-jaune profond avec un éclat riche du beurre émulsifié. Verse lentement des rubans lourds.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'est pas entièrement incorporé — des piscines de beurre visibles ou une couche séparée sur le dessus.",
            "action": "Continuer à remuer le feu jusqu'à ce que tout le beurre soit fondu et absorbé."
          },
          {
            "state": "Perfect",
            "description": "Lustré uniformément, de couleur profonde et lisse après déformation. Assez épais pour passer légèrement sur une cuillère avant de s'écouler lentement.",
            "action": "Presser l'enveloppe plastique sur la surface et réfrigérer pendant au moins 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Cord apparaît cassé — grainé avec séparation du beurre. Les œufs brouillaient légèrement avant l'entrée du beurre.",
            "action": "Mélanger avec un mélangeur d'immersion pendant 30 secondes. La plupart des caillés cassés peuvent ainsi être sauvés dans une texture lisse et émulsifiée."
          }
        ]
      },
      "feelCue": "Dab une petite quantité sur votre lèvre inférieure — il devrait sentir comme toucher la soie fraîche et lourde. S'il se sent grainé ou gritté contre votre lèvre, les œufs brouillés et le caillé a besoin de pression ou de mélange. La saveur doit être agressivement goudronnée avec une onctuosité soutenue et riche qui suit."
    }
  ]
};
