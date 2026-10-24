export default {
  "repoId": "master_egyptian_dukkah_001",
  "parentRepoId": null,
  "slug": "dukkah",
  "author": "ForkRecipe Kitchen",
  "title": "Dukkah",
  "description": "Un mélange égyptien grossièrement moulu de noisettes grillées, de sésame, de coriandre et de cumin — parfumé, croquant et complexe, servi avec de l'huile et du pain pour tremper ou éparpiller sur les œufs et les légumes.",
  "cuisine": "Égyptienne",
  "culture": "Égyptienne",
  "category": "condiments",
  "tags": [
    "dukkah",
    "Égyptienne",
    "noix",
    "épice",
    "condiment",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Noisettes brutes (sans peau ou sans peau)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Pistaches",
        "Amandes",
        "Noix"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Graines de sésame blanc",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "sésame mixte noir et blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines entières de coriandre",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de cumin entières",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Grains de poivre noirs entiers",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sel fin, utilisé plus parcimonieusement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Thym séché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Origan séché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_hazelnuts",
      "instructions": "Étaler les noisettes en une seule couche dans une poêle sèche à feu moyen. Faire cuire, agiter la poêle toutes les 30 secondes, pendant 5 à 7 minutes jusqu'à ce que les peaux soient cloquées et craquelées et que les noix en dessous soient d'un brun doré profond. Si vous utilisez des noisettes sur la peau, aspirez dans une serviette de cuisine propre, enveloppez et frottez vigoureusement pour enlever la plupart de la peau. La peau restante est fine et ajoute de l'amertume. Étaler sur une plaque pour refroidir complètement avant de broyer.",
      "visualCue": {
        "primaryTarget": "Les noisettes sont un riche brun-château doré avec des peaux craquées et papiers. Un arôme fort, chaud et grillé remplit la cuisine, l'odeur de cacao et de beurre chauds.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâle, beige ivoire sous la peau; le goût cru de la noisette est encore présent — pâle et légèrement cireux.",
            "action": "Retourner à la poêle à feu moyen, en tremblant constamment. Ils ont besoin de 2 à 3 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Couleur marron d'or profond avec un arôme riche et chaud. L'intérieur d'un écrou fissuré révèle un même toast tout au long, pas seulement une couleur de surface.",
            "action": "Astuce sur une plaque et refroidir complètement avant de frotter les peaux et de broyer."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à noir avec une amertume vive, acride et fumée — les huiles ont brûlé et ont fait une odeur de rancis plutôt que chaud.",
            "action": "Jeter et recommencer. Les noisettes brûlées ne peuvent être sauvées et ruineront la dukkah."
          }
        ]
      },
      "feelCue": "Ramassez un écrou après le refroidissement — il doit se sentir sec et fragile, se cassant proprement lorsqu'il est cassé plutôt que de se plier ou de sentir gras sur la peau."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "toasted_spices_and_sesame",
      "instructions": "Faites griller les graines de sésame, la coriandre, le cumin et les grains de poivre séparément — chacun a une taille et une densité différentes, de sorte qu'ils frappent la perfection à différents moments. Graines de sésame d'abord: 2 à 3 minutes dans une casserole sèche, tremblant constamment, jusqu'à ce que doré et saut. Puis coriandre et cumin ensemble : 2 à 3 minutes jusqu'à ce qu'ils sentent chaud et que les graines de coriandre commencent à colorier. Les grains de poivre durent : 1 minute jusqu'à parfumé. Laisser refroidir complètement avant de combiner.",
      "visualCue": {
        "primaryTarget": "Les graines de sésame sont un ambre d'or uniforme; les graines de coriandre ont changé de bronzage pâle du vert blanc; le cumin est une ombre plus profonde, sentant la terre chaude et les agrumes. Les grains de poivre sentent fortement aromatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines ont l'air de la même couleur que les huiles brutes, et l'odeur de la poêle est faible.",
            "action": "Continuer à griller à feu moyen, en tremblant fréquemment. La patience est requise : les épices crues laissent une note plate et verte dans la dukkah finie."
          },
          {
            "state": "Perfect",
            "description": "Chaque épice est visiblement une ombre ou deux plus foncées que crues, et le parfum combiné de la poêle est chaud, complexe, et profondément parfumé — les agrumes, la terre et le pain chaud.",
            "action": "Astucez immédiatement sur une assiette fraîche. La chaleur résiduelle dans une poêle chaude gardera la cuisson après l'avoir retirée du brûleur."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont uniformément brun foncé; l'odeur est devenue acride et nette plutôt que chaude. Le sésame sent l'huile brûlée.",
            "action": "Jetez le lot. Les épices recouvertes deviennent amères et ruinent l'équilibre de la dukkah."
          }
        ]
      },
      "feelCue": "Les graines de coriandre sont faites quand elles se sentent creuses et cassantes si vous appuyez une entre vos doigts, plutôt que denses et durs. La chaleur dans votre paume du résidu de la poêle doit se dissiper en moins d'une minute."
    },
    {
      "nodeId": "step_3",
      "action": "Livre",
      "inputs": [
        "toasted_hazelnuts",
        "toasted_spices_and_sesame",
        "ing_06",
        "ing_07"
      ],
      "outputState": "ground_dukkah",
      "instructions": "Mélanger tous les ingrédients grillés refroidis dans un mortier avec le sel feuilleté et le thym séché. Pound avec un mouvement de broyage circulaire — pas une action de mélange lisse, mais un écrasement intermittent. Vous voulez une texture grossière, inégale, semblable à des décombres: quelques morceaux de noisettes restent de taille de pois, un peu de sésame est entier, un peu d'épices est pulvérisé. Le contraste entre la fine poussière d'épices et les morceaux entiers de sésame et de noix est ce qui fait dukkah. Alternativement, l'impulsion 3 à 5 fois dans un robot alimentaire — ne l'exécutez pas en continu ou vous produirez du beurre de noisette.",
      "visualCue": {
        "primaryTarget": "Un mélange sablonneux, grossier et hétérogène de morceaux de noisettes (quelques pois), de graines de sésame entières et d'une fine poudre d'épices en dessous. On dirait du gravier écrasé, pas du sable. Golden-brun et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noisettes encore en gros morceaux, les épices entières et non craquées, ressemblent à un bol de noix et de graines mélangées, et non à un condiment intégré.",
            "action": "Continuez à frapper ou à pousser. Les épices doivent s'ouvrir et s'intégrer à la poussière de noix."
          },
          {
            "state": "Perfect",
            "description": "Morceaux grossiers de morceaux de noix, sésame intact, et un lit de poussière d'épices parfumées. Lorsque vous appuyez sur une pince entre le pouce et l'index, il s'effondre plutôt que de coller. Profondément aromatiques.",
            "action": "Goûtez pour le sel et l'assaisonnement, ajustez si nécessaire, puis conservez dans un pot hermétique."
          },
          {
            "state": "Overdone",
            "description": "Une poudre fine et uniforme ou — pire — une pâte humide et huileuse. Les huiles de noisettes ont été libérées et lient le mélange dans une touffe.",
            "action": "Incorporer une cuillère à soupe de graines de sésame plus entières pour ajouter de la texture en arrière, ou accepter un dukkah plus fin-texturé qui a encore bon goût mais manque de croquant."
          }
        ]
      },
      "feelCue": "Pincez une petite quantité — elle devrait se sentir sèche et émiettée, comme une chapelure grossière, et tomber en morceaux quand vous la relâchez. Si elle se tient ensemble et se sent lissée, les noix ont été au sol."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "ground_dukkah"
      ],
      "outputState": "finished_dukkah",
      "instructions": "Goûtez le dukkah directement, puis goûtez-le encore trempé dans un peu d'huile d'olive. L'huile amplifie toutes les saveurs et révèle l'équilibre: vous devriez obtenir la chaleur de la coriandre et du cumin à l'avant, une douce amertume des peaux de noisettes, et une noisette de sésame persistante. Ajouter plus de sel s'il a un goût muté; le sel flocé ajoute aussi des pops texturaux que le sel fin ne peut pas reproduire. Conserver dans un pot hermétique à température ambiante jusqu'à 3 semaines ou réfrigérer jusqu'à 2 mois.",
      "visualCue": {
        "primaryTarget": "Un mélange doré-brun, grossier, émietté avec des couches visibles de texture — morceaux de noix, sésame entier, et poussière d'épices. Il a l'air accueillant et fait main, pas en usine-uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûts fade et farineux — les épices n'ont pas été suffisamment broyées pour se libérer, et le sel est insuffisant.",
            "action": "Retourner au mortier pour un autre tour de pilonnage, puis re-goûter et ajuster le sel."
          },
          {
            "state": "Perfect",
            "description": "Chaleureux, noisette, légèrement salé et complexe. Chaque pince offre une combinaison différente de textures. Avec l'huile et le pain, il est immédiatement addictif.",
            "action": "Conserver dans un pot hermétique à l'abri du soleil direct."
          },
          {
            "state": "Overdone",
            "description": "Goûts plats et légèrement stalles — sur-selés ou les épices étaient trop finement broyés, perdant la volatilité et devenant terne.",
            "action": "Incorporer une petite quantité de graines de sésame entier fraichement grillées pour raviver un peu de texture et d'arôme."
          }
        ]
      },
      "feelCue": "Le dukkah fini devrait couler librement et tomber à travers vos doigts comme du sable sec, avec des petites pops audibles que les morceaux de noix plus grandes frapper l'un contre l'autre. Si elle s'agrippe, elle est trop humide ou trop au sol."
    }
  ]
};
