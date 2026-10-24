export default {
  "repoId": "master_american_bbq-dry-rub_001",
  "parentRepoId": null,
  "slug": "bbq-dry-rub",
  "author": "ForkRecipe Kitchen",
  "title": "Texas BBQ Rube sèche",
  "description": "Un gros frottage rouge brique construit sur du sel, du poivre noir et du paprika fumé qui fusionne à la surface de la poitrine ou des côtes sur une longue fumée, formant l'écorce d'acajou qui définit Texas pit barbecue.",
  "cuisine": "Américain",
  "culture": "Texan",
  "category": "condiments",
  "tags": [
    "masse sèche",
    "bbq",
    "texas",
    "poitrine",
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
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 8,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Seasoning",
      "name": "Sel casher (Morton ou diamant cristal grossier)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de mer (réduire de 15%)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Poivre noir grossièrement moulu (16 mailles si possible)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir craqué (même plus grossier, plus de morsure)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux (moins de fumée)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre d'ail (pas sel d'ail)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre d'oignon",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre brun clair",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre blanc (moins de profondeur de mélasse)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de chipotle (chaleur fumée)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poudre sèche de moutarde",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
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
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "mixed_rub",
      "instructions": "Mélanger toutes les épices dans un grand bol. Utilisez une fourchette ou vos doigts pour briser les morceaux de sucre brun – les croûtes de sucre non dissoutes provoqueront des points chauds pendant une longue fumée où le sucre brûle avant que l'épice environnante ait caramélisé. Mélanger en pressant et en frottant plutôt que de remuer, ce qui distribue le sel plus lourd et le poivre plus uniformément avec les épices plus légères.",
      "visualCue": {
        "primaryTarget": "Une poudre rouge brique uniforme avec des fragments de poivre noir grossier visible. Pas de morceaux de sucre brun. Le frottage semble cohérent en couleur du bord au bord du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre brun visible. Les granules de sel semblent séparés par des taches blanches plutôt que intégrés dans le mélange brun-rouge.",
            "action": "Continuez à mélanger et appuyez encore 30 secondes. Coupez les morceaux de sucre entre vos doigts."
          },
          {
            "state": "Perfect",
            "description": "Même la couleur rouge brique partout, avec des taches de poivre noir clairement visible comme l'élément le plus grossier. Sensations de paprika fumé, poivre, et une légère douceur.",
            "action": "Transférer dans un pot. Rub est prêt à être utilisé immédiatement ou peut être conservé jusqu'à 6 mois dans un contenant scellé."
          },
          {
            "state": "Overdone",
            "description": "S/O — un frottage sec ne peut pas être trop mélangé.",
            "action": "Conserver dans un pot hermétique à l'abri de la chaleur et de la lumière. Le paprika fumé est le plus volatil et va disparaître en premier."
          }
        ]
      },
      "feelCue": "Prenez une pincée et frottez-la entre vos doigts — la texture devrait être grossière, légèrement en poudre. Si vous ressentez des morceaux durs distincts, le sucre a besoin de plus de rupture. S'il se sent poussiéreux-doux sans texture, le poivre peut être plus grossier."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "mixed_rub"
      ],
      "outputState": "applied_rub",
      "instructions": "Pour appliquer: tapez la viande complètement sèche avec des serviettes en papier d'abord — l'humidité est l'ennemi de la formation d'écorce. Appliquer généreusement le frotter (de 3 à 4 cuillères à soupe par kilogramme de poitrine, 2 cuillères à soupe par plaque de côtes), le presser fermement sur toutes les surfaces. Ne frottez pas dans les mouvements circulaires — pressez et tapez tout droit pour que le poivre grossier reste intact plutôt que d'être broyé dans la viande. Pour la poitrine, appliquer le frotter et réfrigérer à découvert de 4 à 12 heures pour permettre au sel de commencer à tirer l'humidité et à ré-absorber comme un pellicule.",
      "visualCue": {
        "primaryTarget": "La surface de la viande est entièrement enduite d'une couche uniforme et ininterrompue de frottement. Pas de viande rose visible par le revêtement. Le frottement adhère sans glisser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Revêtement fin et patchy avec viande rose visible dans les taches. Rub est glissant sur les surfaces humides.",
            "action": "Sécheur de viande Pat avec des serviettes d'abord, puis appliquer plus de frotter et presser fermement."
          },
          {
            "state": "Perfect",
            "description": "Revêtement uniforme et complet sur toutes les surfaces. Le frottage semble légèrement humide à la surface de la viande, mais ne glisse pas. Chaque surface a la même densité de revêtement.",
            "action": "Réfrigérer à découvert pour la formation de l'écorce (facultatif mais recommandé pour les grandes coupes)."
          },
          {
            "state": "Overdone",
            "description": "La croûte est empilée si épaissement qu'elle formera une croûte épaisse et potentiellement amère plutôt qu'une écorce intégrée.",
            "action": "Éliminez l'excès avec des mains propres. Le revêtement idéal est de 2 à 3 mm au maximum."
          }
        ]
      },
      "feelCue": "Appuyez sur votre paume à plat contre la surface frottée — il devrait se sentir comme presser dans du sable grossier et légèrement humide. Votre main devrait sortir avec une tache rouge-brun, mais le frottage sur la viande devrait rester intact plutôt que de bouleter."
    }
  ]
};
