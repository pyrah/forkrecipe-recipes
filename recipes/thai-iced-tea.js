export default {
  "repoId": "master_thai_thai_iced_tea_001",
  "parentRepoId": null,
  "slug": "thai-iced-tea",
  "author": "ForkRecipe Kitchen",
  "title": "Thé glacé thaïlandais",
  "description": "Thé Ceylan fortement brassé teinté à un orange ambré vif par les épices et la coloration alimentaire, refroidi sur la glace et couronné d'une lente goutte de lait condensé sucré qui coule à travers le thé dans des nuages blancs bouffants avant qu'il soit agité dans une boisson sucrée crémeuse et amère. C'est la couleur de boisson d'un après - midi de Bangkok — la couleur de la rouille et du soleil simultanément.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "beverages",
  "tags": [
    "boisson",
    "Thaï",
    "thé",
    "glacé",
    "lait condensé",
    "Boissons de rue",
    "doux"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Mélange de thé thaïlandais ( mélange de yen de cha — Ceylan aux épices et couleur orange)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "thé noir Ceylan fort + 1/4 c. à thé extrait de tamarin + colorant alimentaire (approximation)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau bouillante (95-100°C)",
      "ratioValue": 350,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Lait condensé sucré",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "lait évaporé + sucre (moins riche)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait évaporé (pour la couche supérieure blanche)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "crème lourde (plus riche)",
        "lait entier (léger)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre (facultatif, sucré supplémentaire)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sirop simple"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "cubes de glace, grands",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "glace écrasée (dilutes plus rapides — servir rapidement)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Anis étoilé (facultatif, pour stimuler l'arôme)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Pousse de cardamome, fissurée"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Tamarin au sol (facultatif – augmente la couleur et ajoute une légère note aigre)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_08"
      ],
      "outputState": "brewed_thai_tea",
      "instructions": "Portez l'eau à ébullition complète. Placez le mélange de thé thaïlandais (et en option l'anis étoile et le tamarin si vous l'utilisez) dans une chaussette de thé, une passoire fine ou un filtre à café en papier sur une grande pichet ou une tasse de mesure. Verser l'eau bouillante sur le thé dans un ruisseau lent et stable pour assurer une saturation complète. Laisser tremper le thé pendant 5 minutes sans le déranger — sans remuer. Le temps d'extraction est critique: trop court et le thé sera faible et arrosé avec une amertume insuffisante pour équilibrer le lait sucré; trop long et il devient agressivement tannique et dur. Après 5 minutes, appuyez fermement sur le mélange de thé à travers le filtre pour extraire le dernier du liquide, qui porte le plus de couleur et de corps. Ajoutez maintenant le sucre si vous l'utilisez — remuez pour dissoudre dans le thé chaud. Laisser refroidir au moins 10 minutes avant de refroidir davantage.",
      "visualCue": {
        "primaryTarget": "Un thé ambré-orange profond et opaque, la couleur de la rouille ou de la terre cuite, avec une légère teinte rougeâtre et sans nuages.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thé est ambre pâle, presque la couleur du thé noir légèrement brassé. Il manque la couleur orange vive et a un corps insuffisant pour équilibrer le lait condensé.",
            "action": "Plongez encore 2 minutes et appuyez plus fermement sur le sachet de thé ou la chaussette lors du retrait."
          },
          {
            "state": "Perfect",
            "description": "Un orange-ambre profond et vif qui est presque opaque dans la tasse. Prend sa couleur sous lumière directe. Sensations de thé épicé avec une légère douceur du mélange de thé. Légèrement amer, mais avec le corps.",
            "action": "Laisser refroidir le thé à température ambiante ou utiliser immédiatement sur la glace."
          },
          {
            "state": "Overdone",
            "description": "Le thé est trempé trop longtemps et est très foncé — presque brun-noir — avec une morsure de tanin astringente et pointue qui ne sera pas masquée par le lait condensé.",
            "action": "Diluer avec une petite quantité d'eau chaude et réduire légèrement le lait condensé pour compenser l'extraction plus forte."
          }
        ]
      },
      "feelCue": "Appuyez sur l'arrière d'une cuillère contre la chaussette de thé trempée et descendez - le liquide qui s'égoutte devrait tacher la cuillère un orange ambré profond qui est visible même dans un film mince. Cette intensité de couleur dans une couche mince signifie que le thé a plein corps."
    },
    {
      "nodeId": "step_2",
      "action": "Assembler",
      "inputs": [
        "brewed_thai_tea",
        "ing_03",
        "ing_06"
      ],
      "outputState": "iced_sweetened_tea",
      "instructions": "Remplissez un grand verre transparent complètement avec de grands glaçons — le verre doit être plein à moins de 2 centimètres de la jante. Verser d'abord le lait condensé dans le fond du verre : il est plus lourd que le thé et se déposera naturellement au fond si vous ajoutez le thé sur lui doucement. Maintenant versez le thé thaïlandais brassé lentement sur la glace, visant le côté du verre plutôt que le centre pour ralentir le vers et préserver la couche visuelle. Le thé sera une colonne orange-ambre vive et le lait condensé sera une couche blanche visible au fond de la glace — ce contraste est la signature visuelle de la boisson. Le lait condensé au fond n'a pas encore été mélangé.",
      "visualCue": {
        "primaryTarget": "Un verre de thé orange-ambre vif sur glace, avec une couche visible de lait condensé blanc posé au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait condensé a déjà été mélangé et la boisson est un orange crème pâle uniforme plutôt que de montrer la séparation spectaculaire de deux tons.",
            "action": "La présentation a été perdue mais la saveur est correcte. Ajouter une petite bruine de lait condensé sur le dessus pour restaurer partiellement le visuel."
          },
          {
            "state": "Perfect",
            "description": "Le verre montre une colonne de thé orange-ambre vif sur la glace avec une couche de lait blanc condensé distincte visible au fond. Le contraste est dramatique et les glaçons sont visibles comme une zone médiane claire.",
            "action": "Ajouter le lait évaporé flotter et servir avec une paille pour le dîner à remuer."
          },
          {
            "state": "Overdone",
            "description": "Trop de glace a été ajoutée et le volume de thé est insuffisant — la boisson sera très diluée.",
            "action": "Rempli avec plus de thé brassé."
          }
        ]
      },
      "feelCue": "Tenez le verre à la lumière — le thé devrait être orange translucide avec suffisamment de profondeur de couleur que vous ne pouvez pas facilement voir votre main clairement à travers le verre. Cette opacité signifie que le thé est correctement concentré pour survivre à la dilution de la glace."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "iced_sweetened_tea",
        "ing_04"
      ],
      "outputState": "finished_thai_iced_tea",
      "instructions": "Verser lentement le lait évaporé sur le dos d'une cuillère maintenue juste au-dessus de la surface du thé glacé. La cuillère brise la chute et étend le lait dans une fine couche sur le dessus du thé plutôt que de le couler immédiatement. Le lait évaporé devrait former un nuage blanc distinct ou une couche flottant sur le dessus du thé ambre — un visuel qui est autant une partie du thé glacé thaïlandais que la saveur. Servir avec une longue paille et ne pas remuer avant de servir — le diner remue sa propre boisson à table, tourbillonnant le lait condensé du bas et le lait évaporé du haut dans le thé, regardant l'orange s'assombrir et le blanc se dissoudre. Cet acte de remuement fait partie du rituel.",
      "visualCue": {
        "primaryTarget": "Un verre tricolore : lait évaporé blanc flottant sur le dessus, thé orange-ambre vif au milieu, et lait condensé blanc visible au fond à travers la glace.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait évaporé a coulé dans le thé et la couche supérieure a fusionné avec le thé orange. Pas de couche blanche visible sur le dessus.",
            "action": "Verser plus de lait évaporé sur la cuillère pour un flot frais, très lentement."
          },
          {
            "state": "Perfect",
            "description": "Les trois couches visibles sont distinctes : haut blanc, milieu orange, fond blanc. Le flotteur de lait évaporé tient au moins 1 minute avant de sombrer lentement. Le verre est froid et la condensation se forme à l'extérieur.",
            "action": "Servir immédiatement avec une paille."
          },
          {
            "state": "Overdone",
            "description": "Trop de lait évaporé a été ajouté — la couche supérieure est épaisse et le thé goûte principalement de lait plutôt que de thé épicé.",
            "action": "Incorporer et compléter avec du thé brassé supplémentaire."
          }
        ]
      },
      "feelCue": "Lorsque vous remuez la boisson entièrement assemblée et prenez la première gorgée à travers la paille — en tirant du fond où le lait condensé est le plus riche — le thé froid, doux, crémeux, légèrement amer devrait envelopper votre gorge d'une chaleur qui commence à froid et se termine au chaud à partir des notes d'épices du mélange de thé."
    }
  ]
};
