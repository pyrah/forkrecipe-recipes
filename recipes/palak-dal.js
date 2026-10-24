export default {
  "repoId": "master_indian_palak_dal_001",
  "parentRepoId": null,
  "slug": "palak-dal",
  "author": "ForkRecipe Kitchen",
  "title": "Palak Dal",
  "description": "Toor dal cuit à une soupe épaisse jaune doré, puis plié avec une purée d'épinards frais qui colore un vert de forêt profonde, fini avec une moutarde-semence, feuille de curry, et asafoetida tadka qui craque et fleurit à travers la surface comme une épice-tempête en miniature. Nutritionnellement dense et profondément réconfortant, c'est le dal quotidien qui fait le goût du travail protéinique du sous-continent comme une célébration.",
  "cuisine": "Indiens",
  "culture": "Inde du Sud",
  "category": "grains",
  "tags": [
    "dal",
    "lentilles",
    "épinards",
    "Inde du Sud",
    "végétarien",
    "Tadka",
    "Graines de moutarde"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tor dal (pois de pigeon brisés), rincé",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "(lentilles rouges)",
        "Dal de lune"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 3.5,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Epinards frais, lavés, tiges enlevées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "épinards congelés, dégelés et pressés"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de ghee ou de coco",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Graines de moutarde (noir)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Graines de cumin",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles fraîches de curry (12–15 feuilles)",
      "ratioValue": 12,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Asafoetida (hing), une petite pincée",
      "ratioValue": 0.1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Piments rouges séchés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "1/4 c. à thé de piments rouges"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "eau de tamarin (1 c. à thé pâte de tamarin dissoute dans 2 c. à thé eau)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cooked_dal",
      "instructions": "Mélanger le dal, l'eau et le curcuma rincé dans une cuisinière ou une casserole. Dans une cuisinière à pression : sceller et cuire à feu vif pendant 3-4 sifflets, puis laisser relâcher la pression naturellement pendant 10 minutes avant l'ouverture. Dans un pot ouvert: porter à ébullition à feu vif, écraser abondamment la mousse, puis laisser mijoter doucement avec le couvercle fissuré, en remuant toutes les 10 minutes, pendant 40 à 50 minutes jusqu'à ce qu'il soit complètement doux. Le dal est fait lorsque vous pouvez pincer un grain entre vos doigts et il écrase instantanément avec une résistance nulle. Utilisez une cuillère en bois ou un fouet pour remuer vigoureusement jusqu'à ce que le dal soit assez lisse — vous voulez que les lentilles individuelles s'effondrent dans un porridge doré unifié plutôt que de rester assis entier dans un bouillon. Assaisonner avec la moitié du sel maintenant. La base doit être plus épaisse que la soupe mais plus lâche que l'hummus.",
      "visualCue": {
        "primaryTarget": "Un porridge épais, uniforme et doré, sans lentilles entières visibles. Une cuillère traînée sur le fond devrait révéler un sentier propre qui se remplit de plus de 2 à 3 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles tiennent leur forme et le liquide est mince et séparé. Pincher un grain révèle une résistance ferme et crayeuse.",
            "action": "Continuer la cuisson en ajoutant de l'eau si nécessaire. Les lentilles ont besoin de plus de chaleur et de vapeur pour s'effondrer complètement."
          },
          {
            "state": "Perfect",
            "description": "Épais et crémeux, or vif, entièrement unifié. Ça sent doux et chaud. S'effondre de la cuillère dans des rubans lents et lourds.",
            "action": "Whisk à lisser, assaisonner et commencer à préparer les épinards."
          },
          {
            "state": "Overdone",
            "description": "Très épaisse, qui commence à coller, et qui brûle l'odeur détectable. Le dal a trop diminué.",
            "action": "Ajouter l'eau chaude dans les incréments de quart-tasse, en remuant du fond. Réduire immédiatement la chaleur."
          }
        ]
      },
      "feelCue": "Le dal fini devrait se sentir chaud et lourd dans la cuillère — pas aqueux, pas solide, mais quelque chose de productif et substantiel entre ces deux états. Frottez une goutte entre le pouce et l'index : il doit se sentir doux, presque crémeux."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_04"
      ],
      "outputState": "spinach_puree",
      "instructions": "Wilt les épinards directement dans le dal chaud en les remuant et en couvrant le pot pendant 3 minutes — la chaleur résiduelle et la vapeur s'effondreront complètement les feuilles sans que l'étape de la fonte soit séparée. Ensuite, utiliser un mélangeur d'immersion directement dans le pot pour mélanger partiellement les épinards dans le dal, ou transférer un tiers du dal et tous les épinards flétris dans un mélangeur de comptoir, blitz lisse, et retourner dans le pot. L'objectif est un dal qui a absorbé le vert profond des épinards sans perdre tout son corps — vous voulez une soupe épaisse vert forêt avec une texture résiduelle des lentilles plutôt qu'une purée complètement lisse. Si le dal s'est trop épaissi après avoir ajouté des épinards, desserrer avec un jet d'eau chaude. Goûtez et ajoutez le sel restant.",
      "visualCue": {
        "primaryTarget": "Une soupe foncée vert forêt, épaisse où le corps de lentilles est encore peu visible, mais la couleur et la texture globales ont été unifiées par les épinards. Ni vert vif ni boueux, un intermédiaire profond et saturé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épinards sont toujours en forme de feuille intacte, assis sur le dessus du dal. Les deux n'ont pas été intégrés. La couleur est vert et or.",
            "action": "Mélanger pour submerger les feuilles et couvrir encore 3 minutes. Alors mélangez."
          },
          {
            "state": "Perfect",
            "description": "Unifié vert foncé partout. Épaisseur, brillant et parfumé. Le corps du dal lui donne du poids; les épinards lui donnent de la couleur et une agréable amertume.",
            "action": "Allez à la tadka."
          },
          {
            "state": "Overdone",
            "description": "Mélangé trop longtemps en une purée complètement lisse et inaltérable sans texture. La couleur est vive mais le corps est parti.",
            "action": "Incorporer une cuillère à soupe de dal cuit (préservé) pour réintroduire une certaine texture. La saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Le palak dal à ce stade sent le vert et la terre, comme les épinards humides et la lentille chaude — une note élevée et une note faible dans le même arôme. La texture lorsqu'elle est agitée doit se sentir dense et cohésive, en tirant contre la cuillère."
    },
    {
      "nodeId": "step_3",
      "action": "Chaleur",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "south_indian_tadka",
      "instructions": "Chauffer le ghee dans une petite casserole à feu vif jusqu'à ce qu'il mijote et qu'une goutte d'eau vaporise au contact. Ajouter d'abord les graines de moutarde — elles s'écouleront vigoureusement dans les 10-15 secondes. Lorsque le popping s'abaisse, ajouter les graines de cumin, les piments rouges séchés et l'asafoetida en même temps. L'asafoetida fleurira d'une poudre piquante et fondante à un arôme plus doux d'oignon d'ail en quelques secondes — c'est la transformation chimique qui rend le hing si fondamental. Ajouter les feuilles de curry immédiatement après (reculer – les feuilles fraîches de curry dans l'huile chaude se pop agressivement et pulvériser la graisse chaude). Ils cracheront et se racleront et libéreront un puissant parfum aux agrumes et aux herbes, contrairement à tout autre parfum dans le monde des épices. Enfin, ajouter l'ail tranché et cuire 20 à 30 secondes jusqu'à ce qu'il devienne or pâle. Versez immédiatement le tadka entier sur la surface du palak dal — ne tardez pas, car les températures du tadka et les aromatiques volatils sont à leur pic dans les 30 premières secondes.",
      "visualCue": {
        "primaryTarget": "Ghee foncé avec des feuilles de curry vert foncé, des tranches d'ail d'or pâle, des piments rouges gonflés et des graines de cumin et de moutarde craquelées. La graisse devrait presque fumer et sentir fortement les aromatiques torréfiés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de moutarde n'ont pas sauté. Les feuilles de curry sont encore plates et vertes. L'ail est translucide. La graisse sent neutre.",
            "action": "Attendez — la chaleur élevée est essentielle. La tempérance des Indiens du Sud doit être rapide et féroce. Ne réduisez pas la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Les graines de moutarde ont sauté tranquille. Les feuilles de curry sont foncées, raclées et croquantes. L'ail est d'or pâle. La charrue s'est transformée de tranchant en moelleux. La graisse est parfumée et crépitante.",
            "action": "Verser immédiatement sur le dal."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun foncé et sent amer. Les feuilles de curry sont noires et cassantes. Les graines de moutarde sont carbonisées.",
            "action": "Jeter et commencer frais — le tadka brûlé est irrécupérable et ruinera le plat."
          }
        ]
      },
      "feelCue": "La cuisine se remplira d'une fragrance presque choquante quand les feuilles de curry frapperont le ghee chaud — tranchant, herbacé, agrumes-adjacent, et fortement affirmé. Cette fragrance devrait se porter de la cuisinière à l'autre côté de la pièce instantanément."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "spinach_puree",
        "south_indian_tadka",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_palak_dal",
      "instructions": "Versez le tadka étourdissant sur la surface du palak dal et écoutez le sifflement. Pliez-le doucement avec deux ou trois coups de balai, laissant une partie du tadka visible à la surface comme une couronne éblouissante et parfumée. Presser le jus de lime sur le dessus et remuer une fois. L'acide équilibre l'amertume des épinards et la terre du dal, et soulève tout le profil de saveur sans le rendre aigre. Bouche: Le palak dal doit être complexe — terreux, salé, chaud épicé, avec la pop distinctive et le crackle du tadka indien du sud comme la note supérieure. Servir dans des bols profonds avec du riz ou du roti à la vapeur. Arroser d'eau en cas de réchauffage — le palak dal s'épaissit considérablement en refroidissant.",
      "visualCue": {
        "primaryTarget": "Un bol de dal vert forêt profond et brillant avec des rivières de ghees sombres et parfumées qui coulent à la surface, parsemé de feuilles de curry râpées, de croustilles d'ail et de fragments de chili rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tadka a été complètement agité et n'est pas visible à la surface. Le jus de chaux n'a pas été ajouté. Le dal a un goût plat et unidimensionnel.",
            "action": "Pressez la chaux sur le dessus. Si le tadka était agité, arrosez une cuillère à café de ghee supplémentaire sur le dessus pour restaurer une certaine richesse de surface."
          },
          {
            "state": "Perfect",
            "description": "Vert foncé et brillant, avec les composants du tadka visibles sur la surface et la luminosité de la chaux coupant à travers la richesse. L'odeur est superposée, complexe et impossible à décrire en moins de quatre mots.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le dal est devenu très épais et stodgy. Le tadka a été absorbé et la surface est terne. Le goût de chaux est perdu dans la richesse.",
            "action": "Finis avec de l'eau chaude pour se détendre. Arrosez avec du ghee frais et une pression supplémentaire de chaux pour réintroduire la luminosité."
          }
        ]
      },
      "feelCue": "Le palak dal fini devrait rayonner la chaleur du bol. L'arôme vous parvient avant la cuillère — une conversation en couches complexes entre la terre, l'amertume verte, et le parfum étourdissant du tadka."
    }
  ]
};
