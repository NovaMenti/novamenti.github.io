import { motion } from "motion/react";
import { 
  MessageSquare, 
  GitBranch, 
  Zap, 
  Layers, 
  BrainCircuit, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/40 backdrop-blur-[20px] shadow-[0_24px_48px_-12px_rgba(0,218,248,0.08)]">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto font-headline text-sm font-medium tracking-wide">
        <div className="flex items-center">
          <img src="/logo-name.png" alt="NovaMenti" className="h-8 w-auto md:h-9" />
        </div>
        
        <div className="flex items-center gap-6 ml-auto">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-on-surface-variant hover:text-white transition-colors">Services</a>
            <a href="#consulting" className="text-on-surface-variant hover:text-white transition-colors">Consulting</a>
          </nav>
          <a
            href="#contact"
            className="bg-primary/65 px-6 py-2.5 rounded-lg text-on-primary-container font-bold hover:bg-primary/80 active:scale-[0.98] transition-colors duration-200 max-[440px]:hidden"
          >
            Contact us
          </a>
          <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container p-8 flex flex-col gap-4 border-b border-outline-variant/10"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-on-surface">Services</a>
          <a href="#consulting" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-on-surface">Consulting</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-on-surface">Contact</a>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-[800px] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 bg-glow pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-1 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
          Building the Next Generation of <span className="text-gradient">AI-Powered</span> Products
        </h1>
        <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
          Transform your concepts into intelligent reality. We combine deep technical expertise with product-led thinking to build scalable AI applications that solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-primary/70 px-8 py-4 rounded-lg text-on-primary-container font-bold text-lg hover:bg-primary/85 active:scale-[0.98] transition-colors"
          >
            Let’s talk
          </a>
          <a
            href="#consulting"
            className="px-8 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold text-lg hover:bg-slate-900 transition-colors active:scale-[0.98]"
          >
            Book a Workshop
          </a>
        </div>
      </motion.div>
      
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Search & Chat Bots",
      desc: "Custom LLM-driven interfaces for complex data retrieval and interaction. We build conversational agents that actually understand your business data.",
      icon: <MessageSquare className="text-primary" />,
      color: "bg-primary/10"
    },
    {
      title: "Data & AI Pipelines",
      desc: "Robust architectures for data processing, prompt engineering, and model orchestration. Ensuring reliability and consistency in your data driven workflows.",
      icon: <GitBranch className="text-tertiary" />,
      color: "bg-tertiary/10"
    },
    {
      title: "AI Product Prototyping",
      desc: "Rapid development from concept to functional proof of concept. Validate your AI product vision in weeks, not months.",
      icon: <Zap className="text-primary-container" />,
      color: "bg-primary-container/10"
    },
    {
      title: "Full Product Development",
      desc: "Engineering scalable, production-ready AI applications. We handle the full stack, from training your AI models to polished user interfaces.",
      icon: <Layers className="text-on-surface-variant" />,
      color: "bg-surface-container-high/50"
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-headline text-xs uppercase tracking-[0.2em] text-primary mb-4">Our Services</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">See your idea become reality</h3>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Have a revolutionary AI concept but lack the technical infrastructure to realize it?<br />
            Trying to find information in your data but don't know where to start?<br />
            Let us build your idea into a functional prototype in just a few days, at a fraction of the traditional cost.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl group hover:bg-surface-container-highest transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-6`}>
                {s.icon}
              </div>
              <h4 className="font-headline text-2xl font-bold text-on-surface mb-4">{s.title}</h4>
              <p className="text-on-surface-variant mb-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="bg-primary/85 px-10 py-4 rounded-xl text-on-primary-container font-bold text-lg hover:bg-primary active:scale-[0.98] transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

const Consulting = () => (
  <section className="py-32 relative overflow-hidden" id="consulting">
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-xs uppercase tracking-[0.2em] text-primary mb-4">Strategic Guidance</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-8">Consulting & Workshops</h3>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Navigate the complex AI landscape with confidence. We provide the strategic know-how to integrate LLMs effectively into your organizational fabric.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-xl bg-surface-container-high border border-outline-variant/10">
              <BrainCircuit className="text-primary shrink-0" />
              <div>
                <h4 className="text-on-surface font-bold mb-1">Strategic AI Consulting</h4>
                <p className="text-sm text-on-surface-variant">Roadmap development, feasibility studies, and technology stack selection for enterprise AI transformation.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-xl bg-surface-container-high border border-outline-variant/10">
              <Users className="text-tertiary shrink-0" />
              <div>
                <h4 className="text-on-surface font-bold mb-1">Hands-on AI Workshops</h4>
                <p className="text-sm text-on-surface-variant">Intensive sessions for product and engineering teams to master prompt engineering and LLM product design.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:mt-16">
          <div className="bg-gradient-to-br from-surface-container-highest to-surface-container p-1 rounded-2xl shadow-2xl">
            <img
              src="/AI%20workshop%20in%20blue%20shirts.png"
              alt="AI workshop session"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <a
          href="#contact"
          className="bg-primary/85 px-12 py-4 rounded-xl text-on-primary-container font-bold text-lg hover:bg-primary active:scale-[0.98] transition-colors"
        >
          Contact us
        </a>
      </div>
    </div>
  </section>
);

const Team = () => {
  const members = [
    {
      name: "Dr. Joel Niklaus",
      role: "CEO",
      degrees: "PhD, Computer Science",
      desc: "Strategy and delivery focus: turning AI roadmaps into practical products, partnerships, and measurable outcomes.",
      imageSrc: "/niklaus.jpg",
    },
    {
      name: "Alex Nyffenegger",
      role: "AI engineer",
      degrees: "MSc Computer Science",
      desc: "Technical leadership across LLM systems: architecture, evaluation, reliability, and production-ready engineering.",
      imageSrc: "/nyffenegger.png",
    },
    {
      name: "Tobias Brugger",
      role: "AI engineer",
      degrees: "Cand. Msc Computer Science",
      desc: "Applied ML engineering: data pipelines, retrieval systems (RAG), and scalable LLM features from raw inputs to production.",
      // Brugger image not added yet.
      imageSrc: null,
    },
    {
      name: "Dr. Christian Birchler",
      role: "AI specialist",
      degrees: "PhD, Computer Science",
      desc: "Specialist in model evaluation and safe, grounded AI assistants—especially for structured and unstructured knowledge.",
      imageSrc: "/birchler.jpg",
    },
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="team">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Meet the Experts</h2>
          <p className="text-on-surface-variant">Product-led builders at the intersection of AI and Engineering.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-square bg-surface-container-high rounded-2xl mb-4 overflow-hidden relative">
                {m.imageSrc ? (
                  <img
                    src={m.imageSrc}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-container-highest/40">
                    <span className="text-white/70 font-headline text-5xl font-extrabold">
                      {m.name.slice(0, 1)}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="font-bold text-on-surface">{m.name}</h4>
              <p className="text-xs text-primary uppercase tracking-widest font-bold mb-2">{m.role}</p>
              {m.degrees ? (
                <p className="text-xs text-on-surface-variant leading-relaxed px-4 mb-3">{m.degrees}</p>
              ) : null}
              <p className="text-xs text-on-surface-variant leading-relaxed px-4">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-32" id="pricing">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4">Let's work together</h2>
        <p className="text-on-surface-variant">A proven three-step process to take you from initial idea to a scaled production environment.</p>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block"></div>
        
        <div className="space-y-12 md:space-y-0">
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <div className="p-8 rounded-2xl bg-surface-container-high relative overflow-hidden flex flex-col shadow-2xl border border-primary/20 w-full z-20">
                <p className="text-xs font-label uppercase tracking-widest text-primary-container mb-2">Step 1</p>
                <h4 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Strategy</h4>
                <p className="text-primary text-sm font-bold mb-6">Workshop</p>
                <p className="text-on-surface-variant text-sm mb-6">Align your team on the possibilities of LLMs and identify the most impactful use cases for your business.</p>
                <ul className="space-y-4">
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Tech Stack Audit</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Use-case Prioritization</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Implementation Roadmap</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(0,218,248,0.5)] z-10"></div>
            <div className="w-full md:w-1/2 md:pl-12"></div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:-mt-20">
            <div className="w-full md:w-1/2 md:pr-12"></div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(0,218,248,0.5)] z-10"></div>
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="p-8 rounded-2xl bg-surface-container-high relative overflow-hidden flex flex-col shadow-2xl border border-primary/20 w-full z-20">
                <p className="text-xs font-label uppercase tracking-widest text-primary mb-2">Step 2</p>
                <h4 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Validation</h4>
                <p className="text-primary text-sm font-bold mb-6">AI Prototype</p>
                <p className="text-on-surface-variant text-sm mb-6">Go from concept to a functional AI-powered proof of concept in 4-6 weeks to validate feasibility.</p>
                <ul className="space-y-4">
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Core LLM Integration</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> UX/UI Interface</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> User Testing Support</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Prompt Engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center md:mt-6">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <div className="p-8 rounded-2xl bg-surface-container-high relative overflow-hidden flex flex-col shadow-2xl border border-primary/20 w-full z-20">
                <p className="text-xs font-label uppercase tracking-widest text-primary-container mb-2">Step 3</p>
                <h4 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Scale</h4>
                <p className="text-primary text-sm font-bold mb-6">Full Build</p>
                <p className="text-on-surface-variant text-sm mb-6">End-to-end engineering of production-ready applications designed for enterprise-grade scalability.</p>
                <ul className="space-y-4">
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Production Scalability</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Custom API Development</li>
                  <li className="text-sm text-on-surface flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Security & Compliance</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(0,218,248,0.5)] z-10"></div>
            <div className="w-full md:w-1/2 md:pl-12"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 max-w-7xl mx-auto px-8 max-[440px]:px-4">
    <div className="glass-panel p-10 md:p-16 rounded-[2rem] relative overflow-hidden max-[440px]:p-6">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface mb-10 text-center">Ready to build your <span className="text-gradient">AI Product</span>?</h2>
        <form
          className="space-y-6"
          action="https://formspree.io/f/mykbvjop"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New NovaMenti inquiry" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="name">Name</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 transition-colors" 
                id="name" 
                name="name"
                placeholder="John Doe" 
                type="text" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="org">Organization</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 transition-colors" 
                id="org" 
                name="org"
                placeholder="Company Inc." 
                type="text" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="email">Email</label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 transition-colors"
              id="email"
              name="email"
              placeholder="you@company.com"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="message">What is your AI solvable problem or what is your idea?</label>
            <textarea 
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 transition-colors min-h-[120px]" 
              id="message" 
              name="message"
              placeholder="Describe your vision..."
              required
            ></textarea>
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-primary/85 px-12 py-4 rounded-xl text-on-primary-container font-bold text-lg hover:bg-primary active:scale-[0.95] transition-colors w-full md:w-auto flex items-center justify-center gap-2">
              Send <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-lowest w-full py-8 md:py-12 px-8 border-t border-outline-variant/10 mt-10 md:mt-20">
    <div className="flex flex-col md:flex-row justify-start items-center gap-6 max-w-7xl mx-auto font-body text-xs uppercase tracking-[0.05em]">
      <div className="text-lg font-bold text-white tracking-tighter">
        NovaMenti
      </div>
      <div className="flex flex-wrap justify-start gap-8">
        <a href="#services" className="text-on-surface-variant hover:text-on-surface transition-colors">Services</a>
        <a href="#consulting" className="text-on-surface-variant hover:text-on-surface transition-colors">Consulting</a>
      </div>
      <div className="text-on-surface-variant text-center md:text-right normal-case tracking-normal md:ml-auto">
        © 2026 NovaMenti AI Product Lab. Built for the LLM Era.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Consulting />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
