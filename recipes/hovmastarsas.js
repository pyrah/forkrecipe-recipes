export default {
  "repoId": "master_scandinavian_hovmastarsas_001",
  "parentRepoId": null,
  "slug": "hovmastarsas",
  "author": "ForkRecipe Kitchen",
  "title": "Les",
  "description": "La sauce à la moutarde classique de Suède, nommée d'après le maître d'hôtel qui l'aurait inventée, est le compagnon essentiel du gravillave : doux, aiguisé, herbacé et assez riche pour enrober un couteau sans glisser. Trois minutes de sifflement et vous avez la sauce qui transforme le saumon guéri d'une curiosité en un plat complet.",
  "cuisine": "Scandinave",
  "culture": "Suédois",
  "category": "condiments",
  "tags": [
    "sauce",
    "moutarde",
    "d'aneth",
    "suédois",
    "lavlax",
    "condiment",
    "pas de cuisson"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 2,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Moutarde suédoise ou dijon (moyennement chaude)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie",
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de cidre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou graines de raisin)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Diluant frais, haché finement (fronds seulement)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "l'aneth séché (2 c. à thé, moins vif)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
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
        "ing_06",
        "ing_07"
      ],
      "outputState": "mustard_base",
      "instructions": "Mélanger la moutarde, le sucre, le vinaigre, le sel et le poivre blanc dans un bol moyen. fouetter vigoureusement jusqu'à ce que le sucre soit complètement dissous et que le mélange soit lisse et uniforme. La moutarde agit à la fois comme base de saveur et comme émulsifiant pour l'huile qui suit — ses lécithines naturelles tiendront la sauce ensemble. Goûtez cette base avant d'ajouter de l'huile : elle doit être tendrement nette et sucrée en mesure égale, avec un bord de vinaigre propre. C'est le bon point de départ ; l'huile va s'assouplir et le arrondir. Si l'équilibre semble incorrect, ajustez maintenant — ajoutez plus de sucre si trop vif, plus de vinaigre si trop plat. La tradition suédoise demande une sauce plus sucrée que celle de style français, s'appuyant sur l'équilibre que l'on retrouve dans une moutarde au miel plutôt qu'une vinaigrette de Dijon.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, jaune-tan, complètement homogène. Les cristaux de sucre se sont dissouts — pas de texture sèche lorsqu'ils sont frottés entre les doigts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des cristaux de sucre gritty encore visibles. Le vinaigre et la moutarde ne sont pas entièrement combinés — ils ont l'air striés.",
            "action": "Faites siffler encore 60 secondes. Le sucre doit se dissoudre complètement ou la sauce sera granuleuse."
          },
          {
            "state": "Perfect",
            "description": "Gloire, lisse, jaune or pâle. Enrobe le fouet uniformément. Goûte puissant-douce dans une tension parfaite.",
            "action": "Arrosez l'huile en fouettant."
          },
          {
            "state": "Overdone",
            "description": "Vous avez fouetté si vigoureusement que le mélange a moulu. Encore très bien — la mousse va s'installer.",
            "action": "Laisser reposer 1 minute pour que la mousse s'abaisse, puis procéder à l'huile."
          }
        ]
      },
      "feelCue": "Frottez une goutte de la base entre le pouce et l'index — il devrait se sentir parfaitement lisse, sans grain de sable du sucre non dissous. Si vous sentez une texture, continuez à fouetter."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsifier",
      "inputs": [
        "mustard_base",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_hovmastarsas",
      "instructions": "Avec une main fouettant constamment dans des cercles serrés, arrosez l'huile neutre dans la base de la moutarde dans un cours d'eau très mince et stable — commencez par des gouttes, puis augmentez jusqu'à un filet mince lorsque l'émulsion se forme et se renforce. La sauce s'épaissira progressivement au fur et à mesure que l'huile sera incorporée, passant d'une pâte fine et pointue à une consistance crémeuse et mayonnaise. Le pouvoir émulsifiant de la moutarde est important, donc cette sauce est plus indulgente qu'une vraie vinaigrette, mais ajouter de l'huile trop vite la brisera encore. Une fois toute l'huile incorporée et la sauce est brillante et épaisse, plier dans l'aneth fraîchement hachée. L'aneth doit entrer à la toute fin — il saignera sa chlorophylle et sa couleur dans la sauce si elle est brassée trop tôt, en la transformant en gris vert inappétissant. La sauce finie doit être jaune or pâle avec des flocons d'aneth vert vif. Réfrigérer pendant au moins 15 minutes avant de servir pour laisser les saveurs se marier et le parfum d'aneth pour fleurir pleinement.",
      "visualCue": {
        "primaryTarget": "Une sauce glosseuse en or pâle, flanquée d'aneth vert vif, assez épaisse pour broder légèrement sur une cuillère et tenir sa forme un moment avant de s'affaiblir lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse — l'huile a été ajoutée trop vite et n'a pas été émulsifiée. On dirait de la moutarde grasse et séparée.",
            "action": "Commencer une base fraîche de 1 c. à thé de moutarde dans un bol propre, puis fouetter lentement la sauce cassée dedans, goutte à goutte, pour sauver l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "Crémeux, brillant, tient sur une cuillère avec une douce nichons. L'aneth est vert vif partout. Des odeurs d'aneth, de moutarde et de vinaigre en harmonie.",
            "action": "Refroidir pendant 15 minutes. Servir aux côtés du gravillave ou du poisson fumé."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue extrêmement épaisse et lourde, presque compatible avec la mayonnaise. Le volume de pétrole a peut-être été trop élevé.",
            "action": "fouetter dans 1 c. à thé d'eau froide pour se détendre. Toujours parfaitement utilisable — peut-être plus épaisse que traditionnelle, mais richement bonne."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt propre dans la sauce dans le bol — il devrait laisser un sentier propre qui tient ses bords, comme une vinaigrette bien faite sur le chemin vers quelque chose de plus riche. L'odeur qui monte du bol doit être toute l'aneth et la moutarde — propre, verte et nette."
    }
  ]
};
