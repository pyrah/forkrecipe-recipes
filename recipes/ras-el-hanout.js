export default {
  "repoId": "master_moroccan_ras-el-hanout_001",
  "parentRepoId": null,
  "slug": "ras-el-hanout",
  "author": "ForkRecipe Kitchen",
  "title": "Ras el Hanout",
  "description": "Le mélange d'épices « top of the shop » du Maroc – un mélange de 30 épices chaudes grillées et broyées ensemble, des pétales de rose aux cardamomes noirs à la mace, en couches qui approfondissent chaque tagine et couscous qu'il touche.",
  "cuisine": "Maroc",
  "culture": "Maroc",
  "category": "condiments",
  "tags": [
    "Maroc",
    "d'épices",
    "complexe",
    "chaud",
    "aromatiques",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Graines de coriandre",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "poivre long"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gousses de cardamome vert, graines seulement",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Brosses de cardamome noir, graines seulement",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Bâton de cannelle",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "écorce de cassie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre séché, entier",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Giroves entières",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Lames de macre",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "noix de muscade"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Autres fruits",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Paprika chaud",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "cayenne"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Pétales de roses séchées (de qualité alimentaire)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "Lavande séchée, utiliser la moitié"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Spice",
      "name": "Noix de muscade",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "toasted_whole_spices",
      "instructions": "Mettre une poêle large et sèche à feu moyen et laisser chauffer pendant deux minutes. Ajouter en une seule couche toutes les épices — graines de cumin, graines de coriandre, grains de poivre noir, graines de cardamome vertes et noires (extirpées de leurs gousses), bâton de cannelle brisé en morceaux, gingembre séché, girofles, lames de mace et baies de tous les épices. Secouer la casserole toutes les 20 à 30 secondes, pour un total de 3 à 5 minutes. Vous n'êtes pas à la recherche d'un changement de couleur autant que l'activation du parfum : au moment où la cuisine se remplit d'un arôme chaud, complexe et résineux qui sent comme un souk marocain, vous êtes là. Les épices doivent être chaudes et sèches au toucher lorsque vous les pincez entre les doigts. Retirer immédiatement du feu et aspirer sur une assiette fraîche — ne pas les laisser dans la poêle chaude, car la chaleur de transfert les mettra dans l'amertume.",
      "visualCue": {
        "primaryTarget": "Les épices entières sont visiblement plus sèches et fractionnellement plus foncées que lorsqu'elles ont commencé, sans vapeur, et la cuisine porte un profond parfum en couches de résine, de bois chaud et de poivre. Les graines de cumin peuvent être une ombre plus profonde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sentent crus et poussiéreux, non parfumés; aucun changement visible de couleur ou de sécheresse; la poêle sent encore le froid.",
            "action": "Continuer à griller, en remuant constamment — la fenêtre entre le dessous et le dessus est étroite; restez attentif."
          },
          {
            "state": "Perfect",
            "description": "Un arôme qui monte, complexe et chaud remplit la pièce; les graines de cumin sont légèrement obscurcies; les girofles sentent intensément l'eugénol; les épices sautent et changent dans la poêle. La poêle est chaude mais ne fume pas.",
            "action": "Astucez immédiatement sur une assiette froide et étalez-vous pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Fumée montant de la poêle; quelques épices sont devenues brun foncé ou noir; l'odeur est vive, acride et amère plutôt que chaude.",
            "action": "Jeter et recommencer — les épices brûlées ne peuvent être corrigées par mélange et feront le goût entier de l'amertume."
          }
        ]
      },
      "feelCue": "Tenez votre paume près (mais sans toucher) des épices sur l'assiette — elles devraient rayonner de chaleur comme une bougie récemment éteinte. Ramassez une graine de cumin et écrasez-la entre vos ongles : elle devrait casser, non plier, et libérer un éclat vif de parfum propre grillé."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "toasted_whole_spices",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "ground_spice_blend",
      "instructions": "Laisser refroidir les épices grillées pendant cinq minutes — le broyage d'épices chaudes dans un broyeur électrique crée de la vapeur qui emplit la poudre. Ajouter les épices grillées à un broyeur d'épices ou un mélangeur puissant avec le curcuma moulu, le paprika chaud, la muscade moulue et les pétales de rose séchés. Grincer en 15 secondes, en arrêtant de secouer et de redistribuer entre les éclats, jusqu'à ce que vous atteignez une poudre fine et uniforme sans morceaux d'épices entiers visibles. Si vous utilisez un mortier, livrez par étapes : les épices les plus dures d'abord (corns de poivre, cardamome, girofle), puis plus douces (cinnamon, gingembre, mace, allspice), puis pliez dans les ingrédients déjà moulus. Les pétales de rose sont délicats — ajoutez-les dans le pouls final afin qu'ils ne se transforment pas en pâte collante.",
      "visualCue": {
        "primaryTarget": "Une poudre chaude, complexe, rougeâtre-ochre avec des taches de brun plus profond et de minuscules fragments pâles de pétales de rose. La couleur n'est pas uniforme — elle devrait ressembler à un paysage aux tons chauds plutôt qu'à une seule teinte plate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Visiblement grossière avec des grains entiers de poivre encore intacts, des fibres de cannelle en brins et une couleur inégale.",
            "action": "Grincer plus loin en courts éclats; la cannelle et le gingembre sont les plus difficiles à broyer finement — continuez jusqu'à ce qu'il ne reste plus de brins."
          },
          {
            "state": "Perfect",
            "description": "Poudre fine qui passe à travers vos doigts sans résistance; la couleur est un riche, chaud rougeâtre-ochre; l'arôme est extrêmement complexe, profond, et chaud avec un ascenseur floral de la rose.",
            "action": "Transférer immédiatement dans un pot hermétique pour capturer les aromatiques volatils."
          },
          {
            "state": "Overdone",
            "description": "Répartir dans une pâte maladroite légèrement huileuse à partir de la chaleur générée par le surgissement; les huiles essentielles ont été partiellement volatilisées et la couleur est un brun plat et terne.",
            "action": "Répartir sur un plateau et laisser sécher à l'air pendant une heure, puis casser et stocker; la saveur est légèrement diminuée mais toujours utilisable."
          }
        ]
      },
      "feelCue": "Pincez un petit monticule du mélange et frottez-le entre le pouce et l'index — il devrait être comme du sable fin sec, pas du sable gras ou collant. Tenez votre paume près de votre nez : la chaleur de votre peau devrait libérer une vague immédiate de parfums chauds complexes. Cette fleur vous dit que les huiles volatiles sont intactes."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "ground_spice_blend"
      ],
      "outputState": "balanced_ras_el_hanout",
      "instructions": "Astucez le mélange de terre dans un bol. Sentez-le soigneusement, couchez-le par couche — d'abord les notes supérieures (rose florale, chaleur poivrée), puis le milieu (cumin chaud et coriandre), puis la base (cardamome résineux et girofle). Goûtez une pincée sur le dos de votre main. Le mélange devrait se sentir comme une conversation où de nombreuses voix sont présentes mais aucune ne crie : aucune épice ne devrait dominer. Si le poivre est écrasant, ajoutez un peu plus de coriandre et de cannelle pour l'adoucir. Si elle est plate et unidimensionnelle, une touche plus noire cardamome ou girofle l'approfondira. S'il sent uniquement du cumin, ajouter plus de coriandre, de paprika et de rose. Une fois équilibré, remuez pour intégrer tous les ajustements.",
      "visualCue": {
        "primaryTarget": "Un mélange richement coloré de rouges chauds, ocres et bruns, avec de faibles taches de pétales de rose visibles. Il semble complexe et vivant plutôt que monochromatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange semble et sent une dimension unique; une épice, généralement du cumin ou des girofles, domine clairement et aplatit la complexité.",
            "action": "Identifier l'épice dominante par l'odeur, réduire sa présence mentalement, et ajouter de petites quantités de son partenaire de contre-équilibrage (plus de coriandre contre le cumin, plus de poivre contre les girofles)."
          },
          {
            "state": "Perfect",
            "description": "Un arôme décalé et en couches où l'on prend des notes différentes, floral, puis chaud, puis épicé, puis résineux. Il n'y a pas d'excès de pouvoir. Le goût est complexe en bouche.",
            "action": "Transférer dans un pot hermétique, inscrire la date et conserver dans un endroit frais et sombre."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est trop chaud (trop de cayenne) ou trop amer (trop de girofle ou de cardamome noir); il déborde plutôt que s'améliore.",
            "action": "Ajouter davantage d'épices à base neutre — cumin, coriandre, paprika — pour diluer l'élément offensif."
          }
        ]
      },
      "feelCue": "Goûtez une petite pincée sur l'extrémité de votre langue et laissez-la reposer pendant dix secondes. Il devrait se construire lentement — d'abord la chaleur du gingembre et de la cannelle, puis un teint poivré, puis une douceur florale de la rose et de la cardamome, puis une chaleur résonnante qui s'estompe proprement. Si ça frappe tout à la fois, c'est trop unidimensionnel."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "balanced_ras_el_hanout"
      ],
      "outputState": "finished_ras_el_hanout",
      "instructions": "Transférer le ras el hanout fini dans un pot en verre propre et hermétique ou une boîte d'épices. N'utilisez pas de contenant en plastique: le plastique absorbe les huiles volatiles et le mélange s'estompe rapidement. Pressez n'importe quel air avant de sceller. Étiquette avec la date. Entreposer dans un endroit frais et sombre — un tiroir ou une armoire à épices loin du poêle est idéal. La chaleur et la lumière sont les ennemis des mélanges complexes d'épices. Au pic de fraîcheur, le ras el hanout est revelatory ; après trois mois il perd d'abord les notes florales et silex, devenant progressivement flatteur. Utiliser dans les trois mois pour obtenir les meilleurs résultats. Comme guide rugueux: 1 à 2 cuillères à café par 500g de viande dans un tagine; 1 cuillère à café par tasse d'eau de cuisson couscous; une pincée généreuse par portion de légumes rôtis.",
      "visualCue": {
        "primaryTarget": "Un pot scellé de poudre richement colorée, fine et complexe, sans croûte ni humidité, conservant toute la gamme des tons chauds du rouge-orange au brun profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mélanger entreposé dans un plat ouvert ou dans un contenant scellé; la surface a déjà commencé à s'étourdir et à perdre du parfum.",
            "action": "Transférer immédiatement dans un contenant hermétique et conserver à l'abri de la chaleur et de la lumière."
          },
          {
            "state": "Perfect",
            "description": "Le pot s'ouvre après un jour et l'arôme est un mur de chaleur complexe, confirmant que les huiles volatiles sont scellées.",
            "action": "Utiliser dans les 3 mois. Agiter ou remuer avant chaque utilisation lorsque les particules plus denses peuvent se déposer."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été conservé pendant de nombreux mois; la couleur est plate et brune; l'ouverture du pot donne une odeur de carton moussant sans vibration.",
            "action": "Faire griller brièvement le mélange dans une casserole sèche pendant 30 secondes pour le réanimer partiellement, puis l'utiliser immédiatement dans une application cuite."
          }
        ]
      },
      "feelCue": "Après scellement, soulevez le pot et tapez - le doucement — le mélange doit se déposer uniformément sans accroupissements durs au fond. Si vous vous sentez mal, l'humidité est entrée; étaler le mélange sur un plateau, laisser sécher complètement dans un four faible (60C / 140F pendant 10 minutes), puis se refermer."
    }
  ]
};
