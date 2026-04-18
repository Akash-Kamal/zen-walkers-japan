import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const PACKAGES = [
  {
    id: 0,
    title: "Travel To Japan - Zen Walker's Package",
    duration: "6 NIGHTS 7 DAYS",
    route: "3N Tokyo → 1N Kyoto → 2N Osaka",
    image: "/Packege 1.png",
    isTrending: true,
    includes: [
      "Tokyo Meguro Cherry Blossom Walking Tour",
      "Teamlab Planets Entry Ticket",
      "Tokyo Skytree Ticket",
      "Tokyo Mt. Fuji, Mt. Hakone Ropeway, Owakudani, Lake Ash",
      "Kyoto Geisha Walking Tour: Gion District & Hidden Gems",
      "Kyoto/Osaka: Nara, Fushimi Inari Taisha, Arashiyama Bus",
      "Accommodation in 3* Hotel On C.P",
      "Intercity 2* Class Train Ticket",
      "All Airport & Train Station Transfer On Pvt Basis"
    ],
    price: "$1,500 per pax (min 2 pax)",
    itinerary: [
      { day: 1, description: "Arrival in Tokyo | Welcome to Japan" },
      { day: 2, description: "Tokyo City Tour | Meguro Cherry Blossom Walking Tour & Teamlab Planets" },
      { day: 3, description: "Tokyo Skytree & Mt. Fuji Day Trip | Hakone & Lake Ash" },
      { day: 4, description: "Tokyo to Kyoto | Intercity Train Journey" },
      { day: 5, description: "Kyoto Geisha Walking Tour | Gion District & Hidden Gems Exploration" },
      { day: 6, description: "Kyoto & Nara | Fushimi Inari Taisha & Arashiyama Bus Tour" },
      { day: 7, description: "Osaka Exploration & Departure | Take Back Unforgettable Memories" }
    ],
    keyAttractions: [
      "Meguro River Cherry Blossom Walk",
      "Teamlab Planets",
      "Tokyo Skytree",
      "Mt. Fuji",
      "Hakone Ropeway",
      "Lake Ashi",
      "Gion District",
      "Fushimi Inari Shrine",
      "Arashiyama Bamboo Grove",
      "Nara",
      "Osaka Castle"
    ]
  },
  {
    id: 1,
    title: "Discover The Magic of Japan",
    duration: "7 NIGHTS 8 DAYS",
    route: "3N Tokyo → 2N Kyoto → 2N Osaka",
    image: "/Packege 2.png",
    isTrending: true,
    includes: [
      "Tokyo: Hop-On Hop-Off Bus Ticket",
      "Teamlab Planets Entry Ticket",
      "Tokyo: Skytree Ticket (Floor 350m)",
      "Tokyo: Mt. Fuji Tour, Hakone Ropeway, Owakudani, Lake Ash",
      "Kyoto Geisha Walking Tour: Gion District & Hidden Gems",
      "Kyoto: Nara, Fushimi Inari Taisha, Arashiyama Bus Tour",
      "Osaka: Hiroshima Miyajima Bus Tour & Shinkansen Ticket",
      "Accommodation in 3* Hotel On C.P",
      "Intercity 2nd Class Train Ticket",
      "All Airport & Train Station Transfer On Pvt Basis"
    ],
    price: "$1,280 per pax (min 2 pax)",
    itinerary: [
      { day: 1, description: "Arrival in Tokyo | Welcome to Japan" },
      { day: 2, description: "Tokyo City Tour | Hop-On Hop-Off Bus, Skytree & Teamlab Planets" },
      { day: 3, description: "Mt. Fuji Day Trip | Hakone Ropeway & Lake Ash Tour" },
      { day: 4, description: "Tokyo to Kyoto | Intercity Train Journey" },
      { day: 5, description: "Kyoto Geisha Walking Tour | Gion District & Hidden Gems" },
      { day: 6, description: "Kyoto & Nara | Fushimi Inari Taisha & Arashiyama Bus Tour" },
      { day: 7, description: "Kyoto to Osaka | Hiroshima & Miyajima Bus Tour with Shinkansen" },
      { day: 8, description: "Osaka Exploration & Departure | Take Back Unforgettable Memories" }
    ],
    keyAttractions: [
      "Tokyo Skytree",
      "Teamlab Planets",
      "Mt. Fuji",
      "Hakone Ropeway",
      "Lake Ashi",
      "Gion District",
      "Fushimi Inari Shrine",
      "Arashiyama Bamboo Grove",
      "Nara",
      "Hiroshima",
      "Miyajima Torii Gate",
      "Osaka Castle"
    ]
  },
  {
    id: 2,
    title: "Experience Japan Beyond Limits - Private & Personalized",
    duration: "7 NIGHTS 8 DAYS",
    route: "3N Tokyo → 2N Kyoto → 2N Osaka",
    image: "/Packege 3.png",
    isTrending: true,
    includes: [
      "Vehicle On Disposal For Entire Tour, For 7 Days",
      "Accommodation in 3* Hotel On C.P",
      "Last Day Hotel To Airport Transfer",
      "Tokyo City Tour (Private)",
      "Team Lab Planets Entry Ticket",
      "Tokyo Skytree Ticket",
      "Mt. Fuji And Hakone Tour (Private)",
      "Lake Ashi Cruise Entry Ticket",
      "Hakone Ropeway Entry Ticket",
      "Kyoto City Tour (Private)",
      "Kinkaku-Ji Ticket",
      "Nara Day Trip (Private)",
      "Todai-Ji Temple Ticket",
      "Osaka City Tour (Private)",
      "Osaka Castle Entry Ticket",
      "Umeda Sky Observatory Ticket"
    ],
    price: "$2,915 per pax (min 2 pax)",
    itinerary: [
      { day: 1, description: "Arrival in Tokyo | Private Hotel Transfer" },
      { day: 2, description: "Private Tokyo City Tour | Teamlab Planets & Skytree" },
      { day: 3, description: "Private Mt. Fuji & Hakone Tour | Lake Ashi Cruise & Hakone Ropeway" },
      { day: 4, description: "Tokyo to Kyoto | Private Transfer" },
      { day: 5, description: "Private Kyoto City Tour | Kinkaku-Ji Temple Visit" },
      { day: 6, description: "Private Nara Day Trip | Todai-Ji Temple & Nara Deer Park" },
      { day: 7, description: "Kyoto to Osaka | Private Transfer & Osaka City Tour" },
      { day: 8, description: "Osaka Castle & Umeda Sky Observatory | Airport Transfer & Departure" }
    ],
    keyAttractions: [
      "Tokyo Skytree",
      "Teamlab Planets",
      "Mt. Fuji",
      "Hakone Ropeway",
      "Lake Ashi",
      "Kinkaku-Ji (Golden Pavilion)",
      "Kyoto City",
      "Nara Park",
      "Todai-Ji Temple",
      "Osaka Castle",
      "Umeda Sky Observatory"
    ]
  }
];

