export default {
  "repoId": "master_american_caesar_salad_001",
  "parentRepoId": null,
  "slug": "caesar-salad",
  "author": "ForkRecipe Kitchen",
  "title": "Salade de César",
  "description": "Tijuana par le biais d'Hollywood — la romaine intérieure croquante jetée à la table dans une émulsion ail-anchois-egg qui s'accroche à chaque feuille, l'ensemble est enchevêtré de parmesan vieilli et de croûtons craquant avec l'huile d'olive et l'ail.",
  "cuisine": "Américain",
  "culture": "Cal-Mex / Hollywood",
  "category": "vegetables",
  "tags": [
    "césar",
    "salade",
    "romaine",
    "anchois",
    "parmesan",
    "émulsion",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 3,
    "bitter": 2,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Coeurs romains (froids, croustillants, intérieurs)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "petite laitue gemme"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousse d'ail",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Filets d'anchois emballés en huile",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé de pâte d'anchois par 2 filets"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaune d'œuf en coque (ou jaune pasteurisé)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à soupe de mayonnaise par jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "sauce Worcestershire",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Moutarde de Dijon",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "huile neutre pour une vinaigrette plus douce"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano (finement râpé, plus les copeaux)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano",
        "Pecorino Romano (saltier)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Starch",
      "name": "Pain rustique vieux d'un jour, cube (pour croûtons)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâtes alimentaires",
        "Ciabatta"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Poivre noir, grossièrement craqué",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_10",
        "ing_08",
        "ing_02"
      ],
      "outputState": "garlic_croutons",
      "instructions": "Mélanger les cubes de pain avec une partie de l'huile d'olive et une gousse d'ail cassée, assaisonner d'un peu de sel et les étaler sur une casserole. Cuire à 190 °C / 375 °F pendant 12 à 15 minutes, en jetant une fois à mi-chemin, jusqu'à ce que l'or profond et croustillant à travers le centre. Jeter la gousse d'ail. Laissez-les refroidir sur la poêle pour qu'ils craquent et restent croquants.",
      "visualCue": {
        "primaryTarget": "Les croûtons sont un brun-or même profond partout, brillant avec de l'huile, et hochet contre la poêle quand vous secouez.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes sont pâles et ne sont colorés qu'aux bords; les centres sont encore doux et panifiables.",
            "action": "Retournez au four et vérifiez toutes les 3 minutes — ils croquant rapidement à la fin. Des croûtons mous sèment la vinaigrette."
          },
          {
            "state": "Perfect",
            "description": "Uniforme en or profond, croquant et clair, sentant l'ail grillé et l'huile d'olive. Un cube s'éclate proprement quand il est pressé.",
            "action": "Tirez-les et refroidissez-les. Jetez l'ail avant qu'il crache."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé à noir et la cuisine sent l'ail brûlé.",
            "action": "Choisissez les cubes les plus brûlés; ils ont un goût amer. Abaissez le four à 15°C et surveillez attentivement le lot suivant."
          }
        ]
      },
      "feelCue": "Un crouton fini doit être léger dans la main et se briser avec une fissure audible — pas de mâcher, pas de donner au milieu."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "anchovy_garlic_paste",
      "instructions": "Dans un large saladier en bois (ou un mortier), écraser le reste de l'ail avec les filets d'anchois et une pincée de sel, broyer contre le bois avec le dos d'une fourchette jusqu'à ce que vous ayez une pâte beige lisse et collante sans morceaux visibles. Le sel agit comme abrasif; les anchois se dissolvent presque entièrement. Cette pâte est l'épine dorsale savoureuse de la vinaigrette.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, lustrée, brun pâle frottée sur le fond du bol, sans morceaux reconnaissables d'anchois ou d'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des taches visibles d'ail et des bouts d'anchois à cordes; la pâte semble épaisse et humide.",
            "action": "Continuer à broyer et appuyer sur le bol. Ajouter quelques grains de sel pour une abrasion supplémentaire jusqu'à ce qu'il devienne uniformément lisse."
          },
          {
            "state": "Perfect",
            "description": "Une pâte cohésive et satinée qui sent l'ail et la mer.",
            "action": "Passer au fouet dans le jaune d'œuf et les acides."
          },
          {
            "state": "Overdone",
            "description": "Vous moudrez beaucoup plus d'ail que la recette n'exige et ça sent dur et chaud.",
            "action": "Il n'y a pas de désenroulement; équilibrer plus tard avec du citron supplémentaire et une touche plus de jaune et d'huile pour le moeller."
          }
        ]
      },
      "feelCue": "La pâte doit être collante et collée à la fourchette. Elle sentira une odeur agressivement piquante, que la netteté adoucit une fois qu'elle rencontre l'œuf, le citron et le fromage."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "anchovy_garlic_paste",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "caesar_dressing",
      "instructions": "Faire fouetter le jaune d'oeuf coiffé, le jus de citron, le Worcestershire et Dijon dans la pâte anchois-ail jusqu'à ce qu'ils soient lisses et pâles. Puis, fouettant constamment, arrosez dans le reste de l'huile d'olive dans un cours d'eau mince afin qu'il émulsifie dans une vinaigrette crémeuse et versable — mince comme du miel froid, pas raide comme de la mayonnaise. Dans la moitié du parmesan râpé. Bouche : il doit être fortement tannant, salé et salé. Ajuster avec plus de citron pour la luminosité ou l'huile pour adoucir.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette lisse, pâle et satinée qui enveloppe l'arrière d'une cuillère et rubans lentement hors du fouet, la couleur de la crème de caramel doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange semble cassé ou huileux, avec des léchers d'huile d'olive flottant séparément sur le dessus.",
            "action": "Arrête d'ajouter de l'huile. fouetter dur pour le ramener, ou fouetter dans une cuillère à café d'eau froide; reprendre l'huile plus lentement une fois qu'il réémulsionne."
          },
          {
            "state": "Perfect",
            "description": "Uniquement crémeux et émulsifié, brillant, juste assez épais pour s'accrocher à une cuillère et verser dans un ruban. Goûtez vif, salé et profondément salé.",
            "action": "Frottez dans le parmesan, vérifiez l'assaisonnement et déplacez-vous pour habiller les feuilles."
          },
          {
            "state": "Overdone",
            "description": "La vinaigrette est rigide et collante, trop épaisse pour verser et déguster plat et lourd.",
            "action": "Allongez-vous avec du jus de citron ou un peu d'eau et rééquilibrez le sel et l'acide."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers elle — la vinaigrette devrait lentement remplir le canal à nouveau. Sur la langue, il a un goût presque trop poinçonné, seul; la laitue molle l'équilibrera."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "caesar_dressing",
        "ing_01",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_caesar_salad",
      "instructions": "Attachez la romaine froide en gros morceaux ou laissez les petites feuilles intérieures entières. Ajouter dans le bol avec la vinaigrette et mélanger soigneusement avec les mains ou les pinces, lever du fond, jusqu'à ce que chaque feuille soit brillamment brillante et légèrement enduite — non noyée. Ajouter les croûtons et la plupart du parmesan restant et jeter une fois de plus. Assiette, terminer avec des copeaux de parmesan et une lourde fissure de poivre noir. Servir immédiatement pendant que les feuilles sont croustillantes et que les croûtons craquent encore.",
      "visualCue": {
        "primaryTarget": "Chaque feuille porte un pansement mince, même éclatant, avec des câlins au fromage; les croûtons sont cloués et le bol entier brille sans se mettre en commun au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sec, taches pâles sur les feuilles et desserrer le pansement au fond du bol.",
            "action": "Continuez à jeter et à soulever du bas afin que le pansement se redistribue; les feuilles devraient ramasser ce qui est mis en commun."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont uniformément enduites et brillantes mais restent croustillantes, avec du fromage pris dans chaque pli et des croûtons uniformément mélangés.",
            "action": "Assiette à la fois, raser plus de parmesan, craquer le poivre et servir."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles sont lourdes, molles et lissées, coulissantes dans une masse humide avec des croûtons soyeux.",
            "action": "Ajouter une poignée de romaines et de croûtons secs frais pour absorber l'excédent; servir immédiatement avant qu'il se flétrisse davantage."
          }
        ]
      },
      "feelCue": "Une feuille parfaitement habillée s'incline mais s'éclate encore avec une croûte juteuse. Écoutez les croûtons qui craquent au fur et à mesure que vous lancez — ce son disparaît dès qu'ils s'évanouissent, alors mettez-les à l'instant où la salade se réunit."
    }
  ]
};
