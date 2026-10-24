export default {
  "repoId": "master_indian_date_tamarind_chutney_001",
  "parentRepoId": null,
  "slug": "date-tamarind-chutney",
  "author": "ForkRecipe Kitchen",
  "title": "Date Tamarind Chutney",
  "description": "L'âme douce-sour du chaat — un chutney indien épais et profondément coloré de dates de medjool, le tamarin aigre, et le jaggery cru équilibré avec le cumin, le gingembre et le chili. Il goûte de la complexité aigre du tamarin et de la douceur de date simultanément, rendant tout ce qu'il touche plus intéressant.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "condiments",
  "tags": [
    "Chutney",
    "indienne",
    "Tamarin",
    "date",
    "doux",
    "acide",
    "Chaat",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 2,
    "sour": 5,
    "bitter": 0,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Dates Medjool",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "figues séchées",
        "pruneaux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Pâte de tamarin (pure, sans pépins)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "concentré de tamarin, 30 g, dilué avec de l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre jaggé ou brut de canne",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun foncé",
        "sucre de palme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin au sol (rôti)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Gingembre moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de gingembre râpé frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Sel noir (kala namak)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Poudre de chili rouge (Kashmiri pour légère, Cayenne pour la chaleur)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Arroser et adoucir les dates",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "soaked_dates",
      "instructions": "Piquez les dates et déchirez-les en deux. Mettre dans une petite casserole à l'eau et laisser mijoter à feu moyen. Laisser mijoter de 8 à 10 minutes jusqu'à ce que les dates soient complètement douces, effondrées et presque dissoutes dans l'eau. Le liquide deviendra brun-ambre profond. L'objectif est d'hydrater complètement et de décomposer les dates afin qu'elles se mélangent à une texture complètement lisse - toutes les fibres résiduelles des dates sous-assouplies apparaîtront comme des cordes dans le chutney fini.",
      "visualCue": {
        "primaryTarget": "Les dattes se sont complètement effondrées, le liquide est brun-ambre profond et sirupeux, et la chair de la datte s'effondre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les dattes tiennent encore leur forme et n'ont que légèrement ramolli. Le liquide mijotant est pâle et mince.",
            "action": "Continuer à mijoter et appuyer sur les dates avec une cuillère pour encourager la panne. Elles doivent être dissoutes."
          },
          {
            "state": "Perfect",
            "description": "Les dates se sont désintégrées dans le liquide. Le mélange est épais, jammy, et la surface entière bulle doucement avec une couleur brun caramel.",
            "action": "Ajouter la pâte de tamarin et le jaggery dans la prochaine étape."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a été réduit trop loin et le mélange de date est en train de brûler au fond de la casserole.",
            "action": "Retirer du feu, ajouter une éclaboussure d'eau et racler le fond pour desserrer tout fond avant de procéder."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de date contre le côté de la casserole avec une cuillère — il devrait donner et frotter complètement sans résistance, comme le beurre doux. N'importe quel ressort signifie qu'il a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter de tamarin et d'épices",
      "inputs": [
        "soaked_dates",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "cooked_chutney",
      "instructions": "Ajouter la pâte de tamarin, le cumin moulu, le gingembre moulu, le sel noir, le sel ordinaire et la poudre de chili. Bien mélanger pour dissoudre le jaggery et incorporer le tamarin. Laisser mijoter à feu moyen-doux encore 8 à 10 minutes, en remuant fréquemment. Le chutney s'obscurcit, s'épaissit, et le bord cru des épices s'assouplit. Le tamarin et le jaggery s'intégreront pleinement, créant cet équilibre caractéristique du chutney chaat : doux-premier, aigre-fin, avec des épices chaudes et une chaleur douce en arrière-plan.",
      "visualCue": {
        "primaryTarget": "Un chutney épais, foncé, brun acajou qui bulle paresseusement et enveloppe la cuillère dans une couche lourde et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore mince et un peu aqueux, avec le bord brut et tranchant de la pâte de tamarin clairement détectable et le jaggery pas complètement dissous.",
            "action": "Laisser mijoter plus longtemps et remuer. La transformation de mince et nette à épaisse et complexe demande du temps."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, complexe. Le doux et aigre arrivent simultanément. Une goutte sur une plaque froide tient sa forme pendant un moment avant de s'étendre lentement.",
            "action": "Retirer du feu et mélanger jusqu'à lisse."
          },
          {
            "state": "Overdone",
            "description": "Chutney a réduit à une pâte très épaisse, collant fortement à la cuillère. Il sera trop concentré et intensément sucré.",
            "action": "Ajouter 30 à 40 g d'eau, fouetter vigoureusement à feu doux pour réincorporer et vérifier la consistance."
          }
        ]
      },
      "feelCue": "Le chutney chaud doit sentir simultanément l'aurore propre du tamarin, le caramel à sucre foncé et la fumée de terre du cumin rôti. Goûtez-le et remarquez la séquence : la richesse sucrée, puis le tamarin aigre fleurissent, puis la chaleur du cumin, puis la chaleur très douce sur la finale."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange et déformation",
      "inputs": [
        "cooked_chutney"
      ],
      "outputState": "finished_date_tamarind_chutney",
      "instructions": "Laisser refroidir le chutney 5 minutes, puis mélanger avec un mélangeur d'immersion ou dans un mélangeur debout jusqu'à ce qu'il soit complètement lisse. Passez à travers un tamis à mailles moyennes, en poussant avec une louche pour enlever les peaux de dattes ou les fibres. Le chutney fini devrait être versable, complètement lisse, et la couleur de l'acajou foncé avec un reflet de miroir. Goûtez encore une fois – ajustez le sel, le jaggery et le tamarin pour équilibrer. Laisser refroidir complètement, puis mettre en bouteille ou réfrigérer. Conserver au réfrigérateur pendant 3 à 4 semaines. Utiliser sur les samosas, les papadi chaat, les dahi puri, ou tourner dans le yogourt.",
      "visualCue": {
        "primaryTarget": "Un chutney lisse, brun acajou profond et brillant qui coule dans un courant lent et continu. Surface miroir sans texture fibreuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours en croûte avec des fibres de date et une surface rugueuse. La pression n'a pas été complète.",
            "action": "Passez à nouveau dans le tamis, appuyez fermement sur la louche. Prenez votre temps — la texture finale définit la qualité du chutney."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, de couleur profonde, verse magnifiquement. Chaque composant est en équilibre. Une cuillère sur le chaat crée le contraste sucré-sour qui définit le plat.",
            "action": "Laisser refroidir et réfrigérer dans un pot."
          },
          {
            "state": "Overdone",
            "description": "Conservé trop longtemps, le chutney s'est épaissi jusqu'à une pâte au réfrigérateur et l'acidité du tamarin est devenue dominante.",
            "action": "Chauffer doucement, remuer dans un petit jet d'eau et ajouter une pincée plus jaggée pour rééquilibrer la douceur."
          }
        ]
      },
      "feelCue": "Le chutney à tamarin à date fini doit couler d'une cuillère dans un ruban non cassé, enrobant le dos sans goutter — comme un caramel très fluide. Il devrait laisser votre bouche goûter quelque chose de sombre, complexe, et stratifié — doux, aigre, et chaud dans une séquence qui continue de répéter au fur et à mesure que la saveur se développe."
    }
  ]
};
