import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Cloud,
  Cog,
  CreditCard,
  EyeOff,
  Fingerprint,
  Fish,
  Globe,
  MapPin,
  Medal,
  Menu,
  Mountain,
  Network,
  Plus,
  Quote,
  RefreshCw,
  Share2,
  SlidersVertical,
  Smartphone,
  Star,
  Trophy,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import caseScraping from "@/assets/cases/scraping.jpg";
import caseSocial from "@/assets/cases/social.jpg";
import caseEcommerce from "@/assets/cases/ecommerce.jpg";
import caseSecurity from "@/assets/cases/security.jpg";
import caseQa from "@/assets/cases/qa.jpg";
import caseArbitrage from "@/assets/cases/arbitrage.jpg";
import caseReviews from "@/assets/cases/reviews.jpg";
import caseAiData from "@/assets/cases/ai-data.jpg";
import caseBrand from "@/assets/cases/brand.jpg";
import { getDict, type Dict, type Lang } from "@/lib/i18n";

const flag = (code: string) => `https://flagcdn.com/w80/${code}.png`;

type CoverageCard = { icon: string; bg?: string; img?: string; label: string; pill?: string };

const allCard = (label: string): CoverageCard => ({
  icon: "⚙️",
  bg: "#2ec4b6",
  label,
  pill: "100M+ IPs",
});

const countryFlags = ["us", "jp", "ge", "fr", "ca", "us", "nz"];
const countryPills = ["100M", undefined, undefined, undefined, undefined, undefined, undefined];

const serviceTabs: CoverageCard[][] = [
  [
    { icon: "🧲", label: "Lead generation" },
    { icon: "S", bg: "#111", label: "Shein" },
    { icon: "✳️", bg: "#0071ce", label: "Walmart" },
    { icon: "🛒", label: "E-Commerce" },
    { icon: "🅰️", bg: "#ff6a00", label: "Alibaba" },
    { icon: "E", bg: "#f56400", label: "Etsy proxy" },
    { icon: "🛍️", bg: "#95bf47", label: "Shopify" },
  ],
  [
    { icon: "🎧", bg: "#1db954", label: "Spotify" },
    { icon: "👥", bg: "#003399", label: "Myspace" },
    { icon: "", bg: "#000", label: "iPhone" },
    { icon: "👍", label: "Social media" },
    { icon: "💬", bg: "#07c160", label: "WeChat" },
    { icon: "👻", bg: "#fffc00", label: "Snapchat" },
    { icon: "🎮", bg: "#5865f2", label: "Discord" },
  ],
  [
    { icon: "⛏️", label: "Minecraft" },
    { icon: "W", bg: "#1d4f91", label: "World of Warcraft (WoW)" },
    { icon: "🎮", bg: "#1b2838", label: "Steam" },
    { icon: "F", bg: "#1cb9f5", label: "Fortnite" },
    { icon: "G", bg: "#7c5a2e", label: "Growtopia" },
    { icon: "R", bg: "#1c2333", label: "Runescape proxy" },
    { icon: "🕹️", label: "Gaming" },
  ],
  [
    { icon: "🛰️", label: "UDP protocol" },
    { icon: "📋", label: "Survey" },
    { icon: "✈️", label: "Travel" },
    { icon: "🛫", label: "Flight booking proxy" },
    { icon: "Ⓜ️", label: "Meta Ads" },
    { icon: "📸", label: "Instagram ads" },
    { icon: "🔗", label: "P2P" },
  ],
  [
    { icon: "V", bg: "#e60000", label: "Vodafone proxy" },
    { icon: "📺", label: "WatchSoMuch" },
    { icon: "☮️", label: "Craigslist" },
    { icon: "📈", label: "Stock market data" },
    { icon: "T", bg: "#e20074", label: "T-Mobile proxy" },
    { icon: "📦", label: "Scrapebox", pill: "50M+ IPs" },
    { icon: "🔄", label: "Traffic arbitrage" },
  ],
];

const buildCoverageTabs = (d: Dict) => [
  {
    id: "countries",
    label: d.coverage.tabs[0]!,
    cards: [
      ...d.coverage.countries.map((label, i): CoverageCard => ({
        icon: "",
        img: flag(countryFlags[i]!),
        label,
        ...(countryPills[i] ? { pill: countryPills[i]! } : {}),
      })),
      allCard(d.coverage.allCountries),
    ],
  },
  ...serviceTabs.map((cards, i) => ({
    id: `tab-${i}`,
    label: d.coverage.tabs[i + 1]!,
    cards: [...cards, allCard(d.coverage.allServices)],
  })),
];

const proxyFeatureIcons = [UserRound, Network, Network, SlidersVertical, RefreshCw, Fingerprint];
const whyIcons = [Share2, Globe, Medal, Cog, ClipboardCheck, CreditCard];
const caseImages = [
  caseScraping,
  caseSocial,
  caseEcommerce,
  caseSecurity,
  caseQa,
  caseArbitrage,
  caseReviews,
  caseAiData,
  caseBrand,
];

