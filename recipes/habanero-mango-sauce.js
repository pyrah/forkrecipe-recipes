export default {
  "repoId": "master_caribbean_habanero_mango_sauce_001",
  "parentRepoId": null,
  "slug": "habanero-mango-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce de mangue Habanero",
  "description": "Une sauce chaude caribéenne qui est aussi une sauce fruitière — la douceur tropicale de la mangue mûre et la chaleur florale élevée du habanero existent dans une tension parfaite et improbable. Le gingembre et le citron vert les relient à quelque chose de vif et d'or qui appartient au poisson grillé, au poulet et à tout entre les deux.",
  "cuisine": "Caraïbes",
  "culture": "Jamaïquen",
  "category": "condiments",
  "tags": [
    "Sucre chaude",
    "Caribbean",
    "Mango",
    "habanero",
    "tropicale",
    "fruité",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Viande de mangue (Ataulfo ou Alphonso préféré)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "mangue congelée, dégelée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Poivrons habanero frais (épilés, ensemencés pour moins de chaleur)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "scotch capots pour la chaleur authentique jamaïcaine",
        "2 jalapeños pour version plus légère"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et haché grossièrement",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Miel ou sucre brun léger",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger brut",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "raw_blended_sauce",
      "instructions": "Portez des gants lors de la manipulation des poivrons habanero — la capsaïcine est extrêmement puissante et brûlera les yeux et la peau pendant des heures. Stem et semer les habaneros (semer enlève environ 30% de la chaleur; laisser les graines dans si la chaleur maximale est souhaitée). Mélanger tous les ingrédients dans un mélangeur et mélanger à haute pendant 90 secondes jusqu'à ce qu'ils soient complètement lisses. La couleur devrait être un orange doré vif, presque néon. Goûtez avant la cuisson — une sauce crue a un caractère différent, utile pour établir la base de saveur.",
      "visualCue": {
        "primaryTarget": "Une purée vive, dorée, complètement lisse. La couleur est presque anormalement brillante. Il sent simultanément tropical et dangereusement chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore une fibre de mangue ou une peau habanero déchiquetée visible. La texture est inégale et la livraison de saveur sera incohérente.",
            "action": "Mélanger plus longtemps à haute vitesse. La fibre de mangue nécessite un mélange soutenu pour se décomposer complètement."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, fluide, purée d'orange vif. Le mélangeur est transparent et la sauce verse comme un smoothie fin.",
            "action": "Goût (attention – la morsure brute de habanero est intense). Notez l'équilibre avant la cuisson, puis laissez mijoter pour approfondir la saveur."
          },
          {
            "state": "Overdone",
            "description": "Surcollé et mousseux, avec le moteur réchauffant la sauce. L'arôme de habanero s'est intensifié à écrasant.",
            "action": "Laisser reposer avant de cuisiner. La mousse s'effondrera et la qualité de la sauce ne sera pas endommagée."
          }
        ]
      },
      "feelCue": "Ne touchez pas votre visage. Utilisez une petite cuillère pour goûter — le mélange habanero-mango brut offre une douceur tropicale simultanée et une chaleur élevée, presque parfumée. Si vos yeux arrosent dans les 3 secondes de la dégustation, les habaneros ont fait leur travail."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "raw_blended_sauce"
      ],
      "outputState": "cooked_sauce",
      "instructions": "Verser la sauce mélangée dans une petite casserole. Faire mijoter à feu moyen, en remuant souvent. Laisser mijoter à découvert pendant 8 à 12 minutes, en remuant constamment dans les dernières minutes lorsque la sauce s'épaissit. La cuisson adoucit la morsure brute de habanero, caramélise légèrement les sucres de mangue et concentre les saveurs. La sauce est prête quand elle s'épaissit à la consistance d'une sauce aux fruits versables et la couleur s'approfondit de l'orange vif à un or plus profond et plus riche.",
      "visualCue": {
        "primaryTarget": "Une sauce dorée-ambre brillante et épaissie qui enveloppe une cuillère et s'écoule dans des gouttes épaisses et lentes. Un peu plus foncé que le mélange brut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore très fine et aqueuse, le bord brut du habanero encore présent et tranchant, saveur de mangue goûte plat et non caramélisé.",
            "action": "Continuer à mijoter et à remuer. L'épaississement se produit après 8 minutes et accélère — regardez - le."
          },
          {
            "state": "Perfect",
            "description": "Épaissé à une consistance de sauce aux fruits. De l'or profond. Des odeurs de fruits tropicaux, de gingembre et un fantôme de chaleur florale habanero. Goûte complexe, équilibré, multicouche.",
            "action": "Retirer du feu et refroidir avant d'embouteiller ou de servir."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte épaisse, collée à la cuillère et tirant du bas. Les sucres de mangue ont caramélisé trop loin et il a un goût plus comme la confiture que la sauce chaude.",
            "action": "Incorporer le jus de lime et l'eau pour rétablir la consistance versable."
          }
        ]
      },
      "feelCue": "Laisser mijoter la sauce avec le couvercle et se tenir en arrière — la vapeur de capsaïcine des habaneros dans une poêle chaude suffit à resserrer l'eau et la gorge des yeux. Lorsque l'odeur agressive de la capsaïcine s'adoucit à quelque chose de plus fruité et arrondi, la sauce est cuite."
    },
    {
      "nodeId": "step_3",
      "action": "Bouteille",
      "inputs": [
        "cooked_sauce"
      ],
      "outputState": "finished_habanero_mango_sauce",
      "instructions": "Laisser refroidir la sauce à température ambiante. Goûtez encore une fois — la sauce finie devrait être plus douce et plus ronde qu'à l'état cru, avec la chaleur florale du habanero toujours en évidence mais plus agressive. Ajustez le sel et le citron vert au goût. Verser dans des bouteilles ou des pots stérilisés. Réfrigérer jusqu'à 1 mois. Pour une texture plus lisse et de style restaurant, passez à travers un tamis à mailles fines avant l'embouteillage. Pour une sauce plus rustique, corsé, laisser non tamisée.",
      "visualCue": {
        "primaryTarget": "Une sauce dorée foncée et brillante dans un pot, se déplaçant lentement lorsqu'elle est inclinée, enrobant le verre dans un mince film ambre translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore plus chaude et plus mince qu'elle ne sera froide. Il apparaîtra trop lâche.",
            "action": "Refroidir d'abord avant de juger de la consistance — la sauce de mangue habanero épaissit sensiblement sur la réfrigération."
          },
          {
            "state": "Perfect",
            "description": "L'or froid et profond se déverse dans un ruisseau lent et contrôlé d'une bouteille. Équilibré : tropical, épicé, acidulé. Clings à la nourriture plutôt que de s'enfuir.",
            "action": "Utiliser dans un délai de 1 mois. Agiter avant chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Conservé trop longtemps — la sauce s'est séparée, la moisissure est apparue en haut, ou la couleur s'est foncée à brun.",
            "action": "Jetez. Cette sauce est acide mais les sauces maison doivent être traitées comme périssables. Commencez un nouveau lot."
          }
        ]
      },
      "feelCue": "Une parfaite sauce à la mangue habanero devrait offrir trois phases distinctes au goût : d'abord la douceur tropicale fraîche de la mangue, puis les agrumes vifs du citron vert, puis la chaleur florale et fruitée de la construction habanero régulièrement sur 5 secondes. Si les trois arrivent simultanément dans un mur plat de douceur et de douleur, il faut plus de citron vert et encore quelques minutes de mijotage."
    }
  ]
};
