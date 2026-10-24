export default {
  "repoId": "master_chinese_sichuan_chili_bean_sauce_001",
  "parentRepoId": null,
  "slug": "sichuan-chili-bean-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sichuan Doubanjiang-Style Sauce aux haricots chili",
  "description": "Des chilis rouges frais et de larges haricots fermentés en sel, puis frits lentement dans une mer d'huile avec de l'ail, du gingembre et du poivre sichuan jusqu'à ce que la couleur s'approfondisse du rouge vif à un cramoisi complexe et brillant — c'est la saveur principale de la cuisson sichuan, l'huile rouge qui transforme tout ce qu'elle touche en quelque chose de plus. Il sent la profondeur fermentée, la chaleur de chili séchée et le funk particulier des haricots vieillis.",
  "cuisine": "Chinois",
  "culture": "Pixian, Sichuan",
  "category": "condiments",
  "tags": [
    "Chinois",
    "Sichuan",
    "fermenté",
    "Chili",
    "Pâte de haricots",
    "condiment",
    "umami",
    "mala"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 5,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Doubanjiang commercial (Pâte de chili de haricots large pixienne)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de haricots large fermentée maison"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Piments rouges du Sichuan séchés, entiers",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Chilies séchées cachemiriennes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Maïs poivré sichuan",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (légume ou colza)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Saindoux pour une saveur plus profonde"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "sauce de soja foncé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Anis d'étoile, entier",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Aboiement de Cassia (ou cannelle), une petite pièce",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_06",
        "ing_02",
        "ing_03",
        "ing_09",
        "ing_10"
      ],
      "outputState": "infused_spice_oil",
      "instructions": "Verser l'huile dans un wok froid ou une casserole lourde. Ajouter les chilis entiers séchés, les grains de poivre Sichuan, l'anis étoilé et la cassie à l'huile froide. Chauffer lentement à feu moyen-doux – le début du froid permet à l'huile d'extraire un maximum de saveur sans brûler les épices. Après 8 à 10 minutes, lorsque de petites bulles se forment autour des chilis et que l'huile est profondément parfumée et teintée de rouge orange, retirer les épices entières avec une cuillère à fente et les jeter. L'huile porte maintenant leur essence.",
      "visualCue": {
        "primaryTarget": "L'huile est profondément teintée d'orange rougeâtre, parfumée d'épices, et les piments enlevés sont obscurcis mais pas noirs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est encore pâle et claire — pas encore colorée par le chili.",
            "action": "Continuez à chauffer à moyen-bas — la perfusion prend patience."
          },
          {
            "state": "Perfect",
            "description": "L'huile est un orange rougeâtre vif, sent enivrant le chili séché et le poivre Sichuan. Les chilies sont une acajou profonde.",
            "action": "Retirer les épices entières et faire frire la pâte."
          },
          {
            "state": "Overdone",
            "description": "Les chilies sont noires et l'huile sent l'acride.",
            "action": "Jeter l'huile et recommencer — l'huile de chili brûlée est irréversible."
          }
        ]
      },
      "feelCue": "La vapeur montante du wok devrait piquer vos yeux et attraper dans votre gorge même à feu doux — cette irritation volatile est l'huile de chili qui fonctionne."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "infused_spice_oil",
        "ing_04",
        "ing_05"
      ],
      "outputState": "aromatic_oil",
      "instructions": "Avec l'huile encore épicée à feu moyen-doux, ajouter l'ail haché et le gingembre. Faire frire lentement, en remuant fréquemment, pendant 3 à 4 minutes jusqu'à ce que l'ail soit tendre et commence juste à devenir doré aux bords. La clé est la friture lente — l'ail qui brunit trop vite aura un goût aigu et dur plutôt que doux et complexe. L'huile sent l'odeur enivrantement parfumée. Ne laissez pas l'ail sombrer.",
      "visualCue": {
        "primaryTarget": "L'ail et le gingembre sont doux, dorés pâles et parfumés, entourés d'une huile profondément aromatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours chaud et blanc, sans changement de couleur.",
            "action": "Continuer à feu moyen-doux — l'ail cru dans un condiment a un goût dur et agressif."
          },
          {
            "state": "Perfect",
            "description": "L'ail est d'or pâle et adouci, sent doux et moelleux, pas tranchant. L'huile est dorée avec une profondeur aromatique.",
            "action": "Ajoutez immédiatement le doubanjiang."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et commence à sentir amer.",
            "action": "La sauce est encore utilisable mais aura un bord légèrement amer. Ajouter immédiatement le doubanjiang pour arrêter le brunissement."
          }
        ]
      },
      "feelCue": "La cuisine doit se sentir chaude et richement parfumée avec une odeur d'ail torréfié et sucrée qui coupe à travers la chaleur du chili — un arôme complexe et en couches rien de tel que l'ail cru."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "aromatic_oil",
        "ing_01",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_chili_bean_sauce",
      "instructions": "Ajouter le doubanjiang à l'huile aromatique et augmenter le feu à moyen. La pâte commencera immédiatement à frire dans l'huile et à saper. Mélanger constamment, presser la pâte contre le wok, pendant 10 à 12 minutes. Cette longue friture lente est l'étape critique : elle élimine l'odeur de ferment brut, développe la couleur du rouge vif au maroon cramoisi profond et concentre la saveur. Ajouter le vin Shaoxing à mi-chemin — il s'étourdira violemment et libérera la vapeur, ce qui est correct. Ajouter le soja noir dans la dernière minute. La sauce est faite lorsque l'huile sépare et les piscines autour de la pâte dans une piscine rouge vif.",
      "visualCue": {
        "primaryTarget": "Pâte rouge cramoisi profonde entourée d'une piscine d'huile rouge-orange brillante qui s'est séparée proprement. La pâte sent complexe, funky, torréfié — pas cru ou métallique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rouge vif, sent cru et métallique, l'huile n'est pas séparée.",
            "action": "Continuez à frire à feu moyen — la transformation exige du temps et de la patience. Ne vous précipitez pas avec une chaleur élevée."
          },
          {
            "state": "Perfect",
            "description": "Pâte de marron profonde, huile vive écarlate-orange et a clairement séparé. L'arôme est complexe, fermenté, épicé — l'odeur d'une cuisine du Sichuan.",
            "action": "Laisser refroidir et conserver dans un pot stérilisé recouvert d'huile rouge. Réfrigérer jusqu'à 3 mois."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'obscurcit vers le noir aux bords et sent brûlé.",
            "action": "Retirer immédiatement de la chaleur et ajouter un jet d'eau. Les bits les plus sombres ajouteront une note amère indésirable."
          }
        ]
      },
      "feelCue": "La pâte finie doit se sentir rugueuse-texturée et dense sur une cuillère — pas lisse comme une pâte commerciale, mais cassée et épaisse avec profondeur, son huile rouge tacheant tout ce qu'elle touche."
    }
  ]
};
