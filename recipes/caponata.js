export default {
  "repoId": "master_italian_caponata_001",
  "parentRepoId": null,
  "slug": "caponata",
  "author": "ForkRecipe Kitchen",
  "title": "Caponata",
  "description": "L'âme agrodolce d'un été sicilien — aubergines frites à un effondrement charnu, pliées dans un enchevêtrement brillant de céleri, de câpres et d'olives, puis braisées dans la tomate et laquées avec un glaçure vinaigre doux qui s'approfondit pendant une journée avant qu'il n'atteigne jamais la table.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "vegetables",
  "tags": [
    "Caponata",
    "sicilienne",
    "aubergines",
    "agrodolce",
    "antipasto",
    "végétalien"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "24 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergines de Globe, coupées en cubes de 2cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "aubergines italiennes ou siciliennes fermes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive (à frire)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère",
        "huile neutre pour la friture"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Côtes intérieures de céleri, tranchées",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "coeur céleri avec feuilles"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, tranché finement",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Tomates décortiquées pelées (ou passata)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates fraîches, râpées et réduites"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Olives vertes, piquées et déchirées",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "olives Castelvetrano ou Nocellara"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Câpres salées, rincées",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "câpres sablées, égouttées",
        "mûres, coupées en tranches"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "miel (pour une douceur plus ronde)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Noix de pin grillées et basilic déchiré",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Amandes liquéfiées",
        "persil à feuilles plates haché"
      ]
    },
    {
      "ingId": "ing_11",
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
      "action": "Frire",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_11"
      ],
      "outputState": "fried_eggplant",
      "instructions": "Saler légèrement les cubes d'aubergines et les laisser reposer de 20 à 30 minutes, puis les sécher, ce qui les empêche de boire toute la bouteille d'huile. Chauffer l'huile d'olive dans une grande casserole jusqu'à ce qu'elle mijote et frire l'aubergine en lots à feu moyen-élevé, en tournant, jusqu'à ce que chaque cube soit profondément doré sur plusieurs faces et tendre au centre. Soulevez sur un support ou du papier pour égoutter. Crowding la poêle vapeur l'aubergine gris et lécher — leur donner de la place et la patience.",
      "visualCue": {
        "primaryTarget": "Les cubes sont bronzés et brûlés à l'extérieur, avec un intérieur crépuscule et effondré. Une fourche glisse à travers une fourche sans résistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aubergine est pâle, spongieuse et grince contre la poêle, toujours ferme et amère au centre.",
            "action": "Continuez à frire. Levez légèrement la chaleur et résistez à remuer trop souvent — les cubes ont besoin de s'asseoir et de colorer, pas de transpirer."
          },
          {
            "state": "Perfect",
            "description": "Deep doré-brun partout, brillant, et fondant doux à l'intérieur sans tomber en morceaux, sentant doux et noisette.",
            "action": "Égoutter sur une grille et réserver. Ils se ramolliront davantage dans le braise, alors arrêtez-vous pendant qu'ils tiennent encore leur forme de cube."
          },
          {
            "state": "Overdone",
            "description": "Les cubes sont brun foncé à noircis aux bords, gras, et commencent à se désintégrer dans les mousses.",
            "action": "Tirez - les immédiatement et choisissez les morceaux réellement brûlés — l'omble amer transportera tout le plat. Légèrement au-dessus est bien; carbonisé n'est pas."
          }
        ]
      },
      "feelCue": "Un cube fini donne comme une figuier mûre lorsqu'elle est pressée, douce et productive, avec une légère peau croustillante de caramélisation. L'huile doit s'étourdir régulièrement, et non pas rugir ni saper."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_02"
      ],
      "outputState": "soffritto",
      "instructions": "Dans la même poêle avec un film d'huile de friture, cuire le céleri tranché et l'oignon à feu moyen avec une pincée de sel jusqu'à ce qu'il soit adouci et translucide mais non doré, de 8 à 10 minutes. Le céleri devrait perdre sa croûte brute tout en gardant une petite bouchée — c'est l'épine dorsale texturale de la caponata. Mélanger souvent et baisser la chaleur si quelque chose menace de colorier.",
      "visualCue": {
        "primaryTarget": "L'oignon est vitreux et mou, le céleri est brillant mais courbé, et la poêle sent doux et salé sans netteté brute.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et raide, le céleri craque et goûte herbacé et cru.",
            "action": "Continuez à transpirer avec un éclaboussure plus d'huile et un couvercle fissuré sur le dessus pour piéger la vapeur, en vérifiant toutes les deux minutes."
          },
          {
            "state": "Perfect",
            "description": "L'oignon devient translucide et s'assombrit; le céleri s'adoucit à un léger virage, mais garde une légère croustillante et sa couleur verte.",
            "action": "Passez directement à la construction de la sauce — les légumes sont prêts à recevoir la tomate."
          },
          {
            "state": "Overdone",
            "description": "L'oignon et le céleri brunissent, s'ornent et commencent à frire plutôt que de transpirer.",
            "action": "Retirez la poêle pendant un moment et ajoutez la tomate maintenant pour arrêter le brunissement. Un peu de couleur est forgivable; brunissement profond fait bouillir l'agrodolce lumineuse."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir vert et doux, comme le début de toute bonne sauce sicilienne. Le céleri doit plier sans craquer quand vous pêchez un morceau."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "soffritto",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "tomato_base",
      "instructions": "Ajouter les tomates concassées aux légumes transpirés avec les olives déchirées et les câpres rincées. Laisser mijoter doucement, en remuant de temps en temps, pendant 10 à 12 minutes jusqu'à ce que la tomate perde son bord brut, se serre et se transforme en brique plus profonde. Vous voulez une base épaisse et brillante qui n'enrobe que les légumes, pas une sauce soupeuse.",
      "visualCue": {
        "primaryTarget": "Une épaisse base de tomates jammy attachée au céleri et à l'oignon, foncée en brique rouge et scintille, avec les olives et les câpres cloués tout au long.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est molle, aqueuse et rouge-orange vif, toujours goûtant vif et cru.",
            "action": "Continuez à mijoter à découvert pour éliminer l'humidité et concentrer la saveur. Amuse-toi pour ne pas l'attraper."
          },
          {
            "state": "Perfect",
            "description": "La sauce a été réduite à une confiture épaisse et cuillerable qui laisse un sentier propre lorsqu'elle est grattée, rouge foncé et salée avec les olives salées et les câpres tissées.",
            "action": "Plier maintenant dans l'aubergine frite et l'agrodolce glaçure pour tout rassembler."
          },
          {
            "state": "Overdone",
            "description": "La sauce est sèche et pâteuse, collante et torride sur le fond de la poêle.",
            "action": "Brûlez un peu d'eau pour le desserrer et grattez avant qu'il ne brûle. Goûtez à toute note brûlée amère avant de continuer."
          }
        ]
      },
      "feelCue": "Une cuillère traînée à travers la casserole devrait laisser un chemin qui se remplit lentement. L'odeur passe de la tomate fraîche à quelque chose de plus rond, plus brillant et concentré."
    },
    {
      "nodeId": "step_4",
      "action": "Glacer",
      "inputs": [
        "tomato_base",
        "fried_eggplant",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_caponata",
      "instructions": "Mélangez le sucre et le vinaigre jusqu'à ce que le sucre se dissout, puis versez-le sur la base de la tomate et laissez-le buller dur pendant une minute afin que le bord dur du vinaigre cuise et que la sauce devienne brillante. Pliez doucement dans l'aubergine frite, en prenant soin de ne pas l'écraser, et réchauffez tout pendant 2 à 3 minutes. Goût et équilibre: il devrait atterrir doux, puis aigre, puis salé. Hors de la chaleur, dispersez les pignons de pin et le basilic déchiré sur le dessus. Surtout, laissez-le reposer au moins quelques heures, idéalement la nuit, et servir à la température ambiante — caponata est toujours mieux le lendemain.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement brillant et acajou d'aubergines et de légumes liés dans un glaçure doux-sour brillant, tondant doucement sur une cuillère et flanqué de basilic vert et de pignons pâles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vinaigre a un goût vif et brut et se tient à l'écart du plat; la surface semble terne plutôt que glaçurée.",
            "action": "Laissez-la buller encore une minute pour mouiller et émulsifier le vinaigre, puis goûter à nouveau. Une pincée de plus de sucre explose la dureté persistante."
          },
          {
            "state": "Perfect",
            "description": "Un hum équilibré de l'agrodolce — doux et aigre se pourchassant l'un l'autre au-dessus d'une base savoureuse et brinée — avec l'aubergine intacte et tout brillant et unifié.",
            "action": "Enlevez-le du feu, garnissez-le et laissez-le reposer. Servir à température ambiante, idéalement un jour plus tard, avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine a été bouillie et la glaçure a cuit collante et cloie, le vinaigre est devenu plat.",
            "action": "Ne pliez pas plus loin. Éclairer avec une touche de vinaigre frais sur la chaleur pour le réveiller et accepter une texture plus douce."
          }
        ]
      },
      "feelCue": "Sur la langue, il devrait d'abord frapper doux, puis un lifting acide propre, puis s'installer dans une saumure salée — pas une seule note criant sur les autres. L'aubergine devrait encore se sentir comme des cubes distincts, soyeux, pas une pâte. Croyez que le repos de la nuit se mariera et approfondira tout."
    }
  ]
};
