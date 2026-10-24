export default {
  "repoId": "master_portuguese_piri-piri-sauce_001",
  "parentRepoId": null,
  "slug": "piri-piri-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Piri Piri",
  "description": "Une sauce rouge vive et huileuse du chili des yeux de l'oiseau africain — simultanément feu et fruité, avec une netteté citron-ail qui fait chanter le poulet grillé et vos lèvres fourmillent longtemps après la dernière bouchée.",
  "cuisine": "Portugais",
  "culture": "Portugais",
  "category": "condiments",
  "tags": [
    "Piri piri",
    "Chili",
    "portugais",
    "sauce chaude",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 5,
    "bitter": 2,
    "umami": 3,
    "heat": 9
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chilies oculaires d'oiseaux (fraîches ou séchées et réhydratées), tiges enlevées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Piments d'oiseaux thaïlandais",
        "poivrons piri séchés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "poivron rouge, haché et rôti",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou olive légère)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive extra vierge pour une saveur plus robuste"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles d'origan fraîches (ou 0,5 c. à thé séchées)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym frais"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Paprika fumé doux",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "charred_aromatics",
      "instructions": "Placez les morceaux de poivron rouge et les gousses entières d'ail sur un plateau de cuisson sous un grille-croûte très chaud (240C/460F) ou directement sur une flamme de gaz à l'aide de pinces. Faire rôtir jusqu'à ce que la peau du poivre soit noircie et blister dans des patchs et que l'ail soit doré et doux à l'intérieur. Le poivre prend 10-15 minutes, l'ail 8-10 minutes. Transférer dans un bol, couvrir de film de collage et vapeur pendant 5 minutes. Éplucher la peau de poivre — l'omble et la vapeur la détachent.",
      "visualCue": {
        "primaryTarget": "La peau de poivre est de 50 à 60 % noircie avec des cloques, chair effondrée en dessous. L'ail est brun doré et donne.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau de poivre n'a adouci que mais n'a pas été cloquée. L'ail est toujours ferme et ramoneur.",
            "action": "Retourner à la grille pour 3-5 minutes de plus. Un poulet à griller entièrement chaud est essentiel."
          },
          {
            "state": "Perfect",
            "description": "Pepper est considérablement cloqué avec de l'omble dans les patchs. La chair est douce et s'effondre. L'ail est parfumé et donne en pression.",
            "action": "Steam dans le bol couvert puis éplucher le poivre avant de mélanger."
          },
          {
            "state": "Overdone",
            "description": "Le poivre est entièrement noir partout. L'ail est profondément doré avec des notes amères.",
            "action": "Utilisez de toute façon mais réduisez légèrement la quantité. L'amertume sera compensée par le citron et le vinaigre."
          }
        ]
      },
      "feelCue": "Appuyez sur le poivre à travers le film — il devrait s'effondrer immédiatement, complètement doux sans résistance. La gousse d'ail doit produire comme une pomme de terre cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "charred_aromatics",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "blended_piri_piri",
      "instructions": "Mélanger les piments, le poivre rôti pelé, l'ail rôti, le jus de citron, le vinaigre, l'huile, le sel, l'origan et le paprika dans un mélangeur ou un robot culinaire. Mélanger en haut pendant 2 minutes jusqu'à ce qu'il soit complètement lisse et émulsifié. Si la sauce est trop épaisse, ajouter une cuillère à soupe d'eau et mélanger à nouveau. Goûtez soigneusement — la chaleur sera importante. Régler avec plus de citron pour la luminosité ou plus de sel pour la profondeur.",
      "visualCue": {
        "primaryTarget": "Une sauce lustrée, lustrée, rouge brique vive qui verse dans un flux fluide avec une légère opacité émulsifiée de l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a des morceaux de peau de chili visibles et une texture épaisse. Huile non émulsifiée — flottant dans des bassins.",
            "action": "Mélanger encore 60 secondes sur le réglage le plus haut. Une manipulation aide avec des sauces épaisses."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, rouge vif, uniformément coloré avec un léger reflet d'huile émulsifiée. Il coule d'une cuillère dans une feuille lisse. Complexe sur la langue: chaleur, acide, fumée.",
            "action": "Goûtez et assaisonnez, puis utilisez ou jarrez."
          },
          {
            "state": "Overdone",
            "description": "La sauce est rose-orange pâle de surbrillance d'air, ou l'huile s'est cassée et séparée à la surface.",
            "action": "Laissez reposer 2 minutes. Si elle est cassée, ajouter une éclaboussure de jus de citron et régénérer brièvement."
          }
        ]
      },
      "feelCue": "Placez une goutte sur votre poignet — dans les 5 secondes, vous devriez sentir une chaleur de propagation qui s'intensifie à une brûlure propre, et non une douleur terne. Sharp, pas lourd."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "blended_piri_piri"
      ],
      "outputState": "finished_piri_piri_sauce",
      "instructions": "Pour un piri piri cuit (préféré pour la marinade et la stabilité du plateau): verser la sauce mélangée dans une petite casserole et laisser mijoter à feu doux pendant 8-10 minutes, en remuant occasionnellement. La cuisson adoucit le bord cru du chili, approfondit la saveur de poivre rôti et prolonge la durée de vie du réfrigérateur jusqu'à 2 semaines. Pour une sauce de table fraîche et vibrante, sautez cette étape et utilisez cru. Refroidir complètement avant de jarrer.",
      "visualCue": {
        "primaryTarget": "La sauce s'assombrit très légèrement et la surface devient plus brillante à mesure qu'elle cuit. L'arôme passe de brut à profondément torréfié et complexe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce continue de bouillonner vigoureusement et sent très cru et vif. Huile commençant à se séparer aux bords.",
            "action": "Réduire la chaleur au réglage le plus bas et remuer. Une mijote douce, pas un ébullition."
          },
          {
            "state": "Perfect",
            "description": "La surface est à peine en mouvement — un doux éclat plutôt qu'un ébullition. La couleur s'est approfondie. L'arôme est arrondi, fumé, fruité. Pas de piment brut.",
            "action": "Cool et jar. Conserver au réfrigérateur jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "La sauce a trop diminué et est épaisse, collante et très sombre. A une note légèrement caramélisée.",
            "action": "Arroser d'une cuillerée à soupe d'eau et remuer le citron frais pour l'éclairer."
          }
        ]
      },
      "feelCue": "Après avoir refroidi, frottez une goutte entre vos doigts — il devrait se sentir soyeux et huileux avec une faible chaleur persistante s'étendant sur le bout des doigts."
    }
  ]
};
