export default {
  "repoId": "master_japanese_katsu_sauce_001",
  "parentRepoId": null,
  "slug": "katsu-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce de Katsu",
  "description": "L'interprétation japonaise du Worcestershire — une sauce épaisse, douce et profondément umami, construite sur la purée de fruits et les condiments fermentés, conçue spécifiquement pour couper à travers la richesse du panko frit.",
  "cuisine": "Japonais",
  "culture": "Yōshoku japonais",
  "category": "condiments",
  "tags": [
    "katsu",
    "tonkatsu",
    "Japonais",
    "yoshiku",
    "fruité",
    "doux",
    "trempage-sauce"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 1356,
  "forks": 143,
  "contributors": 47,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-20",
  "updatedAt": "2025-01-05",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce Worcestershire",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Ketchup (meilleure qualité)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "sauce à l'huître",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Moutarde japonaise (karashi) ou moutarde sèche",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "chaud moutarde anglaise"
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
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_katsu_sauce",
      "instructions": "Mélanger tous les ingrédients dans un petit bol et fouetter jusqu'à ce que le sucre soit complètement lisse et complètement dissous. La sauce Katsu ne nécessite pas de cuisson: les condiments fermentés sont déjà complexes et équilibrés. Boucher immédiatement : il doit être en même temps doux, aigre, salé et légèrement épicé. Ajuster avec plus de Worcestershire pour la profondeur, plus de ketchup pour la douceur, plus de soja pour le sel. Conserver au réfrigérateur jusqu'à 1 mois. La moutarde s'hydratera pendant 24 heures.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse et brun foncé, légèrement plus foncée que le ketchup, avec une consistance moyennement épaisse qui s'écoule facilement d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre non dissous — granulés visibles au fond du bol. Ingrédients non entièrement intégrés.",
            "action": "fouetter plus vigoureusement pendant 1 minute jusqu'à ce que le sucre se dissout complètement."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, sauce marron foncé. Pas de grains visibles. Elle coule librement mais enrobe une cuillère. Goût équilibré sucré-savoureux-savoureux.",
            "action": "Servir immédiatement aux côtés des découpettes frites, ou réfrigérer jusqu'à 1 mois."
          },
          {
            "state": "Overdone",
            "description": "Pas vraiment possible avec une sauce sans cuisson. Tout au plus, les éléments peuvent avoir un goût déséquilibré.",
            "action": "Goûtez et ajustez — plus Worcestershire, ketchup ou soja au besoin."
          }
        ]
      },
      "feelCue": "La sauce Katsu doit être légèrement plus épaisse que la sauce de soja sur la langue — sirupeuse mais non cloie. La séquence de saveur est importante: la douceur d'abord, puis la profondeur fermentée savoureuse, puis une netteté traînante du Worcestershire qui l'empêche d'être trop simple."
    }
  ]
};
