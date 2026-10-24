export default {
  "repoId": "master_mexican_pozole-rojo-broth_001",
  "parentRepoId": null,
  "slug": "pozole-rojo-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Pozole Rojo Broth",
  "description": "Le bouillon rouge brique profond du pozole rojo de Jalisco — l'épaule de porc mijoté d'anchos et de chilis guajillo jusqu'à ce que la viande tombe en morceaux et que le stock devienne un riche et terreux pourpre.",
  "cuisine": "Mexicain",
  "culture": "Jalisco",
  "category": "stocks",
  "tags": [
    "Mexique",
    "porc",
    "hominy",
    "Chille rouge",
    "bouillon",
    "Fête"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc (de préférence désossée), coupée en gros morceaux",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "os du cou de porc + épaule désossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau, assez pour couvrir de 5 cm",
      "ratioValue": 250,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Piments anchos séchés, ensemencés",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "Chili de Californie séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Chilies de guajillo séchées, ensemencées",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "Chili séché Nouveau-Mexique"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, coupé en deux",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail, entières et non pelées",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Origan mexicain séché",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Marjoram"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Graines de cumin grillées",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": [
        "cumin du sol (utiliser la moitié)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Hominy en conserve (maïs pozole), égoutté et rincé",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": [
        "séché hominy, trempé pendant la nuit et bouilli séparément jusqu'à tendreté"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "pork_broth",
      "instructions": "Placez les morceaux d'épaules de porc dans un grand pot lourd. Couvrir d'eau froide d'au moins 5 cm. Ajouter l'oignon à moitié, les gousses d'ail non pelées et une pincée généreuse de sel. Portez à ébullition vigoureuse à feu vif — vous verrez la mousse brun-gris monter à la surface dans les 5-10 premières minutes. Écraser cette mousse de façon agressive et complète avant qu'elle ne se dissout dans le bouillon; ce sont les protéines et les impuretés coagulées qui font un stock boueux et moins propre. Une fois que la mousse est partie, réduisez la chaleur à une faible mijotation constante. Couvrir et cuire partiellement pendant 2 à 2,5 heures, écrémer à l'occasion, jusqu'à ce que le porc soit complètement tendre et que le bouillon soit salé et laiteux-opaque.",
      "visualCue": {
        "primaryTarget": "Un bouillon légèrement laiteux et mijotant avec des morceaux de porc tendres sous la surface; la phase de mousse est complètement passée et le liquide est relativement clair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mousse grise toujours en hausse, bouillon est trouble et sent cru. Le porc est toujours ferme et résiste à une fourchette.",
            "action": "Agitez agressivement et continuez — la phase de mousse doit être complètement nettoyée avant d'ajouter des piments."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est limpide avec une faible richesse opaque, sent profondément le porc et l'oignon. Le porc s'effondre facilement entre les doigts.",
            "action": "Retirez le porc et tendez le bouillon; faites la pâte de chili."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli dur et est très nuageux; le porc tombe complètement en morceaux dans le pot.",
            "action": "La texture positionnelle est récupérable — un pozole nuageux n'est pas faux, juste rustique. Abattez la graisse et continuez."
          }
        ]
      },
      "feelCue": "Testez le porc en pressant fermement un morceau entre les doigts — il ne devrait pas offrir de résistance et commencer à déchiqueter naturellement à la pression. Le bouillon devrait goûter comme une délicieuse soupe de porc simple à ce stade : salée, propre et chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "toasted_chilies",
      "instructions": "Pendant que le porc mijote, faire chauffer une poêle sèche ou un comal à feu moyen. Travaillant un à la fois, pressez chaque ancho et guajillo séché à plat contre la surface chaude avec une spatule pendant 8-10 secondes de chaque côté. Vous fleurissez les huiles, vous ne les brûlez pas: les chilys devraient adoucir, blister et sentir les fruits secs chauds et le chocolat doux, et non la fumée acride. Transférer immédiatement dans un bol et couvrir d'eau très chaude. Peser avec une assiette et tremper pendant 20 à 25 minutes jusqu'à ce qu'ils soient complètement adoucis. Réservez l'eau de trempage — une petite quantité peut être ajoutée à la pâte mélangée pour la profondeur, mais goûtez d'abord car elle peut être très amère.",
      "visualCue": {
        "primaryTarget": "Les chilies réhydratées sont uniformément pliables et sombres, le liquide de trempe est un riche rouge acajou, et l'odeur des chilies des fruits secs et de la terre douce quand vous ouvrez un.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis sont encore cassants et raides, l'eau est pâle, ils craquent lorsqu'ils sont pliés.",
            "action": "Étendre le trempage — ils ont besoin de réhydratation complète pour se fondre dans une pâte lisse."
          },
          {
            "state": "Perfect",
            "description": "Complètement pliable, déchirante comme du cuir humide, brun-rouge foncé à l'intérieur, l'eau trempe est un rouge-brique profond.",
            "action": "Égoutter et procéder immédiatement au mélange."
          },
          {
            "state": "Overdone",
            "description": "Les chiles étaient brûlés sur le comal — amer, la peau carbonisée.",
            "action": "Utiliser mais goûter l'eau de trempe avant de l'ajouter; l'eau très amère doit être jetée et remplacée par du matériel frais."
          }
        ]
      },
      "feelCue": "Pliez un chili réhydraté en deux — il devrait plier proprement sans aucun bruit de fissuration, comme du cuir souple. La chair intérieure doit être rouge foncé et humide. Si ça craque, il lui faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "toasted_chilies",
        "ing_07",
        "ing_08"
      ],
      "outputState": "chili_paste",
      "instructions": "Mélanger les chilis trempés et drainés dans un mélangeur avec l'origan séché, les graines de cumin grillées, et suffisamment de bouillon de porc (ou d'eau propre) pour se fondre en douceur — commencer par environ une demi-tasse et ajouter plus au besoin. Mélanger en haut pendant 2 minutes complètes jusqu'à ce qu'il soit complètement lisse. Passer à travers un tamis à mailles moyennes, appuyer fermement sur les solides avec une cuillère. Jeter les peaux et les graines laissées dans le tamis. La pâte résultante doit être un rouge brique profond à acajou, lisse comme du velours, avec un arôme de chili propre, fruité et terreux.",
      "visualCue": {
        "primaryTarget": "Une pâte profondément rouge brique, complètement lisse qui passe facilement à travers un tamis sans peau visible ni fragments de graines, sentant les fruits secs et la terre chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est granuleuse ou rouge-orange; les peaux de chili n'ont pas été complètement pulvérisées; le tamis est bouché de morceaux.",
            "action": "Mélanger plus longtemps en petits lots et presser plus fermement à travers le tamis."
          },
          {
            "state": "Perfect",
            "description": "Une pâte profonde, rouge brique, soyeuse. Passe à travers un tamis moyen. Il sent profondément l'ancho et le guajillo, comme le vin de fruits séchés.",
            "action": "Faire frire la pâte immédiatement dans la casserole de bouillon retournée avant d'ajouter le stock."
          },
          {
            "state": "Overdone",
            "description": "Trop d'eau de trempage ajoutée — la pâte est fine et aqueuse, la couleur est lavée.",
            "action": "Faire frire plus longtemps dans la prochaine étape pour éliminer l'excès d'humidité et de concentration."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de la pâte finie entre vos doigts — elle devrait se sentir soyeuse et tacher une brique rouge vif. L'arôme doit être profondément fruité et terreux, comme le vin concentré de chili séché. Si ça sent l'acride, les chilies étaient surchargées."
    },
    {
      "nodeId": "step_4",
      "action": "Aromates frits",
      "inputs": [
        "chili_paste",
        "pork_broth",
        "ing_09"
      ],
      "outputState": "pozole_rojo_broth",
      "instructions": "Dans la même grande casserole utilisée pour le porc, faire chauffer une cuillère à soupe de saindoux ou d'huile sur une hauteur moyenne jusqu'à ce qu'elle mijote. Ajouter la pâte de chili — elle s'étourdira agressivement. Faire frire la pâte en remuant constamment, pendant 5 minutes jusqu'à ce qu'elle s'assombrisse légèrement, perde son bord brut, et la graisse commence à se séparer aux bords. Ajouter le bouillon de porc réservé, en remuant pour mélanger. Ajouter le hominy drainé. Remettez la viande de porc déchiquetée (enlevant les gros os) dans la casserole. Faire mijoter tout ensemble pendant 30 minutes. Le bouillon tournera un rouge-brique saturé profond et le hominy gonflera légèrement, ramollissant dans le bouillon. Goûtez et ajustez généreusement le sel — un bouillon de pozole bien assaisonné doit être aromatisé avec hardiesse pour résister aux garnitures crues (choux cassés, radis, lime, origan) servies à côté.",
      "visualCue": {
        "primaryTarget": "Un bouillon rouge-brique saturé profond avec du porc hominy et déchiqueté visible partout, la surface légèrement brillante de la graisse de porc rendu, odeur de chili séché, de porc et d'origan.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est orange et mince, la pâte de chili n'est pas complètement intégrée, le bord brut du chili séché est toujours présent.",
            "action": "Laisser mijoter plus longtemps — le bouillon a besoin d'au moins 30 minutes pour intégrer pleinement la pâte de chili dans le stock de porc."
          },
          {
            "state": "Perfect",
            "description": "Un rouge-brique profond et terreux — la couleur du chili séché et de la vieille terre cuite — avec une surface brillante, plein hominy, et le porc déchiqueté. Goûte audacieux, complexe, légèrement fumé et richement salé.",
            "action": "Servir immédiatement avec des garnitures, ou refroidir et réfrigérer pendant la nuit — le pozole s'améliore énormément le lendemain."
          },
          {
            "state": "Overdone",
            "description": "Broth a diminué trop loin; hominy est en train de s'effondrer en mousse; la saveur est concentrée et très intense.",
            "action": "Ajouter l'eau bouillante ou le stock supplémentaire pour rétablir le volume et l'équilibre, puis ré-saisonner."
          }
        ]
      },
      "feelCue": "Déposer un petit bol du bouillon fini et le tenir avec les deux mains — vous devriez sentir la chaleur dans le bol et sentir l'arôme chaud de chili-and-pork avant qu'il atteigne vos lèvres. La première gorgée devrait être audacieuse et se réchauffer sans être tranchante. L'hominy devrait céder avec une résistance douce, comme un oreiller de maïs tendre."
    }
  ]
};
