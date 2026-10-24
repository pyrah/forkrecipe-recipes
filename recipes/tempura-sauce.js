export default {
  "repoId": "master_japanese_tempura-sauce_001",
  "parentRepoId": null,
  "slug": "tempura-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce à tremper Tempura (Tentsuyu)",
  "description": "Le bouillon de trempage clair et doré servi avec tempura — une tente à base de dashisuyu assaisonnée de mirin et de soja, doux et salé avec un soupçon de mer, servi chaud aux côtés du daikon râpé.",
  "cuisine": "Japonais",
  "culture": "Tokyo",
  "category": "condiments",
  "tags": [
    "Japonais",
    "sauce",
    "tremper",
    "Dashi",
    "Produits de la mer"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Ichiban dashi (stock de premier draw kombu-katsuobushi)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "kombu dashi (vegan)",
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, vraiment fermenté)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sucré + pincée de sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sauce de soja (koikuchi ou soya léger usukuchi)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Radis de Daikon, fraîchement râpés (oroshi)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "gingembre frais, râpé (très vif — utiliser avec parcimonie)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé (facultatif, pour servir)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger et chauffer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "combined_tentsuyu",
      "instructions": "Mesurer le dashi, le mirin et la sauce de soja dans une petite casserole et mélanger brièvement. Le rapport de dashi à mirin au soja à 4:1:1 est la proportion de tentsuyu classique pour les fritures standard. Ce rapport produit un bouillon qui est savoureux mais léger — le dashi fait le lifting de saveur lourde, les édulcorants mirin et ronds, et les couleurs de soja et approfondit. Mettre à feu moyen et laisser mijoter en remuant une fois. Laisser mijoter 2 à 3 minutes pour brûler l'alcool cru mirin et mélanger les trois composants. La sauce doit sentir profondément la mer (du katsuobushi dans le dashi), le vin de riz doux et un soja propre et équilibré.",
      "visualCue": {
        "primaryTarget": "Un liquide clair et légèrement or ambré à mijoter, suffisamment translucide pour voir clairement le fond de la casserole, sentant le dashi équilibré et le mirin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est froide ou à peine chaude, le mirin est encore aiguisé et savoureux, et les composants ne se sont pas mélangés dans un bouillon unifié.",
            "action": "Portez à mijoter doucement et maintenez 2 minutes complètes. La chaleur est ce qui épouse les trois composants — la tente froidesuyu est seulement trois ingrédients séparés versé ensemble."
          },
          {
            "state": "Perfect",
            "description": "Doucement mijotant, limpide d'ambre. Sens de l'océan (katsuobushi), riz doux (mirin) et soja salé en proportion égale. Pas d'alcool brut.",
            "action": "Retirer du feu et tenir au chaud jusqu'à ce qu'il soit prêt à servir. Tentsuyu est toujours servi chaud à côté de la tempura."
          },
          {
            "state": "Overdone",
            "description": "La sauce a considérablement diminué à partir d'un ébullition prolongé — elle a un goût salé et intensément concentré, et la couleur s'est approfondie de l'ambre à l'orange foncé.",
            "action": "Ajouter plus de dashi pour revenir au bon rapport. Tentsuyu doit être léger et rafraîchissant, pas un glaçage."
          }
        ]
      },
      "feelCue": "Couper une petite quantité dans une cuillère à dégustation et la tenir à vos lèvres sans boire: la vapeur doit sentir l'océan, comme se tenir au bord d'un dashi pot, avec une douceur caramel en dessous. Si la vapeur sent vif et boueux, laissez mijoter 1 minute de plus."
    },
    {
      "nodeId": "step_2",
      "action": "Gratte daikon",
      "inputs": [
        "ing_04"
      ],
      "outputState": "grated_daikon",
      "instructions": "Peler une partie de daikon et la râper sur le plus fin réglage d'un gratteur oroshi japonais (ou les petits trous d'un gratteur de boîte, ou un Microplan) dans un petit bol. Râper en doux coups circulaires ou dos-à-bout — le pressage trop dur rendra le daikon aqueux et fibreux plutôt que fin et moelleux. Rassemblez immédiatement le daikon râpé à bout de doigts propre et pressez-le dans un petit hémisphère propre - la présentation japonaise montre toujours le daikon bombé soigneusement à côté du bol de sauce, prêt à remuer. L'abondance du daikon fraîchement râpé s'estompe rapidement, le râper immédiatement avant de servir, pas à l'avance.",
      "visualCue": {
        "primaryTarget": "Un monticule de daikon râpé, fin, moelleux et blanc-neige, sans cordes fibreuses, assez fin pour ressembler à de la neige molle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Daikon a été râpé grossièrement — de gros morceaux croquants qui se libèrent trop rapidement dans le bouillon et goûtent dur et épicé plutôt que propre et doux.",
            "action": "Utilisez le côté le plus fin de la grille. La présentation traditionnelle est très fine et douce."
          },
          {
            "state": "Perfect",
            "description": "Fin, moelleux, blanc avec un parfum frais, légèrement épicé propre. Chaque brin est à peine visible, plus d'une pâte douce qu'une lambée. Il se dissout presque instantanément dans le bouillon.",
            "action": "Placez le monticule à côté de la tasse de tentesuyu et servez immédiatement. Daikon perd sa pugnacité dans les 5 minutes suivant la grille."
          },
          {
            "state": "Overdone",
            "description": "Daikon a été râpé pendant 20 minutes — la poncidité créée par les enzymes volatiles s'est dissipée et le daikon est maintenant entaché d'eau et à plat.",
            "action": "Grattez le daikon frais. Le point entier du daikon d'oroshi est le contraste volatil entre la grille fraîche piquante et le bouillon chaud doux."
          }
        ]
      },
      "feelCue": "Pressez une petite pincée de daikon fraîchement râpé sur votre lèvre supérieure pendant 3 secondes: vous devriez sentir une chaleur de piquant faible — les composés isothiocyanates qui donnent à daikon sa bouchée agréable. Si vous ne sentez rien, le daikon est vieux ou le grater est trop grossier."
    },
    {
      "nodeId": "step_3",
      "action": "Rassembler et servir",
      "inputs": [
        "combined_tentsuyu",
        "grated_daikon",
        "ing_05"
      ],
      "outputState": "finished_tentsuyu",
      "instructions": "Déposer la tente chaudesuyu dans de petits bols individuels – laque ou céramique, idéalement avec une grande bouche qui permet de tremper une crevette ou une pièce de légumes sans éclaboussures. Placer le monticule de daikon râpé et une petite quantité de gingembre râpé sur le bord ou dans un coin d'une petite assiette de condiment à côté de chaque bol. Le diner remue le daikon et le gingembre dans la tente chaude en contrôlant l'intensité. Pour manger: tremper un morceau de tempura chaud brièvement dans le bouillon — une à deux secondes — de sorte que la pâte absorbe un peu de bouillon sans se faire bouillir, et manger immédiatement. Le sel, l'umami et le sucre du bouillon complètent la croûte neutre de la pâte tempura.",
      "visualCue": {
        "primaryTarget": "Un bouillon clair, chaud et doré dans une petite tasse, à la vapeur doucement, avec un petit monticule de daikon blanc et de gingembre à côté, simple et propre en présentation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon s'est refroidi en dessous de 60°C avant d'être largué – il se refroidira plus rapidement dans le bol de trempage et ne pourra pas assaisonner correctement la tempura.",
            "action": "Réchauffer immédiatement jusqu'à ce que la louche soit mijotée dans des bols chauds. Tentesuyu froid rend la pâte tempura se sentir dur plutôt que de céder."
          },
          {
            "state": "Perfect",
            "description": "Chaleur, vapeur, limpide et cristallin tentessuyu avec un arôme de mer et de caramel propre. Une goutte de tempura et le sel et l'umami pénètrent la pâte juste assez. Le daikon, agité, adoucit instantanément l'intensité avec fraîcheur.",
            "action": "Servir avec la tempura fraîchement frite dans les 30 secondes suivant la friture."
          },
          {
            "state": "Overdone",
            "description": "Tentsuyu a été maintenu à la chaleur trop longtemps et a réduit après la concentration correcte — il est salé et trop intensément aromatisé, accablant la pâte délicate.",
            "action": "Diluer avec une cuillère à soupe de dashi chaud ou d'eau chaude et goûter à nouveau. Tentsuyu devrait se sentir rafraîchissant, pas lourd."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère de la tentesuyu seule, sans aucun daikon. Il doit se sentir chaud et léger sur la langue — non pas le poids d'une sauce, mais la luminosité savoureuse propre d'un bouillon. L'umami devrait humer plutôt que crier, laissant un arrière-goût long et agréable de la mer."
    }
  ]
};
