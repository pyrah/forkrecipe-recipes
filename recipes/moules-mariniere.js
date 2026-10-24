export default {
  "repoId": "master_french_moules_mariniere_001",
  "parentRepoId": null,
  "slug": "moules-mariniere",
  "author": "ForkRecipe Kitchen",
  "title": "Moules Marinière",
  "description": "Le pot de moules français classique — les moules vivantes s'ouvraient dans du vin blanc sec avec des échalotes et un dernier bouton de beurre froid, le bouillon bu avec gourmandise avec une cuillère ou un morceau de pain déchiré. Simple, océanique, et fait en vingt minutes.",
  "cuisine": "Français",
  "culture": "Norman-Breton",
  "category": "seafood",
  "tags": [
    "français",
    "Moules",
    "Produits de la mer",
    "Sans gluten",
    "produits laitiers inadaptés"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Moules fraîches, épurées et démêlées",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": [
        "palourdes (cuisson de 2 à 3 min de plus)",
        "coqs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes finement hachées",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec (Muscadet ou Chablis)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "cidre dur pour une version Norman"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, froid",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "beurre végétal",
        "omit pour les produits laitiers"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "ruches",
        "Cerveau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 1,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "poivre blanc"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Nettoyer et vérifier les moules",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cleaned_mussels",
      "instructions": "Frotter chaque moule sous l'eau froide courante avec un pinceau rigide pour enlever les barnacles et le grain. Retirez la barbe (la corde fibreuse qui sort de la couture) en la saisissant et en tirant brusquement vers l'extrémité de la charnière — tirant l'autre côté déchire la moule. Tapez fortement sur n'importe quelle moule ouverte sur le comptoir: si elle ne ferme pas dans les 10 secondes, jetez-la — elle est morte. Jetez tout avec des coquilles cassées ou cassées. Les moules doivent sentir uniquement l'océan — propre, brillamment et frais.",
      "visualCue": {
        "primaryTarget": "Les moules nettoyées sont étroitement fermées (ou fermées lorsqu'elles sont tapées), les coquilles jet-noir ou bleu-noir scintillent et sont propres, exemptes de barnacles, de grains et de barbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles ont encore des barnacles, du grain ou des barbes. Certains sont ouverts et n'ont pas été mis à l'essai.",
            "action": "Continuez à nettoyer. Glit dans la casserole rendra le bouillon désagréable. Testez chaque moule ouverte."
          },
          {
            "state": "Perfect",
            "description": "Coquilles propres et bien fermées. Tous ceux qui étaient ouverts ont fermé quand ils étaient tapés. Ils sentent de la saumure propre de l'océan — pas poissonneuse ou sulfureuse.",
            "action": "Cuire immédiatement ou garder au réfrigérateur couvert d'un chiffon humide pendant 6 heures."
          },
          {
            "state": "Overdone",
            "description": "Les moules sont assises dans un bol d'eau douce — elles peuvent être stressées et ouvertes. Les barbes ont été arrachées trop fort et certaines coquilles sont fissurées.",
            "action": "Égoutter toute eau. Cuire immédiatement. Jeter tout ce qui est fissuré ou obstinément ouvert."
          }
        ]
      },
      "feelCue": "Une moule vivante dans votre main doit se sentir lourde et dense, la coquille se cassant ferme fermement si vous essayez de l'ouvrir. Une moule creuse et légère est morte à l'intérieur et doit être jetée."
    },
    {
      "nodeId": "step_2",
      "action": "Échalotes de sueur",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "sweated_shallots",
      "instructions": "Dans une grande casserole large avec un couvercle serré, faire fondre la moitié du beurre à feu moyen. Ajouter les échalotes, l'ail et la laurier. Cuire doucement pendant 3 à 4 minutes, en remuant, jusqu'à ce que les échalotes soient complètement douces et translucides — elles ne doivent pas colorer du tout. Cette sueur courte et douce est la base de saveur et l'humidité des moules s'y développera. Assaisonner de poivre — pas encore de sel; les moules assaisonneront le bouillon.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont complètement translucides et douces, scintillent dans le beurre, le pot sentant l'allium doux sans brunissement ni changement de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore blanches et légèrement croquantes, la bouchée brute n'est pas transpirée. Ils donneront un bord dur au bouillon.",
            "action": "Réduire la chaleur et remuer en continu pendant encore 2 minutes. Les échalotes doivent être pleines."
          },
          {
            "state": "Perfect",
            "description": "Translucides, donnant, fondants, ils disparaissent dans le pot. Le beurre sent doux et peu de noix. La feuille de laurier est parfumée.",
            "action": "Ajouter le vin immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes sont devenues brunes. La casserole sent le caramel, pas l'allium frais. Ils rendront le bouillon légèrement doux et moulu.",
            "action": "Procéder — le bouillon sera plus complexe et légèrement plus doux. Pas traditionnel mais pas ruiné."
          }
        ]
      },
      "feelCue": "Appuyez sur une échalote contre la paroi du pot — il devrait se dissoudre dans un frottis doux sans résistance, laissant une mousse transparente. Toute crise nécessite plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Moules à vapeur dans le vin",
      "inputs": [
        "sweated_shallots",
        "ing_04",
        "cleaned_mussels"
      ],
      "outputState": "steamed_mussels",
      "instructions": "Élevez la chaleur. Verser dans le vin — il crachera et vapeur instantanément. Laisser bouillir dur pendant 1 minute pour sortir de l'alcool cru. Conseil dans toutes les moules nettoyées à la fois. Serrer fermement le couvercle et cuire à feu vif pendant 3 à 4 minutes, en agitant vigoureusement le pot une ou deux fois en saisissant les poignées et en le tournant dans un cercle. Ouvrir le couvercle après 3 minutes — presque toutes les moules doivent être ouvertes. Cuire encore une minute si nécessaire. Jeter tout ce qui reste fermé après 5 minutes.",
      "visualCue": {
        "primaryTarget": "Les moules sont largement ouvertes, leur chair vive orange et crème est visible à l'intérieur de chaque coquille. Le bouillon dans le pot est en or pâle et vapeur intense, opaque avec les jus de moules libérés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plus du quart des moules sont encore fermées. Le bouillon est encore clair et lumineux.",
            "action": "Fermez le couvercle et faites cuire 90 secondes de plus à feu vif. Les coquilles ont besoin de vapeur soutenue pour s'ouvrir complètement."
          },
          {
            "state": "Perfect",
            "description": "Tous sauf quelques coquilles sont ouvertes, la viande à l'intérieur grande, plombée, et la crème orange vive. Le bouillon est opaque et parfumé de vin et d'océan.",
            "action": "Retirer du feu et finir avec du beurre et du persil immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les moules sont largement ouvertes et la viande à l'intérieur a rétréci à un petit nub ridée, caoutchouteux. Le bouillon est très salé et réduit.",
            "action": "Terminer avec le beurre et servir immédiatement. Les moules surdosées ne peuvent pas être sauvées — la prochaine fois, 3 minutes suffit généralement."
          }
        ]
      },
      "feelCue": "Secouez le pot et écoutez - le son devrait passer de coquillages individuels à un son plus doux et plus unifié lorsqu'ils s'ouvrent et le pot se remplit de vapeur et de bouillon."
    },
    {
      "nodeId": "step_4",
      "action": "Finition au beurre et au persil",
      "inputs": [
        "steamed_mussels",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_moules",
      "instructions": "Retirer la casserole du feu. Ajouter le reste du beurre froid et faire tourner le pot pour le faire fondre dans le bouillon — ne pas remuer, juste tourner, qui émulsifie le beurre dans un bouillon légèrement crémeux et brillant. Ajouter le persil et donner un dernier tourbillon. Goûtez le bouillon et ajustez pour le poivre — les moules auront assaisonné avec du sel. Diviser en bols profonds chauffés, en veillant à ce que le bouillon soit généreusement lavé sur chaque portion. Servir immédiatement avec du pain croustillant ou des frites.",
      "visualCue": {
        "primaryTarget": "Le bouillon est passé d'un liquide fin et clair de vin et d'eau à un or légèrement crémeux et opaque avec le beurre émulsifié. Le persil vert frais flotte à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre a été ajouté à un pot bouillant et a clarifié plutôt que d'émulsionner — des anneaux huileux flottant sur un bouillon mince.",
            "action": "Hors du feu, ajouter le beurre froid et tourner plus doucement. Le beurre froid dans un liquide chaud (non bouillant) émulsifie; le beurre chaud dans un liquide bouillant clarifie."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est doré et légèrement nuageux, le beurre émulsionné dans une crémosité douce. Le persil est vert vif et toute la casserole sent le vin, l'océan et les herbes.",
            "action": "Loucher et servir immédiatement. Moules marinière n'attend pas."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a diminué trop loin de la chaleur persistante — il est très salé et épais, avec très peu de liquide dans le pot.",
            "action": "Ajouter un peu de vin blanc chaud ou d'eau pour le desserrer, mélanger le beurre et le persil, et servir."
          }
        ]
      },
      "feelCue": "Tourner le pot dans un cercle stable et regarder le bouillon — un bouillon marinière bien fini se déplace dans une vague paresseuse et soyeuse, attrapant la lumière sur sa surface émulsifiée, ne s'éloignant pas comme de l'eau."
    }
  ]
};
