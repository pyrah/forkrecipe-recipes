export default {
  "repoId": "master_japanese_mochi_001",
  "parentRepoId": null,
  "slug": "mochi",
  "author": "ForkRecipe Kitchen",
  "title": "Moche de base japonaise",
  "description": "Le riz glutineux cuit à la vapeur, coaxié dans une masse lisse, extensible et scintillante, le mochi uni épluché dans le kinako (farine de soja grillée) porte une terre calme, tandis que la pâte de haricots rouges qui se remplit sous la peau translucide est sucrée sans être saccharine.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "desserts",
  "tags": [
    "Mochi",
    "Japonais",
    "riz",
    "glutineux",
    "En effet.",
    "Autres",
    "kinako",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de riz glutineux (mochiko ou shiratamako)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "shiratamako pour une texture plus soyeuse"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 0.8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin",
        "miel (réduire légèrement l'eau)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Kinako (farine de soja grillée) pour la poussière",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de sésame grillées",
        "poudre de matcha mélangée avec du sucre glace"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Pâte de haricots rouges (tsubuan ou koshian)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de haricots blancs",
        "Pâte de châtaigne sucrée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Cornstarch (katakuriko) pour la surface de travail",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de pomme de terre",
        "Farine de riz"
      ]
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
      "outputState": "mochi_batter",
      "instructions": "Mélanger la farine de riz glutineuse et le sucre dans un bol micro-ondes. Ajouter progressivement l'eau en remuant avec une spatule jusqu'à ce qu'elle soit complètement lisse et sans grumeaux. La pâte sera mince — comme de la crème très épaisse — et devrait verser la spatule dans une feuille lente et uniforme. Passez-le à travers une fine souche si des morceaux restent. Couvrez-les de façon souple avec un enveloppement en plastique micro-ondes ou une serviette en papier humide.",
      "visualCue": {
        "primaryTarget": "Une pâte blanche au lait uniformément lisse et fine, sans grumeaux ni grains de sucre non dissous. Des chutes dans un drap lent, même de la spatule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumpy et hétérogène. Le sucre n'est pas complètement dissous. La farine sèche flotte à la surface.",
            "action": "Mélanger plus vigoureusement et s'assurer que le sucre a complètement dissous avant de micro-enrouler. Les lumps qui restent deviendront des patchs caoutchouteux et croustillants dans le mochi fini."
          },
          {
            "state": "Perfect",
            "description": "Versable, soyeux, uniformément blanc. Laisse la cuillère propre. Goûte légèrement doux et farineux.",
            "action": "Couvrir et micro-ondes haut pendant 2 minutes pour la première explosion."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté trop peu d'eau et le mélange est épais et pâte-comme avant la cuisson — pas une pâte versable.",
            "action": "Ajouter une cuillère à soupe à la fois, en remuant entre les ajouts, jusqu'à ce que la pâte coule librement."
          }
        ]
      },
      "feelCue": "La pâte doit couler de la spatule dans un rideau lisse, même — pas couler dans des gouttes séparées, mais ne pas verser comme de l'eau. Entre le lait et le lait condensé en viscosité."
    },
    {
      "nodeId": "step_2",
      "action": "Jeu",
      "inputs": [
        "mochi_batter"
      ],
      "outputState": "cooked_mochi",
      "instructions": "Micro-ondes la pâte couverte sur HIGH pendant 2 minutes. Retirer, découvrir et remuer vigoureusement — le bord extérieur aura cuit à une masse translucide et caoutchouteuse, tandis que le centre restera blanc et liquide. Incorporer pour les combiner, recouvrir et micro-ondes de nouveau pendant 1 à 2 minutes jusqu'à ce que toute la masse soit translucide, s'éloigner des côtés du bol et briller. Bien mélanger entre chaque éclatement. La pâte doit être uniformément brillante et légèrement translucide, non crayeuse ou opaque. Durée totale du micro-ondes: 4 à 6 minutes en rafales de 1 à 2 minutes.",
      "visualCue": {
        "primaryTarget": "Une masse lisse, brillante, entièrement translucide (pas crayeuse) qui est uniformément cuite et s'éloigne des parois du bol proprement. Glistens dans la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les taches blanches opaques demeurent, surtout au centre. La pâte est à deux tons et les parties non cuites semblent crayeuses et froides par rapport aux bords extérieurs.",
            "action": "Récupérer et micro-ondes en une minute supplémentaires, en remuant entre, jusqu'à ce que la masse entière soit uniformément translucide. L'amidon cru de mochi est désagréable et sera difficile à travailler avec."
          },
          {
            "state": "Perfect",
            "description": "Entièrement translucide, brillant et lisse. La masse s'éloigne du bol en une seule unité élastique. Très collant et chaud. Ça sent peu comme du riz cuit.",
            "action": "Laisser refroidir dans le bol pendant 5 minutes, puis transférer sur une surface pulvérisée en amidon de maïs pour travailler tout en restant souple mais assez frais pour être manipulé."
          },
          {
            "state": "Overdone",
            "description": "Le mochi est devenu caoutchouteux, dense et extrêmement dur. Il résiste à l'étirement et a séché des patchs de microwaving répété.",
            "action": "Un mochi légèrement surcuit peut parfois être secouru en pétrissant dans quelques gouttes d'eau sur une surface humide. Mais une trop grande cuisson la rend incontrôlable."
          }
        ]
      },
      "feelCue": "Cocher le mochi cuit avec un bout de doigt mouillé — il devrait se sentir uniformément élastique tout au long, comme un ours gommé ferme, pas ferme à l'extérieur et grinçant au milieu. Pas de taches froides ou crayeuses."
    },
    {
      "nodeId": "step_3",
      "action": "Frais",
      "inputs": [
        "cooked_mochi",
        "ing_06"
      ],
      "outputState": "workable_mochi",
      "instructions": "Poussez généreusement une surface de travail propre avec de la fécule de maïs. Tourner le mochi chaud sur la surface et poussièrer également le dessus. Laisser refroidir pendant 5 à 10 minutes — il devrait être chaud mais confortable à manipuler. Ne la laissez pas refroidir complètement : le moche froid devient raide et déchire lorsqu'il est coupé. Divisez en 8 pièces égales à l'aide d'un gratteur de banc ou d'un couteau à l'amidon de maïs. Aplatissez chaque pièce dans un disque rond d'environ 8 cm de diamètre, en travaillant rapidement.",
      "visualCue": {
        "primaryTarget": "Une masse chaude, souple, blanc ivoire qui s'étire facilement sans déchirer. La fécule de maïs forme un revêtement sec et non collant sur la surface. Les pièces se détachent proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mochi est encore trop chaud pour être manipulé — la vapeur monte et il colle agressivement aux mains et au banc même avec la poussière.",
            "action": "Attendez encore 2 à 3 minutes. Le travail trop chaud de mochi provoque la déchirure et la vapeur peut brûler. Il ne tiendra pas non plus la forme de remplissage."
          },
          {
            "state": "Perfect",
            "description": "Chaud, lisse et élastique. Tire sans déchirer. La poussière d'amidon de maïs la maintient complètement non collante. C'est comme si c'était doux et chaud.",
            "action": "Portion et aplatir les disques maintenant — remplir dans les 5 à 8 minutes avant que les mochi ne se rafraîchissent."
          },
          {
            "state": "Overdone",
            "description": "Le mochi a refroidi à la température ambiante et est maintenant raide, réticent à s'étirer, et déchire les bords lorsqu'il est aplati.",
            "action": "Micro-ondes pendant 15 à 20 secondes pour réchauffer et restaurer la pliabilité. Repoudre avec de la fécule de maïs avant de procéder."
          }
        ]
      },
      "feelCue": "Appuyez sur le disque de mochi avec trois doigts — il doit s'étirer uniformément dans toutes les directions avec une résistance douce, comme l'étirement de gomme chaude, sans casser ou déchirer les bords."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "workable_mochi",
        "ing_05",
        "ing_04"
      ],
      "outputState": "finished_mochi",
      "instructions": "Rouler une boule d'anko de taille à soupe entre vos paumes à une sphère lisse et la placer au centre de chaque disque de mochi. Rassemblez les bords du mochi autour du remplissage et pincez fermement en haut, en tournant et en plis au fur et à mesure, jusqu'à ce que la couture soit complètement scellée sans remplissage visible. Pincez fermement la couture — une couture lâche s'ouvre pendant la manipulation. Tournez le bord de la couture vers le bas et roulez doucement entre les palmiers en coupe pour lisser la surface. Rouler en kinako pour enrober. Disposer les coutures vers le bas sur un plateau. Mangez à la température ambiante le jour où ils sont faits.",
      "visualCue": {
        "primaryTarget": "Des sphères lisses, légèrement ovales sans couture visible. Un manteau kinako uniforme, mat et pâle sur chaque surface. Pas de fissures ou de taches fines où le remplissage pourrait être vu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La couture est ouverte ou seulement légèrement pincée. Le disque de mochi n'était pas assez étendu sur le remplissage et l'anko pousse à travers un point faible.",
            "action": "Pincez la couture ferme fermement et roulez entre les palmiers en coupe pour sceller. Si le moche est déchiré, appuyez - le doucement — il se réalimentera s'il est encore chaud."
          },
          {
            "state": "Perfect",
            "description": "Un extérieur lisse et intact avec le remplissage entièrement dissimulé. Même le revêtement kinako. Lorsqu'on le tient jusqu'à une lumière, on peut peu voir l'anko plus foncé à travers la peau translucide de mochi.",
            "action": "Servir dans les 4 heures à température ambiante. Ne réfrigérez pas — le froid raidit le moche et le rend désagréablement dur."
          },
          {
            "state": "Overdone",
            "description": "La peau de mochi a été étirée si mince vous pouvez voir l'anko clairement à travers elle, ou il a fendu. Alternativement, le remplissage déborde la texture délicate du mochi.",
            "action": "Utilisez un peu moins de remplissage la prochaine fois. Un rapport 1:1 en poids de mochi à anko est le maximum — beaucoup préfèrent plus de mochi que de remplissage."
          }
        ]
      },
      "feelCue": "Un moche bien fait doit se sentir frais et légèrement fléchir lorsqu'il est pressé — pas dur, pas doux. La couche de kinako doit se sentir sèche et poudreuse, comme une douce poussière de farine, pas grasse ou humide."
    }
  ]
};
