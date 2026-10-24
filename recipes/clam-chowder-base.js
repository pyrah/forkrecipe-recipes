export default {
  "repoId": "master_american_clam-chowder-base_001",
  "parentRepoId": null,
  "slug": "clam-chowder-base",
  "author": "ForkRecipe Kitchen",
  "title": "Nouvelle-Angleterre Clam Chowder Base",
  "description": "Une cuillerée d'ivoire épaisse, construite sur du porc salé, de la liqueur de palourde et des pommes de terre farineuses, finie avec assez de crème pour transformer le bouillon fumé en quelque chose qui enveloppe une cuillère du poids d'une côte hivernale.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Angleterre",
  "category": "stocks",
  "tags": [
    "palourdes",
    "Chowder",
    "crème",
    "Nouvelle-Angleterre",
    "Produits de la mer"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "75 min",
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
    "umami": 8,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc salé ou bacon épais coupé, petits dés",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre non salé (perdre la fumée mais garder la graisse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, dés moyens",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "poireaux (douces, plus douces)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de pomme de terre (utiliser la moitié de la quantité, ajouter à la fin)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Jus de clam ou bouillon de palourdes en bouteille",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "stocks de poissons (moins de soie)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Pommes de terre en russe ou en or du Yukon, 1cm dés",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Palourdes en conserve ou fraîches",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié et moitié (douceur)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Fils de thym frais (2–3)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché (utiliser la moitié)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuille de la baie (1 grande)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel casher et poivre blanc",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rendu",
      "inputs": [
        "ing_01"
      ],
      "outputState": "rendered_salt_pork",
      "instructions": "Placer le porc salé ou le bacon dans une casserole froide à fond lourd (le four hollandais est idéal). Régler à feu moyen-doux. À partir du froid permet à la graisse de rendre lentement sans brunir l'extérieur — vous voulez de la graisse dans le pot, pas une texture croustillante. Cuire de 8 à 10 minutes, en remuant occasionnellement jusqu'à ce que la majeure partie de la graisse soit rendue et que les morceaux soient dorés mais pas encore croustillants. Enlevez les morceaux de porc avec une cuillère à fentes et réservez — ils retournent à la fin.",
      "visualCue": {
        "primaryTarget": "Les morceaux de porc sont dorés-jaunes et rétrécis à environ la moitié de leur taille originale. Une généreuse piscine de graisse claire à dorée enveloppe le fond du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore rose pâle et doux. Très peu de graisse a rendu — le pot brille à peine.",
            "action": "Continuer la cuisson sur moyenne-doux. Début chaud rend l'extérieur avant la libération de graisse."
          },
          {
            "state": "Perfect",
            "description": "Les pièces sont un tandem d'or, ferme, brillant et rendu gras. Au moins 3 à 4 cuillères à soupe de graisse visible dans le fond.",
            "action": "Retirer le porc avec une cuillère à fentes et réserver. Laisse toute la graisse dans le pot."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux sont brun foncé et commencent à croquer aux bords. Certains gras peuvent fumer.",
            "action": "Supprimer immédiatement. Réduire la chaleur. Le porc est encore utilisable — la légère croustillante s'assouplira lorsqu'il retournera dans la poêle."
          }
        ]
      },
      "feelCue": "Une cuillère en bois traînée à travers le fond du pot devrait glisser dans la graisse claire et chatoyante. Vous devriez entendre un étourdissement doux et paresseux — et non un craquement aigu et agressif — tout au long du rendu."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "rendered_salt_pork",
        "ing_02"
      ],
      "outputState": "sweated_onion",
      "instructions": "Ajouter l'oignon en dés à la graisse fondue dans le pot à feu moyen. Cuire en remuant toutes les 2 minutes, de 8 à 10 minutes jusqu'à ce qu'il soit complètement adouci et translucide. Les oignons doivent être doux et productifs, et non brunis. New England chowder est une chowder blanche; toute caramélisation des aromatiques la teintera jaune-brun et ajoutera de la douceur qui combat la saumure.",
      "visualCue": {
        "primaryTarget": "Les oignons sont complètement translucides et boiteux, réduits à environ 60% de leur volume brut. Pas de bords dorés ou bruns.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore blancs opaques avec une structure rigide. Le goût n'est pas devenu sucré.",
            "action": "Réduire légèrement le feu et cuire encore 3-4 minutes. Couvrez le pot pour piéger la vapeur et la vitesse d'adoucissement."
          },
          {
            "state": "Perfect",
            "description": "Entièrement translucide, floppy et sucré. Ils glissent librement dans la graisse sans résistance.",
            "action": "Ajouter la farine et mélanger pour enrober."
          },
          {
            "state": "Overdone",
            "description": "Les oignons commencent à développer des bords dorés et une odeur de caramel plutôt que d'allium.",
            "action": "Ils sont encore utilisables mais la chowder aura une base légèrement plus douce, teintée d'ambre. Continuez."
          }
        ]
      },
      "feelCue": "Un oignon translucide pressé entre deux cuillères devrait s'effondrer à une pâte douce lisse sans croûte ni résistance — l'eau est partie et les sucres se sont adoucis."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "sweated_onion",
        "ing_03"
      ],
      "outputState": "veloute_base",
      "instructions": "Saupoudrer la farine sur les oignons et la graisse. Incorporer constamment 2 à 3 minutes à feu moyen jusqu'à ce que l'odeur de la farine brute se dissipe et que le mélange sente faiblement la pâtisserie cuite. Vous faites un roux pâle sur place. Verser ensuite le jus de palourde progressivement tout en fouettant constamment — ajouter la première tasse lentement pour éviter les grumeaux, puis ajouter le reste dans un ruisseau stable.",
      "visualCue": {
        "primaryTarget": "Un liquide épais, blanc ivoire, sans grumeaux, avec un éclat satiné. La base recouvre l'arrière d'une cuillère en couche mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La farine a été ajoutée mais n'a pas été cuite — elle sent le cru et l'amidon. Le jus de clam ajouté trop rapidement et les morceaux visibles se forment.",
            "action": "Plus vigoureusement. Si des morceaux persistent, utilisez un mélangeur d'immersion sur la base avant d'ajouter des pommes de terre."
          },
          {
            "state": "Perfect",
            "description": "Liquide lisse, couleur ivoire, légèrement épaissé. Sens de palourde et de farine cuite. Pas de goût farineux.",
            "action": "Ajouter les pommes de terre, le thym et la laurier."
          },
          {
            "state": "Overdone",
            "description": "Roux était cuit trop longtemps et bronzé. La base de chowder a une saveur de noix.",
            "action": "C'est très bien, il produira un peu plus noisette, plus complexe. Continuez."
          }
        ]
      },
      "feelCue": "La base doit se sentir comme du béchamel fin sur la cuillère — légèrement plus lourd que l'eau mais toujours versable, avec une résistance soyeuse quand la cuillère est traînée à travers elle."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "veloute_base",
        "ing_04",
        "ing_05",
        "ing_08",
        "ing_09"
      ],
      "outputState": "potato_chowder",
      "instructions": "Ajouter le jus de palourde restant, les pommes de terre en dés, les brins de thym et la feuille de laurier. Porter à mijoter doucement (pas un ébullition complet — le bouillir fait tomber les pommes de terre de façon inégale). Cuire à découvert à mi-chemin pendant 15 à 20 minutes jusqu'à ce que les pommes de terre soient complètement tendres. Tester plusieurs pièces — les cubes extérieurs peuvent être faits avant les cubes centraux à partir du même dés.",
      "visualCue": {
        "primaryTarget": "Les cubes de pommes de terre sont entièrement tendres et ont commencé à libérer une petite quantité d'amidon dans la hotte, l'épaississant davantage. Quelques cubes à la surface peuvent être très légèrement cassés aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre résistent à une fourche ou à un couteau. Centre des dés se sent ferme et brut.",
            "action": "Continuez à mijoter. Vérifiez toutes les 3 minutes — la différence entre la pomme de terre sous - done et la pomme de terre sur done dans la soupe est rapide."
          },
          {
            "state": "Perfect",
            "description": "Un cube de pomme de terre percé avec une pointe de couteau glisse sans résistance. La base de chowder s'est épaissie à partir de fécule de pomme de terre libérée.",
            "action": "Ajouter les palourdes et la crème."
          },
          {
            "state": "Overdone",
            "description": "De nombreux cubes de pommes de terre se sont désintégrés dans le liquide. La chowder est très épaisse et plus comme une soupe de pomme de terre.",
            "action": "Ce sera toujours délicieux comme une chowder plus épaisse. Ajouter la crème et les palourdes et procéder — les pommes de terre cassées ne sont pas un problème."
          }
        ]
      },
      "feelCue": "Un cube de pomme de terre molle pressé contre le côté de la casserole avec une cuillère doit écraser proprement jusqu'à une masse lisse sans résistance au grain. Si ça glisse avant d'appuyer, c'est exagéré."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "potato_chowder",
        "ing_06",
        "ing_07",
        "ing_10",
        "rendered_salt_pork"
      ],
      "outputState": "finished_chowder",
      "instructions": "Enlevez les brins de thym et les feuilles de laurier. Réduisez la chaleur à faible — la cuillerée ne doit plus jamais bouillir après l'entrée de la crème ou la crème se brise. Ajouter les palourdes hachées (avec leur jus si elles sont en conserve), verser la crème lourde et retourner le porc salé réservé. Mélanger doucement. Chauffer pendant 3 à 5 minutes jusqu'à ce que les palourdes soient chaudes et que la crème soit complètement intégrée. Assaisonner de poivre blanc et goûter au sel — le jus de palourde et le porc salé sont déjà assez salés.",
      "visualCue": {
        "primaryTarget": "Un épais, blanc ivoire avec une crème brillante brillance sur la surface. Clams et porc distribués partout. Couleur est blanc crème uniforme sans séparation de la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème semble mince et aqueuse, se séparant visiblement de la base de la pomme de terre. Les clams sont encore froids.",
            "action": "Incorporer doucement à feu doux pendant 2 minutes supplémentaires. Ne pas lever la chaleur ou la crème se briser."
          },
          {
            "state": "Perfect",
            "description": "Chowder entièrement intégré, épais et brillant. Exécute la cuillère en une seule couche. Sensation intense d'océan, de crème et de porc fumé.",
            "action": "Déposer dans des bols chauds. Servir immédiatement avec des craquelins d'huîtres."
          },
          {
            "state": "Overdone",
            "description": "La crème a cassé — les piscines de graisse de beurre jaune sont visibles à la surface et la base semble caillé et granuleux.",
            "action": "Dans une cuillère à soupe d'eau froide, fouetter vigoureusement. La chowder peut ré-émulsionner partiellement. La prochaine fois, ne le laissez jamais bouillir après avoir ajouté de la crème."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère propre à travers la hotte et maintenez-la en place — la hotte doit enrober le dos de la cuillère dans une couche que vous pouvez tracer une ligne à travers votre doigt (co consistance nappé). L'odeur doit être la combinaison complète: saumure, fumée, crème et allium doux."
    }
  ]
};
