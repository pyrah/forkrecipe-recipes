export default {
  "repoId": "master_mexican_alpastor_001",
  "parentRepoId": null,
  "slug": "al-pastor",
  "author": "ForkRecipe Kitchen",
  "title": "Al Pastor",
  "description": "L'épaule de porc fine marinée dans une pâte de chilis séchés, d'achiote et d'ananas – sucrée, fumée, tannante et fervente. Traditionnellement sculptée à partir d'une crache de tropo ; également spectaculaire rasée sous un grilleur.",
  "cuisine": "Mexicain",
  "culture": "Produits alimentaires de la rue Mexico",
  "category": "proteins",
  "tags": [
    "tacos",
    "porc",
    "Mexique",
    "Produits de la rue",
    "Chili",
    "Achiote",
    "ananas",
    "grillé"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "6 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc, coupée en tranches de 5 mm",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "longe de porc (plus maigre, moins clémente)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Chilies de guajillo séchées, tiges et graines enlevées",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "Piments de Californie séchés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Chili ancho séché, tige et graines enlevées",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "Mulato chili séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Pâte d'achiote (recado rojo)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Morceaux d'ananas frais",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "ananas en conserve dans le jus (pas le sirop)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Origan mexicain séché",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Marjoram séché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "toasted_chilies",
      "instructions": "Le guajillo et les anchos s'ouvrent et enlèvent toutes les graines et les veines. Chauffer une poêle en comal sec ou en fonte à feu moyen jusqu'à très chaud. Appuyez sur chaque plat de chili avec une spatule et toast pendant 20 à 30 secondes de chaque côté — jusqu'à ce que parfumé et souple, avec quelques petites taches foncées. Ne les laissez pas noircir, ou toute la marinade goûtera aux cendres. Transférer immédiatement dans un bol et couvrir d'eau simplement bouillie. Peignez-les avec une petite assiette et trempez pendant 20 minutes jusqu'à ce qu'ils soient complètement doux et productifs.",
      "visualCue": {
        "primaryTarget": "Les piments sont souples et doux après trempe, avec une couleur rouge brique profonde et un parfum complexe de chili séché - fruité, fumé, terreux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chiles sont toujours raides et craquent lorsqu'ils sont courbés après trempe. L'eau de trempe est à peine teintée.",
            "action": "Tremper encore 10 minutes. S'ils restent raides, l'eau de trempe n'était pas assez chaude — égoutter et recouvrir avec de l'eau bouillante fraîche."
          },
          {
            "state": "Perfect",
            "description": "Les piments sont souples et plissés sans craquelure. Couleur acajou profonde quand tenue à la lumière. L'eau qui sème est un rouge foncé riche.",
            "action": "Égoutter, réserver 60 ml d'eau pour le mélange."
          },
          {
            "state": "Overdone",
            "description": "Les chilies sont noircies et carbonisées sur le comal — le trempage ne le réparera pas.",
            "action": "Jetez et recommencez. Même un petit nombre de chilis gravement brûlés feront de la marinade acride. Goûtez l'eau qui trempe — si elle est amère, jetez-la."
          }
        ]
      },
      "feelCue": "Pressez un chili trempé entre vos doigts – il devrait se sentir doux et humide, donnant complètement sans raideur sur la peau. L'eau trempe immédiatement et sent les fruits secs et la terre."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_chilies",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "pastor_marinade",
      "instructions": "Égoutter les piments, réserver 60 ml d'eau de trempe. Mélanger les piments trempés, la pâte à achiote, l'ananas, l'oignon, l'ail, le vinaigre, l'origan, le cumin, le sel et l'huile dans un mélangeur. Ajouter l'eau de trempage réservée. Mélanger en haut pendant 2 à 3 minutes jusqu'à ce qu'il soit complètement lisse — il ne doit pas y avoir de peau ou de fibre de chili visible. Goûtez et ajustez : il doit être profondément fumé, légèrement tanné par le vinaigre et l'ananas, agréablement épicé, et le sel doit être à l'avant de votre langue. Si le mélange est trop épais, ajouter une cuillère à soupe à la fois.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge-orange lisse et profonde avec une consistance légèrement plus épaisse que le ketchup. Pas de fragments de peau ou de graines visibles. La couleur est un rouge brique vif de l'achiote et des piments.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est chunky avec des morceaux de peau de chili visible et des graines. La texture est grossière et fibreuse.",
            "action": "Mélanger pour plus longtemps et filtrer à travers un tamis à mailles moyennes si le mélangeur ne peut pas lisser complètement les peaux."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse et soyeuse, de couleur profonde. Enrober une cuillère et tomber dans un ruban lent et épais. Sens de chili, d'achiote, d'ananas et de vinaigre.",
            "action": "Goûtez critiquement — ajustez le sel, le vinaigre ou l'ananas. Alors enrobez le porc."
          },
          {
            "state": "Overdone",
            "description": "La marinade est trop fine ou trop aqueuse — trop d'eau imbibée.",
            "action": "Réduire dans une petite casserole à feu moyen pendant 5 minutes, en remuant constamment, jusqu'à ce qu'elle épaississe à nouveau en pâte."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre les doigts — il devrait se sentir lisse et légèrement lissé de l'huile, sans particules de chili gritty. La couleur va tacher vos doigts rouge-orange foncé immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "pastor_marinade"
      ],
      "outputState": "marinated_pork",
      "instructions": "Placez l'épaule de porc mincement tranchée dans un grand bol ou un sac à fermeture éclair. Verser toute la marinade sur le porc et jeter soigneusement jusqu'à ce que chaque surface soit uniformément enrobée dans la pâte rouge profonde. Les enzymes de l'ananas (bromélaine) vont commencer à tendrer la viande presque immédiatement — c'est pourquoi le temps de marinage ne devrait pas dépasser 8 heures ou la surface du porc deviendra musquée. Couvrir et réfrigérer pendant au moins 4 heures, idéalement pendant la nuit (mais pas plus de 8 heures pour l'épaule mince).",
      "visualCue": {
        "primaryTarget": "Chaque morceau de porc est uniformément recouvert de pâte rouge-orange profonde. Pas de viande grise visible. Le porc sent le chili, l'achiote et l'ananas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Porc gris pâle visible à travers de fines taches de marinade. Certaines tranches sont à peine enrobées.",
            "action": "Renouveler plus agressivement et faire en sorte que toutes les surfaces soient couvertes. Ajouter 1 à 2 cuillères à soupe d'eau si la pâte est trop épaisse pour être distribuée uniformément."
          },
          {
            "state": "Perfect",
            "description": "Revêtement rouge-orange uniforme sur chaque tranche. Après 4 heures et plus, la surface du porc a pris une texture légèrement plus ferme et tackier de la marination.",
            "action": "Retirer du réfrigérateur 30 minutes avant la cuisson pour enlever le froid."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 10 heures : la surface du porc est musquée et se brise lorsqu'elle est manipulée. Ça sent peu la viande sur-tendrée.",
            "action": "Cuire immédiatement — ne pas mariner plus longtemps. La saveur sera encore excellente même si la texture est légèrement douce."
          }
        ]
      },
      "feelCue": "Après 4 heures, ramassez une tranche de porc mariné — il devrait se sentir légèrement plus ferme à la surface que le porc cru, croustillant avec la marinade, et la couleur devrait avoir pénétré un millimètre ou deux dans la chair aux bords coupés."
    },
    {
      "nodeId": "step_4",
      "action": "Grille",
      "inputs": [
        "marinated_pork"
      ],
      "outputState": "al_pastor",
      "instructions": "Placez le support de four à la position la plus haute et placez le grilleur à sa position la plus élevée. Étaler une plaque de cuisson lourde avec du papier. Disposer les tranches de porc marinées en une seule couche — elles peuvent se chevaucher légèrement. Faire griller pendant 4 à 5 minutes jusqu'à ce que la surface supérieure soit caramélisée, cloquée en place et que les bords commencent à s'ombrager. Flip chaque tranche et griller encore 2 à 3 minutes. Retirer et raser ou hacher en petits morceaux pour les tacos. Traditionnellement, les morceaux caramélisés légèrement carbonisés (les chicharitas du tropo) sont la meilleure partie — ne pas éviter l'omble.",
      "visualCue": {
        "primaryTarget": "Tranches de porc avec des surfaces profondément caramélisées et blisters — rouge acajou foncé aux bords noirs carbonisés. Les sucres d'achiote et d'ananas sont caramélisés dans un glaçage collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est cuit mais pâle, sans caramélisation. La marinade n'a pas été cloquée. Il manque la saveur du pasteur.",
            "action": "Déplacez la grille plus près de l'élément de grille et donnez encore 2 minutes. Al pasteur vit et meurt à la surface."
          },
          {
            "state": "Perfect",
            "description": "Porc foncé, laqué, blister aux bords croustillants. La cuisine sent intensément le chili carbonisé, l'ananas caramélisé et la fumée. Les jus sur la feuille sont étourdissants.",
            "action": "Reposez-vous 2 minutes, puis rasez mince ou hachez et chargez-les dans des tortillas chaudes de maïs avec de l'oignon cru, de la coriandre et de l'ananas."
          },
          {
            "state": "Overdone",
            "description": "Le porc est entièrement noir et carbonisé des deux côtés. Les fines tranches ont complètement séché.",
            "action": "Sauvez tout ce qui n'est pas entièrement carbonisé. Les tranches plus épaisses sont particulièrement vulnérables — vérifiez toutes les 2 minutes sous une grille haute."
          }
        ]
      },
      "feelCue": "Les tranches cuites doivent étourdir légèrement lorsqu'elles sont placées sur la planche à découper et se sentir fermes, mais céder au couteau — non cuireux ou sec. Les bords de marinade caramélisés doivent être cassants et se casser lorsque vous cassez un morceau en deux."
    }
  ]
};
