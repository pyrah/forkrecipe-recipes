export default {
  "repoId": "master_mexican_salsa_verde_cruda_001",
  "parentRepoId": null,
  "slug": "salsa-verde-cruda",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Verde Cruda",
  "description": "La salsa verte mexicaine crue — tomatillos, jalapeño, oignon et coriandre se mélangent entièrement sans chaleur, donnant une sauce à tarte herbacée et aux croûtes de fraîcheur que les versions cuites ne peuvent pas toucher. La verde dans chaque taquería mérite d'être visitée.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "sauces",
  "tags": [
    "salsa",
    "Mexique",
    "tomatillo",
    "cru",
    "végétalien",
    "Vite",
    "vert"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 2,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tomatillos frais (rincés)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Piment de jalapeño (tige, côte brute)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "serrano pour plus de chaleur",
        "poblano pour moins"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, grossièrement haché",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousse d'ail",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Tomatillos prép",
      "inputs": [
        "ing_01"
      ],
      "outputState": "rinsed_tomatillos",
      "instructions": "Enlevez les enveloppes de papier des tomatillos et rincez-les sous l'eau froide, en frottant le revêtement collant légèrement cireux sur leur peau. Ce revêtement est légèrement amer et légèrement acide — en le retirant, la salsa ne porte pas une note savonneuse non désirée. Quartez-les. Goûtez une petite pièce crue : le tomatillo doit goûter à l'aurore avec un sous-ton fruité, semblable à une pomme. S'ils ont un goût plat, ils sont moins mûrs; les tomatillos très mûrs sont meilleurs pour la salsa cuite.",
      "visualCue": {
        "primaryTarget": "Les Tomatillos sont rincés et nettoyés avec un léger éclat, vert lime pâle, quartiers et prêts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours un revêtement collant, légèrement collant sur la peau. Les restes de papier des défenses encore visibles sur certains.",
            "action": "Rincer plus soigneusement sous l'eau chaude, frotter la peau jusqu'à ce qu'elle soit lisse et non collante."
          },
          {
            "state": "Perfect",
            "description": "Doux, vert vif et propre. La surface coupée révèle une chair crème pâle avec de minuscules chambres de semences.",
            "action": "Procéder au mélange — pas de préparation supplémentaire nécessaire."
          },
          {
            "state": "Overdone",
            "description": "Les Tomatillos sont trop mûrs — jaune, très doux, ils sentent fermentés plutôt que frais et acidulés.",
            "action": "Utilisez-les plutôt pour une salsa verde rôtie. Des tomatillos crus trop mûrs rendront cette salsa boueuse, pas brillante."
          }
        ]
      },
      "feelCue": "Un tomatillo bien rincé doit se sentir légèrement ferme et lisse, comme une petite prune ferme. La surface coupée est pâle et humide. Une bouchée est immédiatement aigre et propre, comme une pomme non mûre croisée avec de la tomate verte."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "rinsed_tomatillos",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_salsa_verde",
      "instructions": "Mélanger les tomatillos, le jalapeño, l'oignon, l'ail, la coriandre, le jus de lime et le sel dans un mélangeur. Pulse 8 à 12 fois — ne pas mélanger en continu. La texture doit rester légèrement volumineuse, non purifiée. Cruda signifie brut et texturé. Goûtez après les premières impulsions et ajustez : plus de jalapeño pour la chaleur, plus de chaux pour la luminosité, plus de coriandre pour la saveur verte. La salsa semble mince mais s'épaissit comme elle repose.",
      "visualCue": {
        "primaryTarget": "Une salsa verte vive et lumineuse, avec une texture végétale et herbacées visibles, assez épaisse pour que vous puissiez voir des morceaux, suffisamment fluide pour verser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 2 à 3 pulsations, toujours de gros morceaux de tomatillo et de morceaux d'oignon rugueux. Non cohésive — les saveurs n'ont pas commencé à s'intégrer.",
            "action": "Encore 5 fois. Le but est une texture grossière, légèrement cassée, pas identifiable gros morceaux."
          },
          {
            "state": "Perfect",
            "description": "Texturé uniformément, vert vif, légèrement chunky. Ça sent la coriandre, la chaux et le tomatillo. Verse du mélangeur dans un flux libre.",
            "action": "Goûtez au sel et à la chaux. Reposez-vous 5 minutes avant de servir afin que la netteté de l'oignon s'adoucisse légèrement."
          },
          {
            "state": "Overdone",
            "description": "Mélange dans une purée verte complètement lisse, aérée et mousseuse. A perdu sa texture brute et ressemble plus à un smoothie vert qu'à une salsa.",
            "action": "Encore bon: remuez un tomatillo frais en dés et une cuillère de coriandre fraîche pour restaurer la texture."
          }
        ]
      },
      "feelCue": "La salsa verde cruda finie sur la langue donne d'abord une note de tarte pointue et haute, l'acide malique et citrique du tomatillo, suivie d'une vague verte de coriandre, puis de la chaleur rampante du jalapeño. Si la séquence est inversée et que la chaleur arrive en premier, ajoutez plus de chaux."
    }
  ]
};
