export default {
  "repoId": "master_german_pretzel_rolls_001",
  "parentRepoId": null,
  "slug": "pretzel-rolls",
  "author": "ForkRecipe Kitchen",
  "title": "Rouleaux de bretzel",
  "description": "Laugenbrötchen allemande — des rouleaux denses, acajou-dark submergés dans un bain de soude cuite qui transforme l'amidon extérieur en un crackle-crisp, coquillage amèrement savore sur un intérieur croustillant, oreiller, fini avec du sel bretzel grossier qui brille sous la lumière de la cuisine.",
  "cuisine": "Allemand",
  "culture": "Bavière",
  "category": "breads",
  "tags": [
    "bretzel",
    "allemand",
    "rouleaux",
    "Lys",
    "Bicarbonate de soude",
    "savoureux",
    "pain"
  ],
  "difficulty": 3,
  "activeTime": "1 hour",
  "totalTime": "3 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 5,
    "sour": 1,
    "bitter": 2,
    "umami": 2,
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
        "farine tout usage (légèrement moins de mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Lait entier chaud (38 C)",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": [
        "eau (minces miettes tendres)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "saindoux (plus traditionnel)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Cuisson de soude (pour le bain de soude)",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": [
        "Lycée alimentaire solution de 3% (vraie Laugangebäck, utilisation avec une extrême prudence)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Eau (pour le bain de soude cuit)",
      "ratioValue": 500,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Sel de bretzel grossier (ou sel de mer flocé)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Sel de maldon",
        "Sel casher grossier"
      ]
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
        "ing_05"
      ],
      "outputState": "pretzel_dough",
      "instructions": "Mélanger la farine, la levure et le sel dans un grand bol, puis ajouter le lait chaud. Mélanger jusqu'à ce qu'une pâte brute se forme, puis ajouter le beurre ramolli en morceaux. Agenouillez à la main pendant 10 minutes ou dans un mélangeur de support avec le crochet de pâte à vitesse moyenne pendant 7 minutes jusqu'à ce que la pâte soit lisse, élastique et légèrement collante. La pâte de bretzel est intentionnellement plus rigide qu'une pâte à pain typique — l'hydratation inférieure est ce qui permet aux rouleaux de tenir leur forme pendant le bain de sourcils et de développer cette miettes denses et mâcheuses distinctives. La pâte doit passer l'essai de vitre : étirer une petite pièce mince et être presque translucide sans déchirer.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et élastique qui tient sa forme sur le comptoir. Un peu plus rigide que la pâte à pain sandwich. La surface est brillante et tendue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rugueux et légèrement ravagé. Des larmes quand on les tire. Il n'a pas de forme ronde.",
            "action": "Agenouillez encore 2 à 3 minutes — le gluten a besoin de plus de développement pour que les rouleaux tiennent leur forme dans le bain."
          },
          {
            "state": "Perfect",
            "description": "La fenêtre passe. Doux, élastique, légèrement collant. Remonte dans les 2 secondes quand on pique. La surface est presque brillante.",
            "action": "Tourner dans une boule et placer dans un bol huilé au ferment en vrac."
          },
          {
            "state": "Overdone",
            "description": "Très raide et serrée, se battant quand elle s'est pétrie. Ça rentre immédiatement.",
            "action": "Couvrir et reposer 15 minutes. Le gluten sur-développé a besoin de temps pour se détendre."
          }
        ]
      },
      "feelCue": "La pâte de bretzel doit se sentir comme une poignée de main ferme — pas aussi douce que la brioche, pas aussi raide que la pâte à pizza, mais quelque part avec confiance entre les deux. Tirez une pièce : elle doit s'étirer sans effort dans un long ruban avant de déchirer."
    },
    {
      "nodeId": "step_2",
      "action": "Preuve",
      "inputs": [
        "pretzel_dough"
      ],
      "outputState": "risen_pretzel_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, couvrir d'enveloppe en plastique, et la laisser monter à température ambiante pendant 1 à 1,5 heures jusqu'à 50% de plus (pas doublé – la pâte de bretzel est maintenue relativement sous-fermentée par conception). Cette fermentation contrôlée maintient la miette dense et mâcheuse plutôt qu'aérée. Pendant ce temps, préparez le bain de soda cuit au four : étalez le bicarbonate de soda sur une plaque d'aluminium et faites cuire à 250 °C (480 °F) pendant 1 heure jusqu'à ce qu'il passe de la poudre blanche à une croûte jaunâtre. Le bicarbonate de soude est significativement plus alcalin que le bicarbonate de soude ordinaire et donne un résultat beaucoup plus proche d'un vrai bain de soude.",
      "visualCue": {
        "primaryTarget": "Dough a augmenté d'environ 50% et se sent plus léger. La surface est bombée et lisse. Pas doublé — délibérément sous-estimé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dough semble et se sent identique à quand il est entré. Aucune croissance visible. Ferme et dense.",
            "action": "Déplacez-vous dans un endroit plus chaud et attendez. La pâte sous-fermentée produit des rouleaux trop denses pour en profiter."
          },
          {
            "state": "Perfect",
            "description": "50% de plus, se sent légèrement plus léger et plus aéré. Un poke laisse un tiret paresseux.",
            "action": "Divisez et formez en rouleaux pendant que le four chauffe et que le bain de lys est préparé."
          },
          {
            "state": "Overdone",
            "description": "Double ou plus. Ça sent fortement la levure. Très doux et rempli de gaz.",
            "action": "Continuez vite. Les petits pains de bretzel surfermentés seront plus doux et plus painés, toujours délicieux, mais moins croustillants."
          }
        ]
      },
      "feelCue": "La pâte de bretzel bien fermentée se sent encore relativement dense et ferme par rapport à un pain sandwich au même stade — c'est exact. Ça devrait être une boule de stress, pas un oreiller."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "risen_pretzel_dough"
      ],
      "outputState": "shaped_rolls",
      "instructions": "Divisez la pâte en 8 morceaux égaux (environ 80 à 100 g chacun pour un lot typique de 500 g de farine). Pour former un rouleau rond : aplatissez chaque pièce dans un disque, repliez les bords vers le centre tout autour, puis retournez-le et roulez-le sous votre paume en coupe sur le comptoir avec une pression ferme vers le bas, se déplaçant en cercles serrés. Le but est une balle tendue et lisse avec une couture scellée sur le fond. Ou encore, marquer une croix profonde sur le dessus avec un couteau tranchant ou boiteux après la façonnage, ce qui donne le look classique de Laugenbrötchen. Placez les rouleaux en forme sur une feuille doublée de parchemin et réfrigérez à découvert pendant 30 minutes — les rouleaux froids tiennent mieux leur forme pendant le bain de lys.",
      "visualCue": {
        "primaryTarget": "Des sphères serrées et lisses avec une couture scellée sur le fond. Pas de larmes ou de pâte. Les rouleaux réfrigérés sont fermes et tiennent leur forme lorsqu'ils sont ramassés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des boules molles avec des coutures visibles et des larmes à la surface. Ils saignent et s'aplatissent sur le drap.",
            "action": "Reformer chacun — aplatir, plier et rerouler avec plus de pression vers le bas pour renforcer la tension."
          },
          {
            "state": "Perfect",
            "description": "Des balles fermes et tendues qui tiennent leur forme ronde sur le plateau. La couture est invisible ou hermétique.",
            "action": "Réfrigérer 30 minutes avant le bain de lys."
          },
          {
            "state": "Overdone",
            "description": "Les rouleaux en forme sont chauds et déjà à l'épreuve rapide — la surface semble gonflée et douce.",
            "action": "Mettez-les dans le réfrigérateur immédiatement pour les raffermir avant le bain de lys."
          }
        ]
      },
      "feelCue": "Un rouleau de bretzel bien en forme devrait se sentir solide et tendu lorsqu'il est pressé à la légère — pas printanier et gonflé, pas dur, mais comme une boule de neige bien emballée qui tient sa forme."
    },
    {
      "nodeId": "step_4",
      "action": "Faire bouillir dans le bain de lys",
      "inputs": [
        "shaped_rolls",
        "ing_06",
        "ing_07"
      ],
      "outputState": "lye_bathed_rolls",
      "instructions": "Dissoudre le bicarbonate de soude cuit dans 1 litre d'eau dans un grand pot non réactif (acier inoxydable ou émaillé — pas d'aluminium nu). Portez à un doux mijot. Porter des gants en caoutchouc (la solution de soude cuite est encore caustique à la peau), abaisser les rouleaux froids dans le bain mijotant un ou deux à la fois. Laisser mijoter 20 à 30 secondes de chaque côté, tourner une fois. La surface devient légèrement bronzante, caoutchouteuse et serrée. Soulevez avec une cuillère à fente ou une araignée et placez-la sur une plaque de cuisson parcheminée. Dispersez immédiatement du sel grossier sur le dessus pendant que la surface est piquante.",
      "visualCue": {
        "primaryTarget": "Chaque rouleau sort du bain avec une peau serrée, légèrement bronzée et caoutchouteuse qui capture immédiatement le sel grossier et la retient.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours pâle et pâteux après 15 secondes dans le bain. La surface n'a pas resserré.",
            "action": "Laisser dans le bain 30 secondes par côté — la réaction alcaline prend du temps pour gélatiniser l'amidon extérieur."
          },
          {
            "state": "Perfect",
            "description": "Légèrement bronzé, tendu, caoutchouteux — ressemble à une peau chamois humide. Des bâtons de sel immédiatement. Tournera l'acajou au four.",
            "action": "Saler immédiatement et charger dans un four de 220 C (425 F)."
          },
          {
            "state": "Overdone",
            "description": "Plus de 60 secondes dans le bain — la surface commence à se dissoudre et devient visqueuse ou fissurée.",
            "action": "Cuire quand même et marquer profondément avant de cuire pour laisser échapper la vapeur. La saveur sera fine; la croûte peut être irrégulière."
          }
        ]
      },
      "feelCue": "À l'état frais, la surface de chaque rouleau se sent caoutchouteuse et légèrement visqueuse sous un doigt ganté — que l'amidon externe gélatinisé est le précurseur direct de la coque de bretzel d'acajou de crackle-crisp dans le four."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "lye_bathed_rolls",
        "ing_08"
      ],
      "outputState": "finished_pretzel_rolls",
      "instructions": "Cuire sur le support du milieu supérieur à 220 °C (425 °F) sans vapeur pendant 18 à 22 minutes jusqu'à ce qu'il y ait un brun acajou profondément, uniformément foncé, beaucoup plus foncé que vous ne le feriez jamais. La réaction de la lysse produit la couleur foncée caractéristique et la saveur amère-savori tandis que la caramélisation extérieure gélatinisée est agressive. Le sel grossier doit être légèrement grillé mais intact. Laisser refroidir les rouleaux sur un rack pendant au moins 15 minutes avant de manger — la miette intérieure a besoin de temps pour se raffermir et la croûte pour craquer complètement pendant qu'elle refroidit.",
      "visualCue": {
        "primaryTarget": "Deep acajou-brun partout — pas doré, pas bronzé, mais vraiment sombre. Des reflets de sel grossiers. La surface est dure et crépitante. Les partitions ou partitions naturelles montrent une miette pâle intérieure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couleur dorée. La croûte est douce et l'amertume caractéristique du bretzel est absente. Ça ne ressemble pas à un bretzel.",
            "action": "Retourner au four pendant 3-5 minutes. Les rouleaux de bretzel doivent être cuits beaucoup plus foncés que le pain normal — vous cherchez l'acajou, pas l'or."
          },
          {
            "state": "Perfect",
            "description": "Une acajou uniformément foncée avec une croûte dure à craqueler qui donne un clic aigu quand tapoté. La cuisine sent le malt grillé et l'amidon caramélisé. Le sel grossier grillé doré.",
            "action": "Laisser refroidir 15 minutes. La miette sera dense et mâcheuse sous la coque fragile."
          },
          {
            "state": "Overdone",
            "description": "Brun noir ou très foncé avec une odeur brûlée et dure. Le sel peut être carbonisé.",
            "action": "La couche externe peut être jetable; vérifier l'intérieur. Si la miette est bonne, retirer les morceaux les plus sombres de croûte."
          }
        ]
      },
      "feelCue": "Tapez sur le fond d'un rouleau de bretzel : il devrait sonner comme taper une pierre dure, pas un tambour creux. La croûte est sa propre couche — dense et rigide — et quand vous déchirez le rouleau ouvert, il doit résister et ensuite se casser au lieu de se séparer."
    }
  ]
};
