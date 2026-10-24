export default {
  "repoId": "master_french_creole_beignets_001",
  "parentRepoId": null,
  "slug": "beignets",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Nouvelle-Orléans Beignets",
  "description": "Des carrés d'oreillers de pâte frite à levures qui bouffent et creusent dans l'huile chaude, leur fine croûte fraichement fragile sous une tempête de neige de sucre en poudre qui enveloppe vos lèvres et poussière votre chemise — l'expérience essentielle du Café du Monde.",
  "cuisine": "Créole français",
  "culture": "Nouvelle-Orléans",
  "category": "desserts",
  "tags": [
    "nouveaux-orléens",
    "français-créole",
    "frits",
    "levure-dough",
    "Sucre en poudre",
    "Produits de la rue",
    "brunch"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (ou tout usage)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Lait entier chaud (38 C)",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": [
        "lait évaporé pour pâte plus riche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Oeufs (gros, battus)",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre pour friture (végétable)",
      "ratioValue": 200,
      "defaultUnit": "%",
      "substitutions": [
        "Saindoux pour saveur authentique"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Sucre écrémé (sucre pulvérisé)",
      "ratioValue": 30,
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
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "beignet_dough",
      "instructions": "Mélanger tous les ingrédients dans un bol de mélangeur. Mélanger à feu doux avec un crochet de pâte pendant 2 minutes, puis augmenter à moyen et pétrir pendant 6-8 minutes. La pâte sera douce, légèrement collante et lisse, plus douce que la pâte à pizza et juste assez ferme pour tenir sa forme sans s'étendre. Ne pas ajouter de farine supplémentaire; la douceur est ce qui crée la bouffée aérée et creuse dans la friteuse.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante, légèrement collante qui s'accroche au crochet mais qui nettoie les côtés du bol. Doux comme un oreiller — pas raide, pas assez collant pour enrober vos doigts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface dure et inégale avec taches sèches. Larmes dures plutôt que de s'étirer en tirant.",
            "action": "Continuer à mélanger pendant 3 minutes. Le gluten a besoin de développement pour créer la structure qui souffle dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse et satinée avec une qualité délicate. S'étire dans une membrane mince sans déchirer quand une pièce est tirée mince.",
            "action": "Couvrir et étaler dans un endroit chaud pendant 1-1,5 heures, ou réfrigérer pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "La toux est très serrée et élastique, en ressortant agressivement lorsqu'elle est pressée.",
            "action": "Repose la pâte pendant 20 minutes avant de prouver — le gluten surmené doit se détendre."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la pâte d'un doigt — elle devrait revenir lentement aux trois quarts du chemin et laisser un léger tiret. C'est comme presser un oreiller très ferme et aéré."
    },
    {
      "nodeId": "step_2",
      "action": "Preuve",
      "inputs": [
        "beignet_dough"
      ],
      "outputState": "proofed_dough",
      "instructions": "Transférer la pâte dans un bol légèrement huilé, couvrir de film de collage, et la preuve à température ambiante (25-28 C) pendant 1-1,5 heures, jusqu'à ce que la taille double. Alternativement, réfrigérer la nuit pour une preuve plus lente et plus aromatisée — le froid rend aussi la pâte plus facile à rouler et à couper proprement. En cas de réfrigération, retirer 30 minutes avant de frire pour enlever le froid.",
      "visualCue": {
        "primaryTarget": "Toux qui a visiblement doublé, est bombée en haut, et gigole doucement quand le bol est tapé. La surface est lisse et pétillante sous le film de collage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux a à peine grandi. Encore dense et plat. La presser ne laisse pas un tiret de récupération lente.",
            "action": "Passez à un endroit plus chaud et laissez plus de temps. Les conditions froides ou d'étirage ralentissent significativement la levure."
          },
          {
            "state": "Perfect",
            "description": "Clairement doublé. La surface est bombée, lisse et légèrement bouillie. Un doigt fariné pressé 2 cm dans la pâte laisse un tiret qui se remplit lentement sur 5-8 secondes.",
            "action": "Rouler et couper immédiatement, ou réfrigérer en faisant la nuit."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est effondrée ou la surface a une odeur aigre et de grandes bulles irrégulières. Surpropriété.",
            "action": "Déformer doucement, former une boule et laisser reposer 30 minutes. Les beignets seront légèrement plus denses, mais feront encore bien frire."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt fariné de 2 cm dans la pâte étagée — il devrait se remplir avec une récupération lente et paresseuse pendant 5-7 secondes. S'il revient immédiatement, il a besoin de plus de temps; si le tiret reste et ne se rétablit pas du tout, il a surprotégée."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "proofed_dough"
      ],
      "outputState": "cut_beignets",
      "instructions": "Sur une surface légèrement farinée, rouler la pâte éprouvée à 6 mm d'épaisseur, légèrement plus épaisse que vous ne pouvez vous attendre. Couper en carrés de 6 x 6 cm à l'aide d'un couteau tranchant ou d'un couteau à pâtisserie. Les bords doivent être propres et non traînés. Poser les carrés coupés sur un plateau légèrement fariné et couvrir de façon souple avec du film de collage. Laisser reposer 15 minutes avant la friture — ce second repos empêche la ténacité et encourage la bouffée initiale.",
      "visualCue": {
        "primaryTarget": "Des carrés uniformes de 6 cm, 6 mm d'épaisseur, avec des bords propres. La pâte doit encore avoir l'air légèrement gonflée par la preuve, pas plate et comprimée par le laminage lourd.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les carrés sont de taille et d'épaisseur inégales. Les bords sont déchirés plutôt que propres.",
            "action": "Rouler plus uniformément et utiliser un outil tranchant pour couper. Les bords de la torche vont frire inégalement."
          },
          {
            "state": "Perfect",
            "description": "Même les carrés avec des bords nets et propres et une épaisseur uniforme de 6 mm. Toujours légèrement aéré de la preuve.",
            "action": "Repos couvert pendant 15 minutes, puis frit immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La toux a été roulée trop mince — les carrés sont inférieurs à 4 mm et semblent translucides.",
            "action": "Rassemblez la pâte, re-ballez doucement, reposez-vous pendant 10 minutes et reroulez à 6 mm. Les petits beignets seront croquants, pas creux."
          }
        ]
      },
      "feelCue": "Prenez un carré coupé — il devrait se sentir léger et légèrement aéré dans votre main, presque comme ramasser un épais guimauve. S'il se sent dense et lourd comme un morceau d'argile, la pâte peut avoir besoin de plus de temps d'épreuve."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "cut_beignets",
        "ing_08"
      ],
      "outputState": "fried_beignets",
      "instructions": "Chauffer l'huile à 175 °C (350 °F) dans un pot large et lourd — profondeur minimale de 8 cm. Fry 3-4 beignets à la fois; ne pas fouler. Faites-les glisser doucement. Dans les 30 secondes, ils devraient commencer à souffler et à flotter. Fry 90 secondes de chaque côté, retourner une fois. Le béignet devrait souffler considérablement creux, comme un petit oreiller gonflé de l'intérieur. Temps total de cuisson : 3 minutes. Égoutter sur un support, pas sur du papier.",
      "visualCue": {
        "primaryTarget": "Des carrés d'or et d'ambre qui sont nettement creux — considérablement gonflés, pas plats. Même couleur partout avec des plis légèrement plus foncés où la surface du carré plié pendant qu'il soufflait.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle. N'a pas gonflé complètement ou est encore dense dans certaines régions. Douce et pâteuse lorsqu'elle est pressée doucement.",
            "action": "Continuez à frire. Un béignet pâle est sous-cuit, il doit atteindre l'ambre pour cuire à travers le centre creux."
          },
          {
            "state": "Perfect",
            "description": "De l'ambre d'or profond partout. Dramatiquement gonflé et creux — le pressurage se traduit par une légère croûte. L'intérieur est léger et aéré avec des parois de pâte minimales.",
            "action": "Égoutter 20 secondes sur la grille, puis se doucher immédiatement avec du sucre glaçant."
          },
          {
            "state": "Overdone",
            "description": "Ambre sombre s'approchant du brun. La surface est dure plutôt que délicatement croquante. L'intérieur peut être très sec.",
            "action": "Réduire la température de l'huile de 5-10 C pour le prochain lot. Servir immédiatement avec du sucre très généreux — il aide."
          }
        ]
      },
      "feelCue": "Pressez un béignet frit chaud doucement entre vos doigts – vous devriez sentir l'intérieur creux donner légèrement et ressorter en arrière, comme serrer un ballon gonflé. Une sensation dense et lourde signifie que la pâte n'a pas soufflé comme il se doit."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "fried_beignets",
        "ing_09"
      ],
      "outputState": "finished_beignets",
      "instructions": "Transférer les beignets chauds dans une plaque doublée d'un rack. À l'aide d'un tamis à mailles fines, douchez une quantité extravagante de sucre glace sur chaque bignet à partir d'une hauteur de 20 cm pour une couverture et une dérive maximales. Le sucre doit atterrir sur la surface chaude — il adhère et se dissout partiellement, créant la signature croûte blanche opaque. Servir en 5 minutes, tandis que l'extérieur est encore croquant. Traditionnellement servi trois par commande, avec café au lait.",
      "visualCue": {
        "primaryTarget": "Beignets recouverts de sucre glace blanc épais — si soigneusement recouvert que presque aucune de la pâte d'or n'est visible en dessous. Une esthétique de chutes de neige à texture fine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couverture mince et inégale — la pâte dorée apparaît en grandes parcelles. Le sucre semble maigre et inégal.",
            "action": "Sieve plus de sucre de plus grande hauteur. La générosité est obligatoire — les béignets sont censés être ensevelis en blanc."
          },
          {
            "state": "Perfect",
            "description": "Couverture blanche épaisse et opaque sur chaque surface. Certains sucres dérivent sur l'assiette comme de la neige fraîche. Les beignets ressemblent à des oreillers en poudre.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Une telle couche de sucre profonde qu'elle s'écrase, se mouille et tombe en morceaux.",
            "action": "Il s'agit rarement d'un problème dans la pratique: poussière et service, l'excès s'éloigne naturellement."
          }
        ]
      },
      "feelCue": "Prenez un béignet et inhalez près du sucre — vous devriez sentir l'odeur chaude et sucrée de la vanille de sucre glace mélangé avec la pâte de levure chaude en dessous. Bite : le sucre cède la place à un léger croûte de croûte, puis l'intérieur est presque vide d'air, comme mordre un nuage très léger et chaud."
    }
  ]
};
