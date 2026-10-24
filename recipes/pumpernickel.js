export default {
  "repoId": "master_german_pumpernickel_001",
  "parentRepoId": null,
  "slug": "pumpernickel",
  "author": "ForkRecipe Kitchen",
  "title": "Pumpernickel allemand",
  "description": "Dense, sombre de minuit et profondément complexe — cette brique de seigle westphalien s'éteint pendant seize heures jusqu'à ce que chaque grain soit saturé de profondeur de malt, de subtils armoiries et d'un sous - courant de chocolat noir et de café qui n'a pas de parallèle dans d'autres pains.",
  "cuisine": "Allemand",
  "culture": "Westphalien",
  "category": "breads",
  "tags": [
    "pumpernickel",
    "allemand",
    "seigle",
    "pain noir",
    "Pâtes alimentaires",
    "vapeur",
    "westphalien"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "24 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 3,
    "bitter": 3,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de seigle grossière",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de seigle entière (résultat du dénateur)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Baies entières de seigle",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "seigle fissuré"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau bouillante",
      "ratioValue": 90,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Démarrage au sarcophage (hydratation 100%)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de Carave",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "graines de fenouil",
        "graines d'anis"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Extrait de malt foncé ou mélasse de strap noir",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "Treacle",
        "sirop de malt d'orge foncée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "soaked_grain",
      "instructions": "Dans un grand bol résistant à la chaleur, combiner le seigle grossier et les baies de seigle entier pré-soufflées. Verser l'eau bouillante sur les deux et remuer vigoureusement jusqu'à ce que le seigle ait absorbé toute l'eau. Le mélange ressemblera à un porridge très épais et collant, presque comme du béton humide. Couvrir soigneusement et laisser reposer à température ambiante pendant 1 heure. Cette étape d'échaudage gélatinise les amidons de seigle, déclenche une dégradation enzymatique des sucres de seigle complexes qui deviennent la douceur distinctive malt-dark du pain, et adoucit les baies entières.",
      "visualCue": {
        "primaryTarget": "Après 1 heure: une masse épaisse, sombre et uniforme qui a absorbé toute l'eau. Pas de réservoir de liquide debout. Des baies de seigle visibles comme de petites perles foncées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours aqueux — liquide debout à la surface, farine de seigle pas complètement hydratée, granules grossiers encore gris.",
            "action": "Remuer vigoureusement et attendre encore 30 minutes — le repas de seigle a besoin de temps pour absorber complètement."
          },
          {
            "state": "Perfect",
            "description": "Un porridge sombre, épais et uniforme. Pas d'eau. Des baies entières de seigle réparties uniformément. Il a une odeur faible et grillée.",
            "action": "Laisser refroidir à moins de 35 °C avant d'ajouter le démarreur aurifère."
          },
          {
            "state": "Overdone",
            "description": "La masse est très dense et s'est raidie dans une pâte qui remue à peine. Presque froid.",
            "action": "Continuez — c'est normal. Ajoutez une petite quantité d'eau (5 %) si le démarreur ne l'intègre pas."
          }
        ]
      },
      "feelCue": "La masse de grain trempée devrait se sentir comme un porridge froid et dense — assez épais pour se poser sur une cuillère sans courir, avec la faible texture rugueuse des baies de seigle partout."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "soaked_grain",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "pumpernickel_dough",
      "instructions": "Une fois que le grain trempé est refroidi à moins de 35 C (vérifiez avec votre poignet), ajoutez le seigle augure, sel, graines de carvi et extrait de malt foncé ou mélasse. Mélangez tout vigoureusement avec une cuillère en bois lourde ou une spatule rigide jusqu'à ce qu'elle soit complètement uniforme. Ce n'est pas une pâte au sens conventionnel — il n'y a pas de réseau de gluten à développer. C'est une pâte épaisse et dense qui tient à peine une forme. La couleur sera très brun foncé. Bouche: il doit être savoureux, subtilement sucré, malté et complexe d'odeur.",
      "visualCue": {
        "primaryTarget": "Une masse brun foncé uniforme — chaque ingrédient foncé mélangé sans stries visibles de farine de seigle plus léger ou de démarreur plus léger. Assez dense pour tenir un monticule quand il est tombé d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paler stries de seigle ou de seigle non mélangé visible; extrait de malt n'a pas entièrement incorporé; pâte semble marbrée.",
            "action": "Continuer à mélanger vigoureusement jusqu'à ce que la couleur soit complètement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Uniformement brun très foncé, presque brun noir. Sensé mais émouvant. Des odeurs de seigle, de carafe et de malt foncé. Goûte profondément salé avec une douceur de fond.",
            "action": "Transférer immédiatement dans une boîte de pain et procéder à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Vous avez trop mélangé avec une machine et la masse est devenue légèrement aérée ou à cordes. Peu à la main.",
            "action": "Procéder — le surmélange mineur ne nuit pas au pumpernickel, qui n'a pas de structure de gluten endommager."
          }
        ]
      },
      "feelCue": "Pumpernickel pâte se sent incroyablement dense et collant — il s'accroche à votre cuillère dans des fils longs, réticents et prend un réel effort pour remuer. Si votre bras est fatigué, vous le faites bien."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "pumpernickel_dough"
      ],
      "outputState": "packed_loaf",
      "instructions": "Ligner une petite boîte de pain (environ 20 x 10 cm) avec du parchemin de tous les côtés. Graissez légèrement le parchemin. Placez la pâte de pumpernickel dans l'étain, appuyez fermement dans les coins avec une spatule humide ou des mains mouillées pour éliminer les poches d'air. Aplatissez le plateau. Appuyez fermement sur l'étain sur le comptoir plusieurs fois pour libérer des bulles piégées. L'étain doit être rempli à moins de 1 cm du dessus. Couvrir étroitement avec un morceau de papier d'aluminium huilé, sertir étroitement autour de la jante pour emprisonner la vapeur pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Une masse sombre lisse et plane qui remplit l'étain à moins de 1 cm de la jante. Aucun trou ou cratère d'air visible dans la surface. Le joint est serré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches d'air visibles sur la surface; les coins ne sont pas complètement remplis; la surface supérieure est inégale avec les cratères.",
            "action": "Appuyez sur la surface lisse avec une spatule humide et tapez à nouveau l'étain pour déposer la pâte."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse, plate, mate-noire remplissant l'étain uniformément. Foil incrusté serré. L'étain est lourd pour sa taille.",
            "action": "Placer dans un bain d'eau ou un four à vapeur et cuire à 120 C (250 F) pendant 16 heures."
          },
          {
            "state": "Overdone",
            "description": "Vous avez surchargé l'étain — la pâte est de niveau avec ou au-dessus du bord et débordera pendant la cuisson.",
            "action": "Retirer une cuillère ou deux, puis sceller avec du papier et procéder."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez la pâte de pumpernickel dans l'étain, il se sent comme presser de l'argile très dense et froide — il retient l'indentation de vos doigts et ne ressort pas du tout."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "packed_loaf"
      ],
      "outputState": "finished_pumpernickel",
      "instructions": "Préchauffer le four à 120 C (250 F). Placez la boîte de pain couverte dans une poêle à rôtir profonde. Verser l'eau bouillante dans la rôtissoire pour atteindre la moitié des côtés de l'étain à pain, ce qui crée l'environnement de vapeur essentiel pour le pumpernickel. Cuire couvert de papier pendant 16 heures. Oui, seize heures. La faible chaleur et la vapeur caramélisent lentement les sucres de seigle à travers la réaction Maillard et le brunissement enzymatique — c'est ce qui crée la couleur presque noire caractéristique et complexe, saveur malt-chocolate sans aucun colorant ajouté. Après 16 heures, retirer la feuille, relever le four à 180 C (350 F), et cuire à découvert pendant 30 minutes pour régler la croûte. Laisser refroidir complètement dans l'étain avant de se démouler. Couper le papier-mince — le pompernickel est le meilleur jour après la cuisson.",
      "visualCue": {
        "primaryTarget": "Au bout de 16 heures sous la feuille : le pain s'est légèrement rétréci des parois en étain et la surface est brun foncé, presque noire. Après la finition à découvert de 30 minutes : une croûte ferme et très sombre avec une surface mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Au bout de 16 heures, le centre du pain est encore doux et humide lorsqu'il est pressé; la température intérieure est inférieure à 95 °C; la couleur est plus foncée que presque noire.",
            "action": "Retour couvert à 120 C pendant 2 à 4 heures. Pumpernickel ne peut pas être précipité."
          },
          {
            "state": "Perfect",
            "description": "Extérieur presque noir, ferme tout en étant pressé. Température interne 96–98 C. Lorsqu'elle n'est pas mélangée et tranchée, la miette est dense, humide et très foncée, la couleur du chocolat noir. Des baies de seigle visibles comme des points légèrement plus pâles.",
            "action": "Refroidir complètement — idéalement pendant la nuit — avant de couper. Envelopper le papier et servir en tranches fines."
          },
          {
            "state": "Overdone",
            "description": "La croûte est carbonisée ou fissurée; les bords sont séchés à une coquille dure et fragile.",
            "action": "Coupez les bords secs. L'intérieur est presque certainement parfait — la structure dense du pumpernickel le protège du surchauffe."
          }
        ]
      },
      "feelCue": "Un pain de pompernickel fini ressemble à une brique dense et humide, beaucoup plus lourd qu'un pain de blé de la même taille. Couper le papier-mince avec un couteau dentelé tranchant : chaque tranche doit fléchir légèrement au lieu de s'effondrer."
    }
  ]
};
