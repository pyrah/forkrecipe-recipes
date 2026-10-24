export default {
  "repoId": "master_chinese_mapotofu_001",
  "parentRepoId": null,
  "slug": "mapo-tofu",
  "author": "ForkRecipe Kitchen",
  "title": "Mapo Tofu",
  "description": "Silken tofu bobing dans une mer rouge rouille de doubanjiang, haricots noirs fermentés, et le porc moulu — feu, picotements, profondément salé, et presque dangereusement morose. Le maïs poivré Sichuan délivre sa signature ma (numbing) à côté de la (chauffe) des chilis.",
  "cuisine": "Chinois",
  "culture": "Sichuan",
  "category": "proteins",
  "tags": [
    "tofu",
    "Sichuan",
    "Chinois",
    "épicé",
    "Doubanjiang",
    "porc",
    "engourdissement",
    "carte"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tofu de soie ou de taille moyenne",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tofu doux (manipulation plus douce)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc haché (20 % de matières grasses)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "boeuf haché",
        "Champignons hachés finement (végétaux)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Doubanjiang (Pâte de chili de haricots large de Pixian)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Haricots noirs fermentés (douchi), hachés à peu près",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, finement haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Flacons de chili séchés (sichuan ou coréen)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stock de poulet (ou stock de légumes non salés)",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Binder",
      "name": "Farine de maïs, mélangée avec de l'eau égale (lisier)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre (légume ou graines de raisin)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Échalote, parties vertes seulement, tranchées finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_tofu",
      "instructions": "Couper le tofu en cubes de 2cm et placer soigneusement dans un bol. Portez un pot d'eau légèrement salée à ébullition douce. Faites glisser les cubes de tofu dans et blanchir pendant 2 minutes — ne remuez pas agressivement, car le tofu soyeux se brise facilement. Égoutter avec une araignée ou une cuillère à fente sur une assiette doublée de papier de cuisine. Cette étape raffermit légèrement la surface du tofu, l'assaisonne de l'intérieur, et enlève les aromatisants, c'est la différence entre le tofu mapo avec des cubes propres et un gâchis cassé et trouble.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu qui tiennent leur forme, semblent légèrement plus fermes sur la surface extérieure, et ont un léger reflet crémeux de la légère salage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tofu est allé directement du paquet dans le wok — frais, légèrement aigre, très fragile. Ça se brise.",
            "action": "Toujours blanchir. Même 1 minute dans de l'eau salée chaude transforme la texture et élimine les arômes de la saumure d'emballage."
          },
          {
            "state": "Perfect",
            "description": "Les cubes tiennent leur forme proprement. La surface extérieure est très légèrement réglée — elle reste à l'intérieur mais n'est plus fragile. L'odeur est neutre et propre.",
            "action": "Réserver sur papier et garder à température ambiante. Ne pas réfrigérer ou le tofu va pleurer dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le tofu a été bouilli dur et la surface a gonflé et durci. Les cubes ont l'air pockmarked.",
            "action": "Continuez, mais abaissez la chaleur de wok en ajoutant le tofu — il n'absorbera pas la sauce aussi belle."
          }
        ]
      },
      "feelCue": "Soulevez doucement un cube avec une cuillère et appuyez légèrement avec un bout de doigt — il devrait compresser environ 30% avant de sentir la résistance, puis ressortez partiellement. Des cubes complètement fermes étaient surblanchis; les cubes qui s'effondrent au toucher n'étaient jamais blanchis du tout."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_02",
        "ing_12"
      ],
      "outputState": "rendered_pork",
      "instructions": "Chauffer l'huile dans un wok ou une grande poêle à feu vif jusqu'à ce que des cernes de fumée apparaissent. Ajouter le porc moulu et le répartir dans une fine couche. Laissez-le saisir sans gêne pendant 90 secondes jusqu'à ce que le fond soit doré et gras rendu. Brisez-le et faites cuire, en remuant de temps en temps, pendant 3-4 minutes jusqu'à ce que tout le rose soit parti et le porc a rendu sa graisse et quelques morceaux sont dorés et légèrement croquants. Ne drainez pas la graisse — elle porte le chili et la saveur fermentée dans la sauce.",
      "visualCue": {
        "primaryTarget": "Porc moulu doré-brun avec quelques bords croustillants et caramélisés. Graisse importante dans le wok. Pas de rose restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est gris et cuit à la vapeur. Encore un peu rose. Le gras n'a pas été rendu complètement — la viande semble mouillée.",
            "action": "Augmenter la chaleur. Cuire jusqu'à ce que la poêle soit étourdie et que le porc commence à avoir une couleur dorée-brun."
          },
          {
            "state": "Perfect",
            "description": "Or dans les endroits, pas de rose visible. La graisse de porc est mise dans le wok, chatoyante et dorée. Sens de viande caramélisée.",
            "action": "Ajouter le doubanjiang et les haricots noirs fermentés sans égoutter."
          },
          {
            "state": "Overdone",
            "description": "Le porc est brun très foncé et les petits morceaux ont séché et sont devenus durs.",
            "action": "Ajouter le stock (ing 09) 2 cuillerées à soupe tôt pour revenir à la normale avant de continuer."
          }
        ]
      },
      "feelCue": "Écoutez le wok : la pop craquante du rendu des graisses est nettement plus piquée que la vapeur humide siffle de porc gris, sous-done. Chase le crackle, pas le sifflement."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "rendered_pork",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "spiced_base",
      "instructions": "Ajouter le doubanjiang au wok et remuer avec le porc pendant 2 minutes à feu vif jusqu'à ce que la pâte s'assombrisse du rouge au brun rouille profond et que l'huile dans le wok transforme un cramoisi vif - c'est la marque de doubanjiang correctement frit. Ajouter les haricots noirs fermentés, l'ail et le gingembre; faire revenir 1 minute de plus. Ajouter les flocons de chili séchés. Le wok doit sentir intensément du chili fermenté, de l'ail et du porc caramélisé – profondément salé et légèrement dur au stade brut, qui se rafraîchira une fois le stock entré.",
      "visualCue": {
        "primaryTarget": "L'huile dans le wok a transformé une brique rouge vif en cramoisi. Le doubanjiang a foncé et frit, pas une pâte rouge crue. Le porc et la pâte sont inséparables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Doubanjiang est encore rouge vif et l'huile est à peine teintée. La pâte n'a pas frit, elle n'a fait que chauffer. L'odeur brute fermentée est dure.",
            "action": "Faire revenir encore 2 minutes à feu vif, en remuant constamment. L'huile doit devenir rouge, ce qui indique que les huiles de chili et les composés fermentés se sont dissous."
          },
          {
            "state": "Perfect",
            "description": "Huile rouge rouille profonde. Doubanjiang a obscurci et caramélisé. Le wok sent l'umami, le chili et la complexité fermentée caramélisée.",
            "action": "Ajouter immédiatement le stock et racler n'importe quel fond du wok."
          },
          {
            "state": "Overdone",
            "description": "Doubanjiang a brûlé — brun foncé à noir aux bords, la fumée amère s'élève.",
            "action": "Réduire immédiatement la chaleur et ajouter le stock. S'il est très amer, recommencez — on ne peut pas sauver le doubanjiang brûlé."
          }
        ]
      },
      "feelCue": "Le wok devrait se sentir activement chaud et la poignée presque trop chaude pour tenir confortablement sans un chiffon. Lorsque vous ajoutez de l'ail, le grésillement doit être immédiat et violent, une forte explosion parfumée de vapeur."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "spiced_base",
        "ing_09",
        "blanched_tofu",
        "ing_10"
      ],
      "outputState": "simmering_mapo",
      "instructions": "Versez le stock dans le wok et grattez les morceaux collés du bas. Porter à mijoter, puis glisser doucement dans les cubes de tofu blanchis à l'aide d'une spatule. Ajouter la sauce soja. Mélanger en faisant doucement basculer le wok et en utilisant une spatule pour déplacer la sauce — ne jamais remuer à travers le tofu avec une cuillère ou il va éclater. Laisser mijoter doucement pendant 4 à 5 minutes afin que le tofu absorbe la sauce de l'extérieur vers l'intérieur. La sauce s'amincira à partir de l'eau du tofu; le lisier d'amidon de maïs dans la prochaine étape le ramènera.",
      "visualCue": {
        "primaryTarget": "Bouillon pourris vif à une mijoter paresseuse avec des cubes de tofu juste visibles sous la surface, intact et uniformément teint un rouge pâle aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de tofu sont blancs et n'ont absorbé aucune couleur. La sauce semble pâle et aqueuse. Seulement 2 minutes.",
            "action": "Laisser mijoter pendant 4 à 5 minutes, balancer doucement le wok — la couleur pourpre qui migre dans la surface du tofu est le signe d'une absorption appropriée."
          },
          {
            "state": "Perfect",
            "description": "Les cubes de tofu ont rougi aux bords et tiennent leur forme. La sauce est vive et bouillonnante. Le bouillon sent tous les aromatiques qui travaillent ensemble.",
            "action": "Procéder à l'épaississement avec la fécule de maïs."
          },
          {
            "state": "Overdone",
            "description": "L'ébullition dure a brisé le tofu en fragments déchiquetés. La sauce est laiteuse à partir de protéines de tofu dissoutes.",
            "action": "Gardez la chaleur très basse pour les étapes restantes. La saveur est fine — seulement la texture a souffert."
          }
        ]
      },
      "feelCue": "Inclinez le wok pour vérifier le niveau de la sauce — il devrait se mettre dans un lac pourpre sous le tofu, ni sec ni aqueux. Le tofu doit être enroulé doucement avec la mijoteuse, chaque cube restant distinct."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "simmering_mapo",
        "ing_11",
        "ing_07",
        "ing_13"
      ],
      "outputState": "mapo_tofu",
      "instructions": "Donnez à la fécule de maïs un remue-méninges rapide (il s'installe rapidement) et versez-la autour du bord du wok dans un cours d'eau lent et mince, berçant doucement le wok en l'ajoutant. Cuire 30 à 60 secondes jusqu'à ce que la sauce s'épaississe à une consistance de revêtement brillante qui s'accroche au tofu. Retirer du feu. Saupoudrer le maïs poivré grillé et moulu Sichuan sur le dessus — ne pas l'ajouter pendant la cuisson, ou les composés engourdissants se dissiperont. Éparpillez le pétoncle tranché. Servir immédiatement sur du riz cuit à la vapeur. La sensation ma (numbing) se construit plus de 30 à 60 secondes après avoir mangé.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge laqué brillant qui enrobe complètement les cubes de tofu. Flacons visibles de pétoncle vert et poudre de maïs poivré sichuan pâle. La sauce ne doit pas s'écouler librement à partir d'une cuillère inclinée — elle doit couler lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et aqueuse — le lisier d'amidon de maïs n'était pas suffisant ou a été ajouté trop lentement. Le tofu nage librement.",
            "action": "Mélanger une autre cuillère à café de fécule de maïs avec de l'eau froide et remuer. Ne pas faire bouillir dur — épaissir doucement."
          },
          {
            "state": "Perfect",
            "description": "Gloire, revêtement, sauce profondément rouge. Il tombe d'une cuillère en gouttes lentes et épaisses. Chaque cube de tofu est laqué. Maïs poivré sichuan visible sous forme de poudre gris-vert. C'est vert vif.",
            "action": "Servir immédiatement dans un bol chaud sur le riz."
          },
          {
            "state": "Overdone",
            "description": "Trop d'amidon de maïs ajouté — la sauce a mis dans une pâte épaisse et collante. Le wok peut montrer de la sauce tirant des bords.",
            "action": "Ajouter le bouillon chaud ou arroser une cuillère à la fois et remuer doucement jusqu'à ce que la sauce s'assouplisse à une consistance de revêtement."
          }
        ]
      },
      "feelCue": "Prenez une bouchée : le tofu doit être frais et soyeux à son cœur et chaud aux bords. La sauce enrobe la bouche pendant un moment, puis le maïs poivré du Sichuan frappe — un bourdonnement électrique le long des côtés de la langue et des lèvres qui commence subtilement et construit pendant 30 secondes. Si vous ne sentez rien, le maïs poivré est resté dans l'impasse."
    }
  ]
};
