export default {
  "repoId": "master_universal_lacto_fermented_carrots_001",
  "parentRepoId": null,
  "slug": "lacto-fermented-carrots",
  "author": "ForkRecipe Kitchen",
  "title": "Carottes lacto-fermentées",
  "description": "Le ferment de porte — carottes entières ou lances immergées dans une saumure de 2 % de sel avec de l'ail et de l'aneth, laissé à la bactérie lactobacillus qui vit sur la peau de chaque légume. En une semaine, la saumure devient aigre et trouble, les carottes passent de crus et aigus à quelque chose d'agréablement tanné, toujours croquant et probiotique. Assez simple pour être votre premier ferment ; assez satisfaisant pour être votre centième.",
  "cuisine": "Universel",
  "culture": "Traditionnel",
  "category": "fermented",
  "tags": [
    "fermenté",
    "légumes",
    "lactofermentés",
    "végétalien",
    "Sans gluten",
    "probiotique"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "7 day",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Carottes, épurées (favorité non pelée)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Carottes pelées",
        "carottes arc-en-ciel",
        "Carottes pour bébés (en entier)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer non iodé ou sel casher (2 % du poids de l'eau)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sel de décapage — sel de table jamais iodé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Eau filtrée ou non chlorée",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source bouillie et refroidie"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail, pelées et légèrement cassées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé poudre d'ail (faible)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Graines d'aneth fraîches",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé d'aneth séché",
        "graines d'aneth",
        "frondes de fenouil frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de poivre rouge pour la chaleur",
        "Graines de coriandre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer la saumure",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "salt_brine",
      "instructions": "Mesurer l'eau filtrée en poids — la précision est importante ici. Calculer 2% du poids de l'eau dans le sel non iodé : pour 500 g d'eau, soit 10 g de sel. Mélanger le sel et l'eau dans un pot ou une tasse de mesure et remuer jusqu'à dissolution complète, au moins 30 secondes de brassage vigoureux. La saumure peut être faite à température ambiante — pas de chauffage nécessaire, ce qui préserve le lactobacillus sensible au chlore s'il est présent dans l'eau. Ne jamais utiliser de sel de table iodé, qui contient de l'iode ajouté précisément pour inhiber la croissance microbienne — il ralentira ou tuera votre fermentation. Goûtez la saumure finie : elle doit goûter agréablement salée, comme de l'eau de mer douce.",
      "visualCue": {
        "primaryTarget": "Eau complètement limpide, légèrement salée sans cristaux ni nuage, sentant de l'eau salée propre. Chaque grain dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cristaux de sel encore visibles au fond de l'eau; la saumure sera sous-salée au sommet et sur-salée au fond.",
            "action": "Continuez à remuer jusqu'à ce que vous ne puissiez plus voir de cristaux. Tenez le pot jusqu'à la lumière pour vérifier — le sel non dissous ressemble à des paillettes au fond."
          },
          {
            "state": "Perfect",
            "description": "Cristal clair, complètement uniforme, goûtant légèrement salé sans aucune dureté. Sel complètement dissous.",
            "action": "Réserver et préparer les carottes. La saumure est prête à être utilisée immédiatement à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Utilisez de l'eau chaude pour dissoudre le sel rapidement, et la saumure est encore chaude.",
            "action": "Refroidir complètement avant de verser sur les carottes. La saumure chaude adoucit immédiatement les carottes et tue les bactéries bénéfiques à la surface des légumes."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la saumure et frottez-le : pas de grain, pas de cristaux. Il devrait se sentir exactement comme de l'eau légèrement salée — lisse, propre, uniforme."
    },
    {
      "nodeId": "step_2",
      "action": "Préparation et emballage",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "salt_brine"
      ],
      "outputState": "packed_jar",
      "instructions": "Frotter les carottes sous l'eau froide avec un pinceau, mais ne pas peler — la peau et les poils sur la peau portent le lactobacillus sauvage qui va conduire à la fermentation. Coupez le haut et le bas. Couper les carottes en lances en les réduisant en deux dans le sens de la longueur, ou laisser les carottes minces entières. L'objectif est de les mettre debout dans un pot de maçon à large bouche, suffisamment serrés pour qu'ils restent sous la saumure. Coucher d'abord les brins d'aneth et les grains de poivre, puis coincer dans les gousses d'ail entre les lances de carottes. Emballez les carottes aussi étroitement que possible — la compression ralentit le flottement. Verser la saumure, tout submerger complètement. Laissez 3 à 4 cm de l'espace tête et appuyez sur un petit morceau de carotte plié sur le dessus pour agir comme un poids.",
      "visualCue": {
        "primaryTarget": "Un pot serré de lances de carotte orange debout, entrecoupé d'aneth verte et de girofles d'ail pâle, immergé dans une saumure claire. Le pot semble ordonné et dense.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Carottes mollement emballées avec de grandes poches d'air et la moitié du pot non rempli, flottant librement au-dessus de la saumure.",
            "action": "Reconditionner plus étroitement — les carottes devraient résister à être poussées. Plus le paquet est serré, plus ils restent submergés. En prime avec plus de saumure si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Carottes debout et dressées, entièrement recouvertes d'au moins 1 cm de saumure, pas de grands espaces d'air. Le pot est lourd et plein.",
            "action": "Couvrir d'un couvercle ou d'un chiffon lâche et fixer à température ambiante pour commencer à fermenter."
          },
          {
            "state": "Overdone",
            "description": "Jarre rempli au bord sans espace de tête laissé pour l'expansion du CO2.",
            "action": "Retirer une saumure pour créer 3 à 4 cm d'espace de tête. Un pot sans espace de tête va faire sauter la saumure du couvercle et peut créer une pression."
          }
        ]
      },
      "feelCue": "Après avoir emballé, appuyez sur toutes les carottes avec des doigts propres — elles devraient résister et revenir légèrement. La saumure doit se lever pour les couvrir lorsqu'elle est pressée. Si les dessus de carottes sont au-dessus du niveau de saumure, ils moudront: les peser."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "packed_jar"
      ],
      "outputState": "fermented_carrots",
      "instructions": "Réglez le pot à température ambiante, de 18 à 22°C, hors du soleil direct, pendant 5 à 7 jours. Couvrez - vous lâchement — un chiffon, un couvercle ou un sas — pour que le CO2 puisse s'échapper, mais que les mouches de fruits ne puissent pas entrer. Appuyez une fois par jour sur les carottes sous la saumure avec une fourchette ou une cuillère propre; le gaz les soulève au fil du temps. Goûtez tous les jours à partir du jour 3 : la saumure s'amera progressivement lorsque l'acide lactique se construit, et les carottes absorberont cette acidité. Une saumure blanche nuageuse et de minuscules bulles sont des signes sains. La levure de surface de kahm (plafond, film blanc) est inoffensive — écrémé et jeté. Tout moule flou, relevé ou coloré signifie jeter tout le lot.",
      "visualCue": {
        "primaryTarget": "Saumure blanche laiteuse et nuageuse pleine de petites bulles, de carottes orange brique qui s'adoucissent légèrement mais conservent leur structure, et d'un arôme nettement acide-lacto remplaçant l'odeur végétale crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 3 à 4 jours : saumure encore claire, les carottes ont encore un goût cru et salé sans note aigre, avec un minimum de bouillonnement.",
            "action": "Soyez patient et déplacez le pot quelque part légèrement plus chaud. La lactofermentation peut être lente dans les cuisines fraîches — 20°C est idéal; en dessous de 15°C elle s'arrête presque."
          },
          {
            "state": "Perfect",
            "description": "La saumure est blanche-éclairée, bouillonnant doucement, et sent agréablement aigre et ailky. Les carottes ont un goût tannant et lumineux avec une croûte conservée, le sel maintenant intégré plutôt que dur.",
            "action": "Goûtez au jour 5 et encore au jour 7. Une fois que vous êtes satisfait de l'aurore, scellez étroitement et réfrigérez pour arrêter la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Après 10 jours ou plus à des températures chaudes : la saumure est agressivement aigre, les carottes sont douces et molles, la saveur est unidimensionnellement acide.",
            "action": "Encore comestible; l'aurore est très utile pour cuisiner: couper en plats de riz, en ragoûts ou en régals. Pour le grignotage, fermentez pour une durée plus courte."
          }
        ]
      },
      "feelCue": "Ouvrez le pot au jour 5 et écoutez : un léger sifflement de gaz est un signe sain. La saumure doit sentir agréablement aigre et ailée, non éteinte, pourrie ou alcoolique. Appuyez sur une lance de carottes entre deux doigts à travers le verre — il doit se sentir ferme avec juste un léger donner, pas dur et cru ou doux et musclé."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer et âge",
      "inputs": [
        "fermented_carrots"
      ],
      "outputState": "finished_fermented_carrots",
      "instructions": "Lorsque les carottes ont atteint l'aurore que vous préférez — généralement agréablement bronzée mais encore reconnaissablement carotte — scellez bien le pot et déplacez - le au réfrigérateur. Les températures froides ralentissent la fermentation de façon spectaculaire, mais ne l'arrêtent pas entièrement : les carottes continueront à s'acider lentement au cours des semaines, devenant plus complexes et plus amusantes avec l'âge. Ils sont immédiatement comestibles sur réfrigérants mais sont souvent meilleurs à la marque de 2 à 4 semaines, lorsque les saveurs ont eu le temps de se fondre et la saumure a pleinement pénétré la chair de carottes. Ils restent réfrigérés jusqu'à 3 mois.",
      "visualCue": {
        "primaryTarget": "Des lances de carottes froides, fermes et agréablement oranges dans une saumure nuageuse et aigre - vibrante de couleur, tenant toujours leur forme, avec l'ail et l'aneth parfumant chaque bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Juste déplacé au réfrigérateur après seulement 3 jours: toujours très salé, à peine aigre, dégustation principalement de carottes crues avec un bord sel.",
            "action": "Donnez-leur 3 à 4 jours de plus à température ambiante avant de réfrigérer, ou simplement attendre — ils continueront à amer lentement dans le réfrigérateur, juste plus graduellement."
          },
          {
            "state": "Perfect",
            "description": "Agréablement aigre et acidulé, la douceur des carottes est équilibrée avec l'acide lactique, l'ail et l'aneth présents mais intégrés. La croûte est retenue. La saumure elle-même est potable — aigre, savore, légèrement effervescente.",
            "action": "Profitez en collation, dans des bols à grains, sur des sandwichs ou à côté de viandes grillées. Réservez la saumure pour les pansements."
          },
          {
            "state": "Overdone",
            "description": "Après des mois au réfrigérateur, les carottes sont douces, très acides, et ont absorbé tellement de saumure qu'elles ont plus de goût de ferment que de carotte.",
            "action": "Coupez-les en plats cuits — riz frit, salade de pommes de terre ou soupe de lentilles — où leur intensité devient un atout."
          }
        ]
      },
      "feelCue": "Une carotte parfaitement fermentée à la température du réfrigérateur doit se casser lorsque mordue, libérant un éclat de saumure froide et salée avant que la douceur de la carotte n'arrive. Cette séquence — croquante, aigre, douce — est le lactoferment parfait en une seule bouchée."
    }
  ]
};
