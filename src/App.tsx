import { useState, useEffect} from "react"

// ─── Image URLs ────────────────────────────────────────────────────────────────
const IMG = {
hero: "/images/hero-vyrah.jpg",  
forest:
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1400&h=900&fit=crop&auto=format",
  forestFog:
    "https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?w=1200&h=800&fit=crop&auto=format",
  forestPath:
    "https://images.unsplash.com/photo-1614638964097-20e7104dea3c?w=900&h=1200&fit=crop&auto=format",
  tarotCandle:
    "https://images.unsplash.com/photo-1694144167581-8bc49479f6b7?w=900&h=700&fit=crop&auto=format",
  candleBook:
    "https://images.unsplash.com/photo-1698433837319-c17f098c7895?w=900&h=700&fit=crop&auto=format",
  womanBeach:
    "https://images.unsplash.com/photo-1583813611092-d9158078a457?w=900&h=1200&fit=crop&auto=format",
  womanField:
    "https://images.unsplash.com/photo-1504397915620-0b0ccaca0aa0?w=900&h=1100&fit=crop&auto=format",
  womanPortrait:
    "https://images.unsplash.com/photo-1770920069257-9fb4a4bf1596?w=800&h=1000&fit=crop&auto=format",
  candleDark:
    "https://images.unsplash.com/photo-1642666913035-f810253b9138?w=900&h=700&fit=crop&auto=format",
  drum: "https://images.unsplash.com/photo-1634834701703-319ee44534d3?w=900&h=700&fit=crop&auto=format",
    luna01: "/images/luna-01.jpg",
  luna02: "/images/luna-02.jpg",
  luna03: "/images/luna-03.jpg",
  luna04: "/images/luna-04.jpg",
  chiSonoVyrah: "/images/chi-sono-vyrah.JPG",
  chiSonoVyrah2: "/images/chi-sono-vyrah-2.png",
  vyrahHome: "/images/vyrah-home.jpg",
  stelleMarine: "/images/stelle-marine.jpg",
  negozio: "/images/negozio.jpg",
  assisi: "/images/assisi.jpg",
  cornice: "/images/cornice-sole.jpg",
  nuvole: "/images/nuvole-tramonto.jpg",
  tramontoEdit: "/images/tramonto-edit.jpg",
  suggestivo: "/images/suggestivo.jpg",
  soleLuce: "/images/sole-luce.jpg",
  toscana: "/images/toscana.jpg"
}

type Page = "home" | "vyrah" | "metodo" | "percorso" | "esperienze" | "eventi" | "credere" | "archivio" | "negozio" | "testimonianze" | "voci" | "chi-sono" | "contatti"

// ─── SVG Symbols ──────────────────────────────────────────────────────────────
function GoldSeparator() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 gold-line" />
   
      <img
        src="/images/stella-vyrah.svg"
        alt=""
        className="w-6 h-6 object-contain"
        draggable="false"
      />

      <div className="flex-1 gold-line" />
    </div>
  )
}

function VyrahSymbol({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#B4975A" strokeWidth="0.5" />
      <circle
        cx="16"
        cy="16"
        r="8"
        stroke="#B4975A"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <circle cx="16" cy="16" r="2" fill="#B4975A" />
      <line x1="16" y1="2" x2="16" y2="8" stroke="#B4975A" strokeWidth="0.5" />
      <line
        x1="16"
        y1="24"
        x2="16"
        y2="30"
        stroke="#B4975A"
        strokeWidth="0.5"
      />
      <line x1="2" y1="16" x2="8" y2="16" stroke="#B4975A" strokeWidth="0.5" />
      <line
        x1="24"
        y1="16"
        x2="30"
        y2="16"
        stroke="#B4975A"
        strokeWidth="0.5"
      />
    </svg>
  )
}

