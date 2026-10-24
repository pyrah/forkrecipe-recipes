export default {
  "repoId": "master_japanese_shio_koji_001",
  "parentRepoId": null,
  "slug": "shio-koji",
  "author": "ForkRecipe Kitchen",
  "title": "Shio Koji",
  "description": "Le riz koji fermenté au sel qui se liquéfie pendant sept jours en une pâte sucrée et salée d'une puissance enzymatique dévastatrice — il tend les protéines, approfondit l'umami et transforme tout ce qu'il touche en quelque chose de plus que la somme de ses parties.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "fermented",
  "tags": [
    "fermenté",
    "Koji",
    "Japonais",
    "marinade",
    "umami",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "7 days",
  "ratioSystem": "weight",
  "stars": 1690,
  "forks": 231,
  "contributors": 57,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz séché koji (kome koji)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "orge koji pour une saveur plus terreuse"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer fin (non iodé)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau (filtrée, température ambiante)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "raw_shio_koji",
      "instructions": "Mélanger le koji séché, le sel et l'eau dans un pot ou un contenant en verre propre. Mélanger soigneusement avec des mains propres ou une cuillère en bois, en brisant les amas de koji. Assurez-vous que le sel est uniformément distribué. Le mélange doit se sentir comme du riz humide et salé — les grains de koji seront fermes et distincts.",
      "visualCue": {
        "primaryTarget": "Un mélange granulaire humide où chaque grain koji est visible et uniformément revêtu dans la solution d'eau salée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taillis secs de koji dans une piscine séparée d'eau salée — non mélangés.",
            "action": "Mélanger plus soigneusement, en pressant les grains koji contre le côté du pot pour les hydrater uniformément."
          },
          {
            "state": "Perfect",
            "description": "Toujours humide, chaque grain scintille. Sel dissous dans l'eau. Ça sent peu les champignons et les grains.",
            "action": "Couvrir et commencer la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Koji est complètement arrosé et musqué — trop d'eau a été ajoutée.",
            "action": "Le lot est compromis; la fermentation peut encore se poursuivre mais la texture sera éteinte."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir comme du sable humide — chaque grain distinct mais maintenu ensemble par l'humidité, non dissous dans un lisier."
    },
    {
      "nodeId": "step_2",
      "action": "Fermenter",
      "inputs": [
        "raw_shio_koji"
      ],
      "outputState": "fermenting_shio_koji",
      "instructions": "Couvrez le pot de manière lâche — pas hermétique, car le koji a besoin de respirer légèrement. Laisser à température ambiante (18-25°C / 64-77°F) pendant 7-10 jours. Mélanger une fois par jour avec une cuillère propre, presser les grains contre les côtés pour sentir l'adoucissement. Le mélange deviendra plus humide alors que les enzymes koji décomposent les amidons et libèrent du liquide. Il sentira progressivement plus doux et plus miso-like.",
      "visualCue": {
        "primaryTarget": "De 4 à 5 jours, les grains koji se sont adoucis de façon notable et le mélange est visiblement plus humide. Dès le 7ème jour, un bassin liquide distinct sur le dessus quand il n'est pas perturbé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de Koji sont encore fermes et secs les jours 3-4 sans liquéfaction visible.",
            "action": "Passer à un endroit plus chaud; l'activité enzymatique dépend de la température."
          },
          {
            "state": "Perfect",
            "description": "Les grains se sont adoucis à la consistance du riz surcuit. Le mélange est versable, sent doux de miso et vin de riz. La couleur est ambre pâle.",
            "action": "Bouche: doit être légèrement salé, doux et profondément umami. Continuer encore 1-2 jours si la douceur est encore trop faible."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est considérablement obscurci et sent l'acidité, comme le vinaigre doux.",
            "action": "Transférer immédiatement au réfrigérateur; il a fermenté au-delà du pic mais est encore utilisable comme marinade."
          }
        ]
      },
      "feelCue": "Au jour 7, la pâte de koji doit se sentir comme un yogourt épais, non plus gras, mais lisse et légèrement visqueuse lorsqu'on la presse entre les doigts."
    },
    {
      "nodeId": "step_3",
      "action": "Faire prendre",
      "inputs": [
        "fermenting_shio_koji"
      ],
      "outputState": "finished_shio_koji",
      "instructions": "Une fois le shio koji a atteint sa douceur désirée et les grains koji ont pour la plupart adouci (7-10 jours), bien remuer et transférer dans un récipient hermétique. Réfrigérer — les températures froides arrêtent la fermentation active et la pâte conserve pendant 3 à 6 mois, continuant à développer la saveur très lentement. Utiliser comme marinade, assaisonnement ou condiment.",
      "visualCue": {
        "primaryTarget": "Une pâte ambre pâle, de type porridge avec une texture de grain adoucie et un arôme parfumé et douxment salé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore fermes et nettement granuleux. Le goût est juste salé sans douceur.",
            "action": "Continuer à fermenter 2–3 jours de plus à température ambiante."
          },
          {
            "state": "Perfect",
            "description": "Une consistance crémeuse et porridge. Les grains sont doux. L'arôme est rond, doux-salé-umami. Des odeurs de miso, de saké et de grain frais.",
            "action": "Réfrigérer dans un récipient hermétique. Étiquette avec la date."
          },
          {
            "state": "Overdone",
            "description": "Très liquide, couleur ambre plus foncée, odeur acide prononcée.",
            "action": "Toujours fonctionnel; épuiser les grains solides pour un shio koji liquide plus lisse et utiliser comme saumure."
          }
        ]
      },
      "feelCue": "Shio koji bien fermenté se sent légèrement visqueux entre les doigts — que la viscosité est l'amidon dissous et libère les acides aminés, le point entier de la fermentation."
    }
  ]
};
