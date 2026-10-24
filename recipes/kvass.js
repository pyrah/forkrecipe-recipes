export default {
  "repoId": "master_russian_kvass_001",
  "parentRepoId": null,
  "slug": "kvass",
  "author": "ForkRecipe Kitchen",
  "title": "Kvass",
  "description": "L'ancienne boisson de pain de seigle fermenté de la Russie — pain noir grillé à l'amertume au charbon, imprégnée d'eau bouillante, sucrée et inoculée avec de la levure pendant 48 heures jusqu'à ce qu'elle devienne légèrement pétillante, une boisson ambre qui goûte de pain aigre, de malt foncé et de la terre elle - même, avec à peine assez d'alcool pour compter et plus qu'assez de caractère pour se souvenir.",
  "cuisine": "Russe",
  "culture": "Europe orientale",
  "category": "beverages",
  "tags": [
    "Autres",
    "Russe",
    "fermenté",
    "boisson à pain",
    "seigle",
    "Europe orientale",
    "probiotique"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 3,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pain de seigle foncé (stalle, ou tout sourd de seigle)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Pumpernickel pain",
        "Pain Borodinsky"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Eau filtrée",
      "ratioValue": 8,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne brut ou miel noir",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": [
        "Extrait de malt",
        "mélasse"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure sèche active",
      "ratioValue": 0.05,
      "defaultUnit": "part",
      "substitutions": [
        "démarreur de sarcelles (3x la quantité pour un ferment plus sauvage)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Menthe ou raisins secs frais (facultatif, pour la saveur)",
      "ratioValue": 0.1,
      "defaultUnit": "part",
      "substitutions": [
        "zeste de citron",
        "graines de carvi"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Tranche de citron (facultatif, pour la fraîcheur)",
      "ratioValue": 0.05,
      "defaultUnit": "part",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Verser le pain",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_bread_cubes",
      "instructions": "Couper ou déchirer le pain de seigle en cubes de 1 à 2 cm ou en tranches épaisses et les étaler sur une plaque de cuisson. Faire cuire au four à 200 °C (400 °F) pendant 20 à 30 minutes, en tournant une fois à mi-chemin, jusqu'à ce que le pain soit uniformément très sombre, mais pas tout à fait noir. Le kvass traditionnel utilise du pain grillé assez foncé pour que beaucoup d'Occidentaux le considèrent brûlé. Ce toast foncé donne à kvass sa saveur caractéristique profonde, légèrement amère, rôtie de malterie. Les composés de réaction Maillard et les amidons caramélisés de la croûte du pain sont l'épine dorsale de la boisson. N'utilisez pas de pain blanchi ou non blanchi — le goût sera plat et aqueux.",
      "visualCue": {
        "primaryTarget": "Des cubes de pain brun foncé à presque noir, uniformément grillés sans taches pâles. La surface doit sembler et sentir comme un toast très foncé avec un char légèrement amer aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Croûtons dorés clairs ou bruns moyens. L'odeur est seulement de toast doux sans profondeur ni amertume.",
            "action": "Retour au four et toast plus foncé. Les kvas traditionnels exigent des ténèbres profondes et presque intimidantes dans le pain."
          },
          {
            "state": "Perfect",
            "description": "Très brun foncé, proche du noir aux bords les plus fins. uniformément rôti. Des odeurs de malt foncé, de café et de seigle caramélisé. Une pièce s'écrase bien lorsqu'elle est cassée.",
            "action": "Ajouter à l'eau bouillante immédiatement à raide."
          },
          {
            "state": "Overdone",
            "description": "Complètement noir et carbonisé. Des odeurs de carbone et de combustion. La qualité du frêne quand il est mordu.",
            "action": "Si seulement les pièces les plus petites sont carbonisées, continuez de toute façon et goûtez la bière finale — un peu d'omble est traditionnel. Si tout est complètement brûlé et acridé, recommencer avec du pain frais."
          }
        ]
      },
      "feelCue": "Snap un morceau de pain kvass bien préparé : il devrait se casser propre et croustillant avec un son comme casser un cracker. L'intérieur doit être sec et sombre jusqu'au bout, pas doux au centre."
    },
    {
      "nodeId": "step_2",
      "action": "Streep",
      "inputs": [
        "toasted_bread_cubes",
        "ing_02"
      ],
      "outputState": "bread_wort",
      "instructions": "Placez les cubes de pain grillés dans un grand récipient résistant à la chaleur (verre, céramique ou acier inoxydable — pas d'aluminium nu ou de métal réactif). Versez l'eau bouillante sur eux. L'eau tournera immédiatement une profonde, acajou-brun comme les sucres torréfiés et les composés de couleur se lèchent — cette extraction de couleur rapide est profondément satisfaisante. Mélanger brièvement, couvrir, et raide à la température ambiante pendant 2–3 heures jusqu'à ce qu'il soit complètement frais. Le liquide qui en résulte s'appelle le «Wort», le terme de brassage traditionnel, pour le liquide riche en sucre et en aromatisant qui sera fermenté. Il doit être brun très foncé, goût de seigle rôti et d'amertume, et avoir une agréable odeur maltée.",
      "visualCue": {
        "primaryTarget": "Un liquide noir acajou très sombre dans lequel le pain est maintenant doux et désintégré. La couleur est plus profonde que toute bière noire commerciale.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore pâle — le pain n'était pas assez sombre, ou le temps escarpé était trop court. Ça a un goût d'eau.",
            "action": "Si le pain n'était pas assez sombre, vous pouvez griller des cubes de pain supplémentaires et les ajouter au millepertuis. Plus longtemps – minimum 2 heures."
          },
          {
            "state": "Perfect",
            "description": "Une acajou profonde. Goûte amer, malté et légèrement sucré de l'amidon résiduel du pain. Ça sent comme une boulangerie croisée avec une brasserie.",
            "action": "Soucher et ajouter le sucre et la levure au ferment."
          },
          {
            "state": "Overdone",
            "description": "Trop amer et semblable au goudron provenant du pain carbonisé surextracté. Ça a le goût de café.",
            "action": "Diluer avec de l'eau chaude supplémentaire pour réduire l'amertume. Goûtez et ajustez."
          }
        ]
      },
      "feelCue": "Soulevez un peu de millepertuis sur une cuillère et sentez - le: fermez les yeux et il doit sentir simultanément une boulangerie sombre et une brasserie douce — grains rôtis, malt, caramel, et l'odeur la plus barrée de levure de pain de la croûte. C'est l'arôme dans lequel vous fermentez."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "bread_wort",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "fermented_kvass",
      "instructions": "Placer le millepertuis dans un tamis à mailles fines, presser la pâte à pain pour extraire tout le liquide. Jetez le pain dépensé. Alors que le millepertuis est encore chaud (mais en dessous de 38 C — test sur votre poignet), dissoudre complètement le sucre et saupoudrer la levure sur la surface. Incorporer doucement et ajouter la menthe ou les raisins secs en option et la tranche de citron. Couvrir avec un chiffon et laisser à température ambiante (21–24 C) pendant 24–48 heures. Dans les 8-12 heures, vous verrez les kvas commencer à buller et mousser à la surface pendant que la levure convertit les sucres du pain en alcool et en dioxyde de carbone. Goûtez après 24 heures : doux et doux ; goûtez après 48 : plus aigre et complexe. Les sédiments de levure vont s'installer.",
      "visualCue": {
        "primaryTarget": "Après 48 heures : un liquide brun-ambre à foncé avec une mousse fine à la surface, bouillonnant doucement et une odeur de levure. Les sédiments de pain se sont installés au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours très doux, à peine aigre, avec peu ou pas d'activité en mousse après 24 heures.",
            "action": "Passez à un endroit plus chaud. Si l'activité n'est toujours pas terminée après 36 heures, la levure peut être morte — ajouter 1/4 de c. à thé de levure sèche active."
          },
          {
            "state": "Perfect",
            "description": "Mousse vive, nettement aigre et agréablement amère, avec juste un murmure de douceur résiduelle. Sens de levure, de pain foncé et de fermentation légère.",
            "action": "Fraise et bouteille pour la carbonation légère."
          },
          {
            "state": "Overdone",
            "description": "Très aigre, plat (tout le CO2 s'est échappé) et légèrement alcoolique. Pas de douceur.",
            "action": "Encore bon à boire — il a fermenté à son maximum. Bouteille immédiatement au réfrigérateur pour arrêter la fermentation."
          }
        ]
      },
      "feelCue": "Goûtez les kvass à 24 heures et encore à 48: le changement est dramatique. À 24 heures, il a le goût de pain foncé dissous dans de l'eau légèrement acide. À 48 heures, elle a le goût d'une bonne boisson, complexe, vivante, vivante. Faites confiance à votre palais sur le minuteur."
    },
    {
      "nodeId": "step_4",
      "action": "Bouteille et service",
      "inputs": [
        "fermented_kvass"
      ],
      "outputState": "finished_kvass",
      "instructions": "Enfilez le kvas à travers un chiffon à mailles fines pour enlever les sédiments de levure et tous les aromatiques. Transfert dans des bouteilles propres, scellables ou un pichet couvert. Pour la carbonation légère, ajouter 1/2 cuillère à café de sucre par litre avant de sceller et laisser à température ambiante 6-12 heures de plus avant de réfrigérer. Kvass est prêt à boire immédiatement et se conserve au réfrigérateur pendant 3 à 5 jours, après quoi il continue à amer et finit par devenir désagréable. Servir froide, droite ou sur la glace. En Russie, il est également utilisé comme base pour okroshka (soupe froide) et comme marinade pour la viande.",
      "visualCue": {
        "primaryTarget": "Ambre foncée à acajou brun dans un verre, légèrement étourdissant, avec la couleur de la bière artisanale sombre et un anneau de mousse légère à la jante de verre quand versé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plat, doux, à peine une note aigre. Ça a le goût de l'eau de pain foncé.",
            "action": "Fermentez encore 12-24 heures avant l'embouteillage."
          },
          {
            "state": "Perfect",
            "description": "Agréablement aigre, malté, légèrement amer, terreux et légèrement pétillant. Rafraîchissant malgré sa couleur foncée. Le goût persiste chaudement sur la langue.",
            "action": "Réfrigérer et consommer dans les 5 jours."
          },
          {
            "state": "Overdone",
            "description": "Très aigre, presque au vinaigre, sans douceur. Plat.",
            "action": "Utilisez-le comme marinade pour le porc ou le boeuf – son acidité est un sensible parfait et la saveur de malt foncé ajoute de la profondeur."
          }
        ]
      },
      "feelCue": "Un verre de kvass bien fait a un corps léger d'amidon de seigle dissous — il est plus dense que l'eau mais plus léger que la bière, quelque part entre un bouillon léger et une eau pétillante. La carbonation est douce et naturelle, plus d'un picotement qu'un fizz."
    }
  ]
};
