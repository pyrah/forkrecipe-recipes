export default {
  "repoId": "master_french_vinaigrette_001",
  "parentRepoId": null,
  "slug": "vinaigrette",
  "author": "ForkRecipe Kitchen",
  "title": "Vinaigrette classique",
  "description": "La vinaigrette française quotidienne réduite à sa physique — vinaigre de vin vif et un frottis de Dijon maintenu en suspension tandis que l'huile d'olive pleut, jusqu'à ce que ce qui était mince et fendue se transforme en une émulsion nuageuse et collante qui enrobe une feuille sans se mettre au fond du bol.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "condiments",
  "tags": [
    "vinaigrette",
    "français",
    "vinaigrette",
    "émulsion",
    "salade",
    "moutarde",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sherry",
        "vinaigre de vin blanc",
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Moutarde de Dijon",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers pour une vinaigrette plus grossière"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalote, très finement hachée",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "petite gousse d'ail, râpée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": [
        "huile moitié neutre pour une vinaigrette plus douce et moins amère"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Miel (facultatif, pour équilibrer)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée de sucre",
        "sirop d'érable"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Macérer",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04"
      ],
      "outputState": "seasoned_vinegar",
      "instructions": "Mincez l'échalote aussi fin que possible, puis remuez-la dans le vinaigre avec le sel. Laisser reposer pendant 10 minutes (ou jusqu'à une heure). L'acide adoucit la morsure brute de l'échalote, en tire la douceur et dissout complètement le sel, de sorte qu'il n'y a plus de craquage à travers la vinaigrette finie. Le sel ne se dissout surtout que dans le vinaigre à base d'eau — jamais dans l'huile — alors il doit entrer dès maintenant, avant que la graisse ne pénètre dans le bol.",
      "visualCue": {
        "primaryTarget": "Un petit bol de vinaigre blush-pink nuageux avec les morceaux d'échalote adoucis et translucides, pas plus blanc vif. Pas de cristaux de sel non dissous visibles en bas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'échalote est encore blanc clair, opaque et croquant; le vinaigre est clair et le sel est encore granuleux au fond.",
            "action": "Donne-lui plus de temps. Mélanger une ou deux fois et attendre — cinq minutes de plus refroidit l'échalote et finit de dissoudre le sel."
          },
          {
            "state": "Perfect",
            "description": "L'échalote est devenu doux, pâle et légèrement rose du vinaigre; le liquide sent brillant mais n'est plus cru; le sel est complètement dissous.",
            "action": "Frottez la moutarde et tout miel, puis commencez à couler l'huile."
          },
          {
            "state": "Overdone",
            "description": "L'échalote a macéré pendant des heures et est devenu boiteux et terne, le vinaigre goûtant plat et trop oignon.",
            "action": "Encore utilisable: épuisez un peu d'échalote s'il domine, et illuminez avec quelques gouttes de vinaigre frais."
          }
        ]
      },
      "feelCue": "Goûtez une goutte sur le dos de votre main — il doit lire vif et propre, assez salé pour vous faire un peu de treuil, car l'huile à venir s'achèvera environ un tiers de cette intensité."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "seasoned_vinegar",
        "ing_02",
        "ing_07"
      ],
      "outputState": "mustard_base",
      "instructions": "fouetter le Dijon (et le miel, s'il l'utilise) dans le vinaigre assaisonné jusqu'à ce qu'il soit uniforme et moussant. La moutarde fait du vrai travail ici, pas seulement de l'arôme: son mucilage et la lécithine agissent comme l'émulsionner qui gardera l'huile suspendue. Une vinaigrette construite sur la moutarde tient ensemble pendant des heures au lieu de se diviser en secondes.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, pâle-tan, légèrement épaissi, avec une surface uniforme mate et sans stries de moutarde non mélangée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des rubans visibles de moutarde jaune traversent encore le vinaigre, et le mélange semble à deux tons.",
            "action": "Continuez à fouetter — quelques secondes de plus la tire dans une base uniforme et opaque."
          },
          {
            "state": "Perfect",
            "description": "Une base homogène et légère avec un corps léger et une faible mousse de fouettage. Goûts vifs, moutarde et équilibrés.",
            "action": "Commencez à ajouter l'huile, goutte à goutte au début."
          },
          {
            "state": "Overdone",
            "description": "Il s'est dégonflé jusqu'à une mousse mince, bien qu'il n'y ait aucun mal réel.",
            "action": "Laissez-le régler un moment et procéder — l'huile lui donnera corps de toute façon."
          }
        ]
      },
      "feelCue": "La base doit se sentir légèrement visqueuse sur le fouet, s'accrocher plutôt que de s'enliser — ce petit morceau de traînée est la puissance émulsifiante de la moutarde sur laquelle vous êtes sur le point de vous appuyer."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "mustard_base",
        "ing_06"
      ],
      "outputState": "emulsion",
      "instructions": "En fouettant constamment et dur, ajouter l'huile d'olive dans le fil le plus fin possible pour commencer — presque goutte à goutte. Chaque addition doit être entièrement absorbée et le mélange épaissit avant d'ajouter plus. Une fois qu'il devient visiblement crémeux et pâle, vous pouvez verser l'huile dans un ruisseau lent et stable. La moutarde et l'échalote brisent l'huile en gouttelettes microscopiques et les piègent dans le vinaigre; précipitent-le et les gouttelettes se fusionnent, et l'ensemble revient à l'huile flottant sur le vinaigre.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette opaque, crémeuse et dorée qui s'épaissit visiblement sur le fouet et laisse une couche collante sur le dos d'une cuillère, sans couche d'huile séparée assise sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les perles d'huile flottent à la surface ou le mélange semble mince et translucide plutôt que crémeux.",
            "action": "Arrête d'ajouter de l'huile. fouetter vigoureusement jusqu'à ce que ce qui s'y trouve s'épaississe, puis reprendre plus lentement."
          },
          {
            "state": "Perfect",
            "description": "Une émulsion uniformément nuageuse, d'or clair avec le corps, assez épaisse pour rubaner brièvement le fouet avant de fondre.",
            "action": "Arrête ici. Goûtez et ajustez-vous avant qu'il ne se brise."
          },
          {
            "state": "Overdone",
            "description": "Le pansement a soudain l'air caillé ou il est retombé dans l'huile sur une couche aqueuse — il a cassé.",
            "action": "Sauvez-le : fouettez une cuillère à café fraîche de moutarde (ou quelques gouttes d'eau chaude) dans un bol propre et fouettez lentement la vinaigrette cassée."
          }
        ]
      },
      "feelCue": "Écoutez et ressentez - vous - même — en émulsionnant, le fouet rencontre plus de résistance et le sloshing calme un son doux et épais. Cette traînée épaississante est l'émulsion qui se forme sous votre main."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "emulsion",
        "ing_05"
      ],
      "outputState": "finished_vinaigrette",
      "instructions": "Grincer dans le poivre noir et goûter sur une feuille de laitue, pas une cuillère — gras couvre la langue et mutes assaisonnement, de sorte qu'une vinaigrette goûte toujours la calandre sur les verts que hors du fouet. Ajuster : une pincée plus de sel si plat, une éclaboussure de vinaigre si terne, un fil plus d'huile si trop tranchant. Habillez les verts seulement à la dernière seconde et utilisez moins que vous ne le pensez ; une vinaigrette correctement émulsifiée colle, donc un peu de manteaux beaucoup.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette lustrée, crémeuse, bien assaisonnée, poivrée et échalote qui enrobe une feuille dans un mince même éclat sans dégoutter ni pooler au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat ou unidimensionnellement aigre sur une feuille, la netteté non encore arrondie.",
            "action": "Ajouter le sel une pincée à la fois et une touche de miel ou d'huile jusqu'à ce que l'acide lit brillant plutôt que dur."
          },
          {
            "state": "Perfect",
            "description": "Sur une feuille, il a un goût équilibré: acide vif, sel salé, chaleur d'échalote poivrée, et assez de graisse pour tout autour sans se sentir gras.",
            "action": "Habillez la salade légèrement juste avant de servir, jetez jusqu'à ce que chaque feuille brille faiblement."
          },
          {
            "state": "Overdone",
            "description": "Sursaisonnée à agressivement salée ou vinaigreuse, ou tellement d'huile ajoutée qu'elle a un goût plat et lissé.",
            "action": "fouetter un peu plus d'huile pour dompter le sel et l'acide, ou un jet de vinaigre et de sel pour couper l'excès d'huile, jusqu'à ce qu'il rééquilibre."
          }
        ]
      },
      "feelCue": "Plonger une feuille et la soulever — la vinaigrette devrait être accrochée dans un mince film scintillant, et non glisser dans des gouttelettes. C'est comme ça que tu sais que l'émulsion tient et que la salade n'est pas assise dans une flaque."
    }
  ]
};
