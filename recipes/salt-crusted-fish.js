export default {
  "repoId": "master_mediterranean_saltcrustedfish_001",
  "parentRepoId": null,
  "slug": "salt-crusted-fish",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons entiers salés",
  "description": "Un poisson entier scellé à l'intérieur de deux kilos de sel blanc-œuf et cuit jusqu'à ce que la croûte sonne comme du plâtre — fissuré à table avec un maillet, libérant un nuage de vapeur herbacée et le poisson le plus parfaitement assaisonné et juteux imaginable.",
  "cuisine": "Méditerranée",
  "culture": "Méditerranée",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "méditerranéen",
    "poissons entiers",
    "croûte salée",
    "cuits",
    "Sans gluten",
    "pescataires"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bars ou brèmes de mer entiers (600-800 g), vidés et écalés",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "snapper",
        "porcin",
        "branzino"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher grossier",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer grossier"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Blancs d'oeufs",
      "ratioValue": 3,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 6,
      "defaultUnit": "pcs",
      "substitutions": [
        "romarin",
        "frondes de fenouil"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Citron, tranché en rondelles",
      "ratioValue": 1,
      "defaultUnit": "pcs",
      "substitutions": [
        "orange"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail légèrement broyés",
      "ratioValue": 4,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, pour le service",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Citrus",
      "name": "Coins de citron, pour servir",
      "ratioValue": 2,
      "defaultUnit": "pcs",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "salt_crust_paste",
      "instructions": "Whisk whites à une mousse légère — pas de pics raides, juste cassés et fluides. Verser le sel grossier et travailler avec vos mains jusqu'à ce que le mélange ressemble au sable humide. Il devrait s'écraser lorsqu'il est pressé et tenir la forme de votre poing. Si elle ne s'agrippe pas, ajoutez une cuillère à soupe à la fois.",
      "visualCue": {
        "primaryTarget": "Le sel ressemble à du sable de plage humide bien emballé — pâle, légèrement gris des blancs d'œufs, tient sa forme lorsqu'il est pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sel s'effondre lorsqu'il est pressé, trop sec pour former une croûte.",
            "action": "Ajouter le blanc d'œuf ou l'eau par la cuillère à soupe jusqu'à ce qu'elle s'agrippe fermement."
          },
          {
            "state": "Perfect",
            "description": "Tient une balle ferme lorsqu'elle est pressée dans la paume. Légèrement gris, aucun cristal lâche n'échappe aux bords.",
            "action": "Construisez la couche de base sur la plaque de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La pâte de sel est trop humide et boueuse — elle craquera et coulera pendant la cuisson.",
            "action": "Ajouter une poignée de sel sec et travailler."
          }
        ]
      },
      "feelCue": "Il devrait se sentir comme du sable humide — gritty, cool, emballé avec suffisamment de densité pour tenir une impression ferme de vos empreintes digitales."
    },
    {
      "nodeId": "step_2",
      "action": "Assemblage",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "salt_crust_paste"
      ],
      "outputState": "encrusted_fish",
      "instructions": "Préchauffer le four à 220 C (425 F). Étendre une couche de 1,5 cm de pâte de sel sur une plaque de cuisson pour former le lit. Remplis la cavité des poissons de thym, de citron et d'ail. Pose le poisson sur le lit de sel. Emballez le reste de la pâte de sel fermement sur tout le poisson, y compris la tête et la queue, en scellant toutes les coutures. Appuyez pour compacter.",
      "visualCue": {
        "primaryTarget": "Un monticule blanc sur la plaque de cuisson — le poisson entièrement invisible sous une coquille salée lisse et pressée, d'au moins 2 cm d'épaisseur partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Zones minces visibles où la pâte salée est clairsemée — squelette de poisson visible à travers la croûte.",
            "action": "Patch avec plus de pâte et appuyez fermement."
          },
          {
            "state": "Perfect",
            "description": "Un dôme blanc uniforme, scellé de tous les côtés, sans trous. Le poisson est complètement encombré.",
            "action": "Dans le four immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La croûte est trop épaisse (plus de 4 cm) — les poissons peuvent ne pas cuire.",
            "action": "Cela prendra plus de temps mais fonctionnera toujours. Ajouter 10 minutes à la cuisson."
          }
        ]
      },
      "feelCue": "Exécutez votre paume sur la croûte — elle devrait se sentir dense, compacte et froide. Les taches molles ou molles nécessitent plus de pâte."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "encrusted_fish"
      ],
      "outputState": "baked_salt_crust",
      "instructions": "Faire cuire 25-30 minutes pour un poisson de 700 g. La croûte se met et commence à montrer des taches d'or pâles sur ses points les plus hauts. Un thermomètre à lecture instantanée inséré dans la croûte dans la partie la plus épaisse du poisson doit se lire 55-60 C (130-140 F). Le poisson s'évapore dans sa propre armure.",
      "visualCue": {
        "primaryTarget": "Le dôme de sel est ferme et sec au toucher, montrant des teintes dorées à sa couronne. Pas de vapeur qui s'échappe des bords — le sceau a tenu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est encore légèrement douce lorsqu'elle est tapée. Thermomètre se lit en dessous de 50 C.",
            "action": "Retourner au four 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "La croûte sonne dur lorsqu'elle est frappée avec un joint — comme du plâtre. Thermomètre lit 57 C. Les odeurs d'herbes et de sel de mer.",
            "action": "Amenez-vous à la table pour craquer."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'est fissurée seule et la vapeur s'est échappée; le poisson sent très fort.",
            "action": "Toujours récupérable — craquer et servir immédiatement."
          }
        ]
      },
      "feelCue": "Frappez la croûte avec votre pétrin — quand vous l'avez fait, cela ressemble à du rap sur un pot d'argile, dense et résonant, pas creux."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "baked_salt_crust",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_salt_crusted_fish",
      "instructions": "À table, fissurer la croûte avec le dos d'une cuillère lourde ou d'un petit maillet, en suivant la ligne de la colonne vertébrale du poisson. Éloignez la moitié supérieure de la croûte en gros morceaux — elle se détache en dalles satisfaisantes. Badigeonner les cristaux de sel avec une brosse à pâtisserie. Peler la peau et servir les filets avec de l'huile d'olive et des quartiers de citron. La chair sera lumineuse, juteuse et parfaitement assaisonnée.",
      "visualCue": {
        "primaryTarget": "Le poisson blanc perle sous la croûte cassée — la peau s'éteint proprement, la chair brille avec ses propres jus, sans bords secs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Flèche encore translucide et légèrement gelée près de l'épine dorsale.",
            "action": "Remontez la croûte et retournez au four 180 C pendant 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "La chair opaque, scintillante qui se sépare de l'os dans des assiettes propres et humides. Herbes et citron parfumés de la cavité. Le poisson sent la mer, pas la pêche.",
            "action": "Servir immédiatement avec l'huile d'olive et le citron."
          },
          {
            "state": "Overdone",
            "description": "Fumer sec et se séparer de la peau avec une texture crayeuse.",
            "action": "Compensez avec de l'huile d'olive généreuse et un peu de citron."
          }
        ]
      },
      "feelCue": "Le filet doit céder sous un couteau de poisson comme un fruit mûr — pas de déchirement, juste un don doux comme les parties de chair de l'os."
    }
  ]
};
