export default {
  "repoId": "master_chinese_scallion_pancakes_001",
  "parentRepoId": null,
  "slug": "scallion-pancakes",
  "author": "ForkRecipe Kitchen",
  "title": "Pancakes d'oignons",
  "description": "Une pâte à eau chaude est roulée à plat, peinte avec de l'huile de sésame et du sel, recouverte de pétoncle, puis enroulée et laminée à nouveau — le même tour de laminage qu'un croissant, mais assez humble pour manger dans la rue. Le résultat est un pain plat feuilleté, croustillant et frit qui se brise à la première morsure en dizaines de couches séparées et parfumées.",
  "cuisine": "Chinois",
  "culture": "Rue de la Chine du Nord",
  "category": "breads",
  "tags": [
    "Chinois",
    "pain",
    "scalpel",
    "frites",
    "en couches",
    "Produits de la rue",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine polyvalente (farine plate)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "farine de pain (résultat chewier)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau bouillante (100 C)",
      "ratioValue": 130,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Saindoux pour une saveur plus riche"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalons (oignons de printemps), tranchés finement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "ruches"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour la friture (végétable ou colza)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel de mer pour la couche",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Sel de maldon"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "hot_water_dough",
      "instructions": "Placer la farine dans un bol et verser dans l'eau bouillante. Mélanger immédiatement avec un baguette ou une cuillère en bois en mouvements circulaires jusqu'à ce que l'eau soit absorbée et que le mélange ressemble à une masse bouillante. L'eau bouillante fait cuire partiellement l'amidon — cette gélatinisation rend la pâte pliable et le pancake mâche plutôt que la biscuité. Une fois assez frais pour être manipulé (environ 2 minutes), pétrir brièvement dans le bol jusqu'à ce qu'une pâte lisse se forme — environ 3 minutes. Il doit se sentir doux et légèrement collant.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et élastique qui est nettement plus douce et souple qu'une pâte à pain standard, presque à la soie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore dure, lugubre et larmes lorsqu'elle est tendue.",
            "action": "Knead pendant 2 minutes de plus — l'amidon gélatinisé a besoin de plus de travail pour devenir cohérent."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse et uniforme qui s'étire sans déchirer, douce au toucher et légèrement chaude.",
            "action": "Couvrir d'un chiffon humide et reposer pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Dough a été surcollé et est légèrement caoutchouteux, ressortant agressivement.",
            "action": "Couvrir et reposer pendant 20 minutes — le gluten se détendrea avant de rouler."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir nettement plus douce et plus productive que la pâte à pâtes — presque lobe d'oreille — avec une légère chaleur qui émane encore de l'amidon hydraté."
    },
    {
      "nodeId": "step_2",
      "action": "Façonner",
      "inputs": [
        "hot_water_dough",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "coiled_pancake",
      "instructions": "Divisez la pâte reposée en 4 morceaux égaux. Sur une surface légèrement huilée (non farinée), rouler chaque pièce dans un mince rectangle d'environ 3 mm d'épaisseur. Badigeonner généreusement d'huile de sésame à moins de 5 mm des bords. Scatter le sel et le pétoncle tranché uniformément à travers la surface, appuyant légèrement pour qu'ils adhèrent. Maintenant roulez le rectangle dans une bûche serrée du long bord, comme un rouleau suisse. Puis enroulez le grume dans une forme d'escargot serré et appuyez-le à plat avec votre paume. Rerouler le disque enroulé à environ 5 mm d'épaisseur. Cette double rotation est la technique qui crée la structure en couches.",
      "visualCue": {
        "primaryTarget": "Un disque plat d'environ 18 cm de diamètre avec des lignes en spirale visibles à la surface et des flocons de pétoncle vert pâle qui pèlent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le disque est trop épais (plus de 8 mm) et les couches sont trop comprimées — il sera pâteux plutôt que flocé.",
            "action": "Rouler plus fermement et uniformément, travailler du centre vers l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "Environ 5 mm d'épaisseur avec un motif en spirale clair sur la surface, souple et coopératif sous la goupille.",
            "action": "Fry immédiatement pour la définition de couche maximale."
          },
          {
            "state": "Overdone",
            "description": "La toux a été roulée si mince que les pétoncles éclatent à la surface.",
            "action": "Procédez prudemment — les couches sont toujours là, juste très bien. Manipulation délicate lors du transfert dans la casserole."
          }
        ]
      },
      "feelCue": "Le disque enroulé doit se sentir stratifié sous votre paume — appuyez dessus et vous pouvez sentir la structure en couches résister légèrement différemment qu'une pâte à feuille unique."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "coiled_pancake",
        "ing_06"
      ],
      "outputState": "finished_scallion_pancake",
      "instructions": "Chauffer une poêle lourde ou une poêle en fonte à feu moyen. Ajouter suffisamment d'huile neutre pour enrober le fond d'une couche de 2 mm. Lorsque l'huile mijote, ajouter un crêpe. Cuire 2 à 3 minutes du premier côté sans le déplacer — le dessous doit être doré et croustillant. Flipez et pressez légèrement avec une spatule pour encourager le contact avec la poêle. Cuire le deuxième côté pendant 2 minutes. Le crêpe est fait lorsque les deux côtés sont brun-or profond avec des bords foncés et croustillants et vous pouvez l'entendre craquer et siffler dans l'huile.",
      "visualCue": {
        "primaryTarget": "Les deux côtés profond doré-brun avec des bords plus foncés, dentelle-crisp. Les bulles de surface et les cloques légèrement. L'échalote apparaît vert vif dans la croûte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, doux quand pressé, pâteux au centre — l'intérieur n'est pas cuit.",
            "action": "Réduire le feu à moyen-doux, couvrir la casserole et cuire encore 2 minutes pour cuire l'intérieur sans brûler l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "Extérieur doré-brun profond, audiblement croustillant lorsqu'il est tapé avec une spatule, avec des couches visibles se séparant aux bords. À l'intérieur est mâché et cuit à travers.",
            "action": "Transfert sur une planche à découper. Couper en quartiers et manger immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Vertige brune foncée sur brûlé, odeurs d'huile de sésame brûlée, très rigide.",
            "action": "Encore comestible — l'omble ajoute une note fumée. Ne pas couvrir ou la vapeur ou vous perdrez la croustillant."
          }
        ]
      },
      "feelCue": "Une crêpe bien faite craque audiblement lorsqu'elle est pliée — les couches éclatent comme les pages d'un livre. Si elle s'incline silencieusement et s'incline, elle a besoin d'une minute de plus dans la casserole."
    }
  ]
};
