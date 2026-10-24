export default {
  "repoId": "master_american_ginger_switchel_001",
  "parentRepoId": null,
  "slug": "ginger-switchel",
  "author": "ForkRecipe Kitchen",
  "title": "Interrupteur de gingembre",
  "description": "La boisson du foin de la Nouvelle - Angleterre coloniale — vinaigre de cidre de pomme, gingembre cru, et un édulcorant dissous dans l'eau froide dans un arbuste de tarte, de feu, peu terreux que les agriculteurs buvaient dans le champ pour couper la chaleur et éteindre la soif d'une manière que l'eau pure ne pouvait jamais. Au-dessus de la glace, il se brise à la langue, puis laisse une chaleur de gingembre s'étendre dans la poitrine.",
  "cuisine": "Américain",
  "culture": "Colonial New England / Tradition populaire des Appalaches",
  "category": "beverages",
  "tags": [
    "Interrupteur",
    "américains",
    "gingembre",
    "vinaigre",
    "boire",
    "coloniale",
    "arbuste",
    "électrolyte"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "2 hr 10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme cru (avec la mère)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc (plus propre, moins complexe)",
        "sirop d'arbuste de votre choix"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Racines de gingembre fraîches, râpées finement (ou jus)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre moulu (1/4 de la quantité, moins brillant)",
        "galangal pour une note plus florale"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Strap noir ou mélasse foncée (traditionnelle) OU sirop d'érable pur",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie",
        "sucre brun",
        "piloncillo"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "de l'eau pétillante pour un bouton vert"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Jus de citron, fraîchement pressé (facultatif — pour plus de luminosité)",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "switchel_concentrate",
      "instructions": "Dans un petit pot ou bol, mélanger le vinaigre de cidre de pomme, le gingembre fraîchement râpé et la mélasse (ou sirop d'érable). Agiter vigoureusement jusqu'à ce que la mélasse soit complètement dissoute; la mélasse dans le liquide froid est têtu et tend à couler dans une corde lourde et sombre. Chauffer brièvement le pot dans un bol d'eau chaude (pas chaude) pendant 1 à 2 minutes si la mélasse refuse de s'incorporer à la température ambiante. Goûtez le concentré : il doit être amer du vinaigre, feu du gingembre cru et doux de la mélasse, avec la profondeur minérale, presque comme du fer, que la mélasse blackstrap apporte. Ce concentré est intentionnellement écrasant, il est conçu pour être dilué avec 8 parties d'eau. Le vinaigre cru de cidre de pomme non filtré apporte des probiotiques et une ameresse complexe et légèrement levure que le vinaigre pasteurisé ne peut pas reproduire. Si vous utilisez du gingembre râpé brut, les fibres fines restent dans la boisson — certaines personnes aiment cette texture; si vous préférez une boisson plus propre, appuyez sur le gingembre râpé à travers un tamis fin et n'utilisez que le jus.",
      "visualCue": {
        "primaryTarget": "Un concentré brun-ambre foncé, uniformément mélangé. La mélasse est complètement dissoute sans stries sombres au fond. Le mélange sent fortement le vinaigre, le gingembre et le caramel foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Molasses visibles sous forme de stries foncées ou d'une couche fixe en bas. Le concentré n'est pas uniforme.",
            "action": "Mélanger plus vigoureusement, ou réchauffer doucement et remuer jusqu'à dissolution."
          },
          {
            "state": "Perfect",
            "description": "Uniformement brun-ambre foncé, entièrement mélangé. Ça coule bien. L'odeur est affirmée: vinaigre vif, gingembre chaud, mélasse douce foncée. Pas de solides visibles sauf les fibres de gingembre.",
            "action": "Ajouter l'eau froide et le jus de citron."
          },
          {
            "state": "Overdone",
            "description": "Impossible de trop mélanger ce concentré.",
            "action": "Ajuster l'équilibre : si trop acide, ajouter plus d'édulcorants ; si trop sucré, ajouter un peu plus de vinaigre."
          }
        ]
      },
      "feelCue": "Les fumées du concentré seul devraient faire vos yeux arroser légèrement et votre nez piquant — l'acide acétique dans le vinaigre et les gingembres dans le gingembre brut sont à la fois irritants volatils, et ensemble ils annoncent la boisson avant qu'elle n'atteigne vos lèvres."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "switchel_concentrate"
      ],
      "outputState": "rested_concentrate",
      "instructions": "Couvrir le concentré et réfrigérer pendant au moins 2 heures, idéalement pendant la nuit. Cette période de repos permet aux composés volatils du gingembre de s'infiltrer complètement dans le vinaigre acide — l'acide agit comme un extracteur doux, tirant les gingembres et les shogaols (les molécules aromatiques piquantes) des fibres de gingembre râpées et dans le liquide. Le résultat est un concentré aromatisé au gingembre plus profond que fraîchement mélangé. Le vinaigre adoucit également les bords crus du gingembre pendant cette période, le rendant plus arrondi sans perdre la chaleur. Après le repos, le concentré s'est légèrement obscurci et le gingembre s'est posé au fond. L'arôme après le repos est plus complexe — la seule note de vinaigre pointu s'est ouverte dans quelque chose avec la profondeur boisée de gingembre en dessous. Cette étape est facultative mais recommandée pour la meilleure saveur.",
      "visualCue": {
        "primaryTarget": "Le concentré après le repos devrait ressembler au même mais sentir beaucoup plus complexe — un arôme de gingembre plus profond avec la netteté du vinaigre plus intégré que dominant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 30 minutes de repos. Le gingembre est présent, mais encore aiguisé et goûtant cru plutôt que infusé.",
            "action": "Donne-lui plus de temps. La nuit de repos en vaut la peine."
          },
          {
            "state": "Perfect",
            "description": "Après 2+ heures, le concentré sent profondément le gingembre avec le vinaigre maintenant une note de support. La saveur d'un petit goût est complexe, tarte, feu et sucré tout à la fois.",
            "action": "La souche si désiré, puis diluer à l'eau froide."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 48 heures. Le gingembre a commencé à goûter légèrement fermenté et le concentré est très foncé.",
            "action": "Soudure immédiatement et utiliser. La saveur est plus intense mais peut être trop forte pour certains — diluée avec de l'eau supplémentaire."
          }
        ]
      },
      "feelCue": "Ouvrez le récipient après le repos — l'arôme doit dériver lentement, chaud et piquant, comme quelqu'un a ouvert un tiroir à épices. Il devrait sentir moins dur et plus complexe que quand vous l'avez mélangé la première fois."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "rested_concentrate",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_switchel",
      "instructions": "Placer le concentré à travers un tamis à mailles fines dans un grand pot ou un pichet pour enlever les fibres de gingembre (facultatif – laissez-les pour un switchel plus rustique et texturé). Ajouter l'eau froide et le jus de citron. Bien mélanger et goûter : le switchel fini doit être tarte et rafraîchissant, avec une chaleur de gingembre de construction, une note douce propre, et l'aurence complexe du vinaigre de cidre en arrière-plan. Ajuster : plus d'eau si elle est trop forte, plus d'édulcorants si elle est trop forte, presser plus de citron si elle se sent plate. Servir immédiatement sur beaucoup de glace — le switchel n'est pas une boisson à température ambiante. Garnir d'une tranche de gingembre frais et d'un brin de menthe si désiré. Le concentré non dilué se conserve réfrigéré pendant 2 semaines; le switchel dilué est mieux consommé dans les 3 jours.",
      "visualCue": {
        "primaryTarget": "Une boisson froide claire à légèrement ambrée qui verse comme de l'eau mais laisse un léger éclat. Au-dessus de la glace, il devrait avoir l'air croustillant et rafraîchissant, pas agité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore trop concentrée — la boisson est très aigre et la chaleur de gingembre est écrasante. Ne bois pas plus qu'une petite gorgée.",
            "action": "Ajoutez plus d'eau froide, une éclaboussure à la fois, en dégustant au fur et à mesure."
          },
          {
            "state": "Perfect",
            "description": "Tart, rafraîchissant, complexe. La aigre frappe d'abord, puis la douceur, puis une chaleur de gingembre lente se construit dans la poitrine. Profondément étanche, le genre de boisson qui vous fait vraiment vous sentir mieux par une journée chaude.",
            "action": "Servir sur la glace immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop dilué, il a un goût d'eau peu aromatisée avec un soupçon d'ameresse. Le personnage a été effacé.",
            "action": "Ajouter une petite éclaboussure de concentré pour réintensifier la saveur."
          }
        ]
      },
      "feelCue": "Prenez une longue gorgée et maintenez-la pendant 2 secondes avant d'avaler — l'aurence devrait enrober toute votre bouche et ensuite la chaleur de gingembre devrait s'étendre de votre gorge dans votre poitrine comme une braise lente et étalée. Cette chaleur retardée est le switchel faisant exactement ce dont les foins avaient besoin un après-midi de juillet."
    }
  ]
};
