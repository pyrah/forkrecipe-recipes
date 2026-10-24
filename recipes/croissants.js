export default {
  "repoId": "master_french_croissants_001",
  "parentRepoId": null,
  "slug": "croissants",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre Croisants",
  "description": "Pâte stratifiée en couches de beurre de style européen à travers des dizaines de tours — le résultat est un croissant de couches de nids d'abeille qui sifflent quand vous mordez, parfumé de beurre brun et d'acide lactique.",
  "cuisine": "Français",
  "culture": "Viennoiserie française",
  "category": "breads",
  "tags": [
    "croissant",
    "laminés",
    "Viennoiserie",
    "français",
    "beurre",
    "Flacons"
  ],
  "difficulty": 5,
  "activeTime": "3 hr",
  "totalTime": "18 hr",
  "ratioSystem": "parts",
  "stars": 2655,
  "forks": 398,
  "contributors": 97,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-20",
  "updatedAt": "2025-05-30",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (12–13% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "T55 Farine française"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Lait entier froid",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure sèche instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé (détempé, doux)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé européen (beurrage, 84% gras, froid)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "detrempe_dough",
      "instructions": "Mélanger la farine, le sucre, le sel, la levure, le lait froid et le beurre doux dans un mélangeur de stand. Mélanger en bas 3 minutes jusqu'à combinaison, puis en milieu pendant 4 à 5 minutes seulement — arrêter pendant que la pâte est encore légèrement sous-développée (surface approximative, à peine en passant par la vitre). Le surcollage de la détente la rend trop élastique pour rouler facilement plus tard. Former en rectangle, envelopper étroitement et réfrigérer pendant la nuit ou au moins 6 heures. Le trempe froid est plus facile à strater et aide à maintenir les couches de beurre.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse mais légèrement sous-développée. La surface doit être généralement lisse avec une rugosité très faible. Pas entièrement élastique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est dure et chaotique. Des larmes sur de courtes étendues. Ne tient pas bien.",
            "action": "Mélanger 1 à 2 minutes de plus à basse température."
          },
          {
            "state": "Perfect",
            "description": "Surface généralement lisse avec quelques taches rugueuses. Seulement légèrement élastique — quand vous tirez une pièce il s'étire un peu puis les larmes. C'est intentionnel.",
            "action": "Façonner en rectangle plat, envelopper et réfrigérer au moins 6 heures."
          },
          {
            "state": "Overdone",
            "description": "Pâte élastique très lisse qui ressort agressivement. Résiste à rouler plus tard.",
            "action": "Réfrigérer immédiatement. Le froid ralentira l'activité du gluten."
          }
        ]
      },
      "feelCue": "Le détrempe devrait se sentir frais, légèrement raide, et seulement légèrement élastique — il ne devrait pas se battre comme une pâte pétrie mature. Quand il fait froid, il doit se sentir comme de l'argile ferme qui a une impression."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "ing_07"
      ],
      "outputState": "butter_block",
      "instructions": "Retirer le beurre du réfrigérateur 15 minutes avant la stratification. Battez-le entre deux feuilles de parchemin avec un rouleau jusqu'à ce qu'il forme un carré de 20×20cm, 5–6mm d'épaisseur. Le beurre doit être souple mais froid — 16°C (60°F) est idéal. Il doit plier sans craquelure et ne doit pas être gras. S'il craque quand il est plié, il fait trop froid. Si elle frotte et adoucit immédiatement lorsqu'elle est manipulée, elle est trop chaude. La plasticité du beurre est la variable la plus critique en lamination.",
      "visualCue": {
        "primaryTarget": "Un carré de 20×20cm d'épaisseur uniforme, 5–6mm dans l'ensemble. Aucune fissure visible. Opaque, mat et ferme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre craque et s'effondre quand il est battu. Des flocons blancs visibles.",
            "action": "Reposez à température ambiante 5 minutes de plus. Le beurre est trop froid."
          },
          {
            "state": "Perfect",
            "description": "Pliable, lisse 20×20cm carré. Lorsqu'un coin est courbé à 90°, il se plie sans craquer ni casser. Du calme.",
            "action": "Passez immédiatement à l'enveloppe du beurre dans la pâte."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est gras et diluant. Tes mains le réchauffent. Température du beurre supérieure à 20°C.",
            "action": "Réfrigérer le bloc beurre pendant 10 minutes avant de procéder."
          }
        ]
      },
      "feelCue": "Le bloc de beurre doit se sentir comme de la cire froide ou de l'argile froide épaisse — ferme mais plastique, pas fragile. Lorsque vous appuyez sur un doigt dedans, il devrait laisser une impression propre sans que le beurre craque autour des bords."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "detrempe_dough",
        "butter_block"
      ],
      "outputState": "laminated_dough",
      "instructions": "Roulez le détrempe froid dans un rectangle de 40×20cm. Placer le bloc de beurre au centre, plier la pâte pour enrober complètement le beurre et pincer les coutures fermées. Rouler à 60×20cm et effectuer un pli de lettre (trois fois). Retourner au réfrigérateur pendant 30 minutes. Répéter ce cycle de rotation trois fois plus (4 au total), en refroidissant 30 minutes entre chaque tour. Après 4 tours d'un pli de lettre, vous avez 3×3×3×3 = 81 couches. Travaillez rapidement — si le beurre traverse la pâte ou si vous le voyez frotter, refroidissez immédiatement.",
      "visualCue": {
        "primaryTarget": "Après le pli final, les bords de la pâte doivent montrer des lignes de couche distinctes lorsqu'ils sont vus du bord de coupe, comme le contreplaqué stratifié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les calques ne sont pas encore distincts. Beurre et pâte semblent fusionnés. Pas assez de plis terminés.",
            "action": "Compléter les cycles de plis restants avec un refroidissement adéquat entre chacun."
          },
          {
            "state": "Perfect",
            "description": "Des couches distinctes au bord de la coupe — de multiples couches visibles de beurre et de pâte. Aucun beurre ne se brise visible à la surface. Dure froide et ferme.",
            "action": "Finale refroidir 30 minutes, puis couper et façonner."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a brisé la surface de la pâte, ou les couches ont fusionné de la chaleur. La surface est graisseuse et saignante.",
            "action": "Réfrigérer immédiatement pendant 1 heure. Une partie de l'intégrité de la couche peut être perdue, mais les croissants seront toujours bons."
          }
        ]
      },
      "feelCue": "Après la lamination, la pâte se sent nettement plus raide et empilée — vous pouvez sentir la résistance des couches quand vous appuyez dedans. La surface doit être froide, sèche et lisse, sans beurre visible à travers la peau de la pâte."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "laminated_dough"
      ],
      "outputState": "shaped_croissants",
      "instructions": "Rouler la pâte laminée dans un rectangle de 60×25cm d'épaisseur de 4mm. Utilisez une règle et un couteau tranchant pour couper de longs triangles avec une base de 12cm. Étendez chaque triangle doucement à 25cm de long. En partant de la base, rouler fermement vers le point sans comprimer trop fort. Le rouleau doit être serré mais ne pas serrer les couches à plat. Courbez légèrement les extrémités vers vous pour former le croissant. Placer sur des plateaux parcheminés, avec le point en dessous. Preuve à 75°F (24°C) pendant 2 à 3 heures jusqu'à ce que presque doublé et visiblement stratifié.",
      "visualCue": {
        "primaryTarget": "Les croissants prouvés ont l'air courtois, aérés et pleins. Lorsque le plateau est agité doucement, ils oscillent nettement. Définition de la couche visible aux extrémités de la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les croissants sont denses et ne grouillent pas. Se sentir lourd et compact quand soulevé.",
            "action": "Continuez. Les croissants ont besoin de 2 à 3 heures à 24°C. Ne vous précipitez pas avec la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Des croissants pleins, aérés et jonglants avec des couches visibles aux extrémités ouvertes. La forme du croissant est maintenue. Quand il est poché, il ressort lentement.",
            "action": "Lavez les œufs doucement et faites cuire."
          },
          {
            "state": "Overdone",
            "description": "Les croissants sont très gonflés et les couches commencent à se séparer ou à se fondre. Beurre billard visible sur le parchemin.",
            "action": "Faites cuire immédiatement. Réduire la température du four de 10 °C pour tenir compte de l'excès de beurre."
          }
        ]
      },
      "feelCue": "Les croissants entièrement éprouvés se sentent incroyablement légers et tremblants lorsque vous secouez le plateau — ils devraient sentir qu'ils sont à peine là, pleins d'air piégé entre les couches. Appuyez très doucement sur l'un d'eux : il devrait donner comme un coussin en mousse."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "shaped_croissants"
      ],
      "outputState": "finished_croissants",
      "instructions": "Appliquer un lavage fin et prudent des oeufs (œuf + lait, bien battu), brossage avec les couches non contre eux pour éviter le dégonflage. Cuire à 400°F (200°C) pendant 18 à 22 minutes jusqu'à ce qu'il soit brun-ambre profond. Les croissants devraient souffler de façon spectaculaire dans le four — le beurre crée de la vapeur qui force les couches à les séparer. S'ils ont l'air pâle à 18 minutes, augmenter à 410°F pendant 3 minutes. Un croissant bien cuit laissera un anneau visible de beurre clarifié sur le parchemin.",
      "visualCue": {
        "primaryTarget": "Extérieur ambre profond en nid d'abeille. Couches visiblement séparées et distinctes. Un bassin de beurre clarifié sur le parchemin sous chaque croissant. L'odeur du beurre brun est incomparable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle. Couches à peine séparées. Pas de piscine de beurre. L'intérieur peut être humide et pâteux entre les couches.",
            "action": "Continuer à cuire 4 à 5 minutes de plus. L'intérieur doit sécher."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde. Des couches distinctes et brisées comme un nid d'abeille visible aux extrémités de la coupe. Beurre sur parchemin. Ça semble creux quand on tape sur le fond.",
            "action": "Laisser refroidir 15 minutes avant de manger."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé avec quelques bords brûlés. Beurre excessif sur parchemin. Les couches sont très sombres.",
            "action": "Encore délicieux: les couches brûlées ajoutent une agréable amertume. Evitez les plus sombres."
          }
        ]
      },
      "feelCue": "Soulevez un croissant fini et il devrait sentir la lumière choquante - dramatiquement plus léger que sa taille suggère. Tapez sur le bas et il sonne creux. Pressez-le doucement : vous devriez sentir la résistance de dizaines de couches distinctes, puis entendre un crépitement léger et satisfaisant."
    }
  ]
};
