import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

type SpecValue = 'check' | 'empty' | string | { logo: string; alt: string; className?: string };

const introParagraphs = [
  'Now the fun part for all you technically adept buyers…',
  'One of our biggest points of pride is that when engineers come to see our product, they buy our product. We ask our clients to pay us a visit (or ask for a site visit), then go and compare the sheer quality difference between a Mr.Pergola system compared to, literally, any other pergola on the market, Bar None! Mr.Pergola comes on top.',
  'We studied our competitors, even went as far as buying competing products to see what works and doesn’t for the North American market. We came up with our own solution…. 2 different systems for 2 different use cases. 3 Season and 4 Season….',
  'Well over a thousand hours of engineering went into our design and development, add another small fortune for testing and validation by 2 engineers who signed off on the design.',
];

const classicVsModernRows: Array<{ feature: string; classic: SpecValue; modern: SpecValue }> = [
  { feature: 'Adjustable Louvres', classic: 'check', modern: 'check' },
  { feature: 'Louvres Lock at any angle', classic: 'check', modern: 'check' },
  { feature: 'Manual Mechanism', classic: { logo: '/assets/technicals/Lock-Small-Logo.jpg', alt: 'LockDrives' }, modern: { logo: '/assets/technicals/Lock-Small-Logo.jpg', alt: 'LockDrives' } },
  { feature: 'Electric Mechanism Option', classic: { logo: '/assets/technicals/Somfy-Logo.jpg', alt: 'Somfy', className: 'h-7 w-auto' }, modern: { logo: '/assets/technicals/Somfy-Logo.jpg', alt: 'Somfy', className: 'h-7 w-auto' } },
  { feature: 'Built in rails for curtains (left to right)', classic: 'check', modern: 'check' },
  { feature: 'Electric Curtains (vertical movement)', classic: 'check', modern: 'check' },
  { feature: 'Heavy Gage Aluminum', classic: 'check', modern: 'check' },
  { feature: 'Rain Run Off', classic: 'Any direction of louvres', modern: 'Integrated Gutters' },
  { feature: 'Span (distance between posts), both deep and wide', classic: 'up to 20ft', modern: 'up to 20ft' },
  { feature: 'Grade 8 Bolts (McMaster: 90128A714)', classic: 'check', modern: 'check' },
  { feature: '4 Season Capable', classic: 'check', modern: 'empty' },
];

const seasonRows: Array<{ feature: string; threeSeason: SpecValue; fourSeason: SpecValue }> = [
  { feature: '6063 Aluminum Beams ', threeSeason: 'check', fourSeason: 'check' },
  { feature: 'Additional Support Beams', threeSeason: 'If necessary or desired for lights/heaters', fourSeason: 'check' },
  { feature: 'Extrusion Profiles', threeSeason: '6″', fourSeason: '6″' },
  { feature: 'Aluminum Post 6061', threeSeason: 'check', fourSeason: 'check' },
  { feature: 'Support/”Brackets”-Thickness', threeSeason: '1/8″', fourSeason: '1/4″' },
  { feature: 'Compatible Accessories', threeSeason: 'check', fourSeason: 'check' },
  { feature: 'Internal Reinforcements', threeSeason: '18″ and over', fourSeason: 'check' },
  { feature: 'Dynamic charge (constant wind-closed louvres)', threeSeason: '208KM/HR', fourSeason: '208KM/HR' },
  { feature: 'Static charge (Snow)', threeSeason: 'First snow fall only (2-4)', fourSeason: '36″/88lbs' },
];

const testImages = [
  { title: 'Inside Out Test', src: '/assets/technicals/Inside-Test.png' },
  { title: 'Inside Out/Mr.Pergola', src: '/assets/technicals/Inside-Out-Test.jpg' },
  { title: 'Outside In-1/Mr.Pergola', src: '/assets/technicals/Outside-In-Test.jpg' },
  { title: 'Mr.Pergola Corner Test', src: '/assets/technicals/Corner.png' },
  { title: 'Mr.Pergola Corner Aluminum Cover', src: '/assets/technicals/Aluminimum-Cover.jpg' },
  { title: 'Competition Corner', src: '/assets/technicals/Competition-Corner.jpg' },
];

const standardWidths = [12, 14, 16, 18, 20];
const standardDepths = [10, 12, 14, 16, 18, 20];

