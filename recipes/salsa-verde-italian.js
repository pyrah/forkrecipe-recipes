export default {
  "repoId": "master_italian_salsa_verde_001",
  "parentRepoId": null,
  "slug": "salsa-verde-italian",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Verde italienne",
  "description": "Une sauce à l'herbe milanaise de persil, d'anchois, de câpres et d'ail desserré d'huile d'olive et de vinaigre de vin rouge — cru, immédiat et assez fort pour couper à travers les viandes braisées les plus riches.",
  "cuisine": "Italien",
  "culture": "Milanais/Lombard",
  "category": "sauces",
  "tags": [
    "Italien",
    "herbe-sauce",
    "Sauce froide",
    "anchois",
    "Câpres",
    "persil",
    "Milanese"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles seulement",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Filets d'anchois dans l'huile, égouttés",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte d'anchois (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Récipients, rincés (favorisé pour le sel)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "baies de câpres, environ coupées en deux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "ail rôti pour un résultat plus doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Moutarde de Dijon",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_04",
        "ing_08"
      ],
      "outputState": "garlic_paste",
      "instructions": "Placez les gousses d'ail dans un mortier avec le sel. Pound dans un mouvement circulaire, grattant les murs périodiquement, jusqu'à ce que vous ayez une pâte lisse, collante, légèrement translucide, sans morceaux d'ail visible restant. Le sel agit comme abrasif — utilisez - le généreusement dès le départ. Cela prend environ 2 minutes de travail soutenu. Si l'on utilise un couteau à la place : hacher l'ail fin, puis utiliser le plat de la lame pour le frotter à travers la planche, racler et répéter jusqu'à ce qu'il forme une pâte.",
      "visualCue": {
        "primaryTarget": "Une pâte de crème pâle et lisse avec une faible translucidité de l'ail cru, pas de brins fibreux et une odeur d'ail cru perçant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Morceaux d'ail grossiers encore clairement visibles. La pâte est épaisse et humide, pas encore cohésive.",
            "action": "Continuez à frapper. Inclinez le mortier pour corraler les morceaux qui s'échappent; livrez sous différents angles pour les briser uniformément."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte collante qui s'accroche au pilon dans les cordes lorsqu'il est levé et libère proprement. Il ne reste pas de morceaux fibreux ou tranchants.",
            "action": "Ajouter les filets d'anchois, les câpres et la moutarde au mortier et continuer."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu un liquide aqueux — toute la structure cellulaire est effacée et le liquide est mis dans le bol du mortier.",
            "action": "C'est bon pour la salsa verde. La saveur d'ail sera maximalement piquante mais légèrement moins complexe. Continuez."
          }
        ]
      },
      "feelCue": "La pâte devrait s'accrocher au pâté comme un adhésif collant — soulevez le pâté lentement et il s'en dégage des ficelles d'ail qui traînent avant de se libérer avec un petit coup."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "garlic_paste",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "herb_paste_base",
      "instructions": "Ajoutez les filets d'anchois à la pâte d'ail et livrez jusqu'à ce qu'ils se dissolvent complètement dans la base – les anchois devraient disparaître, ne laissant aucune chair visible, seulement une couleur et un parfum plus profonds. Ajouter les câpres et la livre jusqu'à ce qu'ils soient écrasés mais conserver une texture rugueuse: vous voulez des fragments, pas l'effacement. Ajouter la moutarde de Dijon et la remuer avec le pilon. Bouche : il doit être intensément salé, salé et poinçonné.",
      "visualCue": {
        "primaryTarget": "Une pâte foncée, scintillante, à texture rugueuse avec des fragments visibles de câpres. Pas de morceaux d'anchois identifiables — ils auraient dû être complètement dissous dans la base de l'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Filets d'anchois encore visibles en pièces roses ou grises distinctes. C'est toujours complet. La pâte manque de cohésion.",
            "action": "Continuez à frapper avec patience — les anchois ont besoin d'une pression soutenue pour se briser. Encore 60 secondes de travail cohérent."
          },
          {
            "state": "Perfect",
            "description": "Les anchois sont invisibles, totalement absorbés. Les câpres sont écrasés en fragments bruts, vert foncé. La pâte est cohésive, sombre, brillante et profondément salée.",
            "action": "Ajouter le persil haché et assembler la sauce finie."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est complètement lisse — toute texture perdue, câpres effacés dans la pâte.",
            "action": "La saveur sera excellente ; la sauce sera tout simplement plus lisse. Procéder — le persil restaurera une certaine texture."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité sur votre bout de doigt — il devrait frapper dans des vagues distinctes: d'abord sel et ail cru vif, puis un coussin rond, savoureux profond de l'anchois, puis un bref coup de saumure des câpres."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "herb_paste_base",
        "ing_01",
        "ing_05",
        "ing_06"
      ],
      "outputState": "salsa_verde_italiana",
      "instructions": "Empilez les feuilles de persil et hachez-les très finement avec le couteau d'un chef tranchant — n'utilisez pas de robot culinaire qui écrase le persil et le rend gris en quelques minutes. Visez un peu. Ajouter le persil haché à la pâte de mortier et plier avec le pilon. Loyer avec du vinaigre de vin rouge et de l'huile d'olive, en ajoutant chacun en alternance de petits ajouts pendant la dégustation après chaque — l'huile apporte le corps et arrondit les saveurs; le vinaigre le maintient en vie. La consistance finale doit être cuillable et fluide, non raide comme une pâte et non aqueuse comme une vinaigrette.",
      "visualCue": {
        "primaryTarget": "Une sauce verte vive et intense avec une texture d'herbe clairement visible, des flocons de câpres et de pâte d'anchois foncés partout, et un éclat de l'huile d'olive — versable dans un ruban lent et épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est épaisse et pâteuse, grondant sur une cuillère. Les herbes sont grossièrement hachées et dominent la texture; les saveurs ont un goût cru et dur.",
            "action": "Couper le persil plus finement, et ajouter une cuillère à soupe d'huile d'olive à la fois, en remuant bien après chaque addition jusqu'à ce que la sauce se détache à une consistance versante."
          },
          {
            "state": "Perfect",
            "description": "La sauce verse lentement d'une cuillère dans un ruban lourd et non cassé. La couleur est vert vif, la surface brillante, et la texture montre des taches de persil claires parmi les fragments de câpres.",
            "action": "Goûtez encore une fois pour le sel — les anchois et les câpres portent la plupart du sel, ajoutez donc soigneusement. Servir dans l'heure pour préserver la couleur des herbes."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop fine et grasse. Le persil s'est oxydé de vert vif à vert-armée terne.",
            "action": "Pound ou hacher dans un poing de persil frais pour restaurer le corps et la couleur. Un petit morceau de pain d'un jour déchiré pilonné dans la base absorbera également l'excès d'huile et ajoutera le corps textural."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir vivante sur la langue — l'ail cru mord proprement à l'arrière de la gorge, l'anchois fournit un coussin d'umami qui s'attarde, les câpres s'éclatent avec de la saumure, et le persil s'estompe avec une fraîcheur végétale."
    }
  ]
};
