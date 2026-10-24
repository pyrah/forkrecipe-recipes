export default {
  "repoId": "master_japanese_togarashi_001",
  "parentRepoId": null,
  "slug": "togarashi",
  "author": "ForkRecipe Kitchen",
  "title": "Shichimi Togarashi",
  "description": "Le mélange japonais à sept épices — shichimi signifie « sept saveurs » et chacun est présent en parfaite mesure: la chaleur du chili séché, l'amas d'agrumes de la peau de mandarine séchée, la noisette du sésame blanc et noir, la pop florale du poivre japonais (sansho), la profondeur océanique du nori et la terre des graines de chanvre ou de pavot.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "condiments",
  "tags": [
    "à togarashi",
    "shichimi",
    "Japonais",
    "sept spice",
    "à l'état sec",
    "Ramen",
    "udon"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chili rouge séché (tōgarashi), moulu ou flocé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Gochugaru coréen pour une chaleur plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Mandarine séchée ou pelure de yuzu, finement moulue",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "peau d'orange du nombril séché"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de sésame blanc",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de sésame noir",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Sansho (poivre japonais) ou Széchuan, moulu",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Nori grillé, émietté",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de chanvre ou de pavot",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "graines de sésame blanc"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Gingembre séché, moulu",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation des composants séchés",
      "inputs": [
        "ing_02",
        "ing_06"
      ],
      "outputState": "prepared_dry_components",
      "instructions": "Si vous faites l'épluchage d'orange ou de mandarine à partir de zéro: utilisez un éplucheur pour enlever seulement le zeste coloré (pas de piquant blanc) de 2 mandarines ou 1 orange. Sécher au four à 90°C pendant 25 à 30 minutes jusqu'à ce qu'il soit complètement sec et fragile. Grincer à une poudre grossière. Pour le nori: toast une feuille de nori sur une flamme de gaz pendant 2 à 3 secondes de chaque côté jusqu'à ce que croustillant et vert vif. Crumble entre les doigts directement dans le bol. Le nori commercial est parfaitement acceptable ici.",
      "visualCue": {
        "primaryTarget": "L'écorce de mandarine est une poudre fine, jaune-orange pâle avec un arôme d'agrumes intense; le nori émietté est vert foncé, fin et complètement sec.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'écorce de mandarine est encore douce ou sinueuse, pas encore complètement séchée; elle s'écrase lorsqu'elle est pressée plutôt que de s'effondrer dans une poudre fine.",
            "action": "Retourner au four encore 10 minutes. L'écorce doit être sèche pour être moulue et mélangée correctement."
          },
          {
            "state": "Perfect",
            "description": "La pelure se brise à une fine poudre parfumée entre les doigts; le nori s'écroule au toucher en fines flocons foncés. Les deux sont complètement secs.",
            "action": "Procédez à la combinaison de tous les composants."
          },
          {
            "state": "Overdone",
            "description": "L'écorce de mandarine a séché trop longtemps à une température trop élevée et les huiles volatiles d'agrumes ont cuit. La poudre sent plat et amer.",
            "action": "Utilisez l'écorce de mandarine séchée achetée en magasin pour ce lot. La peau fraîche séchée est toujours meilleure si elle est séchée à basse température."
          }
        ]
      },
      "feelCue": "L'écorce de mandarine bien séchée craque et se brise sous une légère pression des doigts, s'écroulant dans une poussière parfumée d'agrumes qui tache immédiatement le bout des doigts orange-jaune. Si elle s'incline plutôt que s'enclenche, elle conserve l'humidité et a besoin de plus de séchage."
    },
    {
      "nodeId": "step_2",
      "action": "Combiner tous les composants",
      "inputs": [
        "prepared_dry_components",
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "combined_togarashi",
      "instructions": "Combiner les sept (ou huit, dans cette version) composants dans un bol. Mélanger doucement mais soigneusement pour répartir tous les éléments uniformément. Le mélange final doit montrer une diversité visible : le sésame foncé et le nori contre les graines de sésame pâle et de chanvre, les flocons d'orange de pelure d'agrumes contre les flocons de chili rouge. Mélanger pendant 30 à 45 secondes en soulevant le fond du bol à plusieurs reprises.",
      "visualCue": {
        "primaryTarget": "Un beau mélange hétérogène montrant des flocons de chili rouge visibles, des graines de sésame noir et blanc, des fragments de pelure orange, des flocons de nori foncé et des graines de chanvre pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des flocons de nori lourds ont coulé au fond; le chili rouge et le sésame sont entassés dans une partie du bol. Diversité visuelle absente.",
            "action": "Plier davantage du bas vers le haut, tourner doucement le bol et couper à travers le centre du mélange."
          },
          {
            "state": "Perfect",
            "description": "Chaque cuillère montre les sept éléments. Des odeurs de chili, d'agrumes et de sésame séchés simultanément – lumineux, complexes, chauds.",
            "action": "Transférer dans un pot et un sceau d'épices. Prêt à l'emploi immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Agitation vigoureuse a brisé les graines de nori et de sésame à la fine poussière. La texture est perdue et le mélange semble uniformément brun-gris.",
            "action": "Plier dans une cuillère à soupe fraîche de sésame grillé intact et nori émietté pour restaurer le contraste visuel et textural."
          }
        ]
      },
      "feelCue": "Couper une petite quantité de mélange dans votre paume et inhaler. Vous devriez détecter des notes distinctes arrivant en séquence : d'abord la chaleur sèche et aiguë du chili, puis le lifting des agrumes, puis le sésame grillé, puis le picotement de sansho sur la pointe de votre langue depuis le seul contact aromatique."
    },
    {
      "nodeId": "step_3",
      "action": "A conserver",
      "inputs": [
        "combined_togarashi"
      ],
      "outputState": "finished_togarashi",
      "instructions": "Transférer dans un petit pot d'épices en verre avec un couvercle serré. Étiquette clairement avec la date. Conserver à la température ambiante à l'abri de la lumière et de la chaleur jusqu'à 3 mois, bien que le togarashi shichimi soit toujours à son maximum au cours des 3 à 4 premières semaines. Utiliser directement à la table comme condiment, agité sur ramen, udon, yakitori, bouillon de trempage tempura, tofu grillé, ou mélangé dans ponzu. Ne l'ajoutez jamais pendant la cuisson — les huiles volatiles du sansho, les agrumes pelés et le sésame se dissipent par la chaleur.",
      "visualCue": {
        "primaryTarget": "Un mélange d'épices compact, parfumé et visuellement diversifié dans un pot. Aucune couleur ne domine — vous pouvez identifier au moins quatre éléments distincts en un coup d'oeil.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pot n'est pas scellé et le mélange perd déjà ses notes aromatiques dans l'air. L'odeur d'agrumes qui devrait être brillante devient plate.",
            "action": "Scellez immédiatement. Les aromatiques volatils de Togarashi sont précieux et se dissipent en quelques heures dans un récipient ouvert."
          },
          {
            "state": "Perfect",
            "description": "Chaque fois que le pot est ouvert, un parfum frais et complexe fleurit: chili, agrumes, sésame. Chaque pinceau est savoureux et contient une diversité texturale visible.",
            "action": "Reste à table. Utilisez généreusement."
          },
          {
            "state": "Overdone",
            "description": "Entreposé pendant 4 mois et plus, le mélange est plat et terne. L'écorce d'agrumes est devenue amère et les composés engourdissants du sansho se sont dégradés.",
            "action": "Mettre le mélange brièvement dans une poêle sèche pendant 30 secondes pour raviver les notes de sésame et de chili. Les agrumes ne se rétabliront pas — faire un nouveau lot bientôt."
          }
        ]
      },
      "feelCue": "Au moment où vous secouez le togarashi shichimi sur des aliments chauds, sa chaleur déclenche une libération d'huiles volatiles — les composés aromatiques deviennent aéroportés et le bol entier sent l'épice. C'est la bonne expérience. Si rien ne se passe quand l'épice frappe la nourriture, le mélange a vieilli au-delà de sa prime."
    }
  ]
};
