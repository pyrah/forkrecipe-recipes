export default {
  "repoId": "master_japanese_miso_paste_home_001",
  "parentRepoId": null,
  "slug": "miso-paste-home",
  "author": "ForkRecipe Kitchen",
  "title": "Shiro Miso fait maison",
  "description": "Soya cuit mélangé au riz koji et au sel, puis emballé dans une croûte et pondéré pendant 3 à 6 mois — se transformant lentement en un miso doux et pâle avec une profondeur moelleuse et salée qu'aucune pâte commerciale ne peut correspondre.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "fermented",
  "tags": [
    "miso",
    "Japonais",
    "fermenté",
    "soja",
    "Koji",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 4,
  "activeTime": "2 hr",
  "totalTime": "90 days",
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
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Soya séché",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Pois chiches (pour pois chiches miso de style shiro)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Riz koji (riz inoculé avec Aspergillus oryzae, frais ou séché)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "orge koji (mugi koji, pour un miso plus profond et plus robuste)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer non iodé ou sel casher",
      "ratioValue": 3.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau de cuisson du soja (réservée à l'ébullition)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "eau filtrée si l'eau de soja n'est pas disponible"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel supplémentaire (pour la croûte de surface de roche)",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "soaked_soybeans",
      "instructions": "Rincer soigneusement le soja séché et tremper dans trois fois son volume d'eau froide pendant 16 à 24 heures. Le soja absorbera de l'eau et aura plus du double de sa taille — utilisera un contenant suffisamment grand, car il se développe de façon spectaculaire et peut déborder un bol de taille inférieure. L'eau d'imprégnation deviendra beige pâle à jaune à partir des protéines de surface et phytate lessivant; c'est normal. Égoutter et jeter l'eau de trempage. Le soja bien trempé est essentiel : les haricots insuffisamment trempés ne cuireont pas uniformément et produiront une base de miso rugueuse et gritty avec un bord de soja brut qu'aucune quantité de fermentation ne se lissera complètement.",
      "visualCue": {
        "primaryTarget": "Après 18 à 24 heures, le soja a grossi jusqu'à presque doubler sa taille séchée, passant de ridés et denses à d'autres à la peau lisse. Lorsque vous coupez un en deux, la coupe transversale doit être uniformément jaune pâle sans centre sec visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 8 à 10 heures, le soja est encore visiblement ridée et plus petit que les haricots complètement trempés. Lors de la coupe, le centre montre un point blanc sec et amidon. Ils ne cuisineront pas uniformément.",
            "action": "Continuer à tremper pendant au moins 6 à 8 heures de plus. Le soja trempé restera dur au centre même après une cuisson prolongée et produira un miso rugueux."
          },
          {
            "state": "Perfect",
            "description": "Soya plump, lisse et uniformément gonflé qui remplit presque le récipient. Couper en deux : uniformément jaune pâle, sans centre blanc sec. L'eau de trempe est jaune beige.",
            "action": "Égoutter, jeter l'eau imbibée et procéder immédiatement à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Ensoleillés plus de 36 heures à température ambiante par temps chaud — certains haricots ont peut-être fendu ou même commencé à fermenter (odeur aigre). Pas une catastrophe, mais cuisinez immédiatement.",
            "action": "Égoutter et procéder à la cuisson. Faire cuire très rapidement les haricots légèrement sursacrés — vérifier la cuisson plus tôt que d'habitude."
          }
        ]
      },
      "feelCue": "Pressez un soja complètement trempé entre le pouce et l'index – il devrait donner et se diviser proprement avec une pression modérée. S'il résiste et se sent dur à l'intérieur, il lui faut plus de temps d'imprégnation."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "soaked_soybeans"
      ],
      "outputState": "cooked_soybeans",
      "instructions": "Couvrir le soja drainé d'eau froide (trois à quatre fois son volume) dans une grande casserole et porter à ébullition. Écraser la mousse qui s'élève agressivement dans les 10-15 premières minutes — cette mousse est des saponines et des protéines de surface qui rendraient le miso amer et le bouillon trouble. Réduire à mijoter doucement et cuire 2 à 4 heures jusqu'à ce que le soja soit complètement tendre. Testez en masquant un seul haricot entre deux doigts : il devrait s'effondrer dans une pâte lisse avec une résistance nulle. Réservez environ 2 tasses du liquide de cuisson — il est riche en acides aminés et protéines de soja dissous et sera utilisé pour ajuster la texture de la base miso. Égoutter le reste.",
      "visualCue": {
        "primaryTarget": "Le soja entièrement cuit est uniformément doux, jaune pâle à doré, et donne instantanément à une légère pression — aucun centre dur. L'eau de cuisson est une couleur jaune-ambre chaude, légèrement épaisse des protéines de soja dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 heures, les haricots ont encore une légère morsure, non pas dure, mais qui ne donne pas pleinement. Il y a de la résistance quand vous appuyez entre les doigts. Le miso aura une texture légèrement granuleuse.",
            "action": "Continuez à mijoter. Le soja peut prendre jusqu'à 4 heures selon son âge (les haricots plus vieux prennent plus de temps). Ne vous précipitez pas — ils doivent être complètement, sans effort."
          },
          {
            "state": "Perfect",
            "description": "Les haricots s'effondrent avec la pression la plus légère dans une pâte lisse, même. Pas de grain, pas de résistance. L'arôme cuit est de soja chaud, légèrement noisette, doux et agréable. Réserver le liquide de cuisson avant l'égouttage.",
            "action": "Réserver le liquide de cuisson, égoutter les haricots, et les laisser refroidir à environ 40°C / 104°F (chauffer au toucher) avant de mélanger avec koji — trop chaud endommagera les enzymes koji."
          },
          {
            "state": "Overdone",
            "description": "Les haricots ont cuit au point de se désintégrer — le pot est un porridge de pulpe de soja effondrée plutôt que des haricots identifiables. C'est vraiment bien et même légèrement bénéfique pour miso, car la pâte sera plus lisse.",
            "action": "Procéder comme d'habitude — égoutter le liquide de cuisson et utiliser la mousse de haricots directement. La base miso sera plus lisse que la moyenne, ce qui n'est pas un problème."
          }
        ]
      },
      "feelCue": "Appuyez sur un soja cuit entre vos molaires — il devrait se dissoudre dans une pâte uniforme et lisse sans morceaux durs ou crayeux. L'eau de cuisson devrait se sentir légèrement lissée entre les doigts à partir de protéines de soja dissoutes, comme un stock gélatineux très mince."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "cooked_soybeans",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "miso_base",
      "instructions": "Alors que le soja cuit est encore chaud (pas chaud — environ 40°C / 104°F; si trop chaud la chaleur endommagera les enzymes koji), les écraser soigneusement à la main avec une maseuse de pommes de terre, un moulin à nourriture ou un robot culinaire jusqu'à ce qu'ils forment une pâte lisse et assez uniforme. Quelques pièces plus grandes sont acceptables, mais l'objectif est une texture relativement lisse et cohérente. Dans un grand bol, mélanger la purée de soja avec le riz koji et tout sauf une pincée de sel. Mélanger soigneusement à la main — la méthode japonaise traditionnelle de mise en miso, appelée tameshitate, implique le pétrissage vigoureux et serrer le mélange entre vos mains pour intégrer pleinement le koji avec la pâte de soja. Ajouter le liquide de cuisson si nécessaire pour atteindre une consistance comme une pâte rigide et moulageable - assez ferme pour tenir une forme de boule, pas collant ou lâche. Le koji fournit les enzymes (amylases et protéases) qui vont progressivement décomposer les protéines et les amidons en glutamates et sucres qui définissent la saveur profonde de miso.",
      "visualCue": {
        "primaryTarget": "Une pâte jaune pâle et dense avec une texture légèrement rugueuse et granuleuse du riz koji encore visible comme des grains cuits distincts tout au long de la masse de soja. Il ressemble à une pâte d'amande très dense et salée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots de soja ne sont pas complètement masqués — de grands morceaux de haricots intacts sont visibles et la pâte est inégale, avec des morceaux distincts plutôt qu'une texture relativement uniforme.",
            "action": "Mash plus soigneusement. Pour un miso complètement lisse (le style de la plupart des shiro miso commerciaux), passer les haricots en purée à travers un moulin ou un procédé dans un robot culinaire avant de mélanger avec koji."
          },
          {
            "state": "Perfect",
            "description": "Une pâte raide et dense qui tient une forme de boule moulée sans sombrer ni coller à vos mains. De couleur jaune pâle à crème, avec de minuscules grains de riz blanc koji visibles partout. Goûte assermentement salé et légèrement soya — rien de tel qu'un miso fini.",
            "action": "Rouler dans des boules et procéder à l'emballage de croco. Le roulement à billes aide à révéler les poches d'air restantes avant l'emballage."
          },
          {
            "state": "Overdone",
            "description": "Ajouté trop de liquide de cuisson — la pâte est maintenant trop humide et douce, s'assombrissant d'une forme de boule. Le ferment sera fin mais la texture sera plus lâche que l'idéal.",
            "action": "Incorporer plus de koji ou laisser la pâte reposer à découvert pendant 15 minutes pour raffermir légèrement. Ne pas ajouter plus de sel pour compenser — le rapport sel est calibré avec précision."
          }
        ]
      },
      "feelCue": "La base miso devrait se sentir comme la pâte à biscuits crue raide quand vous la roulez — assez ferme pour tenir sa forme lorsqu'elle est pressée dans une boule, légèrement céder quand elle est pressée, et laisser une impression propre de vos empreintes digitales sans coller à vos paumes."
    },
    {
      "nodeId": "step_4",
      "action": "Boîte",
      "inputs": [
        "miso_base",
        "ing_05"
      ],
      "outputState": "packed_miso_crock",
      "instructions": "Stériliser un poêlon en céramique, un pot en verre ou un récipient de qualité alimentaire en rinçant avec de l'eau bouillante ou une solution d'alcool dilué (le sucre fonctionne parfaitement). Rouler la base miso dans des boules de la taille d'une balle de tennis — rouler expulse les poches d'air. Claquez chaque balle fermement dans la roche (les Japonais appellent cette action « tama-nage », ou « lancer de balle ») — l'impact emballe la miso étroitement et expulse l'air piégé qui créerait des poches anaérobies où les moisissures indésirables peuvent se former. Conditionner la couche par la couche, en appuyant sur chaque couche plane et ferme avant d'ajouter la suivante. Une fois le miso emballé, appuyez sur la surface complètement plat et lisse. Saupoudrer le sel restant sur la surface pour former une croûte protectrice. Appuyez sur une couche d'enveloppe plastique directement sur la surface, puis placez un poids lourd sur le dessus (une plaque et des bouteilles pleines d'eau fonctionnent bien). Couvrez la roche avec un chiffon et fixez-la.",
      "visualCue": {
        "primaryTarget": "Une roche bien emballée avec une surface en miso plane et lisse, avec une fine croûte salée, une couche d'enveloppe plastique pressée directement sur la surface, et un poids visible sur le dessus appuyant sur le miso. Pas de trous, pas de poches d'air visibles aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Miso légèrement emballé avec des espaces d'air visibles entre les couches — les boules ont été placées plutôt qu'éclaboussées, et les couches n'ont pas été complètement pressées à plat.",
            "action": "Reconditionner en appuyant fermement sur le miso avec un poing mouillé. Toute ouverture visible aux parois de la roche doit être pressée. L'air est l'ennemi."
          },
          {
            "state": "Perfect",
            "description": "Miso dense et plat, sans trous visibles. Lorsque vous appuyez sur la couche d'enveloppe plastique, vous ressentez une résistance solide et constante — pas de poches d'air spongieux. Le poids est stable et le niveau.",
            "action": "Marque la crosse avec la date. Conserver dans un endroit frais à température stable (idéalement de 15 à 20°C / 59 à 68°F) pendant la durée de la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Emballé de manière si forte que le miso a démêlé les parois de la roche au-delà de la ligne sel-croûte, créant des surfaces exposées non protégées au-dessus du niveau de la saumure.",
            "action": "Essuyer les parois de la roche interne au-dessus de la surface du miso propre, ré-appliquer une poussière de sel au niveau de la surface, et re-positionner l'enveloppe plastique."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur votre paume sur le poids au sommet de la roche — il devrait se sentir complètement immobile et solide. Tout give ou wobble signifie que le miso ci-dessous n'est pas uniformément emballé. Un miso-crock bien emballé ressemble à une pression sur la terre emballée."
    },
    {
      "nodeId": "step_5",
      "action": "Fermenter",
      "inputs": [
        "packed_miso_crock"
      ],
      "outputState": "finished_shiro_miso",
      "instructions": "Ferment dans un endroit frais et stable à 15-20°C / 59-68°F. Shiro miso (white miso) est un style court-ferment : 3–6 mois est typique, avec l'extrémité inférieure de la plage de température étendant la chronologie et produisant une saveur plus complexe. Un aka miso plus foncé et plus fermenté nécessite de 12 à 24 mois. Vérifiez la croûte toutes les 2 à 4 semaines : si un moule (blanc, vert ou noir) apparaît à la surface, grattez-le proprement, reliez la surface, ré-appliquez la croûte salée et re-poids. Une fine levure blanche plate de kahm est commune et inoffensive. Le miso s'obscurcira lentement de la crème à l'or pâle et l'arôme passera du soja cru et salé à profondément salé, doux et fermenté. A 3 mois, goûtez une petite portion: shiro miso est prêt quand il goûte arrondi, sucré-savori, et profondément umami — avec aucune de la netteté de soja brut présent à l'emballage.",
      "visualCue": {
        "primaryTarget": "À 3 mois : le miso s'est obscurci de la crème pâle à une couleur dorée bronzée à l'ambre clair, et la surface peut présenter un faible liquide tamari (liquide foncé, intensément savori) pooling aux bords. L'arôme est profondément savoureux, légèrement sucré et complexe — reconnaissablement miso.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 6 semaines, la dégustation révèle une pâte saline, encore sèche et unidimensionnelle, avec un bord de soja brut clairement présent. La couleur est encore blanc crème. Le koji n'a pas encore produit suffisamment de glutamates.",
            "action": "Refermez et continuez à fermenter. La transformation la plus dramatique du shiro miso se produit entre les mois 2 et 4. Résister à une dégustation précoce et être patient."
          },
          {
            "state": "Perfect",
            "description": "A 3–6 mois : une pâte dorée-ambre pâle avec une texture lisse et tartinable et un arôme complexe – sucrée de la dégradation de l'amidon enzymatique, profondément salée de la production de glutamate et légèrement fruitée de la fermentation ester. Goûte moelleux, arrondi et nettement miso.",
            "action": "Transférer dans des pots plus petits, sceller et réfrigérer. Le miso est prêt et se conservera réfrigéré pendant 12 mois et plus."
          },
          {
            "state": "Overdone",
            "description": "Fermentage gauche au cours des 8 derniers mois à température ambiante — le miso s'est considérablement obscurci vers un brun rougeâtre et la saveur est devenue plus intense, plus aigre et plus complexe que le shiro miso classique. Pas mal, c'est devenu un miso moyen.",
            "action": "Transférer au réfrigérateur pour arrêter la fermentation à son point actuel. Le miso plus profond et plus foncé est tout aussi délicieux: utiliser dans des applications plus chaudes comme les tresses, la tare ramen et les marinades."
          }
        ]
      },
      "feelCue": "Le shiro miso fini devrait avoir l'air épais, doux, légèrement grainé, ce qui donne, mais dense, se répandant avec une petite pression mais tenant sa forme lorsqu'il est écorcé. Lorsque vous le goûtez froid, il devrait se dissoudre sur la langue en une vague de douceur salée avec un écho umami complexe et persistant."
    }
  ]
};
