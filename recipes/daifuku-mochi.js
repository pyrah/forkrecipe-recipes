export default {
  "repoId": "master_japanese_daifuku_mochi_001",
  "parentRepoId": null,
  "slug": "daifuku-mochi",
  "author": "ForkRecipe Kitchen",
  "title": "Daifuku Mochi",
  "description": "Des rondelles d'oreillers de pâte de riz doux glutineux — croustillantes et ne donnant comme rien d'autre sur la terre — étirées minces autour d'une boule généreuse de pâte de haricots rouges doux jusqu'à ce que le remplissage soit complètement enveloppé et que la couture soit étanche. Poussés dans de la farine de riz pour que la peau reste douce et sèche au toucher, chaque pièce est une étude tranquille dans des textures contrastées.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "desserts",
  "tags": [
    "Mochi",
    "daifuku",
    "Japonais",
    "Riz glutineux",
    "haricots rouges",
    "Autres"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Mochiko (farine de riz glutineux)",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "shiratamako (supprimer les morceaux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.25,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 0.75,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Tsubuan ou koshian (pâte de haricots rouges sucrée)",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "pâte de haricots blancs",
        "pâte de châtaigne douce"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Katakuriko ou fécule de maïs (poussière)",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "Farine de riz"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Poudre de Matcha (facultatif)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "poudre de sakura de qualité alimentaire",
        "pâte de sésame noir"
      ]
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
        "ing_06"
      ],
      "outputState": "mochi_batter",
      "instructions": "Dans un bol à micro-ondes, mélanger le mochiko, le sucre et l'eau (ajouter le matcha si vous l'utilisez). fouetter jusqu'à ce qu'il reste une poudre complètement lisse et sèche. La pâte sera fine et blanc laiteux.",
      "visualCue": {
        "primaryTarget": "Une pâte liquide lisse, légèrement visqueuse, blanche pure (ou vert pâle si le matcha est utilisé) sans grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche au fond ou aux bords, pâte non entièrement homogène.",
            "action": "fouetter plus soigneusement; racler le fond du bol pour attraper toute farine non mélangée."
          },
          {
            "state": "Perfect",
            "description": "Complètement uniforme, coule doucement du fouet dans un mince ruban sans rupture. Matcha (si utilisé) entièrement dissous sans taches vertes.",
            "action": "Couvrir librement et micro-ondes par étapes."
          },
          {
            "state": "Overdone",
            "description": "S/O — il n'y a aucun moyen de trop mélanger une pâte fine à ce stade.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Inclinez le bol et écoutez - la pâte lisse verse silencieusement. La pâte lumpy fait un léger bruit de grattage."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "mochi_batter"
      ],
      "outputState": "cooked_mochi_dough",
      "instructions": "Couvrir délicatement le bol d'une enveloppe en plastique. Micro-ondes en haut pendant 1 minute. Retirer, remuer vigoureusement avec une spatule de silicone humide. Micro-ondes encore 1 minute. Remuer encore. Micro-ondes pendant 30 à 60 secondes jusqu'à ce que la pâte soit entièrement translucide et collante, sans taches blanches et brutes. Alternativement, la vapeur sur l'eau bouillante pendant 20 minutes, en remuant à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Pâte entièrement translucide, brillante, gris-blanc pâle (ou vert vif) qui s'étire sans déchirer lorsqu'elle est tirée. Très collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les parties de la pâte sont encore blanches et opaques — amidon non cuit. La texture est humide et lâche plutôt que extensible.",
            "action": "Micro-ondes en rafales de 30 secondes, en remuant entre chacune, jusqu'à ce qu'elles soient entièrement translucides."
          },
          {
            "state": "Perfect",
            "description": "Totalement translucide. Retirez-vous du bol en longues cordes élastiques lorsqu'il est agité. La spatule levée dessine lentement un ruban continu. Doux éclat, légèrement brillant.",
            "action": "Transférer immédiatement sur une surface généreusement pulvérisée avec katakuriko pour refroidir et diviser."
          },
          {
            "state": "Overdone",
            "description": "La toux est très raide, caoutchouteuse et a commencé à sécher aux bords. Elle perd son étirement.",
            "action": "Mouiller vos mains et pétrir dans une cuillère à café d'eau chaude alors que la pâte est encore chaude pour restaurer l'élasticité."
          }
        ]
      },
      "feelCue": "Lorsque vous remuez un mochi entièrement cuit avec une spatule humide, il devrait tirer sur vous — épais, lent, extrêmement résistant. Comme remuer du chewing-gum."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "cooked_mochi_dough",
        "ing_04",
        "ing_05"
      ],
      "outputState": "shaped_daifuku",
      "instructions": "Tandis que le mochi est encore chaud (il devient plus raide à mesure qu'il refroidit — travailler rapidement), portion de la pâte de haricots dans des boules d'environ 25 g chacune (environ 1 c. à soupe). Mettez de côté. Poussez votre surface de travail et les mains généreusement avec katakuriko. Divisez le mochi en 8-10 parties égales avec un gratteur de banc ou des ciseaux huilés. Aplatissez chaque pièce dans un disque de 7 à 8 cm à l'aide d'un bout de doigt fariné ou d'un rouleau. Placer une boule de pâte de haricots au centre, rassembler les bords du disque de mochi autour, et pincer fermement pour sceller la couture.",
      "visualCue": {
        "primaryTarget": "Des boules de mochi lisses sans couture visible. La peau est mince mais non cassée, le remplissage complètement fermé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau de Mochi est trop épaisse ou inégale, ou la couture s'est ouverte laissant le remplissage exposé.",
            "action": "Re-sceller la couture en pinçant fermement; rouler doucement entre les palmiers en coupe pour redistribuer la peau."
          },
          {
            "state": "Perfect",
            "description": "La peau est uniformément mince (environ 3 mm), la balle se sent ferme et printanière, la couture est serrée et invisible. La pâte de haricots peut simplement être ressentie comme une résistance douce lorsqu'elle est pressée.",
            "action": "Déposer la couture sur le parchemin poussiéreux. Poussez légèrement le dessus avec du katakuriko supplémentaire."
          },
          {
            "state": "Overdone",
            "description": "Mochi a été surmené, est collant malgré la farine, et la peau est déchirante ou le remplissage est visible.",
            "action": "Refroidir les mains brièvement, re-poudre avec de l'amidon, et travailler plus rapidement sur les pièces restantes."
          }
        ]
      },
      "feelCue": "Un daifuku bien enveloppé a l'impression d'appuyer sur une boule de stress ferme: la peau de mochi taut, le remplissage donnant un peu au centre."
    },
    {
      "nodeId": "step_4",
      "action": "Faire prendre",
      "inputs": [
        "shaped_daifuku"
      ],
      "outputState": "finished_daifuku",
      "instructions": "Reposez le daifuku terminé à température ambiante de 20 à 30 minutes pour permettre à la surface de sécher légèrement et au remplissage de se déposer. Ne pas réfrigérer: le froid durcit le moche à une raideur caoutchouteuse désagréable. Servir dans les 8 heures suivant la fabrication; les mochi stales rapidement à température ambiante.",
      "visualCue": {
        "primaryTarget": "Des sphères arrondies et douces avec une surface sèche et mate sans fissures. Une légère translucidité aux points les plus fins de la peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore humide et collante au toucher, transférant l'amidon à tout ce qu'il contacte.",
            "action": "Poussière plus libéralement avec katakuriko et reposer encore 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Sécher au toucher, doux quand pressé, ressort lentement. L'amidon poussiéreux donne une fleur blanche propre et professionnelle.",
            "action": "Servir immédiatement ou dans les 8 heures."
          },
          {
            "state": "Overdone",
            "description": "Laissé trop longtemps à température ambiante — la surface a développé des fissures fines et la peau se sent dure.",
            "action": "Consommer immédiatement; même un peu de mochi peut être grillé brièvement sur une flamme de gaz pour restaurer la mâche."
          }
        ]
      },
      "feelCue": "Le daifuku fini devrait rebondir lorsqu'il est pressé — un rebond doux et décisif. Si elle reste dentelée, le remplissage a changé ou le mochi est trop froid."
    }
  ]
};
