export default {
  "repoId": "master_south_african_peri_peri_chicken_001",
  "parentRepoId": null,
  "slug": "peri-peri-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet Peri-Peri",
  "description": "Un poulet entier mariné dans une sauce féroce de piments d'oiseaux africains, d'ail, de citron et de paprika fumé, puis grillé bas et lent jusqu'à ce que la peau soit laquée et cloquée et chaque bouchée apporte de la chaleur qui se construit de l'arrière de la gorge vers l'avant.",
  "cuisine": "Afrique du Sud",
  "culture": "Mozambicain/portugais",
  "category": "proteins",
  "tags": [
    "Afrique du Sud",
    "poulet",
    "Chili",
    "grillé",
    "Piri-piri"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hrs 20 min",
  "ratioSystem": "parts",
  "stars": 3200,
  "forks": 380,
  "contributors": 47,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-25",
  "updatedAt": "2026-03-11",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulet entier, broyé (os enlevé, aplati)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "cuisses et pilons de poulet désossés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chilies oculaires d'oiseaux africains (piri-piri), tiges",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "piments thaïs rouges",
        "Cayenne fraîche (mince)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron et zeste",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Paprika fumé et origan séché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger la marinade péri-péri",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "peri_peri_marinade",
      "instructions": "Mélanger les piments, l'ail, le jus de citron et le zeste, le paprika fumé, l'origan, l'huile d'olive et le sel dans un mélangeur ou un robot culinaire jusqu'à ce qu'il soit lisse. La sauce doit être un orange rouge vif. Goûtez soigneusement — il doit être très chaud, poinçonné avec de l'acide et profondément salé. Ajuster le sel et le citron à l'équilibre. Pour un résultat plus doux, retirer les graines avant de les mélanger. Pour une chaleur maximale, utilisez le chili entier, y compris les graines.",
      "visualCue": {
        "primaryTarget": "Une émulsion lisse, rouge orange vif, sans morceaux visibles de peau de chili ou d'ail. Un peu plus épais qu'une vinaigrette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est ample avec des morceaux visibles de chili et d'ail. Il ne pénétrera pas uniformément le poulet et brûlera dans des plaques pendant le grillage.",
            "action": "Mélanger encore 30 à 60 secondes. Grattez les côtés et mélangez à nouveau. La sauce doit être lisse pour former une marinade laquée appropriée."
          },
          {
            "state": "Perfect",
            "description": "sauce lisse et uniformément émulsifiée qui se déverse dans un ruisseau stable. Couleur rouge-orange profonde. Sensation intense de chili, d'ail et d'agrumes en même temps.",
            "action": "Procédez à l'enrobage et faites mariner le poulet."
          },
          {
            "state": "Overdone",
            "description": "Un mélange trop long — la sauce s'est aérée et s'est allégée en mousse, perdant de la densité. Il sera moins efficace.",
            "action": "Laisser reposer dans le mélangeur pendant 2 minutes sans courir pour permettre à la mousse de s'effondrer. La sauce est encore utilisable."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt — vous devriez vous sentir immédiatement, en construisant la chaleur dans les 10 secondes. Si la chaleur n'arrive pas, la sauce a besoin de plus de chili. Si vos yeux s'arrosent immédiatement, vous êtes sur la bonne voie."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "peri_peri_marinade"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Noter la peau de poulet dans un motif de croisement avec un couteau pointu — 4 à 5 coupes de chaque côté, en tranchant la peau à la chair. Cela permet à la marinade de pénétrer profondément. Frottez la sauce péri-périe sur tout le poulet : sous la peau si possible, dans toutes les lignes de marquage, dans la cavité. Réservez environ 3 cuillerées à soupe de la marinade pour se prélasser pendant le grillage. Placer le poulet dans un récipient, couvrir et réfrigérer pendant au moins 2 heures ou toute la nuit.",
      "visualCue": {
        "primaryTarget": "Le poulet est uniformément recouvert de marinade rouge orange vif. Les notes sont remplies de sauce. Pas de taches pâles de peau non marinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade coule de la surface plutôt que de s'accrocher. Des taches pâles et non-mariées de peau visible. Les points sont vides.",
            "action": "S'assurer que la peau du poulet est sèche avant d'appliquer la marinade — l'humidité l'empêche d'adhérer. Pat sèche et ré-applique."
          },
          {
            "state": "Perfect",
            "description": "Même un revêtement vibrant sur toutes les surfaces. La marinade a commencé à tacher la chair visible à travers les marques de score. Le poulet a l'air profondément coloré et brillant.",
            "action": "Couvrir et réfrigérer pendant au moins 2 heures avant de griller."
          },
          {
            "state": "Overdone",
            "description": "Mariné plus de 12 heures — l'acide dans le citron a commencé à dénaturé les protéines de surface du poulet, rendant la chair extérieure pâle et légèrement musclée.",
            "action": "Passez immédiatement au grillage. La saveur sera excellente mais la texture de la surface peut être plus douce que l'idéal."
          }
        ]
      },
      "feelCue": "Appuyez sur la peau recouverte de marinade avec votre doigt — la sauce doit s'accrocher à votre bout de doigt et laisser une tache orange-rouge propre et uniforme sur votre peau, indiquant une pénétration uniforme et complète."
    },
    {
      "nodeId": "step_3",
      "action": "Grille faible et lente",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "grilled_chicken",
      "instructions": "Préparer un grill à deux zones : feu direct à feu élevé d'un côté, feu indirect à feu moyen de l'autre. Commencez la peau de poulet sur le côté indirect et faites cuire avec le couvercle fermé de 35 à 40 minutes, en basting toutes les 10 minutes avec la marinade réservée. La chaleur indirecte plus faible et plus lente permet à l'intérieur de cuire avant les brûlures extérieures. Lorsque la température interne atteint 68 °C dans la partie la plus épaisse de la cuisse, déplacer le poulet pour chauffer directement la peau vers le bas pendant 5–8 minutes pour la laquage et ombrager la peau.",
      "visualCue": {
        "primaryTarget": "La peau est profondément brûlée, passant d'un rouge orange à un acajou laqué carbonisé. Des taches irrégulières d'omble noir dans les zones surélevées. Les articulations des jambes se déplacent librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore pâle et orange rose, douce, et pas encore laquée. L'articulation des jambes est raide et la chair de la cuisse est rose lorsqu'elle est percée près de l'os.",
            "action": "Continuer avec la chaleur indirecte, basting toutes les 10 minutes. Le poulet a besoin de température interne (74 °C) et de couleur externe."
          },
          {
            "state": "Perfect",
            "description": "Acajou, peau laquée aux taches élevées carbonisées. L'articulation des jambes se déplace librement et la cuisse coule des jus clairs lorsqu'elle est percée. Température interne 74–76 °C au point le plus épais.",
            "action": "Retirer du feu, reposer 10 minutes avant de tailler."
          },
          {
            "state": "Overdone",
            "description": "La peau est uniformément noire et le poulet sent l'omble amer. La viande des jambes peut commencer à être déchiquetée involontairement.",
            "action": "Retirer du gril immédiatement. Trim le pire char avec un couteau. La viande intérieure est probablement encore excellente — la peau est le sacrifice."
          }
        ]
      },
      "feelCue": "Frottez le pilon — si l'articulation de la jambe se déplace avec une résistance minimale, comme une charnière de porte qui a besoin d'huile, le poulet est cuit. Si la jambe tire droit et raide, il faut plus de temps."
    },
    {
      "nodeId": "step_4",
      "action": "Repos et service",
      "inputs": [
        "grilled_chicken"
      ],
      "outputState": "finished_peri_peri_chicken",
      "instructions": "Reposez la poitrine du poulet sur une planche à découper pendant 10 minutes — le repos de la poitrine vers le bas maintient la viande du sein bas dans ses propres jus. Dégustez et servez avec des rouleaux, des chips et une simple salade. Arrosez tout jus de repos sur la viande sculptée. La chaleur du péri-péri se construit lentement — avertissez les invités que l'effet complet arrive 30 secondes après la première morsure.",
      "visualCue": {
        "primaryTarget": "Le poulet sculpté présente une peau profondément carbonisée, laquée et juteuse, chair pâle sous laquelle coule l'articulation de la cuisse. La peau tient son caractère rigide et carbonisé même après le repos.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jus à l'articulation de la cuisse sont rose ou rouge-tige quand le poulet est sculpté. La chair est encore très rose près de l'os.",
            "action": "Retourner au grill à feu indirect, ou couvrir de papier d'aluminium et reposer au four chaud à 160 °C pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Des jus clairs à chaque coupe. La chair est opaque dans l'ensemble, blanche au sein et rose pâle à la cuisse (sûre à 74 °C). La peau est rigide et crépitante. Le liquide de repos sur la planche sent le chili, l'omble et les agrumes.",
            "action": "Servir immédiatement — c'est mieux dans les 5 minutes de la sculpture."
          },
          {
            "state": "Overdone",
            "description": "La viande de sein est sèche et à cordes lorsqu'elle est sculptée. Pas de jus de piscine sur la planche. La peau peut être partiellement tombée lors de la sculpture.",
            "action": "Servir avec de la sauce péri-péri sur le côté pour l'humidité. La viande haute sera encore juteuse, même lorsque le sein est surdosé, et les portions de viande blanche seront acheminées vers ceux qui le désirent."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre de la poitrine immédiatement avant de tailler — il devrait se sentir ferme mais céder avec un ressort défini, pas spongieux (sous-cuisine) et non board-hard (surcuits). L'omble sur la peau doit craquer audiquement lorsqu'il est pressé."
    }
  ]
};
