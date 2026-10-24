export default {
  "repoId": "master_thai_thai-milk-tea_001",
  "parentRepoId": null,
  "slug": "thai-milk-tea",
  "author": "ForkRecipe Kitchen",
  "title": "Thé thaïlandais au lait (Cha Yen)",
  "description": "Un verre rempli de glace et rempli du drame théâtral du lait condensé tourbillonnant dans les nuages ambres à travers le thé orange épicé intensément brassé — tanin, cardamome, vanille, et la douceur grasse se percutant dans l'une des grandes boissons glacées du monde. La couleur, un orange brûlé improbable, vient du mélange de thé lui-même et non de coloration alimentaire, si vous source les bonnes feuilles.",
  "cuisine": "Thaï",
  "culture": "Stall de thé de Bangkok",
  "category": "beverages",
  "tags": [
    "Thaï",
    "thé",
    "glacé",
    "lait condensé",
    "boisson",
    "doux",
    "Épice orange"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Feuilles de thé thaïlandaises (de marque Cha Tra Mue préférées — mélange aux épices oranges)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Thé ceylan avec 1/4 c. à thé chacun: cardamome, vanille, anis étoilé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau bouillante (100 C)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Lait condensé sucré",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait condensé de noix de coco (vegan)",
        "lait d'avoine sucré"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait évaporé ou lait de coco plein gras",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "lait entier",
        "Lait d'avoine pour végétalien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Glaces écrasées, généreusement emballées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "cubes de glace"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "brewed_thai_tea",
      "instructions": "Mesurez les feuilles de thé thaïlandaises dans une souche fine ou un sac de mousseline placé sur un pichet thermofuge ou un grand verre. Verser l'eau bouillante directement sur les feuilles de thé. Laisser raide exactement 5 minutes — pas moins (le thé sera faible et pâle) et pas plus (il devient tannique et amer, bien que les vendeurs thaïlandais brassent souvent très fort par le design). Après 5 minutes, retirez la souche et appuyez fermement sur les feuilles avec le dos d'une cuillère pour extraire la dernière bière la plus concentrée. Le liquide doit être une orange brûlée dramatique, presque improbable, plus foncée que n'importe quel thé orange typique, avec un arôme riche et épicé de cardamome, d'anis étoilé et de vanille chaude.",
      "visualCue": {
        "primaryTarget": "Un liquide brun-cuivre, visiblement foncé et opaque, qui libère de la vapeur parfumée avec un arôme chaud et presque chai.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thé est ambré pâle ou orange jaune, fin et aqueux. Pas de véritable arôme d'épices.",
            "action": "Remplacez le filtre et abruptez encore 2 à 3 minutes. Assurez-vous que l'eau était vraiment à ébullition, pas seulement chaude."
          },
          {
            "state": "Perfect",
            "description": "Deep cuivre-orange, presque opaque. Des odeurs de cardamome et de vanille avec une colonne vertébrale de tanin. Goûtant très fort, légèrement amer et épicé, il est destiné à être suralimenté par les standards occidentaux.",
            "action": "Laisser refroidir à la température ambiante ou refroidir à la vitesse sur un bain de glace."
          },
          {
            "state": "Overdone",
            "description": "Le thé est brun très foncé, pas orange, et sent fortement tannique et astringent. Goûte agressivement amer.",
            "action": "Ajoutez une touche d'eau supplémentaire pour diluer et augmentez le lait condensé pour compenser l'amertume supplémentaire."
          }
        ]
      },
      "feelCue": "Le thé thaï brassé devrait se sentir velouté sur le dos de la gorge — les tanins enveloppent votre bouche comme un thé noir, mais les épices laissent une piste chaude, au goût de vanille après avoir avalé."
    },
    {
      "nodeId": "step_2",
      "action": "Réfrigérer",
      "inputs": [
        "brewed_thai_tea"
      ],
      "outputState": "cooled_thai_tea",
      "instructions": "Laisser refroidir le thé brassé à température ambiante (environ 10 minutes) ou placer le pichet dans un bol d'eau glacée pendant 3 à 5 minutes de refroidissement rapide. Ne versez pas de thé chaud directement sur la glace — il dilue la bière et produit une boisson aqueuse. Le thé doit être à température ambiante ou plus frais avant de rencontrer la glace. Si vous vous préparez à l'avance, le thé brassé conserve réfrigéré jusqu'à 3 jours et s'améliore en fait à mesure que les saveurs s'intègrent et se moellent.",
      "visualCue": {
        "primaryTarget": "Le thé a refroidi à la température ambiante. Toujours la même couleur brûlée-orange, maintenant sans vapeur. Aucune condensation visible à l'intérieur d'un essai à main froide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thé est encore chaud, brûlant, et va fondre la glace instantanément quand versé.",
            "action": "Attendez plus longtemps — un bain de glace est la méthode la plus rapide. Placer le pichet dans un bol d'eau froide et remuer le thé."
          },
          {
            "state": "Perfect",
            "description": "Le thé est frais au toucher à l'extérieur du pichet, à la température ambiante ou en dessous. Toujours très orange-brun.",
            "action": "Préparer les verres avec du lait condensé et de la glace."
          },
          {
            "state": "Overdone",
            "description": "Le thé a été réfrigéré et est maintenant très froid — c'est bien et en fait préféré pour l'efficacité.",
            "action": "Passer directement à l'assemblage."
          }
        ]
      },
      "feelCue": "Touchez l'extérieur du pichet avec le dos de votre main — il devrait se sentir frais, pas chaud. Si votre main veut rester là plutôt que de s'éloigner de la chaleur, le thé est prêt."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "cooled_thai_tea",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_thai_milk_tea",
      "instructions": "Spoon 2 cuillères à soupe de lait condensé sucré dans le fond d'un grand verre — ce n'est pas facultatif, c'est la douceur structurelle de la boisson. Emballez le verre complètement avec de la glace écrasée. Verser le thé refroidi lentement sur la glace, en remplissant le verre à environ 2 cm du haut. Enfin, versez le lait évaporé ou le lait de noix de coco sur le dessus d'une hauteur afin qu'il s'enfonce sur le côté du verre dans des ruisseaux blancs, en nuageant le thé orange dans une diffusion lente et belle. Ne remuez pas — présentez-le tourbillonnant et laissez le buveur le mélanger, ou remuez à la table. Traditionnellement servi avec une paille.",
      "visualCue": {
        "primaryTarget": "Un grand verre de thé orange foncé brillamment stratifié sous des nuages tourbillonnants de lait évaporé, lait condensé pooling à la base, glace visible au-dessus de la ligne de thé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait condensé n'a pas été ajouté ou le lait évaporé a été mélangé dans — la boisson est uniformément beige-orange et le goût est mince.",
            "action": "Ajouter plus de lait condensé et ajouter le lait évaporé dans une goutte lente de hauteur pour l'effet de cascade visuelle."
          },
          {
            "state": "Perfect",
            "description": "Thé orangé dramatique, lait blanc tourbillonnant dans les panaches, caramel de lait condensé visible à la base. Goûte doux, riche en tanin, épicé et profondément satisfaisant lorsqu'il est remué ensemble.",
            "action": "Servir immédiatement avec une paille."
          },
          {
            "state": "Overdone",
            "description": "Trop de lait condensé rend la boisson cloyantement sucrée, et la saveur de thé est perdue.",
            "action": "Ajouter plus de thé pour diluer, ou ajouter une pression de jus de lime très léger pour couper la douceur."
          }
        ]
      },
      "feelCue": "La première gorgée d'une paille du fond du verre est du lait condensé pur, une douceur choquante. Par la troisième gorgée, les couches se fusionnent en quelque chose de complexe : tanin, caramel, épices, et la richesse grasse tout à la fois."
    }
  ]
};
