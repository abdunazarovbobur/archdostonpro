import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Globe, Users, Layout, Home, Building2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bosh sahifa', href: '#home' },
    { name: 'Biz haqimizda', href: '#about' },
    { name: 'Xizmatlar', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-neon/20 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-neon rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">L</span>
          </div>
          LUXE <span className="text-brand-neon">STUDIO</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-neon transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-brand-neon/20 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/interior1/1920/1080" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight"
        >
          SIZNING ORZUYINGIZDAGI <br />
          <span className="text-brand-neon">INTERYER</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Biz nafaqat dizayn yaratamiz, balki sizning turmush tarzingizni aks ettiruvchi premium darajadagi makonlarni barpo etamiz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#portfolio" 
            className="inline-flex items-center gap-2 bg-brand-neon text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all animate-pulse-neon"
          >
            LOYIHALARNI KO'RISH <ChevronRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-neon"></div>
          <img 
            src="https://picsum.photos/seed/studio/800/1000" 
            alt="Studio" 
            className="rounded-lg shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-neon"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">Biz haqimizda</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">MUKAMMALIKKA INTIQUVCHI DIZAYNERLAR JAMOASI</h3>
          <p className="text-gray-400 text-lg mb-8">
            Luxe Studio 10 yildan ortiq vaqt davomida butun dunyo bo'ylab eksklyuziv interyer loyihalarini amalga oshirib kelmoqda. Bizning falsafamiz — estetika va funksionallikning uyg'unligi.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-brand-neon mb-2">150+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Muvaffaqiyatli loyihalar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-neon mb-2">12</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Xalqaro mukofotlar</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Home size={40} />, title: 'Uy loyihasi', desc: 'Sizning shaxsiy uyingiz uchun noyob arxitektura va dizayn yechimlari.' },
    { icon: <Layout size={40} />, title: 'Ichki dizayn', desc: 'Har bir xonadonning ichki qismini san\'at asariga aylantiramiz.' },
    { icon: <Building2 size={40} />, title: 'Noturar binolar', desc: 'Ofislar, restoranlar va mehmonxonalar uchun premium dizayn.' },
    { icon: <Globe size={40} />, title: 'Masofaviy dizayn', desc: 'Dunyoning istalgan nuqtasidan turib loyihalaringizni boshqaramiz.' },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">Xizmatlarimiz</h2>
          <h3 className="text-4xl md:text-5xl font-bold">NIMALARNI TAKLIF ETAMIZ?</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-brand-dark border border-white/5 rounded-2xl hover:border-brand-neon/50 transition-all group"
            >
              <div className="text-brand-neon mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h4 className="text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-gray-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    { id: 1, category: 'interior', title: 'Modern Loft', img: 'https://picsum.photos/seed/p1/600/800' },
    { id: 2, category: 'house', title: 'Villa Azure', img: 'https://picsum.photos/seed/p2/600/600' },
    { id: 3, category: 'commercial', title: 'Tech Office', img: 'https://picsum.photos/seed/p3/600/700' },
    { id: 4, category: 'interior', title: 'Minimalist Flat', img: 'https://picsum.photos/seed/p4/600/600' },
    { id: 5, category: 'house', title: 'Mountain Cabin', img: 'https://picsum.photos/seed/p5/600/900' },
    { id: 6, category: 'commercial', title: 'Sky Bar', img: 'https://picsum.photos/seed/p6/600/600' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">LOYIHALARIMIZ GALEREYASI</h3>
          </div>
          <div className="flex gap-4 flex-wrap">
            {['all', 'interior', 'house', 'commercial'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold border transition-all uppercase",
                  filter === f ? "bg-brand-neon border-brand-neon text-white" : "border-white/10 text-gray-500 hover:border-brand-neon"
                )}
              >
                {f === 'all' ? 'Barchasi' : f === 'interior' ? 'Ichki dizayn' : f === 'house' ? 'Uy loyihalari' : 'Noturar'}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-xl break-inside-avoid"
              >
                <img src={p.img} alt={p.title} className="w-full h-auto group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-neon/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold">{p.title}</h4>
                    <p className="text-sm uppercase tracking-widest mt-2">Batafsil ko'rish</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);
  const faqs = [
    { q: "Dizayn loyihasi qancha vaqt oladi?", a: "O'rtacha loyiha 4 haftadan 12 haftagacha davom etadi, bu loyihaning murakkabligiga bog'liq." },
    { q: "Narxlar qanday belgilanadi?", a: "Narxlar kvadrat metrga qarab yoki loyihaning umumiy murakkabligidan kelib chiqib individual hisoblanadi." },
    { q: "Masofaviy ishlash imkoniyati bormi?", a: "Ha, biz dunyoning istalgan nuqtasidan onlayn konsultatsiya va dizayn xizmatlarini taqdim etamiz." },
    { q: "Mualliflik nazorati nima?", a: "Bu dizaynerning qurilish jarayonida loyihaga to'liq mosligini tekshirib borish xizmatidir." },
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">FAQ</h2>
          <h3 className="text-4xl font-bold">KO'P BERILADIGAN SAVOLLAR</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-6 flex justify-between items-center bg-brand-dark hover:bg-brand-dark/80 transition-colors"
              >
                <span className="font-bold text-lg text-left">{f.q}</span>
                <ChevronDown className={cn("transition-transform", active === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-gray-400 border-t border-white/5">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteractiveMap = () => {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "none",
      projection: am5map.geoMercator(),
    }));

    const polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    }));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0x222222),
      stroke: am5.color(0x333333)
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x2424fa)
    });

    // Highlight some countries
    polygonSeries.data.setAll([
      { id: "UZ", settings: { fill: am5.color(0x2424fa) } },
      { id: "US", settings: { fill: am5.color(0x2424fa) } },
      { id: "AE", settings: { fill: am5.color(0x2424fa) } },
      { id: "GB", settings: { fill: am5.color(0x2424fa) } }
    ]);

    return () => root.dispose();
  }, []);

  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">Global</h2>
          <h3 className="text-4xl font-bold">BIZNING GEOGRAFIYAMIZ</h3>
        </div>
        <div id="chartdiv" className="w-full h-[500px] bg-brand-black/50 rounded-3xl border border-white/5"></div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Alex Johnson", role: "Bosh dizayner", img: "https://picsum.photos/seed/t1/400/400" },
    { name: "Sarah Miller", role: "Arxitektor", img: "https://picsum.photos/seed/t2/400/400" },
    { name: "David Chen", role: "3D Vizualizator", img: "https://picsum.photos/seed/t3/400/400" },
    { name: "Elena Petrova", role: "Loyiha menejeri", img: "https://picsum.photos/seed/t4/400/400" },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">Jamoa</h2>
          <h3 className="text-4xl font-bold">BIZNING MUTAXASSISLAR</h3>
        </div>

        <div className="flex gap-8 animate-infinite-scroll">
          {[...members, ...members].map((m, i) => (
            <div key={i} className="min-w-[300px] bg-brand-dark p-6 rounded-2xl border border-white/5">
              <img src={m.img} alt={m.name} className="w-full aspect-square object-cover rounded-xl mb-6" referrerPolicy="no-referrer" />
              <h4 className="text-xl font-bold">{m.name}</h4>
              <p className="text-brand-neon text-sm uppercase tracking-widest">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 30s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const phoneRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneRef.current) {
      intlTelInput(phoneRef.current, {
        initialCountry: "uz",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      } as any);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-brand-neon font-bold tracking-widest text-sm mb-4 uppercase">Kontakt</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">LOYIHAINGIZNI BIZ BILAN BOSHLANG</h3>
          <p className="text-gray-400 text-lg mb-10">
            Sizning g'oyalaringizni hayotga tatbiq etishga tayyormiz. Formani to'ldiring va biz siz bilan 24 soat ichida bog'lanamiz.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-neon/10 rounded-full flex items-center justify-center text-brand-neon"><Phone /></div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Telefon</div>
                <div className="font-bold">+998 90 123 45 67</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-neon/10 rounded-full flex items-center justify-center text-brand-neon"><Mail /></div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Email</div>
                <div className="font-bold">info@luxestudio.uz</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-neon/10 rounded-full flex items-center justify-center text-brand-neon"><MapPin /></div>
              <div>
                <div className="text-sm text-gray-500 uppercase">Manzil</div>
                <div className="font-bold">Toshkent sh., Amir Temur ko'chasi, 108</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-black p-8 rounded-3xl border border-white/5">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"><Globe size={40} /></div>
              <h4 className="text-2xl font-bold mb-2">Xabar yuborildi!</h4>
              <p className="text-gray-400">Tez orada siz bilan bog'lanamiz.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-brand-neon font-bold">Yana yuborish</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Ismingiz</label>
                <input name="name" required type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-neon outline-none transition-colors" placeholder="Ismingizni kiriting" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Telefon raqamingiz</label>
                <input ref={phoneRef} name="phone" required type="tel" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-neon outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Xabar</label>
                <textarea name="message" required className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-neon outline-none transition-colors h-32 resize-none" placeholder="Loyiha haqida qisqacha..."></textarea>
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-brand-neon text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'YUBORILMOQDA...' : 'XABARNI YUBORISH'}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm text-center">Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold tracking-tighter">
          LUXE <span className="text-brand-neon">STUDIO</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-brand-neon transition-colors"><Instagram /></a>
          <a href="#" className="text-gray-500 hover:text-brand-neon transition-colors"><Facebook /></a>
          <a href="#" className="text-gray-500 hover:text-brand-neon transition-colors"><Twitter /></a>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Luxe Interior Studio. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <InteractiveMap />
      <Team />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
