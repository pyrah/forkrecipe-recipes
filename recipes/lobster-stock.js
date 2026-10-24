export default {
  "repoId": "master_french_lobster_stock_001",
  "parentRepoId": null,
  "slug": "lobster-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Lobster Shell Stock",
  "description": "Les coquilles et les têtes de homard grillées sont réduites avec des légumes aromatiques, du cognac, de l'estragon et de la tomate en une base riche en fruits de mer et d'orange profonde.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "stocks",
  "tags": [
    "français",
    "Produits de la mer",
    "stock",
    "base bisque",
    "homard",
    "crustacés"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hours",
  "ratioSystem": "weight",
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
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Inosinate",
      "name": "Coquilles et têtes de homard (à partir de 2 homards, grossièrement craqués)",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "coquilles d'écrevisse",
        "grosses coquilles de crevettes (faible mais disponible)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Carotte en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Pâte de céleri, coupée en dés",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Pâte de tomates",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Tomates en conserve concassées",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Solvent",
      "name": "Cognac ou Armagnac",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "sherry sec",
        "Calvados"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Hydration",
      "name": "Eau froide ou stock de poisson",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Tours d'estragon frais",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Estragon séché (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Feuilles de baies",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Spice",
      "name": "Flacons de chili séchés ou de Cayenne",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_17",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "roasted_shells",
      "instructions": "Étendre les coquilles et les têtes de homard sur une grande plaque de cuisson bordée. Arroser d'huile d'olive et mélanger pour enrober. Faire cuire à 220 °C (425 °F) pendant 15 à 20 minutes, en tournant une fois, jusqu'à ce que les coquilles soient profondément caramélisées — l'orange rouge se tournant en acajou — et que le four sent les fruits de mer grillés. Cette réaction Maillard sur les coquilles est la source de la profondeur du stock.",
      "visualCue": {
        "primaryTarget": "Les coquilles ont transformé une mahoganie rougeâtre profonde, certaines avec des taches foncées caramélisées. Le plateau de cuisson est enduit de gras et de jus rouge-orange. La cuisine sent très bien les crustacés rôtis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont encore rouge-orange vif, humide et à peine colorées.",
            "action": "Retourner au four de 5 à 8 minutes de plus — les coquilles sous-dosées produisent un stock plat et gris."
          },
          {
            "state": "Perfect",
            "description": "Coquilles en mahoganie rougeâtre profonde avec des taches caramélisées. Tomalley et coquillage sur le plateau.",
            "action": "Transférer immédiatement à la réserve et déglacer le plateau."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont noircies et une odeur brûlée et amère est présente.",
            "action": "Supprimer immédiatement. Jeter toute coquille qui est vraiment noire. Quelques taches sombres sont acceptables."
          }
        ]
      },
      "feelCue": "Les coquilles de torréfaction doivent être fragiles et sèches — elles ne doivent plus être mouillées. Ils devraient craquer quand ils sont cassés, pas plier. L'odeur du four doit être intensément salée et légèrement sucrée, comme un bouillon concentré."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "roasted_shells",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sauteed_aromatics_with_shells",
      "instructions": "Transférer les coquilles grillées dans une grande réserve. Ajouter le beurre et faire sauter les échalotes, les carottes, le céleri et l'ail directement dans la casserole avec les coquilles à feu moyen-vif pendant 5 à 7 minutes jusqu'à ce que les légumes soient adoucis et dorés. Déglacer le plateau de cuisson avec un jet de vin et racler tous les morceaux caramélisés dans le pot.",
      "visualCue": {
        "primaryTarget": "Légumes dorés assouplis nichés autour des coquilles grillées. Tout le fond caramélisé du plateau de torréfaction a été incorporé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont à peine translucides. Fond du plateau de torréfaction non encore déglacé.",
            "action": "Continuez à faire sauter et déglacer le plateau immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Des légumes dorés et doux. Fonds entièrement incorporé. Le pot sent le beurre, les coquilles et les arômes adoucis.",
            "action": "Ajouter la pâte de tomate et cuire."
          },
          {
            "state": "Overdone",
            "description": "Les légumes commencent à brûler dans la graisse de la coquille.",
            "action": "Ajouter un jet d'eau pour arrêter le brunissement et procéder."
          }
        ]
      },
      "feelCue": "Le fond gratté du plateau de torréfaction devrait se soulever facilement avec une spatule et se dissoudre dans le liquide — s'il résiste, le liquide de déglacement n'était pas assez chaud. Appliquer plus de chaleur sur le liquide et racler à nouveau."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "sauteed_aromatics_with_shells",
        "ing_08",
        "ing_10",
        "ing_11"
      ],
      "outputState": "deglazed_shell_base",
      "instructions": "Ajouter la pâte de tomate dans le pot et remuer à feu moyen-vif pendant 2 à 3 minutes jusqu'à ce que la pâte s'assombrisse et caramélise. Retirer brièvement la casserole de la chaleur et verser dans le cognac — reculez, l'alcool s'enflammera s'il utilise une flamme à gaz. Laisser mourir la flamme ou l'alcool cuire pendant 30 secondes. Retourner au feu, ajouter le vin blanc et porter à ébullition. Réduire le vin de moitié.",
      "visualCue": {
        "primaryTarget": "Une pâte profonde, rouge brique, concentrée s'accroche aux coquilles. La réduction du vin est riche et brillante, pas aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomate est encore rouge vif, pas caramélisée. Cognac sent cru.",
            "action": "Faire cuire la pâte de tomate plus longtemps — elle devrait s'assombrir. Laisser cuire tout l'alcool avant d'ajouter de l'eau."
          },
          {
            "state": "Perfect",
            "description": "La pâte est bordeaux foncés. Le cognac est complètement réduit. Le vin blanc a diminué de moitié et sent doux et salé.",
            "action": "Ajouter les tomates, l'eau et les herbes."
          },
          {
            "state": "Overdone",
            "description": "Le vin a trop diminué. La pâte brûle.",
            "action": "Ajouter immédiatement de l'eau pour secourir."
          }
        ]
      },
      "feelCue": "Goûtez la réduction à ce stade — il doit être intensement aromatisé aux fruits de mer, doux du vin et du cognac, vif et complexe. Cette base concentrée est l'âme du stock."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "deglazed_shell_base",
        "ing_09",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_16",
        "ing_17"
      ],
      "outputState": "simmering_stock",
      "instructions": "Ajouter les tomates écrasées, l'eau froide ou le stock de poisson, l'estragon, les feuilles de laurier, les grains de poivre, le chili et le sel. Porter à ébullition douce, puis laisser mijoter lentement. Enduit toute mousse de la surface dans les 15 premières minutes. Laisser mijoter à découvert pendant 45 à 60 minutes, jusqu'à ce que le stock ait diminué d'environ un tiers et soit profondément aromatisé et d'une riche couleur orange-rouge.",
      "visualCue": {
        "primaryTarget": "Un stock rouge-orange profond avec un doux mijot paresseux. La surface présente une légère huile d'orange provenant de la graisse de la coquille et de la tomate. Visiblement plus concentrée que lorsque l'eau a été ajoutée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est pâle, mince et aqueux. Le goût est faible et plat.",
            "action": "Continuer à mijoter à découvert — la réduction est essentielle."
          },
          {
            "state": "Perfect",
            "description": "Rouge orangé. Réduction d'un tiers. Intensément coquillages aromatisés par la luminosité de l'estragon. Enrober l'arrière d'une cuillère avec un corps très léger.",
            "action": "Strain à travers une souche fine, pressant les coquilles fermement."
          },
          {
            "state": "Overdone",
            "description": "Les stocks sont très épais, sombres et sursalés.",
            "action": "Diluer avec de l'eau froide et goûter à nouveau."
          }
        ]
      },
      "feelCue": "Écraser une petite quantité de la surface sur une cuillère et la refroidir brièvement — un fond de bisque parfait devrait se sentir légèrement soyeux et avoir une viscosité perceptible de la gélatine dans les coquilles et la tomate. Il ne devrait jamais se sentir arrosé."
    },
    {
      "nodeId": "step_5",
      "action": "Filtrer",
      "inputs": [
        "simmering_stock"
      ],
      "outputState": "finished_lobster_stock",
      "instructions": "Retirer du feu. Verser le bouillon à l'aide d'une passoire fine placée sur un grand bol. Appuyez fermement sur les coquilles avec le dos d'une louche pour extraire chaque dernière goutte de saveur. Passez une seconde fois à travers une passoire à fromage pour une clarté maximale si vous utilisez pour un bisque raffiné. Goûtez et assaisonnez. Refroidir rapidement sur un bain de glace et réfrigérer jusqu'à 3 jours, ou congeler en petites portions.",
      "visualCue": {
        "primaryTarget": "Un stock rouge-orange clair et brillant, la couleur d'un coucher de soleil profond. Pas trouble, pas pâle. Une fine couche brillante de graisse de coquille orange à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est très pâle orange-rose — pas assez de saveur extraite des coquilles.",
            "action": "Presser les coquilles plus fort et laisser mijoter le stock tendu encore 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Profond, lumineux orange-rouge. Clair quand il est tenu à la lumière. La surface mijote de la graisse des mollusques. Le goût est intensément sucré, salé, océanique.",
            "action": "Laisser refroidir et réfrigérer ou congeler."
          },
          {
            "state": "Overdone",
            "description": "Le stock est mou et sombre à partir de coquilles surpressantes.",
            "action": "Reformez-vous à travers une nappe de fromage. La saveur est excellente; seule l'apparence est affectée."
          }
        ]
      },
      "feelCue": "Appuyez sur une cuillère du bouillon fini entre le pouce et l'index — il devrait se sentir légèrement plus collant que l'eau, avec un murmure du corps de la gélatine naturelle. C'est la promesse d'un bisque qui s'accroche à chaque cuillère."
    }
  ]
};
