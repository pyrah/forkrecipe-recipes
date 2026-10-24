export default {
  "repoId": "master_french_maitredhotelbutter_001",
  "parentRepoId": null,
  "slug": "maitre-dhotel-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Maître d'Hôtel Butter",
  "description": "Le beurre composé le plus simple et le plus élégant — le beurre doux non salé battu avec du persil à feuilles plates, du zeste de citron et du jus, et de l'échalote, roulé dans un cylindre et réfrigéré jusqu'à ce que ferme —, un médaillon de celui-ci fondu sur un steak chaud ou un poisson grillé devient sa propre sauce instantanée.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "condiments",
  "tags": [
    "beurre composé",
    "français",
    "maître d'hôtel",
    "persil",
    "citron",
    "Steak",
    "classique"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, à température ambiante (très doux mais non fondu)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil à feuilles plates, très finement haché",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "ciboulette (seule ou combinée)",
        "estragon (plus petite quantité)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Zeste de citron frais, râpé finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalote, très finement hachée (presque à la pâte)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "ciboulette, finement reniflée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de mer flocé, plié en douceur"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hacher finement",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "minced_aromatics",
      "instructions": "La qualité du beurre fini dépend entièrement de la finesse du hachage. Pour le persil : retirer les feuilles des tiges et les rassembler dans une pile serrée. Chopez à maintes reprises avec le couteau d'un chef aiguisé, berçant la lame, jusqu'à ce que le persil soit presque une poudre verte — au niveau le plus fin de la découpe, le persil libère une petite quantité de jus vert et les pièces individuelles sont presque indistinguables. Le persil haché grossièrement donne au beurre une apparence inégale et rugissante et dégage une amerie herbacée sévère. Pour l'échalote: la moitié, peler et miser aussi finement que possible jusqu'à ce qu'il soit presque une pâte. Si l'échalote hachée a encore une brûlure aiguë et crue au goût, rincer brièvement sous l'eau froide et presser au sec dans un chiffon — ce qui élimine certains des composés de soufre difficiles sans perdre de saveur.",
      "visualCue": {
        "primaryTarget": "Persil réduit à une consistance presque-pastée, vert vif, intensément parfumé; échalote invisible comme morceaux individuels, presque une pâte fine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil est toujours en feuilles reconnaissables. De l'échalote dans de gros dés. Les deux produiront un beurre amer inégal.",
            "action": "Continuer à couper jusqu'à ce que les deux soient presque inconnaissables en morceaux. Cela demande patience et un couteau vraiment tranchant."
          },
          {
            "state": "Perfect",
            "description": "Le persil est une poudre verte vive, légèrement humide à partir de son propre jus. L'échalote est une fine pâte, à peine visible. Les deux sentent intensément frais.",
            "action": "Combiner immédiatement avec le beurre — le persil commencera à s'oxyder et à s'assombrir s'il reste trop longtemps."
          },
          {
            "state": "Overdone",
            "description": "Le persil a été travaillé si longtemps qu'il est devenu sombre, oxydé vert olive et a perdu son parfum frais.",
            "action": "Continuez. La saveur est un peu moins brillante mais toujours excellente. Pour la prochaine fois, hacher juste avant de combiner avec du beurre."
          }
        ]
      },
      "feelCue": "Exécutez le plat de la lame à travers le persil haché — à la bonne finesse, il frottera légèrement sur la planche, laissant un film vert. Cette libération de jus est le signal qu'elle est assez bien."
    },
    {
      "nodeId": "step_2",
      "action": "Crémer",
      "inputs": [
        "ing_01",
        "minced_aromatics",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "compound_butter_mixture",
      "instructions": "Mettre le beurre doux dans un bol moyen. Battez - le brièvement avec une cuillère en bois ou une spatule de silicone jusqu'à ce qu'elle soit lisse et légèrement molle — n'utilisez pas de mélangeur, qui incorpore trop d'air. Ajouter le persil haché et l'échalote, le zeste de citron, le jus de citron, le sel et le poivre blanc en même temps. Battre ensemble jusqu'à ce qu'il soit complètement et uniformément combiné — le beurre doit être uniformément vert du persil, sans traces blanches de beurre uni restant, et doit sentir intensément le persil et le citron. Ajouter le jus de citron lentement si le beurre commence à avoir l'air légèrement humide ou cassé — l'acide citrique à des quantités élevées peut provoquer la rupture du beurre. Goût pour l'assaisonnement : le beurre cru doit être assaisonné de façon agressive — généreusement salé et citronné — car lorsqu'une tranche froide fond sur des aliments chauds, l'effet de dilution de la chaleur adoucit considérablement ces saveurs.",
      "visualCue": {
        "primaryTarget": "Beurre uniformément vert, légèrement moelleux, intensément parfumé — pas de stries blanches, pas de morceaux visibles d'échalote, persil réparti uniformément dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches de beurre clair encore visibles — aromatiques pas uniformément distribués.",
            "action": "Continuer à battre jusqu'à ce que chaque bande de blanc soit incorporée et la couleur est uniforme vert."
          },
          {
            "state": "Perfect",
            "description": "Uniforme vert vif, léger et légèrement moelleux, sent intensément le persil frais et le citron. Goûts brillants, salés et citronnés.",
            "action": "Transférer sur film de collage et rouler dans un cylindre."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a été battu trop longtemps et semble séparé ou gras — la graisse de beurre commençant à rompre avec la suragitation.",
            "action": "Réfrigérer pendant 10 minutes jusqu'à ce qu'il ferme légèrement, puis plier doucement. La forme du cylindre et le refroidissement récupéreront la texture."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité de beurre composé sur votre bout de doigt — il devrait fondre rapidement de la chaleur corporelle et laisser un revêtement complet et complexe: richesse crémeuse, citron clair, persil à base de plantes, et une finale de sel propre tout présent à la fois."
    },
    {
      "nodeId": "step_3",
      "action": "Réfrigérer",
      "inputs": [
        "compound_butter_mixture"
      ],
      "outputState": "finished_maitre_dhotel_butter",
      "instructions": "Poser un morceau de film de collage (enveloppe plastique) d'environ 30 cm de long sur la surface de travail. Déposer le beurre composé dans un cylindre brut le long du centre de l'enveloppe, d'environ 4 à 5 cm de diamètre. Plier l'enveloppe sur le beurre, puis le rouler loin de vous tout en appuyant doucement sur le rouleau à travers l'enveloppe pour le compacter dans un cylindre serré, même — la même technique utilisée pour une saucisse. Tordre les extrémités comme un enveloppement de craquelins et les attacher ou les coller. Réfrigérer pendant au moins 1 heure jusqu'à ce qu'il soit complètement ferme. Le beurre reste réfrigéré jusqu'à 1 semaine ou congelé pendant 2 mois. Pour servir : défaire et couper en rondelles de 5 à 8 mm d'épaisseur avec un couteau tranchant. Placez un disque froid directement sur un steak, un morceau de poisson grillé, ou des légumes cuits à la vapeur – il fondra dans une piscine de beurre aromatique et citronné en 30 secondes.",
      "visualCue": {
        "primaryTarget": "Un cylindre vert ferme, serré et uniforme qui tranche en rondelles parfaites sans écroulement ni déchirement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore doux et le cylindre saigne ou squash plutôt que de tenir sa forme lorsqu'il est tranché.",
            "action": "Réfrigérer encore 30 minutes jusqu'à ce qu'il soit suffisamment ferme pour trancher proprement."
          },
          {
            "state": "Perfect",
            "description": "Ferme et froide, tranche en rondelles qui tiennent leur forme circulaire. Vert vif, sans taches blanches. Des odeurs de persil et de citron même à froid.",
            "action": "A conserver réfrigéré. Couper pour commander et mettre sur la nourriture chaude à servir."
          },
          {
            "state": "Overdone",
            "description": "Il est trop froid et très dur: il se brise plutôt que de scier proprement, et les morceaux se dispersent.",
            "action": "Laisser reposer le cylindre à température ambiante de 3 à 4 minutes pour ramollir légèrement, puis couper."
          }
        ]
      },
      "feelCue": "Un beurre de maître d'hôtel correctement réfrigéré devrait se sentir comme de l'argile à modeler froide — ferme et donnant un peu sous pression ferme, en étirant avec un son propre à travers une lame tranchante plutôt que de s'effondrer ou de frotter."
    }
  ]
};
