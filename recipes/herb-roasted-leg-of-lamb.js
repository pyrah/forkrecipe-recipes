export default {
  "repoId": "master_french_herb_roasted_leg_of_lamb_001",
  "parentRepoId": null,
  "slug": "herb-roasted-leg-of-lamb",
  "author": "ForkRecipe Kitchen",
  "title": "Jambe d'agneau grillée aux herbes",
  "description": "Une jambe d'agneau désossée parsemée d'ail, enrobée d'une croûte dijon-herbe, rôtie jusqu'à ce que la graisse rende dorée et que le centre reste un rose vif.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "proteins",
  "tags": [
    "agneau",
    "grillés",
    "herbe",
    "français",
    "Sans gluten",
    "Rôti du dimanche"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hr",
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
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambe d'agneau désossée (2–2,5 kg, garnie d'excédent de graisse)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Jambe d'agneau semi-ossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Giroves à l'ail, pelées et coupées en fines tranches",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Moutarde de Dijon",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Romarin frais, haché finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Vin blanc sec ou eau (pour rôtir)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Filets d'anchois dans l'huile (facultatif, plus de saveur)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Citron, jus et zeste",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Stud et saison",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_08"
      ],
      "outputState": "studded_lamb",
      "instructions": "Retirer l'agneau du réfrigérateur 1 heure avant le torréfaction — une jambe froide au centre fera cuire inégalement, laissant les couches extérieures trop cuites pendant que le centre lutte pour atteindre la température. À l'aide d'un couteau à parure étroit, couper de 20 à 25 fentes profondes sur toute la jambe, de 3 à 4 cm de profondeur, à travers le bouchon graisseux et dans le muscle. Poussez un filet d'ail (et éventuellement la moitié d'un filet d'anchois) profondément dans chaque fente afin qu'il soit bouffé avec la surface. Assaisonner l'ensemble de l'extérieur de façon agressive avec du sel casher et du poivre noir — une jambe d'agneau désossée de cette taille nécessite plus d'assaisonnement que vous ne vous attendez, car seule la couche externe est accessible au sel.",
      "visualCue": {
        "primaryTarget": "La surface des jambes est uniformément parsemée d'ail visible poussé dans les fentes, uniformément répartie sur tous les visages. L'extérieur entier est recouvert de cristaux de sel sans grandes taches nues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les éclats d'ail sont lâches et en saillie; ils brûleront dans le four et se transformeront en acrides.",
            "action": "Poussez chaque tranche plus profondément avec un bout de doigt jusqu'à ce que seule l'extrémité même soit visible ou qu'elle soit complètement encastrée. Trim tous ceux qui sont trop grands pour s'adapter."
          },
          {
            "state": "Perfect",
            "description": "L'ail et l'anchois sont entièrement encastrés en fentes, répartis uniformément. Le revêtement en sel a légèrement séché la surface — l'extérieur est légèrement crayeux plutôt que brillant.",
            "action": "Construisez la croûte d'herbe et appliquez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de fentes très espacées — la structure musculaire est compromise et les jus s'écoulent excessivement à travers eux pendant la torréfaction.",
            "action": "Procéder — la pénétration de la saveur est excellente. Les jus de torréfaction seront particulièrement savoureux."
          }
        ]
      },
      "feelCue": "Passez votre main à travers la jambe salée — elle doit être sèche et légèrement rugueuse à partir des cristaux de sel, pas mouillée ou collante. L'os doit se sentir frais et solide à l'extrémité de la tige."
    },
    {
      "nodeId": "step_2",
      "action": "Appliquer la croûte d'herbe",
      "inputs": [
        "studded_lamb",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_11"
      ],
      "outputState": "crusted_lamb",
      "instructions": "Mélanger la moutarde de Dijon, le romarin, le thym, l'huile d'olive, le zeste de citron et une pincée de sel dans un bol. À l'aide d'une spatule ou de vos mains, enrobez de cette pâte toute la surface de la jambe d'agneau, d'une épaisseur de 2 à 3 mm, et couvrez chaque surface à l'exception de l'extrémité coupée de l'os. La moutarde agit à la fois comme saveur et comme adhésif, tenant les herbes contre la surface pendant la torréfaction et formant la croûte. Appuyez fermement sur les herbes dans la pâte afin qu'elles soient intégrées plutôt que lâches sur le dessus.",
      "visualCue": {
        "primaryTarget": "L'agneau est uniformément recouvert d'une pâte épaisse, vert foncé, recouverte de chaque millimètre, sans taches nues visibles. Les taches d'herbe sont clairement intégrées dans la couche de moutarde, et ne flottent pas sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est fine et patchée — les herbes glissent et la couche de moutarde est trop fine pour les tenir pendant le rôti.",
            "action": "Appliquez plus de pâte sur des patchs nus et appuyez fermement avec votre paume. La croûte doit adhérer sous 200°C de chaleur au four."
          },
          {
            "state": "Perfect",
            "description": "Une couche épaisse, uniforme, vert foncé qui adhère entièrement à la surface. En appuyant doucement avec votre paume ne produit ni glissement ni séparation.",
            "action": "Placer sur une grille dans une rôtissoire avec le vin à la base. Rôtir immédiatement ou réfrigérer jusqu'à la nuit — la marination de la nuit intensifie le goût de l'herbe."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'accumule sur les côtés plutôt que d'adhérer — trop d'huile dans le mélange, ou la surface était trop humide lorsqu'elle était appliquée.",
            "action": "Essuyez la pâte enroulée sur la surface et appuyez fermement. Réfrigérer pendant 15 minutes pour le laisser raffermir avant de rôtir."
          }
        ]
      },
      "feelCue": "L'agneau doit avoir l'impression de porter un manteau ferme et légèrement collant. L'arôme doit être intensément à base de plantes et vif avec Dijon."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "crusted_lamb",
        "ing_09"
      ],
      "outputState": "roasted_lamb_leg",
      "instructions": "Préchauffer le four à 220°C / 425°F. Placer l'agneau sur une grille dans une poêle avec le vin à la base de la poêle. Commencez à feu vif pendant 20 minutes pour brunir et mettre la croûte. Réduisez à 170°C / 340°F et continuez à rôtir jusqu'à ce qu'un thermomètre à lecture instantanée à la partie la plus épaisse (sans toucher l'os) lit 57°C / 135°F pour un temps moyen ou 63°C / 145°F pour un temps moyen, environ 1 heure 20 minutes à 1 heure 45 minutes pour une jambe de 2 kg. Le muscle le plus épais à l'extrémité de la hanche est la référence: la tige sera plus cuite, ce qui est bien. Faire sauter les jus de cuisson toutes les 30 minutes. Si la croûte s'assombrit trop vite, tentez avec du papier.",
      "visualCue": {
        "primaryTarget": "La croûte est vert doré profond, légèrement carbonisée aux points les plus hauts. Le bouchon de graisse a rendu et est doré et croustillant, pas blanc et cru. Les jus dans la base de la casserole sont ambres, pas aqueux. Les jus de la partie la plus épaisse sont rose clair lorsqu'ils sont percés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Thermomètre lit en dessous de 54°C — le centre est encore rouge et froid. La croûte a l'air pâle et la graisse n'a pas rendu.",
            "action": "Retournez au four et vérifiez toutes les 10 minutes. Ne vous précipitez pas en soulevant la chaleur — la torréfaction douce donne plus de cuisson."
          },
          {
            "state": "Perfect",
            "description": "Le thermomètre lit 57-60°C au point le plus épais. Les jus sont roses. La croûte est verte dorée et parfumée. Le gras est rendu et légèrement croquant.",
            "action": "Retirer immédiatement du four et reposer à découvert sur une planche à découper pendant 20 à 30 minutes minimum."
          },
          {
            "state": "Overdone",
            "description": "Le thermomètre se lit au-dessus de 70°C. Les jus sont complètement dégagés. Le muscle le plus épais est passé du rose au brun gris.",
            "action": "Supprimer immédiatement. Repose-toi comme d'habitude. Servir avec les jus de casserole — la jambe extérieure sera sèche, mais l'intérieur près de l'os peut encore être agréable."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur le muscle le plus épais avec votre paume à travers une serviette de cuisine pliée — l'agneau moyen-rare donne comme un biceps tendu. Si elle se sent aussi ferme qu'un avant-bras entièrement flexible, elle a trop cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Repos et coupe",
      "inputs": [
        "roasted_lamb_leg"
      ],
      "outputState": "finished_herb_roasted_lamb",
      "instructions": "Reposez l'agneau à découvert sur une planche à découper pendant au moins 20 minutes — 30 pour une jambe de 2 kg. La température interne augmentera de 3 à 5 °C pendant le repos. Pendant ce temps, déglacer la rôtissoire avec le vin restant, racler tout le fond doré et les gouttes pour faire un simple jus de poêle. Pour découper : tenir l'os de la tige debout avec une serviette, lancer le couteau le long de l'os pour libérer la viande, puis couper le grain en tranches de 8 à 10 mm. Les tranches près de la hanche seront de moyenne-rare ; celles près de la tige seront plus cuites, donnant aux clients des options.",
      "visualCue": {
        "primaryTarget": "Les tranches sculptées montrent un centre rose-rose vif qui s'estompe jusqu'à un anneau brun-gris de 3 à 5 mm au bord extérieur, surmonté de la croûte verte dorée. La surface coupée brille avec des jus redistribués plutôt que de courir avec du sang.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont rouges et fraîches au centre et les jus inondent immédiatement la planche. La viande n'a pas assez longtemps reposé.",
            "action": "Remonter les tranches sculptées et les laisser reposer encore 10 minutes avant de servir. Les surfaces coupées seront légèrement cuites à partir de la chaleur résiduelle."
          },
          {
            "state": "Perfect",
            "description": "Centre rose vif, pas de saignement sur la planche, surfaces de coupe scintillantes. L'arôme d'ail rôti et de romarin remplit la pièce.",
            "action": "Arrangez-vous sur un plateau chaud et le jus de cuillère. Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont uniformément brun-gris sans rose visible. La viande est ferme et sèche, et les jus sont limpides comme de l'eau au repos.",
            "action": "Servir avec beaucoup de jus de poêle et une bonne sauce — béarnaise ou menthe chimichurri — pour compenser la perte d'humidité."
          }
        ]
      },
      "feelCue": "Après le repos, appuyez sur toute la jambe avec votre paume : elle devrait céder et revenir lentement, comme un oreiller ferme. Ce ressort lent est le collagène redistribuant et les jus se réinstallent dans le muscle."
    }
  ]
};
