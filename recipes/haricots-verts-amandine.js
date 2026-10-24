export default {
  "repoId": "master_french_haricotsverts_001",
  "parentRepoId": null,
  "slug": "haricots-verts-amandine",
  "author": "ForkRecipe Kitchen",
  "title": "Haricots Verts Amandine",
  "description": "Tender-crisp haricots verts français blanchis à vert vif et finis dans du beurre brun mousseux éparpillé d'amandes grillées, l'essence de l'élégance classique française.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "vegetables",
  "tags": [
    "français",
    "Haricots verts",
    "Amandes",
    "Beurre brun",
    "classique",
    "végétarien",
    "côté"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Haricots verts, bouts de tige parés",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "haricots verts ordinaires fins"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Amandes livrées",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "Amandes décortiquées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre blanc fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "blanched_beans",
      "instructions": "Portez une grande casserole d'eau à ébullition. Assaisonner de sel jusqu'à ce qu'il goûte comme de l'eau de mer douce — environ 15 g de sel par litre. Déposez les haricots et faites cuire à découvert pendant 2-3 minutes exactement : le but est croustillant, jamais doux. Préparez un grand bol d'eau glacée. Égoutter les haricots et les plonger immédiatement dans le bain de glace.",
      "visualCue": {
        "primaryTarget": "Les haricots sont vert vif, presque fluorescent — la couleur est nettement plus brillante que brute. Ils tiennent leur forme parfaitement sans boiteux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont vert foncé, cru et sécrètent rigidement. Ils ont un goût féculent et herbacé.",
            "action": "Retournez à l'eau bouillante pendant 30 à 60 secondes de plus, puis rechoquez."
          },
          {
            "state": "Perfect",
            "description": "Un vert vif et vif. Chaque haricot s'incline avec résistance mais ne se casse pas. Un biting révèle un croquant croquant.",
            "action": "Choquer immédiatement dans l'eau glacée pendant 2 minutes pour régler la couleur, puis égoutter soigneusement et sécher."
          },
          {
            "state": "Overdone",
            "description": "Les haricots sont ternes à jaune-vert. Ils sont boiteux et fléchis sans résistance.",
            "action": "Égoutter et sécher immédiatement. Procéder — la saveur est encore bonne, mais la texture sera plus douce."
          }
        ]
      },
      "feelCue": "Un vert de haricot parfaitement blanchi craque comme un crayon frais quand vous le pliez brusquement — propre et décisif, pas fibreux ou soyeux."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "beurre_noisette_almonds",
      "instructions": "Dans une casserole à feu moyen, faire fondre le beurre et ajouter les amandes liquéfiées simultanément. Tourner la poêle fréquemment. Le beurre va mousser, puis la mousse s'abaisse comme l'eau s'évapore. Regardez attentivement — les solides de lait commenceront à colorier un brun grillé tandis que les amandes toast à leurs côtés. Au moment où le beurre sent les noisettes et les amandes sont dorés, retirer du feu.",
      "visualCue": {
        "primaryTarget": "Le beurre est un brun-ambre clair avec des taches dorées foncées de solides de lait se trouvant au fond de la poêle. Les amandes sont un or même chaud. La mousse a complètement baissé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore jaune et mousseux. Les amandes sont pâles et goûtent crus.",
            "action": "Continuer la cuisson — le changement de couleur se produit rapidement lorsque la mousse tombe; être prêt à bouger rapidement."
          },
          {
            "state": "Perfect",
            "description": "Le beurre est ambre et pétillant, comme les noisettes et les toasts. Les amandes sont dorées et parfumées. La casserole sent extraordinaire.",
            "action": "Retirer immédiatement du feu et ajouter les haricots — la chaleur résiduelle continuera à cuire."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est devenu brun foncé ou noir. Les amandes sont sombres et sentent amers.",
            "action": "Verser le beurre brûlé, essuyer la poêle et commencer à l'état frais avec du beurre nouveau. Les amandes peuvent être récupérées si elles sont légèrement surchargées."
          }
        ]
      },
      "feelCue": "Le bruit de beurre sent comme des noisettes chaudes et des toasts beurrés — si vous sentez seulement du beurre, il faut plus de temps; si vous sentez de l'amertume, il est allé trop loin."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "beurre_noisette_almonds",
        "blanched_beans",
        "ing_04",
        "ing_06"
      ],
      "outputState": "finished_haricots_verts_amandine",
      "instructions": "Ajouter les haricots égouttés et bien séchés dans la poêle avec la beurre et les amandes. Mélanger à feu moyen-doux pendant 1 minute jusqu'à ce que les haricots soient enduits et réchauffés. Pressez le jus de citron directement sur la poêle et jetez encore une fois. Assaisonner de poivre blanc et goûter au sel. Servir immédiatement sur une assiette chauffée.",
      "visualCue": {
        "primaryTarget": "Les haricots verts vifs sont uniformément enduits d'un mince film de beurre brun, bombés d'amande dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots semblent secs et le beurre ne les a pas enrobés uniformément. Les amandes sont regroupées en bas.",
            "action": "Toss plus activement et ajouter un petit bouton de beurre supplémentaire pour aider tout se réunit."
          },
          {
            "state": "Perfect",
            "description": "Chaque fève brille d'une fine couche de beurre. Les amandes dorées sont distribuées uniformément. Le jus de citron a éclairé la couleur et les odeurs de la cuisine de beurre, d'amande et d'agrumes.",
            "action": "Assortiment et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les haricots se sont adoucis à cause du suremballage et du chauffage. Le beurre y est absorbé et le plat semble sec.",
            "action": "Ajoutez un dernier bouton de beurre frais froid et jetez le feu pour restaurer le brillant."
          }
        ]
      },
      "feelCue": "Les haricots doivent glisser l'un contre l'autre lorsque l'assiette est inclinée — légèrement brillante mais pas mise en commun avec du beurre. Chacun d'eux devrait offrir une douce croûte en mordant."
    }
  ]
};
