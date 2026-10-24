export default {
  "repoId": "master_italian_salsa_verde_italiana_001",
  "parentRepoId": null,
  "slug": "salsa-verde-italiana",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Verde Italiana",
  "description": "La sauce verte d'origine de l'Italie — non mélangée, non cuite, mais collée à la main dans un condiment brut et poinçonné de persil, de câpres, d'anchois et de citron, tenu ensemble dans une bonne huile d'olive, qui porte la force savoureuse combinée de toute la cuisine ligurienne dans une seule cuillère.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "condiments",
  "tags": [
    "Italien",
    "condiment",
    "persil",
    "Câpres",
    "anchois",
    "vert",
    "pas de cuisson"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Persil frais à feuilles plates (feuilles et tiges fines)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Capeurs (emballés, rincés ou saumurés, égouttés)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Filets d'anchois (emballés à l'huile, égouttés)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "2 c. à thé miso + 1 c. à thé nori flakes pour végétarien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron (à partir de 1 citron)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge de meilleure qualité",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Moutarde de Dijon",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde de grain pour la texture"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hacher",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "chopped_solids",
      "instructions": "Cette sauce doit être emballée à la main — non mélangée, non transformée en aliments. Travaillant sur une planche propre, hacher grossièrement les feuilles de persil et les tiges fines ensemble jusqu'à ce qu'elles soient finement hachées, mais ont encore de la texture, pas une pâte humide. Couper grossièrement les câpres; s'il s'agit de gros câpres salins, les couper en deux ou en trois. Placez les filets d'anchois à plat et les hacher dans une pâte rugueuse — ils vont presque se dissoudre sous le couteau. Arrosez l'ail très finement, ou pressez-le par une presse à l'ail. Combinez tout sur la planche et lancez un couteau à bascule à travers la pile combinée 20-30 fois jusqu'à ce que le mélange soit cohésif mais visiblement rugueux — chaque composant reste identifiable mais fonctionne dans son ensemble.",
      "visualCue": {
        "primaryTarget": "Un monticule rugueux et parfumé de mélange à mailles vertes - persil la présence dominante, avec des morceaux de câpres pâles visibles et l'anchois réduit à des morceaux hachés presque invisibles partout. La pile devrait être texturée et rustique, jamais lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants sont à peine mélangés — de grandes feuilles de persil, des câpres entiers et des filets anchois visibles encore séparés sur la planche.",
            "action": "Continuer à couper un mouvement de basculement avec le couteau d'un grand chef, en travaillant à plusieurs reprises sur la pile. La coupe répétée intègre et mélange tout sans détruire les textures individuelles."
          },
          {
            "state": "Perfect",
            "description": "Une pile uniformément hachée mais encore texturée — le persil est entièrement haché à une fine menthe, les câpres sont approximativement coupés en 2-3 morceaux chacun, et l'anchois s'est essentiellement dissous dans le persil. Toute la pile sent intensément les herbes et le sel salé.",
            "action": "Dans un bol. Ajouter la moutarde, le citron et l'huile. Continuez."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est transformé en pâte verte à partir du suremballage — le persil a libéré tellement de liquide qu'il est mouillé et tache la planche, et toute distinction textuelle a été perdue.",
            "action": "Vous avez fait une purée pesto-adjacent. Il aura un bon goût mais n'est plus salsa verde dans la texture. Utiliser tel quel, ou accepter la différence."
          }
        ]
      },
      "feelCue": "Passez vos doigts à travers le mélange haché — il devrait se sentir comme des herbes humides et grossièrement broyées: chaque pièce distincte mais l'ensemble assez cohésif pour s'accrocher légèrement en appuyant. Aucune grande tige ne doit rester."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "chopped_solids",
        "ing_08",
        "ing_05",
        "ing_06"
      ],
      "outputState": "dressed_verde",
      "instructions": "Gratter le mélange haché dans un bol. Ajouter la moutarde de Dijon et la travailler dans les herbes à l'aide d'une cuillère — la moutarde agit comme un liant, aidant l'huile d'olive à s'accrocher au persil plutôt que de se mettre au fond du bol. Incorporer le jus de citron et le zeste de citron. Goûtez à ce stade, avant l'entrée de l'huile: le mélange doit goûter intensément salé des anchois et des câpres (cela sera atténué par l'huile), agressivement citron-brillant, et vert-herbe. Si le goût est plat, ajoutez plus de citron ou une petite pincée de sel.",
      "visualCue": {
        "primaryTarget": "Les herbes hachées et les câpres scintillent légèrement avec du jus de citron, liés par un frottis pâle de moutarde partout. Le mélange est encore sec et émietté, pas encore salé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moutarde est encore visible en une seule stries plutôt qu'intégrée dans l'ensemble. Le citron n'a pas été entièrement travaillé et les piscines au fond du bol.",
            "action": "Incorporer plus vigoureusement la moutarde et le citron dans le mélange d'herbes avant d'ajouter de l'huile."
          },
          {
            "state": "Perfect",
            "description": "Tout est uniformément distribué — la moutarde n'est plus visible en tant qu'élément séparé, mais elle recouvre les morceaux d'herbe. Le mélange sent le citron et le persil, vif et à base de plantes. Il a un goût agressif et salé.",
            "action": "Plier dans l'huile d'olive. Continuez."
          },
          {
            "state": "Overdone",
            "description": "Trop de jus de citron a rendu le mélange aqueux et le persil a commencé à devenir terne et légèrement gris de l'acide.",
            "action": "Égoutter l'excès de jus de citron et compenser la perte de luminosité avec un petit ajout de zeste, qui porte l'arôme de citron sans liquide supplémentaire."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité du mélange d'herbes entre vos doigts après avoir ajouté la moutarde et le citron — il devrait grincer légèrement et se sentir légèrement collant, comme un fond de café humide, plutôt que de tomber comme des herbes sèches lâches."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "dressed_verde",
        "ing_07",
        "ing_09",
        "ing_10"
      ],
      "outputState": "rested_salsa_verde",
      "instructions": "Faites passer l'huile d'olive sur le mélange d'herbes dans un verser lentement et régulièrement tout en remuant constamment avec une fourchette ou une cuillère. L'huile n'a pas besoin d'émulsionner ici — il s'agit d'une suspension à base d'huile, pas d'émulsion crémeuse — mais elle devrait être répartie uniformément de sorte que chaque morceau de persil soit enduit et éblouissant. Assaisonner avec une petite pincée de sel (les anchois et les câpres sont déjà fortement salés — goût avant ajout) et poivre noir. Bien mélanger puis reposer la salsa verde à la température ambiante pendant au moins 15 minutes avant de servir — ce reste permet au citron de se moeller, à l'anchois de s'intégrer pleinement et à l'huile d'absorber une partie de la saveur verte du persil.",
      "visualCue": {
        "primaryTarget": "Une sauce souple, scintillante et vert vif — chaque pièce d'herbe enrobée d'huile d'or, l'ensemble semble vif et vivant. Il doit s'écouler lentement lorsque le bol est incliné, pas la piscine comme l'eau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est assise sur le dessus des herbes dans une couche séparée, ou il y a trop peu d'huile et le mélange est sec et mijoté plutôt que saucy.",
            "action": "Mélanger plus vigoureusement et ajouter progressivement de l'huile jusqu'à ce que chaque morceau d'herbe soit entièrement enduit et que la sauce s'écoule librement lorsque le bol est incliné."
          },
          {
            "state": "Perfect",
            "description": "Une sauce brillante, scintillante, profondément verte, avec une texture lâche et fluide, elle verse une cuillère dans une bruine rapide et laisse une riche tache verte sur tout ce qu'elle touche. La saveur est affirmée à base de plantes, salées, citronnées et salées.",
            "action": "Reposez-vous 15 minutes avant de servir. La sauce est à son apogée immédiatement après ce repos; servir le même jour."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile a rendu la sauce mince et grasse, avec les herbes nageant dans une piscine d'huile d'olive teinte de vert - le rapport herb-to-huile est perdu.",
            "action": "Ajouter plus finement le persil haché pour rééquilibrer le rapport. La sauce peut absorber significativement plus d'herbe si nécessaire."
          }
        ]
      },
      "feelCue": "Déposer une petite quantité sur une assiette blanche et l'incliner — la sauce devrait s'écouler et s'étendre, laissant derrière elle des traces d'huile verte vive. Si elle est assise dans un monticule fixe, elle a besoin de plus d'huile. Si elle coule comme de l'eau, elle a besoin de plus d'herbe."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "rested_salsa_verde"
      ],
      "outputState": "finished_salsa_verde_italiana",
      "instructions": "Laisser reposer la sauce à température ambiante pendant 15 minutes minimum — 30 minutes est mieux. Pendant ce temps, l'acide du citron adoucit le bord brut de l'ail et flétrit complètement l'anchois dans l'huile, créant une saveur plus cohérente plutôt que des composants distincts identifiables. Goûtez une fois de plus après le repos et ajustez-vous : la salsa verde doit goûter poinçonné, herbacé, salé et lumineux – suffisamment affirmé pour se tenir à côté d'un bollito gras misto ou d'un steak grillé carbonisé. Si les saveurs ont changé pendant le repos, illuminer avec une touche finale de citron.",
      "visualCue": {
        "primaryTarget": "Après le repos, la couleur est légèrement plus profonde et les herbes ont absorbé un peu d'huile, rendant la sauce légèrement plus épaisse et plus cohésive que immédiatement après le mélange. L'arôme est plus intégré — moins aiguisé vers l'ail, plus d'une impression unique à base de plantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Juste mélangé et servi immédiatement — l'ail est dur, l'anchois est encore une note séparée détectable, et l'huile et les herbes n'ont pas complètement combiné.",
            "action": "La sauce n'est pas ruinée, mais laissez-la reposer. Quinze minutes est un minimum pour que la salsa verde devienne plus que la somme de ses parties."
          },
          {
            "state": "Perfect",
            "description": "Après le repos, la sauce a un goût arrondi et affirmé : herboristerie, citronnée, salée-profonde de l'anchois et des câpres, avec l'ail présent mais pas dur. Tous les composants ont fusionné en un tout cohérent.",
            "action": "Servir avec de la viande grillée, du poisson poché, du bollito misto ou des légumes rôtis."
          },
          {
            "state": "Overdone",
            "description": "A découvert pendant plus de 2 heures à température ambiante — le persil commence à s'oxyder en olive-drabe, le jus de citron a perdu sa luminosité, et l'ail s'est mêlé du passé en muette.",
            "action": "Ajouter le persil frais haché et un peu de citron juste avant de servir pour restaurer la vivacité."
          }
        ]
      },
      "feelCue": "Plongez un morceau de pain dans la salsa verde reposée — chaque morsure devrait donner un coup immédiat de sel à base de plantes, suivi de la profondeur savoureuse de l'anchois et de la liftée claire du citron. Si le pain a surtout un goût d'huile, l'équilibre de l'herbe à l'huile doit être ajusté."
    }
  ]
};
