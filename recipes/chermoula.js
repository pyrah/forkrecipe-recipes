export default {
  "repoId": "master_moroccan_chermoula_001",
  "parentRepoId": null,
  "slug": "chermoula",
  "author": "ForkRecipe Kitchen",
  "title": "Chermoula",
  "description": "En Afrique du Nord, la marinade et la coriandre sont toutes destinées à l'alimentation, le persil et le cumin, le paprika et l'ail, desserrés de citron et d'huile d'olive dans une pâte vive qui parfume le poisson, le poulet et les légumes.",
  "cuisine": "Maroc",
  "culture": "Afrique du Nord",
  "category": "sauces",
  "tags": [
    "Maroc",
    "nord-africain",
    "herbe",
    "marinade",
    "épice",
    "Cumin",
    "coriandre"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 0,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Coriandre fraîche, feuilles et tiges tendres",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "persil à feuilles plates pour coriandre-averse"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles et tiges tendres",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de cumin entière grillées et moulues"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé pour un registre plus profond"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Poivre d'Alep (utiliser double)",
        "flocons de chiles séchés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron conservé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Citrus",
      "name": "Zeste de citron (à partir de citron non épilé)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "finement hachée croûte de citron (salé de lait)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_03",
        "ing_10"
      ],
      "outputState": "garlic_salt_paste",
      "instructions": "Placez les gousses d'ail dans un mortier avec le sel. Pound avec un mouvement circulaire et descendant jusqu'à ce que l'ail se décompose complètement en une pâte collante et lisse — le sel agit comme un abrasif, tirant l'humidité de l'ail et accélérant le processus. Cela devrait prendre environ 90 secondes d'efforts soutenus. La pâte doit montrer la faible translucidité de l'ail cru broyé sans fil fibreux visible.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ail à la crème pâle et lisse sans morceaux visibles. Le sel s'est dissous dans l'humidité libérée de l'ail, et la pâte s'accroche au pestle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est finement cassé mais toujours en morceaux discrets — le mortier présente des gravats d'ail moelleux et humide plutôt qu'une pâte lisse.",
            "action": "Continuer à frapper, travailler le pilon dans des coups circulaires serrés et appuyer fermement sur chaque rotation."
          },
          {
            "state": "Perfect",
            "description": "La pâte est complètement lisse, collante et translucide; elle s'accroche au pestle et s'éloigne en ficelles. Un parfum d'ail vif et propre remplit la cuisine.",
            "action": "Ajouter les herbes et les épices directement au mortier."
          },
          {
            "state": "Overdone",
            "description": "La pâte d'ail a été travaillée si longtemps qu'elle commence à passer du blanc à une teinte légèrement grise et libère un arôme légèrement amer et dur.",
            "action": "Continuez immédiatement. Les herbes tempéreront la dureté. Utilisez la Chermoula tout de suite plutôt que de la laisser s'asseoir."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir piquante et saisir votre bout de doigt avec une légère résistance — comme une colle très ferme et lisse. Rouler une petite quantité entre les doigts et il devrait laisser un résidu propre, intensément aromatique."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "garlic_salt_paste",
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "herb_spice_paste",
      "instructions": "Ajoutez la coriandre et le persil à la pâte d'ail dans le mortier et livrez - les herbes libéreront rapidement leurs huiles et le mélange deviendra vert vif presque immédiatement. Ajouter le cumin, le paprika, la cayenne et le zeste de citron. Continuer le pilonnage et le travail, en alternant entre les mouvements de concassage et de brassage. Le but est une pâte grossière et parfumée: pas une purée lisse, mais pas une côte brute non plus — quelque chose avec une texture d'herbe visible et des épices entièrement intégrées. Si le mortier est trop petit, le transfert vers un robot culinaire et l'impulsion brièvement, en étant prudent de ne pas trop traiter.",
      "visualCue": {
        "primaryTarget": "Une pâte verte grossière et vive avec des taches rouge rouille de paprika et de cumin visibles partout. La couleur est intensément verte — plus foncée qu'un pesto mais plus brillante qu'une taupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes sont encore en gros morceaux mal cassés. Les épices sont sèches et poudreuses plutôt que intégrées dans la pâte d'herbe. Le mortier sent chaque composant séparément.",
            "action": "Continuez à frapper. Les herbes ont besoin d'une pression soutenue pour libérer leurs huiles et fusionner avec l'ail et la base d'épices."
          },
          {
            "state": "Perfect",
            "description": "Une pâte verte cohésive et à texture grossière où les herbes sont bien décomposées mais encore identifiables. Le paprika et le cumin sont entièrement intégrés, donnant à la pâte un sous-ton vert rougeâtre chaud.",
            "action": "Ajouter le jus de citron et l'huile d'olive pour desserrer la pâte à une consistance savoureuse et à tartiner."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été battue à une purée complètement lisse et humide — toute texture perdue. Les herbes peuvent commencer à s'oxyder de la chaleur de friction, passant du vert vif à l'olive.",
            "action": "Continuez immédiatement. Ajouter les liquides et utiliser immédiatement. La saveur sera excellente même si la texture est plus lisse que traditionnelle."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt dans la pâte et levez - il devrait tirer vers le haut dans un seul monticule cohésif et relâcher avec une faible succion, parfumé avec du cumin, des herbes, et l'ail cru simultanément."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "herb_spice_paste",
        "ing_07",
        "ing_09"
      ],
      "outputState": "chermoula",
      "instructions": "Ajouter le jus de citron et l'huile d'olive à l'herbe et la pâte d'épices. Plier et remuer ensemble — l'acide et le gras desserrent la pâte dans une consistance savoureuse et extensible. Ajouter l'huile par tranches, en remuant après chaque ajout, jusqu'à ce que vous atteignez la texture dont vous avez besoin : plus épais si vous utilisez comme marinade ou frotter, plus lâche si vous faites une cuillère sur du poisson cuit. Goûtez et ajustez : plus de sel s'il goûte plat, plus de citron s'il a besoin de luminosité, plus de cayenne s'il a besoin de chaleur. Chermoula est immédiat — utilisez-le dans une heure pour la couleur la plus brillante et la saveur la plus fraîche.",
      "visualCue": {
        "primaryTarget": "Une sauce verte vive avec une consistance lâche et drizzleable et des taches d'épices rouge rouille visibles partout. Le jus de citron allège légèrement la pâte à un vert plus clair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cermoule est trop épaisse et pâteuse — il faut plus d'huile ou de citron. Les épices ont un goût aigu et non intégré plutôt que mélangé par la graisse et l'acide.",
            "action": "Ajouter l'huile d'olive une cuillère à soupe à la fois, en remuant bien, jusqu'à ce que la sauce coule facilement. Un reste de 5 minutes aide également les épices à s'installer dans la base."
          },
          {
            "state": "Perfect",
            "description": "La cermoula coule d'une cuillère dans une bruine épaisse mais régulière, vert vif avec une texture d'herbe visible et un arôme capricieux de cumin, de citron et d'herbe fraîche.",
            "action": "Utiliser immédiatement comme marinade pour le poisson, le poulet ou les légumes, ou comme sauce sur tout ce qui est sorti d'un grill."
          },
          {
            "state": "Overdone",
            "description": "La cermoule est fine et grasse — trop d'huile d'olive a dilué la saveur et l'a faite pool plutôt que collant. La couleur peut commencer à s'estomper.",
            "action": "Pound dans une petite poignée de persil frais ou coriandre pour restaurer le corps et la couleur. Bouche: la saveur doit se réaffirmer avec les herbes fraîches."
          }
        ]
      },
      "feelCue": "Une cermoula finie arrosée sur le dos de votre main doit s'accrocher et s'enrober sans courir – légèrement épais, légèrement collant de l'ail, brillant et aromatique du citron et du cumin."
    }
  ]
};
