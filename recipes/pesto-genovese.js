export default {
  "repoId": "master_italian_pesto_001",
  "parentRepoId": null,
  "slug": "pesto-genovese",
  "author": "ForkRecipe Kitchen",
  "title": "Pesto alla Genovese",
  "description": "Le vert de la Ligurie, un jeune basilic meurtri contre le marbre avec de l'ail et des pignons de pin jusqu'à ce qu'il saigne une huile électrique et herbacée, puis lié à deux fromages et à un fil d'huile d'olive riviera fruité dans une pâte d'émeraude grossière et scintillante qui sent l'été à l'instant il touche les pâtes chaudes.",
  "cuisine": "Italien",
  "culture": "Ligurien",
  "category": "sauces",
  "tags": [
    "pesto",
    "Italien",
    "ligurienne",
    "basilic",
    "pas de cuisson",
    "pâtes",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 2,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Feuilles de basilic génoves (petites, jeunes, cueillies dans les pointes)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tout basilic doux avec de petites feuilles; éviter les grandes feuilles d'été poivrées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousse d'ail, pelée et germe vert enlevé",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "jeune ail de printemps pour une note plus douce"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer grossier (agit comme l'abrasif dans le mortier)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de mer flocé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Noix de pin (italienne, méditerranéenne)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Noix pour un pesto rustique, plus amer"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Glutamate",
      "name": "Parmigiano-Reggiano, râpé finement (âgé de 24 mois et plus)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Pecorino Sardo ( mature, vif), finement râpé",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Pecorino Romano, utilisé une touche moins car il est plus salé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Huile d'olive extra-vierge ligurienne (légère, fruitée, peu amère)",
      "ratioValue": 90,
      "defaultUnit": "parts",
      "substitutions": [
        "Toute huile toscane délicate et sucrée; éviter l'herbe, poivrée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "garlic_paste",
      "instructions": "Déposer l'ail épluché et le sel grossier dans un mortier de marbre. Écraser avec un mouvement circulaire de broyage du pâté de bois — et non avec un marteau — jusqu'à ce que l'ail se dissout en pâte lisse et humide. Les cristaux de sel font double devoir: ils déchiquetent les cellules de l'ail et en tirent l'humidité, donc un peu va un long chemin et la morsure brute dure est apprivoisée avant que n'importe quel basilic ne le touche.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ail lisse, pâle, presque translucide, frottée autour du fond du mortier, sans morceaux visibles et avec un éclat vitreux provenant de son propre jus libéré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours dans des éclats blancs ou des cailloux distincts, glissant autour sec contre le sel.",
            "action": "Continuer à broyer dans des cercles fermes, en appuyant sur le pilon dans le mur du mortier. L'ail doit être complètement cassé avant d'ajouter quelque chose de vert."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme et scintillante qui gronde comme de la craie mouillée, sentant la puanteur, mais n'est plus crue et acride.",
            "action": "Ajouter les pignons de pin et continuer à l'étape suivante."
          },
          {
            "state": "Overdone",
            "description": "La pâte est liquéfiante et sent fortement chaud — vous avez le sol depuis longtemps nécessaire et l'ail est meurtri.",
            "action": "Déplacez-vous immédiatement; ne surgissez pas d'ail, car la chaleur de friction le rend acride. Un peu de basilic supplémentaire plus tard va adoucir le bord."
          }
        ]
      },
      "feelCue": "Le pestle devrait glisser plus facilement à mesure que l'ail se brise, la traînée de cristaux de sel donne lieu à un tour lisse et glissant. Vos yeux piqueront légèrement de l'allicine fraîche ; c'est-à-dire l'ail qui fonctionne, qui ne brûle pas."
    },
    {
      "nodeId": "step_2",
      "action": "Crush",
      "inputs": [
        "garlic_paste",
        "ing_04"
      ],
      "outputState": "nut_garlic_base",
      "instructions": "Ajouter les pignons de pin à la pâte d'ail et les moudre avec le même mouvement circulaire patient. Ils sont doux et huileux, donc ils se cassent rapidement dans une crème épaisse et sablonneuse qui relâche l'ail et arrondit sa netteté. Travaillez jusqu'à ce que vous ayez une base cohésive et beurrée sans noix entières, cette couche riche en gras est ce qui transportera et protégera la couleur du basilic dans la prochaine étape.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ivoire pâle, légèrement grainée avec la consistance du sable humide liant dans une crème douce, légèrement douce et résineuse au nez.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des pignons entiers ou à moitié de pin roulent encore sous le pestle, refusant de casser.",
            "action": "Continuez à écraser; épinglez chaque écrou contre le mur de mortier et moudre. Les noix intactes font un pesto aqueux qui sépare."
          },
          {
            "state": "Perfect",
            "description": "Une pâte lisse, huileuse, de couleur claire – grainée mais cohésive, tenant ensemble quand le pestle se lève.",
            "action": "Commencez à ajouter le basilic une poignée à la fois."
          },
          {
            "state": "Overdone",
            "description": "La base est chaude au toucher depuis le broyage prolongé et commence à paraître huileuse-séparée.",
            "action": "Arrêtez et ajoutez maintenant le basilic; les feuilles fraîches et leur humidité vont faire baisser la température."
          }
        ]
      },
      "feelCue": "Les pignons donnent une résistance douce et huileuse, rien de tel que l'ail gris. La pâte doit être légèrement lissée et laisser un film beurré sur le pestle. Gardez-le frais : la chaleur à ce stade est l'ennemi du vert."
    },
    {
      "nodeId": "step_3",
      "action": "Brute",
      "inputs": [
        "nut_garlic_base",
        "ing_01"
      ],
      "outputState": "basil_paste",
      "instructions": "Ajouter le basilic une poignée généreuse à la fois, presser et rouler les feuilles sur les côtés du mortier avec le pilon plutôt que de les briser à plat. L'objectif est de contuser et de déchirer les cellules foliaires pour qu'elles pleurent leurs huiles — un mouvement rotatif et mural encrassant le fait sans surchauffe. Ajouter plus de basilic seulement lorsque la poignée précédente se décompose. Travaillez assez rapidement; plus le basilic coupé est exposé à l'air et à la chaleur de friction, plus il s'oxyde rapidement du vert électrique vers l'olive boueuse.",
      "visualCue": {
        "primaryTarget": "Une pâte d'émeraude grossière et vive flétrie avec la crème de la base de noix, lissée avec de l'huile de basilic libérée et sentant explosivement le basilic frais et le poivre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des feuilles ramassées et reconnaissables s'assoient dans un liquide mince et pâle qui n'est pas encore vert profond.",
            "action": "Continuer à presser les feuilles contre le mur de mortier dans des cercles fermes jusqu'à ce qu'elles s'effondrent et tachent toute la masse verte."
          },
          {
            "state": "Perfect",
            "description": "Une pâte verte claire et uniforme avec une texture grossière et légèrement chaotique — feuilles cassées mais non pulvérisées pour la nourriture des bébés — brillantes avec leur propre huile.",
            "action": "Travailler dans les fromages râpés."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'obscurcit vers l'olive brune et sent plat ou semblable au foin, avec un bord légèrement chaud et cuit.",
            "action": "Arrêtez de broyer immédiatement et continuez. Une compression de rien ne peut annuler l'oxydation — travailler plus vite la prochaine fois et garder le mortier frais."
          }
        ]
      },
      "feelCue": "Le basilic devrait avoir l'impression de fondre sous le pestle, libérant de l'huile glissante qui rend la masse entière lâche et parfumée. Si le mortier se sent chaud contre votre paume, vous allez trop lentement — accélèrez ou arrêtez pour le laisser refroidir."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "basil_paste",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_pesto",
      "instructions": "Incorporer les deux fromages râpés dans la pâte de basilic; ils l'épaississent en une masse dense et argileuse. Maintenant, passez à une cuillère ou au pesto et travaillez dans l'huile d'olive dans un fil lent, en le battant dans la pâte un peu à la fois la façon dont vous monteriez une sauce, jusqu'à ce que le pesto devienne brillant, lâche, et versable mais encore grossier. Bouche: il doit être luxuriant, salé du fromage, et presque trop intense à lui seul — il est destiné à être coupé par de l'eau chaude de pâtes féculentes au moment du saucisson. Utilisez en quelques heures la surface filmée avec un peu d'huile supplémentaire pour la sceller de l'air.",
      "visualCue": {
        "primaryTarget": "Une sauce scintillante, émeraude, assez lâche pour glisser lentement de la cuillère dans un ruban épais, grossière avec de minuscules flocons de noix et de fromage, sentant le basilic, l'ail et le fromage vieilli tout à la fois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pesto est raide et pâteux, s'accroche dans un gros tas, et a un goût vif et non arrondi.",
            "action": "Battre plus d'huile d'olive un fil à la fois jusqu'à ce qu'il se détache à une sauce brillante et cuillerable. Reprendre le sel."
          },
          {
            "state": "Perfect",
            "description": "Vert vif, brillant, et juste versable, l'huile a entièrement travaillé dans de sorte que la sauce semble unifiée plutôt que huileuse-séparée. Goûté équilibré, riche et vif.",
            "action": "Filmez le dessus avec de l'huile et utilisez-le en quelques heures, ou jetez immédiatement avec des pâtes chaudes desserrées par un jet d'eau de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La sauce semble lisse et cassée, avec une piscine d'huile libre assise sur le dessus et un corps mince et aqueux en dessous.",
            "action": "Incorporer un peu plus de fromage râpé pour réabsorber l'huile et reconstruire le corps, puis re-saisonner."
          }
        ]
      },
      "feelCue": "Au fur et à mesure que l'huile pénètre, la pâte doit se satiner et se détendre autour de la cuillère. Frotte entre deux doigts, il reste légèrement grossier — vous devriez encore sentir le grain de noix et de fromage. Sur la langue elle lit presque agressivement concentrée; cette intensité est correcte et va meller l'instant où elle rencontre des pâtes chaudes."
    }
  ]
};
