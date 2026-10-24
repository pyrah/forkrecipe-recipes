export default {
  "repoId": "master_shanghainese_xiao_long_bao_001",
  "parentRepoId": null,
  "slug": "xiao-long-bao",
  "author": "ForkRecipe Kitchen",
  "title": "Xiao Long Bao ()",
  "description": "De minces boulettes plissées câlinent une garniture de porc et de gingembre suspendue à l'aspic qui fond à la soupe pendant la vapeur — la peau est tellement translucide que vous pouvez voir le changement de remplissage lorsque vous le soulevez du bambou, et mordre trop avidement vous coûtera.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "proteins",
  "tags": [
    "boulettes",
    "porc",
    "shanghainese",
    "vapeur",
    "Bouchons à soupe",
    "aspic",
    "dim-sum"
  ],
  "difficulty": 5,
  "activeTime": "3 hr",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 2340,
  "forks": 312,
  "contributors": 74,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-02-01",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau bouillante (pour pâte échaudée)",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Porc haché (30% de matières grasses)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Peau de porc aspice (dong), réfrigérée jusqu'à ce que ferme",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "gélatine en poudre dissoute dans un bon stock de porc, réfrigérée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons (oignons de printemps), finement hachés",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel, sucre, poivre blanc",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_04"
      ],
      "outputState": "pork_aspic",
      "instructions": "Si vous faites à partir de rayure : faire mijoter la peau de porc (ou les trotters) avec de l'eau, du gingembre et de l'échon pendant 2 à 3 heures. Tente, assaisonner et verser le liquide dans un plateau plat pour le mettre au réfrigérateur pendant au moins 2 heures jusqu'à ce qu'il soit complètement ferme. Le gel doit être assez solide pour dés. Couper en cubes de 1 cm si nécessaire pour le remplissage. Si vous utilisez de la gélatine : fleurir, dissoudre dans le stock de porc chaud, assaisonner, verser dans un plateau et réfrigérer jusqu'à ce que ferme.",
      "visualCue": {
        "primaryTarget": "L'aspic après le froid — sa fermeté et sa translucidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aspic est toujours jigly et collant, ne tenant pas une coupe propre — gélatine insuffisante ou temps de refroidissement insuffisant.",
            "action": "Retourner au réfrigérateur pendant une autre heure; il doit être suffisamment ferme pour tenir les cubes en dés."
          },
          {
            "state": "Perfect",
            "description": "Gel complètement ferme, légèrement translucide, qui tient un dés propre lors de la coupe. Sens de porc riche avec une note de gingembre propre. Ne colle pas au couteau.",
            "action": "Couper en cubes de 1 cm et réfrigérer jusqu'à ce que le remplissage soit prêt."
          },
          {
            "state": "Overdone",
            "description": "Aspic est si raide qu'il résiste au couteau et la texture à l'intérieur est gommée plutôt que propre.",
            "action": "Il fondra encore pendant la vapeur — continuez. Un peu plus raide aspic prend juste 30 secondes de plus pour liquéfier."
          }
        ]
      },
      "feelCue": "Un aspic ferme devrait se sentir comme un Jell-O très ferme — appuyez sur un bout de doigt et il ressort complètement sans laisser une dépression, une surface propre et tendue."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "seasoned_pork_filling",
      "instructions": "Mélanger le porc haché, le gingembre haché, les oignons verts, la sauce soja, le vin Shaoxing, le sel, le sucre, le poivre blanc et l'huile de sésame dans un bol. À l'aide de baguettes ou de votre main, remuer et plier dans un seul sens pendant 3 à 4 minutes jusqu'à ce que le mélange devienne collant et cohésif — les brins de protéines s'alignent. Ne pas trop mélanger ou le remplissage devient dense. Réfrigérer 30 minutes.",
      "visualCue": {
        "primaryTarget": "Le remplissage — sa cohésion lorsqu'il est soulevé sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est lâche et s'effondre lorsqu'il est écopé — pas assez de mélange pour développer les liaisons protéiques.",
            "action": "Continuer à remuer dans une direction pendant 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le remplissage est cohérent et printanier — lorsqu'il est écopé d'une cuillère, il se tient dans un monticule plutôt que de s'effondrer. Lorsqu'il est agité, il résiste comme de l'argile épaisse. La surface semble légèrement brillante par extraction de protéines.",
            "action": "Réfrigérer pendant la préparation de la pâte. Ajouter les cubes aspic juste avant l'emballage."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été surmené et est très rigide et pâteux – le résultat cuit sera dense.",
            "action": "Continuez — l'aspic ajoutera de la jutosité au remplissage pendant la vapeur."
          }
        ]
      },
      "feelCue": "Le remplissage de longue bao xiao bien mélangé devrait se sentir comme de l'argile de modélisation très épaisse et collante lorsqu'elle est pressée dans la paume — dense et unifiée, pas émiettée, pas pâteuse."
    },
    {
      "nodeId": "step_3",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "xlb_dough",
      "instructions": "Verser progressivement l'eau bouillante sur la farine en remuant rapidement avec une fourchette ou des baguettes. Une fois assez frais pour manipuler (environ 2 minutes), pétrir à la main de 8 à 10 minutes jusqu'à ce que la pâte soit lisse, élastique et légèrement collante mais non collante. L'eau chaude gélatinise l'amidon, rendant la pâte suffisamment extensible pour rouler le papier-mince sans déchirer. Couvrir et reposer 30 minutes.",
      "visualCue": {
        "primaryTarget": "La surface de la pâte — sa douceur et sa réponse à la pression.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore rugueuse et légèrement bosselée avec des coutures sèches visibles où la farine n'est pas complètement hydratée.",
            "action": "Continuer le pétrissage; la surface rugueuse se lissera dans 5 minutes de plus de travail."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, surface mate sans larmes ni arêtes. La pâte ressort lentement lorsqu'elle est cuite et peut être étirée de quelques centimètres sans déchirer.",
            "action": "Couvrir d'enveloppe plastique et reposer pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "La touffe a été pétrie trop vigoureusement et se sent élastique et caoutchouteuse — elle se renverse lorsqu'elle est étirée au lieu de céder.",
            "action": "Reposez-vous 30 minutes — le gluten a besoin de temps pour se détendre avant qu'il puisse être roulé mince."
          }
        ]
      },
      "feelCue": "Bien pétrir la pâte xlb doit se sentir comme chaud Play-Doh - lisse, souple, dense mais pas raide. Appuyez sur le pouce et il devrait retenir l'impression sans retomber immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "xlb_dough",
        "seasoned_pork_filling",
        "pork_aspic"
      ],
      "outputState": "wrapped_xlb",
      "instructions": "Divisez la pâte en petits morceaux (environ 10 g chacun). Rouler chaque pièce dans un disque mince de 8 à 9 cm de diamètre — plus mince aux bords, légèrement plus épais au centre pour résister au poids de la soupe. Placez 1 c. à thé de garniture de porc au centre avec 2-3 cubes aspic. Pliez les bords avec 18–22 plis, torsion et pincement du dessus fermé. Le nombre de plis n'est pas vanité — plus de plis signifie un joint plus serré et moins de perte de soupe.",
      "visualCue": {
        "primaryTarget": "La couronne plissée du bouleau — la torsion et l'étanchéité du joint.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 8 à 10 plis, la couronne est une pince rugueuse plutôt qu'une torsion. Le phoque se brisera probablement pendant la vapeur, libérant la soupe.",
            "action": "Pratiquez la motion de plaidoyer avant de remplir; même les plis irréguliers sont meilleurs que trop peu."
          },
          {
            "state": "Perfect",
            "description": "18+ plis réguliers, uniformément espacés, torsion à une couronne serrée et sécurisée sans trous. Le boulet se tient sur sa base sans l'ouverture de la couronne. La peau est assez mince pour voir le remplissage faible.",
            "action": "Placer sur le panier à vapeur parcheminé et procéder immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le pliage a pris trop de temps et la peau s'est réchauffée et étirée — il peut être trop mince dans les endroits et l'aspic fond dans le remplissage.",
            "action": "Steam immédiatement et travailler plus rapidement prochain lot; garder les boulettes emballées froides tout en travaillant."
          }
        ]
      },
      "feelCue": "Une longue bao de xiao bien enveloppée se sent tendue et ronde lorsqu'elle est levée — la peau a une tension de la vapeur piégée à l'intérieur pendant l'emballage, et la boulette devrait grouiller légèrement lorsqu'elle est posée, comme un ballon rempli d'eau."
    },
    {
      "nodeId": "step_5",
      "action": "Mijoter",
      "inputs": [
        "wrapped_xlb"
      ],
      "outputState": "finished_xiao_long_bao",
      "instructions": "Lignez un vapeur de bambou avec des feuilles de parchemin ou de chou. Placez les boulettes à 2 cm d'écart — elles s'étendent. Au-dessus de l'eau bouillante pendant exactement 8 minutes. Pas 6 (remplissant sous-cuisine), pas 10 (larmes de peau). Servir immédiatement dans le vapeur. Accompagner avec du vinaigre noir et du gingembre mince.",
      "visualCue": {
        "primaryTarget": "Les boulettes dans le vapeur — la translucidité de la peau et la soupe visible à l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A 6 minutes: la peau est encore blanche opaque et l'intérieur aspic n'a pas complètement fondu — la soupe est encore semi-solide.",
            "action": "Steam pendant 2 minutes de plus; ne pas ouvrir le couvercle du vapeur ou la température chutera."
          },
          {
            "state": "Perfect",
            "description": "A 8 minutes : la peau est translucide, presque éclatante, et vous pouvez voir le décalage de remplissage de soupe liquide lorsque le vapeur est légèrement incliné. Chaque boulette a légèrement gonflé. La couronne plissée est intacte.",
            "action": "Servir immédiatement à la table — chaque seconde elle repose la peau durcit."
          },
          {
            "state": "Overdone",
            "description": "Une ou plusieurs boulettes ont une peau fendue ou éclatée, laissant la soupe dans le panier à vapeur — surchauffé ou défaut d'étanchéité.",
            "action": "Servir immédiatement les intacts; les éclats peuvent être mangés dans le panier avec une cuillère."
          }
        ]
      },
      "feelCue": "Soulevez un long bao xiao avec des baguettes très doucement par la couronne — il devrait osciller légèrement comme un pendule, la soupe à l'intérieur pooling d'un côté, la peau translucide et résistante. Placez-le dans une cuillère, mordez un petit trou dans le côté, et attendez trois secondes pour que la vapeur se libère avant de siroter la soupe."
    }
  ]
};
