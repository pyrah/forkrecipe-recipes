export default {
  "repoId": "master_thai_som-tam_001",
  "parentRepoId": null,
  "slug": "som-tam",
  "author": "ForkRecipe Kitchen",
  "title": "Salade de papaye verte (Som Tam)",
  "description": "Une étude sur la violence contrôlée — papaye verte, chilis oculaires d'oiseau, ail, lime, sauce de poisson et sucre de palme pillée dans un mortier d'argile jusqu'à ce que la papaye pleure ses jus dans la vinaigrette, créant une salade simultanément croquante, aigre, salée, chaude et subtilement sucrée. Né dans les rizières d'Isan, mangé partout en Thaïlande.",
  "cuisine": "Thaï",
  "culture": "Nord-est thaïlandais (Isan)",
  "category": "vegetables",
  "tags": [
    "Thaï",
    "papaye",
    "salade",
    "estan",
    "Chaux",
    "Chili",
    "végétalien-adaptable",
    "poisson-sauce"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 5,
    "bitter": 0,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Papaya verte (non mûre), pelée et julienned (environ 2 tasses)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "mangue verte",
        "KOHLRABI",
        "pomme verte pour croquant"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chilies oculaires d'oiseaux (carcasse noo), 2–5 selon la préférence pour la chaleur",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivrons serrano",
        "rouge jalapeño"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de poisson (ou sauce de soja pour la version végétalienne)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de chaux frais (à partir de 2 chaux)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "eau tamarine pour une aigre plus profonde"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme, râpé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Crevettes séchées, petites",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour la version végétalienne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Cacahuètes grillées, grossièrement broyées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "noix de cajou grillées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Tomates cerises, coupées en deux (ou 1 tomate rom, triées)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "mangue verte pour sure extra"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Fèves longues (tua fak yao), coupées en morceaux de 5 cm (facultatif, traditionnel)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots verts",
        "Faire craquer les pois"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "chili_garlic_paste",
      "instructions": "Placez les piments et l'ail dans le mortier. Pound avec des coups rythmiques décisifs jusqu'à ce qu'ils soient grossièrement cassés — pas une pâte, mais écrasés et parfumés. Le but ici n'est pas la douceur, mais les meurtrissures: vous voulez que les parois cellulaires se rompent pour que leurs huiles saignent dans la vinaigrette. Cela prend 30 à 60 secondes de coups fermes. L'ail doit être en morceaux irréguliers, les piments se divisent et libèrent les graines. La chaleur que vous voyez ici est proportionnelle au nombre de piments — goûtez une petite pièce avant de commettre.",
      "visualCue": {
        "primaryTarget": "Les piments sont fendus et effondrés, libérant des graines rouges vives et des huiles teintées d'orange. L'ail est broyé en morceaux déchiquetés irréguliers, pas en pâte lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les piments et l'ail sont à peine meurtris, toujours intacts, libérant peu d'arôme.",
            "action": "Pound plus fermement — le point est rupture, pas raffinement."
          },
          {
            "state": "Perfect",
            "description": "Les chilis sont ouverts et meurtris, libérant une couleur vive et un parfum de chili vif. L'ail est en morceaux broyés avec des jus libérés.",
            "action": "Ajouter le sucre de palme et les crevettes séchées."
          },
          {
            "state": "Overdone",
            "description": "Tout est devenu une pâte fine, il rendra la vinaigrette nuageuse et trop nette.",
            "action": "Toujours utilisable — continuez, mais ajoutez la papaye immédiatement pour empêcher la pâte d'écraser la vinaigrette."
          }
        ]
      },
      "feelCue": "Le mortier doit sentir agressivement l'ail cru et la chaleur métallique du chili frais — si vous pouvez le sentir brusquement à partir de 30 cm de distance, vous êtes sur la bonne voie."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "chili_garlic_paste",
        "ing_06",
        "ing_07"
      ],
      "outputState": "seasoning_base",
      "instructions": "Ajouter le sucre de palme et les crevettes séchées au mortier. Continuer à frapper, cette fois-ci plus doucement — vous essayez de dissoudre le sucre de palme dans les jus de chili-ail et de casser les crevettes séchées en petits morceaux, ne pas pulvériser plus loin. Pound pendant 30 secondes, puis ajouter le jus de lime et la sauce de poisson. Mélanger avec le pilon plutôt que de frapper. Goûtez la vinaigrette crue : elle doit être assaisonnée de façon agressive – très aigre, très salée, visiblement épicée. Il sera sur saison jusqu'à ce que la papaye l'absorbe.",
      "visualCue": {
        "primaryTarget": "Un pansement rouille-orange dans le mortier, avec du sucre de palme dissous et de petites crevettes. La couleur est une orange chaude vive des huiles de chili et le sucre de palme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre de palme encore granulaire, apprêt pas encore unifié ou goûté.",
            "action": "Pound et remuer plus, en ajoutant quelques gouttes de jus de lime pour aider à dissoudre le sucre."
          },
          {
            "state": "Perfect",
            "description": "La robe est lisse, profondément colorée et équilibrée. Le goût est assaisonné avec agressivité — c'est exact. Les crevettes sont brisées en petits morceaux. Sens de chaux et de fruits de mer séchés.",
            "action": "Ajouter les tomates et les haricots longs."
          },
          {
            "state": "Overdone",
            "description": "Trop de pilonnage a rendu le pansement boueux et amer à partir de graines de chili sur-extrait.",
            "action": "Ajouter un peu plus de sucre de palme et de jus de lime pour rééquilibrer."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans la vinaigrette — la douceur, l'aurore et le sel devraient tous arriver dans la même seconde. Si vous les goûtez en séquence plutôt que simultanément, l'équilibre a besoin de travailler."
    },
    {
      "nodeId": "step_3",
      "action": "Livre",
      "inputs": [
        "seasoning_base",
        "ing_09",
        "ing_10"
      ],
      "outputState": "bruised_vegetable_base",
      "instructions": "Ajouter les tomates cerises et les longs morceaux de haricots au mortier. Utilisez le pestle pour les écraser légèrement — vous voulez que les tomates éclatent et libèrent leur jus dans la vinaigrette, et que les haricots soient légèrement écrasés pour absorber la saveur, non transformés en bouillie. 3–4 presses fermes sur chaque tomate est suffisante. Utilisez une grande cuillère ou une spatule pour plier les jus de tomate libérés dans la vinaigrette. Le mortier devrait maintenant être une piscine parfumée de vinaigrette intensément assaisonnée avec des morceaux de tomates, de haricots et de crevettes.",
      "visualCue": {
        "primaryTarget": "Les tomates sont fendues et effondrées, libérant leur jus dans la vinaigrette orange. Les haricots longs sont légèrement dentelés mais conservent leur forme et leur couleur verte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont entières et intactes, les haricots flottent dans la vinaigrette sans absorber la saveur.",
            "action": "Appuyez fermement sur chaque tomate avec le pilon jusqu'à ce qu'il éclate."
          },
          {
            "state": "Perfect",
            "description": "Les tomates sont effondrées et leur jus a transformé le pansement en rouge orange plus profond. Les haricots sont meurtris et légèrement aplatis, mais toujours vert et croustillant.",
            "action": "Ajouter la papaye julienned."
          },
          {
            "state": "Overdone",
            "description": "Les tomates ont été fourrées dans une sauce, les haricots sont massés et pâles.",
            "action": "Procéder — le profil de saveur est le même, mais la texture sera moins satisfaisante."
          }
        ]
      },
      "feelCue": "Quand vous pressez une tomate cerise contre le mur de mortier, il devrait y avoir une petite pop et un relâchement de jus, comme presser un raisin. Les haricots devraient donner légèrement sous le pestle mais ressortre."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "bruised_vegetable_base",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_08"
      ],
      "outputState": "finished_som_tam",
      "instructions": "Ajouter la papaye verte julienne au mortier par lots. À l'aide d'une combinaison du pestle et d'une grande cuillère, lancez et battez légèrement la papaye – vous voulez la contusionner suffisamment pour absorber la vinaigrette sans la faire boiter ou casser les lambeaux. Ajouter le jus de lime restant et la sauce de poisson, plier pour combiner. Ajouter plus de jus de lime, de sauce de poisson ou de sucre de palme pour étalonner : le meilleur tampon som est fort et affirmé sur les trois axes. Pilez sur une plaque ou servez directement du mortier. Éparpiller les arachides écrasées sur le dessus immédiatement avant de servir. Servir avec du riz collant.",
      "visualCue": {
        "primaryTarget": "Des lustres de papaye jade pâle, scintillent avec la vinaigrette rouge-orange, surmontés d'arachides d'ivoire – vives et texturales avec des graines de chili visibles et des peaux de tomate partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lambeaux de papaye sont secs et blancs, pooling au fond du mortier plutôt que de les enrober.",
            "action": "Jetez plus vigoureusement et livrez légèrement avec le pestle pour écraser les lambeaux de papaye et encourager l'absorption."
          },
          {
            "state": "Perfect",
            "description": "Chaque lambeau de papaye est enduit et légèrement scintillement. La salade a l'air laquée – vert vif-orange avec du rouge tomate et de la crème d'arachide partout. La papaye est croustillante mais pas crue.",
            "action": "Scatter les cacahuètes et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les lambeaux de papaye sont limpides, pâles et libérant de l'eau, rendant la vinaigrette aqueuse.",
            "action": "Égoutter un peu de liquide, ajouter des cacahuètes supplémentaires pour la texture et servir immédiatement."
          }
        ]
      },
      "feelCue": "Mâcher un morceau de papaye dans le bol — il devrait se casser proprement comme un bâton de carottes froides, puis libérer un flot de pansement chaud à la tarte. La chaleur devrait augmenter de 10 à 15 secondes après avoir avalé."
    }
  ]
};
