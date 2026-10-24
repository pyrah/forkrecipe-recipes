export default {
  "repoId": "master_french_pate_brisee_001",
  "parentRepoId": null,
  "slug": "pate-brisee",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte Brisée",
  "description": "Une petite croûte tendre et frénétique — à peine n'importe quelle eau, du beurre froid frotté au sable — qui se jette dans une coquille pâle et biscuit avec une structure suffisante pour retenir la crème la plus humide sans se tourner vers la pâte.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "breads",
  "tags": [
    "pâtisserie",
    "tarte",
    "courte croûte",
    "français",
    "base",
    "beurre",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hour 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 1330,
  "forks": 241,
  "contributors": 38,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine plate (tout usage)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "moitié de farine d'amande (pour les coquilles plus riches)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre froid non salé, petits cubes",
      "ratioValue": 50,
      "defaultUnit": "%",
      "substitutions": [
        "saindoux froids (flakier, moins beurreux)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaune d'œuf",
      "ratioValue": 5,
      "defaultUnit": "%",
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
        "ing_03"
      ],
      "outputState": "flour_butter_sand",
      "instructions": "Placer la farine et le sel dans un grand bol (ou un robot alimentaire). Ajouter les cubes de beurre froid. Frotter le beurre dans la farine avec le bout des doigts, lever et laisser tomber le mélange d'une hauteur pour l'aérer, jusqu'à ce que le mélange ressemble à du sable grossier et humide sans morceaux de beurre individuels plus grands qu'un pois. Travaillez rapidement — si vos mains sont chaudes, appuyez sur le bol contre une surface froide. Alternativement, pouls dans un robot alimentaire 8-10 fois.",
      "visualCue": {
        "primaryTarget": "Une texture claire, sèche, à sable grossier, sans morceaux de beurre visible, mais pas encore de poudre fine. Des taillis de plus grande taille sont acceptables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes pièces de beurre identifiables sont encore visibles parmi la farine. Le mélange semble farineux avec des morceaux de beurre.",
            "action": "Continuer à frotter, en se concentrant sur la décomposition de chaque cube de beurre individuellement."
          },
          {
            "state": "Perfect",
            "description": "Le mélange ressemble à de la chapelure humide ou du sable grossier. Le beurre est distribué mais pas invisible. Soulève et tombe librement.",
            "action": "Faites un puits au centre et ajoutez le jaune d'œuf et l'eau."
          },
          {
            "state": "Overdone",
            "description": "Le mélange semble uniforme et pâle: le beurre a fondu dans la farine. Sensation de graisse et de chaleur.",
            "action": "Réfrigérer le mélange entier pendant 15 minutes avant d'ajouter de l'eau. La pâtisserie sera moins friable mais peut encore être utilisée."
          }
        ]
      },
      "feelCue": "Travaillez avec des mains froides et une touche légère — le mélange doit se sentir frais et sec, coulant entre vos doigts comme du sable humide, avec très peu d'huile du beurre enrobant les particules de farine."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "flour_butter_sand",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pastry_dough",
      "instructions": "Battre ensemble le jaune d'œuf et l'eau glacée dans un petit bol. Faire un puits dans le mélange farine-beurre et verser dans l'eau-oeuf. À l'aide d'une fourchette ou d'un coupe-pâtisserie, mélanger la pâte avec un minimum de mélange. La pâte sera louche et à peine cohérente. Dès qu'il se réunit quand vous serrez une poignée dans votre poing, arrêtez. Se tourner sur une surface légèrement farinée et presser ensemble dans un disque plat. Ne knead pas.",
      "visualCue": {
        "primaryTarget": "Un disque rugueux et chaotique qui tient à peine ensemble lorsqu'il est pressé — pas une boule lisse. Il devrait encore y avoir une texture visible à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est toujours très friable et ne tiendra pas ensemble même lorsqu'il est pressé. Sécheresse et poudreuse.",
            "action": "Ajouter de l'eau glacée, une cuillère à café à la fois, en mélangeant avec la fourchette."
          },
          {
            "state": "Perfect",
            "description": "Shaggy et rugueux-surface mais cohésif quand pressé fermement. Pas de taches mouillées et collantes. Il tient sa forme comme un disque.",
            "action": "Enrouler et réfrigérer pendant au moins 45 minutes."
          },
          {
            "state": "Overdone",
            "description": "La toux a été surmenée et est lisse comme de la pâte à pain. Ça peut paraître élastique.",
            "action": "Réfrigérer pendant 1 heure. Le gluten doit se détendre ou la pâtisserie se rétrécira considérablement dans l'étain."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir presque émiettée dans vos mains — appuyez fermement sur une pièce et elle tient, mais elle n'a ni donne ni élasticité. Il est frais, légèrement texturé, et tient sa forme sans coller à vos paumes."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "pastry_dough"
      ],
      "outputState": "rested_pastry",
      "instructions": "Envelopper le disque fermement dans un film de collage et réfrigérer pendant au moins 45 minutes, ou jusqu'à 3 jours. Ce repos permet au gluten de se détendre (de sorte qu'il ne rétrécit pas au four) et au beurre de se raffermir à nouveau (de sorte qu'il reste en couches distinctes). Retirer du réfrigérateur 5-10 minutes avant de rouler si très dur.",
      "visualCue": {
        "primaryTarget": "Un disque de pâte ferme et froid qui tient sa forme lorsqu'il est pressé et ne montre aucun signe de la fonte du beurre ou du réchauffement de la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore souple et légèrement chaude à cause de la manipulation. Rouler maintenant va provoquer un rétrécissement.",
            "action": "Réfrigérer au minimum 45 minutes."
          },
          {
            "state": "Perfect",
            "description": "Ferme, froid et légèrement résistant au pressage. Le beurre est re-solidifié dans l'ensemble.",
            "action": "Verser sur une surface légèrement farinée à 3–4 mm d'épaisseur."
          },
          {
            "state": "Overdone",
            "description": "La pâte est très dure et craque aux bords lorsqu'elle est pressée — elle a été réfrigérée trop longtemps ou est trop froide.",
            "action": "Laisser adoucir à température ambiante pendant 5-10 minutes avant de rouler."
          }
        ]
      },
      "feelCue": "Un pâte brisée bien reposé ressemble à de la plastine froide, ferme mais gérable, sans collants et sans élasticité en cas de pression."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "rested_pastry"
      ],
      "outputState": "blind_baked_pate_brisee",
      "instructions": "Rouler la pâte reposée sur une surface légèrement farinée à 3–4 mm d'épaisseur. Lignez une boîte de tarte de 23 cm, appuyez doucement dans les coins. Couper le bord et piquer légèrement la base avec une fourchette. Congeler pendant 15 minutes. Ligner de parchemin et remplir de haricots ou de riz. Cuire à 180 °C pendant 15 à 18 minutes, retirer les haricots, brosser la base avec un peu d'oeuf battu et revenir pendant 5 à 8 minutes jusqu'à ce que la base soit sèche et dorée. Le lavage des oeufs scelle la pâtisserie contre les remplissages humides.",
      "visualCue": {
        "primaryTarget": "Une coquille sèche, uniformément pâle-or qui libère proprement de l'étain et ne montre pas de taches grises humides. La base est ferme et sonne creuse lorsqu'elle est tapée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base reste pâle et douce – grise ou translucide. Flexe lorsqu'il est pressé.",
            "action": "Retourner au four sans les haricots jusqu'à ce qu'ils soient complètement séchés. Une base humide ruine la tarte."
          },
          {
            "state": "Perfect",
            "description": "Or pâle, sec, ferme. Les côtés sont légèrement colorés. Un robinet creux sur la base. La base est lavée à l'oeuf.",
            "action": "Remplir avec le remplissage désiré et terminer la cuisson, ou laisser refroidir et remplir avec un remplissage sans cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les bords et la base sont profondément dorés, s'approchant du biscuit brun. La pâtisserie sent la noix.",
            "action": "Toujours excellent. Une coquille légèrement plus foncée ajoute une saveur qui complète la plupart des garnitures."
          }
        ]
      },
      "feelCue": "Soulevez la coquille – elle doit se sentir croustillante et rigide, sans flexion douce à la base. Les côtés et la base doivent être uniformes en couleur et en température, et non pâles et froides au centre."
    }
  ]
};
