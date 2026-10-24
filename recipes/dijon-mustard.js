export default {
  "repoId": "master_french_dijon_mustard_001",
  "parentRepoId": null,
  "slug": "dijon-mustard",
  "author": "ForkRecipe Kitchen",
  "title": "Moutarde de Dijon",
  "description": "Les graines de moutarde jaune et brune fissurées dans le vinaigre et le vin blanc, mélangées dans une émulsion pâle et piquante dont la chaleur propre frappe le dos de votre sinus dans une vague qui s'estompe aussi rapidement qu'elle arrive, rien de tel que le tube jaune dans la porte d'un réfrigérateur.",
  "cuisine": "Français",
  "culture": "Burgundian",
  "category": "condiments",
  "tags": [
    "moutarde",
    "Dijon",
    "français",
    "condiment",
    "bourgogne",
    "fermenté"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 days 20 min",
  "ratioSystem": "parts",
  "stars": 1340,
  "forks": 107,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-15",
  "updatedAt": "2025-05-20",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 1,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graines de moutarde jaune",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Graines de moutarde brune",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de moutarde noire"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Vinaigre de Champagne",
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec (Burgogne ou Chablis)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "jus de raisin blanc + 1 c. à soupe de vinaigre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalote (finement hachée)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "1/4 petit oignon blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "soaked_seeds",
      "instructions": "Mélanger les graines de moutarde, le vinaigre de vin blanc, le vin blanc, l'échalote et la feuille de laurier dans un pot ou un bol en verre. Les graines doivent être complètement immergées dans du liquide. Couvrir et laisser tremper à température ambiante pendant 48 heures — les graines gonfleront considérablement, absorbant la majeure partie du liquide, et le liquide tournera de jaune pâle à un or moulu et moutardeux. Ce trempage est essentiel : il commence à activer l'enzyme myrosinase qui convertit les glucosinolates en isothiocyanates piquants qui donnent à la moutarde sa chaleur, et l'acide met la couleur au jaune pâle.",
      "visualCue": {
        "primaryTarget": "Les graines ont gonflé à presque deux fois leur taille originale, le liquide de trempage a été presque entièrement absorbé et le mélange ressemble à un porridge épais et humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 12 heures, les graines sont gonflées mais encore séparées; le liquide est encore surtout liquide.",
            "action": "Souffle plus longtemps. 48 heures à température ambiante est le minimum pour que les graines absorbent suffisamment de liquide et commencent l'activité enzymatique."
          },
          {
            "state": "Perfect",
            "description": "Au bout de 48 heures, les graines sont plumées et molles, le liquide est presque complètement absorbé, et le mélange sent distinctement la moutarde crue, piquante et légèrement acide.",
            "action": "Mélanger avec du sel."
          },
          {
            "state": "Overdone",
            "description": "La fermentation a commencé pendant plus de 72 heures et le mélange sent légèrement l'alcool.",
            "action": "Continuez. Une légère note fermentée aggravera la complexité de la moutarde finie — ce n'est pas un problème."
          }
        ]
      },
      "feelCue": "Appuyez sur une graine imbibée entre vos doigts – elle devrait céder et se diviser avec une pression douce, libérant une odeur de moutarde-sourcie, plutôt que d'être dure et résistante comme quand elle est sèche."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "soaked_seeds",
        "ing_06"
      ],
      "outputState": "blended_mustard",
      "instructions": "Enlevez la feuille de laurier. Transférer le mélange de graines trempées dans un mélangeur. Ajouter le sel. Mélanger en haut pendant 2 à 3 minutes pour une moutarde lisse de type Dijon, ou encore 8 à 10 fois pour une graine entière. L'émulsion est importante : plus vous mélangez, plus les coquillages se décomposent et libèrent leurs huiles dans le liquide, créant ainsi une émulsion cohésive. Grattez régulièrement les côtés. Ajouter une cuillère à soupe ou deux d'eau froide si le mélangeur est en difficulté — l'eau froide réduit également la température des enzymes, en préservant plus de chaleur.",
      "visualCue": {
        "primaryTarget": "Une pâte émulsionnée, épaisse et de couleur crème, d'or pâle qui tient sa forme lorsqu'elle est tombée d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours visiblement granuleux avec des graines entières flottant dans le liquide. Très vif et chaud mais pas encore émulsifié.",
            "action": "Continuer à mélanger à grande vitesse. Dijon nécessite un mélange important pour atteindre sa texture lisse caractéristique."
          },
          {
            "state": "Perfect",
            "description": "Emulsion lisse en or pâle qui tient un pic doux. La chaleur est propre et nette, s'affaiblissant rapidement — la ponction de Dijon.",
            "action": "Plonger dans un tamis à mailles fines pour un résultat très lisse, ou utiliser comme-est pour une texture légèrement plus grossière."
          },
          {
            "state": "Overdone",
            "description": "Mélangeé si longtemps, le mélange s'est réchauffé par la chaleur du moteur. La chaleur a commencé à détruire les isothiocyanates — la moutarde sera nettement plus douce.",
            "action": "Continuez. La saveur douce est encore excellente comme condiment; il aiguisera légèrement comme il refroidit."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité sur votre poignet — dans les 5 secondes, la chaleur devrait augmenter, piquer brièvement dans les sinus et s'estomper dans les 30 secondes. Cette chaleur rapide et volatile est le test diagnostique d'un Dijon correctement fabriqué."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser reposer",
      "inputs": [
        "blended_mustard"
      ],
      "outputState": "finished_dijon_mustard",
      "instructions": "Transférer dans un pot en verre stérilisé. Couvrir et réfrigérer pendant au moins 24 heures avant l'utilisation — la moutarde a besoin de temps pour se moeller, pour le bord vif et brut pour se terminer, et pour l'émulsion pour se stabiliser. La moutarde fraîchement mélangée est farouchement chaude et un peu amère; après 24 heures, elle devient plus complexe et plus cohésive. Après 3 jours, c'est à son meilleur. La moutarde reste réfrigérée pendant 3 mois. La chaleur diminuera progressivement avec le temps à mesure que les isothiocyanates se dégraderont.",
      "visualCue": {
        "primaryTarget": "Après le repos, la moutarde est une pâte cohésive et stable avec une couleur dorée à l'ivoire pâle et une consistance ferme et extensible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moutarde fraîchement préparée a un goût cru et dur, agressif et légèrement amer. L'émulsion peut sembler séparée ou granuleuse.",
            "action": "Réfrigérer et attendre. Les saveurs ont besoin de 24 à 48 heures pour s'intégrer."
          },
          {
            "state": "Perfect",
            "description": "Après 48 heures, la moutarde est lisse, complexe et cohésive. La chaleur est présente et propre, mais plus dure. Saveur a de la profondeur.",
            "action": "Servez. Il est maintenant à son apogée."
          },
          {
            "state": "Overdone",
            "description": "Après 2 mois, la couleur s'est légèrement assombrie et la chaleur s'estompée à presque rien. Les notes d'acide et de sel restent, mais la suffisance est largement disparue.",
            "action": "Toujours utilisable comme condiment doux et tannant. Les graines fraîches de moutarde peuvent être mélangées pour ajouter de la chaleur."
          }
        ]
      },
      "feelCue": "Après le repos, trempez une cuillère propre et goûtez: la chaleur devrait arriver vif et haut dans le nez, s'attarder pendant 10 secondes, puis disparaître proprement, ne laissant qu'un arrière-goût agréable, acide et salé."
    }
  ]
};
