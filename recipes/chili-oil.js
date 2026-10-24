export default {
  "repoId": "master_sichuan_chili_oil_001",
  "parentRepoId": null,
  "slug": "chili-oil",
  "author": "ForkRecipe Kitchen",
  "title": "Huile de Chili (style sichuan)",
  "description": "Le condiment de table essentiel de Sichuan — parfumé d'anis étoilé, de cannelle et de maïs poivré Sichuan, rouge brique foncé d'une longue floraison de flocons de chili, et assez complexe pour arroser tout ce qui va des boulettes aux nouilles froides aux oeufs frits. Le moment où l'huile rencontre le chili est le cœur alchimique de la recette.",
  "cuisine": "Chinois",
  "culture": "Sichuan",
  "category": "condiments",
  "tags": [
    "condiment",
    "Chinois",
    "Sichuan",
    "épicé",
    "Chili",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre (grape graine ou canola)",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'arachide raffinée pour une noisette subtile"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Flacons de chili séchés (gochugaru ou sichuan face au ciel)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Gochugaru coréen pour moins de chaleur et plus de couleur",
        "Sichuan chili flocons pour la saveur la plus authentique"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Maïs poivré sichuan",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "omit si elle n'est pas disponible — la qualité ma (numbing) sera perdue mais l'huile est encore excellente"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail (masquées)",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais (3 tranches)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Le gingembre séché est un mauvais substitut ici — utiliser parcimonieusement ou omettre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Anis étoilé",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "stick",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles de laurier séchées",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Graines de sésame blanc",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "infused_oil",
      "instructions": "Mélanger l'huile froide, les grains de poivre Sichuan, les gousses d'ail cassées, les tranches de gingembre, l'anis étoilé, le bâton de cannelle et les feuilles de laurier dans une petite casserole. Réglez-vous à feu moyen-doux et apportez lentement un léger étourdissement — vous voulez un son de friture stable et calme des aromatiques, jamais un éclat agressif ou un craquement. La température doit planer entre 120°C et 140°C; utiliser un thermomètre si vous en avez un ou regarder l'ail comme votre guide. Cuire 20 minutes, ajuster la chaleur pour maintenir une bulle de friture lente et régulière. L'ail deviendra progressivement or pâle. Retirer du feu lorsque l'ail est légèrement doré et que tout dans l'huile sent chaudement parfumé — un parfum complexe d'anis, de cannelle, de poivre et de gingembre fondu en un seul.",
      "visualCue": {
        "primaryTarget": "Huile claire avec des petites bulles stables qui se lèvent autour de l'ail et des aromatiques — un alevin calme constant, pas un ébullition violent. L'ail doit être pâle, même doré après 20 minutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas encore de vertige autour des aromatiques et l'huile sent rien après 5 minutes. L'ail est toujours blanc cru.",
            "action": "Levez légèrement la chaleur. Les aromatiques doivent frire doucement, et non pas simplement réchauffer — sans étourdissement, aucun transfert de saveur dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Un étourdissement constant et calme autour de tous les aromatiques; l'ail est d'or pâle et l'huile s'est légèrement ambrée et sent complexe et chaud — l'anis et le plomb de cannelle, suivi du poivre et du gingembre.",
            "action": "Retirer immédiatement du feu et laisser reposer 5 minutes avant la déformation."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu brun-or foncé et l'anis étoile sent brûlé et médicinal plutôt que doux et chaud.",
            "action": "Placer immédiatement l'huile dans un bol propre, en jetant tous les solides. Bouche : si l'huile a un goût amer plutôt que riche, elle donnera de l'amertume à l'huile de chili finie. Une huile légèrement sur-infusion est encore utilisable; une huile brûlée ne l'est pas."
          }
        ]
      },
      "feelCue": "Tenez votre main à 20 cm au - dessus de la poêle — vous devriez sentir une chaleur régulière et confortable, et non une chaleur féroce. Le bruit de la poêle devrait être un murmure doux et continu, comme la pluie sur une fenêtre."
    },
    {
      "nodeId": "step_2",
      "action": "Faire infuser",
      "inputs": [
        "ing_02",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "prepared_chili_base",
      "instructions": "Pendant que l'huile infuse, préparer la base de chili. Placez les flocons de chili dans un bol assez grand pour contenir toute l'huile en toute sécurité. Ajouter les graines de sésame grillées, le sel et la sauce de soja dans le bol et mélanger brièvement. La floraison critique se produira lorsque l'huile chaude frappera : les flocons de chili s'assombriront, s'assombriront et libéreront instantanément leur couleur et leur saveur dans l'huile. Faites mesurer tout et à portée de bras avant de mettre l'huile sous pression — la séquence doit être rapide et contrôlée.",
      "visualCue": {
        "primaryTarget": "Un bol de flocons de chili rouge profond mélangé à des graines de sésame d'or pâle, prêt à recevoir l'huile chaude — sèche, parfumée et mesurée précisément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bol de chili est encore en cours de préparation et de mesure alors que l'huile commence déjà à refroidir — la floraison nécessite de l'huile entre 120°C et 150°C pour fonctionner.",
            "action": "Préparer la base de chili avant de commencer à infuser l'huile. Une fois l'huile refroidie en dessous de 100°C, la floraison est moins vigoureuse et l'extraction de la couleur diminuée."
          },
          {
            "state": "Perfect",
            "description": "Tout dans le bol est prêt: le chili, le sésame, le sel et la sauce de soja sont mélangés et attendent. Le bol résistant à la chaleur est fixé sur une surface stable et résistante à la chaleur.",
            "action": "Enfilez l'huile infusée chaude directement sur la base de chili dans un verser rapide et confiant."
          },
          {
            "state": "Overdone",
            "description": "Les flocons de chili sont déjà brunissants autour des bords de la surexposition à une poêle chaude — ils ont été préchauffés par erreur.",
            "action": "La floraison fonctionnera encore, mais les flocons risquent de brûler avec de l'huile chaude supplémentaire. Utilisez-les comme il est, mais regardez la température de l'huile plus attentivement."
          }
        ]
      },
      "feelCue": "Le bol doit s'asseoir sur un chiffon humide plié pour l'empêcher de glisser. Ramasse-le avec les deux mains avant que la goutte ne s'installe pour confirmer qu'elle est sûre — une fois que l'huile chaude est en mouvement, rien ne peut bouger."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "infused_oil",
        "prepared_chili_base"
      ],
      "outputState": "bloomed_chili_oil",
      "instructions": "Placer l'huile infusée chaude à travers un tamis fin directement sur la base de chili préparée dans une solution rapide et contrôlée. L'huile va frapper les flocons de chili et immédiatement produire un étourdissement dramatique et une floraison de couleur rouge foncé — c'est le moment où tout se passe. Mélanger rapidement avec une cuillère thermofuge pour submerger tous les flocons et assurer un contact uniforme avec l'huile chaude. La couleur s'amplifiera de rouge vif à rouge brique foncé en 30 secondes. Laisser reposer l'huile et refroidir à température ambiante, puis remuer la sauce de soja si vous préférez l'ajouter à ce stade pour une saveur plus propre. Transférer dans un pot propre.",
      "visualCue": {
        "primaryTarget": "Le moment vertigineux du contact : des flocons rouge vif s'assombrissant presque instantanément en rouge brique, l'huile tournant un rouge ambré profond et translucide, avec une colonne de vapeur parfumée de chili montant du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile était trop fraîche lorsqu'elle était versée — seulement un léger étourdissement, les flocons à peine obscurcis, et l'huile reste une orange pâle et anémique plutôt qu'une rouge-brique profonde.",
            "action": "La saveur sera douce et la couleur faible. La prochaine fois, verser immédiatement après la déformation alors que l'huile est au-dessus de 120°C."
          },
          {
            "state": "Perfect",
            "description": "Un étourdissement fort et dramatique au premier contact, les flocons s'amplifient à rouge brique foncé en 10 secondes, l'huile tourne un bijou-comme rouge ambre, la cuisine se remplit de l'odeur de chili fleuri et d'anis étoilé.",
            "action": "Incorporer tous les flocons et laisser refroidir sans gêne. Transférer dans un pot à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "L'huile était trop chaude (au-dessus de 160°C) ou les flocons de chili trop fins — les flocons ont brûlé noir au point de contact, et l'huile sent brûlé plutôt que parfumé.",
            "action": "Verser l'huile dans un nouveau bol immédiatement pour arrêter la cuisson, laissant les flocons brûlés derrière. Goûtez l'huile : si elle est amère, elle est compromise. Utilisez de l'huile à basse température la prochaine fois."
          }
        ]
      },
      "feelCue": "Dans les secondes qui suivent le versage, penchez - vous légèrement en arrière: la vapeur qui s'élève du bol sera intensément parfumée avec du chili et des épices, assez tranchante pour faire arroser vos yeux si vous vous penchez de près. Cette intensité d'arôme est tout le point."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "bloomed_chili_oil",
        "ing_11"
      ],
      "outputState": "finished_chili_oil",
      "instructions": "Une fois l'huile refroidie à température ambiante, goûtez une petite quantité sur un morceau de riz blanc ou de pain. Ajuster avec du sel ou de la sauce de soja au besoin. L'huile finie doit goûter complexe et stratifiée : la chaleur de chili arrive en premier, suivie par le parfum d'épices profondes de l'anis étoilé et de la cannelle, puis la qualité subtile engourdissante du maïs poivré Sichuan. La sauce soja ajoute une richesse en umami de fond qui arrondit les bords. Conserver dans un pot scellé à température ambiante jusqu'à 1 mois ou réfrigéré jusqu'à 3 mois. La couleur s'amplifiera et la saveur se rafraîchira au cours de la première semaine — la plupart des producteurs d'huile de chili s'accordent pour dire qu'il est préférable après 24 à 48 heures de repos.",
      "visualCue": {
        "primaryTarget": "Une huile rouge brique profonde, légèrement visqueuse, avec des flocons de chili suspendus et des graines de sésame visibles à travers le verre du pot — une couleur comme des grenats foncés maintenus contre une lampe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile a un goût plat, huileux et légèrement épicé, sans couche ni complexe. La sauce de soja et les aromatiques n'ont pas eu le temps de s'intégrer.",
            "action": "Scellez le pot et laissez-le reposer 24 heures à température ambiante avant de juger — la saveur se développe significativement à mesure que les ingrédients pénètrent dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Complexe, stratifié, parfumé et profondément coloré. La chaleur est réelle et persistante mais pas brutale; les notes d'épices sont chaudes et aromatiques, l'umami une fondation subtile. Une cuillère améliore presque tout.",
            "action": "Conserver scellé et utiliser librement. Agiter ou remuer avant chaque utilisation lorsque les flocons et le sésame s'installent."
          },
          {
            "state": "Overdone",
            "description": "Sursautés ou sursautées, l'huile a surtout un goût de sel plutôt que de chili.",
            "action": "Ajouter plus d'huile neutre non aromatisée dans le pot, remuer et laisser rééquilibrer pendant la nuit. Le sel se diluera dans le volume supplémentaire."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt et touchez-le à l'extrémité de votre langue — la chaleur devrait se construire lentement sur 5 à 10 secondes, pas vous frapper instantanément. L'effet mala (numbing) du maïs poivré Sichuan devrait arriver en dernier, comme un léger et curieux picotement sur le devant de la bouche."
    }
  ]
};
