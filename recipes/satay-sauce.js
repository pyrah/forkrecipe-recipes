export default {
  "repoId": "master_indonesian_satay_sauce_001",
  "parentRepoId": null,
  "slug": "satay-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce satay",
  "description": "La magnifique sauce aux cacahuètes de l'Indonésie — pas le raccourci fin et doux, mais la vraie chose: les cacahuètes grillées à sec mélangées dans une pâte parfumée de citronnelle-galangal-chile, mijotées avec du lait de coco, et équilibrées avec du sucre de palme, tamarin, et sauce de poisson dans quelque chose d'épais, brillant, et sauvagement complexe.",
  "cuisine": "Indonésien",
  "culture": "Indonésie/Malais",
  "category": "sauces",
  "tags": [
    "par an",
    "arachide",
    "satay",
    "sauce",
    "noix de coco",
    "Sud-Est asiatique",
    "grillage"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Cacahuètes non salées grillées à sec",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre d'arachide croquant non sucré — 3 parties, saut de la grille"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes, pelées et hachées grossièrement",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle (partie blanche et vert pâle seulement), tranchées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé pâte de citronnelle"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Galangal (fraîche ou congelée), pelé et haché approximativement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais — caractère différent, mais fonctionnel"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Feuilles de citron vert kaffir déchirées (ribs enlevées)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Chiles rouges séchés (épilés et ensemencés), ou 1 c. à thé sambal oelek",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre de palme ou sucre brun emballé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "gula melaka (sucre de coco) pour l'authenticité"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + une pincée de sel pour végétarien"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Pâte de tamarin (à partir d'un bloc, dissoute dans de l'eau chaude)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert frais — moins complexe mais fonctionnel"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Liquid",
      "name": "Eau (pour éclaircir)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "aromatics_paste",
      "instructions": "Mélanger les échalotes, l'ail, la citronnelle, le galangal et les chiles séchés dans un mélangeur ou un robot culinaire. Ajouter une cuillère à soupe d'eau et mélanger jusqu'à ce que vous ayez une pâte rugueuse, grattant les côtés au besoin. La citronnelle est fibreuse et le galangal est boisé — mélanger pendant au moins 2 minutes à grande vitesse, en arrêtant de gratter les côtés, jusqu'à ce que la pâte soit aussi lisse que le mélangeur le permettra. Une certaine texture est acceptable et même souhaitable, mais la citronnelle en particulier doit être finement décomposée ou elle restera fibreuse et désagréable dans la sauce finie. Un mélangeur à haute puissance donnera un résultat plus lisse; un robot alimentaire donne une pâte plus rugueuse mais excellente.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse dorée pâle avec la consistance de l'hummus grossier, parfumée de citronnelle, galangale de gingembre et de chile doux. Pas de gros morceaux visibles de citronnelle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de citronnelle — 5mm ou plus de tige fibreuse. Le galangal est toujours en pièces identifiables. La pâte est rugueuse et épaisse.",
            "action": "Continuez à mélanger. La citronnelle fibreuse doit être décomposée ou elle créera une texture désagréable dans la sauce finie — aucune quantité de mijotation ne l'adoucira davantage."
          },
          {
            "state": "Perfect",
            "description": "Une pâte rugueuse mais cohésive sans morceaux identifiables de citronnelle. La couleur est dorée-tan pâle et l'odeur est intensément aromatique: citronnelle vive et agrumes sur galangal chaud et chile doux.",
            "action": "Faire frire la pâte."
          },
          {
            "state": "Overdone",
            "description": "Le mélangeur a créé une purée liquide complètement lisse plutôt qu'une pâte, à partir de trop d'eau ajoutée.",
            "action": "C'est bien, la pâte va encore frire correctement. L'eau supplémentaire s'évaporera pendant la cuisson."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de pâte entre vos doigts et pressez - elle doit se sentir légèrement gritte des fibres de citronnelle, pas complètement lisse. Sensez vos doigts : la citronnelle doit être la note dominante, pas seulement l'ail."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "aromatics_paste",
        "ing_07"
      ],
      "outputState": "fried_paste",
      "instructions": "Chauffer 2 cuillerées à soupe d'huile neutre ou d'huile de coco dans un wok ou une casserole large à feu moyen-vif jusqu'à ce qu'elles mijotent. Ajouter la pâte aromatique mélangée et les feuilles de citron vert de kaffir déchirées et faire frire, en remuant constamment, jusqu'à ce que l'odeur brute de l'ail et de l'échalote ait cuit et que la pâte soit parfumée, sèche et de couleur plus profonde — 5-8 minutes. Crucieusement, cuire jusqu'à ce que vous puissiez voir l'huile commencer à se séparer et recueillir aux bords de la pâte — c'est ce qu'on appelle pecah minyak (fraction d'huile) dans la cuisine indonésienne et malaise, et cela indique que l'eau dans les aromatiques a complètement évaporé et la pâte est vraiment frite, pas simplement ragoûtée. Cette étape transforme les aromatiques bruts pointus en une base moelleuse et complexe.",
      "visualCue": {
        "primaryTarget": "Une pâte dorée plus sèche et plus profonde qui a visiblement rétréci et dont un mince anneau d'huile pâle s'est séparé aux bords de la casserole. L'odeur de légumes crus a disparu, remplacée par un arôme torréfié, doux et complexe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore de couleur claire et humide, vaporisant fortement sans caramélisation. L'odeur de l'ail-hallot est encore crue et piquante. Aucune séparation d'huile visible.",
            "action": "Continuez à frire. Baissez légèrement la chaleur si elle crache agressivement, mais continuez à la bouger. La séparation de l'huile est le signal de cuisson non négociable pour cette pâte."
          },
          {
            "state": "Perfect",
            "description": "La pâte est dorée et significativement plus sèche que lorsque vous avez commencé. Un anneau d'huile jaune pâle est apparu aux bords de la poêle. L'odeur est douce, grillée et aromatique — citronnelle vers l'avant avec une chaude profondeur sous -jacente à l'ail.",
            "action": "Ajouter immédiatement les cacahuètes et le lait de coco. Continuez."
          },
          {
            "state": "Overdone",
            "description": "La pâte a pris sur le fond et est brûlante — taches brunes foncées ou noires et une odeur amère et acride.",
            "action": "Déglacer immédiatement avec un jet de lait de coco et remuer vigoureusement. Baissez significativement la chaleur. Si la pâte sent vraiment brûlée (pas seulement grillée), racler dans une poêle propre et procéder — la couche inférieure est sacrifiée."
          }
        ]
      },
      "feelCue": "La pâte dans la poêle devrait faire un étourdissement stable et sec — pas un sifflement humide, crachant le sifflement. Lorsque vous pressez avec une spatule, elle doit revenir légèrement au lieu de s'effondrer dans une piscine humide. Cette source signifie que l'eau est partie."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "fried_paste",
        "ing_01",
        "ing_02",
        "ing_13"
      ],
      "outputState": "peanut_coconut_base",
      "instructions": "Si vous utilisez des arachides grillées entières, faites - les pousser dans un robot alimentaire à une texture rugueuse et émiettée — environ la taille de la chapelure grossière, et non une pâte. Ajouter les cacahuètes moulues à la pâte aromatique frite et mélanger pour les enrober dans l'huile parfumée. Verser dans le lait de coco et l'eau, en remuant pour combiner tout dans une soupe épaisse et rugueuse. Porter à mijoter à feu moyen, en remuant fréquemment, et cuire pendant 10-12 minutes jusqu'à ce que la sauce soit épaisse, brillante, et que les arachides aient absorbé le lait de coco et gonflé légèrement. La sauce doit enrober une cuillère dans une couche épaisse et fluide, beaucoup plus épaisse que la crème versable.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, crémeuse, brun pâle — les arachides visibles à travers une texture rugueuse, le lait de coco complètement intégré plutôt que séparé. La surface doit avoir un léger reflet brillant de la graisse de noix de coco.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, le lait de coco n'est pas encore réduit et les cacahuètes encore crues et flottant séparément. Les saveurs n'ont pas encore fusionné.",
            "action": "Continuer à mijoter et à remuer. Les cacahuètes ont besoin d'une chaleur et d'une humidité soutenues pour gonfler et devenir crémeuses — au moins 10 minutes à une mijotée active."
          },
          {
            "state": "Perfect",
            "description": "Une sauce épaisse, crémeuse et cohésive — les cacahuètes gonflées et crémeuses, le lait de coco absorbé dans une base brillante et riche. Il enveloppe fortement une cuillère et coule dans un ruban lent et lourd.",
            "action": "Ajoutez les assaisonnements. Continuez."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est épaisse et collante, commençant à coller et scorcher au fond malgré le remuant.",
            "action": "Ajouter plus de lait de coco ou d'eau, fouetter pour se détendre. La sauce s'épaissira davantage au fur et à mesure qu'elle refroidit, ce qui permettra d'ajuster la consistance."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et soulevez-la au-dessus de la sauce — la sauce doit s'écouler dans un ruban lourd, lent et continu plutôt que de couler dans des gouttes. Les cacahuètes doivent se sentir adoucies et crémeuses plutôt que croquantes."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "peanut_coconut_base",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_satay_sauce",
      "instructions": "Ajouter le sucre de palme, la sauce de poisson, la pâte de tamarin et le jus de lime à la sauce mijotée. Mélanger pour dissoudre complètement le sucre de palme et laisser mijoter 2-3 minutes de plus pour intégrer tout. Goûtez maintenant avec soin et équilibrez la sauce sur quatre axes : sel salé (sauce de poisson), doux (sucre de palm), aigre-tamarin (tamarin et citron vert) et chaleur (chile). La sauce doit être riche et profondément salée d'abord, avec la douceur présente mais pas comme des bonbons, l'aurore éclaircissant plutôt que dominant, et le chile un courant de chaleur. Ajustez chaque élément progressivement — une sauce satay qui goûte sucrée et cacahuète sans complexité est incomplète; celle qui goûte seulement poissonneux a le mauvais rapport sauce poisson.",
      "visualCue": {
        "primaryTarget": "Après assaisonnement et cuisson finale, la sauce prend une couleur ambre plus profonde du sucre de palme caramélisant légèrement dans la base de noix de coco. La surface est brillante et la sauce s'écoule dans une couche riche et lourde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a encore un goût plat et cacahuète sans complexité – la sauce de poisson, le tamarin et le sucre de palme n'ont pas encore été ajoutés, ou sont en quantité insuffisante pour créer la profondeur caractéristique en couches.",
            "action": "Ajouter chaque composant d'assaisonnement en séquence, dégustation entre chaque ajout. L'équilibre complexe, salé, sucré, épicé est ce qui sépare une vraie sauce satay du beurre d'arachide éclairci avec du lait de coco."
          },
          {
            "state": "Perfect",
            "description": "Riche, brillant et profondément complexe. Le goût passe de la richesse initiale en arachides-coconut à un milieu salé-doux (sauce de poisson et sucre de palme) à une finition brillante en tamarin-lime, avec chaleur de chile tout au long. Il s'accroche à une cuillère dans un manteau lourd et uniforme.",
            "action": "Finissez avec de l'eau chaude si nécessaire pour une consistance de trempe versable. Servir chaud aux côtés des brochettes satay."
          },
          {
            "state": "Overdone",
            "description": "Un élément domine de façon destructrice: la sauce n'a un goût sucré qu'à partir de trop de sucre de palme, ou poissonneux à partir de l'excès de sauce de poisson, ou amer à la bouche de trop de tamarin.",
            "action": "Contrer la note dominante : l'excès de douceur nécessite plus de tamarin et de sauce de poisson ; l'excès de poisson nécessite plus de sucre de palme et de tamarin ; l'excès d'auresse nécessite plus de sucre de palme et de lait de coco pour diluer et rond."
          }
        ]
      },
      "feelCue": "La sauce satay finie servie sur une brochette de poulet grillé doit s'accrocher à toutes les surfaces de la viande dans une couche épaisse et brillante sans s'écouler. Si elle s'abaisse à la base de la brochette et s'enfuit, la sauce doit être réduite. S'il se met comme pâte sur la viande chaude, mince avec un jet d'eau chaude."
    }
  ]
};
