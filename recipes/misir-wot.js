export default {
  "repoId": "master_ethiopian_misirwot_001",
  "parentRepoId": null,
  "slug": "misir-wot",
  "author": "ForkRecipe Kitchen",
  "title": "Misir Wot (Red Lentil Stew)",
  "description": "Le ragoût de lentilles rouges véganes de l'Éthiopie — les lentilles rouges cuites dans une base d'oignon caramélisé et de niter-kibbeh, épicées de berbère jusqu'à ce que les lentilles se dissolvent en une masse épaisse, terreuse, rouge brique pleine de profondeur aromatique.",
  "cuisine": "Éthiopien",
  "culture": "Éthiopien",
  "category": "proteins",
  "tags": [
    "ethiopienne",
    "lentilles",
    "berbère",
    "végétalien",
    "ragoût",
    "nuit"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Lentilles rouges (masoor dal), rincées",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "lentilles jaunes fendues (temps de cuisson plus long)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignons jaunes, hachés finement",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Niter kibbeh ou beurre épicé clarifié",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "huile de coco + pincée curcuma + pincée cardamome (pour végétalien)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Mélange d'épices berbères",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre haché (3 g)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Stock d'eau ou de légumes légers",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Oignons caramélisés secs",
      "inputs": [
        "ing_02"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Placer les oignons hachés finement dans un pot à fond lourd sans huile à feu moyen. Mélanger toutes les 2 à 3 minutes pendant 20 à 25 minutes — les oignons libèrent d'abord de l'eau et de la vapeur, puis sèchent et commencent à colorier. L'objectif est une base d'oignons réduite, de couleur foncée et sucrée. Cette caramélisation sèche sans graisse est la méthode traditionnelle éthiopienne (appelée « friture sèche » les oignons) qui donne misir wot sa profondeur caractéristique. Les oignons devraient se rétrécir à environ un tiers de leur volume de départ et tourner un brun doré chaud avant d'ajouter de la graisse.",
      "visualCue": {
        "primaryTarget": "Une masse d'oignons jammy de couleur dorée réduite, à peu près le tiers du volume original, s'accrochant dans une pile molle. Le fond du pot est brun clair. L'odeur est douce et salée, rien de tranchant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore blancs à légèrement bronzés, mouillés et mous, et s'échauffent activement. Le volume a à peine diminué. La saveur est douce mais plate et unidimensionnelle.",
            "action": "Continuez à cuisiner. La caramélisation commence seulement après que toute l'eau s'est évaporée, ce qui prend au moins 15 minutes. Soyez patient et continuez à remuer."
          },
          {
            "state": "Perfect",
            "description": "Golden-tan, réduit de deux tiers, légèrement collant à la cuillère, et sentant intensément la douceur caramélisée avec un sous-ton salé. Fond formant sur le fond du pot.",
            "action": "Ajouter immédiatement le niter kibbeh, le berbère, l'ail et le gingembre — la poêle chaude et sèche fleurira parfaitement les épices."
          },
          {
            "state": "Overdone",
            "description": "La masse d'oignons est devenue brune foncée au noir aux bords, et le fond du pot a une couleur foncée, amère et brûlante, plutôt que douce caramel.",
            "action": "Ajouter 2 cuillerées à soupe d'eau et racler le fond immédiatement. Goûtez l'oignon : si c'est surtout sucré avec une légère amertume, procédez. S'il a un goût amer tout au long, recommencer l'étape de l'oignon."
          }
        ]
      },
      "feelCue": "Mélangez les oignons et écoutez - pendant les 10 premières minutes, ils sonnent comme des légumes à la vapeur. Au cours des 5 dernières minutes avant d'ajouter de la graisse, ils doivent sonner comme de la friture douce, douce et légèrement craquelée. Cette transition en son est votre signal."
    },
    {
      "nodeId": "step_2",
      "action": "Epices de fleurs",
      "inputs": [
        "caramelized_onions",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "spiced_base",
      "instructions": "Ajouter le niter kibbeh aux oignons caramélisés et remuer jusqu'à ce qu'il soit fondu. Ajouter le berbère, l'ail et le gingembre. Mélanger vigoureusement et cuire à feu moyen pendant 4-6 minutes, en remuant constamment — le berbère moussera légèrement car il touche la graisse chaude, puis la graisse commencera à se séparer aux bords lorsque les épices cuireont. Le mélange deviendra une pâte très épaisse, foncée et parfumée. La cuisson du berbère dans les graisses est non négociable : le berbère brut a un goût aigu et acride; le berbère fleuri a un goût arrondi, profond et complexe.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et très foncée rouge brique avec de la graisse de niter kibbeh rouge orange qui commence à se mettre aux bords. L'odeur est profonde et complexe, non pas la netteté brute du berbère d'un pot, mais quelque chose de plus riche et arrondi.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Berbere a ajouté il y a seulement 1-2 minutes et sent toujours cru — vif, acide et acride. La graisse ne s'est pas séparée et la pâte semble granuleuse plutôt que brillante.",
            "action": "Continuez à cuisiner. La netteté brute du berbère prend de 4 à 5 minutes pleines de chaleur dans la graisse pour se moeller. Ne précipitez pas cette étape — elle définit la saveur du plat fini."
          },
          {
            "state": "Perfect",
            "description": "Gloire, pâte foncée avec séparation des graisses visible aux bords. L'odeur est profondément savoureuse, chaude et complexe: chaleur sans netteté, épices sans crudité.",
            "action": "Ajouter les lentilles rincées et mélanger pour les enrober dans la base d'épices avant d'ajouter de l'eau."
          },
          {
            "state": "Overdone",
            "description": "La pâte brûle: elle colle agressivement, elle fume et elle sent l'acride. Le berbère a carbonisé.",
            "action": "Ajouter l'eau immédiatement et réduire la chaleur. Grattez le fond. Bouche: Le berbère brûlé en petites quantités est survivable dans un ragoût; de grandes quantités d'épices carbonisées rendront le plat entier amer."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité de la pâte fleurie sur le bout du doigt et sentez - si le berbère est correctement fleuri, la chaleur et le parfum devraient fleurir immédiatement dans l'air autour de votre main. S'il sent fort et s'attrape dans votre gorge, donnez-lui 2 minutes de plus."
    },
    {
      "nodeId": "step_3",
      "action": "Lentilles cuites",
      "inputs": [
        "spiced_base",
        "ing_01",
        "ing_07",
        "ing_08"
      ],
      "outputState": "cooked_misir",
      "instructions": "Ajouter les lentilles rouges rincées à la base épicée et remuer pour les enrober dans la pâte foncée — elles devraient tourner une brique rouge foncé immédiatement. Ajouter l'eau ou le bouillon et le sel. Mélanger, racler toute pâte collée du bas. Porter à ébullition à feu vif, en remuant occasionnellement. Réduire à mijoter moyennement, couvrir partiellement et cuire de 20 à 25 minutes, en remuant toutes les 5 minutes pour éviter de coller. Les lentilles rouges cuisent rapidement et se dissolvent complètement — le wot misir n'est pas chunky; les lentilles doivent fondre entièrement dans la sauce pour former une texture épaisse, uniforme, de type porridge.",
      "visualCue": {
        "primaryTarget": "Un ragoût épais, uniforme, rouge brique foncé sans lentilles visibles intactes. La texture ressemble à une soupe très épaisse et lisse – elle tient une rainure de cuillère pendant 3-4 secondes avant de se déposer. L'huile est visible en surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 15 minutes : les lentilles sont encore visibles comme des formes individuelles, la sauce est fine et les lentilles sont seulement à moitié dissoutes. Dégustation d'une lentille révèle un centre encore inculte et mal cuit.",
            "action": "Continuer la cuisson, en remuant plus souvent pour encourager la dissolution. Les lentilles rouges se dissolvent complètement entre 20 et 25 minutes; si elles ne se dissolvent pas, la chaleur peut être trop faible."
          },
          {
            "state": "Perfect",
            "description": "Pas de lentilles intactes visibles, texture épaisse et uniforme, riche couleur brun-rouge qui enveloppe une cuillère dans une couche lourde. Goûte terreux, épicé, profondément salé et légèrement fumé du berbère.",
            "action": "Ajouter le jus de citron, goûter au sel et au berbère et ajuster avant de servir. Le citron éclaire significativement le ragoût fini."
          },
          {
            "state": "Overdone",
            "description": "Les lentilles se sont collées et brûlées au fond — le ragoût sent légèrement brûlé, et le fait de soulever la spatule du bas montre des résidus collants et sombres.",
            "action": "Ne grattez pas le fond — transférez la portion non cuite dans une casserole fraîche. La couche brûlée contamine tout s'il est agité."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers le centre du ragoût mijotant et regardez la rainure — elle devrait se remplir en 3-4 secondes. Si elle se remplit immédiatement, réduire sans le couvercle à épaissir. S'il ne se remplit jamais (le ragoût est raide), ajouter 50 ml d'eau et remuer."
    },
    {
      "nodeId": "step_4",
      "action": "Finition et plaque",
      "inputs": [
        "cooked_misir",
        "ing_09"
      ],
      "outputState": "finished_misir_wot",
      "instructions": "Ajouter le jus de citron et mélanger. Goûtez et ajustez : plus de berbères pour la chaleur et la profondeur, plus de sel pour la présence salée, plus de citron pour la luminosité. Laisser reposer le ragoût pendant 5 minutes hors du feu — il s'épaissira légèrement comme il est assis. Servir sur injera: cuillerer le misir wot dans un monticule sur un grand tour d'injera et lui permettre de s'étendre et d'être absorbé. L'injera se déchire en morceaux qui arrachent le ragoût. Traditionnellement servi aux côtés d'autres wots sur une seule grande assiette partagée.",
      "visualCue": {
        "primaryTarget": "Un monticule d'épais ragoût rouge brique foncé assis sur la surface spongieuse de l'injera, les bords se répandent lentement dans le pain. La surface brille avec un mince éclat d'huile de kibbéh.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ragoût versé alors qu'il est encore très chaud et aqueux — il s'étend trop mince à travers l'injera et s'imprégne plutôt que de rester assis dans un monticule. L'injera devient soyeux plutôt que agréablement saturé.",
            "action": "Retirer du feu et reposer le ragoût pendant 5 minutes pour épaissir légèrement avant de servir. Un millepertuis épais devrait d'abord tenir sa forme sur l'injera."
          },
          {
            "state": "Perfect",
            "description": "Un monticule épais et brillant de ragoût rouge foncé sur injera. L'odeur terreuse, épicée, complexe de berbère et de nitre kibbeh est en avant. L'injera absorbe lentement le ragoût du fond, devenant rouge foncé au point de contact.",
            "action": "Servir immédiatement avec d'autres plats éthiopiens. Le ragoût est mangé en déchirant des morceaux d'injera et en les utilisant pour ramasser le wot — pas d'ustensiles."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût a été laissé pour s'asseoir et s'est épaissi jusqu'à une pâte rigide inapplicable que les monticules mais ne se propage pas et est difficile à manger avec injera.",
            "action": "Incorporer 2 à 3 cuillerées à soupe d'eau chaude à feu doux jusqu'à ce que la consistance soit correcte. Le ragoût doit être épais mais pas collant."
          }
        ]
      },
      "feelCue": "Déchirer un morceau d'injera et l'utiliser pour écoper une cuillerée de misir wot — le ragoût devrait s'accrocher complètement à l'injera, et non pas s'égoutter. La première bouchée délivre l'aurore spongieuse du pain teff contre la chaleur terreuse et épicée des lentilles, puis la chaleur du berbère se construit lentement sur 20 à 30 secondes."
    }
  ]
};
