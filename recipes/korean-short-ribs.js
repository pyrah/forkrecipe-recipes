export default {
  "repoId": "master_korean_short_ribs_001",
  "parentRepoId": null,
  "slug": "korean-short-ribs",
  "author": "ForkRecipe Kitchen",
  "title": "Galbi (côtes courtes coréennes)",
  "description": "Des côtes courtes de bœuf coupées en flanken marinées dans un mélange caramélisant de poires asiatiques, de soja, de sésame, d'ail et de gingembre — les enzymes de fruits tendrent la viande tandis que les sucres s'arrosent en une croûte sucrée amère sur le charbon rugissant.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "proteins",
  "tags": [
    "boeuf",
    "coréen",
    "côtes",
    "- Oui.",
    "grillé",
    "bbq",
    "mariné"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "4 hr (marinade)",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes courtes de boeuf, coupe flanken (1 cm d'épaisseur sur les os)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Côtes courtes coupées en anglais (régler le temps de cuisson)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Poire asiatique râpée (ou kiwi, demi-pièce)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "poire Bosc râpée + 1 c. à thé vinaigre de riz"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Giroves d'ail hachées ou râpées",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre brun foncé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Solvent",
      "name": "Saké sec ou mirin",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Graines de sésame, légèrement grillées",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "marinated_ribs",
      "instructions": "Mélanger la sauce de soja, la poire râpée, l'huile de sésame, l'ail, le gingembre, les oignons, la cassonade, le mirin et le poivre noir jusqu'à ce que le sucre se dissout. La poire asiatique râpée contient des enzymes protéolytiques (parents bromelains) qui fendent les protéines du boeuf. Découpez la viande entre chaque os avec un couteau, 2-3 découpes peu profondes pour aider la marinade à pénétrer. Submerger les côtes de la marinade dans un sac à fermeture éclair, presser l'air et réfrigérer. Deux heures minimum, quatre heures idéales. Ne pas dépasser la nuit : les enzymes de la poire finiront par briser la texture trop loin, rendant la surface farineuse.",
      "visualCue": {
        "primaryTarget": "Côtes entièrement immergées dans une marinade d'acajou foncée. Le soja et le jus de poire sont bien combinés — pas de flaques huileuses ou de sucre au fond du sac.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 2 heures. Marinade est sur la surface seulement. Le boeuf sent la viande crue, pas la viande assaisonnée.",
            "action": "Retournez au frigo. Les enzymes de la poire ont besoin de temps pour travailler à travers les fibres musculaires."
          },
          {
            "state": "Perfect",
            "description": "2-4 heures. La surface de la viande s'est légèrement obscurcie du soja. La marinade sent doux, salé et riche en sésame.",
            "action": "Retirer du réfrigérateur 30 minutes avant de griller pour tempérer."
          },
          {
            "state": "Overdone",
            "description": "Plus de 12 heures. La couche externe de la viande a une texture légèrement crayeuse, cassée par surexposition à l'enzyme de la poire.",
            "action": "Essuyer l'excès de marinade et griller comme d'habitude. La saveur est toujours excellente, et la chaleur élevée compensera la texture de surface."
          }
        ]
      },
      "feelCue": "Après 4 heures, la surface des côtes est légèrement plus glissante et donne au bout des doigts — les enzymes de la poire font leur travail."
    },
    {
      "nodeId": "step_2",
      "action": "Griller",
      "inputs": [
        "marinated_ribs"
      ],
      "outputState": "grilling_ribs",
      "instructions": "Préparer la grille pour une chaleur directe élevée — un feu de charbon rugissant ou un brûleur de gaz au maximum. Retirer les côtes de la marinade, laisser couler l'excès, mais garder un bon revêtement. Réserver la marinade dans un petit pot, porter à ébullition pendant 2 minutes, et l'utiliser pour le basting. Faire griller les fines côtes coupées sur une chaleur directe intense : 2-3 minutes de chaque côté. La coupe fine signifie que ceux-ci cuisinent rapidement — le but est le char maximum sur l'extérieur tandis que le centre reste juste cuit à travers.",
      "visualCue": {
        "primaryTarget": "Acajou foncé des deux côtés avec bords carbonisés. La graisse a rendu et évasé en points d'ombrage le long des extrémités de l'os.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement légèrement doré. Pas de char, pas de caramélisation. Le sucre marinade n'a pas eu le temps de réagir avec la chaleur.",
            "action": "Laissez-les. Résistez trop tôt — laissez les sucres faire leur travail. S'ils restent, ils ne sont pas prêts à tourner."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou noir dans des endroits avec de l'omble caramélisé le long des bords. La graisse est croquante. La viande est cuite mais pas serrée.",
            "action": "Bastez une fois avec la marinade cuite réservée et donnez une finale 30 secondes de chaque côté."
          },
          {
            "state": "Overdone",
            "description": "Uniquement noir, des odeurs de sucre brûlé. La viande s'est contractée et s'est resserrée en un morceau rigide et sec.",
            "action": "Retirez tout de suite. Couper les morceaux les plus carbonisés avec des cisailles avant de servir."
          }
        ]
      },
      "feelCue": "Les côtes flanquées cuisinent si vite qu'elles ferment de la production à la mise en place dans environ 30 secondes — appuyez avec un doigt et quand elles cessent de se sentir glissantes-douces et commencent à se sentir printanières, ils sont terminés."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser reposer",
      "inputs": [
        "grilling_ribs"
      ],
      "outputState": "rested_galbi",
      "instructions": "Retirer du gril et reposer sur une assiette chaude pendant 3-5 minutes. La coupe fine signifie qu'il s'agit d'un court repos, mais elle permet aux jus internes — en particulier la graisse intramusculaire fondue des côtes courtes — de se redistribuer plutôt que de se mettre en réserve sur la surface de coupe. Utilisez des cisailles de cuisine pour couper entre les os en segments individuels pour servir.",
      "visualCue": {
        "primaryTarget": "L'omble brillant est légèrement raffermi. La viande entre les os est un brun uniforme, riche sans rose. Les bords gras sont croquants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jus inondent la plaque quand ils sont coupés. Gris rose au centre de la viande entre les os.",
            "action": "Retourner au grill pendant 1 minute de chaque côté. Ces côtes sont assez minces que la chaleur supplémentaire est rapide."
          },
          {
            "state": "Perfect",
            "description": "Les jus sont légèrement ambrés lorsqu'ils sont coupés, ce qui n'est pas clair, ce qui indique la graisse et le liquide. La viande est uniformément cuite. Le char est réglé et légèrement collant.",
            "action": "Servir immédiatement sur le riz cuit à la vapeur avec banchan."
          },
          {
            "state": "Overdone",
            "description": "Aucun jus n'apparaît lorsqu'il est coupé. La viande est très ferme et mâcheuse.",
            "action": "Le galbi mince est impitoyable de la cuisson excessive; servir avec beaucoup de sauce ou envelopper dans une feuille de laitue avec le gochujang pour compenser la sécheresse."
          }
        ]
      },
      "feelCue": "Couper entre les os avec des cisailles — la chair doit se séparer proprement avec une légère résistance, comme couper à travers une ceinture en cuir mince."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "rested_galbi",
        "ing_11",
        "ing_07"
      ],
      "outputState": "finished_galbi",
      "instructions": "Disposer les segments osseux sur un plateau chaud ou directement sur la plaque de grill. Éparpiller les graines de sésame grillées de façon libérale sur le dessus et ajouter les verts de pétoncle frais. Servir aux côtés du riz à grains courts, du kimchi et du banchan coréen classique — les graines de sésame et le pétoncle ne sont pas des décorations; ils offrent un contraste frais avec l'omble caramélisé intense.",
      "visualCue": {
        "primaryTarget": "Des segments brillants de côtes carbonisées sur le plateau, avec des graines de sésame blanc, attrapant les anneaux de pétoncle vert clair éparpillés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de garniture ajoutée — le plat a l'air monochromatique et plat restaurant.",
            "action": "La saisie est importante ici. Même une pincée de sésame et une simple tranche de pétoncle transforment le contraste visuel et textural."
          },
          {
            "state": "Perfect",
            "description": "Sésame et pétoncle appliqués généreusement. La combinaison de l'omble foncé, du sésame blanc et de l'oignon vert est le visuel galbi classique.",
            "action": "Amène-toi à la table."
          },
          {
            "state": "Overdone",
            "description": "Garnir appliqué trop tôt et flétrir de la chaleur de la viande.",
            "action": "Éparpiller une pincée de pétoncle sur la table au moment de servir."
          }
        ]
      },
      "feelCue": "La côte finie doit se sentir dense et charnue entre les doigts — compacte sans être raide, avec un extérieur légèrement collant de la marinade caramélisée."
    }
  ]
};
