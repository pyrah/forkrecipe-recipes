export default {
  "repoId": "master_indian_kheer_001",
  "parentRepoId": null,
  "slug": "kheer",
  "author": "ForkRecipe Kitchen",
  "title": "Riz Kheer",
  "description": "L'ancien pudding indien au riz au lait — riz à grains courts mijoté lentement dans du lait entier jusqu'à ce qu'il épaississe à un porridge crémeux, parfumé de cardamome et de safran, fini avec des pistaches grillées et de l'eau de rose.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "desserts",
  "tags": [
    "indienne",
    "riz",
    "lait",
    "doux",
    "Cardamome",
    "safran",
    "dessert"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "lait de coco plein gras pour les produits laitiers (réduit à plus rapide, plus riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz blanc à grains courts (gobindobhog ou arborio), rincé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "basmati à grains longs, trempés et drainés (rends moins crémeux)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": [
        "jaggery pour une saveur de caramel plus profonde"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gousses de cardamome vert, graines seulement, fraîchement moulues",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": [
        "1/4 c. à thé cardamome au sol, avant le sol"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Fils de safran émietté",
      "ratioValue": 0.002,
      "defaultUnit": "parts",
      "substitutions": [
        "2 gouttes d'essence kewra pour une note florale différente"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "eau de fleur d'orange"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Pistaches non salées, grillées et hachées grossièrement",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "Amandes grillées, liquéfiées"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Pétales de roses séchées ou feuilles d'argent comestibles (vark)",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "une pincée de safran pour garnir"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Ghee",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_09"
      ],
      "outputState": "toasted_rice",
      "instructions": "Dans un pot à fond lourd ou une casserole large (de préférence avec une base épaisse pour éviter les brûlures), chauffer le ghee à feu moyen. Ajouter le riz rincé, égoutté et mélanger pour enrober chaque grain dans la graisse. Faire cuire le riz doucement pendant 2 à 3 minutes, en remuant constamment, jusqu'à ce que les grains deviennent légèrement translucides aux bords et que la cuisine sente le riz chaud et noisette. Cette petite étape de graisse-toast enrobe les granules d'amidon dans une fine couche de graisse, ce qui ralentit leur gonflement et aide le riz à absorber le lait progressivement plutôt que de le mussifier en même temps.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont uniformément enrobés de ghee et légèrement translucides aux bords; ils brillent mais ne sont pas brunis; le pot sent le riz chaud et beurreux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est encore complètement opaque et crayeux; pas encore translucide aux bords; pas d'arôme grillé.",
            "action": "Continuer à remuer à feu moyen pendant une minute ou deux."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont brillants, légèrement translucides à leurs bords, sentant chaud et noisette, comme le début d'un risotto.",
            "action": "Ajouter immédiatement le lait froid; le contraste de température provoquera une poussée initiale de vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les grains de riz deviennent dorés ou bruns; le ghee commence à fumer.",
            "action": "Ajouter le lait froid immédiatement pour arrêter la cuisson; le kheer fonctionnera encore mais peut avoir de légères notes grillées."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — le riz enrobé de ghee doit glisser en douceur, grain par grain, plutôt que d'empiler. Chaque grain doit se sentir enduit individuellement et séparé lorsqu'il est traîné sur une surface fraîche."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "toasted_rice",
        "ing_01",
        "ing_05"
      ],
      "outputState": "simmered_kheer",
      "instructions": "Verser le lait froid sur le riz grillé et augmenter le feu pour laisser mijoter, en remuant fréquemment. Une fois mijoté, écraser les fils de safran directement dans le lait. Réduisez la chaleur à une mijotée douce et paresseuse: de petites bulles se brisent sporadiquement à la surface, et non un ébullition. Cuire à découvert, en remuant toutes les 3-4 minutes, pendant 35-40 minutes. Chaque fois que vous remuez, faites glisser la cuillère le long du fond du pot pour empêcher le riz de coller et de brûler, ce qui se produit rapidement avec le lait. Pendant ce temps, le lait diminuera d'environ un tiers, le riz deviendra complètement tendre et commencera à libérer de l'amidon, et la casserole entière deviendra dorée du safran.",
      "visualCue": {
        "primaryTarget": "Un liquide épais et doré qui enrobe la cuillère; les grains de riz sont enflés et commencent à se décomposer aux bords; le lait est visiblement réduit; toute la casserole est parfumée de safran.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est encore très mince et pâle; le riz est mal cuit et séparé; le temps de cuisson est inférieur à 25 minutes.",
            "action": "Continuez à mijoter — le kheer ne peut être précipité. La chaleur élevée brûle le lait; seule une mijotation douce et patiente produit de la crémosité."
          },
          {
            "state": "Perfect",
            "description": "Couleur crème (profondement dorée du safran) avec une consistance nappe; riz entièrement doux et quelques grains dissous; remue en douceur avec une cuillère en bois.",
            "action": "Ajouter le sucre et les aromatiques maintenant."
          },
          {
            "state": "Overdone",
            "description": "Le lait a tellement réduit le kheer est très épais et le riz s'est transformé en pur mousse; une peau s'est formée et peut-être brûlée sur le fond.",
            "action": "Ajouter une petite quantité de lait chaud pour se détendre; en cas de brûlure, ne grattez pas le fond — versez la portion non brûlée dans une nouvelle casserole."
          }
        ]
      },
      "feelCue": "Mélanger et lever lentement la cuillère au-dessus du pot — le kheer à la bonne étape devrait tomber dans une feuille épaisse et paresseuse plutôt qu'un ruisseau mince. Le fond du pot doit se sentir légèrement résistant lorsque la cuillère traîne, suggérant de développer le corps sans coller."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "simmered_kheer",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "flavored_kheer",
      "instructions": "Ajouter le sucre au kheer mijotant et remuer pour dissoudre — le kheer s'amincira légèrement lorsque le sucre fondra, ce qui est normal. Continuer à mijoter encore 5 minutes pour se réinsérer. Retirer du feu. Incorporer la cardamome fraîchement moulue et l'eau de rose hors de la chaleur — les deux sont des aromatiques hautement volatiles; les ajouter à un liquide bouillant entraîne la plupart de leur parfum. La cardamome doit aller dans 30 secondes avant de servir si elle sert au chaud, ou juste avant de refroidir si elle sert au froid. Goûtez et ajustez le sucre : le kheer doit être nettement sucré, car la douceur refroidissante est significative.",
      "visualCue": {
        "primaryTarget": "Un pudding crémeux, doré, épais qui tient son propre pour un moment quand versé d'une cuillère avant de fondre lentement en arrière — avec un arôme floral complexe de la cardamome et de l'eau de rose montant de la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre non encore dissous; kheer est granuleux au goût; cardamome non encore ajouté.",
            "action": "Incorporer vigoureusement pendant une autre minute à feu doux pour dissoudre complètement le sucre."
          },
          {
            "state": "Perfect",
            "description": "Douce, dorée et aromatique; la note de fleur de miel du safran, l'épice de refroidissement du cardamome et la douceur parfumée de l'eau de rose sont toutes présentes mais non concurrentes.",
            "action": "Passer à la garniture et servir ou refroidir."
          },
          {
            "state": "Overdone",
            "description": "L'eau de rose ajoutée au kheer bouillant; son arôme délicat a entièrement cuit; le kheer sent plat.",
            "action": "Ajouter un autre petit trait d'eau de rose juste avant de servir."
          }
        ]
      },
      "feelCue": "Goûtez le kheer chaud — la douceur doit s'enregistrer immédiatement et fleurir pleinement dans la langue. S'il n'a un goût que légèrement sucré, n'oubliez pas que la douceur glaciale est d'environ 20%; ajoutez plus de sucre maintenant plutôt que d'essayer d'édulcorer un pudding froid."
    },
    {
      "nodeId": "step_4",
      "action": "Refroidissement",
      "inputs": [
        "flavored_kheer",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_kheer",
      "instructions": "Verser le kheer dans des bols individuels ou dans un plat large et peu profond. Elle s'épaissira considérablement à mesure qu'elle refroidit — si elle sert la louche chaude immédiatement. Pour les portions froides plus traditionnelles, laisser refroidir à la température ambiante, puis réfrigérer pendant au moins 2 heures. Le kheer s'épaissira à la texture d'une crème crémeuse pendant qu'il refroidit. Avant de servir, dispersez les pistaches grillées hachées sur la surface pour obtenir un contraste de couleur et de croquant. Ajouter les pétales de rose séchés ou quelques fils de safran sur le dessus. Servir à froid, à température ambiante ou au chaud — tous les trois sont traditionnels.",
      "visualCue": {
        "primaryTarget": "Une surface de pudding d'or pâle, crémeuse, ferme, mais d'un rendement élevé, surmontée de pistaches vertes vibrantes et de la bouffée romantique de pétales de roses séchées ou de feuilles argentées brillantes, elle devrait paraître festive et riche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Kheer servi chaud et encore mince; il traverse l'assiette comme du lait et n'a pas le corps de crème qui rend le plat satisfaisant.",
            "action": "Si un résultat plus épais est souhaité, refroidir pendant 2 heures; les gels d'amidon sur le refroidissement pour donner un corps de pudding approprié."
          },
          {
            "state": "Perfect",
            "description": "Le kheer froid est épais, cuilleré, aromatique et profondément satisfaisant; il tient sa forme brièvement lorsqu'il est écorcé, mais il donne immédiatement à la cuillère; cloué de pistaches croquantes et parfumé de rose et de cardamome.",
            "action": "Servir dans des bols réfrigérés pour une présentation de célébration."
          },
          {
            "state": "Overdone",
            "description": "Kheer a été réfrigéré toute la nuit et a mis très ferme; le dessus a légèrement séché.",
            "action": "Incorporer une cuillère de lait froid pour se détendre et récupérer la consistance crémeuse; la saveur sera non diminuée."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère de kheer réfrigéré et tenez-la droite; elle devrait tenir sa forme sur la cuillère pendant 3-4 secondes avant de commencer à glisser. Ce moment de détention est le gel parfait de l'amidon de riz qui rencontre le froid du lait."
    }
  ]
};
