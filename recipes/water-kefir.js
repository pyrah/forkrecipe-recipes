export default {
  "repoId": "master_universal_water_kefir_001",
  "parentRepoId": null,
  "slug": "water-kefir",
  "author": "ForkRecipe Kitchen",
  "title": "Kéfir d'eau",
  "description": "L'eau probiotique étincelante, légèrement tannante — les grains vivants de kéfir, une colonie symbiotique de bactéries et de levures enrobées de matrices polysaccharidiques, convertit une simple eau sucrière en quelque chose d'effervescent et d'intestin léger sur 48 heures. Un deuxième ferment dans une bouteille scellée avec des fruits piège le CO2 et construit un bon fizz. Infiniment variable en saveur; exigeant en une seule chose — garder vos grains en vie entre les lots.",
  "cuisine": "Universel",
  "culture": "Traditionnel",
  "category": "fermented",
  "tags": [
    "fermenté",
    "boisson",
    "probiotique",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "2 day",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 3,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Graines de kéfir d'eau (vivantes, actives)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Graines de tibicos",
        "les grains de kéfir de lait ne fonctionneront pas"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne blanc (ou rapadura pour les minéraux)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de coco de palme",
        "sucre turbinado — jamais miel ou stévia, qui nuisent aux grains"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Eau filtrée ou non chlorée",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source — l'eau chlorée du robinet inhibe la culture"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Abricots séchés (non sulfurés, comme source minérale)",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": [
        "1 figues séchées",
        "quelques raisins secs",
        "une pincée de mélasse riche en minéraux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Tranche de citron (non pelée, non épilée)",
      "ratioValue": 1,
      "defaultUnit": "slice",
      "substitutions": [
        "tranche de citron vert",
        "tranche d'orange"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Jus de fruits frais ou gingembre tranché (pour deuxième fermentation)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "baies",
        "Mango morceaux",
        "fleurs d'hibiscus",
        "concombre et menthe"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construisez l'eau de sucre",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "sugar_water",
      "instructions": "Dissoudre le sucre de canne dans une tasse d'eau chaude (pas chaude) d'abord, en remuant jusqu'à ce que chaque grain soit parti. Laisser refroidir à température ambiante, puis combiner avec l'eau filtrée fraîche restante dans un pot à grande bouche propre. La température finale doit être inférieure à 30°C (86°F) — assez chaude pour être active mais pas assez chaude pour endommager les organismes céréaliers. Le sucre est la seule source alimentaire pour les grains; ne pas remplacer par le miel (qui contient des antimicrobiens qui stressent la culture), les édulcorants artificiels (pas de nutrition pour les bactéries), ou la stévia. Rapadura ou sucre de canne brut sont d'excellents choix car leurs minéraux résiduels soutiennent la santé des grains au fil du temps.",
      "visualCue": {
        "primaryTarget": "L'eau complètement limpide, peu sucrée, sans cristaux de sucre visibles — tenue à la lumière, doit avoir l'air aussi claire que l'eau pure, sans éclat de sucre non dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des cristaux de sucre encore visibles au fond du pot, ou l'eau est encore chaude au-dessus de 30°C.",
            "action": "Mélanger plus vigoureusement, ou ajouter un peu plus d'eau à température ambiante et remuer à nouveau. Testez la température sur votre poignet — il doit se sentir neutre avant que les grains entrent."
          },
          {
            "state": "Perfect",
            "description": "Clair cristallin, complètement dissous, à température ambiante, sentant légèrement doux. Prêt pour les grains.",
            "action": "Ajouter les abricots secs et la tranche de citron, puis ajouter les grains de kefir."
          },
          {
            "state": "Overdone",
            "description": "Utilisez de l'eau bouillante pour dissoudre le sucre et verser les grains avant qu'il n'ait complètement refroidi.",
            "action": "Retirer immédiatement les grains et rincer dans de l'eau fraîche filtrée. Les grains endommagés se rétabliront si le choc de température était bref — donnez-leur un lot frais et attendez un jour supplémentaire."
          }
        ]
      },
      "feelCue": "Testez la température de l'eau à l'intérieur de votre poignet, la façon dont vous testez la bouteille d'un bébé: il devrait se sentir complètement neutre, ni chaud ni frais. Cette neutralité est la zone de sécurité de vos grains."
    },
    {
      "nodeId": "step_2",
      "action": "Pitch les grains",
      "inputs": [
        "sugar_water",
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "first_ferment",
      "instructions": "Versez délicatement les grains de kefir dans l'eau de sucre préparée à l'aide d'une cuillère en plastique ou en bois — évitez les ustensiles métalliques, ce que certains producteurs mettent en garde peut stresser les grains au fil du temps (la preuve est mélangée, mais c'est une simple précaution). Ajouter les abricots séchés et la tranche de citron: les abricots fournissent des minéraux traces dont les grains ont besoin pour leur matrice polysaccharidique, et le citron abaisse légèrement le pH, supprimant les organismes indésirables dans les premières heures. Couvrir avec un chiffon respirant ou un filtre à café fixé avec une bande de caoutchouc — pas un couvercle solide, car la culture produit du CO2 et a besoin de respirer. Laisser à température ambiante de 22 à 28°C pendant 24 à 48 heures.",
      "visualCue": {
        "primaryTarget": "Les grappes de grains translucides coulent dans l'eau claire de sucre, les abricots séchés flottent, la tranche de citron est cousue. Le pot recouvert de tissu, placé dans un endroit chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains ajoutés avant l'eau de sucre entièrement refroidie, ou les fruits secs et le citron ont été oubliés.",
            "action": "Ajouter les sources minérales manquantes maintenant si oublié; refroidir l'eau de sucre avant d'ajouter des grains si vous l'avez attrapé à temps."
          },
          {
            "state": "Perfect",
            "description": "Grains, abricots et citron dans de l'eau à sucre fraîche, rembourrés, dans un endroit chaud. Les grains seront actifs dans les 4 à 6 heures.",
            "action": "Laisser reposer 24 heures avant de vérifier. Marquez le pot avec l'heure de départ."
          },
          {
            "state": "Overdone",
            "description": "Utilisé un couvercle métallique scellé qui emprisonne le CO2 et empêche les organismes aérobies dans les grains d'obtenir de l'oxygène.",
            "action": "Swap vers une couverture respirante. Un couvercle métallique serré pendant le premier ferment peut provoquer un débordement et une accumulation de pression."
          }
        ]
      },
      "feelCue": "Les grains de kéfir actifs et sains ressemblent à de petits amas de chou-fleur opaques ou translucides et se sentent légèrement caoutchouteux, comme des bonbons à la gélatine douce. Les grains qui sentent l'aurore et la levure sont sains; les grains qui sentent l'odeur pourrie ou cheesy ont besoin de quelques lots de conditionnement avant la pleine utilisation."
    },
    {
      "nodeId": "step_3",
      "action": "Première fermentation",
      "inputs": [
        "first_ferment"
      ],
      "outputState": "fermented_kefir_water",
      "instructions": "Laisser le pot couvert entre 22 et 28°C pendant 24 à 48 heures. Après 24 heures, vous devriez voir de petites bulles s'accrocher aux grains et monter lentement à la surface, et le liquide aura été légèrement plus opaque avec un arôme peu aigre-yeux remplaçant l'eau de sucre ordinaire. Goûtez à 24 heures : à ce stade, il doit être légèrement doux, légèrement aigre et légèrement pétillant, plus comme de la limonade sucrée que du kéfir. À 48 heures, il sera nettement plus aigre et acidulé avec une douceur réduite. Plus votre cuisine est chaude, plus vite cela va — dans une cuisine de 28°C, 24 heures peuvent déjà être dépassées. Dans une cuisine de 20°C, 48 heures peuvent ne pas suffire.",
      "visualCue": {
        "primaryTarget": "Liquide légèrement nuageux, faiblement effervescent, avec des grains flottants ou reposant au fond, les abricots séchés ont plut et réhydraté, et un arôme propre, légèrement acide-yeux, qui sort du pot à découvert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 24 heures : complètement clair, très doux, à peine n'importe quelles bulles, sent l'eau de sucre. Les grains n'ont peut-être pas encore été activés.",
            "action": "Assurez-vous que le pot est assez chaud. Un environnement froid s'arrête de façon spectaculaire au kéfir — passer à un endroit plus chaud et donner encore 12 à 24 heures."
          },
          {
            "state": "Perfect",
            "description": "Légèrement nuageux, doux bouillonnant, grains produisant visiblement de minuscules flux de CO2, et la dégustation liquide agréablement goudronnée avec environ la moitié de la douceur originale consommée. Les abricots secs sont doux.",
            "action": "Retirez les grains avec une souche en plastique et mettez de côté dans une petite quantité d'eau de sucre frais pour le prochain lot. Procédez avec l'eau de kefir tendue."
          },
          {
            "state": "Overdone",
            "description": "A gauche 72 heures ou plus dans des températures chaudes: l'eau de kéfir est très aigre, le sucre entièrement consommé, et les grains sont affamés — ce qui les endommage au fil du temps.",
            "action": "Souchez immédiatement et nourrissez immédiatement les grains d'eau sucrée fraîche. Utilisez le lot surfermenté comme démarreur pour un nouveau lot ou diluer avec de l'eau douce au goût."
          }
        ]
      },
      "feelCue": "Inclinez le pot d'un côté et observez : dans un lot actif, vous verrez un léger blizzard de minuscules bulles de CO2 se libérer des grains et dériver vers le haut. Ce mouvement signifie que la culture se métabolise bien. L'eau stagnante et immobile signifie que le ferment a décroché."
    },
    {
      "nodeId": "step_4",
      "action": "Deuxième fermentation",
      "inputs": [
        "fermented_kefir_water",
        "ing_06"
      ],
      "outputState": "finished_water_kefir",
      "instructions": "Placer l'eau de kefi finie à travers un tamis en plastique dans des bouteilles swing-top propres, laissant les grains derrière. Ajouter le jus de fruits, le gingembre tranché ou les fruits frais à chaque bouteille — le sucre résiduel dans l'eau du kéfir et les sucres dans le fruit provoqueront une deuxième fermentation vigoureuse à l'intérieur de la bouteille scellée, la dissolution du CO2 dans le liquide comme carbonation. Sceller l'étanchéité à l'air et laisser à température ambiante 12 à 24 heures, presser ou presser le flacon toutes les 8 heures pour mesurer la pression — lorsqu'il se sent étanche au tambour, réfrigérer. Les bouteilles en verre de swing-top augmentent la pression de façon plus prévisible que les pots scellés. Toujours ouvrir soigneusement sur un évier; la carbonation peut être vive.",
      "visualCue": {
        "primaryTarget": "À l'ouverture, un étourdissement clair et une ruée de fines bulles; le liquide versé dans un verre doit montrer une effervescence durable et être légèrement aromatisé avec n'importe quel fruit ou gingembre ajouté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La bouteille s'ouvre sans sifflement, le liquide est plat ou à peine teinté, et il a plus un goût de jus de fruit de tarte qu'une boisson pétillante.",
            "action": "Retourner à la température ambiante pendant 12 heures, vérifier la pression du flacon toutes les 4 à 6 heures. La carbonation est souvent en retard dans les pièces froides."
          },
          {
            "state": "Perfect",
            "description": "Un pfft croustillant et audible à l'ouverture, des bulles fines abondantes, et une saveur propre de tarte sucrée levée par le fruit choisi. Agréablement effervescent dans le verre avec un doux tang kefir.",
            "action": "Réfrigérer immédiatement une fois carboné. Buvez dans les 2 semaines pour la saveur maximale et le fizz."
          },
          {
            "state": "Overdone",
            "description": "La bouteille se sent dure et mousse violemment à l'ouverture, ou la saumure explose du bouchon. C'est un risque de \"bombe à beurre\" avec du verre.",
            "action": "Réfrigérer immédiatement pour ralentir la carbonation. En ouvrant une bouteille surpression, maintenez un chiffon au-dessus du capuchon et ouvrez-le très lentement sur un évier. La prochaine fois, réfrigérer plus tôt."
          }
        ]
      },
      "feelCue": "Pressez une bouteille de seconde fermentation en plastique toutes les 8 heures : elle devrait passer de la disquette à la bouteille ferme à la bouteille étanche au tambour pendant 12 à 24 heures. Cette pression croissante est la dissolution du CO2 en solution — la physique de la carbonation pure que vous pouvez sentir dans votre paume."
    }
  ]
};
