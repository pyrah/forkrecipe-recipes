export default {
  "repoId": "master_levantine_quinoa_tabbouleh_001",
  "parentRepoId": null,
  "slug": "quinoa-tabbouleh",
  "author": "ForkRecipe Kitchen",
  "title": "Quinoa Tabbouleh",
  "description": "Un riff sans gluten sur la salade d'herbe de Levantine — quinoa cuit debout pour le bulgur, mais l'esprit maintenu lumineusement intact: principalement du persil à feuilles plates et de la menthe fraîche, ponctué de tomates douces et de concombre frais, le tout généreusement vêtu de citron vif et d'huile d'olive herbacée.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "grains",
  "tags": [
    "Moyen-Orient",
    "lévantine",
    "salade",
    "quinoa",
    "Sans gluten",
    "végétalien",
    "sans produits laitiers"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 4,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Quinoa blanc",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "quinoa tricolore",
        "bourdons fins pour l'original"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "persil bouclé à l'étirement, mais feuille plate est correcte"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Feuilles de menthe fraîches, hachées finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "menthe poivrée préférée à la menthe poivrée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Tomates de ripe, ensemencées et en dés",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomates cerises, en quartiers"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Concombre persan ou anglais, finement coupé en dés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Concombre libanais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons (oignons de printemps), tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "une petite quantité d'oignon blanc très finement haché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc en urgence"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Hydration",
      "name": "Eau froide (pour la cuisson du quinoa)",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rincer et cuire",
      "inputs": [
        "ing_01",
        "ing_11"
      ],
      "outputState": "cooked_quinoa",
      "instructions": "Rincer le quinoa sous l'eau froide courante pendant 60 secondes dans un tamis à mailles fines, frotter les grains entre vos palmiers. Cela élimine le revêtement amer de la saponine. Mélanger avec l'eau dans une petite casserole et porter à ébullition à feu moyen. Réduire jusqu'à ce que l'eau mijote le moins, couvrir et cuire de 12 à 14 minutes jusqu'à ce que toute l'eau soit absorbée. Retirer du feu et laisser la vapeur couverte pendant 5 minutes. Conseillez ensuite sur un grand plateau ou une plaque de cuisson et étalez-vous dans une fine couche pour refroidir complètement à la température ambiante - ajouter le quinoa chaud à la salade va flétrir les herbes et cuire les légumes.",
      "visualCue": {
        "primaryTarget": "Chaque grain de quinoa devrait avoir sa petite queue — le germe — en spirale et visible, comme une petite boucle blanche autour de la graine. Le grain est entièrement cuit lorsque la queue est défournée et le grain est translucide plutôt que opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont opaques et crayeux au centre et la queue n'a pas complètement spirale. La texture est croquante et désagréable.",
            "action": "Ajouter 2 cuillères à soupe d'eau, recouvrir et cuire encore 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est translucide avec sa queue blanche enroulée soigneusement autour. Le quinoa est moelleux et léger avec une douceur de noix. Aucune eau ne reste dans la casserole.",
            "action": "Étaler sur un plateau et laisser refroidir complètement — au moins 15 minutes — avant d'être assemblé."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont éclaté et se sont musqués, le germe est indistinguable. La texture est humide et de type porridge.",
            "action": "Répartir très fin sur un plateau et réfrigérer — le refroidissement permet parfois de faire monter le quinoa légèrement trop cuit pour l'utiliser."
          }
        ]
      },
      "feelCue": "Le quinoa refroidi doit se sentir léger et sec au toucher, les grains individuels se séparent lorsque vous les traversez. Tout accrochage signifie qu'il est entré dans le bol encore chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Préparation d'herbes et de légumes",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "chopped_salad_components",
      "instructions": "Le couteau fait ou casse le tabou. Enlevez les feuilles de persil de leurs tiges (sauvegarder les tiges pour le bouillon) et hachez très finement — presque jusqu'à un quasi-collé en texture, pas une côte rugueuse. La menthe doit être traitée de la même façon. Couper les tomates ensemencées et le concombre en dés uniformément fins, d'environ 5 mm. Couper finement les pétoncles, y compris la plupart des dessus verts. Tabbouleh est une salade de persil avec d'autres ingrédients; si le quinoa est dominant, vous avez fait un bol de grain. Le persil doit être la majorité visuelle et volumétrique.",
      "visualCue": {
        "primaryTarget": "Un tas de persil vert émeraude vif et de menthe, finement et uniformément hachés sans longues tiges, aux côtés de dés de tomates rubis soignés et de cubes de concombre pâle, tous de petite taille semblables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil est approximativement déchiré ou grossièrement haché en morceaux irréguliers. La tomate a été laissée dans de grands coins.",
            "action": "Retourner et hacher plus fin — la texture du tabouleh dépend de la finesse, même les coupes à travers."
          },
          {
            "state": "Perfect",
            "description": "Les herbes ressemblent presque à du sable vert vif — très fin, s'accrochant légèrement à leur propre humidité. La tomate et le concombre sont rangés, assortis de dés.",
            "action": "Mélanger tous les légumes préparés avec le quinoa refroidi."
          },
          {
            "state": "Overdone",
            "description": "Vous avez excédé le persil dans une pâte humide et vert foncé qui libère du liquide et commence à s'oxyder.",
            "action": "Utilisez-le comme-est mais habillez-vous et servez immédiatement — il ne tiendra pas."
          }
        ]
      },
      "feelCue": "Pincez une petite quantité de persil haché — il devrait se sentir légèrement humide de sa propre humidité et s'accrocher de façon lâche sans relâcher les réserves de liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Robe et repos",
      "inputs": [
        "cooked_quinoa",
        "chopped_salad_components",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_quinoa_tabbouleh",
      "instructions": "Dans un grand bol, mélanger le quinoa refroidi avec les herbes hachées, les tomates, le concombre et les oignons. Arroser le jus de citron et l'huile d'olive, assaisonner de sel et de poivre, et mélanger doucement mais soigneusement. Goûtez et ajustez - le tabouleh authentique est fortement citronné et bien salé; il devrait faire vos yeux arroser légèrement avec la luminosité du citron. Laisser reposer à température ambiante 10-15 minutes avant de servir — ce bref repos permet au quinoa d'absorber la vinaigrette et les saveurs de se marier.",
      "visualCue": {
        "primaryTarget": "Une salade verte éclatante avec de la tomate rouge et du quinoa blanc, scintillant avec de l'huile d'olive. Le persil doit rester émeraude, non jaunâtre ni flétri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salade a l'air sèche et la vinaigrette est assise dans une piscine au fond plutôt que d'enrober les ingrédients.",
            "action": "Dégustez plus soigneusement, puis goûtez - il a probablement besoin de plus de sel et de citron pour soulever la saveur."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce brille. Les herbes sont vert vif. Le citron et l'huile d'olive sont absorbés dans le quinoa et la première bouchée est brillante, herbie et pointue avec du citron.",
            "action": "Servir à température ambiante, avec du pain plat chaud à côté."
          },
          {
            "state": "Overdone",
            "description": "La salade était habillée trop loin à l'avance; les herbes se sont flétries et sont devenues sombres et les tomates ont libéré tellement d'eau qu'elles sont devenues soupeuses.",
            "action": "Égoutter l'excès de liquide du fond de la cuvette et servir rapidement."
          }
        ]
      },
      "feelCue": "Un bon tabouleh devrait se sentir léger et frais — rafraîchissant plutôt que de se remplir. Le quinoa donne une bouchée très subtile mais ne devrait jamais se sentir grainé ou féculent contre les herbes luxuriantes."
    }
  ]
};
