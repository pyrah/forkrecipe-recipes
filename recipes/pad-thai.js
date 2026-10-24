export default {
  "repoId": "master_thai_pad_thai_001",
  "parentRepoId": null,
  "slug": "pad-thai",
  "author": "ForkRecipe Kitchen",
  "title": "Pad Thai",
  "description": "Nouilles de riz fumées enchevêtrées d'œufs, de crevettes et d'arachides croquantes, liées par une sauce tamarine brillante qui marche le bord du rasoir entre sucré, aigre, salé et salé. Chaque bouffée de chaleur produit une couche de croûte de nouilles caramélisée, la marque de la vraie pad thai.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "grains",
  "tags": [
    "nouilles",
    "Thaï",
    "sauté",
    "crevettes",
    "Tamarin",
    "wok",
    "Produits de la rue"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Nouilles de riz sen lek séchées (3mm de large)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "nouilles séchées",
        "riz vermicelli (résultat mince)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Crevettes crues, pelées et décortiquées",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "cubes de tofu fermes",
        "poitrine de poulet tranchée finement"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Pâte de tamarin (concentrée)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron vert + cassonade (moins de profondeur)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "sauce de poisson (Tiparos ou Megachef)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja + pincée de sel (végétarien)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme, râpé (ou cassonade légère)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre (bron de riz ou tournesol)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "saindoux (traditionnel)",
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Crevettes séchées, petites",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "omit pour une saveur plus légère"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Choux de haricots, rincés",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Cacahuètes grillées, grossièrement broyées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "noix de cajou"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Ciboulette à l'ail (ou dessus d'oignon vert)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "dessus d'oignon vert"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Acid",
      "name": "Lime, coupée en quartiers",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Spice",
      "name": "Flacons de chili séchés",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Chili thaïlandais frais, haché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_noodles",
      "instructions": "Placer les nouilles de riz séchées dans un grand bol et couvrir d'eau à température ambiante — non chaude, non bouillante. Laissez-les tremper pendant 25 à 30 minutes jusqu'à ce qu'ils soient pliables et peuvent être pliés sans craquer, mais ont toujours une morsure ferme, légèrement crayeuse à leur cœur. Ils devraient se sentir comme des pâtes al dente mais plus délicates. Égoutter dans une calandre et secouer l'excès d'eau. Ne pas rincer. L'amidon de surface laissé sur les nouilles les aide à s'accrocher à la sauce dans le wok. Si vous les trempez dans l'eau chaude, ils deviendront entièrement cuits et tourneront pour bousculer le moment où ils frapperont le wok. Distribuez - les lâchement si vous avez besoin d'attendre — ils restent agressifs une fois drainés.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont blanches opaques, entièrement flexibles et bouclent sans fissuration, mais pas translucides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles se cassent lorsqu'elles sont courbées et ont un centre crayeux blanc qui tourne toute la largeur. Ils n'absorberont pas la sauce wok assez vite et s'accrocheront dans un nœud dur.",
            "action": "Retournez à l'eau de trempe pendant encore 5-10 minutes. Testez de nouveau en pliant une seule nouille en U."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles se plient en boucle sans craquer. Le centre est à peine crayeux — presque blanc opaque à l'ombre vers la translucidité. Ils sont souples mais ont toujours une intégrité structurelle.",
            "action": "Égoutter immédiatement et utiliser dans les 15 minutes. La fenêtre se ferme rapidement."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont entièrement translucides et complètement douces, se déchirant lorsqu'elles sont levées. Ils se désintègreront dans le wok et se tourneront pour coller quand jetée.",
            "action": "Vous pouvez encore les cuisiner, mais vous déplacez extrêmement vite — chaleur élevée seulement, jetant minime, et servir immédiatement. La texture sera plus douce que idéale."
          }
        ]
      },
      "feelCue": "Une nouille bien trempée, drapée sur le doigt, devrait être accrochée avec un poids doux et se plier sur elle-même sans résistance, comme un ruban de soie crue, fraîche et légèrement glissante."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pad_thai_sauce",
      "instructions": "Dans une petite casserole à feu doux, mélanger la pâte de tamarin, la sauce de poisson et le sucre de palme. Incorporer doucement jusqu'à ce que le sucre de palme se dissout complètement et que le mélange soit uniforme — environ 2 minutes. Ne pas faire bouillir; vous êtes en train de dissoudre et d'intégrer, pas de réduire. Goûtez la sauce : elle devrait d'abord toucher la aigre (tamarin), puis salée (sauce de poisson), puis sucrée (sucre de palm) dans une vague de roulement, sans aucune note dominant. La couleur devrait être un brun-ambre profond, comme un thé glacé fort. Ajustez maintenant l'équilibre : trop aigre, ajoutez une pincée plus de sucre ; trop sucré, ajoutez un tiret plus de sauce de poisson ; trop plat, ajoutez une petite pression supplémentaire de tamarin. Cette sauce est l'épine dorsale de la saveur du plat — obtenir l'équilibre juste avant le travail de wok commence est essentiel, parce qu'il n'y a pas de temps à ajuster une fois que vous cuisinez.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré brillant et profond, de couleur uniforme, sans cristaux de sucre granuleux visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les granules de sucre sont encore visibles flottant dans la sauce. Il semble légèrement trouble et la saveur est inégale — des patchs de douceur et des patchs de aigre vif.",
            "action": "Continuer à remuer à feu doux. Ne pas augmenter fortement la chaleur ou le sucre se cristallisera sur les côtés de la poêle."
          },
          {
            "state": "Perfect",
            "description": "Un liquide lisse et laqué de la couleur du miel foncé. Tous les éléments sont intégrés. Il enveloppe l'arrière d'une cuillère dans un film mince, même.",
            "action": "Retirer du feu et réserver. La sauce tient à température ambiante pendant des heures."
          },
          {
            "state": "Overdone",
            "description": "La sauce a commencé à mijoter et à se concentrer. Il sent le caramel brûlé et la couleur s'est assombrie à presque noir aux bords.",
            "action": "Ajouter une petite éclaboussure d'eau et remuer vigoureusement la chaleur. La saveur fonctionnera encore mais sera moins lumineuse."
          }
        ]
      },
      "feelCue": "Une goutte de la sauce finie sur votre poignet devrait se sentir chaud et légèrement collant, libérant un arôme sucré-sour-savoureux complexe qui fait votre eau de bouche avant même qu'elle atteigne vos lèvres."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "ing_09",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "aromatic_base",
      "instructions": "Chauffer un wok ou une grande poêle lourde sur la chaleur la plus élevée de votre poêle permet une pleine 2 minutes — la poêle devrait fumer. Ajouter l'huile et le tourbillon. Ajouter les échalotes tranchées et remuer pendant 90 secondes jusqu'à ce qu'elles commencent à ramollir et à devenir dorées aux bords. Ajouter l'ail haché et les crevettes séchées. Faire frire sans arrêt pendant 60 secondes, en gardant tout en mouvement. Les crevettes séchées grillent et libèrent leur parfum océanique profondément salé — l'arôme devrait passer de l'ail cru à quelque chose de torréfié et complexe. Ne laissez pas brûler l'ail; il devient amer rapidement à cette température. Tout le wok devrait être enflammé de fumée parfumée. Si votre ventilateur d'échappement n'est pas au maximum, ouvrez une fenêtre.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont en or translucide aux bords légèrement caramélisés. L'ail est d'or pâle, pas brun. Les crevettes séchées sont rose-orange et sentent grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont toujours blanches et les crevettes séchées sentent la mer sans aucune profondeur grillée. L'ail n'a pas commencé à colorier.",
            "action": "Augmentez la chaleur et continuez à jeter. Ne laissez pas le wok sans surveillance à ce stade."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes se sont adoucies et portent des bords dorés. L'ail est jaune paille chaude. Le wok sent l'allium torréfié doux et les crevettes grillées de lapin.",
            "action": "Ajouter immédiatement la crevette — le wok est à température maximale."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun foncé et sent aigu et acride. Les échalotes ont des bords brûlés et s'éloignent des côtés du wok en tant qu'omble.",
            "action": "Jetez et recommencez. L'ail brûlé ne peut être sauvé et rendra le plat entier amer."
          }
        ]
      },
      "feelCue": "Tenez votre main à 15 cm au-dessus du wok — vous devriez sentir la chaleur comme ouvrir une porte du four. L'huile devrait fumer en continu, et les crevettes séchées craqueront audiblement dès qu'elles toucheront la surface."
    },
    {
      "nodeId": "step_4",
      "action": "Saisir",
      "inputs": [
        "aromatic_base",
        "ing_02"
      ],
      "outputState": "cooked_shrimp_base",
      "instructions": "Ajouter les crevettes crues dans le wok en une seule couche et les presser à plat pendant 30 secondes sans remuer, les laisser saisir contre la surface du wok chaud. Flip une fois — ils devraient être roses sur le côté marin. Faites revenir 30 à 45 secondes de plus jusqu'à ce qu'ils soient simplement cuits et enroulés en forme de C. Ne pas trop cuire; ils retourneront à la chaleur du wok deux fois plus. Retirer les crevettes dans une assiette et réserver. Ils devraient être cuits à 90 % — simplement opaques, encore brillants, pas caoutchouteux. Les laisser légèrement sous-dosés ici est intentionnel : ils finiront en finale avec les nouilles.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont roses et opaques à l'extérieur, encore simplement translucides au centre même, enroulées dans un C détendu plutôt qu'un O serré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore bleu gris translucide. Le centre ne montre aucun changement de couleur du tout.",
            "action": "Retournez au wok pendant 30 secondes de chaleur élevée. Ils n'ont besoin que de secondes, pas de minutes."
          },
          {
            "state": "Perfect",
            "description": "Les crevettes sont rose-orange vif, frisé à un doux C. Le centre est à peine translucide, promettant une finition tendre quand ils reviennent à la chaleur plus tard.",
            "action": "Retirer immédiatement du wok et déposer séparément."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont étroitement enroulées dans un O plein et se sentent fermes et caoutchouteuses lorsqu'elles sont pressées. Ils ont libéré du liquide dans le wok.",
            "action": "Ils sont trop cuits — les rajouter à la fin du lancer final juste pour les enrober de sauce, pour ne pas cuire davantage. Ils seront acceptables mais mâchés."
          }
        ]
      },
      "feelCue": "Une crevette bien séchée devrait céder sous une légère pression — springy et pulvérulente, sans rebondir. Le wok doit siffler et cracher quand les crevettes touchent la surface, un bruit comme la pluie sur le trottoir chaud."
    },
    {
      "nodeId": "step_5",
      "action": "Mélanger",
      "inputs": [
        "cooked_shrimp_base",
        "soaked_noodles",
        "pad_thai_sauce",
        "ing_03"
      ],
      "outputState": "sauced_noodles",
      "instructions": "Retourner le wok à la chaleur maximale. Ajouter les nouilles égouttées au wok et verser immédiatement la sauce thai sur eux. Mélanger constamment pendant 60 à 90 secondes, pliant les nouilles à travers la sauce avec des pinces ou une longue spatule, la sauce absorbera et caramélisera contre la surface du wok. Poussez les nouilles d'un côté du wok pour exposer le centre. Casser les deux œufs dans le centre exposé et les laisser régler pendant 15 secondes, puis brouiller lâchement avant les blancs complètement réglé. Lorsque les œufs sont encore brillants et que 80% sont cuits, faites revenir les nouilles sur les œufs et pliez tout ensemble. Les œufs doivent enrober les nouilles dans des rubans dorés cassés, et ne pas les mettre dans une omelette sèche. Retournez les crevettes au wok, lancez une ou deux fois, et mettez-les immédiatement.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont profondément ambrées de la sauce, avec des marques d'ombrage dispersées où elles ont touché la surface du wok. Les rubans d'oeufs sont visibles, dorés et simplement sertis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont pâles et aqueuses — la sauce n'a pas caramélisé et les nouilles sont lustrées plutôt que brillantes.",
            "action": "Augmenter la chaleur au maximum et étendre les nouilles à plat contre le wok pendant 30 secondes sans remuer, forçant le contact du wok et la caramélisation."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles sont un ambre profond et brillant avec des taches de char foncé occasionnelles du wok. L'œuf est en rubans doux, dorés et irréguliers. Le plat sent le tamarin caramélisé et la fumée wok.",
            "action": "Assiette immédiatement — les nouilles continuent à cuisiner dans leur propre chaleur."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles se sont brisées en fragments courts et collées au wok dans une masse sombre et collante. Les œufs sont secs et jaunis.",
            "action": "Brûlez dans une cuillère à soupe d'eau et jetez rapidement pour libérer les nouilles coincées avant qu'elles ne brûlent davantage. Assiette immédiatement malgré l'imperfection."
          }
        ]
      },
      "feelCue": "Lorsque vous jetez les nouilles, vous devriez entendre un grésillement continu et un craquement occasionnel lorsque la sauce sucre caramélise — le son tombe dans le pieu lorsque la sauce est absorbée. La poignée wok sera presque trop chaude pour toucher; utilisez un chiffon."
    },
    {
      "nodeId": "step_6",
      "action": "Dresser",
      "inputs": [
        "sauced_noodles",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15"
      ],
      "outputState": "finished_pad_thai",
      "instructions": "Assortir le pad thai dans un monticule. D'un côté, empilez les germes de haricots et les ciboulettes d'ail crues — elles devraient être froides et croquantes contre les nouilles chaudes, offrant un contraste textural. Dispersez les cacahuètes écrasées sur le dessus. Servir avec un coin de citron vert pressé contre le monticule et un petit tas de flocons de chili séchés sur le côté. Ne mélangez jamais les garnitures dans les nouilles avant de servir — chaque diner devrait mélanger son propre mélange, presser le citron vert et ajuster le chili au goût. Le pad thai est traditionnellement servi avec des condiments supplémentaires sur le côté: sauce de poisson avec des chilis flottants, plus de sucre, plus de flocons de chili, et vinaigre blanc — les quatre saveurs de la table thaïlandaise.",
      "visualCue": {
        "primaryTarget": "Composition vibrante : nouilles brun-ambre surmontées de germes vert-blanc vif, de gravats d'arachide dorés et d'un coin de citron vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les garnitures ont été brassées et flétries par la chaleur des nouilles. Le plat est brun et homogène.",
            "action": "Ajoutez une poignée de choux crus et de ciboulette sur le dessus pour un sauvetage visuel et textural."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles sont ambrées. Les pousses de haricots sont froides et vert blanc vif, à l'écart des nouilles. Les arachides sont des puces dorées visibles. La citron vert est fraîche et ferme.",
            "action": "Servir immédiatement pendant que les nouilles sont chaudes et que les germes sont froids."
          },
          {
            "state": "Overdone",
            "description": "Le poisson est resté trop longtemps — les germes se sont flétris dans les nouilles et tout est devenu uniforme et soyeux.",
            "action": "Pad thai ne réchauffe pas bien. Servir le moment où il est plaqué."
          }
        ]
      },
      "feelCue": "La plaque finie devrait vous frapper avec deux zones de température distinctes: les nouilles chaudes à la vapeur et les germes frais et croquants. Lorsque vous pressez le citron vert et qu'elle siffle légèrement contre les nouilles chaudes, vous savez qu'elle est prête."
    }
  ]
};
