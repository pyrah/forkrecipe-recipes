export default {
  "repoId": "master_moroccan_couscous_001",
  "parentRepoId": null,
  "slug": "moroccan-couscous",
  "author": "ForkRecipe Kitchen",
  "title": "Couscous marocain avec sept légumes",
  "description": "Le couscous, roulé à la main, a été cuit à la vapeur deux fois sur un bouillon richement épicé de sept légumes — l'élément central du déjeuner du vendredi marocain, servi de style familial à partir d'un grand plateau vitré avec une montagne de légumes empilés sur une couronne de grain.",
  "cuisine": "Maroc",
  "culture": "Afrique du Nord",
  "category": "grains",
  "tags": [
    "couscous",
    "Maroc",
    "nord-africain",
    "légumes",
    "agneau",
    "Pois chiches",
    "Fête",
    "halal"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Sémoline moyenne couscous",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Épaule d'agneau ou poulet, désossé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour végétarien"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carottes pelées et coupées en deux",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Zucchini, demi-longueur",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "navet, coupé en quatre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Pois chiches, cuits ou en conserve",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Tomates, fraîches ou en conserve, quartiers",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates passata"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Le Président",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "cumin, coriandre, cannelle, gingembre, curcuma, parties égales"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "smen (beurre marocain vieilli)",
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "spiced_broth",
      "instructions": "Placez les morceaux d'agneau ou de poulet au fond d'un couscoussier ou d'une grande casserole avec un panier à vapeur. Ajouter l'oignon, les tomates, le ras el-hanout et le sel. Couvrir d'eau froide de 3 cm. Porter à ébullition, écrémer toute mousse, puis réduire à une mijotée vigoureuse. Le bouillon doit buller régulièrement — il fera cuire la viande et servira simultanément de liquide vapeur pour le couscous. Laisser mijoter 30 minutes avant d'ajouter les légumes.",
      "visualCue": {
        "primaryTarget": "Un bouillon parfumé d'ambre doré avec du ras el hanout qui fleurit dans une brume rouge orange chaude. La viande mijote régulièrement, mais pas bouillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est pâle et a encore un goût d'eau crue. Les épices n'ont pas fleuri et l'odeur est plate.",
            "action": "Augmenter légèrement la chaleur et laisser mijoter encore 10 minutes à découvert pour se concentrer et approfondir le bouillon."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est doré et parfumé, teinté orange-rouge par les épices. La viande est partiellement cuite et commence à produire. L'arôme d'épices chaudes remplit la cuisine.",
            "action": "Commencez la première vapeur du couscous et ajoutez les légumes les plus durs au bouillon."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon diminue rapidement et le pot est à ébullition. La viande est trop cuite et commence à s'effondrer.",
            "action": "Ajouter l'eau bouillante dans le pot pour rétablir le niveau et réduire à une mijoter plus douce. Le bouillon est toujours excellent."
          }
        ]
      },
      "feelCue": "Après 30 minutes, la cuisine doit sentir le cumin chaud, la cannelle douce et la graisse d'agneau — un parfum à la fois exotique et profondément réconfortant. Si ça sent la viande bouillie, les épices ont besoin de plus de temps pour fleurir."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "spiced_broth"
      ],
      "outputState": "first_steamed_couscous",
      "instructions": "Mettre le couscous sec dans un grand bol. Saupoudrer légèrement d'eau salée froide (environ un quart du volume du couscous), en le travaillant avec les doigts pour humidifier chaque grain sans accroupir. Agiter les grains avec vos doigts jusqu'à ce qu'ils soient séparés et lâches. Transférer dans le panier à vapeur ou le haut couscoussier, en s'étendant uniformément. Placer sur le bouillon mijotant sans sceller la couture — la vapeur devrait s'élever librement à travers les grains. La vapeur à découvert pendant 15 à 20 minutes jusqu'à ce que les grains soient gonflés et montrent une vapeur visible qui les traverse.",
      "visualCue": {
        "primaryTarget": "La vapeur s'élève visiblement à travers toute la surface du couscous, pas seulement autour des bords. Les grains ont gonflé et sont passés de crayeux à translucides à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vapeur n'évacue que les bords du panier. Le centre du couscous reste froid et sec. Les grains sont toujours crayeux.",
            "action": "Vérifiez que le bouillon mijote assez vigoureusement pour pousser la vapeur à travers le grain. Rabattre la surface pour ouvrir les passages pour augmenter la vapeur."
          },
          {
            "state": "Perfect",
            "description": "La vapeur monte uniformément à travers toute la surface. Les grains ont enflé et la couleur est passée du blanc crayeux à un jaune crémeux.",
            "action": "Transformez le couscous dans un grand bol pour le pas de rupture."
          },
          {
            "state": "Overdone",
            "description": "Les grains en haut ont commencé à s'accrocher et à coller ensemble dans un gâteau ferme. La vapeur s'est condensée dans le grain et a créé une masse humide et lourde.",
            "action": "Passez immédiatement à l'étape de rupture. La seconde vapeur va corriger cela si vous cassez les touffes à fond maintenant."
          }
        ]
      },
      "feelCue": "Le couscous à première vapeur devrait se sentir chaud mais pas chaud, avec des grains gonflés mais encore légèrement fermes — comme un grain de sable qui a absorbé l'eau mais qui n'est pas encore devenu mou. Chaque grain doit se sentir séparé entre vos doigts."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "first_steamed_couscous",
        "ing_09"
      ],
      "outputState": "buttered_couscous",
      "instructions": "Transformez le couscous à la vapeur en un grand bol ou un grand plateau. Travailler rapidement avec vos mains (ou deux grandes fourchettes), briser chaque fourche — râteau, séparer et aérer les grains jusqu'à ce qu'ils soient complètement lâches. Ajouter le beurre en petits morceaux et le tricoter soigneusement, enrober chaque grain. Saupoudrer d'un peu plus d'eau salée si les grains semblent secs, puis râter à nouveau. Cette étape de rupture est ce qui sépare le couscous moelleux du couscous gommé — ne le précipitez pas.",
      "visualCue": {
        "primaryTarget": "Grains de couscous complètement séparés avec un léger reflet du beurre fondu. Aucun accrochage visible. Les grains devraient tomber en morceaux comme du sable lorsqu'ils sont pincées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes touffes encore visibles. Le couscous tient ensemble lorsqu'il est pressé. Le beurre n'a pas été uniformément distribué.",
            "action": "Continuez à travailler les grains avec vos doigts. Brisez tous les problèmes que vous trouvez. Ajouter un autre petit morceau de beurre et râter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est séparé et brillant. Le couscous s'écoule librement de vos mains comme du sable humide. Ça sent le grain chaud et le beurre.",
            "action": "Retournez au panier de vapeur pour la deuxième vapeur sur le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont froids et sont séchés à cause de la manutention excessive. La texture est papereuse.",
            "action": "Mouiller avec quelques cuillères à soupe d'eau salée chaude et râter doucement."
          }
        ]
      },
      "feelCue": "Le couscous bien cassé devrait se verser à travers les doigts ouverts comme du sable dur — chaque grain distinct, ne s'agrippant jamais, avec la chaleur tranquille du beurre enrobant vos mains pendant que vous travaillez."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_broth",
        "ing_04",
        "ing_05",
        "ing_06",
        "buttered_couscous"
      ],
      "outputState": "finished_couscous",
      "instructions": "Ajouter d'abord les carottes dans le bouillon mijotant — il leur faut le plus de temps. Après 10 minutes, ajouter les courgettes et les pois chiches. Simultanément, remettre le couscous beurré au vapeur et à la vapeur pendant 15 à 20 minutes. Tous les éléments doivent se terminer ensemble : le couscous parfaitement moelleux, les légumes tendres mais ne s'écroulant pas, le bouillon profondément aromatisé. Pour servir, tondre le couscous dans un plat large et profond. Créez un puits au centre et empilez la viande et les légumes dedans. Mets du bouillon sur tout. Servir le bouillon restant dans un bol séparé pour les gens à ajouter à la table.",
      "visualCue": {
        "primaryTarget": "Une montagne de couscous jaune ivoire avec une couronne de légumes colorés — carotte orange, courgettes vertes, pois chiches de couleur crème — et la vapeur montant de l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore fermes et résistent à une brochette. Couscous grains sont denses et collent ensemble sur le plateau.",
            "action": "Retourner les légumes au bouillon pendant 5 à 10 minutes. Donnez au couscous une vapeur finale de 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Chaque légume donne facilement à une brochette mais tient sa forme. Couscous est léger et sec, se séparant en grains individuels lorsqu'il est touché. Le bouillon est doré et parfumé.",
            "action": "Servir immédiatement à la table, style familial."
          },
          {
            "state": "Overdone",
            "description": "Les légumes se sont effondrés en mousse sans forme. Zucchini en particulier s'est désintégré.",
            "action": "Enlevez les morceaux intacts et arrangez-les sur le plateau. Le bouillon a été enrichi par les légumes dissous et est d'autant plus savoureux pour lui."
          }
        ]
      },
      "feelCue": "Un grain de couscous parfaitement à deux équipes devrait se sentir aussi léger qu'une plume dans la bouche — il se dissout instantanément dans une crémosité chaude et noisette sans résistance, sans gras, sans grognement."
    }
  ]
};
