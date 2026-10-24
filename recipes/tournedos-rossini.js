export default {
  "repoId": "master_french_tournedos_rossini_001",
  "parentRepoId": null,
  "slug": "tournedos-rossini",
  "author": "ForkRecipe Kitchen",
  "title": "Tournedos Rossini",
  "description": "Le compositeur porte le nom d'extravagance — un filet mignon épais cousu au cœur rosé, sur un crouton au beurre et couronné d'une dalle de foie gras mariné, l'ensemble doré à la truffe noire rasée et une demi-glace de Madère brillante qui tire chaque luxe en une seule bouchée.",
  "cuisine": "Français",
  "culture": "Haute Cuisine parisienne",
  "category": "proteins",
  "tags": [
    "français",
    "boeuf",
    "fichier",
    "foie gras",
    "truffe",
    "madeira",
    "haute-cuisine",
    "pan-sauce"
  ],
  "difficulty": 4,
  "activeTime": "40 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet mignon (deux tournedos de 4 cm d'épaisseur, ~180 g chacun, attaché)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "filet de viande bovine coupe centrale"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Foie gras (deux tranches d'environ 60 g, épaisseur 1,5 cm, bien réfrigéré)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "foie de canard marin",
        "lait de poule (hors chauffage)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Pain blanc (deux rondelles sans croûte coupées à la largeur du filet)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "brioche",
        "pays sourd"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre clarifié (pour le crouton et la couture)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee",
        "huile neutre + beurre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Madère sèche (Sercial ou Verdelho)",
      "ratioValue": 22,
      "defaultUnit": "parts",
      "substitutions": [
        "Marsala sec",
        "amontillado sherry"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Démi-glaces de veau (ou stock de veau brun riche, réduit)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "demi-glaces de boeuf",
        "blanc concentré"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Échalote (finement hachée)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote de bananes"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Truffe noire (fraîche, moitié rasée / moitié hachée en sauce)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "truffes d'hiver conservées + truffes jus"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Beurre froid non salé (pour monter la sauce)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Fleur de sel & poivre noir fraichement craqué",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de mer"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fry",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "fried_croutons",
      "instructions": "Couper le pain en rondelles de la largeur exacte des tournedos, de sorte que la viande s'assoie. Chauffer le beurre dans une poêle à feu moyen et faire frire les ronds, en tournant une fois, jusqu'à ce qu'il soit uniformément doré et croustillant sur les deux faces, mais toujours tendre au centre, 1-2 minutes de côté. Égoutter sur du papier et garder au chaud — ces piédestaux croustillants lèvent la viande de ses jus de sorte que le fond ne sème jamais.",
      "visualCue": {
        "primaryTarget": "Chaque crouton est un biscuit-or uniforme sur toute la face, croquant au bord, sans taches brutes pâles et sans anneaux foncés brûlés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain est pâle et encore doux, absorbant le beurre sans coloration; la surface donne comme un toast frais.",
            "action": "Retournez dans la poêle et continuez à frire — il faut de la couleur pour rester croquant sous la viande et la sauce."
          },
          {
            "state": "Perfect",
            "description": "Un brun doré uniforme, audiquement croustillant lorsqu'il est tapé, tenant sa forme mais pas dur comme un craquelin.",
            "action": "Égoutter et réserver au chaud; essuyer la poêle pour saisir le boeuf."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé à noir et la miette a un goût brûlé et amer; le beurre dans la poêle fume.",
            "action": "Jeter les rondelles brûlées et commencer à l'état frais avec du beurre frais — les croûtons amers vont taper toute l'assiette."
          }
        ]
      },
      "feelCue": "Le pain doit tordre doucement et sentir la lumière quand vous le soulevez. Tapez un crouton fini avec votre ongles — un clic croustillant signifie qu'il tiendra sous le foie gras et la sauce."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "fried_croutons",
        "ing_01",
        "ing_04",
        "ing_10"
      ],
      "outputState": "rested_filet",
      "instructions": "Saupoudrer le tournedos d'os et bien assaisonner de sel et de poivre. Dans une poêle lourde, faire chauffer un film de beurre clarifié jusqu'à ce qu'il mijote. Semer les filets sans gêner jusqu'à ce qu'une croûte profonde se forme, environ 3 minutes, puis tourner et saisir le deuxième visage, en basting, à un rose moyen-rare (52°C / 125°F interne), 3-4 minutes de plus. Transférer dans une assiette, la tente lâchement et se reposer pendant que vous construisez la sauce dans la même casserole. Laissez le fond derrière.",
      "visualCue": {
        "primaryTarget": "Une croûte acajou foncée et même acajoue sur les deux faces; pressée au centre, la viande se sent printanière avec une douceur de donner, et les jus coulent à l'étroit, pas rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est gris-brun et patchy sans véritable croûte; le centre se sent doux et lâche et se lit en dessous de 48°C.",
            "action": "Augmenter la chaleur et garder l'encroûtement pour la croûte, ou revenir brièvement à la finition — mais tirer avant le centre se resserre au-delà de moyenne-rare."
          },
          {
            "state": "Perfect",
            "description": "Crisp croûte brûlée partout, un centre printanier donnant au toucher, une température interne de 50-52°C portant à un rose moyen-rare au repos.",
            "action": "Reposez les filets et commencez la sauce Madeira dans le fond rendu."
          },
          {
            "state": "Overdone",
            "description": "La viande se sent ferme et résistante lorsqu'elle est pressée, les jus sont limpides sans rose, la température interne passe à 60°C.",
            "action": "Accepter comme moyen et servir rapidement avec de la sauce supplémentaire pour le garder humide — il ne peut pas être défait."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre avec un bout de doigt : les rares moyens ressemblent à la base charnue de votre pouce lorsque le pouce et le doigt du milieu se touchent. Retenez le reste ; le repos permet aux jus de s'installer pour ne pas inonder le crouton."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "rested_filet",
        "ing_02",
        "ing_10"
      ],
      "outputState": "seared_foie",
      "instructions": "Faire le point sur les tranches de foie gras réfrigérées légèrement dans un croisement et assaisonner de sel et de poivre. Essuyer la poêle de tous, sauf un murmure de graisse et mettre à feu moyen-élevé. Entrer le foie directement du réfrigérateur, 45-60 secondes de chaque côté, jusqu'à ce qu'une croûte de caramel se forme, mais le centre reste juste et fondant. Éloignez-le dès qu'il en donne — le foie gras ne rend rien s'il s'attarde. Verser la graisse fondue, la réserver et garder la poêle pour la sauce.",
      "visualCue": {
        "primaryTarget": "Une croûte brun caramel brillant sur chaque visage, la tranche encore plombée et tenant sa forme, son centre doux et à peine chaud à travers — ne s'écroulant pas dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est gris pâle sans couture; la tranche est froide et ferme au centre et lisse plutôt qu'en croûte.",
            "action": "Obtenez la poêle plus chaude et la couture quelques secondes de plus par côté — vous voulez une croûte, mais bougez vite avant qu'elle ne fond."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'or profond, la tranche qui se présente et qui se fixe au cœur, une généreuse lécherette de graisse fondue dans la poêle.",
            "action": "Retirer immédiatement et mettre chaque tranche sur un filet reposé; réserver le gras rendu pour la sauce."
          },
          {
            "state": "Overdone",
            "description": "La tranche s'est rétrécie et s'est effondrée, coulant la majeure partie de sa graisse dans la poêle et transformant en graisse et en petite avec un bord de la livrée.",
            "action": "Sauver ce qui tient ensemble et le déposer rapidement; baisser la chaleur et travailler plus rapidement sur les tranches restantes."
          }
        ]
      },
      "feelCue": "Le foie gras vous dit qu'il est prêt par l'odeur et le son — un arôme de caramel doux et noisette et un doux grésil, pas une frite violente. Au moment où la surface semble laquée, c'est fait; l'hésitation la transforme en flaque de graisse."
    },
    {
      "nodeId": "step_4",
      "action": "Réduire",
      "inputs": [
        "seared_foie",
        "ing_07",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "madeira_reduction",
      "instructions": "Abaissez le feu à moyen et transpirez l'échalote hachée dans une cuillère à café du foie gras réservé jusqu'à ce qu'elle soit douce et translucide, environ 1 minute. Verser à Madère pour déglacer, racler le fond en vrac, et réduire jusqu'à siruposité et presque sèche, 2-3 minutes. Ajouter le demi-glace et la partie hachée de la truffe et laisser mijoter jusqu'à ce que la sauce enveloppe l'arrière d'une cuillère et tourne profondément et brillant, 3-4 minutes.",
      "visualCue": {
        "primaryTarget": "Une sauce foncée et scintillante qui sirote une cuillère et tient une ligne propre quand vous tirez un doigt à travers elle, sentant le vin grillé, la truffe et la viande rôtie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, la Madère encore pointue avec de l'alcool cru et la couleur un plat, brun pâle.",
            "action": "Continuez à mijoter pour réduire — les fortes vapeurs de vin doivent se calmer et le corps doit épaissir avant qu'il ne soit prêt."
          },
          {
            "state": "Perfect",
            "description": "Gloire et légèrement sirupeuse, acajou profond, accroché à la cuillère, la truffe perfumant la vapeur et l'alcool cuit propre.",
            "action": "Tirez le feu et montez avec du beurre froid."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à un glaçage collant et salé qui gomme la cuillère et a un goût surconcentré et serré.",
            "action": "Loyer avec un jet de bouillon ou d'eau et quelques gouttes de Madère, puis re-goûter pour le sel avant de monter."
          }
        ]
      },
      "feelCue": "Écoutez-moi, le Madère réduit: l'ébullition lâche se serre à un bloop lent et épais, alors qu'il approche du sirop. Faites glisser une cuillère sur le plancher de la casserole: quand le sentier se ferme lentement plutôt que instantanément, il a le corps."
    },
    {
      "nodeId": "step_5",
      "action": "Montage et plaque",
      "inputs": [
        "madeira_reduction",
        "ing_09",
        "ing_08",
        "ing_10"
      ],
      "outputState": "tournedos_rossini",
      "instructions": "Hors du feu, remuez le beurre froid dans la sauce un cube à la fois jusqu'à ce qu'il devienne soyeux et émulsifié — ne le laissez jamais bouillir ou il se brisera. Goûtez et ajustez le sel. Mettre chaque filet de foie sur son crouton, cuillerer la sauce Madeira brillante sur et autour, se doucher avec le reste de la truffe rasée, et terminer avec une pincée de fleur de sel. Servir immédiatement, tandis que le foie est encore chaud et productif.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante et non cassée qui s'accumule autour d'un crouton croustillant, le filet rosé surmonté d'un foie de mer et une dérive de truffes noires attrapant la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce semble mince et terne, glisse de la viande, et le beurre n'a pas complètement émulsifié pour qu'il goûte plat et inachevé.",
            "action": "Hors chaleur, fouetter dans un autre bouton de beurre froid pour construire le gloss et le corps, puis goûter à l'assaisonnement."
          },
          {
            "state": "Perfect",
            "description": "sauce soyeuse et brillante qui since la viande et sonne l'assiette, le foie chaud et doux, la truffe parfumée, le crouton encore croustillant sous.",
            "action": "Servir immédiatement — le plat n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Sauce a cassé en gouttelettes huileuses et une flaque granuleuse parce qu'elle est devenue trop chaude ou réduite trop loin après le montage.",
            "action": "fouetter dans une cuillère à café de bouillons froids ou arroser le feu pour le ramener, ou tendre et remonter avec du beurre frais froid."
          }
        ]
      },
      "feelCue": "La sauce montée doit se sentir veloutée et regarder miroir-brillant, pas gras ou fendue. Plaque rapide et servir chaud — le foie se dégonfle et le crouton s'adoucit à chaque minute qu'il est assis."
    }
  ]
};
