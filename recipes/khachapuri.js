export default {
  "repoId": "master_georgian_khachapuri_001",
  "parentRepoId": null,
  "slug": "khachapuri",
  "author": "ForkRecipe Kitchen",
  "title": "Adjari Khachapuri",
  "description": "Le pain au fromage en forme de bateau d'Adjara, une pâte à levure pliée dans un récipient ovale et remplie d'un mélange fondu de suluguni et d'imeruli, puis cuite au four jusqu'à ce que la croûte brunisse et qu'un œuf cru et une pat de beurre soient jetés dans le centre bouillonnant à la table.",
  "cuisine": "Géorgien",
  "culture": "Adjarien",
  "category": "breads",
  "tags": [
    "Géorgie",
    "adjaire",
    "pain au fromage",
    "œuf",
    "beurre",
    "pain de bateau",
    "indulgent"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "2 hr 10 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine polyvalente (farine plate)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain (gives croûte plus croustillante)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (35–38°C)",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Lait entier chaud",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "eau (le liquide total reste le même)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof dans l'eau chaude d'abord)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre ou beurre non salé fondu",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Fromage suluguni (ou mozzarella à faible odeur), râpé",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Monterey Jack",
        "jeune provolone"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Imeruli ou fromage feta, émietté",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "ricotta salata ferme",
        "Féta léger"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Œufs — 1 par khachapuri pour le centre, plus 1 pour le lavage des œufs",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Beurre non salé, froid, coupé en petits cubes",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agenouillement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "smooth_dough",
      "instructions": "Mélanger la farine, la levure, le sel et le sucre dans un grand bol et mélanger. Ajouter l'eau chaude, le lait chaud et l'huile. Mélanger jusqu'à ce qu'une pâte chaotique se forme, puis tourner sur une surface légèrement farineuse. Agenouillez fermement pendant 8 à 10 minutes jusqu'à ce que la pâte soit lisse, élastique et ressorte lorsqu'elle est cuite. La pâte de Khachapuri est enrichie et modérément hydratée; elle doit se sentir douce, légèrement collante, mais pas collante, et doit être fine. Former en boule, placer dans un bol légèrement huilé, couvrir d'un chiffon humide ou d'un enveloppement plastique, et laisser à température ambiante pendant 1 heure ou jusqu'à doublé en taille.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et satinée avec une surface légèrement mate — elle tient sa forme ronde, ressort quand elle est pochée et passe l'épreuve de la vitre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore rugueuse et lugubre, les larmes plutôt que les étirements, et a une surface grumelée. C'est agressif.",
            "action": "Continuez à péter. Le développement du gluten nécessite un travail soutenu. Si le collage est sévère, huilez légèrement vos mains plutôt que d'ajouter plus de farine."
          },
          {
            "state": "Perfect",
            "description": "Doux, élastique, légèrement collant mais pas collant. Passe le test de la vitre : une petite pièce étirée mince montre une membrane translucide sans déchirement.",
            "action": "Faire péter, huiler le bol, couvrir et laisser doubler — environ 1 heure à 24°C."
          },
          {
            "state": "Overdone",
            "description": "La toux est très serrée et printanière, en cas d'étirement.",
            "action": "Laissez reposer 15 minutes à découvert. Le gluten surcollé se détend rapidement et s'enroulera bien pour la façonnage."
          }
        ]
      },
      "feelCue": "La pâte bien pétrifiée doit se sentir comme un lobe d'oreille ferme — assez doux pour s'immerger facilement avec un doigt, assez élastique pour repousser lentement. Il devrait laisser vos mains propres après quelques coups."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_08",
        "ing_09"
      ],
      "outputState": "cheese_filling",
      "instructions": "Pendant que la pâte résiste, mélanger les sulfuguni râpés et les imeruli émiettés (ou feta) dans un bol. Mélangez avec vos mains, en brisant les gros fetas afin que les deux fromages soient distribués uniformément. Le remplissage doit ressembler à un mélange lâche de fromage fondant à chaîne et de fromage salé émietté. Bouche : il doit être grasement salé et laiteux. Si vous utilisez du feta à la place d'imeruli, goûtez avant d'ajouter du sel supplémentaire — le feta est souvent plus salé que l'imeruli. Si les fromages sont très secs, remuez 1 à 2 cuillerées à soupe d'eau ou de lait pour les aider à se lier dans un remplissage cohérent une fois fondu.",
      "visualCue": {
        "primaryTarget": "Un tas uniformément mélangé de fromage râpé et émietté — pas de grands blocs d'un seul type, juste un monticule entremêlé, légèrement collant qui sent la laiterie et propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fromages sont dans deux moitiés distinctes non mélangées du bol. De gros morceaux de suluguni ne se sont pas séparés.",
            "action": "Mélanger plus soigneusement avec les doigts, casser les brins de suluguni et écraser le feta pour correspondre à peu près à la taille du fromage râpé."
          },
          {
            "state": "Perfect",
            "description": "Combiné uniformément, lâche et légèrement collant au toucher. Sens agréablement laiteux et salé.",
            "action": "Gardez à température ambiante jusqu'à ce qu'il soit prêt à être rempli — le fromage ferme et froid est plus difficile à étaler dans les bateaux à pâte."
          },
          {
            "state": "Overdone",
            "description": "Les fromages ont été pressés ensemble dans une pâte dense et compacte.",
            "action": "Découpez-le avec vos doigts. Le fromage compacté fond inégalement et peut se mettre en piscine au centre plutôt que de remplir le bateau."
          }
        ]
      },
      "feelCue": "Pressez une petite poignée du mélange de fromage : il doit s'agglutiner légèrement sous pression mais s'effondrer à nouveau lorsque vous ouvrez la main, et non pas la roche solide et non poudreuse."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "smooth_dough",
        "cheese_filling"
      ],
      "outputState": "shaped_khachapuri_boats",
      "instructions": "Préchauffer le four à 230°C (450°F) avec une plaque de cuisson lourde ou de la pierre de cuisson à l'intérieur. Descendez la pâte éprouvée et divisez en deux morceaux égaux. Sur une surface légèrement farinée, rouler chaque pièce dans un ovale d'environ 30 cm x 18 cm. Étaler la moitié du remplissage du fromage sur le centre de chaque ovale, laissant une bordure de 4 cm autour du bord. Rouler les longues faces de chaque ovale étroitement vers l'intérieur sur le fromage, créant deux murs surélevés. Pincer et tordre fermement chaque extrémité courte en un point pour former la proue et la poupe du bateau — les extrémités pincées maintiennent les murs ensemble pendant la cuisson. Le bateau devrait tenir sa forme lorsqu'il est levé. Le fromage sera presque entièrement fermé, en regardant à travers un écart étroit au centre supérieur.",
      "visualCue": {
        "primaryTarget": "Deux embarcations de pâte ovales avec des pointes montantes et tordues et une bande de fromage visible à travers le centre - les murs de pâte doivent se tenir debout et tenir leur forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les extrémités ne sont pas bien pincées — elles s'ouvrent et le fromage s'échappe sur les côtés.",
            "action": "Pinch et re-twist les extrémités fermement. Utilisez des doigts mouillés pour sceller — l'humidité aide la pâte à se coller."
          },
          {
            "state": "Perfect",
            "description": "Bateaux droits et ovales aux extrémités droites et pointues tordues. Les murs ont une hauteur de 3 à 4 cm. Le fromage est visible comme un remplissage neigeux à travers le centre supérieur.",
            "action": "Transférer sur une feuille de parchemin sur une pelure ou une plaque de cuisson plate. Badigeonner les parois de pâte avec le lavage des œufs et les charger immédiatement dans le four."
          },
          {
            "state": "Overdone",
            "description": "Les parois sont trop fines et le fromage trop exposé — le remplissage peut s'écouler sur les côtés pendant la cuisson.",
            "action": "Placer les taches fines en appuyant sur un morceau de pâte déchirée contre la paroi mince, en pinçant pour sceller."
          }
        ]
      },
      "feelCue": "Soulevez un bateau en forme dans les deux mains et jetez-le doucement : les murs doivent tenir leur forme avec seulement un léger frottement, et le fromage ne doit pas se déplacer ou verser. Si le bateau s'effondre, la pâte a besoin de 10 minutes de plus de repos du banc avant de façonner."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "shaped_khachapuri_boats",
        "ing_10"
      ],
      "outputState": "baked_khachapuri",
      "instructions": "Faites glisser le parchemin avec les bateaux en forme sur la plaque de cuisson préchauffée dans le four. Cuire au four à 230°C (450°F) pendant 12-15 minutes jusqu'à ce que les parois de la pâte soient profondément dorées avec quelques taches carbonisées aux bords et que le fromage soit bouillonnant et goeey sur le dessus. Retirer du four. Travailler rapidement, utiliser une cuillère pour presser doucement un petit puits au centre du fromage bouillonnant dans chaque bateau. Casser un œuf soigneusement dans chaque puits — le jaune doit s'asseoir visiblement, le blanc se répand légèrement dans le fromage fondu. Retourner au four pendant exactement 3 minutes : le blanc doit juste être réglé aux bords tandis que le jaune reste complètement liquide et liquide. Retirer et ajouter immédiatement des cubes de beurre froid sur le fromage chaud.",
      "visualCue": {
        "primaryTarget": "Un bateau à pâte dorée aux bouts carbonisés, au bouillon et au fromage brun, et un jaune d'œuf cru assis dans une piscine de blanc doux — le beurre commence à peine à fondre dans le bord du fromage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les murs sont encore pâles et doux. Le fromage n'a pas encore fondu dans une piscine en fusion mais est toujours un monticule distinct.",
            "action": "Continuer la cuisson 3 à 5 minutes de plus. La pâte cuite sera gommée à l'intérieur des murs."
          },
          {
            "state": "Perfect",
            "description": "Murs dorés profonds avec ombrage attrayant aux extrémités pointues. Fromage bouillonnant et fondu. Jaune d'œuf un dôme vif et brillant, en blanc crémeux. Le beurre fond.",
            "action": "Allez à la table. Khachapuri n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Le jaune d'oeuf est solide ou le fromage est doré à un film foncé, sec et cuireux.",
            "action": "Placez la jeune solide de côté pour vous et faites cuire un remplacement pour la table si le temps le permet. L'œuf surcuit rend le plat tout entier moins dramatique — le jaune roux est le rituel."
          }
        ]
      },
      "feelCue": "Débarrassez le bord du pain chaud et faites-le glisser à travers le fromage fondu, l'œuf cru et le mélange de beurre au centre. Le pain devrait avoir une légère mâche et du crackle de la croûte du four, et le remplissage devrait l'enrober d'une lécher riche, brillante, intensément salée."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "baked_khachapuri",
        "ing_11"
      ],
      "outputState": "finished_khachapuri",
      "instructions": "À table, remuer le jaune d'œuf et fondre vigoureusement le beurre dans le centre du fromage fondu, en tourbillonnant avec une fourchette jusqu'à ce que tout soit incorporé dans une sauce riche, brillante et brouillée. Morceaux de la croûte et trempez et faites-les glisser dans le mélange de fromage — c'est le seul moyen de manger le khachapuri adjarien. Le pain extérieur agit comme une cuillère comestible. Mangez immédiatement pendant que le fromage coule encore. Pas de couverts requis.",
      "visualCue": {
        "primaryTarget": "Une piscine fondue et brillante de fromage mélangé, de beurre et d'œuf — une lave jaune doré pâle qui s'écoule pour remplir le bateau bord à bord lorsque le bateau est incliné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre et œuf non encore incorporés — ils sont assis séparément sur le dessus du fromage. Le mélange central n'est pas encore homogène.",
            "action": "Mélanger plus vigoureusement à la table. La chaleur du fromage suffit pour donner à l'œuf une consistance fluide, semblable à de la crème, s'il est immédiatement agité."
          },
          {
            "state": "Perfect",
            "description": "Une piscine soyeuse, brillante, dorée de fromage-œuf-beurre qui court et des piscines comme de la crème épaisse quand le bateau bascule. Des odeurs de pain grillé, de lait chaud et de beurre.",
            "action": "La déchirure et la trempette. Il n'y a rien d'autre à faire."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est refroidi et est placé dans une couche caoutchouteuse et dense qui ne coule plus.",
            "action": "Retourner le bateau à un four à 180°C pendant 3 minutes pour refondre le centre. Le pain peut perdre un peu de croustillant, mais le fromage coule à nouveau."
          }
        ]
      },
      "feelCue": "Faites glisser un morceau déchiré de la croûte de la bordure à travers le centre: la sauce au fromage doit enrober complètement le pain et s'accrocher dans une couche épaisse et brillante — pas aqueuse, pas solide. Le pain doit donner une légère résistance, puis donner avec une douceur satisfaisante de la vapeur de remplissage."
    }
  ]
};
