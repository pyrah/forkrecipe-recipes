export default {
  "repoId": "master_american_hoppin_john_001",
  "parentRepoId": null,
  "slug": "hoppin-john",
  "author": "ForkRecipe Kitchen",
  "title": "C'est John.",
  "description": "Les pois aux yeux noirs braisaient bas et lents avec un hamac fumé, de l'oignon et du riz dans leur propre bouillon — le plat de chance et de prospérité mangé le jour de l'an à travers le Sud américain, enraciné dans les traditions alimentaires Gullah Geechee du Lowcountry.",
  "cuisine": "Américain",
  "culture": "Gullah/Sud",
  "category": "grains",
  "tags": [
    "Pois aux yeux noirs",
    "riz",
    "sud",
    "Goullah",
    "nouveaux ans",
    "jambon",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pois secs aux yeux noirs, trempés pendant la nuit",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Pois aux yeux noirs frais ou congelés (réduire le temps de cuisson à 30 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Tablier fumé ou bacon épais",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": [
        "jambe de dinde fumée (pour version plus légère)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, coupé en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuille de la baie",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché, quantité réduite de moitié"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de poivre rouge concassé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Riz blanc à grains longs",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Riz d'or de Caroline"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.06,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Échalote, tranchée finement",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "persil frais"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_peas",
      "instructions": "La veille : rincer les pois secs aux yeux noirs dans de l'eau froide, ramasser les pierres ou les petits pois. Déposer dans un grand bol et couvrir d'eau froide d'au moins 5 cm. Laisser tremper à température ambiante pendant la nuit, de 8 à 12 heures. Les pois vont à peu près doubler en volume. Égoutter et jeter l'eau de trempage. Cette étape n'est pas optionnelle : le trempage réduit la durée totale de cuisson de 3 heures à moins de 90 minutes et assure une cuisson uniforme des pois sans éclats de peau avant la fin des intérieurs.",
      "visualCue": {
        "primaryTarget": "Pois à la peau lisse et gonflés qui ont presque doublé leur taille sèche. L'œil noir caractéristique de chaque pois doit être clairement visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pois sont encore compacts et durs, mais légèrement plus gros que les pois séchés. L'œil noir est encore pincée et petit.",
            "action": "Continuez à tremper. Si le temps est court, utiliser le savon rapide: couvrir d'eau, faire bouillir 2 minutes, retirer du feu, tremper 1 heure."
          },
          {
            "state": "Perfect",
            "description": "Les pois sont clairement gonflés, avec des peaux tendues, de la chair et l'œil noir fortement élargi. Un pois pressé entre le pouce et l'index donne avec une certaine résistance mais ne s'effondre pas.",
            "action": "Égoutter, jeter l'eau de trempe et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Les pois sentent légèrement aigre. Les peaux commencent à glisser de la chair. L'eau de trempe est trouble et épaisse.",
            "action": "Égoutter immédiatement et cuire immédiatement. La fermentation a commencé, mais les pois sont encore excellents."
          }
        ]
      },
      "feelCue": "Un pois aux yeux noirs bien trempé devrait se sentir comme un raisin ferme, mais qui donne du raisin — pas le caillou dur d'un pois séché, mais avec suffisamment de corps qu'il ne s'écrase pas complètement quand pincée."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "soaked_peas",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "tender_peas_with_ham",
      "instructions": "Placer les pois drainés et le jarret dans une casserole ou un four hollandais. Ajouter l'oignon, l'ail cassé, la laurier, le thym, la cayenne, et une pincée généreuse de sel. Couvrir d'eau froide de 5 cm. Porter à ébullition, en écrémant toute mousse grise de la surface. Réduire en mijotant doucement et régulièrement. Cuire de 60 à 75 minutes, vérifier toutes les 20 minutes et ajouter de l'eau chaude pour garder les pois juste immergés. Lorsque les pois sont complètement tendres, retirez le jarret et laissez-le refroidir pour le manipuler. Tirez toute la viande de l'os dans des morceaux généreux et retournez-la dans le pot. Jeter la peau et les os. Goûtez le bouillon — il devrait être profondément fumé, salé et légèrement épicé.",
      "visualCue": {
        "primaryTarget": "Des pois entièrement tendres dans un bouillon riche, brun-ambre, légèrement fumé. La viande de jambon est en morceaux doux et chaggy distribués dans le pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pois encore fermes et légèrement crayeux au centre quand mordu. Le bouillon est mince, pâle et a un goût plat.",
            "action": "Continuez à mijoter. Goûtez toutes les 15 minutes. Un pois dur ne s'adoucira pas une fois le riz ajouté — cette étape est critique."
          },
          {
            "state": "Perfect",
            "description": "Les pois sont crémeux-doux tout le long du chemin sans centre féculent. Le bouillon est un ambre profond, riche en fumée et rendu gras de porc, et enveloppe légèrement les lèvres.",
            "action": "Mesurez le bouillon — vous avez besoin d'un rapport de 1,5:1 de bouillon au riz. Ajouter de l'eau si nécessaire. Ajouter le riz."
          },
          {
            "state": "Overdone",
            "description": "De nombreux pois se sont dissous dans le bouillon, qui est maintenant épais et opaque. Le pot ressemble plus à un porridge qu'à un braise.",
            "action": "Procéder — la liqueur de pot est profondément aromatisée à partir des pois dissous. Le plat fini sera épais et réconfortant, non séparé et distinct."
          }
        ]
      },
      "feelCue": "Le bouillon de Hoppin' John bien cuit couvre vos lèvres quand vous le sirotez — cette graisse faible et soyeuse est le collagène et la graisse de porc libérée par le jarret. Si le bouillon a un goût mince et aqueux, laisser mijoter avec le couvercle."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "tender_peas_with_ham",
        "ing_08"
      ],
      "outputState": "finished_hoppin_john",
      "instructions": "Porter le pot à ébullition à feu moyen-vif. Incorporer le riz rincé et mélanger une fois pour distribuer uniformément. Réduire au minimum la chaleur et couvrir soigneusement. Cuire de 18 à 20 minutes sans soulever le couvercle. Le riz absorbe le bouillon fumé et riche en porc qu'il cuisine — c'est ce qui rend Hoppin' John différent du riz servi aux haricots. Retirer du feu et reposer couvert pendant 10 minutes. Le riz doit être entièrement cuit et le liquide complètement absorbé. Fluffer doucement avec une fourchette.",
      "visualCue": {
        "primaryTarget": "Riz cuit directement dans le bouillon, absorbant sa fumée et sa couleur. Le pot fini devrait avoir l'air unifié — riz beige fumé entrecoupé de pois de couleur crème et de morceaux de jambon foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Liquid toujours pooling aux bords lorsque vous inclinez le pot. Le riz est crayeux et croquant au centre.",
            "action": "Couvrir et cuire encore 5 minutes à feu très doux. Si le liquide est parti mais le riz est encore dur, ajouter 60 ml d'eau chaude et couvrir à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Tout liquide absorbé. Les grains de riz sont entièrement cuits mais distincts. Les pois se sont installés et la casserole sent la fumée, le thym et le porc.",
            "action": "Flacon avec une fourchette et garnir d'échon."
          },
          {
            "state": "Overdone",
            "description": "Le fond a formé une croûte épaisse et le riz commence à sentir grillé et brûlé.",
            "action": "Dans le Sud, cette croûte inférieure est appelée « riz pot » et est prisée. Grattez-le et repliez-le, ou offrez-le séparément."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez le couvercle après le reste, un nuage de vapeur fumée et parfumée de thym devrait gonfler. Faites glisser une fourchette à travers le riz — elle devrait se sentir légère et séparée, chaque grain distincte et légèrement teint l'ambre-or du bouillon de jambon."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "finished_hoppin_john",
        "ing_10"
      ],
      "outputState": "plated_hoppin_john",
      "instructions": "Goûtez le Hoppin' John fini encore une fois pour le sel, la cayenne et la fumée. Ajuster au besoin. Spoon dans de larges bols et disperser une pincée généreuse de pétoncle finement tranché sur le dessus — le vert n'est pas seulement décoration, mais un contrepoint frais et tranchant à la richesse profonde et fumée des pois et du riz. Servir avec du pain de maïs à l'eau chaude, des verts à collier et de la sauce chaude sur la table.",
      "visualCue": {
        "primaryTarget": "Un pot unifié de riz d'ambre fumé, de pois blanc crème et de jambon foncé, couronné d'un éclat d'éparpillement vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pétoncle est absent ou clairsemé. Le plat est brun et monochrome dans le bol.",
            "action": "Scatter les pétoncles généreusement. Dans la tradition du Gullah, la garniture verte a une signification symbolique et culinaire."
          },
          {
            "state": "Perfect",
            "description": "Le bol est parfumé et chaud. Le bol est rempli de riz fumé, d'ambre et de petits pois, surmonté de pétoncle vert vif. L'odeur est la fumée, le porc, le thym, et juste un murmure de Cayenne.",
            "action": "Servir immédiatement. Passe la sauce chaude."
          },
          {
            "state": "Overdone",
            "description": "Le pétoncle s'est flétri et a tourné le olive-drabe de s'asseoir sur le riz chaud trop longtemps.",
            "action": "Rafraîchir avec du pétoncle fraîchement tranché. Pré-découpez un lot de sauvegarde."
          }
        ]
      },
      "feelCue": "Une cuillère parfaite de Hoppin' John devrait se sentir chaud et dense — le riz enveloppe la bouche avec de la graisse de porc faible, les pois donnent une pop douce et productive, et le jambon fournit occasionnellement des éclats de fumée et de sel contre la chaleur douce de Cayenne."
    }
  ]
};
