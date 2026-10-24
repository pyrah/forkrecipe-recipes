export default {
  "repoId": "master_japanese_karaage_001",
  "parentRepoId": null,
  "slug": "karaage",
  "author": "ForkRecipe Kitchen",
  "title": "Karaage",
  "description": "Des cuisses de poulet de taille bite marinées dans du gingembre et du soja, draguées dans de la fécule de pomme de terre, et frites deux fois — la première frite met la croûte, la deuxième frite la conduit à une croûte en acajou qui éclate tandis que l'intérieur reste succulent. La morsure d'izakaya.",
  "cuisine": "Japonais",
  "culture": "Izakaya",
  "category": "proteins",
  "tags": [
    "Poulet frit",
    "Japonais",
    "soja",
    "gingembre",
    "izakaya"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "90 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 7,
    "sour": 1,
    "bitter": 1,
    "umami": 7,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisses de poulet désossées avec peau (2,5 cm)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "cuisse désossée sans peau, moins croquante mais encore bonne"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (koikuchi)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "mirine (réduire de moitié)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais (fin, jus et pulpe)",
      "ratioValue": 0.4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile (amende graduée)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Katakuriko (amidon de pomme de terre)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de maïs — plus croustillante, de couleur plus légère"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile de friture neutre (légume ou son de riz)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Citron (fruits pour servir)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sudachi",
        "Yuzu"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Couper les cuisses de poulet en morceaux de 2,5 à 3 cm — taille bouchée, uniforme, avec la peau sur chaque morceau si possible. Mettre dans un bol. Ajouter la sauce de soja, le saké, le gingembre râpé (y compris le jus de serrer les grilles), l'ail râpé et le sel. Jetez-le uniformément. Couvrir et faire mariner au réfrigérateur pendant au moins 30 minutes et jusqu'à 2 heures. Ne pas mariner plus longtemps: le sel et le soja commenceront à guérir l'extérieur et à faire absorber plus d'huile. Retirer du réfrigérateur 10 minutes avant de faire frire.",
      "visualCue": {
        "primaryTarget": "Les morceaux de poulet sont uniformément brun-ambre foncé du soja et du gingembre, sans taches pâles sèches. La surface brille avec la marinade.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines pièces ont encore des surfaces pâles et non revêtues. Marinade pooled au fond du bol.",
            "action": "Recollez et assurez-vous que chaque surface est touchée par la marinade."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce est uniformément revêtue de marinade de soja foncé. Ça sent le gingembre, le soja et le poulet cru. La surface est humide et parfumée.",
            "action": "Égoutter l'excès de marinade (secouer chaque morceau) et la drague dans l'amidon."
          },
          {
            "state": "Overdone",
            "description": "Marié plus de 4 heures. L'extérieur est légèrement gris et serré — salin.",
            "action": "Aller à la friture. La texture sera légèrement plus ferme et la croûte sera plus foncée, mais la saveur est intense et bonne."
          }
        ]
      },
      "feelCue": "Après 30 minutes de marinage, les morceaux de poulet se sentent légèrement plus fermes à l'extérieur — le sel a commencé à resserrer les protéines. Ceci est exact et signifie que la marinade a pénétré."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger",
      "inputs": [
        "marinated_chicken",
        "ing_07"
      ],
      "outputState": "dredged_chicken",
      "instructions": "Retirer le poulet de la marinade, agiter tout excès de liquide. Mettre la fécule de pomme de terre dans un grand bol ou un plateau peu profond. Ajouter les morceaux de poulet et mélanger pour bien enrober — presser l'amidon sur chaque surface, y compris le côté de la peau. Agiter tout excès d'amidon : vous voulez un revêtement blanc uniforme, mince, opaque, pas une couverture épaisse. L'humidité de la marinade absorbera l'amidon et le fera s'accrocher. Travailler rapidement et cuire dans les 5 minutes suivant le dragage — l'amidon absorbe l'humidité du poulet et perd son potentiel croquant s'il reste trop longtemps.",
      "visualCue": {
        "primaryTarget": "Chaque morceau est uniformément recouvert d'une croûte blanche opaque et légèrement humide de fécule de pomme de terre. Pas de taches nues mouillées. Pas de plaques épaisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches de marinade scintillantes sont encore visibles. L'amidon ne adhère pas à certaines surfaces.",
            "action": "Pressez fermement l'amidon sur les plaques nues — l'humidité de la marinade est l'adhésif."
          },
          {
            "state": "Perfect",
            "description": "Revêtement opaque et blanc mat sur toutes les surfaces. L'amidon a légèrement absorbé l'humidité de la surface et semble sec. Le revêtement est mince et uniforme.",
            "action": "Faire frire dans 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Revêtement lourd en amidon. On dirait du plâtre.",
            "action": "Agiter vigoureusement et tapoter chaque pièce contre le bord du bol pour déloger l'excès. Le revêtement épais absorbe l'huile et devient gommeux."
          }
        ]
      },
      "feelCue": "Une pièce correctement draguée doit se sentir légèrement crayeuse et sèche au toucher — l'amidon a capté l'humidité de surface. Si la pièce est mouillée et glissante malgré le revêtement blanc, elle a besoin de plus d'amidon."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "dredged_chicken",
        "ing_08"
      ],
      "outputState": "first_fried_chicken",
      "instructions": "Verser l'huile à une profondeur de 4 à 5 cm dans un four ou wok néerlandais lourd et chauffer à 160 à 165 C. C'est la première frite à température plus basse, qui fait cuire l'intérieur sans brûler la croûte. Travaillant en petits lots (jamais plus de 5 morceaux à la fois), abaissez doucement le poulet dans l'huile en utilisant des baguettes ou une araignée. Faire frire pendant 3-4 minutes, tourner une fois, jusqu'à ce que la croûte soit d'or pâle et sertie mais pas profondément colorée. Retirer avec une araignée et égoutter sur une grille. Laisser reposer le poulet pendant 4 à 5 minutes. L'intérieur finira la cuisson à partir de la chaleur résiduelle.",
      "visualCue": {
        "primaryTarget": "Les morceaux sont d'or pâle — la couleur du miel très léger. La croûte est réglée et n'est plus douce ou fragile au toucher. Le poulet à l'intérieur est cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est encore très pâle, presque blanche. L'intérieur se sent doux et céder lorsqu'il est pressé avec des pinces.",
            "action": "Encore 1 minute. La croûte est fragile quand le poulet est encore cru — ne précipitez pas la première frite."
          },
          {
            "state": "Perfect",
            "description": "Du miel léger. La croûte est ferme. Un thermomètre à sonde lit 72-75 C au centre. Prêt pour la période de repos et la deuxième frite.",
            "action": "Repose-toi sur la grille 4 minutes. Augmenter la température de l'huile à 190 C pour la deuxième friture."
          },
          {
            "state": "Overdone",
            "description": "La croûte est déjà d'or foncé dès la première frite. La deuxième frite va la brûler.",
            "action": "Sautez la deuxième friture ou réduisez-la à 30 secondes seulement pour un réchauffage crunch final."
          }
        ]
      },
      "feelCue": "Après la première frite, la croûte doit paraître légèrement creuse lorsqu'elle est tapée d'une baguette — un léger tic plutôt qu'une touffe terne. Ce son creux signifie que l'humidité a été chassée et que la seconde frite va la briser."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "first_fried_chicken",
        "ing_08"
      ],
      "outputState": "finished_karaage",
      "instructions": "Augmenter la température de l'huile à 185-190 C. Remettez les morceaux reposés à l'huile — ils s'étourdiront immédiatement et violemment. Faire frire pendant 60 à 90 secondes seulement, en tournant une fois, jusqu'à ce que la croûte soit une acajou profonde, riche et audiquement croquante au fur et à mesure que les morceaux se déplacent dans l'huile. Retirer rapidement et égoutter sur un support de fil propre — pas une serviette en papier, qui piège la vapeur et adoucit la croûte. La deuxième friture chasse la dernière humidité de la croûte et gélatinise l'amidon, créant la signature karaage : l'acajou brise l'extérieur, l'intérieur juteux à vapeur. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Deep acajou brun, uniforme sur toutes les surfaces. La croûte fait un son de fissuration distinct lorsqu'une pièce est pressée avec des pinces. La vapeur s'élève du rack.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est dorée mais pas profondément colorée. Ne croque pas audiquement. La peau peut encore être légèrement douce.",
            "action": "Revenez à l'huile chaude pendant 30 secondes. La deuxième fenêtre est courte: gardez la chaleur à 190 °C."
          },
          {
            "state": "Perfect",
            "description": "Riche marron. Crunch sonore lorsqu'il est pressé doucement avec des pinces. Les jus intérieurs sont clairs lorsqu'une pièce est coupée. Des odeurs de soja, de gingembre et d'huile chaude.",
            "action": "Égoutter sur la grille, presser le citron et manger dans les 5 minutes suivant la sortie de l'huile."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé à noir à la surface. Une odeur amère. La croûte est dure plutôt que fragile.",
            "action": "Égoutter immédiatement et manger rapidement — l'amertume est surtout à l'extérieur et l'intérieur est encore bon. Ne mangez pas de morceaux entièrement noirs."
          }
        ]
      },
      "feelCue": "Le karaage parfait, ramassé avec des baguettes, devrait s'écraser audiblement juste d'être pris — avant la première morsure. Ce son est la promesse du plat. Pressez généreusement le citron : l'acide coupe l'huile et soulève la glaçure de soja."
    }
  ]
};
