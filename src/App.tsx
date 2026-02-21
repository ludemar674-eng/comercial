import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Coffee, 
  Wheat, 
  Ship, 
  Truck, 
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { translations, type Language } from './constants';
import { generateTradingImage } from './services/geminiService';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const WhatsAppButton = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
      <motion.div 
        key={lang}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-black/5 text-lead text-sm font-semibold mb-1 hidden md:block"
      >
        {t.contact.whatsapp}
      </motion.div>
      <a
        href="https://wa.me/5548991511066"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        id="whatsapp-btn"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
        <div className="relative bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-9 h-9 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'zh', label: 'ZH' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-40 transition-all duration-300",
      isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-gold font-bold text-xl">
            E
          </div>
          <div className={cn("font-bold text-lg leading-tight", isScrolled ? "text-navy" : "text-white")}>
            ESTRELA<br/><span className="text-xs tracking-[0.2em] font-medium">SÃO JOÃO</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {Object.entries(t.nav).map(([key, label]) => (
            <a 
              key={key} 
              href={`#${key}`} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                isScrolled ? "text-lead" : "text-white"
              )}
            >
              {label}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            <Globe className={cn("w-4 h-4", isScrolled ? "text-navy" : "text-white")} />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "text-xs font-bold px-2 py-1 rounded transition-colors",
                  lang === l.code 
                    ? "bg-gold text-white" 
                    : isScrolled ? "text-lead hover:bg-black/5" : "text-white hover:bg-white/10"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? "text-navy" : "text-white"} /> : <Menu className={isScrolled ? "text-navy" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {Object.entries(t.nav).map(([key, label]) => (
              <a 
                key={key} 
                href={`#${key}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lead font-medium border-b border-black/5 pb-2"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsMenuOpen(false); }}
                  className={cn(
                    "text-xs font-bold px-3 py-2 rounded border",
                    lang === l.code ? "bg-navy text-white border-navy" : "border-black/10 text-lead"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const DEFAULT_HERO = "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1920";
  const [bgImage, setBgImage] = useState<string>(DEFAULT_HERO);

  useEffect(() => {
    generateTradingImage("A vast soybean plantation at sunset with a modern cargo ship in the background, representing global agricultural export, cinematic lighting, 8k").then(img => {
      if (img) setBgImage(img);
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <img 
            src={bgImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-navy animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-gold/20 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase mb-6">
            Trading Company
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2">
              {t.hero.cta} <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto">
              {t.nav.contact}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

const About = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const DEFAULT_ABOUT = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000";
  const [aboutImage, setAboutImage] = useState<string>(DEFAULT_ABOUT);

  useEffect(() => {
    // Small delay to avoid hitting rate limits simultaneously
    const timer = setTimeout(() => {
      generateTradingImage("A modern corporate office building with glass windows, reflecting a clear blue sky, professional and solid trading company headquarters").then(img => {
        if (img) setAboutImage(img);
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-navy text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold" /> {t.nav.about}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-lead mb-6">
              {t.about.title}
            </h3>
            <p className="text-lead/70 leading-relaxed mb-8 text-lg">
              {t.about.content}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-navy/5 rounded-2xl border border-navy/10">
                <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-navy mb-2">{t.about.mission}</h4>
                <p className="text-sm text-lead/70">{t.about.missionText}</p>
              </div>
              <div className="p-6 bg-forest/5 rounded-2xl border border-forest/10">
                <div className="w-12 h-12 bg-forest text-white rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-forest mb-2">{t.about.values}</h4>
                <p className="text-sm text-lead/70">{t.about.valuesText}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-navy/5">
              {aboutImage ? (
                <img 
                  src={aboutImage} 
                  alt="Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full animate-pulse flex items-center justify-center text-navy/20">
                  <Globe className="w-12 h-12" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-white">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest font-medium opacity-80">Anos de Experiência</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Products = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const DEFAULT_IMAGES: Record<string, string> = {
    coffee: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    corn: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=600",
    soy: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e42?auto=format&fit=crop&q=80&w=600",
    grains: "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?auto=format&fit=crop&q=80&w=600"
  };
  const [images, setImages] = useState<Record<string, string>>(DEFAULT_IMAGES);

  useEffect(() => {
    const prompts = {
      coffee: "High quality roasted coffee beans and green coffee beans in burlap sacks, professional lighting",
      corn: "Golden corn kernels in a large storage facility, agricultural commodity photography",
      soy: "Soybean seeds in a pile, macro photography, high quality agricultural product",
      grains: "Assorted grains like wheat, barley and rye in glass jars or sacks, clean background"
    };

    // Stagger requests to respect rate limits
    Object.entries(prompts).forEach(([key, prompt], index) => {
      setTimeout(() => {
        generateTradingImage(prompt).then(img => {
          if (img) setImages(prev => ({ ...prev, [key]: img }));
        });
      }, 2000 + (index * 1500));
    });
  }, []);

  const productList = [
    { id: 'coffee', title: t.products.coffee, desc: t.products.coffeeDesc, icon: <Coffee /> },
    { id: 'corn', title: t.products.corn, desc: t.products.cornDesc, icon: <Wheat /> },
    { id: 'soy', title: t.products.soy, desc: t.products.soyDesc, icon: <Wheat /> },
    { id: 'grains', title: t.products.grains, desc: t.products.grainsDesc, icon: <Wheat /> },
  ];

  return (
    <section id="products" className="section-padding bg-navy/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">{t.nav.products}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy">{t.products.title}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                {images[p.id] ? (
                  <img 
                    src={images[p.id]} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-navy/10 animate-pulse" />
                )}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-navy">
                  {p.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-navy mb-3">{p.title}</h4>
                <p className="text-lead/60 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
                <button className="text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba Mais <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Logistics = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const DEFAULT_LOG = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000";
  const [logImage, setLogImage] = useState<string>(DEFAULT_LOG);

  useEffect(() => {
    const timer = setTimeout(() => {
      generateTradingImage("A busy commercial port with many colorful containers and a large cargo ship, logistics and international trade concept, sunset").then(img => {
        if (img) setLogImage(img);
      });
    }, 8000); // Wait for other images to finish
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="logistics" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://picsum.photos/seed/port1/400/600" alt="Port" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-40 bg-forest rounded-3xl flex items-center justify-center p-6 text-white text-center">
                  <div>
                    <Ship className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <div className="text-xl font-bold">Global</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70">Reach</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-40 bg-navy rounded-3xl flex items-center justify-center p-6 text-white text-center">
                  <div>
                    <Truck className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <div className="text-xl font-bold">Safe</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70">Logistics</div>
                  </div>
                </div>
                <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                  {logImage ? (
                    <img src={logImage} alt="Logistics" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-full h-full bg-navy/10 animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-navy text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold" /> {t.nav.logistics}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-lead mb-6">
              {t.logistics.title}
            </h3>
            <p className="text-lead/70 leading-relaxed mb-10 text-lg">
              {t.logistics.content}
            </p>
            
            <ul className="space-y-4">
              {[
                "Operação nos principais portos brasileiros",
                "Gestão completa de documentação aduaneira",
                "Rastreamento de carga em tempo real",
                "Parcerias com as maiores transportadoras globais"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-navy font-medium">
                  <div className="w-6 h-6 bg-gold/20 text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t.contact.success);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">{t.nav.contact}</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">{t.contact.title}</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">E-mail</h4>
                  <p className="text-white/60">comercial@esjtrade.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <p className="text-white/60">+55 48 99151-1066</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <p className="text-white/60">{t.footer.address}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-lead shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">{t.contact.name}</label>
                  <input type="text" required className="w-full bg-black/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-navy transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">{t.contact.email}</label>
                  <input type="email" required className="w-full bg-black/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-navy transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">{t.contact.subject}</label>
                <input type="text" required className="w-full bg-black/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-navy transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">{t.contact.message}</label>
                <textarea rows={4} required className="w-full bg-black/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-navy transition-all resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-4">
                {t.contact.send}
              </button>
              {status && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-forest font-bold text-center">
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-lead text-white/50 py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-gold font-bold">
            E
          </div>
          <div className="font-bold text-sm text-white">
            ESTRELA SÃO JOÃO
          </div>
        </div>
        
        <div className="text-xs text-center md:text-left">
          <p>{t.footer.address}</p>
          <p className="mt-1">© {new Date().getFullYear()} Comercial Estrela São João Ltda. {t.footer.rights}</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors"><Mail className="w-5 h-5" /></a>
          <a href="#" className="hover:text-gold transition-colors"><Phone className="w-5 h-5" /></a>
          <a href="#" className="hover:text-gold transition-colors"><MapPin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Products lang={lang} />
        <Logistics lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}
