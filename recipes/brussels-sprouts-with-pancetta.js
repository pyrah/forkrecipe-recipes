export default {
  "repoId": "master_italian_brussels_sprouts_pancetta_001",
  "parentRepoId": null,
  "slug": "brussels-sprouts-with-pancetta",
  "author": "ForkRecipe Kitchen",
  "title": "Sprouts de Bruxelles avec Pancetta",
  "description": "Bruxellois brisé pousse le visage rôti à feu vif jusqu'à ce que les côtés coupés caramélisent en bronze et les feuilles externes char à bords croustillants et froissés, puis jetés avec de la pancetta croustillante, des noix grillées, du zeste de citron et du pecorino râpé. Amère et douce, grasse et lumineuse, dans un seul bol.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "vegetables",
  "tags": [
    "Italien",
    "grillés",
    "hiver",
    "côté",
    "Pancetta"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux de Bruxelles, coupés en deux dans la tige",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "broccolini (temps de cuisson plus court)",
        "fleurs de chou-fleur"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Pancetta, coupé en lardons de 5 mm",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "guanciale",
        "bacon épais coupé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Noix communes, hachées approximativement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pécans",
        "noisettes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement (3 girofles)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron (1 citron)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "zeste d'orange"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Pecorino Romano ou parmesan, finement râpé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano",
        "âgés d'Asiego"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel aplati et poivre noir grossier",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Miel (facultatif, pour l'équilibre)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'érable",
        "sucre brun"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_09"
      ],
      "outputState": "roasted_sprouts",
      "instructions": "Préchauffer le four à 220°C (425°F) avec un plateau de cuisson lourd à l'intérieur — un plateau de cuisson préchauffé est la clé du contact immédiat avec l'amarrage. Mélanger la moitié des choux de Bruxelles avec l'huile d'olive, le sel et le poivre dans un bol. Ecartez-les en une seule couche sur le plateau chaud, coupez-les sans exception. Ne les tournez pas pendant les 15 premières minutes — le contact direct avec le métal chaud est ce qui produit le fond caramélisé profond sur la face coupée. Après 15 minutes, vérifiez le côté coupé : il devrait être profondément doré. À ce moment, rôtir encore 5 minutes sans tourner, jusqu'à ce que les feuilles extérieures soient carbonisées et croquantes.",
      "visualCue": {
        "primaryTarget": "Bronze profond aux visages coupés caramel-brun, avec des feuilles extérieures carbonisées qui sont sombres, pliées et croquantes. Les germes devraient avoir rétréci de façon significative.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les visages coupés sont d'or pâle, doux et à la vapeur plutôt que caramélisé. Les feuilles extérieures sont encore vertes et flexibles.",
            "action": "Retourner au four 5 minutes de plus sans tourner. La caramélisation se produit rapidement à la fin, soyez patient."
          },
          {
            "state": "Perfect",
            "description": "Les visages coupés sont profondément caramélisés, or foncé au bronze. Les feuilles extérieures sont carbonisées et papier-crisp. Les germes sentent le brassica caramélisé et l'huile d'olive.",
            "action": "Retirer du four et ajouter immédiatement la pancetta et les noix."
          },
          {
            "state": "Overdone",
            "description": "Les visages coupés sont très sombres, presque noirs. Les feuilles extérieures brûlent et les germes sentent l'acride.",
            "action": "Supprimer immédiatement. Trimer les feuilles extérieures les plus carbonisées et procéder — une certaine amertume est la bienvenue, mais la fumée acride ne l'est pas."
          }
        ]
      },
      "feelCue": "Ramassez un germe avec des pinces et pressez les feuilles extérieures doucement — elles doivent craquer et s'effondrer légèrement, comme du papier croustillant, plutôt que de plier et de fléchir."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "ing_02"
      ],
      "outputState": "crispy_pancetta",
      "instructions": "Pendant que les germes rôtissent, placez la pancetta en dés dans une poêle sèche et froide. Réglez la poêle à feu moyen et laissez la graisse se rendre lentement à mesure que la poêle chauffe. Ce début de période froide rend la graisse progressivement sans brûler l'extérieur avant que l'intérieur soit cuit. Cuire en remuant occasionnellement, pendant 8 à 10 minutes, jusqu'à ce que les lardons de pancetta soient profondément dorés, croustillants et que la graisse soit complètement extraite. Retirer avec une cuillère à fente sur une serviette en papier. Réserve 1 cuillerée à soupe de la graisse rendue dans la poêle.",
      "visualCue": {
        "primaryTarget": "Ambre profond aux cubes de pancetta de couleur cuivre, visiblement croustillant et légèrement rétréci. La graisse rendue dans la poêle est claire et dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pancetta est encore rose pâle et douce. La graisse n'a pas encore été entièrement rendue — les lardons sont des disquettes.",
            "action": "Continuer la cuisson à feu moyen. La transition du doux au croustillant se produit au cours des 2 à 3 dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Des lardons bien dorés et croustillants qui tiennent leur forme et se sentent fermes. La graisse est entièrement rendue et la cuisine sent le porc guéri.",
            "action": "Retirer avec une cuillère à fentes. Réserve la graisse."
          },
          {
            "state": "Overdone",
            "description": "La pancetta est très sombre, dure et amère. Des morceaux sont brûlés.",
            "action": "Jeter les pièces les plus sombres. Les autres sont encore utilisables — la pancetta frite pardonne à des niveaux inférieurs de surcuisson."
          }
        ]
      },
      "feelCue": "Serrez un lard contre le côté de la poêle avec une cuillère — une pièce entièrement croustillée est ferme et inébranlable, comme un crouton. Un rendu doux n'a pas fini."
    },
    {
      "nodeId": "step_3",
      "action": "Toast",
      "inputs": [
        "ing_03"
      ],
      "outputState": "toasted_walnuts",
      "instructions": "Dans la même casserole, ajouter les noix hachées à feu moyen. Mélanger constamment pendant 2 à 3 minutes jusqu'à ce qu'ils soient dorés, parfumés, et la graisse de noix commence à être visible comme un léger éclat sur la surface de la poêle. L'ajout de graisse de pancetta plutôt que d'huile ordinaire ajoute une dimension profondément savoureuse aux noix. Regardez de près — les noix vont d'or à brûlé très rapidement. Retirer dès qu'ils sentent profondément la noix et regarder sec et légèrement doré.",
      "visualCue": {
        "primaryTarget": "Noyers uniformément dorés, légèrement scintillants de la graisse, parfumés d'une odeur profonde, chaude et noisette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix sont encore pâles, poussiéreuses, et sentent crus et farineux.",
            "action": "Continuez à jeter à feu moyen pendant 1 à 2 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Uniformement doré, sec, intensément parfumé. Ils devraient sentir l'huile de noix fraîche.",
            "action": "Retirer immédiatement — la chaleur résiduelle dans la poêle continuera à les cuire."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé aux taches noires. Une forte odeur amère. Les tannins dans la peau ont brûlé.",
            "action": "Supprimer immédiatement. Les noix sont très amères lorsqu'elles sont brûlées — si la plupart sont sombres, il est préférable de commencer par des noix fraîches."
          }
        ]
      },
      "feelCue": "Une pièce de noix parfaitement grillée doit sembler sèche et dure lorsqu'elle retombe dans la poêle — un robinet aiguisé, pas un doux bruit. S'il semble encore légèrement humide et lourd, il faut encore une minute."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "roasted_sprouts",
        "crispy_pancetta",
        "toasted_walnuts",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "brussels_sprouts_with_pancetta",
      "instructions": "Transférer les choux torréfiés dans un grand bol de service. Ajouter la pancetta croustillante, les noix grillées et l'ail finement tranché (la chaleur résiduelle des germes parfumera délicatement l'ail cru sans le faire cuire complètement — c'est intentionnel). Ajouter le zeste de citron, le jus de citron, la moitié du pecorino et une bruine de miel. Jetez doucement mais avec confiance — certaines des feuilles extérieures se briseront en croustilles, ce qui est souhaitable. Goûtez et ajustez avec du sel, du poivre, du jus de citron ou du miel pour équilibrer. Dispersez le pecorino restant et servez immédiatement au chaud.",
      "visualCue": {
        "primaryTarget": "Poêle de choux bronzés, pancetta croustillante, morceaux de noyer, et morceaux blancs de pecorino. Certaines feuilles extérieures carbonisées sont visibles sous forme de croustilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants n'ont pas été entièrement jetés — les germes sont encore disposés et la pancetta et les noix sont assis sur le dessus.",
            "action": "Jeter plus avec confiance pour distribuer tout uniformément."
          },
          {
            "state": "Perfect",
            "description": "Un bol uniformément mélangé avec une variété visible: choux bruns verts, pancetta ambre, noix dorées, pecorino blanc. Le zeste de citron est parfumé. Tout brille légèrement.",
            "action": "Boucher, assaisonner et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Survêtue : les feuilles extérieures ont toutes été cassées et le plat ressemble à un bourdonnement de composants lâches plutôt qu'à un côté composé.",
            "action": "Servir de toute façon — les saveurs sont identiques. Jetez plus doucement la prochaine fois."
          }
        ]
      },
      "feelCue": "Soulevez une cuillère à servir et goûtez tous les composants à la fois — la morsure doit frapper l'amertume d'abord du germe, puis la graisse riche de la pancetta, puis une finale citronnée. Tous les trois devraient être présents."
    }
  ]
};
