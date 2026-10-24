export default {
  "repoId": "master_belgian_steamed_mussels_001",
  "parentRepoId": null,
  "slug": "steamed-mussels",
  "author": "ForkRecipe Kitchen",
  "title": "Moules Marinières",
  "description": "Les moules s'ouvrent à la vapeur dans du vin blanc avec des échalotes, de l'ail et du beurre, les coquilles deviennent leur propre récipient pour le bouillon de cuisson aromatique bri, parfait avec du pain croustillant ou des frites à deux frites.",
  "cuisine": "Belgique",
  "culture": "Belge/français",
  "category": "seafood",
  "tags": [
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Moules fraîches, nettoyées et débusquées",
      "ratioValue": 1,
      "defaultUnit": "kg",
      "substitutions": [
        "Palourdes de Manille",
        "coqs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Vin blanc sec (Muscadet ou Chablis)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "cidre dur pour une variation normande"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes, coupées finement",
      "ratioValue": 3,
      "defaultUnit": "large",
      "substitutions": [
        "oignon blanc, moitié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, froid et cube",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, approximativement haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Double crème (facultatif, pour marinière à la crème)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chop",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cleaned_mussels",
      "instructions": "Rincer les moules sous l'eau froide courante, frotter les coquilles avec un pinceau rigide pour enlever les barnacles ou le sable. Retirez la barbe — la touffe fibreuse qui dépasse la coque — en la tenant fermement et en tirant vers l'extrémité de la charnière de la coque. Jetez toutes les moules avec des coquilles fissurées, et toutes celles qui sont ouvertes et ne ferment pas lorsqu'elles sont tapées brusquement sur le comptoir avec votre coulis. Ils sont morts et dangereux à manger.",
      "visualCue": {
        "primaryTarget": "Moules propres et à coquille foncée qui sont fermement fermées ou fermées lorsqu'elles sont tapées. Pas de barbe visible. Pas de boue ou de grit sur les coquilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ours sont encore présents sur certaines moules. Les coquilles n'ont pas été nettoyées. Glit et sable visible.",
            "action": "Continuer le nettoyage — le grat dans le bouillon final est inacceptable et ruinera le plat."
          },
          {
            "state": "Perfect",
            "description": "Toutes les moules sont uniformément propres. Les coquilles sont bien fermées. Tous ceux qui sont restés ouverts malgré le tapotage ont été jetés. La pile sent l'océan propre.",
            "action": "Procéder avec la base des aromatiques."
          },
          {
            "state": "Overdone",
            "description": "Plusieurs moules ouvertes ont été incluses sans essai. Cela met en danger la salubrité des aliments — les moules vivantes se ferment lorsqu'elles sont tapées. Si vous ne pouvez pas le dire, jetez.",
            "action": "Triez et jetez immédiatement tous ceux ouverts."
          }
        ]
      },
      "feelCue": "Une moule vivante se sent lourde pour sa taille et se ferme brusquement lorsque vous touchez l'ouverture avec un bout de doigt. Un mort est souvent léger et s'évanouit."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_05",
        "ing_03",
        "ing_04",
        "ing_09",
        "ing_08"
      ],
      "outputState": "aromatic_base",
      "instructions": "Faire fondre 30 g de beurre dans un pot assez grand pour maintenir toutes les moules à vapeur (au moins un pot de 6 litres pour 1 kg de moules). À feu moyen, faire sauter les échalotes et l'ail avec la feuille de laurier et quelques moulures de poivre noir pendant 3-4 minutes jusqu'à ce que les échalotes soient complètement molles et translucides. Ils ne devraient pas colorer du tout — le but est une base aromatique douce et douce, pas une base caramélisée. Ajouter le vin et porter à ébullition rapide.",
      "visualCue": {
        "primaryTarget": "Les échalotes et l'ail sont translucides, doux et parfumés. Le vin est à ébullition et a diminué légèrement, sentant l'alcool qui brûle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore fermes et légèrement crues. Le vin n'a pas encore atteint un ébullition. La base manque de douceur pour se fondre avec le bouillon de moules.",
            "action": "Laisser 2 minutes de plus à feu moyen-élevé."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes sont complètement douces et vitreuses. Le vin est bouillant vigoureusement et l'odeur d'alcool cru s'est pour la plupart dissipée, laissant un arôme de vin propre et fruité.",
            "action": "Ajouter immédiatement les moules."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes et l'ail sont devenus dorés. La base a maintenant un goût caramélisé plutôt que frais et délicat.",
            "action": "Procéder — les moules seront encore excellentes, juste un peu plus riches et moins délicates en saveur."
          }
        ]
      },
      "feelCue": "La cuisine en ce moment devrait sentir l'échalote chaude, grillée et le vin à la vapeur — une odeur propre, lumineuse, côtière qui vous dit déjà le dîner sera bonne."
    },
    {
      "nodeId": "step_3",
      "action": "vapeur",
      "inputs": [
        "aromatic_base",
        "ing_01"
      ],
      "outputState": "steamed_mussels",
      "instructions": "Mettre toutes les moules nettoyées dans la base de vin bouillante en un mouvement confiant. Couvrir immédiatement la casserole d'un couvercle serré. Cuire sur la chaleur la plus élevée possible pendant 3 à 4 minutes, en agitant fermement le pot par les poignées une ou deux fois pour redistribuer les moules. La vapeur piégée à l'intérieur du pot les fera cuire simultanément de tous les côtés. Après 3 minutes, lever le couvercle pour vérifier — la plupart doivent être ouverts. Remplacez le couvercle pendant 60 secondes de plus s'il reste fermé.",
      "visualCue": {
        "primaryTarget": "La grande majorité des coquillages sont largement ouverts, révélant la chair de moules orange-or à l'intérieur. La vapeur jaillit du pot lorsque le couvercle est levé. Le bouillon est doré et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plus d'un quart des moules sont toujours fermées et la viande à l'intérieur des coquilles ouvertes semble pâle et gélatineuse plutôt que d'être plumée et dorée.",
            "action": "Remplacer le couvercle et cuire 60 secondes de plus à feu vif."
          },
          {
            "state": "Perfect",
            "description": "Presque toutes les coquilles sont largement ouvertes, chaque coupe d'un morceau d'or-orange de viande de moules. Le bouillon de pot est doré, aromatique et légèrement crémeux de la liqueur de moule. Jeter ceux qui restent obstinément fermés.",
            "action": "Retirer du feu et finir avec de la crème, du beurre et du persil."
          },
          {
            "state": "Overdone",
            "description": "La viande de moules a considérablement rétréci dans les coquilles et semble dure et sombre aux bords. Le bouillon sent fortement les mollusques trop cuits.",
            "action": "Servir immédiatement — les moules trop cuites durcissent rapidement. Le beurre supplémentaire dans la finition aidera."
          }
        ]
      },
      "feelCue": "Ramassez une moule ouverte: la viande devrait remplir généreusement la coquille, l'air lustré et brillant et ne pas se réduire dans un petit disque à la charnière de la coquille."
    },
    {
      "nodeId": "step_4",
      "action": "Monter",
      "inputs": [
        "steamed_mussels",
        "ing_07",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_mussels",
      "instructions": "Enlever les moules qui ne les ont pas ouvertes et les jeter. Si vous utilisez de la crème, versez - la dans la casserole maintenant et remuez - la jusqu'à ce que la crème ait fusionné avec le vin et la liqueur de moules. Retirer du feu. Déposer le reste du beurre glacé en morceaux, en agitant le pot pour l'émulsionner dans le bouillon sans le fondre complètement — vous voulez un bouillon brillant, légèrement épais, pas un bouillon huileux. Scatter le persil haché sur le dessus. Servir immédiatement, directement de la casserole, dans des bols chauds avec beaucoup de bouillon et de pain sur le côté.",
      "visualCue": {
        "primaryTarget": "Bouillon doré brillant enrobant les moules. Du persil lumineux éparpillé sur les coquilles sombres. Le bouillon est légèrement opaque du beurre émulsifié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'a pas été incorporé — il est assis comme un lécher huileux séparé sur le dessus du bouillon. Pas de persil ajouté. Le bouillon est mince et aqueux.",
            "action": "Faire pivoter vigoureusement le pot hors du feu pour émulsionner le beurre. Ajouter le persil avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est brillant, doré et légèrement crémeux — pas gras, pas mince. Le beurre est complètement émulsifié. Le persil est vert vif. Les moules brillent dans leurs coquilles.",
            "action": "Transférer dans les bols et servir immédiatement — les mulets n'attendent personne."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a été remis sur le feu après le beurre — il a cassé et est maintenant huileux. L'émulsion est perdue.",
            "action": "Enlevez immédiatement la chaleur et ajoutez une éclaboussure d'eau froide en tourbillonnant rapidement pour tenter de réémulsionner."
          }
        ]
      },
      "feelCue": "Faites tremper un morceau de pain dans le bouillon fini — il devrait tremper rapidement et goûter à la mer, à l'échalote douce, au vin et au beurre tout d'un coup, sans qu'aucun élément domine."
    }
  ]
};
