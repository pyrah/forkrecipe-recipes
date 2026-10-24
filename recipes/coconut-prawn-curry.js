export default {
  "repoId": "master_thai_coconut_prawn_curry_001",
  "parentRepoId": null,
  "slug": "coconut-prawn-curry",
  "author": "ForkRecipe Kitchen",
  "title": "Curry de noix de coco",
  "description": "Des crevettes tigrées mijotées dans un curry de noix de coco doré et parfumé vif avec de la citronnelle, du galangal et du curcuma frais – frais, rapide et éclatant. Le sud de la Thaïlande dans un bol: noix de coco-doux, poisson-sauce-sel, citron vert-sour, chili-chauffe.",
  "cuisine": "Thaï",
  "culture": "Thaï du Sud",
  "category": "seafood",
  "tags": [
    "Thaï",
    "Produits de la mer",
    "curry",
    "noix de coco",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes tigrées, coquillages et têtes",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "crevettes royales",
        "grandes crevettes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras (1 boîte)",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "crème de coco, diluée 1:1 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, couches extérieures enlevées, meurtries",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de citronnelle (2 c. à thé par tige)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Galangal, tranché finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre frais (douleur, caractère différent)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Curcuma frais, râpé (ou 1 c. à thé séché)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "curcuma au sol"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja + touche de lime pour végétalien"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre de palme ou cassonade molle",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Sucre de coco",
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Feuilles de citron vert de Kaffir (fraîches ou congelées)",
      "ratioValue": 6,
      "defaultUnit": "pcs",
      "substitutions": [
        "1 c. à thé zeste de citron vert"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Pilisses rouges fraîches, décortiquées et tranchées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "chili oculaire d'oiseau pour plus de chaleur",
        "poivre rouge doux pour moins"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Feuilles de basilic thaï",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Basilic italien (différente saveur)"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Fat",
      "name": "Huile de coco ou huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construire une base aromatique",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_11",
        "ing_14"
      ],
      "outputState": "aromatic_base",
      "instructions": "Chauffer l'huile de coco dans un wok large ou une poêle à feu moyen-vif. Ajouter les échalotes et cuire en remuant pendant 3 minutes jusqu'à ce qu'elles soient adoucies et légèrement dorées. Ajouter l'ail, les tranches de galangal et la citronnelle en tranches. Faire cuire 1 minute. Ajouter les tranches de curcuma et de chili frais. Faire revenir 2 minutes de plus — la cuisine doit se remplir d'une fragrance piquante, agrumes et épicée. Les aromatiques doivent être adoucis et parfumés mais pas brunis — vous fleurissez, vous ne faites pas frire.",
      "visualCue": {
        "primaryTarget": "Les aromatiques sont doux et scintillants, le curcuma a tout transformé en orange doré vif. La citronnelle et le galangal sont plus pâles et légèrement flétris aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont toujours blanches translucides, le galangal cru-dur, le curcuma cru-smelling et amer.",
            "action": "Cuire encore une minute sur le haut moyen. Les aromatiques sous-dotés donnent au curry un bord cru et amer."
          },
          {
            "state": "Perfect",
            "description": "Tout est adouci, profondément parfumé et doré. L'huile est teinte d'orange vif du curcuma. L'odeur est agrumes, tranchante et florale.",
            "action": "Ajouter immédiatement le lait de coco."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes et l'ail sont brun foncé et amer, le galangal commence à être char. L'odeur est forte et acride.",
            "action": "Abaissez le feu, ajoutez le lait de coco maintenant pour arrêter le brunissement. Une base légèrement amère peut être équilibrée avec du sucre de palme supplémentaire."
          }
        ]
      },
      "feelCue": "Le wok devrait se sentir vif et chaud sous votre main tenu au-dessus de lui — les aromatiques devraient s'étourdir activement et remplir l'air de parfum dès qu'ils ont frappé l'huile."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter la sauce au curry",
      "inputs": [
        "aromatic_base",
        "ing_02",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "curry_sauce",
      "instructions": "Verser le lait de coco dans la poêle, en grattant les morceaux dorés du fond. Ajouter les feuilles de lime kaffir, la sauce de poisson et le sucre de palme. Mélanger pour dissoudre le sucre. Porter à mijoter doucement à feu moyen — ne pas faire bouillir dur, ce qui brise le lait de coco et rend la sauce granuleuse. Laisser mijoter pendant 5 minutes, en remuant occasionnellement, jusqu'à ce que la sauce soit parfumée et légèrement épaissie. Bouche : il doit être salé-doux-doux avec une note d'agrumes aiguë des feuilles de citron vert.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, jaune doré, à la mijote paresseuse — de petites bulles se cassent lentement à la surface, la couleur vive du curcuma, brillant de la graisse de noix de coco.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est très fine et pâle, le lait de noix de coco à peine mijoté, les arômes encore crus au fond.",
            "action": "Laisser mijoter encore 3-4 minutes jusqu'à ce que la sauce épaississe légèrement et sente profondément parfumée."
          },
          {
            "state": "Perfect",
            "description": "La sauce est dorée, aromatique, brillante et légèrement épaissie. Il s'accroche légèrement à une cuillère. Le parfum des feuilles de lime est proéminent.",
            "action": "Ajouter les crevettes."
          },
          {
            "state": "Overdone",
            "description": "Le lait de coco s'est fendu — une couche grasse et granuleuse d'huile de coco se trouve sur une couche mince et aqueuse. La sauce a l'air cassée.",
            "action": "Retirer du feu et remuer vigoureusement, en ajoutant une touche de lait de coco frais ou d'eau. Garder à une mijot très douce allant de l'avant."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans la sauce au curry et lancez votre doigt sur le dos. La sauce doit être enrobée d'une couche mince et uniforme qui sent la lime de kaffir et la citronnelle."
    },
    {
      "nodeId": "step_3",
      "action": "Faire cuire les crevettes",
      "inputs": [
        "curry_sauce",
        "ing_01"
      ],
      "outputState": "cooked_prawns",
      "instructions": "Ajouter les crevettes décortiquées à la sauce mijotante, les presser sous la surface. Laisser mijoter en douceur pendant 3 à 4 minutes — les crevettes pelées prennent un peu plus de temps que les crevettes pelées, mais les coquilles dégagent de l'arôme dans la sauce. Les crevettes sont faites lorsqu'elles sont uniformément coralliennes et qu'elles viennent de passer du translucide au opaque à la partie la plus épaisse. Ne pas faire bouillir ou trop cuire. Tirez de la chaleur immédiatement.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont uniformément rose corallien, serrées en forme de C, les coquillages vifs contre la sauce dorée. La chair à l'intérieur de la coquille est opaque rose-blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont toujours translucides à la tête et au corps. Ils ont l'air mou et n'ont pas encore frisé.",
            "action": "Laisser mijoter 60 à 90 secondes de plus. La crevette underdone est désagréablement glissante et goûte cru-doux."
          },
          {
            "state": "Perfect",
            "description": "Un rose uniforme, enroulé en C, la chair juste opaque et donnant quand une coquille est pressée. Les têtes sont orange vif de la tonalité.",
            "action": "Ajouter le jus de lime et le basilic thaïlandais et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont enroulées dans un O serré et se sentent caoutchouteuses lorsque la coque est pressée. La viande à l'intérieur est dure et légèrement sèche.",
            "action": "Servir immédiatement sans autre cuisson. La sauce apportera de l'humidité. Pressez le citron vert supplémentaire pour éclaircir."
          }
        ]
      },
      "feelCue": "Appuyez sur une crevette à travers sa coquille — elle doit donner doucement et ressortre, la chair à l'intérieur se sent souple et douce comme un raisin ferme, pas rigide comme une gomme au crayon."
    },
    {
      "nodeId": "step_4",
      "action": "Balance et finition",
      "inputs": [
        "cooked_prawns",
        "ing_13",
        "ing_12"
      ],
      "outputState": "finished_curry",
      "instructions": "Hors du feu, ajoutez le jus de lime et le goût. Ajustez l'équilibre : plus de sauce de poisson si elle a besoin de sel et de profondeur, plus de sucre de palme si elle a besoin de douceur, plus de citron vert si elle a besoin de luminosité. Les quatre piliers du goût thaïlandais — sucrés, salés, aigres et chauds — devraient être équilibrés, chacun étant présent, mais aucun dominant. Attachez le basilic thaïlandais au-dessus du sommet. Servir immédiatement sur le riz jasmin.",
      "visualCue": {
        "primaryTarget": "Un curry doré vif clouté de crevettes coralliennes et de feuilles de basilic vert déchirées. La sauce est brillante et la surface montre une légère liquéfaction d'huile de coco dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jus de lime n'a pas été ajouté — le curry goûte plat et lourd, la douceur et le sel sans ancrer sans la luminosité de l'acide.",
            "action": "Ajouter le jus de lime maintenant. L'acide n'est pas facultatif, c'est l'ancre des saveurs."
          },
          {
            "state": "Perfect",
            "description": "Les quatre piliers du goût sont présents et équilibrés. Le basilic est vert vif et parfumé, légèrement flétri par la chaleur. La sauce enveloppe les crevettes.",
            "action": "Servir immédiatement. Le basilic thaïlandais se flétrit rapidement — ce plat n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Trop de citron vert a été ajouté — le curry goûte principalement aigre et lumineux, la douceur de la noix de coco et l'umami enterré.",
            "action": "Incorporer une petite pincée de sucre de palme et éclabousser plus de lait de coco pour rééquilibrer."
          }
        ]
      },
      "feelCue": "Prenez une gorgée de la sauce d'une cuillère — la séquence des goûts devrait arriver en vagues: la douceur de la noix de coco d'abord, puis la profondeur salée-savoureuse de la sauce de poisson, puis la luminosité du citron vert à travers, puis la construction chaude lente de chili. Si l'un d'eux manque, il faut l'adapter."
    }
  ]
};
