export default {
  "repoId": "master_international_pickled_red_onions_001",
  "parentRepoId": null,
  "slug": "pickled-red-onions",
  "author": "ForkRecipe Kitchen",
  "title": "Oignons rouges marinés",
  "description": "Des oignons rouges finement coupés sont immergés dans une saumure de vinaigre avec une pincée de sucre et de sel, laissés aussi peu que 30 minutes — passant de vifs et crus à brillants magenta, tendres et moelleux.",
  "cuisine": "internationaux relatifs",
  "culture": "internationaux relatifs",
  "category": "condiments",
  "tags": [
    "d'oignons marinés",
    "condiment",
    "cueillir rapidement",
    "végétalien",
    "Sans gluten",
    "pas de cuisson"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
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
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Oignon rouge (causé, tranché en papier-fin sur une mandoline ou un couteau)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes",
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge",
        "vinaigre de vin blanc",
        "vinaigre de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie",
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Grains de poivre noirs entiers",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Feuille de laurier séchée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trancher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sliced_onions",
      "instructions": "Coupez l'oignon rouge à travers la racine, puis coupez le plus fin possible – idéalement 2 mm ou moins sur une mandoline, ou avec un travail de couteau soigné suivant le grain. Plus la tranche est mince, plus le cornichon pénètre rapidement et plus le résultat est tendre. L'uniformité est importante : les tranches épaisses et minces se corsent à des taux différents et on finit avec un peu de brut et de limon.",
      "visualCue": {
        "primaryTarget": "Anneaux translucides, même fins, de couleur rouge-violet foncé. Un tas d'entre eux semble presque transparent lorsqu'il est tenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont inégales — quelques coins épais mélangés à de fines tranches; la pile n'a pas d'uniformité.",
            "action": "Triez et coupez les morceaux plus épais, ou acceptez que les tranches plus épaisses nécessitent un temps de cornichons plus long (au moins 2 heures)."
          },
          {
            "state": "Perfect",
            "description": "Même, les demi-roues minces de gossamer qui drapent et bouclent. Elles ont l'air presque translucides et se colorent uniformément dans la saumure.",
            "action": "Emballez dans un bocal et préparez la saumure."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont si fines qu'elles se sont transformées en lambeaux ou l'oignon a broyé plutôt qu'en tranches propres.",
            "action": "Toujours utilisables, les lambeaux se corsent rapidement et goûtent bien, avec une texture moins élégante."
          }
        ]
      },
      "feelCue": "Exécutez un doigt sur la face coupée de l'oignon — il devrait se sentir lisse et vitreux, non rabâché. La piqûre dans vos yeux est un signe que les cellules ont été coupées proprement plutôt que écrasées."
    },
    {
      "nodeId": "step_2",
      "action": "Dissoudre",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "pickling_brine",
      "instructions": "Mélanger le vinaigre, l'eau, le sucre et le sel dans une petite casserole à feu moyen. Incorporer constamment jusqu'à ce que le sucre et le sel soient complètement dissous, environ 2 minutes. Ajouter les grains de poivre et la laurier et retirer du feu. La saumure n'a pas besoin de bouillir — vous ne faites que dissoudre les solides et non pas cuire les oignons. Laisser refroidir 5 minutes avant de verser.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré clair et pâle sans sucre visible ni granulés de sel. Peppercorns bob à la surface. Il sent propre et fortement vinaigre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Liquide nuageux avec des granules de sucre encore visibles sur le fond de la poêle; le liquide a un goût de gritty.",
            "action": "Continuez à remuer à feu doux jusqu'à ce que chaque cristal se dissout avant de le retirer."
          },
          {
            "state": "Perfect",
            "description": "Clair, brillant et équilibré — fortement acide avec une légère douceur et un sel propre. Pas de grain au goût.",
            "action": "Laisser refroidir légèrement, puis verser sur les oignons."
          },
          {
            "state": "Overdone",
            "description": "La saumure a fait bouillir vigoureusement et a diminué sensiblement, concentrant l'acide et le sel au-delà du ratio de la recette.",
            "action": "Ajouter une éclaboussure d'eau pour restaurer le volume et re-goûter pour l'équilibre avant d'utiliser."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt — il devrait piquer proprement avec du vinaigre. Une sensation de gritty signifie le sel non dissous ou le sucre reste."
    },
    {
      "nodeId": "step_3",
      "action": "Infuser",
      "inputs": [
        "sliced_onions",
        "pickling_brine"
      ],
      "outputState": "pickling_onions",
      "instructions": "Conditionnez les oignons tranchés dans un bocal en verre propre, pressez doucement pour qu'ils s'assoient sous le bord. Verser la saumure chaude (non bouillante) sur les oignons, les submerger complètement. Appuyez sur les oignons à l'aide d'une fourchette, si nécessaire — tout exposé à l'air ne se corse pas et peut décolorer. Sceller le pot de façon lâche ou déposer un petit morceau de plastique sur le dessus. Laisser à température ambiante pendant au moins 30 minutes; 1 heure est meilleure.",
      "visualCue": {
        "primaryTarget": "Oignons entièrement immergés dans la saumure, qui commencent déjà à passer du violet vif au rose-magenta profond aux bords où l'acide a pénétré. Le pot ressemble à des bijoux liquides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons ont toujours l'air violet cru et sont assis au-dessus de la saumure, à peine en contact avec l'acide.",
            "action": "Poussez-les fermement avec une fourchette ou une cuillère et assurez-vous que la saumure couvre entièrement. Ajouter un peu plus d'eau vinaigre si le pot n'est pas assez plein."
          },
          {
            "state": "Perfect",
            "description": "Les oignons submergés et commençant leur changement de couleur au magenta-pink aux bords, avec un arôme lumineux et propre quand vous soulevez le couvercle.",
            "action": "Laisser raide pendant au moins 30 minutes, puis goûter un — il devrait être lumineux, tannant, et agréablement moelleux."
          },
          {
            "state": "Overdone",
            "description": "Ne s'applique pas à l'étape du trempage — il n'y a pas de surdosage à 30 minutes. Le décapage prolongé (plusieurs jours) peut les rendre doux et très aigres.",
            "action": "Pour un résultat plus rapide et plus croustillant, utiliser à la marque de 30 minutes; pour un cornichon plus moelleux et aromatisé, réfrigérer et utiliser dans les 2 semaines."
          }
        ]
      },
      "feelCue": "Après 30 minutes, poissonnez une tranche et mordez-la — elle devrait encore avoir une petite quantité de claquage, pas la croûte brute d'un oignon frais ou la boiterie d'une longue cuisson. Tu veux de la douceur, mais pas du flabby."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer",
      "inputs": [
        "pickling_onions"
      ],
      "outputState": "finished_pickled_red_onions",
      "instructions": "Après 30 à 60 minutes à température ambiante, transférer le pot scellé au réfrigérateur. Le cornichon est prêt à manger immédiatement mais continuera à s'améliorer au cours des 24 prochaines heures lorsque les oignons s'adoucissent légèrement et que la saumure pénètre complètement. Utiliser dans les 2 à 3 semaines. La saumure tournera un magenta vif qui tachera — gardez un chiffon à proximité au moment de verser.",
      "visualCue": {
        "primaryTarget": "Les oignons sont entièrement saturés d'une couleur fuchsia-magenta vive, uniforme dans chaque tranche. La saumure dans le pot est un rose vif et brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore partiellement violets au cœur de chaque tranche — l'acide n'a pas complètement pénétré. Ils goûtent cru et sulfureux au centre.",
            "action": "Revenir à la température ambiante pendant 30 minutes, ou réfrigérer pendant la nuit et utiliser le lendemain."
          },
          {
            "state": "Perfect",
            "description": "Uniformement magenta, légèrement croquant, moelleux, et lumineux avec une morsure de vinaigre propre qui ne déborde pas. Ils se replient et drapent sans se casser.",
            "action": "Pilez sur des tacos, des bols à grains, des sandwichs ou servez avec des viandes grillées."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 3 semaines, les oignons deviennent mou, très aigres, et perdent leur couleur vive à un brun rougeâtre boueux.",
            "action": "Jetez et faites un lot frais. La saumure elle-même peut être réutilisée une fois pour une seconde, cornichon plus léger."
          }
        ]
      },
      "feelCue": "Un oignon mariné parfait devrait se sentir soyeux et céder entre vos doigts, pas croquant et cru, pas waterlogged et doux — il ya une fenêtre étroite de tendre-crisp que vous visez."
    }
  ]
};
