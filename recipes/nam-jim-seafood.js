export default {
  "repoId": "master_thai_nam-jim-seafood_001",
  "parentRepoId": null,
  "slug": "nam-jim-seafood",
  "author": "ForkRecipe Kitchen",
  "title": "Nam Jim Sauce de fruits de mer",
  "description": "La sauce à tremper crue électrifiante de la Thaïlande pour les fruits de mer grillés - l'ail fourré, le chili frais et la racine de la coriandre laissent libre dans un mélange de poisson-sauce-lime fortement aigre et herbacé.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "condiments",
  "tags": [
    "Thaï",
    "Saucisse de fruits de mer",
    "épicé",
    "acide",
    "cru",
    "frais",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
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
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chilies oculaires (prik kii nuu), tiges enlevées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chili (milder)",
        "flocons de chili séchés (1 partie)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Racines de coriandre, raclées propres (ou tiges)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tiges de coriandre, doublées en quantité"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + pincée de MSG pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme ou sucre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "aromatic_paste",
      "instructions": "Dans un mortier de granit, combiner les gousses d'ail, les piments oculaires des oiseaux et les racines de coriandre. Commencez par frapper l'ail en premier — il faut le plus de force. Une fois l'ail rugueux et juteux, ajoutez les racines de coriandre et livrez à nouveau. Enfin ajouter les piments. Travaillez-les tous ensemble avec un mouvement de meulage circulaire, alternant entre le pilonnage et le grattage des côtés vers l'intérieur avec une cuillère. Le but est une pâte grossière et humide, pas une purée lisse. Vous voulez des fils visibles de racine de coriandre, de petits flocons de peau de chili, et une base d'ail légèrement chunky. Les huiles libérées par battage sont fondamentalement différentes de celles libérées par coupe : elles sont plus brillantes, plus volatiles et plus intensément parfumées.",
      "visualCue": {
        "primaryTarget": "Pâte grossière, de couleur vert vif, avec des graines de chili visibles, des jus d'ail mis à la base du mortier et un parfum presque écrasant d'ail cru, de chili lime-brillant et de coriandre terreuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ingrédients sont ecchymosés mais non décomposés — de grands morceaux d'ail sont encore visibles et la coriandre est en longs brins plutôt qu'en pâte.",
            "action": "Continuez à frapper. Si l'ail saute, ajoutez une pincée de sel comme abrasif pour saisir les ingrédients contre le mortier."
          },
          {
            "state": "Perfect",
            "description": "Une pâte cohésive et rugueuse : l'ail entièrement cassé à un frottis juteux, le chili cassé mais avec des graines encore visibles, fibres de coriandre intégrées. La chaleur brute vous frappe dès que vous vous penchez sur le mortier.",
            "action": "Ajouter les ingrédients liquides directement dans le mortier et mélanger."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été clouée à une purée ultra-lisse sans texture visible. Les graines de chili sont entièrement broyées.",
            "action": "La sauce sera encore bonne mais sera plus émulsifiée et légèrement moins vibrante sur l'assiette. Pour la prochaine fois, arrêtez-vous au stade grossier."
          }
        ]
      },
      "feelCue": "Après les quelques premiers livres, frottez une petite partie de la pâte sur le dos de votre poignet — l'ail devrait déjà piquer la peau très faiblement. Ce piquant est l'allicine qui libère, qui est le même composé qui rend la sauce électrique en bouche."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "aromatic_paste",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_nam_jim",
      "instructions": "Ajoutez le sucre de palme directement au mortier et livrez brièvement pour le casser dans la pâte — il doit se dissoudre complètement, et non pas simplement s'asseoir en morceaux. Verser ensuite le jus de lime et la sauce de poisson. Mélanger avec une cuillère pour tout combiner, en dégustant au fur et à mesure. La séquence des saveurs dans un nam jim bien équilibré fruits de mer devrait être: aigre d'abord et le plus fort, puis salé, puis doux comme un fond qui empêche l'acide d'être dur, puis une chaleur de bâtiment qui arrive en dernier et s'attarde. Ajuster le citron vert pour plus d'amer, la sauce de poisson pour plus de sel, le sucre pour adoucir la dureté. Cette sauce devrait être audacieuse au point de presque-trop-much — c'est la rencontre de fruits de mer grillés qui peut la prendre.",
      "visualCue": {
        "primaryTarget": "Sauce fine, de couleur vert vif avec une teinte dorée du sucre de palme dissous et des graines de chili visibles et des fragments de coriandre suspendus dans un liquide clair et vibrant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat et unidimensionnel — seul l'acide se distingue parce que le sucre n'a pas dissout et que la sauce de poisson n'est pas complètement intégrée.",
            "action": "Pound le sucre dans la pâte plus agressive avant d'ajouter les liquides, et remuer pendant au moins 30 secondes après avoir combiné pour aider le sucre à se dissoudre dans le jus de citron vert."
          },
          {
            "state": "Perfect",
            "description": "Les quatre saveurs sont simultanées: l'auresse vous fait saliver, le sel concentre la saveur, la douceur arrondit les bords, et la chaleur brille derrière les trois autres. Le parfum de la coriandre est vif et vert.",
            "action": "Servir immédiatement — le jus de lime s'oxyde rapidement et le parfum frais est à son meilleur dans les 30 premières minutes."
          },
          {
            "state": "Overdone",
            "description": "Trop de sauce de poisson domine : la sauce sent et goûte presque exclusivement d'anchois fermenté sans éclat acide.",
            "action": "Ajouter plus de jus de lime pour rétablir le rapport acide-sel. Ajoutez une pincée de sucre pour rétablir l'équilibre. Goûtez soigneusement et ajoutez en petits incréments."
          }
        ]
      },
      "feelCue": "Prenez une petite gorgée d'une cuillère et maintenez-la sur votre langue pendant 3 secondes complètes. Le aigre doit s'annoncer immédiatement aux côtés de la langue. Si vous sentez principalement la chaleur, ajoutez plus de citron vert. Si vous sentez principalement du sel, ajoutez plus de citron vert et une pincée de sucre. Si vous vous sentez surtout sucré, ajoutez quelques gouttes de sauce de poisson."
    }
  ]
};
