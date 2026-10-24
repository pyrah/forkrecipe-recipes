export default {
  "repoId": "master_indian_paneer-tikka_001",
  "parentRepoId": null,
  "slug": "paneer-tikka",
  "author": "ForkRecipe Kitchen",
  "title": "Paneer Tikka",
  "description": "Cubes de paneer ferme et poivrons brillants de bijou, épaisement recouverts d'une marinade de yogourt épicée et blister sous feu vif jusqu'à ce que les chars extérieurs et les craquelins pendant que l'intérieur reste laiteux et donnant.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "proteins",
  "tags": [
    "panneau",
    "tikka",
    "grillé",
    "indienne",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "75 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Paneer, coupé en cubes de 4 cm",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "tofu ferme"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt riche en gras épais (hung ou grec)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poudre de chili cachemiri",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux + pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Pâte à l'ail-gingembre (pièces égales)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre fondu"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "poivron rouge et vert, cube",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "coins d'oignon rouge"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Coriandre et quartiers de citron frais, à servir",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "marinated_paneer",
      "instructions": "Pat les cubes de vitre complètement secs avec des serviettes en papier — toute humidité de surface va vapeur plutôt que l'omble. Dans un grand bol, mélanger le yaourt, le chili cachemiri, le garam masala, le cumin, le jus de citron, la pâte d'ail-gingembre, l'huile et le sel. fouetter jusqu'à ce que l'orange soit lisse et profondément rouge. Ajouter le paneer et les poivrons, tourner doucement pour enrober chaque surface. Réfrigérer pendant au moins 45 minutes. Ne pas mariner plus de 4 heures — l'acide va commencer à faire mijoter la vitre.",
      "visualCue": {
        "primaryTarget": "Chaque visage de chaque cube de vitre vif orange-rouge. Pas de blancs. Poivrons entièrement enduits.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Faces blanches de paneer montrant à travers la marinade patchy. L'huile est mise en réserve au fond.",
            "action": "Retourner les morceaux en appuyant fermement sur chaque face exposée."
          },
          {
            "state": "Perfect",
            "description": "Revêtement uniforme vif. Marinade assez épaisse pour s'accrocher sans goutter. Paneer se sent légèrement collant.",
            "action": "Couvrir et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Paneer laissé en marinade acide pendant plus de 4 heures. La surface est friable et douce.",
            "action": "Grillez rapidement. La crumble s'écrasera sous la chaleur, bien que la texture puisse être plus douce que l'idéal."
          }
        ]
      },
      "feelCue": "Prenez un cube — la marinade doit rester en place et ne pas vous égoutter sur les doigts. Si elle glisse, le yogourt est trop mince; fouetter dans une cuillère de yogourt ou de farine de gramme pour épaissir."
    },
    {
      "nodeId": "step_2",
      "action": "Grille",
      "inputs": [
        "marinated_paneer",
        "ing_09"
      ],
      "outputState": "charred_tikka",
      "instructions": "La pane de filetage et les poivrons alternent sur les brochettes métalliques, laissant de petits espaces entre les morceaux pour une chaleur uniforme. Placer sous une grille (grille) sur le réglage le plus haut, ou sur une grille très chaude, ou directement sur une grille sur une flamme de gaz. Cuire 5-7 minutes du premier côté sans bouger — vous voulez un véritable char, pas un doux bronze. Tourner une fois et cuire encore 4-5 minutes. Badigeonner avec toute marinade restante à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Les visages des paneers sont brun acajou foncé à noir aux pics, encore crème pâle dans les encastrements. Les peaux de poivre ont été cloquées et noircies dans les taches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est encore humide et rouge. Aucune croûte ne s'est formée. Paneer collé à la casserole.",
            "action": "Ne touchez pas — donnez-lui au moins 2 minutes de plus. Il se libérera quand la croûte se sera formée."
          },
          {
            "state": "Perfect",
            "description": "Craquant et étourdissement. Des marques de caractères profonds. Marinade sèche et croustillante à la croûte. Paneer se libère proprement.",
            "action": "Tournez une fois et terminez l'autre côté. Servir immédiatement hors de la brochette."
          },
          {
            "state": "Overdone",
            "description": "Paneer a complètement séché et s'est rétréci. La marinade est uniformément noire et amère.",
            "action": "Retirer immédiatement du feu. Pressez le jus de citron pour contrer l'amertume. Servir avec beaucoup de raita."
          }
        ]
      },
      "feelCue": "Faites glisser une spatule sous un cube — elle devrait se libérer avec un son propre de la croûte. Si elle déchire et traîne, la croûte d'omble n'est pas encore formée."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "charred_tikka"
      ],
      "outputState": "rested_tikka",
      "instructions": "Retirer les brochettes du feu et laisser le paneer tikka reposer la grille pendant 2-3 minutes avant de servir. Ce bref repos permet à l'intérieur, qui peut devenir assez chaud, de se redistribuer uniformément afin que le centre soit chaud et donne plutôt que caoutchouteux du choc soudain de température.",
      "visualCue": {
        "primaryTarget": "À la vapeur doucement, la croûte d'omble est sèche et sertie au lieu de briller.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur se sent toujours froid au centre lorsqu'il est pressé.",
            "action": "Retourner au grill pour 2 minutes de plus, en gardant une surveillance étroite."
          },
          {
            "state": "Perfect",
            "description": "Chauffer, sécher la croûte et craqueler. Sens de char, d'épices et de lait chaud.",
            "action": "Faites glisser les brochettes sur une assiette de service."
          },
          {
            "state": "Overdone",
            "description": "Le tikka est devenu froid et la croûte s'est adoucie de la vapeur.",
            "action": "Flash sous le grilleur pendant 60 secondes pour re-crisp. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un cube — il devrait donner doucement au centre avec un léger ressort. S'il se sent complètement rigide, il a séché de la surcuisson."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "rested_tikka",
        "ing_11"
      ],
      "outputState": "finished_paneer_tikka",
      "instructions": "Faites glisser le tikka des brochettes sur une assiette chaude. Scatter déchiré la coriandre fraîche généreusement. Disposer les coins de citron autour de l'assiette — pressez à la table, pas dans la cuisine. L'acide brillant coupe à travers la marinade épicée riche. Servir immédiatement avec du chutney à la menthe et des anneaux d'oignon tranchés.",
      "visualCue": {
        "primaryTarget": "cubes de couleur foncée contre la coriandre verte vive et les coins jaune citron brillant. Des couleurs contrastées — dramatiques sur la plaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tikka plaqué froid sans garniture. Ça sent bon.",
            "action": "Garnir toujours juste avant de servir — la coriandre flétrit en quelques minutes en contact avec des aliments chauds."
          },
          {
            "state": "Perfect",
            "description": "La vapeur monte doucement. La croûte de Char brille avec la pression de citron. Coriandre vert vif.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Lemon pressé loin à l'avance — tikka assis dans la piscine acide et adoucissant.",
            "action": "Fournissez des coins à la table et laissez les invités serrer leur propre."
          }
        ]
      },
      "feelCue": "L'assiette doit se sentir chaude d'en bas. Le tikka émet un parfum constant d'épices grillées, d'omble et d'agrumes."
    }
  ]
};
