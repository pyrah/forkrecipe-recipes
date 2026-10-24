export default {
  "repoId": "master_korean_gochujang_glaze_001",
  "parentRepoId": null,
  "slug": "gochujang-glaze",
  "author": "ForkRecipe Kitchen",
  "title": "Gochujang Glaze",
  "description": "Un glaçure coréen profondément rouge et collant qui équilibre la chaleur fermentée de gochujang contre le soja, le sésame et le miel en quelque chose simultanément doux, salé, épicé et terreux — un glaçure qui laque et caramélise magnifiquement sur tout ce qu'il touche, des ailes de poulet au chou - fleur rôti.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "sauces",
  "tags": [
    "coréen",
    "Gochujang",
    "glaçure",
    "épicé",
    "fermenté",
    "sauce",
    "umami"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
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
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Gochujang (Pâte de chile fermentée coréenne)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "combinaison doenjang + gochugaru"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "sauce soja (régulière ou faible en sodium)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Miel ou sucre brun",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de riz (mulyeot) pour un brillant plus authentique",
        "agave pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, râpé finement ou haché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "combined_glaze",
      "instructions": "Mélanger tous les ingrédients dans un bol ou une grande tasse de mesure. Frottez vigoureusement pendant 60 à 90 secondes jusqu'à ce qu'il soit complètement uniforme — le gochujang est épais et dense et ne se dissout pas facilement. Travaillez du centre vers l'extérieur, en brisant toutes les poches de pâte que vous allez. L'huile de sésame résistera d'abord à l'incorporation mais émulsifiera dans la sauce pendant que vous fouetterez. La glaçure brute finie doit être lisse, uniforme, et une brique-rouge profonde tout au long sans stries visibles de gochujang ou de pâte non mélangée.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, uniforme, rouge brique profonde — pas de stries de pâte de gochujang sombre, pas d'huile à la surface, pas de poches d'ingrédients non mélangés. La couleur doit être uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries sombres visibles de gochujang traversant une base liquide plus légère. L'huile de sésame flotte dans les gouttelettes à la surface. La sauce a l'air à deux tons.",
            "action": "Continuez à fouetter, en vous concentrant sur la destruction des morceaux de gochujang. Une spatule en silicone souple aide à gratter les côtés du bol."
          },
          {
            "state": "Perfect",
            "description": "Une sauce entièrement uniforme, rouge brique brillante sans stries ni séparation. L'arôme est complexe: fermenté, doux, sésame-noix, et grimpé de gingembre.",
            "action": "Goûtez à l'équilibre. Passez à l'ajustement."
          },
          {
            "state": "Overdone",
            "description": "Vous avez fouetté si vigoureusement que l'huile de sésame s'est cassée et se met en commun sur le dessus.",
            "action": "C'est purement cosmétique — fouetter de nouveau brièvement avant d'utiliser. La sauce réémulsionnera immédiatement."
          }
        ]
      },
      "feelCue": "Plonger un doigt — il devrait envelopper la peau uniformément dans un film mince et légèrement collant. Si elle glisse comme de l'eau, le rapport de gochujang doit être ajusté. Si elle s'accroche comme de la pâte, ajouter une éclaboussure plus d'eau."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "combined_glaze"
      ],
      "outputState": "balanced_glaze",
      "instructions": "Goûtez soigneusement la glaçure et évaluez ses quatre axes clés : la chaleur (du gochujang et de la profondeur fermentée du chile), la douceur (l'argent ou le sucre équilibrant l'agressivité du chile), le sel (sauce de soja transportant la base salée) et l'acide (vinaigre de riz coupant à travers la richesse). La glaçure doit se sentir équilibrée mais pas timide — le gochujang est un ingrédient affirmé et la glaçure doit annoncer sa présence. Ajuster progressivement : plus de gochujang pour la chaleur, plus de miel pour la douceur, plus de soja pour le sel, plus de vinaigre pour la luminosité. Le but est une sauce où chaque note est présente et aucune n'est dure.",
      "visualCue": {
        "primaryTarget": "La glaçure est la même visuellement: les réglages du goût sont intérieurs. Une glaçure bien équilibrée doit avoir un goût arrondi et complexe : la chaleur arrive d'abord, puis la richesse en sel doux, puis le lifting acide à la finale.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glaçure a un goût plat et unidimensionnel, soit trop sucré et bouillant, trop salé et pointu, soit trop ardent sans aucune douceur d'équilibre.",
            "action": "Identifier la note de sortie dominante et la contrer : pour l'excès de chaleur, ajouter le miel. Pour un excès de douceur, ajouter le soja et le vinaigre. Pour l'excès de sel, ajouter de l'eau et une touche plus de miel. Goûtez entre chaque addition."
          },
          {
            "state": "Perfect",
            "description": "Une glaçure complexe et vers l'avant qui délivre la chaleur-douce-sel-sour en succession rapide. Le caractère de gochujang fermenté repose sur tout avec une profondeur savoureuse qui est plus grande que la somme de ses parties.",
            "action": "Utiliser immédiatement comme marinade, glaçure ou sauce à tremper, ou procéder à la cuisson si une glaçure plus épaisse est souhaitée."
          },
          {
            "state": "Overdone",
            "description": "Sursaisonnée au point que la glaçure est agressivement dure dans toutes les directions — trop douce ET trop salée ET trop chaude simultanément, sans place pour toute note à briller.",
            "action": "Finissez avec de l'eau supplémentaire et un peu plus de vinaigre de riz. Ajouter le gochujang seulement si la chaleur a besoin de reconstruire après dilution."
          }
        ]
      },
      "feelCue": "Une glaçure de gochujang équilibrée devrait avoir une sensation physique: l'arrière de la gorge devrait se réchauffer doucement 10 secondes après la dégustation, pas immédiatement brûler. Si la chaleur est instantanée et aiguë, le vinaigre doit se développer."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "balanced_glaze"
      ],
      "outputState": "finished_gochujang_glaze",
      "instructions": "Pour utilisation comme glaçure laquée (par opposition à une marinade ou à une sauce à tremper), verser la glaçure équilibrée dans une petite casserole et laisser mijoter à feu moyen, en remuant constamment. Réduire de 3 à 5 minutes jusqu'à ce qu'il épaississe suffisamment pour envelopper le dos d'une cuillère d'un film uniforme et légèrement collant. Veillez bien — les sucres dans le miel et le gochujang vont faire des bulles agressives et peuvent brûler en quelques secondes s'ils sont laissés sans surveillance à feu vif. Utilisez la glaçure réduite brossée sur les protéines ou les légumes dans les dernières minutes de cuisson, en appliquant en deux couches avec une minute entre chaque couche pour la laque la plus profonde.",
      "visualCue": {
        "primaryTarget": "Après la réduction, la glaçure est un peu plus épaisse et brillante que la version brute — elle enveloppe l'arrière d'une cuillère dans un film rouge profond qui se met légèrement collant au moment où elle refroidit. Il ne devrait pas être si épais qu'il tire dans des fils à cordes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux, il s'écoule d'une cuillère sans laisser de film uniforme. Sur la nourriture, il sera pool plutôt que laque.",
            "action": "Continuer à réduire à feu moyen, en remuant constamment. Une minute ou deux de plus fera une différence significative dans le corps de la glaçure réduite."
          },
          {
            "state": "Perfect",
            "description": "Gloire, légèrement épaissie et collante lorsqu'une goutte refroidie est pressée entre le pouce et l'index. Appliqué à la nourriture, il crée une laque rouge brillant que les chars magnifiquement aux bords à feu vif.",
            "action": "Appliquer immédiatement sur les aliments pendant qu'ils sont chauds et souples, ou les conserver à température ambiante jusqu'à 2 heures avant utilisation."
          },
          {
            "state": "Overdone",
            "description": "La glaçure s'est réduite à une pâte épaisse et gommante qui s'enchaîne lorsqu'elle est tirée et qui a développé des bords brun foncé dans la poêle.",
            "action": "Retirer immédiatement de la chaleur et fouetter dans une cuillère à soupe d'eau à mince. Appliquer sur la nourriture rapidement — il sera mis à friandises-hard si laissé à refroidir dans cet état."
          }
        ]
      },
      "feelCue": "Arrosez une petite quantité sur une plaque froide et laissez refroidir 30 secondes. Appuyez sur la goutte refroidie avec un bout de doigt — elle devrait se sentir légèrement collante et printanière, comme la surface d'un autocollant. Si elle coule librement comme du sirop, réduire davantage. Si elle est dure et en verre, elle est allée trop loin."
    }
  ]
};
