export default {
  "repoId": "master_french_lobsterbisquebase_001",
  "parentRepoId": null,
  "slug": "lobster-bisque-base",
  "author": "ForkRecipe Kitchen",
  "title": "Base Bisque de homard",
  "description": "Un riche stock de crustacés orangés de rouille, construit à partir de coquilles de homard grillées, l'épine dorsale intensément aromatisée d'un bisque approprié, avec une complexité qui vient seulement de la torréfaction, de la flamme et de la longue extraction des coquilles que la plupart des cuisiniers rejettent.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "stock",
    "Sans gluten",
    "Produits de la mer",
    "homard",
    "français",
    "bisque"
  ],
  "difficulty": 4,
  "activeTime": "60 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coquilles et têtes de homard (à partir de 2 homards)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "coquilles d'écrevisse",
        "Grandes crevettes et coquilles"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Oignon jaune en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Carottes coupées en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri en dés",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Giroves d'ail écrasées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Tomates entières en conserve",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Cognac ou cognac",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Tours d'estragon frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Estragon séché (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Hydration",
      "name": "Eau froide ou stock de poissons légers",
      "ratioValue": 1500,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01"
      ],
      "outputState": "roasted_lobster_shells",
      "instructions": "Découpez les coquilles de homard en petits morceaux à l'aide de cisailles de cuisine ou d'un couteau lourd, ce qui augmente considérablement la surface d'extraction. Étaler sur une plaque de cuisson lourde et rôtir à 220 °C (425 F) pendant 15 à 20 minutes, en tournant une fois, jusqu'à ce que les coquilles aient changé en orange rouge vif et que la cuisine sente fortement les mollusques rôtis. Toute viande collante caramélisera et ajoutera de la saveur. Ne pas trop rôtir — les coquilles noires apportent des arômes amers et acrides.",
      "visualCue": {
        "primaryTarget": "Les coquillages sont lumineux corail-orange à brique-rouge, enroulé, et à l'aspect sec. La cuisine sent intensément les mollusques rôtis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont encore brun gris ou rose. Pas d'intensification des couleurs. Arôme minimal des mollusques.",
            "action": "Retournez au four. Les coquillages doivent caraméliser — ils passeront du gris au rouge vif pendant la torréfaction."
          },
          {
            "state": "Perfect",
            "description": "Rouge corail brillant à orange brique, sec et légèrement cassant. Toute viande adhérante est caramélisée brun foncé. L'odeur est intensément douce et océanique.",
            "action": "Ajouter au pot tout en restant chaud — la chaleur aide à les adoucir pour une meilleure extraction."
          },
          {
            "state": "Overdone",
            "description": "Coquilles brunes ou noires. Une odeur brûlée.",
            "action": "Jetez les pièces les plus noires. Ajouter les autres coquilles grillées. Rincer la poêle avant de déglacer."
          }
        ]
      },
      "feelCue": "Les coquilles de homard bien torréfiés sont légères et cassantes; elles s'effondrent légèrement dans la main plutôt que de fléchir. Le pigment orange (astaxanthine) a été libéré par la chaleur et tache vos doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "roasted_lobster_shells",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_10"
      ],
      "outputState": "sauteed_shell_mirepoix",
      "instructions": "Dans une grande marmite ou un four hollandais, faire fondre le beurre à feu vif. Ajouter les coquilles rôties et cuire en remuant pendant 2 à 3 minutes. Ajouter tous les légumes de mirepoïx (oignon, carottes, céleri, ail) et cuire à feu vif pendant 5-8 minutes, en remuant fréquemment, jusqu'à ce que les légumes soient adoucis et commencent à caraméliser. Ajouter la pâte de tomate et remuer constamment pendant 2 minutes — il devrait s'assombrir légèrement et coller à la casserole, ajoutant couleur et profondeur. Ajouter les tomates en conserve et la cayenne.",
      "visualCue": {
        "primaryTarget": "La pâte de tomate s'est assombrie à un rouge brique et enrobe le fond de la poêle. Les légumes sont adoucis avec des bords dorés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomates est encore rouge vif, goût cru. Les légumes sont encore fermes.",
            "action": "Cuire plus longtemps à feu vif. La pâte de tomate doit cuire son acidité brute et développer la douceur."
          },
          {
            "state": "Perfect",
            "description": "La pâte de tomates est rouge brique foncé, presque brune aux bords où elle contacte la poêle. Légumes doux, oignon translucide. Le mélange sent les légumes caramélisés et les crustacés grillés.",
            "action": "Ajouter immédiatement le cognac pour la flamme."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomates est brûlée au noir. Une odeur amère.",
            "action": "Déglacer immédiatement avec du cognac. Si le fond est noir brûlé, ajouter du vin pour le dissoudre — jetez-le s'il sent purement brûlé."
          }
        ]
      },
      "feelCue": "Lorsque la pâte de tomate est bien cuite, presser une cuillère en bois dans le mélange laisse une trace claire qui se remplit lentement — la pâte a perdu sa qualité crue humide et devient épaisse et embrouillée."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacement",
      "inputs": [
        "sauteed_shell_mirepoix",
        "ing_08",
        "ing_09"
      ],
      "outputState": "deglazed_shell_base",
      "instructions": "Retirer la casserole du feu. Ajouter le cognac. Retourner à la chaleur et incliner soigneusement le pot ou utiliser une longue allumette pour enflammer le cognac — il s'allumera avec une flamme bleue pendant 15 à 30 secondes, brûlant l'alcool cru. Une fois que les flammes meurent, ajouter le vin blanc et remuer vigoureusement, grattant tout le fond du pot. Le vin siffle violemment et la vapeur sent les mollusques et le vin. Cuire 2 à 3 minutes à ébullition jusqu'à ce que le vin ait diminué de moitié.",
      "visualCue": {
        "primaryTarget": "Un fond sombre et brillant complètement dissous du fond du pot dans le liquide. Le mélange sent complexe: mollusques, vin, légumes caramélisés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches sombres de fond encore collées au fond du pot. Le vin n'est pas encore réduit.",
            "action": "Continuer la cuisson et le grattage. Tout le fond doit être dissous — il contient une saveur concentrée."
          },
          {
            "state": "Perfect",
            "description": "Pan complètement propre sans résidu coincé. Le liquide est orange rouge foncé et sirupeux. Sensation intense de vin, de crustacés et de caramel.",
            "action": "Ajouter l'eau et les herbes. Faites frémir."
          },
          {
            "state": "Overdone",
            "description": "Le vin réduit à presque rien — seulement une pâte épaisse et collante reste.",
            "action": "Ajouter immédiatement de l'eau pour éviter les brûlures. La réduction est concentrée mais toujours utile."
          }
        ]
      },
      "feelCue": "Après le déglacement, le liquide doit avoir un goût brillant, complexe et légèrement aiguisé à partir de l'alcool. Si elle a un goût plat, le fond était insuffisant."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "deglazed_shell_base",
        "ing_11",
        "ing_12",
        "ing_14",
        "ing_15"
      ],
      "outputState": "finished_bisque_base",
      "instructions": "Ajouter l'eau froide (ou le stock de poisson léger), l'estragon et les feuilles de laurier. Porter à ébullition, puis laisser mijoter. Laisser mijoter à découvert pendant 45 à 60 minutes. Les coquilles continueront à libérer la saveur et la couleur, tournant le bouillon un profond rouille-orange. Enfilez-vous à travers une passoire à mailles fines, doublée d'une nappe de fromage, en appuyant fermement sur les coquilles pour extraire toutes les gouttes. Réduire d'un tiers le stock tendu pour une base de bisques plus concentrée. Saisonner légèrement — il sera assaisonné davantage lors de la construction du bisque fini.",
      "visualCue": {
        "primaryTarget": "Un stock de rouille orangé à rouge brique qui enveloppe légèrement une cuillère et sent intensément les mollusques et les herbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Orange pâle, mince et peu profond. Les coquilles n'ont pas abandonné leur couleur.",
            "action": "Laisser mijoter encore. Le pigment de la coquille et l'extrait de collagène lentement — 45 minutes est le minimum."
          },
          {
            "state": "Perfect",
            "description": "Profondeur orange rouille, limpide, avec une texture légèrement visqueuse et un puissant arôme de homard. Une cuillerée goûte complexe et riche.",
            "action": "Plongez dans la nappe de fromage, appuyez fermement. Réduire d'un tiers pour le bisque, ou l'utiliser comme-est pour des applications plus légères."
          },
          {
            "state": "Overdone",
            "description": "Très réduit, très foncé, fortement amer.",
            "action": "Diluer 1:1 avec de l'eau. L'amertume est probablement venue de coquilles surextractées ou d'un fond brûlé."
          }
        ]
      },
      "feelCue": "La base de bisque finie devrait se sentir légèrement plus épaisse que l'eau sur la langue — une faible qualité de revêtement de la gélatine dissoute dans le cartilage de la coquille, avec une chaleur qui persiste à l'arrière de la gorge."
    }
  ]
};
