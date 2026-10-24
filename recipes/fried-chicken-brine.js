export default {
  "repoId": "master_american_fried-chicken-brine_001",
  "parentRepoId": null,
  "slug": "fried-chicken-brine",
  "author": "ForkRecipe Kitchen",
  "title": "Saumure de poulet frite",
  "description": "Un bain de babeurre tanné et épicé qui pénètre profondément dans le poulet pendant 12 à 24 heures, tendressant les fibres musculaires et construisant une base assaisonnée qui porte tout le chemin vers l'os.",
  "cuisine": "Américain",
  "culture": "Sud",
  "category": "condiments",
  "tags": [
    "saumure",
    "beurre",
    "sud",
    "Poulet frit",
    "marinade"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "720 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 7,
    "sour": 6,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait de boucherie",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "yogourt de lait entier clair éclairci avec de l'eau 1:1"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de mer fin (réduire de 20%)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "sauce chaude (cristal ou Frank)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "saumure jalapeño marinée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "2 girofles d'ail frais, cassé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre d'oignon",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "thym séché (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
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
      "outputState": "brine_mixture",
      "instructions": "Verser le babeurre dans un grand bol ou un grand récipient. Ajouter le sel casher et fouetter jusqu'à ce qu'il soit complètement dissous — le sel non dissous créera des poches salées dans le poulet fini plutôt que d'assaisonner. Ajouter la sauce chaude, le paprika fumé, la poudre d'ail, la poudre d'oignon et le poivre noir, et fouetter jusqu'à uniforme. Bruser le thym entre vos paumes pour libérer les huiles essentielles avant de les ajouter.",
      "visualCue": {
        "primaryTarget": "Un liquide uniformément orange pâle à rose teinté par le paprika. Pas de cristaux de sel blanc visibles au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cristaux de sel sont encore visibles au fond du bol. Les épices apparaissent comme des amas secs à la surface.",
            "action": "Frottez plus vigoureusement pendant 30 secondes. Si le sel est très grossier, laissez-le reposer 2 minutes et fouetter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, saumure légèrement orange. Goûte agressivement salée et tannante avec une note de chaleur. Cette affirmation est correcte — elle est diluée par le poulet.",
            "action": "Ajouter les morceaux de poulet et submerger complètement."
          },
          {
            "state": "Overdone",
            "description": "S/O — Vous ne pouvez pas trop mélanger une saumure. Cependant, si vous doublez accidentellement le sel, diluer avec plus de beurre maintenant.",
            "action": "Ajouter le babeurre en parties égales pour réduire de moitié la concentration de sel."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité sur le dos de votre main — il devrait vous frapper aussi nettement plus salé que vous voudriez de la nourriture à goûter, ce qui est correct. Une saumure aussi épaisse devrait ressembler à du yogourt liquide et froid."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "brine_mixture"
      ],
      "outputState": "brined_chicken",
      "instructions": "Ajouter les morceaux de poulet (généralement un oiseau coupé de 1,5 kg ou des parties équivalentes). Appuyez sur chaque pièce sous la saumure et tournez en couche. Si vous utilisez un sac à fermeture éclair, retirez l'air avant de sceller afin que chaque surface soit en contact avec la saumure. Réfrigérer pendant au moins 8 heures; 12 à 24 heures est idéal. Ne saumurez pas pendant plus de 24 heures — les acides commenceront à dénaturer les protéines de surface et à rendre le revêtement glissant.",
      "visualCue": {
        "primaryTarget": "Tous les morceaux de poulet sont entièrement submergés sans qu'il y ait de portion au-dessus de la ligne de saumure. La saumure a pris une faible teinte rose de la viande crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains morceaux de poulet flottent avec une peau sèche au-dessus du niveau de la saumure. Une couverture inégale.",
            "action": "Peser le poulet avec une assiette ou le transférer dans un sac à fermeture éclair pour que toutes les surfaces contactent le liquide."
          },
          {
            "state": "Perfect",
            "description": "Poulet entièrement submergé. Après plus de 12 heures au réfrigérateur, la surface de la viande sera légèrement blanche et opaque, signalant la dénaturation des protéines à partir des acides — c'est exact.",
            "action": "Retirer de la saumure, secouer l'excès (ne pas rincer) et procéder au dragage."
          },
          {
            "state": "Overdone",
            "description": "Le poulet a brûlé plus de 30 heures. Les protéines de surface sont musquées et lissées, et le revêtement glisse pendant la friture.",
            "action": "Passez immédiatement à la drague. Ajouter 10% de farine de plus à la drague pour l'aider à adhérer. La texture va souffrir mais la saveur est bonne."
          }
        ]
      },
      "feelCue": "Après la pleine saumure, le poulet cru devrait se sentir nettement plus tendre et juteux au toucher que le poulet frais. La surface se sentira légèrement piquante à partir du babeurre épaissé — c'est la couche adhésive que la drague de farine prend."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser reposer",
      "inputs": [
        "brined_chicken"
      ],
      "outputState": "tempered_brined_chicken",
      "instructions": "Retirez le poulet de la saumure et placez-le sur une grille en fil sur une casserole. Ne pas rincer. Laisser reposer à température ambiante de 20 à 30 minutes avant le dragage. Le poulet froid apporté directement de la saumure à l'huile chaude provoque deux problèmes : les frites extérieures avant que l'intérieur ne cuise, et la chute de température dans l'huile ralentit le brunissement. Des frites de poulet à température ambiante plus uniformément.",
      "visualCue": {
        "primaryTarget": "La surface du poulet semble terne et légèrement mate lorsque l'excès de saumure s'écoule. Les bords de la peau commencent à sécher et à serrer légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saumure coule encore fortement des morceaux. La surface semble humide et brillante.",
            "action": "Donnez-lui plus de temps sur le rack. Patez les pièces les plus épaisses légèrement avec une serviette en papier si vous êtes pressé."
          },
          {
            "state": "Perfect",
            "description": "La surface est collante plutôt que humide. La saumure a formé un mince revêtement légèrement collant qui se lie à la drague de farine. Les pièces sont fraîches mais plus froides au toucher.",
            "action": "Passer directement à la drague de farine assaisonnée."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est resté à la température ambiante pendant plus de 45 minutes (préoccupation en matière de salubrité des aliments au-dessus de 4 °C).",
            "action": "Procédez immédiatement au dragage et à la friture. Ne retournez pas au réfrigérateur."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface d'un morceau de cuisse — le revêtement en saumure doit se sentir comme une pâte mince et légèrement collante plutôt qu'un film liquide humide. Cette tactosité est la matrice d'acide protéique-lactique qui fait la liaison croûte."
    }
  ]
};
