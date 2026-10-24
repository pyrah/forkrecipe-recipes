export default {
  "repoId": "master_vietnamese_banh-mi-pickles_001",
  "parentRepoId": null,
  "slug": "banh-mi-pickles",
  "author": "ForkRecipe Kitchen",
  "title": "Bánh Mì Pickles",
  "description": "Le daikon et la carotte coupés en allumettes sont immergés dans une saumure fraîche et douce qui les rend translucides et croustillantes en moins d'une heure, la croûte acide tranchante qui coupe le pâté et le porc gras sur une baguette vietnamienne, indispensable et sans fin.",
  "cuisine": "Vietnamiens",
  "culture": "Vietnamiens",
  "category": "fermented",
  "tags": [
    "marinés",
    "Daïkon",
    "Carotte",
    "vietnamese",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 5,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Radis de Daikon, pelés et découpés en allumettes de 3 mm",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "navets"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Carotte, pelée et coupée en allumettes de 3 mm",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre blanc distillé (acidité à 5 %)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de riz (légèrement doux, également excellent)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sel",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_06"
      ],
      "outputState": "salted_vegetables",
      "instructions": "Mélanger le daikon julienned et la carotte dans un grand bol. Saupoudrer le sel et bien jeter. Laisser reposer 15 minutes. Le sel tire de l'eau des légumes par osmose, comprimant leurs parois cellulaires et les rendant plus croquants après le décapage et mieux en mesure d'absorber la saumure. Après 15 minutes, le bol aura une piscine de liquide et les légumes auront très légèrement ramolli. Rincer soigneusement sous l'eau froide pour enlever le sel de surface, puis presser fermement les légumes dans vos mains sur l'évier pour retirer le plus de liquide possible. Sèchez-la avec une serviette propre.",
      "visualCue": {
        "primaryTarget": "Après le salage, les légumes doivent être légèrement boiteux, mais garder leur forme — non pas molle, ni cru. Le bol contient du liquide visible tiré par le sel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore rigides et à peine n'importe quel liquide a été tiré. Le sel ne fonctionne pas encore.",
            "action": "Jetez encore et attendez les 15 minutes. Fumer cette étape signifie moins de cornichons."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont pliables mais pas musclés. Une bonne réserve de liquide au fond. Après le rinçage et le pressage, ils se sentent comme un chiffon enroulé - la plupart de l'excès d'humidité enlevé.",
            "action": "Emballez dans un pot propre et faites la saumure."
          },
          {
            "state": "Overdone",
            "description": "Les légumes ont été salés pendant plus d'une heure et sont très boiteux et aqueux, ayant libéré trop de liquide.",
            "action": "Rincer, serrer et continuer. La texture sera légèrement plus douce, mais la saveur sera encore bonne."
          }
        ]
      },
      "feelCue": "Après avoir serré, une poignée de légumes devrait se sentir humide mais pas dégoulinant, comme une éponge bien cousue. Si le liquide s'écoule lorsque vous pressez, appuyez plus fort."
    },
    {
      "nodeId": "step_2",
      "action": "Dissoudre",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pickling_brine",
      "instructions": "Mélanger le vinaigre, l'eau et le sucre dans une petite casserole ou un bol micro-ondes. Chauffer doucement jusqu'à ce que le sucre se dissout complètement — environ 2 minutes sur la cuisinière à feu moyen, ou 60 secondes au micro-ondes. Incorporer jusqu'à ce que les granules ne soient pas visibles. La saumure n'a pas besoin de bouillir; une douce chaleur est suffisante. Laisser refroidir à la température ambiante avant de verser sur les légumes. Le ratio de saumure ici est classique vietnamien: parties égales vinaigre et eau donne un acide brillant mais pas de pulvérisateur de visage.",
      "visualCue": {
        "primaryTarget": "Un liquide clair, incolore à très faiblement jaune, sans cristaux de sucre visibles. Doit goûter simultanément aigre, doux et très légèrement salin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Granulés de sucre encore visibles — la solution semble légèrement trouble près du fond.",
            "action": "Agiter plus longtemps à feu doux. Ne pas faire bouillir, mais la chaleur est nécessaire pour dissoudre complètement le sucre."
          },
          {
            "state": "Perfect",
            "description": "Saumure parfaitement claire. Au moment de la dégustation: les coups aigres d'abord, puis la douceur suit immédiatement et s'attarde. Un peu de sel.",
            "action": "Laisser refroidir à la température ambiante avant utilisation."
          },
          {
            "state": "Overdone",
            "description": "La saumure a été bouillie vigoureusement et est légèrement réduite, ce qui la rend plus concentrée.",
            "action": "Ajoutez une cuillère à soupe d'eau pour restaurer le rapport d'origine. La saumure surconcentrée rendra les cornichons trop tranchants."
          }
        ]
      },
      "feelCue": "La saumure fraîche doit se sentir neutre sur le bout des doigts — pas visqueuse, pas épaisse. Une petite goutte sur la langue devrait donner un coup de doux aigre vif et propre sans notes de caramel."
    },
    {
      "nodeId": "step_3",
      "action": "Infuse",
      "inputs": [
        "salted_vegetables",
        "pickling_brine"
      ],
      "outputState": "finished_banh_mi_pickles",
      "instructions": "Emballez bien les légumes égouttés et pressés dans un pot ou un contenant en verre propre. Verser la saumure refroidie sur les légumes jusqu'à ce qu'ils soient complètement submergés. Sceller et réfrigérer. Les cornichons sont utilisables après seulement 30 à 60 minutes de réfrigération pour une croûte rapide et fraîche. Pour une saveur plus développée, réfrigérer la nuit. Ils garderont, réfrigérés, jusqu'à 2 semaines. Le daikon perdra une partie de sa netteté après 3 jours, devenant plus doux et plus arrondi — les deux étapes sont délicieuses.",
      "visualCue": {
        "primaryTarget": "Tous les légumes sont entièrement immergés dans la saumure. Après 1 heure, le daikon passe d'un blanc foncé à un ivoire légèrement translucide ; la carotte s'intensifie à une orange plus profonde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cornichons sont en saumure depuis moins de 30 minutes. Les légumes ont encore un goût cru et la saumure n'a pas pénétré profondément.",
            "action": "Réfrigérer pendant au moins 1 heure de plus. Les légumes piquées rapidement ont besoin de temps, même si la saumure est chaude."
          },
          {
            "state": "Perfect",
            "description": "Après 1 à 2 heures : légèrement translucide, croustillante, légèrement aigre-douce, avec la netteté du daikon toujours intacte. Après la nuit : moelleux, arrondi, très savoureux.",
            "action": "Utiliser immédiatement en bánh mì, ou sceller et réfrigérer jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Pickles laissés non réfrigérés plus de 4 heures ou réfrigérés plus de 3 semaines. Daikon peut être devenu doux et sulfureux.",
            "action": "Jeter si doux ou désodorisant. Toujours garder couvert et froid."
          }
        ]
      },
      "feelCue": "Un bâton d'allumette parfaitement décalé de daikon devrait se casser audiblement quand vous mordez à travers elle — cette fissure croquante est la marque de la bonne concentration de saumure et la bonne quantité de temps de salage."
    }
  ]
};
