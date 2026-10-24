export default {
  "repoId": "master_thai_sriracha_001",
  "parentRepoId": null,
  "slug": "sriracha",
  "author": "ForkRecipe Kitchen",
  "title": "Sriracha",
  "description": "Le jalapeños rouge moulu avec de l'ail et laissé fermenter pendant trois jours, puis cuit brièvement avec du vinaigre et du sucre — le résultat est une sauce chaude avec plus de profondeur que n'importe quoi d'une bouteille, parce que le temps a fait le vrai assaisonnement.",
  "cuisine": "Thai-Américain",
  "culture": "Thaï",
  "category": "condiments",
  "tags": [
    "sauce chaude",
    "fermenté",
    "Thaï",
    "Chili",
    "Ail",
    "condiment"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "3 days 25 min",
  "ratioSystem": "parts",
  "stars": 1980,
  "forks": 246,
  "contributors": 62,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-20",
  "updatedAt": "2025-01-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Jalapeños rouges (ou fresno chilis)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "serranos rouges",
        "Chilis rouge Holland"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Girofles à l'ail",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de palme",
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel (non iodé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vinaigre blanc distillé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de riz"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "chili_mash",
      "instructions": "Enlevez les tiges du chilis, mais laissez les graines – elles portent du feu et de la pectine qui épaissit la sauce finale. Mélanger le chilis, l'ail, le sucre et le sel dans un robot culinaire ou un mélangeur. Pulse jusqu'à ce que vous ayez une masse grossière et texturée — pensez à la consistance de la salsa, pas une purée lisse. La mash doit être rouge-orange vif et sentir intensément le chili cru et l'ail aiguisé. Transférer dans un pot en verre propre, laissant 3cm d'espace de tête pour les gaz de fermentation.",
      "visualCue": {
        "primaryTarget": "Un mash grossier rouge-orange brillant qui tient sa texture lorsqu'il est cuillé — pas une pâte lisse, pas de gros morceaux visibles. Graines distribuées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il a encore de gros morceaux de chili et d'ail. Une texture inégale fermentera inégalement et obstruera le mélangeur dans la dernière étape.",
            "action": "Pulse plus agressive en courts éclats jusqu'à ce que la texture soit uniformément chunky."
          },
          {
            "state": "Perfect",
            "description": "Mash texturé de couleur rouge-orange. Les graines sont visibles mais uniformément distribuées. L'arôme est fortement piquant: chili cru, ail et sel.",
            "action": "Transférer dans un pot et commencer la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Surmené dans une purée complètement lisse. Aucune texture restante.",
            "action": "Procéder — la fermentation et la cuisson finale produiront une sriracha plus épaisse que l'idéal mais parfaitement fine."
          }
        ]
      },
      "feelCue": "Portez des gants et évitez de toucher vos yeux: la capsaïcine dans la mèche brûlera la peau exposée. La mash crue doit sentir fortement piquante, presque abreuvante, avec une note à base de plantes vert vif de la chair de chili."
    },
    {
      "nodeId": "step_2",
      "action": "Ferment",
      "inputs": [
        "chili_mash"
      ],
      "outputState": "fermented_mash",
      "instructions": "Couvrez le pot de façon lâche avec une bande de caoutchouc, ce qui permet aux gaz de fermentation de s'échapper tout en gardant les contaminants à l'écart. Conserver à température ambiante (18–24°C) pendant 3–7 jours. Mélanger la mash une fois par jour avec une cuillère propre. Après 24 heures, vous devriez voir de petites bulles se former tout au long du mash. Au troisième jour, le mash sentira nettement plus complexe — moins cru, plus salé, avec un tang acide. La couleur s'approfondit du rouge vif à un pourpre plus foncé et plus saturé.",
      "visualCue": {
        "primaryTarget": "Petites bulles visibles sur toute la surface de la masse lorsqu'elles sont agitées. La couleur est plus profonde que l'orange rouge d'origine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de bulles après 48 heures. Mash sent la même chose que le premier jour — cru et aiguisé sans note acide.",
            "action": "Déplacez le pot dans un endroit plus chaud (22–26°C). S'il n'y a pas d'activité après 72 heures, le pourcentage de sel est trop élevé ou le chilis transporte un pesticide résiduel — recommencez avec le chilis organique."
          },
          {
            "state": "Perfect",
            "description": "Des fines bulles stables, surtout lorsqu'elles sont agitées. Mash a un arôme tangent et complexe avec l'ail approfondi et le bord cru du chili lissé. Le jour 3 est typique pour un ferment animé.",
            "action": "Passer à la cuisson au vinaigre."
          },
          {
            "state": "Overdone",
            "description": "Fermenté le jour dernier 7 dans des conditions chaudes — la mash sent très acide, presque alcoolique, et la couleur est devenue brun foncé-rouge.",
            "action": "Procéder à la cuisson — la fermentation supplémentaire augmente l'acidité et la complexité. Réduire de moitié le vinaigre ajouté pour compenser."
          }
        ]
      },
      "feelCue": "Penchez - vous près du pot et remuez - vous: une mash bien fermentée dégage une vague de chaleur savoureuse et légèrement acidulée qui est nettement différente de la netteté brute du premier jour. Vos yeux peuvent arroser, mais cette fois de l'acidité, pas de la capsaïcine crue."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "fermented_mash",
        "ing_05"
      ],
      "outputState": "cooked_sriracha",
      "instructions": "Transférer la mousse fermentée et le vinaigre dans une casserole. Porter à ébullition à feu moyen, puis laisser mijoter régulièrement pendant 5 à 7 minutes, en remuant fréquemment. La mash s'épaissit et s'obscurcit légèrement en cuisinant. Le vinaigre conserve la sauce et illumine la note acide que la fermentation adoucit. Ne pas sur-réduire — vous voulez une sauce chaude versable, pas une pâte.",
      "visualCue": {
        "primaryTarget": "Une sauce orangée rouge foncé et bouillonnante qui s'est légèrement épaissie et qui sent cuit plutôt que cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et la mash n'est pas complètement intégrée au vinaigre. Goûte séparément de mash et de vinaigre.",
            "action": "Laisser mijoter encore 2 à 3 minutes, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "Une sauce unie, profondément rouge qui enveloppe l'arrière d'une cuillère. L'aroma est du chili cuit, de l'ail et du vinaigre — la signature sriracha. La vapeur visible et le bouillonnement doux.",
            "action": "Mélanger jusqu'à douceur, puis soucher et bouteille."
          },
          {
            "state": "Overdone",
            "description": "La sauce a trop diminué — elle est épaisse et collante, s'éloignant des côtés de la poêle.",
            "action": "Ajouter une cuillère à soupe à la fois jusqu'à ce que la consistance se détache dans une sauce versable."
          }
        ]
      },
      "feelCue": "La sauce mijotante devrait remplir la cuisine d'une vapeur sucrée et épicée qui fait fourrer l'arrière de votre gorge — mettre sur l'éventail ventilateur de capot."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "cooked_sriracha"
      ],
      "outputState": "finished_sriracha",
      "instructions": "Laisser refroidir la sauce cuite pendant 10 minutes. Transférer dans un mélangeur et mélanger en haut pendant 1 à 2 minutes jusqu'à ce qu'il soit complètement lisse. Passez à travers une passoire fine, appuyez fermement avec une cuillère pour extraire chaque goutte de sauce. Jeter les solides secs (principalement les graines et la peau). La sauce tendue sera brillante, lisse et profondément rouge. Bouteille dans des bouteilles stérilisées ou des pots en verre. Réfrigérer — il restera six mois.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge lustrée, lisse et profonde avec une consistance juste assez fine pour presser d'une bouteille mais assez épaisse pour tenir une piste sur une assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a encore des graines visibles et des fragments de peau après déformation. La texture est rude.",
            "action": "Retendez-vous, appuyez plus fermement. Si les graines passent encore, utilisez une souche plus fine ou une nappe de fromage."
          },
          {
            "state": "Perfect",
            "description": "Silky lisse, rouge foncé brillant. Pas de particules. Arrosé sur une plaque blanche, il tient une piste propre et ne court pas immédiatement.",
            "action": "Bouteille et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Il reste très peu de sauces, les solides étaient trop secs pour produire plus.",
            "action": "Ajoutez 1 à 2 cuillères à soupe d'eau aux solides et pressez à nouveau; vous récupérerez plus de sauce."
          }
        ]
      },
      "feelCue": "La sauce finie doit sentir de façon indiscutable comme la sriracha — l'ail, le vinaigre, l'arôme de chili rôti — mais plus riche, plus complexe et moins synthétique qu'une bouteille commerciale."
    }
  ]
};