const partners = [
  { name: "octo browser", Icon: Globe, bg: "oklch(0.62 0.19 250)", color: "oklch(0.35 0.1 250)" },
  { name: "DUOPLUS", sub: "CLOUD PHONE", Icon: Cloud, bg: "oklch(0.6 0.18 250)", color: "oklch(0.3 0.06 250)" },
  { name: "Dolphin{anty}", Icon: Fish, bg: "oklch(0.61 0.257 292)", color: "oklch(0.45 0.15 292)" },
  { name: "AdsPower", Icon: Zap, bg: "oklch(0.58 0.2 255)", color: "oklch(0.35 0.1 255)" },
  { name: "Undetectable", Icon: EyeOff, bg: "oklch(0.55 0.02 286)", color: "oklch(0.4 0.03 286)" },
  { name: "MoreLogin", Icon: Mountain, bg: "oklch(0.65 0.15 200)", color: "oklch(0.4 0.08 200)" },
];

function Brand({ d, lang }: { d: Dict; lang: Lang }) {
  return (
    <Link to={lang === "uk" ? "/" : "/ru"} className="brand" aria-label={d.header.brandAria}>
      <span className="brand-mark" aria-hidden="true">
        <span />
      </span>
      <span className="brand-name">Ikata Proxy</span>
    </Link>
  );
}

function LanguageSwitch({ lang }: { lang: Lang }) {
  return (
    <span className="language">
      {lang === "uk" ? (
        <Link to="/ru" aria-label="Русский язык" hrefLang="ru">
          <img src={flag("ru")} alt="" />
        </Link>
      ) : (
        <Link to="/" aria-label="Українська мова" hrefLang="uk">
          <img src={flag("ua")} alt="" />
        </Link>
      )}
    </span>
  );
}

function TrustScore({ d }: { d: Dict }) {
  return (
    <div className="trust-score" aria-label={d.trust.aria}>
      <span className="trust-label">{d.trust.label}</span>
      <span className="trust-stars" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((star) => (
          <span key={star}>★</span>
        ))}
      </span>
      <a href="#reviews">{d.trust.reviews}</a>
      <span className="trustpilot"><b>★</b> Trustpilot</span>
    </div>
  );
}

