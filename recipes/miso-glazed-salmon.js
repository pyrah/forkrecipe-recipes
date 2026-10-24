export default {
  "repoId": "master_japanese_miso_glazed_salmon_001",
  "parentRepoId": null,
  "slug": "miso-glazed-salmon",
  "author": "ForkRecipe Kitchen",
  "title": "Saumon miso-glacé",
  "description": "Filets de saumon marinés en miso blanc, mirin et saké, puis grillés jusqu'à ce que la glaçure caramélise une laque brûlée et l'intérieur flocons en couches riches et lustrées.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "saumon",
    "Japonais",
    "miso",
    "glacé",
    "Produits de la mer",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de saumon sur la peau (coupés au centre, 4 cm d'épaisseur)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "cabillaud noir (sablefish)",
        "Mahi-mahi"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Shiro miso blanc",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "C'est une erreur."
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Saké + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Verts de pétoncle tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de sésame grillées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "miso_marinade",
      "instructions": "Frottez le miso blanc, le mirin, le saké et le sucre jusqu'à ce qu'ils soient complètement lisses et que le sucre soit dissous. La marinade doit être une pâte de caramel pâle qui coule comme du miel épais. Goûtez-le: il devrait être intensément salé et doux, avec la faible piqûre d'alcool — le saké et le mirin emporteront les notes supérieures volatiles comme les broches de poisson, laissant le miso caramélisé et parfumé.",
      "visualCue": {
        "primaryTarget": "Une pâte uniforme, brillante, pâle-ambre sans morceaux de miso non dissous. Il coule dans un ruban lent et épais du fouet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumpy avec des taches de miso non mélangé; le sucre est gritty au fond.",
            "action": "Continuez à fouetter et ajoutez quelques gouttes de saké supplémentaire pour aider la pâte desserrer et le sucre dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, brillant, uniformément ambre — le fouet laisse un bref sentier. L'odeur est douce, levure et riche en umami.",
            "action": "Verser les filets de saumon et faire mariner."
          },
          {
            "state": "Overdone",
            "description": "Fini à un liquide aqueux — trop de saké ajouté. La marinade s'échappera du poisson sans y adhérer.",
            "action": "fouetter dans un peu plus miso pour l'épaissir de nouveau à une consistance de revêtement."
          }
        ]
      },
      "feelCue": "La marinade doit s'accrocher au fouet plutôt que de s'égoutter librement — quelque part entre la crème lourde et le beurre d'arachide lisse dans le corps."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "miso_marinade",
        "ing_06"
      ],
      "outputState": "marinated_salmon",
      "instructions": "Assaisonner légèrement le saumon de sel, puis enrober chaque filet de tous les côtés de la marinade miso. Placer dans un plat peu profond ou un sac à fermeture éclair, en veillant à ce que la marinade contacte toutes les surfaces. Réfrigérer pendant au moins 1 heure et jusqu'à 24 heures — plus le reste est long, plus la pénétration savoureuse est profonde et plus la croûte caramélisée est intense. Essuyez l'excès de marinade avant de griller; toute couche épaisse brûlera avant que le poisson cuisine.",
      "visualCue": {
        "primaryTarget": "Filets uniformément revêtus d'un voile ambre pâle — pas de taches nues, pas de touffes épaisses. Après le repos, la surface est légèrement collante et la marinade s'est serrée là où elle touche la chair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est mince et généralement dégouttée; le poisson semble pâle et à peine coloré.",
            "action": "Replacez la marinade en piscine sur le poisson et retournez au réfrigérateur pour un repos plus long."
          },
          {
            "state": "Perfect",
            "description": "Un manteau uniforme, teinté d'ambre, qui s'accroche fermement. La chair a pris une texture légèrement plus ferme aux bords du sel et des enzymes.",
            "action": "Essuyer l'excédent avec un doigt ou une serviette en papier, puis griller immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Mariné au-delà de 36 heures : la chair a l'air grise et musquée à la surface, la texture décomposée par le sel et les enzymes miso.",
            "action": "Essuyer la surface propre, cuire rapidement et garder un œil plus proche sur la texture pendant la cuisson. La saveur sera encore bonne."
          }
        ]
      },
      "feelCue": "Les filets enduits doivent se sentir légèrement collants au toucher, la marinade grippant votre bout de doigt avant de relâcher — c'est ce qui liera la glaçure au poisson sous la chaleur du poulet."
    },
    {
      "nodeId": "step_3",
      "action": "Broil",
      "inputs": [
        "marinated_salmon"
      ],
      "outputState": "glazed_broiled_salmon",
      "instructions": "Placer un support de four à environ 15 cm de l'élément de grille et préchauffer l'élément de grille au maximum. Disposer une plaque de cuisson avec du papier et l'huiler légèrement. Essuyez l'excès de marinade du saumon, déposez la peau vers le bas et faites griller de 8 à 12 minutes selon l'épaisseur. Attention en continu : les méso sucres passent de l'or à la combustion en moins d'une minute à cette chaleur. La peau doit croquer et la glaçure doit buller, bronze, et développer des taches foncées caramélisées aux bords.",
      "visualCue": {
        "primaryTarget": "Une surface laquée d'acajou profonde avec des taches caramélisées foncées aux bords, le centre un or ambré brûlé. La peau est croquante et légèrement carbonisée. La chair en dessous est passée de translucide à à peine opaque au centre même.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est jaune pâle, pas de caramélisation, la glaçure semble humide et à la vapeur plutôt que bronzée. La chair est douce et translucide au centre.",
            "action": "Continuez à pousser, à regarder toutes les 30 secondes — le brunissement s'accélère rapidement une fois la surface sèche."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'acajou profonde et brulée aux bords foncés concentrés, l'intérieur devient opaque et s'évanouit sous une légère pression d'une fourchette. La peau croustille et tire légèrement de la chair.",
            "action": "Transférer immédiatement dans les assiettes; le poisson continue à cuire brièvement hors de la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Surface noire et acride-smelling; les sucres miso ont brûlé la caramélisation passée au carbone. La chair est crayeuse et sèche en dessous.",
            "action": "Enlevez les morceaux complètement carbonisés; les poissons en dessous peuvent encore être récupérés mais seront secs. La prochaine fois, essuyer l'excès de marinade plus soigneusement et regarder le grille-lait constamment."
          }
        ]
      },
      "feelCue": "Prod la partie la plus épaisse avec l'extrémité de votre doigt : le saumon parfaitement cuit donne et commence juste à se séparer en flocons, avec la résistance la plus faible au centre – pas solide de roche (surcuite) et pas glissant donner (brut)."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "glazed_broiled_salmon",
        "ing_07"
      ],
      "outputState": "finished_miso_salmon",
      "instructions": "Faites glisser les filets sur des plaques chaudes en utilisant une spatule mince. La peau peut s'accrocher à la feuille — utilisez la spatule pour la séparer proprement. Éparpiller les verts de pétoncle mincement tranchés sur le dessus. Servir immédiatement avec du riz à grains courts à la vapeur et un petit monticule de gingembre mariné ou un coin de sudachi si disponible.",
      "visualCue": {
        "primaryTarget": "Un filet ambré laqué et profond contraste avec des rubans de pétoncle vert vif. La glaçure brille sous la lumière. Pressée d'une fourchette, la chair se sépare en flocons riches et lustres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces de chair révèlent de grandes sections vitrées, translucides — l'intérieur est brut.",
            "action": "Retourner au four (et non au four) à 180 °C / 350 °F pendant 2 à 3 minutes pour finir doucement sans brûler la glaçure plus loin."
          },
          {
            "state": "Perfect",
            "description": "Les flocons se séparent proprement en grandes couches d'ivoire-rose humides. La glaçure est brillante, collante et parfumée — douce, salée et fumée de la caramélisation.",
            "action": "Servir à la fois — la glaçure se sert et perd son éclat en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "La chair s'écroule en morceaux secs à grains fins avec de l'albumine blanche pressée ; la couleur est devenue pâle et crayeuse.",
            "action": "Flake le poisson et servir sur le riz avec un bouillon miso chaud supplémentaire pour compenser la perte d'humidité."
          }
        ]
      },
      "feelCue": "Le filet fini devrait offrir presque aucune résistance à une fourche — les flocons devraient se relâcher avec un coup doux, chacun scintille avec sa propre graisse. Si vous devez pousser, il est allé trop loin."
    }
  ]
};
