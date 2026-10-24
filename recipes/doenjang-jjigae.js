export default {
  "repoId": "master_korean_doenjang-jjigae_001",
  "parentRepoId": null,
  "slug": "doenjang-jjigae",
  "author": "ForkRecipe Kitchen",
  "title": "Doenjang Jjigae",
  "description": "Le ragoût de soja-paste essentiel de la Corée — doenjang mijoté de courgettes, de tofu et de champignons dans un bouillon d'alpage, intensément salé et profondément réconfortant dans chaque bouche.",
  "cuisine": "Coréen",
  "culture": "Séoul",
  "category": "proteins",
  "tags": [
    "coréen",
    "fermenté",
    "soja",
    "ragoût",
    "tofu",
    "confort"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 1,
    "bitter": 2,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Stock d'anchois-kelp (myeolchi dashima yuksu)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "kombu dashi",
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Doenjang (pâte de soja fermentée coréenne)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "pâte miso (utiliser 35g, moins assertive)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Tofu ferme ou moyen, cube 2 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tofu de soie",
        "tofu doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Courgettes coréennes (ou courgettes régulières), demi-lune tranchées",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "courgettes grises",
        "Courge coréenne"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Champignons chiitake, quartiers",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "champignons des huîtres",
        "shiitake séché reconstitué"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons, coupés en longueurs de 3 cm",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "oignon vert"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Gochugaru (glaces coréens)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "gochujang (1 c. à soupe, ajoute plus de douceur)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_08"
      ],
      "outputState": "doenjang_broth",
      "instructions": "Verser le bouillon d'anchois-kelp dans une casserole d'argile (ttukbaegi) ou une casserole moyennement lourde et laisser mijoter légèrement à feu moyen. Ajouter l'ail haché et le gochugaru et mélanger. Ajoutez maintenant le doenjang: ne le déposez pas en entier — au lieu de cela, placez-le dans une passoire fine sur le bouillon mijotant et pressez-le à l'arrière d'une cuillère, ou placez-le directement dans le bouillon et dissolvez-le en massant contre le côté de la casserole avec une cuillère en bois. Les morceaux non dissous de doenjang cuireont inégalement et laisseront des poches fortes et pointues. Une fois complètement dissout, goûtez au bouillon — il devrait être savoureux, légèrement piquant, et avoir une bonne chaleur sous -jacente. Ajustez avec une pincée plus de doenjang si elle a un goût plat.",
      "visualCue": {
        "primaryTarget": "Un bouillon légèrement mijoté, nuageux et ambre-tan avec une faible teinte rougeâtre du gochugaru — opaque plutôt que clair, sentant profondément le soja fermenté avec des tons d'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Doenjang grumes toujours visibles comme des îles à pâte plus foncée flottant dans le stock, ail non dissout assis au fond, bouillon sentant cru et tranchant.",
            "action": "Incorporer vigoureusement et presser les morceaux de doenjang restants contre le côté pot jusqu'à ce que le bouillon soit uniformément nuageux et parfumé."
          },
          {
            "state": "Perfect",
            "description": "Un temps uniformément nuageux, une couleur ambre chaude, mijotant doucement avec des bulles paresseuses, le remplissage de la cuisine avec l'odeur profondément appétissante du soja fermenté et de l'ail - complexe, salé, légèrement funky.",
            "action": "Ajouter les courgettes et les champignons."
          },
          {
            "state": "Overdone",
            "description": "Broth est bouillant agressivement, la surface mousseuse et les notes fermentées plus délicates du doenjang étant chassées. L'odeur est nette et unidimensionnelle.",
            "action": "Réduisez immédiatement la chaleur jusqu'à ce qu'elle mijote doucement."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère de bouillon — il devrait atterrir immédiatement avec un mur de profondeur salée et fermentée qui enveloppe l'arrière de votre gorge. Il devrait y avoir une chaleur douce de construction lente du gochugaru en dessous, pas une netteté. Si elle a un goût plat, le doenjang a besoin de plus de temps pour se dissoudre et fleurir."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "doenjang_broth",
        "ing_04",
        "ing_05"
      ],
      "outputState": "vegetables_simmered",
      "instructions": "Ajouter les demi-lunes de courgettes et les shiitakes dans le bouillon de doenjang. Incorporer délicatement pour submerger et laisser mijoter. Cuire de 5 à 7 minutes jusqu'à ce que les courgettes soient tendres; elles devraient offrir une légère résistance au centre lorsqu'elles sont pressées avec une cuillère, mais ne pas être crues ou croquantes. Les champignons se sont adoucis et ont commencé à libérer leur propre umami dans le bouillon, l'approfondissement plus loin. Ne pas trop cuire les courgettes pour les bouillir; il devrait tenir sa forme tout en devenant soyeux et entièrement cuit à travers.",
      "visualCue": {
        "primaryTarget": "Les demi-lunes de Zucchini assises dans le bouillon sont légèrement translucides aux bords et vert jade au centre, les champignons ont obscurci et adouci, et le bouillon a pris une couleur légèrement plus profonde de leur liquide libéré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Zucchini est encore blanc opaque et goût cru au centre, la surface coupée n'est pas encore adoucie. Les champignons semblent inchangés par rapport à leur état brut.",
            "action": "Continuer à mijoter — 2–3 minutes de plus. Appuyez sur un morceau de courgette avec une cuillère; il devrait juste commencer à produire."
          },
          {
            "state": "Perfect",
            "description": "Zucchini est juste tendre et productif, vert jade, tenant sa forme mais sans croquant brut. Les champignons sont tendres et sombres, entièrement assaisonnés par le bouillon.",
            "action": "Ajouter le tofu doucement."
          },
          {
            "state": "Overdone",
            "description": "Zucchini s'est effondré jusqu'à un mousquet pâle et aqueux, libérant de l'eau dans le bouillon et le diluant. Les champignons sont durs et difficiles à cuire.",
            "action": "Ajouter le tofu et finir le ragoût — les légumes ne peuvent pas être récupérés, mais le reste du plat peut être apporté à un bon résultat."
          }
        ]
      },
      "feelCue": "Percez un morceau de courgette à son point le plus épais avec une baguette — il devrait glisser à travers avec une résistance douce, même, la façon dont une pêche mûre se sent sous pression. Pas musclé, pas cru."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "vegetables_simmered",
        "ing_03",
        "ing_06"
      ],
      "outputState": "assembled_jjigae",
      "instructions": "Ajouter le tofu cube en douceur au ragoût mijotant, le nicher entre les légumes sans remuer agressivement — le tofu est fragile et se décompose facilement, et les grands cubes intacts font partie de l'identité visuelle et texturale du plat. Ajouter les longueurs de pétoncle. Laisser mijoter 3 à 4 minutes de plus, juste assez pour que le tofu puisse chauffer complètement et absorber une partie du bouillon. Le tofu doit conserver sa forme cube; ne pas remuer le ragoût une fois le tofu entré, il suffit d'incliner doucement le bouillon de pot ou de cuillère sur le dessus des cubes de tofu pour cuire la surface supérieure.",
      "visualCue": {
        "primaryTarget": "Des cubes de tofus blancs, assis intacts dans le bouillon fauve aux côtés des courgettes jade et des champignons foncés, les anneaux de pétoncle ajoutant vert vif, la surface du bouillon tremblant doucement de la mijoter en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de tofu sont froids au centre — la coupe révèle une fracture de température, l'intérieur encore pâle et frais, la surface à peine chauffée.",
            "action": "Laisser mijoter encore 2 minutes, en cuillerant du bouillon chaud sur le dessus de chaque cube si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Le tofu est uniformément réchauffé à travers, sa surface a pris une texture légèrement plus soyeuse du bouillon mijotant, l'échon est simplement flétri et vert vif. Le ragoût a l'air complet.",
            "action": "Retirer du feu et finir avec de l'huile de sésame."
          },
          {
            "state": "Overdone",
            "description": "Le tofu s'est cassé en morceaux d'agitation agressive ou d'ébullition prolongée; le ragoût semble désordonné et le tofu a libéré son eau dans le bouillon, le diluant.",
            "action": "La saveur n'est pas affectée; terminer avec l'huile de sésame et servir, en se concentrant sur la louche plutôt que la cuillère pour garder les morceaux de tofu restants intacts."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le dos d'une cuillère contre un cube de tofu — il devrait résister légèrement, se sentir chaud tout le long du chemin, et revenir sans s'effondrer. S'il fait froid ou si le centre a un squeak caoutchouteux, il faut plus de temps."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "assembled_jjigae",
        "ing_09"
      ],
      "outputState": "finished_doenjang_jjigae",
      "instructions": "Retirez le pot du feu et arrosez l'huile de sésame grillée dans un mince ruisseau sur la surface du ragoût. Ne le remuez pas; laissez-le baigner et briller sur le dessus. Portez l'ensemble du vase d'argile directement à la table — doenjang jjigae est servi bouillonnant chaud, traditionnellement dans un vase d'argile qui conserve la chaleur tout au long du repas. Placez-le sur une trivette et une louche dans des bols individuels sur du riz cuit à la vapeur. Le ragoût doit être mangé immédiatement pendant que la tuyauterie est chaude; les saveurs sont à leur plus vif dans les cinq premières minutes de service.",
      "visualCue": {
        "primaryTarget": "Un ragoût crépus dans le pot, légèrement bouillonnant, une fine lécherette d'huile de sésame captant la lumière à la surface, des cubes de tofus blancs et des courgettes en jade visibles sous, des anneaux de pétoncle vert vif partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Huile de sésame non encore ajoutée, le ragoût semble plat à la surface sans éclat, et l'arôme manque la note supérieure aromatique de noix qui définit le plat fini.",
            "action": "Arroser l'huile de sésame à travers la surface avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Un ragoût complexe et aromatique avec une surface brillante. L'odeur est à la fois funky, savoureuse, noisette et légèrement épicée, profondément coréenne. Il devrait vous donner envie de vous pencher et de respirer profondément.",
            "action": "Servir immédiatement dans la casserole, avec du riz et du banchan."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût a été réchauffé plusieurs fois et le tofu est devenu caoutchouteux et serré, les courgettes sont grises et arrosées, et les saveurs du doenjang se sont aplaties.",
            "action": "Ajouter une cuillère fraîche de doenjang dissous dans l'eau chaude et quelques gouttes d'huile de sésame pour raviver l'arôme et la profondeur."
          }
        ]
      },
      "feelCue": "La première cuillère devrait vous frapper avec chaleur avant que les saveurs s'enregistrent — c'est un plat défini par sa température autant que son goût. Le tofu devrait être presque soyeux, les courgettes tendres mais présentes, et le bouillon devrait laisser un arrière-goût long, salé, légèrement amer du doenjang qui s'attarde agréablement pendant des minutes."
    }
  ]
};
