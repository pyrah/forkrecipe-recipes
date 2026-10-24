export default {
  "repoId": "master_brazilian_moquecabaiana_001",
  "parentRepoId": null,
  "slug": "moqueca-baiana",
  "author": "ForkRecipe Kitchen",
  "title": "Moqueca Baiana",
  "description": "Un ragoût de poisson bahaï d'une profondeur enivrante — des poissons blancs mijotés dans du lait de coco et de l'huile de palme dendê avec des tomates, des poivrons et de la coriandre, tout cuit dans un pot d'argile lourd qui tient la chaleur comme une étreinte aimante.",
  "cuisine": "Brésil",
  "culture": "Bahian",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Brésilien",
    "Bahian",
    "d'un poids au mètre carré",
    "noix de coco",
    "Moqueca",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hour",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de poissons blancs fermes (par exemple bar ou morue), morceaux de 4 cm",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "flétan",
        "Mahi-mahi",
        "tilapia"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de lime fraîchement pressé",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de palme rouge",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "huile végétale infusée d'achiote"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, tranché finement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Tomates de prune, hachées approximativement",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "tomates entières en conserve"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "poivrons rouges et verts, tranchés finement",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Coriandre fraîche, tiges et feuilles séparées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "persil à feuilles plates si coriandre-adversaire"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_10"
      ],
      "outputState": "marinated_fish",
      "instructions": "Ajouter des morceaux de poisson avec du jus de lime, une pincée de sel et de l'ail haché (la moitié de l'ail). Couvrir et réfrigérer pendant 20-30 minutes. L'acide va commencer à mettre les protéines extérieures, aidant le poisson à tenir ensemble dans le ragoût sans tomber en morceaux.",
      "visualCue": {
        "primaryTarget": "Poisson légèrement opaque et blanc aux bords où le jus de lime a contacté — autrement encore translucide et cru au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est toujours tout cru et brillant — l'acide n'a pas eu le temps d'agir.",
            "action": "Attendez 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les bords deviennent blancs opaques, l'intérieur est encore brut. Le poisson tient sa forme lorsqu'il est levé.",
            "action": "Construisez la base."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été dans l'acide trop longtemps et est blanc et ferme partout — essentiellement ceviche.",
            "action": "Cuire rapidement pour ne réchauffer que par la chaleur."
          }
        ]
      },
      "feelCue": "Le poisson devrait se sentir légèrement plus ferme aux bords qu'à son cœur — il y a une tension à la couche extérieure qui n'était pas là avant."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "sofrito_base",
      "instructions": "Chauffer l'huile dendê à feu moyen dans un pot d'argile ou un four hollandais. Ajouter l'oignon et cuire 5 minutes jusqu'à ce qu'il soit doux et doré. Ajouter le reste de l'ail et les poivrons et cuire encore 3 minutes. L'huile dendê transformera toute la base en orange vif — c'est exact et beau.",
      "visualCue": {
        "primaryTarget": "Oignons et poivrons doux et scintillants, toute la base tournait un riche safran-orange de l'huile dendê.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Oignons encore translucides et croquants, aucune couleur développée.",
            "action": "Cuire plus longtemps — ne pas précipiter l'adoucissement."
          },
          {
            "state": "Perfect",
            "description": "Les oignons translucides à dorés, les poivrons doux, tout teint une orange profonde. La cuisine sent la terre et le fruité.",
            "action": "Ajouter les tomates."
          },
          {
            "state": "Overdone",
            "description": "Oignons brunissants et commençant à coller; dendê huile fumant.",
            "action": "Déglacer avec un jet d'eau et réduire la chaleur."
          }
        ]
      },
      "feelCue": "L'huile dendê a une odeur distinctive – terreuse, légèrement fruitée, rappelant les carottes et le sol forestier. Si vous ne l'avez jamais senti avant, c'est affirmé. Fais-le confiance."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "sofrito_base",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "moqueca_broth",
      "instructions": "Ajouter les tomates et les tiges de coriandre à la sofrito. Cuire 5 minutes jusqu'à ce que les tomates commencent à se dissoudre. Verser dans le lait de coco et remuer. Porter à feu doux à feu moyen. Assaisonner bien avec le sel et le goût — le bouillon doit être riche, doux de la noix de coco et légèrement acide de la tomate.",
      "visualCue": {
        "primaryTarget": "Un bouillon profondément orange-rouge avec des morceaux visibles de tomate, qui s'échauffait doucement, le lait de coco tournoyait dans le dendê dans un dégradé de coucher de soleil.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait de coco et l'huile ne sont pas entièrement combinés — stries blanches visibles.",
            "action": "Ajouter 2 minutes de feu doux."
          },
          {
            "state": "Perfect",
            "description": "Uniforme or-orange, mijotant doucement aux bords. Des odeurs de noix de coco, de tomates et de mer.",
            "action": "Goûtez au sel et ajoutez le poisson."
          },
          {
            "state": "Overdone",
            "description": "Broth bouillant dur — le lait de coco a cassé et semble granuleux.",
            "action": "Réduire immédiatement la chaleur. L'exploitation fractionne le lait de coco. Il se réintègrera avec une chaleur douce."
          }
        ]
      },
      "feelCue": "Le bouillon devrait enrober une cuillère dans une couche mince et soyeuse, plus riche que l'eau mais plus légère que la crème. Dégustation brute vous dit tout sur l'endroit où va le ragoût fini."
    },
    {
      "nodeId": "step_4",
      "action": "Pocher",
      "inputs": [
        "marinated_fish",
        "moqueca_broth",
        "ing_09"
      ],
      "outputState": "finished_moqueca_baiana",
      "instructions": "Nettoyez doucement le poisson mariné dans le bouillon mijotant en une seule couche. Couvrir et cuire à feu moyen-doux pendant 8-12 minutes, selon l'épaisseur. Ne pas remuer — utilisez le couvercle pour vous abaisser. Le poisson se fait lorsqu'il floconne facilement au point le plus épais et est opaque partout. Scatter coriandre feuilles sur le dessus et servir directement à partir du pot d'argile.",
      "visualCue": {
        "primaryTarget": "Poisson opaque et commençant à flotter aux bords, bouillon toujours orange vif et bouillonnant doucement, vert coriandre contre la surface dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poisson encore translucide au centre quand une fourchette est pressée dans le point le plus épais.",
            "action": "Couvrir et cuire encore 2 minutes. Vérifiez encore."
          },
          {
            "state": "Perfect",
            "description": "Opaque tout au long, s'éclaboussant dans de grandes plaques humides et propres lorsqu'elles sont sondées. Broth mijotant doucement. Cilantro parfumé.",
            "action": "Servir immédiatement sur le riz blanc."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est brisé et est devenu sec et stringy, s'enfonce dans le bouillon.",
            "action": "Servir de toute façon — il devient un ragoût épais et riche plutôt que des morceaux intacts."
          }
        ]
      },
      "feelCue": "Un morceau de poisson tiré du bouillon devrait offrir une résistance douce et ensuite céder la place dans de grands flocons humides — jamais cotonneux, jamais mouillés et crus."
    }
  ]
};
