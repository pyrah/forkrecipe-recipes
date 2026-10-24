export default {
  "repoId": "master_korean_gochujang_001",
  "parentRepoId": null,
  "slug": "gochujang",
  "author": "ForkRecipe Kitchen",
  "title": "Gochujang",
  "description": "La pâte de chili fermentée de base de la Corée — une alchimie lente du riz glutineux, des flocons de gochugaru et du soja meju en poudre qui ferment pendant des mois sous le soleil en quelque chose de fougueux, complexe et non reproductible par toute autre méthode.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "fermented",
  "tags": [
    "fermenté",
    "coréen",
    "Chili",
    "Gochujang",
    "soja",
    "umami",
    "chaleur"
  ],
  "difficulty": 4,
  "activeTime": "3 hours",
  "totalTime": "120 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine de riz (glutineuse) douce",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 800,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Poudre de malt d'orge (yeotgireum-garu)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "sirop de malt de riz"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gochugaru (poivrons rouges coréens)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Poudre de Meju (soya fermenté)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "doenjang (pâte de soja coréen)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel marin non iodé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sirop de malt foncé (jocheong)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rice_porridge",
      "instructions": "Dissoudre la farine de riz glutineuse et le malt d'orge en poudre dans l'eau. Cuire à feu moyen-doux, en remuant constamment avec une cuillère en bois, pendant 20-25 minutes, jusqu'à ce que le mélange s'épaississe à une pâte brillante, semblable à de la lave, qui s'éloigne des côtés de la poêle. Retirer du feu et refroidir à la température ambiante. La pâte est la base fermentable de glucides qui nourrit le koji pendant le vieillissement.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, translucide et collante — la couleur du miel ambre pâle — qui tombe de la cuillère dans des feuilles lentes et larges plutôt que dans des gouttes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et laiteux, en courant sur la cuillère dans un ruisseau. Pas encore de translucidité.",
            "action": "Continuer la cuisson à feu doux, en remuant constamment. L'amidon doit être entièrement gélatinisé."
          },
          {
            "state": "Perfect",
            "description": "Pâte d'ambre translucide, épaisse comme du caramel chaud. Une ligne tracée à travers la pâte sur la base de la poêle conserve sa forme pendant 3 secondes.",
            "action": "Laisser refroidir complètement à température ambiante avant de combiner avec le gochugaru."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est considérablement obscurcie et les odeurs d'amidon brûlé. Caramélisé par endroits.",
            "action": "Refroidir et goûter — sinon amer, procéder. Une légère note de caramel est acceptable dans le gochujang final."
          }
        ]
      },
      "feelCue": "À la bonne consistance, la pâte enveloppe autour de la cuillère comme du taffiy chaud lorsque vous remuez — lourd, lent et glutineux, enrobant la cuillère dans un épais film transparent."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "rice_porridge",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "gochujang_paste",
      "instructions": "Lorsque la pâte de riz est complètement fraîche, ajouter le gochugaru, la poudre de meju, le sel et le sirop de malt. Mélanger soigneusement à la main (vêtements : le gochugaru tachera et irritera la peau). La pâte doit être homogène, de couleur rouge-brique profonde et légèrement plus rigide que le produit final fermenté. Bouche: il doit être très épicé, assez salé, et avoir une profondeur cru meju qui est légèrement funky.",
      "visualCue": {
        "primaryTarget": "Une pâte uniforme, rouge brique profonde — la couleur du sang séché — avec une texture lisse et sans morceaux de farine ou de poivrons non incorporés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Hétérogène — poches de gochugaru non mélangées visibles comme des taches plus foncées. Meju et sel inégalement répartis.",
            "action": "Mélanger encore 5 minutes, grattant soigneusement les côtés et le fond du bol."
          },
          {
            "state": "Perfect",
            "description": "Un rouge foncé uniforme, épais et extensible. Il sent le chili cru, le soja fermenté et un soupçon de douceur.",
            "action": "Transférer au récipient de fermentation et commencer la fermentation."
          },
          {
            "state": "Overdone",
            "description": "La pâte est aqueuse — trop de liquide a été ajouté ou la pâte de riz n'était pas assez épaisse.",
            "action": "Ajouter 30-50 g de gochugaru et mélanger pour resserrer la consistance."
          }
        ]
      },
      "feelCue": "La pâte brute est assez piquante pour faire de l'eau pour vos yeux si vous vous penchez dans — une chaleur vive, brute, presque chimique du gochugaru frais, très différente de la chaleur ronde du produit fini."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "gochujang_paste"
      ],
      "outputState": "finished_gochujang",
      "instructions": "Conditionnez la pâte dans un pot traditionnel en faïence ou un pot en verre propre. Couvrir d'une fine maille ou d'une nappe de fromage fixée à l'aide d'une bande de caoutchouc. Placez à l'extérieur ou dans un endroit ensoleillé (idéalement 25-35 C) pendant 60-120 jours. Incorporer délicatement une ou deux fois par semaine avec une cuillère en bois propre. Apportez à l'intérieur la nuit si la température tombe sous 10 °C.",
      "visualCue": {
        "primaryTarget": "Après 60 jours : la pâte s'est creusée de rouge brique vif à un riche brun rouge foncé. La surface a un léger reflet et peut montrer un mince film blanc de levure sauvage — c'est normal.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le goût est toujours vif et vif: la chaleur domine sans douceur ni profondeur. La couleur est encore rouge vif. 30-45 jours.",
            "action": "Continuez à fermenter. Les réactions Maillard et l'activité enzymatique ont besoin de plus de temps. Ne vous pressez pas."
          },
          {
            "state": "Perfect",
            "description": "Briques rouges profondes à acajou, arôme complexe — doux, épicé, fermenté et profondément salé. La chaleur est ronde et soutenue plutôt que aiguë. La pâte est brillante et bien intégrée.",
            "action": "Transférer dans des pots de verre et réfrigérer. Elle continuera de se développer lentement pendant des mois."
          },
          {
            "state": "Overdone",
            "description": "Très foncé, presque brun. Très vif. Sens fortement alcoolique ou vinaigre.",
            "action": "La fermentation est trop longue ou trop chaude. Elle n'est pas ruinée: l'utilisation en petites quantités dans les plats cuits, pas dans les applications brutes."
          }
        ]
      },
      "feelCue": "Le gochujang fini doit se sentir comme de la pâte de tomate épaisse — substantielle et légèrement résistante sous la cuillère, avec une couleur rouge riche et profonde sur les doigts qui ne s'essuye pas facilement."
    }
  ]
};
