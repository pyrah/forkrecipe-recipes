export default {
  "repoId": "fork_french_allemande_001",
  "parentRepoId": "master_french_veloute_001",
  "slug": "allemande",
  "parentSlug": "veloute",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Allemande",
  "description": "Un velours enrichi d'une liaison de jaune d'œuf et de crème, puis illuminé d'une pression de citron. La finale est tout le point: remuer la liaison en dehors de l'ébullition afin que les jaunes épaississent sans brouillage, et la sauce devient or pâle, brillant, et rond en bouche.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "fille-sauce",
    "liaison",
    "œuf-jaune"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Velouté épaissi d'une liaison de jaune d'œuf et de crème, illuminé de citron — une sauce fille plus riche et plus ronde.",
  "changes": {
    "ingredientsAdded": 3,
    "ingredientsRemoved": 0,
    "ingredientsModified": 0,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 1
  },
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Stock blanc (poulets ou veau)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "stocks de poissons",
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Jaune d'œuf",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Citrus",
      "name": "Jus de citron",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc (une goutte)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "blond_roux",
      "instructions": "Faire fondre le beurre à feu moyen-doux jusqu'à ce qu'il mousse sans brunir, puis fouetter dans la farine. Cuire en remuant, 4 à 6 minutes jusqu'à ce que l'odeur de la farine brute se transforme en noisettes grillées et que la pâte soit de la paille pâle — un roux blond, la base du velours sous cette sauce.",
      "visualCue": {
        "primaryTarget": "Une pâte lâche, brillante et à paille pâle qui se déplace comme du sable humide et sent les noix grillées chaudes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Blanc vif et pâteux, sent toujours la farine crue.",
            "action": "Mélanger sur la chaleur encore une minute jusqu'à ce que la couleur se déplace pour évanouir la paille et l'odeur devient noisette."
          },
          {
            "state": "Perfect",
            "description": "Même la paille pâle, lisse et fluide, légèrement noisette. Bubbles paresseux aux bords.",
            "action": "Tirez de la chaleur et préparez le stock chaud."
          },
          {
            "state": "Overdone",
            "description": "Glissé doré-brun et fortement grillé.",
            "action": "Commencer par une vraie blonde — un roux brun assombrirait l'or pâle que veut cette sauce."
          }
        ]
      },
      "feelCue": "Le fouet traîne à travers une pâte douce et fluide sans résistance. S'il se met à sécher, il y a trop de farine."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "blond_roux",
        "ing_01"
      ],
      "outputState": "loose_veloute",
      "instructions": "Hors de la chaleur, fouetter le stock blanc chaud dans le roux en trois ou quatre ajouts, laissant chacun disparaître avant le suivant. Retourner à feu moyen et porter à ébullition douce, fouetter, jusqu'à ce que lisse, brillant et légèrement épaississant.",
      "visualCue": {
        "primaryTarget": "Une sauce d'ivoire pâle, lisse, sans morceaux, brillante et juste assez épaisse pour laisser une trace fugace derrière le fouet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et aqueuse, glisse du fouet sans corps.",
            "action": "Tenir à ébullition douce, fouetter, quelques minutes de plus pour laisser épaissir l'amidon."
          },
          {
            "state": "Perfect",
            "description": "Doux, lustré, ivoire pâle; il recouvre légèrement le fouet.",
            "action": "Abaissez jusqu'à ce qu'une mijote nue et écrémez jusqu'à ce qu'elle soit propre, puis réduisez légèrement."
          },
          {
            "state": "Overdone",
            "description": "Coller et coller avec une surface terne.",
            "action": "Whisk in a little hot stock to desserre vers une nappe brillante et versable."
          }
        ]
      },
      "feelCue": "Vous sentez un doux épaississement prendre le fouet quand il se bouillit — qui prend est le réglage d'amidon. Écraser la surface avant de passer."
    },
    {
      "nodeId": "step_3",
      "action": "Température",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "tempered_liaison",
      "instructions": "Dans un bol, fouetter le jaune d'œuf et la crème jusqu'à ce qu'elle soit lisse. Déposer un peu de velours chaud dans un cours d'eau mince, fouetter dur, puis ajouter une seconde et troisième louche. Le but est de réchauffer progressivement les jaunes afin qu'ils ne voient jamais un choc de chaleur. Toute cette étape de tempérament est nouvelle dans cette sauce ; c'est ce qui sépare une allemande de son parent velouté.",
      "visualCue": {
        "primaryTarget": "Une crème lisse et dorée qui a été desserrée et chauffée par plusieurs louches de sauce chaude – versables, brillants, sans flecks d'oeuf cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La liaison est encore froide et épaisse, seulement une seule louche de sauce brassée.",
            "action": "fouetter dans une autre louche ou deux de velours chaud — il doit être chaud au toucher avant de retourner à la poêle."
          },
          {
            "state": "Perfect",
            "description": "Crème molle, chaude et dorée qui verse dans un ruban lisse sans grumeaux.",
            "action": "Faites revenir la liaison chaude dans la casserole de velours, hors ébullition."
          },
          {
            "state": "Overdone",
            "description": "Des mouchets ou des fils d'œufs pâles apparaissent — la sauce est entrée trop vite ou trop chaude.",
            "action": "Retirez la liaison à travers un tamis fin pour attraper les morceaux cuits avant de la retourner dans la poêle."
          }
        ]
      },
      "feelCue": "Sentez le côté du bol : il doit passer du frais au doux chaud pendant que vous louchez dans la sauce. S'il fait assez chaud pour vous faire peur, ralentissez - vous."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "loose_veloute",
        "tempered_liaison",
        "ing_08",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_allemande",
      "instructions": "Faites revenir la liaison trempée dans le velours à feu doux. Chauffer doucement, en remuant constamment, jusqu'à ce qu'il s'épaississe jusqu'à ce que la nappe soit brillante — ne la laissez PAS bouillir, ou les jaunes seront caillés. Tirer du feu, éclaircir avec une touche de citron, et assaisonner avec du sel et une touche de poivre blanc.",
      "visualCue": {
        "primaryTarget": "Une sauce pâle et satinée, nettement plus riche et plus ronde que le velours uni. Il enrobe une cuillère dans une couche épaisse et tient une ligne propre quand vous tirez un doigt à travers elle. La surface est brillante, jamais cassée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore molle et pâle, la liaison n'est pas encore fixée — goût mince et un peu cru avec l'oeuf.",
            "action": "Gardez - le à feu doux, en remuant, jusqu'à ce qu'il s'épaississe et que le brillant s'approfondisse."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, or pâle. Coats la cuillère richement; goût rond et salé avec un lift de citron propre.",
            "action": "Servir immédiatement sur la volaille, le veau ou les légumes."
          },
          {
            "state": "Overdone",
            "description": "La sauce a bouilli — des caillés granuleux de jaunes cuits brisent la surface une fois lisse.",
            "action": "Retirez le feu à la fois et mélangez ou tendez pour le lisser; la prochaine fois, maintenez la poêle sous une mijoter."
          }
        ]
      },
      "feelCue": "Sur la cuillère, il est plus lourd et plus soyeux que la velouté: la crème et le jaune lui donnent un collage velouté. Stir paresseux; vous ne devriez jamais voir une bulle briser la surface une fois que la liaison est entrée."
    }
  ]
};
