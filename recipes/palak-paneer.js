export default {
  "repoId": "master_indian_palak-paneer_001",
  "parentRepoId": null,
  "slug": "palak-paneer",
  "author": "ForkRecipe Kitchen",
  "title": "Palak Paneer",
  "description": "Des cubes de paneer dorés nichés dans une purée d'épinards veloutés et vert vif épicés de garam masala et de crème — le curry végétarien Punjabi quintessence, vif en couleur et profond dans la saveur.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "proteins",
  "tags": [
    "indienne",
    "épinards",
    "panneau",
    "végétarien",
    "punjabi",
    "curry"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
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
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "épinards frais (ou épinards à feuilles pleines, tiges parées)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "épinards congelés, dégelés et pressés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Paneer, coupé en cubes de 2 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tofu extra-ferme, pressé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Ghee ou huile neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Chili cachemiri en poudre ou paprika doux",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "cayenne à la moitié de la quantité"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Crème de cajou",
        "lait de coco plein gras"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01",
        "ing_14"
      ],
      "outputState": "blanched_spinach",
      "instructions": "Portez une grande casserole d'eau salée à ébullition. Déposer dans tous les épinards et blanchir pendant exactement 60 à 90 secondes, jusqu'à ce que les feuilles se fanent complètement et que leur couleur passe d'un vert herbeux terne à une émeraude vive et électrique. Drainez immédiatement et plongez dans un bol d'eau glacée. Le choc thermique bloque la chlorophylle et la couleur vive. Une fois froid, égoutter et presser fermement pour retirer le plus de liquide possible. Transférer les épinards pressés dans un mélangeur et les mélanger avec 2 à 3 cuillerées à soupe d'eau jusqu'à ce que vous ayez une purée entièrement lisse et vert brillant. Ne faites pas cuire les épinards plus longtemps — chaque minute supplémentaire à la chaleur le transforme de bijou vert à l'armée-drabe.",
      "visualCue": {
        "primaryTarget": "La purée est intensément verte — presque fluorescente — lisse comme du velours, sans fil fibreux visible. Il semble artificiellement vif, ce qui signifie que vous l'avez fait correctement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épinards ne sont que partiellement flétris; les feuilles brutes résistent au mélange en douceur; la couleur est inégale.",
            "action": "Blanchissez encore 30 secondes et de nouveau."
          },
          {
            "state": "Perfect",
            "description": "Entièrement flétri, glacé, pressé sec, et mélangé à une purée lisse et vert brillant sans fil.",
            "action": "Réserver et procéder à la construction de la base du masala."
          },
          {
            "state": "Overdone",
            "description": "Épinards bouillis pendant plus de 3 minutes; purée vert kaki ou vert gris et goûts de légumes fatigués et surcuits.",
            "action": "Continuez — les épices masqueront une partie de la perte de couleur — mais la prochaine fois, le choc immédiatement."
          }
        ]
      },
      "feelCue": "Les épinards blanchis pressés devraient se sentir presque comme une boule de mastic sec dans votre palmier — dense et compact. Si l'eau coule lorsque vous le pressez, appuyez; l'excès d'eau dans la purée rend le curry mince et dilué."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "golden_paneer",
      "instructions": "Chauffer une poêle antiadhésive ou en fonte à feu moyen-vif. Ajouter la moitié du ghee. Lorsqu'il mijote, ajouter les cubes de paneer en une seule couche sans encombrer — travailler en lots si nécessaire. Sear non perturbé pendant 2 minutes jusqu'à ce que le fond soit en or profond. Tourner et saisir les côtés restants pendant une minute. La vitre sera résistante à la coupe lorsqu'elle est crue; la surface de la mer lui donne une coquille légèrement ferme et salée qui tient dans le curry plutôt que de la dissoudre. Transférer dans un bol. Assaisonner légèrement avec une pincée de sel.",
      "visualCue": {
        "primaryTarget": "Les cubes de paneer ont un extérieur doré-brun, légèrement croûté sur au moins deux côtés; l'intérieur est blanc et la texture s'est légèrement raffermie par la chaleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paneer est pâle et doux; il colle à la poêle; aucune couleur dorée n'a été développée.",
            "action": "La poêle n'est pas assez chaude. Augmenter la chaleur et laisser mijoter le ghee avant d'ajouter le prochain lot."
          },
          {
            "state": "Perfect",
            "description": "Croûte dorée, légèrement ferme; le paneer se libère proprement de la poêle; sent le beurre frit et les produits laitiers frais.",
            "action": "Transférer dans un bol et réserver pour plier dans le curry à la fin."
          },
          {
            "state": "Overdone",
            "description": "Paneer est brun foncé et a séché; l'extérieur est dur et caoutchouteux.",
            "action": "Faire tremper les cubes de paneer surdosés dans de l'eau chaude pendant 5 minutes pour réhydrater avant d'ajouter au curry."
          }
        ]
      },
      "feelCue": "Un cube de paneer correctement scellé devrait se sentir légèrement résistant lorsqu'il est pressé — comme un morceau ferme de tofu avec un extérieur sec, légèrement texturé. Si elle se sent humide et douce, elle a besoin de plus de temps dans la poêle."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_13"
      ],
      "outputState": "spiced_masala",
      "instructions": "Dans la même casserole, ajouter le reste à feu moyen. Ajouter l'oignon en dés et cuire de 8 à 10 minutes jusqu'à ce qu'il soit profondément doré et doux. Ajouter l'ail haché et le gingembre et remuer pendant 60 secondes jusqu'à odorat. Ajouter toutes les épices moulues, le garam masala, le cumin, la coriandre, le curcuma et le chili cachemirien, avec le sel. Mélanger constamment pendant 45 à 60 secondes, cuire les épices directement dans la graisse. Cela fleurit les huiles d'épices et élimine le goût cru et poudreux. Le mélange deviendra très parfumé et sec; ajouter une cuillère à soupe d'eau si elle commence à coller. Le masala est prêt quand il sent l'ivresse complexe et la graisse commence à se séparer visiblement autour des bords.",
      "visualCue": {
        "primaryTarget": "Une pâte aromatique épaisse d'oignon épicé rouge-orange profond, scintille aux bords où le ghee se sépare; l'arôme est capricieux et complexe — cumin, coriandre, chili, et la douceur de l'oignon cuit tout distincte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sentent crus et poussiéreux; le mélange est encore humide; l'oignon n'est pas entièrement doré.",
            "action": "Faire cuire plus longtemps à feu moyen — les épices doivent faire frire dans la graisse, et non pas la vapeur dans l'humidité."
          },
          {
            "state": "Perfect",
            "description": "Les épices sont fleuries — le mélange sent torréfié et complexe; le ghee s'est légèrement séparé aux bords; la couleur est rouge-orange profond.",
            "action": "Ajouter immédiatement la purée d'épinards."
          },
          {
            "state": "Overdone",
            "description": "Les épices ont brûlé; le mélange colle fortement et sent l'amer ou l'acride.",
            "action": "Ajouter immédiatement un jet d'eau pour déglacer; réduire la chaleur. Sauvez ce que vous pouvez — si le fond de la poêle est noir, recommencez le masala."
          }
        ]
      },
      "feelCue": "Penchez - vous sur la poêle et inhalez: un masala bien fleuri sent chaud, rôti et riche — presque comme un restaurant de curry. Si elle sent vif et cru, les épices ont besoin de plus de temps dans la graisse."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_masala",
        "blanched_spinach",
        "ing_12"
      ],
      "outputState": "palak_gravy",
      "instructions": "Verser la purée d'épinards dans le masala et mélanger. Ajoutez 2 à 3 cuillères à soupe d'eau pour l'aider à incorporer. Porter à mijoter doucement et cuire 5 à 7 minutes en remuant fréquemment. Les épinards s'obscurcissent légèrement pendant qu'ils cuisent dans le masala, mais doivent conserver un vert vif. Incorporer la crème lourde et laisser mijoter encore 2 minutes. Goûtez et ajustez le sel. La sauce devrait être assez épaisse pour enrober fortement l'arrière d'une cuillère — si elle est très épaisse, ajouter de l'eau par la cuillère à soupe; si elle est trop fine, laisser mijoter plus longtemps.",
      "visualCue": {
        "primaryTarget": "Une sauce uniformément verte, à texture velours qui enrobe la cuillère; tourbillons de crème juste pliés dans encore visible; l'arôme est épicé, légèrement terreux épinards avec richesse de ghee et de crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée d'épinards et le masala n'ont pas encore été entièrement intégrés; morceaux visibles de pâte d'épices à éclats blancs; crème non encore incorporée.",
            "action": "Laisser mijoter encore 3-4 minutes, en remuant constamment pour homogénéiser."
          },
          {
            "state": "Perfect",
            "description": "Gravier lisse, uni, vert profond; pas de séparation; la crème tournoyait dans un ruban brillant; la consistance de la nappe — enrobe une cuillère et ne coule que lentement.",
            "action": "Plier dans le panneau et servir dans les 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "La graisse s'est épaissie à la texture d'une pâte; la couleur des épinards s'estompe à gris-vert à cause de la chaleur prolongée.",
            "action": "Ajouter l'eau pour se détendre et retirer immédiatement de la chaleur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère dans la sauce et relâchez-la — le sentier devrait se fermer lentement pendant 2-3 secondes. S'il se ferme immédiatement comme de l'eau, il est trop mince; s'il reste ouvert comme de la boue, il est trop épais. Réglez avec de l'eau ou plus mijotant."
    },
    {
      "nodeId": "step_5",
      "action": "Plier",
      "inputs": [
        "palak_gravy",
        "golden_paneer"
      ],
      "outputState": "finished_palak_paneer",
      "instructions": "Abaissez doucement les cubes de paneer dans la sauce palak. Mélanger très doucement — le paneer est fragile et s'effondrera s'il est manipulé à peu près, alors utilisez un mouvement pliant plutôt que de remuer. Laisser mijoter à feu très doux pendant seulement 3-4 minutes, assez longtemps pour que le paneer se réchauffe et absorbe une partie de la couleur et de la saveur du curry à ses bords. Ne pas cuire plus longtemps — la chaleur prolongée rend le paneer caoutchouteux. Servir immédiatement dans un bol chaud, avec un tourbillon de crème sur le dessus si désiré, à côté du naan, du roti ou du riz basmati.",
      "visualCue": {
        "primaryTarget": "Les cubes de paneer dorés nichés dans une sauce vert vif et brillant; les bords de paneer sont teintés vert à la surface mais pâle à l'intérieur; le plat général semble riche, brillant et accueillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paneer est froid au centre et n'a absorbé aucune couleur du curry; il semble jarring et pâle.",
            "action": "Laisser mijoter doucement pendant 2 à 3 minutes à feu doux jusqu'à ce que la vitre soit chaude."
          },
          {
            "state": "Perfect",
            "description": "La poêle est chauffée, avec une faible teinte verte aux bords du curry; elle tient sa forme mais donne doucement à la cuillère.",
            "action": "Servir à la fois — ce plat ne s'améliore pas en attendant."
          },
          {
            "state": "Overdone",
            "description": "La paneer a mijoté trop longtemps et est caoutchouteuse et dense; la sauce s'est serrée si fortement qu'elle s'est encore épaissie et le vert s'estompé.",
            "action": "Ajouter une éclaboussure d'eau chaude et retirer de la chaleur; rien ne peut restaurer la texture de paneer surcuite, mais les saveurs restent."
          }
        ]
      },
      "feelCue": "Un morceau parfait de paneer palak devrait céder à une cuillère avec seulement une résistance légère - douce mais structurée, comme la mozzarella fraîche. Si elle grince ou ressort comme du caoutchouc, elle a été cuite trop longtemps."
    }
  ]
};
