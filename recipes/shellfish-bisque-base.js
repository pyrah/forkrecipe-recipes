export default {
  "repoId": "master_french_shellfish_bisque_base_001",
  "parentRepoId": null,
  "slug": "shellfish-bisque-base",
  "author": "ForkRecipe Kitchen",
  "title": "Base du bisque de mollusques",
  "description": "Crevettes grillées et coquilles de homard enflammées de cognac, transpirées de mirépix et de tomate, et mijotées de crème, une base de bisque corallienne intensément océanique.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "stock",
    "français",
    "crustacés",
    "bisque",
    "Produits de la mer"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr 45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Coquilles et têtes de crevettes",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "coquilles langoustines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Coquilles et corps de homard (craquage)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Coquilles de crabe",
        "coquillages"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive sans lait"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune (plage fine)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Céleri (amende à l'épreuve)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Carotte",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Base",
      "name": "Pâte de tomates",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates concassées en conserve, réduites"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Solvent",
      "name": "Cognac ou cognac sec",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Sherry sec",
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "stocks de poissons supplémentaires"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Stocks ou eaux de poissons",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de noix de coco sans lait"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Tours d'estragon frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "estragon séché"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Feuille de la baie",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel fin et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "roasted_shells",
      "instructions": "Faire fondre le beurre dans un pot ou un rondeau large et lourd à feu vif jusqu'à ce qu'il mousse et qu'il devienne brun noisette. Ajouter toutes les coquilles en une seule couche si possible, les presser à plat contre la casserole. Faire cuire sans remuer pendant 3 à 4 minutes, jusqu'à ce que les coquillages tournent un profond, vif corallien-orange et que le beurre coule rouille-rouge du tomalley et des oeufs. Tourner et presser, puis rôtir encore 2 à 3 minutes. La réaction de Maillard sur les coquillages est ce qui donne à la bisque sa douceur torréfié caractéristique — les coquillages pâles et à la vapeur produisent un bouillon plat, parfumé de fruits de mer, et non pas bisque.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont un corail-orange brillant profond à rouge rouille, avec quelques taches foncées aux bords. Le beurre dans la poêle a transformé une riche rouille rouge à partir de pigments de coquille et le fond de la poêle commence à se former.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquillages sont encore gris-rose, ils sont à la vapeur dans leur propre humidité, sans changement de couleur et sans brunissement Maillard. Le beurre est encore jaune pâle.",
            "action": "Levez la chaleur et arrêtez de remuer. Les coquilles ont besoin d'un contact direct et soutenu avec la poêle chaude pour développer la couleur. Dispersez-les et laissez-les."
          },
          {
            "state": "Perfect",
            "description": "Coquilles profondes de corail et rouge rouille, parfumées d'un arôme de coquillages doux et légèrement caramélisé. Le fond de la poêle est recouvert d'un fond de couleur rouille et le beurre est orange.",
            "action": "Ajouter immédiatement le cognac et le flammé, tandis que les coquilles sont les plus chaudes."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont noires aux bords et le beurre a brûlé; l'arôme est acride et amer plutôt que doux et océanique.",
            "action": "Jeter toute coquille complètement noire. Essuyer toute matière grasse réellement brûlée de la poêle mais laisser le fond, déglacer avec le Cognac, et procéder — l'amertume peut être partiellement masquée par la crème."
          }
        ]
      },
      "feelCue": "Vous devriez entendre un étourdissement agressif au moment où les coquilles ont frappé le beurre — un son comme une goutte d'eau sur un toit en étain. À mesure que l'humidité s'évapore et que les coquilles sèchent, le étourdissement se déplace vers un craquelin plus sec et plus creux. Ce changement marque le début du développement réel de la couleur."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "roasted_shells",
        "ing_09"
      ],
      "outputState": "flambeed_shells",
      "instructions": "Avec la poêle encore à feu vif, verser le Cognac en un seul mouvement sur les coquilles. Reculez et inclinez la poêle ou touchez une longue correspondance au bord du liquide – l'alcool s'enflammera dans une flamme bleue-orange. Laisser brûler la flamme pendant 20 à 30 secondes, agiter doucement la poêle, puis laisser tomber naturellement (ou couvrir brièvement pour s'éteindre). Le flambeau n'est pas un spectacle théâtral : il brûle de l'alcool vif et brut tout en laissant derrière les esters plus profonds et fruités du Cognac — une dimension de saveur que vous ne pouvez pas reproduire en bouillant l'alcool.",
      "visualCue": {
        "primaryTarget": "Une flamme basse et bleue danse sur les coquilles pendant 20 à 30 secondes, puis meurt. Le liquide de la casserole est réduit à un petit sirop aromatique brillant enrobant les coquilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'alcool est dans la casserole mais n'a pas allumé, ou la flamme a duré seulement quelques secondes et est sorti avec un liquide important restant. Le bord cru du cognac est toujours présent.",
            "action": "Si elle refusait de s'enflammer, réchauffer le Cognac à la température du corps avant de l'ajouter. Alternativement, laissez-le réduire à feu vif pendant 2 minutes pour faire cuire l'alcool."
          },
          {
            "state": "Perfect",
            "description": "La flamme brûle régulièrement pendant 20 à 30 secondes à travers la surface, la poêle sent les fruits grillés et le caramel, et meurt lorsque l'alcool est dépensé. Le liquide restant est une petite réduction brillante, intensément parfumée.",
            "action": "Ajouter immédiatement le mirepix pendant que la poêle est encore chaude."
          },
          {
            "state": "Overdone",
            "description": "La poêle est devenue trop chaude et le fond commence à noircir après la flamme. Une fumée amère se lève.",
            "action": "Déglacer avec un jet de vin blanc avant d'ajouter les légumes pour soulever le fond avant qu'il ne brûle davantage."
          }
        ]
      },
      "feelCue": "Penchez - vous brièvement après la mort de la flamme: l'arôme doit être complexe: le cognac doux, la coquille caramélisée, un murmure d'air salé. S'il sent cru et boueux, l'alcool a besoin d'une réduction plus importante."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "flambeed_shells",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10",
        "ing_11",
        "ing_13",
        "ing_14"
      ],
      "outputState": "bisque_base_simmered",
      "instructions": "Ajouter l'oignon en dés, le céleri, la carotte et l'ail dans la poêle et bien remuer, grattant tout le fond des coquilles. Transpirer les légumes à feu moyen pendant 6 à 8 minutes jusqu'à ce qu'ils soient doux et commencent à s'effondrer. Ajouter la pâte de tomate et la remuer dans les légumes, cuire 2 minutes jusqu'à ce qu'elle s'assombrisse à un rouge-brique profond. Verser le vin blanc et racler la poêle, puis ajouter le stock de poisson, l'estragon et la feuille de laurier. Porter à mijoter doucement et cuire 25 à 30 minutes. Les coquilles doivent être submergées tout le temps, libérant en permanence leur saveur dans le liquide.",
      "visualCue": {
        "primaryTarget": "Un bouillon à mijoter de corail à brique rouge, avec des coquillages à moitié submergés, une mousse de corail rose formant aux bords, et une colonne constante de vapeur parfumée montant. Le liquide a la couleur d'un coucher de soleil sur la mer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est encore assez pâle: la tomate et les coquilles n'ont pas eu assez de temps pour colorer le liquide. Moins de 20 minutes ont passé.",
            "action": "Continuez à mijoter. La couleur s'approfondit progressivement au cours des 10 dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon corallien-orange riche qui goûte intensément les mollusques, la douceur torréfié et une légère acidité tomate. Habillé sans solides, la couleur est claire et vive corail.",
            "action": "Procéder au mélange des coquilles et à la déformation."
          },
          {
            "state": "Overdone",
            "description": "Broth a diminué de façon trop agressive et goûte vif et concentré, avec une amertume poissonneuse des coquilles sur-extractées.",
            "action": "Ajouter plus de poisson ou d'eau chaude pour diluer, et goûter à nouveau avant de passer à la crème."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon à mi - chemin — il doit goûter très oceanly mais pas amer, avec un caractère torréfié doux en dessous et une luminosité de tomate propre à l'arrière de la gorge."
    },
    {
      "nodeId": "step_4",
      "action": "Mixer",
      "inputs": [
        "bisque_base_simmered"
      ],
      "outputState": "blended_bisque",
      "instructions": "Retirer les feuilles de laurier et les tiges d'estragon. À l'aide de pinces ou d'une araignée, transférer les coquilles dans un mélangeur avec une louche du bouillon chaud. Mélanger en haut pendant 90 secondes — les coquilles se décomposent et libèrent le dernier de leur saveur et pigment dans le liquide. Passez ce mélange de coquilles mélangées à travers une passoire à mailles fines doublée d'une nappe de fromage, pressez fort avec le dos d'une louche pour extraire chaque goutte, puis passez le bouillon restant à travers la même passoire. Presser la pâte de coquille est essentiel: la majorité de la couleur et une partie importante de la saveur finale vient de ce que vous appuyez à travers.",
      "visualCue": {
        "primaryTarget": "Après mélange et pressage, la base de bisque tendue est un corail lisse, vif à léger rouge rouille, sans fragments de coquille et une texture uniformément soyeuse. Retenue contre la lumière, elle est claire et orangée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les solides de la coquille n'ont pas été mélangés — le liquide est dans le pot mais les coquilles sont encore entières, libérant seulement la saveur de surface.",
            "action": "Mélangez les coquilles maintenant. La différence de couleur et de profondeur entre le bisque mélangé et le bisque non mélangé est significative."
          },
          {
            "state": "Perfect",
            "description": "Un liquide corallien vif, intensément aromatisé, sans grain ni fragments de coquille. La couleur est lumineuse, l'arôme est océanique et légèrement sucré.",
            "action": "Retourner dans la casserole, ajouter la crème et finir le bisque."
          },
          {
            "state": "Overdone",
            "description": "La souche n'a pas été suffisamment pressée et le liquide qui a traversé est mince et pâle, avec la plupart de la couleur toujours verrouillée dans les solides pressés.",
            "action": "Déposez la nappe de fromage et pressez plus vigoureusement, ou extrayez les solides une deuxième fois avec une petite quantité de bouillon chaud."
          }
        ]
      },
      "feelCue": "Appuyez sur le dos d'une cuillère dur dans la pâte de la coquille dans la passoire — vous devriez sentir qu'il résiste et puis de céder, libérant un flux de liquide intensement orange. Continuer à appuyer jusqu'à ce que les solides pressés aient l'air gris-blanc plutôt que d'orange."
    },
    {
      "nodeId": "step_5",
      "action": "Faire réduire",
      "inputs": [
        "blended_bisque",
        "ing_12",
        "ing_15"
      ],
      "outputState": "finished_bisque_base",
      "instructions": "Retourner la base de bisque tendue dans le pot et laisser mijoter doucement. Incorporer la crème lourde et laisser mijoter 10 à 15 minutes jusqu'à ce que la base soit légèrement épaissie et que la crème se marie complètement dans la bisque. Assaisonner avec du sel fin et du poivre blanc — le poivre blanc est traditionnel et évite les taches noires qui marrieraient la couleur raffinée de la bisque. Bouche : La base finie devrait être intensément océanique, riche mais pas lourde, avec un caractère de coquillage torréfié doux et une texture crémeuse et veloutée. Cette base conserve réfrigéré pendant 3 jours ou congelé pendant 2 mois.",
      "visualCue": {
        "primaryTarget": "Une base de bisque finie est un liquide corallien-salmon-rose, soyeux, plus épais que le bouillon mais versable. Sur une plaque blanche, elle est lumineuse et riche en couleurs, et elle enveloppe le dos d'une cuillère dans une feuille lisse et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème se sépare encore et la couleur est striée blanc-orange; la base est mince et aqueuse, sans corps.",
            "action": "Continuer à mijoter — la crème a besoin de temps pour s'intégrer pleinement et réduire à la bonne consistance. 5 minutes de plus résout généralement les stries."
          },
          {
            "state": "Perfect",
            "description": "Une base unie, veloutée, bisque corail-salon qui sirote une cuillère dans une feuille lisse. La saveur est entièrement arrondie : océanique, crémeuse, légèrement sucrée, avec une longue finale umami.",
            "action": "Laisser refroidir rapidement et conserver, ou utiliser immédiatement comme base pour une soupe de homard, de crevette ou de crabe."
          },
          {
            "state": "Overdone",
            "description": "La base a été réduite à une pâte épaisse et collante trop riche pour servir de soupe, plus une sauce qu'une bisque. Il peut avoir un goût vif et lourd.",
            "action": "Finir avec un stock de poisson chaud ou crème supplémentaire, fouetter pour se réinsérer, jusqu'à ce qu'il atteigne une consistance versable mais enduite."
          }
        ]
      },
      "feelCue": "Enrobez l'arrière d'une cuillère en métal et tirez votre doigt à travers elle: la ligne doit tenir propre pendant 3 à 4 secondes avant que la bisque la remplit lentement. C'est la nappe — la consistance qui vous dit que la crème a réduit au bon point."
    }
  ]
};
