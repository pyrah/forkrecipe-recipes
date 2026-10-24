export default {
  "repoId": "master_argentine_alfajores_001",
  "parentRepoId": null,
  "slug": "alfajores",
  "author": "ForkRecipe Kitchen",
  "title": "Alfajores de Maizena",
  "description": "Le biscuit de sandwich bien-aimé de l'Argentine — deux disques tendres et miettes de pain d'amidon de maïs rejoints par dulce de leche et roulés dans de la noix de coco déchiquetée; ils se dissolvent sur la langue dans une vague de caramel et de beurre avant d'avoir fini de mâcher.",
  "cuisine": "Argentine",
  "culture": "Argentine/Péruviens",
  "category": "desserts",
  "tags": [
    "végétarien",
    "l'argentine",
    "cookies",
    "dulce-de-leche",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Maïzène",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de gâteau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé (température ambiante)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre en poudre (givrage), criblé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Jaune d'œuf (additionnel)",
      "ratioValue": 1,
      "defaultUnit": "yolk",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Citrus",
      "name": "Zeste de citron (finement râpé)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "zeste d'orange"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Dulce de leche (épaisseur, pas runny)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "lait condensé caramel"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Noix de coco déshydratée ou déchiquetée",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "sucre glace",
        "chocolat noir trempé pour tremper"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crème",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "creamed_butter",
      "instructions": "Battre le beurre à température ambiante et le sucre en poudre tamisé ensemble dans un mélangeur de stand avec l'attache de palette à vitesse moyenne pendant 4-5 minutes jusqu'à ce que le mélange soit très pâle, presque blanc et léger dans la texture. La crème prolongée incorpore l'air et dissout complètement le sucre en poudre, ce qui est essentiel à la texture éventuelle de fusion dans la bouche. Gratter le bol et pagayer à mi-chemin. Le mélange final doit ressembler à du fromage à la crème fouettée — et non à la pâte jaune dense du beurre sous-écrémé.",
      "visualCue": {
        "primaryTarget": "Presque blanc, très léger et moelleux, avec une augmentation significative du volume par rapport au beurre de départ. Pas de stries jaunes. Des chutes de la pagaie dans des touffes douces et aérées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jaune pâle et dense. Le mélange ressemble à du beurre ramolli avec du sucre mélangé — pas vraiment crémeux. Ça sent un peu grainé.",
            "action": "Continuer à battre sur support pendant 2 minutes de plus. Le changement de couleur du jaune au presque blanc indique une bonne incorporation de l'air."
          },
          {
            "state": "Perfect",
            "description": "Presque blanc, très léger et volumineux. Lorsqu'une petite quantité est frottée entre les doigts, elle se sent soyeuse-lisse sans particules de sucre gritty.",
            "action": "Ajouter les œufs et les arômes."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est légèrement séparé et semble gras ou caillé. L'émulsion du beurre s'est rompue.",
            "action": "Ajouter une cuillère à soupe de farine tamisée et battre brièvement — l'amidon aidera à réémulsionner le mélange."
          }
        ]
      },
      "feelCue": "Pincez une petite quantité — le beurre parfaitement crémeux se sent comme du velours frais entre vos doigts, soyeux-lisses et incroyablement léger pour ce qui est essentiellement gras et sucre."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "creamed_butter",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09",
        "ing_01",
        "ing_02",
        "ing_08"
      ],
      "outputState": "alfajor_dough",
      "instructions": "Avec le mélangeur bas, ajouter les œufs un à la fois, puis le jaune supplémentaire, battant bien après chaque ajout. Le jaune supplémentaire enrichit la pâte et contribue à la texture sablonneuse et friable. Ajouter l'extrait de vanille et le zeste de citron. Sirotez la fécule de maïs, la farine et la poudre à pâte et ajoutez deux additions avec le mélangeur à faible teneur, mélangez seulement jusqu'à ce qu'il soit simplement combiné — dès qu'aucune farine sèche n'est visible, arrêtez. Le surmélange développe du gluten et rendra les cookies plus difficiles que tendres. La pâte sera douce et légèrement collante.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et pâle qui se réunit. Légèrement plus doux qu'à la température ambiante — pas émietté, pas collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche ou de fécule de maïs non mélangée visibles. La toux s'écroule lorsqu'elle est pressée.",
            "action": "Mélanger de 5 à 10 secondes de plus à bas, seulement jusqu'à ce que les poches de farine disparaissent."
          },
          {
            "state": "Perfect",
            "description": "La pâte cohérère dans une boule lisse qui tient ensemble lorsqu'elle est pressée mais ne laisse aucun résidu sur le bol. Jaune pâle des jaunes d'œufs.",
            "action": "Former dans un disque plat, envelopper en plastique et refroidir pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "La toux est élastique et se retire lorsqu'elle est pressée. La texture est légèrement dure plutôt que friable.",
            "action": "Refroidir pendant 1 heure au lieu de 30 minutes — le gluten se détend significativement dans le froid."
          }
        ]
      },
      "feelCue": "Appuyez sur un pouce dans la pâte — il devrait laisser une empreinte propre sans coller, et les côtés de l'impression ne devraient pas revenir du tout. Comme presser dans de l'argile froide."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "alfajor_dough"
      ],
      "outputState": "baked_alfajor_cookies",
      "instructions": "Préchauffer le four à 170°C (350°F). Sur une surface légèrement farinée, rouler la pâte réfrigérée à 5mm d'épaisseur — pas plus mince, ou les biscuits seront trop fragiles. Couper les rondelles de 4cm avec un coupe-cookie et disposer sur une plaque de cuisson parcheminée, espacées de 2cm. Cuire 12-14 minutes. L'indicateur clé est ce qui ne doit PAS arriver : les cookies ne doivent prendre aucune couleur. Ils devraient avoir l'air presque exactement comme ils entraient — pâles et mates, juste séchés et fixés. Ce four presque invisible est le secret de leur tendresse dissoute.",
      "visualCue": {
        "primaryTarget": "Des biscuits pâles, mats, blancs crèmes qui semblent à peine différents de la pâte non cuite. Les fonds sont à peine dorés lorsqu'ils sont levés — presque blancs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cookies sont encore très doux au centre et s'effondrent lorsqu'ils sont levés. La fécule de maïs n'a pas été complètement gélatinisée.",
            "action": "Cuire encore 2 minutes. Ces cookies semblent faits avant qu'ils ne soient — l'amidon a besoin de temps plein."
          },
          {
            "state": "Perfect",
            "description": "Complètement pâle sur le dessus — aucune couleur du tout. Les bords sont à peine fixés. Les cookies se sentent assez fermes pour soulever, mais ils seront fermes plus longtemps qu'ils refroidissent. Le bas montre un fantôme d'or pâle.",
            "action": "Laisser refroidir complètement sur le plateau avant de le remplir."
          },
          {
            "state": "Overdone",
            "description": "Les cookies ont pris une couleur dorée pâle sur le dessus. Ils seront croquants plutôt que tendres et n'auront pas la qualité caractéristique de fusion dans la bouche.",
            "action": "Ils sont toujours délicieux comme des biscuits à pain court. Régler la température ou l'heure du four pour le prochain lot."
          }
        ]
      },
      "feelCue": "Faites glisser une spatule sous un biscuit frais du four — il devrait se sentir assez ferme pour ne pas casser mais légèrement céder, comme presser un biscuit sec. La fragilité est le but."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "baked_alfajor_cookies",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_alfajores",
      "instructions": "Assurez-vous que les biscuits sont complètement frais, même une légère chaleur fera fondre le dulce de leche et les fera glisser. Faire correspondre les cookies en paires de même taille. Spoon ou pipe une quantité généreuse de dulce de leche (environ 1 cuillère à café) sur le côté plat d'un cookie. Appuyez sur le cookie correspondant sur le dessus, plan vers le bas, et pivotez très doucement pour étendre le dulce de leche au bord sans fendre les cookies fragiles. Rouler le bord exposé du dulce de leche à travers la noix de coco, en appuyant légèrement pour qu'il adhère tout autour. Conserver dans un contenant hermétique à température ambiante pendant 3 jours.",
      "visualCue": {
        "primaryTarget": "Un sandwich soigné avec un anneau de dulce de leche visible et uniforme au bord, complètement encerclé par la noix de coco. Les deux cookies s'alignent parfaitement, sans que le dulce de leche s'étende sur la surface supérieure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dulce de leche n'atteint pas les bords — trop peu de remplissage ou les cookies n'ont pas été pressés ensemble. La luzerne a l'air gantée et la première morsure sera tout cookie.",
            "action": "Retirez doucement les cookies et ajoutez plus de dulce de leche. Remonter lentement."
          },
          {
            "state": "Perfect",
            "description": "Une bande généreuse, même de dulce de leche de couleur caramel visible à la circonférence. La noix de coco adhère complètement au bord. Le sandwich est légèrement lourd pour sa taille.",
            "action": "Conserver dans un contenant hermétique."
          },
          {
            "state": "Overdone",
            "description": "Trop de dulce de leche a été pressé sur les surfaces supérieure et inférieure. La noix de coco refuse d'adhérer aux surfaces planes.",
            "action": "Essuyer les dessus avec un doigt et n'enrober que l'anneau de bord exposé."
          }
        ]
      },
      "feelCue": "Ramassez une luzerne finie et sentez la légère donne que les deux biscuits tendres se cèdent à travers le remplissage — ils devraient se sentir délicats mais pas fragiles, comme une promesse très doucement tenue."
    }
  ]
};
