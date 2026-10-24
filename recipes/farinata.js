export default {
  "repoId": "master_italian_farinata_001",
  "parentRepoId": null,
  "slug": "farinata",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Farinata Genovese",
  "description": "Un mince pancake à la farine de pois chiches crépitant de la côte ligurienne, blister et dorer aux bords d'une poêle en cuivre chaud et hurlante, crépuscule et dorée à l'intérieur, n'ayant besoin que d'un poivre noir et d'un four patient.",
  "cuisine": "Italien",
  "culture": "Ligurien",
  "category": "grains",
  "tags": [
    "végétalien",
    "Sans gluten",
    "pois chiches",
    "Pain plat",
    "Italien",
    "ligurie",
    "Produits de la rue"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "5 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine de pois chiches (farina di ceci)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de gramme (san, similaire mais plus dense)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau tiède",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.03,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir grossièrement craqué",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04"
      ],
      "outputState": "farinata_batter",
      "instructions": "Sirotez la farine de pois chiches dans un grand bol pour enlever les morceaux. Peu à peu fouetter dans l'eau tiède, l'ajouter dans un ruisseau lent tout en fouettant constamment. L'objectif est une pâte complètement lisse, sans grumeaux, la consistance de la crème fine. Ajouter le sel et fouetter à nouveau. Éliminez la mousse qui monte à la surface — cette mousse, si elle est laissée dedans, crée des bulles qui empêchent le haut lisse caractéristique. Couvrir avec un chiffon et reposer à température ambiante pendant 4 heures minimum, 8 heures idéalement. Pendant le repos, la farine s'hydrate complètement et la pâte s'approfondit en saveur.",
      "visualCue": {
        "primaryTarget": "Une pâte translucide jaune pâle sans grumeaux et sans mousse visible à la surface. Il devrait envelopper l'arrière d'une cuillère légèrement et s'écouler dans une feuille lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des lumps de farine sèche de pois chiches flottent dans la pâte. La mousse couvre toute la surface.",
            "action": "fouetter plus vigoureusement et tendrer à travers un tamis à mailles fines. Essuyez la mousse avec une cuillère et jetez."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, or pâle et légèrement translucide. Quand vous soufflez à travers la surface aucune forme d'ondulation — un bon signe de la viscosité droite. Après le repos, il sent peu les pois chiches et a un éclat mince et huileux où la farine s'est légèrement installée au fond.",
            "action": "Incorporer délicatement la farine, puis cuire."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est épaissie pendant le repos jusqu'à la consistance de la pâte à crêpes — la farine a trop hydraté et absorbé trop d'eau.",
            "action": "Finissez avec un petit jet d'eau et fouettez. Goûter — s'il s'est amer (rare mais possible avec un long repos en chaleur), jeter et recommencer."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la pâte reposée — il devrait être mince et se sentir comme de la soie, pas de la fécule de maïs. La farine n'est pas encore complètement hydratée."
    },
    {
      "nodeId": "step_2",
      "action": "Chaleur",
      "inputs": [
        "ing_03"
      ],
      "outputState": "seasoned_hot_pan",
      "instructions": "Placer une poêle ronde en cuivre ou en acier au carbone de 30 cm (ou une poêle en fonte lourde) dans le four. Chauffer le four à sa température maximale — 280 °C (540 °F) si votre four l'atteigne, ou aussi haut que possible. Laisser chauffer au four pendant au moins 20 minutes. Lorsque vous êtes prêt à cuire, retirez la poêle avec des gants épais et versez dans l'huile d'olive, inclinant pour enrober toute la surface. L'huile devrait mijoter immédiatement. Verser la pâte à une profondeur de 5 à 6 mm — pas plus. La pâte doit étourdir les bords au contact.",
      "visualCue": {
        "primaryTarget": "L'huile brille de chaleur, formant la plus faible brume au-dessus de la surface de la casserole. La pâte étourdit audiblement lorsqu'elle est versée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile reste immobile et refroidit lorsque la poêle est retirée du four. Pas de vertige quand la batte frappe.",
            "action": "Retournez la poêle au four pendant encore 10 minutes. Une casserole froide signifie une farinata soyeuse et sans tache."
          },
          {
            "state": "Perfect",
            "description": "L'huile brille. La pâte s'étourne aux bords au contact et commence à se régler dans les 30 secondes suivant le passage. Les bords montrent immédiatement un bord de pâte cuite.",
            "action": "Placez au four immédiatement au support supérieur."
          },
          {
            "state": "Overdone",
            "description": "L'huile fume et la pâte brûle immédiatement au contact, créant un fond sombre avant les ensembles supérieurs.",
            "action": "Retirer brièvement la poêle, laisser refroidir 1 minute, essuyer avec un chiffon, ajouter l'huile fraîche et verser la pâte."
          }
        ]
      },
      "feelCue": "Tenez votre main à 10 cm au-dessus de la surface vide de la poêle huilée — vous devriez sentir une chaleur intense et éclatante. C'est le minimum pour une bonne farinata."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "farinata_batter",
        "seasoned_hot_pan",
        "ing_05"
      ],
      "outputState": "finished_farinata",
      "instructions": "Faites glisser la poêle sur la grille supérieure du four. Cuire 5 minutes, puis disperser le poivre noir grossièrement fissuré sur la surface. Cuire encore 8-12 minutes jusqu'à ce que le centre soit réglé et que les bords soient profondément cloqués et dorés. Le dessus devrait avoir une fine croûte d'or papier tandis que l'intérieur reste légèrement crépuscule — c'est la marque de Farinata, pas un pancake entièrement sec. Retirer et servir immédiatement de la poêle, couper en quartiers irréguliers.",
      "visualCue": {
        "primaryTarget": "Un disque d'or fin avec un haut en papier blister et des bords foncés caramélisés. Le centre s'est fixé mais tremble encore légèrement quand la poêle est bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est liquide et se déplace comme de l'eau. Le haut n'a pas de couleur et la surface est mouillée.",
            "action": "Retourner au four 5 minutes de plus. Le centre doit être réglé avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Le haut est doré-ambre avec des taches plus foncées sur le bord. Un couteau inséré au centre sort avec un mince film crémeux — pas liquide, pas sec. Les bords sont croquants et légèrement tirés de la poêle. La farinata sent le pois chiche grillé et l'huile d'olive.",
            "action": "Servir immédiatement — Farinata n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Le centre est complètement sec et les bords brun foncé approchent le noir. La texture est carton-plat sans intérieur crépus.",
            "action": "Servir avec de l'huile d'olive extra arrosée pour compenser la sécheresse. Toujours bon, mais pas idéal."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un bout de doigt au centre de la farinata — il devrait se sentir juste réglé, avec un faible rendement donner comme une crème ferme, pas complètement rigide. Ce don est l'âme du plat."
    }
  ]
};
