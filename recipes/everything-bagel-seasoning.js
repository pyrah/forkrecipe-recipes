export default {
  "repoId": "master_american_everything_bagel_seasoning_001",
  "parentRepoId": null,
  "slug": "everything-bagel-seasoning",
  "author": "ForkRecipe Kitchen",
  "title": "Tout l'assaisonnement Bagel",
  "description": "Les saveurs d'un bagel new - yorkais dans un pot — sésame, pavot, ail séché, oignon séché et sel flocé — le condiment le plus polyvalent de tous les cellier.",
  "cuisine": "Américain",
  "culture": "New York Juif-Américain",
  "category": "condiments",
  "tags": [
    "bagel",
    "nouveau-né",
    "assaisonnement",
    "sésame",
    "condiment",
    "Juive-américaine",
    "Cellier"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Graines de sésame blanc",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Graines de sésame noir",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Graines de coquelicots",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail haché séché",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon haché séché",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer grillé",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel casher grossier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_white_sesame",
      "instructions": "Placer les graines de sésame blanc dans une poêle sèche à fond lourd à feu moyen. Secouer constamment pendant 2 à 3 minutes jusqu'à ce qu'ils deviennent dorés et sentent chaud et noisette. Retirer immédiatement dans une plaque large pour refroidir — ne pas les laisser dans la poêle chaude, car la chaleur résiduelle continuera de les cuire.",
      "visualCue": {
        "primaryTarget": "Même les graines de sésame d'or clair ayant une couleur uniforme de toast chaud dans toute la casserole — pas de graines blanches pâles, pas de graines brunes foncées non plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore blanches et crues. Aucun arôme détectable. La casserole sonne creux quand les graines sont secouées à travers la surface.",
            "action": "Continuer à griller à feu moyen. Le changement de couleur commence aux bords et se déplace vers l'intérieur — inclinez souvent la poêle pour une chaleur uniforme."
          },
          {
            "state": "Perfect",
            "description": "Or clair, arôme chaud-nourriture remplissant la cuisine. Les graines cliquent et glissent l'une contre l'autre dans la casserole, plus sèche qu'auparavant. Quelques-uns seront très légèrement plus sombres.",
            "action": "Verser immédiatement sur une assiette fraîche. Laisser refroidir complètement avant de se combiner avec l'ail séché et l'oignon — ajouter de la chaleur à ces ingrédients les rendra amers."
          },
          {
            "state": "Overdone",
            "description": "Doré brun à brun foncé avec un bord légèrement amer, presque brûlé dans l'arôme. Des graines qui commencent à exploser.",
            "action": "Jeter et recommencer. Le sésame grillé amère fera le goût entier du lot acride. Tout l'assaisonnement du bagel dépend de la douceur du sésame."
          }
        ]
      },
      "feelCue": "Une graine de sésame entièrement grillée est plus légère et plus sèche qu'une graine crue; elle glisse librement de votre palmier, tandis que les graines crues ont une légère collance lorsque vous pointez la main."
    },
    {
      "nodeId": "step_2",
      "action": "Découpe",
      "inputs": [
        "toasted_white_sesame",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "everything_seasoning",
      "instructions": "Laisser refroidir complètement le sésame grillé, puis mélanger les six ingrédients dans un grand pot. Bien mélanger pour répartir les ingrédients de façon uniforme — le sésame noir et les graines de pavot coulent tandis que les morceaux d'ail et d'oignon séchés flottent, donc il faut bien mélanger. Sceller et conserver à température ambiante jusqu'à 3 mois.",
      "visualCue": {
        "primaryTarget": "Un mélange hétérogène de graines d'ivoire et de graines noires, de graines de pavot bleu gris, de flocons d'ail pâle et d'oignon, et de cristaux de sel brillants — un confetti de fragments salés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange a l'air stratifié dans le pot — le pavot dense et le sésame au fond, l'ail et l'oignon flottant en haut. Pas complètement mélangé.",
            "action": "Mélanger du bas vers le haut, puis sceller le pot et agiter vigoureusement. Il stratifie par densité rapidement — remuer avant chaque utilisation."
          },
          {
            "state": "Perfect",
            "description": "Chaque cuillère contient les six éléments. L'odeur est salée, ailée et légèrement grillée, comme la croûte chaude d'un bagel de tout.",
            "action": "Sceau et magasin. Agiter avant chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Le sel s'est serré contre l'humidité dans le pot, formant des morceaux cristallins blancs qui ne se distribuent plus uniformément.",
            "action": "Ajouter quelques grains secs de riz pour absorber l'humidité, ou étaler le mélange sur une casserole pendant 10 minutes dans un four à 100 °C pour chasser l'humidité."
          }
        ]
      },
      "feelCue": "Une palmeuse de tout assaisonnement doit se sentir sèche et libre de couler — les tailles de particules mélangées lui donnent une texture agréable de gritty-to-flaky, avec les cristaux de sel les plus grands morceaux du mélange."
    }
  ]
};
