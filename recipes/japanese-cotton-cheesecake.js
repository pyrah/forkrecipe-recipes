export default {
  "repoId": "master_japanese_cotton_cheesecake_001",
  "parentRepoId": null,
  "slug": "japanese-cotton-cheesecake",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Cake au fromage en coton japonais",
  "description": "Un gâteau qui tremble comme de la crème cuite, sa surface brûlée à l'ambre profond, sa miettes si aérées qu'il donne à une cuillère comme de la mousse — la légèreté d'un soufflé marié à la douce tang du fromage à la crème, impossiblement soutenue.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "desserts",
  "tags": [
    "végétarien",
    "Japonais",
    "Cake au fromage",
    "soufflé",
    "fromage à la crème",
    "Cuisson",
    "délicate"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Fromage à la crème plein gras (temps de la chambre)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 6,
      "defaultUnit": "unit",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Farine pure (farine de gâteau préférée)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "farine blanche tamisée 3 fois"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Blancs d'oeufs (grands, froids)",
      "ratioValue": 6,
      "defaultUnit": "unit",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 130,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Crème de tartre",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé jus de citron"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cream_cheese_base",
      "instructions": "Mettre le fromage à la crème, le beurre et le lait dans un grand bol thermofuge sur une casserole d'eau à peine mijotée (bain-marie). fouetter doucement jusqu'à ce que le fromage à la crème ait complètement fondu et que le mélange soit lisse, soyeux et uniforme — pas de grumeaux, pas de stries. Retirer du feu et refroidir à 40-45 C avant d'ajouter des jaunes. Si le mélange est trop chaud, il va brouiller les jaunes.",
      "visualCue": {
        "primaryTarget": "Un mélange lisse, homogène, de couleur crème pâle sans grumeaux, sans stries de fromage à la crème ou de graisse séparée. Soie et uniforme dans la texture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des lumps de fromage à la crème non fondu. Le mélange semble caillé ou inégal.",
            "action": "Continuez à fouetter sur le bain-marie. Le fromage à la crème froide prend 5-7 minutes pour se dissoudre complètement — la patience est nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, soyeux, mélange de crème pâle. Elle s'écoule du fouet dans un ruisseau lisse et uniforme sans grumeaux visibles.",
            "action": "Laisser refroidir à 40-45 C en plaçant le bol dans un bol d'eau fraîche, puis ajouter les jaunes."
          },
          {
            "state": "Overdone",
            "description": "Le mélange commence à mijoter ou montre des signes de brûlure. Ça sent le lait surchauffé.",
            "action": "Retirer immédiatement du feu. La graisse du fromage à la crème peut se séparer si elle est surchauffée — fouetter vigoureusement et refroidir rapidement."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans la base refroidie — il doit se sentir chaud mais pas chaud, autour de la température du corps ou légèrement au-dessus. Lisse comme une lotion chaude, sans grain."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "cream_cheese_base",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "yolk_batter",
      "instructions": "fouetter les jaunes d'œufs dans la base de fromage à la crème refroidie un à la fois. Mélanger la farine et la farine de maïs et la plier dans le mélange en deux additions jusqu'à ce qu'elle soit complètement lisse sans grumeaux. Ajouter la vanille. La pâte doit être épaisse mais versable, comme la pâte à crêpes épaisse. Les morceaux de farine montreront des taches denses dans le gâteau fini.",
      "visualCue": {
        "primaryTarget": "Une pâte au citron pâle, lisse, avec une consistance épaisse et fluide. Lorsque le fouet est levé, il tombe dans un ruban épais qui tient sur la surface pendant 2 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de farine visibles dans la pâte. Le mélange semble rugueux et inégal.",
            "action": "fouetter plus vigoureusement et faire passer un tamis si les bosses persistent."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, épaisse, pâte pâle avec un reflet brillant des jaunes d'œufs. Des rubans lentement hors du fouet.",
            "action": "Mettez de côté pendant que vous fouettez les blancs d'oeufs."
          },
          {
            "state": "Overdone",
            "description": "Batter a été trop mélangé et semble très serré. Ou il était mélangé alors qu'il était trop chaud et montre des signes des œufs qui commencent à cuire.",
            "action": "Passer à travers un tamis pour lisser et refroidir dans un bain de glace si nécessaire."
          }
        ]
      },
      "feelCue": "La pâte de jaune devrait se sentir comme de la crème épaisse et froide quand vous passez un doigt à travers elle - lisse, légèrement résistant, et laissant un canal propre qui se remplit lentement en 3 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Whip",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "swiss_meringue",
      "instructions": "Dans un bol soigneusement propre, fouetter les blancs d'oeufs froids avec de la crème de tartare à vitesse moyenne jusqu'à mousser. Ajouter progressivement le sucre de la roulette tout en continuant à fouetter. Augmenter à moyenne-élevée et fouetter à des pics fermes — la meringue devrait être assez raide pour maintenir un pic mais toujours lisse et brillant, non sec ou granuleux. Le point critique: ne pas trop fouetter. La meringue devrait être juste ferme, avec une légère boucle au sommet, pas complètement rigide.",
      "visualCue": {
        "primaryTarget": "Une meringue brillante et blanche avec des pics fermes qui tiennent leur forme, mais ont une boucle douce à l'extrémité même — pas raide et droite, pas doux et tombant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pics sont doux et s'enfoncent. Meringue a une qualité aqueuse et s'échappe du fouet.",
            "action": "Continuez à fouetter. La meringue n'est pas encore assez raide — se replier trop tôt et l'effet soufflé ne se développera pas."
          },
          {
            "state": "Perfect",
            "description": "Forts pics brillants avec une très légère boucle à l'extrémité. Lorsque vous soulevez le fouet, le pic se tient et l'extrémité même se courbe doucement. Magnifique blanc.",
            "action": "Plier immédiatement dans la pâte au jaune en trois ajouts."
          },
          {
            "state": "Overdone",
            "description": "Meringue a l'air sèche, granuleuse et cottage-cheese. Les pics sont raides et droits sans brillant.",
            "action": "La meringue sèche ne peut pas être sauvée — elle se repliera sous forme de morceaux, détruisant la texture. Recommence."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la meringue et tirez - le pic gauche sur votre doigt devrait tenir debout pendant 2 secondes, puis l'extrémité même devrait tomber doucement. Il devrait se sentir incroyablement lisse, froid, mousse raide."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "yolk_batter",
        "swiss_meringue"
      ],
      "outputState": "cheesecake_batter",
      "instructions": "Ajouter la meringue à la pâte au jaune en trois ajouts. Le premier ajout : remuer à peu près pour alléger la pâte sans souci de préserver l'air. Les deuxième et troisième ajouts : plier avec une large spatule en caoutchouc, écoper de la base et se replier, tourner le bol. Arrêtez dès qu'il ne reste plus de stries blanches. Verser dans une boîte ronde de 20 cm parcheminée. Appuyez sur l'étain une fois sur le compteur pour libérer de grandes bulles.",
      "visualCue": {
        "primaryTarget": "Une pâte légère, aérée, à la crème pâle sans stries de meringue blanche. Plus volumineux et aéré que la pâte à jaune seule, il y a un doux monticule dans l'étain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de meringue blanches sont encore visibles dans la pâte.",
            "action": "Un ou deux autres coups de plis délibérés — scoop de la base et se replient."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, aéré, léger. Pas de stries. La pâte a une qualité flottante et nuageuse car elle tombe de la spatule. Remplit l'étain d'un doux monticule.",
            "action": "Mettre dans un bain d'eau et cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La batterie est plate et liquide — le surpliage a dégonflé la meringue. Le gâteau ne sera pas soufflé.",
            "action": "Faire cuire quand même. Il sera plus dense que idéal mais toujours délicieux."
          }
        ]
      },
      "feelCue": "Lorsqu'on prend une spatule de pâte et qu'on la laisse tomber, elle doit atterrir avec un son doux, amorti et à peine répandu, comme une cuillère à un nuage épais et aéré."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "cheesecake_batter"
      ],
      "outputState": "finished_cotton_cheesecake",
      "instructions": "Envelopper fermement la base et les côtés de l'étain en deux couches de papier. Placer dans un plateau de torréfaction profond et remplir d'eau bouillante pour atteindre à mi-chemin les côtés de l'étain (bain d'eau / cuisson bain-marie). Faire cuire à 160 C (320 F) pendant 55-65 minutes. La surface doit être d'un brun-ambre profond et le gâteau doit trembler dans son ensemble lorsque l'étain est légèrement secoué — non pas un liquide mouvant, mais un gloussement unifié. Éteignez le four et laissez le gâteau à l'intérieur avec la porte ajar pendant 30 minutes avant de retirer. Laisser refroidir complètement à température ambiante avant de réfrigérer pendant la nuit.",
      "visualCue": {
        "primaryTarget": "Dôme profond, même brun-ambre. Lorsque l'étain est secoué, le gâteau entier tremble comme une unité cohésive, comme regarder une gelée très ferme. Pas de liquide en mouvement au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centre sloshing comme liquide lorsqu'il est secoué. La surface est encore pâle. La pâte n'est pas prête.",
            "action": "Continuer la cuisson. Ne pas ouvrir le four — des changements soudains de température provoquent des fissures et un effondrement."
          },
          {
            "state": "Perfect",
            "description": "Dôme ambre profond, tremble comme une unité cohésive, ne slosh. Une brochette au bord sort propre; une brochette au centre sort avec quelques miettes humides.",
            "action": "Éteignez le four, laissez la porte ajar, et refroidissez graduellement à l'intérieur pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Une grande fissure est apparue au-dessus et le dôme a commencé à s'éloigner des côtés.",
            "action": "Retirer du four. Une fissure est cosmétique et n'affecte pas la saveur. Poussière avec du sucre glace pour le déguiser."
          }
        ]
      },
      "feelCue": "Après la réfrigération pendant la nuit, la surface doit se sentir lisse, fraîche et légèrement printanière lorsqu'elle est pressée très doucement — elle donne 2 mm sous un bout de doigt et ressort complètement. Couper avec un couteau propre et chaud révèle une miette si fine qu'elle ressemble à du coton compacté."
    }
  ]
};
