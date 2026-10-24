export default {
  "repoId": "master_japanese_takoyaki_sauce_001",
  "parentRepoId": null,
  "slug": "takoyaki-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Takoyaki — Sauce de la rue Osaka sucrée",
  "description": "Une sauce brun foncé brillant assez épaisse pour s'accrocher à une boule de poulpe sphérique sans courir — simultanément fruitée, tannée, profondément salée, et sucrée de la manière que seule le Worcestershire fermenté et la tomate caramélisée peuvent être. Trois minutes à faire; le goût de se tenir debout sous les lumières du festival.",
  "cuisine": "Japonais",
  "culture": "Osaka matsuri / culture du festival de rue",
  "category": "condiments",
  "tags": [
    "Japonais",
    "sauce",
    "osaka",
    "Takoyaki",
    "Produits de la rue",
    "condiment",
    "doux",
    "savoureux"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
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
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce Taureau-Dog japonais (préféré si disponible)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "sauce à l'huître",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce hoisine (sweeter)",
        "sauce aux huîtres aux champignons (vegan)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Ketchup",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "pâte de tomate (utiliser 15 ml + 10 ml d'eau)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sucre brun clair (1 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Poudre d'ail",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "0,5 c. à thé d'ail frais, haché très fin"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "combined_sauce",
      "instructions": "Mélanger tous les ingrédients dans un petit bol ou un pot. fouetter vigoureusement jusqu'à ce que le miel soit complètement dissous et que la sauce soit uniforme. Cette étape exige plus qu'un remue-méninges perfunctorieux: le miel tend à s'agglutiner au fond, et la poudre d'ail peut former des morceaux secs qui ne se dissoudront pas sans agitation active. Goûtez la sauce crue et non réduite à ce stade : elle doit être nette, complexe, douce et nettement vinaigre-avant. L'équilibre brut est intentionnellement agressif, parce qu'une brève réduction apaisera la dureté et concentrera l'umami. Le rapport entre la sauce Worcestershire et la sauce à l'huître et le ketchup est ce qui distingue une bonne sauce takoyaki d'une glaçure générique en soie douce. Le Worcestershire fournit une profondeur fermentée et une longueur tannique, la sauce à l'huître contribue à la douceur et au corps foncés, et le ketchup fournit de l'acidité et une couleur vive de tomate.",
      "visualCue": {
        "primaryTarget": "Un liquide brun acajou foncé, légèrement opaque. Lorsque vous inclinez le bol, il coule doucement mais légèrement plus épais que l'eau. Pas de stries de miel ou de poudre d'ail sèche visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est encore baigné en bas. La poudre d'ail a formé de petites touffes sèches à la surface.",
            "action": "Whisk plus vigoureusement, se concentrant sur le levage du bas. Utilisez une fourchette si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Uniformement brun foncé, lisse et brillant. Complexe odorant : fruité, acidulé, salé et sucré simultanément.",
            "action": "Transférer dans une petite casserole et réduire."
          },
          {
            "state": "Overdone",
            "description": "S.O. — le sursaut d'une sauce froide n'a aucun effet négatif.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Lorsque vous trempez un doigt et goûtez à la sauce crue combinée, la première sensation doit être d'acidité vive (vin et ketchup), suivie d'une vague de sauce fermentée profonde (Worcestershire et soja), finissant par une douceur de miel qui persiste. Si l'une de ces trois vagues est absente, ajuster l'ingrédient pertinent."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "combined_sauce"
      ],
      "outputState": "finished_takoyaki_sauce",
      "instructions": "Verser la sauce combinée dans une petite casserole lourde. Chauffer à feu moyen jusqu'à ce qu'il atteigne une mijotation, puis réduire à moyen-doux et laisser mijoter doucement pendant 3 à 4 minutes, en remuant constamment avec une spatule de silicone. L'objectif est de réduire la sauce d'environ 20% — juste assez pour l'épaissir à une consistance qui s'accrochera à une boule sphérique plutôt que de s'enfuir. Le ketchup et le miel vont caraméliser légèrement, approfondissement de la couleur de l'acajou au proche noir et ajouter une douce amertume qui équilibre la douceur. L'arôme changera : les notes de vinaigre vif se ramolliront et seront remplacées par un parfum plus arrondi et complexe. Ne pas sur-réduire — si la sauce devient trop épaisse, elle ne s'enrobera pas uniformément et aura un goût cloyant. Retirer du feu alors qu'il est encore légèrement plus mince que vous voulez, car il continuera à épaissir pendant qu'il refroidit. Transfert dans une bouteille de compression pour le service.",
      "visualCue": {
        "primaryTarget": "Une sauce profonde, presque noire avec une teinte rougeâtre visible aux bords. Il coule dans un ruban lent et épais d'une cuillère. Lorsqu'une goutte est placée sur une plaque froide, elle tient un dôme plutôt que de s'étendre immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et sort rapidement d'une cuillère. La couleur a à peine approfondi. L'arôme est encore aigu et acide.",
            "action": "Continuez à mijoter. La pleine 4 minutes à un mijot actif est nécessaire pour un épaississement approprié."
          },
          {
            "state": "Perfect",
            "description": "Profond, brillant, presque noir. Il coule dans un ruban lent de la cuillère et enveloppe le dos. Une goutte sur une plaque froide tient sa forme pendant 3-4 secondes avant de s'étendre. L'arôme est arrondi, profondément sucré.",
            "action": "Retirer du feu et refroidir. Transférer dans une bouteille. Conserver au réfrigérateur pendant 3 semaines."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très épaisse et sombre — collante et difficile à verser. Des odeurs de sucre brûlé.",
            "action": "Ajouter 1 c. à soupe d'eau et remuer vigoureusement à feu doux à mince. Ne continuez pas à réduire."
          }
        ]
      },
      "feelCue": "Lorsque vous enrobez l'arrière d'une cuillère et tirez votre doigt dessus, la ligne doit tenir propre pendant 10 secondes sans que la sauce n'y tombe — le test de nappe classique. La sauce doit sentir les fruits caramélisés, le Worcestershire fumé, et quelque chose d'agréablement sombre, comme la mélasse."
    }
  ]
};
