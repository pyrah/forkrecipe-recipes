export default {
  "repoId": "master_argentine_chimichurri_001",
  "parentRepoId": null,
  "slug": "chimichurri",
  "author": "ForkRecipe Kitchen",
  "title": "Argentine Chimikhurri",
  "description": "Le condiment national non officiel de la grille argentine — un béguin cru et vibrant de persil, d'ail et de vinaigre qui coupe à travers la viande carbonisée comme une lame verte.",
  "cuisine": "Argentine",
  "culture": "Parrilla / Asado",
  "category": "sauces",
  "tags": [
    "sauce",
    "l'argentine",
    "herbe",
    "grillage",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hour",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-05",
  "updatedAt": "2025-01-22",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 6,
    "bitter": 1,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Persil à feuilles plates (feuilles et tiges tendres)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Flacons de poivre rouge (aji molido)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "pimenton dulce"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chop herbes",
      "inputs": [
        "ing_01"
      ],
      "outputState": "chopped_parsley",
      "instructions": "Laver et bien sécher le persil — les herbes humides font un chimiichurri boueux. Rassembler les feuilles et les tiges tendres dans un faisceau serré et hacher finement avec un couteau tranchant. N'utilisez pas de robot culinaire — la lame écrase les parois cellulaires et la transforme en pâte. Vous voulez une texture brute, coupée à la main.",
      "visualCue": {
        "primaryTarget": "Un monticule de persil finement mais irrégulièrement haché — les fragments individuels de feuilles sont encore reconnaissables, vert vif, pas musqué ou foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes feuilles, certaines encore entières. Tiges visibles comme de longues fibres.",
            "action": "Continuez à couper — ramassez, faites pivoter la pile à 90 degrés et hachez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Très bien, la côte confettie. Vert émeraude vif. Pas de grosses tiges. Sécher au toucher.",
            "action": "Transférer dans un bol."
          },
          {
            "state": "Overdone",
            "description": "Fini à une pâte humide. Pool de liquide vert foncé sur la planche à découper.",
            "action": "Utilisez-le, mais la texture sera plus comme pesto que chimichurri. La saveur est encore bonne."
          }
        ]
      },
      "feelCue": "La planche à découper devrait sonner comme un robinet-tap-tap rapide, pas une gifle mouillée. Si le couteau se frotte plutôt qu'il ne se coupe, il est terne — aiguisez - le."
    },
    {
      "nodeId": "step_2",
      "action": "Ail mince",
      "inputs": [
        "ing_02"
      ],
      "outputState": "minced_garlic",
      "instructions": "Peler les gousses d'ail et les hacher très finement à la main. Chimikhurri n'est pas cuit, donc de grandes pièces d'ail vous donneront des morsures sévères et brûlantes. La menthe devrait être presque une pâte, mais obtenue avec un couteau, pas une presse.",
      "visualCue": {
        "primaryTarget": "Une fine menthe humide sans morceau plus grand qu'un grain de sable grossier. L'ail est d'ivoire pâle, non bruni ni meurtri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de 3-4 mm de diamètre. Des morceaux distincts qui donneront des brûlures d'ail crues.",
            "action": "Saupoudrer une pincée de sel sur l'ail et utiliser le plat du couteau pour l'écraser et le racler dans une pâte plus fine."
          },
          {
            "state": "Perfect",
            "description": "Cohérence quasi-collée. Des grains individuels à peine visibles. Ça sent bon mais propre.",
            "action": "Ajouter au persil."
          },
          {
            "state": "Overdone",
            "description": "Poussé à travers une presse — complètement purifié avec une teinte bleu-vert se développant.",
            "action": "Utilisez-le, mais la saveur d'ail sera plus nette et plus omniprésente. Envisager de réduire le montant d'un tiers."
          }
        ]
      },
      "feelCue": "L'ail fraîchement haché doit être collant entre les doigts. S'il est sec et friable, les girofles étaient vieux — la saveur sera muée."
    },
    {
      "nodeId": "step_3",
      "action": "Combiner",
      "inputs": [
        "chopped_parsley",
        "minced_garlic",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "raw_chimichurri",
      "instructions": "Dans un bol, mélanger le persil et l'ail. Ajouter les flocons de poivre rouge et saler, puis verser le vinaigre et l'huile d'olive. Mélangez doucement avec une fourchette — ne fouettez pas. Le chimiahurri doit être lâche et cassé, non émulsifié. L'huile et le vinaigre doivent rester légèrement séparés.",
      "visualCue": {
        "primaryTarget": "Une sauce verte molle et épaisse avec des flocons de poivre rouge visible et un éclat d'huile flottant sur le dessus. Ce n'est pas une purée uniforme, plus un goût rustique et cuivrable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sécher — les herbes ne sont pas enrobées. L'huile est assise dans une couche séparée.",
            "action": "Mélanger plus soigneusement avec une fourchette, plier du bas vers le haut."
          },
          {
            "state": "Perfect",
            "description": "Les herbes brillent avec de l'huile. Les bassins de vinaigres sont visibles mais distribués. Une cuillère se tient lâchement, puis se sépare sur l'assiette.",
            "action": "Couvrir et laisser reposer."
          },
          {
            "state": "Overdone",
            "description": "Surmixé dans une pâte épaisse et émulsifiée. Vert uniforme sans variation de texture.",
            "action": "Ajoutez un peu plus d'huile et de vinaigre et remuez une fois — essayez de briser l'émulsion."
          }
        ]
      },
      "feelCue": "Goûtez - le vinaigre doit frapper d'abord, puis la vague herbacée verte, puis une chaleur d'ail lente à l'arrière. Si l'ail domine, ajouter plus de persil."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "raw_chimichurri"
      ],
      "outputState": "finished_chimichurri",
      "instructions": "Couvrir et laisser reposer le chimichurri à température ambiante pendant au moins 30 minutes, ou réfrigérer jusqu'à une semaine. Les saveurs ont besoin de temps pour se marier — le vinaigre adoucit la morsure de l'ail, l'huile porte les saveurs d'herbe, et les flocons de poivre fleurissent. Mélanger avant de servir.",
      "visualCue": {
        "primaryTarget": "L'huile a pris une teinte verte des herbes. Les flocons de poivre ont adouci et approfondi en couleur. Le mélange global semble plus cohérent que lors du premier mélange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il a encore le goût d'ingrédients distincts: vinaigre vif, ail cru et huile de fard.",
            "action": "Attendez encore. Trente minutes est le minimum — la nuit est idéale."
          },
          {
            "state": "Perfect",
            "description": "Les saveurs sont unifiées. L'ail est présent mais pas agressif. Les herbes ont un goût brillant mais arrondi. Une chaleur douce persiste.",
            "action": "Servir aux côtés des viandes grillées, cuilleré généreusement."
          },
          {
            "state": "Overdone",
            "description": "Après une semaine ou plus, la couleur s'estompe en olive-drabe. Les herbes ont un goût plat et l'ail domine.",
            "action": "Il est passé à sa prime. Faites un lot frais — le chimichurri est destiné à être fait souvent."
          }
        ]
      },
      "feelCue": "Le chimiahurri reposé devrait sentir comme un jardin sous la pluie d'été — vert, terreux, avec un tranchant de vinaigre. Si l'odeur d'ail remplit la pièce lorsque vous ouvrez le contenant, il faut plus de temps de repos."
    }
  ]
};
