export default {
  "repoId": "master_french_confit_garlic_001",
  "parentRepoId": null,
  "slug": "confit-garlic",
  "author": "ForkRecipe Kitchen",
  "title": "Confit l'ail",
  "description": "Girofles d'ail entiers pochés avec la patience d'un après-midi lent dans de l'huile d'olive extra-virgine à à peine 90°C — l'allium aigu et piquant se fond lentement en quelque chose de doux au beurre, doré, miellé et complètement sucré. L'huile devient l'or liquide. Les deux sont une agrafe de cuisine qui transforme tout ce qu'ils touchent.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "vegetables",
  "tags": [
    "français",
    "Ail",
    "confit",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "1 hr 10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Giroves d'ail, pelées (environ 2 têtes entières)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "petites échalotes, pelées",
        "Oignons perlés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (assez pour semer)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère (arôme doux)",
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 3,
      "defaultUnit": "sprigs",
      "substitutions": [
        "romarin frais",
        "une feuille de laurier et un romarin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 1,
      "defaultUnit": "leaf",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 6,
      "defaultUnit": "peppercorns",
      "substitutions": [
        "grains de poivre roses",
        "grains de poivre blancs"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepared_garlic",
      "instructions": "Pelez les gousses d'ail individuellement, en les maintenant entières et intactes — toute entaille ou coupe fera en sorte que le goulot se décompose prématurément dans l'huile et le nuagera. Jeter tout ce qui est meurtri ou est devenu mou. Si quelqu'un a un germe vert au centre, divisez la girofle et retirez - le germe est amer et va bouillir l'huile finie. Patientez les gousses pelées complètement sèches avec des serviettes en papier. Placez-les dans une petite casserole à base lourde — ils devraient être placés dans une seule couche étroite. Un navire trop gros nécessite trop d'huile pour les submerger.",
      "visualCue": {
        "primaryTarget": "Epluché uniformément, sec, blanc ivoire gousses d'ail, entières et non cassées, disposées en une seule couche dans la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les gousses ont encore une peau de papier attachée ou sont humides du lavage.",
            "action": "Enlevez toute la peau et séchez - la peau masquera l'huile et les girofles humides provoqueront des éclaboussures dangereuses lorsque l'huile se réchauffera."
          },
          {
            "state": "Perfect",
            "description": "Girofles propres, secs et de taille uniforme en une seule couche. Pas de coupures, pas de germes, pas de bleus. Prêt pour l'huile.",
            "action": "Ajouter l'huile et les aromatiques."
          },
          {
            "state": "Overdone",
            "description": "Les gousses ont été approximativement pelées et sont éraflées, meurtries ou coupées — plusieurs sont coupées de moitié.",
            "action": "Procéder — le confit sera encore bon, mais l'huile sera plus nuageuse et les gousses endommagées se décomposeront plus rapidement."
          }
        ]
      },
      "feelCue": "Une gousse d'ail bien pelée doit se sentir ferme et lisse sous vos doigts, légèrement cireuse, complètement sèche. Toute humidité sur la surface crache quand elle touche l'huile chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Confit bas et lent",
      "inputs": [
        "prepared_garlic",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "confit_garlic",
      "instructions": "Verser suffisamment d'huile d'olive sur les gousses d'ail pour les submerger de 1 à 2cm. Ajouter le thym, la laurier et les grains de poivre. Réglez la poêle sur la chaleur la plus basse possible sur votre plus petit brûleur. Portez l'huile à 85-90°C — utilisez un thermomètre; c'est la plage critique. L'huile doit montrer de petites bulles paresseuses qui s'élèvent occasionnellement de l'ail, comme une source très douce plutôt qu'une mijoter. Trop chaud (au-dessus de 100°C) et vous faites frire l'ail, qui brunit et devient acride. Trop frais et le collagène ne se brisera pas et les gousses ne deviendront pas soyeuses. Maintenez cette chaleur douce, en vérifiant occasionnellement, pendant 45 à 60 minutes. Les girofles sont faites quand elles peuvent être percés facilement avec un testeur de gâteau et ont tourné une couleur très pâle, dorée-ivorieuse partout.",
      "visualCue": {
        "primaryTarget": "Girofles translucides, d'or fainéant, dans une huile claire et jaune pâle qui montre la bulle parfois paresseuse qui monte de la base — sereine, presque toujours, comme une source chaude lente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les girofles sont encore fermes et blanc craie dans leurs centres, résistant au testeur de gâteau, l'huile à peine chaude et pas encore bouillonnant.",
            "action": "Levez légèrement la chaleur et confirmez la température avec un thermomètre. A moins de 80°C, le processus de confit n'a pas commencé, les gousses ne s'assoupliront pas."
          },
          {
            "state": "Perfect",
            "description": "Les vêtements ont transformé un ivoire pâle et chaud et donnent complètement à un testeur de gâteau sans aucune résistance — ils se sentent comme du beurre chaud à travers un couteau. L'huile est parfumée de thym et d'ail et est un or pâle et brillant.",
            "action": "Retirer immédiatement du feu et refroidir dans l'huile. Conserver au réfrigérateur dans un pot scellé, immergé dans de l'huile, jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "L'huile a été trop chaude — les girofles sont un brun doré profond ou commencent à frire, les bords croquants, et l'huile est très sombre et sent l'ail frit plutôt que l'huile parfumée doucement.",
            "action": "Retirer immédiatement du feu. Les girofles sont encore comestibles — ils ont plus le goût d'ail rôti que de véritable confit — mais l'huile a été compromise par la chaleur."
          }
        ]
      },
      "feelCue": "Après 45 minutes, glissez un testeur de gâteau dans la goulotte la plus grasse — il devrait entrer sans aucune résistance, comme pousser à travers le beurre doux chaud. La girofle doit sentir la peluche et céder, sans offrir même le noyau le plus faible ferme."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser refroidir et entreposer",
      "inputs": [
        "confit_garlic"
      ],
      "outputState": "finished_confit_garlic",
      "instructions": "Retirer la poêle du feu et laisser refroidir complètement l'ail dans son huile — ne pas tenter de passer à chaud. Une fois refroidis, transférez les girofles et l'huile ensemble dans un pot de verre stérilisé, garantissant que tous les girofles sont complètement immergés dans l'huile. Ils resteront réfrigérés jusqu'à 2 semaines. Utilisez les girofles entières, en purée sur des toasts, mélangées dans des pâtes ou de la purée de pommes de terre, ou dissoutes dans des sauces. Utilisez l'huile parfumée pour les vinaigrettes, les pâtes, les légumes rôtis, les soupes, elle est peut-être plus polyvalente que les gousses elles-mêmes. Ne jamais conserver l'ail confit à la température ambiante pendant de longues périodes (l'environnement anaérobie et peu acide crée un risque de botulisme).",
      "visualCue": {
        "primaryTarget": "Un pot d'huile d'or pâle avec des girofles d'ail d'ivoire suspendues, les brins de thym et les grains de poivre qui flottent entre eux - beau, lumineux, et qui valent la peine d'être faits toutes les deux semaines.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est encore chaude et nuageuse lorsqu'elle est transférée, l'ail n'est pas encore complètement refroidi et dégage toujours de la vapeur.",
            "action": "Laisser refroidir complètement à la température ambiante avant de jarrer. L'ail chaud dans un pot scellé créera la condensation et peut accélérer la détérioration."
          },
          {
            "state": "Perfect",
            "description": "Complètement frais, l'huile claire et dorée, les girofles un ivoire chaud à travers. Le pot sent l'ail doux et doux et le thym frais.",
            "action": "Réfrigérer immédiatement. L'huile se solidifiera légèrement à froid — c'est normal. Scoop ce dont vous avez besoin et laissez-le revenir à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Les gousses se sont trop décomposées et se dissolvent dans l'huile plutôt que de tenir leur forme — l'huile est très trouble et épaisse.",
            "action": "Retirez l'huile et utilisez-la comme huile de cuisson à l'ail. La girofle est toujours utile comme pâte — figer en petites portions."
          }
        ]
      },
      "feelCue": "Une girofle de confit refroidie pressée entre vos doigts devrait se comprimer complètement sans résistance – elle devrait se sentir comme une graisse, rafraîchie en texture, donnant sans casser, donnant entièrement. Pressé sur un toast, il se répand comme de la crème épaisse et sucrée."
    }
  ]
};
