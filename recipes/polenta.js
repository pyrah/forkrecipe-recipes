export default {
  "repoId": "master_italian_polenta_001",
  "parentRepoId": null,
  "slug": "polenta",
  "author": "ForkRecipe Kitchen",
  "title": "Polenta",
  "description": "La farine de maïs s'émousse dans un tourbillon lent jusqu'à ce que les grains éclatent, gonflent et s'éloignent du pot en une seule masse brillante — patiente, dorée, et finie par un noeud de beurre et une tempête de fromage.",
  "cuisine": "Italien",
  "culture": "Friulian",
  "category": "grains",
  "tags": [
    "polenta",
    "Italien",
    "farine de maïs",
    "porridge",
    "confort",
    "technique"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau (ou moitié eau, moitié lait)",
      "ratioValue": 500,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger",
        "lait entier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de maïs grossière en pierre (polenta)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "polenta taragna (corn + sarrasin)",
        "farine de maïs moyenne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive extra vierge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Parmigiano-Reggiano (finement râpé)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano",
        "ans Montasio"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Lait entier (pour finir, en option)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "crème lourde"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner l'eau",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "salted_water",
      "instructions": "Versez l'eau dans un pot à fond lourd — le cuivre ou l'acier épais tient le mieux la chaleur et résiste à l'incinération. Ajouter le sel et laisser mijoter à feu moyen. L'eau doit être chaude et paresseusement vapeur, avec de petites bulles tremblant aux bords, PAS à un ébullition. Un ébullition violent fait des flings de maïs partout et les saisit en morceaux.",
      "visualCue": {
        "primaryTarget": "Les vagues de vapeur augmentent régulièrement et quelques petites bulles brisent la surface près du bord. Le sel s'est complètement dissous et l'eau se déplace avec une convection lente et vitreuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est chaude mais quand même, pas de vapeur, les grains de sel visibles sur le fond.",
            "action": "Gardez le chauffage et remuez une fois pour dissoudre le sel avant d'ajouter de la farine de maïs."
          },
          {
            "state": "Perfect",
            "description": "Chaud, mijotant doucement, un léger éclat de petites bulles autour du bord — un mijot « souriant », pas un ébullition.",
            "action": "Commence à rouler dans la farine de maïs."
          },
          {
            "state": "Overdone",
            "description": "Roulement, éclaboussure avec de grandes bulles éclatant sur toute la surface.",
            "action": "Abaissez la chaleur et laissez-la reposer pendant 30 secondes avant d'ajouter la farine de maïs, ou elle crache et s'agrippe."
          }
        ]
      },
      "feelCue": "Tenez votre main sur le pot — vous devriez vous sentir doux, même la chaleur et entendre un sifflement faible, et non le grondement fort d'un ébullition dur."
    },
    {
      "nodeId": "step_2",
      "action": "Pluie dans la farine de maïs",
      "inputs": [
        "salted_water",
        "ing_02"
      ],
      "outputState": "incorporated_slurry",
      "instructions": "Incorporer l'eau mijotante dans un tourbillon lent avec un fouet. Pendant qu'il tourne, ajoutez la farine de maïs dans une pluie mince et régulière de votre poing — ne la jetez jamais. Whisk constamment pendant que vous versez ainsi chaque grain se disperse avant les prochaines terres. Une fois que toutes les farines de maïs sont entrées, passer à une cuillère en bois robuste. Le mélange sera lâche et laiteux, comme de la crème fine.",
      "visualCue": {
        "primaryTarget": "Un lisier lisse, sans morceaux, versable, de couleur crème pâle. Le fouet laisse des sentiers momentanés qui se remplissent instantanément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des grumeaux visibles ou une peau sèche de farine de maïs flottant sur le dessus; le repas a été ajouté trop vite ou le fouet a cessé de bouger.",
            "action": "Il est difficile de se briser, alors qu'il est encore mince."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, soyeuse et juste-pure. Pas de poches sèches, pas de grumeaux, un léger arôme de maïs sucré qui monte.",
            "action": "Réduisez la chaleur à faible et déposez-la pour la cuisson lente."
          },
          {
            "state": "Overdone",
            "description": "Déjà raide et collant avant toute vraie cuisson, parce que trop de repas est entré trop tôt.",
            "action": "fouetter dans une éclaboussure d'eau chaude pour la desserrer vers un lisier versable."
          }
        ]
      },
      "feelCue": "Le fouet doit se déplacer librement avec presque aucune résistance, comme remuer la pâte. Si ça traîne si tôt, vous avez ajouté la farine de maïs trop rapidement."
    },
    {
      "nodeId": "step_3",
      "action": "Faire cuire lentement",
      "inputs": [
        "incorporated_slurry"
      ],
      "outputState": "cooked_polenta",
      "instructions": "Baissez la chaleur à son réglage le plus bas afin que la polenta blips plutôt que bouillir — une bulle épaisse devrait se lever et éclater toutes les quelques secondes, comme un pot de boue lent. Cuire 35-45 minutes, en remuant toutes les quelques minutes avec la cuillère en bois, en grattant le fond et les coins pour éviter les brûlures. La polenta est faite lorsque les grains ont perdu toute graisse et la masse tire proprement loin des côtés du pot que vous remuez.",
      "visualCue": {
        "primaryTarget": "Polenta épaisse, brillante et d'or profond qui fond sur la cuillère et s'éloigne de la paroi du pot en une seule feuille, exposant brièvement le fond avant de s'écouler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours soupeux et pâle; une cuillère frottée sur la lèvre du pot sent sablonneux et gritté entre les dents.",
            "action": "Continuez à cuisiner: les grains ont besoin de plus de temps et d'eau pour se gélatiniser complètement. Ajoutez une éclaboussure d'eau chaude si elle s'épaissit avant que le grain ne soit parti."
          },
          {
            "state": "Perfect",
            "description": "Spoon se tient un moment avant de tomber lentement. La polenta a un goût doux et doux sans grain, et la surface brille. Ça dérape du mur de pot.",
            "action": "Mantecatura — mélanger le beurre et le fromage."
          },
          {
            "state": "Overdone",
            "description": "Fendue, sèche et pâteuse, craquelant aux bords du pot, éventuellement avec une odeur brûlée du fond.",
            "action": "Incorporer l'eau chaude ou le lait un peu à la fois pour ramener une texture douce et fluide; ne grattez aucune couche brûlée."
          }
        ]
      },
      "feelCue": "L'agitation devient plus lourde minute par minute — au début la cuillère glisse, près de l'extrémité il laisse une vallée propre qui tient une seconde avant de fermer. Cette piste est votre minuterie."
    },
    {
      "nodeId": "step_4",
      "action": "Mantecatura",
      "inputs": [
        "cooked_polenta",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_polenta",
      "instructions": "Hors du feu, battre dans le beurre froid et râpé Parmigiano, en remuant vigoureusement jusqu'à ce que les deux fondent dans une crème brillante et unifiée. Pour une polenta douce à cuiller, desserrer avec le lait chaud jusqu'à ce qu'il s'effondre lentement de la cuillère. Goûtez et ajustez le sel. Servir à la fois dans des bols chauds et peu profonds — la polenta raidit rapidement au moment où elle refroidit.",
      "visualCue": {
        "primaryTarget": "Polenta lustrée, lisse et dorée qui coule dans un ruban lent et s'installe dans une piscine plate, avec un éclat riche et beurreux à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre et fromage s'assoient dans des stries visibles; la polenta est terne et mate plutôt que brillante.",
            "action": "Continuez à battre — la graisse doit être émulsifiée dans l'amidon. Un jet de lait chaud l'aide à se réunir."
          },
          {
            "state": "Perfect",
            "description": "Gloire et fluide, tenant un monticule doux qui se détend lentement à plat. Buttery et savory, avec le Parmigiano en arrière-plan.",
            "action": "Assiette immédiatement dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Épaisseur, raide et pâteux, tenant une forme dure et tournant le chewing-gum comme il est assis.",
            "action": "Battre dans du lait plus chaud ou de l'eau pour restaurer l'écoulement — la polenta douce devrait verser, pas rester debout."
          }
        ]
      },
      "feelCue": "Sur la langue il devrait être velouté et propre, jamais grainé ou crayeux. S'il enrobe votre palais comme de la pâte, desserrez-le avec du liquide chaud; s'il pool comme de la soupe, donnez-lui une minute à mettre."
    }
  ]
};
