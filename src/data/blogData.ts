export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    id: "santorini-beyond-the-caldera",
    title: "Santorini Beyond the Caldera",
    excerpt:
      "Most visitors never leave Oia. We take you to the black-sand vineyards of Megalochori and the hidden cave churches that only locals know.",
    date: "March 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    category: "Destination Guide",
    content:
      "Santorini is one of the most photographed islands on Earth, yet its most remarkable corners remain almost entirely untouched by tourism. Beyond the iconic blue domes of Oia lies a landscape of ancient vineyards trained low against the volcanic wind, cave churches carved into cliff faces centuries ago, and fishing villages where the day's catch is still grilled over driftwood on the beach.\n\nOur Treva itinerary begins not at the airport, but aboard a private catamaran that circles the caldera at golden hour, stopping at a sea-level hot spring accessible only by boat. From there, a chauffeured transfer winds through the back roads of Megalochori, past whitewashed walls heavy with bougainvillea, to a restored captain's mansion that serves as your private villa.\n\nDinners are arranged in locations that defy expectation: a candlelit table inside a 300-year-old wine cave, a rooftop overlooking the caldera with a private chef preparing the island's wild capers and cherry tomatoes, or a beachside grill at Vlychada where the lunar cliffs glow amber at sunset.",
  },
  {
    id: "the-art-of-slow-travel",
    title: "The Art of Slow Travel",
    excerpt:
      "Why the most luxurious thing you can do in 2026 is arrive late, stay longer, and let the destination come to you.",
    date: "February 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    category: "Philosophy",
    content:
      "In an era of 48-hour city breaks and Instagram-driven bucket lists, the true luxury is time. Slow travel is not about doing less — it is about experiencing more deeply. It means staying in one village for a week instead of three cities. It means learning the baker's name, watching the light change on a particular mountain, and discovering that the best restaurant is the one without a sign.\n\nAt Treva, we design itineraries around this principle. Our Kyoto immersion, for example, spans ten unhurried days. Guests learn the tea ceremony from a third-generation master, spend an afternoon in the studio of a Living National Treasure ceramicist, and are guided through bamboo groves at dawn by a retired professor of Japanese poetry.\n\nThe result is not a trip — it is a transformation. Our guests return not with a list of sights ticked off, but with relationships, skills, and memories that reshape the way they see the world.",
  },
  {
    id: "patagonia-by-private-expedition",
    title: "Patagonia by Private Expedition",
    excerpt:
      "Glacier landings, estancia feasts, and nights in glass-domed lodges beneath the southern sky — our most ambitious route yet.",
    date: "January 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    category: "Expedition",
    content:
      "Patagonia is not a destination you visit — it is a landscape that claims you. The scale is almost incomprehensible: glaciers the size of cities calving into lakes of impossible blue, condors riding thermals above granite spires that pierce the clouds, and silence so complete you can hear your own heartbeat.\n\nOur Private Expedition route begins in El Calafate with a helicopter transfer directly to the Perito Moreno Glacier. Guests don crampons and walk across the ice with a glaciologist who has spent thirty years studying this frozen river. That evening, dinner is served in a glass-domed lodge perched above Lago Argentino, where the Milky Way unfurls overhead with a clarity that makes city-dwellers weep.\n\nThe week continues with horseback rides across estancia lands, a private boat charter through the fjords of Tierra del Fuego, and a farewell dinner of whole lamb cooked over an open fire while gauchos play folk songs under the stars.",
  },
  {
    id: "morocco-the-imperial-circuit",
    title: "Morocco: The Imperial Circuit",
    excerpt:
      "From the medinas of Fez to the dunes of Merzouga, a journey through one of the world's most sensory-rich countries.",
    date: "December 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    category: "Cultural Immersion",
    content:
      "Morocco overwhelms the senses in the most beautiful way. The air in Fez smells of cedar and spice, the call to prayer echoes off a thousand rooftops, and the medina's narrow alleys reveal treasures at every turn — a hidden courtyard garden, a master craftsman tooling leather by hand, a rooftop café where mint tea is poured from an impossible height.\n\nOur Imperial Circuit connects the four royal cities — Rabat, Meknes, Fez, and Marrakech — with private transfers through the Atlas Mountains, overnight camps in the Sahara, and stays in restored riads that are works of art in themselves. Each city reveals a different layer of Moroccan culture, from the intellectual traditions of Fez to the creative energy of Marrakech.\n\nThe journey culminates in the Sahara, where guests ride camels to a private camp among the dunes of Merzouga. As the sun sets and the sky turns from gold to violet to infinite black, a Berber chef prepares tagine over coals while musicians play the guembri under a canopy of stars.",
  },
  {
    id: "japanese-ryokan-guide",
    title: "The Definitive Ryokan Guide",
    excerpt:
      "Everything you need to know about Japan's most intimate form of hospitality — and the five ryokans we trust above all others.",
    date: "November 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    category: "Accommodation",
    content:
      "A ryokan is not merely a place to sleep — it is an art form. These traditional Japanese inns, some operating for over a thousand years, offer an experience of hospitality so refined and so deeply considered that it changes the way you think about comfort, beauty, and the relationship between guest and host.\n\nThe best ryokans share certain qualities: an onsen fed by natural hot springs, kaiseki dinners that are edible poetry, tatami-floored rooms that face a garden designed to be beautiful in every season, and a level of service so attentive it feels telepathic. The futon is laid while you bathe; the tea is poured at precisely the right temperature; the garden is raked each morning in patterns that reflect the weather.\n\nAt Treva, we have spent years cultivating relationships with five exceptional ryokans — from a mountainside retreat in Hakone where each room has a private outdoor onsen, to a centuries-old inn in Kyoto's Higashiyama district where the owner personally prepares the morning rice.",
  },
  {
    id: "arctic-northern-lights",
    title: "Chasing the Aurora: An Arctic Journal",
    excerpt:
      "Three nights in a glass igloo above the Arctic Circle, waiting for the sky to catch fire.",
    date: "October 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    category: "Expedition",
    content:
      "The Northern Lights do not perform on schedule. They are not a show — they are a phenomenon, wild and unpredictable, and that is precisely what makes witnessing them so profoundly moving. You cannot buy a ticket to the aurora borealis. You can only place yourself beneath the right sky, at the right latitude, in the right season, and wait.\n\nOur Arctic itinerary is designed around this beautiful uncertainty. Guests stay in glass-roofed igloos heated to perfect comfort, with an unobstructed view of the polar sky. A dedicated aurora guide monitors solar activity and weather patterns around the clock, waking guests via a gentle chime when conditions align.\n\nBetween the waiting, there is husky sledding through birch forests dusted with fresh snow, reindeer-drawn sleigh rides to meet Sami herders, and dinners of Arctic char and cloudberries in a restaurant carved from river ice.",
  },
];
