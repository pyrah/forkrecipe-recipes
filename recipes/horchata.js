export default {
  "repoId": "master_mexican_horchata_001",
  "parentRepoId": null,
  "slug": "horchata",
  "author": "ForkRecipe Kitchen",
  "title": "Horchata mexicain",
  "description": "Une boisson froide, blanche laiteuse, faite en trempant le riz toute la nuit avec de la cannelle, puis en la mélangeant dans une eau douce légèrement grainée qui est l'une des choses les plus apaisantes qu'un après-midi chaud peut offrir - féculent, délicatement épicé, et parfumé avec une chaleur adjacente à la vanille qui n'a rien à voir avec les produits laitiers et tout à voir avec le riz et le temps.",
  "cuisine": "Mexicain",
  "culture": "Tradition mexicaine agua fresca",
  "category": "beverages",
  "tags": [
    "Mexique",
    "horchata",
    "riz",
    "cannelle",
    "boire",
    "froid",
    "végétalien",
    "agua-fresca"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "8 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs, non cuit, non rincé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "amandes blanchies (version espagnole classique)",
        "Noix de tigre (horchata originaire de Valence)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide (pour tremper)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "bâtonnets de cannelle mexicains (canelle, type Ceylan — pas cassie)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "cassia cannelle (plus forte, plus affirmée)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne à sucre ou piloncillo",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "nectar d'agave",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots vanille, fendus et ajoutés pendant le trempage"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau froide supplémentaire (pour mélange et dilution)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Lait entier ou lait évaporé (facultatif, pour une horchata plus crémeuse)",
      "ratioValue": 1,
      "defaultUnit": "parts (optional)",
      "substitutions": [
        "Lait d'avoine",
        "lait de coco"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "soaked_rice",
      "instructions": "Mélanger le riz non cuit et les bâtonnets de cannelle dans un grand bol ou un pot. Le riz est laissé non rincé intentionnellement — l'amidon de surface sur les grains est ce qui donne à l'horchata sa texture laiteuse caractéristique, légèrement épaisse. Si vous rinçiez le riz, vous laveriez l'amidon qui rend l'hortchata différent de l'eau de riz simple. Verser l'eau froide sur le riz et la cannelle, en veillant à ce que tout le riz soit submergé. Couvrir et réfrigérer pendant au moins 8 heures, idéalement toute la nuit (jusqu'à 16 heures). Pendant cette période, le riz absorbe l'eau et commence à gonfler et à adoucir, et la cannelle infuse lentement ses huiles volatiles dans l'eau. Après 8 heures, l'eau sera légèrement opaque et sentira chaudement la cannelle. Ne pas tremper plus de 16 heures — le riz peut commencer à fermenter légèrement, donnant une note aigre.",
      "visualCue": {
        "primaryTarget": "L'eau de trempage est passée d'une couleur claire à une couleur légèrement opaque et laiteuse pâle. Les grains de riz ont enflé de façon visible — pluvieuse et plus gonflée qu'auparavant. Les bâtonnets de cannelle sont légèrement obscurcis et défournés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore claire et les grains de riz semblent inchangés. Seulement 2 à 3 heures ont passé. L'arôme de cannelle est faible.",
            "action": "Retournez au frigo. Le trempage n'est pas complet: le riz n'a pas suffisamment ramolli pour se fondre."
          },
          {
            "state": "Perfect",
            "description": "Eau lactée opaque et pâle avec un arôme de cannelle distinct. Les grains de riz sont visiblement gonflés et certains ont commencé à craquer légèrement. Facile à écraser entre les doigts.",
            "action": "Procéder au mélange."
          },
          {
            "state": "Overdone",
            "description": "L'eau est assez opaque et sent légèrement acide en plus de la cannelle. Le riz a trempé plus de 16 heures et la fermentation a commencé.",
            "action": "Utilisez immédiatement, mélange et pression rapidement. La légère amerie peut être imperceptible après édulcoration, mais il est préférable d'éviter cela."
          }
        ]
      },
      "feelCue": "Prenez un grain de riz trempé et appuyez-le entre votre vignette et l'index – il devrait écraser facilement avec une légère pression, offrant presque aucune résistance. Cette tendresse signifie que le grain se mélange en douceur dans l'eau plutôt que de laisser des particules grittes."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "soaked_rice",
        "ing_06"
      ],
      "outputState": "blended_rice_water",
      "instructions": "Retirer les bâtonnets de cannelle du riz trempé (ils ont fait leur travail). Verser le riz et toute son eau trempe dans un mélangeur. Ajouter l'eau froide supplémentaire. Mélanger à grande vitesse pendant 2 minutes entières — c'est plus long que vous ne le pensez nécessaire, mais le mélange approfondi est ce qui détermine si votre horchata est lisse ou gritty. Le mélange passera de laiteux opaque à une suspension épaisse et blanchâtre qui ressemble à de très minces farines d'avoine. N'arrêtez pas de mélanger tôt. Après 2 minutes, le riz doit être complètement décomposé en poudre fine en suspension dans l'eau. Si votre mélangeur n'est pas puissant, mélangez dans 30 secondes les éclats avec un repos entre les deux pour éviter la surchauffe du moteur. Le mélange mélangé sent fortement le riz et la cannelle ensemble, une odeur chaude, féculente et réconfortante.",
      "visualCue": {
        "primaryTarget": "Un liquide uniformément blanc, opaque, légèrement épais qui ressemble à du lait d'avoine mince. Pas de morceaux de riz visibles. Le mélange se déverse en douceur avec un grain très fin, à peine perceptible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de riz visibles flottent encore dans le liquide. Le mélange semble chunky et inégal. Moins de 60 secondes de mélange.",
            "action": "Continuer à mélanger en haut pendant une minute. Le temps de mélange est vraiment important ici."
          },
          {
            "state": "Perfect",
            "description": "Uniformement blanc, opaque, liquide lisse. Pas de morceaux visibles. L'odeur est sucrée et fortement cannelle. Verse comme du lait d'avoine.",
            "action": "Plongez immédiatement dans un tamis à mailles fines ou dans une nappe de fromage."
          },
          {
            "state": "Overdone",
            "description": "Vous ne pouvez pas vous dégonfler à ce stade - plus de mélange est toujours mieux pour la texture.",
            "action": "Allez à la pression."
          }
        ]
      },
      "feelCue": "Frottez une goutte du liquide mélangé entre vos doigts — il devrait se sentir soyeux avec une graine très légère, poudreuse, comme de la farine de riz fine en suspension dans l'eau. Cette texture vous indique que le riz a été décomposé assez bien pour un bon produit final."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "blended_rice_water"
      ],
      "outputState": "strained_horchata_base",
      "instructions": "Déposer un tamis à mailles fines avec une double couche de cheesewrap ou utiliser un sac de lait de noix. Verser le mélange mélangé en lots, presser et presser fermement les solides pour extraire tout le liquide. Les solides qui restent (la pulpe de riz) peuvent être séchés et utilisés comme farine de riz, compostés ou ajoutés aux smoothies — ne les jetez pas sans précaution. Ce qui coule à travers sera un liquide blanc lisse et pur. Le degré de déformation détermine la texture de la boisson finale : à travers le cheesewhabile, il sera complètement lisse et soyeux ; à travers un tamis à mailles, il aura une légère graine authentique que de nombreuses horchatas traditionnelles conservent. Goûtez le liquide tendu: il doit être légèrement sucré à partir de l'amidon de riz, chaud à partir de la cannelle, et avoir une finale propre, légèrement crayeuse — sans saveur et dans le besoin de sucre et de vanille.",
      "visualCue": {
        "primaryTarget": "Un liquide blanc pur et opaque qui coule en douceur dans le tamis. Les solides laissés derrière sont de la pulpe de riz pâle et presque sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes quantités de liquide sont encore emprisonnées dans les solides. Vous n'avez pas assez pressé.",
            "action": "Appuyez fort sur les solides dans le tamis. Rassemblez la nappe de fromage dans une boule et pressez fermement pour extraire le maximum de liquide."
          },
          {
            "state": "Perfect",
            "description": "Le liquide coule librement et les solides sont pressés presque secs. L'horchata tendu est blanc pur et verse en douceur.",
            "action": "Ajouter le sucre, la vanille et le lait en option dans la dernière étape."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé si fort que des solides féculents passent à travers le tissu, rendant la boisson gritty.",
            "action": "Plongez à nouveau dans une couche fraîche de cheesewet."
          }
        ]
      },
      "feelCue": "Le liquide tendu doit se sentir lisse sur la lèvre du bol pendant qu'il court — pas gritty, pas collant, mais propre et légèrement féculent, comme l'eau qui a la mémoire de quelque chose une fois dissous en elle."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "strained_horchata_base",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "finished_horchata",
      "instructions": "Ajouter le sucre à la base de l'horchata et remuer jusqu'à ce qu'il soit complètement dissous — si vous utilisez du piloncillo, râper finement d'abord ou le dissoudre dans une petite quantité d'eau chaude avant de l'ajouter. Ajouter l'extrait de vanille. Si vous utilisez du lait ou du lait évaporé, remuez-le maintenant — la version du lait évaporé est plus riche et plus indulgente, plus proche d'une horchata con leche d'un comptoir de taqueria. Goûtez avec soin : l'horchata doit être sucrée mais non cloie, avec un fond de cannelle chaud, un léger amidon de riz et une note vanille qui arrondit les bords. Ajustez le sucre au goût. Réfrigérer pendant au moins 1 heure avant de servir — l'horchata a un goût profondément meilleur froid. Servir sur beaucoup de glace dans de grands verres avec une poussière de cannelle au sol sur le dessus. Il se conserve au réfrigérateur pendant 3 jours — remuer bien avant que chaque amidon ne se dépose.",
      "visualCue": {
        "primaryTarget": "Une boisson blanche pure, froide, légèrement mousseuse qui ressemble à du lait mais qui a un corps légèrement plus mince. Lorsqu'il est versé sur la glace, il doit être opaque et blanc propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'a pas complètement dissous — vous pouvez voir et goûter des granules. La vanille est absente ou trop faible.",
            "action": "Remuer plus vigoureusement. Chauffer légèrement (ne pas bouillir) si le sucre est résistant, puis refroidir avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Boisson entièrement lisse, douce, froide et blanche. La cannelle est une chaleur en arrière-plan, pas dominante. L'amidon de riz donne un corps à peine perceptible. Finition propre et rafraîchissante.",
            "action": "Servir immédiatement sur la glace avec une poussière de cannelle."
          },
          {
            "state": "Overdone",
            "description": "L'horchata est trop sucrée — il enveloppe la bouche et la cannelle est perdue sous le sucre.",
            "action": "Diluer avec de l'eau froide, une éclaboussure à la fois. Ajouter une pression de jus de lime pour rééquilibrer."
          }
        ]
      },
      "feelCue": "Prenez une gorgée — la première sensation doit être froide et propre, comme l'eau, puis la douceur arrive, puis une chaleur persistante de cannelle à l'arrière de la gorge. Il devrait se sentir plus léger que le lait dans la bouche, mais avec plus de corps que de l'eau pure — que le riz-humide est le point entier."
    }
  ]
};
