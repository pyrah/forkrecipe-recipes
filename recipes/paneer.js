export default {
  "repoId": "master_indian_paneer_001",
  "parentRepoId": null,
  "slug": "paneer",
  "author": "ForkRecipe Kitchen",
  "title": "Paneer (Fresh Indian Cheese)",
  "description": "Lait entier caillé au moment précis avec du jus de citron, drainé à travers la mousseline, et pressé sous le poids dans un bloc ferme, donnant un bloc de fromage blanc frais — doux, propre, et avec une trempe caractéristique contre les dents. La protéine fondamentale de la cuisine végétarienne indienne, faite en 90 minutes à partir de deux ingrédients.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "proteins",
  "tags": [
    "indienne",
    "fromage",
    "fromage frais",
    "lait",
    "citron",
    "végétarien",
    "Sans gluten",
    "base"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier (au moins 3,5 % de matières grasses — ne pas utiliser d'UHT)",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": [
        "lait de bison (plus riche, plus ferme — traditionnel)",
        "lait de chèvre plein gras"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc (30g)",
        "solution d'acide citrique (10g d'acide citrique dans 50ml d'eau)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide (pour le rinçage)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel de mer fin (facultatif, travaillé avant pressage)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_01"
      ],
      "outputState": "hot_milk",
      "instructions": "Verser le lait dans une grande casserole à fond lourd. Mettre à feu moyen et porter lentement à un peu moins d'ébullition — 88 à 90°C (190 à 194°F). Incorporer occasionnellement pour éviter les brûlures au fond. Regardez attentivement : c'est la fenêtre de température la plus critique. Vous voulez que le lait soit presque bouillant — de petites bulles s'élevant rapidement et agressivement du fond, de la vapeur s'élevant, et la surface commençant à trembler et à mousser — mais pas un ébullition. Un ébullition en rouleau fera brûler les solides de lait et donnera au paneer un goût de lait légèrement amer et cuit. Un thermomètre est fortement recommandé.",
      "visualCue": {
        "primaryTarget": "Le lait est en pleine vapeur. De fines bulles s'élèvent vigoureusement de la base et des côtés. La surface commence à mousser et trembler aux bords. Pas encore un ébullition complet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est chaud mais seulement quelques petites bulles s'élèvent paresseusement. La surface est toujours là. À cette température, l'acide ne sert pas efficacement le lait.",
            "action": "Continuer le chauffage sur moyenne. Ne vous précipitez pas en soulevant la chaleur jusqu'à la hauteur, ce qui atténue la vitre."
          },
          {
            "state": "Perfect",
            "description": "Des bulles vigoureuses de la base, de la vapeur qui roulent sur la surface, de la mousse se formant aux bords. 88-90°C sur un thermomètre.",
            "action": "Retirer du feu et ajouter l'acide immédiatement."
          },
          {
            "state": "Overdone",
            "description": "ébullition complète, le lait déborde ou a brûlé sur le fond.",
            "action": "Retirer immédiatement du feu. Sentez le fond — s'il est brûlé, ne grattez pas. Verser soigneusement dans un pot propre, laissant le fond brûlé derrière."
          }
        ]
      },
      "feelCue": "Tenez votre main à 20 cm au-dessus du pot — vous devriez sentir une chaleur importante rayonner vers le haut, et voir un panache continu de vapeur. La cuisine sentira fortement le lait chaud et sucré."
    },
    {
      "nodeId": "step_2",
      "action": "Acides",
      "inputs": [
        "hot_milk",
        "ing_02"
      ],
      "outputState": "curdled_milk",
      "instructions": "Retirer la casserole du feu. Verser le jus de citron dans un ruisseau lent et stable autour du périmètre du lait chaud en remuant très doucement — deux ou trois brassages lents. Dans les 30 à 60 secondes, le lait commencera à se séparer en caillés blancs et en lactosérum vert jaunâtre. Une fois la séparation commencée, arrêtez de remuer — l'agitation à ce stade rend le caillé dur et caoutchouteux. Si le lait n'est pas complètement séparé après 90 secondes (de grandes zones de lait blanc non durci visibles), ajouter une autre cuillère à soupe de jus de citron et remuer doucement une fois. Laisser les caillés s'asseoir dans le lactosérum pendant 5 minutes — ce reste développe leur structure.",
      "visualCue": {
        "primaryTarget": "Lactosérum vert jaunâtre clair avec des caillés blanc, ressemblant à du chou-fleur qui flottent dedans. La séparation doit être propre et complète — très peu de couleur blanche restant dans le liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait semble légèrement caillé à la surface, mais la majorité est encore blanche et laiteuse. La laine est encore pâle et opaque.",
            "action": "Ajouter une autre cuillère à soupe d'acide, remuer une fois et attendre 90 secondes de plus."
          },
          {
            "state": "Perfect",
            "description": "Lactosérum clair, vert-jaune, avec tous les solides blancs empilés en caillés nacrés distincts. Une séparation propre — la « rupture » du lait.",
            "action": "Reposez 5 minutes non perturbées puis égouttez."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté trop d'acide — les caillés sont très fins et miettes, le lactosérum est très acide.",
            "action": "Continuez — le panneau sera plus friable mais toujours utilisable. Rincer très soigneusement sous l'eau froide pour éliminer l'excès d'acide."
          }
        ]
      },
      "feelCue": "Sentez le lactosérum — il doit sentir légèrement le citron et le lait, agréablement frais, pas agressivement aigre. S'il sent dur et très acide, vous avez utilisé trop d'acide pour le prochain lot."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "curdled_milk",
        "ing_03",
        "ing_04"
      ],
      "outputState": "drained_curds",
      "instructions": "Étaler une calandre avec deux couches de tissu de fromage ou un tissu de coton mince et propre. Verser lentement les caillés et lactosérums dans la calandre doublée — verser rapidement fait échapper les caillés fins à travers le tissu. Rassemblez le tissu autour du caillé et rincer doucement le caillé avec de l'eau froide pour laver l'acide du citron, ce qui empêche le panneau d'être aigre et raffermit la texture. En cas d'assaisonnement, saupoudrer le sel sur les caillés et travailler doucement avec des mains propres avant de ramasser le tissu. Tordre le chiffon dans une balle serrée et serrer fermement pour enlever le plus de lactosérum possible. Le caillé devrait maintenant être une masse compacte, uniformément blanche.",
      "visualCue": {
        "primaryTarget": "Une boule compacte de caillés dans le tissu — blanc, non jaunâtre, avec le tissu montrant des taches sombres de lactosérum exprimé. Les caillés se tiennent ensemble lorsque le tissu est pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les courbures sont encore très lâches et aqueuses. La laine coule librement quand le tissu est à peine pressé.",
            "action": "Serrez plus fermement. La majorité du lactosérum doit être expulsée avant d'être pressée."
          },
          {
            "state": "Perfect",
            "description": "Les courbes se tiennent ensemble comme une masse cohésive lorsque vous appuyez à travers le tissu. Le whey exprimé n'est maintenant qu'un filet, pas un ruisseau.",
            "action": "Formez un disque et appuyez sous le poids."
          },
          {
            "state": "Overdone",
            "description": "Les courbures ont été pressées si vigoureusement qu'elles sont compactantes mais aussi très sèches et friables.",
            "action": "Continuer à appuyer — le panneau sera légèrement sec mais toujours utilisable."
          }
        ]
      },
      "feelCue": "Appuyez sur les cords recouverts de tissu dans vos deux paumes — vous devriez sentir les cords se déplacer et compacter comme une masse unifiée, pas slosh ou séparé. Le tissu doit se sentir chaud et humide mais ne plus couler librement."
    },
    {
      "nodeId": "step_4",
      "action": "Appuyez sur",
      "inputs": [
        "drained_curds"
      ],
      "outputState": "finished_paneer",
      "instructions": "Formez les cords drainés en un disque ou un bloc plat tout en restant dans le tissu. Placer sur une surface plane, plier le tissu soigneusement sur le dessus, et placer un poids lourd sur le dessus — une casserole en fonte, un pot d'eau, ou un poids de 2 kg. Appuyez de 45 à 60 minutes à température ambiante. Plus la presse est longue et lourde, plus la vitre est ferme. Après avoir pressé, déballé et immergé dans de l'eau froide pendant 10 minutes, c'est l'étape secrète qui donne au panneau sa couleur propre et blanche caractéristique et raffermit la texture. Laisser sécher et utiliser immédiatement, ou réfrigérer dans l'eau froide jusqu'à 4 jours.",
      "visualCue": {
        "primaryTarget": "Un bloc blanc ferme avec une surface lisse et des bords d'angle droit propres où le tissu l'a pressé. En tranches, l'intérieur est blanc uniforme avec un grain fin et dense.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paneer est encore doux et friable — il se casse quand vous essayez de le couper. L'humidité est toujours visible à l'intérieur.",
            "action": "Recapturer et presser encore 30 minutes sous un poids plus lourd."
          },
          {
            "state": "Perfect",
            "description": "Bloc ferme qui tient sa forme lors de la coupe. Couper proprement avec un couteau avec une légère pression du fromage contre la lame. Blanc vif. Crache mal contre les dents.",
            "action": "Submerger à l'eau froide 10 minutes, puis couper et utiliser ou réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Paneer est très dense et sec, avec une texture dure et granuleuse. Il a été trop pressé.",
            "action": "Faire tremper dans l'eau chaude pendant 15 minutes avant la cuisson, ce qui adoucit considérablement la texture."
          }
        ]
      },
      "feelCue": "Tapez la surface de la vitre pressée avec un doigt — il devrait produire un bruit terne, pas un son creux ou un doux donner. Pressez doucement un coin entre deux doigts : il devrait se sentir ferme tofu, résistant et sec, retournant à la forme après le relâchement de la pression."
    }
  ]
};
