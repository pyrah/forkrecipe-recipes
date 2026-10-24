export default {
  "repoId": "master_lebanese_tabouli_001",
  "parentRepoId": null,
  "slug": "tabouli",
  "author": "ForkRecipe Kitchen",
  "title": "Tabouli",
  "description": "La grande salade d'herbe du Liban — une énorme masse verdissante de persil à feuilles plates et de menthe, finement hachée à la main, avec seulement une petite quantité de bulgur fin trempé (jamais cuit), habillé agressivement de jus de citron et d'huile d'olive; le grain est un accent, le persil est tout.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "grains",
  "tags": [
    "végétalien",
    "Option sans gluten",
    "lébanèse",
    "salade d'herbe",
    "bulgur",
    "frais"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "40 min",
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
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Persil à feuilles plates (4 grosses grappes, feuilles et tiges fines seulement)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "menthe épineuse"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Blé fin bourdon (no 1 grade)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "quinoa (sans gluten — tremper 20 min dans le jus de citron)",
        "millet cuit"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Tomates de ripe (en dés, égouttées de l'excès de jus)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomates cerises, en quartiers"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalons (parties blanches et vert pâle, tranchés finement)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron frais (environ 3 citrons)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_03",
        "ing_06"
      ],
      "outputState": "soaked_bulgur",
      "instructions": "Dans un petit bol, déposer le boulgur fin. Verser la moitié du jus de citron (40 ml) directement dessus — tremper dans le jus de citron plutôt que dans l'eau signifie que le bulgur absorbe l'acidité pendant qu'il s'hydrate, de sorte qu'il n'est jamais fade ou aqueux. Ajouter juste assez d'eau froide pour couvrir à peine le grain (environ 50 ml). Mélanger une fois et laisser tremper pendant 20 minutes. Après avoir trempé, asperger le bulgur dans le centre d'une serviette de cuisine propre ou plusieurs couches d'étoffe de fromage et enrouler fermement — en extrayant le plus de liquide possible. Le bulgur doit être aussi sec que vous pouvez le faire, ou il va arroser la salade.",
      "visualCue": {
        "primaryTarget": "Les grains de Bulgur ont enflé à environ doubler leur taille sèche, absorbé tout le liquide visible, et sont uniformément pâles or-tan. Lorsqu'ils sont pressés, ils libèrent très peu d'humidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de Bulgur sont encore durs au centre et mâchent d'une manière désagréable et désagréable.",
            "action": "Ajouter une autre cuillère à soupe de liquide et tremper encore 10 minutes. Le bulgur fin doit s'hydrater complètement sans chaleur."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont gonflés, hydratés uniformément et tendres, mais ils ont encore une morsure très légère et agréable. Ils se battent quand ils sont pressés mais ne sont pas mouillés.",
            "action": "Mèche sèche dans un chiffon et mise de côté. Allez couper les herbes."
          },
          {
            "state": "Overdone",
            "description": "Bulgur a trempé trop longtemps dans trop de liquide et est complètement arrosé et musclé.",
            "action": "Éteignez autant de liquide que possible. La texture sera plus douce dans la salade finale, mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Lorsque vous lancez le bulgur trempé dans le tissu, vous devez sentir qu'il résiste à la pression comme du sable humide — donnant mais pas liquide, avec des grains qui se sentent distincts entre vos doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Chop",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "chopped_herbs",
      "instructions": "Laver et bien sécher le persil et la menthe — les herbes humides libèrent de l'eau dans la salade. N'utilisez que le couteau d'un chef pointu — jamais un robot culinaire, qui meurtrisse les feuilles et les rend sombres et amers en quelques minutes. Recueillir le persil dans un faisceau serré et hacher finement avec un mouvement de basculement, puis faire pivoter 90 degrés et hacher à nouveau. Le but est un confettis fin et vert — pas une pâte, pas des morceaux rugueux. Couper la menthe séparément (c'est plus délicat) et la plier. Le volume de l'herbe devrait être environ 4-5 fois le volume de tout le reste; si vous sentez que vous avez trop de persil, vous avez probablement raison.",
      "visualCue": {
        "primaryTarget": "Un confettis de persil et de menthe vert brillant et fin — chaque pièce ne dépasse pas 3-4 mm. Pas de taches meurtries, sombres ou musquées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil est en gros morceaux rugueux avec de longues tiges encore visibles. Les morceaux sont trop grands pour être distribués uniformément à travers la salade.",
            "action": "Continuer à couper le persil en ramenant le persil dans un monticule serré entre les passages."
          },
          {
            "state": "Perfect",
            "description": "Des confettis verts vifs qui ressemblent à une explosion de couleur. Chaque pièce est assez petite pour s'asseoir sur un bout de doigt. Pas de grosses tiges. Ça sent les herbes intenses.",
            "action": "Transférer dans un grand bol de mélange et procéder."
          },
          {
            "state": "Overdone",
            "description": "Le persil a été haché dans un quasi-pâte et commence à devenir vert foncé à partir de meurtrissures et d'oxydation.",
            "action": "Utiliser immédiatement — le persil oxydé ne peut pas être récupéré. La saveur n'est pas affectée, mais la salade sera plus terne."
          }
        ]
      },
      "feelCue": "Le persil frais bien haché se sent vif et printanier dans les mains — il rebondit quand il est pressé, est frais et très légèrement humide de ses propres huiles volatiles, et sent comme un jardin après la pluie."
    },
    {
      "nodeId": "step_3",
      "action": "Sérum",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "prepared_vegetables",
      "instructions": "Couper les tomates en petits cubes, ne dépassant pas 5 mm. Placez les tomates coupées en dés dans un tamis à mailles fines ou un cololander et laissez-les égoutter pendant 10 minutes.Les tomates libèrent beaucoup d'eau, et les tomates non drainées s'assemblent au fond de la salade en quelques minutes de la portion. Couper les pétoncles en rondelles minces. L'oignon blanc brut est traditionnel dans certaines versions, mais les oignons sont plus doux et plus couramment utilisés dans les cuisines libanaises modernes.",
      "visualCue": {
        "primaryTarget": "Petits cubes de tomates uniformes qui tiennent leur forme et ne sont pas musclés. Des rondelles de pétoncle. Les tomates ont drainé et ne sont plus assises dans une piscine de jus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de tomates sont grands et irréguliers. Ils sont toujours assis dans une piscine de jus dans le bol.",
            "action": "Égoutter les tomates dans un tamis avant de les ajouter. De grandes pièces déséquilibrent la texture."
          },
          {
            "state": "Perfect",
            "description": "Petits cubes de tomates uniformes, drainés et légèrement humides. Des rondelles de pétoncle.",
            "action": "Combiner avec les herbes et procéder à l'habillage."
          },
          {
            "state": "Overdone",
            "description": "Les tomates ont été hachées si fines qu'elles sont musées et plus comme une pulpe que des légumes en dés.",
            "action": "Égoutter soigneusement et continuer — ils auront encore bon goût, mais perdre la définition textuelle dans la salade finale."
          }
        ]
      },
      "feelCue": "Un cube de tomate bien drainé doit se sentir ferme et sec à l'extérieur lorsqu'il est touché par un bout de doigt — s'il laisse une empreinte de tomate humide, l'égoutter plus longtemps."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "chopped_herbs",
        "soaked_bulgur",
        "prepared_vegetables",
        "ing_07",
        "ing_06",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "dressed_tabouli",
      "instructions": "Dans un grand bol à mélanger, mélanger les herbes hachées, le bulgur sec pressé, les tomates égouttées et les pétoncles. Arrosez le jus de citron restant et l'huile d'olive sur tout. Ajouter la tousse, la cannelle, le sel et le poivre. Mélangez doucement mais soigneusement en utilisant deux grandes cuillères ou des mains propres, levant du bas et tournant — vous n'essayez pas d'écraser quoi que ce soit, il suffit de couvrir tous les éléments de la vinaigrette. La salade se compressera légèrement car elle est jetée. Bouche : Le tabou doit être agressif, presque fortement citronné. S'il semble trop doux, ajouter plus de jus de citron.",
      "visualCue": {
        "primaryTarget": "Une salade verte vive et scintillante avec de minuscules bijoux de tomate rouge et un bulgur doré dispersé partout. Chaque élément est recouvert de citron et d'huile. Ça a l'air vivant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pansement n'a pas été entièrement jeté à travers — certains grumeaux de persil sec au sommet sont déshabillés, et le bulgur a coulé au fond.",
            "action": "Rejeter, en veillant à soulever du fond du bol. Chaque pièce verte doit être enduite."
          },
          {
            "state": "Perfect",
            "description": "Éblouissement uniforme, chaque élément revêtu. Le persil est encore vert brillant. L'odeur est intensément herbacée et citronnée. Lorsque vous le goûtez, la première sensation doit être le citron vif, suivi de l'huile d'olive et de l'herbe.",
            "action": "Reposez-vous 15 minutes pour que les saveurs se marient, puis servez."
          },
          {
            "state": "Overdone",
            "description": "Le tabou est habillé pendant plus de 30 minutes. Le persil commence à se flétrir et la salade met du liquide au fond.",
            "action": "Égoutter le liquide excédentaire s'il est important. Servir immédiatement. Tabouli habillé ne tient pas; le rendre le plus près possible de servir."
          }
        ]
      },
      "feelCue": "Lorsque vous lancez des tabous, les herbes doivent se sentir printanières et légères dans vos mains — pas mouillées et lourdes; si le bol a l'impression qu'il est plein d'herbe humide, les tomates n'ont pas été suffisamment drainées."
    },
    {
      "nodeId": "step_5",
      "action": "Saison",
      "inputs": [
        "dressed_tabouli"
      ],
      "outputState": "finished_tabouli",
      "instructions": "Goûtez le tabou habillé et ajustez. L'assaisonnement correct pour les tabous est différent de la plupart des plats: le citron doit être la note la plus forte — si vous hésitez, ajoutez plus. L'huile d'olive doit être présente mais ne doit pas rendre la salade lourde. Le toutspice et la cannelle sont une chaleur subtile, non détectable comme des épices distinctes. Le sel devrait rendre tout pop sans être perceptible seul. Laissez le tabouli reposer à température ambiante pendant 15 minutes avant de servir — ce bref repos permet au sel de puiser une petite quantité d'humidité dans les herbes, qui se mêle à la vinaigrette et crée la sauce finie.",
      "visualCue": {
        "primaryTarget": "Une salade qui semble incroyablement verte et fraîche, légèrement brillante à partir de l'huile d'olive, avec le persil tenant toujours sa couleur vive. Le bulgur est à peine visible parmi les herbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salade a un goût plat — pas assez de sel ou de citron. Le vert a le goût de persil brut sans l'acidité vive qui le transforme.",
            "action": "Ajouter d'abord plus de jus de citron, puis goûter au sel. Le palais libanais pour ce plat est audacieux — croyez-le."
          },
          {
            "state": "Perfect",
            "description": "Le premier goût est le citron acide vif, suivi immédiatement par la fraîcheur herbacée, presque amère du persil et de la menthe, puis l'épice chaude de l'Allspice. L'huile d'olive enveloppe le palais et relie tout.",
            "action": "Servir immédiatement aux côtés des cœurs de laitue romaine ou du pain pita pour scooping, et des viandes de kibbeh ou grillées."
          },
          {
            "state": "Overdone",
            "description": "Le tabou est trop salé ou le citron est trop agressif — une note domine tout le reste.",
            "action": "Ajouter un peu plus d'huile d'olive pour tamponner la netteté. Une petite quantité de bulgur supplémentaire peut absorber l'excès d'acide si nécessaire."
          }
        ]
      },
      "feelCue": "Une cuillerée de tabous parfaits devrait se sentir lumineuse et propre en bouche, jamais lourde — l'huile d'olive manteaux sans alourdir, et le citron soulève chaque élément dans la clarté."
    }
  ]
};
