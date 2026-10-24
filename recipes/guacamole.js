export default {
  "repoId": "master_mexican_guacamole_001",
  "parentRepoId": null,
  "slug": "guacamole",
  "author": "ForkRecipe Kitchen",
  "title": "Guacamole",
  "description": "La molcajete classique — mûre Hass avocats écrasés avec une pâte de serrano, d'oignon, de coriandre et de sel, illuminé avec du citron vert, gardé délibérément chunky ainsi chaque bouchée porte à la fois la chair beurrée et un éclair de chaleur verte.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "condiments",
  "tags": [
    "avocat",
    "Mexique",
    "trempette",
    "pas de cuisson",
    "molcajete"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Ripe Hass avocats (rendant à la pression douce)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Fuerte avocats"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chil Serrano haché (semences pour plus de chaleur)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeño"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Coriandre fraîche, hachée (feuilles et tiges tendres)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Jus de citron vert frais",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Grind",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "chile_paste",
      "instructions": "Dans une molcajete (ou avec le plat d'un couteau sur une planche), moudre la moitié de l'oignon, le serrano, la moitié de la coriandre et le sel dans une pâte rugueuse et humide. Le sel agit comme un abrasif, brisant le chile et l'oignon et tirant leurs huiles. Vous voulez un lisier vert parfumé, pas une purée lisse — un peu de texture est correcte.",
      "visualCue": {
        "primaryTarget": "Une pâte verte grossière et scintillante flocée de chile et d'oignon. Il sent fortement le chile cru et l'herbe brillante, et les grains de sel se sont pour la plupart dissous dans les jus libérés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon et le piment sont toujours en morceaux secs distincts, assis sur le sel. Aucune humidité n'a été libérée et l'arôme est faible.",
            "action": "Continuer à broyer avec un mouvement circulaire ferme. Le sel a besoin de temps pour extraire le liquide et briser les parois cellulaires."
          },
          {
            "state": "Perfect",
            "description": "Une pâte molle et humide qui tient ensemble lorsqu'elle est poussée d'un côté. La chaleur de chile et le parfum de coriandre vous ont frappé quand vous vous penchez sur le bol.",
            "action": "Passez à l'avocat."
          },
          {
            "state": "Overdone",
            "description": "Complètement lisses, soupeuses et homogènes — toute texture est à terre. La coriandre est devenue sombre et meurtrie.",
            "action": "Acceptez-le ; il va encore aromatiser le plat. La prochaine fois, arrêtez-vous plus tôt et réservez de l'oignon et de la coriandre pour l'arrivée."
          }
        ]
      },
      "feelCue": "Sous le pilon, le mélange doit passer de croquant et résistant à doux et liquéfiant en une minute. Vos doigts devraient sentir le chile et le zeste de citron lorsque vous avez fini."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "chile_paste",
        "ing_01",
        "ing_06"
      ],
      "outputState": "crushed_guacamole",
      "instructions": "Coupez les avocats, retirez les fosses et creusez la chair dans la pâte. Ajouter le jus de lime. Écraser à la fourche ou au pestle, plier la pâte verte à travers l'avocat, mais arrêter pendant que le mélange est encore copieux — les morceaux visibles de l'avocat sont tout le point. La citron vert devrait entrer maintenant afin que son acide enveloppe la chair coupée et ralentit le brunissement.",
      "visualCue": {
        "primaryTarget": "Avocat vert pâle, partiellement broyé et partiellement en morceaux mous, rayé de la pâte de chile vert foncé. Il semble rustique et rugueux, non fouetté, et la surface est humide avec du citron vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grand avocat non cassé moitiés glisser autour du bol, sec et non assaisonné, avec la pâte mise en commun en dessous.",
            "action": "Couper à travers l'avocat avec le bord de la fourchette encore quelques fois et plier ainsi chaque pièce rencontre la pâte et le citron vert."
          },
          {
            "state": "Perfect",
            "description": "Un mash chunky où environ la moitié est crémeuse et la moitié est des morceaux distincts. Chaque cuillère tient ensemble, mais vous pouvez encore voir et mordre des morceaux individuels.",
            "action": "Incorporer le reste de l'oignon et la coriandre."
          },
          {
            "state": "Overdone",
            "description": "Doux, uniforme et pâteux, plus près d'une propagation qu'un guacamole. L'avocat est devenu collant par surmenage.",
            "action": "Il n'y a pas de défaire, mais plier dans quelques cubes d'avocat frais pour restaurer une certaine texture."
          }
        ]
      },
      "feelCue": "L'avocat doit donner comme du beurre froid sous la fourchette, doux mais cohésif. S'il résiste ou goûte à l'herbe, le fruit n'était pas mûr; s'il est aqueux et gris, il était passé à son premier rang."
    },
    {
      "nodeId": "step_3",
      "action": "Saison et fin",
      "inputs": [
        "crushed_guacamole",
        "ing_02",
        "ing_04"
      ],
      "outputState": "finished_dish",
      "instructions": "Plier dans l'oignon frais réservé et la coriandre pour la croûte et l'ascenseur. Bouche et correct: plus de sel pour faire sauter les saveurs, plus de citron vert si elle a un goût plat ou gras, plus de serrano pour la chaleur. Servir immédiatement. En cas de maintien, appuyez sur l'enveloppe plastique directement sur la surface pour qu'aucun air ne l'atteigne.",
      "visualCue": {
        "primaryTarget": "Un guacamole vif et frais, cloué d'oignon blanc vif et de coriandre verte, brillant du citron vert, sans taches grises. Il fond doucement sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat, gras, et une note — l'avocat domine et rien ne brille.",
            "action": "Ajouter le sel une pincée à la fois et une pression de citron vert, goûter après chaque, jusqu'à ce que les saveurs se mettent au point."
          },
          {
            "state": "Perfect",
            "description": "Équilibré et vif : un avocat riche soulevé par de l'acide, du sel et une chaleur serrano propre qui s'appuie sur la finale. L'oignon et la coriandre s'inscrivent dans chaque bouchée.",
            "action": "Servir immédiatement avec des croustilles ou des tacos."
          },
          {
            "state": "Overdone",
            "description": "Souris et agressifs — trop de citron vert ou de chile a enterré l'avocat, ou il a été assis et est devenu gris et sulfureux.",
            "action": "Mash dans un autre demi-avocat pour se mouiller et rééquilibrer, puis ré-saisonner doucement."
          }
        ]
      },
      "feelCue": "Le premier goût doit être frais et beurreux, puis lumineux, puis une chaleur lente du serrano à l'arrière de la gorge. Il devrait vous faire atteindre pour une seconde puce avant que vous avez avalé la première."
    }
  ]
};
