export default {
  "repoId": "master_japanese_tonkatsu_sauce_001",
  "parentRepoId": null,
  "slug": "tonkatsu-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce tonkatsu",
  "description": "Un condiment épais, brillant et foncé qui a le goût de la sauce Worcestershire plus rond, plus harmonieux cousin japonais — fruit-avant, tarte douce, et profondément salé, avec une douceur qui arrondit chaque bord. Cinq minutes et une poignée d'agrafes de cellier produisent une sauce digne de la meilleure coupe panée, et assez confiante pour se tenir dans la sauce au steak, la sauce à tremper ou le condiment de burger.",
  "cuisine": "Japonais",
  "culture": "Yoshoku",
  "category": "condiments",
  "tags": [
    "Japonais",
    "sauce",
    "porc",
    "tonkatsu",
    "condiment",
    "yoshiku",
    "tannie"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce Worcestershire",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Henderson's Relish pour végétarien",
        "sauce soja + tamarin (3:1) comme substitut"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Ketchup de tomates",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de tomate (30g) + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "sauce à l'huître",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce hoisine",
        "sauce aux huîtres champignons pour végétarien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de cidre de pomme",
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "miel (utiliser 6g)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Moutarde de Dijon",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Moutarde anglaise (utiliser la moitié — elle est plus nette)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "ail fraîchement râpé (utiliser la moitié d'une petite gousse)"
      ]
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
        "ing_07"
      ],
      "outputState": "blended_sauce",
      "instructions": "Mélanger tous les ingrédients dans un petit bol ou un pot. fouetter vigoureusement jusqu'à ce qu'il soit complètement homogène — la moutarde doit être complètement émulsifiée dans la sauce, de sorte qu'il ne reste pas de stries jaunes. Goûtez et ajustez : si le goût est trop vif, ajoutez 3g de sucre de plus ; si trop sucré, ajoutez 5g de plus Worcestershire ou quelques gouttes de vinaigre de riz ; si trop mince en umami, ajoutez 5g de sauce huître de plus. La sauce est prête à l'emploi immédiatement, mais elle s'améliore significativement après 30 minutes de repos à mesure que les arômes se mélangent.",
      "visualCue": {
        "primaryTarget": "Une sauce brun-ambre uniformément foncé, brillant sans stries, sans huile flottante, et une consistance qui coule dans un cours d'eau lent et contrôlé plutôt que de dribber librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de moutarde jaune sont visibles. Ingrédients non entièrement combinés. Séparer les couches de liquide mince et de pâte épaisse.",
            "action": "fouetter encore 30 secondes, en faisant attention aux côtés et au fond du bol où la moutarde tend à s'accrocher."
          },
          {
            "state": "Perfect",
            "description": "L'ambre brun foncé uniforme, brillant, se déverse dans un ruisseau contrôlé lorsque le pot est incliné. Bouche complexe: aigre-douce au début, puis une base profonde, salée, fruitée, puis une douce finale de tarte.",
            "action": "Utiliser immédiatement ou reposer couvert pendant 30 minutes. A conserver réfrigéré jusqu'à 1 mois."
          },
          {
            "state": "Overdone",
            "description": "Sans objet pour une sauce sans cuisson. En cas de sursaisonnement avec trop d'un composant, équilibrez-le avec l'élément opposé.",
            "action": "Ajouter le sucre pour couper l'excès d'acide; ajouter le vinaigre pour couper l'excès de douceur; ajouter le Worcestershire pour couper la douceur et ajouter la profondeur."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt et le goût — la première impression doit être fruitée et tarte, le milieu doit être salé et sombre, et la finale doit être moelleuse et douce, le tout en 3 secondes. Si une seule note domine plus longtemps que cela, elle est déséquilibrée."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser reposer",
      "inputs": [
        "blended_sauce"
      ],
      "outputState": "finished_tonkatsu_sauce",
      "instructions": "Transférer la sauce dans un pot propre ou presser le flacon et la laisser reposer à température ambiante pendant au moins 30 minutes avant de servir. Pendant ce temps, la poudre d'ail crue fleurit, la moutarde finit par émulsifier, et les notes douces, acides et salées concurrentes tricotent en un tout unifié. La sauce n'a pas besoin de cuisson — la chaleur éloignerait les acides volatils et réduirait les notes brillantes qui distinguent la sauce tonkatsu d'un goût cuit. Réfrigérer toute sauce non utilisée. Il conserve 4 à 6 semaines et approfondit sa saveur au fil du temps, comme le fait une bonne sauce Worcestershire.",
      "visualCue": {
        "primaryTarget": "La sauce reposée est légèrement plus épaisse que lorsqu'elle est mélangée pour la première fois — la moutarde a absorbé l'humidité et la sauce a un corps plus cohésif lorsqu'elle est brassée. La couleur s'est accentuée très légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a été utilisée immédiatement sans repos — les composants individuels sont distincts plutôt que mélangés, et la poudre d'ail a un bord astringent brut.",
            "action": "La sauce est encore utilisable — reposez-la la prochaine fois. La saveur s'améliore considérablement avec même 20 minutes de standing."
          },
          {
            "state": "Perfect",
            "description": "Après 30 minutes : une sauce foncée brillante, homogène et complexe. Verser du pot sur une plaque blanche — il doit couler dans un ruban lent et contrôlé et maintenir sa forme pendant 5 secondes avant de s'étendre.",
            "action": "Servir à température ambiante à côté de katsu. Appliquer généreusement sur la face coupée de la découpe pour une couverture maximale."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réfrigérée depuis des semaines et s'est séparée en couches.",
            "action": "Agiter vigoureusement ou remettre en question la recombinaison. La saveur sera en fait meilleure que fraîchement faite."
          }
        ]
      },
      "feelCue": "Étendez une petite piscine sur le dos de votre main et tirez un doigt à travers elle — le sentier doit rester propre pendant 3 à 4 secondes avant que la sauce ne se recoupe lentement, comme la sauce au chocolat chaud juste avant qu'elle ne se couche."
    }
  ]
};
