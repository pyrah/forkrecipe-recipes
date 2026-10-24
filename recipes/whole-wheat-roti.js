export default {
  "repoId": "master_indian_wholewheatroti_001",
  "parentRepoId": null,
  "slug": "whole-wheat-roti",
  "author": "ForkRecipe Kitchen",
  "title": "Roti de blé entier (Chapati)",
  "description": "Le pain plat de blé entier non levain pétri à une pâte souple, roulé du papier-fin, et cuit sur un tawa jusqu'à ce qu'il souffle dans un ballon plein de vapeur piégée — noix, sain, et la lumière impossible.",
  "cuisine": "Indiens",
  "culture": "Cuisine maison nord-indienne",
  "category": "breads",
  "tags": [
    "pourri",
    "Chapitre",
    "indienne",
    "Pain plat",
    "blé entier",
    "sans levain",
    "tawa",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Atta (farine de blé entier indienne)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de pâte de blé entier",
        "50 % AP + 50 % blé entier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre ou ghee (facultatif)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Ghee pour brossage (finish)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre",
        "Huile d'olive"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "roti_dough",
      "instructions": "Mélanger atta, sel et huile en option dans un grand bol. Ajouter l'eau tiède graduellement, mélanger avec votre main pendant que vous versez, jusqu'à ce qu'une pâte se forme. Agenouillez le bol de 8 à 10 minutes, tricotez la pâte avec le talon de votre main et repliez-la à plusieurs reprises. Le but est une pâte très douce — plus douce que la pâte à pain, presque comme Play-Doh — sans larmes lorsqu'elle est tendue.",
      "visualCue": {
        "primaryTarget": "Une boule lisse, très douce, légèrement collante de pâte avec une surface uniforme et sans fissures visibles ni taches sèches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est raide, craque lorsqu'elle est pliée, elle est sèche. Trop peu d'eau.",
            "action": "Ajouter de l'eau une cuillère à café à la fois, pétrir entre les deux, jusqu'à ce que la pâte atteigne la douceur Play-Doh."
          },
          {
            "state": "Perfect",
            "description": "Silence douce, très douce. Ne laisse pas de pâte sur tes mains quand tu t'éloignes. Ne colle pas au bol. Presque comme un oreiller.",
            "action": "Couvrir d'un chiffon humide et reposer 15 à 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "La toux est collante et humide, s'accroche aux mains et au bol.",
            "action": "Poussière avec une petite quantité d'atta et pétrir. Ajouter seulement 1 cuillère à café à la fois."
          }
        ]
      },
      "feelCue": "Appuyez profondément sur votre pouce dans le centre de la boule de pâte — il devrait laisser une indentation lisse et propre qui se remplit lentement à mi-chemin sur 3 secondes. Ce ressort-retour exact est la signature de la pâte roti correctement hydratée."
    },
    {
      "nodeId": "step_2",
      "action": "Façonner",
      "inputs": [
        "roti_dough"
      ],
      "outputState": "rolled_rotis",
      "instructions": "Après le repos, divisez la pâte en boules égales de 10 à 12, roulant chacune lisse entre vos paumes. Sur une planche légèrement farineuse, rouler chaque boule dans un disque mince, même d'environ 20 cm de diamètre. Travaillez du centre vers l'extérieur, en tournant le disque un quart de tour après chaque rouleau. L'épaisseur idéale est de 1,5 à 2 mm.",
      "visualCue": {
        "primaryTarget": "Une épaisseur uniforme, même ronde, d'environ 20 cm et 1,5–2 mm, sans centre épais ni bords fins.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Disque épais et inégal avec un centre en dôme. Elle cuisine mal.",
            "action": "Appliquer plus de pression et de roulis du centre vers l'extérieur, pas seulement vers l'avant et vers l'arrière."
          },
          {
            "state": "Perfect",
            "description": "Même, disque mince qui tient presque sa forme circulaire sans ressort. Faint atta poussière sur la surface.",
            "action": "Cuire immédiatement — ne laissez pas les rotis roulés s'asseoir longtemps avant de cuisiner."
          },
          {
            "state": "Overdone",
            "description": "Roulé trop mince et déchiré dans des endroits.",
            "action": "Patch en pressant les bords déchirés à nouveau ensemble. Les larmes mineures ne sont pas visibles dans le roti fini."
          }
        ]
      },
      "feelCue": "Prenez le roti roulé et laissez-le draper sur votre paume — il devrait être suffisamment souple pour accrocher lâchement sans déchirer, comme un chiffon chamois doux drapé sur le dos d'une chaise."
    },
    {
      "nodeId": "step_3",
      "action": "Faire griller",
      "inputs": [
        "rolled_rotis",
        "ing_05"
      ],
      "outputState": "finished_roti",
      "instructions": "Chauffer une poêle en tawa ou en fonte sèche à feu vif jusqu'à très chaud. Placez un roti roulé sur la surface sèche. Après 30 secondes, lorsque la surface devient mate et que de petites cloques commencent à apparaître, retourner. Après 30 secondes supplémentaires sur le deuxième côté, retourner directement sur une flamme ouverte (bouilloire à gaz) ou presser avec un chiffon replié — le roti soufflera dans un ballon complet à mesure que la vapeur s'étend à l'intérieur. Retirer et brosser immédiatement avec le ghee.",
      "visualCue": {
        "primaryTarget": "Un ballon roti entièrement gonflé avec des taches brun clair et quelques taches d'omble plus foncé de la flamme. S'effondre doucement lorsqu'il est retiré de la chaleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roti n'a pas gonflé. Pale et pâteux. N'a pas développé de cloques avant d'être placé sur la flamme.",
            "action": "Le tawa doit être plus chaud. Assurez-vous également que le roti a été correctement roulé mince et reposé avant la cuisson."
          },
          {
            "state": "Perfect",
            "description": "Ballon entièrement gonflé avec un léger marbré doré et quelques taches sombres de la flamme. S'effondre doucement en appuyant. Des odeurs de blé grillé.",
            "action": "Badigeonner immédiatement le ghee pendant qu'il est chaud. Empiler dans un plat de casserole doublé d'un chiffon."
          },
          {
            "state": "Overdone",
            "description": "Morceaux brun foncé, bords raides. A séché de trop longtemps sur la chaleur.",
            "action": "Enveloppez immédiatement dans un chiffon humide pour le ré-souvent. Mangez dans 5 minutes."
          }
        ]
      },
      "feelCue": "Un roti fraîchement fait a encore de la chaleur que vous pouvez sentir à travers un chiffon — le ramasser et il devrait sentir aussi léger qu'une feuille de papier, mais résistant. Pliez-le en deux et puis en quartiers; s'il craque, la pâte était trop sèche ou la chaleur trop élevée. Si elle se replie silencieusement, le roti est parfait."
    }
  ]
};
