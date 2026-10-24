export default {
  "repoId": "master_spanish_paella-sofrito_001",
  "parentRepoId": null,
  "slug": "paella-sofrito",
  "author": "ForkRecipe Kitchen",
  "title": "Paella Sofrito",
  "description": "La base sombre et jammy de chaque grande paella — tomates et poivrons cuits jusqu'à une pâte concentrée, safran-kissed qui sent d'un marché de Valence à midi, caramélisée et profonde.",
  "cuisine": "Espagnol",
  "culture": "Valence",
  "category": "sauces",
  "tags": [
    "paella",
    "sofrito",
    "safran",
    "Espagnol",
    "base"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 4,
    "sour": 3,
    "bitter": 2,
    "umami": 7,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Poivre rouge en dés",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivrons piquillo grillés en pot"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates râpées, râpées sur une boîte de râpe",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates broyées en conserve, bien drainées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika fumé doux (pimentón dulce)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Fils de safran, trempés dans 2 c. à soupe d'eau chaude",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, haché finement",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_07"
      ],
      "outputState": "saffron_water",
      "instructions": "Crumble les fils de safran dans un petit bol ou ramekin. Verser 2 cuillerées à soupe d'eau chaude (non bouillante) sur elles et laisser tremper pendant au moins 10 minutes. Le liquide va devenir un or jaune vif. Le chauffage du safran dans l'eau chaude libère ses pigments de crocine et ses composés d'arôme safran beaucoup plus efficacement que l'ajout de fils secs directement à une poêle chaude.",
      "visualCue": {
        "primaryTarget": "L'eau a transformé un ambre d'or saturé profond. Les fils sont doux et légèrement désintégrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est jaune pâle. Fils encore rigides et rouge vif. La plupart des couleurs sont toujours verrouillées à l'intérieur.",
            "action": "Attendez plus longtemps — 10 minutes est le minimum. Agiter doucement les fils."
          },
          {
            "state": "Perfect",
            "description": "Liquide ambré profond, presque orange. Les fils sont doux et ont abandonné la plupart de leur couleur. sent distinctement le safran — floral, légèrement médicinal.",
            "action": "Mettez de côté. Ajouter au sofrito dans les 2 dernières minutes de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté de l'eau bouillante et le liquide est brun foncé et amer.",
            "action": "Utilisez la moitié de la quantité — les composés amers sont toujours plus nombreux par la saveur. La prochaine fois, utilisez chaud, pas bouillant, de l'eau."
          }
        ]
      },
      "feelCue": "Frottez un fil raide entre vos doigts — il devrait les tacher jaune orange immédiatement, comme du curcuma."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Chauffer l'huile d'olive dans une casserole large et lourde (la casserole de paella si disponible) à feu moyen. Ajouter l'oignon d'abord et cuire, en remuant occasionnellement, pendant 8-10 minutes jusqu'à ce qu'il soit doux et translucide avec des bords dorés. Ajouter l'ail et le poivre rouge et cuire encore 5 minutes en remuant fréquemment. Les légumes doivent être complètement mous et commencer à caraméliser aux bords — pas crus, pas dorés.",
      "visualCue": {
        "primaryTarget": "L'oignon est translucide et s'effondre, les bords tournent en or. Le poivre est doux et sucré. Aucune texture végétale brute ne reste.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon a encore une légère couleur croquante et blanche opaque. Pepper commence à peine à se ramollir.",
            "action": "Baisser légèrement le feu et poursuivre la cuisson. La ruée vers cette étape produit un sofrito aigu et piquant."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est soyeux et jammy, or aux bords. Le poivre est fondu. Toute la casserole sent profondément doux et riche en allium.",
            "action": "Ajouter les tomates râpées et le paprika."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont brunis foncément ou commencent à coller et à sentir amer.",
            "action": "Ajouter un jet d'eau pour déglacer, racler le fond et baisser la chaleur avant de procéder."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'oignon contre le côté de la casserole — il devrait écraser sans effort de coller sans résistance."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "softened_aromatics",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "concentrated_sofrito",
      "instructions": "Ajouter les tomates râpées, le paprika fumé et le sel dans la poêle. Mélanger et cuire à feu moyen, en remuant fréquemment, pendant 20-25 minutes. La sofrito se fait lorsque l'eau de tomate s'est complètement évaporée, que la masse s'est obscurcie du rouge vif au rouge-brique profond, et que l'huile a commencé à se séparer et à s'accumuler aux bords de la pâte. Cette étape de concentration n'est pas facultative: un sofrito aqueux produit de la gomme, la paella molle.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique épaisse et sombre qui s'éloigne proprement des côtés de la poêle. L'huile se sépare visiblement au périmètre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore humide et lâche. Rouge vif, pas brique. La vapeur monte activement de la surface.",
            "action": "Continuez à cuisiner. Remonter légèrement la chaleur et remuer plus fréquemment pour éviter de coller."
          },
          {
            "state": "Perfect",
            "description": "La pâte est dense et sèche. La couleur est profonde, presque marron aux bords. Des piscines pétrolières autour du périmètre. Sens caramélisé et complexe: doux, fumé, légèrement terreux.",
            "action": "Ajouter l'eau de safran et le persil, remuer encore 2 minutes, puis utiliser immédiatement ou refroidir."
          },
          {
            "state": "Overdone",
            "description": "La pâte est très sombre, collant fortement à la poêle dans des taches noires. Ça sent légèrement brûlé.",
            "action": "Déglacer immédiatement avec 3 cuillerées à soupe d'eau, gratter tout le fond et baisser la chaleur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers le centre — la pâte séparée ne devrait pas inonder pendant au moins 3-4 secondes, comme la lave lente."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "concentrated_sofrito",
        "saffron_water",
        "ing_09"
      ],
      "outputState": "finished_paella_sofrito",
      "instructions": "Verser l'eau de safran (liquide et fil) sur le sofrito concentré. Mélanger vigoureusement à incorporer — la pâte s'étourdira et se serrera momentanément lorsque le liquide touchera l'huile chaude. Cuire encore 2 minutes pour sortir de l'eau et laisser le goût de safran fleurir complètement dans la pâte. Retirer du feu, mélanger le persil frais et utiliser immédiatement comme base de votre paella, ou refroidir et réfrigérer jusqu'à 3 jours.",
      "visualCue": {
        "primaryTarget": "Sofrito est une pâte profonde, rouge doré, brillante avec des taches de persil vert et des fils de safran parfois visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau de safran n'est pas entièrement cuite. La pâte est plus humide qu'avant, pas encore reabsorbée.",
            "action": "Cuire encore une minute à feu moyen, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "Pâte dorée, intensément aromatique. La couleur du safran a teint toute la masse d'un rouge-ambre chaud. Le persil est vert vif et parfumé.",
            "action": "À utiliser immédiatement. En cas de stockage, appuyez sur le film de collage directement sur la surface pour éviter l'oxydation."
          },
          {
            "state": "Overdone",
            "description": "Le persil est devenu brun olive et a perdu son parfum. L'arôme de safran est muet.",
            "action": "Ajouter une pincée fraîche de persil haché juste avant utilisation. La base est encore excellente."
          }
        ]
      },
      "feelCue": "Une petite cuillère sur votre langue devrait donner un coup complet de tomate douce, de fumée, de floral de safran et d'ail — arrondi, non pointu, pas plat."
    }
  ]
};
