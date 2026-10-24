export default {
  "repoId": "master_french_choucroute_garnie_001",
  "parentRepoId": null,
  "slug": "choucroute-garnie",
  "author": "ForkRecipe Kitchen",
  "title": "Choucroute Garnie",
  "description": "Sauerkraut braisé alsacien — rincé pour apprivoiser sa netteté, puis cuit lentement à Riesling avec genévrier et laurier jusqu'à ce que la soie tendre, empilé haut avec le knuckle de porc fumé, les saucisses et les lardons. Un plat qui rend l'hiver honorable.",
  "cuisine": "Français",
  "culture": "Alsaciens",
  "category": "proteins",
  "tags": [
    "français",
    "alsacien",
    "choucroute",
    "porc",
    "Saucisse",
    "braisés",
    "hiver",
    "Le riesling"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Saucisse (caoutchouc fermenté), rincée et pressée",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc fumé (Eisbein)",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": [
        "côtes de porc fumées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Saucisses fumées Strasbourg ou Frankfurter",
      "ratioValue": 6,
      "defaultUnit": "sausages",
      "substitutions": [
        "bratwurst",
        "weisswurst"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Lardons fumés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tranches de bacon fumées"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Alsacienne Riesling",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "Pinot Gris sec",
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignons tranchés",
      "ratioValue": 2,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "baies de genièvre, légèrement broyées",
      "ratioValue": 10,
      "defaultUnit": "berries",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "leaves",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_06",
        "ing_04"
      ],
      "outputState": "rendered_base",
      "instructions": "Dans une grande casserole ou un four hollandais à feu moyen, cuire les lardons pendant 5 minutes jusqu'à ce que la graisse commence à se rendre et qu'ils soient légèrement dorés. Ajouter les oignons tranchés et poursuivre la cuisson en remuant occasionnellement pendant 8 à 10 minutes jusqu'à ce que les oignons soient doux et translucides. Ils ne doivent pas colorier de façon significative — garder le milieu de chaleur au maximum.",
      "visualCue": {
        "primaryTarget": "Des oignons doux et translucides dans une réserve de graisse fumée. Les lardons sont dorés. Pas de brunissement sur les oignons.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore fermes et opaques. La graisse de lardon n'est pas encore complètement rendue.",
            "action": "Continuer la cuisson — l'oignon cru créera une dure note de base que le vin ne peut pas adoucir."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont soyeux, translucides et productifs. Les lardons sont dorés et la poêle sent la fumée et l'oignon sucré.",
            "action": "Ajouter la choucroute et les aromatiques."
          },
          {
            "state": "Overdone",
            "description": "Les oignons ont bruni de façon significative. La poêle sent la caramélisation.",
            "action": "Procéder — la douceur des oignons brunis fonctionne bien ici, mais le plat sera légèrement plus riche et plus doux que la version traditionnelle."
          }
        ]
      },
      "feelCue": "Appuyez sur une tranche d'oignon contre le côté de la casserole — elle devrait s'aplatir sans résistance et se sentir complètement boiteuse, comme des pâtes cuites."
    },
    {
      "nodeId": "step_2",
      "action": "Braiser",
      "inputs": [
        "rendered_base",
        "ing_01",
        "ing_02",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "braised_choucroute",
      "instructions": "Ajouter la choucroute rincée et bien pressée dans la casserole, en nichant le coulis de porc fumé au centre. Dispersez les baies de genévrier et les feuilles de laurier au-dessus du sommet. Verser le Riesling sur tout — il devrait venir à la moitié de la choucroute. Porter à mijoter, puis couvrir soigneusement et cuire à feu très doux (ou dans un four de 150 C / 300 F) pendant 2 heures. La choucroute doit braser doucement, pas bouillir.",
      "visualCue": {
        "primaryTarget": "Après 2 heures : la choucroute est passée d'un blanc pâle à une couleur douce et onctueuse, dans un bouillon de vin réduit. La peau de knuckle de porc commence à se détendre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauerkraut est encore brillant et ferme, conservant la plus grande partie de sa netteté acide. La peau de porc est serrée.",
            "action": "Continuez à faire des larmes. La choucroute a besoin de temps pour se moeller et absorber le vin et la graisse de porc."
          },
          {
            "state": "Perfect",
            "description": "La choucroute est crémeuse, douce et moelleuse, encore tannante mais sans la dureté crue du kraut frais. Le vin est réduit à un bouillon parfumé. Le knuckle de porc donne quand il est pressé.",
            "action": "Nettoyez les saucisses et continuez pour la dernière étape."
          },
          {
            "state": "Overdone",
            "description": "Sauerkraut a complètement perdu sa structure et s'est dissous dans le bouillon. Le liquide s'est réduit à presque rien.",
            "action": "Ajouter un jet d'eau ou de vin blanc pour reconstituer. Le kraut peut être musqué mais la saveur est bonne."
          }
        ]
      },
      "feelCue": "Goûtez un brin de choucroute — après avoir bien broyé, il devrait se sentir complètement tendre sur la langue, avec seulement la résistance la plus faible, comme des pâtes bien cuites. L'acidité doit être moelleuse et intégrée, et non pointue et immédiate."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "braised_choucroute",
        "ing_03"
      ],
      "outputState": "finished_choucroute_garnie",
      "instructions": "Nettoyez les saucisses fumées dans la choucroute pour qu'elles soient à moitié submergées. Couvrir et cuire encore 20 à 25 minutes à mijoter doucement jusqu'à ce que les saucisses soient chauffées et aient absorbé une partie du parfum de kraut. Pour servir, faites un lit de choucroute sur un grand plateau chaud, déchirez la viande de porc de l'os en gros morceaux, et arrangez tout — choucroute, saucisses, lardons — sur la choucroute. Servir avec des pommes de terre bouillies et de la moutarde de Dijon.",
      "visualCue": {
        "primaryTarget": "Les saucisses sont plumées et la peau est serrée, tirant légèrement aux extrémités. La choucroute est parfumée de genièvre et de Riesling.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les saucisses sont à peine chaudes au centre. Lorsque pressé avec des pinces, le centre se sent frais et ferme.",
            "action": "Continuer à mijoter couvert. La saucisse froide dans un plat chaud est la seule défaillance ici."
          },
          {
            "state": "Perfect",
            "description": "Les saucissons sont plumés et uniformément chauffés. La peau est tendue et légèrement brillante. Les jus sont dégagés quand ils sont percés. La choucroute a pris la fumée de la saucisse. La viande pétillante s'éloigne de l'os en gros morceaux soyeux.",
            "action": "Assiette immédiatement sur un grand plateau chaud."
          },
          {
            "state": "Overdone",
            "description": "Les peaux de saucisson ont éclaté et la viande à l'intérieur se contracte et sèche. La graisse est sortie.",
            "action": "Servir rapidement — les saucisses brisées ne sont pas un échec, mais elles semblent moins élégantes. La saveur reste bonne."
          }
        ]
      },
      "feelCue": "Pressez doucement une saucisse avec des pinces — elle doit se sentir uniformément céder d'extrémité en bout, s'épanouir et s'épanouir comme un ballon. Toute fermeté froide dans le centre signifie plus de temps est nécessaire."
    }
  ]
};
