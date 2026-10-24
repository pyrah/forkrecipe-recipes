export default {
  "repoId": "master_indian_khichdi_001",
  "parentRepoId": null,
  "slug": "khichdi",
  "author": "ForkRecipe Kitchen",
  "title": "Khichdi",
  "description": "Le riz et le dal jaune de lune cuit ensemble jusqu'à un tout doux, en forme de porridge, trempé avec une cuillère à cuillers de ghee, de cumin et de curcuma — la grande nourriture de confort indienne, réparatrice et profondément nourrissante, également à la maison, un jour de maladie ou une table de fête.",
  "cuisine": "Indiens",
  "culture": "Panindien",
  "category": "grains",
  "tags": [
    "khichdi",
    "dal",
    "riz",
    "indienne",
    "confort",
    "végétarien",
    "un seul pot",
    "ayurvédique"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz basmati",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "riz à grains courts (résultats plus crémeux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Jaune de lune, fendue et coquillée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "lentilles rouges (masoor dal)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Ghee",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre non salé",
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Asafoetida (hing)",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": [
        "omettre si elle n'est pas disponible"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Chili vert, fente longitudinale",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour une version plus légère"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "stock de légumes légers"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.06,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "menthe fraîche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "rinsed_rice_and_dal",
      "instructions": "Mélanger le riz et le dal de lune dans un bol. Couvrir d'eau froide et suer doucement. L'eau deviendra blanche trouble avec l'excès d'amidon. Égoutter et répéter 3 à 4 fois jusqu'à ce que l'eau soit presque dégagée. Faire tremper le mélange rincé dans de l'eau froide fraîche pendant 20 à 30 minutes. Le bain de dal réduit son temps de cuisson et produit une texture plus crémeuse et plus uniforme. Égoutter avant la cuisson.",
      "visualCue": {
        "primaryTarget": "L'eau de rinçage passe de blanc crayeux dense à légèrement nuageux. Les grains et le dal sont visiblement hydratés et légèrement translucides après trempe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore épaisse et blanche laiteuse après 3 rinçages. Les grains sont encore secs et durs.",
            "action": "Continuez à rincer. L'excédent d'amidon de surface fera le khichdi collant sinon enlevé."
          },
          {
            "state": "Perfect",
            "description": "L'eau n'est que faiblement nuageuse. Le riz et le dal ont absorbé un peu d'eau et se sentent légèrement gonflés. Une petite pression révèle une légère douceur à la surface.",
            "action": "Égoutter et faire fleurir la tarka immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont trempés depuis plus d'une heure et ils sentent un faible creux ou fermentés.",
            "action": "Égoutter et cuire immédiatement. Le khichdi sera toujours délicieux et cuisinera encore plus vite."
          }
        ]
      },
      "feelCue": "Le dal de lune rincé et trempé devrait se sentir comme de petits oreillers doux entre vos doigts — pas plus les grains durs et en croûte qu'ils étaient secs. Les grains de riz doivent encore se sentir légèrement fermes mais clairement hydratés."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "tarka",
      "instructions": "Dans un poêlon lourd ou une cuisinière à pression, faire chauffer le ghee à feu moyen jusqu'à ce qu'il mijote et qu'une goutte d'eau s'échauffe immédiatement. Ajouter les graines de cumin — elles doivent saper et s'assombrir en 20 à 30 secondes. Ajouter l'asafoetida; il moussera brièvement. Ajouter immédiatement le gingembre râpé et le chili vert fente. Incorporer pendant 30 secondes jusqu'à ce que le gingembre sente cuit et perde son dur bord brut. Ajouter le curcuma moulu, remuer pendant 10 secondes — le ghee deviendra jaune doré vif. La tarka est prête en moins de 2 minutes. Ne partez pas.",
      "visualCue": {
        "primaryTarget": "Ghee d'or jaune vif aux graines de cumin tachetées et foncées. Le gingembre commence à brunir aux bords et la tarka sent intensément la noix et l'aromatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de cumin n'ont pas bouché et sont encore pâles. Le ghee n'a pas encore infusé. La tarka sent cru et huileux, pas aromatique.",
            "action": "Attendez. Le ghee doit être assez chaud pour fleurir les graines de cumin avant d'ajouter les autres aromatiques. Si rien ne se passe en 30 secondes, augmentez la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Les graines de cumin sont brun foncé et parfumées. Asafoetida s'est dissoute dans le ghee. Ginger est parfumé et commence juste à devenir doré. La cuisine sent le cumin chaud, le gingembre frais et le beurre fondu.",
            "action": "Ajouter immédiatement le riz drainé et le dal et mélanger pour enrober."
          },
          {
            "state": "Overdone",
            "description": "Les graines de cumin sont passées du brun foncé au noir. Une odeur amère et acride. La tarka fume.",
            "action": "Retirer immédiatement du feu. Jeter et recommencer — le cumin brûlé donne une saveur dure et amère qu'aucune quantité de mijoter masquera."
          }
        ]
      },
      "feelCue": "Une tarka parfaite remplit la cuisine d'un nuage chaud, presque floral d'épices à quelques secondes du cumin qui frappe le ghee chaud. Elle doit sentir la noix, l'or et l'irrésistible — jamais tranchante, acride ou fumée."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "rinsed_rice_and_dal",
        "tarka",
        "ing_09",
        "ing_10"
      ],
      "outputState": "simmering_khichdi",
      "instructions": "Ajouter le riz égoutté et le dal dans le pot avec la tarka et remuer pour enrober chaque grain avec le ghee doré. Verser dans l'eau, ajouter le sel et remuer. Le rapport entre l'eau et le grain pour un khichdi mou de type porridge est d'environ 4:1; pour une texture de grain plus ferme et séparée, utilisez 3:1. Porter à ébullition, puis laisser mijoter au minimum. Couvrir et cuire de 20 à 25 minutes sur la cuisinière ou, si vous utilisez une cuisinière à pression, cuire à haute pression pendant 8 minutes. Le khichdi est fait lorsque le riz et le dal ont complètement fusionné en une masse unie, crémeuse, douce. Mélanger vigoureusement — il devrait ressembler à un porridge, pas comme du riz séparé et du dal.",
      "visualCue": {
        "primaryTarget": "Une masse douce, jaune doré, en forme de porridge où le riz et le dal ne sont plus individuellement identifiables. La surface scintille avec du ghee jaune curcuma.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de riz sont toujours intacts et croustillants. Dal est visible comme des grains séparés qui ne sont pas encore dissous. La texture est granuleuse plutôt que unifiée.",
            "action": "Ajouter plus d'eau et continuer à mijoter couvert. Le dal doit se décomposer complètement pour le vrai khichdi: la patience et l'humidité sont les outils."
          },
          {
            "state": "Perfect",
            "description": "Le riz et le dal ont fusionné en un tout cohésif et crémeux. La consistance est celle du porridge mou — il coule mais n'est pas bouillonnant. La couleur est jaune-or profond du curcuma.",
            "action": "Vérifiez le sel, puis passez à la finition du ghee."
          },
          {
            "state": "Overdone",
            "description": "Le khichdi est devenu très épais et commence à s'en tenir au fond. La consistance est presque solide.",
            "action": "Ajouter une louche d'eau chaude, remuer vigoureusement et cuire encore 2 minutes pour se détendre. Khichdi peut varier de assez épais à assez lâche — ajuster à votre préférence."
          }
        ]
      },
      "feelCue": "Le khichdi parfaitement cuit devrait se sentir velouté sur la langue sans limites de grains détectables, comme un porridge doux et chaud qui est féculent, doré et profondément salé. Si vous pouvez sentir des grains individuels, il faut plus de temps et peut-être plus d'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "simmering_khichdi",
        "ing_03",
        "ing_11"
      ],
      "outputState": "finished_khichdi",
      "instructions": "Goûtez le khichdi et le sel correct. Si elle s'est trop épaissie (khichdi continue toujours à épaissir comme elle est assise), ajouter l'eau chaude et remuer bien pour se détendre à une consistance versable, semblable au porridge. Dans une petite poêle ou directement dans une louche maintenue au-dessus de la flamme, chauffer un petit bouton de ghee jusqu'à ce qu'il mijote. Versez - le sur le khichdi dans un cours d'eau mince — il fera un étourdissement et s'accumulera à la surface. Dispersez la coriandre fraîche sur le dessus. Servir immédiatement avec du yogourt, du cornichon et du papad sur le côté.",
      "visualCue": {
        "primaryTarget": "Un bol d'or à la vapeur de khichdi crémeux avec une piscine de ghee aromatique en fusion qui brille à la surface et une coriandre verte éclatante éparpillée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ghee fini a été versé mais n'a pas étourdi — le khichdi n'est pas assez chaud. La coriandre a l'air terne et flétrie.",
            "action": "Retourner à feu moyen pendant 2 minutes en remuant, jusqu'à ce que la tuyauterie soit chaude. Ajouter une fraiche préparation de ghee et garnir juste avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Le ghee de finition s'étourne audiblement quand il frappe la surface chaude. Le khichdi est chaud, doré et brillant. Cilantro est vert vif et parfumé.",
            "action": "Servir immédiatement. Khichdi n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Le khichdi s'est assis trop longtemps et a séché en une masse très raide et solide. La coriandre s'est flétrie en gris.",
            "action": "Incorporer l'eau chaude ou le bouillon pour se détendre. Ajouter la coriandre fraîche. Ajoutez une seconde goutte de ghee pour restaurer la richesse. Réchauffez doucement."
          }
        ]
      },
      "feelCue": "Lorsque le khichdi chaud frappe la finale, fermez les yeux et respirez - ce moment de grésillement, de beurre aromatique sur curcuma chaud et de cumin est l'une des grandes odeurs simples dans la cuisine. Si la cuisine sent l'or et la noix, c'est fini."
    }
  ]
};
