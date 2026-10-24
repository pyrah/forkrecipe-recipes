export default {
  "repoId": "master_thai_thai_peanut_sauce_001",
  "parentRepoId": null,
  "slug": "thai-peanut-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce d'arachide thaïlandaise",
  "description": "Une sauce satay aux cacahuètes crémeuse et riche en noix de coco, équilibrée sur la corde serrée entre le sucre de palme sucré, le tamarin aigre, la sauce de poisson salée, et la lente brûlure de chili rouge – nutty et assez riche pour s'accrocher à une brochette, assez brillante pour couper à travers l'omble.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "sauces",
  "tags": [
    "arachide",
    "satay",
    "Thaï",
    "noix de coco",
    "trempage-sauce",
    "citron vert",
    "poisson-sauce"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Beurre d'arachide naturel lisse (ou arachides grillées fraîchement moulues)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Beurre d'amande",
        "beurre de tournesol (sans noix)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lait de coco (graisse)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco éclaircie avec de l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de palme (séché ou râpé)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja légère + pincer MSG pour végétarien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "concentré de tamarin éclairci avec de l'eau"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Pâte de curry rouge thaïlandaise",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "sambal oelek",
        "1 c. à thé de piments séchés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Ail (mentionné à une pâte)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Cacahuètes grillées concassées et piment rouge tranché",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes frites",
        "coriandre fraîche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_02"
      ],
      "outputState": "spiced_coconut_base",
      "instructions": "Verser la moitié du lait de coco dans une petite casserole à feu moyen. Ajouter la pâte de curry rouge et l'ail et cuire, en remuant constamment, pendant 2 à 3 minutes jusqu'à ce que la pâte soit parfumée et que l'huile dans la pâte commence à se séparer comme de petites lèches au bord de la poêle. Cette brève étape de friture — même dans le lait de coco plutôt que dans l'huile — fait cuire l'odeur crue des épices séchées et réveille les aromatiques. L'odeur passe de cru et dur à chaud et grillé.",
      "visualCue": {
        "primaryTarget": "Une base de noix de coco aromatique rougeâtre avec des perles visibles d'huile rouge-orange flottant aux bords; l'odeur est passée de cru à parfumé et arrondi.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte semble encore crue et rouge vif, sentant fortement le chili séché et l'ail cru sans aucune profondeur grillée.",
            "action": "Continuez à remuer à feu moyen — la pâte a besoin d'au moins 2 minutes complètes en contact avec le liquide chaud pour fleurir."
          },
          {
            "state": "Perfect",
            "description": "Huile perlée à la surface, pâte légèrement foncée, un arôme épicé chaud remplissant la cuisine avec aucune de la dureté d'ail crue.",
            "action": "Ajouter le beurre d'arachide et le reste de lait de coco."
          },
          {
            "state": "Overdone",
            "description": "Le lait de coco s'est réduit trop loin, la pâte est collante et brûlante, et une note acride brûlée se lève.",
            "action": "Ajouter immédiatement une touche de lait de coco pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Le lait de coco doit buller doucement autour de la pâte, ne pas éclabousser violemment. Penchez - vous — l'arôme passe de quelque chose qui pique le nez à quelque chose de chaud et appétissant, comme marcher dans une bonne cuisine thaïlandaise."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "spiced_coconut_base",
        "ing_01"
      ],
      "outputState": "peanut_base",
      "instructions": "fouetter le beurre d'arachide et le reste du lait de coco, en remuant jusqu'à ce qu'il soit complètement lisse et uniforme. Faire mijoter légèrement à feu moyen-doux, en fouettant régulièrement. La sauce s'épaissira considérablement au fur et à mesure que les protéines d'arachide cuireont et que le lait de noix de coco diminuera; s'il se resserre au-delà d'une consistance lente, mince avec un jet d'eau ou de lait de noix de coco. Cuire de 5 à 8 minutes jusqu'à ce que l'arachide crue goûte moelleux dans une profondeur torréfié, noix.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, tonifiée en terre cuite d'épaisseur moyenne, légèrement bouillonnante avec des blups paresseux, uniformément brillante, sans morceaux de beurre d'arachide visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre d'arachide encore visible dans les stries; la sauce a un goût cru et de soja plutôt que de noix et rond.",
            "action": "Continuez à fouetter et à mijoter — 2 minutes de plus unifient généralement une sauce grumelée."
          },
          {
            "state": "Perfect",
            "description": "Doux, épais mais agréable, uniformément coloré. Enrober l'arrière d'une cuillère et s'égoutter lentement. Goûté de noix et riche.",
            "action": "Ajouter les ingrédients assaisonnés d'une mijotée vigoureuse."
          },
          {
            "state": "Overdone",
            "description": "La sauce est si épaisse qu'elle tient sa forme comme du beurre de cacahuètes et s'attrape sur le fond de la poêle.",
            "action": "Finissez avec de l'eau en petits ajouts, en remuant vigoureusement et abaissez la chaleur."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir veloutée et enduite riche pendant que vous remuez — la cuillère doit glisser légèrement pendant qu'elle se déplace à travers la base épaissée. Écoutez le blup lent et en pente d'un mijot bien épais."
    },
    {
      "nodeId": "step_3",
      "action": "Solde",
      "inputs": [
        "peanut_base",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08"
      ],
      "outputState": "finished_thai_peanut_sauce",
      "instructions": "Hors du feu, mélanger le sucre de palme jusqu'à dissolution, puis ajouter la sauce de poisson et le jus de lime. Goûtez et ajustez : cette sauce doit d'abord être sucrée, puis la sauce salée-saucie, puis le citron vert vive, avec la chaleur qui monte lentement à l'arrière. Tuez chaque élément en petites doses — une cuillère à café de citron vert soulève plus que vous ne vous attendez, quelques gouttes de sauce de poisson s'approfondissent sans la pousser salée. Ajouter de l'eau si nécessaire pour atteindre une consistance qui s'accroche à une brochette mais s'écoule d'une cuillère. Verser dans un bol, disperser avec des cacahuètes écrasées et du chili tranché, et servir au chaud.",
      "visualCue": {
        "primaryTarget": "Une sauce riche, brillante, en terre cuite, assise dans un bol surmonté d'arachides croquantes et de chili rouge vif, assez épaisse pour s'y remplir lentement après qu'une cuillère l'ait traversé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat ou une note — soit trop salée de la sauce de poisson sans éclat, soit trop sucrée sans l'équilibre acide.",
            "action": "Ajouter le jus de lime une cuillère à café à la fois, goûter après chaque. Sweet-salty-sour doit arriver en ordre, réparer celui qui manque."
          },
          {
            "state": "Perfect",
            "description": "La douceur arrive en premier, suivie d'une profondeur savoureuse, puis la luminosité du citron vert se coupe, et la chaleur persiste. La texture est épaisse mais versable.",
            "action": "Garnir et servir à la fois avec satay, crudités ou légumes à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Habillage et unidimensionnel — trop doux, ou tranchant et aigre, ou mince et aqueux de sur-dilution.",
            "action": "Une pincée de sel et un peu plus de beurre d'arachide s'épaississent et mettent en terre une sauce outre-mer. Rééquilibrer lentement."
          }
        ]
      },
      "feelCue": "Une bonne sauce satay devrait se sentir veloutée et subtilement gritte de l'arachide quand elle frappe la langue — jamais vitreuse-louche comme la sauce commerciale. La chaleur devrait arriver lentement, réchauffer le palais plutôt que de l'attaquer."
    }
  ]
};
