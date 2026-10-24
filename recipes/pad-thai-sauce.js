export default {
  "repoId": "master_thai_pad-thai-sauce_001",
  "parentRepoId": null,
  "slug": "pad-thai-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Pad Sauce thaïlandaise",
  "description": "La sauce jaune-ambre qui définit le pad thai — un équilibre prudent de tamarin aigre, sucre de palme sucré, et sauce de poisson funky qui caramélise autour des nouilles de riz dans le wok, créant les bords collants et légèrement carbonisés que les vendeurs de rue appellent la marque d'une assiette bien faite.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "sauces",
  "tags": [
    "pad thai",
    "Thaï",
    "Tamarin",
    "sauce de poisson",
    "Alimentation de rue"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 4,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Pâte de tamarin (à partir d'un bloc, non concentré)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "concentré de tamarin (utiliser 1 partie)",
        "jus de citron vert (perte la profondeur mais travaille)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de palme (jaggery), râpé ou émietté",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce de poisson (Tiparos ou Megachef préféré)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + 1/4 de jus de lime pour végétalien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de soja foncé (pour la couleur, en option)",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "tamarind_liquid",
      "instructions": "En cas d'utilisation du tamarin de bloc : couper 60 g et tremper dans 120 ml d'eau chaude (non bouillante) pendant 15 minutes. Travaillez le bloc ramolli avec vos doigts, pressez et pressez jusqu'à ce que toute la pulpe se dissout dans l'eau. Verser le mélange à travers un tamis fin, en appuyant dur sur les solides pour extraire tout le liquide. Jeter les fibres et les graines. Vous avez besoin d'un épais liquide brun foncé, environ 3 cuillères à soupe de pâte concentrée par portion de sauce. Si vous utilisez un concentré de tamarin à partir d'un pot, mincez avec un peu d'eau à une consistance versable.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse brun foncé avec la consistance du sirop mince — pas de fibres, pas de graines, pas de grumeaux de pulpe. La couleur est un brun-ambre profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bloc n'a pas complètement ramolli et les morceaux flottent encore. Le liquide est pâle et mince.",
            "action": "Faire tremper plus longtemps dans l'eau chaude et masser plus agressivement, ou utiliser de l'eau légèrement plus chaude."
          },
          {
            "state": "Perfect",
            "description": "Grand, sombre, liquide de tamarin lisse. Lorsque vous soulevez la souche, presque aucun liquide ne doit rester — vous avez extrait toute la saveur.",
            "action": "Mesurer 3 parties pour la sauce."
          },
          {
            "state": "Overdone",
            "description": "S/O — cette étape est extractive. Le sursoufflement n'endommage pas le tamarin.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de liquide de tamarin entre vos doigts et votre goût — il doit être intensement aigre, fruité et légèrement sucré avec une légère astringence sur les côtés de votre langue."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "tamarind_liquid",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "raw_pad_thai_sauce",
      "instructions": "Mélanger le liquide de tamarin, le sucre de palme, la sauce de poisson, la sauce aux huîtres et la sauce de soja foncé dans une petite casserole. Mettre à feu doux et remuer continuellement jusqu'à ce que le sucre de palme se dissout complètement — les morceaux de sucre de palme sont plus denses que le sucre blanc et ont besoin de chaleur et de patience. Une fois dissous, augmenter légèrement le feu et laisser mijoter pendant 2 à 3 minutes. La sauce s'assombrira légèrement et s'épaissira un peu comme l'humidité s'évapore. Retirer du feu.",
      "visualCue": {
        "primaryTarget": "Une sauce ambrée foncée brillante avec la consistance d'un sirop lâche. Lorsque vous remuez, il se déplace comme un liquide unique et cohésif. Pas de granules de sucre de palme visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre de palme non entièrement dissous — les morceaux visibles ou les granules coulent au fond. La sauce a un goût déséquilibré: trop aigre dans une cuillère, trop sucré dans la prochaine.",
            "action": "Continuez à remuer à feu doux. Le sucre de palme a besoin de plus de temps que le sucre blanc."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, brillant, sauce brun-ambre. Goûte simultanément aigre, sucré et salé en parfait équilibre lorsqu'il est échantillonné sur une cuillère.",
            "action": "Goûtez et ajustez l'équilibre, puis refroidissez à la température ambiante avant utilisation."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est épaisse et collante comme la mélasse. Il se saisira dans le wok et brûlera.",
            "action": "Arroser de 1 à 2 cuillères à soupe d'eau et remuer à feu doux pour incorporer."
          }
        ]
      },
      "feelCue": "Exécutez une cuillère sur le fond de la poêle — elle devrait laisser un bref sentier propre qui se remplit en 2 secondes. Plus lentement que ça et la sauce est trop épaisse; plus rapide et il faut plus de réduction."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "raw_pad_thai_sauce"
      ],
      "outputState": "finished_pad_thai_sauce",
      "instructions": "Goûtez la sauce de façon critique sur une cuillère propre — la sauce thai à la crème doit d'abord frapper la sure, puis la sauce sucrée, puis salée, avec une sous-vie salée. Ajuster: trop aigre → ajouter plus de sucre de palme en petites quantités; trop doux → ajouter plus de sauce de poisson (pas de tamarin, qui changerait le corps); plat → ajouter plus de sauce de poisson. La sauce doit goûter nettement plus fort que vous voulez le plat fini, car elle sera diluée légèrement par l'eau de nouilles et la vapeur de wok pendant la cuisson. Conserver dans un pot à température ambiante jusqu'à 1 semaine, ou réfrigérer pendant 1 mois.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre claire et brillante à température ambiante. Quand elle est versée d'une cuillère, elle tombe dans un cours d'eau mince et fluide, non épais et visqueux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce n'a pas été goûtée et ajustée. Il peut être déséquilibré — l'auresse du tamarin varie sauvagement entre les marques et les lots.",
            "action": "Goûte. Toujours goûter. Un calibrage de 10 secondes permet d'économiser une plaque décevante de thaï."
          },
          {
            "state": "Perfect",
            "description": "Équilibré, aromatisé intensément, légèrement sursaisonné délibérément. Il sent le tamarin, le caramel et le poisson fermenté de manière harmonieuse.",
            "action": "Laisser refroidir complètement avant d'utiliser ou de stocker. Utilisez 3 à 4 cuillères à soupe par portion de nouilles dans le wok."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été ajustée tellement de fois qu'elle est devenue trouble et confuse dans la saveur.",
            "action": "Commencer à partir de zéro — un petit lot de sauce thai est bon marché et rapide à faire. Mieux vaut une sauce propre qu'une sauce compromise."
          }
        ]
      },
      "feelCue": "Au moment où la sauce frappe un wok chaud et hurlant, elle devrait étourdir violemment et libérer un nuage de vapeur caramel-sour — c'est-à-dire l'odeur du pad thai étant né; si le wok n'est pas assez chaud, la sauce vapeur au lieu de caraméliser."
    }
  ]
};
