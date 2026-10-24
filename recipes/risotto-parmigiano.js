export default {
  "repoId": "master_italian_risotto_001",
  "parentRepoId": null,
  "slug": "risotto-parmigiano",
  "author": "ForkRecipe Kitchen",
  "title": "Risotto alla Parmigiana",
  "description": "La discipline milanaise de l'amidon coaxiant du riz — louche par louche, remuer — jusqu'à ce que chaque grain suspende dans une vague crémeuse qui coule comme de la lave lorsque l'assiette est tapée.",
  "cuisine": "Italien",
  "culture": "Milanais",
  "category": "grains",
  "tags": [
    "Risotto",
    "Italien",
    "d'origine",
    "riz",
    "technique"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-03-22",
  "updatedAt": "2025-03-10",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 7,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz de Carnaroli",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "riz arborio",
        "flaconone nano"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Poulet léger ou bouillon de légumes (chaud)",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (en dés)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Parmigiano-Reggiano (finement râpé)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueur",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "sweated_onion",
      "instructions": "Faire fondre la moitié du beurre dans une casserole large à fond lourd à feu moyen-doux. Ajouter l'oignon en dés et cuire lentement, en remuant occasionnellement, jusqu'à ce qu'il soit complètement doux et translucide. Cela prend 8-10 minutes. L'oignon ne doit jamais colorer — la pureté du risotto en dépend.",
      "visualCue": {
        "primaryTarget": "L'oignon est vitreux et translucide, assis dans un beurre mousseux. Pas de brunissement — chaque pièce est assez douce pour écraser entre vos doigts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux d'oignon sont encore blancs et opaques. Ils craquent quand ils sont pressés contre la poêle.",
            "action": "Abaissez la chaleur, ajoutez une cuillère à soupe d'eau et continuez. La patience détermine ici tout le plat."
          },
          {
            "state": "Perfect",
            "description": "Translucide et effondré. Doux arôme. Pas de bruit étourdissant — juste un adoucissement calme et humide.",
            "action": "Ajouter le riz."
          },
          {
            "state": "Overdone",
            "description": "Les bords dorés. Une odeur de caramel. Certaines pièces sont croustillantes.",
            "action": "Le risotto aura une note légèrement grillée. Continuez, mais sachez qu'elle a quitté l'idéal milanais."
          }
        ]
      },
      "feelCue": "La poêle devrait être presque silencieuse — si vous entendez des étourdissements agressifs, la chaleur est trop élevée. La cuisine doit sentir doux et doux, comme du linge propre, pas comme de la friture."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "sweated_onion",
        "ing_01"
      ],
      "outputState": "toasted_rice",
      "instructions": "Ajouter le riz à l'oignon transpiré et augmenter le feu à moyen. Mélanger constamment, enrober chaque grain de beurre. Toast pendant 2-3 minutes jusqu'à ce que les bords des grains deviennent translucides tandis que les centres restent blancs crayeux. Ceci scelle l'amidon extérieur et crée le noyau de signature al-dente.",
      "visualCue": {
        "primaryTarget": "Chaque grain a un bord verreux et translucide avec un point blanc opaque au centre — comme un petit œil. Le riz clique et rouille dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont uniformément blancs et opaques. Pas de translucidité aux bords.",
            "action": "Continuer à remuer sur la chaleur. La transformation se produit grain par grain — regardez de près."
          },
          {
            "state": "Perfect",
            "description": "Bords translucides, carottes blanches. Un arôme chaud et noisette se lève. Le riz fait un son sec et sablonneux lorsqu'il est agité.",
            "action": "Ajouter la première louche de stock."
          },
          {
            "state": "Overdone",
            "description": "Les grains jaunissent. Certains sont collés à la poêle avec des taches brunes.",
            "action": "Ajouter immédiatement du stock pour arrêter le toast. Le risotto peut avoir une note légèrement brûlée."
          }
        ]
      },
      "feelCue": "Écoutez le son — on dirait que le riz grillé se déplace dans un seau. S'il commence à craquer, il est allé trop loin."
    },
    {
      "nodeId": "step_3",
      "action": "Construire (douche par louche)",
      "inputs": [
        "toasted_rice",
        "ing_02"
      ],
      "outputState": "cooked_risotto",
      "instructions": "Ajouter le bouillon chaud une louche à la fois, en remuant doucement mais constamment. Attendez que chaque ajout soit presque absorbé avant d'ajouter le prochain. Le riz devrait toujours être humide mais jamais nager. Ce processus prend 16-18 minutes. Goûtez à 15 minutes — le riz doit être tendre avec la résistance crayeuse la plus faible au cœur.",
      "visualCue": {
        "primaryTarget": "Le risotto se déplace dans des vagues lentes et crémeuses lorsque la poêle est secouée. Les grains individuels sont plumés et suspendus dans une sauce amylacée et brillante — sans être assis dans un bouillon clair, non collés dans une pâte épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore durs et croquants au centre. Le bouillon est mince et aqueux, pas crémeux. Le riz se trouve au fond du liquide.",
            "action": "Continuer d'ajouter du stock et de remuer. L'amidon se libère lentement — il lui faut plus de temps et de liquide."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est tendre avec une morsure à peine perceptible au centre. Le liquide environnant est crémeux et opaque, enrobant l'arrière d'une cuillère. Lorsque vous faites glisser une cuillère dans la casserole, le sentier se remplit lentement.",
            "action": "Retirer du feu pour la mantecatura."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont soufflés et fractionnés. La texture est de type porridge et collante. Aucune structure céréalière individuelle.",
            "action": "Il a passé al dente. Servez-le comme un risotto plus lâche, plus rustique – ajoutez du stock supplémentaire pour alléger la texture."
          }
        ]
      },
      "feelCue": "La résistance à l'agitation change au fur et à mesure que vous cuisinez — elle commence à être liquide, s'épaissit au milieu, puis trouve un endroit sucré où la cuillère se déplace à travers elle comme en remuant le miel chaud. S'il devient difficile de remuer, ajouter plus de stock immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Mantecatura",
      "inputs": [
        "cooked_risotto",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_risotto",
      "instructions": "Retirer la poêle du feu. Ajouter le reste du beurre froid et le Parmigiano râpé. Remuer vigoureusement pendant 60 secondes — c'est la mantecatura, l'acte de battre le risotto dans une émulation crémeuse. Le beurre froid et le fromage créent une sauce brillante et fluide qui lie tout. Assaisonner de sel. Couvrir et se reposer pendant 2 minutes.",
      "visualCue": {
        "primaryTarget": "Le risotto est brillant et coule comme de la lave lorsque la poêle est inclinée. Il devrait s'étendre lentement sur une assiette chaude, ne pas tenir sa forme comme un monticule et ne pas courir comme une soupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre et fromage sont assis dans des stries visibles. Le risotto semble granuleux et séparé.",
            "action": "Stirer de manière plus agressive — l'émulsion a besoin d'énergie. Une vague de stock chaud peut l'aider à se réunir."
          },
          {
            "state": "Perfect",
            "description": "Gloire, fluide, unifié. Lorsqu'elle est cuillée sur une assiette chaude et que l'assiette est tapée, elle se propage lentement dans une vague plate et crémeuse (all'onda). Chaque grain est distinct dans la crème.",
            "action": "Servir immédiatement sur des assiettes chaudes."
          },
          {
            "state": "Overdone",
            "description": "Gummy, épais et collant. Il tient un monticule raide. Le fromage a germé.",
            "action": "Battre dans une poche de bouillon chaud pour se détendre. L'amidon a surchauffé — le liquide rétablira le flux."
          }
        ]
      },
      "feelCue": "Goûtez le risotto fini — le Parmigiano doit humer en arrière-plan, pas crier. Le beurre devrait lui donner une bouche ronde et soyeuse. Si elle enrobe votre palais comme de la pâte, il faut plus de stock. Si elle se sent mince et aqueuse, elle a besoin d'une minute de repos supplémentaire pour épaissir."
    }
  ]
};
