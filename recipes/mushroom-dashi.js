export default {
  "repoId": "master_japanese_mushroom_dashi_001",
  "parentRepoId": null,
  "slug": "mushroom-dashi",
  "author": "ForkRecipe Kitchen",
  "title": "Champignon Dashi",
  "description": "Un dashi végétalien de shiitake et de kombu séchés, à l'épaisseur froide du jour au lendemain, pour exacerber la synergie glutamate-guanylate la plus complète sans un seul degré de chaleur — parce que l'ébullition transforme leur profondeur tranquille en une amertume lancinante. Ce qui sort est sombre, clair, et étonnamment complexe: comme le plancher de forêt traduit en liquide.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "stocks",
  "tags": [
    "stock",
    "Japonais",
    "Dashi",
    "végétalien",
    "Sans gluten",
    "umami"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "8 hr",
  "ratioSystem": "parts",
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
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Champignons shiitake séchés (entier, tiges)",
      "ratioValue": 5,
      "defaultUnit": "pieces",
      "substitutions": [
        "porcini (non traditionnel, moins guanylate)",
        "Mitake séché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Glutamate",
      "name": "Kombu (poule séchée), pièce de 10 cm",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": [
        "2 csp kombu poudre",
        "nori (faible)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Eau filtrée à froid (sans chlore)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Froide raide",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "steeping_dashi",
      "instructions": "Essuyez la surface du kombu avec un chiffon à peine humide pour enlever toute poudre blanche excédentaire — que la floraison blanche est l'acide glutamique précipité, la source de l'umami, donc ne le rincez pas sous l'eau. Placer le kombu et le shiitake séché dans un pot ou un bol en verre propre et verser sur l'eau froide. Couvrir et réfrigérer pendant au moins 6 heures, idéalement pendant la nuit (8 à 12 heures). L'extraction à froid est ici la technique déterminante : la basse température extrait d'abord les composés umami parfumés et propres tout en laissant derrière les notes sulfureuses et amères que la chaleur tirerait. Ne précipitez pas ça avec de l'eau chaude.",
      "visualCue": {
        "primaryTarget": "Au bout de 8 heures, l'eau s'est creusée jusqu'à un brun-ambre clair et foncé — teint à la shiitake — et le kombu a gonflé pour doubler son épaisseur, ses bords maintenant doux et donnant. L'eau doit sentir la forêt humide et la mer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 2 à 3 heures, l'eau est d'or pâle et les shiitake ont à peine hydraté; leurs capuchons sont encore raides et cuireux.",
            "action": "Continuez à tremper — le guanylate dans le shiitake libère lentement et nécessite la pleine 6 à 8 heures dans l'eau froide. Ne vous précipitez pas avec la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Le liquide est un brun-ambre clair et profond avec une clarté visible (pas trouble), le shiitake sont entièrement réhydratés et doux, et le kombu est souple. L'arôme est propre, océanique et terreux.",
            "action": "Enlevez le kombu et le shiitake. Le kombu peut être tranché et mangé; le shiitake peut être braisé."
          },
          {
            "state": "Overdone",
            "description": "Soupçonné plus de 24 heures à la température ambiante, le liquide est devenu nuageux et légèrement fermenté, ou a développé un bord aigre ou ranci.",
            "action": "Toujours raide au réfrigérateur. Au-delà de 16 heures de froid, de déformation et d'utilisation — le dashi sera fortement concentré mais pas mieux pour le temps supplémentaire."
          }
        ]
      },
      "feelCue": "Soulevez un capuchon de shiitake trempé après 8 heures : il doit fléchir entre vos doigts sans résistance, lisse et uniformément doux à travers la tige. Les taches sont sous-tendues."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "steeping_dashi"
      ],
      "outputState": "strained_dashi",
      "instructions": "Enlevez d'abord le kombu avec des pinces — réservez-le pour une autre utilisation. Soulevez les shiitake et pressez-les doucement sur le pot pour retourner leur liqueur imbibée; réservez les champignons pour la soupe miso, le nimono ou les légumes braisés. Enfilez le dashi à travers un tamis à mailles fines doublé d'une serviette en papier humide ou d'une nappe de fromage pour attraper des particules fines ou de grains. Ne pressez pas ou n'enroulez pas le chiffon, ce qui troublerait le dashi. Le dashi fini est maintenant prêt; l'utiliser immédiatement ou réfrigérer jusqu'à 3 jours.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré clair et sombre avec une belle translucidité, comme un thé fort tenu à la lumière. Pas de nuages, pas de particules flottantes, juste une profondeur sombre propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dashi est nuageux avec de fines particules de champignons ou de kombu passant par un tamis insuffisamment doublé.",
            "action": "Retransformez-vous à travers une double couche de cheesewet humide ou un filtre à café. La patience ici préserve la belle clarté."
          },
          {
            "state": "Perfect",
            "description": "Ambre cristalline. Condamné à la lumière, il est transparent, et sur la langue il délivre un umami propre, profond, sans amertume et une légère douceur à la finale.",
            "action": "Utilisez immédiatement dans la soupe miso, ramen, sauces, ou toute recette appelant pour dashi."
          },
          {
            "state": "Overdone",
            "description": "Chaud après avoir essayé de « nettoyer » — la chaleur a extrait des composés amers des particules résiduelles de champignons.",
            "action": "La prochaine fois, faites froid et servez froid ou légèrement réchauffé uniquement à la température de service. Si amer, diluer avec une petite quantité d'eau douce et corriger l'assaisonnement."
          }
        ]
      },
      "feelCue": "Goûtez le dashi brut avant d'ajouter du sel : l'umami devrait arriver sur le palate moyen comme une faible résonance savore qui s'attarde — pas un coup aigu, mais une floraison lente. Cette qualité persistante est la synergie guanylate-glutamate qui fonctionne."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "strained_dashi"
      ],
      "outputState": "finished_mushroom_dashi",
      "instructions": "Le dashi est techniquement complet sans saison — c'est une base. Pour la soupe en miso, la déposer dans une casserole et la réchauffer à un peu au-dessous d'une mijoter (70 à 75°C); dissoudre le miso dans une louche de dashi chaud avant de remuer. Pour une utilisation comme base de cuisson liquide ou de sauce, assaisonner avec une petite quantité d'usukuchi (sauce de soja léger) et de mirin au goût. Ne jamais faire bouillir le dashi fini : les composés aromatiques volatils qui le rendent vivant plutôt que plat sont entraînés à des températures d'ébullition en rotation. La chaleur douce les préserve.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre chaud, parfumé, essuyant à la vapeur fine, goûtant propre et salé — minéral de mer du kombu, doux de terre du shiitake, sans bord dur ou amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours froid et plat du réfrigérateur; les saveurs sont muettes et peu expressives.",
            "action": "Chauffer doucement à 65 à 70°C — juste assez chaud pour chauffer — avant d'utiliser ou de servir. Le dashi froid a un goût terne."
          },
          {
            "state": "Perfect",
            "description": "A la vapeur, mais sans mijoter, l'arôme s'ouvre pleinement : océanique, terreux, subtilement sucré. En bouche il est propre, profond, et satisfaisant avec rien de boueux ou amer.",
            "action": "À utiliser immédiatement. Le dashi gardera au réfrigérateur 3 jours; réchauffer doucement chaque fois."
          },
          {
            "state": "Overdone",
            "description": "Porté à ébullition complète, le dashi est légèrement amer et astringent, perdant le délicat lifting aromatique.",
            "action": "Retirer immédiatement du feu. Pour ce lot, diluer avec un peu d'eau froide fraîche et une pincée de sucre pour faciliter la netteté."
          }
        ]
      },
      "feelCue": "Le signe d'un excellent dashi champignon est ce qu'il fait à votre palais après avoir avalé : une résonance chaude et salée qui se répand lentement de l'arrière de la gorge et vous fait vouloir immédiatement une autre gorgée. Cet arrière-goût fait son travail."
    }
  ]
};
