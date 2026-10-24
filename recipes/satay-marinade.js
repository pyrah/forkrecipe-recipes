export default {
  "repoId": "master_southeast-asian_satay-marinade_001",
  "parentRepoId": null,
  "slug": "satay-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Satay Marinade et sauce aux arachides",
  "description": "Des brochettes de poulet ou de boeuf d'or curcuma marinées dans de la citronnelle, de la coriandre et du lait de coco, grillées au charbon de bois jusqu'à ce que le caramel soit charmé aux bouts — servies avec une sauce à la noix d'arachide si riche et complexe qu'on pouvait la manger avec une cuillère. Une pierre angulaire de la nourriture de rue de Penang à Jakarta.",
  "cuisine": "Asie du Sud-Est",
  "culture": "Malaisien-Indonésien",
  "category": "condiments",
  "tags": [
    "Sud-Est asiatique",
    "satay",
    "marinade",
    "arachide",
    "brochette",
    "Grille",
    "lait de coco"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâte de citronnelle, partie blanche, râpée finement ou hachée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâte de citronnelle"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de palme ou sucre brun léger",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Lait de coco plein gras (pour marinade)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco épaisse éclaircie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Cacahuètes grillées, peaux enlevées, finement broyées ou concassées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre d'arachide naturel (sans sucre ajouté)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Lait de coco, supplément (pour la sauce aux arachides)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Eau de tamarin (1 c. à soupe de pâte de tamarin dissoute dans 3 c. à soupe d'eau)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de lime frais"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "sauce de poisson ou sauce de soja",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Flocons de chili séchés ou de sambal oelek",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "piment rouge frais, haché"
      ]
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
      "outputState": "satay_marinade",
      "instructions": "Mélanger le curcuma, la coriandre, le cumin, la citronnelle râpée et le sucre de palme dans un bol. Verser dans le lait de coco et fouetter jusqu'à ce que les épices soient uniformément dispersées et que le sucre soit dissous. La marinade doit être un jaune d'or chaud — le curcuma tache tout ce qu'elle touche, alors utilisez un bol non réactif et faites attention aux vêtements. Bouche : il doit être parfumé d'épices chaudes, légèrement sucré et riche en noix de coco. Il est utilisé pour mariner 500 g de poulet, de bœuf ou de tofu finement tranché pendant au moins 1 heure (la nuit au réfrigérateur est idéale). Filez sur des brochettes de bambou préalablement trempées avant de griller.",
      "visualCue": {
        "primaryTarget": "Une marinade dorée-jaune douce et chaude avec des taches visibles de citronnelle et d'épices, uniformément colorée sans croûtes d'épices sèches flottant à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amas d'épices sèches flottent à la surface et ne sont pas intégrés, le sucre de palme n'est pas dissous.",
            "action": "Plus vigoureusement. Chauffer doucement le mélange à 40 C pour aider le sucre de palme à se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Uniformement doré, aromatique, doux. La citronnelle est assez finement hachée pour qu'elle ne se sente pas à cordes lorsqu'elle est frottée entre les doigts. Sens de curcuma et de noix de coco.",
            "action": "Ajouter les protéines à la marinade, couvrir et réfrigérer pendant au moins 1 heure."
          },
          {
            "state": "Overdone",
            "description": "Marinade sent trop piquant de trop de curcuma cru ou a été trop mélangé jusqu'à ce que la mousse.",
            "action": "Procéder — la mousse se tassera et le curcuma cru se rafraîchira pendant la marinade."
          }
        ]
      },
      "feelCue": "La marinade doit se sentir soyeuse et légèrement visqueuse sur les doigts — presque comme une légère lotion corporelle — de la graisse de lait de coco. Le curcuma tachera votre peau en quelques secondes."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "peanut_sauce",
      "instructions": "Mélanger les cacahuètes moulues, le lait de coco, l'eau de tamarin, la sauce de poisson et les flocons de chili dans une petite casserole. Mélanger avant de mettre à feu moyen-doux. Cuire, en remuant fréquemment, pendant 8 à 10 minutes jusqu'à ce que la sauce s'épaississe sensiblement et que la graisse commence à se séparer légèrement aux bords de la poêle. La sauce doit être assez épaisse pour enrober une cuillère, mais toujours versable. S'il s'empare trop épais, ajouter un jet d'eau. Bouche : sucré-salé-sour-épicé en équilibre, avec un caractère cacahuète profond et grillé. La sauce doit être servie au chaud.",
      "visualCue": {
        "primaryTarget": "Une épaisse sauce à l'arachide dorée avec un léger éclat d'huile de coco à la surface, enrobant une cuillère dans une couche lourde et texturée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine, pâle et crue. La saveur d'arachide n'est pas encore développée.",
            "action": "Continuer la cuisson à feu moyen-doux, en remuant constamment pour éviter les brûlures sur le fond."
          },
          {
            "state": "Perfect",
            "description": "La sauce est épaisse, dorée et aromatique. Un anneau d'huile de coco apparaît au bord. Des chutes d'une cuillère dans des rubans lents. Goûte riche, noisette, légèrement sucrée et aigre avec de la chaleur de fond.",
            "action": "Retirer du feu. Servir au chaud à côté des brochettes grillées."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est épaissie en pâte, brûlée au fond, ou sent les arachides brûlées.",
            "action": "Déglacer avec 2 à 3 cuillères à soupe d'eau chaude et remuer vigoureusement pour se détendre. Dentelle si nécessaire."
          }
        ]
      },
      "feelCue": "La bonne sauce à l'arachide coule d'une cuillère dans un filet épais et réticent et tient sa forme brièvement dans le bol avant de s'étendre lentement — plus lourd que la crème, plus léger que le beurre de noix."
    },
    {
      "nodeId": "step_3",
      "action": "Griller",
      "inputs": [
        "satay_marinade"
      ],
      "outputState": "finished_satay_skewers",
      "instructions": "Enfilez la viande marinée sur des brochettes de bambou trempées, 3-4 fines tranches par brochette, en maintenant la viande à plat pour qu'elle soit en bon contact avec le grill. Griller à feu vif (le charbon est traditionnel et considérablement supérieur) pendant 2 à 3 minutes de chaque côté. L'extérieur devrait s'ombrager aux extrémités et aux bords — caramel foncé, légèrement noirci — tandis que l'intérieur reste juste cuit à travers. Baste avec la marinade restante au premier tour. Le curcuma de la marinade s'obscurcit rapidement et sent les épices grillées. Attention : les tranches minces de satay sont surcuites en quelques secondes.",
      "visualCue": {
        "primaryTarget": "Des brochettes aux bords dorés, une caramélisation profonde de l'acajou sur le visage, et des bouts qui sont encore plus sombres — le dégradé de couleur de la pointe au centre vous dit qu'ils ont été cuits à la chaleur grave.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Extérieur doré pâle, sans marques d'omble, intérieur encore brut. La marinade de lait de coco n'a pas caramélisé.",
            "action": "Augmentez considérablement la chaleur. La grille ou la poêle n'était pas assez chaude. Laissez la marinade caraméliser avant de tourner."
          },
          {
            "state": "Perfect",
            "description": "Marques d'omble visible, doré-brun caramélisé sur le visage du grill, pointe légèrement sombre. La viande est juste cuite à travers — la texture interne est ferme mais toujours juteuse. Le curcuma a grillé à l'or profond.",
            "action": "Servir immédiatement avec de la sauce d'arachide chaude."
          },
          {
            "state": "Overdone",
            "description": "La viande est sèche et s'éloigne de la brochette. L'extérieur est uniformément noir.",
            "action": "Servir avec de la sauce d'arachide supplémentaire pour compenser la sécheresse. La sauce est pardonnante."
          }
        ]
      },
      "feelCue": "Une brochette satay parfaitement grillée devrait donner la moindre résistance lorsqu'elle est pressée avec un doigt, puis rebondir fermement — si elle ne ressort pas du tout, elle est trop cuite et sèche."
    }
  ]
};
