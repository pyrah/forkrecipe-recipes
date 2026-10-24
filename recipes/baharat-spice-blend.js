export default {
  "repoId": "master_middle_eastern_baharat_spice_blend_001",
  "parentRepoId": null,
  "slug": "baharat-spice-blend",
  "author": "ForkRecipe Kitchen",
  "title": "Mélange baharat à sept rayons",
  "description": "La pierre angulaire du garde-manger Levantine : sept épices – allspice, coriandre, cumin, cannelle, poivre noir, muscade et girofle – grillées et broyées ensemble dans une poudre chaude et complexe qui parfume le riz, l'agneau, les pois chiches et les soupes avec la profondeur particulière qui est immédiatement reconnaissable comme la cuisine arabe.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "végétalien",
    "Sans gluten",
    "Moyen-Orient",
    "lévantine",
    "d'épices",
    "assaisonnement"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Graines de grêle",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "en poudre (utiliser 2 c. à thé moins)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Graines de coriandre (ensemble)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Coriandre terrestre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de cumin entières",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "cumin de fond"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Bâton de cannelle (broché)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "cannelle au sol (1,5 c. à thé)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs de poivre noir (ensemble)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Noix de muscade entières (fraîchies)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "noix de muscade avant le sol"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Vêtements entiers",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "girofles du sol (utiliser la moitié)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "toasted_whole_spices",
      "instructions": "Mettre tous les espices, la coriandre, le cumin, les morceaux de cannelle cassés, les grains de poivre noir et les girofles dans une poêle sèche (n'ajoutez pas la muscade — elle est trop grasse et va brûler). Faire cuire à feu moyen, en remuant constamment, pendant 3 à 5 minutes. Les épices sont prêtes lorsqu'elles deviennent plus sombres, de petites lucarnes de fumée commencent à se lever, et la cuisine se remplit d'un arôme profond et chaud. Transférer immédiatement dans une assiette pour refroidir — les laisser dans la poêle chaude les surcuire.",
      "visualCue": {
        "primaryTarget": "Les épices sont plus foncées qu'au début. Une mince boucle de fumée montant de la poêle. L'arôme est passé de cru et poussiéreux à profond, chaud et volatil.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices ont l'air et l'odeur même que lorsqu'elles sont crues — plates, poussiéreuses, non parfumées.",
            "action": "Continuer à griller à feu moyen — les huiles doivent être chaudes. Déplacez-les constamment."
          },
          {
            "state": "Perfect",
            "description": "Allspice est profondément aromatique. La coriandre craque légèrement. La cumin est noisette et dorée. Un murmure de fumée. Tout sent vivant.",
            "action": "Verser immédiatement sur une assiette fraîche — ne pas laisser dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Les épices sont très sombres, presque noires. Une odeur d'acride, dure et fumée.",
            "action": "Jeter — il n'y a pas de récupération d'épices surchargées. Ils goûteront amer et dur dans chaque plat."
          }
        ]
      },
      "feelCue": "Ramassez une baie grillée et cassez-la entre les dents – elle devrait libérer un éclat d'arôme chaud et complexe : girofle, poivre et cannelle. Si elle a un goût plat ou brut, elle a besoin de plus de temps. Si c'est dur, ça va trop loin."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "toasted_whole_spices",
        "ing_06"
      ],
      "outputState": "baharat_blend",
      "instructions": "Laisser refroidir complètement les épices grillées avant de les broyer — les épices chaudes libèrent de la vapeur dans le broyeur et produisent de la poudre mouillée. Transférer dans un broyeur d'épices ou un mélangeur puissant. Râper la noix de muscade fraîche directement dans le broyeur. Graisser dans des impulsions de 10 secondes jusqu'à ce que le mélange soit une poudre uniforme et fine — il ne reste pas de morceaux entiers visibles d'épices. Passer à travers un tamis fin si des morceaux grossiers persistent.",
      "visualCue": {
        "primaryTarget": "Une poudre uniforme, fine et chaude brun rougeâtre — la couleur de la terre cuite — sans fragments d'épices entiers visibles. Lorsqu'elle est pincée, elle tient brièvement puis libère, comme du sable fin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Morceaux grossiers d'aspice ou de cannelle encore visibles. Une texture inégale.",
            "action": "Revenez à la meuleuse et poussez encore 5 à 10 fois. Siégeez et rongez tout matériau grossier."
          },
          {
            "state": "Perfect",
            "description": "Fin, uniforme, poudre brun rougeâtre. Ça coule comme de la soie. Ça sent intensément les sept épices en harmonie: chaudes, complexes, profondes.",
            "action": "Transférer immédiatement dans un pot hermétique."
          },
          {
            "state": "Overdone",
            "description": "Mouiller si longtemps les épices ont réchauffé de la friction du broyeur et se sont empilées dans une pâte.",
            "action": "Étaler sur une assiette pour refroidir et sécher, puis casser et tamiser."
          }
        ]
      },
      "feelCue": "Frottez une pincée entre vos doigts — la poudre devrait sentir la lumière des plumes et légèrement huileux des huiles d'épices, enrobant vos doigts dans un film chaud et parfumé. L'odeur doit être si forte qu'elle est presque physique — une vague de chaleur."
    },
    {
      "nodeId": "step_3",
      "action": "Faire prendre",
      "inputs": [
        "baharat_blend"
      ],
      "outputState": "finished_baharat",
      "instructions": "Transférer immédiatement dans un petit pot hermétique — le verre est préféré au plastique, car les huiles volatiles s'absorbent lentement dans le plastique au fil du temps. Étiquette avec la date. Conserver dans un placard frais et sombre, loin du poêle. Utiliser dans les 2 mois pour une puissance maximale; le mélange s'estompe rapidement une fois moulu. À utiliser: ajouter 1 à 2 cuillères à café par 500 g de viande ou 200 g de riz, brassé pendant la cuisson des aromatiques.",
      "visualCue": {
        "primaryTarget": "Un pot scellé de poudre brun rougeâtre chaude qui colore le verre orange sur les côtés. Lorsque le pot est brièvement ouvert, une vague d'arôme d'épices chaudes s'échappe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange n'a pas été stocké rapidement et perd déjà de l'arôme après 10 minutes d'ouverture sur le comptoir.",
            "action": "Scellez immédiatement. L'exposition à l'air, à la lumière et à la chaleur dégrade rapidement les composés volatils."
          },
          {
            "state": "Perfect",
            "description": "Bocal bien scellé. Le mélange sent intense lorsqu'il est ouvert: complexe, chaud, incomparablement moyen-oriental. La couleur est vive.",
            "action": "Conserver et utiliser dans les 2 mois."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a plus de 3 mois — sent faible, plat, poussiéreux.",
            "action": "Toast un lot frais — les mélanges d'épices ne sont pas coûteux à faire et frais est transformateur par rapport à vieux."
          }
        ]
      },
      "feelCue": "Ouvrez le pot après avoir entreposé pendant une journée et sentir à partir de 15 cm de distance — vous devriez pouvoir sentir clairement le mélange sans mettre votre nez dans le pot. Si vous devez presser votre nez pour le détecter, les épices n'ont pas été grillées correctement ou le pot n'est pas hermétiquement scellé."
    }
  ]
};
