export default {
  "repoId": "master_korean_tteokbokki-sauce_001",
  "parentRepoId": null,
  "slug": "tteokbokki-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Tteokbokki",
  "description": "La sauce brûlante et collante qui enrobe des gâteaux de riz mâcheux dans la nourriture la plus aimée de la rue coréenne — gochujang et gochugaru mijotés d'anchois dans une chaleur brillante et douce.",
  "cuisine": "Coréen",
  "culture": "Séoul",
  "category": "sauces",
  "tags": [
    "coréen",
    "épicé",
    "Gochujang",
    "sauce",
    "Produits de la rue",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Stock d'anchois-kelp (ou eau pour végétalien)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "kombu dashi",
        "eau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Gochujang (Pâte de chili fermentée coréenne)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Doenjang mélangé avec du piment"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Gochugaru (Flacon de chili grossier coréen)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Poivre d'Alep (moins de chaleur)",
        "flocons de poivre rouge concassé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de riz",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de poisson",
        "tamari"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Huile de sésame grillée",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "simmered_sauce_base",
      "instructions": "Verser le stock d'anchois-kelp dans une grande casserole à fond lourd ou une casserole basse et laisser mijoter légèrement à feu moyen. Ajouter le gochujang, le gochugaru, le sucre, la sauce de soja et l'ail haché, puis fouetter tout ensemble jusqu'à ce que le gochujang ait complètement dissous et qu'il ne reste pas de croûtes — le gochujang est épais et collant et s'assied dans des grumeaux si non agités agressivement au départ. Augmenter le feu à moyen-élevé et porter à une bulle active. La sauce doit mijoter à découvert, en remuant occasionnellement, pendant 8 à 10 minutes. Comme il réduit, la couleur s'approfondira d'un rouge orange vif à une brique rouge-brûlé et la surface passera de l'eau à brillant.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique brillant et bouillonnante sans grumeaux, la surface chatoyante d'un léger éclat et la consistance commençant à s'épaissir — elle devrait envelopper le dos d'une cuillère légèrement mais toujours couler librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, orange plutôt que rouge brique, et il y a encore des morceaux visibles de gochujang non dissous flottant sur la surface.",
            "action": "fouetter vigoureusement pour briser toutes les bosses de gochujang, puis continuer à mijoter — l'eau doit réduire davantage avant que la sauce puisse développer corps et profondeur."
          },
          {
            "state": "Perfect",
            "description": "Deep brique-rouge, bouillonnant activement, enveloppe l'arrière d'une cuillère dans une couche translucide qui tient quand vous lancez un doigt à travers. La cuisine sent le chili fermenté et l'ail grillé.",
            "action": "Réduire légèrement la chaleur et ajouter maintenant des gâteaux de riz si vous servez immédiatement, ou retirer de la chaleur et terminer avec de l'huile de sésame."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte épaisse et foncée qui bulle lentement et fortement, collée aux côtés de la poêle et commençant à brûler aux bords.",
            "action": "Ajouter immédiatement un jet d'eau ou de bouillon et remuer vigoureusement pour se détendre. La sauce ne devrait jamais atteindre la consistance de la confiture à ce stade — elle doit enrober les gâteaux de riz, et non les cimenter."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers la sauce mijotante et maintenez-la horizontalement — la sauce doit couler de la cuillère dans une feuille lente et régulière plutôt que de couler dans de fines gouttes (trop mince) ou de s'accrocher dans des gousses épaisses (trop épaisses)."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "simmered_sauce_base"
      ],
      "outputState": "reduced_tteokbokki_sauce",
      "instructions": "Si vous utilisez des gâteaux de riz, ajoutez-les maintenant et faites cuire 4 à 5 minutes jusqu'à ce qu'ils soient chauffés et ont absorbé une partie de la sauce. L'amidon libéré des gâteaux de riz épaissira naturellement la sauce dans sa consistance brillante et collante. Si vous préparez la sauce sans gâteaux de riz à conserver ou à utiliser plus tard, continuez à réduire jusqu'à ce qu'une cuillère lâchée sur une assiette froide se fixe à une consistance épaisse, semblable à du gel qui tient sa forme brièvement avant de s'étendre lentement. Goûtez et ajustez : si plat, ajoutez une pincée plus de sauce de soja ; si trop dure, ajoutez un peu plus de sucre ; si mince, continuez à réduire.",
      "visualCue": {
        "primaryTarget": "Une sauce lustrée, profondément pigmentée, qui s'accroche à tout ce qui est dans la poêle: enrober les gâteaux de riz dans une couche épaisse et laquée plutôt que de les mettre en commun. La surface a le reflet de grenat poli.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les piscines de sauce sous les gâteaux de riz et les gâteaux semblent non enduits et pâles. La sauce est encore visiblement aqueuse et orange aux bords.",
            "action": "Continuer la cuisson à feu moyen-élevé, en remuant doucement pour que les gâteaux ne collent pas, jusqu'à ce que la sauce diminue et que l'amidon des gâteaux l'épaississe suffisamment."
          },
          {
            "state": "Perfect",
            "description": "Chaque gâteau de riz est glacé dans une sauce épaisse et rouge foncé qui bouge à peine lorsque la poêle est inclinée. La sauce est brillante, collante et intensément aromatique.",
            "action": "Retirer du feu et finir avec de l'huile de sésame."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue une pâte presque solide, les gâteaux de riz collent ensemble dans un tas, et la sauce commence à brûler sur le fond de la poêle avec une odeur vive et acride.",
            "action": "Ajouter la cuillère à soupe d'eau par la cuillère à soupe, en remuant vigoureusement, pour se détendre. Réduisez immédiatement la chaleur — la poêle est trop chaude et la sauce est passée à la colle."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un gâteau de riz à l'aide d'une cuillère: il doit produire avec une résistance ferme et printanière — pas musclée, pas dure. La sauce enrobant le gâteau doit se sentir collant sur le dos de la cuillère, comme des bonbons chauds, tirant dans un fil avant de casser propre."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "reduced_tteokbokki_sauce",
        "ing_07"
      ],
      "outputState": "finished_tteokbokki_sauce",
      "instructions": "Retirer la poêle du feu et mélanger l'huile de sésame grillée. Les composés aromatiques sensibles à la chaleur dans l'huile de sésame se dissipent s'ils sont ajoutés trop tôt — terminez toujours avec le feu pour obtenir le parfum plein de noix grillées. Goûtez une dernière fois : la sauce devrait délivrer une chaleur audacieuse et immédiate du gochugaru, une complexité fermentée plus profonde du gochujang, une douceur propre du sucre qui arrondit les bords sans cloître, et un sel souillé qui prolonge la finale. Servir immédiatement dans un bol ou à partir de la poêle; tteokbokki n'attend personne.",
      "visualCue": {
        "primaryTarget": "La sauce finie est un rouge brique brillant et bruni avec un léger éclat d'huile de sésame à travers la surface, l'arôme passant du chili pur à chaud, noix et rond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Huile de sésame non encore ajoutée — la sauce sent une dimension, toute chaleur et ferment, avec un bord légèrement brut.",
            "action": "Incorporer l'huile de sésame hors de la chaleur; ne sautez pas cette étape."
          },
          {
            "state": "Perfect",
            "description": "Une sauce brillante et complexe avec un arôme en couches — chaleur, ferment, douceur, noix — qui fait que le cuisinier veut voler des cuillères directement de la poêle.",
            "action": "Servir immédiatement. La sauce s'épaissit davantage en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "L'huile de sésame a été ajoutée à la sauce à bouillir et la fragrance a surtout été chassée par la chaleur, laissant un éclat gras plutôt qu'une finale de noix.",
            "action": "Ajouter une autre petite bruine d'huile de sésame juste avant de servir directement dans chaque bol."
          }
        ]
      },
      "feelCue": "Une cuillère finie devrait enrober le dos de votre langue dans la chaleur d'abord, puis la douceur, puis une base umami profonde et fermentée qui persiste. La sauce doit s'accrocher à la cuillère comme du miel chaud, en tirant dans un fil mince avant de tomber."
    }
  ]
};
