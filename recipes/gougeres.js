export default {
  "repoId": "master_french_gougeres_001",
  "parentRepoId": null,
  "slug": "gougeres",
  "author": "ForkRecipe Kitchen",
  "title": "Gougères",
  "description": "Des citron vert creux, aérés, lavés de Gruyère — dorés, gonflés et parfumés de fromage chaud — la traditionnelle bouchée de bienvenue bourguignonne servie avec Champagne ou Kir.",
  "cuisine": "Français",
  "culture": "Bourgogne",
  "category": "breads",
  "tags": [
    "bouffées de fromage",
    "français",
    "Choux",
    "Gruyère",
    "bourgogne"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié lait moitié eau (résultat plus riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé (cube)",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général (à l'exclusion des farines)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Gros œufs (à température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin et pincée de poivre blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Gruyère (finement râpé)",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté (plus complexe)",
        "Cheddar âgé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Noix de muscade fraîchement râpée (petite pincée)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "panade",
      "instructions": "Mélanger l'eau, le beurre, le sel et le poivre dans une casserole moyenne à feu moyen. Mélanger lorsque le beurre fond, puis porter à ébullition complète. Retirer du feu et aspirer dans toute la farine en un seul supplément. Mélanger vigoureusement avec une cuillère en bois jusqu'à ce que le mélange forme une boule lisse qui s'éloigne proprement des côtés de la poêle. Retourner à feu moyen-doux et cuire en remuant constamment pendant 1 à 2 minutes jusqu'à ce que la pâte sèche légèrement et qu'un mince film se forme sur le fond de la poêle. Cette étape de séchage est essentielle.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et compacte qui roule librement dans la poêle sans coller, avec un film mince et sec enrobant le fond de la poêle et une faible odeur de farine cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore molle et humide, sans tenir ensemble comme une balle. Ça sent la farine crue.",
            "action": "Continuer la cuisson et remuer à feu moyen-doux jusqu'à ce que la pâte s'éloigne proprement et que le film de poêle se forme."
          },
          {
            "state": "Perfect",
            "description": "Une balle cohésive et lisse. Surface légèrement mate. Le fond de la poêle montre un revêtement fin et sec lorsque la pâte est repoussée.",
            "action": "Transférer dans un bol et laisser refroidir 3-4 minutes avant d'ajouter les œufs."
          },
          {
            "state": "Overdone",
            "description": "Une croûte épaisse se forme sur le fond de la poêle et la pâte sent l'amidon brûlé.",
            "action": "Transférer immédiatement dans le bol. La panade est toujours utilisable à moins que le fond n'ait brûlé."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt dans la panade chaude — il devrait se sentir dense, chaud juteux: céder mais cohésif, pas de collant restant sur votre doigt."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "panade",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "gougere_dough",
      "instructions": "Battre les œufs légèrement ensemble. Avec la panade encore chaude, ajouter l'oeuf battu en quatre ajouts, battre vigoureusement avec une cuillère en bois ou un mélangeur électrique entre chacun — la pâte aura l'air horriblement fendue et grasse au début; continuer à battre jusqu'à ce qu'il revienne ensemble avant d'ajouter plus. Après l'incorporation de tous les œufs et la pâte est lisse et brillante, remuer les trois quarts du Gruyère et de la muscade. La pâte devrait tomber de la cuillère dans un V lent et lourd.",
      "visualCue": {
        "primaryTarget": "Une pâte élastique brillante et lisse qui tombe de la cuillère en forme de V épaisse et lente et qui sent très fort le fromage chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore raide et tient sa forme sans aucun écoulement — trop peu d'oeuf a été incorporé.",
            "action": "Ajouter un peu plus d'oeuf battu et battre vigoureusement pour incorporer."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant et élastique. La pâte tient ensemble et tombe dans un V définitif. Le fromage est visiblement cloué.",
            "action": "Transférer immédiatement dans un sac et un tuyau de tuyauterie ou se reposer pendant une heure."
          },
          {
            "state": "Overdone",
            "description": "La toux est trop liquide et se déverse librement — elle s'étalera à plat et ne tiendra pas sa forme au four.",
            "action": "Le rapport est annulé. Faites une nouvelle panade et combinez les deux — la nouvelle pâte plus rigide va raffermir le mélange d'écoulement."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir vivante et élastique — quand vous tirez une cuillère loin, elle devrait s'étirer dans un long brin brillant avant de se casser proprement."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "gougere_dough"
      ],
      "outputState": "finished_gougeres",
      "instructions": "Préchauffer le four à 200°C (390°F). Lignez deux plaques de cuisson avec parchemin. Tours à pipe ou à cuillère, d'un diamètre d'environ 3 cm, espacés de 4 cm. Mouiller un doigt et lisser les pics. Saupoudrer le Gruyère sur le dessus. Cuire au four pendant 22 à 25 minutes jusqu'à ce qu'il soit doré et gonflé. N'ouvrez pas le four dans les 15 premières minutes — le chou a besoin de chaleur ininterrompue pour régler sa structure. Les gougères se font quand ils sont profondément colorés et ressentent la lumière pour leur taille.",
      "visualCue": {
        "primaryTarget": "Des gougères rondes entièrement gonflées, d'une couleur brun-or foncé et d'une croûte de fromage doré sur le dessus, uniformes en forme avec un extérieur croustillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, légèrement humide et lourd. Ils s'effondreront s'ils sont enlevés trop tôt car la structure n'a pas été réglée.",
            "action": "Retourner au four 3-4 minutes de plus. La couleur profonde est structurelle, pas cosmétique."
          },
          {
            "state": "Perfect",
            "description": "De couleur brun-or foncé partout, avec des taches plus foncées où le fromage a croqué. Ils se sentent presque sans poids quand ils sont ramassés. L'intérieur est creux et légèrement oeuvré lorsqu'il est cassé.",
            "action": "Servir immédiatement — les gougères sont préférables dans les 10 minutes suivant la cuisson, tandis que la coquille est croquante."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, avec du fromage sec et craqué sur le dessus. La coquille est rigide et commence à s'assombrir en ambre brûlé.",
            "action": "Servir rapidement — ils deviendront très difficiles car ils refroidiront et perdront leur charme."
          }
        ]
      },
      "feelCue": "Prenez une gougère et ressentez la légèreté creuse — elle devrait être étonnamment infondée pour sa taille. Pincez légèrement : la coquille doit être croustillante mais donner une résistance légèrement printanière."
    }
  ]
};
