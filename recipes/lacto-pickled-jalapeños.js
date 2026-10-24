export default {
  "repoId": "master_mexican_lactojalapeños_001",
  "parentRepoId": null,
  "slug": "lacto-pickled-jalapeños",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Anneaux Jalapeño Lacto-Fermentés",
  "description": "Saline de sel et le temps transforment les tranches crues de jalapeño en anneaux funky, tangents, constamment chauds — la chaleur arrondie aux bords par l'acide lactique et la chair est passée de cru-végétal à quelque chose de plus profond et fermenté, comme la chaleur filtrée à travers une cave à vin.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "fermented",
  "tags": [
    "jalapeño",
    "fermenté",
    "lacto",
    "Mexique",
    "végétalien",
    "Sans gluten",
    "chaud",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "72 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 1,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Jalapeños frais, tranchés en anneaux de 5 mm",
      "ratioValue": 100,
      "defaultUnit": "parts by weight",
      "substitutions": [
        "serrano chiles",
        "Fresno chiles"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Eau non chlorée (froid filtrée ou bouillie)",
      "ratioValue": 100,
      "defaultUnit": "parts by weight",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer non iodé ou sel casher",
      "ratioValue": 2,
      "defaultUnit": "parts by weight (2% of total brine+veg weight)",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Girofles d'ail légèrement broyés",
      "ratioValue": 3,
      "defaultUnit": "cloves per jar",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 1,
      "defaultUnit": "tsp per jar",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "salt_brine",
      "instructions": "Dissoudre complètement le sel dans l'eau à un rapport de 2% de sel en poids total (20g de sel par 1000g d'eau, ou environ 1 cuillère à café par tasse). Incorporer jusqu'à ce qu'il ne reste plus de cristaux. Goûtez - le — il devrait être clairement salé mais pas écrasantement, comme une soupe bien assaisonnée. N'utilisez pas de sel iodé (il inhibe la fermentation) ou d'eau chlorée du robinet (il tue les bactéries dont vous avez besoin).",
      "visualCue": {
        "primaryTarget": "Un liquide cristallin sans cristaux de sel visibles se dépose au fond. Ne tient aucune couleur du tout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sel non dissous visible sur le fond. L'eau semble légèrement trouble à la base.",
            "action": "Remuer encore 30 secondes. Si le sel ne se dissout pas dans l'eau froide, réchauffez-le légèrement et refroidissez-le avant d'utiliser."
          },
          {
            "state": "Perfect",
            "description": "Complètement clair, sel complètement dissous. Goûte agréablement salée sur la langue.",
            "action": "Emballer les jalapeños et procéder au remplissage."
          },
          {
            "state": "Overdone",
            "description": "Goûte de façon écrasante, désagréablement salée — plus de 3% de concentration. La fermentation sera très lente et le résultat sera fortement salé.",
            "action": "Diluer avec plus d'eau et retester par goût."
          }
        ]
      },
      "feelCue": "La saumure doit se sentir identique à l'eau pure entre les doigts — glissante si elle le fait, ce qui signifie que la concentration de sel peut être trop élevée."
    },
    {
      "nodeId": "step_2",
      "action": "Boîte",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "salt_brine"
      ],
      "outputState": "packed_jar",
      "instructions": "Emballez les anneaux jalapeño tranchés étroitement dans un pot de maçon à large bouche propre (non stérilisé). Coincez les gousses d'ail et les grains de poivre. Verser la saumure sur les jalapeños pour couvrir complètement, laissant l'espace de tête de 2-3 cm. Peser les jalapeños avec un petit sac à fermeture éclair rempli de saumure, d'un poids de fermentation ou d'une feuille de chou pliée coincée sous le cou du pot — aucun anneau de jalapeño ne doit briser la surface de la saumure. Couvrir lâchement avec un couvercle ou une nappe de fromage.",
      "visualCue": {
        "primaryTarget": "Jalapeños entièrement immergés sous la saumure, compacts et bien emballés. Aucun anneau flottant visible du côté. La saumure est claire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les anneaux flottant au-dessus du niveau de la saumure ou de la saumure ne couvrent pas entièrement. Les surfaces de poivre exposées seront moulées dans les 24 heures.",
            "action": "Ajouter plus de saumure, appuyer plus fermement sur le poids ou emballer plus étroitement pour assurer la pleine submersion."
          },
          {
            "state": "Perfect",
            "description": "Tout est submergé. La saumure est claire. Espace de tête de 2-3cm laisse place à l'expansion du CO2 sans débordement.",
            "action": "Déplacez-vous dans un endroit frais et sombre (18-22 C) et commencez la fermentation."
          },
          {
            "state": "Overdone",
            "description": "La jarre est surremplie — saumure sur la jante sans espace de tête. Le CO2 produit forcera la saumure hors du pot.",
            "action": "Enlever une saumure pour créer un espace de tête de 2-3 cm. Placez le pot sur une assiette pour attraper tout débordement."
          }
        ]
      },
      "feelCue": "Appuyez sur le poids avec un bout de doigt propre — les jalapeños doivent se sentir denses et ressortent légèrement, pas flotter ou se disperser. La saumure devrait se lever autour de votre doigt, couvrant tout de nouveau immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "packed_jar"
      ],
      "outputState": "fermented_jalapeños",
      "instructions": "Ferment à température ambiante (18-22 C / 65-72 F) loin du soleil direct pendant 3-7 jours. Burp le pot une fois par jour si utiliser un couvercle serré — il suffit d'ouvrir brièvement pour libérer du CO2. Vérifiez que les jalapeños restent submergés chaque jour. Vous verrez : bulles montant du bas (bon), la saumure progressivement nuageuse (très bon), et la couleur passant du vert vif au olive-drabe (normal et attendu). Goûtez à partir du jour 3 — vous voulez tanné, lumineux et chaud. Réfrigérer quand ils atteignent votre amerité préférée.",
      "visualCue": {
        "primaryTarget": "La saumure est passée d'un blanc cristallin à un blanc laiteux légèrement opaque. Des petites bulles s'élèvent du bas. Les jalapeños sont passés d'un vert Kelly brillant à un vert olive-drabe, blanc armée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saumure est encore claire au jour 3. Pas de bulles visibles. Jalapeños encore vert vif. Ils ont le goût de jalapeños crus salés sans tang.",
            "action": "Passer à un endroit plus chaud (22-24 C). L'activité peut être lente à cause de l'eau froide ou chlorée. Vérifiez l'immersion."
          },
          {
            "state": "Perfect",
            "description": "Saumure blanche nuageuse. Des microbulles stables se lèvent. Couleur olive-drabe. Les anneaux ont un goût funky, acidulé, aigre et constamment chaud avec une complexité que le poivre cru n'a jamais eu.",
            "action": "Réfrigérer pour arrêter la fermentation. Gardera 3 mois au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La saumure est très trouble ou a une odeur désagréable — putride plutôt que acide. Moulure blanche floue poussant à la surface ou sur les poivrons exposés.",
            "action": "Si la moisissure blanche n'est que sur la surface, écrasez-la et assurez-vous que tous les poivrons sont submergés. Si la moisissure est rose, noire ou floue, jeter entièrement."
          }
        ]
      },
      "feelCue": "Ouvrir le pot et s'y pencher — une saumure bien fermentée sent aiguisée, tannante et légèrement funky, comme l'intérieur d'un bon cornichon délicat, pas pourri ou désagréable. Si ça sent mauvais, fais confiance à ton nez."
    }
  ]
};
