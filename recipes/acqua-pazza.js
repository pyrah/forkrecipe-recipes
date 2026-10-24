export default {
  "repoId": "master_italian_acqua_pazza_001",
  "parentRepoId": null,
  "slug": "acqua-pazza",
  "author": "ForkRecipe Kitchen",
  "title": "Pesce all'Acqua Pazza",
  "description": "Brème de mer entier ou bar mijoté dans de l'eau vive — un bouillon d'huile d'olive, de tomates cerises, d'ail et de vin blanc qui est à peine une sauce, à peine un bouillon, et parfaitement napolitain.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "seafood",
  "tags": [
    "poissons",
    "Italien",
    "tomates",
    "Produits de la mer",
    "napolitaine"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Brème de mer entier ou bar (gouttes, écaillées, de 500 à 700 g chacune)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "snapper",
        "branzino",
        "porcin"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Girofles d'ail (finement tranchés)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Tomates cerises (chaudées)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates datterini",
        "San Marzano pelé entier"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Vin blanc sec (par exemple Falanghina, Verdicchio)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "stocks de poissons"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau ou stock de poissons légers",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (généreuse)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil à feuilles plates (approximativement haché)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "basilic frais à la finale"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Flacons de chili rouges séchés (ou peperoncino frais)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_09"
      ],
      "outputState": "seasoned_fish",
      "instructions": "Scorez chaque poisson avec 3–4 coupes diagonales profondes de chaque côté, coupant à travers l'os, ce qui permet l'assaisonnement pour pénétrer et assure une cuisson uniforme. Assaisonner à l'intérieur et à l'extérieur avec du sel, y compris dans la cavité et les marques de score. Laissez reposer à température ambiante pendant 10 minutes pendant que vous préparez la base du bouillon. Faites sécher l'extérieur avec des serviettes en papier avant d'ajouter à la casserole.",
      "visualCue": {
        "primaryTarget": "Le poisson est sec à l'extérieur, les marques sont profondes et nettement coupées à travers la peau à l'os, le sel est distribué dans chaque coupe et dans la cavité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les marques sont peu profondes, à peine coupées à travers la peau; le sel n'est appliqué qu'à la surface.",
            "action": "Ensemencer les découpes avec un couteau tranchant; re-saisonner à l'intérieur des découpes et de la cavité."
          },
          {
            "state": "Perfect",
            "description": "Chaque coupe expose la chair blanche et l'os rose; le poisson est sec au toucher; la cavité et les coupes sont salées.",
            "action": "Continuez à construire le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Les découpes ont traversé la colonne vertébrale et le poisson est partiellement ouvert.",
            "action": "Cuire de toute façon ; il va flocer plus mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Le couteau devrait glisser à travers la chair de poisson avec une traînée lisse — un couteau terne déchirera plutôt que coupé, alors utilisez votre lame la plus tranchante pour marquer."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_08",
        "ing_06"
      ],
      "outputState": "aromatic_base",
      "instructions": "Dans une casserole large, en lisière assez grande pour maintenir le poisson à plat, chauffer l'huile d'olive à feu moyen. Ajouter l'ail tranché et les flocons de chili. Cuire doucement pendant 1 à 2 minutes, en remuant, jusqu'à ce que l'ail soit adouci et commence juste à tourner l'or pâle aux bords — pas brun. Ajouter la moitié des tomates cerises, presser doucement quelques-unes avec le dos d'une cuillère pour libérer leur jus. Cuire encore 2 minutes jusqu'à ce que les tomates commencent à ramollir et que l'huile prenne leur couleur.",
      "visualCue": {
        "primaryTarget": "L'ail est d'or pâle, pas brun; les tomates commencent à s'effondrer et leurs jus se mêlent à l'huile, qui a tourné un faible rose-orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore blanc; les tomates sont fermes et entières sans jus libéré.",
            "action": "Continuer la cuisson à feu moyen; l'ail a besoin d'adoucir pour sa bouchée crue."
          },
          {
            "state": "Perfect",
            "description": "Les tranches d'ail sont translucides avec des bords d'or clairs; les tomates sont à moitié coupées; le liquide de la poêle est une huile rose émulsifiée. Ça sent l'ail et la tomate fraîche.",
            "action": "Ajouter le vin et l'eau et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et amer; les tomates ont été réduites à une pâte épaisse.",
            "action": "Ajouter le vin immédiatement pour arrêter la cuisson; une base légèrement surcuite est récupérable, l'ail brûlé n'est pas — si vraiment brûlé, recommencer."
          }
        ]
      },
      "feelCue": "La poêle doit sentir doux et ailky sans bord acride — au moment où toute amertume entre dans l'arôme, la chaleur est trop élevée ou l'ail est allé trop loin."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "seasoned_fish",
        "aromatic_base",
        "ing_04",
        "ing_05"
      ],
      "outputState": "cooked_fish_in_broth",
      "instructions": "Verser le vin et l'eau dans la base de tomates et augmenter le feu pour laisser mijoter modérément. Placer le poisson assaisonné à plat dans la poêle — ils peuvent se chevaucher légèrement si nécessaire. Déposer une partie du bouillon et des tomates sur le poisson. Couvrir avec un couvercle et cuire à feu moyen 12-15 minutes, selon la taille du poisson. Le poisson est fait lorsque la chair au point le plus profond s'éloigne proprement de l'os et est blanc opaque tout le long du chemin.",
      "visualCue": {
        "primaryTarget": "La chair de poisson est blanche opaque à la marque la plus profonde; l'œil est devenu complètement blanc et légèrement coulé; le liquide est un bouillon fin, parfumé, riche en huile rose-or.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair à la marque est toujours translucide et rosée près de l'os; l'œil est encore clair.",
            "action": "Remplacez le couvercle et faites cuire encore 2 à 3 minutes; vérifiez encore à l'os."
          },
          {
            "state": "Perfect",
            "description": "La chair tire facilement de l'os dans des flocons propres; complètement opaque; la peau commence juste à se desserrer autour des scores. Le bouillon est parfumé et légèrement émulsifié.",
            "action": "Terminer avec du persil et de l'huile d'olive et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La chair s'est rétractée significativement de l'os; la peau tombe; le bouillon est réduit à une sauce épaisse.",
            "action": "Servir immédiatement avec de l'eau supplémentaire ajoutée au bouillon; le poisson sera plus sec mais la saveur est encore bonne."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la partie la plus épaisse du poisson avec un bout de doigt — les poissons parfaitement cuits doivent produire avec un très léger dos de ressort, comme presser une pêche mûre ferme plutôt que de la chair crue."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "cooked_fish_in_broth",
        "ing_07",
        "ing_06"
      ],
      "outputState": "finished_acqua_pazza",
      "instructions": "Dispersez le persil haché sur le poisson et la poêle. Faites glisser un dernier jet généreux de votre meilleure huile d'olive extra vierge directement sur le poisson et le bouillon. L'huile d'olive crue ajoutée à la fin est essentielle au caractère du plat — elle émulsifie dans le bouillon pendant que vous le cuillerez. Servir le poisson entier dans la casserole ou soigneusement transféré sur un plateau profond avec tout le bouillon lavé autour. Apportez du bon pain à la poêle.",
      "visualCue": {
        "primaryTarget": "L'huile d'or vert tourbillonne dans le bouillon d'or rose; le persil vert vif éparpillé au-dessus du poisson; le bouillon a un peu d'huile d'olive sur sa surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas d'huile d'olive ajoutée; le bouillon est mince et inachevé.",
            "action": "Ajoutez l'huile d'olive maintenant — elle rondelle et enrichit le bouillon même à table."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est légèrement émulsifié avec l'huile d'olive, lumineux et parfumé; le persil est vert vif; le plat semble vivant et scintillant.",
            "action": "Servir immédiatement avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile d'olive a rendu le bouillon gras et lourd.",
            "action": "Ajouter un jet d'eau et un tourbillon pour rééquilibrer l'émulsion."
          }
        ]
      },
      "feelCue": "Le bouillon à son meilleur est presque sans poids sur la cuillère — léger comme consommé mais scintille avec l'huile d'olive; il doit sentir la mer, l'ail et les tomates chaudes simultanément."
    }
  ]
};
