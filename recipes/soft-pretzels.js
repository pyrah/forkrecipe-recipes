export default {
  "repoId": "master_german_soft-pretzels_001",
  "parentRepoId": null,
  "slug": "soft-pretzels",
  "author": "ForkRecipe Kitchen",
  "title": "Pretzels doux bavarois",
  "description": "Une corde tordue de pâte maigre baignée en solution de lysse se jette dans une croûte d'acajou avec un tang profond, alcalin, une miette de croûte, et une chute de neige de sel grossier qui craque entre vos dents comme du gravier comestible. C'est le pain d'Oktoberfest et toutes les bières bavaroises qui en valent la peine.",
  "cuisine": "Allemand",
  "culture": "Salle bavaroise de bière",
  "category": "breads",
  "tags": [
    "allemand",
    "bretzel",
    "pain",
    "Lys",
    "d'une bière",
    "bavarois",
    "cuits",
    "sel"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 5,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (12–13% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine tout usage (légèrement moins de mâcher)",
        "tipo 0 (croûte plus molle)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (32–35 C)",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre (légèrement moins de saveur)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof d'abord dans l'eau chaude)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (ou sucre brun)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "sucre brun",
        "mélasse (petite quantité)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Lys d'hydroxyde de sodium de qualité alimentaire (3 à 4 % de solution dans l'eau froide — utiliser des gants)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "solution de bicarbonate de soude (10% — plus doux, moins authentique Maillard)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Sel de bretzel (grains, laugenbrezel extra-blanc)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Sel maldoneux",
        "Sel casher grossier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "shaggy_pretzel_dough",
      "instructions": "Mélanger la farine, le sel et la levure dans le bol d'un mélangeur de stand (ou d'un grand mélangeur). Dans un récipient séparé, dissoudre le sirop de malt dans l'eau chaude, puis ajouter le beurre ramolli en petits morceaux. Verser le liquide dans les ingrédients secs et mélanger à basse vitesse avec un crochet de pâte pendant 2 minutes jusqu'à ce que la masse chaotique se combine. La pâte doit être nettement plus rigide qu'une pâte à pain ou à focaccia — c'est intentionnel. Une pâte rigide tient la forme du bretzel.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte dure et raide qui nettoie les côtés du bol et n'est pas collante au toucher. Pas de farine sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche au fond du bol. La pâte est en fragments plutôt qu'une boule cohésive.",
            "action": "Ajouter le reste de l'eau par la cuillère à café et continuer à mélanger jusqu'à ce qu'une masse uniforme shaggy forme."
          },
          {
            "state": "Perfect",
            "description": "Une boule raide et lisse qui nettoie les côtés du bol mais laisse de légers résidus sur le fond. Il se sent plus dense et plus sec qu'une pâte à pain typique.",
            "action": "Augmenter à vitesse moyenne et pétrir."
          },
          {
            "state": "Overdone",
            "description": "La toux est très molle et collante — trop de liquide a été ajouté.",
            "action": "Ajouter la farine par la cuillère à soupe, mélanger après chaque addition, jusqu'à ce que la pâte se raidisse et nettoie les côtés du bol."
          }
        ]
      },
      "feelCue": "La pâte de bretzel doit se sentir comme de l'argile rigide — ferme et à peine filante lorsque vous pressez un pouce dans, pas doux et oreiller comme un pain à haute hydratation. Si c'est comme de la pâte à pain, elle est trop humide."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "shaggy_pretzel_dough"
      ],
      "outputState": "developed_pretzel_dough",
      "instructions": "Agenouillez à vitesse moyenne de 8 à 10 minutes (ou de 12 à 15 minutes à la main) jusqu'à ce que la pâte soit lisse, légèrement collante mais non collante, et passez l'épreuve de la vitre : une petite pièce étirée entre deux pouces et des index doit s'étirer sur une membrane translucide sans déchirer. Le développement du gluten est essentiel — des larmes de pâte de bretzel sous-développées pendant la formation. Former en boule, couvrir d'un chiffon humide, et laisser reposer à température ambiante pendant 1 heure jusqu'à doubler.",
      "visualCue": {
        "primaryTarget": "Surface lisse, légèrement brillante avec une faible élasticité. La pâte ressort rapidement lorsqu'elle est cuite mais ne résiste pas à l'étirement violent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface de la toux est rugueuse et légèrement raclée. La vitre teste les larmes immédiatement sans étirement.",
            "action": "Agenouillez encore 3 à 4 minutes et revérifiez. Le gluten a besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse et soyeuse. La vitre s'étend mince et translucide sans déchirer. Les ressorts sont en marche.",
            "action": "Tourner dans une balle, couvrir, et la preuve 1 heure."
          },
          {
            "state": "Overdone",
            "description": "La toux est serrée et chaude à cause de la sur-mélange. Il résiste à la formation et aux larmes lorsqu'il est étiré.",
            "action": "Couvrir et reposer 30 minutes pour détendre le gluten avant de façonner."
          }
        ]
      },
      "feelCue": "Une pâte de bretzel bien développée se sent comme du cuir lisse, ferme mais souple, avec une élasticité silencieuse lorsque vous appuyez et relâchez. Aucune adhérence ne devrait être transférée à votre paume."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "developed_pretzel_dough"
      ],
      "outputState": "shaped_pretzels",
      "instructions": "Divisez la pâte reposée en 8 morceaux égaux (environ 100 g chacun pour les bretzels standard). Rouler chaque pièce dans une corde de 60 à 70 cm de long, en gardant le centre plus épais (environ 3 cm de diamètre) et en scintillant jusqu'aux extrémités minces (5 à 7 mm). Pour former le bretzel: faire un U-forme avec la corde, traverser les deux extrémités deux fois (une double torsion), puis plier les extrémités tordues vers le bas et les appuyer fermement sur la partie moyenne grasse aux positions 4 et 8 heures. Pressez fermement — le sceau doit être maintenu à travers l'ébullition et la cuisson. Mettre sur des plaques de cuisson parcheminées et réfrigérer à découvert pendant 30 minutes pour se raffermir avant de tremper.",
      "visualCue": {
        "primaryTarget": "Forme classique de bretzel avec un ventre gros, arrondi, centre double-tourbé, et deux bras scellés. Les articulations où les extrémités pressent sur le ventre sont fermement respectées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les extrémités n'ont pas été serrées fermement — les bras se lèvent déjà du ventre. La corde est d'épaisseur inégale.",
            "action": "Appuyez plus fermement sur les articulations avec les doigts mouillés. Reroulez toute corde trop épaisse (le centre doit être plus gras)."
          },
          {
            "state": "Perfect",
            "description": "Nettoyez la silhouette du bretzel. Belly est plombé, bras tapant gracieusement, les articulations sont rincées et scellées. Les bretzels tiennent leur forme lorsqu'ils sont levés.",
            "action": "Réfrigérer 30 min, puis tremper dans la solution de lys et cuire."
          },
          {
            "state": "Overdone",
            "description": "La touffe a été surmenée pendant la formation — la surface s'est déchirée et les articulations sont arrachées.",
            "action": "Reformer et sceller en douceur ; le bain de lys aidera à unifier la surface pendant la cuisson."
          }
        ]
      },
      "feelCue": "Lors de la façonnage de la pâte doit se sentir élastique et coopérative — il va essayer de ressort arrière, mais si vous travaillez patiemment, rouler du centre vers l'extérieur, il s'allongera progressivement. Ne le forcez jamais; laissez reposer 2 minutes s'il résiste au roulement."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "shaped_pretzels",
        "ing_07"
      ],
      "outputState": "dipped_pretzels",
      "instructions": "SÉCURITÉ: Portez des gants en caoutchouc et une protection oculaire. Préparer une solution de lyes de 3 à 4 % en ajoutant de l'hydroxyde de sodium à l'eau froide (jamais l'inverse – toujours ajouter de la lyre à l'eau). Travaillant avec une solution de lysse froide, submerger brièvement chaque bretzel pendant 20 à 30 secondes de chaque côté, puis transférer immédiatement sur une surface de lysse (non réactive) ou directement sur des plateaux de cuisson parcheminés. Alternativement, utiliser une solution de bicarbonate de soude (huile 1 L d'eau avec 60 g de bicarbonate de soude) pour une croûte plus sûre mais moins spectaculaire. Noter le ventre gras avec un couteau tranchant ou boiteux dans une seule coupe confiante. Saupoudrer de sel de bretzel immédiatement.",
      "visualCue": {
        "primaryTarget": "Les bretzels ont pris une apparence beige-jaune, légèrement lissée, mate, après la trempe des lies. La coupe est propre et tient ouverte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pretzel est entré et sorti trop rapidement — moins de 10 secondes de chaque côté. Vont brunir inégalement et la surface sera pâle et miettes plutôt que croquante.",
            "action": "Plongez pendant 20 à 30 secondes de chaque côté. La réaction de la lysse nécessite un temps de contact."
          },
          {
            "state": "Perfect",
            "description": "Même un revêtement jaune mat sur toute la surface. Pretzel se sent très légèrement glissant. La coupe de score s'ouvre proprement.",
            "action": "Saler immédiatement et cuire à 220 °C (425 °F)."
          },
          {
            "state": "Overdone",
            "description": "Pretzel trempé trop longtemps et la surface commence à s'assouplir et à se déformer dans la solution de lysse.",
            "action": "Supprimer immédiatement. La croûte peut cuire inégalement, mais elle sera encore comestible. Réduire le temps de trempe pour les bretzels suivants."
          }
        ]
      },
      "feelCue": "Le bretzel trempé dans la lysse se sentira légèrement lissé et légèrement savonné sous les doigts gantés — que le revêtement alcalin est ce dont la réaction Maillard a besoin pour créer la croûte sombre et crépitante. La surface ne doit pas se sentir mouillée ou dégoulinante, simplement revêtue."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "dipped_pretzels",
        "ing_08"
      ],
      "outputState": "finished_soft_pretzels",
      "instructions": "Cuire à 220 °C (425 °F) sur la grille centrale pendant 16 à 20 minutes jusqu'à ce que le ventre soit profondément acajou et que la section tordue s'obscurcisse davantage jusqu'à presque noir. La croûte doit sonner creuse lorsqu'elle est tapée. Le sel de bretzel aura fusionné légèrement dans la surface. Retirer et refroidir sur une grille pendant au moins 5 minutes. Les bretzels bavarois sont mieux mangés dans les 2 heures qui suivent la cuisson, la croûte s'assouplit à mesure qu'elle refroidit et devient cuireuse le lendemain.",
      "visualCue": {
        "primaryTarget": "Deep acajou ombrage du ventre presque noir à la section plus mince tordue. Le score est ouvert et cuit dans un intérieur crème pâle. Les grains de sel grossiers sont fusionnés dans la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pretzel est un brun pâle uniforme. Le score intérieur n'a pas ouvert de façon spectaculaire. Le fond a l'air collant.",
            "action": "Retour pour 4-5 minutes de plus. La couleur foncée est essentielle pour la saveur correcte et croquant."
          },
          {
            "state": "Perfect",
            "description": "L'acajou foncé avec une surface en reflets de miroir. Le ventre marqué a éclaté ouvert révélant l'intérieur de la crème pâle. Le tapotage du fond donne une fissure creuse. La cuisine sent le pain rôti et le caramel alcalin.",
            "action": "Laisser refroidir sur un rack et servir avec la moutarde ou Obatzda."
          },
          {
            "state": "Overdone",
            "description": "Le bretzel entier est très brun foncé à noir, odeur amère de sougars brûlés. La croûte est fragile plutôt que crépitante.",
            "action": "Trim les pièces les plus sombres avec des cisailles de cuisine. La miette intérieure est probablement encore bonne. Réduire la température du four de 10 degrés pour les lots suivants."
          }
        ]
      },
      "feelCue": "Un bretzel bavarois parfait se sent léger pour sa taille lorsqu'il est soulevé, avec une croûte cassante et crépitante qui donne une résistance satisfaisante avant que vos dents se brisent à l'intérieur de la croûte dense et mâcheuse. Tapez sur le ventre — il sonne légèrement creux, comme une planche de bois épaisse."
    }
  ]
};
