export default {
  "repoId": "master_japanese_tonkotsubroth_001",
  "parentRepoId": null,
  "slug": "tonkotsu-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Tonkotsu Ramen Broth",
  "description": "Bouillon d'os de porc blanc laiteux presque opaque de Fukuoka — bouilli dur pendant douze heures jusqu'à ce que le collagène, la graisse et la gélatine émulsifient dans un bol qui ressemble et goûte comme de la soie liquide.",
  "cuisine": "Japonais",
  "culture": "Fukuokan",
  "category": "stocks",
  "tags": [
    "Ramen",
    "porc",
    "bouillon",
    "Japonais",
    "umami",
    "Fukuoka",
    "Tonkosu"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "14 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Truttes de porc, divisées par boucher",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Cochettes de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Ossements du cou de porc",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "épines de porc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Graisse du dos de porc, grossièrement hachée",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Champignons shiitake séchés",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "porcins séchés"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, tranches épaisses",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalote, tiges entières",
      "ratioValue": 4,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Giroves d'ail, non pelées et broyées",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 4,
      "defaultUnit": "L",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel de mer fin, au goût",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sauce soja (pour la couleur)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_08"
      ],
      "outputState": "blanched_bones",
      "instructions": "Placer les trotters et les os du cou dans une grande réserve et couvrir d'eau froide. Porter à ébullition à feu vif et faire bouillir pendant 5 minutes — l'eau devient grise et pulvérisée sous forme d'impuretés. Égoutter, rincer tous les os sous l'eau froide courante et nettoyer les caillots ou les membranes sombres. Nettoyez le pot. Cette étape n'est pas négociable : le sauter produit un bouillon amer et trouble.",
      "visualCue": {
        "primaryTarget": "Les os sont pâles, propres et exempts d'ordures grises. L'eau de rinçage est libre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os ont encore des taches sombres ou des taches grises. L'écume s'accroche à la surface.",
            "action": "Rincez encore sous l'eau courante forte et frottez avec vos doigts, surtout à l'intérieur des articulations."
          },
          {
            "state": "Perfect",
            "description": "Des os d'ivoire brillants, pas de décoloration, pas d'odeur. L'eau blanche a été rejetée.",
            "action": "Retourner les os dans le pot propre et commencer à ébullition."
          },
          {
            "state": "Overdone",
            "description": "Les os étaient blanchis trop longtemps et semblent secs ou crayeux.",
            "action": "Procéder de toute façon — le surblanchiment affecte la couleur légèrement mais pas la saveur."
          }
        ]
      },
      "feelCue": "Les os blanchis se sentiront légèrement collagènes lorsqu'ils seront manipulés — ce collagène commence déjà à se desserrer. Rincer jusqu'à ce qu'ils se sentent lissés et propres."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "blanched_bones",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "milky_broth",
      "instructions": "Retournez les os propres dans le pot avec le dos gras, shiitake, gingembre, pétoncle et ail. Couvrir de 4 litres d'eau froide. Porter à un ébullition dur, rouler et le garder là - bas — la violente agitation est ce qui force la graisse et le collagène en suspension, faisant du bouillon blanc. Faire bouillir à pleine explosion pendant 12 heures, en ajoutant de l'eau au besoin pour maintenir les os submergés. Le niveau de liquide chutera de près de la moitié. Couvrir partiellement pour réduire l'éclaboussure mais maintenir l'ébullition.",
      "visualCue": {
        "primaryTarget": "Un liquide blanc crème opaque, ressemblant à du lait dilué. Un ébullition vigoureux qui agite la surface. Des gouttelettes de graisse visibles sont suspendues à l'intérieur — ne flottent pas sur le dessus dans une couche claire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le papillon est encore translucide ou légèrement nuageux après 4 heures. La graisse flotte comme une couche claire plutôt que d'émulsionner.",
            "action": "Augmentez la chaleur — le tonkotu nécessite une véritable ébullition dure, et non une mijotée. Montez-le jusqu'à ce que la surface s'agite activement."
          },
          {
            "state": "Perfect",
            "description": "Bouillon très opaque, blanc laiteux après 10 à 12 heures. Revêtement de l'arrière d'une cuillère légèrement. Des odeurs de porc sucré et de terre.",
            "action": "Retirer du feu. Laisser reposer pendant 5 minutes avant la déformation."
          },
          {
            "state": "Overdone",
            "description": "Le papillon a diminué sous les os ou a tourné un beige foncé. Sensations légèrement brûlées.",
            "action": "Ajouter un jet d'eau douce et réduire la chaleur immédiatement. Le goût de l'amertume — si amer, le bouillon ne peut pas être sauvé."
          }
        ]
      },
      "feelCue": "Plongez une cuillère propre et laissez tomber une goutte sur le dos de votre main – elle doit se sentir légèrement plus lourde que l'eau, presque veloutée, enrobant la peau avant de glisser."
    },
    {
      "nodeId": "step_3",
      "action": "Écumer",
      "inputs": [
        "milky_broth"
      ],
      "outputState": "skimmed_broth",
      "instructions": "Au cours de l'ébullition de 12 heures, arrosez toute mousse grise épaisse qui s'accumule aux bords au cours de la première heure. Après cela, résistez à l'envie de patiner — la turbidité blanche est le collagène et la graisse émulsifiée que vous voulez dans le bol final. Enlevez seulement le flotsam massif (copeaux d'os, tiges de champignons). Vérifiez la casserole toutes les 2 heures.",
      "visualCue": {
        "primaryTarget": "La surface est en train de grincer le blanc. Toute mousse grise aux bords du pot a été enlevée. La nuance blanche reste intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'épaisse ordure grise se trouve toujours autour des bords, l'amertume dans le bouillon.",
            "action": "Enfilez soigneusement le gris avec une louche, en inclinant le pot pour mettre en piqué la cigogne — mais laissez la turbidité blanche."
          },
          {
            "state": "Perfect",
            "description": "Pas de taches grises. Le bouillon est uniformément laiteux et criant. Seule mousse blanche et crémeuse à la surface.",
            "action": "Continuer à bouillir et ajouter de l'eau si le niveau tombe sous les os."
          },
          {
            "state": "Overdone",
            "description": "Vous avez écrémé et enlevé la graisse émulsionnée blanche avec la cigogne grise. Broth a l'air plus propre qu'il ne devrait.",
            "action": "Ajouter la graisse du dos (ing 03) et continuer à bouillir — il réémulsionnera."
          }
        ]
      },
      "feelCue": "La saleté grise est visqueuse sur la louche et sent légèrement métallique. La mousse blanche est crémeuse et sent riche — apprenez à les distinguer par l'odeur."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "skimmed_broth",
        "ing_09"
      ],
      "outputState": "tonkotsu_broth",
      "instructions": "Placer une passoire à mailles fines doublée d'une nappe de fromage sur une casserole propre. Placez le bouillon à travers — ne versez pas, car le déplacement des os obscurcira davantage le liquide. Jetez les solides. Assaisonner le bouillon fini avec du sel, goûter après chaque addition; il doit goûter profondément salé sur son propre mais assez doux pour accueillir la tare (sauce assaisonnement) et les garnitures. Refroidissez et réfrigérez si vous n'utilisez pas immédiatement — le bouillon sera mis dans une gelée d'ivoire ferme.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ivoire lisse et opaque sans fragments d'os. Sous réfrigération, elle est suffisamment ferme pour tenir un couteau coupé, signe d'une gélatine suffisante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est plus mince que la crème et enrobe à peine la cuillère. Sous réfrigération, il reste liquide.",
            "action": "Retournez dans la casserole et réduisez de 20%, bouillant dur pendant 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Finition crémeuse et veloutée. Manteaux et collants à la cuillère dos. Quand il fait froid, il se met comme un panna cotta doux.",
            "action": "Assaisonner soigneusement et conserver. Réchauffez doucement — ne faites pas bouillir le bouillon fini."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est très épais et collant à température ambiante, beige foncé plutôt que blanc.",
            "action": "Diluer avec de l'eau chaude et ré-saison — il est concentré, pas ruiné."
          }
        ]
      },
      "feelCue": "Quelques gouttes frottées entre le pouce et le doigt devraient se sentir lissées et légèrement collantes, comme un baume de lèvre. C'est la gélatine. Si elle s'écoule comme de l'eau, faire bouillir plus longtemps."
    }
  ]
};