export default function Destinations() {
  const [expandedBrief, setExpandedBrief] = useState<number | null>(null);
  const [expandedAttractions, setExpandedAttractions] = useState<number | null>(null);

  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-widest uppercase">
            Japan Packages
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated travel packages to explore the best of Japan
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full">
          {PACKAGES.map((pkg, index) => (
            <div key={pkg.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 gap-4 p-5">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  {pkg.isTrending && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-xs">
                      ✈ TRENDING
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-primary mb-1">{pkg.duration}</h3>
                      <p className="text-xs text-muted-foreground">{pkg.route}</p>
                    </div>

                    <h2 className="text-lg font-display font-bold text-foreground mb-4">{pkg.title}</h2>

                    {/* Includes Section - Compact Grid */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {pkg.includes.map((item) => (
                          <div key={item} className="flex items-center gap-1">
                            <Check size={14} className="text-primary shrink-0" />
                            <span className="text-xs text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brief Itinerary - Compact */}
                    <div className="mb-3 border-t border-border pt-3">
                      <button
                        onClick={() => setExpandedBrief(expandedBrief === pkg.id ? null : pkg.id)}
                        className="flex items-center justify-between w-full text-xs font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                      >
                        Brief Itinerary
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${expandedBrief === pkg.id ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expandedBrief === pkg.id && (
                        <div className="mt-2 space-y-1 bg-black/20 p-3 rounded max-h-40 overflow-y-auto">
                          {pkg.itinerary.map((item) => (
                            <div key={item.day} className="flex gap-2">
                              <span className="text-yellow-400 font-bold text-xs whitespace-nowrap">DAY {item.day}</span>
                              <span className="text-yellow-400 font-bold text-xs">:</span>
                              <span className="text-muted-foreground text-xs">{item.description}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Key Attractions - Compact */}
                    <div className="mb-3 border-t border-border pt-3">
                      <button
                        onClick={() => setExpandedAttractions(expandedAttractions === pkg.id ? null : pkg.id)}
                        className="flex items-center justify-between w-full text-xs font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                      >
                        KEY ATTRACTIONS
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${expandedAttractions === pkg.id ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expandedAttractions === pkg.id && (
                        <div className="mt-2 space-y-1 bg-black/20 p-3 rounded max-h-40 overflow-y-auto">
                          {pkg.keyAttractions.map((attraction, idx) => (
                            <div key={idx} className="flex gap-2">
                              <span className="text-primary font-bold text-xs">•</span>
                              <span className="text-muted-foreground text-xs">{attraction}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price and CTA - Compact */}
                  <div className="border-t border-border pt-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider">FROM</p>
                      <p className="text-lg font-bold text-primary">{pkg.price}<span className="text-xs">/ Person</span></p>
                    </div>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-lg transition-colors text-xs whitespace-nowrap">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
