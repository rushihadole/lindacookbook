/*
 * HOW TO ADD A NEW RECIPE
 *
 * 1. Copy an existing recipe object below.
 * 2. Change the title, contributor, description, times, ingredients, instructions, and note.
 * 3. Give it a unique slug (used in the URL, e.g. "apple-pie" → /apple-pie).
 * 4. Add the recipe image to public/images/.
 * 5. Update the image path to match your new file.
 * 6. Save this file — the recipe will automatically appear on the homepage
 *    and be available at its URL. No new pages needed.
 */

export const recipes = [
  {
    slug: "french-toast",
    title: "Caramelized Brioche French Toast",
    contributor: "Austin",
    description:
      "Rich, creamy French toast with crisp caramelized edges, served with fruit and maple syrup (non-negotiable).\n\nPS: I know you don't like cinnamon but maybe this way you don't hate it? I asked the others so blame them haha.",
    image: "/images/french-toast.jpg",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "2",
    ingredients: [
      "6 slices brioche, about 2–3 cm thick (Jean Pierre brioche from Lidl)",
      "2 eggs",
      "150 ml unsweetened evaporated milk (Kondensmilch)",
      "2 tbsp sugar",
      "1 tsp vanilla extract",
      "1 tsp ground cinnamon",
      "Pinch of salt",
      "1 tbsp neutral cooking oil",
      "20 g butter",
      "2 tbsp sugar, for caramelizing",
      "Powdered sugar, for serving",
      "2–4 tbsp real maple syrup",
      "150 g blueberries",
      "1 banana, sliced",
    ],
    instructions: [
      "Make the custard: in a wide, shallow bowl, whisk together the eggs, evaporated milk, 2 tablespoons of sugar, vanilla, cinnamon, and salt.",
      "Soak the brioche: place each slice in the custard for approximately 10 seconds per side. Let any excess drip back into the bowl. The bread should absorb some custard without becoming soggy or falling apart.",
      "Heat the pan: heat the oil and half the butter in a large frying pan over low to medium-low heat. The oil helps prevent the butter from burning.",
      "Cook slowly: add the soaked brioche without overcrowding the pan. Cook for 3–4 minutes, until the underside is golden and the center has begun to cook.",
      "Caramelize: before turning each slice, sprinkle about 1 teaspoon of sugar over its uncooked surface. Flip and cook for another 3–4 minutes. The sugar should melt and form a crisp, caramelized crust. Add the remaining butter as needed between batches.",
      "Serve: dust lightly with powdered sugar and serve immediately with blueberries, sliced banana, and real maple syrup. No honey or other nonsense.",
    ],
    note: `Happy Happy Birthday!

 I am very happy the universe led you and Emily to become close friends and eventually leading to having you as part of clock it. It wouldn't work without you. I think you are one of the smartest, sweetest, creative and funniest people I have met. I really like how your mind works. You are always so intrigued with whatever any of us says, asking the right questions, making us all feel heard and bringing a lot of balance to the opinions around our crises. It has also been so nice to see your bichota development story, from being scared to start a conversation with Homeboy to actually having all these dudes in this co-working space giving you free drinks. I really think that is badass.

I'm sorry I won't be there for your bday but I send you a huge hug and hope you enjoy my recipe; it is my precious (read in Gollum's voice).

P P P Peace out (* proceeds to do peace sign *)`,
  },
  {
    slug: "bratkartoffeln",
    title: "Bratkartoffeln mit Bohnengemüse und Spiegelei",
    contributor: "Emely",
    description:
      "Die leckersten Bratkartoffeln von Emely's Oma — knusprige Bratkartoffeln mit cremigem Bohnengemüse und einem Spiegelei. Am besten mit einem Salat dazu.",
    image: "/images/bratkartoffeln.jpg",
    prepTime: "30 min",
    cookTime: "45 min",
    servings: "4",
    ingredients: [
      "Bratkartoffeln: vorwiegend festkochende Kartoffeln (soviele wie du haben willst)",
      "1–2 Zwiebeln",
      "Zucker, Salz und Pfeffer",
      "Butter / Bratöl",
      "Bohnengemüse: Stangenbohnen",
      "1 Zwiebel",
      "1 Hafersahne",
      "Bohnenkraut",
      "Salz, Pfeffer und Sojasoße",
      "Spiegelei: Eier",
    ],
    instructions: [
      "Bratkartoffeln: schäle die Kartoffeln und schneide sie in kleine Würfel. Lege alle Kartoffelwürfel direkt nach dem Schneiden in eine Schüssel mit Wasser, damit sie nicht oxidieren.",
      "Schneide die Zwiebeln in dünne Streifen. Nimm 2 Pfannen und brate in der einen die Kartoffeln an und in der anderen die Zwiebeln.",
      "Die Zwiebeln sollen schön weich angebraten werden — gib noch eine Prise Zucker darüber, um sie zu karamellisieren.",
      "Brate die Kartoffeln mit Butter oder Ghee erst so weit an, dass sie goldbraun sind. Füge dann ein bis zwei Schuss Wasser hinzu und gib den Deckel darauf. Wiederhole diesen Schritt 2–3 mal, sobald das Wasser verdunstet ist. Brate die Kartoffeln dann ohne Deckel weiter scharf an, bis sie schön knusprig und durch sind.",
      "Gib die Zwiebeln dazu, vermenge alles und schmecke mit Salz und Pfeffer ab.",
      "Bohnengemüse: schneide die Zwiebel in Würfelchen. Wasche die Bohnen, schneide die Enden ab und halbiere sie.",
      "Brate die Zwiebeln goldbraun an und füge die Bohnen hinzu. Nach 5–8 Minuten die Hafersahne dazugeben und mit Bohnenkraut, etwas Sojasoße, Salz und Pfeffer abschmecken.",
      "Lasst alles etwas einkochen, bis die Bohnen durch sind. Bei Bedarf etwas Wasser hinzufügen — es soll ein schönes Sößchen entstehen.",
      "Brate ein Spiegelei, mach noch einen Salat dazu und serviere alles zusammen :)",
    ],
    note: `Das ist absolute Kindheit für mich! Bei meiner Oma haben wir die Bratkartoffeln auch
immer mit Apfelkompott gegessen:)) das schmeckt auch sehr gut!!
Da wir früher immer mit vielen Leuten zu meiner Oma gefahren sind, hat sie immer
direkt 3 Pfannen voller Bratkartoffeln gemacht und die waren wirklich in Sekunden
weg und man musste um seinen Anteil kämpfen haha`,
  },
  {
    slug: "pesto-pasta",
    title: "Pesto Pasta with Körniger Frischkäse",
    contributor: "Rushi",
    description:
      "This is my lazy meal recipe that has helped me get through the days when all those girls out there broke my heart.",
    image: "/images/pesto-pasta.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1",
    ingredients: [
      "1 cup dry rigatoni pasta",
      "3 tablespoons pesto",
      "Handful of rucola",
      "½ cup cherry tomatoes, halved",
      "Some olives (green, not black), halved",
      "A few tablespoons of körniger Frischkäse",
      "2 tablespoons pangrattato (it's Italian)",
      "Chilli oil (optional)",
      "Handful of Funyuns (optional)",
    ],
    instructions: [
      "Boil the pasta: cook the rigatoni in salted boiling water for about a minute longer than al dente — you want it a touch softer than usual since it'll be served warm/room-temp, not sauced hot. Drain well.",
      "Prep the tomatoes & olives: while the pasta cooks, halve the cherry tomatoes and halve the olives (green, not black). Wash and dry some rucola.",
      "Combine and toss with pesto: put everything into a large bowl. Add the pesto and toss until it coats it all evenly.",
      "Add the Frischkäse: add dollops of körniger Frischkäse on top — as much as you like.",
      "Make the pangrattato (again it's Italian): heat olive oil in a pan over medium heat. Add breadcrumbs and toast, stirring constantly, until deep golden and crisp. Take off the heat immediately — they go from golden to burnt fast. Season with a pinch of salt and set aside to cool (they'll crisp up more as they cool).",
      "Top it off: finish with a generous scoop of the pangrattato (in case you didn't know, it's Italian), and/or Funyuns (optional) with a drizzle of chilli oil crisps (optional) for a spicy topping. Serve right away while the toppings are still crisp.",
    ],
    note: `Still remember when i was questioning you trying to save a bug that i clearly didn't give a shit about and my confused state of why you are trying to save a bug that voluntarily flew into the water. That's when i realised what a kind soul you have.\n\nThank you for being mad at all those girls on my behalf that broke my heart (we don't write names but you know who). i'm so grateful that you have become one of the closest friends that i have in my life right now.\n\nThis recipe may be simple but it has given me comfort on the days where i desperately needed it but i was too lazy to do a lot! I hope it brings you the same satisfaction and comfort it has brought me <3`,
  },
  {
    slug: "addiction-cookies",
    title: "The Addiction Cookies",
    contributor: "Emily",
    description:
      "Butterige Kekse mit Erdbeermarmelade, frischen Erdbeeren und knusprigen Streuseln — süchtig machend gut.",
    image: "/images/addiction-cookies.jpg",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: "~10",
    ingredients: [
      "Teig: 120 g weiche Butter",
      "Teig: 100 g Zucker",
      "Teig: 1 TL Vanillezucker",
      "Teig: 200 g Mehl",
      "Teig: 1/2 TL Backpulver",
      "Teig: 1 Prise Salz",
      "Streusel: 60 g Mehl",
      "Streusel: 40 g Zucker",
      "Streusel: 40 g kalte Butter",
      "100 g Erdbeerkonfitüre",
      "1 große Handvoll Erdbeeren",
    ],
    instructions: [
      "Schlage Butter und Zucker mit Hilfe einer Küchenmaschine oder einem Handrührgerät schaumig. Füge den Vanillezucker hinzu.",
      "Mische Mehl, Backpulver und Salz und gib sie zum Teig. Vermenge alles zu einem glatten Teig. Wickle diesen danach in Folie ein und lass ihn 15–20 Minuten im Kühlschrank ruhen.",
      "Vermenge Mehl, Zucker und kalte Butter mit deinen Fingern oder einer Gabel, bis krümelige Streusel entstehen.",
      "Heize den Ofen auf 180 °C Ober-/Unterhitze (160 °C Umluft) vor. Forme aus dem Teig kleine Kugeln (ca. 3 cm Durchmesser). Lege sie auf ein mit Backpapier ausgelegtes Blech und drücke jede Kugel platt — nimm deine Handfläche oder ein Glas dafür.",
      "Gib auf jeden Keks etwas Erdbeermarmelade und ein paar frische Erdbeerstückchen.",
      "Streue die Streusel großzügig über die Cookies und backe sie für 12–15 Minuten, bis die Ränder leicht goldbraun sind. Dann genießen :)",
    ],
    note: `Be careful, product may put some people into a big addiction and you will have to bake them forever (speaking from experience)`,
  },
];
