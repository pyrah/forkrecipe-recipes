export default {
  "repoId": "master_american_eggs_benedict_casserole_001",
  "parentRepoId": null,
  "slug": "eggs-benedict-casserole",
  "author": "ForkRecipe Kitchen",
  "title": "Oeufs Benedict Casserole",
  "description": "Tous les composants des oeufs Benedict — muffins anglais grillés, bacon canadien, œuf — étaient superposés dans un plat à cuisson et cuits en avant, puis surmontés d'un mélangeur facile de hollandaise. Brunch pour une foule sans panique.",
  "cuisine": "Américain",
  "culture": "Brunch américain",
  "category": "eggs",
  "tags": [
    "œufs",
    "brunch",
    "casserole",
    "marque à l'avance",
    "hollandaise",
    "américains",
    "bacon"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "9 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Muffins anglais, coupés et déchirés en morceaux",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "brioche",
        "Pâtes alimentaires"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Bacon canadien, tranché",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "jambon",
        "prosciutto"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Oeufs entiers (pour la crème)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaunes d'œufs (pour hollandaise)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, clarifié et chaud",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assembler",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "layered_base",
      "instructions": "Beurre un plat de cuisson de 23×33 cm (9×13 pouces). Répartir les morceaux de muffins anglais déchirés sur la base dans une couche uniforme. Tuck tranches de bacon canadien tout au long et entre les morceaux de muffin — viser la distribution uniforme afin que chaque portion obtient à la fois du pain et de la viande.",
      "visualCue": {
        "primaryTarget": "Une mosaïque entrecoupée de morceaux de muffins dorés et de bacon rose qui recouvre la base du plat complètement sans grands espaces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes lacunes dans la couche de muffin; le bacon est empilé dans une zone.",
            "action": "Redistribuer — placer les petits morceaux dans les trous et répartir les tranches de bacon uniformément. La crème a besoin de quelque chose."
          },
          {
            "state": "Perfect",
            "description": "Dense, même couche avec des morceaux de muffin se chevauchant légèrement et bacon distribué partout. La base du plat est entièrement couverte.",
            "action": "Verser la crème sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux de muffins sont emballés de façon si serrée que la crème sera mise sur le dessus plutôt que pénétrante.",
            "action": "Loyer et séparer légèrement les morceaux avec vos doigts — la crème doit couler entre eux."
          }
        ]
      },
      "feelCue": "Agiter délicatement le plat — le pain en couches doit se déplacer légèrement comme une mosaïque lâche, et non s'asseoir dans un bloc rigide et comprimé."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_03",
        "ing_04",
        "layered_base"
      ],
      "outputState": "soaked_casserole",
      "instructions": "Dans un grand bol, fouetter ensemble les œufs entiers et le lait jusqu'à ce qu'ils soient entièrement combinés et jaune pâle, environ 1 minute. Assaisonner avec une pincée de sel. Verser la crème uniformément sur la casserole en couches, presser doucement les morceaux de muffin pour les submerger. Couvrir soigneusement d'une enveloppe en plastique et réfrigérer au moins 8 heures ou toute la nuit.",
      "visualCue": {
        "primaryTarget": "Une crème jaune pâle uniforme qui a complètement trempé dans chaque morceau de pain — pas de taches blanches sèches visibles. La surface est plane.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches blanches sèches sur le dessus des muffins. Custard pooled au fond du plat seulement.",
            "action": "Appuyez fermement sur toutes les pièces avec une spatule jusqu'à ce qu'elle soit immergée. Ajoutez un peu plus de lait si la crème est courte."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce est visiblement saturée. Custard est assis à la surface de la couche de pain. La couleur est jaune pâle uniforme sans taches sèches.",
            "action": "Couvrir et réfrigérer pendant la nuit. Le long reste permet au pain d'absorber complètement la crème et les saveurs à fondre."
          },
          {
            "state": "Overdone",
            "description": "Le pain s'est transformé en bouillie et a perdu sa structure — le rapport de crème était trop élevé ou l'imprégnation trop longue.",
            "action": "Fais-le cuire comme ça. La texture sera plus comme un pudding de pain salé — encore délicieux, juste plus dense et plus crépuscule."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de muffin trempé avec votre doigt — il devrait se sentir saturé comme une éponge humide, doux mais pas encore désintégrant."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "soaked_casserole"
      ],
      "outputState": "baked_casserole",
      "instructions": "Retirer la casserole du réfrigérateur 30 minutes avant la cuisson. Préchauffer le four à 175 °C (350 °F). Couvrir le plat d'une feuille d'aluminium et cuire 35 minutes, puis découvrir et cuire 15 à 20 minutes de plus jusqu'à ce que le dessus soit doré et que la crème soit posée.",
      "visualCue": {
        "primaryTarget": "Un plateau doré aux bords de muffins brunis et légèrement croustillé, et la crème se ferme sans mouvement liquide lorsque la poêle est bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est pâle et humide. Custard se déplace comme liquide lorsque la poêle est secouée.",
            "action": "Retour découvert pendant 5-10 minutes de plus. Vérifiez le centre avec un couteau — la lame devrait émerger propre, pas l'œuf."
          },
          {
            "state": "Perfect",
            "description": "Top est également doré avec des morceaux de muffins à bords croustillants. Casserole est ferme et sertie partout. Un couteau sort propre sans oeuf mouillé sur la lame.",
            "action": "Reposez-vous 5 minutes avant de couper. Faites le hollandaise maintenant."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé, la surface est sèche et fissurée, l'odeur des oeufs est devenue sulfureuse.",
            "action": "Couvrir immédiatement pour piéger la vapeur et adoucir le dessus. L'hollandaise masquera la sécheresse lorsqu'elle sera généreusement cuite sur chaque portion."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre avec une spatule — elle devrait se sentir solide et ressortre légèrement, sans infiltration de liquide autour des bords de votre presse."
    },
    {
      "nodeId": "step_4",
      "action": "Mixer",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "hollandaise_sauce",
      "instructions": "Mettre les jaunes d'œufs, le jus de citron et la cayenne dans un mélangeur. Mélanger 20 secondes de longueur moyenne jusqu'à ce qu'il soit pâle et mousseux. Lorsque le mélangeur tourne à basse température, verser le beurre clarifié chaud dans un cours d'eau mince et stable à travers le trou d'alimentation. La sauce s'épaissira visiblement à mesure que le beurre émulsifie. Assaisonner de sel. Utiliser immédiatement — l'hollandaise ne tient pas bien.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, brillante, jaune pâle qui enrobe une cuillère et tient un ruban lorsqu'il est ramené dans le mélangeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. Le beurre n'est pas émulsifié et flotte dans des bassins jaunes.",
            "action": "Le beurre a été ajouté trop vite. Essayez encore avec des jaunes frais — mélangez vigoureusement et ajoutez du beurre une cuillère à café à la fois pour reconstruire l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, jaune pâle opaque. Drips lentement d'une cuillère et tient une forme bombée pendant quelques secondes. Goûte richement au beurre avec un bord citronné vif.",
            "action": "Servir immédiatement, cuire généreusement sur chaque portion de casserole."
          },
          {
            "state": "Overdone",
            "description": "La sauce est épaisse et granuleuse avec une texture d'œuf brouillé — les jaunes trop cuits à partir de beurre trop chaud.",
            "action": "L'hollandaise est cassée. Whisk dans 1–2 glaçons un à la fois et mélanger à nouveau — parfois il se rétablit. Sinon, un simple beurre de citron est un sauvetage plus rapide."
          }
        ]
      },
      "feelCue": "Une hollandaise correctement émulsifiée devrait se sentir comme une crème chaude et lourde en bouche — onctueuse mais pas grasse, sans séparation grasse ou grasse sur la langue."
    }
  ]
};
