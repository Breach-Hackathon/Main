export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption: string;
  span?: "tall" | "wide" | "normal";
}

export const galleryData: GalleryImage[] = [
  {
    id: "gl-1",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Tropical beach with turquoise water",
    category: "Beaches",
    caption: "Maldives — Raa Atoll, Private Sandbank",
    span: "wide",
  },
  {
    id: "gl-2",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    alt: "Santorini blue domes at sunset",
    category: "Architecture",
    caption: "Santorini — Oia at Golden Hour",
    span: "tall",
  },
  {
    id: "gl-3",
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    alt: "Mountain lake reflection",
    category: "Mountains",
    caption: "Patagonia — Lago Nordenskjöld",
  },
  {
    id: "gl-4",
    src: "https://images.unsplash.com/photo-1528164344885-47b1492d932a?w=800&q=80",
    alt: "Japanese temple lanterns",
    category: "Culture",
    caption: "Kyoto — Fushimi Inari at Dawn",
    span: "tall",
  },
  {
    id: "gl-5",
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    alt: "Desert dunes at sunset",
    category: "Desert",
    caption: "Morocco — Erg Chebbi Dunes, Merzouga",
    span: "wide",
  },
  {
    id: "gl-6",
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    alt: "Paris Eiffel Tower at dusk",
    category: "Cities",
    caption: "Paris — View from Trocadéro",
  },
  {
    id: "gl-7",
    src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    alt: "Northern Lights over snowy landscape",
    category: "Arctic",
    caption: "Finnish Lapland — Aurora Borealis",
    span: "wide",
  },
  {
    id: "gl-8",
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    alt: "Crystal clear ocean waves",
    category: "Beaches",
    caption: "Seychelles — Anse Source d'Argent",
  },
  {
    id: "gl-9",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Dramatic mountain peaks",
    category: "Mountains",
    caption: "Torres del Paine — The Horns at Sunrise",
    span: "tall",
  },
  {
    id: "gl-10",
    src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
    alt: "Overwater villa sunset",
    category: "Accommodation",
    caption: "Bora Bora — St. Regis Private Villa",
  },
  {
    id: "gl-11",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    alt: "Alpine lake with mountains",
    category: "Mountains",
    caption: "Switzerland — Lake Brienz",
    span: "wide",
  },
  {
    id: "gl-12",
    src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    alt: "Moroccan courtyard with fountain",
    category: "Culture",
    caption: "Fez — Riad Courtyard at Twilight",
  },
];
