export default {
  "repoId": "master_russian_beef-stroganoff-sauce_001",
  "parentRepoId": null,
  "slug": "beef-stroganoff-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce de stroganoff de boeuf",
  "description": "Une sauce à la crème à la moutarde pâle, au goût profond d'un stock réduit de boeuf et de champignons terreux, construite dans la même casserole que le bœuf, de sorte que chaque goutte de fond devient saveur, fini à la table avec un tourbillon de crème aigre.",
  "cuisine": "Russe",
  "culture": "Russe",
  "category": "sauces",
  "tags": [
    "crème",
    "moutarde",
    "boeuf",
    "Russe",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 4,
    "bitter": 1,
    "umami": 7,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes finement hachées",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune, en dés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Champignons crémini ou boutons, tranchés finement",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "porcin (réhydraté)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Stock de boeuf (bonne qualité, faible teneur en sodium)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème acide (graisse pleine)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Moutarde de Dijon",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché (pour finir)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "sauteed_mushroom_base",
      "instructions": "Faire fondre le beurre dans la poêle utilisée pour cuire le boeuf (ou une poêle fraîche à feu moyen-vif). Ajouter les échalotes et cuire 2 minutes jusqu'à ce qu'elles soient adoucies et translucides. Dans la mesure du possible, ajoutez les champignons tranchés en une seule couche — ne les foulez pas ou ils seront cuits à la vapeur au lieu de brun. Cuire sans gêne pendant 3 minutes, puis remuer et continuer à cuire encore 3-4 minutes jusqu'à ce que les champignons soient profondément dorés-bruns et qu'ils se soient libérés puis réabsorbés leur liquide. La poêle devrait être presque sèche. Assaisonner de sel.",
      "visualCue": {
        "primaryTarget": "Les champignons sont brun doré profond avec des bords croustillants et caramélisés. La poêle est presque sèche: toute l'humidité s'est évaporée. Les échalotes sont douces et douces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont encore gris, humides et nagent dans le liquide libéré.",
            "action": "Augmenter le feu et cuire sans remuer jusqu'à ce que tout le liquide s'évapore et que le brunissement commence. La patience est essentielle — la réaction de Maillard ne commence qu'après la disparition de l'humidité."
          },
          {
            "state": "Perfect",
            "description": "Champignons brun doré profond aux bords croustillants. Pan presque sec. Sens de champignons rôtis et de beurre, profondément salé.",
            "action": "Déglacer avec le stock de boeuf immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont brun foncé ou brûlés. Le beurre est noirci.",
            "action": "Déglacer immédiatement avec un jet de stock. Le fond est encore utilisable, mais réduit significativement la chaleur."
          }
        ]
      },
      "feelCue": "Lorsque les champignons sont correctement brunis, ils cesseront de relâcher la vapeur et commenceront à étourdir avec un bruit sec et crépitant. L'arôme passe de végétal et de vapeur à profondément salé et rôti — c'est le signal de déglacer."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "sauteed_mushroom_base",
        "ing_04"
      ],
      "outputState": "reduced_beef_sauce",
      "instructions": "Verser tout le bouillon de boeuf dans la poêle chaude. Il étourdira violemment et soulèvera le fond brun de la poêle. Utilisez une cuillère en bois pour racler chaque morceau du résidu caramélisé sombre dans le liquide. Ce fond est l'épine dorsale saveur de la sauce. Augmenter la chaleur à haut et réduire le stock de moitié, environ 5-7 minutes à une mijotée vigoureuse. La sauce s'approfondira dans la couleur et la saveur significativement comme elle réduit.",
      "visualCue": {
        "primaryTarget": "La sauce réduite est brun foncé, brillante et concentrée. Il enveloppe une cuillère légèrement. Le volume est environ la moitié de l'original. Aucune affection visible sur le fond de la poêle — tous dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est encore mince et pâle. N'a pas diminué de moitié. Le goût est mince et aqueux.",
            "action": "Continuer à réduire à feu vif. Goûtez comme il réduit — vous remarquerez la concentration de saveur."
          },
          {
            "state": "Perfect",
            "description": "La sauce est profondément brune, brillante et enrobe une cuillère. Intensément salé. La moitié du volume original. Test de griffe : aucun fond ne reste en bas.",
            "action": "Réduire le feu à moyen-doux et ajouter la crème sure et la moutarde."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est très épaisse, sirupeuse et légèrement collante.",
            "action": "Ajouter un jet de bouillon ou d'eau pour le ramener à une légère consistance de sauce avant d'ajouter de la crème."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans une petite quantité sur la cuillère (attention, il fait chaud) – une sauce de bœuf bien réduite sent légèrement visqueuse et enrobe votre langue, laissant un film salé et charnu. Un stock mince se sent aqueux et immédiat."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "reduced_beef_sauce",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_stroganoff_sauce",
      "instructions": "Réduire la chaleur à très faible. Ajouter la moutarde de Dijon et la remuer. Ajouter la crème aigre dans deux cuillères, en remuant pour incorporer chaque addition complètement avant d'ajouter la prochaine. Ne laissez PAS bouillir la sauce une fois que la crème sure est dans — bouillir fera en sorte que la crème sure soit caillée et cassée, laissant des caillés blancs granuleux dans la sauce. Incorporer constamment à feu très doux pendant 2-3 minutes jusqu'à ce que la sauce soit lisse, uniforme et brun pâle. Ajouter le poivre noir fraîchement moulu et goûter au sel. Incorporer le persil juste avant de servir.",
      "visualCue": {
        "primaryTarget": "Sauce lisse, brun champignon pâle avec un éclat brillant. Couleur uniforme — pas de stries ou de caillés blancs. C'est généreux. Le persil est juste visible partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème acide n'a pas été entièrement incorporée. Des stries blanches encore visibles. La sauce semble séparée.",
            "action": "Mélanger vigoureusement la chaleur, puis revenir à feu très bas et remuer constamment pendant une autre minute."
          },
          {
            "state": "Perfect",
            "description": "Doux, sauce brun pâle uniforme. Moutarde tang évidente mais pas tranchante. Légèrement aigre de la crème. Finale riche et savoureuse. Coats une cuillère dans une couche généreuse et lente.",
            "action": "Ajouter le boeuf à la sauce et servir immédiatement sur les nouilles d'œuf ou la purée de pommes de terre."
          },
          {
            "state": "Overdone",
            "description": "La sauce a bouilli et cassé. Cords grainés blancs flottant dans un liquide mince et gras. La crème sure a craqué.",
            "action": "Retirer du feu. fouetter vigoureusement une cuillère à soupe de crème aigre froide — parfois la sauce peut être sauvée. Si elle est gravement cassée, épuiser le caillé, ré-réduire et ajouter de la crème fraîche sure du feu."
          }
        ]
      },
      "feelCue": "La sauce finie devrait se sentir riche et légèrement épaisse sur la langue — la graisse de la crème aigre enveloppe votre palais de manière propre, laissant une agréable saveur et une légère chaleur aigre. Une sauce fine qui sort de votre cuillère signifie que la crème sure n'a pas complètement incorporé."
    }
  ]
};
