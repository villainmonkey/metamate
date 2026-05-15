"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Shield, Cpu, Lock } from "lucide-react";

export default function BetaPage() {
  const benefits = [
    { icon: <Star size={20} />, title: "Founding Explorer Badge", desc: "Permanent cryptographic badge on your MetaMate profile." },
    { icon: <Shield size={20} />, title: "Priority Onboarding", desc: "Skip the public waitlist and mint your identity first." },
    { icon: <Cpu size={20} />, title: "Experimental Access", desc: "Get early access to our unreleased Memory Engine." },
    { icon: <Lock size={20} />, title: "Private Community", desc: "Join our core builders in a private Discord channel." }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-purple-100 selection:text-purple-900">
      <Nav />

      {/* HERO */}
      <section className="relative pt-48 pb-20 px-6 md:px-10 overflow-hidden bg-white text-center">
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Applications Open</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[1.05]">
            Join the <br />
            <span className="font-light text-gray-400">Stealth Beta.</span>
          </h1>
          
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl mx-auto">
            We are onboarding a highly curated group of founders, creators, and AI researchers to shape the foundation of the MetaMate ecosystem.
          </p>
        </div>
      </section>

      {/* BENEFITS & FORM SPLIT */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20">
          
          {/* Left Column: Context */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-6">Why Join Early?</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                The stealth beta is not just for testing—it's for building. You will directly influence the development of our emotional orchestration engine and identity protocols. This is a highly exclusive, invite-only phase.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 mb-4">
                    {b.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{b.title}</h4>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight mb-4">Beta Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="w-24 text-gray-400">Phase 1</span>
                  <span className="text-gray-900">Application Review (Ongoing)</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="w-24 text-gray-400">Phase 2</span>
                  <span className="text-gray-900">Genesis Minting (Q3 2026)</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="w-24 text-gray-400">Phase 3</span>
                  <span className="text-gray-900">A2A Protocol Testing (Q4 2026)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/50 blur-3xl rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="text-2xl font-bold tracking-tight mb-8">Request Access</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">X / Twitter</label>
                  <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" placeholder="@handle" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Occupation</label>
                  <input type="text" className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" placeholder="Founder, Designer, etc." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">I identify as a (Select all that apply)</label>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Founder', 'Creator', 'Researcher', 'Developer', 'Designer', 'AI Enthusiast'].map(tag => (
                    <button key={tag} type="button" className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:border-black hover:text-black transition-colors focus:bg-black focus:text-white focus:border-black">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Why do you want access?</label>
                <textarea className="w-full h-24 bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none" placeholder="Tell us about your interest in autonomous digital identity..." />
              </div>

              <button className="w-full h-14 bg-black text-white rounded-xl font-bold text-[15px] hover:bg-gray-800 transition-colors mt-4 flex items-center justify-center gap-2">
                Submit Application <ArrowRight size={18} />
              </button>
              
              <p className="text-[11px] text-gray-400 text-center font-medium">Due to high demand, not all applications will be accepted in Phase 1.</p>
            </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
