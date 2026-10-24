export default {
  "repoId": "master_south_indian_coconut_chutney_001",
  "parentRepoId": null,
  "slug": "coconut-chutney",
  "author": "ForkRecipe Kitchen",
  "title": "Choux de coco",
  "description": "La noix de coco râpée fraîche se mélange avec du chili vert, du gingembre et une paille de yogourt ou de tamarin, puis électrifiée par un tadka chaud à la moutarde et au curry. Cool, lumineux et essentiel aux côtés de dosa et idli.",
  "cuisine": "Inde du Sud",
  "culture": "Inde du Sud",
  "category": "condiments",
  "tags": [
    "noix de coco",
    "Chutney",
    "végétalien",
    "Sans gluten",
    "Inde du Sud",
    "condiment",
    "frais"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 540,
  "forks": 33,
  "contributors": 12,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-02-01",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "noix de coco râpées fraîches",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "noix de coco râpées congelées, dégelées; noix de coco déshydratées non sucrées imbibées d'eau 20 min"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chilies vertes (Serrano ou Thaïlandais),",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeño pour version légère"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Pâte de yaourt ou de tamarin",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Graines de moutarde",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles fraîches de curry",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Chili rouge séché",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "coconut_base",
      "instructions": "Mélanger la noix de coco râpée, les piments verts, le gingembre, le yogourt (ou tamarin), le sel et l'eau froide dans un mélangeur. Mélanger en haut pendant 60 à 90 secondes jusqu'à ce qu'il soit complètement lisse. Grattez et mélangez à nouveau. Goûtez et ajustez le chili, le sel et l'ameresse. Le chutney devrait être assez épais pour être posé sur une cuillère mais versable.",
      "visualCue": {
        "primaryTarget": "Le chutney mélangé — sa texture et sa couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chutney est grossier avec des croustilles de noix de coco visibles et des fragments de peau de chili, sous-collés.",
            "action": "Mélanger encore 60 secondes et racler une fois de plus."
          },
          {
            "state": "Perfect",
            "description": "Doux, ivoire pâle sans texture visible. Elle tombe dans un ruban épais et lent de la spatule. Arôme de noix de coco propre avec une note de chili brillant.",
            "action": "Transférer dans un bol et passer à la tadka."
          },
          {
            "state": "Overdone",
            "description": "Le surbrillance a chauffé la noix de coco et la couleur est jaunissante; une odeur de noix de coco rancie et cuite se développe.",
            "action": "Utiliser immédiatement; refroidir le bol sur la glace si le mélangeur le chauffe de façon significative."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre vos doigts — il devrait se sentir complètement lisse, légèrement huileux de la graisse de noix de coco, et refroidir de l'eau froide."
    },
    {
      "nodeId": "step_2",
      "action": "Faire infuser",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_coconut_chutney",
      "instructions": "Chauffer l'huile dans une petite casserole à feu vif jusqu'à ce qu'elle mijote. Ajouter les graines de moutarde et couvrir immédiatement. Lorsque le saut s'abaisse (15-20 secondes), découvrir et ajouter les feuilles de curry et le chili rouge séché. Reculez, les feuilles s'éclaboussent. Incorporer 10 secondes jusqu'à ce que les feuilles de curry soient translucides et croquantes. Verser le tadka tout chaud directement sur le chutney de noix de coco.",
      "visualCue": {
        "primaryTarget": "Le tadka comme il atterrit sur le chutney blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de moutarde sont encore sombres et n'ont pas sauté; les feuilles de curry sont encore limpides et vertes plutôt que translucides.",
            "action": "Augmenter la chaleur et couvrir; retourner à la poêle jusqu'à ce que les graines s'ouvrent complètement."
          },
          {
            "state": "Perfect",
            "description": "Le tadka chaud, de couleur ambre, aux graines de moutarde soufflées et aux feuilles de curry croustillantes repose sur la surface du chutney blanc dans une piscine sombre et parfumée.",
            "action": "Servir immédiatement, ou tourner le tadka juste avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Tadka est très sombre, les graines de moutarde sont noires, et il y a un arôme amer et acride.",
            "action": "Jeter et répéter dans l'huile fraîche; ne pas ajouter de tadka brûlé au chutney."
          }
        ]
      },
      "feelCue": "Au moment où le tadka chaud frappe le chutney frais, un nuage de vapeur aromatique monte — le contraste des températures est intentionnel et fait partie de l'expérience; ne le remuez pas avant de servir."
    }
  ]
};
