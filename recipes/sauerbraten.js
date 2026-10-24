export default {
  "repoId": "master_german_sauerbraten_001",
  "parentRepoId": null,
  "slug": "sauerbraten",
  "author": "ForkRecipe Kitchen",
  "title": "Rhénanie Sauerbraten",
  "description": "La noblesse allemande de rôtissage — le bœuf mariné pendant trois à quatre jours dans le vinaigre de vin rouge, le vin et un radeau d'aromates jusqu'à ce que la ronde extérieure dure se transforme en quelque chose de soyeux, puis braisé bas et lent avec des gingembres émiettés agités dans la sauce pour une richesse hantante et douce-sour propre à la Rhénanie.",
  "cuisine": "Allemand",
  "culture": "Rhénanie Allemand",
  "category": "proteins",
  "tags": [
    "boeuf",
    "allemand",
    "braise",
    "vinaigre",
    "marinade",
    "Cuisson lente",
    "confort"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "4 days (marinade)",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Boeuf rond inférieur ou rond supérieur (environ 1,5 kg, attaché)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "rôti de poulet de bœuf (plus marbré, résultat plus riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de cidre (mineur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin rouge sec",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin rouge supplémentaire + 100ml d'eau"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, tranché approximativement",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Pâtes de céleri, hachées approximativement",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Carotte, grossièrement hachée",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "baies de genièvre, légèrement broyées",
      "ratioValue": 8,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 10,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Fat",
      "name": "Lard ou huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "suif de bœuf",
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Sweetener",
      "name": "Gingersnap cookies (lebkuchen ou gingembre), émietté",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à soupe de pain au seigle foncé miettes + 1 c. à thé de miel + 0,5 c. à thé de gingembre moulu"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Dairy",
      "name": "Crème acide (facultatif, pour la finition)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Crème fraîche"
      ]
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
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "marinated_beef",
      "instructions": "Ne pas chauffer la marinade — une marinade froide est traditionnelle pour le sauerbraten. Combiner le vinaigre de vin rouge, le vin rouge, l'eau, l'oignon, le céleri, la carotte, les feuilles de laurier, les baies de genièvre, les girofles, les grains de poivre, le sucre et le sel dans un grand bol ou un pot non réactif (verre, céramique ou acier inoxydable — jamais aluminium ou fonte à ce stade). Incorporer jusqu'à dissolution du sel et du sucre. Submerger le bœuf complètement, le presser. Couvrir d'enveloppe en plastique et réfrigérer pendant 3 à 4 jours, tourner la viande une fois par jour afin que tous les côtés marinent uniformément.",
      "visualCue": {
        "primaryTarget": "Après 3 jours, la surface du boeuf est passée du rouge vif à un brun grisâtre terne de tous les côtés – l'acide a pénétré l'extérieur de 1 à 2 cm de viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 1 jour : le boeuf est encore rouge vif. Seule la surface est légèrement décolorée. La saveur sera douce et la texture ne sera pas encore transformée.",
            "action": "Retournez au réfrigérateur. La magie de Sauerbraten demande du temps. Un minimum de 3 jours n'est pas négociable pour les saveurs authentiques de la Rhénanie."
          },
          {
            "state": "Perfect",
            "description": "Après 3 à 4 jours : 2 cm de bœuf sont uniformément gris-brun de l'acide. La marinade sent complexe: aigre, épicée, et vin foncé. La viande est nettement plus ferme et plus dense que le boeuf cru.",
            "action": "Retirez de la marinade, tapez très sec, et filtrez la marinade à travers un tamis, en réservant tout le liquide."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 5 jours : l'acide a pénétré plus loin et la viande de surface commence à devenir farineuse et très molle. La marinade sent fortement acide.",
            "action": "Continuez — la louange sauvera la texture. La saveur sera très piquante; les gingembres deviennent encore plus critiques pour l'équilibre."
          }
        ]
      },
      "feelCue": "Le troisième jour, appuyez sur la surface de la viande de bœuf avec un doigt — elle est plus dense et légèrement plus serrée que la viande fraîche, presque comme de la viande guérie. Cette résistance vous dit que l'acide a fait son travail."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "marinated_beef",
        "ing_14"
      ],
      "outputState": "seared_beef",
      "instructions": "Enlevez le bœuf de la marinade et tapez - le complètement sec avec des serviettes en papier — l'humidité est l'ennemi d'une bonne couture. Retirez et réservez tout le liquide marinade. Chauffer le saindoux ou l'huile dans un four hollandais lourd ou faire chauffer le pot à feu vif jusqu'à ce qu'il commence à fumer. Semer le bœuf de tous les côtés, y compris les extrémités, pendant 3 à 4 minutes de chaque côté sans le déplacer. Vous construisez une croûte brun foncé pour la couleur et la saveur, la croûte de Maillard se dissout dans le liquide de cuisson et devient l'épine dorsale de la sauce.",
      "visualCue": {
        "primaryTarget": "Toutes les surfaces du boeuf sont uniformément profondes acajou-brun sans taches grises ou blondes. Le fond du pot a un fond brun foncé collé à lui.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est blonde ou gris pâle sur certains côtés, encore humide dans les taches. Le fond du pot est fin et pâle.",
            "action": "Continuer la mise en mer, en s'assurant que la chaleur est élevée et que la surface est sèche. Ne vous précipitez pas: une couture pâle produit une sauce pâle et plat."
          },
          {
            "state": "Perfect",
            "description": "Une croûte acajou profonde de tous les côtés. Le pot a un riche fond sombre. La cuisine sent le boeuf caramélisé et l'épice. La viande s'étourne fort quand chaque côté contacte la poêle.",
            "action": "Retirer le boeuf et réserver. Jeter la graisse brûlée si elle est sombre; laisser si elle est dorée."
          },
          {
            "state": "Overdone",
            "description": "Certaines parties de la croûte sont noires. Une odeur brûlée et acride dans la cuisine. Le fond du pot est noir.",
            "action": "Essuyer le fond brûlé de la casserole avant d'ajouter la marinade, ou il fera tourner la sauce amère."
          }
        ]
      },
      "feelCue": "Un côté bien scellé libère du pot avec zéro collant lorsque vous essayez de le soulever — la croûte a formé un joint sec. Si ça colle et ça déchire, il lui faut 60 secondes de plus."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "seared_beef",
        "marinated_beef"
      ],
      "outputState": "braised_sauerbraten",
      "instructions": "Retournez le bœuf au pot. Verser la marinade tendue sur elle — le liquide devrait venir au moins à mi - haut des côtés de la viande. Faire mijoter légèrement à feu moyen, puis couvrir d'un couvercle serré et réduire à la chaleur la plus faible possible (ou transférer à un four à 160°C). Braser de 2,5 à 3 heures, tourner le bœuf toutes les 45 minutes. La viande est faite lorsqu'une fourche sculptante glisse sans résistance, et les fibres commencent à se séparer lorsqu'elles sont pressées.",
      "visualCue": {
        "primaryTarget": "Le boeuf est brun foncé partout, visiblement éparpillé de sa taille brute. Une fourche sculptante glisse dans et hors du point le plus épais sans résistance, comme le beurre chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La fourche rencontre une résistance importante au centre. La température interne est inférieure à 90°C. Les fibres sont toujours tricotées étroitement.",
            "action": "Remplacer le couvercle et continuer la cuisson. A cette température basse et basse, 30 minutes de plus peuvent transformer entièrement la texture."
          },
          {
            "state": "Perfect",
            "description": "La fourche glisse sans effort. La viande déchique aux bords avec un doux coup de pouce. Le liquide de braisage est sombre et parfumé. La température interne est de 93–97°C.",
            "action": "Retirer le bœuf et réserver, couvert de papier, pendant que vous faites la sauce."
          },
          {
            "state": "Overdone",
            "description": "La viande s'est effondrée et s'effondre. Les fibres sont complètement lâches et le rôti ne peut pas tenir sa forme pour trancher.",
            "action": "Servez-le tiré ou déchiqueté plutôt que tranché. La saveur n'est pas affectée, elle est sans doute encore meilleure."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle après 2 heures et pressez le bœuf avec votre doigt à travers une serviette de cuisine pliée – parfait sauerbraten donne comme de la mousse de mémoire, ressortant très lentement. Si ça revient vite, il lui faut plus de temps."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "braised_sauerbraten",
        "ing_15",
        "ing_16"
      ],
      "outputState": "finished_sauerbraten_sauce",
      "instructions": "Retirer le bœuf et garder au chaud sous le papier. Verser tout le liquide de cuisson à travers une fine passoire dans une grande casserole — jetez les aromatiques usés. Porter le liquide à ébullition vigoureuse et réduire d'un tiers, environ 10 minutes. Incorporer les gingembres et fouetter à feu moyen jusqu'à ce qu'ils se dissolvent complètement et que la sauce s'épaississe sensiblement à une consistance de revêtement. Goûtez à l'équilibre: il doit être doux, aigre, chaud avec des épices et profondément salé. Si elle est trop goudronneuse, ajoutez un autre gingembre émietté. Hors du feu, remuer la crème aigre en cas d'utilisation et réchauffer doucement sans bouillir.",
      "visualCue": {
        "primaryTarget": "La sauce recouvre le dos d'une cuillère dans une couche de mahogany brun brillant qui ne s'écoule pas immédiatement lorsque la cuillère est maintenue debout. Les gingembres ont disparu entièrement dans la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, qui sort de la cuillère comme de l'eau colorée. Gingersnaps reste visible sous forme de grumeaux ou de taches pâles.",
            "action": "fouetter vigoureusement à feu moyen pendant encore 3 à 4 minutes. Ajouter un autre gingembre émietté si l'épaisseur manque."
          },
          {
            "state": "Perfect",
            "description": "Consistance de la nappe — enrobe une cuillère proprement. Acajou profond de couleur, brillant et complexe: aigre, doux, épicé, et charnu tout à la fois.",
            "action": "Couper le boeuf reposé contre le grain et servir avec la sauce, aux côtés des boulettes de pommes de terre (Knödel) ou du chou rouge braisé."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin — elle est épaisse, collante et très sucrée à partir des sucres concentrés de gingembre. Un peu collant sur la cuillère.",
            "action": "Ajouter une touche de liquide de cuisson ou d'eau chaude et fouetter pour se détendre à la consistance souhaitée."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la sauce — il devrait laisser un manteau visible et brillant sur votre bout de doigt qui s'accroche pendant quelques secondes plutôt que de s'enfiler. Ce film est la gélatine émulsifiée, la graisse et l'amidon gingembre qui lie la douceur de la Rhénanie à une seule chose."
    }
  ]
};
