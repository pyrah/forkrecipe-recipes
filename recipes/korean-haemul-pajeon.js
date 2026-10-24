export default {
  "repoId": "master_korean_koreanhaemulpajeon_001",
  "parentRepoId": null,
  "slug": "korean-haemul-pajeon",
  "author": "ForkRecipe Kitchen",
  "title": "Coréen Haemul Pajeon",
  "description": "Un large pancake aux fruits de mer dorés et à l'oignon vert avec un extérieur croustillant et un intérieur tendre et oeuvré, le genre de chose que chaque maison coréenne fait quand la première pluie de la saison tombe.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "coréen",
    "scalpel",
    "Crêpe",
    "crevettes",
    "croustillant",
    "Pajeon"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Oignons verts (cailles), parés à la longueur de la poêle",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "ruches",
        "poireaux minces"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Crevettes crues, pelées et hachées grossièrement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Anneaux de calmars",
        "Huîtres"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Calmars, nettoyés et coupés en anneaux",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "myes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Farine à usage général",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz sans gluten"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Farine de riz",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 180,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou maïs)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "sauce soja (pour tremper la sauce)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "vinaigre de riz (pour tremper la sauce)",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Gochugaru (Flacons de chili coréens, pour tremper)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de chili rouge"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Sweetener",
      "name": "Sucre (pour tremper la sauce)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_06",
        "ing_09"
      ],
      "outputState": "pajeon_batter",
      "instructions": "Mélanger la farine et la farine de riz dans un grand bol. Battre les œufs séparément dans l'eau glacée, puis verser dans la farine. Mélanger avec des baguettes ou une fourchette jusqu'à ce qu'elle soit simplement combinée — les morceaux sont fins et même désirables; le surmélange développe du gluten qui rend le pancake croustillant plutôt que croquant. La pâte doit être la consistance de la crème fine. L'eau froide est critique : pâte froide = pajeon croustillant.",
      "visualCue": {
        "primaryTarget": "Une pâte un peu bosselée et fine qui coule facilement de la cuillère dans un ruisseau mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche encore visibles; pâte inégale.",
            "action": "Remuer encore 5 fois, mais pas plus — quelques poches sèches sont acceptables."
          },
          {
            "state": "Perfect",
            "description": "La plupart lisse avec des morceaux mineurs, la couleur de la crème lourde. Il coule facilement mais pas aussi mince que l'eau.",
            "action": "Ajouter immédiatement les fruits de mer et les oignons verts."
          },
          {
            "state": "Overdone",
            "description": "La batterie est surmélangée et complètement lisse avec une élasticité visible au gluten ; elle fera un pancake pancake panifiable.",
            "action": "Laisser refroidir au congélateur pendant 15 minutes pour détendre le gluten avant utilisation."
          }
        ]
      },
      "feelCue": "La pâte au pajeon bien froide devrait se sentir presque froide lorsque vous passez votre main à travers elle — la température froide est ce qui fait la différence entre un crêpe croustillant et un crêpe doux et vapeur."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "pajeon_batter",
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "assembled_pajeon_batter",
      "instructions": "Pliez les oignons verts (dans le sens de la longueur si possible), les crevettes et les calmars dans la pâte. La pâte devrait juste tout enrober — vous devriez être en mesure de voir les oignons verts distinctement à travers la pâte, pas enterré sous un revêtement épais. Préparer la sauce à tremper en combinant la sauce soja, le vinaigre de riz, le sucre et le gochugaru dans un petit bol.",
      "visualCue": {
        "primaryTarget": "Les oignons verts sont visibles et distincts dans la pâte, avec des fruits de mer distribués uniformément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie ne recouvre pas les garnitures; elles sont sèches et tombent du crêpe.",
            "action": "Ajouter 1-2 c. à soupe plus de pâte et plier doucement."
          },
          {
            "state": "Perfect",
            "description": "Tout est uniformément recouvert d'une fine pâte. Les oignons verts sont visibles et parallèles. Les fruits de mer sont distribués uniformément.",
            "action": "Cuire immédiatement — ne laissez pas la pâte reposer avec les fruits de mer à l'intérieur, ou il va arroser."
          },
          {
            "state": "Overdone",
            "description": "Les fruits de mer sont trop longtemps en pâte et ont libéré de l'eau, éclaircissant la pâte de façon significative.",
            "action": "Égoutter tout excès de liquide et ajouter une cuillère à soupe de farine pour rétablir la consistance."
          }
        ]
      },
      "feelCue": "La pâte avec des garnitures doit se sentir pleine et légèrement lourde — chargée d'ingrédients, mais toujours versable et cohésive, ne s'agrippant pas dans une masse solide."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "assembled_pajeon_batter",
        "ing_08",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_haemul_pajeon",
      "instructions": "Chauffer une grande poêle antiadhésive ou en fonte (25 à 30 cm) à feu moyen-vif jusqu'à très chaud. Ajouter 3 c. à soupe de l'huile — elle devrait mijoter immédiatement. Verser toute la pâte à la fois et la répartir rapidement en rond en utilisant l'arrière d'une cuillère. Réduire le feu à moyen. Appuyez fermement sur le crêpe avec une spatule chaque minute pour le compresser et encourager le contact avec la poêle. Cuire 5 à 6 minutes jusqu'à ce que le dessous soit profondément doré et croustillant. Arrosez le reste de l'huile autour des bords. Flip dans un mouvement décisif et appuyez à nouveau fermement. Cuire 3-4 minutes sur le deuxième côté. Servir immédiatement, couper en quartiers, avec la sauce à tremper.",
      "visualCue": {
        "primaryTarget": "Un crêpe brun-or avec des bords carbonisés visibles, la surface tachetée d'oignon vert et de crevettes roses, croustillant au robinet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessous est d'or pâle et doux; le crêpe dévie plutôt que de résister lorsqu'il est tapé. Il déchirera quand il sera retourné.",
            "action": "Cuire encore 2 minutes à feu moyen. Utilisez une spatule pour soulever doucement un bord et confirmer la couleur."
          },
          {
            "state": "Perfect",
            "description": "Le dessous est profond, même doré, presque acajou aux bords. Le crêpe sonne creux quand tapoté avec un joint. Soulève proprement de la casserole.",
            "action": "Dépliez de façon décisive dans un mouvement. Appuyez immédiatement avec la spatule."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont noircis et le fond sent fortement l'huile brûlée.",
            "action": "Flipez immédiatement et réduisez la chaleur. Le deuxième côté fera cuire dans 2 minutes."
          }
        ]
      },
      "feelCue": "Tapez la surface de la crêpe avec votre knuckle — un pajeon parfaitement cuit doit sembler légèrement creux et se sentir ferme sous le robinet, comme frapper sur une table en bois plutôt qu'un livre doux."
    }
  ]
};
