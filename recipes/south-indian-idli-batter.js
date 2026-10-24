export default {
  "repoId": "master_indian_southindianidlibatter_001",
  "parentRepoId": null,
  "slug": "south-indian-idli-batter",
  "author": "ForkRecipe Kitchen",
  "title": "Idli Batter des Indiens du Sud",
  "description": "Riz par huilé et lentilles noires fractionnées, trempées séparément et broyées à une pâte soyeuse, puis laissées la nuit au ferment jusqu'à ce qu'elles soient aérées et légèrement acides — la fondation de l'idli, dosa et uttapam à travers l'Inde du Sud.",
  "cuisine": "Indiens",
  "culture": "Tamil Nadu / Karnataka",
  "category": "fermented",
  "tags": [
    "fermenté",
    "végétalien",
    "Sans gluten",
    "riz",
    "lentilles",
    "indienne",
    "idli"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "16 hours",
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
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz d'Idli (riz à grains courts décortiqués)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "riz séché régulier",
        "idli rava (riz semoule)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Urad dal (gras noir cassé, décortiqué)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel non iodé",
      "ratioValue": 1.5,
      "defaultUnit": "tsp per cup of batter",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau froide (à broyer)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Graines de fénugreek (méthies)",
      "ratioValue": 0.25,
      "defaultUnit": "tsp per cup of urad",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "soaked_grains",
      "instructions": "Rincer le riz 3-4 fois jusqu'à ce que l'eau soit claire. Rincer les graines d'urad et de fenugrec ensemble 2-3 fois. Les tremper dans des bols d'eau froide séparés pendant 6-8 heures (ou toute la nuit). Conserver les bols dans un endroit frais — pas réfrigéré. L'eau de trempage devrait couvrir les grains d'au moins 5cm car ils gonfleront significativement. Les graines de fenugrec s'imprégnent de l'urad dal. Après le trempage, égouttez chaque bol mais réservez l'eau de trempage de l'urad dal séparément — il contient des levures sauvages et des bactéries qui aident à la fermentation.",
      "visualCue": {
        "primaryTarget": "Graines de pruneaux, gonflées — le riz est passé du translucide au blanc opaque; l'urad dal a presque doublé en taille et est devenu très blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore fermes et ont à peine gonflé. Le riz est encore vitreux. Urad dal n'est pas encore doublé.",
            "action": "Faire tremper au moins 2 heures de plus. Les grains doivent être entièrement hydratés pour un broyage lisse."
          },
          {
            "state": "Perfect",
            "description": "Le riz est devenu opaque et gonflé, chaque grain se sent doux lorsqu'il est pressé. Urad dal est plumé, blanc, doublé en volume, et un grain se divise facilement entre les ongles. Les graines de Fenugreek ont légèrement gonflé.",
            "action": "Égoutter et broyer séparément."
          },
          {
            "state": "Overdone",
            "description": "Trempage pendant plus de 24 heures — les grains sentent légèrement acide et la fermentation a déjà commencé dans l'eau.",
            "action": "Égoutter immédiatement et utiliser. L'eau préfermentée peut être utilisée pour faciliter la fermentation principale."
          }
        ]
      },
      "feelCue": "Un grain de dal d'urad trempé pressé entre les ongles doit se diviser proprement sans résistance — entièrement mou et donnant partout."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "soaked_grains",
        "ing_04"
      ],
      "outputState": "ground_batter",
      "instructions": "Mouiller d'abord les graines d'urad dal et de fenugrec dans un broyeur humide ou un mélangeur à haute puissance avec l'eau de trempage réservée (ou l'eau froide), en ajoutant la cuillère à soupe d'eau par la cuillère à soupe. Mouiller de 20 à 30 minutes dans un broyeur humide (ou de 5 à 10 minutes dans un mélangeur à grande vitesse) jusqu'à ce que la pâte soit complètement lisse, extrêmement fine et très moelleuse. La pierre de broyeur humide traditionnelle génère peu de chaleur et broie ultra-fine. Transférer dans un grand bol. Puis moudre le riz trempé avec de l'eau froide jusqu'à ce qu'il soit lisse mais légèrement grainé. Mélanger les deux pâtes et bien mélanger.",
      "visualCue": {
        "primaryTarget": "Deux pâtes combinées : la portion de l'urad dal est blanche-neige, molle et aérée; la portion de riz est de couleur crème et légèrement grainée. Ensemble, ils forment une pâte lisse et versable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte à dal d'Urad n'est ni aérée ni blanche — elle semble grise et dense. La pâte à riz a un grain grossier très visible. Le battement est lourd.",
            "action": "Grincer plus longtemps. Urad dal doit être moulu à une très fine consistance de mousse légère. Ajouter de l'eau graduellement pour faciliter le broyage."
          },
          {
            "state": "Perfect",
            "description": "La pâte à dal d'Urad est blanche, aérée, presque moelleuse, elle tombe de la cuillère dans des poupées légères. La pâte à riz est lisse avec une texture faible. La pâte combinée est uniforme, blanc crémeux et versable, pas trop épaisse et pas aqueuse.",
            "action": "Ajouter le sel, bien remuer et fermenter."
          },
          {
            "state": "Overdone",
            "description": "La batterie est très fine et aqueuse à partir de trop d'eau ajoutée lors du broyage.",
            "action": "La pâte sera encore fermentée et travaillée, mais l'idli sera très plat et légèrement caoutchouteux. Utilisez moins d'eau la prochaine fois."
          }
        ]
      },
      "feelCue": "Frottez la pâte de l'urade entre vos doigts — elle devrait être lisse et soyeuse, sans grain. Comme la meilleure mousse."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "ground_batter",
        "ing_03"
      ],
      "outputState": "fermented_idli_batter",
      "instructions": "Incorporer soigneusement le sel dans la pâte combinée — le sel aide à contrôler les bactéries indésirables pendant la fermentation. La pâte doit être d'une consistance qui tombe d'une cuillère dans un ruban épais. Transférer dans un grand contenant (la pâte doublera à peu près en volume pendant la fermentation — le contenant doit être assez grand). Couvrir lâchement avec un couvercle ou un chiffon. Laisser dans un endroit chaud — 28-32°C (82-90°F) est idéal. Dans les climats d'été indiens, cela se produit toute la nuit (8-12 heures). Dans les climats plus froids, cela peut prendre 16-24 heures. Le four avec seulement la lumière allumée (environ 27°C) fonctionne bien dans les cuisines fraîches. La fermentation est complète lorsque la pâte s'est considérablement relevée, qu'elle a l'air molle et aérée, qu'elle a une agréable odeur aigre et que de minuscules bulles sont visibles partout.",
      "visualCue": {
        "primaryTarget": "Risen, pâte aérée qui a au moins doublé en volume avec des bulles visibles à travers et une surface légèrement bombée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le battement est à peine levé. Pas de bulles visibles. Ça sent toujours le grain cru et le sel. La surface est plate et dense.",
            "action": "Déplacez-vous dans un endroit plus chaud. La fermentation nécessite de la chaleur — en dessous de 24°C, elle sera très lente ou peut ne pas commencer."
          },
          {
            "state": "Perfect",
            "description": "La batterie a pratiquement doublé ou plus. La surface est bombée et aérée. De belles bulles visibles dans l'ensemble. Ça sent agréablement aigre et légèrement leveux, comme un méné doux. La pâte est nettement plus légère dans la texture et verse fluffy.",
            "action": "Mélanger doucement du fond et utiliser immédiatement, ou réfrigérer jusqu'à 3-4 jours."
          },
          {
            "state": "Overdone",
            "description": "Batter sent l'alcool agressif et très aigre. Il est monté, a culminé et s'est effondré. Liquide sur le dessus.",
            "action": "Bien mélanger. La pâte est surfermentée mais peut encore faire un idli décent. Utiliser pour les dosa (crépes) qui sont mieux avec la pâte aigre."
          }
        ]
      },
      "feelCue": "Mélanger la pâte fermentée du fond — elle doit se sentir aérée et plus légère qu'avant la fermentation, presque comme de la mousse en remuant. Il devrait libérer un léger fizz et un agréable arôme propre."
    },
    {
      "nodeId": "step_4",
      "action": "vapeur",
      "inputs": [
        "fermented_idli_batter"
      ],
      "outputState": "finished_idli",
      "instructions": "Graisser les moules idli légèrement avec de l'huile. Mélanger doucement la pâte du bas sans la dégonfler trop. La pâte à louche dans chaque moule, en remplissant environ trois quarts de plein — ils vont s'étendre pendant la vapeur. Chauffer vigoureusement sur l'eau bouillante pendant 10-12 minutes. Ne pas soulever le couvercle pendant la vapeur. L'idli est fait quand un cure-dent inséré au centre sort propre et la surface est réglée et légèrement sèche. Démoudre immédiatement après 2 minutes de refroidissement en faisant tourner une cuillère humide autour de chaque idli. Ils devraient sortir proprement.",
      "visualCue": {
        "primaryTarget": "Parfaitement rond, blanc, légèrement bombé idli avec une surface lisse. Pas de colle au moule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Idli sont doux et collants, s'effondrent quand ils sont touchés. Le pick-dent sort mouillé. L'intérieur est gommy et grignotant.",
            "action": "Retournez au vapeur pendant 3-5 minutes avec le couvercle allumé. Maintenir la vapeur vigoureuse tout au long."
          },
          {
            "state": "Perfect",
            "description": "Les idli sont mous, mais set, ils tiennent leur forme lorsqu'ils ne sont pas moulés et ont une surface lisse et légèrement sèche. C'est propre. L'intérieur est spongieux et blanc avec une agréable saveur douce aigre. Ils libèrent du moule proprement.",
            "action": "Servir immédiatement avec du sambar et du chutney à la noix de coco."
          },
          {
            "state": "Overdone",
            "description": "Les idli sont secs et légèrement durs à la surface. L'intérieur est légèrement dense.",
            "action": "Couvrir immédiatement d'un chiffon humide. Ils s'adoucissent comme ils se reposent. Le surchauffe signifie généralement une pâte surfermentée ou une chaleur excessive."
          }
        ]
      },
      "feelCue": "Un idli parfait devrait se sentir doux et productif mais pas mouillé quand il est touché — comme un nuage dense. Il doit revenir très légèrement lorsqu'il est pressé doucement."
    }
  ]
};
