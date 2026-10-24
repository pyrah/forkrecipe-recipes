export default {
  "repoId": "master_turkish_menemen_001",
  "parentRepoId": null,
  "slug": "menemen",
  "author": "ForkRecipe Kitchen",
  "title": "Hommes",
  "description": "Les oeufs turcs dans la tomate épicée — tomates mûres et poivrons sivri sautés jusqu'à confiture et concentrés, puis les œufs versés directement dans et pliés doucement jusqu'à peine serti, fini avec un bouton de beurre, poivre d'Alep et persil à feuilles plates. Petit déjeuner, déjeuner ou tard dans la nuit — mangé dans la poêle avec du pain blanc.",
  "cuisine": "Turquie",
  "culture": "Turquie",
  "category": "eggs",
  "tags": [
    "turc",
    "œufs",
    "tomates",
    "poivre",
    "Petit déjeuner",
    "1 pan",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs grands",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Tomates râpées, cardées et hachées à peu près",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates entières en conserve de bonne qualité, broyées à la main"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Poivrons sivri verts ou poivrons frits italiens, tranchés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "1 poivron vert + 1 chile vert long"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé (facultatif — contesté)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre d'Alep (bibereau de pulpe), ou flocons de poivre rouge doux",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux + pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_03",
        "ing_06",
        "ing_04",
        "ing_05"
      ],
      "outputState": "softened_peppers",
      "instructions": "Chauffer le beurre et l'huile d'olive dans une poêle large et peu profonde, idéalement une poêle sahan (cuivre) ou une petite poêle en fonte de 22 à 24 cm, à feu moyen. Si vous utilisez de l'oignon, ajoutez-le d'abord et faites cuire pendant 3 à 4 minutes jusqu'à translucide. Ajouter les poivrons sivri tranchés et cuire, en remuant occasionnellement, pendant 5 à 7 minutes jusqu'à ce que les poivrons soient complètement doux, limpides et légèrement cloqués aux bords. Les poivrons devraient être presque sucrés à ce moment - là — l'amertume du poivre vert s'éloigne avec le temps. Assaisonner avec une pincée de sel.",
      "visualCue": {
        "primaryTarget": "Les poivrons sont entièrement boiteux et vert foncé, avec des cloques brun pâle aux extrémités. Le beurre a pris une faible teinte verte des jus de poivre. L'oignon (si utilisé) est entièrement translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poivrons sont encore vert vif et fermes, résistant à une cuillère en bois. Ils sentent cru et légèrement herbacé.",
            "action": "Baisser le feu et cuire encore 3 minutes. Les menemen crus-poivrons sont l'erreur la plus courante: les poivrons doivent être cuits avant d'ajouter les tomates ou rester crus dans le plat final."
          },
          {
            "state": "Perfect",
            "description": "Les poivrons sont vert olive foncé, complètement boiteux, et sentent doux et légèrement caramélisé. Ils s'effondrent sous une cuillère sans résistance.",
            "action": "Ajouter les tomates hachées et assaisonner immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons ont commencé à brunir et à coller à la poêle. Certains sont très sombres aux bords et commencent à goûter amer.",
            "action": "Procéder — les tomates déglaceront la poêle et la saveur plus profonde ajoute en fait de la complexité. S'assurer qu'aucune pièce n'est vraiment brûlée."
          }
        ]
      },
      "feelCue": "Appuyez sur une tranche de poivre contre la paroi de la poêle avec une cuillère — au stade droit, elle devrait s'effondrer complètement sans résistance, laissant un frottis brillant. Tout ressort ou croquant signifie plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "softened_peppers",
        "ing_02",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "jammy_tomato_base",
      "instructions": "Ajouter les tomates hachées aux poivrons, avec la moitié du poivre d'Alep, le sel et le poivre noir. Mélanger. Augmenter le feu à feu moyen-élevé et cuire, en remuant occasionnellement et en brisant les morceaux de tomates avec une cuillère en bois, pendant 8 à 12 minutes jusqu'à ce que les tomates se soient complètement effondrées et que le mélange soit épais, embrouillé et réduit. La sauce doit être profondément colorée et parfumée.",
      "visualCue": {
        "primaryTarget": "Le mélange de tomates et de poivre est épais, brillant et orange rouge foncé. Il est assis dans la casserole sans couler lorsque la casserole est inclinée. Une cuillère en bois traînée à travers elle laisse une ligne propre qui se remplit lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore très liquide et pâle: l'eau de tomate n'a pas évaporé. Il coule facilement lorsque la poêle est inclinée. L'ajout d'oeufs va faire des ménemen aqueux et brouillés.",
            "action": "Continuer la cuisson sur moyenne-élevée, à découvert. Mélanger plus souvent car il réduit. L'eau doit partir avant que les œufs entrent."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, réduit, presque comme de la confiture. Rouge orangé. Les traces de sauce laissées par la cuillère se remplissent en 3-4 secondes. L'odeur est intense : tomate douce, poivre d'Alep et beurre.",
            "action": "Réduire le feu à moyen-doux et ajouter les œufs."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte très épaisse qui commence à coller et à brûler sur le fond de la poêle. Sensations légèrement caramélisées.",
            "action": "Ajouter une cuillère à soupe d'eau, remuer pour se détendre et aller aux œufs. La caramélisation est en fait une saveur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois sur le fond de la casserole et soulevez - la sauce doit enrober l'arrière de la cuillère dans une couche épaisse et brillante et s'égoutter lentement, ne pas s'écouler comme de l'eau. C'est le signe pour ajouter les œufs."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "jammy_tomato_base",
        "ing_01"
      ],
      "outputState": "eggs_in_menemen",
      "instructions": "Battre les œufs légèrement dans un bol — juste assez pour casser les jaunes et se combiner grossièrement, laissant des stries de blanc visibles (ces stries créent un effet marbré dans le plat fini). Verser les œufs directement sur la base de la tomate et du poivre. À l'aide d'une spatule de silicone, plier délicatement les œufs à travers la base de la tomate en faisant des coups lents et larges — tirer des bords vers l'intérieur, laissant la base de la tomate sillonner les œufs. Alternativement, laisser les oeufs entiers pour un style différent : les nids entiers sur le dessus et couvrir d'un couvercle pendant 3 minutes jusqu'à ce que les blancs se mettent mais les jaunes restent éclaboussés.",
      "visualCue": {
        "primaryTarget": "Les oeufs viennent de se mettre en plis doux, brillants et crépusculaires qui sont rayés avec de la tomate rouge-orange. Le jaune est encore visiblement jaune dans les endroits. Aucun œuf liquide n'est encore mis en réserve.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'œuf liquide est encore en pool à la base de la poêle et le blanc d'œuf cru est clairement visible en courant librement.",
            "action": "Continuer à plier sur feu moyen-doux pendant 30 secondes de plus. Ne vous précipitez pas avec une chaleur plus élevée — les œufs vont cacher et saisir."
          },
          {
            "state": "Perfect",
            "description": "Les œufs sont tout simplement à peine fixés — brillants, doux et crémeux sans pool liquide mais encore humides et légèrement tremblants quand la poêle est bouchée. Le brouillon à la tomate tient sa forme sur une cuillère.",
            "action": "Retirer immédiatement du feu. La chaleur résiduelle transportera les œufs encore 10 à 15 secondes."
          },
          {
            "state": "Overdone",
            "description": "Les œufs sont entièrement coupés, secs et séparés de la tomate. Le mélange semble émietté et l'oeuf s'est emparé dans des caillés secs et serrés.",
            "action": "Servir immédiatement avec une bruine d'huile d'olive sur le dessus pour restaurer une certaine richesse. La prochaine fois, retirer de la chaleur 15 secondes plus tôt."
          }
        ]
      },
      "feelCue": "Incliner doucement la poêle lorsque les œufs se replient — le mélange doit se déplacer comme une masse unique, à peine fixée, ne pas slosh comme un oeuf cru et ne pas tenir complètement rigide. Ça devrait être une crème très douce et lourde."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "eggs_in_menemen",
        "ing_07",
        "ing_10"
      ],
      "outputState": "finished_menemen",
      "instructions": "Retirer la poêle du feu. Dispersez généreusement le reste du poivre d'Alep au-dessus de la surface – il devrait ressembler à une poussière de rouge rouille foncé sur la surface jaune-orange. Épargnez le persil haché. Servir immédiatement dans la casserole — les menemen sont traditionnellement amenés à la table dans son récipient de cuisson avec une pile de pain blanc à côté pour déchirer et écoper. Ne le laissez pas s'asseoir: la chaleur de report de la poêle continuera à cuire les œufs, et la différence entre parfait et trop cuit est mesurée en minutes.",
      "visualCue": {
        "primaryTarget": "Oeuf rouge-orange vif brouillé recouvert de poivre d'Alep rouge rouille et de persil vert vif. Toujours à la vapeur. Le beurre et l'huile d'olive brillent légèrement aux bords de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Garnir non encore ajouté. Le plat semble monochrome et plat sans poivre d'Alep — et plus critique, la chaleur du poivre est absente du profil de saveur.",
            "action": "Ajouter le poivre d'Alep et le persil maintenant. Ils ne sont pas en option décoration."
          },
          {
            "state": "Perfect",
            "description": "Oeufs dorés, crépus, striés de tomates, généreusement épluchés avec du poivre d'Alep, et tachetés de persil. La vapeur s'élève. Le beurre mousse encore faiblement aux bords.",
            "action": "Servir immédiatement avec du pain blanc, des tomates en tranches et du fromage blanc à côté."
          },
          {
            "state": "Overdone",
            "description": "Les oeufs ont continué à cuire à partir de la poêle et sont maintenant secs et entièrement préparés. Le persil s'est flétri. Le poivre d'Alep a absorbé l'humidité de surface.",
            "action": "Ajoutez un petit bouton de beurre frais au bord de la poêle et laissez-le fondre sur la surface – il restaurera un peu de brillance et de richesse. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère de ménemen au centre de la poêle et maintenez-la au-dessus du récipient — les œufs devraient retomber lentement de la cuillère, dans un ruban crémeux et cohésif, ne pas couler comme du liquide ou tenir fermement comme un solide. Ce ruban lent est parfait."
    }
  ]
};