function StarDecor() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 1L10 19M1 10L19 10" stroke="#B4975A" strokeWidth="0.5" />
      <path
        d="M3.5 3.5L16.5 16.5M16.5 3.5L3.5 16.5"
        stroke="#B4975A"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <circle cx="10" cy="10" r="1.5" fill="#B4975A" />
    </svg>
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav({
  current,
  navigate,
}: {
  current: Page
  navigate: (p: Page) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links: { label: string, page: Page }[] = [
    { label: "Il Percorso", page: "percorso" },
    { label: "Il Metodo", page: "metodo" },
    { label: "Esperienze", page: "esperienze" },
    { label: "Archivio", page: "archivio" },
    { label: "Chi sono", page: "chi-sono" },
    { label: "Contatti", page: "contatti" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(11,9,8,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(180,151,90,0.15)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
     <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
  {/* Logo */}
  <button
    className="flex items-center gap-3"
    onClick={() => {
      navigate("home")
      setMenuOpen(false)
    }}
  >
    <img
      src="/images/vyrah-logo-dis.svg"
      alt="VYЯΛH"
      className="h-16.5 w-auto -ml-3"
      draggable="false"
    />
  </button>

  {/* Desktop Links */}
  <div className="hidden md:flex items-center gap-8">
    {links.map((l) => (
      <button
        key={l.page}
        className={`nav-link ${current === l.page ? "active" : ""}`}
        onClick={() => navigate(l.page)}
      >
        {l.label}
      </button>
    ))}
  </div>

  {/* CTA */}
  <div className="hidden md:flex items-center gap-4">
    <button className="nav-link" onClick={() => navigate("vyrah")}>
      Vyrah
    </button>
    <button
      className="cta-primary text-xs"
      style={{ padding: "10px 20px" }}
      onClick={() => navigate("esperienze")}
    >
      Inizia il Percorso
    </button>
  </div>

  {/* Mobile Toggle */}
  <button
    className="md:hidden flex flex-col gap-1.5 p-2"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span
      className="block w-6 h-px transition-all"
      style={{
        background: "#B4975A",
        transform: menuOpen
          ? "rotate(45deg) translate(2px, 2px)"
          : "none",
      }}
    />
    <span
      className="block w-6 h-px transition-all"
      style={{
        background: "#B4975A",
        opacity: menuOpen ? 0 : 1,
      }}
    />
    <span
      className="block w-6 h-px transition-all"
      style={{
        background: "#B4975A",
        transform: menuOpen
          ? "rotate(-45deg) translate(2px, 2px)"
          : "none",
      }}
    />
  </button>
</div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-6"
          style={{ background: "rgba(11,9,8,0.98)" }}
        >
          {[
            ...links,
            { label: "Vyrah", page: "vyrah" as Page },
            { label: "Chi Sono", page: "chi-sono" as Page },
          ].map((l) => (
            <button
              key={l.page}
              className="nav-link text-left text-sm"
              onClick={() => {
                navigate(l.page)
                setMenuOpen(false)
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            className="cta-primary self-start"
            onClick={() => {
              navigate("esperienze")
              setMenuOpen(false)
            }}
          >
            Inizia il Percorso
          </button>
        </div>
      )}
    </nav>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer
      style={{
        background: "#0B0908",
        borderTop: "1px solid rgba(180,151,90,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/vyrah-logo-dis.svg"
                alt="VYЯΛH"
                className="h-15 w-auto -ml-3 translate-y-7"
                draggable="false"
              />
            </div>

            <p
              className="font-cormorant text-lg italic mb-8"
              style={{ color: "#E8DDCA88", lineHeight: 1.6 }}
            >
              Un percorso verso la tua eudaimonia.
            </p>

            <div className="flex gap-4">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/vyrah.eudaimonia/",
                },
                {
                  label: "Telegram",
                  href: "https://t.me/vyrah_eudaimonia",
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/393773596931?text=Ciao%20Valentina%2C%20ti%20scrivo%20per%20Vyrah.",
                },
                {
                  label: "Email",
                  href: "mailto:vyrah.eudaimonia@gmail.com",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "Instagram" || item.label === "Telegram"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.label === "Instagram" || item.label === "Telegram"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="section-label"
                  style={{
                    color: "#E8DDCA44",
                    transition: "color 0.3s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#B4975A")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#E8DDCA44")
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6">Navigazione</p>

            <div className="flex flex-col gap-3">
              {[
                ["Percorso Vyrah", "vyrah"],
                ["Esperienze", "esperienze"],
                ["Il Metodo", "metodo"],
                ["Il Percorso", "percorso"],
                ["Eventi", "eventi"],
                ["Chi Sono", "chi-sono"],
              ].map(([label, page]) => (
                <button
                  key={page}
                  className="nav-link text-left"
                  onClick={() => navigate(page as Page)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* More */}
          <div>
            <p className="section-label mb-6">Altro</p>

            <div className="flex flex-col gap-3">
              {[
                ["Archivio", "archivio"],
                ["Negozio", "negozio"],
                ["Voci", "voci"],
                ["Credere", "credere"],
                ["Contatti", "contatti"],
              ].map(([label, page]) => (
                <button
                  key={page}
                  className="nav-link text-left"
                  onClick={() => navigate(page as Page)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <GoldSeparator />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p
              className="font-cormorant text-sm"
              style={{ color: "#E8DDCA33" }}
            >
              © 2026 Vyrah. Tutti i diritti riservati.
            </p>

            <p
              className="font-cormorant text-xs mt-1"
              style={{ color: "#E8DDCA22" }}
            >
              Fotografie originali di Valentina Rossi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page: HOME ───────────────────────────────────────────────────────────────
function PageHome({ navigate }: { navigate: (p: Page) => void }) {
  const experiences = [
    {
      title: "Consulenze",
      desc: "Un incontro dedicato a una domanda, una situazione o un momento che desideri osservare da una prospettiva diversa.",
      img: IMG.luna01,
      action: () => navigate("esperienze"),
    },
    {
      title: "Percorsi",
      desc: "Un'esplorazione che si sviluppa nel tempo, seguendo le domande e le direzioni che emergono lungo la ricerca.",
      img: IMG.luna04,
      action: () => navigate("esperienze"),
    },
    {
      title: "Corsi",
      desc: "Conoscere i linguaggi simbolici e imparare a utilizzarli come strumenti di osservazione, interpretazione e ricerca.",
      img: IMG.luna02,
      mirror: true,
      action: () => navigate("esperienze"),
    },
    {
      title: "Eventi",
      desc: "Incontri, esperienze e momenti condivisi attraverso cui Vyrah cresce e prende forma nelle connessioni che genera.",
      img: IMG.luna03,
      action: () => navigate("esperienze"),
    },
  ];

  const languages = [
  {
    title: "Simbolo",
    text: "Un linguaggio per vedere ciò che spesso rimane implicito.",
    action: () => navigate("metodo"),
  },
  {
    title: "Parola",
    text: "Dare forma al pensiero significa anche creare nuove possibilità.",
    action: () => navigate("archivio"),
  },
  {
    title: "Arte",
    text: "Esprimere ciò che ancora non trova una definizione.",
    action: () => navigate("negozio"),
  },
  {
    title: "Esperienza",
    text: "Conoscere attraverso ciò che viene realmente vissuto.",
    action: () => navigate("eventi"),
  },
];

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #0B0908 0%, #0B0908 18%, #100C0A 38%, #15100D 58%, #100C0A 76%, #0B0908 100%)",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{ background: "#0B0908" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${IMG.vyrahHome}')`,
            backgroundPosition: "40% center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,9,8,0.04) 0%, rgba(11,9,8,0.08) 45%, rgba(11,9,8,0.55) 100%), linear-gradient(to top, rgba(11,9,8,0.88) 0%, rgba(11,9,8,0.25) 48%, transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-24 w-full">
          <div className="max-w-3xl ml-auto text-right">
            <p
              className="section-label mb-7 opacity-0 animate-fade-up"
              style={{ color: "#B4975A" }}
            >
              VYRAH
            </p>

            <h1
              className="hero-heading text-4xl md:text-[4.5rem] leading-[1.08] mb-7 opacity-0 animate-fade-up delay-200"
              style={{
                color: "#E8DDCA",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Un percorso verso
              <br />
              <span style={{ color: "#D0B875" }}>la tua eudaimonia.</span>
            </h1>

            <p
              className="font-cormorant text-xl md:text-2xl max-w-2xl ml-auto mb-10 opacity-0 animate-fade-up delay-400"
              style={{
                color: "#E8DDCAD9",
                lineHeight: 1.65,
              }}
            >
              Un progetto dedicato alla conoscenza di sé, alla ricerca e alla
              costruzione di una vita più coerente con la propria natura.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-end opacity-0 animate-fade-up delay-600">
              <button
                className="cta-primary"
                onClick={() => navigate("vyrah")}
              >
                Esplora Vyrah
              </button>

              <button
                className="cta-secondary"
                onClick={() => navigate("percorso")}
              >
                Inizia da qui
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 opacity-40 hidden md:flex flex-col items-center gap-2">
          <span
            className="section-label"
            style={{ writingMode: "vertical-rl" }}
          >
            Scorri
          </span>

          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, #B4975A, transparent)",
            }}
          />
        </div>
      </section>

      {/* =========================================================
          EUDAIMONIA
      ========================================================= */}
      <section
        className="relative py-28 md:py-20"
        style={{
          background:
            "linear-gradient(to bottom, #0B0908 0%, #0E0B09 100%, #15100D 50%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28 items-start">
            <div>
              <p className="section-label mb-6">Il centro</p>

              <h2
                className="display-heading text-4xl md:text-5xl"
                style={{ color: "#E8DDCA" }}
              >
                Vivere secondo
                <br />
                <span style={{ color: "#B4975A" }}>ciò che si è.</span>
              </h2>
            </div>

            <div>
              <div className="gold-line mb-8" />

              <p
                className="font-cormorant text-2xl md:text-3xl mb-8"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.5,
                }}
              >
                Eudaimonia nasce dall'incontro tra{" "}
                <em>eu</em>, «bene», e{" "}
                <em>daimōn</em>, «spirito» o «potenza divina»: nell’antica Grecia indicava il vivere bene, una vita che può fiorire secondo la propria natura.
              </p>

              <p
                className="editorial-body mb-6"
                style={{ color: "#E8DDCA99" }}
              >
                È l'idea di una vita che trova la propria forma nell'accordo
                tra ciò che siamo, ciò che scegliamo e ciò che realizziamo.
                Non una condizione da raggiungere una volta per tutte, ma una
                direzione da riconoscere e costruire.
              </p>

              <p
                className="editorial-body"
                style={{ color: "#E8DDCA99" }}
              >
                È questa la direzione di Vyrah: comprendere la propria natura,
                attraversare l'esperienza con consapevolezza e trasformare ciò
                che si riconosce in possibilità concrete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT
      ========================================================= */}
      <section
        className="relative overflow-hidden py-28 md:py-20"
        style={{
          background:
            "linear-gradient(to bottom, #0E0B09 10%, #120709 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="section-label mb-6">Un progetto in divenire</p>

              <h2
                className="display-heading text-4xl md:text-5xl mb-8"
                style={{ color: "#E8DDCA" }}
              >
                Un mondo che
                <br />
                <span style={{ color: "#D0B875" }}>può crescere.</span>
              </h2>

              <div className="gold-line mb-8" />

              <p
                className="editorial-body mb-6"
                style={{ color: "#E8DDCAAA" }}
              >
                Vyrah prende forma attraverso percorsi, esperienze, strumenti,
                ricerca e creazione. Ogni elemento può diventare una nuova
                possibilità di conoscenza e di espressione.
              </p>

              <p
                className="editorial-body mb-9"
                style={{ color: "#E8DDCAAA" }}
              >
                Oggi alcune di queste possibilità esistono già. Altre stanno
                ancora cercando la propria forma.
              </p>

              <button
                className="cta-secondary"
                onClick={() => navigate("vyrah")}
              >
                Conosci il progetto
              </button>
            </div>

            <div className="relative min-h-[460px] md:min-h-[520px]">
              <img
                src={IMG.soleLuce}
                alt="Immagine del mondo Vyrah"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "53% center",
                  filter: "brightness(0.85) contrast(1.1) sepia(0.0)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, #18100F 0%, rgba(24,16,15,0.15) 20%, transparent 50%)",
                }}
              />

              <div className="absolute bottom-8 left-8 right-8">
                <p
                  className="font-cormorant text-lg italic"
                  style={{
                    color: "#E8DDCA77",
                    lineHeight: 1.5,
                  }}
                >
                  La forma può ancora cambiare. La luce, intanto, indica la direzione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCES
      ========================================================= */}
      <section
        className="relative py-28 md:py-20"
        style={{
          background:
            "linear-gradient(to bottom, #120709 10%, #0B0908 50%, #17100E 20%, #0B0908 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="section-label mb-5">Dove cominciare</p>

              <h2
                className="display-heading text-4xl md:text-5xl mb-6"
                style={{ color: "#E8DDCA" }}
              >
                Le forme che Vyrah
                <br />
                <span style={{ color: "#B4975A" }}>ha già preso.</span>
              </h2>

              <p
                className="editorial-body max-w-xl"
                style={{ color: "#E8DDCA88" }}
              >
                Puoi entrare nel mondo Vyrah da punti diversi. La ricerca è
                una, le forme attraverso cui attraversarla possono essere
                molte.
              </p>
            </div>

            <button
              className="cta-secondary self-start md:self-auto"
              onClick={() => navigate("esperienze")}
            >
              Scopri tutte le esperienze
            </button>
          </div>

          {/* Four experiences — one continuous visual field */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className="relative group overflow-hidden cursor-pointer"
                style={{
                  height: "390px",
                  background: "#000000",
                  borderRight:
                    index < experiences.length - 1
                      ? "1px solid rgba(180,151,90,0.10)"
                      : "none",
                }}
                onClick={experience.action}
              >
                <img
                  src={experience.img}
                  alt={experience.title}
                  className="absolute top-0 left-1/2 w-[300px] object-cover transition-all duration-700"
                  style={{
                    transform: experience.mirror
                      ? "translateX(-50%) scaleX(-1)"
                      : "translateX(-50%)",
                    marginTop: "28px",
                    filter: "brightness(1.0) sepia(0.0)",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLImageElement
                    ).style.transform = experience.mirror
                      ? "translateX(-50%) scaleX(-1) scale(1.08)"
                      : "translateX(-50%) scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLImageElement
                    ).style.transform = experience.mirror
                      ? "translateX(-50%) scaleX(-1)"
                      : "translateX(-50%)";
                  }}
                />

                {/* Soft transition from image into the card */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 24%, rgba(11,9,8,0) 0%, rgba(11,9,8,0.02) 38%, rgba(11,9,8,0.72) 72%, #0B0908 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 38%, rgba(11,9,8,0.9) 62%, #0B0908 100%)",
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3
                    className="font-cinzel text-base mb-4"
                    style={{
                      color: "#D0B875",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {experience.title}
                  </h3>

                  <p
                    className="font-cormorant text-base"
                    style={{
                      color: "#E8DDCA99",
                      lineHeight: 1.5,
                    }}
                  >
                    {experience.desc}
                  </p>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(66,27,32,0.12), transparent 55%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LANGUAGES
      ========================================================= */}
      <section
        className="relative py-28 md:py-20"
        style={{
          background:
            "linear-gradient(to bottom, #0B0908 0%, #100C0A 55%, #15100D 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-label mb-5">I linguaggi di Vyrah</p>

            <h2
              className="display-heading text-4xl md:text-5xl mb-7"
              style={{ color: "#E8DDCA" }}
            >
              Molti linguaggi.
              <br />
              <span style={{ color: "#B4975A" }}>
                Una stessa ricerca.
              </span>
            </h2>

            <p
              className="editorial-body"
              style={{ color: "#E8DDCA88" }}
            >
              Ogni linguaggio permette di osservare qualcosa da una
              prospettiva diversa. Il simbolo apre immagini, l'arte dà forma,
              la parola chiarisce, l'esperienza verifica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
  {languages.map((item) => (
    <button
      key={item.title}
      onClick={item.action}
      className="group relative p-10 md:p-12 text-left overflow-hidden"
      style={{
        background: "#0B0908",
        minHeight: "270px",
        borderTop: "1px solid rgba(180,151,90,0.12)",
        transition:
          "background 0.45s ease, border-color 0.45s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#421B2018";
        el.style.borderColor = "rgba(180,151,90,0.28)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#0B0908";
        el.style.borderColor = "rgba(180,151,90,0.12)";
      }}
    >
      <div className="flex flex-col h-full">
        <div>
          <h3
            className="display-heading text-2xl mb-5 transition-transform duration-500 group-hover:translate-x-1"
            style={{ color: "#B4975A" }}
          >
            {item.title}
          </h3>

          <div className="gold-line mb-6" />

          <p
            className="font-cormorant text-lg"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.55,
            }}
          >
            {item.text}
          </p>
        </div>

        <div
          className="mt-auto pt-8 flex items-center gap-3 font-cinzel text-xs tracking-[0.12em]"
          style={{ color: "#D0B875" }}
        >
          <span>ESPLORA</span>

          <span
            className="text-lg transition-transform duration-500 group-hover:translate-x-2"
          >
            →
          </span>
        </div>
      </div>
    </button>
  ))}
</div>
        </div>
      </section>

      {/* =========================================================
          WORD
      ========================================================= */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #15100D 0%, #2E0D11 50%, #170A0C 100%)",
          borderTop: "1px solid rgba(180,151,90,0.10)",
          borderBottom: "1px solid rgba(180,151,90,0.10)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="section-label mb-8">La parola</p>

          <h2
            className="large-quote text-4xl md:text-6xl mb-10"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.15,
            }}
          >
            Ciò che riesci a nominare
            <br />
            <span style={{ color: "#D0B875" }}>
              può iniziare a prendere forma.
            </span>
          </h2>

          <p
            className="font-cormorant text-xl md:text-2xl max-w-3xl mx-auto mb-10"
            style={{
              color: "#E8DDCA99",
              lineHeight: 1.65,
            }}
          >
            Le parole possono ordinare il pensiero, renderlo comunicabile e
            aprire una direzione. Dare un nome a ciò che viviamo significa
            anche iniziare a comprenderne la forma.
          </p>

          <button
            className="cta-secondary"
            onClick={() => navigate("archivio")}
          >
            Esplora l'Archivio
          </button>
        </div>
      </section>

      {/* =========================================================
          NETWORK / FUTURE
      ========================================================= */}
      <section
        className="relative py-28 md:py-36"
        style={{
          background:
            "linear-gradient(to bottom, #170A0C 0%, #110D0B 0%, #0B0908 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-16 lg:gap-24 items-center">
            <div>
              <p className="section-label mb-6">Oltre il presente</p>

              <h2
                className="display-heading text-4xl md:text-5xl mb-8"
                style={{ color: "#E8DDCA" }}
              >
                Costruire insieme
                <br />
                <span style={{ color: "#B4975A" }}>
                  qualcosa di più grande.
                </span>
              </h2>

              <div className="gold-line mb-8" />

              <p
                className="editorial-body mb-6"
                style={{ color: "#E8DDCA99" }}
              >
                Vyrah è pensato per crescere oltre le forme che conosce oggi.
                Nuove competenze, nuovi percorsi, nuovi linguaggi e nuove
                persone possono contribuire a dare al progetto forme ancora da
                scoprire.
              </p>

              <p
                className="editorial-body"
                style={{ color: "#E8DDCA99" }}
              >
                Nel tempo, questo può diventare anche uno spazio di
                collaborazione: persone diverse, capacità diverse, una ricerca
                condivisa.
              </p>
            </div>

            <div
              className="relative p-10 md:p-14 overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #15100D 0%, #1B1010 100%)",
                border: "1px solid rgba(180,151,90,0.16)",
              }}
            >
              <div
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full"
                style={{
                  border: "1px solid rgba(180,151,90,0.08)",
                }}
              />

              <p
                className="font-cinzel text-xs tracking-[0.3em] mb-8"
                style={{ color: "#B4975A" }}
              >
                UNA POSSIBILITÀ FUTURA
              </p>

              <h3
                className="display-heading text-3xl mb-6"
                style={{ color: "#E8DDCA" }}
              >
                Vuoi portare
                <br />
                Vyrah nel mondo?
              </h3>

              <p
                className="font-cormorant text-xl mb-8"
                style={{
                  color: "#E8DDCA88",
                  lineHeight: 1.6,
                }}
              >
                Il progetto potrà aprirsi a chi desidera contribuire con le
                proprie competenze, il proprio sguardo e il proprio modo di
                creare possibilità.
              </p>

              <button
                className="cta-secondary"
                onClick={() => navigate("contatti")}
              >
                Parliamone
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        className="relative py-32 md:py-26"
        style={{
          background:
            "linear-gradient(to bottom, #0B0908 0%, #15100D 100%)",
          borderTop: "1px solid rgba(180,151,90,0.08)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-7">Da dove cominciare</p>

          <h2
            className="display-heading text-4xl md:text-5xl mb-7"
            style={{ color: "#E8DDCA" }}
          >
            C'è sempre una domanda
            <br />
            <span style={{ color: "#D0B875" }}>
              da cui iniziare.
            </span>
          </h2>

          <p
            className="font-cormorant text-xl md:text-2xl mb-12"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.6,
            }}
          >
            Esplora ciò che Vyrah offre oggi e trova la forma più vicina a ciò
            che stai cercando.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="cta-primary"
              onClick={() => navigate("esperienze")}
            >
              Esplora le esperienze
            </button>

            <button
              className="cta-secondary"
              onClick={() => navigate("voci")}
            >
              Poni una domanda
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Page: VYRAH ──────────────────────────────────────────────────────────────
function PageVyrah({ navigate }: { navigate: (p: Page) => void }) {
  const [philosophyOpen, setPhilosophyOpen] = useState(false);

  return (
    <div className="bg-[#0B0908] text-[#E8DDCA] overflow-hidden">

      {/* =========================================================
          ANIMAZIONI LOCALI
      ========================================================= */}
      <style>{`
        @keyframes vyrahReveal {
          0% {
            opacity: 0;
            transform: translateY(18px);
            letter-spacing: 0.22em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.04em;
          }
        }

        @keyframes vyrahGlow {
          0% {
            opacity: 0;
            transform: scaleX(0.35);
          }
          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes vyrahLight {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes vyrahFadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .vyrah-reveal {
          animation: vyrahReveal 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .vyrah-glow {
          animation: vyrahGlow 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s
            forwards;
          transform-origin: center;
          opacity: 0;
        }

        .vyrah-light {
          animation: vyrahLight 2s ease 0.7s forwards;
          opacity: 0;
        }

        .vyrah-fade-up {
          animation: vyrahFadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.9s
            forwards;
          opacity: 0;
        }

        .vyrah-philosophy-overlay {
          animation: vyrahFadeUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>


      {/* =========================================================
          HERO — IN PRINCIPIO
          Mantiene la struttura grafica originale.
      ========================================================= */}
      <section
        className="relative min-h-[78vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center, #18110E 0%, #0B0908 48%, #070605 100%)",
          borderBottom: "1px solid rgba(180,151,90,0.12)",
        }}
      >

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(180,151,90,0.07) 0%, transparent 42%)",
          }}
        />

        <div className="relative z-10 text-center px-6 translate-y-10">

          <p
            className="section-label mb-0 vyrah-light"
            style={{ color: "#B4975A" }}
          >
            IN PRINCIPIO
          </p>

          <div className="mt-0 vyrah-reveal">
            <img
              src="/images/vyrah-logo-dis.svg"
              alt="VYЯΛH"
              className="h-36 md:h-36 lg:h-40 w-auto mx-auto"
              draggable="false"
            />
          </div>

          <div className="-mt-12 md:-mt-6 vyrah-glow">
            <GoldSeparator />
          </div>

          <p
            className="font-cormorant text-lg md:text-xl italic vyrah-light max-w-2xl mx-auto mt-5 leading-relaxed"
            style={{ color: "#E8DDCA88" }}
          >
            Una ricerca che può diventare una forma di vita.
          </p>

        </div>

      </section>


      {/* =========================================================
          01 — CHE COS'È VYRAH
      ========================================================= */}
      <section className="py-24 md:py-32 px-6 md:px-12">

        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-[0.65fr_1.35fr] gap-12 md:gap-20 items-start">

            <div>
              <p
                className="font-cinzel text-[10px] tracking-[0.3em] mb-5"
                style={{ color: "#B4975A" }}
              >
                IL PROGETTO
              </p>

              <h2
                className="font-cinzel text-3xl md:text-4xl leading-tight"
                style={{ color: "#E8DDCA" }}
              >
                Una ricerca
                <br />
                da vivere.
              </h2>
            </div>

            <div className="font-cormorant text-xl md:text-2xl leading-relaxed">

              <p className="mb-7">
                Vyrah nasce dalla ricerca di una vita più coerente con ciò che
                siamo.
              </p>

              <p className="mb-7">
                Oggi questa ricerca prende forma attraverso percorsi,
                esperienze, studio, simboli, confronto e osservazione.
                Sono strumenti diversi che convergono verso una stessa
                direzione: comprendere meglio ciò che siamo e trovare il modo
                di portarlo nella vita.
              </p>

              <p style={{ color: "#D0B875" }}>
                Ma il progetto può diventare molto più grande della sua forma
                attuale.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          02 — LA VISIONE
          Composizione editoriale, non cards.
      ========================================================= */}
      <section
        className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden"
        style={{ background: "#15100D" }}
      >

        <div className="max-w-6xl mx-auto">

          <div className="flex items-end justify-between gap-8 mb-14">

            <div>
              <p
                className="font-cinzel text-[10px] tracking-[0.3em] mb-5"
                style={{ color: "#B4975A" }}
              >
                LA VISIONE
              </p>

              <h2
                className="font-cinzel text-3xl md:text-5xl leading-tight"
                style={{ color: "#F1E8D8" }}
              >
                E se il cambiamento
                <br className="hidden md:block" />
                partisse da dentro?
              </h2>
            </div>

            <span
              className="hidden md:block font-cinzel text-[9px] tracking-[0.25em] pb-2"
              style={{ color: "#B4975A88" }}
            >
              UNA POSSIBILITÀ
            </span>

          </div>


          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-stretch">

            {/* testo */}
            <div className="flex flex-col justify-between">

              <div className="font-cormorant text-xl md:text-2xl leading-relaxed max-w-2xl">

                <p className="mb-7">
                  La visione di Vyrah parte da una possibilità: che il lavoro
                  interiore di un individuo possa modificare progressivamente
                  il modo in cui vive, sceglie, comunica e costruisce
                  relazioni.
                </p>

                <p className="mb-10">
                  E che, quando questa trasformazione non rimane isolata ma
                  viene condivisa da più individui, possa generare qualcosa di
                  più ampio.
                </p>

                <p
                  className="text-xl md:text-2xl italic"
                  style={{ color: "#D0B875" }}
                >
                  Una cultura costruita da individui che hanno imparato a
                  vivere con maggiore consapevolezza della propria natura.
                </p>

              </div>

              <div className="mt-12 pt-13 border-t border-[#B4975A]/20">

              </div>

            </div>


            {/* immagine / spazio fotografico */}
            <div
              className="relative min-h-[380px] md:min-h-[480px] overflow-hidden -translate-y-37"
              style={{
                border: "1px solid rgba(180,151,90,0.22)",
              }}
            >

              <img
                src="/images/sole-crepuscolo.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-200"
                style={{
                  filter: "brightness(1.2) contrast(1.25) saturate(1.1)",
                  }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(11,9,8,0.12), rgba(11,9,8,0.72))",
                }}
              />
<div className="absolute bottom-8 left-8 right-8">
                <p
                  className="font-cormorant text-lg italic"
                  style={{
                    color: "#E8DDCA77",
                    lineHeight: 1.5,
                  }}
                >
                  Una possibilità individuale può diventare una possibilità
                  collettiva.
                </p>
              </div>
              <div className="absolute inset-0 flex items-end p-7 md:p-9">

                

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          03 — FILOSOFIA
          Estratto + apertura del grande pop-up.
      ========================================================= */}
      <section className="py-28 md:py-36 px-6 md:px-12">

        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-[0.65fr_1.35fr] gap-12 md:gap-20">

            <div>
              <p
                className="font-cinzel text-[10px] tracking-[0.3em] mb-5"
                style={{ color: "#B4975A" }}
              >
                LA FILOSOFIA
              </p>

              <h2
                className="font-cinzel text-3xl md:text-4xl leading-tight"
                style={{ color: "#E8DDCA" }}
              >
                Da dove
                <br />
                nasce?
              </h2>
            </div>


            <div>

              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed mb-8">
                La filosofia di Vyrah nasce da una domanda fondamentale:
                <span style={{ color: "#D0B875" }}>
                  {" "}
                  come possiamo imparare a riconoscere ciò che siamo e
                  costruire una vita che gli sia realmente coerente?
                </span>
              </p>

              <p className="font-cormorant text-lg md:text-xl leading-relaxed opacity-70 max-w-2xl">
                Nel tempo questa domanda si è incontrata con filosofia,
                religione, simbolismo, arte, esperienza e ricerca. Da questi
                incontri sta prendendo forma un pensiero ancora aperto, che
                continua a essere verificato attraverso la vita.
              </p>

              <button
                onClick={() => setPhilosophyOpen(true)}
                className="group mt-10 inline-flex items-center gap-5 font-cinzel text-[10px] tracking-[0.25em]"
                style={{ color: "#B4975A" }}
              >
                <span>LEGGI LA FILOSOFIA DI VYRAH</span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>

            </div>

          </div>

        </div>
      </section>

{/* =========================================================
    04 — POPUP FILOSOFIA
========================================================= */}
{philosophyOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6"
    style={{
      background: "rgba(5,4,3,0.08)",
      backdropFilter: "blur(4px)",
    }}
  >
    <div
      className="relative w-full max-w-6xl h-[92vh] overflow-hidden"
      style={{
        background: "#0B0908",
        border: "1px solid rgba(180,151,90,0.22)",
        boxShadow: "0 30px 100px rgba(0,0,0,0.65)",
      }}
    >
      {/* CHIUDI */}
      <button
        onClick={() => setPhilosophyOpen(false)}
        className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 transition-all duration-300"
        style={{
          color: "#B4975A",
          border: "1px solid rgba(180,151,90,0.25)",
          background: "rgba(11,9,8,0.75)",
        }}
        aria-label="Chiudi filosofia"
      >
        <span className="text-xl leading-none">×</span>
      </button>

      {/* CONTENUTO */}
      <div className="h-full overflow-y-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <article className="max-w-4xl mx-auto">

          {/* TITOLO */}
          <header className="mb-16">
            <p
              className="font-cinzel text-xs tracking-[0.35em] mb-6"
              style={{ color: "#B4975A" }}
            >
              LA FILOSOFIA DI VYRAH
            </p>

            <h2
              className="font-cinzel text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
              style={{ color: "#E8DDCA" }}
            >
              La filosofia
              <br />
              di Vyrah
            </h2>

            <p
              className="font-cormorant italic text-xl sm:text-2xl leading-[1.45] mt-8 max-w-3xl"
              style={{ color: "#B4975A" }}
            >
              Un pensiero nato dalla ricerca di chi siamo, dalla possibilità
              di riconoscerci e dal desiderio di costruire una vita che
              sentiamo autenticamente nostra.
            </p>
          </header>

          <div
            className="w-full h-px mb-16"
            style={{
              background:
                "linear-gradient(to right, rgba(180,151,90,0.5), rgba(180,151,90,0.08), transparent)",
            }}
          />

          {/* =====================================================
              DA DOVE NASCE VYRAH
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              DA DOVE NASCE VYRAH
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Prima di chiedersi che cosa sia Vyrah, forse vale la pena fare
                un passo indietro. <strong>Perché nasce?</strong> Vyrah nasce
                dalla necessità di dare una forma concreta a una ricerca che
                mi accompagna da tempo: comprendere più a fondo l'esistenza,
                attraversare le cose prima di parlarne e trasformare quello
                che apprendo in qualcosa che possa essere utile anche ad altri.
              </p>

              <p>
                La mia natura mi ha sempre portata a voler andare oltre la
                superficie. Non mi basta sapere che qualcosa è così: voglio
                comprenderne l'origine, seguirne le tracce, metterla alla prova
                attraverso l'esperienza. E insieme a questa inclinazione ne
                esiste un'altra, altrettanto forte: quella di condividere
                quanto ho scoperto quando può diventare una possibilità anche
                per qualcun altro.
              </p>

              <p>
                È da questo incontro che nasce Vyrah. Non come un sistema già
                compiuto, ma come il tentativo di costruire, attraverso la
                ricerca, il mio modo di apprendere, comprendere e restituire.
              </p>
            </div>
          </section>

          {/* =====================================================
              RICONOSCERSI
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              RICONOSCERSI
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Tra le esperienze che più hanno contribuito a dare una
                direzione a questa ricerca, ce n'è una che ritorna
                continuamente: vedere qualcuno riconoscersi in una possibilità
                che, fino a quel momento, non aveva saputo nominare. È una
                differenza sottile, ma fondamentale.
              </p>

              <p>
                Una cosa può esserci detta da qualcuno e sembrarci vera.
                Un'altra è sentirla risuonare dentro di noi e accorgerci che,
                in qualche modo, la conoscevamo già. È successo anche a me.
              </p>

              <p>
                Quando qualcuno ha dato forma, attraverso una lettura
                numerologica, a un'idea che avevo già intuito per la mia vita,
                non ho sentito di aver ricevuto una verità dall'esterno. Mi
                sono ritrovata in quelle parole. E proprio in quella differenza
                ho riconosciuto qualcosa di importante.
              </p>

              <p
                className="border-l pl-6 py-2 italic"
                style={{ borderColor: "#B4975A", color: "#D0B875" }}
              >
                <strong>
                  Una risposta non diventa vera soltanto perché qualcuno ce la
                  consegna. Diventa significativa quando, incontrandola,
                  troviamo dentro di noi qualcosa che la riconosce.
                </strong>
              </p>

              <p>
                È anche questo che ho iniziato a osservare nelle persone
                incontrate durante le mie prime letture. A volte bastava una
                parola, un'immagine, una possibilità formulata in modo diverso
                perché qualcosa cambiasse nel loro modo di guardarsi. Non
                perché io avessi detto loro chi erano. Ma perché, per un
                istante, avevano potuto vedersi da una prospettiva nuova.
              </p>

              <p>
                Da qui è nata una delle intuizioni fondamentali di Vyrah:
                <strong> imparare a riconoscersi.</strong>
              </p>

              <p>
                La parola stessa custodisce questa idea.{" "}
                <em>Recognoscere</em>: conoscere di nuovo. Il prefisso{" "}
                <em>re-</em> porta con sé l'idea del ritorno, mentre{" "}
                <em>cognoscere</em> rimanda al conoscere, al venire a sapere.
                Ma quel “di nuovo” non implica necessariamente tornare a una
                versione passata di noi. Può significare tornare in contatto
                con qualcosa che, pur essendo sempre stato presente, abbiamo
                smesso di ascoltare.
              </p>

              <p>
                Forse una parte di noi non deve essere costruita da zero.
                Forse, talvolta, deve essere ritrovata sotto tutto quello che
                vi si è depositato sopra. Aspettative, ruoli, abitudini, paure,
                desideri ereditati, immagini di quello che dovremmo essere: nel
                tempo possiamo finire per confondere queste sovrastrutture con
                la nostra natura.
              </p>

              <p>
                E allora la ricerca di sé può assumere anche la forma di un
                ritorno.
              </p>

              <p
                className="text-center text-2xl sm:text-3xl py-3"
                style={{ color: "#D0B875" }}
              >
                <em>Uscire dalla mente per tornare al cuore.</em>
              </p>

              <p>
                Non nel senso di abbandonare la ragione, ma di restituire
                all'esperienza interiore una parte della conoscenza che abbiamo
                imparato a trattare soltanto come concetto.
              </p>

              <p>
                Riconoscersi non significa quindi trovare una definizione
                definitiva di sé. Significa sviluppare la sensibilità
                necessaria per accorgersi, nel corso della propria vita, di
                quanto ci appartiene davvero. E anche di quanto non ci
                appartiene più.
              </p>
            </div>
          </section>

          {/* =====================================================
              LE PAROLE NON SONO INNOCENTI
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              LE PAROLE NON SONO INNOCENTI
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Per questo, in Vyrah, anche le parole hanno un peso. Una parola
                non è soltanto un suono al quale abbiamo associato un
                significato. Porta con sé una storia, un'origine, immagini e
                stratificazioni che possono modificare il modo in cui
                pensiamo.
              </p>

              <p>
                Usare una parola significa, in qualche misura, accettare anche
                il mondo che quella parola porta con sé. Per questo vale la
                pena tornare alla sua origine, interrogarla, capire da dove
                proviene prima di affidarle un concetto.
              </p>

              <p>
                Non per trasformare ogni discorso in un esercizio di
                etimologia, ma perché talvolta una parola che utilizziamo
                automaticamente nasconde una distinzione che avevamo smesso di
                vedere.
              </p>

              <p>
                La lingua può restringere il pensiero oppure aprirlo. Può
                costringerci dentro definizioni già confezionate, oppure
                offrirci una possibilità più precisa di comprendere
                l'esperienza. Anche questa è ricerca.
              </p>

              <p>
                E forse imparare a scegliere meglio le parole significa, in
                parte, imparare a vedere meglio.
              </p>
            </div>
          </section>

          {/* =====================================================
              ESPERIENZA E INTERPRETAZIONE
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              ESPERIENZA E INTERPRETAZIONE
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Ogni esperienza passa attraverso una forma di interpretazione.
                Guardiamo il mondo attraverso la nostra storia, le conoscenze
                che abbiamo raccolto, le convinzioni che portiamo con noi, il
                linguaggio attraverso cui sappiamo nominarlo.
              </p>

              <p>
                Non possiamo fare esperienza senza interpretare. Possiamo però
                imparare a distinguere l'esperienza dalla lettura che ne
                facciamo.
              </p>

              <p>
                Questa distinzione è essenziale per il modo in cui Vyrah guarda
                ai simboli, alla numerologia, ai tarocchi, ai sogni, alle
                tradizioni e a ogni altro strumento attraverso cui cerchiamo di
                comprendere qualcosa di noi.
              </p>

              <p>
                Uno strumento può aprire una domanda senza possedere la
                risposta. Un simbolo può evocare una possibilità senza
                stabilire una verità. Una tradizione può custodire una
                conoscenza senza esaurire tutto il conoscibile. E una lettura
                può restituirci un'immagine nella quale ritrovarci senza
                diventare, per questo, un'autorità sulla nostra identità.
              </p>

              <p>
                Il punto non è decidere in anticipo che cosa sia vero e che
                cosa non lo sia. È sviluppare la capacità di osservare, fare
                esperienza, interrogare, confrontare e lasciare che il
                significato si chiarisca attraverso il tempo.
              </p>
            </div>
          </section>

          {/* =====================================================
              LA RICERCA NON HA BISOGNO DI UNA FEDE CIECA
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              LA RICERCA NON HA BISOGNO DI UNA FEDE CIECA
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Esiste una differenza tra accogliere una possibilità e
                consegnarle il proprio giudizio. Quando una risposta viene
                accettata prima ancora di essere attraversata, la ricerca
                rischia di arrestarsi. Ma anche il rifiuto preventivo può
                produrre lo stesso risultato.
              </p>

              <p>
                Per questo Vyrah non chiede adesione. Propone esperienza. Non è
                necessario considerare un simbolo vero per lasciarsi
                interrogare da esso. Non è necessario assumere una tradizione
                come assoluta per studiarla con rispetto. Non è necessario
                trasformare una teoria in certezza per permetterle di
                modificare, anche solo temporaneamente, il nostro punto di
                vista.
              </p>

              <p>
                Una formulazione può contenere un'intuizione preziosa senza
                esaurire la realtà che tenta di descrivere. Una tradizione può
                aver custodito una parte di verità senza possederla
                interamente. E una nuova interpretazione può talvolta rendere
                visibile una possibilità che una formulazione precedente non
                riusciva più a mostrare.
              </p>

              <p>La ricerca, per me, comincia proprio lì:</p>

              <p
                className="text-center text-2xl sm:text-3xl py-3"
                style={{ color: "#D0B875" }}
              >
                <strong>
                  nel punto in cui smettiamo di confondere la mappa con il
                  territorio.
                </strong>
              </p>
            </div>
          </section>

          {/* =====================================================
              DISTINGUERE SENZA SEPARARE
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              DISTINGUERE SENZA SEPARARE
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Comprendere richiede anche discernimento. Non tutto quello che
                ci attraversa ci appartiene. Non tutto quello che ci è stato
                insegnato deve essere rifiutato. Non tutto quello che sentiamo
                deve diventare immediatamente una convinzione.
              </p>

              <p>
                Imparare a discernere significa poter osservare le influenze
                che ci hanno formati senza doverle né venerare né distruggere.
                Significa poter dire: <em>questo mi ha formato, ma non
                necessariamente mi definisce.</em>
              </p>

              <p>
                E forse è proprio questa una delle forme più profonde di
                libertà. Perché essere liberi non significa vivere senza
                influenze, relazioni o vincoli. Significa poter sviluppare
                abbastanza consapevolezza da scegliere la direzione verso cui
                orientare la propria esistenza.
              </p>
            </div>
          </section>

          {/* =====================================================
              LIBERTÀ
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              LIBERTÀ
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                La libertà, in Vyrah, non è una fuga dal mondo. È la possibilità
                di costruire le condizioni necessarie per vivere secondo i
                propri ideali. Per questo comprende anche i legami.
              </p>

              <p>
                Per molto tempo ho immaginato la libertà come una grande rete:
                una trama di relazioni, conoscenze, competenze e possibilità
                capace di impedire che l'esistenza di qualcuno venga rinchiusa
                in un'unica strada.
              </p>

              <p>
                La comunicazione, in questo senso, diventa uno strumento
                potentissimo. Saper comunicare significa poter creare
                connessioni. E le connessioni possono aprire possibilità che
                prima non esistevano.
              </p>

              <p>
                Un incontro può diventare un'occasione. Una parola può aprire
                una porta. Una relazione può mostrare una direzione che non
                avevamo ancora considerato.
              </p>

              <p
                className="mt-10 text-center text-2xl sm:text-3xl"
                style={{ color: "#D0B875" }}
              >
                <strong>
                  Ognuno può <em>scegliere di voler</em> trovare il proprio
                  mezzo.
                </strong>
              </p>
            </div>
          </section>

          {/* =====================================================
              EUDAIMONIA
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              EUDAIMONIA
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                È qui che ritorna una parola che per Vyrah ha un significato
                particolare: <strong>eudaimonia</strong>. Non la felicità
                intesa come stato permanente, né l'idea di raggiungere una
                condizione perfetta dalla quale non avremo più bisogno di
                cambiare.
              </p>

              <p>
                Piuttosto, la possibilità di vivere secondo la propria natura,
                orientando progressivamente l'esistenza verso una forma che
                sentiamo coerente con chi siamo.
              </p>

              <p>
                Ma se la nostra natura non ci è completamente nota, allora
                anche questa coerenza non può essere immobile. Una vita propria
                non è una costruzione che, una volta terminata, rimane identica
                per sempre.
              </p>

              <p>
                Richiede ascolto. Richiede esperienza. Richiede la disponibilità
                a cambiare direzione quando comprendiamo che quella precedente
                non ci appartiene più.
              </p>

              <p>
                L'eudaimonia, allora, non è una destinazione. È una direzione
                verso cui impariamo continuamente a orientarci.
              </p>
            </div>
          </section>

          {/* =====================================================
              VYRAH È UN ESEMPIO
          ===================================================== */}
          <section className="mb-16">
            <h3
              className="font-cinzel text-xl sm:text-2xl tracking-[0.08em] mb-8"
              style={{ color: "#D0B875" }}
            >
              VYRAH È UN ESEMPIO
            </h3>

            <div
              className="font-cormorant text-lg sm:text-xl leading-[1.65] space-y-7"
              style={{ color: "#E8DDCA" }}
            >
              <p>
                Ed è qui che Vyrah torna a se stessa. Vyrah non vuole essere
                una forma di vita da imitare. Non vuole diventare una dottrina,
                un metodo universale o un insieme di risposte da applicare
                indistintamente.
              </p>

              <p>
                È, prima di tutto, <strong>un esempio.</strong> L'esempio
                concreto del tentativo di costruire il proprio mezzo verso
                l'eudaimonia attraverso quello che si è appreso, sperimentato e
                compreso.
              </p>

              <p>
                La mia ricerca, la mia curiosità, la mia inclinazione ad andare
                a fondo delle cose, la comunicazione, lo studio dei simboli,
                l'esperienza delle letture e tutto quello che ancora non
                conosco hanno trovato qui una forma comune.
              </p>

              <p>Vyrah nasce da questo movimento:</p>

              <p
                className="text-center text-2xl sm:text-3xl py-3 tracking-wide"
                style={{ color: "#D0B875" }}
              >
                <strong>
                  imparare, comprendere, sperimentare, restituire.
                </strong>
              </p>

              <p>
                E se qualcosa di quello che viene restituito può aiutare
                qualcun altro a guardarsi con maggiore chiarezza, allora la
                ricerca continua anche oltre chi l'ha iniziata.
              </p>

              <p>
                Non perché esista una risposta uguale per tutti. Ma perché
                forse possiamo aiutarci a trovare le domande giuste. A
                riconoscere una possibilità quando la incontriamo. A
                distinguere una voce autentica dal rumore che abbiamo imparato
                a chiamare nostro. A trovare, infine, il mezzo attraverso cui
                costruire una vita che ci appartenga.
              </p>

              <p
                className="text-center text-2xl sm:text-3xl pt-6"
                style={{ color: "#D0B875" }}
              >
                <strong>
                  Vyrah non vuole dirti chi sei.
                  <br />
                  <em>Vuole accompagnarti nel momento in cui cominci a riconoscerlo.</em>
                </strong>
              </p>

              <p
                className="text-center italic text-xl sm:text-2xl pt-6"
                style={{ color: "#B4975A" }}
              >
                Non voglio darti la risposta: voglio aiutarti a comprendere
                come trovarla.
              </p>
            </div>
          </section>

          {/* =====================================================
              ARCHIVIO
          ===================================================== */}
          <div
            className="mt-20 pt-10 text-center"
            style={{
              borderTop: "1px solid rgba(180,151,90,0.18)",
            }}
          >
            <button
              onClick={() => {
                setPhilosophyOpen(false)
                navigate("archivio")
              }}
              className="font-cinzel text-xs tracking-[0.25em] transition-all duration-300"
              style={{
                color: "#B4975A",
              }}
            >
              CONTINUA LA RICERCA NELL'ARCHIVIO →
            </button>
          </div>

        </article>
      </div>
    </div>
  </div>
)}
      {/* =========================================================
          05 — UNA RICERCA CHE DIVENTA VIA
      ========================================================= */}
      <section
        className="py-28 md:py-36 px-6 md:px-12"
        style={{ background: "#15100D" }}
      >

        <div className="max-w-5xl mx-auto">

          <div className="max-w-3xl">

            <p
              className="font-cinzel text-[10px] tracking-[0.3em] mb-5"
              style={{ color: "#B4975A" }}
            >
              OLTRE LA RICERCA INDIVIDUALE
            </p>

            <h2
              className="font-cinzel text-3xl md:text-5xl leading-tight"
              style={{ color: "#F1E8D8" }}
            >
              Quando una ricerca
              <br />
              diventa una via.
            </h2>

          </div>


          <div className="mt-14 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 items-center">

            <div className="font-cormorant text-xl md:text-2xl leading-relaxed">

              <p className="mb-7">
                Alcune tradizioni hanno trasformato una ricerca individuale
                in una via condivisibile: un insieme coerente di sguardi,
                pratiche e principi attraverso cui orientare la vita.
              </p>
              <p className="mb-7">
                Se Vyrah arriverà, nel tempo, alla sua forma più compiuta, vorrei che la sua evoluzione potesse muoversi in questa direzione: 
                </p>
              <p style={{ color: "#D0B875" }}>
                diventare una ricerca abbastanza profonda da poter essere condivisa.
              </p>

            </div>


            <div
              className="relative p-10 md:p-12"
              style={{
                borderLeft: "1px solid rgba(180,151,90,0.4)",
              }}
            >

              <span
                className="font-cinzel text-[9px] tracking-[0.3em]"
                style={{ color: "#B4975A" }}
              >
                UNA POSSIBILITÀ
              </span>

              <p
                className="font-cormorant text-3xl md:text-4xl italic leading-tight mt-7"
                style={{ color: "#E8DDCA" }}
              >
                Una filosofia non soltanto da comprendere,
                <br />
                ma da praticare.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          06 — DAL SINGOLO AL PROGETTO
      ========================================================= */}
      <section className="py-28 md:py-36 px-6 md:px-12">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24">

            <div>

              <p
                className="font-cinzel text-[10px] tracking-[0.3em] mb-5"
                style={{ color: "#B4975A" }}
              >
                IL FUTURO
              </p>

              <h2
                className="font-cinzel text-3xl md:text-5xl leading-tight"
                style={{ color: "#E8DDCA" }}
              >
                Dal singolo
                <br />
                al progetto.
              </h2>

            </div>


            <div>

              <p className="font-cormorant text-2xl md:text-3xl leading-relaxed mb-8">
                La forma futura di Vyrah non è ancora stabilita.
              </p>

              <p className="font-cormorant text-xl md:text-2xl leading-relaxed opacity-80 mb-8">
                Potrebbe crescere attraverso nuove ricerche, nuovi linguaggi,
                nuove esperienze e soprattutto attraverso gli incontri che
                saprà generare.
              </p>

              <p
                className="font-cormorant text-xl md:text-2xl leading-relaxed"
                style={{ color: "#D0B875" }}
              >
                Il progetto può arrivare, nel tempo, a diventare qualcosa di più grande della singola volontà da cui è nato.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          07 — PARTECIPARE
          Due ingressi distinti.
      ========================================================= */}
      <section
        className="py-28 md:py-36 px-6 md:px-12"
        style={{
          background:
            "linear-gradient(120deg, #351014 0%, #5A1E22 48%, #3E1217 100%)",
          borderTop: "1px solid rgba(180,151,90,0.2)",
        }}
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p
              className="font-cinzel text-[10px] tracking-[0.3em] mb-5"
              style={{ color: "#D0B875" }}
            >
              PARTECIPARE
            </p>

            <h2
              className="font-cinzel text-3xl md:text-5xl"
              style={{ color: "#F1E8D8" }}
            >
              Due modi per entrare.
            </h2>

            <p className="font-cormorant text-xl leading-relaxed mt-6 opacity-80">
              Puoi entrare nella ricerca partendo da te, oppure portando
              qualcosa che possa contribuire a farla crescere.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {/* percorso */}
            <button
              onClick={() => navigate("percorso")}
              className="group text-left bg-[#0B0908]/70 p-8 md:p-11 min-h-[330px] flex flex-col justify-between border border-[#B4975A]/20 hover:border-[#D0B875]/70 transition-all duration-500"
            >

              <div className="flex justify-between">

                <span
                  className="font-cinzel text-[9px] tracking-[0.3em]"
                  style={{ color: "#D0B875" }}
                >
                  PER TE
                </span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </div>

              <div>

                <h3
                  className="font-cormorant text-4xl"
                  style={{ color: "#F1E8D8" }}
                >
                  Inizia un percorso
                </h3>

                <p className="font-cormorant text-lg leading-relaxed mt-4 opacity-70 max-w-md">
                  Parti da ciò che stai vivendo e comincia a esplorarlo con
                  uno sguardo diverso.
                </p>

              </div>

            </button>


            {/* collaborazione */}
            <button
              onClick={() => navigate("contatti")}
              className="group text-left bg-[#0B0908]/70 p-8 md:p-11 min-h-[330px] flex flex-col justify-between border border-[#B4975A]/20 hover:border-[#D0B875]/70 transition-all duration-500"
            >

              <div className="flex justify-between">

                <span
                  className="font-cinzel text-[9px] tracking-[0.3em]"
                  style={{ color: "#D0B875" }}
                >
                  PER IL PROGETTO
                </span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </div>

              <div>

                <h3
                  className="font-cormorant text-4xl"
                  style={{ color: "#F1E8D8" }}
                >
                  Porta una prospettiva
                </h3>

                <p className="font-cormorant text-lg leading-relaxed mt-4 opacity-70 max-w-md">
                  Competenze, idee, linguaggi e visioni possono trovare spazio
                  all'interno della ricerca.
                </p>

              </div>

            </button>

          </div>

        </div>
      </section>


      {/* =========================================================
          08 — CHIUSURA
      ========================================================= */}
      <section className="py-28 md:py-36 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <p
            className="font-cinzel text-[10px] tracking-[0.3em]"
            style={{ color: "#B4975A" }}
          >
            IL PRIMO PASSO
          </p>

          <h2
            className="font-cinzel text-3xl md:text-5xl mt-6 leading-tight"
            style={{ color: "#F1E8D8" }}
          >
            La ricerca comincia
            <br />
            da una domanda.
          </h2>

          <p className="font-cormorant text-xl md:text-2xl leading-relaxed mt-7 opacity-75">
            Se senti che è arrivato il momento di guardare più attentamente
            ciò che stai vivendo, possiamo cominciare da lì.
          </p>

          <button
            onClick={() => navigate("esperienze")}
            className="cta-secondary mt-10 px-8 py-4 font-cinzel text-[10px] tracking-[0.25em] transition-all duration-300"
            style={{
              background: "#0B0908",
              color: "#B4975A",
            }}
          >
            INIZIA DA QUI
          </button>

        </div>

      </section>

    </div>
  );
}
// ─── Page: IL METODO ──────────────────────────────────────────────────────────
function PageMetodo({ navigate }: { navigate: (p: Page) => void }) {
  const tools = [
    {
      label: "IMMAGINE",
      name: "Tarologia",
      title: "Gli archetipi come specchio.",
      intro:
        "Utilizzo i tarocchi come un linguaggio visivo: le immagini diventano un punto di partenza per osservare ciò che stai vivendo da una prospettiva diversa.",
      how:
        "Non cerco nella carta una previsione. Osservo ciò che l'immagine suggerisce, le associazioni che suscita e il modo in cui entra in relazione con la tua domanda.",
      observe:
        "Desideri, paure, tensioni, possibilità e schemi che possono diventare più visibili quando vengono messi in relazione attraverso il linguaggio simbolico.",
      explore:
        "Una situazione che vuoi comprendere meglio, una scelta, una relazione, un cambiamento o una domanda alla quale senti di non riuscire ancora a dare una forma precisa.",
    },
    {
      label: "TRACCIA",
      name: "Chirologia",
      title: "La mano come traccia dell'esperienza.",
      intro:
        "La mano può essere osservata come una traccia della persona e del modo in cui ha attraversato la propria esperienza.",
      how:
        "Osservo forme, linee, proporzioni e caratteristiche della mano mettendole in relazione con ciò che riconosci della tua storia.",
      observe:
        "Modalità di relazione, tendenze caratteriali, punti di forza e punti di debolezza utili da comprendere, e eventuali date indicate nel tuo percorso.",
      explore:
        "Il modo in cui vivi te stesso, alcune dinamiche ricorrenti, il rapporto con gli altri o aspetti della tua esperienza che desideri comprendere da una prospettiva più ampia.",
    },
    {
      label: "NUMERO",
      name: "Numerologia",
      title: "Il numero come linguaggio simbolico.",
      intro:
        "I numeri possono essere osservati anche oltre la loro funzione quantitativa. Nella numerologia diventano elementi di un linguaggio simbolico.",
      how:
        "Parto dai dati numerici legati alla persona e li utilizzo come chiavi di lettura, mettendo in relazione il loro significato simbolico con ciò che realmente riconosci nella tua esperienza.",
      observe:
        "Cicli, ricorrenze, tendenze e temi che possono diventare interessanti da osservare quando vengono messi in relazione alla propria storia.",
      explore:
        "Momenti di passaggio, interrogativi personali, direzioni possibili e aspetti della propria esperienza che vuoi osservare attraverso una prospettiva simbolica.",
    },
    {
      label: "PERCEZIONE",
      name: "Radiestesia",
      title: "La percezione come strumento di esplorazione.",
      intro:
        "La radiestesia entra in Vyrah in modo particolare: può diventare uno strumento per osservare la propria percezione davanti a una domanda circoscritta.",
      how:
        "Utilizzo lo strumento all'interno di domande specifiche e confronto ciò che emerge con la situazione concreta, le sensazioni e le informazioni che già possiedi.",
      observe:
        "Risposte percettive, esitazioni, differenze e reazioni che possono diventare materiale di osservazione, senza trasformarle automaticamente in verità.",
      explore:
        "Una scelta, una situazione specifica o un momento in cui senti il bisogno di osservare più attentamente la tua percezione.",
    },
  ]

  return (
    <div style={{ background: "#0B0908" }}>
      {/* HERO */}
      <section
        className="pt-40 pb-28 relative overflow-hidden"
        style={{ background: "#0B0908" }}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url('${IMG.candleBook}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "sepia(1)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,9,8,0.3), #0B0908 92%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="section-label mb-8">Il linguaggio simbolico</p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.1,
            }}
          >
            Gli strumenti non sono la risposta.
            <br />
            <span style={{ color: "#D0B875" }}>Sono il linguaggio.</span>
          </h1>
          <p
            className="font-cormorant text-xl md:text-2xl max-w-3xl mx-auto"
            style={{
              color: "#E8DDCA99",
              lineHeight: 1.75,
            }}
          > <GoldSeparator />
            Tarologia, chirologia, numerologia e radiestesia sono quattro
            linguaggi diversi. Non li utilizzo per fornire risposte
            preconfezionate, ma per creare punti di osservazione diversi a
            seconda di ciò che vuoi comprendere.
          </p>
        </div>
      </section>

      {/* PRINCIPIO */}
      <section
        className="py-20"
        style={{
          background:    "linear-gradient(120deg, #2E0D11 0%, #3A1216 40%, #220B0E 80%, #0B0908 110%)",
                    borderTop: "1px solid rgba(180,151,90,0.12)",
          borderBottom: "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.7fr_2fr] gap-10 md:gap-20 items-start">
            <p
              className="font-cinzel text-xs tracking-[0.3em]"
              style={{ color: "#B4975A" }}
            >
              IL PRINCIPIO
            </p>

            <div>
              <h2
                className="font-cormorant text-3xl md:text-4xl mb-7"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.2,
                }}
              >
                Non scelgo lo strumento prima di ascoltare la domanda.
              </h2>

              <p
                className="editorial-body"
                style={{
                  color: "#E8DDCA88",
                  maxWidth: "760px",
                }}
              >
                Ogni linguaggio permette di osservare aspetti diversi. Per
                questo, quando il punto di partenza è un incontro Vyrah, è ciò
                che stai vivendo a orientare la scelta dello strumento. Ma non
                è necessario seguire un percorso per poterli esplorare:
                ciascuna disciplina può essere incontrata anche
                singolarmente, attraverso una lettura dedicata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE */}
      <section style={{ background: "#0B0908" }}>
        <div className="max-w-6xl mx-auto px-6">
          {tools.map((t, index) => (
            <article
              key={t.name}
              className="py-24 md:py-28"
              style={{
                borderBottom:
                  index < tools.length - 1
                    ? "1px solid rgba(180,151,90,0.12)"
                    : "none",
              }}
            >
              {/* HEADER DISCIPLINA */}
              <div className="mb-14">
                <p
                  className="font-cinzel text-[10px] tracking-[0.35em] mb-5"
                  style={{ color: "#B4975A" }}
                >
                  {t.label}
                </p>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <h2
                    className="font-cormorant text-5xl md:text-7xl"
                    style={{
                      color: "#E8DDCA",
                      lineHeight: 0.95,
                    }}
                  >
                    {t.name}
                  </h2>

                  <div
                    className="hidden md:block w-32 h-px mb-2"
                    style={{
                      background: "rgba(180,151,90,0.3)",
                    }}
                  />
                </div>

                <p
                  className="font-cormorant text-2xl md:text-3xl italic mt-7"
                  style={{
                    color: "#D0B875",
                    lineHeight: 1.3,
                  }}
                >
                  {t.title}
                </p>
              </div>

              {/* INTRO */}
              <p
                className="font-cormorant text-xl md:text-2xl max-w-3xl mb-14"
                style={{
                  color: "#E8DDCAC4",
                  lineHeight: 1.65,
                }}
              >
                {t.intro}
              </p>

              {/* APPROCCIO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
                <div>
                  <p
                    className="font-cinzel text-[10px] tracking-[0.25em] mb-4"
                    style={{ color: "#B4975A" }}
                  >
                    COME LA INTERPRETO
                  </p>

                  <p
                    className="font-cormorant text-lg"
                    style={{
                      color: "#E8DDCA7A",
                      lineHeight: 1.7,
                    }}
                  >
                    {t.how}
                  </p>
                </div>

                <div>
                  <p
                    className="font-cinzel text-[10px] tracking-[0.25em] mb-4"
                    style={{ color: "#B4975A" }}
                  >
                    COSA OSSERVO
                  </p>

                  <p
                    className="font-cormorant text-lg"
                    style={{
                      color: "#E8DDCA7A",
                      lineHeight: 1.7,
                    }}
                  >
                    {t.observe}
                  </p>
                </div>

                <div>
                  <p
                    className="font-cinzel text-[10px] tracking-[0.25em] mb-4"
                    style={{ color: "#B4975A" }}
                  >
                    COSA PUÒ ESPLORARE
                  </p>

                  <p
                    className="font-cormorant text-lg"
                    style={{
                      color: "#E8DDCA7A",
                      lineHeight: 1.7,
                    }}
                  >
                    {t.explore}
                  </p>
                </div>
              </div>

              {/* CTA SINGOLA LETTURA */}
              <div className="mt-14">
                <button
                  onClick={() => navigate("contatti")}
                  className="group inline-flex items-center gap-4 font-cinzel text-[11px] tracking-[0.2em]"
                  style={{ color: "#D0B875" }}
                >
                  <span
                    className="pb-2 border-b transition-all duration-300 group-hover:border-opacity-100"
                    style={{
                      borderColor: "rgba(208,184,117,0.4)",
                    }}
                  >
                    PRENOTA UNA LETTURA DI{" "}
                    {t.name.toUpperCase()}
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DUE POSSIBILITÀ */}
      <section
        className="py-24"
        style={{
          background: "#15100D",
          borderTop: "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="section-label mb-6">Da dove cominciare</p>

            <h2
              className="font-cormorant text-4xl md:text-5xl"
              style={{
                color: "#E8DDCA",
                lineHeight: 1.15,
              }}
            >
              Puoi scegliere uno strumento.
              <br />
              <span style={{ color: "#D0B875" }}>
                Oppure partire da ciò che vivi.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {/* SINGOLA LETTURA */}
            <div
              className="p-10 md:p-12"
              style={{
                background: "#0B0908",
                border: "1px solid rgba(180,151,90,0.12)",
              }}
            >
              <p
                className="font-cinzel text-[10px] tracking-[0.3em] mb-6"
                style={{ color: "#B4975A" }}
              >
                SAI GIÀ COSA VUOI ESPLORARE
              </p>

              <h3
                className="font-cormorant text-3xl md:text-4xl mb-5"
                style={{ color: "#E8DDCA" }}
              >
                Una singola lettura
              </h3>

              <p
                className="font-cormorant text-lg mb-8"
                style={{
                  color: "#E8DDCA88",
                  lineHeight: 1.65,
                }}
              >
                Puoi prenotare una singola lettura di tarologia, chirologia,
                numerologia o radiestesia senza intraprendere un percorso
                Vyrah.
              </p>

              <button
                onClick={() => navigate("contatti")}
                className="inline-flex items-center gap-3 font-cinzel text-[11px] tracking-[0.2em]"
                style={{ color: "#D0B875" }}
              >
                PRENOTA UNA LETTURA <span>→</span>
              </button>
            </div>

            {/* VYRAH */}
            <div
              className="p-10 md:p-12"
              style={{
                background:"#2E0D11",
                border: "1px solid rgba(180,151,90,0.12)",
              }}
            >
              <p
                className="font-cinzel text-[10px] tracking-[0.3em] mb-6"
                style={{ color: "#B4975A" }}
              >
                NON SAI DA DOVE PARTIRE
              </p>

              <h3
                className="font-cormorant text-3xl md:text-4xl mb-5"
                style={{ color: "#E8DDCA" }}
              >
                Un incontro Vyrah
              </h3>

              <p
                className="font-cormorant text-lg mb-8"
                style={{
                  color: "#E8DDCA88",
                  lineHeight: 1.65,
                }}
              >
                Se non sai quale strumento possa essere più adatto, puoi
                partire dalla situazione che stai vivendo. L'incontro viene
                costruito intorno alla tua domanda e gli strumenti vengono
                scelti in base a ciò che emerge.
              </p>

              <button
                onClick={() => navigate("esperienze")}
                className="inline-flex items-center gap-3 font-cinzel text-[11px] tracking-[0.2em]"
                style={{ color: "#D0B875" }}
              >
                SCOPRI GLI INCONTRI VYRAH <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section
        className="py-28"
        style={{
          background: "#0B0908",
          borderTop: "1px solid rgba(180,151,90,0.1)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-7">Il primo passo</p>

          <h2
            className="font-cormorant text-4xl md:text-5xl mb-7"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.15,
            }}
          >
            Sai già quale strumento vuoi esplorare?
          </h2>

          <p
            className="font-cormorant text-xl italic max-w-2xl mx-auto mb-10"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.7,
            }}
          >
            Non è necessario conoscere il metodo Vyrah o intraprendere un
            percorso. Puoi semplicemente scegliere una singola lettura e
            partire da lì.
          </p>

          <button
            onClick={() => navigate("contatti")}
            className="cta-secondary"
            style={{
              color: "#D0B875",
              background: "#0B0908",
            }}
          >
            PRENOTA UNA LETTURA
            <span className="text-base">→</span>
          </button>
        </div>
      </section>
    </div>
  )
}

// ─── Page: IL PERCORSO ────────────────────────────────────────────────────────
function PagePercorso({ navigate }: { navigate: (p: Page) => void }) {
  const [selectedArcano, setSelectedArcano] = useState<
    (typeof arcani)[number] | null
  >(null)

  const [situation, setSituation] = useState("")
  const [intention, setIntention] = useState("")
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    {
      num: "I",
      title: "Riconoscere",
      body: "Prima di scegliere una direzione, possiamo imparare a riconoscere ciò che già ci appartiene: desideri, capacità, inclinazioni, bisogni e possibilità che spesso rimangono nascosti dentro ciò che viviamo.",
    },
    {
      num: "II",
      title: "Comprendere",
      body: "Ciò che riconosciamo acquista significato quando iniziamo a comprenderne le relazioni. Osserviamo esperienze, ricorrenze, contraddizioni e influenze per distinguere ciò che sentiamo nostro da ciò che abbiamo imparato a seguire.",
    },
    {
      num: "III",
      title: "Scegliere",
      body: "La comprensione apre uno spazio di libertà. Possiamo confrontare ciò che abbiamo visto con ciò che desideriamo e scegliere quale direzione dare a ciò che riconosciamo come nostro.",
    },
    {
      num: "IV",
      title: "Costruire",
      body: "Una scelta prende forma quando entra nella vita. Costruire significa trasformare ciò che abbiamo compreso in esperienza, azione e possibilità concrete, dando progressivamente alla nostra vita una forma che ci appartenga.",
    },
  ]

  const arcani = [
    {
      num: "I",
      title: "Il Mago",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/T1%20Tarot.png",
      question:
        "Hai già qualcosa tra le mani. Ma lo stai usando davvero?",
      intro:
        "Il Mago apre lo sguardo sulle risorse che esistono già. Capacità, intuizioni, strumenti e possibilità possono essere presenti molto prima che impariamo a riconoscerne il valore.",
      observations: [
        {
          title: "Le risorse",
          text: "Ciò che possiedi già e che può diventare una possibilità concreta.",
        },
        {
          title: "Le capacità",
          text: "Ciò che sai fare, anche quando tendi a considerarlo normale o insufficiente.",
        },
        {
          title: "L'iniziativa",
          text: "Il rapporto tra ciò che immagini e ciò che scegli di mettere in movimento.",
        },
        {
          title: "La possibilità",
          text: "Ciò che può accadere quando una risorsa trova finalmente una direzione.",
        },
      ],
      movement: [
        "Ciò che hai",
        "Ciò che riconosci",
        "Ciò che puoi fare",
        "Ciò che scegli di mettere in movimento",
      ],
      outcome:
        "Uno sguardo più nitido sulle possibilità già presenti nella situazione e sul modo in cui possono diventare azione.",
    },
    {
      num: "IX",
      title: "L'Eremita",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/T9%20Tarot.png",
      question:
        "E se smettessi, per un momento, di cercare fuori ciò che stai cercando dentro?",
      intro:
        "L'Eremita appartiene al tempo della ricerca. La sua luce non illumina tutto il cammino: permette di vedere abbastanza per compiere il passo successivo.",
      observations: [
        {
          title: "Il tempo",
          text: "Ciò che richiede maturazione prima di poter essere compreso.",
        },
        {
          title: "Il silenzio",
          text: "Lo spazio necessario perché una voce propria possa emergere tra quelle degli altri.",
        },
        {
          title: "L'esperienza",
          text: "Ciò che abbiamo imparato attraversando ciò che è già accaduto.",
        },
        {
          title: "La ricerca",
          text: "Ciò che continuiamo a cercare e ciò che, forse, stiamo già imparando.",
        },
      ],
      movement: [
        "Rumore",
        "Spazio",
        "Ascolto",
        "Esperienza",
        "Comprensione",
      ],
      outcome:
        "Una maggiore chiarezza su ciò che stai cercando, sul tempo che gli stai concedendo e sulla voce che vuoi ascoltare.",
    },
    {
      num: "VI",
      title: "L'Innamorato",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/T6%20Tarot.png",
      question: "Quando scegli, cosa stai davvero scegliendo?",
      intro:
        "L'Innamorato apre il tema della scelta. Non soltanto la scelta tra due possibilità, ma il movimento più profondo attraverso cui desideri, influenze e convinzioni entrano in relazione.",
      observations: [
        {
          title: "Il desiderio",
          text: "Ciò verso cui senti di essere attratto e che vorresti portare nella tua vita.",
        },
        {
          title: "La contraddizione",
          text: "Le parti di te che procedono in direzioni differenti.",
        },
        {
          title: "L'influenza",
          text: "Ciò che arriva dagli altri, dalle aspettative e dalle idee che hai interiorizzato.",
        },
        {
          title: "La scelta",
          text: "Ciò che emerge quando distingui ciò che vuoi da ciò che pensi di dover volere.",
        },
      ],
      movement: [
        "Possibilità",
        "Desiderio",
        "Contraddizione",
        "Consapevolezza",
        "Scelta",
      ],
      outcome:
        "Una visione più chiara delle forze che partecipano alla tua scelta e della direzione che senti realmente tua.",
    },
    {
      num: "XII",
      title: "L'Appeso",
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/T12%20Tarot.png",
      question:
        "E se il problema fosse il modo in cui stai guardando?",
      intro:
        "L'Appeso appartiene al tempo della sospensione. La sua immagine invita a considerare una possibilità radicale: quando la situazione sembra ferma, può cambiare il punto da cui la osserviamo.",
      observations: [
        {
          title: "La sospensione",
          text: "Ciò che accade quando una situazione chiede tempo prima di poter procedere.",
        },
        {
          title: "Il punto di vista",
          text: "La posizione da cui stai interpretando ciò che accade.",
        },
        {
          title: "Ciò che dai per certo",
          text: "Le convinzioni che possono orientare il modo in cui guardi.",
        },
        {
          title: "La possibilità",
          text: "Ciò che diventa visibile quando cambia la prospettiva.",
        },
      ],
      movement: [
        "Situazione",
        "Sospensione",
        "Cambio di prospettiva",
        "Nuova lettura",
        "Possibilità",
      ],
      outcome:
        "Una prospettiva diversa sulla situazione che stai vivendo e la possibilità di vedere elementi che dalla posizione abituale rimanevano fuori campo.",
    },
  ]

  /*
   * ─────────────────────────────────────────────
   * COSTRUISCI IL TUO SGUARDO
   *
   * Ogni situazione assegna un peso diverso
   * ai quattro Arcani.
   *
   * La seconda scelta aggiunge un secondo livello
   * di orientamento.
   *
   * Il risultato nasce quindi dalla combinazione
   * delle due risposte.
   * ─────────────────────────────────────────────
   */

  type ArcanoKey = "mago" | "eremita" | "innamorato" | "appeso"

  const situationScores: Record<
    string,
    Record<ArcanoKey, number>
  > = {
    cambiamento: {
      mago: 3,
      eremita: 1,
      innamorato: 2,
      appeso: 2,
    },

    scelta: {
      mago: 2,
      eremita: 1,
      innamorato: 4,
      appeso: 1,
    },

    blocco: {
      mago: 1,
      eremita: 2,
      innamorato: 1,
      appeso: 4,
    },

    ricerca: {
      mago: 2,
      eremita: 4,
      innamorato: 2,
      appeso: 2,
    },

    relazioni: {
      mago: 1,
      eremita: 2,
      innamorato: 4,
      appeso: 2,
    },

    direzione: {
      mago: 3,
      eremita: 2,
      innamorato: 3,
      appeso: 1,
    },
  }

  const intentionScores: Record<
    string,
    Record<ArcanoKey, number>
  > = {
    "Capire meglio": {
      mago: 2,
      eremita: 4,
      innamorato: 2,
      appeso: 3,
    },

    "Prendere una decisione": {
      mago: 2,
      eremita: 1,
      innamorato: 4,
      appeso: 1,
    },

    "Trovare una direzione": {
      mago: 4,
      eremita: 2,
      innamorato: 3,
      appeso: 1,
    },

    "Sbloccare una situazione": {
      mago: 1,
      eremita: 2,
      innamorato: 1,
      appeso: 4,
    },
  }

  /*
   * Testi introduttivi legati alla situazione.
   * Il risultato finale utilizza sia la situazione
   * sia l'intenzione scelta.
   */

  const builderReasons: Record<
    ArcanoKey,
    Record<string, string>
  > = {
    mago: {
      cambiamento:
        "Il cambiamento può diventare un punto di partenza: osservare ciò che hai già a disposizione aiuta a riconoscere quali possibilità puoi mettere in movimento.",
      scelta:
        "La scelta può essere osservata a partire da ciò che hai già tra le mani: risorse, possibilità e capacità che possono orientare il passo successivo.",
      blocco:
        "Anche dentro un blocco possono esserci elementi già disponibili. Lo sguardo parte da ciò che puoi riconoscere e mettere nuovamente in movimento.",
      ricerca:
        "La ricerca può partire da ciò che già esiste: risorse, intuizioni e possibilità che meritano di essere osservate con maggiore attenzione.",
      relazioni:
        "Nelle relazioni può essere utile osservare quale parte puoi realmente mettere in gioco e quali possibilità nascono dal tuo modo di agire.",
      direzione:
        "Per trovare una direzione, può essere utile partire da ciò che possiedi già e capire quale possibilità vuoi trasformare in movimento.",
    },

    eremita: {
      cambiamento:
        "Un cambiamento può aprire una ricerca più profonda: osservare ciò che sta emergendo permette di distinguere ciò che passa da ciò che conta.",
      scelta:
        "Prima della scelta può esserci uno spazio di ricerca: comprendere ciò che desideri davvero può rendere più chiara la direzione.",
      blocco:
        "Un blocco può diventare un punto di osservazione. Andare più a fondo permette di riconoscere ciò che lo sostiene e ciò che sta chiedendo di essere compreso.",
      ricerca:
        "La ricerca è il suo territorio naturale: uno sguardo rivolto verso ciò che emerge lentamente, oltre la prima risposta.",
      relazioni:
        "Una relazione può diventare occasione di conoscenza di sé: osservare ciò che suscita, rivela e mette in movimento permette di andare più a fondo.",
      direzione:
        "Quando cerchi una direzione, può essere utile rallentare abbastanza da comprendere ciò che desideri davvero portare con te.",
    },

    innamorato: {
      cambiamento:
        "Ogni cambiamento porta con sé possibilità diverse. Osservarle significa comprendere che cosa stai scegliendo mentre la tua vita cambia forma.",
      scelta:
        "La scelta diventa il centro dello sguardo: comprendere ciò che ti muove, ciò che ti trattiene e ciò che riconosci come tuo.",
      blocco:
        "Un blocco può nascondere una scelta ancora aperta. Osservare le possibilità in gioco permette di comprendere dove si trova realmente il conflitto.",
      ricerca:
        "La ricerca può portare davanti a possibilità diverse. Il punto diventa riconoscere ciò verso cui senti di voler andare.",
      relazioni:
        "Le relazioni mettono spesso in gioco desideri, legami e possibilità diverse. Osservarli può aiutare a comprendere ciò che stai realmente scegliendo.",
      direzione:
        "Una direzione prende forma attraverso le scelte: osservare le possibilità permette di capire quale desideri trasformare in cammino.",
    },

    appeso: {
      cambiamento:
        "Quando qualcosa cambia, può essere utile osservare la situazione da una prospettiva diversa prima di cercare il movimento successivo.",
      scelta:
        "Una scelta può apparire complessa perché la stiamo osservando da un solo punto di vista. Cambiare prospettiva può aprire una possibilità nuova.",
      blocco:
        "Il blocco diventa il punto di partenza: osservare ciò che accade da un'altra prospettiva può modificare il modo in cui comprendiamo la situazione.",
      ricerca:
        "La ricerca può richiedere una sospensione: lasciare spazio a ciò che ancora non riesci a vedere può aprire una prospettiva diversa.",
      relazioni:
        "Una relazione può essere osservata da un punto di vista diverso dal proprio. Questo cambio di prospettiva può far emergere elementi rimasti sullo sfondo.",
      direzione:
        "Quando la direzione non appare chiara, cambiare prospettiva può essere più utile che cercare immediatamente una risposta.",
    },
  }

  /*
   * Piccole correzioni qualitative alle combinazioni.
   *
   * Non sono "percorsi segreti": servono soltanto
   * a rendere alcune combinazioni particolarmente
   * coerenti con il significato delle due risposte.
   */

  const combinationBias: Record<
    string,
    Partial<Record<ArcanoKey, number>>
  > = {
    "cambiamento|Sbloccare una situazione": {
      appeso: 2,
    },

    "cambiamento|Trovare una direzione": {
      mago: 1,
    },

    "scelta|Prendere una decisione": {
      innamorato: 2,
    },

    "scelta|Sbloccare una situazione": {
      appeso: 1,
    },

    "blocco|Sbloccare una situazione": {
      appeso: 2,
    },

    "ricerca|Capire meglio": {
      eremita: 2,
    },

    "relazioni|Prendere una decisione": {
      innamorato: 2,
    },

    "direzione|Trovare una direzione": {
      mago: 1,
    },
  }

  const getBuilderResult = () => {
    if (!situation || !intention) return null

    const situationWeight = situationScores[situation]
    const intentionWeight = intentionScores[intention]

    if (!situationWeight || !intentionWeight) {
      return null
    }

    const totals: Record<ArcanoKey, number> = {
      mago: situationWeight.mago + intentionWeight.mago,
      eremita: situationWeight.eremita + intentionWeight.eremita,
      innamorato:
        situationWeight.innamorato + intentionWeight.innamorato,
      appeso: situationWeight.appeso + intentionWeight.appeso,
    }

    const bias =
      combinationBias[`${situation}|${intention}`]

    if (bias) {
      Object.entries(bias).forEach(([key, value]) => {
        totals[key as ArcanoKey] += value ?? 0
      })
    }

    const priority: ArcanoKey[] = [
      "mago",
      "eremita",
      "innamorato",
      "appeso",
    ]

    const winner = priority.reduce((best, current) => {
      if (totals[current] > totals[best]) {
        return current
      }

      return best
    }, priority[0])

    return {
      key: winner,
      arcano: arcanoProfiles[winner],
      reason: builderReasons[winner][situation],
    }
  }

  /*
   * Profilo sintetico dei quattro sguardi.
   * Viene usato esclusivamente dal builder.
   */

  const arcanoProfiles: Record<
    ArcanoKey,
    string
  > = {
    mago: "Il Mago",
    eremita: "L'Eremita",
    innamorato: "L'Innamorato",
    appeso: "L'Appeso",
  }

  const selectedBuilderResult = getBuilderResult()

  const openArcanoFromBuilder = () => {
    if (!selectedBuilderResult) return

    const found = arcani.find(
      (arcano) =>
        arcano.title === selectedBuilderResult.arcano,
    )

    if (found) {
      setSelectedArcano(found)
    }
  }

  return (
    <div style={{ background: "#0B0908" }}>
      {/* HERO */}

      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "#0B0908" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 72% 30%, rgba(180,151,90,0.09) 0%, transparent 32%), radial-gradient(circle at 18% 75%, rgba(90,30,34,0.14) 0%, transparent 35%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="section-label mb-8">Il cammino</p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-9"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.08,
            }}
          >
            Prima di scegliere dove andare,
            <br />
            <span style={{ color: "#D0B875" }}>
              riconosci ciò che è tuo.
            </span>
          </h1>

          <GoldSeparator />

          <p
            className="font-cormorant text-xl md:text-2xl italic max-w-3xl mx-auto"
            style={{
              color: "#E8DDCA99",
              lineHeight: 1.7,
            }}
          >
            Il Percorso Vyrah accompagna il passaggio dalla conoscenza di sé
            alla possibilità di trasformare ciò che riconosci in una direzione
            e, infine, in una vita.
          </p>
        </div>
      </section>

      {/* I QUATTRO MOVIMENTI */}

<section
  className="py-28"
  style={{
    background: "#15100D",
    borderTop: "1px solid rgba(180,151,90,0.12)",
    borderBottom: "1px solid rgba(180,151,90,0.12)",
  }}
>
  <div className="max-w-6xl mx-auto px-6">

    {/* INTRODUZIONE */}

    <div className="max-w-3xl mb-16">
      <p className="section-label mb-6">Il Percorso Vyrah</p>

      <h2
        className="display-heading text-3xl md:text-5xl mb-7"
        style={{
          color: "#E8DDCA",
          lineHeight: 1.12,
        }}
      >
        Quattro movimenti verso
        <br />
        <span style={{ color: "#D0B875" }}>
          una vita più propria.
        </span>
      </h2>

      <p
        className="editorial-body text-lg"
        style={{
          color: "#E8DDCA88",
          lineHeight: 1.8,
          maxWidth: "700px",
        }}
      >
        Il percorso prende forma nel passaggio tra ciò che riconosciamo,
        ciò che comprendiamo, ciò che scegliamo e ciò che decidiamo di
        costruire. Non una sequenza rigida, ma un movimento a cui possiamo
        tornare ogni volta che la vita ci chiede di guardare nuovamente.
      </p>
    </div>

    {/* NAVIGAZIONE DEI QUATTRO MOVIMENTI */}

    <div
      className="relative mb-14"
      style={{
        borderTop: "1px solid rgba(180,151,90,0.18)",
        borderBottom: "1px solid rgba(180,151,90,0.18)",
      }}
    >
      {/* Linea centrale */}

      <div
        className="hidden md:block absolute left-0 right-0 top-1/2 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(180,151,90,0.28) 8%, rgba(180,151,90,0.28) 92%, transparent)",
        }}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 relative">

        {stages.map((stage, index) => {
          const active = activeStage === index

          return (
            <button
              key={stage.num}
              type="button"
              onClick={() => setActiveStage(index)}
              className="relative group text-left md:text-center py-8 px-4 transition-all duration-500"
              style={{
                color: active ? "#E8DDCA" : "#E8DDCA55",
              }}
              aria-pressed={active}
            >
              {/* Punto */}

              <div className="relative z-10 flex justify-center mb-5">
                <span
                  className="flex items-center justify-center transition-all duration-500"
                  style={{
                    width: active ? "16px" : "10px",
                    height: active ? "16px" : "10px",
                    borderRadius: "50%",
                    background: active
                      ? "#D0B875"
                      : "#15100D",
                    border: active
                      ? "1px solid #D0B875"
                      : "1px solid rgba(180,151,90,0.4)",
                    boxShadow: active
                      ? "0 0 0 5px rgba(208,184,117,0.08)"
                      : "none",
                  }}
                />
              </div>

              {/* Numero */}

              <p
                className="font-cinzel text-xs mb-2 transition-colors duration-500"
                style={{
                  color: active
                    ? "#B4975A"
                    : "#B4975A55",
                  letterSpacing: "0.18em",
                }}
              >
                {stage.num}
              </p>

              {/* Titolo */}

              <p
                className="display-heading text-lg md:text-xl transition-colors duration-500"
                style={{
                  color: active
                    ? "#D0B875"
                    : "#E8DDCA66",
                }}
              >
                {stage.title}
              </p>
            </button>
          )
        })}
      </div>
    </div>

    {/* CONTENUTO ATTIVO */}

    <div
      key={activeStage}
      className="relative"
      style={{
        animation: "vyrahStageReveal 0.55s ease both",
      }}
    >

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-16">

        {/* NUMERO GRANDE */}

        <div className="hidden md:flex items-start justify-center pt-2">
          <span
            className="font-cinzel"
            style={{
              fontSize: "7rem",
              lineHeight: 0.85,
              color: "#B4975A22",
              letterSpacing: "-0.04em",
            }}
          >
            {stages[activeStage].num}
          </span>
        </div>

        {/* TESTO */}

        <div
          className="relative"
          style={{
            minHeight: "310px",
          }}
        >

          <p
            className="section-label mb-5"
            style={{
              color: "#B4975A",
            }}
          >
            Movimento {stages[activeStage].num}
          </p>

          <h3
            className="display-heading text-4xl md:text-5xl mb-6"
            style={{
              color: "#D0B875",
              lineHeight: 1.05,
            }}
          >
            {stages[activeStage].title}
          </h3>

          <div
            className="w-16 h-px mb-7"
            style={{
              background: "#B4975A55",
            }}
          />

          <p
            className="font-cormorant text-2xl md:text-3xl italic max-w-3xl mb-7"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.45,
            }}
          >
            {activeStage === 0 &&
              "Che cosa c'è già, prima ancora che tu scelga?"}

            {activeStage === 1 &&
              "Che cosa stai realmente comprendendo di ciò che vivi?"}

            {activeStage === 2 &&
              "Che cosa riconosci come tuo abbastanza da volerlo seguire?"}

            {activeStage === 3 &&
              "Che forma può prendere ciò che hai riconosciuto?"}
          </p>

          <p
            className="editorial-body text-lg max-w-3xl"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.85,
            }}
          >
            {stages[activeStage].body}
          </p>

          {/* INDICAZIONE DEL MOVIMENTO */}

          <div className="mt-10 flex items-center gap-3">
            {stages.map((stage, index) => (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveStage(index)}
                aria-label={`Vai a ${stage.title}`}
                className="transition-all duration-300"
                style={{
                  width: activeStage === index ? "38px" : "18px",
                  height: "2px",
                  background:
                    activeStage === index
                      ? "#D0B875"
                      : "#B4975A33",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FRASE DI CONTINUITÀ */}

      <div
        className="mt-16 pt-8"
        style={{
          borderTop: "1px solid rgba(180,151,90,0.10)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          <p
            className="font-cormorant text-lg italic"
            style={{
              color: "#E8DDCA55",
            }}
          >
            {activeStage === 0 &&
              "Prima di scegliere, guardare ciò che già esiste."}

            {activeStage === 1 &&
              "Ciò che riconosciamo acquista forma quando ne comprendiamo le relazioni."}

            {activeStage === 2 &&
              "Comprendere apre lo spazio in cui una scelta può diventare propria."}

            {activeStage === 3 &&
              "Ciò che scegliamo entra nella realtà quando iniziamo a costruirlo."}
          </p>

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() =>
                setActiveStage(
                  activeStage === 0
                    ? stages.length - 1
                    : activeStage - 1
                )
              }
              className="w-10 h-10 flex items-center justify-center transition-all duration-300"
              style={{
                color: "#E8DDCA88",
                background: "transparent",
                border: "1px solid rgba(180,151,90,0.16)",
              }}
              aria-label="Movimento precedente"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveStage(
                  activeStage === stages.length - 1
                    ? 0
                    : activeStage + 1
                )
              }
              className="w-10 h-10 flex items-center justify-center transition-all duration-300"
              style={{
                color: "#D0B875",
                background: "transparent",
                border: "1px solid rgba(180,151,90,0.28)",
              }}
              aria-label="Movimento successivo"
            >
              →
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    @keyframes vyrahStageReveal {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

      {/* PASSAGGIO AL SIMBOLO */}

      <section
        className="py-28"
        style={{
          background: "#0B0908",
          borderBottom: "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-7">Il linguaggio simbolico</p>

          <h2
            className="display-heading text-3xl md:text-5xl mb-8"
            style={{ color: "#E8DDCA", lineHeight: 1.12 }}
          >
            A volte, per comprendere ciò che viviamo,
            <br />
            <span style={{ color: "#D0B875" }}>
              serve cambiare sguardo.
            </span>
          </h2>

          <p
            className="font-cormorant text-xl md:text-2xl italic max-w-3xl mx-auto"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.75,
            }}
          >
            Il simbolo permette di mettere in relazione ciò che sappiamo,
            ciò che sentiamo e ciò che ancora non riusciamo a formulare.
            Gli Arcani diventano così immagini attraverso cui interrogare
            l'esperienza.
          </p>
        </div>
      </section>

      {/* ARCANI */}

      <section
        className="py-28"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-label mb-6">Gli sguardi</p>

            <h2
              className="display-heading text-3xl md:text-5xl mb-7"
              style={{ color: "#E8DDCA" }}
            >
              Quattro porte d'ingresso
              <br />
              <span style={{ color: "#D0B875" }}>
                nella tua ricerca.
              </span>
            </h2>

            <p
              className="editorial-body text-lg"
              style={{
                color: "#E8DDCA77",
                lineHeight: 1.8,
              }}
            >
              Ogni Arcano apre una prospettiva particolare. Puoi scegliere
              quello che senti più vicino alla tua domanda oppure lasciare che
              sia la tua situazione a orientare il primo sguardo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {arcani.map((arcano) => (
              <article
                key={arcano.title}
                className="group relative overflow-hidden"
                style={{
                  background: "#15100D",
                  border: "1px solid rgba(180,151,90,0.12)",
                }}
              >
                <div className="grid grid-cols-[110px_1fr] min-h-[390px]">
                  <div
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, #241A15 0%, #0F0C0A 100%)",
                      borderRight: "1px solid rgba(180,151,90,0.10)",
                    }}
                  >
                    <img
                      src={arcano.image}
                      alt={arcano.title}
                      className="h-[300px] w-auto object-contain opacity-75 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                      style={{
                        filter: "sepia(0.12) saturate(0.82)",
                      }}
                    />

                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to right, transparent 65%, #15100D 100%)",
                      }}
                    />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      <span
                        className="font-cinzel text-4xl"
                        style={{ color: "#B4975A55" }}
                      >
                        {arcano.num}
                      </span>

                      <span
                        className="section-label"
                        style={{ color: "#B4975A88" }}
                      >
                        Arcano
                      </span>
                    </div>

                    <h3
                      className="display-heading text-2xl md:text-3xl mb-5"
                      style={{ color: "#D0B875" }}
                    >
                      {arcano.title}
                    </h3>

                    <p
                      className="font-cormorant text-xl italic mb-8"
                      style={{
                        color: "#E8DDCA",
                        lineHeight: 1.45,
                      }}
                    >
                      {arcano.question}
                    </p>

                    <div className="mt-auto pt-5">
                      <button
                        type="button"
                        className="font-cinzel text-xs tracking-[0.15em] uppercase"
                        style={{
                          color: "#D0B875",
                          background: "transparent",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedArcano(arcano)}
                      >
                        Esplora questo sguardo →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COSTRUISCI IL TUO SGUARDO */}

      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: "#15100D",
          borderTop: "1px solid rgba(180,151,90,0.12)",
          borderBottom: "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "900px",
            height: "700px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(232,221,202,0.055) 0%, rgba(180,151,90,0.025) 32%, transparent 68%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* INTRO */}

          <div className="max-w-3xl mb-20">
            <p className="section-label mb-7">Il tuo sguardo</p>

            <h2
              className="display-heading text-4xl md:text-5xl mb-7"
              style={{
                color: "#E8DDCA",
                lineHeight: 1.08,
              }}
            >
              Costruisci il tuo
              <br />
              <span style={{ color: "#D0B875" }}>
                punto di partenza.
              </span>
            </h2>

            <p
              className="font-cormorant text-xl md:text-2xl max-w-2xl"
              style={{
                color: "#E8DDCA88",
                lineHeight: 1.7,
              }}
            >
              Una domanda può nascere da molte situazioni. Puoi partire da ciò
              che stai vivendo e individuare, passo dopo passo, lo sguardo più
              adatto per esplorarlo.
            </p>
          </div>

          {/* BUILDER */}

          <div
            className="relative max-w-5xl mx-auto"
            style={{
              border: "1px solid rgba(180,151,90,0.18)",
              background: "rgba(11,9,8,0.62)",
            }}
          >
            {/* HEADER */}

            <div
              className="px-7 py-5 md:px-10 md:py-6 flex items-center justify-between"
              style={{
                borderBottom: "1px solid rgba(180,151,90,0.13)",
                background: "rgba(180,151,90,0.025)",
              }}
            >
              <span
                className="font-cinzel text-xs tracking-[0.16em] uppercase"
                style={{ color: "#B4975A" }}
              >
                Costruisci il tuo sguardo
              </span>

              <span
                className="font-cinzel text-xs"
                style={{
                  color: "#E8DDCA44",
                  letterSpacing: "0.12em",
                }}
              >
                {selectedBuilderResult ? "02 / 02" : "01 / 02"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
              {/* COLONNA SINISTRA */}

              <div
                className="p-8 md:p-12"
                style={{
                  borderRight:
                    "1px solid rgba(180,151,90,0.12)",
                }}
              >
                <p
                  className="font-cinzel text-xs tracking-[0.15em] uppercase mb-4"
                  style={{ color: "#D0B875" }}
                >
                  01 — La situazione
                </p>

                <h3
                  className="font-cormorant text-2xl md:text-3xl mb-8"
                  style={{
                    color: "#E8DDCA",
                    lineHeight: 1.3,
                  }}
                >
                  Da dove vuoi partire?
                </h3>

                <div className="space-y-2">
                  {[
                    ["cambiamento", "Un cambiamento"],
                    ["scelta", "Una scelta"],
                    ["blocco", "Un blocco"],
                    ["ricerca", "Una ricerca"],
                    ["relazioni", "Una relazione"],
                    ["direzione", "Una direzione"],
                  ].map(([value, label]) => {
                    const active = situation === value

                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setSituation(value)}
                        className="group w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-300"
                        style={{
                          background: active
                            ? "rgba(90,30,34,0.42)"
                            : "rgba(232,221,202,0.025)",
                          border: active
                            ? "1px solid rgba(208,184,117,0.34)"
                            : "1px solid rgba(180,151,90,0.09)",
                          color: active
                            ? "#E8DDCA"
                            : "#E8DDCA99",
                        }}
                      >
                        <span className="font-cormorant text-lg">
                          {label}
                        </span>

                        <span
                          className="font-cinzel text-xs transition-transform duration-300"
                          style={{
                            color: active
                              ? "#D0B875"
                              : "#B4975A55",
                            transform: active
                              ? "translateX(2px)"
                              : "translateX(0)",
                          }}
                        >
                          →
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* COLONNA DESTRA */}

              <div className="p-8 md:p-12">
                <p
                  className="font-cinzel text-xs tracking-[0.15em] uppercase mb-4"
                  style={{ color: "#D0B875" }}
                >
                  02 — La ricerca
                </p>

                <h3
                  className="font-cormorant text-2xl md:text-3xl mb-8"
                  style={{
                    color: "#E8DDCA",
                    lineHeight: 1.3,
                  }}
                >
                  Cosa cerchi in questo momento?
                </h3>

                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    "Capire meglio",
                    "Prendere una decisione",
                    "Trovare una direzione",
                    "Sbloccare una situazione",
                  ].map((label) => {
                    const active = intention === label

                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setIntention(label)}
                        className="px-5 py-3 font-cormorant text-lg transition-all duration-300"
                        style={{
                          background: active
                            ? "rgba(180,151,90,0.16)"
                            : "rgba(232,221,202,0.025)",
                          border: active
                            ? "1px solid rgba(208,184,117,0.42)"
                            : "1px solid rgba(180,151,90,0.10)",
                          color: active
                            ? "#D0B875"
                            : "#E8DDCA88",
                        }}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>

                {/* RISULTATO */}

                <div
                  className="relative mt-2 p-7 md:p-8 min-h-[220px] flex flex-col justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(90,30,34,0.13), rgba(11,9,8,0.1))",
                    border:
                      "1px solid rgba(180,151,90,0.14)",
                  }}
                >
                  {!selectedBuilderResult ? (
                    <>
                      <p
                        className="font-cormorant text-xl italic mb-3"
                        style={{
                          color: "#E8DDCA66",
                          lineHeight: 1.5,
                        }}
                      >
                        Parti dalle due domande.
                      </p>

                      <p
                        className="font-cormorant text-lg"
                        style={{
                          color: "#E8DDCA55",
                          lineHeight: 1.6,
                        }}
                      >
                        La combinazione tra ciò che stai vivendo e ciò che
                        cerchi orienterà il primo sguardo.
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        className="font-cinzel text-xs tracking-[0.15em] uppercase mb-4"
                        style={{ color: "#B4975A" }}
                      >
                        Dalla tua combinazione
                      </p>

                      <h3
                        className="display-heading text-3xl mb-4"
                        style={{ color: "#D0B875" }}
                      >
                        {selectedBuilderResult.arcano}
                      </h3>

                      <p
                        className="font-cormorant text-lg"
                        style={{
                          color: "#E8DDCA88",
                          lineHeight: 1.65,
                        }}
                      >
                        {selectedBuilderResult.reason}
                      </p>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  className="mt-7 font-cinzel text-xs tracking-[0.16em] uppercase transition-all duration-300"
                  style={{
                    color: "#D0B875",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: selectedBuilderResult
                      ? "pointer"
                      : "default",
                    opacity: selectedBuilderResult ? 1 : 0.35,
                    pointerEvents: selectedBuilderResult
                      ? "auto"
                      : "none",
                  }}
                  onClick={openArcanoFromBuilder}
                >
                  Inizia da questo sguardo →
                </button>
              </div>
            </div>
          </div>

          {/* PERSONALIZZAZIONE */}

          <div className="max-w-3xl mx-auto text-center mt-16">
            <div
              className="w-12 h-px mx-auto mb-8"
              style={{
                background: "rgba(180,151,90,0.28)",
              }}
            />

            <p
              className="font-cormorant text-xl md:text-2xl italic mb-5"
              style={{
                color: "#E8DDCA77",
                lineHeight: 1.6,
              }}
            >
              Ogni situazione ha la propria domanda.
            </p>

            <p
              className="font-cormorant text-lg mb-7"
              style={{
                color: "#E8DDCA55",
                lineHeight: 1.6,
              }}
            >
              Se ciò che stai vivendo non trova posto qui, possiamo partire
              direttamente dalla tua esperienza.
            </p>

            <button
              type="button"
              onClick={() => navigate("contatti")}
              className="font-cinzel text-xs tracking-[0.16em] uppercase transition-all duration-300"
              style={{
                color: "#D0B875",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Costruiamo insieme il tuo percorso →
            </button>
          </div>
        </div>
      </section>

      {/* CHIUSURA */}

      <section
        className="py-32"
        style={{
          background:
            "linear-gradient(120deg, #351014 0%, #5A1E22 48%, #3E1217 100%)",
          borderTop: "1px solid rgba(180,151,90,0.2)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <StarDecor />

          <blockquote
            className="large-quote text-3xl md:text-5xl mt-8 mb-8"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.2,
            }}
          >
            La direzione nasce da ciò che riconosci.
          </blockquote>

          <p
            className="font-cormorant text-xl md:text-2xl italic max-w-2xl mx-auto"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.7,
            }}
          >
            E ciò che riconosci può diventare il principio da cui costruire
            qualcosa che prima ancora non esisteva.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="cta-primary"
              onClick={() => navigate("esperienze")}
            >
              Inizia il tuo percorso
            </button>

            <button
              className="cta-secondary"
              onClick={() => navigate("contatti")}
            >
              Costruiamolo insieme
            </button>
          </div>
        </div>
      </section>

      {/* PANEL ARCANO */}

      {selectedArcano && (
        <div
          className="fixed inset-0 z-[100] flex justify-end"
          style={{
            background: "rgba(5,4,3,0.72)",
            backdropFilter: "blur(5px)",
          }}
          onClick={() => setSelectedArcano(null)}
        >
          <aside
            className="relative w-full md:w-[680px] h-full overflow-y-auto"
            style={{
              background:
                "linear-gradient(145deg, #15100D 0%, #0B0908 100%)",
              borderLeft:
                "1px solid rgba(180,151,90,0.22)",
              boxShadow:
                "-20px 0 80px rgba(0,0,0,0.45)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArcano(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center"
              style={{
                color: "#E8DDCA",
                background:
                  "rgba(232,221,202,0.06)",
                border:
                  "1px solid rgba(180,151,90,0.18)",
                cursor: "pointer",
              }}
              aria-label="Chiudi"
            >
              ×
            </button>

            <div className="relative min-h-[420px] flex items-end overflow-hidden">
              <img
                src={selectedArcano.image}
                alt={selectedArcano.title}
                className="absolute inset-0 w-full h-full object-contain opacity-35"
                style={{
                  filter: "sepia(0.1) saturate(0.8)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, #0B0908 3%, rgba(11,9,8,0.82) 45%, rgba(11,9,8,0.18) 100%)",
                }}
              />

              <div className="relative z-10 p-8 md:p-12 w-full">
                <p className="section-label mb-5">
                  Arcano {selectedArcano.num}
                </p>

                <h2
                  className="display-heading text-4xl md:text-5xl mb-6"
                  style={{ color: "#D0B875" }}
                >
                  {selectedArcano.title}
                </h2>

                <p
                  className="font-cormorant text-2xl italic"
                  style={{
                    color: "#E8DDCA",
                    lineHeight: 1.4,
                  }}
                >
                  {selectedArcano.question}
                </p>
              </div>
            </div>

            <div className="px-8 md:px-12 pb-16">
              <p
                className="font-cormorant text-xl"
                style={{
                  color: "#E8DDCA99",
                  lineHeight: 1.75,
                }}
              >
                {selectedArcano.intro}
              </p>

              <GoldSeparator />

              <p className="section-label mb-7">
                Cosa osserviamo
              </p>

              <div className="space-y-0">
                {selectedArcano.observations.map(
                  (item, index) => (
                    <div
                      key={item.title}
                      className="py-6"
                      style={{
                        borderTop:
                          "1px solid rgba(180,151,90,0.13)",
                      }}
                    >
                      <div className="flex gap-5">
                        <span
                          className="font-cinzel text-xs pt-1"
                          style={{ color: "#B4975A" }}
                        >
                          0{index + 1}
                        </span>

                        <div>
                          <h3
                            className="font-cinzel text-sm tracking-[0.12em] uppercase mb-2"
                            style={{ color: "#D0B875" }}
                          >
                            {item.title}
                          </h3>

                          <p
                            className="font-cormorant text-lg"
                            style={{
                              color: "#E8DDCA77",
                              lineHeight: 1.6,
                            }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-12">
                <p className="section-label mb-7">
                  Il movimento
                </p>

                <div className="space-y-0">
                  {selectedArcano.movement.map(
                    (step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-5 py-4"
                        style={{
                          borderTop:
                            "1px solid rgba(180,151,90,0.10)",
                        }}
                      >
                        <span
                          className="font-cinzel text-xs"
                          style={{ color: "#B4975A" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="font-cormorant text-xl"
                          style={{ color: "#E8DDCA" }}
                        >
                          {step}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div
                className="mt-12 p-7 md:p-8"
                style={{
                  background: "#5A1E2218",
                  border:
                    "1px solid rgba(180,151,90,0.16)",
                }}
              >
                <p className="section-label mb-5">
                  Cosa può emergere
                </p>

                <p
                  className="font-cormorant text-xl italic"
                  style={{
                    color: "#E8DDCA",
                    lineHeight: 1.65,
                  }}
                >
                  {selectedArcano.outcome}
                </p>
              </div>

              <div className="mt-12">
                <button
                  type="button"
                  className="cta-primary w-full"
                  onClick={() => {
                    setSelectedArcano(null)
                    navigate("contatti")
                  }}
                >
                  Prenota una lettura
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

// ─── Page: CREDERE ────────────────────────────────────────────────
function PageCredere({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div style={{ background: "#0B0908" }}>
      <style>{`
        @keyframes crederePulse {
          0%, 100% {
            opacity: 0.25;
            transform: scaleX(0.7);
          }
          50% {
            opacity: 0.75;
            transform: scaleX(1);
          }
        }

        @keyframes credereDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(18px, -12px, 0);
          }
        }

        @keyframes credereReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .credere-side {
          transition:
            background 500ms ease,
            border-color 500ms ease,
            transform 500ms ease;
        }

        .credere-side:hover {
          background: rgba(232,221,202,0.035) !important;
          border-color: rgba(208,184,117,0.28) !important;
          transform: translateY(-3px);
        }

        .credere-side:hover .credere-side-number {
          color: #D0B875 !important;
          opacity: 1 !important;
        }

        .credere-side:hover .credere-side-line {
          transform: scaleX(1);
          opacity: 0.75;
        }

        .credere-step {
          transition:
            opacity 350ms ease,
            transform 350ms ease;
        }

        .credere-step:hover {
          opacity: 1 !important;
          transform: translateX(8px);
        }

        .credere-step:hover .credere-step-number {
          color: #D0B875 !important;
        }

        .credere-step-line {
          transition:
            transform 500ms ease,
            opacity 500ms ease;
          transform-origin: left;
        }

        .credere-step:hover .credere-step-line {
          transform: scaleX(1);
          opacity: 1;
        }

        .credere-symbol {
          transition:
            transform 700ms ease,
            opacity 700ms ease;
        }

        .credere-symbol:hover {
          transform: rotate(45deg) scale(1.08);
          opacity: 1 !important;
        }
      `}</style>

      {/* HERO */}

      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "#0B0908" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "700px",
            height: "700px",
            right: "-220px",
            top: "-250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(180,151,90,0.07) 0%, rgba(180,151,90,0.025) 35%, transparent 70%)",
            animation: "credereDrift 12s ease-in-out infinite",
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            left: "-250px",
            bottom: "-250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(90,30,34,0.16) 0%, transparent 68%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="section-label mb-8">
            Credere / conoscere
          </p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-9"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.08,
            }}
          >
            Prima di credere,
            <br />
            <span style={{ color: "#D0B875" }}>
              conosci.
            </span>
          </h1>

          <GoldSeparator />

          <p
            className="font-cormorant text-xl md:text-2xl italic max-w-3xl mx-auto"
            style={{
              color: "#E8DDCA99",
              lineHeight: 1.7,
            }}
          >
            Vyrah non chiede adesione a una verità già formulata.
            Ti invita a entrare nell'esperienza, osservare ciò che accade,
            confrontarlo e decidere da te che cosa riconosci come vero.
          </p>
        </div>
      </section>

      {/* TESI */}

      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #15100D 0%, #1B1511 48%, #15100D 100%)",
          borderTop: "1px solid rgba(180,151,90,0.12)",
          borderBottom: "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-7">
              Una distinzione necessaria
            </p>

            <h2
              className="display-heading text-3xl md:text-5xl mb-8"
              style={{
                color: "#E8DDCA",
                lineHeight: 1.1,
              }}
            >
              Credere può diventare
              <br />
              <span style={{ color: "#D0B875" }}>
                il nemico di conoscere.
              </span>
            </h2>

            <p
              className="editorial-body text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: "#E8DDCA88",
                lineHeight: 1.85,
              }}
            >
              Non perché ogni forma di fiducia sia un errore.
              Ma perché, quando una conclusione viene accettata prima
              dell'esperienza, la ricerca può interrompersi prima ancora
              di cominciare.
            </p>
          </div>

          {/* ASSE */}

          <div
            className="relative max-w-5xl mx-auto mt-24"
            style={{
              padding: "1px 0",
            }}
          >
            <div
              className="absolute left-[10%] right-[10%] top-1/2 hidden md:block"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(180,151,90,0.32), rgba(208,184,117,0.7), rgba(180,151,90,0.32), transparent)",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_120px_1fr] items-stretch">
              {/* ACCETTARE */}

              <div
                className="credere-side relative p-8 md:p-12"
                style={{
                  background: "rgba(11,9,8,0.32)",
                  border: "1px solid rgba(180,151,90,0.12)",
                }}
              >
                <div
                  className="credere-side-number font-cinzel text-5xl md:text-6xl mb-8"
                  style={{
                    color: "#B4975A55",
                    transition: "color 500ms ease, opacity 500ms ease",
                  }}
                >
                  I
                </div>

                <p
                  className="font-cinzel text-xs tracking-[0.16em] uppercase mb-5"
                  style={{ color: "#B4975A" }}
                >
                  Accettare troppo presto
                </p>

                <h3
                  className="display-heading text-2xl md:text-3xl mb-5"
                  style={{
                    color: "#D0B875",
                    lineHeight: 1.15,
                  }}
                >
                  Credere
                </h3>

                <div
                  className="credere-side-line w-16 h-px mb-7"
                  style={{
                    background: "#B4975A",
                    opacity: 0.35,
                    transform: "scaleX(0.45)",
                    transition:
                      "transform 500ms ease, opacity 500ms ease",
                  }}
                />

                <p
                  className="font-cormorant text-xl"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.7,
                  }}
                >
                  Una possibilità viene trasformata in una certezza
                  prima che l'esperienza abbia avuto modo di confermarla,
                  contraddirla o modificarla.
                </p>
              </div>

              {/* CENTRO */}

              <div
                className="relative flex items-center justify-center py-10 md:py-0"
                style={{
                  background: "#15100D",
                }}
              >
                <div
                  className="absolute hidden md:block"
                  style={{
                    width: "1px",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(180,151,90,0.35), transparent)",
                  }}
                />

                <div
                  className="relative z-10 flex items-center justify-center w-20 h-20"
                  style={{
                    background: "#15100D",
                    border:
                      "1px solid rgba(208,184,117,0.42)",
                    transform: "rotate(45deg)",
                  }}
                >
                  <span
                    className="credere-symbol font-cinzel text-xl"
                    style={{
                      color: "#D0B875",
                      transform: "rotate(-45deg)",
                      opacity: 0.82,
                    }}
                  >
                    ?
                  </span>
                </div>
              </div>

              {/* RIFIUTARE */}

              <div
                className="credere-side relative p-8 md:p-12"
                style={{
                  background: "rgba(11,9,8,0.32)",
                  border: "1px solid rgba(180,151,90,0.12)",
                }}
              >
                <div
                  className="credere-side-number font-cinzel text-5xl md:text-6xl mb-8"
                  style={{
                    color: "#B4975A55",
                    transition: "color 500ms ease, opacity 500ms ease",
                  }}
                >
                  II
                </div>

                <p
                  className="font-cinzel text-xs tracking-[0.16em] uppercase mb-5"
                  style={{ color: "#B4975A" }}
                >
                  Rifiutare troppo presto
                </p>

                <h3
                  className="display-heading text-2xl md:text-3xl mb-5"
                  style={{
                    color: "#D0B875",
                    lineHeight: 1.15,
                  }}
                >
                  Negare
                </h3>

                <div
                  className="credere-side-line w-16 h-px mb-7"
                  style={{
                    background: "#B4975A",
                    opacity: 0.35,
                    transform: "scaleX(0.45)",
                    transition:
                      "transform 500ms ease, opacity 500ms ease",
                  }}
                />

                <p
                  className="font-cormorant text-xl"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.7,
                  }}
                >
                  Una possibilità viene esclusa prima di essere
                  osservata, sperimentata o compresa abbastanza
                  da poter essere valutata.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <p
              className="font-cormorant text-xl md:text-2xl italic"
              style={{
                color: "#E8DDCA",
                lineHeight: 1.6,
              }}
            >
              In entrambi i casi, la ricerca si interrompe prima
              dell'esperienza.
            </p>

            <div
              className="w-12 h-px mx-auto mt-8"
              style={{
                background: "rgba(180,151,90,0.35)",
              }}
            />

            <p
              className="font-cinzel text-xs tracking-[0.16em] uppercase mt-7"
              style={{ color: "#D0B875" }}
            >
              Prima, osservare.
            </p>
          </div>
        </div>
      </section>

      {/* CONOSCERE */}

      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: "#0B0908",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "800px",
            height: "500px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse, rgba(180,151,90,0.065) 0%, rgba(90,30,34,0.035) 38%, transparent 72%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="section-label mb-7">
              Conoscere
            </p>

            <h2
              className="display-heading text-3xl md:text-5xl mb-7"
              style={{
                color: "#E8DDCA",
                lineHeight: 1.1,
              }}
            >
              La conoscenza non comincia
              <br />
              <span style={{ color: "#D0B875" }}>
                da una risposta.
              </span>
            </h2>

            <p
              className="font-cormorant text-xl md:text-2xl max-w-2xl"
              style={{
                color: "#E8DDCA88",
                lineHeight: 1.7,
              }}
            >
              Comincia quando lasciamo abbastanza spazio all'esperienza
              perché possa dirci qualcosa che ancora non sappiamo.
            </p>
          </div>

          {/* PROCESSO */}

          <div
            className="relative max-w-5xl mx-auto"
            style={{
              borderTop:
                "1px solid rgba(180,151,90,0.18)",
            }}
          >
            {[
              {
                num: "I",
                title: "Osservare",
                text: "Guardare ciò che accade prima di stabilire che cosa significhi.",
              },
              {
                num: "II",
                title: "Interrogare",
                text: "Formulare domande capaci di aprire il fenomeno invece di chiuderlo in una risposta.",
              },
              {
                num: "III",
                title: "Confrontare",
                text: "Mettere ciò che emerge in relazione con altre letture, esperienze e possibilità.",
              },
              {
                num: "IV",
                title: "Formulare",
                text: "Costruire un'interpretazione provvisoria, sapendo che rimane una mappa e non il territorio.",
              },
              {
                num: "V",
                title: "Verificare",
                text: "Portare ciò che abbiamo compreso nuovamente nell'esperienza e osservare cosa accade.",
              },
              {
                num: "VI",
                title: "De-costruire",
                text: "Tornare sulla nostra stessa interpretazione e chiederci cosa apparteneva ai fatti e cosa abbiamo aggiunto noi.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="credere-step grid grid-cols-[1fr] md:grid-cols-[100px_240px_1fr] gap-4 md:gap-8 py-7 md:py-9"
                style={{
                  borderBottom:
                    "1px solid rgba(180,151,90,0.11)",
                  opacity: 0.78,
                }}
              >
                <div
                  className="credere-step-number font-cinzel text-sm pt-1"
                  style={{
                    color: "#B4975A",
                    transition: "color 350ms ease",
                  }}
                >
                  {step.num}
                </div>

                <h3
                  className="font-cormorant text-2xl md:text-3xl"
                  style={{
                    color: "#D0B875",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>

                <div>
                  <div
                    className="credere-step-line w-12 h-px mb-4"
                    style={{
                      background: "#B4975A",
                      opacity: 0.32,
                      transform: "scaleX(0.45)",
                    }}
                  />

                  <p
                    className="font-cormorant text-lg md:text-xl"
                    style={{
                      color: "#E8DDCA77",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NON DEVI CREDERMI */}

      <section
        className="relative py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #351014 0%, #5A1E22 48%, #3E1217 100%)",
          borderTop:
            "1px solid rgba(180,151,90,0.18)",
          borderBottom:
            "1px solid rgba(180,151,90,0.18)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            right: "-180px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            border:
              "1px solid rgba(208,184,117,0.09)",
          }}
        />

        <div
          className="absolute pointer-events-none"
          style={{
            width: "420px",
            height: "420px",
            right: "-90px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            border:
              "1px solid rgba(208,184,117,0.07)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-14 md:gap-20 items-center">
            <div>
              <p className="section-label mb-7">
                Il rapporto con Vyrah
              </p>

              <h2
                className="display-heading text-3xl md:text-5xl"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.08,
                }}
              >
                Non devi
                <br />
                <span style={{ color: "#D0B875" }}>
                  credermi.
                </span>
              </h2>
            </div>

            <div>
              <p
                className="font-cormorant text-2xl md:text-3xl italic mb-8"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.45,
                }}
              >
                Devi poter verificare ciò che accade quando entri
                nell'esperienza.
              </p>

              <p
                className="font-cormorant text-lg md:text-xl"
                style={{
                  color: "#E8DDCA99",
                  lineHeight: 1.75,
                }}
              >
                Questo vale per gli strumenti simbolici, per le
                interpretazioni e per le ipotesi che incontrerai.
                Nulla acquista valore perché viene pronunciato da
                Vyrah. Il valore emerge nel momento in cui puoi
                osservare ciò che produce, confrontarlo con ciò
                che vivi e decidere quale significato abbia per te.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMBOLO */}

      <section
        className="relative py-32"
        style={{
          background: "#0B0908",
          borderBottom:
            "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-center">
            <div
              className="relative min-h-[320px] flex items-center justify-center"
            >
              <div
                className="absolute w-56 h-56"
                style={{
                  border:
                    "1px solid rgba(180,151,90,0.18)",
                  transform: "rotate(45deg)",
                  transition: "transform 1s ease",
                }}
              />

              <div
                className="absolute w-40 h-40"
                style={{
                  border:
                    "1px solid rgba(208,184,117,0.26)",
                  transform: "rotate(45deg)",
                }}
              />

              <div className="relative text-center">
                <p
                  className="font-cinzel text-xs tracking-[0.18em] uppercase mb-4"
                  style={{ color: "#B4975A" }}
                >
                  Il simbolo
                </p>

                <span
                  className="font-cormorant text-5xl italic"
                  style={{ color: "#D0B875" }}
                >
                  ?
                </span>
              </div>
            </div>

            <div>
              <p className="section-label mb-7">
                Uno strumento non è una verità
              </p>

              <h2
                className="display-heading text-3xl md:text-4xl mb-7"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.12,
                }}
              >
                Anche il simbolo
                <br />
                <span style={{ color: "#D0B875" }}>
                  può essere interrogato.
                </span>
              </h2>

              <p
                className="font-cormorant text-xl"
                style={{
                  color: "#E8DDCA88",
                  lineHeight: 1.75,
                }}
              >
                Una carta, un'immagine, un numero o un sogno non devono
                essere creduti per poter essere osservati. Possono diventare
                strumenti di ricerca proprio perché permettono di mettere
                in relazione ciò che vediamo con ciò che viviamo.
              </p>

              <p
                className="font-cormorant text-xl italic mt-7"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.65,
                }}
              >
Il loro significato non è una risposta da accettare, ma qualcosa da comprendere.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESPERIENZA */}

      <section
        className="relative py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #15100D 0%, #1A1210 50%, #15100D 100%)",
          borderBottom:
            "1px solid rgba(180,151,90,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="section-label mb-7">
              Prima della conclusione
            </p>

            <h2
              className="display-heading text-3xl md:text-5xl mb-7"
              style={{
                color: "#E8DDCA",
                lineHeight: 1.1,
              }}
            >
              Vivi l'esperienza.
              <br />
              <span style={{ color: "#D0B875" }}>
                Poi decidi.
              </span>
            </h2>

            <p
              className="font-cormorant text-xl md:text-2xl max-w-2xl"
              style={{
                color: "#E8DDCA88",
                lineHeight: 1.7,
              }}
            >
              Non è necessario arrivare con una convinzione.
              È sufficiente arrivare con una domanda e la disponibilità
              a guardare ciò che emerge.
            </p>
          </div>

          <div
            className="relative max-w-5xl mx-auto"
            style={{
              borderTop:
                "1px solid rgba(180,151,90,0.2)",
              borderBottom:
                "1px solid rgba(180,151,90,0.2)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  num: "I",
                  title: "Entra",
                  text: "Porta una situazione reale, una domanda, una contraddizione o qualcosa che ancora non sai nominare.",
                },
                {
                  num: "II",
                  title: "Osserva",
                  text: "Lascia che gli strumenti e il dialogo aprano prospettive. Guarda ciò che riconosci e anche ciò che non riconosci.",
                },
                {
                  num: "III",
                  title: "Decidi",
                  text: "Quello che emerge torna nelle tue mani. Puoi accoglierlo, metterlo alla prova, modificarlo o lasciarlo andare.",
                },
              ].map((item, index) => (
                <div
                  key={item.num}
                  className="relative p-8 md:p-10 group"
                  style={{
                    borderRight:
                      index < 2
                        ? "1px solid rgba(180,151,90,0.12)"
                        : "none",
                  }}
                >
                  <span 
  className="font-cinzel text-sm transition-all duration-500 group-hover:brightness-125"
                    style={{
                      color: "#B4975A",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {item.num}
                  </span>

                  <h3
                    className="display-heading text-2xl md:text-3xl mt-8 mb-5 transition-all duration-500 group-hover:brightness-125"
                    style={{
                      color: "#D0B875",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    className="w-12 h-px mb-6"
                    style={{
                      background:
                        "rgba(180,151,90,0.32)",
                    }}
                  />

                  <p
                    className="font-cormorant text-lg transition-all duration-500 group-hover:brightness-125"
                    style={{
                      color: "#E8DDCA77",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHIUSURA */}

      <section
        className="relative py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #351014 0%, #5A1E22 48%, #3E1217 100%)",
          borderTop:
            "1px solid rgba(180,151,90,0.2)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border:
              "1px solid rgba(208,184,117,0.08)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <StarDecor />

          <blockquote
            className="large-quote text-3xl md:text-5xl mt-8 mb-8"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.18,
            }}
          >
            Non ti chiedo di credermi.
            <br />
            <span style={{ color: "#D0B875" }}>
              Ti invito a conoscere.
            </span>
          </blockquote>

          <p
            className="font-cormorant text-xl md:text-2xl italic max-w-2xl mx-auto"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.7,
            }}
          >
            Il resto non deve essere accettato.
            Può essere osservato, messo alla prova e scelto.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="cta-primary"
              onClick={() => navigate("esperienze")}
            >
              Entra nell'esperienza
            </button>

            <button
              className="cta-secondary"
              onClick={() => navigate("metodo")}
            >
              Conosci il metodo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: ESPERIENZE ─────────────────────────────────────────────────────────
function PageEsperienze({ navigate }: { navigate: (p: Page) => void }) {
  const experiences = [
    {
      title: "Consulenze Individuali",
      subtitle: "Uno spazio di osservazione e confronto.",
      desc: "Un singolo incontro per esplorare una domanda, una situazione, una scelta o un momento di cambiamento. Attraverso il dialogo e gli strumenti simbolici che si rivelano più significativi per la ricerca, osserviamo la questione da prospettive diverse per arrivare a una chiave di lettura che possa diventare tua.",
      duration: "90 min",
      img: IMG.luna01, mirror:true,
      cta: "Prenota una Consulenza",
      page: "contatti"
    },
    {
      title: "Percorsi Individuali",
      subtitle: "Un accompagnamento più profondo nella ricerca di sé.",
      desc: "Un ciclo da tre a sei incontri pensato per chi desidera dedicare più tempo alla propria ricerca. Un percorso individuale che prende forma nel tempo: ciò che emerge in un incontro diventa il punto di partenza per quello successivo, permettendo di riconoscere ricorrenze, approfondire domande e osservare ciò che una singola consulenza non può esaurire.",
      duration: "3–6 sessioni",
      img: IMG.luna03,
      cta: "Scopri i Percorsi",
      page: "percorso"
    },
    {
      title: "Corsi",
      subtitle: "Imparare a utilizzare gli strumenti simbolici.",
      desc: "Corsi formativi dedicati a chi vuole conoscere e approfondire un linguaggio simbolico, andando oltre la sola lettura. Si parte dalle basi per imparare a osservare e interpretare il simbolo con consapevolezza, trasformandolo in uno strumento per comprendere meglio sé stessi, gli altri e ciò che viviamo.",
      duration: "Variabile",
      img: IMG.luna02,
      cta: "Vedi i Corsi",
      page: "eventi",
    },
    {
      title: "Eventi",
      subtitle: "Esperienze dal vivo, incontri e momenti di condivisione.",
      desc: "Serate tematiche, workshop e incontri dal vivo per avvicinarsi al mondo simbolico, sperimentare nuovi strumenti e condividere domande, intuizioni e prospettive.",
      duration: "In presenza",
      img: IMG.luna04,
      cta: "Vedi gli Eventi",
      page: "eventi"
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-20" style={{ background: "#0B0908" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-8">Le proposte di Vyrah</p>
          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{ color: "#E8DDCA" }}
          >
            Ogni proposta nasce da {" "}
            <span style={{ color: "#B4975A" }}>un'esigenza</span> diversa.
          </h1>
          <p
            className="font-cormorant text-xl italic"
            style={{ color: "#E8DDCA88", lineHeight: 1.8 }}
          > <GoldSeparator />
            Dallo spazio di una singola lettura a un percorso più continuativo, fino allo studio e alle esperienze condivise.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section style={{ background: "#0B0908" }} className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-0.5">
            {experiences.map((e, i) => (
              <div
                key={e.title}
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:grid-cols-2" : ""
                }`}
                style={{ border: "1px solid rgba(180,151,90,0.08)" }}
              >
                <div
                  className={`relative overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover absolute inset-0"
                    style={{ filter: "brightness(0.8) sepia(0.3)" }}
                  />
                </div>
                <div
                  className={`p-12 md:p-16 flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                  style={{ background: "#15100D" }}
                >
                  <p className="section-label mb-4">{e.subtitle}</p>
                  <h2
                    className="display-heading text-2xl md:text-3xl mb-2"
                    style={{ color: "#E8DDCA" }}
                  >
                    {e.title}
                  </h2>
                  <div className="gold-line my-6" />
                  <p
                    className="editorial-body mb-4"
                    style={{ color: "#E8DDCA77" }}
                  >
                    {e.desc}
                  </p>
                  <p
                    className="font-cinzel text-xs tracking-[0.2em] mb-8"
                    style={{ color: "#B4975A66" }}
                  >
                    {e.duration}
                  </p>
                 <button
  className="cta-primary self-start"
  onClick={() => navigate(e.page as Page)}
>
  {e.cta}
</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: EVENTI ─────────────────────────────────────────────────────────────
function PageEventi({ navigate }: { navigate: (p: Page) => void }) {
  const [pastEventIndex, setPastEventIndex] = useState(3)

  const events = [
    {
      date: "10 Ottobre 2026",
      location: "Brescia",
      title: "Sessioni individuali",
      desc: "Un incontro individuale per portare ciò che oggi chiede di essere compreso. Attraverso il dialogo e il linguaggio simbolico, esploreremo la tua domanda da prospettive diverse, per trovare una nuova chiave di lettura e una direzione più consapevole.",
      spots: "6 posti disponibili",
    },
    {
      date: "24 Ottobre 2026",
      location: "Brescia",
      title: "Corso: Gli arcani come specchio",
      desc: "Un'esperienza che non ti insegna semplicemente cosa significa una carta, ma come interrogarla. Un percorso per sviluppare uno sguardo più consapevole, riconoscere connessioni e possibilità e utilizzare il simbolo come strumento per conoscersi.",
      spots: "12 posti disponibili",
    },
  ]

  const pastEvents = [
    {
      img: IMG.assisi,
      title: "Martedì d'Incanto",
      location: "Manerba del Garda, Giugno-Agosto 2026",
    },
    {
      img: IMG.tramontoEdit,
      title: "Fermento Festival",
      location: "Urgnano, Agosto 2026",
    },
    {
      img: IMG.suggestivo,
      title: "Romano Medievale",
      location: "Romano di Lombardia, Settembre 2025",
    },
    {
      img: IMG.cornice,
      title: "Fermento Festival",
      location: "Urgnano, Agosto 2025",
    },
  ]

  const infinitePastEvents = [
    ...pastEvents,
    ...pastEvents,
    ...pastEvents,
  ]

  const scrollPastEvents = (direction: "left" | "right") => {
    setPastEventIndex((current) => {
      if (direction === "right") {
        return current + 1
      }

      return current - 1
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPastEventIndex((current) => current + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-40 pb-20 relative"
        style={{ background: "#0B0908" }}
      >
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `url('${IMG.forest}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "sepia(1) brightness(0.3)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-8">Calendario</p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{ color: "#E8DDCA" }}
          >
            Dove e quando{" "}
            <span style={{ color: "#B4975A" }}>incontrarsi</span>.
          </h1>

          <p
            className="font-cormorant text-xl italic"
            style={{ color: "#E8DDCA88" }}
          >
            Esperienze collettive, incontri dal vivo e momenti di condivisione.
          </p>
        </div>
      </section>

      {/* Events */}
      <section style={{ background: "#0B0908" }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-0.5">
            {events.map((ev, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-4 gap-0"
                style={{
                  background: "#15100D",
                  border: "1px solid rgba(180,151,90,0.1)",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(180,151,90,0.35)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(180,151,90,0.1)")
                }
              >
                {/* Date Column */}
                <div
                  className="p-8 flex flex-col justify-center"
                  style={{
                    borderRight: "1px solid rgba(180,151,90,0.1)",
                    background: "#421B2015",
                  }}
                >
                  <p
                    className="font-cinzel text-xs tracking-[0.15em] mb-2"
                    style={{ color: "#B4975A" }}
                  >
                    {ev.date}
                  </p>

                  <p
                    className="font-cormorant text-sm italic"
                    style={{ color: "#E8DDCA66" }}
                  >
                    {ev.location}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8 md:col-span-2">
                  <h3
                    className="display-heading text-xl mb-3"
                    style={{ color: "#E8DDCA" }}
                  >
                    {ev.title}
                  </h3>

                  <p
                    className="font-cormorant text-base"
                    style={{ color: "#E8DDCA77", lineHeight: 1.6 }}
                  >
                    {ev.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="p-8 flex flex-col justify-center items-start md:items-end gap-3">
                  <p
                    className="font-cinzel text-xs"
                    style={{
                      color: "#B4975A66",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {ev.spots}
                  </p>

                  <button
                    className="cta-primary"
                    style={{ padding: "10px 20px" }}
                    onClick={() => navigate("contatti")}
                  >
                    Prenota
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section
        className="py-24"
        style={{
          background: "#15100D",
          borderTop: "1px solid rgba(180,151,90,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Dove siamo stati</p>

          <h2
            className="display-heading text-3xl mb-12"
            style={{ color: "#E8DDCA" }}
          >
            Le esperienze passate.
          </h2>

          <div className="relative overflow-hidden">
            {/* Freccia sinistra */}
            <button
              onClick={() => scrollPastEvents("left")}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300"
              style={{
                color: "#E8DDCA",
                background: "rgba(11,9,8,0.65)",
                border: "1px solid rgba(180,151,90,0.35)",
              }}
              aria-label="Evento precedente"
            >
              ←
            </button>

            {/* Carousel */}
<div
  className="flex"
  style={{
    width: "300%",
    transform: `translateX(-${pastEventIndex * 11.111111}%)`,
    transition: "transform 700ms ease",
  }}
  onTransitionEnd={() => {
    if (pastEventIndex >= 6) {
      setPastEventIndex(3)
    }

    if (pastEventIndex <= 0) {
      setPastEventIndex(3)
    }
  }}
>
  {infinitePastEvents.map((p, index) => (
    <div
      key={`${p.title}-${index}`}
      className="relative overflow-hidden shrink-0 w-1/3 md:w-1/9"
      style={{
        height: "300px",
      }}
    >
      <img
        src={p.img}
        alt={p.title}
        className="w-full h-full object-cover"
        style={{
          filter: "brightness(1.0) sepia(0.0)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,9,8,0.9) 0%, transparent 60%)",
        }}
      />

      <div className="absolute bottom-6 left-6">
        <p
          className="font-cinzel text-sm mb-1"
          style={{ color: "#E8DDCA" }}
        >
          {p.title}
        </p>

        <p
          className="font-cormorant text-sm italic"
          style={{ color: "#B4975A88" }}
        >
          {p.location}
        </p>
      </div>
    </div>
  ))}
</div>

            {/* Freccia destra */}
            <button
              onClick={() => scrollPastEvents("right")}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300"
              style={{
                color: "#E8DDCA",
                background: "rgba(11,9,8,0.65)",
                border: "1px solid rgba(180,151,90,0.35)",
              }}
              aria-label="Evento successivo"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: ARCHIVIO ────────────────────────────────────────────────────────────
function PageArchivio({
  navigate,
}: {
  navigate: (page: Page) => void
}) {
  type Tab = "etimologie" | "dizionario" | "riflessioni" | "simboli"
  type SortMode = "importance" | "alphabetical"
  type ReflectionSource = "Vyrah" | "Le vostre riflessioni"
  type ReflectionKind =
    | "Tutte"
    | "Riflessioni"
    | "Domande"
    | "Ricerca"

  type ArchiveEntry = {
    id: string
    heading: string
    body: string
    origin?: string
    importance?: number
    featured?: boolean
    topic?: string
    date?: string
    img?: string
    source?: ReflectionSource
    kind?: ReflectionKind
  }

  const [activeTab, setActiveTab] = useState<Tab>("etimologie")
  const [showAll, setShowAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortMode, setSortMode] =
    useState<SortMode>("importance")

  const [reflectionSource, setReflectionSource] =
    useState<ReflectionSource>("Vyrah")

  const [reflectionKind, setReflectionKind] =
    useState<ReflectionKind>("Tutte")

  const [expandedEntries, setExpandedEntries] =
    useState<string[]>([])

  /* --------------------------------------------------
     ETIMOLOGIE
  -------------------------------------------------- */

  const etimologie: ArchiveEntry[] = [
    {
      id: "allineamento",
      heading: "Allineamento",
      origin:
        "dal latino linea, attraverso il verbo italiano allineare",
      body:
        "Allineamento deriva da allineare e indica, nel suo significato concreto, il disporre o il disporsi lungo una linea. La parola nasce quindi da un'immagine precisa: elementi differenti possono trovarsi in rapporto attraverso una stessa direzione di riferimento.\n\nNel tempo il termine assume anche significati figurati, fino a indicare concordanza, adeguamento o adesione a una posizione. È proprio qui che la parola diventa interessante per Vyrah. Allinearsi non significa necessariamente conformarsi a una linea già tracciata da altri. Può significare riconoscere la propria direzione e verificare, nel movimento della vita, quanto ciò che facciamo rimanga in rapporto con essa.\n\nL'allineamento non è quindi immobilità, perfezione o obbedienza. È una relazione dinamica tra ciò che riconosciamo come nostro e il modo in cui scegliamo di attraversare il mondo.",
      importance: 1,
      featured: true,
    },

    {
      id: "autenticita",
      heading: "Autenticità",
      origin:
        "dal latino tardo authenticus, dal greco authentikós, da authentēs",
      body:
        "Autenticità deriva da autentico, dal latino tardo authenticus e dal greco authentikós, collegato ad authentēs: autore, colui che opera da sé. L'etimologia porta quindi con sé un'idea di autorialità, di qualcosa che proviene realmente dal proprio autore.\n\nIl significato moderno si è ampliato fino a comprendere ciò che è genuino, non falsificato, conforme alla propria origine. Nella filosofia esistenzialista l'autenticità riguarda inoltre un'esistenza vissuta nella consapevolezza di sé e della propria vocazione.\n\nPer Vyrah l'autenticità non coincide con il mostrarsi senza filtri, né con l'idea di possedere un'identità immutabile. Riguarda piuttosto l'origine delle nostre scelte: da dove vengono? Le riconosciamo ancora come nostre? Quanto della forma che abbiamo assunto continua davvero a corrisponderci?\n\nEssere autentici significa allora interrogare l'autorialità della propria vita.",
      importance: 2,
      featured: true,
    },

    {
      id: "credere",
      heading: "Credere",
      origin: "dal latino crēdĕre",
      body:
        "Credere deriva dal latino crēdĕre e indica il ritenere vero, il prestare fede, l'affidarsi a qualcuno o l'accettare qualcosa come vero.\n\nLa parola diventa particolarmente interessante quando viene messa in rapporto con conoscere. Credere può precedere la conoscenza, ma può anche sostituirla quando una conclusione viene accettata prima che sia stata osservata, attraversata o verificata.\n\nPer Vyrah il problema non è quindi il credere in sé. È il momento in cui una convinzione occupa lo spazio della ricerca e non permette più all'esperienza di modificarla.\n\nMa anche il rifiuto automatico può produrre lo stesso effetto. Se decidiamo in anticipo che qualcosa non può essere vero, abbiamo già interrotto l'osservazione. Tra credere e non credere rimane allora una possibilità più esigente: guardare.",
      importance: 3,
      featured: true,
    },

    {
      id: "eudaimonia",
      heading: "Eudaimonia",
      origin:
        "dal greco εὐδαιμονία, da εὐδαίμων: εὖ + δαίμων",
      body:
        "Eudaimonia è il termine greco che la tradizione filosofica ha utilizzato per indicare la felicità o la buona riuscita della vita. È collegato a εὐδαίμων, composto da εὖ, 'bene', e δαίμων, parola che nel greco antico può indicare una divinità, uno spirito o una forza associata alla sorte.\n\nNella filosofia aristotelica l'eudaimonia non coincide con un'emozione piacevole o con uno stato di soddisfazione momentanea. È legata alla realizzazione delle capacità proprie dell'essere umano e a una vita vissuta secondo virtù.\n\nPer Vyrah è importante soprattutto questa profondità. Vivere ricercando la propria eudaimonia non significa costruire una vita nella quale nulla faccia male o nella quale ogni desiderio venga soddisfatto. Significa cercare una forma di vita che abbia rapporto con ciò che siamo, con ciò che possiamo diventare e con ciò che riconosciamo come realmente nostro.\n\nPer questo l'eudaimonia non è una destinazione da raggiungere una volta per tutte, ma una direzione da continuare a interrogare.",
      importance: 4,
      featured: true,
    },

    {
      id: "esperienza",
      heading: "Esperienza",
      origin:
        "dal latino experientia, da experiri",
      body:
        "Esperienza deriva dal latino experientia, a sua volta collegato a experiri: provare, mettere alla prova. La parola porta quindi con sé l'idea di attraversare qualcosa e di acquisire, attraverso questo passaggio, una conoscenza diretta.\n\nL'esperienza non coincide però automaticamente con la verità. Ciò che viviamo può essere interpretato male, può essere parziale, può essere condizionato da ciò che già pensiamo.\n\nPer Vyrah il suo valore sta proprio nella possibilità di tornare su ciò che è accaduto. Fare esperienza significa avere qualcosa con cui confrontare le nostre convinzioni, osservare ciò che realmente è successo e verificare se l'interpretazione che ne abbiamo dato continua a reggere.\n\nL'esperienza non chiude quindi la ricerca. Le fornisce materia.",
      importance: 5,
      featured: false,
    },

    {
      id: "natura",
      heading: "Natura",
      origin:
        "dal latino nātūra, da nāscī",
      body:
        "Natura deriva dal latino nātūra, collegato a nāscī, 'nascere'. Nella parola rimane quindi l'idea di ciò che nasce, viene all'esistenza e prende forma.\n\nNel corso della sua storia il termine ha assunto significati molto diversi: il mondo naturale, ciò che caratterizza una cosa, il principio generatore, ciò che si contrappone all'artificiale. Proprio questa ampiezza rende difficile trattare la natura come una definizione immobile.\n\nPer Vyrah la natura non è un'essenza perfettamente compiuta che aspetta soltanto di essere trovata. È piuttosto ciò da cui qualcosa nasce e attraverso cui continua a svilupparsi. Comprendere la propria natura significa osservare ciò che ritorna, ciò che tende a emergere, ciò che ci muove e ciò che continua a prendere forma nel tempo.\n\nNon un'identità già conclusa, dunque, ma un'origine capace di trasformazione.",
      importance: 6,
      featured: false,
    },

    {
      id: "persona",
      heading: "Persona",
      origin:
        "dal latino persōna, di probabile origine etrusca phersu",
      body:
        "Persona deriva dal latino persōna, parola di probabile origine etrusca che indicava originariamente la maschera teatrale e che in seguito assunse il significato di individuo umano.\n\nLa storia della parola contiene quindi un passaggio significativo: ciò che indicava una forma rappresentata sulla scena è diventato uno dei termini più comuni con cui indichiamo chi quella forma la porta.\n\nVyrah non usa questa etimologia per sostenere che ogni identità sia una maschera o che esista necessariamente un sé autentico nascosto dietro ciò che mostriamo. La utilizza come una domanda.\n\nQuanto delle forme attraverso cui ci riconosciamo è nato da noi? Quanto è stato costruito nella relazione con gli altri? E una forma che un tempo ci rappresentava può continuare a farlo quando siamo cambiati?\n\nLa persona diventa così un punto di osservazione tra identità, ruolo, relazione e trasformazione.",
      importance: 7,
      featured: false,
    },

    {
      id: "virtu",
      heading: "Virtù",
      origin:
        "dal latino virtūs, da vir",
      body:
        "Virtù deriva dal latino virtūs, 'forza, coraggio', collegato a vir, 'uomo'. Nella sua storia il termine indica quindi inizialmente una qualità di forza e valore, prima di assumere significati morali sempre più ampi.\n\nLa tradizione filosofica greca introduce inoltre l'idea dell'areté, cioè dell'eccellenza o della capacità di svolgere bene la propria funzione. Questi significati permettono di guardare alla virtù oltre l'idea di semplice bontà morale.\n\nPer Vyrah una virtù è una capacità che diventa concreta nell'azione. Non basta riconoscere un valore: bisogna poterlo trasformare in una forma di vita, in una scelta, in un modo di agire.\n\nLa virtù è quindi il punto in cui ciò che comprendiamo incontra ciò che siamo capaci di fare.",
      importance: 8,
      featured: false,
    },

    {
      id: "missione",
      heading: "Missione",
      origin:
        "dal latino missio, da mittere",
      body:
        "Missione deriva dal latino missio, da mittere, 'mandare, inviare'. Il significato originario è quindi legato al movimento di qualcuno o qualcosa verso una destinazione, spesso con un incarico preciso.\n\nNel tempo la parola è passata dall'idea concreta dell'invio a quella di compito, incarico e, successivamente, di scopo al quale una vita o un'attività possono essere orientate.\n\nPer Vyrah una missione non deve necessariamente essere un grande obiettivo già scritto da qualche parte. Può essere una direzione che prende forma attraverso ciò che scegliamo di mettere in movimento.\n\nLa domanda non è soltanto 'qual è la mia missione?', ma anche 'che cosa sto scegliendo di mettere in movimento, e verso dove?'.",
      importance: 9,
      featured: false,
    },
  ]

  /* --------------------------------------------------
     VOCABOLARIO VYRAH
  -------------------------------------------------- */

  const dizionario: ArchiveEntry[] = [
    {
      id: "natura",
      heading: "Natura",
      body:
        "Ciò da cui qualcosa nasce e attraverso cui continua a prendere forma. In Vyrah natura non indica un'essenza immobile, già completamente definita e nascosta dentro di noi. Indica piuttosto una direzione originaria: ciò che ci appartiene, ciò che tende a emergere, ciò che ritorna e si sviluppa nel tempo. Conoscere la propria natura significa anche imparare a distinguere ciò che nasce da noi da ciò che abbiamo imparato ad assumere.",
      importance: 1,
      featured: true,
    },

    {
      id: "autenticita",
      heading: "Autenticità",
      body:
        "La possibilità di essere autori delle proprie scelte. In Vyrah l'autenticità non coincide con il dire sempre ciò che pensiamo né con il mostrarci senza filtri. Riguarda il rapporto tra origine e forma: quanto ciò che facciamo nasce da qualcosa che riconosciamo ancora come nostro? Un'esistenza autentica non è necessariamente semplice o priva di contraddizioni. È un'esistenza nella quale possiamo continuare a interrogare l'origine delle nostre scelte.",
      importance: 2,
      featured: true,
    },

    {
      id: "allineamento",
      heading: "Allineamento",
      body:
        "La relazione dinamica tra ciò che siamo, ciò che riconosciamo, ciò che scegliamo e il modo in cui viviamo. In Vyrah allinearsi non significa aderire a un modello né eliminare ogni contraddizione. Significa mantenere un riferimento mentre attraversiamo relazioni, influenze e cambiamenti che possono portarci altrove. L'allineamento non è una posizione da raggiungere una volta per tutte: è qualcosa che possiamo osservare, perdere, ritrovare e correggere.",
      importance: 3,
      featured: true,
    },

    {
      id: "eudaimonia",
      heading: "Eudaimonia",
      body:
        "Vivere seguendo i propri valori e virtù, continuando a conoscersi. In Vyrah, l'eudaimonia non si limita a uno stato di felicità effimera né nega un’esistenza priva di difficoltà. Indica piuttosto una direzione: comprendere la propria natura, sviluppare le proprie capacità, riconoscere ciò che non ci appartiene più e dare forma, nel tempo, a una vita sempre più coerente con quanto abbiamo imparato a vedere di noi.",
      importance: 4,
      featured: true,
    },

    {
      id: "esperienza",
      heading: "Esperienza",
      body:
        "Se l'etimologia del termine richiama letteralmente 'l'atto di uscire indenni da una prova dopo averla attraversata', in Vyrah l’esperienza è ciò che attraversiamo entrando in rapporto diretto con la realtà: non soltanto qualcosa che accade, ma una possibilità per osservare, comprendere e sviluppare nuove capacità. Quello che viviamo può così diventare conoscenza concreta, quando siamo disposti a interrogarlo e a portarne ciò che abbiamo appreso nella vita quotidiana.",
      importance: 5,
      featured: false,
    },

    {
      id: "ascolto",
      heading: "Ascolto",
      body:"Nel suo significato originario, ascoltare richiama l'atto di porgere l'orecchio: orientare intenzionalmente l'udito verso una fonte per poterla percepire con maggiore attenzione. Ascoltare è quindi un atto attivo, che richiede presenza, concentrazione e disponibilità a comprendere ciò che si sta percependo. In Vyrah questo gesto si estende oltre il suono: ascoltare significa orientare l'attenzione verso ciò che cerca di emergere, sia attraverso le parole sia attraverso sensazioni, immagini, ricorrenze, intuizioni e segnali che possono aiutare a comprendere un'esperienza.",
      importance: 6,
      featured: true,
    },

    {
      id: "simbolo",
      heading: "Simbolo",
      body:
        "Un elemento capace di mettere in relazione ciò che altrimenti potrebbe rimanere separato. In Vyrah il simbolo non è un codice segreto che contiene una risposta già stabilita. È uno strumento di osservazione: può far emergere associazioni, contrasti, immagini e domande. Il suo valore non sta nel decidere al posto nostro, ma nella possibilità di mostrarci qualcosa che possiamo poi confrontare con l'esperienza.",
      importance: 7,
      featured: true,
    },

    {
      id: "distinguere",
      heading: "Distinguere",
      body:
        "Riconoscere una differenza senza trasformarla necessariamente in separazione. Per Vyrah distinguere è una delle condizioni della conoscenza: se tutto viene confuso, non possiamo più osservare le relazioni tra le cose. Ma distinguere non significa dividere il mondo in elementi incapaci di convivere. Luce e ombra possono appartenere allo stesso paesaggio; identità e relazione possono coesistere; una differenza può rimanere tale senza diventare conflitto. Distinguere serve a vedere meglio.",
      importance: 8,
      featured: true,
    },

    {
      id: "ricerca",
      heading: "Ricerca",
      body:
        "Il termine racchiude un concetto sfuggente ma profondo: l'atto di cercare, esplorare, tornare sui propri passi per avvicinarsi a qualcosa che ancora non si conosce. In questa prospettiva, la ricerca può essere letta anche come un movimento che circoscrive progressivamente il proprio oggetto, restringendo il campo e osservandolo con maggiore attenzione. Non indica necessariamente un percorso lineare: a volte è proprio tornando sullo stesso punto che qualcosa diventa più chiaro.",
      importance: 9,
      featured: false,
    },

    {
      id: "conoscenza",
      heading: "Conoscenza",
      body:
        "Mettere insieme ciò che si apprende per arrivare a comprendere qualcosa in modo più completo. In Vyrah la conoscenza nasce dall'incontro tra ciò che osserviamo, ciò che apprendiamo e ciò che riusciamo a comprendere. Non è quindi soltanto accumulo di informazioni, ma comprensione di ciò che abbiamo incontrato.",
      importance: 10,
      featured: false,
    },

    {
      id: "creazione",
      heading: "Creazione",
      body:
        "Dare forma, far emergere, generare o trasformare ciò che esiste in una configurazione nuova. La creazione non richiede necessariamente di produrre qualcosa dal nulla. Può essere il passaggio da una possibilità ancora indistinta a una forma riconoscibile: osservare, nominare, distinguere, organizzare e agire. Creare significa anche partecipare al processo attraverso cui una possibilità diventa esperienza.",
      importance: 13,
      featured: false,
    },

    {
      id: "scelta",
      heading: "Scelta",
      body:
        "La scelta non è il semplice prendere una posizione né l'assecondare una preferenza. È distinguere tra possibilità diverse, riconoscerne le caratteristiche e valutarne ciò che conta, fino ad arrivare a una decisione consapevole. Scegliere significa quindi arrivare a una conclusione attraverso una comprensione sufficientemente profonda della situazione.",
      importance: 14,
      featured: false,
    },

    {
      id: "virtù",
      heading: "Virtù",
      body:
        "La virtù è la qualità attraverso cui qualcosa esprime al meglio la propria natura. Nell'essere umano riguarda le capacità, le qualità e le disposizioni che gli permettono di agire in modo concreto e coerente con ciò che è. Non indica quindi un modello uguale per tutti, ma ciò che ciascuno può sviluppare secondo i propri mezzi e le proprie caratteristiche. È la forza che permette alla propria natura di tradursi in azione.",
      importance: 15,
      featured: false,
    },

    {
      id: "missione",
      heading: "Missione",
      body:
        "Una direzione che prende forma attraverso ciò che scegliamo di mettere in movimento. In Vyrah non è necessariamente un destino già scritto né un grande obiettivo finale. Può essere una successione di passaggi intenzionali attraverso cui una possibilità diventa concreta. Una missione può cambiare forma senza perdere il filo che la attraversa.",
      importance: 16,
      featured: false,
    },
  ]

  /* --------------------------------------------------
     RIFLESSIONI VYRAH
  -------------------------------------------------- */

  const riflessioni: ArchiveEntry[] = [
    {
      id: "credere-conoscere",
      heading: "Credere è il nemico di conoscere.",
      body:
        "La frase diventa radicale soltanto se chiamiamo credere l'accettazione di una conclusione prima di averla osservata. Quando abbiamo già deciso che cosa qualcosa significa, l'esperienza rischia di diventare soltanto una conferma. Ma anche il rifiuto automatico può produrre lo stesso effetto. Se stabilisco che qualcosa è falso prima di guardarlo, non sto conoscendo. Tra accettare e rifiutare rimane uno spazio più esigente: osservare.",
      source: "Vyrah",
      kind: "Riflessioni",
      topic: "Conoscenza",
      importance: 1,
      featured: true,
    },

    {
      id: "distinzione",
      heading: "Distinguere non significa separare.",
      body:
        "Abbiamo bisogno di distinguere per poter conoscere, ma la distinzione non obbliga alla separazione. Il giorno non cancella la notte; l'alba e il tramonto esistono proprio come zone di passaggio; una relazione può contenere differenze senza dissolverle. Il problema nasce quando confondiamo il riconoscimento di una differenza con la necessità di eliminare uno dei due termini. Distinguere significa poter dire 'questo è diverso da quello' senza concludere automaticamente che non possano stare insieme.",
      source: "Vyrah",
      kind: "Riflessioni",
      topic: "Distinzione",
      importance: 4,
      featured: true,
    },

    {
      id: "allineamento",
      heading: "L'allineamento non è stare fermi sulla propria linea.",
      body:
        "Se allineamento significasse mantenere una posizione immutabile, ogni relazione con il mondo diventerebbe una minaccia. Ma una linea può attraversare uno spazio complesso senza smettere di indicare una direzione. L'allineamento è dinamico: significa poter entrare in relazione, lasciarsi modificare dove è necessario e attraversare influenze e contraddizioni senza perdere completamente il riferimento di ciò che abbiamo riconosciuto come nostro. Non è isolamento. È orientamento.",
      source: "Vyrah",
      kind: "Riflessioni",
      topic: "Allineamento",
      importance: 5,
      featured: false,
    },

    {
      id: "genesi",
      heading: "Prima della forma c'è ciò che ancora non distinguiamo.",
      body:
        "Molti racconti sull'origine utilizzano immagini di indistinzione: acque, oscurità, abissi, caos, possibilità non ancora ordinate. Nella Genesi, prima delle separazioni successive, il mondo appare come uno spazio non ancora organizzato. Nel Chaos di Esiodo troviamo un'immagine che non coincide semplicemente con il disordine moderno, ma richiama un'apertura originaria. Nella speculazione vedica vengono persino messe in discussione le categorie di essere e non-essere. Queste immagini non dimostrano un'unica cosmologia. Permettono però di osservare una ricorrenza: la forma diventa riconoscibile attraverso la distinzione.",
      source: "Vyrah",
      kind: "Ricerca",
      topic: "Cosmologie",
      importance: 6,
      featured: false,
    },

    {
      id: "parola-creazione",
      heading: "Nominare non è soltanto descrivere.",
      body:
        "Nei racconti cosmogonici la parola compare spesso come gesto capace di produrre ordine o forma. Nella Genesi Dio parla e qualcosa accade; nella tradizione indiana il rapporto tra parola, nome e forma diventa oggetto di riflessione; nel Qur'an il comando 'Kun' — 'Sii' — è associato al divenire di ciò che viene comandato. Queste tradizioni non devono essere fuse in una sola dottrina. La domanda comparativa è un'altra: perché la parola viene così spesso associata alla possibilità che qualcosa prenda forma? Il punto non è una tecnica di manifestazione, ma il potere che nominazione, distinzione e formulazione hanno nel modo in cui costruiamo la realtà che abitiamo.",
      source: "Vyrah",
      kind: "Ricerca",
      topic: "Creazione",
      importance: 8,
      featured: false,
    },

    {
      id: "caos",
      heading: "Il caos potrebbe essere ciò che ancora non ha forma.",
      body:
        "La parola caos porta oggi soprattutto l'idea di disordine. Il Chaos della Teogonia di Esiodo, però, non coincide semplicemente con il caos nel senso moderno: indica un'apertura, una voragine, una condizione originaria dalla quale emergono progressivamente altre realtà cosmiche. Questo suggerisce una distinzione: qualcosa può apparire caotico perché è privo di ordine oppure perché l'ordine attraverso cui potrebbe essere compreso non è ancora emerso. La domanda diventa allora: che cosa stiamo chiamando caos soltanto perché non abbiamo ancora trovato la distinzione giusta?",
      source: "Vyrah",
      kind: "Ricerca",
      topic: "Cosmologie",
      importance: 9,
      featured: false,
    },

    {
      id: "uno-molti",
      heading: "Dall'uno ai molti: quando la differenza nasce dalla forma.",
      body:
        "Nel pensiero delle Upaniṣad emerge più volte il rapporto tra un principio unitario e la molteplicità delle forme. Nel Chandogya Upanishad la riflessione passa anche attraverso il rapporto tra nome e forma. Per Vyrah non è necessario trasformare questa idea in una cosmologia personale. È sufficiente osservare la domanda che apre: quanto della molteplicità che vediamo dipende dalle forme attraverso cui distinguiamo ciò che prima appariva come uno? E quanto, invece, rimane irriducibilmente diverso? La distinzione tra unità e molteplicità diventa così una questione di percezione, linguaggio e realtà.",
      source: "Vyrah",
      kind: "Ricerca",
      topic: "Cosmologie",
      importance: 11,
      featured: false,
    },

    {
      id: "dao",
      heading: "Dare un nome può orientare e allo stesso tempo limitare.",
      body:
        "Il Daoismo introduce una tensione fondamentale tra il Dao e la possibilità di nominarlo. Il nome permette di distinguere, ma ciò che viene nominato non esaurisce ciò che è: abbiamo bisogno di parole per pensare, ma nessuna parola coincide completamente con ciò che cerca di indicare. Il linguaggio non deve quindi essere eliminato, ma utilizzato con consapevolezza. Una parola può orientarci; diventa pericolosa quando dimentichiamo che resta uno strumento.",
      source: "Vyrah",
      kind: "Ricerca",
      topic: "Linguaggio",
      importance: 12,
      featured: false,
    },

    {
      id: "creazione-mito",
      heading: "La creazione può essere anche un processo di tentativi.",
      body:
        "Nel Popol Vuh la creazione appare come un processo iterativo: pensiero, parola, tentativo, osservazione del risultato e nuova formulazione. È una struttura narrativa diversa dalle cosmologie della creazione istantanea e perfetta. Non significa che il testo descriva un metodo sperimentale nel senso moderno. La sua struttura permette però una domanda interessante: se una forma non funziona, la creazione può consistere anche nel riconoscere il fallimento e tentare una nuova forma?",
      source: "Vyrah",
      kind: "Ricerca",
      topic: "Creazione",
      importance: 14,
      featured: false,
    },

    {
      id: "realtà-interpretazione-dottrina",
      heading: "Realtà, interpretazione, dottrina non sono la stessa cosa.",
      body:
        "Una distinzione diventata centrale nella ricerca Vyrah è quella tra ciò che esiste, il modo in cui lo interpretiamo e il sistema che costruiamo per trasmettere quella interpretazione. Possiamo chiamare questi tre livelli realtà, interpretazione e dottrina, sapendo che anche questa distinzione è una nostra formulazione. Una tradizione può contenere intuizioni profonde senza possedere necessariamente tutta la realtà. Una dottrina può conservare qualcosa di vero senza essere identica a ciò che descrive. E una nuova interpretazione può rendere visibile qualcosa che una formulazione precedente non riusciva più a mostrare.",
      source: "Vyrah",
      kind: "Riflessioni",
      topic: "Conoscenza",
      importance: 15,
      featured: false,
    },

    {
      id: "sofferenza-distinzioni",
      heading: "Quanto della nostra sofferenza nasce da ciò che abbiamo confuso?",
      body:
        "Una domanda emersa nello studio delle tradizioni zoroastriane riguarda il rapporto tra forze o principi che vengono mantenuti distinti. Da qui nasce una domanda più ampia, che non pretende di diventare una dottrina: quanto della nostra sofferenza nasce non da qualcosa di intrinsecamente sbagliato, ma dal fatto che abbiamo mescolato cose che avrebbero bisogno di essere distinte? Desiderio e bisogno, ciò che siamo e ciò che ci viene richiesto, esperienza e interpretazione, paura e intuizione, scelta e aspettativa. Distinguere non risolve automaticamente il problema, ma può permettere di vedere dove il problema si trova realmente.",
      source: "Vyrah",
      kind: "Domande",
      topic: "Distinzione",
      importance: 17,
      featured: false,
    },

    {
      id: "manifestazione",
      heading: "E se manifestare non significasse imporre un risultato?",
      body:
        "La riflessione sulla manifestazione ha portato a distinguere due possibilità. La prima consiste nell'immaginare che il desiderio possa imporre alla realtà un risultato preciso, nella forma e nel tempo stabiliti. La seconda considera invece la possibilità di chiedere ciò che serve per procedere: una comprensione, un incontro, un'informazione, una possibilità. In questo secondo caso non decidiamo in anticipo la forma che la risposta dovrà avere. Lasciamo che l'esperienza mostri ciò che arriva. La differenza è importante: non controllo della realtà, ma partecipazione consapevole a ciò che può prendere forma.",
      source: "Vyrah",
      kind: "Domande",
      topic: "Esperienza",
      importance: 18,
      featured: false,
    },

    {
      id: "de-costruire",
      heading: "Una ricerca che non sa de-costruirsi diventa una nuova credenza.",
      body:
        "Ogni volta che formuliamo una teoria rischiamo di confondere ciò che abbiamo osservato con ciò che abbiamo aggiunto. Per questo il processo Vyrah non termina con la formulazione. Dopo aver confrontato elementi diversi e costruito una possibile sintesi, bisogna tornare indietro: che cosa apparteneva realmente alla fonte? Che cosa abbiamo introdotto noi? Quale parte della spiegazione rimane se eliminiamo la nostra interpretazione? La de-costruzione non distrugge la ricerca. È ciò che impedisce alla ricerca di trasformarsi troppo presto in dottrina.",
      source: "Vyrah",
      kind: "Riflessioni",
      topic: "Ricerca",
      importance: 22,
      featured: false,
    },
  ]

  /* --------------------------------------------------
     LE VOSTRE RIFLESSIONI
     Spazio predisposto per contributi futuri.
  -------------------------------------------------- */

  const vostreRiflessioni: ArchiveEntry[] = []

  /* --------------------------------------------------
     SIMBOLI
  -------------------------------------------------- */

  const simboli: ArchiveEntry[] = [
    {
      id: "luce",
      heading: "La luce",
      body:
        "Nella Genesi compare prima della successiva distinzione e organizzazione del mondo. Come simbolo può essere osservata come possibilità di vedere, distinguere e rendere qualcosa riconoscibile. Non è necessario leggerla come il bene contrapposto al male: il suo interesse sta prima di tutto nel rapporto tra visibilità e conoscenza.",
      img: "",
      importance: 1,
      featured: true,
    },

    {
      id: "abisso",
      heading: "L'abisso",
      body:
        "L'abisso richiama una profondità nella quale le forme abituali non sono più sufficienti per orientarsi. Spesso è associato alle tenebre e alle acque; in altre cosmologie compaiono immagini analoghe di profondità originarie. L'abisso può quindi diventare il simbolo di ciò che precede la comprensione: non necessariamente qualcosa di negativo, ma qualcosa che non possiamo ancora vedere con chiarezza.",
      img: "",
      importance: 3,
      featured: true,
    },

    {
      id: "caos",
      heading: "Il caos",
      body:
        "Prima di significare semplicemente disordine, Chaos nella tradizione esiodea indica un'apertura, una voragine, una condizione originaria. Come simbolo può quindi essere interrogato al di là dell'uso moderno della parola. Ciò che chiamiamo caos è davvero disordine, oppure è qualcosa che non abbiamo ancora distinto abbastanza da poterlo comprendere? Il simbolo non dà una risposta: apre la domanda.",
      img: "",
      importance: 4,
      featured: true,
    },

    {
      id: "linea",
      heading: "La linea",
      body:
        "La linea rappresenta direzione, continuità e riferimento. Permette di comprendere l'allineamento non come immobilità, ma come relazione con un orientamento. Una linea può attraversare uno spazio complesso senza coincidere con ogni punto che attraversa. Allo stesso modo possiamo cambiare contesto, incontrare influenze e modificare il nostro percorso senza necessariamente perdere la direzione che riconosciamo come nostra.",
      img: "",
      importance: 7,
      featured: false,
    },

    {
      id: "specchio",
      heading: "Lo specchio",
      body:
        "Lo specchio non mostra semplicemente ciò che siamo. Restituisce un'immagine da una determinata posizione, attraverso una determinata superficie e secondo una determinata relazione con chi guarda. Uno strumento può restituire qualcosa che riconosciamo, ma ciò che vediamo deve comunque essere interrogato. Lo specchio apre una domanda; non decide quale interpretazione dobbiamo dare al riflesso.",
      img: "",
      importance: 10,
      featured: false,
    },

    {
      id: "mago",
      heading: "Il Mago",
      body:
        "Il Mago rappresenta l'inizio come possibilità concreta. Non soltanto il potere di fare, ma ciò che è già presente prima che una direzione venga scelta: strumenti, capacità, materia, attenzione. Il suo interesse sta nella domanda che pone: che cosa abbiamo già tra le mani e non stiamo ancora utilizzando? Prima di cercare qualcosa di nuovo, possiamo osservare ciò che è già disponibile.",
      img: "",
      importance: 11,
      featured: false,
    },

    {
      id: "eremita",
      heading: "L'Eremita",
      body:
        "L'Eremita rappresenta il tempo dell'osservazione. La sua ricerca non coincide con l'accumulo di risposte. La lanterna illumina uno spazio limitato: abbastanza per compiere il prossimo passo, non abbastanza per vedere l'intero percorso. È una buona immagine della ricerca quando accetta il proprio limite e non pretende di trasformare ciò che ancora non vede in una certezza.",
      img: "",
      importance: 12,
      featured: false,
    },

    {
      id: "innamorato",
      heading: "L'Innamorato",
      body:
        "L'Innamorato apre lo spazio della scelta prima che la direzione sia definitiva. Desideri, relazioni, influenze e possibilità entrano in tensione e rendono visibili le forze che partecipano alla decisione. Non interessa soltanto scegliere tra due possibilità, ma osservare che cosa sta realmente scegliendo dentro di noi: desiderio, paura, aspettativa, appartenenza o volontà?",
      img: "",
      importance: 13,
      featured: false,
    },

    {
      id: "appeso",
      heading: "L'Appeso",
      body:
        "L'Appeso rappresenta la sospensione come possibilità di cambiare prospettiva. Non necessariamente immobilità, ma il momento in cui la posizione abituale non permette più di vedere abbastanza e deve essere temporaneamente lasciata. L'Appeso è dunque il simbolo della possibilità di interrogare ciò che conosciamo da una posizione diversa prima di decidere che cosa significhi.",
      img: "",
      importance: 14,
      featured: false,
    },

    {
      id: "alba",
      heading: "L'alba",
      body:
        "L'alba è una soglia tra due condizioni che non sono ancora completamente separate. È utile per pensare alla distinzione senza separazione: notte e giorno non vengono cancellati l'uno dall'altro, ma attraversano una zona di trasformazione. Può rappresentare il cambiamento come processo, il momento in cui una forma nuova comincia a diventare visibile senza essere ancora completamente definita.",
      img: "",
      importance: 15,
      featured: false,
    },

    {
      id: "tramonto",
      heading: "Il tramonto",
      body:
        "Il tramonto è un'altra soglia, nella quale forme diverse convivono nello stesso spazio. È anche un'immagine di pareidolia: osservando una superficie composta da luce, colore e materia, la mente può riconoscere figure e significati. Il tramonto rappresenta quindi entrambe le possibilità della percezione: la capacità di trovare forme e la necessità di distinguere ciò che appartiene all'immagine da ciò che vi proiettiamo.",
      img: "",
      importance: 16,
      featured: false,
    },
  ]

  /* --------------------------------------------------
     TABS
  -------------------------------------------------- */

  const tabs = [
    {
      id: "etimologie" as Tab,
      label: "Etimologie",
    },
    {
      id: "dizionario" as Tab,
      label: "Vocabolario Vyrah",
    },
    {
      id: "riflessioni" as Tab,
      label: "Riflessioni",
    },
    {
      id: "simboli" as Tab,
      label: "Simboli",
    },
  ]

  /* --------------------------------------------------
     CONTENUTI INTRODUTTIVI
  -------------------------------------------------- */

  const introContent = {
    etimologie: {
      title: "Le parole cambiano. La loro storia rimane.",
      subtitle:
        "Ogni parola porta con sé un'origine, attraversa trasformazioni e arriva fino a noi con significati nuovi. Guardare questo percorso significa anche capire che cosa stiamo davvero dicendo quando scegliamo una parola.",
    },

    dizionario: {
      title: "Un linguaggio da costruire, una parola alla volta.",
      subtitle:
        "Qui le parole non vengono semplicemente definite. Vengono interrogate, collegate e riformulate attraverso la ricerca Vyrah.",
    },

    riflessioni: {
      title: "Pensieri, domande e ricerche che restano aperte.",
      subtitle:
        "L'Archivio raccoglie ciò che Vyrah formula nel corso della ricerca e, nel tempo, potrà accogliere anche le riflessioni di chi sceglierà di contribuire.",
    },

    simboli: {
      title: "Guardare attraverso un altro linguaggio.",
      subtitle:
        "Immagini, archetipi e forme che possono diventare strumenti di osservazione senza trasformarsi in risposte già stabilite.",
    },
  }

  /* --------------------------------------------------
     FUNZIONI
  -------------------------------------------------- */

  const getEntries = (): ArchiveEntry[] => {
    if (activeTab === "etimologie") return etimologie
    if (activeTab === "dizionario") return dizionario

    if (activeTab === "simboli") return simboli

    return reflectionSource === "Vyrah"
      ? riflessioni
      : vostreRiflessioni
  }

  const searchable =
    activeTab === "etimologie" ||
    activeTab === "dizionario" ||
    activeTab === "simboli"

  const toggleEntry = (id: string) => {
    setExpandedEntries((current) =>
      current.includes(id)
        ? current.filter((entryId) => entryId !== id)
        : [...current, id],
    )
  }

  const getVisibleEntries = (): ArchiveEntry[] => {
    const entries = getEntries()

    /* Vista iniziale */

    if (!showAll) {
      if (activeTab === "riflessioni") {
        return entries
          .filter((entry) => entry.featured !== false)
          .slice(0, 4)
      }

      return entries
        .filter((entry) => entry.featured)
        .sort(
          (a, b) =>
            (a.importance ?? 999) -
            (b.importance ?? 999),
        )
        .slice(0, 4)
    }

    let filtered = [...entries]

    /* Ricerca */

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()

      filtered = filtered.filter(
        (entry) =>
          entry.heading.toLowerCase().includes(term) ||
          entry.body.toLowerCase().includes(term) ||
          (entry.origin &&
            entry.origin.toLowerCase().includes(term)) ||
          (entry.topic &&
            entry.topic.toLowerCase().includes(term)),
      )
    }

    /* Filtro tipo riflessione */

    if (
      activeTab === "riflessioni" &&
      reflectionKind !== "Tutte"
    ) {
      filtered = filtered.filter(
        (entry) => entry.kind === reflectionKind,
      )
    }

    /* Ordinamento */

    if (searchable && sortMode === "alphabetical") {
      filtered.sort((a, b) =>
        a.heading.localeCompare(b.heading, "it", {
          sensitivity: "base",
        }),
      )
    } else if (searchable) {
      filtered.sort(
        (a, b) =>
          (a.importance ?? 999) -
          (b.importance ?? 999),
      )
    }

    return filtered
  }

  const visibleEntries = getVisibleEntries()

  const reflectionKinds: ReflectionKind[] = [
    "Tutte",
    "Riflessioni",
    "Domande",
    "Ricerca",
  ]

  /* --------------------------------------------------
     RENDER
  -------------------------------------------------- */

  return (
    <div
      style={{
        background: "#0B0908",
        color: "#E8DDCA",
      }}
    >
      {/* ================================================
          HERO
      ================================================= */}

      <section
        className="pt-40 pb-20"
        style={{
          background: "#0B0908",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-8">
            Conoscenza
          </p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{
              color: "#E8DDCA",
            }}
          >
            Parole, simboli{" "}
            <span style={{ color: "#B4975A" }}>
              e domande
            </span>
            .
          </h1>

          <p
            className="font-cormorant text-xl italic"
            style={{
              color: "#E8DDCA88",
            }}
          >
            <GoldSeparator />

            Le parole sono evocative.
            Le domande cambiano con noi.
            <br />
            L'Archivio raccoglie ciò che vale la pena
            continuare a interrogare.
          </p>
        </div>
      </section>

      {/* ================================================
          TABS
      ================================================= */}

      <section
        className="border-y"
        style={{
          borderColor: "#B4975A22",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 py-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setShowAll(false)
                  setSearchTerm("")
                  setSortMode("importance")
                  setReflectionSource("Vyrah")
                  setReflectionKind("Tutte")
                  setExpandedEntries([])
                }}
                className="font-cinzel text-xs tracking-[0.16em] uppercase transition-colors duration-300"
                style={{
                  color:
                    activeTab === tab.id
                      ? "#D0B875"
                      : "#E8DDCA66",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          INTRO
      ================================================= */}

      <section className="pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="font-cinzel text-[10px] tracking-[0.18em] uppercase mb-5"
            style={{
              color: "#B4975A",
            }}
          >
            {activeTab === "etimologie" &&
              "Etimologie"}

            {activeTab === "dizionario" &&
              "Vocabolario Vyrah"}

            {activeTab === "riflessioni" &&
              "Riflessioni"}

            {activeTab === "simboli" &&
              "Simboli"}
          </p>

          <h2
            className="font-cormorant text-2xl md:text-3xl mb-4"
            style={{
              color: "#E8DDCA",
            }}
          >
            {introContent[activeTab].title}
          </h2>

          <p
            className="font-cormorant text-lg italic leading-[1.7] max-w-2xl mx-auto"
            style={{
              color: "#E8DDCA77",
            }}
          >
            {introContent[activeTab].subtitle}
          </p>
        </div>
      </section>

      {/* ================================================
          CONTROLLI RIFLESSIONI
      ================================================= */}

      {activeTab === "riflessioni" && (
        <section className="pb-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col items-center gap-6">

              {/* Fonte */}

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                <button
                  onClick={() => {
                    setReflectionSource("Vyrah")
                    setReflectionKind("Tutte")
                    setShowAll(false)
                    setExpandedEntries([])
                  }}
                  className="font-cinzel text-[10px] tracking-[0.14em] uppercase transition-colors"
                  style={{
                    color:
                      reflectionSource === "Vyrah"
                        ? "#D0B875"
                        : "#E8DDCA66",
                  }}
                >
                  Vyrah
                </button>

                <button
                  onClick={() => {
                    setReflectionSource(
                      "Le vostre riflessioni",
                    )
                    setReflectionKind("Tutte")
                    setShowAll(false)
                    setExpandedEntries([])
                  }}
                  className="font-cinzel text-[10px] tracking-[0.14em] uppercase transition-colors"
                  style={{
                    color:
                      reflectionSource ===
                      "Le vostre riflessioni"
                        ? "#D0B875"
                        : "#E8DDCA66",
                  }}
                >
                  Le vostre riflessioni
                </button>
              </div>

              {/* Tipo */}

              {reflectionSource === "Vyrah" && showAll && (
                <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
                  {reflectionKinds.map((kind) => (
                    <button
                      key={kind}
                      onClick={() =>
                        setReflectionKind(kind)
                      }
                      className="font-cinzel text-[9px] tracking-[0.14em] uppercase transition-colors"
                      style={{
                        color:
                          reflectionKind === kind
                            ? "#B4975A"
                            : "#E8DDCA55",
                      }}
                    >
                      {kind}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================================================
          RICERCA + ORDINAMENTO
      ================================================= */}

      {showAll && searchable && (
        <section className="pb-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

              <div className="flex-1">
                <label
                  htmlFor="archive-search"
                  className="font-cinzel text-[10px] tracking-[0.16em] uppercase block mb-3"
                  style={{
                    color: "#B4975A",
                  }}
                >
                  Cerca
                </label>

                <input
                  id="archive-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder={
                    activeTab === "simboli"
                      ? "Cerca un simbolo..."
                      : "Cerca una parola..."
                  }
                  className="w-full bg-transparent border-0 border-b px-0 py-3 outline-none font-cormorant text-lg"
                  style={{
                    color: "#E8DDCA",
                    borderColor: "#B4975A44",
                  }}
                />
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={() =>
                    setSortMode("importance")
                  }
                  className="font-cinzel text-[10px] tracking-[0.14em] uppercase transition-colors"
                  style={{
                    color:
                      sortMode === "importance"
                        ? "#D0B875"
                        : "#E8DDCA66",
                  }}
                >
                  Percorso Vyrah
                </button>

                <button
                  onClick={() =>
                    setSortMode("alphabetical")
                  }
                  className="font-cinzel text-[10px] tracking-[0.14em] uppercase transition-colors"
                  style={{
                    color:
                      sortMode === "alphabetical"
                        ? "#D0B875"
                        : "#E8DDCA66",
                  }}
                >
                  A–Z
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================
          MESSAGGIO VOSTRE RIFLESSIONI
      ================================================= */}

      {activeTab === "riflessioni" &&
        reflectionSource ===
          "Le vostre riflessioni" &&
        visibleEntries.length === 0 && (
          <section className="pb-16">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <div
                className="py-16 border-y"
                style={{
                  borderColor: "#B4975A22",
                }}
              >
                <p
                  className="font-cinzel text-[10px] tracking-[0.18em] uppercase mb-5"
                  style={{
                    color: "#B4975A",
                  }}
                >
                  In costruzione
                </p>

                <p
                  className="font-cormorant text-2xl italic leading-[1.6]"
                  style={{
                    color: "#E8DDCA",
                  }}
                >
                  Alcune riflessioni potrebbero
                  diventare parte dell'Archivio.
                </p>

                <p
                  className="font-cormorant text-lg leading-[1.8] mt-5"
                  style={{
                    color: "#E8DDCA77",
                  }}
                >
                  Questa sezione raccoglierà pensieri,
                  intuizioni e domande condivise da chi
                  sceglierà di contribuire alla ricerca.
                </p>
              </div>
            </div>
          </section>
        )}

      {/* ================================================
          ELENCO
      ================================================= */}

      {visibleEntries.length > 0 && (
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="border-t"
              style={{
                borderColor: "#B4975A22",
              }}
            >
              {visibleEntries.map((entry) => {
                const isExpanded =
                  expandedEntries.includes(entry.id)

                /*
                  Mostra "Mostra di più" solo quando il testo
                  supera una lunghezza che normalmente eccede
                  l'area iniziale di lettura.

                  Non usiamo misurazioni DOM dinamiche per
                  mantenere il componente semplice e stabile.
                */
                const needsExpansion =
                  entry.body.length > 420

                return (
                  <article
                    key={entry.id}
                    className="py-10 border-b"
                    style={{
                      borderColor: "#B4975A22",
                    }}
                  >
                    <div>

                      {/* IMMAGINE */}

                      {entry.img && (
                        <div className="mb-7">
                          <img
                            src={entry.img}
                            alt={entry.heading}
                            className="w-full max-h-[420px] object-cover"
                          />
                        </div>
                      )}

                      {/* TITOLO */}

                      <h3
                        className="font-cormorant text-2xl md:text-3xl mb-5"
                        style={{
                          color: "#E8DDCA",
                        }}
                      >
                        {entry.heading}
                      </h3>

                      {/* ORIGINE ETIMOLOGICA */}

                      {activeTab === "etimologie" &&
                        entry.origin && (
                          <div className="flex items-baseline gap-3 flex-wrap mb-6">
                            <span
                              className="font-cinzel text-[9px] tracking-[0.18em] uppercase"
                              style={{
                                color: "#B4975A",
                              }}
                            >
                              Origine
                            </span>

                            <span
                              className="font-cormorant text-base italic"
                              style={{
                                color: "#E8DDCA77",
                              }}
                            >
                              {entry.origin}
                            </span>
                          </div>
                        )}

                      {/* METADATI */}

                      {activeTab === "riflessioni" &&
                        (entry.source ||
                          entry.kind ||
                          entry.topic) && (
                          <div className="flex flex-wrap items-center gap-4 mb-5">

                            {entry.source && (
                              <span
                                className="font-cinzel text-[9px] tracking-[0.14em] uppercase"
                                style={{
                                  color: "#B4975A",
                                }}
                              >
                                {entry.source}
                              </span>
                            )}

                            {entry.kind && (
                              <span
                                className="font-cinzel text-[9px] tracking-[0.14em] uppercase"
                                style={{
                                  color: "#E8DDCA55",
                                }}
                              >
                                {entry.kind}
                              </span>
                            )}

                            {entry.topic && (
                              <span
                                className="font-cormorant text-sm italic"
                                style={{
                                  color: "#E8DDCA55",
                                }}
                              >
                                {entry.topic}
                              </span>
                            )}

                            {entry.date && (
                              <span
                                className="font-cormorant text-sm italic"
                                style={{
                                  color: "#E8DDCA44",
                                }}
                              >
                                {entry.date}
                              </span>
                            )}
                          </div>
                        )}

                      {/* TESTO */}

                      <div className="relative">
                        <div
                          className={`font-cormorant text-lg leading-[1.8] overflow-hidden transition-all duration-500 ${
                            needsExpansion && !isExpanded
                              ? "max-h-[112px]"
                              : "max-h-[1600px]"
                          }`}
                          style={{
                            color: "#E8DDCAAA",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {entry.body}
                        </div>

                        {needsExpansion && !isExpanded && (
                          <div
                            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(11,9,8,0), #0B0908)",
                            }}
                          />
                        )}
                      </div>

                      {/* MOSTRA DI PIÙ */}

                      {needsExpansion && (
                        <button
                          onClick={() =>
                            toggleEntry(entry.id)
                          }
                          className="mt-5 font-cinzel text-[10px] tracking-[0.16em] uppercase transition-colors"
                          style={{
                            color: "#B4975A",
                          }}
                        >
                          {isExpanded
                            ? "Mostra di meno"
                            : "Mostra di più"}
                        </button>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>

            {/* ============================================
                VEDI TUTTE
            ============================================ */}

            {!showAll &&
              getEntries().length > 4 && (
                <div className="text-center pt-12">
                  <button
                    onClick={() => {
                      setShowAll(true)
                      setExpandedEntries([])
                    }}
                    className="font-cinzel text-xs tracking-[0.16em] uppercase transition-colors"
                    style={{
                      color: "#D0B875",
                    }}
                  >
                    Vedi tutte
                  </button>
                </div>
              )}

            {/* ============================================
                MOSTRA MENO
            ============================================ */}

            {showAll && (
              <div className="text-center pt-12">
                <button
                  onClick={() => {
                    setShowAll(false)
                    setSearchTerm("")
                    setReflectionKind("Tutte")
                    setExpandedEntries([])
                  }}
                  className="font-cinzel text-xs tracking-[0.16em] uppercase transition-colors"
                  style={{
                    color: "#B4975A99",
                  }}
                >
                  Mostra meno
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================================================
          CHIUSURA
      ================================================= */}

      <section
        className="py-24 border-t"
        style={{
          background:
            "linear-gradient(120deg, #2E0D11 0%, #3A1216 40%, #220B0E 80%, #0B0908 110%)",
          borderColor: "#B4975A22",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="font-cormorant text-2xl md:text-3xl italic"
            style={{
              color: "#E8DDCA",
            }}
          >
            La conoscenza non chiude una domanda.
            <br />
            A volte la rende più precisa.
          </p>

          <div className="mt-8">
            <GoldSeparator />
          </div>
        </div>
      </section>
    </div>
  )
}
// ─── Page: NEGOZIO ────────────────────────────────────────────────────────────
function PageNegozio({ navigate }: { navigate: (p: Page) => void }) {
  const categories = [
    { id: "tutti", label: "Tutti" },
    { id: "radiestetici", label: "Strumenti Radiestetici" },
    { id: "artigianali", label: "Creazioni Artigianali" },
    { id: "corsi", label: "Corsi & E-Book" },
    { id: "percorso", label: "Strumenti per il Percorso" },
  ]

  const [activeCategory, setActiveCategory] = useState("tutti")

 const products = [
  {
    category: "radiestetici",
    title: "Pendolo in legno di faggio",
    status: "IN PREPARAZIONE",
    desc: "Fatto a mano. Legno naturale di faggio, catena color ottone anticato.",
    price: "?",
    img: IMG.negozio,
  },
  {
    category: "radiestetici",
    title: "Bacchette da rabdomante",
    status: "IN PREPARAZIONE",
    desc: "Fatto a mano. Acciaio ramato lavorato artigianalmente.",
    price: "?",
    img: IMG.negozio,
  },
  {
    category: "artigianali",
    title: "Diario dei sogni",
    status: "IN PREPARAZIONE",
    desc: "Quaderno artigianale in carta riciclata. Per annotare sogni, visioni, domande e riflessioni.",
    price: "?",
    img: IMG.negozio,
  },
  {
    category: "corsi",
    title: "E-Book: Intuere",
    status: "IN PREPARAZIONE",
    desc: "Un libro per imparare a guardare ciò che accade dentro di noi, attraverso il linguaggio del simbolo.",
    price: "?",
    img: IMG.negozio,
  },
  {
    category: "percorso",
    title: "Kit di Benvenuto Vyrah",
    status: "IN PREPARAZIONE",
    desc: "Pendolo, quaderno, mappa simbolica e guida all'inizio del percorso.",
    price: "?",
    img: IMG.negozio,
  },
  {
    category: "percorso",
    title: "Vyrah Tarot",
    status: "IN PREPARAZIONE",
    desc: "Mazzo di carte simboliche pensato per osservare ciò che viviamo attraverso immagini, archetipi e relazioni.",
    price: "?", 
    img: IMG.negozio,
  },
  {
    category: "artigianali",
    title: "Opere di pareidolia",
    status: "IN PREPARAZIONE",
    desc: "Dipinti originali realizzati a mano su legno, nati dall'incontro tra una traccia elettrica e l'immaginazione. Ogni opera interpreta forme e figure emerse dalla materia, rendendo ogni pezzo irripetibile.",
    price: "?",
    img: IMG.negozio,
  },
  {
    category: "corsi",
    title: "Corso Online: Numerologia",
    status: "IN PREPARAZIONE",
    desc: "Lezioni video per esplorare il linguaggio simbolico dei numeri.",
    price: "?",
    img: IMG.negozio,
  },
];

  const filtered =
    activeCategory === "tutti"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-20" style={{ background: "#0B0908" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-8 text-center">Il Negozio Vyrah</p>
          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{ color: "#E8DDCA" }}
          >
            Oggetti per il <span style={{ color: "#B4975A" }}>percorso</span>.
          </h1>
           <GoldSeparator />
          <p
            className="font-cormorant text-xl italic"
            style={{ color: "#E8DDCA88" }}
          >
            Strumenti, creazioni artigianali e risorse per esplorare, osservare e conoscersi.
            Ogni oggetto nasce dalla ricerca e dalla visione di Vyrah.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ background: "#0B0908" }} className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex flex-wrap gap-1 justify-center"
            style={{ borderBottom: "1px solid rgba(180,151,90,0.15)" }}
          >
            {categories.map((c) => (
              <button
                key={c.id}
                className={`tab-btn ${activeCategory === c.id ? "active" : ""}`}
                onClick={() => setActiveCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ background: "#0B0908" }} className="py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {filtered.map((p) => (
              <div
                key={p.title}
                className="group"
                style={{
                  background: "#15100D",
                  border: "1px solid rgba(180,151,90,0.08)",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(180,151,90,0.3)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(180,151,90,0.08)")
                }
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: "260px" }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.65) sepia(0.35)" }}
                  />
                </div>
                <div className="p-8">
                  <h3
                    className="font-cinzel text-sm mb-3"
                    style={{ color: "#E8DDCA", letterSpacing: "0.1em" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-cormorant text-base mb-6"
                    style={{ color: "#E8DDCA66", lineHeight: 1.5 }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-cinzel text-base"
                      style={{ color: "#B4975A" }}
                    >
                      {p.price}
                    </span>
                    <button
                      className="cta-primary"
                      style={{ padding: "8px 16px", fontSize: "0.6rem" }}
                      onClick={() => navigate("contatti")}
                    >
                      Acquista
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Page: TESTIMONIANZE ──────────────────────────────────────────────────────
function PageTestimonianze() {
  const stories = [
    {
      text: "Non mi ha detto cosa fare. Mi ha aiutata a capire cosa volevo davvero. È una differenza enorme.",
      anon: true,
      when: "Lettura individuale, 2024",
    },
    {
      text: "Ho iniziato il percorso con mille dubbi — sul metodo, su di me, su cosa sarebbe successo. Quello che non mi aspettavo era la semplicità. Non c'è niente di strano, di mistico nel senso comune del termine. C'è solo un ascolto molto preciso.",
      anon: false,
      name: "F.",
      when: "Percorso individuale, 2023",
    },
    {
      text: "Avevo paura di trovare una persona che mi dicesse quello che volevo sentire. Invece ho trovato qualcuno che mi ha fatto le domande scomode — quelle a cui non avevo risposta. E lì è cominciato tutto.",
      anon: false,
      name: "M.C.",
      when: "Lettura individuale, 2024",
    },
    {
      text: "Il tarot per me era qualcosa di lontano, quasi sospetto. Poi ho capito che non si tratta di credere o non credere. Si tratta di usarlo come linguaggio. E il linguaggio aiuta a pensare.",
      anon: true,
      when: "Corso di tarologia, 2023",
    },
    {
      text: "Dopo il percorso non ho cambiato tutto. Non ho lasciato il lavoro, non ho fatto grandi gesti. Ho solo cominciato a capire meglio da dove venivano certe scelte. E questo ha cambiato tutto lo stesso.",
      anon: false,
      name: "L.",
      when: "Percorso individuale, 2024",
    },
    {
      text: "Quello che mi rimane è una frase: 'Nessuno può dirti chi sei. Ma posso aiutarti ad ascoltarlo.' Non sapevo quanto ne avevo bisogno.",
      anon: true,
      when: "Evento, 2023",
    },
  ]

  return (
    <div>
      {/* HERO */}
      <section
        className="pt-40 pb-20"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-8">
            Esperienze reali
          </p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{ color: "#E8DDCA" }}
          >
            Parole di chi{" "}
            <span style={{ color: "#B4975A" }}>
              ha vissuto
            </span>{" "}
            Vyrah.
          </h1>

          <GoldSeparator />

          <p
            className="font-cormorant text-xl italic"
            style={{ color: "#E8DDCA88" }}
          >
            Le parole di chi ha scelto di condividere ciò che
            ha vissuto.
          </p>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section
        style={{ background: "#0B0908" }}
        className="pb-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {stories.map((s, i) => (
              <div
                key={i}
                className="p-10"
                style={{
                  background:
                    i % 3 === 0
                      ? "#421B2020"
                      : "#15100D",
                  border:
                    "1px solid rgba(180,151,90,0.1)",
                }}
              >
                <div className="mb-6">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                  >
                    <path
                      d="M0 18V10.5C0 4.5 3.75 1.5 11.25 0L12 2.25C8.25 3 6 4.875 5.25 7.5H9V18H0ZM12.75 18V10.5C12.75 4.5 16.5 1.5 24 0L24.75 2.25C21 3 18.75 4.875 18 7.5H21.75V18H12.75Z"
                      fill="#B4975A"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                <blockquote
                  className="font-cormorant text-xl italic mb-6"
                  style={{
                    color: "#E8DDCA",
                    lineHeight: 1.7,
                  }}
                >
                  "{s.text}"
                </blockquote>

                <div className="gold-line mb-4" />

                <p
                  className="font-cinzel text-xs tracking-[0.15em]"
                  style={{ color: "#B4975A88" }}
                >
                  {s.anon ? "Anonimo" : s.name} — {s.when}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDIVIDI LA TUA ESPERIENZA */}
      <section
        className="py-28"
        style={{
          background:
    "linear-gradient(120deg, #2E0D11 0%, #3A1216 40%, #220B0E 80%, #0B0908 110%)",
      borderTop: "1px solid rgba(180,151,90,0.15)",
          borderBottom: "1px solid rgba(180,151,90,0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-7">
            La tua esperienza
          </p>

          <h2
            className="display-heading text-3xl md:text-4xl mb-7"
            style={{ color: "#E8DDCA" }}
          >
            Hai vissuto un'esperienza{" "}
            <span style={{ color: "#D0B875" }}>
              Vyrah?
            </span>
          </h2>

          <p
            className="font-cormorant text-xl mb-10"
            style={{
              color: "#E8DDCAAA",
              lineHeight: 1.8,
            }}
          >
            Se vuoi, puoi raccontare ciò che hai portato
            via da un incontro, da un percorso o da
            un'esperienza con Vyrah.
          </p>

          <button
            type="button"
            className="cta-primary"
            onClick={() => {
              document
                .getElementById("lascia-testimonianza")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }}
          >
            Condividi la tua esperienza
          </button>
        </div>
      </section>

      {/* MODULO */}
      <section
        id="lascia-testimonianza"
        className="py-28"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-6">
              Lascia la tua testimonianza
            </p>

            <h2
              className="display-heading text-3xl md:text-4xl mb-6"
              style={{ color: "#E8DDCA" }}
            >
              Raccontalo con{" "}
              <span style={{ color: "#B4975A" }}>
                le tue parole.
              </span>
            </h2>

            <p
              className="font-cormorant text-lg"
              style={{
                color: "#E8DDCA88",
                lineHeight: 1.8,
              }}
            >
              Non cerchiamo recensioni perfette. Ci interessa
              ciò che hai realmente vissuto.
            </p>
          </div>

          <form
            className="space-y-7"
            onSubmit={(e) => {
              e.preventDefault()
              alert(
                "Grazie per aver condiviso la tua esperienza."
              )
            }}
          >
            {/* NOME */}
            <div>
              <label
                htmlFor="testimonianza-nome"
                className="block font-cinzel text-xs tracking-[0.14em] uppercase mb-3"
                style={{ color: "#B4975A" }}
              >
                Come vuoi essere indicata/o?
              </label>

              <input
                id="testimonianza-nome"
                type="text"
                placeholder="Nome o iniziali"
                className="w-full px-5 py-4 font-cormorant text-lg outline-none"
                style={{
                  background: "#15100D",
                  color: "#E8DDCA",
                  border:
                    "1px solid rgba(180,151,90,0.2)",
                }}
              />
            </div>

            {/* ESPERIENZA */}
            <div>
              <label
                htmlFor="testimonianza-esperienza"
                className="block font-cinzel text-xs tracking-[0.14em] uppercase mb-3"
                style={{ color: "#B4975A" }}
              >
                Che esperienza hai vissuto?
              </label>

              <select
                id="testimonianza-esperienza"
                className="w-full px-5 py-4 font-cormorant text-lg outline-none appearance-none"
                defaultValue=""
                style={{
                  background: "#15100D",
                  color: "#E8DDCA",
                  border:
                    "1px solid rgba(180,151,90,0.2)",
                }}
              >
                <option
                  value=""
                  disabled
                  style={{
                    background: "#15100D",
                  }}
                >
                  Seleziona
                </option>

                <option
                  value="lettura"
                  style={{
                    background: "#15100D",
                  }}
                >
                  Lettura individuale
                </option>

                <option
                  value="percorso"
                  style={{
                    background: "#15100D",
                  }}
                >
                  Percorso individuale
                </option>

                <option
                  value="corso"
                  style={{
                    background: "#15100D",
                  }}
                >
                  Corso
                </option>

                <option
                  value="evento"
                  style={{
                    background: "#15100D",
                  }}
                >
                  Evento
                </option>
                <option
                  value="lettura"
                  style={{
                    background: "#15100D",
                  }}
                >
                  Altro
                </option>
              </select>
            </div>

            {/* TESTIMONIANZA */}
            <div>
              <label
                htmlFor="testimonianza-testo"
                className="block font-cinzel text-xs tracking-[0.14em] uppercase mb-3"
                style={{ color: "#B4975A" }}
              >
                La tua esperienza
              </label>

              <textarea
                id="testimonianza-testo"
                rows={7}
                placeholder="Scrivi ciò che vuoi condividere..."
                className="w-full px-5 py-4 font-cormorant text-lg outline-none resize-y"
                style={{
                  background: "#15100D",
                  color: "#E8DDCA",
                  border:
                    "1px solid rgba(180,151,90,0.2)",
                  lineHeight: 1.7,
                }}
              />
            </div>

            {/* PRIVACY */}
            <div className="flex items-start gap-3">
              <input
                id="testimonianza-anonima"
                type="checkbox"
                className="mt-1"
              />

              <label
                htmlFor="testimonianza-anonima"
                className="font-cormorant text-base"
                style={{
                  color: "#E8DDCA88",
                  lineHeight: 1.6,
                }}
              >
                Preferisco che la mia testimonianza venga
                pubblicata come anonima.
              </label>
            </div>

            {/* INVIO */}
            <div className="pt-3 text-center">
              <button
                type="submit"
                className="cta-primary"
              >
                Invia la tua esperienza
              </button>

              <p
                className="font-cormorant text-sm italic mt-5"
                style={{ color: "#E8DDCA66" }}
              >
                Le testimonianze vengono lette prima della
                pubblicazione.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

// ─── Page: VOCI ──────────────────────────────────────────────────────────
function PageVoci({ navigate }: { navigate: (p: Page) => void }) {
  const [type, setType] = useState<
    "domanda" | "riflessione" | "esperienza"
  >("domanda")

  const [content, setContent] = useState("")
  const [nameMode, setNameMode] = useState<
    "nome" | "iniziali" | "anonimo"
  >("anonimo")

  const [name, setName] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const canSubmit =
    content.trim().length > 0 &&
    (nameMode === "anonimo" || name.trim().length > 0)

  const handleSubmit = () => {
    if (!canSubmit) return

    /*
     * Per ora questa funzione gestisce la conferma a livello di interfaccia.
     * Il collegamento a un sistema reale di raccolta dei contributi
     * potrà essere aggiunto successivamente.
     */
    setSubmitted(true)
  }

  const resetForm = () => {
    setType("domanda")
    setContent("")
    setNameMode("anonimo")
    setName("")
    setConsent(false)
    setSubmitted(false)
  }

  return (
    <div style={{ background: "#0B0908" }}>
      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section
        className="pt-40 pb-16 relative overflow-hidden"
        style={{ background: "#0B0908" }}
      >
        {/* Luce molto discreta */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(180,151,90,0.075) 0%, rgba(11,9,8,0) 42%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-5 mb-10">
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(180,151,90,0.22))",
              }}
            />

            <p
              className="font-cinzel text-[10px] tracking-[0.28em]"
              style={{ color: "#B4975A" }}
            >
              VOCI
            </p>

            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(180,151,90,0.22))",
              }}
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="display-heading text-4xl md:text-6xl leading-tight"
              style={{ color: "#E8DDCA" }}
            >
              Questo spazio è{" "}
              <span style={{ color: "#D0B875" }}>tuo</span>
            </h1>

            <GoldSeparator />

<p
  className="font-cormorant text-xl md:text-2xl italic"
  style={{
    color: "#E8DDCA88",
    lineHeight: 1.65,
  }}
>
  Una domanda, una riflessione, un'esperienza.
  <br />
  Puoi lasciare qui ciò che vuoi.
</p>

<p
  className="font-cormorant text-sm md:text-base mt-5"
  style={{
    color: "#E8DDCA55",
    lineHeight: 1.6,
  }}
>
  Voci è uno spazio in costruzione. La raccolta delle riflessioni
  sarà attivata prossimamente.
</p>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FORM
      ───────────────────────────────────────── */}

      <section
        className="pb-32"
        style={{
          background:
            "linear-gradient(to bottom, #0B0908 0%, #0E0B09 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {!submitted ? (
            <div
              className="relative"
              style={{
                background:
                  "linear-gradient(145deg, #17110E 0%, #15100D 55%, #120E0C 100%)",
                border: "1px solid rgba(180,151,90,0.16)",
              }}
            >
              {/* Segno editoriale */}
              <div
                className="absolute top-0 left-0 w-24 h-px"
                style={{
                  background:
                    "linear-gradient(to right, #B4975A, transparent)",
                }}
              />

              <div className="p-7 md:p-12 lg:p-16">
                {/* ─────────────────────────────
                    TIPO
                ───────────────────────────── */}

                <div className="mb-12">
                  <p className="section-label mb-5">Voglio lasciare una...</p>

                  <div className="grid grid-cols-3 gap-px">
                    {[
                      {
                        id: "domanda" as const,
                        label: "Domanda",
                      },
                      {
                        id: "riflessione" as const,
                        label: "Riflessione",
                      },
                      {
                        id: "esperienza" as const,
                        label: "Esperienza",
                      },
                    ].map((item) => {
                      const active = type === item.id

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setType(item.id)}
                          className="py-5 px-3 transition-all duration-300"
                          style={{
                            background: active
                              ? "rgba(180,151,90,0.11)"
                              : "rgba(11,9,8,0.38)",
                            border: active
                              ? "1px solid rgba(180,151,90,0.42)"
                              : "1px solid rgba(180,151,90,0.08)",
                            color: active ? "#D0B875" : "#E8DDCA77",
                          }}
                        >
                          <span className="font-cinzel text-[10px] md:text-xs tracking-[0.12em]">
                            {item.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* ─────────────────────────────
                    TESTO
                ───────────────────────────── */}

                <div className="mb-12">
                  <div className="flex items-end justify-between gap-4 mb-5">
                    <label
                      htmlFor="voci-content"
                      className="font-cinzel text-xs tracking-[0.15em]"
                      style={{ color: "#D0B875" }}
                    >
                      {type === "domanda"
                        ? "La tua domanda"
                        : type === "riflessione"
                          ? "La tua riflessione"
                          : "La tua esperienza"}
                    </label>

                    <span
                      className="font-cormorant text-sm italic"
                      style={{ color: "#E8DDCA44" }}
                    >
                      Non servono le parole giuste.
                    </span>
                  </div>

                  <textarea
                    id="voci-content"
                    rows={8}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={
                      type === "domanda"
                        ? "Che cosa ti stai chiedendo?"
                        : type === "riflessione"
                          ? "Che cosa vuoi condividere?"
                          : "Che cosa hai vissuto?"
                    }
                    className="w-full resize-none font-cormorant text-xl leading-relaxed outline-none transition-all duration-300"
                    style={{
                      background: "rgba(11,9,8,0.55)",
                      border: "1px solid rgba(180,151,90,0.13)",
                      color: "#E8DDCA",
                      padding: "24px",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(180,151,90,0.38)"
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(180,151,90,0.13)"
                    }}
                  />
                </div>

                {/* ─────────────────────────────
                    FIRMA
                ───────────────────────────── */}

                <div className="mb-12">
                  <p className="section-label mb-5">Vorrei firmarla come</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      {
                        id: "nome" as const,
                        label: "Nome",
                      },
                      {
                        id: "iniziali" as const,
                        label: "Iniziali",
                      },
                      {
                        id: "anonimo" as const,
                        label: "Anonimo",
                      },
                    ].map((item) => {
                      const active = nameMode === item.id

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setNameMode(item.id)}
                          className="px-5 py-3 transition-all duration-300"
                          style={{
                            background: active
                              ? "rgba(180,151,90,0.10)"
                              : "transparent",
                            border: active
                              ? "1px solid rgba(180,151,90,0.38)"
                              : "1px solid rgba(232,221,202,0.12)",
                            color: active ? "#D0B875" : "#E8DDCA66",
                          }}
                        >
                          <span className="font-cormorant text-lg">
                            {item.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {nameMode !== "anonimo" && (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={
                        nameMode === "nome"
                          ? "Il tuo nome"
                          : "Le tue iniziali"
                      }
                      className="form-input w-full"
                    />
                  )}
                </div>

                {/* ─────────────────────────────
                    ASCOLTO / PUBBLICAZIONE
                ───────────────────────────── */}

                <div
                  className="mb-10 p-5 md:p-6"
                  style={{
                    background: "rgba(11,9,8,0.34)",
                    borderLeft: "1px solid rgba(180,151,90,0.28)",
                  }}
                >
                  <p
                    className="font-cormorant text-lg leading-relaxed mb-5"
                    style={{ color: "#E8DDCA88" }}
                  >
                    Non tutte le domande chiedono una risposta.
                    <br />
                    <span style={{ color: "#E8DDCAB8" }}>
                      Ogni domanda merita di essere ascoltata.
                    </span>
                  </p>

                  <p
                    className="font-cormorant text-base leading-relaxed mb-5"
                    style={{ color: "#E8DDCA66" }}
                  >
                    Ciò che condividi può entrare nella ricerca di Vyrah
                    oppure rimanere semplicemente qualcosa che hai scelto di
                    affidare a questo spazio.
                  </p>
 <p
                    className="font-cormorant text-sm leading-relaxed mb-6"
                    style={{ color: "#E8DDCA55" }}
                  > Puoi esprimerti liberamente, senza formule prestabilite. Ogni parola ha un peso: sincerità e dissenso non richiedono volgarità, insulti o violenza verbale. Le condivisioni che non rispettano questa attenzione potranno non essere pubblicate.
                  </p>

                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 accent-[#B4975A]"
                    />

                    <span
                      className="font-cormorant text-base leading-relaxed"
                      style={{ color: "#E8DDCA77" }}
                    >
                      Acconsento all'eventuale pubblicazione di ciò che ho
                      scritto nell'Archivio di Vyrah.
                    </span>
                  </label>
                </div>

                {/* ─────────────────────────────
                    INVIO
                ───────────────────────────── */}

                <div className="flex justify-end">
  <button
    type="button"
    className="cta-primary"
    disabled
    style={{
      opacity: 0.45,
      cursor: "not-allowed",
    }}
  >
    Presto potrai lasciare la tua voce
  </button>
</div>
              </div>
            </div>
          ) : (
            /* ─────────────────────────────────
               CONFERMA
            ───────────────────────────────── */

            <div
              className="relative text-center p-10 md:p-16 lg:p-20"
              style={{
                background:
                  "linear-gradient(145deg, #17110E 0%, #15100D 60%, #201116 100%)",
                border: "1px solid rgba(180,151,90,0.22)",
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #B4975A, transparent)",
                }}
              />

              <p className="section-label mb-8">Ricevuto</p>

              <h2
                className="display-heading text-3xl md:text-4xl mb-8"
                style={{ color: "#E8DDCA" }}
              >
                Grazie per averlo lasciato qui.
              </h2>

              <GoldSeparator />

              <p
                className="font-cormorant text-xl md:text-2xl italic max-w-2xl mx-auto mb-10"
                style={{
                  color: "#E8DDCA88",
                  lineHeight: 1.7,
                }}
              >
                Quello che hai affidato a Vyrah è stato ascoltato.
              </p>

              {consent && (
                <p
                  className="font-cormorant text-base max-w-xl mx-auto mb-10"
                  style={{
                    color: "#B4975A99",
                    lineHeight: 1.6,
                  }}
                >
                  Potrà diventare parte della ricerca di Vyrah e,
                  eventualmente, dell'Archivio.
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  className="cta-secondary"
                  onClick={resetForm}
                >
                  Lascia altro
                </button>

                <button
                  type="button"
                  className="cta-primary"
                  onClick={() => navigate("archivio")}
                >
                  Esplora l'Archivio
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// ─── Page: CHI SONO ───────────────────────────────────────────────────────────
function PageChiSono({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div>
      {/* HERO */}
      <section
        className="pt-30 pb-16 md:pt-36 md:pb-20"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-8">Chi sono</p>

          <h1
            className="display-heading text-4xl md:text-5xl mb-8"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.12,
            }}
          >
            Per raccontarmi,
            <br />
            parto dal mio{" "}
            <span style={{ color: "#D0B875" }}>nome.</span>
          </h1>

          <p
            className="font-cormorant text-xl italic"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.7,
            }}
          > <GoldSeparator />
            Perché anche il modo in cui scegliamo di raccontarci
            <br className="hidden md:block" />
            dice qualcosa di noi.
          </p>
        </div>
      </section>

      {/* IL NOME */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#15100D" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <p className="section-label">Il mio nome</p>
            </div>

            <div className="md:col-span-8">
              <p
                className="font-cormorant text-xl md:text-2xl mb-8"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.75,
                }}
              >
                Il solo nome non basta per raccontare davvero chi siamo.
                Ma, nel tempo, può diventare curioso osservare
                quanta distanza possa esserci tra il significato di una
                parola e la vita di chi la porta.
              </p>

              <p
                className="font-cormorant text-2xl md:text-3xl mb-10"
                style={{
                  color: "#D0B875",
                  lineHeight: 1.45,
                }}
              >
                <strong>Valentina</strong>, dal latino{" "}
                <em>valens</em>: forte, capace, colei che ha valore.
              </p>

              <div
                className="gold-line mb-8"
                style={{ opacity: 0.45 }}
              />

              <p
                className="font-cormorant text-xl md:text-2xl"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.7,
                }}
              >
                E allora mi sono chiesta:
                <br />
                <strong>che cosa significa, davvero, avere valore?</strong>
              </p>

              <p
                className="font-cormorant text-lg md:text-xl mt-8"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.8,
                }}
              >
                Non quanto valiamo agli occhi degli altri. Non quanto
                riusciamo a dimostrare. Ma che cosa scegliamo di
                considerare importante, a cosa decidiamo di dare valore
                e quanto le nostre scelte riescano a esserne espressione.
              </p>

              <p
                className="font-cormorant text-lg md:text-xl mt-8"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.8,
                }}
              >
                È una domanda che, in forme diverse, mi ha accompagnata
                molto più a lungo di quanto avessi compreso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMA DI VYRAH */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* FOTO */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden">
                <img
                  src={IMG.chiSonoVyrah}
                  alt="Valentina"
                  className="w-full h-auto object-cover vyrah-light"
                />
              </div>
            </div>

            {/* TESTO */}
            <div className="md:col-span-7 md:pt-4">
              <p className="section-label mb-8">Prima di Vyrah</p>

              <h2
                className="display-heading text-3xl md:text-4xl mb-10"
                style={{
                  color: "#E8DDCA",
                  lineHeight: 1.15,
                }}
              >
                La mia storia
                <br />
                <span style={{ color: "#D0B875" }}>
                  non comincia qui.
                </span>
              </h2>

              <div
                className="font-cormorant text-lg md:text-xl"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.85,
                }}
              >
                <p className="mb-7">
                  Comincia molto prima, quando ancora non avevo gli
                  strumenti per dare un nome a ciò che sentivo, alle cose
                  che mi incuriosivano, al modo in cui guardavo il mondo.
                </p>

                <p className="mb-7">
                  Da bambina riconoscevo già, senza saperlo, cosa mi apparteneva: creare, osservare, immaginare. Avevo una
                  personalità difficile da contenere e un bisogno di
                  libertà che allora non sapevo ancora chiamare così.
                </p>

                <p className="mb-7">
                  Crescendo, però, ho iniziato a guardarmi attraverso gli
                  occhi degli altri. Ho cercato approvazione, seguito ciò
                  che sembrava giusto, costruito una versione di me che
                  potesse trovare il proprio posto.
                </p>

                <p>
                  Per un po' ho confuso quella versione con me stessa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IL CAMBIAMENTO */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#15100D" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label mb-8">Una domanda diversa</p>

          <div
            className="font-cormorant text-lg md:text-xl"
            style={{
              color: "#E8DDCAB8",
              lineHeight: 1.85,
            }}
          >
            <p className="mb-8">
              Poi sono arrivate esperienze, domande e contraddizioni che
              hanno cambiato il mio modo di guardare le cose.
            </p>

            <p className="mb-10">
              Ho iniziato a mettere in discussione ciò che mi circondava,
              ma soprattutto ciò che avevo dato per certo dentro di me.
            </p>
          </div>

          <div
            className="border-l"
            style={{
              borderColor: "#B4975A66",
              paddingLeft: "2rem",
            }}
          >
            <p
              className="font-cormorant text-2xl md:text-3xl italic"
              style={{
                color: "#D0B875",
                lineHeight: 1.5,
              }}
            >
              Non cercavo più soltanto di capire chi fossi.
              <br />
              <strong>Volevo capire come si diventa ciò che si è.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* LA RICERCA */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <p className="section-label">La ricerca</p>
            </div>

            <div className="md:col-span-8">
              <div
                className="font-cormorant text-lg md:text-xl"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.85,
                }}
              >
                <p className="mb-7">
                  Da quella domanda è cominciata una ricerca che non ha
                  seguito una linea precisa.
                </p>

                <p className="mb-7">
                  Ho cercato nella filosofia e nella religione, nella
                  natura e nella creatività, nell'osservazione delle
                  persone e nell'osservazione di me stessa. Ho studiato
                  ciò che poteva aiutarmi a comprendere meglio l'essere
                  umano e, ogni volta che credevo di aver trovato una
                  risposta, mi sono ritrovata con una domanda nuova.
                </p>
              </div>

              <p
                className="font-cormorant text-2xl md:text-3xl italic my-10"
                style={{
                  color: "#D0B875",
                  lineHeight: 1.5,
                }}
              >
                Conoscere non significa smettere di interrogarsi.
              </p>

              <div
                className="font-cormorant text-lg md:text-xl"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.85,
                }}
              >
                <p className="mb-7">
                  È stato in questo percorso che sono arrivata ai
                  linguaggi simbolici.
                </p>

                <p className="mb-7">
                  Non ho trovato un sistema capace di spiegare la vita al
                  posto mio. Ho trovato qualcosa di più interessante:
                  strumenti capaci di aprire prospettive, mettere in
                  relazione elementi apparentemente distanti e permettere
                  di osservare ciò che, da soli, a volte non riusciamo a
                  vedere.
                </p>

                <p>
                  Da allora il mio percorso continua attraverso lo studio,
                  l'esperienza e il confronto con le persone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VYRAH */}
      <section
        className="py-24 md:py-28"
        style={{
         background:
  "linear-gradient(120deg, #181A15 0%, #1D1F18 45%, #1A1C16 70%, #121410 100%)",
borderTop: "1px solid rgba(180,151,90,0.16)",
borderBottom: "1px solid rgba(180,151,90,0.16)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="section-label mb-8"
            style={{ color: "#D0B875" }}
          >
            Da quel percorso
          </p>

          <h2
            className="display-heading text-3xl md:text-5xl mb-10"
            style={{
              color: "#F1E8D8",
              lineHeight: 1.15,
            }}
          >
            Ho iniziato a costruire
            <br />
            <span style={{ color: "#D0B875" }}>Vyrah.</span>
          </h2>

          <div
            className="font-cormorant text-lg md:text-xl"
            style={{
              color: "#F1E8D8CC",
              lineHeight: 1.85,
            }}
          >
            <p className="mb-7">
              Non come un punto di arrivo e nemmeno come un metodo da
              seguire.
            </p>

            <p
              className="font-cormorant text-2xl md:text-3xl italic mb-7"
              style={{
                color: "#F1E8D8",
                lineHeight: 1.5,
              }}
            >
              Come uno spazio in cui fermarsi abbastanza a lungo da poter
              guardare ciò che si sta vivendo con occhi nuovi.
            </p>

            <p>
              Non credo che esista una risposta che possa essere
              consegnata a qualcun altro e funzionare allo stesso modo.
            </p>
          </div>
        </div>
      </section>

      {/* LA MIA VISIONE */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#15100D" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="md:col-span-7">
              <p className="section-label mb-8">Quello che penso</p>

              <div
                className="font-cormorant text-lg md:text-xl"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.85,
                }}
              >
                <p className="mb-7">
                  Sono dell'idea che, a volte, la risposta sia già dentro ciò
                  che stiamo vivendo e che ciò che manca sia uno spazio in
                  cui poterla osservare.
                </p>

                <p className="mb-7">
                  È questo che cerco di creare attraverso Vyrah.
                </p>

                <p>
                  Non voglio dirti cosa devi vedere.
                </p>
              </div>

              <p
                className="font-cormorant text-2xl md:text-3xl italic mt-10"
                style={{
                  color: "#D0B875",
                  lineHeight: 1.5,
                }}
              >
                Voglio aiutarti a vedere abbastanza da poter scegliere
                con maggiore consapevolezza ciò che è tuo.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden">
                <img
                  src={IMG.chiSonoVyrah2}
                  alt="Vyrah"
                  className="w-full h-auto object-cover vyrah-light"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHIUSURA */}
      <section
        className="py-24 md:py-32"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            className="gold-line mx-auto mb-10"
            style={{ maxWidth: "80px", opacity: 0.5 }}
          />

          <p
            className="font-cormorant text-2xl md:text-3xl italic"
            style={{
              color: "#E8DDCA",
              lineHeight: 1.55,
            }}
          >
            La ricerca continua ancora oggi.
          </p>

          <button
            onClick={() => navigate("contatti")}
            className="mt-10 font-cinzel text-xs tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
            style={{ color: "#B4975A" }}
          >
            Scrivimi
          </button>
        </div>
      </section>
    </div>
  );
}
// ─── Page: CONTATTI ───────────────────────────────────────────────────────────
function PageContatti() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <div
      style={{
        background: "#0B0908",
        color: "#E8DDCA",
      }}
    >

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="pt-40 pb-20"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h1
            className="display-heading text-4xl md:text-5xl mt-8 mb-6"
            style={{ color: "#E8DDCA" }}
          >
            Parliamo di ciò che ti{" "}
            <span style={{ color: "#B4975A" }}>
              ha portato qui
            </span>.
          </h1>

          <GoldSeparator />

          <p
            className="font-cormorant text-xl italic max-w-2xl mx-auto"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.6,
            }}
          >
            Ogni percorso comincia da una domanda, da una situazione
            o semplicemente dal desiderio di comprendere qualcosa meglio.
          </p>

        </div>
      </section>


      {/* =========================================================
          CONTACT GRID
      ========================================================= */}

      <section
        id="scrivimi"
        style={{ background: "#0B0908" }}
        className="pb-32"
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">

            {/* =====================================================
                FORM
            ===================================================== */}

            <div
              className="md:col-span-2 p-8 md:p-12"
              style={{
                background: "#15100D",
                border: "1px solid rgba(180,151,90,0.1)",
              }}
            >

              {!sent ? (
                <>
                  {/* Intro */}
                  <div className="mb-12">

                    <h2
                      className="display-heading text-3xl md:text-4xl mb-4"
                      style={{ color: "#E8DDCA" }}
                    >
                      Non sai quale esperienza scegliere?
                    </h2>

                    <p
                      className="font-cormorant text-xl italic"
                      style={{
                        color: "#B4975A",
                        lineHeight: 1.5,
                      }}
                    >
                      Raccontami cosa stai cercando e proveremo a capire
                      insieme da dove partire.
                    </p>

                  </div>

                  <p className="section-label mb-8">
                    Scrivimi
                  </p>

                  <div className="flex flex-col gap-5">

                    {/* Nome + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div>
                        <label
                          className="section-label mb-2 block"
                          style={{ color: "#E8DDCA44" }}
                        >
                          Nome
                        </label>

                        <input
                          className="form-input"
                          type="text"
                          placeholder="Il tuo nome"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label
                          className="section-label mb-2 block"
                          style={{ color: "#E8DDCA44" }}
                        >
                          Email
                        </label>

                        <input
                          className="form-input"
                          type="email"
                          placeholder="La tua email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                    </div>


                    {/* Messaggio */}
                    <div>
                      <label
                        className="section-label mb-2 block"
                        style={{ color: "#E8DDCA44" }}
                      >
                        Cosa stai cercando
                      </label>

                      <textarea
                        className="form-input resize-none"
                        rows={9}
                        placeholder="Raccontami di te, di cosa ti ha portato qui, di cosa stai cercando…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />

                      <p
                        className="font-cormorant text-sm italic mt-3"
                        style={{
                          color: "#E8DDCA55",
                          lineHeight: 1.5,
                        }}
                      >
                        Non è necessario trovare le parole giuste.
                        Puoi semplicemente raccontarmi ciò che senti
                        di voler comprendere.
                      </p>
                      <p
  className="font-cormorant text-sm mt-6"
  style={{
    color: "#E8DDCA55",
    lineHeight: 1.5,
  }}
>
  Il modulo è ancora in costruzione. Sarà attivo prossimamente.
</p>
                    </div>


                    {/* Submit */}
<div className="pt-2">

  <button
    type="button"
    className="cta-primary"
    disabled
    style={{
      opacity: 0.45,
      cursor: "not-allowed",
    }}
  >
    Presto potrai scrivermi da qui
  </button>

</div>

                  </div>
                </>
              ) : (

                /* =================================================
                   MESSAGGIO INVIATO
                   ================================================= */

                <div className="text-center py-16">

                  <p className="section-label mb-6">
                    Grazie
                  </p>

                  <h2
                    className="display-heading text-3xl mb-5"
                    style={{ color: "#E8DDCA" }}
                  >
                    Messaggio ricevuto.
                  </h2>

                  <p
                    className="font-cormorant text-xl italic"
                    style={{
                      color: "#B4975A",
                      lineHeight: 1.6,
                    }}
                  >
                    Riceverai una risposta entro 48 ore.
                  </p>

                </div>

              )}

            </div>


            {/* =====================================================
                COLONNA DESTRA
            ===================================================== */}

            <div className="flex flex-col gap-0.5">


              {/* ===================================================
                  CONTATTI DIRETTI
              =================================================== */}

              <div
                className="p-8 flex-1"
                style={{
                  background: "#421B2020",
                  border: "1px solid rgba(180,151,90,0.1)",
                }}
              >

                <p className="section-label mb-6">
                  Contatti diretti
                </p>

                <div className="flex flex-col">

                  {/* =================================================
                      EMAIL
                  ================================================= */}

                  <a
                    href="mailto:vyrah.eudaimonia@gmail.com"
                    className="group relative py-3 -mx-3 px-3 transition-all duration-300"
                    style={{
                      borderBottom:
                        "1px solid rgba(180,151,90,0.07)",
                      textDecoration: "none",
                    }}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p
                          className="font-cinzel text-xs tracking-[0.15em] mb-1 transition-all duration-300"
                          style={{ color: "#B4975A88" }}
                        >
                          Email
                        </p>

                        <p
                          className="font-cormorant text-base transition-all duration-300"
                          style={{ color: "#E8DDCA88" }}
                        >
                          vyrah.eudaimonia@gmail.com
                        </p>

                      </div>

                      <span
                        className="font-cormorant text-lg opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: "#B4975A" }}
                      >
                        →
                      </span>

                    </div>

                    {/* linea luminosa */}
                    <span
                      className="absolute bottom-[-1px] left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: "#B4975A" }}
                    />

                  </a>


                  {/* =================================================
                      WHATSAPP
                  ================================================= */}

                  <a
                    href="https://wa.me/393773596931?text=Ciao%20Valentina%2C%20ti%20scrivo%20perché%20vorrei%20raccontarti%20qualcosa%20e%20capire%20se%20possiamo%20partire%20da%20qui."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative py-3 -mx-3 px-3 transition-all duration-300"
                    style={{
                      borderBottom:
                        "1px solid rgba(180,151,90,0.07)",
                      textDecoration: "none",
                    }}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p
                          className="font-cinzel text-xs tracking-[0.15em] mb-1 transition-all duration-300"
                          style={{ color: "#B4975A88" }}
                        >
                          WhatsApp
                        </p>

                        <p
                          className="font-cormorant text-base transition-all duration-300"
                          style={{ color: "#E8DDCA88" }}
                        >
                          +39 377 359 6931
                        </p>

                      </div>

                      <span
                        className="font-cormorant text-lg opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: "#B4975A" }}
                      >
                        →
                      </span>

                    </div>

                    {/* linea luminosa */}
                    <span
                      className="absolute bottom-[-1px] left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: "#B4975A" }}
                    />

                  </a>


                  {/* =================================================
                      INSTAGRAM
                  ================================================= */}

                  <a
                    href="https://www.instagram.com/vyrah.eudaimonia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative py-3 -mx-3 px-3 transition-all duration-300"
                    style={{
                      borderBottom:
                        "1px solid rgba(180,151,90,0.07)",
                      textDecoration: "none",
                    }}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p
                          className="font-cinzel text-xs tracking-[0.15em] mb-1 transition-all duration-300"
                          style={{ color: "#B4975A88" }}
                        >
                          Instagram
                        </p>

                        <p
                          className="font-cormorant text-base transition-all duration-300"
                          style={{ color: "#E8DDCA88" }}
                        >
                          @vyrah.eudaimonia
                        </p>

                      </div>

                      <span
                        className="font-cormorant text-lg opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: "#B4975A" }}
                      >
                        →
                      </span>

                    </div>

                    {/* linea luminosa */}
                    <span
                      className="absolute bottom-[-1px] left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: "#B4975A" }}
                    />

                  </a>


                  {/* =================================================
                      TELEGRAM
                  ================================================= */}

                  <a
                    href="https://t.me/vyrah_eudaimonia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative py-3 -mx-3 px-3 transition-all duration-300"
                    style={{
                      borderBottom:
                        "1px solid rgba(180,151,90,0.07)",
                      textDecoration: "none",
                    }}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p
                          className="font-cinzel text-xs tracking-[0.15em] mb-1 transition-all duration-300"
                          style={{ color: "#B4975A88" }}
                        >
                          Telegram
                        </p>

                        <p
                          className="font-cormorant text-base transition-all duration-300"
                          style={{ color: "#E8DDCA88" }}
                        >
                          t.me/vyrah_eudaimonia
                        </p>

                      </div>

                      <span
                        className="font-cormorant text-lg opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: "#B4975A" }}
                      >
                        →
                      </span>

                    </div>

                    {/* linea luminosa */}
                    <span
                      className="absolute bottom-[-1px] left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: "#B4975A" }}
                    />

                  </a>


                  {/* =================================================
                      TELEFONO
                  ================================================= */}

                  <a
                    href="tel:+393773596931"
                    className="group relative py-3 -mx-3 px-3 transition-all duration-300"
                    style={{
                      textDecoration: "none",
                    }}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p
                          className="font-cinzel text-xs tracking-[0.15em] mb-1 transition-all duration-300"
                          style={{ color: "#B4975A88" }}
                        >
                          Telefono
                        </p>

                        <p
                          className="font-cormorant text-base transition-all duration-300"
                          style={{ color: "#E8DDCA88" }}
                        >
                          +39 377 359 6931
                        </p>

                      </div>

                      <span
                        className="font-cormorant text-lg opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: "#B4975A" }}
                      >
                        →
                      </span>

                    </div>

                    {/* linea luminosa */}
                    <span
                      className="absolute bottom-[-1px] left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: "#B4975A" }}
                    />

                  </a>

                </div>
              </div>


              {/* ===================================================
                  FAQ ORIENTAMENTO
              =================================================== */}

              <div
                className="p-8"
                style={{
                  background: "#15100D",
                  border: "1px solid rgba(180,151,90,0.1)",
                }}
              >

                <p className="section-label mb-6">
                  Prima di scrivermi
                </p>

                <h3
                  className="font-cormorant text-2xl mb-4"
                  style={{ color: "#E8DDCA" }}
                >
                  Hai ancora qualche dubbio?
                </h3>

                <p
                  className="font-cormorant text-base mb-6"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.6,
                  }}
                >
                  Puoi trovare qui le risposte alle domande più comuni
                  su incontri, durata, scelta dell'esperienza e
                  modalità di prenotazione.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="font-cinzel text-xs tracking-[0.15em] transition-colors duration-300 hover:text-[#E8DDCA]"
                  style={{
                    color: "#B4975A",
                  }}
                >
                  VEDI LE FAQ →
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          01 — DOVE POSSIAMO INCONTRARCI
      ========================================================= */}

      <section
        className="py-28 md:py-8"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-2xl mb-16">

            <p className="section-label mb-6">
              01 — L'incontro
            </p>

            <h2
              className="display-heading text-4xl md:text-5xl mb-6"
              style={{ color: "#E8DDCA" }}
            >
              Dove possiamo incontrarci?
            </h2>

            <p
              className="font-cormorant text-xl italic"
              style={{
                color: "#E8DDCA88",
                lineHeight: 1.6,
              }}
            >
              L'esperienza può svolgersi a distanza oppure in presenza,
              a seconda di ciò che è possibile e più adatto alla situazione.
            </p>

          </div>


          {/* =====================================================
              MODALITÀ DI INCONTRO
          ===================================================== */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">


            {/* ===================================================
                ONLINE
            =================================================== */}

            <div
              className="group relative overflow-hidden p-10 md:p-12 transition-all duration-700"
              style={{
                background:
                  "linear-gradient(135deg, #15100D 0%, #15100D 100%)",
                border: "1px solid rgba(180,151,90,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #15100D 0%, #241719 55%, #35191E 100%)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #15100D 0%, #15100D 100%)"
              }}
            >

              {/* Luce cromatica */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 15% 20%, rgba(180,151,90,0.10), transparent 48%), radial-gradient(circle at 90% 90%, rgba(66,27,32,0.28), transparent 55%)",
                }}
              />

              <div className="relative z-10">

                <p className="section-label mb-8">
                
                </p>

                <h3
                  className="font-cormorant text-3xl mb-5 transition-colors duration-500 group-hover:text-[#F1E8D8]"
                  style={{ color: "#E8DDCA" }}
                >
                  Online
                </h3>

                <p
                  className="font-cormorant text-lg transition-colors duration-500 group-hover:text-[#E8DDCAC0]"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.6,
                  }}
                >
                  A distanza, attraverso una videochiamata.
                  Un modo semplice per incontrarsi anche quando
                  non ci troviamo nello stesso luogo.
                </p>

              </div>

            </div>


            {/* ===================================================
                IN PRESENZA
            =================================================== */}

            <div
              className="group relative overflow-hidden p-10 md:p-12 transition-all duration-700"
              style={{
                background:
                  "linear-gradient(135deg, #15100D 0%, #15100D 100%)",
                border: "1px solid rgba(180,151,90,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #15100D 0%, #281519 52%, #421B20 100%)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #15100D 0%, #15100D 100%)"
              }}
            >

              {/* Luce cromatica */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 85% 20%, rgba(180,151,90,0.10), transparent 48%), radial-gradient(circle at 10% 90%, rgba(66,27,32,0.30), transparent 55%)",
                }}
              />

              <div className="relative z-10">

                <p className="section-label mb-8">
                  
                </p>

                <h3
                  className="font-cormorant text-3xl mb-5 transition-colors duration-500 group-hover:text-[#F1E8D8]"
                  style={{ color: "#E8DDCA" }}
                >
                  In presenza
                </h3>

                <p
                  className="font-cormorant text-lg transition-colors duration-500 group-hover:text-[#E8DDCAC0]"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.6,
                  }}
                >
                  Quando ci troviamo nello stesso luogo,
                  l'incontro acquista anche una dimensione fisica
                  e concreta.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="flex justify-center mt-14">

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("prenotazione")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="cta-primary"
            >
              PRENOTA UN INCONTRO →
            </button>

          </div>

        </div>
      </section>


      {/* =========================================================
          02 — COME POSSIAMO INIZIARE
      ========================================================= */}

      <section
        id="prenotazione"
        className="py-28 md:py-36"
        style={{ background: "#15100D" }}
      >
        <div className="max-w-5xl mx-auto px-6">

          <p className="section-label mb-6">
            02 — La prenotazione
          </p>

          <h2
            className="display-heading text-4xl md:text-5xl mb-6"
            style={{ color: "#E8DDCA" }}
          >
            Come possiamo iniziare?
          </h2>

          <p
            className="font-cormorant text-xl italic max-w-2xl mb-14"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.6,
            }}
          >
            Non è necessario arrivare con una scelta già definita.
            Il primo contatto serve anche a capire insieme quale
            esperienza può avere più senso per ciò che stai vivendo.
          </p>


          {/* =====================================================
              POSSIBILITÀ
          ===================================================== */}

          <div
            className="border-t"
            style={{
              borderColor: "rgba(180,151,90,0.18)",
            }}
          >

            {/* ===================================================
                01
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.12)",
              }}
            >

              <summary className="list-none cursor-pointer py-7 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-2xl"
                  style={{ color: "#E8DDCA" }}
                >
                  So già cosa voglio esplorare
                </span>

                <span
                  className="font-cormorant text-2xl flex-shrink-0"
                  style={{ color: "#B4975A" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-7 max-w-2xl">

                <p
                  className="font-cormorant text-lg"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.6,
                  }}
                >
                  Puoi scrivermi direttamente indicando l'esperienza
                  che ti interessa. Ti ricontatterò per concordare
                  insieme modalità, disponibilità e dettagli
                  dell'incontro.
                </p>

              </div>

            </details>


            {/* ===================================================
                02
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.12)",
              }}
            >

              <summary className="list-none cursor-pointer py-7 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-2xl"
                  style={{ color: "#E8DDCA" }}
                >
                  Non so ancora quale esperienza scegliere
                </span>

                <span
                  className="font-cormorant text-2xl flex-shrink-0"
                  style={{ color: "#B4975A" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-7 max-w-2xl">

                <p
                  className="font-cormorant text-lg"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.6,
                  }}
                >
                  È sufficiente raccontarmi cosa ti sta portando qui,
                  cosa stai vivendo o cosa vorresti comprendere meglio.
                  Partiremo da quello per individuare insieme
                  la direzione più adatta.
                </p>

              </div>

            </details>


            {/* ===================================================
                03
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.12)",
              }}
            >

              <summary className="list-none cursor-pointer py-7 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-2xl"
                  style={{ color: "#E8DDCA" }}
                >
                  Voglio prima raccontarti la situazione
                </span>

                <span
                  className="font-cormorant text-2xl flex-shrink-0"
                  style={{ color: "#B4975A" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-7 max-w-2xl">

                <p
                  className="font-cormorant text-lg"
                  style={{
                    color: "#E8DDCA88",
                    lineHeight: 1.6,
                  }}
                >
                  Puoi usare il primo messaggio semplicemente per
                  raccontare ciò che senti di voler affrontare.
                  Non serve trovare le parole giuste: sarà il punto
                  da cui cominceremo a orientarci.
                </p>

              </div>

            </details>

          </div>


          {/* CTA */}

          <div className="flex justify-center mt-14">

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("scrivimi")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="cta-primary"
            >
              SCRIVIMI →
            </button>

          </div>

        </div>
      </section>


      {/* =========================================================
          COLLABORAZIONI
      ========================================================= */}

      <section
        className="py-24 md:py-28"
        style={{
          background:
            "linear-gradient(120deg, #351014 0%, #5A1E22 48%, #3E1217 100%)",
          borderTop:
            "1px solid rgba(180,151,90,0.2)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>

              <p
                className="section-label mb-6"
                style={{ color: "#D0B875" }}
              >
                Collaborazioni
              </p>

              <h2
                className="display-heading text-3xl md:text-4xl mb-5"
                style={{ color: "#F1E8D8" }}
              >
                Vuoi portare Vyrah
                <br />
                in un altro spazio?
              </h2>

            </div>


            <div>

              <p
                className="font-cormorant text-lg mb-7"
                style={{
                  color: "#E8DDCAB8",
                  lineHeight: 1.7,
                }}
              >
                Se hai un progetto, uno spazio, un evento o un'idea
                che potrebbe incontrare il mondo di Vyrah, puoi
                raccontarmela.
              </p>

              <a
                href="https://wa.me/393773596931?text=Ciao%20Valentina%2C%20vorrei%20parlarti%20di%20un%27idea%20o%20di%20una%20possibile%20collaborazione%20per%20Vyrah."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-cinzel text-xs tracking-[0.15em] transition-colors duration-300 hover:text-[#F1E8D8]"
                style={{
                  color: "#D0B875",
                  textDecoration: "none",
                }}
              >
                PARLIAMONE
                <span className="text-base">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          03 — FAQ
      ========================================================= */}

      <section
        id="faq"
        className="py-20 md:py-24"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-4xl mx-auto px-6">

          <div className="mb-10">

            <p className="section-label mb-4">
              03 — FAQ
            </p>

            <h2
              className="font-cormorant text-3xl md:text-4xl"
              style={{ color: "#E8DDCA" }}
            >
              Domande frequenti
            </h2>

          </div>


          <div
            className="border-t"
            style={{
              borderColor: "rgba(180,151,90,0.12)",
            }}
          >

            {/* ===================================================
                FAQ 01
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.1)",
              }}
            >

              <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-lg"
                  style={{ color: "#E8DDCAE0" }}
                >
                  Devo sapere già quale esperienza scegliere?
                </span>

                <span
                  className="font-cormorant text-xl flex-shrink-0"
                  style={{ color: "#B4975A88" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-5 max-w-3xl">

                <p
                  className="font-cormorant text-base"
                  style={{
                    color: "#E8DDCA66",
                    lineHeight: 1.6,
                  }}
                >
                  No. Puoi raccontarmi semplicemente cosa stai vivendo,
                  cosa ti interessa comprendere o cosa ti ha portato
                  a cercare Vyrah. Da lì possiamo orientarci insieme
                  verso l'esperienza più adatta.
                </p>

              </div>

            </details>


            {/* ===================================================
                FAQ 02
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.1)",
              }}
            >

              <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-lg"
                  style={{ color: "#E8DDCAE0" }}
                >
                  Gli incontri possono essere svolti online?
                </span>

                <span
                  className="font-cormorant text-xl flex-shrink-0"
                  style={{ color: "#B4975A88" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-5 max-w-3xl">

                <p
                  className="font-cormorant text-base"
                  style={{
                    color: "#E8DDCA66",
                    lineHeight: 1.6,
                  }}
                >
                  Sì. Gli incontri possono essere svolti a distanza
                  attraverso una videochiamata oppure, quando possibile,
                  in presenza.
                </p>

              </div>

            </details>


            {/* ===================================================
                FAQ 03
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.1)",
              }}
            >

              <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-lg"
                  style={{ color: "#E8DDCAE0" }}
                >
                  Quanto dura un incontro?
                </span>

                <span
                  className="font-cormorant text-xl flex-shrink-0"
                  style={{ color: "#B4975A88" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-5 max-w-3xl">

                <p
                  className="font-cormorant text-base"
                  style={{
                    color: "#E8DDCA66",
                    lineHeight: 1.6,
                  }}
                >
                  La durata dipende dal tipo di esperienza concordata.
                  Al momento della prenotazione definiremo insieme
                  modalità e tempi dell'incontro.
                </p>

              </div>

            </details>


            {/* ===================================================
                FAQ 04
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.1)",
              }}
            >

              <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-lg"
                  style={{ color: "#E8DDCAE0" }}
                >
                  Come avviene la prenotazione?
                </span>

                <span
                  className="font-cormorant text-xl flex-shrink-0"
                  style={{ color: "#B4975A88" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-5 max-w-3xl">

                <p
                  className="font-cormorant text-base"
                  style={{
                    color: "#E8DDCA66",
                    lineHeight: 1.6,
                  }}
                >
                  Puoi scrivermi attraverso il modulo di contatto
                  oppure utilizzando uno dei contatti diretti.
                  Dopo il primo messaggio concorderemo insieme
                  disponibilità, modalità e dettagli dell'incontro.
                </p>

              </div>

            </details>


            {/* ===================================================
                FAQ 05
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.1)",
              }}
            >

              <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-lg"
                  style={{ color: "#E8DDCAE0" }}
                >
                  Cosa posso scrivere nel primo messaggio?
                </span>

                <span
                  className="font-cormorant text-xl flex-shrink-0"
                  style={{ color: "#B4975A88" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-5 max-w-3xl">

                <p
                  className="font-cormorant text-base"
                  style={{
                    color: "#E8DDCA66",
                    lineHeight: 1.6,
                  }}
                >
                  Quello che ritieni utile condividere.
                  Può essere una domanda precisa, una situazione
                  che stai vivendo, qualcosa che desideri comprendere
                  oppure anche soltanto il motivo per cui sei arrivato
                  fino a qui.
                </p>

              </div>

            </details>


            {/* ===================================================
                FAQ 06
            =================================================== */}

            <details
              className="border-b"
              style={{
                borderColor: "rgba(180,151,90,0.1)",
              }}
            >

              <summary className="list-none cursor-pointer py-5 flex items-center justify-between gap-6">

                <span
                  className="font-cormorant text-lg"
                  style={{ color: "#E8DDCAE0" }}
                >
                  Come viene scelto lo strumento da utilizzare?
                </span>

                <span
                  className="font-cormorant text-xl flex-shrink-0"
                  style={{ color: "#B4975A88" }}
                >
                  +
                </span>

              </summary>

              <div className="pb-5 max-w-3xl">

                <p
                  className="font-cormorant text-base"
                  style={{
                    color: "#E8DDCA66",
                    lineHeight: 1.6,
                  }}
                >
                  Non scelgo lo strumento prima di ascoltare la domanda.
                  La situazione e ciò che desideri esplorare orientano
                  il linguaggio simbolico più adatto all'incontro.
                </p>

              </div>

            </details>

          </div>

        </div>
      </section>


      {/* =========================================================
          CHIUSURA
      ========================================================= */}

      <section
        className="py-24"
        style={{ background: "#0B0908" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">

          <p
            className="font-cormorant text-2xl md:text-3xl italic"
            style={{
              color: "#E8DDCA88",
              lineHeight: 1.6,
            }}
          >
            A volte non serve sapere già dove andare.
            <br />
            Basta trovare il punto da cui cominciare.
          </p>

          <div className="mt-10 flex justify-center">

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("scrivimi")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="cta-primary"
            >
              SCRIVIMI →
            </button>

          </div>

        </div>
      </section>

    </div>
  )
}
// ─── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home")

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderPage = () => {
    switch (page) {
      case "home":
        return <PageHome navigate={navigate} />
      case "vyrah":
        return <PageVyrah navigate={navigate} />
      case "metodo":
        return <PageMetodo navigate={navigate} />
      case "percorso":
        return <PagePercorso navigate={navigate} />
        case "credere":
  return <PageCredere navigate={navigate} />
      case "esperienze":
        return <PageEsperienze navigate={navigate} />
      case "eventi":
        return <PageEventi navigate={navigate} />
      case "archivio":
        return <PageArchivio navigate={navigate} />
      case "negozio":
        return <PageNegozio navigate={navigate} />
      case "testimonianze":
        return <PageTestimonianze />
      case "voci":
        return <PageVoci navigate={navigate} />
      case "chi-sono":
        return <PageChiSono navigate={navigate} />
      case "contatti":
        return <PageContatti />
      default:
        return <PageHome navigate={navigate} />
    }
  }

  return (
    <div style={{ background: "#0B0908", minHeight: "100vh" }}>
      <Nav current={page} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  )
}
