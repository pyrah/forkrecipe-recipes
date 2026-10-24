export default {
  "repoId": "master_french_beurre_noisette_001",
  "parentRepoId": null,
  "slug": "beurre-noisette",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre Noisette",
  "description": "Beurre cuit après fusion, mousse passée, au moment exact ses solides de lait se transforment du blanc à un brun noisette profond et remplissent la cuisine d'un arôme de noix grillées, de caramel et de crème chaude. La ligne entre le génie et la ruine est de moins de trente secondes — traversez-la et vous avez beurre noir; arrêtez trop tôt et vous avez simplement fondu du beurre.",
  "cuisine": "Français",
  "culture": "Cuisine française classique et brasserie",
  "category": "sauces",
  "tags": [
    "français",
    "beurre",
    "Beurre brun",
    "sauce",
    "beurre-noisette",
    "pâtisserie",
    "finition"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "12 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, style européen à haute teneur en matières grasses (84 % de matières grasses)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre salé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron frais (ajouté à la fin pour arrêter la cuisson)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc",
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel flocé, ajouté en garniture"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Thym frais ou feuilles de sauge (facultatif — pour le beurre brun aromatique)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "romarin",
        "feuille de laurier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "foaming_butter",
      "instructions": "Couper le beurre en cubes d'environ 1 cm — une taille uniforme assure même la fusion et la distribution de chaleur. Placer dans une casserole de couleur claire : acier inoxydable, fonte émaillée ou cuivre étain. Ne jamais utiliser une poêle antiadhésive sombre — vous ne pouvez pas voir la couleur des solides de lait à travers le revêtement sombre, et vous manquerez le moment. Chaleur moyenne. Le beurre fond lentement (1-2 minutes), puis commence à mousser lorsque l'eau du beurre se convertit en vapeur. Cette première mousse est blanche et mousseuse. Veillez bien — ne laissez pas la poêle. La mousse s'abaisse au fur et à mesure que l'eau s'évapore, révélant un liquide clair et doré en dessous. C'est du beurre clarifié — toute l'eau a cuit. Les solides de lait (les morceaux blancs) ont coulé au fond de la poêle. Vous êtes maintenant dans la zone dangereuse : la réaction de Maillard commence.",
      "visualCue": {
        "primaryTarget": "La première mousse a baissé pour révéler un liquide clair et doré avec des particules solides de lait blanc visibles au fond de la casserole. Une seconde mousse plus petite commence à se former.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore épaisse, mousse blanche couvrant la surface. Je ne vois pas le liquide ci-dessous. Le beurre libère encore de l'eau.",
            "action": "Attendez et regardez. Ne pas augmenter la chaleur — la patience produit un brunissement plus uniforme."
          },
          {
            "state": "Perfect",
            "description": "La première mousse a nettement baissé. Liquide doré clair visible. Particules solides de lait blanc visibles au fond. Une faible odeur de noix ne fait que commencer.",
            "action": "C'est le moment de faire le maximum d'attention — le brunissement arrive vite d'ici."
          },
          {
            "state": "Overdone",
            "description": "À ce stade, vous ne pouvez pas trop faire cette étape — c'est simplement la phase de fusion. Mais si le beurre devient déjà doré-brun immédiatement après la baisse de la mousse, votre chaleur est trop élevée.",
            "action": "Réduire immédiatement le feu et faire tourner la poêle pour refroidir légèrement le beurre."
          }
        ]
      },
      "feelCue": "Tenez votre main 15 cm au - dessus de la poêle — la chaleur doit être stable et même, pas agressive. Le bruit de grésillement devrait être doux et cohérent, comme de la pluie légère sur le toit, pas un éclat ou un pop."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "foaming_butter",
        "ing_04"
      ],
      "outputState": "noisette_butter",
      "instructions": "Dès le moment où la première mousse s'abaisse, regardez le lait solide au fond de la poêle. Ils commenceront à tourner du blanc à l'or à l'ambre en brun noisette en succession rapide. Ajoutez maintenant les brindilles d'herbes si vous les utilisez — elles frireront dans le beurre clarifié, tourneront croquant et parfumeront le bruit de beurre avec leurs huiles volatiles. Faites pivoter la poêle doucement plutôt que de la remuer. La couleur que vous recherchez est celle d'une coquille de noisette grillée : brun-ambre chaud avec un soupçon de rouge. L'arôme changera considérablement à ce moment - de l'odeur douce et laiteuse du beurre fondu à quelque chose de plus riche, complexe, et presque noisette, avec une faible note de caramel en dessous. Une seconde mousse fine apparaîtra juste avant le moment parfait. Le temps total de la subsidence en mousse à la noisette parfaite : 60-90 secondes à feu moyen.",
      "visualCue": {
        "primaryTarget": "Les solides de lait au fond de la poêle sont brun noisette (pas pâle, pas noir). Le liquide est un or ambre profond. Une mousse fine et sombre flotte à la surface. L'arôme est puissant de noix grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les solides de lait sont dorés mais pas bruns. Le beurre sent la noix, mais pas profondément, plus un soupçon qu'une affirmation.",
            "action": "Continuez — 20 secondes de plus sur la chaleur vous y amèneront. L'amélioration de la saveur de l'or au brun est spectaculaire."
          },
          {
            "state": "Perfect",
            "description": "Les solides de lait sont la couleur des coquilles de noisettes — brun chaud, pas foncé. Le liquide est ambre profond. L'arôme est massivement de noix grillées et de caramel. Une mousse fine et foncée est assise sur le dessus.",
            "action": "Retirer du feu IMMEDIATEMENT et ajouter le jus de citron."
          },
          {
            "state": "Overdone",
            "description": "Les solides de lait sont brun foncé, approchant du noir. L'arôme a un bord amer et brûlé: vous avez fait du beurre noir. La cuisine sent le lait brûlé.",
            "action": "Jeter si ça sent l'acride. Beurre noir (intentionnel) est une sauce différente utilisée avec le patin et le cerveau — si c'était votre but, soucher et ajouter des câpres et du vinaigre."
          }
        ]
      },
      "feelCue": "Le moment où la cuisine se remplit d'un puissant arôme de noisettes et de toast chaud — pas une suggestion faible mais une vague qui vous frappe — le beurre est à son apogée. Cette alarme olfactive est plus fiable que la couleur pour ceux qui sont nouveaux dans cette technique."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "noisette_butter",
        "ing_02",
        "ing_03"
      ],
      "outputState": "finished_beurre_noisette",
      "instructions": "À l'instant où le beurre atteint le stade noisette-brun, retirer la poêle du feu et ajouter le jus de citron – il crache et crache agressivement en touchant la graisse chaude. Tourner ou fouetter brièvement. L'acide remplit deux fonctions : il arrête la cuisson en réduisant la température de la poêle, il éclaire et soulève la saveur, en coupant la richesse. Ajouter le sel. Si vous avez ajouté des herbes, elles peuvent rester en garniture ou être enlevées si vous préférez une finition plus propre. Verser la beurre à travers un tamis à mailles fines (pour attraper des particules solides de lait très foncé) si vous voulez une élégance maximale, ou laisser les morceaux brunis pour leur saveur — ils sont la partie la plus aromatisée de la sauce. À utiliser immédiatement: cuillère sur le poisson frit (truit, sole, patin), bruine sur le gnocchi, verser sur le chou-fleur rôti, ou remuer dans des pâtes à gâteau pour une saveur plus profonde.",
      "visualCue": {
        "primaryTarget": "Une sauce ambrée-ornée profonde avec des flecks de solides de lait brun, sentant fortement les noisettes et le caramel, légèrement épaissie par l'ajout de jus de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a l'air pâle et le jus de citron a à peine été incorporé. Pas de taches visibles de solides de lait brun.",
            "action": "Faites pivoter pour incorporer complètement le citron. La sauce est correcte — pâle signifie que vous l'avez attrapé au bon moment."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde avec flecks brun noisette. La sauce sent les noix grillées, le caramel et le citron. Il se déplace facilement dans la poêle, mais a une légère viscosité à partir des protéines de lait brun.",
            "action": "Servir immédiatement. Le beurre brun commence à perdre ses notes supérieures volatiles en quelques minutes de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très foncée et sent amer. Le jus de citron a été ajouté trop tard — les solides de lait étaient déjà allés au-delà de la noisette au noir.",
            "action": "Jetez. On ne peut pas sauver un bruit de beurre amer."
          }
        ]
      },
      "feelCue": "Plongez l'extrémité d'un doigt propre dans la sauce finie — à 60°C, il doit sentir chaud mais ne pas brûler. L'huile doit se sentir soyeuse et propre, pas lourde ou grasse. Lorsque vous frottez les doigts ensemble, les solides de lait bruné laissent un léger résidu grillé qui sent extraordinaire."
    }
  ]
};
