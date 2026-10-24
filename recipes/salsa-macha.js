export default {
  "repoId": "master_mexican_salsa_macha_001",
  "parentRepoId": null,
  "slug": "salsa-macha",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Macha",
  "description": "Condiment à base d'huile de chile d'Oaxaca — les chiles árbol et mulato séchés fleurissent dans de l'huile chaude avec des graines de citrouille grillées, des arachides et de l'ail jusqu'à ce que l'huile elle-même devienne un milieu aromatique rouge rouille transportant une chaleur fumée, noisette, lente à construire. Plus d'huile que de sauce, plus de condiment que de salsa, tout à fait irremplaçable.",
  "cuisine": "Mexicain",
  "culture": "Oaxacan",
  "category": "condiments",
  "tags": [
    "Salsa-macha",
    "oaxacan",
    "Mexique",
    "huile de chile",
    "noix",
    "végétalien",
    "condiment"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chiles séchés de árbol (ensemencés ou non)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "japones séchés",
        "chiles séchés piquín"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Mulato ou anchois séchés (ensemencés, déchirés)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "pasilla negro séchée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Graines de citrouille (pepitas bruts)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Cacahuètes crues (épices ou blanchies)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "noix de cajou",
        "pécans"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (huile végétale ou d'avocat)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive pour une version différente mais excellente"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre granulé (facultatif)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Graines et noix de Toast",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "toasted_nuts_seeds",
      "instructions": "Dans une poêle sèche à feu moyen, faire griller les pepitas et les arachides séparément, en remuant chaque fois constamment. Pepitas d'abord: 3 à 4 minutes jusqu'à ce qu'ils gonflent, deviennent vert doré, et commencent à sauter. Enlevez. Cacahuètes: 4 à 5 minutes, en remuant constamment, jusqu'à ce qu'elles sentent des cacahuètes grillées et deviennent un brun doré uniforme. Enlevez. Ne les mélangez pas pendant le toast — ils finissent à différents moments. Refroidir complètement les deux. La cuisson à sec avant la friture d'huile construit une couche de saveur de noix que l'huile seule ne peut atteindre.",
      "visualCue": {
        "primaryTarget": "Les Pepitas sont gonflés et vert d'olive dorée; les cacahuètes sont uniformément dorées, sans taches pâles ou foncées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Pepitas sont encore plats et verts; les cacahuètes sont pâles et goûtent toujours crus. La salsa n'aura pas sa profondeur caractéristique de noix grillées.",
            "action": "Continuer à griller dans la casserole sèche. Tous les deux signaleront la finesse avec l'arôme et la couleur — attendez les deux."
          },
          {
            "state": "Perfect",
            "description": "Les Pepitas sont dorés et parfumés de courges grillées; les cacahuètes sentent le beurre de noix rôti. Les deux se sentent secs et croustillants quand mordus.",
            "action": "Laisser refroidir complètement avant d'ajouter à l'huile chaude — les noix chaudes surcuissent dans l'huile."
          },
          {
            "state": "Overdone",
            "description": "Les cacahuètes sont brun foncé, certains sont presque noirs. Pepitas sent amer.",
            "action": "Jetez et recommencez. Les noix brûlées sont irrécupérables — l'amertume sera la saveur dominante de la salsa finie."
          }
        ]
      },
      "feelCue": "Une arachide bien grillée devrait craquer en deux en mordant, montrant un intérieur uniformément doré-tan sans centre pâle. Une arachide crue montre un centre blanc; une arachide survêtue montre un brun partout."
    },
    {
      "nodeId": "step_2",
      "action": "Choux de fleur et ail dans l'huile",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05",
        "ing_06"
      ],
      "outputState": "chile_oil",
      "instructions": "Dans une petite casserole, faire chauffer l'huile à feu moyen. Lorsqu'un morceau d'ail tombe immédiatement dans les étourdissements, ajouter toutes les tranches d'ail et faire frire 60 à 90 secondes jusqu'à ce qu'elles soient dorées. Retirer l'ail avec une cuillère à fentes dans un mélangeur. Réduire l'huile à moyen-doux et ajouter les deux types de chiles séchés. Ils devraient s'étourdir doucement, pas violemment. Incorporer et presser dans l'huile pendant 30 à 60 secondes jusqu'à ce qu'ils deviennent plus sombres et l'huile prend une couleur rouge profonde et des odeurs de chile séché fleuri. Veillez à ce que les chiles secs brûlent en quelques secondes. Retirer immédiatement les chiles avec une araignée au mélangeur avec l'ail. Réservez l'huile rouge.",
      "visualCue": {
        "primaryTarget": "L'huile est fortement colorée rouge-orange de la fleur de piment; l'ail est doré; les piments sont plus foncés et gonflés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est encore d'or pâle, les chiles à peine étourdis. L'huile n'a pas pris la couleur ou la saveur du chile. La salsa macha goûtera à l'huile brute.",
            "action": "Augmenter légèrement la chaleur et prolonger le contact avec les chiles. L'huile devrait colorer visiblement dans les 30 secondes suivant l'entrée des chiles."
          },
          {
            "state": "Perfect",
            "description": "L'huile est une magnifique terre cuite rouge. Les Chiliens sont légèrement gonflés et plus foncés. L'ail est en or profond. La cuisine sent le chile grillé et l'ail rôti.",
            "action": "Retirer immédiatement les piments et l'ail du mélangeur. Gardez l'huile rouge pour le mélange final."
          },
          {
            "state": "Overdone",
            "description": "Les Chiliens sont devenus brun foncé au noir, l'huile sent l'acre et le feu, et l'ail est brun foncé.",
            "action": "Si seulement légèrement surdosé, la salsa aura une amertume supplémentaire — équilibrez - la avec du sucre et du vinaigre. S'il est gravement brûlé, jeter et recommencer."
          }
        ]
      },
      "feelCue": "La floraison est complète lorsque l'huile elle-même devient visiblement rouge-orange et l'arôme de chile dans la pièce passe de l'odeur crue de chile séché à quelque chose de chaud, grillé, et légèrement fumé. Cette transformation se produit rapidement — la fenêtre entre parfait et brûlé est de 20 à 30 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange et saison",
      "inputs": [
        "chile_oil",
        "toasted_nuts_seeds",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_salsa_macha",
      "instructions": "Au mélangeur avec l'ail frit et les chiles, ajouter les pepitas grillés et les arachides, le vinaigre, le sel et le sucre (si vous utilisez). Verser l'huile de chile rouge réservée. Pulse 8 à 12 fois — le but est une texture très grossière, pas une purée lisse. Chaque impulsion doit décomposer les noix et chiles plus loin sans transformer l'ensemble en pâte. La salsa macha finie devrait avoir des fragments de noix et de chile visibles dans une huile rouge — c'est un condiment à base d'huile, pas une pâte épaisse. Goûtez et ajustez le sel, le vinaigre et le sucre. Verser dans un pot et sceller. L'huile et les solides se sépareront en position debout — remuer ou agiter avant chaque utilisation.",
      "visualCue": {
        "primaryTarget": "Une huile rouge rouille est parsemée de fragments de noix, de flocons de chile et de fragments de graines de sésame. L'huile elle-même est profondément colorée, les solides en suspension lâchement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 3 à 4 impulsions, les noix sont toujours en gros morceaux et les composants n'ont pas commencé à s'intégrer dans un condiment cohérent.",
            "action": "Encore 5 fois. La salsa macha devrait ressembler à un goût épais et rustique dans l'huile, et non à une pile d'ingrédients dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Huile rouge aux noix grossièrement mélangées et morceaux de piment. Verse à partir d'un pot incliné dans un jet épais avec une texture visible. Goûts de noix grillées, chaleur de chile séchée et un lifting au vinaigre vif.",
            "action": "Jar et réfrigérer. Utiliser dans un délai de 1 mois. Arrosez les tacos, les œufs, le riz, la viande grillée ou mangez sur une tortilla au sel."
          },
          {
            "state": "Overdone",
            "description": "Mélange à une pâte lisse et uniforme — toute texture perdue. La salsa macha est devenue plus un beurre de noix de chile.",
            "action": "Toujours délicieux — utiliser comme une propagation. Pour la prochaine fois, arrêtez de vomir plus tôt. La texture est ce qui rend salsa macha distinctive."
          }
        ]
      },
      "feelCue": "La salsa macha sur la cuillère doit se sentir lourde et grasse, avec une croûte texturale satisfaisante de la noix et des fragments de graines. Goûtez l'huile seule, séparément des solides — il devrait être profondément aromatisé et rouge, agissant à la fois comme un milieu de cuisson et un condiment à part entière."
    }
  ]
};
