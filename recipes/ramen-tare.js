export default {
  "repoId": "master_japanese_ramen_tare_001",
  "parentRepoId": null,
  "slug": "ramen-tare",
  "author": "ForkRecipe Kitchen",
  "title": "Shoyu Tare — Concentré d'assaisonnement Ramen à base de soja",
  "description": "Un concentré foncé et brillant de sauce de soja, de mirine, de saké et d'aromates qui est réduit à une intensité sirupeuse et tremblante — juste une cuillère à soupe de celui-ci transforme un bol de bouillon uni en ramen à la profondeur de marée. La cuisine sent le fond d'un baril de ferment après une tempête de mer.",
  "cuisine": "Japonais",
  "culture": "Culture Ramen-ya, Tokyo d'après-guerre",
  "category": "condiments",
  "tags": [
    "Japonais",
    "Ramen",
    "tare",
    "soja",
    "condiment",
    "umami",
    "concentré"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 5,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce de soja tamarie (ou shoyu de haute qualité)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja foncé mélangée 50:50 avec du soja clair"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, pas assaisonnement au mirin)",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Gâteau (sèche, qualité de boisson)",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "vin sec Shaoxing"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Kombu, nettoyé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Champignons shiitake séchés",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "porcin séché (2:1 substitut)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Inosinate",
      "name": "Katsuobushi (flacons debonito)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "iriko (sardine séchée) pour une tare plus forte"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Oignon vert, tops verts seulement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Gingembre tranché (non pelé)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "cold_infused_tare",
      "instructions": "Mélanger les champignons tamari, mirin, saké, kombu et shiitake séchés dans un bocal en verre ou en céramique. Ne chauffez pas encore. Couvrir et laisser à température ambiante pendant au moins 4 heures, idéalement une nuit au réfrigérateur. L'infusion à froid attire les glutamates (du kombu) et les composés de l'umami lentin (du shiitake) dans la base du soja sans aucune amertume induite par la chaleur. Le liquide s'assombrira sensiblement et le kombu gonflera dans une feuille brillante et glissante. Le shiitake absorbera le liquide et ramollira. La couleur devrait passer de brun foncé à presque noir avec une teinte rougeâtre lorsqu'elle est maintenue à la lumière. Cette extraction à froid est la différence entre une tare au sel plat et une tare à profondeur océanique.",
      "visualCue": {
        "primaryTarget": "Le liquide s'est approfondi à presque noir avec un bord acajou lorsqu'il est rétroéclairé. Kombu a augmenté pour doubler sa taille sèche, la surface tournant légèrement gélatineux. Le shiitake est complètement réhydraté et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore mince et brillant brun soja. Kombu est à peine gonflé. Moins de 2 heures de perfusion.",
            "action": "Couvrir et retourner au réfrigérateur pendant au moins 2 heures supplémentaires. La patience ici n'est pas facultative."
          },
          {
            "state": "Perfect",
            "description": "Liquide presque noir aux bords brun rougeâtre. Kombu est pluvieux et gélatineux. Le chiitake est complètement ramolli. Aroma est complexe: soja, mer, terre.",
            "action": "Aller à la cuisine."
          },
          {
            "state": "Overdone",
            "description": "Kombu est devenu visqueux et désintégré après plus de 24 heures à température ambiante. Liquid a développé un bord légèrement aigre.",
            "action": "Enlever immédiatement kombu. La tare est encore utilisable — l'aurore se concentrera sur la réduction. Ajouter 1 c. à thé de sucre pour compenser."
          }
        ]
      },
      "feelCue": "Le liquide infusé doit avoir un poids légèrement sirupeux lorsque vous tourbillonnez le contenant — nettement plus épais que la sauce de soja droite. Le kombu, lorsqu'il est levé, devrait se sentir comme du cuir froid et souple."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "cold_infused_tare",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "simmered_tare",
      "instructions": "Verser le mélange entier dans une petite casserole. Ajouter le katsuobushi, le dessus d'oignon vert et le gingembre tranché. Portez à un doux mijoter à feu moyen-doux — vous voulez une bulle calme, paresseuse, pas un ébullition. Maintenez cette mijoter pendant 20 minutes. Un ébullition dur permettra de chasser les délicats composés arôme volatils qui ont pris des heures à construire pendant la perfusion froide. Pendant le mijotage, le katsuobushi ajoutera de l'inosinate (IMP), qui se synerge avec le glutamate du kombu pour produire un effet umami combiné beaucoup plus grand que l'un ou l'autre seul. L'oignon vert et le gingembre ajoutent un contrepoint aromatique propre à la profondeur fermentée du soja. Vous verrez la surface devenir mousseux avec une mousse gris-brun clair — ne la skim agressivement. La mousse légère n'est pas de l'amertume ici; elle est une protéine du katsuobushi et contribue au corps.",
      "visualCue": {
        "primaryTarget": "Une mijote lente et silencieuse avec une couronne en mousse légère. Le liquide s'est approfondi davantage en couleur et réduit d'environ 15 à 20 %. Les aromatiques sont submergés et pâles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est toujours au même volume que lorsque vous avez commencé. Le katsuobushi commence à peine à s'hydrater. Trop peu de temps.",
            "action": "Continuez à mijoter. Les 20 minutes complètes sont nécessaires pour l'extraction de l'IMP du katsuobushi."
          },
          {
            "state": "Perfect",
            "description": "Réduit légèrement avec une bulle lente. Arôme intense et complexe de poisson fumé, de soja et de mirin de caramel. Le liquide enveloppe légèrement une cuillère.",
            "action": "Retirer du feu et laisser tremper la chaleur pendant 10 minutes avant la déformation."
          },
          {
            "state": "Overdone",
            "description": "Réduction de plus de 30%. Le liquide est sirupeux et très sombre. Ça sent l'acri et le sucre brûlé.",
            "action": "Ajouter 50 ml d'eau et 50 ml de sauce de soja frais. Ne continuez pas à réduire — bouteille et utiliser comme tel."
          }
        ]
      },
      "feelCue": "Pendant la mijotez, penchez-vous sur le pot et inhalez. La vapeur devrait vous frapper avec une vague dense, presque écrasante d'umami — fermenté, fumé, doux. Si vous reculez instinctivement, la tare fonctionne."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "simmered_tare"
      ],
      "outputState": "finished_tare",
      "instructions": "Retirer la casserole du feu et laisser tremper le mélange pendant 10 minutes. Le katsuobushi continuera à libérer la saveur dans le liquide de refroidissement. Après le repos, passer le contenu entier à travers un tamis à mailles fines doublé d'une seule couche de cheesewapp, presser doucement sur les solides avec le dos d'une cuillère pour extraire tout le liquide sans forcer les particules amères à travers. Ne pressez pas le cheesewet — la gravité est votre ami ici. La tare tendue doit être un sirop concentré, presque noir, avec une teinte rouge foncé lorsqu'elle est maintenue à la lumière. Verser dans un pot en verre propre et refroidir complètement avant de sceller. A conserver au réfrigérateur, la tare conserve 3 mois et s'intensifie dans le temps. Utiliser 15 à 20 ml par bol de 350 ml de bouillon ramen, en fonction du goût. La tare devrait faire le levage lourd — votre bouillon fournit le corps.",
      "visualCue": {
        "primaryTarget": "Un concentré glacé, presque noir, qui se déplace comme un sirop léger lorsqu'il est versé — pas comme de l'eau, pas comme de la mélasse. Lorsqu'une goutte frappe une plaque blanche, elle se propage dans un halo rouge-brun translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide fonctionne librement et a une saveur plate, purement salée sans profondeur. Réduction insuffisante.",
            "action": "Retourner à une mijoter douce pendant 5 minutes de plus, puis reformer."
          },
          {
            "state": "Perfect",
            "description": "Un peu sirupeux, brillant, presque noir. L'arôme est intensément salé, doux, fumé et océanique. Une petite cuillère a un goût trop fort pour manger seule, c'est exact.",
            "action": "Cool et bouteille. Étiquette avec date."
          },
          {
            "state": "Overdone",
            "description": "Épaisseur, collant et très sombre. Goûte principalement de sucre sucré brûlé plutôt que d'umami salé.",
            "action": "Arroser de sauce de soja frais à un rapport de 1:1. Ne pas réduire davantage."
          }
        ]
      },
      "feelCue": "Une tare finie enveloppe l'intérieur d'un pot en verre sec d'un film translucide qui s'accroche plutôt que de s'enfuir immédiatement. Lorsque vous ouvrez le pot le lendemain, l'arôme doit s'étendre dans la pièce, profonde, complexe, légèrement sucrée, avec une note lointaine de la mer."
    }
  ]
};
