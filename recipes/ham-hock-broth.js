export default {
  "repoId": "master_american_hamhockbroth_001",
  "parentRepoId": null,
  "slug": "ham-hock-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Fumée Ham Hock Broth",
  "description": "Une liqueur de pot très fumée, riche en porc, mijotée avec de l'oignon, du céleri et une éclaboussure de vinaigre de cidre — le liquide essentiel pour les clavards du Sud, les haricots blancs et les verts d'hiver.",
  "cuisine": "Américain",
  "culture": "Sud",
  "category": "stocks",
  "tags": [
    "jambon",
    "porc",
    "bouillon",
    "sud",
    "fumé",
    "pot-liquor",
    "Claviers",
    "américains"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambon fumé (1–2 entier)",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": [
        "cou de porc fumé",
        "cuisses de dinde fumée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, coupé en deux dans la racine",
      "ratioValue": 1,
      "defaultUnit": "large",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles",
      "ratioValue": 3,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail, non pelées et broyées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 3,
      "defaultUnit": "L",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rincer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "rinsed_hock",
      "instructions": "Rincer le jarret sous l'eau froide, frotter toute saumure de surface ou tout résidu d'emballage. Inspectez la peau — si elle est très sombre ou a des taches sèches, grattez légèrement avec le dos d'un couteau. Il n'est pas nécessaire de tremper les jarrets fumés à moins qu'ils ne soient extrêmement salés (dégustez une raclure de viande exposée — si elle est presque non comestible, trempez dans de l'eau froide pendant 1 heure avant de procéder). Pat sèche.",
      "visualCue": {
        "primaryTarget": "Un jarret fumé propre, brun acajou, sans fleur blanche ni croûte saumure. La peau doit être intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte cristalline blanche est toujours présente à la surface.",
            "action": "Rincer plus soigneusement sous l'eau chaude et frotter de vos mains jusqu'à ce que la surface soit propre."
          },
          {
            "state": "Perfect",
            "description": "Surface propre et sèche. Peau acajou-brun profonde. Sens de fumée hickory et de porc guéri.",
            "action": "Déposer dans la casserole et ajouter tous les autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "La peau a été nettoyée ou déchirée — aucune conséquence réelle.",
            "action": "Continuez. Le collagène sous la peau enrichira encore le bouillon."
          }
        ]
      },
      "feelCue": "La peau d'un bon jarret fumé est légèrement collante et sèche, jamais visqueuse. Toute glissante est un avertissement de détérioration; jetez et utilisez un jarret frais."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "rinsed_hock",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "boiling_broth",
      "instructions": "Placez le jarret dans un grand pot lourd. Ajouter les moitiés d'oignon (côté coupé pour une touche de couleur), le céleri, l'ail, les feuilles de laurier, les grains de poivre et le vinaigre de cidre de pomme. Couvrir de 3 litres d'eau froide. Porter à ébullition vigoureuse à feu vif. Le vinaigre sert à deux fins : il tire doucement du calcium de l'os pour le corps, et il éclaire le bouillon fini sans être détectable comme acidité.",
      "visualCue": {
        "primaryTarget": "Un ébullition en laminage avec de la mousse brun-gris ramassant aux bords de surface. Le liquide commence à prendre une couleur dorée pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore froide ou à peine bouillante. Rien ne se passe.",
            "action": "Gardez la chaleur élevée. Un début de froid est correct — il tire les impuretés des os lentement."
          },
          {
            "state": "Perfect",
            "description": "Une ébullition pleine et active. Mousse grise-brun formant aux bords. Des odeurs liquides de fumée, de porc et de céleri sucré.",
            "action": "Essuyez la mousse maintenant avant de réduire la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Dur bouilli pendant plus de 20 minutes sans écumage — la mousse a été réintégrée.",
            "action": "Réduire en mijotant et procéder. Le bouillon sera légèrement moins clair, mais sans altération de la saveur."
          }
        ]
      },
      "feelCue": "La chaleur lorsque vous vous penchez sur le pot doit être immédiate et significative — vous devriez sentir la vapeur bien avant que votre visage soit proche. C'est le bon ébullition."
    },
    {
      "nodeId": "step_3",
      "action": "Abat-jour",
      "inputs": [
        "boiling_broth"
      ],
      "outputState": "skimmed_broth",
      "instructions": "Avec le bouillon à ébullition complète, utilisez une grande louche ou une cuillère pour éloigner la mousse brun-gris qui a recueilli autour des bords. Travailler rapidement et méthodiquement, rincer la louche entre les passages. Cette mousse est une protéine sanguine coagulée — elle n'est pas nocive, mais ajoute de l'amertume et de l'amertume si elle reste. Une fois la mousse disparue (habituellement de 3 à 4 écréms), le bouillon est prêt à laisser mijoter longtemps.",
      "visualCue": {
        "primaryTarget": "Une surface claire sans mousse grise ou brune. Le liquide a une teinte dorée chaude et sent propre et fumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mousse grise encore présente autour des bords et collant aux murs de pot.",
            "action": "Ne vous arrêtez pas jusqu'à ce que la surface soit dégagée."
          },
          {
            "state": "Perfect",
            "description": "La surface est propre, liquide d'or chaud, bouillonnant vigoureusement. Pas de mousse en vue.",
            "action": "Réduire immédiatement le feu jusqu'à ce qu'il mijote."
          },
          {
            "state": "Overdone",
            "description": "Un écrémage trop zélé a enlevé la graisse et le liquide doré avec la mousse.",
            "action": "Continuez. Le bouillon sera légèrement plus maigre, mais la fumée et la saveur de porc sont toujours présentes dans le jarret."
          }
        ]
      },
      "feelCue": "La mousse sur la louche est légère et aérée avec une odeur distinctement métallique — rien de tel que la graisse propre de porc qui va rendre plus tard, qui sent doux et fumé."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "skimmed_broth"
      ],
      "outputState": "braised_hock",
      "instructions": "Réduisez la chaleur au réglage le plus bas qui maintient une mijotée nue — juste quelques bulles paresseuses chaque seconde, dérangeant à peine la surface. Couvrir avec le couvercle ajar. Cuire pendant 2,5 heures. Vérifiez toutes les 45 minutes : éjaculez toute matière grasse qui s'accumule (ou laissez-la pour un bouillon plus riche) et assurez-vous que la mijoter n'a pas complètement arrêté ou est montée à ébullition. Le jarret est fait lorsque la peau est complètement tendre et que la viande s'éloigne de l'os avec un remorqueur doux.",
      "visualCue": {
        "primaryTarget": "Un bouillon riche en or-ambre à la mijote nue. La peau de jarret est passée de ferme à soyeuse. Le céleri est presque dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore serrée sur le jarret. La viande résiste quand vous essayez de la tirer. Broth a un goût mince avec de la fumée à l'avant et aucun corps.",
            "action": "Continuer à mijoter — vérifier les incréments de 30 minutes. Le bouillon de jarret inférieur est juste le bouillon de jarret qui a besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "La peau est douce, presque gélatineuse au toucher. La viande se sépare avec une légère pression. Le bouillon est d'or profond, légèrement sirupeux, intensément fumé et salé.",
            "action": "Enlevez le jarret du pot. Mélanger et cueillir la viande."
          },
          {
            "state": "Overdone",
            "description": "La viande hachée est tombée complètement de l'os dans le bouillon. Le liquide a diminué en dessous de 1,5 litre.",
            "action": "Souchez soigneusement, cueillir de la viande dans le liquide. Diluer à l'eau chaude si trop salée. La saveur sera intense — parfait comme liquide de braisage."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la peau du jarret avec l'arrière d'une cuillère après 2 heures — il devrait se détacher facilement et lentement en arrière, comme en appuyant sur une prune mûre. La résistance dure signifie plus de temps; aucune résistance ne signifie que le bouillon est très fait."
    },
    {
      "nodeId": "step_5",
      "action": "Poignée",
      "inputs": [
        "braised_hock"
      ],
      "outputState": "ham_hock_broth",
      "instructions": "Relever le jarret et réserver sur une planche pour refroidir légèrement. Placer le bouillon dans un pot propre ou un contenant de stockage. Goûtez et ajustez le sel seulement si vous l'utilisez immédiatement — si vous l'utilisez pour les câlins ou les haricots, assaisonnez à la fin de la cuisson, car le plat concentrera le sel plus loin. Lorsque le jarret est assez frais pour être manipulé, tirez la viande de l'os et de la peau, jetant le filet. Réservez la viande pour le plat que vous cuisinez, en la remuant en garniture.",
      "visualCue": {
        "primaryTarget": "Un bouillon en or ambré clair et profond, légèrement recouvert d'un mince anneau de graisse dorée aux bords. Riche en fumée et en porc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth a l'air mince et d'or pâle. La couche grasse est clairsemée. Goûté avec de la fumée mais sans corps.",
            "action": "Retournez dans le pot et réduisez de 25% à feu moyen. Le collagène et la gélatine ont besoin de plus de temps pour se libérer."
          },
          {
            "state": "Perfect",
            "description": "Ambre profond, avec une légère huile de graisse de porc dorée à la surface. Lorsqu'il est réfrigéré, il se met dans une gelée molle. Un goût de fumée, de porc et de douceur.",
            "action": "Utiliser dans les cols, haricots ou verts d'hiver. La viande cueillie dans le jarret est essentielle — remuez-la."
          },
          {
            "state": "Overdone",
            "description": "Broth est très sombre, très salé, presque comme du liquide sec.",
            "action": "Diluer 1:1 avec de l'eau ou du matériel végétal non salé. Goûtez encore avant d'utiliser."
          }
        ]
      },
      "feelCue": "Frottez une goutte de bouillon chaud entre vos doigts — il devrait se sentir légèrement collant et enduit, comme la plus légère prise de colle. Ce corps est le signe de suffisamment de collagène des trotteurs du jarret."
    }
  ]
};
