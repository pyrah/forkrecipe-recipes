export default {
  "repoId": "master_french_frenchduckconfit_001",
  "parentRepoId": null,
  "slug": "french-duck-confit",
  "author": "ForkRecipe Kitchen",
  "title": "Confit de canard français",
  "description": "Les cuisses de canard ont guéri pendant la nuit dans le sel et le thym, puis submergées dans leur propre graisse fondue et cuites à la température la plus calme possible jusqu'à ce que la viande fonde de l'os.",
  "cuisine": "Français",
  "culture": "Gazon",
  "category": "proteins",
  "tags": [
    "protéine",
    "canard",
    "français",
    "confit",
    "guéri",
    "matières grasses"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "18 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambes de canard (ensemble, environ 350g chacune)",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "jambes d'oie",
        "cuisses de poulet (réduire le temps à 2 heures)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher grossier",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de thym séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs de poivre noir, grossièrement craqué",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Graisse de canard (rendue ou achetée)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Graisse d'oie",
        "Le saindoux en dernier recours"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saler et laisser reposer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "cured_duck_legs",
      "instructions": "Mélanger le sel, le thym, l'ail cassé, le poivre cassé et les feuilles de laurier émiettées sur une assiette. Frottez chaque surface des pattes de canard avec ce mélange — passez sous la peau si possible, dans chaque crevasse. Poser en une seule couche dans un plat non réactif. Couvrir et réfrigérer pendant la nuit (12–18 heures, pas plus ou le remède pénétrera trop profond et la viande goûtera uniformément salée plutôt qu'assaisonnée à la surface). Le remède attirera l'humidité de la peau et le fond du plat sera humide.",
      "visualCue": {
        "primaryTarget": "La peau de canard est visiblement serrée et légèrement humide après un traitement de nuit. Une petite piscine de liquide rose au fond du plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 2-4 heures, la peau est encore lâche et le remède a à peine pénétré.",
            "action": "Continuez à guérir. Le temps effectif minimum est de 8 heures; la nuit est idéale."
          },
          {
            "state": "Perfect",
            "description": "Après 12 à 18 heures, la peau est serrée, légèrement collante et rétrécie. Une piscine de saumure en bas. La surface est sèche plutôt que humide.",
            "action": "Rincer soigneusement les pattes de canard sous l'eau froide pour enlever tout remède de surface. Pat complètement sec."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures — le canard est surchargé. Très raide, le sel sera très prononcé.",
            "action": "Rincer et tremper dans l'eau froide pendant 30 minutes avant de cuisiner pour obtenir un excès de sel."
          }
        ]
      },
      "feelCue": "Après le durcissement, la peau doit se sentir comme un parchemin taut, sec, serré et légèrement lissé. Si elle se sent encore molle et mouillée, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Confit",
      "inputs": [
        "cured_duck_legs",
        "ing_07"
      ],
      "outputState": "confited_duck",
      "instructions": "Rincez les jambes de canard sous l'eau froide et tapez-les absolument secs avec des serviettes en papier. Faire fondre la graisse de canard dans une casserole épaisse ou un four hollandais à feu doux jusqu'à ce qu'elle soit complètement liquide. Submerger les pattes de canard entièrement dans la graisse — ils doivent être couverts. Maintenir la température des graisses entre 80 et 90°C (175 et 195°F). C'est à peine un mijot; des bulles occasionnelles montant de la viande sont correctes. Cuire de 2,5 à 3 heures jusqu'à ce que la viande s'éloigne de l'os du pilon avec une pression douce. Laisser refroidir dans la graisse et réfrigérer pour conserver jusqu'à 1 mois.",
      "visualCue": {
        "primaryTarget": "Après 2,5 heures, un flux doux de petites bulles s'élève des pattes de canard. La graisse est complètement claire et dorée, pas trouble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1,5 heure, la viande résiste quand elle est pressée. L'os du pilon est solidement ancré. La graisse peut être trop chaude: bouillir rapidement.",
            "action": "Baissez immédiatement la chaleur en cas d'ébullition difficile. Continuez à cuisiner. Le collagène a besoin de plus de temps pour se convertir en gélatine."
          },
          {
            "state": "Perfect",
            "description": "La viande donne à la pression douce — l'os du pilon se balance librement. La viande de la cuisse est légèrement séparée de l'os. La graisse est claire et dorée. Pas de rose à travers la peau.",
            "action": "Laisser refroidir à la température ambiante, puis réfrigérer sous l'eau."
          },
          {
            "state": "Overdone",
            "description": "La viande tombe de l'os sans pression. Texture est en train de vergler sur la pâte.",
            "action": "Supprimer immédiatement. Encore délicieux, mais maniez doucement — il déchiquetera au contact. Meilleur usage en cassoulet ou rillette à ce stade."
          }
        ]
      },
      "feelCue": "Cocher la partie la plus épaisse de la cuisse avec un testeur de gâteau ou une brochette — si elle ne rencontre aucune résistance, comme pousser à travers le beurre ramolli, le confit est fait."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "confited_duck"
      ],
      "outputState": "finished_duck_confit",
      "instructions": "Retirer les pattes de canard de la graisse, en grattant l'excès. Placez-les sur la peau dans une poêle froide, sèche et lourde — pas besoin de graisse supplémentaire; le canard porte plus qu'assez. Tournez le feu à feu moyen-élevé et laissez la peau rendre et croquant lentement à mesure que la poêle chauffe, 8-10 minutes. Ne retournez pas. La peau doit passer de pâle et molle à l'acajou brulé et rigide. Plongez 2 minutes pour réchauffer la viande. Servir immédiatement — la peau adoucit en quelques minutes.",
      "visualCue": {
        "primaryTarget": "La peau est profonde ambre-mahogany, rigide, et brillant. La graisse a rendu visiblement de la peau dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle, douce et grasse; elle fléchit plutôt que des fissures.",
            "action": "Continuer le rendu à feu moyen. La patience est nécessaire — résistez à l'envie d'augmenter la chaleur, qui brûlera avant de croquer."
          },
          {
            "state": "Perfect",
            "description": "La peau est acajou burned, rigide, et fait un bruit de craquelure quand tapoté avec une spatule. La graisse rendue dans la poêle est claire et dorée.",
            "action": "Flip pendant 2 minutes et plaque peau vers le haut. Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun foncé et approche du noir. Sensation amère brûlée de la graisse rendue.",
            "action": "Retirer de la poêle. La viande sous la peau sera fine — la peau peut être trop amère pour manger. Retirer la peau brûlée avant de servir."
          }
        ]
      },
      "feelCue": "Tapez la peau avec une spatule — elle doit sonner en arrière avec un son ferme et papier, comme taper un tambour. S'il tord doucement, il lui faut plus de temps dans la poêle."
    }
  ]
};
