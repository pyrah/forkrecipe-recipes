export default {
  "repoId": "master_chinese_bok_choy_oyster_sauce_001",
  "parentRepoId": null,
  "slug": "bok-choy-in-oyster-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Bok Choy en sauce à l'huître",
  "description": "Baby bok choy blanchi au vert jade brillant, agencé côté coupé, et laqué avec une sauce à l'huître brillante et ailky qui se met dans chaque crevasse. L'un des grands plats rapides cantonais — son succès est entièrement une question de ne pas trop cuire les verts d'une seule seconde.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "vegetables",
  "tags": [
    "Sans gluten",
    "cantonais",
    "sauté",
    "Vite",
    "côté"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Baby bok choy, moitié dans le sens de la longueur",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Shanghaï bok choy",
        "gai lan (brocoli chinois) — ajuster le temps blanc à 2 min"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce végétarienne aux huîtres (à base de champignons)",
        "sauce hoisine (sweeter)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, finement hachées (4 girofles)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Pâte d'ail"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil, son de riz ou graines de raisin)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, finement haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de gingembre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sauce de soja (légère)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari (sans gluten)",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Vin de riz rasoir (ou eau)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "eau"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Farine de maïs",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Amidon de tapioca",
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile de sésame grillée, pour finition",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_bok_choy",
      "instructions": "Portez un grand pot d'eau généreusement salée à un ébullition complet — le sel s'épanouit au fur et à mesure qu'il blanchit et aide à fixer sa couleur vert vif. Ajouter le côté coupé en bok choy et blanchir pendant exactement 60 à 90 secondes. Le timing est critique: trop court et les tiges sont crucieuses, trop longues et les feuilles deviennent drabes et les tiges sont molles et aqueuses. Les tiges doivent être croustillantes et les feuilles doivent être brillamment vertes et flétries.",
      "visualCue": {
        "primaryTarget": "Feuilles jade-vertes vivides entièrement flétries mais brillantes, tiges translucides et donnant simplement au bord d'un couteau. Pas de jaunissement ou de gris.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont encore sombres et raides, les tiges sont blanches au cœur.",
            "action": "Laisser dans l'eau encore 20 à 30 secondes. Ne partez pas."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont brillamment vertes et flétries, les tiges sont translucides et tendres avec une légère résistance lorsqu'elles sont mordues. La couleur est l'émeraude vive.",
            "action": "Égoutter immédiatement et disposer sur l'assiette de service."
          },
          {
            "state": "Overdone",
            "description": "Bok choy est passé d'un vert vif à un khaki-olive terne. Les tiges sont floppées et arrosées.",
            "action": "Égoutter immédiatement. Le plat est toujours comestible mais la texture et la couleur sont compromises. Réglez le timing la prochaine fois."
          }
        ]
      },
      "feelCue": "Ramassez une bok choy à moitié par l'extrémité de la tige, une blouse parfaitement blanchie tient sa forme mais se penche doucement lorsqu'elle est inclinée. Un sous-doré est raide et lourd; un surdoré s'effondre au virage."
    },
    {
      "nodeId": "step_2",
      "action": "Assemblage",
      "inputs": [
        "blanched_bok_choy"
      ],
      "outputState": "plated_bok_choy",
      "instructions": "Égoutter soigneusement le bok blanchi dans une calandre, agiter pour enlever l'excès d'eau — trop d'eau sur les légumes diluera la sauce. Arrangez-vous sur une assiette de service ou sur un plateau en une seule couche serrée, les feuilles s'aventurant vers l'extérieur et les extrémités pâles de la tige groupées au centre. Le placage cantonais de ce plat est délibérément formel : même l'arrangement signale le soin. Ne les empilez pas au hasard — la sauce se déverse sur le bok choy disposé et devrait glisser dans chaque face coupée.",
      "visualCue": {
        "primaryTarget": "Des moitiés de bok choy, des tiges centrées, des feuilles s'aventurant, vert vif sur la plaque. Pas d'eau commune visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bok choy est encore en train de s'égoutter et l'eau est mise en commun sur l'assiette.",
            "action": "Égoutter plus soigneusement dans la calandre avant de s'arranger. Blot avec serviette en papier si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Neat, arrangement sec, vert vif. Les visages blancs coupés sont visibles et prêts à recevoir la sauce.",
            "action": "Préparez la sauce immédiatement — le bok choy doit être servi chaud."
          },
          {
            "state": "Overdone",
            "description": "Le bok choy a refroidi trop longtemps et n'est plus à la vapeur.",
            "action": "Réchauffer rapidement en versant une petite louche d'eau bouillante très chaude sur elle avant d'appliquer la sauce."
          }
        ]
      },
      "feelCue": "Le bok choy disposé sur la plaque devrait encore sentir chaud à travers la plaque elle-même. La vapeur montant des faces coupées signifie que la chaleur résiduelle est au bon endroit."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_03",
        "ing_05",
        "ing_02",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "oyster_sauce_glaze",
      "instructions": "Chauffer l'huile neutre dans une petite casserole à feu moyen-vif jusqu'à ce qu'elle mijote. Ajouter l'ail haché et le gingembre tout en même temps — ils doivent cuillerer immédiatement. Remuer constamment pendant 30 à 45 secondes jusqu'à ce qu'ils soient parfumés et commencent juste à colorier — ne les laissez pas brûler. Ajouter la sauce huître, la sauce soja, le vin Shaoxing et le sucre. Remuer brièvement. Mélanger la fécule de maïs avec 2 cuillères à soupe d'eau froide pour former un lisier, puis verser dans la sauce en remuant. Cuire en remuant constamment pendant 30 à 40 secondes jusqu'à ce que la sauce devienne brillante et s'est légèrement épaissie jusqu'à une consistance fluide et laquée.",
      "visualCue": {
        "primaryTarget": "Sauce dorée et brun foncé qui coule lentement de la cuillère dans une feuille épaisse et uniforme. L'ail est visible sous forme de paillettes dorées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. La fécule de maïs n'est pas encore activée et l'ail sent cru.",
            "action": "Ajouter 30 secondes de plus. La sauce épaissit rapidement une fois l'amidon activé."
          },
          {
            "state": "Perfect",
            "description": "Sauce dorée, modérément épaisse, brun foncé avec des taches d'ail. Des chutes de la cuillère dans une cascade lente. Sensation intense de sauce aux huîtres et d'ail frit.",
            "action": "Versez immédiatement sur le bok choy arrangé."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue trop épaisse et collante, l'amidon a trop épais.",
            "action": "Ajouter une cuillère à soupe d'eau et remuer sur la chaleur pour se détendre à la bonne consistance."
          }
        ]
      },
      "feelCue": "La sauce doit être lustrée et lisse à l'arrière d'une cuillère en métal — faites glisser votre doigt dans le revêtement de la cuillère et la ligne doit tenir les bords propres sans courir."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "plated_bok_choy",
        "oyster_sauce_glaze",
        "ing_10",
        "ing_11"
      ],
      "outputState": "bok_choy_in_oyster_sauce",
      "instructions": "Verser la sauce chaude uniformément sur le bok choy disposé, en commençant par les extrémités de la tige et en descendant vers les feuilles. Chaque visage coupé devrait recevoir de la sauce. Arrosez l'huile de sésame grillée dans un zigzag mince et même sur le dessus. L'huile de sésame est un parfum de finition, pas une graisse de cuisson, et il devrait être la dernière chose appliquée. Scatter les graines de sésame grillées et servir en 2 minutes tandis que la sauce est chaude et le bok choy est encore à son plus vif. Ne couvrez pas le plat — la vapeur piégée rendra les feuilles molles et ternes.",
      "visualCue": {
        "primaryTarget": "Gleaming jade bok choy laqué avec une sauce foncée et brillante, des graines de sésame éparpillées sur le dessus. Le contraste de couleur entre les feuilles vert foncé et la sauce foncée est vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines moitiés de bok choy n'ont pas de sauce dessus. La sauce a été mise en commun à la base plutôt que d'enrober les légumes.",
            "action": "Inclinez légèrement l'assiette et cuillerez la sauce poêlée sur les parties nues."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce est uniformément vitrée. L'huile de sésame est parfumée, les graines de sésame ajoutent de la texture et le bok choy est brillamment vert sous la sauce.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le plat a été assis — le bok choy s'est flétri plus loin et est allé terne. La sauce a été absorbée et la surface semble sèche.",
            "action": "Servir comme il est — il est passé son premier visuellement mais toujours délicieux. La prochaine fois, quand la sauce finira comme le bok choy est plaqué."
          }
        ]
      },
      "feelCue": "Soulevez la plaque et sentez son poids — il doit se sentir plus lourd que prévu à partir du bok choy dense et juteux. L'arôme d'huile de sésame et de sauce aux huîtres doit être immédiat et fort."
    }
  ]
};
