export default {
  "repoId": "master_french_beurre_rouge_001",
  "parentRepoId": null,
  "slug": "beurre-rouge",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre Rouge",
  "description": "Les échalotes dissoutes dans une réduction quasi sèche du vin rouge et du vinaigre, puis montées, cube par cube patient, avec du beurre glacé et froid jusqu'à ce que l'ensemble devienne une émulsion brillante et veloutée qui est simultanément riche et acide, profondément colorée, et incroyablement élégante.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "français",
    "beurre",
    "sauce",
    "émulsion",
    "vin",
    "classique",
    "réduction"
  ],
  "difficulty": 4,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Vin rouge sec (Pinot Noir ou Côtes du Rhône)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "un Merlot robuste, Cabernet dans une pincée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sherry pour un acide plus rond"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes coupées en dés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre froid non salé, coupé en cubes de 1 cm",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir si blanc non disponible"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Thym frais",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Couper en dés",
      "inputs": [
        "ing_03"
      ],
      "outputState": "minced_shallots",
      "instructions": "Peler les échalotes et les couper dans les meilleurs dés que vous pouvez gérer — cubes de 1-2 mm. Les échalotes doivent être suffisamment petites pour se dissoudre complètement dans la réduction, en disparaissant dans la sauce plutôt que de rester comme morceaux perceptibles. Plus grand dés ne fondra pas complètement et la sauce finie aura une qualité texturée désagréable. Tenez votre couteau parallèle à la planche à découper pour les coupes horizontales, puis travaillez à travers les coupes verticales avant de couper.",
      "visualCue": {
        "primaryTarget": "Un dés fin et uniforme — les morceaux si petits qu'ils sont presque translucides contre la planche à découper. Pas de gros morceaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes échalotes irrégulières, de plus de 5 mm, quelle que soit leur dimension. Ils ne se dissoudreont pas dans le temps de réduction et créeront de la texture dans la sauce finie.",
            "action": "Retour à la planche et plus fin. Une beurre rouge avec des échalotes perceptibles est une défaillance technique."
          },
          {
            "state": "Perfect",
            "description": "Des dés très fins et uniformes — les pièces sont presque transparentes contre la planche, de taille uniforme à 1-2 mm. Ils sentent l'allium doux et vif.",
            "action": "Passez à la réduction."
          },
          {
            "state": "Overdone",
            "description": "Si fine qu'ils sont devenus une pâte humide et juteuse collée au couteau.",
            "action": "C'est bien, même souhaitable. La pâte se dissout facilement dans la réduction. Continuez."
          }
        ]
      },
      "feelCue": "Les morceaux d'échalote devraient tomber du bout des doigts comme des confettis fins et piquants — chaque morceau est distinct mais à peine plus grand qu'un grain de riz."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "ing_01",
        "ing_02",
        "minced_shallots",
        "ing_07"
      ],
      "outputState": "wine_reduction",
      "instructions": "Mélanger le vin rouge, le vinaigre de vin rouge, les échalotes hachées et le thym dans une grande casserole à fond lourd. Porter à ébullition forte à feu moyen-vif, puis laisser mijoter. Cuire à découvert, en tourbillonnant de temps à autre, jusqu'à ce que le liquide ait réduit à environ 2-3 cuillères à soupe — une glaçure sombre et sirupeuse qui recouvre à peine le fond de la poêle. Les échalotes devraient être complètement translucides et se dissoudre presque dans la réduction. Enlevez le brin de thym. Cette réduction est l'épine dorsale de la saveur de la sauce — plus vous la réduisez fidèlement, plus le beurre rouge fini sera concentré et complexe.",
      "visualCue": {
        "primaryTarget": "Une très petite quantité de sirop de mahoganie pourpre profonde — couvrant à peine le fond de la poêle — avec les échalotes complètement translucides et adoucies, presque dissoutes. Le liquide est visqueux et se déplace lentement lorsque la casserole est inclinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore plusieurs cuillères à soupe de liquide mince. L'alcool cru et les notes de vinaigre pointu du vin n'ont pas cuit. Les échalotes sont encore opaques et fermes.",
            "action": "Continuer à réduire à feu moyen-élevé. Le volume devrait diminuer de 80-85%. L'impatience produit ici une sauce fine et pointue au bord alcoolique."
          },
          {
            "state": "Perfect",
            "description": "Une piscine sombre et presque sirupeuse — 2-3 cuillères à soupe au plus. Les échalotes sont translucides, tendres et presque dissoutes. L'odeur est profondément vineuse, douce-sour, et complexe avec aucune des fortes notes de haut d'alcool brut.",
            "action": "Enlevez le thym. Retirez le feu et commencez à monter le beurre. Travailler rapidement — la poêle doit être chaude mais pas chaude."
          },
          {
            "state": "Overdone",
            "description": "La réduction est complètement sèche et les échalotes commencent à frire et à caraméliser dans les sucres résiduels — vous pouvez sentir une faible note de sucre brûlé.",
            "action": "Retirer immédiatement du feu. Ajouter un jet de vin ou de vinaigre pour déglacer et restaurer une petite quantité de liquide. Faites attention."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — la réduction devrait se déplacer lentement, comme le sirop d'érable, en un seul coup. Si elle se déplace comme de l'eau, continuez à réduire. Si elle se met comme des bonbons que la poêle refroidit, elle est allée trop loin."
    },
    {
      "nodeId": "step_3",
      "action": "Monter au beurre",
      "inputs": [
        "wine_reduction",
        "ing_04"
      ],
      "outputState": "mounted_beurre_rouge",
      "instructions": "Déplacez la poêle du feu — ou sur la flamme la plus basse — et commencez à ajouter les cubes de beurre froid un à la fois, fouettant constamment et vigoureusement entre chaque ajout. Le beurre froid doit être vraiment froid (droit au réfrigérateur ou même au congélateur), et il doit être ajouté pièce par pièce, pas tout à la fois. Chaque cube refroidit légèrement la réduction tandis que la graisse s'émulsionne progressivement dans la base vin-hallot. Ajouter le prochain cube seulement lorsque le précédent a été entièrement fouetté et la sauce semble crémeuse et uniforme. Si la poêle est chaude au toucher — assez chaude pour étourdir une goutte d'eau —, retirez - la de la chaleur tout en continuant à fouetter. La sauce ne doit jamais dépasser 65°C ou se casser.",
      "visualCue": {
        "primaryTarget": "Une sauce lustrée, opaque, rouge bordeaux profond — la couleur du Pinot Noir vieilli — avec un éclat velouté et sans gouttelettes de graisse visible. Il devrait envelopper l'arrière d'une cuillère dans un film lisse, même.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux avec un broutage visible de beurre fondu sur la surface plutôt que d'émulsionner. La sauce semble cassée et translucide plutôt que crémeuse et opaque.",
            "action": "Baisser la chaleur agressivement et ajouter le beurre plus lentement, fouettant plus fort. L'émulsion nécessite une agitation soutenue et vigoureuse et une température contrôlée pour se former."
          },
          {
            "state": "Perfect",
            "description": "Crémeux, opaque, et un rubis-rouge profond. Il s'accroche au fouet dans une feuille lisse et brillante et tient cette couleur tout au long. La texture est entre hollandaise et crème lourde — plus riche que la première, plus épaisse que la seconde.",
            "action": "Assaisonner et écraser immédiatement. La sauce est prête."
          },
          {
            "state": "Overdone",
            "description": "La sauce est cassée : grasse, translucide, avec des piscines visibles de graisse de beurre séparée sur le dessus et un mince liquide acide sous. L'émulsion s'est effondrée de trop de chaleur.",
            "action": "Sauvetage : verser 2 cuillerées à soupe d'eau froide dans une poêle propre à feu très doux, puis fouetter la sauce cassée dans elle goutte à goutte comme si commencer frais. Des jus d'échalote froids ou une cuillerée de crème lourde peuvent également réémulsionner une beurre rouge cassée."
          }
        ]
      },
      "feelCue": "Le fouet doit croître progressivement plus lourd à mesure que chaque cube de beurre émulsifie. Le son passe d'une fine éclaboussure liquide à un frottis doux et épais. Si vous entendez la sauce commencer à cracher et à cracher plutôt que de murmurer, la poêle est trop chaude — le faire sortir immédiatement de la chaleur et continuer à fouetter."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "mounted_beurre_rouge",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_beurre_rouge",
      "instructions": "Passer la sauce dans un tamis à mailles fines sur un bol chaud, presser avec l'arrière d'une cuillère pour pousser à travers toute échalote dissoute tout en conservant les morceaux en morceaux. Assaisonner immédiatement de sel et de poivre blanc. La sauce doit être servie dans les minutes qui suivent sa fin, elle se brisera si elle est laissée trop longtemps dans la passoire ou trop refroidir dans le bol. Chauffer le bol à l'avance avec de l'eau chaude (sécher ensuite) pour prolonger la fenêtre. Pour tenir la sauce brièvement, mettre le bol sur une casserole d'eau chaude et fouetter à l'occasion.",
      "visualCue": {
        "primaryTarget": "Une sauce bordeaux lisse et profonde qui coule dans un ruban brillant — chaque particule échalote enlevée, la couleur uniforme et riche, la surface montrant un léger reflet. Servi au chaud sur une assiette préchauffée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux d'échalote sont encore visibles dans la sauce tendue, ou la sauce se refroidit déjà visiblement, commençant à se fixer aux bords du bol.",
            "action": "Appuyez plus fermement sur la sauce à travers le tamis. Chauffer immédiatement le bol de service si la sauce refroidit."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, rouge profond, brillant et revêtement. Le goût est à la fois riche et lumineux: tannin vineux profond en arrière-plan, beurre propre en avant, et une finition acide précise. Il fait la sieste de tout ce qu'il touche dans un gloss rouge bijoux.",
            "action": "Spoon immédiatement sur le poisson, le canard, ou un steak mariné. Ne le laissez pas s'asseoir."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est cassée dans le bol — le beurre s'est mis à la surface, la réduction du vin s'est séparée du fond, et la belle émulsion a disparu.",
            "action": "fouetter vigoureusement et rapidement pour secourir. S'il ne revient pas, considérez-le comme une bruine de type beurre composé — cuillerez-le lâchement sur la nourriture et le beurre et l'acide contribueront encore, même si l'émulsion est perdue."
          }
        ]
      },
      "feelCue": "Sur une cuillère chaude, le beurre rouge doit se sentir comme du velours liquide, indistinctement lisse, avec un poids et une richesse qui enveloppe la bouche sans lourdeur. Si elle est grasse ou mince, l'émulsion se brise et la sauce doit être servie immédiatement."
    }
  ]
};
