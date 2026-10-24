export default {
  "repoId": "master_korean_bibimbap-sauce_001",
  "parentRepoId": null,
  "slug": "bibimbap-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Bibimbap Sauce Gochujang",
  "description": "Une sauce rouge vif et doux-brillant construite sur l'épine dorsale du gochujang fermenté — addictif et affirmé, avec de l'ail et du sésame filetant à travers une consistance collante et coiffante qui met en évidence tout un bol de bibimbap en un seul tourbillon. Trois minutes à faire; impossible d'arrêter de manger.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "sauces",
  "tags": [
    "coréen",
    "sauce",
    "Gochujang",
    "Bibimbap",
    "épicé",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Gochujang (Pâte de chili fermentée coréenne)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sambal oelek (moins sucré)",
        "doenjang + chili (pour différents caractères)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie",
        "sirop de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de cidre de pomme",
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail, bien râpé",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sauce_mixture",
      "instructions": "Mesurer tous les ingrédients dans un petit bol. Râper l'ail directement dans le bol sur un microplan — l'ail râpé incorpore immédiatement et sa chaleur brute vive fleurit dans le gochujang plus uniformément que les morceaux hachés. Ajouter le gochujang, le sucre, l'huile de sésame, le vinaigre de riz, la sauce soja et l'eau. fouetter vigoureusement pendant 60 secondes jusqu'à ce que le mélange soit complètement lisse, brillant et uniforme. L'eau réduit la pâte épaisse à une consistance de revêtement — sans elle, la sauce est trop raide pour tourner à travers le riz. Goûtez après le mélange: il devrait vous frapper en vagues — d'abord l'épine dorsale fermentée-soybe du gochujang, puis une chaleur montante, puis la douceur, puis une noix de sésame à la finale. Si un élément domine, corriger avant de terminer: ajouter une goutte plus de vinaigre pour soulever la planéité, une pincée plus de sucre pour calmer la chaleur agressive, ou quelques gouttes d'huile de sésame pour arrondir les bords.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique brillante de consistance uniforme — pas de stries pâles du sucre non mélangé, pas de mise en commun séparée de l'huile à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de sucre sont encore visibles et la sauce semble striée — des tourbillons jaunes pâles où l'huile de sésame n'a pas intégré et des taches blanches de sucre non dissous.",
            "action": "fouetter encore 30 à 45 secondes; le sucre doit se dissoudre complètement et l'huile doit être émulsifiée dans la pâte."
          },
          {
            "state": "Perfect",
            "description": "Un rouge brique lustré et uniforme avec un léger reflet; la sauce tombe d'une cuillère dans un ruban épais et continu qui tient sa forme brièvement avant de s'étendre; les taches d'ail sont uniformément distribuées.",
            "action": "Goûter et ajuster l'assaisonnement, puis passer à l'étape de repos."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté trop d'eau ou de vinaigre et la sauce est trop fine — elle fonctionne comme de l'eau plutôt que de la couvrir d'une cuillère.",
            "action": "Ajouter plus de gochujang une demi-teaspoon à la fois jusqu'à ce que la consistance du ruban soit rétablie."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre les deux doigts — il doit se sentir soyeux et légèrement collant, pas granuleux. Tout grain signifie sucre non dissout; continuez à fouetter."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "sauce_mixture"
      ],
      "outputState": "bloomed_sauce",
      "instructions": "Couvrir le bol et laisser reposer la sauce à température ambiante pendant au moins 5 minutes avant d'utiliser. Cette brève période de floraison est importante : la netteté de l'ail brut s'adoucit lorsque ses enzymes interagissent avec l'acide du vinaigre, et la chaleur de chili du gochujang s'ouvre davantage lorsque sa capsaïcine se diffuse à travers la graisse dans l'huile de sésame. La sauce s'approfondira légèrement dans la saveur et les éléments individuels commenceront à goûter comme un seul ensemble unifié plutôt que des composants séparés. Si vous avancez, couvrez - le et réfrigérez - il pendant 2 semaines et améliore effectivement après 24 heures que les saveurs se marient pleinement. Retirer du réfrigérateur 15 minutes avant de servir afin que l'huile de sésame revienne à l'état liquide.",
      "visualCue": {
        "primaryTarget": "La surface de la sauce passe de légèrement striée à un brillant uniforme rouge brique profonde; l'arôme d'ail brut laisse place à quelque chose de plus rond et plus intégré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 2 minutes de repos — la netteté brute de l'ail est encore agressivement piquante et les composants individuels ont un goût distinct plutôt que unifié.",
            "action": "Attendez; un repos de 5 minutes fait une différence mesurable."
          },
          {
            "state": "Perfect",
            "description": "La sauce sent ses composants travaillant ensemble : chili fermenté, sésame sucré, ail doux. La surface est complètement brillante et uniforme.",
            "action": "Éparpiller les graines de sésame sur la surface et servir aux côtés du bibimbap."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 2 heures à température ambiante, l'ail cru peut être devenu trop piquant et la note de vinaigre s'est aiguisée.",
            "action": "Réfrigérer et utiliser dans un délai de 2 semaines — les saveurs vont se fondre et s'améliorer."
          }
        ]
      },
      "feelCue": "Après le repos, la sauce doit sentir comme une seule chose — complexe mais unifiée, la façon dont un bon miso ou vinaigre vieilli sent: plus que la somme de ses parties."
    },
    {
      "nodeId": "step_3",
      "action": "Garnir",
      "inputs": [
        "bloomed_sauce",
        "ing_08"
      ],
      "outputState": "finished_bibimbap_sauce",
      "instructions": "Transférer dans un petit récipient de service — un bol latéral dolsot, un ramekin ou une bouteille de compression pour plus de précision. Éparpiller les graines de sésame grillées sur la surface. Dans le rituel traditionnel du bibimbap, les diners cuillerent une cuillère à soupe ou deux de sauce dans leur bol et mélangent ensuite tout vigoureusement jusqu'à ce que le riz devienne rouge-orange vif et que chaque ingrédient soit enduit. Commencez avec prudence — la sauce est puissante — et ajoutez plus au goût. La sauce est également excellente comme sauce à tremper pour les viandes grillées, brassée dans des nouilles, frottée sur un œuf frit ou utilisée comme condiment pour les légumes à la vapeur. C'est l'une des sauces fermentées les plus polyvalentes du cellier coréen.",
      "visualCue": {
        "primaryTarget": "Un petit ramequin rempli de sauce rouge brique couronné de graines de sésame doré pâle – intense de couleur, signal clair de son caractère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de sésame n'ont pas encore été ajoutées; la surface semble plate.",
            "action": "Épargnez généreusement les graines de sésame – elles ajoutent un contraste visuel et un arôme grillé crucial."
          },
          {
            "state": "Perfect",
            "description": "Graines de sésame dorées couvrant uniformément la surface, la sauce rouge visible en dessous en contraste vif.",
            "action": "Servir immédiatement ou couvrir et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Les graines de sésame ont été pressées dans la sauce et coulées sous la surface.",
            "action": "Ajouter une dispersion fraîche de graines sur le dessus avant de servir."
          }
        ]
      },
      "feelCue": "Lorsque vous trempez une pointe de baguette dans la sauce finie et que vous la laissez couler, elle doit tomber dans un fil paresseux et continu — assez épais pour enrober mais suffisamment fluide pour verser."
    }
  ]
};
