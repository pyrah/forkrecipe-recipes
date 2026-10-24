export default {
  "repoId": "master_korean_black_garlic_paste_001",
  "parentRepoId": null,
  "slug": "black-garlic-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte d'ail noir",
  "description": "Une pâte presque sans effort d'une profondeur extraordinaire — des gousses d'ail noir vieillis, dont les mois de lente transformation de Maillard les ont rendus jet-noir, doux comme figues mûres, et dégustation de vinaigre balsamique et de tamarin, mélangé avec l'huile d'olive et le sel en une diffusion lisse, intensément umami.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "condiments",
  "tags": [
    "l'ail noir",
    "coréen",
    "umami",
    "pâte",
    "condiment",
    "végétalien",
    "âgés"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Gousses d'ail noires (peautées)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre pour une saveur plus propre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "vinaigre balsamique (âge, option)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de sherry"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Évaluer l'ail noir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "ready_black_garlic",
      "instructions": "Peler les gousses d'ail noir — la peau devrait se détacher facilement, révélant uniformément noir ou brun-violet très foncé, des gousses complètement douces qui donnent à une légère pression des doigts. Une girofle d'ail noire vieillie correctement doit se sentir comme une figuier très mûre et humide, douce, sans noyau blanc ferme. Si vous trouvez des centres blancs fermes, l'ail n'a pas été vieilli assez longtemps et la pâte aura une bouchée d'ail cru désagréable mélangée avec la douceur fermentée.",
      "visualCue": {
        "primaryTarget": "Uniformement noir-jet, gousses douces avec un léger éclat. Pas de blanc visible lorsqu'une girofle est coupée en deux — noir partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les vêtements ont des centres pâles lorsqu'ils sont coupés de moitié — le processus de Maillard n'a pas atteint l'intérieur. La saveur sera dure, une note d'ail crue mélangée avec de la douceur.",
            "action": "Ce lot d'ail noir était sous-âge. N'utilisez que les girofles entièrement noirs pour la pâte, et utilisez les girofles partiellement noirs pour la cuisson où la chaleur assouplira la note brute."
          },
          {
            "state": "Perfect",
            "description": "Noir, complètement doux, sent le vinaigre balsamique, le tamarin et la mélasse sans morsure d'ail.",
            "action": "Procédez au mélange — ces girofles sont prêts."
          },
          {
            "state": "Overdone",
            "description": "Les vêtements sont très secs, durs et sombres avec un bord amer-doux concentré. Ils sentent plus de fruits secs que l'ail noir frais.",
            "action": "Ajoutez quelques gouttes d'huile et une goutte d'eau en mélangeant pour compenser la sécheresse. La saveur peut être plus intense mais est toujours excellente."
          }
        ]
      },
      "feelCue": "Un gousse d'ail noir parfait donne sous pression comme une date Medjool très douce — pas de résistance, pas de noyau ferme, juste une douceur uniforme. Il devrait laisser une faible tache noire sur vos doigts et une odeur de vinaigre et de caramel."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger à coller",
      "inputs": [
        "ready_black_garlic",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "finished_black_garlic_paste",
      "instructions": "Mélanger les gousses d'ail noir, l'huile d'olive, le sel et le vinaigre balsamique (si utilisé) dans un petit robot culinaire ou dans un mélangeur d'immersion. Procéder 2 à 3 minutes, en grattant les côtés toutes les 30 secondes, jusqu'à ce que la pâte soit absolument lisse, brillante et noire. La teneur élevée en sucre naturel de l'ail noir lui donne envie de se mélanger plutôt que de se mélanger — soyez patient et ajoutez l'huile progressivement si le mélangeur est en difficulté. La pâte finie doit être suffisamment lisse pour passer par une fine buse. Conserver dans un petit pot hermétique sous une couche d'huile d'olive, réfrigéré, jusqu'à 1 mois.",
      "visualCue": {
        "primaryTarget": "Un jet noir, brillant, pâte lisse qui se déplace lentement dans le mélangeur comme une confiture très épaisse. Pas d'embrouille, pas de grain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore grumelée avec des morceaux visibles de girofle et une texture gommée et inégale. La saveur sera incohérente.",
            "action": "Mélanger plus longtemps, ajouter de l'huile quelques gouttes à la fois pour aider la lame à attraper. Frapper les côtés fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, noir-jet, pâte brillante. Sensations d'umami concentré — vinaigre, mélasse, et une faible chaleur d'ail. Le goût révèle une douceur extraordinaire et une profondeur savoureuse simultanément.",
            "action": "Transférer dans un pot et en haut avec une couche d'huile d'olive. Réfrigérer. Utiliser mélangé au beurre, comme un pain plat à tartiner, dans les marinades ou fouetté en vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Mixée au point d'être chaude par friction, la pâte est devenue légèrement brune et a perdu une partie de sa profondeur noire brillante.",
            "action": "Refroidir immédiatement la pâte et remuer pour refroidir. La couleur va s'assombrir à nouveau en refroidissant. Aucun mal de saveur fait."
          }
        ]
      },
      "feelCue": "Étendre un mince frottis de pâte d'ail noir sur le dos de votre main et le goûter. Il devrait s'enregistrer aussi doux avant de s'enregistrer comme savoureux — puis la profondeur de l'umami fleurit vers l'extérieur comme une résolution d'accord — et un murmure de complexité fermentée persiste longtemps après. Pas de netteté, pas de patience, juste une profondeur tranquille."
    }
  ]
};
