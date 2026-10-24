export default {
  "repoId": "master_lebanese_tabbouleh_001",
  "parentRepoId": null,
  "slug": "tabbouleh",
  "author": "ForkRecipe Kitchen",
  "title": "Tabbouleh libanais",
  "description": "Une salade de persil plat aux feuilles minces avec juste assez de bulgur pour attraper le jus de citron et l'huile d'olive - brillant, herbe-avant, et électrique avec de l'acide, destiné à être écopé avec la romaine déchirée ou de petites feuilles de gemme.",
  "cuisine": "Libanais",
  "culture": "Libanais",
  "category": "grains",
  "tags": [
    "Tabouleh",
    "persil",
    "bulgur",
    "lébanèse",
    "salade",
    "végétalien",
    "été",
    "mezze"
  ],
  "difficulty": 1,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 4,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Persil à feuilles plates, tiges éliminées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Blé bourdon fin (no 1)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "bulgur grossier trempé 30 min"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Tomates ripées, très finement coupées en dés",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates cerises, en quartiers"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles de menthe fraîches, hachées finement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalote ou oignon blanc, très finement tranché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.04,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_02",
        "ing_04"
      ],
      "outputState": "soaked_bulgur",
      "instructions": "Dans un petit bol, déposer le boulgur fin. Verser environ la moitié du jus de citron directement dessus et remuer pour humidifier chaque grain. Le bulgur fin réhydrate entièrement sans chaleur — l'acide dans le jus de citron l'adoucit en 15 minutes tout en l'assaisonnant simultanément et en réduisant son bord cru et féculent. Ne pas ajouter d'eau. Réserver à la température ambiante pendant que vous préparez les herbes et les légumes. Après 15 minutes, pressez le boulgur dans votre poing pour vérifier qu'il s'est adouci complètement. Si encore gritty, ajouter une autre touche de citron et attendre 5 minutes de plus.",
      "visualCue": {
        "primaryTarget": "La prune, parfumée au citron, qui a absorbé le jus et gonflé à presque deux fois son volume sec, avec un changement de couleur de l'or pâle à l'ambre chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le Bulgur se sent encore grignoté et croquant lorsqu'il est pressé. Le jus de citron a été mis en commun au fond du bol plutôt que d'être absorbé.",
            "action": "Mélanger pour redistribuer le liquide et attendre encore 5-10 minutes. Ajouter une petite éclaboussure supplémentaire de citron s'il n'y en a plus."
          },
          {
            "state": "Perfect",
            "description": "Bulgur a gonflé et absorbé tout le jus de citron. Presser une poignée ensemble, il tient sa forme brièvement puis s'écroule. Ça sent le citron et le grain.",
            "action": "Le boulgur est prêt. Terminer la préparation de l'herbe et procéder à la combinaison."
          },
          {
            "state": "Overdone",
            "description": "Bulgur est très humide et musqué, ayant trempé trop longtemps ou dans trop de liquide. Il s'effondre plutôt que de tenir sa forme.",
            "action": "Presser l'excès de liquide du boulgur dans un chiffon propre avant de le combiner. Dans le tabouleh, le bulgur ne doit jamais dominer — c'est un accent textural, pas une base."
          }
        ]
      },
      "feelCue": "Le bulgur fin bien trempé se sent légèrement humide et compact lorsqu'il est pressé dans la paume — il s'accroche brièvement puis s'effondre. Il ne devrait pas y avoir de crise. Si vous entendez ou ressentez du mal quand vous appuyez dessus, il faut plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Chop",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_06",
        "ing_07"
      ],
      "outputState": "chopped_herbs_and_veg",
      "instructions": "C'est la technique qui définit le tabouleh : le persil doit être haché à la main, et non dans un robot alimentaire. Un robot alimentaire écrase les feuilles et libère de l'eau qui rendra la salade humide et sombre. Prenez un gros bouquet de persil sec et sec (lavez-le et séchez-le bien avant). Rassemblez bien les feuilles et utilisez un couteau lourd tranchant pour les enfoncer dans la plus fine mèche possible — presque une poussière. Le but est une masse d'herbes nuageuses, pas une pâte humide. Séparément, désez les tomates très finement (pas plus de 5 mm) et salez-les dans une calandre pendant 5 minutes, puis pressez autant de jus que possible. Hacher finement la menthe et trancher le papier pétoncle.",
      "visualCue": {
        "primaryTarget": "Un monticule de persil haché vif vert, sec, clair plume. Les pièces individuelles devraient être minuscules — de 2 à 3 mm au maximum. Pas d'embouts mouillés, pas de taches sombres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil est en gros morceaux ou grossièrement haché. La texture est feuillue et volumineuse.",
            "action": "Continuez à couper. Tabbouleh est un test de la discipline des couteaux — le persil doit être assez fin pour que vous puissiez à peine voir les pièces individuelles."
          },
          {
            "state": "Perfect",
            "description": "Le persil est fin, sec, vert brillant. Levée dans votre main, elle est presque sans poids. Il n'y a pas de taches humides ou sombres.",
            "action": "Combiner immédiatement avec la tomate, la menthe et le pétoncle. Ne laissez pas le persil haché s'asseoir — il s'oxydera et s'assombrira."
          },
          {
            "state": "Overdone",
            "description": "Le persil a été haché si fin qu'il est humide et pâteux. Un jus d'herbe humide s'échappe.",
            "action": "Sécher la pâte dans une serviette propre, en taillant doucement. A l'avenir, arrêtez de couper les morceaux de 2 à 3 mm et l'herbe semble encore sèche et vive."
          }
        ]
      },
      "feelCue": "Le persil de tabouleh bien haché devrait se sentir comme de la neige verte très fine dans la main — sèche, aérée et à peine plus lourde que l'air qui l'entoure. Lorsque vous appuyez sur une poignée ensemble et le relâchez, il devrait tomber en morceaux immédiatement plutôt que de s'accrocher."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "soaked_bulgur",
        "chopped_herbs_and_veg",
        "ing_04",
        "ing_05",
        "ing_08",
        "ing_09"
      ],
      "outputState": "dressed_tabbouleh",
      "instructions": "Mélanger le bulgur trempé, le persil finement haché, la tomate drainée, la menthe et l'échon dans un grand bol. Verser le jus de citron restant sur tout, puis l'huile d'olive. Assaisonner de sel et de poivre noir fraîchement moulu. Mélanger doucement mais soigneusement avec deux grandes cuillères ou avec des mains propres. Goûtez immédiatement : le tabouleh doit être agressif et acide, le citron doit être la première et la dernière chose que vous goûtez. Si le goût est plat ou terne, il faut plus de jus de citron et de sel. Ajustez jusqu'à ce que l'acide fasse votre eau buccale.",
      "visualCue": {
        "primaryTarget": "Une salade vive et vert émeraude scintille avec du jus de citron et de l'huile d'olive. Le bulgur est à peine visible à l'intérieur de la masse de l'herbe — c'est exact. La tomate fournit de petits points de rouge partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salade semble sèche et les herbes ne sont pas uniformément enrobées dans la vinaigrette. Les composants individuels semblent séparés et non intégrés.",
            "action": "Ajouter un peu plus de jus de citron. La vinaigrette doit toucher toutes les feuilles."
          },
          {
            "state": "Perfect",
            "description": "Le tabouleh brille avec la vinaigrette. Le persil est l'élément visuel et de saveur dominant — vous voyez vert, pas le bulgur. L'odeur est vive, agrumes et herbacée.",
            "action": "Reposez-vous 10 à 15 minutes avant de servir pour permettre au bulgur d'absorber tout liquide restant et les saveurs à fondre."
          },
          {
            "state": "Overdone",
            "description": "La salade est bordée d'eau, un bassin de liquide vert au fond du bol. Le persil s'est flétri et obscurci.",
            "action": "Égoutter l'excès de liquide en inclinant le bol et en le cuillerant. Servir immédiatement. À l'avenir, assurez-vous que les tomates sont bien drainées avant de les ajouter."
          }
        ]
      },
      "feelCue": "Un tabouleh bien habillé doit avoir un goût tellement acide qu'il rend les glandes sous votre mâchoire serrées par la salive. Si vous ne gagnez pas légèrement au premier goût, ajoutez plus de citron. Puis ajouter une pincée plus de sel pour équilibrer."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "dressed_tabbouleh"
      ],
      "outputState": "finished_tabbouleh",
      "instructions": "Couvrir et reposer le tabouleh à température ambiante pendant 10-15 minutes avant de servir. Ce court repos permet au bulgur d'absorber le dernier de la vinaigrette, aux tomates de libérer un échange final de jus dans la salade, et aux saveurs de menthe et de pétoncle à intégrer au persil. Goûtez encore une fois avant de servir et ajustez l'acide et salez une dernière fois. Servir empilé sur une assiette plate entourée de toute la romaine ou de petites feuilles de laitue gemme pour scooping. Tabbouleh ne se tient pas bien — servez le jour où il est fait.",
      "visualCue": {
        "primaryTarget": "Un monticule de tabouleh, vert vif, avec un revêtement uniforme de pansement et sans liquide à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bulgur a encore un faible amidon brut. Les saveurs ont un goût séparé: vous goûtez le persil, puis le citron, puis l'huile comme éléments distincts plutôt qu'un tout unifié.",
            "action": "Reposez-vous encore 5-10 minutes. Le reste ne se contente pas de se reposer, c'est l'étape finale de la recette."
          },
          {
            "state": "Perfect",
            "description": "Les saveurs se sont fusionnées en un tout unifié. L'acide, l'herbe et le grain sont inséparables. La couleur est vert émeraude vif et la salade brille uniformément du bord au centre.",
            "action": "Servir immédiatement sur un plateau plat avec des feuilles de laitue."
          },
          {
            "state": "Overdone",
            "description": "La salade est assise depuis plus d'une heure. Le persil est obscurci et flétri. Les tomates ont continué à libérer du jus et la salade est maintenant assez humide.",
            "action": "Égoutter, rafraîchir avec un peu de persil frais haché et une pression de citron, et servir immédiatement. Ne réfrigérez pas le tabouleh — le froid tue entièrement la luminosité."
          }
        ]
      },
      "feelCue": "À son meilleur, une boule de taboule devrait frapper le palais comme une explosion d'acide froid, électrique, d'herbe chaude, et une légère noisette du bulgur — le tout en une bouche propre et tranchante. Chaque morsure devrait vous faire en vouloir un autre immédiatement."
    }
  ]
};