const frenchCopy: Record<string, string> = {
  'Technicals': 'Techniques',
  'Now the fun part for all you technically adept buyers…': 'Passons maintenant à la partie intéressante pour les acheteurs à l’esprit technique…',
  'One of our biggest points of pride is that when engineers come to see our product, they buy our product. We ask our clients to pay us a visit (or ask for a site visit), then go and compare the sheer quality difference between a Mr.Pergola system compared to, literally, any other pergola on the market, Bar None! Mr.Pergola comes on top.': 'L’une de nos plus grandes fiertés est que lorsque des ingénieurs viennent voir notre produit, ils l’achètent. Nous invitons nos clients à nous rendre visite (ou à demander une visite sur place), puis à comparer la différence de qualité entre un système Mr.Pergola et, littéralement, toute autre pergola sur le marché. Sans exception, Mr.Pergola arrive en tête.',
  'We studied our competitors, even went as far as buying competing products to see what works and doesn’t for the North American market. We came up with our own solution…. 2 different systems for 2 different use cases. 3 Season and 4 Season….': 'Nous avons étudié nos concurrents, allant même jusqu’à acheter des produits concurrents pour voir ce qui fonctionne ou non pour le marché nord-américain. Nous avons développé notre propre solution… 2 systèmes différents pour 2 usages différents. 3 saisons et 4 saisons…',
  'Well over a thousand hours of engineering went into our design and development, add another small fortune for testing and validation by 2 engineers who signed off on the design.': 'Bien plus de mille heures d’ingénierie ont été consacrées à notre conception et à notre développement, en plus d’un investissement important pour les tests et la validation par 2 ingénieurs qui ont approuvé la conception.',
  'Permanent system': 'Système permanent',
  '3-SEASON PERMANENT PERGOLA': 'PERGOLA PERMANENTE 3 SAISONS',
  'First, the most solid permanent 3-Season Pergola. Where you can support some snow (3-4inches), but is built to be left open in winter. As the pics below show, we use high grade steel and aluminum. Double powder coated for superior protection. We DO NOT use Stainless Steel to build our corners, they are simply not as strong as steel.': 'D’abord, la pergola permanente 3 saisons la plus solide. Elle peut supporter un peu de neige (3 à 4 pouces), mais elle est conçue pour rester ouverte en hiver. Comme le montrent les images ci-dessous, nous utilisons de l’acier et de l’aluminium de haute qualité, avec un double revêtement en poudre pour une protection supérieure. Nous n’utilisons PAS d’acier inoxydable pour fabriquer nos coins, car il n’est tout simplement pas aussi solide que l’acier.',
  'One way to see the strength of any pergola is by looking at the corner brackets… since corners give strength. Most of our competitors use flimsy bent sheet metal with #12 screws to make a corner (pic below)… we use 10g steel and 6 Grade-8, half-inch bolts, (yes half inch/ Fastenal: 11588102 ) for each corner. See pics below. Our unique corner bracket also has a 4”x 4” HSS underneath going down 12” to help against the wind. The electroplated black zinc bolts of the posts (3/8” x 5”) keep the entire frame in place. We’ve installed our pergolas by lakes, rooftops, rivers, by highways and never, ever, have we had any problems. In the rare cases where need be, we created an additional bracketing system to shore it up further, where we can stand up to constant Cat4 Hurricane winds (156mph-251km/hr). There is simply no other pergola that can stand up to Mother Nature like Mr.Pergola can. Period. Should your project require any further support brackets against even higher winds, we’ve got you covered as well.': 'Une façon de constater la solidité d’une pergola est de regarder les supports de coin… puisque les coins donnent de la résistance. La plupart de nos concurrents utilisent une mince tôle pliée avec des vis #12 pour former un coin (voir l’image ci-dessous)… nous utilisons de l’acier 10 ga et 6 boulons Grade 8 d’un demi-pouce (oui, un demi-pouce / Fastenal : 11588102) pour chaque coin. Voir les images ci-dessous. Notre support de coin unique comprend aussi un HSS 4” x 4” en dessous, descendant de 12”, pour aider contre le vent. Les boulons en zinc noir électroplaqué des poteaux (3/8” x 5”) maintiennent toute la structure en place. Nous avons installé nos pergolas près de lacs, sur des toits-terrasses, près de rivières, près d’autoroutes, et nous n’avons jamais eu de problème. Dans les rares cas où cela est nécessaire, nous avons créé un système de renfort additionnel qui peut résister à des vents constants de catégorie 4 (156 mph / 251 km/h). Aucune autre pergola ne peut résister à Mère Nature comme Mr.Pergola. Point final. Si votre projet exige des supports supplémentaires contre des vents encore plus forts, nous pouvons aussi vous aider.',
  'Winter capable': 'Conçu pour l’hiver',
  '4-SEASON PERMANENT PERGOLA': 'PERGOLA PERMANENTE 4 SAISONS',
  'Now for the 4-Season Pergola… It’s nothing short of a Beast! The only pergola in the world that can handle 3 feet of wet snow, which means you can use it carefree all winter long. We see other companies talking about Snow Load in weight (ex: 6000lbs-11000lbs), but this is misleading. SNOW IS HEAVY! A few thousand pounds amounts to a few inches of snow…none come close to 3 feet (ex:22,000lbs on a 16×16)! … for the record, our snow load capacity is 88 pounds per square foot. That’s double anyone else’s claims. The difference between our claims and our competitors is that we have our pergolas tested by specialized engineering firms and a minimum of two engineers signed off on it. We don’t simply put some weight on the pergola and make a claim, we invested, heavily, so that we can guarantee our claims!': 'Passons maintenant à la pergola 4 saisons… c’est une vraie bête! La seule pergola au monde capable de supporter 3 pieds de neige mouillée, ce qui signifie que vous pouvez l’utiliser tout l’hiver sans inquiétude. Nous voyons d’autres entreprises parler de charge de neige en poids (ex. : 6000 lb à 11000 lb), mais c’est trompeur. LA NEIGE EST LOURDE! Quelques milliers de livres représentent seulement quelques pouces de neige… aucune ne s’approche de 3 pieds (ex. : 22000 lb sur une 16×16)! Pour mémoire, notre capacité de charge de neige est de 88 livres par pied carré. C’est le double des affirmations des autres. La différence entre nos affirmations et celles de nos concurrents, c’est que nos pergolas sont testées par des firmes d’ingénierie spécialisées et qu’au moins deux ingénieurs ont signé la conception. Nous ne mettons pas simplement du poids sur une pergola pour faire une déclaration; nous avons investi massivement afin de garantir nos affirmations!',
  'Remember we can go up to 20ft between each column. Whether width or projection. Where others stop at 12ft depth, we keep going to 20ft deep. A 20’x20’ pergola is still installed with only 4 columns or attached with two at the front and wall mounted at the back. (See beam thicknesses below).': 'N’oubliez pas que nous pouvons aller jusqu’à 20 pi entre chaque colonne, en largeur comme en projection. Là où les autres s’arrêtent à 12 pi de profondeur, nous allons jusqu’à 20 pi. Une pergola 20’ x 20’ s’installe toujours avec seulement 4 colonnes, ou avec deux colonnes à l’avant et une fixation murale à l’arrière. (Voir les épaisseurs de poutres ci-dessous.)',
  'The 4-Season pergola is of course a little more expensive given the quantity of materials we use. Aluminum and steel are sold by weight, period. The corner brackets are quarter inch (1/4”) thick double coated steel, properly covered to last, frankly, as long as you want it. There are no points of failure. We studied what others have done, found the weak points and solidified our system, essentially learning from their mistakes and weaknesses. There is a reason we can go up to 20ft wide and 20ft deep with only 4 posts/columns…and why our louvres (blades) can surpass the frame by 4ft, without dropping/bending. See images below and request a sample!': 'La pergola 4 saisons est bien sûr un peu plus chère en raison de la quantité de matériaux utilisée. L’aluminium et l’acier se vendent au poids, point. Les supports de coin sont en acier doublement revêtu d’un quart de pouce (1/4”), correctement protégés pour durer aussi longtemps que vous le souhaitez. Il n’y a pas de points de défaillance. Nous avons étudié ce que les autres ont fait, trouvé les points faibles et renforcé notre système, en apprenant essentiellement de leurs erreurs. Il y a une raison pour laquelle nous pouvons aller jusqu’à 20 pi de largeur et 20 pi de profondeur avec seulement 4 poteaux/colonnes… et pourquoi nos louvres peuvent dépasser le cadre de 4 pi sans s’affaisser ni plier. Voir les images ci-dessous et demandez un échantillon!',
  'The 4-Season pergola option is perfect for those who want to use their patio in winter because they have an outdoor kitchen, love to BBQ, want to store their furniture without having to cover it or simply enjoy taking a break outside in winter with a firepit and either a hot chocolate or a cigar…': 'L’option pergola 4 saisons est parfaite pour ceux qui veulent utiliser leur terrasse en hiver parce qu’ils ont une cuisine extérieure, aiment faire du BBQ, veulent ranger leurs meubles sans les couvrir, ou simplement profiter d’une pause dehors en hiver avec un foyer, un chocolat chaud ou un cigare…',
  '100% Waterproof': '100 % étanche',
  'CUSTOMIZATION': 'PERSONNALISATION',
  'Our classic pergola can be customized like no other. We can do anything from height extension, L-Shaped, extended louvres or extended sub-frame for more coverage when you have a smaller footprint to work with. The attached pergola is an option if your home’s exterior can support it. We have special mounting brackets for this purpose.': 'Notre pergola classique peut être personnalisée comme aucune autre. Nous pouvons réaliser des extensions de hauteur, des formes en L, des louvres prolongées ou un sous-cadre prolongé pour offrir plus de couverture lorsque l’espace au sol est limité. La pergola attachée est une option si l’extérieur de votre maison peut la supporter. Nous avons des supports de montage spéciaux à cet effet.',
  'Classic Pergola': 'Pergola classique',
  'Modern Pergola': 'Pergola moderne',
  '3-Season | Louvres open in winter': '3 saisons | Lames ouvertes en hiver',
  '4-Season | Louvres closed in winter': '4 saisons | Lames fermées en hiver',
  'Classic vs Modern': 'Classique vs Moderne',
  '3-Season vs 4-Season': '3 saisons vs 4 saisons',
  'Feature': 'Caractéristique',
  'Adjustable Louvres': 'Lames ajustables',
  'Louvres Lock at any angle': 'Lames verrouillables à tout angle',
  'Manual Mechanism': 'Mécanisme manuel',
  'Electric Mechanism Option': 'Option de mécanisme électrique',
  'Built in rails for curtains (left to right)': 'Rails intégrés pour rideaux (gauche à droite)',
  'Electric Curtains (vertical movement)': 'Rideaux électriques (mouvement vertical)',
  'Heavy Gage Aluminum': 'Aluminium de fort calibre',
  'Rain Run Off': 'Évacuation de la pluie',
  'Any direction of louvres': 'Toute direction des lames',
  'Integrated Gutters': 'Gouttières intégrées',
  'Span (distance between posts), both deep and wide': 'Portée (distance entre poteaux), en profondeur et en largeur',
  'up to 20ft': 'jusqu’à 20 pi',
  'Grade 8 Bolts (McMaster: 90128A714)': 'Boulons Grade 8 (McMaster : 90128A714)',
  '4 Season Capable': 'Compatible 4 saisons',
  '6063 Aluminum Beams ': 'Poutres en aluminium 6063 ',
  'Additional Support Beams': 'Poutres de soutien additionnelles',
  'If necessary or desired for lights/heaters': 'Si nécessaire ou souhaité pour lumières/chauffages',
  'Extrusion Profiles': 'Profils d’extrusion',
  'Aluminum Post 6061': 'Poteau en aluminium 6061',
  'Support/”Brackets”-Thickness': 'Épaisseur des supports/« brackets »',
  'Compatible Accessories': 'Accessoires compatibles',
  'Internal Reinforcements': 'Renforts internes',
  '18″ and over': '18″ et plus',
  'Dynamic charge (constant wind-closed louvres)': 'Charge dynamique (vent constant - lames fermées)',
  'Static charge (Snow)': 'Charge statique (neige)',
  'First snow fall only (2-4)': 'Première neige seulement (2-4)',
  'Finite Element Analysis': 'Analyse par éléments finis',
  'DYNAMIC CHARGE : WIND': 'CHARGE DYNAMIQUE : VENT',
  'Here is what a professional test profile looks like, showing the forces being excreted on the pergola. This image is from one of the pages of the report produced by Concept Para Design, one page of many.': 'Voici à quoi ressemble un profil de test professionnel, montrant les forces exercées sur la pergola. Cette image provient d’une des nombreuses pages du rapport produit par Concept Para Design.',
  '(448 N/m2 wind perpendicular from one side / 12.2625 m/s2 of gravity).': '(Vent perpendiculaire de 448 N/m2 d’un côté / gravité de 12.2625 m/s2).',
  'Our wind rating tests are not done by renting a big fan as some other companies do…and then proudly display it on video as if it’s an actual test…NO!': 'Nos tests de résistance au vent ne sont pas réalisés en louant un gros ventilateur comme certaines entreprises le font… puis en l’affichant fièrement en vidéo comme s’il s’agissait d’un vrai test… NON!',
  'We took the necessary time (and expense) to work with Designers and Structural Engineers to ensure we pass any test. We began this process after selling our first pergola for a famous restaurant in NYC. We passed those stringent tests with flying colors. We are currently working to pass the necessary wind rating of a Cat 5 Hurricane, with our Cat 4 positive results in rear view mirror. We are certified by ASCE 7-16 Standards everywhere in the Continental United States, except for the bottom third of Florida where we are still working on getting up to 180-200mph wind loads.': 'Nous avons pris le temps nécessaire (et investi les sommes nécessaires) pour travailler avec des designers et des ingénieurs en structure afin de réussir tous les tests. Nous avons commencé ce processus après avoir vendu notre première pergola à un restaurant célèbre de New York. Nous avons réussi ces tests rigoureux haut la main. Nous travaillons actuellement à atteindre la cote de vent nécessaire pour un ouragan de catégorie 5, avec nos résultats positifs de catégorie 4 derrière nous. Nous sommes certifiés selon les normes ASCE 7-16 partout dans la partie continentale des États-Unis, sauf dans le tiers inférieur de la Floride où nous travaillons encore à atteindre des charges de vent de 180 à 200 mph.',
  'Our tests are done by professional firms specializing in Structural Engineering and Finite Element Analysis (FEA). Should you have a major commercial (or residential) project requiring further approval or technical assistance, we have the right firms to work with. They have already signed off on many projects. If you are buying a standard pergola and still need permitting, we have the design specs/shop drawings to send over. We’re here to help.': 'Nos tests sont effectués par des firmes professionnelles spécialisées en ingénierie structurelle et en analyse par éléments finis (FEA). Si vous avez un grand projet commercial (ou résidentiel) nécessitant une approbation supplémentaire ou une assistance technique, nous avons les bonnes firmes avec qui travailler. Elles ont déjà approuvé de nombreux projets. Si vous achetez une pergola standard et avez tout de même besoin d’un permis, nous pouvons fournir les spécifications de conception et les dessins d’atelier. Nous sommes là pour aider.',
  'Engineering Standards': 'Normes d’ingénierie',
  'Code-Based Validation': 'Validation basée sur les codes',
  'Condensed overview of the structural standards and Canadian snow-load context used to explain how our pergolas are evaluated.': 'Aperçu condensé des normes structurelles et du contexte canadien de charge de neige utilisés pour expliquer comment nos pergolas sont évaluées.',
  'Canadian Building Code': 'Code canadien du bâtiment',
  'Static Charge: Snow Load': 'Charge statique : neige',
  'Snow load calculations are done using sophisticated software and entails hours upon hours of calculations. Further, following the Canadian Building Code of 2015, which is a recognized and accepted global standard, the tests and engineering work doesn’t end until we achieve a minimum of 24” of wet snow (36” of powder snow), plus a classified buffer.': 'Les calculs de charge de neige sont effectués à l’aide de logiciels sophistiqués et exigent des heures et des heures de calculs. De plus, conformément au Code canadien du bâtiment de 2015, une norme reconnue et acceptée mondialement, les tests et le travail d’ingénierie ne s’arrêtent pas avant d’atteindre un minimum de 24” de neige mouillée (36” de neige poudreuse), plus une marge classifiée.',
  'We took the necessary time (and expense) to work with designers and mainly engineers to ensure we pass any test. We are currently working to pass the necessary wind rating of a Cat 3 Hurricane.': 'Nous avons pris le temps nécessaire (et investi les sommes nécessaires) pour travailler avec des designers et surtout des ingénieurs afin de réussir tous les tests. Nous travaillons actuellement à atteindre la cote de vent nécessaire pour un ouragan de catégorie 3.',
  'Structural Standard': 'Norme structurelle',
  'ASCE 7-16 is published by the American Society of Civil Engineers and provides minimum design loads and associated criteria for buildings and other structures.': 'ASCE 7-16 est publiée par l’American Society of Civil Engineers et fournit les charges minimales de conception ainsi que les critères associés pour les bâtiments et autres structures.',
  'It guides engineers through dead, live, soil, flood, snow, rain, ice, earthquake, and wind loads, plus load combinations and risk categories.': 'Elle guide les ingénieurs pour les charges mortes, vives, de sol, d’inondation, de neige, de pluie, de glace, de séisme et de vent, ainsi que les combinaisons de charges et les catégories de risque.',
  'It is a key part of the building code in the United States and is adopted by many jurisdictions.': 'Elle constitue un élément clé du code du bâtiment aux États-Unis et est adoptée par de nombreuses juridictions.',
  'Canadian Structural Standard': 'Norme structurelle canadienne',
  'CNB2020 / Canadian Building Code': 'CNB2020 / Code canadien du bâtiment',
  'CNB2020, also known as the National Building Code of Canada 2020, is Canada’s national model code for building safety, accessibility, fire protection, and structural sufficiency.': 'Le CNB2020, aussi appelé Code national du bâtiment du Canada 2020, est le code modèle national du Canada pour la sécurité des bâtiments, l’accessibilité, la protection incendie et la suffisance structurelle.',
  'Part 4 of Division B provides the framework engineers use to evaluate loads and load combinations for buildings and related structures.': 'La partie 4 de la division B fournit le cadre utilisé par les ingénieurs pour évaluer les charges et les combinaisons de charges des bâtiments et structures connexes.',
  'For pergolas, the most relevant considerations include snow, rain, wind, seismic effects, importance categories, serviceability limits, and regional Canadian climate conditions.': 'Pour les pergolas, les considérations les plus pertinentes incluent la neige, la pluie, le vent, les effets sismiques, les catégories d’importance, les limites de service et les conditions climatiques régionales canadiennes.',
  'Inside Out Test': 'Test intérieur vers extérieur',
  'Inside Out/Mr.Pergola': 'Intérieur vers extérieur / Mr.Pergola',
  'Outside In-1/Mr.Pergola': 'Extérieur vers intérieur-1 / Mr.Pergola',
  'Mr.Pergola Corner Test': 'Test de coin Mr.Pergola',
  'Mr.Pergola Corner Aluminum Cover': 'Couvercle de coin en aluminium Mr.Pergola',
  'Competition Corner': 'Coin de la concurrence',
  'Now compare our corner bracket to what you get from our competitors (actual image from competitor pergola), a folded piece of sheet metal with a few #12 screws. Just by looking at this pic, you know the top (louvres) are not substantial. Their louvres are also made of SHEET METAL, NOT EXTRUSIONS.': 'Comparez maintenant notre support de coin à ce que vous obtenez chez nos concurrents (image réelle d’une pergola concurrente) : une pièce de tôle pliée avec quelques vis #12. En regardant simplement cette image, on comprend que le dessus (les lames) n’est pas substantiel. Leurs lames sont aussi faites de TÔLE, PAS D’EXTRUSIONS.',
  'See comparison pic below. Whereas our louvres can handle 195kg of snow each (16ft-4-Season Pergola with adequate frame reinforcements), Sheet Metal can barely handle its own weight. ': 'Voir l’image de comparaison ci-dessous. Alors que nos lames peuvent supporter 195 kg de neige chacune (pergola 4 saisons de 16 pi avec renforts de cadre adéquats), la tôle supporte à peine son propre poids. ',
  'Overlapping Louvres.': 'Lames chevauchantes.',
  'REQUESTS A FREE SAMPLE OF OUR PROFILE TO COMPARE! CALL US TODAY!': 'DEMANDEZ UN ÉCHANTILLON GRATUIT DE NOTRE PROFIL POUR COMPARER! APPELEZ-NOUS AUJOURD’HUI!',
  'Please see the profile of our louvres. The ‘S’ shape makes it so the louvres overlap. There are 2 main benefits to this:': 'Veuillez voir le profil de nos lames. La forme en « S » fait en sorte que les lames se chevauchent. Il y a 2 avantages principaux :',
  '1: Because they overlap we you can leave the louvres open at a 44 degree angle which would allow the light to come in but not the rain. Any light to normal rainfall would give you the benefit of not getting your furniture wet when you are not home.': '1 : Parce qu’elles se chevauchent, vous pouvez laisser les lames ouvertes à un angle de 44 degrés, ce qui laisse entrer la lumière mais pas la pluie. Une pluie légère à normale ne mouillera pas vos meubles lorsque vous n’êtes pas à la maison.',
  '2: Again because they overlap, we do not need to have a rubber connection that will degrade over time.': '2 : Encore une fois, parce qu’elles se chevauchent, nous n’avons pas besoin d’un joint en caoutchouc qui se détériorera avec le temps.',
  'STANDARD SIZES': 'DIMENSIONS STANDARDS',
  '(4-Post or Wall Mount)': '(4 poteaux ou montage mural)',
  'LOUVRES / DEPTH': 'LAMES / PROFONDEUR',
  'WIDE': 'LARGEUR',
  'Free Customization (cut to fit)': 'Personnalisation gratuite (coupé sur mesure)',
  'ALL custom sizes and shapes possible with Mr.Pergola.': 'M.Pergola propose TOUTES les tailles et formes personnalisees.',
  'Customization is Free': 'La personnalisation est gratuite.',
  'Bigger Spaces': 'Grands espaces',
  'Combine your pergolas.': 'Combinez vos pergolas.',
  'For larger patios, terraces, and commercial layouts, we can combine pergola sections to cover more space while keeping the design clean and intentional.': 'Pour les grands patios, terrasses et aménagements commerciaux, nous pouvons combiner des sections de pergola pour couvrir davantage d’espace tout en conservant un design propre et réfléchi.',
};

