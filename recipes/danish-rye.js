export default {
  "repoId": "master_scandinavian_danish-rye_001",
  "parentRepoId": null,
  "slug": "danish-rye",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de seigle danois",
  "description": "Un pain dense et foncé avec une miette humide et serrée et une croûte crépitante — seigle au fermenté à l'aurore parsemé de graines, tranché fin pour smørrebrød à face ouverte, dégustation de grain et de fermentation et quelque chose d'antique.",
  "cuisine": "Scandinave",
  "culture": "Danois",
  "category": "breads",
  "tags": [
    "seigle",
    "Pâtes alimentaires",
    "dense",
    "Nordique",
    "végétalien"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "30 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 7,
    "bitter": 3,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de seigle foncé (grain entier)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Démarrage au sarcophage (hydratation 100%)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau (température ambiante)",
      "ratioValue": 90,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Graines de tournesol entières",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de citrouille"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Lin entier",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Amandes de seigle craqué (coches de seigle)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de seigle roulés"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sirop de malt foncé ou mélasse",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Treacle"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_07",
        "ing_06"
      ],
      "outputState": "soaked_seeds",
      "instructions": "Mélanger les grains de seigle fissurés et les graines de lin dans un bol. Verser suffisamment d'eau bouillante sur eux pour submerger de 1 cm. Remuer et couvrir. Faire tremper pendant au moins 8 heures (ou une nuit) à température ambiante. Les graines de lin absorberont toute leur eau et libéreront le mucilage, formant un gel. Le seigle fissuré s'assouplira complètement. Ce soaker est essentiel : les côtelettes sèches de seigle ajoutées directement à la pâte voleront de l'eau pendant la fermentation et feront sécher le pain et s'émietter.",
      "visualCue": {
        "primaryTarget": "Après 8 heures, les graines forment un gel épais — les graines de lin se sont étendues et sont enrobées de mucilage clair. Le seigle craqué a été ramolli et ramolli. Pas de liquide libre restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore dures et séparées, flottant dans l'eau. Le temps était trop court.",
            "action": "Continuez à tremper. Le soaker peut aller jusqu'à 18 heures en toute sécurité dans une cuisine fraîche. Ne sautez pas cette étape."
          },
          {
            "state": "Perfect",
            "description": "Grosse masse gélatineuse. Pas de liquide libre. Les graines de lin sont enrobées de gel transparent. Le seigle craqué est complètement ramolli. Toute la masse tient sa forme dans une cuillère.",
            "action": "Ajouter directement à la pâte à pain sans égoutter."
          },
          {
            "state": "Overdone",
            "description": "Soaker est resté assis plus de 24 heures à température ambiante chaude et sent légèrement fermenté ou aigre.",
            "action": "Toujours utilisable — la légère fermentation ajoute en fait de la saveur. Utilisez-le immédiatement."
          }
        ]
      },
      "feelCue": "Mélanger le soûl — une cuillère devrait le glisser avec résistance, comme de l'avoine épaisse. La texture gel-like est correcte: c'est le mucilage de lin liant tout ensemble, qui gardera le pain humide pendant des jours."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08",
        "soaked_seeds"
      ],
      "outputState": "rye_batter_dough",
      "instructions": "Dans un grand bol, mélanger le début du seigle, l'eau, le sel et le sirop de malt et mélanger pour dissoudre. Ajouter toute la farine de seigle foncé, les graines de tournesol et tout le terreau (gel de graines et tout). Mélanger vigoureusement avec une cuillère solide ou une pâte fouetter pendant 3-4 minutes jusqu'à ce qu'elle soit complètement homogène. La pâte de seigle n'est pas une pâte de blé — elle ne sera jamais lisse ou élastique. Il sera épais et collant, comme du ciment humide, et devrait être mélangé seulement jusqu'à uniforme. Le développement du gluten n'est pas pertinent dans le seigle; ce qui importe, c'est l'hydratation complète et même la distribution des graines.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, sombre et uniforme — la consistance du porridge très rigide ou du béton humide. Toutes les graines sont distribuées uniformément. Pas de poches de farine sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plaques de farine sèche visibles. Les graines sont groupées. La pâte a l'air striée.",
            "action": "Incorporer encore 2 minutes, en mettant l'accent sur les zones sèches. Chaque grain de farine doit être hydraté."
          },
          {
            "state": "Perfect",
            "description": "Pâte sombre, uniforme, épaisse. Graines distribuées uniformément. Pas de zones sèches ou de flaques humides. Se colle fortement à la cuillère.",
            "action": "Transférer immédiatement dans l'étain gras."
          },
          {
            "state": "Overdone",
            "description": "La toux a été surstirée et se sent légèrement gommée ou cassée.",
            "action": "Transférer immédiatement dans l'étain — le seigle ne peut pas être surmené au point de causer des dommages. Continuez normalement."
          }
        ]
      },
      "feelCue": "La pâte mélangée doit se sentir comme de l'argile lourde et humide — elle tire la cuillère dans des cordes épaisses et lentes et atterrit avec une pente dense. Il se sentira radicalement différent de la pâte de blé : pas de springness, pas d'élasticité, juste une masse sombre et granuleuse."
    },
    {
      "nodeId": "step_3",
      "action": "Preuve",
      "inputs": [
        "rye_batter_dough"
      ],
      "outputState": "proofed_rye_loaf",
      "instructions": "Graisser généreusement avec de l'huile une boîte de pain de 900g (environ 22 x 11 x 7 cm). Mouiller les mains et la spatule pour éviter de coller. Transférer la pâte dans l'étain, la presser fermement dans les coins avec des doigts mouillés ou une spatule humide. Lissez le dessus avec une spatule humide — la surface doit être plate et uniforme. Éparpiller quelques graines de tournesol sur le dessus si désiré. Couvrir de l'enveloppe en plastique huilé et l'épreuve à température ambiante (20-22 C) pendant 8-12 heures, jusqu'à ce que la pâte soit montée sur le bord de l'étain et que la surface présente de petites fissures et des pores à bulles.",
      "visualCue": {
        "primaryTarget": "La toux est montée sur le bord de l'étain ou légèrement au-dessus. La surface supérieure présente de petites fissures superficielles et de minuscules pores à bulles, signes de fermentation active.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux a augmenté moins de la moitié de l'étain. La surface est plate sans fissures. Se sent dense et inerte.",
            "action": "Couvrez et attendez. Le seigle est plus lent que le blé. Déplacez-vous vers un endroit plus chaud (25 C) si très lent. Peut nécessiter jusqu'à 14 heures dans une cuisine froide."
          },
          {
            "state": "Perfect",
            "description": "Surface à ou juste au-dessus du bord de l'étain. La surface montre des fissures fines et des pores à bulles. Un peu drogué. Ça sent l'amertume et le ferment.",
            "action": "Cuire immédiatement pendant que la pâte est à son maximum."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est élevée bien au-dessus du bord et s'est effondrée vers l'intérieur. La surface est concave et humide.",
            "action": "Cuire immédiatement — il a surprouvé. Le pain sera plus acide et aura une miette plus dense, mais il n'est pas ruiné."
          }
        ]
      },
      "feelCue": "Tapotez légèrement la surface de la pâte éprouvée – elle doit se sentir légèrement ferme et sèche sur le dessus, comme une peau s'est formée. L'odeur doit être activement aigre et levure, pas plate. Un pain de seigle bien éprouvé bouge à peine quand l'étain est bouché."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "proofed_rye_loaf"
      ],
      "outputState": "finished_danish_rye",
      "instructions": "Préchauffer le four à 230 C (450 F). Placez le pain au four et réduisez immédiatement à 200 C (390 F). Faire cuire 60-70 minutes au total. Au cours des 10 dernières minutes, retirer le pain de l'étain et cuire directement sur la grille du four pour le développement maximal de la croûte. Un thermomètre à sonde inséré dans le centre doit lire 95-98 C (203-208 F) lorsqu'il est fait. L'ÉTAPE LA PLUS IMPORTANTE : ne pas couper le pain pendant au moins 12-24 heures après la cuisson. La miette doit se mettre complètement — la coupe de pain de seigle chaud produit un intérieur gommé et sous-dégustant. Enveloppez un chiffon propre et attendez.",
      "visualCue": {
        "primaryTarget": "Une croûte brune profonde et très foncée de tous les côtés. La surface est légèrement fissurée et sèche. Une fois tapé, le pain semble creux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est brune, mais l'intérieur lit en dessous de 92°C sur un thermomètre à sonde. Le pain est doux et lourd.",
            "action": "Retourner au four encore 10-15 minutes. Le seigle sous-cuit est chewing-gum et indigeste."
          },
          {
            "state": "Perfect",
            "description": "Très sombre, croûte presque noire avec des fissures de surface. Sonde lit 96 C ou plus. Le pain semble complètement creux lorsqu'il est tapé sur le fond.",
            "action": "Laisser refroidir sur une grille pendant au moins 12 heures avant de couper. La nuit est meilleure."
          },
          {
            "state": "Overdone",
            "description": "La croûte est profondément noire et le pain sent l'omble. Le pain a perdu beaucoup d'humidité et sonne plus léger lorsqu'il est tapé.",
            "action": "Refroidir et évaluer: si la miette est encore humide et la saveur est complexe (pas purement amère), le pain est fin. Rye peut prendre beaucoup de couleur."
          }
        ]
      },
      "feelCue": "Lorsque vous retirez le pain cuit de l'étain, il doit se sentir plus léger que vous ne l'espérez — l'humidité s'est évaporée. Tapez fermement sur le bas : un thock creux signifie que la structure est réglée. La cuisine devrait sentir le grain aigre, le malt rôti, et quelque chose de presque café-comme de la croûte sombre."
    }
  ]
};
