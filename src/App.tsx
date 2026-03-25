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
        <div className="text-xl font-extrabold tracking-tighter text-white uppercase">
          NovaMenti
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-on-surface-variant hover:text-white transition-colors">Services</a>
          <a href="#consulting" className="text-on-surface-variant hover:text-white transition-colors">Consulting</a>
          <a href="#team" className="text-on-surface-variant hover:text-white transition-colors">Team</a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="bg-gradient-to-br from-primary to-primary-container px-6 py-2.5 rounded-lg text-on-primary-container font-bold active:scale-[0.98] transition-transform duration-200">
            Contact us
          </button>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
          <a href="#services" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-white">Services</a>
          <a href="#consulting" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-white">Consulting</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-white">Team</a>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-[800px] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 bg-glow pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Building the Next Generation of <span className="text-gradient">LLM-Powered</span> Products
        </h1>
        <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
          Transform your concepts into intelligent reality. We combine deep technical expertise with product-led thinking to build scalable AI applications that solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-br from-primary to-primary-container px-8 py-4 rounded-lg text-on-primary-container font-bold text-lg active:scale-[0.98] transition-transform">
            Build Your Product
          </button>
          <button className="px-8 py-4 rounded-lg bg-surface-container-high border border-outline-variant/10 text-white font-bold text-lg hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
            Book a Workshop
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="glass-panel p-2 rounded-2xl relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
            alt="AI Visualization" 
            className="rounded-xl w-full shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
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
      title: "LLM Pipelines",
      desc: "Robust architectures for data processing, prompt engineering, and model orchestration. Ensuring reliability and consistency in your AI workflows.",
      icon: <GitBranch className="text-tertiary" />,
      color: "bg-tertiary/10"
    },
    {
      title: "AI Product Prototyping",
      desc: "Rapid development from concept to functional LLM MVP. Validate your AI product vision in weeks, not months.",
      icon: <Zap className="text-primary-container" />,
      color: "bg-primary-container/10"
    },
    {
      title: "Full Product Development",
      desc: "Engineering scalable, production-ready AI applications. We handle the full stack, from backend model integration to polished user interfaces.",
      icon: <Layers className="text-on-surface-variant" />,
      color: "bg-surface-container-high/50"
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-headline text-xs uppercase tracking-[0.2em] text-primary mb-4">Our Services</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6">From Idea to Production.</h3>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Have a revolutionary AI concept but lack the technical infrastructure to realize it? We bridge that gap. Hire us to rapidly validate your ideas and build a functional prototype in just a few days, at a fraction of the traditional cost.
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
              <h4 className="font-headline text-2xl font-bold text-white mb-4">{s.title}</h4>
              <p className="text-on-surface-variant mb-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-br from-primary to-primary-container px-10 py-4 rounded-xl text-on-primary-container font-bold text-lg active:scale-[0.98] transition-transform">
            Get Started
          </button>
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
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8">Consulting & Workshops.</h3>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Navigate the complex AI landscape with confidence. We provide the strategic know-how to integrate LLMs effectively into your organizational fabric.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-xl bg-surface-container-high border border-outline-variant/10">
              <BrainCircuit className="text-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">Strategic AI Consulting</h4>
                <p className="text-sm text-on-surface-variant">Roadmap development, feasibility studies, and technology stack selection for enterprise AI transformation.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-xl bg-surface-container-high border border-outline-variant/10">
              <Users className="text-tertiary shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">Hands-on AI Workshops</h4>
                <p className="text-sm text-on-surface-variant">Intensive sessions for product and engineering teams to master prompt engineering and LLM product design.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-surface-container-highest to-surface-container p-1 rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Workshop" 
              className="rounded-xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => {
  const members = [
    { name: "Alex Chen", role: "LLM Architect", desc: "Expert in transformer architectures and efficient model serving for high-scale applications." },
    { name: "Sarah Jenkins", role: "Product Lead", desc: "Bridging user needs with AI capabilities to define intuitive, high-impact product experiences." },
    { name: "David Miller", role: "Data Engineer", desc: "Specializing in RAG pipelines and vector database optimization for accurate AI retrieval." },
    { name: "Elena Rodriguez", role: "AI Strategist", desc: "Advising on AI feasibility and ethics, ensuring technical roadmaps align with business goals." }
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="team">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold text-white mb-4">Meet the Experts</h2>
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
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.name}`}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-white">{m.name}</h4>
              <p className="text-xs text-primary uppercase tracking-widest font-bold mb-2">{m.role}</p>
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
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-4">How to Work With Us</h2>
        <p className="text-on-surface-variant">A proven three-step process to take you from initial idea to a scaled production environment.</p>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden md:block"></div>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 inline-block text-left w-full">
                <p className="text-xs font-label uppercase tracking-widest text-primary-container mb-2">Step 1</p>
                <h4 className="text-3xl font-headline font-extrabold text-white mb-2">Strategy</h4>
                <p className="text-primary text-sm font-bold mb-6">AI Workshop</p>
                <p className="text-on-surface-variant text-sm mb-6">Align your team on the possibilities of LLMs and identify the most impactful use cases for your business.</p>
                <ul className="space-y-4">
                  <li className="text-sm text-on-surface flex md:flex-row-reverse md:justify-end gap-2"><CheckCircle2 size={16} className="text-primary" /> Tech Stack Audit</li>
                  <li className="text-sm text-on-surface flex md:flex-row-reverse md:justify-end gap-2"><CheckCircle2 size={16} className="text-primary" /> Use-case Prioritization</li>
                  <li className="text-sm text-on-surface flex md:flex-row-reverse md:justify-end gap-2"><CheckCircle2 size={16} className="text-primary" /> Implementation Roadmap</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(0,218,248,0.5)] z-10"></div>
            <div className="w-full md:w-1/2 md:pl-12"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12"></div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_15px_rgba(0,218,248,0.5)] z-10"></div>
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="p-8 rounded-2xl bg-surface-container-high relative overflow-hidden flex flex-col shadow-2xl border border-primary/20 w-full">
                <p className="text-xs font-label uppercase tracking-widest text-primary mb-2">Step 2</p>
                <h4 className="text-3xl font-headline font-extrabold text-white mb-2">Validation</h4>
                <p className="text-primary text-sm font-bold mb-6">AI Prototype</p>
                <p className="text-on-surface-variant text-sm mb-6">Go from concept to a functional LLM-powered proof of concept in 4-6 weeks to validate feasibility.</p>
                <ul className="space-y-4">
                  <li className="text-sm text-white flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Core LLM Integration</li>
                  <li className="text-sm text-white flex gap-2"><CheckCircle2 size={16} className="text-primary" /> UX/UI Interface</li>
                  <li className="text-sm text-white flex gap-2"><CheckCircle2 size={16} className="text-primary" /> User Testing Support</li>
                  <li className="text-sm text-white flex gap-2"><CheckCircle2 size={16} className="text-primary" /> Prompt Engineering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
              <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 inline-block text-left w-full">
                <p className="text-xs font-label uppercase tracking-widest text-primary-container mb-2">Step 3</p>
                <h4 className="text-3xl font-headline font-extrabold text-white mb-2">Scale</h4>
                <p className="text-primary text-sm font-bold mb-6">Full Build</p>
                <p className="text-on-surface-variant text-sm mb-6">End-to-end engineering of production-ready applications designed for enterprise-grade scalability.</p>
                <ul className="space-y-4">
                  <li className="text-sm text-on-surface flex md:flex-row-reverse md:justify-end gap-2"><CheckCircle2 size={16} className="text-primary" /> Production Scalability</li>
                  <li className="text-sm text-on-surface flex md:flex-row-reverse md:justify-end gap-2"><CheckCircle2 size={16} className="text-primary" /> Custom API Development</li>
                  <li className="text-sm text-on-surface flex md:flex-row-reverse md:justify-end gap-2"><CheckCircle2 size={16} className="text-primary" /> Security & Compliance</li>
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
  <section className="py-24 max-w-7xl mx-auto px-8">
    <div className="glass-panel p-10 md:p-16 rounded-[2rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">Ready to build your <span className="text-gradient">AI Product</span>?</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="name">Name</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors" 
                id="name" 
                placeholder="John Doe" 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="org">Organization</label>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors" 
                id="org" 
                placeholder="Company Inc." 
                type="text" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-on-surface-variant ml-1" htmlFor="message">What is your AI solvable problem or what is your idea?</label>
            <textarea 
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-colors min-h-[120px]" 
              id="message" 
              placeholder="Describe your vision..."
            ></textarea>
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-gradient-to-br from-primary to-primary-container px-12 py-4 rounded-xl text-on-primary-container font-bold text-lg active:scale-[0.95] transition-transform w-full md:w-auto flex items-center justify-center gap-2">
              Send <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/10 mt-20">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto font-body text-xs uppercase tracking-[0.05em]">
      <div className="text-lg font-bold text-white tracking-tighter">
        NovaMenti
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a href="#" className="text-slate-500 hover:text-white transition-colors">Services</a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">Consulting</a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
      </div>
      <div className="text-slate-500 text-center md:text-right normal-case tracking-normal">
        © 2024 NovaMenti AI Product Lab. Built for the LLM Era.
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
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