function translateText(text: string, isFrench: boolean) {
  return isFrench ? frenchCopy[text] ?? text : text;
}

function localizeValue(value: SpecValue, isFrench: boolean): SpecValue {
  if (typeof value !== 'string' || value === 'check' || value === 'empty') {
    return value;
  }

  return translateText(value, isFrench);
}

function renderValue(value: SpecValue) {
  if (value === 'check') {
    return <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-luxury-gold text-sm font-bold text-luxury-black">✓</span>;
  }

  if (value === 'empty') {
    return <span className="text-luxury-gray/40">—</span>;
  }

  if (typeof value === 'object') {
    return <img src={value.logo} alt={value.alt} className={value.className ?? 'mx-auto h-12 w-12 rounded-full object-cover'} loading="lazy" decoding="async" />;
  }

  return <span>{value}</span>;
}

function SpecTable({ title, columns, rows, featureLabel }: { title: string; columns: string[]; rows: Array<{ feature: string; classic?: SpecValue; modern?: SpecValue; threeSeason?: SpecValue; fourSeason?: SpecValue }>; featureLabel: string }) {
  const valueKeys = rows[0] && 'threeSeason' in rows[0]
    ? ['threeSeason', 'fourSeason']
    : ['classic', 'modern'];

  return (
    <section className="overflow-hidden rounded-2xl border border-luxury-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="bg-luxury-black px-6 py-6 text-white">
        <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-white">{title}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="bg-luxury-gold/10">
              <th className="w-[42%] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.25em] text-luxury-black dark:text-white">{featureLabel}</th>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 text-center text-sm font-semibold text-luxury-black dark:text-white">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.feature} className={rowIndex % 2 === 0 ? 'bg-white dark:bg-luxury-black/30' : 'bg-luxury-black/[0.03] dark:bg-white/[0.04]'}>
                <td className="border-t border-luxury-black/10 px-5 py-4 text-sm font-medium text-luxury-black dark:border-white/10 dark:text-white">
                  {row.feature}
                </td>
                {valueKeys.map((valueKey) => (
                  <td key={valueKey} className="border-t border-luxury-black/10 px-5 py-4 text-center text-sm text-luxury-gray dark:border-white/10 dark:text-gray-300">
                    {renderValue(row[valueKey as keyof typeof row] as SpecValue)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TechnicalCard({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-luxury-black/10 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] md:p-8">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-luxury-black dark:text-white">{eyebrow}</p>
      <h2 className="mb-6 font-serif text-3xl leading-tight text-luxury-black dark:text-white md:text-4xl">{title}</h2>
      <div className="space-y-5 text-sm leading-7 text-luxury-gray dark:text-gray-300 md:text-base">
        {children}
      </div>
    </article>
  );
}

function ImageCard({ title, src }: { title: string; src: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-luxury-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="border-b border-luxury-black/10 px-5 py-4 dark:border-white/10">
        <figcaption className="text-sm font-semibold text-luxury-black dark:text-white">{title}</figcaption>
      </div>
      <img src={src} alt={title} className="h-80 w-full object-contain p-4" loading="lazy" decoding="async" />
    </figure>
  );
}

function StandardSizesTable({ isFrench }: { isFrench: boolean }) {
  const tt = (text: string) => translateText(text, isFrench);

  return (
    <section className="overflow-hidden rounded-2xl border border-luxury-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="bg-luxury-black px-6 py-6 text-center text-white">
        <p className="font-serif text-3xl">{tt('STANDARD SIZES')}</p>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em] text-white">{tt('(4-Post or Wall Mount)')}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-center">
          <tbody>
            <tr className="bg-luxury-black text-white">
              <th className="w-36 px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.3em] text-white" rowSpan={2}>{tt('LOUVRES / DEPTH')}</th>
              <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.5em] text-white" colSpan={standardWidths.length}>{tt('WIDE')}</th>
            </tr>
            <tr className="bg-luxury-gold/10">
              {standardWidths.map((width) => (
                <th key={width} className="px-5 py-4 font-serif text-2xl text-luxury-black dark:text-white">{width}</th>
              ))}
            </tr>
            {standardDepths.map((depth, rowIndex) => (
              <tr key={depth} className={rowIndex % 2 === 0 ? 'bg-white dark:bg-luxury-black/30' : 'bg-luxury-black/[0.03] dark:bg-white/[0.04]'}>
                <th className="border-t border-luxury-black/10 px-5 py-4 text-left font-serif text-2xl text-luxury-black dark:border-white/10 dark:text-white">{depth}</th>
                {standardWidths.map((width) => (
                  <td key={`${width}-${depth}`} className="border-t border-luxury-black/10 px-5 py-4 text-sm text-luxury-gray dark:border-white/10 dark:text-gray-300">
                    {width >= depth ? `${width} x ${depth}` : 'x'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Technicals() {
  const { language } = useLanguage();
  const isFrench = language === 'FR';
  const tt = (text: string) => translateText(text, isFrench);
  const localizedClassicVsModernRows = classicVsModernRows.map((row) => ({
    feature: tt(row.feature),
    classic: localizeValue(row.classic, isFrench),
    modern: localizeValue(row.modern, isFrench),
  }));
  const localizedSeasonRows = seasonRows.map((row) => ({
    feature: tt(row.feature),
    threeSeason: localizeValue(row.threeSeason, isFrench),
    fourSeason: localizeValue(row.fourSeason, isFrench),
  }));
  const localizedTestImages = testImages.map((image) => ({
    ...image,
    title: tt(image.title),
  }));
  const louvreComparisonImage = isFrench
    ? '/assets/technicals/louvre/french.jpeg'
    : '/assets/technicals/louvre/english.jpeg';
  const beamComparisonImage = isFrench
    ? '/assets/technicals/beam/french.jpeg'
    : '/assets/technicals/beam/eng.jpeg';

  return (
    <div className="pt-40 pb-32 transition-colors duration-500 lining-nums">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-serif tracking-tight mb-12 text-center">{tt('Technicals')}</h1>
        </div>

        <section className="mb-24 w-full h-[50svh] md:h-[70svh] min-h-[400px] relative overflow-hidden group">
          <img
            src="/assets/carl/Classic%20Commercial%20Lshape.jpg"
            alt={tt('Technicals')}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-12 pointer-events-none">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg tracking-tight mb-4">
              {tt('Technicals')}
            </h2>
            <p className="text-white text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold drop-shadow">
              {tt('Classic vs Modern')}
            </p>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-4xl px-6 md:mb-28 md:px-12">
          <div className="space-y-7 text-lg leading-9 text-luxury-gray dark:text-gray-300 md:text-xl md:leading-10">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{tt(paragraph)}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="overflow-hidden rounded-2xl border border-luxury-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px] lg:min-h-[720px]">
                <img
                  src="/assets/technicals/Extended-White-Wall-Mount.jpg"
                  alt="MrPergola"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/45 via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              <article className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.45em] text-luxury-black dark:text-white">{tt('Permanent system')}</p>
                <h2 className="mb-7 font-serif text-4xl leading-tight text-luxury-black dark:text-white md:text-5xl">{tt('3-SEASON PERMANENT PERGOLA')}</h2>
                <div className="space-y-5 text-sm leading-7 text-luxury-black dark:text-white md:text-base">
                  <p>{tt('First, the most solid permanent 3-Season Pergola. Where you can support some snow (3-4inches), but is built to be left open in winter. As the pics below show, we use high grade steel and aluminum. Double powder coated for superior protection. We DO NOT use Stainless Steel to build our corners, they are simply not as strong as steel.')}</p>
                  <p>{tt('One way to see the strength of any pergola is by looking at the corner brackets… since corners give strength. Most of our competitors use flimsy bent sheet metal with #12 screws to make a corner (pic below)… we use 10g steel and 6 Grade-8, half-inch bolts, (yes half inch/ Fastenal: 11588102 ) for each corner. See pics below. Our unique corner bracket also has a 4”x 4” HSS underneath going down 12” to help against the wind. The electroplated black zinc bolts of the posts (3/8” x 5”) keep the entire frame in place. We’ve installed our pergolas by lakes, rooftops, rivers, by highways and never, ever, have we had any problems. In the rare cases where need be, we created an additional bracketing system to shore it up further, where we can stand up to constant Cat4 Hurricane winds (156mph-251km/hr). There is simply no other pergola that can stand up to Mother Nature like Mr.Pergola can. Period. Should your project require any further support brackets against even higher winds, we’ve got you covered as well.')}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-luxury-black px-6 py-20 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.55em] text-white">{tt('Winter capable')}</p>
              <h2 className="font-serif text-4xl md:text-6xl">{tt('4-SEASON PERMANENT PERGOLA')}</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-white">
              <p>{tt('Now for the 4-Season Pergola… It’s nothing short of a Beast! The only pergola in the world that can handle 3 feet of wet snow, which means you can use it carefree all winter long. We see other companies talking about Snow Load in weight (ex: 6000lbs-11000lbs), but this is misleading. SNOW IS HEAVY! A few thousand pounds amounts to a few inches of snow…none come close to 3 feet (ex:22,000lbs on a 16×16)! … for the record, our snow load capacity is 88 pounds per square foot. That’s double anyone else’s claims. The difference between our claims and our competitors is that we have our pergolas tested by specialized engineering firms and a minimum of two engineers signed off on it. We don’t simply put some weight on the pergola and make a claim, we invested, heavily, so that we can guarantee our claims!')}</p>
              <p>{tt('Remember we can go up to 20ft between each column. Whether width or projection. Where others stop at 12ft depth, we keep going to 20ft deep. A 20’x20’ pergola is still installed with only 4 columns or attached with two at the front and wall mounted at the back. (See beam thicknesses below).')}</p>
              <p>{tt('The 4-Season pergola is of course a little more expensive given the quantity of materials we use. Aluminum and steel are sold by weight, period. The corner brackets are quarter inch (1/4”) thick double coated steel, properly covered to last, frankly, as long as you want it. There are no points of failure. We studied what others have done, found the weak points and solidified our system, essentially learning from their mistakes and weaknesses. There is a reason we can go up to 20ft wide and 20ft deep with only 4 posts/columns…and why our louvres (blades) can surpass the frame by 4ft, without dropping/bending. See images below and request a sample!')}</p>
              <p>{tt('The 4-Season pergola option is perfect for those who want to use their patio in winter because they have an outdoor kitchen, love to BBQ, want to store their furniture without having to cover it or simply enjoy taking a break outside in winter with a firepit and either a hot chocolate or a cigar…')}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-20 md:px-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-2xl border border-luxury-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-luxury-black dark:text-white">{tt('100% Waterproof')}</p>
            <h2 className="mt-5 font-serif text-4xl text-luxury-black dark:text-white">{tt('CUSTOMIZATION')}</h2>
          </div>
          <div className="rounded-2xl border border-luxury-black/10 bg-luxury-black/[0.03] p-8 text-base leading-8 text-luxury-gray dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300">
            <p>{tt('Our classic pergola can be customized like no other. We can do anything from height extension, L-Shaped, extended louvres or extended sub-frame for more coverage when you have a smaller footprint to work with. The attached pergola is an option if your home’s exterior can support it. We have special mounting brackets for this purpose.')}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:px-12">
          <SpecTable title={tt('Classic vs Modern')} columns={[tt('Classic Pergola'), tt('Modern Pergola')]} rows={localizedClassicVsModernRows} featureLabel={tt('Feature')} />
          <SpecTable title={tt('3-Season vs 4-Season')} columns={[tt('3-Season | Louvres open in winter'), tt('4-Season | Louvres closed in winter')]} rows={localizedSeasonRows} featureLabel={tt('Feature')} />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <div className="overflow-hidden rounded-2xl border border-luxury-black/10 bg-luxury-black text-white shadow-xl dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.5em] text-white">{tt('Finite Element Analysis')}</p>
                <h2 className="mb-7 font-serif text-4xl leading-tight md:text-5xl">{tt('DYNAMIC CHARGE : WIND')}</h2>
                <div className="space-y-5 text-sm leading-7 text-white md:text-base">
                  <p>{tt('Here is what a professional test profile looks like, showing the forces being excreted on the pergola. This image is from one of the pages of the report produced by Concept Para Design, one page of many.')}<br />{tt('(448 N/m2 wind perpendicular from one side / 12.2625 m/s2 of gravity).')}</p>
                  <p>{tt('Our wind rating tests are not done by renting a big fan as some other companies do…and then proudly display it on video as if it’s an actual test…NO!')}</p>
                  <p>{tt('We took the necessary time (and expense) to work with Designers and Structural Engineers to ensure we pass any test. We began this process after selling our first pergola for a famous restaurant in NYC. We passed those stringent tests with flying colors. We are currently working to pass the necessary wind rating of a Cat 5 Hurricane, with our Cat 4 positive results in rear view mirror. We are certified by ASCE 7-16 Standards everywhere in the Continental United States, except for the bottom third of Florida where we are still working on getting up to 180-200mph wind loads.')}</p>
                  <p>{tt('Our tests are done by professional firms specializing in Structural Engineering and Finite Element Analysis (FEA). Should you have a major commercial (or residential) project requiring further approval or technical assistance, we have the right firms to work with. They have already signed off on many projects. If you are buying a standard pergola and still need permitting, we have the design specs/shop drawings to send over. We’re here to help.')}</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white p-6 md:p-10">
                <img
                  src="/assets/technicals/Tech-2.png"
                  alt="Professional test profile"
                  className="w-full max-w-2xl object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="rounded-[2rem] border border-luxury-black/10 bg-gradient-to-b from-white to-luxury-black/[0.02] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.03] dark:to-white/[0.02] md:p-12">
            <div className="mb-12 grid grid-cols-1 gap-8 border-b border-luxury-black/10 pb-10 dark:border-white/10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-luxury-black dark:text-white">{tt('Engineering Standards')}</p>
              <h2 className="font-serif text-4xl text-luxury-black dark:text-white md:text-5xl">{tt('Code-Based Validation')}</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-luxury-gray dark:text-white/85 md:text-base">
                {tt('Condensed overview of the structural standards and Canadian snow-load context used to explain how our pergolas are evaluated.')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
              <article className="rounded-[1.75rem] border border-luxury-black/10 bg-white shadow-lg shadow-luxury-black/[0.04] dark:border-white/10 dark:bg-white/[0.03]">
                <div className="border-b border-luxury-black/10 px-8 py-6 dark:border-white/10">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.45em] text-luxury-black dark:text-white">{tt('Canadian Structural Standard')}</p>
                  <h3 className="font-serif text-3xl text-luxury-black dark:text-white md:text-4xl">{tt('Static Charge: Snow Load')}</h3>
                </div>
                <div className="space-y-6 px-8 py-8 text-base leading-8 text-luxury-gray dark:text-white/85">
                  <p>{tt('Snow load calculations are done using sophisticated software and entails hours upon hours of calculations. Further, following the Canadian Building Code of 2015, which is a recognized and accepted global standard, the tests and engineering work doesn’t end until we achieve a minimum of 24” of wet snow (36” of powder snow), plus a classified buffer.')}</p>
                  <p>{tt('We took the necessary time (and expense) to work with designers and mainly engineers to ensure we pass any test. We are currently working to pass the necessary wind rating of a Cat 3 Hurricane.')}</p>
                </div>
              </article>

              <article className="rounded-[1.75rem] border border-luxury-black/10 bg-white shadow-lg shadow-luxury-black/[0.04] dark:border-white/10 dark:bg-white/[0.03]">
                <div className="border-b border-luxury-black/10 px-8 py-6 dark:border-white/10">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-black dark:text-white">{tt('Structural Standard')}</p>
                  <h3 className="font-serif text-3xl text-luxury-black dark:text-white md:text-4xl">ASCE 7-16</h3>
                </div>
                <div className="space-y-5 px-8 py-8 text-sm leading-7 text-luxury-gray dark:text-white/85 md:text-base">
                  <p>{tt('ASCE 7-16 is published by the American Society of Civil Engineers and provides minimum design loads and associated criteria for buildings and other structures.')}</p>
                  <p>{tt('It guides engineers through dead, live, soil, flood, snow, rain, ice, earthquake, and wind loads, plus load combinations and risk categories.')}</p>
                  <p>{tt('It is a key part of the building code in the United States and is adopted by many jurisdictions.')}</p>
                </div>
              </article>

              <article className="rounded-[1.75rem] border border-luxury-black/10 bg-white shadow-lg shadow-luxury-black/[0.04] dark:border-white/10 dark:bg-white/[0.03]">
                <div className="border-b border-luxury-black/10 px-8 py-6 dark:border-white/10">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-black dark:text-white">{tt('Canadian Building Code')}</p>
                  <h3 className="font-serif text-3xl text-luxury-black dark:text-white md:text-4xl">{tt('CNB2020 / Canadian Building Code')}</h3>
                </div>
                <div className="space-y-5 px-8 py-8 text-sm leading-7 text-luxury-gray dark:text-white/85 md:text-base">
                  <p>{tt('CNB2020, also known as the National Building Code of Canada 2020, is Canada’s national model code for building safety, accessibility, fire protection, and structural sufficiency.')}</p>
                  <p>{tt('Part 4 of Division B provides the framework engineers use to evaluate loads and load combinations for buildings and related structures.')}</p>
                  <p>{tt('For pergolas, the most relevant considerations include snow, rain, wind, seismic effects, importance categories, serviceability limits, and regional Canadian climate conditions.')}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-20 md:grid-cols-2 md:px-12 lg:grid-cols-3">
          {localizedTestImages.map((image) => (
            <ImageCard key={image.src} title={image.title} src={image.src} />
          ))}
        </section>

        <section className="mx-auto max-w-7xl space-y-8 px-6 md:px-12">
          <div className="rounded-2xl border border-luxury-black/10 bg-white p-8 text-base leading-8 text-luxury-gray shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">
            <p>{tt('Now compare our corner bracket to what you get from our competitors (actual image from competitor pergola), a folded piece of sheet metal with a few #12 screws. Just by looking at this pic, you know the top (louvres) are not substantial. Their louvres are also made of SHEET METAL, NOT EXTRUSIONS.')}</p>
            <p className="mt-5">{tt('See comparison pic below. Whereas our louvres can handle 195kg of snow each (16ft-4-Season Pergola with adequate frame reinforcements), Sheet Metal can barely handle its own weight. ')}</p>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <img src={louvreComparisonImage} alt="Louvre comparison" className="w-full rounded-2xl border border-luxury-black/10 bg-white object-contain shadow-sm dark:border-white/10 dark:bg-white/[0.03]" loading="lazy" decoding="async" />
            <img src={beamComparisonImage} alt="Beam comparison" className="w-full rounded-2xl border border-luxury-black/10 bg-white object-contain shadow-sm dark:border-white/10 dark:bg-white/[0.03]" loading="lazy" decoding="async" />
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 md:mt-24 md:px-12">
          <div className="rounded-2xl border border-luxury-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] md:p-12">
            <div className="border-b border-luxury-black/10 pb-7 dark:border-white/10">
              <h2 className="font-serif text-4xl text-luxury-black dark:text-white">{tt('Overlapping Louvres.')}</h2>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-luxury-black dark:text-white">{tt('REQUESTS A FREE SAMPLE OF OUR PROFILE TO COMPARE! CALL US TODAY!')}</p>
            </div>
            <div className="pt-8 text-base leading-8 text-luxury-gray dark:text-gray-300">
              <h3 className="mb-6 font-serif text-2xl text-luxury-black dark:text-white">{tt('Please see the profile of our louvres. The ‘S’ shape makes it so the louvres overlap. There are 2 main benefits to this:')}</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <p>{tt('1: Because they overlap we you can leave the louvres open at a 44 degree angle which would allow the light to come in but not the rain. Any light to normal rainfall would give you the benefit of not getting your furniture wet when you are not home.')}</p>
                <p>{tt('2: Again because they overlap, we do not need to have a rubber connection that will degrade over time.')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <StandardSizesTable isFrench={isFrench} />
          <div className="mx-auto mt-8 max-w-5xl px-4">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="h-px w-10 md:w-16 bg-luxury-gold/35" />
              <p className="text-center font-serif text-lg leading-relaxed text-luxury-black dark:text-white md:text-2xl">
                <span className="block">{tt('ALL custom sizes and shapes possible with Mr.Pergola.')}</span>
                <span className="block">{tt('Customization is Free')}</span>
              </p>
              <div className="h-px w-10 md:w-16 bg-luxury-gold/35" />
            </div>
          </div>
        </section>

        <section className="w-full h-[50svh] md:h-[70svh] min-h-[420px] relative overflow-hidden group">
          <img
            src="/assets/What-We-Offer.jpg"
            alt="Double pergola installation showing combined sections"
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 md:p-12 pointer-events-none">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white drop-shadow md:text-xs">{tt('Bigger Spaces')}</p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-white drop-shadow-lg md:text-6xl">{tt('Combine your pergolas.')}</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white md:text-lg">
              {tt('For larger patios, terraces, and commercial layouts, we can combine pergola sections to cover more space while keeping the design clean and intentional.')}
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
