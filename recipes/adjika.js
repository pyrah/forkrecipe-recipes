export default {
  repoId: "master_georgian_adjika_001",
  parentRepoId: null,
  slug: "adjika",
  author: "ForkRecipe Kitchen",

  title: "Adjika",
  description: "Pâte crue et éclatante du Caucase, préparée avec des piments frais, de l’ail et du fenugrec bleu. Puissamment aromatique, traversée de notes herbacées et épicées, elle relève tout ce qu’elle accompagne.",
  cuisine: "Géorgienne",
  culture: "Caucasienne",
  category: "sauces",

  tags: ["adjika", "georgian", "caucasian", "pâte-de-piment", "fermentée", "condiment"],
  difficulty: 2,
  activeTime: "25 min",
  totalTime: "2 hr 25 min",
  ratioSystem: "parts",

  stars: 721,
  forks: 58,
  contributors: 24,
  license: "CC-BY-SA",
  createdAt: "2025-01-15",
  updatedAt: "2025-04-20",

  flavorRadar: { sweet: 1, salty: 3, sour: 2, bitter: 2, umami: 2, heat: 5 },

  ingredients: [
    { ingId: "ing_01", role: "Spice",     name: "Piments rouges frais et forts (serrano ou cayenne), équeutés et épépinés", ratioValue: 40, defaultUnit: "parts", substitutions: ["piments rouges séchés réhydratés"] },
    { ingId: "ing_02", role: "Allium",    name: "Gousses d’ail pelées",                 ratioValue: 15, defaultUnit: "parts", substitutions: [] },
    { ingId: "ing_03", role: "Aromatic",  name: "Fenugrec bleu (utskho suneli)",         ratioValue: 5,  defaultUnit: "parts", substitutions: ["fenugrec classique, en quantité réduite", "coriandre moulue"] },
    { ingId: "ing_04", role: "Herb",      name: "Coriandre fraîche, feuilles et tiges tendres", ratioValue: 10, defaultUnit: "parts", substitutions: ["persil frais"] },
    { ingId: "ing_05", role: "Seasoning", name: "Gros sel, pour la macération et l’assaisonnement", ratioValue: 4, defaultUnit: "parts", substitutions: [] },
    { ingId: "ing_06", role: "Acid",      name: "Vinaigre de vin blanc",                     ratioValue: 5,  defaultUnit: "parts", substitutions: ["vinaigre de cidre"] },
  ],

  processNodes: [
    {
      nodeId: "step_1",
      action: "Salt",
      inputs: ["ing_01", "ing_05"],
      outputState: "macerated_peppers",
      instructions: "Coupez les piments en deux et retirez les graines et les membranes en portant des gants pendant toute la manipulation. Mélangez-les avec la moitié du sel puis étalez-les sur un torchon propre ou du papier absorbant. Laissez-les à découvert 1 à 2 heures pour évacuer l’excès d’humidité. Cette étape de salage et de déshydratation concentre leur saveur et évite une adjika trop liquide. Les piments vont visiblement réduire et devenir légèrement translucides.",
      visualCue: {
        primaryTarget: "Les piments ont réduit de 20 à 30 % et sont flétris. Le torchon est visiblement humide.",
        spectrum: [
          { state: "Underdone", description: "Les piments sont encore gonflés et fermes. Le torchon est sec : seuls 30 minutes se sont écoulées.", action: "Poursuivez le salage une heure de plus. La déshydratation est essentielle à la texture." },
          { state: "Perfect",   description: "Les piments sont légèrement flétris et ont perdu environ un quart de leur volume. Le torchon est humide ; pressés, ils rendent très peu de liquide.", action: "Séchez-les en les tamponnant, puis passez au broyage." },
          { state: "Overdone",  description: "Les piments ont séché plus de quatre heures et sont très ratatinés. Ils seront plus salés que souhaité.", action: "Rincez-les brièvement à l’eau froide, séchez-les en les tamponnant et réduisez le sel ajouté ensuite." },
        ],
      },
      feelCue: "Les piments macérés doivent être flétris et légèrement coriaces. Pressez-en un entre les doigts : il doit céder facilement, sans craquer, et ne rendre qu’un peu de liquide.",
    },
    {
      nodeId: "step_2",
      action: "Pound",
      inputs: ["macerated_peppers", "ing_02", "ing_03", "ing_04", "ing_05", "ing_06"],
      outputState: "finished_adjika",
      instructions: "Traditionnellement, l’adjika se prépare au mortier de pierre. Un robot ménager convient aussi, mais donne une pâte un peu moins vive. Pilez ou mixez par à-coups l’ail avec le reste du sel jusqu’à obtenir une pâte grossière. Ajoutez les piments macérés et continuez à piler ou mixer jusqu’à ce qu’ils se défassent. Incorporez le fenugrec bleu, la coriandre et le vinaigre. Travaillez le tout jusqu’à obtenir une pâte épaisse et fibreuse, encore texturée par les peaux de piment et les tiges d’herbes. Goûtez : elle doit être très piquante, salée, herbacée et légèrement acidulée.",
      visualCue: {
        primaryTarget: "Pâte rouge orangé éclatante, grossière et fibreuse, parsemée de points verts d’herbes et brillante de l’huile des piments.",
        spectrum: [
          { state: "Underdone", description: "De gros morceaux de piment restent visibles et l’ail est encore en morceaux ; les ingrédients ne sont pas bien amalgamés.", action: "Continuez à piler ou à mixer. L’adjika doit être bien travaillée pour mêler les saveurs." },
          { state: "Perfect",   description: "Pâte grossière et fibreuse, ponctuée d’herbes, rouge orangé avec des touches de vert. Son parfum intense mêle le piquant du piment, l’ail et les notes chaudes et terreuses du fenugrec bleu.", action: "Tassez dans un bocal stérilisé, recouvrez d’une fine couche de vinaigre et réfrigérez." },
          { state: "Overdone",  description: "La pâte est devenue parfaitement lisse et homogène. C’est une variante abkhaze valable, mais elle perd une partie de la texture géorgienne.", action: "Continuez : une adjika lisse reste authentique et délicieuse." },
        ],
      },
      feelCue: "Frottez une petite quantité d’adjika entre vos doigts : vous devez sentir les fibres du piment et les fines tiges d’herbes avant que les huiles n’imprègnent la peau. Le piquant se fait sentir presque immédiatement, surtout au contact de petites coupures ou égratignures.",
    },
  ],
};
