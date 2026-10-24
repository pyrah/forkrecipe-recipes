export default {
  "repoId": "master_french_fish_fumet_001",
  "parentRepoId": null,
  "slug": "fish-fumet",
  "author": "ForkRecipe Kitchen",
  "title": "Fumet de poisson",
  "description": "Le cousin rapide, pâle et parfumé des longs stocks bruns — les os maigres de poisson blanc transpiraient dans le beurre avec le poireau, le fenouil et un jet de vin blanc sec, puis à peine mijoté pendant une demi-heure et jamais, jamais bouilli, de sorte qu'il reste clair, délicat et prêt à devenir une sauce, un velours, ou un bain de pochage.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "stock",
    "français",
    "poissons",
    "Vin blanc",
    "Fumet",
    "base"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Ossements et têtes de poissons blancs (semelle, turbot, snapper — branchies enlevées, rincées à froid)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Cadres en flétan",
        "os de lottes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Légume, blanc et vert pâle seulement (finement tranché, bien lavé)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon (coupé)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Ampoule en fenouil (finement tranchée)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Céleri"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Champignons à bouton (en tranches, facultatifs — pour le corps)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "garnitures de champignons"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc sec (Muscadet, Sauvignon Blanc)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau froide (pour couvrir)",
      "ratioValue": 130,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Bouquet garni (pâtes de persil, thym, baie)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Maïs de poivre blanc (légèrement craqué)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "maïs poivré noir"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Citrus",
      "name": "Citron (quelques tranches fines, en option)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cleaned_bones",
      "instructions": "Coupez les cadres de poisson en morceaux qui correspondent à votre pot. Retirer les branchies sombres et rincer les os sous l'eau froide courante, puis les tremper 10 à 15 minutes dans un bol d'eau froide pour lessiver le sang, ce qui, sinon, troubler et griser le stock. Drainez bien. Les os doivent être maigres et blancs — aucun poisson gras comme le saumon ou le maquereau, qui devient un rang flou.",
      "visualCue": {
        "primaryTarget": "Les os sont de l'ivoire pâle et l'eau trempe du rose au presque clair, sans sang collant, branchies ou intestins.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau qui sème est nuageuse rouge-rose et les caillots foncés s'accrochent encore le long de la colonne vertébrale et des plaques branchiales.",
            "action": "Rincez encore sous l'eau froide, choisissez les branchies restantes et la lignée sanguine, et trempez encore quelques minutes."
          },
          {
            "state": "Perfect",
            "description": "Des cadres blancs propres, de l'eau claire, une odeur de mer fraîche sans bord boueux ou amer.",
            "action": "Égoutter et transpirer les aromatiques pour les os."
          },
          {
            "state": "Overdone",
            "description": "Les os sentent plat et lavé, ou les têtes se sont réchauffées et ont commencé à sentir.",
            "action": "Gardez tout froid; si quelque chose sent l'amer ou l'ammoniaque, jetez - un fumet est seulement aussi frais que ses os."
          }
        ]
      },
      "feelCue": "Les os doivent se sentir fermes et froids et sentir la mer propre — comme une marée fraîche, jamais d'ammoniac. Si votre nez ride, le poisson est trop vieux pour le stock."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "sweated_vegetables",
      "instructions": "Faire fondre le beurre dans une grande casserole à feu doux et moyen. Ajouter le poireau, le fenouil et les champignons et transpirer doucement, en remuant pendant 5-6 minutes jusqu'à ce qu'ils soient doux et translucides mais sans aucune couleur. Le brunissement ici ferait teinter et grossir le stock — vous voulez la douceur des légumes, pas du caramel.",
      "visualCue": {
        "primaryTarget": "Les légumes sont limpides, scintillants et translucides, le poireau est sombre et soyeux, avec pas une seule tache de couleur dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore fermes, opaques et criants, le poireau est blanc-vert vif et croquant.",
            "action": "Abaissez légèrement le feu, couvrez-le et donnez-leur quelques minutes de plus pour adoucir et tourner translucide."
          },
          {
            "state": "Perfect",
            "description": "Légumes doux, vitreux et sucrés, sans brunissement, dans un beurre fondu clair.",
            "action": "Ajouter les os nettoyés et laisser raidir le beurre."
          },
          {
            "state": "Overdone",
            "description": "Les bords du poireau et du fenouil deviennent dorés et le beurre commence à brunir et à sentir la noix.",
            "action": "Retirez immédiatement le feu et ajoutez les os et le vin pour refroidir le pot avant que la couleur ne se développe."
          }
        ]
      },
      "feelCue": "Gardez la chaleur suffisamment basse pour que vous entendiez un doux et paresseux sizzle et le beurre ne mousse jamais brun. Remuer et regarder — au moment où un seul bord bruns, vous êtes allé trop chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Stiffen",
      "inputs": [
        "sweated_vegetables",
        "cleaned_bones"
      ],
      "outputState": "stiffened_bones",
      "instructions": "Ajouter les os drainés dans le pot, lever le feu à moyen et remuer pendant 2-3 minutes, juste jusqu'à ce que la chair s'accrochant aux cadres tourne de translucide à opaque blanc et raidisse. Encore une fois, ne prenez pas de couleur. Ce court raidissement fixe les protéines afin qu'elles libèrent la saveur propre plutôt que d'assombrir le bouillon.",
      "visualCue": {
        "primaryTarget": "Les morceaux de chair sur les os sont devenus blancs crayeux et fermes, et le pot sent le beurre, les poireaux et les poissons frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair sur les os est encore vitreuse et translucide, les os boitent dans le pot.",
            "action": "Continuer à remuer à feu moyen encore une minute jusqu'à ce que la chair blanchisse et ferme."
          },
          {
            "state": "Perfect",
            "description": "La chair blanche et les os opaques et raidis, sans brunissement, un arôme doux propre qui s'élève du pot.",
            "action": "Déglacer avec le vin et réduire brièvement."
          },
          {
            "state": "Overdone",
            "description": "Des morceaux de chair ou de légumes attrapent de l'or sur le plancher de pot et l'odeur devient grillée.",
            "action": "Ajouter le vin immédiatement pour déglacer et arrêter la coloration avant qu'il ne touche le stock."
          }
        ]
      },
      "feelCue": "Mangez un os avec la cuillère — la chair qui s'accroche doit se sentir ferme et ferme, et non glissante. L'arôme doit toujours être pâle et doux, jamais rôti."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer et réduire",
      "inputs": [
        "stiffened_bones",
        "ing_06"
      ],
      "outputState": "wine_base",
      "instructions": "Verser le vin blanc et racler le plancher de pot. Portez à frémir et laissez-le buller 3-4 minutes pour faire cuire l'alcool cru et concentrer le vin — ce qui construit l'épine dorsale brillante de la fumée. Réduire de moitié environ avant d'ajouter de l'eau.",
      "visualCue": {
        "primaryTarget": "Le vin a réduit à une petite piscine parfumée autour des os, sentant des fruits chauds et l'acidité sans piqûre d'alcool cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beaucoup de liquide fin dans la casserole et une odeur d'alcool cru et piquant.",
            "action": "Garder à mijoter rapidement jusqu'à ce que le volume baisse de moitié et que les fortes fumées se mêlent."
          },
          {
            "state": "Perfect",
            "description": "Vin réduit de moitié, sirupeux aux bords, sentant lumineux et fruité plutôt que boueux.",
            "action": "Ajouter l'eau froide, le bouquet garni, les grains de poivre et le citron."
          },
          {
            "state": "Overdone",
            "description": "La poêle est presque sèche et le vin se réduit à une glaçure collante et suracide qui risque d'attraper.",
            "action": "Ajouter l'eau froide tout de suite pour arrêter la réduction avant que rien ne brûle."
          }
        ]
      },
      "feelCue": "Penchez-vous et respirez — lorsque la vapeur d'alcool s'adoucit dans un tang doux et fruité, le vin est prêt à être allongé avec de l'eau."
    },
    {
      "nodeId": "step_5",
      "action": "Mijoter",
      "inputs": [
        "wine_base",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "infused_fumet",
      "instructions": "Ajouter juste assez d'eau froide pour couvrir à peine les os, puis mettre dans le bouquet garni, les grains de poivre blanc cassé et les tranches de citron. Portez - vous lentement à mijoter à nu — quelques bulles paresseuses qui se brisent, qui ne font jamais bouillir — et éjaculez la mousse grise qui monte. Tenir ce murmure d'un mijot pendant exactement 25-30 minutes, pas plus; poussé au-delà cela, les os de poisson deviennent le stock amer et colle-like.",
      "visualCue": {
        "primaryTarget": "Un bouillon pâle, légèrement doré, presque clair, avec seulement la bulle occasionnelle qui s'élève, une surface sans gris propre, sentant le poisson doux, le vin et les herbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est à peine chaud ou a trempé moins de 15 minutes; il a un goût mince et aqueux, plus de vin que de poisson.",
            "action": "Maintenez la mijoter un peu plus longtemps, jusqu'à la marque de 25-30 minutes, pour dessiner la saveur du poisson."
          },
          {
            "state": "Perfect",
            "description": "Stock aromatique clair, pâle et arrondi; surface à peine tremblante, mousse écrémée.",
            "action": "Souchez immédiatement pour arrêter l'extraction."
          },
          {
            "state": "Overdone",
            "description": "Le stock a bouilli dur et est devenu gris et nuageux, ou bien mijoté au bout de 30 minutes et est devenu amer et lourd d'os.",
            "action": "La souche à la fois; si elle est trouble, ne la faites pas bouillir à nouveau — clarifiez-la doucement ou ne l'acceptez que pour des soupes opaques."
          }
        ]
      },
      "feelCue": "Surveillez la surface comme un faucon — elle doit trembler, et non pas hurler. Une ébullition dure émulsionne la graisse et l'os dans le liquide et la rend grise, la seule erreur qu'une fumée ne pardonne jamais."
    },
    {
      "nodeId": "step_6",
      "action": "Filtrer",
      "inputs": [
        "infused_fumet"
      ],
      "outputState": "finished_fumet",
      "instructions": "Déposer la fumée — ne pas mettre le pot — à travers un tamis fin bordé de mousseline humide dans un récipient propre, laissant les sédiments installés derrière. Ne pressez pas les solides, ce qui ferait passer le grain et le nuage. Laisser refroidir rapidement sur un bain de glace et réfrigérer; utiliser dans les deux jours ou congeler. Laissez-le non salé afin qu'il puisse réduire librement en sauces plus tard.",
      "visualCue": {
        "primaryTarget": "Un liquide clair, doré à ivoire, sans fragments d'os et de grain, sentant délicatement la mer, le poireau et le vin blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock formé est nuageux ou porte du grain fin et des taches parce que le pot a été bouché ou les solides pressés.",
            "action": "Reformer délicatement à travers la mousseline fraîche humide, larguer du haut et laisser les sédiments derrière."
          },
          {
            "state": "Perfect",
            "description": "Fumet lumineux, clair, légèrement parfumé avec une profondeur savoureuse propre et une légère luminosité de vin.",
            "action": "Refroidissez-vous au-dessus de la glace et entreposez-la en velours, en bisque, en risotto ou en liquide de pochage."
          },
          {
            "state": "Overdone",
            "description": "Le stock laissé pour se refroidir lentement à la température ambiante est devenu terne, aigre ou nuageux car il était trop longtemps chaud.",
            "action": "Refroidir rapidement le stock de poisson au-dessus de la glace — s'il s'est assommé ou s'il s'éteint après un refroidissement lent, le jeter."
          }
        ]
      },
      "feelCue": "Inclinez le récipient à la lumière — une bonne fumée est presque à travers, avec un moulage d'or faible, et glisse comme de la soie mince, pas comme de l'eau grasse nuageuse. Il devrait sentir une mer calme, pas un marché de poisson en fin de journée."
    }
  ]
};