function CoverageSection({ d }: { d: Dict }) {
  const tabs = buildCoverageTabs(d);
  const [activeTab, setActiveTab] = useState(tabs[0]!.id);
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]!;

  return (
    <section className="coverage-section" aria-labelledby="coverage-title">
      <h2 id="coverage-title">{d.coverage.title}</h2>

      <div className="coverage-tabs" role="tablist" aria-label={d.coverage.tabsAria}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab}
            className={tab.id === activeTab ? "is-active" : undefined}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="coverage-panel" role="tabpanel">
        <ul className="coverage-grid">
          {active.cards.map((card, index) => (
            <li key={`${card.label}-${index}`} className="coverage-card">
              <span
                className="coverage-icon"
                style={card.bg ? { background: card.bg, color: "#fff" } : undefined}
                aria-hidden="true"
              >
                {card.img ? <img src={card.img} alt="" loading="lazy" /> : card.icon}
              </span>
              <span className="coverage-label">{card.label}</span>
              {card.pill && <span className="coverage-pill">{card.pill}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhySection({ d }: { d: Dict }) {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <h2 id="why-title">{d.why.title}</h2>
      <ul className="why-grid">
        {d.why.cards.map(({ title, text }, i) => {
          const Icon = whyIcons[i]!;
          return (
            <li key={title} className="why-card">
              <span className="why-icon" aria-hidden="true">
                <Icon size={44} strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function UseCasesSection({ d }: { d: Dict }) {
  return (
    <section className="cases-section" aria-labelledby="cases-title">
      <div className="cases-head">
        <h2 id="cases-title">{d.cases.title}</h2>
        <a className="cases-all" href="#cases">{d.cases.all}</a>
      </div>
      <ul className="cases-grid">
        {d.cases.items.map(({ title, text, alt }, i) => (
          <li key={title} className="case-card">
            <h3>{title}</h3>
            <img src={caseImages[i]!} alt={alt} loading="lazy" width={768} height={512} />
            <p>{text}</p>
            <a className="case-more" href={`#case-${title}`}>
              {d.cases.more} <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ReviewsSection({ d }: { d: Dict }) {
  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-head">
        <h2 id="reviews-title">{d.reviews.title}</h2>
        <a className="reviews-all" href="#all-reviews">{d.reviews.all}</a>
      </div>
      <ul className="reviews-grid">
        {d.reviews.items.map(({ title, text, country, name }) => (
          <li key={name} className="review-card">
            <div className="review-top">
              <span className="review-stars" aria-label={d.reviews.ratingAria}>
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </span>
              <Quote size={40} strokeWidth={1.5} className="review-quote" aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="review-author">
              <span><MapPin size={14} strokeWidth={2} aria-hidden="true" /> {country}</span>
              <span><UserRound size={14} strokeWidth={2} aria-hidden="true" /> {name}</span>
            </div>
            <a className="review-more" href={`#review-${name}`}>
              {d.reviews.more} <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <div className="reviews-dots" aria-hidden="true">
        <span className="is-active" />
        <span />
        <span />
      </div>
    </section>
  );
}

function PartnersSection({ d }: { d: Dict }) {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="partners-head">
        <h2 id="partners-title">{d.partners.title}</h2>
        <a className="partners-all" href="#partners">{d.partners.all}</a>
      </div>
      <ul className="partners-panel">
        {partners.map(({ name, sub, Icon, bg, color }) => (
          <li key={name} className="partner-logo">
            <span className="partner-mark" style={{ background: bg }} aria-hidden="true">
              <Icon size={22} strokeWidth={2} color="#fff" />
            </span>
            <span className="partner-name" style={{ color }}>
              {name}
              {sub && <small>{sub}</small>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FaqSection({ d }: { d: Dict }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <h2 id="faq-title">{d.faq.title}</h2>
      <div className="faq-list">
        {d.faq.items.map(({ q, a }, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq-item${isOpen ? " open" : ""}`} key={q}>
              <div className="faq-row">
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {q}
                </button>
                <button
                  className="faq-toggle"
                  aria-label={isOpen ? d.faq.hide : d.faq.show}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {isOpen ? <X size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                </button>
                {isOpen && (
                  <p className="faq-answer" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`}>
                    {a.split("\n").map((line, j) => (
                      <span key={j}>{line}<br /></span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SiteFooter({ d }: { d: Dict }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-hosting" href="#hosting">{d.footer.hosting}</a>
        <div className="footer-bottom">
          <p>{d.footer.copyright}</p>
          <nav className="footer-links" aria-label={d.footer.legalAria}>
            <a href="#privacy">{d.footer.privacy}</a>
            <a href="#terms">{d.footer.terms}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function LocalizedHome({ lang }: { lang: Lang }) {
  const d = getDict(lang);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Brand d={d} lang={lang} />

          <nav className="desktop-nav" aria-label={d.header.navAria}>
            {d.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitch lang={lang} />
            <a className="login-link" href="#login">{d.header.login}</a>
            <a className="header-cta" href="#signup">{d.header.signup}</a>
          </div>

          <button className="mobile-menu" type="button" aria-label={d.header.menu}>
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </header>

      <a className="promo-bar" href="#rating">
        <span>{d.promo.tag}</span>
        <Trophy size={20} fill="currentColor" aria-hidden="true" />
        <strong>{d.promo.text}</strong>
      </a>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-panel">
          <TrustScore d={d} />

          <h1 id="hero-title">
            {d.hero.h1a} <span>{d.hero.h1b}</span>
          </h1>

          <p className="hero-description">{d.hero.desc}</p>

          <div className="hero-actions">
            <a className="primary-action" href="#signup">
              {d.header.signup} <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a className="google-action" href="#google-signup">
              <span className="google-g" aria-hidden="true">G</span>
              {d.hero.googleSignup}
            </a>
          </div>

          <div className="proxy-offer">
            <div className="offer-main">
              <p className="offer-kicker">
                {d.offer.kicker.map(([bold, rest]) => (
                  <span key={bold}>
                    <b>{bold}</b> {rest}
                    <br />
                  </span>
                ))}
              </p>
              <h2>{d.offer.h2}</h2>
              <h3>{d.offer.h3}</h3>

              <div className="price-tag">
                <strong>{d.offer.price}</strong>
                <span>{d.offer.priceNote[0]}<br />{d.offer.priceNote[1]}</span>
              </div>
            </div>

            <div className="offer-benefits">
              <p>
                {d.offer.benefitsTitle.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
              <ul>
                {d.offer.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span><Check size={11} strokeWidth={4} /></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <a className="offer-arrow" href="#mobile-proxies" aria-label={d.offer.arrowAria}>
              <ArrowUpRight size={39} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      <section className="growth-section" aria-labelledby="growth-title">
        <h2 id="growth-title">{d.growth.title}</h2>

        <div className="private-proxies" role="tabpanel">
          <div className="private-heading">
            <h3>{d.growth.privateTitle}</h3>
            <p>{d.growth.privateText}</p>
          </div>

          <article className="mobile-proxy-card" id="mobile-proxies">
            <span className="unlimited-badge">{d.growth.badge}</span>
            <div className="mobile-proxy-copy">
              <div className="mobile-proxy-title">
                <Smartphone size={48} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <h4>{d.growth.cardTitle}</h4>
                  <strong>{d.growth.cardPrice}</strong>
                </div>
              </div>
              <p>{d.growth.cardText}</p>
              <a href="#signup">{d.growth.cta}</a>
            </div>

            <ul className="proxy-feature-grid">
              {d.growth.features.map((label, i) => {
                const Icon = proxyFeatureIcons[i]!;
                return (
                  <li key={label}>
                    <span><Icon size={18} strokeWidth={1.8} /></span>
                    {label}
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>

      <CoverageSection d={d} />
      <WhySection d={d} />
      <UseCasesSection d={d} />
      <ReviewsSection d={d} />
      <PartnersSection d={d} />
      <FaqSection d={d} />
      <SiteFooter d={d} />
    </main>
  );
}
