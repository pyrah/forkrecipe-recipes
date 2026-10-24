export default {
  "repoId": "master_middle_eastern_zaatar_001",
  "parentRepoId": null,
  "slug": "zaatar-blend",
  "author": "ForkRecipe Kitchen",
  "title": "Mélange d'épices Za'atar",
  "description": "L'emblématique mélange d'herbes et d'épices de Levantine : thym séché et origan, sumac, graines de sésame grillées et sel – brassé dans l'huile d'olive, il devient un plongeon ; dispersé sur des pains plats, il devient un repas.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "zaatar",
    "lévantine",
    "Moyen-Orient",
    "d'épices",
    "herbe",
    "trempette",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
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
    "sour": 3,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Thym séché",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Marjoram séché",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "salé séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Sumac au sol",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Graines de sésame blanc",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de mer flocé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "crushed_herbs",
      "instructions": "Frottez le thym séché, l'origan et le marjoram entre vos paumes au-dessus du bol de mélange, appuyez fermement pour briser les feuilles en fragments grossiers et relâchez leurs huiles volatiles. Alternativement, donnez-leur un bref pouls dans un broyeur d'épices. Les herbes devraient conserver une certaine texture — ne pas les réduire à une poudre fine.",
      "visualCue": {
        "primaryTarget": "Herbes grossièrement cassées flocons avec des bords irréguliers, libérant un arôme concentré de plantes. La couleur s'éclaircit légèrement de gris-vert terne à vrai vert lorsque les parois cellulaires s'ouvrent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont toujours entières et rigides. Aucun arôme n'a été libéré — les huiles sont scellées à l'intérieur des feuilles intactes.",
            "action": "Frottez plus fermement et plus longtemps entre les palmiers. La friction brise les parois cellulaires et libère le thymol et d'autres aromatiques enfermés à l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Flocons irréguliers allant de fines miettes à des morceaux de 3 à 4 mm. L'arôme est lumineux, résineux et à base de plantes. Le bol sent comme une colline de Levantine après la pluie.",
            "action": "Ajouter le reste des ingrédients et mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les herbes ont été broyées à une fine poussière. Toute la texture est perdue et l'arôme commence déjà à se faner à mesure que les huiles volatiles s'évaporent.",
            "action": "Ajouter le sumac et le sésame immédiatement pour prolonger la durée de conservation des huiles. Le za'atar en poudre est toujours délicieux — utilisez - le rapidement."
          }
        ]
      },
      "feelCue": "Appuyez sur une pincée entre vos doigts — il devrait se sentir grossièrement texturé comme une chapelure séchée, et vos doigts devraient sortir légèrement parfumé avec l'huile de thym."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "ing_05"
      ],
      "outputState": "toasted_sesame",
      "instructions": "Placer les graines de sésame dans une poêle sèche à feu moyen. Faire cuire, agiter la poêle en continu, pendant 2 à 3 minutes jusqu'à ce que les graines soient dorées — elles s'assombrissent rapidement une fois qu'elles commencent à colorier. Retirer immédiatement dans une assiette pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Graines de sésame d'or uniforme avec un arôme chaud et noisette. Quelques-uns seront un peu plus sombres que les autres — c'est normal et ajoute de la complexité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore blanches et crues. Pas de changement de couleur, pas d'arôme de noix — juste une odeur de grain cru.",
            "action": "Continuer à feu moyen. Le moment où la couleur commence à se développer se déplace rapidement — regardez de près."
          },
          {
            "state": "Perfect",
            "description": "Léger à moyen doré. L'odeur est chaude, grillée et légèrement sucrée. Les graines apparaissent très légèrement dans la poêle.",
            "action": "Astuce immédiatement sur une assiette fraîche — ils continueront à cuire pendant 30 secondes à partir de la chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, quelques bords noirs. L'odeur est devenue amère et acride, comme du popcorn brûlé.",
            "action": "Jeter et recommencer avec des graines fraîches. Le sésame brûlé rendra le za'atar amer."
          }
        ]
      },
      "feelCue": "Mélangez une graine de sésame refroidie entre vos doigts – elle devrait être sèche et légèrement rugueuse, avec une chaleur détectable de griller encore rayonnant de la surface."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "crushed_herbs",
        "ing_04",
        "toasted_sesame",
        "ing_06"
      ],
      "outputState": "zaatar_blend",
      "instructions": "Mélanger les herbes concassées, le sumac moulu, les graines de sésame grillées et le sel dans le bol. Mélanger avec une cuillère ou agiter dans un pot scellé pour distribuer uniformément. Goûter — ajuster le sumac pour la tarte, le sel pour l'assaisonnement. Conserver dans un pot hermétique à l'abri de la lumière. Utiliser dans les 2 mois pour la saveur maximale.",
      "visualCue": {
        "primaryTarget": "Un mélange hétérogène de flocons d'herbes vertes, de sumac bourgogneux profonds, de graines de sésame d'ivoire et de cristaux de sel blanc — aucun ingrédient dominant à l'œil, les couleurs s'entremêlaient.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sumac s'est emparé d'un coin et les herbes sont regroupées séparément — le mélange n'est pas uniformément distribué.",
            "action": "Agiter vigoureusement le pot ou remuer pendant 30 secondes. Sumac est finement moulu et tend à s'agglutiner — assurez-vous que le bol est complètement sec avant de mélanger."
          },
          {
            "state": "Perfect",
            "description": "Un mélange aromatique uniformément mélangé. Chaque cuillère contient des fragments d'herbes visibles, des graines de sésame et la teinte de sumac. L'odeur est complexe : herbes, aigre, noix et légèrement florale.",
            "action": "Transférer dans un pot scellé. Le mélange n'a pas besoin de réfrigération."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé dans un robot culinaire — le mélange s'est homogénéisé en poudre fine brun-vert sans texture visible.",
            "action": "Incorporer quelques graines de sésame pour obtenir de la texture. La saveur est intacte."
          }
        ]
      },
      "feelCue": "Une pincée de za'atar doit se sentir légèrement gritte du sésame et du sumac, légèrement huilée des feuilles d'herbe broyées, avec une odeur immédiate d'herbe vive sur le palmier chaud."
    }
  ]
};
