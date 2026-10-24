export default {
  "repoId": "master_spanish_spanishchorizoclams_001",
  "parentRepoId": null,
  "slug": "spanish-chorizo-clams",
  "author": "ForkRecipe Kitchen",
  "title": "Clams espagnols au Chorizo et au vin blanc",
  "description": "Les palourdes à petit cou s'ouvrent dans un bouillon de graisse chorizo fumée, de vin blanc et d'ail — le plat le plus facile dans le canon espagnol, et le plus susceptible de vous faire oublier tout ce que vous aviez prévu de cuisiner.",
  "cuisine": "Espagnol",
  "culture": "ibérique",
  "category": "proteins",
  "tags": [
    "protéine",
    "Palourdes",
    "chorizo",
    "Espagnol",
    "Produits de la mer",
    "vin"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Palourdes à petit cou, nettoyées",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Palourdes de Manille",
        "coqs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Chorizo espagnol (curé, tranché en pièces de monnaie)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Chouriço portugais"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec (Albariño ou Verdejo)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "stocks de poissons"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Paprika fumé (pimentón de la Vera)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Purge",
      "inputs": [
        "ing_01"
      ],
      "outputState": "purged_clams",
      "instructions": "Faire tremper les palourdes dans de l'eau froide légèrement salée (30g de sel par litre) pendant 30 minutes. Les palourdes expulseront tout sable et tout grain qu'elles détiennent. Égoutter et frotter les coquilles sous l'eau froide. Jeter toute palourde avec une coquille fissurée ou n'importe quelle autre qui ne se ferme pas quand tapoté — ceux - ci sont morts et ruineront le plat. Triez-les une par une; une seule mauvaise palourde peut rendre le bouillon entier amer et désagréable.",
      "visualCue": {
        "primaryTarget": "Nettoyez les coquilles de palourdes bien fermées sans sable ni boue à l'extérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les clams sont encore gritty quand vous frottez vos doigts sur les coquilles. Certains peuvent encore avoir du sable dans leurs charnières.",
            "action": "Changez l'eau et trempez encore 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les coquilles sont propres et lisses. En tapotant, toutes les palourdes vivantes se ferment étroitement. L'eau de trempe a du sable et du sable au fond.",
            "action": "Égoutter et procéder à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les clams sont si longtemps trempés dans la même eau qu'ils réingèrent du sable expulsé.",
            "action": "Changez l'eau et donnez-leur 5 minutes de plus dans l'eau salée, puis égouttez."
          }
        ]
      },
      "feelCue": "Exécutez une coquille propre de palourde entre vos doigts — elle devrait être lisse et légèrement crayeuse, et non pas gritty. La charnière doit se sentir serrée et ressortre quand elle est pressée."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "purged_clams",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_08"
      ],
      "outputState": "chorizo_base",
      "instructions": "Chauffer l'huile d'olive dans une poêle large et lourde avec un couvercle à feu moyen. Ajouter les pièces de chorizo et cuire pendant 2-3 minutes jusqu'à ce que la graisse rende et l'huile devient un rouge orange vif du paprika dans le chorizo. Ajouter l'ail tranché et le paprika fumé, cuire 60 secondes jusqu'à odorat. Ne laissez pas l'ail brunir. Cette graisse de chorizo rendu est le fondement de tout le plat.",
      "visualCue": {
        "primaryTarget": "L'huile dans la poêle est fortement rouge-orange de la graisse chorizo. Les tranches d'ail sont dorées et translucides aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces de Chorizo sont encore pâles et l'huile est claire. La graisse de couleur paprika n'a pas encore rendu.",
            "action": "Continuer la cuisson à feu moyen. La graisse a besoin de rendre complètement du chorizo pour la saveur à transférer au bouillon."
          },
          {
            "state": "Perfect",
            "description": "L'huile est rouge-orange vif. Les pièces de Chorizo sont légèrement fermes, pas croustillantes. L'ail est doré aux bords et parfumé.",
            "action": "Ajouter immédiatement les palourdes et le vin — ne laissez pas l'ail aller plus loin."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et commence à sentir amer. Le chorizo est croustillant et sec.",
            "action": "Ajouter le vin immédiatement pour arrêter la cuisson. L'ail brûlé amère légèrement le bouillon; ajouter un peu de citron à la fin pour compenser."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir le paprika et rendre le porc gras — chaud, fumé et intensément salé. C'est le moment où le plat s'annonce."
    },
    {
      "nodeId": "step_3",
      "action": "vapeur",
      "inputs": [
        "chorizo_base",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "finished_chorizo_clams",
      "instructions": "Ajouter les palourdes frottées dans la poêle et verser immédiatement dans le vin blanc. Couvrez bien et augmentez la chaleur. Cuire de 4 à 5 minutes en agitant la poêle une ou deux fois. Commencez à vérifier à 4 minutes — au moment où toutes (ou presque) les palourdes sont ouvertes, elles sont terminées. Retirer le couvercle et ajouter le persil et le jus de citron. Mélanger rapidement et servir dans des bols profonds avec du pain croustillant pour éponger le bouillon. Jeter toute palourde qui n'a pas ouvert après 6 minutes — elle était morte avant de cuisiner.",
      "visualCue": {
        "primaryTarget": "Toutes les coquilles de palourdes sont ouvertes, recourbées pour révéler la chair à l'intérieur. Le bouillon est un rouge-orange vif de la graisse de chorizo.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 3 minutes, moins de la moitié des palourdes ont ouvert. Le bouillon mijote encore à peine.",
            "action": "Couvrir et donner 2 minutes de plus à feu vif. Ne pas découvrir trop tôt — la vapeur est essentielle."
          },
          {
            "state": "Perfect",
            "description": "Presque toutes les palourdes sont ouvertes, révélant de la viande fraîche. Le bouillon est rouge-orange vif et sent la mer, le vin et la fumée. La chair de palourde est encore légèrement translucide au point le plus épais.",
            "action": "Ajouter le persil et le citron. Servir immédiatement — chaque minute que les palourdes dépensent sur la chaleur après l'ouverture les durcit."
          },
          {
            "state": "Overdone",
            "description": "La viande de clam a contracté une petite boucle caoutchouteuse. Les coquilles sont ouvertes depuis trop longtemps.",
            "action": "Servir immédiatement. Les palourdes surcuites sont encore bonnes: le bouillon est le salut. Fournir du pain supplémentaire."
          }
        ]
      },
      "feelCue": "Soulevez une palourde cuite de la coquille avec vos doigts — elle devrait se sentir plombée et soyeuse, donnant avec une très légère résistance. S'il se sent comme une gomme en caoutchouc, il a cuit trop longtemps."
    }
  ]
};
