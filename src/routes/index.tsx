import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-servers.jpg";
import {
  Zap,
  Shield,
  Globe2,
  HeadphonesIcon,
  Server,
  Cpu,
  Check,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaHost — אחסון אתרים מהיר ומאובטח" },
      {
        name: "description",
        content:
          "אחסון אתרים בענן עם ביצועים על-קוליים, אבטחה ברמה ארגונית ותמיכה 24/7 בעברית. החל מ-9₪ לחודש.",
      },
      { property: "og:title", content: "NovaHost — אחסון אתרים מהיר ומאובטח" },
      {
        property: "og:description",
        content: "אחסון אתרים בענן עם ביצועים על-קוליים ותמיכה 24/7.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Zap,
    title: "מהירות SSD NVMe",
    desc: "שרתי דור חדש עם דיסקי NVMe וטעינה בפחות מ-200ms בכל מקום בעולם.",
  },
  {
    icon: Shield,
    title: "אבטחה אבסולוטית",
    desc: "הגנת DDoS, חומת אש מנוהלת, גיבויים יומיים ותעודת SSL חינמית.",
  },
  {
    icon: Globe2,
    title: "CDN גלובלי",
    desc: "200+ נקודות קצה ברחבי העולם, האתר שלך טעון מהר לכל גולש.",
  },
  {
    icon: HeadphonesIcon,
    title: "תמיכה 24/7 בעברית",
    desc: "צוות אנושי שזמין סביב השעון בצ'אט, טלפון ומייל — בלי בוטים.",
  },
  {
    icon: Server,
    title: "Uptime 99.99%",
    desc: "התחייבות חוזית לזמינות, עם החזר כספי על כל דקה של תקלה.",
  },
  {
    icon: Cpu,
    title: "מנוע LiteSpeed",
    desc: "ביצועים פי 9 מ-Apache, מטמון מובנה וזיהוי בוטים חכם.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "9",
    desc: "מושלם לאתר אישי או בלוג",
    features: ["אתר אחד", "10 GB SSD", "תעבורה ללא הגבלה", "SSL חינם", "תמיכה בצ'אט"],
  },
  {
    name: "Pro",
    price: "29",
    desc: "לעסקים וחנויות אונליין",
    features: [
      "אתרים ללא הגבלה",
      "100 GB NVMe",
      "CDN גלובלי",
      "גיבוי יומי",
      "תמיכה מועדפת",
      "Staging חינם",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "89",
    desc: "תשתית ארגונית מנוהלת",
    features: [
      "VPS ייעודי",
      "500 GB NVMe",
      "8 vCPU / 16GB RAM",
      "IP ייעודי",
      "מנהל לקוח אישי",
      "SLA 99.99%",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
              <Sparkles className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">NovaHost</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">תכונות</a>
            <a href="#pricing" className="hover:text-foreground transition">מחירים</a>
            <a href="#support" className="hover:text-foreground transition">תמיכה</a>
          </div>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-glow"
          >
            התחל עכשיו
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              שרתים חדשים בישראל • זמינים עכשיו
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              אחסון אתרים <br />
              <span className="text-gradient">בקצב האורכעיכעי.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              תשתית ענן עוצמתית שמריצה את האתר שלך מהר יותר, בטוח יותר ובלי דאגות.
              הגירה חינם, הקמה ב-60 שניות, ואפס מחויבות.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="group px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_80px_-10px_var(--primary)] transition inline-flex items-center gap-2"
              >
                בחר תוכנית
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition" />
              </a>
              <a
                href="#features"
                className="px-7 py-3.5 rounded-xl border border-border bg-card/50 backdrop-blur font-semibold hover:border-primary/50 transition"
              >
                ראה תכונות
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div><span className="text-2xl font-bold text-foreground">99.99%</span><div>זמינות</div></div>
              <div className="w-px h-10 bg-border" />
              <div><span className="text-2xl font-bold text-foreground">200+</span><div>נקודות CDN</div></div>
              <div className="w-px h-10 bg-border" />
              <div><span className="text-2xl font-bold text-foreground">24/7</span><div>תמיכה</div></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" style={{ animation: "pulse-glow 4s ease-in-out infinite" }} />
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 glow-ring" style={{ animation: "float 6s ease-in-out infinite" }}>
              <img
                src={heroImage}
                alt="שרתי NovaHost"
                width={1536}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-sm text-primary font-medium mb-3">למה NovaHost</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              כל מה שצריך כדי להריץ אתר <span className="text-gradient">רציני</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-7 rounded-2xl border border-border bg-card/50 backdrop-blur hover:border-primary/40 hover:bg-card transition-all hover:-translate-y-1"
              >
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition">
                  <f.icon className="size-6 text-primary group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm text-primary font-medium mb-3">תמחור פשוט</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              בחר תוכנית שמתאימה לך
            </h2>
            <p className="text-muted-foreground">ללא חוזה, ללא תוספות נסתרות. החזר כספי תוך 30 יום.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 border transition ${
                  p.highlight
                    ? "border-primary/50 bg-card shadow-glow scale-[1.02]"
                    : "border-border bg-card/50 hover:border-primary/30"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                    הכי פופולרי
                  </div>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gradient">₪{p.price}</span>
                  <span className="text-muted-foreground text-sm">/ חודש</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm">
                      <Check className="size-4 text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    p.highlight
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "border border-border hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  התחל עם {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="support" className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl border border-primary/30 bg-card p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute -top-20 right-1/2 translate-x-1/2 size-64 bg-primary/30 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                מוכן <span className="text-gradient">להמריא</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                הצטרף ל-12,000+ אתרים שכבר טסים על NovaHost. הגירה חינם, הקמה ב-60 שניות.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
              >
                בחר תוכנית עכשיו
                <ArrowLeft className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-gradient-primary grid place-items-center">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">NovaHost</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">תנאי שימוש</a>
            <a href="#" className="hover:text-foreground transition">פרטיות</a>
            <a href="#" className="hover:text-foreground transition">צור קשר</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
