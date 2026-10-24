export default {
  "repoId": "master_indonesian_sambal-oelek_001",
  "parentRepoId": null,
  "slug": "sambal-oelek",
  "author": "ForkRecipe Kitchen",
  "title": "Sambal Oelek",
  "description": "La pâte de chili crue de base de l'Indonésie — des chilis rouges frais, du sel et une éclaboussure de vinaigre poncé dans un mortier dans une pâte grossière et ardente dont la chaleur de chili pur et la fraîcheur fruitée servent de base à d'innombrables plats indonésiens et le condiment parfait pour tout le reste.",
  "cuisine": "Indonésien",
  "culture": "Indonésien",
  "category": "condiments",
  "tags": [
    "par an",
    "chili-sauce",
    "cru",
    "épicé",
    "végétalien",
    "Vite",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Frosno rouge frais ou chilis hollandais (chaleur moyenne), tiges enlevées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Chilies oculaires d'oiseaux (plus chaudes — moitié de la quantité)",
        "piments serrano rouges"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chilies rouges d'oiseaux frais (cabe roughit), pour un coup de chaleur (facultatif)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "vinaigre blanc ou vinaigre de canne distillé",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin de riz",
        "jus de lime (pour une saveur plus fraîche)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chop",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rough_chopped_chilies",
      "instructions": "Hacher à peu près le fresno en gros morceaux, les couper en deux dans le sens de la longueur et en troisièmes. Si vous préférez un sambal plus doux, raclez les graines et les côtes blanches avec une cuillère; pour le feu complet, laissez-les entrer. Si vous utilisez des piments à yeux d'oiseau, laissez-les entiers ou de moitié. Peler les gousses d'ail. Cette préparation rugueuse est tout ce qu'il faut avant que le mortier ne fasse son travail — ne le faites pas. Conserver les graines et le jus de la planche à découper; ils sont de la saveur.",
      "visualCue": {
        "primaryTarget": "De gros morceaux de chili rouge et de girofles d'ail entiers sur la planche, d'un rouge vif, scintillent avec du jus et des graines.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilies ne sont pas coupées et entières — elles ne s'intégreront pas facilement dans le mortier et prendront une durée indéfinie.",
            "action": "Hacher à peu près les tiers au minimum. Le mortier a besoin d'une surface à saisir."
          },
          {
            "state": "Perfect",
            "description": "Morceaux irréguliers d'environ 2 à 3 cm. Les jus courent librement sur la planche. Des graines éparpillées.",
            "action": "Transférer immédiatement dans le mortier — le jus est volatil et frais."
          },
          {
            "state": "Overdone",
            "description": "Les piments sont fins et les graines sont déjà écrasées sur le plateau.",
            "action": "Aller directement à l'assaisonnement — sauter le stade de pilonnage ou il deviendra une purée liquide plutôt qu'une pâte grossière."
          }
        ]
      },
      "feelCue": "Au moment où vous coupez les piments, les huiles de capsaïcine commencent à se volatiliser — vos yeux sauront quand les piments sont frais et puissants. Portez des gants si votre peau est sensible et résistez à toucher votre visage."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "rough_chopped_chilies",
        "ing_04"
      ],
      "outputState": "coarse_sambal_base",
      "instructions": "Transférer les piments hachés et l'ail dans un grand mortier de granit ou de pierre. Ajouter le sel — le sel agit comme un grain abrasif qui aide à décomposer les fibres plus rapidement. Pound avec des coups fermes et délibérés vers le bas: le pestle devrait tud, pas broyer. Commencez par des coups plus dures vers le bas pour décomposer les pièces plus grandes, puis passez à une mouture tournante, en appuyant pour la pâte finale. Le but est une pâte grossière et rustique avec des taches visibles de peau de chili et de graines — pas une purée lisse. Le caractère de Sambal oelek est sa rugosité ; un mélangeur le rend trop uniforme et élimine l'arôme frais. Livre pour 3-4 minutes au total.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge rugueuse et vive avec des morceaux visibles de peau de chili, des graines éparpillées, et une surface brillante et humide — un morceau comme une salsa fraîche, non lisse comme du ketchup.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grands morceaux de chili encore intacts, l'ail n'est pas encore décomposé. Le mélange ressemble plus à une côte brute qu'à une pâte.",
            "action": "Continuez à frapper avec plus de force. L'ail doit particulièrement être complètement écrasé pour libérer sa saveur."
          },
          {
            "state": "Perfect",
            "description": "Pâte grossière, rustique, rouge, étincelante, parfumée à la chaleur de chili. Graines et taches de peau visibles partout. L'ail est dissous dans la pâte.",
            "action": "Ajouter le vinaigre, remuer et goûter au sel avant de jarrer."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue un liquide très lisse et uniforme — toute texture perdue, fragments de peau partis.",
            "action": "Incorporer quelques morceaux de chili frais hachés grossièrement pour restaurer une certaine texture. La saveur est encore bonne, mais l'authenticité est dans le brouillon."
          }
        ]
      },
      "feelCue": "Après le pilonnage, faites glisser le pilon à travers la pâte: il devrait avoir l'impression de traîner à travers une confiture épaisse et gritty — résistance de la peau de chili et des graines, avec la pâte accrochée à la pierre."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "coarse_sambal_base",
        "ing_05"
      ],
      "outputState": "finished_sambal_oelek",
      "instructions": "Verser le vinaigre sur la pâte et mélanger. Goûtez soigneusement — il doit être farouchement chaud, légèrement acide et proprement salé, avec l'arôme frais et fruité du chili brut dominant. Ajuster: plus de sel pour la présence, plus de vinaigre pour la luminosité et la conservation, plus d'ail piqué pour la profondeur. Transférer dans un pot en verre propre et appuyer sur la surface pour éliminer les poches d'air. Réfrigérer. Le sambal reste réfrigéré jusqu'à 2 semaines, le vinaigre et le sel sont des conservateurs naturels. La couleur s'obscurcit légèrement de l'écarlate brillante à un rouge plus profond au cours des premières 24 heures pendant qu'elle repose.",
      "visualCue": {
        "primaryTarget": "Pâte vive, rouge écarlate, grossière scintillement sous un mince éclat de vinaigre. Sens lumineux, vif, fruité et très chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte a un goût plat et seulement chaud: pas de luminosité, pas de présence de sel, pas de lifting acide.",
            "action": "Ajouter plus de sel dans les petites pinces et remuer, puis ajouter plus de vinaigre goutte à goutte. L'acide soulève toutes les autres saveurs; sans elle, le sambal a un goût unidimensionnel."
          },
          {
            "state": "Perfect",
            "description": "Un triangle parfait de chaleur, de sel et d'acide, avec le parfum fruité brut du chili frais qui passe clairement. Brûle agréablement et construit.",
            "action": "Jar et réfrigérer. Utiliser immédiatement comme condiment ou comme bloc de construction dans les plats cuits."
          },
          {
            "state": "Overdone",
            "description": "Le sursalé ou le vinaigre est si proéminent qu'il sent mariné plutôt que frais.",
            "action": "Ajouter une petite quantité de chili fraîchement piquée pour diluer et fraicher. Une fois jarré, le sambal sursalté ne peut pas être facilement fixé — l'utiliser avec parcimonie comme pâte assaisonnée plutôt qu'un condiment."
          }
        ]
      },
      "feelCue": "Touchez une petite quantité à votre lèvre inférieure avec un doigt propre — vous devriez sentir une piqûre vive et immédiate qui se répand rapidement sur les lèvres, suivie d'une chaleur fruitée qui se construit pendant 30 secondes. Le vinaigre devrait équilibrer la brûlure avec une luminosité nette et nette plutôt que de la muter."
    }
  ]
};
